"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[918],{2179:(e,t,a)=>{a.r(t),a.d(t,{default:()=>W});var n=a(7294),l=a(6010),r=a(7462),s=a(5999),i=a(1750);function c(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(i.Z,(0,r.Z)({},t,{subLabel:n.createElement(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement(i.Z,(0,r.Z)({},a,{subLabel:n.createElement(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}var o=a(2263),d=a(9960),m=a(5551),u=a(3725);var v={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function b(e){var t=v[e.versionMetadata.banner];return n.createElement(t,e)}function h(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(d.Z,{to:a,onClick:l},n.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function E(e){var t,a=e.className,r=e.versionMetadata,s=(0,o.Z)().siteConfig.title,i=(0,m.gA)({failfast:!0}).pluginId,c=(0,u.J)(i).savePreferredVersionName,d=(0,m.Jo)(i),v=d.latestDocSuggestion,E=d.latestVersionSuggestion,g=null!=v?v:(t=E).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,l.Z)(a,u.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(b,{siteTitle:s,versionMetadata:r})),n.createElement("div",{className:"margin-top--md"},n.createElement(h,{versionLabel:E.label,to:g.path,onClick:function(){return c(E.name)}})))}function g(e){var t=e.className,a=(0,u.E6)();return a.banner?n.createElement(E,{className:t,versionMetadata:a}):null}function p(e){var t=e.className,a=(0,u.E6)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,u.kM.docs.docVersionBadge,"badge badge--secondary")},n.createElement(s.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}var f=a(1217);function N(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(s.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function Z(e){var t=e.lastUpdatedBy;return n.createElement(s.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function k(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:u.kM.common.lastUpdated},n.createElement(s.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(N,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(Z,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var _=a(6753),L=a(8727);const U="lastUpdated_foO9";function C(e){return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(L.Z,e)))}function T(e){var t=e.editUrl,a=e.lastUpdatedAt,r=e.lastUpdatedBy,s=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(_.Z,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",U)},(a||r)&&n.createElement(k,{lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:r})))}function y(e){var t=e.content.metadata,a=t.editUrl,r=t.lastUpdatedAt,s=t.formattedLastUpdatedAt,i=t.lastUpdatedBy,c=t.tags,o=c.length>0,d=!!(a||r||i);return o||d?n.createElement("footer",{className:(0,l.Z)(u.kM.docs.docFooter,"docusaurus-mt-lg")},o&&n.createElement(C,{tags:c}),d&&n.createElement(T,{editUrl:a,lastUpdatedAt:r,lastUpdatedBy:i,formattedLastUpdatedAt:s})):null}var M=a(1575);const w="tocCollapsible_jdIR",A="tocCollapsibleButton_Fzxq",x="tocCollapsibleContent_MpvI",H="tocCollapsibleExpanded_laf4";var B=a(5002);function D(e){var t,a=e.toc,r=e.className,i=e.minHeadingLevel,c=e.maxHeadingLevel,o=(0,u.uR)({initialState:!0}),d=o.collapsed,m=o.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(w,(t={},t[H]=!d,t),r)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",A),onClick:m},n.createElement(s.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(u.zF,{lazy:!0,className:x,collapsed:d},n.createElement(B.Z,{toc:a,minHeadingLevel:i,maxHeadingLevel:c})))}var V=a(9649);const I="docItemContainer_vinB",S="docItemCol_DM6M",O="tocMobile_TmEX",F="breadcrumbsContainer_Xlws",R="breadcrumbsItemLink_e5ie";var z=a(4996);function P(e){var t=e.children,a=e.href,r=(0,l.Z)("breadcrumbs__link",R);return a?n.createElement(d.Z,{className:r,href:a},t):n.createElement("span",{className:r},t)}function q(e){var t=e.children,a=e.active;return n.createElement("li",{className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})},t)}function J(){var e=(0,z.Z)("/");return n.createElement(q,null,n.createElement(P,{href:e},"\ud83c\udfe0"))}function Q(){var e=(0,u.s1)(),t=(0,u.Ns)();return e?n.createElement("nav",{className:(0,l.Z)(u.kM.docs.docBreadcrumbs,F),"aria-label":"breadcrumbs"},n.createElement("ul",{className:"breadcrumbs"},t&&n.createElement(J,null),e.map((function(t,a){return n.createElement(q,{key:a,active:a===e.length-1},n.createElement(P,{href:t.href},t.label))})))):null}function W(e){var t,a,r=e.content,s=r.metadata,i=r.frontMatter,o=r.assets,d=i.keywords,m=i.hide_title,v=i.hide_table_of_contents,b=i.toc_min_heading_level,h=i.toc_max_heading_level,E=s.description,N=s.title,Z=null!=(t=o.image)?t:i.image,k=!m&&void 0===r.contentTitle,_=(0,u.iP)(),L=!v&&r.toc&&r.toc.length>0,U=L&&("desktop"===_||"ssr"===_);return n.createElement(n.Fragment,null,n.createElement(f.Z,{title:N,description:E,keywords:d,image:Z}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",(a={},a[S]=!v,a))},n.createElement(g,null),n.createElement("div",{className:I},n.createElement("article",null,n.createElement(Q,null),n.createElement(p,null),L&&n.createElement(D,{toc:r.toc,minHeadingLevel:b,maxHeadingLevel:h,className:(0,l.Z)(u.kM.docs.docTocMobile,O)}),n.createElement("div",{className:(0,l.Z)(u.kM.docs.docMarkdown,"markdown")},k&&n.createElement("header",null,n.createElement(V.Z,{as:"h1"},N)),n.createElement(r,null)),n.createElement(y,e)),n.createElement(c,{previous:s.previous,next:s.next}))),U&&n.createElement("div",{className:"col col--3"},n.createElement(M.Z,{toc:r.toc,minHeadingLevel:b,maxHeadingLevel:h,className:u.kM.docs.docTocDesktop}))))}},6753:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(7294),l=a(5999),r=a(7462),s=a(3366),i=a(6010);const c="iconEdit_dcUD";var o=["className"];function d(e){var t=e.className,a=(0,s.Z)(e,o);return n.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(c,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var m=a(3725);function u(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.kM.common.editThisPage},n.createElement(d,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},9649:(e,t,a)=>{a.d(t,{Z:()=>b});var n=a(7462),l=a(3366),r=a(7294),s=a(6010),i=a(5999),c=a(3725);const o="anchorWithStickyNavbar_mojV",d="anchorWithHideOnScrollNavbar_R0VQ";var m=["as","id"],u=["as"];function v(e){var t,a=e.as,u=e.id,v=(0,l.Z)(e,m),b=(0,c.LU)().navbar.hideOnScroll;return u?r.createElement(a,(0,n.Z)({},v,{className:(0,s.Z)("anchor",(t={},t[d]=b,t[o]=!b,t)),id:u}),v.children,r.createElement("a",{className:"hash-link",href:"#"+u,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(a,v)}function b(e){var t=e.as,a=(0,l.Z)(e,u);return"h1"===t?r.createElement("h1",(0,n.Z)({},a,{id:void 0}),a.children):r.createElement(v,(0,n.Z)({as:t},a))}},1750:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),l=a(9960);function r(e){var t=e.permalink,a=e.title,r=e.subLabel;return n.createElement(l.Z,{className:"pagination-nav__link",to:t},r&&n.createElement("div",{className:"pagination-nav__sublabel"},r),n.createElement("div",{className:"pagination-nav__label"},a))}},5002:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7462),l=a(3366),r=a(7294),s=a(3725),i=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function c(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?r.createElement("ul",{className:l?void 0:a},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(c,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function o(e){var t=e.toc,a=e.className,o=void 0===a?"table-of-contents table-of-contents__left-border":a,d=e.linkClassName,m=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,v=void 0===u?void 0:u,b=e.minHeadingLevel,h=e.maxHeadingLevel,E=(0,l.Z)(e,i),g=(0,s.LU)(),p=null!=b?b:g.tableOfContents.minHeadingLevel,f=null!=h?h:g.tableOfContents.maxHeadingLevel,N=(0,s.b9)({toc:t,minHeadingLevel:p,maxHeadingLevel:f}),Z=(0,r.useMemo)((function(){if(m&&v)return{linkClassName:m,linkActiveClassName:v,minHeadingLevel:p,maxHeadingLevel:f}}),[m,v,p,f]);return(0,s.Si)(Z),r.createElement(c,(0,n.Z)({toc:N,className:o,linkClassName:m},E))}},1575:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),l=a(3366),r=a(7294),s=a(6010),i=a(5002);const c="tableOfContents_cNA8";var o=["className"];function d(e){var t=e.className,a=(0,l.Z)(e,o);return r.createElement("div",{className:(0,s.Z)(c,"thin-scrollbar",t)},r.createElement(i.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},8727:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(7294),l=a(6010),r=a(5999),s=a(9960);const i="tag_hD8n",c="tagRegular_D6E_",o="tagWithCount_i0QQ";function d(e){var t,a=e.permalink,r=e.name,d=e.count;return n.createElement(s.Z,{href:a,className:(0,l.Z)(i,(t={},t[c]=!d,t[o]=d,t))},r,d&&n.createElement("span",null,d))}const m="tags_XVD_",u="tag_JSN8";function v(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(m,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:u},n.createElement(d,{name:t,permalink:a}))}))))}}}]);