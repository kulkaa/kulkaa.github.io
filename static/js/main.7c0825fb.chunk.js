(this.webpackJsonpservicesite=this.webpackJsonpservicesite||[]).push([[0],{15:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},17:function(e,t,a){e.exports=a(42)},22:function(e,t,a){},23:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),o=a(14),c=a.n(o),s=(a(22),a(15)),i=a.n(s),u=(a(23),a(0)),l=a.n(u),p=a(3),h=a(4),m=a.n(h),f="https://api.telegram.org/bot739407650:AAHSns6g9UeSuRAIpjQbpB6CaK404jUIxPc/sendMessage";function d(e,t){return v.apply(this,arguments)}function v(){return(v=Object(p.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Send message to Telegram"),e.abrupt("return",m.a.post(f,{headers:{"Content-Type":"application/json"},chat_id:t,text:a}).then((function(e){return e})).catch((function(e){return console.log(e),Promise.reject("Fetch did not succeed")})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b,g=a(16),B=a.n(g),N="https://cors-anywhere.herokuapp.com/",A="https://www.barbora.lt/api/eshop/v1/cart/deliveries";function D(){return w.apply(this,arguments)}function w(){return(w=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b={status:void 0,available:void 0,timeSlots:[]},e.next=3,k();case 3:if(null!==(t=e.sent)&&void 0!==t){e.next=9;break}console.log("FetchError!"),b.status="FetchError",e.next=12;break;case 9:return b.status=t.status,e.next=12,L(t.data.deliveries[0]);case 12:return e.next=14,F(b);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log("barbora!!!"),document.cookie="f5avraaaaaaaaaaaaaaaa_session_=MMNKLAEDKFMJDAPKKMJLHLBMNIANBGBGJDPKCLFHKNHLAFFPEGCLHNMIGLEACIABDPMDBLDLNCPNLHFHDPNABOJOMKLNLEJBGNDIIJPCGHNHMDFDEBALPMDGIIGKAHEF; permissionToUseCookies=true; rememberMe=true; order=discountDesc; f5avraaaaaaaaaaaaaaaa_session_=NPANENCIKPJDDODMBODGLHFFHIBELBPNJNPDLOJKNCEDDOBPGPMENHFGOOFBOBDEPLNDHCKBJCPLCMKFODKABADJLKKBEGFIFAOAOHKMJOPNMAJAMPBKGHAFFFGDHKKN; region=barbora.lt; brbLastLoginDay=2020-03-25; .BRBAUTH=ObT7cxQf3cTyP8fH-ODruUicp2_LQtBK11bNTmt322xLNmyBPoCBFWWNv0jCtUwsLuoZdhUQvkc2FTSWBv5kgb8E5Bkp-G0glYwj5iJC9WCd1Uiepu8tFXFhaBOKiqnOUgiwh3VhsfGOdiK7JtDCxQ2";var E={headers:{"content-Type":"application/json",Accept:"/","Cache-Control":"no-cache",Authorization:"Basic YXBpa2V5OlNlY3JldEtleQ==",Cookie:document.cookie}};function k(){return x.apply(this,arguments)}function x(){return(x=Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get(N+A,E).then((function(e){return e})).catch((function(e){return console.log(e),null}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){return y.apply(this,arguments)}function y(){return(y=Object(p.a)(l.a.mark((function e(t){var a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==(a=t.params.matrix.length)&&void 0!==a){e.next=3;break}return e.abrupt("return");case 3:for(n=0;n<a;n++)for(r=0;r<13;r++)C(t,n,r)&&(b.available=!0,b.timeSlots.push(t.params.matrix[n].hours[r].deliveryTime));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,t,a){var n=e.params.matrix[t].hours[a];n.deliveryTime;return!0===n.available}function F(e){return O.apply(this,arguments)}function O(){return(O=Object(p.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.available){e.next=6;break}return a="[".concat(K(),"] Available times:\n").concat(t.timeSlots.join("\n")),e.next=4,d(905470537,a);case 4:e.next=7;break;case 6:a="[".concat(K(),"] No time slots found [").concat(t.status,"]");case 7:console.log(a);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(){return B()(new Date,"yyyy-mm-dd HH:MM:ss")}m.a.defaults.withCredentials=!0;var P=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:i.a,className:"App-logo",alt:"logo"}),r.a.createElement("button",{onClick:D},"Click me!"),r.a.createElement("p",null,"Edit ",r.a.createElement("code",null,"src/App.js")," and save to reload>>>."),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.7c0825fb.chunk.js.map