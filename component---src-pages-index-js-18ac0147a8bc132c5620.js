(self.webpackChunkgdziemiliardy_co=self.webpackChunkgdziemiliardy_co||[]).push([[678],{993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,l,s,u;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(!o(e[l],i[l]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!o(l.value[1],i.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(e[l]!==i[l])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,s[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!e.$$typeof)&&!o(e[s[l]],i[s[l]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},839:function(e,t,n){"use strict";var r,a=n(294),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),p.canUseDOM?t(l):n&&(l=n(l))}var p=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(p,"canUseDOM",c),p}}},360:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ke}});var r,a,o,i,c=n(294),l=n(697),s=n.n(l),u=n(839),p=n.n(u),m=n(993),d=n.n(m),f=n(494),y=n.n(f),h="bodyAttributes",w="htmlAttributes",g="titleAttributes",E={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},z=(Object.keys(E).map((function(e){return E[e]})),"charset"),b="cssText",v="href",C="http-equiv",k="innerHTML",T="itemprop",j="name",S="property",A="rel",O="src",P="target",M={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",_="defer",N="encodeSpecialCharacters",x="onChangeClientState",H="titleTemplate",I=Object.keys(M).reduce((function(e,t){return e[M[t]]=t,e}),{}),R=[E.NOSCRIPT,E.SCRIPT,E.STYLE],V="data-react-helmet",F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},q=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Y=function(e){var t=Q(e,E.TITLE),n=Q(e,H);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,L);return t||r||void 0},Z=function(e){return Q(e,x)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[E.BASE]})).map((function(e){return e[E.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],l=c.toLowerCase();-1===t.indexOf(l)||n===A&&"canonical"===e[n].toLowerCase()||l===A&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==k&&c!==b&&c!==T||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],l=y()({},r[c],a[c]);r[c]=l}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,p=e.title,m=e.titleAttributes;le(E.BODY,r),le(E.HTML,a),ce(p,m);var d={baseTag:se(E.BASE,n),linkTags:se(E.LINK,o),metaTags:se(E.META,i),noscriptTags:se(E.NOSCRIPT,c),scriptTags:se(E.SCRIPT,s),styleTags:se(E.STYLE,u)},f={},y={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(f[e]=n),r.length&&(y[e]=d[e].oldTags)})),t&&t(),l(e,f,y)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(E.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(V),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===a.indexOf(l)&&a.push(l);var u=o.indexOf(l);-1!==u&&o.splice(u,1)}for(var p=o.length-1;p>=0;p--)n.removeAttribute(o[p]);a.length===o.length?n.removeAttribute(V):n.getAttribute(V)!==i.join(",")&&n.setAttribute(V,i.join(","))}},se=function(e,t){var n=document.head||document.querySelector(E.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===k)n.innerHTML=t.innerHTML;else if(r===b)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(V,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[M[n]||n]=e[n],t}),t)},me=function(e,t,n){switch(e){case E.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[V]=!0,a=pe(n,r),[c.createElement(E.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=ue(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+K(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case h:case w:return{toComponent:function(){return pe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[V]=!0,r);return Object.keys(t).forEach((function(e){var n=M[e]||e;if(n===k||n===b){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),c.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===k||e===b)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,p=void 0===u?"":u,m=e.titleAttributes;return{base:me(E.BASE,t,r),bodyAttributes:me(h,n,r),htmlAttributes:me(w,a,r),link:me(E.LINK,o,r),meta:me(E.META,i,r),noscript:me(E.NOSCRIPT,c,r),script:me(E.SCRIPT,l,r),style:me(E.STYLE,s,r),title:me(E.TITLE,{title:p,titleAttributes:m},r)}},fe=p()((function(e){return{baseTag:J([v,P],e),bodyAttributes:G(h,e),defer:Q(e,_),encode:Q(e,N),htmlAttributes:G(w,e),linkTags:$(E.LINK,[A,v],e),metaTags:$(E.META,[j,z,C,S,T],e),noscriptTags:$(E.NOSCRIPT,[k],e),onChangeClientState:Z(e),scriptTags:$(E.SCRIPT,[O,k],e),styleTags:$(E.STYLE,[b],e),title:Y(e),titleAttributes:G(g,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),de)((function(){return null})),ye=(a=fe,i=o=function(e){function t(){return D(this,t),q(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case E.SCRIPT:case E.NOSCRIPT:return{innerHTML:t};case E.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return U({},r,((t={})[n.type]=[].concat(r[n.type]||[],[U({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case E.TITLE:return U({},a,((t={})[r.type]=i,t.titleAttributes=U({},o),t));case E.BODY:return U({},a,{bodyAttributes:U({},o)});case E.HTML:return U({},a,{htmlAttributes:U({},o)})}return U({},a,((n={})[r.type]=U({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=U({},t);return Object.keys(e).forEach((function(t){var r;n=U({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[I[n]||n]=e[n],t}),t)}(W(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case E.LINK:case E.META:case E.NOSCRIPT:case E.SCRIPT:case E.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=W(e,["children"]),r=U({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(a,r)},B(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(c.Component),o.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);ye.renderStatic=ye.rewind;var he=function(e){var t=(0,c.useState)(!1),n=t[0],r=t[1];return c.createElement("section",{className:"concept"},c.createElement("div",{className:"concept__headline"},c.createElement("h1",null,e.headline)),c.createElement("div",{className:"concept__content"},c.createElement("div",{className:"concept__img-div"},e.img),c.createElement("div",{className:"concept__text-div"},e.children)),e.details&&c.createElement(c.Fragment,null,c.createElement("div",{className:"concept__more-div"},c.createElement("button",{onClick:function(e){return function(e){e.preventDefault(),r(!n)}(e)}},"Szczegóły...")),c.createElement("div",{className:n?"concept__details concept__details__show":"concept__details concept__details__hide"},e.details)))},we=c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512"},c.createElement("path",{fill:"#252525",d:"M592 384H576C576 437 533 480 480 480C426.1 480 384 437 384 384H256C256 437 213 480 160 480C106.1 480 64 437 64 384H48C21.49 384 0 362.5 0 336V104C0 64.24 32.24 32 72 32H465.1C483.1 32 501.9 40.34 514.1 54.78L624.1 186.5C634.7 197.1 640 212.6 640 227.7V336C640 362.5 618.5 384 592 384zM64 192H160V96H72C67.58 96 64 99.58 64 104V192zM545.1 192L465.1 96H384V192H545.1zM320 192V96H224V192H320zM480 336C453.5 336 432 357.5 432 384C432 410.5 453.5 432 480 432C506.5 432 528 410.5 528 384C528 357.5 506.5 336 480 336zM160 432C186.5 432 208 410.5 208 384C208 357.5 186.5 336 160 336C133.5 336 112 357.5 112 384C112 410.5 133.5 432 160 432z"})),ge=c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512"},c.createElement("path",{fill:"#252525",d:"M320 128C328.8 128 336 135.2 336 144V160H352C360.8 160 368 167.2 368 176C368 184.8 360.8 192 352 192H320C311.2 192 304 184.8 304 176V144C304 135.2 311.2 128 320 128zM476.8 98.06L602.4 125.1C624.4 130.9 640 150.3 640 172.8V464C640 490.5 618.5 512 592 512H48C21.49 512 0 490.5 0 464V172.8C0 150.3 15.63 130.9 37.59 125.1L163.2 98.06L302.2 5.374C312.1-1.791 327-1.791 337.8 5.374L476.8 98.06zM256 512H384V416C384 380.7 355.3 352 320 352C284.7 352 256 380.7 256 416V512zM96 192C87.16 192 80 199.2 80 208V272C80 280.8 87.16 288 96 288H128C136.8 288 144 280.8 144 272V208C144 199.2 136.8 192 128 192H96zM496 272C496 280.8 503.2 288 512 288H544C552.8 288 560 280.8 560 272V208C560 199.2 552.8 192 544 192H512C503.2 192 496 199.2 496 208V272zM96 320C87.16 320 80 327.2 80 336V400C80 408.8 87.16 416 96 416H128C136.8 416 144 408.8 144 400V336C144 327.2 136.8 320 128 320H96zM496 400C496 408.8 503.2 416 512 416H544C552.8 416 560 408.8 560 400V336C560 327.2 552.8 320 544 320H512C503.2 320 496 327.2 496 336V400zM320 88C271.4 88 232 127.4 232 176C232 224.6 271.4 264 320 264C368.6 264 408 224.6 408 176C408 127.4 368.6 88 320 88z"})),Ee=c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},c.createElement("path",{fill:"#252525",d:"M32 192h320c52.94 0 96-43.06 96-96s-43.06-96-96-96h-32c-17.69 0-32 14.31-32 32s14.31 32 32 32h32c17.66 0 32 14.34 32 32s-14.34 32-32 32H32C14.31 128 0 142.3 0 160S14.31 192 32 192zM160 320H32c-17.69 0-32 14.31-32 32s14.31 32 32 32h128c17.66 0 32 14.34 32 32s-14.34 32-32 32H128c-17.69 0-32 14.31-32 32s14.31 32 32 32h32c52.94 0 96-43.06 96-96S212.9 320 160 320zM416 224H32C14.31 224 0 238.3 0 256s14.31 32 32 32h384c17.66 0 32 14.34 32 32s-14.34 32-32 32h-32c-17.69 0-32 14.31-32 32s14.31 32 32 32h32c52.94 0 96-43.06 96-96S468.9 224 416 224z"})),ze=c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},c.createElement("path",{fill:"#252525",d:"M284.6 181.9c-10.28-8.344-25.41-6.875-33.75 3.406C242.4 195.6 243.9 210.7 254.2 219.1c11.31 9.25 17.81 22.69 17.81 36.87c0 14.19-6.5 27.62-17.81 36.87c-10.28 8.406-11.78 23.53-3.375 33.78c4.719 5.812 11.62 8.812 18.56 8.812c5.344 0 10.75-1.781 15.19-5.406c22.53-18.44 35.44-45.4 35.44-74.05S307.1 200.4 284.6 181.9zM345.1 107.1c-10.22-8.344-25.34-6.907-33.78 3.343c-8.406 10.25-6.906 25.37 3.344 33.78c33.88 27.78 53.31 68.18 53.31 110.9s-19.44 83.09-53.31 110.9c-10.25 8.406-11.75 23.53-3.344 33.78c4.75 5.781 11.62 8.781 18.56 8.781c5.375 0 10.75-1.781 15.22-5.438C390.2 367.1 416 313.1 416 255.1S390.2 144.9 345.1 107.1zM406.4 33.15c-10.22-8.344-25.34-6.875-33.78 3.344c-8.406 10.25-6.906 25.37 3.344 33.78C431.9 116.1 464 183.8 464 255.1s-32.09 139.9-88.06 185.7c-10.25 8.406-11.75 23.53-3.344 33.78c4.75 5.781 11.62 8.781 18.56 8.781c5.375 0 10.75-1.781 15.22-5.438C473.5 423.8 512 342.6 512 255.1S473.5 88.15 406.4 33.15zM151.3 174.6C161.1 175.6 172.1 169.5 176 159.6l33.75-84.38C214 64.35 209.1 51.1 200.2 45.86l-67.47-42.17C123.2-2.289 110.9-.8945 102.9 7.08C-34.32 144.3-34.31 367.7 102.9 504.9c7.982 7.984 20.22 9.379 29.75 3.402l67.48-42.19c9.775-6.104 13.9-18.47 9.598-29.3L176 352.5c-3.945-9.963-14.14-16.11-24.73-14.97l-53.24 5.314C78.89 286.7 78.89 225.4 98.06 169.3L151.3 174.6z"})),be=c.createElement("svg",{width:"50",className:"svg-arrow-down",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},c.createElement("path",{fill:"#25252580",d:"M169.4 278.6C175.6 284.9 183.8 288 192 288s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0L192 210.8L54.63 73.38c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L169.4 278.6zM329.4 265.4L192 402.8L54.63 265.4c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25l160 160C175.6 476.9 183.8 480 192 480s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25S341.9 252.9 329.4 265.4z"})),ve=function(e){return c.createElement("span",{className:"red"},e.children)},Ce=function(e){return c.createElement("span",{className:"green"},e.children)},ke=function(){return c.createElement("main",null,c.createElement(ye,null,c.createElement("meta",{name:"viewport",content:"height=device-height, initial-scale=1.0"}),c.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),c.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0}),c.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Spartan:wght@300..700&display=swap",rel:"stylesheet"}),c.createElement("link",{rel:"icon",type:"image/x-icon",href:"./favicon.ico"}),c.createElement("title",null,"gdziemiliardy.co")),c.createElement("section",{className:"start"},c.createElement("nav",null,c.createElement("h1",{className:"number-headline"},"25290000000")),c.createElement("p",null,c.createElement(ve,null,"25 miliardów "),"nie mieści się na ekranie."),c.createElement("p",null,"Właśnie tyle złotych zyskał polski budżet na handlu uprawnieniami do emisji CO2."),c.createElement("p",null,"Na co można by przeznaczyć tak astronomiczną kwotę?"),c.createElement("div",{className:"svg-arrow-down-container"},be)),c.createElement(he,{headline:c.createElement(c.Fragment,null,"na powiększenie o ",c.createElement(Ce,null,"połowę")," mocy turbin wiatrowych."),img:Ee,details:c.createElement(c.Fragment,null,c.createElement("p",null,"Koszt instalacji 1 MW mocy w Europie oszacowano na 1,515 mln USD (2020) - na podstawie danych raportu ",c.createElement("a",{href:"https://www.irena.org/-/media/Files/IRENA/Agency/Publication/2021/Jun/IRENA_Power_Generation_Costs_2020.pdf"},"International Renewable Energy Agency (str. 57)")),c.createElement("p",null,"Średni kurs dolara NBP w 2020 wynosił 3,8987 zł ",c.createElement("a",{href:"https://usd-pln.pl/2020/"},"Źródło")),c.createElement("p",null,"Po przeliczeniu otrzymano 5,91 mln zł / MW "),c.createElement("p",null,"Po podzieleniu wychodzi 4282 MW"),c.createElement("p",null,"Zainstalowana moc elektrowni wiatrowych wynosi 8 212 MW. ",c.createElement("a",{href:"https://www.pse.pl/dokumenty?safeargs=666f6c64657249643d3333393139#"},"(Stan na 01.01.2022)")))},c.createElement("h2",null,"Dałoby to Polakom czysty i tanszy prąd.")),c.createElement(he,{headline:c.createElement(c.Fragment,null,"na ",c.createElement(Ce,null,"5")," autobusów elektrycznych dla każdej gminy w Polsce."),img:we,details:c.createElement(c.Fragment,null,c.createElement("p",null,"Założono cenę autobusu 2 mln złotych na podstawie danych z ",c.createElement("a",{href:"https://wspolnota.org.pl/news/autobus-elektryczny-w-kazdej-gminie-pytania-i-odpowiedzi"},"wspolnota.org.pl")),c.createElement("p",null,"Za całą kwotę można kupić 12645 autobusów elektrycznych."),c.createElement("p",null,"W Polsce obecnie jest 2477 gmin. ",c.createElement("a",{href:"https://stat.gov.pl/statystyka-regionalna/jednostki-terytorialne/podzial-administracyjny-polski/"},"(Stan na 2022)")),c.createElement("p",null,"Po podzieleniu wychodzi nam 5,10 autobusa na gminę."))},c.createElement("h2",null,"Niskoemisyjny transport zbiorowy rozwiązuje szereg problemów."),c.createElement("h2",null,"Począwszy od emisji i spalin, poprzez wykluczenie komunikacyjne, aż po korki.")),c.createElement(he,{headline:c.createElement(c.Fragment,null,"na termomodernizację ",c.createElement(Ce,null,"każdej")," szkoły w Polsce."),img:ge,details:c.createElement(c.Fragment,null,c.createElement("p",null,"Według ",c.createElement("a",{href:"https://stat.gov.pl/obszary-tematyczne/edukacja/edukacja/oswiata-i-wychowanie-w-roku-szkolnym-20202021,1,16.html"},"raportu GUS")," z 2021 w Polsce znajduje się 14297 szkół podstawowych oraz 7577 szkół ponadpodstawowych"),c.createElement("p",null,"Przyjęliśmy uproszczenie, że każda szkoła podstawowa i ponadpodstawowa to odrębny budynek."),c.createElement("p",null,"Po podzieleniu 21874 przez kwotę otrzymaliśmy 1,16 mln zł na szkołę."),c.createElement("p",null,"Koszt termomodernizacji różni się zdecydowanie w zależności od placówki"))},c.createElement("h2",null,"Polskie budynki tracą bardzo dużo ciepła. Duży program modernizacji budynków publicznych zredukowałby straty energii.")),c.createElement(he,{headline:c.createElement(c.Fragment,null,"na ponad ",c.createElement(Ce,null,"2042 lata")," działania Telefonu Wsparcia dla Dzieci i Młodzieży"),img:ze,details:c.createElement(c.Fragment,null,c.createElement("p",null,"Według ",c.createElement("a",{href:"https://fdds.pl/_Resources/Persistent/2/2/c/a/22caba81951d8a92f096307f9e856493d113fb87/sprawozdanie02pl-3.pdf"},"sprawozdania finansowego")," Fundacji Dajemy Dzieciom Siłę jej koszty działalności statutowej w 2020 wyniosły 12 379 tys. zł."),c.createElement("p",null,"Dla uproszczenia założono stałość kosztów i pominięto zmianę wartości pieniądza w czasie."),c.createElement("p",null,"Kwotę uzyskaną z EU ETS podzielono przez roczny koszt - otrzymano 2042,98. Wartość zaokrąglono w dół do jedności."))},c.createElement("h2",null,"Według badań na tysiącach młodych osób ponad 3/4 z nich jest przerażonych przyszłością. Młodzież potrzebuje i będzie potrzebować wsparcia psychicznego.")),c.createElement("section",{className:"about-ets"},c.createElement("h1",null,"Skąd wzięły się te sumy?"),c.createElement("p",null,"Kwota ponad 25 miliardów złotych wynika Europejskiego Systemu Handlu Emisjami (EU ETS). "),c.createElement("p",null,"System ETS sprawia, że technologie szkodliwe dla klimatu stają się mniej opłacalne - za każdą tonę CO2 w objętym sektorze przewidziana jest opłata. "),c.createElement("p",null,"Jest to jedno z głównych narzędzi dzięki, któremu Unia Europejska ma ograniczyć swoje emisje o 55% do 2030 roku. "),c.createElement("p",null,"Pieniędzmi uzyskanymi ze sprzedaży uprawnień do emisji dysponują poszczególne państwa. Połowa środków powinna iść na cele środowiskowe.  "),c.createElement("p",null,"Za miliardy z handlu emisjami powinniśmy przejść na tańsze, niskoemisyjne źródła energii. "),c.createElement("p",null,"Według ",c.createElement("a",{href:"https://businessinsider.com.pl/gospodarka/sprzedaz-praw-do-co2-oto-gdzie-trafilo-25-mld-zl-i-ile-rozplynelo-sie-w-budzecie/859c3l0"},"Business Insider")," aż 96% kwoty rozpłynęło się w budżecie. ")),c.createElement("section",{className:"what-you-can"},c.createElement("h1",null,"A co ty możesz zrobić dla klimatu?"),c.createElement("p",null,"odezwać się do polityków"),c.createElement("p",null,"złościć się, płakać, śmiać się, panikować, mieć nadzieję, nie mieć nadziei - ",c.createElement("b",null,"czuć i współczuć")),c.createElement("p",null,"porozmawiać ze swoimi najbliższymi"),c.createElement("p",null,"dołączyć do proklimatycznych organizacji lub ruchów"),c.createElement("p",null,"dołączyć do koła naukowego (np. PUT:eco)"),c.createElement("p",null,"pogłębiać swoją wiedzę i się nią dzielić")),c.createElement("section",{className:"about"},c.createElement("h2",null,"Kampania stworzona przez koło naukowe PUT:eco"),c.createElement("div",{className:"about__socials"},c.createElement("p",null,"e-mail: ",c.createElement("a",{href:"mailto:kn.put.eco@gmail.com"},"kn.put.eco@gmail.com")),c.createElement("p",null,"Instagram: ",c.createElement("a",{href:"https://instagram.com/ecoputeco"},"@ecoputeco")),c.createElement("p",null,"Facebook: ",c.createElement("a",{href:"https://www.facebook.com/kn.put.eco"},"facebook.com/kn.put.eco")))),c.createElement("footer",null,c.createElement("p",null,"Kajetan Nowak, Michał Sikorski / PUT:eco"),c.createElement("p",null,"2022")))}}}]);
//# sourceMappingURL=component---src-pages-index-js-18ac0147a8bc132c5620.js.map