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
	<title>小吃味注册</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
<meta http-equiv="Content-Language" content="zh-CN" />
<meta http-equiv="x-dns-prefetch-control" content="on">
<meta name="google" value="notranslate">
<meta http-equiv="Cache-Control"content="no-siteapp" />
<meta name="applicable-device" content="pc,mobile">
<link rel="dns-prefetch" href="http://xinshipu.cn">
<base target="_blank" />
<link rel='alternate' href='http://m.xinshipu.com/registration.html' media='handheld' type='application/vnd.wap.xhtml+xml'>
<link rel="alternate" media="only screen and (max-width: 640px)" href="http://m.xinshipu.com/registration.html" >
<meta name="mobile-agent" content="format=xhtml; url=http://m.xinshipu.com/registration.html">
<meta name="mobile-agent" content="format=html5; url=http://m.xinshipu.com/registration.html">
<meta name="mobile-agent" content="format=wml; url=http://m.xinshipu.com/registration.html">
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
</style><link rel="stylesheet" href="css/jquery.validationengine.css" type="text/css"/></head>

<body>

	<%@ includefile="head.jsp" %>
<div id="content">
		 <div class="w840 bpannel accnt mt30">
		 	<h2 class="tc font20 cg1">注册</h2>
			<form  id="registration" action="user_zhuce"  method="post" class="login-form pr" >
			<div class="accnt-pannel clearfix">
				<div class="fl left" style="padding:0 300px;">
					
					<div class="txt icon-txt">
                        <label class="cg2">昵称</label>
						<i class="icon-font icon-user cg2 font16"></i>
                        <input type="text" name="user.name" class="validate[required]"  tabindex="1"/>
                    </div>
                    <div class="txt icon-txt mt20">
                        <label class="cg2">用户名</label>
                        <i class="icon-font icon-user cg2 font16"></i>
                        <input type="text"   maxlength="18" class="validate[required]"  name="user.username" id="user.username" value="" tabindex="2"/>
                    </div>
                    <div class="txt icon-txt mt20">
                        <label class="cg2">密码</label>
                        <i class="icon-font icon-lock cg2 font16"></i>
                        <input type="password" name="user.password" class="validate[required]" id="password" value="" tabindex="3"/>
                    </div>
                    <div class="txt icon-txt mt20">
                        <label class="cg2">确认密码</label>
                        <i class="icon-font icon-lock cg2 font16"></i>
                        <input type="password" class="validate[required,equals[password]]" name="confirmpassword" id="confirmpassword"  tabindex="4"/>
                    </div>  
                   <!-- <div class="mt20 checkcode clearfix">
                        <div class="txt icon-txt fl">
                            <label class="cg2">验证码</label>
                            <input type="text"  name="captcha" id="captcha" tabindex="5"/>
                        </div>
                        <div class="fr code">
                        	<img id="1961490605" src="picture/9e9a958cc4fb42399735cf6d059495d6.gif" width="99" height="40" title="" />
                        </div>
                    </div>
                    
                    <input type="hidden" value="" name="from" id="from"/>
					
					<div class="mt10">
                        <label class="cg2"><input type="checkbox" /><span class="ml10">记住密码</span></label>
                        <a href="./forgetpassword.html" class="fr cb">忘记密码？</a>
                    </div>
					-->
                    <div class="mt23">
                        <button class="btn-orange btn-block" type="submit">完成注册</button>
                    </div>
					
				</div>
			
             	
             	</div>
            </form>
            
            
			
		</div>
	</div>
			
			

	<!--BEGIN FOOTER-->
<!--<div class="w tc footer ">
    <div class="w960 clearfix">
        <div class="fr">
			<span class="copy">&copy;2017 xinshipu.com, all rights reserved. 沪ICP备10013164</span>
        	
        	
        </div>
    </div>
	-->
</div>
<input id="userid" type="hidden" value=""/><script type="text/javascript">
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');


  ga('create', 'UA-11253628-2', 'xinshipu.com');


	ga('set', 'dimension1', 'test');

	ga('send', 'pageview');
</script>
</body>

<script src="js/jquery.min.js" type="text/javascript"></script>
<script src="js/effect.js"></script>
<script src="js/jquery.validationengine.2.6.20120907.min.v2.js" type="text/javascript"></script>
<script src="js/jquery.validationengine-en.20160913.js" type="text/javascript"></script><script type="text/javascript">	
 $(document).ready(function(){
	$("#registration").validationEngine();
	$('#submit').click(function () {
		$('#registration').submit();
		return false;
	 });
	 
			$("#email").focus();
	   
});

function subObjMaxlength(obj)
{
var maxlen =obj.maxLength;
var strValue = obj.value;
var strTemp ="";
var i,sum;
sum=0;
for(i=0;i<strValue.length;i++)
{
   if ((strValue.charCodeAt(i)>=0) && (strValue.charCodeAt(i)<=255))
   sum=sum+1;
   else
    sum=sum+2;
      if(sum <=maxlen){
      strTemp +=strValue.charAt(i);
      }else {
      obj.value = strTemp;
      break;
      }
}
}
</script>

</html>


	


	


	


	
