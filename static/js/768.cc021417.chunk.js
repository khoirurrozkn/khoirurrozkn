"use strict";(self.webpackChunkkhoirurrozkn=self.webpackChunkkhoirurrozkn||[]).push([[768],{768:function(e,a,n){n.r(a),n.d(a,{default:function(){return u}});var s=n(942),t=n(413),r=n(165),l=n(861),i=n(439),c=n(791),m=n(243),o=n(184),u=function(){var e=(0,c.useState)({name:"",email:"",message:""}),a=(0,i.Z)(e,2),n=a[0],u=a[1],h=function(){var e=(0,l.Z)((0,r.Z)().mark((function e(a){var s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,m.Z.post("http://127.0.0.1:8000/api/send-email",{name:n.name,email:n.email,message:n.message});case 4:s=e.sent,alert(s.data.message),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}(),p=function(e){u((0,t.Z)((0,t.Z)({},n),{},(0,s.Z)({},e.target.name,e.target.value)))};return(0,o.jsx)("div",{className:"content position-relative d-flex justify-content-center",children:(0,o.jsxs)("div",{className:"wrap-content",children:[(0,o.jsx)("p",{children:"Let's embark on"}),(0,o.jsx)("p",{children:"a project together."}),(0,o.jsxs)("form",{onSubmit:h,className:"d-flex flex-wrap",children:[(0,o.jsxs)("div",{className:"wrap-input w-100",children:[(0,o.jsx)("label",{htmlFor:"name",children:"What's your name?"}),(0,o.jsx)("br",{}),(0,o.jsx)("input",{value:n.name,onChange:p,type:"text",name:"name",id:"name",placeholder:"Upin & Ipin"})]}),(0,o.jsxs)("div",{className:"wrap-input w-100",children:[(0,o.jsx)("label",{htmlFor:"email",children:"What's your email?"}),(0,o.jsx)("br",{}),(0,o.jsx)("input",{value:n.email,onChange:p,type:"email",name:"email",id:"email",placeholder:"Upin@Ipin.com"})]}),(0,o.jsxs)("div",{className:"wrap-input w-100",children:[(0,o.jsx)("label",{htmlFor:"message",children:"Leave a message here"}),(0,o.jsx)("br",{}),(0,o.jsx)("textarea",{style:{borderBottom:"solid 1px rgba(0,0,0,0.500)"},value:n.message,onChange:p,name:"message",id:"message",placeholder:"Hey khoirur, can you help me with..."})]}),(0,o.jsx)("div",{className:"w-100 text-center",children:(0,o.jsx)("button",{type:"submit",className:"btn text-light shadow rounded-5 mb-1",children:"Send Message"})})]})]})})}}}]);
//# sourceMappingURL=768.cc021417.chunk.js.map