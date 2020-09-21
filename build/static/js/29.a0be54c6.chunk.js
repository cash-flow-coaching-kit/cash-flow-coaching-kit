(this["webpackJsonpdcfck-app"]=this["webpackJsonpdcfck-app"]||[]).push([[29],{1764:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(140),l=a(778),o=a(741),i=a(74),s=a(767),m=a(737),u=a(800),d=a(788),E=a(842),p=a.n(E),h=a(336),g=a(902),f=a(251),v=a(834),y=a(840),b=a(5),N=a(13),x=a(735),C=a(378),w=a.n(C),k=a(47),O=a(19),I=a.n(O),j=a(28),A=a(770),T=a(771),H=a(772),S=a(774);function L(e){var t=e.node;return r.a.Children.count(t)?r.a.createElement(r.a.Fragment,null,t):r.a.createElement(r.a.Fragment,null)}var D=a(257),G=a(812),F=a(73),B=a(801),R=a(405),W=a(252);var P=Object(c.a)((function(e){return{actions:{borderTopWidth:"1px",borderTopColor:e.palette.divider,borderTopStyle:"solid",marginTop:e.spacing(3)}}})),M=Object(c.a)((function(e){return{root:{marginTop:e.spacing(2)},inputWrapper:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},input:{width:"100%"},actions:{marginBottom:e.spacing(2)},itemAction:{display:"flex",justifyContent:"flex-end",alignItems:"center"}}})),V=a(867),q=r.a.forwardRef((function(e,t){var a=e.onFormSubmission,c=e.closeModal,i=e.showSnackbar,s=Object(n.useState)(Object(W.b)()),m=Object(N.a)(s,1)[0],u=M(),d=Object(n.useState)(),E=Object(N.a)(d,2),p=E[0],h=E[1],g={items:[{description:"",reviewBy:new Date}]},f=Object(D.a)({initialValues:g,onSubmit:function(){var e=Object(j.a)(I.a.mark((function e(t){var n,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==(n=t.items.filter((function(e){return""!==e.description}))).length){e.next=4;break}return i("At least 1 action item is required","error"),e.abrupt("return");case 4:return r=Object(b.a)(Object(b.a)({},t),{},{items:n}),e.next=7,a(r);case 7:e.sent?(f.resetForm(),i("Action items have been added","success"),c()):i("Something went wrong, please try again","warning");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()});function v(e){f.setFormikState(Object(b.a)(Object(b.a)({},f),{},{values:Object(b.a)(Object(b.a)({},f.values),{},{items:e})}))}return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{noValidate:!0,autoComplete:"off",onSubmit:f.handleSubmit,id:"checklist-bulk-add",className:u.root},f.values.items.map((function(e,t){return r.a.createElement(l.a,{container:!0,spacing:2,key:Object(W.a)(m,t),className:u.inputWrapper},r.a.createElement(l.a,{item:!0,xs:12,md:8},r.a.createElement(G.a,{name:"items[".concat(t,"].description"),id:"items[".concat(t,"].description"),label:"Describe what you will do",variant:"outlined",value:e.description,onChange:f.handleChange,className:u.input})),r.a.createElement(l.a,{item:!0,xs:9,md:3},r.a.createElement(F.a,{utils:R.a},r.a.createElement(B.a,{disableToolbar:!0,variant:"inline",inputVariant:"outlined",format:"dd/MM/yyyy",label:"Review by",name:"items[".concat(t,"].reviewBy"),value:e.reviewBy,onChange:function(e){!function(e,t){e&&(v(f.values.items.reduce((function(a,n,r){return a.concat(r===t?Object(b.a)(Object(b.a)({},n),{},{reviewBy:e}):n)}),[])),h(void 0))}(e,t)},KeyboardButtonProps:{"aria-label":"change date"},className:u.input,open:p===t,onOpen:function(){return h(t)},onClose:function(){return h(void 0)}}))),r.a.createElement(l.a,{item:!0,xs:3,md:1,className:u.itemAction},r.a.createElement(V.a,{onClick:function(e){return function(e,t){1!==f.values.items.length?v(f.values.items.filter((function(e,a){return a!==t}))):v(g.items)}(0,t)}})))})),r.a.createElement("input",{type:"submit",value:"Add to checklist",hidden:!0,ref:t})),r.a.createElement(o.a,{className:u.actions},r.a.createElement(x.a,{color:"primary",variant:"outlined",startIcon:r.a.createElement(w.a,null),onClick:function(){v(f.values.items.concat({description:"",reviewBy:new Date}))},disabled:!(-1===f.values.items.findIndex((function(e){return""===e.description})))},"Add action")))})),z=a(109),K=a(102),U=a(385),Q=a(86),_=a(180);function J(e){var t=e.open,a=e.onClose,c=e.title,l=e.subtitle,o=e.children,s=e.container,m=e.showSnackbar,u=P(),d=Object(n.useState)(!1),E=Object(N.a)(d,2),p=E[0],h=E[1],g=Object(n.useState)(),f=Object(N.a)(g,2),v=f[0],y=f[1],C=Object(n.useContext)(K.a).state.currentClient,w=Object(n.useContext)(U.a).dispatch,O=Object(n.useRef)(null);function D(){return(D=Object(j.a)(I.a.mark((function e(t){var a,n,r,c,l,o;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===C||void 0===C?void 0:C.id)||!(null===v||void 0===v?void 0:v.id)){e.next=16;break}return h(!0),a=C.id,n=v.id,r=t.items.reduce((function(e,t){return[].concat(Object(k.a)(e),[Object(b.a)(Object(b.a)({},Object(z.c)(a,s)),t)])}),[]),e.next=7,Object(z.a)(r,n);case 7:if(c=e.sent,l=Object(N.a)(c,2),o=l[0],l[1]){e.next=13;break}return e.abrupt("return",!1);case 13:return w({type:Q.a.BulkAddActionItems,payload:{items:o,priorityId:n}}),h(!1),e.abrupt("return",!0);case 16:return e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){var e=function(){var e=Object(j.a)(I.a.mark((function e(t){var a,n,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.findByClientAndContainer(s,t);case 2:if(!((a=e.sent).length>0)){e.next=7;break}y(a[0]),e.next=12;break;case 7:return n=Object(z.e)(t,s),e.next=10,_.a.create(n);case 10:r=e.sent,y(Object(b.a)(Object(b.a)({},n),{},{id:r}));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();(null===C||void 0===C?void 0:C.id)&&e(C.id)}),[C,s]),r.a.createElement(A.a,{open:t,onClose:a,fullWidth:!0,maxWidth:"md"},r.a.createElement(T.a,null,c),r.a.createElement(H.a,null,r.a.createElement(i.a,{variant:"h5"},l),r.a.createElement(q,{onFormSubmission:function(e){return D.apply(this,arguments)},closeModal:a,showSnackbar:m,ref:O}),r.a.createElement(L,{node:o})),r.a.createElement(S.a,{className:u.actions},r.a.createElement(x.a,{onClick:a},"Cancel"),r.a.createElement(x.a,{color:"primary",variant:"contained",type:"submit",form:"checklist-bulk-add",disabled:p,onClick:function(e){O.current&&(e.preventDefault(),O.current.click())}},"Add to checklist")))}var X=a(841);function Y(e){var t=e.container,a=e.title,c=e.subtitle,l=e.children,i=Object(n.useState)(!1),s=Object(N.a)(i,2),m=s[0],u=s[1],d=Object(n.useState)({open:!1,msg:""}),E=Object(N.a)(d,2),p=E[0],h=E[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,r.a.createElement(x.a,{variant:"outlined",size:"large",color:"primary",startIcon:r.a.createElement(w.a,null),onClick:function(){return u(!0)}},"Add to Action Checklist"),r.a.createElement(J,{open:m,onClose:function(){return u(!1)},title:a,subtitle:c,container:t,showSnackbar:function(e,t){h({open:!0,msg:e,severity:t})}},l)),r.a.createElement(X.a,{open:p.open,severity:p.severity,onClose:function(e,t){"clickaway"!==t&&h(Object(b.a)(Object(b.a)({},p),{},{open:!1}))},msg:p.msg}))}var Z=a(36),$=Object(c.a)((function(e){return{details:{paddingRight:e.spacing(2),paddingLeft:e.spacing(2),marginBottom:e.spacing(2)},actionGridItem:Object(Z.a)({display:"flex"},e.breakpoints.up("lg"),{justifyContent:"flex-end"}),contentHeadings:{fontWeight:e.typography.fontWeightMedium}}}));function ee(){return r.a.createElement("ul",{className:"change-levers-ul"},r.a.createElement(i.a,{component:"li"},"How much margin do you need to cover your expenses?"),r.a.createElement(i.a,{component:"li"},"How much could you increase prices without losing business?"),r.a.createElement(i.a,{component:"li"},"Could you implement small regular price increases? E.g. CPI"))}function te(){return r.a.createElement("ul",{className:"change-levers-ul"},r.a.createElement(i.a,{component:"li"},"Which are your most profitable customers, products or services?"),r.a.createElement(i.a,{component:"li"},"How much time should you invest on your most profitable customers?"),r.a.createElement(i.a,{component:"li"},"How much time should you invest on your most profitable products or services?"))}function ae(){return r.a.createElement("ul",{className:"change-levers-ul"},r.a.createElement(i.a,{component:"li"},"What other problems could you help your customer solve?"),r.a.createElement(i.a,{component:"li"},"Do the customers only want one particular part of your product or service? Can you focus only on this?"))}function ne(){var e=$();return r.a.createElement(f.a,{title:"Pricing",subHeading:"Change pricing to improve cash flow",defaultExpanded:!1},r.a.createElement(l.a,{container:!0,spacing:2,className:e.details},r.a.createElement(l.a,{item:!0,xs:12,lg:8},r.a.createElement(i.a,{variant:"h6",component:"h4",className:e.contentHeadings},"Change prices"),r.a.createElement(ee,null)),r.a.createElement(l.a,{item:!0,xs:12,lg:4,className:e.actionGridItem},r.a.createElement(Y,{container:"cashInActions",title:"Pricing Lever",subtitle:"Change prices"},r.a.createElement(i.a,{variant:"h6"},"Things to consider"),r.a.createElement(ee,null)))),r.a.createElement(l.a,{container:!0,spacing:2,className:e.details},r.a.createElement(l.a,{item:!0,xs:12,lg:8},r.a.createElement(i.a,{variant:"h6",component:"h4",className:e.contentHeadings},"Focus on the most profitable customers, products or services"),r.a.createElement(te,null)),r.a.createElement(l.a,{item:!0,xs:12,lg:4,className:e.actionGridItem},r.a.createElement(Y,{title:"Pricing Lever",container:"cashInActions",subtitle:"Focus on the most profitable customers, products or services"},r.a.createElement(i.a,{variant:"h6"},"Things to consider"),r.a.createElement(te,null)))),r.a.createElement(l.a,{container:!0,spacing:2,className:e.details},r.a.createElement(l.a,{item:!0,xs:12,lg:8},r.a.createElement(i.a,{variant:"h6",component:"h4",className:e.contentHeadings},"Increase value you deliver"),r.a.createElement(ae,null)),r.a.createElement(l.a,{item:!0,xs:12,lg:4,className:e.actionGridItem},r.a.createElement(Y,{title:"Pricing Lever",container:"cashInActions",subtitle:"Increase value you deliver"},r.a.createElement(i.a,{variant:"h6"},"Things to consider"),r.a.createElement(ae,null)))))}function re(){return r.a.createElement("ul",{className:"change-levers-ul"},r.a.createElement(i.a,{component:"li"},"Will a marketing campaign increase the number of customers who are attracted to your business?"),r.a.createElement(i.a,{component:"li"},"Will offering discounts or having a promotional sale increase your customer base?"))}function ce(){return r.a.createElement("ul",{className:"change-levers-ul"},r.a.createElement(i.a,{component:"li"},"Can you offer additional products or services?"))}function le(){return r.a.createElement("ul",{className:"change-levers-ul"},r.a.createElement(i.a,{component:"li"},"Is there an opportunity to sell to new customers?"))}function oe(){return r.a.createElement("ul",{className:"change-levers-ul"},r.a.createElement(i.a,{component:"li"},"Can you use a different process such as going via a wholesaler or online?"),r.a.createElement(i.a,{component:"li"},"Can you manage your process in a less time consuming manner?"),r.a.createElement(i.a,{component:"li"},"Can you convert a higher number of enquiries into committed sales?"))}function ie(){var e=$();return r.a.createElement(f.a,{title:"Volume",subHeading:"Increase sales transactions",defaultExpanded:!1},r.a.createElement(l.a,{container:!0,spacing:2,className:e.details},r.a.createElement(l.a,{item:!0,xs:12,lg:8},r.a.createElement(i.a,{variant:"h6",component:"h4",className:e.contentHeadings},"Increase your number of potential customers"),r.a.createElement(re,null)),r.a.createElement(l.a,{item:!0,xs:12,lg:4,className:e.actionGridItem},r.a.createElement(Y,{container:"cashInActions",title:"Volume Lever",subtitle:"Increase your number of potential customers"},r.a.createElement(i.a,{variant:"h6"},"Things to consider"),r.a.createElement(re,null)))),r.a.createElement(l.a,{container:!0,spacing:2,className:e.details},r.a.createElement(l.a,{item:!0,xs:12,lg:8},r.a.createElement(i.a,{variant:"h6",component:"h4",className:e.contentHeadings},"Increase your products or services"),r.a.createElement(ce,null)),r.a.createElement(l.a,{item:!0,xs:12,lg:4,className:e.actionGridItem},r.a.createElement(Y,{container:"cashInActions",title:"Volume Lever",subtitle:"Increase your products or services"},r.a.createElement(i.a,{variant:"h6"},"Things to consider"),r.a.createElement(ce,null)))),r.a.createElement(l.a,{container:!0,spacing:2,className:e.details},r.a.createElement(l.a,{item:!0,xs:12,lg:8},r.a.createElement(i.a,{variant:"h6",component:"h4",className:e.contentHeadings},"Sell into new market or territory"),r.a.createElement(le,null)),r.a.createElement(l.a,{item:!0,xs:12,lg:4,className:e.actionGridItem},r.a.createElement(Y,{container:"cashInActions",title:"Volume Lever",subtitle:"Sell into new market or territory"},r.a.createElement(i.a,{variant:"h6"},"Things to consider"),r.a.createElement(le,null)))),r.a.createElement(l.a,{container:!0,spacing:2,className:e.details},r.a.createElement(l.a,{item:!0,xs:12,lg:8},r.a.createElement(i.a,{variant:"h6",component:"h4",className:e.contentHeadings},"Improve sale process"),r.a.createElement(oe,null)),r.a.createElement(l.a,{item:!0,xs:12,lg:4,className:e.actionGridItem},r.a.createElement(Y,{container:"cashInActions",title:"Volume Lever",subtitle:"Improve sale process"},r.a.createElement(i.a,{variant:"h6"},"Things to consider"),r.a.createElement(oe,null)))))}function se(){return r.a.createElement("ul",{className:"change-levers-ul"},r.a.createElement(i.a,{component:"li"},"Can you raise progress bills?"),r.a.createElement(i.a,{component:"li"},"Can you invoice an amount in advance of completing the service or delivering the products?"),r.a.createElement(i.a,{component:"li"},"Can you automate invoicing?"),r.a.createElement(i.a,{component:"li"},"Can you make it easier for your customers to pay, e.g. direct debt?"))}function me(){return r.a.createElement("ul",{className:"change-levers-ul"},r.a.createElement(i.a,{component:"li"},"Can you give your customers a call?"),r.a.createElement(i.a,{component:"li"},"Can you send them a reminder notice?"),r.a.createElement(i.a,{component:"li"},"Can you automate/ outsource follow up?"))}function ue(){return r.a.createElement("ul",{className:"change-levers-ul"},r.a.createElement(i.a,{component:"li"},"Should you require some of your customers to pay you sooner than others?"),r.a.createElement(i.a,{component:"li"},"Should some customers pay upfront?"))}function de(){return r.a.createElement("ul",{className:"change-levers-ul"},r.a.createElement(i.a,{component:"li"},"Can you afford to offer an early payment discount?"),r.a.createElement(i.a,{component:"li"},"Can you implement a late payment penalty?"))}function Ee(){var e=$();return r.a.createElement(f.a,{title:"Debtors",subHeading:"Collect cash owed to you faster",defaultExpanded:!1},r.a.createElement(l.a,{container:!0,spacing:2,className:e.details},r.a.createElement(l.a,{item:!0,xs:12,lg:8},r.a.createElement(i.a,{variant:"h6",component:"h4",className:e.contentHeadings},"Invoice earlier"),r.a.createElement(se,null)),r.a.createElement(l.a,{item:!0,xs:12,lg:4,className:e.actionGridItem},r.a.createElement(Y,{container:"cashInActions",title:"Debtors Lever",subtitle:"Invoice earlier"},r.a.createElement(i.a,{variant:"h6"},"Things to consider"),r.a.createElement(se,null)))),r.a.createElement(l.a,{container:!0,spacing:2,className:e.details},r.a.createElement(l.a,{item:!0,xs:12,lg:8},r.a.createElement(i.a,{variant:"h6",component:"h4",className:e.contentHeadings},"Follow up"),r.a.createElement(me,null)),r.a.createElement(l.a,{item:!0,xs:12,lg:4,className:e.actionGridItem},r.a.createElement(Y,{container:"cashInActions",title:"Debtors Lever",subtitle:"Follow up"},r.a.createElement(i.a,{variant:"h6"},"Things to consider"),r.a.createElement(me,null)))),r.a.createElement(l.a,{container:!0,spacing:2,className:e.details},r.a.createElement(l.a,{item:!0,xs:12,lg:8},r.a.createElement(i.a,{variant:"h6",component:"h4",className:e.contentHeadings},"Reduce terms"),r.a.createElement(ue,null)),r.a.createElement(l.a,{item:!0,xs:12,lg:4,className:e.actionGridItem},r.a.createElement(Y,{container:"cashInActions",title:"Debtors Lever",subtitle:"Reduce terms"},r.a.createElement(i.a,{variant:"h6"},"Things to consider"),r.a.createElement(ue,null)))),r.a.createElement(l.a,{container:!0,spacing:2,className:e.details},r.a.createElement(l.a,{item:!0,xs:12,lg:8},r.a.createElement(i.a,{variant:"h6",component:"h4",className:e.contentHeadings},"Early payment discount"),r.a.createElement(de,null)),r.a.createElement(l.a,{item:!0,xs:12,lg:4,className:e.actionGridItem},r.a.createElement(Y,{container:"cashInActions",title:"Debtors Lever",subtitle:"Early payment discount"},r.a.createElement(i.a,{variant:"h6"},"Things to consider"),r.a.createElement(de,null)))))}function pe(){return r.a.createElement("ul",{className:"change-levers-ul"},r.a.createElement(i.a,{component:"li"},"Do you have assets no longer required or underutilised in the business?"))}function he(){return r.a.createElement("ul",{className:"change-levers-ul"},r.a.createElement(i.a,{component:"li"},"Is there an opportunity to get better terms from a lender?"))}function ge(){return r.a.createElement("ul",{className:"change-levers-ul"},r.a.createElement(i.a,{component:"li"},"Would leasing free up your cash flow by allowing you to pay for assets over a longer period of time rather than in one lump sum?"))}function fe(){var e=$();return r.a.createElement(f.a,{title:"Assets",subHeading:"Utilise your assets",defaultExpanded:!1},r.a.createElement(l.a,{container:!0,spacing:2,className:e.details},r.a.createElement(l.a,{item:!0,xs:12,lg:8},r.a.createElement(i.a,{variant:"h6",component:"h4",className:e.contentHeadings},"Sell underutilised assets"),r.a.createElement(pe,null)),r.a.createElement(l.a,{item:!0,xs:12,lg:4,className:e.actionGridItem},r.a.createElement(Y,{container:"cashOutActions",title:"Assets Lever",subtitle:"Sell underutilised assets"},r.a.createElement(i.a,{variant:"h6"},"Things to consider"),r.a.createElement(pe,null)))),r.a.createElement(l.a,{container:!0,spacing:2,className:e.details},r.a.createElement(l.a,{item:!0,xs:12,lg:8},r.a.createElement(i.a,{variant:"h6",component:"h4",className:e.contentHeadings},"Refinance"),r.a.createElement(he,null)),r.a.createElement(l.a,{item:!0,xs:12,lg:4,className:e.actionGridItem},r.a.createElement(Y,{container:"cashOutActions",title:"Assets Lever",subtitle:"Refinance"},r.a.createElement(i.a,{variant:"h6"},"Things to consider"),r.a.createElement(he,null)))),r.a.createElement(l.a,{container:!0,spacing:2,className:e.details},r.a.createElement(l.a,{item:!0,xs:12,lg:8},r.a.createElement(i.a,{variant:"h6",component:"h4",className:e.contentHeadings},"Sell and lease back"),r.a.createElement(ge,null)),r.a.createElement(l.a,{item:!0,xs:12,lg:4,className:e.actionGridItem},r.a.createElement(Y,{container:"cashOutActions",title:"Assets Lever",subtitle:"Sell and lease back"},r.a.createElement(i.a,{variant:"h6"},"Things to consider"),r.a.createElement(ge,null)))))}function ve(){return r.a.createElement("ul",{className:"change-levers-ul"},r.a.createElement(i.a,{component:"li"},"Do you have any non-essential expenses?"),r.a.createElement(i.a,{component:"li"},"Could you defer some expenses?"),r.a.createElement(i.a,{component:"li"},"Can you negotiate better terms for some expenses, such as extended credit or discounts for early payment?"))}function ye(){return r.a.createElement("ul",{className:"change-levers-ul"},r.a.createElement(i.a,{component:"li"},"Can you negotiate prices on operating expenses such as utilities, rent or maintenance services?"),r.a.createElement(i.a,{component:"li"},"Are there cheaper options for services you are currently using, such as bundled technology packages or multi-channel marketing and advertising deals?"))}function be(){var e=$();return r.a.createElement(f.a,{title:"Expenses",subHeading:"Reduce costs",defaultExpanded:!1},r.a.createElement(l.a,{container:!0,spacing:2,className:e.details},r.a.createElement(l.a,{item:!0,xs:12,lg:8},r.a.createElement(i.a,{variant:"h6",component:"h4",className:e.contentHeadings},"Reduce discretionary spending"),r.a.createElement(ve,null)),r.a.createElement(l.a,{item:!0,xs:12,lg:4,className:e.actionGridItem},r.a.createElement(Y,{container:"cashOutActions",title:"Expenses Lever",subtitle:"Reduce discretionary spending"},r.a.createElement(i.a,{variant:"h6"},"Things to consider"),r.a.createElement(ve,null)))),r.a.createElement(l.a,{container:!0,spacing:2,className:e.details},r.a.createElement(l.a,{item:!0,xs:12,lg:8},r.a.createElement(i.a,{variant:"h6",component:"h4",className:e.contentHeadings},"Reduce overheads"),r.a.createElement(ye,null)),r.a.createElement(l.a,{item:!0,xs:12,lg:4,className:e.actionGridItem},r.a.createElement(Y,{container:"cashOutActions",title:"Expenses Lever",subtitle:"Reduce overheads"},r.a.createElement(i.a,{variant:"h6"},"Things to consider"),r.a.createElement(ye,null)))))}function Ne(){return r.a.createElement("ul",{className:"change-levers-ul"},r.a.createElement(i.a,{component:"li"},"Can you source your products from cheaper suppliers without compromising on quality?"))}function xe(){return r.a.createElement("ul",{className:"change-levers-ul"},r.a.createElement(i.a,{component:"li"},"Can you negotiate extended payment terms?"),r.a.createElement(i.a,{component:"li"},"Can you take advantage of discounts?"))}function Ce(){return r.a.createElement("ul",{className:"change-levers-ul"},r.a.createElement(i.a,{component:"li"},"Are your stock levels too high?"),r.a.createElement(i.a,{component:"li"},"Is there stock that isn\u2019t selling?"),r.a.createElement(i.a,{component:"li"},"Do you hold stock which is obsolete?"))}function we(){return r.a.createElement("ul",{className:"change-levers-ul"},r.a.createElement(i.a,{component:"li"},"Can you automate purchase orders?"),r.a.createElement(i.a,{component:"li"},"Can you reduce the lead time between placing and receiving an order?"),r.a.createElement(i.a,{component:"li"},"Can you order stock from your suppliers once you have received an order from your customers?"))}function ke(){var e=$();return r.a.createElement(f.a,{title:"Inventory",subHeading:"Manage your inventory and ordering",defaultExpanded:!1},r.a.createElement(l.a,{container:!0,spacing:2,className:e.details},r.a.createElement(l.a,{item:!0,xs:12,lg:8},r.a.createElement(i.a,{variant:"h6",component:"h4",className:e.contentHeadings},"Reduce cost of stock or materials"),r.a.createElement(Ne,null)),r.a.createElement(l.a,{item:!0,xs:12,lg:4,className:e.actionGridItem},r.a.createElement(Y,{container:"cashOutActions",title:"Inventory Lever",subtitle:"Reduce cost of stock or materials"},r.a.createElement(i.a,{variant:"h6"},"Things to consider"),r.a.createElement(Ne,null)))),r.a.createElement(l.a,{container:!0,spacing:2,className:e.details},r.a.createElement(l.a,{item:!0,xs:12,lg:8},r.a.createElement(i.a,{variant:"h6",component:"h4",className:e.contentHeadings},"Improve terms with suppliers"),r.a.createElement(xe,null)),r.a.createElement(l.a,{item:!0,xs:12,lg:4,className:e.actionGridItem},r.a.createElement(Y,{container:"cashOutActions",title:"Inventory Lever",subtitle:"Improve terms with suppliers"},r.a.createElement(i.a,{variant:"h6"},"Things to consider"),r.a.createElement(xe,null)))),r.a.createElement(l.a,{container:!0,spacing:2,className:e.details},r.a.createElement(l.a,{item:!0,xs:12,lg:8},r.a.createElement(i.a,{variant:"h6",component:"h4",className:e.contentHeadings},"Clear obsolete or slow moving stock"),r.a.createElement(Ce,null)),r.a.createElement(l.a,{item:!0,xs:12,lg:4,className:e.actionGridItem},r.a.createElement(Y,{container:"cashOutActions",title:"Inventory Lever",subtitle:"Clear obsolete or slow moving stock"},r.a.createElement(i.a,{variant:"h6"},"Things to consider"),r.a.createElement(Ce,null)))),r.a.createElement(l.a,{container:!0,spacing:2,className:e.details},r.a.createElement(l.a,{item:!0,xs:12,lg:8},r.a.createElement(i.a,{variant:"h6",component:"h4",className:e.contentHeadings},"Improve ordering process"),r.a.createElement(we,null)),r.a.createElement(l.a,{item:!0,xs:12,lg:4,className:e.actionGridItem},r.a.createElement(Y,{container:"cashOutActions",title:"Inventory Lever",subtitle:"Improve ordering process"},r.a.createElement(i.a,{variant:"h6"},"Things to consider"),r.a.createElement(we,null)))))}function Oe(){return r.a.createElement("ul",{className:"change-levers-ul"},r.a.createElement(i.a,{component:"li"},"Can you outsource some tasks or roles or increase the flexibility of your workforce through part-time, casual or contracted staff?"),r.a.createElement(i.a,{component:"li"},"Do you have the right staff focused on delivering your core products and services to your target customers?"))}function Ie(){return r.a.createElement("ul",{className:"change-levers-ul"},r.a.createElement(i.a,{component:"li"},"Do your staff understand their contribution to helping you operate the business?"),r.a.createElement(i.a,{component:"li"},"Do you track staff utilisation and set targets for your staff to achieve?"),r.a.createElement(i.a,{component:"li"},"Would higher qualified staff deliver more?"))}function je(){return r.a.createElement("ul",{className:"change-levers-ul"},r.a.createElement(i.a,{component:"li"},"Do you have enough staff to cover your peak periods?"),r.a.createElement(i.a,{component:"li"},"Could you reduce your workforce?"),r.a.createElement(i.a,{component:"li"},"Could you cut back on hours?"))}function Ae(){return r.a.createElement("ul",{className:"change-levers-ul"},r.a.createElement(i.a,{component:"li"},"How can you keep your staff happy? More training? Review of remuneration? Alignment to the business goals? Positive culture?"),r.a.createElement(i.a,{component:"li"},"Could you reduce hiring costs with better retention?"))}function Te(){return r.a.createElement("ul",{className:"change-levers-ul"},r.a.createElement(i.a,{component:"li"},"Do you need specialist skills such as sales and marketing to help your business succeed?"),r.a.createElement(i.a,{component:"li"},"Do you know all the laws and regulations that you need to follow to employ someone?"),r.a.createElement(i.a,{component:"li"},"Can you afford an employee? Consider the total cost of employment, including superannuation, Workcover and taxes."))}function He(){var e=$();return r.a.createElement(f.a,{title:"Staffing",subHeading:"Employ the right staff",defaultExpanded:!1},r.a.createElement(l.a,{container:!0,spacing:2,className:e.details},r.a.createElement(l.a,{item:!0,xs:12,lg:8},r.a.createElement(i.a,{variant:"h6",component:"h4",className:e.contentHeadings},"Change staff mix"),r.a.createElement(Oe,null)),r.a.createElement(l.a,{item:!0,xs:12,lg:4,className:e.actionGridItem},r.a.createElement(Y,{container:"cashOutActions",title:"Staffing Lever",subtitle:"Change staff mix"},r.a.createElement(i.a,{variant:"h6"},"Things to consider"),r.a.createElement(Oe,null)))),r.a.createElement(l.a,{container:!0,spacing:2,className:e.details},r.a.createElement(l.a,{item:!0,xs:12,lg:8},r.a.createElement(i.a,{variant:"h6",component:"h4",className:e.contentHeadings},"Increase utilisation"),r.a.createElement(Ie,null)),r.a.createElement(l.a,{item:!0,xs:12,lg:4,className:e.actionGridItem},r.a.createElement(Y,{container:"cashOutActions",title:"Staffing Lever",subtitle:"Increase utilisation"},r.a.createElement(i.a,{variant:"h6"},"Things to consider"),r.a.createElement(Ie,null)))),r.a.createElement(l.a,{container:!0,spacing:2,className:e.details},r.a.createElement(l.a,{item:!0,xs:12,lg:8},r.a.createElement(i.a,{variant:"h6",component:"h4",className:e.contentHeadings},"Match staffing levels to demand"),r.a.createElement(je,null)),r.a.createElement(l.a,{item:!0,xs:12,lg:4,className:e.actionGridItem},r.a.createElement(Y,{container:"cashOutActions",title:"Staffing Lever",subtitle:"Match staffing levels to demand"},r.a.createElement(i.a,{variant:"h6"},"Things to consider"),r.a.createElement(je,null)))),r.a.createElement(l.a,{container:!0,spacing:2,className:e.details},r.a.createElement(l.a,{item:!0,xs:12,lg:8},r.a.createElement(i.a,{variant:"h6",component:"h4",className:e.contentHeadings},"Reduce turnover"),r.a.createElement(Ae,null)),r.a.createElement(l.a,{item:!0,xs:12,lg:4,className:e.actionGridItem},r.a.createElement(Y,{container:"cashOutActions",title:"Staffing Lever",subtitle:"Reduce turnover"},r.a.createElement(i.a,{variant:"h6"},"Things to consider"),r.a.createElement(Ae,null)))),r.a.createElement(l.a,{container:!0,spacing:2,className:e.details},r.a.createElement(l.a,{item:!0,xs:12,lg:8},r.a.createElement(i.a,{variant:"h6",component:"h4",className:e.contentHeadings},"Employing staff"),r.a.createElement(Te,null)),r.a.createElement(l.a,{item:!0,xs:12,lg:4,className:e.actionGridItem},r.a.createElement(Y,{container:"cashOutActions",title:"Staffing Lever",subtitle:"Employing staff"},r.a.createElement(i.a,{variant:"h6"},"Things to consider"),r.a.createElement(Te,null)))))}var Se=a(57);t.default=function(){var e=Object(c.a)((function(e){return{pushDown:{marginBottom:e.spacing(4)}}}))();return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{role:"main"},r.a.createElement(l.a,{container:!0,spacing:3},r.a.createElement(l.a,{item:!0,xs:12,md:9},r.a.createElement(o.a,{className:"content-area"},r.a.createElement(y.a,{component:"h1"},"Change Levers"),r.a.createElement(i.a,null,"Use your new cash flow knowledge to explore possible changes you can make to improve your cash flow."),r.a.createElement(i.a,null,"Below are actions that will improve your cash flow in and out."),r.a.createElement(i.a,null,"Add the actions you want to take to your Action Checklist.")),r.a.createElement(Se.a,{space:3}),r.a.createElement(y.a,{component:"h2"},"Improve cash flow in"),r.a.createElement(o.a,{className:e.pushDown},r.a.createElement(ne,null),r.a.createElement(ie,null),r.a.createElement(Ee,null)),r.a.createElement(y.a,{component:"h2"},"Reduce cash flow out"),r.a.createElement(o.a,null,r.a.createElement(fe,null),r.a.createElement(be,null),r.a.createElement(ke,null),r.a.createElement(He,null))),r.a.createElement(l.a,{item:!0,xs:12,md:3},r.a.createElement(g.a,null),r.a.createElement(f.a,null,r.a.createElement(s.a,{component:"nav",disablePadding:!0},r.a.createElement(m.a,{component:"a",href:"/pdf/Change levers.pdf",target:"_blank",rel:"noopener noreferrer",style:{color:"inherit"}},r.a.createElement(u.a,null,r.a.createElement(p.a,null)),r.a.createElement(d.a,null,"Change Levers PDF"))))))),r.a.createElement(v.a,{tip:"ChangeLevers"}))}},824:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n),c=a(804),l=a(1482),o=a(312),i=a(337),s=a.n(i);function m(e){var t=e.open,a=e.msg,n=e.onClose,i=e.severity,m=void 0===i?"info":i;return r.a.createElement(l.a,{open:t,autoHideDuration:2e3,anchorOrigin:{vertical:"top",horizontal:"center"},onClose:n},r.a.createElement(c.a,{severity:m,variant:"filled",action:r.a.createElement(o.a,{size:"small","aria-label":"close",color:"inherit"},r.a.createElement(s.a,{fontSize:"small"}))},a))}},832:function(e,t,a){var n={"./ActionChecklistTip":[825,4],"./ActionChecklistTip.tsx":[825,4],"./CFCanvasTip":[826,5],"./CFCanvasTip.tsx":[826,5],"./ChangeLevers":[827,6],"./ChangeLevers.tsx":[827,6],"./ClientListTips":[828,7],"./ClientListTips.tsx":[828,7],"./CoachingKitTips":[829,8],"./CoachingKitTips.tsx":[829,8],"./DiscoverTopicsTips":[830,9],"./DiscoverTopicsTips.tsx":[830,9],"./HCQuestionnaire":[831,10],"./HCQuestionnaire.tsx":[831,10],"./style":[822,11],"./style.ts":[822,11]};function r(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return a.e(t[1]).then((function(){return a(r)}))}r.keys=function(){return Object.keys(n)},r.id=832,e.exports=r},834:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(13),r=a(0),c=a.n(r),l=a(874),o=a(813),i=a(741),s=a(74),m=a(735),u=a(379),d=a.n(u),E=a(380),p=a.n(E),h=a(140),g=Object(h.a)((function(e){return{root:{position:"fixed",left:e.spacing(2),bottom:e.spacing(2)},icon:{marginRight:e.spacing(1)},drawer:{padding:e.spacing(2),maxWidth:"350px",width:"100%"},closeBox:{display:"flex",justifyContent:"space-between",marginBottom:e.spacing(2),paddingBottom:e.spacing(2),borderBottom:1,borderBottomColor:e.palette.grey[500],borderBottomStyle:"solid"}}})),f=a(49),v=a(178),y=Object(f.a)((function(e){return a(832)("./".concat(e.tip))}),{fallback:c.a.createElement(v.a,null)}),b=function(e){var t=e.tip,a=g(),u=Object(r.useState)(!1),E=Object(n.a)(u,2),h=E[0],f=E[1],v=function(e){return function(t){t instanceof KeyboardEvent&&"keydown"===t.type&&("Tab"===t.key||"Shift"===t.key)||f(e)}};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:a.root,role:"complementary"},c.a.createElement(l.a,{color:"secondary",onClick:v(!0),variant:"extended"},c.a.createElement(d.a,{className:a.icon}),"Tips")),c.a.createElement(o.a,{anchor:"left",open:h,onClose:v(!1),classes:{paper:a.drawer}},c.a.createElement(i.a,{className:a.closeBox},c.a.createElement(s.a,{variant:"h6"},"Tips"),c.a.createElement(m.a,{onClick:v(!1),startIcon:c.a.createElement(p.a,null)},"Close")),c.a.createElement(y,{tip:t})))}},840:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(110),r=a(0),c=a.n(r),l=a(74),o=a(36),i=a(140),s=Object(i.a)((function(e){return{title:Object(o.a)({fontWeight:500,marginBottom:e.spacing(2)},e.breakpoints.down("sm"),{fontSize:e.typography.h5.fontSize})}})),m=function(e){var t=e.children,a=e.className,r=Object(n.a)(e,["children","className"]),o=s();return c.a.createElement(l.a,Object.assign({variant:"h4",color:"textPrimary",className:"".concat(o.title," ").concat(a)},r),t)}},841:function(e,t,a){"use strict";var n=a(824);a.d(t,"a",(function(){return n.a}))},867:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(13),r=a(0),c=a.n(r),l=a(389),o=a(392);function i(e){var t=e.onClick,a=Object(r.useState)(!1),i=Object(n.a)(a,2),s=i[0],m=i[1];function u(){m(!1)}return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{onClick:function(e){e.preventDefault(),m(!0)}}),c.a.createElement(o.a,{open:s,onClose:u,onCancel:u,onConfirm:function(e){t(e),u()}},"Are you sure you want to remove this item?"))}},902:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(0),r=a.n(n),c=a(741),l=a(767),o=a(737),i=a(788),s=a(382),m=a(394),u=a(74),d=a(387),E=a(251),p=function(e){var t=e.answers,a=Object(m.a)();return r.a.createElement(E.a,{title:"Four Key Questions",reactourLabel:"four-questions-nav"},r.a.createElement(c.a,{className:a.box},r.a.createElement(l.a,{className:a.list},s.b.map((function(e,n){return r.a.createElement(c.a,{key:e,component:"li"},r.a.createElement(o.a,{component:"div",className:"".concat(a.listItem," ").concat(0===n?a.listItemFirst:"")},r.a.createElement(i.a,{className:a.listItemText},"".concat(n+1,". ").concat(e),r.a.createElement(c.a,{className:a.answerIconRoot},(null===t||void 0===t?void 0:t[n])&&function(e){var t=Object(d.a)(e,s.a);return t?r.a.createElement(t.Icon,{style:{color:t.color}}):r.a.createElement(r.a.Fragment,null)}(t[n]),function(e,t){if(t&&"undefined"!==typeof t[e]){var a=Object(d.a)(t[e],s.a).color;return r.a.createElement(u.a,{style:{color:a,fontWeight:500}},s.c[e].options[t[e]])}return!1}(n,t)))))})))))}}}]);
//# sourceMappingURL=29.a0be54c6.chunk.js.map