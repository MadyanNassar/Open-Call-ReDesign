// pnltri.js / raw.github.com/jahting/pnltri.js/master/LICENSE
'use strict';var r={ca:"2.0"};r.c={random:Math.random,da:function(b){for(var c=b.length-1;0<c;c--){var l=Math.floor(r.c.random()*(c+1)),k=b[c];b[c]=b[l];b[l]=k}return b},G:function(b,c){var l=b.y-c.y;if(l<r.c.D)return-1;if(l>r.c.n)return 1;l=b.x-c.x;return l<r.c.D?-1:l>r.c.n?1:0},N:function(b,c,l){return(c.x-b.x)*(l.y-b.y)-(c.y-b.y)*(l.x-b.x)}};r.c.n=Math.pow(2,-43);r.c.D=-r.c.n;function u(b){this.U=[];this.r=[];this.X=[];this.L=0;this.F=[];this.R=[];this.T=[];if(b)for(var c=0,l=b.length;c<l;c++){var k=w(this,b[c]);if(3>k.length)console.log("Polygon has < 3 vertices!",k);else{for(var a=void 0,e=void 0,d=void 0,f=0;f<k.length-1;f++)a=x(this,k[f],k[f+1]),d?(a.o=d,d.m=a):e=a,d=a,this.r.push(a);a=x(this,k[k.length-1],k[0]);a.o=d;d.m=a;this.r.push(a);e.o=a;a.m=e;this.F[this.L++]=!0}}}u.prototype={Q:function(){return this.F.concat()}};
function B(b,c,l,k){b.T.push([c.id,l.id,k.id])}
function w(b,c){function l(a,b){return Math.abs(a.x-b.x)<r.c.n&&Math.abs(a.y-b.y)<r.c.n}function k(a,b,c){if(Math.abs(r.c.N(b,a,c))>r.c.n)return!1;var d;Math.abs(a.y-b.y)<r.c.n?(d=b.x,a.x<c.x?(b=a.x,a=c.x):(b=c.x,a=a.x)):(d=b.y,a.y<c.y?(b=a.y,a=c.y):(b=c.y,a=a.y));return b-d<r.c.n&&d-a<r.c.n}for(var a=[],e,d,f,h=0;h<c.length;h++)e=D(b,c[h].x,c[h].y),d=!0,f=a.length-1,0<=f&&(l(e,a[f])?d=!1:0<f&&k(a[f-1],a[f],e)&&a.pop()),d&&a.push(e);f=a.length-1;0<f&&l(a[f],a[0])&&(a.pop(),f--);1<f&&(k(a[f-1],a[f],
a[0])&&(a.pop(),f--),1<f&&k(a[f],a[0],a[1])&&a.shift());return a}function x(b,c,l){return{O:b.L,a:c,i:l,p:1==r.c.G(l,c),o:null,m:null,H:null,I:null,v:!1,J:null,K:null,j:null,g:null,w:!1}}function D(b,c,l){c={id:b.U.length,x:c,y:l};b.U.push(c);return c};function E(b){this.k=b}E.prototype={};function F(b,c,l,k){this.q=b?b:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY};this.l=c?c:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY};this.t=l;this.s=k;this.depth=-1}F.prototype={};function G(b){var c=new F(b.q,b.l,b.t,b.s);c.e=b.e;c.f=b.f;c.b=b.b;c.d=b.d;c.u=b.u;return c}function H(b){this.A=b;b.u=this}H.prototype={};function I(b){var c=new F(null,null,null,null);this.B=[];J(this,c);this.root=new H(c);if(b)for(b=b.r,c=0;c<b.length;c++)b[c].H=b[c].I=this.root,b[c].v=!1}
I.prototype={P:function(b){var c,l,k=b.U.length,a=Array(k);for(c=0;c<k;c++)a[c]=Array(8);var e=Array(k);c=0;for(l=this.B.length;c<l;c++){var d=this.B[c],f=d.e?d.f?5:7:d.f?4:6,h=d.b?d.d?1:0:d.d?3:2;if(1==d.depth%2){if(5==f||1==h||7==f&&3==h||4==f&&0==h){var g;g={a:d.l,i:d.q,j:null,g:null,w:!1};b.X.push(g);var p;p={a:d.q,i:d.l,aa:g,j:null,g:null,w:!1};b.X.push(p);g.aa=p;a[d.l.id][h]=g;a[d.q.id][f]=p}}else null!=d.q.id&&(e[d.q.id]=f),null!=d.l.id&&(e[d.l.id]=h)}var t;for(c=0;c<k;c++)if(d=a[c],f=e[c],
null!=f){l=f;h=null;do if(7<l++&&(l=0),b=d[l])h?(b.j=h,h.g=b):(t=b.a,t.Y=b),h=b.aa;while(l!=f);h&&(t.Z=h)}}};
function L(b,c){function l(){var a=m.e||m.f;a.b&&a.d?m==a.b?(n.e=null,a.b=q):(q.f=null,a.d=n):(n.e=null,n.f=a,a.d=n)}function k(a){m.l==t.l?(f?m.b?(a.e=q,q.b=a,n.d=null):(a.f=n,q.b=null,n.d=a):(a.e=q,a.f=n,q.b=n.d=a),q.d=n.b=null):(a.e&&a.f&&(a.e==m?(a.C=a.f,a.ba=!0):(a.C=a.e,a.ba=!1)),a.e=q,a.f=n,q.d=n.b=a,q.b=n.d=null)}function a(){var a;if(m.l==t.l&&f)m.b.e=q,m.d.f=n,q.b=m.b,n.d=m.d,a=q.d=n.b=null;else{m.b.e=q;m.d.f=n;var b=M(c,m.l);if(0<b)a=!0;else if(0>b)a=!1;else{a=m.b.s;var d=a.p,b=d?a.a:a.i,
b=M(c,b);0<b?a=!0:0>b?a=!1:(a=d?a.m:a.o,b=d?a.i:a.a,b=M(c,b),a=0<b?!0:!1)}a?(a=m.d,m.d.e=q,q.b=m.b,n.d=null):(a=m.b,m.b.f=n,n.d=m.d,q.b=null);q.d=n.b=a}return a}N(c);var e,d,f,h,g,p;c.p?(e=c.a,h=c.i,d=c.H,g=c.I,f=c.o.v,p=c.m.v):(e=c.i,h=c.a,d=c.I,g=c.H,f=c.m.v,p=c.o.v);p||(p=O(b,g,h,!1),g==d&&(d=p),g=p);g=g.A;if(g.e||g.f)if(g.q!=h)console.log("ERR add_segment: trFirstHigh != segHigh: ",g);else{f||(d=O(b,d,e,!0));var t=d.A,m=g,q,n,y,v;for(e=b.B.length+2;m;){if(0>--e){console.log("ERR add_segment: infinite loop",
m,c,b);return}if(!m.b&&!m.d){console.log("ERR add_segment: missing successors",m,c,b);return}d=m.u;d.h=c;d.A=null;v&&v.s==m.s?(q=m,n=v,n.l=m.l,d.left=new H(q),d.right=v.u):(y&&y.t==m.t?(n=m,q=y,q.l=m.l,d.left=y.u):(q=m,n=P(b,m),d.left=new H(q)),d.right=new H(n));m.e&&m.f?m.C?(m.ba?(n.e=m.f,n.f=m.C,n.e.b=n,n.f.d=n):(q.f=m.e,q.e=m.C,q.e.b=q,q.f.d=q),q.C=n.C=null):m.q==g.q?(n.f.d=n,q.f=n.e=null):n==m?(n.e=n.f,n.f=null,n.e.b=n):(q.f=q.e,q.e=null):l();m.b&&m.d?d=a():(d=m.b?m.b:m.d,k(d));q.s&&(q.s.J=n);
n.t&&(n.t.K=q);q.s=n.t=c;c.J=q;c.K=n;m.l!=t.l?(y=q,v=n,m=d):m=null}c.v=!0}else console.log("ERR add_segment: missing trFirst.uX: ",g)}
function Q(b,c){if(c)var l=b.a,k=b.i,a=b.H;else l=b.i,k=b.a,a=b.I;for(var e;a;)if(a.V)a=-1==r.c.G(l==a.V?k:l,a.V)?a.left:a.right;else if(a.h){if(l==a.h.a||l==a.h.i)if(Math.abs(l.y-k.y)<r.c.n){a=Math.abs(a.h.a.y-a.h.i.y)<r.c.n?l==a.h.a?((e=b.p?k.x>=a.h.i.x:k.x<a.h.i.x)?b.o.p:a.h.m.p)?a.right:a.left:((e=b.p?k.x<a.h.a.x:k.x>=a.h.a.x)?b.m.p:a.h.o.p)?a.left:a.right:k.x<l.x?a.left:a.right;continue}else e=M(a.h,k),0==e&&(e=l==a.h.a?(e=b.p?k.y>=a.h.i.y:k.y<a.h.i.y)?M(a.h,b.o.a):-M(a.h,a.h.m.i):(e=b.p?k.y<
a.h.a.y:k.y>=a.h.a.y)?M(a.h,b.m.i):-M(a.h,a.h.o.a));else e=M(a.h,l),0==e&&(e=M(a.h,k),0==e&&(e=M(a.h,c?b.o.a:b.m.i)));if(0<e)a=a.left;else if(0>e)a=a.right;else break}else{a.A||console.log("ptNode: unknown type",a);c?b.H=a:b.I=a;break}}function N(b){Q(b,!0);Q(b,!1)}function M(b,c){var l;l=b.a.x-c.x;var k=b.i.x-c.x,a=Math.abs(b.a.y-c.y)<r.c.n;if(Math.abs(b.i.y-c.y)<r.c.n){if(a)return 0;l=k}else if(!a)return b.p?r.c.N(b.a,b.i,c):r.c.N(b.i,b.a,c);return Math.abs(l)<r.c.n?0:l}
function O(b,c,l,k){var a=c.A;if(a.q==l||a.l==l)return c;var e=G(a);a.l=e.q=l;a.b=e;e.e=a;a.d=e.f=null;e.b&&(e.b.e=e);e.d&&(e.d.f=e);J(b,e);c.V=l;c.A=null;c.right=new H(a);c.left=new H(e);return k?a.u:e.u}function P(b,c){var l=G(c);J(b,l);return l}function J(b,c){c.fa=b.B.length;b.B.push(c)}function V(b){this.k=b;this.$=new I(this.k)}V.prototype={P:function(){return this.$.P(this.k)}};function W(b){this.k=b;this.S=null}W.prototype={};function X(b){this.k=b}X.prototype={};function Z(){this.M=null}
Z.prototype={W:function(){this.M=null},Q:function(){return this.M?this.M.Q():null},ea:function(b,c){this.W();if(!b||0==b.length)return[];var l=new u(b),k=c?!1:1==l.L;if(k){k=new E(l);a:{var a=k.k,e=a.r[0],d=e,f=e,h=0;do h+=(f.a.x-f.i.x)*(f.a.y+f.i.y),f=f.m;while(f!=e);if(0>h){do d.j=d.m,d=d.g=d.o;while(d!=e);a.F[0]=!1}else{do d.j=d.o,d=d.g=d.m;while(d!=e)}for(e=a=e;a.g!=a.j;){b:{var d=a.j.a.x,f=a.j.a.y,h=a.a.x,g=a.a.y,p=a.g.a.x,t=a.g.a.y,m=p-h,q=t-g,n=d-p,y=f-t,v=h-d,K=g-f;if(r.c.n>v*q-m*K)d=!1;else{for(var Y=
a.j.j,C=a.g;C!=Y;){var C=C.g,z=C.a.x,A=C.a.y,R=z-d,S=A-f;if(0!=R||0!=S){var T=z-h,U=A-g;if(0!=T||0!=U)if(z-=p,A-=t,(0!=z||0!=A)&&m*U-q*T>=r.c.D&&v*S-K*R>=r.c.D&&n*A-y*z>=r.c.D){d=!1;break b}}}d=!0}}if(d)B(k.k,a.j.a,a.a,a.g.a),a.j.g=a.g,a.g.j=a.j,e=a=a.g;else if(a=a.g,a==e){k=!1;break a}}k=!0}}if(!k){k=new W(l);k.S=new V(k.k);e=k.S;a=e.k.r.concat();r.c.da(a);d=0;f=e.k.L;if(1!=f)for(h=Array(f),g=a.concat(),p=0;p<g.length;p++)t=g[p].O,h[t]?a[f++]=g[p]:(a[d++]=g[p],h[t]=!0);d=a.length;f=e.$;h=0;for(g=
d;h<d;){g=Math.log(g)/Math.LN2;for(p=1<g?Math.floor(d/g):d;h<p;h++)L(f,a[h]);for(p=h;p<d;p++)N(a[p])}var e=e.k,f=[f.B[0]],h=[],s,p=0;do{for(t=1==p%2;g=f.pop();)-1==g.depth&&(g.depth=p,g.e&&f.push(g.e),g.f&&f.push(g.f),g.b&&f.push(g.b),g.d&&f.push(g.d),(s=g.t)&&-1==s.J.depth&&h.push(s.J),s=g.s)&&(-1==s.K.depth&&h.push(s.K),s.p!=t&&(e.F[s.O]=!1));f=h;h=[];p++}while(0<f.length);for(p=0;p<d;p++)a[p].J=a[p].K=null;k.S.P();s=k.k;d=0;for(f=s.r.length;d<f;d++){a=s.r[d];s.F[a.O]?(e=a.i,a.j=a.o,a.g=a.m):(e=
a.a,a=a.m,a.j=a.m,a.g=a.o);if(h=a.a.Z)h.g=a,a.j=h,a.a.Z=null;if(h=e.Y)h.j=a,a.g=h,e.Y=null}s=k.k;s.R=[];k=0;for(a=s.r.length;k<a;k++)if(e=s.r[k],!e.w){a:{h=f=d=void 0;g=e;f=h=e.a;e.w=!0;for(e=e.g;d=e.a;){if(e.w){if(d==f)break;console.log("ERR unique_monotone: segment in two chains",f,e);e=null;break a}e.w=!0;1==r.c.G(d,h)&&(h=d,g=e);e=e.g}e=g}e&&s.R.push(e)}s=k=new X(l);k=s.k.R;s.k.T=[];for(a=0;a<k.length;a++)if(f=k[a],e=f.j,d=f.g,d.g==e)B(s.k,f.a,d.a,e.a);else if(e=s,d=f.g,f=f.a,h=[d.a],g=0,d=d.g,
p=d.a,p!=f){for(;p!=f||1<g;)if(0<g)if(t=r.c.N(h[g],p,h[g-1]),Math.abs(t)<=r.c.n&&(p==f||r.c.G(h[g],p)==r.c.G(h[g],h[g-1]))&&(t=1),0<t)B(e.k,h[g-1],h[g],p),g--;else if(h[++g]=p,p==f)for(console.log("ERR uni-y-monotone: only concave angles left",h);1<g;)g--,B(e.k,h[g-1],h[g],h[g+1]);else d=d.g,p=d.a;else h[++g]=p,d=d.g,p=d.a;B(e.k,h[g-1],h[g],p)}}this.M=l;return l.T.concat()}};window.PNLTRI=r;r.REVISION=r.ca;r.Math=r.c;r.Triangulator=Z;Z.prototype.clear_lastData=Z.prototype.W;Z.prototype.get_PolyLeftArr=Z.prototype.Q;Z.prototype.triangulate_polygon=Z.prototype.ea;