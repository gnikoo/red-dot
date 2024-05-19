$(document).ready(function() {
    var redDot = $("<div id='redDot'></div>").css({
        "width": "10px",
        "height": "10px",
        "background-color": "red",
        "border-radius": "50%",
        "position": "absolute",
        "top": "50%",
        "right": "-5px",
        "transform": "translateY(-50%)",
        "display": "none"
    });

    $("#leftcontrols").css("position", "relative").append(redDot);

    var tooltip = $("<div id='tooltip'>Voteskip ratio is above 0.25</div>").css({
        "display": "none",
        "position": "absolute",
        "background-color": "#ffffff",
        "padding": "5px",
        "border": "1px solid #cccccc",
        "border-radius": "5px",
        "z-index": "999"
    });

    $("body").append(tooltip);

    $("#redDot").hover(function(e) {
        var voteskipRatio = parseFloat($("#cs-voteskip_ratio").val());
        if (voteskipRatio > 0.25) {
            tooltip.css({
                "display": "block",
                "left": e.pageX + 10,
                "top": e.pageY
            });
        }
    }, function() {
        tooltip.css("display", "none");
    });

    $("#cs-voteskip_ratio").change(function() {
        var voteskipRatio = parseFloat($(this).val());
        if (voteskipRatio > 0.25) {
            tooltip.css("display", "block");
        } else {
            tooltip.css("display", "none");
        }
    });
});
