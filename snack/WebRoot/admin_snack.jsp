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
	<title>小吃管理</title>
	
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
			<table cellSpacing="1" cellPadding="0" width="100%" align="center" bgColor="#f5fafe" border="0">
				<TBODY>
					<tr>
						<td class="ta_01" align="center" bgColor="#FFFFFF"	>
							<strong>小吃列表</strong>
						</TD>
					</tr>
					
					<tr>
						<td class="ta_01" align="center" bgColor="#f5fafe">
							<table cellspacing="0" cellpadding="1" rules="all"
								bordercolor="gray" border="1" id="DataGrid1"
								style="BORDER-RIGHT: gray 1px solid; BORDER-TOP: gray 1px solid; BORDER-LEFT: gray 1px solid; WIDTH: 100%; WORD-BREAK: break-all; BORDER-BOTTOM: gray 1px solid; BORDER-COLLAPSE: collapse; BACKGROUND-COLOR: #f5fafe; WORD-WRAP: break-word">
								<tr
									style="FONT-WEIGHT: bold; FONT-SIZE: 12pt; HEIGHT: 25px; BACKGROUND-COLOR: #FFFFFF">

									<td align="center" width="18%">
										序号
									</td>
									<td align="center" width="17%">
										小吃图片
									</td>
									<td align="center" width="17%">
										小吃名称
									</td>
									<td align="center" width="17%">
										小吃作者
									</td>
									<td align="center" width="17%">
										审核
									</td>
									<td width="7%" align="center">
										编辑
									</td>
									<td width="7%" align="center">
										删除
									</td>
								</tr>
									<s:iterator var="p" value="pageBean.list" status="status">
										<tr onmouseover="this.style.backgroundColor = 'white'"
											onmouseout="this.style.backgroundColor = '#F5FAFE';">
											<td style="CURSOR: hand; HEIGHT: 22px" align="center"
												width="18%">
												<s:property value="#status.count"/>
											</td>
											<td style="CURSOR: hand; HEIGHT: 22px" align="center"
												width="17%">
												<img width="80" height="45" src=<s:property value="#p.imgurl"/>>
											</td>
											<td style="CURSOR: hand; HEIGHT: 22px" align="center"
												width="17%">
												<s:property value="#p.name"/>
											</td>
											<td style="CURSOR: hand; HEIGHT: 22px" align="center"
												width="17%">
												<s:property value="#p.user.name"/>
											</td>
											<td align="center"style="HEIGHT: 22px" align="center">
											<s:if test="#p.status==2">
											<a href="#" target="_self">
													<img src="images/shpass.png" width="60" height="30" border="0" style="CURSOR: hand">
												</a>
												</s:if>
												<s:else>
												<a target="_self" href="snack_shenhe?snackOne.id=<s:property value="#p.id"/>">
													<img src="images/shwait.png" width="60" height="30" border="0" style="CURSOR: hand">
												</a>
												</s:else>
											</td>
											<td align="center" style="HEIGHT: 22px">
												<a target="_self" href="snack_edit?snackOne.id=<s:property value="#p.id"/>">
													<img src="images/edit.png" width="16" height="16" border="0" style="CURSOR: hand">
												</a>
											</td>
									
											<td align="center" style="HEIGHT: 22px">
												<a onClick="return confirm('确认要删除?')" target="_self" href="snack_adelete?snackOne.id=<s:property value="#p.id"/>">
													<img src="images/delete.png" width="16" height="16" border="0" style="CURSOR: hand">
												</a>
											</td>
										</tr>
									</s:iterator>	
							</table>
						</td>
					</tr>
					<tr align="center">
						<td colspan="7">
							第<s:property value="pageBean.page"/>/<s:property value="pageBean.totalPage"/>页 
							<s:if test="pageBean.page != 1">
								<a target="_self" href="snack_list?page=1">首页</a>|
								<a target="_self" href="snack_list?page=<s:property value="pageBean.page-1"/>">上一页</a>|
							</s:if>
							<s:if test="pageBean.page != pageBean.totalPage">
								<a target="_self" href="snack_list?page=<s:property value="pageBean.page+1"/>">下一页</a>|
								<a target="_self" href="snack_list?page=<s:property value="pageBean.totalPage"/>">尾页</a>|
							</s:if>
						</td>
					</tr>
				</TBODY>
			</table>
             
         </div>
	</div>
	
	<!--BEGIN FOOTER-->

</body>

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


	


	
