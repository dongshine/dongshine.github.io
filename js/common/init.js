define(['jquery'], function($){	
    
    if(isSupportHtml5()){
        
        initPageHeight();
        
        // 页面加载完成 去除遮罩
        setTimeout(function(){
            $("#mask-panel").animate({opacity:'0'},function(){
                $("#mask-panel").remove();  
            });
        },100);	
        
        // 调整窗口
        var timer = null;
        $(window).resize(function() {
            clearTimeout(timer);
            timer = setTimeout(function(){
                initPageHeight();
            },100)
        });
    }else{    
        browserCheckContainer();
    }
	 
	// 初始化左边中间部分高度
	function initPageHeight (){
		$("#left-img-wrapper,#right-cont-wrapper").css("height",$(window).height()+"px");
        $("#right-cont-wrapper").css({"margin-left":$(window).width()/2+"px"});
	} 
        
    function isSupportHtml5(){		
		return window.applicationCache ? true : false;			
    }
	
	function browserCheckContainer(){		
        $("html,body").css({"overflow-y":"hidden"});
		var html  = '<div id="browserCheckContainer">';
			html += 	'<a class="chrome" href="http://www.google.cn/intl/zh-CN/chrome/browser/desktop/index.html"></a>';
			html += 	'<a class="sogou" href="http://ie.sogou.com/"></a>';
			html += 	'<a class="qihu" href="http://se.360.cn/"></a>';
			html += '</div>';		
        
		$("body").append($(html));        
        $("#mask-panel").css({"background":"#000","opacity":".9","filter":"alpha(opacity=90)"});
	}    
    
    $("#sidebar-button").click(function(){
        $(".choose-menu-wrap").toggleClass("showMenu");        
    });
    $("#close-menu-wrap").click(function(){
        $(".choose-menu-wrap").removeClass("showMenu");
    });    
})