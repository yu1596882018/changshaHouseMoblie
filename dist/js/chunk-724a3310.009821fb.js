(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-724a3310"],{"53fc":function(e,t,o){"use strict";o("5952")},5952:function(e,t,o){},a402:function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"house-search"},[o("van-nav-bar",{attrs:{title:"楼盘数据更新","left-text":"返回","left-arrow":""},on:{"click-left":e.onClickLeft}}),o("van-form",{ref:"searchForm",on:{submit:e.onSubmit}},[o("van-field",{attrs:{name:"yszh",label:"预售许可证",placeholder:"请填写预售许可证",rules:[{required:!0,message:"请填写预售许可证"}]},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),o("van-field",{attrs:{name:"verify_code",label:"验证码",placeholder:"请填写验证码",autocomplete:"off",rules:[{required:!0,message:"请填写验证码"}]},scopedSlots:e._u([{key:"button",fn:function(){return[o("img",{staticClass:"code-img",attrs:{src:e.codeImgUrl},on:{click:e.switchCodeImg}})]},proxy:!0}]),model:{value:e.verifyCode,callback:function(t){e.verifyCode=t},expression:"verifyCode"}})],1),o("div",{staticStyle:{margin:"16px"}},[o("van-button",{attrs:{round:"",block:"",type:"info"},on:{click:e.search2}},[e._v("同步“长沙市住房和城乡建设局”公示数据")])],1)],1)},n=[],s=(o("e7e5"),o("d399")),r=o("f121"),a={data:function(){return{username:this.$route.query.code||"",verifyCode:"",codeImgUrl:r["a"]+"/getCodeImg",submitType:0}},methods:{onClickLeft:function(){this.$router.back()},onSubmit:function(e){1===this.submitType?this.submitMethod1(e):2===this.submitType&&this.submitMethod2(e)},submitMethod1:function(e){var t=this;this.$services.verifyCode(e).then((function(e){console.log(e),e&&"1"!==e.status?(s["a"].fail({message:"验证码错误"}),t.switchCodeImg()):t.$services.getHouseInfoList({v:e.id}).then((function(o){var i,n;console.log(o);var r=document.createElement("div");r.innerHTML=e.content;var a=null===(i=r.querySelectorAll("a"))||void 0===i||null===(n=i[0])||void 0===n?void 0:n.innerHTML;o.data.count?t.$router.push({path:"/houseChildren",query:{id:e.id,name:a}}):s["a"].fail("在已有数据中，没有该楼盘信息，试试爬取网络数据查询吧")}))}))},submitMethod2:function(e){var t=this;this.$services.verifyCode(e).then((function(e){console.log(e),e&&"1"!==e.status?(s["a"].fail({message:"验证码错误"}),t.switchCodeImg()):(Object(s["a"])({message:"请耐心等待，这个时间会比较长噢~",position:"bottom",duration:3e3}),t.$services.collectHouseInfo(e.id).then((function(o){var i,n;console.log(o);var r=document.createElement("div");r.innerHTML=e.content;var a=null===(i=r.querySelectorAll("a"))||void 0===i||null===(n=i[0])||void 0===n?void 0:n.innerHTML;"success"===o?t.$router.push({path:"/houseChildren",query:{id:e.id,name:a}}):s["a"].fail("查询失败，请稍后再试噢~")})))}))},search1:function(){this.submitType=1,this.$refs.searchForm.submit()},search2:function(){this.submitType=2,this.$refs.searchForm.submit()},switchCodeImg:function(){this.codeImgUrl=r["a"]+"/getCodeImg?v"+Math.random()}}},c=a,u=(o("53fc"),o("2877")),l=Object(u["a"])(c,i,n,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-724a3310.009821fb.js.map