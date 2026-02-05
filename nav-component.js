// Navigation Component
// Single source of truth for site navigation with automatic path resolution

(function() {
  // Navigation configuration
  const NAV_CONFIG = {
    items: [
      {
        text: 'Home',
        rootHref: 'index.html',
        bookHref: '../index.html'
      },
      {
        text: 'M&A Resources',
        rootHref: 'startup-ma.html',
        bookHref: '../startup-ma.html'
      },
      {
        text: 'The Toughest Sell',
        rootHref: 'ma-book/index.html',
        bookHref: 'index.html'
      },
      {
        text: 'Past Writing',
        href: 'https://medium.com/@derekzhyan',
        external: true
      },
      {
        text: 'Photography',
        href: 'https://derekyanphotography.pixieset.com',
        external: true
      },
      {
        text: 'Contact',
        rootHref: 'contact.html',
        bookHref: '../contact.html'
      }
    ]
  };

  // Detect if we're in a subdirectory
  function isInSubdirectory() {
    return window.location.pathname.includes('/ma-book/');
  }

  // Get the correct href for a nav item based on context
  function getHref(item) {
    if (item.external) {
      return item.href;
    }
    return isInSubdirectory() ? item.bookHref : item.rootHref;
  }

  // Render navigation HTML
  function renderNavigation() {
    const navItems = NAV_CONFIG.items.map(item => {
      const href = getHref(item);
      const target = item.external ? ' target="_blank" rel="noopener noreferrer"' : '';
      return `<a href="${href}"${target}>${item.text}</a>`;
    }).join('\n    ');

    return `
  <nav id="nav">
    <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
      <span class="hamburger-icon">☰</span>
    </button>
    <div class="nav-menu">
      ${navItems}
    </div>
  </nav>`;
  }

  // Toggle mobile menu
  function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    const toggle = document.querySelector('.nav-toggle');
    const isOpen = menu.classList.contains('open');

    if (isOpen) {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.querySelector('.hamburger-icon').textContent = '☰';
    } else {
      menu.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.querySelector('.hamburger-icon').textContent = '×';
    }
  }

  // Close menu when clicking outside
  function handleClickOutside(event) {
    const nav = document.getElementById('nav');
    const menu = document.querySelector('.nav-menu');
    const toggle = document.querySelector('.nav-toggle');

    if (menu.classList.contains('open') &&
        !nav.contains(event.target)) {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.querySelector('.hamburger-icon').textContent = '☰';
    }
  }

  // Close menu when clicking a link
  function handleLinkClick() {
    const menu = document.querySelector('.nav-menu');
    const toggle = document.querySelector('.nav-toggle');

    if (menu.classList.contains('open')) {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.querySelector('.hamburger-icon').textContent = '☰';
    }
  }

  // Handle ESC key to close menu
  function handleEscKey(event) {
    if (event.key === 'Escape') {
      const menu = document.querySelector('.nav-menu');
      const toggle = document.querySelector('.nav-toggle');

      if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.querySelector('.hamburger-icon').textContent = '☰';
      }
    }
  }

  // Initialize navigation
  function init() {
    const container = document.getElementById('nav-container');
    if (!container) {
      console.error('Navigation container not found');
      return;
    }

    // Inject navigation HTML
    container.innerHTML = renderNavigation();

    // Attach event listeners
    const toggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (toggle) {
      toggle.addEventListener('click', toggleMenu);
    }

    navLinks.forEach(link => {
      link.addEventListener('click', handleLinkClick);
    });

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscKey);
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
