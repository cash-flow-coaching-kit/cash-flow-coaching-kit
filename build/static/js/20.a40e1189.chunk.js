(this["webpackJsonpdcfck-app"]=this["webpackJsonpdcfck-app"]||[]).push([[20],{1317:function(e,t,n){"use strict";var a=n(52),r=n(53);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(0)),o=(0,a(n(54)).default)(i.createElement("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");t.default=o},1395:function(e,t,n){"use strict";n.r(t);var a=n(19),r=n.n(a),i=n(31),o=n(14),c=n(36),s=n(0),l=n(48),d=n(39),u=n(142),h=n(799),b=n(755),f=n(74),j=n(788),v=n(757),p=n(822),O=n(809),m=n(888),w=n.n(m),x=n(849),g=n.n(x),y=n(386),S=n.n(y),k=n(339),C=n(254),H=n(13),M=n(49),W=n(812),A=n(813),z=n(818),B=n(816),N=n(838),T=n(1317),P=n.n(T),_=n(255),V=n(390),E=n(395),I=Object(u.a)((function(e){var t;return{gridRoot:{marginTop:e.spacing(3)},gridItem:{display:"flex"},cardRoot:{display:"flex",flexDirection:"column",width:"100%","& > a":{height:"100%"}},areaRoot:{display:"flex",flexDirection:"column"},cardHeader:(t={flexGrow:2,alignItems:"flex-start",width:"100%",boxSizing:"border-box"},Object(c.a)(t,e.breakpoints.down("md"),{flexDirection:"column"}),Object(c.a)(t,"& .MuiCardHeader-content",{width:"100%"}),t),cardActions:{alignSelf:"flex-end"}}})),L=n(1),F=function(e){var t=e.questions,n=e.tileAnswers,a=Object(s.useState)(Object(_.b)()),r=Object(o.a)(a,1)[0],i=I(),c=Object(M.a)();return Object(L.jsx)(h.a,{container:!0,spacing:2,alignItems:"stretch",className:i.gridRoot,children:t.map((function(e,t){var a=Object(E.a)(n[t],V.a),o=a.Icon,s=a.color;return Object(L.jsx)(h.a,{item:!0,xs:12,sm:6,md:4,className:i.gridItem,children:Object(L.jsx)(W.a,{className:i.cardRoot,children:Object(L.jsxs)(A.a,{component:d.b,to:e.learnMore||H.a.CoachingKit,className:i.areaRoot,children:[Object(L.jsx)(z.a,{title:e.question,avatar:Object(L.jsx)(o,{style:{color:s}}),subheader:e.options[n[t]],subheaderTypographyProps:{style:{color:s,fontWeight:500}},className:i.cardHeader}),Object(L.jsx)(B.a,{className:i.cardActions,children:Object(L.jsx)(N.a,{style:{backgroundColor:c.palette.primary.main,boxShadow:c.shadows[3]},children:Object(L.jsx)(P.a,{})})})]})})},Object(_.a)(r,t))}))})},R=function(){return Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)(f.a,{children:["The requested Health check does not exist. Please select another Health check from the"," ",Object(L.jsx)(d.b,{to:H.a.HealthCheckList,children:"listing page"})," or"," ",Object(L.jsx)(d.b,{to:Object(H.c)(H.a.HealthCheckQuiz,[[":id?",""]]),children:"start a new Health Check"}),"."]})})},q=n(337),D=n(57),$=function(e){var t=e.createdAt;return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)(f.a,{variant:"h5",align:"center",component:"h1",children:["Your results"," ",!!t&&"on the ".concat(Object(q.a)(t,"do 'of' MMMM yyyy"))]}),Object(L.jsx)(D.a,{space:1}),Object(L.jsx)(f.a,{align:"center",children:"Learn more about topics covered in the Health Check to improve your business."})]})},K=n(859),G=n(100),Q=n(886),X=n(103),J=n(80),Y=n(860),U=Object(u.a)((function(e){return{summaryActions:{marginTop:e.spacing(3)},actionRow:Object(c.a)({display:"flex",justifyContent:"flex-end","& a + a":{marginLeft:e.spacing(1)}},e.breakpoints.down("sm"),{flexDirection:"column","& a + a":{marginLeft:e.spacing(0),marginTop:e.spacing(1)}})}}));t.default=function(){var e=Object(G.a)(),t=Object(o.a)(e,1)[0],n=Object(s.useContext)(X.a).dispatch,a=Object(l.h)().id,c=Object(s.useState)(),u=Object(o.a)(c,2),m=u[0],x=u[1],y=Object(s.useState)(void 0),M=Object(o.a)(y,2),W=M[0],A=M[1],z=U();Object(s.useEffect)((function(){a&&t&&(n({type:J.a.UpdateLastViewedHC,payload:a}),function(){var e=Object(i.a)(r.a.mark((function e(){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"===typeof t.id){e.next=5;break}return e.next=3,K.a.findByClientId(a,t.id);case 3:(n=e.sent)&&(x(n),A(n.answers));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()())}),[a,t,n]);var B=function(){var e=Object(i.a)(r.a.mark((function e(){var n,a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},V.c.forEach((function(e,t){var n=e.question,r=(null===m||void 0===m?void 0:m.answers[t])||"positive",i=e.options[r];a[t]={question:n,answer:r,text:i}})),e.next=4,Object(Q.a)(null!==(n=null===t||void 0===t?void 0:t.name)&&void 0!==n?n:"Client",a);case 4:i=e.sent,Object(Y.a)(i);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(L.jsx)(L.Fragment,{children:Object(L.jsx)(k.a,{role:"main",children:Object(L.jsxs)(h.a,{container:!0,spacing:3,children:[Object(L.jsx)(h.a,{item:!0,xs:12,md:8,lg:9,children:m&&W?Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)($,{createdAt:m.createdAt}),Object(L.jsx)(F,{questions:V.c,tileAnswers:W}),Object(L.jsx)(h.a,{container:!0,spacing:0,justify:"flex-end",className:z.summaryActions,children:Object(L.jsxs)(h.a,{item:!0,xs:12,className:z.actionRow,children:[Object(L.jsx)(b.a,{component:d.b,to:H.a.DiscoverTopics,children:"Go to Discover Topics"}),Object(L.jsx)(b.a,{color:"primary",variant:"contained",component:d.b,to:H.a.CFC,children:"Add Cash Flow Canvas"})]})}),Object(L.jsx)(D.a,{space:4}),Object(L.jsxs)(f.a,{children:["Cash flow is a key business challenge that may affect small business owners\u2019 mental health and wellbeing."," ",Object(L.jsx)("a",{href:"https://www.ato.gov.au/smallbizmentalhealth",target:"_blank",rel:"noopener noreferrer",children:"Support is available"})," ","if you need assistance."]})]}):Object(L.jsx)(R,{})}),Object(L.jsx)(h.a,{item:!0,xs:12,md:4,lg:3,children:Object(L.jsx)(C.a,{children:Object(L.jsxs)(j.a,{component:"nav",disablePadding:!0,children:[Object(L.jsxs)(v.a,{button:!0,component:d.b,to:Object(H.c)(H.a.HealthCheckQuiz,[[":id?",""]]),children:[Object(L.jsx)(p.a,{children:Object(L.jsx)(S.a,{})}),Object(L.jsx)(O.a,{children:"Start a new Health Check"})]}),Object(L.jsxs)(v.a,{button:!0,component:d.b,to:H.a.HealthCheckList,children:[Object(L.jsx)(p.a,{children:Object(L.jsx)(w.a,{})}),Object(L.jsx)(O.a,{children:"Saved Health Checks"})]}),Object(L.jsxs)(v.a,{button:!0,children:[Object(L.jsx)(p.a,{children:Object(L.jsx)(g.a,{})}),Object(L.jsx)(O.a,{onClick:B,children:"Generate PDF"})]})]})})})]})})})}},849:function(e,t,n){"use strict";var a=n(52),r=n(53);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(0)),o=(0,a(n(54)).default)(i.createElement("path",{d:"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"}),"PictureAsPdf");t.default=o},850:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return l})),n.d(t,"b",(function(){return d}));var a=n(6),r=n(337),i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return{margin:t,columns:[e]}},o=function(){return{pageSize:"A4",pageMargins:[0,0,0,25],footer:{columns:[{text:"Created on the ".concat(Object(r.a)(new Date,"do 'of' MMMM yyyy")),alignment:"center",fontSize:12,color:"#333"}]}}},c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return{table:{widths:["*"],body:[[e]]},style:t}},s=function(e){var t=c(i(e),["pageHeader"]);return Object(a.a)(Object(a.a)({},t),{},{layout:"noBorders"})},l=function(e){return i(e,20)},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return{table:{widths:["70%","*"],body:e},style:t,layout:"noBorders"}}},859:function(e,t,n){"use strict";var a=n(55),r=n(58),i=n(60),o=n(59),c=n(123),s=n(226),l=new(function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.call(this,s.a,s.a.healthChecks)}return Object(r.a)(n,[{key:"findByClientId",value:function(e,t){var n=this;return this.database.transaction("r",this.table.name,(function(){return n.table.where({id:e,clientId:t}).first()}))}},{key:"findClientHealthChecks",value:function(e){var t=this;return this.database.transaction("r",this.table.name,(function(){return t.table.where("clientId").equals(e).toArray()}))}}]),n}(c.a));t.a=l},860:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(866);function r(e){var t=Object(a.a)();"ie"!==(null===t||void 0===t?void 0:t.name)&&"edge"!==(null===t||void 0===t?void 0:t.name)?e.open():e.download()}},866:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return h}));var a=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var a=Array(e),r=0;for(t=0;t<n;t++)for(var i=arguments[t],o=0,c=i.length;o<c;o++,r++)a[r]=i[o];return a},r=function(e,t,n){this.name=e,this.version=t,this.os=n,this.type="browser"},i=function(t){this.version=t,this.type="node",this.name="node",this.os=e.platform},o=function(e,t,n,a){this.name=e,this.version=t,this.os=n,this.bot=a,this.type="bot-device"},c=function(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null},s=function(){this.type="react-native",this.name="react-native",this.version=null,this.os=null},l=/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,d=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FBAV\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],u=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function h(t){return t?f(t):"undefined"===typeof document&&"undefined"!==typeof navigator&&"ReactNative"===navigator.product?new s:"undefined"!==typeof navigator?f(navigator.userAgent):"undefined"!==typeof e&&e.version?new i(e.version.slice(1)):null}function b(e){return""!==e&&d.reduce((function(t,n){var a=n[0],r=n[1];if(t)return t;var i=r.exec(e);return!!i&&[a,i]}),!1)}function f(e){var t=b(e);if(!t)return null;var n=t[0],i=t[1];if("searchbot"===n)return new c;var s=i[1]&&i[1].split(/[._]/).slice(0,3);s?s.length<3&&(s=a(s,function(e){for(var t=[],n=0;n<e;n++)t.push("0");return t}(3-s.length))):s=[];var d=s.join("."),h=function(e){for(var t=0,n=u.length;t<n;t++){var a=u[t],r=a[0];if(a[1].exec(e))return r}return null}(e),f=l.exec(e);return f&&f[1]?new o(n,d,h,f[1]):new r(n,d,h)}}).call(this,n(520))},886:function(e,t,n){"use strict";var a=n(19),r=n.n(a),i=n(6),o=n(31),c=n(857),s=n.n(c),l=n(858),d=n.n(l),u=n(819),h=n(333),b=n(850),f=n(390);s.a.vfs=d.a.pdfMake.vfs;var j=function(e){var t=e.question,n=e.answer,a=e.text;return Object(b.a)([{text:t,style:"question"}," ",{text:a,style:n}])};t.a=function(){var e=Object(o.a)(r.a.mark((function e(t,n){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(i.a)(Object(i.a)({},Object(b.d)()),{},{content:[Object(b.e)("".concat(t," - Health Check")),Object(b.f)([{style:"tableCell",table:{widths:["*","*"],body:[[{text:"Four Key Questions",style:"tableHeading",colSpan:2},{}],[j(n[0]),j(n[1])],[j(n[2]),j(n[3])]]}}," ",{style:"tableCell",table:{widths:["*","*"],body:[[j(n[4]),j(n[5])],[j(n[6]),j(n[7])],[j(n[8]),j(n[9])]]}}])],styles:{pageHeader:{fontSize:20,bold:!0,fillColor:u.a[500],color:"white",alignment:"center"},tableHeading:{fillColor:h.a[200],alignment:"center"},question:{},positive:{fontSize:16,color:f.a[0].color,bold:!0},negative:{fontSize:16,color:f.a[1].color,bold:!0},neutral:{fontSize:16,color:f.a[2].color,bold:!0}},defaultStyle:{fontSize:15,bold:!1,color:"#000"}}),e.abrupt("return",s.a.createPdf(a));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},888:function(e,t,n){"use strict";var a=n(52),r=n(53);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(0)),o=(0,a(n(54)).default)(i.createElement("path",{d:"M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"}),"List");t.default=o}}]);
//# sourceMappingURL=20.a40e1189.chunk.js.map