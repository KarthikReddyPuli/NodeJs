(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(8),o=n.n(s),c=(n(14),n(1)),r=n(2),l=n(3),h=n(6),u=n(4),d=n(5),f=function(e){function t(){return Object(r.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("button",{onClick:this.props.onClick},this.props.name)}}]),t}(i.a.Component),p=function(e){function t(){return Object(r.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("input",{type:"text",value:this.props.value,onChange:this.props.onChange})}}]),t}(i.a.Component),v=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={list:[],newEntry:"",syncCount:0},n.handleChange=n.handleChange.bind(Object(c.a)(n)),n.handleClick=n.handleClick.bind(Object(c.a)(n)),n.saveFile=n.saveFile.bind(Object(c.a)(n)),n.clearAll=n.clearAll.bind(Object(c.a)(n)),n.sendReq(""),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){this.setState({newEntry:e.target.value})}},{key:"checkMatch",value:function(e){for(var t=0;t<this.state.list.length;t++)if(this.state.list[t]===e)return!1;return!0}},{key:"handleClick",value:function(){""!==this.state.newEntry&&this.checkMatch(this.state.newEntry)&&this.setState({list:this.state.list.concat(this.state.newEntry),newEntry:""})}},{key:"del",value:function(e){for(var t=[],n=0;n<this.state.list.length;n++)this.state.list[n]!==e&&t.push(this.state.list[n]);this.setState({list:t})}},{key:"sendReq",value:function(e){var t=new XMLHttpRequest,n=this;t.onreadystatechange=function(){4===this.readyState&&200===this.status&&(console.log(JSON.parse(this.responseText)),n.setState({list:JSON.parse(this.responseText),syncCount:n.state.syncCount+1}))},t.open("POST","https://desolate-castle-50423.herokuapp.com/?data="+e,!0),t.send()}},{key:"saveFile",value:function(){var e=JSON.stringify(this.state.list);this.sendReq(e)}},{key:"clearAll",value:function(){this.setState({list:[]})}},{key:"render",value:function(){var e=this,t=this.state.list.map((function(t){return i.a.createElement("li",{key:t},i.a.createElement(f,{name:"Delete",onClick:e.del.bind(e,t)})," ",t)}));return i.a.createElement("div",{id:"base"},i.a.createElement(f,{name:"Clear List",onClick:this.clearAll}),i.a.createElement(p,{value:this.state.newEntry,onChange:this.handleChange}),i.a.createElement(f,{name:"Add",onClick:this.handleClick}),i.a.createElement(f,{name:"Sync",onClick:this.saveFile}),i.a.createElement("ul",null,t),i.a.createElement("p",null,"Synced ",this.state.syncCount," times"))}}]),t}(i.a.Component),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(i.a.createElement(v,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");y?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):k(e)}))}}()},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.bd1e8e91.chunk.js.map