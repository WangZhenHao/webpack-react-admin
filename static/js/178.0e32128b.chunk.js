"use strict";(self.webpackChunkwebapck_react_admin=self.webpackChunkwebapck_react_admin||[]).push([[178],{7226:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(184);function l(e){const t=e.header?(0,a.jsx)("div",{className:"page-layout_header",children:(0,a.jsx)("div",{className:"header-block",children:e.header})}):null,n=e.content?(0,a.jsx)("div",{className:"page-layout_table",children:e.content}):null,l=e.footer?(0,a.jsx)("div",{className:"page-layout_footer",children:e.footer}):null;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"page-layout",children:[t,n,l]})})}},3996:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(2491),l=n(2791);var r=n(5606),i=n(184);function s(e){const t=e.table,n="boolean"!==typeof e.heightAuto||e.heightAuto,s=(0,l.useRef)(null);("boolean"!==typeof e.keyAuto||e.keyAuto)&&(e.table.dataSource=function(e){let t=0;return e.map((e=>(e.key=t++,e)))}(JSON.parse(JSON.stringify(e.table.dataSource))));const[o,d]=(0,l.useState)({scroll:e.table.scroll||{}}),c=function(){var t;if(n&&(null===(t=e.table.scroll)||void 0===t||!t.y)){const t=s.current.parentElement,n=null===t||void 0===t?void 0:t.querySelector(".ant-table-thead");if(t&&n){var a;let l=t.getBoundingClientRect().height-n.getBoundingClientRect().height-15;d({scroll:{y:l,x:null===(a=e.table.scroll)||void 0===a?void 0:a.x}})}}};var u,h;return(0,l.useEffect)((()=>{c()}),[]),u="resize",h=(0,r.Ds)(c,100),(0,l.useEffect)((()=>(window.addEventListener(u,h),()=>{window.removeEventListener(u,h)})),[u,h]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{ref:s,children:(0,i.jsx)(a.Z,{size:"small",bordered:!0,pagination:!1,...t,...o})})})}},8178:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var a=n(3642),l=n(2791),r=n(7226),i=n(107),s=n(2519),o=n(2641),d=n(3996),c=n(184);function u(){const[e,t]=(0,l.useState)([]);(0,l.useEffect)((()=>{(0,a.A)().then((e=>{t(e.result)}))}),[]);const n=(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(i.Z,{layout:"inline",children:[(0,c.jsx)(i.Z.Item,{name:"note",label:"\u83dc\u5355\u540d\u79f0",children:(0,c.jsx)(s.Z,{})}),(0,c.jsx)(i.Z.Item,{children:(0,c.jsx)(o.ZP,{type:"primary",children:"\u641c\u7d22"})})]})}),u=(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(d.Z,{table:{dataSource:e,columns:[{title:"id",dataIndex:"id",key:"id"},{title:"\u83dc\u5355\u540d\u79f0",dataIndex:"name",key:"name"},{title:"\u8def\u5f84",dataIndex:"path",key:"path"},{title:"\u56fe\u6807",dataIndex:"icon",key:"icon"},{title:"\u6392\u5e8f\u503c",dataIndex:"sort",key:"sort"}]}})});return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(r.Z,{header:n,content:u})})}}}]);
//# sourceMappingURL=178.0e32128b.chunk.js.map