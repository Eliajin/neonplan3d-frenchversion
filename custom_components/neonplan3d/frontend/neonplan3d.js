var qt=new URL(import.meta.url),Vt=qt.searchParams.get("v"),Ut=i=>new URL(`./fonts/${i}${Vt?`?v=${Vt}`:""}`,qt).href,Kt="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD";function jt(){if(typeof document>"u"||document.getElementById("fp3d-fonts"))return;let i=document.createElement("style");i.id="fp3d-fonts",i.textContent=`
@font-face{font-family:"Figtree";font-style:normal;font-display:swap;font-weight:300 900;src:url(${Ut("figtree.woff2")}) format("woff2");unicode-range:${Kt}}
@font-face{font-family:"Bricolage Grotesque";font-style:normal;font-display:swap;font-weight:200 800;src:url(${Ut("bricolage-grotesque.woff2")}) format("woff2");unicode-range:${Kt}}`,document.head.append(i)}var De=globalThis,Pe=De.ShadowRoot&&(De.ShadyCSS===void 0||De.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Xe=Symbol(),Gt=new WeakMap,me=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Xe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Pe&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Gt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Gt.set(t,e))}return e}toString(){return this.cssText}},Zt=i=>new me(typeof i=="string"?i:i+"",void 0,Xe),C=(i,...e)=>{let t=i.length===1?i[0]:e.reduce((n,r,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[o+1],i[0]);return new me(t,i,Xe)},Yt=(i,e)=>{if(Pe)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),r=De.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,i.appendChild(n)}},et=Pe?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return Zt(t)})(i):i;var{is:Hr,defineProperty:Cr,getOwnPropertyDescriptor:Lr,getOwnPropertyNames:Or,getOwnPropertySymbols:Br,getPrototypeOf:Nr}=Object,Fe=globalThis,Jt=Fe.trustedTypes,Wr=Jt?Jt.emptyScript:"",Vr=Fe.reactiveElementPolyfillSupport,ge=(i,e)=>i,tt={toAttribute(i,e){switch(e){case Boolean:i=i?Wr:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Xt=(i,e)=>!Hr(i,e),Qt={attribute:!0,type:String,converter:tt,reflect:!1,useDefault:!1,hasChanged:Xt};Symbol.metadata??=Symbol("metadata"),Fe.litPropertyMetadata??=new WeakMap;var U=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Qt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Cr(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:o}=Lr(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:r,set(s){let a=r?.call(this);o?.call(this,s),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Qt}static _$Ei(){if(this.hasOwnProperty(ge("elementProperties")))return;let e=Nr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ge("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ge("properties"))){let t=this.properties,n=[...Or(t),...Br(t)];for(let r of n)this.createProperty(r,t[r])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,r]of t)this.elementProperties.set(n,r)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let r=this._$Eu(t,n);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let r of n)t.unshift(et(r))}else e!==void 0&&t.push(et(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Yt(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&n.reflect===!0){let o=(n.converter?.toAttribute!==void 0?n.converter:tt).toAttribute(t,n.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let o=n.getPropertyOptions(r),s=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:tt;this._$Em=r;let a=s.fromAttribute(t,o.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,o){if(e!==void 0){let s=this.constructor;if(r===!1&&(o=this[e]),n??=s.getPropertyOptions(e),!((n.hasChanged??Xt)(o,t)||n.useDefault&&n.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:o},s){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),o!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[r,o]of n){let{wrapped:s}=o,a=this[r];s!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,o,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};U.elementStyles=[],U.shadowRootOptions={mode:"open"},U[ge("elementProperties")]=new Map,U[ge("finalized")]=new Map,Vr?.({ReactiveElement:U}),(Fe.reactiveElementVersions??=[]).push("2.1.2");var lt=globalThis,en=i=>i,He=lt.trustedTypes,tn=He?He.createPolicy("lit-html",{createHTML:i=>i}):void 0,ln="$lit$",q=`lit$${Math.random().toFixed(9).slice(2)}$`,dn="?"+q,Ur=`<${dn}>`,ee=document,be=()=>ee.createComment(""),ve=i=>i===null||typeof i!="object"&&typeof i!="function",dt=Array.isArray,Kr=i=>dt(i)||typeof i?.[Symbol.iterator]=="function",nt=`[ 	
\f\r]`,_e=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nn=/-->/g,rn=/>/g,Q=RegExp(`>|${nt}(?:([^\\s"'>=/]+)(${nt}*=${nt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),on=/'/g,sn=/"/g,cn=/^(?:script|style|textarea|title)$/i,ct=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),m=ct(1),so=ct(2),ao=ct(3),te=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),an=new WeakMap,X=ee.createTreeWalker(ee,129);function pn(i,e){if(!dt(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return tn!==void 0?tn.createHTML(e):e}var qr=(i,e)=>{let t=i.length-1,n=[],r,o=e===2?"<svg>":e===3?"<math>":"",s=_e;for(let a=0;a<t;a++){let l=i[a],c,d,p=-1,f=0;for(;f<l.length&&(s.lastIndex=f,d=s.exec(l),d!==null);)f=s.lastIndex,s===_e?d[1]==="!--"?s=nn:d[1]!==void 0?s=rn:d[2]!==void 0?(cn.test(d[2])&&(r=RegExp("</"+d[2],"g")),s=Q):d[3]!==void 0&&(s=Q):s===Q?d[0]===">"?(s=r??_e,p=-1):d[1]===void 0?p=-2:(p=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?Q:d[3]==='"'?sn:on):s===sn||s===on?s=Q:s===nn||s===rn?s=_e:(s=Q,r=void 0);let u=s===Q&&i[a+1].startsWith("/>")?" ":"";o+=s===_e?l+Ur:p>=0?(n.push(c),l.slice(0,p)+ln+l.slice(p)+q+u):l+q+(p===-2?a:u)}return[pn(i,o+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},we=class i{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let o=0,s=0,a=e.length-1,l=this.parts,[c,d]=qr(e,t);if(this.el=i.createElement(c,n),X.currentNode=this.el.content,t===2||t===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(r=X.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(let p of r.getAttributeNames())if(p.endsWith(ln)){let f=d[s++],u=r.getAttribute(p).split(q),h=/([.?@])?(.*)/.exec(f);l.push({type:1,index:o,name:h[2],strings:u,ctor:h[1]==="."?it:h[1]==="?"?ot:h[1]==="@"?st:ae}),r.removeAttribute(p)}else p.startsWith(q)&&(l.push({type:6,index:o}),r.removeAttribute(p));if(cn.test(r.tagName)){let p=r.textContent.split(q),f=p.length-1;if(f>0){r.textContent=He?He.emptyScript:"";for(let u=0;u<f;u++)r.append(p[u],be()),X.nextNode(),l.push({type:2,index:++o});r.append(p[f],be())}}}else if(r.nodeType===8)if(r.data===dn)l.push({type:2,index:o});else{let p=-1;for(;(p=r.data.indexOf(q,p+1))!==-1;)l.push({type:7,index:o}),p+=q.length-1}o++}}static createElement(e,t){let n=ee.createElement("template");return n.innerHTML=e,n}};function se(i,e,t=i,n){if(e===te)return e;let r=n!==void 0?t._$Co?.[n]:t._$Cl,o=ve(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),o===void 0?r=void 0:(r=new o(i),r._$AT(i,t,n)),n!==void 0?(t._$Co??=[])[n]=r:t._$Cl=r),r!==void 0&&(e=se(i,r._$AS(i,e.values),r,n)),e}var rt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??ee).importNode(t,!0);X.currentNode=r;let o=X.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new ye(o,o.nextSibling,this,e):l.type===1?c=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(c=new at(o,this,e)),this._$AV.push(c),l=n[++a]}s!==l?.index&&(o=X.nextNode(),s++)}return X.currentNode=ee,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},ye=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=se(this,e,t),ve(e)?e===_||e==null||e===""?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==te&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Kr(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==_&&ve(this._$AH)?this._$AA.nextSibling.data=e:this.T(ee.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=we.createElement(pn(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let o=new rt(r,this),s=o.u(this.options);o.p(t),this.T(s),this._$AH=o}}_$AC(e){let t=an.get(e.strings);return t===void 0&&an.set(e.strings,t=new we(e)),t}k(e){dt(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,r=0;for(let o of e)r===t.length?t.push(n=new i(this.O(be()),this.O(be()),this,this.options)):n=t[r],n._$AI(o),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=en(e).nextSibling;en(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},ae=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,o){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=_}_$AI(e,t=this,n,r){let o=this.strings,s=!1;if(o===void 0)e=se(this,e,t,0),s=!ve(e)||e!==this._$AH&&e!==te,s&&(this._$AH=e);else{let a=e,l,c;for(e=o[0],l=0;l<o.length-1;l++)c=se(this,a[n+l],t,l),c===te&&(c=this._$AH[l]),s||=!ve(c)||c!==this._$AH[l],c===_?e=_:e!==_&&(e+=(c??"")+o[l+1]),this._$AH[l]=c}s&&!r&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},it=class extends ae{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}},ot=class extends ae{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_)}},st=class extends ae{constructor(e,t,n,r,o){super(e,t,n,r,o),this.type=5}_$AI(e,t=this){if((e=se(this,e,t,0)??_)===te)return;let n=this._$AH,r=e===_&&n!==_||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==_&&(n===_||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},at=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){se(this,e)}};var jr=lt.litHtmlPolyfillSupport;jr?.(we,ye),(lt.litHtmlVersions??=[]).push("3.3.3");var un=(i,e,t)=>{let n=t?.renderBefore??e,r=n._$litPart$;if(r===void 0){let o=t?.renderBefore??null;n._$litPart$=r=new ye(e.insertBefore(be(),o),o,void 0,t??{})}return r._$AI(i),r};var pt=globalThis,H=class extends U{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=un(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return te}};H._$litElement$=!0,H.finalized=!0,pt.litElementHydrateSupport?.({LitElement:H});var Gr=pt.litElementPolyfillSupport;Gr?.({LitElement:H});(pt.litElementVersions??=[]).push("4.2.2");async function hn(i){return i.callWS({type:"neonplan3d/building/get"})}async function fn(i,e){return(await i.callWS({type:"neonplan3d/building/save",building:e})).revision}function mn(i,e){return i.connection.subscribeMessage(t=>e(t.revision),{type:"neonplan3d/building/subscribe"})}async function gn(i,e){return(await i.callWS({type:"neonplan3d/image/get",image_id:e})).data}async function _n(i){return(await i.callWS({type:"neonplan3d/packs/list"})).packs}var bn=[],ut=new Map,vn=0;function wn(i){bn=i,ut=new Map(i.flatMap(e=>e.items.map(t=>[Zr(e.id,t.id),t]))),vn++}function ht(){return bn}function Ce(){return vn}function Zr(i,e){return`pack:${i}:${e}`}function ft(i){return i.startsWith("pack:")}var Yr={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function yn(i){return L(i)?.parts.find(e=>e.screen)}function L(i){if(!ft(i))return;let e=ut.get(i);if(e)return e;let[,t,...n]=i.split(":"),r=Yr[t];return r?ut.get(`pack:${r}:${n.join(":")}`):void 0}function xn(i,e){let t=e.split("-")[0];return i.name[t]??i.name.en??Object.values(i.name)[0]??i.id}function xe(i,e){let t=L(e.type);if(e.mount_y!=null)return e.mount_y;switch(t?.mount){case"surface":return Le(i,e.x,e.z);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,i.height-e.h);default:return 0}}var Qr={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,hedge:1.2,fence:1};function Xr(i){return i.elevation>.3?0:-.2}function $n(i,e,t){let n=(i.outdoor??[]).find(r=>r.type!=="hedge"&&r.type!=="fence"&&r.type!=="pool"&&R([e,t],r.points));return Xr(i)+(n?Qr[n.type]:0)}var ei={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,tariff:null};var Sn={type:"none",pitch:35,overhang:.4},ti={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Sn}};var Mn=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]);function En(i){return["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","led_strip","stairs","parking"].includes(i.type)?!1:L(i.type)?.mount!=="ceiling"}function mt(i){return Mn.has(i)||!!L(i)?.light}var ni=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","tv_board","dishwasher","washer","dryer"]);function Le(i,e,t){let n=0;for(let r of i.furniture)!(ni.has(r.type)||L(r.type)?.surface)||!R([e,t],ri(r))||(n=Math.max(n,r.h));return n}var Jr=new Set([...Mn,"radiator","robot_vacuum","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),kn={sofa:[2.2,.9,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};function gt(i){i.energy={...ei,...i.energy??{}},i.presence=i.presence??[],i.settings={...ti,...i.settings,roof:{...Sn,...i.settings?.roof??{}}};for(let e of i.floors){e.outdoor=e.outdoor??[],e.rooms=e.rooms.map(n=>({...n,panel:n.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(n=>({...n,mount:n.mount??null,rotation:n.rotation??0})),e.furniture=e.furniture.map(n=>({...n,entity:n.entity??null,power:n.power??null}));let t=e.placements.filter(n=>n.entity_id.startsWith("light."));if(t.length){let n={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let r of t){let o=n[r.mount??"ceiling"],[s,a,l]=kn[o];e.furniture.push({id:`lamp_${r.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:o,x:r.x,z:r.z,rotation:0,w:s,d:a,h:l,variant:null,entity:r.entity_id,power:null})}e.placements=e.placements.filter(r=>!r.entity_id.startsWith("light."))}e.openings=e.openings.map(n=>({...n,hinge:n.hinge??"left",leaves:n.leaves??1,swing:n.swing??"in",style:n.style??null,cover:n.cover??null,contact:n.contact??null,contact2:n.contact2??null,tilt:n.tilt??null}))}return i}function j(i){let e=0;for(let t=0;t<i.length;t++){let[n,r]=i[t],[o,s]=i[(t+1)%i.length];e+=n*s-o*r}return e/2}function ne(i){let e=j(i);if(Math.abs(e)<1e-9){let r=i.length||1;return[i.reduce((o,s)=>o+s[0],0)/r,i.reduce((o,s)=>o+s[1],0)/r]}let t=0,n=0;for(let r=0;r<i.length;r++){let[o,s]=i[r],[a,l]=i[(r+1)%i.length],c=o*l-a*s;t+=(o+a)*c,n+=(s+l)*c}return[t/(6*e),n/(6*e)]}function ri(i){let e=i.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),r=i.w/2,o=i.d/2;return[[-r,-o],[r,-o],[r,o],[-r,o]].map(([s,a])=>[i.x+s*t-a*n,i.z+s*n+a*t])}function R(i,e){let t=!1;for(let n=0,r=e.length-1;n<e.length;r=n++){let[o,s]=e[n],[a,l]=e[r];s>i[1]!=l>i[1]&&i[0]<(a-o)*(i[1]-s)/(l-s)+o&&(t=!t)}return t}var An={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var ii=700,bt="neonplan3d.unsaved",Tn="0.29.0",In="floorplan-3d.unsaved";function oi(){try{let i=localStorage.getItem(bt)??localStorage.getItem(In);return i?JSON.parse(i):null}catch{return null}}function _t(i){try{i?localStorage.setItem(bt,JSON.stringify(i)):(localStorage.removeItem(bt),localStorage.removeItem(In))}catch{}}var le=class{building=null;error=null;saveState="idle";saveError=null;backendVersion=null;draft=null;packs=[];host;hass=null;revision=-1;ownRevisions=new Set;unsubscribe=null;saveTimer;pending=null;saving=null;connected=!1;constructor(e){this.host=e,e.addController(this)}setHass(e){let t=this.hass===null;this.hass=e,t&&this.connected&&this.start()}hostConnected(){this.connected=!0,this.hass&&this.start()}hostDisconnected(){this.connected=!1,this.flush(),this.unsubscribe?.(),this.unsubscribe=null}edit(e){this.building=e,this.pending=e,clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{this.flush()},ii),this.host.requestUpdate()}get needsRestart(){return this.saveError&&/extra keys not allowed/i.test(this.saveError)?!0:!!this.backendVersion&&Tn!=="dev"&&this.backendVersion!==Tn}restoreDraft(){let e=this.draft;this.draft=null,e&&this.edit(gt(e.building))}discardDraft(){this.draft=null,_t(null),this.host.requestUpdate()}async flush(){clearTimeout(this.saveTimer),this.saving&&await this.saving;let e=this.pending;!e||!this.hass||(this.pending=null,this.saveState="saving",this.host.requestUpdate(),this.saving=(async()=>{try{let t=await fn(this.hass,e);this.ownRevisions.add(t),this.revision=t,this.saveState=this.pending?"saving":"saved",this.saveError=null,_t(null)}catch(t){this.saveState="error",this.saveError=zn(t),_t({building:e,savedAt:Date.now()})}this.host.requestUpdate()})(),await this.saving,this.saving=null)}async start(){if(this.hass&&(await Promise.all([this.reloadPacks(),this.reload()]),!this.unsubscribe&&this.connected))try{this.unsubscribe=await mn(this.hass,e=>{this.ownRevisions.has(e)||e===this.revision||this.pending||this.saving||this.reload()})}catch{}}async reloadPacks(){if(this.hass){try{this.packs=await _n(this.hass)}catch{this.packs=[]}wn(this.packs),this.host.requestUpdate()}}async reload(){if(this.hass){try{let e=await hn(this.hass);this.building=gt(e.building),this.backendVersion=e.version??null,this.draft===null&&!this.pending&&(this.draft=oi()),this.revision=e.revision,this.error=null}catch(e){this.error=zn(e)}this.host.requestUpdate()}}};function zn(i){return i&&typeof i=="object"&&"message"in i?String(i.message):String(i)}var Rn;function Dn(){let i=new URL("./neonplan3d-editor.js?v=25d2794b689d",new URL(import.meta.url)).href;return Rn??=import(i),Rn}var si={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},ai=new Set(["temperature","humidity","power","carbon_dioxide"]),li=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),Pn=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],Hn=new Set(["light","switch","fan"]);function di(i){return i.slice(0,i.indexOf("."))}function k(i){return si[di(i)]??null}function Cn(i,e){let t=i.entities?.[e];return t?t.area_id?t.area_id:t.device_id&&i.devices?.[t.device_id]?.area_id||null:null}function ci(i,e){let t=k(e);if(!t)return!1;let n=i.entities?.[e];if(n?.hidden||n?.entity_category)return!1;let r=i.states[e];if(!r)return!1;let o=r.attributes.device_class;return t==="sensor"?!!o&&ai.has(o):t==="binary"?!!o&&li.has(o):!0}var vt=null;function Ln(i){let e=vt;if(e&&e.entities===i.entities&&e.devices===i.devices&&(e.states===i.states||(e.states=i.states,Object.keys(i.states).length===e.stateCount)))return e;let t=new Map,n=new Map;for(let r of Object.keys(i.entities??{})){let o=i.entities[r].device_id;if(o&&Mt(i,r)&&(n.get(o)??n.set(o,[]).get(o)).push(r),!ci(i,r))continue;let s=Cn(i,r);s&&(t.get(s)??t.set(s,[]).get(s)).push(r)}for(let[r,o]of t){let s=i.areas?.[r]?.name;o.sort((a,l)=>{let c=Pn.indexOf(k(a)),d=Pn.indexOf(k(l));return c-d||I(i,a,s).localeCompare(I(i,l,s))})}return vt={entities:i.entities,devices:i.devices,states:i.states,stateCount:Object.keys(i.states).length,areas:t,power:n},vt}function D(i,e){return!e||!i.entities?[]:Ln(i).areas.get(e)??[]}function wt(i,e){return i.entities?Ln(i).power.get(e)??[]:[]}function I(i,e,t){let r=i.states[e]?.attributes.friendly_name??i.entities?.[e]?.name??e;if(t&&r.length>t.length+1&&r.toLowerCase().startsWith(t.toLowerCase()+" ")){let o=r.slice(t.length+1);return o.charAt(0).toUpperCase()+o.slice(1)}return r}function z(i){return!i||i.state==="unavailable"||i.state==="unknown"}function de(i){if(!i)return!1;switch(k(i.entity_id)){case"light":case"switch":case"fan":case"binary":return i.state==="on";case"cover":return i.state==="open"||i.state==="opening";case"climate":return i.attributes.hvac_action==="heating"||i.attributes.hvac_action==="cooling";case"media":return i.state==="playing";case"lock":return i.state==="unlocked"||i.state==="open";default:return!1}}function Oe(i){if(!i||i.state!=="on")return null;let e=i.attributes,t=typeof e.brightness=="number"?Math.max(.08,e.brightness/255):1,n=e.rgb_color,r;return n&&e.color_mode!=="color_temp"&&e.color_mode!=="brightness"&&e.color_mode!=="onoff"?r=[n[0]/255,n[1]/255,n[2]/255]:typeof e.color_temp_kelvin=="number"?r=pi(e.color_temp_kelvin):r=[1,.71,.28],{color:r,level:t}}function pi(i){let e=Math.min(1,Math.max(0,(i-2200)/4300)),t=[1,.66,.26],n=[.78,.9,1];return[t[0]+(n[0]-t[0])*e,t[1]+(n[1]-t[1])*e,t[2]+(n[2]-t[2])*e]}function ce(i,e,t=null){if(i==="camera")return t==="ceiling"?Math.max(.5,e-.05):2.2;if(i==="light"&&t){if(t==="floor")return 1.95;if(t==="table")return 1.25;if(t==="wall")return 1.95}switch(i){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}var ui=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),hi=new Set(["garage","gate"]),fi=new Set(["window","opening"]);function ke(i,e,t=!1){let n=new Map;return e.length&&i.forEach((r,o)=>{let s=t&&e.length===1?e[0]:e[o];s&&n.set(r.id,s)}),n}function yt(i,e){let t=new Map;for(let n of e)for(let r of n.rooms){let o=n.openings.filter(b=>b.room_id===r.id).sort((b,M)=>b.edge-M.edge||b.offset-M.offset);if(!o.length)continue;let s=D(i,r.area_id),a=b=>i.states[b]?.attributes.device_class,l=s.filter(b=>k(b)==="cover"&&ui.has(a(b))),c=o.filter(b=>b.type==="window"),d=o.filter(b=>b.type==="door"),p=o.filter(b=>b.type==="garage"),f=ke(c,l,!0),u=ke(c,s.filter(b=>k(b)==="binary"&&fi.has(a(b)))),h=ke(d,s.filter(b=>k(b)==="binary"&&a(b)==="door")),g=ke(p,s.filter(b=>k(b)==="cover"&&hi.has(a(b)??""))),y=ke(p,s.filter(b=>k(b)==="binary"&&a(b)==="garage_door")),$=(b,M)=>b==="none"?null:b??M??null;for(let b of o){let M=b.type==="window"?f:b.type==="garage"?g:null,E=b.type==="window"?u:b.type==="garage"?y:h;t.set(b.id,{cover:$(b.cover,M?.get(b.id)),contact:b.sensor==="handle"&&b.contact==null?null:$(b.contact,E.get(b.id)),tilt:b.tilt==="none"?null:b.tilt,contact2:b.leaves===2&&b.contact2&&b.contact2!=="none"?b.contact2:null,tilt2:b.leaves===2&&b.tilt2&&b.tilt2!=="none"?b.tilt2:null,position:b.position&&b.position!=="none"?b.position:null,positionInverted:!!b.position_inverted})}}return t}var mi=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function gi(i){if(!i||z(i))return null;let e=i.attributes.window_state;for(let t of[typeof e=="string"?e:null,i.state]){if(!t)continue;let n=mi.find(([r])=>r.test(t.trim()));if(n)return n[1]}return null}var _i=.5;function re(i,e,t="window"){let n=u=>!!u&&i.states[u]?.state==="on",r=u=>!!u&&!!i.states[u]&&!z(i.states[u]),o=u=>u?gi(i.states[u]):null,s=n(e.tilt2)||o(e.tilt2)==="tilted"||o(e.contact2)==="tilted",a=o(e.contact2)==="open"&&!s?1:0;if(t==="door"){let u=o(e.contact);return{open:u===null?_i:u==="closed"?0:1,open2:o(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:null}}let l=n(e.tilt)||o(e.tilt)==="tilted"||o(e.contact)==="tilted",c=o(e.contact)==="open"&&!l?1:0,d=null,p=e.cover?i.states[e.cover]:void 0,f=bi(i,e.position);if(f!==null)d=e.positionInverted?f:1-f;else if(p&&!z(p)){let u=p.attributes.current_position;typeof u=="number"?d=1-Math.min(100,Math.max(0,u))/100:d=p.state==="closed"?1:p.state==="opening"||p.state==="closing"?.5:0}else e.cover&&(d=0);return t==="garage"?(d===null&&(d=r(e.contact)&&n(e.contact)?0:1),{open:0,open2:0,tilt:0,tilt2:0,cover:d}):{open:c,open2:a,tilt:l?1:0,tilt2:s?1:0,cover:d}}function bi(i,e){let t=e?i.states[e]:void 0;if(!t||z(t))return null;let n=Number(t.state);if(!Number.isFinite(n))return null;let r=t.attributes.unit_of_measurement==="%"||n>1;return Math.min(1,Math.max(0,r?n/100:n))}function xt(i,e){let t=new Map,n=[];for(let s of e){let a=i.entities?.[s]?.device_id??`entity:${s}`,l=t.get(a);l||(t.set(a,l=[]),n.push(a)),l.push(s)}let r=n.map(s=>{let a=t.get(s),l=a.find(c=>!i.entities?.[c]?.name)??a[0];return{primary:l,others:a.filter(c=>c!==l)}}),o=new Map(e.map((s,a)=>[s,a]));return r.sort((s,a)=>o.get(s.primary)-o.get(a.primary))}function kt(i,e){return xt(i,e).map(t=>t.primary)}var vi={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i},wi=new Set(["tv_board","tv_wall"]);function On(i,e){let t=i.states[e.entity];if(!t)return!1;let n=e.attribute?t.attributes[e.attribute]:t.state;if(n==null)return!1;let r=String(n).toLowerCase(),o=e.state.trim().toLowerCase();return e.state.trim()==="*"||r===o||o.length>=3&&r.includes(o)}function Bn(i){return wi.has(i)||!!yn(i)}function $t(i){return Bn(i)||i==="desk"||i==="fridge_smart"}function St(i,e){let t=r=>{if(!r||r==="none")return!1;let o=i.states[r]?.state;return o==="on"||o==="open"},n=new Map;for(let r of e)for(let o of r.furniture)o.type==="fridge_smart"&&n.set(o.id,{left:t(o.door_left),right:t(o.door_right)});return n}var Fn={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function Mt(i,e){return e.startsWith("sensor.")&&i.states[e]?.attributes.device_class==="power"}function yi(i,e){if(Mt(i,e))return e;let t=i.entities?.[e]?.device_id;return t?wt(i,t).find(n=>n!==e)??null:null}function $e(i,e){let t=new Map;for(let n of e){let r=new Set(n.furniture.flatMap(o=>[o.entity,o.power]).filter(o=>!!o&&o!=="none"));for(let o of n.furniture){let s=o.type in Fn,a=s?Fn[o.type]:vi[o.type];if(!a&&o.entity==null&&o.power==null)continue;let l=n.rooms.find(u=>u.points.length>=3&&R([o.x,o.z],u.points)),c=l?kt(i,D(i,l.area_id)):[],d=u=>`${u} ${I(i,u)}`,p=o.entity==="none"?null:o.entity??null;if(o.entity==null){let u=c.filter(h=>!r.has(h));if(s){let h=u.filter(g=>k(g)==="light");p=h.find(g=>a.test(d(g)))??h[0]??null}else if(o.type==="robot_vacuum"){let h=l?.area_id??null;p=Object.keys(i.entities??{}).find(g=>g.startsWith("vacuum.")&&!r.has(g)&&Cn(i,g)===h)??null}else if(o.type==="radiator"){let h=u.filter(g=>k(g)==="climate");p=h.find(g=>a.test(d(g)))??h[0]??null}else if(Bn(o.type)){let h=u.filter(g=>k(g)==="media");p=h.find(g=>i.states[g]?.attributes.device_class==="tv")??h.find(g=>a?.test(d(g)))??h[0]??null}else a&&(p=u.find(h=>["switch","media","fan"].includes(k(h)??"")&&a.test(d(h)))??null);p&&r.add(p)}let f=o.power==="none"?null:o.power??null;o.power==null&&(f=p?yi(i,p):null,!f&&a&&l&&!s&&(f=D(i,l.area_id).find(h=>Mt(i,h)&&!r.has(h)&&a.test(d(h)))??null),f&&r.add(f)),(p||f)&&t.set(o.id,{entity:p,power:f})}}return t}function Nn(i){if(!i||i.state==="off"||i.state==="standby"||z(i))return null;let e=i.attributes,t=`${e.app_name??""} ${e.source??""} ${e.app_id??""}`.toLowerCase();return t.includes("netflix")?[.9,.04,.08]:t.includes("youtube")?[1,.1,.15]:t.includes("prime")||t.includes("amazon")?[.1,.6,.95]:t.includes("disney")?[.2,.35,1]:t.includes("spotify")?[.12,.85,.4]:t.includes("zdf")||t.includes("ard")||t.includes("mediathek")?[1,.5,.1]:[.22,.88,1]}function Wn(i,e,t){let n=(c,d)=>R([c,d],t.points),r=$e(i,[e]),o=yt(i,[e]),s=[...e.placements.filter(c=>n(c.x,c.z)).map(c=>c.entity_id),...e.furniture.filter(c=>n(c.x,c.z)).flatMap(c=>[r.get(c.id)?.entity,r.get(c.id)?.power]),...e.openings.filter(c=>c.room_id===t.id).flatMap(c=>{let d=o.get(c.id);return d?[d.cover,d.contact,d.tilt,d.contact2]:[]}),...t.panel??[]].filter(c=>!!c&&!!i.states[c]),a=[...new Set(s)],l=new Set(a);return{shown:a,more:D(i,t.area_id).filter(c=>!l.has(c))}}var Vn={view:"3D",editor:"Editor",all_floors:"Alle Etagen",no_building:"Noch kein Grundriss vorhanden.",no_building_admin:"Noch kein Grundriss vorhanden. Im Editor zeichnest du deine erste Etage.",open_editor:"Editor \xF6ffnen",loading:"L\xE4dt \u2026",load_error:"Laden fehlgeschlagen",saving:"Speichert \u2026",saved:"Gespeichert",save_error:"Speichern fehlgeschlagen",save_failed_detail:"Speichern fehlgeschlagen: {error}. Deine \xC4nderungen bleiben in diesem Browser erhalten.",needs_restart:"Eine neue Version von NeonPlan 3D ist installiert, aber Home Assistant l\xE4uft noch mit {version}. Bitte Home Assistant neu starten \u2013 bis dahin kann das Speichern fehlschlagen.",needs_restart_old:"Eine neue Version von NeonPlan 3D ist installiert, aber Home Assistant l\xE4uft noch mit einer \xE4lteren. Bitte Home Assistant neu starten \u2013 bis dahin schl\xE4gt das Speichern fehl.",draft_found:"Nicht gespeicherte \xC4nderungen vom {time} gefunden.",draft_restore:"\xDCbernehmen und speichern",draft_discard:"Verwerfen",walls_auto:"W\xE4nde hoch",walls_cut:"Schnitt",reset_view:"\xDCbersicht",back:"Zur\xFCck",floor:"Etage",floors:"Etagen",add_floor:"Etage hinzuf\xFCgen",floor_from_ha:"Etagen aus Home Assistant:",floor_empty:"Leere Etage",level:"Ebene {n}",ha_floor:"Etage in Home Assistant",no_ha_floor:"\u2013 keine \u2013",area_rooms:"{n} R\xE4ume aus HA-Bereichen anlegen",area_rooms_hint:"Legt f\xFCr jeden Bereich dieser Etage einen Raum an (4 \xD7 3 m) \u2013 danach an die richtige Stelle ziehen und die Ecken anpassen",floor_name:"Name",elevation:"H\xF6he \xFCber Boden (m)",height:"Raumh\xF6he (m)",cut_height:"Schnitth\xF6he (m)",delete_floor:"Etage l\xF6schen",delete_floor_confirm:"Etage \u201E{name}\u201C mit allen R\xE4umen l\xF6schen?",move_up:"Nach oben",move_down:"Nach unten",default_floor:"Erdgeschoss",new_floor:"Etage {n}",tool_select:"Ausw\xE4hlen",tool_rect:"Rechteck",tool_polygon:"Freie Form",undo:"R\xFCckg\xE4ngig",redo:"Wiederholen",fit:"Alles zeigen",room:"Raum",rooms:"R\xE4ume",room_name:"Name",area:"Bereich",no_area:"Kein Bereich",material:"Boden",x:"X (m)",z:"Y (m)",width:"Breite (m)",depth:"Tiefe (m)",points:"Eckpunkte",delete_point:"Punkt l\xF6schen",duplicate:"Duplizieren",delete:"L\xF6schen",new_room:"Raum {n}",settings:"Einstellungen",pendant_shape:"Form",pendant_shade:"Schirm",pendant_globe:"Kugel",pendant_cone:"Kegel",pendant_drum:"Trommel",pkg_open:"Einrichten \u2026",pkg_hint:"Die M\xF6bel kommen an die W\xE4nde des Raums; Leuchten verbinden sich mit den Lichtern des Bereichs. Danach einzeln anpassen \u2013 Strg+Z nimmt alles zur\xFCck.",pkg_done:"{n} M\xF6bel gesetzt \u2013 Strg+Z nimmt es zur\xFCck.",pkg_kitchen_row:"K\xFCchenzeile",pkg_kitchen_row_desc:"Zeile an der R\xFCckwand mit K\xFChlschrank, Backofen, Sp\xFCle, Sp\xFClmaschine und Herd, Oberschrank, Esstisch mit Pendelleuchte",pkg_kitchen_l:"K\xFCche in L-Form",pkg_kitchen_l_desc:"Zeile hinten und links, Kochinsel mit Barhockern",pkg_bath:"Bad",pkg_bath_desc:"Waschtisch, WC, Badewanne, Waschmaschine, Einbauspot",pkg_bedroom:"Schlafzimmer",pkg_bedroom_desc:"Doppelbett mit zwei Nachttischen, Schrank, Kommode, Deckenleuchte",pkg_living:"Wohnzimmer",pkg_living_desc:"TV-Board, Sofa, Couchtisch, Teppich, Sessel, Regal, Stehlampe, Pflanze",pkg_dining:"Esszimmer",pkg_dining_desc:"Esstisch mit vier St\xFChlen, Sideboard, Pendelleuchte",pkg_office:"B\xFCro",pkg_office_desc:"Schreibtisch mit B\xFCrostuhl, zwei Regale, Deckenleuchte",pkg_kids:"Kinderzimmer",pkg_kids_desc:"Einzelbett, Schreibtisch, Regal, Teppich",pkg_hall:"Flur",pkg_hall_desc:"Garderobe, zwei Einbauspots",spots_place:"Spots setzen",spots_type:"Leuchte",spots_cols:"Spalten (links\u2013rechts)",spots_rows:"Reihen (vorne\u2013hinten)",spots_add:"{n} Leuchten setzen",spots_placed:"{n} Leuchten gesetzt.",spots_hint:"Alle Leuchten folgen dem gew\xE4hlten Licht (z. B. Spots an einem Dimmer). Einzeln verschieben und ein anderes Licht w\xE4hlen geht danach wie bei jedem M\xF6bel.",cancel:"Abbrechen",backup:"Sicherung",backup_history:"Wiederherstellungspunkte",backup_none:"Noch keine. Beim Bearbeiten entsteht h\xF6chstens alle 10 Minuten ein Punkt.",backup_summary:"{rooms} R\xE4ume, {furniture} M\xF6bel",backup_restore:"Wiederherstellen",backup_restore_confirm:"Den Stand vom {time} wiederherstellen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_restored:"Wiederhergestellt.",backup_file:"Datei",backup_export:"Exportieren",backup_export_share:"Als Vorlage teilen",backup_export_share_hint:"Ohne Bereiche, Ger\xE4te, Sensoren und Bilder \u2013 zum Weitergeben an andere.",backup_import:"Importieren \u2026",backup_import_confirm:"Den ganzen Grundriss durch die Datei ersetzen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_import_error:"Die Datei ist kein Floorplan-3D-Plan ({error}).",backup_imported:"Importiert.",backup_hint:"Hintergrundbilder sind nicht in der Datei enthalten.",wall_exterior:"Au\xDFenwand (m)",wall_interior:"Innenwand (m)",grid:"Raster (m)",background:"Vorlage (Grundriss-Bild)",background_upload:"Bild w\xE4hlen \u2026",background_width:"Breite im Plan (m)",background_opacity:"Deckkraft",background_remove:"Vorlage entfernen",hint_select:"Raum antippen zum Ausw\xE4hlen \xB7 Ecken ziehen \xB7 \u201E+\u201C auf einer Kante f\xFCgt einen Punkt ein \xB7 Entf l\xF6scht \xB7 Strg+Z",hint_rect:"Ziehen, um ein Rechteck zu zeichnen",hint_polygon:"Punkte setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",hint_empty:"Lege zuerst eine Etage an.",area_m2:"{a} m\xB2",overlap_warning:"R\xE4ume \xFCberlappen sich \u2013 die W\xE4nde dort sind unvollst\xE4ndig.",read_only:"Nur Administratoren k\xF6nnen den Grundriss bearbeiten.",mat_wood:"Holz",mat_oak:"Eiche",mat_tiles:"Fliesen",mat_carpet:"Teppich",mat_stone:"Stein",mat_concrete:"Beton",card_name:"NeonPlan 3D",card_description:"Deine Wohnung in 3D (Neon).",stats:"{calls} Draw-Calls \xB7 {tris} Dreiecke",stats_fps:"{fps} B/s (langsamstes Bild {ms} ms)",stats_idle:"Ruhe (0 B/s)",stats_busy_camera:"Kamera",stats_busy_floors:"Etagen",stats_busy_openings:"T\xFCren/Fenster",stats_busy_flash:"Blitz",stats_busy_roof:"Dach",stats_busy_flow:"Stromfluss",stats_busy_effect:"Farbeffekt",stats_busy_robot:"Roboter",stats_busy_orbit:"Kamerafahrt",stats_busy_tint:"Raumfarbe",stats_low:"Stufe Tablet, Pixeldichte {r}",stats_full:"volle Stufe, Pixeldichte {r}",floors_apart:"Auseinander",floors_stacked:"Gestapelt",floor_rooms_one:"1 Raum",floor_rooms:"{n} R\xE4ume",quality:"Qualit\xE4t",quality_auto:"Auto",quality_low:"Tablet",quality_high:"Hoch",state_on:"An",state_off:"Aus",state_open:"Offen",state_closed:"Zu",state_opening:"\xD6ffnet",state_closing:"Schlie\xDFt",state_playing:"Spielt",state_paused:"Pause",state_idle:"Bereit",state_locked:"Verriegelt",state_unlocked:"Entriegelt",state_detected:"Erkannt",state_clear:"Frei",state_unavailable:"Nicht verf\xFCgbar",state_heat:"Heizen",state_cool:"K\xFChlen",state_auto:"Automatik",state_heat_cool:"Heizen/K\xFChlen",state_dry:"Entfeuchten",state_fan_only:"L\xFCften",devices:"Ger\xE4te",devices_none_area:"Verkn\xFCpfe den Raum mit einem Bereich, dann erscheinen dessen Ger\xE4te hier.",devices_none:"Im Bereich gibt es keine passenden Ger\xE4te.",devices_place_all:"Alle automatisch platzieren",devices_place:"Platzieren",devices_remove:"Entfernen",devices_hint:"Platzierte Ger\xE4te erscheinen in 3D. Im Plan lassen sie sich verschieben.",panel_lights:"Licht",panel_covers:"Rolll\xE4den",panel_climate:"Heizung",panel_media:"Medien",panel_switches:"Schalter",panel_sensors:"Sensoren",panel_scenes:"Szenen & Skripte",panel_cameras:"Kameras",camera_live:"Livebild \xF6ffnen",through_camera:"Durch die Kamera schauen",through_blend:"\xDCberblendung",through_back:"Zur\xFCck zur Ansicht",camera_mount:"Montage",camera_mount_wall:"Wand (Blickrichtung = Drehung)",camera_mount_ceiling:"Decke (Dome, rundum)",camera_fov:"Sichtwinkel (\xB0)",camera_reach:"Reichweite (m)",camera_fov_short:"Winkel \xB0",camera_reach_short:"Reichweite m",camera_tilt:"Neigung nach unten (\xB0)",camera_tilt_short:"Neigung \xB0",camera_aim_hint:"Im Plan zeigt der Kegel, wohin die Kamera schaut. Der Griff an seiner Spitze dreht die Kamera und setzt die Reichweite.",state_recording:"Nimmt auf",state_streaming:"Streamt",panel_all_off:"Alle aus",panel_no_area:"Dieser Raum ist mit keinem Bereich verkn\xFCpft. Im Editor kannst du ihn verkn\xFCpfen.",panel_empty:"F\xFCr diesen Raum sind keine Ger\xE4te im Grundriss. Im Editor lassen sich Ger\xE4te platzieren oder mit \u2606 f\xFCrs Raumfenster ausw\xE4hlen.",close:"Schlie\xDFen",brightness:"Helligkeit",color_temp:"Farbtemperatur",color:"Farbe",position:"Position",cover_open:"Auf",cover_stop:"Stopp",cover_close:"Zu",target_temp:"Soll",current_temp:"Ist",temp_down:"K\xE4lter",temp_up:"W\xE4rmer",volume:"Lautst\xE4rke",play_pause:"Wiedergabe/Pause",previous:"Zur\xFCck",next:"Weiter",run:"Ausf\xFChren",details:"Details",hold_hint:"Antippen schaltet \xB7 lange dr\xFCcken \xF6ffnet Details",tool_opening:"T\xFCr & Fenster",tool_furniture:"M\xF6bel",qm_off:"Aus",find:"Suchen",find_placeholder:"Wo ist \u2026? Ger\xE4t oder Raum",find_none:"Nichts gefunden",swipe_off:"Aus",panel_pin:"Im Raumfenster zeigen",panel_unpin:"Nicht im Raumfenster zeigen",devices_panel_hint:"Das Raumfenster zeigt die Ger\xE4te im Grundriss. \u2606 nimmt ein Ger\xE4t zus\xE4tzlich ins Raumfenster auf, ohne es zu platzieren.",card_section_view:"Ansicht",card_size:"Gr\xF6\xDFe",card_size_fixed:"Feste H\xF6he",card_size_fill:"Bildschirm f\xFCllen",card_fill_hint:"Am besten in einer Dashboard-Ansicht vom Typ \u201EPanel (1 Karte)\u201C \u2013 dann nimmt die Karte den ganzen Platz ein.",card_controls:"Schalter in der Karte",card_floor_thumbs:"Etagen als Mini-Ansichten",card_floor_thumbs_hint:"Kleine Bilder der Etagen am Rand \u2013 antippen wechselt die Etage",card_floor_thumbs_hint_start:"Die gew\xE4hlte Etage ist dann die Start-Etage \u2013 mit den Bildern am Rand wechselt man zu den anderen",card_room_names:"Raumnamen anzeigen",card_section_kiosk:"Wandtablet (Kiosk)",card_idle_return:"Zur\xFCck zur Startansicht nach",card_idle_off:"Nie",card_idle_min:"{n} min ohne Bedienung",card_idle_hint:"Nach der Wartezeit schlie\xDFt die Karte den Raum und zeigt wieder die Startansicht.",card_night:"Nachtdimmung",card_night_off:"Aus",card_night_sun:"Nach Sonnenstand",card_night_time:"Zeitraum",card_night_range:"Zeitraum (z. B. 22:00-06:00)",card_idle_orbit:"Kamerafahrt als Bildschirmschoner",card_idle_orbit_hint:"Nach der R\xFCckkehr dreht sich die Ansicht langsam, bis jemand das Tablet ber\xFChrt",card_alerts:"Warnungen anzeigen",card_alerts_hint:"Rauch, Gas, CO, Wasser, Alarmanlage und offene Fenster bei Regen: der Raum pulsiert, oben erscheint ein Hinweis",card_alert_jump:"Bei neuer Warnung zum Raum springen",card_alert_jump_hint:"Die Ansicht wechselt selbst zur Etage und zum Raum der Warnung",card_scenes:"Szenen-Kn\xF6pfe im Raum",card_scenes_hint:"Szenen und Skripte des Bereichs als Kn\xF6pfe unter der 3D-Ansicht, wenn ein Raum gew\xE4hlt ist",card_motion_trail:"Bewegungsspur",card_motion_trail_hint:"Wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit (Bewegungs-, Pr\xE4senz- und Kamerasensoren)",trail_short:"Spur",trail_hint:"Bewegungsspur: wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit",alerts:"Warnungen",alert_smoke:"Rauch: {name}",alert_gas:"Gas: {name}",alert_co:"Kohlenmonoxid: {name}",alert_water:"Wasser: {name}",alert_alarm:"Alarm ausgel\xF6st",alert_alarm_pending:"Alarm wird ausgel\xF6st",alert_window_rain:"Fenster offen bei Regen: {name}",room_names_short:"Raumnamen",floor_stack_short_dim:"Abgedunkelt",floor_stack_short_stacked:"Gestapelt",floor_stack_short_single:"Einzeln",size_short_w:"B",size_short_d:"T",size_short_h:"H",import_error_not_json:"Die Datei ist kein JSON.",import_error_not_plan:"Die Datei ist kein Floorplan-3D-Plan.",export_name_template:"vorlage",export_name_backup:"sicherung",card_floor_stack:"Etagen darunter",floor_stack_dim:"Abgedunkelt",floor_stack_stacked:"Gestapelt (ganzes Haus bis hier)",floor_stack_single:"Ausgeblendet (nur diese Etage)",card_control_walls:"W\xE4nde hoch/Schnitt",card_control_floors:"Etagen auseinander",card_control_temperature:"Temperatur",card_control_humidity:"Feuchte",card_control_co2:"CO\u2082",card_controls_hint:"W\xE4nde hoch/Schnitt, Etagen auseinander und Temperatur, Feuchte, CO\u2082 zum Umschalten",card_fullscreen_button:"Vollbild-Taste",card_fullscreen_button_hint:"Blendet das Dashboard drumherum aus (z. B. am Wandtablet)",fullscreen:"Vollbild",fullscreen_exit:"Vollbild beenden",card_section_show:"Anzeigen",card_floor:"Etage",card_floor_house:"Ganzes Haus (Etage antippen zum \xD6ffnen)",card_height:"H\xF6he (Pixel)",card_walls:"W\xE4nde",card_quality_hint:"\u201ETablet\u201C ist die sparsamste Stufe \u2013 ideal f\xFCr Fire-Tablets und andere Wandtablets.",card_flows_switch:"Schalter in der Karte",card_flows_on:"Immer an",card_flows_off:"Immer aus",card_energy:"Energiewerte oben anzeigen",card_room_panel:"Raum-Details beim Antippen",card_room_panel_hint:"Lichter, Rolll\xE4den und Kameras des Raums in einem Seitenfenster",card_explode:"Etagen in der Hausansicht auseinanderziehen",card_stats:"Leistungsanzeige (Bilder pro Sekunde)",card_stats_hint:"Zum Pr\xFCfen, wie fl\xFCssig die Karte auf dem Ger\xE4t l\xE4uft",packs:"M\xF6bel-Packs",packs_hint:"Nur unterschriebene Packs des Herausgebers lassen sich importieren.",pack_import:"M\xF6bel-Packs importieren \u2026",pack_imported:"\u201E{name}\u201C von {publisher} importiert \u2013 {n} M\xF6bel",packs_imported_n:"{n} von {total} Packs importiert",pack_by:"von {publisher} \xB7 {n} M\xF6bel",pack_licensed:"Lizenziert f\xFCr {name}",pack_remove:"Entfernen",pack_remove_confirm:"Pack \u201E{name}\u201C entfernen? M\xF6bel daraus bleiben als einfache K\xE4sten im Plan.",pack_missing_item:"M\xF6bel aus entferntem Pack",pack_error_bad_signature:"Das Pack wurde ver\xE4ndert oder seine Unterschrift ist ung\xFCltig.",pack_error_unknown_publisher:"Dieses Pack stammt nicht von einem bekannten Herausgeber.",pack_error_unsigned:"Das Pack ist nicht unterschrieben.",pack_error_not_a_pack:"Das ist keine M\xF6bel-Pack-Datei.",pack_error_invalid_content:"Das Pack enth\xE4lt ung\xFCltige M\xF6bel: {detail}",pack_error_too_large:"Die Datei ist zu gro\xDF.",pack_error_other:"Import fehlgeschlagen: {detail}",back_to_room:"Zur\xFCck zu {room}",back_to_floor:"Zur\xFCck zur Etage",hint_furniture:"Raum antippen, dann rechts ein M\xF6belst\xFCck w\xE4hlen \xB7 M\xF6bel ziehen, an den Ecken die Gr\xF6\xDFe \xE4ndern",furniture_into:"Neue M\xF6bel kommen in die Mitte von \u201E{room}\u201C.",furniture_pick_room:"Tipp: Erst einen Raum antippen \u2013 dann landen neue M\xF6bel in seiner Mitte.",flows:"Stromfluss",flows_hint:"Leuchtende Leitungen vom Z\xE4hler zu den Verbrauchern ein- oder ausblenden",flow_on:"an",flow_off:"aus",hint_opening:"Auf eine Wand tippen, um eine T\xFCr oder ein Fenster einzusetzen \u2013 die Art w\xE4hlst du danach rechts",preset_door:"T\xFCr",preset_door_double:"Doppelt\xFCr",preset_window:"Fenster",preset_window_double:"Fenster 2-fl\xFCgelig",preset_terrace:"Terrassent\xFCr",preset_terrace_double:"Terrassent\xFCr 2-fl\xFCgelig",preset_garage:"Garagentor",preset_front:"Haust\xFCr",opening_style:"Stil",style_auto:"Automatisch ({style})",style_interior:"Zimmert\xFCr",style_front:"Haust\xFCr",style_front_glass:"Haust\xFCr mit Glasausschnitt",style_sidelight:"Haust\xFCr mit Seitenteil",style_sidelights:"Haust\xFCr mit 2 Seitenteilen",style_glass:"Glast\xFCr",style_sliding:"Schiebet\xFCr",style_standard:"Standard",style_bars:"Mit Sprossen",flip_hinge:"Anschlag wechseln",flip_main_leaf:"Hauptfl\xFCgel wechseln",flip_hinge_hint:"Scharniere auf die andere Seite",flip_swing:"\xD6ffnungsrichtung umdrehen",flip_swing_hint:"Die T\xFCr schwenkt in den Raum oder zur anderen Seite",main_leaf:"Hauptfl\xFCgel (vom Raum aus)",contact_main:"Kontakt Hauptfl\xFCgel",contact_second:"Kontakt zweiter Fl\xFCgel",tool_outdoor:"Au\xDFen",tool_measure:"Nach Ma\xDF",hint_measure:"Startpunkt antippen, dann rechts die Wandl\xE4ngen mit Richtung eingeben",measure:"Raum nach Ma\xDF",measure_start:"Tippe im Plan auf den Startpunkt, z. B. eine Raumecke.",measure_from:"Start bei {x} / {z} m \u2013 antippen verschiebt den Start.",measure_length:"L\xE4nge der n\xE4chsten Wand (m)",measure_close:"Raum schlie\xDFen",measure_undo:"Letzte Wand weg",measure_gap:"L\xFCcke zum Start: {gap} m (wird beim Schlie\xDFen verbunden)",measure_hint:"Tipp: L\xE4nge eintippen und Pfeiltaste dr\xFCcken. Mit gemessenen Innenma\xDFen danach \u201EL\xFCcken schlie\xDFen\u201C.",rect_by_size:"Rechteck nach Ma\xDF",rect_add:"Rechteck anlegen",dir_up:"Nach oben",dir_down:"Nach unten",dir_left:"Nach links",dir_right:"Nach rechts",hint_outdoor:"Ziehen, um eine Au\xDFenfl\xE4che (Rasen, Terrasse, Pool \u2026) aufzuziehen",outdoor:"Au\xDFenfl\xE4che",outdoor_type:"Art",outdoor_hint:"Au\xDFenleuchten (Wegleuchte, Garten-Spot, Wandleuchte au\xDFen) beleuchten alle Au\xDFenfl\xE4chen und die Fassade.",out_lawn:"Rasen",out_terrace:"Terrasse",out_path:"Weg",out_driveway:"Einfahrt",out_pool:"Pool",out_bed:"Beet",out_hedge:"Hecke",out_fence:"Zaun",north:"Nordrichtung (\xB0 im Uhrzeigersinn von oben)",north_hint:"Die Nordrichtung braucht der Sonnenstand (Licht durch die Fenster).",roof:"Dach",roof_none:"Kein Dach",roof_flat:"Flachdach",roof_gable:"Satteldach",roof_pitch:"Dachneigung (\xB0)",roof_overhang:"Dach\xFCberstand (m)",device:"Ger\xE4t",lamp_mount:"Lampe",lamp_ceiling:"Deckenleuchte",lamp_floor:"Stehlampe",lamp_table:"Tischlampe",lamp_wall:"Wandleuchte",marker_height:"H\xF6he des Symbols (m)",height_auto:"H\xF6he automatisch",device_centre:"In Raummitte",lights_spread:"Deckenlampen gleichm\xE4\xDFig verteilen",devices_search:"Ger\xE4te suchen \u2026",devices_more:"+{n} weitere",devices_less:"weniger",panel_more:"Weitere Ger\xE4te des Bereichs ({n})",panel_less:"Weniger anzeigen",gaps_close:"L\xFCcken schlie\xDFen",gaps_hint:"R\xE4ume mit bis zu 60 cm Abstand an einer gemeinsamen Wand zusammenf\xFChren; der Abstand wird die Innenwandst\xE4rke.",gaps_none:"Keine L\xFCcken zwischen R\xE4umen gefunden.",gaps_closed:"{n} Stellen geschlossen.",gaps_closed_wall:"{n} Stellen geschlossen, Innenwand jetzt {t} m.",fps:"FPS",fps_title:"Leistungsanzeige (Bilder pro Sekunde)",hint_garage:"Auf eine Wand tippen, um ein Garagentor einzusetzen",opening_garage:"Garagentor",garage_hint:"Das Tor folgt einem Garagen-Cover (Position oder offen/zu) oder einem Garagentor-Kontakt aus dem Bereich des Raums.",door_hint:"Mit T\xFCrkontakt schwenkt das T\xFCrblatt auf, ohne Sensor steht es halb offen.",hint_door:"Auf eine Wand tippen, um eine T\xFCr einzusetzen",hint_window:"Auf eine Wand tippen, um ein Fenster einzusetzen",opening_door:"T\xFCr",opening_window:"Fenster",opening_type:"Art",opening_position:"Mitte ab Ecke (m)",sill:"Br\xFCstung (m)",opening_height:"H\xF6he (m)",hinge:"Anschlag (vom Raum aus)",hinge_left:"Links",hinge_right:"Rechts",cover_entity:"Rollladen",cover_position_entity:"Positions-Sensor (live)",cover_position_invert:"Sensor z\xE4hlt umgekehrt (0 = offen)",contact_entity:"Kontakt",sensor_kind:"Sensor-Art",sensor_kind_contact:"Fensterkontakt (offen/zu)",sensor_kind_handle:"Griff-Sensor (offen/gekippt/zu)",sensor_kind_contact_tilt:"Kontakt + Kipp-Sensor",handle_entity:"Griff-Sensor",handle_main:"Griff-Sensor Hauptfl\xFCgel",leaf_main:"Hauptfl\xFCgel",leaf_second:"Zweiter Fl\xFCgel",tilt_entity:"Kipp-Sensor",entity_auto:"Automatisch ({name})",entity_auto_none:"Automatisch (keiner gefunden)",entity_none:"Keiner",entity_search:"Tippen zum Suchen \u2026",opening_hint:"Sensor-Art: Fensterkontakt (meldet offen/zu), Griff-Sensor (meldet offen, gekippt und zu \u2013 z. B. Homematic-Fenstergriff) oder Kontakt + Kipp-Sensor (ein zweiter Sensor, der nur \u201Egekippt\u201C meldet). Automatisch nimmt Rolll\xE4den und Kontakte aus dem Bereich des Raums. Positions-Sensor: eine Entit\xE4t, die die Rollladen-Position auch w\xE4hrend der Fahrt meldet (z. B. Homematic \u201ELevel\u201C, 0\u2013100 % oder 0\u20131, offen = hoch) \u2013 dann f\xE4hrt der Rollladen in 3D live.",furniture:"M\xF6bel",furniture_add:"M\xF6bel hinzuf\xFCgen",furniture_search:"M\xF6bel suchen \u2026",furniture_type:"M\xF6belst\xFCck",rotation:"Drehung (\xB0)",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"H\xF6he (m)",furn_sofa:"Sofa",furn_armchair:"Sessel",furn_table:"Tisch",furn_chair:"Stuhl",furn_bed:"Bett",furn_nightstand:"Nachttisch",furn_wardrobe:"Schrank",furn_shelf:"Regal",furn_kitchen:"K\xFCchenzeile",furn_fridge:"K\xFChlschrank",furn_fridge_smart:"Smart-K\xFChlschrank (Side-by-Side)",furn_door_left:"T\xFCrsensor links (Gefrierseite)",furn_door_right:"T\xFCrsensor rechts (K\xFChlseite)",fridge_hint:"Meldet ein T\xFCrsensor \u201Eoffen\u201C, schwingt die T\xFCr in 3D auf. Der Bildschirm auf der rechten T\xFCr zeigt Bilder nach Regeln wie ein Fernseher \u2013 solange die T\xFCr zu ist.",furn_stove:"Herd",furn_sink:"Sp\xFCle",furn_bathtub:"Badewanne",furn_shower:"Dusche",furn_wc:"WC",furn_washbasin:"Waschtisch",furn_desk:"Schreibtisch",furn_tv_board:"TV-Board",furn_plant:"Pflanze",furn_rug:"Teppich",furn_stairs:"Treppe",furn_parking:"Stellplatz",furn_group_vehicles:"Stellpl\xE4tze",parking_entity:"Sensor \u201EAuto anwesend\u201C",parking_vehicle:"Fahrzeug",parking_vehicle_none:"Keins",parking_no_pack:"Kein Fahrzeug-Pack importiert \u2013 Fahrzeuge kommen aus dem Pack \u201EFahrzeuge\u201C (M\xF6bel \u2192 M\xF6bel-Pack importieren).",parking_scale:"Gr\xF6\xDFe (%)",parking_type_entity:"Fahrzeugtyp-Sensor (optional)",parking_types:"Zustand \u2192 Fahrzeug",parking_type_state:"Zustand (z. B. van)",parking_add_type:"+ Zuordnung",parking_hint:"Ohne Sensor steht das Fahrzeug immer da. Mit Sensor erscheint es, sobald der Sensor \u201Ean\u201C, \u201Ehome\u201C oder \u201Eanwesend\u201C meldet. Ein Fahrzeugtyp-Sensor (z. B. aus einer KI-Kameraauswertung) w\xE4hlt das Modell: Passt sein Zustand zu einer Zuordnung \u2013 auch als Wort im Text \u2013, wird dieses Fahrzeug gezeigt, sonst das Standard-Fahrzeug.",parking_too_tall:"Das Fahrzeug ({car} m) ist h\xF6her als der Raum ({room} m).",furn_lamp_ceiling:"Deckenleuchte",furn_lamp_downlight:"Einbauspot",furn_lamp_spot:"Aufbau-Spot",furn_lamp_panel:"LED-Panel",furn_lamp_uplight:"Deckenfluter",furn_lamp_bollard:"Wegleuchte",furn_lamp_garden:"Garten-Spot",furn_radiator:"Heizk\xF6rper",furn_robot_vacuum:"Saugroboter",furn_entity_vacuum:"Saugroboter",robot_hint:"Saugt der Roboter in Home Assistant, f\xE4hrt er in 3D in Bahnen durch den Raum seiner Station (die Fahrspur ist simuliert \u2013 Home Assistant kennt meist nicht die echte Position). Zur\xFCck f\xE4hrt er zur Station.",furn_lamp_pendant:"Pendelleuchte",furn_lamp_floor:"Stehlampe",furn_lamp_table:"Tischlampe",furn_lamp_wall:"Wandleuchte",furn_led_strip:"LED-Streifen",furn_group_lights:"Leuchten",furn_entity_light:"Licht oder Schalter",furn_entity_climate:"Heizung (Thermostat)",lamp_hint:"Antippen in 3D schaltet die Leuchte, lange dr\xFCcken \xF6ffnet das Schnellmen\xFC. Auch Schalter (z. B. ein Relais f\xFCrs Deckenlicht) sind m\xF6glich \u2013 die Leuchte strahlt dann, solange er an ist. Tischlampen stehen automatisch auf dem M\xF6bel darunter.",lamp_hint_pendant:"H\xF6he = Abh\xE4ngung unter der Decke. Antippen in 3D schaltet, lange dr\xFCcken \xF6ffnet die Details.",theme:"Look",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Tag",furnish:"Einrichten",split_3d:"3D daneben",mount_height:"H\xF6he \xFCber Boden (m)",side_open:"Seitenleiste \xF6ffnen",side_close:"Schlie\xDFen",side_details:"Details zur Auswahl",side_pin:"Anheften",side_pinned:"Angeheftet",side_pin_hint:"Angeheftet bleibt die Seitenleiste immer offen; sonst klappt sie neben der 3D-Ansicht zu, solange nichts ausgew\xE4hlt ist",split_3d_hint:"Live-3D neben dem Plan: M\xF6bel und Ger\xE4te dort ziehen und drehen \u2013 mit R\xFCckg\xE4ngig, gespeichert wird mit dem Plan",size_w:"Breite (m)",size_d:"Tiefe (m)",size_h:"H\xF6he (m)",furnish_hint:"M\xF6bel, Leuchten und Ger\xE4te mit dem Finger ziehen \xB7 M\xF6bel rasten an W\xE4nden ein \xB7 antippen zum Drehen, f\xFCr H\xF6he und Montage",done:"Fertig",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Feuchte",heat_short_co2:"CO\u2082",heat_temperature:"Temperatur",heat_humidity:"Luftfeuchtigkeit",heat_co2:"CO\u2082",heat_none_found:"Keine passenden Sensoren in den Bereichen der R\xE4ume.",markers:"Symbole",markers_none:"Keine",markers_important:"Wichtige",markers_all:"Alle",furn_stool:"Hocker",furn_coffee_table:"Couchtisch",furn_tv_wall:"Fernseher (Wand)",furn_sideboard:"Sideboard",furn_table_round:"Runder Tisch",furn_bench:"Sitzbank",furn_corner_bench:"Eckbank",furn_bar_stool:"Barhocker",furn_kitchen_wall:"Oberschrank",furn_kitchen_tall:"Hochschrank mit Backofen",furn_island:"Kochinsel",furn_dishwasher:"Sp\xFClmaschine",furn_bunk_bed:"Etagenbett",furn_dresser:"Kommode",furn_washer:"Waschmaschine",furn_dryer:"Trockner",furn_office_chair:"B\xFCrostuhl",furn_tall_cabinet:"Hochschrank",furn_coat_rack:"Garderobe",furn_group_living:"Wohnen",furn_group_dining:"Essen",furn_group_kitchen:"K\xFCche",furn_group_sleeping:"Schlafen",furn_group_bath:"Bad & Hauswirtschaft",furn_group_work:"Arbeiten & Sonstiges",furn_entity:"Ger\xE4t (Schalter, Steckdose \u2026)",furn_entity_tv:"Fernseher (Media-Player)",furn_power:"Leistungssensor (W)",furn_links_hint:"Mit Leistungssensor zeigt das M\xF6bel seine Watt und bekommt eine Energie-Leitung.",screen_pictures:"Bilder nach Zustand",screen_pictures_hint:"Verglichen wird der Zustand oder ein Attribut der Entit\xE4t (z. B. app_name eines Fernsehers). Der Wert passt, wenn er gleich ist oder im Text vorkommt (\u201Eyoutube\u201C passt zu \u201Ecom.google.android.youtube.tv\u201C); \u201E*\u201C = immer. Die erste passende Regel gewinnt. Bilder werden auf 512 px verkleinert gespeichert; alternativ eine Bild-URL oder eine Kamera \u2013 deren Livebild wird alle 5 Sekunden erneuert, solange es gezeigt wird. Ohne passende Regel zeigt der Bildschirm den Media Player.",picture_state:"ist oder enth\xE4lt \u2026 (z. B. netflix)",picture_state_of:"Zustand",picture_attribute:"Zustand oder Attribut vergleichen",picture_pick:"Bild w\xE4hlen \u2026",picture_change:"Bild \xE4ndern \u2026",picture_url:"oder Bild-URL",picture_add_value:"+ Wert",picture_reuse:"Vorhandenes Bild verwenden",picture_camera:"oder Kamera (Livebild) \u2026",picture_camera_none:"Keine Kamera",screen_bg:"Bildschirm hinter dem Bild",screen_bg_black:"Dunkel",screen_bg_white:"Wei\xDF",picture_add_entity:"+ Weitere Entit\xE4t",picture_current:"aktuell: {value}",picture_matches:"\u2713 passt gerade \u2013 dieses Bild wird gezeigt",furn_links_hint_tv:"Der Bildschirm leuchtet, solange der Fernseher an ist, in der Farbe der App (Netflix, YouTube \u2026); das Schild zeigt App oder Titel.",stairs_hint:"Die Treppe steigt nach hinten an (weg von der markierten Vorderkante) und \xF6ffnet die Decke der Etage dar\xFCber.",floor_lights:"{n} Licht an",floor_open:"{n} offen",floor_persons:"{n} Pers.",energy_consumption:"Verbrauch",energy_grid_import:"Netzbezug",energy_grid_export:"Einspeisung",energy_solar:"Solar",energy_battery:"Akku",energy_tariff:"Tarif",energy:"Energie",energy_meter:"Z\xE4hlerplatz",energy_meter_set:"Z\xE4hlerplatz setzen",energy_meter_remove:"Z\xE4hlerplatz entfernen",energy_meter_hint:"Tippe im Plan auf die Stelle des Z\xE4hlers bzw. Hausanschlusses.",energy_grid:"Netz (W, + = Bezug)",energy_solar_sensor:"Solar-Erzeugung (W)",energy_battery_sensor:"Akku-Leistung (W, + = Entladen)",energy_battery_soc:"Akku-Ladestand (%)",energy_tariff_sensor:"Tarif (z. B. \u20AC/kWh)",energy_invert:"Vorzeichen umkehren",energy_hint:"Verbraucher sind platzierte Ger\xE4te mit Leistungssensor (W) \u2013 der Sensor selbst oder einer vom selben Ger\xE4t.",tool_meter:"Z\xE4hler",hint_meter:"Auf die Stelle des Z\xE4hlers tippen",presence:"Anwesenheit",presence_hint:"Raumsensor je Person (z. B. ESPresense, Bermuda): sein Zustand nennt den Raum oder Bereich.",presence_sensor:"Raumsensor",no_persons:"In Home Assistant gibt es keine Personen."},xi={view:"3D",editor:"Editor",all_floors:"All floors",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",save_failed_detail:"Saving failed: {error}. Your changes are kept in this browser.",needs_restart:"A new version of NeonPlan 3D is installed, but Home Assistant still runs {version}. Please restart Home Assistant \u2013 until then saving may fail.",needs_restart_old:"A new version of NeonPlan 3D is installed, but Home Assistant still runs an older one. Please restart Home Assistant \u2013 until then saving fails.",draft_found:"Unsaved changes from {time} found.",draft_restore:"Restore and save",draft_discard:"Discard",walls_auto:"Tall walls",walls_cut:"Cut",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",add_floor:"Add floor",floor_from_ha:"Floors from Home Assistant:",floor_empty:"Empty floor",level:"Level {n}",ha_floor:"Floor in Home Assistant",no_ha_floor:"\u2013 none \u2013",area_rooms:"Add {n} rooms from HA areas",area_rooms_hint:"Adds a room (4 \xD7 3 m) for each area of this floor \u2013 then drag it into place and adjust the corners",floor_name:"Name",elevation:"Elevation (m)",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",default_floor:"Ground floor",new_floor:"Floor {n}",tool_select:"Select",tool_rect:"Rectangle",tool_polygon:"Free shape",undo:"Undo",redo:"Redo",fit:"Show all",room:"Room",rooms:"Rooms",room_name:"Name",area:"Area",no_area:"No area",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",delete_point:"Delete corner",duplicate:"Duplicate",delete:"Delete",new_room:"Room {n}",settings:"Settings",pendant_shape:"Shape",pendant_shade:"Shade",pendant_globe:"Globe",pendant_cone:"Cone",pendant_drum:"Drum",pkg_open:"Furnish \u2026",pkg_hint:"Furniture goes against the room's walls; lamps link to the area's lights. Adjust single items afterwards \u2013 Ctrl+Z takes it all back.",pkg_done:"{n} items placed \u2013 Ctrl+Z takes it back.",pkg_kitchen_row:"Kitchen row",pkg_kitchen_row_desc:"Row on the back wall with fridge, oven, sink, dishwasher and stove, wall cabinet, dining table with pendant",pkg_kitchen_l:"L-shaped kitchen",pkg_kitchen_l_desc:"Rows at the back and left, kitchen island with bar stools",pkg_bath:"Bathroom",pkg_bath_desc:"Washbasin, WC, bathtub, washing machine, downlight",pkg_bedroom:"Bedroom",pkg_bedroom_desc:"Double bed with two nightstands, wardrobe, chest of drawers, ceiling light",pkg_living:"Living room",pkg_living_desc:"TV board, sofa, coffee table, rug, armchair, shelf, floor lamp, plant",pkg_dining:"Dining room",pkg_dining_desc:"Table with four chairs, sideboard, pendant",pkg_office:"Office",pkg_office_desc:"Desk with office chair, two shelves, ceiling light",pkg_kids:"Kids' room",pkg_kids_desc:"Single bed, desk, shelf, rug",pkg_hall:"Hall",pkg_hall_desc:"Coat rack, two downlights",spots_place:"Place spots",spots_type:"Lamp",spots_cols:"Columns (left\u2013right)",spots_rows:"Rows (front\u2013back)",spots_add:"Place {n} lamps",spots_placed:"{n} lamps placed.",spots_hint:"All lamps follow the chosen light (e.g. spots on one dimmer). Afterwards each can be moved and linked to another light like any furniture.",cancel:"Cancel",backup:"Backup",backup_history:"Restore points",backup_none:"None yet. While editing, a restore point is kept at most every 10 minutes.",backup_summary:"{rooms} rooms, {furniture} items",backup_restore:"Restore",backup_restore_confirm:"Restore the state of {time}? The current state is kept as a restore point.",backup_restored:"Restored.",backup_file:"File",backup_export:"Export",backup_export_share:"Share as template",backup_export_share_hint:"Without areas, devices, sensors and images \u2013 for passing on to others.",backup_import:"Import \u2026",backup_import_confirm:"Replace the whole plan with the file? The current state is kept as a restore point.",backup_import_error:"The file is no NeonPlan 3D plan ({error}).",backup_imported:"Imported.",backup_hint:"Background images are not part of the file.",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 Del deletes \xB7 Ctrl+Z",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_empty:"Add a floor first.",area_m2:"{a} m\xB2",overlap_warning:"Rooms overlap \u2013 walls there are incomplete.",read_only:"Only administrators can edit the floor plan.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"NeonPlan 3D",card_description:"Your home in 3D (neon).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} fps (slowest frame {ms} ms)",stats_idle:"At rest (0 fps)",stats_busy_camera:"camera",stats_busy_floors:"floors",stats_busy_openings:"doors/windows",stats_busy_flash:"flash",stats_busy_roof:"roof",stats_busy_flow:"power flow",stats_busy_effect:"colour effect",stats_busy_robot:"robot",stats_busy_orbit:"camera turn",stats_busy_tint:"room tint",stats_low:"tablet level, pixel ratio {r}",stats_full:"full level, pixel ratio {r}",floors_apart:"Apart",floors_stacked:"Stacked",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",devices_none_area:"Link the room to an area and its devices appear here.",devices_none:"The area has no suitable devices.",devices_place_all:"Place all automatically",devices_place:"Place",devices_remove:"Remove",devices_hint:"Placed devices appear in 3D. Drag them in the plan to move them.",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",panel_cameras:"Cameras",camera_live:"Open live view",through_camera:"Look through the camera",through_blend:"Blend",through_back:"Back to the view",camera_mount:"Mount",camera_mount_wall:"Wall (looks along its rotation)",camera_mount_ceiling:"Ceiling (dome, all round)",camera_fov:"Field of view (\xB0)",camera_reach:"Reach (m)",camera_fov_short:"Angle \xB0",camera_reach_short:"Reach m",camera_tilt:"Tilt down (\xB0)",camera_tilt_short:"Tilt \xB0",camera_aim_hint:"In the plan the wedge shows where the camera looks. The handle at its tip turns the camera and sets its reach.",state_recording:"Recording",state_streaming:"Streaming",panel_all_off:"All off",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"No devices of this room are in the plan. In the editor, place devices or pick them for the room panel with \u2606.",close:"Close",brightness:"Brightness",color_temp:"Colour temperature",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details",tool_opening:"Doors & windows",tool_furniture:"Furniture",qm_off:"Off",find:"Search",find_placeholder:"Where is \u2026? Device or room",find_none:"Nothing found",swipe_off:"Off",panel_pin:"Show in the room panel",panel_unpin:"Don't show in the room panel",devices_panel_hint:"The room panel shows the devices in the plan. \u2606 adds a device to the room panel without placing it.",card_section_view:"View",card_size:"Size",card_size_fixed:"Fixed height",card_size_fill:"Fill the screen",card_fill_hint:"Works best in a dashboard view of the type \u201CPanel (single card)\u201D \u2013 the card then takes all the space.",card_controls:"Switches in the card",card_floor_thumbs:"Floors as miniatures",card_floor_thumbs_hint:"Small pictures of the floors at the side \u2013 tap one to switch",card_floor_thumbs_hint_start:"The chosen floor is then where the card starts \u2013 the pictures at the side switch to the others",card_room_names:"Show room names",card_section_kiosk:"Wall tablet (kiosk)",card_idle_return:"Back to the start view after",card_idle_off:"Never",card_idle_min:"{n} min without a touch",card_idle_hint:"After the wait the card closes the room and shows the start view again.",card_night:"Night dimming",card_night_off:"Off",card_night_sun:"By the sun",card_night_time:"Time range",card_night_range:"Time range (e.g. 22:00-06:00)",card_idle_orbit:"Camera turn as screensaver",card_idle_orbit_hint:"After the return the view turns slowly until someone touches the tablet",card_alerts:"Show warnings",card_alerts_hint:"Smoke, gas, CO, water, alarm panel and windows open in the rain: the room pulses, a note appears at the top",card_alert_jump:"Jump to the room of a new warning",card_alert_jump_hint:"The view switches to the floor and room of the warning by itself",card_scenes:"Scene buttons in the room",card_scenes_hint:"Scenes and scripts of the area as buttons under the 3D view while a room is selected",card_motion_trail:"Motion trail",card_motion_trail_hint:"Where motion was reported in the last 30 minutes, with times (motion, presence and camera sensors)",trail_short:"Trail",trail_hint:"Motion trail: where motion was reported in the last 30 minutes, with times",alerts:"Warnings",alert_smoke:"Smoke: {name}",alert_gas:"Gas: {name}",alert_co:"Carbon monoxide: {name}",alert_water:"Water: {name}",alert_alarm:"Alarm triggered",alert_alarm_pending:"Alarm pending",alert_window_rain:"Window open in the rain: {name}",room_names_short:"Room names",floor_stack_short_dim:"Dimmed",floor_stack_short_stacked:"Stacked",floor_stack_short_single:"Alone",size_short_w:"W",size_short_d:"D",size_short_h:"H",import_error_not_json:"The file is no JSON.",import_error_not_plan:"The file is no NeonPlan 3D plan.",export_name_template:"template",export_name_backup:"backup",card_floor_stack:"Floors below",floor_stack_dim:"Dimmed",floor_stack_stacked:"Stacked (the house up to here)",floor_stack_single:"Hidden (only this floor)",card_control_walls:"Tall walls/cut",card_control_floors:"Floors apart",card_control_temperature:"Temperature",card_control_humidity:"Humidity",card_control_co2:"CO\u2082",card_controls_hint:"Tall walls/cut, floors apart and temperature, humidity, CO\u2082 to switch",card_fullscreen_button:"Full screen button",card_fullscreen_button_hint:"Hides the dashboard around the card (e.g. on a wall tablet)",fullscreen:"Full screen",fullscreen_exit:"Exit full screen",card_section_show:"Show",card_floor:"Floor",card_floor_house:"Whole house (tap a floor to open it)",card_height:"Height (pixels)",card_walls:"Walls",card_quality_hint:"\u201CTablet\u201D is the lightest setting \u2013 ideal for Fire tablets and other wall tablets.",card_flows_switch:"Switch in the card",card_flows_on:"Always on",card_flows_off:"Always off",card_energy:"Show energy values at the top",card_room_panel:"Room details on tap",card_room_panel_hint:"The room's lights, blinds and cameras in a side panel",card_explode:"Pull floors apart in the house view",card_stats:"Performance display (frames per second)",card_stats_hint:"To check how smoothly the card runs on the device",packs:"Furniture packs",packs_hint:"Only packs signed by the publisher can be imported.",pack_import:"Import furniture packs \u2026",pack_imported:"Imported \u201C{name}\u201D by {publisher} \u2013 {n} items",packs_imported_n:"{n} of {total} packs imported",pack_by:"by {publisher} \xB7 {n} items",pack_licensed:"Licensed to {name}",pack_remove:"Remove",pack_remove_confirm:"Remove the pack \u201C{name}\u201D? Its furniture stays in the plan as plain boxes.",pack_missing_item:"Furniture of a removed pack",pack_error_bad_signature:"The pack was changed or its signature is invalid.",pack_error_unknown_publisher:"This pack is not from a known publisher.",pack_error_unsigned:"The pack is not signed.",pack_error_not_a_pack:"This is not a furniture pack file.",pack_error_invalid_content:"The pack contains invalid furniture: {detail}",pack_error_too_large:"The file is too large.",pack_error_other:"Import failed: {detail}",back_to_room:"Back to {room}",back_to_floor:"Back to the floor",hint_furniture:"Tap a room, then pick an item on the right \xB7 drag items, resize them by their corners",furniture_into:"New items go into the middle of \u201C{room}\u201D.",furniture_pick_room:"Tip: tap a room first \u2013 new items then land in its middle.",flows:"Power flow",flows_hint:"Show or hide glowing lines from the meter to the consumers",flow_on:"on",flow_off:"off",hint_opening:"Tap a wall to add a door or window \u2013 choose its kind on the right afterwards",preset_door:"Door",preset_door_double:"Double door",preset_window:"Window",preset_window_double:"Double window",preset_terrace:"Terrace door",preset_terrace_double:"French doors",preset_garage:"Garage door",preset_front:"Front door",opening_style:"Style",style_auto:"Automatic ({style})",style_interior:"Room door",style_front:"Front door",style_front_glass:"Front door with glass",style_sidelight:"Front door with sidelight",style_sidelights:"Front door with two sidelights",style_glass:"Glass door",style_sliding:"Sliding door",style_standard:"Standard",style_bars:"With glazing bars",flip_hinge:"Swap hinge side",flip_main_leaf:"Swap main leaf",flip_hinge_hint:"Hinges to the other side",flip_swing:"Reverse opening direction",flip_swing_hint:"The door swings into the room or to the other side",main_leaf:"Main leaf (seen from the room)",contact_main:"Contact main leaf",contact_second:"Contact second leaf",tool_outdoor:"Outdoor",tool_measure:"By measure",hint_measure:"Tap the starting point, then type the wall lengths with their direction on the right",measure:"Room by measure",measure_start:"Tap the starting point in the plan, e.g. a room corner.",measure_from:"Start at {x} / {z} m \u2013 tapping moves the start.",measure_length:"Length of the next wall (m)",measure_close:"Close room",measure_undo:"Remove last wall",measure_gap:"Gap to the start: {gap} m (joined when closing)",measure_hint:"Tip: type a length and press an arrow key. With measured inside dimensions, use \u201CClose gaps\u201D afterwards.",rect_by_size:"Rectangle by size",rect_add:"Add rectangle",dir_up:"Up",dir_down:"Down",dir_left:"Left",dir_right:"Right",hint_outdoor:"Drag to draw an outdoor area (lawn, terrace, pool \u2026)",outdoor:"Outdoor area",outdoor_type:"Type",outdoor_hint:"Outdoor lights (path light, garden spot, outdoor wall light) light all outdoor areas and the facade.",out_lawn:"Lawn",out_terrace:"Terrace",out_path:"Path",out_driveway:"Driveway",out_pool:"Pool",out_bed:"Flower bed",out_hedge:"Hedge",out_fence:"Fence",north:"North (\xB0 clockwise from up)",north_hint:"North is needed for the sun (light through the windows).",roof:"Roof",roof_none:"No roof",roof_flat:"Flat roof",roof_gable:"Gable roof",roof_pitch:"Roof pitch (\xB0)",roof_overhang:"Roof overhang (m)",device:"Device",lamp_mount:"Lamp",lamp_ceiling:"Ceiling light",lamp_floor:"Floor lamp",lamp_table:"Table lamp",lamp_wall:"Wall light",marker_height:"Marker height (m)",height_auto:"Automatic height",device_centre:"To room centre",lights_spread:"Spread ceiling lights evenly",devices_search:"Search devices \u2026",devices_more:"+{n} more",devices_less:"less",panel_more:"More devices of the area ({n})",panel_less:"Show less",gaps_close:"Close gaps",gaps_hint:"Join rooms up to 60 cm apart at one shared wall; the gap becomes the interior wall thickness.",gaps_none:"No gaps between rooms found.",gaps_closed:"{n} places closed.",gaps_closed_wall:"{n} places closed, interior wall now {t} m.",fps:"FPS",fps_title:"Performance display (frames per second)",hint_garage:"Tap a wall to add a garage door",opening_garage:"Garage door",garage_hint:"The door follows a garage cover (position or open/closed) or a garage door contact of the room's area.",door_hint:"With a door contact the leaf swings open; without a sensor it stands half open.",hint_door:"Tap a wall to add a door",hint_window:"Tap a wall to add a window",opening_door:"Door",opening_window:"Window",opening_type:"Type",opening_position:"Centre from corner (m)",sill:"Sill height (m)",opening_height:"Height (m)",hinge:"Hinge (seen from the room)",hinge_left:"Left",hinge_right:"Right",cover_entity:"Blind",cover_position_entity:"Position sensor (live)",cover_position_invert:"Sensor counts the other way round (0 = open)",contact_entity:"Contact",sensor_kind:"Sensor type",sensor_kind_contact:"Window contact (open/closed)",sensor_kind_handle:"Handle sensor (open/tilted/closed)",sensor_kind_contact_tilt:"Contact + tilt sensor",handle_entity:"Handle sensor",handle_main:"Handle sensor main leaf",leaf_main:"Main leaf",leaf_second:"Second leaf",tilt_entity:"Tilt sensor",entity_auto:"Automatic ({name})",entity_auto_none:"Automatic (none found)",entity_none:"None",entity_search:"Type to search \u2026",opening_hint:`Sensor type: window contact (reports open/closed), handle sensor (reports open, tilted and closed \u2013 e.g. a Homematic window handle) or contact + tilt sensor (a second sensor that only reports tilted). Automatic uses the blinds and contacts of the room's area. Position sensor: an entity reporting the blind's position while it moves (e.g. a Homematic "level", 0\u2013100 % or 0\u20131, open = high) \u2013 the blind then moves live in 3D.`,furniture:"Furniture",furniture_add:"Add furniture",furniture_search:"Search furniture \u2026",furniture_type:"Item",rotation:"Rotation (\xB0)",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Height (m)",furn_sofa:"Sofa",furn_armchair:"Armchair",furn_table:"Table",furn_chair:"Chair",furn_bed:"Bed",furn_nightstand:"Nightstand",furn_wardrobe:"Wardrobe",furn_shelf:"Shelf",furn_kitchen:"Kitchen unit",furn_fridge:"Fridge",furn_fridge_smart:"Smart fridge (side by side)",furn_door_left:"Door sensor left (freezer side)",furn_door_right:"Door sensor right (fridge side)",fridge_hint:"While a door sensor reports open, the door swings open in 3D. The screen on the right door shows pictures by rules like a TV \u2013 while that door is closed.",furn_stove:"Stove",furn_sink:"Sink",furn_bathtub:"Bathtub",furn_shower:"Shower",furn_wc:"WC",furn_washbasin:"Washbasin",furn_desk:"Desk",furn_tv_board:"TV board",furn_plant:"Plant",furn_rug:"Rug",furn_stairs:"Stairs",furn_parking:"Parking spot",furn_group_vehicles:"Parking",parking_entity:'Sensor "car present"',parking_vehicle:"Vehicle",parking_vehicle_none:"None",parking_no_pack:'No vehicle pack imported \u2013 vehicles come from the "Vehicles" pack (Furniture \u2192 Import furniture pack).',parking_scale:"Size (%)",parking_type_entity:"Vehicle type sensor (optional)",parking_types:"State \u2192 vehicle",parking_type_state:"State (e.g. van)",parking_add_type:"+ Mapping",parking_hint:'Without a sensor the vehicle always stands there. With one it appears as soon as the sensor reports "on", "home" or "present". A vehicle type sensor (e.g. from an AI camera analysis) picks the model: when its state matches a mapping \u2013 also as a word in the text \u2013 that vehicle is shown, otherwise the default one.',parking_too_tall:"The vehicle ({car} m) is taller than the room ({room} m).",furn_lamp_ceiling:"Ceiling light",furn_lamp_downlight:"Downlight",furn_lamp_spot:"Surface spot",furn_lamp_panel:"LED panel",furn_lamp_uplight:"Floor uplight",furn_lamp_bollard:"Path light",furn_lamp_garden:"Garden spot",furn_radiator:"Radiator",furn_robot_vacuum:"Robot vacuum",furn_entity_vacuum:"Robot vacuum",robot_hint:"While the robot cleans in Home Assistant it drives lanes through the room of its dock in 3D (the track is simulated \u2013 Home Assistant usually does not know the real position). It drives back to the dock when it returns.",furn_lamp_pendant:"Pendant light",furn_lamp_floor:"Floor lamp",furn_lamp_table:"Table lamp",furn_lamp_wall:"Wall light",furn_led_strip:"LED strip",furn_group_lights:"Lights",furn_entity_light:"Light or switch",furn_entity_climate:"Heating (thermostat)",lamp_hint:"Tap the lamp in 3D to switch it, long press for the quick menu. Switches work too (e.g. a relay for the ceiling light) \u2013 the lamp shines while it is on. Table lamps stand on the furniture below them.",lamp_hint_pendant:"Height = drop below the ceiling. Tap in 3D to switch, long press for details.",theme:"Look",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Day",furnish:"Furnish",split_3d:"3D beside",mount_height:"Height above the floor (m)",side_open:"Open the sidebar",side_close:"Close",side_details:"Details of the selection",side_pin:"Pin",side_pinned:"Pinned",side_pin_hint:"Pinned, the sidebar stays open; otherwise it folds away beside the 3D view while nothing is selected",split_3d_hint:"Live 3D next to the plan: drag and turn furniture and devices there \u2013 with undo, saved with the plan",size_w:"Width (m)",size_d:"Depth (m)",size_h:"Height (m)",furnish_hint:"Drag furniture, lamps and devices \xB7 furniture snaps to walls \xB7 tap one to turn it, set its height and mount",done:"Done",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humidity",heat_short_co2:"CO\u2082",heat_temperature:"Temperature",heat_humidity:"Humidity",heat_co2:"CO\u2082",heat_none_found:"No matching sensors in the rooms' areas.",markers:"Markers",markers_none:"None",markers_important:"Important",markers_all:"All",furn_stool:"Stool",furn_coffee_table:"Coffee table",furn_tv_wall:"TV (wall)",furn_sideboard:"Sideboard",furn_table_round:"Round table",furn_bench:"Bench",furn_corner_bench:"Corner bench",furn_bar_stool:"Bar stool",furn_kitchen_wall:"Wall cabinet",furn_kitchen_tall:"Tall unit with oven",furn_island:"Kitchen island",furn_dishwasher:"Dishwasher",furn_bunk_bed:"Bunk bed",furn_dresser:"Chest of drawers",furn_washer:"Washing machine",furn_dryer:"Dryer",furn_office_chair:"Office chair",furn_tall_cabinet:"Tall cabinet",furn_coat_rack:"Coat rack",furn_group_living:"Living",furn_group_dining:"Dining",furn_group_kitchen:"Kitchen",furn_group_sleeping:"Sleeping",furn_group_bath:"Bath & laundry",furn_group_work:"Work & other",furn_entity:"Device (switch, plug \u2026)",furn_entity_tv:"TV (media player)",furn_power:"Power sensor (W)",furn_links_hint:"With a power sensor the item shows its watts and gets an energy cable.",screen_pictures:"Pictures by state",screen_pictures_hint:`The state or an attribute of the entity is compared (e.g. a TV's app_name). A value matches when it is equal or contained in the text ("youtube" matches "com.google.android.youtube.tv"); "*" = always. The first matching rule wins. Pictures are stored scaled to 512 px; a picture URL or a camera works too \u2013 a camera's live picture is refreshed every 5 seconds while shown. Without a matching rule the screen shows the media player.`,picture_state:"is or contains \u2026 (e.g. netflix)",picture_state_of:"State",picture_attribute:"Compare the state or an attribute",picture_pick:"Choose picture \u2026",picture_change:"Change picture \u2026",picture_url:"or picture URL",picture_add_value:"+ Value",picture_reuse:"Use a stored picture",picture_camera:"or a camera (live picture) \u2026",picture_camera_none:"No camera",screen_bg:"Screen behind the picture",screen_bg_black:"Dark",screen_bg_white:"White",picture_add_entity:"+ Another entity",picture_current:"now: {value}",picture_matches:"\u2713 matches now \u2013 this picture shows",furn_links_hint_tv:"The screen glows while the TV is on, in the colour of the app (Netflix, YouTube \u2026); the label shows the app or title.",stairs_hint:"The stair rises towards the back (away from the marked front edge) and opens the ceiling of the floor above.",floor_lights:"{n} lights on",floor_open:"{n} open",floor_persons:"{n} people",energy_consumption:"Consumption",energy_grid_import:"Grid import",energy_grid_export:"Export",energy_solar:"Solar",energy_battery:"Battery",energy_tariff:"Tariff",energy:"Energy",energy_meter:"Meter",energy_meter_set:"Place meter",energy_meter_remove:"Remove meter",energy_meter_hint:"Tap the spot of the meter or house connection in the plan.",energy_grid:"Grid (W, + = import)",energy_solar_sensor:"Solar production (W)",energy_battery_sensor:"Battery power (W, + = discharging)",energy_battery_soc:"Battery charge (%)",energy_tariff_sensor:"Tariff (e.g. \u20AC/kWh)",energy_invert:"Invert sign",energy_hint:"Consumers are placed devices with a power sensor (W) \u2013 the sensor itself or one of the same device.",tool_meter:"Meter",hint_meter:"Tap the spot of the meter",presence:"Presence",presence_hint:"Room sensor per person (e.g. ESPresense, Bermuda): its state names the room or area.",presence_sensor:"Room sensor",no_persons:"There are no people in Home Assistant."};function S(i,e,t={}){let r=((i?.language??navigator.language).startsWith("de")?Vn:xi)[e]??Vn[e]??e;for(let[o,s]of Object.entries(t))r=r.replace(`{${o}}`,String(s));return r}function O(i,e,t=2){return e.toLocaleString(i?.language??void 0,{maximumFractionDigits:t})}var Un={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function Be(i){return Un[i]}function Se(i){return`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${Un[i]}"/></svg>`}var G=(i,e)=>S(i,e);function P(i,e){if(!e||z(e))return G(i,"state_unavailable");let t=e.attributes;switch(k(e.entity_id)){case"light":return e.state!=="on"?G(i,"state_off"):typeof t.brightness=="number"?`${Math.round(t.brightness/255*100)} %`:G(i,"state_on");case"switch":case"fan":return G(i,e.state==="on"?"state_on":"state_off");case"cover":return typeof t.current_position=="number"&&e.state!=="opening"&&e.state!=="closing"?`${t.current_position} %`:Ne(i,e.state);case"climate":{let n=typeof t.current_temperature=="number"?`${O(i,t.current_temperature,1)} \xB0C`:null;return e.state==="off"?n?`${n} \xB7 ${G(i,"state_off")}`:G(i,"state_off"):n??Ne(i,e.state)}case"media":{let n=e.state==="playing"||e.state==="paused"||e.state==="on"||e.state==="idle",r=[t.app_name,t.media_title,t.source].find(o=>typeof o=="string"&&o);return n&&r?r:Ne(i,e.state)}case"lock":case"camera":return Ne(i,e.state);case"binary":return["door","window","opening","garage_door"].includes(t.device_class)?G(i,e.state==="on"?"state_open":"state_closed"):G(i,e.state==="on"?"state_detected":"state_clear");case"sensor":{let n=Number(e.state),r=t.unit_of_measurement??"";return Number.isFinite(n)?`${O(i,n,1)}${r?` ${r}`:""}`:e.state}default:return""}}function Ne(i,e){let t=`state_${e}`,n=S(i,t);return n===t?e:n}function Kn(i,e){let t=[];for(let n of e.floors)for(let r of n.placements){let o=k(r.entity_id),s=i.states[r.entity_id];if(!o||!s)continue;let a=n.rooms.find(c=>c.points.length>=3&&R([r.x,r.z],c.points))??null,l=a?.area_id?i.areas?.[a.area_id]?.name:void 0;t.push({id:r.entity_id,floorId:n.id,roomId:a?.id??null,x:r.x,z:r.z,y:r.y??ce(o,n.height,r.mount??null),lamp:o==="light"?r.mount??"ceiling":null,model:o==="camera"?r.mount==="ceiling"?"camera_ceiling":"camera_wall":void 0,motion:o==="camera"?ki(i,r.entity_id):void 0,fov:r.fov??void 0,reach:r.reach??void 0,tilt:r.tilt??void 0,rotation:r.rotation??0,icon:Se(o),name:I(i,r.entity_id,l),text:P(i,s),active:de(s),unavailable:z(s),glow:o==="light"?Oe(s):null})}return t}function ki(i,e){return Me(i,e).some(t=>i.states[t]?.state==="on")}function Me(i,e){let t=i.entities?.[e]?.device_id;return t?Object.values(i.entities??{}).filter(n=>n.device_id===t&&n.entity_id.startsWith("binary_sensor.")).map(n=>n.entity_id).filter(n=>["motion","occupancy","presence"].includes(String(i.states[n]?.attributes.device_class))):[]}function qn(i){return i.floors.flatMap(e=>e.placements.map(t=>t.entity_id))}function Z(i,e){i.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}function jn(i,e){let t=e.slice(0,e.indexOf("."));return i.callService(t,"toggle",{entity_id:e})}var N=C`
  :host {
    --fp3d-bg: #070b14;
    --fp3d-bg2: #0d1424;
    --fp3d-chrome: rgba(14, 21, 38, 0.86);
    --fp3d-chrome-solid: #0f1729;
    --fp3d-line: rgba(120, 170, 255, 0.16);
    --fp3d-text: #e6eefc;
    --fp3d-muted: #8a9bb8;
    --fp3d-accent: #37e0ff;
    --fp3d-accent-text: #041018;
    --fp3d-soft: #5b7cff;
    --fp3d-warm: #ffb547;
    --fp3d-danger: #ff6b8b;
    --fp3d-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
    --fp3d-font: "Figtree", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    --fp3d-title-font: "Bricolage Grotesque", "Figtree", system-ui, sans-serif;
    color-scheme: dark;
    font-family: var(--fp3d-font);
    color: var(--fp3d-text);
  }
`,Y=C`
  .fp3d-seg {
    display: inline-flex;
    padding: 3px;
    gap: 2px;
    border-radius: 999px;
    background: var(--fp3d-chrome);
    box-shadow: var(--fp3d-shadow);
  }
  .fp3d-seg button,
  .fp3d-chip {
    font: inherit;
    font-weight: 500;
    border: none;
    background: none;
    color: var(--fp3d-muted);
    padding: 7px 13px;
    border-radius: 999px;
    cursor: pointer;
    white-space: nowrap;
    min-height: 34px;
  }
  .fp3d-seg button[aria-pressed="true"],
  .fp3d-chip[aria-pressed="true"] {
    background: var(--fp3d-accent);
    color: var(--fp3d-accent-text);
  }
  .fp3d-seg button:disabled {
    opacity: 0.4;
    cursor: default;
  }
  .fp3d-chip {
    background: var(--fp3d-chrome);
    color: var(--fp3d-text);
    box-shadow: var(--fp3d-shadow);
  }
  button:focus-visible,
  input:focus-visible,
  select:focus-visible {
    outline: 2px solid var(--fp3d-accent);
    outline-offset: 2px;
  }
  .fp3d-btn {
    font: inherit;
    font-weight: 600;
    border: 1px solid var(--fp3d-line);
    background: rgba(55, 224, 255, 0.06);
    color: var(--fp3d-text);
    border-radius: 10px;
    padding: 7px 12px;
    cursor: pointer;
    min-height: 34px;
  }
  .fp3d-btn:hover {
    border-color: var(--fp3d-accent);
  }
  .fp3d-btn.fp3d-danger {
    color: var(--fp3d-danger);
  }
  .fp3d-btn.fp3d-primary {
    background: var(--fp3d-accent);
    color: var(--fp3d-accent-text);
    border-color: transparent;
  }
  .fp3d-field {
    display: grid;
    gap: 4px;
    font-size: 12px;
    color: var(--fp3d-muted);
  }
  .fp3d-field input,
  .fp3d-field select {
    font: inherit;
    font-size: 14px;
    color: var(--fp3d-text);
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid var(--fp3d-line);
    border-radius: 8px;
    padding: 7px 9px;
    min-width: 0;
  }
  .fp3d-field input[type="range"] {
    padding: 0;
    accent-color: var(--fp3d-accent);
  }
  .fp3d-field select option {
    background: var(--fp3d-chrome-solid);
  }
  /* fingers need 40 px */
  @media (pointer: coarse) {
    .fp3d-seg button,
    .fp3d-chip,
    .fp3d-btn {
      min-height: 40px;
    }
  }
`;var $i=4,Si=3e3,Mi=8,Ei=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[255,95,210],[120,255,150]],pe=i=>m`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${Be(i)} />
  </svg>`,We={previous:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z"},Et=i=>m`<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d=${i} /></svg>`,At=class extends H{static properties={hass:{attribute:!1},room:{attribute:!1},floor:{attribute:!1},_showAll:{state:!0},_tick:{state:!0}};cameraTimer;memo=null;hasCameras=!1;constructor(){super(),this.room=null,this.floor=null,this._showAll=!1,this._tick=0}connectedCallback(){super.connectedCallback(),this.cameraTimer=setInterval(()=>{this.hasCameras&&!document.hidden&&this._tick++},Si)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.cameraTimer)}t(e,t){return S(this.hass,e,t)}call(e,t,n){this.hass.callService(e,t,n)}get areaName(){return this.room?.area_id?this.hass.areas?.[this.room.area_id]?.name:void 0}name(e){return I(this.hass,e,this.areaName)}nameButton(e){return m`<button class="fp3d-rp-name" title=${this.t("details")} @click=${()=>Z(this,e)}>${this.name(e)}</button>`}toggle(e,t,n){return m`<button
      class="fp3d-switch"
      role="switch"
      aria-checked=${t?"true":"false"}
      aria-label=${this.name(e.entity_id)}
      ?disabled=${z(e)}
      @click=${n}
    ></button>`}render(){let e=this.room;if(!e||!this.hass)return _;let t=D(this.hass,e.area_id),n=this.memo,{shown:r,more:o}=n&&n.entities===this.hass.entities&&n.floor===this.floor&&n.room===e?n:this.memo={entities:this.hass.entities,floor:this.floor,room:e,...this.floor?Wn(this.hass,this.floor,e):{shown:t,more:[]}},s=xt(this.hass,o).map(w=>w.primary),a=s.length,l=this._showAll?[...r,...s]:r,c=t.filter(w=>k(w)==="sensor").map(w=>this.hass.states[w]),d=w=>l.filter(v=>w.includes(k(v))).map(v=>this.hass.states[v]),p=d(["light"]),f=d(["cover"]),u=d(["climate"]),h=d(["media"]),g=d(["switch","fan","lock"]),y=d(["sensor","binary"]),$=d(["camera"]);this.hasCameras=$.length>0;let b=d(["scene","script"]),M=this.facts([...y,...c],u),E=p.filter(w=>w.state==="on");return m`<section class="fp3d-rp" aria-label=${e.name}>
      <header class="fp3d-rp-head">
        <div>
          <h2>${e.name}</h2>
          ${M.length?m`<p class="fp3d-rp-facts">${M.join(" \xB7 ")}</p>`:_}
        </div>
        <button class="fp3d-rp-close" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>
      <div class="fp3d-rp-body">
        ${e.area_id?l.length?_:m`<p class="fp3d-rp-note">${this.t("panel_empty")}</p>`:m`<p class="fp3d-rp-note">${this.t("panel_no_area")}</p>`}
        ${p.length?this.section("panel_lights",p.map(w=>this.lightRow(w)),E.length?m`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_off",{entity_id:E.map(w=>w.entity_id)})}>
                    ${this.t("panel_all_off")}
                  </button>`:_):_}
        ${f.length?this.section("panel_covers",f.map(w=>this.coverRow(w))):_}
        ${u.length?this.section("panel_climate",u.map(w=>this.climateRow(w))):_}
        ${h.length?this.section("panel_media",h.map(w=>this.mediaRow(w))):_}
        ${g.length?this.section("panel_switches",g.map(w=>this.switchRow(w))):_}
        ${$.length?this.section("panel_cameras",$.map(w=>this.cameraTile(w))):_}
        ${y.length?this.section("panel_sensors",y.map(w=>this.sensorRow(w))):_}
        ${b.length?this.section("panel_scenes",[m`<div class="fp3d-rp-scenes">
                  ${b.map(w=>m`<button
                      class="fp3d-btn"
                      ?disabled=${z(w)}
                      @click=${()=>this.call(k(w.entity_id)==="scene"?"scene":"script","turn_on",{entity_id:w.entity_id})}
                    >
                      ${this.name(w.entity_id)}
                    </button>`)}
                </div>`]):_}
        ${a?m`<button class="fp3d-btn fp3d-rp-small fp3d-rp-more" @click=${()=>this._showAll=!this._showAll}>
              ${this._showAll?this.t("panel_less"):this.t("panel_more",{n:a})}
            </button>`:_}
      </div>
    </section>`}facts(e,t){let n=[],r=e.find(a=>a.attributes.device_class==="temperature"&&!z(a)),o=t.find(a=>typeof a.attributes.current_temperature=="number");r?n.push(P(this.hass,r)):o&&n.push(`${O(this.hass,o.attributes.current_temperature,1)} \xB0C`);let s=e.find(a=>a.attributes.device_class==="humidity"&&!z(a));return s&&n.push(P(this.hass,s)),n}section(e,t,n=_){return m`<div class="fp3d-rp-sec">
      <div class="fp3d-rp-sec-head"><h3>${this.t(e)}</h3>${n}</div>
      ${t}
    </div>`}lightRow(e){let t=e.attributes,n=e.state==="on",r=t.supported_color_modes??[],o=r.some(f=>f!=="onoff"),s=r.includes("color_temp"),a=r.some(f=>["hs","rgb","rgbw","rgbww","xy"].includes(f)),l=typeof t.brightness=="number"?Math.round(t.brightness/255*100):100,c=t.min_color_temp_kelvin??2200,d=t.max_color_temp_kelvin??6500,p=e.entity_id;return m`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${pe("light")}</span>
      ${this.nameButton(p)}
      <span class="fp3d-rp-state">${P(this.hass,e)}</span>
      ${this.toggle(e,n,()=>this.call("light","toggle",{entity_id:p}))}
      ${n&&o?m`<label class="fp3d-rp-slider"
            ><span>${this.t("brightness")}</span>
            <input
              type="range"
              min="1"
              max="100"
              .value=${String(l)}
              @change=${f=>this.call("light","turn_on",{entity_id:p,brightness_pct:Number(f.target.value)})}
          /></label>`:_}
      ${n&&s?m`<label class="fp3d-rp-slider fp3d-rp-ct"
            ><span>${this.t("color_temp")}</span>
            <input
              type="range"
              min=${c}
              max=${d}
              step="50"
              .value=${String(t.color_temp_kelvin??c)}
              @change=${f=>this.call("light","turn_on",{entity_id:p,color_temp_kelvin:Number(f.target.value)})}
          /></label>`:_}
      ${n&&a?m`<div class="fp3d-rp-swatches" role="group" aria-label=${this.t("color")}>
            ${Ei.map(f=>m`<button
                class="fp3d-rp-swatch"
                style="--c: rgb(${f.join(",")})"
                aria-label="rgb(${f.join(", ")})"
                @click=${()=>this.call("light","turn_on",{entity_id:p,rgb_color:f})}
              ></button>`)}
          </div>`:_}
    </div>`}coverRow(e){let t=e.attributes,n=t.supported_features??0,r=e.entity_id,o=z(e);return m`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon">${pe("cover")}</span>
      ${this.nameButton(r)}
      <span class="fp3d-rp-state">${P(this.hass,e)}</span>
      <div class="fp3d-rp-buttons">
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${o} @click=${()=>this.call("cover","open_cover",{entity_id:r})}>${this.t("cover_open")}</button>
        ${n&Mi?m`<button class="fp3d-btn fp3d-rp-small" ?disabled=${o} @click=${()=>this.call("cover","stop_cover",{entity_id:r})}>${this.t("cover_stop")}</button>`:_}
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${o} @click=${()=>this.call("cover","close_cover",{entity_id:r})}>${this.t("cover_close")}</button>
      </div>
      ${n&$i&&typeof t.current_position=="number"?m`<label class="fp3d-rp-slider"
            ><span>${this.t("position")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${o}
              .value=${String(t.current_position)}
              @change=${s=>this.call("cover","set_cover_position",{entity_id:r,position:Number(s.target.value)})}
          /></label>`:_}
    </div>`}climateRow(e){let t=e.attributes,n=e.entity_id,r=typeof t.temperature=="number"?t.temperature:null,o=t.target_temp_step??.5,s=t.min_temp??5,a=t.max_temp??30,l=t.hvac_modes??[],c=d=>this.call("climate","set_temperature",{entity_id:n,temperature:Math.min(a,Math.max(s,Math.round(d/o)*o))});return m`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${t.hvac_action==="heating"?"fp3d-rp-on":""}">${pe("climate")}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${P(this.hass,e)}</span>
      ${r!==null?m`<div class="fp3d-rp-stepper fp3d-rp-wide">
            <button class="fp3d-btn" aria-label=${this.t("temp_down")} @click=${()=>c(r-o)}>−</button>
            <span><small>${this.t("target_temp")}</small> ${O(this.hass,r,1)} °C</span>
            <button class="fp3d-btn" aria-label=${this.t("temp_up")} @click=${()=>c(r+o)}>+</button>
          </div>`:_}
      ${l.length>1?m`<div class="fp3d-rp-chips">
            ${l.map(d=>m`<button
                class="fp3d-chip"
                aria-pressed=${e.state===d}
                @click=${()=>this.call("climate","set_hvac_mode",{entity_id:n,hvac_mode:d})}
              >
                ${this.stateLabel(d)}
              </button>`)}
          </div>`:_}
    </div>`}stateLabel(e){let t=`state_${e}`,n=this.t(t);return n===t?e:n}mediaRow(e){let t=e.attributes,n=e.entity_id,r=z(e)||e.state==="off",o=[t.media_title,t.media_artist].filter(s=>typeof s=="string"&&s).join(" \xB7 ");return m`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${e.state==="playing"?"fp3d-rp-on":""}">${pe("media")}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${this.stateLabel(e.state)}</span>
      ${o?m`<p class="fp3d-rp-media fp3d-rp-wide">${o}</p>`:_}
      <div class="fp3d-rp-buttons fp3d-rp-wide">
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("previous")} ?disabled=${r} @click=${()=>this.call("media_player","media_previous_track",{entity_id:n})}>
          ${Et(We.previous)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("play_pause")} ?disabled=${z(e)} @click=${()=>this.call("media_player","media_play_pause",{entity_id:n})}>
          ${Et(e.state==="playing"?We.pause:We.play)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("next")} ?disabled=${r} @click=${()=>this.call("media_player","media_next_track",{entity_id:n})}>
          ${Et(We.next)}
        </button>
      </div>
      ${typeof t.volume_level=="number"?m`<label class="fp3d-rp-slider"
            ><span>${this.t("volume")}</span>
            <input
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(t.volume_level*100))}
              @change=${s=>this.call("media_player","volume_set",{entity_id:n,volume_level:Number(s.target.value)/100})}
          /></label>`:_}
    </div>`}switchRow(e){let t=e.entity_id,n=k(t),r=t.slice(0,t.indexOf(".")),o=n==="lock"?e.state==="unlocked"||e.state==="open":e.state==="on",s=()=>n==="lock"?this.call("lock",o?"lock":"unlock",{entity_id:t}):this.call(r,"toggle",{entity_id:t});return m`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${o?"fp3d-rp-on":""}">${pe(n)}</span>
      ${this.nameButton(t)}
      <span class="fp3d-rp-state">${P(this.hass,e)}</span>
      ${this.toggle(e,o,s)}
    </div>`}cameraTile(e){let t=e.attributes.entity_picture,n=t&&!z(e)?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this._tick}`:null,r=this.floor?.placements.some(o=>o.entity_id===e.entity_id);return m`<div class="fp3d-rp-camera-wrap">
      <button class="fp3d-rp-camera" title=${this.t("camera_live")} @click=${()=>Z(this,e.entity_id)}>
        ${n?m`<img src=${n} alt=${this.name(e.entity_id)} loading="lazy" />`:m`<span class="fp3d-rp-note">${P(this.hass,e)}</span>`}
        <span class="fp3d-rp-camera-name">${this.name(e.entity_id)}</span>
      </button>
      ${r?m`<button
            class="fp3d-rp-look"
            title=${this.t("through_camera")}
            @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:e.entity_id},bubbles:!0,composed:!0}))}
          >
            ${this.t("through_camera")}
          </button>`:_}
    </div>`}sensorRow(e){let t=k(e.entity_id),n=t==="binary"&&e.state==="on";return m`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${pe(t)}</span>
      ${this.nameButton(e.entity_id)}
      <span class="fp3d-rp-state">${P(this.hass,e)}</span>
    </div>`}fire(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}static styles=[N,Y,C`
      :host {
        display: block;
      }
      .fp3d-rp {
        /* the host may be pointer-events: none so the 3D view stays usable around the panel */
        pointer-events: auto;
        display: flex;
        flex-direction: column;
        max-height: 100%;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 18px;
        box-shadow: var(--fp3d-shadow);
        overflow: hidden;
      }
      .fp3d-rp-head {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        padding: 14px 14px 10px 16px;
        border-bottom: 1px solid var(--fp3d-line);
      }
      .fp3d-rp-head > div {
        flex: 1;
        min-width: 0;
      }
      h2 {
        margin: 0;
        font: 700 21px var(--fp3d-title-font);
        letter-spacing: -0.01em;
      }
      .fp3d-rp-facts {
        margin: 2px 0 0;
        color: var(--fp3d-muted);
        font-size: 13px;
        font-variant-numeric: tabular-nums;
      }
      @media (pointer: coarse) {
        .fp3d-rp-close {
          width: 40px;
          height: 40px;
        }
        .fp3d-rp-swatch {
          width: 36px;
          height: 36px;
        }
        .fp3d-rp-small {
          min-height: 36px;
        }
      }
      .fp3d-rp-close {
        display: grid;
        place-items: center;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        border: none;
        background: rgba(255, 255, 255, 0.06);
        color: var(--fp3d-text);
        cursor: pointer;
      }
      .fp3d-rp-body {
        overflow-y: auto;
        padding: 6px 14px 16px 16px;
        display: grid;
        gap: 14px;
        overscroll-behavior: contain;
      }
      .fp3d-rp-note {
        color: var(--fp3d-muted);
        font-size: 13px;
        margin: 8px 0 0;
      }
      .fp3d-rp-sec-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 6px;
      }
      h3 {
        margin: 0;
        font-size: 11.5px;
        font-weight: 600;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
      }
      .fp3d-rp-row {
        display: grid;
        grid-template-columns: 28px 1fr auto auto;
        align-items: center;
        gap: 6px 10px;
        padding: 9px 0;
        border-bottom: 1px solid var(--fp3d-line);
      }
      .fp3d-rp-row:last-child {
        border-bottom: none;
      }
      .fp3d-rp-row > :nth-child(n + 5),
      .fp3d-rp-row > .fp3d-rp-wide {
        grid-column: 2 / -1;
      }
      .fp3d-rp-icon {
        display: grid;
        place-items: center;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        color: var(--fp3d-muted);
        background: rgba(91, 124, 255, 0.12);
      }
      .fp3d-rp-on {
        color: #2a1a00;
        background: var(--fp3d-warm);
        box-shadow: 0 0 14px rgba(255, 181, 71, 0.55);
      }
      .fp3d-rp-name {
        font: inherit;
        font-weight: 500;
        color: var(--fp3d-text);
        background: none;
        border: none;
        padding: 0;
        text-align: left;
        cursor: pointer;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .fp3d-rp-state {
        font-size: 12.5px;
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
        max-width: 110px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-rp-row > .fp3d-rp-state:last-child {
        grid-column: 3 / -1;
        justify-self: end;
      }
      .fp3d-switch {
        position: relative;
        width: 44px;
        height: 26px;
        border-radius: 999px;
        border: none;
        background: rgba(255, 255, 255, 0.1);
        cursor: pointer;
      }
      .fp3d-switch::after {
        content: "";
        position: absolute;
        top: 3px;
        left: 3px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #e6eefc;
        transition: transform 0.2s ease;
      }
      .fp3d-switch[aria-checked="true"] {
        background: var(--fp3d-warm);
      }
      .fp3d-switch[aria-checked="true"]::after {
        transform: translateX(18px);
      }
      .fp3d-switch:disabled {
        opacity: 0.4;
        cursor: default;
      }
      .fp3d-rp-slider {
        display: grid;
        grid-template-columns: 110px 1fr;
        align-items: center;
        gap: 10px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-rp-slider input {
        width: 100%;
        accent-color: var(--fp3d-accent);
      }
      .fp3d-rp-ct input {
        accent-color: var(--fp3d-warm);
      }
      .fp3d-rp-swatches,
      .fp3d-rp-buttons,
      .fp3d-rp-chips,
      .fp3d-rp-scenes {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-rp-swatch {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.2);
        background: var(--c);
        box-shadow: 0 0 10px var(--c);
        cursor: pointer;
      }
      .fp3d-rp-camera {
        position: relative;
        display: block;
        width: 100%;
        aspect-ratio: 16 / 9;
        margin: 6px 0;
        padding: 0;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
        overflow: hidden;
        background: #05080f;
        cursor: pointer;
      }
      .fp3d-rp-camera img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
      .fp3d-rp-camera-wrap {
        position: relative;
      }
      .fp3d-rp-look {
        position: absolute;
        right: 8px;
        bottom: 12px;
        padding: 4px 10px;
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        background: rgba(7, 11, 20, 0.8);
        color: var(--fp3d-accent);
        font: inherit;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
      }
      .fp3d-rp-camera-name {
        position: absolute;
        left: 8px;
        bottom: 6px;
        padding: 2px 8px;
        border-radius: 8px;
        background: rgba(7, 11, 20, 0.75);
        color: var(--fp3d-text);
        font-size: 12px;
        font-weight: 600;
      }
      .fp3d-rp-more {
        justify-self: start;
      }
      .fp3d-rp-small {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 5px 10px;
        min-height: 30px;
        font-size: 13px;
      }
      .fp3d-rp-stepper {
        display: flex;
        align-items: center;
        gap: 10px;
        font-variant-numeric: tabular-nums;
        font-weight: 600;
      }
      .fp3d-rp-stepper small {
        color: var(--fp3d-muted);
        font-weight: 500;
        margin-right: 4px;
      }
      .fp3d-rp-stepper .fp3d-btn {
        width: 36px;
        padding: 4px 0;
        font-size: 17px;
      }
      .fp3d-rp-chips .fp3d-chip {
        box-shadow: none;
        border: 1px solid var(--fp3d-line);
        min-height: 30px;
        padding: 4px 11px;
        font-size: 13px;
      }
      .fp3d-rp-media {
        margin: 0;
        font-size: 12.5px;
        color: var(--fp3d-muted);
      }
      button:focus-visible,
      input:focus-visible {
        outline: 2px solid var(--fp3d-accent);
        outline-offset: 2px;
      }
    `]};customElements.get("fp3d-room-panel")||customElements.define("fp3d-room-panel",At);var Ai=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),Gn={smoke:"smoke",gas:"gas",carbon_monoxide:"co",moisture:"water"};function Zn(i,e){let t=[];for(let r of e.floors)for(let o of r.rooms){let s=D(i,o.area_id).filter(a=>a.startsWith("binary_sensor.")&&!!Gn[String(i.states[a]?.attributes.device_class)]);s.length&&t.push({floorId:r.id,roomId:o.id,sensors:s})}let n=Object.keys(i.states);return{rooms:t,alarms:n.filter(r=>r.startsWith("alarm_control_panel.")),weather:n.find(r=>r.startsWith("weather."))??null}}function Yn(i){return[...i.rooms.flatMap(e=>e.sensors),...i.alarms,...i.weather?[i.weather]:[]]}function Jn(i,e,t,n){let r=[];for(let s of t.rooms)for(let a of s.sensors){let l=i.states[a];l?.state==="on"&&r.push({kind:Gn[String(l.attributes.device_class)],entity:a,roomId:s.roomId,floorId:s.floorId})}if(!!t.weather&&Ai.has(i.states[t.weather]?.state??""))for(let s of e.floors)for(let a of s.openings){if(a.type!=="window")continue;let l=n.get(a.id);if(!l)continue;let c=re(i,l,"window");c.open<.5&&c.tilt<.5&&c.open2<.5&&c.tilt2<.5||r.push({kind:"window_rain",entity:l.contact??l.tilt??l.contact2??a.id,roomId:a.room_id,floorId:s.id})}for(let s of t.alarms){let a=i.states[s]?.state;a==="triggered"?r.push({kind:"alarm",entity:s,roomId:null,floorId:null}):a==="pending"&&r.push({kind:"alarm_pending",entity:s,roomId:null,floorId:null})}return r}function Qn(i){switch(i){case"water":return[.2,.6,1];case"window_rain":return[.35,.72,1];case"alarm_pending":return[1,.62,.2];default:return[1,.2,.25]}}function Tt(i,e,t){let n=t.roomId?e.floors.flatMap(s=>s.rooms).find(s=>s.id===t.roomId):null,r=i?I(i,t.entity):t.entity,o=S(i,`alert_${t.kind}`,{name:r});return n?`${n.name} \xB7 ${o}`:o}var W=(i,e)=>[i[0]-e[0],i[1]-e[1]],Ee=(i,e)=>[i[0]+e[0],i[1]+e[1]],ie=(i,e)=>[i[0]*e,i[1]*e],zt=(i,e)=>i[0]*e[0]+i[1]*e[1],Ae=(i,e)=>i[0]*e[1]-i[1]*e[0],Ve=i=>Math.hypot(i[0],i[1]),Te=i=>{let e=Ve(i)||1;return[i[0]/e,i[1]/e]},Xn=i=>[-i[1],i[0]],er=i=>[i[1],-i[0]];function It(i,e){let t=e.eps??.005,n=[],r=[],o=u=>{for(let h=0;h<r.length;h++)if(Math.abs(r[h][0]-u[0])<=t&&Math.abs(r[h][1]-u[1])<=t)return h;return r.push([u[0],u[1]]),r.length-1},s=[];for(let u of i){let h=u.points;if(h.length<3||Math.abs(j(h))<1e-6)continue;let g=j(h)>0,y=h.map(o);for(let $=0;$<h.length;$++){let b=y[$],M=y[($+1)%h.length];b!==M&&s.push(g?{u:b,v:M,room:u.id,edge:$,forward:!0}:{u:M,v:b,room:u.id,edge:$,forward:!1})}}let a=[];for(let u of s){let h=r[u.u],g=r[u.v],y=W(g,h),$=Ve(y),b=ie(y,1/$),M=[];for(let w=0;w<r.length;w++){if(w===u.u||w===u.v)continue;let v=W(r[w],h),x=zt(v,b);x<=t||x>=$-t||Math.abs(Ae(b,v))<=t&&M.push({t:x,id:w})}M.sort((w,v)=>w.t-v.t);let E=[{t:0,id:u.u},...M,{t:$,id:u.v}];for(let w=0;w+1<E.length;w++){let v=E[w],x=E[w+1],T=u.forward?v.t:$-x.t,B=u.forward?x.t:$-v.t;a.push({u:v.id,v:x.id,room:u.room,edge:u.edge,t0:T,t1:B})}}let l=new Map;for(let u of a){let h=u.u<u.v?`${u.u}-${u.v}`:`${u.v}-${u.u}`,g=l.get(h);g||l.set(h,g=[]),g.push(u)}let c=u=>({room_id:u.room,edge:u.edge,t0:u.t0,t1:u.t1}),d=[];for(let u of l.values()){let h=u[0],g=u.find(y=>y!==h&&y.u===h.v&&y.v===h.u&&y.room!==h.room);for(let y of u)y!==h&&y!==g&&y.room!==h.room&&n.push(`overlap:${h.room}:${y.room}`);g?d.push({a:h.u,b:h.v,left:e.interior/2,right:e.interior/2,exterior:!1,roomLeft:h.room,roomRight:g.room,sources:[c(h),c(g)]}):d.push({a:h.u,b:h.v,left:0,right:e.exterior,exterior:!0,roomLeft:h.room,roomRight:null,sources:[c(h)]})}d=zi(d,r);let p=Ri(d,r);return{walls:d.map((u,h)=>{let g=r[u.a],y=r[u.b],$=p.get(`${h}:a`),b=p.get(`${h}:b`),M=Di([$.right,b.left,y,b.right,$.left,g],1e-6);return{id:Ti(g,y),a:[g[0],g[1]],b:[y[0],y[1]],left:u.left,right:u.right,exterior:u.exterior,roomLeft:u.roomLeft,roomRight:u.roomRight,sources:u.sources,footprint:M}}),warnings:[...new Set(n)]}}function Ti(i,e){let t=o=>Math.round(o*100),[n,r]=i[0]<e[0]||i[0]===e[0]&&i[1]<=e[1]?[i,e]:[e,i];return`w_${t(n[0])}_${t(n[1])}_${t(r[0])}_${t(r[1])}`}function tr(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function zi(i,e){let t=i.slice(),n=!0;for(;n;){n=!1;let r=new Map;t.forEach((o,s)=>{for(let a of[o.a,o.b]){let l=r.get(a);l||r.set(a,l=[]),l.push(s)}});for(let[o,s]of r){if(s.length!==2)continue;let a=t[s[0]],l=t[s[1]];if(a.b!==o&&(a=tr(a)),l.a!==o&&(l=tr(l)),a.a===l.b)continue;let c=Te(W(e[a.b],e[a.a])),d=Te(W(e[l.b],e[l.a]));if(Math.abs(Ae(c,d))>1e-6||zt(c,d)<=0||a.exterior!==l.exterior||a.roomLeft!==l.roomLeft||a.roomRight!==l.roomRight||Math.abs(a.left-l.left)>1e-9||Math.abs(a.right-l.right)>1e-9)continue;let p={...a,b:l.b,sources:Ii(a.sources,l.sources)},f=t.filter((u,h)=>h!==s[0]&&h!==s[1]);f.push(p),t.length=0,t.push(...f),n=!0;break}}return t}function Ii(i,e){let t=i.map(n=>({...n}));for(let n of e){let r=t.find(o=>o.room_id===n.room_id&&o.edge===n.edge&&(Math.abs(o.t1-n.t0)<1e-6||Math.abs(n.t1-o.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):t.push({...n})}return t}function Ri(i,e){let t=new Map;i.forEach((r,o)=>{let s=Te(W(e[r.b],e[r.a])),a=[[r.a,{key:`${o}:a`,d:s,left:r.left,right:r.right,angle:Math.atan2(s[1],s[0])}],[r.b,{key:`${o}:b`,d:ie(s,-1),left:r.right,right:r.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a){let d=t.get(l);d||t.set(l,d=[]),d.push(c)}});let n=new Map;for(let[r,o]of t){let s=e[r];o.sort((c,d)=>c.angle-d.angle);let a=c=>({left:Ee(s,ie(Xn(c.d),c.left)),right:Ee(s,ie(er(c.d),c.right))});for(let c of o)n.set(c.key,a(c));if(o.length<2)continue;let l=4*Math.max(...o.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<o.length;c++){let d=o[c],p=o[(c+1)%o.length],f=Ee(s,ie(Xn(d.d),d.left)),u=Ee(s,ie(er(p.d),p.right)),h=Ae(d.d,p.d);if(Math.abs(h)<1e-4)continue;let g=Ae(W(u,f),p.d)/h,y=Ee(f,ie(d.d,g));Ve(W(y,s))>l||(n.get(d.key).left=y,n.get(p.key).right=y)}}return n}function Di(i,e){let t=i.filter((r,o)=>Ve(W(r,i[(o+1)%i.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let r=0;r<t.length;r++){let o=t[(r+t.length-1)%t.length],s=t[r],a=t[(r+1)%t.length],l=W(s,o),c=W(a,s);if(Math.abs(Ae(Te(l),Te(c)))<1e-7&&zt(l,c)>0){t=t.filter((d,p)=>p!==r),n=!0;break}}}return t}var oe=.03,Pi=.07;function ue(i,e=!1){if(!i)return null;let t=Number(i.state);if(!Number.isFinite(t))return null;let n=String(i.attributes.unit_of_measurement??"W"),r=n==="kW"?t*1e3:n==="MW"?t*1e6:t;return e?-r:r}function Fi(i,e){return e.startsWith("sensor.")&&i.states[e]?.attributes.device_class==="power"}function Rt(i,e){if(Fi(i,e))return e;let t=i.entities?.[e]?.device_id;return t?wt(i,t).find(n=>n!==e)??null:null}function ir(i,e){let t=e.energy,n=new Set([t.grid,t.solar,t.battery].filter(Boolean)),r=[],o=new Set;for(let s of e.floors)for(let a of s.placements){let l=Rt(i,a.entity_id);!l||n.has(l)||o.has(l)||(o.add(l),r.push({id:a.entity_id,powerEntity:l,floorId:s.id,x:a.x,z:a.z,power:Math.max(0,ue(i.states[l])??0)}))}return r}function or(i,e,t){let n=e.energy,r=n.grid?ue(i.states[n.grid],n.grid_invert):null,o=n.solar?ue(i.states[n.solar]):null,s=n.battery?ue(i.states[n.battery],n.battery_invert):null,a=n.battery_soc?Number(i.states[n.battery_soc]?.state):NaN,l=n.tariff?i.states[n.tariff]:void 0,c=Number(l?.state),d=null;return r!==null||o!==null||s!==null?d=Math.max(0,(r??0)+Math.max(0,o??0)+(s??0)):t.length&&(d=t.reduce((p,f)=>p+f.power,0)),{grid:r,solar:o===null?null:Math.max(0,o),battery:s,soc:Number.isFinite(a)?a:null,tariff:l&&Number.isFinite(c)?{value:c,unit:String(l.attributes.unit_of_measurement??"")}:null,consumption:d}}function Ue(i,e){return i.pos.push(e),i.adj.push([]),i.pos.length-1}function he(i,e,t){let n=Math.hypot(i.pos[e][0]-i.pos[t][0],i.pos[e][1]-i.pos[t][1]);i.adj[e].push({to:t,w:n}),i.adj[t].push({to:e,w:n})}function Hi(i,e){let t=i.length,n=i.map((r,o)=>{let s=i[(o+1)%t],a=s[0]-r[0],l=s[1]-r[1],c=Math.hypot(a,l)||1,d=-l/c,p=a/c;return{p:[r[0]+d*e[o],r[1]+p*e[o]],d:[a/c,l/c],n:[d,p]}});return i.map((r,o)=>{let s=n[(o-1+t)%t],a=n[o],l=s.d[0]*a.d[1]-s.d[1]*a.d[0];if(Math.abs(l)<1e-6)return[r[0]+a.n[0]*e[o],r[1]+a.n[1]*e[o]];let c=((a.p[0]-s.p[0])*a.d[1]-(a.p[1]-s.p[1])*a.d[0])/l;return[s.p[0]+s.d[0]*c,s.p[1]+s.d[1]*c]})}function Ci(i){return j(i.points)>=0?{pts:i.points,flipped:!1}:{pts:[...i.points].reverse(),flipped:!0}}function Li(i,e,t){let n={pos:[],adj:[],rings:new Map},{walls:r}=It(i.rooms,{exterior:e,interior:t});for(let o of i.rooms){if(o.points.length<3)continue;let{pts:s,flipped:a}=Ci(o),l=s.length,c=s.map((f,u)=>{let h=a?(l-2-u+l)%l:u,g=r.some(y=>!y.exterior&&y.sources.some($=>$.room_id===o.id&&$.edge===h));return Pi+(g?t/2:0)}),d=Hi(s,c).map(f=>Ue(n,f)),p=d.map((f,u)=>[f,d[(u+1)%l]]);for(let[f,u]of p)he(n,f,u);n.rings.set(o.id,p)}for(let o of r){if(o.exterior||!o.roomLeft||!o.roomRight)continue;let s=[(o.a[0]+o.b[0])/2,(o.a[1]+o.b[1])/2],a=Ke(n,o.roomLeft,s),l=Ke(n,o.roomRight,s);a!==null&&l!==null&&he(n,a,l)}return n}function Ke(i,e,t){let n=i.rings.get(e);if(!n)return null;let r=null;for(let s of n){let a=i.pos[s[0]],l=i.pos[s[1]],c=l[0]-a[0],d=l[1]-a[1],p=c*c+d*d||1,f=Math.min(1,Math.max(0,((t[0]-a[0])*c+(t[1]-a[1])*d)/p)),u=[a[0]+c*f,a[1]+d*f],h=Math.hypot(t[0]-u[0],t[1]-u[1]);(!r||h<r.d)&&(r={seg:s,q:u,d:h})}if(!r)return null;let o=Ue(i,r.q);return he(i,o,r.seg[0]),he(i,o,r.seg[1]),o}function nr(i,e){let t=i.rooms.filter(o=>o.points.length>=3),n=t.find(o=>R(e,o.points));if(n)return n;let r=null;for(let o of t)for(let s of o.points){let a=Math.hypot(e[0]-s[0],e[1]-s[1]);(!r||a<r.d)&&(r={room:o,d:a})}return r?.room??null}function Oi(i,e){let t=i.pos.map(()=>1/0),n=i.pos.map(()=>-1),r=i.pos.map(()=>!1);for(t[e]=0;;){let o=-1;for(let s=0;s<t.length;s++)!r[s]&&t[s]<1/0&&(o<0||t[s]<t[o])&&(o=s);if(o<0)break;r[o]=!0;for(let{to:s,w:a}of i.adj[o])t[o]+a<t[s]-1e-9&&(t[s]=t[o]+a,n[s]=o)}return{dist:t,prev:n}}var rr=new WeakMap;function Bi(i,e){let t=i.energy.meter,n=i.floors.find(d=>d.id===t.floor_id),r=[],{wall_exterior:o,wall_interior:s}=i.settings,a=new Map,l=new Map;e.forEach((d,p)=>l.set(d.floorId,[...l.get(d.floorId)??[],p]));let c=i.floors.filter(d=>l.has(d.id));for(let d of c){if(d.id===n.id)continue;let p=d.elevation>n.elevation,f=l.get(d.id),u=f.every(g=>e[g].kind==="battery")?"battery":"consumer";r.push({floorId:n.id,a:[t.x,oe,t.z],b:[t.x,p?n.height:-.2,t.z],dist:0,members:f,kind:u});let h=Math.abs(d.elevation-n.elevation);r.push({floorId:d.id,a:[t.x,p?-.2:d.height,t.z],b:[t.x,oe,t.z],dist:h,members:f,kind:u}),a.set(d.id,h+.25)}for(let d of c){let p=Li(d,o,s),f=nr(d,[t.x,t.z]);if(!f)continue;let u=Ue(p,[t.x,t.z]),h=Ke(p,f.id,[t.x,t.z]);if(h===null)continue;he(p,u,h);let g=[];for(let E of l.get(d.id)){let w=e[E],v=nr(d,[w.x,w.z]);if(!v)continue;let x=Ue(p,[w.x,w.z]),T=Ke(p,v.id,[w.x,w.z]);T!==null&&(he(p,x,T),g.push({node:x,member:E}))}let{dist:y,prev:$}=Oi(p,u),b=new Map;for(let E of g)if(Number.isFinite(y[E.node]))for(let w=E.node;$[w]>=0;w=$[w]){let v=$[w],x=`${v}>${w}`,T=b.get(x)??{a:v,b:w,members:[]};T.members.push(E.member),b.set(x,T)}let M=a.get(d.id)??0;for(let{a:E,b:w,members:v}of b.values()){let x=p.pos[E],T=p.pos[w],B=v.every(V=>e[V].kind==="battery")?"battery":"consumer";r.push({floorId:d.id,a:[x[0],oe,x[1]],b:[T[0],oe,T[1]],dist:M+y[E],members:v,kind:B})}}return r}function sr({building:i,consumers:e,summary:t,battery:n}){let r=i.energy.meter;if(!r)return[];let o=i.floors.find(u=>u.id===r.floor_id);if(!o)return[];let{wall_exterior:s,wall_interior:a}=i.settings,l=e.map(u=>({floorId:u.floorId,x:u.x,z:u.z,kind:"consumer",power:u.power}));n&&t.battery!==null&&l.push({...n,kind:"battery",power:Math.abs(t.battery)});let c=`${r.floor_id}:${r.x},${r.z}|${l.map(u=>`${u.floorId}:${u.x},${u.z}:${u.kind}`).join(";")}`,d=rr.get(i);d||rr.set(i,d=new Map);let p=d.get(c);p||(p=Bi(i,l),d.clear(),d.set(c,p));let f=p.map(u=>({floorId:u.floorId,a:u.a,b:u.b,dist:u.dist,power:u.members.reduce((h,g)=>h+l[g].power,0),kind:u.kind}));if(t.grid!==null){let{walls:u}=It(o.rooms,{exterior:s,interior:a}),h=null;for(let g of u){if(!g.exterior)continue;let y=g.b[0]-g.a[0],$=g.b[1]-g.a[1],b=y*y+$*$||1,M=Math.min(1,Math.max(0,((r.x-g.a[0])*y+(r.z-g.a[1])*$)/b)),E=[g.a[0]+y*M,g.a[1]+$*M],w=Math.hypot(r.x-E[0],r.z-E[1]),v=Math.sqrt(b);(!h||w<h.d)&&(h={q:E,out:[$/v,-y/v],d:w})}if(h){let g=[h.q[0]+h.out[0]*(s+1.4),oe,h.q[1]+h.out[1]*(s+1.4)],y=[r.x,oe,r.z],$=t.grid>=0;f.push({floorId:o.id,a:$?g:y,b:$?y:g,dist:0,power:Math.abs(t.grid),kind:$?"grid":"export"})}}if(t.solar!==null&&f.push({floorId:o.id,a:[r.x+.08,o.height+.6,r.z+.08],b:[r.x+.08,oe,r.z+.08],dist:0,power:t.solar,kind:"solar"}),t.battery!==null&&t.battery>0)for(let u of f)u.kind==="battery"&&([u.a,u.b]=[u.b,u.a]);return f}function ar(i,e){let t=[.22,.88,1],n=[1,.78,.2],r=[.35,1,.55];if(i==="grid")return t;if(i==="export"||i==="solar")return n;if(i==="battery")return r;let o=[[Math.max(0,e.grid??0),t],[Math.max(0,(e.solar??0)-Math.max(0,-(e.grid??0))-Math.max(0,-(e.battery??0))),n],[Math.max(0,e.battery??0),r]],[s]=o.reduce((a,l)=>l[0]>a[0]?l:a);return s>0?o.find(a=>a[0]===s)[1]:t}var Dt=["neon","blueprint","day"],Pt={neon:{night:[[11,17,32],[7,11,20]],day:[[26,44,78],[12,20,36]]},blueprint:{night:[[26,70,130],[10,38,78]],day:[[34,86,150],[14,48,96]]},day:{night:[[214,224,238],[176,190,210]],day:[[242,246,251],[205,216,230]]}};var ze={temperature:{deviceClass:"temperature",unit:"\xB0C",stops:[[17,[.24,.48,1]],[20.5,[.2,.9,.7]],[23,[1,.75,.25]],[25.5,[1,.32,.2]]]},humidity:{deviceClass:"humidity",unit:"%",stops:[[30,[1,.6,.2]],[45,[.3,.9,.5]],[60,[.2,.8,1]],[75,[.3,.4,1]]]},co2:{deviceClass:"carbon_dioxide",unit:"ppm",stops:[[450,[.3,.9,.5]],[800,[1,.85,.3]],[1200,[1,.5,.2]],[1600,[1,.25,.25]]]}};function lr(i,e){let t=ze[i].stops;if(e<=t[0][0])return t[0][1];for(let n=1;n<t.length;n++){let[r,o]=t[n],[s,a]=t[n-1];if(e<=r){let l=(e-s)/(r-s);return[a[0]+(o[0]-a[0])*l,a[1]+(o[1]-a[1])*l,a[2]+(o[2]-a[2])*l]}}return t[t.length-1][1]}function dr(i,e,t){let n=new Map,r=ze[t].deviceClass;for(let o of e.floors)for(let s of o.rooms){let a=D(i,s.area_id).filter(l=>l.startsWith("sensor.")&&i.states[l]?.attributes.device_class===r).map(l=>Number(i.states[l].state)).filter(l=>Number.isFinite(l));a.length&&n.set(s.id,a.reduce((l,c)=>l+c,0)/a.length)}return n}function cr(i){let e=ze[i].stops,t=e[0][0],n=e[e.length-1][0];return`linear-gradient(90deg, ${e.map(([r,o])=>`rgb(${o.map(s=>Math.round(s*255)).join(",")}) ${Math.round((r-t)/(n-t)*100)}%`).join(", ")})`}function Ie(i,e){if(!ft(e))return S(i,`furn_${e}`);let t=L(e);return t?xn(t,i?.language??navigator.language):S(i,"pack_missing_item")}var Ni=new Set(["on","home","true","present","occupied","detected","parked","yes","1"]);function qe(i){return i&&i!=="none"?i:null}function Wi(i,e){if(e.type!=="parking")return null;let t=qe(e.entity);if(t){let o=i.states[t];if(!o||!Ni.has(o.state.toLowerCase()))return null}let n=e.vehicle??null,r=qe(e.type_entity);if(r&&e.types?.length){let o=(i.states[r]?.state??"").trim().toLowerCase();if(o){let s=l=>l.trim().toLowerCase(),a=e.types.find(l=>s(l.state)===o)??e.types.find(l=>s(l.state)&&o.includes(s(l.state)));a&&(n=a.vehicle)}}return n&&L(n)?n:null}function Ft(i,e){let t=new Map;for(let n of e.floors)for(let r of n.furniture){let o=Wi(i,r);o&&t.set(r.id,o)}return t}function pr(i){return i.flatMap(e=>e.furniture.filter(t=>t.type==="parking").flatMap(t=>[qe(t.entity),qe(t.type_entity)])).filter(e=>!!e)}var je=1800*1e3,Vi=new Set(["motion","occupancy","presence"]);function ur(i,e){return e.startsWith("binary_sensor.")&&Vi.has(String(i.states[e]?.attributes.device_class))}function Ge(i,e){let t=[],n=new Set,r=(o,s,a,l)=>{n.has(o)||(n.add(o),t.push({entity:o,floorId:s,x:a,z:l}))};for(let o of e.floors)for(let s of o.placements)if(ur(i,s.entity_id))r(s.entity_id,o.id,s.x,s.z);else if(k(s.entity_id)==="camera")for(let a of Me(i,s.entity_id))r(a,o.id,s.x,s.z);for(let o of e.floors)for(let s of o.rooms){if(!s.area_id||s.points.length<3)continue;let[a,l]=ne(s.points);for(let c of D(i,s.area_id))ur(i,c)&&r(c,o.id,a,l)}return t}function hr(i,e,t,n=je){let r=t-n,o=[];for(let[s,a]of Object.entries(i)){let l="";for(let c of a){let d=(c.lc??c.lu)*1e3;c.s==="on"&&l!=="on"&&d>=r&&d<=t&&o.push({entity:s,time:d}),l=c.s}}for(let s of e){let a=s.lastChanged??NaN;s.state!=="on"||!(a>=r&&a<=t)||o.some(l=>l.entity===s.entity&&Math.abs(l.time-a)<2e3)||o.push({entity:s.entity,time:a})}return o.sort((s,a)=>s.time-a.time)}function fr(i,e,t,n=je){let r=new Map(i.map(s=>[s.entity,s])),o=[];for(let s of e){let a=r.get(s.entity);if(!a)continue;let l=o[o.length-1];l&&l.entity===s.entity&&s.time-l.time<6e4||o.push({...a,time:s.time,age:Math.min(1,Math.max(0,(t-s.time)/n))})}return o.slice(-40)}function mr(i,e){return new Date(e).toLocaleTimeString(i.language,{hour:"2-digit",minute:"2-digit"})}var gr='<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>';var Ze=i=>i.toLocaleLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");function _r(i,e){let t=[],n=$e(i,e.floors),r=e.floors.length>1;for(let o of e.floors){let s=(d,p)=>o.rooms.find(f=>f.points.length>=3&&R([d,p],f.points))??null,a=(d,p)=>[s(d,p)?.name,r?o.name:null].filter(Boolean).join(" \xB7 ");for(let d of o.rooms){if(d.points.length<3)continue;let[p,f]=ne(d.points);t.push({kind:"room",name:d.name,where:r?o.name:"",floorId:o.id,roomId:d.id,entity:null,icon:null,x:p,z:f,y:0})}let l=new Set,c=(d,p,f,u)=>{l.has(d)||!i.states[d]||(l.add(d),t.push({kind:"device",name:I(i,d),where:a(p,f),floorId:o.id,roomId:s(p,f)?.id??null,entity:d,icon:k(d),x:p,z:f,y:u}))};for(let d of o.placements)c(d.entity_id,d.x,d.z,d.y??ce(k(d.entity_id)??"sensor",o.height,d.mount));for(let d of o.furniture){let p=n.get(d.id),f=p?.entity??p?.power;f&&c(f,d.x,d.z,Math.min(o.height-.3,Math.max(.5,d.h)))}}return t}function br(i,e,t=8){let n=Ze(e).split(/\s+/).filter(Boolean);if(!n.length)return[];let r=i.filter(a=>{let l=Ze(`${a.name} ${a.where} ${a.entity??""}`);return n.every(c=>l.includes(c))}),o=Ze(e.trim()),s=a=>(Ze(a.name).startsWith(o)?0:2)+(a.kind==="room"?0:1);return r.sort((a,l)=>s(a)-s(l)||a.name.localeCompare(l.name)).slice(0,t)}var Ui=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[190,90,255],[255,95,210],[255,70,70],[120,255,150]],Ki=[2200,2700,3200,4e3,5e3,6500],qi=["hs","rgb","rgbw","rgbww","xy"],ji=4;function Ct(i){let e=i.attributes.supported_color_modes??[],t=e.some(n=>qi.includes(n));return{dim:e.some(n=>n!=="onoff"),color:t,temp:e.includes("color_temp")}}function Lt(i){return((i.attributes.supported_features??0)&ji)!==0&&typeof i.attributes.current_position=="number"}var Ht=class extends H{static properties={hass:{attribute:!1},entity:{attribute:!1},low:{type:Boolean,reflect:!0},_tick:{state:!0}};tickTimer;connectedCallback(){super.connectedCallback(),this._tick=0,this.tickTimer=setInterval(()=>{k(this.entity)==="camera"&&!document.hidden&&this._tick++},3e3)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.tickTimer)}renderCamera(e){let t=e.attributes.entity_picture,n=t?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this._tick}`:null;return m`<button class="qm-camera" title=${this.t("camera_live")} @click=${()=>this.details()}>
        ${n?m`<img src=${n} alt=${I(this.hass,this.entity)} />`:m`<span class="qm-note">${P(this.hass,e)}</span>`}
      </button>
      <button class="qm-details qm-look" @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:this.entity},bubbles:!0,composed:!0}))}>
        ${this.t("through_camera")}
      </button>`}t(e,t){return S(this.hass,e,t)}call(e,t,n={}){this.hass.callService(e,t,{entity_id:this.entity,...n})}close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}details(){Z(this,this.entity),this.close()}ring(e){let t=e.length;return e.map((n,r)=>{let o=r/t*Math.PI*2-Math.PI/2;return m`<div class="qm-at" style="left:${50+Math.cos(o)*39}%;top:${50+Math.sin(o)*39}%">${n}</div>`})}renderLight(e){let t=Ct(e),n=e.state==="on",r=n&&typeof e.attributes.brightness=="number"?Math.round(e.attributes.brightness/2.55):n?100:0,o=t.color?Ui.map(s=>m`<button class="qm-swatch" style="background:rgb(${s.join(",")})" aria-label=${`RGB ${s.join(", ")}`} @click=${()=>this.call("light","turn_on",{rgb_color:s})}></button>`):t.temp?Ki.map(s=>m`<button class="qm-swatch" style="background:${Gi(s)}" aria-label=${`${s} K`} @click=${()=>this.call("light","turn_on",{color_temp_kelvin:s})}></button>`):[];return m`<div class="qm-ring ${o.length?"":"qm-ring-small"}">
        ${this.ring(o)}
        <button class="qm-power ${n?"qm-on":""}" aria-pressed=${n} @click=${()=>this.call("light","toggle")}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
          <b>${n?`${r} %`:this.t("qm_off")}</b>
        </button>
      </div>
      ${t.dim?m`<input
            class="qm-slider"
            type="range"
            min="1"
            max="100"
            .value=${String(Math.max(1,r))}
            aria-label=${this.t("brightness")}
            @change=${s=>this.call("light","turn_on",{brightness_pct:Number(s.target.value)})}
          />`:_}`}renderCover(e){let t=typeof e.attributes.current_position=="number"?e.attributes.current_position:null,n=e.state==="opening"||e.state==="closing",r=Lt(e),o=(c,d,p,f=!1)=>m`<button class="qm-swatch qm-slot ${f?"qm-slot-on":""}" aria-label=${d} @click=${p}>${c}</button>`,s=c=>t!==null&&Math.abs(t-c)<3,a=[o("\u25B2",this.t("cover_open"),()=>this.call("cover","open_cover"),s(100)),...r?[75,50].map(c=>o(`${c}`,`${c} %`,()=>this.call("cover","set_cover_position",{position:c}),s(c))):[],o("\u25BC",this.t("cover_close"),()=>this.call("cover","close_cover"),s(0)),...r?[25].map(c=>o(`${c}`,`${c} %`,()=>this.call("cover","set_cover_position",{position:c}),s(c))):[],o("\u25A0",this.t("cover_stop"),()=>this.call("cover","stop_cover"),n)],l=t===null?e.state==="closed"?100:0:100-t;return m`<div class="qm-ring">
        ${this.ring(a)}
        <button
          class="qm-power qm-blind ${l<100?"qm-on":""}"
          style="--closed:${l}%"
          aria-label=${n?this.t("cover_stop"):l>50?this.t("cover_open"):this.t("cover_close")}
          @click=${()=>this.call("cover",n?"stop_cover":l>50?"open_cover":"close_cover")}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16M5 4v15M19 4v15M7 8h10M7 12h10M7 16h10" /></svg>
          <b>${t!==null?`${t} %`:P(this.hass,e)}</b>
        </button>
      </div>
      ${r?m`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(t??0)}
            aria-label=${this.t("position")}
            @change=${c=>this.call("cover","set_cover_position",{position:Number(c.target.value)})}
          />`:_}`}renderToggle(e){let t=e.state==="on"||e.state==="unlocked"||e.state==="playing",n=e.entity_id.split(".")[0];return m`<div class="qm-ring qm-ring-small">
      <button
        class="qm-power ${t?"qm-on":""}"
        aria-pressed=${t}
        @click=${()=>n==="lock"?this.call("lock",t?"lock":"unlock"):this.call("homeassistant","toggle")}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
        <b>${P(this.hass,e)}</b>
      </button>
    </div>`}render(){let e=this.hass?.states[this.entity];if(!e)return _;let t=k(this.entity),n=z(e)?m`<p class="qm-note">${P(this.hass,e)}</p>`:t==="light"?this.renderLight(e):t==="cover"?this.renderCover(e):t==="camera"?this.renderCamera(e):this.renderToggle(e);return m`<div class="qm" role="dialog" aria-label=${I(this.hass,this.entity)}>
      <div class="qm-title">${I(this.hass,this.entity)}</div>
      ${n}
      <button class="qm-details" @click=${()=>this.details()}>${this.t("details")} …</button>
    </div>`}static styles=[N,C`
      .qm-camera {
        display: block;
        width: 100%;
        padding: 0;
        margin: 6px 0 8px;
        border: 0;
        border-radius: 12px;
        overflow: hidden;
        background: #000;
        cursor: pointer;
      }
      .qm-camera img {
        display: block;
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
      }
      .qm:has(.qm-camera) {
        width: 300px;
      }
      .qm {
        width: 232px;
        padding: 12px 14px 10px;
        border-radius: 22px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow), 0 0 0 1px var(--fp3d-line);
        backdrop-filter: blur(10px);
      }
      :host([low]) .qm {
        backdrop-filter: none;
        box-shadow: 0 0 0 1px var(--fp3d-line);
        animation: none;
        color: var(--fp3d-text);
        text-align: center;
        animation: qm-in 140ms ease-out;
      }
      @keyframes qm-in {
        from {
          opacity: 0;
          transform: scale(0.85);
        }
      }
      .qm-title {
        font: 700 14.5px var(--fp3d-title-font);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .qm-ring {
        position: relative;
        width: 196px;
        height: 196px;
        margin: 6px auto 4px;
        display: grid;
        place-items: center;
      }
      .qm-ring-small {
        height: 110px;
      }
      .qm-at {
        position: absolute;
        transform: translate(-50%, -50%);
      }
      .qm-swatch {
        width: 34px;
        height: 34px;
        border: 2px solid rgba(255, 255, 255, 0.25);
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 0 12px rgba(0, 0, 0, 0.35);
      }
      .qm-swatch:active {
        transform: scale(0.9);
      }
      .qm-power {
        display: grid;
        place-items: center;
        gap: 2px;
        width: 88px;
        height: 88px;
        border: 0;
        border-radius: 50%;
        background: var(--fp3d-bg2, #16223a);
        color: var(--fp3d-muted);
        box-shadow: inset 0 0 0 2px var(--fp3d-line);
        cursor: pointer;
        font: inherit;
      }
      .qm-power b {
        font: 700 15px var(--fp3d-title-font);
        color: var(--fp3d-text);
      }
      .qm-power small {
        font-size: 11px;
      }
      .qm-on {
        color: #1a1204;
        background: var(--fp3d-warm);
        box-shadow: 0 0 24px rgba(255, 181, 71, 0.55);
      }
      .qm-on b {
        color: #1a1204;
      }
      .qm-slot {
        display: grid;
        place-items: center;
        border-color: var(--fp3d-line);
        background: var(--fp3d-bg2, #16223a);
        color: var(--fp3d-text);
        font: 700 12px var(--fp3d-title-font);
      }
      .qm-slot-on {
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        border-color: transparent;
        box-shadow: 0 0 14px rgba(55, 224, 255, 0.45);
      }
      /* the blind: its closed part covers the circle from the top, the open part glows like daylight */
      .qm-blind.qm-on {
        background: linear-gradient(to bottom, #1e2c4c var(--closed), #9fd9ff var(--closed));
        box-shadow: 0 0 22px rgba(120, 200, 255, 0.4);
        color: #06101f;
      }
      .qm-blind b {
        text-shadow: 0 0 6px rgba(0, 0, 0, 0.6);
        color: #fff;
      }
      .qm-round {
        width: 46px;
        height: 46px;
        border: 0;
        border-radius: 50%;
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        font-size: 17px;
        cursor: pointer;
      }
      .qm-slider {
        width: 100%;
        margin: 4px 0 6px;
        accent-color: var(--fp3d-accent);
      }
      .qm-look {
        display: block;
        width: 100%;
        margin-top: -4px;
      }
      .qm-details {
        border: 0;
        background: none;
        color: var(--fp3d-accent);
        font: inherit;
        font-size: 13px;
        padding: 6px;
        cursor: pointer;
      }
      .qm-note {
        color: var(--fp3d-muted);
      }
    `]};function Gi(i){let e=Math.min(1,Math.max(0,(i-2200)/4300)),t=(n,r)=>Math.round(n+(r-n)*e);return`rgb(${t(255,200)},${t(170,225)},${t(80,255)})`}customElements.get("fp3d-quick-menu")||customElements.define("fp3d-quick-menu",Ht);var Zi=new URL(import.meta.url),Yi=new URL("./neonplan3d-3d.js?v=6108bc795a9c",Zi).href,vr;function wr(){return vr??=import(Yi),vr}var yr=i=>i.toLowerCase().replace(/[_\-]+/g," ").replace(/\s+/g," ").trim();function Ji(i,e,t){let n=yr(t);if(!n||n==="unknown"||n==="unavailable"||n==="not home"||n==="away")return null;for(let r of e.floors)for(let o of r.rooms)if([o.name,o.area_id??"",o.area_id?i.areas?.[o.area_id]?.name??"":""].filter(Boolean).map(yr).includes(n))return{floorId:r.id,room:o};return null}function Qi(i){let e=i.trim().split(/\s+/).filter(Boolean);return e.length?(e.length>1?e[0][0]+e[e.length-1][0]:e[0].slice(0,2)).toUpperCase():"?"}function xr(i,e){let t=[],n=new Map;for(let r of e.presence){let o=i.states[r.person];if(!o||!r.sensor||o.state!=="home"&&o.state!=="on")continue;let s=i.states[r.sensor];if(!s)continue;let a=Ji(i,e,s.state);if(!a)continue;let l=n.get(a.room.id)??0;n.set(a.room.id,l+1);let[c,d]=ne(a.room.points),p=-Math.PI/2+.9+l*1.15,f=.75,u=o.attributes.friendly_name??r.person;t.push({id:r.person,name:u,initials:Qi(u),picture:o.attributes.entity_picture??null,floorId:a.floorId,roomId:a.room.id,x:c+Math.cos(p)*f,z:d+Math.sin(p)*f})}return t}function kr(i,e,t,n){let r=new Map,o=s=>!!s&&i.states[s]?.state==="on";for(let s of e.floors){let a=new Set;for(let c of s.rooms)for(let d of kt(i,D(i,c.area_id)))k(d)==="light"&&a.add(d);for(let c of s.placements)k(c.entity_id)==="light"&&a.add(c.entity_id);let l=s.openings.filter(c=>{let d=t.get(c.id);if(!d)return!1;if(c.type==="garage")return(re(i,d,"garage").cover??1)<.95;if(c.type==="door")return o(d.contact)||o(d.contact2??null);let p=re(i,d,"window");return p.open>.5||p.tilt>.5||p.open2>.5||p.tilt2>.5}).length;r.set(s.id,{rooms:s.rooms.length,lightsOn:[...a].filter(c=>i.states[c]?.state==="on").length,open:l,persons:n.filter(c=>c.floorId===s.id).length})}return r}function $r(i,e){let t=[e.rooms===1?S(i,"floor_rooms_one"):S(i,"floor_rooms",{n:e.rooms})];return e.lightsOn&&t.push(S(i,"floor_lights",{n:e.lightsOn})),e.open&&t.push(S(i,"floor_open",{n:e.open})),e.persons&&t.push(S(i,"floor_persons",{n:e.persons})),t.join(" \xB7 ")}var Ot=class extends H{static properties={hass:{attribute:!1},building:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},wallMode:{attribute:!1},explode:{type:Boolean},markerMode:{attribute:!1},heatMode:{attribute:!1},theme:{attribute:!1},packs:{attribute:!1},showEnergy:{attribute:!1},flows:{attribute:!1},furnish:{type:Boolean},trail:{type:Boolean},selectedFurniture:{attribute:!1},selectedDevice:{attribute:!1},_sky:{state:!0},quality:{attribute:!1},showStats:{type:Boolean},_stats:{state:!0},_error:{state:!0},_energy:{state:!0},_flows:{state:!0},_swipe:{state:!0},_menu:{state:!0},_through:{state:!0},_blend:{state:!0},_find:{state:!0},_thumbs:{state:!0},floorThumbs:{attribute:!1},roomLabels:{attribute:!1},floorStack:{attribute:!1},panelOpen:{attribute:!1},alerts:{attribute:!1},alertJump:{attribute:!1},scenes:{attribute:!1},dimmed:{attribute:!1},autoOrbit:{attribute:!1},_low:{state:!0},_narrowStage:{state:!0},_alerts:{state:!0},_sceneFired:{state:!0}};trailRows={};trailTimer;resizeObs=null;alertSrc=null;alertTimer;seenAlerts=new Set;roomFlash=null;findIndex=null;tintSig="";thumbTimer;thumbSig="";thumbsAt=0;swipeSent=0;swipeTimer;viewer=null;starting=!1;shownStates=new Map;shownPacks=-1;openingLinks=null;linkedRegistry;furnitureLinks=new Map;heatValues=new Map;watched=[];pictureUrls=new Map;cameraTick=0;cameraTimer;cameraScreens=0;throughFloor=null;constructor(){super(),this.building=null,this.floorId=null,this.roomId=null,this.wallMode="auto",this.explode=!0,this.markerMode="important",this.heatMode="none",this.theme="neon",this.furnish=!1,this.trail=!1,this.showEnergy=!0,this.flows=null,this.selectedFurniture=null,this.selectedDevice=null,this._sky=0,this.quality="auto",this.showStats=!1,this._stats=null,this._error=null,this._energy=null,this._swipe=null,this._menu=null,this._through=null,this._blend=.6,this._find=null,this._thumbs=[],this.floorThumbs=!0,this.roomLabels=!0,this.floorStack="dim",this._low=!1,this.panelOpen=!1,this._narrowStage=!1,this.alerts=!0,this.alertJump=!1,this._alerts=[],this.scenes=!0,this._sceneFired=null,this.dimmed=!1,this.autoOrbit=!1;try{this._flows=localStorage.getItem("neonplan3d.flows")==="1"}catch{this._flows=!1}}connectedCallback(){super.connectedCallback(),this.hasUpdated&&(this.observeStage(),this.viewer||this.start())}disconnectedCallback(){super.disconnectedCallback(),this.resizeObs?.disconnect(),this.resizeObs=null,clearInterval(this.alertTimer),this.alertTimer=void 0,clearInterval(this.cameraTimer),this.cameraTimer=void 0,clearInterval(this.trailTimer),this.trailTimer=void 0,this.viewer?.dispose(),this.viewer=null}firstUpdated(){this.observeStage(),this.start()}observeStage(){let e=this.renderRoot.querySelector(".fp3d-stage");!e||this.resizeObs||typeof ResizeObserver!="function"||(this.resizeObs=new ResizeObserver(t=>{let n=(t[0]?.contentRect.width??1e3)<700;n!==this._narrowStage&&(this._narrowStage=n,this.scheduleThumbs())}),this.resizeObs.observe(e))}async start(){if(!(this.starting||this.viewer)){this.starting=!0;try{let e=await wr();if(!this.isConnected)return;let t=this.renderRoot.querySelector(".fp3d-stage");this.viewer=e.createViewer(t,{quality:this.quality,explode:this.explode,onRoomTap:(n,r)=>this.fire("room-tap",{floorId:n,roomId:r}),onFloorTap:n=>this.fire("floor-tap",{floorId:n}),floorInfo:n=>n.rooms.length===1?S(this.hass,"floor_rooms_one"):S(this.hass,"floor_rooms",{n:n.rooms.length}),onBack:()=>this.fire("back",{}),onDeviceTap:(n,r,o)=>this.onDeviceTap(n,r,o),onDeviceHold:(n,r,o)=>this.onDeviceHold(n,r,o),onRoomDoubleTap:(n,r)=>this.onRoomDoubleTap(n,r),onDeviceSwipe:(n,r,o,s,a)=>this.onDeviceSwipe(n,r,o,s,a),onFurnitureSelect:n=>this.fire("furniture-select",{id:n}),onFurnitureMove:(n,r,o)=>this.fire("furniture-move",{id:n,x:r,z:o}),onDeviceSelect:n=>this.fire("device-select",{id:n}),onDeviceMove:(n,r,o)=>this.fire("device-move",{id:n,x:r,z:o}),onStats:n=>{this.showStats&&(this._stats=n)}}),this.viewer.setWallMode(this.wallMode),this.viewer.setTheme(this.theme),this.viewer.setFurnishMode(this.furnish),this.viewer.setFloorStack(this.floorStack),this.viewer.setStats(this.showStats),this.viewer.setAutoOrbit(this.autoOrbit?.06:0),this._low=this.viewer.low,this.viewer.setPacks([...ht()]),this.shownPacks=Ce(),this.building&&this.viewer.setBuilding(this.building),this.scheduleThumbs(),this.syncDevices(!0),this.viewer.setFloor(this.floorId,!1),this.roomId&&this.viewer.selectRoom(this.roomId)}catch(e){this._error=String(e)}finally{this.starting=!1}}}updated(e){let t=this.viewer;if(!t)return;this._through&&(e.has("roomId")||e.has("floorId"))&&(this.floorId===this.throughFloor?this.throughFloor=null:this._through=null),this.shownPacks!==Ce()&&(this.shownPacks=Ce(),t.setPacks([...ht()]),this.hass&&this.building&&t.setParked(Ft(this.hass,this.building))),e.has("building")&&this.building&&t.setBuilding(this.building),(e.has("building")||e.has("theme")||e.has("floorThumbs")||e.has("packs"))&&this.scheduleThumbs();let n=["building","markerMode","heatMode","flows","alerts","dimmed"].some(r=>e.has(r));(n||e.has("hass"))&&this.syncDevices(n),e.has("autoOrbit")&&t.setAutoOrbit(this.autoOrbit?.06:0),(e.has("_thumbs")||e.has("_narrowStage"))&&t.setLabelInset(this._thumbs.length?this.narrowThumbs?136:184:0),e.has("floorId")&&t.setFloor(this.floorId),e.has("roomId")&&(this.roomId||e.get("roomId"))&&t.selectRoom(this.roomId),e.has("wallMode")&&t.setWallMode(this.wallMode),e.has("explode")&&t.setExplode(this.explode),e.has("floorStack")&&t.setFloorStack(this.floorStack),e.has("theme")&&t.setTheme(this.theme),e.has("furnish")&&(t.setFurnishMode(this.furnish),this.syncDevices(!0)),e.has("selectedFurniture")&&t.selectFurniture(this.selectedFurniture),e.has("selectedDevice")&&t.setSelectedDevice(this.selectedDevice),e.has("trail")&&this.watchTrail(),e.has("quality")&&e.get("quality")!==void 0&&(t.setQuality(this.quality),this._low=t.low),e.has("showStats")&&t.setStats(this.showStats),e.has("building")&&(this.findIndex=null)}syncDevices(e){let t=this.viewer,n=this.building;if(!t||!n||!this.hass)return;let r=this.hass;if(e||!this.openingLinks||this.linkedRegistry!==r.entities){this.openingLinks=yt(r,n.floors),this.furnitureLinks=$e(r,n.floors),this.linkedRegistry=r.entities,this.findIndex=null;let v=[...this.openingLinks.values()].flatMap(A=>[A.cover,A.contact,A.tilt,A.contact2??null,A.tilt2??null,A.position??null]),x=qn(n),T=x.filter(A=>k(A)==="camera").flatMap(A=>Me(r,A)),B=x.map(A=>Rt(r,A)),V=n.energy,Re=n.presence.flatMap(A=>[A.person,A.sensor]),Je=n.floors.flatMap(A=>A.rooms.flatMap(K=>D(r,K.area_id).filter(J=>k(J)==="light"))),Qe=[...this.furnitureLinks.values()].flatMap(A=>[A.entity,A.power]),Tr=n.floors.flatMap(A=>A.furniture.flatMap(K=>[K.door_left??null,K.door_right??null])),zr=n.floors.flatMap(A=>A.furniture.flatMap(K=>(K.pictures??[]).flatMap(J=>[J.entity,...J.image.startsWith("camera:")?[J.image.slice(7)]:[]]))),Ir=this.heatMode==="none"?[]:n.floors.flatMap(A=>A.rooms.flatMap(K=>D(r,K.area_id).filter(J=>J.startsWith("sensor."))));this.alertSrc=this.alerts?Zn(r,n):null;let Rr=this.alertSrc?Yn(this.alertSrc):[],Dr=pr(n.floors),Pr=Ge(r,n).map(A=>A.entity),Fr=[...x,...T,...v,...B,...Qe,...Tr,...zr,V.grid,V.solar,V.battery,V.battery_soc,V.tariff,...Re,...Je,...Ir,...Rr,...Dr,...Pr,"sun.sun"];this.watched=[...new Set(Fr.filter(A=>!!A))],e=!0}if(!(e||this.watched.some(v=>this.shownStates.get(v)!==r.states[v])))return;this.shownStates=new Map(this.watched.map(v=>[v,r.states[v]]));let s=ir(r,n),a=Kn(r,n),l=this.furnitureMarkers(r,n,new Set(a.map(v=>v.id)),new Set(s.map(v=>v.powerEntity)));s.push(...l.consumers);let c=or(r,n,s),d=new Map(s.filter(v=>v.id!==v.powerEntity).map(v=>[v.id,v.power])),p=this.trail?this.trailNow(r,n):[];t.setDevices([...[...a,...l.markers].map(v=>{let x=d.get(v.id)??null,T={...v,power:x,powerText:x===null?void 0:fe(r,x),effect:this.dimmed?!1:v.effect};return{...T,pin:this.showPin(T)}}),...p.map((v,x)=>({id:`trail:${x}`,floorId:v.floorId,roomId:null,x:v.x,z:v.z,y:.3+.4*p.slice(0,x).filter(T=>T.entity===v.entity).length,icon:gr,name:I(r,v.entity),text:mr(r,v.time),active:!1,unavailable:!1,glow:null,pin:!0}))]),t.setTrail(p),t.setPickTargets(l.targets,this.openingTargets()),t.setScreens(l.screens),t.setFridgeDoors(St(r,n.floors)),t.setRobots(this.robotInfos(r,n)),t.setParked(Ft(r,n));let f=new Map(n.floors.flatMap(v=>v.openings.map(x=>[x.id,x.type]))),u=new Map([...this.openingLinks].map(([v,x])=>[v,re(r,x,f.get(v))]));t.setOpeningStates(u),this.setAlerts(this.alertSrc?Jn(r,n,this.alertSrc,this.openingLinks):[]);let h=[...a,...l.markers].map(v=>`${v.id}:${v.glow?`${v.glow.level.toFixed(1)}/${v.glow.color.map(x=>x.toFixed(1)).join("/")}`:0}`).join(";")+"|"+[...u].map(([v,x])=>`${v}:${x.open}:${x.cover===null?"-":x.cover.toFixed(1)}`).join(";");if(h!==this.thumbSig){let v=this.thumbSig==="";this.thumbSig=h,v||this.scheduleThumbs(1500)}let g=n.energy.battery?n.floors.flatMap(v=>v.placements.filter(x=>x.entity_id===n.energy.battery).map(x=>({floorId:v.id,x:x.x,z:x.z})))[0]:null;t.setFlows(!(this.flows??this._flows)||this.dimmed?[]:sr({building:n,consumers:s,summary:c,battery:g??null}).map(v=>({floorId:v.floorId,a:v.a,b:v.b,dist:v.dist,power:v.power,color:ar(v.kind,c)})));let y=xr(r,n);t.setPersons(y);let $=kr(r,n,this.openingLinks,y);t.setFloorInfo(new Map([...$].map(([v,x])=>[v,$r(r,x)])));let b=r.states["sun.sun"]?.attributes,M=typeof b?.elevation=="number"?b.elevation:null;t.setSun(M!==null&&typeof b?.azimuth=="number"?{elevation:M,azimuth:b.azimuth}:null),this._sky=M===null?0:Math.min(1,Math.max(0,(M+4)/16)),this.applyTint();let w=c.grid!==null||c.solar!==null||c.battery!==null||c.tariff!==null?c:null;JSON.stringify(w)!==JSON.stringify(this._energy)&&(this._energy=w)}setAlerts(e){let t=e.map(r=>`${r.kind}:${r.entity}`),n=e.filter((r,o)=>!this.seenAlerts.has(t[o]));this.seenAlerts=new Set(t),t.join()!==this._alerts.map(r=>`${r.kind}:${r.entity}`).join()&&(this._alerts=e),e.length&&!this.alertTimer&&(this.alertTimer=setInterval(()=>!document.hidden&&this.applyTint(),this._low?200:100)),!e.length&&this.alertTimer&&(clearInterval(this.alertTimer),this.alertTimer=void 0),n.length&&this.alertJump&&this.jumpTo(n[0])}jumpTo(e){if(!e.floorId){this.fire("floor-tap",{floorId:null});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),e.roomId&&setTimeout(()=>this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId}),60)}onRoomDoubleTap(e,t){let n=this.building,r=this.hass,o=n?.floors.find(d=>d.id===e),s=o?.rooms.find(d=>d.id===t);if(!n||!r||!o||!s)return;let a=new Set(D(r,s.area_id).filter(d=>k(d)==="light"));for(let d of o.placements)k(d.entity_id)==="light"&&R([d.x,d.z],s.points)&&a.add(d.entity_id);for(let d of o.furniture){let p=this.furnitureLinks.get(d.id)?.entity;p&&mt(d.type)&&R([d.x,d.z],s.points)&&a.add(p)}let l=[...a];if(!l.length)return;let c=l.some(d=>r.states[d]?.state==="on");r.callService("homeassistant",c?"turn_off":"turn_on",{entity_id:l}),this.roomFlash={roomId:t,until:performance.now()+350},this.applyTint(),setTimeout(()=>{this.roomFlash=null,this.applyTint()},380)}runScene(e){this.hass.callService(e.split(".")[0],"turn_on",{entity_id:e}),this._sceneFired=e,setTimeout(()=>this._sceneFired=null,600)}applyTint(){let e=this.viewer,t=this.building,n=this.hass;if(!e||!t||!n)return;let r=null;if(this.heatMode!=="none"){let s=this.heatMode,a=dr(n,t,s);this.heatValues=a,r=new Map([...a].map(([l,c])=>[l,lr(s,c)]))}if(this._alerts.length){r??=new Map;let s=.55+.45*Math.sin(performance.now()/160);for(let a of this._alerts){let l=Qn(a.kind).map(c=>c*s);if(a.roomId)r.set(a.roomId,l);else for(let c of t.floors)for(let d of c.rooms)r.set(d.id,l)}}this.roomFlash&&performance.now()<this.roomFlash.until&&(r??=new Map,r.set(this.roomFlash.roomId,[.9,.95,1]));let o=r?[...r].map(([s,a])=>`${s}:${a.map(l=>l.toFixed(2)).join(",")}`).join(";"):"";o!==this.tintSig&&(this.tintSig=o,e.setRoomTint(r))}furnitureMarkers(e,t,n,r){let o=[],s=[],a=new Map,l=new Map;for(let d of t.floors)for(let p of d.furniture){let f=this.furnitureLinks.get(p.id);if(mt(p.type)){o.push(this.lampMarker(e,d,p,f?.entity??null));continue}if(!f)continue;l.set(p.id,f.entity??f.power);let u=f.entity??f.power,h=f.entity?e.states[f.entity]:void 0,g=f.power?ue(e.states[f.power]):null;f.power&&g!==null&&!r.has(f.power)&&(r.add(f.power),s.push({id:u,powerEntity:f.power,floorId:d.id,x:p.x,z:p.z,power:Math.max(0,g)}));let y=(g??0)>10||h?.state==="on"||h?.state==="running";if(p.type==="radiator"&&h&&k(h.entity_id)==="climate"){let M=h.attributes;if(M.hvac_action==="heating"){let E=typeof M.temperature=="number"&&typeof M.current_temperature=="number"?M.temperature-M.current_temperature:1;a.set(p.id,{color:[1,.42,.1],level:Math.min(1,.45+.25*Math.max(0,E))})}}else(p.type==="washer"||p.type==="dryer"||p.type==="dishwasher")&&y&&a.set(p.id,{color:[.3,.85,1],level:.8});if(h&&$t(p.type)){let M=k(h.entity_id)==="media"?Nn(h):de(h)?[.22,.88,1]:null,E=k(h.entity_id)==="media"?h.attributes.entity_picture??null:null;M&&a.set(p.id,{color:M,level:h.state==="playing"?1:.6,picture:E})}if(n.has(u))continue;n.add(u);let $=f.entity?k(f.entity):null,b=d.rooms.find(M=>M.points.length>=3&&R([p.x,p.z],M.points));o.push({id:u,floorId:d.id,roomId:b?.id??null,x:p.x,z:p.z,y:Xi(p)+xe(d,p),icon:Se($??"switch"),name:f.entity?I(e,f.entity):Ie(e,p.type),text:h?P(e,h):g!==null?fe(e,Math.max(0,g)):"",active:h?de(h):(g??0)>5,unavailable:h?z(h):!1,glow:null,fromFurniture:!0})}this.cameraScreens=0;let c=St(e,t.floors);for(let d of t.floors)for(let p of d.furniture){if(!p.pictures?.length||!$t(p.type)||p.type==="fridge_smart"&&c.get(p.id)?.right)continue;let f=p.pictures.find(g=>On(e,g));if(!f)continue;let u=this.pictureUrl(f.image),h=p.screen_bg==="white"?[.92,.94,1]:[.08,.08,.1];u&&a.set(p.id,{color:h,level:1,picture:u,plain:!0})}return this.watchCameras(this.cameraScreens>0||!!this._through),{markers:o,consumers:s,screens:a,targets:l}}trailNow(e,t){let n=Date.now(),r=Ge(e,t),o=r.map(s=>{let a=e.states[s.entity];return{entity:s.entity,state:a?.state,lastChanged:a?.last_changed?Date.parse(a.last_changed):void 0}});return fr(r,hr(this.trailRows,o,n),n)}watchTrail(){if(clearInterval(this.trailTimer),this.trailTimer=void 0,!this.trail){this.trailRows={},this.syncDevices(!0);return}let e=async()=>{let t=this.hass,n=this.building;if(!t||!n||document.hidden)return;let r=Ge(t,n).map(o=>o.entity);if(r.length){try{let o=await t.callWS({type:"history/history_during_period",start_time:new Date(Date.now()-je).toISOString(),entity_ids:r,minimal_response:!0,no_attributes:!0,significant_changes_only:!1});this.trailRows=o??{}}catch{this.trailRows={}}this.syncDevices(!0)}};e(),this.trailTimer=setInterval(()=>{e()},6e4)}watchCameras(e){e&&!this.cameraTimer?this.cameraTimer=setInterval(()=>{document.hidden||(this.cameraTick++,this.syncDevices(!0),this._through&&this.requestUpdate())},this._low?1e4:5e3):!e&&this.cameraTimer&&(clearInterval(this.cameraTimer),this.cameraTimer=void 0)}pictureUrl(e){if(/^https?:\/\//.test(e))return e;if(e.startsWith("camera:")){let t=this.hass.states[e.slice(7)],n=t?.attributes.entity_picture;return!n||z(t)?null:(this.cameraScreens++,n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this.cameraTick}`)}return this.pictureUrls.has(e)?this.pictureUrls.get(e)??null:(this.pictureUrls.set(e,null),gn(this.hass,e).then(t=>{this.pictureUrls.set(e,t),this.syncDevices(!0)},()=>{}),null)}robotInfos(e,t){let n=[];for(let r of t.floors)for(let o of r.furniture){if(o.type!=="robot_vacuum")continue;let s=this.furnitureLinks.get(o.id)?.entity??null,a=s?e.states[s]?.state:void 0,l=a==="cleaning"?"cleaning":a==="returning"?"returning":a==="error"?"error":a==="docked"||!a?"docked":"idle",c=o.rotation*Math.PI/180,d=o.d*.14,p=[o.x-Math.sin(c)*d,o.z+Math.cos(c)*d],f=r.rooms.find(u=>u.points.length>=3&&R(p,u.points));n.push({id:o.id,floorId:r.id,rest:p,restHeading:-c,mode:l,room:f?.points??null})}return n}lampMarker(e,t,n,r){let o=r?e.states[r]:void 0,s=L(n.type),a=An[n.type]??s?.light??"floor",l=s?xe(t,n):a==="table"?Le(t,n.x,n.z):a==="bollard"||a==="garden"?$n(t,n.x,n.z):0,c=t.rooms.find(f=>f.points.length>=3&&R([n.x,n.z],f.points)),d=t.height,p=s?s.mount==="ceiling"?Math.max(.5,l-.15):l+n.h+.2:{ceiling:d-.3,downlight:d-.25,spot:d-.35,panel:d-.25,pendant:Math.max(.6,d-n.h-.25),floor:n.h+.25,uplight:n.h+.25,table:l+n.h+.2,wall:2.1,strip:d-.25,bollard:l+n.h+.25,garden:l+n.h+.25}[a];return{id:r??`lamp:${n.id}`,floorId:t.id,roomId:c?.id??null,x:n.x,z:n.z,y:p,icon:Se("light"),name:r?I(e,r):Ie(e,n.type),text:o?P(e,o):"",active:o?de(o):!1,unavailable:o?z(o):!1,glow:o?Oe(o):null,lamp:a,rotation:n.rotation,size:[n.w,n.d,n.h],base:l,pickable:!!r,furnitureId:n.id,pack:s?n.type:null,lightY:s?s.mount==="ceiling"?l:l+n.h*.85:void 0,effect:!!o&&o.state==="on"&&typeof o.attributes.effect=="string"&&!/^(none|off|solid|static|normal)$/i.test(o.attributes.effect),variant:n.variant,fromFurniture:!0}}showPin(e){if(this.furnish&&!e.fromFurniture)return!0;if(this.markerMode==="none")return!1;if(this.markerMode==="all")return!0;if(e.lamp||e.model)return!1;let t=k(e.id);return t==="light"?!1:e.fromFurniture?(e.power??0)>=1||t==="media"&&e.active:!0}openingTargets(){let e=new Map;for(let[t,n]of this.openingLinks??[]){let r=n.cover??n.contact??n.tilt;r&&e.set(t,r)}return e}scheduleThumbs(e=600){clearTimeout(this.thumbTimer);let t=this.building?.floors.filter(r=>r.rooms.length).length??0;if(!this.floorThumbs||t<2){this._thumbs=[];return}let n=Math.max(e,this.thumbsAt+(this._low?8e3:4e3)-Date.now());this.thumbTimer=setTimeout(()=>{if(!(!this.viewer||this.dimmed&&this._thumbs.length)){if(document.hidden){this.scheduleThumbs(3e3);return}this.thumbsAt=Date.now(),this._thumbs=this.viewer.floorThumbnails(this.narrowThumbs?104:150,this.narrowThumbs?78:112)}},n)}get narrowThumbs(){return this._narrowStage}renderThumbs(){if(!this._thumbs.length||!this.building)return _;let e=new Map(this.building.floors.map(n=>[n.id,n.name])),t=[...this._thumbs].sort((n,r)=>(this.building.floors.find(o=>o.id===r.floorId)?.elevation??0)-(this.building.floors.find(o=>o.id===n.floorId)?.elevation??0));return m`<nav class="fp3d-thumbs ${this.narrowThumbs?"fp3d-thumbs-small":""}" aria-label=${S(this.hass,"floors")}>
      <button class="fp3d-thumb fp3d-thumb-house" aria-pressed=${this.floorId===null} @click=${()=>this.fire("floor-tap",{floorId:null})}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 11l9-7 9 7M5 10v10h14V10" /></svg>
        <span>${S(this.hass,"all_floors")}</span>
      </button>
      ${t.map(n=>m`<button class="fp3d-thumb" aria-pressed=${this.floorId===n.floorId} @click=${()=>this.fire("floor-tap",{floorId:n.floorId})}>
          <img src=${n.url} alt="" />
          <span>${e.get(n.floorId)??""}</span>
        </button>`)}
    </nav>`}onDeviceHold(e,t,n){let r=k(e);r==="light"||r==="cover"||r==="switch"||r==="fan"||r==="lock"||r==="camera"?this._menu={entity:e,x:t,y:n}:Z(this,e)}onDeviceSwipe(e,t,n,r,o){let s=this.hass?.states[e];if(t==="start"){if(!s||z(s))return!1;let l=k(e);if(l==="light"&&Ct(s).dim){let c=s.state==="on"?typeof s.attributes.brightness=="number"?Math.round(s.attributes.brightness/2.55):100:0;return this._swipe={entity:e,kind:"light",start:c,value:c,x:r,y:o},!0}if(l==="cover"&&Lt(s)){let c=s.attributes.current_position;return this._swipe={entity:e,kind:"cover",start:c,value:c,x:r,y:o},!0}return!1}let a=this._swipe;if(!a||a.entity!==e)return!1;if(t==="move"){let l=Math.round(Math.min(100,Math.max(0,a.start-n/220*100)));l!==a.value&&(this._swipe={...a,value:l});let c=performance.now();c-this.swipeSent>350&&(this.swipeSent=c,this.applySwipe())}else this.applySwipe(),clearTimeout(this.swipeTimer),this.swipeTimer=setTimeout(()=>this._swipe=null,700);return!0}applySwipe(){let e=this._swipe;!e||!this.hass||(e.kind==="light"?e.value<=0?this.hass.callService("light","turn_off",{entity_id:e.entity}):this.hass.callService("light","turn_on",{entity_id:e.entity,brightness_pct:e.value}):this.hass.callService("cover","set_cover_position",{entity_id:e.entity,position:e.value}))}goTo(e){if(this._find=null,e.kind==="room"){this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),setTimeout(()=>this.viewer?.focus(e.floorId,e.x,e.z,e.y,e.entity),120)}renderAlerts(){let e=this.building;if(!this._alerts.length||!e)return _;let t=this._alerts.slice(0,3);return m`<div class="fp3d-alert-banner" role="alert">
      ${t.map(n=>m`<button class="fp3d-alert fp3d-alert-${n.kind}" title=${Tt(this.hass,e,n)} @click=${()=>this.jumpTo(n)}>${Tt(this.hass,e,n)}</button>`)}
      ${this._alerts.length>3?m`<span class="fp3d-alert-more">+${this._alerts.length-3}</span>`:_}
    </div>`}renderScenes(){let e=this.building;if(!this.scenes||!this.roomId||this.panelOpen||!e||!this.hass)return _;let t=e.floors.flatMap(o=>o.rooms).find(o=>o.id===this.roomId),n=t?D(this.hass,t.area_id).filter(o=>k(o)==="scene"||k(o)==="script").slice(0,6):[];if(!n.length)return _;let r=t?.area_id?this.hass.areas?.[t.area_id]?.name:void 0;return m`<div class="fp3d-scenes">
      ${n.map(o=>m`<button class="fp3d-chip" aria-pressed=${this._sceneFired===o} @click=${()=>this.runScene(o)}>${I(this.hass,o,r)}</button>`)}
    </div>`}renderFind(){let e=this.building;if(!e||!this.hass)return _;if(this._find===null)return m`<button class="fp3d-find-btn" title=${S(this.hass,"find")} aria-label=${S(this.hass,"find")} @click=${()=>this._find=""}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>
      </button>`;let t=br(this.findIndex??=_r(this.hass,e),this._find);return m`<div class="fp3d-find">
      <input
        type="search"
        placeholder=${S(this.hass,"find_placeholder")}
        .value=${this._find}
        @input=${n=>this._find=n.target.value}
        @keydown=${n=>{n.key==="Escape"&&(this._find=null),n.key==="Enter"&&t[0]&&this.goTo(t[0])}}
      />
      <button class="fp3d-find-close" aria-label=${S(this.hass,"close")} @click=${()=>this._find=null}>✕</button>
      ${this._find.trim()?m`<div class="fp3d-find-list">
            ${t.length?t.map(n=>m`<button @click=${()=>this.goTo(n)}>
                    <span class="fp3d-find-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d=${n.icon?Be(n.icon):"M4 10l8-6 8 6v10H4z"} /></svg></span>
                    <span><b>${n.name}</b>${n.where?m`<small>${n.where}</small>`:_}</span>
                  </button>`):m`<p>${S(this.hass,"find_none")}</p>`}
          </div>`:_}
    </div>`}renderSwipe(){let e=this._swipe;if(!e||!this.hass)return _;let t=e.kind==="light"&&e.value<=0;return m`<div class="fp3d-swipe" style="left:${e.x}px;top:${e.y}px">
      <span>${I(this.hass,e.entity)}</span>
      <b>${t?S(this.hass,"swipe_off"):`${e.value} %`}</b>
      <i><em style="height:${e.value}%"></em></i>
    </div>`}lookThrough(e){let t=this.viewer,n=this.building;if(!t||!n)return;let r=n.floors.find(s=>s.placements.some(a=>a.entity_id===e))?.id;if(!r)return;this._menu=null,this._through?this._through={...this._through,entity:e}:this._through={entity:e,back:t.getView()},this.watchCameras(!0);let o=this.floorId===r?0:300;o&&(this.throughFloor=r,this.fire("floor-tap",{floorId:r})),setTimeout(()=>{this._through?.entity===e&&!this.viewer?.lookThrough(e)&&(this._through=null)},o)}endThrough(){let e=this._through;e&&(this._through=null,this.viewer?.flyTo(e.back))}renderThrough(){let e=this._through;if(!e||!this.hass)return _;let t=this.hass.states[e.entity],n=t?.attributes.entity_picture,r=n&&!z(t)?n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null;return m`<div class="fp3d-through" style="--fp3d-blend:${this._blend}">
      ${r?m`<img class="fp3d-through-img" src=${r} alt="" />`:_}
      <div class="fp3d-through-bar">
        <span class="fp3d-through-name">${I(this.hass,e.entity)}</span>
        <input
          type="range"
          min="0"
          max="100"
          .value=${String(Math.round(this._blend*100))}
          aria-label=${S(this.hass,"through_blend")}
          @input=${o=>this._blend=Number(o.target.value)/100}
        />
        <button class="fp3d-chip" @click=${()=>this.endThrough()}>${S(this.hass,"through_back")}</button>
      </div>
    </div>`}renderMenu(){let e=this._menu;if(!e||!this.hass)return _;let t=this.renderRoot.querySelector(".fp3d-stage"),n=t?.clientWidth??800,r=t?.clientHeight??600,o=Math.max(8,Math.min(n-240,e.x-116)),s=Math.max(8,Math.min(r-360,e.y-170));return m`<div class="fp3d-menu-backdrop" @click=${()=>this._menu=null}></div>
      <fp3d-quick-menu
        style="left:${o}px;top:${s}px"
        ?low=${this._low}
        .hass=${this.hass}
        .entity=${e.entity}
        @close=${()=>this._menu=null}
        @camera-look=${a=>this.lookThrough(a.detail.entity)}
      ></fp3d-quick-menu>`}onDeviceTap(e,t=0,n=0){if(e.startsWith("trail:"))return;let r=k(e);if(r==="cover"||r==="camera"){this._menu={entity:e,x:t,y:n};return}r&&Hn.has(r)?jn(this.hass,e):Z(this,e)}resetView(){this._through=null,this.viewer?.resetView()}fire(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}toggleFlows(){this._flows=!this._flows;try{localStorage.setItem("neonplan3d.flows",this._flows?"1":"0")}catch{}this.syncDevices(!0)}renderEnergy(){let e=this._energy;if(!e||this.roomId||!this.showEnergy)return _;let t=r=>S(this.hass,r),n=[];if(e.consumption!==null&&n.push({cls:"total",label:t("energy_consumption"),value:fe(this.hass,e.consumption)}),e.grid!==null){let r=e.grid<0;n.push({cls:r?"export":"grid",label:t(r?"energy_grid_export":"energy_grid_import"),value:fe(this.hass,Math.abs(e.grid))})}if(e.solar!==null&&n.push({cls:"solar",label:t("energy_solar"),value:fe(this.hass,e.solar)}),e.battery!==null||e.soc!==null){let r=[e.battery!==null?fe(this.hass,Math.abs(e.battery)):null,e.soc!==null?`${Math.round(e.soc)} %`:null].filter(Boolean);n.push({cls:"battery",label:t("energy_battery"),value:r.join(" \xB7 ")})}return e.tariff&&n.push({cls:"tariff",label:t("energy_tariff"),value:`${O(this.hass,e.tariff.value,3)} ${e.tariff.unit}`.trim()}),m`<div class="fp3d-energy" aria-live="off">
      ${n.map(r=>m`<div class="fp3d-energy-item fp3d-energy-${r.cls}"><span>${r.label}</span><b>${r.value}</b></div>`)}
      ${this.flows!==null?_:m`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._flows} title=${`${t("flows_hint")} (${t(this._flows?"flow_on":"flow_off")})`} aria-label=${t("flows")} @click=${()=>this.toggleFlows()}>
        <span>${t("flows")}</span><b>⚡</b>
      </button>`}
    </div>`}renderLegend(){if(this.heatMode==="none")return _;let e=ze[this.heatMode],t=e.stops[0][0],n=e.stops[e.stops.length-1][0],r=o=>S(this.hass,o);return m`<div class="fp3d-legend">
      <b>${r(`heat_${this.heatMode}`)}</b>
      <span class="fp3d-legend-bar" style="background:${cr(this.heatMode)}"></span>
      <span class="fp3d-legend-range"><span>${O(this.hass,t,0)} ${e.unit}</span><span>${O(this.hass,n,0)} ${e.unit}</span></span>
      ${this.heatValues.size?_:m`<span class="fp3d-legend-none">${r("heat_none_found")}</span>`}
    </div>`}render(){let e=this._sky,t=(o,s)=>`rgb(${o.map((a,l)=>Math.round(a+(s[l]-a)*e)).join(",")})`,n=Pt[this.theme]??Pt.neon,r=`--fp3d-sky:${t(n.night[0],n.day[0])};--fp3d-ground:${t(n.night[1],n.day[1])}`;return m`<div
      class="fp3d-stage ${this.roomLabels?"":"fp3d-no-room-names"} ${this._low?"fp3d-low":""} ${this.panelOpen?"fp3d-panel-open":""} ${this._alerts.length?"fp3d-has-alerts":""} ${this._through?"fp3d-through-on":""}"
      style=${r}
    >
      ${this._error?m`<p class="fp3d-error">${this._error}</p>`:_} ${this.renderEnergy()} ${this.renderLegend()}
      ${this.renderAlerts()} ${this.renderThumbs()} ${this.renderScenes()} ${this.renderFind()} ${this.renderSwipe()} ${this.renderThrough()} ${this.renderMenu()}
      ${this.showStats&&this._stats?m`<span class="fp3d-stats"
            ><b>${this._stats.fps?S(this.hass,"stats_fps",{fps:this._stats.fps,ms:this._stats.worstMs}):S(this.hass,"stats_idle")}</b>
            ${this._stats.busy.length?m`(${this._stats.busy.map(o=>S(this.hass,`stats_busy_${o}`)).join(", ")})`:_} ·
            ${S(this.hass,"stats",{calls:this._stats.calls,tris:this._stats.triangles.toLocaleString()})} ·
            ${S(this.hass,this._stats.low?"stats_low":"stats_full",{r:O(this.hass,this._stats.pixelRatio,2)})}</span
          >`:_}
    </div>`}static styles=[N,Y,C`
      :host {
        display: block;
        position: relative;
        min-height: 200px;
      }
      .fp3d-alert-banner {
        position: absolute;
        left: 50%;
        top: 10px;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        gap: 6px;
        max-width: calc(100% - 24px);
        z-index: 4;
      }
      .fp3d-alert {
        flex: 0 1 auto;
        min-width: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 7px 14px 7px 12px;
        border: 0;
        border-left: 4px solid #ff3b4f;
        border-radius: 12px;
        background: var(--fp3d-chrome-solid);
        color: var(--fp3d-text);
        font: 600 13.5px var(--fp3d-font);
        box-shadow: 0 0 18px rgba(255, 59, 79, 0.35);
        cursor: pointer;
        animation: fp3d-alert-pulse 1.2s ease-in-out infinite;
      }
      .fp3d-alert-water,
      .fp3d-alert-window_rain {
        border-left-color: #4fb3ff;
        box-shadow: 0 0 18px rgba(79, 179, 255, 0.35);
      }
      .fp3d-alert-alarm_pending {
        border-left-color: #ffb547;
        box-shadow: 0 0 18px rgba(255, 181, 71, 0.35);
      }
      .fp3d-alert-more {
        align-self: center;
        color: var(--fp3d-muted);
        font-size: 13px;
      }
      @keyframes fp3d-alert-pulse {
        50% {
          box-shadow: 0 0 4px transparent;
        }
      }
      .fp3d-has-alerts .fp3d-energy {
        top: 58px;
      }
      .fp3d-scenes {
        position: absolute;
        left: 60px;
        right: 60px;
        bottom: calc(10px + var(--fp3d-bottom-inset, 0px));
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 6px;
        z-index: 2;
        pointer-events: none;
      }
      .fp3d-scenes .fp3d-chip {
        pointer-events: auto;
      }
      @media (prefers-reduced-motion: reduce) {
        .fp3d-alert,
        .fp3d-dev-found {
          animation: none;
        }
      }
      .fp3d-stage {
        position: absolute;
        inset: 0;
        overflow: hidden;
        container-type: size;
        container-name: fp3d;
        background: radial-gradient(ellipse at 50% 35%, var(--fp3d-sky, var(--fp3d-bg2)), var(--fp3d-ground, var(--fp3d-bg)) 72%);
        transition: background 2s ease;
      }
      .fp3d-canvas {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        display: block;
        touch-action: none;
        cursor: grab;
      }
      .fp3d-canvas:active {
        cursor: grabbing;
      }
      .fp3d-labels {
        position: absolute;
        inset: 0;
        pointer-events: none;
      }
      .fp3d-pin {
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: auto;
        font: 600 12.5px var(--fp3d-title-font);
        color: var(--fp3d-text);
        background: var(--fp3d-chrome);
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        padding: 5px 10px;
        cursor: pointer;
        white-space: nowrap;
        backdrop-filter: blur(6px);
        box-shadow: var(--fp3d-shadow);
      }
      .fp3d-pin-floor {
        display: grid;
        justify-items: start;
        gap: 1px;
        padding: 8px 14px;
        border-radius: 12px;
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        border-color: transparent;
        box-shadow: 0 0 22px rgba(55, 224, 255, 0.28);
      }
      .fp3d-pin-floor b {
        font: 700 15px var(--fp3d-title-font);
        letter-spacing: -0.01em;
      }
      .fp3d-pin-floor span {
        font: 500 12px var(--fp3d-font);
        opacity: 0.78;
      }
      .fp3d-dev {
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: auto;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px;
        border-radius: 999px;
        border: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome);
        color: var(--fp3d-muted);
        font: 600 12px var(--fp3d-font);
        cursor: pointer;
        white-space: nowrap;
        backdrop-filter: blur(6px);
        touch-action: manipulation;
        -webkit-user-select: none;
        user-select: none;
        transition: opacity 0.2s ease;
      }
      .fp3d-dev-icon {
        display: grid;
        place-items: center;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: rgba(91, 124, 255, 0.14);
      }
      .fp3d-dev[data-entity^="trail:"] {
        padding: 2px 4px 2px 2px;
        font-size: 11px;
        border-color: rgba(55, 224, 255, 0.5);
      }
      .fp3d-dev[data-entity^="trail:"] .fp3d-dev-icon {
        color: #37e0ff;
      }
      .fp3d-dev[data-entity^="trail:"] .fp3d-dev-text {
        display: inline;
      }
      .fp3d-dev-text {
        display: none;
        padding-right: 6px;
        color: var(--fp3d-text);
        font-variant-numeric: tabular-nums;
        max-width: 160px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-dev-watt:empty {
        display: none;
      }
      .fp3d-dev-watt {
        padding: 1px 6px 1px 0;
        color: #37e0ff;
        font-variant-numeric: tabular-nums;
        font-weight: 700;
      }
      .fp3d-dev-on .fp3d-dev-watt {
        color: #2a1a00;
      }
      .fp3d-person {
        position: absolute;
        left: 0;
        top: 0;
        display: grid;
        place-items: center;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        overflow: hidden;
        background: #ff5fd2;
        color: #fff;
        font: 700 12px var(--fp3d-font);
        box-shadow:
          0 0 0 2px rgba(255, 95, 210, 0.45),
          0 0 18px #ff5fd2;
        pointer-events: auto;
      }
      .fp3d-person img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .fp3d-person[hidden] {
        display: none;
      }
      .fp3d-no-room-names .fp3d-pin {
        display: none !important;
      }
      /* tablet level: blur over the canvas and glowing shadows are expensive on weak GPUs */
      .fp3d-stage.fp3d-low {
        transition: none;
      }
      .fp3d-low .fp3d-pin,
      .fp3d-low .fp3d-dev,
      .fp3d-low .fp3d-dev-on,
      .fp3d-low .fp3d-energy-item,
      .fp3d-low .fp3d-find input,
      .fp3d-low .fp3d-find-list,
      .fp3d-low .fp3d-find-btn,
      .fp3d-low .fp3d-swipe,
      .fp3d-low .fp3d-thumb {
        backdrop-filter: none;
        box-shadow: none;
        transition: none;
      }
      .fp3d-thumbs {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        gap: 8px;
        max-height: calc(100% - 140px);
        overflow-y: auto;
        scrollbar-width: none;
        z-index: 2;
      }
      .fp3d-thumb {
        position: relative;
        display: grid;
        padding: 0;
        width: 150px;
        border: 1px solid var(--fp3d-line);
        border-radius: 14px;
        background: color-mix(in srgb, var(--fp3d-chrome) 70%, transparent);
        color: var(--fp3d-text);
        cursor: pointer;
        overflow: hidden;
        font: inherit;
        box-shadow: var(--fp3d-shadow);
        opacity: 0.72;
        transition: opacity 0.15s, border-color 0.15s;
      }
      .fp3d-thumb:hover,
      .fp3d-thumb[aria-pressed="true"] {
        opacity: 1;
      }
      .fp3d-thumb[aria-pressed="true"] {
        border-color: var(--fp3d-accent);
        box-shadow: var(--fp3d-shadow), 0 0 0 1px var(--fp3d-accent), 0 0 18px rgba(55, 224, 255, 0.25);
      }
      .fp3d-thumb img {
        display: block;
        width: 100%;
        aspect-ratio: 4 / 3;
      }
      .fp3d-thumb span {
        position: absolute;
        left: 8px;
        bottom: 6px;
        font-size: 12px;
        font-weight: 600;
        text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
      }
      .fp3d-thumb-house {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
      }
      .fp3d-thumb-house span {
        position: static;
        text-shadow: none;
      }
      .fp3d-thumbs-small .fp3d-thumb {
        width: 104px;
      }
      .fp3d-find-btn {
        position: absolute;
        left: 12px;
        bottom: calc(10px + var(--fp3d-bottom-inset, 0px));
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        border: 0;
        border-radius: 13px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        cursor: pointer;
      }
      .fp3d-find {
        position: absolute;
        left: 12px;
        bottom: calc(10px + var(--fp3d-bottom-inset, 0px));
        width: min(340px, calc(100% - 24px));
        display: flex;
        flex-direction: column-reverse;
        gap: 6px;
        z-index: 3;
      }
      .fp3d-find input {
        box-sizing: border-box;
        width: 100%;
        height: 42px;
        padding: 0 42px 0 14px;
        border: 1px solid var(--fp3d-line);
        border-radius: 14px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        font: inherit;
        font-size: 15px;
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(8px);
      }
      .fp3d-find-close {
        position: absolute;
        right: 6px;
        bottom: 6px;
        width: 30px;
        height: 30px;
        border: 0;
        border-radius: 10px;
        background: none;
        color: var(--fp3d-muted);
        cursor: pointer;
      }
      .fp3d-find-list {
        display: grid;
        padding: 6px;
        border-radius: 14px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(8px);
      }
      .fp3d-find-list button {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px 10px;
        border: 0;
        border-radius: 10px;
        background: none;
        color: var(--fp3d-text);
        text-align: left;
        font: inherit;
        cursor: pointer;
      }
      .fp3d-find-list button:hover,
      .fp3d-find-list button:focus-visible {
        background: rgba(127, 127, 127, 0.14);
      }
      .fp3d-find-list b {
        display: block;
        font-weight: 600;
      }
      .fp3d-find-list small,
      .fp3d-find-list p {
        color: var(--fp3d-muted);
        font-size: 12px;
        margin: 0;
      }
      .fp3d-find-list p {
        padding: 8px 10px;
      }
      .fp3d-find-icon {
        display: grid;
        place-items: center;
        width: 30px;
        height: 30px;
        border-radius: 10px;
        background: rgba(127, 127, 127, 0.15);
        flex: none;
      }
      .fp3d-find-icon svg {
        width: 16px;
        height: 16px;
      }
      .fp3d-swipe {
        position: absolute;
        transform: translate(-50%, calc(-100% - 28px));
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        gap: 2px 12px;
        padding: 8px 12px;
        border-radius: 14px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        pointer-events: none;
        white-space: nowrap;
        z-index: 4;
      }
      .fp3d-swipe span {
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-swipe b {
        grid-row: 2;
        font: 700 22px var(--fp3d-title-font);
      }
      .fp3d-swipe i {
        grid-row: 1 / 3;
        grid-column: 2;
        position: relative;
        width: 10px;
        height: 44px;
        border-radius: 5px;
        background: rgba(127, 127, 127, 0.25);
        overflow: hidden;
      }
      .fp3d-swipe em {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--fp3d-warm);
      }
      .fp3d-menu-backdrop {
        position: absolute;
        inset: 0;
        z-index: 5;
      }
      .fp3d-through {
        position: absolute;
        inset: 0;
        z-index: 4;
        pointer-events: none;
      }
      .fp3d-through-img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: var(--fp3d-blend);
      }
      .fp3d-through-bar {
        position: absolute;
        left: 50%;
        bottom: calc(var(--fp3d-bottom-inset, 0px) + 14px);
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        gap: 12px;
        max-width: calc(100% - 32px);
        padding: 8px 10px 8px 16px;
        border-radius: 999px;
        background: var(--fp3d-chrome);
        backdrop-filter: blur(12px);
        border: 1px solid var(--fp3d-line);
        pointer-events: auto;
      }
      .fp3d-through-name {
        font-weight: 600;
        white-space: nowrap;
      }
      .fp3d-through-bar input[type="range"] {
        width: 140px;
        accent-color: var(--fp3d-accent);
      }
      .fp3d-through-on :is(.fp3d-pin, .fp3d-dev, .fp3d-energy, .fp3d-legend, .fp3d-thumbs, .fp3d-scenes, .fp3d-find-btn, .fp3d-stats) {
        display: none;
      }
      fp3d-quick-menu {
        position: absolute;
        z-index: 6;
      }
      .fp3d-dev-found {
        animation: fp3d-found 0.6s ease-in-out 4;
      }
      @keyframes fp3d-found {
        50% {
          scale: 1.35;
          filter: drop-shadow(0 0 12px var(--fp3d-accent));
        }
      }
      .fp3d-legend {
        position: absolute;
        left: 12px;
        bottom: calc(60px + var(--fp3d-bottom-inset, 0px));
        display: grid;
        gap: 4px;
        min-width: 180px;
        padding: 8px 11px;
        border-radius: 12px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        font-size: 12px;
        pointer-events: none;
      }
      .fp3d-legend-bar {
        height: 8px;
        border-radius: 4px;
      }
      .fp3d-legend-range {
        display: flex;
        justify-content: space-between;
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-legend-none {
        color: var(--fp3d-warm);
      }
      .fp3d-energy {
        position: absolute;
        left: 12px;
        top: 10px;
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        max-width: calc(100% - 24px);
        pointer-events: none;
      }
      .fp3d-energy-item {
        display: grid;
        padding: 5px 11px 6px;
        border-radius: 12px;
        background: var(--fp3d-chrome);
        border-left: 3px solid var(--fp3d-line);
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(6px);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-energy-item span {
        font-size: 11px;
        color: var(--fp3d-muted);
      }
      .fp3d-energy-item b {
        font: 700 15px var(--fp3d-title-font);
      }
      .fp3d-energy-total {
        border-left-color: #6fd8ff;
      }
      .fp3d-energy-grid {
        border-left-color: #37e0ff;
      }
      .fp3d-energy-export,
      .fp3d-energy-solar {
        border-left-color: #ffc633;
      }
      .fp3d-energy-battery {
        border-left-color: #59ff8c;
      }
      .fp3d-flow-toggle {
        pointer-events: auto;
        cursor: pointer;
        border: 0;
        border-left: 3px solid var(--fp3d-line);
        color: inherit;
        text-align: left;
        font: inherit;
      }
      .fp3d-flow-toggle[aria-pressed="true"] {
        border-left-color: var(--fp3d-accent);
      }
      .fp3d-flow-toggle span {
        display: none;
      }
      .fp3d-flow-toggle b {
        opacity: 0.4;
        filter: grayscale(1);
      }
      .fp3d-flow-toggle[aria-pressed="true"] b {
        opacity: 1;
        filter: none;
      }
      .fp3d-energy-tariff {
        border-left-color: #b98cff;
      }
      /* narrow stages (portrait tablets, phones): the energy values scroll in one row */
      @container fp3d (max-width: 900px) {
        .fp3d-energy {
          flex-wrap: nowrap;
          overflow-x: auto;
          scrollbar-width: none;
          pointer-events: auto;
        }
        .fp3d-legend {
          bottom: auto;
          top: 62px;
        }
        .fp3d-has-alerts .fp3d-legend {
          top: 110px;
        }
      }
      /* a room sheet covers the lower half: the view's own controls step aside */
      @container fp3d ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .fp3d-panel-open :is(.fp3d-find-btn, .fp3d-find, .fp3d-thumbs, .fp3d-legend, .fp3d-stats, .fp3d-scenes) {
          display: none;
        }
      }
      @media (pointer: coarse) {
        .fp3d-find-close {
          width: 40px;
          height: 40px;
          right: 1px;
          bottom: 1px;
        }
        .fp3d-dev {
          padding: 6px;
        }
        .fp3d-pin {
          padding: 8px 12px;
        }
      }
      .fp3d-dev-full .fp3d-dev-text {
        display: inline;
      }
      .fp3d-dev-sel {
        outline: 2px solid var(--fp3d-accent);
        outline-offset: 2px;
      }
      .fp3d-dev-on {
        color: #2a1a00;
        border-color: transparent;
        background: var(--fp3d-glow, var(--fp3d-warm));
        box-shadow: 0 0 16px var(--fp3d-glow, var(--fp3d-warm));
      }
      .fp3d-dev-on .fp3d-dev-icon {
        background: rgba(255, 255, 255, 0.28);
      }
      .fp3d-dev-on .fp3d-dev-text {
        color: #2a1a00;
      }
      .fp3d-dev-na {
        opacity: 0.45;
      }
      .fp3d-dev-dim {
        opacity: 0.35;
      }
      .fp3d-dev[hidden],
      .fp3d-pin[hidden] {
        display: none;
      }
      .fp3d-pin-active {
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        border-color: transparent;
        box-shadow: 0 0 18px rgba(55, 224, 255, 0.45);
      }
      .fp3d-stats b {
        color: var(--fp3d-accent);
        font-weight: 700;
      }
      .fp3d-stats {
        padding: 4px 9px;
        border-radius: 8px;
        background: var(--fp3d-chrome);
        position: absolute;
        right: 10px;
        bottom: calc(8px + var(--fp3d-bottom-inset, 0px));
        font-size: 11.5px;
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
        pointer-events: none;
      }
      .fp3d-error {
        position: absolute;
        inset: auto 16px 16px;
        color: var(--fp3d-danger);
      }
    `]};customElements.get("fp3d-view3d")||customElements.define("fp3d-view3d",Ot);function fe(i,e){return Math.abs(e)>=1e3?`${O(i,e/1e3,1)} kW`:`${Math.round(e)} W`}function Xi(i){return i.type==="tv_board"?i.h+.9:i.type==="tv_wall"?1.3+i.h/2+.25:i.type==="kitchen_wall"?1.45+i.h+.25:i.h+.35}var eo=.25,Sr=i=>Math.round(i*1e3)/1e3;function Bt(i,e,t,n,r){let o=i.rooms.find(s=>s.points.length>=3&&R([e,t],s.points));return!o||R([n,r],o.points)?[n,r]:R([n,t],o.points)?[n,t]:R([e,r],o.points)?[e,r]:[e,t]}function Mr(i,e,t,n=eo){let r=i.rooms.find(c=>c.points.length>=3&&R([e.x,e.z],c.points));if(!r)return null;let o=r.points,s=j(o)>=0?1:-1,a=t/2,l=null;for(let c=0;c<o.length;c++){let d=o[c],p=o[(c+1)%o.length],f=Math.hypot(p[0]-d[0],p[1]-d[1]);if(f<.3)continue;let u=[(p[0]-d[0])/f,(p[1]-d[1])/f],h=[-u[1]*s,u[0]*s],g=(e.x-d[0])*u[0]+(e.z-d[1])*u[1];if(g<0||g>f)continue;let $=i.rooms.some(T=>T.id!==r.id&&T.points.some((B,V)=>{let Re=T.points[(V+1)%T.points.length],Je=Math.abs((B[0]-d[0])*h[0]+(B[1]-d[1])*h[1]),Qe=Math.abs((Re[0]-d[0])*h[0]+(Re[1]-d[1])*h[1]);return Je<.02&&Qe<.02}))?a:0,b=(e.x-d[0])*h[0]+(e.z-d[1])*h[1]-$,M=Math.atan2(-h[0],h[1])*180/Math.PI,E=T=>Math.abs((e.rotation-T+540)%360-180),v=[{rotation:M,extent:e.d/2},{rotation:M+90,extent:e.w/2},{rotation:M-90,extent:e.w/2}].reduce((T,B)=>E(B.rotation)<E(T.rotation)?B:T);if(E(v.rotation)>50)continue;let x=b-v.extent;Math.abs(x)>n||l&&Math.abs(x)>=Math.abs(l.gap)||(l={x:Sr(e.x-h[0]*x),z:Sr(e.z-h[1]*x),rotation:(Math.round(v.rotation)%360+360)%360,gap:x})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}var F={get(i){try{return localStorage.getItem(`neonplan3d.${i}`)}catch{return null}},set(i,e){try{localStorage.setItem(`neonplan3d.${i}`,e)}catch{}}},Nt=class extends H{static properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_mode:{state:!0},_editorReady:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_wallMode:{state:!0},_explode:{state:!0},_quality:{state:!0},_stats:{state:!0},_markers:{state:!0},_heat:{state:!0},_theme:{state:!0},_furnish:{state:!0},_selFurniture:{state:!0},_selDevice:{state:!0},_floorStack:{state:!0},_roomNames:{state:!0},_trail:{state:!0}};data=new le(this);constructor(){super(),this.narrow=!1,this._mode="view",this._editorReady=!!customElements.get("fp3d-editor"),this._floorId=null,this._roomId=null,this._wallMode="auto",this._explode=F.get("explode")!=="0";let e=F.get("quality");this._quality=e==="low"||e==="high"?e:"auto",this._stats=F.get("stats")==="1"||new URLSearchParams(location.search).has("fp3d_stats");let t=F.get("markers");this._markers=t==="none"||t==="all"?t:"important";let n=F.get("heat");this._heat=n==="temperature"||n==="humidity"||n==="co2"?n:"none";let r=F.get("theme");this._theme=r&&Dt.includes(r)?r:"neon",this._furnish=!1,this._selFurniture=null,this._selDevice=null;let o=F.get("floor_stack");this._floorStack=o==="stacked"||o==="single"?o:"dim",this._roomNames=F.get("room_names")!=="0",this._trail=F.get("trail")==="1"}t(e,t){return S(this.hass,e,t)}willUpdate(e){e.has("hass")&&this.hass&&this.data.setHass(this.hass);let t=this.data.building;t&&this._floorId&&!t.floors.some(n=>n.id===this._floorId)&&(this._floorId=null,this._roomId=null)}get isAdmin(){return this.hass?.user?.is_admin??!1}setMode(e){e!==this._mode&&(e==="view"&&this.data.flush(),this._mode=e)}onRoomTap(e){let{floorId:t,roomId:n}=e.detail;if((this.data.building?.floors.length??0)>1&&t&&this._floorId!==t){this._floorId=t,this._roomId=null;return}n&&(this._roomId=n===this._roomId?null:n)}setExplode(e){this._explode=e,F.set("explode",e?"1":"0")}setQuality(e){this._quality=e,F.set("quality",e)}editFurniture(e,t){let n=this.data.building;if(!n)return;let r=structuredClone(n);for(let o of r.floors){let s=o.furniture.find(a=>a.id===e);s&&t(s,o)}this.data.edit(r)}editDevice(e,t){let n=this.data.building;if(!n)return;let r=structuredClone(n);for(let o of r.floors){let s=o.placements.find(a=>a.entity_id===e);s&&t(s,o)}this.data.edit(r)}moveDevice(e){let{id:t,x:n,z:r}=e.detail;this.editDevice(t,(o,s)=>{let[a,l]=Bt(s,o.x,o.z,n,r);Object.assign(o,{x:a,z:l})})}turnStep(){return k(this._selDevice??"")==="camera"?15:45}turnDevice(e){this._selDevice&&this.editDevice(this._selDevice,t=>t.rotation=(((t.rotation??0)+e)%360+360)%360)}deleteDevice(){let e=this._selDevice,t=this.data.building;if(!e||!t)return;let n=structuredClone(t);for(let r of n.floors)r.placements=r.placements.filter(o=>o.entity_id!==e);this.data.edit(n),this._selDevice=null}renderDeviceFields(e){let n=this.data.building?.floors.find(p=>p.placements.some(f=>f.entity_id===e)),r=n?.placements.find(p=>p.entity_id===e);if(!n||!r)return _;let o=k(e),s=o==="light",a=o==="camera",l=r.mount==="ceiling",c=o?ce(o,n.height,s||a?r.mount??(a?"wall":"ceiling"):null):1,d=(p,f,u,h,g,y)=>m`<label class="fp3d-size" title=${p}
        >${p}
        <input
          type="number"
          inputmode="decimal"
          step=${u}
          min=${h}
          max=${g}
          .value=${String(Math.round(f*100)/100)}
          @change=${$=>{let b=parseFloat($.target.value.replace(",","."));Number.isFinite(b)&&y(Math.min(g,Math.max(h,b)))}}
        />
      </label>`;return m`${s?m`<select class="fp3d-size-select" title=${this.t("lamp_mount")} @change=${p=>this.editDevice(e,f=>Object.assign(f,{mount:p.target.value,y:null}))}>
            ${["ceiling","floor","table","wall"].map(p=>m`<option value=${p} ?selected=${p===(r.mount??"ceiling")}>${this.t(`lamp_${p}`)}</option>`)}
          </select>`:_}
      ${a?m`<select class="fp3d-size-select" title=${this.t("camera_mount")} @change=${p=>this.editDevice(e,f=>Object.assign(f,{mount:p.target.value,y:null}))}>
              <option value="wall" ?selected=${!l}>${this.t("camera_mount_wall")}</option>
              <option value="ceiling" ?selected=${l}>${this.t("camera_mount_ceiling")}</option>
            </select>
            ${d(this.t("camera_fov_short"),r.fov??(l?360:90),5,10,360,p=>this.editDevice(e,f=>f.fov=p))}
            ${d(this.t("camera_reach_short"),r.reach??(l?3:4.5),.5,.5,50,p=>this.editDevice(e,f=>f.reach=p))}
            ${d(this.t("camera_tilt_short"),r.tilt??(l?65:20),5,0,90,p=>this.editDevice(e,f=>f.tilt=p))}`:_}
      <label class="fp3d-size" title=${this.t("marker_height")}
        >${this.t("size_short_h")}
        <input
          type="number"
          inputmode="decimal"
          step="0.05"
          min="0"
          .value=${String(Math.round((r.y??c)*100)/100)}
          @change=${p=>{let f=parseFloat(p.target.value.replace(",","."));Number.isFinite(f)&&f>=0&&this.editDevice(e,u=>u.y=Math.round(f*1e3)/1e3)}}
        />
      </label>
      ${r.y!==null?m`<button class="fp3d-chip" @click=${()=>this.editDevice(e,p=>p.y=null)}>${this.t("height_auto")}</button>`:_}`}furnitureName(e){let t=this.data.building?.floors.flatMap(n=>n.furniture).find(n=>n.id===e);return t?Ie(this.hass,t.type):""}moveFurniture(e){let{id:t,x:n,z:r}=e.detail,o=this.data.building?.settings.wall_interior??.12;this.editFurniture(t,(s,a)=>{let[l,c]=Bt(a,s.x,s.z,n,r);Object.assign(s,{x:l,z:c});let d=Mr(a,s,o);d&&Object.assign(s,d)})}renderSizeFields(e){let t=this.data.building?.floors.flatMap(o=>o.furniture).find(o=>o.id===e);if(!t)return _;let n=(o,s)=>m`<label class="fp3d-size" title=${this.t(`size_${o}`)}
      >${s}
      <input
        type="number"
        inputmode="decimal"
        step="0.05"
        min="0.05"
        .value=${String(Math.round(t[o]*100)/100)}
        @change=${a=>{let l=parseFloat(a.target.value.replace(",","."));Number.isFinite(l)&&l>0&&this.editFurniture(e,c=>c[o]=Math.round(l*1e3)/1e3)}}
    /></label>`,r=this.data.building?.floors.find(o=>o.furniture.some(s=>s.id===e));return m`${n("w",this.t("size_short_w"))}${n("d",this.t("size_short_d"))}${n("h",this.t("size_short_h"))}
    ${r&&En(t)?m`<label class="fp3d-size" title=${this.t("mount_height")}
            >↕
            <input
              type="number"
              inputmode="decimal"
              step="0.05"
              min="0"
              .value=${String(Math.round((t.mount_y??xe(r,t))*100)/100)}
              @change=${o=>{let s=parseFloat(o.target.value.replace(",","."));Number.isFinite(s)&&s>=0&&this.editFurniture(e,a=>a.mount_y=Math.round(s*1e3)/1e3)}}
          /></label>
          ${t.mount_y!=null?m`<button class="fp3d-chip" @click=${()=>this.editFurniture(e,o=>o.mount_y=null)}>${this.t("height_auto")}</button>`:_}`:_}`}turnFurniture(e){this._selFurniture&&this.editFurniture(this._selFurniture,t=>t.rotation=((t.rotation+e)%360+360)%360)}deleteFurniture(){let e=this._selFurniture,t=this.data.building;if(!e||!t)return;let n=structuredClone(t);for(let r of n.floors)r.furniture=r.furniture.filter(o=>o.id!==e);this.data.edit(n),this._selFurniture=null}view3d(){return this.renderRoot.querySelector("fp3d-view3d")}back(){this._roomId?this._roomId=null:this._floorId&&(this.data.building?.floors.length??0)>1?this._floorId=null:this.view3d()?.resetView()}onKey=e=>{e.key==="Escape"&&this._mode==="view"&&this.back()};connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey)}render(){let e=this.data.building,t=this.data.saveState;return m`
      <div class="fp3d-app">
        <header class="fp3d-header">
          <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
          <h1>NeonPlan 3D</h1>
          ${this.isAdmin?m`<div class="fp3d-seg" role="tablist">
                <button role="tab" aria-pressed=${this._mode==="view"} @click=${()=>this.setMode("view")}>${this.t("view")}</button>
                <button role="tab" aria-pressed=${this._mode==="editor"} @click=${()=>this.setMode("editor")}>${this.t("editor")}</button>
              </div>`:_}
          <span class="fp3d-grow"></span>
          ${this._mode==="view"&&e?.floors.some(n=>n.rooms.length)?m`<div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("quality")}>
                ${["auto","low","high"].map(n=>m`<button aria-pressed=${this._quality===n} @click=${()=>this.setQuality(n)}>${this.t(`quality_${n}`)}</button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("theme")}>
                ${Dt.map(n=>m`<button
                      aria-pressed=${this._theme===n}
                      @click=${()=>{this._theme=n,F.set("theme",n)}}
                    >
                      ${this.t(`theme_${n}`)}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("markers")}>
                ${["none","important","all"].map(n=>m`<button
                      aria-pressed=${this._markers===n}
                      title=${this.t("markers")}
                      @click=${()=>{this._markers=n,F.set("markers",n)}}
                    >
                      ${this.t(`markers_${n}`)}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality">
                <button
                  aria-pressed=${this._stats}
                  title=${this.t("fps_title")}
                  @click=${()=>{this._stats=!this._stats,F.set("stats",this._stats?"1":"0")}}
                >
                  ${this.t("fps")}
                </button>
              </div>`:_}
          ${this._mode==="editor"&&t!=="idle"?m`<span class="fp3d-save fp3d-save-${t}">${this.t(t==="saving"?"saving":t==="saved"?"saved":"save_error")}</span>`:_}
        </header>
        ${this.renderNotices()}
        ${this.data.error&&!e?m`<p class="fp3d-message">${this.t("load_error")}: ${this.data.error}</p>`:_}
        ${!e&&!this.data.error?m`<p class="fp3d-message">${this.t("loading")}</p>`:_}
        ${e?this._mode==="editor"&&this.isAdmin?this.renderEditor(e):this.renderView(e):_}
      </div>
    `}renderNotices(){let e=this.data,t=[];if(e.needsRestart&&t.push(m`<div class="fp3d-notice fp3d-notice-warn">${e.backendVersion?this.t("needs_restart",{version:e.backendVersion}):this.t("needs_restart_old")}</div>`),e.saveState==="error"&&e.saveError&&t.push(m`<div class="fp3d-notice fp3d-notice-error">${this.t("save_failed_detail",{error:e.saveError})}</div>`),e.draft&&this.isAdmin){let n=new Date(e.draft.savedAt).toLocaleString(this.hass?.language);t.push(m`<div class="fp3d-notice">
          <span>${this.t("draft_found",{time:n})}</span>
          <button class="fp3d-btn fp3d-primary" @click=${()=>e.restoreDraft()}>${this.t("draft_restore")}</button>
          <button class="fp3d-btn" @click=${()=>e.discardDraft()}>${this.t("draft_discard")}</button>
        </div>`)}return t.length?m`<div class="fp3d-notices">${t}</div>`:_}renderEditor(e){return this._editorReady?m`<fp3d-editor
      class="fp3d-body"
      .hass=${this.hass}
      .building=${e}
      .narrow=${this.narrow}
      .packs=${this.data.packs}
      @packs-changed=${()=>{this.data.reloadPacks()}}
      @building-changed=${t=>this.data.edit(t.detail.building)}
    ></fp3d-editor>`:(Dn().then(()=>this._editorReady=!0,t=>this.data.error=String(t)),m`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}renderView(e){if(!e.floors.length||!e.floors.some(r=>r.rooms.length))return m`<div class="fp3d-empty">
        <p>${this.t(this.isAdmin?"no_building_admin":"no_building")}</p>
        ${this.isAdmin?m`<button class="fp3d-btn fp3d-primary" @click=${()=>this.setMode("editor")}>${this.t("open_editor")}</button>`:_}
      </div>`;let t=e.floors.find(r=>r.id===this._floorId),n=t?[t]:e.floors;return m`
      <nav class="fp3d-nav">
        ${e.floors.length>1?m`<button class="fp3d-chip" aria-pressed=${this._floorId===null} @click=${()=>{this._floorId=null,this._roomId=null}}>
                ${this.t("all_floors")}
              </button>
              ${[...e.floors].reverse().map(r=>m`<button
                  class="fp3d-chip"
                  aria-pressed=${r.id===this._floorId}
                  @click=${()=>{this._floorId=r.id,this._roomId=null}}
                >
                  ${r.name}
                </button>`)}
              <span class="fp3d-sep"></span>`:_}
        ${n.flatMap(r=>r.rooms.map(o=>m`<button
              class="fp3d-chip fp3d-room-chip"
              aria-pressed=${o.id===this._roomId}
              @click=${()=>{e.floors.length>1&&(this._floorId=r.id),this._roomId=o.id===this._roomId?null:o.id}}
            >
              ${o.name}
            </button>`))}
      </nav>
      <div class="fp3d-stage-wrap ${this._roomId?"fp3d-room-open":""}">
        <fp3d-view3d
          class="fp3d-body"
          .hass=${this.hass}
          .building=${e}
          .packs=${this.data.packs}
          .floorStack=${this._floorStack}
          .roomLabels=${this._roomNames}
          ?trail=${this._trail}
          .panelOpen=${!!this._roomId}
          .floorId=${e.floors.length>1?this._floorId:e.floors[0]?.id??null}
          .roomId=${this._roomId}
          .wallMode=${this._wallMode}
          .explode=${this._explode}
          .markerMode=${this._markers}
          .heatMode=${this._heat}
          .theme=${this._theme}
          ?furnish=${this._furnish}
          .selectedFurniture=${this._selFurniture}
          @furniture-select=${r=>this._selFurniture=r.detail.id}
          @furniture-move=${this.moveFurniture}
          @device-select=${r=>this._selDevice=r.detail.id}
          @device-move=${this.moveDevice}
          .quality=${this._quality}
          ?showStats=${this._stats}
          @room-tap=${this.onRoomTap}
          @floor-tap=${r=>{this._floorId=r.detail.floorId,this._roomId=null}}
          @back=${()=>this.back()}
        ></fp3d-view3d>
        ${this._roomId?m`<fp3d-room-panel
              class="fp3d-room-panel"
              @camera-look=${r=>this.view3d()?.lookThrough(r.detail.entity)}
              .hass=${this.hass}
              .room=${e.floors.flatMap(r=>r.rooms).find(r=>r.id===this._roomId)??null}
              .floor=${e.floors.find(r=>r.rooms.some(o=>o.id===this._roomId))??null}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:_}
        <div class="fp3d-overlay">
          <div class="fp3d-seg">
            <button aria-pressed=${this._wallMode==="auto"} @click=${()=>this._wallMode="auto"}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wallMode==="cut"} @click=${()=>this._wallMode="cut"}>${this.t("walls_cut")}</button>
          </div>
          ${e.floors.length>1&&!this._floorId?m`<div class="fp3d-seg">
                <button aria-pressed=${this._explode} @click=${()=>this.setExplode(!0)}>${this.t("floors_apart")}</button>
                <button aria-pressed=${!this._explode} @click=${()=>this.setExplode(!1)}>${this.t("floors_stacked")}</button>
              </div>`:_}
          ${e.floors.length>1&&this._floorId?m`<div class="fp3d-seg" role="group" aria-label=${this.t("card_floor_stack")}>
                ${["dim","stacked","single"].map(r=>m`<button
                      aria-pressed=${this._floorStack===r}
                      @click=${()=>{this._floorStack=r,F.set("floor_stack",r)}}
                    >
                      ${this.t(`floor_stack_short_${r}`)}
                    </button>`)}
              </div>`:_}
          <div class="fp3d-seg" role="group" aria-label=${this.t("heatmap")}>
            ${["none","temperature","humidity","co2"].map(r=>m`<button
                  aria-pressed=${this._heat===r}
                  @click=${()=>{this._heat=r,F.set("heat",r)}}
                >
                  ${this.t(r==="none"?"heat_off":`heat_short_${r}`)}
                </button>`)}
          </div>
          <button
            class="fp3d-chip"
            aria-pressed=${this._roomNames}
            @click=${()=>{this._roomNames=!this._roomNames,F.set("room_names",this._roomNames?"1":"0")}}
          >
            ${this.t("room_names_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._trail}
            title=${this.t("trail_hint")}
            @click=${()=>{this._trail=!this._trail,F.set("trail",this._trail?"1":"0")}}
          >
            ${this.t("trail_short")}
          </button>
          ${this.isAdmin?m`<button
                class="fp3d-chip ${this._furnish?"fp3d-chip-on":""}"
                aria-pressed=${this._furnish}
                title=${this.t("furnish_hint")}
                @click=${()=>{this._furnish=!this._furnish,this._selFurniture=null}}
              >
                ${this.t("furnish")}
              </button>`:_}
          ${this._roomId||this._floorId&&e.floors.length>1?m`<button class="fp3d-chip" @click=${()=>this.back()}>${this.t("back")}</button>`:_}
        </div>
        ${this._furnish?m`<div class="fp3d-furnish-bar">
              ${this._selFurniture?m`<span>${this.furnitureName(this._selFurniture)}</span>
                    ${this.renderSizeFields(this._selFurniture)}
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(-45)}>↺ 45°</button>
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(45)}>↻ 45°</button>
                    <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>`:this._selDevice?m`<span>${I(this.hass,this._selDevice)}</span>
                      ${this.renderDeviceFields(this._selDevice)}
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(-this.turnStep())}>↺ ${this.turnStep()}°</button>
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(this.turnStep())}>↻ ${this.turnStep()}°</button>
                      <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteDevice()}>${this.t("delete")}</button>`:m`<span>${this.t("furnish_hint")}</span>`}
              <button class="fp3d-chip fp3d-chip-on" @click=${()=>(this._furnish=!1,this._selFurniture=null,this._selDevice=null)}>${this.t("done")}</button>
            </div>`:_}
      </div>
    `}static styles=[N,Y,C`
      :host {
        display: block;
        /* HA gives the custom panel's parent no explicit height, so 100% collapses. */
        height: 100vh;
        height: 100dvh;
        background: var(--fp3d-bg);
      }
      .fp3d-app {
        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: 0;
      }
      .fp3d-header {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 6px 14px 6px 4px;
        min-height: 52px;
        border-bottom: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        flex-wrap: wrap;
      }
      ha-menu-button {
        color: var(--fp3d-text);
      }
      h1 {
        font-family: var(--fp3d-title-font);
        font-weight: 700;
        font-size: 19px;
        letter-spacing: -0.01em;
        margin: 0 4px 0 8px;
        white-space: nowrap;
      }
      .fp3d-notices {
        display: grid;
        gap: 6px;
        padding: 8px 14px 0;
      }
      .fp3d-notice {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px 12px;
        padding: 9px 12px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        font-size: 13.5px;
      }
      .fp3d-notice span {
        flex: 1;
        min-width: 200px;
      }
      .fp3d-notice-warn {
        border-color: rgba(255, 181, 71, 0.6);
        color: var(--fp3d-warm);
      }
      .fp3d-notice-error {
        border-color: rgba(255, 107, 139, 0.6);
        color: var(--fp3d-danger);
        word-break: break-word;
      }
      .fp3d-chip-on {
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
      }
      .fp3d-furnish-bar {
        position: absolute;
        left: 50%;
        bottom: 16px;
        transform: translateX(-50%);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 8px;
        max-width: calc(100% - 24px);
        padding: 8px 10px 8px 16px;
        border-radius: 999px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        font-size: 13.5px;
      }
      .fp3d-size-select {
        font: inherit;
        color: var(--fp3d-text);
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        padding: 4px 10px;
      }
      .fp3d-size {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-size input {
        width: 58px;
        padding: 5px 6px;
        border: 1px solid rgba(127, 127, 127, 0.35);
        border-radius: 8px;
        background: transparent;
        color: inherit;
        font: inherit;
        font-size: 13px;
      }
      .fp3d-danger-chip {
        color: var(--fp3d-danger);
      }
      .fp3d-grow {
        flex: 1;
      }
      .fp3d-save {
        font-size: 12.5px;
        color: var(--fp3d-muted);
      }
      .fp3d-save-error {
        color: var(--fp3d-danger);
      }
      .fp3d-body {
        flex: 1;
        min-height: 0;
      }
      .fp3d-nav {
        display: flex;
        gap: 6px;
        padding: 10px 14px;
        overflow-x: auto;
        scrollbar-width: none;
        flex: none;
      }
      .fp3d-nav .fp3d-chip {
        box-shadow: none;
        border: 1px solid var(--fp3d-line);
      }
      .fp3d-sep {
        flex: none;
        width: 1px;
        margin: 4px 4px;
        background: var(--fp3d-line);
      }
      .fp3d-stage-wrap {
        position: relative;
        flex: 1;
        min-height: 0;
        display: flex;
        container-type: size;
        container-name: fp3d;
      }
      .fp3d-stage-wrap fp3d-view3d {
        flex: 1;
      }
      .fp3d-room-panel {
        position: absolute;
        top: 58px;
        right: 14px;
        bottom: 14px;
        width: min(360px, calc(100% - 28px));
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        pointer-events: none;
      }
      /* the switches sit at the bottom (as in the card), where they never meet the energy values or warnings */
      fp3d-view3d {
        --fp3d-bottom-inset: 52px;
      }
      .fp3d-furnish-bar {
        bottom: 68px;
      }
      /* phones and portrait tablets: panel as a sheet at the bottom, the switches step aside */
      @container fp3d ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .fp3d-room-panel {
          top: auto;
          left: 8px;
          right: 8px;
          bottom: 8px;
          width: auto;
          height: 55%;
          justify-content: flex-end;
        }
        .fp3d-room-open .fp3d-overlay {
          display: none;
        }
      }
      .fp3d-overlay {
        position: absolute;
        right: 12px;
        bottom: 12px;
        left: 60px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        align-items: center;
        pointer-events: none;
      }
      .fp3d-overlay > * {
        pointer-events: auto;
      }
      .fp3d-quality button {
        padding: 5px 11px;
        min-height: 30px;
        font-size: 13px;
      }
      .fp3d-message,
      .fp3d-empty {
        padding: 32px 20px;
        color: var(--fp3d-muted);
        text-align: center;
      }
      .fp3d-empty {
        display: grid;
        justify-items: center;
        gap: 12px;
        margin: auto;
      }
    `]};customElements.get("neonplan3d-panel")||customElements.define("neonplan3d-panel",Nt);function Ye(i,e,t=new Date){if(!i||i==="off")return!1;if(i==="sun")return e?.states["sun.sun"]?.state==="below_horizon";let n=/^(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})$/.exec(i.trim());if(!n)return!1;let r=Number(n[1])*60+Number(n[2]),o=Number(n[3])*60+Number(n[4]),s=t.getHours()*60+t.getMinutes();return r<=o?s>=r&&s<o:s>=r||s<o}var Er;function Ar(){let i=new URL("./neonplan3d-card-editor.js?v=c0a1bd592eea",new URL(import.meta.url)).href;return Er??=import(i),Er}var Wt=class extends H{static properties={hass:{attribute:!1},_config:{state:!0},_roomId:{state:!0},_floorId:{state:!0},_walls:{state:!0},_heat:{state:!0},_explode:{state:!0},_fullscreen:{state:!0},_night:{state:!0},_orbit:{state:!0}};idleTimer;nightTimer;data=new le(this);constructor(){super(),this._roomId=null,this._floorId=void 0,this._walls=null,this._heat=null,this._explode=null,this._fullscreen=!1,this._night=!1,this._orbit=!1}touch=()=>{this._orbit&&(this._orbit=!1),this.armIdle()};armIdle(){clearTimeout(this.idleTimer);let e=this._config?.idle_return??0;e>0&&(this.idleTimer=setTimeout(()=>this.returnHome(),e*1e3))}view3d(){return this.shadowRoot?.querySelector("fp3d-view3d")}returnHome(){this._roomId=null,this._floorId=void 0,this.view3d()?.resetView(),this._config?.idle_orbit&&(this._orbit=!0)}onFullscreen=()=>this._fullscreen=!!document.fullscreenElement&&this.shadowRoot?.contains(document.fullscreenElement)===!0;connectedCallback(){super.connectedCallback(),document.addEventListener("fullscreenchange",this.onFullscreen),this.armIdle(),this.nightTimer=setInterval(()=>this._night=Ye(this._config?.night,this.hass),6e4)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this.onFullscreen),clearTimeout(this.idleTimer),clearInterval(this.nightTimer)}toggleFullscreen(){document.fullscreenElement?document.exitFullscreen():this.shadowRoot?.querySelector("ha-card")?.requestFullscreen?.()}static async getConfigElement(){return await Ar(),document.createElement("neonplan3d-card-editor")}static getStubConfig(){return{type:"custom:neonplan3d-card"}}setConfig(e){if(e.height!==void 0&&!(e.height>100))throw new Error("height must be a number of pixels above 100");this._config=e,this._floorId=void 0,this._walls=null,this._heat=null,this._explode=null,this._orbit=!1,this._night=Ye(e.night,this.hass),this.armIdle()}getCardSize(){return Math.ceil((this._config?.height??420)/50)}getGridOptions(){return{columns:"full",rows:this._config?.fill?12:Math.ceil((this._config?.height??420)/56),min_rows:4}}willUpdate(e){if(e.has("hass")&&this.hass){this.data.setHass(this.hass);let t=Ye(this._config?.night,this.hass);t!==this._night&&(this._night=t)}}get canSwitch(){return!this._config?.floor||this.thumbs}get thumbs(){return this._config?.floor_thumbs??!this._config?.floor}back(){this._roomId?this._roomId=null:this.canSwitch&&(this._floorId=null)}render(){let e=this.data.building,t=this._config?.height??420,n=this._config,r=this._floorId===void 0?n?.floor??null:this._floorId,o=e&&e.floors.length===1?e.floors[0].id:e?.floors.some(g=>g.id===r)?r:null,s=!!this._roomId&&n?.room_panel===!1||!this.thumbs&&this.canSwitch&&!this._roomId&&!!o&&(e?.floors.length??0)>1,a=g=>n?.controls===!0||Array.isArray(n?.controls)&&n.controls.includes(g),l=["temperature","humidity","co2"].filter(g=>a(g)),c=this._walls??n?.walls??"auto",d=this._heat??n?.heatmap??"none",p=this._explode??n?.explode??!0,f=this._fullscreen?"100vh":n?.fill?"calc(100vh - var(--header-height, 56px) - 16px)":`${t}px`,u=!!e&&(s||!!n?.controls&&!(this._roomId&&n.room_panel!==!1)),h=g=>S(this.hass,g);return m`<ha-card class=${this._night?"fp3d-night":""} @pointerdown=${this.touch} @keydown=${this.touch} @wheel=${this.touch}>
      <div class="fp3d-card-body" style="height:${f}">
        ${e&&e.floors.some(g=>g.rooms.length)?m`<fp3d-view3d
              .hass=${this.hass}
              .building=${e}
              .packs=${this.data.packs}
              .floorId=${o}
              .roomId=${this._roomId}
              .wallMode=${c}
              .explode=${p}
              .quality=${this._config?.quality??"auto"}
              ?showStats=${this._config?.stats??!1}
              .markerMode=${this._config?.markers??"important"}
              .heatMode=${d}
              .theme=${this._config?.theme??"neon"}
              .showEnergy=${this._config?.energy??!0}
              .flows=${this._config?.flows??null}
              .floorThumbs=${this.thumbs}
              .roomLabels=${n?.room_names!==!1}
              .floorStack=${n?.floor_stack??"dim"}
              .panelOpen=${!!this._roomId&&n?.room_panel!==!1}
              .alerts=${n?.alerts!==!1}
              .alertJump=${!!n?.alert_jump}
              .scenes=${n?.scenes!==!1}
              ?trail=${!!n?.motion_trail}
              .dimmed=${this._night}
              .autoOrbit=${this._orbit}
              style=${u?"--fp3d-bottom-inset: 52px":""}
              @room-tap=${g=>{if(this.canSwitch&&(e?.floors.length??0)>1&&g.detail.floorId&&o!==g.detail.floorId){this._floorId=g.detail.floorId,this._roomId=null;return}g.detail.roomId&&(this._roomId=g.detail.roomId===this._roomId?null:g.detail.roomId)}}
              @floor-tap=${g=>{this._floorId=g.detail.floorId,this._roomId=null}}
              @back=${()=>this.back()}
            ></fp3d-view3d>`:m`<p class="fp3d-card-msg">${this.data.error??(e?S(this.hass,"no_building"):S(this.hass,"loading"))}</p>`}
        ${this._roomId&&e&&this._config?.room_panel!==!1?m`<fp3d-room-panel
              @camera-look=${g=>this.view3d()?.lookThrough(g.detail.entity)}
              class="fp3d-card-panel"
              .hass=${this.hass}
              .room=${e.floors.flatMap(g=>g.rooms).find(g=>g.id===this._roomId)??null}
              .floor=${e.floors.find(g=>g.rooms.some(y=>y.id===this._roomId))??null}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:_}
        ${u&&e?m`<div class="fp3d-card-controls">
              ${s?m`<button class="fp3d-chip" @click=${()=>this.back()}>${h("back")}</button>`:_}
              ${a("walls")?m`<div class="fp3d-seg">
                    <button aria-pressed=${c==="auto"} @click=${()=>this._walls="auto"}>${h("walls_auto")}</button>
                    <button aria-pressed=${c==="cut"} @click=${()=>this._walls="cut"}>${h("walls_cut")}</button>
                  </div>`:_}
              ${a("floors")&&e.floors.length>1&&!o?m`<div class="fp3d-seg">
                    <button aria-pressed=${p} @click=${()=>this._explode=!0}>${h("floors_apart")}</button>
                    <button aria-pressed=${!p} @click=${()=>this._explode=!1}>${h("floors_stacked")}</button>
                  </div>`:_}
              ${l.length?m`<div class="fp3d-seg" role="group" aria-label=${h("heatmap")}>
                    ${["none",...l].map(g=>m`<button aria-pressed=${d===g} @click=${()=>this._heat=g}>
                          ${h(g==="none"?"heat_off":`heat_short_${g}`)}
                        </button>`)}
                  </div>`:_}
            </div>`:_}
        ${n?.fullscreen_button&&!(this._roomId&&n.room_panel!==!1)?m`<button class="fp3d-card-full" title=${h(this._fullscreen?"fullscreen_exit":"fullscreen")} aria-label=${h(this._fullscreen?"fullscreen_exit":"fullscreen")} @click=${()=>this.toggleFullscreen()}>
              ${this._fullscreen?"\u2715":"\u26F6"}
            </button>`:_}
      </div>
    </ha-card>`}static styles=[N,Y,C`
      .fp3d-card-controls {
        position: absolute;
        left: 60px;
        right: 10px;
        bottom: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        pointer-events: none;
      }
      .fp3d-card-controls > * {
        pointer-events: auto;
      }
      .fp3d-card-full {
        position: absolute;
        right: 10px;
        top: 10px;
        width: 38px;
        height: 38px;
        border: 0;
        border-radius: 12px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        font-size: 18px;
        cursor: pointer;
      }
      ha-card {
        overflow: hidden;
        background: var(--fp3d-bg);
        height: 100%;
      }
      /* night (kiosk): the whole card dimmed */
      ha-card.fp3d-night .fp3d-card-body {
        filter: brightness(0.55);
      }
      .fp3d-card-body {
        position: relative;
        display: flex;
        height: 100%;
        container-type: size;
        container-name: fp3d;
      }
      fp3d-view3d {
        flex: 1;
      }
      .fp3d-card-msg {
        margin: auto;
        color: var(--fp3d-muted);
        padding: 16px;
        text-align: center;
      }
      .fp3d-card-panel {
        position: absolute;
        top: 10px;
        right: 10px;
        bottom: 10px;
        width: min(340px, calc(100% - 20px));
        display: flex;
        flex-direction: column;
        pointer-events: none;
      }
      /* phones and portrait tablets: the room panel becomes a sheet at the bottom */
      @container fp3d ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .fp3d-card-panel {
          top: auto;
          left: 8px;
          right: 8px;
          bottom: 8px;
          width: auto;
          height: 55%;
          justify-content: flex-end;
        }
      }
    `]};if(!customElements.get("neonplan3d-card")){customElements.define("neonplan3d-card",Wt);let i=window;i.customCards=i.customCards??[],i.customCards.push({type:"neonplan3d-card",name:S(void 0,"card_name"),description:S(void 0,"card_description"),preview:!1})}jt();
