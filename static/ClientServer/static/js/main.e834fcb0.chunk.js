(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(8),s=n.n(o),r=(n(14),n(1)),c=n(2),l=n(3),h=n(6),u=n(4),d=n(5),f=function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("button",{onClick:this.props.onClick},this.props.name)}}]),t}(i.a.Component),v=function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("input",{type:"text",value:this.props.value,onChange:this.props.onChange})}}]),t}(i.a.Component),p=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={list:[],newEntry:"",blank:0},n.handleChange=n.handleChange.bind(Object(r.a)(n)),n.handleClick=n.handleClick.bind(Object(r.a)(n)),n.saveFile=n.saveFile.bind(Object(r.a)(n)),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){this.setState({newEntry:e.target.value})}},{key:"checkMatch",value:function(e){for(var t=0;t<this.state.list.length;t++)if(this.state.list[t]===e)return!1;return!0}},{key:"handleClick",value:function(){""!==this.state.newEntry&&this.checkMatch(this.state.newEntry)&&this.setState({list:this.state.list.concat(this.state.newEntry),newEntry:""})}},{key:"del",value:function(e){for(var t=[],n=0;n<this.state.list.length;n++)this.state.list[n]!==e&&t.push(this.state.list[n]);this.setState({list:t})}},{key:"saveFile",value:function(){for(var e="",t=0;t<this.state.list.length;t++)e=e+"~"+this.state.list[t];var n=new XMLHttpRequest;n.onreadystatechange=function(){4===this.readyState&&200===this.status&&(document.getElementById("savestat").innerHTML=this.responseText)},n.open("POST","https://desolate-castle-50423.herokuapp.com/?data="+e,!0),n.send()}},{key:"render",value:function(){var e=this,t=this.state.list.map((function(t){return i.a.createElement("li",{key:t},i.a.createElement(f,{name:"Delete",onClick:e.del.bind(e,t)})," ",t)}));return i.a.createElement("div",null,i.a.createElement(v,{value:this.state.newEntry,onChange:this.handleChange}),i.a.createElement(f,{name:"Add",onClick:this.handleClick}),i.a.createElement(f,{name:"Save",onClick:this.saveFile}),i.a.createElement("ul",null,t),i.a.createElement("p",{id:"savestat"}))}}]),t}(i.a.Component),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(i.a.createElement(p,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");g?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):k(e)}))}}()},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.e834fcb0.chunk.js.map