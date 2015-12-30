define(function(require,exports){
    /*
     * @descrtiption ajax function
     * @method ajax 
    */
    exports.ajax = function(_obj,_successCallback,_errorCallback){                
        $.ajax({ 
            type:_obj.type || "POST",
            url:_obj.url || "",
            async:_obj.async || true,
            cache:_obj.cache || true,
            dataType:_obj.dataType || "json",
            data:_obj.data || {},
            success:function(resut){
                typeof _successCallback == "function" && _successCallback(resut);
            },
            error:function(err){  
                typeof _errorCallback == "function" ? _errorCallback(err): '';      
            }
        });
    }
})