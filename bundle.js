var app=function(){"use strict";function e(){}const t=e=>e;function n(e){return e()}function o(){return Object.create(null)}function r(e){e.forEach(n)}function a(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let l;function c(e,t){return l||(l=document.createElement("a")),l.href=t,e===l.href}const s="undefined"!=typeof window;let u=s?()=>window.performance.now():()=>Date.now(),d=s?e=>requestAnimationFrame(e):e;const f=new Set;function m(e){f.forEach((t=>{t.c(e)||(f.delete(t),t.f())})),0!==f.size&&d(m)}function p(e,t){e.appendChild(t)}function g(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function h(e){const t=b("style");return function(e,t){p(e.head||e,t)}(g(e),t),t.sheet}function y(e,t,n){e.insertBefore(t,n||null)}function $(e){e.parentNode.removeChild(e)}function b(e){return document.createElement(e)}function v(e){return document.createTextNode(e)}function w(){return v(" ")}function x(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function k(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function _(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}const C=new Map;let E,D=0;function S(e,t,n,o,r,a,i,l=0){const c=16.666/o;let s="{\n";for(let e=0;e<=1;e+=c){const o=t+(n-t)*a(e);s+=100*e+`%{${i(o,1-o)}}\n`}const u=s+`100% {${i(n,1-n)}}\n}`,d=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(u)}_${l}`,f=g(e),{stylesheet:m,rules:p}=C.get(f)||function(e,t){const n={stylesheet:h(t),rules:{}};return C.set(e,n),n}(f,e);p[d]||(p[d]=!0,m.insertRule(`@keyframes ${d} ${u}`,m.cssRules.length));const y=e.style.animation||"";return e.style.animation=`${y?`${y}, `:""}${d} ${o}ms linear ${r}ms 1 both`,D+=1,d}function T(e,t){const n=(e.style.animation||"").split(", "),o=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),r=n.length-o.length;r&&(e.style.animation=o.join(", "),D-=r,D||d((()=>{D||(C.forEach((e=>{const{stylesheet:t}=e;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.rules={}})),C.clear())})))}function R(e){E=e}function A(e){(function(){if(!E)throw new Error("Function called outside component initialization");return E})().$$.on_mount.push(e)}const I=[],N=[],M=[],z=[],L=Promise.resolve();let P=!1;function O(e){M.push(e)}const U=new Set;let V,j=0;function q(){const e=E;do{for(;j<I.length;){const e=I[j];j++,R(e),F(e.$$)}for(R(null),I.length=0,j=0;N.length;)N.pop()();for(let e=0;e<M.length;e+=1){const t=M[e];U.has(t)||(U.add(t),t())}M.length=0}while(I.length);for(;z.length;)z.pop()();P=!1,U.clear(),R(e)}function F(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(O)}}function J(e,t,n){e.dispatchEvent(function(e,t,{bubbles:n=!1,cancelable:o=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,o,t),r}(`${t?"intro":"outro"}${n}`))}const H=new Set;let B;function G(e,t){e&&e.i&&(H.delete(e),e.i(t))}function X(e,t,n,o){if(e&&e.o){if(H.has(e))return;H.add(e),B.c.push((()=>{H.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}else o&&o()}const K={duration:0};function Q(n,o,r){let i,l,c=o(n,r),s=!1,p=0;function g(){i&&T(n,i)}function h(){const{delay:o=0,duration:r=300,easing:a=t,tick:h=e,css:y}=c||K;y&&(i=S(n,0,1,r,o,a,y,p++)),h(0,1);const $=u()+o,b=$+r;l&&l.abort(),s=!0,O((()=>J(n,!0,"start"))),l=function(e){let t;return 0===f.size&&d(m),{promise:new Promise((n=>{f.add(t={c:e,f:n})})),abort(){f.delete(t)}}}((e=>{if(s){if(e>=b)return h(1,0),J(n,!0,"end"),g(),s=!1;if(e>=$){const t=a((e-$)/r);h(t,1-t)}}return s}))}let y=!1;return{start(){y||(y=!0,T(n),a(c)?(c=c(),(V||(V=Promise.resolve(),V.then((()=>{V=null}))),V).then(h)):h())},invalidate(){y=!1},end(){s&&(g(),s=!1)}}}const W="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function Y(e,t){e.d(1),t.delete(e.key)}function Z(e,t,n,o,r,a,i,l,c,s,u,d){let f=e.length,m=a.length,p=f;const g={};for(;p--;)g[e[p].key]=p;const h=[],y=new Map,$=new Map;for(p=m;p--;){const e=d(r,a,p),l=n(e);let c=i.get(l);c?o&&c.p(e,t):(c=s(l,e),c.c()),y.set(l,h[p]=c),l in g&&$.set(l,Math.abs(p-g[l]))}const b=new Set,v=new Set;function w(e){G(e,1),e.m(l,u),i.set(e.key,e),u=e.first,m--}for(;f&&m;){const t=h[m-1],n=e[f-1],o=t.key,r=n.key;t===n?(u=t.first,f--,m--):y.has(r)?!i.has(o)||b.has(o)?w(t):v.has(r)?f--:$.get(o)>$.get(r)?(v.add(o),w(t)):(b.add(r),f--):(c(n,i),f--)}for(;f--;){const t=e[f];y.has(t.key)||c(t,i)}for(;m;)w(h[m-1]);return h}function ee(e){e&&e.c()}function te(e,t,o,i){const{fragment:l,on_mount:c,on_destroy:s,after_update:u}=e.$$;l&&l.m(t,o),i||O((()=>{const t=c.map(n).filter(a);s?s.push(...t):r(t),e.$$.on_mount=[]})),u.forEach(O)}function ne(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function oe(e,t){-1===e.$$.dirty[0]&&(I.push(e),P||(P=!0,L.then(q)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function re(t,n,a,i,l,c,s,u=[-1]){const d=E;R(t);const f=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:l,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:o(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};s&&s(f.root);let m=!1;if(f.ctx=a?a(t,n.props||{},((e,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&l(f.ctx[e],f.ctx[e]=r)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](r),m&&oe(t,e)),n})):[],f.update(),m=!0,r(f.before_update),f.fragment=!!i&&i(f.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);f.fragment&&f.fragment.l(e),e.forEach($)}else f.fragment&&f.fragment.c();n.intro&&G(t.$$.fragment),te(t,n.target,n.anchor,n.customElement),q()}R(d)}class ae{$destroy(){ne(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function ie(e,t,n){const o=e.slice();return o[5]=t[n],o[7]=n,o}function le(e,t){let n,o,a,i,l,c,s,u,d;function f(...e){return t[3](t[7],t[5],...e)}return{key:e,first:null,c(){n=b("li"),o=b("div"),a=b("input"),l=w(),c=b("input"),s=w(),k(a,"type","checkbox"),a.checked=i=t[0].includes(t[5]),k(c,"type","text"),c.value=t[5],k(o,"class","grid-custom"),this.first=n},m(e,r){y(e,n,r),p(n,o),p(o,a),p(o,l),p(o,c),p(n,s),u||(d=[x(a,"click",f),x(c,"input",t[4])],u=!0)},p(e,n){t=e,1&n&&i!==(i=t[0].includes(t[5]))&&(a.checked=i)},d(e){e&&$(n),u=!1,r(d)}}}function ce(t){let n,o,r,a,i,l=[],c=new Map,s=t[1];const u=e=>e[5];for(let e=0;e<s.length;e+=1){let n=ie(t,s,e),o=u(n);c.set(o,l[e]=le(o,n))}return{c(){n=w(),o=b("div"),r=b("p"),r.textContent="Five dailies",a=w(),i=b("ul");for(let e=0;e<l.length;e+=1)l[e].c();document.title="Daily checklist",k(r,"class","x-large"),k(o,"class","p-3")},m(e,t){y(e,n,t),y(e,o,t),p(o,r),p(o,a),p(o,i);for(let e=0;e<l.length;e+=1)l[e].m(i,null)},p(e,[t]){7&t&&(s=e[1],l=Z(l,t,u,1,e,s,c,i,Y,le,null,ie))},i:e,o:e,d(e){e&&$(n),e&&$(o);for(let e=0;e<l.length;e+=1)l[e].d()}}}function se(e,t,n){let o=JSON.parse(localStorage.getItem("checked"))||[];function r(e,t){e.preventDefault(),console.log(t),n(0,o[t]=!o[t],o)}return[o,["Item 1","Item 2","Item 3","Item 4","Item 5"],r,(e,t,a)=>{r(a,e),o.includes(t)?n(0,o=o.filter((e=>e!==t))):o.push(t),localStorage.setItem("checked",JSON.stringify(o))},e=>{console.log(e)}]}class ue extends ae{constructor(e){super(),re(this,e,se,ce,i,{})}}const de={fpsLimit:48,particles:{number:{value:10,density:{enable:!0,value_area:800}},color:{value:"#990",animation:{enable:!0,speed:20,sync:!1}},shape:{type:["circle"]},opacity:{value:1},size:{value:20,random:{enable:!0,minimumValue:5}},rotate:{value:0,direction:"clockwise",animation:{speed:10,enable:!1}},move:{enable:!0,speed:1,direction:"none",out_mode:"out"}},detectRetina:!0,background:{color:"black"}},fe={fpsLimit:60,backgroundMode:{enable:!0},particles:{color:{value:["#000","#555","#888"]},links:{color:"#AAA",enable:!0},move:{enable:!0,speed:1},size:{value:5,random:{enable:!0,minimumValue:2},animation:{enable:!0,speed:4,minimumValue:1}},opacity:{value:.8,random:{enable:!0,minimumValue:.4}}}},me={detectRetina:!0,background:{color:"#000"},fpsLimit:60,emitters:{direction:"top",life:{count:0,duration:.1,delay:.1},rate:{delay:.5,quantity:1},size:{width:100,height:0},position:{y:100,x:50}},particles:{number:{value:0},destroy:{mode:"split",split:{count:1,factor:{value:1/3},rate:{value:100},particles:{stroke:{color:{value:["#5bc0eb","#fde74c","#9bc53d","#e55934","#fa7921"]},width:1},number:{value:0},collisions:{enable:!1},opacity:{value:1,animation:{enable:!0,speed:.6,minimumValue:.1,sync:!1,startValue:"max",destroy:"min"}},shape:{type:"circle"},size:{value:1,animation:{enable:!1}},life:{count:1,duration:{value:{min:1,max:2}}},move:{enable:!0,gravity:{enable:!1},speed:2,direction:"none",random:!0,straight:!1,outMode:"destroy"}}}},life:{count:1},shape:{type:"line"},size:{value:{min:.1,max:50},animation:{enable:!0,sync:!0,speed:150,startValue:"max",destroy:"min"}},stroke:{color:{value:"#ffffff"},width:1},rotate:{path:!0},move:{enable:!0,gravity:{acceleration:15,enable:!0,inverse:!0,maxSpeed:100},speed:{min:10,max:20},outModes:{default:"destroy",top:"none"},trail:{fillColor:"#000",enable:!0,length:10}}}},{Map:pe}=W;function ge(e,t,n){const o=e.slice();return o[6]=t[n],o[8]=n,o}function he(e){let t,n,o,r,a=[],i=new pe,l=e[1];const c=e=>e[6];for(let t=0;t<l.length;t+=1){let n=ge(e,l,t),o=c(n);i.set(o,a[t]=ye(o,n))}return{c(){t=b("p"),n=v(e[0]),o=w();for(let e=0;e<a.length;e+=1)a[e].c();r=v(""),k(t,"class","x-large")},m(e,i){y(e,t,i),p(t,n),y(e,o,i);for(let t=0;t<a.length;t+=1)a[t].m(e,i);y(e,r,i)},p(e,t){1&t&&_(n,e[0]),2&t&&(l=e[1],a=Z(a,t,c,1,e,l,i,r.parentNode,Y,ye,r,ge))},d(e){e&&$(t),e&&$(o);for(let t=0;t<a.length;t+=1)a[t].d(e);e&&$(r)}}}function ye(e,t){let n,o,r=t[6]+"";return{key:e,first:null,c(){n=b("p"),o=v(r),k(n,"class","medium"),this.first=n},m(e,t){y(e,n,t),p(n,o)},p(e,n){t=e,2&n&&r!==(r=t[6]+"")&&_(o,r)},d(e){e&&$(n)}}}function $e(t){let n,o,r=t[2]&&he(t);return{c(){n=b("div"),o=b("div"),r&&r.c(),k(o,"class","header-text"),k(n,"class","header")},m(e,t){y(e,n,t),p(n,o),r&&r.m(o,null)},p(e,[t]){e[2]?r?r.p(e,t):(r=he(e),r.c(),r.m(o,null)):r&&(r.d(1),r=null)},i:e,o:e,d(e){e&&$(n),r&&r.d()}}}function be(e,t,n){let o=!1;A((()=>n(2,o=!0)));let{name:r,titles:a}=t;return e.$$set=e=>{"name"in e&&n(0,r=e.name),"titles"in e&&n(1,a=e.titles)},[r,a,o]}class ve extends ae{constructor(e){super(),re(this,e,be,$e,i,{name:0,titles:1})}}function we(e){const t=e-1;return t*t*t+1}function xe(e,{delay:t=0,duration:n=400,easing:o=we,start:r=0,opacity:a=0}={}){const i=getComputedStyle(e),l=+i.opacity,c="none"===i.transform?"":i.transform,s=1-r,u=l*(1-a);return{delay:t,duration:n,easing:o,css:(e,t)=>`\n\t\t\ttransform: ${c} scale(${1-s*t});\n\t\t\topacity: ${l-u*t}\n\t\t`}}function ke(e){let t,n,o,r;return{c(){t=b("a"),n=b("img"),k(n,"class","footer-img bright"),k(n,"alt",o=e[2]?e[2]:""),c(n.src,r=e[1])||k(n,"src",r),k(t,"rel","noopener noreferrer"),k(t,"target","_blank"),k(t,"href",e[0])},m(e,o){y(e,t,o),p(t,n)},p(e,a){4&a&&o!==(o=e[2]?e[2]:"")&&k(n,"alt",o),2&a&&!c(n.src,r=e[1])&&k(n,"src",r),1&a&&k(t,"href",e[0])},d(e){e&&$(t)}}}function _e(t){let n,o=t[0]&&t[1]&&ke(t);return{c(){n=b("h4"),o&&o.c(),k(n,"class","footer-item")},m(e,t){y(e,n,t),o&&o.m(n,null)},p(e,[t]){e[0]&&e[1]?o?o.p(e,t):(o=ke(e),o.c(),o.m(n,null)):o&&(o.d(1),o=null)},i:e,o:e,d(e){e&&$(n),o&&o.d()}}}function Ce(e,t,n){let{url:o,imageSource:r,altText:a}=t;return e.$$set=e=>{"url"in e&&n(0,o=e.url),"imageSource"in e&&n(1,r=e.imageSource),"altText"in e&&n(2,a=e.altText)},[o,r,a]}class Ee extends ae{constructor(e){super(),re(this,e,Ce,_e,i,{url:0,imageSource:1,altText:2})}}var De=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}},Se={"text/plain":"Text","text/html":"Url",default:"Text"};var Te=function(e,t){var n,o,r,a,i,l,c=!1;t||(t={}),n=t.debug||!1;try{if(r=De(),a=document.createRange(),i=document.getSelection(),(l=document.createElement("span")).textContent=e,l.ariaHidden="true",l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),void 0===o.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=Se[t.format]||Se.default;window.clipboardData.setData(r,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))})),document.body.appendChild(l),a.selectNodeContents(l),i.addRange(a),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");c=!0}catch(r){n&&console.error("unable to copy using execCommand: ",r),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),c=!0}catch(r){n&&console.error("unable to copy using clipboardData: ",r),n&&console.error("falling back to prompt"),o=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(o,e)}}finally{i&&("function"==typeof i.removeRange?i.removeRange(a):i.removeAllRanges()),l&&document.body.removeChild(l),r()}return c};function Re(t){let n,o,r,a;return{c(){n=b("div"),n.innerHTML="<h4>email copied to clipboard!</h4>",k(n,"class","footer-container")},m(e,o){y(e,n,o),r||(a=x(n,"click",t[3]),r=!0)},p:e,i(e){o||O((()=>{o=Q(n,xe,{duration:200}),o.start()}))},o:e,d(e){e&&$(n),r=!1,a()}}}function Ae(t){let n,o,r,a,i,l,s,u,d;return{c(){n=b("div"),o=b("h4"),o.textContent="copy email",a=w(),i=b("img"),k(i,"class","footer-img tiny-img scale-up"),k(i,"alt",""),c(i.src,l=ze)||k(i,"src",l),k(n,"class","footer-container cursor")},m(e,r){y(e,n,r),p(n,o),p(n,a),p(n,i),u||(d=x(n,"click",t[3]),u=!0)},p:e,i(e){r||O((()=>{r=Q(o,xe,{}),r.start()})),s||O((()=>{s=Q(n,xe,{duration:200}),s.start()}))},o:e,d(e){e&&$(n),u=!1,d()}}}function Ie(e){let t,n,o,r,a,i,l;function c(e,t){return e[2]?Ae:Re}let s=c(e),u=s(e);return r=new Ee({props:{url:`https://linkedin.com/in/${e[0]}`,imageSource:Ne,altText:"linkedin"}}),i=new Ee({props:{url:`https://github.com/${e[1]}`,imageSource:Me,altText:"github"}}),{c(){t=b("div"),u.c(),n=w(),o=b("div"),ee(r.$$.fragment),a=w(),ee(i.$$.fragment),k(o,"class","footer-container"),k(t,"class","footer")},m(e,c){y(e,t,c),u.m(t,null),p(t,n),p(t,o),te(r,o,null),p(o,a),te(i,o,null),l=!0},p(e,[o]){s===(s=c(e))&&u?u.p(e,o):(u.d(1),u=s(e),u&&(u.c(),G(u,1),u.m(t,n)));const a={};1&o&&(a.url=`https://linkedin.com/in/${e[0]}`),r.$set(a);const l={};2&o&&(l.url=`https://github.com/${e[1]}`),i.$set(l)},i(e){l||(G(u),G(r.$$.fragment,e),G(i.$$.fragment,e),l=!0)},o(e){X(r.$$.fragment,e),X(i.$$.fragment,e),l=!1},d(e){e&&$(t),u.d(),ne(r),ne(i)}}}let Ne="./Images/LI.png",Me="./Images/Github.png",ze="./Images/cursor.png";function Le(e,t,n){let{email:o,linkedin:r,github:a}=t,i=!0;return e.$$set=e=>{"email"in e&&n(4,o=e.email),"linkedin"in e&&n(0,r=e.linkedin),"github"in e&&n(1,a=e.github)},[r,a,i,()=>{Te(o),n(2,i=!1),setTimeout((()=>{n(2,i=!0)}),2e3)},o]}class Pe extends ae{constructor(e){super(),re(this,e,Le,Ie,i,{email:4,linkedin:0,github:1})}}function Oe(t){let n,o,r,a,i;return o=new ve({props:{name:"Tollef Jørgensen",email:Ue,linkedin:Ve,github:je,titles:["PhD Candidate, Language Technology [NTNU - DART group]","(also certified computer nerd)"]}}),a=new Pe({props:{email:Ue,linkedin:Ve,github:je}}),{c(){n=w(),ee(o.$$.fragment),r=w(),ee(a.$$.fragment),document.title="things"},m(e,t){y(e,n,t),te(o,e,t),y(e,r,t),te(a,e,t),i=!0},p:e,i(e){i||(G(o.$$.fragment,e),G(a.$$.fragment,e),i=!0)},o(e){X(o.$$.fragment,e),X(a.$$.fragment,e),i=!1},d(e){e&&$(n),ne(o,e),e&&$(r),ne(a,e)}}}const Ue="t@tollef.xyz",Ve="tollefj",je="tollefj";function qe(e){const t=[fe,de,me];return tsParticles.load("tsparticles",t[1]),tsParticles.domItem(0),[]}class Fe extends ae{constructor(e){super(),re(this,e,qe,Oe,i,{})}}function Je(e){let t,n,o,a,i;var l=e[0];return l&&(n=new l({})),{c(){t=b("main"),n&&ee(n.$$.fragment)},m(r,l){y(r,t,l),n&&te(n,t,null),o=!0,a||(i=x(window,"hashchange",e[1]),a=!0)},p(e,[o]){if(l!==(l=e[0])){if(n){B={r:0,c:[],p:B};const e=n;X(e.$$.fragment,1,0,(()=>{ne(e,1)})),B.r||r(B.c),B=B.p}l?(n=new l({}),ee(n.$$.fragment),G(n.$$.fragment,1),te(n,t,null)):n=null}},i(e){o||(n&&G(n.$$.fragment,e),o=!0)},o(e){n&&X(n.$$.fragment,e),o=!1},d(e){e&&$(t),n&&ne(n),a=!1,i()}}}function He(e,t,n){const o={"/":Fe,"/list":ue},r=location.hash.slice(1)||"/";let a=o[r];return[a,function(){const e=location.hash.slice(1);console.log(e),n(0,a=o[e]||Fe),console.log(a)}]}return new class extends ae{constructor(e){super(),re(this,e,He,Je,i,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
