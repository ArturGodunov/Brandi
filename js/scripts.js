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

/*------------------GEOLOCATION-------------------*/
function initialize() {
    var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
        center: new google.maps.LatLng(53.9022, 27.5618),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: !1,
        streetViewControl: !1,
        scrollwheel: !1,
        panControl: !1,
        zoomControlOptions: {position: google.maps.ControlPosition.RIGHT_CENTER}
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var styles = [{stylers: [{saturation: -100}]}];
    map.setOptions({styles: styles});
    var marker = new google.maps.Marker({
        map: map,
        draggable: !1,
        position: mapOptions.center,
        icon: "images/map_marker.png"
    });
}
google.maps.event.addDomListener(window, 'load', initialize);