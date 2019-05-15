(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){e.exports=a(72)},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(31),o=a.n(c),l=a(2),s=a(3),i=a(5),m=a(4),u=a(6),p=a(14),d=a(15),h=a(7),b=a.n(h),f=a(12),v=a(35),E=a(18),y=a(13),O=a.n(y),C=r.a.createContext(),j=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(E.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==t.payload})});case"ADD_CONTACT":return Object(E.a)({},e,{contacts:[t.payload].concat(Object(v.a)(e.contacts))});case"UPDATE_CONTACT":return Object(E.a)({},e,{contacts:e.contacts.map(function(e){return e.id===t.payload.id?e=t.payload:e})});default:return e}},N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){a.setState(function(t){return j(t,e)})}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(C.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),g=C.Consumer,k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},a.showOnClick=function(){a.setState({showContactInfo:!a.state.showContactInfo})},a.deleteOnClick=function(){var e=Object(f.a)(b.a.mark(function e(t,a){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a({type:"DELETE_CONTACT",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),a({type:"DELETE_CONTACT",payload:t});case 9:case"end":return e.stop()}},e,null,[[0,6]])}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,n=t.name,c=t.email,o=t.phone,l=this.state.showContactInfo;return r.a.createElement(g,null,function(t){return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null," ",r.a.createElement("span",{onClick:e.showOnClick},n," ",r.a.createElement("i",{className:"fas fa-sort-down",style:{cursor:"pointer"}})),r.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"darkred"},onClick:e.deleteOnClick.bind(e,a,t.dispatch)}),r.a.createElement(p.b,{to:"contact/edit/".concat(a)},r.a.createElement("i",{className:"fas fa-edit",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}}))),l?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",c),r.a.createElement("li",{className:"list-group-item"},"Phone: ",o)):null)})}}]),t}(n.Component),w=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(g,null,function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2 text-info"},"Contact List"),e.contacts.map(function(e){return r.a.createElement(k,{key:e.id,contact:e})}))})}}]),t}(n.Component),x=function(e){var t=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-info mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement(p.b,{to:"/",className:"navbar-brand"},t),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"})," Add contact")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"})," About"))))))};x.defaultProps={branding:"My App"};var S=x,A=a(16),T=a(34),D=a.n(T);function P(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:e.name},e.label),r.a.createElement("input",{className:D()("form-control",{"is-invalid":e.error}),type:e.type,name:e.name,placeholder:e.placeholder,value:e.value,onChange:e.onChange}),e.error&&r.a.createElement("div",{className:"invalid-feedback"},e.error))}P.defaultProps={type:"text"};var M=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.onChange=function(e){a.setState(Object(A.a)({},e.target.name,e.target.value))},a.onSubmit=function(){var e=Object(f.a)(b.a.mark(function e(t,n){var r,c,o,l,s,i;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return a.setState({errors:{name:"Name is required."}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{email:"Email is required."}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return a.setState({errors:{phone:"Phone is required."}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},e.next=14,O.a.post("https://jsonplaceholder.typicode.com/users",s);case 14:i=e.sent,t({type:"ADD_CONTACT",payload:i.data}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 18:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(g,null,function(t){return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,t.dispatch)},r.a.createElement(P,{label:"Name",name:"name",placeholder:"Firstname Lastname",value:e.state.name,onChange:e.onChange,error:e.state.errors.name}),r.a.createElement(P,{label:"E-Mail",type:"email",name:"email",placeholder:"example@mail.com",value:e.state.email,onChange:e.onChange,error:e.state.errors.email})," ",r.a.createElement(P,{label:"Phone",name:"phone",placeholder:"+49 1111 111 11 11",value:e.state.phone,onChange:e.onChange,error:e.state.errors.phone}),r.a.createElement("div",{className:"text-center"},r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-secondary"})))))})}}]),t}(n.Component),q=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.onChange=function(e){a.setState(Object(A.a)({},e.target.name,e.target.value))},a.onSubmit=function(){var e=Object(f.a)(b.a.mark(function e(t,n){var r,c,o,l,s,i,m;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return a.setState({errors:{name:"Name is required."}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{email:"Email is required."}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return a.setState({errors:{phone:"Phone is required."}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},i=a.props.match.params.id,e.next=15,O.a.put("https://jsonplaceholder.typicode.com/users/".concat(i),s);case 15:m=e.sent,t({type:"UPDATE_CONTACT",payload:m.data}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 19:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(b.a.mark(function e(){var t,a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,O.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,this.setState({name:a.data.name,email:a.data.email,phone:a.data.phone});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement(g,null,function(t){return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,t.dispatch)},r.a.createElement(P,{label:"Name",name:"name",placeholder:"Firstname Lastname",value:e.state.name,onChange:e.onChange,error:e.state.errors.name}),r.a.createElement(P,{label:"E-Mail",type:"email",name:"email",placeholder:"example@mail.com",value:e.state.email,onChange:e.onChange,error:e.state.errors.email})," ",r.a.createElement(P,{label:"Phone",name:"phone",placeholder:"+49 1111 111 11 11",value:e.state.phone,onChange:e.onChange,error:e.state.errors.phone}),r.a.createElement("div",{className:"text-center"},r.a.createElement("input",{type:"submit",value:"Edit Contact",className:"btn btn-secondary"})))))})}}]),t}(n.Component);function L(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4 text-info"},"About"),r.a.createElement("p",{className:"lead"},"Simple app to manage contact"),r.a.createElement("p",{className:"text-secondary"},'Made by Laura Sochaczewski in the Udemy course "React Front To Back"'))}function _(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry, the page you are looking for was not found here."))}var F=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={test:"test"},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("componentDidMount"),fetch("https://jsonplaceholder.typicode.com/posts/1").then(function(e){return e.json()}).then(function(t){return e.setState({title:t.title,body:t.body})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Test Component"),r.a.createElement("p",null,this.state.title),r.a.createElement("p",null,this.state.body))}}]),t}(n.Component),I=(a(70),a(71),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(N,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(S,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container-fluid"},r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:w}),r.a.createElement(d.a,{path:"/contact/add",component:M}),r.a.createElement(d.a,{path:"/contact/edit/:id",component:q}),r.a.createElement(d.a,{path:"/about",component:L}),r.a.createElement(d.a,{path:"/test",component:F}),r.a.createElement(d.a,{component:_}))))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.ee6ba66f.chunk.js.map