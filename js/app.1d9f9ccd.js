(function(e){function t(t){for(var a,o,s=t[0],l=t[1],c=t[2],u=0,v=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&v.push(n[o][0]),n[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(v.length)v.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],a=!0,o=1;o<r.length;o++){var l=r[o];0!==n[l]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var a={},n={app:0},i=[];function o(e){return s.p+"js/"+({pdfjsWorker:"pdfjsWorker"}[e]||e)+"."+{pdfjsWorker:"0486d421"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,a){r=n[e]=[t,a]}));t.push(r[2]=a);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=o(e);var c=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(u);var r=n[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,r[1](c)}n[e]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=c;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},1:function(e,t){},"1276a":function(e,t,r){},2:function(e,t){},3:function(e,t){},3385:function(e,t,r){},4:function(e,t){},"496c":function(e,t,r){"use strict";var a=r("3385"),n=r.n(a);n.a},b14c:function(e,t,r){"use strict";var a=r("1276a"),n=r.n(a);n.a},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-navigation-drawer",{attrs:{clipped:e.$vuetify.breakpoint.mdAndUp,app:""},scopedSlots:e._u([{key:"append",fn:function(){return[r("v-divider"),r("v-list",{attrs:{nav:"",dense:""}},[r("settings-dialog",{attrs:{servers:e.servers,current:e.current()},on:{save:e.serverchange,delete:e.serverremove}}),e._l(e.navItems,(function(t){return[t.children?r("v-list-group",{key:t.text,attrs:{disabled:t.disabled,"prepend-icon":t.icon||" ","no-action":""},scopedSlots:e._u([{key:"activator",fn:function(){return[r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(t.text))])],1)]},proxy:!0}],null,!0),model:{value:t.model,callback:function(r){e.$set(t,"model",r)},expression:"item.model"}},e._l(t.children,(function(t,a){return r("v-list-item",{key:a,attrs:{dense:"",link:"",disabled:t.disabled}},[t.icon?r("v-list-item-action",[r("v-icon",[e._v(e._s(t.icon))])],1):e._e(),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(t.text))])],1)],1)})),1):t.hide?e._e():r("v-list-item",{key:t.text,attrs:{disabled:t.disabled,link:""}},[r("v-list-item-action",[r("v-icon",[e._v(e._s(t.icon))])],1),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(t.text))])],1)],1)]}))],2)]},proxy:!0}]),model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("tag-list",{attrs:{reload:e.reload,error:e.onError,deleteTag:e.deleteTag,currentserver:e.currentserver,tags:e.tags}})],1),r("v-app-bar",{attrs:{"clipped-left":!0,app:"",color:"primary",flat:e.$vuetify.breakpoint.mdAndUp,dark:""}},[r("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),r("v-toolbar-title",{staticClass:"hidden-sm-and-down",staticStyle:{width:"300px"}},[e._v(" tridoc Cockpit ")]),r("v-spacer"),r("v-text-field",{attrs:{disabled:"",flat:"","solo-inverted":"","hide-details":"","prepend-inner-icon":"mdi-magnify",label:"Search"}}),r("v-btn",{attrs:{icon:"",disabled:""}},[r("v-icon",[e._v("mdi-filter-remove")])],1),r("v-btn",{attrs:{icon:""},on:{click:e.reload}},[r("v-icon",[e._v("mdi-refresh")])],1),r("v-spacer"),r("v-btn",{attrs:{icon:""},on:{click:function(t){e.$vuetify.theme.dark=!e.$vuetify.theme.dark}}},[r("v-icon",[e._v("mdi-invert-colors")])],1)],1),r("v-content",{attrs:{app:""}},[r("v-container",{staticClass:"sfill-height",attrs:{fluid:""},on:{drag:function(e){e.stopPropagation(),e.preventDefault()},dragstart:function(e){e.stopPropagation(),e.preventDefault()},dragend:function(e){e.stopPropagation(),e.preventDefault()},dragover:function(e){e.stopPropagation(),e.preventDefault()},dragenter:function(e){e.stopPropagation(),e.preventDefault()},dragleave:function(e){e.stopPropagation(),e.preventDefault()},drop:function(t){return t.stopPropagation(),t.preventDefault(),e.addFile(t)}}},[r("v-row",{attrs:{align:"start"}},[r("v-col",{attrs:{cols:"12"}},[r("v-card",{attrs:{outlined:""}},[r("v-data-table",{attrs:{"disable-sort":"","disable-filtering":"",headers:e.headers,items:e.docs,options:e.options,"server-items-length":e.count,loading:e.loading,"item-key":"identifier","footer-props":{showFirstLastPage:!0},"no-data-text":"No documents found"},on:{"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"item.title",fn:function(t){var a=t.item;return[e._v(" "+e._s(a.title)+" "),a.title?e._e():r("i",[e._v("Untitled Document")])]}},{key:"item.tags",fn:function(t){var a=t.item;return[r("v-chip-group",e._l(a.tags,(function(t){return r("v-chip",{key:t.label,attrs:{label:""}},[".."===t.label?r("v-icon",[e._v("mdi-sync")]):r("span",[e._v(e._s(t.label))]),t.parameter?r("v-divider",{staticClass:"mx-3",attrs:{vertical:""}}):e._e(),t.parameter?r("strong",[e._v(e._s("http://www.w3.org/2001/XMLSchema#decimal"===t.parameter.type?t.parameter.value:e.calculateDatestamp(t.parameter.value)))]):e._e()],1)})),1)]}},{key:"item.created",fn:function(t){var r=t.item;return[e._v(" "+e._s(e.calculateTimestamp(r.created))+" ")]}},{key:"item.identifier",fn:function(t){var a=t.item;return[r("pre",[e._v(e._s(a.identifier))])]}},{key:"item.actions",fn:function(t){var a=t.item;return[r("div",{staticClass:"d-flex"},[r("v-btn",{staticClass:"ma-1",attrs:{small:"",text:"",outlined:"",color:"primary darken-1"},on:{click:function(t){return e.openDocument(a.identifier)}}},[r("v-icon",{attrs:{small:"",left:!e.$vuetify.breakpoint.sm}},[e._v("mdi-open-in-new")]),r("span",{attrs:{hidden:e.$vuetify.breakpoint.sm}},[e._v("Open")])],1),r("document-details",{attrs:{server:e.currentserver,docMeta:a,error:e.error},on:{"update:docMeta":function(e){a=e},"update:doc-meta":function(e){a=e},change:e.reload}})],1)]}}])})],1)],1)],1),r("v-row",{attrs:{align:"start"}},[r("v-col",{attrs:{cols:"12"}},[r("v-card",{attrs:{outlined:""}},[r("v-data-table",{attrs:{"disable-sort":"","disable-filtering":"",headers:e.uploadHeaders,items:e.uploadDocs,"item-key":"file.name","disable-pagination":"","hide-default-footer":"","no-data-text":"Drop documents here to upload"},scopedSlots:e._u([{key:"item.actions",fn:function(t){var a=t.item;return[r("div",{staticClass:"d-flex"},[r("v-btn",{staticClass:"ma-1",attrs:{small:"",text:"",outlined:"",color:"primary darken-1",loading:a.loading},on:{click:function(t){return e.uploadDocument(a)}}},[r("v-icon",{attrs:{small:"",left:!e.$vuetify.breakpoint.sm}},[e._v("mdi-upload")]),r("span",{attrs:{hidden:e.$vuetify.breakpoint.sm}},[e._v("Upload")])],1),r("v-btn",{staticClass:"ma-1",attrs:{small:"",text:"",outlined:"",color:"secondary darken-1"},on:{click:function(t){return e.removeUploadDocument(a)}}},[r("v-icon",{attrs:{small:"",left:!e.$vuetify.breakpoint.sm}},[e._v("mdi-close")]),r("span",{attrs:{hidden:e.$vuetify.breakpoint.sm}},[e._v("Cancel")])],1)],1)]}},{key:"footer",fn:function(){return[r("v-divider"),r("div",{staticClass:"d-flex"},[r("v-btn",{staticClass:"ma-1",attrs:{outlined:"",color:"primary"}},[r("span",[e._v("Add File")]),r("input",{attrs:{type:"file"},on:{change:e.addFileInput}})]),r("v-spacer"),r("v-btn",{staticClass:"ma-1",attrs:{outlined:"",color:"primary"},on:{click:e.uploadAll}},[r("v-icon",{attrs:{left:""}},[e._v("mdi-upload")]),r("span",[e._v("Upload All")])],1)],1)]},proxy:!0}])})],1)],1)],1),r("v-spacer")],1)],1),r("error-dialog",{attrs:{error:e.error,close:function(){return e.error=null}}})],1)},i=[],o=(r("99af"),r("4de4"),r("4160"),r("baa5"),r("d81d"),r("a434"),r("b0c0"),r("d3b7"),r("ac1f"),r("25f0"),r("4d90"),r("5319"),r("2ca0"),r("159b"),r("2909")),s=r("5530"),l=r("d4ec"),c=r("bee2"),u=r("99de"),d=r("7e84"),v=r("262e"),p=r("9ab4"),f=r("60a3"),m=r("0083"),h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{attrs:{fullscreen:e.$vuetify.breakpoint.smAndDown},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[r("v-list-item",e._g({},a),[r("v-list-item-icon",[r("v-icon",[e._v("mdi-cog")])],1),r("v-list-item-content",[r("v-list-item-title",[e._v("Settings")])],1)],1)]}}]),model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[r("v-card",{attrs:{tile:e.$vuetify.breakpoint.smAndDown}},[e.$vuetify.breakpoint.smAndDown?r("v-toolbar",{attrs:{dark:"",color:"primary",flat:"","elevate-on-scroll":""}},[r("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.show=!1}}},[r("v-icon",[e._v("mdi-close")])],1),r("v-toolbar-title",[e._v("Settings")]),r("v-spacer"),r("v-toolbar-items",[r("v-btn",{attrs:{dark:"",text:""},on:{click:function(t){e.show=!1}}},[e._v("Close")])],1)],1):e._e(),r("v-card-title",[e.$vuetify.breakpoint.mdAndUp?r("span",{staticClass:"headline"},[e._v("Settings")]):e._e()]),r("v-card-text",[r("v-expansion-panels",{attrs:{accordion:""},model:{value:e.icurrent,callback:function(t){e.icurrent=t},expression:"icurrent"}},e._l(e.iservers,(function(t,a){return r("v-expansion-panel",{key:t.id,ref:1e3*(t.id+1)+a+1,refInFor:!0},[r("v-expansion-panel-header",{attrs:{"disable-icon-rotate":a===e.current},scopedSlots:e._u([a===e.current?{key:"actions",fn:function(){return[r("v-icon",{attrs:{color:"primary"}},[e._v("mdi-check-circle")])]},proxy:!0}:null],null,!0)},[e._v(" "+e._s(a+1)+": "+e._s(t.url)+" ")]),r("v-expansion-panel-content",[r("v-form",{model:{value:t.valid,callback:function(r){e.$set(t,"valid",r)},expression:"server.valid"}},[r("v-row",[r("v-col",{attrs:{sm:"12",md:"6"}},[r("v-text-field",{attrs:{outlined:"","full-width":"",rules:e.urlRules,label:"Server URL",required:""},model:{value:t.url,callback:function(r){e.$set(t,"url",r)},expression:"server.url"}})],1),r("v-col",{attrs:{sm:"12",md:"6"}},[r("v-text-field",{attrs:{outlined:"","full-width":"",rules:e.passwordRules,label:"Password",required:""},model:{value:t.password,callback:function(r){e.$set(t,"password",r)},expression:"server.password"}})],1)],1),r("v-row",[r("v-spacer"),r("v-col",{attrs:{sm:"auto"}},[r("v-btn",{attrs:{color:"secondary darken-1",text:""},on:{click:function(t){return e.remove(a)}}},[e._v("Delete")])],1),r("v-col",{attrs:{sm:"auto"}},[r("v-btn",{attrs:{color:"primary"},on:{click:function(r){return e.save(a,t)}}},[e._v("Save")])],1)],1)],1)],1)],1)})),1),r("v-row",[r("v-spacer"),r("v-col",{attrs:{sm:"auto"}},[r("v-btn",{attrs:{color:"primary darken-1",text:""},on:{click:e.addRow}},[e._v("Add")])],1)],1),r("v-divider")],1),e.$vuetify.breakpoint.mdAndUp?r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"secondary darken-1",text:""},on:{click:function(t){e.show=!1}}},[e._v("Close")])],1):e._e()],1)],1)},b=[],g=(r("3ca3"),r("ddb0"),r("2b3d"),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e.startsWith("http://")&&e.startsWith("https://")||(e="https://"+e);try{var t=new URL(e);return t.href.replace(/\/$/,"")}catch(r){return!1}}),y=function(){var e=0;return function(){return e++}}(),k=function(e){function t(){var e;return Object(l["a"])(this,t),e=Object(u["a"])(this,Object(d["a"])(t).apply(this,arguments)),e.iservers=e.servers.map((function(t){var r=t.password,a=t.url;return{id:e.counter(),valid:!1,password:r,url:a}})),e.icurrent=e.current,e.show=!1,e.valid=!1,e.urlRules=[function(e){return!!e||"URL is required"},function(e){var t=g(e);return!!t||"URL has to be valid"}],e.passwordRules=[function(e){return!!e||"Password is required"}],e}return Object(v["a"])(t,e),Object(c["a"])(t,[{key:"onServersChanged",value:function(){var e=this;this.iservers=this.servers.map((function(t){var r=t.password,a=t.url;return{id:e.counter(),valid:!1,password:r,url:a}}))}},{key:"counter",value:function(){return y()}},{key:"save",value:function(e,t){var r=t.url,a=t.password,n=t.valid;n&&this.$emit("save",{index:e,url:r,password:a})}},{key:"remove",value:function(e){this.$emit("delete",e)}},{key:"addRow",value:function(){this.iservers.push({id:this.counter(),password:"",url:"",valid:!1}),this.icurrent=this.iservers.length-1,this.save(this.icurrent,{password:"",url:"",valid:!0})}}]),t}(f["d"]);Object(p["a"])([Object(f["b"])()],k.prototype,"servers",void 0),Object(p["a"])([Object(f["e"])("servers",{deep:!0})],k.prototype,"onServersChanged",null),Object(p["a"])([Object(f["b"])()],k.prototype,"current",void 0),k=Object(p["a"])([Object(f["a"])({})],k);var _=k,w=_,x=r("2877"),O=r("6544"),V=r.n(O),j=r("8336"),C=r("b0af"),D=r("99d9"),S=r("62ad"),T=r("169a"),P=r("ce7e"),$=r("cd55"),I=r("49e2"),A=r("c865"),L=r("0393"),E=r("4bd4"),F=r("132d"),M=r("da13"),U=r("5d23"),R=r("34c3"),z=r("0fd9"),W=r("2fa4"),q=r("8654"),B=r("71d9"),N=r("2a7f"),H=Object(x["a"])(w,h,b,!1,null,null,null),G=H.exports;V()(H,{VBtn:j["a"],VCard:C["a"],VCardActions:D["a"],VCardText:D["b"],VCardTitle:D["c"],VCol:S["a"],VDialog:T["a"],VDivider:P["a"],VExpansionPanel:$["a"],VExpansionPanelContent:I["a"],VExpansionPanelHeader:A["a"],VExpansionPanels:L["a"],VForm:E["a"],VIcon:F["a"],VListItem:M["a"],VListItemContent:U["a"],VListItemIcon:R["a"],VListItemTitle:U["b"],VRow:z["a"],VSpacer:W["a"],VTextField:q["a"],VToolbar:B["a"],VToolbarItems:N["a"],VToolbarTitle:N["b"]});var Y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{attrs:{value:!!e.error}},[r("v-card",{attrs:{color:"error",dark:""}},[r("v-card-title",{staticClass:"headline"},[e._v(e._s(e.title))]),r("v-card-text",[e._v(e._s(e.message))]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{text:""},on:{click:e.close}},[e._v(" Close ")])],1)],1)],1)},J=[],X=function(e){function t(){return Object(l["a"])(this,t),Object(u["a"])(this,Object(d["a"])(t).apply(this,arguments))}return Object(v["a"])(t,e),Object(c["a"])(t,[{key:"title",get:function(){return null!==this.error?this.error.title||"An Error Occured":"..."}},{key:"message",get:function(){return null!==this.error?this.error.message||"Unknown error":"..."}}]),t}(f["d"]);Object(p["a"])([Object(f["b"])()],X.prototype,"error",void 0),Object(p["a"])([Object(f["b"])()],X.prototype,"close",void 0),X=Object(p["a"])([Object(f["a"])({})],X);var K=X,Q=K,Z=Object(x["a"])(Q,Y,J,!1,null,null,null),ee=Z.exports;V()(Z,{VBtn:j["a"],VCard:C["a"],VCardActions:D["a"],VCardText:D["b"],VCardTitle:D["c"],VDialog:T["a"],VSpacer:W["a"]});var te=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-list",{attrs:{nav:"",dense:""}},[r("v-subheader",[e._v("TAGS")]),r("v-list-item-group",{attrs:{color:"secondary"}},[r("tag-creator",{attrs:{server:e.currentserver()},on:{tagcreated:e.reload,error:function(t){return e.error({title:e.r.error,message:e.r.message})}}}),e._l(e.tags,(function(t){return r("v-menu",{key:t.label,staticStyle:{"max-width":"600px"},attrs:{absolute:"","offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(a){var n=a.on;return[r("v-list-item",e._g({},n),[r("v-list-item-icon",[r("v-icon",{domProps:{textContent:e._s(t.icon)}})],1),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:e._s(t.label)}})],1),r("v-list-item-action",[r("v-icon",{attrs:{small:""},domProps:{textContent:e._s(t["type-icon"])}})],1)],1)]}}],null,!0)},[r("v-list",e._l(e.tagActions,(function(a,n){return r("v-list-item",{key:n,on:{click:function(){return a.fn(t)}}},[r("v-list-item-title",[e._v(e._s(a.name))])],1)})),1)],1)}))],2)],1)},re=[],ae=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{attrs:{fullscreen:e.$vuetify.breakpoint.smAndDown,persistent:"","max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[r("v-list-item",e._g({staticClass:"secondary white--text"},a),[r("v-list-item-icon",[r("v-icon",{staticClass:"white--text"},[e._v("mdi-tag-plus")])],1),r("v-list-item-content",[r("v-list-item-title",{staticClass:"white--text"},[e._v("Create Tag")])],1)],1)]}}]),model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[r("v-card",[r("v-card-title",[r("span",{staticClass:"headline"},[e._v("Create Tag")])]),r("v-card-text",[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{outlined:"",rules:e.labelRules,label:"Label",required:""},model:{value:e.label,callback:function(t){e.label=t},expression:"label"}})],1),r("v-col",{attrs:{cols:"12"}},[r("v-radio-group",{model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[r("v-radio",{attrs:{value:"simple"},scopedSlots:e._u([{key:"label",fn:function(){return[r("v-icon",{attrs:{small:"",left:""}},[e._v("mdi-tag")]),e._v(" Not parameterizable ")]},proxy:!0}])}),r("v-radio",{attrs:{value:"decimal"},scopedSlots:e._u([{key:"label",fn:function(){return[r("v-icon",{attrs:{small:"",left:""}},[e._v("mdi-pound")]),e._v(" Parameterizable with number / decimal ")]},proxy:!0}])}),r("v-radio",{attrs:{value:"date"},scopedSlots:e._u([{key:"label",fn:function(){return[r("v-icon",{attrs:{small:"",left:""}},[e._v("mdi-calendar")]),e._v(" Parameterizable with date ")]},proxy:!0}])})],1)],1)],1)],1)],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"secondary darken-1",text:""},on:{click:e.clear}},[e._v("Cancel")]),r("v-btn",{attrs:{color:"secondary darken-1",text:""},on:{click:function(t){e.show=!1}}},[e._v("Close")]),r("v-btn",{attrs:{color:"primary darken-1",text:""},on:{click:e.save}},[e._v("Save")])],1)],1)],1)},ne=[],ie=function(e){function t(){var e;return Object(l["a"])(this,t),e=Object(u["a"])(this,Object(d["a"])(t).apply(this,arguments)),e.show=!1,e.valid=!1,e.label="",e.type="simple",e.labelRules=[function(e){return!!e||"Label is required"},function(e){return!/\s|\/|\\|#|"|'|,|;|:|\?/.test(e)||"The label must not contain any of the following: whitespace / \\ # \" ' , ; : ?"},function(e){return!/^[.]{1,2}$/.test(e)||"The label must not equal . (single dot) or .. (double dot)"}],e}return Object(v["a"])(t,e),Object(c["a"])(t,[{key:"clear",value:function(){this.show=!1,this.label="",this.type="simple",this.$refs.form.resetValidation()}},{key:"save",value:function(){var e=this;this.$refs.form.validate(),this.valid&&this.server.createTag(this.label,"simple"!==this.type?this.type:null).then((function(t){t.error?(e.$emit("error",t),e.clear()):(e.$emit("tagcreated"),e.clear())}))}}]),t}(f["d"]);Object(p["a"])([Object(f["b"])()],ie.prototype,"server",void 0),ie=Object(p["a"])([Object(f["a"])({})],ie);var oe=ie,se=oe,le=r("a523"),ce=r("67b6"),ue=r("43a6"),de=Object(x["a"])(se,ae,ne,!1,null,null,null),ve=de.exports;V()(de,{VBtn:j["a"],VCard:C["a"],VCardActions:D["a"],VCardText:D["b"],VCardTitle:D["c"],VCol:S["a"],VContainer:le["a"],VDialog:T["a"],VForm:E["a"],VIcon:F["a"],VListItem:M["a"],VListItemContent:U["a"],VListItemIcon:R["a"],VListItemTitle:U["b"],VRadio:ce["a"],VRadioGroup:ue["a"],VRow:z["a"],VSpacer:W["a"],VTextField:q["a"]});var pe=function(e){function t(){var e;return Object(l["a"])(this,t),e=Object(u["a"])(this,Object(d["a"])(t).apply(this,arguments)),e.tagActions=[{name:"Delete",fn:function(t){return e.deleteTag(t.label)}}],e}return Object(v["a"])(t,e),t}(f["d"]);Object(p["a"])([Object(f["b"])()],pe.prototype,"reload",void 0),Object(p["a"])([Object(f["b"])()],pe.prototype,"error",void 0),Object(p["a"])([Object(f["b"])()],pe.prototype,"deleteTag",void 0),Object(p["a"])([Object(f["b"])()],pe.prototype,"currentserver",void 0),Object(p["a"])([Object(f["b"])()],pe.prototype,"tags",void 0),pe=Object(p["a"])([Object(f["a"])({components:{TagCreator:ve}})],pe);var fe=pe,me=fe,he=r("8860"),be=r("1800"),ge=r("1baa"),ye=r("e449"),ke=r("e0c7"),_e=Object(x["a"])(me,te,re,!1,null,null,null),we=_e.exports;V()(_e,{VIcon:F["a"],VList:he["a"],VListItem:M["a"],VListItemAction:be["a"],VListItemContent:U["a"],VListItemGroup:ge["a"],VListItemIcon:R["a"],VListItemTitle:U["b"],VMenu:ye["a"],VSubheader:ke["a"]});var xe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{attrs:{scrollable:"",fullscreen:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[r("v-btn",e._g({staticClass:"ma-1",attrs:{text:"",small:"",outlined:"",color:"primary"},on:{click:function(e){}}},a),[r("v-icon",{attrs:{small:"",left:!e.$vuetify.breakpoint.sm}},[e._v("mdi-pencil")]),r("span",{attrs:{hidden:e.$vuetify.breakpoint.sm}},[e._v("Edit")])],1)]}}]),model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[r("v-card",{attrs:{tile:""}},[r("v-toolbar",{attrs:{dark:"",color:"primary",flat:"","elevate-on-scroll":""}},[r("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.show=!1}}},[r("v-icon",[e._v("mdi-close")])],1),r("v-toolbar-title",[e._v(e._s(e.meta.title||e.meta.identifier))]),r("v-spacer"),r("v-btn",{attrs:{icon:e.$vuetify.breakpoint.smAndDown,text:"",dark:""},on:{click:function(t){return e.openDocument(e.meta.identifier)}}},[r("v-icon",{attrs:{left:!e.$vuetify.breakpoint.smAndDown}},[e._v("mdi-open-in-new")]),r("span",{attrs:{hidden:e.$vuetify.breakpoint.smAndDown}},[e._v("Open in new tab")])],1),r("v-btn",{attrs:{icon:e.$vuetify.breakpoint.smAndDown,text:"",dark:"",color:"red accent-1"},on:{click:function(t){return e.deleteDocument(e.meta.identifier)}}},[r("v-icon",{attrs:{left:!e.$vuetify.breakpoint.smAndDown}},[e._v("mdi-delete")]),r("span",{attrs:{hidden:e.$vuetify.breakpoint.smAndDown}},[e._v("Delete this document")])],1)],1),r("v-card-text",[r("v-row",[r("v-col",{attrs:{cols:"12",md:"5"}},[r("v-card-title",{staticClass:"px-0 text--primary"},[e._v("Metadata")]),r("v-text-field",{attrs:{outlined:"",label:"Title"},on:{change:e.updateTitle},model:{value:e.meta.title,callback:function(t){e.$set(e.meta,"title",t)},expression:"meta.title"}}),r("v-text-field",{attrs:{outlined:"",disabled:"",label:"ID",value:e.meta.identifier}}),r("v-chip-group",{attrs:{column:""}},e._l(e.meta.tags,(function(t){return r("v-chip",{key:t.label,attrs:{label:""}},[".."===t.label?r("v-icon",[e._v("mdi-sync")]):r("span",[e._v(e._s(t.label))]),t.parameter?r("v-divider",{staticClass:"mx-3",attrs:{vertical:""}}):e._e(),t.parameter?r("strong",[e._v(e._s("http://www.w3.org/2001/XMLSchema#decimal"===t.parameter.type?t.parameter.value:e.calculateDatestamp(t.parameter.value)))]):e._e()],1)})),1)],1),r("v-col",{attrs:{cols:"12",md:"7"}},[r("v-toolbar",{staticClass:"tools",attrs:{fdense:""}},[r("v-spacer"),r("v-btn",{attrs:{icon:""},on:{click:e.scaleDown}},[r("v-icon",[e._v("mdi-magnify-minus-outline")])],1),e.$vuetify.breakpoint.smAndUp?r("v-text-field",{staticClass:"narrow",attrs:{"hide-details":"",dense:"","single-line":"",outlined:"",value:e.getScale(),clearable:"",suffix:"%",type:"number",step:"10"},on:{input:e.setScale,"click:clear":e.scaleOff}}):e._e(),e.$vuetify.breakpoint.xs?r("v-btn",{attrs:{icon:""},on:{click:e.scaleOff}},[e._v(" 1:1 ")]):e._e(),r("v-btn",{attrs:{icon:""},on:{click:e.scaleUp}},[r("v-icon",[e._v("mdi-magnify-plus-outline")])],1),r("v-spacer"),e._v(" "+e._s(e.numPages)+" Pages "),r("v-progress-linear",{attrs:{active:e.loading,indeterminate:"",absolute:"",bottom:""}})],1),e._l(e.numPages,(function(t){return r("pdf",{key:t,staticClass:"pdf",attrs:{src:e.pdfsrc(),id:t,page:t,scale:e.scale,resize:e.resize,annotation:""},on:{"update:scale":function(t){e.scale=t},loading:e.loadingChange}})}))],2)],1)],1)],1)],1)},Oe=[],Ve=(r("b680"),r("10ee")),je=function(e){function t(){var e;return Object(l["a"])(this,t),e=Object(u["a"])(this,Object(d["a"])(t).apply(this,arguments)),e.show=!1,e.page=1,e.numPages=0,e.pdfdata=void 0,e.errors=[],e.scale="page-width",e.loading=!0,e.resize=!0,e}return Object(v["a"])(t,e),Object(c["a"])(t,[{key:"pdfsrc",value:function(){return{url:(this.server().url.startsWith("https://")||this.server().url.startsWith("http://")?this.server().url:"https://"+this.server().url)+"/doc/"+this.meta.identifier,httpHeaders:{Authorization:this.server().headers.get("Authorization")}}}},{key:"calculateDatestamp",value:function(e){var t=new Date(e),r=t.getFullYear().toString().padStart(4,"0"),a=(t.getMonth()+1).toString().padStart(2,"0"),n=t.getDate().toString().padStart(2,"0"),i=new Date,o=Math.floor((i.getTime()-t.getTime())/864e5);switch(o){case 0:return"Today";case 1:return"Yesterday";default:return"".concat(r,"-").concat(a,"-").concat(n)}}},{key:"openDocument",value:function(e){var t=this.server().url.startsWith("https://")||this.server().url.startsWith("http://")?this.server().url:"https://"+this.server().url;window.open(t+"/doc/"+e,"_blank")}},{key:"deleteDocument",value:function(e){var t=this;if(confirm("Are you sure you want to delete this Document?")){this.show=!1;var r=this.server();r&&r.deleteDocument(e).then((function(e){"error"in e?t.err=Object(s["a"])({title:e.error,message:e.message},e):t.$emit("change")}))}}},{key:"updateTitle",value:function(){var e=this.server();e&&e.setDocumentTitle(this.meta.identifier,this.meta.title||"")}},{key:"loadingChange",value:function(e){if(this.loading=e,!e||e)for(var t=document.getElementsByTagName("canvas"),r=0;r<t.length;r++)t[r].classList.add("elevation-4")}},{key:"scaleDown",value:function(){this.resize=!1,this.scale=parseFloat(""+this.scale),this.scale>.1?this.scale=(this.scale-.1).toFixed(1):this.scale=.1}},{key:"scaleUp",value:function(){this.resize=!1,this.scale=parseFloat(""+this.scale),this.scale<1.9?this.scale=(this.scale+.1).toFixed(1):this.scale=2}},{key:"scaleOff",value:function(){this.scale="page-width",this.resize=!0}},{key:"getScale",value:function(){return parseInt(""+100*+this.scale)}},{key:"setScale",value:function(e){this.scale=e/100}},{key:"getPdf",value:function(){var e=this,t=(this.server().url.startsWith("https://")||this.server().url.startsWith("http://")?this.server().url:"https://"+this.server().url)+"/doc/"+this.meta.identifier;this.pdfdata=Ve["a"].createLoadingTask({url:t,httpHeaders:{Authorization:this.server().headers.get("Authorization")}}),this.pdfdata.then((function(t){e.numPages=t.numPages}))}},{key:"mounted",value:function(){this.getPdf()}}]),t}(f["d"]);Object(p["a"])([Object(f["b"])()],je.prototype,"server",void 0),Object(p["a"])([Object(f["c"])("docMeta")],je.prototype,"meta",void 0),Object(p["a"])([Object(f["c"])("error")],je.prototype,"err",void 0),je=Object(p["a"])([Object(f["a"])({components:{pdf:Ve["a"]}})],je);var Ce=je,De=Ce,Se=(r("b14c"),r("cc20")),Te=r("ef9a"),Pe=r("8e36"),$e=Object(x["a"])(De,xe,Oe,!1,null,null,null),Ie=$e.exports;V()($e,{VBtn:j["a"],VCard:C["a"],VCardText:D["b"],VCardTitle:D["c"],VChip:Se["a"],VChipGroup:Te["a"],VCol:S["a"],VDialog:T["a"],VDivider:P["a"],VIcon:F["a"],VProgressLinear:Pe["a"],VRow:z["a"],VSpacer:W["a"],VTextField:q["a"],VToolbar:B["a"],VToolbarTitle:N["b"]});var Ae=function(e){function t(){var e;return Object(l["a"])(this,t),e=Object(u["a"])(this,Object(d["a"])(t).apply(this,arguments)),e.error=null,e.servers=[],e._current=0,e.drawer=null,e.navItems=[{text:"More",model:!1,children:[{icon:"mdi-package-down",text:"Export",disabled:!0},{icon:"mdi-help-circle",text:"Help",disabled:!0}]}],e.docs=[],e.count=0,e.headers=[{text:"Title",value:"title"},{text:"Tags",value:"tags"},{text:"Created",value:"created",align:"end"},{text:"Identifier",value:"identifier",width:1},{text:"",value:"actions",width:1}],e.loading=!0,e.options={page:1,itemsPerPage:10},e.uploadDocs=[],e.uploadHeaders=[{text:"Name",value:"file.name"},{text:"",value:"actions",width:1}],e.tags=[],e}return Object(v["a"])(t,e),Object(c["a"])(t,[{key:"current",value:function(){return this._current>=this.servers.length&&(this._current=this.servers.length-1),this._current}},{key:"setCurrent",value:function(e){this._current=e}},{key:"currentserver",value:function(){return 0===this.servers.length?null:this.servers[this.current()].server}},{key:"onTableOptionsChange",value:function(e,t){e.page===t.page&&e.itemsPerPage===t.itemsPerPage||this.getDocuments()}},{key:"openDocument",value:function(e){var t=this.servers[this.current()].url.startsWith("https://")||this.servers[this.current()].url.startsWith("http://")?this.servers[this.current()].url:"https://"+this.servers[this.current()].url;window.open(t+"/doc/"+e,"_blank")}},{key:"calculateTimestamp",value:function(e){var t=new Date(e),r=t.getFullYear().toString().padStart(4,"0"),a=(t.getMonth()+1).toString().padStart(2,"0"),n=t.getDate().toString().padStart(2,"0"),i=t.getHours().toString().padStart(2,"0"),o=t.getMinutes().toString().padStart(2,"0"),s=new Date,l=Math.floor((s.getTime()-t.getTime())/864e5);switch(l){case 0:return"Today ".concat(i,":").concat(o);case 1:return"Yesterday ".concat(i,":").concat(o);default:return"".concat(r,"-").concat(a,"-").concat(n," ").concat(i,":").concat(o)}}},{key:"calculateDatestamp",value:function(e){var t=new Date(e),r=t.getFullYear().toString().padStart(4,"0"),a=(t.getMonth()+1).toString().padStart(2,"0"),n=t.getDate().toString().padStart(2,"0"),i=new Date,o=Math.floor((i.getTime()-t.getTime())/864e5);switch(o){case 0:return"Today";case 1:return"Yesterday";default:return"".concat(r,"-").concat(a,"-").concat(n)}}},{key:"getDocuments",value:function(){var e=this;this.loading=!0;var t=this.currentserver();if(t){t.countDocuments("","","").then((function(t){"number"===typeof t?e.count=t:e.error=Object(s["a"])({message:t.error},t)}));var r="",a="";this.options.itemsPerPage>0&&(r=this.options.itemsPerPage,a=(this.options.page-1)*r),t.getDocuments("","","",r,a).then((function(r){"error"in r?e.error=Object(s["a"])({message:r.error},r):(e.docs=r.map((function(e){var t=e.identifier,r=e.title,a=e.created;return r=r||"",{identifier:t,title:r,created:a,tags:[{label:".."}]}})),e.docs.forEach((function(r){t.getTags(r.identifier).then((function(t){"error"in t?e.error=Object(s["a"])({title:t.error,message:t.message},t):r.tags=t,e.loading=!1}))})))}))}}},{key:"addFile",value:function(e){var t,r=this,a=null===(t=e.dataTransfer)||void 0===t?void 0:t.files;a&&Object(o["a"])(a).forEach((function(e){"application/pdf"===e.type&&r.uploadDocs.push({loading:!1,file:e})}))}},{key:"addFileInput",value:function(e){var t=this,r=e.target.files;r&&(Object(o["a"])(r).forEach((function(e){"application/pdf"===e.type&&t.uploadDocs.push({loading:!1,file:e})})),e.target.value="",e.target.files=null)}},{key:"uploadAll",value:function(){this.uploadDocs.forEach(this.uploadDocument)}},{key:"uploadDocument",value:function(e){var t=this,r=this.currentserver();r&&(e.loading=!0,r.uploadFile(e.file).then((function(a){"error"in a?t.error={title:"Could upload document",message:a.error}:r.setDocumentTitle(a.location.substring(a.location.lastIndexOf("/")+1),e.file.name.replace(/\.pdf$/,"")).then((function(r){"error"in r&&(t.error={title:"Could not set title",message:r.error}),t.reload(),t.removeUploadDocument(e)}))}),(function(e){t.error={title:e.error||e,message:e.message||e}})).finally((function(){e.loading=!1})))}},{key:"removeUploadDocument",value:function(e){this.uploadDocs=this.uploadDocs.filter((function(t){return t!==e}))}},{key:"deleteTag",value:function(e){var t=this,r=this.currentserver();r&&r.deleteTag(e).then((function(e){e.error?t.error=Object(s["a"])({message:e.error},e):t.reload()}))}},{key:"serverchange",value:function(e){var t=e.index,r=e.url,a=e.password;this.servers[t]={url:r,password:a,server:new m["a"](r,"tridoc",a)},this.setCurrent(t),this.store(),this.reload()}},{key:"serverremove",value:function(e){this.servers.splice(e,1),this.store(),this.reload()}},{key:"reload",value:function(){var e=this;this.reset(),this.getDocuments();var t=this.currentserver();t&&t.getTags().then((function(t){"error"in t?e.error=Object(s["a"])({title:t.error,message:t.message},t):(e.tags=t.map((function(e){var t={icon:"mdi-tag",label:e.label,"type-icon":""};if(e.parameter)switch(e.parameter.type){case"http://www.w3.org/2001/XMLSchema#decimal":t["type-icon"]="mdi-pound";break;case"http://www.w3.org/2001/XMLSchema#date":t["type-icon"]="mdi-calendar";break;default:break}return t})),e.tags.sort((function(e,t){var r=e.label.toUpperCase(),a=t.label.toUpperCase();return r<a?-1:r>a?1:0})))}),(function(t){t instanceof Error?e.error={title:"A "+t.name+" occurred",message:t.message}:e.error=Object(s["a"])({message:t},t)}))}},{key:"reset",value:function(){this.tags=[],this.docs=[]}},{key:"restore",value:function(){var e=JSON.parse(localStorage.getItem("servers")||""),t=parseInt(localStorage.getItem("currentserver")||"0");e&&(this.servers=e.map((function(e){var t=e.password,r=e.url;return{password:t,url:r,server:new m["a"](r,"tridoc",t)}}))),this.setCurrent(t);var r=localStorage.getItem("server"),a=localStorage.getItem("password");r&&a&&this.servers.push({password:a,url:r,server:new m["a"](r,"tridoc",a)})}},{key:"store",value:function(){localStorage.setItem("currentserver",this.current().toString()),localStorage.setItem("servers",JSON.stringify(this.servers.map((function(e){var t=e.password,r=e.url;return{password:t,url:r}}))))}},{key:"created",value:function(){this.restore(),this.reload()}},{key:"onError",value:function(e){var t=e.title,r=e.message;this.error={title:t,message:r}}}]),t}(f["d"]);Object(p["a"])([Object(f["e"])("options")],Ae.prototype,"onTableOptionsChange",null),Ae=Object(p["a"])([Object(f["a"])({components:{SettingsDialog:G,ErrorDialog:ee,TagList:we,DocumentDetails:Ie}})],Ae);var Le=Ae,Ee=Le,Fe=(r("496c"),r("7496")),Me=r("40dc"),Ue=r("5bc1"),Re=r("a75b"),ze=r("8fea"),We=r("56b0"),qe=r("f774"),Be=Object(x["a"])(Ee,n,i,!1,null,"0d4d6d8c",null),Ne=Be.exports;V()(Be,{VApp:Fe["a"],VAppBar:Me["a"],VAppBarNavIcon:Ue["a"],VBtn:j["a"],VCard:C["a"],VChip:Se["a"],VChipGroup:Te["a"],VCol:S["a"],VContainer:le["a"],VContent:Re["a"],VDataTable:ze["a"],VDivider:P["a"],VIcon:F["a"],VList:he["a"],VListGroup:We["a"],VListItem:M["a"],VListItemAction:be["a"],VListItemContent:U["a"],VListItemTitle:U["b"],VNavigationDrawer:qe["a"],VRow:z["a"],VSpacer:W["a"],VTextField:q["a"],VToolbarTitle:N["b"]});var He=r("f309"),Ge=r("fcf4");a["a"].use(He["a"]);var Ye=new He["a"]({theme:{themes:{light:{primary:"#00685b",secondary:"#c86852",accent:"#f86158",error:Ge["a"].red.base},dark:{primary:{base:"#00887b",darken1:"#00887b"},secondary:{base:"#ec8d79",darken1:"#ffb39b"},accent:"#f86158",error:Ge["a"].red.base}}}});a["a"].config.productionTip=!1,new a["a"]({vuetify:Ye,render:function(e){return e(Ne)}}).$mount("#app")}});
//# sourceMappingURL=app.1d9f9ccd.js.map