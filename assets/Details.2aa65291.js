import{d as I,u as R,r as m,c as E,ag as $,z as H,o as F,b as n,e,t as l,l as D,k as G,s as P,F as d,j as p,g as c,i as g,ai as j,a as s,_ as z}from"./index.e706543d.js";import{g as V,C as W,P as u,b as U,f as L,N as J}from"./news.0537a800.js";import{c as b,b as A,u as K}from"./request-cancel-map.b5b1ef66.js";const O={key:0,class:"NewsDetails"},Q={class:"container"},X={class:"top-content"},Y={class:"user-info"},Z={class:"text-container"},ee={class:"top"},te={class:"name"},se={class:"date"},ae={class:"bottom"},ne={class:"details"},oe={class:"title"},ie={class:"content"},le=["innerHTML"],ce={key:0,class:"tags-container"},ue={class:"tags"},de={key:0,class:"tag"},re={key:0,class:"related-list"},_e={class:"items"},ve=["onClick"],ge={class:"left"},he={class:"date"},me={class:"title"},pe=["innerHTML"],fe={key:0,class:"tags-container"},ke={class:"tags"},ye={key:0,class:"tag"},Te=I({__name:"Details",props:{pageType:{}},setup(r){let{defineCancelMaps:N,saveCancelFn:f,cancelRequests:S}=K();N([b,A]);let k=R(),y=m([]),_=E(()=>o=>{var i;return(i=y.value.find(t=>t.id===o))==null?void 0:i.name});async function B(){try{let{cancel:o,request:i}=V({cid:W[r.pageType]});f(A,o);let{list:t}=await i();y.value=t}catch{}}let w=E(()=>({[u.GameGuide]:"All Game Guide",[u.EducationCourses]:"All Education Courses"})[r.pageType]);function x(){switch(r.pageType){case u.GameGuide:g.push({name:"GameGuide"});break;case u.EducationCourses:g.push({name:"EducationCourses"});break}}let a=m(null),h=m(null);async function T(){try{let{cancel:o,request:i}=U({id:k.params.id});f(b,o);let t=await i();a.value=t,await j(),h.value&&h.value.querySelectorAll('a[class="link"]').forEach(q=>{var C;return(C=q.parentElement)==null?void 0:C.classList.add("link-parent")})}catch{}}$(()=>k.params.id,()=>{T()});function M(o){let{id:i}=o;switch(r.pageType){case u.GameGuide:g.push({name:"GameGuideDetails",params:{id:i}});break;case u.EducationCourses:g.push({name:"EducationCoursesDetails",params:{id:i}});break}}return H(()=>{B(),T()}),F(()=>{S()}),(o,i)=>a.value?(s(),n("div",O,[e("div",Q,[e("div",{class:"back",onClick:x},l(w.value),1),e("div",X,[e("div",Y,[e("div",{class:"picture",style:D({backgroundImage:`url(${a.value.info.author.head_img})`})},null,4),e("div",Z,[e("div",ee,[e("div",te,l(a.value.info.author.name),1),e("div",se,l(G(L)(+a.value.info.add_time)),1)]),e("div",ae,l(a.value.info.author.synopsis),1)])]),e("div",ne,[e("div",oe,l(a.value.info.title),1),e("div",ie,[a.value.info.content.content?(s(),n("div",{key:0,innerHTML:a.value.info.content.content,ref_key:"contentRef",ref:h},null,8,le)):(s(),P(J,{key:1}))]),a.value.info.flgs?(s(),n("div",ce,[e("div",ue,[(s(!0),n(d,null,p(a.value.info.flgs.split(","),t=>(s(),n(d,null,[_.value(+t)?(s(),n("div",de,l(_.value(+t)),1)):c("",!0)],64))),256))])])):c("",!0)])]),a.value.recommend.length?(s(),n("div",re,[e("div",_e,[(s(!0),n(d,null,p(a.value.recommend,t=>(s(),n("div",{class:"item",onClick:v=>M(t)},[e("div",ge,[e("div",he,l(G(L)(+t.add_time)),1),e("div",me,l(t.title),1),e("div",{class:"description",innerHTML:t.content.content},null,8,pe),t.flgs?(s(),n("div",fe,[e("div",ke,[(s(!0),n(d,null,p(t.flgs.split(","),v=>(s(),n(d,null,[_.value(+v)?(s(),n("div",ye,l(_.value(+v)),1)):c("",!0)],64))),256))])])):c("",!0)]),e("div",{class:"right",style:D({backgroundImage:`url(${t.image_input[0]})`})},null,4)],8,ve))),256))])])):c("",!0)])])):c("",!0)}});const Ge=z(Te,[["__scopeId","data-v-4819371e"]]);export{Ge as D};
