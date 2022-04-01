// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-read-only@esm/index.mjs";var e=r;var s=function(r,s){var t,a,o,d,n,p;for(o=r.shape,d=r.strides,n=o.length,t=[],a=[],p=0;p<s;p++)a.push(1),t.push(d[0]);for(p=0;p<n;p++)a.push(o[p]),t.push(d[p]);return e(r)?new r.constructor(r.dtype,r.data,a,t,r.offset,r.order,{readonly:!0}):new r.constructor(r.dtype,r.data,a,t,r.offset,r.order)};export{s as default};
//# sourceMappingURL=index.mjs.map
