webpackJsonp([19],{CA0C:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t("//Fk"),d=t.n(a),i=t("LOkV"),r=t("ohjy"),o=(t("7+uW"),Object(i.a)(),{name:"rcmdPc",data:function(){return{link:""}},asyncData:function(n){var e=n.store;n.route;return d.a.all([e.dispatch(r.a,"/r/"+url.id)])},computed:{tableData:function(){var n=this.$store.state.rcmd.tableData;return null!=n?n:[]},userData:function(){var n=this.$store.state.rcmd.userData;return null!=n?n:[]}},mounted:function(){this.getDataFn();var n=this.$route.params;this.$store.dispatch(r.a,"/r/"+n.id)},methods:{getDataFn:function(){this.link=window.location.href},onCopyFn:function(){alert("复制成功")},onErrorFn:function(){alert("复制失败")},downFn:function(n){console.log(n);var e="http://patent.d.gbicom.cn/user/rcmd/download?token="+this.$store.state.token+"&id="+n;window.open(e)}}}),A={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"user-rcmd-pc"},[t("div",{staticClass:"w1190"},[t("aside",{staticClass:"aside-left"},[t("p",{staticClass:"title"},[n._v(n._s(n.tableData.title))]),n._v(" "),t("p",{staticClass:"saoma"},[n._v("扫码直接分享")]),n._v(" "),t("div",{staticClass:"img-box"},[t("img",{attrs:{src:n.tableData.qrcode,alt:""}}),t("i")]),n._v(" "),t("p",{staticClass:"lianjie"},[n._v(n._s(n.link))]),n._v(" "),t("a",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:n.link,expression:"link",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:n.onCopyFn,expression:"onCopyFn",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:n.onErrorFn,expression:"onErrorFn",arg:"error"}],staticClass:"btn3",attrs:{href:"javascript:void(0);"}},[n._v("复制链接分享")]),n._v(" "),t("a",{staticClass:"btn4",attrs:{href:"http://patent.d.gbicom.cn/rcmd/download?id="+n.tableData.rcmd_id,target:"_blank"}},[n._v("下载excel版")])]),n._v(" "),t("section",{staticClass:"show-content"},[t("header",{staticClass:"cmder-header"},[t("div",{staticClass:"mingpian-footer"},[n.userData.head_img?t("img",{attrs:{src:n.userData.head_img,alt:""}}):n._e(),n._v(" "),t("div",{staticClass:"geren"},[t("span",[n._v(n._s(""==n.userData.nick?n.userData.mobile:n.userData.nick))]),n._v(" "),t("em",[n._v(n._s(n.userData.agent))])])]),n._v(" "),t("div",{staticClass:"lianxi-fs"},[t("div",{staticClass:"tel"},[t("p",[n._v("电话")]),n._v(" "),t("h4",[n._v(n._s(n.tableData.mobile))])]),n._v(" "),t("div",{staticClass:"weixin"},[t("p",[n._v("微信")]),n._v(" "),t("h4",[n._v(n._s(n.tableData.weixin))])]),n._v(" "),t("div",{staticClass:"weixin"},[t("p",[n._v("QQ")]),n._v(" "),t("h4",[n._v(n._s(n.tableData.qq))])])]),n._v(" "),t("p",{directives:[{name:"show",rawName:"v-show",value:n.tableData.desc&&""!=n.tableData.desc,expression:"tableData.desc && tableData.desc != ''"}],staticClass:"mingpian-title"},[n._v(n._s(n.tableData.desc))])]),n._v(" "),t("div",{staticClass:"patent-list"},[t("h3",[n._v("推荐的专利")]),n._v(" "),t("div",{staticClass:"table-box"},[t("table",[t("tbody",[t("tr",[t("th",[n._v("专利信息")]),n._v(" "),t("th",[n._v("专利类型")]),n._v(" "),t("th",[n._v("下证状态")]),n._v(" "),n.tableData.show_column&&n.tableData.show_column.indexOf("area")>=0?t("th",[n._v("专利领域")]):n._e(),n._v(" "),n.tableData.show_column&&n.tableData.show_column.indexOf("price")>=0?t("th",[n._v("价格")]):n._e()]),n._v(" "),n._l(n.tableData.content,function(e){return t("tr",{key:e.p_id},[t("td",{staticClass:"patent-info"},[t("p",[n._v(n._s(e.name))]),n._v(" "),t("span",[n._v("申请号："+n._s(e.reg_id))])]),n._v(" "),t("td",[n._v(n._s(e.type_str))]),n._v(" "),t("td",[n._v(n._s(e.status_str))]),n._v(" "),n.tableData.show_column&&n.tableData.show_column.indexOf("area")>=0?t("td",[n._v(n._s(e.area))]):n._e(),n._v(" "),n.tableData.show_column&&n.tableData.show_column.indexOf("price")>=0?t("td",{staticClass:"money"},[n._v("￥"+n._s(e.price))]):n._e()])})],2)])])])])])])},staticRenderFns:[]};var s=t("VU/8")(o,A,!1,function(n){t("YuJd")},"data-v-f2d55ffe",null);e.default=s.exports},YuJd:function(n,e,t){var a=t("j2Ig");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);t("rjj0")("ee93cab4",a,!0,{})},bOqa:function(n,e,t){n.exports=t.p+"static/img/tuijianhan.eef88cc.jpg"},j2Ig:function(n,e,t){var a=t("kxFB");(n.exports=t("FZ+f")(!0)).push([n.i,"\n.user-rcmd-pc[data-v-f2d55ffe] {\n  padding: 30px 0;\n  background-color: #f2f3f4;\n}\n.user-rcmd-pc .w1190[data-v-f2d55ffe] {\n    margin: 0 auto;\n    overflow: hidden;\n}\n.user-rcmd-pc .aside-left[data-v-f2d55ffe] {\n    float: left;\n    width: 210px;\n    background-color: #fff;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding: 30px 20px;\n    border: 1px solid #ddd;\n}\n.user-rcmd-pc .aside-left .title[data-v-f2d55ffe] {\n      text-align: center;\n      word-wrap: break-word;\n      margin: 0 auto;\n      font-size: 18px;\n      line-height: 30px;\n      color: #333;\n}\n.user-rcmd-pc .aside-left .saoma[data-v-f2d55ffe] {\n      height: 30px;\n      font-size: 12px;\n      margin-top: 30px;\n      color: #666;\n      text-align: center;\n      line-height: 30px;\n}\n.user-rcmd-pc .aside-left .img-box[data-v-f2d55ffe] {\n      width: 140px;\n      height: 140px;\n      margin: 10px auto 0;\n      border: 1px solid #ddd;\n}\n.user-rcmd-pc .aside-left .img-box img[data-v-f2d55ffe] {\n        width: 100%;\n        height: 100%;\n}\n.user-rcmd-pc .aside-left .lianjie[data-v-f2d55ffe] {\n      line-height: 20px;\n      font-size: 12px;\n      color: #999;\n      margin-top: 13px;\n      text-align: center;\n      word-wrap: break-word;\n}\n.user-rcmd-pc .aside-left a[data-v-f2d55ffe] {\n      display: block;\n      width: 140px;\n      height: 40px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      border: 1px solid #cccccc;\n      border-radius: 5px;\n      font-size: 14px;\n      color: #333333;\n      text-align: center;\n      line-height: 40px;\n      margin: 20px auto 0;\n}\n.user-rcmd-pc .aside-left a.btn3[data-v-f2d55ffe] {\n        margin-top: 10px;\n        background-color: #cc0000;\n        color: #fff;\n        border: none;\n}\n.user-rcmd-pc .show-content[data-v-f2d55ffe] {\n    float: left;\n    margin-left: 20px;\n}\n.user-rcmd-pc .show-content .cmder-header[data-v-f2d55ffe] {\n      position: relative;\n      width: 960px;\n      height: 180px;\n      clear: both;\n      background: url("+a(t("bOqa"))+") no-repeat 0 0;\n      padding-left: 20px;\n      padding-top: 20px;\n      padding-right: 20px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n}\n.user-rcmd-pc .show-content .cmder-header .mingpian-footer[data-v-f2d55ffe] {\n        float: left;\n        position: relative;\n        width: 392px;\n        height: 50px;\n        clear: both;\n        overflow: hidden;\n}\n.user-rcmd-pc .show-content .cmder-header .mingpian-footer img[data-v-f2d55ffe] {\n          float: left;\n          width: 50px;\n          height: 50px;\n          border-radius: 50%;\n}\n.user-rcmd-pc .show-content .cmder-header .mingpian-footer .geren[data-v-f2d55ffe] {\n          float: left;\n          width: 332px;\n          margin-left: 10px;\n}\n.user-rcmd-pc .show-content .cmder-header .mingpian-footer .geren span[data-v-f2d55ffe] {\n            display: block;\n            line-height: 30px;\n            font-size: 14px;\n            color: #fff;\n}\n.user-rcmd-pc .show-content .cmder-header .mingpian-footer .geren em[data-v-f2d55ffe] {\n            display: inline-block;\n            padding: 0 10px;\n            font-size: 12px;\n            color: #fff;\n            line-height: 20px;\n            border: 1px solid #127f75;\n            border-bottom-color: #2a4c74;\n            border-radius: 20px;\n            -webkit-box-sizing: border-box;\n                    box-sizing: border-box;\n}\n.user-rcmd-pc .show-content .cmder-header .lianxi-fs[data-v-f2d55ffe] {\n        float: right;\n        width: 382px;\n        overflow: hidden;\n}\n.user-rcmd-pc .show-content .cmder-header .lianxi-fs div[data-v-f2d55ffe] {\n          width: 100px;\n          float: left;\n          margin-right: 20px;\n          padding-right: 20px;\n}\n.user-rcmd-pc .show-content .cmder-header .lianxi-fs div[data-v-f2d55ffe]:nth-child(1), .user-rcmd-pc .show-content .cmder-header .lianxi-fs div[data-v-f2d55ffe]:nth-child(2) {\n          border-right: 1px dashed #44485a;\n}\n.user-rcmd-pc .show-content .cmder-header .lianxi-fs div[data-v-f2d55ffe]:nth-child(3) {\n          margin-right: 0;\n          padding-right: 0;\n}\n.user-rcmd-pc .show-content .cmder-header .lianxi-fs div p[data-v-f2d55ffe] {\n          font-size: 14px;\n          color: #fff;\n          text-align: center;\n          line-height: 20px;\n}\n.user-rcmd-pc .show-content .cmder-header .lianxi-fs div h4[data-v-f2d55ffe] {\n          font-size: 14px;\n          color: #fff;\n          font-weight: bold;\n          margin-top: 10px;\n          text-align: center;\n          width: 100px;\n          line-height: 20px;\n}\n.user-rcmd-pc .show-content .cmder-header .mingpian-title[data-v-f2d55ffe] {\n        position: absolute;\n        top: 110px;\n        left: 20px;\n        clear: both;\n        width: 920px;\n        height: 120px;\n        background-color: #fff;\n        font-size: 14px;\n        color: #333;\n        line-height: 26px;\n        border-radius: 10px;\n        -webkit-box-shadow: 0px 0px 10px gray;\n                box-shadow: 0px 0px 10px gray;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        padding: 20px 50px 0;\n}\n.user-rcmd-pc .patent-list[data-v-f2d55ffe] {\n    width: 960px;\n    padding: 80px 20px 0;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    background-color: #fff;\n}\n.user-rcmd-pc .patent-list h3[data-v-f2d55ffe] {\n      font-size: 18px;\n      color: #333;\n      font-weight: bold;\n      line-height: 35px;\n}\n.user-rcmd-pc .patent-list .table-box[data-v-f2d55ffe] {\n      margin-top: 10px;\n      width: 100%;\n}\n.user-rcmd-pc .patent-list .table-box table[data-v-f2d55ffe] {\n        width: 100%;\n}\n.user-rcmd-pc .patent-list .table-box th[data-v-f2d55ffe] {\n        font-size: 14px;\n        line-height: 50px;\n        color: #999;\n        border-bottom: 1px solid #ddd;\n        background-color: #f6f6f6;\n}\n.user-rcmd-pc .patent-list .table-box td[data-v-f2d55ffe] {\n        text-align: center;\n        font-size: 14px;\n        color: #666;\n        padding: 20px;\n        border-bottom: 1px solid #dddddd;\n}\n.user-rcmd-pc .patent-list .table-box td[data-v-f2d55ffe]:first-of-type {\n          text-align: left;\n}\n.user-rcmd-pc .patent-list .table-box .money[data-v-f2d55ffe] {\n        color: #cc0000;\n}\n.user-rcmd-pc .patent-list .table-box .patent-info[data-v-f2d55ffe] {\n        width: 320px;\n}\n.user-rcmd-pc .patent-list .table-box .patent-info p[data-v-f2d55ffe] {\n          line-height: 1.6;\n          margin-bottom: 10px;\n          color: #333;\n}\n.user-rcmd-pc .patent-list .table-box .patent-info span[data-v-f2d55ffe] {\n          color: #999;\n}\n","",{version:3,sources:["F:/FE/patentMall/patentWeb/src/views/userRcmd-pc.vue"],names:[],mappings:"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",file:"userRcmd-pc.vue",sourcesContent:['\n.user-rcmd-pc[data-v-f2d55ffe] {\n  padding: 30px 0;\n  background-color: #f2f3f4;\n}\n.user-rcmd-pc .w1190[data-v-f2d55ffe] {\n    margin: 0 auto;\n    overflow: hidden;\n}\n.user-rcmd-pc .aside-left[data-v-f2d55ffe] {\n    float: left;\n    width: 210px;\n    background-color: #fff;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding: 30px 20px;\n    border: 1px solid #ddd;\n}\n.user-rcmd-pc .aside-left .title[data-v-f2d55ffe] {\n      text-align: center;\n      word-wrap: break-word;\n      margin: 0 auto;\n      font-size: 18px;\n      line-height: 30px;\n      color: #333;\n}\n.user-rcmd-pc .aside-left .saoma[data-v-f2d55ffe] {\n      height: 30px;\n      font-size: 12px;\n      margin-top: 30px;\n      color: #666;\n      text-align: center;\n      line-height: 30px;\n}\n.user-rcmd-pc .aside-left .img-box[data-v-f2d55ffe] {\n      width: 140px;\n      height: 140px;\n      margin: 10px auto 0;\n      border: 1px solid #ddd;\n}\n.user-rcmd-pc .aside-left .img-box img[data-v-f2d55ffe] {\n        width: 100%;\n        height: 100%;\n}\n.user-rcmd-pc .aside-left .lianjie[data-v-f2d55ffe] {\n      line-height: 20px;\n      font-size: 12px;\n      color: #999;\n      margin-top: 13px;\n      text-align: center;\n      word-wrap: break-word;\n}\n.user-rcmd-pc .aside-left a[data-v-f2d55ffe] {\n      display: block;\n      width: 140px;\n      height: 40px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      border: 1px solid #cccccc;\n      border-radius: 5px;\n      font-size: 14px;\n      color: #333333;\n      text-align: center;\n      line-height: 40px;\n      margin: 20px auto 0;\n}\n.user-rcmd-pc .aside-left a.btn3[data-v-f2d55ffe] {\n        margin-top: 10px;\n        background-color: #cc0000;\n        color: #fff;\n        border: none;\n}\n.user-rcmd-pc .show-content[data-v-f2d55ffe] {\n    float: left;\n    margin-left: 20px;\n}\n.user-rcmd-pc .show-content .cmder-header[data-v-f2d55ffe] {\n      position: relative;\n      width: 960px;\n      height: 180px;\n      clear: both;\n      background: url("../assets/images/member/tuijianhan.jpg") no-repeat 0 0;\n      padding-left: 20px;\n      padding-top: 20px;\n      padding-right: 20px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n}\n.user-rcmd-pc .show-content .cmder-header .mingpian-footer[data-v-f2d55ffe] {\n        float: left;\n        position: relative;\n        width: 392px;\n        height: 50px;\n        clear: both;\n        overflow: hidden;\n}\n.user-rcmd-pc .show-content .cmder-header .mingpian-footer img[data-v-f2d55ffe] {\n          float: left;\n          width: 50px;\n          height: 50px;\n          border-radius: 50%;\n}\n.user-rcmd-pc .show-content .cmder-header .mingpian-footer .geren[data-v-f2d55ffe] {\n          float: left;\n          width: 332px;\n          margin-left: 10px;\n}\n.user-rcmd-pc .show-content .cmder-header .mingpian-footer .geren span[data-v-f2d55ffe] {\n            display: block;\n            line-height: 30px;\n            font-size: 14px;\n            color: #fff;\n}\n.user-rcmd-pc .show-content .cmder-header .mingpian-footer .geren em[data-v-f2d55ffe] {\n            display: inline-block;\n            padding: 0 10px;\n            font-size: 12px;\n            color: #fff;\n            line-height: 20px;\n            border: 1px solid #127f75;\n            border-bottom-color: #2a4c74;\n            border-radius: 20px;\n            -webkit-box-sizing: border-box;\n                    box-sizing: border-box;\n}\n.user-rcmd-pc .show-content .cmder-header .lianxi-fs[data-v-f2d55ffe] {\n        float: right;\n        width: 382px;\n        overflow: hidden;\n}\n.user-rcmd-pc .show-content .cmder-header .lianxi-fs div[data-v-f2d55ffe] {\n          width: 100px;\n          float: left;\n          margin-right: 20px;\n          padding-right: 20px;\n}\n.user-rcmd-pc .show-content .cmder-header .lianxi-fs div[data-v-f2d55ffe]:nth-child(1), .user-rcmd-pc .show-content .cmder-header .lianxi-fs div[data-v-f2d55ffe]:nth-child(2) {\n          border-right: 1px dashed #44485a;\n}\n.user-rcmd-pc .show-content .cmder-header .lianxi-fs div[data-v-f2d55ffe]:nth-child(3) {\n          margin-right: 0;\n          padding-right: 0;\n}\n.user-rcmd-pc .show-content .cmder-header .lianxi-fs div p[data-v-f2d55ffe] {\n          font-size: 14px;\n          color: #fff;\n          text-align: center;\n          line-height: 20px;\n}\n.user-rcmd-pc .show-content .cmder-header .lianxi-fs div h4[data-v-f2d55ffe] {\n          font-size: 14px;\n          color: #fff;\n          font-weight: bold;\n          margin-top: 10px;\n          text-align: center;\n          width: 100px;\n          line-height: 20px;\n}\n.user-rcmd-pc .show-content .cmder-header .mingpian-title[data-v-f2d55ffe] {\n        position: absolute;\n        top: 110px;\n        left: 20px;\n        clear: both;\n        width: 920px;\n        height: 120px;\n        background-color: #fff;\n        font-size: 14px;\n        color: #333;\n        line-height: 26px;\n        border-radius: 10px;\n        -webkit-box-shadow: 0px 0px 10px gray;\n                box-shadow: 0px 0px 10px gray;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        padding: 20px 50px 0;\n}\n.user-rcmd-pc .patent-list[data-v-f2d55ffe] {\n    width: 960px;\n    padding: 80px 20px 0;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    background-color: #fff;\n}\n.user-rcmd-pc .patent-list h3[data-v-f2d55ffe] {\n      font-size: 18px;\n      color: #333;\n      font-weight: bold;\n      line-height: 35px;\n}\n.user-rcmd-pc .patent-list .table-box[data-v-f2d55ffe] {\n      margin-top: 10px;\n      width: 100%;\n}\n.user-rcmd-pc .patent-list .table-box table[data-v-f2d55ffe] {\n        width: 100%;\n}\n.user-rcmd-pc .patent-list .table-box th[data-v-f2d55ffe] {\n        font-size: 14px;\n        line-height: 50px;\n        color: #999;\n        border-bottom: 1px solid #ddd;\n        background-color: #f6f6f6;\n}\n.user-rcmd-pc .patent-list .table-box td[data-v-f2d55ffe] {\n        text-align: center;\n        font-size: 14px;\n        color: #666;\n        padding: 20px;\n        border-bottom: 1px solid #dddddd;\n}\n.user-rcmd-pc .patent-list .table-box td[data-v-f2d55ffe]:first-of-type {\n          text-align: left;\n}\n.user-rcmd-pc .patent-list .table-box .money[data-v-f2d55ffe] {\n        color: #cc0000;\n}\n.user-rcmd-pc .patent-list .table-box .patent-info[data-v-f2d55ffe] {\n        width: 320px;\n}\n.user-rcmd-pc .patent-list .table-box .patent-info p[data-v-f2d55ffe] {\n          line-height: 1.6;\n          margin-bottom: 10px;\n          color: #333;\n}\n.user-rcmd-pc .patent-list .table-box .patent-info span[data-v-f2d55ffe] {\n          color: #999;\n}\n'],sourceRoot:""}])}});
//# sourceMappingURL=19.a4d2b44465cdf210a45a.js.map