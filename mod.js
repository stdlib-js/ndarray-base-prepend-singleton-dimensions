// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(r){var t=r.flags;return t&&!0===t.READONLY};function t(t,e){var o,s,a,n,u,f;for(a=t.shape,n=t.strides,u=a.length,o=[],s=[],f=0;f<e;f++)s.push(1),o.push(n[0]);for(f=0;f<u;f++)s.push(a[f]),o.push(n[f]);return r(t)?new t.constructor(t.dtype,t.data,s,o,t.offset,t.order,{readonly:!0}):new t.constructor(t.dtype,t.data,s,o,t.offset,t.order)}export{t as default};
//# sourceMappingURL=mod.js.map
