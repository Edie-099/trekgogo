

// ========== Go Top ==========
var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
};

ready(() => {
  const scrollTo = (element, to, duration) => {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = (difference / duration) * 10;

    setTimeout(() => {
      element.scrollTop = element.scrollTop + perTick;
      if (element.scrollTop === to) return;
      scrollTo(element, to, duration - 10);
    }, 10);
  };

  var gotop = document.querySelector(".gotop");
  var html = document.documentElement;

  gotop?.addEventListener("click", (e) => {
    e.preventDefault();
    scrollTo(html, 0, 800);
  });
});



// go-top-start
var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
};

ready((event) => {
  const scrollTo = (element, to, duration) => {
    if (duration <= 0) {
      return;
    }
    var difference = to - element.scrollTop;
    var perTick = (difference / duration) * 10;

    setTimeout(() => {
      element.scrollTop = element.scrollTop + perTick;
      if (element.scrollTop === to) {
        return;
      }
      scrollTo(element, to, duration - 10);
    }, 10);
  };

  var gotop = document.querySelector(".gotop");
  var html = document.documentElement;

  gotop.addEventListener("click", (e) => {
    e.preventDefault();
    scrollTo(html, 0, 800);
  });
});
 