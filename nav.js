(function() {
  var nav = document.getElementById('nav');
  if (!nav) return;

  var track = nav.querySelector('.nav-track');
  var links = track.innerHTML;

  // Duplicate links for seamless infinite scroll
  track.innerHTML = links + links;

  var singleWidth = track.scrollWidth / 2;

  // Infinite scroll: wrap around when reaching the end or beginning
  nav.addEventListener('scroll', function() {
    if (nav.scrollLeft >= singleWidth) {
      nav.scrollLeft -= singleWidth;
    } else if (nav.scrollLeft <= 0) {
      nav.scrollLeft += singleWidth;
    }
  });

  // Hint animation on mobile to show nav is scrollable
  if (window.innerWidth <= 760) {
    setTimeout(function() {
      nav.scrollTo({ left: 60, behavior: 'smooth' });
      setTimeout(function() {
        nav.scrollTo({ left: 0, behavior: 'smooth' });
      }, 400);
    }, 500);
  }
})();
