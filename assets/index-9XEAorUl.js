import{r as i}from"./index-BP8_t0zE.js";import{d as N,u as ee,P as U,b as V,g as Pe,e as Oe}from"./index-BTQGKeGX.js";import{j}from"./jsx-runtime-CexXSJP5.js";import{E as Le}from"./index-B1txWHSv.js";function Re(e,t=globalThis?.document){const n=N(e);i.useEffect(()=>{const r=a=>{a.key==="Escape"&&n(a)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var Te="DismissableLayer",$="dismissableLayer.update",Ae="dismissableLayer.pointerDownOutside",ke="dismissableLayer.focusOutside",te,ve=i.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),De=i.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:a,onFocusOutside:u,onInteractOutside:s,onDismiss:o,...b}=e,d=i.useContext(ve),[f,h]=i.useState(null),v=f?.ownerDocument??globalThis?.document,[,p]=i.useState({}),C=ee(t,y=>h(y)),c=Array.from(d.layers),[l]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),m=c.indexOf(l),w=f?c.indexOf(f):-1,E=d.layersWithOutsidePointerEventsDisabled.size>0,g=w>=m,S=xe(y=>{const L=y.target,F=[...d.branches].some(H=>H.contains(L));!g||F||(a?.(y),s?.(y),y.defaultPrevented||o?.())},v),O=Me(y=>{const L=y.target;[...d.branches].some(H=>H.contains(L))||(u?.(y),s?.(y),y.defaultPrevented||o?.())},v);return Re(y=>{w===d.layers.size-1&&(r?.(y),!y.defaultPrevented&&o&&(y.preventDefault(),o()))},v),i.useEffect(()=>{if(f)return n&&(d.layersWithOutsidePointerEventsDisabled.size===0&&(te=v.body.style.pointerEvents,v.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(f)),d.layers.add(f),ne(),()=>{n&&d.layersWithOutsidePointerEventsDisabled.size===1&&(v.body.style.pointerEvents=te)}},[f,v,n,d]),i.useEffect(()=>()=>{f&&(d.layers.delete(f),d.layersWithOutsidePointerEventsDisabled.delete(f),ne())},[f,d]),i.useEffect(()=>{const y=()=>p({});return document.addEventListener($,y),()=>document.removeEventListener($,y)},[]),j.jsx(U.div,{...b,ref:C,style:{pointerEvents:E?g?"auto":"none":void 0,...e.style},onFocusCapture:V(e.onFocusCapture,O.onFocusCapture),onBlurCapture:V(e.onBlurCapture,O.onBlurCapture),onPointerDownCapture:V(e.onPointerDownCapture,S.onPointerDownCapture)})});De.displayName=Te;var Fe="DismissableLayerBranch",Ne=i.forwardRef((e,t)=>{const n=i.useContext(ve),r=i.useRef(null),a=ee(t,r);return i.useEffect(()=>{const u=r.current;if(u)return n.branches.add(u),()=>{n.branches.delete(u)}},[n.branches]),j.jsx(U.div,{...e,ref:a})});Ne.displayName=Fe;function xe(e,t=globalThis?.document){const n=N(e),r=i.useRef(!1),a=i.useRef(()=>{});return i.useEffect(()=>{const u=o=>{if(o.target&&!r.current){let b=function(){he(Ae,n,d,{discrete:!0})};const d={originalEvent:o};o.pointerType==="touch"?(t.removeEventListener("click",a.current),a.current=b,t.addEventListener("click",a.current,{once:!0})):b()}else t.removeEventListener("click",a.current);r.current=!1},s=window.setTimeout(()=>{t.addEventListener("pointerdown",u)},0);return()=>{window.clearTimeout(s),t.removeEventListener("pointerdown",u),t.removeEventListener("click",a.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function Me(e,t=globalThis?.document){const n=N(e),r=i.useRef(!1);return i.useEffect(()=>{const a=u=>{u.target&&!r.current&&he(ke,n,{originalEvent:u},{discrete:!1})};return t.addEventListener("focusin",a),()=>t.removeEventListener("focusin",a)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function ne(){const e=new CustomEvent($);document.dispatchEvent(e)}function he(e,t,n,{discrete:r}){const a=n.originalEvent.target,u=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&a.addEventListener(e,t,{once:!0}),r?Pe(a,u):a.dispatchEvent(u)}var X="focusScope.autoFocusOnMount",Y="focusScope.autoFocusOnUnmount",re={bubbles:!1,cancelable:!0},Ie="FocusScope",Be=i.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:a,onUnmountAutoFocus:u,...s}=e,[o,b]=i.useState(null),d=N(a),f=N(u),h=i.useRef(null),v=ee(t,c=>b(c)),p=i.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;i.useEffect(()=>{if(r){let c=function(E){if(p.paused||!o)return;const g=E.target;o.contains(g)?h.current=g:R(h.current,{select:!0})},l=function(E){if(p.paused||!o)return;const g=E.relatedTarget;g!==null&&(o.contains(g)||R(h.current,{select:!0}))},m=function(E){if(document.activeElement===document.body)for(const S of E)S.removedNodes.length>0&&R(o)};document.addEventListener("focusin",c),document.addEventListener("focusout",l);const w=new MutationObserver(m);return o&&w.observe(o,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",c),document.removeEventListener("focusout",l),w.disconnect()}}},[r,o,p.paused]),i.useEffect(()=>{if(o){oe.add(p);const c=document.activeElement;if(!o.contains(c)){const m=new CustomEvent(X,re);o.addEventListener(X,d),o.dispatchEvent(m),m.defaultPrevented||(We(He(me(o)),{select:!0}),document.activeElement===c&&R(o))}return()=>{o.removeEventListener(X,d),setTimeout(()=>{const m=new CustomEvent(Y,re);o.addEventListener(Y,f),o.dispatchEvent(m),m.defaultPrevented||R(c??document.body,{select:!0}),o.removeEventListener(Y,f),oe.remove(p)},0)}}},[o,d,f,p]);const C=i.useCallback(c=>{if(!n&&!r||p.paused)return;const l=c.key==="Tab"&&!c.altKey&&!c.ctrlKey&&!c.metaKey,m=document.activeElement;if(l&&m){const w=c.currentTarget,[E,g]=_e(w);E&&g?!c.shiftKey&&m===g?(c.preventDefault(),n&&R(E,{select:!0})):c.shiftKey&&m===E&&(c.preventDefault(),n&&R(g,{select:!0})):m===w&&c.preventDefault()}},[n,r,p.paused]);return j.jsx(U.div,{tabIndex:-1,...s,ref:v,onKeyDown:C})});Be.displayName=Ie;function We(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(R(r,{select:t}),document.activeElement!==n)return}function _e(e){const t=me(e),n=ae(t,e),r=ae(t.reverse(),e);return[n,r]}function me(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const a=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||a?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function ae(e,t){for(const n of e)if(!Ue(n,{upTo:t}))return n}function Ue(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function je(e){return e instanceof HTMLInputElement&&"select"in e}function R(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&je(e)&&t&&e.select()}}var oe=Ke();function Ke(){let e=[];return{add(t){const n=e[0];t!==n&&n?.pause(),e=ie(e,t),e.unshift(t)},remove(t){e=ie(e,t),e[0]?.resume()}}}function ie(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function He(e){return e.filter(t=>t.tagName!=="A")}var Ve="Portal",Xe=i.forwardRef((e,t)=>{const{container:n,...r}=e,[a,u]=i.useState(!1);Oe(()=>u(!0),[]);const s=n||a&&globalThis?.document?.body;return s?Le.createPortal(j.jsx(U.div,{...r,ref:t}),s):null});Xe.displayName=Ve;var z=0;function It(){i.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??ce()),document.body.insertAdjacentElement("beforeend",e[1]??ce()),z++,()=>{z===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),z--}},[])}function ce(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var P=function(){return P=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(t[u]=n[u])}return t},P.apply(this,arguments)};function pe(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}function Ye(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,u;r<a;r++)(u||!(r in t))&&(u||(u=Array.prototype.slice.call(t,0,r)),u[r]=t[r]);return e.concat(u||Array.prototype.slice.call(t))}var W="right-scroll-bar-position",_="width-before-scroll-bar",ze="with-scroll-bars-hidden",Ge="--removed-body-scroll-bar-size";function G(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function Ze(e,t){var n=i.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var a=n.value;a!==r&&(n.value=r,n.callback(r,a))}}}})[0];return n.callback=t,n.facade}var qe=typeof window<"u"?i.useLayoutEffect:i.useEffect,ue=new WeakMap;function Qe(e,t){var n=Ze(null,function(r){return e.forEach(function(a){return G(a,r)})});return qe(function(){var r=ue.get(n);if(r){var a=new Set(r),u=new Set(e),s=n.current;a.forEach(function(o){u.has(o)||G(o,null)}),u.forEach(function(o){a.has(o)||G(o,s)})}ue.set(n,e)},[e]),n}function $e(e){return e}function Je(e,t){t===void 0&&(t=$e);var n=[],r=!1,a={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(u){var s=t(u,r);return n.push(s),function(){n=n.filter(function(o){return o!==s})}},assignSyncMedium:function(u){for(r=!0;n.length;){var s=n;n=[],s.forEach(u)}n={push:function(o){return u(o)},filter:function(){return n}}},assignMedium:function(u){r=!0;var s=[];if(n.length){var o=n;n=[],o.forEach(u),s=n}var b=function(){var f=s;s=[],f.forEach(u)},d=function(){return Promise.resolve().then(b)};d(),n={push:function(f){s.push(f),d()},filter:function(f){return s=s.filter(f),n}}}};return a}function et(e){e===void 0&&(e={});var t=Je(null);return t.options=P({async:!0,ssr:!1},e),t}var ye=function(e){var t=e.sideCar,n=pe(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return i.createElement(r,P({},n))};ye.isSideCarExport=!0;function tt(e,t){return e.useMedium(t),ye}var Ee=et(),Z=function(){},K=i.forwardRef(function(e,t){var n=i.useRef(null),r=i.useState({onScrollCapture:Z,onWheelCapture:Z,onTouchMoveCapture:Z}),a=r[0],u=r[1],s=e.forwardProps,o=e.children,b=e.className,d=e.removeScrollBar,f=e.enabled,h=e.shards,v=e.sideCar,p=e.noIsolation,C=e.inert,c=e.allowPinchZoom,l=e.as,m=l===void 0?"div":l,w=e.gapMode,E=pe(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),g=v,S=Qe([n,t]),O=P(P({},E),a);return i.createElement(i.Fragment,null,f&&i.createElement(g,{sideCar:Ee,removeScrollBar:d,shards:h,noIsolation:p,inert:C,setCallbacks:u,allowPinchZoom:!!c,lockRef:n,gapMode:w}),s?i.cloneElement(i.Children.only(o),P(P({},O),{ref:S})):i.createElement(m,P({},O,{className:b,ref:S}),o))});K.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};K.classNames={fullWidth:_,zeroRight:W};var nt=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function rt(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=nt();return t&&e.setAttribute("nonce",t),e}function at(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function ot(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var it=function(){var e=0,t=null;return{add:function(n){e==0&&(t=rt())&&(at(t,n),ot(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},ct=function(){var e=it();return function(t,n){i.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},ge=function(){var e=ct(),t=function(n){var r=n.styles,a=n.dynamic;return e(r,a),null};return t},ut={left:0,top:0,right:0,gap:0},q=function(e){return parseInt(e||"",10)||0},st=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],a=t[e==="padding"?"paddingRight":"marginRight"];return[q(n),q(r),q(a)]},lt=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return ut;var t=st(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},dt=ge(),D="data-scroll-locked",ft=function(e,t,n,r){var a=e.left,u=e.top,s=e.right,o=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(ze,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(o,"px ").concat(r,`;
  }
  body[`).concat(D,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(u,`px;
    padding-right: `).concat(s,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(o,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(o,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(W,` {
    right: `).concat(o,"px ").concat(r,`;
  }
  
  .`).concat(_,` {
    margin-right: `).concat(o,"px ").concat(r,`;
  }
  
  .`).concat(W," .").concat(W,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(_," .").concat(_,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(D,`] {
    `).concat(Ge,": ").concat(o,`px;
  }
`)},se=function(){var e=parseInt(document.body.getAttribute(D)||"0",10);return isFinite(e)?e:0},vt=function(){i.useEffect(function(){return document.body.setAttribute(D,(se()+1).toString()),function(){var e=se()-1;e<=0?document.body.removeAttribute(D):document.body.setAttribute(D,e.toString())}},[])},ht=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,a=r===void 0?"margin":r;vt();var u=i.useMemo(function(){return lt(a)},[a]);return i.createElement(dt,{styles:ft(u,!t,a,n?"":"!important")})},J=!1;if(typeof window<"u")try{var x=Object.defineProperty({},"passive",{get:function(){return J=!0,!0}});window.addEventListener("test",x,x),window.removeEventListener("test",x,x)}catch{J=!1}var T=J?{passive:!1}:!1,mt=function(e){return e.tagName==="TEXTAREA"},be=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!mt(e)&&n[t]==="visible")},pt=function(e){return be(e,"overflowY")},yt=function(e){return be(e,"overflowX")},le=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var a=Se(e,r);if(a){var u=we(e,r),s=u[1],o=u[2];if(s>o)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},Et=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},gt=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},Se=function(e,t){return e==="v"?pt(t):yt(t)},we=function(e,t){return e==="v"?Et(t):gt(t)},bt=function(e,t){return e==="h"&&t==="rtl"?-1:1},St=function(e,t,n,r,a){var u=bt(e,window.getComputedStyle(t).direction),s=u*r,o=n.target,b=t.contains(o),d=!1,f=s>0,h=0,v=0;do{var p=we(e,o),C=p[0],c=p[1],l=p[2],m=c-l-u*C;(C||m)&&Se(e,o)&&(h+=m,v+=C),o instanceof ShadowRoot?o=o.host:o=o.parentNode}while(!b&&o!==document.body||b&&(t.contains(o)||t===o));return(f&&(Math.abs(h)<1||!a)||!f&&(Math.abs(v)<1||!a))&&(d=!0),d},M=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},de=function(e){return[e.deltaX,e.deltaY]},fe=function(e){return e&&"current"in e?e.current:e},wt=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Ct=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Pt=0,A=[];function Ot(e){var t=i.useRef([]),n=i.useRef([0,0]),r=i.useRef(),a=i.useState(Pt++)[0],u=i.useState(ge)[0],s=i.useRef(e);i.useEffect(function(){s.current=e},[e]),i.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var c=Ye([e.lockRef.current],(e.shards||[]).map(fe),!0).filter(Boolean);return c.forEach(function(l){return l.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),c.forEach(function(l){return l.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var o=i.useCallback(function(c,l){if("touches"in c&&c.touches.length===2||c.type==="wheel"&&c.ctrlKey)return!s.current.allowPinchZoom;var m=M(c),w=n.current,E="deltaX"in c?c.deltaX:w[0]-m[0],g="deltaY"in c?c.deltaY:w[1]-m[1],S,O=c.target,y=Math.abs(E)>Math.abs(g)?"h":"v";if("touches"in c&&y==="h"&&O.type==="range")return!1;var L=le(y,O);if(!L)return!0;if(L?S=y:(S=y==="v"?"h":"v",L=le(y,O)),!L)return!1;if(!r.current&&"changedTouches"in c&&(E||g)&&(r.current=S),!S)return!0;var F=r.current||S;return St(F,l,c,F==="h"?E:g,!0)},[]),b=i.useCallback(function(c){var l=c;if(!(!A.length||A[A.length-1]!==u)){var m="deltaY"in l?de(l):M(l),w=t.current.filter(function(S){return S.name===l.type&&(S.target===l.target||l.target===S.shadowParent)&&wt(S.delta,m)})[0];if(w&&w.should){l.cancelable&&l.preventDefault();return}if(!w){var E=(s.current.shards||[]).map(fe).filter(Boolean).filter(function(S){return S.contains(l.target)}),g=E.length>0?o(l,E[0]):!s.current.noIsolation;g&&l.cancelable&&l.preventDefault()}}},[]),d=i.useCallback(function(c,l,m,w){var E={name:c,delta:l,target:m,should:w,shadowParent:Lt(m)};t.current.push(E),setTimeout(function(){t.current=t.current.filter(function(g){return g!==E})},1)},[]),f=i.useCallback(function(c){n.current=M(c),r.current=void 0},[]),h=i.useCallback(function(c){d(c.type,de(c),c.target,o(c,e.lockRef.current))},[]),v=i.useCallback(function(c){d(c.type,M(c),c.target,o(c,e.lockRef.current))},[]);i.useEffect(function(){return A.push(u),e.setCallbacks({onScrollCapture:h,onWheelCapture:h,onTouchMoveCapture:v}),document.addEventListener("wheel",b,T),document.addEventListener("touchmove",b,T),document.addEventListener("touchstart",f,T),function(){A=A.filter(function(c){return c!==u}),document.removeEventListener("wheel",b,T),document.removeEventListener("touchmove",b,T),document.removeEventListener("touchstart",f,T)}},[]);var p=e.removeScrollBar,C=e.inert;return i.createElement(i.Fragment,null,C?i.createElement(u,{styles:Ct(a)}):null,p?i.createElement(ht,{gapMode:e.gapMode}):null)}function Lt(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const Rt=tt(Ee,Ot);var Tt=i.forwardRef(function(e,t){return i.createElement(K,P({},e,{ref:t,sideCar:Rt}))});Tt.classNames=K.classNames;var At=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},k=new WeakMap,I=new WeakMap,B={},Q=0,Ce=function(e){return e&&(e.host||Ce(e.parentNode))},kt=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=Ce(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},Dt=function(e,t,n,r){var a=kt(t,Array.isArray(e)?e:[e]);B[n]||(B[n]=new WeakMap);var u=B[n],s=[],o=new Set,b=new Set(a),d=function(h){!h||o.has(h)||(o.add(h),d(h.parentNode))};a.forEach(d);var f=function(h){!h||b.has(h)||Array.prototype.forEach.call(h.children,function(v){if(o.has(v))f(v);else try{var p=v.getAttribute(r),C=p!==null&&p!=="false",c=(k.get(v)||0)+1,l=(u.get(v)||0)+1;k.set(v,c),u.set(v,l),s.push(v),c===1&&C&&I.set(v,!0),l===1&&v.setAttribute(n,"true"),C||v.setAttribute(r,"true")}catch(m){console.error("aria-hidden: cannot operate on ",v,m)}})};return f(t),o.clear(),Q++,function(){s.forEach(function(h){var v=k.get(h)-1,p=u.get(h)-1;k.set(h,v),u.set(h,p),v||(I.has(h)||h.removeAttribute(r),I.delete(h)),p||h.removeAttribute(n)}),Q--,Q||(k=new WeakMap,k=new WeakMap,I=new WeakMap,B={})}},Bt=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),a=At(e);return a?(r.push.apply(r,Array.from(a.querySelectorAll("[aria-live]"))),Dt(r,a,n,"aria-hidden")):function(){return null}};export{De as D,Be as F,Xe as P,Tt as R,Bt as h,It as u};
