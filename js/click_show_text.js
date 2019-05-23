var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array
        ("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善");
        var $i = $("<span/>").text(a[a_idx]);
        var b = new Array
        ("#7fdbff", 
		"#39cccc", 
		"#2ecc40", 
		"#ffdc00", 
		"#01ff70", 
		"#ff851b", 
		"#ff4136", 
		"#b1ddc9",
		"#FF9966",
		"#FF6666",
		"#FFCCCC",
		"#CC9966",
		"#666666",
		"#CC9999",
		"#FF6666",
		"#FFFF66",
		"#99CC66",
		"#CC9999",
		"#FFFFCC",
		"#CCCC99",
		"#FFCCCC",
		"#FFFF99",
		"#CCCCFF",
		"#0099CC",
		"#CCCCCC",
		"#FF6666",
		"#FFCC99",
		"#FFFF99",
		"#99CC99",
		"#FFCC99",
		"#CCFF99",
		"#CCCCCC",
		"#FFCC99",
		"#FFFFCC",
		"#99CCFF");
		a_idx = (a_idx + 1) % a.length;
		b_idx = Math.floor(Math.random()*35);
        var x = e.pageX,
        y = e.pageY;
		
        $i.css({
            "z-index": 5,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": b[b_idx]
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
			3000,
			function() {
			    $i.remove();
			});
    });
    setTimeout('delay()', 2000);
});

function delay() {
    $(".buryit").removeAttr("onclick");
}