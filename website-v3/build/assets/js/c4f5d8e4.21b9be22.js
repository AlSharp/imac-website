"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[634],{192:(e,t,i)=>{i.r(t),i.d(t,{default:()=>v});var n=i(7387),r=i(6540),o=i(4586),s=i(781),c=i(4848),d=function(e){return(0,c.jsx)("div",{className:"homeWrapperBgImg",children:(0,c.jsx)("img",{src:e.img_src,alt:"Home Wrapper Image"})})},a=function(e){var t=e.siteConfig;return(0,c.jsxs)("div",{className:"project-title-wrapper",children:[(0,c.jsx)("h1",{className:"project-title",children:t.title}),(0,c.jsx)("h2",{className:"project-title-sub",children:t.tagline})]})},l=function(e){return(0,c.jsx)("div",{className:"promo-section",children:e.children})},u=function(e){return(0,c.jsx)("a",{className:"button button--lg button--outline button--primary margin--sm",href:e.href,target:e.target,children:e.children})},m=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.A)(t,e),t.prototype.render=function(){var e,t=this.props,i=t.siteConfig,n=t.language,r=void 0===n?"":n,o=i.baseUrl,s=i.docsUrl,m=s?s+"/":"",h=r?r+"/":"";return(0,c.jsxs)("div",{className:"home-top-container",children:[(0,c.jsx)(a,{siteConfig:i}),(0,c.jsxs)(l,{children:[(0,c.jsx)(u,{href:"https://imacdemolive.ngrok.io",target:"_blank",children:"Try it now!"}),(0,c.jsx)(u,{href:"/blog/",children:"Tutorials"}),(0,c.jsx)(u,{href:(e="docs/intro",""+o+m+h+e),children:"Manual"}),(0,c.jsx)(u,{href:"http://www.intellidrives.com/",children:"intellidrives.com"})]}),(0,c.jsx)(d,{img_src:"/img/imac-background-img-edited.jpg"})]})},t}(r.Component),h=function(){return(0,r.useEffect)((function(){var e=document.getElementById("imac-video"),t=document.createElement("source");t.src="video/imac-demo-1.mp4",t.setAttribute("type","video/mp4");var i=document.documentElement.clientWidth;i-1544<0?e.setAttribute("width",i):e.setAttribute("width",1544),e.appendChild(t);var n=function(){var e=document.documentElement.clientWidth,t=document.getElementById("imac-video");e-1544<0?t.setAttribute("width",e):t.setAttribute("width",1544)};return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[]),(0,c.jsx)("div",{id:"demo-section-container",className:"demo-section-container",children:(0,c.jsx)("video",{id:"imac-video",autoPlay:!0,muted:!0,loop:!0})})},p=function(e){return(0,c.jsxs)("div",{className:"youtube-video-section",children:[(0,c.jsx)("div",{className:"youtube-video-section-content",children:[e.title?(0,c.jsx)("h2",{children:(0,c.jsx)("div",{children:(0,c.jsx)("span",{children:(0,c.jsx)("p",{children:e.title})})})},"h2"):null,(0,c.jsx)("div",{children:(0,c.jsx)("span",{children:e.questions.map((function(e,t){return(0,c.jsx)("p",{style:{marginBottom:20},children:e},t)}))})},"div")]}),(0,c.jsx)("div",{className:"youtube-wrapper",children:(0,c.jsx)("iframe",{src:e.video_src,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]})},j=function(){return(0,c.jsx)("div",{className:"why-imac-container",children:(0,c.jsx)(p,{id:"learnMore",background:"light",video_src:"https://www.youtube.com/embed/cnlVry2UYLw",title:"Why IMAC?",questions:["Have you been tasked to create motion control and automation project?","Concerned about complexity of the project?","Lacking motion control expertise, software knowledge or programming resourses?","Consider IMAC!"]})})};const v=function(){var e=(0,o.A)().siteConfig;return(0,c.jsxs)(s.A,{children:[(0,c.jsx)(m,{siteConfig:e}),(0,c.jsx)(h,{}),(0,c.jsx)(j,{})]})}}}]);