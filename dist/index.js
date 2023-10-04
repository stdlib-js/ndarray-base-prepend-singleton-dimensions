"use strict";var d=function(r,s){return function(){return s||r((s={exports:{}}).exports,s),s.exports}};var p=d(function(l,u){
var f=require('@stdlib/ndarray-base-assert-is-read-only/dist');function h(r,s){var t,a,n,o,i,e;for(n=r.shape,o=r.strides,i=n.length,t=[],a=[],e=0;e<s;e++)a.push(1),t.push(o[0]);for(e=0;e<i;e++)a.push(n[e]),t.push(o[e]);return f(r)?new r.constructor(r.dtype,r.data,a,t,r.offset,r.order,{readonly:!0}):new r.constructor(r.dtype,r.data,a,t,r.offset,r.order)}u.exports=h
});var v=p();module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
