// Chapter Navigation Component
// Automatically generates chapter navigation based on current page

(function() {
  // Chapter metadata
  const CHAPTERS = {
    'foreword.html': { num: 0, title: 'Foreword', prev: null, next: 'chapter-1.html' },
    'chapter-1.html': { num: 1, title: 'Chapter 1', prev: 'foreword.html', next: 'chapter-2.html' },
    'chapter-2.html': { num: 2, title: 'Chapter 2', prev: 'chapter-1.html', next: 'chapter-3.html' },
    'chapter-3.html': { num: 3, title: 'Chapter 3', prev: 'chapter-2.html', next: 'chapter-4.html' },
    'chapter-4.html': { num: 4, title: 'Chapter 4', prev: 'chapter-3.html', next: 'chapter-5.html' },
    'chapter-5.html': { num: 5, title: 'Chapter 5', prev: 'chapter-4.html', next: 'chapter-6.html' },
    'chapter-6.html': { num: 6, title: 'Chapter 6', prev: 'chapter-5.html', next: 'chapter-7.html' },
    'chapter-7.html': { num: 7, title: 'Chapter 7', prev: 'chapter-6.html', next: 'chapter-8.html' },
    'chapter-8.html': { num: 8, title: 'Chapter 8', prev: 'chapter-7.html', next: 'chapter-9.html' },
    'chapter-9.html': { num: 9, title: 'Chapter 9', prev: 'chapter-8.html', next: 'chapter-10.html' },
    'chapter-10.html': { num: 10, title: 'Chapter 10', prev: 'chapter-9.html', next: 'chapter-11.html' },
    'chapter-11.html': { num: 11, title: 'Chapter 11', prev: 'chapter-10.html', next: 'chapter-12.html' },
    'chapter-12.html': { num: 12, title: 'Chapter 12', prev: 'chapter-11.html', next: 'chapter-13.html' },
    'chapter-13.html': { num: 13, title: 'Chapter 13', prev: 'chapter-12.html', next: 'chapter-14.html' },
    'chapter-14.html': { num: 14, title: 'Chapter 14', prev: 'chapter-13.html', next: 'chapter-15.html' },
    'chapter-15.html': { num: 15, title: 'Chapter 15', prev: 'chapter-14.html', next: 'chapter-16.html' },
    'chapter-16.html': { num: 16, title: 'Chapter 16', prev: 'chapter-15.html', next: 'chapter-17.html' },
    'chapter-17.html': { num: 17, title: 'Chapter 17', prev: 'chapter-16.html', next: 'chapter-18.html' },
    'chapter-18.html': { num: 18, title: 'Chapter 18', prev: 'chapter-17.html', next: 'chapter-19.html' },
    'chapter-19.html': { num: 19, title: 'Chapter 19', prev: 'chapter-18.html', next: 'chapter-20.html' },
    'chapter-20.html': { num: 20, title: 'Chapter 20', prev: 'chapter-19.html', next: 'chapter-21.html' },
    'chapter-21.html': { num: 21, title: 'Chapter 21', prev: 'chapter-20.html', next: 'chapter-22.html' },
    'chapter-22.html': { num: 22, title: 'Chapter 22', prev: 'chapter-21.html', next: 'chapter-23.html' },
    'chapter-23.html': { num: 23, title: 'Chapter 23', prev: 'chapter-22.html', next: 'chapter-24.html' },
    'chapter-24.html': { num: 24, title: 'Chapter 24', prev: 'chapter-23.html', next: 'chapter-25.html' },
    'chapter-25.html': { num: 25, title: 'Chapter 25', prev: 'chapter-24.html', next: 'chapter-26.html' },
    'chapter-26.html': { num: 26, title: 'Chapter 26', prev: 'chapter-25.html', next: 'chapter-27.html' },
    'chapter-27.html': { num: 27, title: 'Chapter 27', prev: 'chapter-26.html', next: 'chapter-28.html' },
    'chapter-28.html': { num: 28, title: 'Chapter 28', prev: 'chapter-27.html', next: 'chapter-29.html' },
    'chapter-29.html': { num: 29, title: 'Chapter 29', prev: 'chapter-28.html', next: 'chapter-30.html' },
    'chapter-30.html': { num: 30, title: 'Chapter 30', prev: 'chapter-29.html', next: 'chapter-31.html' },
    'chapter-31.html': { num: 31, title: 'Chapter 31', prev: 'chapter-30.html', next: 'chapter-32.html' },
    'chapter-32.html': { num: 32, title: 'Chapter 32', prev: 'chapter-31.html', next: 'chapter-33.html' },
    'chapter-33.html': { num: 33, title: 'Chapter 33', prev: 'chapter-32.html', next: 'chapter-34.html' },
    'chapter-34.html': { num: 34, title: 'Chapter 34', prev: 'chapter-33.html', next: 'chapter-35.html' },
    'chapter-35.html': { num: 35, title: 'Chapter 35', prev: 'chapter-34.html', next: 'chapter-36.html' },
    'chapter-36.html': { num: 36, title: 'Chapter 36', prev: 'chapter-35.html', next: 'chapter-37.html' },
    'chapter-37.html': { num: 37, title: 'Chapter 37', prev: 'chapter-36.html', next: 'chapter-38.html' },
    'chapter-38.html': { num: 38, title: 'Chapter 38', prev: 'chapter-37.html', next: 'chapter-39.html' },
    'chapter-39.html': { num: 39, title: 'Chapter 39', prev: 'chapter-38.html', next: 'chapter-40.html' },
    'chapter-40.html': { num: 40, title: 'Chapter 40', prev: 'chapter-39.html', next: 'chapter-41.html' },
    'chapter-41.html': { num: 41, title: 'Chapter 41', prev: 'chapter-40.html', next: 'chapter-42.html' },
    'chapter-42.html': { num: 42, title: 'Chapter 42', prev: 'chapter-41.html', next: 'chapter-43.html' },
    'chapter-43.html': { num: 43, title: 'Chapter 43', prev: 'chapter-42.html', next: 'chapter-44.html' },
    'chapter-44.html': { num: 44, title: 'Chapter 44', prev: 'chapter-43.html', next: 'chapter-45.html' },
    'chapter-45.html': { num: 45, title: 'Chapter 45', prev: 'chapter-44.html', next: 'chapter-46.html' },
    'chapter-46.html': { num: 46, title: 'Chapter 46', prev: 'chapter-45.html', next: 'chapter-47.html' },
    'chapter-47.html': { num: 47, title: 'Chapter 47', prev: 'chapter-46.html', next: 'chapter-48.html' },
    'chapter-48.html': { num: 48, title: 'Chapter 48', prev: 'chapter-47.html', next: 'chapter-49.html' },
    'chapter-49.html': { num: 49, title: 'Chapter 49', prev: 'chapter-48.html', next: 'chapter-50.html' },
    'chapter-50.html': { num: 50, title: 'Chapter 50', prev: 'chapter-49.html', next: 'chapter-51.html' },
    'chapter-51.html': { num: 51, title: 'Chapter 51', prev: 'chapter-50.html', next: 'chapter-52.html' },
    'chapter-52.html': { num: 52, title: 'Chapter 52', prev: 'chapter-51.html', next: 'chapter-53.html' },
    'chapter-53.html': { num: 53, title: 'Chapter 53', prev: 'chapter-52.html', next: 'epilogue.html' },
    'epilogue.html': { num: 54, title: 'Epilogue', prev: 'chapter-53.html', next: null }
  };

  const TOTAL_CHAPTERS = 53;

  // Detect if we're on a Chinese page
  function isChinesePage() {
    return window.location.pathname.includes('/ma-book-zh/');
  }

  // Get localized strings
  function getStrings() {
    if (isChinesePage()) {
      return {
        previous: '上一章',
        next: '下一章',
        chapterOf: function(num) { return '第' + num + '章 / 共' + TOTAL_CHAPTERS + '章'; },
        toc: '目录'
      };
    }
    return {
      previous: 'Previous',
      next: 'Next',
      chapterOf: function(num) { return 'Chapter ' + num + ' of ' + TOTAL_CHAPTERS; },
      toc: 'Table of Contents'
    };
  }

  // Get current page filename
  function getCurrentPage() {
    const path = window.location.pathname;
    return path.substring(path.lastIndexOf('/') + 1);
  }

  // Get chapter data for current page
  function getChapterData() {
    const currentPage = getCurrentPage();
    return CHAPTERS[currentPage] || null;
  }

  // Render top navigation
  function renderTopNav(chapterData) {
    const s = getStrings();

    const prevLink = chapterData.prev
      ? `<a href="${chapterData.prev}" class="chapter-nav-link">&larr; ${s.previous}</a>`
      : '<span class="chapter-nav-link disabled"></span>';

    const nextLink = chapterData.next
      ? `<a href="${chapterData.next}" class="chapter-nav-link">${s.next} &rarr;</a>`
      : '<span class="chapter-nav-link disabled"></span>';

    const progress = chapterData.num > 0 && chapterData.num <= TOTAL_CHAPTERS
      ? `<span class="chapter-progress">${s.chapterOf(chapterData.num)}</span>`
      : '<span class="chapter-progress"></span>';

    return `
  <div class="chapter-nav-top">
    ${prevLink}
    ${progress}
    ${nextLink}
  </div>`;
  }

  // Render bottom navigation
  function renderBottomNav(chapterData) {
    const s = getStrings();

    const prevLink = chapterData.prev
      ? `<a href="${chapterData.prev}" class="chapter-nav-link">&larr; ${s.previous}</a>`
      : '<span class="chapter-nav-link disabled"></span>';

    const nextLink = chapterData.next
      ? `<a href="${chapterData.next}" class="chapter-nav-link">${s.next} &rarr;</a>`
      : '<span class="chapter-nav-link disabled"></span>';

    return `
  <div class="chapter-nav-bottom">
    ${prevLink}
    <a href="index.html" class="chapter-toc-link">${s.toc}</a>
    ${nextLink}
  </div>`;
  }

  // Initialize navigation
  function init() {
    const chapterData = getChapterData();

    if (!chapterData) {
      console.error('Chapter data not found for current page');
      return;
    }

    // Inject top navigation
    const topContainer = document.getElementById('chapter-nav-top-container');
    if (topContainer) {
      topContainer.innerHTML = renderTopNav(chapterData);
    }

    // Inject bottom navigation
    const bottomContainer = document.getElementById('chapter-nav-bottom-container');
    if (bottomContainer) {
      bottomContainer.innerHTML = renderBottomNav(chapterData);
    }
  }

  // Wait for DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
