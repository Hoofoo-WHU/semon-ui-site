(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){var e=n("cha2");return{page:e.default||e}}])},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},B5Ud:function(e,t,n){"use strict";var r=n("KI45"),a=r(n("ln6h")),o=r(n("+oT+")),i=r(n("UXZV")),u=r(n("/HRN")),l=r(n("WaGi")),s=r(n("ZDA2")),c=r(n("/+P4")),f=r(n("N9n2")),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},d=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var m=p(n("q1tI")),h=d(n("17x9")),v=n("Bu4q"),g=n("20a2"),y=function(e){function t(){return(0,u.default)(this,t),(0,s.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,f.default)(t,e),(0,l.default)(t,[{key:"getChildContext",value:function(){return{router:g.makePublicRouterInstance(this.props.router)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,a=w(t);return m.default.createElement(b,null,m.default.createElement(n,(0,i.default)({},r,{url:a})))}}],[{key:"getInitialProps",value:function(){var e=(0,o.default)(a.default.mark(function e(t){var n,r,o;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,t.router,r=t.ctx,e.next=3,v.loadGetInitialProps(n,r);case 3:return o=e.sent,e.abrupt("return",{pageProps:o});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(m.Component);y.childContextTypes={router:h.default.object},t.default=y;var b=function(e){function t(){return(0,u.default)(this,t),(0,s.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,f.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=window.location.hash;if(e=!!e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),t}(m.Component);t.Container=b;var E=v.execOnce(function(){0});function w(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return E(),r},get pathname(){return E(),t},get asPath(){return E(),n},back:function(){E(),e.back()},push:function(t,n){return E(),e.push(t,n)},pushTo:function(t,n){E();var r=n?t:null,a=n||t;return e.push(r,a)},replace:function(t,n){return E(),e.replace(t,n)},replaceTo:function(t,n){E();var r=n?t:null,a=n||t;return e.replace(r,a)}}}t.createUrl=w},Mj6V:function(e,t,n){var r,a;
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */void 0===(a="function"==typeof(r=function(){var e,t,n={version:"0.2.0"},r=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function a(e,t,n){return e<t?t:e>n?n:e}function o(e){return 100*(-1+e)}n.configure=function(e){var t,n;for(t in e)void 0!==(n=e[t])&&e.hasOwnProperty(t)&&(r[t]=n);return this},n.status=null,n.set=function(e){var t=n.isStarted();e=a(e,r.minimum,1),n.status=1===e?null:e;var l=n.render(!t),s=l.querySelector(r.barSelector),c=r.speed,f=r.easing;return l.offsetWidth,i(function(t){""===r.positionUsing&&(r.positionUsing=n.getPositioningCSS()),u(s,function(e,t,n){var a;return(a="translate3d"===r.positionUsing?{transform:"translate3d("+o(e)+"%,0,0)"}:"translate"===r.positionUsing?{transform:"translate("+o(e)+"%,0)"}:{"margin-left":o(e)+"%"}).transition="all "+t+"ms "+n,a}(e,c,f)),1===e?(u(l,{transition:"none",opacity:1}),l.offsetWidth,setTimeout(function(){u(l,{transition:"all "+c+"ms linear",opacity:0}),setTimeout(function(){n.remove(),t()},c)},c)):setTimeout(t,c)}),this},n.isStarted=function(){return"number"==typeof n.status},n.start=function(){n.status||n.set(0);var e=function(){setTimeout(function(){n.status&&(n.trickle(),e())},r.trickleSpeed)};return r.trickle&&e(),this},n.done=function(e){return e||n.status?n.inc(.3+.5*Math.random()).set(1):this},n.inc=function(e){var t=n.status;return t?("number"!=typeof e&&(e=(1-t)*a(Math.random()*t,.1,.95)),t=a(t+e,0,.994),n.set(t)):n.start()},n.trickle=function(){return n.inc(Math.random()*r.trickleRate)},e=0,t=0,n.promise=function(r){return r&&"resolved"!==r.state()?(0===t&&n.start(),e++,t++,r.always(function(){0==--t?(e=0,n.done()):n.set((e-t)/e)}),this):this},n.render=function(e){if(n.isRendered())return document.getElementById("nprogress");s(document.documentElement,"nprogress-busy");var t=document.createElement("div");t.id="nprogress",t.innerHTML=r.template;var a,i=t.querySelector(r.barSelector),l=e?"-100":o(n.status||0),c=document.querySelector(r.parent);return u(i,{transition:"all 0 linear",transform:"translate3d("+l+"%,0,0)"}),r.showSpinner||(a=t.querySelector(r.spinnerSelector))&&p(a),c!=document.body&&s(c,"nprogress-custom-parent"),c.appendChild(t),t},n.remove=function(){c(document.documentElement,"nprogress-busy"),c(document.querySelector(r.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&p(e)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return t+"Perspective"in e?"translate3d":t+"Transform"in e?"translate":"margin"};var i=function(){var e=[];function t(){var n=e.shift();n&&n(t)}return function(n){e.push(n),1==e.length&&t()}}(),u=function(){var e=["Webkit","O","Moz","ms"],t={};function n(n){return n=n.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(e,t){return t.toUpperCase()}),t[n]||(t[n]=function(t){var n=document.body.style;if(t in n)return t;for(var r,a=e.length,o=t.charAt(0).toUpperCase()+t.slice(1);a--;)if((r=e[a]+o)in n)return r;return t}(n))}function r(e,t,r){t=n(t),e.style[t]=r}return function(e,t){var n,a,o=arguments;if(2==o.length)for(n in t)void 0!==(a=t[n])&&t.hasOwnProperty(n)&&r(e,n,a);else r(e,o[1],o[2])}}();function l(e,t){var n="string"==typeof e?e:f(e);return n.indexOf(" "+t+" ")>=0}function s(e,t){var n=f(e),r=n+t;l(n,t)||(e.className=r.substring(1))}function c(e,t){var n,r=f(e);l(e,t)&&(n=r.replace(" "+t+" "," "),e.className=n.substring(1,n.length-1))}function f(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function p(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return n})?r.call(t,n,t,e):r)||(e.exports=a)},cha2:function(e,t,n){"use strict";n.r(t);var r=n("ln6h"),a=n.n(r),o=n("O40h"),i=n("0iUn"),u=n("sLSF"),l=n("MI3g"),s=n("a7VT"),c=n("Tit0"),f=n("20a2"),p=n.n(f),d=n("Mj6V"),m=n.n(d);n("MPee");p.a.events.on("routeChangeStart",function(){m.a.start()}),p.a.events.on("routeChangeComplete",function(){m.a.done()});var h=n("q1tI"),v=n.n(h),g=n("8Bbg"),y=n.n(g),b=n("xBo8"),E=n("vRGJ"),w=n.n(E);function x(e,t){return w()(e).test(t)}var O=function(e){function t(){return Object(i.default)(this,t),Object(l.default)(this,Object(s.default)(t).apply(this,arguments))}return Object(c.default)(t,e),Object(u.default)(t,[{key:"render",value:function(){var e=this,t=null;return v.a.Children.toArray(this.props.children).some(function(n){var r=!n.props.href||x(n.props.href,e.props.router.route);return r&&(t=n),r}),t}}]),t}(v.a.Component),k=function(e){function t(){return Object(i.default)(this,t),Object(l.default)(this,Object(s.default)(t).apply(this,arguments))}return Object(c.default)(t,e),Object(u.default)(t,[{key:"match",value:function(){return!this.props.href||x(this.props.href,this.props.router.route)}},{key:"render",value:function(){return this.match()?this.props.children:null}}]),t}(v.a.Component),j=Object(f.withRouter)(k),T=Object(f.withRouter)(O),C=n("f4ym"),S=function(e){function t(){return Object(i.default)(this,t),Object(l.default)(this,Object(s.default)(t).apply(this,arguments))}return Object(c.default)(t,e),Object(u.default)(t,[{key:"render",value:function(){return v.a.createElement(b.Menu,{activeName:this.props.router.query.title,style:{minWidth:260,minHeight:"100vh"}},v.a.createElement(C.a,{scroll:!1,href:"/doc?title=introduce",as:"/doc/introduce"},v.a.createElement(b.Menu.Item,{name:"introduce"},"介绍")),v.a.createElement(C.a,{scroll:!1,href:"/doc?title=install",as:"/doc/install"},v.a.createElement(b.Menu.Item,{name:"install"},"安装")))}}]),t}(v.a.Component),P=Object(f.withRouter)(S),R=b.Layout.Header,I=b.Layout.Content,M=b.Layout.Sider,U=function(e){return h.createElement(C.a,e,h.createElement(b.Button,{style:{marginRight:8}},e.children))},_=function(e){var t=e.children;return h.createElement(b.Layout,null,h.createElement(R,null,h.createElement(U,{href:"/"},"主页"),h.createElement(U,{href:"/doc?title=introduce",as:"/doc/introduce"},"组件")),h.createElement(T,null,h.createElement(j,{href:"/doc"},h.createElement(b.Layout,null,h.createElement(M,null,h.createElement(P,null)),h.createElement(I,null,h.createElement(I,null,t)))),h.createElement(j,null,h.createElement(I,null,t))))},q=(n("CJAc"),n("GFNa"),function(e){function t(){return Object(i.default)(this,t),Object(l.default)(this,Object(s.default)(t).apply(this,arguments))}return Object(c.default)(t,e),Object(u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return v.a.createElement(g.Container,null,v.a.createElement(T,null,v.a.createElement(j,{href:"/_error"},v.a.createElement(t,n)),v.a.createElement(j,null,v.a.createElement(_,null,v.a.createElement(t,n)))))}}],[{key:"getInitialProps",value:function(){var e=Object(o.default)(a.a.mark(function e(t){var n,r,o;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.Component,r=t.ctx,o={},!n.getInitialProps){e.next=6;break}return e.next=5,n.getInitialProps(r);case 5:o=e.sent;case 6:return e.abrupt("return",{pageProps:o});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),t}(y.a));t.default=q},vRGJ:function(e,t){e.exports=c,e.exports.parse=a,e.exports.compile=function(e,t){return o(a(e,t))},e.exports.tokensToFunction=o,e.exports.tokensToRegExp=s;var n="/",r=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function a(e,t){for(var a,o=[],l=0,s=0,c="",f=t&&t.delimiter||n,p=t&&t.whitelist||void 0,d=!1;null!==(a=r.exec(e));){var m=a[0],h=a[1],v=a.index;if(c+=e.slice(s,v),s=v+m.length,h)c+=h[1],d=!0;else{var g="",y=a[2],b=a[3],E=a[4],w=a[5];if(!d&&c.length){var x=c.length-1,O=c[x];(!p||p.indexOf(O)>-1)&&(g=O,c=c.slice(0,x))}c&&(o.push(c),c="",d=!1);var k="+"===w||"*"===w,j="?"===w||"*"===w,T=b||E,C=g||f;o.push({name:y||l++,prefix:g,delimiter:C,optional:j,repeat:k,pattern:T?u(T):"[^"+i(C===f?C:C+f)+"]+?"})}}return(c||s<e.length)&&o.push(c+e.substr(s)),o}function o(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var a="",o=r&&r.encode||encodeURIComponent,i=0;i<e.length;i++){var u=e[i];if("string"!=typeof u){var l,s=n?n[u.name]:void 0;if(Array.isArray(s)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but got array');if(0===s.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var c=0;c<s.length;c++){if(l=o(s[c],u),!t[i].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'"');a+=(0===c?u.prefix:u.delimiter)+l}}else if("string"!=typeof s&&"number"!=typeof s&&"boolean"!=typeof s){if(!u.optional)throw new TypeError('Expected "'+u.name+'" to be '+(u.repeat?"an array":"a string"))}else{if(l=o(String(s),u),!t[i].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but got "'+l+'"');a+=u.prefix+l}}else a+=u}return a}}function i(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function l(e){return e&&e.sensitive?"":"i"}function s(e,t,r){for(var a=(r=r||{}).strict,o=!1!==r.start,u=!1!==r.end,s=r.delimiter||n,c=[].concat(r.endsWith||[]).map(i).concat("$").join("|"),f=o?"^":"",p=0;p<e.length;p++){var d=e[p];if("string"==typeof d)f+=i(d);else{var m=d.repeat?"(?:"+d.pattern+")(?:"+i(d.delimiter)+"(?:"+d.pattern+"))*":d.pattern;t&&t.push(d),d.optional?d.prefix?f+="(?:"+i(d.prefix)+"("+m+"))?":f+="("+m+")?":f+=i(d.prefix)+"("+m+")"}}if(u)a||(f+="(?:"+i(s)+")?"),f+="$"===c?"$":"(?="+c+")";else{var h=e[e.length-1],v="string"==typeof h?h[h.length-1]===s:void 0===h;a||(f+="(?:"+i(s)+"(?="+c+"))?"),v||(f+="(?="+i(s)+"|"+c+")")}return new RegExp(f,l(r))}function c(e,t,n){return e instanceof RegExp?function(e,t){if(!t)return e;var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return e}(e,t):Array.isArray(e)?function(e,t,n){for(var r=[],a=0;a<e.length;a++)r.push(c(e[a],t,n).source);return new RegExp("(?:"+r.join("|")+")",l(n))}(e,t,n):function(e,t,n){return s(a(e,n),t,n)}(e,t,n)}}},[["74v/",1,0,7]]]);