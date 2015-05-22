$(document).ready(function() {
    hoverWorksImg();
    hoverTeamImg();
    scrollTeaxtarea();
    showMenu();

    $(".nav_item").on("click", function() {
        if ($(window).width() <= 700) {
            $(".nav_list").hide();
        }
        showSection($(this).attr("id"));
    });
});

$(window).scroll(function(){
    checkSection();
});

$(window).on("resize", function(){
    hoverTeamImg();
});


function hoverWorksImg() {
    $(".works_img_item").hover(function() {
        $(this).find(".works_img_hover").animate({
            opacity: 1
        }, 500);
    }, function() {
        $(this).find(".works_img_hover").animate({
            opacity: 0
        }, 400);
    });
}

function hoverTeamImg() {
    if ($(window).width() >= 1200) {
        $(".team_img_wrap").hover(function () {
            $(this).find(".team_hover").animate({
                opacity: 1
            }, 500);
            $(this).closest(".team_item").find(".team_name").addClass("team_name_hover");
        }, function () {
            $(this).find(".team_hover").animate({
                opacity: 0
            }, 400);
            $(this).closest(".team_item").find(".team_name").removeClass("team_name_hover");
        });
    } else {
        $(".team_img_wrap").off("mouseenter mouseleave");
    }
}

function scrollTeaxtarea() {
    $("#textarea").on("keyup", function () {
        $(this).css("height", "auto");
        $(this).height(this.scrollHeight);
    });
}

function showMenu(){
    var navList=$(".nav_list");
    $(".nav_menu").on("click", function() {
        navList.show();
    });
    $(".nav_close").on("click", function() {
        navList.hide();
    });
}

function showSection(section) {
    var reqSection = $("[data-section]").filter('[data-section="' + section + '"]'),
        reqSectionPos = reqSection.offset().top + 1;
    $("body, html").animate({scrollTop: reqSectionPos}, 500);
}

function checkSection() {
    $("[data-section]").each(function(){
        var $this = $(this),
            topEdge = $this.offset().top,
            bottomEdge = topEdge + $this.height(),
            wScroll = $(window).scrollTop();
        if (topEdge < wScroll && bottomEdge > wScroll) {
            var currentId = $this.data("section"),
                reqLink = $(".nav_item").filter("#" + currentId);
            reqLink.addClass("active").siblings().removeClass("active");
        }
    });
}

