<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd"> 
<html xmlns="http://www.w3.org/1999/xhtml"> 
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>小吃修改</title>
	
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
<meta http-equiv="Content-Language" content="zh-CN" />
<meta http-equiv="x-dns-prefetch-control" content="on">
<meta name="google" value="notranslate">
<meta http-equiv="Cache-Control"content="no-siteapp" />
<meta name="applicable-device" content="pc,mobile">
<link rel="dns-prefetch" href="http://xinshipu.cn">
<base target="_blank" />
<link rel='alternate' href='http://m.xinshipu.com/login.html' media='handheld' type='application/vnd.wap.xhtml+xml'>
<link rel="alternate" media="only screen and (max-width: 640px)" href="http://m.xinshipu.com/login.html" >
<meta name="mobile-agent" content="format=xhtml; url=http://m.xinshipu.com/login.html">
<meta name="mobile-agent" content="format=html5; url=http://m.xinshipu.com/login.html">
<meta name="mobile-agent" content="format=wml; url=http://m.xinshipu.com/login.html">
<link rel="shortcut icon" href="http://xinshipu.cn/2014/css/img/xsp.ico">
<link rel="stylesheet" type="text/css" href="css/xinshipu.desktop.20150115.copy.css">
<!--[if lt IE 9]>
<link rel="stylesheet" href="css/ie8.css"type="text/css" media="screen" />
<![endif]-->
<style>
.qa-qlist{width: 247px; list-style: decimal; margin-left: 20px; line-height: 1.3em;}
.side-pannel{border-top: 1px solid #eae6e3;}
.tip-list,.qa-qlist{color: #ff7501;}
.tip-list a, .qa-qlist a{color: #000;}
.tip-list a:hover,  .qa-qlist a:hover{color: #ff7501;}
.tip-list li{width: 240px; list-style: decimal; margin-left: 20px; margin-right:20px; line-height: 2.4em;}
.mb20{margin-bottom:20px;}
.top .search{margin-left: 185px;width:420px}
</style></head>

<body>
	<s:if test="#session.admin==null">
	<script type="text/javascript">window.location="admin.jsp"</script>
	</s:if>
	<%@ includefile="admin_head.jsp" %>
<div  class="content">
		<div class="w840 bpannel accnt mt30">
		 	<div class="tabs font16">
                <a href="#" target="_self" class="cur cb tc"><div class="inner">传统上传</div></a>
        </div>
        
		<div class="bpannel p15">
		<form  id="create_receipt" action="snack_update" method="post"  enctype="multipart/form-data">
			<div class="table-title clearfix font20 cg2">
                <div class="fl w410">基本信息</div>
            </div>
			<div class="w670">
				
				<dl class="mt30">
                    <dt class="cg1 font16">小吃名称<span class="cod ml10 font12">必填</span></dt>
                    <dd class="mt12"><input type="text" class="validate[custom[shipuname],maxSize[24]] ui-ipt-long "  name="snackOne.name" id="name" style="font-size:14px" value="<s:property value="snackOne.name"/>" tabindex="1"/></dd>
                </dl>
                <dl class="mt30">
                    <dt class="cg1 font16">小吃介绍<span class="cod ml10 font12">必填</span></dt>
                    <dd class="mt12"><textarea placeholder="写下小吃的特色特点吧！" name="snackOne.introduce" id="material" class="validate[required] ui-text elastic" tabindex="3"><s:property value="snackOne.introduce"/></textarea></dd>
                </dl>
                <dl class="mt30">
                    <dt class="cg1 font16">地区<span class="cod ml10 font12">必填</span></dt>
                    <dd class="mt12">
                    <input type="text" value="<s:property value="snackOne.area"/>" id="steps" name="snackOne.area" placeholder="云南！伊拉克什么的都行！！" class="validate[required] ui-ipt-long " >
                    </dd>
                </dl>
				 <dl class="mt30">
                    <dt class="cg1 font16">工艺<span class="cod ml10 font12">必填</span></dt>
                    <dd class="mt12">
                    <input value="<s:property value="snackOne.technology"/>" type="text" id="steps" name="snackOne.technology" placeholder="爆炒！油炸清蒸！！" class="validate[required] ui-ipt-long " >
                    </dd>
                </dl>
				<dl class="mt30">
                    <dt class="cg1 font16">口味<span class="cod ml10 font12">必填</span></dt>
                    <dd class="mt12">
                    <input type="text" value="<s:property value="snackOne.taste"/>" id="steps" name="snackOne.taste" placeholder="酸甜？苦辣？美滋滋？" class="validate[required] ui-ipt-long" >
                    </dd>
                </dl>
                <dl class="mt30">
						<dt class="cg1 font16">添加图片<span class="cod ml10 font12">一张</span></dt>
                    <dd class="mt12">
                    	<input id="st18" name="file" onchange="previewImage(this,5)" type="file" />
						 <span class="dui" id="imgOrder_dui" style="display: none;"></span>
						  <div id="preview5" style="margin-left:150px;clear:both; padding-top:15px;">
                    <img src="" alt="" id="imghead5" height="200" width="200" style="display:none;"/>
                </div>
                     	
                        <span id="upload_step0_status"></span>
                    </dd>
                </dl>
               
               </div>
	
			
			<div class="w670">
                <dl class="mt60b30">
                    <a target="_self" href="snack_list?page=1" class="btn-small btn-grey" id="cancel" tabindex="21">返回</a>
                    <span class="fr">
								<input type="hidden" name="snackOne.user.id" value=<s:property value="snackOne.user.id"/> />
								<input type="hidden" name="snackOne.id" value=<s:property value="snackOne.id"/> />
								<input type="hidden" name="snackOne.status" value=<s:property value="snackOne.status"/> />
								<input type="hidden" name="snackOne.imgurl" value="<s:property value="snackOne.imgurl"/>" />
                       			<input type="submit" class="btn-small btn-orange ml22"  value="确认修改"/>
							</span>
                </dl>
            </div>
            
      		
            </form>
         </div>
            
            
			
		</div>
	</div>
	
	<!--BEGIN FOOTER-->

</body>

<script src="js/jquery.min.js" type="text/javascript"></script>
<script src="js/jquery-ui.min.js" type="text/javascript"></script>
<script src="js/xinshipu.desktop2014.20150914.min.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript">
function previewImage(file,imgNum)
{
  var MAXWIDTH  = 200; 
  var MAXHEIGHT = 200;
  var div = document.getElementById('preview'+imgNum);
  if (file.files && file.files[0])
  {
      div.innerHTML ='<img id=imghead'+imgNum+'>';
      var img = document.getElementById('imghead'+imgNum+'');
      img.onload = function(){
        var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
        img.width  =  rect.width;
        img.height =  rect.height;
//         img.style.marginLeft = rect.left+'px';
        img.style.marginTop = rect.top+'px';
      }
      var reader = new FileReader();
      reader.onload = function(evt){img.src = evt.target.result;}
      reader.readAsDataURL(file.files[0]);
  }
  else //
  {
    var sFilter='filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
    file.select();
    var src = document.selection.createRange().text;
    div.innerHTML = '<img id=imghead'+imgNum+'>';
    var img = document.getElementById('imghead2');
    img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
    var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
    status =('rect:'+rect.top+','+rect.left+','+rect.width+','+rect.height);
    div.innerHTML = "<div id=divhead"+imgNum+" style='width:"+rect.width+"px;height:"+rect.height+"px;margin-top:"+rect.top+"px;"+sFilter+src+"\"'></div>";
  }
}
</script>
</html>


	


	
