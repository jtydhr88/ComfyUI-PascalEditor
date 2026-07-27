(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,233902,(e,t,r)=>{t.exports={name:"react-grab",version:"0.1.44",description:"Select context for coding agents directly from your website",keywords:["agent","context","grab","react","react-grab"],homepage:"https://react-grab.com",bugs:{url:"https://github.com/aidenybai/react-grab/issues"},license:"MIT",author:{name:"Aiden Bai",email:"aiden@million.dev"},repository:{type:"git",url:"git+https://github.com/aidenybai/react-grab.git"},bin:{"react-grab":"./bin/cli.js"},files:["bin","dist","package.json","README.md","LICENSE"],type:"module",main:"dist/index.js",module:"dist/index.js",browser:"dist/index.global.js",types:"dist/index.d.ts",exports:{"./package.json":"./package.json",".":{import:{types:"./dist/index.d.ts",default:"./dist/index.js"},require:{types:"./dist/index.d.cts",default:"./dist/index.cjs"}},"./core":{import:{types:"./dist/core/index.d.ts",default:"./dist/core/index.js"},require:{types:"./dist/core/index.d.cts",default:"./dist/core/index.cjs"}},"./primitives":{import:{types:"./dist/primitives.d.ts",default:"./dist/primitives.js"},require:{types:"./dist/primitives.d.cts",default:"./dist/primitives.cjs"}},"./src/*":"./src/*","./styles.css":"./dist/styles.css","./dist/styles.css":"./dist/styles.css","./dist/*":"./dist/*.js","./dist/*.js":"./dist/*.js","./dist/*.cjs":"./dist/*.cjs"},publishConfig:{access:"public"},dependencies:{bippy:"^0.5.41","@react-grab/cli":"0.1.44"},devDependencies:{"@babel/core":"^7.29.0","@babel/preset-typescript":"^7.28.5","@playwright/test":"^1.59.1","@tailwindcss/cli":"^4.3.0","@types/babel__core":"^7.20.5","@types/node":"^25.6.2","@types/react":"^19.2.14","babel-preset-solid":"^1.9.12",concurrently:"^9.2.1","expect-sdk":"^0.1.2","solid-js":"^1.9.12",tailwindcss:"^4.3.0",tsx:"^4.21.0","vite-plus":"^0.1.20"},peerDependencies:{react:">=17.0.0"},peerDependenciesMeta:{react:{optional:!0}},scripts:{"css:watch":"tailwindcss -i ./src/styles.css -o ./dist/styles.css -w",prebuild:"mkdir -p dist && tailwindcss -i ./src/styles.css -o ./dist/styles.css -m && tsx scripts/css-rem-to-px.ts",build:"NODE_ENV=production vp pack","build:profiling":"pnpm run prebuild && NODE_ENV=profiling REACT_GRAB_NO_MINIFY=true REACT_GRAB_SOURCEMAP=true vp pack",dev:'concurrently "pnpm:css:watch" "vp pack --watch"',test:"playwright test","test:perf":"playwright test --grep @perf --reporter=list","test:perf:baseline":"PERF_LABEL=baseline playwright test --grep @perf --reporter=list","test:expect":"bun e2e/react-grab.expect.ts",typecheck:"tsc --noEmit","test:e2e:ui":"playwright test --ui","perf:deopt":"node scripts/deopt-trace.mjs"}}},581495,e=>{"use strict";let t,r,n,i,a="bippy-0.5.41",o=Object.defineProperty,l=Object.prototype.hasOwnProperty,s=()=>{},c=e=>{try{Function.prototype.toString.call(e).indexOf("^_^")>-1&&setTimeout(()=>{throw Error("React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build")})}catch{}},d=(e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__)=>!!(e&&"getFiberRoots"in e),u=!1,p,h=(e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__)=>!!u||(e&&"function"==typeof e.inject&&(p=e.inject.toString()),!!p?.includes("(injected)")),m=new Set,f=new Set,g=e=>{e&&m.add(e);try{let t=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!t)return;if(!t._instrumentationSource){t.checkDCE=c,t.supportsFiber=!0,t.supportsFlight=!0,t.hasUnsupportedRendererAttached=!1,t._instrumentationSource=a,t._instrumentationIsActive=!1;let e=d(t);if(e||(t.on=s),t.renderers.size){t._instrumentationIsActive=!0,m.forEach(e=>e());return}let r=t.inject,n=h(t);n&&!e&&(u=!0,t.inject({scheduleRefresh(){}})&&(t._instrumentationIsActive=!0)),t.inject=e=>{let i=r(e);return f.add(e),n&&t.renderers.set(i,e),t._instrumentationIsActive=!0,m.forEach(e=>e()),i}}(t.renderers.size||t._instrumentationIsActive||h())&&e?.()}catch{}},v=e=>l.call(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__")?(g(e),globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__):(e=>{let t=new Map,r=0,n={_instrumentationIsActive:!1,_instrumentationSource:a,checkDCE:c,hasUnsupportedRendererAttached:!1,inject(e){let i=++r;return t.set(i,e),f.add(e),n._instrumentationIsActive||(n._instrumentationIsActive=!0,m.forEach(e=>e())),i},on:s,onCommitFiberRoot:s,onCommitFiberUnmount:s,onPostCommitFiberRoot:s,renderers:t,supportsFiber:!0,supportsFlight:!0};try{o(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__",{configurable:!0,enumerable:!0,get:()=>n,set(t){if(t&&"object"==typeof t){let r=n.renderers;n=t,r.size>0&&(r.forEach((e,r)=>{f.add(e),t.renderers.set(r,e)}),g(e))}}});let t=window.hasOwnProperty,r=!1;o(window,"hasOwnProperty",{configurable:!0,value:function(...e){try{if(!r&&"__REACT_DEVTOOLS_GLOBAL_HOOK__"===e[0])return globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__=void 0,r=!0,-0}catch{}return t.apply(this,e)},writable:!0})}catch{g(e)}return n})(e);try{"u">typeof window&&(window.document?.createElement||window.navigator?.product==="ReactNative")&&v()}catch{}let w=e=>{switch(e.tag){case 5:case 26:case 27:return!0;default:return"string"==typeof e.type}},b=e=>{switch(e.tag){case 1:case 11:case 0:case 14:case 15:return!0;default:return!1}},x=e=>{let t=e.memoizedProps,r=e.alternate?.memoizedProps||{},n=e.flags??e.effectTag??0;switch(e.tag){case 1:case 9:case 11:case 0:case 14:case 15:return(1&n)==1;default:return!e.alternate||r!==t||e.alternate.memoizedState!==e.memoizedState||e.alternate.ref!==e.ref}},y=e=>!!(13374&e.flags||13374&e.subtreeFlags),k=e=>{switch(e.tag){case 18:case 7:case 6:case 23:case 22:return!0;case 3:return!1;default:{let t="object"==typeof e.type&&null!==e.type?e.type.$$typeof:e.type;switch("symbol"==typeof t?t.toString():t){case 60111:case"Symbol(react.concurrent_mode)":case"Symbol(react.async_mode)":return!0;default:return!1}}}};function _(e,t,r=!1){if(!e)return null;let n=t(e);if(n instanceof Promise)return(async()=>{if(await n===!0)return e;let i=r?e.return:e.child;for(;i;){let e=await S(i,t,r);if(e)return e;i=r?null:i.sibling}return null})();if(!0===n)return e;let i=r?e.return:e.child;for(;i;){let e=N(i,t,r);if(e)return e;i=r?null:i.sibling}return null}let N=(e,t,r=!1)=>{if(!e)return null;if(!0===t(e))return e;let n=r?e.return:e.child;for(;n;){let e=N(n,t,r);if(e)return e;n=r?null:n.sibling}return null},S=async(e,t,r=!1)=>{if(!e)return null;if(await t(e)===!0)return e;let n=r?e.return:e.child;for(;n;){let e=await S(n,t,r);if(e)return e;n=r?null:n.sibling}return null},E=e=>{let t=e?.actualDuration??0,r=t,n=e?.child??null;for(;t>0&&null!=n;)r-=n.actualDuration??0,n=n.sibling;return{selfTime:r,totalTime:t}},T=e=>!!e.updateQueue?.memoCache,C=e=>"function"==typeof e?e:"object"==typeof e&&e?C(e.type||e.render):null,z=e=>{if("string"==typeof e)return e;if("function"!=typeof e&&!("object"==typeof e&&e))return null;let t=e.displayName||e.name||null;if(t)return t;let r=C(e);return r&&(r.displayName||r.name)||null},A=e=>{try{if("string"==typeof e.version&&e.bundleType>0)return"development"}catch{}return"production"},$=0,M=new WeakMap,R=(e,t=$++)=>{M.set(e,t)},F=e=>{let t=M.get(e);return!t&&e.alternate&&(t=M.get(e.alternate)),t||R(e,t=$++),t},O=(e,t,r)=>{let n=t;for(;null!=n;){if(M.has(n)||F(n),!k(n)&&x(n)&&e(n,"mount"),13===n.tag)if(null!==n.memoizedState){let t=n.child,r=t?t.sibling:null;if(r){let t=r.child;null!==t&&O(e,t,!1)}}else{let t=null;null!==n.child&&(t=n.child.child),null!==t&&O(e,t,!1)}else null!=n.child&&O(e,n.child,!0);n=r?n.sibling:null}},j=(e,t,r,n)=>{if(M.has(t)||F(t),!r)return;M.has(r)||F(r);let i=13===t.tag,a=!k(t);a&&x(t)&&e(t,"update");let o=i&&null!==r.memoizedState,l=i&&null!==t.memoizedState;if(o&&l){let n=t.child?.sibling??null,i=r.child?.sibling??null;null!==n&&null!==i&&j(e,n,i,t)}else if(o&&!l){let r=t.child;null!==r&&O(e,r,!0)}else if(!o&&l){L(e,r);let n=t.child?.sibling??null;null!==n&&O(e,n,!0)}else if(t.child!==r.child){let r=t.child;for(;r;){if(r.alternate){let i=r.alternate;j(e,r,i,a?t:n)}else O(e,r,!1);r=r.sibling}}},D=(e,t)=>{3!==t.tag&&k(t)||e(t,"unmount")},L=(e,t)=>{let r=13===t.tag&&null!==t.memoizedState,n=t.child;for(r&&(n=(t.child?.sibling??null)?.child??null);null!==n;)null!==n.return&&(D(e,n),L(e,n)),n=n.sibling},P=0,I=new WeakMap;Error();var W,U,H,B,V,q,G,J,Y,X,K,Z,Q,ee,et,er,en,ei,ea,eo,el,es,ec,ed,eu,ep={},eh=[],em=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ef=Array.isArray;function eg(e,t){for(var r in t)e[r]=t[r];return e}function ev(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function ew(e,t,r){var n,i,a,o={};for(a in t)"key"==a?n=t[a]:"ref"==a?i=t[a]:o[a]=t[a];if(arguments.length>2&&(o.children=arguments.length>3?K.call(arguments,2):r),"function"==typeof e&&null!=e.defaultProps)for(a in e.defaultProps)void 0===o[a]&&(o[a]=e.defaultProps[a]);return eb(e,o,n,i,null)}function eb(e,t,r,n,i){var a={type:e,props:t,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:null==i?++Q:i,__i:-1,__u:0};return null==i&&null!=Z.vnode&&Z.vnode(a),a}function ex(e){return e.children}function ey(e,t){this.props=e,this.context=t}function ek(e,t){if(null==t)return e.__?ek(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if(null!=(r=e.__k[t])&&null!=r.__e)return r.__e;return"function"==typeof e.type?ek(e):null}function e_(e){(!e.__d&&(e.__d=!0)&&ee.push(e)&&!eN.__r++||et!=Z.debounceRendering)&&((et=Z.debounceRendering)||er)(eN)}function eN(){try{for(var e,t=1;ee.length;)ee.length>t&&ee.sort(en),e=ee.shift(),t=ee.length,function(e){if(e.__P&&e.__d){var t=e.__v,r=t.__e,n=[],i=[],a=eg({},t);a.__v=t.__v+1,Z.vnode&&Z.vnode(a),eA(e.__P,a,t,e.__n,e.__P.namespaceURI,32&t.__u?[r]:null,n,null==r?ek(t):r,!!(32&t.__u),i),a.__v=t.__v,a.__.__k[a.__i]=a,eM(n,a,i),t.__e=t.__=null,a.__e!=r&&function e(t){if(null!=(t=t.__)&&null!=t.__c)return t.__e=t.__c.base=null,t.__k.some(function(e){if(null!=e&&null!=e.__e)return t.__e=t.__c.base=e.__e}),e(t)}(a)}}(e)}finally{ee.length=eN.__r=0}}function eS(e,t,r,n,i,a,o,l,s,c,d){var u,p,h,m,f,g,v,w=n&&n.__k||eh,b=t.length;for(s=function(e,t,r,n,i){var a,o,l,s,c,d=r.length,u=d,p=0;for(e.__k=Array(i),a=0;a<i;a++)null!=(o=t[a])&&"boolean"!=typeof o&&"function"!=typeof o?("string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?o=e.__k[a]=eb(null,o,null,null,null):ef(o)?o=e.__k[a]=eb(ex,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?o=e.__k[a]=eb(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):e.__k[a]=o,s=a+p,o.__=e,o.__b=e.__b+1,l=null,-1!=(c=o.__i=function(e,t,r,n){var i,a,o,l=e.key,s=e.type,c=t[r],d=null!=c&&0==(2&c.__u);if(null===c&&null==l||d&&l==c.key&&s==c.type)return r;if(n>+!!d){for(i=r-1,a=r+1;i>=0||a<t.length;)if(null!=(c=t[o=i>=0?i--:a++])&&0==(2&c.__u)&&l==c.key&&s==c.type)return o}return -1}(o,r,s,u))&&(u--,(l=r[c])&&(l.__u|=2)),null==l||null==l.__v?(-1==c&&(i>d?p--:i<d&&p++),"function"!=typeof o.type&&(o.__u|=4)):c!=s&&(c==s-1?p--:c==s+1?p++:(c>s?p--:p++,o.__u|=4))):e.__k[a]=null;if(u)for(a=0;a<d;a++)null!=(l=r[a])&&0==(2&l.__u)&&(l.__e==n&&(n=ek(l)),function e(t,r,n){var i,a;if(Z.unmount&&Z.unmount(t),(i=t.ref)&&(i.current&&i.current!=t.__e||eR(i,null,r)),null!=(i=t.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(e){Z.__e(e,r)}i.base=i.__P=null}if(i=t.__k)for(a=0;a<i.length;a++)i[a]&&e(i[a],r,n||"function"!=typeof t.type);n||ev(t.__e),t.__c=t.__=t.__e=void 0}(l,l));return n}(r,t,w,s,b),u=0;u<b;u++)null!=(h=r.__k[u])&&(p=-1!=h.__i&&w[h.__i]||ep,h.__i=u,g=eA(e,h,p,i,a,o,l,s,c,d),m=h.__e,h.ref&&p.ref!=h.ref&&(p.ref&&eR(p.ref,null,h),d.push(h.ref,h.__c||m,h)),null==f&&null!=m&&(f=m),(v=!!(4&h.__u))||p.__k===h.__k?(s=function e(t,r,n,i){var a,o;if("function"==typeof t.type){for(a=t.__k,o=0;a&&o<a.length;o++)a[o]&&(a[o].__=t,r=e(a[o],r,n,i));return r}t.__e!=r&&(i&&(r&&t.type&&!r.parentNode&&(r=ek(t)),n.insertBefore(t.__e,r||null)),r=t.__e);do r=r&&r.nextSibling;while(null!=r&&8==r.nodeType)return r}(h,s,e,v),v&&p.__e&&(p.__e=null)):"function"==typeof h.type&&void 0!==g?s=g:m&&(s=m.nextSibling),h.__u&=-7);return r.__e=f,s}function eE(e,t){return t=t||[],null==e||"boolean"==typeof e||(ef(e)?e.some(function(e){eE(e,t)}):t.push(e)),t}function eT(e,t,r){"-"==t[0]?e.setProperty(t,null==r?"":r):e[t]=null==r?"":"number"!=typeof r||em.test(t)?r:r+"px"}function eC(e,t,r,n,i){var a,o;e:if("style"==t)if("string"==typeof r)e.style.cssText=r;else{if("string"==typeof n&&(e.style.cssText=n=""),n)for(t in n)r&&t in r||eT(e.style,t,"");if(r)for(t in r)n&&r[t]==n[t]||eT(e.style,t,r[t])}else if("o"==t[0]&&"n"==t[1])a=t!=(t=t.replace(el,"$1")),t=(o=t.toLowerCase())in e||"onFocusOut"==t||"onFocusIn"==t?o.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=r,r?n?r[eo]=n[eo]:(r[eo]=es,e.addEventListener(t,a?ed:ec,a)):e.removeEventListener(t,a?ed:ec,a);else{if("http://www.w3.org/2000/svg"==i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=t&&"height"!=t&&"href"!=t&&"list"!=t&&"form"!=t&&"tabIndex"!=t&&"download"!=t&&"rowSpan"!=t&&"colSpan"!=t&&"role"!=t&&"popover"!=t&&t in e)try{e[t]=null==r?"":r;break e}catch(e){}"function"==typeof r||(null==r||!1===r&&"-"!=t[4]?e.removeAttribute(t):e.setAttribute(t,"popover"==t&&1==r?"":r))}}function ez(e){return function(t){if(this.l){var r=this.l[t.type+e];if(null==t[ea])t[ea]=es++;else if(t[ea]<r[eo])return;return r(Z.event?Z.event(t):t)}}}function eA(e,t,r,n,i,a,o,l,s,c){var d,u,p,h,m,f,g,v,w,b,x,y,k,_,N,S=t.type;if(void 0!==t.constructor)return null;128&r.__u&&(s=!!(32&r.__u),a=[l=t.__e=r.__e]),(d=Z.__b)&&d(t);e:if("function"==typeof S)try{if(v=t.props,w=S.prototype&&S.prototype.render,b=(d=S.contextType)&&n[d.__c],x=d?b?b.props.value:d.__:n,r.__c?g=(u=t.__c=r.__c).__=u.__E:(w?t.__c=u=new S(v,x):(t.__c=u=new ey(v,x),u.constructor=S,u.render=eF),b&&b.sub(u),u.state||(u.state={}),u.__n=n,p=u.__d=!0,u.__h=[],u._sb=[]),w&&null==u.__s&&(u.__s=u.state),w&&null!=S.getDerivedStateFromProps&&(u.__s==u.state&&(u.__s=eg({},u.__s)),eg(u.__s,S.getDerivedStateFromProps(v,u.__s))),h=u.props,m=u.state,u.__v=t,p)w&&null==S.getDerivedStateFromProps&&null!=u.componentWillMount&&u.componentWillMount(),w&&null!=u.componentDidMount&&u.__h.push(u.componentDidMount);else{if(w&&null==S.getDerivedStateFromProps&&v!==h&&null!=u.componentWillReceiveProps&&u.componentWillReceiveProps(v,x),t.__v==r.__v||!u.__e&&null!=u.shouldComponentUpdate&&!1===u.shouldComponentUpdate(v,u.__s,x)){t.__v!=r.__v&&(u.props=v,u.state=u.__s,u.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(e){e&&(e.__=t)}),eh.push.apply(u.__h,u._sb),u._sb=[],u.__h.length&&o.push(u);break e}null!=u.componentWillUpdate&&u.componentWillUpdate(v,u.__s,x),w&&null!=u.componentDidUpdate&&u.__h.push(function(){u.componentDidUpdate(h,m,f)})}if(u.context=x,u.props=v,u.__P=e,u.__e=!1,y=Z.__r,k=0,w)u.state=u.__s,u.__d=!1,y&&y(t),d=u.render(u.props,u.state,u.context),eh.push.apply(u.__h,u._sb),u._sb=[];else do u.__d=!1,y&&y(t),d=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++k<25)u.state=u.__s,null!=u.getChildContext&&(n=eg(eg({},n),u.getChildContext())),w&&!p&&null!=u.getSnapshotBeforeUpdate&&(f=u.getSnapshotBeforeUpdate(h,m)),_=null!=d&&d.type===ex&&null==d.key?function e(t){return"object"!=typeof t||null==t||t.__b>0?t:ef(t)?t.map(e):void 0!==t.constructor?null:eg({},t)}(d.props.children):d,l=eS(e,ef(_)?_:[_],t,r,n,i,a,o,l,s,c),u.base=t.__e,t.__u&=-161,u.__h.length&&o.push(u),g&&(u.__E=u.__=null)}catch(e){if(t.__v=null,s||null!=a)if(e.then){for(t.__u|=s?160:128;l&&8==l.nodeType&&l.nextSibling;)l=l.nextSibling;a[a.indexOf(l)]=null,t.__e=l}else{for(N=a.length;N--;)ev(a[N]);e$(t)}else t.__e=r.__e,t.__k=r.__k,e.then||e$(t);Z.__e(e,t,r)}else null==a&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):l=t.__e=function(e,t,r,n,i,a,o,l,s){var c,d,u,p,h,m,f,g=r.props||ep,v=t.props,w=t.type;if("svg"==w?i="http://www.w3.org/2000/svg":"math"==w?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),null!=a){for(c=0;c<a.length;c++)if((h=a[c])&&"setAttribute"in h==!!w&&(w?h.localName==w:3==h.nodeType)){e=h,a[c]=null;break}}if(null==e){if(null==w)return document.createTextNode(v);e=document.createElementNS(i,w,v.is&&v),l&&(Z.__m&&Z.__m(t,a),l=!1),a=null}if(null==w)g===v||l&&e.data==v||(e.data=v);else{if(a="textarea"==w&&null!=v.defaultValue?null:a&&K.call(e.childNodes),!l&&null!=a)for(g={},c=0;c<e.attributes.length;c++)g[(h=e.attributes[c]).name]=h.value;for(c in g)h=g[c],"dangerouslySetInnerHTML"==c?u=h:"children"==c||c in v||"value"==c&&"defaultValue"in v||"checked"==c&&"defaultChecked"in v||eC(e,c,null,h,i);for(c in v)h=v[c],"children"==c?p=h:"dangerouslySetInnerHTML"==c?d=h:"value"==c?m=h:"checked"==c?f=h:l&&"function"!=typeof h||g[c]===h||eC(e,c,h,g[c],i);if(d)l||u&&(d.__html==u.__html||d.__html==e.innerHTML)||(e.innerHTML=d.__html),t.__k=[];else if(u&&(e.innerHTML=""),eS("template"==t.type?e.content:e,ef(p)?p:[p],t,r,n,"foreignObject"==w?"http://www.w3.org/1999/xhtml":i,a,o,a?a[0]:r.__k&&ek(r,0),l,s),null!=a)for(c=a.length;c--;)ev(a[c]);l&&"textarea"!=w||(c="value","progress"==w&&null==m?e.removeAttribute("value"):null==m||m===e[c]&&("progress"!=w||m)&&("option"!=w||m==g[c])||eC(e,c,m,g[c],i),c="checked",null!=f&&f!=e[c]&&eC(e,c,f,g[c],i))}return e}(r.__e,t,r,n,i,a,o,s,c);return(d=Z.diffed)&&d(t),128&t.__u?void 0:l}function e$(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(e$))}function eM(e,t,r){for(var n=0;n<r.length;n++)eR(r[n],r[++n],r[++n]);Z.__c&&Z.__c(t,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(e){e.call(t)})}catch(e){Z.__e(e,t.__v)}})}function eR(e,t,r){try{if("function"==typeof e){var n="function"==typeof e.__u;n&&e.__u(),n&&null==t||(e.__u=e(t))}else e.current=t}catch(e){Z.__e(e,r)}}function eF(e,t,r){return this.constructor(e,r)}function eO(e,t,r){var n,i,a,o;t==document&&(t=document.documentElement),Z.__&&Z.__(e,t),i=(n="function"==typeof r)?null:r&&r.__k||t.__k,a=[],o=[],eA(t,e=(!n&&r||t).__k=ew(ex,null,[e]),i||ep,ep,t.namespaceURI,!n&&r?[r]:i?null:t.firstChild?K.call(t.childNodes):null,a,!n&&r?r:i?i.__e:t.firstChild,n,o),eM(a,e,o)}function ej(e){function t(e){var r,n;return this.getChildContext||(r=new Set,(n={})[t.__c]=this,this.getChildContext=function(){return n},this.componentWillUnmount=function(){r=null},this.shouldComponentUpdate=function(e){this.props.value!=e.value&&r.forEach(function(e){e.__e=!0,e_(e)})},this.sub=function(e){r.add(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){r&&r.delete(e),t&&t.call(e)}}),e.children}return t.__c="__cC"+eu++,t.__=e,t.Provider=t.__l=(t.Consumer=function(e,t){return e.children(t)}).contextType=t,t}K=eh.slice,Z={__e:function(e,t,r,n){for(var i,a,o;t=t.__;)if((i=t.__c)&&!i.__)try{if((a=i.constructor)&&null!=a.getDerivedStateFromError&&(i.setState(a.getDerivedStateFromError(e)),o=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(e,n||{}),o=i.__d),o)return i.__E=i}catch(t){e=t}throw e}},Q=0,ey.prototype.setState=function(e,t){var r;r=null!=this.__s&&this.__s!=this.state?this.__s:this.__s=eg({},this.state),"function"==typeof e&&(e=e(eg({},r),this.props)),e&&eg(r,e),null!=e&&this.__v&&(t&&this._sb.push(t),e_(this))},ey.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),e_(this))},ey.prototype.render=ex,ee=[],er="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,en=function(e,t){return e.__v.__b-t.__v.__b},eN.__r=0,ea="__d"+(ei=Math.random().toString(8)),eo="__a"+ei,el=/(PointerCapture)$|Capture$/i,es=0,ec=ez(!1),ed=ez(!0),eu=0;var eD,eL,eP,eI,eW=0,eU=[],eH=Z,eB=eH.__b,eV=eH.__r,eq=eH.diffed,eG=eH.__c,eJ=eH.unmount,eY=eH.__;function eX(e,t){eH.__h&&eH.__h(eL,e,eW||t),eW=0;var r=eL.__H||(eL.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function eK(e){return eW=1,function(e,t){var r=eX(eD++,2);if(r.t=e,!r.__c&&(r.__=[e9(void 0,t),function(e){var t=r.__N?r.__N[0]:r.__[0],n=r.t(t,e);t!==n&&(r.__N=[n,r.__[1]],r.__c.setState({}))}],r.__c=eL,!eL.__f)){var n=function(e,t,n){if(!r.__c.__H)return!0;var a=r.__c.__H.__.filter(function(e){return e.__c});if(a.every(function(e){return!e.__N}))return!i||i.call(this,e,t,n);var o=r.__c.props!==e;return a.some(function(e){if(e.__N){var t=e.__[0];e.__=e.__N,e.__N=void 0,t!==e.__[0]&&(o=!0)}}),i&&i.call(this,e,t,n)||o};eL.__f=!0;var i=eL.shouldComponentUpdate,a=eL.componentWillUpdate;eL.componentWillUpdate=function(e,t,r){if(this.__e){var o=i;i=void 0,n(e,t,r),i=o}a&&a.call(this,e,t,r)},eL.shouldComponentUpdate=n}return r.__N||r.__}(e9,e)}function eZ(e,t){var r=eX(eD++,3);!eH.__s&&e8(r.__H,t)&&(r.__=e,r.u=t,eL.__H.__h.push(r))}function eQ(e,t){var r=eX(eD++,4);!eH.__s&&e8(r.__H,t)&&(r.__=e,r.u=t,eL.__h.push(r))}function e0(e){return eW=5,e1(function(){return{current:e}},[])}function e1(e,t){var r=eX(eD++,7);return e8(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function e2(e,t){return eW=8,e1(function(){return e},t)}function e5(e){var t=eL.context[e.__c],r=eX(eD++,9);return r.c=e,t?(null==r.__&&(r.__=!0,t.sub(eL)),t.props.value):e.__}function e4(){for(var e;e=eU.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(e7),t.__h.some(e6),t.__h=[]}catch(r){t.__h=[],eH.__e(r,e.__v)}}}eH.__b=function(e){eL=null,eB&&eB(e)},eH.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),eY&&eY(e,t)},eH.__r=function(e){eV&&eV(e),eD=0;var t=(eL=e.__c).__H;t&&(eP===eL?(t.__h=[],eL.__h=[],t.__.some(function(e){e.__N&&(e.__=e.__N),e.u=e.__N=void 0})):(t.__h.some(e7),t.__h.some(e6),t.__h=[],eD=0)),eP=eL},eH.diffed=function(e){eq&&eq(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(1!==eU.push(t)&&eI===eH.requestAnimationFrame||((eI=eH.requestAnimationFrame)||function(e){var t,r=function(){clearTimeout(n),e3&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(r,35);e3&&(t=requestAnimationFrame(r))})(e4)),t.__H.__.some(function(e){e.u&&(e.__H=e.u),e.u=void 0})),eP=eL=null},eH.__c=function(e,t){t.some(function(e){try{e.__h.some(e7),e.__h=e.__h.filter(function(e){return!e.__||e6(e)})}catch(r){t.some(function(e){e.__h&&(e.__h=[])}),t=[],eH.__e(r,e.__v)}}),eG&&eG(e,t)},eH.unmount=function(e){eJ&&eJ(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.some(function(e){try{e7(e)}catch(e){t=e}}),r.__H=void 0,t&&eH.__e(t,r.__v))};var e3="function"==typeof requestAnimationFrame;function e7(e){var t=eL,r=e.__c;"function"==typeof r&&(e.__c=void 0,r()),eL=t}function e6(e){var t=eL;e.__c=e.__(),eL=t}function e8(e,t){return!e||e.length!==t.length||t.some(function(t,r){return t!==e[r]})}function e9(e,t){return"function"==typeof t?t(e):t}var te=Symbol.for("preact-signals");function tt(){if(tl>1)tl--;else{var e,t=!1,r=tu;for(tu=void 0;void 0!==r;)r.S.v===r.v&&(r.S.i=r.i),r=r.o;for(;void 0!==to;){var n=to;for(to=void 0,ts++;void 0!==n;){var i=n.u;if(n.u=void 0,n.f&=-3,!(8&n.f)&&tg(n))try{n.c()}catch(r){t||(e=r,t=!0)}n=i}}if(ts=0,tl--,t)throw e}}function tr(e){if(tl>0)return e();td=++tc,tl++;try{return e()}finally{tt()}}var tn=void 0;function ti(e){var t=tn;tn=void 0;try{return e()}finally{tn=t}}var ta,to=void 0,tl=0,ts=0,tc=0,td=0,tu=void 0,tp=0;function th(e){if(void 0!==tn){var t=e.n;if(void 0===t||t.t!==tn)return t={i:0,S:e,p:tn.s,n:void 0,t:tn,e:void 0,x:void 0,r:t},void 0!==tn.s&&(tn.s.n=t),tn.s=t,e.n=t,32&tn.f&&e.S(t),t;if(-1===t.i)return t.i=0,void 0!==t.n&&(t.n.p=t.p,void 0!==t.p&&(t.p.n=t.n),t.p=tn.s,t.n=void 0,tn.s.n=t,tn.s=t),t}}function tm(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.l=0,this.W=null==t?void 0:t.watched,this.Z=null==t?void 0:t.unwatched,this.name=null==t?void 0:t.name}function tf(e,t){return new tm(e,t)}function tg(e){for(var t=e.s;void 0!==t;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function tv(e){for(var t=e.s;void 0!==t;t=t.n){var r=t.S.n;if(void 0!==r&&(t.r=r),t.S.n=t,t.i=-1,void 0===t.n){e.s=t;break}}}function tw(e){for(var t=e.s,r=void 0;void 0!==t;){var n=t.p;-1===t.i?(t.S.U(t),void 0!==n&&(n.n=t.n),void 0!==t.n&&(t.n.p=n)):r=t,t.S.n=t.r,void 0!==t.r&&(t.r=void 0),t=n}e.s=r}function tb(e,t){tm.call(this,void 0),this.x=e,this.s=void 0,this.g=tp-1,this.f=4,this.W=null==t?void 0:t.watched,this.Z=null==t?void 0:t.unwatched,this.name=null==t?void 0:t.name}function tx(e,t){return new tb(e,t)}function ty(e){var t=e.m;if(e.m=void 0,"function"==typeof t){tl++;var r=tn;tn=void 0;try{t()}catch(t){throw e.f&=-2,e.f|=8,tk(e),t}finally{tn=r,tt()}}}function tk(e){for(var t=e.s;void 0!==t;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,ty(e)}function t_(e){if(tn!==this)throw Error("Out-of-order effect");tw(this),tn=e,this.f&=-2,8&this.f&&tk(this),tt()}function tN(e,t){this.x=e,this.m=void 0,this.s=void 0,this.u=void 0,this.f=32,this.name=null==t?void 0:t.name,ta&&ta.push(this)}function tS(e,t){var r=new tN(e,t);try{r.c()}catch(e){throw r.d(),e}var n=r.d.bind(r);return n[Symbol.dispose]=n,n}tm.prototype.brand=te,tm.prototype.h=function(){return!0},tm.prototype.S=function(e){var t=this,r=this.t;r!==e&&void 0===e.e&&(e.x=r,this.t=e,void 0!==r?r.e=e:ti(function(){var e;null==(e=t.W)||e.call(t)}))},tm.prototype.U=function(e){var t=this;if(void 0!==this.t){var r=e.e,n=e.x;void 0!==r&&(r.x=n,e.e=void 0),void 0!==n&&(n.e=r,e.x=void 0),e===this.t&&(this.t=n,void 0===n&&ti(function(){var e;null==(e=t.Z)||e.call(t)}))}},tm.prototype.subscribe=function(e){var t=this;return tS(function(){var r=t.value,n=tn;tn=void 0;try{e(r)}finally{tn=n}},{name:"sub"})},tm.prototype.valueOf=function(){return this.value},tm.prototype.toString=function(){return this.value+""},tm.prototype.toJSON=function(){return this.value},tm.prototype.peek=function(){var e=this;return ti(function(){return e.value})},Object.defineProperty(tm.prototype,"value",{get:function(){var e=th(this);return void 0!==e&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(ts>100)throw Error("Cycle detected");0!==tl&&0===ts&&this.l!==td&&(this.l=td,tu={S:this,v:this.v,i:this.i,o:tu}),this.v=e,this.i++,tp++,tl++;try{for(var t=this.t;void 0!==t;t=t.x)t.t.N()}finally{tt()}}}}),tb.prototype=new tm,tb.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if(32==(36&this.f)||(this.f&=-5,this.g===tp))return!0;if(this.g=tp,this.f|=1,this.i>0&&!tg(this))return this.f&=-2,!0;var e=tn;try{tv(this),tn=this;var t=this.x();(16&this.f||this.v!==t||0===this.i)&&(this.v=t,this.f&=-17,this.i++)}catch(e){this.v=e,this.f|=16,this.i++}return tn=e,tw(this),this.f&=-2,!0},tb.prototype.S=function(e){if(void 0===this.t){this.f|=36;for(var t=this.s;void 0!==t;t=t.n)t.S.S(t)}tm.prototype.S.call(this,e)},tb.prototype.U=function(e){if(void 0!==this.t&&(tm.prototype.U.call(this,e),void 0===this.t)){this.f&=-33;for(var t=this.s;void 0!==t;t=t.n)t.S.U(t)}},tb.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;void 0!==e;e=e.x)e.t.N()}},Object.defineProperty(tb.prototype,"value",{get:function(){if(1&this.f)throw Error("Cycle detected");var e=th(this);if(this.h(),void 0!==e&&(e.i=this.i),16&this.f)throw this.v;return this.v}}),tN.prototype.c=function(){var e=this.S();try{if(8&this.f||void 0===this.x)return;var t=this.x();"function"==typeof t&&(this.m=t)}finally{e()}},tN.prototype.S=function(){if(1&this.f)throw Error("Cycle detected");this.f|=1,this.f&=-9,ty(this),tv(this),tl++;var e=tn;return tn=this,t_.bind(this,e)},tN.prototype.N=function(){2&this.f||(this.f|=2,this.u=to,to=this)},tN.prototype.d=function(){this.f|=8,1&this.f||tk(this)},tN.prototype.dispose=function(){this.d()};var tE,tT,tC="u">typeof window&&!!window.__PREACT_SIGNALS_DEVTOOLS__,tz=[],tA=[];function t$(e,t){Z[e]=t.bind(null,Z[e]||function(){})}function tM(e){if(tT){var t=tT;tT=void 0,t()}tT=e&&e.S()}function tR(e){var t=this,r=e.data,n=tF(r);n.value=r;var i=e1(function(){for(var e=t.__v;e=e.__;)if(e.__c){e.__c.__$f|=4;break}var r=tx(function(){var e=n.value.value;return 0===e?0:!0===e?"":e||""}),i=tx(function(){var e;return!Array.isArray(r.value)&&(null==(e=r.value)||void 0!==e.constructor)}),a=tS(function(){if(this.N=tI,i.value){var e=r.value;t.__v&&t.__v.__e&&3===t.__v.__e.nodeType&&(t.__v.__e.data=e)}}),o=t.__$u.d;return t.__$u.d=function(){a(),o.call(this)},[i,r]},[]),a=i[0],o=i[1];return a.value?o.peek():o.value}function tF(e,t){return e1(function(){return tf(e,t)},[])}tS(function(){tE=this.N})(),tR.displayName="ReactiveTextNode",Object.defineProperties(tm.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:tR},props:{configurable:!0,get:function(){var e=this;return{data:{get value(){return e.value}}}}},__b:{configurable:!0,value:1}}),t$("__b",function(e,t){if("string"==typeof t.type){var r,n=t.props;for(var i in n)if("children"!==i){var a=n[i];a instanceof tm&&(r||(t.__np=r={}),r[i]=a,n[i]=a.peek())}}e(t)}),t$("__r",function(e,t){if(e(t),t.type!==ex){tM();var r,n,i=t.__c;i&&(i.__$f&=-2,void 0===(n=i.__$u)&&(tS(function(){r=this},{name:"function"==typeof t.type?t.type.displayName||t.type.name:""}),r.c=function(){var e;tC&&(null==(e=n.y)||e.call(n)),i.__$f|=1,i.setState({})},i.__$u=n=r)),tM(n)}}),t$("__e",function(e,t,r,n){tM(),e(t,r,n)}),t$("diffed",function(e,t){if(tM(),"string"==typeof t.type&&(r=t.__e)){var r,n=t.__np,i=t.props;if(n){var a=r.U;if(a)for(var o in a){var l=a[o];void 0===l||o in n||(l.d(),a[o]=void 0)}else a={},r.U=a;for(var s in n){var c=a[s],d=n[s];void 0===c?(c=function(e,t,r){var n=t in e&&void 0===e.ownerSVGElement,i=tf(r),a=r.peek();return{o:function(e,t){i.value=e,a=e.peek()},d:tS(function(){this.N=tI;var r=i.value.value;a!==r?(a=void 0,n?e[t]=r:null!=r&&(!1!==r||"-"===t[4])?e.setAttribute(t,r):e.removeAttribute(t)):a=void 0})}}(r,s,d),a[s]=c):c.o(d,i)}}}e(t)}),t$("unmount",function(e,t){if("string"==typeof t.type){var r=t.__e;if(r){var n=r.U;if(n)for(var i in r.U=void 0,n){var a=n[i];a&&a.d()}}var o=t.__np;if(o){var l=t.props;for(var s in o)l[s]=o[s]}t.__np=void 0}else{var c=t.__c;if(c){var d=c.__$u;d&&(c.__$u=void 0,d.d())}}e(t)}),t$("__h",function(e,t,r,n){(n<3||9===n)&&(t.__$f|=2),e(t,r,n)}),ey.prototype.shouldComponentUpdate=function(e,t){if(this.__R)return!0;var r=this.__$u,n=r&&void 0!==r.s;for(var i in t)return!0;if(this.__f||"boolean"==typeof this.u&&!0===this.u){var a=2&this.__$f;if(!(n||a||4&this.__$f)||1&this.__$f)return!0}else if(!(n||4&this.__$f)||3&this.__$f)return!0;for(var o in e)if("__source"!==o&&e[o]!==this.props[o])return!0;for(var l in this.props)if(!(l in e))return!0;return!1};var tO="u"<typeof requestAnimationFrame?setTimeout:function(e){var t=function(){clearTimeout(r),cancelAnimationFrame(n),e()},r=setTimeout(t,35),n=requestAnimationFrame(t)},tj=function(e){queueMicrotask(function(){queueMicrotask(e)})};function tD(){tr(function(){for(var e;e=tz.shift();)tE.call(e)})}function tL(){1===tz.push(this)&&(Z.requestAnimationFrame||tO)(tD)}function tP(){tr(function(){for(var e;e=tA.shift();)tE.call(e)})}function tI(){1===tA.push(this)&&(Z.requestAnimationFrame||tj)(tP)}function tW(e,t){var r=e0(e);r.current=e,eZ(function(){return tS(function(){return this.N=tL,r.current()},t)},[])}function tU(e,t){for(var r in t)e[r]=t[r];return e}function tH(e,t){for(var r in e)if("__source"!==r&&!(r in t))return!0;for(var n in t)if("__source"!==n&&e[n]!==t[n])return!0;return!1}function tB(e){var t,r;try{return((t=e.__)!==(r=e.u())||0===t&&1/t!=1/r)&&(t==t||r==r)}catch(e){return!0}}function tV(e,t){this.props=e,this.context=t}function tq(e,t){function r(e){var r=this.props.ref;return r!=e.ref&&r&&("function"==typeof r?r(null):r.current=null),t?!t(this.props,e)||r!=e.ref:tH(this.props,e)}function n(t){return this.shouldComponentUpdate=r,ew(e,t)}return n.displayName="Memo("+(e.displayName||e.name)+")",n.__f=n.prototype.isReactComponent=!0,n.type=e,n}(tV.prototype=new ey).isPureReactComponent=!0,tV.prototype.shouldComponentUpdate=function(e,t){return tH(this.props,e)||tH(this.state,t)};var tG=Z.__b;Z.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),tG&&tG(e)};var tJ="u">typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function tY(e){function t(t){var r=tU({},t);return delete r.ref,e(r,t.ref||null)}return t.$$typeof=tJ,t.render=e,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var tX=Z.__e;Z.__e=function(e,t,r,n){if(e.then){for(var i,a=t;a=a.__;)if((i=a.__c)&&i.__c)return null==t.__e&&(t.__e=r.__e,t.__k=r.__k),i.__c(e,t)}tX(e,t,r,n)};var tK=Z.unmount;function tZ(){this.__u=0,this.o=null,this.__b=null}function tQ(e){var t=e.__&&e.__.__c;return t&&t.__a&&t.__a(e)}function t0(){this.i=null,this.l=null}Z.unmount=function(e){var t=e.__c;t&&(t.__z=!0),t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),tK&&tK(e)},(tZ.prototype=new ey).__c=function(e,t){var r=t.__c,n=this;null==n.o&&(n.o=[]),n.o.push(r);var i=tQ(n.__v),a=!1,o=function(){a||n.__z||(a=!0,r.__R=null,i?i(s):s())};r.__R=o;var l=r.__P;r.__P=null;var s=function(){if(!--n.__u){if(n.state.__a){var e,t=n.state.__a;n.__v.__k[0]=function e(t,r,n){return t&&n&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(t){return e(t,r,n)}),t.__c&&t.__c.__P===r&&(t.__e&&n.appendChild(t.__e),t.__c.__e=!0,t.__c.__P=n)),t}(t,t.__c.__P,t.__c.__O)}for(n.setState({__a:n.__b=null});e=n.o.pop();)e.__P=l,e.forceUpdate()}};n.__u++||32&t.__u||n.setState({__a:n.__b=n.__v.__k[0]}),e.then(o,o)},tZ.prototype.componentWillUnmount=function(){this.o=[]},tZ.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),n=this.__v.__k[0].__c;this.__v.__k[0]=function e(t,r,n){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(e){"function"==typeof e.__c&&e.__c()}),t.__c.__H=null),null!=(t=tU({},t)).__c&&(t.__c.__P===n&&(t.__c.__P=r),t.__c.__e=!0,t.__c=null),t.__k=t.__k&&t.__k.map(function(t){return e(t,r,n)})),t}(this.__b,r,n.__O=n.__P)}this.__b=null}var i=t.__a&&ew(ex,null,e.fallback);return i&&(i.__u&=-33),[ew(ex,null,t.__a?null:e.children),i]};var t1=function(e,t,r){if(++r[1]===r[0]&&e.l.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.l.size))for(r=e.i;r;){for(;r.length>3;)r.pop()();if(r[1]<r[0])break;e.i=r=r[2]}};function t2(e){return this.getChildContext=function(){return e.context},e.children}function t5(e){var t=this,r=e.h;if(t.componentWillUnmount=function(){eO(null,t.v),t.v=null,t.h=null},t.h&&t.h!==r&&t.componentWillUnmount(),!t.v){for(var n=t.__v;null!==n&&!n.__m&&null!==n.__;)n=n.__;t.h=r,t.v={nodeType:1,parentNode:r,childNodes:[],__k:{__m:n.__m},contains:function(){return!0},namespaceURI:r.namespaceURI,insertBefore:function(e,r){this.childNodes.push(e),t.h.insertBefore(e,r)},removeChild:function(e){this.childNodes.splice(this.childNodes.indexOf(e)>>>1,1),t.h.removeChild(e)}}}eO(ew(t2,{context:t.context},e.__v),t.v)}(t0.prototype=new ey).__a=function(e){var t=this,r=tQ(t.__v),n=t.l.get(e);return n[0]++,function(i){var a=function(){t.props.revealOrder?(n.push(i),t1(t,e,n)):i()};r?r(a):a()}},t0.prototype.render=function(e){this.i=null,this.l=new Map;var t=eE(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var r=t.length;r--;)this.l.set(t[r],this.i=[1,0,this.i]);return e.children},t0.prototype.componentDidUpdate=t0.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,r){t1(e,r,t)})};var t4="u">typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,t3=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,t7=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,t6=/[A-Z0-9]/g,t8="u">typeof document;ey.prototype.isReactComponent=!0,["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(ey.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var t9=Z.event;Z.event=function(e){return t9&&(e=t9(e)),e.persist=function(){},e.isPropagationStopped=function(){return this.cancelBubble},e.isDefaultPrevented=function(){return this.defaultPrevented},e.nativeEvent=e};var re={configurable:!0,get:function(){return this.class}},rt=Z.vnode;Z.vnode=function(e){"string"==typeof e.type&&function(e){var t=e.props,r=e.type,n={},i=-1==r.indexOf("-");for(var a in t){var o=t[a];if(!("value"===a&&"defaultValue"in t&&null==o||t8&&"children"===a&&"noscript"===r||"class"===a||"className"===a)){var l,s=a.toLowerCase();"defaultValue"===a&&"value"in t&&null==t.value?a="value":"download"===a&&!0===o?o="":"translate"===s&&"no"===o?o=!1:"o"===s[0]&&"n"===s[1]?"ondoubleclick"===s?a="ondblclick":"onchange"!==s||"input"!==r&&"textarea"!==r||(l=t.type,("u">typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(l))?"onfocus"===s?a="onfocusin":"onblur"===s?a="onfocusout":t7.test(a)&&(a=s):s=a="oninput":i&&t3.test(a)?a=a.replace(t6,"-$&").toLowerCase():null===o&&(o=void 0),"oninput"===s&&n[a=s]&&(a="oninputCapture"),n[a]=o}}"select"==r&&(n.multiple&&Array.isArray(n.value)&&(n.value=eE(t.children).forEach(function(e){e.props.selected=-1!=n.value.indexOf(e.props.value)})),null!=n.defaultValue&&(n.value=eE(t.children).forEach(function(e){e.props.selected=n.multiple?-1!=n.defaultValue.indexOf(e.props.value):n.defaultValue==e.props.value}))),t.class&&!t.className?(n.class=t.class,Object.defineProperty(n,"className",re)):t.className&&(n.class=n.className=t.className),e.props=n}(e),e.$$typeof=t4,rt&&rt(e)};var rr=Z.__r;Z.__r=function(e){rr&&rr(e),e.__c};var rn=Z.diffed;Z.diffed=function(e){rn&&rn(e);var t=e.props,r=e.__e;null!=r&&"textarea"===e.type&&"value"in t&&t.value!==r.value&&(r.value=null==t.value?"":t.value)};var ri=0;function ra(e,t,r,n,i,a){t||(t={});var o,l,s=t;if("ref"in s)for(l in s={},t)"ref"==l?o=t[l]:s[l]=t[l];var c={type:e,props:s,key:r,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--ri,__i:-1,__u:0,__source:i,__self:a};if("function"==typeof e&&(o=e.defaultProps))for(l in o)void 0===s[l]&&(s[l]=o[l]);return Z.vnode&&Z.vnode(c),c}let ro=null,rl=(()=>{if(null!==ro)return ro;try{ro=window.matchMedia("(color-gamut: p3)").matches}catch{ro=!1}return ro})(),rs=e=>rl?`color(display-p3 0.84 0.19 0.78 / ${e})`:`rgba(210, 57, 192, ${e})`,rc=1e4,rd=(rs(.4),rs(.05),rs(.5),rs(.08),rs(.15),["id","class","aria-label","data-testid","role","name","title"]),ru=new Set(["id","data-testid","aria-label","href","src","alt","type","name","placeholder","role","for","action","method","title","disabled","checked","readonly","required","selected","open"]),rp=new Set("display.position.top.right.bottom.left.z-index.overflow.overflow-x.overflow-y.width.height.min-width.min-height.max-width.max-height.margin-top.margin-right.margin-bottom.margin-left.padding-top.padding-right.padding-bottom.padding-left.flex-direction.flex-wrap.justify-content.align-items.align-self.align-content.flex-grow.flex-shrink.flex-basis.order.gap.row-gap.column-gap.grid-template-columns.grid-template-rows.grid-template-areas.font-family.font-size.font-weight.font-style.line-height.letter-spacing.text-align.text-decoration-line.text-decoration-style.text-transform.text-overflow.text-shadow.white-space.word-break.overflow-wrap.vertical-align.color.background-color.background-image.background-position.background-size.background-repeat.border-top-width.border-right-width.border-bottom-width.border-left-width.border-top-style.border-right-style.border-bottom-style.border-left-style.border-top-color.border-right-color.border-bottom-color.border-left-color.border-top-left-radius.border-top-right-radius.border-bottom-left-radius.border-bottom-right-radius.box-shadow.opacity.transform.filter.backdrop-filter.object-fit.object-position".split(".")),rh=e=>(e.tagName||"").toLowerCase(),rm="bippy-0.5.41",rf=Object.defineProperty,rg=Object.prototype.hasOwnProperty,rv=()=>{},rw=e=>{try{Function.prototype.toString.call(e).indexOf("^_^")>-1&&setTimeout(()=>{throw Error("React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build")})}catch{}},rb=(e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__)=>!!(e&&"getFiberRoots"in e),rx=!1,ry,rk=(e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__)=>!!rx||(e&&"function"==typeof e.inject&&(ry=e.inject.toString()),!!ry?.includes("(injected)")),r_=new Set,rN=new Set,rS=e=>{e&&r_.add(e);try{let t=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!t)return;if(!t._instrumentationSource){t.checkDCE=rw,t.supportsFiber=!0,t.supportsFlight=!0,t.hasUnsupportedRendererAttached=!1,t._instrumentationSource=rm,t._instrumentationIsActive=!1;let e=rb(t);if(e||(t.on=rv),t.renderers.size){t._instrumentationIsActive=!0,r_.forEach(e=>e());return}let r=t.inject,n=rk(t);n&&!e&&(rx=!0,t.inject({scheduleRefresh(){}})&&(t._instrumentationIsActive=!0)),t.inject=e=>{let i=r(e);return rN.add(e),n&&t.renderers.set(i,e),t._instrumentationIsActive=!0,r_.forEach(e=>e()),i}}(t.renderers.size||t._instrumentationIsActive||rk())&&e?.()}catch{}},rE=e=>rg.call(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__")?(rS(e),globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__):(e=>{let t=new Map,r=0,n={_instrumentationIsActive:!1,_instrumentationSource:rm,checkDCE:rw,hasUnsupportedRendererAttached:!1,inject(e){let i=++r;return t.set(i,e),rN.add(e),n._instrumentationIsActive||(n._instrumentationIsActive=!0,r_.forEach(e=>e())),i},on:rv,onCommitFiberRoot:rv,onCommitFiberUnmount:rv,onPostCommitFiberRoot:rv,renderers:t,supportsFiber:!0,supportsFlight:!0};try{rf(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__",{configurable:!0,enumerable:!0,get:()=>n,set(t){if(t&&"object"==typeof t){let r=n.renderers;n=t,r.size>0&&(r.forEach((e,r)=>{rN.add(e),t.renderers.set(r,e)}),rS(e))}}});let t=window.hasOwnProperty,r=!1;rf(window,"hasOwnProperty",{configurable:!0,value:function(...e){try{if(!r&&"__REACT_DEVTOOLS_GLOBAL_HOOK__"===e[0])return globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__=void 0,r=!0,-0}catch{}return t.apply(this,e)},writable:!0})}catch{rS(e)}return n})(e),rT=e=>{switch(e.tag){case 1:case 11:case 0:case 14:case 15:return!0;default:return!1}};function rC(e,t,r=!1){if(!e)return null;let n=t(e);if(n instanceof Promise)return(async()=>{if(await n===!0)return e;let i=r?e.return:e.child;for(;i;){let e=await rA(i,t,r);if(e)return e;i=r?null:i.sibling}return null})();if(!0===n)return e;let i=r?e.return:e.child;for(;i;){let e=rz(i,t,r);if(e)return e;i=r?null:i.sibling}return null}let rz=(e,t,r=!1)=>{if(!e)return null;if(!0===t(e))return e;let n=r?e.return:e.child;for(;n;){let e=rz(n,t,r);if(e)return e;n=r?null:n.sibling}return null},rA=async(e,t,r=!1)=>{if(!e)return null;if(await t(e)===!0)return e;let n=r?e.return:e.child;for(;n;){let e=await rA(n,t,r);if(e)return e;n=r?null:n.sibling}return null},r$=e=>"function"==typeof e?e:"object"==typeof e&&e?r$(e.type||e.render):null,rM=e=>{if("string"==typeof e)return e;if("function"!=typeof e&&!("object"==typeof e&&e))return null;let t=e.displayName||e.name||null;if(t)return t;let r=r$(e);return r&&(r.displayName||r.name)||null},rR=()=>{let e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;return!!e?._instrumentationIsActive||rb(e)||rk(e)},rF=e=>{let t=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t?.renderers)for(let r of t.renderers.values())try{let t=r.findFiberByHostInstance?.(e);if(t)return t}catch{}if("object"==typeof e&&e){if("_reactRootContainer"in e)return e._reactRootContainer?._internalRoot?.current?.child;for(let t in e)if(t.startsWith("__reactContainer$")||t.startsWith("__reactInternalInstance$")||t.startsWith("__reactFiber"))return e[t]||null}return null},rO=/^[a-zA-Z][a-zA-Z\d+\-.]*:/,rj=["rsc://","file:///","webpack-internal://","webpack://","node:","turbopack://","metro://","/app-pages-browser/","/(app-pages-browser)/"],rD=["<anonymous>","eval",""],rL=/\.(jsx|tsx|ts|js)$/,rP=/(\.min|bundle|chunk|vendor|vendors|runtime|polyfill|polyfills)\.(js|mjs|cjs)$|(chunk|bundle|vendor|vendors|runtime|polyfill|polyfills|framework|app|main|index)[-_.][A-Za-z0-9_-]{4,}\.(js|mjs|cjs)$|[\da-f]{8,}\.(js|mjs|cjs)$|[-_.][\da-f]{20,}\.(js|mjs|cjs)$|\/dist\/|\/build\/|\/.next\/|\/out\/|\/node_modules\/|\.webpack\.|\.vite\.|\.turbopack\./i,rI=/^\?[\w~.-]+(?:=[^&#]*)?(?:&[\w~.-]+(?:=[^&#]*)?)*$/,rW=/\(at [^)]+\)$/,rU=/(^|@)\S+:\d+/,rH=/^\s*at .*(\S+:\d+|\(native\))/m,rB=/^(eval@)?(\[native code\])?$/,rV=(e,t)=>{if(t?.includeInElement!==!1){let r=e.split(`
`),n=[];for(let e of r)if(/^\s*at\s+/.test(e)){let t=rJ(e,void 0)[0];t&&n.push(t)}else if(/^\s*in\s+/.test(e)){let t=e.replace(/^\s*in\s+/,"").replace(/\s*\(at .*\)$/,"");n.push({functionName:t,source:e})}else if(e.match(rU)){let t=rY(e,void 0)[0];t&&n.push(t)}return rG(n,t)}return e.match(rH)?rJ(e,t):rY(e,t)},rq=e=>{if(!e.includes(":"))return[e,void 0,void 0];let t=e.startsWith("(")&&/:\d+\)$/.test(e)?e.slice(1,-1):e,r=/(.+?)(?::(\d+))?(?::(\d+))?$/.exec(t);return r?[r[1],r[2]||void 0,r[3]||void 0]:[t,void 0,void 0]},rG=(e,t)=>t&&null!=t.slice?Array.isArray(t.slice)?e.slice(t.slice[0],t.slice[1]):e.slice(0,t.slice):e,rJ=(e,t)=>rG(e.split(`
`).filter(e=>!!e.match(rH)),t).map(e=>{let t=e;t.includes("(eval ")&&(t=t.replace(/eval code/g,"eval").replace(/(\(eval at [^()]*)|(,.*$)/g,""));let r=t.replace(/^\s+/,"").replace(/\(eval code/g,"(").replace(/^.*?\s+/,""),n=r.match(/ (\(.+\)$)/);r=n?r.replace(n[0],""):r;let i=rq(n?n[1]:r);return{functionName:n&&r||void 0,fileName:["eval","<anonymous>"].includes(i[0])?void 0:i[0],lineNumber:i[1]?+i[1]:void 0,columnNumber:i[2]?+i[2]:void 0,source:t}}),rY=(e,t)=>rG(e.split(`
`).filter(e=>!e.match(rB)),t).map(e=>{let t=e;if(t.includes(" > eval")&&(t=t.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,":$1")),!t.includes("@")&&!t.includes(":"))return{functionName:t};{let e=/(([^\n\r"\u2028\u2029]*".[^\n\r"\u2028\u2029]*"[^\n\r@\u2028\u2029]*(?:@[^\n\r"\u2028\u2029]*"[^\n\r@\u2028\u2029]*)*(?:[\n\r\u2028\u2029][^@]*)?)?[^@]*)@/,r=t.match(e),n=r&&r[1]?r[1]:void 0,i=rq(t.replace(e,""));return{functionName:n,fileName:i[0],lineNumber:i[1]?+i[1]:void 0,columnNumber:i[2]?+i[2]:void 0,source:t}}});var rX="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",rK=new Uint8Array(64),rZ=new Uint8Array(128);for(let e=0;e<rX.length;e++){let t=rX.charCodeAt(e);rK[e]=t,rZ[t]=e}function rQ(e,t){let r=0,n=0,i=0;do r|=(31&(i=rZ[e.next()]))<<n,n+=5;while(32&i)let a=1&r;return r>>>=1,a&&(r=-0x80000000|-r),t+r}function r0(e,t){return!(e.pos>=t)&&44!==e.peek()}var r1=class{constructor(e){this.pos=0,this.buffer=e}next(){return this.buffer.charCodeAt(this.pos++)}peek(){return this.buffer.charCodeAt(this.pos)}indexOf(e){let{buffer:t,pos:r}=this,n=t.indexOf(e,r);return -1===n?t.length:n}};function r2(e){let{length:t}=e,r=new r1(e),n=[],i=0,a=0,o=0,l=0,s=0;do{let e=r.indexOf(";"),t=[],c=!0,d=0;for(i=0;r.pos<e;){let n;(i=rQ(r,i))<d&&(c=!1),d=i,r0(r,e)?(a=rQ(r,a),o=rQ(r,o),l=rQ(r,l),n=r0(r,e)?[i,a,o,l,s=rQ(r,s)]:[i,a,o,l]):n=[i],t.push(n),r.pos++}c||t.sort(r5),n.push(t),r.pos=e+1}while(r.pos<=t)return n}function r5(e,t){return e[0]-t[0]}let r4=/^[a-zA-Z][a-zA-Z\d+\-.]*:/,r3=/^data:application\/json[^,]+base64,/,r7=/(?:\/\/[@#][ \t]+sourceMappingURL=([^\s'"]+?)[ \t]*$)|(?:\/\*[@#][ \t]+sourceMappingURL=([^*]+?)[ \t]*(?:\*\/)[ \t]*$)/,r6=new Map,r8=new Map,r9=(e,t,r,n)=>{if(r<0||r>=e.length)return null;let i=e[r];if(!i||0===i.length)return null;let a=null;for(let e of i)if(e[0]<=n)a=e;else break;if(!a||a.length<4)return null;let[,o,l,s]=a;if(void 0===o||void 0===l||void 0===s)return null;let c=t[o];return c?{columnNumber:s,fileName:c,lineNumber:l+1}:null},ne=e=>{if(!e)return!1;let t=e.trim();if(!t)return!1;let r=t.match(r4);if(!r)return!0;let n=r[0].toLowerCase();return"http:"===n||"https:"===n},nt=async(e,t=fetch)=>{let r;if(!ne(e))return null;try{let n=await t(e);if(!n.ok)return null;r=await n.text()}catch{return null}if(!r)return null;let n=((e,t)=>{let r=t.split(`
`),n;for(let e=r.length-1;e>=0&&!n;e--){let t=r[e].match(r7);t&&(n=t[1]||t[2])}if(!n)return null;let i=r4.test(n);if(!(r3.test(n)||i||n.startsWith("/"))){let t=e.split("/");t[t.length-1]=n,n=t.join("/")}return n})(e,r);if(!n||!ne(n))return null;try{let e=await t(n);if(!e.ok)return null;let r=await e.json();return"sections"in r?(e=>{let t=e.sections.map(({map:e,offset:t})=>({map:{...e,mappings:r2(e.mappings)},offset:t})),r=new Set;for(let e of t)for(let t of e.map.sources)r.add(t);return{file:e.file,mappings:[],names:[],sections:t,sourceRoot:void 0,sources:Array.from(r),sourcesContent:void 0,version:3}})(r):{file:r.file,mappings:r2(r.mappings),names:r.names,sourceRoot:r.sourceRoot,sources:r.sources,sourcesContent:r.sourcesContent,version:3}}catch{return null}},nr=async(e,t=!0,r)=>{if(t&&r6.has(e))return r6.get(e)??null;if(t&&r8.has(e))return r8.get(e);let n=nt(e,r);t&&r8.set(e,n);let i=await n;return t&&r8.delete(e),t&&(null===i?r6.set(e,null):r6.set(e,i)),i},nn=async(e,t=!0,r)=>await Promise.all(e.map(async e=>{if(!e.fileName)return e;let n=await nr(e.fileName,t,r);if(!n||"number"!=typeof e.lineNumber||"number"!=typeof e.columnNumber)return e;let i=((e,t,r)=>{if(e.sections){let n=null;for(let i of e.sections)if(t>i.offset.line||t===i.offset.line&&r>=i.offset.column)n=i;else break;if(!n)return null;let i=t-n.offset.line,a=t===n.offset.line?r-n.offset.column:r;return r9(n.map.mappings,n.map.sources,i,a)}return r9(e.mappings,e.sources,t-1,r)})(n,e.lineNumber,e.columnNumber);return i?{...e,source:i.fileName&&e.source?e.source.replace(e.fileName,i.fileName):e.source,fileName:i.fileName,lineNumber:i.lineNumber,columnNumber:i.columnNumber,isSymbolicated:!0}:e})),ni=e=>e._debugStack instanceof Error&&"string"==typeof e._debugStack?.stack,na=e=>{for(let t of rN){let r=t.currentDispatcherRef;r&&"object"==typeof r&&("H"in r?r.H=e:r.current=e)}},no=e=>`
    in ${e}`,nl=(e,t)=>{let r=no(e);return t&&(r+=` (at ${t})`),r},ns=!1,nc=(e,t)=>{if(!e||ns)return"";let r=Error.prepareStackTrace;Error.prepareStackTrace=void 0,ns=!0;let n=(()=>{let e=rE();for(let t of[...Array.from(rN),...Array.from(e.renderers.values())]){let e=t.currentDispatcherRef;if(e&&"object"==typeof e)return"H"in e?e.H:e.current}return null})();na(null);let i=console.error,a=console.warn;console.error=()=>{},console.warn=()=>{};try{let r={DetermineComponentFrameRoot(){let r;try{if(t){let t=function(){throw Error()};if(Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}}else{try{throw Error()}catch(e){r=e}let t=e();t&&"function"==typeof t.catch&&t.catch(()=>{})}}catch(e){if(e instanceof Error&&r instanceof Error&&"string"==typeof e.stack)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot",Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name")?.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});let[n,i]=r.DetermineComponentFrameRoot();if(n&&i){let t=n.split(`
`),r=i.split(`
`),a=0,o=0;for(;a<t.length&&!t[a].includes("DetermineComponentFrameRoot");)a++;for(;o<r.length&&!r[o].includes("DetermineComponentFrameRoot");)o++;if(a===t.length||o===r.length)for(a=t.length-1,o=r.length-1;a>=1&&o>=0&&t[a]!==r[o];)o--;for(;a>=1&&o>=0;a--,o--)if(t[a]!==r[o]){if(1!==a||1!==o)do if(a--,--o<0||t[a]!==r[o]){let r=`
${t[a].replace(" at new "," at ")}`,n=rM(e);return n&&r.includes("<anonymous>")&&(r=r.replace("<anonymous>",n)),r}while(a>=1&&o>=0)break}}}finally{ns=!1,Error.prepareStackTrace=r,na(n),console.error=i,console.warn=a}let o=e?rM(e):"";return o?no(o):""},nd=(e,t)=>{let r=e.tag,n="";switch(r){case 28:n=no("Activity");break;case 1:n=nc(e.type,!0);break;case 11:n=nc(e.type.render,!1);break;case 0:case 15:n=nc(e.type,!1);break;case 5:case 26:case 27:n=no(e.type);break;case 16:n=no("Lazy");break;case 13:n=e.child!==t&&null!==t?no("Suspense Fallback"):no("Suspense");break;case 19:n=no("SuspenseList");break;case 30:n=no("ViewTransition");break;default:return""}return n},nu=e=>{let t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;let r=e;if(!r)return"";Error.prepareStackTrace=t,r.startsWith(`Error: react-stack-top-frame
`)&&(r=r.slice(29));let n=r.indexOf(`
`);return(-1!==n&&(r=r.slice(n+1)),-1!==(n=Math.max(r.indexOf("react_stack_bottom_frame"),r.indexOf("react-stack-bottom-frame")))&&(n=r.lastIndexOf(`
`,n)),-1===n)?"":r=r.slice(0,n)},np=e=>!!(e.functionName&&e.fileName&&(e.fileName.startsWith("rsc://")||e.fileName.startsWith("about://React/"))),nh=(e,t)=>e.fileName===t.fileName&&e.lineNumber===t.lineNumber&&e.columnNumber===t.columnNumber,nm=async(e,t=!0,r)=>{let n,i=(n=[],rC(e,e=>{if(!ni(e))return;let t="string"==typeof e.type?e.type:rM(e.type)||"<anonymous>";n.push({componentName:t,stackFrames:rV(nu(e._debugStack?.stack))})},!0),n),a=rV((e=>{try{let t="",r=e,n=null;do{t+=nd(r,n);let e=r._debugInfo;if(e&&Array.isArray(e))for(let r=e.length-1;r>=0;r--){let n=e[r];"string"==typeof n.name&&(t+=nl(n.name,n.env))}n=r,r=r.return}while(r)return t}catch(e){return e instanceof Error?`
Error generating stack: ${e.message}
${e.stack}`:""}})(e)),o=(e=>{let t=new Map;for(let r of e)for(let e of r.stackFrames){if(!np(e))continue;let r=e.functionName,n=t.get(r)??[];n.some(t=>nh(t,e))||(n.push(e),t.set(r,n))}return t})(i),l=new Map;return nn(a.map(e=>e.source?.includes("(at Server)")||null!=e.source&&rW.test(e.source)?((e,t,r)=>{if(!e.functionName)return{...e,isServer:!0};let n=t.get(e.functionName);if(!n||0===n.length)return{...e,isServer:!0};let i=r.get(e.functionName)??0,a=n[i%n.length];return r.set(e.functionName,i+1),{...e,isServer:!0,fileName:a.fileName,lineNumber:a.lineNumber,columnNumber:a.columnNumber,source:e.source?.replace("(at Server)",`(${a.fileName}:${a.lineNumber}:${a.columnNumber})`)}})(e,o,l):e).filter((e,t,r)=>{if(0===t)return!0;let n=r[t-1];return e.functionName!==n.functionName}),t,r)},nf=async(e,t=!0,r)=>{let n;if((n=e._debugSource)&&"object"==typeof n&&n&&"fileName"in n&&"string"==typeof n.fileName&&"lineNumber"in n&&"number"==typeof n.lineNumber)return e._debugSource||null;for(let n of(await nm(e,t,r)))if(n.fileName)return{fileName:n.fileName,lineNumber:n.lineNumber,columnNumber:n.columnNumber,functionName:n.functionName};return null},ng=e=>e.split("/").filter(Boolean).length,nv=e=>{if(!e||rD.some(t=>t===e))return"";let t=e,r=t.startsWith("http://")||t.startsWith("https://");if(r)try{t=new URL(t).pathname}catch{}if(r&&(t=(e=>{let t=e.indexOf("/",1);if(-1===t||1!==ng(e.slice(0,t)))return e;let r=e.slice(t);if(!rL.test(r)||2>ng(r))return e;let n=r.split("/").filter(Boolean)[0]??null;return!n||n.startsWith("@")||n.length>4?e:r})(t)),t.startsWith("about://React/")){let e=t.slice(14),r=e.indexOf("/"),n=e.indexOf(":");t=-1!==r&&(-1===n||r<n)?e.slice(r+1):e}let n=!0;for(;n;)for(let e of(n=!1,rj))if(t.startsWith(e)){t=t.slice(e.length),"file:///"===e&&(t=`/${t.replace(/^\/+/,"")}`),n=!0;break}if(rO.test(t)){let e=t.match(rO);e&&(t=t.slice(e[0].length))}if(t.startsWith("//")){let e=t.indexOf("/",2);t=-1===e?"":t.slice(e)}let i=t.indexOf("?");if(-1!==i){let e=t.slice(i);rI.test(e)&&(t=t.slice(0,i))}return t},nw=e=>{let t=nv(e);return!(!t||!rL.test(t)||rP.test(t))},nb=Symbol.for("react.context"),nx=[],ny=null,nk=Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render."),n_=()=>{let e=ny;return null!==e&&(ny=e.next),e},nN=e=>e._currentValue,nS=(e,t,r,n=null)=>{nx.push({displayName:n,primitive:e,stackError:Error(),value:t,dispatcherHookName:r})},nE=e=>(t,r)=>{let n=n_();n_(),n_();let i=Error(),{value:a,error:o}=((e,t)=>{let r,n=null;if(null!==e){let t=e.memoizedState;if("object"==typeof t&&t&&"then"in t&&"function"==typeof t.then)switch(t.status){case"fulfilled":r=t.value;break;case"rejected":n=t.reason;break;default:n=nk,r=t}else r=t}else r=t;return{value:r,error:n}})(n,r);if(nx.push({displayName:null,primitive:e,stackError:i,value:a,dispatcherHookName:e}),null!==o)throw o;return[a,()=>{},!1]},nT=nE("ActionState"),nC={readContext:nN,use:e=>{if("object"==typeof e&&e){if("function"==typeof e.then){switch(e.status){case"fulfilled":return nS("Promise",e.value,"Use"),e.value;case"rejected":throw e.reason}throw nS("Unresolved",e,"Use"),nk}if(e.$$typeof===nb&&"_currentValue"in e){let t=nN(e);return nS("Context (use)",t,"Use",e.displayName||"Context"),t}}throw Error("An unsupported type was passed to use(): "+String(e))},useCallback:e=>{let t=n_();return nS("Callback",null===t?e:t.memoizedState[0],"Callback"),e},useContext:e=>{let t=nN(e);return nS("Context",t,"Context",e.displayName||null),t},useEffect:e=>{n_(),nS("Effect",e,"Effect")},useImperativeHandle:e=>{let t;n_(),"object"==typeof e&&e&&"current"in e&&(t=e.current),nS("ImperativeHandle",t,"ImperativeHandle")},useLayoutEffect:e=>{n_(),nS("LayoutEffect",e,"LayoutEffect")},useInsertionEffect:e=>{n_(),nS("InsertionEffect",e,"InsertionEffect")},useMemo:e=>{let t=n_(),r=null===t?e():t.memoizedState[0];return nS("Memo",r,"Memo"),r},useReducer:(e,t,r)=>{let n=n_(),i=null===n?void 0===r?t:r(t):n.memoizedState;return nS("Reducer",i,"Reducer"),[i,()=>{}]},useRef:e=>{let t=n_(),r=null===t?{current:e}:t.memoizedState;return nS("Ref",r.current,"Ref"),r},useState:e=>{let t=n_(),r=null===t?"function"==typeof e?e():e:t.memoizedState;return nS("State",r,"State"),[r,()=>{}]},useDebugValue:(e,t)=>{nS("DebugValue","function"==typeof t?t(e):e,"DebugValue")},useDeferredValue:e=>{let t=n_(),r=null===t?e:t.memoizedState;return nS("DeferredValue",r,"DeferredValue"),r},useTransition:()=>{let e=n_();n_();let t=null!==e&&e.memoizedState;return nS("Transition",t,"Transition"),[t,()=>{}]},useSyncExternalStore:(e,t)=>{let r=n_();n_();let n=null===r?t():r.memoizedState;return nS("SyncExternalStore",n,"SyncExternalStore"),n},useId:()=>{let e=n_(),t=null===e?"":e.memoizedState;return nS("Id",t,"Id"),t},useHostTransitionStatus:()=>{let e=nN({_currentValue:null});return nS("HostTransitionStatus",e,"HostTransitionStatus"),e},useFormState:nE("FormState"),useActionState:nT,useOptimistic:e=>{let t=n_(),r=null===t?e:t.memoizedState;return nS("Optimistic",r,"Optimistic"),[r,()=>{}]},useMemoCache:e=>[],useCacheRefresh:()=>{let e=n_();return nS("CacheRefresh",null===e?()=>{}:e.memoizedState,"CacheRefresh"),()=>{}},useEffectEvent:e=>(n_(),nS("EffectEvent",e,"EffectEvent"),e)};typeof Proxy>"u"||new Proxy(nC,{get(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t];let r=Error("Missing method in Dispatcher: "+t);throw r.name="ReactDebugToolsUnsupportedHookError",r}}),(()=>{try{"u">typeof window&&(window.document?.createElement||window.navigator?.product==="ReactNative")&&rE()}catch{}})();let nz=(e,t)=>e.length>t?`${e.slice(0,t)}...`:e,nA=/^(?:\.\/)?\/?\([a-z][a-z0-9-]*\)\//,n$=e=>{let t=nv(e);return(t=t.replace(nA,"")).startsWith("./")&&(t=t.slice(2)),t},nM=e=>{try{return decodeURIComponent(e)}catch{return e}},nR=/(?:^|[/\\])node_modules[/\\]/g,nF=/[/\\]\.vite[/\\]deps[^/\\]*[/\\]/g,nO=/\.[mc]?[jt]sx?$/i,nj=/^chunk-[A-Za-z0-9_-]+$/,nD=/[/\\]/,nL=/^(.+?)@v?\d/,nP=e=>e.split(nD).filter(Boolean),nI=e=>{let[t,r]=nP(e);return!t||t.startsWith(".")?null:t.startsWith("@")?r?`${t}/${r}`:null:t},nW=e=>{let t=nP(e)[0];if(!t)return null;let r=t.replace(nO,"");if(nj.test(r))return null;if(!r.startsWith("@"))return r;let n=r.indexOf("_");return -1===n?null:`${r.slice(0,n)}/${r.slice(n+1)}`},nU=(e,t,r)=>{let n=null,i;for(;null!==(i=t.exec(e));)n=i;return n?r(e.slice(n.index+n[0].length)):null},nH=e=>e?.match(nL)?.[1]??null,nB=e=>{let t;if(!e)return null;let r=nv(e);return r&&((nU(t=nM(r),nF,nW)??nU(t,nR,nI))||(e=>{let t;try{t=new URL(e)}catch{return null}if(!t.hostname)return null;let r=nP(t.pathname).map(nM);for(let[e,t]of r.entries()){if(t.startsWith("@")){let n=nH(r[e+1]);if(n)return`${t}/${n}`;continue}let n=nH(t);if(n)return n}return null})(e))||null},nV=e=>e.startsWith("data-react-grab-"),nq=new Set(["_","$","motion.","styled.","chakra.","ark.","Primitive.","Slot."]),nG=new Set("AppRouter.AppRouterAnnouncer.AppDevOverlay.AppDevOverlayErrorBoundary.ClientPageRoot.ClientSegmentRoot.DevRootHTTPAccessFallbackBoundary.ErrorBoundary.ErrorBoundaryHandler.GracefulDegradeBoundary.HTTPAccessErrorFallback.HTTPAccessFallbackBoundary.HTTPAccessFallbackErrorBoundary.HandleRedirect.Head.HistoryUpdater.HotReload.InnerLayoutRouter.InnerScrollAndFocusHandler.InnerScrollAndFocusHandlerOld.InnerScrollAndMaybeFocusHandler.InnerScrollHandlerNew.LoadableComponent.LoadingBoundary.LoadingBoundaryProvider.NotAllowedRootHTTPFallbackError.OfflineProvider.OuterLayoutRouter.RedirectBoundary.RedirectErrorBoundary.RenderFromTemplateContext.RenderValidationBoundaryAtThisLevel.ReplaySsrOnlyErrors.RootErrorBoundary.RootLevelDevOverlayElement.Router.ScrollAndFocusHandler.ScrollAndMaybeFocusHandler.SegmentBoundaryTrigger.SegmentBoundaryTriggerNode.SegmentStateProvider.SegmentTrieNode.SegmentViewNode.SegmentViewStateNode.ServerRoot.body.html".split(".")),nJ=new Set(["Suspense","Fragment","StrictMode","Profiler","SuspenseList"]),nY=new Set(["MotionDOMComponent"]),nX=e=>{if(nG.has(e)||nJ.has(e)||nY.has(e))return!0;for(let t of nq)if(e.startsWith(t))return!0;return!1},nK=e=>!(!e||nX(e)||"SlotClone"===e||"Slot"===e),nZ=e=>(e&&(r=void 0),r??="u">typeof document&&!!(document.getElementById("__NEXT_DATA__")||document.querySelector("nextjs-portal"))),nQ=e=>!(e.length<=1||nX(e)||e[0]!==e[0].toUpperCase()||e.endsWith("Provider")||e.endsWith("Context")),n0=["about://React/","rsc://React/"],n1=e=>n0.some(t=>e.startsWith(t)),n2=e=>{for(let t of n0){if(!e.startsWith(t))continue;let r=e.indexOf("/",t.length);if(-1===r)continue;let n=r+1,i=e.lastIndexOf("?");return nM(i>n?e.slice(n,i):e.slice(n))}return e},n5=async e=>{let r=[],n=[];for(let t=0;t<e.length;t++){let i=e[t];i.isServer&&i.fileName&&(r.push(t),n.push({file:n2(i.fileName),methodName:i.functionName??"<unknown>",line1:i.lineNumber??null,column1:i.columnNumber??null,arguments:[]}))}if(0===n.length)return e;let i=new AbortController,a=setTimeout(()=>i.abort(),5e3);try{let a=await fetch(`${(()=>{if(void 0!==t)return t;let e=document.querySelector('script[src*="/_next/"]')?.src,r=e?new URL(e).pathname:"",n=r.indexOf("/_next/");return t=n>0?r.slice(0,n):""})()}/__nextjs_original-stack-frames`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({frames:n,isServer:!0,isEdgeServer:!1,isAppDirectory:!0}),signal:i.signal});if(!a.ok)return e;let o=await a.json(),l=[...e];for(let t=0;t<r.length;t++){let n=o[t];if(n?.status!=="fulfilled")continue;let i=n.value?.originalStackFrame;if(!i?.file||i.ignored)continue;let a=r[t];l[a]={...e[a],fileName:i.file,lineNumber:i.line1??void 0,columnNumber:i.column1??void 0,isSymbolicated:!0}}return l}catch{return e}finally{clearTimeout(a)}},n4=e=>{if(!rR())return e;let t=e;for(;t;){if(rF(t))return t;t=t.parentElement}return e},n3=new WeakMap,n7=async e=>{try{let t=rF(e);if(!t)return null;let r=await nm(t);return nZ()?await n5(((e,t)=>{let r;if(!t.some(e=>e.isServer&&!e.fileName&&e.functionName))return t;let n=(r=new Map,rC(e,e=>{if(!ni(e))return!1;let t=nu(e._debugStack.stack);if(!t)return!1;for(let e of rV(t))!e.functionName||!e.fileName||n1(e.fileName)&&(r.has(e.functionName)||r.set(e.functionName,{...e,isServer:!0}));return!1},!0),r);return 0===n.size?t:t.map(e=>{if(!e.isServer||e.fileName||!e.functionName)return e;let t=n.get(e.functionName);return t?{...e,fileName:t.fileName,lineNumber:t.lineNumber,columnNumber:t.columnNumber}:e})})(t,r)):r}catch{return null}},n6=e=>{if(!rR())return Promise.resolve([]);let t=n4(e),r=n3.get(t);if(r)return r;let n=n7(t);return n3.set(t,n),n},n8=async e=>{let t=rF(n4(e));if(!t)return null;try{let e=await nf(t);return e?.fileName&&nw(e.fileName)?{filePath:n$(e.fileName),lineNumber:e.lineNumber??null,columnNumber:e.columnNumber??null,componentName:(e.functionName&&nQ(e.functionName)?e.functionName:null)??(e=>{if(!e||!rT(e))return null;let t=rM(e.type);return t&&nQ(t)?t:null})(t._debugOwner)}:null}catch{return null}},n9=async e=>{let t=await n8(e);if(t)return t;let r=await n6(e);if(!r||0===r.length)return null;let n=r.filter(e=>e.fileName&&nw(e.fileName)),i=n.find(e=>e.functionName&&nQ(e.functionName))??n[0];return i?.fileName?{filePath:n$(i.fileName),lineNumber:i.lineNumber??null,columnNumber:i.columnNumber??null,componentName:i.functionName&&nQ(i.functionName)?i.functionName:null}:null},ie=["/src/app/","/src/pages/","/app/","/pages/"],it=(e,t)=>{let r=((e,t)=>{let r=n$(e);if(!t||!r.startsWith("/"))return r;for(let e of ie){let t=r.indexOf(e);if(-1!==t)return`/./${r.slice(t+1)}`}return r})(e.filePath,t),n=t&&e.lineNumber?`${r}:${e.lineNumber}${e.columnNumber?`:${e.columnNumber}`:""}`:r;return e.componentName?`
  in ${e.componentName} (at ${n})`:`
  in ${n}`},ir=async(e,t={})=>{let r=t.maxLines??3,n=await n8(e),i=await n6(e);if(i&&i&&i.some(e=>!!(e.fileName&&nw(e.fileName)||e.isServer&&(!e.functionName||nQ(e.functionName))||e.functionName&&nQ(e.functionName))))return((e,t={},r=null)=>{let{maxLines:n=3}=t,i=nZ(),a=[],o=null,l=!1;r&&a.push(it(r,i));let s=(e,t)=>{a.push(e),o=t};for(let t of e){if(a.length>=n)break;let e=t.fileName&&nw(t.fileName)?t.fileName:null,c=e?null:nB(t.fileName);if(c&&c===o)continue;let d=t.functionName&&nQ(t.functionName)?t.functionName:null;if(!l&&d&&d===r?.componentName){l=!0;continue}if(t.isServer&&!e&&(d||!t.functionName)){let e=c?`${c} at Server`:"at Server";s(`
  in ${d??"<anonymous>"} (${e})`,c);continue}if(!e&&d){s(c?`
  in ${d} (${c})`:`
  in ${d}`,c);continue}e&&s(it({componentName:d,filePath:e,lineNumber:t.lineNumber??null,columnNumber:t.columnNumber??null},i),null)}return a.join("")})(i,t,n);if(n)return it(n,nZ());let a=((e,t)=>{if(!rR())return[];let r=rF(e);if(!r)return[];let n=[];return rC(r,e=>{if(n.length>=t)return!0;if(rT(e)){let t=rM(e.type);t&&nK(t)&&n.push(t)}return!1},!0),n})(n4(e),r);return a.length>0?a.map(e=>`
  in ${e}`).join(""):""},ii=async(e,t={})=>{let r=n4(e),n=ip(r),i=await ir(r,t);return i?`${n}${i}`:ia(r)},ia=e=>{if(!(e instanceof HTMLElement))return iu(e);let t=rh(e),r=is(e),n=nz(ic(e),100);return n.length>0?`<${t}${r}>
  ${n}
</${t}>`:`<${t}${r} />`},io=e=>nz(e,15),il=e=>"class"===e||"className"===e||"style"===e,is=e=>{let t=[],r=[],n="";for(let{name:i,value:a}of e.attributes)if(!nV(i)){if(il(i)){"style"!==i&&a&&(n=` class="${io(a)}"`);continue}ru.has(i)?t.push(a?` ${i}="${a}"`:` ${i}`):a&&r.push(` ${i}="${io(a)}"`)}return t.join("")+r.join("")+n},ic=e=>{let t="";for(let r of e.childNodes)if(r.nodeType===Node.TEXT_NODE){let e=r.textContent?.trim()??"";e&&(t+=(t?" ":"")+e)}return t},id=e=>0===e.length?"":e.length<=2?e.map(e=>`<${rh(e)} ...>`).join(`
  `):`(${e.length} elements)`,iu=e=>{let t=rh(e);if(!(e instanceof HTMLElement))return`<${t}${((e,t={})=>{let{truncate:r=!0,maxAttrs:n=3}=t,i=[];for(let t of rd){if(i.length>=n)break;let a=e.getAttribute(t);if(a){let e=r?io(a):a;i.push(`${t}="${e}"`)}}return i.length>0?` ${i.join(" ")}`:""})(e,{truncate:!1,maxAttrs:rd.length})} />`;let r=is(e),n=nz(ic(e),100);return n?`<${t}${r}>${n}</${t}>`:`<${t}${r} />`},ip=e=>{let t=rh(e),r=is(e),n=ic(e),i=[],a=[],o=!1;for(let t of e.childNodes)t.nodeType!==Node.COMMENT_NODE&&(t.nodeType===Node.TEXT_NODE?t.textContent&&t.textContent.trim().length>0&&(o=!0):t instanceof Element&&(o?a.push(t):i.push(t)));let l="",s=id(i);s&&(l+=`
  ${s}`),n.length>0&&(l+=`
  ${nz(n,100)}`);let c=id(a);return c&&(l+=`
  ${c}`),l.length>0?`<${t}${r}>${l}
</${t}>`:`<${t}${r} />`},ih="u">typeof window,im=ih?(Object.getOwnPropertyDescriptor(Window.prototype,"requestAnimationFrame")?.value??window.requestAnimationFrame).bind(window):e=>0,ig=ih?(Object.getOwnPropertyDescriptor(Window.prototype,"cancelAnimationFrame")?.value??window.cancelAnimationFrame).bind(window):e=>{};new WeakMap;let iv=new Map,iw=new WeakSet,ib=new Map,ix=new Map;"u">typeof window&&(window.requestAnimationFrame=e=>iw.has(e)?im(t=>{e(t)}):im(e),window.cancelAnimationFrame=e=>{if(iv.has(e))return void iv.delete(e);let t=ix.get(e);if(void 0!==t){ig(t.nativeId),ix.delete(e);return}let r=ib.get(e);if(void 0!==r){iv.delete(r),ib.delete(e);return}ig(e)}),new WeakMap,new WeakMap,new WeakMap;new WeakMap,new WeakMap,new WeakSet,e=>{if(!e)return[];let t=[],r=e.next;if(!r)return[];let n=r;do n&&=(t.push(n.action),n.next);while(n&&n!==r)return t};var iy=class extends Error{constructor(e){super(e),this.name="ReactGrabError"}},ik=class extends iy{constructor(){super("Can't generate CSS selector for non-element node type."),this.name="NonElementNodeError"}},i_=class extends iy{constructor(e){super(`Timeout: Can't find a unique selector after ${e}ms`),this.name="SelectorTimeoutError",this.timeoutMs=e}},iN=class extends iy{constructor(){super("Selector was not found."),this.name="SelectorNotFoundError"}};let iS=new Set(["role","name","aria-label","rel","href"]),iE=e=>{if(!/^[a-z-]{3,}$/i.test(e))return!1;for(let t of e.split(/-|[A-Z]/))if(t.length<=2||/[^aeiou]{4,}/i.test(t))return!1;return!0},iT=e=>{let t=e[0].name;for(let r=1;r<e.length;r++)t=`${e[r].name} > ${t}`;return t},iC=e=>{let t=0;for(let r of e)t+=r.penalty;return t},iz=(e,t)=>iC(e)-iC(t),iA=(e,t)=>{let r=e.parentNode;if(!r)return;let n=r.firstChild;if(!n)return;let i=0;for(;n&&(n.nodeType===Node.ELEMENT_NODE&&(void 0===t||n.tagName.toLowerCase()===t)&&i++,n!==e);)n=n.nextSibling;return i},i$=(e,t)=>"html"===e?"html":`${e}:nth-of-type(${t})`,iM=(e,t)=>{let r=[],n=e.getAttribute("id"),i=e.tagName.toLowerCase();for(let t of(n&&iE(n)&&r.push({name:`#${CSS.escape(n)}`,penalty:0}),e.classList))iE(t)&&r.push({name:`.${CSS.escape(t)}`,penalty:1});for(let n of e.attributes)t(n.name,n.value)&&r.push({name:`[${CSS.escape(n.name)}="${CSS.escape(n.value)}"]`,penalty:2});r.push({name:i,penalty:5});let a=iA(e,i);void 0!==a&&r.push({name:i$(i,a),penalty:10});let o=iA(e);return void 0!==o&&r.push({name:"html"===i?"html":`${i}:nth-child(${o})`,penalty:50}),r},iR=(e,t=rc,r=[])=>{if(t<=0)return[];if(0===e.length)return[r];let n=[];for(let i of e[0]){let a=t-n.length;if(a<=0)break;n.push(...iR(e.slice(1),a,[...r,i]))}return n},iF=(e,t)=>1===t.querySelectorAll(iT(e)).length,iO=(e,t)=>{let r=e,n=[];for(;r&&r!==t;){let e=r.tagName.toLowerCase(),t=iA(r,e);if(void 0===t)return;n.push({name:i$(e,t),penalty:10}),r=r.parentElement}return iF(n,t)?n:void 0},ij=e=>"u">typeof CSS&&"function"==typeof CSS.escape?CSS.escape(e):e.replace(/[^a-zA-Z0-9_-]/g,e=>`\\${e}`),iD=e=>e.ownerDocument.body??e.ownerDocument.documentElement,iL=new Set(["data-testid","data-test-id","data-test","data-cy","data-qa","aria-label","role","name","title","alt"]),iP=e=>e.length>0&&e.length<=120,iI=(e,t)=>{try{let r=e.ownerDocument.querySelectorAll(t);return 1===r.length&&r[0]===e}catch{return!1}},iW=new Map(["top","right","bottom","left"].flatMap(e=>[[`border-${e}-style`,e],[`border-${e}-color`,e]])),iU=null,iH=new Map,iB=(e,t)=>{let r=iW.get(e);if(!r)return!1;let n=t.getPropertyValue(`border-${r}-width`);return"0px"===n||"0"===n},iV=async e=>{let[t,r,n]=await Promise.all([ii(e),n9(e),n6(e).then(e=>e??[])]),i=await ir(e),a=ip(e),o=(e=>{if(!rR())return null;let t=rF(n4(e));if(!t)return null;let r=t.return;for(;r;){if(rT(r)){let e=rM(r.type);if(e&&nK(e))return e}r=r.return}return null})(e),l=rF(e),s=((e,t=!0)=>{let r=(e=>{if(e instanceof HTMLElement&&e.id){let t=`#${ij(e.id)}`;if(iI(e,t))return t}for(let t of iL){let r=e.getAttribute(t);if(!r||!iP(r))continue;let n=`[${t}=${JSON.stringify(r)}]`;if(iI(e,n))return n;let i=`${e.tagName.toLowerCase()}${n}`;if(iI(e,i))return i}return null})(e);if(r)return r;if(t)try{let t=((e,t,r,n)=>{let i;if(e.nodeType!==Node.ELEMENT_NODE)throw new ik;if("html"===e.tagName.toLowerCase())return"html";let a=(i=e.getRootNode?.())instanceof ShadowRoot?i:t.nodeType===Node.DOCUMENT_NODE?t:t.ownerDocument,o=Date.now(),l=[],s=e,c=0,d;for(;s&&s!==a&&!d;)if(l.push(iM(s,n)),s=s.parentElement,++c>=3){let t=iR(l);for(let n of(t.sort(iz),t)){if(Date.now()-o>r){let t=iO(e,a);if(!t)throw new i_(r);return iT(t)}if(iF(n,a)){d=n;break}}}if(!d&&c<3){let e=iR(l);for(let t of(e.sort(iz),e)){if(Date.now()-o>r)break;if(iF(t,a)){d=t;break}}}if(!d)throw new iN;return iT(d)})(e,iD(e),200,(e,t)=>{let r,n;return r=iS.has(e)||e.startsWith("data-")&&iE(e),n=iE(t)&&t.length<100||t.startsWith("#")&&iE(t.slice(1)),r&&n||iL.has(e)&&iP(t)});if(t)return t}catch{}return(e=>{let t=[],r=iD(e),n=e;for(;n;){if(n instanceof HTMLElement&&n.id){t.unshift(`#${ij(n.id)}`);break}let e=n.parentElement;if(!e){t.unshift(n.tagName.toLowerCase());break}let i=Array.from(e.children).indexOf(n),a=i>=0?i+1:1;if(t.unshift(`${n.tagName.toLowerCase()}:nth-child(${a})`),e===r){t.unshift(r.tagName.toLowerCase());break}n=e}return t.join(" > ")})(e)})(e),c=(e=>{let t=(e=>{let t=iH.get(e);if(t)return t;let r=iU||((iU=document.createElement("iframe")).style.cssText="position:fixed;left:-9999px;width:0;height:0;border:none;visibility:hidden;",document.body.appendChild(iU),iU),n=r.contentDocument,i=n.createElement(e);n.body.appendChild(i);let a=r.contentWindow.getComputedStyle(i),o=new Map;for(let e of rp){let t=a.getPropertyValue(e);t&&o.set(e,t)}return i.remove(),iH.set(e,o),o})(e.tagName.toLowerCase()),r=getComputedStyle(e),n=[];for(let e of rp){let i=r.getPropertyValue(e);i&&i!==t.get(e)&&(iB(e,r)||n.push(`${e}: ${i};`))}let i=e.getAttribute("class")?.trim(),a=n.join(`
`);return i?a?`className: ${i}

${a}`:`className: ${i}`:a})(e);return{element:e,snippet:t,htmlPreview:a,stackString:i,stack:n,componentName:o,filePath:r?.filePath??null,lineNumber:r?.lineNumber??null,columnNumber:r?.columnNumber??null,fiber:l,selector:s,styles:c}};var iq=e.i(233902),iG=Object.defineProperty,iJ=(e,t,r)=>{let n;return(n="symbol"!=typeof t?t+"":t)in e?iG(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r};Array.prototype.toSorted||Object.defineProperty(Array.prototype,"toSorted",{value:function(e){return[...this].sort(e)},writable:!0,configurable:!0});var iY="u">typeof window;function iX(e,t){return t-e}var iK=e=>{let t="",r=new Map;for(let t of e){let{forget:e,time:n,aggregatedCount:i,name:a}=t;r.has(i)||r.set(i,[]);let o=r.get(i);o&&o.push({name:a,forget:e,time:null!=n?n:0})}let n=Array.from(r.keys()).sort(iX),i=[],a=0;for(let e of n){let t=r.get(e);if(!t)continue;let n=function(e){let t=e[0].name,r=Math.min(4,e.length);for(let n=1;n<r;n++)t+=`, ${e[n].name}`;return t}(t),o=function(e){let t=e[0].time;for(let r=1,n=e.length;r<n;r++)t+=e[r].time;return t}(t),l=function(e){for(let t=0,r=e.length;t<r;t++)if(e[t].forget)return!0;return!1}(t);a+=o,t.length>4&&(n+="…"),e>1&&(n+=` \xd7 ${e}`),l&&(n=`\u2728${n}`),i.push(n)}return(t=i.join(", ")).length?(t.length>40&&(t=`${t.slice(0,40)}\u2026`),a>=.01&&(t+=` (${Number(a.toFixed(2))}ms)`),t):null};function iZ(e,t){return e===t||e!=e&&t!=t}var iQ=()=>iY?(void 0===window.reactScanIdCounter&&(window.reactScanIdCounter=0),`${++window.reactScanIdCounter}`):"0",i0=e=>{let t=e.createOscillator(),r=e.createGain();t.connect(r),r.connect(e.destination);let n=[392,600],i=.3/n.length;n.forEach((r,n)=>{t.frequency.setValueAtTime(r,e.currentTime+n*i)}),t.type="sine",r.gain.setValueAtTime(.12,e.currentTime),r.gain.setTargetAtTime(0,e.currentTime+.21,.05),t.start(),t.stop(e.currentTime+.3)},i1=tY(({size:e=15,name:t,fill:r="currentColor",stroke:n="currentColor",className:i,externalURL:a="",style:o},l)=>{let s=Array.isArray(e)?e[0]:e,c=Array.isArray(e)?e[1]||e[0]:e,d=`${a}#${t}`;return ra("svg",{ref:l,width:`${s}px`,height:`${c}px`,fill:r,stroke:n,className:i,style:{...o,minWidth:`${s}px`,maxWidth:`${s}px`,minHeight:`${c}px`,maxHeight:`${c}px`},children:[ra("title",{children:t}),ra("use",{href:d})]})}),i2="react-scan-widget-settings-v2",i5="react-scan-widget-collapsed-v1",i4="react-scan-widget-last-view-v1",i3=(e=new Map,t=null,r)=>({nextPart:e,validators:t,classGroupId:r}),i7=[],i6=(e,t,r)=>{if(0==e.length-t)return r.classGroupId;let n=e[t],i=r.nextPart.get(n);if(i){let r=i6(e,t+1,i);if(r)return r}let a=r.validators;if(null===a)return;let o=0===t?e.join("-"):e.slice(t).join("-"),l=a.length;for(let e=0;e<l;e++){let t=a[e];if(t.validator(o))return t.classGroupId}},i8=(e,t)=>{let r=i3();for(let n in e)i9(e[n],r,n,t);return r},i9=(e,t,r,n)=>{let i=e.length;for(let a=0;a<i;a++)ae(e[a],t,r,n)},ae=(e,t,r,n)=>{"string"==typeof e?at(e,t,r):"function"==typeof e?ar(e,t,r,n):an(e,t,r,n)},at=(e,t,r)=>{(""===e?t:ai(t,e)).classGroupId=r},ar=(e,t,r,n)=>{aa(e)?i9(e(n),t,r,n):(null===t.validators&&(t.validators=[]),t.validators.push({classGroupId:r,validator:e}))},an=(e,t,r,n)=>{let i=Object.entries(e),a=i.length;for(let e=0;e<a;e++){let[a,o]=i[e];i9(o,ai(t,a),r,n)}},ai=(e,t)=>{let r=e,n=t.split("-"),i=n.length;for(let e=0;e<i;e++){let t=n[e],i=r.nextPart.get(t);i||(i=i3(),r.nextPart.set(t,i)),r=i}return r},aa=e=>"isThemeGetter"in e&&!0===e.isThemeGetter,ao=[],al=(e,t,r,n,i)=>({modifiers:e,hasImportantModifier:t,baseClassName:r,maybePostfixModifierPosition:n,isExternal:i}),as=/\s+/,ac=e=>{let t;if("string"==typeof e)return e;let r="";for(let n=0;n<e.length;n++)e[n]&&(t=ac(e[n]))&&(r&&(r+=" "),r+=t);return r},ad=[],au=e=>{let t=t=>t[e]||ad;return t.isThemeGetter=!0,t},ap=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,ah=/^\((?:(\w[\w-]*):)?(.+)\)$/i,am=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,af=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,ag=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,av=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,aw=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,ab=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,ax=e=>am.test(e),ay=e=>!!e&&!Number.isNaN(Number(e)),ak=e=>!!e&&Number.isInteger(Number(e)),a_=e=>e.endsWith("%")&&ay(e.slice(0,-1)),aN=e=>af.test(e),aS=()=>!0,aE=e=>ag.test(e)&&!av.test(e),aT=()=>!1,aC=e=>aw.test(e),az=e=>ab.test(e),aA=e=>!aM(e)&&!aI(e),a$=e=>aJ(e,aZ,aT),aM=e=>ap.test(e),aR=e=>aJ(e,aQ,aE),aF=e=>aJ(e,a0,ay),aO=e=>aJ(e,a2,aS),aj=e=>aJ(e,a1,aT),aD=e=>aJ(e,aX,aT),aL=e=>aJ(e,aK,az),aP=e=>aJ(e,a5,aC),aI=e=>ah.test(e),aW=e=>aY(e,aQ),aU=e=>aY(e,a1),aH=e=>aY(e,aX),aB=e=>aY(e,aZ),aV=e=>aY(e,aK),aq=e=>aY(e,a5,!0),aG=e=>aY(e,a2,!0),aJ=(e,t,r)=>{let n=ap.exec(e);return!!n&&(n[1]?t(n[1]):r(n[2]))},aY=(e,t,r=!1)=>{let n=ah.exec(e);return!!n&&(n[1]?t(n[1]):r)},aX=e=>"position"===e||"percentage"===e,aK=e=>"image"===e||"url"===e,aZ=e=>"length"===e||"size"===e||"bg-size"===e,aQ=e=>"length"===e,a0=e=>"number"===e,a1=e=>"family-name"===e,a2=e=>"number"===e||"weight"===e,a5=e=>"shadow"===e,a4=((e,...t)=>{let r,n,i,a,o=e=>{let t=n(e);if(t)return t;let a=((e,t)=>{let{parseClassName:r,getClassGroupId:n,getConflictingClassGroupIds:i,sortModifiers:a}=t,o=[],l=e.trim().split(as),s="";for(let e=l.length-1;e>=0;e-=1){let t=l[e],{isExternal:c,modifiers:d,hasImportantModifier:u,baseClassName:p,maybePostfixModifierPosition:h}=r(t);if(c){s=t+(s.length>0?" "+s:s);continue}let m=!!h,f=n(m?p.substring(0,h):p);if(!f){if(!m||!(f=n(p))){s=t+(s.length>0?" "+s:s);continue}m=!1}let g=0===d.length?"":1===d.length?d[0]:a(d).join(":"),v=u?g+"!":g,w=v+f;if(o.indexOf(w)>-1)continue;o.push(w);let b=i(f,m);for(let e=0;e<b.length;++e){let t=b[e];o.push(v+t)}s=t+(s.length>0?" "+s:s)}return s})(e,r);return i(e,a),a};return a=l=>{var s;let c;return n=(r={cache:(e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,r=Object.create(null),n=Object.create(null),i=(i,a)=>{r[i]=a,++t>e&&(t=0,n=r,r=Object.create(null))};return{get(e){let t=r[e];return void 0!==t?t:void 0!==(t=n[e])?(i(e,t),t):void 0},set(e,t){e in r?r[e]=t:i(e,t)}}})((s=t.reduce((e,t)=>t(e),e())).cacheSize),parseClassName:(e=>{let{prefix:t,experimentalParseClassName:r}=e,n=e=>{let t,r=[],n=0,i=0,a=0,o=e.length;for(let l=0;l<o;l++){let o=e[l];if(0===n&&0===i){if(":"===o){r.push(e.slice(a,l)),a=l+1;continue}if("/"===o){t=l;continue}}"["===o?n++:"]"===o?n--:"("===o?i++:")"===o&&i--}let l=0===r.length?e:e.slice(a),s=l,c=!1;return l.endsWith("!")?(s=l.slice(0,-1),c=!0):l.startsWith("!")&&(s=l.slice(1),c=!0),al(r,c,s,t&&t>a?t-a:void 0)};if(t){let e=t+":",r=n;n=t=>t.startsWith(e)?r(t.slice(e.length)):al(ao,!1,t,void 0,!0)}if(r){let e=n;n=t=>r({className:t,parseClassName:e})}return n})(s),sortModifiers:(c=new Map,s.orderSensitiveModifiers.forEach((e,t)=>{c.set(e,1e6+t)}),e=>{let t=[],r=[];for(let n=0;n<e.length;n++){let i=e[n],a="["===i[0],o=c.has(i);a||o?(r.length>0&&(r.sort(),t.push(...r),r=[]),t.push(i)):r.push(i)}return r.length>0&&(r.sort(),t.push(...r)),t}),...(e=>{let t=(e=>{let{theme:t,classGroups:r}=e;return i8(r,t)})(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:n}=e;return{getClassGroupId:e=>{if(e.startsWith("[")&&e.endsWith("]")){var r;let t,n,i;return -1===(r=e).slice(1,-1).indexOf(":")?void 0:(n=(t=r.slice(1,-1)).indexOf(":"),(i=t.slice(0,n))?"arbitrary.."+i:void 0)}let n=e.split("-"),i=+(""===n[0]&&n.length>1);return i6(n,i,t)},getConflictingClassGroupIds:(e,t)=>{if(t){let t=n[e],i=r[e];if(t){if(i){let e=Array(i.length+t.length);for(let t=0;t<i.length;t++)e[t]=i[t];for(let r=0;r<t.length;r++)e[i.length+r]=t[r];return e}return t}return i||i7}return r[e]||i7}}})(s)}).cache.get,i=r.cache.set,a=o,o(l)},(...e)=>a(((...e)=>{let t,r,n=0,i="";for(;n<e.length;)(t=e[n++])&&(r=ac(t))&&(i&&(i+=" "),i+=r);return i})(...e))})(()=>{let e=au("color"),t=au("font"),r=au("text"),n=au("font-weight"),i=au("tracking"),a=au("leading"),o=au("breakpoint"),l=au("container"),s=au("spacing"),c=au("radius"),d=au("shadow"),u=au("inset-shadow"),p=au("text-shadow"),h=au("drop-shadow"),m=au("blur"),f=au("perspective"),g=au("aspect"),v=au("ease"),w=au("animate"),b=()=>["auto","avoid","all","avoid-page","page","left","right","column"],x=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],y=()=>[...x(),aI,aM],k=()=>["auto","hidden","clip","visible","scroll"],_=()=>["auto","contain","none"],N=()=>[aI,aM,s],S=()=>[ax,"full","auto",...N()],E=()=>[ak,"none","subgrid",aI,aM],T=()=>["auto",{span:["full",ak,aI,aM]},ak,aI,aM],C=()=>[ak,"auto",aI,aM],z=()=>["auto","min","max","fr",aI,aM],A=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],$=()=>["start","end","center","stretch","center-safe","end-safe"],M=()=>["auto",...N()],R=()=>[ax,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...N()],F=()=>[ax,"screen","full","dvw","lvw","svw","min","max","fit",...N()],O=()=>[ax,"screen","full","lh","dvh","lvh","svh","min","max","fit",...N()],j=()=>[e,aI,aM],D=()=>[...x(),aH,aD,{position:[aI,aM]}],L=()=>["no-repeat",{repeat:["","x","y","space","round"]}],P=()=>["auto","cover","contain",aB,a$,{size:[aI,aM]}],I=()=>[a_,aW,aR],W=()=>["","none","full",c,aI,aM],U=()=>["",ay,aW,aR],H=()=>["solid","dashed","dotted","double"],B=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],V=()=>[ay,a_,aH,aD],q=()=>["","none",m,aI,aM],G=()=>["none",ay,aI,aM],J=()=>["none",ay,aI,aM],Y=()=>[ay,aI,aM],X=()=>[ax,"full",...N()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[aN],breakpoint:[aN],color:[aS],container:[aN],"drop-shadow":[aN],ease:["in","out","in-out"],font:[aA],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[aN],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[aN],shadow:[aN],spacing:["px",ay],text:[aN],"text-shadow":[aN],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",ax,aM,aI,g]}],container:["container"],columns:[{columns:[ay,aM,aI,l]}],"break-after":[{"break-after":b()}],"break-before":[{"break-before":b()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:y()}],overflow:[{overflow:k()}],"overflow-x":[{"overflow-x":k()}],"overflow-y":[{"overflow-y":k()}],overscroll:[{overscroll:_()}],"overscroll-x":[{"overscroll-x":_()}],"overscroll-y":[{"overscroll-y":_()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:S()}],"inset-x":[{"inset-x":S()}],"inset-y":[{"inset-y":S()}],start:[{"inset-s":S(),start:S()}],end:[{"inset-e":S(),end:S()}],"inset-bs":[{"inset-bs":S()}],"inset-be":[{"inset-be":S()}],top:[{top:S()}],right:[{right:S()}],bottom:[{bottom:S()}],left:[{left:S()}],visibility:["visible","invisible","collapse"],z:[{z:[ak,"auto",aI,aM]}],basis:[{basis:[ax,"full","auto",l,...N()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[ay,ax,"auto","initial","none",aM]}],grow:[{grow:["",ay,aI,aM]}],shrink:[{shrink:["",ay,aI,aM]}],order:[{order:[ak,"first","last","none",aI,aM]}],"grid-cols":[{"grid-cols":E()}],"col-start-end":[{col:T()}],"col-start":[{"col-start":C()}],"col-end":[{"col-end":C()}],"grid-rows":[{"grid-rows":E()}],"row-start-end":[{row:T()}],"row-start":[{"row-start":C()}],"row-end":[{"row-end":C()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":z()}],"auto-rows":[{"auto-rows":z()}],gap:[{gap:N()}],"gap-x":[{"gap-x":N()}],"gap-y":[{"gap-y":N()}],"justify-content":[{justify:[...A(),"normal"]}],"justify-items":[{"justify-items":[...$(),"normal"]}],"justify-self":[{"justify-self":["auto",...$()]}],"align-content":[{content:["normal",...A()]}],"align-items":[{items:[...$(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...$(),{baseline:["","last"]}]}],"place-content":[{"place-content":A()}],"place-items":[{"place-items":[...$(),"baseline"]}],"place-self":[{"place-self":["auto",...$()]}],p:[{p:N()}],px:[{px:N()}],py:[{py:N()}],ps:[{ps:N()}],pe:[{pe:N()}],pbs:[{pbs:N()}],pbe:[{pbe:N()}],pt:[{pt:N()}],pr:[{pr:N()}],pb:[{pb:N()}],pl:[{pl:N()}],m:[{m:M()}],mx:[{mx:M()}],my:[{my:M()}],ms:[{ms:M()}],me:[{me:M()}],mbs:[{mbs:M()}],mbe:[{mbe:M()}],mt:[{mt:M()}],mr:[{mr:M()}],mb:[{mb:M()}],ml:[{ml:M()}],"space-x":[{"space-x":N()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":N()}],"space-y-reverse":["space-y-reverse"],size:[{size:R()}],"inline-size":[{inline:["auto",...F()]}],"min-inline-size":[{"min-inline":["auto",...F()]}],"max-inline-size":[{"max-inline":["none",...F()]}],"block-size":[{block:["auto",...O()]}],"min-block-size":[{"min-block":["auto",...O()]}],"max-block-size":[{"max-block":["none",...O()]}],w:[{w:[l,"screen",...R()]}],"min-w":[{"min-w":[l,"screen","none",...R()]}],"max-w":[{"max-w":[l,"screen","none","prose",{screen:[o]},...R()]}],h:[{h:["screen","lh",...R()]}],"min-h":[{"min-h":["screen","lh","none",...R()]}],"max-h":[{"max-h":["screen","lh",...R()]}],"font-size":[{text:["base",r,aW,aR]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[n,aG,aO]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",a_,aM]}],"font-family":[{font:[aU,aj,t]}],"font-features":[{"font-features":[aM]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[i,aI,aM]}],"line-clamp":[{"line-clamp":[ay,"none",aI,aF]}],leading:[{leading:[a,...N()]}],"list-image":[{"list-image":["none",aI,aM]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",aI,aM]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:j()}],"text-color":[{text:j()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...H(),"wavy"]}],"text-decoration-thickness":[{decoration:[ay,"from-font","auto",aI,aR]}],"text-decoration-color":[{decoration:j()}],"underline-offset":[{"underline-offset":[ay,"auto",aI,aM]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:N()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",aI,aM]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",aI,aM]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:D()}],"bg-repeat":[{bg:L()}],"bg-size":[{bg:P()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},ak,aI,aM],radial:["",aI,aM],conic:[ak,aI,aM]},aV,aL]}],"bg-color":[{bg:j()}],"gradient-from-pos":[{from:I()}],"gradient-via-pos":[{via:I()}],"gradient-to-pos":[{to:I()}],"gradient-from":[{from:j()}],"gradient-via":[{via:j()}],"gradient-to":[{to:j()}],rounded:[{rounded:W()}],"rounded-s":[{"rounded-s":W()}],"rounded-e":[{"rounded-e":W()}],"rounded-t":[{"rounded-t":W()}],"rounded-r":[{"rounded-r":W()}],"rounded-b":[{"rounded-b":W()}],"rounded-l":[{"rounded-l":W()}],"rounded-ss":[{"rounded-ss":W()}],"rounded-se":[{"rounded-se":W()}],"rounded-ee":[{"rounded-ee":W()}],"rounded-es":[{"rounded-es":W()}],"rounded-tl":[{"rounded-tl":W()}],"rounded-tr":[{"rounded-tr":W()}],"rounded-br":[{"rounded-br":W()}],"rounded-bl":[{"rounded-bl":W()}],"border-w":[{border:U()}],"border-w-x":[{"border-x":U()}],"border-w-y":[{"border-y":U()}],"border-w-s":[{"border-s":U()}],"border-w-e":[{"border-e":U()}],"border-w-bs":[{"border-bs":U()}],"border-w-be":[{"border-be":U()}],"border-w-t":[{"border-t":U()}],"border-w-r":[{"border-r":U()}],"border-w-b":[{"border-b":U()}],"border-w-l":[{"border-l":U()}],"divide-x":[{"divide-x":U()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":U()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...H(),"hidden","none"]}],"divide-style":[{divide:[...H(),"hidden","none"]}],"border-color":[{border:j()}],"border-color-x":[{"border-x":j()}],"border-color-y":[{"border-y":j()}],"border-color-s":[{"border-s":j()}],"border-color-e":[{"border-e":j()}],"border-color-bs":[{"border-bs":j()}],"border-color-be":[{"border-be":j()}],"border-color-t":[{"border-t":j()}],"border-color-r":[{"border-r":j()}],"border-color-b":[{"border-b":j()}],"border-color-l":[{"border-l":j()}],"divide-color":[{divide:j()}],"outline-style":[{outline:[...H(),"none","hidden"]}],"outline-offset":[{"outline-offset":[ay,aI,aM]}],"outline-w":[{outline:["",ay,aW,aR]}],"outline-color":[{outline:j()}],shadow:[{shadow:["","none",d,aq,aP]}],"shadow-color":[{shadow:j()}],"inset-shadow":[{"inset-shadow":["none",u,aq,aP]}],"inset-shadow-color":[{"inset-shadow":j()}],"ring-w":[{ring:U()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:j()}],"ring-offset-w":[{"ring-offset":[ay,aR]}],"ring-offset-color":[{"ring-offset":j()}],"inset-ring-w":[{"inset-ring":U()}],"inset-ring-color":[{"inset-ring":j()}],"text-shadow":[{"text-shadow":["none",p,aq,aP]}],"text-shadow-color":[{"text-shadow":j()}],opacity:[{opacity:[ay,aI,aM]}],"mix-blend":[{"mix-blend":[...B(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":B()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[ay]}],"mask-image-linear-from-pos":[{"mask-linear-from":V()}],"mask-image-linear-to-pos":[{"mask-linear-to":V()}],"mask-image-linear-from-color":[{"mask-linear-from":j()}],"mask-image-linear-to-color":[{"mask-linear-to":j()}],"mask-image-t-from-pos":[{"mask-t-from":V()}],"mask-image-t-to-pos":[{"mask-t-to":V()}],"mask-image-t-from-color":[{"mask-t-from":j()}],"mask-image-t-to-color":[{"mask-t-to":j()}],"mask-image-r-from-pos":[{"mask-r-from":V()}],"mask-image-r-to-pos":[{"mask-r-to":V()}],"mask-image-r-from-color":[{"mask-r-from":j()}],"mask-image-r-to-color":[{"mask-r-to":j()}],"mask-image-b-from-pos":[{"mask-b-from":V()}],"mask-image-b-to-pos":[{"mask-b-to":V()}],"mask-image-b-from-color":[{"mask-b-from":j()}],"mask-image-b-to-color":[{"mask-b-to":j()}],"mask-image-l-from-pos":[{"mask-l-from":V()}],"mask-image-l-to-pos":[{"mask-l-to":V()}],"mask-image-l-from-color":[{"mask-l-from":j()}],"mask-image-l-to-color":[{"mask-l-to":j()}],"mask-image-x-from-pos":[{"mask-x-from":V()}],"mask-image-x-to-pos":[{"mask-x-to":V()}],"mask-image-x-from-color":[{"mask-x-from":j()}],"mask-image-x-to-color":[{"mask-x-to":j()}],"mask-image-y-from-pos":[{"mask-y-from":V()}],"mask-image-y-to-pos":[{"mask-y-to":V()}],"mask-image-y-from-color":[{"mask-y-from":j()}],"mask-image-y-to-color":[{"mask-y-to":j()}],"mask-image-radial":[{"mask-radial":[aI,aM]}],"mask-image-radial-from-pos":[{"mask-radial-from":V()}],"mask-image-radial-to-pos":[{"mask-radial-to":V()}],"mask-image-radial-from-color":[{"mask-radial-from":j()}],"mask-image-radial-to-color":[{"mask-radial-to":j()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":x()}],"mask-image-conic-pos":[{"mask-conic":[ay]}],"mask-image-conic-from-pos":[{"mask-conic-from":V()}],"mask-image-conic-to-pos":[{"mask-conic-to":V()}],"mask-image-conic-from-color":[{"mask-conic-from":j()}],"mask-image-conic-to-color":[{"mask-conic-to":j()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:D()}],"mask-repeat":[{mask:L()}],"mask-size":[{mask:P()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",aI,aM]}],filter:[{filter:["","none",aI,aM]}],blur:[{blur:q()}],brightness:[{brightness:[ay,aI,aM]}],contrast:[{contrast:[ay,aI,aM]}],"drop-shadow":[{"drop-shadow":["","none",h,aq,aP]}],"drop-shadow-color":[{"drop-shadow":j()}],grayscale:[{grayscale:["",ay,aI,aM]}],"hue-rotate":[{"hue-rotate":[ay,aI,aM]}],invert:[{invert:["",ay,aI,aM]}],saturate:[{saturate:[ay,aI,aM]}],sepia:[{sepia:["",ay,aI,aM]}],"backdrop-filter":[{"backdrop-filter":["","none",aI,aM]}],"backdrop-blur":[{"backdrop-blur":q()}],"backdrop-brightness":[{"backdrop-brightness":[ay,aI,aM]}],"backdrop-contrast":[{"backdrop-contrast":[ay,aI,aM]}],"backdrop-grayscale":[{"backdrop-grayscale":["",ay,aI,aM]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[ay,aI,aM]}],"backdrop-invert":[{"backdrop-invert":["",ay,aI,aM]}],"backdrop-opacity":[{"backdrop-opacity":[ay,aI,aM]}],"backdrop-saturate":[{"backdrop-saturate":[ay,aI,aM]}],"backdrop-sepia":[{"backdrop-sepia":["",ay,aI,aM]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":N()}],"border-spacing-x":[{"border-spacing-x":N()}],"border-spacing-y":[{"border-spacing-y":N()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",aI,aM]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[ay,"initial",aI,aM]}],ease:[{ease:["linear","initial",v,aI,aM]}],delay:[{delay:[ay,aI,aM]}],animate:[{animate:["none",w,aI,aM]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[f,aI,aM]}],"perspective-origin":[{"perspective-origin":y()}],rotate:[{rotate:G()}],"rotate-x":[{"rotate-x":G()}],"rotate-y":[{"rotate-y":G()}],"rotate-z":[{"rotate-z":G()}],scale:[{scale:J()}],"scale-x":[{"scale-x":J()}],"scale-y":[{"scale-y":J()}],"scale-z":[{"scale-z":J()}],"scale-3d":["scale-3d"],skew:[{skew:Y()}],"skew-x":[{"skew-x":Y()}],"skew-y":[{"skew-y":Y()}],transform:[{transform:[aI,aM,"","none","gpu","cpu"]}],"transform-origin":[{origin:y()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:X()}],"translate-x":[{"translate-x":X()}],"translate-y":[{"translate-y":X()}],"translate-z":[{"translate-z":X()}],"translate-none":["translate-none"],accent:[{accent:j()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:j()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",aI,aM]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":N()}],"scroll-mx":[{"scroll-mx":N()}],"scroll-my":[{"scroll-my":N()}],"scroll-ms":[{"scroll-ms":N()}],"scroll-me":[{"scroll-me":N()}],"scroll-mbs":[{"scroll-mbs":N()}],"scroll-mbe":[{"scroll-mbe":N()}],"scroll-mt":[{"scroll-mt":N()}],"scroll-mr":[{"scroll-mr":N()}],"scroll-mb":[{"scroll-mb":N()}],"scroll-ml":[{"scroll-ml":N()}],"scroll-p":[{"scroll-p":N()}],"scroll-px":[{"scroll-px":N()}],"scroll-py":[{"scroll-py":N()}],"scroll-ps":[{"scroll-ps":N()}],"scroll-pe":[{"scroll-pe":N()}],"scroll-pbs":[{"scroll-pbs":N()}],"scroll-pbe":[{"scroll-pbe":N()}],"scroll-pt":[{"scroll-pt":N()}],"scroll-pr":[{"scroll-pr":N()}],"scroll-pb":[{"scroll-pb":N()}],"scroll-pl":[{"scroll-pl":N()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",aI,aM]}],fill:[{fill:["none",...j()]}],"stroke-w":[{stroke:[ay,aW,aR,aF]}],stroke:[{stroke:["none",...j()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}}),a3=(...e)=>a4(function(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=function e(t){var r,n,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t)if(Array.isArray(t)){var a=t.length;for(r=0;r<a;r++)t[r]&&(n=e(t[r]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}(e))&&(n&&(n+=" "),n+=t);return n}(e));"u">typeof navigator&&navigator.userAgent.includes("Firefox");var a7=(e,t)=>{let r=0;return n=>{let i=Date.now();if(i-r>=t)return r=i,e(n)}},a6=e=>{if(!iY)return null;try{let t=localStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}},a8=(e,t)=>{if(iY)try{window.localStorage.setItem(e,JSON.stringify(t))}catch{}},a9=e=>{if(iY)try{window.localStorage.removeItem(e)}catch{}},oe=e=>{if(!e)return{name:"Unknown",wrappers:[],wrapperTypes:[]};let{tag:t,type:r,elementType:n}=e,i=z(r),a=[],o=[];if(T(e)||15===t||14===t||(null==r?void 0:r.$$typeof)===Symbol.for("react.memo")||(null==n?void 0:n.$$typeof)===Symbol.for("react.memo")){let t=T(e);o.push({type:"memo",title:t?"This component has been auto-memoized by the React Compiler.":"Memoized component that skips re-renders if props are the same",compiler:t})}if(24===t&&o.push({type:"lazy",title:"Lazily loaded component that supports code splitting"}),13===t&&o.push({type:"suspense",title:"Component that can suspend while content is loading"}),12===t&&o.push({type:"profiler",title:"Component that measures rendering performance"}),"string"==typeof i){let e=/^(\w+)\((.*)\)$/,t=i;for(;e.test(t);){let r=t.match(e);if((null==r?void 0:r[1])&&(null==r?void 0:r[2]))a.unshift(r[1]),t=r[2];else break}i=t}return{name:i||"Unknown",wrappers:a,wrapperTypes:o}},ot=e=>"number"==typeof e&&Number.isFinite(e)&&e>=0,or=e=>!!e&&"object"==typeof e&&!Array.isArray(e),on=()=>{let e=c2.options.value.safeArea;if(ot(e))return{top:e,right:e,bottom:e,left:e};if(or(e)){let t=e.top,r=e.right,n=e.bottom,i=e.left;return{top:ot(t)?t:24,right:ot(r)?r:24,bottom:ot(n)?n:24,left:ot(i)?i:24}}return{top:24,right:24,bottom:24,left:24}},oi=tf(!1),oa=tf(null),oo=()=>({corner:"bottom-right",dimensions:{isFullWidth:!1,isFullHeight:!1,width:550,height:350,position:{x:24,y:24}},lastDimensions:{isFullWidth:!1,isFullHeight:!1,width:550,height:350,position:{x:24,y:24}},componentsTree:{width:240}});oo();var ol=tf((n=oo(),(i=a6(i2))?{corner:null!=(W=i.corner)?W:n.corner,dimensions:null!=(U=i.dimensions)?U:n.dimensions,lastDimensions:null!=(B=null!=(H=i.lastDimensions)?H:i.dimensions)?B:n.lastDimensions,componentsTree:null!=(V=i.componentsTree)?V:n.componentsTree}:(a8(i2,{corner:n.corner,dimensions:n.dimensions,lastDimensions:n.lastDimensions,componentsTree:n.componentsTree}),n))),os=()=>{if(!iY)return;let{dimensions:e}=ol.value,{width:t,height:r,position:n}=e,i=on();ol.value={...ol.value,dimensions:{isFullWidth:t>=window.innerWidth-i.left-i.right,isFullHeight:r>=window.innerHeight-i.top-i.bottom,width:t,height:r,position:n}}},oc=tf({view:"none"}),od=a6(i5),ou=tf(null!=od?od:null);function op(){return!1}function oh(e){function t(t){return this.shouldComponentUpdate=op,ew(e,t)}return t.displayName=`Memo(${e.displayName||e.name})`,t.prototype.isReactComponent=!0,t._forwarded=!0,t}var om=new WeakMap,of={activeFlashes:new Map,create(e){let t,r,n,i=e.querySelector(".react-scan-flash-overlay"),a=i instanceof HTMLElement?i:((t=document.createElement("div")).className="react-scan-flash-overlay",e.appendChild(t),r=(()=>{e.querySelector(".react-scan-flash-overlay")&&this.create(e)}).bind(null,e),document.addEventListener("scroll",r,{passive:!0,capture:!0}),n=()=>{document.removeEventListener("scroll",r,{capture:!0})},this.activeFlashes.set(e,{element:e,overlay:t,scrollCleanup:n}),t),o=om.get(a);o&&(clearTimeout(o),om.delete(a)),requestAnimationFrame(()=>{a.style.transition="none",a.style.opacity="0.9";let t=setTimeout(()=>{a.style.transition="opacity 150ms ease-out",a.style.opacity="0";let t=setTimeout(()=>{a.parentNode&&a.parentNode.removeChild(a);let t=this.activeFlashes.get(e);(null==t?void 0:t.scrollCleanup)&&t.scrollCleanup(),this.activeFlashes.delete(e),om.delete(a)},150);om.set(a,t)},300);om.set(a,t)})},cleanup(e){let t=this.activeFlashes.get(e);if(t){let r=om.get(t.overlay);r&&(clearTimeout(r),om.delete(t.overlay)),t.overlay.parentNode&&t.overlay.parentNode.removeChild(t.overlay),t.scrollCleanup&&t.scrollCleanup(),this.activeFlashes.delete(e)}},cleanupAll(){for(let[,e]of this.activeFlashes)this.cleanup(e.element)}},og={updates:[],currentFiber:null,totalUpdates:0,windowOffset:0,currentIndex:0,isViewingHistory:!1,latestFiber:null,isVisible:!1,playbackSpeed:1},ov=tf(og),ow=tf(0),ob=[],ox=null,oy=tf({query:"",matches:[],currentMatchIndex:-1}),ok=tf(!1),o_=(e,t=0,r=null)=>e.reduce((e,n,i)=>{var a,o;let l=n.element?(e=>{var t;let r=[],n=e;for(;n;){let e=n.elementType,i="function"==typeof e?e.displayName||e.name:"string"==typeof e?e:"Unknown",a=void 0!==n.index?`[${n.index}]`:"";r.unshift(`${i}${a}`),n=null!=(t=n.return)?t:null}return r.join("::")})(n.fiber):`${r}-${i}`,s=(null==(a=n.fiber)?void 0:a.type)?lP(n.fiber):void 0,c={...n,depth:t,nodeId:l,parentId:r,fiber:n.fiber,renderData:s};return e.push(c),(null==(o=n.children)?void 0:o.length)&&e.push(...o_(n.children,t+1,l)),e},[]),oN=["memo","forwardRef","lazy","suspense"],oS=e=>{let t=e.match(/\[(.*?)\]/);if(!t)return null;let r=[];for(let e of t[1].split(",")){let t=e.trim().toLowerCase();t&&r.push(t)}return r},oE=(e,t)=>{if(0===e.length)return!0;if(!t.length)return!1;for(let r of e){let e=!1;for(let n of t)if(n.type.toLowerCase().includes(r)){e=!0;break}if(!e)return!1}return!0},oT=e=>e>0?e<.1-Number.EPSILON?"< 0.1":e<1e3?Number(e.toFixed(1)).toString():`${(e/1e3).toFixed(1)}k`:"0",oC=({node:e,nodeIndex:t,hasChildren:r,isCollapsed:n,handleTreeNodeClick:i,handleTreeNodeToggle:a,searchValue:o})=>{var l,s,c;let d=e0(null),u=e0(null!=(s=null==(l=e.renderData)?void 0:l.renderCount)?s:0),{highlightedText:p,typeHighlight:h}=e1(()=>{let{query:t,matches:r}=o,n=r.some(t=>t.nodeId===e.nodeId),i=oS(t)||[],a=t?t.replace(/\[.*?\]/,"").trim():"";if(!t||!n)return{highlightedText:ra("span",{className:"truncate",children:e.label}),typeHighlight:!1};let l=!0;if(i.length>0)if(e.fiber){let{wrapperTypes:t}=oe(e.fiber);l=oE(i,t)}else l=!1;let s=ra("span",{className:"truncate",children:e.label});if(a)try{if(a.startsWith("/")&&a.endsWith("/")){let t=a.slice(1,-1),r=RegExp(`(${t})`,"i"),n=e.label.split(r);s=ra("span",{className:"tree-node-search-highlight",children:n.map((t,i)=>r.test(t)?ra("span",{className:a3("regex",{start:r.test(t)&&0===i,middle:r.test(t)&&i%2==1,end:r.test(t)&&i===n.length-1,"!ml-0":1===i}),children:t},`${e.nodeId}-${t}`):t)})}else{let t=e.label.toLowerCase(),r=a.toLowerCase(),n=t.indexOf(r);n>=0&&(s=ra("span",{className:"tree-node-search-highlight",children:[e.label.slice(0,n),ra("span",{className:"single",children:e.label.slice(n,n+a.length)}),e.label.slice(n+a.length)]}))}}catch{}return{highlightedText:s,typeHighlight:l&&i.length>0}},[e.label,e.nodeId,e.fiber,o]);eZ(()=>{var t;let r=null==(t=e.renderData)?void 0:t.renderCount,n=d.current;n&&u.current&&r&&u.current!==r&&(n.classList.remove("count-flash"),n.offsetWidth,n.classList.add("count-flash"),u.current=r)},[null==(c=e.renderData)?void 0:c.renderCount]);let m=e1(()=>{if(!e.renderData)return null;let{selfTime:t,totalTime:r,renderCount:n}=e.renderData;return n?ra("span",{className:a3("flex items-center gap-x-0.5 ml-1.5","text-[10px] text-neutral-400"),children:ra("span",{ref:d,title:`Self time: ${oT(t)}ms
Total time: ${oT(r)}ms`,className:"count-badge",children:["×",n]})}):null},[e.renderData]),f=e1(()=>{if(!e.fiber)return null;let{wrapperTypes:t}=oe(e.fiber),r=t[0];return ra("span",{className:a3("flex items-center gap-x-1","text-[10px] text-neutral-400 tracking-wide","overflow-hidden"),children:[r&&ra(ex,{children:[ra("span",{title:null==r?void 0:r.title,className:a3("rounded py-[1px] px-1","bg-neutral-700 text-neutral-300","truncate","memo"===r.type&&"bg-[#8e61e3] text-white",h&&"bg-yellow-300 text-black"),children:r.type},r.type),r.compiler&&ra("span",{className:"text-yellow-300 ml-1",children:"✨"})]}),t.length>1&&`\xd7${t.length}`,m]})},[e.fiber,h,m]);return ra("button",{type:"button",title:e.title,"data-index":t,className:a3("flex items-center gap-x-1","pl-1 pr-2","w-full h-7","text-left","rounded","cursor-pointer select-none"),onClick:i,children:[ra("button",{type:"button","data-index":t,onClick:a,className:a3("w-6 h-6 flex items-center justify-center","text-left"),children:r&&ra(i1,{name:"icon-chevron-right",size:12,className:a3("transition-transform",!n&&"rotate-90")})}),p,f]})},oz=()=>{let e=e0(null),t=e0(null),r=e0(null),n=e0(null),i=e0(null),a=e0(0),o=e0(!1),l=e0(!1),s=e0(null),[c,d]=eK([]),[u,p]=eK(new Set),[h,m]=eK(void 0),[f,g]=eK(oy.value),v=e1(()=>{let e=[],t=new Map(c.map(e=>[e.nodeId,e]));for(let r of c){let n=!0,i=r;for(;i.parentId;){let e=t.get(i.parentId);if(!e)break;if(u.has(e.nodeId)){n=!1;break}i=e}n&&e.push(r)}return e},[u,c]),{virtualItems:w,totalSize:b}=(e=>{let{count:t,getScrollElement:r,estimateSize:n,overscan:i=5}=e,[a,o]=eK(0),[l,s]=eK(0),c=e0(),d=e0(null),u=e0(null),p=n(),h=e2(e=>{var t,r;d.current&&s(null!=(r=null==(t=null==e?void 0:e[0])?void 0:t.contentRect.height)?r:d.current.getBoundingClientRect().height)},[]),m=e2(()=>{null!==u.current&&cancelAnimationFrame(u.current),u.current=requestAnimationFrame(()=>{h(),u.current=null})},[h]);eZ(()=>{let e=r();if(!e)return;d.current=e;let t=()=>{d.current&&o(d.current.scrollTop)};h(),c.current||(c.current=new ResizeObserver(()=>{m()})),c.current.observe(e),e.addEventListener("scroll",t,{passive:!0});let n=new MutationObserver(m);return n.observe(e,{attributes:!0,childList:!0,subtree:!0}),()=>{e.removeEventListener("scroll",t),c.current&&c.current.disconnect(),n.disconnect(),null!==u.current&&cancelAnimationFrame(u.current)}},[r,h,m]);let f=e1(()=>{let e=Math.floor(a/p);return{start:Math.max(0,e-i),end:Math.min(t,e+Math.ceil(l/p)+i)}},[a,p,l,t,i]);return{virtualItems:e1(()=>{let e=[];for(let t=f.start;t<f.end;t++)e.push({key:t,index:t,start:t*p});return e},[f,p]),totalSize:t*p,scrollTop:a,containerHeight:l}})({count:v.length,getScrollElement:()=>e.current,estimateSize:()=>28,overscan:5}),x=e2(t=>{var r;o.current=!0,null==(r=n.current)||r.blur(),ok.value=!0;let{parentCompositeFiber:i}=o4(t);if(!i)return;c1.inspectState.value={kind:"focused",focusedDomElement:t,fiber:i};let a=v.findIndex(e=>e.element===t);if(-1!==a){m(a);let t=28*a,r=e.current;if(r){let e=r.clientHeight,n=r.scrollTop;(t<n||t+28>n+e)&&r.scrollTo({top:Math.max(0,t-e/2),behavior:"instant"})}}},[v]),y=e2(e=>{let t=Number(e.currentTarget.dataset.index);if(Number.isNaN(t))return;let r=v[t].element;r&&x(r)},[v,x]),k=e2(e=>{p(t=>{let r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r})},[]),_=e2(e=>{e.stopPropagation();let t=Number(e.target.dataset.index);Number.isNaN(t)||k(v[t].nodeId)},[v,k]),N=e2(t=>{var n,i,a,o,l;null==(n=r.current)||n.classList.remove("!border-red-500");let s=[];if(!t){oy.value={query:t,matches:s,currentMatchIndex:-1};return}if(t.includes("[")&&!t.includes("]")&&t.length>t.indexOf("[")+1){null==(i=r.current)||i.classList.add("!border-red-500");return}let d=oS(t)||[];if(t.includes("[")&&!(e=>{if(0===e.length)return!1;for(let t of e){let e=!1;for(let r of oN)if(r.toLowerCase().includes(t)){e=!0;break}if(!e)return!1}return!0})(d)){null==(a=r.current)||a.classList.add("!border-red-500");return}let u=t.replace(/\[.*?\]/,"").trim(),p=/^\/.*\/$/.test(u),h=e=>!1;if(u.startsWith("/")&&!p&&u.length>1){null==(o=r.current)||o.classList.add("!border-red-500");return}if(p)try{let e=u.slice(1,-1),t=RegExp(e,"i");h=e=>t.test(e)}catch{null==(l=r.current)||l.classList.add("!border-red-500");return}else if(u){let e=u.toLowerCase();h=t=>t.toLowerCase().includes(e)}for(let e of c){let t=!0;if(u&&(t=h(e.label)),t&&d.length>0)if(e.fiber){let{wrapperTypes:r}=oe(e.fiber);t=oE(d,r)}else t=!1;t&&s.push(e)}if(oy.value={query:t,matches:s,currentMatchIndex:s.length>0?0:-1},s.length>0){let t=s[0],r=v.findIndex(e=>e.nodeId===t.nodeId);if(-1!==r){let t=e.current;if(t){let e=t.clientHeight;t.scrollTo({top:Math.max(0,28*r-e/2),behavior:"instant"})}}}},[c,v]),S=e2(e=>{let t=e.currentTarget;t&&N(t.value)},[N]),E=e2(t=>{let{matches:r,currentMatchIndex:n}=oy.value;if(0===r.length)return;let i="next"===t?(n+1)%r.length:(n-1+r.length)%r.length;oy.value={...oy.value,currentMatchIndex:i};let a=r[i],o=v.findIndex(e=>e.nodeId===a.nodeId);if(-1!==o){m(o);let t=28*o,r=e.current;if(r){let e=r.clientHeight;r.scrollTo({top:Math.max(0,t-e/2),behavior:"instant"})}}},[v]),T=e2(r=>{if(t.current&&(t.current.style.width=`${r}px`),e.current){e.current.style.width=`${r}px`;let t=((e,t)=>{if(t<=0)return 24;let r=Math.max(0,e-240);return r<24?0:Math.max(0,Math.min(24,Math.min(.3*r,24*t)/t))})(r,a.current);e.current.style.setProperty("--indentation-size",`${t}px`)}},[]),C=e2(e=>{if(!s.current)return;let t=Math.floor(ol.value.dimensions.width-120);s.current.classList.remove("cursor-ew-resize","cursor-w-resize","cursor-e-resize"),e<=240?s.current.classList.add("cursor-w-resize"):e>=t?s.current.classList.add("cursor-e-resize"):s.current.classList.add("cursor-ew-resize")},[]),z=e2(t=>{if(t.preventDefault(),t.stopPropagation(),!e.current)return;e.current.style.setProperty("pointer-events","none"),l.current=!0;let r=t.clientX,n=e.current.offsetWidth,i=Math.floor(ol.value.dimensions.width-120);C(n);let a=e=>{let t=n+(r-e.clientX);C(t),T(Math.min(i,Math.max(240,t)))},o=()=>{e.current&&(e.current.style.removeProperty("pointer-events"),document.removeEventListener("pointermove",a),document.removeEventListener("pointerup",o),ol.value={...ol.value,componentsTree:{...ol.value.componentsTree,width:e.current.offsetWidth}},a8(i2,ol.value),l.current=!1)};document.addEventListener("pointermove",a),document.addEventListener("pointerup",o)},[T,C]);eZ(()=>{if(e.current)return C(e.current.offsetWidth),ol.subscribe(()=>{e.current&&C(e.current.offsetWidth)})},[C]);let A=e2(()=>{o.current=!1},[]);return eZ(()=>{let t=!0,r=()=>{let r=i.current;if(!r)return;let n=(e=>{let t=new Map,r=[];for(let{element:r,name:n,fiber:i}of e){if(!r)continue;let e=n,{name:a,wrappers:o}=oe(i);a&&(e=o.length>0?`${o.join("(")}(${a})${")".repeat(o.length)}`:a),t.set(r,{label:a||n,title:e,children:[],element:r,fiber:i})}for(let{element:n,depth:i}of e){if(!n)continue;let e=t.get(n);if(e)if(0===i)r.push(e);else{let r=n.parentElement;for(;r;){let n=t.get(r);if(n){n.children=n.children||[],n.children.push(e);break}r=r.parentElement}}}return r})(o9());if(n.length>0){let i=o_(n);if(a.current=i.reduce((e,t)=>Math.max(e,t.depth),0),T(ol.value.componentsTree.width),d(i),t){t=!1;let n=i.findIndex(e=>e.element===r);if(-1!==n){let t=28*n,r=e.current;r&&setTimeout(()=>{r.scrollTo({top:t,behavior:"instant"})},96)}}}},n=c1.inspectState.subscribe(e=>{"focused"===e.kind&&(ok.value||(N(""),i.current=e.focusedDomElement,r()))}),o=0,s=ow.subscribe(()=>{"focused"===c1.inspectState.value.kind&&(cancelAnimationFrame(o),l.current||(o=requestAnimationFrame(()=>{ok.value=!1,r()})))});return()=>{n(),s(),oy.value={query:"",matches:[],currentMatchIndex:-1}}},[]),eZ(()=>{let e=e=>{if(o.current&&h)switch(e.key){case"ArrowUp":if(e.preventDefault(),e.stopPropagation(),h>0){let e=v[h-1];(null==e?void 0:e.element)&&x(e.element)}return;case"ArrowDown":if(e.preventDefault(),e.stopPropagation(),h<v.length-1){let e=v[h+1];(null==e?void 0:e.element)&&x(e.element)}return;case"ArrowLeft":case"ArrowRight":{e.preventDefault(),e.stopPropagation();let t=v[h];(null==t?void 0:t.nodeId)&&k(t.nodeId);return}}};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[h,v,x,k]),eZ(()=>oy.subscribe(g),[]),eZ(()=>ol.subscribe(e=>{var r;null==(r=t.current)||r.style.setProperty("transition","width 0.1s"),T(e.componentsTree.width),setTimeout(()=>{var e;null==(e=t.current)||e.style.removeProperty("transition")},500)}),[]),ra("div",{className:"react-scan-components-tree flex",children:[ra("div",{ref:s,onPointerDown:z,className:"relative resize-v-line",children:ra("span",{children:ra(i1,{name:"icon-ellipsis",size:18})})}),ra("div",{ref:t,className:"flex flex-col h-full",children:[ra("div",{className:"p-2 border-b border-[#1e1e1e]",children:ra("div",{ref:r,title:`Search components by:

\u2022 Name (e.g., "Button") \u2014 Case insensitive, matches any part

\u2022 Regular Expression (e.g., "/^Button/") \u2014 Use forward slashes

\u2022 Wrapper Type (e.g., "[memo,forwardRef]"):
   - Available types: memo, forwardRef, lazy, suspense
   - Matches any part of type name (e.g., "mo" matches "memo")
   - Use commas for multiple types

\u2022 Combined Search:
   - Mix name/regex with type: "button [for]"
   - Will match components satisfying both conditions

\u2022 Navigation:
   - Enter \u2192 Next match
   - Shift + Enter \u2192 Previous match
   - Cmd/Ctrl + Enter \u2192 Select and focus match
`,className:a3("relative","flex items-center gap-x-1 px-2","rounded","border border-transparent","focus-within:border-[#454545]","bg-[#1e1e1e] text-neutral-300","transition-colors","whitespace-nowrap","overflow-hidden"),children:[ra(i1,{name:"icon-search",size:12,className:" text-neutral-500"}),ra("div",{className:"relative flex-1 h-7 overflow-hidden",children:ra("input",{ref:n,type:"text",value:oy.value.query,onClick:e=>{e.stopPropagation(),e.currentTarget.focus()},onPointerDown:e=>{e.stopPropagation()},onKeyDown:e=>{"Escape"===e.key&&e.currentTarget.blur(),oy.value.matches.length&&("Enter"===e.key&&e.shiftKey?E("prev"):"Enter"===e.key&&(e.metaKey||e.ctrlKey?(e.preventDefault(),e.stopPropagation(),x(oy.value.matches[oy.value.currentMatchIndex].element),e.currentTarget.focus()):E("next")))},onChange:S,className:"absolute inset-y-0 inset-x-1",placeholder:"Component name, /regex/, or [type]"})}),oy.value.query?ra(ex,{children:[ra("span",{className:"flex items-center gap-x-0.5 text-xs text-neutral-500",children:[oy.value.currentMatchIndex+1,"|",oy.value.matches.length]}),!!oy.value.matches.length&&ra(ex,{children:[ra("button",{type:"button",onClick:e=>{e.stopPropagation(),E("prev")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:ra(i1,{name:"icon-chevron-right",className:"-rotate-90",size:12})}),ra("button",{type:"button",onClick:e=>{e.stopPropagation(),E("next")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:ra(i1,{name:"icon-chevron-right",className:"rotate-90",size:12})})]}),ra("button",{type:"button",onClick:e=>{e.stopPropagation(),N("")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:ra(i1,{name:"icon-close",size:12})})]}):!!c.length&&ra("span",{className:"text-xs text-neutral-500",children:c.length})]})}),ra("div",{className:"flex-1 overflow-hidden",children:ra("div",{ref:e,onPointerLeave:A,className:"tree h-full overflow-auto will-change-transform",children:ra("div",{className:"relative w-full",style:{height:b},children:w.map(e=>{var t;let r=v[e.index];if(!r)return null;let n="focused"===c1.inspectState.value.kind&&r.element===c1.inspectState.value.focusedDomElement,i=e.index===h;return ra("div",{className:a3("absolute left-0 w-full overflow-hidden","text-neutral-400 hover:text-neutral-300","bg-transparent hover:bg-[#5f3f9a]/20",(n||i)&&"text-neutral-300 bg-[#5f3f9a]/40 hover:bg-[#5f3f9a]/40"),style:{top:e.start,height:28},children:ra("div",{className:"w-full h-full",style:{paddingLeft:`calc(${r.depth} * var(--indentation-size))`},children:ra(oC,{node:r,nodeIndex:e.index,hasChildren:!!(null==(t=r.children)?void 0:t.length),isCollapsed:u.has(r.nodeId),handleTreeNodeClick:y,handleTreeNodeToggle:_,searchValue:f})})},r.nodeId)})})})})]})]})},oA=tq(({text:e,children:t,onCopy:r,className:n,iconSize:i=14})=>{let[a,o]=eK(!1);eZ(()=>{if(a){let e=setTimeout(()=>o(!1),600);return()=>{clearTimeout(e)}}},[a]);let l=e2(t=>{t.preventDefault(),t.stopPropagation(),navigator.clipboard.writeText(e).then(()=>{o(!0),null==r||r(!0,e)},()=>{null==r||r(!1,e)})},[e,r]),s=ra("button",{onClick:l,type:"button",className:a3("z-10","flex items-center justify-center","hover:text-dev-pink-400","transition-colors duration-200 ease-in-out","cursor-pointer",`size-[${i}px]`,n),children:ra(i1,{name:`icon-${a?"check":"copy"}`,size:[i],className:a3(a&&"text-green-500")})});return t?t({ClipboardIcon:s,onClick:l}):s}),o$=({length:e,expanded:t,onToggle:r,isNegative:n})=>ra("div",{className:"flex items-center gap-1",children:[ra("button",{type:"button",onClick:r,className:"flex items-center p-0 opacity-50",children:ra(i1,{name:"icon-chevron-right",size:12,className:a3("transition-[color,transform]",n?"text-[#f87171]":"text-[#4ade80]",t&&"rotate-90")})}),ra("span",{children:["Array(",e,")"]})]}),oM=({value:e,path:t,isNegative:r})=>{let[n,i]=eK(!1);if(null===e||"object"!=typeof e||e instanceof Date)return ra("div",{className:"flex items-center gap-1",children:[ra("span",{className:"text-gray-500",children:[t,":"]}),ra("span",{className:"truncate",children:li(e)})]});let a=Object.entries(e);return ra("div",{className:"flex flex-col",children:[ra("div",{className:"flex items-center gap-1",children:[ra("button",{type:"button",onClick:()=>i(!n),className:"flex items-center p-0 opacity-50",children:ra(i1,{name:"icon-chevron-right",size:12,className:a3("transition-[color,transform]",r?"text-[#f87171]":"text-[#4ade80]",n&&"rotate-90")})}),ra("span",{className:"text-gray-500",children:[t,":"]}),!n&&ra("span",{className:"truncate",children:e instanceof Date?li(e):`{${Object.keys(e).join(", ")}}`})]}),n&&ra("div",{className:"pl-5 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:a.map(([e,t])=>ra(oM,{value:t,path:e,isNegative:r},e))})]})},oR=({value:e,expanded:t,onToggle:r,isNegative:n})=>{let{value:i,error:a}=la(e);return a?ra("span",{className:"text-gray-500 font-italic",children:a}):null===i||"object"!=typeof i||i instanceof Promise?ra("span",{children:li(i)}):Array.isArray(i)?ra("div",{className:"flex flex-col gap-1 relative",children:[ra(o$,{length:i.length,expanded:t,onToggle:r,isNegative:n}),t&&ra("div",{className:"pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:i.map((e,t)=>ra(oM,{value:e,path:t.toString(),isNegative:n},t.toString()))}),ra(oA,{text:le(i),className:"absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end",children:({ClipboardIcon:e})=>ra(ex,{children:e})})]}):ra("div",{className:"flex items-start gap-1 relative",children:[ra("button",{type:"button",onClick:r,className:a3("flex items-center","p-0 mt-0.5 mr-1","opacity-50"),children:ra(i1,{name:"icon-chevron-right",size:12,className:a3("transition-[color,transform]",n?"text-[#f87171]":"text-[#4ade80]",t&&"rotate-90")})}),ra("div",{className:"flex-1",children:t?ra("div",{className:"pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:Object.entries(i).map(([e,t])=>ra(oM,{value:t,path:e,isNegative:n},e))}):ra("span",{children:li(i)})}),ra(oA,{text:le(i),className:"absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end",children:({ClipboardIcon:e})=>ra(ex,{children:e})})]})};tf({fiber:null,fiberProps:{current:[],changes:new Set},fiberState:{current:[],changes:new Set},fiberContext:{current:[],changes:new Set}});var oF=e=>{switch(e.kind){case"initialized":return e.changes.currentValue;case"partially-initialized":return e.value}},oO=(e,t)=>{for(let r of e){let e=t.get(r.name);if(e){t.set(e.name,{count:e.count+1,currentValue:r.value,id:e.name,lastUpdated:Date.now(),name:e.name,previousValue:r.prevValue});continue}t.set(r.name,{count:1,currentValue:r.value,id:r.name,lastUpdated:Date.now(),name:r.name,previousValue:r.prevValue})}},oj=(e,t)=>{let r=new Map;return e.forEach((e,t)=>{r.set(t,e)}),t.forEach((e,t)=>{let n=r.get(t);n?r.set(t,{count:n.count+e.count,currentValue:e.currentValue,id:e.id,lastUpdated:e.lastUpdated,name:e.name,previousValue:e.previousValue}):r.set(t,e)}),r},oD=e=>Array.from(e.propsChanges.values()).reduce((e,t)=>e+t.count,0)+Array.from(e.stateChanges.values()).reduce((e,t)=>e+t.count,0)+Array.from(e.contextChanges.values()).filter(e=>"initialized"===e.kind).reduce((e,t)=>e+t.changes.count,0),oL=tq(()=>{let[e,t]=eK(!0),r=(e=>{let t=e0({queue:[]}),[r,n]=eK({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),i="focused"===c1.inspectState.value.kind?c1.inspectState.value.fiber:null,a=i?F(i):null;return eZ(()=>{let r=setInterval(()=>{0!==t.current.queue.length&&(n(r=>{var n,i;let a,o,l=(i=t.current.queue,a={contextChanges:new Map,propsChanges:new Map,stateChanges:new Map},i.forEach(e=>{for(let t of e.contextChanges){let e=a.contextChanges.get(t.contextType);if(e){if(iZ(oF(e),t.value))continue;if("partially-initialized"===e.kind){a.contextChanges.set(t.contextType,{kind:"initialized",changes:{count:1,currentValue:t.value,id:t.contextType.toString(),lastUpdated:Date.now(),name:t.name,previousValue:e.value}});continue}a.contextChanges.set(t.contextType,{kind:"initialized",changes:{count:e.changes.count+1,currentValue:t.value,id:t.contextType.toString(),lastUpdated:Date.now(),name:t.name,previousValue:e.changes.currentValue}});continue}a.contextChanges.set(t.contextType,{kind:"partially-initialized",id:t.contextType.toString(),lastUpdated:Date.now(),name:t.name,value:t.value})}oO(e.stateChanges,a.stateChanges),oO(e.propsChanges,a.propsChanges)}),a),s=(o=new Map,r.contextChanges.forEach((e,t)=>{o.set(t,e)}),l.contextChanges.forEach((e,t)=>{let r=o.get(t);if(!r)return void o.set(t,e);if(oF(e)!==oF(r))switch(r.kind){case"initialized":switch(e.kind){case"initialized":return void o.set(t,{kind:"initialized",changes:{...e.changes,count:e.changes.count+r.changes.count+1,currentValue:e.changes.currentValue,previousValue:e.changes.previousValue}});case"partially-initialized":return void o.set(t,{kind:"initialized",changes:{count:r.changes.count+1,currentValue:e.value,id:e.id,lastUpdated:e.lastUpdated,name:e.name,previousValue:r.changes.currentValue}})}case"partially-initialized":switch(e.kind){case"initialized":return void o.set(t,{kind:"initialized",changes:{count:e.changes.count+1,currentValue:e.changes.currentValue,id:e.changes.id,lastUpdated:e.changes.lastUpdated,name:e.changes.name,previousValue:r.value}});case"partially-initialized":return void o.set(t,{kind:"initialized",changes:{count:1,currentValue:e.value,id:e.id,lastUpdated:e.lastUpdated,name:e.name,previousValue:r.value}})}}}),{contextChanges:o,propsChanges:oj(r.propsChanges,l.propsChanges),stateChanges:oj(r.stateChanges,l.stateChanges)}),c=oD(r),d=oD(s);return null==(n=null==e?void 0:e.onChangeUpdate)||n.call(e,d-c),s}),t.current.queue=[])},50);return()=>{clearInterval(r)}},[i]),eZ(()=>{if(!a)return;let e=e=>{var r;null==(r=t.current)||r.queue.push(e)},r=c1.changesListeners.get(a);return r||(r=[],c1.changesListeners.set(a,r)),r.push(e),()=>{var r,i;n({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),t.current.queue=[],c1.changesListeners.set(a,null!=(i=null==(r=c1.changesListeners.get(a))?void 0:r.filter(t=>t!==e))?i:[])}},[a]),eZ(()=>()=>{n({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),t.current.queue=[]},[a]),r})(),[n,i]=eK(!1),a=oD(r)>0;eZ(()=>{if(!n&&a){let e=setTimeout(()=>{i(!0),requestAnimationFrame(()=>{t(!0)})},0);return()=>clearTimeout(e)}},[n,a]);let o=new Map(Array.from(r.contextChanges.entries()).filter(([,e])=>"initialized"===e.kind).map(([e,t])=>[e,"partially-initialized"===t.kind?null:t.changes])),l="focused"===c1.inspectState.value.kind?c1.inspectState.value.fiber:null;if(l)return ra(ex,{children:[ra(oI,{}),ra("div",{className:"overflow-hidden h-full flex flex-col gap-y-2",children:[ra("div",{className:"flex flex-col gap-2 px-3 pt-2",children:[ra("span",{className:"text-sm font-medium text-[#888]",children:["Why did"," ",ra("span",{className:"text-[#A855F7]",children:z(l)})," ","render?"]}),!a&&ra("div",{className:"text-sm text-[#737373] bg-[#1E1E1E] rounded-md p-4 flex flex-col gap-4",children:[ra("div",{children:"No changes detected since selecting"}),ra("div",{children:"The props, state, and context changes within your component will be reported here"})]})]}),ra("div",{className:a3("flex flex-col gap-y-2 pl-3 relative overflow-y-auto h-full"),children:[ra(oU,{changes:r.propsChanges,title:"Changed Props",isExpanded:e}),ra(oU,{renderName:e=>{var t;return oP(e,null!=(t=z(C(l)))?t:"Unknown Component")},changes:r.stateChanges,title:"Changed State",isExpanded:e}),ra(oU,{changes:o,title:"Changed Context",isExpanded:e})]})]})]})}),oP=(e,t)=>{if(Number.isNaN(Number(e)))return e;let r=Number.parseInt(e);return ra("span",{className:"truncate",children:[ra("span",{className:"text-white",children:[r,(e=>{let t=e%100;if(t>=11&&t<=13)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}})(r)," hook"," "]}),ra("span",{style:{color:"#666"},children:["called in ",ra("i",{className:"text-[#A855F7] truncate",children:t})]})]})},oI=tq(()=>{let e=e0(null),t=e0(null),r=e0(null),n=e0({isPropsChanged:!1,isStateChanged:!1,isContextChanged:!1});return eZ(()=>{let i=a7(()=>{var n,i,a;let o=[];for(let l of((null==(n=e.current)?void 0:n.dataset.flash)==="true"&&o.push(e.current),(null==(i=t.current)?void 0:i.dataset.flash)==="true"&&o.push(t.current),(null==(a=r.current)?void 0:a.dataset.flash)==="true"&&o.push(r.current),o))l.classList.remove("count-flash-white"),l.offsetWidth,l.classList.add("count-flash-white")},400);return ov.subscribe(a=>{var o,l,s,c,d,u,p,h,m;if(!e.current||!t.current||!r.current)return;let{currentIndex:f,updates:g}=a,v=g[f];v&&0!==f&&(i(),n.current={isPropsChanged:(null!=(s=null==(l=null==(o=v.props)?void 0:o.changes)?void 0:l.size)?s:0)>0,isStateChanged:(null!=(u=null==(d=null==(c=v.state)?void 0:c.changes)?void 0:d.size)?u:0)>0,isContextChanged:(null!=(m=null==(h=null==(p=v.context)?void 0:p.changes)?void 0:h.size)?m:0)>0},"true"!==e.current.dataset.flash&&(e.current.dataset.flash=n.current.isPropsChanged.toString()),"true"!==t.current.dataset.flash&&(t.current.dataset.flash=n.current.isStateChanged.toString()),"true"!==r.current.dataset.flash&&(r.current.dataset.flash=n.current.isContextChanged.toString()))})},[]),ra("button",{type:"button",className:a3("react-section-header","overflow-hidden","max-h-0","transition-[max-height]"),children:ra("div",{className:a3("flex-1 react-scan-expandable"),children:ra("div",{className:"overflow-hidden",children:ra("div",{className:"flex items-center whitespace-nowrap",children:[ra("div",{className:"flex items-center gap-x-2",children:"What changed?"}),ra("div",{className:a3("ml-auto","change-scope","transition-opacity duration-300 delay-150"),children:[ra("div",{ref:e,children:"props"}),ra("div",{ref:t,children:"state"}),ra("div",{ref:r,children:"context"})]})]})})})})}),oW=e=>e,oU=tq(({title:e,changes:t,renderName:r=oW})=>{let[n,i]=eK(new Set),[a,o]=eK(new Set),l=Array.from(t.entries());return 0===t.size?null:ra("div",{children:[ra("div",{className:"text-xs text-[#888] mb-1.5",children:e}),ra("div",{className:"flex flex-col gap-2",children:l.map(([t,l])=>{let s=a.has(String(t)),{value:c,error:d}=la(l.previousValue),{value:u,error:p}=la(l.currentValue),h=lt(c,u);return ra("div",{children:[ra("button",{onClick:()=>{o(e=>{let r=new Set(e);return r.has(String(t))?r.delete(String(t)):r.add(String(t)),r})},className:"flex items-center gap-2 w-full bg-transparent border-none p-0 cursor-pointer text-white text-xs",children:ra("div",{className:"flex items-center gap-1.5 flex-1",children:[ra(i1,{name:"icon-chevron-right",size:12,className:a3("text-[#666] transition-transform duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]",{"rotate-90":s})}),ra("div",{className:"whitespace-pre-wrap break-words text-left font-medium flex items-center gap-x-1.5",children:[r(l.name),ra(oq,{count:l.count,isFunction:"function"==typeof l.currentValue,showWarning:0===h.changes.length,forceFlash:!0})]})]})}),ra("div",{className:a3("react-scan-expandable",{"react-scan-expanded":s}),children:ra("div",{className:"pl-3 text-xs font-mono border-l-1 border-[#333]",children:ra("div",{className:"flex flex-col gap-0.5",children:d||p?ra(oH,{currError:p,prevError:d}):h.changes.length>0?ra(oB,{change:l,diff:h,expandedFns:n,renderName:r,setExpandedFns:i,title:e}):ra(oV,{currValue:u,entryKey:t,expandedFns:n,prevValue:c,setExpandedFns:i})})})})]},t)})})]})}),oH=({prevError:e,currError:t})=>ra(ex,{children:[e&&ra("div",{className:"text-[#f87171] bg-[#2a1515] pr-1.5 py-[3px] rounded italic",children:e}),t&&ra("div",{className:"text-[#4ade80] bg-[#1a2a1a] pr-1.5 py-[3px] rounded italic mt-0.5",children:t})]}),oB=({diff:e,title:t,renderName:r,change:n,expandedFns:i,setExpandedFns:a})=>e.changes.map((o,l)=>{let s,{value:c,error:d}=la(o.prevValue),{value:u,error:p}=la(o.currentValue),h="function"==typeof c||"function"==typeof u;return"Props"===t&&(s=o.path.length>0?`${r(String(n.name))}.${lr(o.path)}`:void 0),"State"===t&&o.path.length>0&&(s=`state.${lr(o.path)}`),s||(s=lr(o.path)),ra("div",{className:a3("flex flex-col gap-y-1",l<e.changes.length-1&&"mb-4"),children:[s&&ra("div",{className:"text-[#666] text-[10px]",children:s}),ra("button",{type:"button",className:a3("group","flex items-start","py-[3px] px-1.5","text-left text-[#f87171] bg-[#2a1515]","rounded","overflow-hidden break-all",h&&"cursor-pointer"),onClick:h?()=>{let e=`${lr(o.path)}-prev`;a(t=>{let r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r})}:void 0,children:[ra("span",{className:"w-3 flex items-center justify-center opacity-50",children:"-"}),ra("span",{className:"flex-1 whitespace-nowrap font-mono",children:d?ra("span",{className:"italic text-[#f87171]",children:d}):h?ra("div",{className:"flex gap-1 items-start flex-col",children:[ra("div",{className:"flex gap-1 items-start w-full",children:[ra("span",{className:"flex-1 max-h-40",children:ln(c,i.has(`${lr(o.path)}-prev`))}),"function"==typeof c&&ra(oA,{text:c.toString(),className:"opacity-0 transition-opacity group-hover:opacity-100",children:({ClipboardIcon:e})=>ra(ex,{children:e})})]}),(null==c?void 0:c.toString())===(null==u?void 0:u.toString())&&ra("div",{className:"text-[10px] text-[#666] italic",children:"Function reference changed"})]}):ra(oR,{value:c,expanded:i.has(`${lr(o.path)}-prev`),onToggle:()=>{let e=`${lr(o.path)}-prev`;a(t=>{let r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r})},isNegative:!0})})]}),ra("button",{type:"button",className:a3("group","flex items-start","py-[3px] px-1.5","text-left text-[#4ade80] bg-[#1a2a1a]","rounded","overflow-hidden break-all",h&&"cursor-pointer"),onClick:h?()=>{let e=`${lr(o.path)}-current`;a(t=>{let r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r})}:void 0,children:[ra("span",{className:"w-3 flex items-center justify-center opacity-50",children:"+"}),ra("span",{className:"flex-1 whitespace-pre-wrap font-mono",children:p?ra("span",{className:"italic text-[#4ade80]",children:p}):h?ra("div",{className:"flex gap-1 items-start flex-col",children:[ra("div",{className:"flex gap-1 items-start w-full",children:[ra("span",{className:"flex-1",children:ln(u,i.has(`${lr(o.path)}-current`))}),"function"==typeof u&&ra(oA,{text:u.toString(),className:"opacity-0 transition-opacity group-hover:opacity-100",children:({ClipboardIcon:e})=>ra(ex,{children:e})})]}),(null==c?void 0:c.toString())===(null==u?void 0:u.toString())&&ra("div",{className:"text-[10px] text-[#666] italic",children:"Function reference changed"})]}):ra(oR,{value:u,expanded:i.has(`${lr(o.path)}-current`),onToggle:()=>{let e=`${lr(o.path)}-current`;a(t=>{let r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r})},isNegative:!1})})]})]},`${s}-${n.name}-${l}`)}),oV=({prevValue:e,currValue:t,entryKey:r,expandedFns:n,setExpandedFns:i})=>ra(ex,{children:[ra("div",{className:"group flex gap-0.5 items-start text-[#f87171] bg-[#2a1515] py-[3px] px-1.5 rounded",children:[ra("span",{className:"w-3 flex items-center justify-center opacity-50",children:"-"}),ra("span",{className:"flex-1 overflow-hidden whitespace-pre-wrap font-mono",children:ra(oR,{value:e,expanded:n.has(`${String(r)}-prev`),onToggle:()=>{let e=`${String(r)}-prev`;i(t=>{let r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r})},isNegative:!0})})]}),ra("div",{className:"group flex gap-0.5 items-start text-[#4ade80] bg-[#1a2a1a] py-[3px] px-1.5 rounded mt-0.5",children:[ra("span",{className:"w-3 flex items-center justify-center opacity-50",children:"+"}),ra("span",{className:"flex-1 overflow-hidden whitespace-pre-wrap font-mono",children:ra(oR,{value:t,expanded:n.has(`${String(r)}-current`),onToggle:()=>{let e=`${String(r)}-current`;i(t=>{let r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r})},isNegative:!1})})]}),"object"==typeof t&&null!==t&&ra("div",{className:"text-[#666] text-[10px] italic mt-1 flex items-center gap-x-1",children:[ra(i1,{name:"icon-triangle-alert",className:"text-yellow-500 mb-px",size:14}),ra("span",{children:"Reference changed but objects are structurally the same"})]})]}),oq=({count:e,forceFlash:t,isFunction:r,showWarning:n})=>{let i=e0(!0),a=e0(null),o=e0(e);return eZ(()=>{let t=a.current;t&&o.current!==e&&(t.classList.remove("count-flash"),t.offsetWidth,t.classList.add("count-flash"),o.current=e)},[e]),eZ(()=>{if(i.current){i.current=!1;return}if(t){let e=setTimeout(()=>{var t;null==(t=a.current)||t.classList.add("count-flash-white"),e=setTimeout(()=>{var e;null==(e=a.current)||e.classList.remove("count-flash-white")},300)},500);return()=>{clearTimeout(e)}}},[t]),ra("div",{ref:a,className:"count-badge",children:[n&&ra(i1,{name:"icon-triangle-alert",className:"text-yellow-500 mb-px",size:14}),r&&ra(i1,{name:"icon-function",className:"text-[#A855F7] mb-px",size:14}),"x",e]})},oG={lastRendered:new Map,expandedPaths:new Set,cleanup:()=>{oG.lastRendered.clear(),oG.expandedPaths.clear(),of.cleanupAll(),lm(),ox&&(clearTimeout(ox),ox=null),ob=[],ov.value=og}},oJ=class extends ey{constructor(){super(...arguments),iJ(this,"state",{hasError:!1,error:null}),iJ(this,"handleReset",()=>{this.setState({hasError:!1,error:null}),oG.cleanup()})}static getDerivedStateFromError(e){return{hasError:!0,error:e}}render(){var e;return this.state.hasError?ra("div",{className:"p-4 bg-red-950/50 h-screen backdrop-blur-sm",children:[ra("div",{className:"flex items-center gap-2 mb-3 text-red-400 font-medium",children:[ra(i1,{name:"icon-flame",className:"text-red-500",size:16}),"Something went wrong in the inspector"]}),ra("div",{className:"p-3 bg-black/40 rounded font-mono text-xs text-red-300 mb-4 break-words",children:(null==(e=this.state.error)?void 0:e.message)||JSON.stringify(this.state.error)}),ra("button",{type:"button",onClick:this.handleReset,className:"px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2",children:"Reset Inspector"})]}):this.props.children}},oY=tx(()=>a3("react-scan-inspector","flex-1","opacity-0","overflow-y-auto overflow-x-hidden","transition-opacity delay-0","pointer-events-none",!oi.value&&"opacity-100 delay-300 pointer-events-auto")),oX=oh(()=>{let e=e0(null),t=t=>{if(!t)return;e.current=t;let{data:r,shouldUpdate:n}=lx(t);if(n){var i={timestamp:Date.now(),fiberInfo:ll(t),props:r.fiberProps,state:r.fiberState,context:r.fiberContext,stateNames:lh(t)},a=t;if(ob.push({update:i,fiber:a}),!ox){let e=()=>{(()=>{let e;if(0===ob.length)return;let t=[...ob],{updates:r,totalUpdates:n,currentIndex:i,isViewingHistory:a}=ov.value,o=[...r],l=n;for(let{update:e}of t)o.length>=1e3&&o.shift(),o.push(e),l++;let s=Math.max(0,l-1e3);e=a?i===n-1?o.length-1:0===i?0:0===s?i:i-1:o.length-1;let c=t[t.length-1];ov.value={...ov.value,latestFiber:c.fiber,updates:o,totalUpdates:l,windowOffset:s,currentIndex:e,isViewingHistory:a},ob=ob.slice(t.length)})(),ox=null,ob.length>0&&(ox=setTimeout(e,96))};ox=setTimeout(e,96)}}};return tW(()=>{let r=c1.inspectState.value;ti(()=>{var n;if("focused"!==r.kind||!r.focusedDomElement){e.current=null,oG.cleanup();return}"focused"===r.kind&&(oi.value=!1);let{parentCompositeFiber:i}=o3(r.focusedDomElement,r.fiber);if(!i){c1.inspectState.value={kind:"inspect-off"},oc.value={view:"none"};return}(null==(n=e.current)?void 0:n.type)!==i.type&&(e.current=i,oG.cleanup(),t(i))})}),tW(()=>{ow.value,ti(()=>{let r=c1.inspectState.value;if("focused"!==r.kind||!r.focusedDomElement){e.current=null,oG.cleanup();return}let{parentCompositeFiber:n}=o3(r.focusedDomElement,r.fiber);if(!n){c1.inspectState.value={kind:"inspect-off"},oc.value={view:"none"};return}t(n),r.focusedDomElement.isConnected||(e.current=null,oG.cleanup(),c1.inspectState.value={kind:"inspecting",hoveredDomElement:null})})}),eZ(()=>()=>{oG.cleanup()},[]),ra(oJ,{children:ra("div",{className:oY,children:ra("div",{className:"w-full h-full",children:ra(oL,{})})})})}),oK=oh(()=>"focused"!==c1.inspectState.value.kind?null:ra(oJ,{children:[ra(oX,{}),ra(oz,{})]})),oZ=e=>{var t,r,n,i;if("__REACT_DEVTOOLS_GLOBAL_HOOK__"in window){let r=window.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!(null==r?void 0:r.renderers))return null;for(let[,n]of Array.from(r.renderers))try{let r=null==(t=n.findFiberByHostInstance)?void 0:t.call(n,e);if(r)return r}catch{}}if("_reactRootContainer"in e){let t=e._reactRootContainer;return null!=(i=null==(n=null==(r=null==t?void 0:t._internalRoot)?void 0:r.current)?void 0:n.child)?i:null}for(let t in e)if(t.startsWith("__reactInternalInstance$")||t.startsWith("__reactFiber"))return e[t];return null},oQ=e=>{let t=e;for(;t;){if(t.stateNode instanceof Element)return t.stateNode;if(!t.child)break;t=t.child}for(;t;){if(t.stateNode instanceof Element)return t.stateNode;if(!t.return)break;t=t.return}return null},o0=e=>{if(!e)return null;try{let t=oZ(e);if(!t)return null;let r=o1(t);return r?r[0]:null}catch{return null}},o1=e=>{let t=e,r=null;for(;t;){if(b(t))return[t,r];w(t)&&!r&&(r=t),t=t.return}return null},o2=(e,t)=>!!_(t,t=>t===e),o5=async e=>{let t=o0(e);if(!t)return null;let r=oQ(t);return r?await new Promise(e=>{let t=new IntersectionObserver(r=>{var n,i;t.disconnect(),e(null!=(i=null==(n=r[0])?void 0:n.boundingClientRect)?i:null)});t.observe(r)}):null},o4=e=>{let t=o0(e);if(!t||!oQ(t))return{};let r=o1(t);if(!r)return{};let[n]=r;return{parentCompositeFiber:n}},o3=(e,t)=>{var r,n,i,a;if(!e.isConnected)return{};let o=null!=t?t:o0(e);if(!o)return{};let l=o,s=null,c=null;for(;l;){if(!l.stateNode){l=l.return;continue}if(null==(r=c2.instrumentation)?void 0:r.fiberRoots.has(l.stateNode)){s=l,c=l.stateNode.current;break}l=l.return}if(!s||!c||!(o=o2(o,c)?o:null!=(n=o.alternate)?n:o)||!oQ(o))return{};let d=null==(i=o1(o))?void 0:i[0];return d?{parentCompositeFiber:o2(d,c)?d:null!=(a=d.alternate)?a:d}:{}},o7=e=>{var t,r,n;let i=null!=(t=e.memoizedProps)?t:{},a=null!=(n=null==(r=e.alternate)?void 0:r.memoizedProps)?n:{},o=[];for(let e in i){if("children"===e)continue;let t=i[e],r=a[e];iZ(t,r)||o.push({name:e,value:t,prevValue:r,type:1})}return o},o6=new Set(["HTML","HEAD","META","TITLE","BASE","SCRIPT","SCRIPT","STYLE","LINK","NOSCRIPT","SOURCE","TRACK","EMBED","OBJECT","PARAM","TEMPLATE","PORTAL","SLOT","AREA","XML","DOCTYPE","COMMENT"]),o8=(e,t=!0)=>{if(e.stateNode&&"nodeType"in e.stateNode){let r=e.stateNode;return t&&r.tagName&&o6.has(r.tagName.toLowerCase())?null:r}let r=e.child;for(;r;){let e=o8(r,t);if(e)return e;r=r.sibling}return null},o9=(e=document.body)=>{let t=[],r=(e,n=0)=>{var i;let a=(e=>{if(!e)return null;let{parentCompositeFiber:t}=o4(e);return t&&o8(t)===e?e:null})(e);if(a){let{parentCompositeFiber:e}=o4(a);if(!e)return;t.push({element:a,depth:n,name:null!=(i=z(e.type))?i:"Unknown",fiber:e})}for(let t of Array.from(e.children))r(t,a?n+1:n)};return r(e),t},le=e=>{try{if(null===e)return"null";if(void 0===e)return"undefined";if(lo(e))return"Promise";if("function"==typeof e){let t=e.toString();try{return t.replace(/\s+/g," ").replace(/{\s+/g,"{\n  ").replace(/;\s+/g,";\n  ").replace(/}\s*$/g,"\n}").replace(/\(\s+/g,"(").replace(/\s+\)/g,")").replace(/,\s+/g,", ")}catch{return t}}switch(!0){case e instanceof Date:return e.toISOString();case e instanceof RegExp:return e.toString();case e instanceof Error:return`${e.name}: ${e.message}`;case e instanceof Map:return JSON.stringify(Array.from(e.entries()),null,2);case e instanceof Set:return JSON.stringify(Array.from(e),null,2);case e instanceof DataView:return JSON.stringify(Array.from(new Uint8Array(e.buffer)),null,2);case e instanceof ArrayBuffer:return JSON.stringify(Array.from(new Uint8Array(e)),null,2);case ArrayBuffer.isView(e)&&"length"in e:return JSON.stringify(Array.from(e),null,2);case Array.isArray(e):case"object"==typeof e:return JSON.stringify(e,null,2);default:return String(e)}}catch{return String(e)}},lt=(e,t,r=[],n=new WeakSet)=>{if(e===t)return{type:"primitive",changes:[],hasDeepChanges:!1};if("function"==typeof e&&"function"==typeof t){let n=((e,t)=>{try{if("function"!=typeof e||"function"!=typeof t)return!1;return e.toString()===t.toString()}catch{return!1}})(e,t);return{type:"primitive",changes:[{path:r,prevValue:e,currentValue:t,sameFunction:n}],hasDeepChanges:!n}}if(null===e||null===t||void 0===e||void 0===t||"object"!=typeof e||"object"!=typeof t)return{type:"primitive",changes:[{path:r,prevValue:e,currentValue:t}],hasDeepChanges:!0};if(n.has(e)||n.has(t))return{type:"object",changes:[{path:r,prevValue:"[Circular]",currentValue:"[Circular]"}],hasDeepChanges:!1};n.add(e),n.add(t);let i=new Set([...Object.keys(e),...Object.keys(t)]),a=[],o=!1;for(let l of i){let i=e[l],s=t[l];if(i!==s)if("object"==typeof i&&"object"==typeof s&&null!==i&&null!==s){let e=lt(i,s,[...r,l],n);a.push(...e.changes),e.hasDeepChanges&&(o=!0)}else a.push({path:[...r,l],prevValue:i,currentValue:s}),o=!0}return{type:"object",changes:a,hasDeepChanges:o}},lr=e=>0===e.length?"":e.reduce((e,t,r)=>/^\d+$/.test(t)?`${e}[${t}]`:0===r?t:`${e}.${t}`,""),ln=(e,t=!1)=>{try{let r=e.toString(),n=r.match(/(?:function\s*)?(?:\(([^)]*)\)|([^=>\s]+))\s*=>?/);if(!n)return"ƒ";let i=(n[1]||n[2]||"").replace(/\s+/g,"");if(!t)return`\u0192 (${i}) => ...`;return function(e){let t=e.replace(/\s+/g," ").trim(),r=[],n="";for(let e=0;e<t.length;e++){let i=t[e];if("="===i&&">"===t[e+1]){n.trim()&&r.push(n.trim()),r.push("=>"),n="",e++;continue}/[(){}[\];,<>:\?!]/.test(i)?(n.trim()&&r.push(n.trim()),r.push(i),n=""):/\s/.test(i)?(n.trim()&&r.push(n.trim()),n=""):n+=i}n.trim()&&r.push(n.trim());let i=[];for(let e=0;e<r.length;e++){let t=r[e],n=r[e+1];"("===t&&")"===n||"["===t&&"]"===n||"{"===t&&"}"===n||"<"===t&&">"===n?(i.push(t+n),e++):i.push(t)}let a=new Set,o=new Set;function l(e,t,r){let n=0;for(let a=r;a<i.length;a++){let r=i[a];if(r===e)n++;else if(r===t&&0==--n)return a}return -1}for(let e=0;e<i.length;e++)if("("===i[e]){let t=l("(",")",e);if(-1!==t&&"=>"===i[t+1])for(let r=e;r<=t;r++)a.add(r)}for(let e=1;e<i.length;e++){let t=i[e-1],r=i[e];if(/^[a-zA-Z0-9_$]+$/.test(t)&&"<"===r){let t=l("<",">",e);if(-1!==t)for(let r=e;r<=t;r++)o.add(r)}}let s=0,c=[],d="";function u(){d.trim()&&c.push(d.replace(/\s+$/,"")),d=""}function p(){u(),d="  ".repeat(s)}let h=[];function m(){return h.length?h[h.length-1]:null}function f(e,t=!1){d.trim()?t||/^[),;:\].}>]$/.test(e)?d+=e:d+=` ${e}`:d+=e}for(let e=0;e<i.length;e++){let t=i[e],r=i[e+1]||"";if(["(","{","[","<"].includes(t))f(t),h.push(t),"{"===t?(s++,p()):("("===t||"["===t||"<"===t)&&(a.has(e)&&"("===t||o.has(e)&&"<"===t||r!==({"(":")","[":"]","<":">"})[t]&&"()"!==r&&"[]"!==r&&"<>"!==r&&(s++,p()));else if([")","}","]",">"].includes(t)){let r=m();")"===t&&"("===r||"]"===t&&"["===r||">"===t&&"<"===r?a.has(e)&&")"===t||o.has(e)&&">"===t||(s=Math.max(s-1,0),p()):"}"===t&&"{"===r&&(s=Math.max(s-1,0),p()),h.pop(),f(t),"}"===t&&p()}else if(/^\(\)|\[\]|\{\}|\<\>$/.test(t))f(t);else if("=>"===t)f(t);else if(";"===t)f(t,!0),p();else if(","===t){f(t,!0);let r=m();!(a.has(e)&&"("===r)&&!(o.has(e)&&"<"===r)&&r&&["{","[","(","<"].includes(r)&&p()}else f(t)}return u(),c.join("\n").replace(/\n\s*\n+/g,"\n").trim()}(r)}catch{return"ƒ"}},li=e=>{if(null===e)return"null";if(void 0===e)return"undefined";if("string"==typeof e)return`"${e.length>150?`${e.slice(0,20)}...`:e}"`;if("number"==typeof e||"boolean"==typeof e)return String(e);if("function"==typeof e)return ln(e);if(Array.isArray(e))return`Array(${e.length})`;if(e instanceof Map)return`Map(${e.size})`;if(e instanceof Set)return`Set(${e.size})`;if(e instanceof Date)return e.toISOString();if(e instanceof RegExp)return e.toString();if(e instanceof Error)return`${e.name}: ${e.message}`;if("object"==typeof e){let t=Object.keys(e);return`{${t.length>2?`${t.slice(0,2).join(", ")}, ...`:t.join(", ")}}`}return String(e)},la=e=>{var t;if(null==e||"function"==typeof e||"object"!=typeof e)return{value:e};if(lo(e))return{value:"Promise"};try{let r=Object.getPrototypeOf(e);if(r===Promise.prototype||(null==(t=null==r?void 0:r.constructor)?void 0:t.name)==="Promise")return{value:"Promise"};return{value:e}}catch{return{value:null,error:"Error accessing value"}}},lo=e=>!!e&&(e instanceof Promise||"object"==typeof e&&"then"in e),ll=e=>{var t,r;let n=E(e);return{displayName:z(e)||"Unknown",type:e.type,key:e.key,id:e.index,selfTime:null!=(t=null==n?void 0:n.selfTime)?t:null,totalTime:null!=(r=null==n?void 0:n.totalTime)?r:null}},ls=new Map,lc=new Map,ld=new Map,lu=null,lp=/\[(?<name>\w+),\s*set\w+\]/g,lh=e=>{var t,r;let n=(null==(r=null==(t=e.type)?void 0:t.toString)?void 0:r.call(t))||"";return n?Array.from(n.matchAll(lp),e=>{var t,r;return null!=(r=null==(t=e.groups)?void 0:t.name)?r:""}):[]},lm=()=>{ls.clear(),lc.clear(),ld.clear(),lu=null},lf=(e,t,r,n)=>{let i=e.get(t),a=e===ls||e===ld,o=!iZ(r,n);if(!i)return e.set(t,{count:o&&a?1:0,currentValue:r,previousValue:n,lastUpdated:Date.now()}),{hasChanged:o,count:o&&a?1:+!a};if(!iZ(i.currentValue,r)){let n=i.count+1;return e.set(t,{count:n,currentValue:r,previousValue:i.currentValue,lastUpdated:Date.now()}),{hasChanged:!0,count:n}}return{hasChanged:!1,count:i.count}},lg=e=>{if(!e)return{};if(0===e.tag||11===e.tag||15===e.tag||14===e.tag){let t=e.memoizedState,r={},n=0;for(;t;)t.queue&&void 0!==t.memoizedState&&(r[n]=t.memoizedState),t=t.next,n++;return r}return 1===e.tag&&e.memoizedState||{}},lv=e=>{var t;let r=e.memoizedProps||{},n=(null==(t=e.alternate)?void 0:t.memoizedProps)||{},i={},a={};for(let e of Object.keys(r))e in r&&(i[e]=r[e],a[e]=n[e]);return{current:i,prev:a,changes:o7(e).map(e=>({name:e.name,value:e.value,prevValue:e.prevValue}))}},lw=e=>{let t=lg(e),r=e.alternate?lg(e.alternate):{},n=[];for(let[i,a]of Object.entries(t)){let t=1===e.tag?i:Number(i);e.alternate&&!iZ(r[i],a)&&n.push({name:t,value:a,prevValue:r[i]})}return{current:t,prev:r,changes:n}},lb=e=>{let t=lk(e),r=e.alternate?lk(e.alternate):new Map,n={},i={},a=[],o=new Set;for(let[e,l]of t){let t=l.displayName;if(o.has(e))continue;o.add(e),n[t]=l.value;let s=r.get(e);s&&(i[t]=s.value,iZ(s.value,l.value)||a.push({name:t,value:l.value,prevValue:s.value,contextType:e}))}return{current:n,prev:i,changes:a}},lx=e=>{let t,r=()=>({current:[],changes:new Set,changesCounts:new Map});if(!e)return{data:{fiberProps:r(),fiberState:r(),fiberContext:r()},shouldUpdate:!1};let n=!1,i=(t=e.type!==lu,lu=e.type,t),a=r();if(e.memoizedProps){let{current:t,changes:r}=lv(e);for(let[e,r]of Object.entries(t))a.current.push({name:e,value:lo(r)?{type:"promise",displayValue:"Promise"}:r});for(let e of r){let{hasChanged:t,count:r}=lf(ls,e.name,e.value,e.prevValue);t&&(n=!0,a.changes.add(e.name),a.changesCounts.set(e.name,r))}}let o=r(),{current:l,changes:s}=lw(e);for(let[t,r]of Object.entries(l)){let n=1===e.tag?t:Number(t);o.current.push({name:n,value:r})}for(let e of s){let{hasChanged:t,count:r}=lf(lc,e.name,e.value,e.prevValue);t&&(n=!0,o.changes.add(e.name),o.changesCounts.set(e.name,r))}let c=r(),{current:d,changes:u}=lb(e);for(let[e,t]of Object.entries(d))c.current.push({name:e,value:t});if(!i)for(let e of u){let{hasChanged:t,count:r}=lf(ld,e.name,e.value,e.prevValue);t&&(n=!0,c.changes.add(e.name),c.changesCounts.set(e.name,r))}return n||i||(a.changes.clear(),o.changes.clear(),c.changes.clear()),{data:{fiberProps:a,fiberState:o,fiberContext:c},shouldUpdate:n||i}},ly=new WeakMap,lk=e=>{var t;if(!e)return new Map;let r=ly.get(e);if(r)return r;let n=new Map,i=e;for(;i;){let e=i.dependencies;if(null==e?void 0:e.firstContext){let r=e.firstContext;for(;r;){let e=r.memoizedValue,i=null==(t=r.context)?void 0:t.displayName;if(n.has(e)||n.set(r.context,{value:e,displayName:null!=i?i:"UnnamedContext",contextType:null}),r===r.next)break;r=r.next}}i=i.return}return ly.set(e,n),n},l_=e=>{let t=()=>({current:[],changes:new Set,changesCounts:new Map});if(!e)return{fiberProps:t(),fiberState:t(),fiberContext:t()};let r=t();if(e.memoizedProps){let{current:t,changes:n}=lv(e);for(let[e,n]of Object.entries(t))r.current.push({name:e,value:lo(n)?{type:"promise",displayValue:"Promise"}:n});for(let e of n)r.changes.add(e.name),r.changesCounts.set(e.name,1)}let n=t();if(e.memoizedState){let{current:t,changes:r}=lw(e);for(let[e,r]of Object.entries(t))n.current.push({name:e,value:lo(r)?{type:"promise",displayValue:"Promise"}:r});for(let e of r)n.changes.add(e.name),n.changesCounts.set(e.name,1)}let i=t(),{current:a,changes:o}=lb(e);for(let[e,t]of Object.entries(a))i.current.push({name:e,value:lo(t)?{type:"promise",displayValue:"Promise"}:t});for(let e of o)i.changes.add(e.name),i.changesCounts.set(e.name,1);return{fiberProps:r,fiberState:n,fiberContext:i}},lN={mount:1,update:2,unmount:4},lS=0,lE=performance.now(),lT=0,lC=!1,lz=()=>{lT++;let e=performance.now();e-lE>=1e3&&(lS=lT,lT=0,lE=e),requestAnimationFrame(lz)},lA=()=>(lC||(lC=!0,lz(),lS=60),lS),l$=0,lM=new WeakMap;function lR(e,t){var r,n;let i;if(!e||!t)return;let a=e.memoizedValue,o={type:4,name:null!=(r=e.context.displayName)?r:"Context.Provider",value:a,contextType:(n=e.context,(i=lM.get(n))||(l$++,lM.set(n,l$),l$))};this.push(o)}var lF=new Map,lO=!1,lj=()=>Array.from(lF.values()),lD=new WeakMap;function lL(e){return String(F(e))}function lP(e){let t=lL(e),r=lD.get(C(e));if(r)return r.get(t)}var lI=(e,t)=>{let r=t-e;return .5>Math.abs(r)?t:e+.2*r},lW="115,97,230";function lU(e,t){return t[0]-e[0]}function lH([e,t]){let r=`${t.slice(0,4).join(", ")} \xd7${e}`;return r.length>40&&(r=`${r.slice(0,40)}\u2026`),r}var lB=e=>{let t=new Map;for(let{name:r,count:n}of e)t.set(r,(t.get(r)||0)+n);let r=new Map;for(let[e,n]of t){let t=r.get(n);t?t.push(e):r.set(n,[e])}let n=[...r.entries()].sort(lU),i=lH(n[0]);for(let e=1,t=n.length;e<t;e++)i+=", "+lH(n[e]);return i.length>40?`${i.slice(0,40)}\u2026`:i},lV=e=>{let t=0;for(let r of e)t+=r.width*r.height;return t},lq=(e,t)=>{for(let{id:r,name:n,count:i,x:a,y:o,width:l,height:s,didCommit:c}of t){let t={id:r,name:n,count:i,x:a,y:o,width:l,height:s,frame:0,targetX:a,targetY:o,targetWidth:l,targetHeight:s,didCommit:c},d=String(t.id),u=e.get(d);u?(u.count++,u.frame=0,u.targetX=a,u.targetY=o,u.targetWidth=l,u.targetHeight=s,u.didCommit=c):e.set(d,t)}},lG=(e,t,r)=>{for(let n of e.values()){let e=n.x-t,i=n.y-r;n.targetX=e,n.targetY=i}},lJ=null,lY=null,lX=null,lK=1,lZ=null,lQ=new Map,l0=new Map,l1=new Set,l2=e=>{let t,r,n,i,a=e[0];if(1===e.length)return a;for(let a=0,o=e.length;a<o;a++){let o=e[a];t=null==t?o.x:Math.min(t,o.x),r=null==r?o.y:Math.min(r,o.y),n=null==n?o.x+o.width:Math.max(n,o.x+o.width),i=null==i?o.y+o.height:Math.max(i,o.y+o.height)}return null==t||null==r||null==n||null==i?e[0]:new DOMRect(t,r,n-t,i-r)};function l5(e,t){let r=[];for(let t of e){let e=t.target;this.seenElements.has(e)||(this.seenElements.add(e),r.push(t))}r.length>0&&this.resolveNext&&(this.resolveNext(r),this.resolveNext=null),this.seenElements.size===this.uniqueElements.size&&(t.disconnect(),this.done=!0,this.resolveNext&&this.resolveNext([]))}var l4=async function*(e){let t={uniqueElements:new Set(e),seenElements:new Set,resolveNext:null,done:!1},r=new IntersectionObserver(l5.bind(t));for(let e of t.uniqueElements)r.observe(e);for(;!t.done;){let e=await new Promise(e=>{t.resolveNext=e});e.length>0&&(yield e)}},l3="u">typeof SharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,l7=async()=>{let e=[];for(let t of l1){let r=l0.get(t);if(r)for(let t=0;t<r.elements.length;t++)r.elements[t]instanceof Element&&e.push(r.elements[t])}let t=new Map;for await(let r of l4(e)){for(let e of r){let r=e.target,n=e.intersectionRect;e.isIntersecting&&n.width&&n.height&&t.set(r,n)}let e=[],n=[],i=[];for(let r of l1){let a=l0.get(r);if(!a)continue;let o=[];for(let e=0;e<a.elements.length;e++){let r=a.elements[e],n=t.get(r);n&&o.push(n)}o.length&&(e.push(a),n.push(l2(o)),i.push(F(r)))}if(e.length>0){let t,r=new l3(7*e.length*4),a=new Float32Array(r),o=Array(e.length);for(let r=0,l=e.length;r<l;r++){let l=e[r],s=i[r],{x:c,y:d,width:u,height:p}=n[r],{count:h,name:m,didCommit:f}=l;if(lJ){let e=7*r;a[e]=s,a[e+1]=h,a[e+2]=c,a[e+3]=d,a[e+4]=u,a[e+5]=p,a[e+6]=f,o[r]=m}else t||(t=Array(e.length)),t[r]={id:s,name:m,count:h,x:c,y:d,width:u,height:p,didCommit:f}}lJ?lJ.postMessage({type:"draw-outlines",data:r,names:o}):lY&&lX&&t&&(lq(lQ,t),lZ||(lZ=requestAnimationFrame(l6)))}}for(let e of l1)l0.delete(e),l1.delete(e)},l6=()=>{lX&&lY&&(lZ=((e,t,r,n)=>{e.clearRect(0,0,t.width/r,t.height/r);let i=new Map,a=new Map;for(let e of n.values()){let{x:t,y:r,width:n,height:o,targetX:l,targetY:s,targetWidth:c,targetHeight:d,frame:u}=e;l!==t&&(e.x=lI(t,l)),s!==r&&(e.y=lI(r,s)),c!==n&&(e.width=lI(n,c)),d!==o&&(e.height=lI(o,d));let p=`${null!=l?l:t},${null!=s?s:r}`,h=`${p},${null!=c?c:n},${null!=d?d:o}`,m=i.get(p);m?m.push(e):i.set(p,[e]);let f=1-u/45;e.frame++;let g=a.get(h)||{x:t,y:r,width:n,height:o,alpha:f};f>g.alpha&&(g.alpha=f),a.set(h,g)}for(let{x:t,y:r,width:n,height:i,alpha:o}of a.values()){e.strokeStyle=`rgba(${lW},${o})`,e.lineWidth=1;let a=Math.round(t)+.5,l=Math.round(r)+.5,s=Math.round(n),c=Math.round(i);e.beginPath(),e.rect(a,l,s,c),e.stroke(),e.fillStyle=`rgba(${lW},${.1*o})`,e.fill()}e.font="11px Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace";let o=new Map;for(let t of(e.textRendering="optimizeSpeed",i.values())){let{x:r,y:i,frame:a}=t[0],l=1-a/45,s=lB(t),{width:c}=e.measureText(s);o.set(`${r},${i},${c},${s}`,{text:s,width:c,height:11,alpha:l,x:r,y:i,outlines:t});let d=i-11-4;if(d<0&&(d=0),a>45)for(let e of t)n.delete(String(e.id))}for(let[t,r]of Array.from(o.entries()).sort(([e,t],[r,n])=>lV(n.outlines)-lV(t.outlines)))if(o.has(t))for(let[n,i]of o.entries()){if(t===n)continue;let{x:a,y:l,width:s,height:c}=r,{x:d,y:u,width:p,height:h}=i;a+s>d&&d+p>a&&l+c>u&&u+h>l&&(r.text=lB(r.outlines.concat(i.outlines)),r.width=e.measureText(r.text).width,o.delete(n))}for(let t of o.values()){let{x:r,y:n,alpha:i,width:a,height:o,text:l}=t,s=n-o-4;s<0&&(s=0),e.fillStyle=`rgba(${lW},${i})`,e.fillRect(r,s,a+4,o+4),e.fillStyle=`rgba(255,255,255,${i})`,e.fillText(l,r+2,s+o)}return n.size>0})(lX,lY,lK,lQ)?requestAnimationFrame(l6):null)},l8="u">typeof OffscreenCanvas&&"u">typeof Worker,l9=()=>Math.min(window.devicePixelRatio||1,2),se=!1,st=e=>!c8.has(e.memoizedProps),sr=!1,sn=`/*! tailwindcss v4.2.4 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme, base, components, utilities;
@layer theme {
  :root, :host {
    --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --color-red-300: oklch(80.8% 0.114 19.571);
    --color-red-400: oklch(70.4% 0.191 22.216);
    --color-red-500: oklch(63.7% 0.237 25.331);
    --color-red-600: oklch(57.7% 0.245 27.325);
    --color-red-950: oklch(25.8% 0.092 26.042);
    --color-yellow-300: oklch(90.5% 0.182 98.111);
    --color-yellow-500: oklch(79.5% 0.184 86.047);
    --color-green-500: oklch(72.3% 0.219 149.579);
    --color-purple-400: oklch(71.4% 0.203 305.504);
    --color-purple-500: oklch(62.7% 0.265 303.9);
    --color-purple-800: oklch(43.8% 0.218 303.724);
    --color-gray-100: oklch(96.7% 0.003 264.542);
    --color-gray-300: oklch(87.2% 0.01 258.338);
    --color-gray-400: oklch(70.7% 0.022 261.325);
    --color-gray-500: oklch(55.1% 0.027 264.364);
    --color-zinc-200: oklch(92% 0.004 286.32);
    --color-zinc-400: oklch(70.5% 0.015 286.067);
    --color-zinc-500: oklch(55.2% 0.016 285.938);
    --color-zinc-600: oklch(44.2% 0.017 285.786);
    --color-zinc-700: oklch(37% 0.013 285.805);
    --color-zinc-800: oklch(27.4% 0.006 286.033);
    --color-zinc-900: oklch(21% 0.006 285.885);
    --color-neutral-300: oklch(87% 0 0);
    --color-neutral-400: oklch(70.8% 0 0);
    --color-neutral-500: oklch(55.6% 0 0);
    --color-neutral-700: oklch(37.1% 0 0);
    --color-black: #000;
    --color-white: #fff;
    --spacing: 4px;
    --container-md: 448px;
    --text-xs: 12px;
    --text-xs--line-height: calc(1 / 0.75);
    --text-sm: 14px;
    --text-sm--line-height: calc(1.25 / 0.875);
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --tracking-wide: 0.025em;
    --radius-sm: 4px;
    --radius-md: 6px;
    --radius-lg: 8px;
    --ease-in: cubic-bezier(0.4, 0, 1, 1);
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --blur-sm: 8px;
    --default-transition-duration: 150ms;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    --default-font-family: var(--font-sans);
  }
}
@layer base {
  *, ::after, ::before, ::backdrop, ::file-selector-button {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0 solid;
  }
  html, :host {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    -moz-tab-size: 4;
      -o-tab-size: 4;
         tab-size: 4;
    font-family: var(--default-font-family, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
    font-feature-settings: var(--default-font-feature-settings, normal);
    font-variation-settings: var(--default-font-variation-settings, normal);
    -webkit-tap-highlight-color: transparent;
  }
  hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }
  abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }
  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  a {
    color: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
  }
  b, strong {
    font-weight: bolder;
  }
  code, kbd, samp, pre {
    font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
    font-feature-settings: normal;
    font-variation-settings: normal;
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  }
  :-moz-focusring {
    outline: auto;
  }
  progress {
    vertical-align: baseline;
  }
  summary {
    display: list-item;
  }
  ol, ul, menu {
    list-style: none;
  }
  img, svg, video, canvas, audio, iframe, embed, object {
    display: block;
    vertical-align: middle;
  }
  img, video {
    max-width: 100%;
    height: auto;
  }
  button, input, select, optgroup, textarea, ::file-selector-button {
    font: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    letter-spacing: inherit;
    color: inherit;
    border-radius: 0;
    background-color: transparent;
    opacity: 1;
  }
  :where(select:is([multiple], [size])) optgroup {
    font-weight: bolder;
  }
  :where(select:is([multiple], [size])) optgroup option {
    padding-inline-start: 20px;
  }
  ::file-selector-button {
    margin-inline-end: 4px;
  }
  ::-moz-placeholder {
    opacity: 1;
  }
  ::placeholder {
    opacity: 1;
  }
  @supports (not (-webkit-appearance: -apple-pay-button))  or (contain-intrinsic-size: 1px) {
    ::-moz-placeholder {
      color: currentcolor;
      @supports (color: color-mix(in lab, red, red)) {
        color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }
    ::placeholder {
      color: currentcolor;
      @supports (color: color-mix(in lab, red, red)) {
        color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }
  }
  textarea {
    resize: vertical;
  }
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-date-and-time-value {
    min-height: 1lh;
    text-align: inherit;
  }
  ::-webkit-datetime-edit {
    display: inline-flex;
  }
  ::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }
  ::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field {
    padding-block: 0;
  }
  ::-webkit-calendar-picker-indicator {
    line-height: 1;
  }
  :-moz-ui-invalid {
    box-shadow: none;
  }
  button, input:where([type="button"], [type="reset"], [type="submit"]), ::file-selector-button {
    -webkit-appearance: button;
       -moz-appearance: button;
            appearance: button;
  }
  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
    height: auto;
  }
  [hidden]:where(:not([hidden="until-found"])) {
    display: none !important;
  }
}
@layer utilities {
  .pointer-events-auto {
    pointer-events: auto;
  }
  .pointer-events-bounding-box {
    pointer-events: bounding-box;
  }
  .pointer-events-none {
    pointer-events: none;
  }
  .collapse {
    visibility: collapse;
  }
  .visible {
    visibility: visible;
  }
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .relative {
    position: relative;
  }
  .static {
    position: static;
  }
  .inset-0 {
    inset: calc(var(--spacing) * 0);
  }
  .inset-x-1 {
    inset-inline: calc(var(--spacing) * 1);
  }
  .inset-y-0 {
    inset-block: calc(var(--spacing) * 0);
  }
  .start {
    inset-inline-start: var(--spacing);
  }
  .end {
    inset-inline-end: var(--spacing);
  }
  .-top-1 {
    top: calc(var(--spacing) * -1);
  }
  .-top-2\\.5 {
    top: calc(var(--spacing) * -2.5);
  }
  .top-0 {
    top: calc(var(--spacing) * 0);
  }
  .top-0\\.5 {
    top: calc(var(--spacing) * 0.5);
  }
  .top-1\\/2 {
    top: calc(1 / 2 * 100%);
  }
  .top-2 {
    top: calc(var(--spacing) * 2);
  }
  .-right-1 {
    right: calc(var(--spacing) * -1);
  }
  .-right-2\\.5 {
    right: calc(var(--spacing) * -2.5);
  }
  .right-0 {
    right: calc(var(--spacing) * 0);
  }
  .right-0\\.5 {
    right: calc(var(--spacing) * 0.5);
  }
  .right-2 {
    right: calc(var(--spacing) * 2);
  }
  .right-4 {
    right: calc(var(--spacing) * 4);
  }
  .bottom-0 {
    bottom: calc(var(--spacing) * 0);
  }
  .bottom-4 {
    bottom: calc(var(--spacing) * 4);
  }
  .left-0 {
    left: calc(var(--spacing) * 0);
  }
  .left-3 {
    left: calc(var(--spacing) * 3);
  }
  .z-10 {
    z-index: 10;
  }
  .z-50 {
    z-index: 50;
  }
  .z-100 {
    z-index: 100;
  }
  .z-\\[214748365\\] {
    z-index: 214748365;
  }
  .z-\\[214748367\\] {
    z-index: 214748367;
  }
  .z-\\[124124124124\\] {
    z-index: 124124124124;
  }
  .container {
    width: 100%;
    @media (width >= 640px) {
      max-width: 640px;
    }
    @media (width >= 768px) {
      max-width: 768px;
    }
    @media (width >= 1024px) {
      max-width: 1024px;
    }
    @media (width >= 1280px) {
      max-width: 1280px;
    }
    @media (width >= 1536px) {
      max-width: 1536px;
    }
  }
  .m-\\[2px\\] {
    margin: 2px;
  }
  .mx-0\\.5 {
    margin-inline: calc(var(--spacing) * 0.5);
  }
  .mt-0\\.5 {
    margin-top: calc(var(--spacing) * 0.5);
  }
  .mt-1 {
    margin-top: calc(var(--spacing) * 1);
  }
  .mt-4 {
    margin-top: calc(var(--spacing) * 4);
  }
  .mr-0\\.5 {
    margin-right: calc(var(--spacing) * 0.5);
  }
  .mr-1 {
    margin-right: calc(var(--spacing) * 1);
  }
  .mr-1\\.5 {
    margin-right: calc(var(--spacing) * 1.5);
  }
  .mr-16 {
    margin-right: calc(var(--spacing) * 16);
  }
  .mr-auto {
    margin-right: auto;
  }
  .mb-1\\.5 {
    margin-bottom: calc(var(--spacing) * 1.5);
  }
  .mb-2 {
    margin-bottom: calc(var(--spacing) * 2);
  }
  .mb-3 {
    margin-bottom: calc(var(--spacing) * 3);
  }
  .mb-4 {
    margin-bottom: calc(var(--spacing) * 4);
  }
  .mb-px {
    margin-bottom: 1px;
  }
  .\\!ml-0 {
    margin-left: calc(var(--spacing) * 0) !important;
  }
  .ml-1 {
    margin-left: calc(var(--spacing) * 1);
  }
  .ml-1\\.5 {
    margin-left: calc(var(--spacing) * 1.5);
  }
  .ml-auto {
    margin-left: auto;
  }
  .block {
    display: block;
  }
  .contents {
    display: contents;
  }
  .flex {
    display: flex;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .aspect-square {
    aspect-ratio: 1 / 1;
  }
  .h-1 {
    height: calc(var(--spacing) * 1);
  }
  .h-4 {
    height: calc(var(--spacing) * 4);
  }
  .h-4\\/5 {
    height: calc(4 / 5 * 100%);
  }
  .h-6 {
    height: calc(var(--spacing) * 6);
  }
  .h-7 {
    height: calc(var(--spacing) * 7);
  }
  .h-8 {
    height: calc(var(--spacing) * 8);
  }
  .h-10 {
    height: calc(var(--spacing) * 10);
  }
  .h-12 {
    height: calc(var(--spacing) * 12);
  }
  .h-\\[28px\\] {
    height: 28px;
  }
  .h-\\[48px\\] {
    height: 48px;
  }
  .h-\\[50px\\] {
    height: 50px;
  }
  .h-\\[150px\\] {
    height: 150px;
  }
  .h-\\[235px\\] {
    height: 235px;
  }
  .h-\\[calc\\(100\\%-25px\\)\\] {
    height: calc(100% - 25px);
  }
  .h-\\[calc\\(100\\%-40px\\)\\] {
    height: calc(100% - 40px);
  }
  .h-\\[calc\\(100\\%-48px\\)\\] {
    height: calc(100% - 48px);
  }
  .h-\\[calc\\(100\\%-150px\\)\\] {
    height: calc(100% - 150px);
  }
  .h-\\[calc\\(100\\%-200px\\)\\] {
    height: calc(100% - 200px);
  }
  .h-fit {
    height: -moz-fit-content;
    height: fit-content;
  }
  .h-full {
    height: 100%;
  }
  .h-screen {
    height: 100vh;
  }
  .max-h-0 {
    max-height: calc(var(--spacing) * 0);
  }
  .max-h-9 {
    max-height: calc(var(--spacing) * 9);
  }
  .max-h-40 {
    max-height: calc(var(--spacing) * 40);
  }
  .min-h-9 {
    min-height: calc(var(--spacing) * 9);
  }
  .min-h-\\[48px\\] {
    min-height: 48px;
  }
  .min-h-fit {
    min-height: -moz-fit-content;
    min-height: fit-content;
  }
  .w-1 {
    width: calc(var(--spacing) * 1);
  }
  .w-1\\/2 {
    width: calc(1 / 2 * 100%);
  }
  .w-1\\/3 {
    width: calc(1 / 3 * 100%);
  }
  .w-2\\/4 {
    width: calc(2 / 4 * 100%);
  }
  .w-3 {
    width: calc(var(--spacing) * 3);
  }
  .w-4 {
    width: calc(var(--spacing) * 4);
  }
  .w-4\\/5 {
    width: calc(4 / 5 * 100%);
  }
  .w-6 {
    width: calc(var(--spacing) * 6);
  }
  .w-80 {
    width: calc(var(--spacing) * 80);
  }
  .w-\\[20px\\] {
    width: 20px;
  }
  .w-\\[72px\\] {
    width: 72px;
  }
  .w-\\[90\\%\\] {
    width: 90%;
  }
  .w-\\[calc\\(100\\%-200px\\)\\] {
    width: calc(100% - 200px);
  }
  .w-fit {
    width: -moz-fit-content;
    width: fit-content;
  }
  .w-full {
    width: 100%;
  }
  .w-px {
    width: 1px;
  }
  .w-screen {
    width: 100vw;
  }
  .max-w-md {
    max-width: var(--container-md);
  }
  .min-w-0 {
    min-width: calc(var(--spacing) * 0);
  }
  .min-w-\\[200px\\] {
    min-width: 200px;
  }
  .min-w-fit {
    min-width: -moz-fit-content;
    min-width: fit-content;
  }
  .flex-1 {
    flex: 1;
  }
  .shrink-0 {
    flex-shrink: 0;
  }
  .grow {
    flex-grow: 1;
  }
  .-translate-y-1\\/2 {
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-y-\\[200\\%\\] {
    --tw-translate-y: calc(200% * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-0 {
    --tw-translate-y: calc(var(--spacing) * 0);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .scale-110 {
    --tw-scale-x: 110%;
    --tw-scale-y: 110%;
    --tw-scale-z: 110%;
    scale: var(--tw-scale-x) var(--tw-scale-y);
  }
  .-rotate-90 {
    rotate: calc(90deg * -1);
  }
  .rotate-90 {
    rotate: 90deg;
  }
  .rotate-180 {
    rotate: 180deg;
  }
  .transform {
    transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);
  }
  .animate-fade-in {
    animation: fadeIn ease-in forwards;
  }
  .cursor-default {
    cursor: default;
  }
  .cursor-e-resize {
    cursor: e-resize;
  }
  .cursor-ew-resize {
    cursor: ew-resize;
  }
  .cursor-ew-resize {
    cursor: ew-resize;
  }
  .cursor-move {
    cursor: move;
  }
  .cursor-move {
    cursor: move;
  }
  .cursor-nesw-resize {
    cursor: nesw-resize;
  }
  .cursor-nesw-resize {
    cursor: nesw-resize;
  }
  .cursor-ns-resize {
    cursor: ns-resize;
  }
  .cursor-ns-resize {
    cursor: ns-resize;
  }
  .cursor-nwse-resize {
    cursor: nwse-resize;
  }
  .cursor-nwse-resize {
    cursor: nwse-resize;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .cursor-w-resize {
    cursor: w-resize;
  }
  .\\[touch-action\\:none\\] {
    touch-action: none;
  }
  .resize {
    resize: both;
  }
  .flex-col {
    flex-direction: column;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .items-start {
    align-items: flex-start;
  }
  .items-stretch {
    align-items: stretch;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .gap-0\\.5 {
    gap: calc(var(--spacing) * 0.5);
  }
  .gap-1 {
    gap: calc(var(--spacing) * 1);
  }
  .gap-1\\.5 {
    gap: calc(var(--spacing) * 1.5);
  }
  .gap-2 {
    gap: calc(var(--spacing) * 2);
  }
  .gap-4 {
    gap: calc(var(--spacing) * 4);
  }
  .space-y-1\\.5 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .gap-x-0\\.5 {
    -moz-column-gap: calc(var(--spacing) * 0.5);
         column-gap: calc(var(--spacing) * 0.5);
  }
  .gap-x-1 {
    -moz-column-gap: calc(var(--spacing) * 1);
         column-gap: calc(var(--spacing) * 1);
  }
  .gap-x-1\\.5 {
    -moz-column-gap: calc(var(--spacing) * 1.5);
         column-gap: calc(var(--spacing) * 1.5);
  }
  .gap-x-2 {
    -moz-column-gap: calc(var(--spacing) * 2);
         column-gap: calc(var(--spacing) * 2);
  }
  .gap-x-3 {
    -moz-column-gap: calc(var(--spacing) * 3);
         column-gap: calc(var(--spacing) * 3);
  }
  .gap-x-4 {
    -moz-column-gap: calc(var(--spacing) * 4);
         column-gap: calc(var(--spacing) * 4);
  }
  .gap-y-0\\.5 {
    row-gap: calc(var(--spacing) * 0.5);
  }
  .gap-y-1 {
    row-gap: calc(var(--spacing) * 1);
  }
  .gap-y-2 {
    row-gap: calc(var(--spacing) * 2);
  }
  .gap-y-4 {
    row-gap: calc(var(--spacing) * 4);
  }
  .divide-y {
    :where(& > :not(:last-child)) {
      --tw-divide-y-reverse: 0;
      border-bottom-style: var(--tw-border-style);
      border-top-style: var(--tw-border-style);
      border-top-width: calc(1px * var(--tw-divide-y-reverse));
      border-bottom-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
    }
  }
  .divide-zinc-800 {
    :where(& > :not(:last-child)) {
      border-color: var(--color-zinc-800);
    }
  }
  .place-self-center {
    place-self: center;
  }
  .self-end {
    align-self: flex-end;
  }
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .\\!overflow-visible {
    overflow: visible !important;
  }
  .overflow-auto {
    overflow: auto;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-x-auto {
    overflow-x: auto;
  }
  .overflow-x-hidden {
    overflow-x: hidden;
  }
  .overflow-y-auto {
    overflow-y: auto;
  }
  .rounded {
    border-radius: 4px;
  }
  .rounded-full {
    border-radius: calc(infinity * 1px);
  }
  .rounded-lg {
    border-radius: var(--radius-lg);
  }
  .rounded-md {
    border-radius: var(--radius-md);
  }
  .rounded-sm {
    border-radius: var(--radius-sm);
  }
  .rounded-t-lg {
    border-top-left-radius: var(--radius-lg);
    border-top-right-radius: var(--radius-lg);
  }
  .rounded-t-sm {
    border-top-left-radius: var(--radius-sm);
    border-top-right-radius: var(--radius-sm);
  }
  .rounded-l-md {
    border-top-left-radius: var(--radius-md);
    border-bottom-left-radius: var(--radius-md);
  }
  .rounded-l-sm {
    border-top-left-radius: var(--radius-sm);
    border-bottom-left-radius: var(--radius-sm);
  }
  .rounded-tl-lg {
    border-top-left-radius: var(--radius-lg);
  }
  .rounded-r-md {
    border-top-right-radius: var(--radius-md);
    border-bottom-right-radius: var(--radius-md);
  }
  .rounded-r-sm {
    border-top-right-radius: var(--radius-sm);
    border-bottom-right-radius: var(--radius-sm);
  }
  .rounded-tr-lg {
    border-top-right-radius: var(--radius-lg);
  }
  .rounded-br-lg {
    border-bottom-right-radius: var(--radius-lg);
  }
  .rounded-bl-lg {
    border-bottom-left-radius: var(--radius-lg);
  }
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-4 {
    border-style: var(--tw-border-style);
    border-width: 4px;
  }
  .border-t {
    border-top-style: var(--tw-border-style);
    border-top-width: 1px;
  }
  .border-r {
    border-right-style: var(--tw-border-style);
    border-right-width: 1px;
  }
  .border-b {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
  }
  .border-l {
    border-left-style: var(--tw-border-style);
    border-left-width: 1px;
  }
  .border-l-0 {
    border-left-style: var(--tw-border-style);
    border-left-width: 0px;
  }
  .border-l-1 {
    border-left-style: var(--tw-border-style);
    border-left-width: 1px;
  }
  .border-none {
    --tw-border-style: none;
    border-style: none;
  }
  .\\!border-red-500 {
    border-color: var(--color-red-500) !important;
  }
  .border-\\[\\#1e1e1e\\] {
    border-color: #1e1e1e;
  }
  .border-\\[\\#222\\] {
    border-color: #222;
  }
  .border-\\[\\#333\\] {
    border-color: #333;
  }
  .border-\\[\\#27272A\\] {
    border-color: #27272A;
  }
  .border-transparent {
    border-color: transparent;
  }
  .border-zinc-800 {
    border-color: var(--color-zinc-800);
  }
  .bg-\\[\\#0A0A0A\\] {
    background-color: #0A0A0A;
  }
  .bg-\\[\\#1D3A66\\] {
    background-color: #1D3A66;
  }
  .bg-\\[\\#1E1E1E\\] {
    background-color: #1E1E1E;
  }
  .bg-\\[\\#1a2a1a\\] {
    background-color: #1a2a1a;
  }
  .bg-\\[\\#1e1e1e\\] {
    background-color: #1e1e1e;
  }
  .bg-\\[\\#2a1515\\] {
    background-color: #2a1515;
  }
  .bg-\\[\\#4b4b4b\\] {
    background-color: #4b4b4b;
  }
  .bg-\\[\\#5f3f9a\\] {
    background-color: #5f3f9a;
  }
  .bg-\\[\\#5f3f9a\\]\\/40 {
    background-color: color-mix(in oklab, #5f3f9a 40%, transparent);
  }
  .bg-\\[\\#6a369e\\] {
    background-color: #6a369e;
  }
  .bg-\\[\\#8e61e3\\] {
    background-color: #8e61e3;
  }
  .bg-\\[\\#7521c8\\] {
    background-color: #7521c8;
  }
  .bg-\\[\\#18181B\\] {
    background-color: #18181B;
  }
  .bg-\\[\\#18181B\\]\\/50 {
    background-color: color-mix(in oklab, #18181B 50%, transparent);
  }
  .bg-\\[\\#27272A\\] {
    background-color: #27272A;
  }
  .bg-\\[\\#44444a\\] {
    background-color: #44444a;
  }
  .bg-\\[\\#141414\\] {
    background-color: #141414;
  }
  .bg-\\[\\#214379d4\\] {
    background-color: #214379d4;
  }
  .bg-\\[\\#412162\\] {
    background-color: #412162;
  }
  .bg-\\[\\#EFD81A\\] {
    background-color: #EFD81A;
  }
  .bg-\\[\\#b77116\\] {
    background-color: #b77116;
  }
  .bg-\\[\\#b94040\\] {
    background-color: #b94040;
  }
  .bg-\\[\\#d36cff\\] {
    background-color: #d36cff;
  }
  .bg-\\[\\#efd81a6b\\] {
    background-color: #efd81a6b;
  }
  .bg-black {
    background-color: var(--color-black);
  }
  .bg-black\\/40 {
    background-color: color-mix(in srgb, #000 40%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-black) 40%, transparent);
    }
  }
  .bg-green-500\\/50 {
    background-color: color-mix(in srgb, oklch(72.3% 0.219 149.579) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-green-500) 50%, transparent);
    }
  }
  .bg-green-500\\/60 {
    background-color: color-mix(in srgb, oklch(72.3% 0.219 149.579) 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-green-500) 60%, transparent);
    }
  }
  .bg-neutral-700 {
    background-color: var(--color-neutral-700);
  }
  .bg-purple-500 {
    background-color: var(--color-purple-500);
  }
  .bg-purple-500\\/90 {
    background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 90%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-purple-500) 90%, transparent);
    }
  }
  .bg-purple-800 {
    background-color: var(--color-purple-800);
  }
  .bg-red-500 {
    background-color: var(--color-red-500);
  }
  .bg-red-500\\/90 {
    background-color: color-mix(in srgb, oklch(63.7% 0.237 25.331) 90%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-red-500) 90%, transparent);
    }
  }
  .bg-red-950\\/50 {
    background-color: color-mix(in srgb, oklch(25.8% 0.092 26.042) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-red-950) 50%, transparent);
    }
  }
  .bg-transparent {
    background-color: transparent;
  }
  .bg-white {
    background-color: var(--color-white);
  }
  .bg-yellow-300 {
    background-color: var(--color-yellow-300);
  }
  .bg-zinc-800 {
    background-color: var(--color-zinc-800);
  }
  .bg-zinc-900\\/30 {
    background-color: color-mix(in srgb, oklch(21% 0.006 285.885) 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-zinc-900) 30%, transparent);
    }
  }
  .bg-zinc-900\\/50 {
    background-color: color-mix(in srgb, oklch(21% 0.006 285.885) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-zinc-900) 50%, transparent);
    }
  }
  .p-0 {
    padding: calc(var(--spacing) * 0);
  }
  .p-1 {
    padding: calc(var(--spacing) * 1);
  }
  .p-2 {
    padding: calc(var(--spacing) * 2);
  }
  .p-3 {
    padding: calc(var(--spacing) * 3);
  }
  .p-4 {
    padding: calc(var(--spacing) * 4);
  }
  .p-5 {
    padding: calc(var(--spacing) * 5);
  }
  .p-6 {
    padding: calc(var(--spacing) * 6);
  }
  .px-1 {
    padding-inline: calc(var(--spacing) * 1);
  }
  .px-1\\.5 {
    padding-inline: calc(var(--spacing) * 1.5);
  }
  .px-2 {
    padding-inline: calc(var(--spacing) * 2);
  }
  .px-2\\.5 {
    padding-inline: calc(var(--spacing) * 2.5);
  }
  .px-3 {
    padding-inline: calc(var(--spacing) * 3);
  }
  .px-4 {
    padding-inline: calc(var(--spacing) * 4);
  }
  .py-0\\.5 {
    padding-block: calc(var(--spacing) * 0.5);
  }
  .py-1 {
    padding-block: calc(var(--spacing) * 1);
  }
  .py-1\\.5 {
    padding-block: calc(var(--spacing) * 1.5);
  }
  .py-2 {
    padding-block: calc(var(--spacing) * 2);
  }
  .py-3 {
    padding-block: calc(var(--spacing) * 3);
  }
  .py-4 {
    padding-block: calc(var(--spacing) * 4);
  }
  .py-\\[1px\\] {
    padding-block: 1px;
  }
  .py-\\[3px\\] {
    padding-block: 3px;
  }
  .py-\\[5px\\] {
    padding-block: 5px;
  }
  .pt-0 {
    padding-top: calc(var(--spacing) * 0);
  }
  .pt-2 {
    padding-top: calc(var(--spacing) * 2);
  }
  .pt-5 {
    padding-top: calc(var(--spacing) * 5);
  }
  .pr-1 {
    padding-right: calc(var(--spacing) * 1);
  }
  .pr-1\\.5 {
    padding-right: calc(var(--spacing) * 1.5);
  }
  .pr-2 {
    padding-right: calc(var(--spacing) * 2);
  }
  .pr-2\\.5 {
    padding-right: calc(var(--spacing) * 2.5);
  }
  .pb-2 {
    padding-bottom: calc(var(--spacing) * 2);
  }
  .pl-1 {
    padding-left: calc(var(--spacing) * 1);
  }
  .pl-2 {
    padding-left: calc(var(--spacing) * 2);
  }
  .pl-2\\.5 {
    padding-left: calc(var(--spacing) * 2.5);
  }
  .pl-3 {
    padding-left: calc(var(--spacing) * 3);
  }
  .pl-5 {
    padding-left: calc(var(--spacing) * 5);
  }
  .pl-6 {
    padding-left: calc(var(--spacing) * 6);
  }
  .text-left {
    text-align: left;
  }
  .font-mono {
    font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  }
  .text-sm {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
  .text-xs {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  .text-\\[8px\\] {
    font-size: 8px;
  }
  .text-\\[10px\\] {
    font-size: 10px;
  }
  .text-\\[11px\\] {
    font-size: 11px;
  }
  .text-\\[13px\\] {
    font-size: 13px;
  }
  .text-\\[14px\\] {
    font-size: 14px;
  }
  .text-\\[17px\\] {
    font-size: 17px;
  }
  .leading-6 {
    --tw-leading: calc(var(--spacing) * 6);
    line-height: calc(var(--spacing) * 6);
  }
  .leading-none {
    --tw-leading: 1;
    line-height: 1;
  }
  .font-bold {
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
  }
  .font-medium {
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
  }
  .font-semibold {
    --tw-font-weight: var(--font-weight-semibold);
    font-weight: var(--font-weight-semibold);
  }
  .tracking-wide {
    --tw-tracking: var(--tracking-wide);
    letter-spacing: var(--tracking-wide);
  }
  .text-wrap {
    text-wrap: wrap;
  }
  .break-words {
    overflow-wrap: break-word;
  }
  .break-all {
    word-break: break-all;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .whitespace-pre-wrap {
    white-space: pre-wrap;
  }
  .text-\\[\\#4ade80\\] {
    color: #4ade80;
  }
  .text-\\[\\#5a5a5a\\] {
    color: #5a5a5a;
  }
  .text-\\[\\#6E6E77\\] {
    color: #6E6E77;
  }
  .text-\\[\\#6F6F78\\] {
    color: #6F6F78;
  }
  .text-\\[\\#8E61E3\\] {
    color: #8E61E3;
  }
  .text-\\[\\#666\\] {
    color: #666;
  }
  .text-\\[\\#888\\] {
    color: #888;
  }
  .text-\\[\\#999\\] {
    color: #999;
  }
  .text-\\[\\#7346a0\\] {
    color: #7346a0;
  }
  .text-\\[\\#65656D\\] {
    color: #65656D;
  }
  .text-\\[\\#737373\\] {
    color: #737373;
  }
  .text-\\[\\#A1A1AA\\] {
    color: #A1A1AA;
  }
  .text-\\[\\#A855F7\\] {
    color: #A855F7;
  }
  .text-\\[\\#E4E4E7\\] {
    color: #E4E4E7;
  }
  .text-\\[\\#d36cff\\] {
    color: #d36cff;
  }
  .text-\\[\\#f87171\\] {
    color: #f87171;
  }
  .text-black {
    color: var(--color-black);
  }
  .text-gray-100 {
    color: var(--color-gray-100);
  }
  .text-gray-300 {
    color: var(--color-gray-300);
  }
  .text-gray-400 {
    color: var(--color-gray-400);
  }
  .text-gray-500 {
    color: var(--color-gray-500);
  }
  .text-green-500 {
    color: var(--color-green-500);
  }
  .text-neutral-300 {
    color: var(--color-neutral-300);
  }
  .text-neutral-400 {
    color: var(--color-neutral-400);
  }
  .text-neutral-500 {
    color: var(--color-neutral-500);
  }
  .text-purple-400 {
    color: var(--color-purple-400);
  }
  .text-red-300 {
    color: var(--color-red-300);
  }
  .text-red-400 {
    color: var(--color-red-400);
  }
  .text-red-500 {
    color: var(--color-red-500);
  }
  .text-white {
    color: var(--color-white);
  }
  .text-white\\/30 {
    color: color-mix(in srgb, #fff 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-white) 30%, transparent);
    }
  }
  .text-white\\/70 {
    color: color-mix(in srgb, #fff 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-white) 70%, transparent);
    }
  }
  .text-yellow-300 {
    color: var(--color-yellow-300);
  }
  .text-yellow-500 {
    color: var(--color-yellow-500);
  }
  .text-zinc-200 {
    color: var(--color-zinc-200);
  }
  .text-zinc-400 {
    color: var(--color-zinc-400);
  }
  .text-zinc-500 {
    color: var(--color-zinc-500);
  }
  .text-zinc-600 {
    color: var(--color-zinc-600);
  }
  .uppercase {
    text-transform: uppercase;
  }
  .italic {
    font-style: italic;
  }
  .opacity-0 {
    opacity: 0%;
  }
  .opacity-50 {
    opacity: 50%;
  }
  .opacity-100 {
    opacity: 100%;
  }
  .shadow-lg {
    --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-1 {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-white\\/\\[0\\.08\\] {
    --tw-ring-color: color-mix(in srgb, #fff 8%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-ring-color: color-mix(in oklab, var(--color-white) 8%, transparent);
    }
  }
  .outline {
    outline-style: var(--tw-outline-style);
    outline-width: 1px;
  }
  .filter {
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .backdrop-blur-sm {
    --tw-backdrop-blur: blur(var(--blur-sm));
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .transition {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, backdrop-filter, display, content-visibility, overlay, pointer-events;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[border-radius\\] {
    transition-property: border-radius;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[color\\,transform\\] {
    transition-property: color,transform;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[max-height\\] {
    transition-property: max-height;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[opacity\\] {
    transition-property: opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-all {
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-colors {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-opacity {
    transition-property: opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-transform {
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-none {
    transition-property: none;
  }
  .delay-0 {
    transition-delay: 0ms;
  }
  .delay-150 {
    transition-delay: 150ms;
  }
  .delay-300 {
    transition-delay: 300ms;
  }
  .\\!duration-0 {
    --tw-duration: 0ms !important;
    transition-duration: 0ms !important;
  }
  .duration-0 {
    --tw-duration: 0ms;
    transition-duration: 0ms;
  }
  .duration-120 {
    --tw-duration: 120ms;
    transition-duration: 120ms;
  }
  .duration-200 {
    --tw-duration: 200ms;
    transition-duration: 200ms;
  }
  .duration-300 {
    --tw-duration: 300ms;
    transition-duration: 300ms;
  }
  .ease-\\[cubic-bezier\\(0\\.25\\,0\\.1\\,0\\.25\\,1\\)\\] {
    --tw-ease: cubic-bezier(0.25,0.1,0.25,1);
    transition-timing-function: cubic-bezier(0.25,0.1,0.25,1);
  }
  .ease-in {
    --tw-ease: var(--ease-in);
    transition-timing-function: var(--ease-in);
  }
  .ease-in-out {
    --tw-ease: var(--ease-in-out);
    transition-timing-function: var(--ease-in-out);
  }
  .ease-out {
    --tw-ease: var(--ease-out);
    transition-timing-function: var(--ease-out);
  }
  .will-change-transform {
    will-change: transform;
  }
  .select-none {
    -webkit-user-select: none;
    -moz-user-select: none;
         user-select: none;
  }
  .animation-delay-0 {
    animation-delay: 0s;
  }
  .animation-delay-100 {
    animation-delay: .1s;
  }
  .animation-delay-150 {
    animation-delay: .15s;
  }
  .animation-delay-200 {
    animation-delay: .2s;
  }
  .animation-delay-300 {
    animation-delay: .3s;
  }
  .animation-delay-500 {
    animation-delay: .5s;
  }
  .animation-delay-700 {
    animation-delay: .7s;
  }
  .animation-delay-1000 {
    animation-delay: 1s;
  }
  .animation-duration-0 {
    animation-duration: 0s;
  }
  .animation-duration-100 {
    animation-duration: .1s;
  }
  .animation-duration-200 {
    animation-duration: .2s;
  }
  .animation-duration-300 {
    animation-duration: .3s;
  }
  .animation-duration-500 {
    animation-duration: .5s;
  }
  .animation-duration-700 {
    animation-duration: .7s;
  }
  .animation-duration-1000 {
    animation-duration: 1s;
  }
  .group-hover\\:bg-\\[\\#5b2d89\\] {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        background-color: #5b2d89;
      }
    }
  }
  .group-hover\\:bg-\\[\\#6a6a6a\\] {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        background-color: #6a6a6a;
      }
    }
  }
  .group-hover\\:bg-\\[\\#21437982\\] {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        background-color: #21437982;
      }
    }
  }
  .group-hover\\:bg-\\[\\#efda1a2f\\] {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        background-color: #efda1a2f;
      }
    }
  }
  .group-hover\\:opacity-100 {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        opacity: 100%;
      }
    }
  }
  .peer-hover\\/bottom\\:rounded-b-none {
    &:is(:where(.peer\\/bottom):hover ~ *) {
      @media (hover: hover) {
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
  .peer-hover\\/left\\:rounded-l-none {
    &:is(:where(.peer\\/left):hover ~ *) {
      @media (hover: hover) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
  .peer-hover\\/right\\:rounded-r-none {
    &:is(:where(.peer\\/right):hover ~ *) {
      @media (hover: hover) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  }
  .peer-hover\\/top\\:rounded-t-none {
    &:is(:where(.peer\\/top):hover ~ *) {
      @media (hover: hover) {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    }
  }
  .after\\:absolute {
    &::after {
      content: var(--tw-content);
      position: absolute;
    }
  }
  .after\\:inset-0 {
    &::after {
      content: var(--tw-content);
      inset: calc(var(--spacing) * 0);
    }
  }
  .after\\:top-\\[100\\%\\] {
    &::after {
      content: var(--tw-content);
      top: 100%;
    }
  }
  .after\\:left-1\\/2 {
    &::after {
      content: var(--tw-content);
      left: calc(1 / 2 * 100%);
    }
  }
  .after\\:h-\\[6px\\] {
    &::after {
      content: var(--tw-content);
      height: 6px;
    }
  }
  .after\\:w-\\[10px\\] {
    &::after {
      content: var(--tw-content);
      width: 10px;
    }
  }
  .after\\:-translate-x-1\\/2 {
    &::after {
      content: var(--tw-content);
      --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  .after\\:animate-\\[fadeOut_1s_ease-out_forwards\\] {
    &::after {
      content: var(--tw-content);
      animation: fadeOut 1s ease-out forwards;
    }
  }
  .after\\:border-t-\\[6px\\] {
    &::after {
      content: var(--tw-content);
      border-top-style: var(--tw-border-style);
      border-top-width: 6px;
    }
  }
  .after\\:border-r-\\[5px\\] {
    &::after {
      content: var(--tw-content);
      border-right-style: var(--tw-border-style);
      border-right-width: 5px;
    }
  }
  .after\\:border-l-\\[5px\\] {
    &::after {
      content: var(--tw-content);
      border-left-style: var(--tw-border-style);
      border-left-width: 5px;
    }
  }
  .after\\:border-t-white {
    &::after {
      content: var(--tw-content);
      border-top-color: var(--color-white);
    }
  }
  .after\\:border-r-transparent {
    &::after {
      content: var(--tw-content);
      border-right-color: transparent;
    }
  }
  .after\\:border-l-transparent {
    &::after {
      content: var(--tw-content);
      border-left-color: transparent;
    }
  }
  .after\\:bg-purple-500\\/30 {
    &::after {
      content: var(--tw-content);
      background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 30%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-purple-500) 30%, transparent);
      }
    }
  }
  .after\\:content-\\[\\"\\"\\] {
    &::after {
      --tw-content: "";
      content: var(--tw-content);
    }
  }
  .focus-within\\:border-\\[\\#454545\\] {
    &:focus-within {
      border-color: #454545;
    }
  }
  .hover\\:bg-\\[\\#0f0f0f\\] {
    &:hover {
      @media (hover: hover) {
        background-color: #0f0f0f;
      }
    }
  }
  .hover\\:bg-\\[\\#5f3f9a\\]\\/20 {
    &:hover {
      @media (hover: hover) {
        background-color: color-mix(in oklab, #5f3f9a 20%, transparent);
      }
    }
  }
  .hover\\:bg-\\[\\#5f3f9a\\]\\/40 {
    &:hover {
      @media (hover: hover) {
        background-color: color-mix(in oklab, #5f3f9a 40%, transparent);
      }
    }
  }
  .hover\\:bg-\\[\\#18181B\\] {
    &:hover {
      @media (hover: hover) {
        background-color: #18181B;
      }
    }
  }
  .hover\\:bg-\\[\\#34343b\\] {
    &:hover {
      @media (hover: hover) {
        background-color: #34343b;
      }
    }
  }
  .hover\\:bg-red-600 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-red-600);
      }
    }
  }
  .hover\\:bg-zinc-700 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-zinc-700);
      }
    }
  }
  .hover\\:bg-zinc-800\\/50 {
    &:hover {
      @media (hover: hover) {
        background-color: color-mix(in srgb, oklch(27.4% 0.006 286.033) 50%, transparent);
        @supports (color: color-mix(in lab, red, red)) {
          background-color: color-mix(in oklab, var(--color-zinc-800) 50%, transparent);
        }
      }
    }
  }
  .hover\\:text-neutral-300 {
    &:hover {
      @media (hover: hover) {
        color: var(--color-neutral-300);
      }
    }
  }
  .hover\\:text-white {
    &:hover {
      @media (hover: hover) {
        color: var(--color-white);
      }
    }
  }
}
* {
  outline: none !important;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.3);
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }
}
@-moz-document url-prefix() {
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.4) transparent;
    scrollbar-width: 6px;
  }
}
button {
  &:hover {
    @media (hover: hover) {
      background-image: none;
    }
  }
  --tw-outline-style: none;
  outline-style: none;
  --tw-border-style: none;
  border-style: none;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-ease: var(--ease-out);
  transition-timing-function: var(--ease-out);
  cursor: pointer;
}
input {
  --tw-outline-style: none;
  outline-style: none;
  --tw-border-style: none;
  border-style: none;
  background-color: transparent;
  background-image: none;
  &::-moz-placeholder {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  &::placeholder {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  &::-moz-placeholder {
    color: var(--color-neutral-500);
  }
  &::placeholder {
    color: var(--color-neutral-500);
  }
  &::-moz-placeholder {
    font-style: italic;
  }
  &::placeholder {
    font-style: italic;
  }
  &:-moz-placeholder {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &:placeholder-shown {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
svg {
  height: auto;
  width: auto;
  pointer-events: none;
}
.with-data-text {
  overflow: hidden;
  &::before {
    content: attr(data-text);
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
#react-scan-toolbar {
  position: fixed;
  top: calc(var(--spacing) * 0);
  left: calc(var(--spacing) * 0);
  display: flex;
  flex-direction: column;
  --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  font-size: 13px;
  color: var(--color-white);
  background-color: var(--color-black);
  -webkit-user-select: none;
  -moz-user-select: none;
       user-select: none;
  cursor: move;
  opacity: 0%;
  z-index: 2147483678;
  animation: fadeIn ease-in forwards;
  animation-delay: .3s;
  animation-duration: .3s;
  --tw-shadow: 0 4px 12px var(--tw-shadow-color, rgba(0,0,0,0.2));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  place-self: start;
  will-change: transform;
  backface-visibility: hidden;
}
#react-scan-toolbar pre,
#react-scan-toolbar textarea,
#react-scan-toolbar input[type='text'],
#react-scan-toolbar input[type='search'],
#react-scan-toolbar [data-react-scan-selectable] {
  -webkit-user-select: text;
  -moz-user-select: text;
       user-select: text;
  cursor: text;
}
.button {
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  &:active {
    background: rgba(255, 255, 255, 0.15);
  }
}
.resize-line-wrapper {
  position: absolute;
  overflow: hidden;
}
.resize-line {
  position: absolute;
  inset: calc(var(--spacing) * 0);
  overflow: hidden;
  background-color: var(--color-black);
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  svg {
    position: absolute;
    top: calc(1 / 2 * 100%);
    left: calc(1 / 2 * 100%);
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.resize-right,
.resize-left {
  inset-block: calc(var(--spacing) * 0);
  width: calc(var(--spacing) * 6);
  cursor: ew-resize;
  .resize-line-wrapper {
    inset-block: calc(var(--spacing) * 0);
    width: calc(1 / 2 * 100%);
  }
  &:hover {
    .resize-line {
      --tw-translate-x: calc(var(--spacing) * 0);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
}
.resize-right {
  right: calc(var(--spacing) * 0);
  --tw-translate-x: calc(1 / 2 * 100%);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  .resize-line-wrapper {
    right: calc(var(--spacing) * 0);
  }
  .resize-line {
    border-top-right-radius: var(--radius-lg);
    border-bottom-right-radius: var(--radius-lg);
    --tw-translate-x: -100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.resize-left {
  left: calc(var(--spacing) * 0);
  --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  .resize-line-wrapper {
    left: calc(var(--spacing) * 0);
  }
  .resize-line {
    border-top-left-radius: var(--radius-lg);
    border-bottom-left-radius: var(--radius-lg);
    --tw-translate-x: 100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.resize-top,
.resize-bottom {
  inset-inline: calc(var(--spacing) * 0);
  height: calc(var(--spacing) * 6);
  cursor: ns-resize;
  .resize-line-wrapper {
    inset-inline: calc(var(--spacing) * 0);
    height: calc(1 / 2 * 100%);
  }
  &:hover {
    .resize-line {
      --tw-translate-y: calc(var(--spacing) * 0);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
}
.resize-top {
  top: calc(var(--spacing) * 0);
  --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  .resize-line-wrapper {
    top: calc(var(--spacing) * 0);
  }
  .resize-line {
    border-top-left-radius: var(--radius-lg);
    border-top-right-radius: var(--radius-lg);
    --tw-translate-y: 100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.resize-bottom {
  bottom: calc(var(--spacing) * 0);
  --tw-translate-y: calc(1 / 2 * 100%);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  .resize-line-wrapper {
    bottom: calc(var(--spacing) * 0);
  }
  .resize-line {
    border-bottom-right-radius: var(--radius-lg);
    border-bottom-left-radius: var(--radius-lg);
    --tw-translate-y: -100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.react-scan-header {
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
  padding-right: calc(var(--spacing) * 2);
  padding-left: calc(var(--spacing) * 3);
  min-height: calc(var(--spacing) * 9);
  border-bottom-style: var(--tw-border-style);
  border-bottom-width: 1px;
  border-color: #222;
  overflow: hidden;
  white-space: nowrap;
}
.react-scan-replay-button,
.react-scan-close-button {
  display: flex;
  align-items: center;
  padding: calc(var(--spacing) * 1);
  min-width: -moz-fit-content;
  min-width: fit-content;
  border-radius: 4px;
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 300ms;
  transition-duration: 300ms;
}
.react-scan-replay-button {
  position: relative;
  overflow: hidden;
  background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 50%, transparent) !important;
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--color-purple-500) 50%, transparent) !important;
  }
  &:hover {
    background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 25%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-purple-500) 25%, transparent);
    }
  }
  &.disabled {
    opacity: 50%;
    pointer-events: none;
  }
  &:before {
    content: "";
    position: absolute;
    inset: calc(var(--spacing) * 0);
    --tw-translate-x: -100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
    animation: shimmer 2s infinite;
    background: linear-gradient(
      to right,
      transparent,
      rgba(142, 97, 227, 0.3),
      transparent
    );
  }
}
.react-scan-close-button {
  background-color: color-mix(in srgb, #fff 10%, transparent);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--color-white) 10%, transparent);
  }
  &:hover {
    background-color: color-mix(in srgb, #fff 15%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-white) 15%, transparent);
    }
  }
}
@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
.react-section-header {
  position: sticky;
  z-index: 100;
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
  padding-inline: calc(var(--spacing) * 3);
  height: calc(var(--spacing) * 7);
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #888;
  border-bottom-style: var(--tw-border-style);
  border-bottom-width: 1px;
  border-color: #222;
  background-color: #0a0a0a;
}
.react-scan-section {
  display: flex;
  flex-direction: column;
  padding-inline: calc(var(--spacing) * 2);
  color: #888;
  &::before {
    content: var(--tw-content);
    color: var(--color-gray-500);
  }
  &::before {
    --tw-content: attr(data-section);
    content: var(--tw-content);
  }
  font-size: var(--text-xs);
  line-height: var(--tw-leading, var(--text-xs--line-height));
  > .react-scan-property {
    margin-left: calc(14px * -1);
  }
}
.react-scan-property {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: calc(var(--spacing) * 8);
  border-left-style: var(--tw-border-style);
  border-left-width: 1px;
  border-color: transparent;
  overflow: hidden;
}
.react-scan-property-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: calc(var(--spacing) * 7);
  max-width: 100%;
  overflow: hidden;
}
.react-scan-string {
  color: #9ecbff;
}
.react-scan-number {
  color: #79c7ff;
}
.react-scan-boolean {
  color: #56b6c2;
}
.react-scan-key {
  width: -moz-fit-content;
  width: fit-content;
  max-width: calc(var(--spacing) * 60);
  white-space: nowrap;
  color: var(--color-white);
}
.react-scan-input {
  color: var(--color-white);
  background-color: var(--color-black);
}
@keyframes blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.react-scan-arrow {
  position: absolute;
  top: calc(var(--spacing) * 0);
  left: calc(var(--spacing) * 7);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: calc(var(--spacing) * 7);
  width: calc(var(--spacing) * 6);
  --tw-translate-x: -100%;
  translate: var(--tw-translate-x) var(--tw-translate-y);
  z-index: 10;
  > svg {
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
}
.react-scan-nested {
  position: relative;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    top: calc(var(--spacing) * 0);
    left: calc(var(--spacing) * 0);
    height: 100%;
    width: 1px;
    background-color: color-mix(in srgb, oklch(55.1% 0.027 264.364) 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-gray-500) 30%, transparent);
    }
  }
}
.react-scan-settings {
  position: absolute;
  inset: calc(var(--spacing) * 0);
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacing) * 4);
  padding-inline: calc(var(--spacing) * 4);
  padding-block: calc(var(--spacing) * 2);
  color: #888;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    --tw-duration: 300ms;
    transition-duration: 300ms;
  }
}
.react-scan-preview-line {
  position: relative;
  display: flex;
  min-height: calc(var(--spacing) * 7);
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
}
.react-scan-flash-overlay {
  position: absolute;
  inset: calc(var(--spacing) * 0);
  opacity: 0%;
  z-index: 50;
  pointer-events: none;
  transition-property: opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  mix-blend-mode: multiply;
  background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 90%, transparent);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--color-purple-500) 90%, transparent);
  }
}
.react-scan-toggle {
  position: relative;
  display: inline-flex;
  height: calc(var(--spacing) * 6);
  width: calc(var(--spacing) * 10);
  input {
    position: absolute;
    inset: calc(var(--spacing) * 0);
    z-index: 20;
    opacity: 0%;
    cursor: pointer;
    height: 100%;
    width: 100%;
  }
  input:checked {
    + div {
      background-color: #5f3f9a;
      &::before {
        --tw-translate-x: 100%;
        translate: var(--tw-translate-x) var(--tw-translate-y);
        left: auto;
        border-color: #5f3f9a;
      }
    }
  }
  > div {
    position: absolute;
    inset: calc(var(--spacing) * 1);
    background-color: var(--color-neutral-700);
    border-radius: calc(infinity * 1px);
    pointer-events: none;
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    --tw-duration: 300ms;
    transition-duration: 300ms;
    &:before {
      --tw-content: '';
      content: var(--tw-content);
      position: absolute;
      top: calc(1 / 2 * 100%);
      left: calc(var(--spacing) * 0);
      --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
      translate: var(--tw-translate-x) var(--tw-translate-y);
      height: calc(var(--spacing) * 4);
      width: calc(var(--spacing) * 4);
      background-color: var(--color-white);
      border-style: var(--tw-border-style);
      border-width: 2px;
      border-color: var(--color-neutral-700);
      border-radius: calc(infinity * 1px);
      --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
      transition-property: all;
      transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
      transition-duration: var(--tw-duration, var(--default-transition-duration));
      --tw-duration: 300ms;
      transition-duration: 300ms;
    }
  }
}
.react-scan-flash-active {
  opacity: 40%;
  transition-property: opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 300ms;
  transition-duration: 300ms;
}
.react-scan-inspector-overlay {
  display: flex;
  flex-direction: column;
  opacity: 0%;
  transition-property: opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 200ms;
  transition-duration: 200ms;
  --tw-ease: var(--ease-out);
  transition-timing-function: var(--ease-out);
  will-change: opacity;
  &.fade-out {
    opacity: 0%;
  }
  &.fade-in {
    opacity: 100%;
  }
}
.react-scan-what-changed {
  ul {
    list-style-type: disc;
    padding-left: calc(var(--spacing) * 4);
  }
  li {
    white-space: nowrap;
    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      -moz-column-gap: calc(var(--spacing) * 2);
           column-gap: calc(var(--spacing) * 2);
    }
  }
}
.count-badge {
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
  padding-inline: calc(var(--spacing) * 1.5);
  padding-block: calc(var(--spacing) * 0.5);
  border-radius: 4px;
  font-size: var(--text-xs);
  line-height: var(--tw-leading, var(--text-xs--line-height));
  --tw-font-weight: var(--font-weight-medium);
  font-weight: var(--font-weight-medium);
  color: #a855f7;
  --tw-numeric-spacing: tabular-nums;
  font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  background-color: color-mix(in oklab, #a855f7 10%, transparent);
  transform-origin: center;
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  transition-delay: 150ms;
  --tw-duration: 300ms;
  transition-duration: 300ms;
}
.count-flash {
  animation: countFlash .3s ease-out forwards;
}
.count-flash-white {
  animation: countFlashShake .3s ease-out forwards;
  transition-delay: 500ms !important;
}
.change-scope {
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 1);
       column-gap: calc(var(--spacing) * 1);
  color: #666;
  font-size: var(--text-xs);
  line-height: var(--tw-leading, var(--text-xs--line-height));
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  > div {
    padding-inline: calc(var(--spacing) * 1.5);
    padding-block: calc(var(--spacing) * 0.5);
    border-radius: 4px;
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
    transform-origin: center;
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    transition-delay: 150ms;
    --tw-duration: 300ms;
    transition-duration: 300ms;
    &[data-flash="true"] {
      background-color: color-mix(in oklab, #a855f7 10%, transparent);
      color: #a855f7;
    }
  }
}
.react-scan-slider {
  position: relative;
  min-height: calc(var(--spacing) * 6);
  > input {
    position: absolute;
    inset: calc(var(--spacing) * 0);
    opacity: 0%;
  }
  &:before {
    --tw-content: '';
    content: var(--tw-content);
    position: absolute;
    inset-inline: calc(var(--spacing) * 0);
    top: calc(1 / 2 * 100%);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    height: calc(var(--spacing) * 1.5);
    background-color: color-mix(in oklab, #8e61e3 40%, transparent);
    border-radius: var(--radius-lg);
    pointer-events: none;
  }
  &:after {
    --tw-content: '';
    content: var(--tw-content);
    position: absolute;
    inset-inline: calc(var(--spacing) * 0);
    inset-block: calc(var(--spacing) * -2);
    z-index: calc(10 * -1);
  }
  span {
    position: absolute;
    top: calc(1 / 2 * 100%);
    left: calc(var(--spacing) * 0);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    height: calc(var(--spacing) * 2.5);
    width: calc(var(--spacing) * 2.5);
    border-radius: var(--radius-lg);
    background-color: #8e61e3;
    pointer-events: none;
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    --tw-duration: 75ms;
    transition-duration: 75ms;
  }
}
.resize-v-line {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: calc(var(--spacing) * 1);
  min-width: calc(var(--spacing) * 1);
  height: 100%;
  width: 100%;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  &:hover,
  &:active {
    > span {
      background-color: #222;
    }
    svg {
      opacity: 100%;
    }
  }
  &::before {
    --tw-content: "";
    content: var(--tw-content);
    position: absolute;
    inset: calc(var(--spacing) * 0);
    left: calc(1 / 2 * 100%);
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    width: 1px;
    background-color: #222;
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  > span {
    position: absolute;
    top: calc(1 / 2 * 100%);
    left: calc(1 / 2 * 100%);
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    height: 18px;
    width: calc(var(--spacing) * 1.5);
    border-radius: 4px;
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  svg {
    position: absolute;
    top: calc(1 / 2 * 100%);
    left: calc(1 / 2 * 100%);
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    rotate: 90deg;
    color: var(--color-neutral-400);
    opacity: 0%;
    transition-property: opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    z-index: 50;
  }
}
.tree-node-search-highlight {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  span {
    padding-block: 1px;
    border-radius: var(--radius-sm);
    background-color: var(--color-yellow-300);
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
    color: var(--color-black);
  }
  .single {
    margin-right: 1px;
    padding-inline: 2px;
  }
  .regex {
    padding-inline: 2px;
  }
  .start {
    margin-left: 1px;
    border-top-left-radius: var(--radius-sm);
    border-bottom-left-radius: var(--radius-sm);
  }
  .end {
    margin-right: 1px;
    border-top-right-radius: var(--radius-sm);
    border-bottom-right-radius: var(--radius-sm);
  }
  .middle {
    margin-inline: 1px;
    border-radius: var(--radius-sm);
  }
}
.react-scan-toolbar-notification {
  position: absolute;
  inset-inline: calc(var(--spacing) * 0);
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
  padding: calc(var(--spacing) * 1);
  padding-left: calc(var(--spacing) * 2);
  font-size: 10px;
  color: var(--color-neutral-300);
  background-color: color-mix(in srgb, #000 90%, transparent);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--color-black) 90%, transparent);
  }
  transition-property: transform, translate, scale, rotate;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  &:before {
    --tw-content: '';
    content: var(--tw-content);
    position: absolute;
    inset-inline: calc(var(--spacing) * 0);
    background-color: var(--color-black);
    height: calc(var(--spacing) * 2);
  }
  &.position-top {
    top: 100%;
    --tw-translate-y: -100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
    border-bottom-right-radius: var(--radius-lg);
    border-bottom-left-radius: var(--radius-lg);
    &::before {
      top: calc(var(--spacing) * 0);
      --tw-translate-y: -100%;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  &.position-bottom {
    bottom: 100%;
    --tw-translate-y: 100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
    border-top-left-radius: var(--radius-lg);
    border-top-right-radius: var(--radius-lg);
    &::before {
      bottom: calc(var(--spacing) * 0);
      --tw-translate-y: 100%;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  &.is-open {
    --tw-translate-y: calc(var(--spacing) * 0);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.react-scan-header-item {
  position: absolute;
  inset: calc(var(--spacing) * 0);
  --tw-translate-y: calc(200% * -1);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  transition-property: transform, translate, scale, rotate;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 300ms;
  transition-duration: 300ms;
  &.is-visible {
    --tw-translate-y: calc(var(--spacing) * 0);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.react-scan-components-tree:has(.resize-v-line:hover, .resize-v-line:active)
  .tree {
  overflow: hidden;
}
.react-scan-expandable {
  display: grid;
  grid-template-rows: 0fr;
  overflow: hidden;
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 75ms;
  transition-duration: 75ms;
  transition-timing-function: ease-out;
  > * {
    min-height: 0;
  }
  &.react-scan-expanded {
    grid-template-rows: 1fr;
    transition-duration: 100ms;
  }
}
@property --tw-translate-x {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-y {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-z {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-scale-x {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-y {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-z {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-rotate-x {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-y {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-z {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-x {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-y {
  syntax: "*";
  inherits: false;
}
@property --tw-space-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-divide-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-leading {
  syntax: "*";
  inherits: false;
}
@property --tw-font-weight {
  syntax: "*";
  inherits: false;
}
@property --tw-tracking {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-inset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ring-inset {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-offset-width {
  syntax: "<length>";
  inherits: false;
  initial-value: 0px;
}
@property --tw-ring-offset-color {
  syntax: "*";
  inherits: false;
  initial-value: #fff;
}
@property --tw-ring-offset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-outline-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-drop-shadow-size {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-duration {
  syntax: "*";
  inherits: false;
}
@property --tw-ease {
  syntax: "*";
  inherits: false;
}
@property --tw-content {
  syntax: "*";
  initial-value: "";
  inherits: false;
}
@property --tw-ordinal {
  syntax: "*";
  inherits: false;
}
@property --tw-slashed-zero {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-figure {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-spacing {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-fraction {
  syntax: "*";
  inherits: false;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes countFlash {
  0% {
    background-color: rgba(168, 85, 247, 0.3);
    transform: scale(1.05);
  }
  100% {
    background-color: rgba(168, 85, 247, 0.1);
    transform: scale(1);
  }
}
@keyframes countFlashShake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px) scale(1.1);
  }
  75% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
  }
}
@layer properties {
  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {
    *, ::before, ::after, ::backdrop {
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-translate-z: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-scale-z: 1;
      --tw-rotate-x: initial;
      --tw-rotate-y: initial;
      --tw-rotate-z: initial;
      --tw-skew-x: initial;
      --tw-skew-y: initial;
      --tw-space-y-reverse: 0;
      --tw-divide-y-reverse: 0;
      --tw-border-style: solid;
      --tw-leading: initial;
      --tw-font-weight: initial;
      --tw-tracking: initial;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-color: initial;
      --tw-shadow-alpha: 100%;
      --tw-inset-shadow: 0 0 #0000;
      --tw-inset-shadow-color: initial;
      --tw-inset-shadow-alpha: 100%;
      --tw-ring-color: initial;
      --tw-ring-shadow: 0 0 #0000;
      --tw-inset-ring-color: initial;
      --tw-inset-ring-shadow: 0 0 #0000;
      --tw-ring-inset: initial;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-outline-style: solid;
      --tw-blur: initial;
      --tw-brightness: initial;
      --tw-contrast: initial;
      --tw-grayscale: initial;
      --tw-hue-rotate: initial;
      --tw-invert: initial;
      --tw-opacity: initial;
      --tw-saturate: initial;
      --tw-sepia: initial;
      --tw-drop-shadow: initial;
      --tw-drop-shadow-color: initial;
      --tw-drop-shadow-alpha: 100%;
      --tw-drop-shadow-size: initial;
      --tw-backdrop-blur: initial;
      --tw-backdrop-brightness: initial;
      --tw-backdrop-contrast: initial;
      --tw-backdrop-grayscale: initial;
      --tw-backdrop-hue-rotate: initial;
      --tw-backdrop-invert: initial;
      --tw-backdrop-opacity: initial;
      --tw-backdrop-saturate: initial;
      --tw-backdrop-sepia: initial;
      --tw-duration: initial;
      --tw-ease: initial;
      --tw-content: "";
      --tw-ordinal: initial;
      --tw-slashed-zero: initial;
      --tw-numeric-figure: initial;
      --tw-numeric-spacing: initial;
      --tw-numeric-fraction: initial;
    }
  }
}
`,si=async e=>{try{let t=await iV(e),r=`${t.htmlPreview}${t.stackString}`;if(!r.trim())return!1;return await navigator.clipboard.writeText(r),!0}catch{return!1}},sa=tx(()=>a3("absolute inset-0 flex items-center gap-x-2","translate-y-0","transition-transform duration-300",oi.value&&"-translate-y-[200%]")),so=()=>{let e=e0(null),t=e0(null),[r,n]=eK(null);tW(()=>{let e=c1.inspectState.value;"focused"===e.kind&&n(e.fiber)}),tW(()=>{let r=ov.value;ti(()=>{var n,i;let a;if("focused"!==c1.inspectState.value.kind||!e.current||!t.current)return;let{totalUpdates:o,currentIndex:l,updates:s,isVisible:c,windowOffset:d}=r,u=Math.max(0,o-1),p=c?`#${d+l} Re-render`:u>0?`\xd7${u}`:"";if(u>0&&l>=0&&l<s.length){let e=null==(i=null==(n=s[l])?void 0:n.fiberInfo)?void 0:i.selfTime;a=e>0?e<.1-Number.EPSILON?"< 0.1ms":`${Number(e.toFixed(1))}ms`:void 0}e.current.dataset.text=p?` \u2022 ${p}`:"",t.current.dataset.text=a?` \u2022 ${a}`:""})});let i=e1(()=>{if(!r)return null;let{name:e,wrappers:t,wrapperTypes:n}=oe(r),i=t.length?`${t.join("(")}(${e})${")".repeat(t.length)}`:null!=e?e:"",a=n[0];return ra("span",{title:i,className:"flex items-center gap-x-1",children:[null!=e?e:"Unknown",ra("span",{title:null==a?void 0:a.title,className:"flex items-center gap-x-1 text-[10px] text-purple-400",children:!!a&&ra(ex,{children:[ra("span",{className:a3("rounded py-[1px] px-1","truncate",a.compiler&&"bg-purple-800 text-neutral-400",!a.compiler&&"bg-neutral-700 text-neutral-300","memo"===a.type&&"bg-[#5f3f9a] text-white"),children:a.type},a.type),a.compiler&&ra("span",{className:"text-yellow-300",children:"✨"})]})}),n.length>1&&ra("span",{className:"text-[10px] text-neutral-400",children:["×",n.length-1]})]})},[r]);return ra("div",{className:sa,children:[i,ra("div",{className:"flex items-center gap-x-2 mr-auto text-xs text-[#888]",children:[ra("span",{ref:e,className:"with-data-text cursor-pointer !overflow-visible",title:"Click to toggle between rerenders and total renders"}),ra("span",{ref:t,className:"with-data-text !overflow-visible"})]})]})},sl=()=>{let e=((e,t,r=t)=>{let[n,i]=eK(e);return eZ(()=>{if(e===n)return;let a=setTimeout(()=>i(e),e?t:r);return()=>clearTimeout(a)},[e,t,r]),n})("focused"===c1.inspectState.value.kind,150,0),t=tF(!1),r=()=>{oc.value={view:"none"},c1.inspectState.value={kind:"inspect-off"}},n=async()=>{let e=c1.inspectState.value;"focused"!==e.kind||!e.focusedDomElement||await si(e.focusedDomElement)&&(t.value=!0,setTimeout(()=>{t.value=!1,r()},600))},i=e0(n);if(i.current=n,eZ(()=>{let e=e=>{var t;let r,n=c1.inspectState.value;!("focused"!==n.kind||!n.focusedDomElement||"u">typeof window&&window.__REACT_GRAB__)&&(e.metaKey||e.ctrlKey)&&!e.shiftKey&&!e.altKey&&("c"===e.key||"KeyC"===e.code)&&((()=>{let e=document.activeElement;if(!e)return!1;let t=e.tagName;return!!("INPUT"===t||"TEXTAREA"===t||"SELECT"===t||e instanceof HTMLElement&&e.isContentEditable)})()||(r=null==(t=window.getSelection)?void 0:t.call(window))&&r.toString().length>0||(e.preventDefault(),e.stopImmediatePropagation(),i.current()))};return document.addEventListener("keydown",e,{capture:!0}),()=>{document.removeEventListener("keydown",e,{capture:!0})}},[]),"notifications"===oc.value.view)return;let a="focused"===c1.inspectState.value.kind,o=(()=>{if("u"<typeof navigator)return!1;let e=navigator.platform||"";return e?/Mac|iPhone|iPad|iPod/i.test(e):/Mac|iPhone|iPad|iPod/i.test(navigator.userAgent)})()?"⌘C":"Ctrl+C";return ra("div",{className:"react-scan-header",children:[ra("div",{className:"relative flex-1 h-full",children:ra("div",{className:a3("react-scan-header-item is-visible",!e&&"!duration-0"),children:ra(so,{})})}),a&&ra("button",{type:"button",title:`Copy element (${o})`,className:"react-scan-close-button",onClick:n,children:ra(i1,{name:t.value?"icon-check":"icon-copy",className:a3(t.value&&"text-green-500")})}),ra("button",{type:"button",title:"Close",className:"react-scan-close-button",onClick:r,children:ra(i1,{name:"icon-close"})})]})},ss=({className:e,...t})=>ra("div",{className:a3("react-scan-toggle",e),children:[ra("input",{type:"checkbox",...t}),ra("div",{})]}),sc=({fps:e})=>ra("div",{className:a3("flex items-center gap-x-1 px-2 w-full","h-6","rounded-md","font-mono leading-none","bg-[#141414]","ring-1 ring-white/[0.08]"),children:[ra("div",{style:{color:e<30?"#EF4444":e<50?"#F59E0B":"rgb(214,132,245)"},className:"text-sm font-semibold tracking-wide transition-colors ease-in-out w-full flex justify-center items-center",children:e}),ra("span",{className:"text-white/30 text-[11px] font-medium tracking-wide ml-auto min-w-fit",children:"FPS"})]}),sd=()=>{let[e,t]=eK(null);return eZ(()=>{let e=setInterval(()=>{t(lA())},200);return()=>clearInterval(e)},[]),ra("div",{className:a3("flex items-center justify-end gap-x-2 px-1 ml-1 w-[72px]","whitespace-nowrap text-sm text-white"),children:null===e?ra(ex,{children:"️"}):ra(sc,{fps:e})})},su=e=>{},sp=class e extends Array{constructor(e=25){super(),iJ(this,"capacity",e)}push(...e){let t=super.push(...e);for(;this.length>this.capacity;)this.shift();return t}static fromArray(t,r){let n=new e(r);return n.push(...t),n}},sh=new class{constructor(e){iJ(this,"subscribers",new Set),iJ(this,"currentValue"),this.currentValue=e}subscribe(e){return this.subscribers.add(e),e(this.currentValue),()=>{this.subscribers.delete(e)}}setState(e){this.currentValue=e,this.subscribers.forEach(t=>t(e))}getCurrentState(){return this.currentValue}}(new sp(150)),sm=new class{constructor(){iJ(this,"channels",{})}publish(e,t,r=!0){let n=this.channels[t];if(!n){if(!r)return;this.channels[t]={callbacks:new sp(50),state:new sp(50)},this.channels[t].state.push(e);return}n.state.push(e),n.callbacks.forEach(t=>t(e))}getAvailableChannels(){return sp.fromArray(Object.keys(this.channels),50)}subscribe(e,t,r=!1){let n=()=>(r||this.channels[e].state.forEach(e=>{t(e)}),()=>{let r=this.channels[e].callbacks.filter(e=>e!==t);this.channels[e].callbacks=sp.fromArray(r,50)}),i=this.channels[e];return i?i.callbacks.push(t):(this.channels[e]={callbacks:new sp(50),state:new sp(50)},this.channels[e].callbacks.push(t)),n()}updateChannelState(e,t,r=!0){let n=this.channels[e];if(!n){if(!r)return;let n=new sp(50),i={callbacks:new sp(50),state:n};this.channels[e]=i,i.state=t(n);return}n.state=t(n.state)}getChannelState(e){var t;return null!=(t=this.channels[e].state)?t:new sp(50)}},sf={skipProviders:!0,skipHocs:!0,skipContainers:!0,skipMinified:!0,skipUtilities:!0,skipBoundaries:!0},sg=[/Provider$/,/^Provider$/,/^Context$/],sv=[/^with[A-Z]/,/^forward(?:Ref)?$/i,/^Forward(?:Ref)?\(/],sw=[/^(?:App)?Container$/,/^Root$/,/^ReactDev/],sb=[/^Fragment$/,/^Suspense$/,/^ErrorBoundary$/,/^Portal$/,/^Consumer$/,/^Layout$/,/^Router/,/^Hydration/],sx=[/^Boundary$/,/Boundary$/,/^Provider$/,/Provider$/],sy=(e,t=sf)=>{let r=[];return t.skipProviders&&r.push(...sg),t.skipHocs&&r.push(...sv),t.skipContainers&&r.push(...sw),t.skipUtilities&&r.push(...sb),t.skipBoundaries&&r.push(...sx),!r.some(t=>t.test(e))},sk=[/^[a-z]$/,/^[a-z][0-9]$/,/^_+$/,/^[A-Za-z][_$]$/,/^[a-z]{1,2}$/],s_=e=>{var t,r;for(let t=0;t<sk.length;t++)if(sk[t].test(e))return!0;let n=!/[aeiou]/i.test(e),i=(null!=(r=null==(t=e.match(/\d/g))?void 0:t.length)?r:0)>e.length/2,a=/^[a-z]+$/.test(e),o=/[$_]{2,}/.test(e);return Number(n)+Number(i)+Number(a)+Number(o)>=2},sN=e=>{let t=z(e);return t?t.replace(/^(?:Memo|Forward(?:Ref)?|With.*?)\((?<inner>.*?)\)$/,"$<inner>"):""},sS="never-hidden",sE=null,sT=new sp(25),sC=(e,t)=>{let r=null,n=t=>{switch(e){case"pointer":if("start"===t.phase)return"pointerup";if(t.target instanceof HTMLInputElement||t.target instanceof HTMLSelectElement)return"change";return"click";case"keyboard":if("start"===t.phase)return"keydown";return"change"}},i={current:{kind:"uninitialized-stage",interactionUUID:iQ(),stageStart:Date.now(),interactionType:e}},a=r=>{var a,l;if(r.composedPath().some(e=>e instanceof Element&&"react-scan-toolbar-root"===e.id)||(Date.now()-i.current.stageStart>2e3&&(i.current={kind:"uninitialized-stage",interactionUUID:iQ(),stageStart:Date.now(),interactionType:e}),"uninitialized-stage"!==i.current.kind))return;let s=performance.now();null==(a=null==t?void 0:t.onStart)||a.call(t,i.current.interactionUUID);let c=(e=>{var t;let r=oZ(e);if(!r)return;let n=r?z(null==r?void 0:r.type):"N/A";if(n||(n=null!=(t=((e,t=()=>!0)=>{let r=e;for(;r;){let e=z(r.type);if(e&&t(e))return e;r=r.return}return null})(r,e=>e.length>2))?t:"N/A"),n)return{componentPath:((e,t=sf)=>{if(!e||!z(e.type))return[];let r=[],n=e;for(;n.return;){let e=sN(n.type);e&&!s_(e)&&sy(e,t)&&e.toLowerCase()!==e&&r.push(e),n=n.return}let i=Array(r.length);for(let e=0;e<r.length;e++)i[e]=r[r.length-e-1];return i})(r),childrenTree:{},componentName:n,elementFiber:r}})(r.target);if(!c){null==(l=null==t?void 0:t.onError)||l.call(t,i.current.interactionUUID);return}let d={},u=s$(d);i.current={...i.current,interactionType:e,blockingTimeStart:Date.now(),childrenTree:c.childrenTree,componentName:c.componentName,componentPath:c.componentPath,fiberRenders:d,kind:"interaction-start",interactionStartDetail:s,stopListeningForRenders:u};let p=n({phase:"end",target:r.target});document.addEventListener(p,o,{once:!0}),requestAnimationFrame(()=>{document.removeEventListener(p,o)})};document.addEventListener(n({phase:"start"}),a,{capture:!0});let o=(n,a,o)=>{var l;if("interaction-start"!==i.current.kind&&a===r){if("pointer"===e&&n.target instanceof HTMLSelectElement){i.current={kind:"uninitialized-stage",interactionUUID:iQ(),stageStart:Date.now(),interactionType:e};return}null==(l=null==t?void 0:t.onError)||l.call(t,i.current.interactionUUID),i.current={kind:"uninitialized-stage",interactionUUID:iQ(),stageStart:Date.now(),interactionType:e},su("pointer -> click");return}r=a,(({onMicroTask:e,onRAF:t,onTimeout:r,abort:n})=>{queueMicrotask(()=>{(null==n?void 0:n())===!0||e()&&requestAnimationFrame(()=>{(null==n?void 0:n())===!0||t()&&setTimeout(()=>{(null==n?void 0:n())!==!0&&r()},0)})})})({abort:o,onMicroTask:()=>"uninitialized-stage"!==i.current.kind&&(i.current={...i.current,kind:"js-end-stage",jsEndDetail:performance.now()},!0),onRAF:()=>{var r;return"js-end-stage"!==i.current.kind&&"raf-stage"!==i.current.kind?(null==(r=null==t?void 0:t.onError)||r.call(t,i.current.interactionUUID),su("bad transition to raf"),i.current={kind:"uninitialized-stage",interactionUUID:iQ(),stageStart:Date.now(),interactionType:e},!1):(i.current={...i.current,kind:"raf-stage",rafStart:performance.now()},!0)},onTimeout:()=>{var r;if("raf-stage"!==i.current.kind){null==(r=null==t?void 0:t.onError)||r.call(t,i.current.interactionUUID),i.current={kind:"uninitialized-stage",interactionUUID:iQ(),stageStart:Date.now(),interactionType:e},su("raf->timeout");return}let n=Date.now(),a=Object.freeze({...i.current,kind:"timeout-stage",blockingTimeEnd:n,commitEnd:performance.now()});i.current={kind:"uninitialized-stage",interactionUUID:iQ(),stageStart:n,interactionType:e};let o=!1,l=e=>{var r;o=!0;let n={detailedTiming:a,latency:"auto-complete-race"===e.kind?e.detailedTiming.commitEnd-e.detailedTiming.interactionStartDetail:e.entry.latency,completedAt:Date.now(),flushNeeded:!0};null==(r=null==t?void 0:t.onComplete)||r.call(t,a.interactionUUID,n,e);let i=sT.filter(e=>e.interactionUUID!==a.interactionUUID);return sT=sp.fromArray(i,25),n},s={completeInteraction:l,endDateTime:Date.now(),startDateTime:a.blockingTimeStart,type:e,interactionUUID:a.interactionUUID};if(sT.push(s),sA())setTimeout(()=>{if(o)return;l({kind:"auto-complete-race",detailedTiming:a,interactionUUID:a.interactionUUID});let e=sT.filter(e=>e.interactionUUID!==a.interactionUUID);sT=sp.fromArray(e,25)},1e3);else{let e=sT.filter(e=>e.interactionUUID!==a.interactionUUID);sT=sp.fromArray(e,25),l({kind:"auto-complete-race",detailedTiming:a,interactionUUID:a.interactionUUID})}}})},l=e=>{let t=iQ();o(e,t,()=>t!==r)};return"keyboard"===e&&document.addEventListener("keypress",l),()=>{document.removeEventListener(n({phase:"start"}),a,{capture:!0}),document.removeEventListener("keypress",l)}},sz=e=>{var t;return null==(t=_(e,e=>{if(w(e))return!0}))?void 0:t.stateNode},sA=()=>"PerformanceEventTiming"in globalThis,s$=e=>{let t=t=>{var r,n,i,a,o,l,s;let c=z(t.type);if(!c)return;let d=e[c];if(!d){let n=new Set,i=t.return&&o1(t.return),a=i&&z(i[0]);a&&n.add(a);let{selfTime:o,totalTime:l}=E(t),s=l_(t),d={current:[],changes:new Set,changesCounts:new Map},u={fiberProps:s.fiberProps||d,fiberState:s.fiberState||d,fiberContext:s.fiberContext||d};e[c]={renderCount:1,hasMemoCache:T(t),wasFiberRenderMount:sR(t),parents:n,selfTime:o,totalTime:l,nodeInfo:[{element:sz(t),name:null!=(r=z(t.type))?r:"Unknown",selfTime:E(t).selfTime}],changes:u};return}if(null==(i=null==(n=o1(t))?void 0:n[0])?void 0:i.type){let e=t.return&&o1(t.return),r=e&&z(e[0]);r&&d.parents.add(r)}let{selfTime:u,totalTime:p}=E(t),h=l_(t),m={current:[],changes:new Set,changesCounts:new Map};d.wasFiberRenderMount=d.wasFiberRenderMount||sR(t),d.hasMemoCache=d.hasMemoCache||T(t),d.changes={fiberProps:sM((null==(a=d.changes)?void 0:a.fiberProps)||m,h.fiberProps||m),fiberState:sM((null==(o=d.changes)?void 0:o.fiberState)||m,h.fiberState||m),fiberContext:sM((null==(l=d.changes)?void 0:l.fiberContext)||m,h.fiberContext||m)},d.renderCount+=1,d.selfTime+=u,d.totalTime+=p,d.nodeInfo.push({element:sz(t),name:null!=(s=z(t.type))?s:"Unknown",selfTime:E(t).selfTime})};return c1.interactionListeningForRenders=t,()=>{c1.interactionListeningForRenders===t&&(c1.interactionListeningForRenders=null)}},sM=(e,t)=>{let r={current:[...e.current],changes:new Set,changesCounts:new Map};for(let e of t.current)r.current.some(t=>t.name===e.name)||r.current.push(e);for(let n of t.changes)if("string"==typeof n||"number"==typeof n){r.changes.add(n);let i=e.changesCounts.get(n)||0,a=t.changesCounts.get(n)||0;r.changesCounts.set(n,i+a)}return r},sR=e=>{if(!e.alternate)return!0;let t=e.alternate,r=t&&null!=t.memoizedState&&null!=t.memoizedState.element&&!0!==t.memoizedState.isDehydrated,n=null!=e.memoizedState&&null!=e.memoizedState.element&&!0!==e.memoizedState.isDehydrated;return!r&&n},sF=e=>{let t,r=new Set,n=(e,n)=>{let i="function"==typeof e?e(t):e;if(!Object.is(i,t)){let e=t;t=(null!=n?n:"object"!=typeof i||null===i)?i:Object.assign({},t,i),r.forEach(r=>r(t,e))}},i=()=>t,a={setState:n,getState:i,getInitialState:()=>o,subscribe:(e,n)=>{let i,a;n?(i=e,a=n):a=e;let o=i?i(t):void 0,l=(e,t)=>{if(i){let r=i(e),n=i(t);Object.is(o,r)||(o=r,a(r,n))}else a(e,t)};return r.add(l),()=>r.delete(l)}},o=t=e(n,i,a);return a},sO=e=>e?sF(e):sF,sj=null;sO()(e=>({state:{events:[]},actions:{addEvent:t=>{e(e=>({state:{events:[...e.state.events,t]}}))},clear:()=>{e({state:{events:[]}})}}}));var sD=sO()((e,t)=>{let r=new Set;return{state:{events:new sp(200)},actions:{addEvent:n=>{r.forEach(e=>e(n));let i=[...t().state.events,n],a=new Set;i.forEach(e=>{if("interaction"!==e.kind){let t;(t=i.find(t=>{if("long-render"!==t.kind&&t.id!==e.id&&(e.data.startAt<=t.data.startAt&&e.data.endAt<=t.data.endAt&&e.data.endAt>=t.data.startAt||t.data.startAt<=e.data.startAt&&t.data.endAt>=e.data.startAt||e.data.startAt<=t.data.startAt&&e.data.endAt>=t.data.endAt))return!0}))&&(()=>{a.add(e.id)})(t)}});let o=i.filter(e=>!a.has(e.id));e(()=>({state:{events:sp.fromArray(o,200)}}))},addListener:e=>(r.add(e),()=>{r.delete(e)}),clear:()=>{e({state:{events:new sp(200)}})}}}}),sL=null,sP=null,sI=null,sW=[],sU=e=>{var t;let r=e.filter(e=>e.length>2);return 0===r.length?null!=(t=e.at(-1))?t:"Unknown":r.at(-1)},sH=e=>{switch(e.kind){case"interaction":{let{renderTime:t,otherJSTime:r,framePreparation:n,frameConstruction:i,frameDraw:a}=e;return t+r+n+i+(null!=a?a:0)}case"dropped-frames":return e.otherTime+e.renderTime}},sB=e=>{let t=sH(e.timing);switch(e.kind){case"interaction":if(t<200)return"low";if(t<500)return"needs-improvement";return"high";case"dropped-frames":if(t<50)return"low";if(t<150)return"needs-improvement";return"high"}},sV=ej(null),sq=({size:e=24,className:t})=>ra("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:a3(["lucide lucide-chevron-right",t]),children:ra("path",{d:"m9 18 6-6-6-6"})}),sG=({className:e="",size:t=24,events:r=[]})=>{let n=r.includes(!0),i=r.filter(e=>e).length,a=n?Math.max(.6*t,14):Math.max(.4*t,6);return ra("div",{className:"relative",children:[ra("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:`lucide lucide-bell ${e}`,children:[ra("path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}),ra("path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"})]}),r.length>0&&i>0&&c2.options.value.showNotificationCount&&ra("div",{className:a3(["absolute",n?"-top-2.5 -right-2.5":"-top-1 -right-1","rounded-full","flex items-center justify-center","text-[8px] font-medium text-white","aspect-square",n?"bg-red-500/90":"bg-purple-500/90"]),style:{width:`${a}px`,height:`${a}px`,padding:n?"0.5px":"0"},children:n&&(i>99?">99":i)})]})},sJ=({className:e="",size:t=24})=>ra("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[ra("path",{d:"M18 6 6 18"}),ra("path",{d:"m6 6 12 12"})]}),sY=({className:e="",size:t=24})=>ra("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[ra("path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}),ra("path",{d:"M16 9a5 5 0 0 1 0 6"}),ra("path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"})]}),sX=({className:e="",size:t=24})=>ra("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[ra("path",{d:"M16 9a5 5 0 0 1 .95 2.293"}),ra("path",{d:"M19.364 5.636a9 9 0 0 1 1.889 9.96"}),ra("path",{d:"m2 2 20 20"}),ra("path",{d:"m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"}),ra("path",{d:"M9.828 4.172A.686.686 0 0 1 11 4.657v.686"})]}),sK=({size:e=24,className:t})=>ra("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:a3(["lucide lucide-arrow-left",t]),children:[ra("path",{d:"m12 19-7-7 7-7"}),ra("path",{d:"M19 12H5"})]}),sZ=({className:e="",size:t=24})=>ra("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[ra("path",{d:"M14 4.1 12 6"}),ra("path",{d:"m5.1 8-2.9-.8"}),ra("path",{d:"m6 12-1.9 2"}),ra("path",{d:"M7.2 2.2 8 5.1"}),ra("path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"})]}),sQ=({className:e="",size:t=24})=>ra("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[ra("path",{d:"M10 8h.01"}),ra("path",{d:"M12 12h.01"}),ra("path",{d:"M14 8h.01"}),ra("path",{d:"M16 12h.01"}),ra("path",{d:"M18 8h.01"}),ra("path",{d:"M6 8h.01"}),ra("path",{d:"M7 16h10"}),ra("path",{d:"M8 12h.01"}),ra("rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"})]}),s0=({className:e="",size:t=24})=>ra("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,style:{transform:"rotate(180deg)"},children:[ra("circle",{cx:"12",cy:"12",r:"10"}),ra("path",{d:"m4.9 4.9 14.2 14.2"})]}),s1=({className:e="",size:t=24})=>ra("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[ra("polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7"}),ra("polyline",{points:"16 17 22 17 22 11"})]}),s2=({children:e,triggerContent:t,wrapperProps:r})=>{var n;let[i,a]=eK("closed"),[o,l]=eK(null),[s,c]=eK({width:window.innerWidth,height:window.innerHeight}),d=e0(null),u=e0(null),p=e5(cG),h=e0(!1);eZ(()=>{let e=()=>{c({width:window.innerWidth,height:window.innerHeight}),m()};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);let m=()=>{if(d.current&&p){let e=d.current.getBoundingClientRect(),t=p.getBoundingClientRect(),r=e.left+e.width/2,n=e.top;l(new DOMRect(r-t.left,n-t.top,e.width,e.height))}};eZ(()=>{m()},[d.current]),eZ(()=>{if("opening"===i){let e=setTimeout(()=>a("open"),120);return()=>clearTimeout(e)}if("closing"===i){let e=setTimeout(()=>a("closed"),120);return()=>clearTimeout(e)}},[i]),eZ(()=>{let e=setInterval(()=>{h.current||"closed"===i||a("closing")},1e3);return()=>clearInterval(e)},[i]);let f=(()=>{var e;if(!o||!p)return{top:0,left:0};let t=p.getBoundingClientRect(),r=(null==(e=u.current)?void 0:e.offsetHeight)||40,n=o.x+t.left,i=o.y+t.top,a=n,l=i-4;return a-87.5<5?a=92.5:a+87.5>s.width-5&&(a=s.width-5-87.5),l-r<5&&(l=i+o.height+4),{top:l-t.top,left:a-t.left}})();return ra(ex,{children:[p&&o&&"closed"!==i&&((n=ew(t5,{__v:ra("div",{ref:u,className:a3(["absolute z-100 bg-white text-black rounded-lg px-3 py-2 shadow-lg","transition-[opacity] duration-120 ease-out",'after:content-[""] after:absolute after:top-[100%]',"after:left-1/2 after:-translate-x-1/2","after:w-[10px] after:h-[6px]","after:border-l-[5px] after:border-l-transparent","after:border-r-[5px] after:border-r-transparent","after:border-t-[6px] after:border-t-white","pointer-events-none","opening"===i||"closing"===i?"opacity-0":"opacity-100"]),style:{top:f.top+"px",left:f.left+"px",transform:`translate(-50%, calc(-100% - 4px)) scale(${"open"===i?1:.97})`,minWidth:"175px",willChange:"opacity, transform"},children:e}),h:p})).containerInfo=p,n),ra("div",{ref:d,onMouseEnter:()=>{h.current=!0,m(),a("opening")},onMouseLeave:()=>{h.current=!1,m(),a("closing")},...r,children:t})]})},s5=({selectedEvent:e})=>{let{notificationState:t,setNotificationState:r,setRoute:n}=e5(sV);return ra("div",{className:a3(["flex w-full justify-between items-center px-3 py-2 text-xs"]),children:[ra("div",{className:a3(["bg-[#18181B] flex items-center gap-x-1 p-1 rounded-sm"]),children:[ra("button",{onClick:()=>{n({route:"render-visualization",routeMessage:null})},className:a3(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1","render-visualization"===t.route||"render-explanation"===t.route?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:"Ranked"}),ra("button",{onClick:()=>{n({route:"other-visualization",routeMessage:null})},className:a3(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1","other-visualization"===t.route?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:"Overview"}),ra("button",{onClick:()=>{n({route:"optimize",routeMessage:null})},className:a3(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1","optimize"===t.route?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:ra("span",{children:"Prompts"})})]}),ra(s2,{triggerContent:ra("button",{onClick:()=>{r(e=>{e.audioNotificationsOptions.enabled&&"closed"!==e.audioNotificationsOptions.audioContext.state&&e.audioNotificationsOptions.audioContext.close();let t=e.audioNotificationsOptions.enabled;localStorage.setItem("react-scan-notifications-audio",String(!t));let r=new AudioContext;return e.audioNotificationsOptions.enabled||i0(r),t&&r.close(),{...e,audioNotificationsOptions:t?{audioContext:null,enabled:!1}:{audioContext:r,enabled:!0}}})},className:"ml-auto",children:ra("div",{className:a3(["flex gap-x-2 justify-center items-center text-[#6E6E77]"]),children:[ra("span",{children:"Alerts"}),t.audioNotificationsOptions.enabled?ra(sY,{size:16,className:"text-[#6E6E77]"}):ra(sX,{size:16,className:"text-[#6E6E77]"})]})}),children:ra(ex,{children:"Play a chime when a slowdown is recorded"})})]})},s4=e=>{let t="";return e.toSorted((e,t)=>t.totalTime-e.totalTime).slice(0,30).filter(e=>e.totalTime>5).forEach(e=>{let r="";r+="Component Name:",r+=e.name,r+="\n",r+=`Rendered: ${e.count} times
`,r+=`Sum of self times for ${e.name} is ${e.totalTime.toFixed(0)}ms
`,e.changes.props.length>0&&(r+=`Changed props for all ${e.name} instances ("name:count" pairs)
`,e.changes.props.forEach(e=>{r+=`${e.name}:${e.count}x
`})),e.changes.state.length>0&&(r+=`Changed state for all ${e.name} instances ("hook index:count" pairs)
`,e.changes.state.forEach(e=>{r+=`${e.index}:${e.count}x
`})),e.changes.context.length>0&&(r+=`Changed context for all ${e.name} instances ("context display name (if exists):count" pairs)
`,e.changes.context.forEach(e=>{r+=`${e.name}:${e.count}x
`})),t+=r,t+="\n"}),t},s3=(e,t)=>(()=>{switch(e){case"data":switch(t.kind){case"dropped-frames":return(({renderTime:e,otherTime:t,formattedReactData:r})=>`I will provide you with a set of high level, and low level performance data about a large frame drop in a React App:
### High level
- react component render time: ${e.toFixed(0)}ms
- how long it took to run everything else (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${t}ms

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${r}`)({formattedReactData:s4(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),otherTime:t.timing.otherTime});case"interaction":return(({renderTime:e,eHandlerTimeExcludingRenders:t,toRafTime:r,commitTime:n,framePresentTime:i,formattedReactData:a})=>`I will provide you with a set of high level, and low level performance data about an interaction in a React App:
### High level
- react component render time: ${e.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${t.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${r.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${n.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${null===i?"":`- how long it took from dom commit for the frame to be presented: ${i.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${a}`)({commitTime:t.timing.frameConstruction,eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:s4(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),toRafTime:t.timing.framePreparation})}case"explanation":switch(t.kind){case"dropped-frames":return(({renderTime:e,otherTime:t,formattedReactData:r})=>`Your goal will be to help me find the source of a performance problem in a React App. I collected a large dataset about this specific performance problem.

We have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown

- react component render time: ${e.toFixed(0)}ms
- other time (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${t}ms


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${r}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could have been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one, and this can add significant overhead when thousands of effects ran.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`)({formattedReactData:s4(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),otherTime:t.timing.otherTime});case"interaction":return(({interactionType:e,name:t,time:r,renderTime:n,eHandlerTimeExcludingRenders:i,toRafTime:a,commitTime:o,framePresentTime:l,formattedReactData:s})=>`Your goal will be to help me find the source of a performance problem. I collected a large dataset about this specific performance problem.

There was a ${e} on a component named ${t}. This means, roughly, the component that handled the ${e} event was named ${t}.

We have a set of high level, and low level data about the performance issue.

The click took ${r.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${n.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${i.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${a.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${o.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${null===l?"":`- how long it took from dom commit for the frame to be presented: ${l.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${s}


You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could have been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`)({commitTime:t.timing.frameConstruction,eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:s4(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,interactionType:t.type,name:sU(t.componentPath),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),time:sH(t.timing),toRafTime:t.timing.framePreparation})}case"fix":switch(t.kind){case"dropped-frames":return(({renderTime:e,otherTime:t,formattedReactData:r})=>`You will attempt to implement a performance improvement to a large slowdown in a react app

Your should split your goals into 2 parts:
- identifying the problem
- fixing the problem
	- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.

Make sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components

One challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:
- you can try to work around the problem, knowing which module is slow
- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code
- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)
- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)


We have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown

- react component render time: ${e.toFixed(0)}ms
- other time: ${t}ms


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${r}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could have been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

If renders don't seem to be the problem, see if there are any expensive CSS properties being added/mutated, or any expensive DOM Element mutations/new elements being created that could cause this slowdown. 
`)({formattedReactData:s4(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),otherTime:t.timing.otherTime});case"interaction":return(({interactionType:e,name:t,componentPath:r,time:n,renderTime:i,eHandlerTimeExcludingRenders:a,toRafTime:o,commitTime:l,framePresentTime:s,formattedReactData:c})=>`You will attempt to implement a performance improvement to a user interaction in a React app. You will be provided with data about the interaction, and the slow down.

Your should split your goals into 2 parts:
- identifying the problem
- fixing the problem
	- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.


Make sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components

One challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:
- you can try to work around the problem, knowing which module is slow
- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code
- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)
- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)

The interaction was a ${e} on the component named ${t}. This component has the following ancestors ${r}. This is the path from the component, to the root. This should be enough information to figure out where this component is in the user's code base

This path is the component that was clicked, so it should tell you roughly where component had an event handler that triggered a state change.

Please note that the leaf node of this path might not be user code (if they use a UI library), and they may contain many wrapper components that just pass through children that aren't relevant to the actual click. So make you sure analyze the path and understand what the user code is doing

We have a set of high level, and low level data about the performance issue.

The click took ${n.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${i.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${a.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${o.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${l.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${null===s?"":`- how long it took from dom commit for the frame to be presented: ${s.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${c}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could have been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

`)({commitTime:t.timing.frameConstruction,componentPath:t.componentPath.join(">"),eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:s4(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,interactionType:t.type,name:sU(t.componentPath),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),time:sH(t.timing),toRafTime:t.timing.framePreparation})}}})(),s7=({selectedEvent:e})=>{let[t,r]=eK("fix"),[n,i]=eK(!1);return ra("div",{className:a3(["w-full h-full"]),children:[ra("div",{className:a3(["border border-[#27272A] rounded-sm h-4/5 text-xs overflow-hidden"]),children:[ra("div",{className:a3(["bg-[#18181B] p-1 rounded-t-sm"]),children:ra("div",{className:a3(["flex items-center gap-x-1"]),children:[ra("button",{onClick:()=>r("fix"),className:a3(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm","fix"===t?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Fix"}),ra("button",{onClick:()=>r("explanation"),className:a3(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm","explanation"===t?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Explanation"}),ra("button",{onClick:()=>r("data"),className:a3(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm","data"===t?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Data"})]})}),ra("div",{className:a3(["overflow-y-auto h-full"]),children:ra("pre",{className:a3(["p-2 h-full","whitespace-pre-wrap break-words","text-gray-300 font-mono "]),children:s3(t,e)})})]}),ra("button",{onClick:async()=>{let r=s3(t,e);await navigator.clipboard.writeText(r),i(!0),setTimeout(()=>i(!1),1e3)},className:a3(["mt-4 px-4 py-2 bg-[#18181B] text-[#6E6E77] rounded-sm","hover:text-white transition-colors duration-200","flex items-center justify-center gap-x-2 text-xs"]),children:[ra("span",{children:n?"Copied!":"Copy Prompt"}),ra("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:a3(["transition-transform duration-200",n&&"scale-110"]),children:n?ra("path",{d:"M20 6L9 17l-5-5"}):ra(ex,{children:[ra("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),ra("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]})})]})]})},s6=({selectedEvent:e})=>{var t,r;let[n]=eK(null!=(t=c3())&&t),{notificationState:i}=e5(sV),[a,o]=eK((null==(r=i.routeMessage)?void 0:r.name)?[i.routeMessage.name]:[]),l=((e,t)=>{switch(e.kind){case"dropped-frames":return[...t?[{name:"Total Processing Time",time:sH(e.timing),color:"bg-red-500",kind:"total-processing-time"}]:[{name:"Renders",time:e.timing.renderTime,color:"bg-purple-500",kind:"render"},{name:"JavaScript, DOM updates, Draw Frame",time:e.timing.otherTime,color:"bg-[#4b4b4b]",kind:"other-frame-drop"}]];case"interaction":return[...t?[]:[{name:"Renders",time:e.timing.renderTime,color:"bg-purple-500",kind:"render"}],{name:t?"React Renders, Hooks, Other JavaScript":"JavaScript/React Hooks ",time:e.timing.otherJSTime,color:"bg-[#EFD81A]",kind:"other-javascript"},{name:"Update DOM and Draw New Frame",time:sH(e.timing)-e.timing.renderTime-e.timing.otherJSTime,color:"bg-[#1D3A66]",kind:"other-not-javascript"}]}})(e,n),s=e5(cG);eZ(()=>{var e;if(null==(e=i.routeMessage)?void 0:e.name){let e=null==s?void 0:s.querySelector("#overview-scroll-container"),t=null==s?void 0:s.querySelector(`#react-scan-overview-bar-${i.routeMessage.name}`);if(e&&t){let r=t.getBoundingClientRect().top,n=e.getBoundingClientRect().top;e.scrollTop=e.scrollTop+(r-n)}}},[i.route]),eZ(()=>{"other-visualization"===i.route&&o(e=>{var t;return(null==(t=i.routeMessage)?void 0:t.name)?[i.routeMessage.name]:e})},[i.route]);let c=l.reduce((e,t)=>e+t.time,0);return ra("div",{className:"rounded-sm border border-zinc-800 text-xs",children:[ra("div",{className:"p-2 border-b border-zinc-800 bg-zinc-900/50",children:ra("div",{className:"flex items-center justify-between",children:[ra("h3",{className:"text-xs font-medium",children:"What was time spent on?"}),ra("span",{className:"text-xs text-zinc-400",children:["Total: ",c.toFixed(0),"ms"]})]})}),ra("div",{className:"divide-y divide-zinc-800",children:l.map(t=>{let r=a.includes(t.kind);return ra("div",{id:`react-scan-overview-bar-${t.kind}`,children:[ra("button",{onClick:()=>o(e=>e.includes(t.kind)?e.filter(e=>e!==t.kind):[...e,t.kind]),className:"w-full px-3 py-2 flex items-center gap-4 hover:bg-zinc-800/50 transition-colors",children:ra("div",{className:"flex-1",children:[ra("div",{className:"flex items-center justify-between mb-2",children:[ra("div",{className:"flex items-center gap-0.5",children:[ra("svg",{className:`h-4 w-4 text-zinc-400 transition-transform ${r?"rotate-90":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:ra("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),ra("span",{className:"font-medium flex items-center text-left",children:t.name})]}),ra("span",{className:" text-zinc-400",children:[t.time.toFixed(0),"ms"]})]}),ra("div",{className:"h-1 bg-zinc-800 rounded-full overflow-hidden",children:ra("div",{className:`h-full ${t.color} transition-all`,style:{width:`${t.time/c*100}%`}})})]})}),r&&ra("div",{className:"bg-zinc-900/30 border-t border-zinc-800 px-2.5 py-3",children:ra("p",{className:" text-zinc-400 mb-4 text-xs",children:(()=>{switch(e.kind){case"interaction":switch(t.kind){case"render":return ra(cr,{input:ce(e)});case"other-javascript":return ra(cr,{input:ct(e)});case"other-not-javascript":return ra(cr,{input:s8(e)})}case"dropped-frames":switch(t.kind){case"total-processing-time":return ra(cr,{input:{kind:"total-processing",data:{time:sH(e.timing)}}});case"render":return ra(ex,{children:ra(cr,{input:{kind:"render",data:{topByTime:e.groupedFiberRenders.toSorted((e,t)=>t.totalTime-e.totalTime).slice(0,3).map(t=>({name:t.name,percentage:t.totalTime/sH(e.timing)}))}}})});case"other-frame-drop":return ra(cr,{input:{kind:"other"}})}}})()})})]},t.kind)})})]})},s8=e=>{let t=e.groupedFiberRenders.reduce((e,t)=>e+t.count,0),r=e.timing.renderTime,n=sH(e.timing);return t>100?{kind:"high-render-count-update-dom-draw-frame",data:{count:t,percentageOfTotal:r/n*100,copyButton:ra(s9,{})}}:{kind:"update-dom-draw-frame",data:{copyButton:ra(s9,{})}}},s9=()=>{let[e,t]=eK(!1),{notificationState:r}=e5(sV);return ra("button",{onClick:async()=>{r.selectedEvent&&(await navigator.clipboard.writeText(s3("explanation",r.selectedEvent)),t(!0),setTimeout(()=>t(!1),1e3))},className:"bg-zinc-800 flex hover:bg-zinc-700 text-zinc-200 px-2 py-1 rounded gap-x-3",children:[ra("span",{children:e?"Copied!":"Copy Prompt"}),ra("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:a3(["transition-transform duration-200",e&&"scale-110"]),children:e?ra("path",{d:"M20 6L9 17l-5-5"}):ra(ex,{children:[ra("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),ra("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]})})]})},ce=e=>e.timing.renderTime/sH(e.timing)>.3?{kind:"render",data:{topByTime:e.groupedFiberRenders.toSorted((e,t)=>t.totalTime-e.totalTime).slice(0,3).map(t=>({percentage:t.totalTime/sH(e.timing),name:t.name}))}}:{kind:"other"},ct=e=>{let t=e.groupedFiberRenders.reduce((e,t)=>e+t.count,0);return e.timing.otherJSTime/sH(e.timing)<.2?{kind:"js-explanation-base"}:e.groupedFiberRenders.find(e=>e.count>200)||e.groupedFiberRenders.reduce((e,t)=>e+t.count,0)>500?{kind:"high-render-count-high-js",data:{renderCount:t,topByCount:e.groupedFiberRenders.filter(e=>e.count>100).toSorted((e,t)=>t.count-e.count).slice(0,3)}}:e.timing.otherJSTime/sH(e.timing)>.3?e.timing.renderTime>.2?{kind:"js-explanation-base"}:{kind:"low-render-count-high-js",data:{renderCount:t}}:{kind:"js-explanation-base"}},cr=({input:e})=>{switch(e.kind){case"total-processing":return ra("div",{className:a3(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[ra("p",{children:["This is the time it took to draw the entire frame that was presented to the user. To be at 60FPS, this number needs to be ","<=16ms"]}),ra("p",{children:'To debug the issue, check the "Ranked" tab to see if there are significant component renders'}),ra("p",{children:"On a production React build, React Scan can't access the time it took for component to render. To get that information, run React Scan on a development build"}),ra("p",{children:["To understand precisely what caused the slowdown while in production, use the ",ra("strong",{children:"Chrome profiler"})," and analyze the function call times."]}),ra("p",{})]});case"render":return ra("div",{className:a3(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[ra("p",{children:"This is the time it took React to run components, and internal logic to handle the output of your component."}),ra("div",{className:a3(["flex flex-col"]),children:[ra("p",{children:"The slowest components for this time period were:"}),e.data.topByTime.map(e=>ra("div",{children:[ra("strong",{children:e.name}),":"," ",(100*e.percentage).toFixed(0),"% of total"]},e.name))]}),ra("p",{children:'To view the render times of all your components, and what caused them to render, go to the "Ranked" tab'}),ra("p",{children:'The "Ranked" tab shows the render times of every component.'}),ra("p",{children:"The render times of the same components are grouped together into one bar."}),ra("p",{children:"Clicking the component will show you what props, state, or context caused the component to re-render."})]});case"js-explanation-base":return ra("div",{className:a3(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[ra("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),ra("p",{children:["The most common culprit for high JS time is expensive hooks, like expensive callbacks inside of ",ra("code",{children:"useEffect"}),"'s or a large number of useEffect's called, but this can also be JavaScript event handlers (",ra("code",{children:"'onclick'"}),", ",ra("code",{children:"'onchange'"}),") that performed expensive computation."]}),ra("p",{children:"If you have lots of components rendering that call hooks, like useEffect, it can add significant overhead even if the callbacks are not expensive. If this is the case, you can try optimizing the renders of those components to avoid the hook from having to run."}),ra("p",{children:["You should profile your app using the"," ",ra("strong",{children:"Chrome DevTools profiler"})," to learn exactly which functions took the longest to execute."]})]});case"high-render-count-high-js":return ra("div",{className:a3(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[ra("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),0===e.data.renderCount?ra(ex,{children:[ra("p",{children:"There were no renders, which means nothing related to React caused this slowdown. The most likely cause of the slowdown is a slow JavaScript event handler, or code related to a Web API"}),ra("p",{children:["You should try to reproduce the slowdown while profiling your website with the",ra("strong",{children:"Chrome DevTools profiler"})," to see exactly what functions took the longest to execute."]})]}):ra(ex,{children:[" ",ra("p",{children:["There were ",ra("strong",{children:e.data.renderCount})," renders, which could have contributed to the high JavaScript/Hook time if they ran lots of hooks, like ",ra("code",{children:"useEffects"}),"."]}),ra("div",{className:a3(["flex flex-col"]),children:[ra("p",{children:"You should try optimizing the renders of:"}),e.data.topByCount.map(e=>ra("div",{children:["- ",ra("strong",{children:e.name})," (rendered ",e.count,"x)"]},e.name))]}),"and then checking if the problem still exists.",ra("p",{children:["You can also try profiling your app using the"," ",ra("strong",{children:"Chrome DevTools profiler"})," to see exactly what functions took the longest to execute."]})]})]});case"low-render-count-high-js":return ra("div",{className:a3(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[ra("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),ra("p",{children:["There were only ",ra("strong",{children:e.data.renderCount})," renders detected, which means either you had very expensive hooks like"," ",ra("code",{children:"useEffect"}),"/",ra("code",{children:"useLayoutEffect"}),", or there is other JavaScript running during this interaction that took up the majority of the time."]}),ra("p",{children:["To understand precisely what caused the slowdown, use the"," ",ra("strong",{children:"Chrome profiler"})," and analyze the function call times."]})]});case"high-render-count-update-dom-draw-frame":return ra("div",{className:a3(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[ra("p",{children:"These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction."}),ra("p",{children:"This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations."}),ra("p",{children:["During this interaction, there were"," ",ra("strong",{children:e.data.count})," renders, which was"," ",ra("strong",{children:[e.data.percentageOfTotal.toFixed(0),"%"]})," of the time spent processing"]}),ra("p",{children:"The work performed as a result of the renders may have forced the browser to spend a lot of time to draw the next frame."}),ra("p",{children:'You can try optimizing the renders to see if the performance problem still exists using the "Ranked" tab.'}),ra("p",{children:"If you use an AI-based code editor, you can export the performance data collected as a prompt."}),ra("p",{children:e.data.copyButton}),ra("p",{children:"Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem."}),ra("p",{children:'For a larger selection of prompts, try the "Prompts" tab'})]});case"update-dom-draw-frame":return ra("div",{className:a3(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[ra("p",{children:"These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction."}),ra("p",{children:"This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations."}),ra("p",{children:"If you use an AI-based code editor, you can export the performance data collected as a prompt."}),ra("p",{children:e.data.copyButton}),ra("p",{children:"Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem."}),ra("p",{children:'For a larger selection of prompts, try the "Prompts" tab'})]});case"other":return ra("div",{className:a3(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[ra("p",{children:["This is the time it took to run everything other than React renders. This can be hooks like ",ra("code",{children:"useEffect"}),", other JavaScript not part of React, or work the browser has to do to update the DOM and draw the next frame."]}),ra("p",{children:["To get a better picture of what happened, profile your app using the"," ",ra("strong",{children:"Chrome profiler"})," when the performance problem arises."]})]})}},cn=null,ci=null,ca=tf({kind:"idle",current:null}),co=null,cl=0,cs=1/60,cc=()=>{co&&cancelAnimationFrame(co),co=requestAnimationFrame(e=>{if(!cn||!ci)return;let t=cl?Math.min((e-cl)/1e3,.05):cs;cl=e;let r=1.8*t;ci.clearRect(0,0,cn.width,cn.height);let n="hsl(271, 76%, 53%)",i=ca.value,{alpha:a,current:o}=(()=>{var e,t,r;switch(i.kind){case"transition":{let t=(null==(e=i.current)?void 0:e.alpha)&&i.current.alpha>0?i.current:i.transitionTo;return{alpha:t?t.alpha:0,current:t}}case"move-out":return{alpha:null!=(r=null==(t=i.current)?void 0:t.alpha)?r:0,current:i.current};case"idle":return{alpha:1,current:i.current}}})();switch(null==o||o.rects.forEach(e=>{ci&&(ci.shadowColor=n,ci.shadowBlur=6,ci.strokeStyle=n,ci.lineWidth=2,ci.globalAlpha=a,ci.beginPath(),ci.rect(e.left,e.top,e.width,e.height),ci.stroke(),ci.shadowBlur=0,ci.beginPath(),ci.rect(e.left,e.top,e.width,e.height),ci.stroke())}),i.kind){case"move-out":if(0===i.current.alpha){ca.value={kind:"idle",current:null},cl=0;return}i.current.alpha<=.01&&(i.current.alpha=0),i.current.alpha=Math.max(0,i.current.alpha-r),cc();return;case"transition":if(i.current&&i.current.alpha>0){i.current.alpha=Math.max(0,i.current.alpha-r),cc();return}if(1===i.transitionTo.alpha){ca.value={kind:"idle",current:i.transitionTo},cl=0;return}i.transitionTo.alpha=Math.min(i.transitionTo.alpha+r,1),cc();case"idle":cl=0;return}})},cd=null;function cu(){(null==cn?void 0:cn.parentNode)&&cn.parentNode.removeChild(cn),cn=null,ci=null}var cp=()=>{var e,t;let r=ca.value.current?ca.value.current:"transition"===ca.value.kind?ca.value.transitionTo:null;if(r){if("transition"===ca.value.kind){ca.value={kind:"move-out",current:(null==(e=ca.value.current)?void 0:e.alpha)===0?ca.value.transitionTo:null!=(t=ca.value.current)?t:ca.value.transitionTo};return}ca.value={kind:"move-out",current:{alpha:0,...r}}}},ch=({selectedEvent:e})=>{let t=sH(e.timing),r=t-e.timing.renderTime,[n]=eK(c3()),i=e.groupedFiberRenders.map(e=>({event:e,kind:"render",totalTime:n?e.count:e.totalTime})),a=(()=>{switch(e.kind){case"dropped-frames":return e.timing.renderTime/t<.1;case"interaction":return(e.timing.otherJSTime+e.timing.renderTime)/t<.2}})();"interaction"!==e.kind||n||i.push({kind:"other-javascript",totalTime:e.timing.otherJSTime}),a&&!n&&("interaction"===e.kind?i.push({kind:"other-not-javascript",totalTime:sH(e.timing)-e.timing.renderTime-e.timing.otherJSTime}):i.push({kind:"other-frame-drop",totalTime:r}));let o=e0({lastCallAt:null,timer:null}),l=i.reduce((e,t)=>e+t.totalTime,0);return ra("div",{className:a3(["flex flex-col h-full w-full gap-y-1"]),children:[n&&0===i.length?ra("div",{className:"flex flex-col items-center justify-center h-full text-zinc-400",children:[ra("p",{className:"text-sm w-full text-left text-white mb-1.5",children:"No data available"}),ra("p",{className:"text-x w-full text-lefts",children:"No data was collected during this period"})]}):0===i.length?ra("div",{className:"flex flex-col items-center justify-center h-full text-zinc-400",children:[ra("p",{className:"text-sm w-full text-left text-white mb-1.5",children:"No renders collected"}),ra("p",{className:"text-x w-full text-lefts",children:"There were no renders during this period"})]}):void 0,i.toSorted((e,t)=>t.totalTime-e.totalTime).map(e=>ra(cm,{bars:i,bar:e,debouncedMouseEnter:o,totalBarTime:l,isProduction:n},"render"===e.kind?e.event.id:e.kind))]})},cm=({bar:e,debouncedMouseEnter:t,totalBarTime:r,isProduction:n,bars:i,depth:a=0})=>{var o;let{setNotificationState:l,setRoute:s}=e5(sV),[c,d]=eK(!1),u="render"!==e.kind||0===e.event.parents.size,p=i.filter(t=>"render"===t.kind&&"render"===e.kind&&e.event.parents.has(t.event.name)&&t.event.name!==e.event.name),h="render"===e.kind?Array.from(e.event.parents).filter(e=>!i.some(t=>"render"===t.kind&&t.event.name===e)):[];return ra("div",{className:"w-full",children:[ra("div",{className:a3(["w-full flex items-center relative text-xs min-w-0"]),children:[ra("button",{onMouseLeave:()=>{t.current.timer&&clearTimeout(t.current.timer),cp()},onMouseEnter:async()=>{let r=async()=>{if(t.current.lastCallAt=Date.now(),"render"!==e.kind){let e=ca.value.current?ca.value.current:"transition"===ca.value.kind?ca.value.transitionTo:null;if(!e){ca.value={kind:"idle",current:null};return}ca.value={kind:"move-out",current:{alpha:0,...e}};return}let r=ca.value,n=(()=>{switch(r.kind){case"transition":return r.transitionTo;case"idle":case"move-out":return r.current}})(),i=[];if("transition"===r.kind){let t=r.current&&r.current.alpha>0?"fading-out":"fading-in";(()=>{switch(t){case"fading-in":ca.value={kind:"transition",current:r.transitionTo,transitionTo:{rects:i,alpha:0,name:e.event.name}};return;case"fading-out":ca.value={kind:"transition",current:ca.value.current?{alpha:0,...ca.value.current}:null,transitionTo:{rects:i,alpha:0,name:e.event.name}};return}})()}else ca.value={kind:"transition",transitionTo:{rects:i,alpha:0,name:e.event.name},current:n?{alpha:0,...n}:null};for await(let t of l4(e.event.elements.filter(e=>e instanceof Element)))t.forEach(({boundingClientRect:e})=>{i.push(e)}),cc()};if(t.current.lastCallAt&&Date.now()-t.current.lastCallAt<200){t.current.timer&&clearTimeout(t.current.timer),t.current.timer=setTimeout(()=>{r()},200);return}r()},onClick:()=>{"render"===e.kind?(l(t=>({...t,selectedFiber:e.event})),s({route:"render-explanation",routeMessage:null})):s({route:"other-visualization",routeMessage:{kind:"auto-open-overview-accordion",name:e.kind}})},className:a3(["h-full w-[90%] flex items-center hover:bg-[#0f0f0f] rounded-l-md min-w-0 relative"]),children:[ra("div",{style:{minWidth:"fit-content",width:`${e.totalTime/r*100}%`},className:a3(["flex items-center rounded-sm text-white text-xs h-[28px] shrink-0","render"===e.kind&&"bg-[#412162] group-hover:bg-[#5b2d89]","other-frame-drop"===e.kind&&"bg-[#44444a] group-hover:bg-[#6a6a6a]","other-javascript"===e.kind&&"bg-[#efd81a6b] group-hover:bg-[#efda1a2f]","other-not-javascript"===e.kind&&"bg-[#214379d4] group-hover:bg-[#21437982]"])}),ra("div",{className:a3(["absolute inset-0 flex items-center px-2","min-w-0"]),children:ra("div",{className:"flex items-center gap-x-2 min-w-0 w-full",children:[ra("span",{className:a3(["truncate"]),children:(()=>{switch(e.kind){case"other-frame-drop":return"JavaScript, DOM updates, Draw Frame";case"other-javascript":return"JavaScript/React Hooks";case"other-not-javascript":return"Update DOM and Draw New Frame";case"render":return e.event.name}})()}),"render"===e.kind&&!(o=e.event).wasFiberRenderMount&&!o.hasMemoCache&&0===o.changes.context.length&&0===o.changes.props.length&&0===o.changes.state.length&&ra("div",{style:{lineHeight:"10px"},className:a3(["px-1 py-0.5 bg-[#6a369e] flex items-center rounded-sm font-semibold text-[8px] shrink-0"]),children:"Memoizable"})]})})]}),ra("button",{onClick:()=>"render"===e.kind&&!u&&d(!c),className:a3(["flex items-center min-w-fit shrink-0 rounded-r-md h-[28px]",!u&&"hover:bg-[#0f0f0f]","render"!==e.kind||u?"cursor-default":"cursor-pointer"]),children:[ra("div",{className:"w-[20px] flex items-center justify-center",children:"render"===e.kind&&!u&&ra(sq,{className:a3("transition-transform",c&&"rotate-90"),size:16})}),ra("div",{style:{minWidth:u?"fit-content":n?"30px":"60px"},className:"flex items-center justify-end gap-x-1",children:["render"===e.kind&&ra("span",{className:a3(["text-[10px]"]),children:["x",e.event.count]}),("render"!==e.kind||!n)&&ra("span",{className:"text-[10px] text-[#7346a0] pr-1",children:[e.totalTime<1?"<1":e.totalTime.toFixed(0),"ms"]})]})]}),0===a&&ra("div",{className:a3(["absolute right-0 top-1/2 transition-none -translate-y-1/2 bg-white text-black px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity mr-16","pointer-events-none"]),children:"Click to learn more"})]}),c&&(p.length>0||h.length>0)&&ra("div",{className:"pl-3 flex flex-col gap-y-1 mt-1",children:[p.toSorted((e,t)=>t.totalTime-e.totalTime).map((e,o)=>ra(cm,{depth:a+1,bar:e,debouncedMouseEnter:t,totalBarTime:r,isProduction:n,bars:i},o)),h.map(e=>ra("div",{className:"w-full",children:ra("div",{className:"w-full flex items-center relative text-xs",children:ra("div",{className:"h-full w-full flex items-center relative",children:[ra("div",{className:"flex items-center rounded-sm text-white text-xs h-[28px] w-full"}),ra("div",{className:"absolute inset-0 flex items-center px-2",children:ra("span",{className:"truncate whitespace-nowrap text-white/70 w-full",children:e})})]})})},e))]})]})},cf=({selectedEvent:e,selectedFiber:t})=>{let{setRoute:r}=e5(sV),[n,i]=eK(!0),[a]=eK(c3());eQ(()=>{let e=localStorage.getItem("react-scan-tip-shown"),t="true"===e||"false"!==e&&null;if(null===t){i(!0),localStorage.setItem("react-scan-tip-is-shown","true");return}t||i(!1)},[]);let o=0===t.changes.context.length&&0===t.changes.props.length&&0===t.changes.state.length;return ra("div",{className:a3(["w-full min-h-fit h-full flex flex-col py-4 pt-0 rounded-sm"]),children:[ra("div",{className:a3(["flex items-start gap-x-4 "]),children:[ra("button",{onClick:()=>{r({route:"render-visualization",routeMessage:null})},className:a3(["text-white hover:bg-[#34343b] flex gap-x-1 justify-center items-center mb-4 w-fit px-2.5 py-1.5 text-xs rounded-sm bg-[#18181B]"]),children:[ra(sK,{size:14})," ",ra("span",{children:"Overview"})]}),ra("div",{className:a3(["flex flex-col gap-y-1"]),children:[ra("div",{className:a3(["text-sm font-bold text-white overflow-x-hidden"]),children:ra("div",{className:"flex items-center gap-x-2 truncate",children:t.name})}),ra("div",{className:a3(["flex gap-x-2"]),children:[!a&&ra(ex,{children:ra("div",{className:a3(["text-xs text-gray-400"]),children:["• Render time: ",t.totalTime.toFixed(0),"ms"]})}),ra("div",{className:a3(["text-xs text-gray-400 mb-4"]),children:["• Renders: ",t.count,"x"]})]})]})]}),n&&!o&&ra("div",{className:a3(["w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex relative"]),children:[ra("button",{onClick:()=>{i(!1),localStorage.setItem("react-scan-tip-shown","false")},className:a3(["absolute right-2 top-2 rounded-sm p-1 hover:bg-[#18181B]"]),children:ra(sJ,{size:12})}),ra("div",{className:a3(["w-1 bg-[#d36cff]"])}),ra("div",{className:a3(["flex-1"]),children:[ra("div",{className:a3(["px-3 py-2 text-gray-100 text-xs font-semibold"]),children:"How to stop renders"}),ra("div",{className:a3(["px-3 pb-2 text-gray-400 text-[10px]"]),children:"Stop the following props, state and context from changing between renders, and wrap the component in React.memo if not already"})]})]}),o&&ra("div",{className:a3(["w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex"]),children:[ra("div",{className:a3(["w-1 bg-[#d36cff]"])}),ra("div",{className:a3(["flex-1"]),children:[ra("div",{className:a3(["px-3 py-2 text-gray-100 text-sm font-semibold"]),children:"No changes detected"}),ra("div",{className:a3(["px-3 pb-2 text-gray-400 text-xs"]),children:"This component would not have rendered if it was memoized"})]})]}),ra("div",{className:a3(["flex w-full"]),children:[ra("div",{className:a3(["flex flex-col border border-[#27272A] rounded-l-sm overflow-hidden w-1/3"]),children:[ra("div",{className:a3(["text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed Props"}),t.changes.props.length>0?t.changes.props.toSorted((e,t)=>t.count-e.count).map(e=>ra("div",{className:a3(["flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]"]),children:[ra("span",{className:a3(["text-white "]),children:e.name}),ra("div",{className:a3([" text-[8px]  text-[#d36cff] pl-1 py-1 "]),children:[e.count,"/",t.count,"x"]})]},e.name)):ra("div",{className:a3(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]"]),children:"No changes"})]}),ra("div",{className:a3(["flex flex-col border border-[#27272A] border-l-0 overflow-hidden w-1/3"]),children:[ra("div",{className:a3([" text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed State"}),t.changes.state.length>0?t.changes.state.toSorted((e,t)=>t.count-e.count).map(e=>ra("div",{className:a3(["flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]"]),children:[ra("span",{className:a3(["text-white "]),children:["index ",e.index]}),ra("div",{className:a3(["rounded-full  text-[#d36cff] pl-1 py-1 text-[8px]"]),children:[e.count,"/",t.count,"x"]})]},e.index)):ra("div",{className:a3(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]"]),children:"No changes"})]}),ra("div",{className:a3(["flex flex-col border border-[#27272A] border-l-0 rounded-r-sm overflow-hidden w-1/3"]),children:[ra("div",{className:a3([" text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed Context"}),t.changes.context.length>0?t.changes.context.toSorted((e,t)=>t.count-e.count).map(e=>ra("div",{className:a3(["flex flex-col justify-between items-center border-t  border-[#27272A] px-1 py-1 bg-[#0A0A0A] text-[10px] overflow-x-auto"]),children:[ra("span",{className:a3(["text-white "]),children:e.name}),ra("div",{className:a3(["rounded-full text-[#d36cff] pl-1 py-1 text-[8px] text-wrap"]),children:[e.count,"/",t.count,"x"]})]},e.name)):ra("div",{className:a3(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A] py-2"]),children:"No changes"})]})]})]})},cg=()=>{let{notificationState:e,setNotificationState:t}=e5(sV),[r,n]=eK("..."),i=e0(null);if(eZ(()=>{let e=setInterval(()=>{n(e=>"..."===e?"":e+".")},500);return()=>clearInterval(e)},[]),!e.selectedEvent)return ra("div",{ref:i,className:a3(["h-full w-full flex flex-col items-center justify-center relative py-2 px-4"]),children:[ra("div",{className:a3(["p-2 flex justify-center items-center border-[#27272A] absolute top-0 right-0"]),children:ra("button",{onClick:()=>{oc.value={view:"none"}},children:ra(sJ,{size:18,className:"text-[#6F6F78]"})})}),ra("div",{className:a3(["flex flex-col items-start pt-5 bg-[#0A0A0A] p-5 rounded-sm max-w-md"," shadow-lg"]),children:ra("div",{className:a3(["flex flex-col items-start gap-y-4"]),children:[ra("div",{className:a3(["flex items-center"]),children:ra("span",{className:a3(["text-zinc-400 font-medium text-[17px]"]),children:["Scanning for slowdowns",r]})}),0!==e.events.length&&ra("p",{className:a3(["text-xs"]),children:["Click on an item in the"," ",ra("span",{className:a3(["text-purple-400"]),children:"History"})," list to get started"]}),ra("p",{className:a3(["text-zinc-600 text-xs"]),children:"You don't need to keep this panel open for React Scan to record slowdowns"}),ra("p",{className:a3(["text-zinc-600 text-xs"]),children:"Enable audio alerts to hear a delightful ding every time a large slowdown is recorded"}),ra("button",{onClick:()=>{if(e.audioNotificationsOptions.enabled)return void t(e=>{var t,r;return(null==(t=e.audioNotificationsOptions.audioContext)?void 0:t.state)!=="closed"&&(null==(r=e.audioNotificationsOptions.audioContext)||r.close()),localStorage.setItem("react-scan-notifications-audio","false"),{...e,audioNotificationsOptions:{audioContext:null,enabled:!1}}});localStorage.setItem("react-scan-notifications-audio","true");let r=new AudioContext;i0(r),t(e=>({...e,audioNotificationsOptions:{enabled:!0,audioContext:r}}))},className:a3(["px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-sm w-full"," text-sm flex items-center gap-x-2 justify-center"]),children:e.audioNotificationsOptions.enabled?ra(ex,{children:ra("span",{className:"flex items-center gap-x-1",children:"Disable audio alerts"})}):ra(ex,{children:ra("span",{className:"flex items-center gap-x-1",children:"Enable audio alerts"})})})]})})]});switch(e.route){case"render-visualization":return ra(cv,{children:ra(ch,{selectedEvent:e.selectedEvent})});case"render-explanation":if(!e.selectedFiber)throw Error("Invariant: must have selected fiber when viewing render explanation");return ra(cv,{children:ra(cf,{selectedFiber:e.selectedFiber,selectedEvent:e.selectedEvent})});case"other-visualization":return ra(cv,{children:ra("div",{className:a3(["flex w-full h-full flex-col overflow-y-auto"]),id:"overview-scroll-container",children:ra(s6,{selectedEvent:e.selectedEvent})})});case"optimize":return ra(cv,{children:ra(s7,{selectedEvent:e.selectedEvent})})}e.route},cv=({children:e})=>{let{notificationState:t}=e5(sV);if(!t.selectedEvent)throw Error("Invariant: d must have selected event when viewing render explanation");return ra("div",{className:a3(["w-full h-full flex flex-col gap-y-2"]),children:[ra("div",{className:a3(["h-[50px] w-full"]),children:ra(s5,{selectedEvent:t.selectedEvent})}),ra("div",{className:a3(["h-calc(100%-50px) flex flex-col overflow-y-auto px-3"]),children:e})]})},cw=({selectedEvent:e})=>{let t=sB(e);switch(e.kind){case"interaction":return ra("div",{className:a3(["w-full flex border-b border-[#27272A] min-h-[48px]"]),children:ra("div",{className:a3(["min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4"]),children:[ra("div",{className:a3(["flex items-center gap-x-2 "]),children:[ra("span",{className:a3(["text-[#5a5a5a] mr-0.5"]),children:"click"===e.type?"Clicked ":"Typed in "}),ra("span",{children:sU(e.componentPath)}),ra("div",{className:a3(["w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap","low"===t&&"bg-green-500/50","needs-improvement"===t&&"bg-[#b77116]","high"===t&&"bg-[#b94040]"]),children:[sH(e.timing).toFixed(0),"ms processing time"]})]}),ra("div",{className:a3(["flex items-center gap-x-2  justify-end ml-auto"]),children:ra("div",{className:a3(["p-2 flex justify-center items-center border-[#27272A]"]),children:ra("button",{onClick:()=>{oc.value={view:"none"}},title:"Close",children:ra(sJ,{size:18,className:"text-[#6F6F78]"})})})})]})});case"dropped-frames":return ra("div",{className:a3(["w-full flex border-b border-[#27272A] min-h-[48px]"]),children:ra("div",{className:a3(["min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4"]),children:[ra("div",{className:a3(["flex items-center gap-x-2 "]),children:["FPS Drop",ra("div",{className:a3(["w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap","low"===t&&"bg-green-500/50","needs-improvement"===t&&"bg-[#b77116]","high"===t&&"bg-[#b94040]"]),children:["dropped to ",e.fps," FPS"]})]}),ra("div",{className:a3(["flex items-center gap-x-2 w-2/4 justify-end ml-auto"]),children:ra("div",{className:a3(["p-2 flex justify-center items-center border-[#27272A]"]),children:ra("button",{onClick:()=>{oc.value={view:"none"}},children:ra(sJ,{size:18,className:"text-[#6F6F78]"})})})})]})})}},cb=({item:e,shouldFlash:t})=>{var r,n;let[i,a]=eK(!1),o=e.events.map(sB).reduce((e,t)=>{switch(t){case"high":return"high";case"needs-improvement":return"high"===e?"high":"needs-improvement";case"low":return e}},"low"),l=(({flashingItemsCount:e,totalEvents:t})=>{let[r,n]=eK(!1),i=e0(0),a=e0(0);return eZ(()=>{if(i.current>=t)return;let e=Date.now()-a.current;if(e>=250){n(!1);let e=setTimeout(()=>{i.current=t,a.current=Date.now(),n(!0),setTimeout(()=>{n(!1)},2e3)},50);return()=>clearTimeout(e)}{let r=setTimeout(()=>{n(!1),setTimeout(()=>{i.current=t,a.current=Date.now(),n(!0),setTimeout(()=>{n(!1)},2e3)},50)},250-e);return()=>clearTimeout(r)}},[e]),r})({flashingItemsCount:e.events.reduce((e,r)=>t(r.id)?e+1:e,0),totalEvents:e.events.length});return ra("div",{className:a3(["flex flex-col gap-y-0.5"]),children:[ra("button",{onClick:()=>a(e=>!e),className:a3(["pl-2 py-1.5  text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",l&&!i&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[ra("div",{className:a3(["w-4/5 flex items-center justify-start h-full text-xs truncate gap-x-1.5"]),children:[ra("span",{className:a3(["min-w-fit"]),children:ra(sq,{className:a3(["text-[#A1A1AA] transition-transform",i?"rotate-90":""]),size:14},`chevron-${e.timestamp}`)}),ra("span",{className:a3(["text-xs"]),children:"collapsed-frame-drops"===e.kind?"FPS Drops":sU(null!=(n=null==(r=e.events.at(0))?void 0:r.componentPath)?n:[])})]}),ra("div",{className:a3(["ml-auto min-w-fit flex justify-end items-center"]),children:ra("div",{style:{lineHeight:"10px"},className:a3(["w-fit flex items-center text-[10px] justify-center h-full text-white px-1 py-1 rounded-sm font-semibold","low"===o&&"bg-green-500/60","needs-improvement"===o&&"bg-[#b77116] text-[10px]","high"===o&&"bg-[#b94040]"]),children:["x",e.events.length]})})]}),i&&ra(cx,{children:e.events.toSorted((e,t)=>t.timestamp-e.timestamp).map(e=>ra(cy,{event:e,shouldFlash:t(e.id)}))})]})},cx=({children:e})=>ra("div",{className:"relative pl-6 flex flex-col gap-y-1",children:[ra("div",{className:"absolute left-3 top-0 bottom-0 w-px bg-[#27272A]"}),e]}),cy=({event:e,shouldFlash:t})=>{var r,n;let{notificationState:i,setNotificationState:a}=e5(sV),o=sB(e),l=(({shouldFlash:e})=>{let[t,r]=eK(e);return eZ(()=>{if(e){r(!0);let e=setTimeout(()=>{r(!1)},1e3);return()=>clearTimeout(e)}},[e]),t})({shouldFlash:t});switch(e.kind){case"interaction":return ra("button",{onClick:()=>{a(t=>({...t,selectedEvent:e,route:"render-visualization",selectedFiber:null}))},className:a3(["pl-2 py-1.5  text-sm flex w-full items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",e.id===(null==(r=i.selectedEvent)?void 0:r.id)&&"bg-[#18181B]",l&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[ra("div",{className:a3(["w-4/5 flex items-center justify-start h-full gap-x-1.5"]),children:[ra("span",{className:a3(["min-w-fit text-xs"]),children:(()=>{switch(e.type){case"click":return ra(sZ,{size:14});case"keyboard":return ra(sQ,{size:14})}})()}),ra("span",{className:a3(["text-xs pr-1 truncate"]),children:sU(e.componentPath)})]}),ra("div",{className:a3([" min-w-fit flex justify-end items-center ml-auto"]),children:ra("div",{style:{lineHeight:"10px"},className:a3(["gap-x-0.5 w-fit flex items-end justify-center h-full text-white px-1 py-1 rounded-sm font-semibold text-[10px]","low"===o&&"bg-green-500/50","needs-improvement"===o&&"bg-[#b77116] text-[10px]","high"===o&&"bg-[#b94040]"]),children:ra("div",{style:{lineHeight:"10px"},className:a3(["text-[10px] text-white flex items-end"]),children:[sH(e.timing).toFixed(0),"ms"]})})})]});case"dropped-frames":return ra("button",{onClick:()=>{a(t=>({...t,selectedEvent:e,route:"render-visualization",selectedFiber:null}))},className:a3(["pl-2 py-1.5  w-full text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",e.id===(null==(n=i.selectedEvent)?void 0:n.id)&&"bg-[#18181B]",l&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[ra("div",{className:a3(["w-4/5 flex items-center justify-start h-full text-xs truncate"]),children:[ra(s1,{size:14,className:"mr-1.5"})," FPS Drop"]}),ra("div",{className:a3([" min-w-fit flex justify-end items-center ml-auto"]),children:ra("div",{style:{lineHeight:"10px"},className:a3(["w-fit flex items-center justify-center h-full text-white px-1 py-1 rounded-sm text-[10px] font-bold","low"===o&&"bg-green-500/60","needs-improvement"===o&&"bg-[#b77116] text-[10px]","high"===o&&"bg-[#b94040]"]),children:[e.fps," FPS"]})})]})}},ck=(e=150)=>{let{notificationState:t}=e5(sV),[r,n]=eK(t.events);return eZ(()=>{setTimeout(()=>{n(t.events)},e)},[t.events]),[r,n]},c_=()=>{let{notificationState:e,setNotificationState:t}=e5(sV),r=(e=>{let t=e0([]),[r,n]=eK(new Set),i=e0(!0);return eZ(()=>{if(i.current){i.current=!1,t.current=e;return}let r=new Set(e.map(e=>e.id)),a=new Set(t.current.map(e=>e.id)),o=new Set;r.forEach(e=>{a.has(e)||o.add(e)}),o.size>0&&(n(o),setTimeout(()=>{n(new Set)},2e3)),t.current=e},[e]),e=>r.has(e)})(e.events),[n,i]=ck(),a=n.reduce((e,t)=>{let r=e.at(-1);if(!r)return[{kind:"single",event:t,timestamp:t.timestamp}];switch(r.kind){case"collapsed-keyboard":if("interaction"===t.kind&&"keyboard"===t.type&&t.componentPath.join("-")===r.events[0].componentPath.join("-"))return[...e.filter(e=>e!==r),{kind:"collapsed-keyboard",events:[...r.events,t],timestamp:Math.max(...[...r.events,t].map(e=>e.timestamp))}];return[...e,{kind:"single",event:t,timestamp:t.timestamp}];case"single":if("interaction"===r.event.kind&&"keyboard"===r.event.type&&"interaction"===t.kind&&"keyboard"===t.type&&r.event.componentPath.join("-")===t.componentPath.join("-"))return[...e.filter(e=>e!==r),{kind:"collapsed-keyboard",events:[r.event,t],timestamp:Math.max(r.event.timestamp,t.timestamp)}];if("dropped-frames"===r.event.kind&&"dropped-frames"===t.kind)return[...e.filter(e=>e!==r),{kind:"collapsed-frame-drops",events:[r.event,t],timestamp:Math.max(r.event.timestamp,t.timestamp)}];return[...e,{kind:"single",event:t,timestamp:t.timestamp}];case"collapsed-frame-drops":if("dropped-frames"===t.kind)return[...e.filter(e=>e!==r),{kind:"collapsed-frame-drops",events:[...r.events,t],timestamp:Math.max(...[...r.events,t].map(e=>e.timestamp))}];return[...e,{kind:"single",event:t,timestamp:t.timestamp}]}},[]).toSorted((e,t)=>t.timestamp-e.timestamp);return ra("div",{className:a3(["w-full h-full gap-y-2 flex flex-col border-r border-[#27272A] overflow-y-auto"]),children:[ra("div",{className:a3(["text-sm text-[#65656D] pl-3 pr-1 w-full flex items-center justify-between"]),children:[ra("span",{children:"History"}),ra(s2,{wrapperProps:{className:"h-full flex items-center justify-center ml-auto"},triggerContent:ra("button",{className:a3(["hover:bg-[#18181B] rounded-full p-2"]),title:"Clear all events",onClick:()=>{sD.getState().actions.clear(),t(e=>({...e,selectedEvent:null,selectedFiber:null,route:"other-visualization"===e.route?"other-visualization":"render-visualization"})),i([])},children:ra(s0,{className:a3([""]),size:16})}),children:ra("div",{className:a3(["w-full flex justify-center"]),children:"Clear all events"})})]}),ra("div",{className:a3(["flex flex-col px-1 gap-y-1"]),children:[0===a.length&&ra("div",{className:a3(["flex items-center justify-center text-zinc-500 text-sm py-4"]),children:"No Events"}),a.map(e=>(()=>{switch(e.kind){case"collapsed-keyboard":case"collapsed-frame-drops":return ra(cb,{shouldFlash:r,item:e});case"single":return ra(cy,{event:e.event,shouldFlash:r(e.event.id)},e.event.id)}})())]})]})},cN=()=>{var e,t,r,n,i,a,o;let l=(e=sD.subscribe,i=(n=eK({t:{__:r=(t=sD.getState)(),u:t}}))[0].t,a=n[1],eQ(function(){i.__=r,i.u=t,tB(i)&&a({t:i})},[e,r,t]),eZ(function(){return tB(i)&&a({t:i}),e(function(){tB(i)&&a({t:i})})},[e]),r),s=[];return eZ(()=>{let e=setInterval(()=>{o.forEach(e=>{e.groupedFiberRenders&&e.groupedFiberRenders.forEach(e=>{if(e.deletedAll)return;if(!e.elements||0===e.elements.length){e.deletedAll=!0;return}let t=e.elements.length;e.elements=e.elements.filter(e=>e&&e.isConnected),0===e.elements.length&&t>0&&(e.deletedAll=!0)})})},5e3);return()=>{clearInterval(e)}},[o=s]),l.state.events.forEach(e=>{let t=Object.values("interaction"===e.kind?e.data.meta.detailedTiming.fiberRenders:e.data.meta.fiberRenders).map(e=>({id:iQ(),totalTime:e.nodeInfo.reduce((e,t)=>e+t.selfTime,0),count:e.nodeInfo.length,name:e.nodeInfo[0].name,deletedAll:!1,parents:e.parents,hasMemoCache:e.hasMemoCache,wasFiberRenderMount:e.wasFiberRenderMount,elements:e.nodeInfo.map(e=>e.element),changes:{context:e.changes.fiberContext.current.filter(t=>e.changes.fiberContext.changesCounts.get(t.name)).map(t=>{var r;return{name:String(t.name),count:null!=(r=e.changes.fiberContext.changesCounts.get(t.name))?r:0}}),props:e.changes.fiberProps.current.filter(t=>e.changes.fiberProps.changesCounts.get(t.name)).map(t=>{var r;return{name:String(t.name),count:null!=(r=e.changes.fiberProps.changesCounts.get(t.name))?r:0}}),state:e.changes.fiberState.current.filter(t=>e.changes.fiberState.changesCounts.get(Number(t.name))).map(t=>{var r;return{index:t.name,count:null!=(r=e.changes.fiberState.changesCounts.get(Number(t.name)))?r:0}})}})),r=t.reduce((e,t)=>e+t.totalTime,0);switch(e.kind){case"interaction":{let{commitEnd:n,jsEndDetail:i,interactionStartDetail:a,rafStart:o}=e.data.meta.detailedTiming;i-a-r<0&&su("js time must be longer than render time");let l=Math.max(0,i-a-r),c=Math.max(e.data.meta.latency-(n-a),0);s.push({componentPath:e.data.meta.detailedTiming.componentPath,groupedFiberRenders:t,id:e.id,kind:"interaction",memory:null,timestamp:e.data.startAt,type:"keyboard"===e.data.meta.detailedTiming.interactionType?"keyboard":"click",timing:{renderTime:r,kind:"interaction",otherJSTime:l,framePreparation:o-i,frameConstruction:n-o,frameDraw:c}});return}case"long-render":return void s.push({kind:"dropped-frames",id:e.id,memory:null,timing:{kind:"dropped-frames",renderTime:r,otherTime:e.data.meta.latency},groupedFiberRenders:t,timestamp:e.data.startAt,fps:e.data.meta.fps})}}),s},cS=()=>{let{notificationState:e,setNotificationState:t}=e5(sV),r=e0(null),n=e0(null),i=e0(0),[a]=ck(),o=a.filter(e=>"high"===sB(e)).length;return eZ(()=>{let e=localStorage.getItem("react-scan-notifications-audio");"false"!==e&&"true"!==e?localStorage.setItem("react-scan-notifications-audio","false"):"false"!==e&&t(e=>e.audioNotificationsOptions.enabled?e:{...e,audioNotificationsOptions:{enabled:!0,audioContext:new AudioContext}})},[]),eZ(()=>{let{audioNotificationsOptions:t}=e;!t.enabled||0===o||r.current&&r.current>=o||(n.current&&clearTimeout(n.current),n.current=setTimeout(()=>{i0(t.audioContext),r.current=o,i.current=Date.now(),n.current=null},Math.max(0,1e3-(Date.now()-i.current))))},[o]),eZ(()=>{0===o&&(r.current=null)},[o]),eZ(()=>()=>{n.current&&clearTimeout(n.current)},[]),null},cE=tY((e,t)=>{var r;let n=cN(),[i,a]=eK({detailsExpanded:!1,events:n,filterBy:"latest",moreInfoExpanded:!1,route:"render-visualization",selectedEvent:null!=(r=n.toSorted((e,t)=>e.timestamp-t.timestamp).at(-1))?r:null,selectedFiber:null,routeMessage:null,audioNotificationsOptions:{enabled:!1,audioContext:null}});return i.events=n,ra(sV.Provider,{value:{notificationState:i,setNotificationState:a,setRoute:({route:e,routeMessage:t})=>{a(r=>{let n={...r,route:e,routeMessage:t};switch(e){case"render-visualization":case"optimize":case"other-visualization":return cp(),{...n,selectedFiber:null};case"render-explanation":return cp(),n}})}},children:[ra(cS,{}),ra(cT,{ref:t})]})}),cT=tY((e,t)=>{var r;let{notificationState:n}=e5(sV);return ra("div",{ref:t,className:a3(["h-full w-full flex flex-col"]),children:[n.selectedEvent&&ra("div",{className:a3(["w-full h-[48px] flex flex-col",n.moreInfoExpanded&&"h-[235px]",n.moreInfoExpanded&&"dropped-frames"===n.selectedEvent.kind&&"h-[150px]"]),children:[ra(cw,{selectedEvent:n.selectedEvent}),n.moreInfoExpanded&&ra(cC,{})]}),ra("div",{className:a3(["flex ",n.selectedEvent?"h-[calc(100%-48px)]":"h-full",n.moreInfoExpanded&&"h-[calc(100%-200px)]",n.moreInfoExpanded&&(null==(r=n.selectedEvent)?void 0:r.kind)==="dropped-frames"&&"h-[calc(100%-150px)]"]),children:[ra("div",{className:a3(["h-full min-w-[200px]"]),children:ra(c_,{})}),ra("div",{className:a3(["w-[calc(100%-200px)] h-full overflow-y-auto"]),children:ra(cg,{})})]})]})}),cC=()=>{let{notificationState:e}=e5(sV);if(!e.selectedEvent)throw Error("Invariant must have selected event for more info");let t=e.selectedEvent;return ra("div",{className:a3(["px-4 py-2 border-b border-[#27272A] bg-[#18181B]/50 h-[calc(100%-40px)]","dropped-frames"===t.kind&&"h-[calc(100%-25px)]"]),children:ra("div",{className:a3(["flex flex-col gap-y-4 h-full"]),children:(()=>{switch(t.kind){case"interaction":return ra(ex,{children:[ra("div",{className:a3(["flex items-center gap-x-3"]),children:[ra("span",{className:"text-[#6F6F78] text-xs font-medium",children:"click"===t.type?"Clicked component location":"Typed in component location"}),ra("div",{className:"font-mono text-[#E4E4E7] flex items-center bg-[#27272A] pl-2 py-1 rounded-sm overflow-x-auto",children:t.componentPath.toReversed().map((e,r)=>ra(ex,{children:[ra("span",{style:{lineHeight:"14px"},className:"text-[10px] whitespace-nowrap",children:e},e),r<t.componentPath.length-1&&ra("span",{className:"text-[#6F6F78] mx-0.5",children:"‹"})]}))})]}),ra("div",{className:a3(["flex items-center gap-x-3"]),children:[ra("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Total Time"}),ra("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:[sH(t.timing).toFixed(0),"ms"]})]}),ra("div",{className:a3(["flex items-center gap-x-3"]),children:[ra("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Occurred"}),ra("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:`${((Date.now()-t.timestamp)/1e3).toFixed(0)}s ago`})]})]});case"dropped-frames":return ra(ex,{children:[ra("div",{className:a3(["flex items-center gap-x-3"]),children:[ra("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Total Time"}),ra("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:[sH(t.timing).toFixed(0),"ms"]})]}),ra("div",{className:a3(["flex items-center gap-x-3"]),children:[ra("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Occurred"}),ra("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:`${((Date.now()-t.timestamp)/1e3).toFixed(0)}s ago`})]})]})}})()})})},cz=oh(()=>{var e;let t=cN(),[r,n]=eK(t);eZ(()=>{let e=setTimeout(()=>{n(t)},600);return()=>{clearTimeout(e)}},[t]);let i=c1.inspectState,a="inspecting"===i.value.kind,o="focused"===i.value.kind,[l,s]=eK([]),c=e2(()=>{switch(c1.inspectState.value.kind){case"inspecting":oc.value={view:"none"},c1.inspectState.value={kind:"inspect-off"};return;case"focused":oc.value={view:"inspector"},c1.inspectState.value={kind:"inspecting",hoveredDomElement:null};return;case"inspect-off":oc.value={view:"none"},c1.inspectState.value={kind:"inspecting",hoveredDomElement:null};return;case"uninitialized":return}},[]),d=e2(e=>{if(e.preventDefault(),e.stopPropagation(),!c2.instrumentation)return;let t=!c2.instrumentation.isPaused.value;c2.instrumentation.isPaused.value=t,a8("react-scan-options",{...a6("react-scan-options"),enabled:!t})},[]);tW(()=>{"uninitialized"===c1.inspectState.value.kind&&(c1.inspectState.value={kind:"inspect-off"})});let u=null,p="#999";return a?(u=ra(i1,{name:"icon-inspect"}),p="#8e61e3"):o?(u=ra(i1,{name:"icon-focus"}),p="#8e61e3"):(u=ra(i1,{name:"icon-inspect"}),p="#999"),eQ(()=>{"notifications"!==oc.value.view||s([...new Set(t.map(e=>e.id)).values()])},[t.length,oc.value.view]),ra("div",{className:"flex max-h-9 min-h-9 flex-1 items-stretch overflow-hidden",children:[ra("div",{className:"h-full flex items-center min-w-fit",children:ra("button",{type:"button",id:"react-scan-inspect-element",title:"Inspect element",onClick:c,className:"button flex items-center justify-center h-full w-full pl-3 pr-2.5",style:{color:p},children:u})}),ra("div",{className:"h-full flex items-center justify-center",children:ra("button",{type:"button",id:"react-scan-notifications",title:"Notifications",onClick:()=>{switch("inspect-off"!==c1.inspectState.value.kind&&(c1.inspectState.value={kind:"inspect-off"}),oc.value.view){case"inspector":c1.inspectState.value={kind:"inspect-off"},s([...new Set(t.map(e=>e.id)).values()]),oc.value={view:"notifications"};return;case"notifications":oc.value={view:"none"};return;case"none":s([...new Set(t.map(e=>e.id)).values()]),oc.value={view:"notifications"};return}},className:"button flex items-center justify-center h-full pl-2.5 pr-2.5",style:{color:p},children:ra(sG,{events:r.filter(e=>!l.includes(e.id)).map(e=>"high"===sB(e)),size:16,className:a3(["text-[#999]","notifications"===oc.value.view&&"text-[#8E61E3]"])})})}),ra(ss,{checked:!(null==(e=c2.instrumentation)?void 0:e.isPaused.value),onChange:d,className:"place-self-center",title:"Outline Re-renders"}),c2.options.value.showFPS&&ra(sd,{})]})}),cA=tx(()=>"inspecting"===c1.inspectState.value.kind),c$=tx(()=>a3("relative","flex-1","flex flex-col","rounded-t-lg","overflow-hidden","opacity-100","transition-[opacity]",cA.value&&"opacity-0 duration-0 delay-0")),cM=tx(()=>"inspector"===oc.value.view),cR=tx(()=>"notifications"===oc.value.view),cF=()=>ra("div",{className:a3("flex flex-1 flex-col","overflow-hidden z-10","rounded-lg","bg-black","opacity-100","transition-[border-radius]","peer-hover/left:rounded-l-none","peer-hover/right:rounded-r-none","peer-hover/top:rounded-t-none","peer-hover/bottom:rounded-b-none"),children:[ra("div",{className:c$,children:[ra(sl,{}),ra("div",{className:a3("relative","flex-1 flex","text-white","bg-[#0A0A0A]","transition-opacity delay-150","overflow-hidden","border-b border-[#222]"),children:[ra(cO,{isOpen:cM,children:ra(oK,{})}),ra(cO,{isOpen:cR,children:ra(cE,{})})]})]}),ra(cz,{})]}),cO=({isOpen:e,children:t})=>ra("div",{className:a3("flex-1","opacity-0","overflow-y-auto overflow-x-hidden","transition-opacity delay-0","pointer-events-none",e.value&&"opacity-100 delay-150 pointer-events-auto"),children:ra("div",{className:"absolute inset-0 flex",children:t})}),cj=(e,t,r)=>e+(t-e)*r,cD={frameInterval:1e3/60,speeds:{fast:.51,slow:.1,off:0}},cL=iY&&window.devicePixelRatio||1,cP=()=>{let e=e0(null),t=e0(null),r=e0(null),n=e0(null),i=e0(null),a=e0(0),o=e0(),l=e0(new Map),s=e0(!1),c=e0(0),d=(e,t,i,a)=>{if(!r.current)return;let o=r.current;t.clearRect(0,0,e.width,e.height),t.strokeStyle="rgba(142, 97, 227, 0.5)",t.fillStyle="rgba(173, 97, 230, 0.10)","locked"===i?t.setLineDash([]):t.setLineDash([4]),t.lineWidth=1,t.fillRect(o.left,o.top,o.width,o.height),t.strokeRect(o.left,o.top,o.width,o.height),((e,t,r,i)=>{var a;if(!i)return;let o=null!=(a=(null==i?void 0:i.type)&&z(i.type))?a:"Unknown";e.save(),e.font="12px system-ui, -apple-system, sans-serif";let l=e.measureText(o).width,s=14*("locked"===r),c=6*("locked"===r),d=t.left,u=t.top-24-4;if(e.fillStyle="rgb(37, 37, 38, .75)",e.beginPath(),e.roundRect(d,u,l+16+s+c,24,3),e.fill(),"locked"===r){let t,r,i,a=d+8,o=u+(24-s)/2+2;e.save(),e.strokeStyle="white",e.fillStyle="white",e.lineWidth=1.5,t=.6*s,r=.5*s,e.beginPath(),e.arc(a+(s-t)/2+t/2,o+r/2,t/2,Math.PI,0,!1),e.stroke(),i=.8*s,e.fillRect(a+(s-i)/2,o+r/2,i,.5*s),e.restore(),n.current={x:a,y:o,width:s,height:s}}else n.current=null;e.fillStyle="white",e.textBaseline="middle";e.fillText(o,d+8+("locked"===r?s+c:0),u+12),e.restore()})(t,o,i,a)},u=async(e,t,n,i)=>{if(!e||!t||!n)return;let{parentCompositeFiber:l}=o4(e),s=await o5(e);l&&s&&((e,t,n,i,l)=>{var s,u;let p,h,m;if(t.save(),!r.current){r.current=n,d(e,t,i,l),t.restore();return}p=c2.options.value.animationSpeed,h=null!=(u=cD.speeds[p])?u:cD.speeds.off,m=o=>{if(o-c.current<cD.frameInterval){a.current=requestAnimationFrame(m);return}(c.current=o,r.current)?(r.current={left:cj(r.current.left,n.left,h),top:cj(r.current.top,n.top,h),width:cj(r.current.width,n.width,h),height:cj(r.current.height,n.height,h)},d(e,t,i,l),Math.abs(r.current.left-n.left)>.1||Math.abs(r.current.top-n.top)>.1||Math.abs(r.current.width-n.width)>.1||Math.abs(r.current.height-n.height)>.1?a.current=requestAnimationFrame(m):(r.current=n,d(e,t,i,l),cancelAnimationFrame(a.current),t.restore(),null==s||s())):cancelAnimationFrame(a.current)},cancelAnimationFrame(a.current),clearTimeout(o.current),a.current=requestAnimationFrame(m),o.current=setTimeout(()=>{cancelAnimationFrame(a.current),r.current=n,d(e,t,i,l),t.restore(),null==s||s()},1e3)})(t,n,s,i,l)},p=t=>{if(!e.current||s.current)return;let a=o=>{if(e.current&&"opacity"===o.propertyName&&s.current){var l;let o;e.current.removeEventListener("transitionend",a),(o=(l=e.current).getContext("2d"))&&o.clearRect(0,0,l.width,l.height),r.current=null,n.current=null,i.current=null,l.classList.remove("fade-in"),s.current=!1,null==t||t()}},o=l.current.get("fade-out");o&&(o(),l.current.delete("fade-out")),e.current.addEventListener("transitionend",a),l.current.set("fade-out",()=>{var t;null==(t=e.current)||t.removeEventListener("transitionend",a)}),s.current=!0,e.current.classList.remove("fade-in"),requestAnimationFrame(()=>{var t;null==(t=e.current)||t.classList.add("fade-out")})},h=()=>{e.current&&(s.current=!1,e.current.classList.remove("fade-out"),requestAnimationFrame(()=>{var t;null==(t=e.current)||t.classList.add("fade-in")}))},m=a7(n=>{var a,l;if("inspecting"!==c1.inspectState.peek().kind||!t.current)return;t.current.style.pointerEvents="none";let c=document.elementFromPoint(null!=(a=null==n?void 0:n.clientX)?a:0,null!=(l=null==n?void 0:n.clientY)?l:0);if(t.current.style.removeProperty("pointer-events"),clearTimeout(o.current),c&&c!==e.current){let{parentCompositeFiber:e}=o4(c);if(e){let t=o8(e);if(t)return void(t!==i.current&&(i.current=t,o6.has(t.tagName)?p():h(),c1.inspectState.value={kind:"inspecting",hoveredDomElement:t}))}}r.current&&e.current&&!s.current&&p()},32),f=(e,t)=>{let r=n.current;if(!r)return!1;let i=t.getBoundingClientRect(),a=t.width/i.width,o=t.height/i.height,l=(e.clientX-i.left)*a,s=(e.clientY-i.top)*o,c=l/cL,d=s/cL;return c>=r.x&&c<=r.x+r.width&&d>=r.y&&d<=r.y+r.height},g=r=>{if(r.__reactScanSyntheticEvent)return;let n=c1.inspectState.peek(),a=e.current;if(a&&t.current){if(f(r,a)){r.preventDefault(),r.stopPropagation(),"focused"===n.kind&&(c1.inspectState.value={kind:"inspecting",hoveredDomElement:n.focusedDomElement});return}"inspecting"===n.kind&&(e=>{var t,r;let n=["react-scan-inspect-element","react-scan-power"];if(e.target instanceof HTMLElement&&n.includes(e.target.id))return;let a=null==(t=i.current)?void 0:t.tagName;if(a&&o6.has(a))return;e.preventDefault(),e.stopPropagation();let o=null!=(r=i.current)?r:document.elementFromPoint(e.clientX,e.clientY);if(!o)return;let l=e.composedPath().at(0);if(l instanceof HTMLElement&&n.includes(l.id)){let t=new MouseEvent(e.type,e);t.__reactScanSyntheticEvent=!0,l.dispatchEvent(t);return}let{parentCompositeFiber:s}=o4(o);if(!s)return;let c=o8(s);if(!c){i.current=null,c1.inspectState.value={kind:"inspect-off"};return}c1.inspectState.value={kind:"focused",focusedDomElement:c,fiber:s}})(r)}},v=t=>{var n;if("Escape"!==t.key)return;let a=c1.inspectState.peek();if(e.current&&(null==(n=document.activeElement)?void 0:n.id)!=="react-scan-root"&&(oc.value={view:"none"},"focused"===a.kind||"inspecting"===a.kind))switch(t.preventDefault(),t.stopPropagation(),a.kind){case"focused":h(),r.current=null,i.current=a.focusedDomElement,c1.inspectState.value={kind:"inspecting",hoveredDomElement:a.focusedDomElement};break;case"inspecting":p(()=>{oi.value=!1,c1.inspectState.value={kind:"inspect-off"}})}},w=(e,t)=>{let r=e.getBoundingClientRect();e.width=r.width*cL,e.height=r.height*cL,t.scale(cL,cL),t.save()},b=()=>{let t=c1.inspectState.peek(),n=e.current;if(!n)return;let i=null==n?void 0:n.getContext("2d");i&&(cancelAnimationFrame(a.current),clearTimeout(o.current),w(n,i),r.current=null,"focused"===t.kind&&t.focusedDomElement?u(t.focusedDomElement,n,i,"locked"):"inspecting"===t.kind&&t.hoveredDomElement&&u(t.hoveredDomElement,n,i,"inspecting"))},x=t=>{let r=c1.inspectState.peek(),n=e.current;n&&("inspecting"===r.kind||f(t,n))&&(t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation())};return eZ(()=>{let n=e.current;if(!n)return;let s=null==n?void 0:n.getContext("2d");if(!s)return;w(n,s);let c=c1.inspectState.subscribe(e=>{((e,n,o)=>{var s;let c;switch(null==(s=l.current.get(e.kind))||s(),t.current&&"inspecting"!==e.kind&&(t.current.style.pointerEvents="none"),a.current&&cancelAnimationFrame(a.current),e.kind){case"inspect-off":p();return;case"inspecting":u(e.hoveredDomElement,n,o,"inspecting");break;case"focused":if(!e.focusedDomElement)return;i.current!==e.focusedDomElement&&(i.current=e.focusedDomElement),oc.value={view:"inspector"},u(e.focusedDomElement,n,o,"locked"),(c=c1.lastReportTime.subscribe(()=>{if(a.current&&r.current){let{parentCompositeFiber:t}=o4(e.focusedDomElement);t&&u(e.focusedDomElement,n,o,"locked")}}))&&l.current.set(e.kind,c)}})(e,n,s)});return window.addEventListener("scroll",b,{passive:!0}),window.addEventListener("resize",b,{passive:!0}),document.addEventListener("pointermove",m,{passive:!0,capture:!0}),document.addEventListener("pointerdown",x,{capture:!0}),document.addEventListener("click",g,{capture:!0}),document.addEventListener("keydown",v,{capture:!0}),()=>{for(let e of l.current.values())null==e||e();c(),window.removeEventListener("scroll",b),window.removeEventListener("resize",b),document.removeEventListener("pointermove",m,{capture:!0}),document.removeEventListener("click",g,{capture:!0}),document.removeEventListener("pointerdown",x,{capture:!0}),document.removeEventListener("keydown",v,{capture:!0}),a.current&&cancelAnimationFrame(a.current),clearTimeout(o.current)}},[]),ra(ex,{children:[ra("div",{ref:t,className:a3("fixed top-0 left-0 w-screen h-screen","z-[214748365]"),style:{pointerEvents:"none"}}),ra("canvas",{ref:e,dir:"ltr",className:a3("react-scan-inspector-overlay","fixed top-0 left-0 w-screen h-screen","pointer-events-none","z-[214748367]")})]})},cI=class{constructor(e,t,r){iJ(this,"width",e),iJ(this,"height",t),iJ(this,"safeArea",r),iJ(this,"maxWidth"),iJ(this,"maxHeight"),this.maxWidth=e-r.left-r.right,this.maxHeight=t-r.top-r.bottom}rightEdge(e){return this.width-e-this.safeArea.right}bottomEdge(e){return this.height-e-this.safeArea.bottom}isFullWidth(e){return e>=this.maxWidth}isFullHeight(e){return e>=this.maxHeight}},cW=()=>{let e,t=window.innerWidth,r=window.innerHeight,n=on();return Y&&Y.width===t&&Y.height===r&&(e=Y.safeArea,e.top===n.top&&e.right===n.right&&e.bottom===n.bottom&&e.left===n.left)?Y:Y=new cI(t,r,n)},cU=(e,t,r)=>{let n,i,a="rtl"===getComputedStyle(document.body).direction,o=window.innerWidth,l=window.innerHeight,s=on(),c=550===t,d=c?t:Math.min(t,o-s.left-s.right),u=c?r:Math.min(r,l-s.top-s.bottom),p=s.left,h=o-d-s.right,m=s.top,f=l-u-s.bottom,g=-s.right,v=-(o-d-s.left);switch(e){case"top-right":n=a?g:h,i=m;break;case"bottom-right":n=a?g:h,i=f;break;case"bottom-left":n=a?v:p,i=f;break;case"top-left":n=a?v:p,i=m;break;default:n=p,i=m}return c&&(n=a?Math.min(g,Math.max(n,v)):Math.max(p,Math.min(n,h)),i=Math.max(m,Math.min(i,f))),{x:n,y:i}},cH=(e,t,r)=>{let n=r?cW().maxWidth:cW().maxHeight;return Math.min(Math.max(r?550:400,e+t),n)},cB=({position:e})=>{let t=e0(null),r=e0(null),n=e0(null),i=e0(null);return eZ(()=>{let a=t.current;if(!a)return;let o=()=>{var t,r,n;a.classList.remove("pointer-events-none");let i="focused"===c1.inspectState.value.kind,o="none"!==oc.value.view;(i||o)&&(t=ol.value.corner,r=ol.value.dimensions.isFullWidth,n=ol.value.dimensions.isFullHeight,r&&n||(r||n?r?e!==t.split("-")[0]:!!n&&e!==t.split("-")[1]:((e,t)=>{let[r,n]=t.split("-");return e!==r&&e!==n})(e,t)))?a.classList.remove("hidden","pointer-events-none","opacity-0"):a.classList.add("hidden","pointer-events-none","opacity-0")},l=ol.subscribe(e=>{(null===r.current||null===n.current||null===i.current||e.dimensions.width!==r.current||e.dimensions.height!==n.current||e.corner!==i.current)&&(o(),r.current=e.dimensions.width,n.current=e.dimensions.height,i.current=e.corner)}),s=c1.inspectState.subscribe(()=>{o()});return()=>{l(),s(),r.current=null,n.current=null,i.current=null}},[]),ra("div",{ref:t,onPointerDown:e2(t=>{t.preventDefault(),t.stopPropagation();let r=oa.value;if(!r)return;let n=r.style,{dimensions:i}=ol.value,a=t.clientX,o=t.clientY,l=i.width,s=i.height,c=i.position;ol.value={...ol.value,dimensions:{...i,isFullWidth:!1,isFullHeight:!1,width:l,height:s,position:c}};let d=null,u=t=>{d||(n.transition="none",d=requestAnimationFrame(()=>{let{newSize:r,newPosition:i}=((e,t,r,n,i)=>{let a="rtl"===getComputedStyle(document.body).direction,o=on(),l=window.innerWidth-o.left-o.right,s=window.innerHeight-o.top-o.bottom,c=t.width,d=t.height,u=r.x,p=r.y;if(a&&e.includes("right")){let e=-r.x+t.width-o.right;c=Math.min(l,Math.max(550,Math.min(t.width+n,e))),u=r.x+(c-t.width)}if(a&&e.includes("left")){let e=window.innerWidth-r.x-o.left;c=Math.min(l,Math.max(550,Math.min(t.width-n,e)))}if(!a&&e.includes("right")){let e=window.innerWidth-r.x-o.right;c=Math.min(l,Math.max(550,Math.min(t.width+n,e)))}if(!a&&e.includes("left")){let e=r.x+t.width-o.left;c=Math.min(l,Math.max(550,Math.min(t.width-n,e))),u=r.x-(c-t.width)}if(e.includes("bottom")){let e=window.innerHeight-r.y-o.bottom;d=Math.min(s,Math.max(400,Math.min(t.height+i,e)))}if(e.includes("top")){let e=r.y+t.height-o.top;d=Math.min(s,Math.max(400,Math.min(t.height-i,e))),p=r.y-(d-t.height)}let h=o.left,m=window.innerWidth-o.right-c,f=o.top,g=window.innerHeight-o.bottom-d,v=-o.right,w=-(window.innerWidth-c-o.left);return{newSize:{width:c,height:d},newPosition:{x:u=a?Math.min(v,Math.max(u,w)):Math.max(h,Math.min(u,m)),y:p=Math.max(f,Math.min(p,g))}}})(e,{width:l,height:s},c,t.clientX-a,t.clientY-o);n.transform=`translate3d(${i.x}px, ${i.y}px, 0)`,n.width=`${r.width}px`,n.height=`${r.height}px`;let u=Math.min(Math.floor(r.width-120),Math.max(240,ol.value.componentsTree.width));ol.value={...ol.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:r.width,height:r.height,position:i},componentsTree:{...ol.value.componentsTree,width:u}},d=null}))},p=()=>{d&&(cancelAnimationFrame(d),d=null),document.removeEventListener("pointermove",u),document.removeEventListener("pointerup",p);let{dimensions:e,corner:t}=ol.value,i=cW(),a=i.isFullWidth(e.width),o=i.isFullHeight(e.height),l=t;(a&&o||a||o)&&(l=(e=>{let t=cW(),r={"top-left":Math.hypot(e.x,e.y),"top-right":Math.hypot(t.maxWidth-e.x,e.y),"bottom-left":Math.hypot(e.x,t.maxHeight-e.y),"bottom-right":Math.hypot(t.maxWidth-e.x,t.maxHeight-e.y)},n="top-left";for(let e in r)r[e]<r[n]&&(n=e);return n})(e.position));let s=cU(l,e.width,e.height),c=()=>{r.removeEventListener("transitionend",c)};r.addEventListener("transitionend",c),n.transform=`translate3d(${s.x}px, ${s.y}px, 0)`,ol.value={...ol.value,corner:l,dimensions:{isFullWidth:a,isFullHeight:o,width:e.width,height:e.height,position:s},lastDimensions:{isFullWidth:a,isFullHeight:o,width:e.width,height:e.height,position:s}},a8(i2,{corner:l,dimensions:ol.value.dimensions,lastDimensions:ol.value.lastDimensions,componentsTree:ol.value.componentsTree})};document.addEventListener("pointermove",u,{passive:!0}),document.addEventListener("pointerup",p)},[]),onDblClick:e2(t=>{t.preventDefault(),t.stopPropagation();let r=oa.value;if(!r)return;let n=r.style,{dimensions:i,corner:a}=ol.value,o=cW(),l=o.isFullWidth(i.width),s=o.isFullHeight(i.height),c=l&&s,d=(l||s)&&!c,u=i.width,p=i.height,h=((e,t,r,n,i)=>{if(r){if("top-left"===e)return"bottom-right";if("top-right"===e)return"bottom-left";if("bottom-left"===e)return"top-right";if("bottom-right"===e)return"top-left";let[r,n]=t.split("-");if("left"===e)return`${r}-right`;if("right"===e)return`${r}-left`;if("top"===e)return`bottom-${n}`;if("bottom"===e)return`top-${n}`}if(n){if("left"===e)return`${t.split("-")[0]}-right`;if("right"===e)return`${t.split("-")[0]}-left`}if(i){if("top"===e)return`bottom-${t.split("-")[1]}`;if("bottom"===e)return`top-${t.split("-")[1]}`}return t})(e,a,c,l,s);"left"===e||"right"===e?(u=l?i.width:o.maxWidth,d&&(u=l?550:o.maxWidth)):(p=s?i.height:o.maxHeight,d&&(p=s?400:o.maxHeight)),c&&("left"===e||"right"===e?u=550:p=400);let m=cU(h,u,p),f={isFullWidth:o.isFullWidth(u),isFullHeight:o.isFullHeight(p),width:u,height:p,position:m},g=Math.floor(u-275),v=ol.value.componentsTree.width,w=Math.floor(.3*u),b=l?240:"left"!==e&&"right"!==e||l?Math.min(g,Math.max(240,v)):Math.min(g,Math.max(240,w));requestAnimationFrame(()=>{ol.value={corner:h,dimensions:f,lastDimensions:i,componentsTree:{...ol.value.componentsTree,width:b}},n.transition="all 0.25s cubic-bezier(0, 0, 0.2, 1)",n.width=`${u}px`,n.height=`${p}px`,n.transform=`translate3d(${m.x}px, ${m.y}px, 0)`}),a8(i2,{corner:h,dimensions:f,lastDimensions:i,componentsTree:{...ol.value.componentsTree,width:b}})},[]),className:a3("absolute z-50","flex items-center justify-center","group","transition-colors select-none","peer",{"resize-left peer/left":"left"===e,"resize-right peer/right z-10":"right"===e,"resize-top peer/top":"top"===e,"resize-bottom peer/bottom":"bottom"===e}),children:ra("span",{className:"resize-line-wrapper",children:ra("span",{className:"resize-line",children:ra(i1,{name:"icon-ellipsis",size:18,className:a3("text-neutral-400",("left"===e||"right"===e)&&"rotate-90")})})})})},cV={horizontal:{width:20,height:48},vertical:{width:48,height:20}},cq=()=>{let e=e0(null),t=e0(!1),r=e0(0),n=e0(0),i=e0(!1),a=e2((a=!0)=>{let o,l;if(!e.current)return;let{corner:s}=ol.value;if(ou.value){let e=cV[ou.value.orientation||"horizontal"];o=e.width,l=e.height}else if(t.current){let e=ol.value.lastDimensions;o=cH(e.width,0,!0),l=cH(e.height,0,!1),i.current&&(i.current=!1)}else o=r.current,l=n.current;let c=cU(s,o,l);if(ou.value){let{corner:e,orientation:t="horizontal"}=ou.value,r=cV[t],n=on();switch(e){case"top-left":c="horizontal"===t?{x:-1,y:n.top}:{x:n.left,y:-1};break;case"bottom-left":c="horizontal"===t?{x:-1,y:window.innerHeight-r.height-n.bottom}:{x:n.left,y:window.innerHeight-r.height+1};break;case"top-right":c="horizontal"===t?{x:window.innerWidth-r.width+1,y:n.top}:{x:window.innerWidth-r.width-n.right,y:-1};break;default:c="horizontal"===t?{x:window.innerWidth-r.width+1,y:window.innerHeight-r.height-n.bottom}:{x:window.innerWidth-r.width-n.right,y:window.innerHeight-r.height+1}}}let d=o<550||l<400,u=e.current,p=u.style,h=null,m=()=>{os(),u.removeEventListener("transitionend",m),h&&(cancelAnimationFrame(h),h=null)};u.addEventListener("transitionend",m),p.transition="all 0.25s cubic-bezier(0, 0, 0.2, 1)",h=requestAnimationFrame(()=>{p.width=`${o}px`,p.height=`${l}px`,p.transform=`translate3d(${c.x}px, ${c.y}px, 0)`,h=null});let f=on(),g={isFullWidth:o>=window.innerWidth-f.left-f.right,isFullHeight:l>=window.innerHeight-f.top-f.bottom,width:o,height:l,position:c};ol.value={corner:s,dimensions:g,lastDimensions:t?ol.value.lastDimensions:o>r.current?g:ol.value.lastDimensions,componentsTree:ol.value.componentsTree},a&&!d&&a8(i2,{corner:ol.value.corner,dimensions:ol.value.dimensions,lastDimensions:ol.value.lastDimensions,componentsTree:ol.value.componentsTree}),os()},[]),o=e2(t=>{if(t.target.closest("button, a, input, textarea, select, pre, [contenteditable], [data-react-scan-selectable]")||(t.preventDefault(),!e.current))return;let r=e.current,n=r.style,{dimensions:i}=ol.value,o=t.clientX,l=t.clientY,s=i.position.x,c=i.position.y,d=s,u=c,p=null,h=!1,m=o,f=l,g=e=>{p||(h=!0,m=e.clientX,f=e.clientY,p=requestAnimationFrame(()=>{let e=m-o,t=f-l;d=Number(s)+e,u=Number(c)+t,n.transition="none",n.transform=`translate3d(${d}px, ${u}px, 0)`;let r=d+i.width,h=u+i.height,w=Math.max(0,-d),b=Math.max(0,r-window.innerWidth),x=Math.max(0,-u),y=Math.max(0,h-window.innerHeight),k=Math.min(i.width,w+b),_=Math.min(i.height,x+y),N=k*i.height+_*i.width-k*_>.35*(i.width*i.height);if(!N&&c2.options.value.showFPS){let e=d+i.width;N=e<=0||e-100>=window.innerWidth||u+i.height<=0||u>=window.innerHeight}if(N){let e,t=d+i.width/2,r=u+i.height/2,n=window.innerWidth/2,o=window.innerHeight/2;e=t<n?r<o?"top-left":"bottom-left":r<o?"top-right":"bottom-right";let l=Math.max(w,b),s=Math.max(x,y);ol.value={...ol.value,corner:e,lastDimensions:{...i,position:cU(e,i.width,i.height)}};let c={corner:e,orientation:l>s?"horizontal":"vertical"};ou.value=c,a8(i5,c),a8(i2,ol.value),a(!1),document.removeEventListener("pointermove",g),document.removeEventListener("pointerup",v),p&&(cancelAnimationFrame(p),p=null)}p=null}))},v=()=>{if(!r)return;p&&(cancelAnimationFrame(p),p=null),document.removeEventListener("pointermove",g),document.removeEventListener("pointerup",v);let e=Math.abs(m-o),t=Math.abs(f-l),a=Math.sqrt(e*e+t*t);if(!h||a<60)return;let w=((e,t,r,n,i=100)=>{let a=void 0!==r?e-r:0,o=void 0!==n?t-n:0,l=window.innerWidth/2,s=window.innerHeight/2,c=a>i,d=o>i;if(c||a<-i){let e=t>s;return c?e?"bottom-right":"top-right":e?"bottom-left":"top-left"}if(d||o<-i){let t=e>l;return d?t?"bottom-right":"bottom-left":t?"top-right":"top-left"}return e>l?t>s?"bottom-right":"top-right":t>s?"bottom-left":"top-left"})(m,f,o,l,"focused"===c1.inspectState.value.kind?80:40);if(w===ol.value.corner){n.transition="transform 0.25s cubic-bezier(0, 0, 0.2, 1)";let e=ol.value.dimensions.position;requestAnimationFrame(()=>{n.transform=`translate3d(${e.x}px, ${e.y}px, 0)`});return}let b=cU(w,i.width,i.height);if(d===s&&u===c)return;let x=()=>{n.transition="none",os(),r.removeEventListener("transitionend",x),p&&(cancelAnimationFrame(p),p=null)};r.addEventListener("transitionend",x),n.transition="transform 0.25s cubic-bezier(0, 0, 0.2, 1)",requestAnimationFrame(()=>{n.transform=`translate3d(${b.x}px, ${b.y}px, 0)`}),ol.value={corner:w,dimensions:{isFullWidth:i.isFullWidth,isFullHeight:i.isFullHeight,width:i.width,height:i.height,position:b},lastDimensions:ol.value.lastDimensions,componentsTree:ol.value.componentsTree},a8(i2,{corner:w,dimensions:ol.value.dimensions,lastDimensions:ol.value.lastDimensions,componentsTree:ol.value.componentsTree})};document.addEventListener("pointermove",g),document.addEventListener("pointerup",v)},[]),l=e2(t=>{if(t.preventDefault(),!e.current||!ou.value)return;let{corner:n,orientation:i="horizontal"}=ou.value,o=t.clientX,l=t.clientY,s=!1,c=t=>{if(s)return;let u=t.clientX-o,p=t.clientY-l,h=!1;"horizontal"===i?n.endsWith("left")&&u>50?h=!0:n.endsWith("right")&&u<-50&&(h=!0):n.startsWith("top")&&p>50?h=!0:n.startsWith("bottom")&&p<-50&&(h=!0),h&&(s=!0,ou.value=null,a8(i5,null),0===r.current&&e.current?requestAnimationFrame(()=>{if(e.current){e.current.style.width="min-content",r.current=e.current.offsetWidth||300;let n=ol.value.lastDimensions,i=cH(n.width,0,!0),o=cH(n.height,0,!1),l=t.clientX-i/2,s=t.clientY-o/2,c=on();l=Math.max(c.left,Math.min(l,window.innerWidth-i-c.right)),s=Math.max(c.top,Math.min(s,window.innerHeight-o-c.bottom)),ol.value={...ol.value,dimensions:{...ol.value.dimensions,position:{x:l,y:s}}},a(!0),oc.value=a6(i4)||{view:"none"},setTimeout(()=>{if(e.current){let r=new PointerEvent("pointerdown",{clientX:t.clientX,clientY:t.clientY,pointerId:t.pointerId,bubbles:!0});e.current.dispatchEvent(r)}},100)}}):(a(!0),oc.value=a6(i4)||{view:"none"}),document.removeEventListener("pointermove",c),document.removeEventListener("pointerup",d))},d=()=>{document.removeEventListener("pointermove",c),document.removeEventListener("pointerup",d)};document.addEventListener("pointermove",c),document.addEventListener("pointerup",d)},[]);eZ(()=>{if(!e.current)return;a9(i4),ou.value?(n.current=36,r.current=0):(e.current.style.width="min-content",n.current=36,r.current=e.current.offsetWidth);let o=on();e.current.style.maxWidth=`calc(100vw - ${o.left+o.right}px)`,e.current.style.maxHeight=`calc(100vh - ${o.top+o.bottom}px)`,a(),"focused"===c1.inspectState.value.kind||ou.value||i.current||(ol.value={...ol.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:r.current,height:n.current,position:ol.value.dimensions.position}}),oa.value=e.current;let l=ol.subscribe(t=>{if(!e.current)return;let{x:r,y:n}=t.dimensions.position,{width:i,height:a}=t.dimensions,o=e.current;requestAnimationFrame(()=>{o.style.transform=`translate3d(${r}px, ${n}px, 0)`,o.style.width=`${i}px`,o.style.height=`${a}px`})}),s=oc.subscribe(e=>{t.current="none"!==e.view,a(),ou.value||("none"!==e.view?a8(i4,e):a9(i4))}),c=c1.inspectState.subscribe(e=>{t.current="focused"===e.kind,a()}),d=()=>{a(!0)};return window.addEventListener("resize",d,{passive:!0}),()=>{window.removeEventListener("resize",d),s(),c(),l(),a8(i2,{...oo(),corner:ol.value.corner})}},[]);let[s,c]=eK(!1);eZ(()=>{c(!0)},[]);let d=ou.value,u="";if(d){let{orientation:e="horizontal",corner:t}=d;u="horizontal"===e?(null==t?void 0:t.endsWith("right"))?"rotate-180":"":(null==t?void 0:t.startsWith("bottom"))?"-rotate-90":"rotate-90"}return ra(ex,{children:[ra(cP,{}),ra(cG.Provider,{value:e.current,children:ra("div",{id:"react-scan-toolbar",dir:"ltr",ref:e,onPointerDown:d?l:o,className:a3("fixed inset-0",d?(()=>{let{orientation:e="horizontal",corner:t}=d;return"horizontal"===e?(null==t?void 0:t.endsWith("right"))?"rounded-tl-lg rounded-bl-lg shadow-lg":"rounded-tr-lg rounded-br-lg shadow-lg":(null==t?void 0:t.startsWith("bottom"))?"rounded-tl-lg rounded-tr-lg shadow-lg":"rounded-bl-lg rounded-br-lg shadow-lg"})():"rounded-lg shadow-lg","flex flex-col","font-mono text-[13px]","user-select-none","opacity-0",d?"cursor-pointer":"cursor-move","z-[124124124124]","animate-fade-in animation-duration-300 animation-delay-300","will-change-transform","[touch-action:none]"),style:{WebkitAppRegion:"no-drag"},children:d?ra("button",{type:"button",onClick:()=>{ou.value=null,a8(i5,null),0===r.current&&e.current&&requestAnimationFrame(()=>{e.current&&(e.current.style.width="min-content",r.current=e.current.offsetWidth||300,a(!0))}),oc.value=a6(i4)||{view:"none"}},className:"flex items-center justify-center w-full h-full text-white",title:"Expand toolbar",children:ra(i1,{name:"icon-chevron-right",size:16,className:a3("transition-transform",u)})}):ra(ex,{children:[ra(cB,{position:"top"}),ra(cB,{position:"bottom"}),ra(cB,{position:"left"}),ra(cB,{position:"right"}),ra(cF,{})]})})})]})},cG=ej(null),cJ=()=>ra("svg",{xmlns:"http://www.w3.org/2000/svg",style:"display: none;",children:[ra("title",{children:"React Scan Icons"}),ra("symbol",{id:"icon-inspect",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[ra("path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}),ra("path",{d:"M5 3a2 2 0 0 0-2 2"}),ra("path",{d:"M19 3a2 2 0 0 1 2 2"}),ra("path",{d:"M5 21a2 2 0 0 1-2-2"}),ra("path",{d:"M9 3h1"}),ra("path",{d:"M9 21h2"}),ra("path",{d:"M14 3h1"}),ra("path",{d:"M3 9v1"}),ra("path",{d:"M21 9v2"}),ra("path",{d:"M3 14v1"})]}),ra("symbol",{id:"icon-focus",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[ra("path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}),ra("path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"})]}),ra("symbol",{id:"icon-next",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:ra("path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z"})}),ra("symbol",{id:"icon-previous",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:ra("path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z"})}),ra("symbol",{id:"icon-close",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[ra("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),ra("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),ra("symbol",{id:"icon-replay",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[ra("path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}),ra("path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}),ra("path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}),ra("path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}),ra("circle",{cx:"12",cy:"12",r:"1"}),ra("path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"})]}),ra("symbol",{id:"icon-ellipsis",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[ra("circle",{cx:"12",cy:"12",r:"1"}),ra("circle",{cx:"19",cy:"12",r:"1"}),ra("circle",{cx:"5",cy:"12",r:"1"})]}),ra("symbol",{id:"icon-copy",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[ra("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),ra("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]}),ra("symbol",{id:"icon-check",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:ra("path",{d:"M20 6 9 17l-5-5"})}),ra("symbol",{id:"icon-chevron-right",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:ra("path",{d:"m9 18 6-6-6-6"})}),ra("symbol",{id:"icon-settings",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[ra("path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}),ra("circle",{cx:"12",cy:"12",r:"3"})]}),ra("symbol",{id:"icon-flame",viewBox:"0 0 24 24",children:ra("path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"})}),ra("symbol",{id:"icon-function",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[ra("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}),ra("path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"}),ra("path",{d:"M9 11.2h5.7"})]}),ra("symbol",{id:"icon-triangle-alert",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[ra("path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}),ra("path",{d:"M12 9v4"}),ra("path",{d:"M12 17h.01"})]}),ra("symbol",{id:"icon-gallery-horizontal-end",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[ra("path",{d:"M2 7v10"}),ra("path",{d:"M6 5v14"}),ra("rect",{width:"12",height:"18",x:"10",y:"3",rx:"2"})]}),ra("symbol",{id:"icon-search",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[ra("circle",{cx:"11",cy:"11",r:"8"}),ra("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),ra("symbol",{id:"icon-lock",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[ra("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),ra("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),ra("symbol",{id:"icon-lock-open",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[ra("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),ra("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"})]}),ra("symbol",{id:"icon-sanil",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[ra("path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"}),ra("circle",{cx:"10",cy:"13",r:"8"}),ra("path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"}),ra("path",{d:"M18 3 19.1 5.2"})]})]}),cY=class extends ey{constructor(){super(...arguments),iJ(this,"state",{hasError:!1,error:null}),iJ(this,"handleReset",()=>{this.setState({hasError:!1,error:null})})}static getDerivedStateFromError(e){return{hasError:!0,error:e}}render(){var e;return this.state.hasError?ra("div",{className:"fixed bottom-4 right-4 z-[124124124124]",children:ra("div",{className:"p-3 bg-black rounded-lg shadow-lg w-80",children:[ra("div",{className:"flex items-center gap-2 mb-2 text-red-400 text-sm font-medium",children:[ra(i1,{name:"icon-flame",className:"text-red-500",size:14}),"React Scan ran into a problem"]}),ra("div",{className:"p-2 bg-black rounded font-mono text-xs text-red-300 mb-3 break-words",children:(null==(e=this.state.error)?void 0:e.message)||JSON.stringify(this.state.error)}),ra("button",{type:"button",onClick:this.handleReset,className:"px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded text-xs font-medium transition-colors flex items-center justify-center gap-1.5",children:"Restart"})]})}):this.props.children}},cX=!1,cK=["top","right","bottom","left"],cZ=e=>{if(ot(e))return{ok:!0,value:e};if(!or(e))return{ok:!1,error:`- safeArea must be a non-negative number or { top?, right?, bottom?, left? }. Got "${JSON.stringify(e)}"`};let t={};for(let r of cK){let n=e[r];if(void 0!==n){if(!ot(n))return{ok:!1,error:`- safeArea.${r} must be a non-negative number. Got "${JSON.stringify(n)}"`};t[r]=n}}return{ok:!0,value:t}},cQ=null,c0=null,c1={wasDetailsOpen:tf(!0),isInIframe:tf(iY&&window.self!==window.top),inspectState:tf({kind:"uninitialized"}),fiberRoots:new Set,reportData:new Map,legacyReportData:new Map,lastReportTime:tf(0),interactionListeningForRenders:null,changesListeners:new Map},c2={instrumentation:null,componentAllowList:null,options:tf({enabled:!0,log:!1,showToolbar:!0,animationSpeed:"fast",dangerouslyForceRunInProduction:!1,showFPS:!0,showNotificationCount:!0,allowInIframe:!1}),runInAllEnvironments:!1,onRender:null,Store:c1,version:"0.5.7"};iY&&window.__REACT_SCAN_EXTENSION__&&(window.__REACT_SCAN_VERSION__=c2.version);var c5=e=>{let t=[],r={};for(let n in e){let i=e[n];switch(n){case"enabled":case"log":case"showToolbar":case"showNotificationCount":case"dangerouslyForceRunInProduction":case"showFPS":case"allowInIframe":case"useOffscreenCanvasWorker":"boolean"!=typeof i?t.push(`- ${n} must be a boolean. Got "${i}"`):r[n]=i;break;case"animationSpeed":["slow","fast","off"].includes(i)?r[n]=i:t.push(`- Invalid animation speed "${i}". Using default "fast"`);break;case"safeArea":{let e=cZ(i);e.ok?r.safeArea=e.value:t.push(e.error);break}case"onCommitStart":"function"!=typeof i?t.push(`- ${n} must be a function. Got "${i}"`):r.onCommitStart=i;break;case"onCommitFinish":"function"!=typeof i?t.push(`- ${n} must be a function. Got "${i}"`):r.onCommitFinish=i;break;case"onRender":"function"!=typeof i?t.push(`- ${n} must be a function. Got "${i}"`):r.onRender=i;break;default:t.push(`- Unknown option "${n}"`)}}return t.length>0&&console.warn(`[React Scan] Invalid options:
${t.join("\n")}`),r},c4=null,c3=()=>{if(!1===c4)return!1;null!=X||(X=v());let e=Array.from(X.renderers.values());if(0===e.length)return null;for(let t of e)if("production"!==A(t))return c4=!1,!1;return!0},c7=e=>{var t,r;let n,i,a,o,l,s,c,d,u,p,h,m,f,g,v;null==(t=window.reactScanCleanupListeners)||t.call(window);let w=(n=(e=>{let t;null==G||G(),t=()=>{document.hidden&&(sS=Date.now())},document.addEventListener("visibilitychange",t),G=()=>{document.removeEventListener("visibilitychange",t)};let r=new Map,n=new Map,i=t=>{if(!t.interactionId)return;if(t.interactionId&&t.target&&!n.has(t.interactionId)&&n.set(t.interactionId,t.target),t.target){let e=t.target;for(;e;){if("react-scan-toolbar-root"===e.id||"react-scan-root"===e.id)return;e=e.parentElement}}let i=r.get(t.interactionId);if(i)t.duration>i.latency?(i.entries=[t],i.latency=t.duration):t.duration===i.latency&&t.startTime===i.entries[0].startTime&&i.entries.push(t);else{var a;let n=["pointerup","click"].includes(a=t.name)?"pointer":(a.includes("key"),["keydown","keyup"].includes(a))?"keyboard":null;if(!n)return;let i={id:t.interactionId,latency:t.duration,entries:[t],target:t.target,type:n,startTime:t.startTime,endTime:Date.now(),processingStart:t.processingStart,processingEnd:t.processingEnd,duration:t.duration,inputDelay:t.processingStart-t.startTime,processingDuration:t.processingEnd-t.processingStart,presentationDelay:t.duration-(t.processingEnd-t.startTime),timestamp:Date.now(),timeSinceTabInactive:"never-hidden"===sS?"never-hidden":Date.now()-sS,visibilityState:document.visibilityState,timeOrigin:performance.timeOrigin,referrer:document.referrer};r.set(i.id,i),sE||(sE=requestAnimationFrame(()=>{requestAnimationFrame(()=>{e(r.get(i.id)),sE=null})}))}},a=new PerformanceObserver(e=>{let t=e.getEntries();for(let e=0,r=t.length;e<r;e++)i(t[e])});try{a.observe({type:"event",buffered:!0,durationThreshold:16}),a.observe({type:"first-input",buffered:!0})}catch{}return()=>a.disconnect()})(e=>{sm.publish({kind:"entry-received",entry:e},"recording")}),i=e=>{J=e.composedPath().map(e=>e.id).filter(Boolean).includes("react-scan-toolbar")},document.addEventListener("mouseover",i),sI=i,a=()=>{sI&&document.removeEventListener("mouseover",sI)},o=()=>{sL=performance.now(),sP=performance.timeOrigin},document.addEventListener("visibilitychange",o),l=()=>{document.removeEventListener("visibilitychange",o)},d=function e(){let t=null;sj=null,t=s$(sj={});let r=performance.timeOrigin,n=performance.now();return s=requestAnimationFrame(()=>{c=setTimeout(()=>{let i=performance.now(),a=i-n,o=performance.timeOrigin;sW.push(i+o);let l=sW.filter(e=>i+o-e<=1e3),s=l.length;sW=l;let c=null!==sL&&null!==sP?i+o-(sP+sL)<100:null,d=null!==J&&J;!(a>150)||c||"visible"!==document.visibilityState||d||sD.getState().actions.addEvent({kind:"long-render",id:iQ(),data:{endAt:o+i,startAt:n+r,meta:{fiberRenders:sj,latency:a,fps:s}}}),sL=null,sP=null,null==t||t(),e()},0)}),t}(),u=()=>{d(),cancelAnimationFrame(s),clearTimeout(c)},h=sC("pointer",{onComplete:p=async(e,t,r)=>{sD.getState().actions.addEvent({kind:"interaction",id:iQ(),data:{startAt:t.detailedTiming.blockingTimeStart,endAt:performance.now()+performance.timeOrigin,meta:{...t,kind:r.kind}}});let n=sm.getChannelState("recording");t.detailedTiming.stopListeningForRenders(),n.length&&sm.updateChannelState("recording",()=>new sp(50))}}),m=sC("keyboard",{onComplete:p}),r=e=>{sh.setState(sp.fromArray(sh.getCurrentState().concat(e),150))},f=sm.subscribe("recording",e=>{let t="auto-complete-race"===e.kind?sT.find(t=>t.interactionUUID===e.interactionUUID):((e,t)=>{let r=null;for(let n of t){if(n.type!==e.type)continue;if(null===r){r=n;continue}let t=(e,t)=>Math.abs(e.startDateTime)-(t.startTime+t.timeOrigin);t(n,e)<t(r,e)&&(r=n)}return r})(e.entry,sT);t&&r(t.completeInteraction(e))}),()=>{a(),l(),u(),n(),h(),f(),m()}),b=c6();window.reactScanCleanupListeners=()=>{w(),null==b||b()};let x=window.__REACT_SCAN_TOOLBAR_CONTAINER__;if(!e){null==x||x.remove();return}null==x||x.remove();let{shadowRoot:y}=(()=>{if(cQ&&c0)return{rootContainer:cQ,shadowRoot:c0};(cQ=document.createElement("div")).id="react-scan-root",c0=cQ.attachShadow({mode:"open"});let e=document.createElement("style");return e.textContent=sn,c0.appendChild(e),document.documentElement.appendChild(cQ),{rootContainer:cQ,shadowRoot:c0}})();(g=document.createElement("div")).id="react-scan-toolbar-root",window.__REACT_SCAN_TOOLBAR_CONTAINER__=g,y.appendChild(g),eO(ra(cY,{children:ra(ex,{children:[ra(cJ,{}),ra(cq,{})]})}),g),v=g.remove.bind(g),g.remove=()=>{window.__REACT_SCAN_TOOLBAR_CONTAINER__=void 0,g.hasChildNodes()&&(eO(null,g),eO(null,g)),v()}},c6=()=>{try{let e=document.documentElement;return(e=>{if(!(ci=(cn=document.createElement("canvas")).getContext("2d",{alpha:!0})))return null;let t=window.devicePixelRatio||1,{innerWidth:r,innerHeight:n}=window;cn.style.width=`${r}px`,cn.style.height=`${n}px`,cn.width=r*t,cn.height=n*t,cn.style.position="fixed",cn.style.left="0",cn.style.top="0",cn.style.pointerEvents="none",cn.style.zIndex="2147483600",ci.scale(t,t),e.appendChild(cn),cd&&window.removeEventListener("resize",cd);let i=()=>{if(!cn||!ci)return;let e=window.devicePixelRatio||1,{innerWidth:t,innerHeight:r}=window;cn.style.width=`${t}px`,cn.style.height=`${r}px`,cn.width=t*e,cn.height=r*e,ci.scale(e,e),cc()};return cd=i,window.addEventListener("resize",i),ca.subscribe(()=>{requestAnimationFrame(()=>{cc()})}),cu})(e)}catch(e){"verbose"===c2.options.value._debug&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",e)}},c8=new WeakSet;e.s(["scan",0,(e={})=>{(e=>{var t;try{let r=c5(e);if(0===Object.keys(r).length)return;let n="showToolbar"in r&&void 0!==r.showToolbar,i={...c2.options.value,...r},{instrumentation:a}=c2;a&&"enabled"in r&&(a.isPaused.value=!1===r.enabled),c2.options.value=i;try{let e=null==(t=a6("react-scan-options"))?void 0:t.enabled;"boolean"==typeof e&&(i.enabled=e)}catch(e){"verbose"===c2.options.value._debug&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",e)}return a8("react-scan-options",(e=>{let{onCommitStart:t,onRender:r,onCommitFinish:n,...i}=e;return i})(i)),n&&c7(!!i.showToolbar),i}catch(e){"verbose"===c2.options.value._debug&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",e)}})(e),(!c1.isInIframe.value||c2.options.value.allowInIframe||c2.runInAllEnvironments)&&(!1!==e.enabled||!0===e.showToolbar)&&(()=>{try{if(!iY||!c2.runInAllEnvironments&&c3()&&!c2.options.value.dangerouslyForceRunInProduction)return;(()=>{if(!cX){if(cX=!0,!("u"<typeof window)&&!window.__REACT_GRAB__&&navigator.onLine&&iq.version)try{fetch(`https://www.react-grab.com/api/version?source=react-scan&v=${iq.version}&t=${Date.now()}`,{referrerPolicy:"origin",keepalive:!0,priority:"low",cache:"no-store"}).then(e=>e.ok?e.text():null).then(e=>{if(!e)return;let t=e.trim();/^\d+\.\d+\.\d+/.test(t)&&t!==iq.version&&console.warn(`[React Scan] react-grab v${iq.version} is outdated (latest: v${t}). Update react-scan to pick up the newer react-grab.`)}).catch(()=>null)}catch{}}})();let e=a6("react-scan-options");if(e){let t=c5(e);Object.keys(t).length>0&&(c2.options.value={...c2.options.value,...t})}let t=c2.options;(e=>{var t,r;let n,i,o;if(globalThis.__REACT_SCAN_STOP__||sr)return;sr=!0;let l=!1,s=()=>{l||(n&&cancelAnimationFrame(n),n=requestAnimationFrame(()=>{l=!0;let t=(()=>{var e;let t,r;(r=document.querySelector("[data-react-scan]"))&&r.remove();let n=document.createElement("div");n.setAttribute("data-react-scan","true");let i=n.attachShadow({mode:"open"}),a=document.createElement("canvas");if(a.style.position="fixed",a.style.top="0",a.style.left="0",a.style.pointerEvents="none",a.style.zIndex="2147483646",a.setAttribute("aria-hidden","true"),i.appendChild(a),!a)return null;lK=l9(),lY=a;let{innerWidth:o,innerHeight:l}=window;a.style.width=`${o}px`,a.style.height=`${l}px`;let s=o*lK,c=l*lK;a.width=s,a.height=c;let d=!1===c2.options.value.useOffscreenCanvasWorker;if(l8&&!window.__REACT_SCAN_EXTENSION__&&!d)try{let e=URL.createObjectURL(new Blob(['"use strict";(()=>{var D="Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace";var T=(t,n)=>{let r=n-t;return Math.abs(r)<.5?n:t+r*.2};var x="115,97,230";function P(t,n){return n[0]-t[0]}function F(t){return[...t.entries()].sort(P)}function v([t,n]){let r=`${n.slice(0,4).join(", ")} \\xD7${t}`;return r.length>40&&(r=`${r.slice(0,40)}\\u2026`),r}var $=t=>{let n=new Map;for(let{name:e,count:u}of t)n.set(e,(n.get(e)||0)+u);let r=new Map;for(let[e,u]of n){let A=r.get(u);A?A.push(e):r.set(u,[e])}let d=F(r),a=v(d[0]);for(let e=1,u=d.length;e<u;e++)a+=", "+v(d[e]);return a.length>40?`${a.slice(0,40)}\\u2026`:a},H=t=>{let n=0;for(let r of t)n+=r.width*r.height;return n};var N=(t,n)=>{let r=t.getContext("2d",{alpha:!0});return r&&r.scale(n,n),r},X=(t,n,r,d)=>{t.clearRect(0,0,n.width/r,n.height/r);let a=new Map,e=new Map;for(let i of d.values()){let{x:o,y:c,width:l,height:g,targetX:s,targetY:f,targetWidth:h,targetHeight:m,frame:O}=i;s!==o&&(i.x=T(o,s)),f!==c&&(i.y=T(c,f)),h!==l&&(i.width=T(l,h)),m!==g&&(i.height=T(g,m));let M=`${s??o},${f??c}`,L=`${M},${h??l},${m??g}`,S=a.get(M);S?S.push(i):a.set(M,[i]);let C=1-O/45;i.frame++;let _=e.get(L)||{x:o,y:c,width:l,height:g,alpha:C};C>_.alpha&&(_.alpha=C),e.set(L,_)}for(let{x:i,y:o,width:c,height:l,alpha:g}of e.values()){t.strokeStyle=`rgba(${x},${g})`,t.lineWidth=1;let s=Math.round(i)+.5,f=Math.round(o)+.5,h=Math.round(c),m=Math.round(l);t.beginPath(),t.rect(s,f,h,m),t.stroke(),t.fillStyle=`rgba(${x},${g*.1})`,t.fill()}t.font=`11px ${D}`;let u=new Map;t.textRendering="optimizeSpeed";for(let i of a.values()){let o=i[0],{x:c,y:l,frame:g}=o,s=1-g/45,f=$(i),{width:h}=t.measureText(f),m=11;u.set(`${c},${l},${h},${f}`,{text:f,width:h,height:m,alpha:s,x:c,y:l,outlines:i});let O=l-m-4;if(O<0&&(O=0),g>45)for(let M of i)d.delete(String(M.id))}let A=Array.from(u.entries()).sort(([i,o],[c,l])=>H(l.outlines)-H(o.outlines));for(let[i,o]of A)if(u.has(i))for(let[c,l]of u.entries()){if(i===c)continue;let{x:g,y:s,width:f,height:h}=o,{x:m,y:O,width:M,height:L}=l;g+f>m&&m+M>g&&s+h>O&&O+L>s&&(o.text=$(o.outlines.concat(l.outlines)),o.width=t.measureText(o.text).width,u.delete(c))}for(let i of u.values()){let{x:o,y:c,alpha:l,width:g,height:s,text:f}=i,h=c-s-4;h<0&&(h=0),t.fillStyle=`rgba(${x},${l})`,t.fillRect(o,h,g+4,s+4),t.fillStyle=`rgba(255,255,255,${l})`,t.fillText(f,o+2,h+s)}return d.size>0};var p=null,w=null,b=1,y=new Map,E=null,R=()=>{if(!w||!p)return;X(w,p,b,y)?E=requestAnimationFrame(R):E=null};self.onmessage=t=>{let{type:n}=t.data;if(n==="init"&&(p=t.data.canvas,b=t.data.dpr,p&&(p.width=t.data.width,p.height=t.data.height,w=N(p,b))),!(!p||!w)){if(n==="resize"){b=t.data.dpr,p.width=t.data.width*b,p.height=t.data.height*b,w.resetTransform(),w.scale(b,b),R();return}if(n==="draw-outlines"){let{data:r,names:d}=t.data,a=new Float32Array(r);for(let e=0;e<a.length;e+=7){let u=a[e+2],A=a[e+3],i=a[e+4],o=a[e+5],c=a[e+6],l={id:a[e],name:d[e/7],count:a[e+1],x:u,y:A,width:i,height:o,frame:0,targetX:u,targetY:A,targetWidth:i,targetHeight:o,didCommit:c},g=String(l.id),s=y.get(g);s?(s.count++,s.frame=0,s.targetX=u,s.targetY=A,s.targetWidth=i,s.targetHeight=o,s.didCommit=c):y.set(g,l)}E||(E=requestAnimationFrame(R));return}if(n==="scroll"){let{deltaX:r,deltaY:d}=t.data;for(let a of y.values()){let e=a.x-r,u=a.y-d;a.targetX=e,a.targetY=u}}}};})();\n'],{type:"application/javascript"}));lJ=new Worker(e);let t=a.transferControlToOffscreen();lJ.postMessage({type:"init",canvas:t,width:a.width,height:a.height,dpr:lK},[t])}catch(e){lJ=null,"verbose"===c2.options.value._debug&&console.warn("Failed to initialize OffscreenCanvas worker:",e)}lJ||(e=lK,(t=a.getContext("2d",{alpha:!0}))&&t.scale(e,e),lX=t);let u=!1;window.addEventListener("resize",()=>{u||(u=!0,setTimeout(()=>{let e=window.innerWidth,t=window.innerHeight;lK=l9(),a.style.width=`${e}px`,a.style.height=`${t}px`,lJ?lJ.postMessage({type:"resize",width:e,height:t,dpr:lK}):(a.width=e*lK,a.height=t*lK,lX&&(lX.resetTransform(),lX.scale(lK,lK)),l6()),u=!1}))});let p=window.scrollX,h=window.scrollY,m=!1;return window.addEventListener("scroll",()=>{m||(m=!0,setTimeout(()=>{let{scrollX:e,scrollY:t}=window,r=e-p,n=t-h;p=e,h=t,lJ?lJ.postMessage({type:"scroll",deltaX:r,deltaY:n}):requestAnimationFrame(lG.bind(null,lQ,r,n)),m=!1},32))}),setInterval(()=>{l1.size&&requestAnimationFrame(l7)},32),i.appendChild(a),n})();t&&document.documentElement.appendChild(t),e()}))},c=(t="react-scan-devtools-0.1.0",r={onCommitStart:()=>{var e,t;null==(t=(e=c2.options.value).onCommitStart)||t.call(e)},onActive:(i=!1,()=>{globalThis.__REACT_SCAN_STOP__||i||(i=!0,s(),window.__REACT_SCAN_EXTENSION__||(globalThis.__REACT_SCAN__={ReactScanInternals:c2}),clearInterval(q),q=setInterval(()=>{se&&(c1.lastReportTime.value=Date.now(),se=!1)},50),(()=>{if(window.hideIntro){window.hideIntro=void 0;return}console.log("%c[·] %cReact Scan","font-weight:bold;color:#7a68e8;font-size:20px;","font-weight:bold;font-size:14px;")})())}),onError:()=>{},isValidFiber:st,onRender:(e,t)=>{var r,n,i,a;b(e)&&(null==(r=c1.interactionListeningForRenders)||r.call(c1,e,t));let o=null==(n=c2.instrumentation)?void 0:n.isPaused.value,l="inspect-off"===c1.inspectState.value.kind||"uninitialized"===c1.inspectState.value.kind;o&&l||(o||(e=>{if(!b(e))return;let t="string"==typeof e.type?e.type:z(e);if(!t)return;let r=l0.get(e),n=(e=>{let t=[],r=[];for(w(e)?t.push(e):e.child&&r.push(e.child);r.length;){let e=r.pop();if(!e)break;w(e)?t.push(e):e.child&&r.push(e.child),e.sibling&&r.push(e.sibling)}return t})(e),i=y(e);r?r.count++:(l0.set(e,{name:t,count:1,elements:n.map(e=>e.stateNode),didCommit:+!!i}),l1.add(e))})(e),c2.options.value.log&&(e=>{var t;let r=new Map;for(let n=0,i=e.length;n<i;n++){let i=e[n];if(!i.componentName)continue;let a=null!=(t=r.get(i.componentName))?t:[],o=iK([{aggregatedCount:1,computedKey:null,name:i.componentName,frame:null,...i,changes:{type:i.changes.reduce((e,t)=>e|t.type,0),unstable:i.changes.some(e=>e.unstable)},phase:i.phase,computedCurrent:null}]);if(!o)continue;let l=null,s=null;if(i.changes)for(let e=0,t=i.changes.length;e<t;e++){let{name:t,prevValue:r,nextValue:n,unstable:o,type:c}=i.changes[e];1===c?(null!=l||(l={}),null!=s||(s={}),l[`${o?"⚠️":""}${t} (prev)`]=r,s[`${o?"⚠️":""}${t} (next)`]=n):a.push({prev:r,next:n,type:4===c?"context":"state",unstable:null!=o&&o})}l&&s&&a.push({prev:l,next:s,type:"props",unstable:!1}),r.set(o,a)}for(let[e,t]of Array.from(r.entries())){for(let{type:r,prev:n,next:i,unstable:a}of(console.group(`%c${e}`,"background: hsla(0,0%,70%,.3); border-radius:3px; padding: 0 2px;"),t))console.log(`${r}:`,a?"⚠️":"",n,"!==",i);console.groupEnd()}})(t),"focused"===c1.inspectState.value.kind&&(ow.value=Date.now()),l||(e=>{var t,r;if(b(e)&&!1!==c2.options.value.showToolbar&&"focused"===c1.inspectState.value.kind){let{selfTime:n}=E(e),i=z(e.type),a=F(e),o=c1.reportData.get(a),l=null!=(t=null==o?void 0:o.count)?t:0,s=null!=(r=null==o?void 0:o.time)?r:0,c=c1.changesListeners.get(F(e));if(null==c?void 0:c.length){let t,r=o7(e).map(e=>({type:1,name:e.name,value:e.value,prevValue:e.prevValue,unstable:!1})),n=(e=>{var t,r;if(!e)return[];let n=[];if(0===e.tag||11===e.tag||15===e.tag||14===e.tag){let r=e.memoizedState,i=null==(t=e.alternate)?void 0:t.memoizedState,a=0;for(;r;){if(r.queue&&void 0!==r.memoizedState){let e={type:2,name:a.toString(),value:r.memoizedState,prevValue:null==i?void 0:i.memoizedState};iZ(e.prevValue,e.value)||n.push(e)}r=r.next,i=null==i?void 0:i.next,a++}return n}if(1===e.tag){let t={type:3,name:"state",value:e.memoizedState,prevValue:null==(r=e.alternate)?void 0:r.memoizedState};iZ(t.prevValue,t.value)||n.push(t)}return n})(e),i=(t=[],((e,t)=>{try{let r=e.dependencies,n=e.alternate?.dependencies;if(!r||!n||"object"!=typeof r||!("firstContext"in r)||"object"!=typeof n||!("firstContext"in n))return!1;let i=r.firstContext,a=n.firstContext;for(;i&&"object"==typeof i&&"memoizedValue"in i||a&&"object"==typeof a&&"memoizedValue"in a;){if(!0===t(i,a))return!0;i=i?.next,a=a?.next}}catch{}})(e,lR.bind(t)),t).map(e=>({name:e.name,type:4,value:e.value,contextType:e.contextType}));c.forEach(e=>{e({propsChanges:r,stateChanges:n,contextChanges:i})})}let d={count:l+1,time:s+n||0,renders:[],displayName:i,type:C(e.type)||null,changes:[]};c1.reportData.set(a,d),se=!0}})(e),null==(a=(i=c2.options.value).onRender)||a.call(i,e,t))},onCommitFinish:()=>{var e,t;s(),null==(t=(e=c2.options.value).onCommitFinish)||t.call(e)},onPostCommitFiberRoot(){s()},trackChanges:!1},o={isPaused:tf(!c2.options.value.enabled),fiberRoots:new WeakSet},lF.set(t,{key:t,config:r,instrumentation:o}),lO||(lO=!0,(e=>{let t=v(e.onActive);t._instrumentationSource=e.name??a;let r=t.onCommitFiberRoot;if(e.onCommitFiberRoot){let n=(t,i,a)=>{r!==n&&(r?.(t,i,a),e.onCommitFiberRoot?.(t,i,a))};t.onCommitFiberRoot=n}let n=t.onCommitFiberUnmount;if(e.onCommitFiberUnmount){let r=(i,a)=>{t.onCommitFiberUnmount===r&&(n?.(i,a),e.onCommitFiberUnmount?.(i,a))};t.onCommitFiberUnmount=r}let i=t.onPostCommitFiberRoot;if(e.onPostCommitFiberRoot){let r=(n,a)=>{t.onPostCommitFiberRoot===r&&(i?.(n,a),e.onPostCommitFiberRoot?.(n,a))};t.onPostCommitFiberRoot=r}})({name:"react-scan",onActive:r.onActive,onCommitFiberRoot(e,t){o.fiberRoots.add(t);let r=lj();for(let e of r)e.config.onCommitStart();for(let e of(((e,t)=>{let r="current"in e?e.current:e,n=I.get(e);n||(n={id:P++,prevFiber:null},I.set(e,n));let{prevFiber:i}=n;if(r)if(null!==i){let e=i&&null!=i.memoizedState&&null!=i.memoizedState.element&&!0!==i.memoizedState.isDehydrated,n=null!=r.memoizedState&&null!=r.memoizedState.element&&!0!==r.memoizedState.isDehydrated;!e&&n?O(t,r,!1):e&&n?j(t,r,r.alternate,null):e&&!n&&D(t,r)}else O(t,r,!0);else D(t,r);n.prevFiber=r})(t.current,(e,t)=>{let r=C(e.type);if(!r)return null;let n=lj(),i=[];for(let t=0,r=n.length;t<r;t++)n[t].config.isValidFiber(e)&&i.push(t);if(!i.length)return null;let a=[];if(n.some(e=>e.config.trackChanges)){let t=lv(e).changes,r=lw(e).changes,n=lb(e).changes;for(let n of(a.push.apply(null,t.map(e=>({type:1,name:e.name,value:e.value}))),r))1===e.tag?a.push({type:3,name:n.name.toString(),value:n.value}):a.push({type:2,name:n.name.toString(),value:n.value});a.push.apply(null,n.map(e=>({type:4,name:e.name,value:e.value,contextType:Number(e.contextType)})))}let{selfTime:o,totalTime:l}=E(e),s=lA(),c={phase:lN[t],componentName:z(r),count:1,changes:a,time:o,forget:T(e),unnecessary:null,didCommit:y(e),fps:s},d=a.length>0,u=(e=>{let t=[],r=[e];for(;r.length;){let e=r.pop();e&&(w(e)&&y(e)&&x(e)&&t.push(e),e.child&&r.push(e.child),e.sibling&&r.push(e.sibling))}return t})(e).length>0;"update"===t&&((e,t,r,n,i)=>{let a=Date.now(),o=lP(e);if((n||i)&&(!o||a-(o.lastRenderTimestamp||0)>16)){var l;let n,i,s,c=o||{selfTime:0,totalTime:0,renderCount:0,lastRenderTimestamp:a};c.renderCount=(c.renderCount||0)+1,c.selfTime=t||0,c.totalTime=r||0,c.lastRenderTimestamp=a,l={...c},n=C(e.type),i=lL(e),(s=lD.get(n))||(s=new Map,lD.set(n,s)),s.set(i,l)}})(e,o,l,d,u);for(let t=0,r=i.length;t<r;t++)n[i[t]].config.onRender(e,[c])}),r))e.config.onCommitFinish()},onPostCommitFiberRoot(){for(let e of lj())e.config.onPostCommitFiberRoot()}})),o);c2.instrumentation=c})(()=>{c7(!!t.value.showToolbar)}),iY&&setTimeout(()=>{let e;e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__,e?._instrumentationIsActive||d(e)||h(e)||console.error("[React Scan] Failed to load. Must import React Scan before React runs.")},5e3)}catch(e){"verbose"===c2.options.value._debug&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",e)}})()}],581495)}]);