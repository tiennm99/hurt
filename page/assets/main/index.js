System.register("chunks:///_virtual/BasePartical.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,c,r,n,a;return{setters:[function(t){e=t.inheritsLoose},function(t){c=t.cclegacy,r=t._decorator,n=t.Vec3,a=t.Component}],execute:function(){var i;c._RF.push({},"a78fatwjGhKPoEZcmW+t1Vb","BasePartical",void 0);var o=r.ccclass;r.property,t("BasePartical",o("BasePartical")(i=function(t){function c(){for(var e,c=arguments.length,r=new Array(c),n=0;n<c;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))||this).time=0,e}e(c,t);var r=c.prototype;return r.start=function(){},r.calcPosAt=function(t){return new n(0,0,0)},r.update=function(t){this.time+=t,this.node.position=this.calcPosAt(this.time)},c}(a))||i);c._RF.pop()}}}));

System.register("chunks:///_virtual/Heart.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BasePartical.ts"],(function(t){"use strict";var e,o,c,r,n;return{setters:[function(t){e=t.inheritsLoose},function(t){o=t.cclegacy,c=t._decorator,r=t.Vec3},function(t){n=t.BasePartical}],execute:function(){var s;o._RF.push({},"ae2d8iSk19Mu4qQwL5kOtqc","Heart",void 0);var a=c.ccclass;c.property,t("Heart",a("Heart")(s=function(t){function o(){for(var e,o=arguments.length,c=new Array(o),r=0;r<o;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))||this).size=12,e.speed=12,e}e(o,t);var c=o.prototype;return c.start=function(){console.log("Không biết lập trình web, chỉ biết lập trình game"),console.log("Không thể yêu ai khác, bởi đã trót yêu em"),console.log("T <3 V"),console.log("Source: https://github.com/tiennm99/hurt/")},c.calcPosAt=function(t){var e=t*this.speed,o=16*Math.pow(Math.sin(e),3),c=13*Math.cos(e)-5*Math.cos(2*e)-2*Math.cos(3*e)-Math.cos(4*e);return new r(o*this.size,c*this.size,0)},o}(n))||s);o._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./BasePartical.ts","./Heart.ts","./Split.ts","./T.ts","./V.ts"],(function(){"use strict";return{setters:[null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Split.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BasePartical.ts"],(function(t){"use strict";var e,i,r,s,c;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy,r=t._decorator,s=t.Vec3},function(t){c=t.BasePartical}],execute:function(){var n;i._RF.push({},"ad47d0CVWhJJbEdVhc/5bKj","Split",void 0);var a=r.ccclass;r.property,t("Split",a("Split")(n=function(t){function i(){for(var e,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))||this).size=70,e.speed=6,e.deltaX=0,e.deltaY=-30,e}return e(i,t),i.prototype.calcPosAt=function(t){var e,i,r=t*this.speed%5;return r<1?(e=-r/2,i=2-r):r<2?(e=-.5+(r-=1),i=1):r<3?(e=.5-(r-=2),i=1-2*r):r<4?(e=-.5+(r-=3),i=-1):(e=(1-(r-=4))/2,i=-1-r),new s(e*this.size+this.deltaX,i*this.size+this.deltaY,0)},i}(c))||n);i._RF.pop()}}}));

System.register("chunks:///_virtual/T.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BasePartical.ts"],(function(t){"use strict";var i,e,r,s,a;return{setters:[function(t){i=t.inheritsLoose},function(t){e=t.cclegacy,r=t._decorator,s=t.Vec3},function(t){a=t.BasePartical}],execute:function(){var n;e._RF.push({},"3e0d2uf/TxIpKJeFhE5QIxr","T",void 0);var c=r.ccclass;r.property,t("T",c("T")(n=function(t){function e(){for(var i,e=arguments.length,r=new Array(e),s=0;s<e;s++)r[s]=arguments[s];return(i=t.call.apply(t,[this].concat(r))||this).size=100,i.speed=12,i.horizontalWeight=1,i.verticalWeight=1,i.verticalOrigin=1,i.deltaX=-100,i.deltaY=-10,i}return i(e,t),e.prototype.calcPosAt=function(t){var i,e,r=t*this.speed%(this.horizontalWeight+this.verticalWeight);return r<this.horizontalWeight?(i=r-this.horizontalWeight/2,e=this.verticalOrigin):(i=0,e=this.verticalOrigin-(r-this.horizontalWeight)),new s(i*this.size+this.deltaX,e*this.size+this.deltaY,0)},e}(a))||n);e._RF.pop()}}}));

System.register("chunks:///_virtual/V.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BasePartical.ts"],(function(t){"use strict";var e,a,r,s,n;return{setters:[function(t){e=t.inheritsLoose},function(t){a=t.cclegacy,r=t._decorator,s=t.Vec3},function(t){n=t.BasePartical}],execute:function(){var c;a._RF.push({},"6eb33CO51xA4LUUt2PhhO/z","V",void 0);var i=r.ccclass;r.property,t("V",i("V")(c=function(t){function a(){for(var e,a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))||this).size=60,e.speed=12,e.alphaInDegree=60,e.alpha=e.alphaInDegree/2*Math.PI/180,e.deltaX=100,e.deltaY=-10,e}return e(a,t),a.prototype.calcPosAt=function(t){var e=t*this.speed%2,a=Math.abs(e-1),r=a/Math.tan(this.alpha);return e<1&&(a*=-1),new s(a*this.size+this.deltaX,r*this.size+this.deltaY,0)},a}(n))||c);a._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});