<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@taglib prefix="s" uri="/struts-tags"%>
<html xmlns="http://www.w3.org/1999/xhtml"><head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="Content-Language" content="zh-CN">
<meta http-equiv="x-dns-prefetch-control" content="on">
<meta name="google" value="notranslate">
<meta http-equiv="Cache-Control" content="no-siteapp">
<meta name="applicable-device" content="pc,mobile">
<link rel="dns-prefetch" href="http://xinshipu.cn">
<base target="_blank">
<link rel="alternate" href="http://m.xinshipu.com/" media="handheld" type="application/vnd.wap.xhtml+xml">
<link rel="alternate" media="only screen and (max-width: 640px)" href="http://m.xinshipu.com/">
<meta name="mobile-agent" content="format=xhtml; url=http://m.xinshipu.com/">
<meta name="mobile-agent" content="format=html5; url=http://m.xinshipu.com/">
<meta name="mobile-agent" content="format=wml; url=http://m.xinshipu.com/">
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
</style><meta name="author" content="心食谱 - 菜谱大全"> 	
	<meta property="qc:admins" content="21000737476016301056375">
	<meta name="baidu-site-verification" content="0HDckJPeWTTKXMXz">
	<meta property="wb:webmaster" content="9fe3ebaf932ef483">
	<title>小吃味首页</title>
	<script async="" src="//www.google-analytics.com/analytics.js"></script><script type="text/javascript">
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');


  ga('create', 'UA-11253628-2', 'xinshipu.com');


	ga('set', 'dimension1', 'control');

	ga('send', 'pageview');
</script>
<link href="http://xinshipu.cn/css/ui-lightness-1.10.0/jquery-ui-1.10.0.custom.min.css" rel="stylesheet" type="text/css" id="loadCss"></head>
<body>
	
	<%@ includefile="head.jsp" %>
<div class="content">
		<div class="pt30 w960 clearfix">
			
		
				
		
 
<div class="fl w632">
<h2 class="font16 cg1 clearfix mt12 subtitle-bb"><span class="fl">最新食谱</span><a href="snack_all" class="fr font16" target="_blank">更多</a></h2>
<div class="new-menu-list clearfix mt10">
	<s:iterator value="snack" var="sk" status="i">
	<s:if test="#i.count==1">
	
	<div class="new-menu-adv">
		        <div class="bpannel h-pw clearfix">
		        	<a target="_self" href="snack_info?snackOne.id=<s:property value="#sk.id"/>" rel="NewImgClicked">
		            	<img src=<s:property value="#sk.imgurl"/> class="h-pw-p" width="416" height="166"> 
		            </a>
		            <div class="h-pw-w">
		                <a target="_self" href="snack_info?snackOne.id=<s:property value="#sk.id"/>" rel="NewImgClicked" class="font20 menu menu-title"><span class="name cb"><s:property value="#sk.name"/></span></a>
		                	<p class="star mt10" id="evaluator">
					              <span class=" orstar0  
					              
					              "></span>
					              <span rel="1" class="  dorating orstar1  
					              
					              "></span>
					              <span rel="2" class="   dorating orstar2  
					              
					              "></span>
					              <span rel="3" class="   dorating orstar3 
					              
					              
					              "></span>
					              <span rel="4" class=" dorating orstar4 
					              
					              
					              "></span>
					              <span rel="5" class="  dorating orstar5
					              active 
					              "></span>
					          </p>
		                
		                <p class="cooker ml10 mb10">
		                <a target="_self" href="snack_info?snackOne.id=<s:property value="#sk.id"/>">
		                    <img src=<s:property value="#sk.user.imgurl"/> class="photo24"> 
		                    <span class="name cb"><s:property value="#sk.user.name"/></span>
		                </a>
		                </p>
		            </div>
		        </div>
		    </div>
		 </s:if>
		 <s:else> 
		<div class="new-menu mt20">
		    	<div class="bpannel cb">
		            <a target="_self" href="snack_info?snackOne.id=<s:property value="#sk.id"/>" rel="NewImgClicked">
		                <div class="v-pw">
		                    <img src=<s:property value="#sk.imgurl"/> width="196" height="126"> 
		                    <div class="v-pw-w mt10 ml10">
		                        <s:property value="#sk.name"/></div>
		                </div>
		            </a>
		            <p class="cooker ml10">
		            <a target="_self" href="snack_info?snackOne.id=<s:property value="#sk.id"/>">
		                <img src=<s:property value="#sk.user.imgurl"/>  class="photo24"> 
		                <span class="name"><s:property value="#sk.user.name"/></span>
		                </a>
		            </p>
		        </div>
		    </div>
		    </s:else>  
	</s:iterator>
 
    
</div>
</div>
			<div class="fr w300">
			<s:if test="#session.user==null">
				<div class="side-pannel tc">
             <div class="subtitle-bg">
                 <h2 class="subtitle font16 cg2 tc">登录</h2>
             </div>
             <form class="login-form mt17"  method="post" action="user_login" >
             	<div class="txt icon-txt">
                     <label class="cg2" style="opacity: 1;"></label>
                 	 <i class="icon-font icon-user cg2 font16"></i>
                     <input type="text" name="user.username" id="email" value="">
                 </div>
             	<div class="txt icon-txt mt12">
                     <label class="cg2" style="opacity: 1;"></label>
                     <i class="icon-font icon-lock cg2 font16"></i>
                     <input type="password" name="user.password" id="password">
                 </div> 
                 
                 <div class="clearfix mt8">
                     <div class="fr"><a target="_self" href="regist.jsp" class="cb">免费注册</a></div>
                 </div>
                 
                 <button type="submit" class="o-btn login w mt17 font16" id="loginbutton">登录</button>
                 <hr class="dashline mt12">
                 
                 
                 
                 
                 
             </form>
         </div>
         </s:if>
         <s:else>
         <div class="portrait-pannel tc pr">
         <a target="_self" href="snack_my?snackOne.id=<s:property value="#session.user.id"/>" class="personnel-setting"><i class="icon-font icon-setting cg2"></i></a>
         <a target="_self" href="snack_my?snackOne.id=<s:property value="#session.user.id"/>" class="portrait">
             <img src=<s:property value="#session.user.imgurl"/>  width="100" height="100" />
             <p class="font18 mt12 cb"><s:property value="#session.user.name"/></p>
         </a>
         <div class="cg2 mt23 font12 visitor">小吃间号码<span class="ml10 font14 cb"><s:property value="#session.user.id"/></span> </div>
         <div class="side-bpannel">
             <div class="side-blist">
                 <a target="_self" href="collection_my?userId=<s:property value="#session.user.id"/>" rel="XiangChiFromProfile">我的收藏</a><a target="_self" href="snack_my?snackOne.id=<s:property value="#session.user.id"/>">我的小吃</a>
                 <a target="_self" href="question_my?id=<s:property value="#session.user.id"/>" rel="ChuFangFromProfile">我的问题</a>
                 <a target="_self" href="upload.jsp" rel="UploadFromProfile" >上传食谱</a>
             </div>
         </div>
     </div>
         </s:else>
	<div class="side-pannel tc mt20">
    <div class="subtitle-bg">
        <h2 class="subtitle font16 cg2 tc">推荐分类</h2>
    </div>
    <div class="side-bpannel mt17">
    	<div class="side-blist">
    	<s:iterator value="type" var="t">
    		<a href="snack_TypeInfo?snackOne.taste=<s:property value="t"/>" target="_self" class="no-overflow">
    		<s:property value="t"/></a>
    		</s:iterator>
    </div>
</div>
			</div>
		</div>
		</div>
		</div>
			


	
	

<!--BEGIN FOOTER-->
	<div style="width:100%;backgroung:'#fff';height:25px;text-align: center;">
   
        
			<span class="copy">©2017 xiaochiwei, all rights reserved.hzvtc 1412 纯纯</span>
        	
        	
        
</div>

	

</body></html>
