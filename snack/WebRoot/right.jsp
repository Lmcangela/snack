<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
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
         <a target="_self" href="user_cf?user.id=<s:property value="#session.user.id"/>" class="personnel-setting"></a>
         <a target="_self" href="user_cf?user.id=<s:property value="#session.user.id"/>" class="portrait">
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
	
		
