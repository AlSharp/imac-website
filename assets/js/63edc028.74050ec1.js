"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[984],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var l=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,l,o=function(e,t){if(null==e)return{};var r,l,o={},n=Object.keys(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=l.createContext({}),i=function(e){var t=l.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=i(e.components);return l.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=i(r),k=o,b=d["".concat(c,".").concat(k)]||d[k]||p[k]||n;return r?l.createElement(b,a(a({ref:t},u),{},{components:r})):l.createElement(b,a({ref:t},u))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,a=new Array(n);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var i=2;i<n;i++)a[i]=r[i];return l.createElement.apply(null,a)}return l.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9987:(e,t,r)=>{r.d(t,{Z:()=>o});var l=r(7294);const o=function(e){var t=e.id,r=e.className,o=e.src,n=e.alt;return l.createElement("div",{className:"image-wrapper"},l.createElement("img",{id:t,className:r,src:o,alt:n}))}},2873:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>b,frontMatter:()=>c,metadata:()=>u,toc:()=>d});var l=r(7462),o=r(3366),n=(r(7294),r(3905)),a=r(9987),s=["components"],c={id:"guideuserblock",title:"User Block",sidebar_label:"User Block"},i=void 0,u={unversionedId:"guideuserblock",id:"guideuserblock",title:"User Block",description:"Sequence of blocks can be assembled into the user block.",source:"@site/docs/guideUserblock.md",sourceDirName:".",slug:"/guideuserblock",permalink:"/docs/guideuserblock",tags:[],version:"current",lastUpdatedBy:"Albert Sharapov",lastUpdatedAt:1646542271,formattedLastUpdatedAt:"3/5/2022",frontMatter:{id:"guideuserblock",title:"User Block",sidebar_label:"User Block"},sidebar:"docs",previous:{title:"IMAC Editor",permalink:"/docs/imac_editor"},next:{title:"Array Block XYZ Gantry",permalink:"/docs/guideArrayXYZ"}},p={},d=[{value:"Step 1. Selecting blocks",id:"step-1-selecting-blocks",level:2},{value:"Step 2. Creating user block",id:"step-2-creating-user-block",level:2},{value:"Step 3. Add user block",id:"step-3-add-user-block",level:2},{value:"Step 4. Editing user block",id:"step-4-editing-user-block",level:2},{value:"Step 5. Save as new user block",id:"step-5-save-as-new-user-block",level:2}],k={toc:d};function b(e){var t=e.components,r=(0,o.Z)(e,s);return(0,n.kt)("wrapper",(0,l.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Sequence of blocks can be assembled into the user block."),(0,n.kt)("p",null,"Creating user blocks helps making program sequence short and readable. Assume that we have to configure the motors of XY table. To do this we need four blocks: Mode and Profile for each axis. We will create single user block which does the same but occupies less room on the visual programming workspace."),(0,n.kt)("h2",{id:"step-1-selecting-blocks"},"Step 1. Selecting blocks"),(0,n.kt)("p",null,"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"CTRL")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"SHIFT")," + ",(0,n.kt)("inlineCode",{parentName:"p"},"MOUSE LEFT CLICK")," to select blocks. Selected blocks will be highlighted. Click the button as shown on the picture to open user block dialog. The user block dialog will pop up."),(0,n.kt)(a.Z,{src:"/assets/user-block-guide/userblock_1.png",alt:"Selecting blocks",mdxType:"Image"}),(0,n.kt)("h2",{id:"step-2-creating-user-block"},"Step 2. Creating user block"),(0,n.kt)("p",null,"Give the names and pick up the color. There are two fields for names. The first field is the actual name of the block and the second name is for additional information. Both names will be displayed on the block."),(0,n.kt)(a.Z,{src:"/assets/user-block-guide/userblock_2.png",alt:"Creating user block",mdxType:"Image"}),(0,n.kt)("p",null,"Newly created user block will be appeared on the left under the User category."),(0,n.kt)(a.Z,{src:"/assets/user-block-guide/userblock_3.png",alt:"User block",mdxType:"Image"}),(0,n.kt)("h2",{id:"step-3-add-user-block"},"Step 3. Add user block"),(0,n.kt)("p",null,"User block can now be added to the program sequence by dropping it onto visual programming workspace. Click ",(0,n.kt)("inlineCode",{parentName:"p"},"Unfold")," to display the inner blocks."),(0,n.kt)(a.Z,{src:"/assets/user-block-guide/userblock_4.png",alt:"User block",mdxType:"Image"}),(0,n.kt)("h2",{id:"step-4-editing-user-block"},"Step 4. Editing user block"),(0,n.kt)("p",null,"With inner blocks displayed one can edit them, add or remove blocks. Fold blocks when finished editing by clicking ",(0,n.kt)("inlineCode",{parentName:"p"},"Fold"),". "),(0,n.kt)(a.Z,{src:"/assets/user-block-guide/userblock_5.png",alt:"User block",mdxType:"Image"}),(0,n.kt)("p",null,"The blocks will be folded back.\nThere are three options after editing the blocks:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Save"),". User block will be overwritten."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Save as"),". New user block will be created."),(0,n.kt)("li",{parentName:"ul"},"Do nothing. The changes will be saved only within the program sequence.")),(0,n.kt)(a.Z,{src:"/assets/user-block-guide/userblock_4.png",alt:"User block",mdxType:"Image"}),(0,n.kt)("h2",{id:"step-5-save-as-new-user-block"},"Step 5. Save as new user block"),(0,n.kt)("p",null,"Click ",(0,n.kt)("inlineCode",{parentName:"p"},"Save as")," to create new user block. The dialog box shown below will appear on the screen. Choose new names and color. "),(0,n.kt)(a.Z,{src:"/assets/user-block-guide/userblock_6.png",alt:"User block",mdxType:"Image"}),(0,n.kt)("p",null,"Click ",(0,n.kt)("inlineCode",{parentName:"p"},"Save as")," and newly created user block will be displayed on the left."),(0,n.kt)(a.Z,{src:"/assets/user-block-guide/userblock_7.png",alt:"User block",mdxType:"Image"}),(0,n.kt)("p",null,"We done!"))}b.isMDXComponent=!0}}]);