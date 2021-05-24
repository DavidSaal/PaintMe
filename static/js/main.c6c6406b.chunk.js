(this.webpackJsonppaint2=this.webpackJsonppaint2||[]).push([[0],{19:function(e,t,a){},20:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(11),s=a.n(c),r=a(13),l=a(6),i=a(7),o=a(4),d=a.n(o),j=a(9),u=a(3),h=(a(19),a(20),a(0)),b=function(e){return Object(h.jsx)("canvas",{className:"card shadow rounded-0 rounded-top",width:e.expandCanvas?"1100":"800",height:e.expandCanvas?"600":"500",onMouseDown:e.startDrawing,onMouseUp:e.finishDrawing,onMouseMove:e.draw,ref:e.canvasRef})},m=a(12),f=a.n(m),p=function(e){return Object(h.jsxs)("div",{className:"card shadow-sm rounded-0 rounded-bottom",children:[Object(h.jsx)("div",{className:"card-header text-center fs-2",children:"Saved Images On Server"}),Object(h.jsx)("div",{className:"py-3 scrolller",children:e.loader?Object(h.jsxs)("div",{className:"pt-4",children:[Object(h.jsx)(f.a,{type:"Oval",color:"black",height:50,width:50}),Object(h.jsx)("p",{className:"pt-2  ",children:"Loading.."})]}):e.images.length>0?e.images.map((function(t,a){return Object(h.jsx)("img",{src:t.src,id:a,alt:"",onClick:e.loadImage,className:"border col-3 m-2 shadow-sm zoom"},a)})):Object(h.jsx)("h6",{className:"fst-italic",children:"(Empty List)"})}),Object(h.jsxs)("div",{className:"card border-0 border-top bg-light d-inline py-1 rounded-0 rounded-bottom",children:[Object(h.jsx)("button",{className:"btn col-4 btn-outline-dark shadow-sm fs-5 my-1 mx-4",onClick:e.saveImage,children:"Save image"}),Object(h.jsx)("button",{className:"btn col-4 btn-outline-dark shadow-sm fs-5 my-1 mx-4",onClick:e.deleteAll,children:"Delete All"})]})]})},x=(a(42),function(e){var t={backgroundColor:e.rgbColor};return Object(h.jsxs)("div",{className:"card py-3 shadow",children:[Object(h.jsx)("h3",{children:e.title}),Object(h.jsx)("div",{className:"color",style:t}),Object(h.jsx)("div",{className:"result pb-4",children:e.rgbColor}),Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"range",min:"0",max:"255",name:"red",value:e.color.red,onChange:e.changeColor}),Object(h.jsxs)("div",{children:["red: ",e.color.red]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"range",min:"0",max:"255",name:"green",value:e.color.green,onChange:e.changeColor}),Object(h.jsxs)("div",{children:["green: ",e.color.green]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"range",min:"0",max:"255",name:"blue",value:e.color.blue,onChange:e.changeColor}),Object(h.jsxs)("div",{children:["blue: ",e.color.blue]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"range",min:"0",max:"1",name:"alpha",step:"0.01",value:e.color.alpha,onChange:e.changeColor}),Object(h.jsxs)("div",{children:["alpha: ",e.color.alpha]})]})]})}),O=function(e){return Object(h.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(h.jsx)("p",{className:"fs-7 px-2",children:"Brush Size"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"range",min:"1",max:"20",value:e.brushSize,onChange:function(t){return e.setBrushSize(t.target.value)}}),Object(h.jsxs)("p",{className:"fw-bold fs-5 d-inline",children:[" ",e.brushSize]})]})]})},v=(a(43),function(e){return Object(h.jsx)("div",{className:"d-flex justify-content-center",children:Object(h.jsxs)("div",{className:"card shadow pt-3 col-9",children:[Object(h.jsxs)("div",{className:"menu",title:e.expandCanvas?"Reduce":"Expand",onClick:function(){return e.setExpandCanvas(!e.expandCanvas)},children:[Object(h.jsx)("span",{}),Object(h.jsx)("span",{}),Object(h.jsx)("span",{})]}),Object(h.jsx)("h1",{className:"display-1",children:"PaintMe"}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col",children:[Object(h.jsx)("p",{className:"fs-7 d-inline",children:"Pos: "}),Object(h.jsxs)("p",{className:"fs-6 fw-bold d-inline",children:[e.offset.x,",",e.offset.y]})]}),Object(h.jsx)("div",{className:"col",children:Object(h.jsx)("p",{className:"display-6 fs-6 d-inline mt-5",children:"By David Saal"})}),Object(h.jsx)("div",{className:"col",children:Object(h.jsx)(O,{brushSize:e.brushSize,setBrushSize:e.setBrushSize})})]})]})})}),g=function(e){return Object(h.jsxs)("div",{className:"col-4",children:[Object(h.jsxs)("label",{htmlFor:"file-upload",className:"btn btn-outline-dark shadow-sm fs-5 col-12",children:[Object(h.jsx)("i",{className:"fa fa-cloud-upload"})," Choose File"]}),Object(h.jsx)("input",{id:"file-upload",type:"file",onChange:e.handleFiles,className:"d-none"}),Object(h.jsx)("p",{className:"fst-italic pt-1",Style:"font-size: 0.9rem;",children:e.fileName?e.fileName:"No File"})]})},N=function(e){return Object(h.jsx)("div",{className:"card shadow-sm rounded-0",children:Object(h.jsxs)("div",{className:"row justify-content-center pt-3",children:[Object(h.jsx)(g,{fileName:e.fileName,handleFiles:e.handleFiles}),Object(h.jsx)("div",{className:"col-7",children:Object(h.jsx)("button",{className:"btn btn-outline-dark shadow-sm fs-5 col-12",onClick:e.clearCanvas,children:"Clear All"})})]})})};var w=function(){var e=Object(n.useState)({red:0,green:0,blue:0,alpha:1}),t=Object(u.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)({red:255,green:255,blue:255,alpha:1}),o=Object(u.a)(s,2),m=o[0],f=o[1],O=1===a.alpha?"rgb(".concat(a.red,", ").concat(a.green,", ").concat(a.blue,")"):"rgba(".concat(a.red,", ").concat(a.green,", ").concat(a.blue,", ").concat(a.alpha,")"),g=1===m.alpha?"rgb(".concat(m.red,", ").concat(m.green,", ").concat(m.blue,")"):"rgba(".concat(m.red,", ").concat(m.green,", ").concat(m.blue,", ").concat(m.alpha,")"),w=Object(n.useState)(5),C=Object(u.a)(w,2),y=C[0],S=C[1],k=Object(n.useState)({x:0,y:0}),E=Object(u.a)(k,2),R=E[0],z=E[1],I=Object(n.useState)(""),B=Object(u.a)(I,2),D=B[0],A=B[1],L=Object(n.useState)([]),F=Object(u.a)(L,2),U=F[0],M=F[1],P=Object(n.useState)(!1),T=Object(u.a)(P,2),J=T[0],W=T[1],X=Object(n.useState)(!0),Y=Object(u.a)(X,2),q=Y[0],G=Y[1],H=Object(n.useState)(!1),K=Object(u.a)(H,2),Q=K[0],V=K[1],Z=Object(n.useRef)(null),$=Object(n.useRef)(null),_=function(){var e=Object(j.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://paintmee.herokuapp.com");case 2:return t=e.sent,a=t.json(),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){!function(){var e=Z.current.getContext("2d");e.lineCap="round",e.strokeStyle=O,e.lineWidth=y,$.current=e}(),_().then((function(e){G(!1),M(e)}))}),[]);var ee=function(e){A("");var t=Z.current,a=t.getContext("2d");a.fillStyle="rgba(255, 255, 255, 1)",a.fillRect(0,0,t.width,t.height);var n=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"image/png",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:512,n=atob(e),c=[],s=0;s<n.length;s+=a){for(var r=n.slice(s,s+a),l=new Array(r.length),i=0;i<r.length;i++)l[i]=r.charCodeAt(i);var o=new Uint8Array(l);c.push(o)}return new Blob(c,{type:t})}(e.target.src.split(",")[1].trim()),c=new Image;c.src=URL.createObjectURL(n),c.onload=function(){a.drawImage(c,0,0,t.width,t.height)}},te=function(){var e=Object(j.a)(d.a.mark((function e(){var t,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return G(!0),t=Z.current,a=t.toDataURL(),e.next=5,fetch("https://paintmee.herokuapp.com",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({src:a})});case 5:n=e.sent,G(!1),200===n.status?M([].concat(Object(r.a)(U),[{src:a}])):(401===n.status&&alert("Error reading from database."),402===n.status&&alert("Server reached max limit, please delete images."),403===n.status&&alert("Error with image src pattern."),404===n.status&&alert("Error saving image to database."));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return G(!0),e.next=3,fetch("https://paintmee.herokuapp.com",{method:"DELETE"});case 3:t=e.sent,G(!1),200===t.status?M([]):405===t.status&&alert("Error deleting images.");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsx)(v,{brushSize:y,setBrushSize:S,offset:R,saveImage:te,deleteAll:ae,images:U,loadImage:ee,expandCanvas:J,setExpandCanvas:W}),Object(h.jsx)("div",{className:"center pt-4",children:Object(h.jsxs)("div",{className:J?"row col-12":"row col-9",children:[Object(h.jsx)("div",{className:"col",children:Object(h.jsx)(x,{title:"Brush Color",color:a,changeColor:function(e){var t=e.target,n=t.name,s=t.value;c(Object(i.a)(Object(i.a)({},a),{},Object(l.a)({},n,s)))},rgbColor:O})}),Object(h.jsxs)("div",{className:"col",children:[Object(h.jsx)(b,{startDrawing:function(e){var t=e.nativeEvent,a=Z.current.getContext("2d");a.strokeStyle=O,a.lineWidth=y;var n=t.offsetX,c=t.offsetY;$.current.beginPath(),$.current.moveTo(n,c),V(!0)},finishDrawing:function(){$.current.closePath(),V(!1)},draw:function(e){var t=e.nativeEvent;if(Q){var a=t.offsetX,n=t.offsetY;$.current.lineTo(a,n),$.current.stroke(),z({x:a,y:n})}},canvasRef:Z,expandCanvas:J}),Object(h.jsx)(N,{fileName:D,handleFiles:function(e){if(e.target.files.length){var t=e.target.files[0];A(t.name);var a=Z.current,n=a.getContext("2d"),c=new Image;c.src=URL.createObjectURL(t),c.onload=function(){n.drawImage(c,0,0,a.width,a.height)}}},clearCanvas:function(){A(""),z({x:0,y:0}),f({red:255,green:255,blue:255,alpha:1});var e=Z.current,t=e.getContext("2d");t.fillStyle="rgba(255, 255, 255, 1)",t.fillRect(0,0,e.width,e.height)}}),Object(h.jsx)(p,{saveImage:te,deleteAll:ae,images:U,loadImage:ee,loader:q})]}),Object(h.jsx)("div",{className:"col",children:Object(h.jsx)(x,{title:"Background Color",color:m,changeColor:function(e){var t=e.target,a=t.name,n=t.value;f(Object(i.a)(Object(i.a)({},m),{},Object(l.a)({},a,n)));var c=Z.current,s=c.getContext("2d");s.fillStyle=g,s.fillRect(0,0,c.width,c.height)},rgbColor:g})})]})})]})};a(44);s.a.render(Object(h.jsx)(w,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.c6c6406b.chunk.js.map