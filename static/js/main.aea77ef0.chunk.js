(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{3:function(e,t,a){e.exports={App:"App_App__2rvG9",mainTitle:"App_mainTitle__1_MGH",filterBox:"App_filterBox__xrBYL",filterBox__title:"App_filterBox__title__5kIO5",filterBox__input:"App_filterBox__input__2EpTT",cardsBox:"App_cardsBox__qIc_J",card:"App_card__IZK4E",card__title:"App_card__title__1EegV",card__img:"App_card__img__2P4s7",card__info:"App_card__info__387ZW",card__typeOfHouse:"App_card__typeOfHouse__1kKux",card__typeOfHouse_Indepent:"App_card__typeOfHouse_Indepent__2jTaM",card__typeOfHouse_Restaurant:"App_card__typeOfHouse_Restaurant__3Z5E9",card__address:"App_card__address__2pgkJ",card__priceFrom:"App_card__priceFrom__3LdIV",card__sharedOwnership:"App_card__sharedOwnership__37ydz",seeMoreBtn:"App_seeMoreBtn__36Hom"}},39:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),n=a(14),s=a.n(n),i=(a(39),a(10)),_=a(7),d=a.n(_),p=a(11),o=a(24),u=a(3),l=a.n(u),f=a(17),j=a(8),O=a(34),h=a(21),m=function(){return h.get("https://603e38c548171b0017b2ecf7.mockapi.io/homes")},b=function(e){return h.get("https://api.unsplash.com/search/photos?per_page=30&page=".concat(e,"&query=house&client_id=RtqGDPtKbP8aX0Ujn_cR_Vp8EBGXaT0v1zaazNr8YF4"))},g="SET_CARDS",x="SET_IMG_FOR_CARDS",v={cardsData:[],imgUrlData:[]};window.AdsDefaulState=v;var D=a(18),A=a(2);var y=function(e){return Object(A.jsx)(D.b,{to:"/details/".concat(e.id),children:Object(A.jsxs)("div",{className:l.a.card,children:[Object(A.jsxs)("div",{className:l.a.card__img,children:[Object(A.jsx)("img",{src:"".concat(e.img),alt:""}),Object(A.jsx)("span",{className:"IndependentLiving"==e.type?"".concat(l.a.card__typeOfHouse," \n                    ").concat(l.a.card__typeOfHouse_Indepent):"".concat(l.a.card__typeOfHouse," \n                    ").concat(l.a.card__typeOfHouse_Restaurant),children:"IndependentLiving"==e.type?"Independent living":"Restaurant & Support available"})]}),Object(A.jsxs)("div",{className:l.a.card__info,children:[Object(A.jsx)("div",{className:l.a.card__title,children:e.title}),Object(A.jsx)("div",{className:l.a.card__address,children:e.address}),Object(A.jsxs)("div",{className:l.a.card__priceFrom,children:["New Properties for Sale from",Object(A.jsxs)("span",{children:["\xa3",e.price]})]}),Object(A.jsx)("div",{className:l.a.card__sharedOwnership,children:"Shared Ownership Available"})]})]})})},w=Object(j.c)(Object(f.b)((function(e){return{cardsData:e.Ads.cardsData,imgUrlData:e.Ads.imgUrlData}}),{getImgForCards:function(e){return function(){var e=Object(p.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(1);case 2:a=e.sent,t((r=a.data.results,{type:x,imgUrlData:r}));case 4:case"end":return e.stop()}var r}),e)})));return function(t){return e.apply(this,arguments)}}()},getCards:function(){return function(){var e=Object(p.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:a=e.sent,t((r=a.data,{type:g,cardsData:r}));case 4:case"end":return e.stop()}var r}),e)})));return function(t){return e.apply(this,arguments)}}()}}))((function(e){var t=Object(r.useState)(""),a=Object(o.a)(t,2),c=a[0],n=a[1],s=Object(r.useState)(),_=Object(o.a)(s,2),u=_[0],f=_[1];return Object(r.useEffect)((function(){function t(){return(t=Object(p.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getCards();case 2:return t.next=4,e.getImgForCards();case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(r.useEffect)((function(){f(e.cardsData.filter((function(e){if(e.title.toLowerCase().includes(c.toLowerCase()))return e})).map((function(e){return Object(A.jsx)(y,Object(i.a)({},e))})))}),[e.imgUrlData.length,c]),Object(A.jsxs)("div",{className:l.a.App,children:[Object(A.jsx)("h1",{className:l.a.mainTitle,children:"Our Latest Developments"}),Object(A.jsxs)("div",{className:l.a.filterBox,children:[Object(A.jsx)("span",{className:l.a.filterBox__title,children:"Filter"}),Object(A.jsx)("input",{className:l.a.filterBox__input,onChange:function(e){(e.currentTarget.value.length>=3||0==e.currentTarget.value.length)&&n(e.currentTarget.value)},type:"text"})]}),Object(A.jsx)("div",{className:l.a.cardsBox,children:u}),Object(A.jsx)("button",{className:l.a.seeMoreBtn,children:Object(A.jsx)("span",{children:"See more"})})]})})),B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,66)).then((function(t){var a=t.getCLS,r=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),r(e),c(e),n(e),s(e)}))},N=a(33),T=Object(j.b)({Ads:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case g:return(e=Object(i.a)(Object(i.a)({},t),{},{cardsData:Object(O.a)(a.cardsData)})).cardsData.forEach((function(e){e.img=""})),e;case x:e=Object(i.a)({},t),a.imgUrlData=a.imgUrlData.slice(0,e.cardsData.length),e.imgUrlData=a.imgUrlData;for(var r=0;r<e.cardsData.length;r++)e.cardsData[r].img=a.imgUrlData[r].urls.small;return e}return t}}),E=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||j.c,I=Object(j.d)(T,E(Object(j.a)(N.a)));window.store=I;var S=I;s.a.render(Object(A.jsx)(c.a.StrictMode,{children:Object(A.jsx)(f.a,{store:S,children:Object(A.jsx)(D.a,{basename:"/TestTaskForFuse8",children:Object(A.jsx)(w,{})})})}),document.getElementById("root")),B()}},[[65,1,2]]]);
//# sourceMappingURL=main.aea77ef0.chunk.js.map