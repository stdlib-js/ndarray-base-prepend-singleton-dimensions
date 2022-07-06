// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r,t){var e,o,s,a,d,f,n;for(s=r.shape,a=r.strides,d=s.length,e=[],o=[],f=0;f<t;f++)o.push(1),e.push(a[0]);for(f=0;f<d;f++)o.push(s[f]),e.push(a[f]);return(n=r.flags)&&!0===n.READONLY?new r.constructor(r.dtype,r.data,o,e,r.offset,r.order,{readonly:!0}):new r.constructor(r.dtype,r.data,o,e,r.offset,r.order)}export{r as default};
//# sourceMappingURL=mod.js.map
