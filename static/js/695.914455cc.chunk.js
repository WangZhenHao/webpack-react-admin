"use strict";(self.webpackChunkwebapck_react_admin=self.webpackChunkwebapck_react_admin||[]).push([[695],{3441:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var a=n(7295),c=n(4307),l=n(8501);const s=n.p+"static/media/admin.0ea3aa3091602971f853.png",r={headerWrap:"component_headerWrap__DBCwf",leftWrap:"component_leftWrap__tjlwY",rightwrap:"component_rightwrap__Z15br",imgblock:"component_imgblock__FgB23",silderWrap:"component_silderWrap__8LFPk",with80:"component_with80__vPi8y",iconArrow:"component_iconArrow__rnDVC",tagWrap:"component_tagWrap__K5rFN",tagActive:"component_tagActive__jEYos",Content:"component_Content__+1Zrn"};var i=n(5375),o=n(6579),d=n(184);function p(){const e=(0,o.T)(),t=[{key:"1",label:(0,d.jsx)("span",{className:"text-center",onClick:()=>{c.Z.confirm({okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",okType:"danger",title:"\u786e\u5b9a\u9000\u51fa\u767b\u5f55\u561b\uff1f",onOk(){e((0,i.rB)())}})},children:"\u9000\u51fa\u767b\u5f55"})}];return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"".concat(r.headerWrap," flex justify-between items-center"),children:[(0,d.jsx)("div",{className:r.leftWrap,children:"React\u7248\u672c-\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf"}),(0,d.jsx)("div",{className:r.rightwrap,children:(0,d.jsx)(l.Z,{menu:{items:t},children:(0,d.jsxs)("div",{className:"flex items-center text-14px text-color-f",children:[(0,d.jsx)("img",{className:r.imgblock,src:s,alt:"\u5934\u50cf"}),(0,d.jsx)("span",{className:"pl-6px pr-4px",children:"\u7ba1\u7406\u5458"}),(0,d.jsx)(a.Z,{className:"text-12px"})]})})})]})})}var h=n(3943),m=n(2791);function x(e){const{icon:t,className:n}=e,a=h;return m.createElement(a[t],{className:n})}var f=n(2744);function u(e,t){let n=[];t=t||"0";for(let a of e)if(a.parentId===t){let t=u(e,a.id);t.length>0&&(a.child=t),n.push(a)}return j(n,"sort","child")}function j(e,t,n){let a=null,c=e.length;for(let l=0;l<c;l++){const s=e[l][n];s&&s.length&&j(s,t,n);for(let n=0;n<c-1;n++)e[n][t]>e[n+1][t]&&(a=e[n],e[n]=e[n+1],e[n+1]=a)}return e}var _=n(7689);function g(e){const t=[];for(let n of e){const e={label:n.name,key:n.path?n.path:n.name,icon:n.icon?(0,d.jsx)(x,{icon:n.icon}):"",children:null};if(n.child&&n.child.length){const t=g(n.child);e.children=t}t.push(e)}return t}function v(e,t,n){let a="";for(let c of t){if(c.children&&c.children.length)return a=v(e,c.children,c),a;if(c.key===e)return n?n.key:c.key}return a}function k(){const e=(0,o.C)(i.S8),t=(0,_.TH)(),n=(0,_.s0)(),[a,c]=(0,m.useState)([t.pathname]),l=g(u(JSON.parse(JSON.stringify(null===e||void 0===e?void 0:e.list)),"0")),[s]=(0,m.useState)([v(t.pathname,l)]),[p,h]=(0,m.useState)(!1);return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"".concat(r.silderWrap," relative  ").concat(p?r.with80:""," "),children:[(0,d.jsx)(f.Z,{inlineCollapsed:p,theme:"dark",mode:"inline",items:l,onSelect:e=>{console.log(e),n(e.key),c([e.key])},defaultSelectedKeys:a,defaultOpenKeys:s}),(0,d.jsx)("div",{className:"".concat(r.iconArrow," text-color-f absolute"),onClick:()=>{h(!p)},children:p?(0,d.jsx)(x,{icon:"LeftOutlined",className:"text-14px"}):(0,d.jsx)(x,{icon:"RightOutlined",className:"text-14px"})})]})})}var N=n(952);function w(){const e=(0,o.C)(i.S8),[t,n]=(0,m.useState)([]),a=(0,_.TH)(),c=(0,_.s0)();function l(){(0,m.useEffect)((()=>{var c;const l=null===e||void 0===e||null===(c=e.list)||void 0===c?void 0:c.find((e=>e.path===a.pathname));l&&-1===t.findIndex((e=>e.path===l.path))&&n([l,...t])}));const l=t.map(((e,l)=>(0,d.jsx)(N.Z,{className:"".concat(e.path===a.pathname?r.tagActive:""),closeIcon:!0,onClick:()=>(e=>{c(e.path)})(e),onClose:e=>{((e,c)=>{e.preventDefault(),t[c].path!==a.pathname&&n((e=>e.filter(((e,t)=>t!==c))))})(e,l)},children:e.name},e.path)));return(0,d.jsx)(d.Fragment,{children:l})}return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{className:"".concat(r.tagWrap," flex w-full items-center"),children:(0,d.jsx)(l,{})})})}function C(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(p,{}),(0,d.jsxs)("div",{className:"flex",children:[(0,d.jsx)(k,{}),(0,d.jsxs)("div",{className:"flex-auto",children:[(0,d.jsx)(w,{}),(0,d.jsx)("div",{className:r.Content,children:(0,d.jsx)(_.j3,{})})]})]})]})}}}]);
//# sourceMappingURL=695.914455cc.chunk.js.map