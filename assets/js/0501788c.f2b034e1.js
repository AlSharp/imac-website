"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[663],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),k=i,g=m["".concat(s,".").concat(k)]||m[k]||c[k]||o;return n?a.createElement(g,r(r({ref:t},d),{},{components:n})):a.createElement(g,r({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1746:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],l={id:"guideArrayXYZ",title:"Array Block XYZ Gantry",sidebar_label:"Array Block XYZ Gantry"},s=void 0,p={unversionedId:"guideArrayXYZ",id:"guideArrayXYZ",title:"Array Block XYZ Gantry",description:"Demo",source:"@site/docs/guideArrayXYZ.md",sourceDirName:".",slug:"/guideArrayXYZ",permalink:"/docs/guideArrayXYZ",tags:[],version:"current",lastUpdatedBy:"Albert Sharapov",lastUpdatedAt:1646542271,formattedLastUpdatedAt:"3/5/2022",frontMatter:{id:"guideArrayXYZ",title:"Array Block XYZ Gantry",sidebar_label:"Array Block XYZ Gantry"},sidebar:"docs",previous:{title:"User Block",permalink:"/docs/guideuserblock"},next:{title:"Update software",permalink:"/docs/update_software"}},d={},c=[{value:"Demo",id:"demo",level:2},{value:"Motors setup for X, Y and Z axes",id:"motors-setup-for-x-y-and-z-axes",level:2},{value:"Step 1. Configuring Mode and Profile blocks",id:"step-1-configuring-mode-and-profile-blocks",level:3},{value:"Step 2. Create the user block",id:"step-2-create-the-user-block",level:3},{value:"Homing position",id:"homing-position",level:2},{value:"Step 3. Setting negative limits as homing positions",id:"step-3-setting-negative-limits-as-homing-positions",level:3},{value:"Step 4. Create the user block",id:"step-4-create-the-user-block",level:3},{value:"Setting the reference point for an array",id:"setting-the-reference-point-for-an-array",level:2},{value:"Step 5. Move to the reference point.",id:"step-5-move-to-the-reference-point",level:3},{value:"Step 6. Set the reference position as homing position.",id:"step-6-set-the-reference-position-as-homing-position",level:3},{value:"Creating array",id:"creating-array",level:2},{value:"Step 7. Array blocks",id:"step-7-array-blocks",level:3},{value:"Step 8. Editing Array table",id:"step-8-editing-array-table",level:3},{value:"Adding motion between the Array and End Array blocks",id:"adding-motion-between-the-array-and-end-array-blocks",level:2},{value:"Step 9. Add motion along X and Y axes",id:"step-9-add-motion-along-x-and-y-axes",level:3},{value:"Step 10. Add motion along Z axis",id:"step-10-add-motion-along-z-axis",level:3},{value:"Putting Array&#39;s blocks into the repeat and adding the Homing method at the end of program",id:"putting-arrays-blocks-into-the-repeat-and-adding-the-homing-method-at-the-end-of-program",level:2},{value:"Step 11. Repeat Array two times and return gantry system to the system homing position",id:"step-11-repeat-array-two-times-and-return-gantry-system-to-the-system-homing-position",level:3}],m={toc:c};function k(e){var t=e.components,l=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"demo"},"Demo"),(0,o.kt)("iframe",{class:"tutorial-video",width:"784",height:"441",src:"https://www.youtube.com/embed/ebHxsyUTJYk",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h2",{id:"motors-setup-for-x-y-and-z-axes"},"Motors setup for X, Y and Z axes"),(0,o.kt)("h3",{id:"step-1-configuring-mode-and-profile-blocks"},"Step 1. Configuring Mode and Profile blocks"),(0,o.kt)("p",null,"Drag and drop Mode and Profile blocks onto the visual programming workspace for X, Y and Z axes. Define the motor type, motion mode, profile, velocity, acceleration and deceleration."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: 0 is X; 1 is Y; 2 is Z.")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Mode and Profile",src:n(30).Z,title:"Mode and Profile",width:"926",height:"757"})),(0,o.kt)("h3",{id:"step-2-create-the-user-block"},"Step 2. Create the user block"),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"CTRL + Left Mouse button")," select all six blocks and click ",(0,o.kt)("inlineCode",{parentName:"p"},"Create user block")," button as shown. Give a name to the user block, pick the color and click ",(0,o.kt)("inlineCode",{parentName:"p"},"Create"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Create user block",src:n(4935).Z,title:"Create user block",width:"926",height:"757"})),(0,o.kt)("p",null,"The created user block will appear under the category ",(0,o.kt)("inlineCode",{parentName:"p"},"User"),". Remove six blocks and replace them with just created user block."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"User block Setup Axes",src:n(3899).Z,title:"User block Setup Axis",width:"867",height:"757"})),(0,o.kt)("h2",{id:"homing-position"},"Homing position"),(0,o.kt)("h3",{id:"step-3-setting-negative-limits-as-homing-positions"},"Step 3. Setting negative limits as homing positions"),(0,o.kt)("p",null,"Drag and drop Homing blocks. Select method ",(0,o.kt)("inlineCode",{parentName:"p"},"Limit switch")," and direction ",(0,o.kt)("inlineCode",{parentName:"p"},"Negative"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"User block Homing",src:n(7876).Z,title:"User block Homing",width:"867",height:"757"})),(0,o.kt)("h3",{id:"step-4-create-the-user-block"},"Step 4. Create the user block"),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"CTRL + Left Mouse button")," select three added blocks and click ",(0,o.kt)("inlineCode",{parentName:"p"},"Create user block"),". Give a name to the user block, pick the color and click ",(0,o.kt)("inlineCode",{parentName:"p"},"Create"),". The user block will be added to category ",(0,o.kt)("inlineCode",{parentName:"p"},"User"),". Replace homing blocks with the created user block."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"User block Homing",src:n(2941).Z,title:"User block Homing",width:"867",height:"757"})),(0,o.kt)("h2",{id:"setting-the-reference-point-for-an-array"},"Setting the reference point for an array"),(0,o.kt)("h3",{id:"step-5-move-to-the-reference-point"},"Step 5. Move to the reference point."),(0,o.kt)("p",null,"Set the reference position for an array. Drag and drop three Move blocks onto the visual programming workspace. Configure them as shown below."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"User block Reference point",src:n(2520).Z,title:"User block Reference point",width:"867",height:"757"})),(0,o.kt)("p",null,"Create the user block. Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"Move")," blocks with created user block."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"User block Reference point",src:n(7955).Z,title:"User block Reference point",width:"867",height:"759"})),(0,o.kt)("h3",{id:"step-6-set-the-reference-position-as-homing-position"},"Step 6. Set the reference position as homing position."),(0,o.kt)("p",null,"Drag and drop three ",(0,o.kt)("inlineCode",{parentName:"p"},"Homing")," blocks onto the visual programming workspace and configure the blocks as shown below."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"User block Homing current",src:n(1293).Z,title:"User block Homing current",width:"867",height:"759"})),(0,o.kt)("p",null,"Create the user block. Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"Homing")," blocks with created user block."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"User block Homing current",src:n(6856).Z,title:"User block Homing current",width:"867",height:"759"})),(0,o.kt)("h2",{id:"creating-array"},"Creating array"),(0,o.kt)("p",null,"Our goal is moving the marker from point to point and draw the dots. We will create an array of points with X and Y coordinates."),(0,o.kt)("h3",{id:"step-7-array-blocks"},"Step 7. Array blocks"),(0,o.kt)("p",null,"Drag and drop ",(0,o.kt)("inlineCode",{parentName:"p"},"Array")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"End Array")," blocks onto the visual programming workspace and configure them as shown below."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Array blocks",src:n(5969).Z,title:"Array blocks",width:"867",height:"759"})),(0,o.kt)("h3",{id:"step-8-editing-array-table"},"Step 8. Editing Array table"),(0,o.kt)("p",null,"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Edit array")," button. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Edit Array")," dialog box will be opened."),(0,o.kt)("p",null,"There is only one point now with coordinates ",(0,o.kt)("inlineCode",{parentName:"p"},"{X: 0, Y: 0}")," in the table. We are going to create an array ",(0,o.kt)("inlineCode",{parentName:"p"},"5x4"),". The distance between the points along ",(0,o.kt)("inlineCode",{parentName:"p"},"X")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Y")," axes is ",(0,o.kt)("inlineCode",{parentName:"p"},"300000")," counts. The marker will be moving at first (four points) from point to point along axis ",(0,o.kt)("inlineCode",{parentName:"p"},"Y")," in positive direction, then doing shift along axis ",(0,o.kt)("inlineCode",{parentName:"p"},"X")," by ",(0,o.kt)("inlineCode",{parentName:"p"},"300000")," counts in positive direction to the next row of points and moving backward along the axis ",(0,o.kt)("inlineCode",{parentName:"p"},"Y")," in negative direction. The marker will move so through each row until all points in the array are performed."),(0,o.kt)("p",null,"Additionally we will add a property called ",(0,o.kt)("inlineCode",{parentName:"p"},"Delay")," to each point in the array. Delay is a time in ",(0,o.kt)("inlineCode",{parentName:"p"},"[ms]")," the marker will wait for when it touches the surface of the paper. Just notice that you can add whatever property you want to the elements of the array and use this property in any appropriate block between the ",(0,o.kt)("inlineCode",{parentName:"p"},"Array")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"End Array")," blocks."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Edit Array table",src:n(4278).Z,title:"Edit Array table",width:"867",height:"759"})),(0,o.kt)("p",null,"Below is table with points."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Table with points",src:n(9015).Z,title:"Table with points",width:"867",height:"759"})),(0,o.kt)("p",null,"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Save")," button to save points into the ",(0,o.kt)("inlineCode",{parentName:"p"},"Array")," block."),(0,o.kt)("h2",{id:"adding-motion-between-the-array-and-end-array-blocks"},"Adding motion between the Array and End Array blocks"),(0,o.kt)("h3",{id:"step-9-add-motion-along-x-and-y-axes"},"Step 9. Add motion along X and Y axes"),(0,o.kt)("p",null,"Add two ",(0,o.kt)("inlineCode",{parentName:"p"},"Move")," blocks as shown below. Type ",(0,o.kt)("inlineCode",{parentName:"p"},'"point.Y"')," and ",(0,o.kt)("inlineCode",{parentName:"p"},'"point.X"')," (in double quotes) into the position fields. What does it mean? Look at ",(0,o.kt)("inlineCode",{parentName:"p"},"Array")," block. The field ",(0,o.kt)("inlineCode",{parentName:"p"},"Element")," has value ",(0,o.kt)("inlineCode",{parentName:"p"},"point"),", it means that every row in the table is accessible as ",(0,o.kt)("inlineCode",{parentName:"p"},"point"),". We have to use the following format to get value of columns:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},'"<elementname>.<columnname>"'),", where ",(0,o.kt)("inlineCode",{parentName:"p"},"point")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"<elementname>")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"X"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Y")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Delay")," are ",(0,o.kt)("inlineCode",{parentName:"p"},"<columnname>"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Motion X Y",src:n(7166).Z,title:"Motion X Y",width:"867",height:"759"})),(0,o.kt)("h3",{id:"step-10-add-motion-along-z-axis"},"Step 10. Add motion along Z axis"),(0,o.kt)("p",null,"Add and configure another blocks as shown below. What will happen here?"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Z")," axis will move 100000 counts in positive direction, the marker will touch the surface of the paper. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Z")," axis will wait for ",(0,o.kt)("inlineCode",{parentName:"p"},'"point.Delay"')," ms (500ms) and the axis will move back 100000 counts to the starting position."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We suppose that there are 100000 counts between the surface of paper and the marker at its starting position.")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Motion Z",src:n(536).Z,title:"Motion Z",width:"867",height:"760"})),(0,o.kt)("h2",{id:"putting-arrays-blocks-into-the-repeat-and-adding-the-homing-method-at-the-end-of-program"},"Putting Array's blocks into the repeat and adding the Homing method at the end of program"),(0,o.kt)("h3",{id:"step-11-repeat-array-two-times-and-return-gantry-system-to-the-system-homing-position"},"Step 11. Repeat Array two times and return gantry system to the system homing position"),(0,o.kt)("p",null,"Add ",(0,o.kt)("inlineCode",{parentName:"p"},"Repeat")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"End Repeat")," blocks, put ",(0,o.kt)("inlineCode",{parentName:"p"},"Array")," blocks between Repeat and End Repeat blocks. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Ids")," of Repeat and End Repeat blocks should be matched. Enter the number of repeats (",(0,o.kt)("inlineCode",{parentName:"p"},"2"),") into the ",(0,o.kt)("inlineCode",{parentName:"p"},"Number")," field of ",(0,o.kt)("inlineCode",{parentName:"p"},"Repeat")," block. Add previously saved user block ",(0,o.kt)("inlineCode",{parentName:"p"},"Homing Negative limits")," to return gantry system to the starting position."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Repeat and Return",src:n(9284).Z,title:"Repeat and Return",width:"867",height:"760"})),(0,o.kt)("p",null,"We Done! Thank you."))}k.isMDXComponent=!0},30:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/guide_xyz_array_01-227ef303fdbe0f873239dd3e33b7bcee.png"},4935:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/guide_xyz_array_02-5b65964666076777a7860f3e3ce07c1d.png"},3899:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/guide_xyz_array_03-900608de9782df58ccad4d4dc1826a6c.png"},7876:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/guide_xyz_array_04-e547ae31cf1d9ed5d23105d5ea3ccb0d.png"},2941:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/guide_xyz_array_05-507f47403dfcff88ece9c50dcc439086.png"},2520:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/guide_xyz_array_06-97c800bee95dede40ae7e2be6165758e.png"},7955:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/guide_xyz_array_07-b36b58a7ed40e4fb0defffa739ec16aa.png"},1293:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/guide_xyz_array_08-0a049bb07db73fe6496db172fb4b7dee.png"},6856:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/guide_xyz_array_09-d4b911d073220e4c142a15639d10635f.png"},5969:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/guide_xyz_array_10-190a1f4942d5480b8f92329e8a4b89d5.png"},4278:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/guide_xyz_array_11-e11c17ee16f3ad60e78c051558d158bb.png"},9015:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/guide_xyz_array_12-9599e2a25494f32b246abaa89f707314.png"},7166:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/guide_xyz_array_13-27d4f583b642b65eac0e6f6dae65a719.png"},536:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/guide_xyz_array_14-9611b8f483c3bacb2db64e7898b6a5b6.png"},9284:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/guide_xyz_array_15-19125e9db619e2dd7bc75af83626d724.png"}}]);