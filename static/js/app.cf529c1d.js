(function(t){function e(e){for(var a,r,n=e[0],l=e[1],c=e[2],u=0,p=[];u<n.length;u++)r=n[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,r=1;r<s.length;r++){var l=s[r];0!==i[l]&&(a=!1)}a&&(o.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},i={app:0},o=[];function r(t){return n.p+"../static/js/"+({about:"about"}[t]||t)+"."+{about:"6235d962"}[t]+".js"}function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.e=function(t){var e=[],s=i[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise((function(e,a){s=i[t]=[e,a]}));e.push(s[2]=a);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.src=r(t);var c=new Error;o=function(e){l.onerror=l.onload=null,clearTimeout(u);var s=i[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",c.name="ChunkLoadError",c.type=a,c.request=o,s[1](c)}i[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0152":function(t,e,s){"use strict";var a=s("042d"),i=s.n(a);i.a},"034f":function(t,e,s){"use strict";var a=s("85ec"),i=s.n(a);i.a},"042d":function(t,e,s){},"27ec":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{attrs:{id:"nav"}},[s("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),s("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" | "),s("router-link",{attrs:{to:"/login"}},[t._v("Login")])],1),s("router-view")],1)},o=[],r={beforeCreate(){this.$store.dispatch("setBearer"),this.$store.dispatch("getUserData")}},n=r,l=(s("034f"),s("2877")),c=Object(l["a"])(n,i,o,!1,null,null,null),u=c.exports,d=s("8c4f"),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",[t._v("Username: "+t._s(t.user.username)+" Email: "+t._s(t.user.email))]),t._m(0),s("main",{staticClass:"container"},[s("div",{staticClass:"row mb-3 d-flex justify-content-center"},[s("div",{staticClass:"col-5-lg col-8-md col-12-sm bg-light shadow p-2 rounded d-flex justify-content-center"},[s("list-form")],1)]),s("div",{staticClass:"row d-flex justify-content-center"},[s("div",{staticClass:"col-10"},[s("div",{staticClass:"card-columns border pt-3 px-3",attrs:{id:"lists"}},t._l(t.lists,(function(t){return s("list",{key:t.id,attrs:{list:t}})})),1)])])]),s("footer")])},m=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"py-5"},[s("div",{staticClass:"text-center"},[s("h1",{staticClass:"title"},[t._v("TaskMaster")])])])}],h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list-form"},[s("form",{staticClass:"form-inline",on:{submit:function(e){return e.preventDefault(),t.submitList(e)}}},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold mr-1",attrs:{for:"title"}},[t._v("List Name: ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control mr-1",attrs:{type:"text",name:"title",id:"",placeholder:"Todo, Groceries etc ...","aria-describedby":"helpId"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),s("label",{staticClass:"mr-1",attrs:{for:"listColor"}},[s("span",{staticClass:"font-weight-bold mr-1"},[t._v("Color: ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.color,expression:"color"}],staticClass:"mr-1",attrs:{id:"chooseColor",type:"color",name:"listColor",value:"#ff0000"},domProps:{value:t.color},on:{input:function(e){e.target.composing||(t.color=e.target.value)}}})]),t._m(0)])])])},f=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[s("i",{staticClass:"fas fa-plus"})])}],g={name:"list-form",data(){return{title:"",color:"#9932CC"}},computed:{},methods:{submitList(){this.$store.dispatch("createNewList",{title:this.title,color:this.color}),this.title=""}},components:{}},v=g,k=(s("a8ea"),Object(l["a"])(v,h,f,!1,null,"11f56fb8",null)),w=k.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list"},[s("div",{staticClass:"card rounded card-width",attrs:{id:""}},[s("div",{staticClass:"card-body p-0"},[s("div",{staticClass:"d-block",style:"background-color: "+t.list.color},[s("span",{staticClass:"card-title d-inline text-center ml-2 mt-2 gochi-hand-font list-title",attrs:{id:" "}},[t._v(" "+t._s(t.list.title)+" ")]),s("button",{staticClass:"btn d-inline float-right remove-list",attrs:{type:"button"},on:{click:t.deleteList}},[t._v(" X ")])]),s("p",{staticClass:"card-text"},t._l(t.tasks,(function(t){return s("Task",{key:t.id,attrs:{task:t}})})),1),s("button",{directives:[{name:"show",rawName:"v-show",value:t.tasksCompleted,expression:"tasksCompleted"}],staticClass:"btn btn-outline-danger ml-2 p-1",attrs:{type:"button"},on:{click:t.removeCompleted}},[s("small",[t._v("Remove Completed")])]),s("form",{staticClass:"form-inline mx-1 my-1",attrs:{"submit.prevent":""}},[s("div",{},[s("label",{attrs:{for:"task"}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control d-inline",attrs:{type:"text",name:"task",placeholder:"new task","aria-describedby":"new task"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),s("button",{staticClass:"btn btn-outline-info ml-3",attrs:{type:"button"},on:{click:t.createNewTask}},[s("i",{staticClass:"fas fa-plus    "})])])])])])])},C=[],y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"task"},[s("div",{staticClass:"pl-5 my-1 d-flex justify-content-between item-div"},[s("div",{staticClass:"text-left d-inline task-div align-self-center "},[s("label",{staticClass:"checkbox-container",attrs:{id:""}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.task.complete,expression:"task.complete"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.task.complete)?t._i(t.task.complete,null)>-1:t.task.complete},on:{click:t.updateTask,change:function(e){var s=t.task.complete,a=e.target,i=!!a.checked;if(Array.isArray(s)){var o=null,r=t._i(s,o);a.checked?r<0&&t.$set(t.task,"complete",s.concat([o])):r>-1&&t.$set(t.task,"complete",s.slice(0,r).concat(s.slice(r+1)))}else t.$set(t.task,"complete",i)}}}),s("span",{staticClass:"checkmark"}),s("span",{staticClass:"item-title"},[t._v(t._s(t.task.title))])])]),s("div",{staticClass:"d-inline pr-3"},[s("button",{staticClass:"btn ml-3 remove-task text-right",on:{click:t.deleteTask}},[s("i",{staticClass:"fas fa-trash-alt"})])])])])},_=[],x={name:"task",data(){return{}},props:["task"],computed:{},methods:{updateTask(){this.task.complete=!this.task.complete,this.$store.dispatch("updateTask",this.task)},deleteTask(){this.$store.dispatch("deleteTask",this.task)}},components:{}},T=x,P=(s("cbf1"),Object(l["a"])(T,y,_,!1,null,"2c862f21",null)),L=P.exports,U={name:"List",mounted(){this.$store.dispatch("getTasksByListId",this.list.id)},data(){return{title:""}},props:["list"],computed:{tasks(){return this.$store.state.TaskStore.tasks[this.list.id]},tasksCompleted(){return!!this.tasks&&this.tasks.filter(t=>1==t.complete).length>0}},methods:{submitTask(){},deleteList(){this.$store.dispatch("deleteList",this.list.id)},createNewTask(){this.$store.dispatch("createNewTask",{title:this.title,listId:this.list.id})},removeCompleted(){for(let t=0;t<this.tasks.length;t++){let e=this.tasks[t];e.complete&&this.$store.dispatch("deleteTask",e)}}},components:{Task:L}},$=U,A=(s("0152"),Object(l["a"])($,b,C,!1,null,"2810addf",null)),j=A.exports,N={name:"Home",mounted(){this.$store.state.isAuthenticated&&this.$store.dispatch("getAllLists")},components:{ListForm:w,List:j},computed:{user(){return this.$store.state.authUser},lists(){return this.$store.state.ListStore.lists},isAuthenticated(){return this.$store.state.isAuthenticated}},watch:{isAuthenticated:function(){this.$store.dispatch("getAllLists")}}},S=N,E=(s("c6fb"),Object(l["a"])(S,p,m,!1,null,"8ed3438a",null)),I=E.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"row d-flex justify-content-center"},[s("div",{staticClass:"col-6"},[t._m(0),s("div",{staticClass:"tab-content"},[s("div",{staticClass:"tab-pane fade m-2",attrs:{id:"login"}},[s("h4",[t._v("Login")]),s("form",{staticClass:" login form"},[s("div",{staticClass:"field form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.loginUsername,expression:"loginUsername"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Username",autofocus:"autofocus",maxlength:"150",id:"login-username"},domProps:{value:t.loginUsername},on:{input:function(e){e.target.composing||(t.loginUsername=e.target.value)}}})]),s("div",{staticClass:"field form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.loginPassword,expression:"loginPassword"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password",id:"login-password"},domProps:{value:t.loginPassword},on:{input:function(e){e.target.composing||(t.loginPassword=e.target.value)}}})]),s("button",{staticClass:"btn btn-primary m-1",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.authenticate(e)}}},[t._v(" Log In ")])])]),s("div",{staticClass:"tab-pane fade m-2",attrs:{id:"signup"}},[s("h4",[t._v("Sign Up")]),s("form",{staticClass:"signup form"},[s("div",{staticClass:"field form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.signupUsername,expression:"signupUsername"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Username",autofocus:"autofocus",maxlength:"150",id:"signup-username"},domProps:{value:t.signupUsername},on:{input:function(e){e.target.composing||(t.signupUsername=e.target.value)}}})]),s("div",{staticClass:"field form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.signupEmail,expression:"signupEmail"}],staticClass:"form-control",attrs:{type:"email",placeholder:"email",id:"signup-email"},domProps:{value:t.signupEmail},on:{input:function(e){e.target.composing||(t.signupEmail=e.target.value)}}})]),s("div",{staticClass:"field form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.signupPassword,expression:"signupPassword"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password",id:"signup-password"},domProps:{value:t.signupPassword},on:{input:function(e){e.target.composing||(t.signupPassword=e.target.value)}}})]),s("small",{directives:[{name:"show",rawName:"v-show",value:t.signupPassword!=t.signupPasswordCheck,expression:"signupPassword != signupPasswordCheck"}],staticStyle:{color:"red"}},[t._v("Password Don't Match")]),s("div",{staticClass:"field form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.signupPasswordCheck,expression:"signupPasswordCheck"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Confirm Password",id:"signup-password-check"},domProps:{value:t.signupPasswordCheck},on:{input:function(e){e.target.composing||(t.signupPasswordCheck=e.target.value)}}})]),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.signup(e)}}},[t._v(" Sign Up ")])])]),s("div",{staticClass:"tab-pane fade m-2",attrs:{id:"logout"}},[s("button",{staticClass:"btn btn-danger",on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v(" Logout ")])])])])])])},B=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex justify-content-center"},[s("ul",{staticClass:"nav nav-tabs"},[s("li",{staticClass:"mx-2 active"},[s("a",{attrs:{"data-toggle":"tab",href:"#login"}},[t._v("Login")])]),s("li",{staticClass:"mx-2"},[s("a",{attrs:{"data-toggle":"tab",href:"#signup"}},[t._v("Sign Up")])]),s("li",{staticClass:"mx-2"},[s("a",{attrs:{"data-toggle":"tab",href:"#logout"}},[t._v("Logout")])])])])}],D=s("bc3a"),H=s.n(D),F={data(){return{loginUsername:"",loginPassword:"",signupUsername:"",signupEmail:"",signupPassword:"",signupPasswordCheck:""}},methods:{authenticate(){this.$store.dispatch("login",{username:this.loginUsername,password:this.loginPassword})},signup(){this.$store.dispatch("createNewUser",{username:this.signupUsername,email:this.signupEmail,password:this.signupPassword})},logout(){this.$store.dispatch("logout")}}},J=F,R=Object(l["a"])(J,O,B,!1,null,null,null),M=R.exports;a["a"].use(d["a"]);const W=[{path:"/",name:"Home",component:I},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}},{path:"/login",name:"Login",component:M}],z=new d["a"]({routes:W});var X=z,q=s("2f62");let G=window.location.host.includes("127.0.0.1")?"http://127.0.0.1:8000/":"/";H.a.defaults.xsrfCookieName="csrftoken",H.a.defaults.xsrfHeadername="X-CSRFToken";let K=H.a.create({baseURL:G+"lists/",timeout:3e3,withCredentials:!0,headers:{"Content-Type":"application/json"},xhrFields:{withCredentials:!0}});const Q={state:{lists:[]},mutations:{setAllLists(t,e){t.lists=e}},actions:{setBearer({}){K.defaults.headers.authorization="JWT "+localStorage.getItem("token")},async getAllLists({commit:t,dispatch:e}){try{let e=await K.get("");t("setAllLists",e.data)}catch(s){console.error(s)}},async createNewList({commit:t,dispatch:e},s){try{await K.post("",s);e("getAllLists")}catch(a){console.error(a)}},async deleteList({dispatch:t},e){try{await K.delete(""+e),t("getAllLists")}catch(s){console.error(s)}},clearLists({commit:t}){t("setAllLists",[])}}};let V=window.location.host.includes("127.0.0.1")?"http://127.0.0.1:8000/":"/";H.a.defaults.xsrfCookieName="csrftoken",H.a.defaults.xsrfHeadername="X-CSRFToken";let Y=H.a.create({baseURL:V+"lists/",timeout:3e3,withCredentials:!0,headers:{Authorization:"JWT "+localStorage.getItem("token"),"Content-Type":"application/json"},xhrFields:{withCredentials:!0}});const Z={state:{tasks:[]},mutations:{setAllTasks(t,e){a["a"].set(t.tasks,e.listId,e.tasks)}},actions:{setBearer({}){Y.defaults.headers.authorization="JWT "+localStorage.getItem("token")},async getTasksByListId({commit:t,dispatch:e},s){try{let e=await Y.get(s+"/tasks");console.log(e.data),t("setAllTasks",{listId:s,tasks:e.data})}catch(a){console.error(a)}},async createNewTask({commit:t,dispatch:e},s){try{await Y.post(s.listId+"/tasks/",s);e("getTasksByListId",s.listId)}catch(a){console.error(a)}},async updateTask({dispatch:t},e){try{await Y.put(e.list_id+"/tasks/"+e.id+"/",e);t("getTasksByListId",e.list_id)}catch(s){console.error(s)}},async deleteTask({dispatch:t},e){try{await Y.delete(e.list_id+"/tasks/"+e.id+"/");t("getTasksByListId",e.list_id)}catch(s){}}}};a["a"].use(q["a"]),H.a.defaults.xsrfCookieName="csrftoken",H.a.defaults.xsrfHeadername="X-CSRFToken";let tt=window.location.host.includes("127.0.0.1")?"http://127.0.0.1:8000/":"/",et=H.a.create({baseURL:tt,timeout:3e3,withCredentials:!0,headers:{"Content-Type":"application/json"},xhrFields:{withCredentials:!0}});var st=new q["a"].Store({state:{authUser:{},isAuthenticated:!1,jwt:localStorage.getItem("token"),endpoints:{refrshJWT:"http://127.0.0.1:8000/auth/refresh_token/",baseUrl:"http://127.0.0.1:8000/"}},mutations:{setAuthUser(t,{authUser:e,isAuthenticated:s}){a["a"].set(t,"authUser",e),a["a"].set(t,"isAuthenticated",s)},updateToken(t,e){localStorage.setItem("token",e),t.jwt=e},removeToken(t){localStorage.removeItem("token"),t.jwt=null}},actions:{setBearer({}){et.defaults.headers.authorization="JWT "+localStorage.getItem("token")},async login({commit:t,dispatch:e},s){try{let a=await et.post("auth/obtain_token/",s);t("updateToken",a.data.token),e("setBearer"),e("getUserData")}catch(a){console.error(a)}},async getUserData({commit:t,dispatch:e}){try{let s=await et.get("user");t("setAuthUser",{authUser:s.data,isAuthenticated:!0}),e("setBearer"),X.push({name:"Home"})}catch(s){console.error(s)}},async createNewUser({commit:t,dispatch:e},s){try{await H.a.post(this.state.endpoints.baseUrl+"user/create/",s);e("login",s)}catch(a){console.error(a)}},async logout({commit:t,dispatch:e}){t("setAuthUser",{authUser:{},isAuthenticated:!1}),t("removeToken"),e("clearLists"),X.push({name:"Home"})}},modules:{ListStore:Q,TaskStore:Z}});a["a"].config.productionTip=!1,new a["a"]({router:X,store:st,render:function(t){return t(u)}}).$mount("#app")},"85ec":function(t,e,s){},a8ea:function(t,e,s){"use strict";var a=s("27ec"),i=s.n(a);i.a},c43a:function(t,e,s){},c6fb:function(t,e,s){"use strict";var a=s("d286"),i=s.n(a);i.a},cbf1:function(t,e,s){"use strict";var a=s("c43a"),i=s.n(a);i.a},d286:function(t,e,s){}});
//# sourceMappingURL=app.cf529c1d.js.map