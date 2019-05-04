$(document).ready(function() {
    let option = ['拉麵', '滷肉飯', '水餃'];
    let imgUrl= ["http://www.tabirai.net/tabirai-uploader/img/0026103/s1_0026103.jpg","https://www.cythia0805.com/wp-content/uploads/2014/10/DSC_02071.jpg","http://www.8way.asia/images/b_pork.gif"]
    let menu = $('#menu');
    option.forEach(function(d, i) {
      menu.append("<li>"+d+"</li>");
    });

    function getRandomNum(arr) {
      return Math.floor(Math.random()*arr.length);
    }

    // function randomSelect(menu) {
    //   return menu[Math.floor(Math.random()*menu.length)];
    // }

    $("#gene").on('click', function() {
      let num = getRandomNum(option);
      $("#res").text(option[num]);
      $("#menu li").removeClass("highlight");
      $("#menu li:nth-child("+(num+1)+")").addClass("highlight");
      $("#img").css("opacity", 0).animate({opacity: 1}, 500);
      $("#img").css("background-image", "url("+imgUrl[num]+")");


    });


});