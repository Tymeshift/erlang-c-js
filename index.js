!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).ErlangC={})}(this,function(e){"use strict";function f(e){if(e<0)throw new Error("n cannot be negative");var t=2;if(void 0!==r[e])return r[e];for(var n=r[t-1];t<=e;t++)r[t]=n=n.times(t.toString());return n}var u=require("decimal.js"),r=[new u("1"),new u("1")];f(100);function a(e,t,n){return e*(t/n)}function c(e,t){return new u(e).toPower(t)}function d(e,t,n,r){return e.dividedBy(t).times(r/(r-n))}function v(e,t){for(var n=new u(0),r=0;r<t;r++){var i=f(r),o=new u(e).toPower(r);n=n.plus(o.dividedBy(i))}return n}function l(e,t){return e.dividedBy(t.plus(e))}function s(e,t,n,r){var i=d(e,t,n,r),o=v(n,r);return l(i,o)}function g(e,t,n,r,i){return 1-e.times(Math.exp(r/i*-(n-t)))}function p(e,t,n,r){var i=f(t),o=c(e,t),u=s(o,i,e,t);return g(u,e,t,n,r)}function w(e,t,n){for(var r=e/t;n<r;)r=e/(t+=1);return t}e.checkMaxOccupancy=w,e.getAN=c,e.getErlangC=s,e.getFactorial=f,e.getFullServiceLevel=p,e.getIntensity=a,e.getNumberOfAgents=function(e,t,n,r,i,o,u){for(var f=a(e,n,t),c=Math.floor(f)+1;p(f,c,i,n)<r;)c+=1;return 0<o&&(c=w(f,c,o)),c=Math.ceil(c/(1-u))},e.getPW=l,e.getServiceLevel=g,e.getX=d,e.getY=v,Object.defineProperty(e,"__esModule",{value:!0})});