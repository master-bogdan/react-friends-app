(this["webpackJsonpfriends-app"]=this["webpackJsonpfriends-app"]||[]).push([[0],{21:function(e,t,n){},28:function(e,t,n){e.exports=n(43)},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),c=n.n(o),s=(n(33),n(5)),l=n(6),i=n(8),u=n(7),m=(n(34),n(35),n(51)),p=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(m.a,{className:"header",bg:"light",variant:"light"},r.a.createElement(m.a.Brand,{href:"unchor_is_valid"},"Friends App"),r.a.createElement(m.a.Collapse,{className:"justify-content-end"},r.a.createElement(m.a.Text,null,"Signed in as: ",r.a.createElement("a",{href:"unchor_is_valid"},this.props.name))))}}]),n}(a.Component),h=n(45),f=n(50),d=n(53),E=(n(38),a.Component,n(40),n(49)),g=n(24),v=(n(41),n(52)),y=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(v.a,null,"MALE"===this.props.gender?r.a.createElement(v.a.Title,{className:"card-title-male"},this.props.name):r.a.createElement(v.a.Title,null,this.props.name),r.a.createElement(v.a.Body,null,r.a.createElement(v.a.Img,{variant:"top",src:this.props.image}),r.a.createElement(v.a.Text,null,this.props.gender),r.a.createElement(v.a.Text,null,this.props.age),r.a.createElement(v.a.Text,null,this.props.city),r.a.createElement(v.a.Text,null,this.props.country)))}}]),n}(a.Component),b=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Ooops!!! ",this.props.error," ",r.a.createElement("br",null)," Please reload page"))}}]),n}(r.a.Component),O=(n(21),n(46)),j=n(47),B=n(48),S=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).sortByYoungestAge=function(e){return e.sort((function(e,t){return e.dob.age-t.dob.age}))},e.sortByOldestAge=function(e){return e.sort((function(e,t){return t.dob.age-e.dob.age}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"age-filter"},r.a.createElement("p",null,"By Age"),r.a.createElement(O.a,{"aria-label":"Sort By Age"},r.a.createElement(d.a,{variant:"outline-warning",onClick:function(){return e.props.handlerSort(e.sortByYoungestAge(e.props.users))}},r.a.createElement(j.a,null)),r.a.createElement(d.a,{variant:"outline-warning",onClick:function(){return e.props.handlerSort(e.sortByOldestAge(e.props.users))}},r.a.createElement(B.a,null))))}}]),n}(a.Component),k=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).sortByLastNameUp=function(e){return console.log(e),e.sort((function(e,t){return e.name.last>t.name.last?1:-1}))},e.sortByLastNameDown=function(e){return console.log(e[0].name.last),e.sort((function(e,t){return t.name.last<e.name.last?-1:1}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"name-filter"},r.a.createElement("p",null,"By Last Name"),r.a.createElement(O.a,{"aria-label":"Sort By Name"},r.a.createElement(d.a,{variant:"outline-warning",onClick:function(){return e.props.handlerSort(e.sortByLastNameUp(e.props.users))}},r.a.createElement(j.a,null)),r.a.createElement(d.a,{variant:"outline-warning",onClick:function(){return e.props.handlerSort(e.sortByLastNameDown(e.props.users))}},r.a.createElement(B.a,null))))}}]),n}(a.Component),w=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).getResource=function(){fetch("https://randomuser.me/api/?results=12&nat=DE,GB,AU&page=1&seed=c").then((function(e){return e.json()})).then((function(e){return a.setState({users:e.results})})).catch((function(e){return a.setState({hasError:!0,error:"".concat(e)})}))},a.handlerSort=function(e){a.setState({users:e})},a.state={users:[],hasError:!1,error:""},a.getResource(),a}return Object(l.a)(n,[{key:"render",value:function(){return this.state.hasError?r.a.createElement(b,{error:this.state.error}):r.a.createElement(h.a,{fluid:!0},r.a.createElement(E.a,null,r.a.createElement(g.a,{className:"filter",xs:3,md:2},r.a.createElement("div",{className:"sort"},r.a.createElement("h4",null,"FILTER"),r.a.createElement(S,{users:this.state.users,handlerSort:this.handlerSort}),r.a.createElement(k,{users:this.state.users,handlerSort:this.handlerSort}))),r.a.createElement(g.a,{className:"friends-list",xs:9,md:10},this.state.users.map((function(e,t){return r.a.createElement(y,{key:t,name:"".concat(e.name.first," ").concat(e.name.last),image:e.picture.large,gender:"".concat(e.gender.toUpperCase()),age:"Age: ".concat(e.dob.age," years"),city:"City: ".concat(e.location.city),country:"Country: ".concat(e.location.country)})})))))}}]),n}(a.Component),C=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleLogin=function(e,t){console.log(e,t),a.setState({name:e}),a.setState({login:t})},a.state={name:"",login:!1},a}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,{name:this.state.name}),r.a.createElement(w,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(42);c.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.7f369a75.chunk.js.map