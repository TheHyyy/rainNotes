webpackJsonp([1],{Ats4:function(t,e){},Emh2:function(t,e){},Ibx3:function(t,e){},Jdfc:function(t,e){t.exports={baseURL:"//note-server.hunger-valley.com"}},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),r=s("//Fk"),o=s.n(r),i=s("mtWM"),a=s.n(i),l=s("Jdfc"),u=s.n(l);function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new o.a(function(n,r){var o={url:t,method:e,validateStatus:function(t){return t>=200&&t<300||400===t}};"get"===e.toLowerCase()?o.params=s:o.data=s,a()(o).then(function(t){200===t.status?n(t.data):(console.error(t.data),r(t.data))}).catch(function(t){console.error({msg:"网络异常"}),r({msg:"网络异常"})})})}console.log(u.a),a.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",a.a.defaults.baseURL=u.a.baseURL,a.a.defaults.withCredentials=!0;var h="/auth/register",v="/auth/login",d="/auth/logout",g="/auth",p=function(t){var e=t.username,s=t.password;return c(h,"POST",{username:e,password:s})},m=function(t){var e=t.username,s=t.password;return c(v,"POST",{username:e,password:s})},f=function(){return c(d)},_=function(){return c(g)},w={data:function(){return{username:"未登录"}},created:function(){_().then(function(t){console.log("我是Avatar输出的："),console.log(t)})},computed:{slug:function(){return this.username.charAt(0)}}},k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",{attrs:{title:this.username}},[this._v(this._s(this.slug))])])},staticRenderFns:[]};var b={components:{avatar:s("VU/8")(w,k,!1,function(t){s("iG7U")},"data-v-86787e32",null).exports},methods:{logout:function(){console.log("logout"),f().then(function(t){console.log(t)})}}},E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"sidebar"}},[e("avatar"),this._v(" "),e("div",{staticClass:"icons"},[e("router-link",{attrs:{to:"/note/1",title:"笔记"}},[e("i",{staticClass:"iconfont icon-note"})]),this._v(" "),e("router-link",{attrs:{to:"/notebooks",title:"笔记本"}},[e("i",{staticClass:"iconfont icon-notebook"})]),this._v(" "),e("router-link",{attrs:{to:"/trash/2",title:"回收站"}},[e("i",{staticClass:"iconfont icon-trash"})])],1),this._v(" "),e("div",{staticClass:"logout"},[e("i",{staticClass:"iconfont icon-logout",on:{click:this.logout}})])],1)},staticRenderFns:[]};var x={name:"app",components:{sidebar:s("VU/8")(b,E,!1,function(t){s("Ibx3")},"data-v-b89aa64e",null).exports}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("sidebar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var R=s("VU/8")(x,C,!1,function(t){s("q3Vn")},null,null).exports,$=s("/ocq"),y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),s("br"),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var L=s("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},y,!1,function(t){s("hxTO")},"data-v-18b56f82",null).exports;_().then(function(t){console.log(t)});var j={data:function(){return{isShowLogin:!0,isShowRegister:!1,login:{username:"hunger",password:"",notice:"输入用户名和密码",isError:!1},register:{username:"",password:"",notice:"创建账号后，请记住用户名和密码",isError:!1}}},methods:{showLogin:function(){this.isShowLogin=!0,this.isShowRegister=!1},showRegister:function(){this.isShowLogin=!1,this.isShowRegister=!0},onRegister:function(){return/^[\w\u4e00-\u9fa5]{3,15}$/.test(this.register.username)?/^.{6,16}$/.test(this.register.password)?(this.register.isError=!1,this.register.notice="",console.log("start register..., username: "+this.register.username+" , password: "+this.register.password),void p({username:this.register.username,password:this.register.password}).then(function(t){console.log(t)})):(this.register.isError=!0,void(this.register.notice="密码长度为6~16个字符")):(this.register.isError=!0,void(this.register.notice="用户名3~15个字符，仅限于字母数字下划线中文"))},onLogin:function(){return/^[\w\u4e00-\u9fa5]{3,15}$/.test(this.login.username)?/^.{6,16}$/.test(this.login.password)?(this.login.isError=!1,this.login.notice="",console.log("start login..., username: "+this.login.username+" , password: "+this.login.password),void m({username:this.login.username,password:this.login.password}).then(function(t){console.log(t)})):(this.login.isError=!0,void(this.login.notice="密码长度为6~16个字符")):(this.login.isError=!0,void(this.login.notice="用户名3~15个字符，仅限于字母数字下划线中文"))}}},U={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"login"}},[s("div",{staticClass:"modal-mask"},[s("div",{staticClass:"modal-wrapper"},[s("div",{staticClass:"modal-container"},[s("div",{staticClass:"main"}),t._v(" "),s("div",{staticClass:"form"},[s("h3",{on:{click:t.showRegister}},[t._v("创建账户")]),t._v(" "),s("transition",{attrs:{name:"slide"}},[s("div",{staticClass:"register",class:{show:t.isShowRegister}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.register.username,expression:"register.username"}],attrs:{type:"text",placeholder:"用户名"},domProps:{value:t.register.username},on:{input:function(e){e.target.composing||t.$set(t.register,"username",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.register.password,expression:"register.password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:t.register.password},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onRegister(e)},input:function(e){e.target.composing||t.$set(t.register,"password",e.target.value)}}}),t._v(" "),s("p",{class:{error:t.register.isError}},[t._v(" "+t._s(t.register.notice))]),t._v(" "),s("div",{staticClass:"button",on:{click:t.onRegister}},[t._v("创建账号")])])]),t._v(" "),s("h3",{on:{click:t.showLogin}},[t._v("登录")]),t._v(" "),s("transition",{attrs:{name:"slide"}},[s("div",{staticClass:"login",class:{show:t.isShowLogin}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.login.username,expression:"login.username"}],attrs:{type:"text",placeholder:"输入用户名"},domProps:{value:t.login.username},on:{input:function(e){e.target.composing||t.$set(t.login,"username",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:t.login.password},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onLogin(e)},input:function(e){e.target.composing||t.$set(t.login,"password",e.target.value)}}}),t._v(" "),s("p",{class:{error:t.login.isError}},[t._v(" "+t._s(t.login.notice))]),t._v(" "),s("div",{staticClass:"button",on:{click:t.onLogin}},[t._v(" 登录")])])])],1)])])])])},staticRenderFns:[]};var S=s("VU/8")(j,U,!1,function(t){s("Emh2")},null,null).exports,V={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"notebook-list"}},[e("h1",[this._v(this._s(this.msg))]),this._v(" "),e("ul",[e("li",[e("router-link",{attrs:{to:"/note/1"}},[this._v("笔记本1")])],1),this._v(" "),e("li",[e("router-link",{attrs:{to:"/note/6"}},[this._v("笔记本6")])],1)])])},staticRenderFns:[]};var F=s("VU/8")({name:"Login",data:function(){return{msg:"笔记本列表"}}},V,!1,function(t){s("Ats4")},"data-v-77296c54",null).exports,T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"note-detail"}},[e("h1",[this._v(this._s(this.msg)+" : "+this._s(this.$route.params.noteId))])])},staticRenderFns:[]};var A=s("VU/8")({name:"Login",data:function(){return{msg:"笔记详情页"}}},T,!1,function(t){s("hXw4")},"data-v-94135cc4",null).exports,O={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"trash-detail"}},[e("h1",[this._v(this._s(this.msg)+" : "+this._s(this.$route.params.noteId))])])},staticRenderFns:[]};var P=s("VU/8")({name:"Login",data:function(){return{msg:"回收站笔记详情页"}}},O,!1,function(t){s("jeGx")},"data-v-50e67e33",null).exports;n.a.use($.a);var I=new $.a({routes:[{path:"/",name:"HelloWorld",component:L},{path:"/login",component:S},{path:"/notebooks",component:F},{path:"/note/:noteId",component:A},{path:"/trash/:noteId",component:P}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:I,components:{App:R},template:"<App/>"})},hXw4:function(t,e){},hxTO:function(t,e){},iG7U:function(t,e){},jeGx:function(t,e){},q3Vn:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.7d78e4641a75484051ab.js.map