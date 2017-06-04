var swfu;

var swfUploadPreLoad = function() {
	this.customSettings.loadingTimeout = setTimeout(function() {
		if(uploadAction=="/doUpload.html"){
			failOver();
		}
		if(uploadAction=="/do/doUploadUser.html"){
			userImgfailOver();
		}
	}, 10 * 1000);
}
var swfUploadLoaded = function() {
	if(jsClicked) {
		jQuery('#uploader').remove();
		return;
	}

	clearTimeout(this.customSettings.loadingTimeout);

}
var swfUploadLoadFailed = function() {
	if(uploadAction=="/doUpload.html"){
		failOver();
	}
	if(uploadAction=="/do/doUploadUser.html"){
		userImgfailOver();
	}
}
var fileDialogComplete = function(numFilesSelected, numFilesQueued) {

    try {
        if (numFilesQueued > 0) {
        	//上传前压缩图片
            this.startResizedUpload(this.getFile(0).ID, 840, 4000, SWFUpload.RESIZE_ENCODING.JPEG, 100);
            this.startUpload();
        }
    } catch (ex) {
        this.debug(ex);
    }

}
var fileQueued = function(file) {
	$('#upload_step0_status').text("开始上传");	
}

var uploadStart = function(file) {

	
}
var uploadProgress = function(file, bytesLoaded,total) {
	var percent = Math.ceil((bytesLoaded / total) * 100);
	$('#upload_step0_status').text("已上传"+percent+"%");
}
var uploadSuccess = function(file, serverData) {
	
	var rs = jQuery.trim(serverData);
	$('#sortable').show();
	
	if(uploadAction=="/doUpload.html"){
		for(var n=1;n<13;n++){
			if(jQuery.trim($('#show_step'+n+'_img').attr("src"))==""
				||jQuery.trim($('#show_step'+n+'_img').attr("src"))=="/pictures/css/img/nostep.png"){
				$('#show_step'+n+'_img').attr('src',rs.replace("/pictures","http://ali.xinshipu.cn")+"@196w_126h_50q_1e_1c.jpg");
				$('#step'+n+'_img').val(rs);
				$('#imgli'+n).show();
				return false;
			}
		}
	}
	if(uploadAction=="/do/doUploadUser.html"){
		$('#show_step0_img').attr('src',rs.replace("/pictures","http://ali.xinshipu.cn")+"@111w_111h_50q_1e_1c.jpg");
		$('#step0_img').val(rs);
		return false;
	}
	
	
	
}


var uploadComplete = function(file) {
	
	try {
		if (this.getStats().files_queued > 0) {
			this.startUpload();
		} else {
			var progress = new FileProgress(file,  this.customSettings.upload_target);
			progress.setComplete();
			progress.setStatus("所有文件上传完毕!");
			progress.toggleCancel(false);
		}
	} catch (ex) {
		this.debug(ex);
	}
}







SWFUpload.onload = function() {
	var settings = {
		// Backend Settings
		flash_url : "../pictures/js/swfupload/swfupload.swf",
		flash9_url : "../pictures/js/swfupload/swfupload_fp9.swf",
		upload_url : uploadAction,
		post_params : {
			double_size : ''
		},
		custom_settings : {
			thumbnail_height : 120,
			thumbnail_width : 90,
			thumbnail_quality : 90
		},

		// File Upload Settings
		prevent_swf_caching : false,
		file_post_name : 'file',
		file_size_limit : "10 MB",//限制图片大小
		file_types : "*.jpg;*.jpeg;",
		file_types_description : "Web Image Files",
		file_upload_limit : 0,//允许上传数量，0为不限制
		file_queue_limit : 0,

		// Button Settings
		//button_image_url : "/pictures/css/img/btn_bg.png",
//		button_image_url : "/pictures/css/img/upload.png",
		//button_image_url : "http://xinshipu.cn/css/img/btn_bg.png",//server
		button_placeholder_id : "placeholder",
		button_width : 122,
		button_height : 40,
		button_text_top_padding : 10,
		button_text_left_padding : 30,
		button_text_style : '.Button{color:#ffffff;font-size:14px;font-family:tahoma,arial,yahei;}',
		
		button_text: '<span class="Button">上传图片</span>',
		

		button_window_mode : SWFUpload.WINDOW_MODE.TRANSPARENT,
		button_cursor : SWFUpload.CURSOR.HAND,

		swfupload_loaded_handler : swfUploadLoaded,
		file_queued_handler : fileQueued,//每个文件进入上传文件队列时触发
		file_dialog_complete_handler : fileDialogComplete,
		upload_start_handler : uploadStart,//每个文件开始上传时触发
		upload_progress_handler : uploadProgress,//每个文件的上传进度发生改变时触发
		upload_success_handler : uploadSuccess,//每个文件上传成功后触发
		upload_complete_handler : uploadComplete,
		
		// SWFObject settings
		swfupload_preload_handler : swfUploadPreLoad,
		swfupload_load_failed_handler : swfUploadLoadFailed,

		// Debug Settings
		debug : false
		
	};
	swfu = new SWFUpload(settings);
}


//上传头像
function initUserImgUpload(){	
	new AjaxUpload('#upload_user_img', 
		{
			action: '/do/doUploadUser.html',		
			onSubmit : function(file , ext)
			{
				if (! (ext && /^(jpg|jpeg|JPG|png)$/.test(ext)))
				{
						jQuery.noticeAdd({text: '只能上传.jpg .png .jpeg文件',stay: false});
						return false;
				}else
				{
					$('#upload_userimg_status').text('上传中......');
				}
			},
			onComplete : function(file,response)
			{
				
				if(response.search(/jpg/i)==-1) 
				{
					$('#upload_userimg_status').text('上传失败');
					return false; 
				}
				else
				{
					$('#upload_userimg_status').text('上传成功');
				}	
				$('#step0_img').val(jQuery.trim(response));
				$('#show_step0_img').attr('src','http://ali.xinshipu.cn'+jQuery.trim(response).replace("/pictures",""));
				
				$('#show_step0_img').show();
			}	
	});
}
	
	
function userImgfailOver(){
	var inp=document.getElementById("uploader");
	inp.parentNode.removeChild(inp);
	$('#upload_user_img').show();
    initUserImgUpload();
    $('#upload_status')[0].value="";
}




//上传食谱
function initStepUpload(n){	
	new AjaxUpload('#add_step'+n+'_img', {
		action: '/doUpload.html',			
		data: {
			step : n 
		},
		onSubmit : function(file , ext){
			if (! (ext && /^(jpg|jpeg|JPG|png)$/.test(ext))){
					jQuery.noticeAdd({text: '只能上传.jpg .png .jpeg文件',stay: false});
					return false;
			}else{
				$('#upload_step'+n+'_status').text('上传中......');
			}
		},
		onComplete : function(file,response){
			
			if(response.search(/jpg/i)==-1) {
				$('#upload_step'+n+'_status').text('上传失败');
				return false; 
			}
			var l =  jQuery.trim(response).indexOf(".jpg");
			for(var i=1;i<13;i++){
				if(jQuery.trim($('#show_step'+i+'_img').attr("src"))==""
					||jQuery.trim($('#show_step'+i+'_img').attr("src"))=="/pictures/css/img/nostep.png"){
					$('#show_step'+i+'_img').attr('src','http://ali.xinshipu.cn'+jQuery.trim(response).substr(0,l+4).replace("/pictures","")+"@196w_126h_50q_1e_1c.jpg");
					$('#step'+i+'_img').val(jQuery.trim(response).substr(0,l+4));
					$('#imgli'+i).show();
					$('#upload_step'+n+'_status').text('上传成功!');
					return false;
				}
			}
			
		}	
	});
	
}
	
	
function failOver(){
	var inp=document.getElementById("uploader");
	inp.parentNode.removeChild(inp);
	$('#add_step0_img').show();
	$('#sortable').show();
    initStepUpload(0);
}



//上传answer图片
function initAnswerUpload(n){	
	new AjaxUpload('#add_step'+n+'_img', {
		action: '/do/doUploadAnswer.html',			
		data: {
			step : n 
		},
		onSubmit : function(file , ext){
			if (! (ext && /^(jpg|jpeg|JPG|png)$/.test(ext))){
					jQuery.noticeAdd({text: '只能上传.jpg .png .jpeg文件',stay: false});
					return false;
			}else{
				$('#upload_step'+n+'_status').text('上传中......');
			}
		},
		onComplete : function(file,response){
			
			if(response.search(/jpg/i)==-1) {
				$('#upload_step'+n+'_status').text('上传失败');
				return false; 
			}
			var l =  jQuery.trim(response).indexOf(".jpg");
			for(var i=1;i<=5;i++){
				if(i==5){
					$('#upload_step'+n+'_status').text('上传失败!');
					jQuery.noticeAdd({text: '最多只能上传4张图片',stay: false});
					return false;
				}
				
				if(jQuery.trim($('#show_step'+i+'_img').attr("src"))==""
					||jQuery.trim($('#show_step'+i+'_img').attr("src"))=="/pictures/css/img/nostep.png"){
					$('#show_step'+i+'_img').attr('src','http://ali.xinshipu.cn'+jQuery.trim(response).substr(0,l+4).replace("/pictures",""));
					$('#step'+i+'_img').val(jQuery.trim(response).substr(0,l+4));
					$('#imgli'+i).show();
					$('#upload_step'+n+'_status').text('上传成功!');
					return false;
				}
			}
			
		}	
	});
	
}


function delImg(n){
	if(confirm('确定删除?')) {
		$('#show_step'+n+'_img').attr('src','/pictures/css/img/nostep.png');
		$('#step'+n+'_img').val('');
		$('#imgli'+n).hide();
	}
	return false;
}

