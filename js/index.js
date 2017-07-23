// 头部移入移出
function hover(even) {
    $(even).hover(function () {
        $(this).children(".showList").toggle();
    })
}
hover(".header ul li");

//微博
$(".searchTxt").click(function () {
    $(this).parent().children(".list").toggle();
});

var box = $(".listNav input[type=checkbox]");
//全选
$(".logoWarp .left input").click(function () {
    if ($(this).is(':checked')) {
        box.attr("checked", true)
    } else {
        box.attr("checked", false)
    }
});
//反选
$(".logoWarp .right input").click(function () {
    for (var i = 0; i < box.length; i++) {
        if (box[i].checked == true) {
            box[i].checked = false;
        } else {
            box[i].checked = true;
        }
    }
});


function tab(obj, val) {
    $(obj).hover(function () {
        $(obj).children().removeClass('active');
        $(this).children().addClass('active');
        $(val).removeClass('show');
        $(val).eq($(this).index()).addClass('show');
    });
}
tab(".tab_4 .tab_title li", ".smList ul");


function tab1(obj, val) {
    $(obj).hover(function () {
        $(obj).removeClass('active');
        $(this).addClass('active');
        $(val).removeClass('show');
        $(val).eq($(this).index()).addClass('show');
    });
}
tab1(".comTitle .comTitle_tabs li");


       var oul = $('.photo_list');

       oul.html(oul.html() + oul.html());

       var left = $('.photo_prev');
       var right= $('.photo_next');
        oul.css({'margin-left': '0px'});
             left.click(function () {
                 oul.animate({'margin-left': '-1000px'}, {duration: 2000})
            });
             right.click(function () {
                 oul.animate({'margin-left': '0px'}, {duration: 2000})
           });










