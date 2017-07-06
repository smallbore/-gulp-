$(function(){
    $(".small-flex__item").on("click",function(){
        var num = $(this).index();
        $(".small-flex__item>.small-flex").removeClass("active");
        $(this).find(".small-flex").addClass("active");
        $(".tabs>.tab-com").removeClass("active").eq(num).addClass("active");
    })
    //弹出
    var smalltip = new DialogFx('#smalltip');
        $('.smalltip').on('click',function(){
            smalltip.toggle();
        });
})