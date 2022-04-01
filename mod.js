// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(r){var t=r.flags;return t&&!0===t.READONLY};var t=function(t,e){var o,a,s,n,u,f;for(s=t.shape,n=t.strides,u=s.length,o=[],a=[],f=0;f<e;f++)a.push(1),o.push(n[0]);for(f=0;f<u;f++)a.push(s[f]),o.push(n[f]);return r(t)?new t.constructor(t.dtype,t.data,a,o,t.offset,t.order,{readonly:!0}):new t.constructor(t.dtype,t.data,a,o,t.offset,t.order)};export{t as default};
//# sourceMappingURL=mod.js.map
