import{a1 as n,ag as r,t as u,y as j,ae as v,av as $}from"../modules/vue-DgfWfyKU.js";import{ar as p,B as C,z as x,A as S,as as l,y as R,w as T,C as g,at as k,au as E}from"../index-WXEuyAED.js";function F(){const t=n(p),s=r(t,"nav"),a=n(C).value,e=r(a,"current"),i=n(x),c=n(S),o=n(l,{}),d=n(R,void 0),m=n(T,u(1)),f=n(g,j(()=>1));return{$slidev:t,$nav:s,$clicksContext:a,$clicks:e,$page:i,$route:d,$renderContext:c,$frontmatter:o,$scale:m,$zoom:f}}function L(t){var i,c;v(l,t);const{$slidev:s,$page:a}=F(),e=s.nav.slides.find(o=>o.no===a.value);if((c=(i=e==null?void 0:e.meta)==null?void 0:i.slide)!=null&&c.frontmatter){for(const o of Object.keys(e.meta.slide.frontmatter))o in t||delete e.meta.slide.frontmatter[o];Object.assign(e.meta.slide.frontmatter,t)}}function O(t,s){return{...$(t,s===0?k:E),frontmatter:t}}export{O as f,L as p,F as u};
