// ========== 輪播功能 ==========
function initSlider(content) {
  const slider = content.querySelector(".track-slider");
  if (!slider) return null;

  const cards = slider.querySelector(".track-cards");
  const card = slider.querySelector(".track-card");
  const leftBtn = content.querySelector(".track-arrow.left");
  const rightBtn = content.querySelector(".track-arrow.right");

  let index = 0;

  function getVisible() {
    return window.innerWidth >= 900 ? 3 : (window.innerWidth >= 600 ? 2 : 1);
  }

  function update() {
    if (!card) return;
    const cardWidth = card.offsetWidth || 0;
    const maxIndex = Math.max(cards.children.length - getVisible(), 0);
    if (index > maxIndex) index = maxIndex;
    cards.style.transform = `translateX(${-index * cardWidth}px)`;
  }

  function reset() {
    index = 0;
    update();
  }

  leftBtn?.addEventListener("click", () => {
    index = Math.max(index - 1, 0);
    update();
  });

  rightBtn?.addEventListener("click", () => {
    index = Math.min(index + 1, cards.children.length - getVisible());
    update();
  });

  return { content, update, reset };
}

let sliders = []; // 🔹 全域記錄

// ========== Tab 切換 ==========
document.querySelectorAll(".track-tab-list li").forEach(tab => {
  tab.addEventListener("click", () => {
    // 移除全部 track-active
    document.querySelectorAll(".track-tab-list li").forEach(t => t.classList.remove("track-active"));
    document.querySelectorAll(".track-tab-content").forEach(content => content.classList.remove("track-active"));

    // 加上目前 track-active
    tab.classList.add("track-active");
    const activeContent = document.getElementById(tab.dataset.tab);
    activeContent.classList.add("track-active");

    // 🔹 找看看這個 tab 有沒有已建立過輪播
    let slider = sliders.find(s => s.content === activeContent);
    if (!slider) {
      slider = initSlider(activeContent);
      if (slider) sliders.push(slider);
    }

    // 🔹 等顯示後再 reset，避免 offsetWidth = 0
    requestAnimationFrame(() => slider?.reset());
  });
});

// ========== Resize 統一監聽 ==========
window.addEventListener("resize", () => {
  const activeContent = document.querySelector(".track-tab-content.track-active");
  if (!activeContent) return;
  const slider = sliders.find(s => s.content === activeContent);
  slider?.update();
});

// ========== 頁面初始，強制初始化第一個 tab ==========
window.addEventListener("load", () => {
  const firstActive = document.querySelector(".track-tab-content.track-active");
  if (firstActive) {
    let slider = initSlider(firstActive);
    if (slider) {
      sliders.push(slider);
      slider.reset();
    }
  }
});


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
 