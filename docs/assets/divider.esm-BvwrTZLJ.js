import{B as a,h as l}from"./row.esm-CfaJuSnU.js";import{o as i,a as n,m as o,i as s,j as p}from"./index-Dh5ALaS8.js";var d={root:function(r){var t=r.props;return{justifyContent:t.layout==="horizontal"?t.align==="center"||t.align===null?"center":t.align==="left"?"flex-start":t.align==="right"?"flex-end":null:null,alignItems:t.layout==="vertical"?t.align==="center"||t.align===null?"center":t.align==="top"?"flex-start":t.align==="bottom"?"flex-end":null:null}}},u={root:function(r){var t=r.props;return["p-divider p-component","p-divider-"+t.layout,"p-divider-"+t.type,{"p-divider-left":t.layout==="horizontal"&&(!t.align||t.align==="left")},{"p-divider-center":t.layout==="horizontal"&&t.align==="center"},{"p-divider-right":t.layout==="horizontal"&&t.align==="right"},{"p-divider-top":t.layout==="vertical"&&t.align==="top"},{"p-divider-center":t.layout==="vertical"&&(!t.align||t.align==="center")},{"p-divider-bottom":t.layout==="vertical"&&t.align==="bottom"}]},content:"p-divider-content"},c=a.extend({name:"divider",classes:u,inlineStyles:d}),v={name:"BaseDivider",extends:l,props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},style:c,provide:function(){return{$parentInstance:this}}},g={name:"Divider",extends:v,inheritAttrs:!1},y=["aria-orientation"];function f(e,r,t,m,h,$){return i(),n("div",o({class:e.cx("root"),style:e.sx("root"),role:"separator","aria-orientation":e.layout},e.ptmi("root")),[e.$slots.default?(i(),n("div",o({key:0,class:e.cx("content")},e.ptm("content")),[s(e.$slots,"default")],16)):p("",!0)],16,y)}g.render=f;export{g as s};
