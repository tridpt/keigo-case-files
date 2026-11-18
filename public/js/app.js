/* =========================================================================
 * HỒ SƠ HIGASHINO — Core Detective Game Engine
 * ========================================================================= */
(function () {
  const STORAGE_KEY = 'keigo_case_files_save_v1';
  const cases = (window.CASES || []).slice().sort((a, b) => a.order - b.order);

  let saveStore = loadSave();
  let currentCaseId = null;
  let activeTab = 'briefing';
  let activeLocationId = null;
  let lastPointOutput = null;
  let activeSuspectId = null;
  let notebookFilter = 'all';
  let lobbyCollection = 'all';
  let sceneMode = 'flashlight';
  let suspectMood = 'normal';
  let suspectBpm = 74;
  let suspectStress = 26;
  let synthSlotA = null;
  let synthSlotB = null;
  let activeHintText = null;
  let truthModalCaseId = null;

  function loadSave() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  }

  function persistSave() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(saveStore));
    } catch {}
  }

  function getCaseState(caseId) {
    if (!saveStore[caseId]) {
      saveStore[caseId] = {
        clues: [],
        examinedPoints: [],
        askedTopics: [],
        presentedClues: [],
        dialogueHistory: {},
        answers: {},
        steps: 0,
        hintsUsed: 0,
        solved: false,
        rank: null
      };
    }
    return saveStore[caseId];
  }

  function hasClue(state, clueId) {
    return state.clues.includes(clueId);
  }

  function hasAllRequirements(state, reqs) {
    if (!reqs || !reqs.length) return true;
    return reqs.every((r) => hasClue(state, r));
  }

  function unlockClue(caseObj, state, clueId, sourceLabel) {
    if (!clueId || !caseObj.clues[clueId]) return false;
    if (state.clues.includes(clueId)) return false;
    state.clues.push(clueId);
    persistSave();
    const c = caseObj.clues[clueId];
    if (c.type === 'insight') {
      window.NoirAudio.playInsight();
      showToast(`🧩 Suy luận mới: ${c.title}`, c.desc);
    } else {
      window.NoirAudio.playClue();
      showToast(`${c.icon} Manh mối mới: ${c.title}`, sourceLabel || c.desc);
    }
    return true;
  }

  function showToast(title, body) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const el = document.createElement('div');
    el.className = 'toast';
    el.innerHTML = `
      <div style="font-weight:700;color:var(--accent);margin-bottom:0.2rem;">${escapeHtml(title)}</div>
      <div style="font-size:0.82rem;color:var(--text-muted);">${escapeHtml(body || '')}</div>
    `;
    container.appendChild(el);
    setTimeout(() => {
      el.style.opacity = '0';
      el.style.transition = 'opacity 0.25s ease';
      setTimeout(() => el.remove(), 260);
    }, 4200);
  }

  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function getCaseById(id) {
    return cases.find((c) => c.id === id) || null;
  }

  function openCase(id) {
    const c = getCaseById(id);
    if (!c) return;
    window.NoirAudio.playClick();
    currentCaseId = id;
    activeTab = 'briefing';
    activeLocationId = c.locations[0]?.id || null;
    lastPointOutput = null;
    activeSuspectId = c.suspects[0]?.id || null;
    synthSlotA = null;
    synthSlotB = null;
    activeHintText = null;
    render();
  }

  function backToLobby() {
    window.NoirAudio.playClick();
    currentCaseId = null;
    render();
  }

  function resetCurrentCase() {
    if (!currentCaseId) return;
    if (!confirm('Bạn có chắc muốn xóa tiến trình của vụ án này để điều tra lại từ đầu?')) return;
    delete saveStore[currentCaseId];
    persistSave();
    openCase(currentCaseId);
    showToast('Đã đặt lại hồ sơ', 'Mọi manh mối của vụ án đã được làm mới.');
  }

  function computeOverallStats() {
    let solvedCount = 0;
    let totalCluesFound = 0;
    let totalCluesAll = 0;
    cases.forEach((c) => {
      const st = getCaseState(c.id);
      if (st.solved) solvedCount++;
      totalCluesFound += st.clues.length;
      totalCluesAll += Object.keys(c.clues).length;
    });
    const titles = [
      'Điều tra viên tập sự',
      'Thám tử phố Ningyocho',
      'Cộng sự phòng Thí nghiệm số 13',
      'Thanh tra Đội Trọng Án Tokyo',
      'Kỳ tài Phá Án Higashino',
      'Bậc thầy Thập Giác Đài',
      'Nhà Chiêm Tinh Yokohama',
      'Truyền nhân Kindaichi Kosuke',
      'Tế bào xám của Hercule Poirot',
      'Chuyên gia Mật Thất Gideon Fell',
      'Thẩm phán Tốc hành Phương Đông',
      'Huyền Thoại Trinh Thám Thế Giới',
      'Đại Danh Thám Bất Khả Chiến Bại'
    ];
    return {
      solvedCount,
      totalCases: cases.length,
      totalCluesFound,
      totalCluesAll,
      rankTitle: titles[Math.min(solvedCount, titles.length - 1)]
    };
  }

  function renderLobby() {
    const stats = computeOverallStats();
    const visibleCases = cases.filter((c) => {
      const col = c.collection || 'keigo';
      if (lobbyCollection === 'all') return true;
      return col === lobbyCollection;
    });
    const cardsHtml = visibleCases
      .map((c) => {
        const st = getCaseState(c.id);
        const totalClues = Object.keys(c.clues).length;
        const pct = Math.round((st.clues.length / totalClues) * 100);
        const stars = '★'.repeat(c.difficulty) + '☆'.repeat(Math.max(0, 5 - c.difficulty));
        const authorName = c.author || 'Higashino Keigo';
        const orderStr = String(c.order).padStart(2, '0');
        return `
          <div class="case-card" onclick="window.KeigoApp.openCase('${c.id}')">
            ${window.KeigoVisuals ? window.KeigoVisuals.renderCaseCoverSvg(c) : ''}
            <div class="case-card-body">
              <div class="case-kanji-bg">${escapeHtml(c.kanji)}</div>
              <div>
                <div class="case-header">
                  <span class="case-num">HỒ SƠ #${orderStr} · ${escapeHtml(authorName.toUpperCase())} · ${stars}</span>
                  ${
                    st.solved
                      ? `<span class="case-stamp">解決 · HẠNG ${st.rank || 'A'}</span>`
                      : st.clues.length > 0
                      ? `<span class="case-num" style="color:#93c5fd;background:rgba(59,130,246,0.16);">ĐANG ĐIỀU TRA</span>`
                      : ''
                  }
                </div>
                <div class="case-title">${escapeHtml(c.title)}</div>
                <div class="case-original">${escapeHtml(c.original)}</div>
                <p class="case-tagline">${escapeHtml(c.tagline)}</p>
              </div>
              <div>
                <div class="case-meta">
                  <span>🕵️ Cộng sự: <strong>${escapeHtml(c.partner.name)}</strong></span>
                  <span>🗂️ ${st.clues.length}/${totalClues} manh mối (${pct}%)</span>
                </div>
                <div class="progress-bar">
                  <div class="progress-fill" style="width:${pct}%"></div>
                </div>
              </div>
            </div>
          </div>
        `;
      })
      .join('');

    const keigoCount = cases.filter((c) => (c.collection || 'keigo') === 'keigo').length;
    const honkakuCount = cases.filter((c) => c.collection === 'shin-honkaku').length;
    const worldCount = cases.filter((c) => c.collection === 'world-classics').length;

    return `
      <section class="lobby-hero">
        <h1>Hồ Sơ Đại Kỳ Án — Keigo, Shin-Honkaku & Kinh Điển Thế Giới</h1>
        <p>
          Tuyển tập <strong>${cases.length} đại kỳ án trinh thám hóc búa nhất</strong> từ <strong>Higashino Keigo</strong> (Galileo, Kaga, Sasagaki, Nitta),
          các bậc thầy <strong>Honkaku / Shin-Honkaku Nhật Bản</strong> (Ayatsuji Yukito, Shimada Soji, Yokomizo Seishi) cho tới
          <strong>Kinh điển Thế giới</strong> (Agatha Christie, John Dickson Carr). Khám nghiệm mật thất 2.5D, bóc trần quỷ kế thời gian,
          đối chất nghi phạm và ghép nối các mắt xích suy luận đa tầng.
        </p>
        <div class="lobby-stats">
          <div class="stat-pill">🎖️ Cấp bậc: <strong>${escapeHtml(stats.rankTitle)}</strong></div>
          <div class="stat-pill">📁 Vụ án đã phá: <strong>${stats.solvedCount}/${stats.totalCases}</strong></div>
          <div class="stat-pill">🔍 Manh mối & suy luận: <strong>${stats.totalCluesFound}/${stats.totalCluesAll}</strong></div>
        </div>
      </section>
      <div style="display:flex;gap:0.55rem;flex-wrap:wrap;margin-bottom:1.25rem;">
        <button class="btn btn-sm ${lobbyCollection === 'all' ? 'btn-primary' : ''}" onclick="window.KeigoApp.setLobbyCollection('all')">
          📚 Tất cả hồ sơ (${cases.length})
        </button>
        <button class="btn btn-sm ${lobbyCollection === 'keigo' ? 'btn-primary' : ''}" onclick="window.KeigoApp.setLobbyCollection('keigo')">
          🇯🇵 Higashino Keigo (${keigoCount})
        </button>
        <button class="btn btn-sm ${lobbyCollection === 'shin-honkaku' ? 'btn-primary' : ''}" onclick="window.KeigoApp.setLobbyCollection('shin-honkaku')">
          🏯 Honkaku & Shin-Honkaku Nhật Bản (${honkakuCount})
        </button>
        <button class="btn btn-sm ${lobbyCollection === 'world-classics' ? 'btn-primary' : ''}" onclick="window.KeigoApp.setLobbyCollection('world-classics')">
          🌍 Kinh Điển Thế Giới — Christie & Carr (${worldCount})
        </button>
      </div>
      <section class="cases-grid">
        ${cardsHtml}
      </section>
    `;
  }

  function renderCaseWorkspace(c) {
    const st = getCaseState(c.id);
    const totalClues = Object.keys(c.clues).length;
    const totalInsights = Object.values(c.clues).filter((x) => x.type === 'insight').length;
    const unlockedInsights = st.clues.filter((id) => c.clues[id]?.type === 'insight').length;

    return `
      <div class="case-banner" style="--case-a:${c.theme.a};--case-b:${c.theme.b};">
        <div>
          <div style="display:flex;align-items:center;gap:0.65rem;margin-bottom:0.25rem;">
            <button class="btn btn-sm" onclick="window.KeigoApp.backToLobby()">← Danh sách hồ sơ</button>
            <span class="case-num">HỒ SƠ #0${c.order}</span>
            ${st.solved ? `<span class="case-stamp">解決 · HẠNG ${st.rank || 'A'}</span>` : ''}
          </div>
          <div class="case-banner-title">${escapeHtml(c.title)}</div>
          <div class="case-banner-sub">${escapeHtml(c.original)} · Bước điều tra: <strong>${st.steps}</strong> (Chuẩn: ${c.par})</div>
        </div>
        <div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap;">
          <div class="partner-badge">
            <div class="avatar-circle" style="background:${c.partner.color}">${escapeHtml(c.partner.avatar)}</div>
            <div>
              <div style="font-weight:700;font-size:0.9rem;">${escapeHtml(c.partner.name)}</div>
              <div style="font-size:0.75rem;color:var(--text-muted);">${escapeHtml(c.partner.title)}</div>
            </div>
          </div>
          ${
            st.solved
              ? `<button class="btn btn-primary btn-sm" onclick="window.KeigoApp.openTruthModal('${c.id}')">📜 Xem Chân Tướng</button>`
              : ''
          }
          <button class="btn btn-sm" onclick="window.KeigoApp.resetCurrentCase()">↺ Điều tra lại</button>
        </div>
      </div>

      <nav class="tabs-nav">
        <button class="tab-btn ${activeTab === 'briefing' ? 'active' : ''}" onclick="window.KeigoApp.setTab('briefing')">
          📋 Hồ Sơ & Gợi Ý
        </button>
        <button class="tab-btn ${activeTab === 'locations' ? 'active' : ''}" onclick="window.KeigoApp.setTab('locations')">
          🗺️ Hiện Trường <span class="tab-badge">${c.locations.length}</span>
        </button>
        <button class="tab-btn ${activeTab === 'suspects' ? 'active' : ''}" onclick="window.KeigoApp.setTab('suspects')">
          🗣️ Thẩm Vấn <span class="tab-badge">${c.suspects.length}</span>
        </button>
        <button class="tab-btn ${activeTab === 'notebook' ? 'active' : ''}" onclick="window.KeigoApp.setTab('notebook')">
          🧩 Sổ Tay & Kết Nối <span class="tab-badge">${st.clues.length}/${totalClues} · ${unlockedInsights}/${totalInsights}🧩</span>
        </button>
        <button class="tab-btn ${activeTab === 'deduction' ? 'active' : ''}" onclick="window.KeigoApp.setTab('deduction')">
          ⚖️ Bảng Suy Luận <span class="tab-badge">${c.questions.length} câu</span>
        </button>
      </nav>

      ${renderActiveTabContent(c, st)}
    `;
  }

  function renderActiveTabContent(c, st) {
    if (activeTab === 'briefing') return renderBriefingTab(c, st);
    if (activeTab === 'locations') return renderLocationsTab(c, st);
    if (activeTab === 'suspects') return renderSuspectsTab(c, st);
    if (activeTab === 'notebook') return renderNotebookTab(c, st);
    if (activeTab === 'deduction') return renderDeductionTab(c, st);
    return '';
  }

  function renderBriefingTab(c, st) {
    const paragraphs = c.briefing.map((p) => `<p class="briefing-p">${escapeHtml(p)}</p>`).join('');
    const totalClues = Object.keys(c.clues).length;
    const insightsTotal = Object.values(c.clues).filter((x) => x.type === 'insight').length;
    const insightsFound = st.clues.filter((id) => c.clues[id]?.type === 'insight').length;

    return `
      <div class="grid-2col">
        <div class="panel-box">
          <div class="panel-title">
            <span>📄 Tóm Tắt Vụ Án</span>
            <span style="font-size:0.8rem;color:var(--text-muted);">${escapeHtml(c.playerRole)}</span>
          </div>
          ${paragraphs}
          <div style="margin-top:1.2rem;padding-top:1rem;border-top:1px solid var(--border);display:flex;gap:0.65rem;flex-wrap:wrap;">
            <button class="btn btn-primary" onclick="window.KeigoApp.setTab('locations')">🔍 Bắt đầu khám nghiệm hiện trường →</button>
            <button class="btn" onclick="window.KeigoApp.setTab('suspects')">🗣️ Đi thẩm vấn nghi phạm</button>
          </div>
        </div>

        <div class="panel-box">
          <div class="panel-title">
            <span>💡 Tham Vấn Cộng Sự (${escapeHtml(c.partner.name)})</span>
          </div>
          <p style="font-size:0.9rem;color:var(--text-muted);margin-bottom:0.9rem;">
            Khi bế tắc, hãy hỏi ý kiến <strong>${escapeHtml(c.partner.name)}</strong>. Cộng sự sẽ chỉ ra điểm mù trong quá trình điều tra hoặc gợi ý hai manh mối cần kết nối.
          </p>
          <button class="btn" onclick="window.KeigoApp.askPartnerHint()">💬 Xin gợi ý từ ${escapeHtml(c.partner.name)}</button>
          ${
            activeHintText
              ? `<div class="hint-card">“${escapeHtml(activeHintText)}”<div style="margin-top:0.4rem;font-size:0.78rem;color:var(--accent);">— ${escapeHtml(c.partner.name)}</div></div>`
              : ''
          }

          <div style="margin-top:1.4rem;padding-top:1rem;border-top:1px solid var(--border);">
            <div style="font-weight:600;margin-bottom:0.5rem;font-size:0.9rem;">📌 Tiến độ điều tra</div>
            <div style="font-size:0.85rem;color:var(--text-muted);">
              • Manh mối đã thu thập: <strong>${st.clues.length} / ${totalClues}</strong><br/>
              • Suy luận (🧩) đã kết nối: <strong>${insightsFound} / ${insightsTotal}</strong><br/>
              • Quy trình phá án: Khám hiện trường → Đưa bằng chứng khi thẩm vấn → Ghép 2 manh mối ở <em>Sổ Tay & Kết Nối</em> → Kết luận tại <em>Bảng Suy Luận</em>.
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderLocationsTab(c, st) {
    const activeLoc = c.locations.find((l) => l.id === activeLocationId) || c.locations[0];
    const locListHtml = c.locations
      .map((loc) => {
        const unlocked = hasAllRequirements(st, loc.requires);
        const visiblePoints = loc.points.filter((p) => hasAllRequirements(st, p.requires));
        const doneCount = visiblePoints.filter((p) => st.examinedPoints.includes(`${loc.id}:${p.id}`)).length;
        return `
          <div class="loc-item ${loc.id === activeLoc.id ? 'active' : ''} ${!unlocked ? 'locked' : ''}"
               onclick="${unlocked ? `window.KeigoApp.selectLocation('${loc.id}')` : ''}">
            <div>
              <div style="font-weight:600;font-size:0.93rem;">${loc.icon} ${escapeHtml(loc.name)}</div>
              <div style="font-size:0.76rem;color:var(--text-muted);">
                ${
                  unlocked
                    ? `Đã khám: ${doneCount}/${visiblePoints.length} điểm`
                    : `🔒 Cần thu thập thêm manh mối để mở khu vực này`
                }
              </div>
            </div>
            <span>${unlocked ? '→' : '🔒'}</span>
          </div>
        `;
      })
      .join('');

    const locUnlocked = hasAllRequirements(st, activeLoc.requires);
    const pointsHtml = locUnlocked
      ? activeLoc.points
          .map((pt) => {
            const ptUnlocked = hasAllRequirements(st, pt.requires);
            if (!ptUnlocked) {
              return `
                <button class="poi-btn" disabled style="opacity:0.45;cursor:not-allowed;">
                  <div style="font-weight:600;">🔒 Điểm khám nghiệm ẩn</div>
                  <div style="font-size:0.78rem;color:var(--text-muted);margin-top:0.25rem;">Cần suy luận hoặc manh mối trước đó để phát hiện.</div>
                </button>
              `;
            }
            const key = `${activeLoc.id}:${pt.id}`;
            const examined = st.examinedPoints.includes(key);
            const clueObj = pt.clue ? c.clues[pt.clue] : null;
            return `
              <button class="poi-btn ${examined ? 'examined' : ''}" onclick="window.KeigoApp.inspectPoint('${activeLoc.id}','${pt.id}')">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.25rem;">
                  <span style="font-weight:600;">${examined ? '✓ ' : '🔎 '}${escapeHtml(pt.name)}</span>
                  ${clueObj ? `<span style="font-size:0.75rem;color:var(--accent);">${clueObj.icon}</span>` : ''}
                </div>
                <div style="font-size:0.8rem;color:var(--text-muted);">
                  ${examined ? (clueObj ? `Thu được: ${escapeHtml(clueObj.title)}` : 'Đã kiểm tra') : 'Nhấn để kiểm tra chi tiết'}
                </div>
              </button>
            `;
          })
          .join('')
      : `<p style="color:var(--text-muted);">Khu vực này chưa thể tiếp cận.</p>`;

    return `
      <div class="locations-layout">
        <div class="panel-box">
          <div class="panel-title"><span>📍 Địa Điểm Điều Tra</span></div>
          ${locListHtml}
        </div>
        <div class="panel-box">
          ${
            locUnlocked && window.KeigoVisuals
              ? window.KeigoVisuals.renderCrimeSceneStage(c, activeLoc, st, sceneMode, lastPointOutput?.ptId)
              : ''
          }
          <div class="panel-title">
            <span>${activeLoc.icon} ${escapeHtml(activeLoc.name)}</span>
            <span style="font-size:0.78rem;color:var(--text-muted);">Nhấn trực tiếp vào các điểm sáng trên hiện trường hoặc danh sách bên dưới</span>
          </div>
          <p style="color:var(--text-muted);font-size:0.92rem;">${escapeHtml(activeLoc.desc)}</p>
          ${
            lastPointOutput
              ? `
                <div class="poi-output">
                  <div style="font-weight:700;color:var(--accent);margin-bottom:0.35rem;">🔎 ${escapeHtml(lastPointOutput.title)}</div>
                  <p style="font-size:0.93rem;margin-bottom:${lastPointOutput.clue ? '0.75rem' : '0'};">${escapeHtml(lastPointOutput.text)}</p>
                  ${
                    lastPointOutput.clue
                      ? `<div style="padding:0.6rem 0.85rem;border-radius:7px;background:var(--accent-soft);font-size:0.85rem;">
                          <strong>${lastPointOutput.clue.icon} ${escapeHtml(lastPointOutput.clue.title)}:</strong> ${escapeHtml(lastPointOutput.clue.desc)}
                        </div>`
                      : ''
                  }
                </div>
              `
              : ''
          }
          <div class="poi-grid">
            ${pointsHtml}
          </div>
        </div>
      </div>
    `;
  }

  function renderSuspectsTab(c, st) {
    const sus = c.suspects.find((s) => s.id === activeSuspectId) || c.suspects[0];
    const history = st.dialogueHistory[sus.id] || [['narr', sus.intro]];

    const susListHtml = c.suspects
      .map((s) => {
        const askedCount = s.topics.filter((t) => st.askedTopics.includes(`${s.id}:${t.id}`)).length;
        return `
          <div class="loc-item ${s.id === sus.id ? 'active' : ''}" onclick="window.KeigoApp.selectSuspect('${s.id}')">
            <div style="display:flex;align-items:center;gap:0.75rem;">
              <div class="avatar-circle" style="background:${s.color};width:36px;height:36px;font-size:1rem;">${escapeHtml(s.avatar)}</div>
              <div>
                <div style="font-weight:600;font-size:0.92rem;">${escapeHtml(s.name)} (${s.age})</div>
                <div style="font-size:0.75rem;color:var(--text-muted);">${escapeHtml(s.role)} · Đã hỏi ${askedCount}/${s.topics.length}</div>
              </div>
            </div>
          </div>
        `;
      })
      .join('');

    const dialogueHtml = history
      .map(([speaker, text]) => {
        if (speaker === 'narr') return `<div class="msg-line msg-narr">${escapeHtml(text)}</div>`;
        if (speaker === 'me') return `<div class="msg-line msg-me"><strong>Bạn:</strong> ${escapeHtml(text)}</div>`;
        if (speaker === 'partner')
          return `<div class="msg-line msg-partner"><strong>${escapeHtml(c.partner.name)}:</strong> ${escapeHtml(text)}</div>`;
        return `<div class="msg-line msg-them"><strong>${escapeHtml(sus.name)}:</strong> ${escapeHtml(text)}</div>`;
      })
      .join('');

    const topicsHtml = sus.topics
      .map((t) => {
        const key = `${sus.id}:${t.id}`;
        const asked = st.askedTopics.includes(key);
        return `
          <button class="topic-chip ${asked ? 'asked' : ''}" onclick="window.KeigoApp.askTopic('${sus.id}','${t.id}')">
            ${asked ? '✓ ' : '💬 '}${escapeHtml(t.label)}
          </button>
        `;
      })
      .join('');

    const presentOptionsHtml = st.clues
      .map((cid) => {
        const cl = c.clues[cid];
        if (!cl) return '';
        const presented = st.presentedClues.includes(`${sus.id}:${cid}`);
        return `<option value="${cid}">${cl.icon} ${escapeHtml(cl.title)}${presented ? ' (Đã đưa)' : ''}</option>`;
      })
      .join('');

    return `
      <div class="locations-layout">
        <div class="panel-box">
          <div class="panel-title"><span>👥 Nhân Vật Liên Quan</span></div>
          ${susListHtml}
        </div>
        <div class="panel-box">
          <div class="interrogation-stage-header">
            <div>
              ${window.KeigoVisuals ? window.KeigoVisuals.renderSuspectPortraitSvg(sus, suspectMood) : ''}
            </div>
            <div>
              <div style="font-family:var(--font-serif);font-size:1.25rem;font-weight:700;">${escapeHtml(sus.name)} (${sus.age} tuổi)</div>
              <div style="font-size:0.84rem;color:var(--accent);margin-bottom:0.25rem;">${escapeHtml(sus.role)}</div>
              <div style="font-size:0.83rem;color:var(--text-muted);">${escapeHtml(sus.bio)}</div>
              <div style="margin-top:0.55rem;display:flex;gap:0.5rem;flex-wrap:wrap;font-size:0.76rem;">
                <span style="padding:0.15rem 0.55rem;border-radius:4px;background:rgba(255,255,255,0.06);">
                  Biểu cảm: <strong style="color:${suspectMood === 'shocked' ? '#f43f5e' : suspectMood === 'nervous' ? '#fbbf24' : '#34d399'};">
                    ${suspectMood === 'shocked' ? '⚡ Dao động mạnh / Bị bắt bài' : suspectMood === 'nervous' ? '💧 Cảnh giác' : '😐 Bình tĩnh'}
                  </strong>
                </span>
              </div>
            </div>
            <div class="polygraph-box">
              <div class="polygraph-stats">
                <span>💓 NHỊP TIM: <strong style="color:${suspectBpm > 105 ? '#f43f5e' : '#10b981'}">${suspectBpm} BPM</strong></span>
                <span>⚡ ÁP LỰC: <strong style="color:${suspectStress > 65 ? '#f43f5e' : '#fbbf24'}">${suspectStress}%</strong></span>
              </div>
              <canvas id="polygraph-canvas"></canvas>
            </div>
          </div>

          <div class="dialogue-stream" id="dialogue-stream">
            ${dialogueHtml}
          </div>

          <div style="margin-bottom:1rem;">
            <div style="font-size:0.82rem;font-weight:600;color:var(--text-muted);margin-bottom:0.45rem;">CHỦ ĐỀ THẨM VẤN:</div>
            <div class="topic-list">${topicsHtml}</div>
          </div>

          <div style="padding-top:0.9rem;border-top:1px solid var(--border);display:flex;flex-wrap:wrap;gap:0.6rem;align-items:center;">
            <span style="font-size:0.84rem;font-weight:600;color:var(--accent);">🃏 Đưa chứng cứ / suy luận để đối chất:</span>
            <select id="present-select" class="support-select" style="flex:1;min-width:220px;">
              <option value="">-- Chọn manh mối trong sổ tay (${st.clues.length}) --</option>
              ${presentOptionsHtml}
            </select>
            <button class="btn btn-primary btn-sm" onclick="window.KeigoApp.presentSelectedClue('${sus.id}')">Đưa ra đối chất</button>
          </div>
        </div>
      </div>
    `;
  }

  function renderNotebookTab(c, st) {
    const slotAObj = synthSlotA ? c.clues[synthSlotA] : null;
    const slotBObj = synthSlotB ? c.clues[synthSlotB] : null;

    const remainingCombos = c.combos.filter((cb) => !hasClue(st, cb.result));
    const readyCombosCount = remainingCombos.filter((cb) => hasClue(st, cb.a) && hasClue(st, cb.b)).length;

    const filteredClueIds = st.clues.filter((cid) => {
      const cl = c.clues[cid];
      if (!cl) return false;
      if (notebookFilter === 'all') return true;
      return cl.type === notebookFilter;
    });

    const cardsHtml = filteredClueIds.length
      ? filteredClueIds
          .map((cid) => {
            const cl = c.clues[cid];
            const isSelected = synthSlotA === cid || synthSlotB === cid;
            const typeLabel =
              cl.type === 'insight' ? '🧩 Suy luận' : cl.type === 'testimony' ? '🗣️ Lời khai' : '🔎 Vật chứng';
            return `
              <div class="clue-card ${cl.type === 'insight' ? 'insight' : ''} ${isSelected ? 'selected' : ''}">
                <div>
                  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.45rem;">
                    <span style="font-weight:700;font-size:0.96rem;">${cl.icon} ${escapeHtml(cl.title)}</span>
                    <span class="clue-type-tag">${typeLabel}</span>
                  </div>
                  <p style="font-size:0.84rem;color:#d1d5db;">${escapeHtml(cl.desc)}</p>
                </div>
                <div style="display:flex;justify-content:flex-end;margin-top:0.5rem;">
                  <button class="btn btn-sm ${isSelected ? 'btn-primary' : ''}" onclick="window.KeigoApp.toggleSynthSlot('${cid}')">
                    ${isSelected ? '✓ Đang chọn trên bàn ghép' : '+ Chọn để kết nối'}
                  </button>
                </div>
              </div>
            `;
          })
          .join('')
      : `<div class="panel-box" style="grid-column:1/-1;text-align:center;color:var(--text-muted);">Chưa có manh mối nào trong mục này. Hãy khám nghiệm hiện trường hoặc thẩm vấn nghi phạm!</div>`;

    return `
      <div class="synth-workbench">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.65rem;">
          <div>
            <div style="font-family:var(--font-serif);font-size:1.15rem;font-weight:700;color:var(--accent);">
              🧠 Bàn Kết Nối Suy Luận (Logic Synthesis)
            </div>
            <div style="font-size:0.84rem;color:var(--text-muted);">
              Chọn 2 manh mối có liên hệ nhân quả hoặc mâuthuẫn nhau để rút ra <strong>Suy luận mới (🧩)</strong>.
              ${
                readyCombosCount > 0
                  ? `<span style="color:#6ee7b7;font-weight:600;">(Hiện có ${readyCombosCount} suy luận có thể ghép ngay từ các manh mối đã tìm thấy!)</span>`
                  : ''
              }
            </div>
          </div>
          <div style="display:flex;gap:0.5rem;">
            <button class="btn btn-sm" onclick="window.KeigoApp.suggestComboPiece()">💡 Gợi ý 1 mắt xích</button>
            <button class="btn btn-sm" onclick="window.KeigoApp.clearSynthSlots()">Xóa ô chọn</button>
          </div>
        </div>

        <div class="synth-slots">
          <div class="synth-slot">
            ${
              slotAObj
                ? `<span><strong>${slotAObj.icon} ${escapeHtml(slotAObj.title)}</strong></span>
                   <button class="btn btn-sm" onclick="window.KeigoApp.toggleSynthSlot('${synthSlotA}')">✕</button>`
                : `<span style="color:var(--text-dim);">Ô 1: Nhấn “+ Chọn để kết nối” ở thẻ bên dưới</span>`
            }
          </div>
          <span style="font-weight:800;color:var(--accent);font-size:1.25rem;">+</span>
          <div class="synth-slot">
            ${
              slotBObj
                ? `<span><strong>${slotBObj.icon} ${escapeHtml(slotBObj.title)}</strong></span>
                   <button class="btn btn-sm" onclick="window.KeigoApp.toggleSynthSlot('${synthSlotB}')">✕</button>`
                : `<span style="color:var(--text-dim);">Ô 2: Nhấn “+ Chọn để kết nối” ở thẻ bên dưới</span>`
            }
          </div>
          <button class="btn btn-primary" onclick="window.KeigoApp.combineSelectedClues()">⚡ Kết nối 2 manh mối</button>
        </div>
      </div>

      ${window.KeigoVisuals ? window.KeigoVisuals.renderCorkboardGraph(c, st) : ''}

      <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:1rem;">
        <button class="btn btn-sm ${notebookFilter === 'all' ? 'btn-primary' : ''}" onclick="window.KeigoApp.setNotebookFilter('all')">Tất cả (${st.clues.length})</button>
        <button class="btn btn-sm ${notebookFilter === 'evidence' ? 'btn-primary' : ''}" onclick="window.KeigoApp.setNotebookFilter('evidence')">🔎 Vật chứng</button>
        <button class="btn btn-sm ${notebookFilter === 'testimony' ? 'btn-primary' : ''}" onclick="window.KeigoApp.setNotebookFilter('testimony')">🗣️ Lời khai</button>
        <button class="btn btn-sm ${notebookFilter === 'insight' ? 'btn-primary' : ''}" onclick="window.KeigoApp.setNotebookFilter('insight')">🧩 Suy luận</button>
      </div>

      <div class="clues-grid">
        ${cardsHtml}
      </div>
    `;
  }

  function renderDeductionTab(c, st) {
    const questionsHtml = c.questions
      .map((q, idx) => {
        const ansObj = st.answers[q.id] || {};
        const optionsHtml = q.options
          .map((opt, oIdx) => {
            const chosen = ansObj.optionIndex === oIdx;
            return `
              <label class="opt-label ${chosen ? 'chosen' : ''}" onclick="window.KeigoApp.selectAnswerOption('${q.id}', ${oIdx})">
                <input type="radio" name="q_${q.id}" ${chosen ? 'checked' : ''} style="margin-top:0.25rem;" />
                <span>${escapeHtml(opt)}</span>
              </label>
            `;
          })
          .join('');

        const clueOpts = st.clues
          .map((cid) => {
            const cl = c.clues[cid];
            if (!cl) return '';
            const selected = ansObj.supportClueId === cid ? 'selected' : '';
            return `<option value="${cid}" ${selected}>${cl.icon} ${escapeHtml(cl.title)}</option>`;
          })
          .join('');

        return `
          <div class="question-card">
            <div class="question-title">Câu hỏi ${idx + 1}/${c.questions.length}: ${escapeHtml(q.q)}</div>
            <div class="opt-list">${optionsHtml}</div>
            <div>
              <div style="font-size:0.8rem;color:var(--text-muted);margin-bottom:0.3rem;">📎 Đính kèm chứng cứ / suy luận chứng minh từ sổ tay:</div>
              <select class="support-select" onchange="window.KeigoApp.selectAnswerSupport('${q.id}', this.value)">
                <option value="">-- Chọn manh mối / suy luận chứng minh --</option>
                ${clueOpts}
              </select>
            </div>
          </div>
        `;
      })
      .join('');

    return `
      <div class="panel-box" style="margin-bottom:1.25rem;">
        <div class="panel-title">
          <span>⚖️ Bảng Suy Luận Cuối Cùng</span>
          <span style="font-size:0.82rem;color:var(--text-muted);">Trả lời tất cả các câu hỏi và đính kèm chứng cứ/suy luận tương ứng</span>
        </div>
        <p style="font-size:0.9rem;color:var(--text-muted);">
          Hãy chọn đáp án chính xác và dẫn ra ít nhất một manh mối hoặc suy luận trong sổ tay làm bằng chứng thuyết phục.
        </p>
      </div>

      ${questionsHtml}

      <div style="display:flex;justify-content:flex-end;gap:0.85rem;margin-top:1.25rem;">
        <button class="btn btn-crimson" style="padding:0.75rem 1.6rem;font-size:1rem;" onclick="window.KeigoApp.submitDeductionBoard()">
          💮 Đóng Dấu Kết Luận Phá Án
        </button>
      </div>
    `;
  }

  function renderTruthModal() {
    if (!truthModalCaseId) return '';
    const c = getCaseById(truthModalCaseId);
    if (!c) return '';
    const st = getCaseState(c.id);
    const paragraphs = c.truth.map((p) => `<p class="briefing-p">${escapeHtml(p)}</p>`).join('');

    return `
      <div class="modal-backdrop" onclick="if(event.target===this) window.KeigoApp.closeTruthModal()">
        <div class="modal-box">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:1rem;">
            <div>
              <span class="case-stamp" style="display:inline-block;margin-bottom:0.4rem;">解決 · HỒ SƠ ĐÃ KHÉP LẠI · HẠNG ${st.rank || 'A'}</span>
              <h2 style="font-family:var(--font-serif);color:var(--accent);font-size:1.55rem;">Chân Tướng: ${escapeHtml(c.title)}</h2>
              <div style="font-size:0.82rem;color:var(--text-muted);">Bước điều tra: ${st.steps} (Chuẩn: ${c.par}) · Gợi ý đã dùng: ${st.hintsUsed}</div>
            </div>
            <button class="btn btn-sm" onclick="window.KeigoApp.closeTruthModal()">✕ Đóng</button>
          </div>
          <div style="border-top:1px solid var(--border);padding-top:1rem;">
            ${paragraphs}
          </div>
          <div style="margin-top:1.1rem;padding:0.95rem;border-radius:8px;background:rgba(224,179,84,0.08);border:1px solid var(--border-gold);font-size:0.84rem;color:var(--text-muted);">
            <strong style="color:var(--accent);">📚 Ghi chú nguyên tác:</strong> ${escapeHtml(c.sourceNote)}
          </div>
          <div style="display:flex;justify-content:flex-end;gap:0.65rem;margin-top:1.25rem;">
            <button class="btn" onclick="window.KeigoApp.closeTruthModal()">Ở lại hồ sơ</button>
            <button class="btn btn-primary" onclick="window.KeigoApp.closeTruthModal(); window.KeigoApp.backToLobby();">Về danh sách vụ án →</button>
          </div>
        </div>
      </div>
    `;
  }

  function render() {
    const app = document.getElementById('app-root');
    if (!app) return;
    const c = currentCaseId ? getCaseById(currentCaseId) : null;
    app.innerHTML = c ? renderCaseWorkspace(c) : renderLobby();

    const modalRoot = document.getElementById('modal-root');
    if (modalRoot) {
      modalRoot.innerHTML = renderTruthModal();
    }

    const stream = document.getElementById('dialogue-stream');
    if (stream) {
      stream.scrollTop = stream.scrollHeight;
    }

    if (window.KeigoVisuals) {
      window.KeigoVisuals.startWeatherCanvas(currentCaseId || 'lobby');
      if (activeTab === 'locations' && c) {
        const st = getCaseState(c.id);
        const activeLoc = c.locations.find((l) => l.id === activeLocationId) || c.locations[0];
        if (activeLoc && hasAllRequirements(st, activeLoc.requires)) {
          window.KeigoVisuals.startCrimeSceneCanvas(c, activeLoc, st, sceneMode, lastPointOutput?.ptId);
        }
      }
      if (activeTab === 'suspects' && c) {
        window.KeigoVisuals.startPolygraphCanvas(suspectBpm, suspectStress);
      }
    }
  }

  // Interactive Actions
  function setSceneMode(mode) {
    window.NoirAudio.playClick();
    sceneMode = mode;
    render();
  }

  function setTab(tab) {
    window.NoirAudio.playClick();
    activeTab = tab;
    render();
  }

  function selectLocation(locId) {
    window.NoirAudio.playClick();
    activeLocationId = locId;
    lastPointOutput = null;
    render();
  }

  function inspectPoint(locId, ptId) {
    const c = getCaseById(currentCaseId);
    if (!c) return;
    const st = getCaseState(c.id);
    const loc = c.locations.find((l) => l.id === locId);
    const pt = loc?.points.find((p) => p.id === ptId);
    if (!pt) return;

    const key = `${locId}:${ptId}`;
    if (!st.examinedPoints.includes(key)) {
      st.examinedPoints.push(key);
      st.steps++;
    }
    if (pt.clue) {
      unlockClue(c, st, pt.clue, `Khám nghiệm tại ${loc.name}`);
    } else {
      window.NoirAudio.playClick();
    }
    persistSave();
    lastPointOutput = {
      ptId: pt.id,
      title: pt.name,
      text: pt.text,
      clue: pt.clue ? c.clues[pt.clue] : null
    };
    render();
  }

  function selectSuspect(susId) {
    window.NoirAudio.playClick();
    activeSuspectId = susId;
    suspectMood = 'normal';
    suspectBpm = 74;
    suspectStress = 26;
    render();
  }

  function askTopic(susId, topicId) {
    const c = getCaseById(currentCaseId);
    if (!c) return;
    const st = getCaseState(c.id);
    const sus = c.suspects.find((s) => s.id === susId);
    const top = sus?.topics.find((t) => t.id === topicId);
    if (!top) return;

    if (!st.dialogueHistory[susId]) {
      st.dialogueHistory[susId] = [['narr', sus.intro]];
    }
    top.lines.forEach((line) => st.dialogueHistory[susId].push(line));

    const key = `${susId}:${topicId}`;
    if (!st.askedTopics.includes(key)) {
      st.askedTopics.push(key);
      st.steps++;
    }
    if (top.clue) {
      suspectMood = 'nervous';
      suspectBpm = 96;
      suspectStress = 58;
      unlockClue(c, st, top.clue, `Lời khai của ${sus.name}`);
    } else {
      suspectMood = 'normal';
      suspectBpm = 80;
      suspectStress = 34;
      window.NoirAudio.playClick();
    }
    persistSave();
    render();
  }

  function presentSelectedClue(susId) {
    const sel = document.getElementById('present-select');
    const clueId = sel ? sel.value : '';
    if (!clueId) {
      showToast('Chưa chọn chứng cứ', 'Hãy chọn một manh mối trong danh sách để đưa ra đối chất.');
      return;
    }
    const c = getCaseById(currentCaseId);
    if (!c) return;
    const st = getCaseState(c.id);
    const sus = c.suspects.find((s) => s.id === susId);
    const cl = c.clues[clueId];
    if (!sus || !cl) return;

    if (!st.dialogueHistory[susId]) {
      st.dialogueHistory[susId] = [['narr', sus.intro]];
    }
    st.dialogueHistory[susId].push(['narr', `⚡ Bạn đập chứng cứ lên bàn: ${cl.icon} ${cl.title}`]);

    const key = `${susId}:${clueId}`;
    if (!st.presentedClues.includes(key)) {
      st.presentedClues.push(key);
      st.steps++;
    }

    const pres = sus.presents && sus.presents[clueId];
    if (pres) {
      suspectMood = 'shocked';
      suspectBpm = 136;
      suspectStress = 92;
      if (window.KeigoVisuals) {
        window.KeigoVisuals.triggerBreakBanner(sus.name, cl.title);
      }
      pres.lines.forEach((line) => st.dialogueHistory[susId].push(line));
      if (pres.clue) {
        unlockClue(c, st, pres.clue, `Đối chất ${sus.name}`);
      } else {
        window.NoirAudio.playInsight();
      }
    } else {
      suspectMood = 'normal';
      suspectBpm = 76;
      suspectStress = 28;
      st.dialogueHistory[susId].push(['them', sus.defaultPresent || 'Tôi không biết gì về thứ này.']);
      window.NoirAudio.playClick();
    }
    persistSave();
    render();
  }

  function setNotebookFilter(f) {
    window.NoirAudio.playClick();
    notebookFilter = f;
    render();
  }

  function setLobbyCollection(col) {
    window.NoirAudio.playClick();
    lobbyCollection = col;
    render();
  }

  function toggleSynthSlot(clueId) {
    window.NoirAudio.playClick();
    if (synthSlotA === clueId) {
      synthSlotA = null;
    } else if (synthSlotB === clueId) {
      synthSlotB = null;
    } else if (!synthSlotA) {
      synthSlotA = clueId;
    } else {
      synthSlotB = clueId;
    }
    render();
  }

  function clearSynthSlots() {
    window.NoirAudio.playClick();
    synthSlotA = null;
    synthSlotB = null;
    render();
  }

  function combineSelectedClues() {
    if (!synthSlotA || !synthSlotB) {
      window.NoirAudio.playError();
      showToast('Thiếu manh mối', 'Hãy chọn đủ 2 manh mối trên bàn kết nối.');
      return;
    }
    const c = getCaseById(currentCaseId);
    if (!c) return;
    const st = getCaseState(c.id);
    st.steps++;

    const match = c.combos.find(
      (cb) => (cb.a === synthSlotA && cb.b === synthSlotB) || (cb.a === synthSlotB && cb.b === synthSlotA)
    );
    if (match) {
      if (hasClue(st, match.result)) {
        window.NoirAudio.playClick();
        showToast('Suy luận đã có sẵn', `Bạn đã mở suy luận “${c.clues[match.result].title}” trước đó.`);
      } else {
        unlockClue(c, st, match.result);
      }
      synthSlotA = null;
      synthSlotB = null;
    } else {
      window.NoirAudio.playError();
      showToast('Chưa tìm thấy mối liên hệ trực tiếp', 'Hai manh mối này chưa tạo thành kết luận trực tiếp. Hãy thử cặp khác!');
    }
    persistSave();
    render();
  }

  function suggestComboPiece() {
    const c = getCaseById(currentCaseId);
    if (!c) return;
    const st = getCaseState(c.id);
    const ready = c.combos.find((cb) => !hasClue(st, cb.result) && hasClue(st, cb.a) && hasClue(st, cb.b));
    if (ready) {
      synthSlotA = ready.a;
      synthSlotB = null;
      st.hintsUsed++;
      persistSave();
      window.NoirAudio.playClick();
      showToast(
        '💡 Gợi ý mắt xích từ cộng sự',
        `Hãy thử tìm một manh mối trong sổ tay để kết hợp với “${c.clues[ready.a].title}”.`
      );
      render();
      return;
    }
    const partial = c.combos.find((cb) => !hasClue(st, cb.result));
    if (partial) {
      showToast(
        'Cần thu thập thêm chứng cứ',
        'Bạn cần khám nghiệm thêm hiện trường hoặc đưa bằng chứng cho nghi phạm trước khi ghép suy luận tiếp theo.'
      );
    } else {
      showToast('Hoàn tất suy luận!', 'Bạn đã mở khóa toàn bộ các suy luận (🧩) của vụ án này.');
    }
  }

  function askPartnerHint() {
    const c = getCaseById(currentCaseId);
    if (!c) return;
    const st = getCaseState(c.id);
    st.hintsUsed++;
    const nextHint = c.hints.find((h) => !hasClue(st, h.until));
    activeHintText = nextHint ? nextHint.text : c.finalHint;
    window.NoirAudio.playClick();
    persistSave();
    render();
  }

  function selectAnswerOption(qId, optIdx) {
    const c = getCaseById(currentCaseId);
    if (!c) return;
    const st = getCaseState(c.id);
    if (!st.answers[qId]) st.answers[qId] = {};
    st.answers[qId].optionIndex = optIdx;
    window.NoirAudio.playClick();
    persistSave();
    render();
  }

  function selectAnswerSupport(qId, clueId) {
    const c = getCaseById(currentCaseId);
    if (!c) return;
    const st = getCaseState(c.id);
    if (!st.answers[qId]) st.answers[qId] = {};
    st.answers[qId].supportClueId = clueId;
    persistSave();
  }

  function submitDeductionBoard() {
    const c = getCaseById(currentCaseId);
    if (!c) return;
    const st = getCaseState(c.id);
    st.steps++;

    for (let i = 0; i < c.questions.length; i++) {
      const q = c.questions[i];
      const ans = st.answers[q.id];
      if (!ans || typeof ans.optionIndex !== 'number') {
        window.NoirAudio.playError();
        showToast(`Chưa trả lời câu ${i + 1}`, 'Hãy chọn đáp án cho tất cả các câu hỏi trên Bảng suy luận.');
        return;
      }
      if (!ans.supportClueId) {
        window.NoirAudio.playError();
        showToast(`Thiếu chứng cứ ở câu ${i + 1}`, 'Hãy đính kèm một manh mối hoặc suy luận chứng minh cho câu trả lời.');
        return;
      }
    }

    for (let i = 0; i < c.questions.length; i++) {
      const q = c.questions[i];
      const ans = st.answers[q.id];
      if (ans.optionIndex !== q.answer) {
        window.NoirAudio.playError();
        showToast(`Suy luận ở câu ${i + 1} chưa chính xác`, `${c.partner.name}: “Hãy xem xét lại câu hỏi số ${i + 1}, kết luận đó chưa khớp với hiện trường.”`);
        persistSave();
        return;
      }
      if (q.support && q.support.length && !q.support.includes(ans.supportClueId)) {
        window.NoirAudio.playError();
        showToast(
          `Chứng cứ câu ${i + 1} chưa đủ sức nặng`,
          `Đáp án câu ${i + 1} đã đúng hướng, nhưng hãy chọn một manh mối/suy luận trực tiếp hơn để chứng minh!`
        );
        persistSave();
        return;
      }
    }

    // Solved!
    st.solved = true;
    if (st.steps <= c.par + 8 && st.hintsUsed <= 2) {
      st.rank = 'S';
    } else if (st.steps <= c.par + 18) {
      st.rank = 'A';
    } else {
      st.rank = 'B';
    }
    persistSave();
    window.NoirAudio.playSolved();
    truthModalCaseId = c.id;
    render();
  }

  function openTruthModal(caseId) {
    truthModalCaseId = caseId;
    render();
  }

  function closeTruthModal() {
    truthModalCaseId = null;
    render();
  }

  window.KeigoApp = {
    openCase,
    backToLobby,
    resetCurrentCase,
    setSceneMode,
    setTab,
    selectLocation,
    inspectPoint,
    selectSuspect,
    askTopic,
    presentSelectedClue,
    setNotebookFilter,
    setLobbyCollection,
    toggleSynthSlot,
    clearSynthSlots,
    combineSelectedClues,
    suggestComboPiece,
    askPartnerHint,
    selectAnswerOption,
    selectAnswerSupport,
    submitDeductionBoard,
    openTruthModal,
    closeTruthModal
  };

  window.addEventListener('DOMContentLoaded', () => {
    render();
  });
})();
