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
	<meta name="author" content="心食谱" /> 
	<meta name="description" content="分享拿手菜" />
	<title>分享小吃</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
<meta http-equiv="Content-Language" content="zh-CN" />
<meta http-equiv="x-dns-prefetch-control" content="on">
<meta name="google" value="notranslate">
<meta http-equiv="Cache-Control"content="no-siteapp" />
<meta name="applicable-device" content="pc">
<link rel="dns-prefetch" href="//ali.xinshipu.cn">

<base target="_blank" />
<link rel='alternate' href='http://m.xinshipu.com/create' media='handheld' type='application/vnd.wap.xhtml+xml'>
<link rel="alternate" media="only screen and (max-width: 640px)" href="http://m.xinshipu.com/create" >
<meta name="mobile-agent" content="format=xhtml; url=//m.xinshipu.com/create">
<meta name="mobile-agent" content="format=html5; url=//m.xinshipu.com/create">
<meta name="mobile-agent" content="format=wml; url=//m.xinshipu.com/create">
<link rel="shortcut icon" href="//ali.xinshipu.cn/2014/css/img/xsp.ico">
<link rel="stylesheet" type="text/css" href="css/xinshipu.desktop.20170414.min.css">

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
</style><script src="js/jquery.min.js" type="text/javascript"></script>
<script src="js/jquery-ui.min.js" type="text/javascript"></script>
<script src="js/xinshipu.desktop2014.20170414.min.js" type="text/javascript" charset="utf-8"></script>
<link rel="stylesheet" type="text/css" href="css/jquery-ui-1.10.0.custom.min.css">
<link rel="stylesheet" href="css/jquery.validationengine.css" type="text/css"/><script type="text/javascript">
		var jsClicked = false;
		var uploadAction = "/doUpload.html";
	</script>
	<script type="text/javascript" src="js/ajaxupload.3.5.min.js"></script>
<script type="text/javascript" src="js/swfupload_20110922.js"></script>
<script type="text/javascript" src="js/handlers.desktop2014.js" type="text/javascript"></script>
<link rel="stylesheet" href="css/jquery-ui-1.10.0.custom.min.css" type="text/css"/>
    <script type="text/javascript" src="js/jquery-ui-1.10.0.custom.min.js"></script>
</head>

<body>
	<s:if test="#session.user==null">
	<script type="text/javascript">window.location="login.jsp"</script>
	</s:if>
	<div class="w tc header" id="hd">
     <div class="w960 top">
     	<div class="logo">
         	<a href="/" target="_self"><span>小吃味</span></a>
         </div>
         <div class="search">
             <div class="search-mod">
                 <div class="search-pannel">
                     <form target="_self" method="get" action="/doSearch.html" id="searchform" >
                         <div class="search-btn">
                         <button type="submit" class="font16" 
                         id="searchbutton"  onClick="javascript:ga('send', 'event', 'header', 'QuerySubmit',$('#q').val());window.location.href='/doSearch.html?q='+encodeURI($.trim($('#q').val()));return false;" >搜索</button>
                         </div>
                         <div class="search-panel-fields">
                             <label for="searchVal font16"></label>
                             <div class="search-combobox"><div class="search-combobox-input-wrap">
                             <input accesskey="s"  name="q" id="q"  class="search-combobox-input font16" 
                               type="text" x-webkit-speech  value="" autocomplete="off"/>
                             </div></div>  
                             <i class="icon-font icon-search"></i>                
                         </div>
                     </form>
                 </div>
             </div>
         </div>
         <div class="site-nav">
         	<ul class="clearfix">
         	<li><a class="cb" href="upload.jsp" target="_self"><i class="icon-upload cg2"></i><span>上传</span></a></li>
	                 <li><a class="cb" href="questionSubmit.jsp" target="_self"><i class="icon-ask cg2"></i><span>提问</span></a></li>
	                 <s:if test="#session.user==null">
	                 <li><a class="cb"  href="login.jsp"><i class="icon-lock cg2"></i><span>登录</span></a></li>
	                 <li><a class="cb" target="_self" href="regist.jsp" ><i class="icon-signup cg2"></i><span>注册</span></a></li>
	                 </s:if>
	                 <s:else>
	                 <li class="dropdown-wrap">
                     <li class="dropdown-wrap">
                        <a href="user_cf?user.id=<s:property value="#session.user.id"/>" class="cb portrait"><img class="portrait-small"  src=<s:property value="#session.user.imgurl"/> width="24" height="24" alt="小头像"/> <span><s:property value="#session.user.name"/></span><i class="icon-more4 cg2 ml4 "></i></a>
                        <div class="dorpdown-wrap">
                            <ul class="portrait-dropdown">
                                <li><a target="_self" href="snack_my?snackOne.id=<s:property value="#session.user.id"/>">我的厨房</a></li>
                                <li><a target="_self" href="collection_my?userId=<s:property value="#session.user.id"/>" >我的收藏</a></li>
                                <li><a target="_self" href="user_out">退出</a></li>
                            </ul>
                        </div>
                    </li>
	                 </s:else>
	         	 </ul>    
         </div>
     </div>
     <div class="w tl nav">
         <div class="w960">
             <ul class="clearfix font16">
                 <li class=""><a target="_self" href="index.jsp">首页</a></li>
                 <li class=""><a target="_self" href="snack_all" rel="cpdqClk">所有小吃</a></li>
                 <li class=""><a target="_self" href="snack_type" rel="jccClk">小吃分类</a></li>
                 <li class=""><a target="_self" href="question_all?page=1" rel="mswdClk">美食问答</a></li>
                 <li class=""><a target="_self" href="snack_my" rel="yhssClk">我的小吃间</a></li>
             </ul>
         </div>
     </div>
 </div>
<div  class="content">
	<div class="pt30 w960 clearfix">
		<div class="tabs font16">
                <a href="#" target="_self" class="cur cb tc"><div class="inner">传统上传</div></a>
        </div>
        
		<div class="bpannel p15">
		<form  id="create_receipt" action="snack_upload" method="post"  enctype="multipart/form-data">
			<div class="table-title clearfix font20 cg2">
                <div class="fl w410">基本信息</div>
            </div>
			<div class="w670">
				
				<dl class="mt30">
                    <dt class="cg1 font16">小吃名称<span class="cod ml10 font12">必填</span></dt>
                    <dd class="mt12"><input type="text" class="validate[custom[shipuname],maxSize[24]] ui-ipt-long "  name="snackOne.name" id="name" style="font-size:14px" value="" tabindex="1"/></dd>
                </dl>
                <dl class="mt30">
                    <dt class="cg1 font16">小吃介绍<span class="cod ml10 font12">必填</span></dt>
                    <dd class="mt12"><textarea placeholder="写下小吃的特色特点吧！" name="snackOne.introduce" id="material" class="validate[required] ui-text elastic" tabindex="3"></textarea></dd>
                </dl>
                <dl class="mt30">
                    <dt class="cg1 font16">地区<span class="cod ml10 font12">必填</span></dt>
                    <dd class="mt12">
                    <input type="text" id="steps" name="snackOne.area" placeholder="云南！伊拉克什么的都行！！" class="validate[required] ui-ipt-long " >
                    </dd>
                </dl>
				 <dl class="mt30">
                    <dt class="cg1 font16">工艺<span class="cod ml10 font12">必填</span></dt>
                    <dd class="mt12">
                    <input type="text" id="steps" name="snackOne.technology" placeholder="爆炒！油炸清蒸！！" class="validate[required] ui-ipt-long " >
                    </dd>
                </dl>
				<dl class="mt30">
                    <dt class="cg1 font16">口味<span class="cod ml10 font12">必填</span></dt>
                    <dd class="mt12">
                    <input type="text" id="steps" name="snackOne.taste" placeholder="酸甜？苦辣？美滋滋？" class="validate[required] ui-ipt-long" >
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
                     	<div id="uploader" class="btn-small btn-orange">
                    		<div id="placeholder" ></div>
                        </div>
                        <span id="upload_step0_status"></span>
                    </dd>
                </dl>
               
               </div>
	
			<div class="table-title clearfix cg2 mt30">
                <div class="fl w410 font20">选项</div> 
                
            </div>
			<div class="w670">
                <dl class="mt60b30">
                    <a href="index.jsp" class="btn-small btn-grey" id="cancel" tabindex="21">首页</a>
                    <span class="fr">
								<input type="hidden" name="snackOne.user.id" value=<s:property value="#session.user.id"/> />
								<input type="hidden" name="snackOne.status" value="1" />
                       			<input type="submit" class="btn-small btn-orange ml22"  value="直接发布"/>
							</span>
                </dl>
            </div>
            
      		
            </form>
         </div>
	 </div>
        <!--END MAIN CONTENT-->
    </div>    
	<!--BEGIN FOOTER-->
<div class="w tc footer ">
    <div class="w960 clearfix">
        <div class="fr">
			<span class="copy">©2017 xiaochiwei, all rights reserved.hzvtc 1412 纯纯</span>
        	
        	
        </div>
    </div>
</div>
<input id="userid" type="hidden" value="1474003"/><script type="text/javascript">
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');


  ga('create', 'UA-11253628-2', 'xinshipu.com');


	ga('set', 'dimension1', 'test');

	ga('send', 'pageview');
</script>
</body>


<script src="js/jquery.validationengine.2.6.20120907.min.v2.js" type="text/javascript"></script>
<script src="js/jquery.validationengine-en.20160913.js" type="text/javascript"></script><script type="text/javascript">
//图片预览功能
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
function clacImgZoomParam( maxWidth, maxHeight, width, height ){
    var param = {top:0, left:0, width:width, height:height};
    if( width>maxWidth || height>maxHeight )
    {
        rateWidth = width / maxWidth;
        rateHeight = height / maxHeight;

        if( rateWidth > rateHeight )
        {
            param.width =  maxWidth;
            param.height = Math.round(height / rateWidth);
        }else
        {
            param.width = Math.round(width / rateHeight);
            param.height = maxHeight;
        }
    }
    param.left = Math.round((maxWidth - param.width) / 2);
    param.top = Math.round((maxHeight - param.height) / 2);
    return param;
}


 $(document).ready(function(){
	init("editReceipt");
	
	//初始化排序控件
	$( "#sortable" ).sortable();
	$( "#sortable" ).disableSelection();
	
	$('.elastic').elastic();
	$("#name").focus();
	$("#create_receipt").validationEngine();//验证初始化
	
	
	$("#cancel").click(function (){	
		window.close();
		return false;
	});
	
	$("#more_options").click(function (){
		$(".options").show();
		$(this).hide();
		$("#less_options").show();
		$("#description").focus();
		return false;
	});
	
	$("#less_options").click(function (){
		$(".options").hide();
		$(this).hide();
		$("#more_options").show();
		return false;
	});
	
	if($("#shipustatus").val()!=1){
		//自动保存草稿
		setInterval('entering()',60000);
	}

	$("#entering").click(function (){
		entering();
		return false;
	});
	
	
	$("#save").click(function (){
		
		var status=0;
		for(var i=1;i<13;i++){
			if($('#show_step'+i+'_img').attr("src")!=""
				&&$('#show_step'+i+'_img').attr("src")!="/pictures/css/img/nostep.png"
				&&$('#show_step'+i+'_img').attr("src")!=undefined){
				status=1;
				break;
			}
		}
		
		if($("#shiputype").val()!=0){
			status=1;
		}
			
		if(status==0){
			jQuery.noticeAdd({text: '请上传图片',stay: false});
			return false;
		}
		
		
		
		var name=$("#name").val();
		var material=$("#material").val();
		var steps=$("#steps").val();
		
		
		if(name!=""||material!=""||steps!=""){
			var step_img = new Array();
			
			var a = $("#sortable").children();
			for(var i=0;i<a.length;i++){
				var id = a[i].id;
				id = id.replace("imgli","");
				step_img[i]  = $('#step'+id+'_img').val();
		  	}
			
			$('#step1_img').val(step_img[0]);
			$('#step2_img').val(step_img[1]);
			$('#step3_img').val(step_img[2]);
			$('#step4_img').val(step_img[3]);
			$('#step5_img').val(step_img[4]);
			$('#step6_img').val(step_img[5]);
			$('#step7_img').val(step_img[6]);
			$('#step8_img').val(step_img[7]);
			$('#step9_img').val(step_img[8]);
			$('#step10_img').val(step_img[9]);
			$('#step11_img').val(step_img[10]);
			$('#step12_img').val(step_img[11]);
			
		}
		
		
		$("#create_receipt").submit();
		return false;
	});
	
	$("#add_step0_img").click(function (){
		failOver(0);
		return false;
	});
	
	
	
	$(".type-tag").click(function (){
		var val = $(this).html();
		
		var tags = $("#tags").val();
		if(tags==""){
			tags = val;
		}else if(tags.indexOf(val)<0){
			tags= tags + ","+val;
		}
		
		$("#tags").val(tags);
		
	});
	
	
});

 /* $(function() {
   alert(2);
   $( "#sortable" ).sortable();
   $( "#sortable" ).disableSelection();
 }); */
 
 
 function entering(){
	 
		var step_img = new Array();
		
		var a = $("#sortable").children();
		for(var i=0;i<a.length;i++){ //遍历子元素
			var id = a[i].id;
			id = id.replace("imgli","");
			step_img[i]  = $('#step'+id+'_img').val();
	  	}
		 
		var shipuid=$("#shipuid").val();
		var name=$("#name").val();
		var material=$("#material").val();
		var steps=$("#steps").val();
		
		
		
		var description=$("#description").val(); 
		var tip=$("#edit_tips").val();    
		var tags=$("#tags").val();  
		var source=$("#source").val();    
		var categories=$("#categories").val();
		var status=3;
		
		
		if(name!=""||material!=""||steps!=""||description!=""||tip!=""||tags!=""||source!=""){
			
			$.post(
				"/api/doSaveShipu.html",
				{
					shipuid 	: shipuid,
					name		: name,
					material	: material,
					steps		: steps,
					step1_img	: step_img[0],
					step2_img 	: step_img[1],
					step3_img	: step_img[2],
					step4_img	: step_img[3],
					step5_img	: step_img[4],
					step6_img	: step_img[5],
					step7_img	: step_img[6],
					step8_img	: step_img[7],
					step9_img	: step_img[8],
					step10_img	: step_img[9],
					step11_img	: step_img[10],
					step12_img	: step_img[11],
					
					description	: description,
					tip			: tip,
					tags		: tags,
					source		: source,
					categories	: categories,
					status		: status
				},
				function(data){
					jQuery.noticeAdd({text: '已自动保存',stay: false});
					//alert(data);
					var newshipuid=eval(data);
					if(newshipuid!=null){
						$('#shipuid')[0].value=newshipuid;
					}
				}
			)
		}else{
			jQuery.noticeAdd({text: '请输入内容',stay: false});
		}
	}


	
</script>

</html>