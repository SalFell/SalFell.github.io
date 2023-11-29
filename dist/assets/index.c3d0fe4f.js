(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function g(){}function ee(t){return t()}function U(){return Object.create(null)}function N(t){t.forEach(ee)}function ne(t){return typeof t=="function"}function S(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let q;function le(t,e){return q||(q=document.createElement("a")),q.href=e,t===q.href}function re(t){return Object.keys(t).length===0}function u(t,e){t.appendChild(e)}function y(t,e,n){t.insertBefore(e,n||null)}function $(t){t.parentNode.removeChild(t)}function M(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _(t){return document.createElement(t)}function b(t){return document.createTextNode(t)}function m(){return b(" ")}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function se(t){return Array.from(t.childNodes)}function oe(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let R;function O(t){R=t}const I=[],H=[],F=[],J=[],ie=Promise.resolve();let B=!1;function ce(){B||(B=!0,ie.then(te))}function G(t){F.push(t)}const T=new Set;let D=0;function te(){const t=R;do{for(;D<I.length;){const e=I[D];D++,O(e),ae(e.$$)}for(O(null),I.length=0,D=0;H.length;)H.pop()();for(let e=0;e<F.length;e+=1){const n=F[e];T.has(n)||(T.add(n),n())}F.length=0}while(I.length);for(;J.length;)J.pop()();B=!1,T.clear(),O(t)}function ae(t){if(t.fragment!==null){t.update(),N(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(G)}}const L=new Set;let ue;function w(t,e){t&&t.i&&(L.delete(t),t.i(e))}function P(t,e,n,o){if(t&&t.o){if(L.has(t))return;L.add(t),ue.c.push(()=>{L.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}else o&&o()}function j(t){t&&t.c()}function k(t,e,n,o){const{fragment:i,on_mount:s,on_destroy:l,after_update:c}=t.$$;i&&i.m(e,n),o||G(()=>{const r=s.map(ee).filter(ne);l?l.push(...r):N(r),t.$$.on_mount=[]}),c.forEach(G)}function A(t,e){const n=t.$$;n.fragment!==null&&(N(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function fe(t,e){t.$$.dirty[0]===-1&&(I.push(t),ce(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function C(t,e,n,o,i,s,l,c=[-1]){const r=R;O(t);const a=t.$$={fragment:null,ctx:null,props:s,update:g,not_equal:i,bound:U(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:U(),dirty:c,skip_bound:!1,root:e.target||r.$$.root};l&&l(a.root);let d=!1;if(a.ctx=n?n(t,e.props||{},(p,v,...h)=>{const x=h.length?h[0]:v;return a.ctx&&i(a.ctx[p],a.ctx[p]=x)&&(!a.skip_bound&&a.bound[p]&&a.bound[p](x),d&&fe(t,p)),v}):[],a.update(),d=!0,N(a.before_update),a.fragment=o?o(a.ctx):!1,e.target){if(e.hydrate){const p=se(e.target);a.fragment&&a.fragment.l(p),p.forEach($)}else a.fragment&&a.fragment.c();e.intro&&w(t.$$.fragment),k(t,e.target,e.anchor,e.customElement),te()}O(r)}class E{$destroy(){A(this,1),this.$destroy=g}$on(e,n){const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const i=o.indexOf(n);i!==-1&&o.splice(i,1)}}$set(e){this.$$set&&!re(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const de="/assets/selfie.6a406710.svg";function _e(t){let e,n,o,i,s,l,c,r,a,d,p,v;return{c(){e=_("section"),n=_("div"),o=_("img"),s=m(),l=_("p"),c=b("Hi, I'm "),r=b(t[0]),a=m(),d=_("p"),d.textContent="WELCOME TO MY PORTFOLIO",p=m(),v=_("p"),v.textContent=`I'm a Computer Science student at CSU Fullerton. I'm passionate about
      software development and  game development. I'm always looking for new
      opportunities to learn and grow.`,f(o,"width",150),f(o,"height",225),le(o.src,i=de)||f(o,"src",i),f(o,"alt",""),f(l,"class","header--small svelte-1kwsgif"),f(d,"class","header--big svelte-1kwsgif"),f(v,"class","header--small svelte-1kwsgif"),f(n,"class","container__about svelte-1kwsgif"),f(n,"id","About")},m(h,x){y(h,e,x),u(e,n),u(n,o),u(n,s),u(n,l),u(l,c),u(l,r),u(n,a),u(n,d),u(n,p),u(n,v)},p(h,[x]){x&1&&oe(r,h[0])},i:g,o:g,d(h){h&&$(e)}}}function pe(t,e,n){let{name:o}=e;return t.$$set=i=>{"name"in i&&n(0,o=i.name)},[o]}class he extends E{constructor(e){super(),C(this,e,pe,_e,S,{name:0})}}function K(t,e,n){const o=t.slice();return o[1]=e[n].title,o[2]=e[n].duration,o}function V(t){let e,n,o=t[1]+"",i,s,l,c=t[2]+"",r,a;return{c(){e=_("div"),n=_("p"),i=b(o),s=m(),l=_("p"),r=b(c),a=m(),f(n,"class","header__title svelte-13arko0"),f(l,"class","header__duration"),f(e,"class","container__exp svelte-13arko0")},m(d,p){y(d,e,p),u(e,n),u(n,i),u(e,s),u(e,l),u(l,r),u(e,a)},p:g,d(d){d&&$(e)}}}function ge(t){let e,n,o,i=t[0],s=[];for(let l=0;l<i.length;l+=1)s[l]=V(K(t,i,l));return{c(){e=_("section"),n=_("p"),n.textContent="Experiences",o=m();for(let l=0;l<s.length;l+=1)s[l].c();f(n,"class","header--big svelte-13arko0"),f(e,"class","container__exps svelte-13arko0"),f(e,"id","Experiences")},m(l,c){y(l,e,c),u(e,n),u(e,o);for(let r=0;r<s.length;r+=1)s[r].m(e,null)},p(l,[c]){if(c&1){i=l[0];let r;for(r=0;r<i.length;r+=1){const a=K(l,i,r);s[r]?s[r].p(a,c):(s[r]=V(a),s[r].c(),s[r].m(e,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=i.length}},i:g,o:g,d(l){l&&$(e),M(s,l)}}}function me(t){return[[{title:"CSU Fullerton HRDI VP Ops Student Assistant",duration:"Aug 2021 - Present"},{title:"CSU Fullerton Math Department Student Assistant",duration:"Aug 2021 - May 2022"},{title:"Corovan IT Tech Mover I",duration:"Aug 2021 - Jan 2022"},{title:"College of the Sequoias Access and Ability Center Student Assistant",duration:"Aug 2019 - Aug 2021"}]]}class ve extends E{constructor(e){super(),C(this,e,me,ge,S,{})}}function W(t,e,n){const o=t.slice();return o[3]=e[n].title,o[4]=e[n].url,o}function Y(t){let e,n,o=t[3]+"",i;return{c(){e=_("li"),n=_("a"),i=b(o),f(n,"href",t[4]),f(n,"class","nav__item svelte-19pdrq8"),f(e,"class","svelte-19pdrq8")},m(s,l){y(s,e,l),u(e,n),u(n,i)},p:g,d(s){s&&$(e)}}}function $e(t){let e,n,o,i,s,l=t[0],c=[];for(let r=0;r<l.length;r+=1)c[r]=Y(W(t,l,r));return{c(){e=_("nav"),n=_("section"),o=_("ol");for(let r=0;r<c.length;r+=1)c[r].c();i=m(),s=_("p"),s.textContent=`${t[1].toLocaleDateString(void 0,t[2])}`,f(s,"class","time svelte-19pdrq8"),f(o,"class","container__nav svelte-19pdrq8"),f(o,"id","/"),f(n,"class","container__nav svelte-19pdrq8"),f(n,"id","/")},m(r,a){y(r,e,a),u(e,n),u(n,o);for(let d=0;d<c.length;d+=1)c[d].m(o,null);u(o,i),u(o,s)},p(r,[a]){if(a&1){l=r[0];let d;for(d=0;d<l.length;d+=1){const p=W(r,l,d);c[d]?c[d].p(p,a):(c[d]=Y(p),c[d].c(),c[d].m(o,i))}for(;d<c.length;d+=1)c[d].d(1);c.length=l.length}},i:g,o:g,d(r){r&&$(e),M(c,r)}}}function ye(t){history.scrollRestoration="manual";const e=[{title:"About",url:"#About"},{title:"Experiences",url:"#Experiences"},{title:"Projects",url:"#Projects"},{title:"Socials",url:"#Socials"}];let n=new Date(Date.now());return[e,n,{weekday:"long"}]}class be extends E{constructor(e){super(),C(this,e,ye,$e,S,{})}}function z(t,e,n){const o=t.slice();return o[1]=e[n].title,o[2]=e[n].description,o[3]=e[n].url,o}function Q(t){let e,n,o,i=t[1]+"",s,l,c,r=t[2]+"",a,d;return{c(){e=_("div"),n=_("a"),o=_("p"),s=b(i),l=m(),c=_("p"),a=b(r),d=m(),f(o,"class","header__title svelte-cb529g"),f(n,"href",t[3]),f(n,"target","_blank"),f(e,"class","container__project svelte-cb529g")},m(p,v){y(p,e,v),u(e,n),u(n,o),u(o,s),u(e,l),u(e,c),u(c,a),u(e,d)},p:g,d(p){p&&$(e)}}}function xe(t){let e,n,o,i=t[0],s=[];for(let l=0;l<i.length;l+=1)s[l]=Q(z(t,i,l));return{c(){e=_("section"),n=_("p"),n.textContent="Projects",o=m();for(let l=0;l<s.length;l+=1)s[l].c();f(n,"class","header--big svelte-cb529g"),f(e,"class","container__projects svelte-cb529g"),f(e,"id","Projects")},m(l,c){y(l,e,c),u(e,n),u(e,o);for(let r=0;r<s.length;r+=1)s[r].m(e,null)},p(l,[c]){if(c&1){i=l[0];let r;for(r=0;r<i.length;r+=1){const a=z(l,i,r);s[r]?s[r].p(a,c):(s[r]=Q(a),s[r].c(),s[r].m(e,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=i.length}},i:g,o:g,d(l){l&&$(e),M(s,l)}}}function we(t){return[[{title:"Intro to Game Design",description:"Developed simple games using Python and PyGame",url:"https://github.com/SalFell/CPSC-386-Game-Design"},{title:"x86 Assembly",description:"Developed various simple programs using x86 Assembly and hybrid C",url:"https://github.com/SalFell/CPSC240-x86-Assembly"}]]}class ke extends E{constructor(e){super(),C(this,e,we,xe,S,{})}}function X(t,e,n){const o=t.slice();return o[1]=e[n].title,o[2]=e[n].url,o}function Z(t){let e,n,o,i=t[1]+"",s,l;return{c(){e=_("div"),n=_("a"),o=_("p"),s=b(i),l=m(),f(o,"class","header__title svelte-xvnapw"),f(n,"href",t[2]),f(n,"target","_blank"),f(e,"class","container__project svelte-xvnapw")},m(c,r){y(c,e,r),u(e,n),u(n,o),u(o,s),u(e,l)},p:g,d(c){c&&$(e)}}}function Ae(t){let e,n,o,i=t[0],s=[];for(let l=0;l<i.length;l+=1)s[l]=Z(X(t,i,l));return{c(){e=_("section"),n=_("p"),n.textContent="Socials",o=m();for(let l=0;l<s.length;l+=1)s[l].c();f(n,"class","header--big svelte-xvnapw"),f(e,"class","container__socials svelte-xvnapw"),f(e,"id","Socials")},m(l,c){y(l,e,c),u(e,n),u(e,o);for(let r=0;r<s.length;r+=1)s[r].m(e,null)},p(l,[c]){if(c&1){i=l[0];let r;for(r=0;r<i.length;r+=1){const a=X(l,i,r);s[r]?s[r].p(a,c):(s[r]=Z(a),s[r].c(),s[r].m(e,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=i.length}},i:g,o:g,d(l){l&&$(e),M(s,l)}}}function Se(t){return[[{title:"Github Profile",url:"https://github.com/SalFell"},{title:"LinkedIn Profile",url:"https://www.linkedin.com/in/salvador-felipe-38b396217"},{title:"Email",url:"mailto: salvadorfelipe77@hotmail.com"}]]}class Ce extends E{constructor(e){super(),C(this,e,Se,Ae,S,{})}}function Ee(t){let e,n,o,i,s,l,c,r,a,d,p,v;return n=new be({}),s=new he({props:{name:"Salvador Felipe"}}),c=new ve({}),a=new ke({}),p=new Ce({}),{c(){e=_("main"),j(n.$$.fragment),o=m(),i=_("div"),j(s.$$.fragment),l=m(),j(c.$$.fragment),r=m(),j(a.$$.fragment),d=m(),j(p.$$.fragment),f(e,"class","svelte-m7s3tw")},m(h,x){y(h,e,x),k(n,e,null),u(e,o),u(e,i),k(s,i,null),u(i,l),k(c,i,null),u(i,r),k(a,i,null),u(i,d),k(p,i,null),v=!0},p:g,i(h){v||(w(n.$$.fragment,h),w(s.$$.fragment,h),w(c.$$.fragment,h),w(a.$$.fragment,h),w(p.$$.fragment,h),v=!0)},o(h){P(n.$$.fragment,h),P(s.$$.fragment,h),P(c.$$.fragment,h),P(a.$$.fragment,h),P(p.$$.fragment,h),v=!1},d(h){h&&$(e),A(n),A(s),A(c),A(a),A(p)}}}class Pe extends E{constructor(e){super(),C(this,e,null,Ee,S,{})}}new Pe({target:document.getElementById("app")});
