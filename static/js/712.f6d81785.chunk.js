"use strict";(self.webpackChunkso_yummy=self.webpackChunkso_yummy||[]).push([[712],{2134:function(e,r,n){n.d(r,{Z:function(){return s}});n(2791);var t=n.p+"static/media/kisspng-pasta-spinach-dip.75540e9062e67b9cf779.png",a="Leaf_leaf_img__qpoO3",i=n(3329),s=function(){return(0,i.jsx)("div",{className:a,children:(0,i.jsx)("img",{src:t,alt:"img"})})}},8130:function(e,r,n){n.d(r,{V:function(){return c}});var t=n(9439),a=n(2791),i=n(7689),s=n(3329),c=function(e){var r=e.recipeTitle,n=(0,a.useState)(""),c=(0,t.Z)(n,2),l=c[0],o=c[1],p=(0,i.TH)();(0,a.useEffect)((function(){var e=d(p.pathname);o(e)}),[p]);var d=function(e){if(e.includes("categories"))return"Category";switch(e){case"/favorite":return"Favorites";case"/add":return"Add recipe";case"/my":return"My recipes";case"/search":return"Search";case"/shopping-list":return"Shopping list";default:return"Page Title"}};return(0,s.jsx)(s.Fragment,{children:r?(0,s.jsx)("h1",{className:"recipeName",children:r}):(0,s.jsx)("div",{className:"page-wrapper",children:(0,s.jsxs)("div",{className:"mainTitle-container",children:[(0,s.jsx)("h1",{className:"mainTitle",children:l}),(0,s.jsx)("div",{className:"mainTitle-decorator1"}),(0,s.jsx)("div",{className:"mainTitle-decorator2"}),(0,s.jsx)("div",{className:"mainTitle-decorator3"})]})})})}},8386:function(e,r,n){n.r(r),n.d(r,{default:function(){return w}});var t,a,i=n(2791),s=n(5861),c=n(4687),l=n.n(c),o=n(9434),p=n(9221),d=n(4749),u=["title","titleId"];function h(){return h=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},h.apply(this,arguments)}function m(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function f(e,r){var n=e.title,s=e.titleId,c=m(e,u);return i.createElement("svg",h({width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:r,"aria-labelledby":s},c),n?i.createElement("title",{id:s},n):null,t||(t=i.createElement("path",{d:"M10.9375 3.0625L3.0625 10.9375",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),a||(a=i.createElement("path",{d:"M10.9375 10.9375L3.0625 3.0625",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var g=i.forwardRef(f),v=(n.p,n(7601)),x=n(9091),j=n(7139),_=n(3329),N=function(){var e=(0,o.I0)(),r=(0,o.v9)(d.w4),n=(0,o.v9)(d.xU),t=function(){var r=(0,s.Z)(l().mark((function r(n){return l().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:try{e((0,p.OV)(n))}catch(t){console.log(t)}case 1:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return(0,i.useEffect)((function(){e((0,p.p$)())}),[e]),n?(0,_.jsx)(v.Z,{}):r&&0!==r.length?(0,_.jsx)(_.Fragment,{children:(0,_.jsx)("div",{className:"flexWrapper",children:(0,_.jsxs)("div",{className:"shopping-list-container",children:[(0,_.jsxs)("div",{className:"shopping-list-categories",children:[(0,_.jsx)("span",{className:"shopping-list-categories--name",children:"Product"}),(0,_.jsxs)("div",{className:"name-wrapper",children:[(0,_.jsx)("span",{className:"shopping-list-categories--name",children:"Number"}),(0,_.jsx)("span",{className:"shopping-list-categories--name",children:"Remove"})]})]}),(0,_.jsx)("ul",{className:"ingredient-list",children:r.map((function(e){return(0,_.jsxs)("li",{className:"ingredient-item",children:[(0,_.jsxs)("div",{className:"ingredient-wrapper",children:[(0,_.jsx)("div",{className:"ingredient-img-wrapper",children:(0,_.jsx)("img",{className:"ingredient-img",src:e.thb,alt:e.ttl})}),(0,_.jsx)("h2",{className:"ingredient-name",children:e.ttl})]}),(0,_.jsxs)("div",{className:"quantity-remove-wrapper",children:[(0,_.jsxs)("div",{className:"ingredient-quantity-wrapper",children:[" ",(0,_.jsx)("span",{className:"ingredient-quantity",children:e.measure})]}),(0,_.jsx)("button",{className:"remove-btnX x-btn",type:"button",onClick:function(){t(e)},children:(0,_.jsx)(g,{className:"remove-btnX--icon"})})]})]},e._id)}))})]})})}):(0,_.jsxs)("div",{className:j.Z.searchLookingWrapper,children:[(0,_.jsx)("img",{src:x,alt:"images"}),(0,_.jsx)("p",{className:"emptyName",children:"Your shopping list still empty..."})]})},b=n(8130),y=n(2134),w=function(){return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(b.V,{}),(0,_.jsx)(N,{}),(0,_.jsx)(y.Z,{})]})}},4749:function(e,r,n){n.d(r,{vR:function(){return i},w4:function(){return a},xU:function(){return t}});var t=function(e){return e.shoppingListIngredients.isLoading},a=function(e){return e.shoppingListIngredients.shoppingIngredients.shoppingList},i=function(e){return e.shoppingListIngredients.newVariable}},7139:function(e,r){r.Z={"dark-mode":"SearchBar_dark-mode__Axps8","remove-btnX":"SearchBar_remove-btnX__DGM1M","remove-btnX--icon":"SearchBar_remove-btnX--icon__MNy30","base-link-leaf":"SearchBar_base-link-leaf__TgZJi",trashBtn:"SearchBar_trashBtn__+cdKQ","trashBtn--icon":"SearchBar_trashBtn--icon__43BC6",flexWrapper:"SearchBar_flexWrapper__9jFuf",active:"SearchBar_active__NJFcj",container:"SearchBar_container__hBKHC",search_bar:"SearchBar_search_bar__yiAEi",searchLookingWrapper:"SearchBar_searchLookingWrapper__r+Xwy"}},9091:function(e,r,n){e.exports=n.p+"static/media/asdd.195c8cc165ac8d4aba1f.png"}}]);
//# sourceMappingURL=712.f6d81785.chunk.js.map