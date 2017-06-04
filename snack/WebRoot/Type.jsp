<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html xmlns="http://www.w3.org/1999/xhtml"> 
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
	<meta name="author" content="心食谱" /> 	
	<meta name="description" content="心食谱厨友给做的分类" /> 
	<title>好多分类啊</title>
	<link rel="stylesheet" type="text/css" href="css/menus.css">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
<meta http-equiv="Content-Language" content="zh-CN" />
<meta http-equiv="x-dns-prefetch-control" content="on">
<meta name="google" value="notranslate">
<meta http-equiv="Cache-Control"content="no-siteapp" />
<meta name="applicable-device" content="pc,mobile">
<link rel="dns-prefetch" href="http://xinshipu.cn">
<base target="_blank" />
<link rel='alternate' href='http://m.xinshipu.com/chuyoufenlei' media='handheld' type='application/vnd.wap.xhtml+xml'>
<link rel="alternate" media="only screen and (max-width: 640px)" href="http://m.xinshipu.com/chuyoufenlei" >
<meta name="mobile-agent" content="format=xhtml; url=http://m.xinshipu.com/chuyoufenlei">
<meta name="mobile-agent" content="format=html5; url=http://m.xinshipu.com/chuyoufenlei">
<meta name="mobile-agent" content="format=wml; url=http://m.xinshipu.com/chuyoufenlei">
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
	
	<%@ includefile="head.jsp" %>
<div class="content">
	<div class="w940">
         	<h1 class="font20 cg1 tc mt20">小吃分类</h1>
         	
         	<div class="bpannel mt23">
                <ul class="recipe-category-list clearfix">
                <s:iterator value="typeAll" var="tp">
                <li><a href="snack_TypeInfo?snackOne.taste=<s:property value="#tp.name"/>" class="no-overflow"><span class="r-name"><s:property value="#tp.name"/></span><span class="cg2"><s:property value="#tp.num"/></span></a></li>
                </s:iterator>	
                	</ul>
            </div>
            
			<div class="paging mt20">
    <div class="clearfix">
       
       
    </div>
</div>
</div>
	</div>
	<!--BEGIN FOOTER-->

<input id="userid" type="hidden" value=""/></body>


<script src="js/jquery.min.js" type="text/javascript"></script>
<script src="js/jquery-ui.min.js" type="text/javascript"></script>
<script src="js/xinshipu.desktop2014.20150914.min.js" type="text/javascript" charset="utf-8"></script><script type="text/javascript">
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');


  ga('create', 'UA-11253628-2', 'xinshipu.com');


	ga('set', 'dimension1', 'control');

	ga('send', 'pageview');
</script>
<script type="text/javascript">
	$(document).ready(function() {
		init("chuyoufenlei");
	});
</script>	
</html>

