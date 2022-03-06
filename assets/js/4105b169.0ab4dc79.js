"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[388],{3905:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>p});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},d=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(r),p=o,v=u["".concat(c,".").concat(p)]||u[p]||m[p]||s;return r?t.createElement(v,a(a({ref:n},d),{},{components:r})):t.createElement(v,a({ref:n},d))}));function p(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7435:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>g,contentTitle:()=>b,default:()=>T,frontMatter:()=>f,metadata:()=>y,toc:()=>h});var t=r(7462),o=r(3366),s=r(7294),a=r(3905),i=r(2389),c=r(3725),l=r(6010);const d="tabItem_LplD";function m(e){var n,r,o,a=e.lazy,i=e.block,m=e.defaultValue,u=e.values,p=e.groupId,v=e.className,f=s.Children.map(e.children,(function(e){if((0,s.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=u?u:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,c.lx)(b,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(n=null!=m?m:null==(r=f.find((function(e){return e.props.default})))?void 0:r.props.value)?n:null==(o=f[0])?void 0:o.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,c.UB)(),k=h.tabGroupChoices,T=h.setTabGroupChoices,S=(0,s.useState)(g),x=S[0],E=S[1],C=[],w=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var O=k[p];null!=O&&O!==x&&b.some((function(e){return e.value===O}))&&E(O)}var P=function(e){var n=e.currentTarget,r=C.indexOf(n),t=b[r].value;t!==x&&(w(n),E(t),null!=p&&T(p,t))},I=function(e){var n,r=null;switch(e.key){case"ArrowRight":var t=C.indexOf(e.currentTarget)+1;r=C[t]||C[0];break;case"ArrowLeft":var o=C.indexOf(e.currentTarget)-1;r=C[o]||C[C.length-1]}null==(n=r)||n.focus()};return s.createElement("div",{className:"tabs-container"},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},v)},b.map((function(e){var n=e.value,r=e.label,o=e.attributes;return s.createElement("li",(0,t.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:function(e){return C.push(e)},onKeyDown:I,onFocus:P,onClick:P},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":x===n})}),null!=r?r:n)}))),a?(0,s.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):s.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}function u(e){var n=(0,i.Z)();return s.createElement(m,(0,t.Z)({key:String(n)},e))}function p(e){var n=e.children,r=e.hidden,t=e.className;return s.createElement("div",{role:"tabpanel",hidden:r,className:t},n)}var v=["components"],f={id:"motion-server-sample-codes",title:"Ethernet Motion Server Sample Codes",sidebar_label:"Sample Codes"},b=void 0,y={unversionedId:"motion-server-sample-codes",id:"motion-server-sample-codes",title:"Ethernet Motion Server Sample Codes",description:"Sending multiple ASCII commands to motor drives",source:"@site/docs/motion-server-sample-codes.md",sourceDirName:".",slug:"/motion-server-sample-codes",permalink:"/docs/motion-server-sample-codes",tags:[],version:"current",lastUpdatedBy:"Albert Sharapov",lastUpdatedAt:1646542271,formattedLastUpdatedAt:"3/5/2022",frontMatter:{id:"motion-server-sample-codes",title:"Ethernet Motion Server Sample Codes",sidebar_label:"Sample Codes"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/motion-server-getting-started"}},g={},h=[{value:"Sending multiple ASCII commands to motor drives",id:"sending-multiple-ascii-commands-to-motor-drives",level:2}],k={toc:h};function T(e){var n=e.components,r=(0,o.Z)(e,v);return(0,a.kt)("wrapper",(0,t.Z)({},k,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"sending-multiple-ascii-commands-to-motor-drives"},"Sending multiple ASCII commands to motor drives"),(0,a.kt)(u,{mdxType:"Tabs"},(0,a.kt)(p,{value:"py",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"import socket\n\ndef main():\n    host = '10.1.10.65'\n    port = 5000\n    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n    sock.connect((host, port))\n    commands = [\n      's r0x70 2 0',\n      's r0xc8 256',\n      's r0xca 200000',\n      's r0xcb 1000000',\n      's r0xcc 2000000',\n      's r0xcd 2000000',\n      's r0x24 31',\n      't 1'\n    ]\n    for command in commands:\n      sock.send(bytes('{0}\\r'.format(command), encoding=\"utf-8\"))\n      data = sock.recv(1024)\n      print('{}: {}'.format(command, data.decode('ascii')))\n\n    sock.close()\n\nmain()\n"))),(0,a.kt)(p,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const net = require('net')\n\nconst socket = net.createConnection(5000, '10.1.10.65');\n\nconst commands = [\n  's r0x70 2 0',\n  's r0xc8 256',\n  's r0xca 200000',\n  's r0xcb 1000000',\n  's r0xcc 2000000',\n  's r0xcd 2000000',\n  's r0x24 31',\n  't 1'\n]\n\nconst writeOne = command => new Promise((resolve, reject) => {\n  let timeout;\n  let errorHandler, responseHandler;\n  errorHandler = error => {\n    socket.removeListener('data', responseHandler);\n    reject(error);\n    return;\n  }\n  responseHandler = res => {\n    socket.removeListener('error', errorHandler);\n    let response = res.toString('utf8');\n    console.log(`${command}: ${response}`);\n    clearTimeout(timeout);\n    if (response.slice(0, 1) === 'v') {\n      resolve(response.slice(2));\n      return;\n    } else if (response.slice(0, 1) === 'e') {\n      reject(response);\n      return;\n    } else {\n      resolve(response);\n      return;\n    }\n  }\n  timeout = setTimeout(() => {\n    socket.removeListener('data', responseHandler);\n    socket.removeListener('error', errorHandler);\n    reject('WRITE TIMEOUT');\n    return;\n  }, 300);\n  socket.write(command + '\\r', 'ascii');\n  socket.once('error', errorHandler);\n  socket.once('data', responseHandler);\n})\n\nconst run = async commands => {\n  for (let i = 0; i < commands.length; i++) {\n    await writeOne(commands[i]);\n  }\n}\n\nrun(commands)\n  .then(() => {\n    socket.end();\n  })\n  .catch(error => {\n    console.log('CATCH ERROR: ', error);\n    socket.end();\n  })\n"))),(0,a.kt)(p,{value:"c",label:"C",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C"},'#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n#include <unistd.h>\n\n#include <sys/socket.h>\n#include <sys/types.h>\n\n#include <netinet/in.h>\n#include <arpa/inet.h>\n\n#define PORT 5000\n#define IP_ADDR "10.1.10.65"\n\nint main() {\n  // create a socket\n  int client, ret;\n\n  struct sockaddr_in server_addr;\n\n  client = socket(AF_INET, SOCK_STREAM, 0);\n\n  memset(&server_addr, \'\\0\', sizeof(server_addr));\n\n  server_addr.sin_family = AF_INET;\n  server_addr.sin_port = htons(PORT);\n  server_addr.sin_addr.s_addr = inet_addr(IP_ADDR);\n\n  ret = connect(client, (struct sockaddr*) &server_addr, sizeof(server_addr));\n  if (ret < 0) {\n    printf("Connection failed, code %d\\n", ret);\n    return ret;\n  }\n\n  char commands[][256] = {\n    "s r0x70 2 0",\n    "s r0xc8 256",\n    "s r0xca -200000",\n    "s r0xcb 1000000",\n    "s r0xcc 2000000",\n    "s r0xcd 2000000",\n    "s r0x24 31",\n    "t 1"\n  };\n\n  size_t i;\n  for (i = 0; i < sizeof(commands) / sizeof(commands[0]); i++) {\n    printf("%s: ", commands[i]);\n    strcat(commands[i], "\\r");\n    size_t len = strlen(commands[i]);\n    char * shorten_command = (char *) malloc(len);\n    memcpy(shorten_command, commands[i], len);\n    ret = send(client, shorten_command, len, 0);\n    if (ret < 0) {\n      printf("failed, code %d\\n", ret);\n      return ret;\n    }\n\n    char response[256];\n    ret = recv(client, &response, sizeof(response), 0);\n    if (ret < 0) {\n      printf("failed, code %d\\n", ret);\n      return ret;\n    }\n    printf("%s\\n", response);\n  }\n\n  ret = close(client);\n  if (ret < 0) {\n    printf("Disconnection failed, code %d\\n", ret);\n    return ret;\n  }\n\n  return 0;\n}\n'))),(0,a.kt)(p,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-CNET"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\nusing System.Net;\nusing System.Net.Sockets;\n\nnamespace TCPSocketClient\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            string ipAddrString = "10.1.10.65";\n            int port = 5000;\n            IPAddress ipAddr = IPAddress.Parse(ipAddrString);\n            IPEndPoint imacETHEndPoint = new IPEndPoint(ipAddr, port);\n\n            Socket client = new Socket(\n                ipAddr.AddressFamily,\n                SocketType.Stream,\n                ProtocolType.Tcp\n            );\n\n            client.Connect(imacETHEndPoint);\n\n            Console.WriteLine("Connected to {0}", client.RemoteEndPoint.ToString());\n\n            string[] commands = new string[]\n            {\n                "s r0x70 2 0",\n                "s r0xc8 256",\n                "s r0xca -200000",\n                "s r0xcb 1000000",\n                "s r0xcc 2000000",\n                "s r0xcd 2000000",\n                "s r0x24 31",\n                "t 1"\n            };\n\n            for (int i = 0; i < commands.Length; i++)\n            {\n                byte[] command = Encoding.ASCII.GetBytes(commands[i] + "\\r");\n                int byteSent = client.Send(command);\n\n                byte[] response = new byte[512];\n                int byteRecv = client.Receive(response);\n\n                Console.WriteLine(\n                    "{0}: {1}",\n                    commands[i],\n                    Encoding.ASCII.GetString(response, 0, byteRecv)\n                );\n            }\n\n            client.Shutdown(SocketShutdown.Both);\n            client.Close();\n\n            Console.Write("Press any key to exit");\n            Console.ReadLine();\n        }\n    }\n}\n')))))}T.isMDXComponent=!0}}]);