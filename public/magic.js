function b(a){return f(a)||e(a)||c()}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function e(a){if(Symbol.iterator in Object(a)||Object.prototype.toString.call(a)==="[object Arguments]")return Array.from(a)}function f(a){if(Array.isArray(a))return a}function g(a){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){g=function(a){return typeof a}}else{g=function(a){return a&&typeof Symbol==="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a}}return g(a)}function j(a,b){var c=[];var d=[];var e=arguments.length;while(e-->2){c.push(arguments[e])}while(c.length){var f=c.pop();if(f&&f.pop){for(e=f.length;e--;){c.push(f[e])}}else if(f!=null&&f!==true&&f!==false){d.push(f)}}return typeof a==="function"?a(b||{},d):{nodeName:a,attributes:b||{},children:d,key:b&&b.key}}function h(a,b,c,d){var v=[].map;var w=d&&d.children[0]||null;var x=w&&e(w);var y=[];var z;var A=true;var B=j(a);var C=m([],B,j(b));h();return C;function e(a){return{nodeName:a.nodeName.toLowerCase(),attributes:{},children:v.call(a.childNodes,function(a){return a.nodeType===3?a.nodeValue:e(a)})}}function f(a){return typeof a==="function"?f(a(B,C)):a!=null?a:""}function g(){z=!z;var a=f(c);if(d&&!z){w=u(d,w,x,x=a)}A=false;while(y.length){y.pop()()}}function h(){if(!z){z=true;setTimeout(g)}}function j(a,b){var c={};for(var d in a){c[d]=a[d]}for(var d in b){c[d]=b[d]}return c}function k(a,b,c){var d={};if(a.length){d[a[0]]=a.length>1?k(a.slice(1),b,c[a[0]]):b;return j(c,d)}return b}function l(a,b){var c=0;while(c<a.length){b=b[a[c++]]}return b}function m(a,b,c){for(var d in c){typeof c[d]==="function"?function(d,e){c[d]=function(d){var f=e(d);if(typeof f==="function"){f=f(l(a,B),c)}if(f&&f!==(b=l(a,B))&&!f.then){h(B=k(a,j(b,f),B))}return f}}(d,c[d]):m(a.concat(d),b[d]=j(b[d]),c[d]=j(c[d]))}return c}function n(a){return a?a.key:null}function o(a){return a.currentTarget.events[a.type](a)}function p(a,b,c,d,e){if(b==="key"){}else if(b==="style"){if(typeof c==="string"){a.style.cssText=c}else{if(typeof d==="string")d=a.style.cssText="";for(var f in j(d,c)){var g=c==null||c[f]==null?"":c[f];if(f[0]==="-"){a.style.setProperty(f,g)}else{a.style[f]=g}}}}else{if(b[0]==="o"&&b[1]==="n"){b=b.slice(2);if(a.events){if(!d)d=a.events[b]}else{a.events={}}a.events[b]=c;if(c){if(!d){a.addEventListener(b,o)}}else{a.removeEventListener(b,o)}}else if(b in a&&b!=="list"&&b!=="type"&&b!=="draggable"&&b!=="spellcheck"&&b!=="translate"&&!e){a[b]=c==null?"":c}else if(c!=null&&c!==false){a.setAttribute(b,c)}if(c==null||c===false){a.removeAttribute(b)}}}function q(a,b){var c=typeof a==="string"||typeof a==="number"?document.createTextNode(a):(b=b||a.nodeName==="svg")?document.createElementNS("http://www.w3.org/2000/svg",a.nodeName):document.createElement(a.nodeName);var d=a.attributes;if(d){if(d.oncreate){y.push(function(){d.oncreate(c)})}for(var e=0;e<a.children.length;e++){c.appendChild(q(a.children[e]=f(a.children[e]),b))}for(var g in d){p(c,g,d[g],null,b)}}return c}function r(a,b,c,d){for(var e in j(b,c)){if(c[e]!==(e==="value"||e==="checked"?a[e]:b[e])){p(a,e,c[e],b[e],d)}}var f=A?c.oncreate:c.onupdate;if(f){y.push(function(){f(a,b)})}}function s(a,b){var c=b.attributes;if(c){for(var d=0;d<b.children.length;d++){s(a.childNodes[d],b.children[d])}if(c.ondestroy){c.ondestroy(a)}}return a}function t(a,b,c){function d(){a.removeChild(s(b,c))}var e=c.attributes&&c.attributes.onremove;if(e){e(b,d)}else{d()}}function u(a,b,c,d,e){if(d===c){}else if(c==null||c.nodeName!==d.nodeName){var g=q(d,e);a.insertBefore(g,b);if(c!=null){t(a,b,c)}b=g}else if(c.nodeName==null){b.nodeValue=d}else{r(b,c.attributes,d.attributes,e=e||d.nodeName==="svg");var h={};var j={};var l=[];var m=c.children;var o=d.children;for(var p=0;p<m.length;p++){l[p]=b.childNodes[p];var s=n(m[p]);if(s!=null){h[s]=[l[p],m[p]]}}var p=0;var v=0;while(v<o.length){var s=n(m[p]);var w=n(o[v]=f(o[v]));if(j[s]){p++;continue}if(w!=null&&w===n(m[p+1])){if(s==null){t(b,l[p],m[p])}p++;continue}if(w==null||A){if(s==null){u(b,l[p],m[p],o[v],e);v++}p++}else{var x=h[w]||[];if(s===w){u(b,x[0],x[1],o[v],e);p++}else if(x[0]){u(b,b.insertBefore(x[0],l[p]),x[1],o[v],e)}else{u(b,l[p],null,o[v],e)}j[w]=o[v];v++}}while(p<m.length){if(n(m[p])==null){t(b,l[p],m[p])}p++}for(var p in h){if(!j[p]){t(b,h[p][0],h[p][1])}}}return b}}var k=function(b){return function(){var d=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var f=function(b){for(var a=arguments.length,c=new Array(a>1?a-1:0),d=1;d<a;d++){c[d-1]=arguments[d]}return c.some(function(a){return a===g(b)})};if(!e){if(f(d,"string","number")||Array.isArray(d)||f(d,"function")){e=d;d={}}else if(f(d.View,"function")){e=d.View;d={}}}return j(b,d,e)}};var l=k("div");var m=k("button");var n=k("code");var o=k("i");var i=k("pre");var q=k("span");var r=k("a");var a=function(a,b){var c=a.to,d=a.href,e=a.text,f=a.nofollow,g=a.noreferrer;return function(a,h){var i={href:c||d||""};if(c&&c.startsWith("/")&&!c.startsWith("//")){i.onclick=h.go}else{i.rel="noopener";if(f){i.rel+=" nofollow"}if(g){i.rel+=" noreferrer"}i.target="_blank"}return r(i,e||b)}};var s=k("h1");var t=k("h2");var u=k("h3");var v=k("p");var p={View:function(a){var c=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;return function(d,e){var g="dark";if(!c){if(d.pre.theme==="dark"){g="light"}}return i({class:"Pre ".concat(c||d.pre.theme)},[l({class:"menu"},[!c&&m({onclick:function(){return e.pre.changeTheme(g)}},g),m({onclick:function(){return e.pre.clip(a)}},"copy")]),function(a){var f=function(a){if(typeof a!=="string"){return a}var b=a.split(/\b/);a=b.map(function(a,f){if(a===""){return}var g="";if(a==="state"){g="state"}else if(a==="actions"){g="actions"}else if(b[f+1]&&b[f+1].includes(":")){g="colon"}else if(k(a)){g="html"}else if("\nlet this long package float\ngoto private class if short\nwhile protected with debugger case\ncontinue volatile interface\n\ninstanceof super synchronized throw\nextends final export throws\ntry import double enum\n\nboolean abstract function\nimplements typeof transient break\nvoid static default do\n\nboolean abstract implements\ntypeof function do break\nvoid static default transient\n\nint new async native switch\nelse delete null public var\nawait byte finally catch\nin return for get const char\nmodule exports require\n".includes(a)){g="keyword"}else if("\nArray Object String Number RegExp Null Symbol\nSet WeakSet Map WeakMap\nsetInterval setTimeout\nPromise\nJSON\nInt8Array Uint8Array Uint8ClampedArray\nInt16Array Uint16Array\nInt32Array Uint32Array\nFloat32Array Float64Array\n".includes(a)){g="builtin"}else if("true false".includes(a)){g="boolean"}else if(b[f-1]==="."){g="property"}else if(b[f+1]==="."){g="object"}if(g){a=q({class:g},a)}return a});return a};var i={canvas:1,video:1};var j=function(a){if(a.trim().startsWith("//")){return n({class:"line comment"},a)}var c=a.replace(/"/g,"'");var d=c.split("'"),e=b(d),g=e[0],h=e[1],i=e.slice(2);var k=i;if(k.length===1){k=j(k[0])}else if(k.length>1){k=j(k.join("'"))}var l=[];if(typeof h!=="undefined"){l=[f(g),q({class:"string"},"'".concat(h,"'")),k]}else{l=f(a)}return l};var k=function(a){if(i.hasOwnProperty(a)){return true}else{try{var c=typeof global!=="undefined"?Object.keys(h.dependencies).includes(a):document.createElement(a).toString()==="[object HTMLDivElement]";if(c){i[a]=true;return true}}catch(a){}}};a=a.replace(/^\n|\n$/g,"");var l=a.split("\n").map(function(a){return n({class:"line"},j(a))});return l}(a)])}}};var w={View:function(b){var c=b.name,d=c===void 0?"menu":c,e=b.between,f=e===void 0?false:e,g=b.pre,h=g===void 0?false:g,i=b.post,j=i===void 0?false:i;return function(b,c){if(!b[d]||!b[d].length){return}if(typeof window!=="undefined"){window.addEventListener("popstate",c.go)}return y({class:"Menu"},[z(b[d].map(function(c,e){var g={};var i=c.to===b.url;var k=c.to!=="/pre/"&&b.url.startsWith(c.to);if(i||k){g.class="active"}else{g.class=null}return[h&&x(h),x(g,a(c)),f&&e<b[d].length-1?x(" - "):"",j&&x(j)]}))])}}};var x=k("li");var y=k("nav");var z=k("ul");var A={View:function(){return B({class:"main"},[l({class:"wrapper"},["made with a few bits of ",a({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])])}};var B=k("footer");var C=k("header");var D=k("img");var E={"/pre/":function(){return l([s("@magic-modules/pre"),v(["this is the ",a({to:"https://github.com/magic-modules"},"@magic-modules")," Pre component"]),t("installation:"),v("installation is done using npm. for now, all magic modules are living on github and not on npm."),v("note the missing @ before magic-modules."),v("this is how we install npm modules from github."),p.View("\nnpm install magic-modules/pre\n"),t("require:"),v("first add the component to the assets"),p.View("\n// assets/index.js\nmodule.exports = {\n  //...other exports\n  Pre: require('@magic-modules/pre'),\n}"),t("usage:"),v("in a page/component, just pass some string that looks like js"),p.View("module.exports = {\n  View: () => Pre.View('const js = true'),\n}"),v("renders"),p.View("const js = true"),t("fixed color:"),v("you can give a fixed color to a Pre.View by passing a second argument with the color."),v("as you can see below, this also removes the theme choose buttons"),u("dark"),p.View("Pre.View('content', 'dark')","dark"),u("light"),p.View("Pre.View('content', 'light')","light"),t("source"),v(["the source for this page is in the ",a({to:"https://github.com/magic-modules/pre/tree/master/example"},"example directory")," and gets built and published to github using ",a({to:"https://github.com/magic/core"},"@magic/core")])])},"/pre/404/":function(){return l("404 - not found")}};var F={"app":{"title":"App Title","description":"App Description"},"url":"/pre/","pages":{},"pre":{"theme":"light"}};F.url=window.location.pathname;var G={"go":function b(a){return function(b){a.preventDefault();var c=b.url;if(a.target&&a.target.href){c=a.target.href.replace(window.location.origin,"");if(c!==b.url){window.history&&window.history.pushState({urlPath:c},"",c)}}else{if(a.state){c=a.state.urlPath}else{c="/pre/"}}return{url:c,prev:b.url}}},"pages":{},"pre":{"changeTheme":function b(a){return{theme:a}},"clip":function b(a){if(typeof document!=="undefined"&&typeof document.execCommand==="function"){var c=document.createElement("textarea");c.id="copy";c.innerHTML=a;document.body.appendChild(c);var d=document.getElementById("copy");d.select();document.execCommand("copy");document.body.removeChild(d)}}},"clip":undefined};function H(a,b){var c=E[a.url];var d=a.pages[a.url];for(var f in d){a[f]=d[f]}var e=b.pages[a.url];for(var g in e){b[g]=e[g]}return l({class:"wrapper"},[C({class:"main"},[a.logo&&D({class:"logo",src:a.logo,height:100,width:200,role:"presentation"}),a.menu&&w.View]),c?l({class:"page"},c(a,b)):l({class:"page"},"404 - not found"),A.View])}var I=document;var d=I.getElementById("magic");if(!d){d=I.createElement("div");d.id="magic";I.body.appendChild(d)}h(F,G,H,d);