(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function b(a){return k(a)||c(a)||g()}function c(a){if(Symbol.iterator in Object(a)||Object.prototype.toString.call(a)==="[object Arguments]")return Array.from(a)}function f(a,b){return k(a)||j(a,b)||g()}function g(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function j(a,b){var c=[];var d=!0;var e=!1;var f=undefined;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{!d&&h["return"]!=null&&h["return"]()}finally{if(e)throw f}}return c}function k(a){if(Array.isArray(a))return a}function l(a,b){if(a==null)return{};var c=m(a,b);var d,e;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(e=0;e<f.length;e++)d=f[e],!(b.indexOf(d)>=0)&&Object.prototype.propertyIsEnumerable.call(a,d)&&(c[d]=a[d])}return c}function m(a,b){if(a==null)return{};var c={};var d=Object.keys(a);var e,f;for(f=0;f<d.length;f++)e=d[f],!(b.indexOf(e)>=0)&&(c[e]=a[e]);return c}function n(a){return n=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function n(a){return typeof a}:function n(a){return a&&typeof Symbol==="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},n(a)}var o=require("hyperapp"),q=o.app,r=o.h;var e=function(a){return function(){var b=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var d=!!(arguments.length>1&&arguments[1]!==undefined)&&arguments[1];var e=function is(a){for(var b=arguments.length,c=Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===n(a)})};return!d&&(e(b,"string","number","function")||Array.isArray(b)?(d=b,b={}):e(b.View,"function")&&(d=b.View,b={})),r(a,b,d)}};var h=e("div");var s=e("button");var t=e("pre");var u=function Pre(a){var b=!!(arguments.length>1&&arguments[1]!==undefined)&&arguments[1];return function(c,d){return h({"class":"Pre ".concat(b||c.pre.theme)},[h({"class":"menu"},[!b&&s({onclick:d.pre.changeTheme},c.pre.theme==="dark"?"light":"dark"),s({onclick:function onclick(){return d.pre.clip(a)}},"copy")]),t(LIB.PRE.format(a))])}};u.View=function(){return u.apply(void 0,arguments)};var v=e("a");var a=e("text");var w=function Link(a,b){var c=a.to,d=l(a,["to"]);return function(a,f){var g=d.href,h=d.text,i=d.nofollow,j=d.noreferrer,k=d.onclick,m=l(d,["href","text","nofollow","noreferrer","onclick"]);return c=c||g||"",m.href=c,c&&c.startsWith("/")&&!c.startsWith("//")?m.onclick=function(a){k&&k({e:a,to:c}),f.go({e:a,to:c})}:(m.target="_blank",m.rel="noopener",i&&(m.rel+=" nofollow"),j&&(m.rel+=" noreferrer")),v(m,[h,b])}};var x=e("h1");var y=e("h2");var z=e("h3");var A=e("p");var p=e("img");var B=function Img(a){return function(){if(typeof a==="string"&&(a={src:a}),!!a.src)return!a.alt&&(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),p(a)}};var C=e("li");var D=e("ul");var E=function GitBadges(a){var b=a.project,c=b!==void 0&&b,d=a.branch,e=d===void 0?"master":d;var g=Object.entries({npm:function npm(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:c;return a&&{to:"https://www.npmjs.com/package/@".concat(a),src:"https://img.shields.io/npm/v/@".concat(a,".svg")}},travis:function travis(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:c;return a&&{to:"https://travis-ci.com/".concat(a),src:"https://travis-ci.com/".concat(a,".svg?branch=").concat(e)}},appveyor:function appveyor(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:c;return a&&{to:"https://ci.appveyor.com/project/".concat(a,"/branch/").concat(e),src:"https://img.shields.io/appveyor/ci/".concat(a,"/").concat(e,".svg")}},coveralls:function coveralls(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:c;return a&&{to:"https://coveralls.io/github/".concat(a),src:"https://coveralls.io/repos/github/".concat(a,"/badge.svg")}},greenkeeper:function greenkeeper(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:c;return a&&{to:"https://greenkeeper.io",src:"https://badges.greenkeeper.io/".concat(a,".svg")}},snyk:function snyk(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:c;return a&&{to:"https://snyk.io/test/github/".concat(a),src:"https://snyk.io/test/github/".concat(a,"/badge.svg")}}}).map(function(b){var c=f(b,2),d=c[0],e=c[1];return e(a[d])}).filter(function(b){return b.to&&b.src});return g.length?D({"class":"GitBadges"},g.map(function(a){var b=a.to,c=a.src;return C([w({to:b},B({src:c}))])})):void 0};var F={View:function View(){return G({"class":"main"},[h({"class":"wrapper"},["made with a few bits of ",w({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])])}};var G=e("footer");var H={View:function View(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"menu";return function(b){typeof a==="string"&&(a={name:a});var c=a,d=c.name,e=d===void 0?"menu":d,f=c["class"],g=f===void 0?"Menu":f,h=c.items,j=h===void 0?[]:h,k=c.collapse;var n=b.url,o=b[e],p=o===void 0?[]:o;if(j=j.length?j:p,!!j.length){b.hash&&(n+="#".concat(b.hash));var q=function Item(a){var b=a.text,c=a.items,d=c===void 0?[]:c,e=l(a,["text","items"]);if(e.to||b){var f={};e.to===n&&(f["class"]="active");var g;return d&&(n.startsWith(e.to)||!(k===void 0||k))&&(g=D(d.map(function(a){return q(a)}))),C(f,[e.to?w(e,b):J(e,b),g])}};return i({"class":g.includes("Menu")?g:"Menu ".concat(g)},D(j.map(function(a){return q(a)})))}}}};var I=e("i");var i=e("nav");var J=e("span");var K=e("header");var L=function PageHead(a){return(a.logo||a.menu||a.tagline)&&K({"class":"main"},[(a.logo||a.logotext)&&w({to:"/pre/","class":"logo-wrapper"},[a.logo&&B({"class":"logo",src:a.logo}),a.logotext&&J({"class":"logo-text"},a.logotext)]),H.View])};var M=e("object");var N={};(function(){var a="\nlet this long package float\ngoto private class if short\nwhile protected with debugger case\ncontinue volatile interface\n\ninstanceof super synchronized throw\nextends final export throws\ntry import double enum\n\nboolean abstract function\nimplements typeof transient break\ndefault do static void\n\nint new async native switch\nelse delete null public var\nawait byte finally catch\nin return for get const char\nmodule exports require\n".trim().split(/\b/g).map(function(a){return a.trim()});var c="\nArray Object String Number RegExp Null Symbol\nSet WeakSet Map WeakMap\nsetInterval setTimeout\nPromise\nJSON\nInt8Array Uint8Array Uint8ClampedArray\nInt16Array Uint16Array\nInt32Array Uint32Array\nFloat32Array Float64Array\n".trim().split(/\b/g).map(function(a){return a.trim()});var d=["true","false"];var e=function wrapWords(b){if(typeof b!=="string")return b;var e=b.split(/\b/);return b=e.map(function(b,f){if(b!==""){var g="";return b==="state"?g="state":b==="actions"?g="actions":e[f+1]&&e[f+1].includes(":")?g="colon":a.includes(b)?g="keyword":c.includes(b)?g="builtin":d.includes(b)?g="boolean":e[f-1]==="."?g="property":e[f+1]==="."&&(g="object"),g&&(b=J({"class":g},b)),b}}),b};var f=/([a-zA-Z0-9:+._-]+@[a-zA-Z0-9._-]+)/g;var g=function wrapEmails(a){return a.split(f).map(function(a){if(f.test(a)){var b=a.startsWith("mailto:")?a:"mailto:".concat(a);var c=a.replace("mailto:","");return w({"class":"email",to:b},c)}return e(a)})};var h=function wrapComments(a,b){return[l(a.substring(0,b)),l(a.substring(b))]};var i=function wrapLinks(a){return a.split(/(?= )/).map(function(a){return a.includes("://")?w({to:a},a):l(a)})};var j=function wrapUrls(a){return a.includes("://")&&!a.includes("@")?i(a):g(a)};var k=function wrapStrings(a){var c=a.replace(/"/g,"'");var d=c.split("'"),f=b(d),g=f[0],h=f[1],i=f.slice(2);var k=i;k.length===1?k=l(k[0]):k.length>1&&(k=l(k.join("'")));var m=[];return m=typeof h==="undefined"?e(a):[e(g),J({"class":"string"},["'",j(h),"'"]),k],m};var l=function wordsByLine(a){var b=a.indexOf("//");var c=a.trim();if(c.startsWith("//")){var d=a.search(/\S|$/);var e="";for(var f=0;f<d;f++)e+=" ";return!c.startsWith("// ")&&(a="".concat(e,"// ").concat(c.substr(2))),J({"class":"comment"},[e,"// ",l(c.substring(3))])}return b>-1&&a[b-1]!==":"?h(a,b):a.indexOf("://")>2?i(a):a.indexOf("@")&&a.includes(".")&&!a.trim().includes(" ")?g(a):k(a)};var m=function wrapLine(a){return code({"class":"line"},l(a))};N.PRE={keywords:a,builtins:c,format:function format(a){return a.trim().split("\n").map(m)},wordsByLine:l,wrapWords:e}})(),window.LIB=N;var O={"/pre/":function pre(){return h([x("@magic-modules/pre"),A(["this is the ",w({to:"https://github.com/magic-modules"},"@magic-modules")," Pre component. It provides syntax highlighting for javascript"]),E({project:"magic-modules/pre",appveyor:"jaeh/pre"}),y({id:"installation"},"installation:"),A(["installation is done using npm. "," for now, all magic modules are living on github and not on npm."]),A("note the missing @ before magic-modules."),A("this is how we install npm modules from github."),u("npm install magic-modules/pre"),y({id:"require"},"require:"),A("first add the component to the assets"),u("\n// assets/index.js\nmodule.exports = {\n  //...other exports\n  Pre: require('@magic-modules/pre'),\n}"),y({id:"usage"},"usage:"),A("in a page/component, just pass some string that looks like js"),u("module.exports = {\n  View: () => Pre('const js = true'),\n}"),A("renders"),u("const js = true"),y({id:"themes"},"colors"),A("Pre supports two color themes"),z({id:"themes-fixed"},"fixed color:"),A("you can give a fixed color to a Pre by passing a second argument with the color."),A("as you can see below, this also removes the theme choose buttons"),z({id:"themes-dark"},"dark"),u("Pre('content', 'dark')","dark"),z({id:"themes-light"},"light"),u("Pre('content', 'light')","light"),y({id:"syntax"},"syntax"),z({id:"syntax-comments"},"comments"),A(["Pre can handle single line comments starting with: //.","Multiline comments are on the todo list."]),u("const v = \"t\" // single line comment"),z({id:"syntax-urls"},"urls"),A(["Pre can handle urls even though they look like comments."," Those urls will even turn into Link elements."," Urls are identified by containing the three characters ://"]),u("https://jaeh.at"),A("Pre even handles links in comments and strings"),u("before comment // comment http://link.in.comment"),z({id:"syntax-emails"},"emails"),A(["Pre finds emails in your text."," emails can either start with mailto: or must include at least one @ and at least one .","yes, strictly speaking, name@host is a valid email, but how often have you seen that?"]),A(["if you actually do need support for name@local, please file an issue."]),A("both examples render the same"),u("Pre('mail@jaeh.at')"),u("Pre('mailto:test.mail@jaeh.at')"),u("Link({ to: 'mailto:mail@jaeh.at' }, 'mail@jaeh.at')"),A("result"),u("mail@jaeh.at"),A("link and comment"),u("\nconst v = \"t\" // comment https://jaeh.at\n// and in a comment starting the line https://wizardsatwork.at"),y({id:"source"},"source"),A(["the source for this page is in the ",w({to:"https://github.com/magic-modules/pre/tree/master/example"},"example directory")," and gets built and published to github using ",w({to:"https://github.com/magic/core"},"@magic/core")])])},"/404/":function _(){return h("404 - not found")}};var P={"url":"/pre/","root":"/pre/",logo:"/pre/img/logo.png","logotext":"pre","menu":[{to:"/pre/#installation","text":"installation"},{to:"/pre/#require","text":"require"},{to:"/pre/#usage","text":"usage"},{to:"/pre/#themes","text":"colors","items":[{to:"/pre/#themes-fixed","text":"fixed color"},{to:"/pre/#themes-dark","text":"dark"},{to:"/pre/#themes-light","text":"light"}]},{to:"/pre/#syntax","text":"syntax","items":[{to:"/pre/#syntax-comments","text":"comments"},{to:"/pre/#syntax-urls","text":"urls"}]},{to:"/pre/#source","text":"source"}],"pre":{"theme":"light"}};P.url=window.location.pathname,P.root="/pre/";var Q={"pre":{"changeTheme":function changeTheme(){return function(a){return{theme:a.theme==="dark"?"light":"dark"}}},"clip":function clip(a){if(typeof document!=="undefined"&&typeof document.execCommand==="function"){var b=document.createElement("textarea");b.id="copy",b.innerHTML=a,document.body.appendChild(b);var c=document.getElementById("copy");c.select(),document.execCommand("copy"),document.body.removeChild(c)}}},"go":function go(a){return function(b){if(typeof window==="undefined"||!window.history)return!0;var c=a.to;var d=a.e?a.e:a;d.preventDefault();var e=b.url;var g=e.split("#"),h=f(g,2),i=h[0],j=h[1],k=j===void 0?"":j;if(c){e=c.replace(window.location.origin,"");var l=e.split("#"),m=f(l,2),n=m[0],o=m[1],p=o===void 0?"":o;i=n,k=p;var q=b.hash?"#".concat(b.hash):"";var r=b.url+q;e!==r&&(window.history&&window.history.pushState({uri:i},"",e),!k&&window.scrollTo(0,0))}else i=d.state?d.state.uri:"/";return k&&window.location&&(window.location.hash=k),{url:i,hash:k,prev:b.url}}}};var R=function view(a,b){var c=O[a.url]?a.url:"/404/";var d=O[c];if(a.pages){var e=a.pages[c];for(var f in e)a[f]=e[f]}if(b.pages){var g=b.pages[c];for(var i in g)b[i]=g[i]}return h({"class":"wrapper",oncreate:function oncreate(){typeof window!=="undefined"&&b.go&&window.addEventListener("popstate",b.go)}},[L,d?h({"class":"page"},d(a,b)):h({"class":"page"},"404 - not found"),F.View])};var S=document;var d=S.getElementById("magic");!d&&(d=S.createElement("div"),d.id="magic",S.body.appendChild(d)),q(P,Q,R,d);
},{"hyperapp":2}],2:[function(require,module,exports){
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.hyperapp={})}(this,function(e){"use strict";e.h=function(e,n){for(var t=[],r=[],o=arguments.length;2<o--;)t.push(arguments[o]);for(;t.length;){var l=t.pop();if(l&&l.pop)for(o=l.length;o--;)t.push(l[o]);else null!=l&&!0!==l&&!1!==l&&r.push(l)}return"function"==typeof e?e(n||{},r):{nodeName:e,attributes:n||{},children:r,key:n&&n.key}},e.app=function(e,n,t,r){var o,l=[].map,u=r&&r.children[0]||null,i=u&&function n(e){return{nodeName:e.nodeName.toLowerCase(),attributes:{},children:l.call(e.childNodes,function(e){return 3===e.nodeType?e.nodeValue:n(e)})}}(u),f=[],m=!0,a=v(e),c=function e(r,o,l){for(var n in l)"function"==typeof l[n]?function(e,t){l[e]=function(e){var n=t(e);return"function"==typeof n&&(n=n(h(r,a),l)),n&&n!==(o=h(r,a))&&!n.then&&d(a=p(r,v(o,n),a)),n}}(n,l[n]):e(r.concat(n),o[n]=v(o[n]),l[n]=v(l[n]));return l}([],a,v(n));return d(),c;function g(e){return"function"==typeof e?g(e(a,c)):null!=e?e:""}function s(){o=!o;var e=g(t);for(r&&!o&&(u=function e(n,t,r,o,l){if(o===r);else if(null==r||r.nodeName!==o.nodeName){var u=k(o,l);n.insertBefore(u,t),null!=r&&T(n,t,r),t=u}else if(null==r.nodeName)t.nodeValue=o;else{x(t,r.attributes,o.attributes,l=l||"svg"===o.nodeName);for(var i={},f={},a=[],c=r.children,s=o.children,d=0;d<c.length;d++){a[d]=t.childNodes[d];var v=N(c[d]);null!=v&&(i[v]=[a[d],c[d]])}for(var d=0,p=0;p<s.length;){var v=N(c[d]),h=N(s[p]=g(s[p]));if(f[v])d++;else if(null==h||h!==N(c[d+1]))if(null==h||m)null==v&&(e(t,a[d],c[d],s[p],l),p++),d++;else{var y=i[h]||[];v===h?(e(t,y[0],y[1],s[p],l),d++):y[0]?e(t,t.insertBefore(y[0],a[d]),y[1],s[p],l):e(t,a[d],null,s[p],l),f[h]=s[p],p++}else null==v&&T(t,a[d],c[d]),d++}for(;d<c.length;)null==N(c[d])&&T(t,a[d],c[d]),d++;for(var d in i)f[d]||T(t,i[d][0],i[d][1])}return t}(r,u,i,i=e)),m=!1;f.length;)f.pop()()}function d(){o||(o=!0,setTimeout(s))}function v(e,n){var t={};for(var r in e)t[r]=e[r];for(var r in n)t[r]=n[r];return t}function p(e,n,t){var r={};return e.length?(r[e[0]]=1<e.length?p(e.slice(1),n,t[e[0]]):n,v(t,r)):n}function h(e,n){for(var t=0;t<e.length;)n=n[e[t++]];return n}function N(e){return e?e.key:null}function y(e){return e.currentTarget.events[e.type](e)}function b(e,n,t,r,o){if("key"===n);else if("style"===n)if("string"==typeof t)e.style.cssText=t;else for(var l in"string"==typeof r&&(r=e.style.cssText=""),v(r,t)){var u=null==t||null==t[l]?"":t[l];"-"===l[0]?e.style.setProperty(l,u):e.style[l]=u}else"o"===n[0]&&"n"===n[1]?(n=n.slice(2),e.events?r||(r=e.events[n]):e.events={},(e.events[n]=t)?r||e.addEventListener(n,y):e.removeEventListener(n,y)):n in e&&"list"!==n&&"type"!==n&&"draggable"!==n&&"spellcheck"!==n&&"translate"!==n&&!o?e[n]=null==t?"":t:null!=t&&!1!==t&&e.setAttribute(n,t),null!=t&&!1!==t||e.removeAttribute(n)}function k(e,n){var t="string"==typeof e||"number"==typeof e?document.createTextNode(e):(n=n||"svg"===e.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",e.nodeName):document.createElement(e.nodeName),r=e.attributes;if(r){r.oncreate&&f.push(function(){r.oncreate(t)});for(var o=0;o<e.children.length;o++)t.appendChild(k(e.children[o]=g(e.children[o]),n));for(var l in r)b(t,l,r[l],null,n)}return t}function x(e,n,t,r){for(var o in v(n,t))t[o]!==("value"===o||"checked"===o?e[o]:n[o])&&b(e,o,t[o],n[o],r);var l=m?t.oncreate:t.onupdate;l&&f.push(function(){l(e,n)})}function T(e,n,t){function r(){e.removeChild(function e(n,t){var r=t.attributes;if(r){for(var o=0;o<t.children.length;o++)e(n.childNodes[o],t.children[o]);r.ondestroy&&r.ondestroy(n)}return n}(n,t))}var o=t.attributes&&t.attributes.onremove;o?o(n,r):r()}}});

},{}]},{},[1]);
