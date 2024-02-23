"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=s(function(g,i){
var h=require('@stdlib/stats-base-variancech/dist'),p=require('@stdlib/math-base-special-sqrt/dist');function x(e,r,t,a){return p(h(e,r,t,a))}i.exports=x
});var n=s(function(j,c){
var y=require('@stdlib/stats-base-variancech/dist').ndarray,f=require('@stdlib/math-base-special-sqrt/dist');function l(e,r,t,a,o){return f(y(e,r,t,a,o))}c.exports=l
});var d=s(function(k,q){
var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=u(),O=n();m(v,"ndarray",O);q.exports=v
});var R=d();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
