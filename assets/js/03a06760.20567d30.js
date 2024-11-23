"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["37874"],{97199:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>d,default:()=>f,assets:()=>h,toc:()=>p,frontMatter:()=>u});var r=JSON.parse('{"id":"api/plugins/plugin-google-analytics","title":"\uD83D\uDCE6 plugin-google-analytics","description":"The default Google Analytics plugin. It is a JavaScript library for measuring how users interact with your website in the production build. If you are using Google Analytics 4 you might need to consider using plugin-google-gtag instead.","source":"@site/docs/api/plugins/plugin-google-analytics.mdx","sourceDirName":"api/plugins","slug":"/api/plugins/@docusaurus/plugin-google-analytics","permalink":"/docs/api/plugins/@docusaurus/plugin-google-analytics","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugins/plugin-google-analytics.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1732292036000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"slug":"/api/plugins/@docusaurus/plugin-google-analytics"},"sidebar":"api","previous":{"title":"\uD83D\uDCE6 plugin-debug","permalink":"/docs/api/plugins/@docusaurus/plugin-debug"},"next":{"title":"\uD83D\uDCE6 plugin-google-gtag","permalink":"/docs/api/plugins/@docusaurus/plugin-google-gtag"}}'),s=n("24246"),l=n("80980"),a=n("15398"),o=n("58636"),i=n("32240"),c=n("66359");let u={sidebar_position:6,slug:"/api/plugins/@docusaurus/plugin-google-analytics"},d="\uD83D\uDCE6 plugin-google-analytics",h={},p=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example configuration",id:"ex-config",level:3}];function g(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"-plugin-google-analytics",children:"\uD83D\uDCE6 plugin-google-analytics"})}),"\n","\n",(0,s.jsxs)(t.p,{children:["The default ",(0,s.jsx)(t.a,{href:"https://developers.google.com/analytics/devguides/collection/analyticsjs/",children:"Google Analytics"})," plugin. It is a JavaScript library for measuring how users interact with your website ",(0,s.jsx)(t.strong,{children:"in the production build"}),". If you are using Google Analytics 4 you might need to consider using ",(0,s.jsx)(t.a,{href:"/docs/api/plugins/@docusaurus/plugin-google-gtag",children:"plugin-google-gtag"})," instead."]}),"\n",(0,s.jsxs)(t.admonition,{title:"Deprecated",type:"danger",children:[(0,s.jsxs)(t.p,{children:["This plugin is ",(0,s.jsx)(t.strong,{children:"deprecated"})," and became useless on July 1, 2023."]}),(0,s.jsxs)(t.p,{children:["Google is ",(0,s.jsx)(t.a,{href:"https://blog.google/products/marketingplatform/analytics/prepare-for-future-with-google-analytics-4/",children:"moving away from Universal Analytics"}),"."]}),(0,s.jsxs)(t.p,{children:["If you are still using this plugin with a ",(0,s.jsx)(t.code,{children:"UA-*"})," tracking id, you should create a Google Analytics 4 account as soon as possible, and use ",(0,s.jsx)(t.a,{href:"/docs/api/plugins/@docusaurus/plugin-google-gtag",children:(0,s.jsx)(t.code,{children:"@docusaurus/plugin-google-gtag"})})," instead of this plugin. More details ",(0,s.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/issues/7221",children:"here"}),"."]})]}),"\n",(0,s.jsx)(t.admonition,{title:"production only",type:"warning",children:(0,s.jsxs)(t.p,{children:["This plugin is always inactive in development and ",(0,s.jsx)(t.strong,{children:"only active in production"})," to avoid polluting the analytics statistics."]})}),"\n",(0,s.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,s.jsx)(o.Z,{value:"npm",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm install --save @docusaurus/plugin-google-analytics\n"})})}),(0,s.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"yarn add @docusaurus/plugin-google-analytics\n"})})}),(0,s.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"pnpm add @docusaurus/plugin-google-analytics\n"})})})]}),"\n",(0,s.jsxs)(t.admonition,{type:"tip",children:[(0,s.jsxs)(t.p,{children:["If you use the preset ",(0,s.jsx)(t.code,{children:"@docusaurus/preset-classic"}),", you don't need to install this plugin as a dependency."]}),(0,s.jsxs)(t.p,{children:["You can configure this plugin through the ",(0,s.jsx)(t.a,{href:"/docs/using-plugins#docusauruspreset-classic",children:"preset options"}),"."]})]}),"\n",(0,s.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(t.p,{children:"Accepted fields:"}),"\n",(0,s.jsx)(i.Z,{children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"trackingID"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Required"})}),(0,s.jsx)(t.td,{children:"The tracking ID of your analytics service."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"anonymizeIP"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"boolean"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:"Whether the IP should be anonymized when sending requests."})]})]})]})}),"\n",(0,s.jsx)(t.h3,{id:"ex-config",children:"Example configuration"}),"\n",(0,s.jsx)(t.p,{children:"You can configure this plugin through preset options or plugin options."}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"Most Docusaurus users configure this plugin through the preset options."})}),"\n","\n",(0,s.jsx)(c.Z,{pluginName:"@docusaurus/plugin-google-analytics",presetOptionName:"googleAnalytics",code:"{\n  trackingID: 'UA-141789564-1',\n  anonymizeIP: true,\n}"})]})}function f(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},58636:function(e,t,n){n.d(t,{Z:()=>a});var r=n("24246");n("27378");var s=n("90496");let l="tabItem_pnkT";function a(e){let{children:t,hidden:n,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(l,a),hidden:n,children:t})}},15398:function(e,t,n){n.d(t,{Z:()=>y});var r=n("24246"),s=n("27378"),l=n("90496"),a=n("54947"),o=n("3620"),i=n("844"),c=n("97486"),u=n("32263"),d=n("16971");function h(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:t,tabValues:n}=e;return n.some(e=>e.value===t)}var g=n("71607");let f="tabList_Qoir",m="tabItem_AQgk";function b(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:i}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),d=e=>{let t=e.currentTarget,n=i[c.indexOf(t)].value;n!==s&&(u(t),o(n))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{let n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1]}}t?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t),children:i.map(e=>{let{value:t,label:n,attributes:a}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>c.push(e),onKeyDown:h,onClick:d,...a,className:(0,l.Z)("tabs__item",m,a?.className,{"tabs__item--active":s===t}),children:n??t},t)})})}function x(e){let{lazy:t,children:n,selectedValue:a}=e,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){let e=o.find(e=>e.props.value===a);return e?(0,s.cloneElement)(e,{className:(0,l.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:o.map((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a}))})}function j(e){let t=function(e){let{defaultValue:t,queryString:n=!1,groupId:r}=e,l=function(e){let{values:t,children:n}=e;return(0,s.useMemo)(()=>{let e=t??h(n).map(e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}});return!function(e){let t=(0,u.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,n])}(e),[a,g]=(0,s.useState)(()=>(function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let r=n.find(e=>e.default)??n[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:t,tabValues:l})),[f,m]=function(e){let{queryString:t=!1,groupId:n}=e,r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n}),a=(0,c._X)(l);return[a,(0,s.useCallback)(e=>{if(!l)return;let t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})},[l,r])]}({queryString:n,groupId:r}),[b,x]=function(e){var t;let{groupId:n}=e;let r=(t=n)?`docusaurus.tab.${t}`:null,[l,a]=(0,d.Nk)(r);return[l,(0,s.useCallback)(e=>{if(!!r)a.set(e)},[r,a])]}({groupId:r}),j=(()=>{let e=f??b;return p({value:e,tabValues:l})?e:null})();return(0,i.Z)(()=>{j&&g(j)},[j]),{selectedValue:a,selectValue:(0,s.useCallback)(e=>{if(!p({value:e,tabValues:l}))throw Error(`Can't select invalid tab value=${e}`);g(e),m(e),x(e)},[m,x,l]),tabValues:l}}(e);return(0,r.jsxs)("div",{className:(0,l.Z)("tabs-container",f),children:[(0,r.jsx)(b,{...t,...e}),(0,r.jsx)(x,{...t,...e})]})}function y(e){let t=(0,g.Z)();return(0,r.jsx)(j,{...e,children:h(e.children)},String(t))}},56497:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(24246);n(27378);var s=n(71607);function l(e){let{children:t,fallback:n}=e;return(0,s.Z)()?(0,r.jsx)(r.Fragment,{children:t?.()}):n??null}},32240:function(e,t,n){n.d(t,{Z:()=>c});var r=n("24246"),s=n("27378"),l=n("96700"),a=n("3620");let o="apiTable_e8hp",i=s.forwardRef(function(e,t){let{name:n,children:o}=e,i=function(e){let t=e;for(;(0,s.isValidElement)(t);)[t]=s.Children.toArray(t.props.children);if("string"!=typeof t)throw Error(`Could not extract APITable row name from JSX tree:
${JSON.stringify(e,null,2)}`);return t}(o),c=n?`${n}-${i}`:i,u=`#${c}`,d=(0,a.k6)();return(0,l.Z)().collectAnchor(c),(0,r.jsx)("tr",{id:c,tabIndex:0,ref:d.location.hash===u?t:void 0,onClick:e=>{let t="TD"===e.target.tagName.toUpperCase(),n=!!window.getSelection()?.toString();t&&!n&&d.push(u)},onKeyDown:e=>{"Enter"===e.key&&d.push(u)},children:o.props.children})});function c(e){let{children:t,name:n}=e;if("table"!==t.type)throw Error("Bad usage of APITable component.\nIt is probably that your Markdown table is malformed.\nMake sure to double-check you have the appropriate number of columns for each table row.");let[l,a]=s.Children.toArray(t.props.children),c=(0,s.useRef)(null);(0,s.useEffect)(()=>{c.current?.focus()},[c]);let u=s.Children.map(a.props.children,e=>(0,r.jsx)(i,{name:n,ref:c,children:e}));return(0,r.jsxs)("table",{className:o,children:[l,(0,r.jsx)("tbody",{children:u})]})}},66359:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(24246);n(27378);var s=n(35363),l=n(90158),a=n(77827),o=n(15398),i=n(58636),c=n(95998);let u=void 0;function d(e){let{code:t,pluginName:n,presetOptionName:d}=e,h=(0,l.zu)(u).path;return(0,r.jsxs)(o.Z,{groupId:"api-config-ex",children:[(0,r.jsxs)(i.Z,{value:"preset",label:(0,a.I)({message:"Preset options"}),children:[(0,r.jsx)("p",{children:(0,r.jsx)(a.Z,{id:"apiDocs.configTabs.presetOptions.description",values:{presetLink:(0,r.jsx)(s.Z,{to:`${h}/using-plugins#docusauruspreset-classic`,children:(0,r.jsx)(a.Z,{children:"preset options"})})},children:"If you use a preset, configure this plugin through the {presetLink}:"})}),(0,r.jsx)(c.Z,{language:"js",title:"docusaurus.config.js",children:`module.exports = {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        // highlight-start
        ${d}: ${t.replace(/\n/g,"\n        ")},
        // highlight-end
      },
    ],
  ],
};`})]}),(0,r.jsxs)(i.Z,{value:"plugin",label:(0,a.I)({message:"Plugin options"}),children:[(0,r.jsx)("p",{children:(0,r.jsx)(a.Z,{children:"If you are using a standalone plugin, provide options directly to the plugin:"})}),(0,r.jsx)(c.Z,{language:"js",title:"docusaurus.config.js",children:`module.exports = {
  plugins: [
    [
      '${n}',
      // highlight-start
      ${t.replace(/\n/g,"\n      ")},
      // highlight-end
    ],
  ],
};`})]})]})}},95998:function(e,t,n){n.d(t,{Z:()=>ea});var r,s={};n.r(s),n.d(s,{ButtonExample:()=>T});var l=n("24246"),a=n("27378"),o=n("90496"),i=n("71607"),c=n("10075"),u=n("77827"),d=n("8156"),h=n("56497"),p=n("85108"),g=n("45245"),f=n("26378");function m(){let{prism:e}=(0,f.L)(),{colorMode:t}=(0,g.I)(),n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var b=n("67490");let x="playgroundContainer_6Ior",j="playgroundHeader_Tvsk",y="playgroundEditor_TySg",v="playgroundPreview_mApW";function k(e){let{children:t}=e;return(0,l.jsx)("div",{className:(0,o.Z)(j),children:t})}function w(){return(0,l.jsx)("div",{children:"Loading..."})}function B(){return(0,l.jsx)(h.Z,{fallback:(0,l.jsx)(w,{}),children:()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(b.Z,{fallback:e=>(0,l.jsx)(p.Ac,{...e}),children:(0,l.jsx)(c.i5,{})}),(0,l.jsx)(c.IF,{})]})})}function N(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(k,{children:(0,l.jsx)(u.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"Result"})}),(0,l.jsx)("div",{className:v,children:(0,l.jsx)(B,{})})]})}function I(){let e=(0,i.Z)();return(0,l.jsx)(c.uz,{className:y},String(e))}function C(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(k,{children:(0,l.jsx)(u.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks",children:"Live Editor"})}),(0,l.jsx)(I,{})]})}let E=e=>`${e};`;function Z(e){let{children:t,transformCode:n,...r}=e,{siteConfig:{themeConfig:s}}=(0,d.Z)(),{liveCodeBlock:{playgroundPosition:a}}=s,o=m(),i=r.metastring?.includes("noInline")??!1;return(0,l.jsx)("div",{className:x,children:(0,l.jsx)(c.nu,{code:t?.replace(/\n$/,""),noInline:i,transformCode:n??E,theme:o,...r,children:"top"===a?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(N,{}),(0,l.jsx)(C,{})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(C,{}),(0,l.jsx)(N,{})]})})})}function T(e){return(0,l.jsx)("button",{type:"button",...e,style:{backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer",...e.style}})}let L={React:a,...a,...s};var A=n("55951"),_=n("6324"),S=n.n(_);let $=/title=(?<quote>["'])(?<title>.*?)\1/,D=/\{(?<range>[\d,-]+)\}/,O={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},M={...O,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},P=Object.keys(O);function R(e,t){let n=e.map(e=>{let{start:n,end:r}=M[e];return`(?:${n}\\s*(${t.flatMap(e=>[e.line,e.block?.start,e.block?.end].filter(Boolean)).join("|")})\\s*${r})`}).join("|");return RegExp(`^\\s*(?:${n})\\s*$`)}let V="codeBlockContainer_jDV4";function q(e){let{as:t,...n}=e,r=function(e){let t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach(e=>{let[r,s]=e,l=t[r];l&&"string"==typeof s&&(n[l]=s)}),n}(m());return(0,l.jsx)(t,{...n,style:r,className:(0,o.Z)(n.className,V,A.k.common.codeBlock)})}let W={codeBlockContent:"codeBlockContent_vx7S",codeBlockTitle:"codeBlockTitle_bdru",codeBlock:"codeBlock_Gebt",codeBlockStandalone:"codeBlockStandalone_i_cY",codeBlockLines:"codeBlockLines_FJaf",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_FU9Q",buttonGroup:"buttonGroup_cUGO"};function H(e){let{children:t,className:n}=e;return(0,l.jsx)(q,{as:"pre",tabIndex:0,className:(0,o.Z)(W.codeBlockStandalone,"thin-scrollbar",n),children:(0,l.jsx)("code",{className:W.codeBlockLines,children:t})})}var z=n("50923");let F={attributes:!0,characterData:!0,childList:!0,subtree:!0};var G=n("7316");let U={codeLine:"codeLine_qRmp",codeLineNumber:"codeLineNumber_dS_J",codeLineContent:"codeLineContent_XF5l"};function J(e){let{line:t,classNames:n,showLineNumbers:r,getLineProps:s,getTokenProps:a}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");let i=s({line:t,className:(0,o.Z)(n,r&&U.codeLine)}),c=t.map((e,t)=>(0,l.jsx)("span",{...a({token:e})},t));return(0,l.jsxs)("span",{...i,children:[r?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{className:U.codeLineNumber}),(0,l.jsx)("span",{className:U.codeLineContent,children:c})]}):c,(0,l.jsx)("br",{})]})}var Q=n("44771");function X(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function Y(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}let K={copyButtonCopied:"copyButtonCopied_OkN_",copyButtonIcons:"copyButtonIcons_OqsO",copyButtonIcon:"copyButtonIcon_PgCn",copyButtonSuccessIcon:"copyButtonSuccessIcon_bsQG"};function ee(e){let{code:t,className:n}=e,[r,s]=(0,a.useState)(!1),i=(0,a.useRef)(void 0),c=(0,a.useCallback)(()=>{(0,Q.Z)(t),s(!0),i.current=window.setTimeout(()=>{s(!1)},1e3)},[t]);return(0,a.useEffect)(()=>()=>window.clearTimeout(i.current),[]),(0,l.jsx)("button",{type:"button","aria-label":r?(0,u.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,u.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,u.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,o.Z)("clean-btn",n,K.copyButton,r&&K.copyButtonCopied),onClick:c,children:(0,l.jsxs)("span",{className:K.copyButtonIcons,"aria-hidden":"true",children:[(0,l.jsx)(X,{className:K.copyButtonIcon}),(0,l.jsx)(Y,{className:K.copyButtonSuccessIcon})]})})}function et(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let en={wordWrapButtonIcon:"wordWrapButtonIcon_MQXS",wordWrapButtonEnabled:"wordWrapButtonEnabled_TBIH"};function er(e){let{className:t,onClick:n,isEnabled:r}=e,s=(0,u.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,l.jsx)("button",{type:"button",onClick:n,className:(0,o.Z)("clean-btn",t,r&&en.wordWrapButtonEnabled),"aria-label":s,title:s,children:(0,l.jsx)(et,{className:en.wordWrapButtonIcon,"aria-hidden":"true"})})}function es(e){var t,n,r;let{children:s,className:i="",metastring:c,title:u,showLineNumbers:d,language:h}=e,{prism:{defaultLanguage:p,magicComments:g}}=(0,f.L)();let b=(t=h??function(e){let t=e.split(" ").find(e=>e.startsWith("language-"));return t?.replace(/language-/,"")}(i)??p,t?.toLowerCase()),x=m(),j=function(){let[e,t]=(0,a.useState)(!1),[n,r]=(0,a.useState)(!1),s=(0,a.useRef)(null),l=(0,a.useCallback)(()=>{let n=s.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t(e=>!e)},[s,e]),o=(0,a.useCallback)(()=>{let{scrollWidth:e,clientWidth:t}=s.current;r(e>t||s.current.querySelector("code").hasAttribute("style"))},[s]);return!function(e,t){let[n,r]=(0,a.useState)(),s=(0,a.useCallback)(()=>{r(e.current?.closest("[role=tabpanel][hidden]"))},[e,r]);(0,a.useEffect)(()=>{s()},[s]),!function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:F,r=(0,z.zX)(t),s=(0,z.Ql)(n);(0,a.useEffect)(()=>{let t=new MutationObserver(r);return e&&t.observe(e,s),()=>t.disconnect()},[e,r,s])}(n,e=>{e.forEach(e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),s())})},{attributes:!0,characterData:!1,childList:!1,subtree:!1})}(s,o),(0,a.useEffect)(()=>{o()},[e,o]),(0,a.useEffect)(()=>(window.addEventListener("resize",o,{passive:!0}),()=>{window.removeEventListener("resize",o)}),[o]),{codeBlockRef:s,isEnabled:e,isCodeScrollable:n,toggle:l}}();let y=(n=c,(n?.match($)?.groups.title??"")||u),{lineClassNames:v,code:k}=function(e,t){let n=e.replace(/\n$/,""),{language:r,magicComments:s,metastring:l}=t;if(l&&D.test(l)){let e=l.match(D).groups.range;if(0===s.length)throw Error(`A highlight range has been given in code block's metastring (\`\`\` ${l}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);let t=s[0].className;return{lineClassNames:Object.fromEntries(S()(e).filter(e=>e>0).map(e=>[e-1,[t]])),code:n}}if(void 0===r)return{lineClassNames:{},code:n};let a=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return R(["js","jsBlock"],t);case"jsx":case"tsx":return R(["js","jsBlock","jsx"],t);case"html":return R(["js","jsBlock","html"],t);case"python":case"py":case"bash":return R(["bash"],t);case"markdown":case"md":return R(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return R(["tex"],t);case"lua":case"haskell":case"sql":return R(["lua"],t);case"wasm":return R(["wasm"],t);case"vb":case"vba":case"visual-basic":return R(["vb","rem"],t);case"vbnet":return R(["vbnet","rem"],t);case"batch":return R(["rem"],t);case"basic":return R(["rem","f90"],t);case"fsharp":return R(["js","ml"],t);case"ocaml":case"sml":return R(["ml"],t);case"fortran":return R(["f90"],t);case"cobol":return R(["cobol"],t);default:return R(P,t)}}(r,s),o=n.split("\n"),i=Object.fromEntries(s.map(e=>[e.className,{start:0,range:""}])),c=Object.fromEntries(s.filter(e=>e.line).map(e=>{let{className:t,line:n}=e;return[n,t]})),u=Object.fromEntries(s.filter(e=>e.block).map(e=>{let{className:t,block:n}=e;return[n.start,t]})),d=Object.fromEntries(s.filter(e=>e.block).map(e=>{let{className:t,block:n}=e;return[n.end,t]}));for(let e=0;e<o.length;){let t=o[e].match(a);if(!t){e+=1;continue}let n=t.slice(1).find(e=>void 0!==e);c[n]?i[c[n]].range+=`${e},`:u[n]?i[u[n]].start=e:d[n]&&(i[d[n]].range+=`${i[d[n]].start}-${e-1},`),o.splice(e,1)}n=o.join("\n");let h={};return Object.entries(i).forEach(e=>{let[t,{range:n}]=e;S()(n).forEach(e=>{h[e]??=[],h[e].push(t)})}),{lineClassNames:h,code:n}}(s,{metastring:c,language:b,magicComments:g});let w=d??(r=c,!!r?.includes("showLineNumbers"));return(0,l.jsxs)(q,{as:"div",className:(0,o.Z)(i,b&&!i.includes(`language-${b}`)&&`language-${b}`),children:[y&&(0,l.jsx)("div",{className:W.codeBlockTitle,children:y}),(0,l.jsxs)("div",{className:W.codeBlockContent,children:[(0,l.jsx)(G.y$,{theme:x,code:k,language:b??"text",children:e=>{let{className:t,style:n,tokens:r,getLineProps:s,getTokenProps:a}=e;return(0,l.jsx)("pre",{tabIndex:0,ref:j.codeBlockRef,className:(0,o.Z)(t,W.codeBlock,"thin-scrollbar"),style:n,children:(0,l.jsx)("code",{className:(0,o.Z)(W.codeBlockLines,w&&W.codeBlockLinesWithNumbering),children:r.map((e,t)=>(0,l.jsx)(J,{line:e,getLineProps:s,getTokenProps:a,classNames:v[t],showLineNumbers:w},t))})})}}),(0,l.jsxs)("div",{className:W.buttonGroup,children:[(j.isEnabled||j.isCodeScrollable)&&(0,l.jsx)(er,{className:W.codeButton,onClick:()=>j.toggle(),isEnabled:j.isEnabled}),(0,l.jsx)(ee,{className:W.codeButton,code:k})]})]})]})}let el=(r=function(e){var t;let{children:n,...r}=e,s=(0,i.Z)();let o=(t=n,a.Children.toArray(t).some(e=>(0,a.isValidElement)(e))?t:Array.isArray(t)?t.join(""):t),c="string"==typeof o?es:H;return(0,l.jsx)(c,{...r,children:o},String(s))},function(e){return e.live?(0,l.jsx)(Z,{scope:L,...e}):(0,l.jsx)(r,{...e})});function ea(e){return(0,l.jsx)(el,{...e})}}}]);