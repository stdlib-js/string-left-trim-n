// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).ltrimN=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,t=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var c,f,p,s;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(u.call(r,e)||l.call(r,e)?(c=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=c):r[e]=t.value),p="get"in t,s="set"in t,f&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(r,e,t.get),s&&a&&a.call(r,e,t.set),r};var c=e;function f(r,e,t){c(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function p(r){return"string"==typeof r}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function g(){return s&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var y="function"==typeof Symbol?Symbol.toStringTag:"";var h=g()?function(r){var e,t,n,o,i;if(null==r)return d.call(r);t=r[y],i=y,e=null!=(o=r)&&v.call(o,i);try{r[y]=void 0}catch(e){return d.call(r)}return n=d.call(r),e?r[y]=t:delete r[y],n}:function(r){return d.call(r)},b=String.prototype.valueOf;var m=g();function w(r){return"object"==typeof r&&(r instanceof String||(m?function(r){try{return b.call(r),!0}catch(r){return!1}}(r):"[object String]"===h(r)))}function E(r){return p(r)||w(r)}function j(r){return"number"==typeof r}f(E,"isPrimitive",p),f(E,"isObject",w);var T=Number,V=T.prototype.toString;var _=g();function R(r){return"object"==typeof r&&(r instanceof T||(_?function(r){try{return V.call(r),!0}catch(r){return!1}}(r):"[object Number]"===h(r)))}function P(r){return j(r)||R(r)}f(P,"isPrimitive",j),f(P,"isObject",R);var S=Number.POSITIVE_INFINITY,k=T.NEGATIVE_INFINITY,x=Math.floor;function B(r){return r<S&&r>k&&x(e=r)===e;var e}function L(r){return j(r)&&B(r)}function O(r){return R(r)&&B(r.valueOf())}function I(r){return L(r)||O(r)}function C(r){return"boolean"==typeof r}f(I,"isPrimitive",L),f(I,"isObject",O);var A=Boolean.prototype.toString;var N=g();function F(r){return"object"==typeof r&&(r instanceof Boolean||(N?function(r){try{return A.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===h(r)))}function M(r){return C(r)||F(r)}function G(r){return L(r)&&r>=0}function J(r){return O(r)&&r.valueOf()>=0}function W(r){return G(r)||J(r)}f(M,"isPrimitive",C),f(M,"isObject",F),f(W,"isPrimitive",G),f(W,"isObject",J);var Z=65536,$=1024,U=55296,Y=56319,X=56320,q=57343;function z(r,e,t){var n,o,i,a;if(!p(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");if(!G(e))throw new TypeError("invalid argument. Must provide a valid position (nonnegative integer). Value: `"+e+"`.");if(e>=r.length)throw new RangeError("invalid argument. Must provide a valid position (within string bounds). Value: `"+e+"`.");if(arguments.length>2){if(!C(t))throw new TypeError("invalid argument. Third argument must be a boolean. Value: `"+t+"`.");o=t}else o=!1;return(n=r.charCodeAt(e))>=U&&n<=Y&&e<r.length-1?(a=n,i=r.charCodeAt(e+1),X<=i&&i<=q?(a-U)*$+(i-X)+Z:a):o&&n>=X&&n<=q&&e>=1?(a=r.charCodeAt(e-1),i=n,U<=a&&a<=Y?(a-U)*$+(i-X)+Z:i):n}function D(r,e){var t,n;if(!p(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");if(!G(e))throw new TypeError("invalid argument. Must provide a valid position (nonnegative integer). Value: `"+e+"`.");if(e>=r.length)throw new RangeError("invalid argument. Must provide a valid position (within string bounds). Value: `"+e+"`.");return t=r.charCodeAt(e),n=r.charCodeAt(e+1),t>=55296&&t<=56319&&n>=56320&&n<=57343}var H={CR:0,LF:1,Control:2,Extend:3,RegionalIndicator:4,SpacingMark:5,L:6,V:7,T:8,LV:9,LVT:10,Other:11,Prepend:12,ZWJ:13,NotBreak:0,BreakStart:1,Break:2,BreakLastRegional:3,BreakPenultimateRegional:4,ExtendedPictographic:101};function K(r,e,t,n){var o;for(t>=r.length&&(t=r.length-1),o=e;o<=t;o++)if(r[o]!==n)return!1;return!0}function Q(r,e,t,n){var o;for(e>=r.length-1&&(e=r.length-1),o=e;o>=t;o--)if(r[o]===n)return o;return-1}var rr={};f(rr,"constants",H),f(rr,"breakType",(function(r,e){var t,n,o,i,a;return o=r[(a=r.length-1)-1],n=r[a],t=e[a],(i=Q(r,a,0,H.RegionalIndicator))>0&&o!==H.Prepend&&o!==H.RegionalIndicator&&K(r,1,i-1,H.RegionalIndicator)?function(r,e,t,n){var o,i;for(t>=r.length&&(t=r.length-1),o=0,i=e;i<=t;i++)r[i]===n&&(o+=1);return o}(r,0,a,H.RegionalIndicator)%2==1?H.BreakLastRegional:H.BreakPenultimateRegional:o===H.CR&&n===H.LF?H.NotBreak:o===H.Control||o===H.CR||o===H.LF||n===H.Control||n===H.CR||n===H.LF?H.BreakStart:(o!==H.L||n!==H.L&&n!==H.V&&n!==H.LV&&n!==H.LVT)&&(o!==H.LV&&o!==H.V||n!==H.V&&n!==H.T)&&(o!==H.LVT&&o!==H.T||n!==H.T)?n===H.Extend||n===H.ZWJ||n===H.SpacingMark||o===H.Prepend||(i=Q(e,a-1,0,H.ExtendedPictographic))>=0&&o===H.ZWJ&&t===H.ExtendedPictographic&&e[i]===H.ExtendedPictographic&&K(r,i+1,a-2,H.Extend)?H.NotBreak:function(r,e,t,n){var o;for(t>=r.length&&(t=r.length-1),o=e;o<=t;o++)if(r[o]===n)return o;return-1}(r,1,a-1,H.RegionalIndicator)>=0?H.Break:o===H.RegionalIndicator&&n===H.RegionalIndicator?H.NotBreak:H.BreakStart:H.NotBreak})),f(rr,"emojiProperty",(function(r){return 169===r||174===r||8252===r||8265===r||8482===r||8505===r||8596<=r&&r<=8601||8617<=r&&r<=8618||8986<=r&&r<=8987||9e3===r||9096===r||9167===r||9193<=r&&r<=9196||9197<=r&&r<=9198||9199===r||9200===r||9201<=r&&r<=9202||9203===r||9208<=r&&r<=9210||9410===r||9642<=r&&r<=9643||9654===r||9664===r||9723<=r&&r<=9726||9728<=r&&r<=9729||9730<=r&&r<=9731||9732===r||9733===r||9735<=r&&r<=9741||9742===r||9743<=r&&r<=9744||9745===r||9746===r||9748<=r&&r<=9749||9750<=r&&r<=9751||9752===r||9753<=r&&r<=9756||9757===r||9758<=r&&r<=9759||9760===r||9761===r||9762<=r&&r<=9763||9764<=r&&r<=9765||9766===r||9767<=r&&r<=9769||9770===r||9771<=r&&r<=9773||9774===r||9775===r||9776<=r&&r<=9783||9784<=r&&r<=9785||9786===r||9787<=r&&r<=9791||9792===r||9793===r||9794===r||9795<=r&&r<=9799||9800<=r&&r<=9811||9812<=r&&r<=9822||9823===r||9824===r||9825<=r&&r<=9826||9827===r||9828===r||9829<=r&&r<=9830||9831===r||9832===r||9833<=r&&r<=9850||9851===r||9852<=r&&r<=9853||9854===r||9855===r||9856<=r&&r<=9861||9872<=r&&r<=9873||9874===r||9875===r||9876===r||9877===r||9878<=r&&r<=9879||9880===r||9881===r||9882===r||9883<=r&&r<=9884||9885<=r&&r<=9887||9888<=r&&r<=9889||9890<=r&&r<=9894||9895===r||9896<=r&&r<=9897||9898<=r&&r<=9899||9900<=r&&r<=9903||9904<=r&&r<=9905||9906<=r&&r<=9916||9917<=r&&r<=9918||9919<=r&&r<=9923||9924<=r&&r<=9925||9926<=r&&r<=9927||9928===r||9929<=r&&r<=9933||9934===r||9935===r||9936===r||9937===r||9938===r||9939===r||9940===r||9941<=r&&r<=9960||9961===r||9962===r||9963<=r&&r<=9967||9968<=r&&r<=9969||9970<=r&&r<=9971||9972===r||9973===r||9974===r||9975<=r&&r<=9977||9978===r||9979<=r&&r<=9980||9981===r||9982<=r&&r<=9985||9986===r||9987<=r&&r<=9988||9989===r||9992<=r&&r<=9996||9997===r||9998===r||9999===r||1e4<=r&&r<=10001||10002===r||10004===r||10006===r||10013===r||10017===r||10024===r||10035<=r&&r<=10036||10052===r||10055===r||10060===r||10062===r||10067<=r&&r<=10069||10071===r||10083===r||10084===r||10085<=r&&r<=10087||10133<=r&&r<=10135||10145===r||10160===r||10175===r||10548<=r&&r<=10549||11013<=r&&r<=11015||11035<=r&&r<=11036||11088===r||11093===r||12336===r||12349===r||12951===r||12953===r||126976<=r&&r<=126979||126980===r||126981<=r&&r<=127182||127183===r||127184<=r&&r<=127231||127245<=r&&r<=127247||127279===r||127340<=r&&r<=127343||127344<=r&&r<=127345||127358<=r&&r<=127359||127374===r||127377<=r&&r<=127386||127405<=r&&r<=127461||127489<=r&&r<=127490||127491<=r&&r<=127503||127514===r||127535===r||127538<=r&&r<=127546||127548<=r&&r<=127551||127561<=r&&r<=127567||127568<=r&&r<=127569||127570<=r&&r<=127743||127744<=r&&r<=127756||127757<=r&&r<=127758||127759===r||127760===r||127761===r||127762===r||127763<=r&&r<=127765||127766<=r&&r<=127768||127769===r||127770===r||127771===r||127772===r||127773<=r&&r<=127774||127775<=r&&r<=127776||127777===r||127778<=r&&r<=127779||127780<=r&&r<=127788||127789<=r&&r<=127791||127792<=r&&r<=127793||127794<=r&&r<=127795||127796<=r&&r<=127797||127798===r||127799<=r&&r<=127818||127819===r||127820<=r&&r<=127823||127824===r||127825<=r&&r<=127867||127868===r||127869===r||127870<=r&&r<=127871||127872<=r&&r<=127891||127892<=r&&r<=127893||127894<=r&&r<=127895||127896===r||127897<=r&&r<=127899||127900<=r&&r<=127901||127902<=r&&r<=127903||127904<=r&&r<=127940||127941===r||127942===r||127943===r||127944===r||127945===r||127946===r||127947<=r&&r<=127950||127951<=r&&r<=127955||127956<=r&&r<=127967||127968<=r&&r<=127971||127972===r||127973<=r&&r<=127984||127985<=r&&r<=127986||127987===r||127988===r||127989===r||127990===r||127991===r||127992<=r&&r<=127994||128e3<=r&&r<=128007||128008===r||128009<=r&&r<=128011||128012<=r&&r<=128014||128015<=r&&r<=128016||128017<=r&&r<=128018||128019===r||128020===r||128021===r||128022===r||128023<=r&&r<=128041||128042===r||128043<=r&&r<=128062||128063===r||128064===r||128065===r||128066<=r&&r<=128100||128101===r||128102<=r&&r<=128107||128108<=r&&r<=128109||128110<=r&&r<=128172||128173===r||128174<=r&&r<=128181||128182<=r&&r<=128183||128184<=r&&r<=128235||128236<=r&&r<=128237||128238===r||128239===r||128240<=r&&r<=128244||128245===r||128246<=r&&r<=128247||128248===r||128249<=r&&r<=128252||128253===r||128254===r||128255<=r&&r<=128258||128259===r||128260<=r&&r<=128263||128264===r||128265===r||128266<=r&&r<=128276||128277===r||128278<=r&&r<=128299||128300<=r&&r<=128301||128302<=r&&r<=128317||128326<=r&&r<=128328||128329<=r&&r<=128330||128331<=r&&r<=128334||128335===r||128336<=r&&r<=128347||128348<=r&&r<=128359||128360<=r&&r<=128366||128367<=r&&r<=128368||128369<=r&&r<=128370||128371<=r&&r<=128377||128378===r||128379<=r&&r<=128390||128391===r||128392<=r&&r<=128393||128394<=r&&r<=128397||128398<=r&&r<=128399||128400===r||128401<=r&&r<=128404||128405<=r&&r<=128406||128407<=r&&r<=128419||128420===r||128421===r||128422<=r&&r<=128423||128424===r||128425<=r&&r<=128432||128433<=r&&r<=128434||128435<=r&&r<=128443||128444===r||128445<=r&&r<=128449||128450<=r&&r<=128452||128453<=r&&r<=128464||128465<=r&&r<=128467||128468<=r&&r<=128475||128476<=r&&r<=128478||128479<=r&&r<=128480||128481===r||128482===r||128483===r||128484<=r&&r<=128487||128488===r||128489<=r&&r<=128494||128495===r||128496<=r&&r<=128498||128499===r||128500<=r&&r<=128505||128506===r||128507<=r&&r<=128511||128512===r||128513<=r&&r<=128518||128519<=r&&r<=128520||128521<=r&&r<=128525||128526===r||128527===r||128528===r||128529===r||128530<=r&&r<=128532||128533===r||128534===r||128535===r||128536===r||128537===r||128538===r||128539===r||128540<=r&&r<=128542||128543===r||128544<=r&&r<=128549||128550<=r&&r<=128551||128552<=r&&r<=128555||128556===r||128557===r||128558<=r&&r<=128559||128560<=r&&r<=128563||128564===r||128565===r||128566===r||128567<=r&&r<=128576||128577<=r&&r<=128580||128581<=r&&r<=128591||128640===r||128641<=r&&r<=128642||128643<=r&&r<=128645||128646===r||128647===r||128648===r||128649===r||128650<=r&&r<=128651||128652===r||128653===r||128654===r||128655===r||128656===r||128657<=r&&r<=128659||128660===r||128661===r||128662===r||128663===r||128664===r||128665<=r&&r<=128666||128667<=r&&r<=128673||128674===r||128675===r||128676<=r&&r<=128677||128678===r||128679<=r&&r<=128685||128686<=r&&r<=128689||128690===r||128691<=r&&r<=128693||128694===r||128695<=r&&r<=128696||128697<=r&&r<=128702||128703===r||128704===r||128705<=r&&r<=128709||128710<=r&&r<=128714||128715===r||128716===r||128717<=r&&r<=128719||128720===r||128721<=r&&r<=128722||128723<=r&&r<=128724||128725===r||128726<=r&&r<=128727||128728<=r&&r<=128735||128736<=r&&r<=128741||128742<=r&&r<=128744||128745===r||128746===r||128747<=r&&r<=128748||128749<=r&&r<=128751||128752===r||128753<=r&&r<=128754||128755===r||128756<=r&&r<=128758||128759<=r&&r<=128760||128761===r||128762===r||128763<=r&&r<=128764||128765<=r&&r<=128767||128884<=r&&r<=128895||128981<=r&&r<=128991||128992<=r&&r<=129003||129004<=r&&r<=129023||129036<=r&&r<=129039||129096<=r&&r<=129103||129114<=r&&r<=129119||129160<=r&&r<=129167||129198<=r&&r<=129279||129292===r||129293<=r&&r<=129295||129296<=r&&r<=129304||129305<=r&&r<=129310||129311===r||129312<=r&&r<=129319||129320<=r&&r<=129327||129328===r||129329<=r&&r<=129330||129331<=r&&r<=129338||129340<=r&&r<=129342||129343===r||129344<=r&&r<=129349||129351<=r&&r<=129355||129356===r||129357<=r&&r<=129359||129360<=r&&r<=129374||129375<=r&&r<=129387||129388<=r&&r<=129392||129393===r||129394===r||129395<=r&&r<=129398||129399<=r&&r<=129400||129401===r||129402===r||129403===r||129404<=r&&r<=129407||129408<=r&&r<=129412||129413<=r&&r<=129425||129426<=r&&r<=129431||129432<=r&&r<=129442||129443<=r&&r<=129444||129445<=r&&r<=129450||129451<=r&&r<=129453||129454<=r&&r<=129455||129456<=r&&r<=129465||129466<=r&&r<=129471||129472===r||129473<=r&&r<=129474||129475<=r&&r<=129482||129483===r||129484===r||129485<=r&&r<=129487||129488<=r&&r<=129510||129511<=r&&r<=129535||129536<=r&&r<=129647||129648<=r&&r<=129651||129652===r||129653<=r&&r<=129655||129656<=r&&r<=129658||129659<=r&&r<=129663||129664<=r&&r<=129666||129667<=r&&r<=129670||129671<=r&&r<=129679||129680<=r&&r<=129685||129686<=r&&r<=129704||129705<=r&&r<=129711||129712<=r&&r<=129718||129719<=r&&r<=129727||129728<=r&&r<=129730||129731<=r&&r<=129743||129744<=r&&r<=129750||129751<=r&&r<=129791||130048<=r&&r<=131069?H.ExtendedPictographic:H.Other})),f(rr,"breakProperty",(function(r){return 1536<=r&&r<=1541||1757===r||1807===r||2274===r||3406===r||69821===r||69837===r||70082<=r&&r<=70083||71999===r||72001===r||72250===r||72324<=r&&r<=72329||73030===r?H.Prepend:13===r?H.CR:10===r?H.LF:0<=r&&r<=9||11<=r&&r<=12||14<=r&&r<=31||127<=r&&r<=159||173===r||1564===r||6158===r||8203===r||8206<=r&&r<=8207||8232===r||8233===r||8234<=r&&r<=8238||8288<=r&&r<=8292||8293===r||8294<=r&&r<=8303||65279===r||65520<=r&&r<=65528||65529<=r&&r<=65531||78896<=r&&r<=78904||113824<=r&&r<=113827||119155<=r&&r<=119162||917504===r||917505===r||917506<=r&&r<=917535||917632<=r&&r<=917759||918e3<=r&&r<=921599?H.Control:768<=r&&r<=879||1155<=r&&r<=1159||1160<=r&&r<=1161||1425<=r&&r<=1469||1471===r||1473<=r&&r<=1474||1476<=r&&r<=1477||1479===r||1552<=r&&r<=1562||1611<=r&&r<=1631||1648===r||1750<=r&&r<=1756||1759<=r&&r<=1764||1767<=r&&r<=1768||1770<=r&&r<=1773||1809===r||1840<=r&&r<=1866||1958<=r&&r<=1968||2027<=r&&r<=2035||2045===r||2070<=r&&r<=2073||2075<=r&&r<=2083||2085<=r&&r<=2087||2089<=r&&r<=2093||2137<=r&&r<=2139||2259<=r&&r<=2273||2275<=r&&r<=2306||2362===r||2364===r||2369<=r&&r<=2376||2381===r||2385<=r&&r<=2391||2402<=r&&r<=2403||2433===r||2492===r||2494===r||2497<=r&&r<=2500||2509===r||2519===r||2530<=r&&r<=2531||2558===r||2561<=r&&r<=2562||2620===r||2625<=r&&r<=2626||2631<=r&&r<=2632||2635<=r&&r<=2637||2641===r||2672<=r&&r<=2673||2677===r||2689<=r&&r<=2690||2748===r||2753<=r&&r<=2757||2759<=r&&r<=2760||2765===r||2786<=r&&r<=2787||2810<=r&&r<=2815||2817===r||2876===r||2878===r||2879===r||2881<=r&&r<=2884||2893===r||2901<=r&&r<=2902||2903===r||2914<=r&&r<=2915||2946===r||3006===r||3008===r||3021===r||3031===r||3072===r||3076===r||3134<=r&&r<=3136||3142<=r&&r<=3144||3146<=r&&r<=3149||3157<=r&&r<=3158||3170<=r&&r<=3171||3201===r||3260===r||3263===r||3266===r||3270===r||3276<=r&&r<=3277||3285<=r&&r<=3286||3298<=r&&r<=3299||3328<=r&&r<=3329||3387<=r&&r<=3388||3390===r||3393<=r&&r<=3396||3405===r||3415===r||3426<=r&&r<=3427||3457===r||3530===r||3535===r||3538<=r&&r<=3540||3542===r||3551===r||3633===r||3636<=r&&r<=3642||3655<=r&&r<=3662||3761===r||3764<=r&&r<=3772||3784<=r&&r<=3789||3864<=r&&r<=3865||3893===r||3895===r||3897===r||3953<=r&&r<=3966||3968<=r&&r<=3972||3974<=r&&r<=3975||3981<=r&&r<=3991||3993<=r&&r<=4028||4038===r||4141<=r&&r<=4144||4146<=r&&r<=4151||4153<=r&&r<=4154||4157<=r&&r<=4158||4184<=r&&r<=4185||4190<=r&&r<=4192||4209<=r&&r<=4212||4226===r||4229<=r&&r<=4230||4237===r||4253===r||4957<=r&&r<=4959||5906<=r&&r<=5908||5938<=r&&r<=5940||5970<=r&&r<=5971||6002<=r&&r<=6003||6068<=r&&r<=6069||6071<=r&&r<=6077||6086===r||6089<=r&&r<=6099||6109===r||6155<=r&&r<=6157||6277<=r&&r<=6278||6313===r||6432<=r&&r<=6434||6439<=r&&r<=6440||6450===r||6457<=r&&r<=6459||6679<=r&&r<=6680||6683===r||6742===r||6744<=r&&r<=6750||6752===r||6754===r||6757<=r&&r<=6764||6771<=r&&r<=6780||6783===r||6832<=r&&r<=6845||6846===r||6847<=r&&r<=6848||6912<=r&&r<=6915||6964===r||6965===r||6966<=r&&r<=6970||6972===r||6978===r||7019<=r&&r<=7027||7040<=r&&r<=7041||7074<=r&&r<=7077||7080<=r&&r<=7081||7083<=r&&r<=7085||7142===r||7144<=r&&r<=7145||7149===r||7151<=r&&r<=7153||7212<=r&&r<=7219||7222<=r&&r<=7223||7376<=r&&r<=7378||7380<=r&&r<=7392||7394<=r&&r<=7400||7405===r||7412===r||7416<=r&&r<=7417||7616<=r&&r<=7673||7675<=r&&r<=7679||8204===r||8400<=r&&r<=8412||8413<=r&&r<=8416||8417===r||8418<=r&&r<=8420||8421<=r&&r<=8432||11503<=r&&r<=11505||11647===r||11744<=r&&r<=11775||12330<=r&&r<=12333||12334<=r&&r<=12335||12441<=r&&r<=12442||42607===r||42608<=r&&r<=42610||42612<=r&&r<=42621||42654<=r&&r<=42655||42736<=r&&r<=42737||43010===r||43014===r||43019===r||43045<=r&&r<=43046||43052===r||43204<=r&&r<=43205||43232<=r&&r<=43249||43263===r||43302<=r&&r<=43309||43335<=r&&r<=43345||43392<=r&&r<=43394||43443===r||43446<=r&&r<=43449||43452<=r&&r<=43453||43493===r||43561<=r&&r<=43566||43569<=r&&r<=43570||43573<=r&&r<=43574||43587===r||43596===r||43644===r||43696===r||43698<=r&&r<=43700||43703<=r&&r<=43704||43710<=r&&r<=43711||43713===r||43756<=r&&r<=43757||43766===r||44005===r||44008===r||44013===r||64286===r||65024<=r&&r<=65039||65056<=r&&r<=65071||65438<=r&&r<=65439||66045===r||66272===r||66422<=r&&r<=66426||68097<=r&&r<=68099||68101<=r&&r<=68102||68108<=r&&r<=68111||68152<=r&&r<=68154||68159===r||68325<=r&&r<=68326||68900<=r&&r<=68903||69291<=r&&r<=69292||69446<=r&&r<=69456||69633===r||69688<=r&&r<=69702||69759<=r&&r<=69761||69811<=r&&r<=69814||69817<=r&&r<=69818||69888<=r&&r<=69890||69927<=r&&r<=69931||69933<=r&&r<=69940||70003===r||70016<=r&&r<=70017||70070<=r&&r<=70078||70089<=r&&r<=70092||70095===r||70191<=r&&r<=70193||70196===r||70198<=r&&r<=70199||70206===r||70367===r||70371<=r&&r<=70378||70400<=r&&r<=70401||70459<=r&&r<=70460||70462===r||70464===r||70487===r||70502<=r&&r<=70508||70512<=r&&r<=70516||70712<=r&&r<=70719||70722<=r&&r<=70724||70726===r||70750===r||70832===r||70835<=r&&r<=70840||70842===r||70845===r||70847<=r&&r<=70848||70850<=r&&r<=70851||71087===r||71090<=r&&r<=71093||71100<=r&&r<=71101||71103<=r&&r<=71104||71132<=r&&r<=71133||71219<=r&&r<=71226||71229===r||71231<=r&&r<=71232||71339===r||71341===r||71344<=r&&r<=71349||71351===r||71453<=r&&r<=71455||71458<=r&&r<=71461||71463<=r&&r<=71467||71727<=r&&r<=71735||71737<=r&&r<=71738||71984===r||71995<=r&&r<=71996||71998===r||72003===r||72148<=r&&r<=72151||72154<=r&&r<=72155||72160===r||72193<=r&&r<=72202||72243<=r&&r<=72248||72251<=r&&r<=72254||72263===r||72273<=r&&r<=72278||72281<=r&&r<=72283||72330<=r&&r<=72342||72344<=r&&r<=72345||72752<=r&&r<=72758||72760<=r&&r<=72765||72767===r||72850<=r&&r<=72871||72874<=r&&r<=72880||72882<=r&&r<=72883||72885<=r&&r<=72886||73009<=r&&r<=73014||73018===r||73020<=r&&r<=73021||73023<=r&&r<=73029||73031===r||73104<=r&&r<=73105||73109===r||73111===r||73459<=r&&r<=73460||92912<=r&&r<=92916||92976<=r&&r<=92982||94031===r||94095<=r&&r<=94098||94180===r||113821<=r&&r<=113822||119141===r||119143<=r&&r<=119145||119150<=r&&r<=119154||119163<=r&&r<=119170||119173<=r&&r<=119179||119210<=r&&r<=119213||119362<=r&&r<=119364||121344<=r&&r<=121398||121403<=r&&r<=121452||121461===r||121476===r||121499<=r&&r<=121503||121505<=r&&r<=121519||122880<=r&&r<=122886||122888<=r&&r<=122904||122907<=r&&r<=122913||122915<=r&&r<=122916||122918<=r&&r<=122922||123184<=r&&r<=123190||123628<=r&&r<=123631||125136<=r&&r<=125142||125252<=r&&r<=125258||127995<=r&&r<=127999||917536<=r&&r<=917631||917760<=r&&r<=917999?H.Extend:127462<=r&&r<=127487?H.RegionalIndicator:2307===r||2363===r||2366<=r&&r<=2368||2377<=r&&r<=2380||2382<=r&&r<=2383||2434<=r&&r<=2435||2495<=r&&r<=2496||2503<=r&&r<=2504||2507<=r&&r<=2508||2563===r||2622<=r&&r<=2624||2691===r||2750<=r&&r<=2752||2761===r||2763<=r&&r<=2764||2818<=r&&r<=2819||2880===r||2887<=r&&r<=2888||2891<=r&&r<=2892||3007===r||3009<=r&&r<=3010||3014<=r&&r<=3016||3018<=r&&r<=3020||3073<=r&&r<=3075||3137<=r&&r<=3140||3202<=r&&r<=3203||3262===r||3264<=r&&r<=3265||3267<=r&&r<=3268||3271<=r&&r<=3272||3274<=r&&r<=3275||3330<=r&&r<=3331||3391<=r&&r<=3392||3398<=r&&r<=3400||3402<=r&&r<=3404||3458<=r&&r<=3459||3536<=r&&r<=3537||3544<=r&&r<=3550||3570<=r&&r<=3571||3635===r||3763===r||3902<=r&&r<=3903||3967===r||4145===r||4155<=r&&r<=4156||4182<=r&&r<=4183||4228===r||6070===r||6078<=r&&r<=6085||6087<=r&&r<=6088||6435<=r&&r<=6438||6441<=r&&r<=6443||6448<=r&&r<=6449||6451<=r&&r<=6456||6681<=r&&r<=6682||6741===r||6743===r||6765<=r&&r<=6770||6916===r||6971===r||6973<=r&&r<=6977||6979<=r&&r<=6980||7042===r||7073===r||7078<=r&&r<=7079||7082===r||7143===r||7146<=r&&r<=7148||7150===r||7154<=r&&r<=7155||7204<=r&&r<=7211||7220<=r&&r<=7221||7393===r||7415===r||43043<=r&&r<=43044||43047===r||43136<=r&&r<=43137||43188<=r&&r<=43203||43346<=r&&r<=43347||43395===r||43444<=r&&r<=43445||43450<=r&&r<=43451||43454<=r&&r<=43456||43567<=r&&r<=43568||43571<=r&&r<=43572||43597===r||43755===r||43758<=r&&r<=43759||43765===r||44003<=r&&r<=44004||44006<=r&&r<=44007||44009<=r&&r<=44010||44012===r||69632===r||69634===r||69762===r||69808<=r&&r<=69810||69815<=r&&r<=69816||69932===r||69957<=r&&r<=69958||70018===r||70067<=r&&r<=70069||70079<=r&&r<=70080||70094===r||70188<=r&&r<=70190||70194<=r&&r<=70195||70197===r||70368<=r&&r<=70370||70402<=r&&r<=70403||70463===r||70465<=r&&r<=70468||70471<=r&&r<=70472||70475<=r&&r<=70477||70498<=r&&r<=70499||70709<=r&&r<=70711||70720<=r&&r<=70721||70725===r||70833<=r&&r<=70834||70841===r||70843<=r&&r<=70844||70846===r||70849===r||71088<=r&&r<=71089||71096<=r&&r<=71099||71102===r||71216<=r&&r<=71218||71227<=r&&r<=71228||71230===r||71340===r||71342<=r&&r<=71343||71350===r||71456<=r&&r<=71457||71462===r||71724<=r&&r<=71726||71736===r||71985<=r&&r<=71989||71991<=r&&r<=71992||71997===r||72e3===r||72002===r||72145<=r&&r<=72147||72156<=r&&r<=72159||72164===r||72249===r||72279<=r&&r<=72280||72343===r||72751===r||72766===r||72873===r||72881===r||72884===r||73098<=r&&r<=73102||73107<=r&&r<=73108||73110===r||73461<=r&&r<=73462||94033<=r&&r<=94087||94192<=r&&r<=94193||119142===r||119149===r?H.SpacingMark:4352<=r&&r<=4447||43360<=r&&r<=43388?H.L:4448<=r&&r<=4519||55216<=r&&r<=55238?H.V:4520<=r&&r<=4607||55243<=r&&r<=55291?H.T:44032===r||44060===r||44088===r||44116===r||44144===r||44172===r||44200===r||44228===r||44256===r||44284===r||44312===r||44340===r||44368===r||44396===r||44424===r||44452===r||44480===r||44508===r||44536===r||44564===r||44592===r||44620===r||44648===r||44676===r||44704===r||44732===r||44760===r||44788===r||44816===r||44844===r||44872===r||44900===r||44928===r||44956===r||44984===r||45012===r||45040===r||45068===r||45096===r||45124===r||45152===r||45180===r||45208===r||45236===r||45264===r||45292===r||45320===r||45348===r||45376===r||45404===r||45432===r||45460===r||45488===r||45516===r||45544===r||45572===r||45600===r||45628===r||45656===r||45684===r||45712===r||45740===r||45768===r||45796===r||45824===r||45852===r||45880===r||45908===r||45936===r||45964===r||45992===r||46020===r||46048===r||46076===r||46104===r||46132===r||46160===r||46188===r||46216===r||46244===r||46272===r||46300===r||46328===r||46356===r||46384===r||46412===r||46440===r||46468===r||46496===r||46524===r||46552===r||46580===r||46608===r||46636===r||46664===r||46692===r||46720===r||46748===r||46776===r||46804===r||46832===r||46860===r||46888===r||46916===r||46944===r||46972===r||47e3===r||47028===r||47056===r||47084===r||47112===r||47140===r||47168===r||47196===r||47224===r||47252===r||47280===r||47308===r||47336===r||47364===r||47392===r||47420===r||47448===r||47476===r||47504===r||47532===r||47560===r||47588===r||47616===r||47644===r||47672===r||47700===r||47728===r||47756===r||47784===r||47812===r||47840===r||47868===r||47896===r||47924===r||47952===r||47980===r||48008===r||48036===r||48064===r||48092===r||48120===r||48148===r||48176===r||48204===r||48232===r||48260===r||48288===r||48316===r||48344===r||48372===r||48400===r||48428===r||48456===r||48484===r||48512===r||48540===r||48568===r||48596===r||48624===r||48652===r||48680===r||48708===r||48736===r||48764===r||48792===r||48820===r||48848===r||48876===r||48904===r||48932===r||48960===r||48988===r||49016===r||49044===r||49072===r||49100===r||49128===r||49156===r||49184===r||49212===r||49240===r||49268===r||49296===r||49324===r||49352===r||49380===r||49408===r||49436===r||49464===r||49492===r||49520===r||49548===r||49576===r||49604===r||49632===r||49660===r||49688===r||49716===r||49744===r||49772===r||49800===r||49828===r||49856===r||49884===r||49912===r||49940===r||49968===r||49996===r||50024===r||50052===r||50080===r||50108===r||50136===r||50164===r||50192===r||50220===r||50248===r||50276===r||50304===r||50332===r||50360===r||50388===r||50416===r||50444===r||50472===r||50500===r||50528===r||50556===r||50584===r||50612===r||50640===r||50668===r||50696===r||50724===r||50752===r||50780===r||50808===r||50836===r||50864===r||50892===r||50920===r||50948===r||50976===r||51004===r||51032===r||51060===r||51088===r||51116===r||51144===r||51172===r||51200===r||51228===r||51256===r||51284===r||51312===r||51340===r||51368===r||51396===r||51424===r||51452===r||51480===r||51508===r||51536===r||51564===r||51592===r||51620===r||51648===r||51676===r||51704===r||51732===r||51760===r||51788===r||51816===r||51844===r||51872===r||51900===r||51928===r||51956===r||51984===r||52012===r||52040===r||52068===r||52096===r||52124===r||52152===r||52180===r||52208===r||52236===r||52264===r||52292===r||52320===r||52348===r||52376===r||52404===r||52432===r||52460===r||52488===r||52516===r||52544===r||52572===r||52600===r||52628===r||52656===r||52684===r||52712===r||52740===r||52768===r||52796===r||52824===r||52852===r||52880===r||52908===r||52936===r||52964===r||52992===r||53020===r||53048===r||53076===r||53104===r||53132===r||53160===r||53188===r||53216===r||53244===r||53272===r||53300===r||53328===r||53356===r||53384===r||53412===r||53440===r||53468===r||53496===r||53524===r||53552===r||53580===r||53608===r||53636===r||53664===r||53692===r||53720===r||53748===r||53776===r||53804===r||53832===r||53860===r||53888===r||53916===r||53944===r||53972===r||54e3===r||54028===r||54056===r||54084===r||54112===r||54140===r||54168===r||54196===r||54224===r||54252===r||54280===r||54308===r||54336===r||54364===r||54392===r||54420===r||54448===r||54476===r||54504===r||54532===r||54560===r||54588===r||54616===r||54644===r||54672===r||54700===r||54728===r||54756===r||54784===r||54812===r||54840===r||54868===r||54896===r||54924===r||54952===r||54980===r||55008===r||55036===r||55064===r||55092===r||55120===r||55148===r||55176===r?H.LV:44033<=r&&r<=44059||44061<=r&&r<=44087||44089<=r&&r<=44115||44117<=r&&r<=44143||44145<=r&&r<=44171||44173<=r&&r<=44199||44201<=r&&r<=44227||44229<=r&&r<=44255||44257<=r&&r<=44283||44285<=r&&r<=44311||44313<=r&&r<=44339||44341<=r&&r<=44367||44369<=r&&r<=44395||44397<=r&&r<=44423||44425<=r&&r<=44451||44453<=r&&r<=44479||44481<=r&&r<=44507||44509<=r&&r<=44535||44537<=r&&r<=44563||44565<=r&&r<=44591||44593<=r&&r<=44619||44621<=r&&r<=44647||44649<=r&&r<=44675||44677<=r&&r<=44703||44705<=r&&r<=44731||44733<=r&&r<=44759||44761<=r&&r<=44787||44789<=r&&r<=44815||44817<=r&&r<=44843||44845<=r&&r<=44871||44873<=r&&r<=44899||44901<=r&&r<=44927||44929<=r&&r<=44955||44957<=r&&r<=44983||44985<=r&&r<=45011||45013<=r&&r<=45039||45041<=r&&r<=45067||45069<=r&&r<=45095||45097<=r&&r<=45123||45125<=r&&r<=45151||45153<=r&&r<=45179||45181<=r&&r<=45207||45209<=r&&r<=45235||45237<=r&&r<=45263||45265<=r&&r<=45291||45293<=r&&r<=45319||45321<=r&&r<=45347||45349<=r&&r<=45375||45377<=r&&r<=45403||45405<=r&&r<=45431||45433<=r&&r<=45459||45461<=r&&r<=45487||45489<=r&&r<=45515||45517<=r&&r<=45543||45545<=r&&r<=45571||45573<=r&&r<=45599||45601<=r&&r<=45627||45629<=r&&r<=45655||45657<=r&&r<=45683||45685<=r&&r<=45711||45713<=r&&r<=45739||45741<=r&&r<=45767||45769<=r&&r<=45795||45797<=r&&r<=45823||45825<=r&&r<=45851||45853<=r&&r<=45879||45881<=r&&r<=45907||45909<=r&&r<=45935||45937<=r&&r<=45963||45965<=r&&r<=45991||45993<=r&&r<=46019||46021<=r&&r<=46047||46049<=r&&r<=46075||46077<=r&&r<=46103||46105<=r&&r<=46131||46133<=r&&r<=46159||46161<=r&&r<=46187||46189<=r&&r<=46215||46217<=r&&r<=46243||46245<=r&&r<=46271||46273<=r&&r<=46299||46301<=r&&r<=46327||46329<=r&&r<=46355||46357<=r&&r<=46383||46385<=r&&r<=46411||46413<=r&&r<=46439||46441<=r&&r<=46467||46469<=r&&r<=46495||46497<=r&&r<=46523||46525<=r&&r<=46551||46553<=r&&r<=46579||46581<=r&&r<=46607||46609<=r&&r<=46635||46637<=r&&r<=46663||46665<=r&&r<=46691||46693<=r&&r<=46719||46721<=r&&r<=46747||46749<=r&&r<=46775||46777<=r&&r<=46803||46805<=r&&r<=46831||46833<=r&&r<=46859||46861<=r&&r<=46887||46889<=r&&r<=46915||46917<=r&&r<=46943||46945<=r&&r<=46971||46973<=r&&r<=46999||47001<=r&&r<=47027||47029<=r&&r<=47055||47057<=r&&r<=47083||47085<=r&&r<=47111||47113<=r&&r<=47139||47141<=r&&r<=47167||47169<=r&&r<=47195||47197<=r&&r<=47223||47225<=r&&r<=47251||47253<=r&&r<=47279||47281<=r&&r<=47307||47309<=r&&r<=47335||47337<=r&&r<=47363||47365<=r&&r<=47391||47393<=r&&r<=47419||47421<=r&&r<=47447||47449<=r&&r<=47475||47477<=r&&r<=47503||47505<=r&&r<=47531||47533<=r&&r<=47559||47561<=r&&r<=47587||47589<=r&&r<=47615||47617<=r&&r<=47643||47645<=r&&r<=47671||47673<=r&&r<=47699||47701<=r&&r<=47727||47729<=r&&r<=47755||47757<=r&&r<=47783||47785<=r&&r<=47811||47813<=r&&r<=47839||47841<=r&&r<=47867||47869<=r&&r<=47895||47897<=r&&r<=47923||47925<=r&&r<=47951||47953<=r&&r<=47979||47981<=r&&r<=48007||48009<=r&&r<=48035||48037<=r&&r<=48063||48065<=r&&r<=48091||48093<=r&&r<=48119||48121<=r&&r<=48147||48149<=r&&r<=48175||48177<=r&&r<=48203||48205<=r&&r<=48231||48233<=r&&r<=48259||48261<=r&&r<=48287||48289<=r&&r<=48315||48317<=r&&r<=48343||48345<=r&&r<=48371||48373<=r&&r<=48399||48401<=r&&r<=48427||48429<=r&&r<=48455||48457<=r&&r<=48483||48485<=r&&r<=48511||48513<=r&&r<=48539||48541<=r&&r<=48567||48569<=r&&r<=48595||48597<=r&&r<=48623||48625<=r&&r<=48651||48653<=r&&r<=48679||48681<=r&&r<=48707||48709<=r&&r<=48735||48737<=r&&r<=48763||48765<=r&&r<=48791||48793<=r&&r<=48819||48821<=r&&r<=48847||48849<=r&&r<=48875||48877<=r&&r<=48903||48905<=r&&r<=48931||48933<=r&&r<=48959||48961<=r&&r<=48987||48989<=r&&r<=49015||49017<=r&&r<=49043||49045<=r&&r<=49071||49073<=r&&r<=49099||49101<=r&&r<=49127||49129<=r&&r<=49155||49157<=r&&r<=49183||49185<=r&&r<=49211||49213<=r&&r<=49239||49241<=r&&r<=49267||49269<=r&&r<=49295||49297<=r&&r<=49323||49325<=r&&r<=49351||49353<=r&&r<=49379||49381<=r&&r<=49407||49409<=r&&r<=49435||49437<=r&&r<=49463||49465<=r&&r<=49491||49493<=r&&r<=49519||49521<=r&&r<=49547||49549<=r&&r<=49575||49577<=r&&r<=49603||49605<=r&&r<=49631||49633<=r&&r<=49659||49661<=r&&r<=49687||49689<=r&&r<=49715||49717<=r&&r<=49743||49745<=r&&r<=49771||49773<=r&&r<=49799||49801<=r&&r<=49827||49829<=r&&r<=49855||49857<=r&&r<=49883||49885<=r&&r<=49911||49913<=r&&r<=49939||49941<=r&&r<=49967||49969<=r&&r<=49995||49997<=r&&r<=50023||50025<=r&&r<=50051||50053<=r&&r<=50079||50081<=r&&r<=50107||50109<=r&&r<=50135||50137<=r&&r<=50163||50165<=r&&r<=50191||50193<=r&&r<=50219||50221<=r&&r<=50247||50249<=r&&r<=50275||50277<=r&&r<=50303||50305<=r&&r<=50331||50333<=r&&r<=50359||50361<=r&&r<=50387||50389<=r&&r<=50415||50417<=r&&r<=50443||50445<=r&&r<=50471||50473<=r&&r<=50499||50501<=r&&r<=50527||50529<=r&&r<=50555||50557<=r&&r<=50583||50585<=r&&r<=50611||50613<=r&&r<=50639||50641<=r&&r<=50667||50669<=r&&r<=50695||50697<=r&&r<=50723||50725<=r&&r<=50751||50753<=r&&r<=50779||50781<=r&&r<=50807||50809<=r&&r<=50835||50837<=r&&r<=50863||50865<=r&&r<=50891||50893<=r&&r<=50919||50921<=r&&r<=50947||50949<=r&&r<=50975||50977<=r&&r<=51003||51005<=r&&r<=51031||51033<=r&&r<=51059||51061<=r&&r<=51087||51089<=r&&r<=51115||51117<=r&&r<=51143||51145<=r&&r<=51171||51173<=r&&r<=51199||51201<=r&&r<=51227||51229<=r&&r<=51255||51257<=r&&r<=51283||51285<=r&&r<=51311||51313<=r&&r<=51339||51341<=r&&r<=51367||51369<=r&&r<=51395||51397<=r&&r<=51423||51425<=r&&r<=51451||51453<=r&&r<=51479||51481<=r&&r<=51507||51509<=r&&r<=51535||51537<=r&&r<=51563||51565<=r&&r<=51591||51593<=r&&r<=51619||51621<=r&&r<=51647||51649<=r&&r<=51675||51677<=r&&r<=51703||51705<=r&&r<=51731||51733<=r&&r<=51759||51761<=r&&r<=51787||51789<=r&&r<=51815||51817<=r&&r<=51843||51845<=r&&r<=51871||51873<=r&&r<=51899||51901<=r&&r<=51927||51929<=r&&r<=51955||51957<=r&&r<=51983||51985<=r&&r<=52011||52013<=r&&r<=52039||52041<=r&&r<=52067||52069<=r&&r<=52095||52097<=r&&r<=52123||52125<=r&&r<=52151||52153<=r&&r<=52179||52181<=r&&r<=52207||52209<=r&&r<=52235||52237<=r&&r<=52263||52265<=r&&r<=52291||52293<=r&&r<=52319||52321<=r&&r<=52347||52349<=r&&r<=52375||52377<=r&&r<=52403||52405<=r&&r<=52431||52433<=r&&r<=52459||52461<=r&&r<=52487||52489<=r&&r<=52515||52517<=r&&r<=52543||52545<=r&&r<=52571||52573<=r&&r<=52599||52601<=r&&r<=52627||52629<=r&&r<=52655||52657<=r&&r<=52683||52685<=r&&r<=52711||52713<=r&&r<=52739||52741<=r&&r<=52767||52769<=r&&r<=52795||52797<=r&&r<=52823||52825<=r&&r<=52851||52853<=r&&r<=52879||52881<=r&&r<=52907||52909<=r&&r<=52935||52937<=r&&r<=52963||52965<=r&&r<=52991||52993<=r&&r<=53019||53021<=r&&r<=53047||53049<=r&&r<=53075||53077<=r&&r<=53103||53105<=r&&r<=53131||53133<=r&&r<=53159||53161<=r&&r<=53187||53189<=r&&r<=53215||53217<=r&&r<=53243||53245<=r&&r<=53271||53273<=r&&r<=53299||53301<=r&&r<=53327||53329<=r&&r<=53355||53357<=r&&r<=53383||53385<=r&&r<=53411||53413<=r&&r<=53439||53441<=r&&r<=53467||53469<=r&&r<=53495||53497<=r&&r<=53523||53525<=r&&r<=53551||53553<=r&&r<=53579||53581<=r&&r<=53607||53609<=r&&r<=53635||53637<=r&&r<=53663||53665<=r&&r<=53691||53693<=r&&r<=53719||53721<=r&&r<=53747||53749<=r&&r<=53775||53777<=r&&r<=53803||53805<=r&&r<=53831||53833<=r&&r<=53859||53861<=r&&r<=53887||53889<=r&&r<=53915||53917<=r&&r<=53943||53945<=r&&r<=53971||53973<=r&&r<=53999||54001<=r&&r<=54027||54029<=r&&r<=54055||54057<=r&&r<=54083||54085<=r&&r<=54111||54113<=r&&r<=54139||54141<=r&&r<=54167||54169<=r&&r<=54195||54197<=r&&r<=54223||54225<=r&&r<=54251||54253<=r&&r<=54279||54281<=r&&r<=54307||54309<=r&&r<=54335||54337<=r&&r<=54363||54365<=r&&r<=54391||54393<=r&&r<=54419||54421<=r&&r<=54447||54449<=r&&r<=54475||54477<=r&&r<=54503||54505<=r&&r<=54531||54533<=r&&r<=54559||54561<=r&&r<=54587||54589<=r&&r<=54615||54617<=r&&r<=54643||54645<=r&&r<=54671||54673<=r&&r<=54699||54701<=r&&r<=54727||54729<=r&&r<=54755||54757<=r&&r<=54783||54785<=r&&r<=54811||54813<=r&&r<=54839||54841<=r&&r<=54867||54869<=r&&r<=54895||54897<=r&&r<=54923||54925<=r&&r<=54951||54953<=r&&r<=54979||54981<=r&&r<=55007||55009<=r&&r<=55035||55037<=r&&r<=55063||55065<=r&&r<=55091||55093<=r&&r<=55119||55121<=r&&r<=55147||55149<=r&&r<=55175||55177<=r&&r<=55203?H.LVT:8205===r?H.ZWJ:H.Other}));var er=rr.breakType,tr=rr.breakProperty,nr=rr.emojiProperty;function or(r,e){var t,n,o,i,a,u;if(!p(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(arguments.length>1){if(!L(e))throw new TypeError("invalid argument. Second argument must be an integer. Value: `"+e+"`.");i=e}else i=0;if(o=r.length,i<0&&(i+=o)<0&&(i=0),0===o||i>=o)return-1;for(t=[],n=[],a=z(r,i),t.push(tr(a)),n.push(nr(a)),u=i+1;u<o;u++)if(!D(r,u-1)&&(a=z(r,u),t.push(tr(a)),n.push(nr(a)),er(t,n)>0))return u;return-1}function ir(r){var e,t,n;if(!p(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");if(e=0,n=[],0===r.length)return n;for(t=or(r,e);-1!==t;)n.push(r.substring(e,t)),t=or(r,e=t);return n.push(r.substring(e)),n}var ar=Array.isArray?Array.isArray:function(r){return"[object Array]"===h(r)};function ur(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!ar(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}var lr=ur(E.isPrimitive),cr=ur(E.isObject),fr=ur(E);f(fr,"primitives",lr),f(fr,"objects",cr);var pr=/[-\/\\^$*+?.()|[\]{}]/g;function sr(r){var e,t;if(!p(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(pr,"\\$&"):(e=(e=r.substring(1,t)).replace(pr,"\\$&"),r=r[0]+e+r.substring(t))}var gr=/./;function dr(){return new Function("return this;")()}var vr="object"==typeof self?self:null,yr="object"==typeof window?window:null,hr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},br="object"==typeof hr?hr:null;var mr=function(r){if(arguments.length){if(!C(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return dr()}if(vr)return vr;if(yr)return yr;if(br)return br;throw new Error("unexpected error. Unable to resolve global object.")}(),wr=mr.document&&mr.document.childNodes,Er=Int8Array;function jr(){return/^\s*function\s*([^(]*)/i}var Tr=/^\s*function\s*([^(]*)/i;function Vr(r){return null!==r&&"object"==typeof r}function _r(r){var e,t,n,o;if(("Object"===(t=h(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Tr.exec(n.toString()))return e[1]}return Vr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}f(jr,"REGEXP",Tr),f(Vr,"isObjectLikeArray",ur(Vr));var Rr="function"==typeof gr||"object"==typeof Er||"function"==typeof wr?function(r){return _r(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?_r(r).toLowerCase():e};var Pr=RegExp.prototype.exec;var Sr=g();function kr(r){return"object"==typeof r&&(r instanceof RegExp||(Sr?function(r){try{return Pr.call(r),!0}catch(r){return!1}}(r):"[object RegExp]"===h(r)))}function xr(r,e,t){if(!p(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(p(e))e=sr(e),e=new RegExp(e,"g");else if(!kr(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!p(t)&&"function"!==Rr(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)}function Br(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}return function(r,e,t){var n,o,i,a,u;if(!p(r))throw new TypeError(Br("0hF3R",r));if(!G(e))throw new TypeError(Br("0hF3k",e));if(arguments.length>2){if(!(i=p(t))&&!lr(t))throw new TypeError(Br("0hFB8",t));for(i&&(t=ir(t)),n=t.length-1,o="",u=0;u<n;u++)o+=sr(t[u]),o+="|";o+=sr(t[n]),a=new RegExp("^(?:"+o+"){0,"+e+"}")}else a=new RegExp("^[ \f\n\r\t\v   - \u2028\u2029  　\ufeff]{0,"+e+"}");return xr(r,a,"")}}));
//# sourceMappingURL=browser.js.map
