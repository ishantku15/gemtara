/* ============================================
   GEMTARA.IN — Blog Engine
   Search, filter, nav, scroll, sharing
   Built with zero dependencies because we're rebels
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initSearch();
  initCategoryFilter();
  initBackToTop();
  initReadingProgress();
  initShareButtons();
  renderPosts();
});

/* ── Mobile Navigation ── */
function initMobileNav() {
  const hamburger = document.querySelector('.nav__hamburger');
  const navLinks = document.querySelector('.nav__links');

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close menu on link click
  navLinks.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });
}

/* ── Search ── */
function initSearch() {
  const searchTriggers = document.querySelectorAll('.nav__search, .search-trigger');
  const modal = document.querySelector('.search-modal');
  const searchInput = document.querySelector('.search-modal__input');
  const resultsContainer = document.querySelector('.search-modal__results');

  if (!modal) return;

  // Open search
  searchTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
      if (searchInput) searchInput.focus();
    });
  });

  // Close on overlay click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') modal.classList.remove('active');
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      modal.classList.add('active');
      if (searchInput) searchInput.focus();
    }
  });

  // Search logic
  if (searchInput && resultsContainer && typeof POSTS_DATA !== 'undefined') {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase().trim();

      if (query.length < 2) {
        resultsContainer.innerHTML = '';
        return;
      }

      const results = POSTS_DATA.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query)) ||
        post.category.toLowerCase().includes(query)
      );

      if (results.length === 0) {
        resultsContainer.innerHTML = `
          <div style="padding: 2rem; text-align: center; color: #999;">
            No gems found for "${searchInput.value}"
          </div>`;
        return;
      }

      resultsContainer.innerHTML = results.map(post => `
        <a href="posts/${post.slug}.html" class="search-result">
          <div class="search-result__title">${highlightMatch(post.title, query)}</div>
          <div class="search-result__excerpt">${post.excerpt.substring(0, 120)}...</div>
        </a>
      `).join('');
    });
  }
}

function highlightMatch(text, query) {
  const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
  return text.replace(regex, '<mark style="background:#E6F4F4;color:#0D7377;padding:0 2px;border-radius:2px;">$1</mark>');
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/* ── Category Filter ── */
function initCategoryFilter() {
  const chips = document.querySelectorAll('.chip[data-category]');
  if (!chips.length) return;

  chips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.preventDefault();

      // Update active chip
      chips.forEach(c => c.classList.remove('chip--active'));
      chip.classList.add('chip--active');

      const category = chip.dataset.category;
      renderPosts(category === 'all' ? null : category);
    });
  });
}

/* ── Render Posts ── */
function renderPosts(filterCategory) {
  const grid = document.querySelector('.posts-grid');
  if (!grid || typeof POSTS_DATA === 'undefined') return;

  let posts = [...POSTS_DATA];

  if (filterCategory) {
    posts = posts.filter(p => p.category === filterCategory);
  }

  // Sort by hasImage first, then date
  posts.sort((a, b) => {
    if (a.hasImage === b.hasImage) {
      return new Date(b.date) - new Date(a.date);
    }
    return a.hasImage ? -1 : 1;
  });

  grid.innerHTML = posts.map(post => `
    <a href="posts/${post.slug}.html" class="post-card" id="post-${post.slug}">
      <img class="post-card__image" src="${post.image}" alt="${post.title}" loading="lazy"
           onerror="this.style.background='linear-gradient(135deg, #0D7377 0%, #0A5C5F 100%)'; this.style.display='flex'; this.alt='';">
      <div class="post-card__body">
        <span class="post-card__category">${post.category}</span>
        <h3 class="post-card__title">${post.title}</h3>
        <p class="post-card__excerpt">${post.excerpt}</p>
        <div class="post-card__meta">
          <span>
            <svg class="icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 4px;"><rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
            ${formatDate(post.date)}
          </span>
          <span>
            <svg class="icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 4px;"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            ${post.readTime}
          </span>
        </div>
      </div>
    </a>
  `).join('');
}

/* ── Back to Top ── */
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ── Reading Progress Bar ── */
function initReadingProgress() {
  const progressBar = document.querySelector('.reading-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    progressBar.style.width = `${Math.min(progress, 100)}%`;
  });
}

/* ── Share Buttons ── */
function initShareButtons() {
  document.querySelectorAll('.share-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const action = btn.dataset.share;
      const url = encodeURIComponent(window.location.href);
      const title = encodeURIComponent(document.title);

      switch (action) {
        case 'twitter':
          window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank', 'width=600,height=400');
          break;
        case 'facebook':
          window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400');
          break;
        case 'linkedin':
          window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'width=600,height=400');
          break;
        case 'copy':
          e.preventDefault();
          navigator.clipboard.writeText(window.location.href).then(() => {
            const original = btn.innerHTML;
            btn.innerHTML = '✓ Copied!';
            setTimeout(() => { btn.innerHTML = original; }, 2000);
          });
          break;
        case 'whatsapp':
          window.open(`https://wa.me/?text=${title}%20${url}`, '_blank');
          break;
      }
    });
  });
}

/* ── Utility Functions ── */
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function calculateReadTime(text) {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}
