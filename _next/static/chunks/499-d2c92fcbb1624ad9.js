(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[499],{638:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(6856).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=o.default,a=(null==t?void 0:t.suspense)?{}:{loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};n(e,Promise)?a.loader=function(){return e}:"function"===typeof e?a.loader=e:"object"===typeof e&&(a=u({},a,e));!1;(a=u({},a,t)).suspense&&(delete a.ssr,delete a.loading);a.loadableGenerated&&delete(a=u({},a,a.loadableGenerated)).loadableGenerated;if("boolean"===typeof a.ssr&&!a.suspense){if(!a.ssr)return delete a.ssr,i(r,a);delete a.ssr}return r(a)},t.noSSR=i;var u=r(6495).Z,a=r(2648).Z,o=(a(r(7294)),a(r(4302)));function i(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6319:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var n=(0,r(2648).Z)(r(7294)).default.createContext(null);t.LoadableContext=n},4302:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(9658).Z,u=r(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(6495).Z,o=(0,r(2648).Z)(r(7294)),i=r(6319),l=r(7294).useSyncExternalStore,s=[],d=[],c=!1;function f(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}var p=function(){function e(t,r){n(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return u(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=a({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function y(e){return function(e,t){var r=function(){if(!s){var t=new p(e,u);s={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return s.promise()},n=function(){r();var e=o.default.useContext(i.LoadableContext);e&&Array.isArray(u.modules)&&u.modules.forEach((function(t){e(t)}))},u=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);u.suspense&&(u.lazy=o.default.lazy(u.loader));var s=null;if(!c){var f=u.webpack?u.webpack():u.modules;f&&d.push((function(e){var t=!0,n=!1,u=void 0;try{for(var a,o=f[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var i=a.value;if(-1!==e.indexOf(i))return r()}}catch(l){n=!0,u=l}finally{try{t||null==o.return||o.return()}finally{if(n)throw u}}}))}var y=u.suspense?function(e,t){return n(),o.default.createElement(u.lazy,a({},e,{ref:t}))}:function(e,t){n();var r=l(s.subscribe,s.getCurrentValue,s.getCurrentValue);return o.default.useImperativeHandle(t,(function(){return{retry:s.retry}}),[]),o.default.useMemo((function(){return r.loading||r.error?o.default.createElement(u.loading,{isLoading:r.loading,pastDelay:r.pastDelay,timedOut:r.timedOut,error:r.error,retry:s.retry}):r.loaded?o.default.createElement((t=r.loaded)&&t.__esModule?t.default:t,e):null;var t}),[e,r])};return y.preload=function(){return r()},y.displayName="LoadableComponent",o.default.forwardRef(y)}(f,e)}function _(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return _(e,t)}))}y.preloadAll=function(){return new Promise((function(e,t){_(s).then(e,t)}))},y.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return c=!0,t()};_(d,e).then(r,r)}))},window.__NEXT_PRELOADREADY=y.preloadReady;var h=y;t.default=h},5152:function(e,t,r){e.exports=r(638)},9815:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(943);var u=r(3375);var a=r(1566);function o(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||(0,u.Z)(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},7378:function(e,t,r){"use strict";r.d(t,{q:function(){return d}});var n=r(7294),u=r(406),a=r(3234),o=r(6014),i=r(6681);var l=r(8868);var s=r(577);function d(e,t={}){const{isStatic:r}=(0,n.useContext)(o._),d=(0,n.useRef)(null),c=function(e){const t=(0,i.h)((()=>(0,a.B)(e))),{isStatic:r}=(0,n.useContext)(o._);if(r){const[,r]=(0,n.useState)(e);(0,n.useEffect)((()=>t.on("change",r)),[])}return t}((0,u.i)(e)?e.get():e);return(0,n.useMemo)((()=>c.attach(((e,n)=>r?n(e):(d.current&&d.current.stop(),d.current=(0,s.jt)({keyframes:[c.get(),e],velocity:c.getVelocity(),type:"spring",...t,onUpdate:n}),c.get())))),[JSON.stringify(t)]),function(e,t){(0,l.L)((()=>{if((0,u.i)(e))return t(e.get()),e.on("change",t)}),[e,t])}(e,(e=>c.set(parseFloat(e)))),c}}}]);