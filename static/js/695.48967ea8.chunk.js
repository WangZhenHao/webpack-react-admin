"use strict";(self.webpackChunkwebapck_react_admin=self.webpackChunkwebapck_react_admin||[]).push([[695],{3441:(e,n,t)=>{t.r(n),t.d(n,{default:()=>W});var a=t(7295),c=t(9089),l=t(3368);const r=t.p+"static/media/admin.0ea3aa3091602971f853.png",s={headerWrap:"component_headerWrap__DBCwf",leftWrap:"component_leftWrap__tjlwY",rightwrap:"component_rightwrap__Z15br",imgblock:"component_imgblock__FgB23",silderWrap:"component_silderWrap__8LFPk",with80:"component_with80__vPi8y",iconArrow:"component_iconArrow__rnDVC",tagWrap:"component_tagWrap__K5rFN",tagActive:"component_tagActive__jEYos",contentWrap:"component_contentWrap__dgkm6",Content:"component_Content__+1Zrn"};var i=t(979),o=t(6579),d=t(184);function p(){const e=(0,o.T)(),n=[{key:"1",label:(0,d.jsx)("span",{className:"text-center",onClick:()=>{c.Z.confirm({okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",okType:"danger",title:"\u786e\u5b9a\u9000\u51fa\u767b\u5f55\u561b\uff1f",onOk(){e((0,i.rB)())}})},children:"\u9000\u51fa\u767b\u5f55"})}];return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"".concat(s.headerWrap," flex justify-between items-center"),children:[(0,d.jsx)("div",{className:s.leftWrap,children:"React\u7248\u672c-\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf"}),(0,d.jsx)("div",{className:s.rightwrap,children:(0,d.jsx)(l.Z,{menu:{items:n},children:(0,d.jsxs)("div",{className:"flex items-center text-14px text-color-f",children:[(0,d.jsx)("img",{className:s.imgblock,src:r,alt:"\u5934\u50cf"}),(0,d.jsx)("span",{className:"pl-6px pr-4px",children:"\u7ba1\u7406\u5458"}),(0,d.jsx)(a.Z,{className:"text-12px"})]})})})]})})}var h=t(5223),m=t(2791);function x(e){const{icon:n,className:t}=e,a=h;return m.createElement(a[n],{className:t})}var f=t(2911);function u(e,n){let t=[];n=n||"0";for(let a of e)if(a.parentId===n){let n=u(e,a.id);n.length>0&&(a.child=n),t.push(a)}return _(t,"sort","child")}function _(e,n,t){let a=null,c=e.length;for(let l=0;l<c;l++){const r=e[l][t];r&&r.length&&_(r,n,t);for(let t=0;t<c-1;t++)e[t][n]>e[t+1][n]&&(a=e[t],e[t]=e[t+1],e[t+1]=a)}return e}var j=t(7689);function g(e){const n=[];for(let t of e){const e={label:t.name,key:t.path?t.path:t.name,icon:t.icon?(0,d.jsx)(x,{icon:t.icon}):"",children:null};if(t.child&&t.child.length){const n=g(t.child);e.children=n}n.push(e)}return n}function v(e,n,t){let a="";for(let c of n){if(c.children&&c.children.length)return a=v(e,c.children,c),a;if(c.key===e)return t?t.key:c.key}return a}function k(){const e=(0,o.C)(i.S8),n=(0,j.TH)(),t=(0,j.s0)(),[a,c]=(0,m.useState)([n.pathname]);console.log(a,n.pathname);const l=g(u(JSON.parse(JSON.stringify(null===e||void 0===e?void 0:e.list)),"0")),[r]=(0,m.useState)([v(n.pathname,l)]),[p,h]=(0,m.useState)(!1);return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"".concat(s.silderWrap," relative  ").concat(p?s.with80:""," "),children:[(0,d.jsx)(f.Z,{inlineCollapsed:p,theme:"dark",mode:"inline",items:l,onSelect:e=>{console.log(e),t(e.key),c([e.key])},defaultSelectedKeys:a,defaultOpenKeys:r}),(0,d.jsx)("div",{className:"".concat(s.iconArrow," text-color-f absolute"),onClick:()=>{h(!p)},children:p?(0,d.jsx)(x,{icon:"LeftOutlined",className:"text-14px"}):(0,d.jsx)(x,{icon:"RightOutlined",className:"text-14px"})})]})})}var N=t(952);function w(){const e=(0,o.C)(i.S8),[n,t]=(0,m.useState)([]),a=(0,j.TH)(),c=(0,j.s0)();function l(){(0,m.useEffect)((()=>{var c;const l=null===e||void 0===e||null===(c=e.list)||void 0===c?void 0:c.find((e=>e.path===a.pathname));l&&-1===n.findIndex((e=>e.path===l.path))&&t([l,...n])}));const l=n.map(((e,l)=>(0,d.jsx)(N.Z,{className:"".concat(e.path===a.pathname?s.tagActive:""),style:{cursor:"pointer"},closeIcon:!0,onClick:()=>(e=>{c(e.path)})(e),onClose:e=>{((e,c)=>{e.preventDefault(),n[c].path!==a.pathname&&t((e=>e.filter(((e,n)=>n!==c))))})(e,l)},children:e.name},e.path)));return(0,d.jsx)(d.Fragment,{children:l})}return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{className:"".concat(s.tagWrap," flex w-full items-center"),children:(0,d.jsx)(l,{})})})}function W(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(p,{}),(0,d.jsxs)("div",{className:"flex",children:[(0,d.jsx)(k,{}),(0,d.jsxs)("div",{className:"flex-1 min-w-0 ".concat(s.contentWrap),children:[(0,d.jsx)(w,{}),(0,d.jsx)("div",{className:s.Content,children:(0,d.jsx)(j.j3,{})})]})]})]})}}}]);
//# sourceMappingURL=695.48967ea8.chunk.js.map