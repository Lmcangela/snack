$(document).ready(function(){
	
	window.doRating = function(value) { 
	
		$.post(
			"/doRating.html",
			{userid: $("#userid").val(),shipuid:$("#shipuid").val(),score:value},
			function(data){
					if(data.search(/tooquick/i)!=-1) {
						alert("您动作太快，请休息一下");
					}else{
						$("#zuofa_review_label").html("已加"+value+"分！");
					}
				}
		)
		return false;
	}
	
	//打分	
	$(".dorating").click(function (){
		ga('send', 'event', 'zuofa', 'RatingClicked');
		value = $(this).attr("rel");
		doRating(value);
	});

	
	//管理员删除不正确分类
	window.adminOpenTagging = function() { 
		$("#admintagging").dialog({
			height: 550,
			width: 650,
			modal: true,
			resizable: false,
			buttons: {
				"删除": function() {
						var tags="";
						var tagsDisplay=""; 
						$("#admin_set_lables ul span").each(function(i){
							tags=$(this).html()+","+tags;
							tagsDisplay =tagsDisplay+"&nbsp;&nbsp;&nbsp;"+ $(this).text();
						});
						tagsDisplay=tagsDisplay.replace("&nbsp;&nbsp;&nbsp;","");
						$("#admintagging").hide("slow");
						$.post("/admin/doRemoveCategories.html",
							{ userid: $("#userid").val(),username: $("#username").val(),authorid:$("#authorid").val(),shipuid: $("#shipuid").val(),shipuname: $("#shipuname").val(),categories:tags},
							function(data){
								window.location.reload();
							}
						);
						
						$( this ).dialog( "close" );
						$( this ).hide();
				},
				"取消": function() {
					$( this ).dialog( "close" );
				}
				
			}
		});
	} 
		
	
	
	//初始化标签
	window.openTagging = function() { 
		$("#tagging").dialog({
			height: 550,
			width: 650,
			modal: true,
			resizable: false,
			buttons: {
				"确定": function() {
						var tags="";
						var tagsDisplay=""; 
						$("#set_lables ul span").each(function(i){
							tags=$(this).html()+","+tags;
							tagsDisplay =tagsDisplay+"&nbsp;&nbsp;&nbsp;"+ $(this).text();
						});
						tagsDisplay=tagsDisplay.replace("&nbsp;&nbsp;&nbsp;","");
						$("#tagging").hide("slow");
						$.post("/doSaveCategories.html",
							{ userid: $("#userid").val(),username: $("#username").val(),authorid:$("#authorid").val(),shipuid: $("#shipuid").val(),shipuname: $("#shipuname").val(),categories:tags},
							function(data){
								if(data.search(/filter/i)!=-1){
									jQuery.noticeAdd({text: '分类中不能包含敏感词汇',stay: false});
								}else if(data.search(/length/i)!=-1){
									jQuery.noticeAdd({text: '分类名称长度不能大于10',stay: false});
								}
								else{
									ga('send', 'event', 'zuofa', 'AddCategory',$("#shipuname").val()+' '+tags);
									window.location.reload();
								}
							}
						);
						
						$( this ).dialog( "close" );
						$( this ).hide();
				},
				"取消": function() {
					$( this ).dialog( "close" );
				}
				
			}
		});
		
	} 
	
	 var mytags =[];
	 if($("#mycategoriesforthis").val()!=undefined){
	  	mytags = $("#mycategoriesforthis").val().split(",");
	 }
	 mytags.pop(); //删除最后一个元素，空白的。
	 $("#tags").tagEditor(
		{
			items: mytags,
			confirmRemoval: false,
			separator: ' ',
			completeOnSeparator: true,
			completeOnBlur: true
		},
		$("#set_lables span")
	);
	 
	 $("#admin_tags").tagEditor(
		{
			items: mytags,
			confirmRemoval: false,
			separator: ' ',
			completeOnSeparator: true,
			completeOnBlur: true
		},
		$("#admin_set_lables span")
	);
	 

	$("#update").click(function(){
		openTagging();	
	});
	
	//删除收藏
	window.removeShouCang = function() { 
		$.post(
			"/doRemoveBookmark.html",
			{shipuid: $("#shipuid").val()},
			function(data){
				window.location.reload();
			}
		)
		return false;
	}
	
	window.addShouCang = function() { 
		if(!isUserLogon()){
			openLogin(window.location.pathname,"shoucang","");
		}else{
			$.post(
				"/api/doShouCang.html",
				{ userid: $("#userid").val(),username: $("#username").val(),authorid:$("#authorid").val(),shipuid: $("#shipuid").val(),shipuname: $("#shipuname").val()},
				function(data){
					$('#shoucang').load("/inc/shoucang.html?shipuid="+$("#shipuid").val()+"&userid="+$("#userid").val());
					openTagging();
				}
			);
		}
		return false;
	}
	/*
	//添加菜单
	window.addMenu = function() {
		if(!isUserLogon()){
			openLogin(window.location.pathname,"menu","");
		}else{		
					if($("#menusign").val()=="yes"){
						openTaggingＭenu();
					}else{
						window.location.href="doMenuCreate.html?id="+$("#shipuid").val();
					}
					
					
		}
		return false;
	}
	*/
	
	//初始化标签
	window.openTaggingＭenu = function() { 
		$("#taggingmenu").dialog({
			height: 400,
			width: 400,
			modal: true,
			resizable: false,
			buttons: {
				
				"取消": function() {
					$( this ).dialog( "close" );
				}
				
			}
		});
	} 
	/*
	window.savemenu = function(id){
		
		$.post(
				"/api/doSaveMenuItem.html",
				{ menuid:id,shipuid: $("#shipuid").val()},
				function(data){
					window.location.reload();
				}
		);
		
	}	
	
	*/
	
	$("#prev").click(function (){
		ga('send', 'event', 'zuofa', 'NextImg');
		var current = parseInt($("#currentImg").text());
		var imgCount = parseInt($("#stepImageCount").val());
		
		if(current<2){
			current = imgCount;
		}else{
			current = current - 1; 
		}
		
		$("#currentImg").html(current);
		current = current-1;
		var imgsrc = $('#img_'+current).val();
		$("#finalimg").attr("src",imgsrc);
		return false;
	});
	
	
	$("#next").click(function (){
		nextImg();
		return false;
	});
	
	$("#finalimg").click(function (){
		nextImg();
		return false;
	});
	
	
	window.nextImg = function() { 
		ga('send', 'event', 'zuofa', 'NextImg');

		var current = parseInt($("#currentImg").text());
		var imgCount = parseInt($("#stepImageCount").val());
		
		if(current==imgCount){
			current=1;
		}else{
			current = current + 1; 
		}
		
		$("#currentImg").html(current);
		current=current-1;
		
		var imgsrc = $('#img_'+current).val();
		$("#finalimg").attr("src",imgsrc);
	} 
	
	
	window.getShipuImgHTML = function(shipu,first,clickType) {
		var imgShipu;
//		if(first=="first"){
//			imgShipu="<a class=\"re-recipe cb\" onclick=\"ga('send','event', 'zuofa', '"+clickType+"');\" href="+shipu.url+" title="+shipu.name+">" +
//			"<img src="+shipu.image+" alt="+shipu.name+" width=\"184\" height=\"118\"/>"+
//			"<div class=\"tc mt10\">"+shipu.name+"</div></a>&nbsp;";
//		}else{
//			imgShipu="<a class=\"re-recipe cb ml16\" onclick=\"ga('send','event', 'zuofa', '"+clickType+"');\" href="+shipu.url+" title="+shipu.name+">" +
//			"<img src="+shipu.image+" alt="+shipu.name+" width=\"184\" height=\"118\"/>"+
//			"<div class=\"tc mt10\">"+shipu.name+"</div></a>&nbsp;";
//		}
		
		imgShipu="<div class='leisi-menu'><div class='bpannel cb'><a onclick=\"ga('send','event', 'zuofa', '"+clickType+"');\" href="+shipu.url+" title="+shipu.name+">" +
		"<img src="+shipu.image+" alt="+shipu.name+" width=\"180\" height=\"118\"/>"+
		"<div class=\"tc mt10 no-overflow w190\">"+shipu.name+"</div></a></div></div>";
		 
		return imgShipu;
	}
	
	
	//paging
	window.appendShipu = function(listName,start,list,pushClicked) {
		$.each(list.list,function(idx,shipu){ 
			if(idx>=start&&idx<start+3){
				if(idx%3==0){ 
					$("#"+listName+"").append(getShipuImgHTML(shipu,"first",""+pushClicked+""));
				}else{
					$("#"+listName+"").append(getShipuImgHTML(shipu,"",""+pushClicked+""));
				}
			}else{
				return ;
			}
		});
	}
	
	
	window.fomatview = function(currentview,n,nextOrPrev,htmlList,shipus,pushClicked,pagetotle) {
		$("#"+htmlList+"").html("");
		if(nextOrPrev==0){//0向下翻页，1向上翻页
			n=n+1;
		}else{
			n=n-1;
		}
		var start = n*3-3;
		appendShipu(htmlList,start,shipus,pushClicked);
		$("#"+pagetotle+"").html(n);
		$("#"+currentview+"").val(n);
		return start;
	}
	
	
	//leisi
	$("#LeisiNext").click(function (){
		var i = parseInt($("#currentNo").val());
		var start=fomatview("currentNo",i,0,"leisiList",leisi,"LeiSiClicked","page");
		$("#LeisiPrev").show();
		$("#prevBut").hide();
		if(start+3>=leisiLength){
			$("#LeisiNext").hide();
			$("#nextBut").show();
		}
		ga('send', 'event', 'zuofa', 'nextLeisiClicked');

		return false;
	});
	
	
	$("#LeisiPrev").click(function (){
		var i = parseInt($("#currentNo").val());
		var start=fomatview("currentNo",i,1,"leisiList",leisi,"LeiSiClicked","page");
		if(start-3<0){
			$("#LeisiPrev").hide();
			$("#prevBut").show();
		}
		$("#LeisiNext").show();
		$("#nextBut").hide();
		ga('send', 'event', 'zuofa', 'prevLeisiClicked');

		return false;
	});
	
	
	
	//suggest
	$("#suggestNext").click(function (){
		var i = parseInt($("#suggestCurrentNo").val());
		var start=fomatview("suggestCurrentNo",i,0,"suggestList",suggest,"suggestClicked","suggestPage");
		$("#suggestPrev").show();
		$("#suggestPrevBut").hide();
		if(start+3>=suggestLength){
			$("#suggestNext").hide();
			$("#suggestNextBut").show();
		}
		ga('send', 'event', 'zuofa', 'nextSuggestClicked');
		return false;
	});
	
	
	$("#suggestPrev").click(function (){
		var i = parseInt($("#suggestCurrentNo").val());
		var start=fomatview("suggestCurrentNo",i,1,"suggestList",suggest,"suggestClicked","suggestPage");
		if(start-3<0){
			$("#suggestPrev").hide();
			$("#suggestPrevBut").show();
		}
		$("#suggestNext").show();
		$("#suggestNextBut").hide();
		ga('send', 'event', 'zuofa', 'prevSuggestClicked');
		return false;
	});
	
	
	
	
	//randomNew
	$("#randomNewNext").click(function (){
		var i = parseInt($("#randomNewCurrentNo").val());
		var start=fomatview("randomNewCurrentNo",i,0,"randomNewList",randomNew,"randomNewClicked","randomNewPage");
		$("#randomNewPrev").show();
		$("#randomNewPrevBut").hide();
		if(start+3>=randomNewLength){
			$("#randomNewNext").hide();
			$("#randomNewNextBut").show();
		}
		ga('send', 'event', 'zuofa', 'nextRandomNewClicked');
		return false;
	});
	
	
	$("#randomNewPrev").click(function (){
		var i = parseInt($("#randomNewCurrentNo").val());
		var start=fomatview("randomNewCurrentNo",i,1,"randomNewList",randomNew,"randomNewClicked","randomNewPage");
		if(start-3<0){
			$("#randomNewPrev").hide();
			$("#randomNewPrevBut").show();
		}
		$("#randomNewNext").show();
		$("#randomNewNextBut").hide();
		ga('send', 'event', 'zuofa', 'prevRandomNewClicked');

		return false;
	});
	
		
});

$(document).ready(function() {
	$('#comment').keydown(function(e) {
		if(e.ctrlKey && e.keyCode == 13) {
			$("#addcomment").click();
		}
	});

	$('#comment').jqEasyCounter({
		'maxChars' : 1000,
		'maxCharsWarning' : 1000,
		'msgFontSize' : '12px',
		'msgFontColor' : '#000',
		'msgFontFamily' : 'Arial',
		'msgTextAlign' : 'right',
		'msgWarningColor' : '#F00'
	});
	
	$('#comment').keydown(function(event){ 
		if($('#sessionusername').val()==''){
			if($('#anonymousName').val()==''){
				getIpAddr();
			}
		}
	}); 
	

	//提示登录
	//$('#comment').focus(function (){
	//	if(!isUserLogon()){
	//		openLogin(window.location.pathname,"addComment","");
	//	}
	//});

	$("#addcomment").click(function() {
		// if(!isUserLogon()) {
			// openLogin(document.location.href, "loginAfterAddComment", "");
		// } else {
			ga('send', 'event', 'zuofa', 'AddComment');
			if($('#comment').val().length < 2) {
				jQuery.noticeAdd({
					text : '评论长度至少2个字',
					stay : false
				});
				return false;
			}
	
			var filters = new Array("垃圾");
			for(var i = 0; i < filters.length; i++) {
				if($('#comment').val().indexOf(filters[i]) != -1) {
					jQuery.noticeAdd({
						text : '评论含有敏感词汇,请重新输入',
						stay : false
					});
					return false;
				}
			}
		
			$("#addcomment").hide();
			$.post("/doAddComment.html", {
				anonymousName: $('#anonymousName').val(),
				comment : $('#comment').val(),
				shipuid : $("#shipuid").val(),
				authorid : $("#authorid").val(),
				comment_parent : $('#comment_parent').val()
			}, function(data) {
				if(data.search(/filter/i)!=-1){
					jQuery.noticeAdd({text: '不能包含敏感词汇',stay: false});
				}else if(data.search(/tooquick/i) == -1) {
					//添加讨论
					window.location.reload();
				} else {
					openGuestForm();
					return false;
				}
			})

			$("#addcomment").show();
		// }

		return false;
	});

	$(".deletecomment").click(function() {

		if(confirm('确定删除?')) {
			var id = $(this).attr("rel");
			$.post("/doRemoveComment.html", {
				commentid : id
			}, function(data) {
				$('#comment_' + id).remove();
				$('.fatherid_' + id).remove();
				//window.location.reload();
			})
		}
		return false;
	});
	
	
	$(".deletecommentbytime").click(function() {

		if(confirm('确定删除?')) {
			var id = $(this).attr("rel");
			$.post("/doRemoveCommentForTime.html", {
				commentid : id
			}, function(data) {
				//$('#comment_' + id).remove();
				//$('.fatherid_' + id).remove();
				window.location.reload();
			})
		}
		return false;
	});
	
	
	$(".deletecommentbyTopTen").click(function() {

		if(confirm('确定删除?')) {
			var id = $(this).attr("rel");
			$.post("/doRemoveCommentForTopTen.html", {
				commentid : id
			}, function(data) {
				//$('#comment_' + id).remove();
				//$('.fatherid_' + id).remove();
				window.location.reload();
			})
		}
		return false;
	});
	

	window.openGuestForm = function() {
		var dialog = $('#guestForm');
		//only load once
		if(dialog.html() == null) {
			dialog = $("<div id='guestForm'  title='留言'></div>").insertAfter('#ft');
		}

		ga('send', 'event', 'zuofa', 'OpenGuestForm');
		$(dialog).load("/inc/guestForm.html", function() {
			$('#captcha').keyup(function(e) {
				$("#guestMessage").html("&nbsp;");
			});
			$('#guestInfo').submit(function() {
				return false;
			});

			$("#guestForm").dialog({
				height : 330,
				width : 330,
				modal : true,
				resizable : false,
				buttons : {
					"提交留言" : function() {
						ga('send', 'event', 'GuestForm', 'AddComment');
						$.post("/doAddComment.html", {
							anonymousName: $('#anonymousName').val(),
							comment : $('#comment').val(),
							authorid : $("#authorid").val(),
							shipuid : $("#shipuid").val(),
							captcha : $("#captcha").val(),
							comment_parent : $('#comment_parent').val()
						}, function(data) {
							if(data.search(/filter/i)!=-1){
								jQuery.noticeAdd({text: '不能包含敏感词汇',stay: false});
							}else if(data.search(/wrongcaptcha/i) == -1) {
								window.location.reload();
							} else {
								$('#guestMessage').html("验证码错误，请重新输入");
								return false;
							}
						});
						return false;

					},
					"取消" : function() {
						$(this).dialog("close");
					}
				}//buttons
			});
			//dialog

			$(this).keyup(function(e) {
				if(e.keyCode == 13) {
					$('.ui-dialog').find('button:first').trigger('click');
				}
			});
		});
		//loading

	}//openlogin
	
	
	$(".loadCommentList").click(function() {

		var page =parseInt($("#currentPages").val())+1;
		
		$.ajax({
			url : '/api/doGetComment.html', 
			cache : false, 
			data : {page:page,pagesize:10,shipuid:$("#shipuid").val(),authorid:$("#authorid").val()},
			type : 'post',
			dataType : 'json',
			success : function(data)
			{
				$("#currentPages").val(page);
				if(page+1>=$("#totalPages").val()){
					$("#loadComment").hide();
				}
				$.each(data.list, function(i, comment){
					if(comment.id==$("#commentId").val()){
						return false;
					}
					if($("#authorid").val()==$("#sessionuserId").val()||$("#sessionuserType").val()==999){
						if(comment.fatherId==0){
							$("#commentList").append("<div id='comment_"+comment.id+"' class='l-div last'><hr/><div class='span-15 wrap'>"+comment.userHTML+":"+comment.contentHTML+"<br/></div><div class='right'><span class='small gray'>"+comment.timeGap+"</span>&nbsp;<a target='_self' class='small' href='javascript:void(0);' onclick=\"return addComment.moveForm('comment_"+comment.id+"', "+comment.id+", 'respond', "+comment.id+")\">回复</a>&nbsp;<a class='deletecomment small' href='javascript:void(0);' onclick=\"return deleteComment("+comment.id+")\" rel='"+comment.id+"'>删除</a></div></div>");
						}else{
							$("#commentList").append("<div id='comment_"+comment.id+"' class='l-div last'><div class='span-2 center'>&nbsp;</div><div class='span-13 wrap'><hr/>"+comment.userHTML+":"+comment.contentHTML+"<br/></div><div class='right'><span class='small gray'>"+comment.timeGap+"</span>&nbsp;<a target='_self' class='small' href='javascript:void(0);' onclick=\"return addComment.moveForm('comment_"+comment.id+"', "+comment.id+", 'respond', "+comment.id+")\">回复</a>&nbsp;<a class='deletecomment small' href='javascript:void(0);' onclick=\"return deleteComment("+comment.id+")\" rel='"+comment.id+"'>删除</a></div></div></div>");
						}
					}else{
						if(comment.fatherId==0){
							$("#commentList").append("<div id='comment_"+comment.id+"' class='l-div last'><hr/><div class='span-15 wrap'>"+comment.userHTML+":"+comment.contentHTML+"<br/></div><div class='right'><span class='small gray'>"+comment.timeGap+"</span>&nbsp;<a target='_self' class='small' href='javascript:void(0);' onclick=\"return addComment.moveForm('comment_"+comment.id+"', "+comment.id+", 'respond', "+comment.id+")\">回复</a></div></div>");
						}else{
							$("#commentList").append("<div id='comment_"+comment.id+"' class='l-div last'><div class='span-2 center'>&nbsp;</div><div class='span-13 wrap'><hr/>"+comment.userHTML+":"+comment.contentHTML+"<br/></div><div class='right'><span class='small gray'>"+comment.timeGap+"</span>&nbsp;<a target='_self' class='small' href='javascript:void(0);' onclick=\"return addComment.moveForm('comment_"+comment.id+"', "+comment.id+", 'respond', "+comment.id+")\">回复</a></div></div></div>");
						}
					}
				})
			}
		})
			
	});
	
	
	var totalPages = parseInt($("#totalPages").val());
	var currentPages = parseInt($("#currentPages").val())+1;
	
	if(totalPages>currentPages){
		$("#loadComment").show();
	}
	
	
	
	
	
});


window.deleteComment = function(id){

	if(confirm('确定删除?')) {
		$.post("/doRemoveComment.html", {
			commentid : id
		}, function(data) {
			$('#comment_' + id).remove();
			//$('.fatherid_' + id).remove();
			//window.location.reload();
		})
	}
	return false;
};


addComment = {
		moveForm : function(d, f, i, c) {
			var m = this, a, 
			h = m.I(d),  //comment_id 
			b = m.I(i),  //respond
			l = m.I("cancel-comment-reply-link"), //取消回复
			j = m.I("comment_parent"),
			userimage = m.I("userimageComment");
			
			if(!h || !b || !l || !j) {
				return
			}
			m.respondId = i;
			if(!m.I("wp-temp-form-div")) {   //隐藏输入框
				a = document.createElement("div");
				a.id = "wp-temp-form-div";
				a.style.display = "none";
				b.parentNode.insertBefore(a, b)
				userimage.style.display="none";
			}
			h.parentNode.insertBefore(b, h.nextSibling);
			j.value = f;
			l.style.display = "";
			l.onclick = function() {
				userimage.style.display="";
				var n = addComment, e = n.I("wp-temp-form-div"), o = n.I(n.respondId);
				if(!e || !o) {
					return
				}
				n.I("comment_parent").value = "";
				e.parentNode.insertBefore(o, e);
				e.parentNode.removeChild(e);
				this.style.display = "none";
				this.onclick = null;
				return false
			};
			try {
				m.I("comment").focus()
			} catch(g) {
			}
			
			return false
		},
		I : function(a) {
			return document.getElementById(a)
		}
	};
