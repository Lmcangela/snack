<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd"> 
<html xmlns="http://www.w3.org/1999/xhtml"><head>
	<title><s:property value="snackOne.taste"/></title>
<link rel="dns-prefetch" href="http://xinshipu.cn">
<link rel="alternate" href="http://m.xinshipu.com/weeklyhotshipu.html" media="handheld" type="application/vnd.wap.xhtml+xml">
<link rel="alternate" media="only screen and (max-width: 640px)" href="http://m.xinshipu.com/weeklyhotshipu.html">

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

<body><div id="BAIDU_DUP_fp_wrapper" style="position: absolute; left: -1px; bottom: -1px; z-index: 0; width: 0px; height: 0px; overflow: hidden; visibility: hidden; display: none;"><iframe id="BAIDU_DUP_fp_iframe" src="https://pos.baidu.com/wh/o.htm?ltr=" style="width: 0px; height: 0px; visibility: hidden; display: none;"></iframe></div>
<div class="container">
<%@ includefile="head.jsp" %>
<div class="content">
	<div class="pt30 w960 clearfix">
	<h1 class="font22 cg1">类别：<s:property value="snackOne.taste"/></h1>
	<div class="fl pm30 w632">
		<div class="new-menu-list search-menu-list clearfix mt10">
		<s:iterator value="snack" var="sk" status="i">
			<div class="new-menu mt20">
                   	<div class="bpannel cb">
                           <a href="snack_info?snackOne.id=<s:property value="#sk.id"/>" title=<s:property value="#sk.name"/>>
                               <div class="v-pw">
                               	<img src=<s:property value="#sk.imgurl"/> width="196" height="126" alt=<s:property value="#sk.name"/> tabindex=<s:property value="#i.count"/>> 
                                   <div class="v-pw-w mt10 ml10">
                                   <s:property value="#sk.name"/>
                                       </div>
                               </div>
                           </a>
                       </div>
                   </div>
        </s:iterator>
			</div>	
			<div class="paging mt20">
    <div class="clearfix">
       
        
        
        
        
       
    </div>
</div>
</div>
	<%@ includefile="right.jsp" %>
	
</div>
</div>
</div>

<!--BEGIN FOOTER-->

<input id="userid" type="hidden" value="">


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

</div></body></html>

