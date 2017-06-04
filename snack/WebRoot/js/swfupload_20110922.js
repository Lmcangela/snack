var SWFUpload;
var swfobject;
if(SWFUpload == undefined) {
	SWFUpload = function(a) {
		this.initSWFUpload(a);
	};
}
SWFUpload.prototype.initSWFUpload = function(b) {
	try {
		this.customSettings = {};
		this.settings = {};
		this.eventQueue = [];
		this.movieName = "SWFUpload_" + SWFUpload.movieCount++;
		this.movieElement = null;
		SWFUpload.instances[this.movieName] = this;
		this.initSettings(b);
		this.loadSupport();
		if(this.swfuploadPreload()) {
			this.loadFlash();
		}
		this.displayDebugInfo();
	} catch(a) {
		delete SWFUpload.instances[this.movieName];
		throw a;
	}
};
SWFUpload.instances = {};
SWFUpload.movieCount = 0;
SWFUpload.version = "2.5.0 2010-01-15 Beta 2";
SWFUpload.QUEUE_ERROR = {
	QUEUE_LIMIT_EXCEEDED : -100,
	FILE_EXCEEDS_SIZE_LIMIT : -110,
	ZERO_BYTE_FILE : -120,
	INVALID_FILETYPE : -130
};
SWFUpload.UPLOAD_ERROR = {
	HTTP_ERROR : -200,
	MISSING_UPLOAD_URL : -210,
	IO_ERROR : -220,
	SECURITY_ERROR : -230,
	UPLOAD_LIMIT_EXCEEDED : -240,
	UPLOAD_FAILED : -250,
	SPECIFIED_FILE_ID_NOT_FOUND : -260,
	FILE_VALIDATION_FAILED : -270,
	FILE_CANCELLED : -280,
	UPLOAD_STOPPED : -290,
	RESIZE : -300
};
SWFUpload.FILE_STATUS = {
	QUEUED : -1,
	IN_PROGRESS : -2,
	ERROR : -3,
	COMPLETE : -4,
	CANCELLED : -5
};
SWFUpload.UPLOAD_TYPE = {
	NORMAL : -1,
	RESIZED : -2
};
SWFUpload.BUTTON_ACTION = {
	SELECT_FILE : -100,
	SELECT_FILES : -110,
	START_UPLOAD : -120,
	JAVASCRIPT : -130,
	NONE : -130
};
SWFUpload.CURSOR = {
	ARROW : -1,
	HAND : -2
};
SWFUpload.WINDOW_MODE = {
	WINDOW : "window",
	TRANSPARENT : "transparent",
	OPAQUE : "opaque"
};
SWFUpload.RESIZE_ENCODING = {
	JPEG : -1,
	PNG : -2
};
SWFUpload.completeURL = function(a) {
	try {
		var d = "", c = -1;
		if( typeof (a) !== "string" || a.match(/^https?:\/\//i) || a.match(/^\//) || a === "") {
			return a;
		}
		c = window.location.pathname.lastIndexOf("/");
		if(c <= 0) {
			d = "/";
		} else {
			d = window.location.pathname.substr(0, c) + "/";
		}
		return d + a;
	} catch(b) {
		return a;
	}
};
SWFUpload.onload = function() {
};
SWFUpload.prototype.initSettings = function(a) {
	this.ensureDefault = function(c, b) {
		var d = a[c];
		if(d != undefined) {
			this.settings[c] = d;
		} else {
			this.settings[c] = b;
		}
	};
	this.ensureDefault("upload_url", "");
	this.ensureDefault("preserve_relative_urls", false);
	this.ensureDefault("file_post_name", "Filedata");
	this.ensureDefault("post_params", {});
	this.ensureDefault("use_query_string", false);
	this.ensureDefault("requeue_on_error", false);
	this.ensureDefault("http_success", []);
	this.ensureDefault("assume_success_timeout", 0);
	this.ensureDefault("file_types", "*.*");
	this.ensureDefault("file_types_description", "All Files");
	this.ensureDefault("file_size_limit", 0);
	this.ensureDefault("file_upload_limit", 0);
	this.ensureDefault("file_queue_limit", 0);
	this.ensureDefault("flash_url", "swfupload.swf");
	this.ensureDefault("flash9_url", "swfupload_fp9.swf");
	this.ensureDefault("prevent_swf_caching", true);
	this.ensureDefault("button_image_url", "");
	this.ensureDefault("button_width", 1);
	this.ensureDefault("button_height", 1);
	this.ensureDefault("button_text", "");
	this.ensureDefault("button_text_style", "color: #000000; font-size: 16pt;");
	this.ensureDefault("button_text_top_padding", 0);
	this.ensureDefault("button_text_left_padding", 0);
	this.ensureDefault("button_action", SWFUpload.BUTTON_ACTION.SELECT_FILES);
	this.ensureDefault("button_disabled", false);
	this.ensureDefault("button_placeholder_id", "");
	this.ensureDefault("button_placeholder", null);
	this.ensureDefault("button_cursor", SWFUpload.CURSOR.ARROW);
	this.ensureDefault("button_window_mode", SWFUpload.WINDOW_MODE.WINDOW);
	this.ensureDefault("debug", false);
	this.settings.debug_enabled = this.settings.debug;
	this.settings.return_upload_start_handler = this.returnUploadStart;
	this.ensureDefault("swfupload_preload_handler", null);
	this.ensureDefault("swfupload_load_failed_handler", null);
	this.ensureDefault("swfupload_loaded_handler", null);
	this.ensureDefault("file_dialog_start_handler", null);
	this.ensureDefault("file_queued_handler", null);
	this.ensureDefault("file_queue_error_handler", null);
	this.ensureDefault("file_dialog_complete_handler", null);
	this.ensureDefault("upload_resize_start_handler", null);
	this.ensureDefault("upload_start_handler", null);
	this.ensureDefault("upload_progress_handler", null);
	this.ensureDefault("upload_error_handler", null);
	this.ensureDefault("upload_success_handler", null);
	this.ensureDefault("upload_complete_handler", null);
	this.ensureDefault("mouse_click_handler", null);
	this.ensureDefault("mouse_out_handler", null);
	this.ensureDefault("mouse_over_handler", null);
	this.ensureDefault("debug_handler", this.debugMessage);
	this.ensureDefault("custom_settings", {});
	this.customSettings = this.settings.custom_settings;
	if(!!this.settings.prevent_swf_caching) {
		this.settings.flash_url = this.settings.flash_url + (this.settings.flash_url.indexOf("?") < 0 ? "?" : "&") + "preventswfcaching=" + new Date().getTime();
		this.settings.flash9_url = this.settings.flash9_url + (this.settings.flash9_url.indexOf("?") < 0 ? "?" : "&") + "preventswfcaching=" + new Date().getTime();
	}
	if(!this.settings.preserve_relative_urls) {
		this.settings.upload_url = SWFUpload.completeURL(this.settings.upload_url);
		this.settings.button_image_url = SWFUpload.completeURL(this.settings.button_image_url);
	}
	delete this.ensureDefault;
};
SWFUpload.prototype.loadSupport = function() {
	this.support = {
		loading : swfobject.hasFlashPlayerVersion("9.0.28"),
		imageResize : swfobject.hasFlashPlayerVersion("10.0.0")
	};
};
SWFUpload.prototype.loadFlash = function() {
	var b, f, e, a, d;
	if(!this.support.loading) {
		this.queueEvent("swfupload_load_failed_handler", ["Flash Player doesn't support SWFUpload"]);
		return;
	}
	if(document.getElementById(this.movieName) !== null) {
		this.support.loading = false;
		this.queueEvent("swfupload_load_failed_handler", ["Element ID already in use"]);
		return;
	}
	b = document.getElementById(this.settings.button_placeholder_id) || this.settings.button_placeholder;
	if(b == undefined) {
		this.support.loading = false;
		this.queueEvent("swfupload_load_failed_handler", ["button place holder not found"]);
		return;
	}
	e = (b.currentStyle && b.currentStyle.display || window.getComputedStyle && document.defaultView.getComputedStyle(b, null).getPropertyValue("display")) !== "block" ? "span" : "div";
	f = document.createElement(e);
	a = this.getFlashHTML();
	try {
		f.innerHTML = a;
	} catch(c) {
		this.support.loading = false;
		this.queueEvent("swfupload_load_failed_handler", ["Exception loading Flash HTML into placeholder"]);
		return;
	}
	d = f.getElementsByTagName("object");
	if(!d || d.length > 1 || d.length === 0) {
		this.support.loading = false;
		this.queueEvent("swfupload_load_failed_handler", ["Unable to find movie after adding to DOM"]);
		return;
	} else {
		if(d.length === 1) {
			this.movieElement = d[0];
		}
	}
	b.parentNode.replaceChild(f.firstChild, b);
	if(window[this.movieName] == undefined) {
		window[this.movieName] = this.getMovieElement();
	}
};
SWFUpload.prototype.getFlashHTML = function(a) {
	return ['<object id="', this.movieName, '" type="application/x-shockwave-flash" data="', (this.support.imageResize ? this.settings.flash_url : this.settings.flash9_url), '" width="', this.settings.button_width, '" height="', this.settings.button_height, '" class="swfupload">', '<param name="wmode" value="', this.settings.button_window_mode, '" />', '<param name="movie" value="', (this.support.imageResize ? this.settings.flash_url : this.settings.flash9_url), '" />', '<param name="quality" value="high" />', '<param name="allowScriptAccess" value="always" />', '<param name="flashvars" value="' + this.getFlashVars() + '" />', "</object>"].join("");
};
SWFUpload.prototype.getFlashVars = function() {
	var a, b;
	b = this.buildParamString();
	a = this.settings.http_success.join(",");
	return ["movieName=", encodeURIComponent(this.movieName), "&amp;uploadURL=", encodeURIComponent(this.settings.upload_url), "&amp;useQueryString=", encodeURIComponent(this.settings.use_query_string), "&amp;requeueOnError=", encodeURIComponent(this.settings.requeue_on_error), "&amp;httpSuccess=", encodeURIComponent(a), "&amp;assumeSuccessTimeout=", encodeURIComponent(this.settings.assume_success_timeout), "&amp;params=", encodeURIComponent(b), "&amp;filePostName=", encodeURIComponent(this.settings.file_post_name), "&amp;fileTypes=", encodeURIComponent(this.settings.file_types), "&amp;fileTypesDescription=", encodeURIComponent(this.settings.file_types_description), "&amp;fileSizeLimit=", encodeURIComponent(this.settings.file_size_limit), "&amp;fileUploadLimit=", encodeURIComponent(this.settings.file_upload_limit), "&amp;fileQueueLimit=", encodeURIComponent(this.settings.file_queue_limit), "&amp;debugEnabled=", encodeURIComponent(this.settings.debug_enabled), "&amp;buttonImageURL=", encodeURIComponent(this.settings.button_image_url), "&amp;buttonWidth=", encodeURIComponent(this.settings.button_width), "&amp;buttonHeight=", encodeURIComponent(this.settings.button_height), "&amp;buttonText=", encodeURIComponent(this.settings.button_text), "&amp;buttonTextTopPadding=", encodeURIComponent(this.settings.button_text_top_padding), "&amp;buttonTextLeftPadding=", encodeURIComponent(this.settings.button_text_left_padding), "&amp;buttonTextStyle=", encodeURIComponent(this.settings.button_text_style), "&amp;buttonAction=", encodeURIComponent(this.settings.button_action), "&amp;buttonDisabled=", encodeURIComponent(this.settings.button_disabled), "&amp;buttonCursor=", encodeURIComponent(this.settings.button_cursor)].join("");
};
SWFUpload.prototype.getMovieElement = function() {
	if(this.movieElement == undefined) {
		this.movieElement = document.getElementById(this.movieName);
	}
	if(this.movieElement === null) {
		throw "Could not find Flash element";
	}
	return this.movieElement;
};
SWFUpload.prototype.buildParamString = function() {
	var a, c, b = [];
	c = this.settings.post_params;
	if( typeof (c) === "object") {
		for(a in c) {
			if(c.hasOwnProperty(a)) {
				b.push(encodeURIComponent(a.toString()) + "=" + encodeURIComponent(c[a].toString()));
			}
		}
	}
	return b.join("&amp;");
};
SWFUpload.prototype.destroy = function() {
	var a;
	try {
		this.cancelUpload(null, false);
		a = this.cleanUp();
		if(a) {
			try {
				a.parentNode.removeChild(a);
			} catch(b) {
			}
		}
		window[this.movieName] = null;
		SWFUpload.instances[this.movieName] = null;
		delete SWFUpload.instances[this.movieName];
		this.movieElement = null;
		this.settings = null;
		this.customSettings = null;
		this.eventQueue = null;
		this.movieName = null;
		return true;
	} catch(c) {
		return false;
	}
};
SWFUpload.prototype.displayDebugInfo = function() {
	this.debug(["---SWFUpload Instance Info---\n", "Version: ", SWFUpload.version, "\n", "Movie Name: ", this.movieName, "\n", "Settings:\n", "\t", "upload_url:               ", this.settings.upload_url, "\n", "\t", "flash_url:                ", this.settings.flash_url, "\n", "\t", "flash9_url:                ", this.settings.flash9_url, "\n", "\t", "use_query_string:         ", this.settings.use_query_string.toString(), "\n", "\t", "requeue_on_error:         ", this.settings.requeue_on_error.toString(), "\n", "\t", "http_success:             ", this.settings.http_success.join(", "), "\n", "\t", "assume_success_timeout:   ", this.settings.assume_success_timeout, "\n", "\t", "file_post_name:           ", this.settings.file_post_name, "\n", "\t", "post_params:              ", this.settings.post_params.toString(), "\n", "\t", "file_types:               ", this.settings.file_types, "\n", "\t", "file_types_description:   ", this.settings.file_types_description, "\n", "\t", "file_size_limit:          ", this.settings.file_size_limit, "\n", "\t", "file_upload_limit:        ", this.settings.file_upload_limit, "\n", "\t", "file_queue_limit:         ", this.settings.file_queue_limit, "\n", "\t", "debug:                    ", this.settings.debug.toString(), "\n", "\t", "prevent_swf_caching:      ", this.settings.prevent_swf_caching.toString(), "\n", "\t", "button_placeholder_id:    ", this.settings.button_placeholder_id.toString(), "\n", "\t", "button_placeholder:       ", (this.settings.button_placeholder ? "Set" : "Not Set"), "\n", "\t", "button_image_url:         ", this.settings.button_image_url.toString(), "\n", "\t", "button_width:             ", this.settings.button_width.toString(), "\n", "\t", "button_height:            ", this.settings.button_height.toString(), "\n", "\t", "button_text:              ", this.settings.button_text.toString(), "\n", "\t", "button_text_style:        ", this.settings.button_text_style.toString(), "\n", "\t", "button_text_top_padding:  ", this.settings.button_text_top_padding.toString(), "\n", "\t", "button_text_left_padding: ", this.settings.button_text_left_padding.toString(), "\n", "\t", "button_action:            ", this.settings.button_action.toString(), "\n", "\t", "button_cursor:            ", this.settings.button_cursor.toString(), "\n", "\t", "button_disabled:          ", this.settings.button_disabled.toString(), "\n", "\t", "custom_settings:          ", this.settings.custom_settings.toString(), "\n", "Event Handlers:\n", "\t", "swfupload_preload_handler assigned:  ", ( typeof this.settings.swfupload_preload_handler === "function").toString(), "\n", "\t", "swfupload_load_failed_handler assigned:  ", ( typeof this.settings.swfupload_load_failed_handler === "function").toString(), "\n", "\t", "swfupload_loaded_handler assigned:  ", ( typeof this.settings.swfupload_loaded_handler === "function").toString(), "\n", "\t", "mouse_click_handler assigned:       ", ( typeof this.settings.mouse_click_handler === "function").toString(), "\n", "\t", "mouse_over_handler assigned:        ", ( typeof this.settings.mouse_over_handler === "function").toString(), "\n", "\t", "mouse_out_handler assigned:         ", ( typeof this.settings.mouse_out_handler === "function").toString(), "\n", "\t", "file_dialog_start_handler assigned: ", ( typeof this.settings.file_dialog_start_handler === "function").toString(), "\n", "\t", "file_queued_handler assigned:       ", ( typeof this.settings.file_queued_handler === "function").toString(), "\n", "\t", "file_queue_error_handler assigned:  ", ( typeof this.settings.file_queue_error_handler === "function").toString(), "\n", "\t", "upload_resize_start_handler assigned:      ", ( typeof this.settings.upload_resize_start_handler === "function").toString(), "\n", "\t", "upload_start_handler assigned:      ", ( typeof this.settings.upload_start_handler === "function").toString(), "\n", "\t", "upload_progress_handler assigned:   ", ( typeof this.settings.upload_progress_handler === "function").toString(), "\n", "\t", "upload_error_handler assigned:      ", ( typeof this.settings.upload_error_handler === "function").toString(), "\n", "\t", "upload_success_handler assigned:    ", ( typeof this.settings.upload_success_handler === "function").toString(), "\n", "\t", "upload_complete_handler assigned:   ", ( typeof this.settings.upload_complete_handler === "function").toString(), "\n", "\t", "debug_handler assigned:             ", ( typeof this.settings.debug_handler === "function").toString(), "\n", "Support:\n", "\t", "Load:                     ", (this.support.loading ? "Yes" : "No"), "\n", "\t", "Image Resize:             ", (this.support.imageResize ? "Yes" : "No"), "\n"].join(""));
};
SWFUpload.prototype.addSetting = function(b, c, a) {
	if(c == undefined) {
		return (this.settings[b] = a);
	} else {
		return (this.settings[b] = c);
	}
};
SWFUpload.prototype.getSetting = function(a) {
	if(this.settings[a] != undefined) {
		return this.settings[a];
	}
	return "";
};
SWFUpload.prototype.callFlash = function(functionName, argumentArray) {
	var movieElement, returnValue, returnString;
	argumentArray = argumentArray || [];
	movieElement = this.getMovieElement();
	try {
		if(movieElement != undefined) {
			returnString = movieElement.CallFunction('<invoke name="' + functionName + '" returntype="javascript">' + __flash__argumentsToXML(argumentArray, 0) + "</invoke>");
			returnValue = eval(returnString);
		} else {
			this.debug("Can't call flash because the movie wasn't found.");
		}
	} catch(ex) {
		this.debug("Exception calling flash function '" + functionName + "': " + ex.message);
	}
	if(returnValue != undefined && typeof returnValue.post === "object") {
		returnValue = this.unescapeFilePostParams(returnValue);
	}
	return returnValue;
};
SWFUpload.prototype.selectFile = function() {
	this.callFlash("SelectFile");
};
SWFUpload.prototype.selectFiles = function() {
	this.callFlash("SelectFiles");
};
SWFUpload.prototype.startUpload = function(a) {
	this.callFlash("StartUpload", [a]);
};
SWFUpload.prototype.startResizedUpload = function(b, d, a, e, f, c) {
	this.callFlash("StartUpload", [b, {
		width : d,
		height : a,
		encoding : e,
		quality : f,
		allowEnlarging : c
	}]);
};
SWFUpload.prototype.cancelUpload = function(a, b) {
	if(b !== false) {
		b = true;
	}
	this.callFlash("CancelUpload", [a, b]);
};
SWFUpload.prototype.stopUpload = function() {
	this.callFlash("StopUpload");
};
SWFUpload.prototype.requeueUpload = function(a) {
	return this.callFlash("RequeueUpload", [a]);
};
SWFUpload.prototype.getStats = function() {
	return this.callFlash("GetStats");
};
SWFUpload.prototype.setStats = function(a) {
	this.callFlash("SetStats", [a]);
};
SWFUpload.prototype.getFile = function(a) {
	if( typeof (a) === "number") {
		return this.callFlash("GetFileByIndex", [a]);
	} else {
		return this.callFlash("GetFile", [a]);
	}
};
SWFUpload.prototype.getQueueFile = function(a) {
	if( typeof (a) === "number") {
		return this.callFlash("GetFileByQueueIndex", [a]);
	} else {
		return this.callFlash("GetFile", [a]);
	}
};
SWFUpload.prototype.addFileParam = function(a, b, c) {
	return this.callFlash("AddFileParam", [a, b, c]);
};
SWFUpload.prototype.removeFileParam = function(a, b) {
	this.callFlash("RemoveFileParam", [a, b]);
};
SWFUpload.prototype.setUploadURL = function(a) {
	this.settings.upload_url = a.toString();
	this.callFlash("SetUploadURL", [a]);
};
SWFUpload.prototype.setPostParams = function(a) {
	this.settings.post_params = a;
	this.callFlash("SetPostParams", [a]);
};
SWFUpload.prototype.addPostParam = function(a, b) {
	this.settings.post_params[a] = b;
	this.callFlash("SetPostParams", [this.settings.post_params]);
};
SWFUpload.prototype.removePostParam = function(a) {
	delete this.settings.post_params[a];
	this.callFlash("SetPostParams", [this.settings.post_params]);
};
SWFUpload.prototype.setFileTypes = function(a, b) {
	this.settings.file_types = a;
	this.settings.file_types_description = b;
	this.callFlash("SetFileTypes", [a, b]);
};
SWFUpload.prototype.setFileSizeLimit = function(a) {
	this.settings.file_size_limit = a;
	this.callFlash("SetFileSizeLimit", [a]);
};
SWFUpload.prototype.setFileUploadLimit = function(a) {
	this.settings.file_upload_limit = a;
	this.callFlash("SetFileUploadLimit", [a]);
};
SWFUpload.prototype.setFileQueueLimit = function(a) {
	this.settings.file_queue_limit = a;
	this.callFlash("SetFileQueueLimit", [a]);
};
SWFUpload.prototype.setFilePostName = function(a) {
	this.settings.file_post_name = a;
	this.callFlash("SetFilePostName", [a]);
};
SWFUpload.prototype.setUseQueryString = function(a) {
	this.settings.use_query_string = a;
	this.callFlash("SetUseQueryString", [a]);
};
SWFUpload.prototype.setRequeueOnError = function(a) {
	this.settings.requeue_on_error = a;
	this.callFlash("SetRequeueOnError", [a]);
};
SWFUpload.prototype.setHTTPSuccess = function(a) {
	if( typeof a === "string") {
		a = a.replace(" ", "").split(",");
	}
	this.settings.http_success = a;
	this.callFlash("SetHTTPSuccess", [a]);
};
SWFUpload.prototype.setAssumeSuccessTimeout = function(a) {
	this.settings.assume_success_timeout = a;
	this.callFlash("SetAssumeSuccessTimeout", [a]);
};
SWFUpload.prototype.setDebugEnabled = function(a) {
	this.settings.debug_enabled = a;
	this.callFlash("SetDebugEnabled", [a]);
};
SWFUpload.prototype.setButtonImageURL = function(a) {
	if(a == undefined) {
		a = "";
	}
	this.settings.button_image_url = a;
	this.callFlash("SetButtonImageURL", [a]);
};
SWFUpload.prototype.setButtonDimensions = function(c, a) {
	this.settings.button_width = c;
	this.settings.button_height = a;
	var b = this.getMovieElement();
	if(b != undefined) {
		b.style.width = c + "px";
		b.style.height = a + "px";
	}
	this.callFlash("SetButtonDimensions", [c, a]);
};
SWFUpload.prototype.setButtonText = function(a) {
	this.settings.button_text = a;
	this.callFlash("SetButtonText", [a]);
};
SWFUpload.prototype.setButtonTextPadding = function(b, a) {
	this.settings.button_text_top_padding = a;
	this.settings.button_text_left_padding = b;
	this.callFlash("SetButtonTextPadding", [b, a]);
};
SWFUpload.prototype.setButtonTextStyle = function(a) {
	this.settings.button_text_style = a;
	this.callFlash("SetButtonTextStyle", [a]);
};
SWFUpload.prototype.setButtonDisabled = function(a) {
	this.settings.button_disabled = a;
	this.callFlash("SetButtonDisabled", [a]);
};
SWFUpload.prototype.setButtonAction = function(a) {
	this.settings.button_action = a;
	this.callFlash("SetButtonAction", [a]);
};
SWFUpload.prototype.setButtonCursor = function(a) {
	this.settings.button_cursor = a;
	this.callFlash("SetButtonCursor", [a]);
};
SWFUpload.prototype.queueEvent = function(b, c) {
	var a = this;
	if(c == undefined) {
		c = [];
	} else {
		if(!( c instanceof Array)) {
			c = [c];
		}
	}
	if( typeof this.settings[b] === "function") {
		this.eventQueue.push(function() {
			this.settings[b].apply(this, c);
		});
		setTimeout(function() {
			a.executeNextEvent();
		}, 0);
	} else {
		if(this.settings[b] !== null) {
			throw "Event handler " + b + " is unknown or is not a function";
		}
	}
};
SWFUpload.prototype.executeNextEvent = function() {
	var a = this.eventQueue ? this.eventQueue.shift() : null;
	if( typeof (a) === "function") {
		a.apply(this);
	}
};
SWFUpload.prototype.unescapeFilePostParams = function(c) {
	var e = /[$]([0-9a-f]{4})/i, f = {}, d, a, b;
	if(c != undefined) {
		for(a in c.post) {
			if(c.post.hasOwnProperty(a)) {
				d = a;
				while(( b = e.exec(d)) !== null) {
					d = d.replace(b[0], String.fromCharCode(parseInt("0x" + b[1], 16)));
				}
				f[d] = c.post[a];
			}
		}
		c.post = f;
	}
	return c;
};
SWFUpload.prototype.swfuploadPreload = function() {
	var a;
	if( typeof this.settings.swfupload_preload_handler === "function") {
		a = this.settings.swfupload_preload_handler.call(this);
	} else {
		if(this.settings.swfupload_preload_handler != undefined) {
			throw "upload_start_handler must be a function";
		}
	}
	if(a === undefined) {
		a = true;
	}
	return !!a;
};
SWFUpload.prototype.flashReady = function() {
	var a = this.cleanUp();
	if(!a) {
		this.debug("Flash called back ready but the flash movie can't be found.");
		return;
	}
	this.queueEvent("swfupload_loaded_handler");
};
SWFUpload.prototype.cleanUp = function() {
	var c, a = this.getMovieElement();
	try {
		if(a && typeof (a.CallFunction) === "unknown") {
			this.debug("Removing Flash functions hooks (this should only run in IE and should prevent memory leaks)");
			for(c in a) {
				try {
					if( typeof (a[c]) === "function") {
						a[c] = null;
					}
				} catch(b) {
				}
			}
		}
	} catch(d) {
	}
	window.__flash__removeCallback = function(e, f) {
		try {
			if(e) {
				e[f] = null;
			}
		} catch(g) {
		}
	};
	return a;
};
SWFUpload.prototype.mouseClick = function() {
	this.queueEvent("mouse_click_handler");
};
SWFUpload.prototype.mouseOver = function() {
	this.queueEvent("mouse_over_handler");
};
SWFUpload.prototype.mouseOut = function() {
	this.queueEvent("mouse_out_handler");
};
SWFUpload.prototype.fileDialogStart = function() {
	this.queueEvent("file_dialog_start_handler");
};
SWFUpload.prototype.fileQueued = function(a) {
	a = this.unescapeFilePostParams(a);
	this.queueEvent("file_queued_handler", a);
};
SWFUpload.prototype.fileQueueError = function(a, c, b) {
	a = this.unescapeFilePostParams(a);
	this.queueEvent("file_queue_error_handler", [a, c, b]);
};
SWFUpload.prototype.fileDialogComplete = function(b, c, a) {
	this.queueEvent("file_dialog_complete_handler", [b, c, a]);
};
SWFUpload.prototype.uploadResizeStart = function(b, a) {
	b = this.unescapeFilePostParams(b);
	this.queueEvent("upload_resize_start_handler", [b, a.width, a.height, a.encoding, a.quality]);
};
SWFUpload.prototype.uploadStart = function(a) {
	a = this.unescapeFilePostParams(a);
	this.queueEvent("return_upload_start_handler", a);
};
SWFUpload.prototype.returnUploadStart = function(a) {
	var b;
	if( typeof this.settings.upload_start_handler === "function") {
		a = this.unescapeFilePostParams(a);
		b = this.settings.upload_start_handler.call(this, a);
	} else {
		if(this.settings.upload_start_handler != undefined) {
			throw "upload_start_handler must be a function";
		}
	}
	if(b === undefined) {
		b = true;
	}
	b = !!b;
	this.callFlash("ReturnUploadStart", [b]);
};
SWFUpload.prototype.uploadProgress = function(a, c, b) {
	a = this.unescapeFilePostParams(a);
	this.queueEvent("upload_progress_handler", [a, c, b]);
};
SWFUpload.prototype.uploadError = function(a, c, b) {
	a = this.unescapeFilePostParams(a);
	this.queueEvent("upload_error_handler", [a, c, b]);
};
SWFUpload.prototype.uploadSuccess = function(b, a, c) {
	b = this.unescapeFilePostParams(b);
	this.queueEvent("upload_success_handler", [b, a, c]);
};
SWFUpload.prototype.uploadComplete = function(a) {
	a = this.unescapeFilePostParams(a);
	this.queueEvent("upload_complete_handler", a);
};
SWFUpload.prototype.debug = function(a) {
	this.queueEvent("debug_handler", a);
};
SWFUpload.prototype.debugMessage = function(c) {
	var a, d, b;
	if(this.settings.debug) {
		d = [];
		if( typeof c === "object" && typeof c.name === "string" && typeof c.message === "string") {
			for(b in c) {
				if(c.hasOwnProperty(b)) {
					d.push(b + ": " + c[b]);
				}
			}
			a = d.join("\n") || "";
			d = a.split("\n");
			a = "EXCEPTION: " + d.join("\nEXCEPTION: ");
			SWFUpload.Console.writeLine(a);
		} else {
			SWFUpload.Console.writeLine(c);
		}
	}
};
SWFUpload.Console = {};
SWFUpload.Console.writeLine = function(d) {
	var b, a;
	try {
		b = document.getElementById("SWFUpload_Console");
		if(!b) {
			a = document.createElement("form");
			document.getElementsByTagName("body")[0].appendChild(a);
			b = document.createElement("textarea");
			b.id = "SWFUpload_Console";
			b.style.fontFamily = "monospace";
			b.setAttribute("wrap", "off");
			b.wrap = "off";
			b.style.overflow = "auto";
			b.style.width = "700px";
			b.style.height = "350px";
			b.style.margin = "5px";
			a.appendChild(b);
		}
		b.value += d + "\n";
		b.scrollTop = b.scrollHeight - b.clientHeight;
	} catch(c) {alert("Exception: " + c.name + " Message: " + c.message);
	}
};
swfobject = function() {
	var aq = "undefined", aD = "object", ab = "Shockwave Flash", X = "ShockwaveFlash.ShockwaveFlash", aE = "application/x-shockwave-flash", ac = "SWFObjectExprInst", ax = "onreadystatechange", af = window, aL = document, aB = navigator, aa = false, Z = [aN], aG = [], ag = [], al = [], aJ, ad, ap, at, ak = false, aU = false, aH, an, aI = true, ah = function() {
		var a = typeof aL.getElementById != aq && typeof aL.getElementsByTagName != aq && typeof aL.createElement != aq, e = aB.userAgent.toLowerCase(), c = aB.platform.toLowerCase(), h = c ? /win/.test(c) : /win/.test(e), j = c ? /mac/.test(c) : /mac/.test(e), g = /webkit/.test(e) ? parseFloat(e.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false, d = !+"\v1", f = [0, 0, 0], k = null;
		if( typeof aB.plugins != aq && typeof aB.plugins[ab] == aD) {
			k = aB.plugins[ab].description;
			if(k && !( typeof aB.mimeTypes != aq && aB.mimeTypes[aE] && !aB.mimeTypes[aE].enabledPlugin)) {
				aa = true;
				d = false;
				k = k.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
				f[0] = parseInt(k.replace(/^(.*)\..*$/, "$1"), 10);
				f[1] = parseInt(k.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
				f[2] = /[a-zA-Z]/.test(k) ? parseInt(k.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0;
			}
		} else {
			if( typeof af.ActiveXObject != aq) {
				try {
					var i = new ActiveXObject(X);
					if(i) {
						k = i.GetVariable("$version");
						if(k) {
							d = true;
							k = k.split(" ")[1].split(",");
							f = [parseInt(k[0], 10), parseInt(k[1], 10), parseInt(k[2], 10)];
						}
					}
				} catch(b) {
				}
			}
		}
		return {
			w3 : a,
			pv : f,
			wk : g,
			ie : d,
			win : h,
			mac : j
		};
	}(), aK = function() {
		if(!ah.w3) {
			return;
		}
		if(( typeof aL.readyState != aq && aL.readyState == "complete") || ( typeof aL.readyState == aq && (aL.getElementsByTagName("body")[0] || aL.body))) {aP();
		}
		if(!ak) {
			if( typeof aL.addEventListener != aq) {
				aL.addEventListener("DOMContentLoaded", aP, false);
			}
			if(ah.ie && ah.win) {
				aL.attachEvent(ax, function() {
					if(aL.readyState == "complete") {
						aL.detachEvent(ax, arguments.callee);
						aP();
					}
				});
				if(af == top) {(function() {
						if(ak) {
							return;
						}
						try {
							aL.documentElement.doScroll("left");
						} catch(a) {setTimeout(arguments.callee, 0);
							return;
						}aP();
					})();
				}
			}
			if(ah.wk) {(function() {
					if(ak) {
						return;
					}
					if(!/loaded|complete/.test(aL.readyState)) {setTimeout(arguments.callee, 0);
						return;
					}aP();
				})();
			}aC(aP);
		}
	}();
	function aP() {
		if(ak) {
			return;
		}
		try {
			var b = aL.getElementsByTagName("body")[0].appendChild(ar("span"));
			b.parentNode.removeChild(b);
		} catch(a) {
			return;
		}
		ak = true;
		var d = Z.length;
		for(var c = 0; c < d; c++) {Z[c]();
		}
	}

	function aj(a) {
		if(ak) {a();
		} else {
			Z[Z.length] = a;
		}
	}

	function aC(a) {
		if( typeof af.addEventListener != aq) {
			af.addEventListener("load", a, false);
		} else {
			if( typeof aL.addEventListener != aq) {
				aL.addEventListener("load", a, false);
			} else {
				if( typeof af.attachEvent != aq) {aM(af, "onload", a);
				} else {
					if( typeof af.onload == "function") {
						var b = af.onload;
						af.onload = function() {b();
							a();
						};
					} else {
						af.onload = a;
					}
				}
			}
		}
	}

	function aN() {
		if(aa) {Y();
		} else {am();
		}
	}

	function Y() {
		var d = aL.getElementsByTagName("body")[0];
		var b = ar(aD);
		b.setAttribute("type", aE);
		var a = d.appendChild(b);
		if(a) {
			var c = 0;
			(function() {
				if( typeof a.GetVariable != aq) {
					var e = a.GetVariable("$version");
					if(e) {
						e = e.split(" ")[1].split(",");
						ah.pv = [parseInt(e[0], 10), parseInt(e[1], 10), parseInt(e[2], 10)];
					}
				} else {
					if(c < 10) {
						c++;
						setTimeout(arguments.callee, 10);
						return;
					}
				}
				d.removeChild(b);
				a = null;
				am();
			})();
		} else {am();
		}
	}

	function am() {
		var g = aG.length;
		if(g > 0) {
			for(var h = 0; h < g; h++) {
				var c = aG[h].id;
				var l = aG[h].callbackFn;
				var a = {
					success : false,
					id : c
				};
				if(ah.pv[0] > 0) {
					var i = aS(c);
					if(i) {
						if(ao(aG[h].swfVersion) && !(ah.wk && ah.wk < 312)) {ay(c, true);
							if(l) {
								a.success = true;
								a.ref = av(c);
								l(a);
							}
						} else {
							if(aG[h].expressInstall && au()) {
								var e = {};
								e.data = aG[h].expressInstall;
								e.width = i.getAttribute("width") || "0";
								e.height = i.getAttribute("height") || "0";
								if(i.getAttribute("class")) {
									e.styleclass = i.getAttribute("class");
								}
								if(i.getAttribute("align")) {
									e.align = i.getAttribute("align");
								}
								var f = {};
								var d = i.getElementsByTagName("param");
								var k = d.length;
								for(var j = 0; j < k; j++) {
									if(d[j].getAttribute("name").toLowerCase() != "movie") {
										f[d[j].getAttribute("name")] = d[j].getAttribute("value");
									}
								}ae(e, f, c, l);
							} else {aF(i);
								if(l) {l(a);
								}
							}
						}
					}
				} else {ay(c, true);
					if(l) {
						var b = av(c);
						if(b && typeof b.SetVariable != aq) {
							a.success = true;
							a.ref = b;
						}l(a);
					}
				}
			}
		}
	}

	function av(b) {
		var d = null;
		var c = aS(b);
		if(c && c.nodeName == "OBJECT") {
			if( typeof c.SetVariable != aq) {
				d = c;
			} else {
				var a = c.getElementsByTagName(aD)[0];
				if(a) {
					d = a;
				}
			}
		}
		return d;
	}

	function au() {
		return !aU && ao("6.0.65") && (ah.win || ah.mac) && !(ah.wk && ah.wk < 312);
	}

	function ae(f, d, h, e) {
		aU = true;
		ap = e || null;
		at = {
			success : false,
			id : h
		};
		var a = aS(h);
		if(a) {
			if(a.nodeName == "OBJECT") {
				aJ = aO(a);
				ad = null;
			} else {
				aJ = a;
				ad = h;
			}
			f.id = ac;
			if( typeof f.width == aq || (!/%$/.test(f.width) && parseInt(f.width, 10) < 310)) {
				f.width = "310";
			}
			if( typeof f.height == aq || (!/%$/.test(f.height) && parseInt(f.height, 10) < 137)) {
				f.height = "137";
			}
			aL.title = aL.title.slice(0, 47) + " - Flash Player Installation";
			var b = ah.ie && ah.win ? "ActiveX" : "PlugIn", c = "MMredirectURL=" + af.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + b + "&MMdoctitle=" + aL.title;
			if( typeof d.flashvars != aq) {
				d.flashvars += "&" + c;
			} else {
				d.flashvars = c;
			}
			if(ah.ie && ah.win && a.readyState != 4) {
				var g = ar("div");
				h += "SWFObjectNew";
				g.setAttribute("id", h);
				a.parentNode.insertBefore(g, a);
				a.style.display = "none";
				(function() {
					if(a.readyState == 4) {
						a.parentNode.removeChild(a);
					} else {setTimeout(arguments.callee, 10);
					}
				})();
			}aA(f, d, h);
		}
	}

	function aF(a) {
		if(ah.ie && ah.win && a.readyState != 4) {
			var b = ar("div");
			a.parentNode.insertBefore(b, a);
			b.parentNode.replaceChild(aO(a), b);
			a.style.display = "none";
			(function() {
				if(a.readyState == 4) {
					a.parentNode.removeChild(a);
				} else {setTimeout(arguments.callee, 10);
				}
			})();
		} else {
			a.parentNode.replaceChild(aO(a), a);
		}
	}

	function aO(b) {
		var d = ar("div");
		if(ah.win && ah.ie) {
			d.innerHTML = b.innerHTML;
		} else {
			var e = b.getElementsByTagName(aD)[0];
			if(e) {
				var a = e.childNodes;
				if(a) {
					var f = a.length;
					for(var c = 0; c < f; c++) {
						if(!(a[c].nodeType == 1 && a[c].nodeName == "PARAM") && !(a[c].nodeType == 8)) {
							d.appendChild(a[c].cloneNode(true));
						}
					}
				}
			}
		}
		return d;
	}

	function aA(e, g, c) {
		var d, a = aS(c);
		if(ah.wk && ah.wk < 312) {
			return d;
		}
		if(a) {
			if( typeof e.id == aq) {
				e.id = c;
			}
			if(ah.ie && ah.win) {
				var f = "";
				for(var i in e) {
					if(e[i] != Object.prototype[i]) {
						if(i.toLowerCase() == "data") {
							g.movie = e[i];
						} else {
							if(i.toLowerCase() == "styleclass") {
								f += ' class="' + e[i] + '"';
							} else {
								if(i.toLowerCase() != "classid") {
									f += " " + i + '="' + e[i] + '"';
								}
							}
						}
					}
				}
				var h = "";
				for(var j in g) {
					if(g[j] != Object.prototype[j]) {
						h += '<param name="' + j + '" value="' + g[j] + '" />';
					}
				}
				a.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + f + ">" + h + "</object>";
				ag[ag.length] = e.id;
				d = aS(e.id);
			} else {
				var b = ar(aD);
				b.setAttribute("type", aE);
				for(var k in e) {
					if(e[k] != Object.prototype[k]) {
						if(k.toLowerCase() == "styleclass") {
							b.setAttribute("class", e[k]);
						} else {
							if(k.toLowerCase() != "classid") {
								b.setAttribute(k, e[k]);
							}
						}
					}
				}
				for(var l in g) {
					if(g[l] != Object.prototype[l] && l.toLowerCase() != "movie") {aQ(b, l, g[l]);
					}
				}
				a.parentNode.replaceChild(b, a);
				d = b;
			}
		}
		return d;
	}

	function aQ(b, d, c) {
		var a = ar("param");
		a.setAttribute("name", d);
		a.setAttribute("value", c);
		b.appendChild(a);
	}

	function aw(a) {
		var b = aS(a);
		if(b && b.nodeName == "OBJECT") {
			if(ah.ie && ah.win) {
				b.style.display = "none";
				(function() {
					if(b.readyState == 4) {aT(a);
					} else {setTimeout(arguments.callee, 10);
					}
				})();
			} else {
				b.parentNode.removeChild(b);
			}
		}
	}

	function aT(a) {
		var b = aS(a);
		if(b) {
			for(var c in b) {
				if( typeof b[c] == "function") {
					b[c] = null;
				}
			}
			b.parentNode.removeChild(b);
		}
	}

	function aS(a) {
		var c = null;
		try {
			c = aL.getElementById(a);
		} catch(b) {
		}
		return c;
	}

	function ar(a) {
		return aL.createElement(a);
	}

	function aM(a, c, b) {
		a.attachEvent(c, b);
		al[al.length] = [a, c, b];
	}

	function ao(a) {
		var b = ah.pv, c = a.split(".");
		c[0] = parseInt(c[0], 10);
		c[1] = parseInt(c[1], 10) || 0;
		c[2] = parseInt(c[2], 10) || 0;
		return (b[0] > c[0] || (b[0] == c[0] && b[1] > c[1]) || (b[0] == c[0] && b[1] == c[1] && b[2] >= c[2])) ? true : false;
	}

	function az(b, f, a, c) {
		if(ah.ie && ah.mac) {
			return;
		}
		var e = aL.getElementsByTagName("head")[0];
		if(!e) {
			return;
		}
		var g = (a && typeof a == "string") ? a : "screen";
		if(c) {
			aH = null;
			an = null;
		}
		if(!aH || an != g) {
			var d = ar("style");
			d.setAttribute("type", "text/css");
			d.setAttribute("media", g);
			aH = e.appendChild(d);
			if(ah.ie && ah.win && typeof aL.styleSheets != aq && aL.styleSheets.length > 0) {
				aH = aL.styleSheets[aL.styleSheets.length - 1];
			}
			an = g;
		}
		if(ah.ie && ah.win) {
			if(aH && typeof aH.addRule == aD) {
				aH.addRule(b, f);
			}
		} else {
			if(aH && typeof aL.createTextNode != aq) {
				aH.appendChild(aL.createTextNode(b + " {" + f + "}"));
			}
		}
	}

	function ay(a, c) {
		if(!aI) {
			return;
		}
		var b = c ? "visible" : "hidden";
		if(ak && aS(a)) {
			aS(a).style.visibility = b;
		} else {az("#" + a, "visibility:" + b);
		}
	}

	function ai(b) {
		var a = /[\\\"<>\.;]/;
		var c = a.exec(b) != null;
		return c && typeof encodeURIComponent != aq ? encodeURIComponent(b) : b;
	}

	var aR = function() {
		if(ah.ie && ah.win) {
			window.attachEvent("onunload", function() {
				var a = al.length;
				for(var b = 0; b < a; b++) {
					al[b][0].detachEvent(al[b][1], al[b][2]);
				}
				var d = ag.length;
				for(var c = 0; c < d; c++) {aw(ag[c]);
				}
				for(var e in ah) {
					ah[e] = null;
				}
				ah = null;
				for(var f in swfobject) {
					swfobject[f] = null;
				}
				swfobject = null;
			});
		}
	}();
	return {
		registerObject : function(a, e, c, b) {
			if(ah.w3 && a && e) {
				var d = {};
				d.id = a;
				d.swfVersion = e;
				d.expressInstall = c;
				d.callbackFn = b;
				aG[aG.length] = d;
				ay(a, false);
			} else {
				if(b) {b({
						success : false,
						id : a
					});
				}
			}
		},
		getObjectById : function(a) {
			if(ah.w3) {
				return av(a);
			}
		},
		embedSWF : function(k, e, h, f, c, a, b, i, g, j) {
			var d = {
				success : false,
				id : e
			};
			if(ah.w3 && !(ah.wk && ah.wk < 312) && k && e && h && f && c) {ay(e, false);
				aj(function() {
					h += "";
					f += "";
					var q = {};
					if(g && typeof g === aD) {
						for(var o in g) {
							q[o] = g[o];
						}
					}
					q.data = k;
					q.width = h;
					q.height = f;
					var n = {};
					if(i && typeof i === aD) {
						for(var p in i) {
							n[p] = i[p];
						}
					}
					if(b && typeof b === aD) {
						for(var l in b) {
							if( typeof n.flashvars != aq) {
								n.flashvars += "&" + l + "=" + b[l];
							} else {
								n.flashvars = l + "=" + b[l];
							}
						}
					}
					if(ao(c)) {
						var m = aA(q, n, e);
						if(q.id == e) {ay(e, true);
						}
						d.success = true;
						d.ref = m;
					} else {
						if(a && au()) {
							q.data = a;
							ae(q, n, e, j);
							return;
						} else {ay(e, true);
						}
					}
					if(j) {j(d);
					}
				});
			} else {
				if(j) {j(d);
				}
			}
		},
		switchOffAutoHideShow : function() {
			aI = false;
		},
		ua : ah,
		getFlashPlayerVersion : function() {
			return {
				major : ah.pv[0],
				minor : ah.pv[1],
				release : ah.pv[2]
			};
		},
		hasFlashPlayerVersion : ao,
		createSWF : function(a, b, c) {
			if(ah.w3) {
				return aA(a, b, c);
			} else {
				return undefined;
			}
		},
		showExpressInstall : function(b, a, d, c) {
			if(ah.w3 && au()) {ae(b, a, d, c);
			}
		},
		removeSWF : function(a) {
			if(ah.w3) {aw(a);
			}
		},
		createCSS : function(b, a, c, d) {
			if(ah.w3) {az(b, a, c, d);
			}
		},
		addDomLoadEvent : aj,
		addLoadEvent : aC,
		getQueryParamValue : function(b) {
			var a = aL.location.search || aL.location.hash;
			if(a) {
				if(/\?/.test(a)) {
					a = a.split("?")[1];
				}
				if(b == null) {
					return ai(a);
				}
				var c = a.split("&");
				for(var d = 0; d < c.length; d++) {
					if(c[d].substring(0, c[d].indexOf("=")) == b) {
						return ai(c[d].substring((c[d].indexOf("=") + 1)));
					}
				}
			}
			return "";
		},
		expressInstallCallback : function() {
			if(aU) {
				var a = aS(ac);
				if(a && aJ) {
					a.parentNode.replaceChild(aJ, a);
					if(ad) {ay(ad, true);
						if(ah.ie && ah.win) {
							aJ.style.display = "block";
						}
					}
					if(ap) {ap(at);
					}
				}
				aU = false;
			}
		}
	};
}();
swfobject.addDomLoadEvent(function() {
	if( typeof (SWFUpload.onload) === "function") {
		SWFUpload.onload.call(window);
	}
});
