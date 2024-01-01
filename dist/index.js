"use strict";var q=function(r,t){return function(){return t||r((t={exports:{}}).exports,t),t.exports}};var h=q(function(S,g){
var c=require('@stdlib/ndarray-base-assert-is-read-only/dist'),v=require('@stdlib/ndarray-base-dtype/dist'),d=require('@stdlib/ndarray-base-shape/dist'),l=require('@stdlib/ndarray-base-strides/dist'),o=require('@stdlib/ndarray-base-offset/dist'),p=require('@stdlib/ndarray-base-order/dist'),f=require('@stdlib/ndarray-base-data-buffer/dist');function y(r,t){var s,a,i,u,n,e;for(i=d(r,!1),u=l(r,!1),n=i.length,s=[],a=[],e=0;e<t;e++)a.push(1),s.push(u[0]);for(e=0;e<n;e++)a.push(i[e]),s.push(u[e]);return c(r)?new r.constructor(v(r),f(r),a,s,o(r),p(r),{readonly:!0}):new r.constructor(v(r),f(r),a,s,o(r),p(r))}g.exports=y
});var D=h();module.exports=D;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
