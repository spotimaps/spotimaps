(this.webpackJsonpspotimaps=this.webpackJsonpspotimaps||[]).push([[0],{27:function(e,t,a){e.exports=a(46)},32:function(e,t,a){},34:function(e,t,a){},35:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAA6pJREFUeJzlm81vDVEYh5+qtIlQFFVUpD5C4g+Q2BLiK218LAQbNoqmSMUCCUGiEWFDLCwkPhIJf4HYSNto2ZFYiIgggn63iWpvW4tjGO/MvfN15s6cO79kFufc8773vE/u/Z25Z86F9KoKeJD0JJLSeuADMJX0RIqtcuACkEMVnykA9UAn/wrPFID9wCDO4ksegGV0boWXPAC70WUKgJvRZQZAPqMLAqAN2AnML8J8taqQ0QUBYPXngOdAEzAr5rlHkh+jCwPAfg0DV0nhp8Kv0UUFYF1DwEmUzySqoEYXBMBFoB2YKBDTDSyPpTIfCmN0YVaBRcAp4GOeuAFgm9bKfCis0YUBYGk6ygi/ucTmgINaKvNQVKOLAsBSNfDQJX6SmCHoMDodACw1AWMiRw7YEaa4QtJpdDoBAGwFfoo8A8CqkPkc0m10ugGAgjAucr1CwxIZh9HFAQDgiEu+03JQsQrRBaAmIIRHIt+wzJF0gUEBjAF3gFqfABYAPSLnDZMBWP19QINPCMdEzhFgtukAplBrfJMPABXAJxHbUgoALAi7fEA4I+I6TQXQAvwSYwaBOg8AS1Cw7OBqTQQAsMkFwj0PAAAvRMweUwGA09hywFIPAFdEzPVpHgFp1i3gta1dDuz1iOkW7TUmA5gEbou+DR4x70R7BST/EQ/7FQBYLcZ+9hhfLcb3lfl4k6RVVuC1SmDU1h5Hrfn5VIEyz7/jTf4KaJHpAOpF+7vH+JmiPWI6gI2i/cZjvLxZ6jEZwDTgsOh75hGzUrTfmwygGVhra+dQm6KFtE6030Lyy1yYZXALzo3Pux7FA3SJmN0mAmjFudfXDyz2KL4O54+hhSYCkK9PAI0exQOcE3Ht+RKm7SoEYAI45KP4SuCLiG02HcAP1Na3H7WInEOop1lGAhgFbuL/LEANav/QnvOafUDSBQYFMM9n4ZYei3yDRDxIsQ9zHow0u+RrjZgTUPfgHS7J0wSgAedzyy40nh4pB867vEkaADSivMKep58/GyC6lbbH4ydw3iiN43/FCKUq4D7JAqgBnrjETwIHohQXRHEYpJcqgONAr0vsOEUs3pJug8ynZcBZ4GueuF5gs9bKAkinQUq1AS/5/4eNvDpQgBJXsQ9KDgBHSdlWX1SDlHIb0w9cBubGWEdkhTVIKat/DHiKOgI3I+a5a1MYg5S6BGwH5hRhvrEoqEGWrDL7lxm7/BhkJlTIIDOjfAaZKbkZZCaV2T9P22UZZKz6DcQ/zHbG03MJAAAAAElFTkSuQmCC"},38:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),i=a(10),r=a.n(i),c=(a(32),a(8)),s=a(48),A=a(50),l=a(11),m=a.n(l),u=function(){m.a.fire({icon:"error",title:"Oops...",text:"You need to give location permissions!",footer:'<a href="https://support.google.com/chrome/answer/114662">Why do I have this issue?</a>'})},p=(a(33),a(47)),g=a(49),f=(a(34),function(e){var t=e.info;return o.a.createElement("div",{className:"marker-wrapper"},o.a.createElement("div",{id:"song"},o.a.createElement("b",null,t.name),o.a.createElement("img",{id:"speaker",src:a(35),alt:"speaker",width:"12",height:"12"})),o.a.createElement("div",{id:"artist"},o.a.createElement("b",null,t.artist)))}),d=function(e){var t=e.info,a=e.lat,n=e.lng;return o.a.createElement(p.a,{center:[a,n],radius:4,fill:!0,color:"#00ffff",fillColor:"#00ffff",fillOpacity:"0.75"},o.a.createElement(g.a,null,o.a.createElement(f,{info:t})))},h=function(e){var t=e.data,a=Object(n.useState)([32,-118.09]),i=Object(c.a)(a,2),r=i[0],l=i[1],m=Object(n.useState)(13),p=Object(c.a)(m,1)[0];return Object(n.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){l([e.coords.latitude,e.coords.longitude])}),u)}),[]),o.a.createElement(s.a,{center:r,zoom:p},o.a.createElement(A.a,{url:"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"}),t.map((function(e){return o.a.createElement(d,Object.assign({key:e.id},e))})))},E=(a(38),a(25)),w=a(24),v=a(15),b=(a(39),a(41),function(e){var t=v.firestore().collection("songs"),a=[];t.onSnapshot((function(t){t.docChanges().forEach((function(t){a=[].concat(Object(w.a)(a),[Object(E.a)({},t.doc.data(),{id:t.doc.id})]),e(a)}))}))}),I=(a(45),function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(!0),s=Object(c.a)(r,2);s[0],s[1];return Object(n.useEffect)((function(){var e,t=new URLSearchParams(window.location.search);b(i),m.a.fire({html:'\n<div class="start-modal--wrapper">\n    Gello wrlkds\n</div>\n'}),e=t.get("code"),fetch("https://d826bf81.ngrok.io/token?code="+e).then((function(e){return e.json()})).then((function(e){fetch("https://api.spotify.com/v1/me/player/currently-playing",{method:"GET",header:{"Content-Type":"application/json",Authorization:"Bearer "+e.access_token}}).then((function(e){return console.log(e),e.json()})).then((function(e){console.log("name",e.item.name),console.log("prev url",e.item.preview_url),console.log("image",e.item.album.images[0]),console.log({name:e.item.name,audio:e.item.preview_url,img:e.item.album.images[0]}),console.log(e)}))}))}),[]),o.a.createElement("div",{className:"site-wrapper"},o.a.createElement(h,{data:a}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));v.initializeApp({apiKey:"AIzaSyBwYM4XJ0a_SwikgEaAXFIm5WCvG4x623k",authDomain:"spotimaps-44ae9.firebaseapp.com",databaseURL:"https://spotimaps-44ae9.firebaseio.com",projectId:"spotimaps-44ae9",storageBucket:"spotimaps-44ae9.appspot.com",messagingSenderId:"230927739844",appId:"1:230927739844:web:819c98bc082e1bd1015291",measurementId:"G-4D8G2Y42EX"}),r.a.render(o.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.a1787c05.chunk.js.map