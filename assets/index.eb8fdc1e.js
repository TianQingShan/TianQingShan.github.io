import{w as p,d as _,ad as u,r as m,b as i,e,m as v,q as h,T as g,C as w,a as d,g as x,p as f,h as b,_ as y}from"./index.3cf2033f.js";const k="/assets/image.35cb26ba.png";function A(){return p({url:"/api/app_package",method:"GET"})}const a=o=>(f("data-v-ad62b110"),o=o(),b(),o),C={class:"Compass"},I=a(()=>e("div",{class:"big-title"},"Compass",-1)),S=a(()=>e("div",{class:"description"},"The compass brings a new way of playing and earning. You don't have any consumption pressure here, and you can also get rich rewards through various activities and tasks, get to know more friends, expand your social circle, and become a social expert.",-1)),T=a(()=>e("div",{class:"image"},[e("img",{src:k})],-1)),D={key:0,class:"download-modal"},M={class:"container"},V=a(()=>e("div",{class:"text"},[e("p",null,"Install compass"),e("p",null,"for your android")],-1)),B=a(()=>e("div",{class:"image"},null,-1)),N=_({__name:"index",setup(o){let c=u(),n=m(!1);async function r(){try{let{request:t}=A(),{android:s}=await t();window.location.href=s}catch{}}function l(){switch(w()){case!0:if(!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/))return c.addMessage("The\xA0current\xA0version\xA0only\xA0supports\xA0Android\xA0download.");r();break;case!1:n.value=!0;break}}return(t,s)=>(d(),i("div",C,[e("div",{class:"container"},[I,e("div",{class:"content"},[e("div",{class:"text-container"},[S,e("div",{class:"button"},[e("div",{class:"text",onClick:l},"Download")])]),T])]),v(g,{name:"download"},{default:h(()=>[n.value?(d(),i("div",D,[e("div",M,[e("div",{class:"close-icon",onClick:s[0]||(s[0]=q=>n.value=!1)}),V,B])])):x("",!0)]),_:1})]))}});const L=y(N,[["__scopeId","data-v-ad62b110"]]);export{L as default};
