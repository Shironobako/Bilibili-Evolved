!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["feeds/unfold"]=t():e["feeds/unfold"]=t()}(self,(function(){return function(){"use strict";var e,t,n={799:function(e){e.exports=coreApis.componentApis.feeds.api}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var c=o[e]={exports:{}};return n[e](c,c.exports,r),c.exports}t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var c=Object.create(null);r.r(c);var i={};e=e||[null,t({}),t([]),t(t)];for(var f=2&o&&n;"object"==typeof f&&!~e.indexOf(f);f=t(f))Object.getOwnPropertyNames(f).forEach((function(e){i[e]=function(){return n[e]}}));return i.default=function(){return n},r.d(c,i),c},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var c={};return function(){r.d(c,{component:function(){return n}});var e=coreApis.spinQuery,t=coreApis.utils.urls;const n={name:"unfoldFeeds",displayName:"动态反折叠",tags:[componentsTags.feeds],description:{"zh-CN":"\n自动展开被折叠的动态.\n\n动态被折叠可能是因为:\n- 短时间内大量更新作品\n- 多人转发同一个作品\n- 被审核折叠\n"},urlInclude:t.feedsUrlsWithoutDetail,entry:async()=>{const{forEachFeedsCard:t}=await Promise.resolve().then(r.t.bind(r,799,23));t({added:async t=>{const n=await(0,e.select)((()=>dq(t.element,".fold-hoverable, .bili-dyn-item-fold")));null==n||n.click()}})},commitHash:"3869a146c41e96d518645564b38ac3adf08a02cc",coreVersion:"2.5.1"}}(),c=c.component}()}));