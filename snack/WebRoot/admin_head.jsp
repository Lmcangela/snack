<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<div class="w tc header" id="hd">
     <div class="w960 top">
     	<div class="logo">
         	<a href="index.jsp" target="_self"><span>小吃味</span></a>
         </div>
           
         
             <h1 style="font-size:30px;padding:24px;">           小吃味后台管理</h1>
         
      <div class="site-nav">
      <s:if test="#session.admin!=null">
         	<ul class="clearfix">
     
	                
	                 <li class="dropdown-wrap">
                     <li class="dropdown-wrap">
                        <a class="cb portrait"><img class="portrait-small"  src="picture/1.jpg" width="24" height="24" alt="小头像"/> <span><s:property value="#session.admin.name"/></span><i class="icon-more4 cg2 ml4 "></i></a>
                        <div class="dorpdown-wrap">
                            <ul class="portrait-dropdown">
                                <li><a target="_self" href="admin_out">退出</a></li>
                            </ul>
                        </div>
                    </li>
	                 
	             </ul>    
	             </s:if>
         </div>
     </div>
     <div class="w tl nav">
         <div class="w960">
             <ul class="clearfix font16" style="
width: 325px;
margin: 0 auto;
position: relative;">    
                 <li class=""><a target="_self" href="user_list?page=1" rel="cpdqClk">用户管理</a></li>
                
                 <li class=""><a target="_self" href="snack_list?page=1" rel="jccClk">小吃管理</a></li>
                 
                 <li class=""><a target="_self" href="question_list?page=1" rel="mswdClk">问答管理</a></li>
               
    
             </ul>
         </div>
     </div>
 </div>