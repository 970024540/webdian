webpackJsonp([2,0],[function(t,s,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var a=e(5),n=i(a),r=e(182),l=i(r),o=e(201),c=i(o),d=e(185),u=i(d),v=e(187),f=i(v),p=e(188),_=i(p),h=e(181),C=i(h),m=e(177),g=(i(m),e(203)),j=i(g),w=e(202),y=i(w);e(176),n.default.use(C.default),n.default.use(c.default),n.default.use(j.default),n.default.use(y.default);var b=new j.default.Store({state:{count:0},addCartEl:{},mutations:{increment:function(t){t.count++}}}),k=new c.default({routes:[{path:"/goods",component:u.default},{path:"/ratings",component:f.default},{path:"/seller",component:_.default}],linkActiveClass:"active"});new n.default({router:k,store:b,template:"<App/>",components:{App:l.default},data:{eventHub:new n.default},render:function(t){return t(l.default)}}).$mount("#app"),k.push("goods")},,,,,,,,function(t,s,e){e(170);var i=e(3)(e(155),e(195),null,null);t.exports=i.exports},function(t,s,e){e(167);var i=e(3)(e(163),e(192),null,null);t.exports=i.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,s,e){e(166);var i=e(3)(e(159),e(191),"data-v-1007ef1b",null);t.exports=i.exports},,,,,,,,,,,,,,,,,,function(t,s,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var a=e(186),n=i(a),r=e(6),l=i(r);s.default={data:function(){return{seller:{}}},created:function(){var t=this;l.default.get("static/data.json").then(function(s){t.seller=s.data.seller})},components:{"v-header":n.default}}},function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={props:{isShow:Boolean}}},function(t,s,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var a=e(5),n=i(a);s.default={props:{food:Object},methods:{addCart:function(t){console.log(t.target),t._constructed&&(this.food.count||n.default.set(this.food,"count",0),this.food.count++,this.$root.eventHub.$emit("cart.add",t.target))},decreaseCart:function(){event._constructed&&this.food.count&&this.food.count--}}}},function(t,s,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0}),e(164);var a=e(4),n=i(a),r=e(8),l=i(r);s.default={components:{cartcontrol:l.default},props:{food:Object},data:function(){return{showDetail:!1,classifyArr:[{name:"全部",count:this.food.ratings.length,active:!0},{name:"推荐",count:this.food.ratings.filter(function(t){return 0===t.rateType}).length,active:!1},{name:"吐槽",count:this.food.ratings.filter(function(t){return t.rateType}).length,active:!1}],evelflag:!0}},computed:{evelArr:function(){var t=this,s=0;return this.classifyArr.forEach(function(t,e){t.active&&(s=e)}),this.detailWrapper&&this.$nextTick(function(){t.detailWrapper.refresh()}),s?this.food.ratings.filter(function(e){return t.evelflag?e.rateType===s-1&&e.text:e.rateType===s-1}):this.food.ratings.filter(function(s){return!t.evelflag||s.text})}},methods:{showToggle:function(){var t=this;this.showDetail=!this.showDetail,this.showDetail&&this.$nextTick(function(){t._initScroll()})},_initScroll:function(){this.detailWrapper?this.detailWrapper.refresh():this.detailWrapper=new n.default(this.$refs.detailWrapper,{click:!0})},addCart:function(t){t._constructed&&(this.$set(this.food,"count",1),this.$root.eventHub.$emit("cart.add",t.target))},filterEvel:function(t){this.classifyArr.forEach(function(t){t.active=!1}),t.active=!0}}}},function(t,s,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var a=e(135),n=i(a),r=e(4),l=i(r),o=e(189),c=i(o),d=e(8),u=i(d),v=e(184),f=i(v),p=e(6),_=i(p),h=e(5),C=i(h);new C.default;s.default={props:{seller:Object},created:function(){var t=this;_.default.get("static/data.json").then(function(s){t.goods=s.data.goods,t.$nextTick(function(){t._initScroll(),t._calculateHeight()})})},data:function(){return{goods:[],listHeight:[],foodsScrollY:0,selectedFood:""}},computed:{menuCurrentIndex:function(){for(var t=0,s=this.listHeight.length;t<s;t++){var e=this.listHeight[t],i=this.listHeight[t+1];if(!i||this.foodsScrollY>=e&&this.foodsScrollY<i)return t}return 0},selectFoods:function(){var t=[];return this.goods.forEach(function(s){s.foods.forEach(function(s){s.count&&t.push(s)})}),t}},methods:{_initScroll:function(){var t=this;this.menuWrapper=new l.default(this.$refs.menuWrapper,{click:!0}),this.foodsScroll=new l.default(this.$refs.foodsWrapper,{click:!0,probeType:3}),this.foodsScroll.on("scroll",function(s){t.foodsScrollY=Math.abs(Math.round(s.y))})},_calculateHeight:function(){var t=this.$refs.foodsWrapper.querySelectorAll(".food-list-hook"),s=0;this.listHeight.push(s);for(var e=0,i=t.length;e<i;e++){var a=t[e];s+=a.clientHeight,this.listHeight.push(s)}},menuClick:function(t,s){s._constructed&&this.foodsScroll.scrollTo(0,-this.listHeight[t],300)},goDetail:function(t){var s=this;this.selectedFood=t,this.$nextTick(function(){s.$refs.myFood.showToggle()})}},components:{iconMap:n.default,shopCart:c.default,cartcontrol:u.default,foodDetail:f.default}}},function(t,s,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var a=e(9),n=i(a);s.default={props:{seller:{type:Object}},created:function(){this.iconClassMap=["decrease","discount","special","invoice","guarantee"]},components:{star:n.default},data:function(){return{detailShow:!1}},methods:{showDetails:function(){this.detailShow=!0},hideDetail:function(){this.detailShow=!1}}}},function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={props:{iconType:Number},created:function(){this.iconClassMap=["decrease","discount","special","invoice","guarantee"]}}},function(t,s,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var a=e(6),n=i(a),r=e(9),l=i(r),o=e(4),c=i(o);s.default={components:{star:l.default},data:function(){return{ratings:[],seller:{},classifyArr:[{name:"全部",count:0,active:!0},{name:"推荐",count:0,active:!1},{name:"吐槽",count:0,active:!1}],evelflag:!0}},created:function(){this.init()},computed:{evelArr:function(){var t=this,s=0;return this.classifyArr.forEach(function(t,e){t.active&&(s=e)}),this.scroll&&this.$nextTick(function(){t.scroll.refresh()}),s?this.ratings.filter(function(e){return t.evelflag?e.rateType===s-1&&e.text:e.rateType===s-1}):this.ratings.filter(function(s){return!t.evelflag||s.text})}},methods:{init:function(){var t=this;n.default.get("static/data.json").then(function(s){t.ratings=s.data.ratings,t.seller=s.data.seller,t._initClassifyArr(),t.$nextTick(function(){t.scroll=new c.default(t.$refs.ratingsWrapper,{click:!0})})})},_initClassifyArr:function(){var t=this;this.classifyArr.forEach(function(s,e){e?s.count=t.ratings.filter(function(t){return t.rateType===e-1}).length:s.count=t.ratings.length})},filterEvel:function(t){this.classifyArr.forEach(function(t){t.active=!1}),t.active=!0}}}},function(t,s,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var a=e(6),n=i(a),r=e(4),l=i(r),o=e(9),c=i(o),d=e(135),u=i(d);s.default={components:{star:c.default,iconMap:u.default},data:function(){return{seller:{},collectflag:!1}},created:function(){this._initTwo()},methods:{_initTwo:function(){var t=this;n.default.get("static/data.json").then(function(s){t.seller=s.data.seller,t.$nextTick(function(){t.sellerScroll=new l.default(t.$refs.sellerWrapper,{click:!0}),t._initPicScroll()})})},_initPicScroll:function(){if(!this.picsScroll){var t=120,s=6,e=this.seller.pics.length;this.$refs.picList.style.width=t*e+s*(e-1)+"px",this.picsScroll=new l.default(this.$refs.picsWrapper,{scrollX:!0})}}}}},function(t,s,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var a=e(8),n=i(a),r=e(183),l=i(r),o=e(4),c=i(o);s.default={props:{selectFoods:{type:Array,default:[]},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0}},data:function(){return{balls:[{show:!1},{show:!1},{show:!1},{show:!1},{show:!1}],dropBalls:[],listShow:!1}},created:function(){this.$root.eventHub.$on("cart.add",this.drop)},computed:{showBackdrop:function(){return!(!this.listShow||!this.totalPrice)||(this.listShow=!1,!1)},totalPrice:function(){var t=0;return this.selectFoods.forEach(function(s){s.count&&(t+=s.price*s.count)}),t},totalCount:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.count}),t},leftAmount:function(){return!!(this.minPrice-this.totalPrice>0&&totalPrice)},payDesc:function(){var t=this.minPrice-this.totalPrice;return this.totalPrice?t>0?"还差￥"+t+"元":"去结算":"￥"+this.totalPrice+"起送"}},methods:{listTotal:function(){var t=this;"去结算"==this.payDesc&&this.$dialog.confirm({title:"订单提交",mes:"总共需要支付:"+(this.totalPrice+this.deliveryPrice)+"元",opts:function(){t.$dialog.toast({mes:"后续开发中，敬请期待@@@",timeout:1e3})}})},drop:function(t){for(var s=0,e=this.balls.length;s<e;s++){var i=this.balls[s];if(!i.show)return i.show=!0,i.el=t,void this.dropBalls.push(i)}},setEmpty:function(){this.selectFoods.forEach(function(t){t.count=0})},hideBackdrop:function(){this.listShow=!1},_initScroll:function(){this.foodlistScroll=new c.default(this.$refs.foodlist,{click:!0})},listToggle:function(){var t=this;this.selectFoods.length&&(this.listShow=!this.listShow,this.listShow&&this.$nextTick(function(){t.foodlistScroll?t.foodlistScroll.refresh():t._initScroll()}))},beforeEnter:function(t){for(var s=this.balls.length;s--;){var e=this.balls[s];if(e.show){var i=e.el.getBoundingClientRect(),a=i.left-32,n=-(window.innerHeight-i.top-22);t.style.display="",t.style.webkitTransform="translate3d(0,"+n+"px,0)",t.style.transform="translate3d(0,"+n+"px,0)";var r=t.querySelector(".inner-hook");r.style.webkitTransform="translate3d("+a+"px,0,0)",r.style.transform="translate3d("+a+"px,0,0)"}}},enter:function(t){t.offsetHeight,this.$nextTick(function(){t.style.webkitTransform="translate3d(0,0,0)",t.style.transform="translate3d(0,0,0)";var s=t.querySelector(".inner-hook");s.style.webkitTransform="translate3d(0,0,0)",s.style.transform="translate3d(0,0,0)"})},afterEnter:function(t){var s=this.dropBalls.shift();s&&(s.show=!1,t.style.display="none")}},components:{cartcontrol:n.default,backdrop:l.default}}},function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=5,i="on",a="half",n="off";s.default={props:{size:{type:Number},score:{type:Number}},computed:{starType:function(){return"star-"+this.size},itemClasses:function(){for(var t=[],s=Math.floor(2*this.score)/2,r=s%1!==0,l=Math.floor(s),o=0;o<l;o++)t.push(i);for(r&&t.push(a);t.length<e;)t.push(n);return t}}}},function(t,s,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var a=e(5),n=i(a),r=e(1),l=i(r);n.default.filter("time",function(t,s){return s=s||"YYYY-MM-DD HH:mm",(0,l.default)(t).format(s)})},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},,function(t,s,e){function i(t){return e(a(t))}function a(t){return n[t]||function(){throw new Error("Cannot find module '"+t+"'.")}()}var n={"./af":15,"./af.js":15,"./ar":22,"./ar-dz":16,"./ar-dz.js":16,"./ar-kw":17,"./ar-kw.js":17,"./ar-ly":18,"./ar-ly.js":18,"./ar-ma":19,"./ar-ma.js":19,"./ar-sa":20,"./ar-sa.js":20,"./ar-tn":21,"./ar-tn.js":21,"./ar.js":22,"./az":23,"./az.js":23,"./be":24,"./be.js":24,"./bg":25,"./bg.js":25,"./bm":26,"./bm.js":26,"./bn":27,"./bn.js":27,"./bo":28,"./bo.js":28,"./br":29,"./br.js":29,"./bs":30,"./bs.js":30,"./ca":31,"./ca.js":31,"./cs":32,"./cs.js":32,"./cv":33,"./cv.js":33,"./cy":34,"./cy.js":34,"./da":35,"./da.js":35,"./de":38,"./de-at":36,"./de-at.js":36,"./de-ch":37,"./de-ch.js":37,"./de.js":38,"./dv":39,"./dv.js":39,"./el":40,"./el.js":40,"./en-au":41,"./en-au.js":41,"./en-ca":42,"./en-ca.js":42,"./en-gb":43,"./en-gb.js":43,"./en-ie":44,"./en-ie.js":44,"./en-nz":45,"./en-nz.js":45,"./eo":46,"./eo.js":46,"./es":49,"./es-do":47,"./es-do.js":47,"./es-us":48,"./es-us.js":48,"./es.js":49,"./et":50,"./et.js":50,"./eu":51,"./eu.js":51,"./fa":52,"./fa.js":52,"./fi":53,"./fi.js":53,"./fo":54,"./fo.js":54,"./fr":57,"./fr-ca":55,"./fr-ca.js":55,"./fr-ch":56,"./fr-ch.js":56,"./fr.js":57,"./fy":58,"./fy.js":58,"./gd":59,"./gd.js":59,"./gl":60,"./gl.js":60,"./gom-latn":61,"./gom-latn.js":61,"./gu":62,"./gu.js":62,"./he":63,"./he.js":63,"./hi":64,"./hi.js":64,"./hr":65,"./hr.js":65,"./hu":66,"./hu.js":66,"./hy-am":67,"./hy-am.js":67,"./id":68,"./id.js":68,"./is":69,"./is.js":69,"./it":70,"./it.js":70,"./ja":71,"./ja.js":71,"./jv":72,"./jv.js":72,"./ka":73,"./ka.js":73,"./kk":74,"./kk.js":74,"./km":75,"./km.js":75,"./kn":76,"./kn.js":76,"./ko":77,"./ko.js":77,"./ky":78,"./ky.js":78,"./lb":79,"./lb.js":79,"./lo":80,"./lo.js":80,"./lt":81,"./lt.js":81,"./lv":82,"./lv.js":82,"./me":83,"./me.js":83,"./mi":84,"./mi.js":84,"./mk":85,"./mk.js":85,"./ml":86,"./ml.js":86,"./mr":87,"./mr.js":87,"./ms":89,"./ms-my":88,"./ms-my.js":88,"./ms.js":89,"./mt":90,"./mt.js":90,"./my":91,"./my.js":91,"./nb":92,"./nb.js":92,"./ne":93,"./ne.js":93,"./nl":95,"./nl-be":94,"./nl-be.js":94,"./nl.js":95,"./nn":96,"./nn.js":96,"./pa-in":97,"./pa-in.js":97,"./pl":98,"./pl.js":98,"./pt":100,"./pt-br":99,"./pt-br.js":99,"./pt.js":100,"./ro":101,"./ro.js":101,"./ru":102,"./ru.js":102,"./sd":103,"./sd.js":103,"./se":104,"./se.js":104,"./si":105,"./si.js":105,"./sk":106,"./sk.js":106,"./sl":107,"./sl.js":107,"./sq":108,"./sq.js":108,"./sr":110,"./sr-cyrl":109,"./sr-cyrl.js":109,"./sr.js":110,"./ss":111,"./ss.js":111,"./sv":112,"./sv.js":112,"./sw":113,"./sw.js":113,"./ta":114,"./ta.js":114,"./te":115,"./te.js":115,"./tet":116,"./tet.js":116,"./th":117,"./th.js":117,"./tl-ph":118,"./tl-ph.js":118,"./tlh":119,"./tlh.js":119,"./tr":120,"./tr.js":120,"./tzl":121,"./tzl.js":121,"./tzm":123,"./tzm-latn":122,"./tzm-latn.js":122,"./tzm.js":123,"./uk":124,"./uk.js":124,"./ur":125,"./ur.js":125,"./uz":127,"./uz-latn":126,"./uz-latn.js":126,"./uz.js":127,"./vi":128,"./vi.js":128,"./x-pseudo":129,"./x-pseudo.js":129,"./yo":130,"./yo.js":130,"./zh-cn":131,"./zh-cn.js":131,"./zh-hk":132,"./zh-hk.js":132,"./zh-tw":133,"./zh-tw.js":133};i.keys=function(){return Object.keys(n)},i.resolve=a,t.exports=i,i.id=178},,,,function(t,s,e){e(171);var i=e(3)(e(153),e(196),null,null);t.exports=i.exports},function(t,s,e){e(165);var i=e(3)(e(154),e(190),null,null);t.exports=i.exports},function(t,s,e){e(169);var i=e(3)(e(156),e(194),"data-v-293505f3",null);t.exports=i.exports},function(t,s,e){e(174);var i=e(3)(e(157),e(199),null,null);t.exports=i.exports},function(t,s,e){e(172);var i=e(3)(e(158),e(197),null,null);t.exports=i.exports},function(t,s,e){e(175);var i=e(3)(e(160),e(200),"data-v-b24a6c7e",null);t.exports=i.exports},function(t,s,e){e(173);var i=e(3)(e(161),e(198),"data-v-5071881a",null);t.exports=i.exports},function(t,s,e){e(168);var i=e(3)(e(162),e(193),"data-v-20b4405a",null);t.exports=i.exports},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"fade-backdrop"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"backdrop"})])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"iconMap",class:t.iconClassMap[t.iconType]})},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"star",class:t.starType},t._l(t.itemClasses,function(t){return e("span",{staticClass:"star-item",class:t,attrs:{"track-by":"$index"}})}))},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{},[e("div",{staticClass:"shopCart"},[e("div",{staticClass:"content"},[e("div",{staticClass:"content-left",on:{click:t.listToggle}},[e("div",{staticClass:"logo-wrapper"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount,expression:"totalCount"}],staticClass:"badge"},[t._v("\n          "+t._s(t.totalCount)+"\n        ")]),t._v(" "),e("div",{staticClass:"logo",class:{active:t.totalPrice}},[e("i",{staticClass:"icon-shopping_cart"})])]),t._v(" "),e("div",{staticClass:"price",class:{active:t.totalPrice}},[t._v("\n        ￥"+t._s(t.totalPrice)+"\n      ")]),t._v(" "),e("div",{staticClass:"desc"},[t._v("\n        另需要配送费￥"+t._s(t.deliveryPrice)+"元\n      ")])]),t._v(" "),e("div",{staticClass:"content-right",class:{enough:t.totalPrice>=t.minPrice},on:{click:t.listTotal}},[t._v("\n      "+t._s(t.payDesc)+"\n    ")])]),t._v(" "),e("div",{staticClass:"ball-container"},t._l(t.balls,function(s,i){return e("transition",{attrs:{name:"drop"},on:{"before-enter":t.beforeEnter,enter:t.enter,"after-enter":t.afterEnter}},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.show,expression:"ball.show"}],staticClass:"ball"},[e("div",{staticClass:"inner inner-hook"})])])})),t._v(" "),e("transition",{attrs:{name:"transHeight"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"shopcart-list"},[e("div",{staticClass:"list-header"},[e("h1",{staticClass:"title"},[t._v("购物车")]),t._v(" "),e("span",{staticClass:"empty",on:{click:function(s){t.setEmpty()}}},[t._v("清空")])]),t._v(" "),e("div",{ref:"foodlist",staticClass:"list-content"},[e("ul",t._l(t.selectFoods,function(s){return e("li",{staticClass:"food"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"price"},[e("span",[t._v("￥"+t._s(s.price*s.count))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s}})],1)])}))])])])],1),t._v(" "),e("transition",{attrs:{name:"fade-backdrop"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showBackdrop,expression:"showBackdrop"}],staticClass:"backdrop",on:{click:t.hideBackdrop}})])],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showDetail,expression:"showDetail"}],ref:"detailWrapper",staticClass:"detailWrapper"},[e("div",{staticClass:"foodDetail"},[e("div",{staticClass:"back",on:{click:function(s){t.showToggle()}}},[e("i",{staticClass:"icon-arrow_lift"})]),t._v(" "),e("img",{attrs:{src:t.food.image,height:"425",width:"100%"}}),t._v(" "),e("div",{staticClass:"info"},[e("div",{staticClass:"title"},[t._v(t._s(t.food.name))]),t._v(" "),e("div",{staticClass:"desc"},[e("span",[t._v("月售"+t._s(t.food.sellCount))]),t._v(" "),e("span",[t._v("好评率"+t._s(t.food.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"unit"},[t._v("￥")]),t._v(t._s(t.food.price)+"\n          "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.food.oldPrice,expression:"food.oldPrice"}],staticClass:"oldPrice"},[t._v("￥"+t._s(t.food.oldPrice))])]),t._v(" "),e("div",{staticClass:"shopCart"},[e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.count,expression:"!food.count"}],staticClass:"text",on:{click:function(s){t.addCart(s)}}},[t._v("加入购物车")])])],1),t._v(" "),e("cartcontrol",{attrs:{food:t.food}})],1),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"desc"},[e("div",{staticClass:"title"},[t._v("商品介绍")]),t._v(" "),e("div",{staticClass:"content"},[t._v(t._s(t.food.info))])]),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"evaluation"},[e("div",{staticClass:"title"},[t._v("\n          商品评价\n        ")]),t._v(" "),e("div",{staticClass:"classify"},t._l(t.classifyArr,function(s,i){return e("span",{staticClass:"item",class:{active:s.active,bad:2==i,badActive:s.active&&2==i},on:{click:function(e){t.filterEvel(s)}}},[t._v("\n            "+t._s(s.name)),e("span",{staticClass:"count"},[t._v(t._s(s.count))])])})),t._v(" "),e("div",{staticClass:"switch",on:{click:function(s){t.evelflag=!t.evelflag}}},[e("span",{staticClass:"icon-check_circle",class:{on:t.evelflag}}),t._v(" "),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])]),t._v(" "),e("div",{staticClass:"evel-list"},[e("ul",t._l(t.evelArr,function(s){return e("li",{staticClass:"evel"},[e("div",{staticClass:"userInfo"},[e("div",{staticClass:"time"},[t._v(t._s(t._f("time")(s.rateTime)))]),t._v(" "),e("div",{staticClass:"user"},[e("span",[t._v(t._s(s.username))]),t._v(" "),e("span",{staticClass:"avatar"},[e("img",{attrs:{src:s.avatar,width:"12",height:"12"}})])])]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"icon",class:s.rateType?"icon-thumb_down":"icon-thumb_up"}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.text))])])])}))])])])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cartcontrol"},[e("transition",{attrs:{name:"fadeRotate"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-decrease",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.decreaseCart()}}},[e("span",{staticClass:"icon-remove_circle_outline inner"})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-count"},[t._v("\n    "+t._s(t.food.count)+"\n  ")]),t._v(" "),e("div",{staticClass:"cart-add",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.addCart(s)}}},[e("i",{staticClass:"icon-add_circle"})])],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("v-header",{attrs:{seller:t.seller}}),t._v(" "),e("div",{staticClass:"tab"},[e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/goods"}},[t._v("商品")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/ratings"}},[t._v("评论")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/seller"}},[t._v("商家")])],1)]),t._v(" "),e("keep-alive",[e("router-view",{attrs:{seller:t.seller}})],1)],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.seller.avatar,width:"64",height:"64"}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),e("div",{staticClass:"description"},[t._v("\r\n                "+t._s(t.seller.description+" / "+t.seller.deliveryTime+"分钟送达")+"\r\n            ")]),t._v(" "),t.seller.supports?e("div",{staticClass:"supports"},[e("div",{staticClass:"supports_desc"},[e("span",{staticClass:"icon",class:t.iconClassMap[t.seller.supports[0].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])])]):t._e()]),t._v(" "),t.seller.supports?e("div",{staticClass:"support-count",on:{click:function(s){t.showDetails()}}},[e("span",{staticClass:"count"},[t._v(t._s(t.seller.supports.length+"个"))]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()]),t._v(" "),e("div",{staticClass:"bulletin-wrapper",on:{click:function(s){t.showDetails()}}},[e("span",{staticClass:"bulletin-title"}),t._v(" "),e("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]),t._v(" "),e("div",{staticClass:"background"},[e("img",{attrs:{src:t.seller.avatar,width:"100%",height:"100%"}})]),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.detailShow?e("div",{staticClass:"detail"},[e("div",{staticClass:"detail-wrapper clearfix"},[e("div",{staticClass:"detail-main"},[e("h1",{staticClass:"name"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:48,score:t.seller.score}})],1),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("优惠信息")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s){return e("li",{staticClass:"support-item"},[e("span",{staticClass:"icon",class:t.iconClassMap[s.type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.description))])])})):t._e(),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("商家公告")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("div",{staticClass:"bulletin"},[t._v(t._s(t.seller.bulletin))])])]),t._v(" "),e("div",{staticClass:"detail-close"},[e("i",{staticClass:"icon-close",on:{click:function(s){t.hideDetail()}}})])]):t._e()])],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"sellerWrapper",staticClass:"seller-wrapper"},[e("div",{staticClass:"seller-content"},[e("div",{staticClass:"info"},[e("div",{staticClass:"title"},[e("div",{staticClass:"text"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:36,score:t.seller.score}}),t._v(" "),e("span",{staticClass:"rate-count"},[t._v("("+t._s(t.seller.ratingCount)+")")]),t._v(" "),e("span",{staticClass:"sell-count"},[t._v("月售"+t._s(t.seller.sellCount)+"单")])],1),t._v(" "),e("div",{staticClass:"collect",on:{click:function(s){t.collectflag=!t.collectflag}}},[e("span",{staticClass:"icon-favorite",class:{active:t.collectflag}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.collectflag?"已收藏":"收藏"))])])]),t._v(" "),e("div",{staticClass:"remark"},[e("div",{staticClass:"block"},[e("h2",[t._v("起送价")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"num"},[t._v(t._s(t.seller.minPrice))]),t._v("元\n          ")])]),t._v(" "),e("div",{staticClass:"block"},[e("h2",[t._v("商家配送")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"num"},[t._v(t._s(t.seller.deliveryPrice))]),t._v("元\n          ")])]),t._v(" "),e("div",{staticClass:"block"},[e("h2",[t._v("平均配送时间")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"num"},[t._v(t._s(t.seller.deliveryTime))]),t._v("分钟\n          ")])])])]),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"activities"},[e("div",{staticClass:"bulletin"},[e("h1",[t._v("公告与活动")]),t._v(" "),e("div",{staticClass:"content"},[t._v("\n          "+t._s(t.seller.bulletin)+"\n        ")])])]),t._v(" "),e("div",{staticClass:"supports"},[e("ul",t._l(t.seller.supports,function(s){return e("li",{staticClass:"item"},[e("iconMap",{attrs:{iconType:s.type}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.description))])],1)}))]),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"seller-imgs"},[e("h1",[t._v("商家实景")]),t._v(" "),e("div",{ref:"picsWrapper",staticClass:"img-wrapper"},[e("div",{ref:"picList"},t._l(t.seller.pics,function(t){return e("img",{attrs:{src:t,width:"120",height:"90"}})}))])]),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"seller-info"},[e("h1",[t._v("商家信息")]),t._v(" "),e("ul",{staticClass:"info-list"},t._l(t.seller.infos,function(s){return e("li",{staticClass:"info"},[t._v(t._s(s))])}))])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods"},[e("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[e("ul",t._l(t.goods,function(s,i){return e("li",{class:i==t.menuCurrentIndex?"menu-item-selected":"menu-item",on:{click:function(s){t.menuClick(i,s)}}},[e("span",{staticClass:"text"},[e("iconMap",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type>0"}],attrs:{iconType:s.type}}),t._v("\n          "+t._s(s.name)+"\n        ")],1)])}))]),t._v(" "),e("div",{ref:"foodsWrapper",staticClass:"foods-wrapper",attrs:{id:"wrapper"}},[e("ul",t._l(t.goods,function(s){return e("li",{staticClass:"food-list food-list-hook"},[e("h1",[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.foods,function(s){return e("li",{staticClass:"food-item",on:{click:function(e){t.goDetail(s)}}},[e("div",{staticClass:"icon"},[e("img",{attrs:{width:"57",height:"57",src:s.icon}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",[t._v(t._s(s.name))]),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:s.description,expression:"food.description"}],staticClass:"description"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"sell-info"},[e("span",{staticClass:"sellCount"},[t._v("月售"+t._s(s.sellCount)+"份")]),t._v(" "),e("span",{staticClass:"rating"},[t._v("好评率"+t._s(s.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"newPrice"},[e("span",{staticClass:"unit"},[t._v("￥")]),t._v(t._s(s.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"oldPrice"},[t._v("￥"+t._s(s.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s}})],1)])])}))])}))]),t._v(" "),e("shopCart",{attrs:{deliveryPrice:t.seller.deliveryPrice,minPrice:t.seller.minPrice,selectFoods:t.selectFoods}}),t._v(" "),t.selectedFood?e("foodDetail",{ref:"myFood",attrs:{food:t.selectedFood}}):t._e()],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"ratingsWrapper",staticClass:"ratingsWrapper"},[e("div",{staticClass:"ratings-content"},[e("div",{staticClass:"info"},[e("div",{staticClass:"mark"},[e("div",{staticClass:"num"},[t._v(t._s(t.seller.score))]),t._v(" "),e("div",{staticClass:"text"},[t._v("综合评分")]),t._v(" "),e("div",{staticClass:"contrast"},[t._v("高于周边商家"+t._s(t.seller.rankRate)+"%")])]),t._v(" "),e("div",{staticClass:"stars"},[e("div",{staticClass:"serviceScore"},[e("span",{staticClass:"text"},[t._v("服务态度")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.serviceScore}}),t._v(" "),e("span",{staticClass:"num"},[t._v(t._s(t.seller.serviceScore))])],1),t._v(" "),e("div",{staticClass:"foodScore"},[e("span",{staticClass:"text"},[t._v("服务态度")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.foodScore}}),t._v(" "),e("span",{staticClass:"num"},[t._v(t._s(t.seller.foodScore))])],1),t._v(" "),e("div",{staticClass:"deliveryTime"},[e("span",{staticClass:"text"},[t._v("送达时间")]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t.seller.deliveryTime)+"分钟")])])])]),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"evaluation"},[e("div",{staticClass:"classify"},t._l(t.classifyArr,function(s,i){return e("span",{staticClass:"item",class:{active:s.active,bad:2==i,badActive:s.active&&2==i},on:{click:function(e){t.filterEvel(s)}}},[t._v("\n          "+t._s(s.name)),e("span",{staticClass:"count"},[t._v(t._s(s.count))])])})),t._v(" "),e("div",{staticClass:"switch",on:{click:function(s){t.evelflag=!t.evelflag}}},[e("span",{staticClass:"icon-check_circle",class:{on:t.evelflag}}),t._v(" "),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])]),t._v(" "),e("div",{staticClass:"evel-list"},[e("ul",t._l(t.evelArr,function(s){return e("li",{staticClass:"evel"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:s.avatar,width:"28",height:"28"}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"user"},[e("span",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("span",{staticClass:"rateTime"},[t._v(t._s(t._f("time")(s.rateTime)))])]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:24,score:s.score}}),t._v(" "),e("span",{staticClass:"deliveryTime"},[t._v(t._s(s.deliveryTime)+"分钟送达")])],1),t._v(" "),e("div",{
staticClass:"text"},[t._v("\n                "+t._s(s.text)+"\n              ")]),t._v(" "),e("div",{staticClass:"recommend"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.recommend.length,expression:"evel.recommend.length"}],staticClass:"icon icon-thumb_up"}),t._v(" "),t._l(s.recommend,function(s){return e("span",{staticClass:"dish"},[t._v(t._s(s))])})],2)])])}))])])])])},staticRenderFns:[]}}]);
//# sourceMappingURL=app.c7272f363b8126b6ffa3.js.map