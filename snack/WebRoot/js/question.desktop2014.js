$(document).ready(function(){
	
	$('#answer').keydown(function (e) {
  		if (e.ctrlKey && e.keyCode == 13) {
   			$("#addAnswer").click();
  		}
	});
	
	$('#answerComment').keydown(function (e) {
  		if (e.ctrlKey && e.keyCode == 13) {
  			$("#addAnswerComment").click();
  		}
	});
	
	$('#title').keydown(function (e) {
  		if (e.ctrlKey && e.keyCode == 13) {
  			$("#addQuestion").click();
  		}
	});
	
	$('#questionQuery').keydown(function (e) {
  		if (e.keyCode == 13) {
  			searchQuestion();
  		}
	});
	
	
	
	$('#answer').jqEasyCounter({
    'maxChars': 1000,
    'maxCharsWarning': 800,
    'msgFontSize': '12px',
    'msgFontColor': '#000',
    'msgTextAlign': 'left',
    'msgWarningColor': '#F00',
    'msgAppendMethod': 'insertBefore'              
	});
	
	

	
	$("#addQuestion").click(function (){		
		ga('send', 'event', 'questionAnswer', 'AddQuestion');
		if($('#title').val().length<2){
			$('#error').html('标题长度至少2个字');
			$('#error').show();
			return false;
		}
			
		$.post(
			"/api/doAddQuestion.html",
			{anonymousName: $('#anonymousName').val(),title: $('#title').val(),content: $('#content').val()},
			function(data){
				if(data.search(/tooquick/i)!=-1) {
					$('#error').html('您的动作太快，请稍事休息');
					$('#error').show();
					return false;
				}else if(data.search(/pleaselogin/i)!=-1){
					openLogin(window.location.href,"","");
				}else if(data.search(/filter/i)!=-1){
					$('#error').html('不能包含敏感词汇');
					$('#error').show();
				}else if(data.search(/notempty/i)!=-1){
					data=data.replace("notempty","");
					$('#error').html('已经存在相同问题');
					$('#error').show();
					$('#linkTitle').html($('#title').val());
					$('#sameTitle').attr('href','/question/'+data+'');
					$('#sameTitle').attr('style','display:block');
				}else if(data.search(/pleasewait/i)!=-1){
					$('#error').html('您提交的问题等待管理员审批后通过');
					$('#error').show();
					$('#title').val("");
					$('#content').val("");
				}
				else{
					window.location="/question";
				}
			}
		)
		
		return false;
	});
	
	
	$("#addAnswer").click(function (){		
		ga('send', 'event', 'questionAnswer', 'AddAnswer');
		
		
//		var a = $("#sortable").children();
		var bl = false;
//		for(var i=1;i<5;i++){
//			if($('#step'+i+'_img').val().length>0){
//				bl=true;
//				break;
//			}
//	  	}
		
		if($('#answer').val().length<2){
			if(!bl){
				$('#error').html('内容至少2个字');
				$('#error').show();
				return false;
			}
		}
		
		$.post(
			"/api/doAddAnswer.html",
			{anonymousName: $('#anonymousName').val(),
			questionid: $('#questionid').val(),
			answer: $('#answer').val(),
			image1: $('#step1_img').val(),
			image2: $('#step2_img').val(),
			image3: $('#step3_img').val(),
			image4: $('#step4_img').val()
			},
			function(data){
				if(data.search(/tooquick/i)!=-1) {
					$('#error').html('您的动作太快了，请休息一下');
					$('#error').show();
				}else if(data.search(/captcha/i)!=-1) {
					openGuestForm();
					return false;
				}else if(data.search(/filter/i)!=-1){
					$('#error').html('不能包含敏感词汇');
					$('#error').show();
				}else if(data.search(/pleasewait/i)!=-1){
					$('#error').html('您的回答审批通过后显示');
					$('#error').show();
					$('#answer').val("");
					$("#sortable").hide();
				}else{
					window.location.href=window.location.pathname+"#lastAnswer"; 
					window.location.reload(true);
				}
			}
		)
		
		return false;
	});
	
	
	
	
	$("#samequestion").click(function (){		
		ga('send', 'event', 'questionAnswer', 'SameQuestion');

		$.post(
			"/api/doAddSameQuestion.html",
			{questionid: $('#questionid').val(),title:$('#questionTitle').val()},
			function(data){
				if(data.search(/pleaselogin/i)!=-1){
					openLogin(window.location.href,"","");
				}else if(data.search(/repeat/i)!=-1){
					jQuery.noticeAdd({text: '已关注',stay: false});
				}else{
					window.location.reload();
				}
			}
		)
		
		return false;
	});
	
	
	
	$('#answer').keydown(function(event){ 
		keydownGetIp();
	}); 
	
	$('#answerComment').keydown(function(event){ 
		keydownGetIp();
	}); 
	
	
	
	$("#questionQuery").autocomplete({
		source: "/doGetSuggestionForQuestion.html",
		select: function( event, ui ) {
			window.location=　"/question/"+ui.item.id;
		}
	});
	
});


window.searchQuestion = function() {
	ga('send', 'event', 'question', 'questionQuery',$('#questionQuery').val());

	window.location.href='/questionSubmit.html?q='+encodeURI($.trim($('#questionQuery').val()));
	return false;
};

window.keydownGetIp = function() {
	if($('#username').val()==''){
		if($('#anonymousName').val()==''){
			getIpAddr();
		}
	}
};

function zan(arg1){		
	ga('send', 'event', 'questionAnswer', 'ZanAnswer');
	$.post(
		"/api/doZanCaiAnswer.html",
		{questionid: $('#questionid').val(),answerid:arg1,eval: 0},
		function(data){
			if(data.search(/repeat/i)!=-1){
				var count = $('#zan_count_'+arg1).text();
				$('#zan_'+arg1).html("<span class='pa tc sign cur-pointer zaned'><div class='mt4 font16'>"+(parseInt(count))+"</div><span class='font10'>已赞</span></span>");
			}else{
				var count = $('#zan_count_'+arg1).text();
				$('#zan_'+arg1).html("<span class='pa tc sign cur-pointer zaned'><div class='mt4 font16'>"+(parseInt(count)+1)+"</div><span class='font10'>已赞</span></span>");
			}
		}
	)
	return false;
}



window.addCommentmoveForm = function(d, f, i){
		var m = this, a, 
		h = m.I(d),  //comment_id 
		b = m.I(i),  //respond
		l = m.I("cancel-comment-reply-link"); //取消回复
		$("#answerid").val(f);
		
		b.style.display = "";
		
//		if(!h || !b || !l || !j) {
//			alert(1);
//			return
//		}
		m.respondId = i;
		if(!m.I("wp-temp-form-div")) {   //隐藏输入框
			a = document.createElement("div");
			a.id = "wp-temp-form-div";
			a.style.display = "none";
			b.parentNode.insertBefore(a, b)
		}
		h.parentNode.insertBefore(b, h.nextSibling);
		l.style.display = "";
		l.onclick = function() {
			b.style.display = "none";
			var n = addComment, e = n.I("wp-temp-form-div"), o = n.I(n.respondId);
			if(!e || !o) {
				return
			}
			$("#answerid").val('');
			e.parentNode.insertBefore(o, e);
			e.parentNode.removeChild(e);
			this.style.display = "none";
			this.onclick = null;
			return false
		};
		try {
			m.I("answerComment").focus()
		} catch(g) {
		}
		
		return false
}

window.I = function(a) {
	return document.getElementById(a)
}


window.openCommentForm = function() {
		ga('send', 'event', 'GuestForm', 'doAddAnswerComment');

		$.post("/api/doAddAnswerComment.html", {
			questionid:  $("#questionid").val(),
			answerComment:$('#answerComment').val(),
			captcha : $("#captcha").val(),
			answerid: $("#answerid").val()
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

		$(this).keyup(function(e) {
			if(e.keyCode == 13) {
				$('.ui-dialog').find('button:first').trigger('click');
			}
		});
}


window.openGuestForm = function() {
	var dialog = $('#guestForm');
	//only load once
	if(dialog.html() == null) {
		dialog = $("<div id='guestForm'  title='回答'></div>").insertAfter('#ft');
	}

	ga('send', 'event', 'questionAnswer', 'OpenGuestForm');

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
					ga('send', 'event', 'GuestForm', 'doAddAnswer');
					
					$.post("/api/doAddAnswer.html", {
						questionid: $('#questionid').val(),
						answer: $('#answer').val(),
						captcha : $("#captcha").val(),
						image1: $('#step1_img').val(),
						image2: $('#step2_img').val(),
						image3: $('#step3_img').val(),
						image4: $('#step4_img').val()
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
}












window.addAnswerComment = function() {
		var comment = $("#answerComment").val();
		if (comment == "") {
			$("#message").html('评论不能为空');
			$("#message").show();
			return false;
		}
		
		if($('#answerComment').val().length<2){
			$("#message").html('内容至少2个字');
			$("#message").show();
			return false;
		}

		$.post("/api/doAddAnswerComment.html", {
			anonymousName : $("anonymousName").val(),
			answerComment : $("#answerComment").val(),
			answerid : $("#answerid").val(),
			questionid : $("#questionid").val()
		}, function(data) {
			
			if (data.search(/tooquick/i) != -1) {
				$("#message").html('您的动作太快了，请休息一下');
				$("#message").show();
				return false;
			} else if (data.search(/captcha/i) != -1) {
				openCommentForm($("#answerid").val(),$("#questionid").val());
				return false;
			} else if (data.search(/filter/i) != -1) {
				jQuery.noticeAdd({
					text : '您的回答审批通过后显示',
					stay : false
				});
				$('#answerComment').val("");
			} else {
				window.location.reload();
			}
		});
 
 }


