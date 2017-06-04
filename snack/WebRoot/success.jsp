

<%@ page contentType="text/html; charset=GBK" language="java" errorPage="" %>
<%@taglib prefix="s" uri="/struts-tags"%>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>成功页面</title>
</head>
<body>
	<p>操作成功，5秒后将自动跳转到首页。。。。。。。。</p>
	<%response.setHeader("Refresh","5;URL=index.jsp");%>
	<p>如果没有跳转请点击<a href="index.jsp">这里</a></p>
</body>
</html>
