<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<div class="w tc header" id="hd">
     <div class="w960 top">
     	<div class="logo">
         	<a target="_self" href="index.jsp" target="_self"><span>小吃味</span></a>
         </div>
         <div class="search">
             <div class="search-mod">
                 <div class="search-pannel">
                     <form target="_self" method="get" action="snack_search" id="searchform">
                         <div class="search-btn">
                         <button type="submit" class="font16" id="searchbutton">搜索</button>
                         </div>
                         <div class="search-panel-fields">
                             <label for="searchVal font16"></label>
                             <div class="search-combobox"><div class="search-combobox-input-wrap">
                             <input accesskey="s" name="snackOne.taste" id="q" class="search-combobox-input font16 ui-autocomplete-input" type="text" x-webkit-speech="" value="" autocomplete="off"><span role="status" aria-live="polite" class="ui-helper-hidden-accessible"></span>
                             </div></div>  
                             <i class="icon-font icon-search"></i>                
                         </div>
                     </form>
                 </div>
             </div>
         </div>
         <div class="site-nav">
         	<ul class="clearfix">
         	<li><a class="cb" href="upload.jsp" target="_self"><i class="icon-upload cg2"></i><span>上传</span></a></li>
	                 <li><a class="cb" href="questionSubmit.jsp" target="_self"><i class="icon-ask cg2"></i><span>提问</span></a></li>
	                 <s:if test="#session.user==null">
	                 <li><a class="cb" target="_self"  href="login.jsp"><i class="icon-lock cg2"></i><span>登录</span></a></li>
	                 <li><a class="cb" target="_self" href="regist.jsp" ><i class="icon-signup cg2"></i><span>注册</span></a></li>
	                 </s:if>
	                 <s:else>
	                 <li class="dropdown-wrap">
                     <li class="dropdown-wrap">
                        <a href="user_cf?user.id=<s:property value="#session.user.id"/>" class="cb portrait"><img class="portrait-small"  src=<s:property value="#session.user.imgurl"/> width="24" height="24" alt="小头像"/> <span><s:property value="#session.user.name"/></span><i class="icon-more4 cg2 ml4 "></i></a>
                        <div class="dorpdown-wrap">
                            <ul class="portrait-dropdown">
                                <li><a target="_self" href="snack_my?snackOne.id=<s:property value="#session.user.id"/>">我的吃货间</a></li>
                                <li><a target="_self" href="collection_my?userId=<s:property value="#session.user.id"/>" >我的收藏</a></li>
                                <li><a target="_self" href="user_out">退出</a></li>
                            </ul>
                        </div>
                    </li>
	                 </s:else>
	             </ul>    
         </div>
     </div>
     <div class="w tl nav">
         <div class="w960">
             <ul class="clearfix font16" style="
width: 600px;
margin: 0 auto;
position: relative;">
                 <li class=""><a target="_self" href="index.jsp">首页</a></li>
                 <li></li>
                 <li class=""><a target="_self" href="snack_all?page=1" rel="cpdqClk">所有小吃</a></li>
                 <li></li>
                 <li class=""><a target="_self" href="snack_type" rel="jccClk">小吃分类</a></li>
                 <li></li>
                 <li class=""><a target="_self" href="question_all?page=1" rel="mswdClk">美食问答</a></li>
                 <li></li>
                  <s:if test="#session.user!=null">
                 <li class=""><a target="_self" href="snack_my?snackOne.id=<s:property value="#session.user.id"/>" >吃货间</a></li>
            	</s:if>
            	<s:else>
            	<li class=""><a target="_self" href="login.jsp" >吃货间</a></li>
            	</s:else>
             </ul>
         </div>
     </div>
 </div>