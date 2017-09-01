/**
 * Created by chang on 2017/8/24.
 */
function ajaxData(url,dataParams,callback){
    $.ajax({
        url: window.BASE_URL+"/"+url,
        type:"POST",
        dataType:"json",
        data: dataParams,
        success: function(data){
            callback(data);
        }
    });
}
function ajaxDataGet(url,dataParams,callback){
    $.ajax({
        url: window.BASE_URL+"/"+url,
        type:"GET",
        dataType:"json",
        data: dataParams,
        success: function(data){
            callback(data);
        }
    });
}