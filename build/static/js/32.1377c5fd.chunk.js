(this["webpackJsonpdcfck-app"]=this["webpackJsonpdcfck-app"]||[]).push([[32],{1765:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(778),o=a(741),i=a(74),l=a(336),s=a(834),u=a(5),m=a(13),p=a(767),d=a(737),h=a(788),E=a(769),f=a(793),b=a(790),y=a(378),g=a.n(y),v=a(254),w=a(102),C=a(255),k=a(36),x=a(140),O=Object(x.a)((function(e){var t;return{button:(t={},Object(k.a)(t,e.breakpoints.up("sm"),{marginLeft:e.spacing(2)}),Object(k.a)(t,e.breakpoints.down("sm"),{marginLeft:0,marginTop:e.spacing(2)}),t),actions:Object(k.a)({display:"flex",justifyContent:"flex-end"},e.breakpoints.down("sm"),{flexDirection:"column"})}})),j=a(40),N=a(12),T=function(){return r.a.createElement(f.a,null,r.a.createElement(i.a,{variant:"h6"},"No clients found"),r.a.createElement(i.a,null,"You are able to import previously exported clients or go"," ",r.a.createElement(j.b,{to:N.b.Home},"Home")," to read additional information"))},D=a(19),A=a.n(D),S=a(28),F=a(1392),H=a(807),W=a(312),I=a(374),B=a(916),L=a.n(B),_=a(252),q=a(79),M=a(191),U=a(861),Y=a(219),z=a(181),K=a(384),R=a(218),P=function(){var e=Object(S.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.delete(t);case 3:return e.next=5,U.a.deleteByClient(t);case 5:return e.next=7,Y.a.deleteByClient(t);case 7:return e.next=9,z.a.deleteByClient(t);case 9:return e.next=11,K.a.deleteByClient(t);case 11:return e.next=13,R.a.deleteByClient(t);case 13:return e.abrupt("return",!0);case 16:return e.prev=16,e.t0=e.catch(0),e.abrupt("return",e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),J=a(867),Q=a(278),G=a(107),V=a(385),X=a(86),Z=function(e){var t=e.store,a=t.state,c=a.clients,o=a.currentClient,i=t.dispatch,l=e.showSnackbar,s=Object(n.useState)(Object(_.b)()),u=Object(m.a)(s,1)[0],E=Object(n.useContext)(V.a).dispatch,f=function(e){return function(){(null===e||void 0===e?void 0:e.id)&&(i({type:q.a.ChangeCurrentClient,payload:e.id}),l("You are now managing ".concat(e.name),"success"))}},b=function(e){return function(){var t=Object(S.a)(A.a.mark((function t(a){var n,r,s,u,m;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),!e){t.next=23;break}return n=Object(I.a)(c),t.next=5,P(e);case 5:if(!((r=t.sent)instanceof Error)){t.next=9;break}return l(r.message,"error"),t.abrupt("return");case 9:return e!==(null===o||void 0===o?void 0:o.id)&&1!==n.length||(Object(G.c)(),i({type:q.a.ChangeCurrentClient,payload:G.a})),t.next=12,Object(Q.a)(i);case 12:return t.next=14,Y.a.syncWithDatabase();case 14:return s=t.sent,t.next=17,z.a.syncWithDatabase();case 17:return u=t.sent,t.next=20,K.a.syncWithDatabase();case 20:m=t.sent,E({type:X.a.UpdateDatabaseSync,payload:{data:s,priority:u,notes:m}}),l("Client data has been deleted","success");case 23:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null,c.map((function(e,t){return r.a.createElement(d.a,{key:Object(_.a)(u,t),className:"list-item-padded"},r.a.createElement(h.a,{className:"truncate list-item",primary:e.name}),r.a.createElement(F.a,null,!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e&&e.id===t||!1}(o,e.id)&&r.a.createElement(H.a,{title:"Manage client"},r.a.createElement(W.a,{onClick:f(e)},r.a.createElement(L.a,null),r.a.createElement("span",{className:"MuiTypography-srOnly"},"Manage client"))),r.a.createElement(J.a,{onClick:b(e.id)})))}))))},$=a(404),ee=a(275),te=Object(ee.a)({key:"client_listing_machine",initial:"loading",states:{loading:{on:{IS_EMPTY:"empty",HAS_DATA:"data"}},empty:{on:{HAS_DATA:"data"}},data:{on:{IS_EMPTY:"empty"}}}}),ae=a(179),ne=a(840),re=a(824),ce=a(57),oe=a(735),ie=a(770),le=a(771),se=a(772),ue=a(774),me=a(1486),pe=a.n(me),de=a(476),he=a(170),Ee=a(477),fe=a(156),be=a(220),ye=a(85),ge=a(158);function ve(e,t){if(navigator.msSaveBlob)navigator.msSaveBlob(e,t);else{var a=URL.createObjectURL(e),n=document.createElement("a");n.setAttribute("href",a),n.setAttribute("download",t),document.body.appendChild(n),n.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window})),document.body.removeChild(n)}}function we(e){return function(t,a){return!!a&&("clients"===t?a.id===e:!!Object(he.a)(a,"clientId")&&a.clientId===e)}}function Ce(e,t){return ke.apply(this,arguments)}function ke(){return(ke=Object(S.a)(A.a.mark((function e(t,a){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(de.a)(t,{filter:we(a)});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function xe(e,t){return Oe.apply(this,arguments)}function Oe(){return(Oe=Object(S.a)(A.a.mark((function e(t,a){var n,r,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ce(t,a);case 2:return n=e.sent,e.next=5,Object(Ee.a)(n);case 5:if((r=e.sent)&&"string"===typeof r){e.next=8;break}return e.abrupt("return",null);case 8:return c=JSON.parse(r),e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function je(e){return Ne.apply(this,arguments)}function Ne(){return(Ne=Object(S.a)(A.a.mark((function e(t){var a,n,r,c,o;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,xe(fe.a,t);case 2:return a=e.sent,e.next=5,xe(be.a,t);case 5:return n=e.sent,e.next=8,xe(ye.a,t);case 8:return r=e.sent,e.next=11,xe(ge.a,t);case 11:return c=e.sent,o={ClientDatabase:a,HealthCheckDatabase:n,ActionChecklistDatabase:r,CFCDatabase:c},e.abrupt("return",o);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Te(e){return De.apply(this,arguments)}function De(){return(De=Object(S.a)(A.a.mark((function e(t){var a,n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.findById(t);case 2:if(a=e.sent){e.next=5;break}throw new Error("Requested client could not be found");case 5:return e.next=7,je(t);case 7:return n=e.sent,ve(new Blob([JSON.stringify(n)],{type:"application/json"}),"".concat(a.name.replace(/ /g,"-").toLowerCase(),"--exported-data.json")),e.abrupt("return",!0);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Ae=Object(x.a)((function(e){return{box:{display:"flex",alignItems:"center"},btn:{marginRight:e.spacing(1),width:"100%"}}}));function Se(e){var t=e.client,a=e.showSnackbar,c=Object(n.useState)(!1),l=Object(m.a)(c,2),s=l[0],u=l[1],p=Object(n.useState)(!1),d=Object(m.a)(p,2),h=d[0],E=d[1],f=Ae(),b=Object(n.useCallback)(Object(S.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===t){e.next=15;break}return e.prev=1,u(!0),e.next=5,Te(t);case 5:a("Client data has been exported","success"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a(e.t0.message,"error");case 11:return e.prev=11,u(!1),E(!1),e.finish(11);case 15:case"end":return e.stop()}}),e,null,[[1,8,11,15]])}))),[t,u,a,E]),y=function(){return E(!1)};return r.a.createElement(o.a,{className:f.box},r.a.createElement(oe.a,{startIcon:r.a.createElement(pe.a,null),onClick:function(){return E(!0)},variant:"outlined",disabled:s,className:f.btn},"Export data"),r.a.createElement(ie.a,{open:h,onClose:y,"aria-labelledby":"export-client-data-dialog-title","aria-describedby":"export-client-data-dialog-description"},r.a.createElement(le.a,{id:"export-client-data-dialog-title"},"Export client data"),r.a.createElement(se.a,null,r.a.createElement(i.a,{id:"export-client-data-dialog-description"},"Your file will save to your browser's automatic download location. It is saved as a .json file. Once downloaded you can move the file to any location on your computer.")),r.a.createElement(ue.a,null,r.a.createElement(oe.a,{onClick:y},"Close"),r.a.createElement(oe.a,{onClick:b,color:"primary",autoFocus:!0,variant:"contained"},"Export data"))))}var Fe=function(){var e=Object(n.useContext)(w.a),t=e.state,a=t.clientSynced,c=t.clients,i=t.currentClient,l=Object(v.useMachine)(te),s=Object(m.a)(l,2),y=s[0],k=s[1],x=O(),j=Object(n.useState)({open:!1,msg:""}),N=Object(m.a)(j,2),D=N[0],A=N[1];function S(e,t){A(Object(u.a)(Object(u.a)({},D),{},{msg:e,severity:t,open:!0}))}function F(e,t){t&&"clickaway"===t||A(Object(u.a)(Object(u.a)({},D),{},{open:!1}))}Object(n.useEffect)((function(){a&&(c.length>0?k("HAS_DATA"):k("IS_EMPTY"))}),[a,c,k]);var H=function(t){switch(y.value){case"data":return"list"===t?r.a.createElement(Z,{store:e,showSnackbar:S}):"current"===t?r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null,r.a.createElement(d.a,null,r.a.createElement(h.a,{className:"truncate list-item"},null===i||void 0===i?void 0:i.name))),r.a.createElement(E.a,null),(null===i||void 0===i?void 0:i.id)&&r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{className:x.actions},r.a.createElement(Se,{client:i.id,showSnackbar:S})),r.a.createElement(re.a,Object.assign({},D,{onClose:F})))):r.a.createElement(r.a.Fragment,null);case"empty":return r.a.createElement(T,null);case"loading":default:return r.a.createElement(ae.a,null)}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,r.a.createElement(ne.a,{component:"h2"},"Current client"),r.a.createElement(b.a,null,H("current")),r.a.createElement(ce.a,{space:4}),r.a.createElement(ne.a,{component:"h2"},"Client list"),r.a.createElement(b.a,null,H("list"),r.a.createElement(E.a,null),r.a.createElement(f.a,{className:x.actions},r.a.createElement($.a,null),r.a.createElement(C.c,{triggerText:"Add new client",startIcon:r.a.createElement(g.a,null),className:x.button,size:"medium"})))),r.a.createElement(re.a,Object.assign({},D,{onClose:F})))},He=a(251),We=Object(x.a)((function(e){return{box:{padding:"0 ".concat(e.spacing(2),"px")},list:{listStyle:"disc",paddingLeft:e.spacing(2),paddingTop:0,paddingBottom:0,"& ul":{paddingLeft:e.spacing(3)}},embed:{minHeight:"300px",border:"none"}}}));function Ie(){var e=We();return r.a.createElement(He.a,{title:"Prepare for your client meeting",defaultExpanded:!1},r.a.createElement(o.a,{className:e.box},r.a.createElement(p.a,{className:e.list},r.a.createElement(i.a,{component:"li"},"Familiarise yourself with the tools in this kit."),r.a.createElement(i.a,{component:"li"},"Identify the tools that will be most suitable to your client."),r.a.createElement(i.a,{component:"li"},"Ask your client to:"),r.a.createElement(p.a,{className:e.list},r.a.createElement(i.a,{component:"li"},"prepare a list of questions to ask"),r.a.createElement(i.a,{component:"li"},"bring the financial projections or reports for their business")),r.a.createElement(i.a,{component:"li"},"For an existing client, review their previous Action Checklist, canvasses and financials."))))}var Be=a(796),Le=a(792),_e=a(794);function qe(){var e=We();return r.a.createElement(He.a,{title:"The cash flow kit overview",defaultExpanded:!1},r.a.createElement(o.a,{className:e.box},r.a.createElement(p.a,{className:e.list},r.a.createElement(i.a,{component:"li"},"Explain the coaching steps (Discover, Apply, Plan & Action) and tools."),r.a.createElement(i.a,{component:"li"},"Explain why the Four Key Questions are fundamental success factors for cash flow. Refer to these questions in every step."),r.a.createElement(i.a,{component:"li"},"Use the Health Check or review your client\u2019s Action Checklist tasks to help start a conversation."),r.a.createElement(i.a,{component:"li"},"It isn\u2019t necessary to complete the entire coaching kit in every session."),r.a.createElement(i.a,{component:"li"},"As you explore the kit with your client, consider questions such as:",r.a.createElement(p.a,{className:e.list},r.a.createElement(i.a,{component:"li"},"Why are you in business?"),r.a.createElement(i.a,{component:"li"},"Where do you see your business in 12 months?"),r.a.createElement(i.a,{component:"li"},"Where do you see your business in 5 years?")))),r.a.createElement(ce.a,{space:4}),r.a.createElement(b.a,{variant:"outlined"},r.a.createElement(Be.a,{title:"What advisors think of the kit"}),r.a.createElement(Le.a,{className:e.embed,component:"iframe",title:"What advisors think of the kit",src:"https://www.youtube.com/embed/z64Bc5K2TKo?rel=0&modestbranding=1"}),r.a.createElement(_e.a,null,r.a.createElement(oe.a,{color:"primary",href:"/transcripts/What-advisors-think-of-the-kit.docx","aria-label":"Download transcript: What advisors think of the kit",target:"_blank",rel:"noopener noreferrer"},"Download Transcript")))))}function Me(){var e=We();return r.a.createElement(He.a,{title:"Health Check",defaultExpanded:!1},r.a.createElement(o.a,{className:e.box},r.a.createElement(p.a,{className:e.list},r.a.createElement(i.a,{component:"li"},"The Health Check helps you understand your clients business and cashflow knowledge."),r.a.createElement(i.a,{component:"li"},"Introduce the Health Check to your client as an opportunity to understand where they are at."),r.a.createElement(i.a,{component:"li"},"Consider questions such as:",r.a.createElement(p.a,{className:e.list},r.a.createElement(i.a,{component:"li"},"Are there areas of your business that are causing you concern?"),r.a.createElement(i.a,{component:"li"},"How have you been trying to deal with this up to now?"),r.a.createElement(i.a,{component:"li"},"What could you do to improve in these areas?"))),r.a.createElement(i.a,{component:"li"},"If your client is unsure about their results, they can learn more by using the Discover Topics.")),r.a.createElement(ce.a,{space:4}),r.a.createElement(b.a,{variant:"outlined"},r.a.createElement(Be.a,{title:"Health Check coaching tips"}),r.a.createElement(Le.a,{className:e.embed,component:"iframe",title:"Health Check coaching tips",src:"https://www.youtube.com/embed/C6Gduin0fJg?rel=0&modestbranding=1"}),r.a.createElement(_e.a,null,r.a.createElement(oe.a,{color:"primary",href:"/transcripts/Health Check coaching tips.docx","aria-label":"Download transcript: Health Check coaching tips",target:"_blank",rel:"noopener noreferrer"},"Download Transcript")))))}function Ue(){var e=We();return r.a.createElement(He.a,{title:"Discover Topics",defaultExpanded:!1},r.a.createElement(o.a,{className:e.box},r.a.createElement(p.a,{className:e.list},r.a.createElement(i.a,{component:"li"},"Introduce Discover Topics to your client as a way to understand cash flow management."),r.a.createElement(i.a,{component:"li"},"Identify the relevant topics and add them to the Action Checklist by using the Task Builder."),r.a.createElement(i.a,{component:"li"},"Use the activities to build practical knowledge. Focus on making it real and relevant to your client."),r.a.createElement(i.a,{component:"li"},"As you explore the Discover Topics with your client, consider questions such as:"),r.a.createElement(p.a,{className:e.list},r.a.createElement(i.a,{component:"li"},"Why do you think this topic area is relevant for your business?"),r.a.createElement(i.a,{component:"li"},"What else would you like to know about this topic area?"),r.a.createElement(i.a,{component:"li"},"How are you handling this aspect of your business now?"),r.a.createElement(i.a,{component:"li"},"What could you do to change this in the future?")))))}function Ye(){var e=We();return r.a.createElement(He.a,{title:"Cash Flow Canvas",defaultExpanded:!1},r.a.createElement(o.a,{className:e.box},r.a.createElement(p.a,{className:e.list},r.a.createElement(i.a,{component:"li"},"Introduce the Cash Flow Canvas as an opportunity to understand their cashflow. Use the Four Key Questions to discuss this."),r.a.createElement(i.a,{component:"li"},"Work through regular financial commitments and other important items in their cash flow."),r.a.createElement(i.a,{component:"li"},"The canvas should draw out how their business is performing and identify where they want to go."),r.a.createElement(i.a,{component:"li"},"Consider asking questions such as:",r.a.createElement(p.a,{className:e.list},r.a.createElement(i.a,{component:"li"},"What does the Cash Flow Canvas tell you about your business?"),r.a.createElement(i.a,{component:"li"},"What are the items in your Cash IN or your Cash OUT that have the most impact on your cash flow?"),r.a.createElement(i.a,{component:"li"},"Have you set aside an amount for your regular financial commitments?"),r.a.createElement(i.a,{component:"li"},"Do you think you can take more or less out of your business given your current cash flow position?"),r.a.createElement(i.a,{component:"li"},"How do you think you can improve your cash flow position?")))),r.a.createElement(ce.a,{space:4}),r.a.createElement(b.a,{variant:"outlined"},r.a.createElement(Be.a,{title:"Cash Flow Canvas coaching tips"}),r.a.createElement(Le.a,{className:e.embed,component:"iframe",title:"Cash Flow Canvas coaching tips",src:"https://www.youtube.com/embed/Q8_r35mb6YU?rel=0&modestbranding=1"}),r.a.createElement(_e.a,null,r.a.createElement(oe.a,{color:"primary",href:"/transcripts/Cash Flow Canvas coaching tips.docx","aria-label":"Download transcript: Cash Flow Canvas coaching tips",target:"_blank",rel:"noopener noreferrer"},"Download Transcript")))))}function ze(){var e=We();return r.a.createElement(He.a,{title:"Change Levers",defaultExpanded:!1},r.a.createElement(o.a,{className:e.box},r.a.createElement(p.a,{className:e.list},r.a.createElement(i.a,{component:"li"},"The Change Levers highlight different options that improve business performance"),r.a.createElement(i.a,{component:"li"},"Keep the conversation action focused and positive."),r.a.createElement(i.a,{component:"li"},"Consider asking questions such as:",r.a.createElement(p.a,{className:e.list},r.a.createElement(i.a,{component:"li"},"Which of these actions stand out to you?"),r.a.createElement(i.a,{component:"li"},"How do you feel about completing these actions?"),r.a.createElement(i.a,{component:"li"},"What do these actions look like for your business?"),r.a.createElement(i.a,{component:"li"},"How do you think completing these actions will impact your cash flow?")))),r.a.createElement(ce.a,{space:4}),r.a.createElement(b.a,{variant:"outlined"},r.a.createElement(Be.a,{title:"Change Levers coaching tips"}),r.a.createElement(Le.a,{className:e.embed,component:"iframe",title:"Change Levers coaching tips",src:"https://www.youtube.com/embed/_xYdO-STzYI?rel=0&modestbranding=1"}),r.a.createElement(_e.a,null,r.a.createElement(oe.a,{color:"primary",href:"/transcripts/Change Levers coaching tips.docx","aria-label":"Download transcript: Change Levers coaching tips",target:"_blank",rel:"noopener noreferrer"},"Download Transcript")))))}function Ke(){var e=We();return r.a.createElement(He.a,{title:"Action Checklist",defaultExpanded:!1},r.a.createElement(o.a,{className:e.box},r.a.createElement(p.a,{className:e.list},r.a.createElement(i.a,{component:"li"},"Introduce the Action Checklist as a set of steps to improve business cash flow."),r.a.createElement(i.a,{component:"li"},"Explain that putting their knowledge into action requires a clear plan and timeframes."),r.a.createElement(i.a,{component:"li"},"Focus your conversation on practical actions your client can take to create change."),r.a.createElement(i.a,{component:"li"},"Start prioritising tasks based on your client's needs."),r.a.createElement(i.a,{component:"li"},"The most important part of this whole process is keeping your client accountable for completing their actions."),r.a.createElement(i.a,{component:"li"},"Set a follow-up date to have another conversation to review the tasks."),r.a.createElement(i.a,{component:"li"},"Consider questions such as:",r.a.createElement(p.a,{className:e.list},r.a.createElement(i.a,{component:"li"},"What did we discuss?"),r.a.createElement(i.a,{component:"li"},"What did we agree to do?"),r.a.createElement(i.a,{component:"li"},"Who will do what by when?"),r.a.createElement(i.a,{component:"li"},"Who is accountable for these actions?"),r.a.createElement(i.a,{component:"li"},"How is the Action Checklist going?"),r.a.createElement(i.a,{component:"li"},"Are you making progress?")))),r.a.createElement(ce.a,{space:4}),r.a.createElement(b.a,{variant:"outlined"},r.a.createElement(Be.a,{title:"Action Checklist coaching tips"}),r.a.createElement(Le.a,{className:e.embed,component:"iframe",title:"Action Checklist coaching tips",src:"https://www.youtube.com/embed/td4ReSc9Eos?rel=0&modestbranding=1"}),r.a.createElement(_e.a,null,r.a.createElement(oe.a,{color:"primary",href:"/transcripts/Action Checklist coaching tips.docx","aria-label":"Download transcript: Action Checklist coaching tips",target:"_blank",rel:"noopener noreferrer"},"Download Transcript")))))}t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{role:"main"},r.a.createElement(c.a,{container:!0,spacing:3},r.a.createElement(c.a,{item:!0,xs:12,sm:8},r.a.createElement(ne.a,{component:"h1"},"Clients and coaching"),r.a.createElement(o.a,{className:"content-area"},r.a.createElement(i.a,null,"Manage and prepare your coaching."),r.a.createElement(i.a,null,"Read our coaching guidance to prepare for your client. These materials will help you and your client get the most value from the kit."),r.a.createElement(i.a,null,"You can also import and export client data in your client list."))),r.a.createElement(c.a,{item:!0,xs:12,md:6},r.a.createElement(Fe,null)),r.a.createElement(c.a,{item:!0,xs:12,md:6},r.a.createElement(ne.a,{component:"h2"},"Coaching conversation"),r.a.createElement(o.a,null,r.a.createElement(Ie,null),r.a.createElement(qe,null),r.a.createElement(Me,null),r.a.createElement(Ue,null),r.a.createElement(Ye,null),r.a.createElement(ze,null),r.a.createElement(Ke,null))))),r.a.createElement(s.a,{tip:"ClientListTips"}))}},824:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),r=a.n(n),c=a(804),o=a(1483),i=a(312),l=a(337),s=a.n(l);function u(e){var t=e.open,a=e.msg,n=e.onClose,l=e.severity,u=void 0===l?"info":l;return r.a.createElement(o.a,{open:t,autoHideDuration:2e3,anchorOrigin:{vertical:"top",horizontal:"center"},onClose:n},r.a.createElement(c.a,{severity:u,variant:"filled",action:r.a.createElement(i.a,{size:"small","aria-label":"close",color:"inherit"},r.a.createElement(s.a,{fontSize:"small"}))},a))}},832:function(e,t,a){var n={"./ActionChecklistTip":[825,4],"./ActionChecklistTip.tsx":[825,4],"./CFCanvasTip":[826,5],"./CFCanvasTip.tsx":[826,5],"./ChangeLevers":[827,6],"./ChangeLevers.tsx":[827,6],"./ClientListTips":[828,7],"./ClientListTips.tsx":[828,7],"./CoachingKitTips":[829,8],"./CoachingKitTips.tsx":[829,8],"./DiscoverTopicsTips":[830,9],"./DiscoverTopicsTips.tsx":[830,9],"./HCQuestionnaire":[831,10],"./HCQuestionnaire.tsx":[831,10],"./style":[822,11],"./style.ts":[822,11]};function r(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return a.e(t[1]).then((function(){return a(r)}))}r.keys=function(){return Object.keys(n)},r.id=832,e.exports=r},834:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a(13),r=a(0),c=a.n(r),o=a(874),i=a(812),l=a(741),s=a(74),u=a(735),m=a(379),p=a.n(m),d=a(380),h=a.n(d),E=a(140),f=Object(E.a)((function(e){return{root:{position:"fixed",left:e.spacing(2),bottom:e.spacing(2)},icon:{marginRight:e.spacing(1)},drawer:{padding:e.spacing(2),maxWidth:"350px",width:"100%"},closeBox:{display:"flex",justifyContent:"space-between",marginBottom:e.spacing(2),paddingBottom:e.spacing(2),borderBottom:1,borderBottomColor:e.palette.grey[500],borderBottomStyle:"solid"}}})),b=a(49),y=a(179),g=Object(b.a)((function(e){return a(832)("./".concat(e.tip))}),{fallback:c.a.createElement(y.a,null)}),v=function(e){var t=e.tip,a=f(),m=Object(r.useState)(!1),d=Object(n.a)(m,2),E=d[0],b=d[1],y=function(e){return function(t){t instanceof KeyboardEvent&&"keydown"===t.type&&("Tab"===t.key||"Shift"===t.key)||b(e)}};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:a.root,role:"complementary"},c.a.createElement(o.a,{color:"secondary",onClick:y(!0),variant:"extended"},c.a.createElement(p.a,{className:a.icon}),"Tips")),c.a.createElement(i.a,{anchor:"left",open:E,onClose:y(!1),classes:{paper:a.drawer}},c.a.createElement(l.a,{className:a.closeBox},c.a.createElement(s.a,{variant:"h6"},"Tips"),c.a.createElement(u.a,{onClick:y(!1),startIcon:c.a.createElement(h.a,null)},"Close")),c.a.createElement(g,{tip:t})))}},840:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(110),r=a(0),c=a.n(r),o=a(74),i=a(36),l=a(140),s=Object(l.a)((function(e){return{title:Object(i.a)({fontWeight:500,marginBottom:e.spacing(2)},e.breakpoints.down("sm"),{fontSize:e.typography.h5.fontSize})}})),u=function(e){var t=e.children,a=e.className,r=Object(n.a)(e,["children","className"]),i=s();return c.a.createElement(o.a,Object.assign({variant:"h4",color:"textPrimary",className:"".concat(i.title," ").concat(a)},r),t)}},861:function(e,t,a){"use strict";var n=a(54),r=a(58),c=a(60),o=a(59),i=a(121),l=a(220),s=new(function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.call(this,l.a,l.a.healthChecks)}return Object(r.a)(a,[{key:"findByClientId",value:function(e,t){var a=this;return this.database.transaction("r",this.table.name,(function(){return a.table.where({id:e,clientId:t}).first()}))}},{key:"findClientHealthChecks",value:function(e){var t=this;return this.database.transaction("r",this.table.name,(function(){return t.table.where("clientId").equals(e).toArray()}))}}]),a}(i.a));t.a=s},867:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(13),r=a(0),c=a.n(r),o=a(390),i=a(392);function l(e){var t=e.onClick,a=Object(r.useState)(!1),l=Object(n.a)(a,2),s=l[0],u=l[1];function m(){u(!1)}return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.a,{onClick:function(e){e.preventDefault(),u(!0)}}),c.a.createElement(i.a,{open:s,onClose:m,onCancel:m,onConfirm:function(e){t(e),m()}},"Are you sure you want to remove this item?"))}}}]);
//# sourceMappingURL=32.1377c5fd.chunk.js.map