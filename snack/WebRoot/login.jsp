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
	<title>小吃味登录</title>
	
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

	<%@ includefile="head.jsp" %>
<div  class="content">
		<div class="w840 bpannel accnt mt30">
			<h2 class="tc font20 cg1">登录</h2>
			<h3 id="failregist"style="color: red; text-align: center;;"><s:actionerror/></h3>
            <form class="login-form pr"   action="user_login"  method="post">
            <div class="accnt-pannel clearfix">
            
                <div class="fl left" style="padding:0 305px;">
                    <div class="txt icon-txt">
                        <label class="cg2" id="email_label">
                        用户名</label>
                        <i class="icon-font icon-user cg2 font16"></i>
                        <input  type="text"  name="user.username" id="email" tabindex="1" value=""/>
                    </div>
                    
                    <div class="txt icon-txt mt20">
                        <label class="cg2" id="password_label">
                        密码</label>
                        <i class="icon-font icon-lock cg2 font16"></i>
                        <input  type="password"  name="user.password" id="password" value="" tabindex="2"/>
                    </div> 
                    
                    
                    
                    
                    <div class="mt20">
                        <a href="regist.jsp" class="fr cb">没有账号？</a>
                    </div>
                    
                    <div class="mt20">
                        <button class="btn-orange btn-block mt20" id="submit">登录</button>
                    </div>
                </div>
                
                
            
                
                
            </div>
           
            	</form>
             
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


	ga('set', 'dimension1', 'test');

	ga('send', 'pageview');
</script>
<script type="text/javascript">
$(document).ready(function(){
	
	$('#submit').click(function () {
		$('#login').submit();
	 });
	 
	 $('#email').change(function(){ 
	 	$('#email_label').html('');
	 });
	 
	 $('#email').keydown(function(){ 
	 	$('#email_label').html('');
	 });
	 
	 $('#password').change(function(){ 
	 	$('#password_label').html('');
	 });
	 
	  $('#password').keydown(function(){ 
	 	$('#password_label').html('');
	 });
});
</script>


</html>


	


	
