// JavaScript Document
//Copyright  All Rights Reserved
/**
 * WXAdmin
 * created by author kiwind @ 2014-2-27 / kiwind.cn
 * gift.js added by zhangxp @ 2014-6-14
 */
var WXAdmin = (function($){
    var _WXAdmin = function(Fn){
        this.Fn = Fn || [];
        var para = Array.prototype.slice.call(arguments);
        if (para.length === 0) {
            return this.Fn;
        }
        return new _WXAdmin.widget[para[0]](para[1]);
    };

    _WXAdmin.widget = _WXAdmin.prototype;

    _WXAdmin.common = {
        init:function(){
            this.searchTxtEffect();
			this.txtEffect();
			this.searchEffect();
			this.navEffect();
			this.hideSlide();
        },
        searchTxtEffect:function(){
			$(".search-mod .search-panel-fields").click(function(){
				$(this).find("label").animate({opacity:'0'}, 50);			
			});
			
			$(".search-mod .search-panel-fields .search-combobox-input").blur(function(){
				if($(".search-combobox-input").val()==""){
					$(".search-mod .search-panel-fields label").animate({opacity:'1'}, 50);							
			    }	
			});
        },
		txtEffect:function(){
			$(".txt").each(function() {
                $(this).click(function(){
					$(this).find("label").animate({opacity:'0'}, 5);
				});
				$(this).find("input").blur(function(){
					if($(this).val()==""){
					$(this).parent().find("label").animate({opacity:'1'}, 5);
					}
				});
            });
		},
		searchEffect:function(){
			$(".search-fold").click(function(){
				$(".search-wrap").slideToggle(100);
				$(this).toggleClass("search-unfold"); 
				return false;//触发后然后改变小图标方向，css在.active定义的
			});
		},
		navEffect:function(){
			$(".more-menu").click(function(){
				$(".hideNav").toggleClass("showNav");
				return false;//触发后然后改变小图标方向，css在.active定义的
			});
		},
		hideSlide:function(){
			var n=1;
			$(".hideBtn").click(function(){
				n=n+1;
				$(".hide").slideToggle(100);
			    if(n%2==0){$(this).val("隐藏高级选项");}
				else{$(this).val("高级选项");}
				return false;//触发后然后改变小图标方向，css在.active定义的
			});
		}
		//在此添加其他效果方面JS
    }
    $(function(){
        _WXAdmin.common.init();
    })
    return {widget:_WXAdmin};

})(jQuery);