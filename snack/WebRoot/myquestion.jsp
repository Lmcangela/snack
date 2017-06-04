<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd"> 
<html xmlns="http://www.w3.org/1999/xhtml"> 
<head>
	<meta http-equiv="Content-Language" content="zh-CN" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="author" content="心食谱" /> 	
	<meta name="keywords" content="的" />  
	<title><s:property value="#session.user.name"/>的吃货间</title>

	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
<meta http-equiv="Content-Language" content="zh-CN" />
<meta http-equiv="x-dns-prefetch-control" content="on">
<meta name="google" value="notranslate">
<meta http-equiv="Cache-Control"content="no-siteapp" />
<meta name="applicable-device" content="pc,mobile">
<link rel="dns-prefetch" href="http://xinshipu.cn">
<base target="_blank" />
<link rel='alternate' href='http://m.xinshipu.com/chufang/562660/' media='handheld' type='application/vnd.wap.xhtml+xml'>
<link rel="alternate" media="only screen and (max-width: 640px)" href="http://m.xinshipu.com/chufang/562660/" >
<meta name="mobile-agent" content="format=xhtml; url=http://m.xinshipu.com/chufang/562660/">
<meta name="mobile-agent" content="format=html5; url=http://m.xinshipu.com/chufang/562660/">
<meta name="mobile-agent" content="format=wml; url=http://m.xinshipu.com/chufang/562660/">
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
		<div class="pt30 w960">
       <div class="content-header">
           <p class="scored"><i class="icon-score-3"></i></p>
           <h2 class="font22 mt10"><a  href="#" style="font-size:24px;color:red;"><s:property value="#session.user.name"/>的吃货间</a></h2>
           <div class="fr">
           </div>
       </div>
       <div class="content-nav mt30 tc font16">
				<a target="_self" href="snack_my?snackOne.id=<s:property value="#session.user.id"/>" 		
					>
						我的小吃</a><span class="cg3">|</span>
				<a target="_self" href="collection_my?userId=<s:property value="#session.user.id"/>" 
							
					>收藏</a><span class="cg3">|</span>
				<a target="_self" class = "cur" href="question_my?id=<s:property value="#session.user.id"/>" 
							
					>
						我的问题</a><span class="cg3">|</span>
       </div>
</div>

<div class="pt30 w960 clearfix">
			<div class="fl w632">
				<div class="home-menu-list clearfix">
				<ul class="table-list">
                    	<s:iterator value="question" var="qs">	
			    <li class="ptb20 clearfix">
                            <div class="fl w410">
                            	<a  href="question_info?id=<s:property value="#qs.id"/>">
								<p class="font16 cb"><s:property value="#qs.title"/></p></a>
							 	<p class="cg2" style="font-size:14px "><s:property value="#qs.text.substring(0,10)"/>.......</p>
							</div>
                            <div class="fr w190 cg2">
                                <div class="clearfix">
                            
                                    <div class="fr w-half tr">
                                        <a onClick="return confirm('确认要删除?')" href="question_delete?id=<s:property value="#qs.id"/>">
													删除
												</a>
                                    </div>
                                </div>
                            </div>
                        </li>
						</s:iterator>	
						
							</ul>
					</div>
				
				</div>
			
			
				<%@ includefile="right.jsp" %>
     
</div>
                
  

</div>
	
	
			
			
		</div>
         
         
     </div>
     <!--BEGIN FOOTER-->
<div class="w tc footer ">
    <div class="w960 clearfix">
        <div class="fr">
			<span class="copy">©2017 xiaochiwei, all rights reserved.hzvtc 1412 纯纯</span>
        	
        	
        </div>
    </div>
</div>
<input id="userid" type="hidden" value=""/><div class="hide" id="tagging" title="发纸条">
        <div class="pop-content">
            <div class="pop-main">
                <h2 class="font20 cg1 tc mt20">发纸条 </h2>
                <dl class="note-field mt23">
                    <dd>
                        <textarea class="ui-text-note mt10" id="content"></textarea>
                        <input type="hidden" id="authoruserid" value=""/>
                    </dd>
                </dl>       
            </div>
        </div>
    </div>
    
</body>

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
 $(document).ready(function(){	
	
	$("#create").click(function (){
		window.location.href='/create';
		return false;
	});
	
	init("chufang");
	
	
});
</script>

</html>
