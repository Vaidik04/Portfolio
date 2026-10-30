// =============================================================================
// VAIDIK GANDHI — PORTFOLIO APPLICATION CONTROLLER
// Handles dynamic rendering, search, filters, modals, code tabs, theme & copy
// =============================================================================

document.addEventListener("DOMContentLoaded", () => {
  // Global reference to data
  const data = window.PORTFOLIO_DATA;
  if (!data) {
    console.error("PORTFOLIO_DATA not found.");
    return;
  }

  // State Management
  let currentCategory = "all";
  let searchQuery = "";
  let currentCodeTabId = data.codeSnippets[0].id;
  let activePreset = "android";

  // Elements
  const projectsGrid = document.getElementById("projects-grid");
  const filterPills = document.querySelectorAll(".filter-pill");
  const projectSearchInput = document.getElementById("project-search-input");
  const projectModal = document.getElementById("project-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  const mobileToggleBtn = document.getElementById("mobile-toggle-btn");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const toastEl = document.getElementById("toast");

  // ===========================================================================
  // 1. THEME TOGGLE CONTROLLER
  // ===========================================================================
  const savedTheme = localStorage.getItem("vaidik_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "dark";
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("vaidik_theme", next);
      updateThemeIcon(next);
      showToast(`Switched to ${next} mode`);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggleBtn) return;
    themeToggleBtn.innerHTML = theme === "dark" 
      ? `<i data-lucide="sun"></i>` 
      : `<i data-lucide="moon"></i>`;
    if (window.lucide) window.lucide.createIcons();
  }

  // ===========================================================================
  // 2. MOBILE MENU DRAWER
  // ===========================================================================
  if (mobileToggleBtn && mobileDrawer) {
    mobileToggleBtn.addEventListener("click", () => {
      mobileDrawer.classList.toggle("open");
    });

    mobileDrawer.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileDrawer.classList.remove("open");
      });
    });
  }

  // ===========================================================================
  // 3. STATS STRIP RENDERING
  // ===========================================================================
  const statsContainer = document.getElementById("stats-strip-container");
  if (statsContainer && data.personal.stats) {
    statsContainer.innerHTML = data.personal.stats.map(s => `
      <div class="stat-item">
        <div class="stat-value text-gradient">${s.value}</div>
        <div class="stat-label">${s.label}</div>
        <div class="stat-sub">${s.sub}</div>
      </div>
    `).join("");
  }

  // ===========================================================================
  // 4. ENGINEERING PILLARS RENDERING
  // ===========================================================================
  const pillarsGrid = document.getElementById("pillars-grid");
  if (pillarsGrid && data.engineeringPillars) {
    pillarsGrid.innerHTML = data.engineeringPillars.map(p => `
      <div class="pillar-card">
        <div class="pillar-header">
          <div class="pillar-icon-box">
            <i data-lucide="${p.icon}"></i>
          </div>
          <span class="pillar-tag">${p.tag}</span>
        </div>
        <div>
          <h3 class="pillar-title">${p.title}</h3>
          <p class="pillar-subtitle">${p.subtitle}</p>
        </div>
        <p class="pillar-desc">${p.description}</p>
      </div>
    `).join("");
  }

  // ===========================================================================
  // 5. CODE SHOWCASE TABS CONTROLLER
  // ===========================================================================
  const codeTabsNav = document.getElementById("code-tabs-nav");
  const codeInfoTitle = document.getElementById("code-info-title");
  const codeInfoDesc = document.getElementById("code-info-desc");
  const codeInfoTag = document.getElementById("code-info-tag");
  const codeEditorFile = document.getElementById("code-editor-filename");
  const codeEditorContent = document.getElementById("code-editor-content");
  const copySnippetBtn = document.getElementById("copy-snippet-btn");

  if (codeTabsNav && data.codeSnippets) {
    codeTabsNav.innerHTML = data.codeSnippets.map((s, idx) => `
      <button class="code-tab-btn ${idx === 0 ? 'active' : ''}" data-snippet-id="${s.id}">
        <i data-lucide="file-code"></i>
        <span>${s.title}</span>
      </button>
    `).join("");

    codeTabsNav.addEventListener("click", (e) => {
      const btn = e.target.closest(".code-tab-btn");
      if (!btn) return;
      codeTabsNav.querySelectorAll(".code-tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCodeTabId = btn.getAttribute("data-snippet-id");
      renderActiveCodeSnippet();
    });

    renderActiveCodeSnippet();

    if (copySnippetBtn) {
      copySnippetBtn.addEventListener("click", () => {
        const snippet = data.codeSnippets.find(s => s.id === currentCodeTabId);
        if (snippet) {
          navigator.clipboard.writeText(snippet.code).then(() => {
            showToast("Code copied to clipboard!");
          }).catch(() => {
            showToast("Failed to copy code.");
          });
        }
      });
    }
  }

  function renderActiveCodeSnippet() {
    const snippet = data.codeSnippets.find(s => s.id === currentCodeTabId);
    if (!snippet) return;

    if (codeInfoTitle) codeInfoTitle.textContent = snippet.title;
    if (codeInfoDesc) codeInfoDesc.textContent = snippet.description;
    if (codeInfoTag) codeInfoTag.textContent = snippet.language.toUpperCase() + " · ARCHITECTURE SPEC";
    if (codeEditorFile) codeEditorFile.textContent = snippet.file;
    if (codeEditorContent) {
      codeEditorContent.textContent = snippet.code;
    }
    if (window.lucide) window.lucide.createIcons();
  }

  // ===========================================================================
  // 6. PROJECTS RENDERING, FILTERING & SEARCH
  // ===========================================================================
  function renderProjects() {
    if (!projectsGrid) return;

    const filtered = data.projects.filter(p => {
      // Category match
      const matchCat = (currentCategory === "all") || (p.category === currentCategory);
      
      // Search match
      if (!searchQuery) return matchCat;
      const q = searchQuery.toLowerCase();
      const inTitle = p.title.toLowerCase().includes(q);
      const inSub = p.subtitle.toLowerCase().includes(q);
      const inSummary = p.summary.toLowerCase().includes(q);
      const inTech = p.techStack.some(t => t.toLowerCase().includes(q));
      const inHighlights = p.highlights.some(h => h.toLowerCase().includes(q));

      return matchCat && (inTitle || inSub || inSummary || inTech || inHighlights);
    });

    if (filtered.length === 0) {
      projectsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
          <div style="font-size: 2.5rem; margin-bottom: 0.8rem; color: var(--text-muted);"><i data-lucide="search-x"></i></div>
          <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">No projects match your filter</h3>
          <p style="color: var(--text-secondary); max-width: 400px; margin: 0 auto;">Try searching for another keyword like "Kotlin", "Room", "SQLCipher", "Nearby", or select "All Projects".</p>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    projectsGrid.innerHTML = filtered.map(p => {
      const badgeClass = `badge-${p.badgeType || 'opensource'}`;
      const isPlaystore = p.badgeType === "playstore";

      return `
        <div class="project-card ${p.featured ? 'featured-card' : ''}" data-project-id="${p.id}">
          <div class="card-top-meta">
            <span class="${badgeClass}">
              <i data-lucide="${isPlaystore ? 'play' : 'layers'}"></i>
              <span>${p.badge}</span>
            </span>
            <span class="project-platform">${p.platform}</span>
          </div>

          <div style="display: flex; align-items: center; gap: 0.85rem;">
            ${p.icon ? `
              <div style="width: 48px; height: 48px; border-radius: 12px; overflow: hidden; background: rgba(255,255,255,0.06); border: 1px solid var(--border-subtle); flex-shrink: 0; display: flex; align-items: center; justify-content: center;">
                <img src="${p.icon}" alt="${p.title}" style="width: 100%; height: 100%; object-fit: cover;">
              </div>
            ` : `
              <div style="width: 48px; height: 48px; border-radius: 12px; background: rgba(56, 189, 248, 0.1); border: 1px solid var(--border-subtle); flex-shrink: 0; display: flex; align-items: center; justify-content: center; color: var(--accent-sky);">
                <i data-lucide="box"></i>
              </div>
            `}
            <div>
              <h3 class="project-title" style="font-size: 1.25rem;">${p.title}</h3>
              <p class="project-subtitle" style="font-size: 0.82rem;">${p.subtitle}</p>
            </div>
          </div>

          <p class="project-summary">${p.summary}</p>

          <div class="tech-stack-pills">
            ${p.techStack.slice(0, 5).map(t => `<span class="tech-tag">${t}</span>`).join("")}
            ${p.techStack.length > 5 ? `<span class="tech-tag">+${p.techStack.length - 5}</span>` : ""}
          </div>

          <div class="card-footer-actions">
            <button class="view-details-btn" data-project-id="${p.id}">
              <span>View Architecture & Specs</span>
              <i data-lucide="arrow-right"></i>
            </button>

            <div class="ext-links-group">
              ${p.links.playStore ? `
                <a href="${p.links.playStore}" target="_blank" rel="noopener noreferrer" class="ext-icon-link" title="Google Play Store">
                  <i data-lucide="play"></i>
                </a>
              ` : ''}
              ${p.links.github ? `
                <a href="${p.links.github}" target="_blank" rel="noopener noreferrer" class="ext-icon-link" title="GitHub Repository">
                  <i data-lucide="github"></i>
                </a>
              ` : ''}
              ${p.links.demo ? `
                <a href="${p.links.demo}" target="_blank" rel="noopener noreferrer" class="ext-icon-link" title="Live Website / Demo">
                  <i data-lucide="globe"></i>
                </a>
              ` : ''}
            </div>
          </div>
        </div>
      `;
    }).join("");

    if (window.lucide) window.lucide.createIcons();
  }

  // Initial Project Render
  renderProjects();

  // Category Filter Click Handler
  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentCategory = pill.getAttribute("data-category");
      renderProjects();
    });
  });

  // Search Input Handler
  if (projectSearchInput) {
    projectSearchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      renderProjects();
    });
  }

  // ===========================================================================
  // 7. PROJECT DETAILS MODAL DRAWER
  // ===========================================================================
  document.addEventListener("click", (e) => {
    const detailBtn = e.target.closest(".view-details-btn");
    if (!detailBtn) return;
    const projectId = detailBtn.getAttribute("data-project-id");
    openProjectModal(projectId);
  });

  function openProjectModal(projectId) {
    const p = data.projects.find(item => item.id === projectId);
    if (!p || !projectModal) return;

    const modalBody = document.getElementById("modal-dynamic-body");
    if (!modalBody) return;

    const badgeClass = `badge-${p.badgeType || 'opensource'}`;

    modalBody.innerHTML = `
      <div class="modal-header-section">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
          <span class="${badgeClass}">
            <i data-lucide="award"></i>
            <span>${p.badge}</span>
          </span>
          <span class="project-platform">${p.platform}</span>
        </div>

        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.5rem;">
          ${p.icon ? `
            <div style="width: 58px; height: 58px; border-radius: 14px; overflow: hidden; background: rgba(255,255,255,0.06); border: 1px solid var(--border-subtle); flex-shrink: 0;">
              <img src="${p.icon}" alt="${p.title}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
          ` : ''}
          <div>
            <h2 class="modal-title">${p.title}</h2>
            <p class="modal-subtitle">${p.subtitle}</p>
          </div>
        </div>
      </div>

      ${p.gallery && p.gallery.length > 0 ? `
        <div class="modal-block">
          <h4 class="modal-block-title"><i data-lucide="image"></i> Verified Application Screenshots</h4>
          <div style="display: flex; gap: 0.75rem; overflow-x: auto; padding: 0.5rem 0;">
            ${p.gallery.map(img => `
              <div style="flex: 0 0 160px; height: 260px; border-radius: 12px; overflow: hidden; border: 1px solid var(--border-subtle); box-shadow: var(--shadow-card); background: #000;">
                <img src="${img}" alt="Screenshot" style="width: 100%; height: 100%; object-fit: cover;">
              </div>
            `).join("")}
          </div>
        </div>
      ` : ''}

      <div class="modal-block">
        <h4 class="modal-block-title"><i data-lucide="alert-circle"></i> The Real-World Problem</h4>
        <p class="modal-block-text">${p.problem || p.summary}</p>
      </div>

      <div class="modal-block">
        <h4 class="modal-block-title"><i data-lucide="check-circle-2"></i> Architecture & Engineering Solution</h4>
        <p class="modal-block-text">${p.solution || p.summary}</p>
      </div>

      <div class="modal-block">
        <h4 class="modal-block-title"><i data-lucide="sparkles"></i> Key Technical Capabilities</h4>
        <div class="modal-highlights-list">
          ${p.highlights.map(h => `
            <div class="modal-highlight-item">
              <i data-lucide="check"></i>
              <span>${h}</span>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="modal-block">
        <h4 class="modal-block-title"><i data-lucide="cpu"></i> Technology Stack</h4>
        <div class="tech-stack-pills">
          ${p.techStack.map(t => `<span class="tech-tag" style="padding: 0.35rem 0.75rem; font-size: 0.82rem;">${t}</span>`).join("")}
        </div>
      </div>

      <div class="modal-actions-bar">
        ${p.links.playStore ? `
          <a href="${p.links.playStore}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="padding: 0.75rem 1.4rem;">
            <i data-lucide="play"></i>
            <span>View on Google Play</span>
          </a>
        ` : ''}
        ${p.links.github ? `
          <a href="${p.links.github}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="padding: 0.75rem 1.4rem;">
            <i data-lucide="github"></i>
            <span>Source Code / Repository</span>
          </a>
        ` : ''}
        ${p.links.demo ? `
          <a href="${p.links.demo}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="padding: 0.75rem 1.4rem;">
            <i data-lucide="globe"></i>
            <span>Visit Live Platform</span>
          </a>
        ` : ''}
      </div>
    `;

    projectModal.classList.add("open");
    document.body.style.overflow = "hidden";
    if (window.lucide) window.lucide.createIcons();
  }

  function closeModal() {
    if (!projectModal) return;
    projectModal.classList.remove("open");
    document.body.style.overflow = "";
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
  if (projectModal) {
    projectModal.addEventListener("click", (e) => {
      if (e.target === projectModal) closeModal();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // ===========================================================================
  // 8. SKILLS MATRIX RENDERING
  // ===========================================================================
  const mobileSkillsList = document.getElementById("mobile-skills-list");
  const aiSkillsList = document.getElementById("ai-skills-list");
  const backendSkillsList = document.getElementById("backend-skills-list");
  const toolsSkillsList = document.getElementById("tools-skills-list");

  if (mobileSkillsList && data.skills.mobile) {
    mobileSkillsList.innerHTML = data.skills.mobile.map(s => `
      <div class="skill-row">
        <div class="skill-info">
          <i data-lucide="${s.icon}"></i>
          <span>${s.name}</span>
        </div>
        <span class="skill-level-badge">${s.level}</span>
      </div>
    `).join("");
  }

  if (aiSkillsList && data.skills.aiVision) {
    aiSkillsList.innerHTML = data.skills.aiVision.map(s => `
      <div class="skill-row">
        <div class="skill-info">
          <i data-lucide="${s.icon}"></i>
          <span>${s.name}</span>
        </div>
        <span class="skill-level-badge">${s.level}</span>
      </div>
    `).join("");
  }

  if (backendSkillsList && data.skills.backendSystems) {
    backendSkillsList.innerHTML = data.skills.backendSystems.map(s => `
      <div class="skill-row">
        <div class="skill-info">
          <i data-lucide="${s.icon}"></i>
          <span>${s.name}</span>
        </div>
        <span class="skill-level-badge">${s.level}</span>
      </div>
    `).join("");
  }

  if (toolsSkillsList && data.skills.toolsAndWorkflow) {
    toolsSkillsList.innerHTML = data.skills.toolsAndWorkflow.map(s => `
      <div class="skill-row">
        <div class="skill-info">
          <i data-lucide="${s.icon}"></i>
          <span>${s.name}</span>
        </div>
        <span class="skill-level-badge">Proficient</span>
      </div>
    `).join("");
  }

  // ===========================================================================
  // 9. JOURNEY TIMELINE RENDERING
  // ===========================================================================
  const timelineContainer = document.getElementById("timeline-container");
  if (timelineContainer && data.journey) {
    timelineContainer.innerHTML = data.journey.map(j => `
      <div class="timeline-node">
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <div class="timeline-period">${j.period}</div>
          <h3 class="timeline-role">${j.role}</h3>
          <div class="timeline-org">${j.organization}</div>
          <p class="timeline-desc">${j.description}</p>
        </div>
      </div>
    `).join("");
  }

  // ===========================================================================
  // 10. PRESET MESSAGE INQUIRY HUB
  // ===========================================================================
  const presetTabs = document.querySelectorAll(".preset-tab");
  const msgPreviewArea = document.getElementById("msg-preview-area");
  const copyMsgBtn = document.getElementById("copy-msg-btn");
  const sendMailBtn = document.getElementById("send-mail-btn");

  const messagePresets = {
    android: {
      subject: "Android Product Development Inquiry — VaidikTech",
      body: `Hi Vaidik,\n\nI reviewed your portfolio and was impressed by Girvi, AdvoKosh, and your offline-first Android architecture. I'd love to discuss building or maintaining a native Android application for our business.\n\nLet's connect!\nBest regards,`
    },
    ai: {
      subject: "AI & Distributed Systems Collaboration",
      body: `Hi Vaidik,\n\nI saw your work on SwarmOS (P2P Nearby Connections ML Swarm) and SkyCanvas (MediaPipe Hands GPU). I'm working on a project in on-device AI/Computer Vision and would like to collaborate.\n\nBest regards,`
    },
    general: {
      subject: "Connecting with Vaidik Gandhi (Founder, VaidikTech)",
      body: `Hi Vaidik,\n\nI came across your developer profile and wanted to connect regarding potential engineering opportunities and projects.\n\nLooking forward to speaking with you!\nBest regards,`
    }
  };

  function updatePresetMessage() {
    if (!msgPreviewArea) return;
    const current = messagePresets[activePreset] || messagePresets.android;
    msgPreviewArea.textContent = current.body;

    if (sendMailBtn) {
      sendMailBtn.href = `mailto:${data.personal.links.email}?subject=${encodeURIComponent(current.subject)}&body=${encodeURIComponent(current.body)}`;
    }
  }

  presetTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      presetTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      activePreset = tab.getAttribute("data-preset");
      updatePresetMessage();
    });
  });

  updatePresetMessage();

  if (copyMsgBtn) {
    copyMsgBtn.addEventListener("click", () => {
      const current = messagePresets[activePreset] || messagePresets.android;
      navigator.clipboard.writeText(current.body).then(() => {
        showToast("Inquiry message copied to clipboard!");
      }).catch(() => {
        showToast("Could not copy message.");
      });
    });
  }

  // ===========================================================================
  // 11. TOAST NOTIFICATION HELPER
  // ===========================================================================
  function showToast(message) {
    if (!toastEl) return;
    toastEl.innerHTML = `<i data-lucide="check-circle" style="color: #38bdf8;"></i> <span>${message}</span>`;
    toastEl.classList.add("show");
    if (window.lucide) window.lucide.createIcons();
    setTimeout(() => {
      toastEl.classList.remove("show");
    }, 3200);
  }

  // ===========================================================================
  // 12. ACTIVE NAVIGATION LINK SPY
  // ===========================================================================
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    const header = document.querySelector(".site-header");
    if (header) {
      if (scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });

  // Re-run icons at the end
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
