(this["webpackJsonpdcfck-app"]=this["webpackJsonpdcfck-app"]||[]).push([[19],{1391:function(e,t,n){"use strict";n.r(t);var a=n(19),c=n.n(a),i=n(31),r=n(14),o=n(0),s=n.n(o),d=n(799),l=n(761),u=n(74),j=n(790),b=n(788),p=n(757),f=n(822),O=n(809),h=n(849),x=n.n(h),m=n(826),g=n(339),v=n(847),y=n(876),k=n(254),w=n(805),C=n(829),N=n(142),I=Object(N.a)((function(e){return{root:{marginBottom:e.spacing(2)},box:{flexGrow:2,display:"flex",justifyContent:"flex-end"}}})),A=n(393),S=n(88),B=n(1),T=function(){var e=I(),t=Object(o.useContext)(A.a),n=t.hideCompleted,a=t.dispatch;return Object(B.jsx)(l.a,{className:e.root,children:Object(B.jsx)(w.a,{control:Object(B.jsx)(C.a,{checked:n,onChange:function(e){a({type:S.a.ChangeHideCompleted,payload:e.target.checked})},name:"hide-items"}),label:"Hide completed actions"})})},M=n(47),R=n(6),D=n(1332),H=n(825),F=n(36),P=Object(N.a)((function(e){return{dropdownBody:{paddingRight:e.spacing(2),paddingLeft:e.spacing(2)}}})),z=Object(N.a)((function(e){return{actionsWrapper:Object(F.a)({display:"flex",justifyContent:"flex-start",marginTop:e.spacing(3),alignItems:"center"},e.breakpoints.down("sm"),{flexDirection:"column",alignItems:"flex-start",marginTop:e.spacing(2)}),saveIndicator:Object(F.a)({userSelect:"none"},e.breakpoints.up("sm"),{marginLeft:e.spacing(2)})}})),E=Object(N.a)((function(e){return{gridRoot:{alignItems:"center",margin:0,width:"100%",background:"white","& > .MuiGrid-item":{paddingTop:e.spacing(1),paddingBottom:e.spacing(1)}},hide:{height:"10px",background:e.palette.grey[200],marginTop:e.spacing(1),marginBottom:e.spacing(1),"& > *":{display:"none !important"}},textfield:{width:"100%"},actions:{display:"flex",justifyContent:"flex-end"},dragIcon:{cursor:"move"},completedText:{padding:"18.5px 14px",lineHeight:"1.1876em",textDecoration:"line-through"},datepicker:{margin:0}}})),K=Object(N.a)((function(e){return{box:{marginTop:e.spacing(3)},textfield:{width:"100%"},gridRoot:{alignItems:"center"},gridActions:{display:"flex",justifyContent:"flex-end"}}})),U=n(386),L=n.n(U),W=n(755),G=n(337),_=function(e){var t=e.addNewAction,n=e.disabled,a=e.saving,c=e.lastSaved,i=z();return Object(B.jsxs)(l.a,{className:i.actionsWrapper,children:[Object(B.jsx)(W.a,{variant:"outlined",color:"primary",startIcon:Object(B.jsx)(L.a,{}),onClick:t,disabled:n,children:"Add action"}),Object(B.jsx)(u.a,{variant:"overline",color:"textSecondary",className:i.saveIndicator,children:a?"Saving...":"Saved at ".concat(Object(G.a)(c,"H:mm:ss a"))})]})},J=n(834),q=n(831),Q=n(316),V=n(1358),Y=n.n(V),X=n(405),Z=n.n(X),$=n(73),ee=n(823),te=n(408),ne=n(400),ae=function(e){var t=e.index,n=e.draggableId,a=e.data,s=e.dispatch,l=e.deleteAction,j=e.lastItemInList,b=e.globalHide,p=E(),f=Object(o.useState)(a.description),O=Object(r.a)(f,2),h=O[0],x=O[1],m=Object(o.useState)(!1),g=Object(r.a)(m,2),v=g[0],y=g[1],k=Object(o.useState)(!1),w=Object(r.a)(k,2),N=w[0],I=w[1],A=function(e){(null===a||void 0===a?void 0:a.id)&&s({type:S.a.UpdateActionItem,payload:{id:a.id,data:e}})},T=function(){y(!1)},M=function(){j?(x(""),A(Object(R.a)(Object(R.a)({},a),{},{description:"",completed:!1,reviewBy:new Date}))):l(a.id||""),y(!1)},H=function(e){x(e.target.value)},F=function(){var e=Object(i.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.description!==h&&A(Object(R.a)(Object(R.a)({},a),{},{description:h}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(e){e&&(A(Object(R.a)(Object(R.a)({},a),{},{reviewBy:e})),I(!1))},z=function(){return""!==h},K=function(e){A(Object(R.a)(Object(R.a)({},a),{},{completed:e.target.checked}))},U=function(e){e.preventDefault(),y(!0)};return Object(B.jsx)(D.b,{draggableId:"".concat(n),index:t,children:function(e){return Object(B.jsx)("div",Object(R.a)(Object(R.a)({},e.draggableProps),{},{ref:e.innerRef,className:"action-item",children:Object(B.jsxs)(d.a,{container:!0,spacing:2,className:"".concat(p.gridRoot," ").concat(b&&a.completed?p.hide:""),children:[Object(B.jsx)(d.a,{item:!0,xs:2,sm:1,md:1,children:Object(B.jsx)(J.a,{title:"Mark as done",children:Object(B.jsx)(C.a,{checked:a.completed,inputProps:{"aria-label":"completed checkbox"},id:"action-complete--".concat(null===a||void 0===a?void 0:a.id),onChange:K,disabled:!z(),indeterminate:!z()})})}),Object(B.jsx)(d.a,{item:!0,xs:10,sm:5,md:6,children:a.completed?Object(B.jsx)(u.a,{className:p.completedText,children:a.description}):Object(B.jsx)(q.a,{className:p.textfield,id:"action-description--".concat(null===a||void 0===a?void 0:a.id),label:"Action item",variant:"outlined",value:h,onChange:H,onBlur:F})}),Object(B.jsx)(d.a,{item:!0,xs:12,sm:4,md:3,children:a.completed?Object(B.jsx)(u.a,{className:p.completedText,children:Object(G.a)(a.reviewBy,"dd/MM/yyyy")}):Object(B.jsx)($.a,{utils:te.a,children:Object(B.jsx)(ee.a,{disableToolbar:!0,variant:"inline",inputVariant:"outlined",format:"dd/MM/yyyy",id:"action-reviewby--".concat(null===a||void 0===a?void 0:a.id),label:"Review by",value:a.reviewBy,onChange:P,KeyboardButtonProps:{"aria-label":"change date"},className:p.datepicker,open:N,onOpen:function(){return I(!0)},onClose:function(){return I(!1)},fullWidth:!0})})}),Object(B.jsxs)(d.a,{item:!0,xs:12,sm:2,md:2,className:p.actions,children:[Object(B.jsx)(J.a,{title:"Delete",children:Object(B.jsxs)(Q.a,{onClick:U,children:[Object(B.jsx)(Z.a,{}),Object(B.jsx)("span",{className:"MuiTypography-srOnly",children:"Delete item"})]})}),Object(B.jsx)(ne.a,{open:v,onClose:T,onCancel:T,onConfirm:M,children:"Are you sure you want to remove this item?"}),Object(B.jsx)(J.a,{title:"Reposition",children:Object(B.jsxs)(Q.a,Object(R.a)(Object(R.a)({className:p.dragIcon},e.dragHandleProps),{},{children:[Object(B.jsx)(Y.a,{}),Object(B.jsx)("span",{className:"MuiTypography-srOnly",children:"Reorder priority"})]}))})]})]})}))}})},ce=n(392),ie=n(111),re=function(e){var t=e.currentClient,n=e.container,a=e.note,s=e.dispatch,u=K(),j=Object(o.useState)((null===a||void 0===a?void 0:a.notes)||""),b=Object(r.a)(j,2),p=b[0],f=b[1],O=function(){var e=Object(i.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===a||void 0===a?void 0:a.id)||a.notes===p){e.next=5;break}return t=Object(R.a)(Object(R.a)({},a),{},{notes:p}),s({type:S.a.UpdateNotes,payload:{id:a.id,data:t}}),e.next=5,ce.a.update(a.id,t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(i.a)(c.a.mark((function e(a){var i,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),i=Object(ie.d)(t,n),e.next=4,ce.a.create(i);case 4:r=e.sent,s({type:S.a.AddNotes,payload:Object(R.a)({id:r},i)});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(i.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(null===a||void 0===a?void 0:a.id)){e.next=5;break}return s({type:S.a.RemoveNote,payload:a.id}),e.next=5,ce.a.delete(a.id);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(B.jsx)(l.a,{className:u.box,children:a?Object(B.jsxs)(d.a,{container:!0,className:u.gridRoot,children:[Object(B.jsx)(d.a,{item:!0,xs:10,children:Object(B.jsx)(q.a,{className:u.textfield,label:"Notes",multiline:!0,rows:3,variant:"outlined",value:p,onChange:function(e){f(e.target.value)},onBlur:O})}),Object(B.jsx)(d.a,{item:!0,xs:2,className:u.gridActions,children:Object(B.jsx)(J.a,{title:"Delete note",children:Object(B.jsxs)(Q.a,{onClick:x,children:[Object(B.jsx)(Z.a,{}),Object(B.jsx)("span",{className:"MuiTypography-srOnly",children:"Delete note"})]})})})]}):Object(B.jsx)(W.a,{startIcon:Object(B.jsx)(L.a,{}),onClick:h,children:"Add notes"})})},oe=n(878),se=function(e){return oe.a[e]},de=function(e){return e[e.length-1]},le=n(255),ue=n(488),je=n(225),be=n(188),pe=function(e,t,n,a){var c=Object(M.a)(e);return c.splice(t,1),c.splice(n,0,a),c},fe=function(e){var t=e.identfier,n=e.data,a=e.priority,s=e.notes,d=e.currentClient,u=P(),j=Object(o.useContext)(A.a),b=j.dispatch,p=j.hideCompleted,f=Object(o.useState)(Object(le.b)()),O=Object(r.a)(f,1)[0],h=Object(o.useState)(!1),x=Object(r.a)(h,2),m=x[0],g=x[1],v=Object(o.useState)(!0),y=Object(r.a)(v,2),w=y[0],C=y[1],N=Object(o.useState)(new Date),I=Object(r.a)(N,2),T=I[0],F=I[1];Object(o.useEffect)((function(){var e=setInterval(Object(i.a)(c.a.mark((function e(){var i,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,je.a.findByClientAndContainer(t,d);case 4:return i=e.sent,e.next=7,be.a.findByClientAndContainer(t,d);case 7:if(r=e.sent,Object(H.a)(i,n)&&Object(H.a)(r[0],a)){e.next=17;break}return g(!0),e.next=12,je.a.bulkUpdate(n);case 12:if(!(null===a||void 0===a?void 0:a.id)){e.next=15;break}return e.next=15,be.a.update(a.id,a);case 15:F(new Date),g(!1);case 17:case"end":return e.stop()}}),e)}))),2e3);return function(){return clearInterval(e)}}),[n,t,a,d,w]);var z,E=function(){var e=Object(i.a)(c.a.mark((function e(n){var i,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!d||!a.id){e.next=9;break}return i=Object(ie.c)(d,t),e.next=5,je.a.create(i);case 5:return r=e.sent,e.next=8,be.a.update(a.id,Object(R.a)(Object(R.a)({},a),{},{order:[].concat(Object(M.a)(a.order),[r])}));case 8:b({type:S.a.AddNewActionItem,payload:{checklist:Object(R.a)({id:r},i),priority:a.id}});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(i.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.id){e.next=9;break}return C(!1),e.next=4,je.a.delete(t);case 4:if(1!==a.order.length){e.next=7;break}return e.next=7,be.a.delete(a.id);case 7:b({type:S.a.RemoveActionItem,payload:{targetId:t,priorityId:a.id}}),C(!0);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(e,t){var a=Object(ue.a)(n,"id",e);if(-1===a)return Object(B.jsx)(o.Fragment,{},Object(le.a)(O,t));var c=n[a];return(null===c||void 0===c?void 0:c.id)?Object(B.jsx)(ae,{draggableId:null===c||void 0===c?void 0:c.id,index:t,data:c,dispatch:b,deleteAction:K,lastItemInList:1===n.length,globalHide:p},null===c||void 0===c?void 0:c.id):Object(B.jsx)(o.Fragment,{},Object(le.a)(O,t))};return Object(B.jsx)(k.a,{title:se(t),children:Object(B.jsx)(D.a,{onDragEnd:function(e){var t=e.destination,n=e.source,c=e.draggableId;if(t&&(t.droppableId!==n.droppableId||t.index!==n.index)){var i=pe(a.order,n.index,t.index,c);b({type:S.a.UpdatePriorityOrder,payload:Object(R.a)(Object(R.a)({},a),{},{order:i})})}},children:Object(B.jsxs)(l.a,{className:u.dropdownBody,children:[Object(B.jsx)(D.c,{droppableId:t,children:function(e){return Object(B.jsxs)("div",Object(R.a)(Object(R.a)({},e.droppableProps),{},{ref:e.innerRef,children:[a.order.map(U),e.placeholder]}))}}),(z=t,-1===["cashInActions","cashOutActions"].indexOf(z)&&Object(B.jsx)(re,{currentClient:d,container:t,note:s,dispatch:b})),Object(B.jsx)(_,{addNewAction:E,disabled:""===de(n).description,saving:m,lastSaved:T})]})})})},Oe=s.a.memo(fe),he=n(844),xe={cashInActions:"cashInActions",cashOutActions:"cashOutActions",planningBusiness:"planningBusiness",recordKeeping:"recordKeeping",funding:"funding",managing:"managing",planningCommitments:"planningCommitments",tracking:"tracking",transition:"transition"},me=n(103),ge=n(396),ve=n(764),ye=Object(ve.a)({key:"ac_machine",initial:"loading",states:{loading:{on:{HAS_CONTENT:"content"}},content:{}}}),ke=n(187),we=n(57),Ce=n(887),Ne=n(860),Ie=n(843),Ae=function(){var e=Object(Ie.a)();return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsxs)(b.a,{className:e.list,children:[Object(B.jsx)(u.a,{component:"li",children:"Personalise actions by adding descriptions"}),Object(B.jsx)(u.a,{component:"li",children:"Set a review date for all actions"}),Object(B.jsx)(u.a,{component:"li",children:"Discuss strategies to complete the actions"}),Object(B.jsx)(u.a,{component:"li",children:"Use the reorder button to prioritise action items"})]}),Object(B.jsx)(u.a,{variant:"h6",children:"Next Steps"}),Object(B.jsxs)(b.a,{className:e.list,children:[Object(B.jsx)(u.a,{component:"li",children:"Agree a review date"}),Object(B.jsx)(u.a,{component:"li",children:"Track goals by updating and checking off actions"}),Object(B.jsx)(u.a,{component:"li",children:"After each review date, revisit Health Check and Actions for new insights"})]})]})};t.default=function(){var e=Object(m.a)(ye),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(o.useContext)(A.a),h=s.checklistCollection,w=s.priority,C=s.databaseSyced,N=s.notes,I=Object(o.useContext)(me.a).state.currentClient,S=Object(o.useState)(Object(le.b)()),M=Object(r.a)(S,1)[0];Object(o.useEffect)((function(){(null===I||void 0===I?void 0:I.id)&&C&&a("HAS_CONTENT")}),[I,C,a]);var R=function(){var e=Object(i.a)(c.a.mark((function e(){var t,n,a,i,r,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===I||void 0===I?void 0:I.id)){e.next=15;break}return n=I.id,e.next=4,je.a.findByClient(n);case 4:return a=e.sent,e.next=7,ce.a.findByClient(n);case 7:return i=e.sent,e.next=10,be.a.findByClient(n);case 10:return r=e.sent,e.next=13,Object(Ce.a)(null!==(t=null===I||void 0===I?void 0:I.name)&&void 0!==t?t:"Client",a,i,r);case 13:o=e.sent,Object(Ne.a)(o);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(g.a,{role:"main",children:Object(B.jsxs)(d.a,{container:!0,spacing:3,children:[Object(B.jsxs)(d.a,{item:!0,xs:12,md:9,children:[Object(B.jsx)(v.a,{component:"h1",children:"Action Checklist"}),Object(B.jsxs)(l.a,{className:"content-area",children:[Object(B.jsx)(u.a,{children:"Your checklist has all the actions you selected in previous parts of the Cash Flow Coaching Kit."}),Object(B.jsx)(u.a,{children:"Use the checklist to track, prioritise and review your actions."})]}),Object(B.jsx)(we.a,{}),Object(B.jsx)(j.a,{}),Object(B.jsx)(we.a,{}),Object(B.jsx)(T,{}),Object(B.jsx)(l.a,{children:function(){switch(n.value){case"content":return Object(B.jsx)(B.Fragment,{children:Object.keys(xe).map((function(e,t){if(null===I||void 0===I?void 0:I.id){var n=h.filter(Object(ge.a)(e)),a=w.filter(Object(ge.a)(e)),c=N.filter(Object(ge.a)(e));if(n.length>0&&a.length>0)return Object(B.jsx)(Oe,{identfier:e,data:n,priority:a[0],notes:c[0]||null,currentClient:I.id},Object(le.a)(M,t))}return Object(B.jsx)(o.Fragment,{},Object(le.a)(M,t))}))});case"loading":default:return Object(B.jsx)(ke.a,{})}}()})]}),Object(B.jsxs)(d.a,{item:!0,xs:12,md:3,children:[Object(B.jsx)(y.a,{}),Object(B.jsx)(k.a,{children:Object(B.jsx)(b.a,{component:"nav",disablePadding:!0,children:Object(B.jsxs)(p.a,{button:!0,children:[Object(B.jsx)(f.a,{children:Object(B.jsx)(x.a,{})}),Object(B.jsx)(O.a,{onClick:R,children:"Generate PDF"})]})})})]})]})}),Object(B.jsx)(he.a,{tip:Ae})]})}},843:function(e,t,n){"use strict";var a=n(142),c=Object(a.a)((function(e){return{list:{listStyle:"disc",paddingLeft:e.spacing(2)}}}));t.a=c},844:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n(14),c=n(0),i=n(867),r=n(839),o=n(761),s=n(74),d=n(755),l=n(387),u=n.n(l),j=n(388),b=n.n(j),p=n(142),f=Object(p.a)((function(e){return{root:{position:"fixed",left:e.spacing(2),bottom:e.spacing(2)},icon:{marginRight:e.spacing(1)},drawer:{padding:e.spacing(2),maxWidth:"350px",width:"100%"},closeBox:{display:"flex",justifyContent:"space-between",marginBottom:e.spacing(2),paddingBottom:e.spacing(2),borderBottom:1,borderBottomColor:e.palette.grey[500],borderBottomStyle:"solid"}}})),O=n(1),h=function(e){var t=e.tip,n=f(),l=Object(c.useState)(!1),j=Object(a.a)(l,2),p=j[0],h=j[1],x=function(e){return function(t){t instanceof KeyboardEvent&&"keydown"===t.type&&("Tab"===t.key||"Shift"===t.key)||h(e)}};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:n.root,role:"complementary",children:Object(O.jsxs)(i.a,{color:"secondary",onClick:x(!0),variant:"extended",children:[Object(O.jsx)(u.a,{className:n.icon}),"Tips"]})}),Object(O.jsxs)(r.a,{anchor:"left",open:p,onClose:x(!1),classes:{paper:n.drawer},children:[Object(O.jsxs)(o.a,{className:n.closeBox,children:[Object(O.jsx)(s.a,{variant:"h6",children:"Tips"}),Object(O.jsx)(d.a,{onClick:x(!1),startIcon:Object(O.jsx)(b.a,{}),children:"Close"})]}),Object(c.createElement)(t,{})]})]})}},847:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(6),c=n(112),i=(n(0),n(74)),r=n(36),o=n(142),s=Object(o.a)((function(e){return{title:Object(r.a)({fontWeight:500,marginBottom:e.spacing(2)},e.breakpoints.down("sm"),{fontSize:e.typography.h5.fontSize})}})),d=n(1),l=["children","className"],u=function(e){var t=e.children,n=e.className,r=Object(c.a)(e,l),o=s();return Object(d.jsx)(i.a,Object(a.a)(Object(a.a)({variant:"h4",color:"textPrimary",className:"".concat(o.title," ").concat(n)},r),{},{children:t}))}},850:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return d})),n.d(t,"b",(function(){return l}));var a=n(6),c=n(337),i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return{margin:t,columns:[e]}},r=function(){return{pageSize:"A4",pageMargins:[0,0,0,25],footer:{columns:[{text:"Created on the ".concat(Object(c.a)(new Date,"do 'of' MMMM yyyy")),alignment:"center",fontSize:12,color:"#333"}]}}},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return{table:{widths:["*"],body:[[e]]},style:t}},s=function(e){var t=o(i(e),["pageHeader"]);return Object(a.a)(Object(a.a)({},t),{},{layout:"noBorders"})},d=function(e){return i(e,20)},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return{table:{widths:["70%","*"],body:e},style:t,layout:"noBorders"}}},860:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(866);function c(e){var t=Object(a.a)();"ie"!==(null===t||void 0===t?void 0:t.name)&&"edge"!==(null===t||void 0===t?void 0:t.name)?e.open():e.download()}},876:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));n(0);var a=n(761),c=n(788),i=n(757),r=n(809),o=n(390),s=n(402),d=n(74),l=n(395),u=n(1),j=function(e,t){if(t&&"undefined"!==typeof t[e]){var n=Object(l.a)(t[e],o.a).color;return Object(u.jsx)(d.a,{style:{color:n,fontWeight:500},children:o.c[e].options[t[e]]})}return!1},b=n(254),p=function(e){var t=e.answers,n=Object(s.a)(),d=function(e){var t=Object(l.a)(e,o.a);return t?Object(u.jsx)(t.Icon,{style:{color:t.color}}):Object(u.jsx)(u.Fragment,{})};return Object(u.jsx)(b.a,{title:"Four Key Questions",reactourLabel:"four-questions-nav",children:Object(u.jsx)(a.a,{className:n.box,children:Object(u.jsx)(c.a,{className:n.list,children:o.b.map((function(e,c){return Object(u.jsx)(a.a,{component:"li",children:Object(u.jsx)(i.a,{component:"div",className:"".concat(n.listItem," ").concat(0===c?n.listItemFirst:""),children:Object(u.jsxs)(r.a,{className:n.listItemText,children:["".concat(c+1,". ").concat(e),Object(u.jsxs)(a.a,{className:n.answerIconRoot,children:[(null===t||void 0===t?void 0:t[c])&&d(t[c]),j(c,t)]})]})})},e)}))})})})}},878:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={cashInActions:"Cash IN actions",cashOutActions:"Cash OUT actions",planningBusiness:"Planning your business actions",recordKeeping:"Record keeping actions",funding:"Funding your business actions",managing:"Managing your cash flow actions",planningCommitments:"Planning your regular financial commitments actions",tracking:"Tracking your performance actions",transition:"Selling, closing and succession planning"}},887:function(e,t,n){"use strict";var a=n(19),c=n.n(a),i=n(47),r=n(6),o=n(31),s=n(857),d=n.n(s),l=n(858),u=n.n(l),j=n(337),b=n(820),p=n(850),f=n(878);d.a.vfs=u.a.pdfMake.vfs;var O=function(e){return 0===e.length?{text:"No action items",style:"noResult"}:Object(p.b)(e.map((function(e){var t=e.description,n=e.reviewBy,a=e.completed;return[{text:t||"No description provided",style:[""===t?"noResult":"",a?"completed":""]},{text:Object(j.a)(n,"dd/MM/yyyy"),style:[a?"completed":""]}]})))};t.a=function(){var e=Object(o.a)(c.a.mark((function e(t,n,a,o){var s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=Object(r.a)(Object(r.a)({},Object(p.d)()),{},{content:[Object(p.e)("".concat(t," - Action Checklist")),Object(p.f)(Object(i.a)(Object.keys(f.a).map((function(e,t){var c=[],i=n.filter((function(t){return t.actionContainer===e})),r=a.filter((function(t){return t.actionContainer===e})),s=o.filter((function(t){return t.actionContainer===e}));if(0===i.length||s.length<1)return"";var d=s[0].order.map((function(e){var t=i.findIndex((function(t){return(null===t||void 0===t?void 0:t.id)===e}));return i[t]})).filter((function(e){return"undefined"!==typeof e}));return 0!==t&&c.push(" "),c.push({text:f.a[e],style:"heading"}),c.push(O(d)),r.length>0&&""!==r[0].notes&&(c.push(" "),c.push({text:"Notes",style:"subHeading"}),c.push(r[0].notes)),c}))))],styles:{pageHeader:{fontSize:20,bold:!0,fillColor:b.a[800],color:"white",alignment:"center"},heading:{fontSize:16,bold:!0},subHeading:{fontSize:14,bold:!0},rightAlign:{alignment:"right"},noResult:{italics:!0,color:"#333"},completed:{decoration:"lineThrough"}},defaultStyle:{fontSize:15,bold:!1}}),e.abrupt("return",d.a.createPdf(s));case 2:case"end":return e.stop()}}),e)})));return function(t,n,a,c){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=19.ea0d7840.chunk.js.map