(this["webpackJsonpdcfck-app"]=this["webpackJsonpdcfck-app"]||[]).push([[34],{1391:function(e,t,a){"use strict";var n=a(1),c=a(3),r=a(0),l=(a(10),a(4)),i=a(8),s=r.forwardRef((function(e,t){var a=e.classes,i=e.className,s=Object(c.a)(e,["classes","className"]);return r.createElement("div",Object(n.a)({className:Object(l.default)(a.root,i),ref:t},s))}));s.muiName="ListItemSecondaryAction",t.a=Object(i.a)({root:{position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"}},{name:"MuiListItemSecondaryAction"})(s)},1767:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(741),l=a(74),i=a(778),s=a(336),o=a(19),u=a.n(o),m=a(28),f=a(13),h=a(790),d=a(769),p=a(793),b=a(735),v=a(40),E=a(378),y=a.n(E),C=a(254),k=a(102),j=a(12),O=a(275),w=Object(O.a)({key:"hc_listing_machine",initial:"loading",states:{loading:{on:{IS_EMPTY:"empty",HAS_ITEMS:"hasItems"}},empty:{},hasItems:{on:{IS_EMPTY:"empty"}}}}),g=function(){return c.a.createElement(p.a,null,c.a.createElement(l.a,{variant:"h6"},"No Health Checks have been found"),c.a.createElement(l.a,null,"Check that you have the correct"," ",c.a.createElement(v.b,{to:j.a.ClientList},"client selected")," or"," ",c.a.createElement(v.b,{to:Object(j.c)(j.a.HealthCheckQuiz,[[":id?",""]])},"start a new Health Check"),"."))},S=a(767),H=a(737),I=a(788),M=a(1391),z=a(334),N=a(867),_=a(915),T=a.n(_),x=a(807),A=a(312);function P(e){var t=e.goTo;return c.a.createElement(x.a,{title:"View"},c.a.createElement(A.a,{component:v.b,to:t},c.a.createElement(T.a,null),c.a.createElement("span",{className:"MuiTypography-srOnly"},"View resutls")))}var V=function(e){var t=e.clientQuizzes,a=e.removeHealthCheck,r=Object(n.useCallback)((function(e){return function(t){t.preventDefault(),a(e)}}),[a]);return c.a.createElement(S.a,null,t.map((function(e){return c.a.createElement(H.a,{key:e.id,className:"list-item-padded"},c.a.createElement(I.a,{primary:"Completed Health Check",secondary:!!e.createdAt&&Object(z.a)(e.createdAt,"dd/MM/yyyy hh:mm a")}),c.a.createElement(M.a,null,c.a.createElement(P,{goTo:Object(j.c)(j.a.HealthCheckSummary,[[":id","".concat(e.id)]])}),c.a.createElement(N.a,{onClick:r(e.id||"")})))})))},Y=a(178),L=a(140),Q=Object(L.a)((function(){return{actions:{display:"flex",justifyContent:"flex-end",alignItems:"center"}}})),B=a(861),D=a(79),F=function(){var e=Object(C.useMachine)(w),t=Object(f.a)(e,2),a=t[0],r=t[1],l=Object(n.useContext)(k.a),i=l.state,s=i.currentClient,o=i.lastViewedHC,E=l.dispatch,O=Object(n.useState)([]),S=Object(f.a)(O,2),H=S[0],I=S[1],M=Q();Object(n.useEffect)((function(){var e=function(){var e=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.findClientHealthChecks(t);case 2:0===(a=e.sent).length?r("IS_EMPTY"):(I(a),r("HAS_ITEMS"));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();if(null===s||void 0===s?void 0:s.id){if(!s)return void r("IS_EMPTY");e(s.id)}}),[s,r]);var z=function(){var e=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.a.delete(t);case 3:e.sent>0&&(null!==o&&"".concat(t)==="".concat(o)&&E({type:D.a.UpdateLastViewedHC,payload:null}),0===(a=H.filter((function(e){return e.id!==t}))).length&&r("IS_EMPTY"),I(a)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.stack||e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(h.a,null,function(){switch(a.value){case"empty":return c.a.createElement(g,null);case"hasItems":return c.a.createElement(V,{clientQuizzes:H,removeHealthCheck:z});case"loading":default:return c.a.createElement(Y.a,null)}}(),c.a.createElement(d.a,null),c.a.createElement(p.a,{className:M.actions},c.a.createElement(b.a,{startIcon:c.a.createElement(y.a,null),size:"medium",component:v.b,to:Object(j.c)(j.a.HealthCheckQuiz,[[":id?",""]]),color:"primary",variant:"contained"},"Start a new Health Check")))},J=a(840),U=a(57);t.default=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{role:"main"},c.a.createElement(J.a,{component:"h1"},"Saved Health Checks"),c.a.createElement(r.a,{className:"content-area"},c.a.createElement(l.a,null,"Use your previous Health Checks to review your progress."),c.a.createElement(l.a,null,"View your past results by selecting from the list below.")),c.a.createElement(U.a,{space:3}),c.a.createElement(i.a,{item:!0,sm:6},c.a.createElement(F,null))))}},840:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(110),c=a(0),r=a.n(c),l=a(74),i=a(36),s=a(140),o=Object(s.a)((function(e){return{title:Object(i.a)({fontWeight:500,marginBottom:e.spacing(2)},e.breakpoints.down("sm"),{fontSize:e.typography.h5.fontSize})}})),u=function(e){var t=e.children,a=e.className,c=Object(n.a)(e,["children","className"]),i=o();return r.a.createElement(l.a,Object.assign({variant:"h4",color:"textPrimary",className:"".concat(i.title," ").concat(a)},c),t)}},861:function(e,t,a){"use strict";var n=a(54),c=a(58),r=a(60),l=a(59),i=a(121),s=a(220),o=new(function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.call(this,s.a,s.a.healthChecks)}return Object(c.a)(a,[{key:"findByClientId",value:function(e,t){var a=this;return this.database.transaction("r",this.table.name,(function(){return a.table.where({id:e,clientId:t}).first()}))}},{key:"findClientHealthChecks",value:function(e){var t=this;return this.database.transaction("r",this.table.name,(function(){return t.table.where("clientId").equals(e).toArray()}))}}]),a}(i.a));t.a=o},867:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(13),c=a(0),r=a.n(c),l=a(389),i=a(392);function s(e){var t=e.onClick,a=Object(c.useState)(!1),s=Object(n.a)(a,2),o=s[0],u=s[1];function m(){u(!1)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{onClick:function(e){e.preventDefault(),u(!0)}}),r.a.createElement(i.a,{open:o,onClose:m,onCancel:m,onConfirm:function(e){t(e),m()}},"Are you sure you want to remove this item?"))}},915:function(e,t,a){"use strict";var n=a(45);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(0)),r=(0,n(a(53)).default)(c.default.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.default=r}}]);
//# sourceMappingURL=34.d33fe79c.chunk.js.map