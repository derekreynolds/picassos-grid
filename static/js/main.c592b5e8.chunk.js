(this["webpackJsonppicassos-grid"]=this["webpackJsonppicassos-grid"]||[]).push([[0],{58:function(e,t,i){},59:function(e,t,i){},60:function(e,t,i){},62:function(e,t,i){},64:function(e,t,i){},65:function(e,t,i){},66:function(e,t,i){"use strict";i.r(t);var n=i(1),c=i.n(n),a=i(22),o=i.n(a),r=(i(58),i(23)),l=i(16),s=(i(59),i(60),i(0)),g=function(e){return Object(s.jsx)("header",{className:"Header",children:e.title})},d=c.a.createContext({imageFile:void 0,setImageFile:function(e){return console.log("No image file")}}),f=function(){return Object(n.useContext)(d)},h=(i(62),function(e){var t=f(),i=(t.imageFile,t.setImageFile);return Object(s.jsxs)("div",{children:[Object(s.jsx)("input",{type:"file",className:"inputFile",name:"imageChooser",id:"imageChooser",onChange:function(t){var n;if(t.persist(),t.target.files&&(null===(n=t.target.files)||void 0===n?void 0:n.length)>0){var c=URL.createObjectURL(t.target.files[0]),a=new Image;a.src=c,a.onload=function(){i({file:c,loaded:!0,height:a.height,width:a.width});var t={grid:{height:a.height,width:a.width,pixels:e.config.grid.pixels,opacity:e.config.grid.opacity}};e.setConfig(t)}}},accept:"image/png, image/jpeg"}),Object(s.jsx)("label",{htmlFor:"imageChooser",children:"Choose image"})]})}),u=i(3),j=(i(64),function(e){var t=f().imageFile,i=function(e,t){var i=Object(n.useRef)();return c.a.useEffect((function(){return e(u.d(i.current)),function(){}}),t),i}((function(i){var n=e.config.grid.height+100,c=e.config.grid.width+100,a=50,o=50,r=c-o-a,l=n-50-50,s=r/e.config.grid.pixels,g=l/e.config.grid.pixels,d=u.c().domain([0,s]).range([0,r]),f=u.c().domain([0,g]).range([l,0]),h=u.a(d).tickSize(-l).ticks(s),j=u.b(f).tickSize(-r).ticks(g);i.selectAll("*").remove(),i.attr("height",n-50).attr("width",c),i.append("image").attr("xlink:href",null===t||void 0===t?void 0:t.file).attr("height",l).attr("width",r).attr("x",a).attr("y",0);var p=i.append("g").attr("class","x axis-grid").attr("transform","translate(50,"+l+")").style("color",e.config.grid.color).call(h);p.selectAll("text").style("text-anchor","end").attr("dx","1.5em").attr("dy",".15em").attr("transform","rotate(90)"),p.selectAll("line").style("opacity",e.config.grid.opacity),i.append("g").attr("class","y axis-grid").attr("transform","translate("+o+", 0)").style("color",e.config.grid.color).call(j).selectAll("line").style("opacity",e.config.grid.opacity).selectAll("text").style("text-anchor","end")}),[e]);return Object(s.jsx)("div",{children:Object(s.jsx)("svg",{ref:i})})}),p=(i(65),function(e){return Object(s.jsxs)("div",{className:"control-panel",children:[Object(s.jsx)("label",{htmlFor:"pixels",children:"Pixels"}),Object(s.jsx)("input",{type:"number",id:"pixels",name:"pixels",value:e.config.grid.pixels,min:"1",max:"100",onChange:function(t){var i=Object.assign({},e.config);i.grid.pixels=parseInt(t.target.value),e.updateConfig(i)}}),Object(s.jsx)("label",{htmlFor:"opacity",children:"Opacity"}),Object(s.jsx)("input",{type:"number",id:"opacity",name:"opacity",value:e.config.grid.opacity,min:"0",max:"1",step:"0.1",onChange:function(t){var i=Object.assign({},e.config);i.grid.opacity=parseFloat(t.target.value),e.updateConfig(i)}}),Object(s.jsx)("label",{htmlFor:"color",children:"Color"}),Object(s.jsxs)("select",{name:"color",id:"color",value:e.config.grid.color,onChange:function(t){var i=Object.assign({},e.config);i.grid.color=t.target.value,e.updateConfig(i)},children:[Object(s.jsx)("option",{value:"#000000",children:"Black"}),Object(s.jsx)("option",{value:"#ffffff",children:"White"})]})]})});var x=function(){var e=c.a.useState({file:void 0,loaded:!1,height:0,width:0}),t=Object(l.a)(e,2),i=t[0],a=t[1],o=Object(n.useState)({grid:{width:i.width,height:i.height,pixels:20,opacity:.5,color:"#000000"}}),f=Object(l.a)(o,2),u=f[0],x=f[1];return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(g,{title:"Picasso's Grid"}),Object(s.jsx)(d.Provider,{value:{imageFile:i,setImageFile:a},children:Object(s.jsxs)("section",{children:[i.loaded&&Object(s.jsx)(j,{config:u}),Object(s.jsx)(p,{config:u,updateConfig:function(e){x(Object(r.a)({},e))}}),Object(s.jsx)(h,{config:u,setConfig:x})]})})]})},b=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,67)).then((function(t){var i=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;i(e),n(e),c(e),a(e),o(e)}))};o.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(x,{})}),document.getElementById("root")),b(console.log)}},[[66,1,2]]]);
//# sourceMappingURL=main.c592b5e8.chunk.js.map