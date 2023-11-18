// qanda
const tabs = document.querySelectorAll('[role="tab"]');
const tabList = document.querySelector('[role="tablist"]');

const changeTabs = e => {
  const target = e.target;
  const parent = target.parentNode;
  const grandparent = parent.parentNode;

  // タブから現在すべての選択状態を取り除く
  parent
    .querySelectorAll('[aria-selected="true"]')
    .forEach(t => t.setAttribute("aria-selected", false));

  // このタブを選択されたタブとして設定
  target.setAttribute("aria-selected", true);

  // すべてのタブパネルを非表示
  grandparent
    .querySelectorAll('[role="tabpanel"]')
    .forEach(p => p.setAttribute("hidden", true));

  // 選択されたパネルを表示
  grandparent.parentNode
    .querySelector(`#${target.getAttribute("aria-controls")}`)
    .removeAttribute("hidden");
}

tabs.forEach(tab => {
  tab.addEventListener('click', changeTabs);
});

$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed:1000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    dots: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
    });


$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    var threshold = $(window).height() - 80; 

    if (scroll >= threshold) {
        $('#js-header').addClass('fixed');
    } else {
        $('#js-header').removeClass('fixed');
    }
});
