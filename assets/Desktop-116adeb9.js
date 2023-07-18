import{h as j,ax as ve,ay as Ae,az as Te,aA as je,j as Fe,aB as Z,aC as Me,aD as ee,K as _,a4 as ne,J as R,M as S,O as I,d as B,q as ke,a0 as Ee,x as W,S as Le,m as s,k as be,l as G,g as k,s as oe,aE as He,aF as We,aG as Ge,aH as Ue,A as Se,aI as te,aJ as Ne,aK as we,ah as qe,H as Ve,aL as Je,aM as Qe,aN as Xe,aO as Ye,aP as Ze,ak as eo,y as z,aQ as oo,R as _e,Y as ue,T as E,W as no,aR as to,aS as ro,aT as Pe,aU as io,av as ye,o as ao,F as lo,w as L,a as H,u as D,e as ce,I as pe,N as ge,aw as so,_ as uo}from"./app-8b719d51.js";import{b as co,N as fe}from"./Button-856baa80.js";import{N as po}from"./Icon-810fa259.js";import{C as fo}from"./ChevronRight-2c907b71.js";import{N as ho}from"./Image-d88060ac.js";function vo(e){return o=>{o?e.value=o.$el:e.value=null}}function bo(e,o,i){if(!o)return e;const r=j(e.value);let n=null;return ve(e,t=>{n!==null&&window.clearTimeout(n),t===!0?i&&!i.value?r.value=!0:n=window.setTimeout(()=>{r.value=!0},o):r.value=!1}),r}function mo(e={},o){const i=Ae({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:n}=e,t=a=>{switch(a.key){case"Control":i.ctrl=!0;break;case"Meta":i.command=!0,i.win=!0;break;case"Shift":i.shift=!0;break;case"Tab":i.tab=!0;break}r!==void 0&&Object.keys(r).forEach(y=>{if(y!==a.key)return;const v=r[y];if(typeof v=="function")v(a);else{const{stop:N=!1,prevent:P=!1}=v;N&&a.stopPropagation(),P&&a.preventDefault(),v.handler(a)}})},c=a=>{switch(a.key){case"Control":i.ctrl=!1;break;case"Meta":i.command=!1,i.win=!1;break;case"Shift":i.shift=!1;break;case"Tab":i.tab=!1;break}n!==void 0&&Object.keys(n).forEach(y=>{if(y!==a.key)return;const v=n[y];if(typeof v=="function")v(a);else{const{stop:N=!1,prevent:P=!1}=v;N&&a.stopPropagation(),P&&a.preventDefault(),v.handler(a)}})},u=()=>{(o===void 0||o.value)&&(ee("keydown",document,t),ee("keyup",document,c)),o!==void 0&&ve(o,a=>{a?(ee("keydown",document,t),ee("keyup",document,c)):(Z("keydown",document,t),Z("keyup",document,c))})};return Te()?(je(u),Fe(()=>{(o===void 0||o.value)&&(Z("keydown",document,t),Z("keyup",document,c))})):u(),Me(i)}const h="0!important",Re="-1px!important";function V(e){return S(e+"-type",[R("& +",[_("button",{},[S(e+"-type",[I("border",{borderLeftWidth:h}),I("state-border",{left:Re})])])])])}function J(e){return S(e+"-type",[R("& +",[_("button",[S(e+"-type",[I("border",{borderTopWidth:h}),I("state-border",{top:Re})])])])])}const wo=_("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[ne("vertical",{flexDirection:"row"},[ne("rtl",[_("button",[R("&:first-child:not(:last-child)",`
 margin-right: ${h};
 border-top-right-radius: ${h};
 border-bottom-right-radius: ${h};
 `),R("&:last-child:not(:first-child)",`
 margin-left: ${h};
 border-top-left-radius: ${h};
 border-bottom-left-radius: ${h};
 `),R("&:not(:first-child):not(:last-child)",`
 margin-left: ${h};
 margin-right: ${h};
 border-radius: ${h};
 `),V("default"),S("ghost",[V("primary"),V("info"),V("success"),V("warning"),V("error")])])])]),S("vertical",{flexDirection:"column"},[_("button",[R("&:first-child:not(:last-child)",`
 margin-bottom: ${h};
 margin-left: ${h};
 margin-right: ${h};
 border-bottom-left-radius: ${h};
 border-bottom-right-radius: ${h};
 `),R("&:last-child:not(:first-child)",`
 margin-top: ${h};
 margin-left: ${h};
 margin-right: ${h};
 border-top-left-radius: ${h};
 border-top-right-radius: ${h};
 `),R("&:not(:first-child):not(:last-child)",`
 margin: ${h};
 border-radius: ${h};
 `),J("default"),S("ghost",[J("primary"),J("info"),J("success"),J("warning"),J("error")])])])]),yo={size:{type:String,default:void 0},vertical:Boolean},go=B({name:"ButtonGroup",props:yo,setup(e){const{mergedClsPrefixRef:o,mergedRtlRef:i}=ke(e);return Ee("-button-group",wo,o),W(co,e),{rtlEnabled:Le("ButtonGroup",i,o),mergedClsPrefix:o}},render(){const{mergedClsPrefix:e}=this;return s("div",{class:[`${e}-button-group`,this.rtlEnabled&&`${e}-button-group--rtl`,this.vertical&&`${e}-button-group--vertical`],role:"group"},this.$slots)}}),$e=B({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return s("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),me=be("n-dropdown-menu"),re=be("n-dropdown"),xe=be("n-dropdown-option");function he(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function xo(e){return e.type==="group"}function Ie(e){return e.type==="divider"}function ko(e){return e.type==="render"}const Ke=B({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=G(re),{hoverKeyRef:i,keyboardKeyRef:r,lastToggledSubmenuKeyRef:n,pendingKeyPathRef:t,activeKeyPathRef:c,animatedRef:u,mergedShowRef:a,renderLabelRef:y,renderIconRef:v,labelFieldRef:N,childrenFieldRef:P,renderOptionRef:K,nodePropsRef:C,menuPropsRef:g}=o,x=G(xe,null),A=G(me),Q=G(Ne),ie=k(()=>e.tmNode.rawNode),X=k(()=>{const{value:d}=P;return he(e.tmNode.rawNode,d)}),ae=k(()=>{const{disabled:d}=e.tmNode;return d}),le=k(()=>{if(!X.value)return!1;const{key:d,disabled:w}=e.tmNode;if(w)return!1;const{value:O}=i,{value:F}=r,{value:se}=n,{value:M}=t;return O!==null?M.includes(d):F!==null?M.includes(d)&&M[M.length-1]!==d:se!==null?M.includes(d):!1}),de=k(()=>r.value===null&&!u.value),Y=bo(le,300,de),U=k(()=>!!(x!=null&&x.enteringSubmenuRef.value)),q=j(!1);W(xe,{enteringSubmenuRef:q});function T(){q.value=!0}function l(){q.value=!1}function m(){const{parentKey:d,tmNode:w}=e;w.disabled||a.value&&(n.value=d,r.value=null,i.value=w.key)}function f(){const{tmNode:d}=e;d.disabled||a.value&&i.value!==d.key&&m()}function p(d){if(e.tmNode.disabled||!a.value)return;const{relatedTarget:w}=d;w&&!we({target:w},"dropdownOption")&&!we({target:w},"scrollbarRail")&&(i.value=null)}function $(){const{value:d}=X,{tmNode:w}=e;a.value&&!d&&!w.disabled&&(o.doSelect(w.key,w.rawNode),o.doUpdateShow(!1))}return{labelField:N,renderLabel:y,renderIcon:v,siblingHasIcon:A.showIconRef,siblingHasSubmenu:A.hasSubmenuRef,menuProps:g,popoverBody:Q,animated:u,mergedShowSubmenu:k(()=>Y.value&&!U.value),rawNode:ie,hasSubmenu:X,pending:oe(()=>{const{value:d}=t,{key:w}=e.tmNode;return d.includes(w)}),childActive:oe(()=>{const{value:d}=c,{key:w}=e.tmNode,O=d.findIndex(F=>w===F);return O===-1?!1:O<d.length-1}),active:oe(()=>{const{value:d}=c,{key:w}=e.tmNode,O=d.findIndex(F=>w===F);return O===-1?!1:O===d.length-1}),mergedDisabled:ae,renderOption:K,nodeProps:C,handleClick:$,handleMouseMove:f,handleMouseEnter:m,handleMouseLeave:p,handleSubmenuBeforeEnter:T,handleSubmenuAfterEnter:l}},render(){var e,o;const{animated:i,rawNode:r,mergedShowSubmenu:n,clsPrefix:t,siblingHasIcon:c,siblingHasSubmenu:u,renderLabel:a,renderIcon:y,renderOption:v,nodeProps:N,props:P,scrollable:K}=this;let C=null;if(n){const Q=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,r,r.children);C=s(Ce,Object.assign({},Q,{clsPrefix:t,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const g={class:[`${t}-dropdown-option-body`,this.pending&&`${t}-dropdown-option-body--pending`,this.active&&`${t}-dropdown-option-body--active`,this.childActive&&`${t}-dropdown-option-body--child-active`,this.mergedDisabled&&`${t}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},x=N==null?void 0:N(r),A=s("div",Object.assign({class:[`${t}-dropdown-option`,x==null?void 0:x.class],"data-dropdown-option":!0},x),s("div",Se(g,P),[s("div",{class:[`${t}-dropdown-option-body__prefix`,c&&`${t}-dropdown-option-body__prefix--show-icon`]},[y?y(r):te(r.icon)]),s("div",{"data-dropdown-option":!0,class:`${t}-dropdown-option-body__label`},a?a(r):te((o=r[this.labelField])!==null&&o!==void 0?o:r.title)),s("div",{"data-dropdown-option":!0,class:[`${t}-dropdown-option-body__suffix`,u&&`${t}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?s(po,null,{default:()=>s(fo,null)}):null)]),this.hasSubmenu?s(He,null,{default:()=>[s(We,null,{default:()=>s("div",{class:`${t}-dropdown-offset-container`},s(Ge,{show:this.mergedShowSubmenu,placement:this.placement,to:K&&this.popoverBody||void 0,teleportDisabled:!K},{default:()=>s("div",{class:`${t}-dropdown-menu-wrapper`},i?s(Ue,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>C}):C)}))})]}):null);return v?v({node:A,option:r}):A}}),So=B({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=G(me),{renderLabelRef:i,labelFieldRef:r,nodePropsRef:n,renderOptionRef:t}=G(re);return{labelField:r,showIcon:e,hasSubmenu:o,renderLabel:i,nodeProps:n,renderOption:t}},render(){var e;const{clsPrefix:o,hasSubmenu:i,showIcon:r,nodeProps:n,renderLabel:t,renderOption:c}=this,{rawNode:u}=this.tmNode,a=s("div",Object.assign({class:`${o}-dropdown-option`},n==null?void 0:n(u)),s("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},s("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,r&&`${o}-dropdown-option-body__prefix--show-icon`]},te(u.icon)),s("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},t?t(u):te((e=u.title)!==null&&e!==void 0?e:u[this.labelField])),s("div",{class:[`${o}-dropdown-option-body__suffix`,i&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return c?c({node:a,option:u}):a}}),No=B({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:i}=this,{children:r}=e;return s(Ve,null,s(So,{clsPrefix:i,tmNode:e,key:e.key}),r==null?void 0:r.map(n=>{const{rawNode:t}=n;return t.show===!1?null:Ie(t)?s($e,{clsPrefix:i,key:n.key}):n.isGroup?(qe("dropdown","`group` node is not allowed to be put in `group` node."),null):s(Ke,{clsPrefix:i,tmNode:n,parentKey:o,key:n.key})}))}}),_o=B({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return s("div",o,[e==null?void 0:e()])}}),Ce=B({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:i}=G(re);W(me,{showIconRef:k(()=>{const n=o.value;return e.tmNodes.some(t=>{var c;if(t.isGroup)return(c=t.children)===null||c===void 0?void 0:c.some(({rawNode:a})=>n?n(a):a.icon);const{rawNode:u}=t;return n?n(u):u.icon})}),hasSubmenuRef:k(()=>{const{value:n}=i;return e.tmNodes.some(t=>{var c;if(t.isGroup)return(c=t.children)===null||c===void 0?void 0:c.some(({rawNode:a})=>he(a,n));const{rawNode:u}=t;return he(u,n)})})});const r=j(null);return W(Je,null),W(Qe,null),W(Ne,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:o,scrollable:i}=this,r=this.tmNodes.map(n=>{const{rawNode:t}=n;return t.show===!1?null:ko(t)?s(_o,{tmNode:n,key:n.key}):Ie(t)?s($e,{clsPrefix:o,key:n.key}):xo(t)?s(No,{clsPrefix:o,tmNode:n,parentKey:e,key:n.key}):s(Ke,{clsPrefix:o,tmNode:n,parentKey:e,key:n.key,props:t.props,scrollable:i})});return s("div",{class:[`${o}-dropdown-menu`,i&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},i?s(Ye,{contentClass:`${o}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?Xe({clsPrefix:o,arrowStyle:this.arrowStyle}):null)}}),Po=_("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Ze(),_("dropdown-option",`
 position: relative;
 `,[R("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[R("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),_("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[R("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),ne("disabled",[S("pending",`
 color: var(--n-option-text-color-hover);
 `,[I("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),R("&::before","background-color: var(--n-option-color-hover);")]),S("active",`
 color: var(--n-option-text-color-active);
 `,[I("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),R("&::before","background-color: var(--n-option-color-active);")]),S("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[I("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),S("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),S("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[I("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[S("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),I("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[S("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),_("icon",`
 font-size: var(--n-option-icon-size);
 `)]),I("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),I("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[S("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),_("icon",`
 font-size: var(--n-option-icon-size);
 `)]),_("dropdown-menu","pointer-events: all;")]),_("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),_("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),_("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),R(">",[_("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),ne("scrollable",`
 padding: var(--n-padding);
 `),S("scrollable",[I("content",`
 padding: var(--n-padding);
 `)])]),Ro={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},$o=Object.keys(Pe),Io=Object.assign(Object.assign(Object.assign({},Pe),Ro),_e.props),Ko=B({name:"Dropdown",inheritAttrs:!1,props:Io,setup(e){const o=j(!1),i=eo(z(e,"show"),o),r=k(()=>{const{keyField:l,childrenField:m}=e;return oo(e.options,{getKey(f){return f[l]},getDisabled(f){return f.disabled===!0},getIgnored(f){return f.type==="divider"||f.type==="render"},getChildren(f){return f[m]}})}),n=k(()=>r.value.treeNodes),t=j(null),c=j(null),u=j(null),a=k(()=>{var l,m,f;return(f=(m=(l=t.value)!==null&&l!==void 0?l:c.value)!==null&&m!==void 0?m:u.value)!==null&&f!==void 0?f:null}),y=k(()=>r.value.getPath(a.value).keyPath),v=k(()=>r.value.getPath(e.value).keyPath),N=oe(()=>e.keyboard&&i.value);mo({keydown:{ArrowUp:{prevent:!0,handler:ae},ArrowRight:{prevent:!0,handler:X},ArrowDown:{prevent:!0,handler:le},ArrowLeft:{prevent:!0,handler:ie},Enter:{prevent:!0,handler:de},Escape:Q}},N);const{mergedClsPrefixRef:P,inlineThemeDisabled:K}=ke(e),C=_e("Dropdown","-dropdown",Po,io,e,P);W(re,{labelFieldRef:z(e,"labelField"),childrenFieldRef:z(e,"childrenField"),renderLabelRef:z(e,"renderLabel"),renderIconRef:z(e,"renderIcon"),hoverKeyRef:t,keyboardKeyRef:c,lastToggledSubmenuKeyRef:u,pendingKeyPathRef:y,activeKeyPathRef:v,animatedRef:z(e,"animated"),mergedShowRef:i,nodePropsRef:z(e,"nodeProps"),renderOptionRef:z(e,"renderOption"),menuPropsRef:z(e,"menuProps"),doSelect:g,doUpdateShow:x}),ve(i,l=>{!e.animated&&!l&&A()});function g(l,m){const{onSelect:f}=e;f&&ue(f,l,m)}function x(l){const{"onUpdate:show":m,onUpdateShow:f}=e;m&&ue(m,l),f&&ue(f,l),o.value=l}function A(){t.value=null,c.value=null,u.value=null}function Q(){x(!1)}function ie(){U("left")}function X(){U("right")}function ae(){U("up")}function le(){U("down")}function de(){const l=Y();l!=null&&l.isLeaf&&i.value&&(g(l.key,l.rawNode),x(!1))}function Y(){var l;const{value:m}=r,{value:f}=a;return!m||f===null?null:(l=m.getNode(f))!==null&&l!==void 0?l:null}function U(l){const{value:m}=a,{value:{getFirstAvailableNode:f}}=r;let p=null;if(m===null){const $=f();$!==null&&(p=$.key)}else{const $=Y();if($){let d;switch(l){case"down":d=$.getNext();break;case"up":d=$.getPrev();break;case"right":d=$.getChild();break;case"left":d=$.getParent();break}d&&(p=d.key)}}p!==null&&(t.value=null,c.value=p)}const q=k(()=>{const{size:l,inverted:m}=e,{common:{cubicBezierEaseInOut:f},self:p}=C.value,{padding:$,dividerColor:d,borderRadius:w,optionOpacityDisabled:O,[E("optionIconSuffixWidth",l)]:F,[E("optionSuffixWidth",l)]:se,[E("optionIconPrefixWidth",l)]:M,[E("optionPrefixWidth",l)]:De,[E("fontSize",l)]:Oe,[E("optionHeight",l)]:ze,[E("optionIconSize",l)]:Be}=p,b={"--n-bezier":f,"--n-font-size":Oe,"--n-padding":$,"--n-border-radius":w,"--n-option-height":ze,"--n-option-prefix-width":De,"--n-option-icon-prefix-width":M,"--n-option-suffix-width":se,"--n-option-icon-suffix-width":F,"--n-option-icon-size":Be,"--n-divider-color":d,"--n-option-opacity-disabled":O};return m?(b["--n-color"]=p.colorInverted,b["--n-option-color-hover"]=p.optionColorHoverInverted,b["--n-option-color-active"]=p.optionColorActiveInverted,b["--n-option-text-color"]=p.optionTextColorInverted,b["--n-option-text-color-hover"]=p.optionTextColorHoverInverted,b["--n-option-text-color-active"]=p.optionTextColorActiveInverted,b["--n-option-text-color-child-active"]=p.optionTextColorChildActiveInverted,b["--n-prefix-color"]=p.prefixColorInverted,b["--n-suffix-color"]=p.suffixColorInverted,b["--n-group-header-text-color"]=p.groupHeaderTextColorInverted):(b["--n-color"]=p.color,b["--n-option-color-hover"]=p.optionColorHover,b["--n-option-color-active"]=p.optionColorActive,b["--n-option-text-color"]=p.optionTextColor,b["--n-option-text-color-hover"]=p.optionTextColorHover,b["--n-option-text-color-active"]=p.optionTextColorActive,b["--n-option-text-color-child-active"]=p.optionTextColorChildActive,b["--n-prefix-color"]=p.prefixColor,b["--n-suffix-color"]=p.suffixColor,b["--n-group-header-text-color"]=p.groupHeaderTextColor),b}),T=K?no("dropdown",k(()=>`${e.size[0]}${e.inverted?"i":""}`),q,e):void 0;return{mergedClsPrefix:P,mergedTheme:C,tmNodes:n,mergedShow:i,handleAfterLeave:()=>{e.animated&&A()},doUpdateShow:x,cssVars:K?void 0:q,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const e=(r,n,t,c,u)=>{var a;const{mergedClsPrefix:y,menuProps:v}=this;(a=this.onRender)===null||a===void 0||a.call(this);const N=(v==null?void 0:v(void 0,this.tmNodes.map(K=>K.rawNode)))||{},P={ref:vo(n),class:[r,`${y}-dropdown`,this.themeClass],clsPrefix:y,tmNodes:this.tmNodes,style:[t,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:c,onMouseleave:u};return s(Ce,Se(this.$attrs,P,N))},{mergedTheme:o}=this,i={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return s(ro,Object.assign({},to(this.$props,$o),i),{trigger:()=>{var r,n;return(n=(r=this.$slots).default)===null||n===void 0?void 0:n.call(r)}})}}),Co=B({__name:"Desktop",async setup(e){let o,i;const r=navigator.platform.toLowerCase(),n=j("win");r.includes("win")?n.value="win":r.includes("linux")?n.value="linux":r.includes("mac")&&(n.value="mac_arm64"),console.log(n.value);const t=([o,i]=ye(()=>fetch(`${so()}/proxy/https://github.com/alist-org/desktop-release/releases/latest/download/proxy.json`)),o=await o,i(),o),u=([o,i]=ye(()=>t.json()),o=await o,i(),o).version;let a={down:"Download",website:"Website"};const y=[{key:"win",label:"Windows",url:`https://ghproxy.com/https://github.com/alist-org/desktop-release/releases/latest/download/alist-desktop_${u}_x64_en-US.msi`},{key:"mac_arm64",label:"MacOS (Apple Silicon)",url:`https://ghproxy.com/https://github.com/alist-org/desktop-release/releases/latest/download/alist-desktop_${u}_aarch64.dmg`},{key:"mac_x64",label:"MacOS (Intel)",url:`https://ghproxy.com/https://github.com/alist-org/desktop-release/releases/latest/download/alist-desktop_${u}_x64.dmg`},{key:"linux",label:"Linux",url:`https://ghproxy.com/https://github.com/alist-org/desktop-release/releases/latest/download/alist-desktop_${u}_amd64.deb`}],v=k(()=>{var g;return(g=y.find(x=>x.key===n.value))==null?void 0:g.label}),N=k(()=>y.map(g=>({...g,label:`${g.label} ${n.value===g.key?"✅":""}`})));location.pathname.startsWith("/zh/")&&(a={down:"下载",website:"官网"});function P(){var g;window.open((g=y.find(x=>x.key===n.value))==null?void 0:g.url,"_blank")}function K(g){n.value=g}function C(){window.open("https://ad.nn.ci/","_blank")}return(g,x)=>(ao(),lo(D(ge),{align:"center",vertical:"",size:"large"},{default:L(()=>[H(D(ge),{class:"btn"},{default:L(()=>[H(D(fe),{size:"large",type:"info",onClick:C,tertiary:""},{default:L(()=>[ce(pe(D(a).website),1)]),_:1}),H(D(go),null,{default:L(()=>[H(D(Ko),{trigger:"hover",options:N.value,onSelect:K,size:"large"},{default:L(()=>[H(D(fe),{size:"large",type:"primary",tertiary:""},{default:L(()=>[ce("💻"+pe(v.value),1)]),_:1})]),_:1},8,["options"]),H(D(fe),{size:"large",onClick:P,type:"info",secondary:""},{default:L(()=>[ce(pe(D(a).down),1)]),_:1})]),_:1})]),_:1}),H(D(ho),{src:"/img/guide/desktop.png"})]),_:1}))}});const To=uo(Co,[["__scopeId","data-v-7e3c3b99"],["__file","Desktop.vue"]]);export{To as D};