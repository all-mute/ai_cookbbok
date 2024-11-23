"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["86216"],{13313:function(e,n,t){t.d(n,{Z:function(){return s}});let s="/**\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport type {SidebarsConfig} from '@docusaurus/plugin-content-docs';\n\nconst sidebars: SidebarsConfig = {\n  docs: [\n    'introduction',\n    {\n      type: 'category',\n      label: 'Getting Started',\n      link: {\n        type: 'generated-index',\n      },\n      collapsed: false,\n      items: [\n        'installation',\n        'configuration',\n        'playground',\n        'typescript-support',\n      ],\n    },\n    {\n      type: 'category',\n      label: 'Guides',\n      link: {\n        type: 'generated-index',\n        title: 'Docusaurus Guides',\n        description:\n          \"Let's learn about the most important Docusaurus concepts!\",\n        keywords: ['guides'],\n        image: '/img/docusaurus.png',\n      },\n      items: [\n        'guides/creating-pages',\n        {\n          type: 'category',\n          label: 'Docs',\n          link: {\n            type: 'doc',\n            id: 'guides/docs/introduction',\n          },\n          items: [\n            'guides/docs/create-doc',\n            {\n              type: 'category',\n              label: 'Sidebar',\n              link: {\n                type: 'doc',\n                id: 'guides/docs/sidebar/index',\n              },\n              items: [\n                'guides/docs/sidebar/items',\n                'guides/docs/sidebar/autogenerated',\n                'guides/docs/sidebar/multiple-sidebars',\n              ],\n            },\n            'guides/docs/versioning',\n            'guides/docs/multi-instance',\n          ],\n        },\n        'blog',\n        {\n          type: 'category',\n          label: 'Markdown Features',\n          link: {\n            type: 'doc',\n            id: 'guides/markdown-features/introduction',\n          },\n          items: [\n            'guides/markdown-features/react',\n            'guides/markdown-features/tabs',\n            'guides/markdown-features/code-blocks',\n            'guides/markdown-features/admonitions',\n            'guides/markdown-features/toc',\n            'guides/markdown-features/assets',\n            'guides/markdown-features/links',\n            'guides/markdown-features/plugins',\n            'guides/markdown-features/math-equations',\n            'guides/markdown-features/diagrams',\n            'guides/markdown-features/head-metadata',\n          ],\n        },\n        'styling-layout',\n        'swizzling',\n        'static-assets',\n        'search',\n        'browser-support',\n        'seo',\n        'using-plugins',\n        'deployment',\n        {\n          type: 'category',\n          label: 'Internationalization',\n          link: {type: 'doc', id: 'i18n/introduction'},\n          items: [\n            {\n              type: 'doc',\n              id: 'i18n/tutorial',\n              label: 'Tutorial',\n            },\n            {\n              type: 'doc',\n              id: 'i18n/git',\n              label: 'Using Git',\n            },\n            {\n              type: 'doc',\n              id: 'i18n/crowdin',\n              label: 'Using Crowdin',\n            },\n          ],\n        },\n        'guides/whats-next',\n      ],\n    },\n    {\n      type: 'category',\n      label: 'Advanced Guides',\n      link: {type: 'doc', id: 'advanced/index'},\n      items: [\n        'advanced/architecture',\n        'advanced/plugins',\n        'advanced/routing',\n        'advanced/ssg',\n        'advanced/client',\n      ],\n    },\n    {\n      type: 'category',\n      label: 'Upgrading',\n      link: {\n        type: 'doc',\n        id: 'migration/index',\n      },\n      items: [\n        'migration/v3',\n        // TODO do we want to keep upgrade docs for older Docusaurus versions?\n        // It contains links to docs of current version :/\n        {\n          type: 'category',\n          label: 'To Docusaurus v2',\n          items: [\n            'migration/v2/migration-overview',\n            'migration/v2/migration-automated',\n            'migration/v2/migration-manual',\n            'migration/v2/migration-versioned-sites',\n            'migration/v2/migration-translated-sites',\n          ],\n        },\n      ],\n    },\n  ],\n  api: [\n    'cli',\n    'docusaurus-core',\n    {\n      type: 'autogenerated',\n      dirName: 'api',\n    },\n  ],\n};\n\nexport default sidebars;\n"},67014:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>p,assets:()=>d,toc:()=>u,frontMatter:()=>l});var s=JSON.parse('{"id":"guides/docs/sidebar/index","title":"Sidebar","description":"Creating a sidebar is useful to:","source":"@site/docs/guides/docs/sidebar/index.mdx","sourceDirName":"guides/docs/sidebar","slug":"/sidebar","permalink":"/docs/sidebar","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/docs/sidebar/index.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1732292036000,"frontMatter":{"slug":"/sidebar"},"sidebar":"docs","previous":{"title":"Create a doc","permalink":"/docs/create-doc"},"next":{"title":"Sidebar items","permalink":"/docs/sidebar/items"}}'),r=t("24246"),i=t("80980"),a=t("78042"),o=t("95998");let l={slug:"/sidebar"},c="Sidebar",d={},u=[{value:"Default sidebar",id:"default-sidebar",level:2},{value:"Sidebar object",id:"sidebar-object",level:2},{value:"Theme configuration",id:"theme-configuration",level:2},{value:"Hideable sidebar",id:"hideable-sidebar",level:3},{value:"Auto-collapse sidebar categories",id:"auto-collapse-sidebar-categories",level:3},{value:"Passing custom props",id:"passing-custom-props",level:2},{value:"Sidebar Breadcrumbs",id:"sidebar-breadcrumbs",level:2},{value:"Complex sidebars example",id:"complex-sidebars-example",level:2}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"sidebar",children:"Sidebar"})}),"\n",(0,r.jsx)(n.p,{children:"Creating a sidebar is useful to:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Group multiple ",(0,r.jsx)(n.strong,{children:"related documents"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Display a sidebar"})," on each of those documents"]}),"\n",(0,r.jsxs)(n.li,{children:["Provide ",(0,r.jsx)(n.strong,{children:"paginated navigation"}),", with next/previous button"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"To use sidebars on your Docusaurus site:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Define a sidebars file that exports a dictionary of ",(0,r.jsx)(n.a,{href:"#sidebar-object",children:"sidebar objects"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Pass its path to the ",(0,r.jsx)(n.code,{children:"@docusaurus/plugin-docs"})," plugin directly or via ",(0,r.jsx)(n.code,{children:"@docusaurus/preset-classic"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-next-line\n          sidebarPath: './sidebars.js',\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"Node.js runtime",type:"important",children:(0,r.jsx)(n.p,{children:"The sidebars file is run with Node.js. You can't use or import browsers APIs, React or JSX in it."})}),"\n",(0,r.jsx)(n.p,{children:"This section serves as an overview of miscellaneous features of the doc sidebar. In the following sections, we will more systematically introduce the following concepts:"}),"\n","\n",(0,r.jsx)(a.Z,{}),"\n",(0,r.jsx)(n.h2,{id:"default-sidebar",children:"Default sidebar"}),"\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.code,{children:"sidebarPath"})," is unspecified, Docusaurus ",(0,r.jsx)(n.a,{href:"/docs/sidebar/autogenerated",children:"automatically generates a sidebar"})," for you, by using the filesystem structure of the ",(0,r.jsx)(n.code,{children:"docs"})," folder:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  mySidebar: [\n    {\n      type: 'autogenerated',\n      dirName: '.', // generate sidebar from the docs folder (or versioned_docs/<version>)\n    },\n  ],\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can also define your sidebars explicitly."}),"\n",(0,r.jsx)(n.h2,{id:"sidebar-object",children:"Sidebar object"}),"\n",(0,r.jsx)(n.p,{children:"A sidebar at its crux is a hierarchy of categories, doc links, and other hyperlinks."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type Sidebar =\n  // Normal syntax\n  | SidebarItem[]\n  // Shorthand syntax\n  | {[categoryLabel: string]: SidebarItem[]};\n"})}),"\n",(0,r.jsx)(n.p,{children:"For example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  mySidebar: [\n    {\n      type: 'category',\n      label: 'Getting Started',\n      items: [\n        {\n          type: 'doc',\n          id: 'doc1',\n        },\n      ],\n    },\n    {\n      type: 'category',\n      label: 'Docusaurus',\n      items: [\n        {\n          type: 'doc',\n          id: 'doc2',\n        },\n        {\n          type: 'doc',\n          id: 'doc3',\n        },\n      ],\n    },\n    {\n      type: 'link',\n      label: 'Learn more',\n      href: 'https://example.com',\n    },\n  ],\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This is a sidebars file that exports one sidebar, called ",(0,r.jsx)(n.code,{children:"mySidebar"}),". It has three top-level items: two categories and one external link. Within each category, there are a few doc links."]}),"\n",(0,r.jsxs)(n.p,{children:["A sidebars file can contain ",(0,r.jsx)(n.a,{href:"/docs/sidebar/multiple-sidebars",children:(0,r.jsx)(n.strong,{children:"multiple sidebar objects"})}),", identified by their object keys."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type SidebarsFile = {\n  [sidebarID: string]: Sidebar;\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"theme-configuration",children:"Theme configuration"}),"\n",(0,r.jsx)(n.h3,{id:"hideable-sidebar",children:"Hideable sidebar"}),"\n",(0,r.jsxs)(n.p,{children:["By enabling the ",(0,r.jsx)(n.code,{children:"themeConfig.docs.sidebar.hideable"})," option, you can make the entire sidebar hideable, allowing users to better focus on the content. This is especially useful when content is consumed on medium-sized screens (e.g. tablets)."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  themeConfig: {\n    // highlight-start\n    docs: {\n      sidebar: {\n        hideable: true,\n      },\n    },\n    // highlight-end\n  },\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"auto-collapse-sidebar-categories",children:"Auto-collapse sidebar categories"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"themeConfig.docs.sidebar.autoCollapseCategories"})," option would collapse all sibling categories when expanding one category. This saves the user from having too many categories open and helps them focus on the selected section."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  themeConfig: {\n    // highlight-start\n    docs: {\n      sidebar: {\n        autoCollapseCategories: true,\n      },\n    },\n    // highlight-end\n  },\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"passing-custom-props",children:"Passing custom props"}),"\n",(0,r.jsxs)(n.p,{children:["To pass in custom props to a sidebar item, add the optional ",(0,r.jsx)(n.code,{children:"customProps"})," object to any of the items. This is useful to apply site customizations by swizzling React components rendering sidebar items."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"{\n  type: 'doc',\n  id: 'doc1',\n  // highlight-start\n  customProps: {\n    badges: ['new', 'green'],\n    featured: true,\n  },\n  // highlight-end\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"sidebar-breadcrumbs",children:"Sidebar Breadcrumbs"}),"\n",(0,r.jsx)(n.p,{children:'By default, breadcrumbs are rendered at the top, using the "sidebar path" of the current page.'}),"\n",(0,r.jsx)(n.p,{children:"This behavior can be disabled with plugin options:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-next-line\n          breadcrumbs: false,\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"complex-sidebars-example",children:"Complex sidebars example"}),"\n",(0,r.jsx)(n.p,{children:"A real-world example from the Docusaurus site:"}),"\n","\n",(0,r.jsx)(o.Z,{language:"js",title:"sidebars.js",children:t(13313).Z.split("\n").map(e=>!["//","/*","*"].some(n=>e.trim().startsWith(n))&&e).filter(Boolean).join("\n")})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},78042:function(e,n,t){t.d(n,{Z:()=>x});var s=t("24246");t("27378");var r=t("90496"),i=t("85921"),a=t("35363"),o=t("11660"),l=t("82095"),c=t("77827"),d=t("57922");let u={cardContainer:"cardContainer_Uewx",cardTitle:"cardTitle_dwRT",cardDescription:"cardDescription_mCBT"};function h(e){let{href:n,children:t}=e;return(0,s.jsx)(a.Z,{href:n,className:(0,r.Z)("card padding--lg",u.cardContainer),children:t})}function p(e){let{href:n,icon:t,title:i,description:a}=e;return(0,s.jsxs)(h,{href:n,children:[(0,s.jsxs)(d.Z,{as:"h2",className:(0,r.Z)("text--truncate",u.cardTitle),title:i,children:[t," ",i]}),a&&(0,s.jsx)("p",{className:(0,r.Z)("text--truncate",u.cardDescription),title:a,children:a})]})}function m(e){let{item:n}=e,t=(0,i.LM)(n),r=function(){let{selectMessage:e}=(0,o.c)();return n=>e(n,(0,c.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return t?(0,s.jsx)(p,{href:t,icon:"\uD83D\uDDC3\uFE0F",title:n.label,description:n.description??r(n.items.length)}):null}function g(e){let{item:n}=e,t=(0,l.Z)(n.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",r=(0,i.xz)(n.docId??void 0);return(0,s.jsx)(p,{href:n.href,icon:t,title:n.label,description:n.description??r?.description})}function b(e){let{item:n}=e;switch(n.type){case"link":return(0,s.jsx)(g,{item:n});case"category":return(0,s.jsx)(m,{item:n});default:throw Error(`unknown item type ${JSON.stringify(n)}`)}}function f(e){let{className:n}=e,t=(0,i.jA)();return(0,s.jsx)(x,{items:t.items,className:n})}function x(e){let{items:n,className:t}=e;if(!n)return(0,s.jsx)(f,{...e});let a=(0,i.MN)(n);return(0,s.jsx)("section",{className:(0,r.Z)("row",t),children:a.map((e,n)=>(0,s.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,s.jsx)(b,{item:e})},n))})}},11660:function(e,n,t){t.d(n,{c:function(){return l}});var s=t(27378),r=t(8156);let i=["zero","one","two","few","many","other"];function a(e){return i.filter(n=>e.includes(n))}let o={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function l(){let e=function(){let{i18n:{currentLocale:e}}=(0,r.Z)();return(0,s.useMemo)(()=>{try{return function(e){let n=new Intl.PluralRules(e);return{locale:e,pluralForms:a(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${n.message}
`),o}},[e])}();return{selectMessage:(n,t)=>(function(e,n,t){let s=e.split("|");if(1===s.length)return s[0];s.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);let r=t.select(n);return s[Math.min(t.pluralForms.indexOf(r),s.length-1)]})(t,n,e)}}},56497:function(e,n,t){t.d(n,{Z:function(){return i}});var s=t(24246);t(27378);var r=t(71607);function i(e){let{children:n,fallback:t}=e;return(0,r.Z)()?(0,s.jsx)(s.Fragment,{children:n?.()}):t??null}},95998:function(e,n,t){t.d(n,{Z:()=>ea});var s,r={};t.r(r),t.d(r,{ButtonExample:()=>I});var i=t("24246"),a=t("27378"),o=t("90496"),l=t("71607"),c=t("10075"),d=t("77827"),u=t("8156"),h=t("56497"),p=t("85108"),m=t("45245"),g=t("26378");function b(){let{prism:e}=(0,g.L)(),{colorMode:n}=(0,m.I)(),t=e.theme,s=e.darkTheme||t;return"dark"===n?s:t}var f=t("67490");let x="playgroundContainer_6Ior",j="playgroundHeader_Tvsk",y="playgroundEditor_TySg",v="playgroundPreview_mApW";function k(e){let{children:n}=e;return(0,i.jsx)("div",{className:(0,o.Z)(j),children:n})}function w(){return(0,i.jsx)("div",{children:"Loading..."})}function N(){return(0,i.jsx)(h.Z,{fallback:(0,i.jsx)(w,{}),children:()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f.Z,{fallback:e=>(0,i.jsx)(p.Ac,{...e}),children:(0,i.jsx)(c.i5,{})}),(0,i.jsx)(c.IF,{})]})})}function B(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(k,{children:(0,i.jsx)(d.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"Result"})}),(0,i.jsx)("div",{className:v,children:(0,i.jsx)(N,{})})]})}function C(){let e=(0,l.Z)();return(0,i.jsx)(c.uz,{className:y},String(e))}function S(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(k,{children:(0,i.jsx)(d.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks",children:"Live Editor"})}),(0,i.jsx)(C,{})]})}let L=e=>`${e};`;function T(e){let{children:n,transformCode:t,...s}=e,{siteConfig:{themeConfig:r}}=(0,u.Z)(),{liveCodeBlock:{playgroundPosition:a}}=r,o=b(),l=s.metastring?.includes("noInline")??!1;return(0,i.jsx)("div",{className:x,children:(0,i.jsx)(c.nu,{code:n?.replace(/\n$/,""),noInline:l,transformCode:t??L,theme:o,...s,children:"top"===a?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(B,{}),(0,i.jsx)(S,{})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(S,{}),(0,i.jsx)(B,{})]})})})}function I(e){return(0,i.jsx)("button",{type:"button",...e,style:{backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer",...e.style}})}let E={React:a,...a,...r};var Z=t("55951"),D=t("6324"),_=t.n(D);let A=/title=(?<quote>["'])(?<title>.*?)\1/,F=/\{(?<range>[\d,-]+)\}/,$={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},M={...$,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},O=Object.keys($);function P(e,n){let t=e.map(e=>{let{start:t,end:s}=M[e];return`(?:${t}\\s*(${n.flatMap(e=>[e.line,e.block?.start,e.block?.end].filter(Boolean)).join("|")})\\s*${s})`}).join("|");return RegExp(`^\\s*(?:${t})\\s*$`)}let z="codeBlockContainer_jDV4";function H(e){let{as:n,...t}=e,s=function(e){let n={color:"--prism-color",backgroundColor:"--prism-background-color"},t={};return Object.entries(e.plain).forEach(e=>{let[s,r]=e,i=n[s];i&&"string"==typeof r&&(t[i]=r)}),t}(b());return(0,i.jsx)(n,{...t,style:s,className:(0,o.Z)(t.className,z,Z.k.common.codeBlock)})}let R={codeBlockContent:"codeBlockContent_vx7S",codeBlockTitle:"codeBlockTitle_bdru",codeBlock:"codeBlock_Gebt",codeBlockStandalone:"codeBlockStandalone_i_cY",codeBlockLines:"codeBlockLines_FJaf",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_FU9Q",buttonGroup:"buttonGroup_cUGO"};function W(e){let{children:n,className:t}=e;return(0,i.jsx)(H,{as:"pre",tabIndex:0,className:(0,o.Z)(R.codeBlockStandalone,"thin-scrollbar",t),children:(0,i.jsx)("code",{className:R.codeBlockLines,children:n})})}var G=t("50923");let U={attributes:!0,characterData:!0,childList:!0,subtree:!0};var V=t("7316");let q={codeLine:"codeLine_qRmp",codeLineNumber:"codeLineNumber_dS_J",codeLineContent:"codeLineContent_XF5l"};function J(e){let{line:n,classNames:t,showLineNumbers:s,getLineProps:r,getTokenProps:a}=e;1===n.length&&"\n"===n[0].content&&(n[0].content="");let l=r({line:n,className:(0,o.Z)(t,s&&q.codeLine)}),c=n.map((e,n)=>(0,i.jsx)("span",{...a({token:e})},n));return(0,i.jsxs)("span",{...l,children:[s?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:q.codeLineNumber}),(0,i.jsx)("span",{className:q.codeLineContent,children:c})]}):c,(0,i.jsx)("br",{})]})}var Q=t("44771");function X(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function Y(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}let K={copyButtonCopied:"copyButtonCopied_OkN_",copyButtonIcons:"copyButtonIcons_OqsO",copyButtonIcon:"copyButtonIcon_PgCn",copyButtonSuccessIcon:"copyButtonSuccessIcon_bsQG"};function ee(e){let{code:n,className:t}=e,[s,r]=(0,a.useState)(!1),l=(0,a.useRef)(void 0),c=(0,a.useCallback)(()=>{(0,Q.Z)(n),r(!0),l.current=window.setTimeout(()=>{r(!1)},1e3)},[n]);return(0,a.useEffect)(()=>()=>window.clearTimeout(l.current),[]),(0,i.jsx)("button",{type:"button","aria-label":s?(0,d.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,d.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,d.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,o.Z)("clean-btn",t,K.copyButton,s&&K.copyButtonCopied),onClick:c,children:(0,i.jsxs)("span",{className:K.copyButtonIcons,"aria-hidden":"true",children:[(0,i.jsx)(X,{className:K.copyButtonIcon}),(0,i.jsx)(Y,{className:K.copyButtonSuccessIcon})]})})}function en(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let et={wordWrapButtonIcon:"wordWrapButtonIcon_MQXS",wordWrapButtonEnabled:"wordWrapButtonEnabled_TBIH"};function es(e){let{className:n,onClick:t,isEnabled:s}=e,r=(0,d.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,i.jsx)("button",{type:"button",onClick:t,className:(0,o.Z)("clean-btn",n,s&&et.wordWrapButtonEnabled),"aria-label":r,title:r,children:(0,i.jsx)(en,{className:et.wordWrapButtonIcon,"aria-hidden":"true"})})}function er(e){var n,t,s;let{children:r,className:l="",metastring:c,title:d,showLineNumbers:u,language:h}=e,{prism:{defaultLanguage:p,magicComments:m}}=(0,g.L)();let f=(n=h??function(e){let n=e.split(" ").find(e=>e.startsWith("language-"));return n?.replace(/language-/,"")}(l)??p,n?.toLowerCase()),x=b(),j=function(){let[e,n]=(0,a.useState)(!1),[t,s]=(0,a.useState)(!1),r=(0,a.useRef)(null),i=(0,a.useCallback)(()=>{let t=r.current.querySelector("code");e?t.removeAttribute("style"):(t.style.whiteSpace="pre-wrap",t.style.overflowWrap="anywhere"),n(e=>!e)},[r,e]),o=(0,a.useCallback)(()=>{let{scrollWidth:e,clientWidth:n}=r.current;s(e>n||r.current.querySelector("code").hasAttribute("style"))},[r]);return!function(e,n){let[t,s]=(0,a.useState)(),r=(0,a.useCallback)(()=>{s(e.current?.closest("[role=tabpanel][hidden]"))},[e,s]);(0,a.useEffect)(()=>{r()},[r]),!function(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:U,s=(0,G.zX)(n),r=(0,G.Ql)(t);(0,a.useEffect)(()=>{let n=new MutationObserver(s);return e&&n.observe(e,r),()=>n.disconnect()},[e,s,r])}(t,e=>{e.forEach(e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(n(),r())})},{attributes:!0,characterData:!1,childList:!1,subtree:!1})}(r,o),(0,a.useEffect)(()=>{o()},[e,o]),(0,a.useEffect)(()=>(window.addEventListener("resize",o,{passive:!0}),()=>{window.removeEventListener("resize",o)}),[o]),{codeBlockRef:r,isEnabled:e,isCodeScrollable:t,toggle:i}}();let y=(t=c,(t?.match(A)?.groups.title??"")||d),{lineClassNames:v,code:k}=function(e,n){let t=e.replace(/\n$/,""),{language:s,magicComments:r,metastring:i}=n;if(i&&F.test(i)){let e=i.match(F).groups.range;if(0===r.length)throw Error(`A highlight range has been given in code block's metastring (\`\`\` ${i}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);let n=r[0].className;return{lineClassNames:Object.fromEntries(_()(e).filter(e=>e>0).map(e=>[e-1,[n]])),code:t}}if(void 0===s)return{lineClassNames:{},code:t};let a=function(e,n){switch(e){case"js":case"javascript":case"ts":case"typescript":return P(["js","jsBlock"],n);case"jsx":case"tsx":return P(["js","jsBlock","jsx"],n);case"html":return P(["js","jsBlock","html"],n);case"python":case"py":case"bash":return P(["bash"],n);case"markdown":case"md":return P(["html","jsx","bash"],n);case"tex":case"latex":case"matlab":return P(["tex"],n);case"lua":case"haskell":case"sql":return P(["lua"],n);case"wasm":return P(["wasm"],n);case"vb":case"vba":case"visual-basic":return P(["vb","rem"],n);case"vbnet":return P(["vbnet","rem"],n);case"batch":return P(["rem"],n);case"basic":return P(["rem","f90"],n);case"fsharp":return P(["js","ml"],n);case"ocaml":case"sml":return P(["ml"],n);case"fortran":return P(["f90"],n);case"cobol":return P(["cobol"],n);default:return P(O,n)}}(s,r),o=t.split("\n"),l=Object.fromEntries(r.map(e=>[e.className,{start:0,range:""}])),c=Object.fromEntries(r.filter(e=>e.line).map(e=>{let{className:n,line:t}=e;return[t,n]})),d=Object.fromEntries(r.filter(e=>e.block).map(e=>{let{className:n,block:t}=e;return[t.start,n]})),u=Object.fromEntries(r.filter(e=>e.block).map(e=>{let{className:n,block:t}=e;return[t.end,n]}));for(let e=0;e<o.length;){let n=o[e].match(a);if(!n){e+=1;continue}let t=n.slice(1).find(e=>void 0!==e);c[t]?l[c[t]].range+=`${e},`:d[t]?l[d[t]].start=e:u[t]&&(l[u[t]].range+=`${l[u[t]].start}-${e-1},`),o.splice(e,1)}t=o.join("\n");let h={};return Object.entries(l).forEach(e=>{let[n,{range:t}]=e;_()(t).forEach(e=>{h[e]??=[],h[e].push(n)})}),{lineClassNames:h,code:t}}(r,{metastring:c,language:f,magicComments:m});let w=u??(s=c,!!s?.includes("showLineNumbers"));return(0,i.jsxs)(H,{as:"div",className:(0,o.Z)(l,f&&!l.includes(`language-${f}`)&&`language-${f}`),children:[y&&(0,i.jsx)("div",{className:R.codeBlockTitle,children:y}),(0,i.jsxs)("div",{className:R.codeBlockContent,children:[(0,i.jsx)(V.y$,{theme:x,code:k,language:f??"text",children:e=>{let{className:n,style:t,tokens:s,getLineProps:r,getTokenProps:a}=e;return(0,i.jsx)("pre",{tabIndex:0,ref:j.codeBlockRef,className:(0,o.Z)(n,R.codeBlock,"thin-scrollbar"),style:t,children:(0,i.jsx)("code",{className:(0,o.Z)(R.codeBlockLines,w&&R.codeBlockLinesWithNumbering),children:s.map((e,n)=>(0,i.jsx)(J,{line:e,getLineProps:r,getTokenProps:a,classNames:v[n],showLineNumbers:w},n))})})}}),(0,i.jsxs)("div",{className:R.buttonGroup,children:[(j.isEnabled||j.isCodeScrollable)&&(0,i.jsx)(es,{className:R.codeButton,onClick:()=>j.toggle(),isEnabled:j.isEnabled}),(0,i.jsx)(ee,{className:R.codeButton,code:k})]})]})]})}let ei=(s=function(e){var n;let{children:t,...s}=e,r=(0,l.Z)();let o=(n=t,a.Children.toArray(n).some(e=>(0,a.isValidElement)(e))?n:Array.isArray(n)?n.join(""):n),c="string"==typeof o?er:W;return(0,i.jsx)(c,{...s,children:o},String(r))},function(e){return e.live?(0,i.jsx)(T,{scope:E,...e}):(0,i.jsx)(s,{...e})});function ea(e){return(0,i.jsx)(ei,{...e})}}}]);