(this["webpackJsonpdcfck-app"]=this["webpackJsonpdcfck-app"]||[]).push([[16],{821:function(e,t,a){"use strict";var n=a(55);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),i=(0,n(a(64)).default)(o.default.createElement("path",{d:"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"}),"PictureAsPdf");t.default=i},824:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(107),o=a(0),i=a.n(o),r=a(73),s=a(36),c=a(139),l=Object(c.a)((function(e){return{title:Object(s.a)({fontWeight:500,marginBottom:e.spacing(2)},e.breakpoints.down("sm"),{fontSize:e.typography.h5.fontSize})}})),d=function(e){var t=e.children,a=e.className,o=Object(n.a)(e,["children","className"]),s=l();return i.a.createElement(r.a,Object.assign({variant:"h4",color:"textPrimary",className:"".concat(s.title," ").concat(a)},o),t)}},834:function(e,t,a){"use strict";var n=a(0),o=n.createContext();t.a=o},837:function(e,t,a){"use strict";var n=a(55);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),i=(0,n(a(64)).default)(o.default.createElement("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"}),"GetApp");t.default=i},839:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return p}));var n=function(){for(var e=0,t=0,a=arguments.length;t<a;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<a;t++)for(var i=arguments[t],r=0,s=i.length;r<s;r++,o++)n[o]=i[r];return n},o=function(e,t,a){this.name=e,this.version=t,this.os=a,this.type="browser"},i=function(t){this.version=t,this.type="node",this.name="node",this.os=e.platform},r=function(e,t,a,n){this.name=e,this.version=t,this.os=a,this.bot=n,this.type="bot-device"},s=function(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null},c=function(){this.type="react-native",this.name="react-native",this.version=null,this.os=null},l=/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,d=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/Edg\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FBAV\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],u=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function p(t){return t?f(t):"undefined"===typeof document&&"undefined"!==typeof navigator&&"ReactNative"===navigator.product?new c:"undefined"!==typeof navigator?f(navigator.userAgent):"undefined"!==typeof e&&e.version?new i(e.version.slice(1)):null}function v(e){return""!==e&&d.reduce((function(t,a){var n=a[0],o=a[1];if(t)return t;var i=o.exec(e);return!!i&&[n,i]}),!1)}function f(e){var t=v(e);if(!t)return null;var a=t[0],i=t[1];if("searchbot"===a)return new s;var c=i[1]&&i[1].split(/[._]/).slice(0,3);c?c.length<3&&(c=n(c,function(e){for(var t=[],a=0;a<e;a++)t.push("0");return t}(3-c.length))):c=[];var d=c.join("."),p=function(e){for(var t=0,a=u.length;t<a;t++){var n=u[t],o=n[0];if(n[1].exec(e))return o}return null}(e),f=l.exec(e);return f&&f[1]?new r(a,d,p,f[1]):new o(a,d,p)}}).call(this,a(496))},846:function(e,t,a){"use strict";var n=a(0),o=n.createContext();t.a=o},856:function(e,t,a){"use strict";var n=a(55);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),i=(0,n(a(64)).default)(o.default.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"}),"FileCopy");t.default=i},857:function(e,t,a){"use strict";var n=a(55);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),i=(0,n(a(64)).default)(o.default.createElement("path",{d:"M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"}),"CompareArrows");t.default=i},858:function(e,t,a){"use strict";var n=a(55);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),i=(0,n(a(64)).default)(o.default.createElement("path",{d:"M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"}),"FormatListNumbered");t.default=i},885:function(e,t,a){"use strict";var n=a(1),o=a(3),i=a(0),r=(a(10),a(4)),s=a(8),c=a(834),l={variant:"head"},d=i.forwardRef((function(e,t){var a=e.classes,s=e.className,d=e.component,u=void 0===d?"thead":d,p=Object(o.a)(e,["classes","className","component"]);return i.createElement(c.a.Provider,{value:l},i.createElement(u,Object(n.a)({className:Object(r.default)(a.root,s),ref:t,role:"thead"===u?null:"rowgroup"},p)))}));t.a=Object(s.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(d)},886:function(e,t,a){"use strict";var n=a(1),o=a(3),i=a(0),r=(a(10),a(4)),s=a(8),c=a(834),l=a(32),d=i.forwardRef((function(e,t){var a=e.classes,s=e.className,l=e.component,d=void 0===l?"tr":l,u=e.hover,p=void 0!==u&&u,v=e.selected,f=void 0!==v&&v,h=Object(o.a)(e,["classes","className","component","hover","selected"]),m=i.useContext(c.a);return i.createElement(d,Object(n.a)({ref:t,className:Object(r.default)(a.root,s,m&&{head:a.head,footer:a.footer}[m.variant],p&&a.hover,f&&a.selected),role:"tr"===d?null:"row"},h))}));t.a=Object(s.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(l.d)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},887:function(e,t,a){"use strict";var n=a(3),o=a(1),i=a(0),r=(a(10),a(4)),s=a(8),c=a(16),l=a(32),d=a(846),u=a(834),p=i.forwardRef((function(e,t){var a,s,l=e.align,p=void 0===l?"inherit":l,v=e.classes,f=e.className,h=e.component,m=e.padding,b=e.scope,g=e.size,O=e.sortDirection,w=e.variant,y=Object(n.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),j=i.useContext(d.a),x=i.useContext(u.a),H=x&&"head"===x.variant;h?(s=h,a=H?"columnheader":"cell"):s=H?"th":"td";var S=b;!S&&H&&(S="col");var k=m||(j&&j.padding?j.padding:"default"),M=g||(j&&j.size?j.size:"medium"),N=w||x&&x.variant,W=null;return O&&(W="asc"===O?"ascending":"descending"),i.createElement(s,Object(o.a)({ref:t,className:Object(r.default)(v.root,v[N],f,"inherit"!==p&&v["align".concat(Object(c.a)(p))],"default"!==k&&v["padding".concat(Object(c.a)(k))],"medium"!==M&&v["size".concat(Object(c.a)(M))],"head"===N&&j&&j.stickyHeader&&v.stickyHeader),"aria-sort":W,role:a,scope:S},y))}));t.a=Object(s.a)((function(e){return{root:Object(o.a)(Object(o.a)({},e.typography.body2),{},{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(l.i)(Object(l.d)(e.palette.divider,1),.88):Object(l.a)(Object(l.d)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0px 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(p)},888:function(e,t,a){"use strict";var n=a(1),o=a(3),i=a(0),r=(a(10),a(4)),s=a(8),c=i.forwardRef((function(e,t){var a=e.classes,s=e.className,c=e.component,l=void 0===c?"div":c,d=Object(o.a)(e,["classes","className","component"]);return i.createElement(l,Object(n.a)({ref:t,className:Object(r.default)(a.root,s)},d))}));t.a=Object(s.a)({root:{width:"100%",overflowX:"auto"}},{name:"MuiTableContainer"})(c)},889:function(e,t,a){"use strict";var n=a(3),o=a(1),i=a(0),r=(a(10),a(4)),s=a(8),c=a(846),l=i.forwardRef((function(e,t){var a=e.classes,s=e.className,l=e.component,d=void 0===l?"table":l,u=e.padding,p=void 0===u?"default":u,v=e.size,f=void 0===v?"medium":v,h=e.stickyHeader,m=void 0!==h&&h,b=Object(n.a)(e,["classes","className","component","padding","size","stickyHeader"]),g=i.useMemo((function(){return{padding:p,size:f,stickyHeader:m}}),[p,f,m]);return i.createElement(c.a.Provider,{value:g},i.createElement(d,Object(o.a)({role:"table"===d?null:"table",ref:t,className:Object(r.default)(a.root,s,m&&a.stickyHeader)},b)))}));t.a=Object(s.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(o.a)(Object(o.a)({},e.typography.body2),{},{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(l)},890:function(e,t,a){"use strict";var n=a(1),o=a(3),i=a(0),r=(a(10),a(4)),s=a(8),c=a(834),l={variant:"body"},d=i.forwardRef((function(e,t){var a=e.classes,s=e.className,d=e.component,u=void 0===d?"tbody":d,p=Object(o.a)(e,["classes","className","component"]);return i.createElement(c.a.Provider,{value:l},i.createElement(u,Object(n.a)({className:Object(r.default)(a.root,s),ref:t,role:"tbody"===u?null:"rowgroup"},p)))}));t.a=Object(s.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(d)},925:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p}));var n=a(0),o=a.n(n),i=a(768),r=a(333),s=a(824),c=a(848),l=a(849),d=a(174),u=a(336);function p(){var e=Object(n.useContext)(d.a).questionValues;return o.a.createElement(r.a,null,o.a.createElement(s.a,null,"Compare canvas fields"),o.a.createElement(i.a,{container:!0,spacing:3},o.a.createElement(i.a,{item:!0,xs:12,md:9},o.a.createElement(c.b,null)),o.a.createElement(i.a,{item:!0,xs:12,md:3},o.a.createElement(u.c,{values:e}),o.a.createElement(l.a,null))))}}}]);
//# sourceMappingURL=16.3fc81602.chunk.js.map