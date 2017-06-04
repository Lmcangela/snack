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
	<title>小吃审核</title>
	
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
		<div class="fl w632" style="margin:0 100px;">
         		<div class="bpannel pr">
         			<div class="fr">
</div>

<div class="recipe-slider">
						<div class="owl-carousel owl-theme"  style="opacity: 1; display: block;">
				                	<div class="owl-wrapper-outer"><a href=<s:property value="snackOne.imgurl"/>>
				                		<img src=<s:property value="snackOne.imgurl"/> class="photo" width="288" height="216"  alt=<s:property value="snackOne.name"/> title=<s:property value="snackOne.name"/>>
				                	</a></ul></div>   
						                <div class="owl-controls clickable"><div class="owl-buttons"></div></div></div>
			                </div>
                    
                    <div class="recipe-exp">
                        <div class="re-up">
                            <h1 class="font18 no-overflow" alt=<s:property value="snackOne.name"/>><s:property value="snackOne.name"/></h1>
                            
<div class="font16 mt20" style="margin:30px 0 30px 0;">
				<a href="snack_shps?snackOne.id=<s:property value="snackOne.id"/>" target="_self" class="btn-small btn-orange"><span class="ml10">确认通过审核</span></a>  
			</div>
	<p class="cg2 mt12">
                                <span>小吃号</span>
                                <span><s:property value="snackOne.id"/></span>
                                
                                
                                
                            </p>
                        </div>
                        <div class="re-down mt8">
                          <img class="photo24" src=<s:property value="snackOne.user.imgurl"/>> <span><span><s:property value="snackOne.user.name"/></span></span>
                        
                        </div>
                        
                        
                    </div>
         		</div>
         		<div class="bpannel mt20 p15 re-steps">
         		 	  <div class="dl clearfix">
		                      <div class="dt cg2">小吃简介</div>
		                      <div class="dd">
		                     <s:property value="snackOne.introduce"/></div>
					 	</div>
					 <div class="dl clearfix mt20">
	                  		<div class="dt cg2">地区</div>
		                   
		                    <div class="dd">
		                        <p><span class="ingredient"><span class="name"><s:property value="snackOne.area"/></span></span></p>
								</div>
		                    </div>
	                  
	                  
	                
	                 
	                
	                  
	                  <div class="dl clearfix mt20">
	                        <div class="dt cg2">关键词</div>
	                        <div class="dd">
	                        	  <span class="ingredient"><span class="name"><s:property value="snackOne.taste"/></span></span>&nbsp;&nbsp;<span class="ingredient"><span class="name"><s:property value="snackOne.technology"/></span></span></div>
	                  </div>
	                  </div>
		
	</div>
	
	<!--BEGIN FOOTER-->

</body>

<script src="js/jquery.min.js" type="text/javascript"></script>
<script src="js/jquery-ui.min.js" type="text/javascript"></script>
<script src="js/xinshipu.desktop2014.20150914.min.js" type="text/javascript" charset="utf-8"></script>


</html>


	


	
