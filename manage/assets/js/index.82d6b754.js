(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["index"],{1689:function(t,e,a){"use strict";var s=a("71fe"),n=a.n(s);n.a},"1e4b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index"},[a("HeadNav"),a("LeftMenu"),a("div",{staticClass:"rightContainer"},[a("router-view")],1)],1)},n=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"head-nav"},[s("el-row",[s("el-col",{staticClass:"logo-container",attrs:{span:6}},[s("img",{staticClass:"logo",attrs:{src:a("cf05"),alt:""}}),s("span",{staticClass:"title"},[t._v("后台管理系统")])]),s("el-col",{staticClass:"user",attrs:{span:6}},[s("div",{staticClass:"userinfo"},[s("img",{staticClass:"avatar",attrs:{src:t.user.avatar,alt:""}}),s("div",{staticClass:"welcome"},[s("p",{staticClass:"name comename"},[t._v("欢迎")]),s("p",{staticClass:"name avatarname"},[t._v(t._s(t.user.name))])]),s("el-dropdown",{staticClass:"username",on:{command:t.setDialogInfo}},[s("span",{staticClass:"el-dropdown-link"},[s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",{attrs:{command:"info"}},[t._v("个人信息")]),s("el-dropdown-item",{attrs:{command:"logout"}},[t._v("退出")])],1)],1)],1)])],1)],1)},i=[],r={name:"head-nav",computed:{user:function(){return this.$store.getters.user}},methods:{setDialogInfo:function(t){if(!t)return console.log("test"),void this.$message("菜单选项缺少command属性");switch(t){case"info":this.showInfoList();break;case"logout":this.logout();break}},showInfoList:function(){this.$router.push("/info-show")},logout:function(){localStorage.removeItem("token"),this.$store.dispatch("clearCurrentState"),this.$router.push("/login")}}},l=r,c=(a("1689"),a("2877")),u=Object(c["a"])(l,o,i,!1,null,"77a50f6f",null),m=u.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"menu_page"},[a("el-col",[a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{mode:"vertical","background-color":"#324057","text-color":"#fff","active-text-color":"#409eff"}},[a("router-link",{attrs:{to:"/home"}},[a("el-menu-item",{attrs:{index:"0"}},[a("i",{staticClass:"fa fa-margin fa-server"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("首页")])])],1),t._l(t.items,(function(e){return[e.children?a("el-submenu",{key:e.path,attrs:{index:e.path}},[a("template",{slot:"title"},[a("i",{class:"fa fa-margin "+e.icon}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.name))])]),t._l(e.children,(function(e,s){return a("router-link",{key:s,attrs:{to:e.path}},[a("el-menu-item",{attrs:{index:e.path}},[a("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.name))])])],1)}))],2):t._e()]}))],2)],1)],1)},d=[],p={name:"leftmenu",data:function(){return{items:[{icon:"fa-money",name:"资金管理",path:"fund",children:[{path:"found-list",name:"资金流水"}]},{icon:"fa-asterisk",name:"信息管理",path:"info",children:[{path:"info-show",name:"个人信息"}]}]}}},h=p,v=(a("7840"),Object(c["a"])(h,f,d,!1,null,"51cd0246",null)),g=v.exports,w={name:"index",components:{HeadNav:m,LeftMenu:g}},_=w,C=(a("5d4a"),Object(c["a"])(_,s,n,!1,null,"5d133cf6",null));e["default"]=C.exports},"5d4a":function(t,e,a){"use strict";var s=a("a2e2"),n=a.n(s);n.a},"66b8":function(t,e,a){},"71fe":function(t,e,a){},7840:function(t,e,a){"use strict";var s=a("66b8"),n=a.n(s);n.a},a2e2:function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"assets/img/logo.82b9c7a5.png"}}]);
//# sourceMappingURL=index.82d6b754.js.map