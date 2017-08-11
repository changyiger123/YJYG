/**
 * Created by chang on 2017/8/7.
 */
//rem自适应
(function (doc, win) {
    var _root = doc.documentElement,
        resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize',
        resizeCallback = function () {
            var clientWidth = _root.clientWidth,
                fontSize = 10 * 10;
            if (!clientWidth) return;
            if (clientWidth < 1080) {
                fontSize = 100 * (clientWidth / 750);
            } else {
                fontSize = 100 * (1080 / 750);
            }
            _root.style.fontSize = fontSize + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvent, resizeCallback, false);
    doc.addEventListener('DOMContentLoaded', resizeCallback, false);
})(document, window);

//手机验证正则表达
function checkPhone(){
    var phone = document.getElementById('phone').value;
    if(!(/^1[34578]\d{9}$/.test(phone))){
        alert("手机号码有误，请重填");
        return false;
    }else{
        //发送验证码到手机
    }
}
$('.getNum').click(function(){
    checkPhone()
})






//根据返回数值判断弹出图片场景
var backgrounds = [
        "img/hb.png",
        "img/yzc.png"
    ];
//var isNum;
//if(isNum==0){
//    $('.msg').href='';
//}else{
//    $('.msg').href='';
//}
$('.msg').css('background', 'url('+backgrounds[0]+') no-repeat');
$('.msg').css('background-size', '100% 100%');







//(function (doc, win) {
//    //  html
//    var docEl = doc.documentElement,
//        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize', recalc = function () {
//            var clientWidth = docEl.clientWidth;
//            if (!clientWidth) return;
//            clientWidth = (clientWidth > 750 ) ? 750 : clientWidth ; docEl.style.fontSize = 10 * (clientWidth /375) + 'px';
//        };
//    if (!doc.addEventListener) return; win.addEventListener(resizeEvt, recalc, false);
//    recalc();
//})(document, window);

//designWidth:��Ƹ��ʵ�ʿ��ֵ����Ҫ����ʵ������
//maxWidth:������������ֵ����Ҫ����ʵ������
//���js������������������ǵ�Ҫ���ã�һ��Ϊ��Ƹ�ʵ�ʿ�ȣ�һ��Ϊ����������ȣ�������Ƹ�Ϊ750�������Ϊ750����Ϊ(750,750)
//;(function(designWidth, maxWidth) {
//    var doc = document,
//        win = window,
//        docEl = doc.documentElement,
//        remStyle = document.createElement("style"),
//        tid;
//
//    function refreshRem() {
//        var width = docEl.getBoundingClientRect().width;
//        maxWidth = maxWidth || 540;
//        width>maxWidth && (width=maxWidth);
//        var rem = width * 100 / designWidth;
//        remStyle.innerHTML = 'html{font-size:' + rem + 'px;}';
//    }
//
//    if (docEl.firstElementChild) {
//        docEl.firstElementChild.appendChild(remStyle);
//    } else {
//        var wrap = doc.createElement("div");
//        wrap.appendChild(remStyle);
//        doc.write(wrap.innerHTML);
//        wrap = null;
//    }
//    //Ҫ�� wiewport ���úú����ִ�� refreshRem����Ȼ refreshRem ��ִ��2�Σ�
//    refreshRem();
//
//    win.addEventListener("resize", function() {
//        clearTimeout(tid); //��ִֹ������
//        tid = setTimeout(refreshRem, 300);
//    }, false);
//
//    win.addEventListener("pageshow", function(e) {
//        if (e.persisted) { // ��������˵�ʱ�����¼���
//            clearTimeout(tid);
//            tid = setTimeout(refreshRem, 300);
//        }
//    }, false);
//
//    if (doc.readyState === "complete") {
//        doc.body.style.fontSize = "16px";
//    } else {
//        doc.addEventListener("DOMContentLoaded", function(e) {
//            doc.body.style.fontSize = "16px";
//        }, false);
//    }
//})(750, 750);

