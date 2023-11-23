var M=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Q={},nt={get exports(){return Q},set exports(E){Q=E}},K={},rt={get exports(){return K},set exports(E){K=E}},V={},st={get exports(){return V},set exports(E){V=E}};/*!
  * Bootstrap data.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var j;function ot(){return j||(j=1,function(E,w){(function(i,c){E.exports=c()})(M,function(){const i=new Map;return{set(m,n,e){i.has(m)||i.set(m,new Map);const o=i.get(m);if(!o.has(n)&&o.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(o.keys())[0]}.`);return}o.set(n,e)},get(m,n){return i.has(m)&&i.get(m).get(n)||null},remove(m,n){if(!i.has(m))return;const e=i.get(m);e.delete(n),e.size===0&&i.delete(m)}}})}(st)),V}var k={},it={get exports(){return k},set exports(E){k=E}},F={},at={get exports(){return F},set exports(E){F=E}};/*!
  * Bootstrap index.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var B;function H(){return B||(B=1,function(E,w){(function(i,c){c(w)})(M,function(i){const n="transitionend",e=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,(s,r)=>`#${CSS.escape(r)}`)),t),o=t=>t==null?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),_=t=>{do t+=Math.floor(Math.random()*1e6);while(document.getElementById(t));return t},d=t=>{if(!t)return 0;let{transitionDuration:s,transitionDelay:r}=window.getComputedStyle(t);const a=Number.parseFloat(s),g=Number.parseFloat(r);return!a&&!g?0:(s=s.split(",")[0],r=r.split(",")[0],(Number.parseFloat(s)+Number.parseFloat(r))*1e3)},b=t=>{t.dispatchEvent(new Event(n))},C=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u"),q=t=>C(t)?t.jquery?t[0]:t:typeof t=="string"&&t.length>0?document.querySelector(e(t)):null,P=t=>{if(!C(t)||t.getClientRects().length===0)return!1;const s=getComputedStyle(t).getPropertyValue("visibility")==="visible",r=t.closest("details:not([open])");if(!r)return s;if(r!==t){const a=t.closest("summary");if(a&&a.parentNode!==r||a===null)return!1}return s},x=t=>!t||t.nodeType!==Node.ELEMENT_NODE||t.classList.contains("disabled")?!0:typeof t.disabled<"u"?t.disabled:t.hasAttribute("disabled")&&t.getAttribute("disabled")!=="false",N=t=>{if(!document.documentElement.attachShadow)return null;if(typeof t.getRootNode=="function"){const s=t.getRootNode();return s instanceof ShadowRoot?s:null}return t instanceof ShadowRoot?t:t.parentNode?N(t.parentNode):null},D=()=>{},v=t=>{t.offsetHeight},$=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,L=[],O=t=>{document.readyState==="loading"?(L.length||document.addEventListener("DOMContentLoaded",()=>{for(const s of L)s()}),L.push(t)):t()},I=()=>document.documentElement.dir==="rtl",u=t=>{O(()=>{const s=$();if(s){const r=t.NAME,a=s.fn[r];s.fn[r]=t.jQueryInterface,s.fn[r].Constructor=t,s.fn[r].noConflict=()=>(s.fn[r]=a,t.jQueryInterface)}})},l=(t,s=[],r=t)=>typeof t=="function"?t(...s):r,f=(t,s,r=!0)=>{if(!r){l(t);return}const a=5,g=d(s)+a;let h=!1;const y=({target:A})=>{A===s&&(h=!0,s.removeEventListener(n,y),l(t))};s.addEventListener(n,y),setTimeout(()=>{h||b(s)},g)},p=(t,s,r,a)=>{const g=t.length;let h=t.indexOf(s);return h===-1?!r&&a?t[g-1]:t[0]:(h+=r?1:-1,a&&(h=(h+g)%g),t[Math.max(0,Math.min(h,g-1))])};i.defineJQueryPlugin=u,i.execute=l,i.executeAfterTransition=f,i.findShadowRoot=N,i.getElement=q,i.getNextActiveElement=p,i.getTransitionDurationFromElement=d,i.getUID=_,i.getjQuery=$,i.isDisabled=x,i.isElement=C,i.isRTL=I,i.isVisible=P,i.noop=D,i.onDOMContentLoaded=O,i.parseSelector=e,i.reflow=v,i.toType=o,i.triggerTransitionEnd=b,Object.defineProperty(i,Symbol.toStringTag,{value:"Module"})})}(at,F)),F}/*!
  * Bootstrap event-handler.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var W;function tt(){return W||(W=1,function(E,w){(function(i,c){E.exports=c(H())})(M,function(i){const c=/[^.]*(?=\..*)\.|.*/,m=/\..*/,n=/::\d+$/,e={};let o=1;const _={mouseenter:"mouseover",mouseleave:"mouseout"},d=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function b(u,l){return l&&`${l}::${o++}`||u.uidEvent||o++}function C(u){const l=b(u);return u.uidEvent=l,e[l]=e[l]||{},e[l]}function q(u,l){return function f(p){return I(p,{delegateTarget:u}),f.oneOff&&O.off(u,p.type,l),l.apply(u,[p])}}function P(u,l,f){return function p(t){const s=u.querySelectorAll(l);for(let{target:r}=t;r&&r!==this;r=r.parentNode)for(const a of s)if(a===r)return I(t,{delegateTarget:r}),p.oneOff&&O.off(u,t.type,l,f),f.apply(r,[t])}}function x(u,l,f=null){return Object.values(u).find(p=>p.callable===l&&p.delegationSelector===f)}function N(u,l,f){const p=typeof l=="string",t=p?f:l||f;let s=L(u);return d.has(s)||(s=u),[p,t,s]}function D(u,l,f,p,t){if(typeof l!="string"||!u)return;let[s,r,a]=N(l,f,p);l in _&&(r=(et=>function(R){if(!R.relatedTarget||R.relatedTarget!==R.delegateTarget&&!R.delegateTarget.contains(R.relatedTarget))return et.call(this,R)})(r));const g=C(u),h=g[a]||(g[a]={}),y=x(h,r,s?f:null);if(y){y.oneOff=y.oneOff&&t;return}const A=b(r,l.replace(c,"")),S=s?P(u,f,r):q(u,r);S.delegationSelector=s?f:null,S.callable=r,S.oneOff=t,S.uidEvent=A,h[A]=S,u.addEventListener(a,S,s)}function v(u,l,f,p,t){const s=x(l[f],p,t);s&&(u.removeEventListener(f,s,!!t),delete l[f][s.uidEvent])}function $(u,l,f,p){const t=l[f]||{};for(const[s,r]of Object.entries(t))s.includes(p)&&v(u,l,f,r.callable,r.delegationSelector)}function L(u){return u=u.replace(m,""),_[u]||u}const O={on(u,l,f,p){D(u,l,f,p,!1)},one(u,l,f,p){D(u,l,f,p,!0)},off(u,l,f,p){if(typeof l!="string"||!u)return;const[t,s,r]=N(l,f,p),a=r!==l,g=C(u),h=g[r]||{},y=l.startsWith(".");if(typeof s<"u"){if(!Object.keys(h).length)return;v(u,g,r,s,t?f:null);return}if(y)for(const A of Object.keys(g))$(u,g,A,l.slice(1));for(const[A,S]of Object.entries(h)){const T=A.replace(n,"");(!a||l.includes(T))&&v(u,g,r,S.callable,S.delegationSelector)}},trigger(u,l,f){if(typeof l!="string"||!u)return null;const p=i.getjQuery(),t=L(l),s=l!==t;let r=null,a=!0,g=!0,h=!1;s&&p&&(r=p.Event(l,f),p(u).trigger(r),a=!r.isPropagationStopped(),g=!r.isImmediatePropagationStopped(),h=r.isDefaultPrevented());const y=I(new Event(l,{bubbles:a,cancelable:!0}),f);return h&&y.preventDefault(),g&&u.dispatchEvent(y),y.defaultPrevented&&r&&r.preventDefault(),y}};function I(u,l={}){for(const[f,p]of Object.entries(l))try{u[f]=p}catch{Object.defineProperty(u,f,{configurable:!0,get(){return p}})}return u}return O})}(it)),k}var U={},lt={get exports(){return U},set exports(E){U=E}},Y={},ut={get exports(){return Y},set exports(E){Y=E}};/*!
  * Bootstrap manipulator.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var J;function ct(){return J||(J=1,function(E,w){(function(i,c){E.exports=c()})(M,function(){function i(n){if(n==="true")return!0;if(n==="false")return!1;if(n===Number(n).toString())return Number(n);if(n===""||n==="null")return null;if(typeof n!="string")return n;try{return JSON.parse(decodeURIComponent(n))}catch{return n}}function c(n){return n.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}return{setDataAttribute(n,e,o){n.setAttribute(`data-bs-${c(e)}`,o)},removeDataAttribute(n,e){n.removeAttribute(`data-bs-${c(e)}`)},getDataAttributes(n){if(!n)return{};const e={},o=Object.keys(n.dataset).filter(_=>_.startsWith("bs")&&!_.startsWith("bsConfig"));for(const _ of o){let d=_.replace(/^bs/,"");d=d.charAt(0).toLowerCase()+d.slice(1,d.length),e[d]=i(n.dataset[_])}return e},getDataAttribute(n,e){return i(n.getAttribute(`data-bs-${c(e)}`))}}})}(ut)),Y}/*!
  * Bootstrap config.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var G;function ft(){return G||(G=1,function(E,w){(function(i,c){E.exports=c(ct(),H())})(M,function(i,c){class m{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,o){const _=c.isElement(o)?i.getDataAttribute(o,"config"):{};return{...this.constructor.Default,...typeof _=="object"?_:{},...c.isElement(o)?i.getDataAttributes(o):{},...typeof e=="object"?e:{}}}_typeCheckConfig(e,o=this.constructor.DefaultType){for(const[_,d]of Object.entries(o)){const b=e[_],C=c.isElement(b)?"element":c.toType(b);if(!new RegExp(d).test(C))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${_}" provided type "${C}" but expected type "${d}".`)}}}return m})}(lt)),U}/*!
  * Bootstrap base-component.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var X;function dt(){return X||(X=1,function(E,w){(function(i,c){E.exports=c(ot(),tt(),ft(),H())})(M,function(i,c,m,n){const e="5.3.0";class o extends m{constructor(d,b){super(),d=n.getElement(d),d&&(this._element=d,this._config=this._getConfig(b),i.set(this._element,this.constructor.DATA_KEY,this))}dispose(){i.remove(this._element,this.constructor.DATA_KEY),c.off(this._element,this.constructor.EVENT_KEY);for(const d of Object.getOwnPropertyNames(this))this[d]=null}_queueCallback(d,b,C=!0){n.executeAfterTransition(d,b,C)}_getConfig(d){return d=this._mergeConfigObj(d,this._element),d=this._configAfterMerge(d),this._typeCheckConfig(d),d}static getInstance(d){return i.get(n.getElement(d),this.DATA_KEY)}static getOrCreateInstance(d,b={}){return this.getInstance(d)||new this(d,typeof b=="object"?b:null)}static get VERSION(){return e}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(d){return`${d}${this.EVENT_KEY}`}}return o})}(rt)),K}var z={},gt={get exports(){return z},set exports(E){z=E}};/*!
  * Bootstrap selector-engine.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Z;function ht(){return Z||(Z=1,function(E,w){(function(i,c){E.exports=c(H())})(M,function(i){const c=n=>{let e=n.getAttribute("data-bs-target");if(!e||e==="#"){let o=n.getAttribute("href");if(!o||!o.includes("#")&&!o.startsWith("."))return null;o.includes("#")&&!o.startsWith("#")&&(o=`#${o.split("#")[1]}`),e=o&&o!=="#"?o.trim():null}return i.parseSelector(e)},m={find(n,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,n))},findOne(n,e=document.documentElement){return Element.prototype.querySelector.call(e,n)},children(n,e){return[].concat(...n.children).filter(o=>o.matches(e))},parents(n,e){const o=[];let _=n.parentNode.closest(e);for(;_;)o.push(_),_=_.parentNode.closest(e);return o},prev(n,e){let o=n.previousElementSibling;for(;o;){if(o.matches(e))return[o];o=o.previousElementSibling}return[]},next(n,e){let o=n.nextElementSibling;for(;o;){if(o.matches(e))return[o];o=o.nextElementSibling}return[]},focusableChildren(n){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(o=>`${o}:not([tabindex^="-"])`).join(",");return this.find(e,n).filter(o=>!i.isDisabled(o)&&i.isVisible(o))},getSelectorFromElement(n){const e=c(n);return e&&m.findOne(e)?e:null},getElementFromSelector(n){const e=c(n);return e?m.findOne(e):null},getMultipleElementsFromSelector(n){const e=c(n);return e?m.find(e):[]}};return m})}(gt)),z}/*!
  * Bootstrap collapse.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(E,w){(function(i,c){E.exports=c(dt(),tt(),ht(),H())})(M,function(i,c,m,n){const e="collapse",_=".bs.collapse",d=".data-api",b=`show${_}`,C=`shown${_}`,q=`hide${_}`,P=`hidden${_}`,x=`click${_}${d}`,N="show",D="collapse",v="collapsing",$="collapsed",L=`:scope .${D} .${D}`,O="collapse-horizontal",I="width",u="height",l=".collapse.show, .collapse.collapsing",f='[data-bs-toggle="collapse"]',p={parent:null,toggle:!0},t={parent:"(null|element)",toggle:"boolean"};class s extends i{constructor(a,g){super(a,g),this._isTransitioning=!1,this._triggerArray=[];const h=m.find(f);for(const y of h){const A=m.getSelectorFromElement(y),S=m.find(A).filter(T=>T===this._element);A!==null&&S.length&&this._triggerArray.push(y)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return p}static get DefaultType(){return t}static get NAME(){return e}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let a=[];if(this._config.parent&&(a=this._getFirstLevelChildren(l).filter(T=>T!==this._element).map(T=>s.getOrCreateInstance(T,{toggle:!1}))),a.length&&a[0]._isTransitioning||c.trigger(this._element,b).defaultPrevented)return;for(const T of a)T.hide();const h=this._getDimension();this._element.classList.remove(D),this._element.classList.add(v),this._element.style[h]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const y=()=>{this._isTransitioning=!1,this._element.classList.remove(v),this._element.classList.add(D,N),this._element.style[h]="",c.trigger(this._element,C)},S=`scroll${h[0].toUpperCase()+h.slice(1)}`;this._queueCallback(y,this._element,!0),this._element.style[h]=`${this._element[S]}px`}hide(){if(this._isTransitioning||!this._isShown()||c.trigger(this._element,q).defaultPrevented)return;const g=this._getDimension();this._element.style[g]=`${this._element.getBoundingClientRect()[g]}px`,n.reflow(this._element),this._element.classList.add(v),this._element.classList.remove(D,N);for(const y of this._triggerArray){const A=m.getElementFromSelector(y);A&&!this._isShown(A)&&this._addAriaAndCollapsedClass([y],!1)}this._isTransitioning=!0;const h=()=>{this._isTransitioning=!1,this._element.classList.remove(v),this._element.classList.add(D),c.trigger(this._element,P)};this._element.style[g]="",this._queueCallback(h,this._element,!0)}_isShown(a=this._element){return a.classList.contains(N)}_configAfterMerge(a){return a.toggle=!!a.toggle,a.parent=n.getElement(a.parent),a}_getDimension(){return this._element.classList.contains(O)?I:u}_initializeChildren(){if(!this._config.parent)return;const a=this._getFirstLevelChildren(f);for(const g of a){const h=m.getElementFromSelector(g);h&&this._addAriaAndCollapsedClass([g],this._isShown(h))}}_getFirstLevelChildren(a){const g=m.find(L,this._config.parent);return m.find(a,this._config.parent).filter(h=>!g.includes(h))}_addAriaAndCollapsedClass(a,g){if(a.length)for(const h of a)h.classList.toggle($,!g),h.setAttribute("aria-expanded",g)}static jQueryInterface(a){const g={};return typeof a=="string"&&/show|hide/.test(a)&&(g.toggle=!1),this.each(function(){const h=s.getOrCreateInstance(this,g);if(typeof a=="string"){if(typeof h[a]>"u")throw new TypeError(`No method named "${a}"`);h[a]()}})}}return c.on(document,x,f,function(r){(r.target.tagName==="A"||r.delegateTarget&&r.delegateTarget.tagName==="A")&&r.preventDefault();for(const a of m.getMultipleElementsFromSelector(this))s.getOrCreateInstance(a,{toggle:!1}).toggle()}),n.defineJQueryPlugin(s),s})})(nt);
