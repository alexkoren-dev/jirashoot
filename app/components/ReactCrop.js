!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.ReactCrop=t(require("react")):e.ReactCrop=t(e.React)}(this,(function(e){return(()=>{"use strict";var t={418:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function r(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var a,h,s=r(e),d=1;d<arguments.length;d++){for(var c in a=Object(arguments[d]))n.call(a,c)&&(s[c]=a[c]);if(t){h=t(a);for(var l=0;l<h.length;l++)o.call(a,h[l])&&(s[h[l]]=a[h[l]])}}return s}},251:(e,t,n)=>{n(418);var o=n(899),r=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;r=i("react.element"),t.Fragment=i("react.fragment")}var a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var o,i={},d=null,c=null;for(o in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)h.call(t,o)&&!s.hasOwnProperty(o)&&(i[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===i[o]&&(i[o]=t[o]);return{$$typeof:r,type:e,key:d,ref:c,props:i,_owner:a.current}}t.jsx=d,t.jsxs=d},893:(e,t,n)=>{e.exports=n(251)},899:t=>{t.exports=e}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{o.r(r),o.d(r,{Component:()=>u,areCropsEqual:()=>h,centerCrop:()=>d,clamp:()=>a,containCrop:()=>p,convertToPercentCrop:()=>c,convertToPixelCrop:()=>l,default:()=>u,defaultCrop:()=>i,makeAspectCrop:()=>s,throttle:()=>w});var e=o(893),t=o(899);function n(e){var t,o,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=n(e[t]))&&(r&&(r+=" "),r+=o);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}const i={x:0,y:0,width:0,height:0,unit:"px"};function a(e,t,n){return Math.min(Math.max(e,t),n)}function h(e,t){return e.width===t.width&&e.height===t.height&&e.x===t.x&&e.y===t.y&&e.unit===t.unit}function s(e,t,n,o){const r=l(e,n,o);return e.width&&(r.height=r.width/t),e.height&&(r.width=r.height*t),r.y+r.height>o&&(r.height=o-r.y,r.width=r.height*t),r.x+r.width>n&&(r.width=n-r.x,r.height=r.width/t),"%"===e.unit?c(r,n,o):r}function d(e,t,n){const o=l(e,t,n);return o.x=(t-o.width)/2,o.y=(n-o.height)/2,"%"===e.unit?c(o,t,n):o}function c(e,t,n){return"%"===e.unit?{...i,...e,unit:"%"}:{unit:"%",x:e.x?e.x/t*100:0,y:e.y?e.y/n*100:0,width:e.width?e.width/t*100:0,height:e.height?e.height/n*100:0}}function l(e,t,n){return e.unit?"px"===e.unit?{...i,...e,unit:"px"}:{unit:"px",x:e.x?e.x*t/100:0,y:e.y?e.y*n/100:0,width:e.width?e.width*t/100:0,height:e.height?e.height*n/100:0}:{...i,...e,unit:"px"}}function p(e,t,n,o,r,i=0,a=0,h=o,s=r){const d={...e};let c=i,l=a,p=h,w=s;t&&(t>1?(c=a*t,p=h*t):(l=i/t,w=s/t)),d.y<0&&(d.height=Math.max(d.height+d.y,l),d.y=0),d.x<0&&(d.width=Math.max(d.width+d.x,c),d.x=0);const g=o-(d.x+d.width);g<0&&(d.x=Math.min(d.x,o-c),d.width+=g);const u=r-(d.y+d.height);if(u<0&&(d.y=Math.min(d.y,r-l),d.height+=u),d.width<c&&("sw"!==n&&"nw"!=n||(d.x-=c-d.width),d.width=c),d.height<l&&("nw"!==n&&"ne"!=n||(d.y-=l-d.height),d.height=l),d.width>p&&("sw"!==n&&"nw"!=n||(d.x-=p-d.width),d.width=p),d.height>w&&("nw"!==n&&"ne"!=n||(d.y-=w-d.height),d.height=w),t){const e=d.width/d.height;if(e<t){const e=d.width/t;"nw"!==n&&"ne"!=n||(d.y-=e-d.height),d.height=e}else if(e>t){const e=d.height*t;"sw"!==n&&"nw"!=n||(d.x-=e-d.width),d.width=e}}return d}function w(e,t=300){let n,o,r;return function(){const i=this,a=arguments;n?(clearTimeout(o),o=setTimeout((()=>{Date.now()-r>=t&&(e.apply(i,a),r=Date.now())}),Math.max(t-(Date.now()-r),0))):(e.apply(i,a),r=Date.now(),n=!0)}}const g={capture:!0,passive:!1};class u extends t.PureComponent{constructor(){super(...arguments),this.keysDown=new Set,this.docMoveBound=!1,this.mouseDownOnCrop=!1,this.dragStarted=!1,this.evData={startClientX:0,startClientY:0,startCropX:0,startCropY:0,clientX:0,clientY:0,isResize:!0},this.componentRef=(0,t.createRef)(),this.mediaRef=(0,t.createRef)(),this.initChangeCalled=!1,this.state={cropIsActive:!1,newCropIsBeingDrawn:!1,hasDimensions:!1},this.onResize=w((e=>{const t=e[0],{width:n,height:o}=t.contentRect;this.setState({hasDimensions:Boolean(n&&o)})}),100),this.onCropPointerDown=e=>{const{crop:t,disabled:n}=this.props,o=this.getBox();if(!t)return;const r=l(t,o.width,o.height);if(n)return;e.cancelable&&e.preventDefault(),this.bindDocMove(),this.componentRef.current.focus({preventScroll:!0});const i=e.target.dataset.ord,a=Boolean(i);let h=e.clientX,s=e.clientY,d=r.x,c=r.y;i&&("ne"===i||"e"==i?(d=r.x,c=r.y+r.height):"se"===i||"s"===i?(d=r.x,c=r.y):"sw"===i||"w"==i?(d=r.x+r.width,c=r.y):"nw"!==i&&"n"!=i||(d=r.x+r.width,c=r.y+r.height),h=d+o.x,s=c+o.y),this.evData={startClientX:h,startClientY:s,startCropX:d,startCropY:c,clientX:e.clientX,clientY:e.clientY,isResize:a,ord:i},this.mouseDownOnCrop=!0,this.setState({cropIsActive:!0})},this.onComponentPointerDown=e=>{const{crop:t,disabled:n,locked:o,keepSelection:r,onChange:i}=this.props,a=this.getBox();if(n||o||r&&t)return;e.cancelable&&e.preventDefault(),this.bindDocMove(),this.componentRef.current.focus({preventScroll:!0});const h=e.clientX-a.x,s=e.clientY-a.y,d={unit:"px",x:h,y:s,width:0,height:0};this.evData={startClientX:e.clientX,startClientY:e.clientY,startCropX:h,startCropY:s,clientX:e.clientX,clientY:e.clientY,isResize:!0},this.mouseDownOnCrop=!0,i(l(d,a.width,a.height),c(d,a.width,a.height)),this.setState({cropIsActive:!0,newCropIsBeingDrawn:!0})},this.onDocPointerMove=e=>{const{crop:t,disabled:n,onChange:o,onDragStart:r}=this.props,i=this.getBox();if(n||!t||!this.mouseDownOnCrop)return;e.cancelable&&e.preventDefault(),this.dragStarted||(this.dragStarted=!0,r&&r(e));const{evData:a}=this;let s;a.clientX=e.clientX,a.clientY=e.clientY,s=a.isResize?this.resizeCrop():this.dragCrop(),h(t,s)||o(l(s,i.width,i.height),c(s,i.width,i.height))},this.onComponentKeyDown=e=>{const{crop:t,disabled:n,onChange:o,onComplete:r}=this.props,i=this.getBox();if(n)return;this.keysDown.add(e.key);let h=!1;if(!t)return;const s=this.makePixelCrop(),d=(navigator.platform.match("Mac")?e.metaKey:e.ctrlKey)?u.nudgeStepLarge:e.shiftKey?u.nudgeStepMedium:u.nudgeStep;if(this.keysDown.has("ArrowLeft")&&(s.x-=d,h=!0),this.keysDown.has("ArrowRight")&&(s.x+=d,h=!0),this.keysDown.has("ArrowUp")&&(s.y-=d,h=!0),this.keysDown.has("ArrowDown")&&(s.y+=d,h=!0),h){e.cancelable&&e.preventDefault(),s.x=a(s.x,0,i.width-s.width),s.y=a(s.y,0,i.height-s.height);const t=l(s,i.width,i.height),n=c(s,i.width,i.height);o(t,n),r&&r(t,n)}},this.onHandlerKeyDown=(e,t)=>{const{aspect:n=0,crop:o,disabled:r,minWidth:i=0,minHeight:a=0,maxWidth:s,maxHeight:d,onChange:w,onComplete:g}=this.props,y=this.getBox();if(r||!o)return;if("ArrowUp"!==e.key&&"ArrowDown"!==e.key&&"ArrowLeft"!==e.key&&"ArrowRight"!==e.key)return;e.stopPropagation(),e.preventDefault();const x=l(o,y.width,y.height),f=(navigator.platform.match("Mac")?e.metaKey:e.ctrlKey)?u.nudgeStepLarge:e.shiftKey?u.nudgeStepMedium:u.nudgeStep;"ArrowLeft"===e.key?"nw"===t?(x.x-=f,x.y-=f,x.width+=f,x.height+=f):"w"===t?(x.x-=f,x.width+=f):"sw"===t?(x.x-=f,x.width+=f,x.height+=f):"ne"===t?(x.y+=f,x.width-=f,x.height-=f):"e"===t?x.width-=f:"se"===t&&(x.width-=f,x.height-=f):"ArrowRight"===e.key&&("nw"===t?(x.x+=f,x.y+=f,x.width-=f,x.height-=f):"w"===t?(x.x+=f,x.width-=f):"sw"===t?(x.x+=f,x.width-=f,x.height-=f):"ne"===t?(x.y-=f,x.width+=f,x.height+=f):"e"===t?x.width+=f:"se"===t&&(x.width+=f,x.height+=f)),"ArrowUp"===e.key?"nw"===t?(x.x-=f,x.y-=f,x.width+=f,x.height+=f):"n"===t?(x.y-=f,x.height+=f):"ne"===t?(x.y-=f,x.width+=f,x.height+=f):"sw"===t?(x.x+=f,x.width-=f,x.height-=f):"s"===t?x.height-=f:"se"===t&&(x.width-=f,x.height-=f):"ArrowDown"===e.key&&("nw"===t?(x.x+=f,x.y+=f,x.width-=f,x.height-=f):"n"===t?(x.y+=f,x.height-=f):"ne"===t?(x.y+=f,x.width-=f,x.height-=f):"sw"===t?(x.x-=f,x.width+=f,x.height+=f):"s"===t?x.height+=f:"se"===t&&(x.width+=f,x.height+=f));const m=p(x,n,t,y.width,y.height,i,a,s,d);if(!h(o,m)){const e=c(m,y.width,y.height);w(m,e),g&&g(m,e)}},this.onComponentKeyUp=e=>{this.keysDown.delete(e.key)},this.onDocPointerDone=e=>{const{crop:t,disabled:n,onComplete:o,onDragEnd:r}=this.props,i=this.getBox();this.unbindDocMove(),!n&&t&&this.mouseDownOnCrop&&(this.mouseDownOnCrop=!1,this.dragStarted=!1,r&&r(e),o&&o(l(t,i.width,i.height),c(t,i.width,i.height)),this.setState({cropIsActive:!1,newCropIsBeingDrawn:!1}))}}getBox(){const e=this.mediaRef.current;if(!e)return{x:0,y:0,width:0,height:0};const{x:t,y:n,width:o,height:r}=e.getBoundingClientRect();return{x:t,y:n,width:o,height:r}}componentDidMount(){this.mediaRef.current&&(this.resizeObserver=new ResizeObserver(this.onResize),this.resizeObserver.observe(this.mediaRef.current))}componentDidUpdate(){const{crop:e,onComplete:t}=this.props;if(t&&!this.initChangeCalled&&e){const{width:n,height:o}=this.getBox();n&&o&&(this.initChangeCalled=!0,t(l(e,n,o),c(e,n,o)))}}componentWillUnmount(){this.resizeObserver&&this.resizeObserver.disconnect()}bindDocMove(){this.docMoveBound||(document.addEventListener("pointermove",this.onDocPointerMove,g),document.addEventListener("pointerup",this.onDocPointerDone,g),document.addEventListener("pointercancel",this.onDocPointerDone,g),this.docMoveBound=!0)}unbindDocMove(){this.docMoveBound&&(document.removeEventListener("pointermove",this.onDocPointerMove,g),document.removeEventListener("pointerup",this.onDocPointerDone,g),document.removeEventListener("pointercancel",this.onDocPointerDone,g),this.docMoveBound=!1)}getCropStyle(){const{crop:e}=this.props;if(e)return{top:`${e.y}${e.unit}`,left:`${e.x}${e.unit}`,width:`${e.width}${e.unit}`,height:`${e.height}${e.unit}`}}dragCrop(){const{evData:e}=this,t=this.getBox(),n=this.makePixelCrop(),o=e.clientX-e.startClientX,r=e.clientY-e.startClientY;return n.x=a(e.startCropX+o,0,t.width-n.width),n.y=a(e.startCropY+r,0,t.height-n.height),n}getPointRegion(e){const{evData:t}=this,n=t.clientX-e.x,o=t.clientY-e.y<t.startCropY;return n<t.startCropX?o?"nw":"sw":o?"ne":"se"}resizeCrop(){const{evData:e}=this,t=this.getBox(),{aspect:n=0,minWidth:o=0,minHeight:r=0,maxWidth:i,maxHeight:a}=this.props,h=this.getPointRegion(t),s=this.makePixelCrop(),d=e.ord?e.ord:h,c=e.clientX-e.startClientX,l=e.clientY-e.startClientY,w={unit:"px",x:0,y:0,width:0,height:0};"ne"===h?(w.x=e.startCropX,w.width=c,n?(w.height=w.width/n,w.y=e.startCropY-w.height):(w.height=Math.abs(l),w.y=e.startCropY-w.height)):"se"===h?(w.x=e.startCropX,w.y=e.startCropY,w.width=c,w.height=n?w.width/n:l):"sw"===h?(w.x=e.startCropX+c,w.y=e.startCropY,w.width=Math.abs(c),w.height=n?w.width/n:l):"nw"===h&&(w.x=e.startCropX+c,w.width=Math.abs(c),n?(w.height=w.width/n,w.y=e.startCropY-w.height):(w.height=Math.abs(l),w.y=e.startCropY+l));const g=p(w,n,h,t.width,t.height,o,r,i,a);return n||u.xyOrds.indexOf(d)>-1?(s.x=g.x,s.y=g.y,s.width=g.width,s.height=g.height):u.xOrds.indexOf(d)>-1?(s.x=g.x,s.width=g.width):u.yOrds.indexOf(d)>-1&&(s.y=g.y,s.height=g.height),s}createCropSelection(){const{ariaLabels:t=u.defaultProps.ariaLabels,disabled:n,locked:o,renderSelectionAddon:r,ruleOfThirds:i,crop:a}=this.props,h=this.getCropStyle();if(a)return(0,e.jsxs)("div",{style:h,className:"ReactCrop__crop-selection",onPointerDown:this.onCropPointerDown,"aria-label":t.cropArea,tabIndex:0,onKeyDown:this.onComponentKeyDown,onKeyUp:this.onComponentKeyUp,children:[!n&&!o&&(0,e.jsxs)("div",{className:"ReactCrop__drag-elements",children:[(0,e.jsx)("div",{className:"ReactCrop__drag-bar ord-n","data-ord":"n"}),(0,e.jsx)("div",{className:"ReactCrop__drag-bar ord-e","data-ord":"e"}),(0,e.jsx)("div",{className:"ReactCrop__drag-bar ord-s","data-ord":"s"}),(0,e.jsx)("div",{className:"ReactCrop__drag-bar ord-w","data-ord":"w"}),(0,e.jsx)("div",{className:"ReactCrop__drag-handle ord-nw","data-ord":"nw",tabIndex:0,"aria-label":t.nwDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"nw")}),(0,e.jsx)("div",{className:"ReactCrop__drag-handle ord-n","data-ord":"n",tabIndex:0,"aria-label":t.nDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"n")}),(0,e.jsx)("div",{className:"ReactCrop__drag-handle ord-ne","data-ord":"ne",tabIndex:0,"aria-label":t.neDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"ne")}),(0,e.jsx)("div",{className:"ReactCrop__drag-handle ord-e","data-ord":"e",tabIndex:0,"aria-label":t.eDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"e")}),(0,e.jsx)("div",{className:"ReactCrop__drag-handle ord-se","data-ord":"se",tabIndex:0,"aria-label":t.seDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"se")}),(0,e.jsx)("div",{className:"ReactCrop__drag-handle ord-s","data-ord":"s",tabIndex:0,"aria-label":t.sDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"s")}),(0,e.jsx)("div",{className:"ReactCrop__drag-handle ord-sw","data-ord":"sw",tabIndex:0,"aria-label":t.swDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"sw")}),(0,e.jsx)("div",{className:"ReactCrop__drag-handle ord-w","data-ord":"w",tabIndex:0,"aria-label":t.wDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"w")})]}),r&&(0,e.jsx)("div",{className:"ReactCrop__selection-addon",onMouseDown:e=>e.stopPropagation(),children:r(this.state)}),i&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"ReactCrop__rule-of-thirds-hz"}),(0,e.jsx)("div",{className:"ReactCrop__rule-of-thirds-vt"})]})]})}makePixelCrop(){const e={...i,...this.props.crop||{}},t=this.getBox();return l(e,t.width,t.height)}render(){const{aspect:t,children:o,circularCrop:r,className:i,crop:a,disabled:h,locked:s,style:d,ruleOfThirds:c}=this.props,{cropIsActive:l,newCropIsBeingDrawn:p}=this.state,w=a?this.createCropSelection():null,g=function(){for(var e,t,o=0,r="";o<arguments.length;)(e=arguments[o++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}("ReactCrop",i,{"ReactCrop--active":l,"ReactCrop--disabled":h,"ReactCrop--locked":s,"ReactCrop--new-crop":p,"ReactCrop--fixed-aspect":a&&t,"ReactCrop--circular-crop":a&&r,"ReactCrop--rule-of-thirds":a&&c,"ReactCrop--invisible-crop":!this.dragStarted&&a&&!a.width&&!a.height});return(0,e.jsxs)("div",{ref:this.componentRef,className:g,style:d,children:[(0,e.jsx)("div",{ref:this.mediaRef,className:"ReactCrop__child-wrapper",onPointerDown:this.onComponentPointerDown,children:o}),w]})}}u.xOrds=["e","w"],u.yOrds=["n","s"],u.xyOrds=["nw","ne","se","sw"],u.nudgeStep=1,u.nudgeStepMedium=10,u.nudgeStepLarge=100,u.defaultProps={ariaLabels:{cropArea:"Use the arrow keys to move the crop selection area",nwDragHandle:"Use the arrow keys to move the north west drag handle to change the crop selection area",nDragHandle:"Use the up and down arrow keys to move the north drag handle to change the crop selection area",neDragHandle:"Use the arrow keys to move the north east drag handle to change the crop selection area",eDragHandle:"Use the up and down arrow keys to move the east drag handle to change the crop selection area",seDragHandle:"Use the arrow keys to move the south east drag handle to change the crop selection area",sDragHandle:"Use the up and down arrow keys to move the south drag handle to change the crop selection area",swDragHandle:"Use the arrow keys to move the south west drag handle to change the crop selection area",wDragHandle:"Use the up and down arrow keys to move the west drag handle to change the crop selection area"}}})(),r})()}));