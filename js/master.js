function switchTab(nextTab) {
  var idNextTab = $(nextTab).attr('data-tab');

  $('.js-tab [data-tab]').removeClass('tab__active');
  $(nextTab).addClass('tab__active');
  $('.car__main').hide();
  $(`#${idNextTab}`).show();
}

$('.js-tab [data-tab]').click(function (e) {
  var idCurrentTab = $('.js-tab .tab__active').attr('data-tab');

  $(`#${idCurrentTab} .js-tab-car`).slick('unslick');
  e.preventDefault();
  switchTab(this);
});

switchTab($('.js-tab [data-tab="travel-car"]'));

$(".back").click(function () {
  location.href = 'index.html';
})
