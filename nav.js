(function() {
  var nav = document.getElementById('nav');
  if (!nav) return;

  // Only enable infinite scroll on mobile
  if (window.innerWidth <= 760) {
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
  }
})();
