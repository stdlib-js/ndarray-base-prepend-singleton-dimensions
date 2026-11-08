"use strict";var g=function(r,t){return function(){try{return t||r((t={exports:{}}).exports,t),t.exports}catch(i){throw (t=0, i)}};};var o=g(function(y,p){
var h=require('@stdlib/ndarray-base-dtype/dist'),f=require('@stdlib/ndarray-base-shape/dist'),q=require('@stdlib/ndarray-base-strides/dist'),c=require('@stdlib/ndarray-base-offset/dist'),d=require('@stdlib/ndarray-base-order/dist'),l=require('@stdlib/ndarray-base-data-buffer/dist');function D(r,t,i){var s,a,u,n,v,e;for(u=f(r,!1),n=q(r,!1),v=u.length,s=[],a=[],e=0;e<t;e++)a.push(1),s.push(n[0]);for(e=0;e<v;e++)a.push(u[e]),s.push(n[e]);return new r.constructor(h(r),l(r),a,s,c(r),d(r),{readonly:!i})}p.exports=D
});var S=o();module.exports=S;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
