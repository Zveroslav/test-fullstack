(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{50:function(e,t,n){e.exports=n(83)},55:function(e,t,n){},56:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(44),u=n.n(c),s=(n(55),n(12)),i=n(13),o=n(17),l=n(14),p=n(16),m=(n(56),n(85)),f=n(86),E=n(49),d=n(23),h="http://localhost:8080",v={USER_LOGIN:"USER_LOGIN",LOAD_USER_LIST:"LOAD_USER_LIST",GET_USER_LIST:"GET_USER_LIST",LOAD_DEVICE_LIST:"LOAD_DEVICE_LIST",FAIL:"FAIL",PROCESS:"PROCESS",DONE:"DONE"},b={user:"user",logIn:function(){localStorage.setItem(this.user,this.user)},logOut:function(){localStorage.removeItem(this.user)},checkLogin:function(){return!!localStorage.getItem(this.user)}},O=Object(d.b)(function(e){return{userList:e.user.userList,stateRequest:e.stateRequest}},function(e){return{loadUsers:function(){e({type:v.LOAD_USER_LIST})},saveUser:function(t){b.logIn(),e(function(e){return{type:v.USER_LOGIN,user:e}}(t))}}})(function(e){var t=e.loadUsers,n=void 0===t?function(){return null}:t,r=e.saveUser,c=void 0===r?function(){return null}:r,u=e.userList,s=void 0===u?[]:u,i=e.stateRequest,o=void 0===i?{}:i;return a.a.createElement("div",null,a.a.createElement("p",null,a.a.createElement("button",{onClick:function(){return n()}},"Get Users")),s.map(function(e){return a.a.createElement("li",{key:e.id},e.id," - ",e.username," ",a.a.createElement("button",{onClick:function(){return c(e)}},"Login"))}),a.a.createElement("div",null,o.fail?a.a.createElement("p",null,"Incorrect pass or login"):"",o.process?a.a.createElement("p",null,"Loading"):""))}),y=function(){return a.a.createElement("p",null,"Page not found")},j=n(84),L=function(e){var t=e.children;return a.a.createElement("div",null,a.a.createElement("p",null,a.a.createElement(j.a,{to:"/login"},"Login")),a.a.createElement("p",null,a.a.createElement(j.a,{to:"/sites"},"Sites")),a.a.createElement("p",null,a.a.createElement(j.a,{to:"/login",onClick:function(){return b.logOut()}},"Log Out")),t)},g=n(5),S=n.n(g),k=n(11),w=n(19),I=n.n(w);function x(){return(x=Object(k.a)(S.a.mark(function e(){var t,n;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get(h+"/sites");case 2:if(t=e.sent,!(n=t.data)||!Array.isArray(n)){e.next=6;break}return e.abrupt("return",n);case 6:return e.abrupt("return",!1);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}var R=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(e){var t=this;(function(){return x.apply(this,arguments)})().then(function(e){return t.setState({siteList:e})})}},{key:"render",value:function(){if(this.state){var e=this.state.siteList;return a.a.createElement("div",null,e.map(function(e){return a.a.createElement("div",{key:e.id},a.a.createElement("h3",null,e.title),a.a.createElement("p",null,a.a.createElement(j.a,{to:"/sites/"+e.id+"/alarmZones"},"alarmZones")),a.a.createElement("p",null,a.a.createElement(j.a,{to:"/sites/"+e.id+"/devices"},"devices")))}))}return a.a.createElement("p",null,"Loading")}}]),t}(a.a.Component),_=Object(d.b)(function(e){return{stateRequest:e.stateRequest,user:e.user}},null)(R);function A(e){return U.apply(this,arguments)}function U(){return(U=Object(k.a)(S.a.mark(function e(t){var n,r;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get(h+"/sites/"+t+"/alarmzones");case 2:if(n=e.sent,!(r=n.data)||!Array.isArray(r)){e.next=6;break}return e.abrupt("return",r);case 6:return e.abrupt("return",!1);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}var C=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=Object(k.a)(S.a.mark(function e(t){var n;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props.match.params.siteId,e.t0=this,e.next=4,A(n);case 4:e.t1=e.sent,e.t2={alarmZoneList:e.t1},e.t0.setState.call(e.t0,e.t2);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(this.state){var e=this.state.alarmZoneList;return a.a.createElement("div",null,e.map(function(e){return a.a.createElement("div",{key:e.id},a.a.createElement("h3",null,e.name),a.a.createElement("p",null,e.armed?"armed":"no armed"))}))}return a.a.createElement("p",null,"Loading")}}]),t}(a.a.Component);function T(e){return D.apply(this,arguments)}function D(){return(D=Object(k.a)(S.a.mark(function e(t){var n,r;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get(h+"/sites/"+t+"/devices");case 2:if(n=e.sent,!(r=n.data)||!Array.isArray(r)){e.next=6;break}return e.abrupt("return",r);case 6:return e.abrupt("return",!1);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}var G=function(e){var t=e.device;return a.a.createElement("tr",null,a.a.createElement("td",null,t.title),a.a.createElement("td",null,t.model),a.a.createElement("td",null,t.connected?"+":"-"),a.a.createElement("td",null,t.storages.map(function(e){return a.a.createElement("p",{key:e.id},e.type," : ",e.state)})),a.a.createElement("td",null,t.alarmZoneId))},N=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=Object(k.a)(S.a.mark(function e(t){var n;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props.match.params.siteId,e.t0=this,e.next=4,T(n);case 4:e.t1=e.sent,e.t2={deviceList:e.t1},e.t0.setState.call(e.t0,e.t2);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(this.state){var e=this.state.deviceList;return console.log(e),a.a.createElement("div",null,a.a.createElement("table",{id:"device-border"},a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Device name"),a.a.createElement("th",null,"Model"),a.a.createElement("th",null,"Connected"),a.a.createElement("th",null,"Storages"),a.a.createElement("th",null,"Alarm zone")),e.map(function(e){return a.a.createElement(G,{key:e.id,device:e})}))))}return a.a.createElement("p",null,"Loading")}}]),t}(a.a.Component),q=n(26),Z=Object(q.a)(function(e){return{stateRequest:e.stateRequest}},null)(N),P=n(46),W=n(48);function F(e){var t=e.component,n=Object(P.a)(e,["component"]);return a.a.createElement(E.a,Object.assign({},n,{render:function(e){return b.checkLogin()?a.a.createElement(t,e):a.a.createElement(W.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}var M=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement(m.a,null,a.a.createElement(L,null,a.a.createElement(f.a,null,a.a.createElement(E.a,{exact:!0,path:"/",component:function(){return a.a.createElement("p",null,"Test App")}}),a.a.createElement(E.a,{exact:!0,path:"/login",component:O}),a.a.createElement(F,{exact:!0,path:"/sites",component:_}),a.a.createElement(F,{path:"/sites/:siteId/alarmZones",component:C}),a.a.createElement(F,{path:"/sites/:siteId/devices",component:Z}),a.a.createElement(E.a,{component:y}))))}}]),t}(a.a.Component),z=n(18),B=n(35),J=Object(z.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.USER_LOGIN:return Object(B.a)({},e,{user:t.user});case v.GET_USER_LIST:return Object(B.a)({},e,{userList:t.userList});default:return e}},stateRequest:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch((arguments.length>1?arguments[1]:void 0).type){case v.FAIL:return{fail:!0};case v.PROCESS:return{process:!0};case v.DONE:return{process:!1,fail:!1};default:return e}}}),V=n(47),$=n(21),H=S.a.mark(Q),K=S.a.mark(X);function Q(){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($.c)(v.LOAD_USER_LIST,X);case 2:case"end":return e.stop()}},H)}function X(){var e;return S.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object($.b)({type:v.PROCESS});case 2:return t.next=4,Object($.a)(Y);case 4:if(!(e=t.sent)){t.next=12;break}return t.next=8,Object($.b)({type:v.DONE});case 8:return t.next=10,Object($.b)({userList:e,type:v.GET_USER_LIST});case 10:t.next=14;break;case 12:return t.next=14,Object($.b)({type:v.FAIL});case 14:case"end":return t.stop()}},K)}function Y(){return ee.apply(this,arguments)}function ee(){return(ee=Object(k.a)(S.a.mark(function e(){var t,n;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get(h+"/users");case 2:if(t=e.sent,!(n=t.data)||!Array.isArray(n)){e.next=6;break}return e.abrupt("return",n);case 6:return e.abrupt("return",!1);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}var te=Object(V.a)(),ne=function(e){return function(e){return function(t){console.log(t),e(t)}}},re=function(){var e=Object(z.a)(ne,te)(z.e)(J,{});return te.run(Q),e}();window.store=re;var ae=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(d.a,{store:re},a.a.createElement(M,null)))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(a.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[50,1,2]]]);
//# sourceMappingURL=main.43a92e32.chunk.js.map