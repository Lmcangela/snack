

<%@ page contentType="text/html; charset=GBK" language="java" errorPage="" %>
<%@taglib prefix="s" uri="/struts-tags"%>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>�ɹ�ҳ��</title>
</head>
<body>
	<p>�����ɹ���5����Զ���ת����ҳ����������������</p>
	<%response.setHeader("Refresh","5;URL=index.jsp");%>
	<p>���û����ת����<a href="index.jsp">����</a></p>
</body>
</html>
