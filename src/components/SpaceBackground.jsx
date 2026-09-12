import React, { useEffect, useRef } from "react";

export const SpaceBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId = null;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let stars = [];
    let shootingStars = [];
    let spaceships = [];
    let asteroids = [];
    let lastScrollY = window.scrollY;
    let scrollDelta = 0;

    // Timers for spontaneous spawns
    let nextShootingStarTime = Date.now() + 1200; // First shooting star appears quickly
    let nextAsteroidTime = Date.now() + 2500;     // First asteroid appears shortly after
    let nextSpaceshipTime = Date.now() + 4200;    // First spaceship appears soon

    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false,
    };

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const COLORS = [
      { r: 220, g: 235, b: 250 }, // Cool starlight white/blue (65%)
      { r: 92, g: 209, b: 184 },  // Portfolio Teal (20%)
      { r: 232, g: 197, b: 131 }, // Celestial Brass (15%)
    ];

    const pickColor = () => {
      const rand = Math.random();
      if (rand < 0.65) return COLORS[0];
      if (rand < 0.85) return COLORS[1];
      return COLORS[2];
    };

    // --- STARS SETUP ---
    const createStar = () => {
      const depth = 0.3 + Math.random() * 0.7; // 0.3 (far/slow) to 1.0 (near/fast)
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.16 * depth,
        vy: (Math.random() - 0.5) * 0.16 * depth,
        radius: (0.7 + Math.random() * 1.5) * depth,
        baseAlpha: 0.25 + Math.random() * 0.5,
        twinkleSpeed: 0.015 + Math.random() * 0.025,
        twinklePhase: Math.random() * Math.PI * 2,
        color: pickColor(),
        depth,
        dispX: 0,
        dispY: 0,
      };
    };

    const initStars = () => {
      const area = width * height;
      const count = Math.min(Math.max(Math.floor(area / 16000), 32), 78);
      stars = [];
      for (let i = 0; i < count; i++) {
        stars.push(createStar());
      }
    };

    // --- SHOOTING STARS (METEORS) ---
    const spawnShootingStar = () => {
      // Come fast across diagonally from upper screen
      const startX = Math.random() * (width * 0.9) + width * 0.05;
      const startY = Math.random() * (height * 0.45);
      // Trajectory angle ~32° to 58° downwards
      const angle = Math.PI * (0.18 + Math.random() * 0.16);
      const speed = 16 + Math.random() * 9;
      const length = 110 + Math.random() * 90;
      const isTeal = Math.random() > 0.45;

      shootingStars.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length,
        life: 0,
        maxLife: 35 + Math.floor(Math.random() * 22),
        isTeal,
      });

      // Schedule next: random 3 to 6.5 seconds
      nextShootingStarTime = Date.now() + 3000 + Math.random() * 3500;
    };

    // --- SPACESHIPS ---
    const spawnSpaceship = () => {
      // Much slower, cruising across horizontally with slight inclination
      const fromLeft = Math.random() > 0.4;
      const startX = fromLeft ? -45 : width + 45;
      const startY = Math.random() * (height * 0.7) + height * 0.12;
      const angle = fromLeft
        ? (Math.random() - 0.5) * 0.28 // -8° to +8°
        : Math.PI + (Math.random() - 0.5) * 0.28;
      const speed = 0.85 + Math.random() * 0.45; // Slow cruising speed
      const isTealEngine = Math.random() > 0.35;

      spaceships.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        angle,
        speed,
        isTealEngine,
        trail: [],
        beaconTick: 0,
      });

      // Schedule next: random 14 to 26 seconds
      nextSpaceshipTime = Date.now() + 14000 + Math.random() * 12000;
    };

    // --- ASTEROIDS ---
    const spawnAsteroid = () => {
      // Much slower, drifting and tumbling across
      const edge = Math.floor(Math.random() * 3); // 0: top, 1: left, 2: right
      let startX = 0;
      let startY = 0;
      let targetX = 0;
      let targetY = 0;

      if (edge === 0) {
        startX = Math.random() * width;
        startY = -35;
        targetX = Math.random() * width;
        targetY = height + 35;
      } else if (edge === 1) {
        startX = -35;
        startY = Math.random() * (height * 0.65);
        targetX = width + 35;
        targetY = Math.random() * (height * 0.65) + height * 0.25;
      } else {
        startX = width + 35;
        startY = Math.random() * (height * 0.65);
        targetX = -35;
        targetY = Math.random() * (height * 0.65) + height * 0.25;
      }

      const angle = Math.atan2(targetY - startY, targetX - startX);
      const speed = 0.38 + Math.random() * 0.36; // Very slow drift
      const radius = 10 + Math.random() * 11; // 10px to 21px
      const verticesCount = 8;
      const offsets = [];
      for (let i = 0; i < verticesCount; i++) {
        offsets.push(0.72 + Math.random() * 0.48);
      }

      // Random craters for craggy realism
      const craters = [
        {
          x: (Math.random() - 0.5) * radius * 0.7,
          y: (Math.random() - 0.5) * radius * 0.7,
          r: radius * (0.18 + Math.random() * 0.14),
        },
      ];

      asteroids.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        rot: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.014, // slow tumbling
        radius,
        offsets,
        craters,
        verticesCount,
      });

      // Schedule next: random 11 to 22 seconds
      nextAsteroidTime = Date.now() + 11000 + Math.random() * 11000;
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      initStars();

      if (prefersReducedMotion) {
        drawStatic();
      }
    };

    const onMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const onMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      scrollDelta += (currentScrollY - lastScrollY) * 0.25;
      lastScrollY = currentScrollY;
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color.r}, ${s.color.g}, ${s.color.b}, ${s.baseAlpha * 0.7})`;
        ctx.fill();
      }
    };

    const render = () => {
      const now = Date.now();
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse lerping
      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;

      // Decay scroll delta inertia
      const currentScrollDelta = scrollDelta * 0.15;
      scrollDelta *= 0.85;

      // Check spawn timers
      if (now >= nextShootingStarTime && shootingStars.length < 2) {
        spawnShootingStar();
      }
      if (now >= nextSpaceshipTime && spaceships.length < 2) {
        spawnSpaceship();
      }
      if (now >= nextAsteroidTime && asteroids.length < 3) {
        spawnAsteroid();
      }

      const connectionDistance = 85;
      const mouseDistance = 130;

      // -------------------------------------------------------------
      // 1. UPDATE AND DRAW BACKGROUND STARS & CONSTELLATIONS
      // -------------------------------------------------------------
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        // Natural gentle drift
        s.x += s.vx;
        s.y += s.vy;

        // Parallax vertical drift from scroll
        s.y -= currentScrollDelta * s.depth;

        // Twinkle calculation
        s.twinklePhase += s.twinkleSpeed;
        const alpha = Math.max(
          0.1,
          s.baseAlpha + Math.sin(s.twinklePhase) * 0.25
        );

        // Mouse gravitational deflection
        if (mouse.active) {
          const dx = s.x - mouse.x;
          const dy = s.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseDistance && dist > 1) {
            const force = (1 - dist / mouseDistance) * 1.8;
            const angle = Math.atan2(dy, dx);
            s.dispX += Math.cos(angle) * force;
            s.dispY += Math.sin(angle) * force;
          }
        }

        // Dampen displacement back to base position
        s.dispX *= 0.92;
        s.dispY *= 0.92;

        // Screen wrap
        if (s.x < -10) s.x = width + 10;
        else if (s.x > width + 10) s.x = -10;

        if (s.y < -10) s.y = height + 10;
        else if (s.y > height + 10) s.y = -10;

        const renderX = s.x + s.dispX;
        const renderY = s.y + s.dispY;

        // Star core
        ctx.beginPath();
        ctx.arc(renderX, renderY, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color.r}, ${s.color.g}, ${s.color.b}, ${alpha * 0.75})`;
        ctx.fill();

        // Subtle soft halo on brighter celestial nodes
        if (s.radius > 1.4 && alpha > 0.45) {
          ctx.beginPath();
          ctx.arc(renderX, renderY, s.radius * 2.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${s.color.r}, ${s.color.g}, ${s.color.b}, ${alpha * 0.12})`;
          ctx.fill();
        }

        // Constellation connections between nearby stars
        for (let j = i + 1; j < stars.length; j++) {
          const s2 = stars[j];
          const x2 = s2.x + s2.dispX;
          const y2 = s2.y + s2.dispY;
          const dist = Math.hypot(renderX - x2, renderY - y2);

          if (dist < connectionDistance) {
            const lineAlpha = (1 - dist / connectionDistance) * 0.13 * Math.min(alpha, s2.baseAlpha);
            ctx.beginPath();
            ctx.moveTo(renderX, renderY);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = `rgba(92, 209, 184, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // Subtle interactive line to mouse cursor if close
        if (mouse.active) {
          const mDist = Math.hypot(renderX - mouse.x, renderY - mouse.y);
          if (mDist < 95) {
            const mAlpha = (1 - mDist / 95) * 0.14;
            ctx.beginPath();
            ctx.moveTo(renderX, renderY);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(232, 197, 131, ${mAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // -------------------------------------------------------------
      // 2. UPDATE AND DRAW ASTEROIDS (SLOW, TUMBLING BODIES)
      // -------------------------------------------------------------
      for (let i = asteroids.length - 1; i >= 0; i--) {
        const a = asteroids[i];
        a.x += a.vx;
        a.y += a.vy;
        a.y -= currentScrollDelta * 0.4; // subtle parallax
        a.rot += a.rotSpeed;

        ctx.save();
        ctx.translate(a.x, a.y);
        ctx.rotate(a.rot);

        // Asteroid jagged polygon silhouette
        ctx.beginPath();
        for (let j = 0; j < a.verticesCount; j++) {
          const th = (j / a.verticesCount) * Math.PI * 2;
          const r = a.radius * a.offsets[j];
          const px = Math.cos(th) * r;
          const py = Math.sin(th) * r;
          if (j === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();

        // Dark deep-space mineral body
        ctx.fillStyle = "rgba(18, 26, 38, 0.82)";
        ctx.fill();

        // Subtle cyan/brass celestial rim lighting
        ctx.strokeStyle = "rgba(92, 209, 184, 0.38)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Asteroid crater for tangible surface texture
        for (let c = 0; c < a.craters.length; c++) {
          const crater = a.craters[c];
          ctx.beginPath();
          ctx.arc(crater.x, crater.y, crater.r, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(10, 15, 23, 0.9)";
          ctx.fill();
          ctx.strokeStyle = "rgba(147, 162, 179, 0.28)";
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }

        ctx.restore();

        // Remove if drifted far out of bounds
        if (
          a.x < -60 ||
          a.x > width + 60 ||
          a.y < -60 ||
          a.y > height + 60
        ) {
          asteroids.splice(i, 1);
        }
      }

      // -------------------------------------------------------------
      // 3. UPDATE AND DRAW SPACESHIPS (SLOW, VISIBLE ORBITAL CRAFT)
      // -------------------------------------------------------------
      for (let i = spaceships.length - 1; i >= 0; i--) {
        const ship = spaceships[i];
        ship.x += ship.vx;
        ship.y += ship.vy;
        ship.y -= currentScrollDelta * 0.5;
        ship.beaconTick++;

        // Append to exhaust trail
        ship.trail.push({
          x: ship.x - Math.cos(ship.angle) * 11,
          y: ship.y - Math.sin(ship.angle) * 11,
          alpha: 0.65,
        });

        // Draw lingering engine exhaust plume
        for (let t = ship.trail.length - 1; t >= 0; t--) {
          const pt = ship.trail[t];
          pt.alpha -= 0.035;
          if (pt.alpha <= 0) {
            ship.trail.splice(t, 1);
            continue;
          }
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 1.6, 0, Math.PI * 2);
          ctx.fillStyle = ship.isTealEngine
            ? `rgba(92, 209, 184, ${pt.alpha * 0.7})`
            : `rgba(232, 197, 131, ${pt.alpha * 0.7})`;
          ctx.fill();
        }

        ctx.save();
        ctx.translate(ship.x, ship.y);
        ctx.rotate(ship.angle);

        // Draw Sleek Delta Arrowhead Hull
        ctx.beginPath();
        ctx.moveTo(14, 0);       // Nose cone
        ctx.lineTo(-7, -7);     // Port wingtip
        ctx.lineTo(-4, -2);     // Port engine inlet
        ctx.lineTo(-6, 0);      // Center engine nozzle
        ctx.lineTo(-4, 2);      // Starboard engine inlet
        ctx.lineTo(-7, 7);      // Starboard wingtip
        ctx.closePath();

        // Hull surface
        ctx.fillStyle = "rgba(20, 29, 42, 0.95)";
        ctx.fill();
        ctx.strokeStyle = "rgba(92, 209, 184, 0.75)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Cockpit visor / sensor dot
        ctx.beginPath();
        ctx.arc(4, 0, 1.4, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(232, 237, 243, 0.95)";
        ctx.fill();

        // Wingtip navigation beacon lights (blinking)
        const isBeaconOn = (ship.beaconTick % 36) < 18;
        if (isBeaconOn) {
          ctx.beginPath();
          ctx.arc(-7, -7, 1.2, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(225, 116, 106, 0.9)"; // Red port light
          ctx.fill();

          ctx.beginPath();
          ctx.arc(-7, 7, 1.2, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(92, 209, 184, 0.9)"; // Teal starboard light
          ctx.fill();
        }

        // Active engine thruster glow
        ctx.beginPath();
        ctx.arc(-6, 0, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = ship.isTealEngine
          ? "rgba(92, 209, 184, 0.9)"
          : "rgba(232, 197, 131, 0.9)";
        ctx.fill();

        ctx.restore();

        // Remove if off screen
        if (
          ship.x < -80 ||
          ship.x > width + 80 ||
          ship.y < -80 ||
          ship.y > height + 80
        ) {
          spaceships.splice(i, 1);
        }
      }

      // -------------------------------------------------------------
      // 4. UPDATE AND DRAW SHOOTING STARS (FAST, DYNAMIC STREAKS)
      // -------------------------------------------------------------
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.x += ss.vx;
        ss.y += ss.vy;
        ss.life++;

        const progress = ss.life / ss.maxLife;
        // Fade in rapidly during first 15%, then fade out gently
        let alpha = progress < 0.15 ? progress / 0.15 : 1 - (progress - 0.15) / 0.85;
        alpha = Math.max(0, Math.min(1, alpha));

        const dist = Math.hypot(ss.vx, ss.vy);
        const tailX = ss.x - (ss.vx / dist) * ss.length;
        const tailY = ss.y - (ss.vy / dist) * ss.length;

        const grad = ctx.createLinearGradient(ss.x, ss.y, tailX, tailY);
        const headColor = ss.isTeal
          ? `rgba(92, 209, 184, ${alpha * 0.95})`
          : `rgba(240, 248, 255, ${alpha * 0.95})`;
        const tailColor = ss.isTeal
          ? "rgba(92, 209, 184, 0)"
          : "rgba(217, 165, 75, 0)";

        grad.addColorStop(0, headColor);
        grad.addColorStop(1, tailColor);

        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.8;
        ctx.lineCap = "round";
        ctx.stroke();

        // Intense glowing head core
        ctx.beginPath();
        ctx.arc(ss.x, ss.y, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();

        // Remove when expired or crossed screen
        if (
          ss.life >= ss.maxLife ||
          ss.x > width + 100 ||
          ss.y > height + 100
        ) {
          shootingStars.splice(i, 1);
        }
      }

      animId = requestAnimationFrame(render);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("scroll", onScroll, { passive: true });

    // Handle tab visibility to save CPU and battery
    const onVisibilityChange = () => {
      if (document.hidden) {
        if (animId) cancelAnimationFrame(animId);
      } else if (!prefersReducedMotion) {
        animId = requestAnimationFrame(render);
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    handleResize();

    if (!prefersReducedMotion) {
      animId = requestAnimationFrame(render);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        opacity: 0.88,
        willChange: "transform",
      }}
    />
  );
};

export default SpaceBackground;
