(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c4c51c2"],{"10d1":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("van-nav-bar",{attrs:{title:t.$route.query.name,"left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),i("van-dropdown-menu",[i("van-dropdown-item",{attrs:{options:t.option1},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}})],1),i("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[i("van-list",{staticClass:"case-list",attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[i("van-collapse",{model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},t._l(t.filterList,(function(e){return i("van-collapse-item",{key:e.id,attrs:{name:e.id,title:e.a,value:e.i}},t._l(Object.keys(t.colAttrs),(function(n){return i("van-cell",{key:n,attrs:{title:t.colAttrs[n]}},[t._v(t._s(e[n]))])})),1)})),1)],1)],1)],1)},o=[],a=(i("99af"),i("4de4"),{name:"Home",components:{},created:function(){},data:function(){return{colAttrs:{a:"户室号",b:"楼层",c:"房屋用途",d:"房屋类型",e:"装修状态",f:"建筑面积",g:"套内面积",h:"分摊面积",i:"销售状态"},activeNames:[],list:[],loading:!1,finished:!1,refreshing:!1,offset:0,limit:20,value1:0,option1:[{text:"全部",value:0},{text:"可售",value:1},{text:"已售",value:2}]}},methods:{onClickLeft:function(){this.$router.back()},onLoad:function(){var t=this;this.$services.getHouseChildrenInfo(this.$route.query.id,{offset:this.offset,limit:this.limit}).then((function(e){console.log(e.data),t.refreshing&&(t.refreshing=!1),t.offset<=0?t.list=e.data.rows:t.list=t.list.concat(e.data.rows),t.loading=!1,t.offset+=t.limit,e.data.count<t.offset&&(t.finished=!0)}))},onRefresh:function(){this.finished=!1,this.loading=!0,this.offset=0,this.onLoad()}},computed:{filterList:function(){return 1===this.value1?this.list.filter((function(t){return"可售"===t.i})):2===this.value1?this.list.filter((function(t){return"已售"===t.i})):this.list}}}),s=a,r=i("2877"),l=Object(r["a"])(s,n,o,!1,null,null,null);e["default"]=l.exports},"99af":function(t,e,i){"use strict";var n=i("23e7"),o=i("d039"),a=i("e8b5"),s=i("861d"),r=i("7b0b"),l=i("50c4"),c=i("8418"),f=i("65f0"),u=i("1dde"),d=i("b622"),h=i("2d00"),v=d("isConcatSpreadable"),m=9007199254740991,p="Maximum allowed index exceeded",g=h>=51||!o((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),b=u("concat"),k=function(t){if(!s(t))return!1;var e=t[v];return void 0!==e?!!e:a(t)},w=!g||!b;n({target:"Array",proto:!0,forced:w},{concat:function(t){var e,i,n,o,a,s=r(this),u=f(s,0),d=0;for(e=-1,n=arguments.length;e<n;e++)if(a=-1===e?s:arguments[e],k(a)){if(o=l(a.length),d+o>m)throw TypeError(p);for(i=0;i<o;i++,d++)i in a&&c(u,d,a[i])}else{if(d>=m)throw TypeError(p);c(u,d++,a)}return u.length=d,u}})}}]);
//# sourceMappingURL=chunk-7c4c51c2.5e02e685.js.map