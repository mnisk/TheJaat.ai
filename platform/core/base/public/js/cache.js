(()=>{var e=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,(n=[{key:"init",value:function(){$(document).on("click",".btn-clear-cache",(function(e){e.preventDefault();var t=$(e.currentTarget);t.addClass("button-loading"),$.ajax({url:t.data("url"),type:"POST",data:{type:t.data("type")},success:function(e){t.removeClass("button-loading"),e.error?Botble.showError(e.message):Botble.showSuccess(e.message)},error:function(e){t.removeClass("button-loading"),Botble.handleError(e)}})}))}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();$(document).ready((function(){(new e).init()}))})();
