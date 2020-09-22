(this["webpackJsonpdcfck-app"]=this["webpackJsonpdcfck-app"]||[]).push([[28],{1383:function(e,t,a){"use strict";var n=a(45);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(53)).default)(r.default.createElement("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");t.default=o},1769:function(e,t,a){"use strict";a.r(t);var n=a(19),r=a.n(n),o=a(28),i=a(13),c=a(36),s=a(0),l=a.n(s),u=a(48),d=a(40),f=a(140),m=a(778),h=a(735),v=a(74),b=a(767),p=a(737),w=a(800),g=a(788),y=a(919),O=a.n(y),E=a(842),j=a.n(E),S=a(378),k=a.n(S),x=a(336),C=a(251),H=a(12),M=a(50),W=a(790),A=a(791),z=a(796),B=a(794),N=a(816),T=a(1383),P=a.n(T),_=a(252),V=a(382),I=a(387),L=Object(f.a)((function(e){var t;return{gridRoot:{marginTop:e.spacing(3)},gridItem:{display:"flex"},cardRoot:{display:"flex",flexDirection:"column",width:"100%","& > a":{height:"100%"}},areaRoot:{display:"flex",flexDirection:"column"},cardHeader:(t={flexGrow:2,alignItems:"flex-start",width:"100%",boxSizing:"border-box"},Object(c.a)(t,e.breakpoints.down("md"),{flexDirection:"column"}),Object(c.a)(t,"& .MuiCardHeader-content",{width:"100%"}),t),cardActions:{alignSelf:"flex-end"}}})),F=function(e){var t=e.questions,a=e.tileAnswers,n=Object(s.useState)(Object(_.b)()),r=Object(i.a)(n,1)[0],o=L(),c=Object(M.a)();return l.a.createElement(m.a,{container:!0,spacing:2,alignItems:"stretch",className:o.gridRoot},t.map((function(e,t){var n=Object(I.a)(a[t],V.a),i=n.Icon,s=n.color;return l.a.createElement(m.a,{item:!0,xs:12,sm:6,md:4,key:Object(_.a)(r,t),className:o.gridItem},l.a.createElement(W.a,{className:o.cardRoot},l.a.createElement(A.a,{component:d.b,to:e.learnMore||H.a.CoachingKit,className:o.areaRoot},l.a.createElement(z.a,{title:e.question,avatar:l.a.createElement(i,{style:{color:s}}),subheader:e.options[a[t]],subheaderTypographyProps:{style:{color:s,fontWeight:500}},className:o.cardHeader}),l.a.createElement(B.a,{className:o.cardActions},l.a.createElement(N.a,{style:{backgroundColor:c.palette.primary.main,boxShadow:c.shadows[3]}},l.a.createElement(P.a,null))))))})))},R=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,null,"The requested Health check does not exist. Please select another Health check from the"," ",l.a.createElement(d.b,{to:H.a.HealthCheckList},"listing page")," or"," ",l.a.createElement(d.b,{to:Object(H.c)(H.a.HealthCheckQuiz,[[":id?",""]])},"start a new Health Check"),"."))},q=a(334),D=a(57),$=function(e){var t=e.createdAt;return l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,{variant:"h5",align:"center",component:"h1"},"Your results"," ",!!t&&"on the ".concat(Object(q.a)(t,"do 'of' MMMM yyyy"))),l.a.createElement(D.a,{space:1}),l.a.createElement(v.a,{align:"center"},"Learn more about topics covered in the Health Check to improve your business."))},K=a(861),G=a(98),Q=a(917),X=a(102),J=a(79),Y=a(863),U=Object(f.a)((function(e){return{summaryActions:{marginTop:e.spacing(3)},actionRow:Object(c.a)({display:"flex",justifyContent:"flex-end","& a + a":{marginLeft:e.spacing(1)}},e.breakpoints.down("sm"),{flexDirection:"column","& a + a":{marginLeft:e.spacing(0),marginTop:e.spacing(1)}})}}));t.default=function(){var e=Object(G.a)(),t=Object(i.a)(e,1)[0],a=Object(s.useContext)(X.a).dispatch,n=Object(u.h)().id,c=Object(s.useState)(),f=Object(i.a)(c,2),y=f[0],E=f[1],S=Object(s.useState)(void 0),M=Object(i.a)(S,2),W=M[0],A=M[1],z=U();Object(s.useEffect)((function(){n&&t&&(a({type:J.a.UpdateLastViewedHC,payload:n}),function(){var e=Object(o.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"===typeof t.id){e.next=5;break}return e.next=3,K.a.findByClientId(n,t.id);case 3:(a=e.sent)&&(E(a),A(a.answers));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()())}),[n,t,a]);var B=function(){var e=Object(o.a)(r.a.mark((function e(){var a,n,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},V.c.forEach((function(e,t){var a=e.question,r=(null===y||void 0===y?void 0:y.answers[t])||"positive",o=e.options[r];n[t]={question:a,answer:r,text:o}})),e.next=4,Object(Q.a)(null!==(a=null===t||void 0===t?void 0:t.name)&&void 0!==a?a:"Client",n);case 4:o=e.sent,Object(Y.a)(o);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement(x.a,{role:"main"},l.a.createElement(m.a,{container:!0,spacing:3},l.a.createElement(m.a,{item:!0,xs:12,md:8,lg:9},y&&W?l.a.createElement(l.a.Fragment,null,l.a.createElement($,{createdAt:y.createdAt}),l.a.createElement(F,{questions:V.c,tileAnswers:W}),l.a.createElement(m.a,{container:!0,spacing:0,justify:"flex-end",className:z.summaryActions},l.a.createElement(m.a,{item:!0,xs:12,className:z.actionRow},l.a.createElement(h.a,{component:d.b,to:H.a.DiscoverTopics},"Go to Discover Topics"),l.a.createElement(h.a,{color:"primary",variant:"contained",component:d.b,to:H.a.CFC},"Add Cash Flow Canvas"))),l.a.createElement(D.a,{space:4}),l.a.createElement(v.a,null,"Cash flow is a key business challenge that may affect small business owners\u2019 mental health and wellbeing. A range of"," ",l.a.createElement("a",{href:"https://www.ato.gov.au/smallbizmentalhealth",target:"_blank",rel:"noopener noreferrer"},"resources are available")," ","if you need assistance.")):l.a.createElement(R,null)),l.a.createElement(m.a,{item:!0,xs:12,md:4,lg:3},l.a.createElement(C.a,null,l.a.createElement(b.a,{component:"nav",disablePadding:!0},l.a.createElement(p.a,{button:!0,component:d.b,to:Object(H.c)(H.a.HealthCheckQuiz,[[":id?",""]])},l.a.createElement(w.a,null,l.a.createElement(k.a,null)),l.a.createElement(g.a,null,"Start a new Health Check")),l.a.createElement(p.a,{button:!0,component:d.b,to:H.a.HealthCheckList},l.a.createElement(w.a,null,l.a.createElement(O.a,null)),l.a.createElement(g.a,null,"Saved Health Checks")),l.a.createElement(p.a,{button:!0},l.a.createElement(w.a,null,l.a.createElement(j.a,null)),l.a.createElement(g.a,{onClick:B},"Generate PDF"))))))))}},842:function(e,t,a){"use strict";var n=a(45);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(53)).default)(r.default.createElement("path",{d:"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"}),"PictureAsPdf");t.default=o},844:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"d",(function(){return i})),a.d(t,"c",(function(){return c})),a.d(t,"e",(function(){return s})),a.d(t,"f",(function(){return l})),a.d(t,"b",(function(){return u}));var n=a(5),r=a(334),o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return{margin:t,columns:[e]}},i=function(){return{pageSize:"A4",pageMargins:[0,0,0,25],footer:{columns:[{text:"Created on the ".concat(Object(r.a)(new Date,"do 'of' MMMM yyyy")),alignment:"center",fontSize:12,color:"#333"}]}}},c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return{table:{widths:["*"],body:[[e]]},style:t}},s=function(e){var t=c(o(e),["pageHeader"]);return Object(n.a)(Object(n.a)({},t),{},{layout:"noBorders"})},l=function(e){return o(e,20)},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return{table:{widths:["75%","*"],body:e},style:t,layout:"noBorders"}}},861:function(e,t,a){"use strict";var n=a(54),r=a(58),o=a(60),i=a(59),c=a(121),s=a(220),l=new(function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.call(this,s.a,s.a.healthChecks)}return Object(r.a)(a,[{key:"findByClientId",value:function(e,t){var a=this;return this.database.transaction("r",this.table.name,(function(){return a.table.where({id:e,clientId:t}).first()}))}},{key:"findClientHealthChecks",value:function(e){var t=this;return this.database.transaction("r",this.table.name,(function(){return t.table.where("clientId").equals(e).toArray()}))}}]),a}(c.a));t.a=l},863:function(e,t,a){"use strict";var n=a(873);t.a=function(e){var t=Object(n.a)();"ie"!==(null===t||void 0===t?void 0:t.name)&&"edge"!==(null===t||void 0===t?void 0:t.name)?e.open():e.download()}},873:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return f}));var n=function(){for(var e=0,t=0,a=arguments.length;t<a;t++)e+=arguments[t].length;var n=Array(e),r=0;for(t=0;t<a;t++)for(var o=arguments[t],i=0,c=o.length;i<c;i++,r++)n[r]=o[i];return n},r=function(e,t,a){this.name=e,this.version=t,this.os=a,this.type="browser"},o=function(t){this.version=t,this.type="node",this.name="node",this.os=e.platform},i=function(e,t,a,n){this.name=e,this.version=t,this.os=a,this.bot=n,this.type="bot-device"},c=function(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null},s=function(){this.type="react-native",this.name="react-native",this.version=null,this.os=null},l=/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,u=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/Edg\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FBAV\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],d=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function f(t){return t?h(t):"undefined"===typeof document&&"undefined"!==typeof navigator&&"ReactNative"===navigator.product?new s:"undefined"!==typeof navigator?h(navigator.userAgent):"undefined"!==typeof e&&e.version?new o(e.version.slice(1)):null}function m(e){return""!==e&&u.reduce((function(t,a){var n=a[0],r=a[1];if(t)return t;var o=r.exec(e);return!!o&&[n,o]}),!1)}function h(e){var t=m(e);if(!t)return null;var a=t[0],o=t[1];if("searchbot"===a)return new c;var s=o[1]&&o[1].split(/[._]/).slice(0,3);s?s.length<3&&(s=n(s,function(e){for(var t=[],a=0;a<e;a++)t.push("0");return t}(3-s.length))):s=[];var u=s.join("."),f=function(e){for(var t=0,a=d.length;t<a;t++){var n=d[t],r=n[0];if(n[1].exec(e))return r}return null}(e),h=l.exec(e);return h&&h[1]?new i(a,u,f,h[1]):new r(a,u,f)}}).call(this,a(504))},917:function(e,t,a){"use strict";var n=a(19),r=a.n(n),o=a(5),i=a(28),c=a(855),s=a.n(c),l=a(856),u=a.n(l),d=a(797),f=a(330),m=a(844),h=a(382);s.a.vfs=u.a.pdfMake.vfs;var v=function(e){var t=e.question,a=e.answer,n=e.text;return Object(m.a)([{text:t,style:"question"}," ",{text:n,style:a}])};t.a=function(){var e=Object(i.a)(r.a.mark((function e(t,a){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(o.a)(Object(o.a)({},Object(m.d)()),{},{content:[Object(m.e)("".concat(t," - Health Check")),Object(m.f)([{style:"tableCell",table:{widths:["*","*"],body:[[{text:"Four Key Questions",style:"tableHeading",colSpan:2},{}],[v(a[0]),v(a[1])],[v(a[2]),v(a[3])]]}}," ",{style:"tableCell",table:{widths:["*","*"],body:[[v(a[4]),v(a[5])],[v(a[6]),v(a[7])],[v(a[8]),v(a[9])]]}}])],styles:{pageHeader:{fontSize:20,bold:!0,fillColor:d.a[500],color:"white",alignment:"center"},tableHeading:{fillColor:f.a[200],alignment:"center"},question:{},positive:{fontSize:16,color:h.a[0].color,bold:!0},negative:{fontSize:16,color:h.a[1].color,bold:!0},neutral:{fontSize:16,color:h.a[2].color,bold:!0}},defaultStyle:{fontSize:15,bold:!1,color:"#000"}}),e.abrupt("return",s.a.createPdf(n));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},919:function(e,t,a){"use strict";var n=a(45);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(53)).default)(r.default.createElement("path",{d:"M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"}),"List");t.default=o}}]);
//# sourceMappingURL=28.1c53b394.chunk.js.map