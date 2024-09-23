"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[598],{5635:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var s=t(4848),i=t(8453);const o={id:"net_config",title:"Network configuration",sidebar_label:"Network configuration"},r=void 0,d={id:"net_config",title:"Network configuration",description:"Company network with dynamic IP addresses (DHCP server is on)",source:"@site/docs/net_config.md",sourceDirName:".",slug:"/net_config",permalink:"/docs/net_config",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"AlSharp",lastUpdatedAt:1727058275e3,frontMatter:{id:"net_config",title:"Network configuration",sidebar_label:"Network configuration"},sidebar:"docs",previous:{title:"Supported devices",permalink:"/docs/supported_devices"},next:{title:"Data Acquisition",permalink:"/docs/imac_dac"}},c={},a=[{value:"Company network with dynamic IP addresses (DHCP server is on)",id:"company-network-with-dynamic-ip-addresses-dhcp-server-is-on",level:2},{value:"Company network with static IP addresses",id:"company-network-with-static-ip-addresses",level:2},{value:"Isolated network",id:"isolated-network",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"company-network-with-dynamic-ip-addresses-dhcp-server-is-on",children:"Company network with dynamic IP addresses (DHCP server is on)"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"IMAC"})," is preconfigured to get IP address automatically from DHCP server in your local company network. If your company network is configured to provide IP addresses automatically you are good. Just plug ethernet cable in and start working."]}),"\n",(0,s.jsx)(n.h2,{id:"company-network-with-static-ip-addresses",children:"Company network with static IP addresses"}),"\n",(0,s.jsx)(n.p,{children:"If your company network works with static IP addresses you have to set up static IP on IMAC. If it has not been preset on factory for you by your order, follow instructions below:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Connect keyboard, mouse and HDMI monitor to IMAC. Power it up and wait OS loading is completed."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"IMAC plus monitor, keyboard and mouse",src:t(4585).A+"",title:"IMAC plus monitor, keyboard and mouse",width:"793",height:"376"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Right click on the icon as shown and left click Wireless & Wired Network Settings."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Wireless &amp; Wired Network Settings",src:t(9866).A+"",title:"Wireless &amp; Wired Network Settings",width:"785",height:"370"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["Select the interface. Select ",(0,s.jsx)(n.code,{children:"eth0"})," for wired or ",(0,s.jsx)(n.code,{children:"wlan0"})," for wireless. Obtain IP address from your network administator from the range your company's network is working. For example, type ",(0,s.jsx)(n.code,{children:"192.168.0.3"})," to assign ",(0,s.jsx)(n.code,{children:"192.168.0.3"})," IP address to ",(0,s.jsx)(n.strong,{children:"IMAC"}),". Assign the IP address of your router \u2013 ",(0,s.jsx)(n.code,{children:"192.168.0.1"}),". Assign the address of DNS server - ",(0,s.jsx)(n.code,{children:"192.168.0.1"}),". Click Apply. In case you are configuring wireless connection the additional step is required."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Wired Network Settings",src:t(4943).A+"",title:"Wired Network Settings",width:"415",height:"486"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Wireless Network Settings",src:t(4346).A+"",title:"Wireless Network Settings",width:"415",height:"486"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Additional step: if you are configuring wireless connection you need to open the terminal."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Open Terminal",src:t(5116).A+"",title:"Open Terminal",width:"347",height:"178"})}),"\n",(0,s.jsxs)(n.p,{children:["In the terminal type ",(0,s.jsx)(n.code,{children:"sudo raspi-config"}),". The textual menu will be opened."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Raspi config",src:t(4533).A+"",title:"Raspi config",width:"960",height:"391"})}),"\n",(0,s.jsx)(n.p,{children:"Select Network Options. You will be asked for Country, Wifi network\u2019s name and password. When you complete press Finish."}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsxs)(n.li,{children:["Reboot ",(0,s.jsx)(n.strong,{children:"IMAC"})," and unplug keyboard, mouse and HDMI monitor. ",(0,s.jsx)(n.strong,{children:"IMAC"})," is ready for use in the network. Open Google Chrome (recommended browser) and go to ",(0,s.jsx)(n.code,{children:"http://imac:5000"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"isolated-network",children:"Isolated network"}),"\n",(0,s.jsxs)(n.p,{children:["Also IMAC can be used in isolated networks where IMAC and user computer are connected directly over ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Ethernet_crossover_cable",children:"Ethernet Crossover cable"})," or using the Ethernet switch/router."]}),"\n",(0,s.jsx)(n.p,{children:"To get IMAC working in isolated network follow instructions below:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"On user computer with Windows operating system navigate to Network Connections"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Here is ",(0,s.jsx)(n.a,{href:"https://wifi-settings.com/windows-10-networking/open-network-connections-from-cmd-windows-10/",children:"5 Ways to Open Network Connections from CMD and Windows 10 GUI"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Windows: network connections",src:t(8766).A+"",title:"Windows: network connections",width:"589",height:"455"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Right click on USB-to-Ethernet connection and select Properties."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Windows: Ethernet Properties",src:t(6917).A+"",title:"Windows: Ethernet Properties",width:"377",height:"475"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Scroll down, select TCP/IPv4 and click Properties. Fill out as shown below."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Windows: TCP/IPv4 Properties",src:t(7500).A+"",title:"Windows: TCP/IPv4 Properties",width:"414",height:"462"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["Apply changes and close dialog windows. IMAC comes preconfigured with IP address 192.168.99.1 for isolated network. Now you can open Chrome browser and go to ",(0,s.jsx)(n.code,{children:"imac-yourcompanyname:5000"})," to start working. For example: ",(0,s.jsx)(n.code,{children:"imac-amazon:5000"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},4585:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/net_config_1-0f20744272aeb0aec3d250a34f895c66.jpg"},9866:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/net_config_2-507d3fd8f7367406b172ed7564e20731.png"},4943:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/net_config_3_eth0-0978b0aff1142b5230690ae376865acb.png"},4346:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/net_config_3_wlan0-1ae6e628019ae5b73c5ee08681c85d93.png"},5116:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/net_config_4-44736f30f24ea11bca9ce322df928994.png"},4533:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/net_config_5-999f93a5c443822d526e5f543f32f410.png"},8766:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/net_config_win_1-12fd4f0784e86d0c7f2454dfac43ce83.png"},6917:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/net_config_win_2-093485af5cd4f6db6520804f9913daea.png"},7500:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/net_config_win_3-007534e8f8301745b399f5faaf2d1ab5.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>d});var s=t(6540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);