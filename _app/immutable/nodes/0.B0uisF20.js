import{s as z,n as T,g as w,c as A,w as O,x as S,y as q,z as D,A as H,B as I}from"../chunks/scheduler.CWzULmeO.js";import{S as M,i as C,e as p,t as N,s as g,c as d,k as $,l as R,d as h,a as y,g as L,b as v,j,f,q as V,x as B,y as F,z as P,p as k,n as E,A as G}from"../chunks/index.BumgRyWf.js";import{b as x}from"../chunks/paths.BS7V_aOB.js";import{w as J}from"../chunks/index.D8eso7jt.js";const K=!0,ae=Object.freeze(Object.defineProperty({__proto__:null,prerender:K},Symbol.toStringTag,{value:"Module"}));function Q(i){let e,s,l,r,n,o=`<a href="${x}" class="svelte-1s6myhm">Home</a> <a href="${x+"/about"}" class="svelte-1s6myhm">About</a>`;return{c(){e=p("header"),s=p("h1"),l=N(i[0]),r=g(),n=p("nav"),n.innerHTML=o,this.h()},l(c){e=d(c,"HEADER",{class:!0});var t=$(e);s=d(t,"H1",{class:!0});var _=$(s);l=R(_,i[0]),_.forEach(h),r=y(t),n=d(t,"NAV",{class:!0,"data-svelte-h":!0}),L(n)!=="svelte-1sj162q"&&(n.innerHTML=o),t.forEach(h),this.h()},h(){v(s,"class","svelte-1s6myhm"),v(n,"class","header-page-items svelte-1s6myhm"),v(e,"class","svelte-1s6myhm")},m(c,t){j(c,e,t),f(e,s),f(s,l),f(e,r),f(e,n)},p(c,[t]){t&1&&V(l,c[0])},i:T,o:T,d(c){c&&h(e)}}}function U(i,e,s){let l;const{title:r}=w("my-title");return A(i,r,n=>s(0,l=n)),[l,r]}class W extends M{constructor(e){super(),C(this,e,U,Q,z,{})}}function X(i){let e,s,l,r,n,o,c="<p>This is the footer</p>",t;s=new W({});const _=i[3].default,u=O(_,i,i[2],null);return{c(){e=p("div"),B(s.$$.fragment),l=g(),r=p("main"),u&&u.c(),n=g(),o=p("footer"),o.innerHTML=c,this.h()},l(a){e=d(a,"DIV",{class:!0});var m=$(e);F(s.$$.fragment,m),l=y(m),r=d(m,"MAIN",{class:!0});var b=$(r);u&&u.l(b),b.forEach(h),n=y(m),o=d(m,"FOOTER",{class:!0,"data-svelte-h":!0}),L(o)!=="svelte-16s1vd6"&&(o.innerHTML=c),m.forEach(h),this.h()},h(){v(r,"class","svelte-1ki1zik"),v(o,"class","svelte-1ki1zik"),v(e,"class","app svelte-1ki1zik")},m(a,m){j(a,e,m),P(s,e,null),f(e,l),f(e,r),u&&u.m(r,null),f(e,n),f(e,o),t=!0},p(a,[m]){u&&u.p&&(!t||m&4)&&S(u,_,a,a[2],t?D(_,a[2],m,null):q(a[2]),null)},i(a){t||(k(s.$$.fragment,a),k(u,a),t=!0)},o(a){E(s.$$.fragment,a),E(u,a),t=!1},d(a){a&&h(e),G(s),u&&u.d(a)}}}function Y(i,e,s){let l,{$$slots:r={},$$scope:n}=e;const o=J("default");A(i,o,t=>s(4,l=t)),H("my-title",{title:o});function c(t){I(o,l=t,l)}return H("updateTitle",c),i.$$set=t=>{"$$scope"in t&&s(2,n=t.$$scope)},[o,c,n,r]}class ne extends M{constructor(e){super(),C(this,e,Y,X,z,{updateTitle:1})}get updateTitle(){return this.$$.ctx[1]}}export{ne as component,ae as universal};
