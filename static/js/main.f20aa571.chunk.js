(this.webpackJsonpspotimaps=this.webpackJsonpspotimaps||[]).push([[0],{27:function(e,t,n){e.exports=n(46)},32:function(e,t,n){},34:function(e,t,n){},35:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAA6pJREFUeJzlm81vDVEYh5+qtIlQFFVUpD5C4g+Q2BLiK218LAQbNoqmSMUCCUGiEWFDLCwkPhIJf4HYSNto2ZFYiIgggn63iWpvW4tjGO/MvfN15s6cO79kFufc8773vE/u/Z25Z86F9KoKeJD0JJLSeuADMJX0RIqtcuACkEMVnykA9UAn/wrPFID9wCDO4ksegGV0boWXPAC70WUKgJvRZQZAPqMLAqAN2AnML8J8taqQ0QUBYPXngOdAEzAr5rlHkh+jCwPAfg0DV0nhp8Kv0UUFYF1DwEmUzySqoEYXBMBFoB2YKBDTDSyPpTIfCmN0YVaBRcAp4GOeuAFgm9bKfCis0YUBYGk6ygi/ucTmgINaKvNQVKOLAsBSNfDQJX6SmCHoMDodACw1AWMiRw7YEaa4QtJpdDoBAGwFfoo8A8CqkPkc0m10ugGAgjAucr1CwxIZh9HFAQDgiEu+03JQsQrRBaAmIIRHIt+wzJF0gUEBjAF3gFqfABYAPSLnDZMBWP19QINPCMdEzhFgtukAplBrfJMPABXAJxHbUgoALAi7fEA4I+I6TQXQAvwSYwaBOg8AS1Cw7OBqTQQAsMkFwj0PAAAvRMweUwGA09hywFIPAFdEzPVpHgFp1i3gta1dDuz1iOkW7TUmA5gEbou+DR4x70R7BST/EQ/7FQBYLcZ+9hhfLcb3lfl4k6RVVuC1SmDU1h5Hrfn5VIEyz7/jTf4KaJHpAOpF+7vH+JmiPWI6gI2i/cZjvLxZ6jEZwDTgsOh75hGzUrTfmwygGVhra+dQm6KFtE6030Lyy1yYZXALzo3Pux7FA3SJmN0mAmjFudfXDyz2KL4O54+hhSYCkK9PAI0exQOcE3Ht+RKm7SoEYAI45KP4SuCLiG02HcAP1Na3H7WInEOop1lGAhgFbuL/LEANav/QnvOafUDSBQYFMM9n4ZYei3yDRDxIsQ9zHow0u+RrjZgTUPfgHS7J0wSgAedzyy40nh4pB867vEkaADSivMKep58/GyC6lbbH4ydw3iiN43/FCKUq4D7JAqgBnrjETwIHohQXRHEYpJcqgONAr0vsOEUs3pJug8ynZcBZ4GueuF5gs9bKAkinQUq1AS/5/4eNvDpQgBJXsQ9KDgBHSdlWX1SDlHIb0w9cBubGWEdkhTVIKat/DHiKOgI3I+a5a1MYg5S6BGwH5hRhvrEoqEGWrDL7lxm7/BhkJlTIIDOjfAaZKbkZZCaV2T9P22UZZKz6DcQ/zHbG03MJAAAAAElFTkSuQmCC"},38:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a,o=n(1),i=n.n(o),r=n(10),c=n.n(r),s=(n(32),n(8)),l=n(48),A=n(50),p=(n(33),n(47)),u=n(49),m=(n(34),function(e){var t=e.info;return i.a.createElement("div",{className:"marker-wrapper"},i.a.createElement("div",{id:"song"},i.a.createElement("b",null,t.name),i.a.createElement("img",{id:"speaker",src:n(35),alt:"speaker",width:"12",height:"12"})),i.a.createElement("div",{id:"artist"},i.a.createElement("b",null,t.artist)))}),g=function(e){var t=e.info,n=e.lat,a=e.lng;return i.a.createElement(p.a,{center:[n,a],radius:4,fill:!0,color:"#00ffff",fillColor:"#00ffff",fillOpacity:"0.75"},i.a.createElement(u.a,null,i.a.createElement(m,{info:t})))},f=function(e){var t=e.data,n=e.center,a=Object(o.useState)(13),r=Object(s.a)(a,1)[0];return i.a.createElement(l.a,{center:n,zoom:r},i.a.createElement(A.a,{url:"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"}),t.map((function(e){return i.a.createElement(g,Object.assign({key:e.id},e))})))},d=(n(38),n(14)),h=n.n(d),w=function(){h.a.fire({icon:"error",title:"Oops...",text:"You need to give location permissions!",footer:'<a href="https://support.google.com/chrome/answer/114662">Why do I have this issue?</a>'})},E=n(25),v=n(24),b=n(15),B=(n(39),n(41),function(e){var t=(a=b.firestore()).collection("songs"),n=[];t.onSnapshot((function(t){t.docChanges().forEach((function(t){n=[].concat(Object(v.a)(n),[Object(E.a)({},t.doc.data(),{id:t.doc.id})]),e(n)}))}))}),I=function(e){a.collection("songs").add(e).then((function(){console.log("Document successfully written!")})).catch((function(e){console.error("Error writing document: ",e)}))},S=(n(45),function(){console.log("Version 4.1.0");var e=Object(o.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(o.useState)([34.42,-119.99]),c=Object(s.a)(r,2),l=c[0],A=c[1],p=Object(o.useState)(!0),u=Object(s.a)(p,2);u[0],u[1];return Object(o.useEffect)((function(){var e=new URLSearchParams(window.location.search);navigator.geolocation.getCurrentPosition((function(t){A([t.coords.latitude,t.coords.longitude]),function(e,t){fetch("https://spotimaps.appspot.com/token?code="+e).then((function(e){return e.json()})).then((function(e){var n=new Headers;n.append("Authorization","Bearer "+e.access_token),fetch("https://api.spotify.com/v1/me/player/currently-playing",{method:"GET",headers:n,redirect:"follow"}).then((function(e){return e.json()})).then((function(e){I({info:{name:e.item.name,audio:e.item.preview_url,img:e.item.album.images[0],artist:e.item.artists[0].name},lat:t.coords.latitude,lng:t.coords.longitude})}))}))}(e.get("code"),t)}),w),B(a),null!==e.get("code")&&h.a.fire({html:'\n<div class="start-modal--wrapper">\n    <h1>Welcome to Spotimaps! :D</h1>\n    <img src="./img1.png" style="width:384px;height:384px; margin: 0 auto;"> <br/>\n    Click around to see what people are listening to! <br/> \n    This application uses the Spotify API.<br/> \n</div>\n',confirmButtonText:"Log into Spotify",showCancelButton:!0}).then((function(e){e.value&&(window.location.href="https://spotimaps.appspot.com/login")}))}),[]),i.a.createElement("div",{className:"site-wrapper"},i.a.createElement(f,{data:n,center:l}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));b.initializeApp({apiKey:"AIzaSyBwYM4XJ0a_SwikgEaAXFIm5WCvG4x623k",authDomain:"spotimaps-44ae9.firebaseapp.com",databaseURL:"https://spotimaps-44ae9.firebaseio.com",projectId:"spotimaps-44ae9",storageBucket:"spotimaps-44ae9.appspot.com",messagingSenderId:"230927739844",appId:"1:230927739844:web:819c98bc082e1bd1015291",measurementId:"G-4D8G2Y42EX"}),c.a.render(i.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.f20aa571.chunk.js.map