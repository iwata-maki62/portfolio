//フォント読み込み
(function(d) {
    var config = {
      kitId: 'xbu7woo',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);


$(function () {
  const pagetop = $('.pagetop');
  pagetop.hide();
  $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });

//ハンバーガーメニュー
    $('.sp_btn, .sp_nav li').on('click', function () {
          $('.sp_nav').fadeToggle();
          $('.sp_btn').toggleClass('open');
      });
//WORKsタブ
$('.tab li').on('click', function(){
  let cat = $(this).html();


  $('.tab li').removeClass('is-active');
  $(this).addClass('is-active');

  $('.list').hide(); // .listを一度すべて非表示にする

  // allの場合
  if(cat == "All"){
    $('.list').hide();
    $('.list').fadeIn();
  }
 // 選択したカテゴリーだけを表示
 $('.list').each(function(){
    if($(this).data('cat') == cat){
      $(this).fadeIn();
    }
  });
  });
});
