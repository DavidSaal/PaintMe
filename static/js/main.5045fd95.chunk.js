(this.webpackJsonppaint2=this.webpackJsonppaint2||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(10),s=n.n(c),r=n(11),l=n(5),i=n(6),o=n(3),d=n.n(o),j=n(8),u=n(2),h=(n(17),n(18),n(0)),b=function(e){return Object(h.jsx)("canvas",{className:"card shadow rounded-0 rounded-top",width:e.expandCanvas?"1100":"800",height:e.expandCanvas?"600":"500",onMouseDown:e.startDrawing,onMouseUp:e.finishDrawing,onMouseMove:e.draw,ref:e.canvasRef})},f=function(e){return Object(h.jsxs)("div",{className:"card shadow-sm rounded-0 rounded-bottom",children:[Object(h.jsx)("div",{className:"card-header text-center fs-2",children:"Saved Images On Server"}),Object(h.jsx)("div",{className:"py-3 scrolller",children:e.images.length>0?e.images.map((function(t,n){return Object(h.jsx)("img",{src:t.src,id:n,alt:"",onClick:e.loadImage,className:"border col-3 m-2 shadow-sm zoom"},n)})):Object(h.jsx)("h6",{className:"fst-italic",children:"(Empty List)"})}),Object(h.jsxs)("div",{className:"card border-0 border-top bg-light d-inline py-1 rounded-0 rounded-bottom",children:[Object(h.jsx)("button",{className:"btn col-4 btn-outline-dark shadow-sm fs-5 my-1 mx-4",onClick:e.saveImage,children:"Save image"}),Object(h.jsx)("button",{className:"btn col-4 btn-outline-dark shadow-sm fs-5 my-1 mx-4",onClick:e.deleteAll,children:"Delete All"})]})]})},m=(n(20),function(e){var t={backgroundColor:e.rgbColor};return Object(h.jsxs)("div",{className:"card py-3 shadow",children:[Object(h.jsx)("h3",{children:e.title}),Object(h.jsx)("div",{className:"color",style:t}),Object(h.jsx)("div",{className:"result pb-4",children:e.rgbColor}),Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"range",min:"0",max:"255",name:"red",value:e.color.red,onChange:e.changeColor}),Object(h.jsxs)("div",{children:["red: ",e.color.red]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"range",min:"0",max:"255",name:"green",value:e.color.green,onChange:e.changeColor}),Object(h.jsxs)("div",{children:["green: ",e.color.green]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"range",min:"0",max:"255",name:"blue",value:e.color.blue,onChange:e.changeColor}),Object(h.jsxs)("div",{children:["blue: ",e.color.blue]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"range",min:"0",max:"1",name:"alpha",step:"0.01",value:e.color.alpha,onChange:e.changeColor}),Object(h.jsxs)("div",{children:["alpha: ",e.color.alpha]})]})]})}),x=function(e){return Object(h.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(h.jsx)("p",{className:"fs-7 px-2",children:"Brush Size"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"range",min:"1",max:"20",value:e.brushSize,onChange:function(t){return e.setBrushSize(t.target.value)}}),Object(h.jsxs)("p",{className:"fw-bold fs-5 d-inline",children:[" ",e.brushSize]})]})]})},O=(n(21),function(e){return Object(h.jsx)("div",{className:"d-flex justify-content-center",children:Object(h.jsxs)("div",{className:"card shadow pt-3 col-9",children:[Object(h.jsxs)("div",{className:"menu",title:e.expandCanvas?"Reduce":"Expand",onClick:function(){return e.setExpandCanvas(!e.expandCanvas)},children:[Object(h.jsx)("span",{}),Object(h.jsx)("span",{}),Object(h.jsx)("span",{})]}),Object(h.jsx)("h1",{className:"display-1",children:"PaintMe"}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col",children:[Object(h.jsx)("p",{className:"fs-7 d-inline",children:"Pos: "}),Object(h.jsxs)("p",{className:"fs-6 fw-bold d-inline",children:[e.offset.x,",",e.offset.y]})]}),Object(h.jsx)("div",{className:"col",children:Object(h.jsx)("p",{className:"display-6 fs-6 d-inline mt-5",children:"By David Saal"})}),Object(h.jsx)("div",{className:"col",children:Object(h.jsx)(x,{brushSize:e.brushSize,setBrushSize:e.setBrushSize})})]})]})})}),v=function(e){return Object(h.jsxs)("div",{className:"col-4",children:[Object(h.jsxs)("label",{htmlFor:"file-upload",className:"btn btn-outline-dark shadow-sm fs-5 col-12",children:[Object(h.jsx)("i",{className:"fa fa-cloud-upload"})," Choose File"]}),Object(h.jsx)("input",{id:"file-upload",type:"file",onChange:e.handleFiles,className:"d-none"}),Object(h.jsx)("p",{className:"fst-italic pt-1",Style:"font-size: 0.9rem;",children:e.fileName?e.fileName:"No File"})]})},g=function(e){return Object(h.jsx)("div",{className:"card shadow-sm rounded-0",children:Object(h.jsxs)("div",{className:"row justify-content-center pt-3",children:[Object(h.jsx)(v,{fileName:e.fileName,handleFiles:e.handleFiles}),Object(h.jsx)("div",{className:"col-7",children:Object(h.jsx)("button",{className:"btn btn-outline-dark shadow-sm fs-5 col-12",onClick:e.clearCanvas,children:"Clear All"})})]})})};var p=function(){var e=Object(a.useState)({red:0,green:0,blue:0,alpha:1}),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)({red:255,green:255,blue:255,alpha:1}),o=Object(u.a)(s,2),x=o[0],v=o[1],p=1===n.alpha?"rgb(".concat(n.red,", ").concat(n.green,", ").concat(n.blue,")"):"rgba(".concat(n.red,", ").concat(n.green,", ").concat(n.blue,", ").concat(n.alpha,")"),w=1===x.alpha?"rgb(".concat(x.red,", ").concat(x.green,", ").concat(x.blue,")"):"rgba(".concat(x.red,", ").concat(x.green,", ").concat(x.blue,", ").concat(x.alpha,")"),N=Object(a.useState)(5),C=Object(u.a)(N,2),y=C[0],S=C[1],k=Object(a.useState)({x:0,y:0}),I=Object(u.a)(k,2),R=I[0],z=I[1],B=Object(a.useState)(""),A=Object(u.a)(B,2),D=A[0],E=A[1],P=Object(a.useState)([]),F=Object(u.a)(P,2),U=F[0],L=F[1],T=Object(a.useState)(!1),M=Object(u.a)(T,2),J=M[0],W=M[1],X=Object(a.useState)(!1),Y=Object(u.a)(X,2),q=Y[0],G=Y[1],H=Object(a.useRef)(null),K=Object(a.useRef)(null),Q=function(){var e=Object(j.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:80");case 2:return t=e.sent,n=t.json(),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){!function(){var e=H.current.getContext("2d");e.lineCap="round",e.strokeStyle=p,e.lineWidth=y,K.current=e}(),Q().then((function(e){L(e)}))}),[]);var V=function(e){E("");var t=H.current,n=t.getContext("2d");n.fillStyle="rgba(255, 255, 255, 1)",n.fillRect(0,0,t.width,t.height);var a=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"image/png",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:512,a=atob(e),c=[],s=0;s<a.length;s+=n){for(var r=a.slice(s,s+n),l=new Array(r.length),i=0;i<r.length;i++)l[i]=r.charCodeAt(i);var o=new Uint8Array(l);c.push(o)}return new Blob(c,{type:t})}(e.target.src.split(",")[1].trim()),c=new Image;c.src=URL.createObjectURL(a),c.onload=function(){n.drawImage(c,0,0,t.width,t.height)}},Z=function(){var e=Object(j.a)(d.a.mark((function e(){var t,n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=H.current,n=t.toDataURL(),e.next=4,fetch("http://localhost:80/saveImage",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({src:n})});case 4:a=e.sent,a.json().then((function(e){e?L([].concat(Object(r.a)(U),[{src:n}])):alert("Something went wrong. Please try again.")}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:80/deleteAll",{method:"POST",headers:{"Content-Type":"application/json"}});case 2:t=e.sent,t.json().then((function(e){e?L([]):alert("Something went wrong. Please try again.")}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsx)(O,{brushSize:y,setBrushSize:S,offset:R,saveImage:Z,deleteAll:$,images:U,loadImage:V,expandCanvas:J,setExpandCanvas:W}),Object(h.jsx)("div",{className:"center pt-4",children:Object(h.jsxs)("div",{className:J?"row col-12":"row col-9",children:[Object(h.jsx)("div",{className:"col",children:Object(h.jsx)(m,{title:"Brush Color",color:n,changeColor:function(e){var t=e.target,a=t.name,s=t.value;c(Object(i.a)(Object(i.a)({},n),{},Object(l.a)({},a,s)))},rgbColor:p})}),Object(h.jsxs)("div",{className:"col",children:[Object(h.jsx)(b,{startDrawing:function(e){var t=e.nativeEvent,n=H.current.getContext("2d");n.strokeStyle=p,n.lineWidth=y;var a=t.offsetX,c=t.offsetY;K.current.beginPath(),K.current.moveTo(a,c),G(!0)},finishDrawing:function(){K.current.closePath(),G(!1)},draw:function(e){var t=e.nativeEvent;if(q){var n=t.offsetX,a=t.offsetY;K.current.lineTo(n,a),K.current.stroke(),z({x:n,y:a})}},canvasRef:H,expandCanvas:J}),Object(h.jsx)(g,{fileName:D,handleFiles:function(e){if(e.target.files.length){var t=e.target.files[0];E(t.name);var n=H.current,a=n.getContext("2d"),c=new Image;c.src=URL.createObjectURL(t),c.onload=function(){a.drawImage(c,0,0,n.width,n.height)}}},clearCanvas:function(){E(""),z({x:0,y:0}),v({red:255,green:255,blue:255,alpha:1});var e=H.current,t=e.getContext("2d");t.fillStyle="rgba(255, 255, 255, 1)",t.fillRect(0,0,e.width,e.height)}}),Object(h.jsx)(f,{saveImage:Z,deleteAll:$,images:U,loadImage:V})]}),Object(h.jsx)("div",{className:"col",children:Object(h.jsx)(m,{title:"Background Color",color:x,changeColor:function(e){var t=e.target,n=t.name,a=t.value;v(Object(i.a)(Object(i.a)({},x),{},Object(l.a)({},n,a)));var c=H.current,s=c.getContext("2d");s.fillStyle=w,s.fillRect(0,0,c.width,c.height)},rgbColor:w})})]})})]})};n(22);s.a.render(Object(h.jsx)(p,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.5045fd95.chunk.js.map