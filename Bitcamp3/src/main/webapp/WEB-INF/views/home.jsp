<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var="context" value="<%=request.getContextPath() %>" /><!-- //기본으로 내장되어있는 주소를 불러온다. -->





<html>
<head>
	<title>Home</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<link rel="stylesheet" href="${context}/resources/css/style.css">
	<link rel="stylesheet" href="${context}/resources/css/magnific-popup.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script src="${context}/resources/js/jquery.magnific-popup.js"></script>
	<script src="${context}/resources/js/cookie.js"></script>
	<script src="${context}/resources/js/app.js"></script>
	<script src="${context}/resources/js/algo.js"></script>
	
</head>
<body>
<div id="wrapper" >
</div>

</body>


</html>
<script>
app.init('${context}');
</script>