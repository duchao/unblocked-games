"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1582],{14402:function(t,e,n){n.d(e,{ee:function(){return tG},Eh:function(){return tK},VY:function(){return tJ},fC:function(){return tq},D7:function(){return tL}});var r=n(19790);let i=["top","right","bottom","left"],o=Math.min,l=Math.max,a=Math.round,f=Math.floor,c=t=>({x:t,y:t}),u={left:"right",right:"left",bottom:"top",top:"bottom"},s={start:"end",end:"start"};function d(t,e){return"function"==typeof t?t(e):t}function p(t){return t.split("-")[0]}function h(t){return t.split("-")[1]}function m(t){return"x"===t?"y":"x"}function g(t){return"y"===t?"height":"width"}function y(t){return["top","bottom"].includes(p(t))?"y":"x"}function v(t){return t.replace(/start|end/g,t=>s[t])}function w(t){return t.replace(/left|right|bottom|top/g,t=>u[t])}function x(t){return"number"!=typeof t?{top:0,right:0,bottom:0,left:0,...t}:{top:t,right:t,bottom:t,left:t}}function b(t){let{x:e,y:n,width:r,height:i}=t;return{width:r,height:i,top:n,left:e,right:e+r,bottom:n+i,x:e,y:n}}function O(t,e,n){let r,{reference:i,floating:o}=t,l=y(e),a=m(y(e)),f=g(a),c=p(e),u="y"===l,s=i.x+i.width/2-o.width/2,d=i.y+i.height/2-o.height/2,v=i[f]/2-o[f]/2;switch(c){case"top":r={x:s,y:i.y-o.height};break;case"bottom":r={x:s,y:i.y+i.height};break;case"right":r={x:i.x+i.width,y:d};break;case"left":r={x:i.x-o.width,y:d};break;default:r={x:i.x,y:i.y}}switch(h(e)){case"start":r[a]-=v*(n&&u?-1:1);break;case"end":r[a]+=v*(n&&u?-1:1)}return r}let A=async(t,e,n)=>{let{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:l}=n,a=o.filter(Boolean),f=await (null==l.isRTL?void 0:l.isRTL(e)),c=await l.getElementRects({reference:t,floating:e,strategy:i}),{x:u,y:s}=O(c,r,f),d=r,p={},h=0;for(let n=0;n<a.length;n++){let{name:o,fn:m}=a[n],{x:g,y:y,data:v,reset:w}=await m({x:u,y:s,initialPlacement:r,placement:d,strategy:i,middlewareData:p,rects:c,platform:l,elements:{reference:t,floating:e}});u=null!=g?g:u,s=null!=y?y:s,p={...p,[o]:{...p[o],...v}},w&&h<=50&&(h++,"object"==typeof w&&(w.placement&&(d=w.placement),w.rects&&(c=!0===w.rects?await l.getElementRects({reference:t,floating:e,strategy:i}):w.rects),{x:u,y:s}=O(c,d,f)),n=-1)}return{x:u,y:s,placement:d,strategy:i,middlewareData:p}};async function R(t,e){var n;void 0===e&&(e={});let{x:r,y:i,platform:o,rects:l,elements:a,strategy:f}=t,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:s="floating",altBoundary:p=!1,padding:h=0}=d(e,t),m=x(h),g=a[p?"floating"===s?"reference":"floating":s],y=b(await o.getClippingRect({element:null==(n=await (null==o.isElement?void 0:o.isElement(g)))||n?g:g.contextElement||await (null==o.getDocumentElement?void 0:o.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:f})),v="floating"===s?{x:r,y:i,width:l.floating.width,height:l.floating.height}:l.reference,w=await (null==o.getOffsetParent?void 0:o.getOffsetParent(a.floating)),O=await (null==o.isElement?void 0:o.isElement(w))&&await (null==o.getScale?void 0:o.getScale(w))||{x:1,y:1},A=b(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:v,offsetParent:w,strategy:f}):v);return{top:(y.top-A.top+m.top)/O.y,bottom:(A.bottom-y.bottom+m.bottom)/O.y,left:(y.left-A.left+m.left)/O.x,right:(A.right-y.right+m.right)/O.x}}function P(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function E(t){return i.some(e=>t[e]>=0)}async function S(t,e){let{placement:n,platform:r,elements:i}=t,o=await (null==r.isRTL?void 0:r.isRTL(i.floating)),l=p(n),a=h(n),f="y"===y(n),c=["left","top"].includes(l)?-1:1,u=o&&f?-1:1,s=d(e,t),{mainAxis:m,crossAxis:g,alignmentAxis:v}="number"==typeof s?{mainAxis:s,crossAxis:0,alignmentAxis:null}:{mainAxis:s.mainAxis||0,crossAxis:s.crossAxis||0,alignmentAxis:s.alignmentAxis};return a&&"number"==typeof v&&(g="end"===a?-1*v:v),f?{x:g*u,y:m*c}:{x:m*c,y:g*u}}function j(){return"undefined"!=typeof window}function T(t){return k(t)?(t.nodeName||"").toLowerCase():"#document"}function C(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function L(t){var e;return null==(e=(k(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function k(t){return!!j()&&(t instanceof Node||t instanceof C(t).Node)}function D(t){return!!j()&&(t instanceof Element||t instanceof C(t).Element)}function H(t){return!!j()&&(t instanceof HTMLElement||t instanceof C(t).HTMLElement)}function W(t){return!!j()&&"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof C(t).ShadowRoot)}function N(t){let{overflow:e,overflowX:n,overflowY:r,display:i}=B(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!["inline","contents"].includes(i)}function z(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch(t){return!1}})}function F(t){let e=V(),n=D(t)?B(t):t;return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some(t=>(n.willChange||"").includes(t))||["paint","layout","strict","content"].some(t=>(n.contain||"").includes(t))}function V(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function M(t){return["html","body","#document"].includes(T(t))}function B(t){return C(t).getComputedStyle(t)}function _(t){return D(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function I(t){if("html"===T(t))return t;let e=t.assignedSlot||t.parentNode||W(t)&&t.host||L(t);return W(e)?e.host:e}function Y(t,e,n){var r;void 0===e&&(e=[]),void 0===n&&(n=!0);let i=function t(e){let n=I(e);return M(n)?e.ownerDocument?e.ownerDocument.body:e.body:H(n)&&N(n)?n:t(n)}(t),o=i===(null==(r=t.ownerDocument)?void 0:r.body),l=C(i);if(o){let t=X(l);return e.concat(l,l.visualViewport||[],N(i)?i:[],t&&n?Y(t):[])}return e.concat(i,Y(i,[],n))}function X(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function $(t){let e=B(t),n=parseFloat(e.width)||0,r=parseFloat(e.height)||0,i=H(t),o=i?t.offsetWidth:n,l=i?t.offsetHeight:r,f=a(n)!==o||a(r)!==l;return f&&(n=o,r=l),{width:n,height:r,$:f}}function q(t){return D(t)?t:t.contextElement}function G(t){let e=q(t);if(!H(e))return c(1);let n=e.getBoundingClientRect(),{width:r,height:i,$:o}=$(e),l=(o?a(n.width):n.width)/r,f=(o?a(n.height):n.height)/i;return l&&Number.isFinite(l)||(l=1),f&&Number.isFinite(f)||(f=1),{x:l,y:f}}let J=c(0);function K(t){let e=C(t);return V()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:J}function Q(t,e,n,r){var i;void 0===e&&(e=!1),void 0===n&&(n=!1);let o=t.getBoundingClientRect(),l=q(t),a=c(1);e&&(r?D(r)&&(a=G(r)):a=G(t));let f=(void 0===(i=n)&&(i=!1),r&&(!i||r===C(l))&&i)?K(l):c(0),u=(o.left+f.x)/a.x,s=(o.top+f.y)/a.y,d=o.width/a.x,p=o.height/a.y;if(l){let t=C(l),e=r&&D(r)?C(r):r,n=t,i=X(n);for(;i&&r&&e!==n;){let t=G(i),e=i.getBoundingClientRect(),r=B(i),o=e.left+(i.clientLeft+parseFloat(r.paddingLeft))*t.x,l=e.top+(i.clientTop+parseFloat(r.paddingTop))*t.y;u*=t.x,s*=t.y,d*=t.x,p*=t.y,u+=o,s+=l,i=X(n=C(i))}}return b({width:d,height:p,x:u,y:s})}function U(t,e){let n=_(t).scrollLeft;return e?e.left+n:Q(L(t)).left+n}function Z(t,e,n){void 0===n&&(n=!1);let r=t.getBoundingClientRect();return{x:r.left+e.scrollLeft-(n?0:U(t,r)),y:r.top+e.scrollTop}}function tt(t,e,n){let r;if("viewport"===e)r=function(t,e){let n=C(t),r=L(t),i=n.visualViewport,o=r.clientWidth,l=r.clientHeight,a=0,f=0;if(i){o=i.width,l=i.height;let t=V();(!t||t&&"fixed"===e)&&(a=i.offsetLeft,f=i.offsetTop)}return{width:o,height:l,x:a,y:f}}(t,n);else if("document"===e)r=function(t){let e=L(t),n=_(t),r=t.ownerDocument.body,i=l(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),o=l(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight),a=-n.scrollLeft+U(t),f=-n.scrollTop;return"rtl"===B(r).direction&&(a+=l(e.clientWidth,r.clientWidth)-i),{width:i,height:o,x:a,y:f}}(L(t));else if(D(e))r=function(t,e){let n=Q(t,!0,"fixed"===e),r=n.top+t.clientTop,i=n.left+t.clientLeft,o=H(t)?G(t):c(1),l=t.clientWidth*o.x;return{width:l,height:t.clientHeight*o.y,x:i*o.x,y:r*o.y}}(e,n);else{let n=K(t);r={x:e.x-n.x,y:e.y-n.y,width:e.width,height:e.height}}return b(r)}function te(t){return"static"===B(t).position}function tn(t,e){if(!H(t)||"fixed"===B(t).position)return null;if(e)return e(t);let n=t.offsetParent;return L(t)===n&&(n=n.ownerDocument.body),n}function tr(t,e){let n=C(t);if(z(t))return n;if(!H(t)){let e=I(t);for(;e&&!M(e);){if(D(e)&&!te(e))return e;e=I(e)}return n}let r=tn(t,e);for(;r&&["table","td","th"].includes(T(r))&&te(r);)r=tn(r,e);return r&&M(r)&&te(r)&&!F(r)?n:r||function(t){let e=I(t);for(;H(e)&&!M(e);){if(F(e))return e;if(z(e))break;e=I(e)}return null}(t)||n}let ti=async function(t){let e=this.getOffsetParent||tr,n=this.getDimensions,r=await n(t.floating);return{reference:function(t,e,n){let r=H(e),i=L(e),o="fixed"===n,l=Q(t,!0,o,e),a={scrollLeft:0,scrollTop:0},f=c(0);if(r||!r&&!o){if(("body"!==T(e)||N(i))&&(a=_(e)),r){let t=Q(e,!0,o,e);f.x=t.x+e.clientLeft,f.y=t.y+e.clientTop}else i&&(f.x=U(i))}let u=!i||r||o?c(0):Z(i,a);return{x:l.left+a.scrollLeft-f.x-u.x,y:l.top+a.scrollTop-f.y-u.y,width:l.width,height:l.height}}(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},to={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:n,offsetParent:r,strategy:i}=t,o="fixed"===i,l=L(r),a=!!e&&z(e.floating);if(r===l||a&&o)return n;let f={scrollLeft:0,scrollTop:0},u=c(1),s=c(0),d=H(r);if((d||!d&&!o)&&(("body"!==T(r)||N(l))&&(f=_(r)),H(r))){let t=Q(r);u=G(r),s.x=t.x+r.clientLeft,s.y=t.y+r.clientTop}let p=!l||d||o?c(0):Z(l,f,!0);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-f.scrollLeft*u.x+s.x+p.x,y:n.y*u.y-f.scrollTop*u.y+s.y+p.y}},getDocumentElement:L,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:r,strategy:i}=t,a=[..."clippingAncestors"===n?z(e)?[]:function(t,e){let n=e.get(t);if(n)return n;let r=Y(t,[],!1).filter(t=>D(t)&&"body"!==T(t)),i=null,o="fixed"===B(t).position,l=o?I(t):t;for(;D(l)&&!M(l);){let e=B(l),n=F(l);n||"fixed"!==e.position||(i=null),(o?!n&&!i:!n&&"static"===e.position&&!!i&&["absolute","fixed"].includes(i.position)||N(l)&&!n&&function t(e,n){let r=I(e);return!(r===n||!D(r)||M(r))&&("fixed"===B(r).position||t(r,n))}(t,l))?r=r.filter(t=>t!==l):i=e,l=I(l)}return e.set(t,r),r}(e,this._c):[].concat(n),r],f=a[0],c=a.reduce((t,n)=>{let r=tt(e,n,i);return t.top=l(r.top,t.top),t.right=o(r.right,t.right),t.bottom=o(r.bottom,t.bottom),t.left=l(r.left,t.left),t},tt(e,f,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:tr,getElementRects:ti,getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){let{width:e,height:n}=$(t);return{width:e,height:n}},getScale:G,isElement:D,isRTL:function(t){return"rtl"===B(t).direction}},tl=t=>({name:"arrow",options:t,async fn(e){let{x:n,y:r,placement:i,rects:a,platform:f,elements:c,middlewareData:u}=e,{element:s,padding:p=0}=d(t,e)||{};if(null==s)return{};let v=x(p),w={x:n,y:r},b=m(y(i)),O=g(b),A=await f.getDimensions(s),R="y"===b,P=R?"clientHeight":"clientWidth",E=a.reference[O]+a.reference[b]-w[b]-a.floating[O],S=w[b]-a.reference[b],j=await (null==f.getOffsetParent?void 0:f.getOffsetParent(s)),T=j?j[P]:0;T&&await (null==f.isElement?void 0:f.isElement(j))||(T=c.floating[P]||a.floating[O]);let C=T/2-A[O]/2-1,L=o(v[R?"top":"left"],C),k=o(v[R?"bottom":"right"],C),D=T-A[O]-k,H=T/2-A[O]/2+(E/2-S/2),W=l(L,o(H,D)),N=!u.arrow&&null!=h(i)&&H!==W&&a.reference[O]/2-(H<L?L:k)-A[O]/2<0,z=N?H<L?H-L:H-D:0;return{[b]:w[b]+z,data:{[b]:W,centerOffset:H-W-z,...N&&{alignmentOffset:z}},reset:N}}}),ta=(t,e,n)=>{let r=new Map,i={platform:to,...n},o={...i.platform,_c:r};return A(t,e,{...i,platform:o})};var tf=n(13718),tc="undefined"!=typeof document?r.useLayoutEffect:r.useEffect;function tu(t,e){let n,r,i;if(t===e)return!0;if(typeof t!=typeof e)return!1;if("function"==typeof t&&t.toString()===e.toString())return!0;if(t&&e&&"object"==typeof t){if(Array.isArray(t)){if((n=t.length)!==e.length)return!1;for(r=n;0!=r--;)if(!tu(t[r],e[r]))return!1;return!0}if((n=(i=Object.keys(t)).length)!==Object.keys(e).length)return!1;for(r=n;0!=r--;)if(!({}).hasOwnProperty.call(e,i[r]))return!1;for(r=n;0!=r--;){let n=i[r];if(("_owner"!==n||!t.$$typeof)&&!tu(t[n],e[n]))return!1}return!0}return t!=t&&e!=e}function ts(t){return"undefined"==typeof window?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function td(t,e){let n=ts(t);return Math.round(e*n)/n}function tp(t){let e=r.useRef(t);return tc(()=>{e.current=t}),e}let th=t=>({name:"arrow",options:t,fn(e){let{element:n,padding:r}="function"==typeof t?t(e):t;return n&&({}).hasOwnProperty.call(n,"current")?null!=n.current?tl({element:n.current,padding:r}).fn(e):{}:n?tl({element:n,padding:r}).fn(e):{}}}),tm=(t,e)=>{var n;return{...(void 0===(n=t)&&(n=0),{name:"offset",options:n,async fn(t){var e,r;let{x:i,y:o,placement:l,middlewareData:a}=t,f=await S(t,n);return l===(null==(e=a.offset)?void 0:e.placement)&&null!=(r=a.arrow)&&r.alignmentOffset?{}:{x:i+f.x,y:o+f.y,data:{...f,placement:l}}}}),options:[t,e]}},tg=(t,e)=>{var n;return{...(void 0===(n=t)&&(n={}),{name:"shift",options:n,async fn(t){let{x:e,y:r,placement:i}=t,{mainAxis:a=!0,crossAxis:f=!1,limiter:c={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...u}=d(n,t),s={x:e,y:r},h=await R(t,u),g=y(p(i)),v=m(g),w=s[v],x=s[g];if(a){let t="y"===v?"top":"left",e="y"===v?"bottom":"right",n=w+h[t],r=w-h[e];w=l(n,o(w,r))}if(f){let t="y"===g?"top":"left",e="y"===g?"bottom":"right",n=x+h[t],r=x-h[e];x=l(n,o(x,r))}let b=c.fn({...t,[v]:w,[g]:x});return{...b,data:{x:b.x-e,y:b.y-r,enabled:{[v]:a,[g]:f}}}}}),options:[t,e]}},ty=(t,e)=>{var n;return{...(void 0===(n=t)&&(n={}),{options:n,fn(t){let{x:e,y:r,placement:i,rects:o,middlewareData:l}=t,{offset:a=0,mainAxis:f=!0,crossAxis:c=!0}=d(n,t),u={x:e,y:r},s=y(i),h=m(s),g=u[h],v=u[s],w=d(a,t),x="number"==typeof w?{mainAxis:w,crossAxis:0}:{mainAxis:0,crossAxis:0,...w};if(f){let t="y"===h?"height":"width",e=o.reference[h]-o.floating[t]+x.mainAxis,n=o.reference[h]+o.reference[t]-x.mainAxis;g<e?g=e:g>n&&(g=n)}if(c){var b,O;let t="y"===h?"width":"height",e=["top","left"].includes(p(i)),n=o.reference[s]-o.floating[t]+(e&&(null==(b=l.offset)?void 0:b[s])||0)+(e?0:x.crossAxis),r=o.reference[s]+o.reference[t]+(e?0:(null==(O=l.offset)?void 0:O[s])||0)-(e?x.crossAxis:0);v<n?v=n:v>r&&(v=r)}return{[h]:g,[s]:v}}}),options:[t,e]}},tv=(t,e)=>{var n;return{...(void 0===(n=t)&&(n={}),{name:"flip",options:n,async fn(t){var e,r,i,o,l;let{placement:a,middlewareData:f,rects:c,initialPlacement:u,platform:s,elements:x}=t,{mainAxis:b=!0,crossAxis:O=!0,fallbackPlacements:A,fallbackStrategy:P="bestFit",fallbackAxisSideDirection:E="none",flipAlignment:S=!0,...j}=d(n,t);if(null!=(e=f.arrow)&&e.alignmentOffset)return{};let T=p(a),C=y(u),L=p(u)===u,k=await (null==s.isRTL?void 0:s.isRTL(x.floating)),D=A||(L||!S?[w(u)]:function(t){let e=w(t);return[v(t),e,v(e)]}(u)),H="none"!==E;!A&&H&&D.push(...function(t,e,n,r){let i=h(t),o=function(t,e,n){let r=["left","right"],i=["right","left"];switch(t){case"top":case"bottom":if(n)return e?i:r;return e?r:i;case"left":case"right":return e?["top","bottom"]:["bottom","top"];default:return[]}}(p(t),"start"===n,r);return i&&(o=o.map(t=>t+"-"+i),e&&(o=o.concat(o.map(v)))),o}(u,S,E,k));let W=[u,...D],N=await R(t,j),z=[],F=(null==(r=f.flip)?void 0:r.overflows)||[];if(b&&z.push(N[T]),O){let t=function(t,e,n){void 0===n&&(n=!1);let r=h(t),i=m(y(t)),o=g(i),l="x"===i?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return e.reference[o]>e.floating[o]&&(l=w(l)),[l,w(l)]}(a,c,k);z.push(N[t[0]],N[t[1]])}if(F=[...F,{placement:a,overflows:z}],!z.every(t=>t<=0)){let t=((null==(i=f.flip)?void 0:i.index)||0)+1,e=W[t];if(e)return{data:{index:t,overflows:F},reset:{placement:e}};let n=null==(o=F.filter(t=>t.overflows[0]<=0).sort((t,e)=>t.overflows[1]-e.overflows[1])[0])?void 0:o.placement;if(!n)switch(P){case"bestFit":{let t=null==(l=F.filter(t=>{if(H){let e=y(t.placement);return e===C||"y"===e}return!0}).map(t=>[t.placement,t.overflows.filter(t=>t>0).reduce((t,e)=>t+e,0)]).sort((t,e)=>t[1]-e[1])[0])?void 0:l[0];t&&(n=t);break}case"initialPlacement":n=u}if(a!==n)return{reset:{placement:n}}}return{}}}),options:[t,e]}},tw=(t,e)=>{var n;return{...(void 0===(n=t)&&(n={}),{name:"size",options:n,async fn(t){var e,r;let i,a;let{placement:f,rects:c,platform:u,elements:s}=t,{apply:m=()=>{},...g}=d(n,t),v=await R(t,g),w=p(f),x=h(f),b="y"===y(f),{width:O,height:A}=c.floating;"top"===w||"bottom"===w?(i=w,a=x===(await (null==u.isRTL?void 0:u.isRTL(s.floating))?"start":"end")?"left":"right"):(a=w,i="end"===x?"top":"bottom");let P=A-v.top-v.bottom,E=O-v.left-v.right,S=o(A-v[i],P),j=o(O-v[a],E),T=!t.middlewareData.shift,C=S,L=j;if(null!=(e=t.middlewareData.shift)&&e.enabled.x&&(L=E),null!=(r=t.middlewareData.shift)&&r.enabled.y&&(C=P),T&&!x){let t=l(v.left,0),e=l(v.right,0),n=l(v.top,0),r=l(v.bottom,0);b?L=O-2*(0!==t||0!==e?t+e:l(v.left,v.right)):C=A-2*(0!==n||0!==r?n+r:l(v.top,v.bottom))}await m({...t,availableWidth:L,availableHeight:C});let k=await u.getDimensions(s.floating);return O!==k.width||A!==k.height?{reset:{rects:!0}}:{}}}),options:[t,e]}},tx=(t,e)=>{var n;return{...(void 0===(n=t)&&(n={}),{name:"hide",options:n,async fn(t){let{rects:e}=t,{strategy:r="referenceHidden",...i}=d(n,t);switch(r){case"referenceHidden":{let n=P(await R(t,{...i,elementContext:"reference"}),e.reference);return{data:{referenceHiddenOffsets:n,referenceHidden:E(n)}}}case"escaped":{let n=P(await R(t,{...i,altBoundary:!0}),e.floating);return{data:{escapedOffsets:n,escaped:E(n)}}}default:return{}}}}),options:[t,e]}},tb=(t,e)=>({...th(t),options:[t,e]});var tO=n(4984),tA=n(82841),tR=r.forwardRef((t,e)=>{let{children:n,width:r=10,height:i=5,...o}=t;return(0,tA.jsx)(tO.WV.svg,{...o,ref:e,width:r,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:t.asChild?n:(0,tA.jsx)("polygon",{points:"0,0 30,0 15,10"})})});tR.displayName="Arrow";var tP=n(24554),tE=n(32311),tS=n(30521),tj=n(87905),tT="Popper",[tC,tL]=(0,tE.b)(tT),[tk,tD]=tC(tT),tH=t=>{let{__scopePopper:e,children:n}=t,[i,o]=r.useState(null);return(0,tA.jsx)(tk,{scope:e,anchor:i,onAnchorChange:o,children:n})};tH.displayName=tT;var tW="PopperAnchor",tN=r.forwardRef((t,e)=>{let{__scopePopper:n,virtualRef:i,...o}=t,l=tD(tW,n),a=r.useRef(null),f=(0,tP.e)(e,a);return r.useEffect(()=>{l.onAnchorChange((null==i?void 0:i.current)||a.current)}),i?null:(0,tA.jsx)(tO.WV.div,{...o,ref:f})});tN.displayName=tW;var tz="PopperContent",[tF,tV]=tC(tz),tM=r.forwardRef((t,e)=>{var n,i,a,c,u,s,d,p;let{__scopePopper:h,side:m="bottom",sideOffset:g=0,align:y="center",alignOffset:v=0,arrowPadding:w=0,avoidCollisions:x=!0,collisionBoundary:b=[],collisionPadding:O=0,sticky:A="partial",hideWhenDetached:R=!1,updatePositionStrategy:P="optimized",onPlaced:E,...S}=t,j=tD(tz,h),[T,C]=r.useState(null),k=(0,tP.e)(e,t=>C(t)),[D,H]=r.useState(null),W=function(t){let[e,n]=r.useState(void 0);return(0,tj.b)(()=>{if(t){n({width:t.offsetWidth,height:t.offsetHeight});let e=new ResizeObserver(e=>{let r,i;if(!Array.isArray(e)||!e.length)return;let o=e[0];if("borderBoxSize"in o){let t=o.borderBoxSize,e=Array.isArray(t)?t[0]:t;r=e.inlineSize,i=e.blockSize}else r=t.offsetWidth,i=t.offsetHeight;n({width:r,height:i})});return e.observe(t,{box:"border-box"}),()=>e.unobserve(t)}n(void 0)},[t]),e}(D),N=null!==(d=null==W?void 0:W.width)&&void 0!==d?d:0,z=null!==(p=null==W?void 0:W.height)&&void 0!==p?p:0,F="number"==typeof O?O:{top:0,right:0,bottom:0,left:0,...O},V=Array.isArray(b)?b:[b],M=V.length>0,B={padding:F,boundary:V.filter(tY),altBoundary:M},{refs:_,floatingStyles:I,placement:X,isPositioned:$,middlewareData:G}=function(t){void 0===t&&(t={});let{placement:e="bottom",strategy:n="absolute",middleware:i=[],platform:o,elements:{reference:l,floating:a}={},transform:f=!0,whileElementsMounted:c,open:u}=t,[s,d]=r.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[p,h]=r.useState(i);tu(p,i)||h(i);let[m,g]=r.useState(null),[y,v]=r.useState(null),w=r.useCallback(t=>{t!==A.current&&(A.current=t,g(t))},[]),x=r.useCallback(t=>{t!==R.current&&(R.current=t,v(t))},[]),b=l||m,O=a||y,A=r.useRef(null),R=r.useRef(null),P=r.useRef(s),E=null!=c,S=tp(c),j=tp(o),T=tp(u),C=r.useCallback(()=>{if(!A.current||!R.current)return;let t={placement:e,strategy:n,middleware:p};j.current&&(t.platform=j.current),ta(A.current,R.current,t).then(t=>{let e={...t,isPositioned:!1!==T.current};L.current&&!tu(P.current,e)&&(P.current=e,tf.flushSync(()=>{d(e)}))})},[p,e,n,j,T]);tc(()=>{!1===u&&P.current.isPositioned&&(P.current.isPositioned=!1,d(t=>({...t,isPositioned:!1})))},[u]);let L=r.useRef(!1);tc(()=>(L.current=!0,()=>{L.current=!1}),[]),tc(()=>{if(b&&(A.current=b),O&&(R.current=O),b&&O){if(S.current)return S.current(b,O,C);C()}},[b,O,C,S,E]);let k=r.useMemo(()=>({reference:A,floating:R,setReference:w,setFloating:x}),[w,x]),D=r.useMemo(()=>({reference:b,floating:O}),[b,O]),H=r.useMemo(()=>{let t={position:n,left:0,top:0};if(!D.floating)return t;let e=td(D.floating,s.x),r=td(D.floating,s.y);return f?{...t,transform:"translate("+e+"px, "+r+"px)",...ts(D.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:e,top:r}},[n,f,D.floating,s.x,s.y]);return r.useMemo(()=>({...s,update:C,refs:k,elements:D,floatingStyles:H}),[s,C,k,D,H])}({strategy:"fixed",placement:m+("center"!==y?"-"+y:""),whileElementsMounted:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t,e,n,r){let i;void 0===r&&(r={});let{ancestorScroll:a=!0,ancestorResize:c=!0,elementResize:u="function"==typeof ResizeObserver,layoutShift:s="function"==typeof IntersectionObserver,animationFrame:d=!1}=r,p=q(t),h=a||c?[...p?Y(p):[],...Y(e)]:[];h.forEach(t=>{a&&t.addEventListener("scroll",n,{passive:!0}),c&&t.addEventListener("resize",n)});let m=p&&s?function(t,e){let n,r=null,i=L(t);function a(){var t;clearTimeout(n),null==(t=r)||t.disconnect(),r=null}return!function c(u,s){void 0===u&&(u=!1),void 0===s&&(s=1),a();let{left:d,top:p,width:h,height:m}=t.getBoundingClientRect();if(u||e(),!h||!m)return;let g=f(p),y=f(i.clientWidth-(d+h)),v={rootMargin:-g+"px "+-y+"px "+-f(i.clientHeight-(p+m))+"px "+-f(d)+"px",threshold:l(0,o(1,s))||1},w=!0;function x(t){let e=t[0].intersectionRatio;if(e!==s){if(!w)return c();e?c(!1,e):n=setTimeout(()=>{c(!1,1e-7)},1e3)}w=!1}try{r=new IntersectionObserver(x,{...v,root:i.ownerDocument})}catch(t){r=new IntersectionObserver(x,v)}r.observe(t)}(!0),a}(p,n):null,g=-1,y=null;u&&(y=new ResizeObserver(t=>{let[r]=t;r&&r.target===p&&y&&(y.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var t;null==(t=y)||t.observe(e)})),n()}),p&&!d&&y.observe(p),y.observe(e));let v=d?Q(t):null;return d&&function e(){let r=Q(t);v&&(r.x!==v.x||r.y!==v.y||r.width!==v.width||r.height!==v.height)&&n(),v=r,i=requestAnimationFrame(e)}(),n(),()=>{var t;h.forEach(t=>{a&&t.removeEventListener("scroll",n),c&&t.removeEventListener("resize",n)}),null==m||m(),null==(t=y)||t.disconnect(),y=null,d&&cancelAnimationFrame(i)}}(...e,{animationFrame:"always"===P})},elements:{reference:j.anchor},middleware:[tm({mainAxis:g+z,alignmentAxis:v}),x&&tg({mainAxis:!0,crossAxis:!1,limiter:"partial"===A?ty():void 0,...B}),x&&tv({...B}),tw({...B,apply:t=>{let{elements:e,rects:n,availableWidth:r,availableHeight:i}=t,{width:o,height:l}=n.reference,a=e.floating.style;a.setProperty("--radix-popper-available-width","".concat(r,"px")),a.setProperty("--radix-popper-available-height","".concat(i,"px")),a.setProperty("--radix-popper-anchor-width","".concat(o,"px")),a.setProperty("--radix-popper-anchor-height","".concat(l,"px"))}}),D&&tb({element:D,padding:w}),tX({arrowWidth:N,arrowHeight:z}),R&&tx({strategy:"referenceHidden",...B})]}),[J,K]=t$(X),U=(0,tS.W)(E);(0,tj.b)(()=>{$&&(null==U||U())},[$,U]);let Z=null===(n=G.arrow)||void 0===n?void 0:n.x,tt=null===(i=G.arrow)||void 0===i?void 0:i.y,te=(null===(a=G.arrow)||void 0===a?void 0:a.centerOffset)!==0,[tn,tr]=r.useState();return(0,tj.b)(()=>{T&&tr(window.getComputedStyle(T).zIndex)},[T]),(0,tA.jsx)("div",{ref:_.setFloating,"data-radix-popper-content-wrapper":"",style:{...I,transform:$?I.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:tn,"--radix-popper-transform-origin":[null===(c=G.transformOrigin)||void 0===c?void 0:c.x,null===(u=G.transformOrigin)||void 0===u?void 0:u.y].join(" "),...(null===(s=G.hide)||void 0===s?void 0:s.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:(0,tA.jsx)(tF,{scope:h,placedSide:J,onArrowChange:H,arrowX:Z,arrowY:tt,shouldHideArrow:te,children:(0,tA.jsx)(tO.WV.div,{"data-side":J,"data-align":K,...S,ref:k,style:{...S.style,animation:$?void 0:"none"}})})})});tM.displayName=tz;var tB="PopperArrow",t_={top:"bottom",right:"left",bottom:"top",left:"right"},tI=r.forwardRef(function(t,e){let{__scopePopper:n,...r}=t,i=tV(tB,n),o=t_[i.placedSide];return(0,tA.jsx)("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[o]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:(0,tA.jsx)(tR,{...r,ref:e,style:{...r.style,display:"block"}})})});function tY(t){return null!==t}tI.displayName=tB;var tX=t=>({name:"transformOrigin",options:t,fn(e){var n,r,i,o,l;let{placement:a,rects:f,middlewareData:c}=e,u=(null===(n=c.arrow)||void 0===n?void 0:n.centerOffset)!==0,s=u?0:t.arrowWidth,d=u?0:t.arrowHeight,[p,h]=t$(a),m={start:"0%",center:"50%",end:"100%"}[h],g=(null!==(o=null===(r=c.arrow)||void 0===r?void 0:r.x)&&void 0!==o?o:0)+s/2,y=(null!==(l=null===(i=c.arrow)||void 0===i?void 0:i.y)&&void 0!==l?l:0)+d/2,v="",w="";return"bottom"===p?(v=u?m:"".concat(g,"px"),w="".concat(-d,"px")):"top"===p?(v=u?m:"".concat(g,"px"),w="".concat(f.floating.height+d,"px")):"right"===p?(v="".concat(-d,"px"),w=u?m:"".concat(y,"px")):"left"===p&&(v="".concat(f.floating.width+d,"px"),w=u?m:"".concat(y,"px")),{data:{x:v,y:w}}}});function t$(t){let[e,n="center"]=t.split("-");return[e,n]}var tq=tH,tG=tN,tJ=tM,tK=tI},16215:function(t,e,n){n.d(e,{T:function(){return l},f:function(){return a}});var r=n(19790),i=n(4984),o=n(82841),l=r.forwardRef((t,e)=>(0,o.jsx)(i.WV.span,{...t,ref:e,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...t.style}}));l.displayName="VisuallyHidden";var a=l},30457:function(t,e,n){n.d(e,{w_:function(){return u}});var r=n(19790),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(i),l=["attr","size","title"];function a(){return(a=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach(function(e){var r,i;r=e,i=n[e],(r=function(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:e+""}(r))in t?Object.defineProperty(t,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[r]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function u(t){return e=>r.createElement(s,a({attr:c({},t.attr)},e),function t(e){return e&&e.map((e,n)=>r.createElement(e.tag,c({key:n},e.attr),t(e.child)))}(t.child))}function s(t){var e=e=>{var n,{attr:i,size:o,title:f}=t,u=function(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}(t,l),s=o||e.size||"1em";return e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,i,u,{className:n,style:c(c({color:t.color||e.color},e.style),t.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),f&&r.createElement("title",null,f),t.children)};return void 0!==o?r.createElement(o.Consumer,null,t=>e(t)):e(i)}}}]);