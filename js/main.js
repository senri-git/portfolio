(function($){
  // ハンバーガーメニュー
    $('.header-ham').on('click',function(){
      $('.header-ham, .ham-menu').toggleClass('show');
    });
    $('.nav-item').on('click',function(){
      $('.header-ham, .ham-menu').toggleClass('show');
    });

    // モーダル表示
    $('#works .work01').on('click',function(){
      $('.background,.work01').addClass('show');
    });
    $('#works .work02').on('click',function(){
      $('.background,.work02').addClass('show');
    });
    $('#works .work03').on('click',function(){
      $('.background,.work03').addClass('show');
    });

    // モーダル非表示
    $('.background').on('click',function(){
      $('.background,.work01,.work02,.work03').removeClass('show');
    });

})(jQuery);

// animation
const targetElement = document.querySelectorAll(".animationTarget");
console.log("height",window.innerHeight);
document.addEventListener("scroll",function() {
  for (let i = 0; i < targetElement.length; i++){
    const getElementDistance = targetElement[i].getBoundingClientRect().top
    //画面の85％に入ると同時にshowクラス追加
    if(window.innerHeight * .85 > getElementDistance){
      targetElement[i].classList.add("show");
    }
    //最後の要素は60%画面に入ると同時にshowクラス追加
    if(i===targetElement.length-1 && window.innerHeight > getElementDistance + targetElement[i].clientHeight * .6){
      targetElement[i].classList.add("show");
    }
  }
})