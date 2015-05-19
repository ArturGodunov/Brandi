$(document).ready(function() {
    hoverHeaderSocial();
    hoverWorksImg();
    hoverTeamImg();
    scrollTeaxtarea();
});

function hoverHeaderSocial() {
    $(".header_social a").hover(function() {
        $(this).animate({
            opacity: 1
        }, 400);
    }, function() {
        $(this).animate({
            opacity: 0.3
        }, 300);
    });
}

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
    $(".team_img_wrap").hover(function() {
        $(this).find(".team_hover").animate({
            opacity: 1
        }, 500);
        $(this).closest(".team_item").find(".team_name").addClass("team_name_hover");
    }, function() {
        $(this).find(".team_hover").animate({
            opacity: 0
        }, 400);
        $(this).closest(".team_item").find(".team_name").removeClass("team_name_hover");
    });
}

function scrollTeaxtarea() {
    $("#textarea").on("keyup", function () {
        $(this).css("height", "auto");
        $(this).height(this.scrollHeight);
    });
}

