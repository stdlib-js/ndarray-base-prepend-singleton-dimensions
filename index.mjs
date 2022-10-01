// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-read-only@esm/index.mjs";function e(e,s){var t,o,d,a,n,p;for(d=e.shape,a=e.strides,n=d.length,t=[],o=[],p=0;p<s;p++)o.push(1),t.push(a[0]);for(p=0;p<n;p++)o.push(d[p]),t.push(a[p]);return r(e)?new e.constructor(e.dtype,e.data,o,t,e.offset,e.order,{readonly:!0}):new e.constructor(e.dtype,e.data,o,t,e.offset,e.order)}export{e as default};
//# sourceMappingURL=index.mjs.map
