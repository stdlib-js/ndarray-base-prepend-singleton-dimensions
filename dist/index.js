"use strict";var g=function(r,t){return function(){return t||r((t={exports:{}}).exports,t),t.exports}};var p=g(function(y,v){
var h=require('@stdlib/ndarray-base-dtype/dist'),f=require('@stdlib/ndarray-base-shape/dist'),q=require('@stdlib/ndarray-base-strides/dist'),c=require('@stdlib/ndarray-base-offset/dist'),d=require('@stdlib/ndarray-base-order/dist'),l=require('@stdlib/ndarray-base-data-buffer/dist');function D(r,t,o){var s,a,i,u,n,e;for(i=f(r,!1),u=q(r,!1),n=i.length,s=[],a=[],e=0;e<t;e++)a.push(1),s.push(u[0]);for(e=0;e<n;e++)a.push(i[e]),s.push(u[e]);return new r.constructor(h(r),l(r),a,s,c(r),d(r),{readonly:!o})}v.exports=D
});var S=p();module.exports=S;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
