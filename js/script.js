document.addEventListener("DOMContentLoaded", function () {
    // ボール要素とトップボタンを取得
    const ball = document.querySelector(".topball");
  
    // ボールをクリックした際の処理を定義
    ball.addEventListener("click", function () {
      // トップにスクロールするアニメーションを追加
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  
    // タブリンク要素を取得
    const tabLinks = document.querySelectorAll('.nav-link');
  
    // 各タブリンクに対してクリックイベントを設定
    tabLinks.forEach(function (tabLink) {
      tabLink.addEventListener('click', function (event) {
        event.preventDefault(); // リンクのデフォルト動作をキャンセル
        // タブの切り替え処理を行う
        tabLinks.forEach(function (link) {
          link.classList.remove('active');
        });
        this.classList.add('active');
        const targetTab = document.querySelector(this.getAttribute('href'));
        targetTab.classList.add('show', 'active');
      });
    });
  });
  
  const sections = $(".section")

  function animationByScroll() {
    const scrollY = window.scrollY //スクロール量
    const windowHeight = window.innerHeight //画面の高さ
    const INVIEW_HEIGHT = 200

    sections.each(function (_, section) {
      const offsetTop = section.offsetTop //要素の縦方向の位置

      if (scrollY + windowHeight > offsetTop + INVIEW_HEIGHT) {
        $(section).addClass("Section__isActive")
      }
    })
  }

  window.onload = function () {
    animationByScroll()
  }
  
  $(window).on("scroll", function () {
    animationByScroll()
  })