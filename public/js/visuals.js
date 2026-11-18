/* =========================================================================
 * HỒ SƠ ĐẠI KỲ ÁN — 2.5D Interactive Detective Canvas Engine,
 * Volumetric Flashlight, Walkable Detective (WASD/Click), Polygraph & Corkboard
 * ========================================================================= */
window.KeigoVisuals = (function () {
  let weatherAnimId = null;
  let polyAnimId = null;
  let sceneAnimId = null;
  let frameCount = 0;

  let polyState = { bpm: 74, stress: 25, spike: 0 };

  // Trạng thái Thám tử điều khiển được trên hiện trường 2.5D (Click-to-Move + WASD)
  const detective = {
    x: 190,
    y: 355,
    targetX: 190,
    targetY: 355,
    facing: 1,
    walkCycle: 0,
    isMoving: false,
    pendingPoint: null,
    scanTimer: 0,
    scanTarget: null,
    mouseX: 470,
    mouseY: 220,
    keys: { w: false, a: false, s: false, d: false },
    footprints: []
  };

  // Khởi tạo điều khiển bàn phím WASD / Mũi tên
  let controlsInitialized = false;
  function initControls() {
    if (controlsInitialized) return;
    controlsInitialized = true;
    window.addEventListener('keydown', (e) => {
      if (['INPUT', 'SELECT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;
      const k = e.key.toLowerCase();
      if (k === 'w' || k === 'arrowup') detective.keys.w = true;
      if (k === 's' || k === 'arrowdown') detective.keys.s = true;
      if (k === 'a' || k === 'arrowleft') detective.keys.a = true;
      if (k === 'd' || k === 'arrowright') detective.keys.d = true;
    });
    window.addEventListener('keyup', (e) => {
      const k = e.key.toLowerCase();
      if (k === 'w' || k === 'arrowup') detective.keys.w = false;
      if (k === 's' || k === 'arrowdown') detective.keys.s = false;
      if (k === 'a' || k === 'arrowleft') detective.keys.a = false;
      if (k === 'd' || k === 'arrowright') detective.keys.d = false;
    });
  }

  // Hạt bụi sáng & mưa tuyết ngoài cửa sổ trong Canvas 2.5D
  const roomDust = Array.from({ length: 48 }, (_, i) => ({
    x: (i * 83) % 920,
    y: (i * 53) % 410,
    vx: ((i % 5) - 2) * 0.14,
    vy: -((i % 3) * 0.15 + 0.06),
    r: (i % 3) * 0.9 + 0.8,
    a: ((i % 6) + 2) * 0.06
  }));

  const windowWeather = Array.from({ length: 85 }, (_, i) => ({
    x: 115 + ((i * 97) % 690),
    y: 55 + ((i * 61) % 235),
    vy: 3.5 + (i % 4) * 1.4,
    vx: -0.8,
    r: 1.2 + (i % 3) * 0.8
  }));

  // Tọa độ các vật thể (Hotspots) trên sàn và tường phòng 2.5D (920x420)
  const SCENE_SLOTS = [
    { x: 255, y: 325, standX: 255, standY: 360 },
    { x: 465, y: 315, standX: 465, standY: 355 },
    { x: 685, y: 330, standX: 650, standY: 365 },
    { x: 345, y: 215, standX: 345, standY: 325 },
    { x: 590, y: 210, standX: 590, standY: 325 },
    { x: 755, y: 235, standX: 725, standY: 340 }
  ];

  // -------------------------------------------------------------------------
  // 1. AMBIENT BACKGROUND PARTICLES (Mưa đêm / Tuyết rơi nhẹ)
  // -------------------------------------------------------------------------
  function startWeatherCanvas(caseId) {
    const canvas = document.getElementById('ambient-canvas');
    if (!canvas) return;
    if (weatherAnimId) cancelAnimationFrame(weatherAnimId);

    const ctx = canvas.getContext('2d');
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.onresize = resize;

    const snowCases = ['tokyo-zodiac', 'inugami-curse', 'hollow-man', 'orient-express', 'honjin-murder'];
    const rainCases = ['suspect-x', 'white-night', 'malice', 'red-finger', 'and-then-none'];
    const mode = snowCases.includes(caseId) ? 'snow' : rainCases.includes(caseId) ? 'rain' : 'embers';

    const count = mode === 'rain' ? 75 : 50;
    const parts = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: mode === 'snow' ? 1.4 + Math.random() * 2.2 : 1 + Math.random() * 1.8,
      vx: mode === 'rain' ? -1.0 : (Math.random() - 0.5) * 0.5,
      vy: mode === 'rain' ? 8 + Math.random() * 5 : mode === 'snow' ? 0.7 + Math.random() * 1.2 : -0.25 - Math.random() * 0.4,
      a: 0.12 + Math.random() * 0.35
    }));

    function tick() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of parts) {
        if (mode === 'rain') {
          ctx.strokeStyle = `rgba(148, 197, 255, ${p.a * 0.55})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x + p.vx * 2, p.y + p.vy * 1.5);
          ctx.stroke();
        } else if (mode === 'snow') {
          ctx.fillStyle = `rgba(240, 248, 255, ${p.a})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillStyle = `rgba(224, 179, 84, ${p.a * 0.5})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        }
        p.x += p.vx;
        p.y += p.vy;
        if (p.y > canvas.height + 10) {
          p.y = -10;
          p.x = Math.random() * canvas.width;
        }
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
      }
      weatherAnimId = requestAnimationFrame(tick);
    }
    tick();
  }

  // -------------------------------------------------------------------------
  // 2. LUXURY DOSSIER HEADER STRIP (Cho Thẻ Vụ Án ở Sảnh Chính — Không vẽ hình que!)
  // -------------------------------------------------------------------------
  const CASE_ICONS = {
    'suspect-x': { icon: '📐', code: 'GALILEO-01', seal: '献身', sub: 'Ngoại phạm Toán học' },
    'saint': { icon: '☕', code: 'GALILEO-02', seal: '聖女', sub: 'Độc dược Nghiệm ảo' },
    'malice': { icon: '🖋️', code: 'KAGA-01', seal: '悪意', sub: 'Bản thảo Ngụy tạo' },
    'newcomer': { icon: '🏮', code: 'KAGA-02', seal: '新参', sub: 'Phố cổ Ningyocho' },
    'white-night': { icon: '✂️', code: 'OSAKA-73', seal: '白夜', sub: 'Mặt trời Đêm trắng' },
    'masquerade-hotel': { icon: '🎭', code: 'CORTESIA-04', seal: '仮面', sub: 'Mật mã Phòng 1204' },
    'decagon-house': { icon: '🔟', code: 'HONKAKU-01', seal: '十角', sub: 'Đảo cô lập Tsunojima' },
    'tokyo-zodiac': { icon: '🔯', code: 'AZOTH-36', seal: '占星', sub: 'Ma trận 6 Thi thể' },
    'inugami-curse': { icon: '🪕', code: 'KINDAICHI-01', seal: '犬神', sub: 'Cúc · Đàn · Rìu' },
    'roger-ackroyd': { icon: '🎙️', code: 'POIROT-26', seal: '記録', sub: 'Bẫy ghi âm 21:30' },
    'hollow-man': { icon: '🪞', code: 'FELL-35', seal: '密室', sub: 'Mật thất Kép & Gương' },
    'orient-express': { icon: '🚂', code: 'CALAIS-12', seal: '審判', sub: '12 Nhát dao Công lý' },
    'midsummer-equation': { icon: '🚀', code: 'GALILEO-03', seal: '真夏', sub: 'Tên lửa & Đáy biển' },
    'silent-parade': { icon: '❄️', code: 'GALILEO-04', seal: '沈黙', sub: 'Mật thất Nitơ lỏng' },
    'red-finger': { icon: '💄', code: 'KAGA-03', seal: '赤指', sub: 'Bi kịch Ngón tay đỏ' },
    'clock-mansion': { icon: '🕰️', code: 'YAKATA-02', seal: '時計', sub: 'Quỷ kế 108 Đồng hồ' },
    'honjin-murder': { icon: '⚔️', code: 'KINDAICHI-02', seal: '本陣', sub: 'Đàn Koto & Tuyết trắng' },
    'and-then-none': { icon: '🏝️', code: 'OWEN-10', seal: '孤島', sub: '10 Tượng sứ Đảo hoang' }
  };

  function renderCaseCoverSvg(c) {
    const meta = CASE_ICONS[c.id] || { icon: '🕵️', code: `FILE-0${c.order}`, seal: c.kanji, sub: 'Hồ sơ Đặc biệt' };
    const bgA = c.theme?.a || '#141923';
    const bgB = c.theme?.b || '#2b3d54';
    const accent = c.theme?.accent || '#e0b354';

    return `
      <div class="dossier-card-banner" style="--banner-a:${bgA};--banner-b:${bgB};--banner-accent:${accent};">
        <div class="dossier-banner-left">
          <div class="dossier-emblem-box">${meta.icon}</div>
          <div>
            <div class="dossier-file-code">${meta.code} · ${meta.sub.toUpperCase()}</div>
            <div class="dossier-file-author">Tác giả: <strong>${c.author || 'Higashino Keigo'}</strong></div>
          </div>
        </div>
        <div class="dossier-hanko-stamp">${meta.seal}</div>
      </div>
    `;
  }

  // -------------------------------------------------------------------------
  // 3. 2.5D INTERACTIVE CRIME SCENE CANVAS (Điều khiển Thám tử WASD / Click + Đèn Pin)
  // -------------------------------------------------------------------------
  function renderCrimeSceneStage(caseObj, loc, state, mode = 'flashlight', activePtId = null) {
    const visiblePts = loc.points.filter((p) => {
      if (!p.requires || !p.requires.length) return true;
      return p.requires.every((r) => state.clues.includes(r));
    });
    const hiddenCount = loc.points.length - visiblePts.length;

    const quickPillsHtml = visiblePts
      .map((pt, idx) => {
        const key = `${loc.id}:${pt.id}`;
        const examined = state.examinedPoints.includes(key);
        const clueObj = pt.clue ? caseObj.clues[pt.clue] : null;
        return `
          <button class="canvas-quick-pill ${examined ? 'done' : ''} ${activePtId === pt.id ? 'active' : ''}"
                  onclick="window.KeigoVisuals.walkToPoint(${idx}, '${loc.id}', '${pt.id}')">
            <span>${examined ? '✓' : clueObj ? clueObj.icon : '🔎'}</span>
            <span>${pt.name}</span>
          </button>
        `;
      })
      .join('');

    return `
      <div class="crime-stage-wrapper">
        <div class="forensic-toolbar">
          <div class="forensic-loc-badge">
            <span>${loc.icon} <strong>${loc.name}</strong></span>
            <span class="forensic-coord">WASD / CLICK ĐỂ DI CHUYỂN THÁM TỬ · QUÉT PHÁP Y</span>
          </div>
          <div class="forensic-modes">
            <button class="fmode-btn ${mode === 'flashlight' ? 'active' : ''}" onclick="window.KeigoApp.setSceneMode('flashlight')">
              🔦 Đèn Pin Thám Tử
            </button>
            <button class="fmode-btn ${mode === 'uv' ? 'active' : ''}" onclick="window.KeigoApp.setSceneMode('uv')">
              🟣 Quét Tia Cực Tím (UV Luminol)
            </button>
            <button class="fmode-btn ${mode === 'normal' ? 'active' : ''}" onclick="window.KeigoApp.setSceneMode('normal')">
              💡 Bật Đèn Phòng
            </button>
          </div>
        </div>

        <div class="canvas-stage-box">
          <canvas id="crimeSceneCanvas" width="920" height="420"></canvas>
          <div class="canvas-pills-bar">
            ${quickPillsHtml}
          </div>
        </div>

        ${
          hiddenCount > 0
            ? `<div class="scene-locked-banner">🔒 Còn <strong>${hiddenCount}</strong> vật chứng ẩn tại khu vực này — hãy thẩm vấn hoặc kết nối suy luận để phát hiện vị trí của chúng.</div>`
            : ''
        }
      </div>
    `;
  }

  function walkToPoint(slotIdx, locId, ptId) {
    const slot = SCENE_SLOTS[slotIdx % SCENE_SLOTS.length];
    detective.targetX = slot.standX;
    detective.targetY = slot.standY;
    detective.pendingPoint = { locId, ptId, propX: slot.x, propY: slot.y };
  }

  function startCrimeSceneCanvas(caseObj, loc, state, mode = 'flashlight', activePtId = null) {
    initControls();
    const canvas = document.getElementById('crimeSceneCanvas');
    if (!canvas || !caseObj || !loc) return;
    if (sceneAnimId) cancelAnimationFrame(sceneAnimId);

    const ctx = canvas.getContext('2d');
    const visiblePts = loc.points.filter((p) => {
      if (!p.requires || !p.requires.length) return true;
      return p.requires.every((r) => state.clues.includes(r));
    });

    let hoveredIdx = -1;

    canvas.onmousemove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      detective.mouseX = (e.clientX - rect.left) * scaleX;
      detective.mouseY = (e.clientY - rect.top) * scaleY;

      hoveredIdx = -1;
      visiblePts.forEach((_, idx) => {
        const slot = SCENE_SLOTS[idx % SCENE_SLOTS.length];
        if (Math.hypot(detective.mouseX - slot.x, detective.mouseY - slot.y) < 38) {
          hoveredIdx = idx;
        }
      });
      canvas.style.cursor = hoveredIdx >= 0 ? 'pointer' : 'crosshair';
    };

    canvas.onclick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      const cx = (e.clientX - rect.left) * scaleX;
      const cy = (e.clientY - rect.top) * scaleY;

      for (let i = 0; i < visiblePts.length; i++) {
        const slot = SCENE_SLOTS[i % SCENE_SLOTS.length];
        if (Math.hypot(cx - slot.x, cy - slot.y) < 40) {
          walkToPoint(i, loc.id, visiblePts[i].id);
          return;
        }
      }
      // Di chuyển tự do trên sàn
      detective.targetX = Math.max(95, Math.min(825, cx));
      detective.targetY = Math.max(305, Math.min(395, cy));
      detective.pendingPoint = null;
    };

    function loop() {
      if (!document.getElementById('crimeSceneCanvas')) return;
      frameCount++;
      updateDetectivePhysics();
      draw25DCrimeRoom(ctx, canvas.width, canvas.height, caseObj, loc, state, visiblePts, hoveredIdx, activePtId, mode);
      sceneAnimId = requestAnimationFrame(loop);
    }
    loop();
  }

  function updateDetectivePhysics() {
    const speed = 4.4;
    let manual = false;
    if (detective.keys.a) {
      detective.x -= speed;
      detective.facing = -1;
      manual = true;
    }
    if (detective.keys.d) {
      detective.x += speed;
      detective.facing = 1;
      manual = true;
    }
    if (detective.keys.w) {
      detective.y -= speed * 0.7;
      manual = true;
    }
    if (detective.keys.s) {
      detective.y += speed * 0.7;
      manual = true;
    }

    if (manual) {
      detective.targetX = detective.x;
      detective.targetY = detective.y;
      detective.pendingPoint = null;
      detective.isMoving = true;
    } else {
      const dx = detective.targetX - detective.x;
      const dy = detective.targetY - detective.y;
      const dist = Math.hypot(dx, dy);
      if (dist > 5) {
        detective.x += (dx / dist) * speed;
        detective.y += (dy / dist) * speed;
        detective.facing = dx >= 0 ? 1 : -1;
        detective.isMoving = true;
      } else {
        detective.isMoving = false;
        if (detective.pendingPoint) {
          const pp = detective.pendingPoint;
          detective.pendingPoint = null;
          detective.scanTimer = 32;
          detective.scanTarget = { x: pp.propX, y: pp.propY };
          if (window.KeigoApp) {
            window.KeigoApp.inspectPoint(pp.locId, pp.ptId);
          }
        }
      }
    }

    detective.x = Math.max(90, Math.min(830, detective.x));
    detective.y = Math.max(305, Math.min(395, detective.y));

    if (detective.isMoving) {
      detective.walkCycle += 0.24;
      if (frameCount % 12 === 0) {
        detective.footprints.push({ x: detective.x, y: detective.y + 2, life: 1.0 });
      }
    } else {
      detective.walkCycle += 0.04;
    }

    for (let i = detective.footprints.length - 1; i >= 0; i--) {
      detective.footprints[i].life -= 0.012;
      if (detective.footprints[i].life <= 0) detective.footprints.splice(i, 1);
    }

    if (detective.scanTimer > 0) detective.scanTimer--;
  }

  function draw25DCrimeRoom(ctx, w, h, caseObj, loc, state, visiblePts, hoveredIdx, activePtId, mode) {
    ctx.save();
    ctx.clearRect(0, 0, w, h);

    const accent = caseObj.theme?.accent || '#e0b354';
    const isUV = mode === 'uv';

    // 1. Khung cảnh bầu trời đêm / thành phố / núi tuyết nhìn qua cửa sổ lớn phía sau
    const skyGrad = ctx.createLinearGradient(0, 50, 0, 290);
    if (isUV) {
      skyGrad.addColorStop(0, '#140826');
      skyGrad.addColorStop(1, '#090414');
    } else {
      skyGrad.addColorStop(0, caseObj.theme?.a || '#0b1320');
      skyGrad.addColorStop(1, '#05080f');
    }
    ctx.fillStyle = skyGrad;
    ctx.fillRect(110, 52, w - 220, 240);

    // Mặt trăng & Silhouette thành phố / núi non phía xa
    ctx.fillStyle = isUV ? 'rgba(192, 132, 252, 0.22)' : 'rgba(244, 211, 94, 0.18)';
    ctx.beginPath();
    ctx.arc(680, 110, 32, 0, Math.PI * 2);
    ctx.fill();

    // Đường chân trời kiến trúc Nhật Bản / Đồi núi
    ctx.fillStyle = '#070b12';
    ctx.beginPath();
    ctx.moveTo(110, 292);
    ctx.lineTo(110, 215);
    ctx.lineTo(185, 195);
    ctx.lineTo(240, 220);
    ctx.lineTo(310, 175);
    ctx.lineTo(395, 175);
    ctx.lineTo(420, 215);
    ctx.lineTo(540, 185);
    ctx.lineTo(630, 210);
    ctx.lineTo(735, 180);
    ctx.lineTo(810, 215);
    ctx.lineTo(810, 292);
    ctx.closePath();
    ctx.fill();

    // Hạt mưa / tuyết rơi ngoài khung cửa sổ
    ctx.strokeStyle = 'rgba(186, 230, 253, 0.35)';
    ctx.lineWidth = 1.2;
    for (const wp of windowWeather) {
      ctx.beginPath();
      ctx.moveTo(wp.x, wp.y);
      ctx.lineTo(wp.x + wp.vx * 3, wp.y + wp.vy * 2);
      ctx.stroke();
      wp.y += wp.vy;
      wp.x += wp.vx;
      if (wp.y > 288) {
        wp.y = 58;
        wp.x = 120 + Math.random() * 680;
      }
    }

    // 2. Trần phòng & Hai vách tường phối cảnh 2.5D
    const ceilGrad = ctx.createLinearGradient(0, 0, 0, 56);
    ceilGrad.addColorStop(0, '#07090e');
    ceilGrad.addColorStop(1, '#121824');
    ctx.fillStyle = ceilGrad;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(w, 0);
    ctx.lineTo(w - 110, 55);
    ctx.lineTo(110, 55);
    ctx.closePath();
    ctx.fill();

    // Tường trái
    ctx.fillStyle = isUV ? '#110921' : '#101520';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(110, 55);
    ctx.lineTo(110, 292);
    ctx.lineTo(0, h);
    ctx.closePath();
    ctx.fill();

    // Tường phải
    ctx.beginPath();
    ctx.moveTo(w, 0);
    ctx.lineTo(w - 110, 55);
    ctx.lineTo(w - 110, 292);
    ctx.lineTo(w, h);
    ctx.closePath();
    ctx.fill();

    // Khung cửa sổ gỗ Shoji / Kính lớn
    ctx.strokeStyle = isUV ? '#a855f7' : '#283244';
    ctx.lineWidth = 6;
    ctx.strokeRect(110, 55, w - 220, 237);
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(340, 55);
    ctx.lineTo(340, 292);
    ctx.moveTo(580, 55);
    ctx.lineTo(580, 292);
    ctx.stroke();

    // 3. Sàn phòng 2.5D phối cảnh
    const floorGrad = ctx.createLinearGradient(0, 292, 0, h);
    if (isUV) {
      floorGrad.addColorStop(0, '#170d2e');
      floorGrad.addColorStop(1, '#080412');
    } else {
      floorGrad.addColorStop(0, '#18202c');
      floorGrad.addColorStop(1, '#090c12');
    }
    ctx.fillStyle = floorGrad;
    ctx.beginPath();
    ctx.moveTo(110, 292);
    ctx.lineTo(w - 110, 292);
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.closePath();
    ctx.fill();

    // Lưới sàn phối cảnh
    ctx.strokeStyle = isUV ? 'rgba(192, 132, 252, 0.22)' : 'rgba(224, 179, 84, 0.12)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 10; i++) {
      const tx = 110 + ((w - 220) / 10) * i;
      const bx = (w / 10) * i;
      ctx.beginPath();
      ctx.moveTo(tx, 292);
      ctx.lineTo(bx, h);
      ctx.stroke();
    }
    for (const yl of [318, 348, 382, 412]) {
      ctx.beginPath();
      ctx.moveTo(0, yl);
      ctx.lineTo(w, yl);
      ctx.stroke();
    }

    // Viền chân tường phát sáng
    ctx.strokeStyle = isUV ? '#c084fc' : accent;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, h - 2);
    ctx.lineTo(110, 292);
    ctx.lineTo(w - 110, 292);
    ctx.lineTo(w, h - 2);
    ctx.stroke();

    // 4. Nếu bật chế độ UV Luminol: Hiện đường viền phấn thi thể & vết máu phát quang
    if (isUV) {
      ctx.save();
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2.2;
      ctx.setLineDash([5, 4]);
      ctx.beginPath();
      ctx.ellipse(465, 345, 62, 20, -0.1, 0, Math.PI * 2);
      ctx.stroke();

      ctx.fillStyle = 'rgba(192, 132, 252, 0.32)';
      ctx.beginPath();
      ctx.ellipse(445, 342, 28, 11, 0.2, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#c084fc';
      ctx.font = 'bold 11px "Be Vietnam Pro", "Segoe UI", sans-serif';
      ctx.fillText('🟣 PHẢN ỨNG LUMINOL DƯƠNG TÍNH · VẾT MÁU / HÓA CHẤT ẨN', 340, 384);
      ctx.restore();
    }

    // Dấu chân bước đi của Thám tử (hoặc phát sáng khi bật UV)
    for (const fp of detective.footprints) {
      ctx.fillStyle = isUV ? `rgba(56, 189, 248, ${fp.life * 0.65})` : `rgba(224, 179, 84, ${fp.life * 0.35})`;
      ctx.beginPath();
      ctx.ellipse(fp.x, fp.y, 5, 2.5, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    // 5. Vẽ các vật chứng tương tác (2.5D Forensic Props) trên hiện trường
    visiblePts.forEach((pt, idx) => {
      const slot = SCENE_SLOTS[idx % SCENE_SLOTS.length];
      const examined = state.examinedPoints.includes(`${loc.id}:${pt.id}`);
      const isHover = hoveredIdx === idx;
      const isSelected = activePtId === pt.id;
      const clueObj = pt.clue ? caseObj.clues[pt.clue] : null;
      drawForensicProp(ctx, slot.x, slot.y, pt, clueObj, examined, isHover, isSelected, idx + 1);
    });

    // 6. Vẽ Nhân vật Thám Tử (Áo măng-tô + Mũ Fedora) & Chùm Đèn Pin Quang Phổ
    drawNoirDetective(ctx, mode);

    // 7. Hiệu ứng tối góc phòng khi ở chế độ Đèn Pin
    if (mode === 'flashlight') {
      const headX = detective.x + detective.facing * 12;
      const headY = detective.y - 34;
      const darkGrad = ctx.createRadialGradient(detective.mouseX, detective.mouseY, 55, headX, headY, 460);
      darkGrad.addColorStop(0, 'rgba(0, 0, 0, 0)');
      darkGrad.addColorStop(0.45, 'rgba(4, 6, 12, 0.38)');
      darkGrad.addColorStop(1, 'rgba(2, 4, 8, 0.82)');
      ctx.fillStyle = darkGrad;
      ctx.fillRect(0, 0, w, h);
    }

    // 8. Hạt bụi lơ lửng dưới ánh đèn
    for (const d of roomDust) {
      d.x = (d.x + d.vx + w) % w;
      d.y = (d.y + d.vy + h) % h;
      ctx.fillStyle = isUV ? `rgba(192, 132, 252, ${d.a * 1.4})` : `rgba(254, 240, 138, ${d.a})`;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }

  function drawForensicProp(ctx, x, y, pt, clueObj, examined, isHover, isSelected, num) {
    ctx.save();
    ctx.translate(x, y);

    const glowCol = isSelected ? '#f43f5e' : isHover ? '#fde047' : examined ? '#10b981' : '#e0b354';
    const pulse = Math.sin(frameCount * 0.08 + num) * 4;

    // Vòng radar pháp y dưới mặt sàn
    ctx.strokeStyle = glowCol;
    ctx.lineWidth = isHover || isSelected ? 2.5 : 1.5;
    ctx.globalAlpha = 0.75;
    ctx.beginPath();
    ctx.ellipse(0, 16, 26 + pulse * 0.6, 10 + pulse * 0.25, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.globalAlpha = 1;

    // Khối đế vật thể 2.5D
    ctx.fillStyle = examined ? 'rgba(16, 185, 129, 0.18)' : 'rgba(22, 28, 40, 0.92)';
    ctx.strokeStyle = glowCol;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(-22, -22, 44, 38, 9);
    ctx.fill();
    ctx.stroke();

    // Biển số vật chứng màu vàng của cảnh sát (Crime Scene Marker #1, #2...)
    ctx.fillStyle = '#eab308';
    ctx.beginPath();
    ctx.moveTo(12, -26);
    ctx.lineTo(28, -26);
    ctx.lineTo(31, -12);
    ctx.lineTo(9, -12);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#111827';
    ctx.font = 'bold 10px "Be Vietnam Pro", "Segoe UI", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(String(num), 20, -15);

    // Icon vật thể ở tâm
    ctx.font = '19px "Segoe UI Emoji", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(clueObj ? clueObj.icon : examined ? '✓' : '🔎', 0, 4);

    // Nhãn tên vật thể bên dưới
    const label = (examined ? '✓ ' : '') + pt.name;
    ctx.font = '600 11.5px "Be Vietnam Pro", "Segoe UI", sans-serif';
    const tw = Math.min(220, ctx.measureText(label).width + 18);
    ctx.fillStyle = isHover || isSelected ? 'rgba(224, 179, 84, 0.95)' : 'rgba(10, 14, 22, 0.9)';
    ctx.strokeStyle = glowCol;
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.roundRect(-tw / 2, 24, tw, 22, 6);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = isHover || isSelected ? '#111827' : '#f8fafc';
    ctx.fillText(label.length > 28 ? label.slice(0, 26) + '…' : label, 0, 39);

    ctx.restore();
  }

  function drawNoirDetective(ctx, mode) {
    const p = detective;
    const handX = p.x + p.facing * 14;
    const handY = p.y - 34;
    const angle = Math.atan2(p.mouseY - handY, p.mouseX - handX);

    // 1. Chùm tia Đèn Pin hoặc Đèn UV từ tay Thám tử hướng theo chuột
    ctx.save();
    const coneGrad = ctx.createRadialGradient(handX, handY, 6, handX, handY, 290);
    if (mode === 'uv') {
      coneGrad.addColorStop(0, 'rgba(192, 132, 252, 0.38)');
      coneGrad.addColorStop(0.55, 'rgba(56, 189, 248, 0.12)');
      coneGrad.addColorStop(1, 'transparent');
    } else {
      coneGrad.addColorStop(0, 'rgba(254, 240, 138, 0.32)');
      coneGrad.addColorStop(0.55, 'rgba(224, 179, 84, 0.09)');
      coneGrad.addColorStop(1, 'transparent');
    }
    ctx.fillStyle = coneGrad;
    ctx.beginPath();
    ctx.moveTo(handX, handY);
    ctx.arc(handX, handY, 290, angle - 0.34, angle + 0.34);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    // 2. Tia Quét Pháp Y khi vừa đến vị trí vật chứng
    if (p.scanTimer > 0 && p.scanTarget) {
      ctx.save();
      ctx.strokeStyle = mode === 'uv' ? '#c084fc' : '#fbbf24';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(handX, handY);
      ctx.lineTo(p.scanTarget.x, p.scanTarget.y);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(p.scanTarget.x, p.scanTarget.y, 12 + (32 - p.scanTimer), 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }

    // 3. Hình nhân vật Thám tử Noir (Áo Trenchcoat + Mũ Fedora)
    ctx.save();
    ctx.translate(p.x, p.y);

    // Bóng đổ dưới sàn
    ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
    ctx.beginPath();
    ctx.ellipse(0, 4, 18, 6, 0, 0, Math.PI * 2);
    ctx.fill();

    const bob = p.isMoving ? Math.abs(Math.sin(p.walkCycle)) * 3.5 : Math.sin(frameCount * 0.05) * 1.2;
    const swing = p.isMoving ? Math.sin(p.walkCycle) * 7.5 : 0;

    ctx.scale(p.facing, 1);
    ctx.translate(0, -bob);

    // Hai chân quần âu tối màu
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 6;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(-3, -16);
    ctx.lineTo(-3 - swing, 0);
    ctx.moveTo(4, -16);
    ctx.lineTo(4 + swing, 0);
    ctx.stroke();

    // Áo khoác măng-tô thám tử (Trenchcoat)
    ctx.fillStyle = '#785a3c';
    ctx.strokeStyle = '#d4a373';
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.moveTo(-11, -44);
    ctx.lineTo(11, -44);
    ctx.lineTo(14, -12);
    ctx.lineTo(-14, -12);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Cổ áo & Cà vạt đỏ
    ctx.fillStyle = '#dc2626';
    ctx.beginPath();
    ctx.moveTo(0, -42);
    ctx.lineTo(4, -32);
    ctx.lineTo(0, -28);
    ctx.lineTo(-2, -32);
    ctx.closePath();
    ctx.fill();

    // Đầu & Mũ phớt Fedora
    ctx.fillStyle = '#f3d5b5';
    ctx.beginPath();
    ctx.arc(0, -53, 10, 0, Math.PI * 2);
    ctx.fill();

    // Vành mũ & Chóp mũ Fedora
    ctx.fillStyle = '#27272a';
    ctx.strokeStyle = '#e0b354';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.ellipse(1, -59, 16, 3.5, -0.05, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.roundRect(-9, -68, 19, 10, 4);
    ctx.fill();
    ctx.stroke();

    // Cánh tay cầm đèn pin
    ctx.strokeStyle = '#8b6b4a';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(2, -36);
    ctx.lineTo(13, -32);
    ctx.stroke();

    ctx.restore();
  }

  // -------------------------------------------------------------------------
  // 4. SLEEK DOSSIER SUSPECT BADGE (Thay thế hình mặt hoạt hình bằng Huy hiệu Hồ sơ Noir)
  // -------------------------------------------------------------------------
  function renderSuspectPortraitSvg(suspect, mood = 'normal') {
    const color = suspect.color || '#3b4252';
    const ringCol = mood === 'shocked' ? '#f43f5e' : mood === 'nervous' ? '#fbbf24' : '#10b981';

    return `
      <div class="suspect-dossier-badge" style="--sus-color:${color};--ring-color:${ringCol};">
        <div class="suspect-kanji-monogram">${suspect.avatar}</div>
        <div class="suspect-age-tag">${suspect.age} TUỔI</div>
      </div>
    `;
  }

  // -------------------------------------------------------------------------
  // 5. LIVE POLYGRAPH HEARTBEAT MONITOR
  // -------------------------------------------------------------------------
  function startPolygraphCanvas(bpmBase = 74, stressBase = 28) {
    polyState.bpm = bpmBase;
    polyState.stress = stressBase;
    const canvas = document.getElementById('polygraph-canvas');
    if (!canvas) return;
    if (polyAnimId) cancelAnimationFrame(polyAnimId);

    const ctx = canvas.getContext('2d');
    const W = (canvas.width = 280);
    const H = (canvas.height = 68);
    const points = new Array(W).fill(H / 2);
    let phase = 0;

    function draw() {
      if (!document.getElementById('polygraph-canvas')) return;
      phase += 0.16 + (polyState.bpm - 60) * 0.002;
      if (polyState.spike > 0) polyState.spike *= 0.94;

      const amp = 10 + (polyState.stress / 100) * 18 + polyState.spike * 16;
      const beat = Math.sin(phase) > 0.82 ? (Math.random() > 0.5 ? -amp : amp) : Math.sin(phase * 0.5) * 3;
      points.push(H / 2 + beat);
      if (points.length > W) points.shift();

      ctx.fillStyle = 'rgba(10, 14, 20, 0.92)';
      ctx.fillRect(0, 0, W, H);

      ctx.strokeStyle = 'rgba(255,255,255,0.06)';
      ctx.lineWidth = 1;
      for (let x = 0; x < W; x += 20) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }

      const isHigh = polyState.stress >= 65 || polyState.spike > 0.25;
      ctx.strokeStyle = isHigh ? '#f43f5e' : '#10b981';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i < points.length; i++) {
        if (i === 0) ctx.moveTo(i, points[i]);
        else ctx.lineTo(i, points[i]);
      }
      ctx.stroke();

      polyAnimId = requestAnimationFrame(draw);
    }
    draw();
  }

  function triggerPolygraphSpike(bpm, stress) {
    polyState.bpm = bpm;
    polyState.stress = stress;
    polyState.spike = 1.0;
  }

  // -------------------------------------------------------------------------
  // 6. RED-STRING DETECTIVE CORKBOARD (Bảng ghim chỉ đỏ nối suy luận)
  // -------------------------------------------------------------------------
  function renderCorkboardGraph(caseObj, state) {
    const unlockedCombos = caseObj.combos.filter(
      (cb) => state.clues.includes(cb.a) && state.clues.includes(cb.b) && state.clues.includes(cb.result)
    );
    const insights = state.clues.filter((cid) => caseObj.clues[cid]?.type === 'insight');

    if (insights.length === 0) {
      return `
        <div class="corkboard-empty">
          📌 <strong>Bảng Ghim Sợi Chỉ Đỏ (Red-String Deduction Board)</strong>: Khi bạn kết nối thành công 2 manh mối ở trên, sơ đồ dây chỉ đỏ nối các mắt xích nhân quả sẽ tự động được ghim lên bảng này!
        </div>
      `;
    }

    const chainsHtml = unlockedCombos
      .map((cb) => {
        const ca = caseObj.clues[cb.a];
        const cbObj = caseObj.clues[cb.b];
        const res = caseObj.clues[cb.result];
        if (!ca || !cbObj || !res) return '';
        return `
          <div class="redstring-chain">
            <div class="pin-note">
              <span class="brass-pin"></span>
              <div class="pin-title">${ca.icon} ${ca.title}</div>
            </div>
            <div class="red-thread-line"><span>+</span></div>
            <div class="pin-note">
              <span class="brass-pin"></span>
              <div class="pin-title">${cbObj.icon} ${cbObj.title}</div>
            </div>
            <div class="red-thread-line arrow"><span>━━►</span></div>
            <div class="pin-note insight-pin">
              <span class="brass-pin gold"></span>
              <div class="pin-title">🧩 ${res.title}</div>
              <div class="pin-desc">${res.desc}</div>
            </div>
          </div>
        `;
      })
      .join('');

    return `
      <div class="corkboard-panel">
        <div class="corkboard-header">
          <span>📌 BẢNG GHIM CHỈ ĐỎ ĐÃ KẾT NỐI (${insights.length} SUY LUẬN)</span>
          <span style="font-size:0.78rem;color:var(--text-muted);">Mỗi sợi chỉ đỏ nối 2 chứng cứ thành 1 mắt xích phá án</span>
        </div>
        <div class="corkboard-chains">
          ${chainsHtml}
        </div>
      </div>
    `;
  }

  function triggerBreakBanner(title, subtitle) {
    const root = document.getElementById('break-overlay-root');
    if (!root) return;
    root.innerHTML = `
      <div class="break-banner-overlay">
        <div class="break-slash">
          <div class="break-kanji">論破 · VẠCH TRẦN!</div>
          <div class="break-sub">${title}: ${subtitle}</div>
        </div>
      </div>
    `;
    setTimeout(() => {
      root.innerHTML = '';
    }, 2100);
  }

  return {
    startWeatherCanvas,
    renderCaseCoverSvg,
    renderCrimeSceneStage,
    startCrimeSceneCanvas,
    walkToPoint,
    renderSuspectPortraitSvg,
    startPolygraphCanvas,
    triggerPolygraphSpike,
    renderCorkboardGraph,
    triggerBreakBanner
  };
})();
