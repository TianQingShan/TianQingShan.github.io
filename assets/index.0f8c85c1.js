import{d as I,r as u,z as R,o as T,a as m,b as v,e,l as g,_ as y,c as U,n as h,A as Z,m as _,p as B,h as E,t as L,B as V,F as Y,j,C as X,D as P,w as J,E as Q}from"./index.e706543d.js";import{H as z,u as F}from"./request-cancel-map.b5b1ef66.js";const q=I({__name:"Banner",setup(a){let t=u(null);function n(){window.clearInterval(t.value)}function l(){let i=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,o=0;t.value=window.setInterval(()=>{o+=10,o>=i&&(o=i,n()),window.scroll({top:o})})}let c=u(0);function s(){let i=document.querySelector(":root"),r=getComputedStyle(i).getPropertyValue("--header-height");c.value=window.innerHeight-parseInt(r)}return R(()=>{s(),window.onresize=s}),T(()=>{n()}),(i,o)=>(m(),v("div",{class:"Banner",style:g({height:`${c.value}px`})},[e("div",{class:"arrow",onClick:l})],4))}});const K=y(q,[["__scopeId","data-v-0cc12a8d"]]),$="/assets/box2-icon1.eb824c07.png",ee="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAApCAYAAACLO1EjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuYjBmOGJlOSwgMjAyMS8xMi8wOC0xOToxMToyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjIgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wNC0xMFQxNToyMDo1MSswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDQtMTBUMTU6MjQ6MzUrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMDQtMTBUMTU6MjQ6MzUrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmE2Njg5Njk4LTc4ZDUtMTI0Zi04YWQxLTIzZjkxNTQ3NzliMyIgeG1wTU06RG9jdW1lbnRJRD0i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",te="/assets/box2-icon3.37821d8d.png",se="/assets/box2-icon4.e855e9d6.png",ie="/assets/box2-icon5.99216d2a.png",ae="/assets/box2-icon6.4a48ebdb.png",oe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAvCAYAAACLx2hbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuYjBmOGJlOSwgMjAyMS8xMi8wOC0xOToxMToyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjIgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wNC0xMFQxNToyMTowMiswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDQtMTBUMTU6MjQ6NTErMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMDQtMTBUMTU6MjQ6NTErMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg4MWY3ZDMxLTY3ODgtODA0ZS1iMDcxLWIwMGY1NjUxYTNmZiIgeG1wTU06RG9jdW1lbnRJRD0i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",ne="/assets/box2-icon8.e7f79baa.png";const ce={},le={class:"BottomLine"};function de(a,t){return m(),v("div",le)}const O=y(ce,[["render",de],["__scopeId","data-v-7553880e"]]);var f=(a=>(a[a.Down=0]="Down",a[a.Up=1]="Up",a[a.None=2]="None",a))(f||{});const N=(a,t)=>{let n=!0,l=0,c=s=>{n&&(l=document.documentElement.scrollTop,n=!1);let i,o=l,r=document.documentElement.scrollTop;l=r,r>o?i=0:r<o?i=1:i=2;let d=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,{clientHeight:w}=a,p=document.documentElement.scrollTop,M=a,G=0;for(;M;)G+=M.offsetTop,M=M.offsetParent;let D=G-p>d;G-p<=d&&p<=G+w?t(!0,i,D):t(!1,i,D)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},A=a=>(B("data-v-abfa2c4f"),a=a(),E(),a),re={class:"Description"},me={class:"container"},ve={class:"content"},ue={class:"left-icons icon-items"},pe=A(()=>e("img",{src:$},null,-1)),he=[pe],_e=A(()=>e("img",{src:ee},null,-1)),ge=[_e],Ae=A(()=>e("img",{src:te},null,-1)),be=[Ae],ye=A(()=>e("img",{src:se},null,-1)),we=[ye],Me=A(()=>e("span",{class:"weight"},"Web3 gaming guild",-1)),fe={class:"right-icons icon-items"},Ie=A(()=>e("img",{src:ie},null,-1)),Ge=[Ie],De=A(()=>e("img",{src:ae},null,-1)),Le=[De],Re=A(()=>e("img",{src:oe},null,-1)),xe=[Re],Te=A(()=>e("img",{src:ne},null,-1)),Ue=[Te],Ye=I({__name:"Description",setup(a){let t=u(!1),n=u(null),l=u(null),c=u([]),s=U(()=>r=>{let d={horizontal:"0px",vertical:"0px"};if(!n.value||!c.value)return d;let[w,p]=[n.value.clientWidth,n.value.clientHeight],[M,G]=[c.value[0].clientWidth,c.value[0].clientHeight],D=c.value[r];switch(t.value){case!0:let{clientWidth:S}=D.parentElement,b=S-D.clientWidth;const C={0:b*.4+"px",1:b*.8+"px",2:b*.3+"px",3:b*.8+"px",4:b*.5+"px",5:b*.9+"px",6:b*.2+"px",7:b*.6+"px"};d.horizontal=C[r];break;case!1:d.horizontal=w/2-M/2+"px";let x=D,W=0;for(;x!==n.value;)W+=x.offsetTop,x=x.parentElement;let H=p/2-G/2;d.vertical=H-W+"px";break}return d});function i(r){c.value.push(r)}let o;return R(()=>{o=N(l.value,(r,d,w)=>{switch(d){case f.Down:r&&(t.value=!0);break;case f.Up:w&&(t.value=!1);break;case f.None:t.value=!0;break}})}),T(()=>{o==null||o()}),(r,d)=>(m(),v("div",re,[e("div",me,[e("div",ve,[e("div",{class:"content-box",ref_key:"contentBoxRef",ref:n},[e("div",ue,[e("div",{class:h(["icon-item",{animation:t.value}]),ref:i,style:g({left:s.value(0).horizontal,top:s.value(0).vertical})},he,6),e("div",{class:h(["icon-item",{animation:t.value}]),ref:i,style:g({left:s.value(1).horizontal,top:s.value(1).vertical})},ge,6),e("div",{class:h(["icon-item",{animation:t.value}]),ref:i,style:g({left:s.value(2).horizontal,top:s.value(2).vertical})},be,6),e("div",{class:h(["icon-item",{animation:t.value}]),ref:i,style:g({left:s.value(3).horizontal,top:s.value(3).vertical})},we,6)]),e("div",{class:h(["text",{animation:t.value}]),ref_key:"textRef",ref:l},[Z(" Surf Guild is a "),Me,Z(" that drives user growth through community building, game distribution and quest to earn. ")],2),e("div",fe,[e("div",{class:h(["icon-item",{animation:t.value}]),ref:i,style:g({right:s.value(4).horizontal,top:s.value(4).vertical})},Ge,6),e("div",{class:h(["icon-item",{animation:t.value}]),ref:i,style:g({right:s.value(5).horizontal,top:s.value(5).vertical})},Le,6),e("div",{class:h(["icon-item",{animation:t.value}]),ref:i,style:g({right:s.value(6).horizontal,top:s.value(6).vertical})},xe,6),e("div",{class:h(["icon-item",{animation:t.value}]),ref:i,style:g({right:s.value(7).horizontal,top:s.value(7).vertical})},Ue,6)])],512)]),_(O)])]))}});const je=y(Ye,[["__scopeId","data-v-abfa2c4f"]]),Ne={class:"Title"},ke={class:"text"},We=I({__name:"Title",props:{title:{}},setup(a){return(t,n)=>(m(),v("div",Ne,[e("div",ke,L(t.title),1)]))}});const k=y(We,[["__scopeId","data-v-9093bfa7"]]),Ze={class:"StartYourJourney"},ze={class:"container"},Be={class:"items-container"},Ee={class:"item-box"},Oe={class:"title"},Se={class:"description"},Ce={class:"button-container"},He=["onClick"],Ve={class:"image"},Xe=["src"],Pe={class:"animation-container"},Je={version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},Qe=["d"],Fe=I({__name:"StartYourJourney",props:{list:{}},setup(a){V(d=>({d574c174:i.value}));let t=u(null),n=u(null),l=u([]);function c(d){window.open(d.web_url)}let s=U(()=>{switch(X()){case!0:return"M 262 238, q 135 30 0 120, q 0 0 -100 42, q -100 50 -118 100, q -50 81 0 192, q 40 60 100 90, q 0 0 0 0, q 0 0 100 78, q 175 185 0 370, q -20 20 -80 0, q -70 -40 -140 0";case!1:return"M 660 215, q 280 -142 392 0, q 60 90 0 175, q -80 100 -300 200, q 0 0 -100 40, q 0 0 -180 85, q -375 220 0 350, q 120 30 275 50, q 310 70 140 240, q -160 135 -185 200, q -40 170 200 115, q 22 -5 300 -115, q 190 -90 220 0"}}),i=U(()=>`path('${s.value}')`),o,r=u(!1);return R(async()=>{o=N(t.value,(d,w,p)=>{d&&(r.value=!0)})}),T(()=>{o==null||o()}),(d,w)=>(m(),v("div",Ze,[e("div",ze,[_(k,{title:"Start your journey"}),e("div",Be,[e("div",{class:"items-box",ref_key:"itemsBoxRef",ref:t},[e("div",{class:"items",ref_key:"itemsRef",ref:n},[(m(!0),v(Y,null,j(d.list,p=>(m(),v("div",Ee,[e("div",{class:"item",ref_for:!0,ref_key:"itemRef",ref:l},[e("div",Oe,L(p.name),1),e("div",Se,L(p.introduces),1),e("div",Ce,[e("div",{class:"button",onClick:M=>c(p)},L(p.button),9,He)]),e("div",Ve,[e("img",{src:p.image},null,8,Xe)])],512)]))),256))],512),e("div",Pe,[(m(),v("svg",Je,[e("path",{d:s.value,fill:"none","stroke-width":"2",stroke:"#08C1B1"},null,8,Qe)])),e("div",{class:h(["plane",{animation:r.value}])},null,2)])],512)]),_(O)])]))}});const qe=y(Fe,[["__scopeId","data-v-8bf51c2c"]]),Ke=a=>(B("data-v-f4a53a12"),a=a(),E(),a),$e={class:"ReadMap"},et={class:"container"},tt={class:"content"},st={class:"items"},it=["onMouseenter"],at={class:"title"},ot={class:"list-items"},nt={class:"list-item"},ct=Ke(()=>e("div",{class:"after-line"},null,-1)),lt=I({__name:"RoadMap",setup(a){let t=u(1),n=u([{title:"Q3 - Q4 2022",list:["SG team established","OilWar 200 closed beta","Wolfox public launch","Community competitions"]},{title:"Q1 - Q2 2023",list:["OilWar and Compass release","Wolfox sold out","SG brand exposure"]},{title:"Q2 - Q3 2023",list:["Hiplay release","OT listed on Polygon/Binance/Wemix","SG ecosystem surpasses 100K players"]},{title:"Q3 - Q4 2023",list:["OilWar metaverse","Hiplay surpasses 50K content creators"]}]);return(l,c)=>(m(),v("div",$e,[e("div",et,[_(k,{title:"Road Map"}),e("div",tt,[e("div",st,[(m(!0),v(Y,null,j(n.value,(s,i)=>(m(),v("div",{class:h(["item",{active:i===t.value}]),onMouseenter:o=>t.value=i},[e("div",at,L(s.title),1),e("div",ot,[(m(!0),v(Y,null,j(s.list,o=>(m(),v("div",nt,L(o),1))),256))])],42,it))),256))]),ct])])]))}});const dt=y(lt,[["__scopeId","data-v-f4a53a12"]]),rt="/assets/relationship-network-image1.f8997840.png",mt="/assets/relationship-network-image2.073d7139.png",vt="/assets/relationship-network-image3.5d2ce2fd.png",ut="/assets/relationship-network-image4.8df5d6c8.png",pt="/assets/relationship-network-image5.69bf02f7.png",ht="/assets/relationship-network-image6.a69b845b.png",_t="/assets/relationship-network-image7.260f82e9.png",gt="/assets/relationship-network-image8.c17c09f7.png",At="/assets/relationship-network-image9.a68b15a8.png",bt={class:"RelationshipNetwork"},yt={class:"container"},wt={class:"content"},Mt=P('<div class="items" data-v-1c17ede5><div class="item" style="height:57px;" data-v-1c17ede5><img src="'+rt+'" data-v-1c17ede5></div><div class="item" style="height:50px;" data-v-1c17ede5><img src="'+mt+'" data-v-1c17ede5></div><div class="item" style="height:58px;" data-v-1c17ede5><img src="'+vt+'" data-v-1c17ede5></div><div class="item" style="height:55px;" data-v-1c17ede5><img src="'+ut+'" data-v-1c17ede5></div></div><div class="items" data-v-1c17ede5><div class="item" style="height:57px;" data-v-1c17ede5><img src="'+pt+'" data-v-1c17ede5></div><div class="item" style="height:56px;" data-v-1c17ede5><img src="'+ht+'" data-v-1c17ede5></div><div class="item" style="height:84px;" data-v-1c17ede5><img src="'+_t+'" data-v-1c17ede5></div><div class="item" style="height:59px;" data-v-1c17ede5><img src="'+gt+'" data-v-1c17ede5></div><div class="item" style="height:46px;" data-v-1c17ede5><img src="'+At+'" data-v-1c17ede5></div></div>',2),ft=[Mt],It=I({__name:"RelationshipNetwork",setup(a){let t=u(!1),n=u(null),l;return R(()=>{l=N(n.value,(c,s,i)=>{switch(s){case f.Down:c&&(t.value=!0);break;case f.Up:i&&(t.value=!1);break;case f.None:t.value=!0;break}})}),T(()=>{l==null||l()}),(c,s)=>(m(),v("div",bt,[e("div",yt,[_(k,{title:"Relationship Network"}),e("div",wt,[e("div",{class:h(["items-container",{animation:t.value}]),ref_key:"containerRef",ref:n},ft,2)])])]))}});const Gt=y(It,[["__scopeId","data-v-1c17ede5"]]);function Dt(){return J({url:"/api/home",method:"GET"})}const Lt={class:"Home"},Rt=I({__name:"index",setup(a){let{defineCancelMaps:t,saveCancelFn:n,cancelRequests:l}=F();t([z]);let c=u(null);return R(async()=>{try{let{cancel:s,request:i}=Dt();n(z,s),c.value=await i()}catch{}}),Q(()=>{l()}),(s,i)=>{var o;return m(),v("div",Lt,[_(K),_(je),_(qe,{list:((o=c.value)==null?void 0:o.journey)||[]},null,8,["list"]),_(dt),_(Gt)])}}});const Ut=y(Rt,[["__scopeId","data-v-438f2ef7"]]);export{Ut as default};
