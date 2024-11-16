import{_ as E,r as u,c as j,w as q,o as S,a as U,e as t,f as s,u as e,h as A,v as G,F as C,b as o,t as n,i as H,j as b,p as J,g as K}from"./index-3_CvEBpC.js";import{s as M}from"./dataview.esm-DW03ntbC.js";import{s as Q}from"./divider.esm-DUNKPPmp.js";import{f as $,a as R,s as I,b as N,c as O,w as F,d as W}from"./dropdownData-FCHCWmqh.js";import{s as h,a as c,b as k}from"./focustrap.esm-CWZGsNbM.js";import{c as X,s as p,a as Y,b as Z}from"./row.esm-DT74dX5B.js";const v=x=>(J("data-v-2a1f7f24"),x=x(),K(),x),ee={class:"div-dataview"},le=v(()=>o("label",null,"课程类别",-1)),te=v(()=>o("label",null,"课程名",-1)),ae={class:"div-info"},oe=v(()=>o("b",{style:{margin:"auto","font-size":"x-large"}},"总价:",-1)),se={style:{margin:"auto","font-size":"x-large"}},ie={class:"div-dataview"},ne=v(()=>o("label",null,"课程价格(稅前)",-1)),re=v(()=>o("label",null,"课程价格(稅后)",-1)),de={class:"div-dataview"},ue=v(()=>o("label",null,"报名回数",-1)),pe=v(()=>o("label",null,"休息回数",-1)),ce=v(()=>o("label",null,"享受折扣",-1)),ve={style:{float:"left"}},fe={style:{float:"right","font-size":"x-large"}},me={style:{margin:"auto"}},_e={__name:"NewFeeCalculator",setup(x){const f=u([]),T=u("音乐"),r=u(""),z=j(()=>$.value.filter(d=>d.type===T.value)),V=u(0),w=u(!1),P=u("");q(f,d=>{V.value=0,d.forEach(l=>{let a=l.id===99||l.id===98?l.lessonTaxPrice:l.lessonTaxPrice/(4*l.id)*(l.enlistsTimes*l.id-l.restTimes)*l.spOffer;l.totalPrice=parseInt(a),V.value+=l.totalPrice})},{deep:!0});const B=()=>{let d=$.value.find(a=>a.text===r.value.text).type,l=1;d==="其他"?r.value.text==="介绍费"?l=99:l=98:d==="个人指导120分钟"||d==="个人指导90分钟"||d==="个人指导60分钟"?l=parseInt(r.value.text.substring(1,2)):l=1,f.value.push({id:l,lessonName:r.value.text,lessonPrice:r.value.price,lessonTaxPrice:parseInt(r.value.price*1.1),enlistsTimes:$.value.find(a=>a.text===r.value.text).type==="其他"?1:4,restTimes:0,spOffer:1,totalPrice:0})},y=u(),m=u(),g=u(!1),D=()=>{f.value.push({id:99,lessonName:y.value,lessonPrice:m.value,lessonTaxPrice:m.value,enlistsTimes:1,restTimes:0,spOffer:1,totalPrice:m.value}),y.value="",m.value="",g.value=!1};return(d,l)=>(S(),U(C,null,[t(e(I),{style:{width:"100%",overflow:"hidden"}},{content:s(()=>[o("div",ee,[le,t(e(h),{modelValue:T.value,"onUpdate:modelValue":l[0]||(l[0]=a=>T.value=a),options:e(R),"pt:root:class":"dropdown"},null,8,["modelValue","options"]),te,t(e(h),{modelValue:r.value,"onUpdate:modelValue":l[1]||(l[1]=a=>r.value=a),options:z.value,"option-label":"text",placeholder:"请选择课程","pt:root:class":"dropdown"},null,8,["modelValue","options"]),o("div",null,[t(e(c),{icon:"pi pi-box",onClick:l[2]||(l[2]=a=>g.value=!0)}),t(e(c),{icon:"pi pi-external-link",onClick:l[3]||(l[3]=a=>w.value=!0),style:{margin:"auto 5px"}})]),t(e(c),{label:"新增",outlined:"",onClick:B})])]),footer:s(()=>[o("div",ae,[t(e(k),{placeholder:"学生姓名",modelValue:P.value,"onUpdate:modelValue":l[4]||(l[4]=a=>P.value=a)},null,8,["modelValue"]),oe,o("b",se,n(V.value.toLocaleString()),1)])]),_:1}),A(t(e(M),{value:f.value,style:{height:"29rem",overflow:"auto"}},{list:s(a=>[(S(!0),U(C,null,H(a.items,(i,L)=>(S(),U("div",{key:L},[t(e(Q)),t(e(I),{style:{width:"100%",overflow:"hidden"}},{title:s(()=>[b(n(i.lessonName),1)]),subtitle:s(()=>[o("div",ie,[ne,o("span",null,n(i.lessonPrice.toLocaleString()),1),re,o("span",null,n(i.lessonTaxPrice.toLocaleString()),1)])]),content:s(()=>[o("div",de,[ue,t(e(h),{modelValue:i.enlistsTimes,"onUpdate:modelValue":_=>i.enlistsTimes=_,options:e(F),optionLabel:"Text","option-value":"Value"},null,8,["modelValue","onUpdate:modelValue","options"]),pe,t(e(h),{modelValue:i.restTimes,"onUpdate:modelValue":_=>i.restTimes=_,options:e(F),optionLabel:"Text","option-value":"Value"},null,8,["modelValue","onUpdate:modelValue","options"]),ce,t(e(h),{modelValue:i.spOffer,"onUpdate:modelValue":_=>i.spOffer=_,options:e(W),optionLabel:"text","option-value":"value","pt:root:class":"wdd-normal"},null,8,["modelValue","onUpdate:modelValue","options"])])]),footer:s(()=>[o("div",ve,[t(e(c),{icon:"pi pi-trash",onClick:()=>{f.value.splice(L,1)}},null,8,["onClick"]),t(e(c),{style:{margin:"auto 5px"},icon:"pi pi-bitcoin",onClick:()=>{i.lessonPrice=0-i.lessonPrice,i.lessonTaxPrice=0-i.lessonTaxPrice}},null,8,["onClick"])]),o("div",fe,[o("b",null,"应缴费用:"+n(i.totalPrice.toLocaleString()),1)])]),_:2},1024)]))),128))]),_:1},8,["value"]),[[G,f.value.length>0]]),t(e(O),{visible:g.value,"onUpdate:visible":l[7]||(l[7]=a=>g.value=a),header:"添加自定义项目",modal:"",style:{width:"25rem"}},{default:s(()=>[t(e(N),{style:{margin:"5px auto"}},{default:s(()=>[t(e(c),{label:"项目",severity:"warning"}),t(e(k),{modelValue:y.value,"onUpdate:modelValue":l[5]||(l[5]=a=>y.value=a),style:{width:"10em"},placeholder:"其他项目"},null,8,["modelValue"])]),_:1}),t(e(N),{style:{margin:"5px auto"}},{default:s(()=>[t(e(c),{label:"费用",severity:"warning"}),t(e(k),{modelValue:m.value,"onUpdate:modelValue":l[6]||(l[6]=a=>m.value=a),type:"number",pattern:"[0-9]*",inputmode:"numeric",placeholder:"请输入费用"},null,8,["modelValue"])]),_:1}),t(e(c),{label:"确定",style:{width:"100%"},severity:"",onClick:D})]),_:1},8,["visible"]),t(e(O),{visible:w.value,"onUpdate:visible":l[8]||(l[8]=a=>w.value=a),maximizable:"",modal:""},{header:s(()=>[o("span",me,n(P.value),1)]),default:s(()=>[t(e(X),{value:f.value},{default:s(()=>[t(e(p),{field:"lessonName",header:"课程"}),t(e(p),{field:"lessonPrice",header:"税前价格"},{body:s(a=>[b(n(a.data.lessonPrice.toLocaleString()),1)]),_:1}),t(e(p),{field:"lessonTaxPrice",header:"税后价格"},{body:s(a=>[b(n(a.data.lessonTaxPrice.toLocaleString()),1)]),_:1}),t(e(p),{field:"enlistsTimes",header:"报名回数"}),t(e(p),{field:"restTimes",header:"休息回数"}),t(e(p),{field:"spOffer",header:""},{body:s(a=>[b(n(a.data.spOffer===1?"":a.data.spOffer===.9?"9折":"95折"),1)]),_:1}),t(e(p),{field:"totalPrice",header:"应缴费用"},{body:s(a=>[b(n(a.data.totalPrice.toLocaleString()),1)]),_:1}),t(e(Y),{type:"footer"},{default:s(()=>[t(e(Z),null,{default:s(()=>[t(e(p),{footer:"总计:",colspan:6,footerStyle:"text-align:right"}),t(e(p),{footer:V.value.toLocaleString()},null,8,["footer"])]),_:1})]),_:1})]),_:1},8,["value"])]),_:1},8,["visible"])],64))}},Te=E(_e,[["__scopeId","data-v-2a1f7f24"]]);export{Te as default};
