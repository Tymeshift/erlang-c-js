!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((n=n||self).ErlangC={})}(this,(function(n){"use strict";var e,i,r=9e15,t="0123456789abcdef",s="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",o="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",u={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-r,maxE:r,crypto:!1},c=!0,f="[DecimalError] Invalid argument: ",a=Math.floor,h=Math.pow,d=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,l=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,g=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,p=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,m=1e7,w=s.length-1,v=o.length-1,N={name:"[object Decimal]"};function b(n){var e,i,r,t=n.length-1,s="",o=n[0];if(t>0){for(s+=o,e=1;e<t;e++)(i=7-(r=n[e]+"").length)&&(s+=S(i)),s+=r;(i=7-(r=(o=n[e])+"").length)&&(s+=S(i))}else if(0===o)return"0";for(;o%10==0;)o/=10;return s+o}function E(n,e,i){if(n!==~~n||n<e||n>i)throw Error(f+n)}function x(n,e,i,r){var t,s,o,u;for(s=n[0];s>=10;s/=10)--e;return--e<0?(e+=7,t=0):(t=Math.ceil((e+1)/7),e%=7),s=h(10,7-e),u=n[t]%s|0,null==r?e<3?(0==e?u=u/100|0:1==e&&(u=u/10|0),o=i<4&&99999==u||i>3&&49999==u||5e4==u||0==u):o=(i<4&&u+1==s||i>3&&u+1==s/2)&&(n[t+1]/s/100|0)==h(10,e-2)-1||(u==s/2||0==u)&&0==(n[t+1]/s/100|0):e<4?(0==e?u=u/1e3|0:1==e?u=u/100|0:2==e&&(u=u/10|0),o=(r||i<4)&&9999==u||!r&&i>3&&4999==u):o=((r||i<4)&&u+1==s||!r&&i>3&&u+1==s/2)&&(n[t+1]/s/1e3|0)==h(10,e-3)-1,o}function y(n,e,i){for(var r,s,o=[0],u=0,c=n.length;u<c;){for(s=o.length;s--;)o[s]*=e;for(o[0]+=t.indexOf(n.charAt(u++)),r=0;r<o.length;r++)o[r]>i-1&&(void 0===o[r+1]&&(o[r+1]=0),o[r+1]+=o[r]/i|0,o[r]%=i)}return o.reverse()}N.absoluteValue=N.abs=function(){var n=new this.constructor(this);return n.s<0&&(n.s=1),O(n)},N.ceil=function(){return O(new this.constructor(this),this.e+1,2)},N.comparedTo=N.cmp=function(n){var e,i,r,t,s=this,o=s.d,u=(n=new s.constructor(n)).d,c=s.s,f=n.s;if(!o||!u)return c&&f?c!==f?c:o===u?0:!o^c<0?1:-1:NaN;if(!o[0]||!u[0])return o[0]?c:u[0]?-f:0;if(c!==f)return c;if(s.e!==n.e)return s.e>n.e^c<0?1:-1;for(e=0,i=(r=o.length)<(t=u.length)?r:t;e<i;++e)if(o[e]!==u[e])return o[e]>u[e]^c<0?1:-1;return r===t?0:r>t^c<0?1:-1},N.cosine=N.cos=function(){var n,e,r=this,t=r.constructor;return r.d?r.d[0]?(n=t.precision,e=t.rounding,t.precision=n+Math.max(r.e,r.sd())+7,t.rounding=1,r=function(n,e){var i,r,t=e.d.length;t<32?(i=Math.ceil(t/3),r=(1/B(4,i)).toString()):(i=16,r="2.3283064365386962890625e-10");n.precision+=i,e=I(n,1,e.times(r),new n(1));for(var s=i;s--;){var o=e.times(e);e=o.times(o).minus(o).times(8).plus(1)}return n.precision-=i,e}(t,H(t,r)),t.precision=n,t.rounding=e,O(2==i||3==i?r.neg():r,n,e,!0)):new t(1):new t(NaN)},N.cubeRoot=N.cbrt=function(){var n,e,i,r,t,s,o,u,f,d,l=this,g=l.constructor;if(!l.isFinite()||l.isZero())return new g(l);for(c=!1,(s=l.s*h(l.s*l,1/3))&&Math.abs(s)!=1/0?r=new g(s.toString()):(i=b(l.d),(s=((n=l.e)-i.length+1)%3)&&(i+=1==s||-2==s?"0":"00"),s=h(i,1/3),n=a((n+1)/3)-(n%3==(n<0?-1:2)),(r=new g(i=s==1/0?"5e"+n:(i=s.toExponential()).slice(0,i.indexOf("e")+1)+n)).s=l.s),o=(n=g.precision)+3;;)if(d=(f=(u=r).times(u).times(u)).plus(l),r=M(d.plus(l).times(u),d.plus(f),o+2,1),b(u.d).slice(0,o)===(i=b(r.d)).slice(0,o)){if("9999"!=(i=i.slice(o-3,o+1))&&(t||"4999"!=i)){+i&&(+i.slice(1)||"5"!=i.charAt(0))||(O(r,n+1,1),e=!r.times(r).times(r).eq(l));break}if(!t&&(O(u,n+1,0),u.times(u).times(u).eq(l))){r=u;break}o+=4,t=1}return c=!0,O(r,n,g.rounding,e)},N.decimalPlaces=N.dp=function(){var n,e=this.d,i=NaN;if(e){if(i=7*((n=e.length-1)-a(this.e/7)),n=e[n])for(;n%10==0;n/=10)i--;i<0&&(i=0)}return i},N.dividedBy=N.div=function(n){return M(this,new this.constructor(n))},N.dividedToIntegerBy=N.divToInt=function(n){var e=this.constructor;return O(M(this,new e(n),0,1,1),e.precision,e.rounding)},N.equals=N.eq=function(n){return 0===this.cmp(n)},N.floor=function(){return O(new this.constructor(this),this.e+1,3)},N.greaterThan=N.gt=function(n){return this.cmp(n)>0},N.greaterThanOrEqualTo=N.gte=function(n){var e=this.cmp(n);return 1==e||0===e},N.hyperbolicCosine=N.cosh=function(){var n,e,i,r,t,s=this,o=s.constructor,u=new o(1);if(!s.isFinite())return new o(s.s?1/0:NaN);if(s.isZero())return u;i=o.precision,r=o.rounding,o.precision=i+Math.max(s.e,s.sd())+4,o.rounding=1,(t=s.d.length)<32?e=(1/B(4,n=Math.ceil(t/3))).toString():(n=16,e="2.3283064365386962890625e-10"),s=I(o,1,s.times(e),new o(1),!0);for(var c,f=n,a=new o(8);f--;)c=s.times(s),s=u.minus(c.times(a.minus(c.times(a))));return O(s,o.precision=i,o.rounding=r,!0)},N.hyperbolicSine=N.sinh=function(){var n,e,i,r,t=this,s=t.constructor;if(!t.isFinite()||t.isZero())return new s(t);if(e=s.precision,i=s.rounding,s.precision=e+Math.max(t.e,t.sd())+4,s.rounding=1,(r=t.d.length)<3)t=I(s,2,t,t,!0);else{n=(n=1.4*Math.sqrt(r))>16?16:0|n,t=I(s,2,t=t.times(1/B(5,n)),t,!0);for(var o,u=new s(5),c=new s(16),f=new s(20);n--;)o=t.times(t),t=t.times(u.plus(o.times(c.times(o).plus(f))))}return s.precision=e,s.rounding=i,O(t,e,i,!0)},N.hyperbolicTangent=N.tanh=function(){var n,e,i=this,r=i.constructor;return i.isFinite()?i.isZero()?new r(i):(n=r.precision,e=r.rounding,r.precision=n+7,r.rounding=1,M(i.sinh(),i.cosh(),r.precision=n,r.rounding=e)):new r(i.s)},N.inverseCosine=N.acos=function(){var n,e=this,i=e.constructor,r=e.abs().cmp(1),t=i.precision,s=i.rounding;return-1!==r?0===r?e.isNeg()?A(i,t,s):new i(0):new i(NaN):e.isZero()?A(i,t+4,s).times(.5):(i.precision=t+6,i.rounding=1,e=e.asin(),n=A(i,t+4,s).times(.5),i.precision=t,i.rounding=s,n.minus(e))},N.inverseHyperbolicCosine=N.acosh=function(){var n,e,i=this,r=i.constructor;return i.lte(1)?new r(i.eq(1)?0:NaN):i.isFinite()?(n=r.precision,e=r.rounding,r.precision=n+Math.max(Math.abs(i.e),i.sd())+4,r.rounding=1,c=!1,i=i.times(i).minus(1).sqrt().plus(i),c=!0,r.precision=n,r.rounding=e,i.ln()):new r(i)},N.inverseHyperbolicSine=N.asinh=function(){var n,e,i=this,r=i.constructor;return!i.isFinite()||i.isZero()?new r(i):(n=r.precision,e=r.rounding,r.precision=n+2*Math.max(Math.abs(i.e),i.sd())+6,r.rounding=1,c=!1,i=i.times(i).plus(1).sqrt().plus(i),c=!0,r.precision=n,r.rounding=e,i.ln())},N.inverseHyperbolicTangent=N.atanh=function(){var n,e,i,r,t=this,s=t.constructor;return t.isFinite()?t.e>=0?new s(t.abs().eq(1)?t.s/0:t.isZero()?t:NaN):(n=s.precision,e=s.rounding,r=t.sd(),Math.max(r,n)<2*-t.e-1?O(new s(t),n,e,!0):(s.precision=i=r-t.e,t=M(t.plus(1),new s(1).minus(t),i+n,1),s.precision=n+4,s.rounding=1,t=t.ln(),s.precision=n,s.rounding=e,t.times(.5))):new s(NaN)},N.inverseSine=N.asin=function(){var n,e,i,r,t=this,s=t.constructor;return t.isZero()?new s(t):(e=t.abs().cmp(1),i=s.precision,r=s.rounding,-1!==e?0===e?((n=A(s,i+4,r).times(.5)).s=t.s,n):new s(NaN):(s.precision=i+6,s.rounding=1,t=t.div(new s(1).minus(t.times(t)).sqrt().plus(1)).atan(),s.precision=i,s.rounding=r,t.times(2)))},N.inverseTangent=N.atan=function(){var n,e,i,r,t,s,o,u,f,a=this,h=a.constructor,d=h.precision,l=h.rounding;if(a.isFinite()){if(a.isZero())return new h(a);if(a.abs().eq(1)&&d+4<=v)return(o=A(h,d+4,l).times(.25)).s=a.s,o}else{if(!a.s)return new h(NaN);if(d+4<=v)return(o=A(h,d+4,l).times(.5)).s=a.s,o}for(h.precision=u=d+10,h.rounding=1,n=i=Math.min(28,u/7+2|0);n;--n)a=a.div(a.times(a).plus(1).sqrt().plus(1));for(c=!1,e=Math.ceil(u/7),r=1,f=a.times(a),o=new h(a),t=a;-1!==n;)if(t=t.times(f),s=o.minus(t.div(r+=2)),t=t.times(f),void 0!==(o=s.plus(t.div(r+=2))).d[e])for(n=e;o.d[n]===s.d[n]&&n--;);return i&&(o=o.times(2<<i-1)),c=!0,O(o,h.precision=d,h.rounding=l,!0)},N.isFinite=function(){return!!this.d},N.isInteger=N.isInt=function(){return!!this.d&&a(this.e/7)>this.d.length-2},N.isNaN=function(){return!this.s},N.isNegative=N.isNeg=function(){return this.s<0},N.isPositive=N.isPos=function(){return this.s>0},N.isZero=function(){return!!this.d&&0===this.d[0]},N.lessThan=N.lt=function(n){return this.cmp(n)<0},N.lessThanOrEqualTo=N.lte=function(n){return this.cmp(n)<1},N.logarithm=N.log=function(n){var e,i,r,t,s,o,u,f,a=this.constructor,h=a.precision,d=a.rounding;if(null==n)n=new a(10),e=!0;else{if(i=(n=new a(n)).d,n.s<0||!i||!i[0]||n.eq(1))return new a(NaN);e=n.eq(10)}if(i=this.d,this.s<0||!i||!i[0]||this.eq(1))return new a(i&&!i[0]?-1/0:1!=this.s?NaN:i?0:1/0);if(e)if(i.length>1)s=!0;else{for(t=i[0];t%10==0;)t/=10;s=1!==t}if(c=!1,o=k(this,u=h+5),r=e?F(a,u+10):k(n,u),x((f=M(o,r,u,1)).d,t=h,d))do{if(o=k(this,u+=10),r=e?F(a,u+10):k(n,u),f=M(o,r,u,1),!s){+b(f.d).slice(t+1,t+15)+1==1e14&&(f=O(f,h+1,0));break}}while(x(f.d,t+=10,d));return c=!0,O(f,h,d)},N.minus=N.sub=function(n){var e,i,r,t,s,o,u,f,h,d,l,g,p=this,w=p.constructor;if(n=new w(n),!p.d||!n.d)return p.s&&n.s?p.d?n.s=-n.s:n=new w(n.d||p.s!==n.s?p:NaN):n=new w(NaN),n;if(p.s!=n.s)return n.s=-n.s,p.plus(n);if(h=p.d,g=n.d,u=w.precision,f=w.rounding,!h[0]||!g[0]){if(g[0])n.s=-n.s;else{if(!h[0])return new w(3===f?-0:0);n=new w(p)}return c?O(n,u,f):n}if(i=a(n.e/7),d=a(p.e/7),h=h.slice(),s=d-i){for((l=s<0)?(e=h,s=-s,o=g.length):(e=g,i=d,o=h.length),s>(r=Math.max(Math.ceil(u/7),o)+2)&&(s=r,e.length=1),e.reverse(),r=s;r--;)e.push(0);e.reverse()}else{for((l=(r=h.length)<(o=g.length))&&(o=r),r=0;r<o;r++)if(h[r]!=g[r]){l=h[r]<g[r];break}s=0}for(l&&(e=h,h=g,g=e,n.s=-n.s),o=h.length,r=g.length-o;r>0;--r)h[o++]=0;for(r=g.length;r>s;){if(h[--r]<g[r]){for(t=r;t&&0===h[--t];)h[t]=m-1;--h[t],h[r]+=m}h[r]-=g[r]}for(;0===h[--o];)h.pop();for(;0===h[0];h.shift())--i;return h[0]?(n.d=h,n.e=D(h,i),c?O(n,u,f):n):new w(3===f?-0:0)},N.modulo=N.mod=function(n){var e,i=this,r=i.constructor;return n=new r(n),!i.d||!n.s||n.d&&!n.d[0]?new r(NaN):!n.d||i.d&&!i.d[0]?O(new r(i),r.precision,r.rounding):(c=!1,9==r.modulo?(e=M(i,n.abs(),0,3,1)).s*=n.s:e=M(i,n,0,r.modulo,1),e=e.times(n),c=!0,i.minus(e))},N.naturalExponential=N.exp=function(){return _(this)},N.naturalLogarithm=N.ln=function(){return k(this)},N.negated=N.neg=function(){var n=new this.constructor(this);return n.s=-n.s,O(n)},N.plus=N.add=function(n){var e,i,r,t,s,o,u,f,h,d,l=this,g=l.constructor;if(n=new g(n),!l.d||!n.d)return l.s&&n.s?l.d||(n=new g(n.d||l.s===n.s?l:NaN)):n=new g(NaN),n;if(l.s!=n.s)return n.s=-n.s,l.minus(n);if(h=l.d,d=n.d,u=g.precision,f=g.rounding,!h[0]||!d[0])return d[0]||(n=new g(l)),c?O(n,u,f):n;if(s=a(l.e/7),r=a(n.e/7),h=h.slice(),t=s-r){for(t<0?(i=h,t=-t,o=d.length):(i=d,r=s,o=h.length),t>(o=(s=Math.ceil(u/7))>o?s+1:o+1)&&(t=o,i.length=1),i.reverse();t--;)i.push(0);i.reverse()}for((o=h.length)-(t=d.length)<0&&(t=o,i=d,d=h,h=i),e=0;t;)e=(h[--t]=h[t]+d[t]+e)/m|0,h[t]%=m;for(e&&(h.unshift(e),++r),o=h.length;0==h[--o];)h.pop();return n.d=h,n.e=D(h,r),c?O(n,u,f):n},N.precision=N.sd=function(n){var e,i=this;if(void 0!==n&&n!==!!n&&1!==n&&0!==n)throw Error(f+n);return i.d?(e=P(i.d),n&&i.e+1>e&&(e=i.e+1)):e=NaN,e},N.round=function(){var n=this,e=n.constructor;return O(new e(n),n.e+1,e.rounding)},N.sine=N.sin=function(){var n,e,r=this,t=r.constructor;return r.isFinite()?r.isZero()?new t(r):(n=t.precision,e=t.rounding,t.precision=n+Math.max(r.e,r.sd())+7,t.rounding=1,r=function(n,e){var i,r=e.d.length;if(r<3)return I(n,2,e,e);i=(i=1.4*Math.sqrt(r))>16?16:0|i,e=e.times(1/B(5,i)),e=I(n,2,e,e);for(var t,s=new n(5),o=new n(16),u=new n(20);i--;)t=e.times(e),e=e.times(s.plus(t.times(o.times(t).minus(u))));return e}(t,H(t,r)),t.precision=n,t.rounding=e,O(i>2?r.neg():r,n,e,!0)):new t(NaN)},N.squareRoot=N.sqrt=function(){var n,e,i,r,t,s,o=this,u=o.d,f=o.e,h=o.s,d=o.constructor;if(1!==h||!u||!u[0])return new d(!h||h<0&&(!u||u[0])?NaN:u?o:1/0);for(c=!1,0==(h=Math.sqrt(+o))||h==1/0?(((e=b(u)).length+f)%2==0&&(e+="0"),h=Math.sqrt(e),f=a((f+1)/2)-(f<0||f%2),r=new d(e=h==1/0?"1e"+f:(e=h.toExponential()).slice(0,e.indexOf("e")+1)+f)):r=new d(h.toString()),i=(f=d.precision)+3;;)if(r=(s=r).plus(M(o,s,i+2,1)).times(.5),b(s.d).slice(0,i)===(e=b(r.d)).slice(0,i)){if("9999"!=(e=e.slice(i-3,i+1))&&(t||"4999"!=e)){+e&&(+e.slice(1)||"5"!=e.charAt(0))||(O(r,f+1,1),n=!r.times(r).eq(o));break}if(!t&&(O(s,f+1,0),s.times(s).eq(o))){r=s;break}i+=4,t=1}return c=!0,O(r,f,d.rounding,n)},N.tangent=N.tan=function(){var n,e,r=this,t=r.constructor;return r.isFinite()?r.isZero()?new t(r):(n=t.precision,e=t.rounding,t.precision=n+10,t.rounding=1,(r=r.sin()).s=1,r=M(r,new t(1).minus(r.times(r)).sqrt(),n+10,0),t.precision=n,t.rounding=e,O(2==i||4==i?r.neg():r,n,e,!0)):new t(NaN)},N.times=N.mul=function(n){var e,i,r,t,s,o,u,f,h,d=this,l=d.constructor,g=d.d,p=(n=new l(n)).d;if(n.s*=d.s,!(g&&g[0]&&p&&p[0]))return new l(!n.s||g&&!g[0]&&!p||p&&!p[0]&&!g?NaN:g&&p?0*n.s:n.s/0);for(i=a(d.e/7)+a(n.e/7),(f=g.length)<(h=p.length)&&(s=g,g=p,p=s,o=f,f=h,h=o),s=[],r=o=f+h;r--;)s.push(0);for(r=h;--r>=0;){for(e=0,t=f+r;t>r;)u=s[t]+p[r]*g[t-r-1]+e,s[t--]=u%m|0,e=u/m|0;s[t]=(s[t]+e)%m|0}for(;!s[--o];)s.pop();return e?++i:s.shift(),n.d=s,n.e=D(s,i),c?O(n,l.precision,l.rounding):n},N.toBinary=function(n,e){return j(this,2,n,e)},N.toDecimalPlaces=N.toDP=function(n,e){var i=this,r=i.constructor;return i=new r(i),void 0===n?i:(E(n,0,1e9),void 0===e?e=r.rounding:E(e,0,8),O(i,n+i.e+1,e))},N.toExponential=function(n,e){var i,r=this,t=r.constructor;return void 0===n?i=q(r,!0):(E(n,0,1e9),void 0===e?e=t.rounding:E(e,0,8),i=q(r=O(new t(r),n+1,e),!0,n+1)),r.isNeg()&&!r.isZero()?"-"+i:i},N.toFixed=function(n,e){var i,r,t=this,s=t.constructor;return void 0===n?i=q(t):(E(n,0,1e9),void 0===e?e=s.rounding:E(e,0,8),i=q(r=O(new s(t),n+t.e+1,e),!1,n+r.e+1)),t.isNeg()&&!t.isZero()?"-"+i:i},N.toFraction=function(n){var e,i,r,t,s,o,u,a,d,l,g,p,m=this,w=m.d,v=m.constructor;if(!w)return new v(m);if(d=i=new v(1),r=a=new v(0),o=(s=(e=new v(r)).e=P(w)-m.e-1)%7,e.d[0]=h(10,o<0?7+o:o),null==n)n=s>0?e:d;else{if(!(u=new v(n)).isInt()||u.lt(d))throw Error(f+u);n=u.gt(e)?s>0?e:d:u}for(c=!1,u=new v(b(w)),l=v.precision,v.precision=s=7*w.length*2;g=M(u,e,0,1,1),1!=(t=i.plus(g.times(r))).cmp(n);)i=r,r=t,t=d,d=a.plus(g.times(t)),a=t,t=e,e=u.minus(g.times(t)),u=t;return t=M(n.minus(i),r,0,1,1),a=a.plus(t.times(d)),i=i.plus(t.times(r)),a.s=d.s=m.s,p=M(d,r,s,1).minus(m).abs().cmp(M(a,i,s,1).minus(m).abs())<1?[d,r]:[a,i],v.precision=l,c=!0,p},N.toHexadecimal=N.toHex=function(n,e){return j(this,16,n,e)},N.toNearest=function(n,e){var i=this,r=i.constructor;if(i=new r(i),null==n){if(!i.d)return i;n=new r(1),e=r.rounding}else{if(n=new r(n),void 0===e?e=r.rounding:E(e,0,8),!i.d)return n.s?i:n;if(!n.d)return n.s&&(n.s=i.s),n}return n.d[0]?(c=!1,i=M(i,n,0,e,1).times(n),c=!0,O(i)):(n.s=i.s,i=n),i},N.toNumber=function(){return+this},N.toOctal=function(n,e){return j(this,8,n,e)},N.toPower=N.pow=function(n){var e,i,r,t,s,o,u=this,f=u.constructor,d=+(n=new f(n));if(!(u.d&&n.d&&u.d[0]&&n.d[0]))return new f(h(+u,d));if((u=new f(u)).eq(1))return u;if(r=f.precision,s=f.rounding,n.eq(1))return O(u,r,s);if((e=a(n.e/7))>=n.d.length-1&&(i=d<0?-d:d)<=9007199254740991)return t=Z(f,u,i,r),n.s<0?new f(1).div(t):O(t,r,s);if((o=u.s)<0){if(e<n.d.length-1)return new f(NaN);if(0==(1&n.d[e])&&(o=1),0==u.e&&1==u.d[0]&&1==u.d.length)return u.s=o,u}return(e=0!=(i=h(+u,d))&&isFinite(i)?new f(i+"").e:a(d*(Math.log("0."+b(u.d))/Math.LN10+u.e+1)))>f.maxE+1||e<f.minE-1?new f(e>0?o/0:0):(c=!1,f.rounding=u.s=1,i=Math.min(12,(e+"").length),(t=_(n.times(k(u,r+i)),r)).d&&x((t=O(t,r+5,1)).d,r,s)&&(e=r+10,+b((t=O(_(n.times(k(u,e+i)),e),e+5,1)).d).slice(r+1,r+15)+1==1e14&&(t=O(t,r+1,0))),t.s=o,c=!0,f.rounding=s,O(t,r,s))},N.toPrecision=function(n,e){var i,r=this,t=r.constructor;return void 0===n?i=q(r,r.e<=t.toExpNeg||r.e>=t.toExpPos):(E(n,1,1e9),void 0===e?e=t.rounding:E(e,0,8),i=q(r=O(new t(r),n,e),n<=r.e||r.e<=t.toExpNeg,n)),r.isNeg()&&!r.isZero()?"-"+i:i},N.toSignificantDigits=N.toSD=function(n,e){var i=this.constructor;return void 0===n?(n=i.precision,e=i.rounding):(E(n,1,1e9),void 0===e?e=i.rounding:E(e,0,8)),O(new i(this),n,e)},N.toString=function(){var n=this,e=n.constructor,i=q(n,n.e<=e.toExpNeg||n.e>=e.toExpPos);return n.isNeg()&&!n.isZero()?"-"+i:i},N.truncated=N.trunc=function(){return O(new this.constructor(this),this.e+1,1)},N.valueOf=N.toJSON=function(){var n=this,e=n.constructor,i=q(n,n.e<=e.toExpNeg||n.e>=e.toExpPos);return n.isNeg()?"-"+i:i};var M=function(){function n(n,e,i){var r,t=0,s=n.length;for(n=n.slice();s--;)r=n[s]*e+t,n[s]=r%i|0,t=r/i|0;return t&&n.unshift(t),n}function i(n,e,i,r){var t,s;if(i!=r)s=i>r?1:-1;else for(t=s=0;t<i;t++)if(n[t]!=e[t]){s=n[t]>e[t]?1:-1;break}return s}function r(n,e,i,r){for(var t=0;i--;)n[i]-=t,t=n[i]<e[i]?1:0,n[i]=t*r+n[i]-e[i];for(;!n[0]&&n.length>1;)n.shift()}return function(t,s,o,u,c,f){var h,d,l,g,p,w,v,N,b,E,x,y,M,q,D,F,A,P,S,Z,R=t.constructor,L=t.s==s.s?1:-1,_=t.d,k=s.d;if(!(_&&_[0]&&k&&k[0]))return new R(t.s&&s.s&&(_?!k||_[0]!=k[0]:k)?_&&0==_[0]||!k?0*L:L/0:NaN);for(f?(p=1,d=t.e-s.e):(f=m,p=7,d=a(t.e/p)-a(s.e/p)),S=k.length,A=_.length,E=(b=new R(L)).d=[],l=0;k[l]==(_[l]||0);l++);if(k[l]>(_[l]||0)&&d--,null==o?(q=o=R.precision,u=R.rounding):q=c?o+(t.e-s.e)+1:o,q<0)E.push(1),w=!0;else{if(q=q/p+2|0,l=0,1==S){for(g=0,k=k[0],q++;(l<A||g)&&q--;l++)D=g*f+(_[l]||0),E[l]=D/k|0,g=D%k|0;w=g||l<A}else{for((g=f/(k[0]+1)|0)>1&&(k=n(k,g,f),_=n(_,g,f),S=k.length,A=_.length),F=S,y=(x=_.slice(0,S)).length;y<S;)x[y++]=0;(Z=k.slice()).unshift(0),P=k[0],k[1]>=f/2&&++P;do{g=0,(h=i(k,x,S,y))<0?(M=x[0],S!=y&&(M=M*f+(x[1]||0)),(g=M/P|0)>1?(g>=f&&(g=f-1),1==(h=i(v=n(k,g,f),x,N=v.length,y=x.length))&&(g--,r(v,S<N?Z:k,N,f))):(0==g&&(h=g=1),v=k.slice()),(N=v.length)<y&&v.unshift(0),r(x,v,y,f),-1==h&&(h=i(k,x,S,y=x.length))<1&&(g++,r(x,S<y?Z:k,y,f)),y=x.length):0===h&&(g++,x=[0]),E[l++]=g,h&&x[0]?x[y++]=_[F]||0:(x=[_[F]],y=1)}while((F++<A||void 0!==x[0])&&q--);w=void 0!==x[0]}E[0]||E.shift()}if(1==p)b.e=d,e=w;else{for(l=1,g=E[0];g>=10;g/=10)l++;b.e=l+d*p-1,O(b,c?o+b.e+1:o,u,w)}return b}}();function O(n,e,i,r){var t,s,o,u,f,a,d,l,g,p=n.constructor;n:if(null!=e){if(!(l=n.d))return n;for(t=1,u=l[0];u>=10;u/=10)t++;if((s=e-t)<0)s+=7,o=e,f=(d=l[g=0])/h(10,t-o-1)%10|0;else if((g=Math.ceil((s+1)/7))>=(u=l.length)){if(!r)break n;for(;u++<=g;)l.push(0);d=f=0,t=1,o=(s%=7)-7+1}else{for(d=u=l[g],t=1;u>=10;u/=10)t++;f=(o=(s%=7)-7+t)<0?0:d/h(10,t-o-1)%10|0}if(r=r||e<0||void 0!==l[g+1]||(o<0?d:d%h(10,t-o-1)),a=i<4?(f||r)&&(0==i||i==(n.s<0?3:2)):f>5||5==f&&(4==i||r||6==i&&(s>0?o>0?d/h(10,t-o):0:l[g-1])%10&1||i==(n.s<0?8:7)),e<1||!l[0])return l.length=0,a?(e-=n.e+1,l[0]=h(10,(7-e%7)%7),n.e=-e||0):l[0]=n.e=0,n;if(0==s?(l.length=g,u=1,g--):(l.length=g+1,u=h(10,7-s),l[g]=o>0?(d/h(10,t-o)%h(10,o)|0)*u:0),a)for(;;){if(0==g){for(s=1,o=l[0];o>=10;o/=10)s++;for(o=l[0]+=u,u=1;o>=10;o/=10)u++;s!=u&&(n.e++,l[0]==m&&(l[0]=1));break}if(l[g]+=u,l[g]!=m)break;l[g--]=0,u=1}for(s=l.length;0===l[--s];)l.pop()}return c&&(n.e>p.maxE?(n.d=null,n.e=NaN):n.e<p.minE&&(n.e=0,n.d=[0])),n}function q(n,e,i){if(!n.isFinite())return T(n);var r,t=n.e,s=b(n.d),o=s.length;return e?(i&&(r=i-o)>0?s=s.charAt(0)+"."+s.slice(1)+S(r):o>1&&(s=s.charAt(0)+"."+s.slice(1)),s=s+(n.e<0?"e":"e+")+n.e):t<0?(s="0."+S(-t-1)+s,i&&(r=i-o)>0&&(s+=S(r))):t>=o?(s+=S(t+1-o),i&&(r=i-t-1)>0&&(s=s+"."+S(r))):((r=t+1)<o&&(s=s.slice(0,r)+"."+s.slice(r)),i&&(r=i-o)>0&&(t+1===o&&(s+="."),s+=S(r))),s}function D(n,e){var i=n[0];for(e*=7;i>=10;i/=10)e++;return e}function F(n,e,i){if(e>w)throw c=!0,i&&(n.precision=i),Error("[DecimalError] Precision limit exceeded");return O(new n(s),e,1,!0)}function A(n,e,i){if(e>v)throw Error("[DecimalError] Precision limit exceeded");return O(new n(o),e,i,!0)}function P(n){var e=n.length-1,i=7*e+1;if(e=n[e]){for(;e%10==0;e/=10)i--;for(e=n[0];e>=10;e/=10)i++}return i}function S(n){for(var e="";n--;)e+="0";return e}function Z(n,e,i,r){var t,s=new n(1),o=Math.ceil(r/7+4);for(c=!1;;){if(i%2&&V((s=s.times(e)).d,o)&&(t=!0),0===(i=a(i/2))){i=s.d.length-1,t&&0===s.d[i]&&++s.d[i];break}V((e=e.times(e)).d,o)}return c=!0,s}function R(n){return 1&n.d[n.d.length-1]}function L(n,e,i){for(var r,t=new n(e[0]),s=0;++s<e.length;){if(!(r=new n(e[s])).s){t=r;break}t[i](r)&&(t=r)}return t}function _(n,e){var i,r,t,s,o,u,f,a=0,d=0,l=0,g=n.constructor,p=g.rounding,m=g.precision;if(!n.d||!n.d[0]||n.e>17)return new g(n.d?n.d[0]?n.s<0?0:1/0:1:n.s?n.s<0?0:n:NaN);for(null==e?(c=!1,f=m):f=e,u=new g(.03125);n.e>-2;)n=n.times(u),l+=5;for(f+=r=Math.log(h(2,l))/Math.LN10*2+5|0,i=s=o=new g(1),g.precision=f;;){if(s=O(s.times(n),f,1),i=i.times(++d),b((u=o.plus(M(s,i,f,1))).d).slice(0,f)===b(o.d).slice(0,f)){for(t=l;t--;)o=O(o.times(o),f,1);if(null!=e)return g.precision=m,o;if(!(a<3&&x(o.d,f-r,p,a)))return O(o,g.precision=m,p,c=!0);g.precision=f+=10,i=s=u=new g(1),d=0,a++}o=u}}function k(n,e){var i,r,t,s,o,u,f,a,h,d,l,g=1,p=n,m=p.d,w=p.constructor,v=w.rounding,N=w.precision;if(p.s<0||!m||!m[0]||!p.e&&1==m[0]&&1==m.length)return new w(m&&!m[0]?-1/0:1!=p.s?NaN:m?0:p);if(null==e?(c=!1,h=N):h=e,w.precision=h+=10,r=(i=b(m)).charAt(0),!(Math.abs(s=p.e)<15e14))return a=F(w,h+2,N).times(s+""),p=k(new w(r+"."+i.slice(1)),h-10).plus(a),w.precision=N,null==e?O(p,N,v,c=!0):p;for(;r<7&&1!=r||1==r&&i.charAt(1)>3;)r=(i=b((p=p.times(n)).d)).charAt(0),g++;for(s=p.e,r>1?(p=new w("0."+i),s++):p=new w(r+"."+i.slice(1)),d=p,f=o=p=M(p.minus(1),p.plus(1),h,1),l=O(p.times(p),h,1),t=3;;){if(o=O(o.times(l),h,1),b((a=f.plus(M(o,new w(t),h,1))).d).slice(0,h)===b(f.d).slice(0,h)){if(f=f.times(2),0!==s&&(f=f.plus(F(w,h+2,N).times(s+""))),f=M(f,new w(g),h,1),null!=e)return w.precision=N,f;if(!x(f.d,h-10,v,u))return O(f,w.precision=N,v,c=!0);w.precision=h+=10,a=o=p=M(d.minus(1),d.plus(1),h,1),l=O(p.times(p),h,1),t=u=1}f=a,t+=2}}function T(n){return String(n.s*n.s/0)}function U(n,e){var i,r,t;for((i=e.indexOf("."))>-1&&(e=e.replace(".","")),(r=e.search(/e/i))>0?(i<0&&(i=r),i+=+e.slice(r+1),e=e.substring(0,r)):i<0&&(i=e.length),r=0;48===e.charCodeAt(r);r++);for(t=e.length;48===e.charCodeAt(t-1);--t);if(e=e.slice(r,t)){if(t-=r,n.e=i=i-r-1,n.d=[],r=(i+1)%7,i<0&&(r+=7),r<t){for(r&&n.d.push(+e.slice(0,r)),t-=7;r<t;)n.d.push(+e.slice(r,r+=7));r=7-(e=e.slice(r)).length}else r-=t;for(;r--;)e+="0";n.d.push(+e),c&&(n.e>n.constructor.maxE?(n.d=null,n.e=NaN):n.e<n.constructor.minE&&(n.e=0,n.d=[0]))}else n.e=0,n.d=[0];return n}function C(n,e){var i,r,t,s,o,u,a,p,w;if("Infinity"===e||"NaN"===e)return+e||(n.s=NaN),n.e=NaN,n.d=null,n;if(l.test(e))i=16,e=e.toLowerCase();else if(d.test(e))i=2;else{if(!g.test(e))throw Error(f+e);i=8}for((s=e.search(/p/i))>0?(a=+e.slice(s+1),e=e.substring(2,s)):e=e.slice(2),o=(s=e.indexOf("."))>=0,r=n.constructor,o&&(s=(u=(e=e.replace(".","")).length)-s,t=Z(r,new r(i),s,2*s)),s=w=(p=y(e,i,m)).length-1;0===p[s];--s)p.pop();return s<0?new r(0*n.s):(n.e=D(p,w),n.d=p,c=!1,o&&(n=M(n,t,4*u)),a&&(n=n.times(Math.abs(a)<54?h(2,a):Pn.pow(2,a))),c=!0,n)}function I(n,e,i,r,t){var s,o,u,f,a=n.precision,h=Math.ceil(a/7);for(c=!1,f=i.times(i),u=new n(r);;){if(o=M(u.times(f),new n(e++*e++),a,1),u=t?r.plus(o):r.minus(o),r=M(o.times(f),new n(e++*e++),a,1),void 0!==(o=u.plus(r)).d[h]){for(s=h;o.d[s]===u.d[s]&&s--;);if(-1==s)break}s=u,u=r,r=o,o=s}return c=!0,o.d.length=h+1,o}function B(n,e){for(var i=n;--e;)i*=n;return i}function H(n,e){var r,t=e.s<0,s=A(n,n.precision,1),o=s.times(.5);if((e=e.abs()).lte(o))return i=t?4:1,e;if((r=e.divToInt(s)).isZero())i=t?3:2;else{if((e=e.minus(r.times(s))).lte(o))return i=R(r)?t?2:3:t?4:1,e;i=R(r)?t?1:4:t?3:2}return e.minus(s).abs()}function j(n,i,r,s){var o,u,c,f,a,h,d,l,g,p=n.constructor,m=void 0!==r;if(m?(E(r,1,1e9),void 0===s?s=p.rounding:E(s,0,8)):(r=p.precision,s=p.rounding),n.isFinite()){for(m?(o=2,16==i?r=4*r-3:8==i&&(r=3*r-2)):o=i,(c=(d=q(n)).indexOf("."))>=0&&(d=d.replace(".",""),(g=new p(1)).e=d.length-c,g.d=y(q(g),10,o),g.e=g.d.length),u=a=(l=y(d,10,o)).length;0==l[--a];)l.pop();if(l[0]){if(c<0?u--:((n=new p(n)).d=l,n.e=u,l=(n=M(n,g,r,s,0,o)).d,u=n.e,h=e),c=l[r],f=o/2,h=h||void 0!==l[r+1],h=s<4?(void 0!==c||h)&&(0===s||s===(n.s<0?3:2)):c>f||c===f&&(4===s||h||6===s&&1&l[r-1]||s===(n.s<0?8:7)),l.length=r,h)for(;++l[--r]>o-1;)l[r]=0,r||(++u,l.unshift(1));for(a=l.length;!l[a-1];--a);for(c=0,d="";c<a;c++)d+=t.charAt(l[c]);if(m){if(a>1)if(16==i||8==i){for(c=16==i?4:3,--a;a%c;a++)d+="0";for(a=(l=y(d,o,i)).length;!l[a-1];--a);for(c=1,d="1.";c<a;c++)d+=t.charAt(l[c])}else d=d.charAt(0)+"."+d.slice(1);d=d+(u<0?"p":"p+")+u}else if(u<0){for(;++u;)d="0"+d;d="0."+d}else if(++u>a)for(u-=a;u--;)d+="0";else u<a&&(d=d.slice(0,u)+"."+d.slice(u))}else d=m?"0p+0":"0";d=(16==i?"0x":2==i?"0b":8==i?"0o":"")+d}else d=T(n);return n.s<0?"-"+d:d}function V(n,e){if(n.length>e)return n.length=e,!0}function $(n){return new this(n).abs()}function W(n){return new this(n).acos()}function J(n){return new this(n).acosh()}function X(n,e){return new this(n).plus(e)}function Y(n){return new this(n).asin()}function z(n){return new this(n).asinh()}function G(n){return new this(n).atan()}function K(n){return new this(n).atanh()}function Q(n,e){n=new this(n),e=new this(e);var i,r=this.precision,t=this.rounding,s=r+4;return n.s&&e.s?n.d||e.d?!e.d||n.isZero()?(i=e.s<0?A(this,r,t):new this(0)).s=n.s:!n.d||e.isZero()?(i=A(this,s,1).times(.5)).s=n.s:e.s<0?(this.precision=s,this.rounding=1,i=this.atan(M(n,e,s,1)),e=A(this,s,1),this.precision=r,this.rounding=t,i=n.s<0?i.minus(e):i.plus(e)):i=this.atan(M(n,e,s,1)):(i=A(this,s,1).times(e.s>0?.25:.75)).s=n.s:i=new this(NaN),i}function nn(n){return new this(n).cbrt()}function en(n){return O(n=new this(n),n.e+1,2)}function rn(n){if(!n||"object"!=typeof n)throw Error("[DecimalError] Object expected");var e,i,t,s=!0===n.defaults,o=["precision",1,1e9,"rounding",0,8,"toExpNeg",-r,0,"toExpPos",0,r,"maxE",0,r,"minE",-r,0,"modulo",0,9];for(e=0;e<o.length;e+=3)if(i=o[e],s&&(this[i]=u[i]),void 0!==(t=n[i])){if(!(a(t)===t&&t>=o[e+1]&&t<=o[e+2]))throw Error(f+i+": "+t);this[i]=t}if(i="crypto",s&&(this[i]=u[i]),void 0!==(t=n[i])){if(!0!==t&&!1!==t&&0!==t&&1!==t)throw Error(f+i+": "+t);if(t){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw Error("[DecimalError] crypto unavailable");this[i]=!0}else this[i]=!1}return this}function tn(n){return new this(n).cos()}function sn(n){return new this(n).cosh()}function on(n,e){return new this(n).div(e)}function un(n){return new this(n).exp()}function cn(n){return O(n=new this(n),n.e+1,3)}function fn(){var n,e,i=new this(0);for(c=!1,n=0;n<arguments.length;)if((e=new this(arguments[n++])).d)i.d&&(i=i.plus(e.times(e)));else{if(e.s)return c=!0,new this(1/0);i=e}return c=!0,i.sqrt()}function an(n){return n instanceof Pn||n&&"[object Decimal]"===n.name||!1}function hn(n){return new this(n).ln()}function dn(n,e){return new this(n).log(e)}function ln(n){return new this(n).log(2)}function gn(n){return new this(n).log(10)}function pn(){return L(this,arguments,"lt")}function mn(){return L(this,arguments,"gt")}function wn(n,e){return new this(n).mod(e)}function vn(n,e){return new this(n).mul(e)}function Nn(n,e){return new this(n).pow(e)}function bn(n){var e,i,r,t,s=0,o=new this(1),u=[];if(void 0===n?n=this.precision:E(n,1,1e9),r=Math.ceil(n/7),this.crypto)if(crypto.getRandomValues)for(e=crypto.getRandomValues(new Uint32Array(r));s<r;)(t=e[s])>=429e7?e[s]=crypto.getRandomValues(new Uint32Array(1))[0]:u[s++]=t%1e7;else{if(!crypto.randomBytes)throw Error("[DecimalError] crypto unavailable");for(e=crypto.randomBytes(r*=4);s<r;)(t=e[s]+(e[s+1]<<8)+(e[s+2]<<16)+((127&e[s+3])<<24))>=214e7?crypto.randomBytes(4).copy(e,s):(u.push(t%1e7),s+=4);s=r/4}else for(;s<r;)u[s++]=1e7*Math.random()|0;for(n%=7,(r=u[--s])&&n&&(t=h(10,7-n),u[s]=(r/t|0)*t);0===u[s];s--)u.pop();if(s<0)i=0,u=[0];else{for(i=-1;0===u[0];i-=7)u.shift();for(r=1,t=u[0];t>=10;t/=10)r++;r<7&&(i-=7-r)}return o.e=i,o.d=u,o}function En(n){return O(n=new this(n),n.e+1,this.rounding)}function xn(n){return(n=new this(n)).d?n.d[0]?n.s:0*n.s:n.s||NaN}function yn(n){return new this(n).sin()}function Mn(n){return new this(n).sinh()}function On(n){return new this(n).sqrt()}function qn(n,e){return new this(n).sub(e)}function Dn(n){return new this(n).tan()}function Fn(n){return new this(n).tanh()}function An(n){return O(n=new this(n),n.e+1,1)}N[Symbol.for("nodejs.util.inspect.custom")]=N.toString,N[Symbol.toStringTag]="Decimal";var Pn=function n(e){var i,r,t;function s(n){var e,i,r,t=this;if(!(t instanceof s))return new s(n);if(t.constructor=s,n instanceof s)return t.s=n.s,void(c?!n.d||n.e>s.maxE?(t.e=NaN,t.d=null):n.e<s.minE?(t.e=0,t.d=[0]):(t.e=n.e,t.d=n.d.slice()):(t.e=n.e,t.d=n.d?n.d.slice():n.d));if("number"===(r=typeof n)){if(0===n)return t.s=1/n<0?-1:1,t.e=0,void(t.d=[0]);if(n<0?(n=-n,t.s=-1):t.s=1,n===~~n&&n<1e7){for(e=0,i=n;i>=10;i/=10)e++;return void(c?e>s.maxE?(t.e=NaN,t.d=null):e<s.minE?(t.e=0,t.d=[0]):(t.e=e,t.d=[n]):(t.e=e,t.d=[n]))}return 0*n!=0?(n||(t.s=NaN),t.e=NaN,void(t.d=null)):U(t,n.toString())}if("string"!==r)throw Error(f+n);return 45===(i=n.charCodeAt(0))?(n=n.slice(1),t.s=-1):(43===i&&(n=n.slice(1)),t.s=1),p.test(n)?U(t,n):C(t,n)}if(s.prototype=N,s.ROUND_UP=0,s.ROUND_DOWN=1,s.ROUND_CEIL=2,s.ROUND_FLOOR=3,s.ROUND_HALF_UP=4,s.ROUND_HALF_DOWN=5,s.ROUND_HALF_EVEN=6,s.ROUND_HALF_CEIL=7,s.ROUND_HALF_FLOOR=8,s.EUCLID=9,s.config=s.set=rn,s.clone=n,s.isDecimal=an,s.abs=$,s.acos=W,s.acosh=J,s.add=X,s.asin=Y,s.asinh=z,s.atan=G,s.atanh=K,s.atan2=Q,s.cbrt=nn,s.ceil=en,s.cos=tn,s.cosh=sn,s.div=on,s.exp=un,s.floor=cn,s.hypot=fn,s.ln=hn,s.log=dn,s.log10=gn,s.log2=ln,s.max=pn,s.min=mn,s.mod=wn,s.mul=vn,s.pow=Nn,s.random=bn,s.round=En,s.sign=xn,s.sin=yn,s.sinh=Mn,s.sqrt=On,s.sub=qn,s.tan=Dn,s.tanh=Fn,s.trunc=An,void 0===e&&(e={}),e&&!0!==e.defaults)for(t=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],i=0;i<t.length;)e.hasOwnProperty(r=t[i++])||(e[r]=this[r]);return s.config(e),s}(u);s=new Pn(s),o=new Pn(o);var Sn=[new Pn("1"),new Pn("1")],Zn=function(n){if(n<0)throw new Error("n cannot be negative");var e=2;if(void 0!==Sn[n])return Sn[n];for(var i=Sn[e-1];e<=n;e++)Sn[e]=i=i.times(e.toString());return i};Zn(100);var Rn=function(n,e,i){return n*(e/i)},Ln=function(n,e){return new Pn(n).toPower(e)},_n=function(n,e,i,r){return n.dividedBy(e).times(r/(r-i))},kn=function(n,e){for(var i=new Pn(0),r=0;r<e;r++){var t=Zn(r),s=new Pn(n).toPower(r);i=i.plus(s.dividedBy(t))}return i},Tn=function(n,e){return n.dividedBy(e.plus(n))},Un=function(n,e,i,r){var t=_n(n,e,i,r),s=kn(i,r);return Tn(t,s)},Cn=function(n,e,i,r,t){return 1-n.times(Math.exp(r/t*-(i-e)))},In=function(n,e,i,r){var t=Zn(e),s=Ln(n,e),o=Un(s,t,n,e);return Cn(o,n,e,i,r)},Bn=function(n,e,i){for(var r=n/e;r>i;)r=n/(e+=1);return e};n.checkMaxOccupancy=Bn,n.getAN=Ln,n.getErlangC=Un,n.getFactorial=Zn,n.getFullServiceLevel=In,n.getIntensity=Rn,n.getNumberOfAgents=function(n,e,i,r,t,s,o){for(var u=Rn(n,i,e),c=Math.floor(u)+1;In(u,c,t,i)<r;)c+=1;return s>0&&(c=Bn(u,c,s)),c=Math.ceil(c/(1-o))},n.getPW=Tn,n.getServiceLevel=Cn,n.getX=_n,n.getY=kn,Object.defineProperty(n,"__esModule",{value:!0})}));
