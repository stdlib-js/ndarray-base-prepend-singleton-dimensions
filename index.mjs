// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-read-only@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-dtype@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-strides@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-offset@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-order@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-data-buffer@v0.2.2-esm/index.mjs";function a(a,m){var o,j,p,h,l,b;for(p=e(a,!1),h=t(a,!1),l=p.length,o=[],j=[],b=0;b<m;b++)j.push(1),o.push(h[0]);for(b=0;b<l;b++)j.push(p[b]),o.push(h[b]);return s(a)?new a.constructor(r(a),i(a),j,o,d(a),n(a),{readonly:!0}):new a.constructor(r(a),i(a),j,o,d(a),n(a))}export{a as default};
//# sourceMappingURL=index.mjs.map
