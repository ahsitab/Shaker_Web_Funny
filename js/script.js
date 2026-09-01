// ============================================================
// BANGLA FAMILY WEBSITE — Main Script
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHeroParticles();
  initMainCharacter();
  initBrotherGallery();
  initFamilyMembers();
  initFamilyTree();
  initBossPoll();
  initDialogueSlider();
  // initGroupChat();
  // initStatistics();
  // initAwards();
  initFamilyConcern();
  // initFunnyFact();
  // initSecretButton();
  // initTimeline();
  initFamilyGallery();
  initLightbox();
  initScrollAnimations();
  initBackToTop();
  initNavSmoothScroll();
});

// ===================== HELPERS =====================
function makeStars(count, max = 5, filled = '⭐', empty = '☆') {
  let html = '';
  for (let i = 1; i <= max; i++) {
    html += `<span class="star ${i <= count ? 'filled' : 'empty'}">${i <= count ? filled : empty}</span>`;
  }
  return html;
}

function showToast(msg, duration = 3000) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), duration);
}

function openModal(html) {
  const overlay = document.getElementById('modal-overlay');
  const box = document.getElementById('modal-box');
  box.innerHTML = html;
  overlay.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('show');
  document.body.style.overflow = '';
}

function placeholderPhoto(emoji = '👤') {
  return `<div class="member-placeholder-photo">${emoji}</div>`;
}

function memberPhotoHtml(src, alt, cls = '') {
  return `<img src="${src}" alt="${alt}" class="${cls}" onerror="this.parentElement.innerHTML='${placeholderPhoto()}'">`;
}

// ===================== NAVBAR =====================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileClose = document.getElementById('mobile-nav-close');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveNavLink();
  });

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('show');
    document.body.style.overflow = mobileNav.classList.contains('show') ? 'hidden' : '';
  });

  mobileClose?.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('show');
    document.body.style.overflow = '';
  });

  mobileNav?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('show');
      document.body.style.overflow = '';
    });
  });
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
}

// ===================== HERO PARTICLES =====================
function initHeroParticles() {
  const container = document.querySelector('.hero-particles');
  if (!container) return;
  const icons = ['💍', '❤️', '👑', '😂', '🎉', '⭐', '🌟', '💕', '🏠', '👨‍👩‍👦'];
  for (let i = 0; i < 12; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.textContent = icons[i % icons.length];
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation-delay: ${Math.random() * 4}s;
      animation-duration: ${4 + Math.random() * 4}s;
      font-size: ${1 + Math.random()}rem;
    `;
    container.appendChild(p);
  }
}

// ===================== MAIN CHARACTER =====================
function initMainCharacter() {
  if (!window.mainCharacter) return;
  const mc = mainCharacter;
  const nameEl = document.getElementById('mc-name');
  const nicknameEl = document.getElementById('mc-nickname');
  const titleEl = document.getElementById('mc-title');
  const introEl = document.getElementById('mc-intro');
  const descEl = document.getElementById('mc-desc');
  const dialogueEl = document.getElementById('mc-dialogue');
  const tagsEl = document.getElementById('mc-tags');
  const ratingsEl = document.getElementById('mc-ratings');
  const photoEl = document.getElementById('mc-photo');

  if (nameEl) nameEl.textContent = mc.name;
  if (nicknameEl) nicknameEl.textContent = `ডাকনাম: "${mc.nickname}"`;
  if (titleEl) titleEl.textContent = mc.funnyTitle;
  if (introEl) introEl.textContent = mc.intro;
  if (descEl) descEl.textContent = mc.description;
  if (dialogueEl) dialogueEl.textContent = mc.specialDialogue;
  if (photoEl) {
    photoEl.src = mc.heroImage;
    photoEl.alt = mc.name;
  }

  if (tagsEl) {
    tagsEl.innerHTML = mc.personality.map(t => `<span class="char-tag">${t}</span>`).join('') +
      mc.hobbies.map(h => `<span class="char-tag">🎯 ${h}</span>`).join('');
  }

  if (ratingsEl) {
    const ratingLabels = {
      calm: 'ঠান্ডা থাকার ক্ষমতা 🧊',
      anger: 'রাগের পরিমাণ 😤',
      love: 'পরিবারকে ভালোবাসা ❤️',
      wedding_thought: 'বিয়ের চিন্তা 💍',
      facebook: 'Facebook Activity 📱',
      talk: 'কথা বলার পরিমাণ 💬',
      sleep: 'ঘুমানোর পরিমাণ 😴',
      food: 'খাবারের প্রতি ভালোবাসা 🍽️'
    };
    ratingsEl.innerHTML = Object.entries(mc.ratings).map(([key, val]) =>
      `<div class="rating-row">
        <span class="rating-label">${ratingLabels[key] || key}</span>
        <span class="rating-stars">${makeStars(val)}</span>
      </div>`
    ).join('');
  }
}

// ===================== BROTHER GALLERY =====================
let currentGalleryItems = [];
let currentLightboxIndex = 0;
let gallerySource = 'brother';

function initBrotherGallery() {
  if (!window.brotherPhotos) return;
  renderBrotherGallery('সব');

  const filterBtns = document.querySelectorAll('.brother-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderBrotherGallery(btn.dataset.cat);
    });
  });
}

function renderBrotherGallery(category) {
  const container = document.getElementById('brother-gallery-grid');
  if (!container) return;

  const filtered = category === 'সব'
    ? brotherPhotos
    : brotherPhotos.filter(p => p.category === category);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="gallery-placeholder">
        <p>📸 এই category-তে এখনো ছবি যোগ করা হয়নি।</p>
        <small>images/brother/ ফোল্ডারে ছবি যোগ করুন এবং data.js-এ তথ্য আপডেট করুন।</small>
      </div>`;
    return;
  }

  container.innerHTML = filtered.map((photo, i) => `
    <div class="gallery-item" data-index="${i}" data-src="${photo.src}" data-caption="${photo.caption || ''}">
      <img src="${photo.src}" alt="${photo.caption || 'ছবি'}" loading="lazy"
           onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22><rect fill=%22%231a1a35%22 width=%22300%22 height=%22300%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23e8a045%22 font-size=%2248%22>📸</text></svg>'">
      <div class="gallery-zoom-icon">🔍</div>
      ${photo.caption ? `<div class="gallery-caption">${photo.caption}</div>` : ''}
    </div>
  `).join('');

  currentGalleryItems = filtered;
  gallerySource = 'brother';

  container.querySelectorAll('.gallery-item').forEach((item, i) => {
    item.addEventListener('click', () => openLightbox(i, filtered));
  });
}

// ===================== FAMILY MEMBERS =====================
function initFamilyMembers() {
  if (!window.familyMembers) return;
  const container = document.getElementById('family-grid');
  if (!container) return;

  container.innerHTML = familyMembers.map(m => `
    <div class="member-card fade-in" data-id="${m.id}">
      <div class="member-card-photo">
        ${m.image ? memberPhotoHtml(m.image, m.name) : placeholderPhoto(m.emoji)}
        <div class="member-card-photo-overlay"></div>
      </div>
      <div class="member-card-body">
        <div class="member-relation">${m.relation}</div>
        <div class="member-name">${m.name}</div>
        <div class="member-title">${m.funnyTitle}</div>
        <div class="member-dialogue-preview">"${m.dialogue}"</div>
        <button class="member-btn" data-id="${m.id}">বিস্তারিত দেখুন →</button>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.member-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const member = familyMembers.find(m => m.id === btn.dataset.id);
      if (member) openMemberModal(member);
    });
  });
}

function openMemberModal(m) {
  const ratingLabels = {
    calm: 'ঠান্ডা থাকার ক্ষমতা 🧊',
    anger: 'রাগের পরিমাণ 😤',
    love: 'পরিবারকে ভালোবাসা ❤️',
    wedding_thought: 'বিয়ের চিন্তা 💍',
    facebook: 'Facebook Activity 📱',
    talk: 'কথা বলা 💬',
    sleep: 'ঘুমানো 😴',
    food: 'খাবারের প্রতি ভালোবাসা 🍽️'
  };

  const html = `
    <button class="modal-close" id="modal-close-btn">✕</button>
    <div class="modal-photo-wrap">
      ${m.image
        ? `<img src="${m.image}" alt="${m.name}" onerror="this.parentElement.innerHTML='<div style=\\'height:200px;display:flex;align-items:center;justify-content:center;font-size:5rem;\\'>${m.emoji}</div>'">`
        : `<div style="height:250px;display:flex;align-items:center;justify-content:center;font-size:6rem;background:var(--bg-card);">${m.emoji}</div>`
      }
      <div class="modal-photo-overlay"></div>
    </div>
    <div class="modal-body">
      <div class="modal-relation">${m.relation}</div>
      <div class="modal-name">${m.name}</div>
      <div class="modal-funny-title">${m.funnyTitle}</div>

      <div class="modal-dialogue">"${m.dialogue}"</div>

      <div class="modal-section-title">পরিচয়</div>
      <div class="modal-description">${m.description}</div>

      ${m.specialAbility ? `
        <div class="modal-section-title">বিশেষ ক্ষমতা ⚡</div>
        <div class="modal-special-ability">${m.specialAbility}</div>
      ` : ''}

      ${m.funnyFact ? `
        <div class="modal-section-title">মজার তথ্য 😂</div>
        <div class="modal-special-ability">${m.funnyFact}</div>
      ` : ''}

      ${m.personality && m.personality.length > 0 ? `
        <div class="modal-section-title">Personality</div>
        <div class="modal-tags">${m.personality.map(p => `<span class="modal-tag">${p}</span>`).join('')}</div>
      ` : ''}

      ${m.award ? `
        <div style="background:linear-gradient(135deg,rgba(245,200,66,0.1),rgba(232,160,69,0.1));border:1px solid rgba(245,200,66,0.2);border-radius:10px;padding:0.8rem 1rem;margin-bottom:1.2rem;">
          <span style="font-size:1.2rem;">🏆 </span>
          <span style="color:var(--gold);font-weight:700;">${m.award}</span>
        </div>
      ` : ''}

      <div class="modal-section-title">রেটিং</div>
      <div class="modal-ratings">
        ${Object.entries(m.ratings).map(([key, val]) => `
          <div class="modal-rating-row">
            <span class="modal-rating-label">${ratingLabels[key] || key}</span>
            <span class="modal-rating-stars">${makeStars(val)}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  openModal(html);
  document.getElementById('modal-close-btn')?.addEventListener('click', closeModal);
}

// ===================== FAMILY TREE =====================
function initFamilyTree() {
  const container = document.getElementById('family-tree-container');
  if (!container) return;

  const members = window.familyMembers || [];
  const findMember = (id) => members.find(m => m.id === id) || null;

  container.innerHTML = `
    <div class="tree-wrapper">
      <!-- Row 1: Parents -->
      <div class="tree-level">
        ${renderTreeNode('abba', members)}
        <div style="display:flex;align-items:center;padding:0 0.5rem;color:var(--text-muted);font-size:1.5rem;">+</div>
        ${renderTreeNode('amma', members)}
      </div>
      <div class="tree-connector"><div class="tree-connector-line"></div></div>
      <!-- Row 2: Children -->
      <div class="tree-level" style="position:relative;">
        <div class="tree-connector-h" style="position:absolute;top:0;width:60%;"></div>
        ${renderTreeNode('bhai1', members)}
        ${renderTreeNode('shaker', members)}
        ${renderTreeNode('bhai2', members)}
      </div>
      <div class="tree-connector"><div class="tree-connector-line"></div></div>
      <!-- Row 3: Bhai1 family -->
      <div class="tree-level">
        ${renderTreeNode('bhabi', members)}
        <div style="display:flex;align-items:center;padding:0 0.3rem;color:var(--text-muted);">→</div>
        ${renderTreeNode('bhaisti', members)}
      </div>
      <!-- Row 4: Others -->
      <div style="margin-top:2rem;border-top:1px dashed var(--border-glass);padding-top:2rem;width:100%;">
        <p style="text-align:center;color:var(--text-muted);font-size:0.85rem;margin-bottom:1.5rem;">খালা-মামা-কাজিন পরিবার</p>
        <div class="tree-level" style="flex-wrap:wrap;">
          ${renderTreeNode('khala1', members)}
          ${renderTreeNode('khala2', members)}
          ${renderTreeNode('mama1', members)}
          ${renderTreeNode('mama2', members)}
          ${renderTreeNode('khalu', members)}
          ${renderTreeNode('cousin1', members)}
          ${renderTreeNode('cousin2', members)}
          ${renderTreeNode('cousin3', members)}
        </div>
      </div>
    </div>
  `;

  container.querySelectorAll('.tree-node').forEach(node => {
    node.addEventListener('click', () => {
      const id = node.dataset.id;
      const member = members.find(m => m.id === id);
      if (member) openMemberModal(member);
    });
  });
}

function renderTreeNode(id, members) {
  const m = members.find(m => m.id === id);
  if (!m) {
    return `<div class="tree-node" data-id="${id}">
      <div class="tree-node-photo"><div class="tree-node-placeholder">👤</div></div>
      <div class="tree-node-name">${id}</div>
    </div>`;
  }
  return `<div class="tree-node" data-id="${id}" title="${m.relation}">
    <div class="tree-node-photo">
      ${m.image
        ? `<img src="${m.image}" alt="${m.name}" style="width:100%;height:100%;object-fit:cover;object-position:center top;" onerror="this.parentElement.innerHTML='<div class=\\'tree-node-placeholder\\'>${m.emoji}</div>'">`
        : `<div class="tree-node-placeholder">${m.emoji}</div>`
      }
    </div>
    <div class="tree-node-name">${m.name}</div>
    <div style="font-size:0.65rem;color:var(--primary);">${m.relation}</div>
  </div>`;
}

// ===================== BOSS POLL =====================
function initBossPoll() {
  if (!window.bossPollOptions) return;
  const container = document.getElementById('boss-poll-grid');
  if (!container) return;

  const storageKey = 'family_boss_poll_vote';
  let savedVotes = JSON.parse(localStorage.getItem(storageKey) || 'null');
  let votes = savedVotes || bossPollOptions.reduce((acc, opt) => {
    acc[opt.id] = opt.votes;
    return acc;
  }, {});
  let hasVoted = localStorage.getItem('family_boss_voted') === '1';

  function totalVotes() {
    return Object.values(votes).reduce((a, b) => a + b, 0);
  }

  function renderPoll() {
    const total = totalVotes();
    container.innerHTML = bossPollOptions.map(opt => {
      const pct = Math.round((votes[opt.id] / total) * 100);
      return `
        <div class="poll-option ${hasVoted ? 'voted' : ''}" data-id="${opt.id}">
          <div class="poll-option-photo">
            ${opt.image
              ? `<img src="${opt.image}" alt="${opt.name}" style="width:100%;height:100%;object-fit:cover;object-position:center top;" onerror="this.parentElement.innerHTML='<div class=\\'poll-option-emoji\\'>👤</div>'">`
              : `<div class="poll-option-emoji">👑</div>`
            }
          </div>
          <div class="poll-option-name">${opt.name}</div>
          <div class="poll-bar-wrap"><div class="poll-bar" style="width:${hasVoted ? pct : 0}%"></div></div>
          <div class="poll-percent">${hasVoted ? pct + '%' : '?%'}</div>
        </div>
      `;
    }).join('');

    if (!hasVoted) {
      container.querySelectorAll('.poll-option').forEach(opt => {
        opt.addEventListener('click', () => {
          const id = opt.dataset.id;
          votes[id] = (votes[id] || 0) + 1;
          hasVoted = true;
          localStorage.setItem(storageKey, JSON.stringify(votes));
          localStorage.setItem('family_boss_voted', '1');
          renderPoll();
          showPollResult();
          showToast('ভোট দেওয়া হয়েছে! ধন্যবাদ 🗳️');
        });
      });
    }
  }

  function showPollResult() {
    const result = document.getElementById('poll-result');
    if (!result) return;
    const total = totalVotes();
    const winner = bossPollOptions.reduce((a, b) => votes[a.id] > votes[b.id] ? a : b);
    const winnerPct = Math.round((votes[winner.id] / total) * 100);
    result.innerHTML = `
      <div style="font-size:2.5rem;margin-bottom:0.5rem;">👑</div>
      <div style="font-size:0.9rem;color:var(--text-muted);margin-bottom:0.3rem;">আসল Boss:</div>
      <div class="poll-winner-name">${winner.name}</div>
      <div style="color:var(--primary);font-size:1.2rem;font-weight:700;">${winnerPct}% ভোট পেয়েছেন</div>
    `;
    result.classList.add('show');
  }

  renderPoll();
  if (hasVoted) showPollResult();
}

// ===================== DIALOGUE SLIDER =====================
function initDialogueSlider() {
  if (!window.funnyDialogues) return;
  const container = document.getElementById('dialogue-slider');
  const dotsEl = document.getElementById('dialogue-dots');
  const prevBtn = document.getElementById('dialogue-prev');
  const nextBtn = document.getElementById('dialogue-next');
  if (!container) return;

  let current = 0;
  const total = funnyDialogues.length;

  container.innerHTML = funnyDialogues.map((d, i) => `
    <div class="dialogue-card" style="display:${i === 0 ? 'block' : 'none'};" data-index="${i}">
      <div class="dialogue-inner">
        <div class="dialogue-quote-mark">"</div>
        <div class="dialogue-emoji">${d.emoji}</div>
        <div class="dialogue-text">"${d.text}"</div>
        <div class="dialogue-speaker">
          <div class="dialogue-speaker-photo">
            ${d.image ? `<img src="${d.image}" alt="${d.speaker}" style="width:100%;height:100%;object-fit:cover;object-position:center top;" onerror="this.innerHTML='👤'">` : '👤'}
          </div>
          <div class="dialogue-speaker-name">— ${d.speaker}</div>
        </div>
      </div>
    </div>
  `).join('');

  if (dotsEl) {
    dotsEl.innerHTML = funnyDialogues.map((_, i) =>
      `<div class="dialogue-dot ${i === 0 ? 'active' : ''}" data-i="${i}"></div>`
    ).join('');
    dotsEl.querySelectorAll('.dialogue-dot').forEach(dot => {
      dot.addEventListener('click', () => goTo(parseInt(dot.dataset.i)));
    });
  }

  function goTo(idx) {
    container.querySelectorAll('.dialogue-card').forEach(c => c.style.display = 'none');
    container.querySelector(`[data-index="${idx}"]`).style.display = 'block';
    dotsEl?.querySelectorAll('.dialogue-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
    current = idx;
  }

  prevBtn?.addEventListener('click', () => goTo((current - 1 + total) % total));
  nextBtn?.addEventListener('click', () => goTo((current + 1) % total));

  // Auto-advance
  setInterval(() => goTo((current + 1) % total), 5000);
}

// ===================== GROUP CHAT =====================
function initGroupChat() {
  if (!window.groupChatMessages) return;
  const container = document.getElementById('chat-messages');
  if (!container) return;

  container.innerHTML = '';
  groupChatMessages.forEach((msg, i) => {
    const msgEl = document.createElement('div');
    msgEl.className = `chat-message ${msg.isOwn ? 'own' : ''}`;
    msgEl.style.opacity = '0';
    msgEl.style.transform = 'translateY(10px)';
    msgEl.innerHTML = `
      <div class="chat-avatar">
        ${msg.image ? `<img src="${msg.image}" alt="${msg.sender}" onerror="this.innerHTML='👤'">` : '<span style="font-size:1.5rem;display:flex;align-items:center;justify-content:center;height:100%;">👤</span>'}
      </div>
      <div class="chat-bubble-wrap">
        <div class="chat-sender-name">${msg.sender}</div>
        <div class="chat-bubble">${msg.message}</div>
        <div class="chat-time">${msg.time}</div>
      </div>
    `;
    container.appendChild(msgEl);

    setTimeout(() => {
      msgEl.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      msgEl.style.opacity = '1';
      msgEl.style.transform = 'translateY(0)';
    }, i * 600 + 300);
  });
}

// ===================== STATISTICS =====================
function initStatistics() {
  if (!window.familyStats) return;
  const container = document.getElementById('stats-grid');
  if (!container) return;

  container.innerHTML = familyStats.map(stat => `
    <div class="stat-card fade-in">
      <div class="stat-emoji">${stat.emoji}</div>
      <div class="stat-photo">
        <img src="${stat.image}" alt="${stat.winner}" onerror="this.parentElement.innerHTML='<span style=\\'font-size:2rem;display:flex;align-items:center;justify-content:center;height:100%;\\'>👤</span>'">
      </div>
      <div class="stat-info">
        <div class="stat-title">${stat.title}</div>
        <div class="stat-winner">${stat.winner}</div>
        <div class="stat-bar-wrap">
          <div class="stat-bar" data-width="${Math.min(stat.percentage, 100)}"></div>
        </div>
        <div class="stat-percent">${stat.percentage}%</div>
      </div>
    </div>
  `).join('');

  // Animate bars on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.stat-bar').forEach(bar => {
          bar.style.width = bar.dataset.width + '%';
        });
      }
    });
  }, { threshold: 0.3 });

  observer.observe(container);
}

// ===================== AWARDS =====================
function initAwards() {
  if (!window.funnyAwards) return;
  const container = document.getElementById('awards-grid');
  if (!container) return;

  container.innerHTML = funnyAwards.map(award => `
    <div class="award-card fade-in">
      <div class="award-trophy">${award.trophy}</div>
      <div class="award-winner-photo">
        <img src="${award.image}" alt="${award.winner}" onerror="this.parentElement.innerHTML='<span style=\\'font-size:2rem;display:flex;align-items:center;justify-content:center;height:100%;\\'>👤</span>'">
      </div>
      <div class="award-title">${award.title}</div>
      <div class="award-winner-name">${award.winner}</div>
      <div class="award-description">${award.description}</div>
    </div>
  `).join('');
}

// ===================== FAMILY CONCERN =====================
function initFamilyConcern() {
  const container = document.getElementById('concern-chat');
  if (!container) return;

  const concerns = [
    {
      side: 'left',
      speaker: 'খালা-১',
      image: 'images/family/khala1.jpg',
      message: 'ভাগিনার বিয়ের চিন্তায় অফিস করতে পারতেছি না। সবাই বলো, কী করব? 😭',
      emoji: '💍'
    },
    {
      side: 'right',
      speaker: 'খালা-২',
      image: 'images/family/khala2.jpg',
      message: 'আপু শান্ত হও। ভাগিনা তুই তোর মতো বিয়া কর, কেউ আটকাবে না। 😎',
      emoji: ''
    },
    {
      side: 'left',
      speaker: 'মামা-২',
      image: 'images/family/mama2.jpg',
      message: 'আপু, চিন্তা নেই। Facebook-এ একটা পোস্ট দিয়ে দাও, পাত্রী খুঁজে নেব। 📱',
      emoji: ''
    },
    {
      side: 'right',
      speaker: 'মামা-১',
      image: 'images/family/mama1.jpg',
      message: 'মামা, আমি দোষী। আগে কেন পাত্রী খোঁজিনি। 😔',
      emoji: ''
    },
    {
      side: 'left',
      speaker: 'খালু',
      image: 'images/family/khalu.jpg',
      message: 'সবাই শান্ত হও। সিদ্ধান্তটা তাহলে আমি দিচ্ছি। 🧠',
      emoji: ''
    },
    {
      side: 'right',
      speaker: 'আব্বা',
      image: 'images/family/abba.jpg',
      message: 'যাই হোক, ঠান্ডা থাক। সব ঠিক হয়ে যাবে। 😌',
      emoji: ''
    },
    {
      side: 'left',
      speaker: 'শাকের',
      image: 'images/family/shaker.jpg',
      message: 'আমি সব দেখতেছি... 😂',
      emoji: ''
    }
  ];

  container.innerHTML = concerns.map(c => `
    <div class="concern-message ${c.side === 'right' ? 'right' : ''}">
      <div class="concern-avatar">
        <img src="${c.image}" alt="${c.speaker}" onerror="this.innerHTML='👤'" style="width:100%;height:100%;object-fit:cover;object-position:center top;">
      </div>
      <div class="concern-bubble">
        <div class="concern-name">${c.speaker}</div>
        <div class="concern-text">${c.message}</div>
      </div>
    </div>
  `).join('');
}

// ===================== FUNNY FACT =====================
function initFunnyFact() {
  if (!window.funnyFacts) return;
  const btn = document.getElementById('funny-fact-btn');
  const display = document.getElementById('funny-fact-display');
  const factText = document.getElementById('fact-text');
  if (!btn || !display) return;

  let lastIndex = -1;
  btn.addEventListener('click', () => {
    let index;
    do { index = Math.floor(Math.random() * funnyFacts.length); } while (index === lastIndex);
    lastIndex = index;
    if (factText) factText.textContent = funnyFacts[index];
    display.classList.remove('show');
    setTimeout(() => display.classList.add('show'), 50);
  });
}

// ===================== SECRET BUTTON =====================
function initSecretButton() {
  const btn = document.getElementById('secret-btn');
  if (!btn) return;

  let clicked = false;
  btn.addEventListener('click', () => {
    if (!clicked) {
      clicked = true;
      btn.textContent = '⚠️ আপনাকে আগেই সতর্ক করা হয়েছিল!';
      btn.style.borderColor = 'var(--accent)';
      btn.style.color = 'var(--accent)';
      setTimeout(() => {
        btn.textContent = '🎉 আপনি পরিবারের গোপন তথ্য unlock করেছেন!';
        btn.style.background = 'linear-gradient(135deg, var(--primary), var(--gold))';
        btn.style.color = '#fff';
        btn.style.borderStyle = 'solid';
        triggerConfetti();
        showToast('🎉 গোপন তথ্য: এই পরিবারে সবাই একে অপরকে ভীষণ ভালোবাসে! ❤️', 5000);
      }, 1500);
    } else {
      triggerConfetti();
      showToast('আরও confetti! 🎊');
    }
  });
}

function triggerConfetti() {
  const colors = ['#e8a045', '#f5c842', '#6b3fa0', '#ff6b9d', '#00d4ff', '#2ecc71'];
  for (let i = 0; i < 60; i++) {
    setTimeout(() => {
      const c = document.createElement('div');
      c.className = 'confetti-piece';
      c.style.cssText = `
        left: ${Math.random() * 100}vw;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        width: ${6 + Math.random() * 10}px;
        height: ${6 + Math.random() * 10}px;
        border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
        animation-duration: ${2 + Math.random() * 2}s;
        animation-name: confettiFall;
      `;
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 4000);
    }, i * 30);
  }
}

// ===================== TIMELINE =====================
function initTimeline() {
  if (!window.memoryTimeline) return;
  const container = document.getElementById('timeline-container');
  if (!container) return;

  container.innerHTML = memoryTimeline.map((item, i) => `
    <div class="timeline-item fade-in" style="transition-delay:${i * 0.15}s">
      <div class="timeline-content">
        <div class="timeline-emoji">${item.emoji}</div>
        <div class="timeline-year">${item.year}</div>
        <div class="timeline-title">${item.title}</div>
        <div class="timeline-desc">${item.description}</div>
        ${item.image ? `
          <div class="timeline-photo">
            <img src="${item.image}" alt="${item.title}" onerror="this.parentElement.style.display='none'" style="width:100%;height:100%;object-fit:cover;object-position:center top;">
          </div>` : ''}
      </div>
      <div class="timeline-dot"></div>
    </div>
  `).join('');
}

// ===================== FAMILY GALLERY =====================
function initFamilyGallery() {
  if (!window.familyGallery) return;
  const container = document.getElementById('fgallery-grid');
  const filterBtns = document.querySelectorAll('.fgallery-filter-btn');
  if (!container) return;

  function renderFamilyGallery(cat) {
    const filtered = cat === 'সব' ? familyGallery : familyGallery.filter(g => g.category === cat);
    container.innerHTML = filtered.map((g, i) => `
      <div class="fgallery-item" data-index="${i}">
        <img src="${g.src}" alt="${g.member}" loading="lazy"
             onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><rect fill=%22%231a1a35%22 width=%22200%22 height=%22200%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23e8a045%22 font-size=%2232%22>📷</text></svg>'">
        <div class="fgallery-overlay">
          <div class="fgallery-member">${g.member}</div>
          ${g.caption ? `<div class="fgallery-caption">${g.caption}</div>` : ''}
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.fgallery-item').forEach((item, i) => {
      item.addEventListener('click', () => openLightbox(i, filtered.map(g => ({ src: g.src, caption: g.caption }))));
    });
  }

  renderFamilyGallery('সব');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderFamilyGallery(btn.dataset.cat);
    });
  });
}

// ===================== LIGHTBOX =====================
let lightboxItems = [];
let lightboxIdx = 0;

function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  document.getElementById('lb-close')?.addEventListener('click', closeLightbox);
  document.getElementById('lb-prev')?.addEventListener('click', () => navigateLightbox(-1));
  document.getElementById('lb-next')?.addEventListener('click', () => navigateLightbox(1));

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('show')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });

  // Touch/swipe
  let touchStartX = 0;
  lightbox.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  lightbox.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) navigateLightbox(diff > 0 ? 1 : -1);
  });
}

function openLightbox(index, items) {
  lightboxItems = items;
  lightboxIdx = index;
  updateLightbox();
  document.getElementById('lightbox').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('show');
  document.body.style.overflow = '';
}

function navigateLightbox(dir) {
  lightboxIdx = (lightboxIdx + dir + lightboxItems.length) % lightboxItems.length;
  updateLightbox();
}

function updateLightbox() {
  const item = lightboxItems[lightboxIdx];
  const img = document.getElementById('lb-img');
  const caption = document.getElementById('lb-caption');
  const counter = document.getElementById('lb-counter');
  if (img) {
    img.style.opacity = '0';
    img.src = item.src || item;
    img.onload = () => { img.style.transition = 'opacity 0.3s'; img.style.opacity = '1'; };
    img.onerror = () => { img.style.opacity = '1'; };
  }
  if (caption) caption.textContent = item.caption || '';
  if (counter) counter.textContent = `${lightboxIdx + 1} / ${lightboxItems.length}`;
}

// ===================== SCROLL ANIMATIONS =====================
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ===================== BACK TO TOP =====================
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 400);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ===================== SMOOTH SCROLL =====================
function initNavSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// Modal overlay close
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('modal-overlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'modal-overlay') closeModal();
  });
});
