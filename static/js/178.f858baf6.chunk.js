"use strict";(self.webpackChunkwebapck_react_admin=self.webpackChunkwebapck_react_admin||[]).push([[178],{7226:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(184);function r(e){const t=e.header?(0,n.jsx)("div",{className:"page-layout_header",children:(0,n.jsx)("div",{className:"header-block",children:e.header})}):null,a=e.content?(0,n.jsx)("div",{className:"page-layout_table",children:e.content}):null,r=e.footer?(0,n.jsx)("div",{className:"page-layout_footer",children:e.footer}):null;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"page-layout",children:[t,a,r]})})}},3996:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(9966),r=a(2791);var l=a(5606),o=a(184);function s(e){const t=e.table,a="boolean"!==typeof e.heightAuto||e.heightAuto,s=(0,r.useRef)(null);("boolean"!==typeof e.keyAuto||e.keyAuto)&&(e.table.dataSource=function(e){let t=0;return e.map((e=>(e.key=t++,e)))}(JSON.parse(JSON.stringify(e.table.dataSource))));const[i,u]=(0,r.useState)({scroll:e.table.scroll||{}}),c=function(e){var t;if(a&&(null===(t=e.table.scroll)||void 0===t||!t.y)){const t=s.current.parentElement,a=null===t||void 0===t?void 0:t.querySelector(".ant-table-thead");if(t&&a){var n;let r=t.getBoundingClientRect().height-a.getBoundingClientRect().height-15;u({scroll:{y:r,x:null===(n=e.table.scroll)||void 0===n?void 0:n.x}})}}};var d,f;return(0,r.useEffect)((()=>{c(e)}),[e]),d="resize",f=(0,l.Ds)(c,100),(0,r.useEffect)((()=>(window.addEventListener(d,f),()=>{window.removeEventListener(d,f)})),[d,f]),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{ref:s,className:"h-full",children:(0,o.jsx)(n.Z,{size:"small",bordered:!0,pagination:!1,...t,...i})})})}},464:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(2791),r=a(7226),l=a(3996),o=a(8962),s=a(9931),i=a(184);const u=(0,n.forwardRef)(((e,t)=>{const[a,u]=(0,n.useState)([]),[c,d]=(0,n.useState)({});let f=(0,n.useRef)(!1);const{showPage:h,method:g,reqeust:m,fromValue:x}=e.attribute,p=g||"get",v="boolean"!==typeof m||m,b="boolean"!==typeof h||m,y=x||{},j={getList(){f.current||(f.current=!0,function(e){return{get:o.xs,post:o.FV}[e]}(p)(e.attribute.url,y).then((e=>{u(e.result),d(e.page||{}),f.current=!1})))},init(){y.page=1,j.getList()}};(0,n.useImperativeHandle)(t,(()=>j)),(0,n.useEffect)((()=>{v&&j.getList()}),[]);return(0,i.jsx)(r.Z,{header:e.header,content:(0,i.jsx)(l.Z,{table:{columns:e.columns,dataSource:a}}),footer:(()=>{if(b)return(0,i.jsx)(s.Z,{defaultCurrent:1,defaultPageSize:20,total:c.total})})()})}))},8178:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var n=a(2791),r=a(107),l=a(2519),o=a(2641),s=a(464),i=a(184);function u(){const e=(0,n.useRef)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(s.Z,{ref:e,header:(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(r.Z,{layout:"inline",children:[(0,i.jsx)(r.Z.Item,{name:"note",label:"\u83dc\u5355\u540d\u79f0",children:(0,i.jsx)(l.Z,{})}),(0,i.jsx)(r.Z.Item,{children:(0,i.jsx)(o.ZP,{onClick:function(){var t;null===(t=e.current)||void 0===t||t.init()},type:"primary",children:"\u641c\u7d22"})})]})}),columns:[{title:"id",dataIndex:"id",key:"id"},{title:"\u83dc\u5355\u540d\u79f0",dataIndex:"name",key:"name"},{title:"\u8def\u5f84",dataIndex:"path",key:"path"},{title:"\u56fe\u6807",dataIndex:"icon",key:"icon"},{title:"\u6392\u5e8f\u503c",dataIndex:"sort",key:"sort"}],attribute:{url:"/data/user/getUserList.json"}})})}}}]);
//# sourceMappingURL=178.f858baf6.chunk.js.map