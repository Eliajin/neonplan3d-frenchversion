var st=globalThis,ot=st.ShadowRoot&&(st.ShadyCSS===void 0||st.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Rt=Symbol(),Wn=new WeakMap,We=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Rt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(ot&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Wn.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Wn.set(t,e))}return e}toString(){return this.cssText}},Hn=o=>new We(typeof o=="string"?o:o+"",void 0,Rt),ee=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((n,i,r)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[r+1],o[0]);return new We(t,o,Rt)},Cn=(o,e)=>{if(ot)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),i=st.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,o.appendChild(n)}},Ft=ot?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return Hn(t)})(o):o;var{is:Vr,defineProperty:Nr,getOwnPropertyDescriptor:Kr,getOwnPropertyNames:jr,getOwnPropertySymbols:Ur,getPrototypeOf:Gr}=Object,at=globalThis,Bn=at.trustedTypes,qr=Bn?Bn.emptyScript:"",Xr=at.reactiveElementPolyfillSupport,He=(o,e)=>o,Pt={toAttribute(o,e){switch(e){case Boolean:o=o?qr:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},Nn=(o,e)=>!Vr(o,e),Vn={attribute:!0,type:String,converter:Pt,reflect:!1,useDefault:!1,hasChanged:Nn};Symbol.metadata??=Symbol("metadata"),at.litPropertyMetadata??=new WeakMap;var se=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Vn){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(e,n,t);i!==void 0&&Nr(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){let{get:i,set:r}=Kr(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:i,set(s){let a=i?.call(this);r?.call(this,s),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Vn}static _$Ei(){if(this.hasOwnProperty(He("elementProperties")))return;let e=Gr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(He("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(He("properties"))){let t=this.properties,n=[...jr(t),...Ur(t)];for(let i of n)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,i]of t)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let i=this._$Eu(t,n);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let i of n)t.unshift(Ft(i))}else e!==void 0&&t.push(Ft(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Cn(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){let r=(n.converter?.toAttribute!==void 0?n.converter:Pt).toAttribute(t,n.type);this._$Em=e,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){let n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let r=n.getPropertyOptions(i),s=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:Pt;this._$Em=i;let a=s.fromAttribute(t,r.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(e,t,n,i=!1,r){if(e!==void 0){let s=this.constructor;if(i===!1&&(r=this[e]),n??=s.getPropertyOptions(e),!((n.hasChanged??Nn)(r,t)||n.useDefault&&n.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:i,wrapped:r},s){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),r!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[i,r]of n){let{wrapped:s}=r,a=this[i];s!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,r,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};se.elementStyles=[],se.shadowRootOptions={mode:"open"},se[He("elementProperties")]=new Map,se[He("finalized")]=new Map,Xr?.({ReactiveElement:se}),(at.reactiveElementVersions??=[]).push("2.1.2");var Ht=globalThis,Kn=o=>o,lt=Ht.trustedTypes,jn=lt?lt.createPolicy("lit-html",{createHTML:o=>o}):void 0,Yn="$lit$",de=`lit$${Math.random().toFixed(9).slice(2)}$`,Jn="?"+de,Zr=`<${Jn}>`,_e=document,Be=()=>_e.createComment(""),Ve=o=>o===null||typeof o!="object"&&typeof o!="function",Ct=Array.isArray,Yr=o=>Ct(o)||typeof o?.[Symbol.iterator]=="function",It=`[ 	
\f\r]`,Ce=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Un=/-->/g,Gn=/>/g,fe=RegExp(`>|${It}(?:([^\\s"'>=/]+)(${It}*=${It}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qn=/'/g,Xn=/"/g,Qn=/^(?:script|style|textarea|title)$/i,Bt=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),m=Bt(1),z=Bt(2),ao=Bt(3),ge=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),Zn=new WeakMap,me=_e.createTreeWalker(_e,129);function ei(o,e){if(!Ct(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return jn!==void 0?jn.createHTML(e):e}var Jr=(o,e)=>{let t=o.length-1,n=[],i,r=e===2?"<svg>":e===3?"<math>":"",s=Ce;for(let a=0;a<t;a++){let l=o[a],c,d,u=-1,h=0;for(;h<l.length&&(s.lastIndex=h,d=s.exec(l),d!==null);)h=s.lastIndex,s===Ce?d[1]==="!--"?s=Un:d[1]!==void 0?s=Gn:d[2]!==void 0?(Qn.test(d[2])&&(i=RegExp("</"+d[2],"g")),s=fe):d[3]!==void 0&&(s=fe):s===fe?d[0]===">"?(s=i??Ce,u=-1):d[1]===void 0?u=-2:(u=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?fe:d[3]==='"'?Xn:qn):s===Xn||s===qn?s=fe:s===Un||s===Gn?s=Ce:(s=fe,i=void 0);let v=s===fe&&o[a+1].startsWith("/>")?" ":"";r+=s===Ce?l+Zr:u>=0?(n.push(c),l.slice(0,u)+Yn+l.slice(u)+de+v):l+de+(u===-2?a:v)}return[ei(o,r+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},Ne=class o{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let r=0,s=0,a=e.length-1,l=this.parts,[c,d]=Jr(e,t);if(this.el=o.createElement(c,n),me.currentNode=this.el.content,t===2||t===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=me.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let u of i.getAttributeNames())if(u.endsWith(Yn)){let h=d[s++],v=i.getAttribute(u).split(de),g=/([.?@])?(.*)/.exec(h);l.push({type:1,index:r,name:g[2],strings:v,ctor:g[1]==="."?Lt:g[1]==="?"?Dt:g[1]==="@"?Ot:Se}),i.removeAttribute(u)}else u.startsWith(de)&&(l.push({type:6,index:r}),i.removeAttribute(u));if(Qn.test(i.tagName)){let u=i.textContent.split(de),h=u.length-1;if(h>0){i.textContent=lt?lt.emptyScript:"";for(let v=0;v<h;v++)i.append(u[v],Be()),me.nextNode(),l.push({type:2,index:++r});i.append(u[h],Be())}}}else if(i.nodeType===8)if(i.data===Jn)l.push({type:2,index:r});else{let u=-1;for(;(u=i.data.indexOf(de,u+1))!==-1;)l.push({type:7,index:r}),u+=de.length-1}r++}}static createElement(e,t){let n=_e.createElement("template");return n.innerHTML=e,n}};function $e(o,e,t=o,n){if(e===ge)return e;let i=n!==void 0?t._$Co?.[n]:t._$Cl,r=Ve(e)?void 0:e._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(o),i._$AT(o,t,n)),n!==void 0?(t._$Co??=[])[n]=i:t._$Cl=i),i!==void 0&&(e=$e(o,i._$AS(o,e.values),i,n)),e}var Tt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,i=(e?.creationScope??_e).importNode(t,!0);me.currentNode=i;let r=me.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new Ke(r,r.nextSibling,this,e):l.type===1?c=new l.ctor(r,l.name,l.strings,this,e):l.type===6&&(c=new Wt(r,this,e)),this._$AV.push(c),l=n[++a]}s!==l?.index&&(r=me.nextNode(),s++)}return me.currentNode=_e,i}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},Ke=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,i){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=$e(this,e,t),Ve(e)?e===y||e==null||e===""?(this._$AH!==y&&this._$AR(),this._$AH=y):e!==this._$AH&&e!==ge&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Yr(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==y&&Ve(this._$AH)?this._$AA.nextSibling.data=e:this.T(_e.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Ne.createElement(ei(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(t);else{let r=new Tt(i,this),s=r.u(this.options);r.p(t),this.T(s),this._$AH=r}}_$AC(e){let t=Zn.get(e.strings);return t===void 0&&Zn.set(e.strings,t=new Ne(e)),t}k(e){Ct(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,i=0;for(let r of e)i===t.length?t.push(n=new o(this.O(Be()),this.O(Be()),this,this.options)):n=t[i],n._$AI(r),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=Kn(e).nextSibling;Kn(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Se=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,r){this.type=1,this._$AH=y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=y}_$AI(e,t=this,n,i){let r=this.strings,s=!1;if(r===void 0)e=$e(this,e,t,0),s=!Ve(e)||e!==this._$AH&&e!==ge,s&&(this._$AH=e);else{let a=e,l,c;for(e=r[0],l=0;l<r.length-1;l++)c=$e(this,a[n+l],t,l),c===ge&&(c=this._$AH[l]),s||=!Ve(c)||c!==this._$AH[l],c===y?e=y:e!==y&&(e+=(c??"")+r[l+1]),this._$AH[l]=c}s&&!i&&this.j(e)}j(e){e===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Lt=class extends Se{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===y?void 0:e}},Dt=class extends Se{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==y)}},Ot=class extends Se{constructor(e,t,n,i,r){super(e,t,n,i,r),this.type=5}_$AI(e,t=this){if((e=$e(this,e,t,0)??y)===ge)return;let n=this._$AH,i=e===y&&n!==y||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==y&&(n===y||i);i&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Wt=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){$e(this,e)}};var Qr=Ht.litHtmlPolyfillSupport;Qr?.(Ne,Ke),(Ht.litHtmlVersions??=[]).push("3.3.3");var ti=(o,e,t)=>{let n=t?.renderBefore??e,i=n._$litPart$;if(i===void 0){let r=t?.renderBefore??null;n._$litPart$=i=new Ke(e.insertBefore(Be(),r),r,void 0,t??{})}return i._$AI(o),i};var Vt=globalThis,Y=class extends se{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ti(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ge}};Y._$litElement$=!0,Y.finalized=!0,Vt.litElementHydrateSupport?.({LitElement:Y});var es=Vt.litElementPolyfillSupport;es?.({LitElement:Y});(Vt.litElementVersions??=[]).push("4.2.2");async function Nt(o,e){return(await o.callWS({type:"neonplan3d/image/get",image_id:e})).data}async function ct(o,e,t){await o.callWS({type:"neonplan3d/image/set",image_id:e,data:t})}async function ni(o){return(await o.callWS({type:"neonplan3d/history/list"})).snapshots}async function ii(o){await o.callWS({type:"neonplan3d/history/snapshot"})}async function ri(o,e){return(await o.callWS({type:"neonplan3d/history/restore",snapshot_id:e})).revision}async function si(o,e){return o.callWS({type:"neonplan3d/packs/import",pack:e})}async function oi(o,e){await o.callWS({type:"neonplan3d/packs/remove",pack_id:e})}var ts="neonplan3d.seenOffers";function ai(o){try{localStorage.setItem(ts,JSON.stringify(o.map(e=>e.id)))}catch{}}var li="neonplan3d.seenUpdates";function ci(o){let e=[];try{e=JSON.parse(localStorage.getItem(li)??"[]")}catch{}return o.filter(t=>!e.includes(`${t.id}@${t.release}`))}function di(o){try{localStorage.setItem(li,JSON.stringify(o.map(e=>`${e.id}@${e.release}`)))}catch{}}function ui(o,e){return e?`${o}${o.includes("?")?"&":"?"}np_coupon=${encodeURIComponent(e.code)}`:o}function Kt(o){return o.callWS({type:"neonplan3d/license/get"})}function jt(o,e){return o.callWS({type:"neonplan3d/license/activate",key:e})}function pi(o){return o.callWS({type:"neonplan3d/license/remove"})}function hi(o){return o.callWS({type:"neonplan3d/license/refresh"})}function fi(o){return o.callWS({type:"neonplan3d/backup/export"})}function mi(o,e,t){return o.callWS({type:"neonplan3d/backup/import",building:e,packs:t})}function _i(o,e){return o.callWS({type:"neonplan3d/packs/install",pack_id:e})}var gi=[],Ut=new Map,ns=0;function bi(o){gi=o,Ut=new Map(o.flatMap(e=>e.items.map(t=>[je(e.id,t.id),t]))),ns++}function vi(){return gi}function je(o,e){return`pack:${o}:${e}`}function Gt(o){return o.startsWith("pack:")}var is={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function yi(o){return j(o)?.parts.find(e=>e.screen)}function j(o){if(!Gt(o))return;let e=Ut.get(o);if(e)return e;let[,t,...n]=o.split(":"),i=is[t];return i?Ut.get(`pack:${i}:${n.join(":")}`):void 0}function dt(o){return te[o]??j(o)?.size??[.6,.6,.8]}function qt(o){return $i.has(o)||!!j(o)?.electric}function Me(o,e){let t=e.split("-")[0];return o.name[t]??o.name.en??Object.values(o.name)[0]??o.id}function Xt(o,e){let t=j(e.type);if(e.mount_y!=null)return e.mount_y;if(e.type==="lamp_wall")return wi;if(e.type==="led_strip")return Math.max(0,o.height-.04-Math.max(.02,e.h));switch(t?.mount){case"surface":return xi(o,e.x,e.z);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,o.height-e.h);default:return t?0:ki(e)}}var Si=["always","no_power","never"],Mi=["gable","hip","pent","flat"];function Zt(o,e,t){return o?e?!!t.lock_plan:!!o.locked:!1}var zi=["rain","snow","fog","clouds","lightning","sky"],Yt=["rain","snow","clouds","lightning","sky"],Ai=["lawn","terrace","path","driveway","pool","bed","hedge","fence"],rs={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,hedge:1.2,fence:1};function ss(o){return o.elevation>.3?0:-.2}function Ei(o,e,t){let n=(o.outdoor??[]).find(i=>i.type!=="hedge"&&i.type!=="fence"&&i.type!=="pool"&&T([e,t],i.points));return ss(o)+(n?rs[n.type]:0)}var os={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,tariff:null},Ri=["wood","oak","tiles","carpet","stone","concrete"],Fi={type:"none",pitch:35,overhang:.4},as={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Fi}};function Pi(o,e,t){return{id:o,name:e,elevation:t,height:2.5,cut_height:1.15,rooms:[],openings:[],furniture:[],placements:[],background:null,outdoor:[],walls:[],ha_floor:null}}var ls=2.75;function Ii(o,e){if(e!=null&&Number.isFinite(e))return Math.round(e*ls*100)/100;let t=o.reduce((n,i)=>!n||i.elevation>n.elevation?i:n,null);return t?Math.round((t.elevation+t.height+.25)*100)/100:0}function Ti(o,e,t){let n=o.rooms.flatMap(a=>a.points.map(l=>l[0])),i=o.rooms.flatMap(a=>a.points.map(l=>l[1])),r=n.length?Math.ceil(Math.max(...n))+1:0,s=i.length?Math.floor(Math.min(...i)):0;return e.map((a,l)=>{let c=r+l%3*4.5,d=s+Math.floor(l/3)*3.5;return{id:t(),name:a.name,area_id:a.area_id,points:[[c,d],[c+4,d],[c+4,d+3],[c,d+3]],floor_material:"wood"}})}function Li(o,e,t,n){let i=o.rotation*Math.PI/180,r=Math.cos(i),s=Math.sin(i),[a,l]=e,c=o.x-a*(o.w/2)*r+l*(o.d/2)*s,d=o.z-a*(o.w/2)*s-l*(o.d/2)*r,u=t[0]-c,h=t[1]-d,v=b=>Math.max(.1,Math.round(b/n)*n),g=v((u*r+h*s)*a),p=v((-u*s+h*r)*l),w=b=>Math.round(b*1e3)/1e3;return{x:w(c+a*(g/2)*r-l*(p/2)*s),z:w(d+a*(g/2)*s+l*(p/2)*r),w:w(g),d:w(p)}}var Di=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_table","lamp_wall","led_strip","lamp_uplight","lamp_bollard","lamp_garden","radiator","sofa","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug","table","table_round","chair","bench","corner_bench","bar_stool","kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge","bed","bunk_bed","nightstand","wardrobe","dresser","bathtub","shower","wc","washbasin","washer","dryer","desk","office_chair","tall_cabinet","coat_rack","stairs","robot_vacuum","inverter","home_battery","wallbox","parking","fridge_smart","stairwell"],Oi={lights:["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"],living:["sofa","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug"],dining:["table","table_round","chair","bench","corner_bench","bar_stool"],kitchen:["kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge"],sleeping:["bed","bunk_bed","nightstand","wardrobe","dresser"],bath:["bathtub","shower","wc","washbasin","washer","dryer"],work:["desk","worktop","office_chair","tall_cabinet","coat_rack","radiator","stairs","robot_vacuum"],vehicles:["parking"]},be=["inverter","home_battery","wallbox"],Wi=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),wi=1.75;function Jt(o){return["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","stairs","stairwell","parking"].includes(o.type)?!1:j(o.type)?.mount!=="ceiling"}function oe(o){return Wi.has(o)||!!j(o)?.light}var cs=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Qt(o,e,t,n=0){let i=J(o.points),r=i.x1-i.x0-2*n,s=i.z1-i.z0-2*n,a=[];for(let l=0;l<e;l++)for(let c=0;c<t;c++){let d=[Math.round((i.x0+n+r/t*(c+.5))*1e3)/1e3,Math.round((i.z0+n+s/e*(l+.5))*1e3)/1e3];T(d,o.points)&&a.push(d)}return a}function ze(o,e,t){let n=s=>Math.round(s*1e3)/1e3,[i,r]={right:[1,0],down:[0,1],left:[-1,0],up:[0,-1]}[t];return[n(o[0]+i*e),n(o[1]+r*e)]}function ki(o){switch(o.type){case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-o.h/2);case"radiator":return .12;case"inverter":return 1.1;case"wallbox":return 1;default:return 0}}function xi(o,e,t){let n=0;for(let i of o.furniture)!(cs.has(i.type)||j(i.type)?.surface)||!T([e,t],on(i))||(n=Math.max(n,i.h));return n}var $i=new Set([...Wi,"radiator","robot_vacuum","inverter","home_battery","wallbox","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),te={sofa:[2.2,.9,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};var en=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],tn=["standard","bars"];function nn(o,e){return o.type==="door"?o.style&&en.includes(o.style)?o.style:e?"front":"interior":o.style&&tn.includes(o.style)?o.style:"standard"}function rn(o){return o==="front"||o==="front_glass"||o==="sidelight"||o==="sidelights"}var ut={door:{type:"door",leaves:1,width:.9,sill:0,height:2.05,style:"interior"},front:{type:"door",leaves:1,width:1,sill:0,height:2.1,style:"front"},door_double:{type:"door",leaves:2,width:1.6,sill:0,height:2.05},window:{type:"window",leaves:1,width:1.2,sill:.9,height:1.3},window_double:{type:"window",leaves:2,width:1.6,sill:.9,height:1.3},terrace:{type:"window",leaves:1,width:1,sill:0,height:2.1},terrace_double:{type:"window",leaves:2,width:1.8,sill:0,height:2.1},garage:{type:"garage",leaves:1,width:2.5,sill:0,height:2.1}};function sn(o){if(o.type==="garage")return"garage";let e=o.leaves===2;return o.type==="door"?!e&&o.style&&rn(o.style)?"front":e?"door_double":"door":o.sill<.1?e?"terrace_double":"terrace":e?"window_double":"window"}function pt(o){o.energy={...os,...o.energy??{}},o.presence=o.presence??[],o.settings={...as,...o.settings,roof:{...Fi,...o.settings?.roof??{}}};for(let e of o.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(n=>({...n,panel:n.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(n=>({...n,mount:n.mount??null,rotation:n.rotation??0})),e.furniture=e.furniture.map(n=>({...n,entity:n.entity??null,power:n.power??null}));let t=e.placements.filter(n=>n.entity_id.startsWith("light."));if(t.length){let n={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let i of t){let r=n[i.mount??"ceiling"],[s,a,l]=te[r];e.furniture.push({id:`lamp_${i.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:r,x:i.x,z:i.z,rotation:0,w:s,d:a,h:l,variant:null,entity:i.entity_id,power:null})}e.placements=e.placements.filter(i=>!i.entity_id.startsWith("light."))}e.openings=e.openings.map(n=>({...n,hinge:n.hinge??"left",leaves:n.leaves??1,swing:n.swing??"in",style:n.style??null,cover:n.cover??null,contact:n.contact??null,contact2:n.contact2??null,tilt:n.tilt??null}))}return o}function O(o){return`${o}_${Math.random().toString(36).slice(2,10)}`}function q(o){let e=0;for(let t=0;t<o.length;t++){let[n,i]=o[t],[r,s]=o[(t+1)%o.length];e+=n*s-r*i}return e/2}function Ae(o){return Math.abs(q(o))}function ne(o){let e=q(o);if(Math.abs(e)<1e-9){let i=o.length||1;return[o.reduce((r,s)=>r+s[0],0)/i,o.reduce((r,s)=>r+s[1],0)/i]}let t=0,n=0;for(let i=0;i<o.length;i++){let[r,s]=o[i],[a,l]=o[(i+1)%o.length],c=r*l-a*s;t+=(r+a)*c,n+=(s+l)*c}return[t/(6*e),n/(6*e)]}function ht(o){if(o.length!==4)return!1;for(let e=0;e<4;e++){let[t,n]=o[e],[i,r]=o[(e+1)%4];if(Math.abs(t-i)>1e-6&&Math.abs(n-r)>1e-6)return!1}return!0}function J(o){let e=1/0,t=1/0,n=-1/0,i=-1/0;for(let[r,s]of o)e=Math.min(e,r),t=Math.min(t,s),n=Math.max(n,r),i=Math.max(i,s);return{x0:e,z0:t,x1:n,z1:i}}function on(o){let e=o.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),i=o.w/2,r=o.d/2;return[[-i,-r],[i,-r],[i,r],[-i,r]].map(([s,a])=>[o.x+s*t-a*n,o.z+s*n+a*t])}function T(o,e){let t=!1;for(let n=0,i=e.length-1;n<e.length;i=n++){let[r,s]=e[n],[a,l]=e[i];s>o[1]!=l>o[1]&&o[0]<(a-r)*(o[1]-s)/(l-s)+r&&(t=!t)}return t}var Hi={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var Ci="neonplan3d";function ds(o){let e=structuredClone(o);e.energy={...e.energy,grid:null,solar:null,battery:null,battery_soc:null,tariff:null},e.presence=[];for(let t of e.floors)t.placements=[],t.background=null,t.rooms=t.rooms.map(n=>({...n,area_id:null})),t.furniture=t.furniture.map(n=>({...n,entity:null,power:null})),t.openings=t.openings.map(n=>({...n,cover:null,contact:null,tilt:null}));return e}function Bi(o,e){return{format:Ci,version:1,exported_at:new Date().toISOString(),building:e?ds(o):structuredClone(o)}}function Vi(o){let e;try{e=JSON.parse(o)}catch{throw new Error("not_json")}let t=e,n=t?.format===Ci?t.building:e;if(!n||n.version!==1||!Array.isArray(n.floors)||!n.settings)throw new Error("not_plan");for(let i of n.floors)i.background=null;return pt(n)}function Ni(o){let e=new Set;for(let t of o.floors){t.background?.image_id&&e.add(t.background.image_id);for(let n of t.furniture)for(let i of n.pictures??[])i.image&&!/^https?:\/\//.test(i.image)&&!i.image.startsWith("camera:")&&e.add(i.image)}return[...e]}function an(o,e){let t=URL.createObjectURL(new Blob([e],{type:"application/json"})),n=document.createElement("a");n.href=t,n.download=o,n.click(),setTimeout(()=>URL.revokeObjectURL(t),1e3)}var us={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},ps=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure"]),hs=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx"]),fs=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),ft=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],Ui=new Set(["light","switch","fan"]);function Gi(o){return o.slice(0,o.indexOf("."))}function W(o){return us[Gi(o)]??null}function mt(o){return o!==null&&o!=="scene"&&o!=="script"}function _t(o,e){let t=o.entities?.[e];return t?t.area_id?t.area_id:t.device_id&&o.devices?.[t.device_id]?.area_id||null:null}function ms(o,e){let t=W(e);if(!t)return!1;let n=o.entities?.[e];if(n?.hidden||n?.entity_category)return!1;let i=o.states[e];if(!i)return!1;let r=i.attributes.device_class;return t==="sensor"?r?ps.has(r):hs.has(String(i.attributes.unit_of_measurement??"")):t==="binary"?!!r&&fs.has(r):!0}var _s=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function gs(o,e){if(W(e)!=="sensor")return!1;let t=o.entities?.[e];if(t?.hidden||t?.entity_category)return!1;let n=o.states[e];return!n||!n.attributes.unit_of_measurement||_s.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||Yi(n)}var ln=null;function Ge(o){let e=ln;if(e&&e.entities===o.entities&&e.devices===o.devices&&(e.states===o.states||(e.states=o.states,Object.keys(o.states).length===e.stateCount)))return e;let t=new Map,n=new Map,i=[],r=new Map;for(let s of Object.keys(o.entities??{})){let a=o.entities[s],l=a.device_id;l&&fn(o,s)&&(n.get(l)??n.set(l,[]).get(l)).push(s),l&&!a.hidden&&!a.entity_category&&(r.get(l)??r.set(l,new Set).get(l)).add(Gi(s));let c=ms(o,s),d=_t(o,s);if(!d){(c||gs(o,s))&&mt(W(s))&&i.push(s);continue}c&&(t.get(d)??t.set(d,[]).get(d)).push(s)}i.sort((s,a)=>ft.indexOf(W(s))-ft.indexOf(W(a))||N(o,s).localeCompare(N(o,a)));for(let[s,a]of t){let l=o.areas?.[s]?.name;a.sort((c,d)=>{let u=ft.indexOf(W(c)),h=ft.indexOf(W(d));return u-h||N(o,c,l).localeCompare(N(o,d,l))})}return ln={entities:o.entities,devices:o.devices,states:o.states,stateCount:Object.keys(o.states).length,areas:t,power:n,unassigned:i,domains:r},ln}function ve(o,e){return!e||!o.entities?[]:Ge(o).areas.get(e)??[]}function qi(o,e){return o.entities?[...Ge(o).areas].filter(([t])=>t!==e).map(([t,n])=>({areaId:t,name:o.areas?.[t]?.name??t,ids:n.filter(i=>mt(W(i)))})).filter(t=>t.ids.length).sort((t,n)=>t.name.localeCompare(n.name)):[]}function Xi(o){return o.entities?Ge(o).unassigned:[]}var cn={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},bs=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),vs=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function dn(o,e){let t=o.entities?.[e]?.device_id,n=t?Ge(o).domains.get(t):void 0;return n&&[...n].some(i=>bs.has(i))?!1:!vs.test(`${e} ${o.states[e]?.attributes.friendly_name??""}`)}function Zi(o,e,t,n){let i=t.climate?.[n];if(i==="none")return[];if(i)return o.states[i]?[i]:[];let r=cn[n],s=(u,h)=>T([u,h],t.points),a=e?.placements.filter(u=>u.entity_id.startsWith("sensor."))??[],l=a.filter(u=>s(u.x,u.z)).map(u=>u.entity_id),c=new Set(a.filter(u=>!s(u.x,u.z)).map(u=>u.entity_id));return[...new Set([...ve(o,t.area_id).filter(u=>!c.has(u)),...l])].filter(u=>u.startsWith("sensor.")&&o.states[u]?.attributes.device_class===r&&dn(o,u))}function ys(o,e){return o.entities?Ge(o).power.get(e)??[]:[]}function N(o,e,t){let i=o.states[e]?.attributes.friendly_name??o.entities?.[e]?.name??e;if(t&&i.length>t.length+1&&i.toLowerCase().startsWith(t.toLowerCase()+" ")){let r=i.slice(t.length+1);return r.charAt(0).toUpperCase()+r.slice(1)}return i}function Yi(o){return!o||o.state==="unavailable"||o.state==="unknown"}function Ji(o){return!!o&&o.entity_id.startsWith("sensor.")&&o.attributes.device_class==="enum"}function un(o,e,t=null){if(o==="camera")return t==="ceiling"?Math.max(.5,e-.05):2.2;if(o==="light"&&t){if(t==="floor")return 1.95;if(t==="table")return 1.25;if(t==="wall")return 1.95}switch(o){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}function ws(o,e){let t=1/0;for(let n=0;n<e.length;n++){let i=e[n],r=e[(n+1)%e.length],s=r[0]-i[0],a=r[1]-i[1],l=s*s+a*a||1,c=Math.min(1,Math.max(0,((o[0]-i[0])*s+(o[1]-i[1])*a)/l));t=Math.min(t,Math.hypot(o[0]-i[0]-s*c,o[1]-i[1]-a*c))}return t}function Qi(o,e,t=[]){if(o.points.length<3||!e.length)return[];let n=o.points,i=n.map(_=>_[0]),r=n.map(_=>_[1]),s=Math.min(...i),a=Math.min(...r),l=Math.max(...i),c=Math.max(...r),d=Math.min(l-s,c-a),u=Math.max(.1,Math.min(.25,d/8)),h=Math.min(.35,d/5),v=ne(n),g=[];for(let _=s+u/2;_<l;_+=u)for(let f=a+u/2;f<c;f+=u){let k=[_,f];if(!T(k,n))continue;let x=ws(k,n);x<h||g.push({p:k,wall:x})}g.length||g.push({p:v,wall:0});let p=[...t],w=[],b=Math.min(.7,d/4);for(let _ of e){let f=W(_)==="light",k=g[0].p,x=-1/0;for(let{p:M,wall:E}of g){let F=p.length?Math.min(...p.map(P=>Math.hypot(M[0]-P[0],M[1]-P[1]))):3,A=Math.hypot(M[0]-v[0],M[1]-v[1]),R=Math.min(F,3)*2;A<b&&!f&&(R-=10),R-=f?A*.35:E*1.2,R>x+1e-9&&(x=R,k=M)}let $=[Math.round(k[0]*100)/100,Math.round(k[1]*100)/100];p.push($),w.push({entity_id:_,x:$[0],z:$[1],y:null,mount:null})}return w}var ks=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),xs=new Set(["garage","gate"]),$s=new Set(["window","opening"]);function Ue(o,e,t=!1){let n=new Map;return e.length&&o.forEach((i,r)=>{let s=t&&e.length===1?e[0]:e[r];s&&n.set(i.id,s)}),n}function er(o,e){let t=new Map;for(let n of e)for(let i of n.rooms){let r=n.openings.filter(_=>_.room_id===i.id).sort((_,f)=>_.edge-f.edge||_.offset-f.offset);if(!r.length)continue;let s=ve(o,i.area_id),a=_=>o.states[_]?.attributes.device_class,l=s.filter(_=>W(_)==="cover"&&ks.has(a(_))),c=r.filter(_=>_.type==="window"),d=r.filter(_=>_.type==="door"),u=r.filter(_=>_.type==="garage"),h=Ue(c,l,!0),v=Ue(c,s.filter(_=>W(_)==="binary"&&$s.has(a(_)))),g=Ue(d,s.filter(_=>W(_)==="binary"&&a(_)==="door")),p=Ue(u,s.filter(_=>W(_)==="cover"&&xs.has(a(_)??""))),w=Ue(u,s.filter(_=>W(_)==="binary"&&a(_)==="garage_door")),b=(_,f)=>_==="none"?null:_??f??null;for(let _ of r){let f=_.type==="window"?h:_.type==="garage"?p:null,k=_.type==="window"?v:_.type==="garage"?w:g;t.set(_.id,{cover:b(_.cover,f?.get(_.id)),contact:_.sensor==="handle"&&_.contact==null?null:b(_.contact,k.get(_.id)),tilt:_.tilt==="none"?null:_.tilt,contact2:_.leaves===2&&_.contact2&&_.contact2!=="none"?_.contact2:null,tilt2:_.leaves===2&&_.tilt2&&_.tilt2!=="none"?_.tilt2:null,position:_.position&&_.position!=="none"?_.position:null,positionInverted:!!_.position_inverted})}}return t}var Ss=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function pn(o){if(!o||Yi(o))return null;let e=o.attributes.window_state;for(let t of[typeof e=="string"?e:null,o.state]){if(!t)continue;let n=Ss.find(([i])=>i.test(t.trim()));if(n)return n[1]}return null}function hn(o,e){let t=new Map,n=[];for(let s of e){let a=o.entities?.[s]?.device_id??`entity:${s}`,l=t.get(a);l||(t.set(a,l=[]),n.push(a)),l.push(s)}let i=n.map(s=>{let a=t.get(s),l=a.find(c=>!o.entities?.[c]?.name)??a[0];return{primary:l,others:a.filter(c=>c!==l)}}),r=new Map(e.map((s,a)=>[s,a]));return i.sort((s,a)=>r.get(s.primary)-r.get(a.primary))}function Ms(o,e){return hn(o,e).map(t=>t.primary)}var zs={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i},As=new Set(["tv_board","tv_wall"]);function tr(o,e){let t=o.states[e.entity];if(!t)return!1;let n=e.attribute?t.attributes[e.attribute]:t.state;if(n==null)return!1;let i=String(n).toLowerCase(),r=e.state.trim().toLowerCase();return e.state.trim()==="*"||i===r||r.length>=3&&i.includes(r)}function gt(o){return As.has(o)||!!yi(o)}function nr(o){return gt(o)||o==="desk"||o==="fridge_smart"}var Ki={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function fn(o,e){return e.startsWith("sensor.")&&o.states[e]?.attributes.device_class==="power"}function Es(o,e){if(fn(o,e))return e;let t=o.entities?.[e]?.device_id;return t?ys(o,t).find(n=>n!==e)??null:null}function mn(o,e){let t=new Map;for(let n of e){let i=new Set(n.furniture.flatMap(r=>[r.entity,r.power]).filter(r=>!!r&&r!=="none"));for(let r of n.furniture){let s=r.type in Ki,a=s?Ki[r.type]:zs[r.type];if(!a&&r.entity==null&&r.power==null)continue;let l=n.rooms.find(v=>v.points.length>=3&&T([r.x,r.z],v.points)),c=l?Ms(o,ve(o,l.area_id)):[],d=v=>`${v} ${N(o,v)}`,u=r.entity==="none"?null:r.entity??null;if(r.entity==null){let v=c.filter(g=>!i.has(g));if(s){let g=v.filter(p=>W(p)==="light");u=g.find(p=>a.test(d(p)))??g[0]??null}else if(r.type==="robot_vacuum"){let g=l?.area_id??null;u=Object.keys(o.entities??{}).find(p=>p.startsWith("vacuum.")&&!i.has(p)&&_t(o,p)===g)??null}else if(r.type==="radiator"){let g=v.filter(p=>W(p)==="climate");u=g.find(p=>a.test(d(p)))??g[0]??null}else if(gt(r.type)){let g=v.filter(p=>W(p)==="media");u=g.find(p=>o.states[p]?.attributes.device_class==="tv")??g.find(p=>a?.test(d(p)))??g[0]??null}else a&&(u=v.find(g=>["switch","media","fan"].includes(W(g)??"")&&a.test(d(g)))??null);u&&i.add(u)}let h=r.power==="none"?null:r.power??null;r.power==null&&(h=u?Es(o,u):null,!h&&a&&l&&!s&&(h=ve(o,l.area_id).find(g=>fn(o,g)&&!i.has(g)&&a.test(d(g)))??null),h&&i.add(h)),(u||h)&&t.set(r.id,{entity:u,power:h})}}return t}var ji=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/;function ir(o,e,t){if(t==="none")return null;if(t)return t;let n=e?o.entities?.[e]?.device_id:null;if(!n||!o.entities)return null;for(let i of Object.values(o.entities))if(!(i.device_id!==n||!i.entity_id.startsWith("sensor."))&&(ji.test(i.translation_key??"")||ji.test(i.entity_id.split(".")[1])))return i.entity_id;return null}var C=(o,e,t,n,i="")=>z`<rect class=${i} x=${Math.min(o,t)} y=${Math.min(e,n)} width=${Math.abs(t-o)} height=${Math.abs(n-e)} />`,H=(o,e,t,n,i="")=>z`<line class=${i} x1=${o} y1=${e} x2=${t} y2=${n} />`,B=(o,e,t,n="")=>z`<circle class=${n} cx=${o} cy=${e} r=${t} />`,_n=(o,e,t,n,i="")=>z`<ellipse class=${i} cx=${o} cy=${e} rx=${t} ry=${n} />`;function gn(o,e,t){let n=[];for(let i=1;i<t;i++){let r=-o/2+o/t*i;n.push(H(r,e/2,r,e/2-Math.min(.12,e*.3)))}return n}function rr(o,e,t,n){let i=Math.min(.24,e*.28),r=n?Math.min(.2,o*.12):0,s=[C(-o/2,-e/2,o/2,-e/2+i,"fp3d-sym-fill")];n&&s.push(C(-o/2,-e/2,-o/2+r,e/2,"fp3d-sym-fill"),C(o/2-r,-e/2,o/2,e/2,"fp3d-sym-fill"));let a=o-2*r;for(let l=1;l<t;l++){let c=-o/2+r+a/t*l;s.push(H(c,-e/2+i,c,e/2-.02))}return s}function sr(o,e,t){switch(o){case"sofa":return rr(e,t,Math.max(1,Math.round((e-.4)/.62)),!0);case"armchair":return rr(e,t,1,!0);case"bench":return[C(-e/2,-t/2,e/2,-t/2+.08,"fp3d-sym-fill")];case"corner_bench":{let n=Math.min(.5,t*.4);return[C(-e/2,-t/2,e/2,-t/2+.08,"fp3d-sym-fill"),C(-e/2,-t/2,-e/2+.08,t/2,"fp3d-sym-fill"),H(-e/2+n,-t/2+n,e/2,-t/2+n),H(-e/2+n,-t/2+n,-e/2+n,t/2)]}case"chair":return[C(-e/2,-t/2,e/2,-t/2+.06,"fp3d-sym-fill")];case"office_chair":return[B(0,.03,Math.min(e,t)*.36),C(-e*.35,-t/2+.02,e*.35,-t/2+.1,"fp3d-sym-fill")];case"bar_stool":case"table_round":return[B(0,0,Math.min(e,t)*.42)];case"stool":return[C(-e/2+.04,-t/2+.04,e/2-.04,t/2-.04)];case"table":case"coffee_table":case"desk":{let n=[C(-e/2+.05,-t/2+.05,e/2-.05,t/2-.05)];return o==="desk"&&n.push(H(-.3,-t/2+.1,.3,-t/2+.1,"fp3d-sym-strong")),n}case"bed":case"bunk_bed":{let n=e>1.2?2:1,i=(e-.2)/n,r=[C(-e/2,-t/2,e/2,-t/2+.07,"fp3d-sym-fill"),H(-e/2,-t/2+(t-.1)*.36,e/2,-t/2+(t-.1)*.36)];for(let s=0;s<n;s++)r.push(C(-e/2+.13+i*s,-t/2+.12,-e/2+.07+i*(s+1),-t/2+.12+Math.min(.4,t*.18)));return r}case"nightstand":case"wardrobe":case"dresser":case"sideboard":case"tall_cabinet":case"kitchen":case"kitchen_wall":case"kitchen_tall":case"shelf":return gn(e,t,o==="nightstand"||o==="tall_cabinet"||o==="kitchen_tall"?1:Math.max(2,Math.round(e/.5)));case"coat_rack":return[C(-e/2,-t/2,e/2,-t/2+.03,"fp3d-sym-fill"),...gn(e,t,Math.max(2,Math.round(e/.5)))];case"island":return[H(-e/2,t/2-.3,e/2,t/2-.3)];case"fridge":return[H(-e/2+.06,t/2-.04,e/2-.06,t/2-.04,"fp3d-sym-strong")];case"stove":{let n=Math.min(e,t)*.14;return[B(-e*.22,-t*.2,n),B(e*.22,-t*.2,n*.8),B(-e*.22,t*.2,n*.8),B(e*.22,t*.2,n)]}case"sink":{let n=Math.min(.5,e-.2);return[C(-n/2,-t/2+.1,n/2,t/2-.08),B(0,-t/2+.06,.025,"fp3d-sym-fill")]}case"dishwasher":return[H(-e/2+.08,t/2-.05,e/2-.08,t/2-.05,"fp3d-sym-strong")];case"washer":case"dryer":return[B(0,.05,Math.min(e,t)*.3),H(-e/2,-t/2+.1,e/2,-t/2+.1)];case"bathtub":return[C(-e/2+.07,-t/2+.07,e/2-.07,t/2-.07),B(-e/2+.14,0,.03,"fp3d-sym-fill")];case"shower":return[H(-e/2,-t/2,e/2,t/2),H(e/2,-t/2,-e/2,t/2),B(0,0,.04)];case"wc":return[C(-e/2,-t/2,e/2,-t/2+Math.min(.18,t*.3),"fp3d-sym-fill"),_n(0,t*.1,e*.36,t*.3)];case"washbasin":return[_n(0,.03,e*.34,t*.3)];case"tv_board":return[H(-Math.min(e*.4,.72),-t/2+.14,Math.min(e*.4,.72),-t/2+.14,"fp3d-sym-strong"),...gn(e,t,Math.max(2,Math.round(e/.6)))];case"tv_wall":return[H(-e/2,0,e/2,0,"fp3d-sym-strong")];case"lamp_downlight":case"lamp_spot":return[B(0,0,Math.min(e,t)*.45,"fp3d-sym-fill"),B(0,0,Math.min(e,t)*1.4)];case"lamp_bollard":case"lamp_garden":return[B(0,0,Math.min(e,t)*.5,"fp3d-sym-fill"),B(0,0,Math.min(e,t)*1.6)];case"parking":return[C(-e/2+.08,-t/2+.08,e/2-.08,t/2-.08),H(-e*.15,t/2-.5,0,t/2-.22,"fp3d-sym-strong"),H(0,t/2-.22,e*.15,t/2-.5,"fp3d-sym-strong")];case"robot_vacuum":return[C(-e*.45,-t/2,e*.45,-t/2+t*.3,"fp3d-sym-fill"),B(0,t*.14,Math.min(e,t)*.47)];case"radiator":{let n=[],i=Math.max(3,Math.round(e/.1));for(let r=1;r<i;r++)n.push(H(-e/2+e/i*r,-t/2,-e/2+e/i*r,t/2));return n}case"lamp_panel":return[C(-e/2+.03,-t/2+.03,e/2-.03,t/2-.03,"fp3d-sym-fill")];case"lamp_uplight":case"lamp_ceiling":case"lamp_pendant":case"lamp_floor":case"lamp_table":{let n=Math.min(e,t)/2,i=[B(0,0,n*.9,"fp3d-sym-fill"),B(0,0,n*.3)];if(o==="lamp_ceiling"||o==="lamp_pendant")for(let r=0;r<8;r++){let s=r/8*Math.PI*2;i.push(H(Math.cos(s)*n*1.05,Math.sin(s)*n*1.05,Math.cos(s)*n*1.35,Math.sin(s)*n*1.35))}return i}case"lamp_wall":return[C(-e/2,-t/2,e/2,-t/2+.03,"fp3d-sym-fill"),_n(0,.01,e*.4,t*.4)];case"led_strip":return[H(-e/2,0,e/2,0,"fp3d-sym-strong")];case"plant":return[B(0,0,Math.min(e,t)*.46),B(0,0,Math.min(e,t)*.25)];case"rug":return[C(-e/2+.1,-t/2+.1,e/2-.1,t/2-.1)];case"stairs":{let n=Math.max(3,Math.round(t/.26)),i=[];for(let r=1;r<n;r++)i.push(H(-e/2,t/2-t/n*r,e/2,t/2-t/n*r));return i.push(H(0,t/2-.1,0,-t/2+.25,"fp3d-sym-strong"),H(-.15,-t/2+.45,0,-t/2+.25,"fp3d-sym-strong"),H(.15,-t/2+.45,0,-t/2+.25,"fp3d-sym-strong")),i}default:{let n=j(o);return n?Rs(n,e,t):y}}}function Rs(o,e,t){return o.symbol?.length?o.symbol.map(n=>n.shape==="rect"?C((n.x-n.w/2)*e,(n.z-n.d/2)*t,(n.x+n.w/2)*e,(n.z+n.d/2)*t,n.fill?"fp3d-sym-fill":""):n.shape==="circle"?B(n.x*e,n.z*t,n.r*Math.min(e,t)):H(n.x1*e,n.z1*t,n.x2*e,n.z2*t)):o.parts.filter(n=>n.w<.98||n.d<.98).map(n=>n.shape==="cyl"&&(n.axis??"y")==="y"?B(n.x*e,n.z*t,Math.min(n.w*e,n.d*t)/2):C((n.x-n.w/2)*e,(n.z-n.d/2)*t,(n.x+n.w/2)*e,(n.z+n.d/2)*t))}var Fs=.05,Ps=.2,Is=.12;function Ts(o){let e=[];return o.forEach((t,n)=>{let i=t.points;if(i.length<3)return;let r=q(i)>=0;for(let s=0;s<i.length;s++){let a=i[s],l=i[(s+1)%i.length],c=l[0]-a[0],d=l[1]-a[1],u=Math.hypot(c,d);if(u<.05)continue;let h=[c/u,d/u],v=r?[h[1],-h[0]]:[-h[1],h[0]];(h[1]<-1e-9||Math.abs(h[1])<=1e-9&&h[0]<0)&&(h=[-h[0],-h[1]]);let g=[-h[1],h[0]],p=a[0]*h[0]+a[1]*h[1],w=l[0]*h[0]+l[1]*h[1];e.push({room:n,index:s,dir:h,normal:g,offset:a[0]*g[0]+a[1]*g[1],outside:v[0]*g[0]+v[1]*g[1]>0?1:-1,t0:Math.min(p,w),t1:Math.max(p,w)})}}),e}function or(o,e=.6){let t=Ts(o),n=t.map((d,u)=>u),i=d=>n[d]===d?d:n[d]=i(n[d]),r=[];for(let d=0;d<t.length;d++)for(let u=d+1;u<t.length;u++){let h=t[d],v=t[u];if(h.room===v.room||Math.abs(h.dir[0]*v.dir[1]-h.dir[1]*v.dir[0])>Fs||h.outside===v.outside)continue;let g=(v.offset-h.offset)*h.outside;g>e||g<-Is||Math.abs(g)<1e-4||Math.min(h.t1,v.t1)-Math.max(h.t0,v.t0)<Ps||(r.push(Math.round(g*1e3)/1e3),n[i(d)]=i(u))}if(!r.length)return{rooms:o.map(d=>({...d,points:d.points.map(u=>[u[0],u[1]])})),gaps:r};let s=new Map;t.forEach((d,u)=>{let h=i(u);if(h===u&&!t.some((g,p)=>p!==u&&i(p)===u))return;let v=s.get(h)??[];v.push(u),s.set(h,v)});let a=o.map(d=>d.points.map(()=>new Map));for(let[d,u]of s){let h=u.reduce((v,g)=>v+t[g].offset,0)/u.length;for(let v of u){let g=t[v],p=h-g.offset,w=[g.normal[0]*p,g.normal[1]*p],b=o[g.room].points.length;a[g.room][g.index].set(d,w),a[g.room][(g.index+1)%b].set(d,w)}}let l=d=>Math.round(d*1e3)/1e3;return{rooms:o.map((d,u)=>({...d,points:d.points.map((h,v)=>{let g=h[0],p=h[1];for(let[w,b]of a[u][v].values())g+=w,p+=b;return[l(g),l(p)]})})),gaps:r}}function ar(o){let e=o.filter(n=>n>.04).sort((n,i)=>n-i);if(!e.length)return null;let t=e[Math.floor(e.length/2)];return Math.min(.5,Math.max(.08,Math.round(t*100)/100))}var Ls=.25,lr=o=>Math.round(o*1e3)/1e3;function bn(o,e,t,n,i){let r=o.rooms.find(s=>s.points.length>=3&&T([e,t],s.points));return!r||T([n,i],r.points)?[n,i]:T([n,t],r.points)?[n,t]:T([e,i],r.points)?[e,i]:[e,t]}function bt(o,e,t,n=Ls){let i=o.rooms.find(c=>c.points.length>=3&&T([e.x,e.z],c.points));if(!i)return null;let r=i.points,s=q(r)>=0?1:-1,a=t/2,l=null;for(let c=0;c<r.length;c++){let d=r[c],u=r[(c+1)%r.length],h=Math.hypot(u[0]-d[0],u[1]-d[1]);if(h<.3)continue;let v=[(u[0]-d[0])/h,(u[1]-d[1])/h],g=[-v[1]*s,v[0]*s],p=(e.x-d[0])*v[0]+(e.z-d[1])*v[1];if(p<0||p>h)continue;let b=o.rooms.some(E=>E.id!==i.id&&E.points.some((F,A)=>{let R=E.points[(A+1)%E.points.length],P=Math.abs((F[0]-d[0])*g[0]+(F[1]-d[1])*g[1]),I=Math.abs((R[0]-d[0])*g[0]+(R[1]-d[1])*g[1]);return P<.02&&I<.02}))?a:0,_=(e.x-d[0])*g[0]+(e.z-d[1])*g[1]-b,f=Math.atan2(-g[0],g[1])*180/Math.PI,k=E=>Math.abs((e.rotation-E+540)%360-180),$=[{rotation:f,extent:e.d/2},{rotation:f+90,extent:e.w/2},{rotation:f-90,extent:e.w/2}].reduce((E,F)=>k(F.rotation)<k(E.rotation)?F:E);if(k($.rotation)>50)continue;let M=_-$.extent;Math.abs(M)>n||l&&Math.abs(M)>=Math.abs(l.gap)||(l={x:lr(e.x-g[0]*M),z:lr(e.z-g[1]*M),rotation:(Math.round($.rotation)%360+360)%360,gap:M})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}function Ds(o,e,t){let n=t[0]-e[0],i=t[1]-e[1],r=n*n+i*i,s=r?Math.max(0,Math.min(1,((o[0]-e[0])*n+(o[1]-e[1])*i)/r)):0;return Math.hypot(o[0]-e[0]-n*s,o[1]-e[1]-i*s)}function cr(o,e,t=.03){return o.every(n=>T(n,e)||e.some((i,r)=>Ds(n,i,e[(r+1)%e.length])<=t))}function dr(o,e){return e&&o.states[e]?e:Object.keys(o.states).filter(t=>t.startsWith("weather.")).sort()[0]??null}var vn=["camera_cockpit","weather","screens"],Os=["fridge_smart"];var ur=o=>(o??navigator.language).toLowerCase().startsWith("de");function qe(o){return ur(o)?"https://mastershort.de/neonplan3d/?lang=de":"https://mastershort.de/en/neonplan3d/?lang=en"}var Ws={camera_cockpit:{de:"pro-erweiterungen/#61-kamera-cockpit",en:"pro-add-ons/#61-camera-cockpit"},weather:{de:"pro-erweiterungen/#62-wetter-drau%C3%9Fen",en:"pro-add-ons/#62-weather-outside"},screens:{de:"pro-erweiterungen/#63-bildschirme-live",en:"pro-add-ons/#63-live-screens"},extensions:{de:"erweiterungen-shop-moebel-packs/",en:"extensions-shop-furniture-packs/"}};function Xe(o,e){let t=ur(o),n=t?"https://mastershort.de/neonplan3d/anleitung/":"https://mastershort.de/en/neonplan3d/manual/",i=e?Ws[e]:void 0,r=i?t?i.de:i.en:"",[s,a]=r.split("#");return`${n}${s}?lang=${t?"de":"en"}${a?`#${a}`:""}`}function yn(o=vi()){let e=new Set;for(let t of o)for(let n of t.features??[])(vn.includes(n)||Os.includes(n))&&e.add(n);return e}function wn(o,e){return yn(e).has(o)}var pr=Math.PI/180;function Ee(o){let e=Math.min(o.x0,o.x1),t=Math.max(o.x0,o.x1),n=Math.min(o.z0,o.z1),i=Math.max(o.z0,o.z1);return o.axis==="x"?{u0:e,u1:t,w:i-n,at:(r,s)=>[r,o.flip?i-s:n+s]}:{u0:n,u1:i,w:t-e,at:(r,s)=>[o.flip?t-s:e+s,r]}}function Ze(o){let e=Ee(o).w,t=o.eave_a,n=o.eave_b,i=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*pr),r=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*pr);if(o.shape==="flat")return{vr:e/2,rh:t,y:()=>t};if(o.shape==="pent")return{vr:e,rh:t+e*i,y:l=>t+l*i};let s=i+r>1e-6?Math.min(e,Math.max(0,(n-t+e*r)/(i+r))):e/2,a=t+s*i;return{vr:s,rh:a,y:l=>l<=s?t+l*i:n+(e-l)*r}}function hr(o,e,t){let n=Ee(e),i=o.floors.flatMap(c=>c.rooms.filter(d=>d.points.length>=3&&c.elevation+c.height>e.base+.05)),r=c=>c.some(d=>i.some(u=>T(d,u.points))),s=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:r(a.map(c=>n.at(c,-s)))?0:t,b:r(a.map(c=>n.at(c,n.w+s)))?0:t,u0:r(l.map(c=>n.at(n.u0-s,c)))?0:t,u1:r(l.map(c=>n.at(n.u1+s,c)))?0:t}}function fr(o,e,t,n,i){let r=[(e+n)/2,(t+i)/2],s=o.floors.filter(a=>a.rooms.some(l=>l.points.length>=3&&T(r,l.points))).map(a=>a.elevation+a.height);return s.length?Math.max(...s):null}function vt(o){return Ze(o).rh}function mr(o,e=t=>`roof_${t+1}`){let t=o.settings.roof?.pitch??35,n=o.settings.wall_exterior,i=o.floors.filter(l=>l.rooms.some(c=>c.points.length>=3)).sort((l,c)=>c.elevation-l.elevation),r=[],s=[],a=l=>Math.round(l*1e3)/1e3;for(let l of i){let c=l.rooms.filter(f=>f.points.length>=3),d=[...new Set(c.flatMap(f=>f.points.map(k=>a(k[0]))))].sort((f,k)=>f-k),u=[...new Set(c.flatMap(f=>f.points.map(k=>a(k[1]))))].sort((f,k)=>f-k),h=d.length-1,v=u.length-1,g=(f,k)=>f.some(x=>T(k,x.points)),p=[];for(let f=0;f<v;f++){p.push([]);for(let k=0;k<h;k++){let x=[(d[k]+d[k+1])/2,(u[f]+u[f+1])/2];p[f].push(g(c,x)&&!g(s,x))}}let w=p.map(f=>f.map(()=>!1)),b=(f,k)=>p[k][f]&&!w[k][f],_=l.elevation+l.height;for(let f=0;f<v;f++)for(let k=0;k<h;k++){if(!b(k,f))continue;let x=k;for(;x+1<h&&b(x+1,f);)x++;let $=f;for(;$+1<v&&Array.from({length:x-k+1},(R,P)=>b(k+P,$+1)).every(Boolean);)$++;for(let R=f;R<=$;R++)for(let P=k;P<=x;P++)w[R][P]=!0;let M=d[k]-n,E=d[x+1]+n,F=u[f]-n,A=u[$+1]+n;Math.min(E-M,A-F)<.8||r.push({id:e(r.length),x0:a(M),z0:a(F),x1:a(E),z1:a(A),shape:"gable",axis:E-M>=A-F?"x":"z",eave_a:a(_),eave_b:a(_),pitch_a:t,pitch_b:t,base:a(_),overhang:null})}s.push(...c)}return r}var K=(o,e)=>[o[0]-e[0],o[1]-e[1]],ye=(o,e)=>[o[0]+e[0],o[1]+e[1]],ue=(o,e)=>[o[0]*e,o[1]*e],Je=(o,e)=>o[0]*e[0]+o[1]*e[1],Ye=(o,e)=>o[0]*e[1]-o[1]*e[0],yt=o=>Math.hypot(o[0],o[1]),ae=o=>{let e=yt(o)||1;return[o[0]/e,o[1]/e]},_r=o=>[-o[1],o[0]],gr=o=>[o[1],-o[0]];function Re(o,e,t=[]){let n=e.eps??.005,i=[],r=t.filter(b=>Math.hypot(b.b[0]-b.a[0],b.b[1]-b.a[1])>.05),s=[],a=b=>{for(let _=0;_<s.length;_++)if(Math.abs(s[_][0]-b[0])<=n&&Math.abs(s[_][1]-b[1])<=n)return _;return s.push([b[0],b[1]]),s.length-1},l=[];for(let b of o){let _=b.points;if(_.length<3||Math.abs(q(_))<1e-6)continue;let f=q(_)>0,k=_.map(a);for(let x=0;x<_.length;x++){let $=k[x],M=k[(x+1)%_.length];$!==M&&l.push(f?{u:$,v:M,room:b.id,edge:x,forward:!0}:{u:M,v:$,room:b.id,edge:x,forward:!1})}}let c=r.map(b=>[a(b.a),a(b.b)]),d=[];for(let b of l){let _=s[b.u],f=s[b.v],k=K(f,_),x=yt(k),$=ue(k,1/x),M=[];for(let F=0;F<s.length;F++){if(F===b.u||F===b.v)continue;let A=K(s[F],_),R=Je(A,$);R<=n||R>=x-n||Math.abs(Ye($,A))<=n&&M.push({t:R,id:F})}M.sort((F,A)=>F.t-A.t);let E=[{t:0,id:b.u},...M,{t:x,id:b.v}];for(let F=0;F+1<E.length;F++){let A=E[F],R=E[F+1],P=b.forward?A.t:x-R.t,I=b.forward?R.t:x-A.t;d.push({u:A.id,v:R.id,room:b.room,edge:b.edge,t0:P,t1:I})}}let u=new Map;for(let b of d){let _=b.u<b.v?`${b.u}-${b.v}`:`${b.v}-${b.u}`,f=u.get(_);f||u.set(_,f=[]),f.push(b)}let h=b=>({room_id:b.room,edge:b.edge,t0:b.t0,t1:b.t1}),v=b=>{let _=b.map(f=>o.find(k=>k.id===f.room)?.wall_heights?.[f.edge]).filter(f=>typeof f=="number"&&f>0);return _.length?Math.min(..._):void 0},g=[];for(let b of u.values()){let _=b[0],f=b.find(k=>k!==_&&k.u===_.v&&k.v===_.u&&k.room!==_.room);for(let k of b)k!==_&&k!==f&&k.room!==_.room&&i.push(`overlap:${_.room}:${k.room}`);f?g.push({a:_.u,b:_.v,left:e.interior/2,right:e.interior/2,exterior:!1,roomLeft:_.room,roomRight:f.room,sources:[h(_),h(f)],height:v([_,f])}):g.push({a:_.u,b:_.v,left:0,right:e.exterior,exterior:!0,roomLeft:_.room,roomRight:null,sources:[h(_)],height:v([_])})}r.forEach((b,_)=>{let[f,k]=c[_];if(f===k)return;let x=[(b.a[0]+b.b[0])/2,(b.a[1]+b.b[1])/2],$=o.find(F=>F.points.length>=3&&T(x,F.points))?.id??null,M=(b.thickness??e.interior)/2,E=typeof b.height=="number"&&b.height>0?b.height:void 0;g.push({free:b.id,a:f,b:k,left:M,right:M,exterior:!1,roomLeft:$,roomRight:$,sources:[],height:E})}),g=Cs(g,s);let p=Vs(g,s);return{walls:g.map((b,_)=>{let f=s[b.a],k=s[b.b],x=p.get(`${_}:a`),$=p.get(`${_}:b`),M=Ns([x.right,$.left,k,$.right,x.left,f],1e-6);return{id:Hs(f,k),a:[f[0],f[1]],b:[k[0],k[1]],left:b.left,right:b.right,exterior:b.exterior,roomLeft:b.roomLeft,roomRight:b.roomRight,sources:b.sources,footprint:M,...b.free?{free:b.free}:{},...b.height!==void 0?{height:b.height}:{}}}),warnings:[...new Set(i)]}}function Hs(o,e){let t=r=>Math.round(r*100),[n,i]=o[0]<e[0]||o[0]===e[0]&&o[1]<=e[1]?[o,e]:[e,o];return`w_${t(n[0])}_${t(n[1])}_${t(i[0])}_${t(i[1])}`}function br(o){return{...o,a:o.b,b:o.a,left:o.right,right:o.left,roomLeft:o.roomRight,roomRight:o.roomLeft}}function Cs(o,e){let t=o.slice(),n=!0;for(;n;){n=!1;let i=new Map;t.forEach((r,s)=>{for(let a of[r.a,r.b]){let l=i.get(a);l||i.set(a,l=[]),l.push(s)}});for(let[r,s]of i){if(s.length!==2)continue;let a=t[s[0]],l=t[s[1]];if(a.b!==r&&(a=br(a)),l.a!==r&&(l=br(l)),a.a===l.b)continue;let c=ae(K(e[a.b],e[a.a])),d=ae(K(e[l.b],e[l.a]));if(Math.abs(Ye(c,d))>1e-6||Je(c,d)<=0||a.free||l.free||a.height!==l.height||a.exterior!==l.exterior||a.roomLeft!==l.roomLeft||a.roomRight!==l.roomRight||Math.abs(a.left-l.left)>1e-9||Math.abs(a.right-l.right)>1e-9)continue;let u={...a,b:l.b,sources:Bs(a.sources,l.sources)},h=t.filter((v,g)=>g!==s[0]&&g!==s[1]);h.push(u),t.length=0,t.push(...h),n=!0;break}}return t}function Bs(o,e){let t=o.map(n=>({...n}));for(let n of e){let i=t.find(r=>r.room_id===n.room_id&&r.edge===n.edge&&(Math.abs(r.t1-n.t0)<1e-6||Math.abs(n.t1-r.t0)<1e-6));i?(i.t0=Math.min(i.t0,n.t0),i.t1=Math.max(i.t1,n.t1)):t.push({...n})}return t}function Vs(o,e){let t=new Map;o.forEach((i,r)=>{let s=ae(K(e[i.b],e[i.a])),a=[[i.a,{key:`${r}:a`,d:s,left:i.left,right:i.right,angle:Math.atan2(s[1],s[0])}],[i.b,{key:`${r}:b`,d:ue(s,-1),left:i.right,right:i.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a){let d=t.get(l);d||t.set(l,d=[]),d.push(c)}});let n=new Map;for(let[i,r]of t){let s=e[i];r.sort((c,d)=>c.angle-d.angle);let a=c=>({left:ye(s,ue(_r(c.d),c.left)),right:ye(s,ue(gr(c.d),c.right))});for(let c of r)n.set(c.key,a(c));if(r.length<2)continue;let l=4*Math.max(...r.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<r.length;c++){let d=r[c],u=r[(c+1)%r.length],h=ye(s,ue(_r(d.d),d.left)),v=ye(s,ue(gr(u.d),u.right)),g=Ye(d.d,u.d);if(Math.abs(g)<1e-4)continue;let p=Ye(K(v,h),u.d)/g,w=ye(h,ue(d.d,p));yt(K(w,s))>l||(n.get(d.key).left=w,n.get(u.key).right=w)}}return n}function Ns(o,e){let t=o.filter((i,r)=>yt(K(i,o[(r+1)%o.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let i=0;i<t.length;i++){let r=t[(i+t.length-1)%t.length],s=t[i],a=t[(i+1)%t.length],l=K(s,r),c=K(a,s);if(Math.abs(Ye(ae(l),ae(c)))<1e-7&&Je(l,c)>0){t=t.filter((d,u)=>u!==i),n=!0;break}}}return t}function Fe(o,e,t){let n=o.points[e],i=o.points[(e+1)%o.points.length],r=ae(K(i,n));return ye(n,ue(r,t))}function Pe(o,e,t){if(o.wall){let i=t.find(a=>a.id===o.wall);if(!i||Math.hypot(i.b[0]-i.a[0],i.b[1]-i.a[1])<.05)return null;let r=ae(K(i.b,i.a));return{room:{id:o.room_id,name:"",area_id:null,points:[i.a,i.b,ye(i.a,[-r[1],r[0]])]},edge:0}}let n=e.find(i=>i.id===o.room_id);return n&&o.edge<n.points.length?{room:n,edge:o.edge}:null}function kn(o,e,t){if(!e.wall)return Ks(o,t.room,t.edge,e.offset);let n=o.find(r=>r.free===e.wall);if(!n)return null;let i=Fe(t.room,0,e.offset);return{wall:n,s:Je(K(i,n.a),ae(K(n.b,n.a)))}}function Ks(o,e,t,n){for(let i of o){if(!i.sources.find(a=>a.room_id===e.id&&a.edge===t&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let s=Fe(e,t,n);return{wall:i,s:Je(K(s,i.a),ae(K(i.b,i.a)))}}return null}var Ie=Math.PI/180,yr=1.13,xn=1.72,ie=.025,we=.07,wr=.25;function Te(o,e){let t=[];for(let n of o.floors){if(e&&n.id!==e)continue;let{walls:i}=Re(n.rooms,{exterior:o.settings.wall_exterior,interior:o.settings.wall_interior},n.walls??[]);for(let r of i){if(!r.exterior||r.free)continue;let s=r.b[0]-r.a[0],a=r.b[1]-r.a[1],l=Math.hypot(s,a);if(l<1.2)continue;let c=a/l,d=-s/l,u=[r.a[0]+c*r.right,n.elevation,r.a[1]+d*r.right],h=Math.min(n.height,r.height??n.height);t.push({key:`wall:${n.id}:${r.id}`,section:null,side:"top",flat:!1,o:u,eu:[s/l,0,a/l],es:[0,1,0],n:[c,0,d],lu:l,ls:h,pitch:90,span:()=>[0,l],facing:[c,d],wall:{floorId:n.id}})}}return t}var pe="ground";function js(o){return[...o.floors.filter(t=>t.rooms.some(n=>n.points.length>=3))].sort((t,n)=>t.elevation-n.elevation)[0]??o.floors[0]??null}function kr(o,e){let t=(e.rotation??0)*Math.PI/180,n=[Math.cos(t),0,Math.sin(t)],i=[-Math.sin(t),0,Math.cos(t)],r=js(o),s=n[0]*e.u+i[0]*e.v,a=n[2]*e.u+i[2]*e.v,l=r?r.elevation+(e.base!=null?e.base:Ei(r,s,a)):e.base??0;return{key:pe,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:i,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[i[0],i[2]],unbounded:!0}}function re(o,e,t=V(o)){return e.face===pe?kr(o,e):e.face.startsWith("wall:")?Te(o,e.face.split(":")[1]).find(n=>n.key===e.face)??null:t.find(n=>n.key===e.face)??null}function xr(o,e,t){let n=Te(o,t),i=o.settings.north??0,r=l=>{let c=Math.atan2(l.facing[0],-l.facing[1])*180/Math.PI-i;return l.lu*(1.3+Math.cos((c-180)*Math.PI/180))},s=[...n].sort((l,c)=>r(c)-r(l))[0];if(!s)return null;let a={...Le(s,e),portrait:!1,rows:1};return a.cols=Math.max(1,Math.floor((s.lu-.8+ie)/(xn+ie))),a.u=Math.round((s.lu-(a.cols*xn+(a.cols-1)*ie))/2*100)/100,a.v=Math.round(Math.max(0,s.ls-yr-.3)*100)/100,a}function Sn(o,e){let t=o.floors.flatMap(r=>r.rooms.flatMap(s=>s.points)),n=t.length?Math.max(...t.map(r=>r[0]))+3:0,i=t.length?Math.min(...t.map(r=>r[1])):0;return{id:e,face:pe,u:Math.round(n*100)/100,v:Math.round(i*100)/100,rows:2,cols:4,portrait:!0,tilt:25,flip:!0,rotation:(o.settings.north??0)||0,look:"black",entity:null}}function Us(o){return o.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]??null}function V(o){let e=o.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(_=>Gs(_,hr(o,_,_.overhang??e.overhang)));let t=Us(o);if(!t)return[];let n=t.rooms.flatMap(_=>_.points.map(f=>f[0])),i=t.rooms.flatMap(_=>_.points.map(f=>f[1])),r=o.settings.wall_exterior+e.overhang,s=Math.min(...n)-r,a=Math.max(...n)+r,l=Math.min(...i)-r,c=Math.max(...i)+r,d=t.elevation+t.height;if(e.type==="flat")return[$r("main",null,s,l,a,c,d+wr)];let u=a-s>=c-l,h=e.ridge==="short"?!u:u,v=(h?c-l:a-s)/2,g=v*Math.tan(e.pitch*Ie),p=(_,f,k)=>h?[_,d+k,(l+c)/2+f]:[(s+a)/2+f,d+k,_],[w,b]=h?[s,a]:[l,c];return[-1,1].map(_=>xt(`main:${_<0?"a":"b"}`,null,_<0?"a":"b",p(w,_*v,0),p(b,_*v,0),p(w,0,g),e.pitch,()=>[0,b-w]))}function Gs(o,e){let t=Ee(o),n=Ze(o),i=(p,w,b)=>{let[_,f]=t.at(p,w);return[_,b,f]},r=Math.max(0,e.a),s=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=l-a;if(o.shape==="flat"){let p=t.at(a,-r),w=t.at(l,t.w+s);return[$r(o.id,o.id,Math.min(p[0],w[0]),Math.min(p[1],w[1]),Math.max(p[0],w[0]),Math.max(p[1],w[1]),o.eave_a+wr)]}if(o.shape==="pent")return[xt(`${o.id}:a`,o.id,"a",i(a,-r,n.y(-r)),i(l,-r,n.y(-r)),i(a,t.w+s,n.y(t.w+s)),o.pitch_a,()=>[0,c])];let d=o.shape==="hip",u=d?Math.min((t.u1-t.u0)/2,Math.min(n.vr,t.w-n.vr)||t.w/2):0,h=d?t.u0+u-a:0,v=d?l-(t.u1-u):0,g=[];if(n.vr>.3){let p=Math.hypot(n.vr+r,n.rh-n.y(-r));g.push(xt(`${o.id}:a`,o.id,"a",i(a,-r,n.y(-r)),i(l,-r,n.y(-r)),i(a,n.vr,n.rh),o.pitch_a,w=>[h*(w/p),c-v*(w/p)]))}if(t.w-n.vr>.3){let p=Math.hypot(t.w+s-n.vr,n.rh-n.y(t.w+s));g.push(xt(`${o.id}:b`,o.id,"b",i(l,t.w+s,n.y(t.w+s)),i(a,t.w+s,n.y(t.w+s)),i(l,n.vr,n.rh),o.pitch_b,w=>[v*(w/p),c-h*(w/p)]))}return g}function xt(o,e,t,n,i,r,s,a){let l=kt(wt(i,n)),c=kt(wt(r,n)),d=kt(qs(l,c));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let u=kt([-c[0],0,-c[2]]);return{key:o,section:e,side:t,flat:!1,o:n,eu:l,es:c,n:d,lu:$n(wt(i,n)),ls:$n(wt(r,n)),pitch:s,span:a,facing:[u[0],u[2]]}}function $r(o,e,t,n,i,r,s){let a=i-t>=r-n,l=a?i-t:r-n,c=a?r-n:i-t;return{key:`${o}:top`,section:e,side:"top",flat:!0,o:[t,s,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function Qe(o){let e=o.module_w||yr,t=o.module_h||xn;return o.portrait===!1?[t,e]:[e,t]}function $t(o){return o.layout?.length?o.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,o.rows)},()=>Math.max(1,o.cols))}function Mn(o,e){return o.flat?Math.min(45,Math.max(0,e.tilt??15))*Ie:o.wall?Math.min(90,Math.max(0,e.tilt??0))*Ie:0}function zn(o,e){let[t,n]=Qe(e),i=$t(e),r=Math.max(1,...i),a=(i.length-1)*An(o,e)+n*Math.cos(Mn(o,e));return[r*t+(r-1)*ie,a]}function An(o,e){let[,t]=Qe(e),n=Mn(o,e);return o.wall?t*Math.cos(n)+ie:o.flat?t*Math.cos(n)+Math.max(.3,2*t*Math.sin(n)):t+ie}function le(o,e,t=!1){let[n,i]=Qe(e),r=[],s=Mn(o,e),a=i*Math.cos(s),l=An(o,e),c=$t(e),d=Math.max(1,...c),u=new Set(e.skip??[]),h=(g,p,w)=>[o.o[0]+o.eu[0]*g+o.es[0]*p+o.n[0]*w,o.o[1]+o.eu[1]*g+o.es[1]*p+o.n[1]*w,o.o[2]+o.eu[2]*g+o.es[2]*p+o.n[2]*w],v=(g,p)=>{if(o.unbounded)return!0;if(p<-1e-6||p>o.ls+1e-6)return!1;let[w,b]=o.span(p);return g>=w-1e-6&&g<=b+1e-6};return c.forEach((g,p)=>{let w=e.align==="right"?d-g:e.align==="center"?(d-g)/2:0;for(let b=0;b<g;b++){let _=`${p}:${b}`,f=u.has(_);if(f&&!t)continue;let k=e.u+(b+w)*(n+ie),x=e.v+p*l,$=k+n,M=x+(o.flat||o.wall?a:i);if(![[k,x],[$,x],[$,M],[k,M]].every(([I,L])=>v(I,L)))continue;if(o.wall&&s>.001){let I=we+i*Math.sin(s),[L,U]=e.flip?[I,we]:[we,I],Et=[h(k,x,L),h($,x,L),h($,M,U),h(k,M,U)],xe=e.flip?x:M,X=[k+.05,$-.05].map(Q=>[h(Q,xe,0),h(Q,xe,I)]);r.push({corners:Et,posts:X,cell:_,skipped:f});continue}if(!o.flat){r.push({corners:[h(k,x,we),h($,x,we),h($,M,we),h(k,M,we)],posts:[],cell:_,skipped:f});continue}let E=.15,F=E+i*Math.sin(s),[A,R]=e.flip?[M,x]:[x,M],P=[h(k,A,E),h($,A,E),h($,R,F),h(k,R,F)];r.push({corners:P,posts:[k+.05,$-.05].flatMap(I=>[[h(I,A,0),h(I,A,E)],[h(I,R,0),h(I,R,F)]]),cell:_,skipped:f})}}),r}function St(o,e){let t=[o.eu[0],o.eu[2]],n=[o.es[0],o.es[2]],i=[e[0]-o.o[0],e[1]-o.o[2]],r=t[0]*n[1]-t[1]*n[0];if(Math.abs(r)<1e-9)return null;let s=(i[0]*n[1]-i[1]*n[0])/r,a=(t[0]*i[1]-t[1]*i[0])/r;if(a<0||a>o.ls)return null;let[l,c]=o.span(a);return s>=l&&s<=c?{u:s,s:a}:null}function Sr(o,e){let t=null;for(let n of o){if(n.wall){let s=[e[0]-n.o[0],e[1]-n.o[2]],a=s[0]*n.eu[0]+s[1]*n.eu[2],l=s[0]*n.n[0]+s[1]*n.n[2];if(a>=0&&a<=n.lu&&l>=-.05&&l<=.35)return{face:n,u:a,s:Number.NaN};a>=0&&a<=n.lu&&l>.35&&l<=.8&&!t&&(t={face:n,u:a,s:Number.NaN,y:-1/0});continue}let i=St(n,e);if(!i)continue;let r=n.o[1]+n.es[1]*i.s;(!t||r>t.y)&&(t={face:n,...i,y:r})}return t?{face:t.face,u:t.u,s:t.s}:null}function et(o,e){if(o.unbounded)return{u:e.u,v:e.v};let[t,n]=zn(o,e),i=r=>Math.floor(r*100+1e-6)/100;return{u:i(Math.min(Math.max(0,e.u),Math.max(0,o.lu-t))),v:i(Math.min(Math.max(0,e.v),Math.max(0,o.ls-n)))}}function Le(o,e){let t={id:e,face:o.key,u:0,v:0,rows:1,cols:1,portrait:!0,tilt:o.flat?15:null,flip:!1,entity:null,look:"black"},[n]=Qe(t),i=.4,r=An(o,t),[s,a]=o.span(o.ls/2);for(t.cols=Math.max(1,Math.floor((a-s-2*i+ie)/(n+ie))),t.rows=Math.max(1,Math.min(4,Math.floor((o.ls-2*i)/r)));t.cols>1&&le(o,{...t,u:vr(o,t),v:i}).length<t.rows*t.cols;)t.cols--;return t.u=vr(o,t),t.v=i,t}function vr(o,e){let[t]=Qe(e),n=e.cols*t+(e.cols-1)*ie;return Math.round((o.lu-n)/2*100)/100}function En(o,e){let t=(Math.atan2(o.facing[0],-o.facing[1])/Ie-e+720)%360;return["n","ne","e","se","s","sw","w","nw"][Math.round(t/45)%8]}function Mt(o,e){let t=n=>{if(n.flat)return n.lu*n.ls*.8;let i=(Math.atan2(n.facing[0],-n.facing[1])/Ie-e+720)%360,r=Math.cos((i-180)*Ie);return n.lu*n.ls*(1.2+r)};return[...o].sort((n,i)=>t(i)-t(n))[0]??null}function wt(o,e){return[o[0]-e[0],o[1]-e[1],o[2]-e[2]]}function $n(o){return Math.hypot(o[0],o[1],o[2])}function kt(o){let e=$n(o)||1;return[o[0]/e,o[1]/e,o[2]/e]}function qs(o,e){return[o[1]*e[2]-o[2]*e[1],o[2]*e[0]-o[0]*e[2],o[0]*e[1]-o[1]*e[0]]}var Mr=.78,zr=1.18;function De(o){return{id:o.id,face:o.face,u:o.u,v:o.v,rows:1,cols:1,portrait:!0,module_w:o.w||Mr,module_h:o.h||zr}}function Ar(o,e){let t=le(o,De(e))[0];if(!t)return null;let n=i=>[i[0]-o.n[0]*.05,i[1]-o.n[1]*.05,i[2]-o.n[2]*.05];return[n(t.corners[0]),n(t.corners[1]),n(t.corners[2]),n(t.corners[3])]}function Rn(o,e){let t=Mr,n=zr,[i,r]=o.span(o.ls/2);return{id:e,face:o.key,u:Math.round((i+r-t)/2*100)/100,v:Math.round(Math.max(0,Math.min(o.ls-n,o.ls*.45-n/2))*100)/100,w:null,h:null,cover:null,contact:null,tilt:null}}function tt(o,e,t){let n=kr(o,e),[i,r]=zn(n,e),s=n.eu[0]*(e.u+i/2)+n.es[0]*(e.v+r/2),a=n.eu[2]*(e.u+i/2)+n.es[2]*(e.v+r/2),l=t*Math.PI/180,c=[Math.cos(l),Math.sin(l)],d=[-Math.sin(l),Math.cos(l)],u=s*c[0]+a*c[1]-i/2,h=s*d[0]+a*d[1]-r/2,v=g=>Math.round(g*100)/100;return{u:v(u),v:v(h),rotation:(Math.round(t)%360+360)%360}}function Fn(o,e){let[t,n]=zn(o,e);return[o.o[0]+o.eu[0]*(e.u+t/2)+o.es[0]*(e.v+n/2),o.o[2]+o.eu[2]*(e.u+t/2)+o.es[2]*(e.v+n/2)]}function Pn(o,e,t){let n=t[0]*o.n[0]+t[1]*o.n[1]+t[2]*o.n[2];if(Math.abs(n)<1e-6)return null;let i=((o.o[0]-e[0])*o.n[0]+(o.o[1]-e[1])*o.n[1]+(o.o[2]-e[2])*o.n[2])/n;if(i<=0)return null;let r=[e[0]+t[0]*i-o.o[0],e[1]+t[1]*i-o.o[1],e[2]+t[2]*i-o.o[2]],s=r[0]*o.eu[0]+r[1]*o.eu[1]+r[2]*o.eu[2],a=r[0]*o.es[0]+r[1]*o.es[1]+r[2]*o.es[2];return{t:i,u:s,s:a}}function Er(o,e,t){if(o.unbounded)return!0;if(t<0||t>o.ls)return!1;let[n,i]=o.span(t);return e>=n&&e<=i}function Rr(o,e,t,n){for(let i of le(o,e)){let r=i.corners.map(d=>{let u=[d[0]-o.o[0],d[1]-o.o[1],d[2]-o.o[2]];return[u[0]*o.eu[0]+u[1]*o.eu[1]+u[2]*o.eu[2],u[0]*o.es[0]+u[1]*o.es[1]+u[2]*o.es[2]]}),[s,a]=[Math.min(...r.map(d=>d[0])),Math.max(...r.map(d=>d[0]))],[l,c]=[Math.min(...r.map(d=>d[1])),Math.max(...r.map(d=>d[1]))];if(t>=s-.05&&t<=a+.05&&n>=l-.05&&n<=c+.05)return!0}return!1}var Pr=["kitchen_row","kitchen_l","bath","bedroom","living","dining","office","kids","hall"],Xs={kitchen_row:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"kitchen",size:[.9,.62,.92]},{type:"sink"},{type:"dishwasher"},{type:"stove"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"back",align:"start",items:[{type:"kitchen_wall",size:[1.2,.35,.7]}]}],free:[{type:"table",at:[.5,.72],rotation:0,size:[1.2,.8,.75]},{type:"lamp_pendant",at:[.5,.72],rotation:0},{type:"lamp_ceiling",at:[.5,.3],rotation:0}]},kitchen_l:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"sink"},{type:"dishwasher"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"left",align:"end",items:[{type:"stove"},{type:"kitchen",size:[1.2,.62,.92]}]}],free:[{type:"island",at:[.62,.62],rotation:0,size:[1.6,.9,.92]},{type:"bar_stool",at:[.52,.86],rotation:180},{type:"bar_stool",at:[.72,.86],rotation:180},{type:"lamp_ceiling",at:[.5,.35],rotation:0}]},bath:{rows:[{wall:"back",align:"center",items:[{type:"washbasin"}]},{wall:"back",align:"end",items:[{type:"wc"}]},{wall:"front",align:"start",items:[{type:"bathtub"}]},{wall:"left",align:"start",items:[{type:"washer"}]}],free:[{type:"lamp_downlight",at:[.5,.5],rotation:0}]},bedroom:{rows:[{wall:"back",align:"center",items:[{type:"nightstand"},{type:"bed"},{type:"nightstand"}]},{wall:"left",align:"center",items:[{type:"wardrobe",size:[2,.6,2.1]}]},{wall:"front",align:"end",items:[{type:"dresser"}]}],free:[{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},living:{rows:[{wall:"back",align:"center",items:[{type:"tv_board"}]},{wall:"right",align:"start",items:[{type:"shelf"}]}],free:[{type:"sofa",at:[.5,.72],rotation:180},{type:"coffee_table",at:[.5,.52],rotation:0},{type:"rug",at:[.5,.55],rotation:0,size:[2.2,1.6,.01]},{type:"armchair",at:[.14,.5],rotation:270},{type:"lamp_floor",at:[.86,.8],rotation:0},{type:"plant",at:[.9,.12],rotation:0},{type:"lamp_ceiling",at:[.5,.45],rotation:0}]},dining:{rows:[{wall:"back",align:"center",items:[{type:"sideboard"}]}],free:[{type:"table",at:[.5,.55],rotation:0},{type:"chair",at:[.4,.35],rotation:0},{type:"chair",at:[.6,.35],rotation:0},{type:"chair",at:[.4,.75],rotation:180},{type:"chair",at:[.6,.75],rotation:180},{type:"lamp_pendant",at:[.5,.55],rotation:0}]},office:{rows:[{wall:"back",align:"center",items:[{type:"desk"}]},{wall:"left",align:"center",items:[{type:"shelf"},{type:"shelf"}]}],free:[{type:"office_chair",at:[.5,.38],rotation:180},{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},kids:{rows:[{wall:"left",align:"start",items:[{type:"bed",size:[.9,2,.8]}]},{wall:"back",align:"end",items:[{type:"desk",size:[1.2,.6,.75]}]},{wall:"right",align:"end",items:[{type:"shelf"}]}],free:[{type:"rug",at:[.55,.6],rotation:0,size:[1.6,1.2,.01]},{type:"lamp_ceiling",at:[.5,.5],rotation:0}]},hall:{rows:[{wall:"left",align:"start",items:[{type:"coat_rack"}]}],free:[{type:"lamp_downlight",at:[.5,.3],rotation:0},{type:"lamp_downlight",at:[.5,.7],rotation:0}]}},Zs={back:0,right:90,front:180,left:270};function Ir(o,e,t){let n=J(o.points),i=n.x1-n.x0,r=n.z1-n.z0,s=Xs[e],a=[],l=(d,u,h,v,g)=>{let[p,w,b]=g??te[d];a.push({id:t(),type:d,x:Fr(u),z:Fr(h),rotation:v,w:p,d:w,h:b,variant:null,entity:null,power:null})},c=.02;for(let d of s.rows){let u=d.items.map(w=>({type:w.type,size:w.size??te[w.type]})),h=d.wall==="back"||d.wall==="front"?i:r,v=[],g=0;for(let w of u){if(g+w.size[0]>h-.1)break;v.push(w),g+=w.size[0]}let p=d.align==="start"?.05:d.align==="end"?h-g-.05:(h-g)/2;for(let w of v){let[b,_]=w.size,f=p+b/2,k=_/2+c;d.wall==="back"?l(w.type,n.x0+f,n.z0+k,0,w.size):d.wall==="front"?l(w.type,n.x1-f,n.z1-k,180,w.size):d.wall==="right"?l(w.type,n.x1-k,n.z0+f,90,w.size):l(w.type,n.x0+k,n.z1-f,Zs.left,w.size),p+=b}}for(let d of s.free){let[u,h]=d.size??te[d.type],v=Math.min(n.x1-u/2-.05,Math.max(n.x0+u/2+.05,n.x0+i*d.at[0])),g=Math.min(n.z1-h/2-.05,Math.max(n.z0+h/2+.05,n.z0+r*d.at[1]));l(d.type,v,g,d.rotation,d.size)}return a}var Fr=o=>Math.round(o*1e3)/1e3;var Tr={view:"3D",editor:"\xC9diteur",all_floors:"Tous les \xE9tages",no_building:"Aucun plan pour l'instant.",no_building_admin:"Aucun plan pour l'instant. Dessinez votre premier \xE9tage dans l'\xE9diteur.",open_editor:"Ouvrir l'\xE9diteur",loading:"Chargement \u2026",load_error:"\xC9chec du chargement",saving:"Enregistrement \u2026",saved:"Enregistr\xE9",save_error:"\xC9chec de l'enregistrement",save_failed_detail:"\xC9chec de l'enregistrement : {error}. Vos modifications restent conserv\xE9es dans ce navigateur.",needs_restart:"Une nouvelle version de NeonPlan 3D est install\xE9e, mais Home Assistant tourne encore avec la {version}. Red\xE9marrez Home Assistant \u2013 d'ici l\xE0, l'enregistrement peut \xE9chouer.",needs_restart_old:"Une nouvelle version de NeonPlan 3D est install\xE9e, mais Home Assistant tourne encore avec une version plus ancienne. Red\xE9marrez Home Assistant \u2013 d'ici l\xE0, l'enregistrement \xE9choue.",draft_found:"Modifications non enregistr\xE9es du {time} trouv\xE9es.",draft_restore:"Restaurer et enregistrer",draft_discard:"Abandonner",walls_auto:"Murs hauts",walls_cut:"Coupe",reset_view:"Vue d'ensemble",back:"Retour",floor:"\xC9tage",floors:"\xC9tages",add_floor:"Ajouter un \xE9tage",floor_from_ha:"\xC9tages de Home Assistant :",floor_empty:"\xC9tage vide",level:"Niveau {n}",ha_floor:"\xC9tage dans Home Assistant",no_ha_floor:"\u2013 aucun \u2013",area_rooms:"Cr\xE9er {n} pi\xE8ces depuis les pi\xE8ces HA",area_rooms_hint:"Cr\xE9e une pi\xE8ce (4 \xD7 3 m) pour chaque pi\xE8ce HA de cet \xE9tage \u2013 faites-la ensuite glisser \xE0 sa place et ajustez les angles",floor_name:"Nom",elevation:"Hauteur au-dessus du sol (m)",height:"Hauteur sous plafond (m)",cut_height:"Hauteur de coupe (m)",delete_floor:"Supprimer l'\xE9tage",delete_floor_confirm:"Supprimer l'\xE9tage \xAB {name} \xBB avec toutes ses pi\xE8ces ?",move_up:"Monter",move_down:"Descendre",default_floor:"Rez-de-chauss\xE9e",new_floor:"\xC9tage {n}",tool_select:"S\xE9lection",tool_rect:"Rectangle",tool_polygon:"Forme libre",undo:"Annuler",redo:"R\xE9tablir",fit:"Tout afficher",room:"Pi\xE8ce",rooms:"Pi\xE8ces",room_name:"Nom",area:"Pi\xE8ce HA",no_area:"Aucune pi\xE8ce HA",material:"Sol",x:"X (m)",z:"Y (m)",width:"Largeur (m)",depth:"Profondeur (m)",points:"Angles",delete_point:"Supprimer l'angle",duplicate:"Dupliquer",delete:"Supprimer",new_room:"Pi\xE8ce {n}",settings:"R\xE9glages",pendant_shape:"Forme",pendant_shade:"Abat-jour",pendant_globe:"Globe",pendant_cone:"C\xF4ne",pendant_drum:"Tambour",pkg_open:"Meubler \u2026",pkg_hint:"Les meubles se placent contre les murs de la pi\xE8ce ; les luminaires se lient aux lumi\xE8res de la pi\xE8ce HA. Ajustez ensuite chaque \xE9l\xE9ment \u2013 Ctrl+Z annule tout.",pkg_done:"{n} meubles plac\xE9s \u2013 Ctrl+Z annule.",pkg_kitchen_row:"Cuisine lin\xE9aire",pkg_kitchen_row_desc:"Rang\xE9e contre le mur du fond avec r\xE9frig\xE9rateur, four, \xE9vier, lave-vaisselle et plaque de cuisson, meuble haut, table \xE0 manger avec suspension",pkg_kitchen_l:"Cuisine en L",pkg_kitchen_l_desc:"Rang\xE9es au fond et \xE0 gauche, \xEElot central avec tabourets de bar",pkg_bath:"Salle de bain",pkg_bath_desc:"Lavabo, WC, baignoire, lave-linge, spot encastr\xE9",pkg_bedroom:"Chambre",pkg_bedroom_desc:"Lit double avec deux tables de chevet, armoire, commode, plafonnier",pkg_living:"Salon",pkg_living_desc:"Meuble TV, canap\xE9, table basse, tapis, fauteuil, \xE9tag\xE8re, lampadaire, plante",pkg_dining:"Salle \xE0 manger",pkg_dining_desc:"Table avec quatre chaises, buffet, suspension",pkg_office:"Bureau",pkg_office_desc:"Bureau avec chaise de bureau, deux \xE9tag\xE8res, plafonnier",pkg_kids:"Chambre d'enfant",pkg_kids_desc:"Lit simple, bureau, \xE9tag\xE8re, tapis",pkg_hall:"Entr\xE9e",pkg_hall_desc:"Portemanteau, deux spots encastr\xE9s",spots_place:"Placer des spots",spots_type:"Luminaire",spots_cols:"Colonnes (gauche\u2013droite)",spots_rows:"Rang\xE9es (avant\u2013arri\xE8re)",spots_add:"Placer {n} luminaires",spots_placed:"{n} luminaires plac\xE9s.",spots_hint:"Tous les luminaires suivent la lumi\xE8re choisie (p. ex. des spots sur un m\xEAme variateur). Ensuite, chacun peut \xEAtre d\xE9plac\xE9 et li\xE9 \xE0 une autre lumi\xE8re comme n'importe quel meuble.",cancel:"Annuler",backup:"Sauvegarde",backup_history:"Points de restauration",backup_none:"Aucun pour l'instant. Pendant l'\xE9dition, un point de restauration est conserv\xE9 au plus toutes les 10 minutes.",backup_summary:"{rooms} pi\xE8ces, {furniture} meubles",backup_restore:"Restaurer",backup_restore_confirm:"Restaurer l'\xE9tat du {time} ? L'\xE9tat actuel est conserv\xE9 comme point de restauration.",backup_restored:"Restaur\xE9.",backup_file:"Fichier",backup_export:"Exporter",backup_export_share:"Partager comme mod\xE8le",backup_export_share_hint:"Sans pi\xE8ces HA, appareils, capteurs ni images \u2013 pour le transmettre \xE0 d'autres.",backup_import:"Importer \u2026",backup_import_confirm:"Remplacer tout le plan par le fichier ? L'\xE9tat actuel est conserv\xE9 comme point de restauration.",backup_import_error:"Le fichier n'est pas un plan NeonPlan 3D ({error}).",backup_imported:"Import\xE9.",backup_hint:"Les images d'arri\xE8re-plan ne font pas partie du fichier.",backup_full:"Sauvegarde compl\xE8te",backup_full_export:"Tout sauvegarder (plan, images, packs)",backup_full_import:"Restaurer une sauvegarde compl\xE8te \u2026",backup_full_hint:"Un seul fichier avec le plan, toutes les images d'arri\xE8re-plan et d'\xE9cran et les packs install\xE9s. \xC0 la restauration, chaque pack est rev\xE9rifi\xE9 ; la cl\xE9 de licence n'est pas incluse.",backup_full_confirm:"Remplacer le plan, les images et les packs par la sauvegarde ? L'\xE9tat actuel reste disponible comme point de restauration.",backup_full_not_backup:"Ce n'est pas une sauvegarde compl\xE8te NeonPlan 3D.",backup_full_restored:"Sauvegarde restaur\xE9e : {packs} packs, {pictures} images.",backup_full_skipped:"Ignor\xE9s (non v\xE9rifiables ou li\xE9s \xE0 une autre installation) : {packs}.",export_name_full:"complet",device_confirm:"Demander avant de commuter",device_confirm_hint:"Un appui en 3D, le menu rapide et le panneau de la pi\xE8ce demandent d'abord confirmation. Un double appui sur la pi\xE8ce ignore cet appareil.",cover_confirm_hint:"Ouvrir, fermer et les positions demandent d'abord confirmation dans le menu rapide et le panneau de la pi\xE8ce, et un glissement sur le marqueur ne d\xE9place plus le volet (il fait tourner la vue). Stop ne demande jamais.",confirm_switch:"Vraiment commuter {name} ?",split_handle_hint:"Glisser : largeur du plan et de la vue 3D",wall_exterior:"Mur ext\xE9rieur (m)",wall_interior:"Mur int\xE9rieur (m)",grid:"Grille (m)",background:"Mod\xE8le (image du plan)",background_upload:"Choisir une image \u2026",background_width:"Largeur dans le plan (m)",background_opacity:"Opacit\xE9",background_remove:"Retirer le mod\xE8le",hint_select:"Touchez une pi\xE8ce pour la s\xE9lectionner \xB7 faites glisser les angles \xB7 \xAB + \xBB sur un bord ins\xE8re un angle \xB7 les fl\xE8ches d\xE9placent finement \xB7 Suppr supprime \xB7 Ctrl+Z",hint_rect:"Faites glisser pour dessiner un rectangle",hint_polygon:"Placez les angles \xB7 touchez le premier angle ou appuyez sur Entr\xE9e pour fermer \xB7 \xC9chap annule",hint_empty:"Ajoutez d'abord un \xE9tage.",area_m2:"{a} m\xB2",overlap_warning:"Des pi\xE8ces se chevauchent \u2013 les murs y sont incomplets.",read_only:"Seuls les administrateurs peuvent modifier le plan.",mat_wood:"Bois",mat_oak:"Ch\xEAne",mat_tiles:"Carrelage",mat_carpet:"Moquette",mat_stone:"Pierre",mat_concrete:"B\xE9ton",card_name:"NeonPlan 3D",card_description:"Votre maison en 3D (n\xE9on).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} i/s (image la plus lente {ms} ms)",stats_idle:"Au repos (0 i/s)",stats_busy_camera:"cam\xE9ra",stats_busy_floors:"\xE9tages",stats_busy_openings:"portes/fen\xEAtres",stats_busy_flash:"flash",stats_busy_roof:"toit",stats_busy_flow:"flux d'\xE9nergie",stats_busy_effect:"effet de couleur",stats_busy_robot:"robot",stats_busy_orbit:"rotation de la cam\xE9ra",stats_busy_tint:"teinte de la pi\xE8ce",stats_low:"niveau tablette, ratio de pixels {r}",stats_full:"niveau complet, ratio de pixels {r}",floors_apart:"\xC9cart\xE9s",floors_stacked:"Empil\xE9s",floor_rooms_one:"1 pi\xE8ce",floor_rooms:"{n} pi\xE8ces",quality:"Qualit\xE9",quality_auto:"Auto",quality_low:"Tablette",quality_high:"\xC9lev\xE9e",state_on:"Allum\xE9",state_off:"\xC9teint",state_open:"Ouvert",state_closed:"Ferm\xE9",state_opening:"Ouverture",state_closing:"Fermeture",state_playing:"Lecture",state_paused:"En pause",state_idle:"Inactif",state_locked:"Verrouill\xE9",state_unlocked:"D\xE9verrouill\xE9",state_detected:"D\xE9tect\xE9",state_clear:"RAS",state_unavailable:"Indisponible",state_heat:"Chauffage",state_cool:"Climatisation",state_auto:"Auto",state_heat_cool:"Chaud/froid",state_dry:"D\xE9shumidification",state_fan_only:"Ventilation",devices:"Appareils",devices_none_area:"Liez la pi\xE8ce \xE0 une pi\xE8ce HA et ses appareils appara\xEEtront ici.",devices_none:"La pi\xE8ce HA n'a aucun appareil adapt\xE9.",devices_place_all_n:"Placer les {n} \u2026",devices_place_all_confirm:"Placer {n} appareils dans la pi\xE8ce d'un coup ? (Ctrl+Z ou \xAB Annuler \xBB les retire tous en une \xE9tape.)",devices_src_area:"Cette pi\xE8ce HA",devices_src_other:"Autres pi\xE8ces HA",devices_src_none:"Sans pi\xE8ce HA",devices_place:"Placer",devices_remove:"Retirer",devices_hint:"Les appareils plac\xE9s apparaissent en 3D. Faites-les glisser dans le plan pour les d\xE9placer.",panel_lights:"Lumi\xE8res",panel_covers:"Volets",panel_climate:"Chauffage",panel_media:"M\xE9dias",panel_switches:"Interrupteurs",panel_sensors:"Capteurs",panel_scenes:"Sc\xE8nes et scripts",panel_cameras:"Cam\xE9ras",camera_live:"Ouvrir la vue en direct",through_camera:"Regarder par la cam\xE9ra",through_blend:"Fondu",through_back:"Retour \xE0 la vue",camera_mount:"Montage",camera_mount_wall:"Mural (regarde selon sa rotation)",camera_mount_ceiling:"Plafond (d\xF4me, 360\xB0)",camera_fov:"Champ de vision (\xB0)",camera_reach:"Port\xE9e (m)",camera_fov_short:"Angle \xB0",camera_reach_short:"Port\xE9e m",camera_tilt:"Inclinaison vers le bas (\xB0)",camera_tilt_short:"Incl. \xB0",camera_aim_hint:"Dans le plan, le c\xF4ne montre o\xF9 regarde la cam\xE9ra. La poign\xE9e \xE0 sa pointe fait tourner la cam\xE9ra et r\xE8gle sa port\xE9e.",state_recording:"Enregistrement",state_streaming:"Diffusion",panel_all_off:"Tout \xE9teindre",panel_no_area:"Cette pi\xE8ce n'est li\xE9e \xE0 aucune pi\xE8ce HA. Vous pouvez la lier dans l'\xE9diteur.",panel_empty:"Aucun appareil de cette pi\xE8ce n'est dans le plan. Dans l'\xE9diteur, placez des appareils ou choisissez-les pour le panneau de la pi\xE8ce avec \u2606.",close:"Fermer",brightness:"Luminosit\xE9",color_temp:"Temp\xE9rature de couleur",color:"Couleur",position:"Position",cover_open:"Ouvrir",cover_stop:"Stop",cover_close:"Fermer",target_temp:"Consigne",current_temp:"Actuelle",temp_down:"Plus frais",temp_up:"Plus chaud",volume:"Volume",play_pause:"Lecture/pause",previous:"Pr\xE9c\xE9dent",next:"Suivant",run:"Ex\xE9cuter",details:"D\xE9tails",hold_hint:"Appui : commute \xB7 appui long : d\xE9tails",tool_opening:"Portes et fen\xEAtres",tool_furniture:"Meubles",qm_off:"\xC9teint",find:"Rechercher",find_placeholder:"O\xF9 est \u2026? Appareil ou pi\xE8ce",find_none:"Aucun r\xE9sultat",swipe_off:"\xC9teint",panel_pin:"Afficher dans le panneau de la pi\xE8ce",panel_unpin:"Ne pas afficher dans le panneau de la pi\xE8ce",devices_panel_hint:"Le panneau de la pi\xE8ce affiche les appareils du plan. \u2606 ajoute un appareil au panneau de la pi\xE8ce sans le placer.",card_section_view:"Vue",card_size:"Taille",card_size_fixed:"Hauteur fixe",card_size_fill:"Remplir l'\xE9cran",card_fill_hint:"Fonctionne au mieux dans une vue de tableau de bord de type \xAB Panneau (carte unique) \xBB \u2013 la carte prend alors toute la place.",card_controls:"Boutons dans la carte",card_floor_thumbs:"\xC9tages en miniatures",card_floor_thumbs_hint:"Petites images des \xE9tages sur le c\xF4t\xE9 \u2013 touchez-en une pour changer",card_floor_thumbs_hint_start:"L'\xE9tage choisi est alors celui o\xF9 d\xE9marre la carte \u2013 les images sur le c\xF4t\xE9 basculent vers les autres",card_room_names:"Afficher les noms des pi\xE8ces",card_section_kiosk:"Tablette murale (kiosque)",card_section_features:"Fonctions",card_weather_plan:"comme r\xE9gl\xE9 dans le plan",card_pro_hint:"La trace de mouvement et la m\xE9t\xE9o sont des modules Pro : sans le module correspondant, ces options sont sans effet.",card_idle_return:"Retour \xE0 la vue de d\xE9part apr\xE8s",card_idle_off:"Jamais",card_idle_min:"{n} min sans contact",card_idle_hint:"Apr\xE8s ce d\xE9lai, la carte ferme la pi\xE8ce et r\xE9affiche la vue de d\xE9part.",card_night:"Att\xE9nuation nocturne",card_night_off:"D\xE9sactiv\xE9e",card_night_sun:"Selon le soleil",card_night_time:"Plage horaire",card_night_range:"Plage horaire (p. ex. 22:00-06:00)",card_idle_orbit:"Rotation de la cam\xE9ra comme \xE9conomiseur d'\xE9cran",card_idle_orbit_hint:"Apr\xE8s le retour, la vue tourne lentement jusqu'\xE0 ce que quelqu'un touche la tablette",card_alerts:"Afficher les alertes",card_alerts_hint:"Fum\xE9e, gaz, CO, eau, alarme et fen\xEAtres ouvertes sous la pluie : la pi\xE8ce pulse, une notification appara\xEEt en haut",card_alert_jump:"Aller \xE0 la pi\xE8ce d'une nouvelle alerte",card_alert_jump_hint:"La vue passe d'elle-m\xEAme \xE0 l'\xE9tage et \xE0 la pi\xE8ce de l'alerte",card_scenes:"Boutons de sc\xE8ne dans la pi\xE8ce",card_scenes_hint:"Sc\xE8nes et scripts de la pi\xE8ce HA en boutons sous la vue 3D quand une pi\xE8ce est s\xE9lectionn\xE9e",card_motion_trail:"Trace de mouvement",card_motion_trail_hint:"O\xF9 un mouvement a \xE9t\xE9 signal\xE9 ces 30 derni\xE8res minutes, avec les heures (capteurs de mouvement, de pr\xE9sence et cam\xE9ras)",trail_short:"Trace",weather_short:"M\xE9t\xE9o",weather_entity:"Entit\xE9 m\xE9t\xE9o",weather_effects:"Effets m\xE9t\xE9o en 3D",rain_warning:"Alerte : fen\xEAtre ouverte sous la pluie",weather_effect_rain:"Pluie",weather_effect_snow:"Neige",weather_effect_fog:"Brouillard (grise la sc\xE8ne)",weather_effect_clouds:"Les nuages assombrissent le ciel et le soleil",weather_effect_lightning:"\xC9clairs pendant les orages",weather_effect_sky:"Soleil et lune dans le ciel",weather_entity_hint:"L'entit\xE9 m\xE9t\xE9o fournit pluie, neige, brouillard et nuages \xE0 la vue 3D ; en automatique, la premi\xE8re est utilis\xE9e.",weather_hint:"M\xE9t\xE9o ext\xE9rieure : pluie, neige, brouillard et nuages depuis l'entit\xE9 m\xE9t\xE9o, soleil et lune depuis sun.sun",card_weather:"M\xE9t\xE9o ext\xE9rieure",card_weather_hint:"Pluie, neige, brouillard et nuages depuis la premi\xE8re entit\xE9 m\xE9t\xE9o (weather_entity en choisit une autre) ; seulement les nuages au niveau tablette",trail_hint:"Trace de mouvement : o\xF9 un mouvement a \xE9t\xE9 signal\xE9 ces 30 derni\xE8res minutes, avec les heures",alerts:"Alertes",alert_smoke:"Fum\xE9e : {name}",alert_gas:"Gaz : {name}",alert_co:"Monoxyde de carbone : {name}",alert_water:"Eau : {name}",alert_alarm:"Alarme d\xE9clench\xE9e",alert_alarm_pending:"Alarme en attente",alert_window_rain:"Fen\xEAtre ouverte sous la pluie : {name}",room_names_short:"Noms des pi\xE8ces",floor_stack_short_dim:"Att\xE9nu\xE9s",floor_stack_short_stacked:"Empil\xE9s",floor_stack_short_single:"Seul",size_short_w:"L",size_short_d:"P",size_short_h:"H",import_error_not_json:"Le fichier n'est pas du JSON.",import_error_not_plan:"Le fichier n'est pas un plan NeonPlan 3D.",export_name_template:"modele",export_name_backup:"sauvegarde",card_floor_stack:"\xC9tages inf\xE9rieurs",floor_stack_dim:"Att\xE9nu\xE9s",floor_stack_stacked:"Empil\xE9s (la maison jusqu'ici)",floor_stack_single:"Masqu\xE9s (seulement cet \xE9tage)",card_control_walls:"Murs hauts/coupe",card_control_floors:"\xC9tages \xE9cart\xE9s",card_control_temperature:"Temp\xE9rature",card_control_humidity:"Humidit\xE9",card_control_co2:"CO\u2082",card_controls_hint:"Murs hauts/coupe, \xE9tages \xE9cart\xE9s et temp\xE9rature, humidit\xE9, CO\u2082 \xE0 basculer",card_fullscreen_button:"Bouton plein \xE9cran",card_fullscreen_button_hint:"Masque le tableau de bord autour de la carte (p. ex. sur une tablette murale)",fullscreen:"Plein \xE9cran",fullscreen_exit:"Quitter le plein \xE9cran",card_section_show:"Afficher",card_floor:"\xC9tage",card_floor_house:"Toute la maison (touchez un \xE9tage pour l'ouvrir)",card_height:"Hauteur (pixels)",card_walls:"Murs",card_quality_hint:"\xAB Tablette \xBB est le r\xE9glage le plus l\xE9ger \u2013 id\xE9al pour les tablettes Fire et autres tablettes murales.",card_flows_switch:"Bouton dans la carte",card_flows_on:"Toujours activ\xE9",card_flows_off:"Toujours d\xE9sactiv\xE9",card_energy:"Afficher les valeurs d'\xE9nergie en haut",card_room_panel:"D\xE9tails de la pi\xE8ce au toucher",card_room_panel_hint:"Lumi\xE8res, volets et cam\xE9ras de la pi\xE8ce dans un panneau lat\xE9ral",card_explode:"\xC9carter les \xE9tages dans la vue maison",card_stats:"Indicateur de performance (images par seconde)",card_stats_hint:"Pour v\xE9rifier la fluidit\xE9 de la carte sur l'appareil",packs:"Packs de meubles",packs_hint:"Seuls les packs sign\xE9s par l'\xE9diteur peuvent \xEAtre import\xE9s.",lib_badge_light:"Luminaire : se lie \xE0 une lumi\xE8re et se commute en 3D",lib_badge_electric:"\xC9lectrique : se lie \xE0 une entit\xE9 et \xE0 un capteur de puissance (commutation, images, consommation)",lib_badge_hint:"Les \xE9l\xE9ments avec un symbole se lient \xE0 des entit\xE9s : les luminaires se commutent, les \xE9crans affichent des images, les appareils montrent leur consommation.",pack_error_wrong_instance:"Ce pack est sign\xE9 pour une autre installation de Home Assistant. Le compte de la boutique peut le fournir pour celle-ci.",license_title:"Connexion \xE0 la boutique",license_instance:"Identifiant d'installation",license_copy:"Copier",license_copied:"Identifiant copi\xE9",license_activate:"Activer",license_activated:"Connect\xE9 \u2013 vos packs sont list\xE9s ci-dessous.",license_active:"Connect\xE9 en tant que {name} (cl\xE9 {key})",license_checked:"derni\xE8re v\xE9rification {time}",license_refresh:"V\xE9rifier maintenant",license_refreshed:"V\xE9rifi\xE9.",license_remove:"D\xE9connecter",license_remove_confirm:"Se d\xE9connecter de la boutique ? Les packs install\xE9s restent, seules les mises \xE0 jour automatiques s'arr\xEAtent.",license_installed:"install\xE9 \xB7 v{release}",license_update_available:"mise \xE0 jour vers v{release} disponible",license_not_installed:"pas encore install\xE9",license_install:"Installer",license_update:"Mettre \xE0 jour",license_none:"Aucun pack dans le compte pour l'instant.",license_hint:"La cl\xE9 de licence figure dans votre commande et dans votre compte sur mastershort.de. Saisie une fois, les packs achet\xE9s apparaissent ici, sont sign\xE9s pour cette installation et se mettent \xE0 jour d'eux-m\xEAmes (v\xE9rification une fois par jour). Tout ce qui est install\xE9 continue de fonctionner sans la connexion.",license_shop:"Plus de packs dans la boutique",license_error_invalid_key:"La boutique ne conna\xEEt pas cette cl\xE9. Elle ressemble \xE0 NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"Cette cl\xE9 est d\xE9j\xE0 li\xE9e au nombre d'installations autoris\xE9.",license_error_shop_unreachable:"La boutique est injoignable pour le moment. Les packs install\xE9s continuent de fonctionner.",license_error_not_owned:"Ce pack n'est pas dans ce compte.",license_error_no_key:"Saisissez d'abord la cl\xE9 de licence.",license_error_wrong_instance:"La boutique a sign\xE9 le pack pour une autre installation.",license_error_other:"Cela n'a pas fonctionn\xE9 : {detail}",pack_import:"Importer des packs de meubles \u2026",pack_imported:"\xAB {name} \xBB de {publisher} import\xE9 \u2013 {n} \xE9l\xE9ments",packs_imported_n:"{n} packs sur {total} import\xE9s",pack_by:"de {publisher} \xB7 {n} \xE9l\xE9ments",pack_features:"de {publisher} \xB7 d\xE9bloque {n} fonctions Pro",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Cockpit cam\xE9ra : regarder par la cam\xE9ra et trace de mouvement",pro_name_camera_cockpit:"Cockpit cam\xE9ra",pro_name_weather:"M\xE9t\xE9o ext\xE9rieure",pro_name_screens:"\xC9crans en direct",ext_tab:"Extensions",offers_title:"Nouveau dans la boutique",offers_new:"NOUVEAU",offers_loyalty:"Votre remise fid\xE9lit\xE9 : {percent} % sur chaque pack et module Pro suppl\xE9mentaire",offers_kind_pack:"Pack de meubles",offers_kind_pro:"Module Pro",offers_kind_bundle:"Lot",offers_dot:"Nouveau dans la boutique",pack_updated:"{name} a \xE9t\xE9 mis \xE0 jour vers la version {release}.",pack_updated_added:"{name} a \xE9t\xE9 mis \xE0 jour vers la version {release} : {n} nouveaux \xE9l\xE9ments \u2013 jetez un \u0153il \xE0 la biblioth\xE8que !",ext_title:"Extensions",ext_intro:"Packs de meubles et modules Pro pour NeonPlan 3D. Installez ici ce que vous avez achet\xE9 avec votre cl\xE9 de licence ; tout se met \xE0 jour seul et fonctionne aussi sans la connexion.",ext_shop:"Ouvrir la boutique",ext_pro:"Modules Pro",ext_active:"actif",ext_get:"Voir dans la boutique",ext_open:"Ouvrir les extensions",manual:"Manuel",manual_more:"En savoir plus",ext_teaser_title:"Plus de meubles et de fonctions Pro",ext_teaser_text:"Les packs de meubles, la connexion \xE0 la boutique et les modules Pro se trouvent sous \xAB Extensions \xBB en haut.",pro_feature_weather:"M\xE9t\xE9o ext\xE9rieure : pluie, neige, nuages, soleil et lune",pro_feature_screens:"\xC9crans en direct : couleur de l'appli et pochette du lecteur multim\xE9dia, r\xE8gles d'images, images en direct des cam\xE9ras sur les \xE9crans",pro_locked:"Cette fonction est un module Pro. Apr\xE8s l'achat, elle appara\xEEt sous Extensions \u203A Connexion \xE0 la boutique et s'installe depuis l\xE0.",pro_shop:"Vers la boutique",pack_licensed:"Sous licence pour {name}",pack_remove:"Retirer",pack_remove_confirm:"Retirer le pack \xAB {name} \xBB ? Ses meubles restent dans le plan sous forme de simples blocs.",pack_missing_item:"Meuble d'un pack retir\xE9",pack_error_bad_signature:"Le pack a \xE9t\xE9 modifi\xE9 ou sa signature est invalide.",pack_error_unknown_publisher:"Ce pack ne provient pas d'un \xE9diteur connu.",pack_error_unsigned:"Le pack n'est pas sign\xE9.",pack_error_not_a_pack:"Ce n'est pas un fichier de pack de meubles.",pack_error_invalid_content:"Le pack contient des meubles invalides : {detail}",pack_error_too_large:"Le fichier est trop volumineux.",pack_error_other:"\xC9chec de l'import : {detail}",back_to_room:"Retour \xE0 {room}",back_to_floor:"Retour \xE0 l'\xE9tage",hint_furniture:"Touchez une pi\xE8ce, puis choisissez un \xE9l\xE9ment \xE0 droite \xB7 faites glisser les \xE9l\xE9ments, redimensionnez-les par leurs angles",furniture_into:"Les nouveaux \xE9l\xE9ments arrivent au milieu de \xAB {room} \xBB.",furniture_pick_room:"Astuce : touchez d'abord une pi\xE8ce \u2013 les nouveaux \xE9l\xE9ments arrivent alors en son milieu.",flows:"Flux d'\xE9nergie",flows_hint:"Afficher ou masquer les lignes lumineuses du compteur vers les consommateurs",flow_on:"activ\xE9",flow_off:"d\xE9sactiv\xE9",hint_opening:"Touchez un mur pour ajouter une porte ou une fen\xEAtre \u2013 choisissez ensuite son type \xE0 droite",preset_door:"Porte",preset_door_double:"Porte double",preset_window:"Fen\xEAtre",preset_window_double:"Fen\xEAtre double",preset_terrace:"Porte de terrasse",preset_terrace_double:"Porte-fen\xEAtre double",preset_garage:"Porte de garage",preset_front:"Porte d'entr\xE9e",opening_style:"Style",style_auto:"Automatique ({style})",style_interior:"Porte int\xE9rieure",style_front:"Porte d'entr\xE9e",style_front_glass:"Porte d'entr\xE9e vitr\xE9e",style_sidelight:"Porte d'entr\xE9e avec imposte lat\xE9rale",style_sidelights:"Porte d'entr\xE9e avec deux impostes lat\xE9rales",style_glass:"Porte vitr\xE9e",style_sliding:"Porte coulissante",style_passage:"Passage (sans porte)",style_standard:"Standard",style_bars:"Avec petits-bois",flip_hinge:"Inverser le c\xF4t\xE9 des charni\xE8res",flip_main_leaf:"Inverser le battant principal",flip_hinge_hint:"Charni\xE8res de l'autre c\xF4t\xE9",flip_swing:"Inverser le sens d'ouverture",flip_swing_hint:"La porte s'ouvre vers la pi\xE8ce ou de l'autre c\xF4t\xE9",main_leaf:"Battant principal (vu de la pi\xE8ce)",contact_main:"Contact battant principal",contact_second:"Contact second battant",tool_outdoor:"Ext\xE9rieur",tool_measure:"Par cotes",hint_measure:"Touchez le point de d\xE9part, puis saisissez \xE0 droite les longueurs de mur avec leur direction",measure:"Pi\xE8ce par cotes",measure_start:"Touchez le point de d\xE9part dans le plan, p. ex. un angle de pi\xE8ce.",measure_from:"D\xE9part \xE0 {x} / {z} m \u2013 toucher d\xE9place le d\xE9part.",measure_length:"Longueur du mur suivant (m)",measure_close:"Fermer la pi\xE8ce",measure_undo:"Retirer le dernier mur",measure_gap:"\xC9cart au d\xE9part : {gap} m (combl\xE9 \xE0 la fermeture)",measure_hint:"Astuce : saisissez une longueur et appuyez sur une fl\xE8che. Avec des cotes int\xE9rieures, utilisez ensuite \xAB Combler les \xE9carts \xBB.",rect_by_size:"Rectangle par dimensions",rect_add:"Ajouter le rectangle",dir_up:"Haut",dir_down:"Bas",dir_left:"Gauche",dir_right:"Droite",hint_outdoor:"Faites glisser pour dessiner un espace ext\xE9rieur (pelouse, terrasse, piscine \u2026)",outdoor:"Espace ext\xE9rieur",outdoor_type:"Type",outdoor_hint:"Les \xE9clairages ext\xE9rieurs (borne, spot de jardin, applique ext\xE9rieure) \xE9clairent tous les espaces ext\xE9rieurs et la fa\xE7ade.",out_lawn:"Pelouse",out_terrace:"Terrasse",out_path:"All\xE9e",out_driveway:"Acc\xE8s voiture",out_pool:"Piscine",out_bed:"Parterre",out_hedge:"Haie",out_fence:"Cl\xF4ture",north:"Nord (\xB0 dans le sens horaire depuis le haut)",north_hint:"Le nord est n\xE9cessaire pour le soleil (lumi\xE8re par les fen\xEAtres).",roof:"Toit",roof_none:"Pas de toit",roof_flat:"Toit plat",roof_gable:"Toit \xE0 deux pans",roof_custom:"Sections de toit (personnalis\xE9)",roof_sections:"Sections de toit",roof_sections_hint:"Chaque section de toit couvre un rectangle de la maison, p. ex. la maison, la grange ou une extension \u2013 chacune avec sa propre forme, direction de fa\xEEtage, hauteur d'\xE9gout et pente. Faites glisser dans le plan pour en dessiner une nouvelle ; toucher la s\xE9lectionne, glisser la d\xE9place, les angles la redimensionnent.",roof_sections_start:"Cr\xE9er des sections de toit \xE0 partir des pi\xE8ces",roof_sections_regen:"Recr\xE9er \xE0 partir des pi\xE8ces",roof_sections_off:"Revenir \xE0 un seul toit",roof_regen_confirm:"Remplacer toutes les sections de toit par une nouvelle proposition \xE0 partir des pi\xE8ces ?",roof_section:"Section de toit",roof_section_hint:"Les hauteurs se comptent depuis le sol. Un c\xF4t\xE9 avec un \xE9gout plus bas descend plus loin (toit asym\xE9trique) ; les toits monopentes montent depuis le premier c\xF4t\xE9.",roof_shape_gable:"Deux pans",roof_shape_hip:"Quatre pans",roof_shape_pent:"Monopente",roof_shape_flat:"Plat",roof_axis_x:"Fa\xEEtage \u2194",roof_axis_z:"Fa\xEEtage \u2195",roof_eave:"\xC9gout (m)",roof_pitch_short:"Pente (\xB0)",roof_height:"Hauteur (m)",roof_base:"Haut des murs (m)",roof_ridge_height:"Hauteur du fa\xEEtage",roof_side_top:"haut",roof_side_bottom:"bas",roof_side_left:"gauche",roof_side_right:"droite",roof_swap:"Inverser les c\xF4t\xE9s",roof_open:"Auvent (poteaux au lieu de murs, transparent)",roof_open_short:"Auvent",roof_open_hint:"Pour une toiture de terrasse ou un carport : des poteaux et des poutres portent le toit \xE0 la place des murs, et il est transparent. L\xE0 o\xF9 l'auvent touche le mur de la maison, il repose sur le mur.",roof_swap_hint:"Retourne le toit : les deux c\xF4t\xE9s \xE9changent \xE9gout et pente, un toit monopente monte dans l'autre sens.",roof_pitch:"Pente du toit (\xB0)",roof_overhang:"D\xE9bord de toit (m)",roof_ridge:"Fa\xEEtage",roof_ridge_long:"Le long du grand c\xF4t\xE9",roof_ridge_short:"Le long du petit c\xF4t\xE9 (p. ex. maison mitoyenne)",device:"Appareil",lamp_mount:"Luminaire",lamp_ceiling:"Plafonnier",lamp_floor:"Lampadaire",lamp_table:"Lampe de table",lamp_wall:"Applique murale",marker_height:"Hauteur du marqueur (m)",height_auto:"Hauteur automatique",device_centre:"Au centre de la pi\xE8ce",lights_spread:"R\xE9partir les plafonniers r\xE9guli\xE8rement",devices_search:"Rechercher des appareils \u2026",devices_more:"+{n} de plus",devices_less:"moins",panel_more:"Autres appareils de la pi\xE8ce HA ({n})",panel_less:"Afficher moins",gaps_close:"Combler les \xE9carts",gaps_hint:"Joint les pi\xE8ces distantes de 60 cm au plus par un mur commun ; l'\xE9cart devient l'\xE9paisseur du mur int\xE9rieur.",gaps_none:"Aucun \xE9cart entre les pi\xE8ces trouv\xE9.",gaps_closed:"{n} endroits combl\xE9s.",gaps_closed_wall:"{n} endroits combl\xE9s, mur int\xE9rieur d\xE9sormais de {t} m.",fps:"FPS",fps_title:"Indicateur de performance (images par seconde)",hint_garage:"Touchez un mur pour ajouter une porte de garage",opening_garage:"Porte de garage",garage_hint:"La porte suit un volet de garage (position ou ouvert/ferm\xE9) ou un contact de porte de garage de la pi\xE8ce HA.",door_hint:"Avec un contact de porte, le battant s'ouvre ; sans capteur, il reste entrouvert.",hint_door:"Touchez un mur pour ajouter une porte",hint_window:"Touchez un mur pour ajouter une fen\xEAtre",opening_door:"Porte",opening_window:"Fen\xEAtre",opening_type:"Type",opening_position:"Centre depuis l'angle (m)",sill:"Hauteur d'all\xE8ge (m)",opening_height:"Hauteur (m)",hinge:"Charni\xE8res (vu de la pi\xE8ce)",hinge_left:"Gauche",hinge_right:"Droite",cover_entity:"Volet",cover_position_entity:"Capteur de position (en direct)",cover_position_invert:"Le capteur compte dans l'autre sens (0 = ouvert)",contact_entity:"Contact",sensor_kind:"Type de capteur",sensor_kind_contact:"Contact de fen\xEAtre (ouvert/ferm\xE9)",sensor_kind_handle:"Capteur de poign\xE9e (ouvert/bascul\xE9/ferm\xE9)",sensor_kind_contact_tilt:"Contact + capteur d'oscillo-battant",handle_entity:"Capteur de poign\xE9e",handle_main:"Capteur de poign\xE9e battant principal",leaf_main:"Battant principal",leaf_second:"Second battant",tilt_entity:"Capteur d'oscillo-battant",entity_auto:"Automatique ({name})",entity_auto_none:"Automatique (aucun trouv\xE9)",entity_none:"Aucun",entity_search:"Tapez pour rechercher \u2026",opening_hint:"Type de capteur : contact de fen\xEAtre (signale ouvert/ferm\xE9), capteur de poign\xE9e (signale ouvert, bascul\xE9 et ferm\xE9 \u2013 p. ex. une poign\xE9e Homematic) ou contact + capteur d'oscillo-battant (un second capteur qui ne signale que bascul\xE9). Automatique utilise les volets et contacts de la pi\xE8ce HA. Capteur de position : une entit\xE9 qui indique la position du volet pendant son mouvement (p. ex. un \xAB level \xBB Homematic, 0\u2013100 % ou 0\u20131, ouvert = haut) \u2013 le volet bouge alors en direct en 3D.",furniture:"Meubles",furniture_add:"Ajouter un meuble",furniture_search:"Rechercher un meuble \u2026",furniture_type:"\xC9l\xE9ment",rotation:"Rotation (\xB0)",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Hauteur (m)",furn_sofa:"Canap\xE9",furn_armchair:"Fauteuil",furn_table:"Table",furn_chair:"Chaise",furn_bed:"Lit",furn_nightstand:"Table de chevet",furn_wardrobe:"Armoire",furn_shelf:"\xC9tag\xE8re",furn_kitchen:"Meuble de cuisine",furn_worktop:"Plan de travail",furn_fridge:"R\xE9frig\xE9rateur",furn_fridge_smart:"R\xE9frig\xE9rateur connect\xE9 (am\xE9ricain)",furn_door_left:"Capteur de porte gauche (c\xF4t\xE9 cong\xE9lateur)",furn_door_right:"Capteur de porte droite (c\xF4t\xE9 r\xE9frig\xE9rateur)",fridge_hint:"Tant qu'un capteur de porte signale \xAB ouvert \xBB, la porte s'ouvre en 3D. L'\xE9cran de la porte droite affiche des images selon des r\xE8gles comme un t\xE9l\xE9viseur \u2013 tant que cette porte est ferm\xE9e.",furn_stove:"Cuisini\xE8re",furn_sink:"\xC9vier",furn_bathtub:"Baignoire",furn_shower:"Douche",furn_wc:"WC",furn_washbasin:"Lavabo",furn_desk:"Bureau",furn_tv_board:"Meuble TV",furn_plant:"Plante",furn_rug:"Tapis",furn_stairs:"Escalier",furn_stairwell:"Tr\xE9mie",stairwell_hint:"Un trou dans ce plancher, par exemple au-dessus de l'escalier ou pour une mezzanine ; d'en haut, on voit au travers. La tr\xE9mie doit se trouver dans une seule pi\xE8ce ; plusieurs tr\xE9mies peuvent se chevaucher (pour une forme en L, par exemple). Un escalier de l'\xE9tage inf\xE9rieur qui monte jusqu'ici ouvre aussi le plancher de lui-m\xEAme.",tool_hole:"Tr\xE9mie",tool_roof:"Toit",tool_energy:"\xC9nergie",tool_wall:"Mur",hint_wall:"Faites glisser pour dessiner un mur isol\xE9 (cloison, muret) \xB7 Maj le garde droit \xB7 Alt sans magn\xE9tisme",free_wall:"Mur",wall_length:"Longueur (m)",wall_thickness:"\xC9paisseur du mur (m)",wall_height:"Hauteur (m)",wall_height_full:"Toute la hauteur de la pi\xE8ce",wall_heights:"Hauteurs des murs",wall_n:"Mur {a}\u2013{b}",wall_exterior_short:"mur ext\xE9rieur",room_wall_hint:"Une hauteur plus faible transforme le mur en muret ou en comptoir. Si deux pi\xE8ces partagent le mur, le r\xE9glage le plus bas s'applique. Les fen\xEAtres et portes qui s'y trouvent s'arr\xEAtent \xE0 la hauteur du mur.",free_wall_hint:"Un mur ind\xE9pendant, p. ex. une cloison. L\xE0 o\xF9 il rejoint un mur de pi\xE8ce, l'angle est raccord\xE9. Faites glisser les poign\xE9es pour d\xE9placer ses extr\xE9mit\xE9s, la ligne pour d\xE9placer tout le mur.",stairwell_outside:"Cette tr\xE9mie d\xE9passe la limite d'une pi\xE8ce et n'est donc pas d\xE9coup\xE9e. D\xE9placez-la enti\xE8rement dans une pi\xE8ce ou r\xE9duisez-la.",hint_hole:"Faites glisser pour dessiner une tr\xE9mie (cage d'escalier, mezzanine)",hint_roof:"Faites glisser pour dessiner une section de toit \xB7 toucher s\xE9lectionne \xB7 glisser d\xE9place \xB7 les angles redimensionnent",hint_energy:"Touchez un champ solaire pour le s\xE9lectionner \xB7 faites-le glisser pour le d\xE9placer, aussi sur un autre pan de toit \xB7 nouveaux champs avec + Champ solaire \xE0 droite",furn_parking:"Place de parking",furn_group_vehicles:"Parking",parking_entity:"Capteur \xAB voiture pr\xE9sente \xBB",parking_vehicle:"V\xE9hicule",parking_vehicle_none:"Aucun",parking_no_pack:"Aucun pack de v\xE9hicules import\xE9 \u2013 les v\xE9hicules viennent du pack \xAB V\xE9hicules \xBB (Meubles \u2192 Importer des packs de meubles).",parking_scale:"Taille (%)",parking_type_entity:"Capteur de type de v\xE9hicule (facultatif)",parking_types:"\xC9tat \u2192 v\xE9hicule",parking_type_state:"\xC9tat (p. ex. van)",parking_add_type:"+ Correspondance",parking_hint:"Sans capteur, le v\xE9hicule est toujours l\xE0. Avec un capteur, il appara\xEEt d\xE8s que celui-ci signale \xAB on \xBB, \xAB home \xBB ou \xAB present \xBB. Un capteur de type de v\xE9hicule (p. ex. issu d'une analyse IA de cam\xE9ra) choisit le mod\xE8le : si son \xE9tat correspond \xE0 une correspondance \u2013 m\xEAme comme mot dans le texte \u2013 ce v\xE9hicule est affich\xE9, sinon celui par d\xE9faut.",parking_too_tall:"Le v\xE9hicule ({car} m) est plus haut que la pi\xE8ce ({room} m).",furn_lamp_ceiling:"Plafonnier",furn_lamp_downlight:"Spot encastr\xE9",furn_lamp_spot:"Spot en saillie",furn_lamp_panel:"Panneau LED",furn_lamp_uplight:"Spot de sol",furn_lamp_bollard:"Borne d'\xE9clairage",furn_lamp_garden:"Spot de jardin",furn_radiator:"Radiateur",furn_robot_vacuum:"Robot aspirateur",furn_entity_vacuum:"Robot aspirateur",furn_robot_room:"Pi\xE8ce actuelle (capteur)",robot_hint:"Pendant que le robot nettoie dans Home Assistant, il parcourt en 3D des bandes dans la pi\xE8ce qu'il signale (un capteur \xAB pi\xE8ce actuelle \xBB, compar\xE9 au nom de la pi\xE8ce ou de la pi\xE8ce HA), sinon dans la pi\xE8ce de sa base. Le trajet est simul\xE9 \u2013 Home Assistant ne conna\xEEt g\xE9n\xE9ralement pas la position exacte. Il retourne \xE0 sa base quand il rentre.",furn_lamp_pendant:"Suspension",furn_lamp_floor:"Lampadaire",furn_lamp_table:"Lampe de table",furn_lamp_wall:"Applique murale",furn_led_strip:"Ruban LED",furn_group_lights:"\xC9clairage",furn_entity_light:"Lumi\xE8re ou interrupteur",furn_entity_climate:"Chauffage (thermostat)",lamp_hint:"Touchez le luminaire en 3D pour le commuter, appui long pour le menu rapide. Les interrupteurs fonctionnent aussi (p. ex. un relais pour le plafonnier) \u2013 le luminaire brille tant qu'il est allum\xE9. Les lampes de table se posent sur le meuble en dessous.",lamp_hint_pendant:"Hauteur = suspension sous le plafond. Touchez en 3D pour commuter, appui long pour les d\xE9tails.",theme:"Apparence",theme_neon:"N\xE9on",theme_blueprint:"Plan bleu",theme_day:"Jour",furnish:"Meubler",split_3d:"3D \xE0 c\xF4t\xE9",mount_height:"Hauteur au-dessus du sol (m)",side_open:"Ouvrir la barre lat\xE9rale",side_close:"Fermer",side_details:"D\xE9tails de la s\xE9lection",side_pin:"\xC9pingler",side_pinned:"\xC9pingl\xE9e",side_pin_hint:"\xC9pingl\xE9e, la barre lat\xE9rale reste ouverte ; sinon elle se replie \xE0 c\xF4t\xE9 de la vue 3D tant que rien n'est s\xE9lectionn\xE9",split_3d_hint:"3D en direct \xE0 c\xF4t\xE9 du plan : d\xE9placez et tournez-y meubles et appareils \u2013 avec annulation, enregistr\xE9 avec le plan",size_w:"Largeur (m)",size_d:"Profondeur (m)",size_h:"Hauteur (m)",furnish_hint:"Faites glisser meubles, luminaires et appareils \xB7 les meubles s'aimantent aux murs \xB7 touchez-en un pour le tourner, r\xE9gler sa hauteur et son montage",done:"Termin\xE9",heatmap:"Carte thermique",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humidit\xE9",heat_short_co2:"CO\u2082",heat_temperature:"Temp\xE9rature",heat_humidity:"Humidit\xE9",heat_co2:"CO\u2082",heat_none_found:"Aucun capteur adapt\xE9 dans les pi\xE8ces HA des pi\xE8ces.",markers:"Marqueurs",markers_none:"Aucun",markers_important:"Importants",markers_all:"Tous",furn_stool:"Tabouret",furn_coffee_table:"Table basse",furn_tv_wall:"TV (murale)",furn_sideboard:"Buffet",furn_table_round:"Table ronde",furn_bench:"Banc",furn_corner_bench:"Banquette d'angle",furn_bar_stool:"Tabouret de bar",furn_kitchen_wall:"Meuble haut",furn_kitchen_tall:"Colonne avec four",furn_island:"\xCElot central",furn_dishwasher:"Lave-vaisselle",furn_bunk_bed:"Lits superpos\xE9s",furn_dresser:"Commode",furn_washer:"Lave-linge",furn_dryer:"S\xE8che-linge",furn_office_chair:"Chaise de bureau",furn_tall_cabinet:"Armoire haute",furn_coat_rack:"Portemanteau",furn_group_living:"S\xE9jour",furn_group_dining:"Repas",furn_group_energy:"\xC9nergie et solaire",energy_devices:"Appareils",solar_pro_title:"Solar & Energy Pro",solar_pro_soon:"bient\xF4t disponible",solar_pro_1:"Des modules qui s'animent au soleil et brillent selon leur production",solar_pro_2:"De fines lignes de flux d'\xE9nergie \xE0 travers la maison : d'o\xF9 vient le courant et o\xF9 il va",solar_pro_3:"Un hologramme de verre avec la puissance, la courbe du jour, la production du jour et l'autosuffisance",solar_pro_4:"Les valeurs par string sur le toit, la batterie, la borne de recharge et le r\xE9seau en un coup d'\u0153il",solar_pro_free:"Tout ce que vous configurez ici (champs, strings, appareils, capteurs) reste gratuit et sera utilis\xE9 directement par le module Pro.",wallbox_charging:"en charge",wallbox_plugged:"branch\xE9e",furn_soc:"\xC9tat de charge (%)",furn_wallbox_status:"Statut (en charge, branch\xE9e)",energy_only_note:"\u26A1 \xC9nergie : seuls les champs solaires et les appareils d'\xE9nergie peuvent \xEAtre d\xE9plac\xE9s ici ; les pi\xE8ces et les meubles sont verrouill\xE9s.",roof_only_note:"\u{1F3E0} Toit : seules les sections de toit et les fen\xEAtres de toit peuvent \xEAtre d\xE9plac\xE9es ici ; les pi\xE8ces et les meubles sont verrouill\xE9s.",energy_devices_hint:"Onduleurs, batteries domestiques et bornes de recharge s'ajoutent ici : sur l'\xE9tage choisi ci-dessus, d\xE9pla\xE7ables dans le plan. Avec un capteur de puissance, ils affichent leurs watts ; un string choisit son onduleur.",solar_fields:"Champs solaires",solar_hint:"Placez des modules sur le toit : ils suivent la pente du pan de toit ; sur un toit plat, ils reposent sur des supports. Faites glisser un champ dans le plan pour le d\xE9placer.",solar_no_roof:"Les champs solaires n\xE9cessitent un toit : un toit \xE0 deux pans ou plat dans R\xE9glages, ou des sections de toit ici dans l'outil Toit.",solar_face_gone:"pan de toit manquant",solar_summary:"{n} modules \xB7 {kwp} kWc",solar_add:"Champ solaire",solar_field:"Champ solaire",solar_face:"Pan de toit",solar_rows:"Rang\xE9es",solar_cols:"Modules par rang\xE9e",solar_portrait:"Portrait",solar_landscape:"Paysage",solar_u:"Distance au bord (m)",solar_v:"Distance \xE0 l'\xE9gout (m)",solar_tilt:"Inclinaison des supports (\xB0)",solar_flip:"Incliner dans l'autre sens",solar_partial:"seulement {n} sur {total} tiennent sur le pan",solar_form_hint:"Les modules qui d\xE9passeraient du pan de toit sont omis. \xAB Remplir le pan \xBB place autant de modules que possible sur le toit. kWc calcul\xE9s avec 400 W par module.",solar_fit:"Remplir le pan",roof_windows:"Fen\xEAtres de toit",roof_window:"Fen\xEAtre de toit",roof_windows_hint:"Les fen\xEAtres de toit s'int\xE8grent au pan de toit, avec volet et contacts comme les fen\xEAtres. Faites-les glisser dans le plan, aussi sur un autre pan de toit.",roof_window_tilt:"Contact d'entreb\xE2illement",roof_window_hint:"Ouvert, l'ouvrant pivote vers l'ext\xE9rieur, articul\xE9 en haut ; entreb\xE2ill\xE9, un peu ; le volet descend sur la vitre depuis le haut.",solar_ground:"Au sol (jardin, toit de garage \u2026)",solar_add_ground:"Au sol",solar_base:"Hauteur de la surface (m, 0 = sol)",solar_add_wall:"Sur un mur",solar_wall:"Mur",solar_v_wall:"Hauteur au-dessus du sol (m)",solar_tilt_wall:"Inclinaison par rapport au mur (\xB0, 90 = auvent)",solar_flip_wall:"\xC9cart\xE9 en bas plut\xF4t qu'en haut",solar_rotation:"Rotation (\xB0)",solar_name:"Nom",solar_name_hint:"p. ex. string 1 sud",solar_module_w:"Largeur du module (m)",solar_module_h:"Hauteur du module (m)",solar_string:"String",solar_strings:"Strings",solar_string_none:"Aucun string",solar_string_new:"Nouveau string",solar_string_n:"String {n}",solar_string_name:"Nom du string",solar_string_entity:"Puissance PV du string",solar_string_inverter:"Onduleur",solar_string_inverter_none:"Aucun onduleur choisi",solar_string_inverter_missing:"Aucun onduleur dans le plan pour l'instant (ajoutez-en un ci-dessous sous Appareils)",solar_string_hint:"Les champs d'un m\xEAme string vont ensemble, m\xEAme sur des toits diff\xE9rents (p. ex. 5 modules sur la maison et 5 sur le garage). Le capteur et l'onduleur valent pour tout le string.",solar_string_sum:"{fields} champs \xB7 {n} modules \xB7 {kwp} kWc",solar_face_size:"Pan de toit {w} \xD7 {h} m (le long de l'\xE9gout \xD7 dans la pente)",solar_cols_hint:"Un nombre pour des rang\xE9es de m\xEAme longueur, ou une liste pour des rang\xE9es de longueur propre : \xAB 4, 4, 3 \xBB (depuis l'\xE9gout).",solar_align_left:"Gauche",solar_align_center:"Centre",solar_align_right:"Droite",solar_look_black:"Full black",solar_look_blue:"Bleu",solar_pick:"Activer/retirer les modules un par un",solar_pick_all:"Tout r\xE9activer",solar_pick_hint:"Touchez un module dans le plan pour le retirer ou le remettre. Les modules retir\xE9s sont en pointill\xE9s.",solar_entity:"Puissance PV de ce champ (p. ex. son string)",solar_main:"Toit principal",solar_section:"Section {n}",solar_flat:"toit plat",compass_n:"nord",compass_ne:"nord-est",compass_e:"est",compass_se:"sud-est",compass_s:"sud",compass_sw:"sud-ouest",compass_w:"ouest",compass_nw:"nord-ouest",furn_inverter:"Onduleur solaire",furn_home_battery:"Batterie domestique",furn_wallbox:"Borne de recharge",furn_group_kitchen:"Cuisine",furn_group_sleeping:"Chambre",furn_group_bath:"Bain et buanderie",furn_group_work:"Travail et divers",furn_entity:"Appareil (interrupteur, prise \u2026)",furn_entity_tv:"TV (lecteur multim\xE9dia ou prise connect\xE9e)",fix:"Fixer",unfix:"Lib\xE9rer",fix_hint:"Fix\xE9 : ne peut plus \xEAtre d\xE9plac\xE9 par accident (touche L, clic droit ou appui long)",fixed_drag_hint:"\u{1F512} Fix\xE9 \u2013 lib\xE9rez-le d'abord pour le d\xE9placer (cadenas dans le formulaire, clic droit ou touche L)",fixed_delete_confirm:"Cet \xE9l\xE9ment est fix\xE9. Le supprimer quand m\xEAme ?",lock_plan:"\u{1F512} Plan",lock_plan_hint:"Verrouiller le plan : pi\xE8ces, murs, portes, fen\xEAtres et espaces ext\xE9rieurs ne peuvent plus \xEAtre d\xE9plac\xE9s par accident. Les meubles et appareils restent libres.",ctx_rotate:"Tourner de 90\xB0",devices_placed_in:"dans {room}",devices_narrow:"{n} de plus \u2013 affinez la recherche",climate:"Climat de la pi\xE8ce",climate_temperature:"Temp\xE9rature",climate_humidity:"Humidit\xE9",climate_co2:"CO\u2082",climate_hint:"Ces capteurs comptent pour la carte thermique et le panneau de la pi\xE8ce. \xAB Automatique \xBB prend les capteurs de la pi\xE8ce HA et ceux plac\xE9s dans la pi\xE8ce, mais aucune temp\xE9rature d'appareil (imprimante 3D, pompe \xE0 chaleur, d\xE9part \u2026).",plan_locked:"Plan verrouill\xE9",plan_lock:"Verrouiller le plan",plan_unlock:"D\xE9verrouiller le plan",opening_mark:"Mettre en \xE9vidence en 3D",opening_mark_open:"Quand ouvert",opening_mark_closed:"Quand ferm\xE9 (p. ex. WC)",opening_mark_hint:"Une fen\xEAtre ou une porte mise en \xE9vidence brille d'une lueur chaude. \xAB Quand ferm\xE9 \xBB n\xE9cessite un contact ; sans capteur, rien n'est mis en \xE9vidence.",marker_show:"Marqueur en 3D",marker_show_hint:"Automatique suit le choix Aucun / Importants / Tous de la vue 3D. Toujours afficher et Masquer s'appliquent quoi qu'il arrive (sauf avec Aucun).",marker_show_auto:"Automatique",marker_show_always:"Toujours afficher",marker_show_no_power:"Sans watts",marker_show_never:"Masquer",furn_power:"Capteur de puissance (W)",furn_links_hint:"Avec un capteur de puissance, l'\xE9l\xE9ment affiche ses watts et re\xE7oit un c\xE2ble d'\xE9nergie.",screen_pictures:"Images selon l'\xE9tat",screen_pictures_hint:"L'\xE9tat ou un attribut de l'entit\xE9 est compar\xE9 (p. ex. app_name d'un t\xE9l\xE9viseur). Une valeur correspond si elle est \xE9gale ou contenue dans le texte (\xAB youtube \xBB correspond \xE0 \xAB com.google.android.youtube.tv \xBB) ; \xAB * \xBB = toujours. La premi\xE8re r\xE8gle qui correspond l'emporte. Les images sont enregistr\xE9es r\xE9duites \xE0 512 px ; une URL d'image ou une cam\xE9ra fonctionne aussi \u2013 l'image en direct d'une cam\xE9ra est rafra\xEEchie toutes les 5 secondes tant qu'elle est affich\xE9e. Sans r\xE8gle correspondante, l'\xE9cran affiche le lecteur multim\xE9dia.",picture_state:"est ou contient \u2026 (p. ex. netflix)",picture_state_of:"\xC9tat",picture_attribute:"Comparer l'\xE9tat ou un attribut",picture_pick:"Choisir une image \u2026",picture_change:"Changer l'image \u2026",picture_url:"ou URL d'image",picture_add_value:"+ Valeur",picture_reuse:"Utiliser une image enregistr\xE9e",picture_camera:"ou une cam\xE9ra (image en direct) \u2026",picture_camera_none:"Aucune cam\xE9ra",screen_bg:"\xC9cran derri\xE8re l'image",screen_bg_black:"Sombre",screen_bg_white:"Blanc",picture_add_entity:"+ Autre entit\xE9",picture_current:"actuellement : {value}",picture_matches:"\u2713 correspond maintenant \u2013 cette image s'affiche",furn_links_hint_tv:"L'\xE9cran brille tant que le t\xE9l\xE9viseur est allum\xE9, dans la couleur de l'appli (Netflix, YouTube \u2026) ; l'\xE9tiquette affiche l'appli ou le titre.",stairs_hint:"L'escalier monte vers l'arri\xE8re (\xE0 l'oppos\xE9 du bord avant marqu\xE9) et ouvre le plafond de l'\xE9tage sup\xE9rieur.",floor_lights:"{n} lumi\xE8res allum\xE9es",floor_open:"{n} ouverts",floor_persons:"{n} personnes",energy_consumption:"Consommation",energy_grid_import:"Soutirage r\xE9seau",energy_grid_export:"Injection",energy_solar:"Solaire",energy_battery:"Batterie",energy_tariff:"Tarif",energy:"\xC9nergie",energy_meter:"Compteur",energy_meter_set:"Placer le compteur",energy_meter_remove:"Retirer le compteur",energy_meter_hint:"Touchez dans le plan l'emplacement du compteur ou du raccordement de la maison.",energy_grid:"R\xE9seau (W, + = soutirage)",energy_solar_sensor:"Production solaire (W)",energy_battery_sensor:"Puissance de la batterie (W, + = d\xE9charge)",energy_battery_soc:"Charge de la batterie (%)",energy_tariff_sensor:"Tarif (p. ex. \u20AC/kWh)",energy_invert:"Inverser le signe",energy_hint:"Les consommateurs sont les appareils plac\xE9s avec un capteur de puissance (W) \u2013 le capteur lui-m\xEAme ou un capteur du m\xEAme appareil.",tool_meter:"Compteur",hint_meter:"Touchez l'emplacement du compteur",presence:"Pr\xE9sence",presence_hint:"Capteur de pi\xE8ce par personne (p. ex. ESPresense, Bermuda) : son \xE9tat indique la pi\xE8ce ou la pi\xE8ce HA.",presence_sensor:"Capteur de pi\xE8ce",no_persons:"Il n'y a aucune personne dans Home Assistant."};var Ys={view:"3D",editor:"Editor",all_floors:"Alle Etagen",no_building:"Noch kein Grundriss vorhanden.",no_building_admin:"Noch kein Grundriss vorhanden. Im Editor zeichnest du deine erste Etage.",open_editor:"Editor \xF6ffnen",loading:"L\xE4dt \u2026",load_error:"Laden fehlgeschlagen",saving:"Speichert \u2026",saved:"Gespeichert",save_error:"Speichern fehlgeschlagen",save_failed_detail:"Speichern fehlgeschlagen: {error}. Deine \xC4nderungen bleiben in diesem Browser erhalten.",needs_restart:"Eine neue Version von NeonPlan 3D ist installiert, aber Home Assistant l\xE4uft noch mit {version}. Bitte Home Assistant neu starten \u2013 bis dahin kann das Speichern fehlschlagen.",needs_restart_old:"Eine neue Version von NeonPlan 3D ist installiert, aber Home Assistant l\xE4uft noch mit einer \xE4lteren. Bitte Home Assistant neu starten \u2013 bis dahin schl\xE4gt das Speichern fehl.",draft_found:"Nicht gespeicherte \xC4nderungen vom {time} gefunden.",draft_restore:"\xDCbernehmen und speichern",draft_discard:"Verwerfen",walls_auto:"W\xE4nde hoch",walls_cut:"Schnitt",reset_view:"\xDCbersicht",back:"Zur\xFCck",floor:"Etage",floors:"Etagen",add_floor:"Etage hinzuf\xFCgen",floor_from_ha:"Etagen aus Home Assistant:",floor_empty:"Leere Etage",level:"Ebene {n}",ha_floor:"Etage in Home Assistant",no_ha_floor:"\u2013 keine \u2013",area_rooms:"{n} R\xE4ume aus HA-Bereichen anlegen",area_rooms_hint:"Legt f\xFCr jeden Bereich dieser Etage einen Raum an (4 \xD7 3 m) \u2013 danach an die richtige Stelle ziehen und die Ecken anpassen",floor_name:"Name",elevation:"H\xF6he \xFCber Boden (m)",height:"Raumh\xF6he (m)",cut_height:"Schnitth\xF6he (m)",delete_floor:"Etage l\xF6schen",delete_floor_confirm:"Etage \u201E{name}\u201C mit allen R\xE4umen l\xF6schen?",move_up:"Nach oben",move_down:"Nach unten",default_floor:"Erdgeschoss",new_floor:"Etage {n}",tool_select:"Ausw\xE4hlen",tool_rect:"Rechteck",tool_polygon:"Freie Form",undo:"R\xFCckg\xE4ngig",redo:"Wiederholen",fit:"Alles zeigen",room:"Raum",rooms:"R\xE4ume",room_name:"Name",area:"Bereich",no_area:"Kein Bereich",material:"Boden",x:"X (m)",z:"Y (m)",width:"Breite (m)",depth:"Tiefe (m)",points:"Eckpunkte",delete_point:"Punkt l\xF6schen",duplicate:"Duplizieren",delete:"L\xF6schen",new_room:"Raum {n}",settings:"Einstellungen",pendant_shape:"Form",pendant_shade:"Schirm",pendant_globe:"Kugel",pendant_cone:"Kegel",pendant_drum:"Trommel",pkg_open:"Einrichten \u2026",pkg_hint:"Die M\xF6bel kommen an die W\xE4nde des Raums; Leuchten verbinden sich mit den Lichtern des Bereichs. Danach einzeln anpassen \u2013 Strg+Z nimmt alles zur\xFCck.",pkg_done:"{n} M\xF6bel gesetzt \u2013 Strg+Z nimmt es zur\xFCck.",pkg_kitchen_row:"K\xFCchenzeile",pkg_kitchen_row_desc:"Zeile an der R\xFCckwand mit K\xFChlschrank, Backofen, Sp\xFCle, Sp\xFClmaschine und Herd, Oberschrank, Esstisch mit Pendelleuchte",pkg_kitchen_l:"K\xFCche in L-Form",pkg_kitchen_l_desc:"Zeile hinten und links, Kochinsel mit Barhockern",pkg_bath:"Bad",pkg_bath_desc:"Waschtisch, WC, Badewanne, Waschmaschine, Einbauspot",pkg_bedroom:"Schlafzimmer",pkg_bedroom_desc:"Doppelbett mit zwei Nachttischen, Schrank, Kommode, Deckenleuchte",pkg_living:"Wohnzimmer",pkg_living_desc:"TV-Board, Sofa, Couchtisch, Teppich, Sessel, Regal, Stehlampe, Pflanze",pkg_dining:"Esszimmer",pkg_dining_desc:"Esstisch mit vier St\xFChlen, Sideboard, Pendelleuchte",pkg_office:"B\xFCro",pkg_office_desc:"Schreibtisch mit B\xFCrostuhl, zwei Regale, Deckenleuchte",pkg_kids:"Kinderzimmer",pkg_kids_desc:"Einzelbett, Schreibtisch, Regal, Teppich",pkg_hall:"Flur",pkg_hall_desc:"Garderobe, zwei Einbauspots",spots_place:"Spots setzen",spots_type:"Leuchte",spots_cols:"Spalten (links\u2013rechts)",spots_rows:"Reihen (vorne\u2013hinten)",spots_add:"{n} Leuchten setzen",spots_placed:"{n} Leuchten gesetzt.",spots_hint:"Alle Leuchten folgen dem gew\xE4hlten Licht (z. B. Spots an einem Dimmer). Einzeln verschieben und ein anderes Licht w\xE4hlen geht danach wie bei jedem M\xF6bel.",cancel:"Abbrechen",backup:"Sicherung",backup_history:"Wiederherstellungspunkte",backup_none:"Noch keine. Beim Bearbeiten entsteht h\xF6chstens alle 10 Minuten ein Punkt.",backup_summary:"{rooms} R\xE4ume, {furniture} M\xF6bel",backup_restore:"Wiederherstellen",backup_restore_confirm:"Den Stand vom {time} wiederherstellen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_restored:"Wiederhergestellt.",backup_file:"Datei",backup_export:"Exportieren",backup_export_share:"Als Vorlage teilen",backup_export_share_hint:"Ohne Bereiche, Ger\xE4te, Sensoren und Bilder \u2013 zum Weitergeben an andere.",backup_import:"Importieren \u2026",backup_import_confirm:"Den ganzen Grundriss durch die Datei ersetzen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_import_error:"Die Datei ist kein Floorplan-3D-Plan ({error}).",backup_imported:"Importiert.",backup_hint:"Hintergrundbilder sind nicht in der Datei enthalten.",backup_full:"Komplett-Backup",backup_full_export:"Alles sichern (Plan, Bilder, Packs)",backup_full_import:"Komplett-Backup wiederherstellen \u2026",backup_full_hint:"Eine Datei mit dem Plan, allen Hintergrund- und Bildschirmbildern und den installierten Packs. Beim Wiederherstellen wird jedes Pack erneut gepr\xFCft; der Lizenzschl\xFCssel ist nicht enthalten.",backup_full_confirm:"Plan, Bilder und Packs durch das Backup ersetzen? Der aktuelle Stand bleibt als Wiederherstellungspunkt erhalten.",backup_full_not_backup:"Das ist kein Komplett-Backup von NeonPlan 3D.",backup_full_restored:"Backup wiederhergestellt: {packs} Packs, {pictures} Bilder.",backup_full_skipped:"\xDCbersprungen (nicht pr\xFCfbar oder f\xFCr eine andere Installation): {packs}.",export_name_full:"komplett",device_confirm:"Vor dem Schalten nachfragen",device_confirm_hint:"Beim Antippen in 3D, im Schnellmen\xFC und im Raumfenster erscheint erst eine R\xFCckfrage. Doppeltipp auf den Raum l\xE4sst dieses Ger\xE4t aus.",cover_confirm_hint:"Auf, Zu und Positionen fragen im Schnellmen\xFC und im Raumfenster erst nach, und Wischen \xFCber das Symbol bewegt den Rollladen nicht mehr (es dreht dann die Ansicht). Stopp fragt nie.",confirm_switch:"{name} wirklich schalten?",split_handle_hint:"Ziehen: Breite von Plan und 3D-Ansicht",wall_exterior:"Au\xDFenwand (m)",wall_interior:"Innenwand (m)",grid:"Raster (m)",background:"Vorlage (Grundriss-Bild)",background_upload:"Bild w\xE4hlen \u2026",background_width:"Breite im Plan (m)",background_opacity:"Deckkraft",background_remove:"Vorlage entfernen",hint_select:"Raum antippen zum Ausw\xE4hlen \xB7 Ecken ziehen \xB7 \u201E+\u201C auf einer Kante f\xFCgt einen Punkt ein \xB7 Pfeiltasten verschieben \xB7 Entf l\xF6scht \xB7 Strg+Z",hint_rect:"Ziehen, um ein Rechteck zu zeichnen",hint_polygon:"Punkte setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",hint_empty:"Lege zuerst eine Etage an.",area_m2:"{a} m\xB2",overlap_warning:"R\xE4ume \xFCberlappen sich \u2013 die W\xE4nde dort sind unvollst\xE4ndig.",read_only:"Nur Administratoren k\xF6nnen den Grundriss bearbeiten.",mat_wood:"Holz",mat_oak:"Eiche",mat_tiles:"Fliesen",mat_carpet:"Teppich",mat_stone:"Stein",mat_concrete:"Beton",card_name:"NeonPlan 3D",card_description:"Deine Wohnung in 3D (Neon).",stats:"{calls} Draw-Calls \xB7 {tris} Dreiecke",stats_fps:"{fps} B/s (langsamstes Bild {ms} ms)",stats_idle:"Ruhe (0 B/s)",stats_busy_camera:"Kamera",stats_busy_floors:"Etagen",stats_busy_openings:"T\xFCren/Fenster",stats_busy_flash:"Blitz",stats_busy_roof:"Dach",stats_busy_flow:"Stromfluss",stats_busy_effect:"Farbeffekt",stats_busy_robot:"Roboter",stats_busy_orbit:"Kamerafahrt",stats_busy_tint:"Raumfarbe",stats_low:"Stufe Tablet, Pixeldichte {r}",stats_full:"volle Stufe, Pixeldichte {r}",floors_apart:"Auseinander",floors_stacked:"Gestapelt",floor_rooms_one:"1 Raum",floor_rooms:"{n} R\xE4ume",quality:"Qualit\xE4t",quality_auto:"Auto",quality_low:"Tablet",quality_high:"Hoch",state_on:"An",state_off:"Aus",state_open:"Offen",state_closed:"Zu",state_opening:"\xD6ffnet",state_closing:"Schlie\xDFt",state_playing:"Spielt",state_paused:"Pause",state_idle:"Bereit",state_locked:"Verriegelt",state_unlocked:"Entriegelt",state_detected:"Erkannt",state_clear:"Frei",state_unavailable:"Nicht verf\xFCgbar",state_heat:"Heizen",state_cool:"K\xFChlen",state_auto:"Automatik",state_heat_cool:"Heizen/K\xFChlen",state_dry:"Entfeuchten",state_fan_only:"L\xFCften",devices:"Ger\xE4te",devices_none_area:"Verkn\xFCpfe den Raum mit einem Bereich, dann erscheinen dessen Ger\xE4te hier.",devices_none:"Im Bereich gibt es keine passenden Ger\xE4te.",devices_place_all_n:"Alle {n} platzieren \u2026",devices_place_all_confirm:"{n} Ger\xE4te auf einmal in den Raum setzen? (Strg+Z bzw. \u201ER\xFCckg\xE4ngig\u201C nimmt alle in einem Schritt zur\xFCck.)",devices_src_area:"Dieser Bereich",devices_src_other:"Andere Bereiche",devices_src_none:"Ohne Bereich",devices_place:"Platzieren",devices_remove:"Entfernen",devices_hint:"Platzierte Ger\xE4te erscheinen in 3D. Im Plan lassen sie sich verschieben.",panel_lights:"Licht",panel_covers:"Rolll\xE4den",panel_climate:"Heizung",panel_media:"Medien",panel_switches:"Schalter",panel_sensors:"Sensoren",panel_scenes:"Szenen & Skripte",panel_cameras:"Kameras",camera_live:"Livebild \xF6ffnen",through_camera:"Durch die Kamera schauen",through_blend:"\xDCberblendung",through_back:"Zur\xFCck zur Ansicht",camera_mount:"Montage",camera_mount_wall:"Wand (Blickrichtung = Drehung)",camera_mount_ceiling:"Decke (Dome, rundum)",camera_fov:"Sichtwinkel (\xB0)",camera_reach:"Reichweite (m)",camera_fov_short:"Winkel \xB0",camera_reach_short:"Reichweite m",camera_tilt:"Neigung nach unten (\xB0)",camera_tilt_short:"Neigung \xB0",camera_aim_hint:"Im Plan zeigt der Kegel, wohin die Kamera schaut. Der Griff an seiner Spitze dreht die Kamera und setzt die Reichweite.",state_recording:"Nimmt auf",state_streaming:"Streamt",panel_all_off:"Alle aus",panel_no_area:"Dieser Raum ist mit keinem Bereich verkn\xFCpft. Im Editor kannst du ihn verkn\xFCpfen.",panel_empty:"F\xFCr diesen Raum sind keine Ger\xE4te im Grundriss. Im Editor lassen sich Ger\xE4te platzieren oder mit \u2606 f\xFCrs Raumfenster ausw\xE4hlen.",close:"Schlie\xDFen",brightness:"Helligkeit",color_temp:"Farbtemperatur",color:"Farbe",position:"Position",cover_open:"Auf",cover_stop:"Stopp",cover_close:"Zu",target_temp:"Soll",current_temp:"Ist",temp_down:"K\xE4lter",temp_up:"W\xE4rmer",volume:"Lautst\xE4rke",play_pause:"Wiedergabe/Pause",previous:"Zur\xFCck",next:"Weiter",run:"Ausf\xFChren",details:"Details",hold_hint:"Antippen schaltet \xB7 lange dr\xFCcken \xF6ffnet Details",tool_opening:"T\xFCr & Fenster",tool_furniture:"M\xF6bel",qm_off:"Aus",find:"Suchen",find_placeholder:"Wo ist \u2026? Ger\xE4t oder Raum",find_none:"Nichts gefunden",swipe_off:"Aus",panel_pin:"Im Raumfenster zeigen",panel_unpin:"Nicht im Raumfenster zeigen",devices_panel_hint:"Das Raumfenster zeigt die Ger\xE4te im Grundriss. \u2606 nimmt ein Ger\xE4t zus\xE4tzlich ins Raumfenster auf, ohne es zu platzieren.",card_section_view:"Ansicht",card_size:"Gr\xF6\xDFe",card_size_fixed:"Feste H\xF6he",card_size_fill:"Bildschirm f\xFCllen",card_fill_hint:"Am besten in einer Dashboard-Ansicht vom Typ \u201EPanel (1 Karte)\u201C \u2013 dann nimmt die Karte den ganzen Platz ein.",card_controls:"Schalter in der Karte",card_floor_thumbs:"Etagen als Mini-Ansichten",card_floor_thumbs_hint:"Kleine Bilder der Etagen am Rand \u2013 antippen wechselt die Etage",card_floor_thumbs_hint_start:"Die gew\xE4hlte Etage ist dann die Start-Etage \u2013 mit den Bildern am Rand wechselt man zu den anderen",card_room_names:"Raumnamen anzeigen",card_section_kiosk:"Wandtablet (Kiosk)",card_section_features:"Funktionen",card_weather_plan:"wie im Plan eingestellt",card_pro_hint:"Bewegungsspur und Wetter sind Pro-Erweiterungen: ohne die passende Erweiterung bleiben die Schalter wirkungslos.",card_idle_return:"Zur\xFCck zur Startansicht nach",card_idle_off:"Nie",card_idle_min:"{n} min ohne Bedienung",card_idle_hint:"Nach der Wartezeit schlie\xDFt die Karte den Raum und zeigt wieder die Startansicht.",card_night:"Nachtdimmung",card_night_off:"Aus",card_night_sun:"Nach Sonnenstand",card_night_time:"Zeitraum",card_night_range:"Zeitraum (z. B. 22:00-06:00)",card_idle_orbit:"Kamerafahrt als Bildschirmschoner",card_idle_orbit_hint:"Nach der R\xFCckkehr dreht sich die Ansicht langsam, bis jemand das Tablet ber\xFChrt",card_alerts:"Warnungen anzeigen",card_alerts_hint:"Rauch, Gas, CO, Wasser, Alarmanlage und offene Fenster bei Regen: der Raum pulsiert, oben erscheint ein Hinweis",card_alert_jump:"Bei neuer Warnung zum Raum springen",card_alert_jump_hint:"Die Ansicht wechselt selbst zur Etage und zum Raum der Warnung",card_scenes:"Szenen-Kn\xF6pfe im Raum",card_scenes_hint:"Szenen und Skripte des Bereichs als Kn\xF6pfe unter der 3D-Ansicht, wenn ein Raum gew\xE4hlt ist",card_motion_trail:"Bewegungsspur",card_motion_trail_hint:"Wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit (Bewegungs-, Pr\xE4senz- und Kamerasensoren)",trail_short:"Spur",weather_short:"Wetter",weather_entity:"Wetter-Entit\xE4t",weather_effects:"Wetter-Effekte in 3D",weather_effect_rain:"Regen",weather_effect_snow:"Schnee",weather_effect_fog:"Nebel (graut die Szene ein)",weather_effect_clouds:"Wolken dunkeln Himmel und Sonne ab",weather_effect_lightning:"Blitze bei Gewitter",weather_effect_sky:"Sonne und Mond am Himmel",rain_warning:"Warnung: Fenster offen bei Regen",weather_entity_hint:"Die Wetter-Entit\xE4t liefert Regen, Schnee, Nebel und Wolken f\xFCr die 3D-Ansicht; \u201Eautomatisch\u201C nimmt die erste.",weather_hint:"Wetter drau\xDFen: Regen, Schnee, Nebel und Wolken aus der Wetter-Entit\xE4t, Sonne und Mond nach sun.sun",card_weather:"Wetter drau\xDFen",card_weather_hint:"Regen, Schnee, Nebel und Wolken aus der ersten Wetter-Entit\xE4t (weather_entity w\xE4hlt eine andere); auf Stufe Tablet nur die Bew\xF6lkung",trail_hint:"Bewegungsspur: wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit",alerts:"Warnungen",alert_smoke:"Rauch: {name}",alert_gas:"Gas: {name}",alert_co:"Kohlenmonoxid: {name}",alert_water:"Wasser: {name}",alert_alarm:"Alarm ausgel\xF6st",alert_alarm_pending:"Alarm wird ausgel\xF6st",alert_window_rain:"Fenster offen bei Regen: {name}",room_names_short:"Raumnamen",floor_stack_short_dim:"Abgedunkelt",floor_stack_short_stacked:"Gestapelt",floor_stack_short_single:"Einzeln",size_short_w:"B",size_short_d:"T",size_short_h:"H",import_error_not_json:"Die Datei ist kein JSON.",import_error_not_plan:"Die Datei ist kein Floorplan-3D-Plan.",export_name_template:"vorlage",export_name_backup:"sicherung",card_floor_stack:"Etagen darunter",floor_stack_dim:"Abgedunkelt",floor_stack_stacked:"Gestapelt (ganzes Haus bis hier)",floor_stack_single:"Ausgeblendet (nur diese Etage)",card_control_walls:"W\xE4nde hoch/Schnitt",card_control_floors:"Etagen auseinander",card_control_temperature:"Temperatur",card_control_humidity:"Feuchte",card_control_co2:"CO\u2082",card_controls_hint:"W\xE4nde hoch/Schnitt, Etagen auseinander und Temperatur, Feuchte, CO\u2082 zum Umschalten",card_fullscreen_button:"Vollbild-Taste",card_fullscreen_button_hint:"Blendet das Dashboard drumherum aus (z. B. am Wandtablet)",fullscreen:"Vollbild",fullscreen_exit:"Vollbild beenden",card_section_show:"Anzeigen",card_floor:"Etage",card_floor_house:"Ganzes Haus (Etage antippen zum \xD6ffnen)",card_height:"H\xF6he (Pixel)",card_walls:"W\xE4nde",card_quality_hint:"\u201ETablet\u201C ist die sparsamste Stufe \u2013 ideal f\xFCr Fire-Tablets und andere Wandtablets.",card_flows_switch:"Schalter in der Karte",card_flows_on:"Immer an",card_flows_off:"Immer aus",card_energy:"Energiewerte oben anzeigen",card_room_panel:"Raum-Details beim Antippen",card_room_panel_hint:"Lichter, Rolll\xE4den und Kameras des Raums in einem Seitenfenster",card_explode:"Etagen in der Hausansicht auseinanderziehen",card_stats:"Leistungsanzeige (Bilder pro Sekunde)",card_stats_hint:"Zum Pr\xFCfen, wie fl\xFCssig die Karte auf dem Ger\xE4t l\xE4uft",packs:"M\xF6bel-Packs",packs_hint:"Nur unterschriebene Packs des Herausgebers lassen sich importieren.",lib_badge_light:"Leuchte: l\xE4sst sich mit einem Licht verkn\xFCpfen und in 3D schalten",lib_badge_electric:"Elektrisch: l\xE4sst sich mit Entit\xE4t und Leistungssensor verkn\xFCpfen (schalten, Bild, Verbrauch)",lib_badge_hint:"M\xF6bel mit Symbol lassen sich mit Entit\xE4ten verkn\xFCpfen: Leuchten schalten, Bildschirme zeigen Bilder, Ger\xE4te ihren Verbrauch.",pack_error_wrong_instance:"Dieses Pack ist f\xFCr eine andere Home-Assistant-Installation signiert. Im Shop-Konto l\xE4sst es sich f\xFCr diese Installation neu laden.",license_title:"Shop-Verbindung",license_instance:"Installations-Kennung",license_copy:"Kopieren",license_copied:"Kennung kopiert",license_activate:"Aktivieren",license_activated:"Verbunden \u2013 die gekauften Packs stehen unten.",license_active:"Verbunden als {name} (Schl\xFCssel {key})",license_checked:"zuletzt gepr\xFCft {time}",license_refresh:"Jetzt pr\xFCfen",license_refreshed:"Gepr\xFCft.",license_remove:"Trennen",license_remove_confirm:"Shop-Verbindung trennen? Installierte Packs bleiben, nur Updates kommen nicht mehr von selbst.",license_installed:"installiert \xB7 v{release}",license_update_available:"Update auf v{release} verf\xFCgbar",license_not_installed:"noch nicht installiert",license_install:"Installieren",license_update:"Aktualisieren",license_none:"Noch keine Packs im Konto.",license_hint:"Den Lizenzschl\xFCssel findest du in der Bestellung und im Kundenkonto auf mastershort.de. Einmal eingetragen, erscheinen gekaufte Packs hier, werden f\xFCr diese Installation signiert und bekommen Updates von selbst (einmal t\xE4glich gepr\xFCft). Alles Installierte funktioniert auch ohne Verbindung.",license_shop:"Mehr Packs im Shop",license_error_invalid_key:"Diesen Schl\xFCssel kennt der Shop nicht. Er sieht so aus: NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"Dieser Schl\xFCssel ist schon mit der erlaubten Zahl von Installationen verbunden.",license_error_shop_unreachable:"Der Shop ist gerade nicht erreichbar. Installierte Packs funktionieren weiter.",license_error_not_owned:"Dieses Pack geh\xF6rt nicht zu diesem Konto.",license_error_no_key:"Zuerst den Lizenzschl\xFCssel eintragen.",license_error_wrong_instance:"Der Shop hat das Pack f\xFCr eine andere Installation signiert.",license_error_other:"Das hat nicht geklappt: {detail}",pack_import:"M\xF6bel-Packs importieren \u2026",pack_imported:"\u201E{name}\u201C von {publisher} importiert \u2013 {n} M\xF6bel",packs_imported_n:"{n} von {total} Packs importiert",pack_by:"von {publisher} \xB7 {n} M\xF6bel",pack_features:"von {publisher} \xB7 schaltet {n} Pro-Funktionen frei",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Kamera-Cockpit: durch die Kamera schauen und Bewegungsspur",pro_name_camera_cockpit:"Kamera-Cockpit",pro_name_weather:"Wetter drau\xDFen",pro_name_screens:"Bildschirme live",ext_tab:"Erweiterungen",offers_title:"Neu im Shop",offers_new:"NEU",offers_loyalty:"Dein Treuerabatt: {percent} % auf jedes weitere Pack und jede Pro-Erweiterung",offers_kind_pack:"M\xF6bel-Pack",offers_kind_pro:"Pro-Erweiterung",offers_kind_bundle:"Bundle",offers_dot:"Neues im Shop",pack_updated:"{name} wurde auf Version {release} aktualisiert.",pack_updated_added:"{name} wurde auf Version {release} aktualisiert: {n} neue M\xF6bel \u2013 schau in die Bibliothek!",ext_title:"Erweiterungen",ext_intro:"M\xF6bel-Packs und Pro-Erweiterungen f\xFCr NeonPlan 3D. Gekaufte Erweiterungen installierst du hier mit deinem Lizenzschl\xFCssel; sie bekommen Updates von selbst und funktionieren auch ohne Verbindung.",ext_shop:"Shop \xF6ffnen",ext_pro:"Pro-Erweiterungen",ext_active:"aktiv",ext_get:"Im Shop ansehen",ext_open:"Erweiterungen \xF6ffnen",manual:"Anleitung",manual_more:"Mehr erfahren",ext_teaser_title:"Mehr M\xF6bel und Pro-Funktionen",ext_teaser_text:"M\xF6bel-Packs, Shop-Verbindung und Pro-Erweiterungen findest du oben unter \u201EErweiterungen\u201C.",pro_feature_weather:"Wetter drau\xDFen: Regen, Schnee, Wolken, Sonne und Mond",pro_feature_screens:"Bildschirme live: App-Farbe und Cover des Media Players, Bildregeln, Kamera-Livebild auf Bildschirmen",pro_locked:"Diese Funktion ist eine Pro-Erweiterung. Nach dem Kauf erscheint sie unter Erweiterungen \u203A Shop-Verbindung und l\xE4sst sich dort installieren.",pro_shop:"Zum Shop",pack_licensed:"Lizenziert f\xFCr {name}",pack_remove:"Entfernen",pack_remove_confirm:"Pack \u201E{name}\u201C entfernen? M\xF6bel daraus bleiben als einfache K\xE4sten im Plan.",pack_missing_item:"M\xF6bel aus entferntem Pack",pack_error_bad_signature:"Das Pack wurde ver\xE4ndert oder seine Unterschrift ist ung\xFCltig.",pack_error_unknown_publisher:"Dieses Pack stammt nicht von einem bekannten Herausgeber.",pack_error_unsigned:"Das Pack ist nicht unterschrieben.",pack_error_not_a_pack:"Das ist keine M\xF6bel-Pack-Datei.",pack_error_invalid_content:"Das Pack enth\xE4lt ung\xFCltige M\xF6bel: {detail}",pack_error_too_large:"Die Datei ist zu gro\xDF.",pack_error_other:"Import fehlgeschlagen: {detail}",back_to_room:"Zur\xFCck zu {room}",back_to_floor:"Zur\xFCck zur Etage",hint_furniture:"Raum antippen, dann rechts ein M\xF6belst\xFCck w\xE4hlen \xB7 M\xF6bel ziehen, an den Ecken die Gr\xF6\xDFe \xE4ndern",furniture_into:"Neue M\xF6bel kommen in die Mitte von \u201E{room}\u201C.",furniture_pick_room:"Tipp: Erst einen Raum antippen \u2013 dann landen neue M\xF6bel in seiner Mitte.",flows:"Stromfluss",flows_hint:"Leuchtende Leitungen vom Z\xE4hler zu den Verbrauchern ein- oder ausblenden",flow_on:"an",flow_off:"aus",hint_opening:"Auf eine Wand tippen, um eine T\xFCr oder ein Fenster einzusetzen \u2013 die Art w\xE4hlst du danach rechts",preset_door:"T\xFCr",preset_door_double:"Doppelt\xFCr",preset_window:"Fenster",preset_window_double:"Fenster 2-fl\xFCgelig",preset_terrace:"Terrassent\xFCr",preset_terrace_double:"Terrassent\xFCr 2-fl\xFCgelig",preset_garage:"Garagentor",preset_front:"Haust\xFCr",opening_style:"Stil",style_auto:"Automatisch ({style})",style_interior:"Zimmert\xFCr",style_front:"Haust\xFCr",style_front_glass:"Haust\xFCr mit Glasausschnitt",style_sidelight:"Haust\xFCr mit Seitenteil",style_sidelights:"Haust\xFCr mit 2 Seitenteilen",style_glass:"Glast\xFCr",style_sliding:"Schiebet\xFCr",style_passage:"Durchbruch (ohne T\xFCr)",style_standard:"Standard",style_bars:"Mit Sprossen",flip_hinge:"Anschlag wechseln",flip_main_leaf:"Hauptfl\xFCgel wechseln",flip_hinge_hint:"Scharniere auf die andere Seite",flip_swing:"\xD6ffnungsrichtung umdrehen",flip_swing_hint:"Die T\xFCr schwenkt in den Raum oder zur anderen Seite",main_leaf:"Hauptfl\xFCgel (vom Raum aus)",contact_main:"Kontakt Hauptfl\xFCgel",contact_second:"Kontakt zweiter Fl\xFCgel",tool_outdoor:"Au\xDFen",tool_measure:"Nach Ma\xDF",hint_measure:"Startpunkt antippen, dann rechts die Wandl\xE4ngen mit Richtung eingeben",measure:"Raum nach Ma\xDF",measure_start:"Tippe im Plan auf den Startpunkt, z. B. eine Raumecke.",measure_from:"Start bei {x} / {z} m \u2013 antippen verschiebt den Start.",measure_length:"L\xE4nge der n\xE4chsten Wand (m)",measure_close:"Raum schlie\xDFen",measure_undo:"Letzte Wand weg",measure_gap:"L\xFCcke zum Start: {gap} m (wird beim Schlie\xDFen verbunden)",measure_hint:"Tipp: L\xE4nge eintippen und Pfeiltaste dr\xFCcken. Mit gemessenen Innenma\xDFen danach \u201EL\xFCcken schlie\xDFen\u201C.",rect_by_size:"Rechteck nach Ma\xDF",rect_add:"Rechteck anlegen",dir_up:"Nach oben",dir_down:"Nach unten",dir_left:"Nach links",dir_right:"Nach rechts",hint_outdoor:"Ziehen, um eine Au\xDFenfl\xE4che (Rasen, Terrasse, Pool \u2026) aufzuziehen",outdoor:"Au\xDFenfl\xE4che",outdoor_type:"Art",outdoor_hint:"Au\xDFenleuchten (Wegleuchte, Garten-Spot, Wandleuchte au\xDFen) beleuchten alle Au\xDFenfl\xE4chen und die Fassade.",out_lawn:"Rasen",out_terrace:"Terrasse",out_path:"Weg",out_driveway:"Einfahrt",out_pool:"Pool",out_bed:"Beet",out_hedge:"Hecke",out_fence:"Zaun",north:"Nordrichtung (\xB0 im Uhrzeigersinn von oben)",north_hint:"Die Nordrichtung braucht der Sonnenstand (Licht durch die Fenster).",roof:"Dach",roof_none:"Kein Dach",roof_flat:"Flachdach",roof_gable:"Satteldach",roof_custom:"Dachfl\xE4chen (frei)",roof_sections:"Dachfl\xE4chen",roof_sections_hint:"Jede Dachfl\xE4che deckt ein Rechteck des Hauses ab, etwa das Wohnhaus, die Scheune oder einen Anbau \u2013 jede mit eigener Form, Firstrichtung, Traufh\xF6he und Neigung. Eine neue Fl\xE4che ziehst du im Plan auf; antippen w\xE4hlt sie aus, ziehen verschiebt sie, die Ecken \xE4ndern die Gr\xF6\xDFe.",roof_sections_start:"Dachfl\xE4chen aus den R\xE4umen erzeugen",roof_sections_regen:"Neu aus den R\xE4umen erzeugen",roof_sections_off:"Zur\xFCck zu einem Dach",roof_regen_confirm:"Alle Dachfl\xE4chen durch einen neuen Vorschlag aus den R\xE4umen ersetzen?",roof_section:"Dachfl\xE4che",roof_section_hint:"H\xF6hen z\xE4hlen vom Boden. Eine Seite mit tieferer Traufe zieht weiter herunter (Abschleppdach); Pultd\xE4cher steigen von der ersten Seite an.",roof_shape_gable:"Sattel",roof_shape_hip:"Walm",roof_shape_pent:"Pult",roof_shape_flat:"Flach",roof_axis_x:"First \u2194",roof_axis_z:"First \u2195",roof_eave:"Traufe (m)",roof_pitch_short:"Neigung (\xB0)",roof_height:"H\xF6he (m)",roof_base:"Wandoberkante (m)",roof_ridge_height:"Firsth\xF6he",roof_side_top:"oben",roof_side_bottom:"unten",roof_side_left:"links",roof_side_right:"rechts",roof_swap:"Seiten tauschen",roof_open:"\xDCberdachung (Pfosten statt W\xE4nde, durchsichtig)",roof_open_short:"\xDCberdachung",roof_open_hint:"F\xFCr Terrassendach oder Carport: Statt W\xE4nden tragen Pfosten und Balken das Dach, die Fl\xE4che ist durchsichtig. Wo die \xDCberdachung an die Hauswand st\xF6\xDFt, liegt sie auf der Wand auf.",roof_swap_hint:"Dreht das Dach um: Die beiden Seiten tauschen Traufe und Neigung, ein Pultdach steigt in die andere Richtung.",roof_pitch:"Dachneigung (\xB0)",roof_overhang:"Dach\xFCberstand (m)",roof_ridge:"First",roof_ridge_long:"Entlang der langen Seite",roof_ridge_short:"Entlang der kurzen Seite (z. B. Reihenhaus)",device:"Ger\xE4t",lamp_mount:"Lampe",lamp_ceiling:"Deckenleuchte",lamp_floor:"Stehlampe",lamp_table:"Tischlampe",lamp_wall:"Wandleuchte",marker_height:"H\xF6he des Symbols (m)",height_auto:"H\xF6he automatisch",device_centre:"In Raummitte",lights_spread:"Deckenlampen gleichm\xE4\xDFig verteilen",devices_search:"Ger\xE4te suchen \u2026",devices_more:"+{n} weitere",devices_less:"weniger",panel_more:"Weitere Ger\xE4te des Bereichs ({n})",panel_less:"Weniger anzeigen",gaps_close:"L\xFCcken schlie\xDFen",gaps_hint:"R\xE4ume mit bis zu 60 cm Abstand an einer gemeinsamen Wand zusammenf\xFChren; der Abstand wird die Innenwandst\xE4rke.",gaps_none:"Keine L\xFCcken zwischen R\xE4umen gefunden.",gaps_closed:"{n} Stellen geschlossen.",gaps_closed_wall:"{n} Stellen geschlossen, Innenwand jetzt {t} m.",fps:"FPS",fps_title:"Leistungsanzeige (Bilder pro Sekunde)",hint_garage:"Auf eine Wand tippen, um ein Garagentor einzusetzen",opening_garage:"Garagentor",garage_hint:"Das Tor folgt einem Garagen-Cover (Position oder offen/zu) oder einem Garagentor-Kontakt aus dem Bereich des Raums.",door_hint:"Mit T\xFCrkontakt schwenkt das T\xFCrblatt auf, ohne Sensor steht es halb offen.",hint_door:"Auf eine Wand tippen, um eine T\xFCr einzusetzen",hint_window:"Auf eine Wand tippen, um ein Fenster einzusetzen",opening_door:"T\xFCr",opening_window:"Fenster",opening_type:"Art",opening_position:"Mitte ab Ecke (m)",sill:"Br\xFCstung (m)",opening_height:"H\xF6he (m)",hinge:"Anschlag (vom Raum aus)",hinge_left:"Links",hinge_right:"Rechts",cover_entity:"Rollladen",cover_position_entity:"Positions-Sensor (live)",cover_position_invert:"Sensor z\xE4hlt umgekehrt (0 = offen)",contact_entity:"Kontakt",sensor_kind:"Sensor-Art",sensor_kind_contact:"Fensterkontakt (offen/zu)",sensor_kind_handle:"Griff-Sensor (offen/gekippt/zu)",sensor_kind_contact_tilt:"Kontakt + Kipp-Sensor",handle_entity:"Griff-Sensor",handle_main:"Griff-Sensor Hauptfl\xFCgel",leaf_main:"Hauptfl\xFCgel",leaf_second:"Zweiter Fl\xFCgel",tilt_entity:"Kipp-Sensor",entity_auto:"Automatisch ({name})",entity_auto_none:"Automatisch (keiner gefunden)",entity_none:"Keiner",entity_search:"Tippen zum Suchen \u2026",opening_hint:"Sensor-Art: Fensterkontakt (meldet offen/zu), Griff-Sensor (meldet offen, gekippt und zu \u2013 z. B. Homematic-Fenstergriff) oder Kontakt + Kipp-Sensor (ein zweiter Sensor, der nur \u201Egekippt\u201C meldet). Automatisch nimmt Rolll\xE4den und Kontakte aus dem Bereich des Raums. Positions-Sensor: eine Entit\xE4t, die die Rollladen-Position auch w\xE4hrend der Fahrt meldet (z. B. Homematic \u201ELevel\u201C, 0\u2013100 % oder 0\u20131, offen = hoch) \u2013 dann f\xE4hrt der Rollladen in 3D live.",furniture:"M\xF6bel",furniture_add:"M\xF6bel hinzuf\xFCgen",furniture_search:"M\xF6bel suchen \u2026",furniture_type:"M\xF6belst\xFCck",rotation:"Drehung (\xB0)",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"H\xF6he (m)",furn_sofa:"Sofa",furn_armchair:"Sessel",furn_table:"Tisch",furn_chair:"Stuhl",furn_bed:"Bett",furn_nightstand:"Nachttisch",furn_wardrobe:"Schrank",furn_shelf:"Regal",furn_kitchen:"K\xFCchenzeile",furn_worktop:"Arbeitsplatte",furn_fridge:"K\xFChlschrank",furn_fridge_smart:"Smart-K\xFChlschrank (Side-by-Side)",furn_door_left:"T\xFCrsensor links (Gefrierseite)",furn_door_right:"T\xFCrsensor rechts (K\xFChlseite)",fridge_hint:"Meldet ein T\xFCrsensor \u201Eoffen\u201C, schwingt die T\xFCr in 3D auf. Der Bildschirm auf der rechten T\xFCr zeigt Bilder nach Regeln wie ein Fernseher \u2013 solange die T\xFCr zu ist.",furn_stove:"Herd",furn_sink:"Sp\xFCle",furn_bathtub:"Badewanne",furn_shower:"Dusche",furn_wc:"WC",furn_washbasin:"Waschtisch",furn_desk:"Schreibtisch",furn_tv_board:"TV-Board",furn_plant:"Pflanze",furn_rug:"Teppich",furn_stairs:"Treppe",furn_stairwell:"Boden\xF6ffnung",stairwell_hint:"Ein Loch im Boden dieser Etage, zum Beispiel \xFCber dem Treppenaufgang oder f\xFCr eine Galerie; von oben sieht man hindurch. Die \xD6ffnung muss ganz in einem Raum liegen; mehrere \xD6ffnungen d\xFCrfen sich \xFCberlappen (zum Beispiel f\xFCr eine L-Form). Eine Treppe auf der Etage darunter, die bis hier hinauf reicht, \xF6ffnet den Boden auch von selbst.",tool_hole:"Boden\xF6ffnung",tool_roof:"Dach",tool_energy:"Energie",tool_wall:"Wand",hint_wall:"Ziehen, um eine einzelne Wand zu zeichnen (Raumteiler, halbe Wand) \xB7 Umschalt h\xE4lt sie gerade \xB7 Alt ohne Fangen",free_wall:"Wand",wall_length:"L\xE4nge (m)",wall_thickness:"Wandst\xE4rke (m)",wall_height:"H\xF6he (m)",wall_height_full:"Volle Raumh\xF6he",wall_heights:"Wandh\xF6hen",wall_n:"Wand {a}\u2013{b}",wall_exterior_short:"Au\xDFenwand",room_wall_hint:"Eine niedrigere H\xF6he macht aus der Wand eine Br\xFCstung oder Theke. Teilen sich zwei R\xE4ume die Wand, gilt die niedrigere Einstellung. Fenster und T\xFCren darin enden an der Wandh\xF6he.",free_wall_hint:"Eine frei stehende Wand, zum Beispiel ein Raumteiler. Trifft sie auf eine Raumwand, wird die Ecke verschnitten. Die Endpunkte ziehst du an den Griffen, die ganze Wand verschiebst du an der Linie.",stairwell_outside:"Diese \xD6ffnung ragt \xFCber eine Raumgrenze und wird deshalb nicht ausgeschnitten. Ziehe sie ganz in einen Raum oder verkleinere sie.",hint_hole:"Ziehen, um eine Boden\xF6ffnung aufzuziehen (Treppenaufgang, Galerie)",hint_roof:"Dachfl\xE4che aufziehen \xB7 antippen w\xE4hlt aus \xB7 ziehen verschiebt \xB7 Ecken \xE4ndern die Gr\xF6\xDFe",hint_energy:"Solarfeld antippen w\xE4hlt aus \xB7 ziehen verschiebt, auch auf eine andere Dachfl\xE4che \xB7 neue Felder rechts mit + Solarfeld",furn_parking:"Stellplatz",furn_group_vehicles:"Stellpl\xE4tze",parking_entity:"Sensor \u201EAuto anwesend\u201C",parking_vehicle:"Fahrzeug",parking_vehicle_none:"Keins",parking_no_pack:"Kein Fahrzeug-Pack importiert \u2013 Fahrzeuge kommen aus dem Pack \u201EFahrzeuge\u201C (M\xF6bel \u2192 M\xF6bel-Pack importieren).",parking_scale:"Gr\xF6\xDFe (%)",parking_type_entity:"Fahrzeugtyp-Sensor (optional)",parking_types:"Zustand \u2192 Fahrzeug",parking_type_state:"Zustand (z. B. van)",parking_add_type:"+ Zuordnung",parking_hint:"Ohne Sensor steht das Fahrzeug immer da. Mit Sensor erscheint es, sobald der Sensor \u201Ean\u201C, \u201Ehome\u201C oder \u201Eanwesend\u201C meldet. Ein Fahrzeugtyp-Sensor (z. B. aus einer KI-Kameraauswertung) w\xE4hlt das Modell: Passt sein Zustand zu einer Zuordnung \u2013 auch als Wort im Text \u2013, wird dieses Fahrzeug gezeigt, sonst das Standard-Fahrzeug.",parking_too_tall:"Das Fahrzeug ({car} m) ist h\xF6her als der Raum ({room} m).",furn_lamp_ceiling:"Deckenleuchte",furn_lamp_downlight:"Einbauspot",furn_lamp_spot:"Aufbau-Spot",furn_lamp_panel:"LED-Panel",furn_lamp_uplight:"Deckenfluter",furn_lamp_bollard:"Wegleuchte",furn_lamp_garden:"Garten-Spot",furn_radiator:"Heizk\xF6rper",furn_robot_vacuum:"Saugroboter",furn_entity_vacuum:"Saugroboter",furn_robot_room:"Aktueller Raum (Sensor)",robot_hint:"Saugt der Roboter in Home Assistant, f\xE4hrt er in 3D in Bahnen durch den Raum, den er meldet (Sensor \u201EAktueller Raum\u201C, zugeordnet \xFCber den Raum- oder Bereichsnamen), sonst durch den Raum seiner Station. Die Fahrspur ist simuliert \u2013 Home Assistant kennt meist nicht die genaue Position. Zur\xFCck f\xE4hrt er zur Station.",furn_lamp_pendant:"Pendelleuchte",furn_lamp_floor:"Stehlampe",furn_lamp_table:"Tischlampe",furn_lamp_wall:"Wandleuchte",furn_led_strip:"LED-Streifen",furn_group_lights:"Leuchten",furn_entity_light:"Licht oder Schalter",furn_entity_climate:"Heizung (Thermostat)",lamp_hint:"Antippen in 3D schaltet die Leuchte, lange dr\xFCcken \xF6ffnet das Schnellmen\xFC. Auch Schalter (z. B. ein Relais f\xFCrs Deckenlicht) sind m\xF6glich \u2013 die Leuchte strahlt dann, solange er an ist. Tischlampen stehen automatisch auf dem M\xF6bel darunter.",lamp_hint_pendant:"H\xF6he = Abh\xE4ngung unter der Decke. Antippen in 3D schaltet, lange dr\xFCcken \xF6ffnet die Details.",theme:"Look",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Tag",furnish:"Einrichten",split_3d:"3D daneben",mount_height:"H\xF6he \xFCber Boden (m)",side_open:"Seitenleiste \xF6ffnen",side_close:"Schlie\xDFen",side_details:"Details zur Auswahl",side_pin:"Anheften",side_pinned:"Angeheftet",side_pin_hint:"Angeheftet bleibt die Seitenleiste immer offen; sonst klappt sie neben der 3D-Ansicht zu, solange nichts ausgew\xE4hlt ist",split_3d_hint:"Live-3D neben dem Plan: M\xF6bel und Ger\xE4te dort ziehen und drehen \u2013 mit R\xFCckg\xE4ngig, gespeichert wird mit dem Plan",size_w:"Breite (m)",size_d:"Tiefe (m)",size_h:"H\xF6he (m)",furnish_hint:"M\xF6bel, Leuchten und Ger\xE4te mit dem Finger ziehen \xB7 M\xF6bel rasten an W\xE4nden ein \xB7 antippen zum Drehen, f\xFCr H\xF6he und Montage",done:"Fertig",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Feuchte",heat_short_co2:"CO\u2082",heat_temperature:"Temperatur",heat_humidity:"Luftfeuchtigkeit",heat_co2:"CO\u2082",heat_none_found:"Keine passenden Sensoren in den Bereichen der R\xE4ume.",markers:"Symbole",markers_none:"Keine",markers_important:"Wichtige",markers_all:"Alle",furn_stool:"Hocker",furn_coffee_table:"Couchtisch",furn_tv_wall:"Fernseher (Wand)",furn_sideboard:"Sideboard",furn_table_round:"Runder Tisch",furn_bench:"Sitzbank",furn_corner_bench:"Eckbank",furn_bar_stool:"Barhocker",furn_kitchen_wall:"Oberschrank",furn_kitchen_tall:"Hochschrank mit Backofen",furn_island:"Kochinsel",furn_dishwasher:"Sp\xFClmaschine",furn_bunk_bed:"Etagenbett",furn_dresser:"Kommode",furn_washer:"Waschmaschine",furn_dryer:"Trockner",furn_office_chair:"B\xFCrostuhl",furn_tall_cabinet:"Hochschrank",furn_coat_rack:"Garderobe",furn_group_living:"Wohnen",furn_group_dining:"Essen",furn_group_kitchen:"K\xFCche",furn_group_sleeping:"Schlafen",furn_group_bath:"Bad & Hauswirtschaft",furn_group_work:"Arbeiten & Sonstiges",furn_group_energy:"Energie & Solar",energy_devices:"Ger\xE4te",solar_pro_title:"Solar & Energie Pro",solar_pro_soon:"bald verf\xFCgbar",solar_pro_1:"Module, die bei Sonne leben und mit der Leistung leuchten",solar_pro_2:"Feine Stromfluss-Leitungen durchs Haus: woher der Strom gerade kommt und wohin er flie\xDFt",solar_pro_3:"Ein Hologramm aus Glas mit Leistung, Tageskurve, Ertrag heute und Autarkie",solar_pro_4:"Werte je Strang auf dem Dach, Akku, Wallbox und Netz auf einen Blick",solar_pro_free:"Alles, was du hier einrichtest (Felder, Str\xE4nge, Ger\xE4te, Sensoren), bleibt kostenlos und wird von der Pro-Erweiterung direkt genutzt.",wallbox_charging:"l\xE4dt",wallbox_plugged:"angesteckt",furn_soc:"Ladestand (%)",furn_wallbox_status:"Status (l\xE4dt, angesteckt)",energy_only_note:"\u26A1 Energie: Hier lassen sich nur Solarfelder und Energieger\xE4te verschieben, R\xE4ume und M\xF6bel sind gesperrt.",roof_only_note:"\u{1F3E0} Dach: Hier lassen sich nur Dachfl\xE4chen und Dachfenster verschieben, R\xE4ume und M\xF6bel sind gesperrt.",energy_devices_hint:"Wechselrichter, Stromspeicher und Wallbox werden hier angelegt: auf der oben gew\xE4hlten Etage, im Grundriss verschiebbar. Mit Leistungssensor zeigen sie ihre Watt; beim Strang w\xE4hlst du den Wechselrichter.",solar_fields:"Solarfelder",solar_hint:"Module aufs Dach legen: Sie liegen in der Neigung der Dachfl\xE4che, auf einem Flachdach stehen sie aufgest\xE4ndert. Im Grundriss l\xE4sst sich ein Feld mit der Maus verschieben.",solar_no_roof:"F\xFCr Solarfelder braucht das Haus ein Dach: unter Einstellungen ein Sattel- oder Flachdach, oder Dachabschnitte hier im Dach-Werkzeug.",solar_face_gone:"Dachfl\xE4che fehlt",solar_summary:"{n} Module \xB7 {kwp} kWp",solar_add:"Solarfeld",solar_field:"Solarfeld",solar_face:"Dachfl\xE4che",solar_rows:"Reihen",solar_cols:"Module pro Reihe",solar_portrait:"Hochformat",solar_landscape:"Querformat",solar_u:"Abstand vom Rand (m)",solar_v:"Abstand von der Traufe (m)",solar_tilt:"Neigung der Aufst\xE4nderung (\xB0)",solar_flip:"In die andere Richtung neigen",solar_partial:"nur {n} von {total} passen auf die Fl\xE4che",solar_form_hint:"Module, die \xFCber die Dachfl\xE4che hinausragen w\xFCrden, fallen weg. \u201EFl\xE4che f\xFCllen\u201C legt so viele Module aufs Dach, wie passen. kWp gerechnet mit 400 W je Modul.",solar_fit:"Fl\xE4che f\xFCllen",roof_windows:"Dachfenster",roof_window:"Dachfenster",roof_windows_hint:"Dachfenster liegen in der Dachfl\xE4che, mit Rollladen und Kontakt wie normale Fenster. Im Grundriss lassen sie sich verschieben, auch auf eine andere Dachfl\xE4che.",roof_window_tilt:"Kippkontakt",roof_window_hint:"Offen klappt der Fl\xFCgel oben angeschlagen nach au\xDFen, gekippt ein St\xFCck; der Rollladen f\xE4hrt von oben \xFCber die Scheibe.",solar_ground:"Frei aufgest\xE4ndert (Garten, Garagendach \u2026)",solar_add_ground:"Frei aufgest\xE4ndert",solar_base:"H\xF6he der Aufstellfl\xE4che (m, 0 = Boden)",solar_add_wall:"An der Wand",solar_wall:"Wand",solar_v_wall:"H\xF6he \xFCber dem Boden (m)",solar_tilt_wall:"Neigung von der Wand (\xB0, 90 = Vordach)",solar_flip_wall:"Unten abstehend statt oben",solar_rotation:"Drehung (\xB0)",solar_name:"Name",solar_name_hint:"z. B. Strang 1 S\xFCd",solar_module_w:"Modulbreite (m)",solar_module_h:"Modulh\xF6he (m)",solar_string:"Strang",solar_strings:"Str\xE4nge",solar_string_none:"Kein Strang",solar_string_new:"Neuer Strang",solar_string_n:"Strang {n}",solar_string_name:"Name des Strangs",solar_string_entity:"PV-Leistung des Strangs",solar_string_inverter:"Wechselrichter",solar_string_inverter_none:"Kein Wechselrichter gew\xE4hlt",solar_string_inverter_missing:"Noch kein Wechselrichter im Plan (unten bei Ger\xE4te anlegen)",solar_string_hint:"Felder im selben Strang geh\xF6ren zusammen, auch auf verschiedenen D\xE4chern (z. B. 5 Module auf dem Haus und 5 auf der Garage). Sensor und Wechselrichter gelten f\xFCr den ganzen Strang.",solar_string_sum:"{fields} Felder \xB7 {n} Module \xB7 {kwp} kWp",solar_face_size:"Dachfl\xE4che {w} \xD7 {h} m (entlang der Traufe \xD7 die Schr\xE4ge hoch)",solar_cols_hint:"Eine Zahl f\xFCr gleich lange Reihen, oder eine Liste f\xFCr Reihen eigener L\xE4nge: \u201E4, 4, 3\u201C (von der Traufe aus).",solar_align_left:"Links",solar_align_center:"Mitte",solar_align_right:"Rechts",solar_look_black:"Full Black",solar_look_blue:"Blau",solar_pick:"Module einzeln an/aus",solar_pick_all:"Alle wieder an",solar_pick_hint:"Tippe im Grundriss auf ein Modul, um es wegzunehmen oder wieder dazuzunehmen. Weggenommene sind gestrichelt.",solar_entity:"PV-Leistung dieses Feldes (z. B. sein Strang)",solar_main:"Hauptdach",solar_section:"Abschnitt {n}",solar_flat:"Flachdach",compass_n:"Nord",compass_ne:"Nordost",compass_e:"Ost",compass_se:"S\xFCdost",compass_s:"S\xFCd",compass_sw:"S\xFCdwest",compass_w:"West",compass_nw:"Nordwest",furn_inverter:"Wechselrichter",furn_home_battery:"Stromspeicher",furn_wallbox:"Wallbox",furn_entity:"Ger\xE4t (Schalter, Steckdose \u2026)",furn_entity_tv:"Fernseher (Media-Player oder Steckdose)",fix:"Fixieren",unfix:"L\xF6sen",fix_hint:"Fixiert: l\xE4sst sich nicht mehr versehentlich verschieben (Taste L, Rechtsklick oder langes Dr\xFCcken)",fixed_drag_hint:"\u{1F512} Fixiert \u2013 zum Verschieben erst l\xF6sen (Schloss im Formular, Rechtsklick oder Taste L)",fixed_delete_confirm:"Dieses Element ist fixiert. Trotzdem l\xF6schen?",lock_plan:"\u{1F512} Grundriss",lock_plan_hint:"Grundriss sperren: R\xE4ume, W\xE4nde, T\xFCren, Fenster und Au\xDFenfl\xE4chen lassen sich nicht mehr versehentlich verschieben. M\xF6bel und Ger\xE4te bleiben frei.",ctx_rotate:"Drehen 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} weitere \u2013 Suche eingrenzen",climate:"Raumklima",climate_temperature:"Temperatur",climate_humidity:"Luftfeuchte",climate_co2:"CO\u2082",climate_hint:"Diese Sensoren gelten f\xFCr die Heatmap und das Raumfenster. \u201EAutomatisch\u201C nimmt die Sensoren des Bereichs und die im Raum platzierten, aber keine Ger\xE4tetemperaturen (3D-Drucker, W\xE4rmepumpe, Vorlauf \u2026).",plan_locked:"Grundriss gesperrt",plan_lock:"Grundriss sperren",plan_unlock:"Grundriss entsperren",opening_mark:"Markieren in 3D",opening_mark_open:"Wenn offen",opening_mark_closed:"Wenn geschlossen (z. B. WC)",opening_mark_hint:"Ein markiertes Fenster oder eine markierte T\xFCr leuchtet warm. \u201EWenn geschlossen\u201C braucht einen Kontakt; ohne Sensor wird nichts markiert.",marker_show:"Symbol in 3D",marker_show_hint:"Automatisch folgt dem Schalter Keine / Wichtige / Alle in der 3D-Ansicht. Immer zeigen und Ausblenden gelten unabh\xE4ngig davon (au\xDFer bei Keine).",marker_show_auto:"Automatisch",marker_show_always:"Immer zeigen",marker_show_no_power:"Ohne Watt",marker_show_never:"Ausblenden",furn_power:"Leistungssensor (W)",furn_links_hint:"Mit Leistungssensor zeigt das M\xF6bel seine Watt und bekommt eine Energie-Leitung.",screen_pictures:"Bilder nach Zustand",screen_pictures_hint:"Verglichen wird der Zustand oder ein Attribut der Entit\xE4t (z. B. app_name eines Fernsehers). Der Wert passt, wenn er gleich ist oder im Text vorkommt (\u201Eyoutube\u201C passt zu \u201Ecom.google.android.youtube.tv\u201C); \u201E*\u201C = immer. Die erste passende Regel gewinnt. Bilder werden auf 512 px verkleinert gespeichert; alternativ eine Bild-URL oder eine Kamera \u2013 deren Livebild wird alle 5 Sekunden erneuert, solange es gezeigt wird. Ohne passende Regel zeigt der Bildschirm den Media Player.",picture_state:"ist oder enth\xE4lt \u2026 (z. B. netflix)",picture_state_of:"Zustand",picture_attribute:"Zustand oder Attribut vergleichen",picture_pick:"Bild w\xE4hlen \u2026",picture_change:"Bild \xE4ndern \u2026",picture_url:"oder Bild-URL",picture_add_value:"+ Wert",picture_reuse:"Vorhandenes Bild verwenden",picture_camera:"oder Kamera (Livebild) \u2026",picture_camera_none:"Keine Kamera",screen_bg:"Bildschirm hinter dem Bild",screen_bg_black:"Dunkel",screen_bg_white:"Wei\xDF",picture_add_entity:"+ Weitere Entit\xE4t",picture_current:"aktuell: {value}",picture_matches:"\u2713 passt gerade \u2013 dieses Bild wird gezeigt",furn_links_hint_tv:"Der Bildschirm leuchtet, solange der Fernseher an ist, in der Farbe der App (Netflix, YouTube \u2026); das Schild zeigt App oder Titel.",stairs_hint:"Die Treppe steigt nach hinten an (weg von der markierten Vorderkante) und \xF6ffnet die Decke der Etage dar\xFCber.",floor_lights:"{n} Licht an",floor_open:"{n} offen",floor_persons:"{n} Pers.",energy_consumption:"Verbrauch",energy_grid_import:"Netzbezug",energy_grid_export:"Einspeisung",energy_solar:"Solar",energy_battery:"Akku",energy_tariff:"Tarif",energy:"Energie",energy_meter:"Z\xE4hlerplatz",energy_meter_set:"Z\xE4hlerplatz setzen",energy_meter_remove:"Z\xE4hlerplatz entfernen",energy_meter_hint:"Tippe im Plan auf die Stelle des Z\xE4hlers bzw. Hausanschlusses.",energy_grid:"Netz (W, + = Bezug)",energy_solar_sensor:"Solar-Erzeugung (W)",energy_battery_sensor:"Akku-Leistung (W, + = Entladen)",energy_battery_soc:"Akku-Ladestand (%)",energy_tariff_sensor:"Tarif (z. B. \u20AC/kWh)",energy_invert:"Vorzeichen umkehren",energy_hint:"Verbraucher sind platzierte Ger\xE4te mit Leistungssensor (W) \u2013 der Sensor selbst oder einer vom selben Ger\xE4t.",tool_meter:"Z\xE4hler",hint_meter:"Auf die Stelle des Z\xE4hlers tippen",presence:"Anwesenheit",presence_hint:"Raumsensor je Person (z. B. ESPresense, Bermuda): sein Zustand nennt den Raum oder Bereich.",presence_sensor:"Raumsensor",no_persons:"In Home Assistant gibt es keine Personen."},Lr={view:"3D",editor:"Editor",all_floors:"All floors",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",save_failed_detail:"Saving failed: {error}. Your changes are kept in this browser.",needs_restart:"A new version of NeonPlan 3D is installed, but Home Assistant still runs {version}. Please restart Home Assistant \u2013 until then saving may fail.",needs_restart_old:"A new version of NeonPlan 3D is installed, but Home Assistant still runs an older one. Please restart Home Assistant \u2013 until then saving fails.",draft_found:"Unsaved changes from {time} found.",draft_restore:"Restore and save",draft_discard:"Discard",walls_auto:"Tall walls",walls_cut:"Cut",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",add_floor:"Add floor",floor_from_ha:"Floors from Home Assistant:",floor_empty:"Empty floor",level:"Level {n}",ha_floor:"Floor in Home Assistant",no_ha_floor:"\u2013 none \u2013",area_rooms:"Add {n} rooms from HA areas",area_rooms_hint:"Adds a room (4 \xD7 3 m) for each area of this floor \u2013 then drag it into place and adjust the corners",floor_name:"Name",elevation:"Elevation (m)",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",default_floor:"Ground floor",new_floor:"Floor {n}",tool_select:"Select",tool_rect:"Rectangle",tool_polygon:"Free shape",undo:"Undo",redo:"Redo",fit:"Show all",room:"Room",rooms:"Rooms",room_name:"Name",area:"Area",no_area:"No area",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",delete_point:"Delete corner",duplicate:"Duplicate",delete:"Delete",new_room:"Room {n}",settings:"Settings",pendant_shape:"Shape",pendant_shade:"Shade",pendant_globe:"Globe",pendant_cone:"Cone",pendant_drum:"Drum",pkg_open:"Furnish \u2026",pkg_hint:"Furniture goes against the room's walls; lamps link to the area's lights. Adjust single items afterwards \u2013 Ctrl+Z takes it all back.",pkg_done:"{n} items placed \u2013 Ctrl+Z takes it back.",pkg_kitchen_row:"Kitchen row",pkg_kitchen_row_desc:"Row on the back wall with fridge, oven, sink, dishwasher and stove, wall cabinet, dining table with pendant",pkg_kitchen_l:"L-shaped kitchen",pkg_kitchen_l_desc:"Rows at the back and left, kitchen island with bar stools",pkg_bath:"Bathroom",pkg_bath_desc:"Washbasin, WC, bathtub, washing machine, downlight",pkg_bedroom:"Bedroom",pkg_bedroom_desc:"Double bed with two nightstands, wardrobe, chest of drawers, ceiling light",pkg_living:"Living room",pkg_living_desc:"TV board, sofa, coffee table, rug, armchair, shelf, floor lamp, plant",pkg_dining:"Dining room",pkg_dining_desc:"Table with four chairs, sideboard, pendant",pkg_office:"Office",pkg_office_desc:"Desk with office chair, two shelves, ceiling light",pkg_kids:"Kids' room",pkg_kids_desc:"Single bed, desk, shelf, rug",pkg_hall:"Hall",pkg_hall_desc:"Coat rack, two downlights",spots_place:"Place spots",spots_type:"Lamp",spots_cols:"Columns (left\u2013right)",spots_rows:"Rows (front\u2013back)",spots_add:"Place {n} lamps",spots_placed:"{n} lamps placed.",spots_hint:"All lamps follow the chosen light (e.g. spots on one dimmer). Afterwards each can be moved and linked to another light like any furniture.",cancel:"Cancel",backup:"Backup",backup_history:"Restore points",backup_none:"None yet. While editing, a restore point is kept at most every 10 minutes.",backup_summary:"{rooms} rooms, {furniture} items",backup_restore:"Restore",backup_restore_confirm:"Restore the state of {time}? The current state is kept as a restore point.",backup_restored:"Restored.",backup_file:"File",backup_export:"Export",backup_export_share:"Share as template",backup_export_share_hint:"Without areas, devices, sensors and images \u2013 for passing on to others.",backup_import:"Import \u2026",backup_import_confirm:"Replace the whole plan with the file? The current state is kept as a restore point.",backup_import_error:"The file is no NeonPlan 3D plan ({error}).",backup_imported:"Imported.",backup_hint:"Background images are not part of the file.",backup_full:"Full backup",backup_full_export:"Back up everything (plan, pictures, packs)",backup_full_import:"Restore a full backup \u2026",backup_full_hint:"One file with the plan, every background and screen picture and the installed packs. On restore every pack is checked again; the licence key is not included.",backup_full_confirm:"Replace the plan, the pictures and the packs with the backup? The current state stays as a restore point.",backup_full_not_backup:"This is not a full NeonPlan 3D backup.",backup_full_restored:"Backup restored: {packs} packs, {pictures} pictures.",backup_full_skipped:"Skipped (not verifiable or bound to another installation): {packs}.",export_name_full:"full",device_confirm:"Ask before switching",device_confirm_hint:"A tap in 3D, the quick menu and the room panel ask first. A double tap on the room leaves this device out.",cover_confirm_hint:"Open, close and positions ask first in the quick menu and the room panel, and a swipe on the marker no longer moves the blind (it turns the view instead). Stop never asks.",confirm_switch:"Really switch {name}?",split_handle_hint:"Drag: width of the plan and the 3D view",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 arrow keys nudge \xB7 Del deletes \xB7 Ctrl+Z",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_empty:"Add a floor first.",area_m2:"{a} m\xB2",overlap_warning:"Rooms overlap \u2013 walls there are incomplete.",read_only:"Only administrators can edit the floor plan.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"NeonPlan 3D",card_description:"Your home in 3D (neon).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} fps (slowest frame {ms} ms)",stats_idle:"At rest (0 fps)",stats_busy_camera:"camera",stats_busy_floors:"floors",stats_busy_openings:"doors/windows",stats_busy_flash:"flash",stats_busy_roof:"roof",stats_busy_flow:"power flow",stats_busy_effect:"colour effect",stats_busy_robot:"robot",stats_busy_orbit:"camera turn",stats_busy_tint:"room tint",stats_low:"tablet level, pixel ratio {r}",stats_full:"full level, pixel ratio {r}",floors_apart:"Apart",floors_stacked:"Stacked",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",devices_none_area:"Link the room to an area and its devices appear here.",devices_none:"The area has no suitable devices.",devices_place_all_n:"Place all {n} \u2026",devices_place_all_confirm:"Put {n} devices into the room at once? (Ctrl+Z or \u201CUndo\u201D takes them all back in one step.)",devices_src_area:"This area",devices_src_other:"Other areas",devices_src_none:"No area",devices_place:"Place",devices_remove:"Remove",devices_hint:"Placed devices appear in 3D. Drag them in the plan to move them.",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",panel_cameras:"Cameras",camera_live:"Open live view",through_camera:"Look through the camera",through_blend:"Blend",through_back:"Back to the view",camera_mount:"Mount",camera_mount_wall:"Wall (looks along its rotation)",camera_mount_ceiling:"Ceiling (dome, all round)",camera_fov:"Field of view (\xB0)",camera_reach:"Reach (m)",camera_fov_short:"Angle \xB0",camera_reach_short:"Reach m",camera_tilt:"Tilt down (\xB0)",camera_tilt_short:"Tilt \xB0",camera_aim_hint:"In the plan the wedge shows where the camera looks. The handle at its tip turns the camera and sets its reach.",state_recording:"Recording",state_streaming:"Streaming",panel_all_off:"All off",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"No devices of this room are in the plan. In the editor, place devices or pick them for the room panel with \u2606.",close:"Close",brightness:"Brightness",color_temp:"Colour temperature",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details",tool_opening:"Doors & windows",tool_furniture:"Furniture",qm_off:"Off",find:"Search",find_placeholder:"Where is \u2026? Device or room",find_none:"Nothing found",swipe_off:"Off",panel_pin:"Show in the room panel",panel_unpin:"Don't show in the room panel",devices_panel_hint:"The room panel shows the devices in the plan. \u2606 adds a device to the room panel without placing it.",card_section_view:"View",card_size:"Size",card_size_fixed:"Fixed height",card_size_fill:"Fill the screen",card_fill_hint:"Works best in a dashboard view of the type \u201CPanel (single card)\u201D \u2013 the card then takes all the space.",card_controls:"Switches in the card",card_floor_thumbs:"Floors as miniatures",card_floor_thumbs_hint:"Small pictures of the floors at the side \u2013 tap one to switch",card_floor_thumbs_hint_start:"The chosen floor is then where the card starts \u2013 the pictures at the side switch to the others",card_room_names:"Show room names",card_section_kiosk:"Wall tablet (kiosk)",card_section_features:"Features",card_weather_plan:"as set in the plan",card_pro_hint:"Motion trail and weather are Pro add-ons: without the matching add-on these switches have no effect.",card_idle_return:"Back to the start view after",card_idle_off:"Never",card_idle_min:"{n} min without a touch",card_idle_hint:"After the wait the card closes the room and shows the start view again.",card_night:"Night dimming",card_night_off:"Off",card_night_sun:"By the sun",card_night_time:"Time range",card_night_range:"Time range (e.g. 22:00-06:00)",card_idle_orbit:"Camera turn as screensaver",card_idle_orbit_hint:"After the return the view turns slowly until someone touches the tablet",card_alerts:"Show warnings",card_alerts_hint:"Smoke, gas, CO, water, alarm panel and windows open in the rain: the room pulses, a note appears at the top",card_alert_jump:"Jump to the room of a new warning",card_alert_jump_hint:"The view switches to the floor and room of the warning by itself",card_scenes:"Scene buttons in the room",card_scenes_hint:"Scenes and scripts of the area as buttons under the 3D view while a room is selected",card_motion_trail:"Motion trail",card_motion_trail_hint:"Where motion was reported in the last 30 minutes, with times (motion, presence and camera sensors)",trail_short:"Trail",weather_short:"Weather",weather_entity:"Weather entity",weather_effects:"Weather effects in 3D",rain_warning:"Warning: window open while it rains",weather_effect_rain:"Rain",weather_effect_snow:"Snow",weather_effect_fog:"Fog (greys the scene)",weather_effect_clouds:"Clouds dim the sky and the sun",weather_effect_lightning:"Lightning in storms",weather_effect_sky:"Sun and moon in the sky",weather_entity_hint:"The weather entity provides rain, snow, fog and clouds for the 3D view; automatic takes the first one.",weather_hint:"Weather outside: rain, snow, fog and clouds from the weather entity, sun and moon from sun.sun",card_weather:"Weather outside",card_weather_hint:"Rain, snow, fog and clouds from the first weather entity (weather_entity picks another); only the clouds on the tablet level",trail_hint:"Motion trail: where motion was reported in the last 30 minutes, with times",alerts:"Warnings",alert_smoke:"Smoke: {name}",alert_gas:"Gas: {name}",alert_co:"Carbon monoxide: {name}",alert_water:"Water: {name}",alert_alarm:"Alarm triggered",alert_alarm_pending:"Alarm pending",alert_window_rain:"Window open in the rain: {name}",room_names_short:"Room names",floor_stack_short_dim:"Dimmed",floor_stack_short_stacked:"Stacked",floor_stack_short_single:"Alone",size_short_w:"W",size_short_d:"D",size_short_h:"H",import_error_not_json:"The file is no JSON.",import_error_not_plan:"The file is no NeonPlan 3D plan.",export_name_template:"template",export_name_backup:"backup",card_floor_stack:"Floors below",floor_stack_dim:"Dimmed",floor_stack_stacked:"Stacked (the house up to here)",floor_stack_single:"Hidden (only this floor)",card_control_walls:"Tall walls/cut",card_control_floors:"Floors apart",card_control_temperature:"Temperature",card_control_humidity:"Humidity",card_control_co2:"CO\u2082",card_controls_hint:"Tall walls/cut, floors apart and temperature, humidity, CO\u2082 to switch",card_fullscreen_button:"Full screen button",card_fullscreen_button_hint:"Hides the dashboard around the card (e.g. on a wall tablet)",fullscreen:"Full screen",fullscreen_exit:"Exit full screen",card_section_show:"Show",card_floor:"Floor",card_floor_house:"Whole house (tap a floor to open it)",card_height:"Height (pixels)",card_walls:"Walls",card_quality_hint:"\u201CTablet\u201D is the lightest setting \u2013 ideal for Fire tablets and other wall tablets.",card_flows_switch:"Switch in the card",card_flows_on:"Always on",card_flows_off:"Always off",card_energy:"Show energy values at the top",card_room_panel:"Room details on tap",card_room_panel_hint:"The room's lights, blinds and cameras in a side panel",card_explode:"Pull floors apart in the house view",card_stats:"Performance display (frames per second)",card_stats_hint:"To check how smoothly the card runs on the device",packs:"Furniture packs",packs_hint:"Only packs signed by the publisher can be imported.",lib_badge_light:"Lamp: links to a light and switches in 3D",lib_badge_electric:"Electric: links to an entity and a power sensor (switching, pictures, consumption)",lib_badge_hint:"Items with a symbol link to entities: lamps switch, screens show pictures, appliances show their consumption.",pack_error_wrong_instance:"This pack is signed for another Home Assistant installation. The shop account can deliver it for this one.",license_title:"Shop connection",license_instance:"Installation id",license_copy:"Copy",license_copied:"Id copied",license_activate:"Activate",license_activated:"Connected \u2013 your packs are listed below.",license_active:"Connected as {name} (key {key})",license_checked:"last checked {time}",license_refresh:"Check now",license_refreshed:"Checked.",license_remove:"Disconnect",license_remove_confirm:"Disconnect from the shop? Installed packs stay, only updates stop coming by themselves.",license_installed:"installed \xB7 v{release}",license_update_available:"update to v{release} available",license_not_installed:"not installed yet",license_install:"Install",license_update:"Update",license_none:"No packs in the account yet.",license_hint:"The licence key is in your order and in your account at mastershort.de. Entered once, bought packs appear here, are signed for this installation and update by themselves (checked once a day). Everything installed keeps working without the connection.",license_shop:"More packs in the shop",license_error_invalid_key:"The shop does not know this key. It looks like NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"This key is already bound to the allowed number of installations.",license_error_shop_unreachable:"The shop cannot be reached right now. Installed packs keep working.",license_error_not_owned:"This pack is not in this account.",license_error_no_key:"Enter the licence key first.",license_error_wrong_instance:"The shop signed the pack for another installation.",license_error_other:"That did not work: {detail}",pack_import:"Import furniture packs \u2026",pack_imported:"Imported \u201C{name}\u201D by {publisher} \u2013 {n} items",packs_imported_n:"{n} of {total} packs imported",pack_by:"by {publisher} \xB7 {n} items",pack_features:"by {publisher} \xB7 unlocks {n} Pro features",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Camera cockpit: look through the camera and motion trail",pro_name_camera_cockpit:"Camera cockpit",pro_name_weather:"Weather outside",pro_name_screens:"Live screens",ext_tab:"Extensions",offers_title:"New in the shop",offers_new:"NEW",offers_loyalty:"Your loyalty discount: {percent} % on every further pack and Pro add-on",offers_kind_pack:"Furniture pack",offers_kind_pro:"Pro add-on",offers_kind_bundle:"Bundle",offers_dot:"New in the shop",pack_updated:"{name} was updated to release {release}.",pack_updated_added:"{name} was updated to release {release}: {n} new items \u2013 have a look in the library!",ext_title:"Extensions",ext_intro:"Furniture packs and Pro add-ons for NeonPlan 3D. Install what you bought here with your licence key; it updates by itself and works without the connection too.",ext_shop:"Open the shop",ext_pro:"Pro add-ons",ext_active:"active",ext_get:"See in the shop",ext_open:"Open extensions",manual:"Manual",manual_more:"Learn more",ext_teaser_title:"More furniture and Pro features",ext_teaser_text:'Furniture packs, the shop connection and Pro add-ons are under "Extensions" at the top.',pro_feature_weather:"Weather outside: rain, snow, clouds, sun and moon",pro_feature_screens:"Live screens: the media player's app colour and artwork, picture rules, camera live pictures on screens",pro_locked:"This feature is a Pro add-on. After the purchase it appears under Extensions \u203A Shop connection and installs from there.",pro_shop:"To the shop",pack_licensed:"Licensed to {name}",pack_remove:"Remove",pack_remove_confirm:"Remove the pack \u201C{name}\u201D? Its furniture stays in the plan as plain boxes.",pack_missing_item:"Furniture of a removed pack",pack_error_bad_signature:"The pack was changed or its signature is invalid.",pack_error_unknown_publisher:"This pack is not from a known publisher.",pack_error_unsigned:"The pack is not signed.",pack_error_not_a_pack:"This is not a furniture pack file.",pack_error_invalid_content:"The pack contains invalid furniture: {detail}",pack_error_too_large:"The file is too large.",pack_error_other:"Import failed: {detail}",back_to_room:"Back to {room}",back_to_floor:"Back to the floor",hint_furniture:"Tap a room, then pick an item on the right \xB7 drag items, resize them by their corners",furniture_into:"New items go into the middle of \u201C{room}\u201D.",furniture_pick_room:"Tip: tap a room first \u2013 new items then land in its middle.",flows:"Power flow",flows_hint:"Show or hide glowing lines from the meter to the consumers",flow_on:"on",flow_off:"off",hint_opening:"Tap a wall to add a door or window \u2013 choose its kind on the right afterwards",preset_door:"Door",preset_door_double:"Double door",preset_window:"Window",preset_window_double:"Double window",preset_terrace:"Terrace door",preset_terrace_double:"French doors",preset_garage:"Garage door",preset_front:"Front door",opening_style:"Style",style_auto:"Automatic ({style})",style_interior:"Room door",style_front:"Front door",style_front_glass:"Front door with glass",style_sidelight:"Front door with sidelight",style_sidelights:"Front door with two sidelights",style_glass:"Glass door",style_sliding:"Sliding door",style_passage:"Opening (no door)",style_standard:"Standard",style_bars:"With glazing bars",flip_hinge:"Swap hinge side",flip_main_leaf:"Swap main leaf",flip_hinge_hint:"Hinges to the other side",flip_swing:"Reverse opening direction",flip_swing_hint:"The door swings into the room or to the other side",main_leaf:"Main leaf (seen from the room)",contact_main:"Contact main leaf",contact_second:"Contact second leaf",tool_outdoor:"Outdoor",tool_measure:"By measure",hint_measure:"Tap the starting point, then type the wall lengths with their direction on the right",measure:"Room by measure",measure_start:"Tap the starting point in the plan, e.g. a room corner.",measure_from:"Start at {x} / {z} m \u2013 tapping moves the start.",measure_length:"Length of the next wall (m)",measure_close:"Close room",measure_undo:"Remove last wall",measure_gap:"Gap to the start: {gap} m (joined when closing)",measure_hint:"Tip: type a length and press an arrow key. With measured inside dimensions, use \u201CClose gaps\u201D afterwards.",rect_by_size:"Rectangle by size",rect_add:"Add rectangle",dir_up:"Up",dir_down:"Down",dir_left:"Left",dir_right:"Right",hint_outdoor:"Drag to draw an outdoor area (lawn, terrace, pool \u2026)",outdoor:"Outdoor area",outdoor_type:"Type",outdoor_hint:"Outdoor lights (path light, garden spot, outdoor wall light) light all outdoor areas and the facade.",out_lawn:"Lawn",out_terrace:"Terrace",out_path:"Path",out_driveway:"Driveway",out_pool:"Pool",out_bed:"Flower bed",out_hedge:"Hedge",out_fence:"Fence",north:"North (\xB0 clockwise from up)",north_hint:"North is needed for the sun (light through the windows).",roof:"Roof",roof_none:"No roof",roof_flat:"Flat roof",roof_gable:"Gable roof",roof_custom:"Roof sections (custom)",roof_sections:"Roof sections",roof_sections_hint:"Each roof section covers a rectangle of the house, e.g. the house, the barn or an extension \u2013 each with its own shape, ridge direction, eave height and pitch. Drag in the plan to draw a new one; tap selects it, dragging moves it, the corners resize it.",roof_sections_start:"Create roof sections from the rooms",roof_sections_regen:"Create again from the rooms",roof_sections_off:"Back to one roof",roof_regen_confirm:"Replace all roof sections with a new proposal from the rooms?",roof_section:"Roof section",roof_section_hint:"Heights count from the ground. A side with a lower eave reaches further down (catslide); pent roofs rise from the first side.",roof_shape_gable:"Gable",roof_shape_hip:"Hip",roof_shape_pent:"Pent",roof_shape_flat:"Flat",roof_axis_x:"Ridge \u2194",roof_axis_z:"Ridge \u2195",roof_eave:"Eave (m)",roof_pitch_short:"Pitch (\xB0)",roof_height:"Height (m)",roof_base:"Top of walls (m)",roof_ridge_height:"Ridge height",roof_side_top:"top",roof_side_bottom:"bottom",roof_side_left:"left",roof_side_right:"right",roof_swap:"Swap sides",roof_open:"Canopy (posts instead of walls, see-through)",roof_open_short:"Canopy",roof_open_hint:"For a terrace roof or a carport: posts and beams carry the roof instead of walls, and it is see-through. Where the canopy meets the house wall, it rests on the wall.",roof_swap_hint:"Turns the roof round: the two sides swap eave and pitch, a pent roof rises the other way.",roof_pitch:"Roof pitch (\xB0)",roof_overhang:"Roof overhang (m)",roof_ridge:"Ridge",roof_ridge_long:"Along the long side",roof_ridge_short:"Along the short side (e.g. terraced house)",device:"Device",lamp_mount:"Lamp",lamp_ceiling:"Ceiling light",lamp_floor:"Floor lamp",lamp_table:"Table lamp",lamp_wall:"Wall light",marker_height:"Marker height (m)",height_auto:"Automatic height",device_centre:"To room centre",lights_spread:"Spread ceiling lights evenly",devices_search:"Search devices \u2026",devices_more:"+{n} more",devices_less:"less",panel_more:"More devices of the area ({n})",panel_less:"Show less",gaps_close:"Close gaps",gaps_hint:"Join rooms up to 60 cm apart at one shared wall; the gap becomes the interior wall thickness.",gaps_none:"No gaps between rooms found.",gaps_closed:"{n} places closed.",gaps_closed_wall:"{n} places closed, interior wall now {t} m.",fps:"FPS",fps_title:"Performance display (frames per second)",hint_garage:"Tap a wall to add a garage door",opening_garage:"Garage door",garage_hint:"The door follows a garage cover (position or open/closed) or a garage door contact of the room's area.",door_hint:"With a door contact the leaf swings open; without a sensor it stands half open.",hint_door:"Tap a wall to add a door",hint_window:"Tap a wall to add a window",opening_door:"Door",opening_window:"Window",opening_type:"Type",opening_position:"Centre from corner (m)",sill:"Sill height (m)",opening_height:"Height (m)",hinge:"Hinge (seen from the room)",hinge_left:"Left",hinge_right:"Right",cover_entity:"Blind",cover_position_entity:"Position sensor (live)",cover_position_invert:"Sensor counts the other way round (0 = open)",contact_entity:"Contact",sensor_kind:"Sensor type",sensor_kind_contact:"Window contact (open/closed)",sensor_kind_handle:"Handle sensor (open/tilted/closed)",sensor_kind_contact_tilt:"Contact + tilt sensor",handle_entity:"Handle sensor",handle_main:"Handle sensor main leaf",leaf_main:"Main leaf",leaf_second:"Second leaf",tilt_entity:"Tilt sensor",entity_auto:"Automatic ({name})",entity_auto_none:"Automatic (none found)",entity_none:"None",entity_search:"Type to search \u2026",opening_hint:`Sensor type: window contact (reports open/closed), handle sensor (reports open, tilted and closed \u2013 e.g. a Homematic window handle) or contact + tilt sensor (a second sensor that only reports tilted). Automatic uses the blinds and contacts of the room's area. Position sensor: an entity reporting the blind's position while it moves (e.g. a Homematic "level", 0\u2013100 % or 0\u20131, open = high) \u2013 the blind then moves live in 3D.`,furniture:"Furniture",furniture_add:"Add furniture",furniture_search:"Search furniture \u2026",furniture_type:"Item",rotation:"Rotation (\xB0)",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Height (m)",furn_sofa:"Sofa",furn_armchair:"Armchair",furn_table:"Table",furn_chair:"Chair",furn_bed:"Bed",furn_nightstand:"Nightstand",furn_wardrobe:"Wardrobe",furn_shelf:"Shelf",furn_kitchen:"Kitchen unit",furn_worktop:"Worktop",furn_fridge:"Fridge",furn_fridge_smart:"Smart fridge (side by side)",furn_door_left:"Door sensor left (freezer side)",furn_door_right:"Door sensor right (fridge side)",fridge_hint:"While a door sensor reports open, the door swings open in 3D. The screen on the right door shows pictures by rules like a TV \u2013 while that door is closed.",furn_stove:"Stove",furn_sink:"Sink",furn_bathtub:"Bathtub",furn_shower:"Shower",furn_wc:"WC",furn_washbasin:"Washbasin",furn_desk:"Desk",furn_tv_board:"TV board",furn_plant:"Plant",furn_rug:"Rug",furn_stairs:"Stairs",furn_stairwell:"Floor opening",stairwell_hint:"A hole in this floor, for example above the staircase or for a gallery; from above you look through it. The opening must lie within one room; several openings may overlap (for an L shape, for example). Stairs on the floor below that reach up here open the floor by themselves as well.",tool_hole:"Floor opening",tool_roof:"Roof",tool_energy:"Energy",tool_wall:"Wall",hint_wall:"Drag to draw a single wall (partition, half wall) \xB7 Shift keeps it straight \xB7 Alt without snapping",free_wall:"Wall",wall_length:"Length (m)",wall_thickness:"Wall thickness (m)",wall_height:"Height (m)",wall_height_full:"Full room height",wall_heights:"Wall heights",wall_n:"Wall {a}\u2013{b}",wall_exterior_short:"exterior wall",room_wall_hint:"A lower height turns the wall into a parapet or a counter. If two rooms share the wall, the lower setting applies. Windows and doors in it end at the wall height.",free_wall_hint:"A free-standing wall, e.g. a partition. Where it meets a room wall, the corner is mitred. Drag the handles to move its ends, drag the line to move the whole wall.",stairwell_outside:"This opening reaches across a room boundary and is therefore not cut. Move it fully into one room or make it smaller.",hint_hole:"Drag to draw a floor opening (stairwell, gallery)",hint_roof:"Drag to draw a roof section \xB7 tap selects \xB7 drag moves \xB7 corners resize",hint_energy:"Tap a solar field to select it \xB7 drag to move it, also onto another roof face \xB7 new fields with + Solar field on the right",furn_parking:"Parking spot",furn_group_vehicles:"Parking",parking_entity:'Sensor "car present"',parking_vehicle:"Vehicle",parking_vehicle_none:"None",parking_no_pack:'No vehicle pack imported \u2013 vehicles come from the "Vehicles" pack (Furniture \u2192 Import furniture pack).',parking_scale:"Size (%)",parking_type_entity:"Vehicle type sensor (optional)",parking_types:"State \u2192 vehicle",parking_type_state:"State (e.g. van)",parking_add_type:"+ Mapping",parking_hint:'Without a sensor the vehicle always stands there. With one it appears as soon as the sensor reports "on", "home" or "present". A vehicle type sensor (e.g. from an AI camera analysis) picks the model: when its state matches a mapping \u2013 also as a word in the text \u2013 that vehicle is shown, otherwise the default one.',parking_too_tall:"The vehicle ({car} m) is taller than the room ({room} m).",furn_lamp_ceiling:"Ceiling light",furn_lamp_downlight:"Downlight",furn_lamp_spot:"Surface spot",furn_lamp_panel:"LED panel",furn_lamp_uplight:"Floor uplight",furn_lamp_bollard:"Path light",furn_lamp_garden:"Garden spot",furn_radiator:"Radiator",furn_robot_vacuum:"Robot vacuum",furn_entity_vacuum:"Robot vacuum",furn_robot_room:"Current room (sensor)",robot_hint:"While the robot cleans in Home Assistant it drives lanes in 3D through the room it reports (a \u201Ccurrent room\u201D sensor, matched by room or area name), else through the room of its dock. The track is simulated \u2013 Home Assistant usually does not know the exact position. It drives back to the dock when it returns.",furn_lamp_pendant:"Pendant light",furn_lamp_floor:"Floor lamp",furn_lamp_table:"Table lamp",furn_lamp_wall:"Wall light",furn_led_strip:"LED strip",furn_group_lights:"Lights",furn_entity_light:"Light or switch",furn_entity_climate:"Heating (thermostat)",lamp_hint:"Tap the lamp in 3D to switch it, long press for the quick menu. Switches work too (e.g. a relay for the ceiling light) \u2013 the lamp shines while it is on. Table lamps stand on the furniture below them.",lamp_hint_pendant:"Height = drop below the ceiling. Tap in 3D to switch, long press for details.",theme:"Look",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Day",furnish:"Furnish",split_3d:"3D beside",mount_height:"Height above the floor (m)",side_open:"Open the sidebar",side_close:"Close",side_details:"Details of the selection",side_pin:"Pin",side_pinned:"Pinned",side_pin_hint:"Pinned, the sidebar stays open; otherwise it folds away beside the 3D view while nothing is selected",split_3d_hint:"Live 3D next to the plan: drag and turn furniture and devices there \u2013 with undo, saved with the plan",size_w:"Width (m)",size_d:"Depth (m)",size_h:"Height (m)",furnish_hint:"Drag furniture, lamps and devices \xB7 furniture snaps to walls \xB7 tap one to turn it, set its height and mount",done:"Done",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humidity",heat_short_co2:"CO\u2082",heat_temperature:"Temperature",heat_humidity:"Humidity",heat_co2:"CO\u2082",heat_none_found:"No matching sensors in the rooms' areas.",markers:"Markers",markers_none:"None",markers_important:"Important",markers_all:"All",furn_stool:"Stool",furn_coffee_table:"Coffee table",furn_tv_wall:"TV (wall)",furn_sideboard:"Sideboard",furn_table_round:"Round table",furn_bench:"Bench",furn_corner_bench:"Corner bench",furn_bar_stool:"Bar stool",furn_kitchen_wall:"Wall cabinet",furn_kitchen_tall:"Tall unit with oven",furn_island:"Kitchen island",furn_dishwasher:"Dishwasher",furn_bunk_bed:"Bunk bed",furn_dresser:"Chest of drawers",furn_washer:"Washing machine",furn_dryer:"Dryer",furn_office_chair:"Office chair",furn_tall_cabinet:"Tall cabinet",furn_coat_rack:"Coat rack",furn_group_living:"Living",furn_group_dining:"Dining",furn_group_energy:"Energy & solar",energy_devices:"Devices",solar_pro_title:"Solar & Energy Pro",solar_pro_soon:"coming soon",solar_pro_1:"Modules that come alive in the sun and glow with their output",solar_pro_2:"Fine power-flow lines through the house: where the power comes from and where it goes",solar_pro_3:"A glass hologram with power, day curve, today's yield and self-sufficiency",solar_pro_4:"Values per string on the roof, battery, wallbox and grid at a glance",solar_pro_free:"Everything you set up here (fields, strings, devices, sensors) stays free and is used by the Pro add-on directly.",wallbox_charging:"charging",wallbox_plugged:"plugged in",furn_soc:"State of charge (%)",furn_wallbox_status:"Status (charging, plugged in)",energy_only_note:"\u26A1 Energy: only solar fields and energy devices can be moved here; rooms and furniture are locked.",roof_only_note:"\u{1F3E0} Roof: only roof sections and roof windows can be moved here; rooms and furniture are locked.",energy_devices_hint:"Inverters, home batteries and wallboxes are added here: on the floor chosen above, movable in the plan. With a power sensor they show their watts; a string picks its inverter.",solar_fields:"Solar fields",solar_hint:"Put modules on the roof: they lie in the slope of the roof face; on a flat roof they stand on frames. Drag a field in the plan to move it.",solar_no_roof:"Solar fields need a roof: a gable or flat roof under Settings, or roof sections here in the Roof tool.",solar_face_gone:"roof face missing",solar_summary:"{n} modules \xB7 {kwp} kWp",solar_add:"Solar field",solar_field:"Solar field",solar_face:"Roof face",solar_rows:"Rows",solar_cols:"Modules per row",solar_portrait:"Portrait",solar_landscape:"Landscape",solar_u:"Distance from the edge (m)",solar_v:"Distance from the eave (m)",solar_tilt:"Tilt of the frames (\xB0)",solar_flip:"Lean the other way",solar_partial:"only {n} of {total} fit on the face",solar_form_hint:"Modules that would reach beyond the roof face are left out. \u201CFill face\u201D puts as many modules on the roof as fit. kWp counted with 400 W per module.",solar_fit:"Fill face",roof_windows:"Roof windows",roof_window:"Roof window",roof_windows_hint:"Roof windows lie in the roof face, with a blind and contacts like windows. Drag them in the plan, also onto another roof face.",roof_window_tilt:"Tilt contact",roof_window_hint:"Open, the sash swings out, hinged at the top; tilted, a little; the blind comes down over the glass from the top.",solar_ground:"Free-standing (garden, garage roof \u2026)",solar_add_ground:"Free-standing",solar_base:"Height of the surface (m, 0 = ground)",solar_add_wall:"On a wall",solar_wall:"Wall",solar_v_wall:"Height above the floor (m)",solar_tilt_wall:"Tilt away from the wall (\xB0, 90 = canopy)",solar_flip_wall:"Standing off at the bottom instead of the top",solar_rotation:"Rotation (\xB0)",solar_name:"Name",solar_name_hint:"e.g. string 1 south",solar_module_w:"Module width (m)",solar_module_h:"Module height (m)",solar_string:"String",solar_strings:"Strings",solar_string_none:"No string",solar_string_new:"New string",solar_string_n:"String {n}",solar_string_name:"Name of the string",solar_string_entity:"PV power of the string",solar_string_inverter:"Inverter",solar_string_inverter_none:"No inverter chosen",solar_string_inverter_missing:"No inverter in the plan yet (add one below under Devices)",solar_string_hint:"Fields in the same string belong together, also on different roofs (e.g. 5 modules on the house and 5 on the garage). Sensor and inverter count for the whole string.",solar_string_sum:"{fields} fields \xB7 {n} modules \xB7 {kwp} kWp",solar_face_size:"Roof face {w} \xD7 {h} m (along the eave \xD7 up the slope)",solar_cols_hint:"One number for rows of equal length, or a list for rows of their own: \u201C4, 4, 3\u201D (from the eave).",solar_align_left:"Left",solar_align_center:"Centre",solar_align_right:"Right",solar_look_black:"Full black",solar_look_blue:"Blue",solar_pick:"Modules on/off one by one",solar_pick_all:"All on again",solar_pick_hint:"Tap a module in the plan to take it away or put it back. Removed ones are dashed.",solar_entity:"PV power of this field (e.g. its string)",solar_main:"Main roof",solar_section:"Section {n}",solar_flat:"flat roof",compass_n:"north",compass_ne:"north-east",compass_e:"east",compass_se:"south-east",compass_s:"south",compass_sw:"south-west",compass_w:"west",compass_nw:"north-west",furn_inverter:"Solar inverter",furn_home_battery:"Home battery",furn_wallbox:"Wallbox",furn_group_kitchen:"Kitchen",furn_group_sleeping:"Sleeping",furn_group_bath:"Bath & laundry",furn_group_work:"Work & other",furn_entity:"Device (switch, plug \u2026)",furn_entity_tv:"TV (media player or smart plug)",fix:"Fix",unfix:"Release",fix_hint:"Fixed: cannot be moved by accident any more (key L, right-click or long press)",fixed_drag_hint:"\u{1F512} Fixed \u2013 release it first to move it (lock in the form, right-click or key L)",fixed_delete_confirm:"This item is fixed. Delete it anyway?",lock_plan:"\u{1F512} Floor plan",lock_plan_hint:"Lock the floor plan: rooms, walls, doors, windows and outdoor areas cannot be moved by accident. Furniture and devices stay free.",ctx_rotate:"Turn 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} more \u2013 narrow the search",climate:"Room climate",climate_temperature:"Temperature",climate_humidity:"Humidity",climate_co2:"CO\u2082",climate_hint:"These sensors count for the heatmap and the room panel. \u201CAutomatic\u201D takes the sensors of the area and the ones placed in the room, but no device temperatures (3D printer, heat pump, flow \u2026).",plan_locked:"Floor plan locked",plan_lock:"Lock floor plan",plan_unlock:"Unlock floor plan",opening_mark:"Highlight in 3D",opening_mark_open:"When open",opening_mark_closed:"When closed (e.g. WC)",opening_mark_hint:"A highlighted window or door glows warm. \u201CWhen closed\u201D needs a contact; without a sensor nothing is highlighted.",marker_show:"Marker in 3D",marker_show_hint:"Automatic follows the None / Important / All switch of the 3D view. Always show and Hide apply regardless (except with None).",marker_show_auto:"Automatic",marker_show_always:"Always show",marker_show_no_power:"Without watts",marker_show_never:"Hide",furn_power:"Power sensor (W)",furn_links_hint:"With a power sensor the item shows its watts and gets an energy cable.",screen_pictures:"Pictures by state",screen_pictures_hint:`The state or an attribute of the entity is compared (e.g. a TV's app_name). A value matches when it is equal or contained in the text ("youtube" matches "com.google.android.youtube.tv"); "*" = always. The first matching rule wins. Pictures are stored scaled to 512 px; a picture URL or a camera works too \u2013 a camera's live picture is refreshed every 5 seconds while shown. Without a matching rule the screen shows the media player.`,picture_state:"is or contains \u2026 (e.g. netflix)",picture_state_of:"State",picture_attribute:"Compare the state or an attribute",picture_pick:"Choose picture \u2026",picture_change:"Change picture \u2026",picture_url:"or picture URL",picture_add_value:"+ Value",picture_reuse:"Use a stored picture",picture_camera:"or a camera (live picture) \u2026",picture_camera_none:"No camera",screen_bg:"Screen behind the picture",screen_bg_black:"Dark",screen_bg_white:"White",picture_add_entity:"+ Another entity",picture_current:"now: {value}",picture_matches:"\u2713 matches now \u2013 this picture shows",furn_links_hint_tv:"The screen glows while the TV is on, in the colour of the app (Netflix, YouTube \u2026); the label shows the app or title.",stairs_hint:"The stair rises towards the back (away from the marked front edge) and opens the ceiling of the floor above.",floor_lights:"{n} lights on",floor_open:"{n} open",floor_persons:"{n} people",energy_consumption:"Consumption",energy_grid_import:"Grid import",energy_grid_export:"Export",energy_solar:"Solar",energy_battery:"Battery",energy_tariff:"Tariff",energy:"Energy",energy_meter:"Meter",energy_meter_set:"Place meter",energy_meter_remove:"Remove meter",energy_meter_hint:"Tap the spot of the meter or house connection in the plan.",energy_grid:"Grid (W, + = import)",energy_solar_sensor:"Solar production (W)",energy_battery_sensor:"Battery power (W, + = discharging)",energy_battery_soc:"Battery charge (%)",energy_tariff_sensor:"Tariff (e.g. \u20AC/kWh)",energy_invert:"Invert sign",energy_hint:"Consumers are placed devices with a power sensor (W) \u2013 the sensor itself or one of the same device.",tool_meter:"Meter",hint_meter:"Tap the spot of the meter",presence:"Presence",presence_hint:"Room sensor per person (e.g. ESPresense, Bermuda): its state names the room or area.",presence_sensor:"Room sensor",no_persons:"There are no people in Home Assistant."};function ke(o,e,t={}){let n=o?.language??navigator.language,r=(n.startsWith("de")?Ys:n.startsWith("fr")?Tr:Lr)[e]??Lr[e]??e;for(let[s,a]of Object.entries(t))r=r.replace(`{${s}}`,String(a));return r}function D(o,e,t=2){return e.toLocaleString(o?.language??void 0,{maximumFractionDigits:t})}var Js={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function nt(o){return Js[o]}var Oe=ee`
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
`,zt=ee`
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
`;var In=40,Tn=class extends Y{static properties={options:{attribute:!1},fixed:{attribute:!1},value:{attribute:!1},disabled:{type:Boolean},placeholder:{attribute:!1},_query:{state:!0},_open:{state:!0},_cursor:{state:!0}};blurTimer;constructor(){super(),this.options=[],this.fixed=[],this.value=null,this.disabled=!1,this.placeholder="",this._query="",this._open=!1,this._cursor=0}get current(){return[...this.fixed,...this.options].find(e=>e.id===this.value)}get hits(){let e=this._query.trim().toLowerCase(),t=e.split(/\s+/).filter(Boolean),n=s=>{let a=`${s.label} ${s.id}`.toLowerCase();return t.every(l=>a.includes(l))},i=this.fixed.filter(s=>!e||n(s)),r=e?this.options.filter(n):this.options;return[...i,...r.slice(0,In)]}choose(e){this.value=e,this._query="",this._open=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0,composed:!0}))}onKey(e){let t=this.hits;e.key==="ArrowDown"?(this._open=!0,this._cursor=Math.min(t.length-1,this._cursor+1),e.preventDefault()):e.key==="ArrowUp"?(this._cursor=Math.max(0,this._cursor-1),e.preventDefault()):e.key==="Enter"?(this._open&&t[this._cursor]&&this.choose(t[this._cursor].id),e.preventDefault()):e.key==="Escape"&&(this._open=!1,this._query="")}render(){let e=this.current,t=this._open?this.hits:[];return m`<div class="wrap">
      <input
        type="text"
        role="combobox"
        aria-expanded=${this._open}
        ?disabled=${this.disabled}
        placeholder=${e?e.label:this.placeholder}
        .value=${this._open?this._query:e?.label??""}
        @focus=${()=>{clearTimeout(this.blurTimer),this._open=!0,this._query="",this._cursor=0}}
        @blur=${()=>{this.blurTimer=setTimeout(()=>this._open=!1,150)}}
        @input=${n=>{this._query=n.target.value,this._cursor=0,this._open=!0}}
        @keydown=${this.onKey}
      />
      ${this._open?m`<ul class="list" role="listbox">
            ${t.length?y:m`<li class="empty">–</li>`}
            ${t.map((n,i)=>m`<li
                role="option"
                aria-selected=${n.id===this.value}
                class="${i===this._cursor?"cursor":""} ${n.id===this.value?"chosen":""}"
                @mousedown=${r=>r.preventDefault()}
                @click=${()=>this.choose(n.id)}
              >
                <span>${n.label}</span>${n.id.includes(".")?m`<small>${n.id}</small>`:y}
              </li>`)}
            ${this._query&&this.options.length>In&&t.length>=In?m`<li class="empty">…</li>`:y}
          </ul>`:y}
    </div>`}static styles=[Oe,ee`
      :host {
        display: block;
        position: relative;
      }
      input {
        width: 100%;
        box-sizing: border-box;
        font: inherit;
        color: var(--fp3d-text);
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        padding: 8px 10px;
      }
      input::placeholder {
        color: var(--fp3d-text);
        opacity: 0.9;
      }
      input:focus::placeholder {
        color: var(--fp3d-muted);
      }
      input:focus {
        outline: 2px solid var(--fp3d-accent);
        outline-offset: -1px;
      }
      .list {
        position: absolute;
        left: 0;
        right: 0;
        top: calc(100% + 4px);
        z-index: 20;
        margin: 0;
        padding: 4px;
        list-style: none;
        max-height: 280px;
        overflow-y: auto;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        box-shadow: var(--fp3d-shadow);
      }
      li {
        display: flex;
        flex-direction: column;
        gap: 1px;
        padding: 6px 8px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 13.5px;
      }
      li small {
        color: var(--fp3d-muted);
        font-size: 11px;
      }
      li.cursor,
      li:hover {
        background: color-mix(in srgb, var(--fp3d-accent) 18%, transparent);
      }
      li.chosen {
        color: var(--fp3d-accent);
      }
      li.empty {
        color: var(--fp3d-muted);
        cursor: default;
      }
    `]};customElements.get("fp3d-entity-picker")||customElements.define("fp3d-entity-picker",Tn);var Qs=new URL(import.meta.url),eo=new URL("./neonplan3d-3d.js?v=66a6580c3503",Qs).href,Dr;function Or(){return Dr??=import(eo),Dr}function it(o,e){if(!Gt(e))return ke(o,`furn_${e}`);let t=j(e);return t?Me(t,o?.language??navigator.language):ke(o,"pack_missing_item")}var Ln=class extends Y{static properties={hass:{attribute:!1},packs:{attribute:!1},_packMsg:{state:!0},_license:{state:!0},_licenseKey:{state:!0},_licenseBusy:{state:!0},_licenseMsg:{state:!0}};licenseLoading=!1;freshUpdates=null;constructor(){super(),this._packMsg=null,this._license=null,this._licenseKey="",this._licenseBusy=null,this._licenseMsg=null}get isAdmin(){return this.hass?.user?.is_admin??!1}t(e,t){return ke(this.hass,e,t)}render(){let e=yn(this.packs??[]);return m`<div class="fp3d-ext">
      <header class="fp3d-ext-head">
        <h2>${this.t("ext_title")}</h2>
        <p class="fp3d-sub">${this.t("ext_intro")}</p>
        <div class="fp3d-ext-actions">
          <a class="fp3d-btn fp3d-primary" href=${qe(this.hass?.language)} target="_blank" rel="noopener">${this.t("ext_shop")}</a>
          <a class="fp3d-btn" href=${Xe(this.hass?.language,"extensions")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a>
        </div>
      </header>
      ${this.renderUpdates()} ${this.renderOffers()} ${this.renderShop()}
      <section class="fp3d-ext-card">
        <h3>${this.t("ext_pro")}</h3>
        <div class="fp3d-ext-pro">
          ${vn.map(t=>m`<div class="fp3d-ext-feature ${e.has(t)?"fp3d-ext-on":""}">
              <b>${e.has(t)?"\u2713":"\u{1F512}"} ${this.t(`pro_name_${t}`)}</b>
              <span class="fp3d-sub">${this.t(`pro_feature_${t}`)}</span>
              <span class="fp3d-ext-links">
                ${e.has(t)?m`<span class="fp3d-ext-state">${this.t("ext_active")}</span>`:m`<a class="fp3d-ext-link" href=${qe(this.hass?.language)} target="_blank" rel="noopener">${this.t("ext_get")}</a>`}
                <a class="fp3d-ext-link" href=${Xe(this.hass?.language,t)} target="_blank" rel="noopener">${this.t("manual_more")}</a>
              </span>
            </div>`)}
        </div>
      </section>
      ${this.renderPacks()}
    </div>`}async loadLicense(){if(!(!this.hass||this.licenseLoading)){this.licenseLoading=!0;try{this._license=await Kt(this.hass)}catch{this._license=null}finally{this.licenseLoading=!1}}}async shopCall(e,t,n){this._licenseBusy=e,this._licenseMsg=null;try{this._license=await t(),n&&(this._licenseMsg={ok:!0,text:n})}catch(i){let{code:r,message:s}=i??{},a=`license_error_${r}`,l=this.t(a);this._licenseMsg={ok:!1,text:l===a?this.t("license_error_other",{detail:s??String(i)}):l}}finally{this._licenseBusy=null}}async installFromShop(e){if(!this.hass)return;let t=this.hass;await this.shopCall(e.id,async()=>{let n=await _i(t,e.id);return this._packMsg={ok:!0,text:this.t("pack_imported",{name:n.name,publisher:n.publisher,n:n.items})},this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0})),Kt(t)})}renderUpdates(){let e=this._license;return e?.active?(this.freshUpdates||(this.freshUpdates=ci(e.updates??[]),di(e.updates??[])),this.freshUpdates.length?m`<section class="fp3d-ext-card fp3d-updates">
      ${this.freshUpdates.map(t=>m`<p>✨ ${t.added>0?this.t("pack_updated_added",{name:t.name,release:t.release,n:t.added}):this.t("pack_updated",{name:t.name,release:t.release})}</p>`)}
    </section>`:y):y}renderOffers(){let e=this._license;if(!e?.active)return y;let t=[...e.offers??[]].sort((i,r)=>Number(r.new)-Number(i.new)),n=e.loyalty??null;return!t.length&&!n?y:(ai(t),this.dispatchEvent(new CustomEvent("offers-seen",{bubbles:!0,composed:!0})),m`<section class="fp3d-ext-card fp3d-offers">
      <h3>${this.t("offers_title")}</h3>
      ${n?m`<div class="fp3d-loyalty">
            <span>🎁 ${this.t("offers_loyalty",{percent:n.percent})}</span>
            <code>${n.code}</code>
            <button
              class="fp3d-btn"
              @click=${async()=>{try{await navigator.clipboard.writeText(n.code),this._licenseMsg={ok:!0,text:this.t("license_copied")}}catch{}}}
            >
              ${this.t("license_copy")}
            </button>
          </div>`:y}
      <div class="fp3d-offer-grid">
        ${t.map(i=>m`<a class="fp3d-offer" href=${ui(i.url,n)} target="_blank" rel="noopener">
            ${i.image?m`<img src=${i.image} alt="" loading="lazy" />`:m`<div class="fp3d-offer-ph">✦</div>`}
            <div class="fp3d-offer-body">
              <b>${i.name}</b>
              ${i.new?m`<span class="fp3d-offer-new">${this.t("offers_new")}</span>`:y}
              <span class="fp3d-offer-kind">${this.t(`offers_kind_${i.kind}`)}${i.price?` \xB7 ${i.price}`:""}</span>
              ${i.teaser?m`<span class="fp3d-sub">${i.teaser}</span>`:y}
            </div>
          </a>`)}
      </div>
    </section>`)}renderShop(){let e=this._license;if(!this.isAdmin||!this.hass)return y;if(!e)return this.loadLicense(),y;let t=this.hass,n=this._licenseBusy,i=e.checked_at?new Date(e.checked_at*1e3).toLocaleString(t.language):null;return m`<div class="fp3d-shop fp3d-ext-card">
      <h3>${this.t("license_title")}</h3>
      <div class="fp3d-shop-row">
        <span>${this.t("license_instance")}</span>
        <code>${e.instance}</code>
        <button
          class="fp3d-btn"
          @click=${async()=>{try{await navigator.clipboard.writeText(e.instance),this._licenseMsg={ok:!0,text:this.t("license_copied")}}catch{}}}
        >
          ${this.t("license_copy")}
        </button>
      </div>
      ${e.active?m`<div class="fp3d-shop-row">
              <span>${this.t("license_active",{name:e.licensee??"",key:e.key_hint??""})}</span>
              ${i?m`<span class="fp3d-sub">${this.t("license_checked",{time:i})}</span>`:y}
              <button class="fp3d-btn" ?disabled=${!!n} @click=${()=>this.shopCall("refresh",()=>hi(t),this.t("license_refreshed"))}>
                ${n==="refresh"?"\u2026":this.t("license_refresh")}
              </button>
              <button class="fp3d-btn fp3d-danger" ?disabled=${!!n} @click=${()=>confirm(this.t("license_remove_confirm"))&&this.shopCall("remove",()=>pi(t))}>
                ${this.t("license_remove")}
              </button>
            </div>
            ${e.error?m`<p class="fp3d-sub fp3d-pack-error">${this.t(`license_error_${e.error}`)}</p>`:y}
            ${e.packs.length?e.packs.map(r=>{let s=r.installed===null?"install":r.installed<r.release?"update":"installed";return m`<div class="fp3d-pack">
                    <div>
                      <b>${r.name}</b>
                      <span class="fp3d-sub">${s==="installed"?this.t("license_installed",{release:r.release}):s==="update"?this.t("license_update_available",{release:r.release}):this.t("license_not_installed")}</span>
                    </div>
                    ${s==="installed"?y:m`<button class="fp3d-btn fp3d-primary" ?disabled=${!!n} @click=${()=>this.installFromShop(r)}>
                          ${n===r.id?"\u2026":this.t(s==="update"?"license_update":"license_install")}
                        </button>`}
                  </div>`}):m`<p class="fp3d-sub">${this.t("license_none")}</p>`}`:m`<div class="fp3d-shop-row">
            <input
              type="text"
              class="fp3d-shop-key"
              placeholder="NP-XXXX-XXXX-XXXX-XXXX"
              autocomplete="off"
              spellcheck="false"
              .value=${this._licenseKey}
              @input=${r=>this._licenseKey=r.target.value}
              @keydown=${r=>{r.key==="Enter"&&this._licenseKey.trim()&&this.shopCall("activate",()=>jt(t,this._licenseKey),this.t("license_activated"))}}
            />
            <button class="fp3d-btn fp3d-primary" ?disabled=${!!n||!this._licenseKey.trim()} @click=${()=>this.shopCall("activate",()=>jt(t,this._licenseKey),this.t("license_activated"))}>
              ${n==="activate"?"\u2026":this.t("license_activate")}
            </button>
          </div>`}
      ${this._licenseMsg?m`<p class="fp3d-sub ${this._licenseMsg.ok?"fp3d-notice":"fp3d-pack-error"}">${this._licenseMsg.text}</p>`:y}
      <p class="fp3d-sub">${this.t("license_hint")} <a href=${e.shop_url} target="_blank" rel="noopener">${this.t("license_shop")}</a></p>
    </div>`}renderPacks(){let e=this.packs??[];return m`<section class="fp3d-ext-card">
      <h3>${this.t("packs")}</h3>
      ${e.map(t=>m`<div class="fp3d-pack">
          <div>
            <b>${t.name}</b>
            <span class="fp3d-sub">${t.features?.length?this.t("pack_features",{publisher:t.publisher,n:t.features.length}):this.t("pack_by",{publisher:t.publisher,n:t.items.length})}</span>
            ${t.licensee?m`<span class="fp3d-sub">${this.t("pack_licensed",{name:t.licensee})}${t.release&&t.release>1?` \xB7 v${t.release}`:""}</span>`:y}
          </div>
          <button class="fp3d-btn fp3d-danger" @click=${()=>this.deletePack(t)}>${this.t("pack_remove")}</button>
        </div>`)}

      <label class="fp3d-btn fp3d-primary fp3d-pack-import">
        ${this.t("pack_import")}
        <input type="file" accept=".fp3dpack,.json,application/json" multiple hidden @change=${t=>this.importPackFile(t)} />
      </label>
      ${this._packMsg?m`<p class="fp3d-sub ${this._packMsg.ok?"fp3d-notice":"fp3d-pack-error"}">${this._packMsg.text}</p>`:y}
      <p class="fp3d-sub">${this.t("packs_hint")}</p>
    </section>`}async importPackFile(e){let t=e.target,n=[...t.files??[]];if(t.value="",!n.length||!this.hass)return;let i=[],r=[];for(let a of n)try{let l=await si(this.hass,await a.text());i.push(this.t("pack_imported",{name:l.name,publisher:l.publisher,n:l.items}))}catch(l){let{code:c,message:d}=l??{},u=`pack_error_${c}`,h=this.t(u,{detail:d??String(l)});r.push(`${a.name}: ${h===u?this.t("pack_error_other",{detail:d??String(l)}):h}`)}i.length&&this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let s=n.length>1?[this.t("packs_imported_n",{n:i.length,total:n.length})]:[];this._packMsg={ok:r.length===0,text:[...s,...i,...r].join(" \xB7 ")}}async deletePack(e){!this.hass||!confirm(this.t("pack_remove_confirm",{name:e.name}))||(await oi(this.hass,e.id),this._packMsg=null,this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0})))}static styles=[Oe,zt,ee`
      .fp3d-updates {
        border-color: color-mix(in srgb, var(--fp3d-accent) 60%, transparent);
        background: color-mix(in srgb, var(--fp3d-accent) 8%, transparent);
      }
      .fp3d-updates p {
        margin: 4px 0;
      }
      .fp3d-loyalty {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        margin: 6px 0 12px;
        padding: 10px 12px;
        border: 1px solid color-mix(in srgb, #ffb547 55%, transparent);
        border-radius: 12px;
        background: color-mix(in srgb, #ffb547 10%, transparent);
      }
      .fp3d-loyalty code {
        font-size: 1.05em;
        font-weight: 700;
        letter-spacing: 0.04em;
      }
      .fp3d-offer-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 10px;
      }
      .fp3d-offer {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
        color: inherit;
        text-decoration: none;
        background: color-mix(in srgb, var(--fp3d-accent) 4%, transparent);
      }
      .fp3d-offer:hover {
        border-color: var(--fp3d-accent);
      }
      .fp3d-offer img,
      .fp3d-offer-ph {
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
      }
      .fp3d-offer-ph {
        display: grid;
        place-items: center;
        font-size: 28px;
        color: var(--fp3d-accent);
      }
      .fp3d-offer-body {
        display: flex;
        flex-direction: column;
        gap: 3px;
        padding: 10px 12px;
      }
      .fp3d-offer-new {
        align-self: flex-start;
        padding: 1px 8px;
        border-radius: 999px;
        background: #ffb547;
        color: #1a1200;
        font-size: 11px;
        font-weight: 700;
      }
      .fp3d-offer-kind {
        color: var(--fp3d-accent);
        font-size: 12px;
      }
      :host {
        display: block;
        overflow: auto;
      }
      .fp3d-ext {
        max-width: 920px;
        margin: 0 auto;
        padding: 20px 16px 40px;
        display: grid;
        gap: 16px;
      }
      .fp3d-ext-head {
        display: grid;
        gap: 8px;
        justify-items: start;
      }
      .fp3d-ext-head a {
        text-decoration: none;
      }
      .fp3d-ext-actions,
      .fp3d-ext-links {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        align-items: center;
      }
      .fp3d-ext-head h2 {
        margin: 0;
        font-size: 22px;
      }
      .fp3d-ext-card {
        padding: 14px 16px;
        border: 1px solid var(--fp3d-line);
        border-radius: 14px;
        background: var(--fp3d-chrome);
      }
      .fp3d-ext-card h3 {
        margin: 0 0 8px;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--fp3d-soft);
      }
      .fp3d-ext-pro {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        gap: 10px;
      }
      .fp3d-ext-feature {
        display: grid;
        gap: 6px;
        align-content: start;
        padding: 12px;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
      }
      .fp3d-ext-on {
        border-color: var(--fp3d-accent);
      }
      .fp3d-ext-state {
        color: var(--fp3d-accent);
        font-weight: 600;
        font-size: 13px;
      }
      .fp3d-ext-link {
        color: var(--fp3d-accent);
        font-weight: 600;
        font-size: 13px;
      }
      .fp3d-sub {
        color: var(--fp3d-soft);
        font-size: 13px;
      }
      .fp3d-notice {
        color: var(--fp3d-accent);
      }
      .fp3d-shop {
        margin: 10px 0;
        padding: 10px 12px;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
      }
      .fp3d-shop-row {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        margin: 6px 0;
      }
      .fp3d-shop code {
        padding: 2px 8px;
        border-radius: 6px;
        background: var(--fp3d-chrome-solid);
        font-size: 13px;
        letter-spacing: 0.08em;
        user-select: all;
      }
      .fp3d-shop-key {
        flex: 1;
        min-width: 180px;
        font-family: ui-monospace, monospace;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }
      .fp3d-shop a {
        color: var(--fp3d-accent);
      }
      .fp3d-pack {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 8px 0;
        border-bottom: 1px solid var(--fp3d-line);
      }
      .fp3d-pack div {
        display: grid;
        gap: 2px;
      }
      .fp3d-pack-import {
        display: block;
        margin-top: 10px;
        text-align: center;
        cursor: pointer;
      }
      .fp3d-pack-error {
        color: var(--fp3d-danger);
      }
    `]};customElements.get("fp3d-extensions")||customElements.define("fp3d-extensions",Ln);var Wr=new Set(["vertex","room","device","opening","furniture","rotate","resize","outdoor","roofmove","roofcorner","outvertex","solarmove","solarturn"]),Hr=100,At=10,S=o=>Math.round(o*1e3)/1e3,Cr={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]},Dn=class extends Y{static properties={hass:{attribute:!1},building:{attribute:!1},narrow:{type:Boolean},packs:{attribute:!1},_preview:{state:!0},_doc:{state:!0},_doc3d:{state:!0},_split:{state:!0},_splitRatio:{state:!0},_backupBusy:{state:!0},_wall3d:{state:!0},_sidePinned:{state:!0},_sideOpen:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_vertex:{state:!0},_openingId:{state:!0},_furnitureId:{state:!0},_deviceId:{state:!0},_deviceQuery:{state:!0},_devSource:{state:!0},_roofId:{state:!0},_solarId:{state:!0},_solarPick:{state:!0},_roofWinId:{state:!0},_furnQuery:{state:!0},_libOpen:{state:!0},_expanded:{state:!0},_notice:{state:!0},_history:{state:!0},_spots:{state:!0},_outdoorId:{state:!0},_wallId:{state:!0},_edgeHi:{state:!0},_ctx:{state:!0},_fixedHint:{state:!0},_floorMenu:{state:!0},_openingPreset:{state:!0},_measureLen:{state:!0},_packages:{state:!0},_rectSize:{state:!0},_tool:{state:!0},_draft:{state:!0},_cursor:{state:!0},_guides:{state:!0},_view:{state:!0},_size:{state:!0},_images:{state:!0},_canUndo:{state:!0},_canRedo:{state:!0}};doc3dTimer;fixedPan=!1;reframe3d=!1;pressTimer=0;pressStart=null;past=[];future=[];drag=null;pointers=new Map;pinch=null;fitted=!1;resizeObserver;loadingImages=new Set;constructor(){super(),this.narrow=!1,this._floorId=null,this._roomId=null,this._vertex=null,this._openingId=null,this._furnitureId=null,this._deviceId=null,this._deviceQuery="",this._devSource="area",this._roofId=null,this._solarId=null,this._solarPick=!1,this._roofWinId=null,this._furnQuery="",this._libOpen=new Set(["group:lights","group:living"]);try{let n=localStorage.getItem("neonplan3d.library");n&&(this._libOpen=new Set(JSON.parse(n)))}catch{}this._expanded=new Set,this._notice=null,this._history=null,this._spots=null,this._outdoorId=null,this._wallId=null,this._edgeHi=null,this._floorMenu=!1,this._openingPreset="door";let e=!1;try{e=localStorage.getItem("neonplan3d.editor3d")==="1"}catch{}this._split=e,this._splitRatio=.55;try{let n=Number(localStorage.getItem("neonplan3d.editorSplit"));n>=20&&n<=80&&(this._splitRatio=n/100)}catch{}this._backupBusy=!1,this._wall3d="cut",this._doc3d=this._doc,this._sideOpen=!1;let t=!0;try{t=localStorage.getItem("neonplan3d.sidePinned")!=="0"}catch{}this._sidePinned=t,this._preview=null,this._measureLen=3,this._packages=!1,this._rectSize=[4,3],this._tool="select",this._draft=[],this._cursor=null,this._guides={},this._view={scale:50,ox:40,oy:40},this._size={w:800,h:600},this._images={},this._canUndo=!1,this._canRedo=!1}t(e,t){return ke(this.hass,e,t)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.resizeObserver?.disconnect()}willUpdate(e){e.has("packs")&&bi(this.packs??[]),e.has("_doc")&&this._split&&this.queue3d(),e.has("_split")&&this._split&&(this._doc3d=this._doc),e.has("_tool")&&this.houseTool&&!this._split&&!this.narrow&&(this._split=!0),e.has("_tool")&&(this.houseTool||e.get("_tool")==="roof"||e.get("_tool")==="energy")&&(this.reframe3d=!0),e.has("building")&&this.building!==this._doc&&(this._doc=this.building,this._doc3d=this.building,this._doc.floors.some(t=>t.id===this._floorId)||(this._floorId=this._doc.floors[0]?.id??null),this.floor?.rooms.some(t=>t.id===this._roomId)||(this._roomId=null))}firstUpdated(){let e=this.renderRoot.querySelector(".fp3d-canvas-wrap");this.resizeObserver=new ResizeObserver(()=>{this._size={w:e.clientWidth,h:e.clientHeight},!this.fitted&&this._size.w>0&&(this.fitted=!0,this.fit())}),this.resizeObserver.observe(e)}queue3d(){clearTimeout(this.doc3dTimer),this.doc3dTimer=setTimeout(()=>this._doc3d=this._doc,150)}onSplitDown(e){let t=e.currentTarget.parentElement,n=e.currentTarget;n.setPointerCapture(e.pointerId);let i=t.getBoundingClientRect(),r=a=>{this._splitRatio=Math.min(.8,Math.max(.2,(a.clientX-i.left)/i.width))},s=()=>{n.removeEventListener("pointermove",r),n.removeEventListener("pointerup",s),n.removeEventListener("pointercancel",s);try{localStorage.setItem("neonplan3d.editorSplit",String(Math.round(this._splitRatio*100)))}catch{}};n.addEventListener("pointermove",r),n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s),e.preventDefault()}toggleSplit(){this._split=!this._split;try{localStorage.setItem("neonplan3d.editor3d",this._split?"1":"0")}catch{}}onFurnitureMoved3d(e){let{id:t,x:n,z:i}=e.detail,r=this._doc.settings.wall_interior;this.change(s=>{for(let a of s.floors){let l=a.furniture.find(h=>h.id===t);if(!l)continue;let[c,d]=bn(a,l.x,l.z,n,i);Object.assign(l,{x:c,z:d});let u=bt(a,l,r);u&&Object.assign(l,u)}})}onDeviceMoved3d(e){let{id:t,x:n,z:i}=e.detail;this.change(r=>{for(let s of r.floors){let a=s.placements.find(d=>d.entity_id===t);if(!a)continue;let[l,c]=bn(s,a.x,a.z,n,i);Object.assign(a,{x:l,z:c})}})}render3dBar(){if(!this.isAdmin)return y;let e=this.furnitureItem,t=this.device;if(e){let n=Jt(e),i=(r,s,a=.05)=>m`<label class="fp3d-3d-size" title=${this.t(`size_${r}`)}
        >${s}
        <input
          type="number"
          inputmode="decimal"
          step="0.05"
          min=${a}
          .value=${String(Math.round(e[r]*100)/100)}
          @change=${l=>{let c=parseFloat(l.target.value.replace(",","."));Number.isFinite(c)&&c>=a&&this.updateFurniture({[r]:Math.round(c*1e3)/1e3})}}
        />
      </label>`;return m`<div class="fp3d-3d-bar">
        <span>${it(this.hass,e.type)}</span>
        ${i("w",this.t("size_short_w"))} ${i("d",this.t("size_short_d"))} ${i("h",this.t("size_short_h"))}
        ${n?m`<label class="fp3d-3d-size" title=${this.t("mount_height")}
              >↕
              <input
                type="number"
                inputmode="decimal"
                step="0.05"
                min="0"
                .value=${String(Math.round((e.mount_y??Xt(this.floor,e))*100)/100)}
                @change=${r=>{let s=parseFloat(r.target.value.replace(",","."));Number.isFinite(s)&&s>=0&&this.updateFurniture({mount_y:Math.round(s*1e3)/1e3})}}
              />
            </label>`:y}
        <button class="fp3d-chip" @click=${()=>this.rotateFurniture(-45)}>↺ 45°</button>
        <button class="fp3d-chip" @click=${()=>this.rotateFurniture(45)}>↻ 45°</button>
        ${this.fixButton("furniture",e.id)}
        <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
      </div>`}if(t){let n=W(t.entity_id),i=n==="light",r=n?un(n,this.floor?.height??2.5,i?t.mount??"ceiling":null):1;return m`<div class="fp3d-3d-bar">
        <span>${N(this.hass,t.entity_id)}</span>
        ${i?m`<select class="fp3d-3d-select" title=${this.t("lamp_mount")} @change=${s=>this.updateDevice({mount:s.target.value,y:null})}>
              ${["ceiling","floor","table","wall"].map(s=>m`<option value=${s} ?selected=${s===(t.mount??"ceiling")}>${this.t(`lamp_${s}`)}</option>`)}
            </select>`:y}
        <label class="fp3d-3d-size" title=${this.t("marker_height")}
          >${this.t("size_short_h")}
          <input
            type="number"
            inputmode="decimal"
            step="0.05"
            min="0"
            .value=${String(Math.round((t.y??r)*100)/100)}
            @change=${s=>{let a=parseFloat(s.target.value.replace(",","."));Number.isFinite(a)&&a>=0&&this.updateDevice({y:Math.round(a*1e3)/1e3})}}
          />
        </label>
        <button class="fp3d-chip" @click=${()=>this.updateDevice({rotation:(((t.rotation??0)-45)%360+360)%360})}>↺ 45°</button>
        <button class="fp3d-chip" @click=${()=>this.updateDevice({rotation:((t.rotation??0)+45)%360%360})}>↻ 45°</button>
        ${this.fixButton("device",t.entity_id)}
        <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteItem("device",t.entity_id)}>${this.t("delete")}</button>
      </div>`}return y}grab3d=null;surfaceGrabber={start:e=>this.grab3dStart(e),move:e=>this.grab3dMove(e),end:()=>{let e=this.grab3d;this.grab3d=null,e?.moved&&this.pushHistory(e.base)}};grab3dStart(e){let t=this._doc,n=V(t),i=null,r=(a,l,c,d,u=!1)=>{if(!c||u)return;let h=Pn(c,e.o,e.d);!h||!Rr(c,d,h.u,h.s)||i&&i.t<=h.t||(i={id:a,win:l,t:h.t,du:h.u-d.u,ds:h.s-d.v})};if(this._tool==="energy")for(let a of t.settings.roof.solar??[])r(a.id,!1,re(t,a,n),a,!!a.locked);if(this._tool==="roof")for(let a of t.settings.roof.windows??[])r(a.id,!0,n.find(l=>l.key===a.face)??null,De(a),!!a.locked);if(!i)return!1;let s=i;return this.grab3d={id:s.id,win:s.win,du:s.du,ds:s.ds,base:t,moved:!1},s.win?this._roofWinId=s.id:this.selectSolar(s.id),!0}grab3dMove(e){let t=this.grab3d;if(!t)return;let n=t.base,i=t.win?n.settings.roof.windows?.find(v=>v.id===t.id):void 0,r=t.win?i?De(i):void 0:n.settings.roof.solar?.find(v=>v.id===t.id);if(!r)return;let s=re(n,r),a=s?.unbounded?[s]:t.win?V(n):[...V(n),...Te(n)],l=null;for(let v of a){let g=Pn(v,e.o,e.d);g&&Er(v,g.u,g.s)&&(!l||g.t<l.t)&&(l={face:v,...g})}if(!l)return;let c=l.face,d=.05,u=v=>S(Math.round(v/d)*d),h=et(c,{...r,face:c.key,u:u(l.u-t.du),v:u(l.s-t.ds),tilt:c.flat?r.tilt??15:r.tilt});t.moved=!0,this.change(v=>{if(t.win){let p=v.settings.roof.windows?.find(w=>w.id===t.id);p&&Object.assign(p,{face:c.key,...h});return}let g=v.settings.roof.solar?.find(p=>p.id===t.id);g&&Object.assign(g,{face:c.key,...h},c.flat&&g.tilt==null?{tilt:15}:{})},t.base,!1)}get houseTool(){return this._tool==="roof"||this._tool==="energy"}render3d(){return m`<div class="fp3d-editor-3d">
      ${this.houseTool?y:m`<div class="fp3d-seg fp3d-3d-walls">
            <button aria-pressed=${this._wall3d==="auto"} @click=${()=>this._wall3d="auto"}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wall3d==="cut"} @click=${()=>this._wall3d="cut"}>${this.t("walls_cut")}</button>
          </div>`}
      ${this.render3dBar()}
      <fp3d-view3d
        .hass=${this.hass}
        .building=${this._doc3d}
        .floorId=${this.houseTool?null:this._floorId}
        .roomId=${null}
        .wallMode=${this.houseTool?"auto":this._wall3d}
        .explode=${!1}
        .markerMode=${"important"}
        .heatMode=${"none"}
        .theme=${"neon"}
        .packs=${this.packs}
        .showEnergy=${!1}
        .flows=${!1}
        ?furnish=${this.isAdmin}
        .surfaceGrab=${this.isAdmin&&this.houseTool?this.surfaceGrabber:null}
        .furnishTypes=${this._tool==="energy"?be:this._tool==="roof"?[]:null}
        .selectedFurniture=${this._furnitureId}
        .selectedDevice=${this._deviceId}
        .quality=${"auto"}
        .floorThumbs=${!1}
        .roomLabels=${!0}
        .floorStack=${this.houseTool?"stacked":"single"}
        .panelOpen=${!1}
        .alerts=${!1}
        .scenes=${!1}
        @furniture-select=${e=>{e.detail.id?this.selectFrom3d("furniture",e.detail.id):this._furnitureId&&this.selectFrom3d("furniture",null)}}
        @furniture-move=${this.onFurnitureMoved3d}
        @device-select=${e=>{e.detail.id?this.selectFrom3d("device",e.detail.id):this._deviceId&&this.selectFrom3d("device",null)}}
        @device-move=${this.onDeviceMoved3d}
        @floor-tap=${e=>{e.detail.floorId&&(this._floorId=e.detail.floorId),this._sideOpen=!1}}
        @room-tap=${e=>{e.detail.floorId&&(this._floorId=e.detail.floorId),e.detail.roomId?this.selectFrom3d("room",e.detail.roomId):this._sideOpen=!1}}
      ></fp3d-view3d>
    </div>`}updated(){this.reframe3d&&(this.reframe3d=!1,setTimeout(()=>this.renderRoot.querySelector("fp3d-view3d")?.resetView(),250));let e=this.floor?.background;if(e&&!this._images[e.image_id]&&!this.loadingImages.has(e.image_id)&&this.loadImage(e.image_id),this.furnitureItem?.pictures)for(let t of this.storedPictures())!this._images[t]&&!this.loadingImages.has(t)&&this.loadImage(t)}get floor(){return this._doc?.floors.find(e=>e.id===this._floorId)}get room(){return this.floor?.rooms.find(e=>e.id===this._roomId)}get isAdmin(){return this.hass?.user?.is_admin??!0}setDoc(e,t=this._doc){t&&(this.past.push(JSON.stringify(t)),this.past.length>Hr&&this.past.shift(),this.future=[]),this._doc=e,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}change(e,t=this._doc,n=!0){let i=structuredClone(t),r=i.floors.find(s=>s.id===this._floorId);!r&&this._floorId||(e(i,r),this.setDoc(i,n?t:null))}undo(){let e=this.past.pop();e&&(this.future.push(JSON.stringify(this._doc)),this.restore(JSON.parse(e)))}redo(){let e=this.future.pop();e&&(this.past.push(JSON.stringify(this._doc)),this.restore(JSON.parse(e)))}restore(e){this._doc=e,e.floors.some(t=>t.id===this._floorId)||(this._floorId=e.floors[0]?.id??null),this.floor?.rooms.some(t=>t.id===this._roomId)||(this._roomId=null),this._vertex=null,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}toScreen(e){let{scale:t,ox:n,oy:i}=this._view;return[e[0]*t+n,e[1]*t+i]}toWorld(e,t){let{scale:n,ox:i,oy:r}=this._view;return[(e-i)/n,(t-r)/n]}localPoint(e){let t=this.renderRoot.querySelector("svg").getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]}fit(){let e=this.floor?.rooms.flatMap(a=>a.points)??[],t=e.length?J(e):{x0:0,z0:0,x1:10,z1:8},n=1.5,i=t.x1-t.x0+2*n,r=t.z1-t.z0+2*n,s=Math.max(8,Math.min(400,Math.min(this._size.w/i,this._size.h/r)));this._view={scale:s,ox:this._size.w/2-(t.x0+t.x1)/2*s,oy:this._size.h/2-(t.z0+t.z1)/2*s}}showPoint(e,t){let n=Math.max(this._view.scale,70);this._view={scale:n,ox:this._size.w/2-e*n,oy:this._size.h/2-t*n}}zoomAt(e,t,n){let{scale:i,ox:r,oy:s}=this._view,a=Math.max(8,Math.min(600,i*e)),l=a/i;this._view={scale:a,ox:t-(t-r)*l,oy:n-(n-s)*l}}snap(e,t,n=!1){if(this._guides={},n)return e;let i=At/this._view.scale,r=this.floor?.rooms??[],s=[];for(let g of r)g.points.forEach((p,w)=>{t&&g.id===t.roomId&&(t.index===void 0||t.index===w)||s.push(p)});let a=null,l=i;for(let g of s){let p=Math.hypot(g[0]-e[0],g[1]-e[1]);p<l&&(l=p,a=g)}if(a)return this._guides={point:a},[a[0],a[1]];for(let g of r)if(!(t&&g.id===t.roomId))for(let p=0;p<g.points.length;p++){let w=g.points[p],b=g.points[(p+1)%g.points.length],_=b[0]-w[0],f=b[1]-w[1],k=_*_+f*f;if(k<1e-9)continue;let x=((e[0]-w[0])*_+(e[1]-w[1])*f)/k;if(x<=0||x>=1)continue;let $=[w[0]+x*_,w[1]+x*f],M=Math.hypot($[0]-e[0],$[1]-e[1]),E=this._doc.settings.grid;Math.abs(f)<1e-9&&($[0]=Math.min(Math.max(Math.round($[0]/E)*E,Math.min(w[0],b[0])),Math.max(w[0],b[0]))),Math.abs(_)<1e-9&&($[1]=Math.min(Math.max(Math.round($[1]/E)*E,Math.min(w[1],b[1])),Math.max(w[1],b[1]))),M<l&&(l=M,a=$)}if(a)return this._guides={point:a},[S(a[0]),S(a[1])];let c=this._doc.settings.grid,d=[S(Math.round(e[0]/c)*c),S(Math.round(e[1]/c)*c)],u=i,h=i,v={};for(let g of s)Math.abs(g[0]-e[0])<u&&(u=Math.abs(g[0]-e[0]),d[0]=g[0],v.x=g[0]),Math.abs(g[1]-e[1])<h&&(h=Math.abs(g[1]-e[1]),d[1]=g[1],v.z=g[1]);return this._guides=v,d}onPointerDown(e){if(this._ctx=null,this._fixedHint=!1,this.fixedPan=!1,this.pointerDown(e),this.pointers.size!==1){clearTimeout(this.pressTimer);return}if(this.guardFixed(this.localPoint(e)),clearTimeout(this.pressTimer),this.pressStart=null,e.pointerType==="touch"&&(this._tool==="select"||this._tool==="furniture")){let t=this.localPoint(e),n=e.target;this.pressStart=t,this.pressTimer=window.setTimeout(()=>{let i=this.drag;i&&"moved"in i&&i.moved||(this.drag=null,this.openContext(n,t))},550)}}guardFixed(e){let t=this.drag;if(!t)return;let n=null;t.kind==="vertex"||t.kind==="room"?n=["room",t.roomId]:t.kind==="device"||t.kind==="aim"?n=["device",t.entityId]:t.kind==="opening"?n=["opening",t.id]:t.kind==="furniture"||t.kind==="rotate"||t.kind==="resize"?n=["furniture",t.id]:t.kind==="wallmove"?n=["wall",t.id]:t.kind==="outdoor"&&(n=["outdoor",t.id]),!(!n||!this.isFixedItem(...n))&&("moved"in t&&t.moved&&"base"in t&&this.restoreLive(t.base),this.drag={kind:"pan",last:e},this.fixedPan=!0)}pointerDown(e){e.currentTarget.setPointerCapture(e.pointerId);let n=this.localPoint(e);if(this.pointers.set(e.pointerId,n),this.pointers.size===2){this.drag&&Wr.has(this.drag.kind)&&"moved"in this.drag&&this.drag.moved&&"base"in this.drag&&this.restoreLive(this.drag.base),this.drag=null,this.pinch=this.pinchState();return}if(this.pointers.size>2)return;if(e.button===1||e.button===2||!this.floor){this.drag={kind:"pan",last:n};return}let i=this.toWorld(...n),r=e.target;if(this._tool==="wall"){let f=this.snap(i,void 0,e.altKey);this.drag={kind:"freewall",start:f,end:f};return}if(this._tool==="roof"||this._tool==="energy"){let f=r.closest("[data-roof-corner]")?.getAttribute("data-roof-corner"),k=r.closest("[data-roof]")?.getAttribute("data-roof"),x=this._tool==="energy"?r.closest("[data-energy-device]")?.getAttribute("data-energy-device"):null;if(x){this._solarId=null,this.selectItem("furniture",x),this.drag=this.isAdmin?{kind:"furniture",id:x,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let $=this._tool==="energy"?r.closest("[data-solar]")?.getAttribute("data-solar"):null,M=this._tool==="energy"?r.closest("[data-solar-turn]")?.getAttribute("data-solar-turn"):null;if(M&&this.isAdmin){this.drag={kind:"solarturn",id:M,base:this._doc,moved:!1};return}if($){let A=r.closest("[data-cell]")?.getAttribute("data-cell");if(this._solarPick&&$===this._solarId&&A&&this.isAdmin){this.toggleSolarCell(A),this.drag={kind:"pan",last:n};return}$!==this._solarId&&(this._solarPick=!1),this._solarId=$,this._roofId=null;let R=this._doc.settings.roof.solar?.find(U=>U.id===$),P=R?re(this._doc,R)??void 0:void 0,I=P?this.faceHit(P,i):null,L=R&&I?{du:I.u-R.u,ds:Number.isNaN(I.s)?0:I.s-R.v}:null;this.drag=this.isAdmin&&!R?.locked?{kind:"solarmove",id:$,start:i,startScreen:n,base:this._doc,moved:!1,grab:L}:{kind:"pan",last:n};return}let E=this._tool==="roof"?r.closest("[data-roofwin]")?.getAttribute("data-roofwin"):null;if(E){this._roofWinId=E,this._roofId=null;let A=this._doc.settings.roof.windows?.find(L=>L.id===E),R=A?V(this._doc).find(L=>L.key===A.face):void 0,P=R?St(R,i):null,I=A&&P?{du:P.u-A.u,ds:P.s-A.v}:null;this.drag=this.isAdmin&&!A?.locked?{kind:"solarmove",id:E,start:i,startScreen:n,base:this._doc,moved:!1,grab:I,win:!0}:{kind:"pan",last:n};return}this._tool==="roof"&&(this._roofWinId=null);let F=this._tool==="energy"?r.closest(".fp3d-energy-item")?.getAttribute("data-furniture"):null;if(F){this._solarId=null,this.selectItem("furniture",F),this.drag=this.isAdmin?{kind:"furniture",id:F,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"){this.selectItem("furniture",null),this._solarId=null,this.drag={kind:"pan",last:n};return}if(f&&this.isAdmin){let[A,R,P]=f.split(":");this.drag={kind:"roofcorner",id:A,corner:[R==="1"?1:0,P==="1"?1:0],base:this._doc,moved:!1}}else if(k){let A=this.roofFixed(this._doc.settings.roof.sections?.find(R=>R.id===k));A&&this._roofId===k&&(this._fixedHint=!0),this._roofId=k,this.drag=this.isAdmin&&!A?{kind:"roofmove",id:k,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n}}else if(this.isAdmin){this._roofId=null;let A=this.snap(i,void 0,e.altKey);this.drag={kind:"rect",start:A,end:A,roof:!0}}else this.drag={kind:"pan",last:n};return}if(this._tool==="rect"||this._tool==="outdoor"||this._tool==="hole"){let f=this.snap(i,void 0,e.altKey);this.drag={kind:"rect",start:f,end:f,outdoor:this._tool==="outdoor",hole:this._tool==="hole"};return}if(this._tool==="polygon"||this._tool==="measure"){this.drag={kind:"tap",startScreen:n,last:n,panning:!1};return}if(this._tool==="opening"){this.placeOpening(this._openingPreset,n)||(this.drag={kind:"pan",last:n});return}if(this._tool==="meter"){if(this.isAdmin&&this._floorId){let f=this._doc.settings.grid,[k,x]=i.map($=>S(Math.round($/f)*f));this.setEnergy({meter:{floor_id:this._floorId,x:k,z:x}})}this._tool="select";return}let s=r.closest("[data-device]");if(s&&this.isAdmin){this.drag={kind:"device",entityId:s.getAttribute("data-device"),start:i,startScreen:n,base:this._doc,moved:!1};return}let a=r.closest("[data-opening]");if(a){let f=a.getAttribute("data-opening");this.selectItem("opening",f),this.drag=this.isAdmin?{kind:"opening",id:f,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let l=r.closest("[data-resize]");if(l&&this.isAdmin){let[f,k,x]=l.getAttribute("data-resize").split(":");this.drag={kind:"resize",id:f,corner:[k==="1"?1:-1,x==="1"?1:-1],base:this._doc,moved:!1};return}let c=r.closest("[data-rotate]");if(c&&this.isAdmin){this.drag={kind:"rotate",id:c.getAttribute("data-rotate"),base:this._doc,moved:!1};return}let d=r.closest("[data-aim]");if(d&&this.isAdmin){this.drag={kind:"aim",entityId:d.getAttribute("data-aim"),base:this._doc,moved:!1};return}let u=r.closest("[data-furniture]");if(u&&!r.closest("[data-vertex], [data-mid]")){let f=u.getAttribute("data-furniture");this.selectItem("furniture",f),this.drag=this.isAdmin?{kind:"furniture",id:f,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let h=r.closest("[data-vertex]"),v=r.closest("[data-mid]");if(h&&this.room&&this.isAdmin){this._vertex=Number(h.getAttribute("data-vertex")),this.drag={kind:"vertex",roomId:this.room.id,index:this._vertex,base:this._doc,moved:!1};return}if(v&&this.room&&this.isAdmin){let f=Number(v.getAttribute("data-mid")),k=this.room.points,x=k[f],$=k[(f+1)%k.length],M=[S((x[0]+$[0])/2),S((x[1]+$[1])/2)],E=this._doc,F=this.room.id;this.change((A,R)=>{let P=R.rooms.find(L=>L.id===F);P.points.splice(f+1,0,M),P.wall_heights&&P.wall_heights.splice(f+1,0,P.wall_heights[f]??null);let I=Math.hypot(M[0]-x[0],M[1]-x[1]);for(let L of R.openings)L.room_id!==F||L.wall||(L.edge>f?L.edge+=1:L.edge===f&&L.offset>I&&(L.edge=f+1,L.offset=S(L.offset-I)))},E,!1),this._vertex=f+1,this.drag={kind:"vertex",roomId:F,index:f+1,base:E,moved:!0};return}let g=r.closest("[data-wall-end]");if(g&&this.isAdmin){let[f,k]=g.getAttribute("data-wall-end").split(":");this.drag={kind:"wallmove",id:f,end:k,start:i,startScreen:n,base:this._doc,moved:!1};return}let p=r.closest("[data-free-wall]");if(p){let f=p.getAttribute("data-free-wall");this.selectItem("wall",f),this.drag=this.isAdmin?{kind:"wallmove",id:f,end:null,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let w=r.closest("[data-out-vertex]");if(w&&this.isAdmin){let[f,k]=w.getAttribute("data-out-vertex").split(":");this.drag={kind:"outvertex",id:f,index:Number(k),base:this._doc,moved:!1};return}let b=r.closest("[data-outdoor]");if(b&&!r.closest("[data-room]")&&!this.roomAt(i)){let f=b.getAttribute("data-outdoor");this.selectItem("outdoor",f),this.drag=this.isAdmin?{kind:"outdoor",id:f,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let _=r.closest("[data-room]")?.getAttribute("data-room")??this.roomAt(i);if(_){_!==this._roomId&&(this._vertex=null),this.selectItem("room",_),this.drag=this.isAdmin&&this._tool!=="furniture"?{kind:"room",roomId:_,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}this.selectItem("room",null),this.drag={kind:"pan",last:n}}onPointerMove(e){if(this.pressStart){let r=this.localPoint(e);Math.hypot(r[0]-this.pressStart[0],r[1]-this.pressStart[1])>8&&(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan&&(this._fixedHint=!0))}else this.fixedPan&&!this._fixedHint&&this.drag?.kind==="pan"&&(this._fixedHint=!0);let t=this.localPoint(e);if(this.pointers.has(e.pointerId)&&this.pointers.set(e.pointerId,t),this.pinch){let r=this.pinchState();r&&(this.zoomAt(r.dist/Math.max(1,this.pinch.dist),...r.mid),this._view={...this._view,ox:this._view.ox+r.mid[0]-this.pinch.mid[0],oy:this._view.oy+r.mid[1]-this.pinch.mid[1]},this.pinch=r);return}let n=this.toWorld(...t),i=this.drag;if(!i){this._tool!=="select"&&this._tool!=="furniture"&&this.floor&&(this._cursor=this.snap(n,void 0,e.altKey));return}switch(i.kind){case"pan":this._view={...this._view,ox:this._view.ox+t[0]-i.last[0],oy:this._view.oy+t[1]-i.last[1]},i.last=t;break;case"tap":(i.panning||Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])>6)&&(i.panning=!0,this._view={...this._view,ox:this._view.ox+t[0]-i.last[0],oy:this._view.oy+t[1]-i.last[1]}),i.last=t;break;case"rect":i.end=this.snap(n,void 0,e.altKey),this.requestUpdate();break;case"freewall":{let r=this.snap(n,void 0,e.altKey);e.shiftKey&&(r=Math.abs(r[0]-i.start[0])>Math.abs(r[1]-i.start[1])?[r[0],i.start[1]]:[i.start[0],r[1]]),i.end=r,this.requestUpdate();break}case"wallmove":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let r=(i.base.floors.find(a=>a.id===this._floorId)?.walls??[]).find(a=>a.id===i.id);if(!r)return;let s;if(i.end){let a=this.snap(n,void 0,e.altKey);s=i.end==="a"?{a,b:r.b}:{a:r.a,b:a}}else{let a=e.altKey?.01:this._doc.settings.grid,l=Math.round((n[0]-i.start[0])/a)*a,c=Math.round((n[1]-i.start[1])/a)*a;s={a:[S(r.a[0]+l),S(r.a[1]+c)],b:[S(r.b[0]+l),S(r.b[1]+c)]}}this.change((a,l)=>Object.assign((l.walls??[]).find(c=>c.id===i.id),s),i.base,!1);break}case"vertex":{let r=this.snap(n,{roomId:i.roomId,index:i.index},e.altKey);i.moved=!0,this.change((s,a)=>{a.rooms.find(l=>l.id===i.roomId).points[i.index]=r},i.base,!1);break}case"room":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let r=i.base.floors.find(c=>c.id===this._floorId)?.rooms.find(c=>c.id===i.roomId);if(!r)return;let s=this.roomDelta(r,[n[0]-i.start[0],n[1]-i.start[1]],e.altKey),a=i.base.floors.find(c=>c.id===this._floorId),l=new Set(a.placements.filter(c=>T([c.x,c.z],r.points)).map(c=>c.entity_id));this.change((c,d)=>{let u=d.rooms.find(h=>h.id===i.roomId);u.points=r.points.map(([h,v])=>[S(h+s[0]),S(v+s[1])]),d.placements=a.placements.map(h=>l.has(h.entity_id)?{...h,x:S(h.x+s[0]),z:S(h.z+s[1])}:h)},i.base,!1);break}case"roofmove":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let r=e.altKey?.01:this._doc.settings.grid,s=S(Math.round((n[0]-i.start[0])/r)*r),a=S(Math.round((n[1]-i.start[1])/r)*r),l=i.base.settings.roof.sections?.find(c=>c.id===i.id);if(!l)return;this.change(c=>{let d=c.settings.roof.sections?.find(u=>u.id===i.id);d&&Object.assign(d,{x0:S(l.x0+s),x1:S(l.x1+s),z0:S(l.z0+a),z1:S(l.z1+a)})},i.base,!1);break}case"solarturn":{i.moved=!0;let r=i.base.settings.roof.solar?.find(h=>h.id===i.id),s=r?re(i.base,r):null;if(!r||!s)return;let[a,l]=Fn(s,r),c=Math.atan2(n[0]-a,-(n[1]-l))*180/Math.PI,d=e.altKey?1:15;c=Math.round(c/d)*d;let u=tt(i.base,r,c);this.change(h=>{let v=h.settings.roof.solar?.find(g=>g.id===i.id);v&&Object.assign(v,u)},i.base,!1);break}case"solarmove":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let r=i.win?i.base.settings.roof.windows?.find(w=>w.id===i.id):void 0,s=i.win?r?De(r):void 0:i.base.settings.roof.solar?.find(w=>w.id===i.id),a=i.win?V(i.base):[...V(i.base),...this._floorId?Te(i.base,this._floorId):[]],l=s?re(i.base,s,a):null;if(!s||!l)return;let c=e.altKey?.01:.05,d=w=>S(Math.round(w/c)*c),u=l.unbounded?null:Sr(a,n),h=l,v,g;if(u&&i.grab)h=u.face,v=d(u.u-i.grab.du),g=Number.isNaN(u.s)?u.face.key===s.face?s.v:Math.max(0,u.face.ls-1.5):d(u.s-i.grab.ds);else{let w=n[0]-i.start[0],b=n[1]-i.start[1],_=[l.es[0],l.es[2]],f=_[0]*_[0]+_[1]*_[1]||1;v=d(s.u+w*l.eu[0]+b*l.eu[2]),g=d(s.v+(w*_[0]+b*_[1])/f)}let p=et(h,{...s,face:h.key,u:v,v:g,tilt:h.flat?s.tilt??15:s.tilt});this.change(w=>{if(i.win){let _=w.settings.roof.windows?.find(f=>f.id===i.id);_&&Object.assign(_,{face:h.key,...p});return}let b=w.settings.roof.solar?.find(_=>_.id===i.id);b&&Object.assign(b,{face:h.key,...p},h.flat&&b.tilt==null?{tilt:15}:{})},i.base,!1);break}case"outvertex":{i.moved=!0;let r=this.snap(n,void 0,e.altKey),s=i.base.floors.find(l=>l.id===this._floorId)?.outdoor.find(l=>l.id===i.id);if(!s)return;let a=ht(s.points);this.change((l,c)=>{let d=c.outdoor.find(g=>g.id===i.id);if(!d)return;let u=s.points.map(g=>[...g]),h=i.index,v=s.points[h];u[h]=[S(r[0]),S(r[1])],a&&s.points.forEach((g,p)=>{p!==h&&(Math.abs(g[0]-v[0])<1e-6&&(u[p][0]=S(r[0])),Math.abs(g[1]-v[1])<1e-6&&(u[p][1]=S(r[1])))}),d.points=u},i.base,!1);break}case"roofcorner":{i.moved=!0;let r=this.snap(n,void 0,e.altKey);this.change(s=>{let a=s.settings.roof.sections?.find(l=>l.id===i.id);a&&(i.corner[0]?a.x1=S(r[0]):a.x0=S(r[0]),i.corner[1]?a.z1=S(r[1]):a.z0=S(r[1]))},i.base,!1);break}case"opening":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let r=i.base.floors.find(c=>c.id===this._floorId),s=r?.openings.find(c=>c.id===i.id),a=s&&r?Pe(s,r.rooms,r.walls??[]):null;if(!s||!a)return;let l=this.offsetOnEdge(a.room,a.edge,n,s.width,e.altKey);this.change((c,d)=>Object.assign(d.openings.find(u=>u.id===i.id),{offset:l}),i.base,!1);break}case"furniture":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let r=i.base.floors.find(u=>u.id===this._floorId)?.furniture.find(u=>u.id===i.id);if(!r)return;let s=e.altKey?.01:this._doc.settings.grid,a=S(Math.round((r.x+n[0]-i.start[0])/s)*s),l=S(Math.round((r.z+n[1]-i.start[1])/s)*s),c=r.rotation,d=e.altKey?null:this.snapToWall({...r,x:a,z:l});d&&({x:a,z:l,rotation:c}=d),this.change((u,h)=>Object.assign(h.furniture.find(v=>v.id===i.id),{x:a,z:l,rotation:c}),i.base,!1);break}case"outdoor":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let r=i.base.floors.find(c=>c.id===this._floorId)?.outdoor.find(c=>c.id===i.id);if(!r)return;let s=e.altKey?.01:this._doc.settings.grid,a=Math.round((n[0]-i.start[0])/s)*s,l=Math.round((n[1]-i.start[1])/s)*s;this.change((c,d)=>d.outdoor.find(u=>u.id===i.id).points=r.points.map(([u,h])=>[S(u+a),S(h+l)]),i.base,!1);break}case"resize":{i.moved=!0;let r=i.base.floors.find(a=>a.id===this._floorId)?.furniture.find(a=>a.id===i.id);if(!r)return;let s=Li(r,i.corner,n,e.altKey?.01:this._doc.settings.grid);this.change((a,l)=>Object.assign(l.furniture.find(c=>c.id===i.id),s),i.base,!1);break}case"rotate":{i.moved=!0;let r=i.base.floors.find(l=>l.id===this._floorId)?.furniture.find(l=>l.id===i.id);if(!r)return;let s=Math.atan2(-(n[0]-r.x),n[1]-r.z)*180/Math.PI,a=e.altKey?1:15;s=(Math.round(s/a)*a%360+360)%360,this.change((l,c)=>Object.assign(c.furniture.find(d=>d.id===i.id),{rotation:s}),i.base,!1);break}case"aim":{i.moved=!0;let r=i.base.floors.find(c=>c.id===this._floorId)?.placements.find(c=>c.entity_id===i.entityId);if(!r)return;let s=Math.atan2(-(n[0]-r.x),n[1]-r.z)*180/Math.PI,a=e.altKey?1:5;s=(Math.round(s/a)*a%360+360)%360;let l=Math.min(50,Math.max(.5,Math.round(Math.hypot(n[0]-r.x,n[1]-r.z)*10)/10));this.change((c,d)=>Object.assign(d.placements.find(u=>u.entity_id===i.entityId),{rotation:s,reach:l}),i.base,!1);break}case"device":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let r=i.base.floors.find(c=>c.id===this._floorId)?.placements.find(c=>c.entity_id===i.entityId);if(!r)return;let s=e.altKey?.01:this._doc.settings.grid,a=S(Math.round((r.x+n[0]-i.start[0])/s)*s),l=S(Math.round((r.z+n[1]-i.start[1])/s)*s);this.change((c,d)=>Object.assign(d.placements.find(u=>u.entity_id===i.entityId),{x:a,z:l}),i.base,!1);break}}}onPointerUp(e){if(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan=!1,this.pointers.delete(e.pointerId),this.pinch){this.pointers.size<2&&(this.pinch=null);return}let t=this.drag;if(this.drag=null,!t||e.type==="pointercancel"){t&&Wr.has(t.kind)&&"moved"in t&&t.moved&&"base"in t&&this.restoreLive(t.base);return}let n=this.localPoint(e);switch(t.kind){case"freewall":{Math.hypot(t.end[0]-t.start[0],t.end[1]-t.start[1])>=.2&&this.addFreeWall(t.start,t.end),this._guides={};break}case"wallmove":t.moved&&this.pushHistory(t.base),this._guides={};break;case"rect":{let[i,r]=t.start,[s,a]=t.end;if(Math.abs(s-i)>=.2&&Math.abs(a-r)>=.2){let l=[Math.min(i,s),Math.min(r,a)],c=[Math.max(i,s),Math.max(r,a)],d=[l,[c[0],l[1]],c,[l[0],c[1]]];t.outdoor?this.addOutdoor(d):t.hole?this.addHole(l,c):t.roof?this.addRoofSection(l,c):this.addRoom(d)}this._guides={};break}case"tap":if(t.panning)break;this._tool==="measure"?this._draft=[this.snap(this.toWorld(...n),void 0,e.altKey)]:this.addDraftPoint(this.snap(this.toWorld(...n),void 0,e.altKey),n);break;case"opening":case"furniture":case"rotate":case"aim":case"resize":case"outdoor":case"solarmove":case"solarturn":case"roofmove":case"roofcorner":t.moved&&this.pushHistory(t.base);break;case"device":t.moved?this.pushHistory(t.base):this.selectItem("device",t.entityId);break;case"vertex":case"room":t.moved&&this.pushHistory(t.base),this._guides={};break;default:break}}onWheel(e){e.preventDefault();let[t,n]=this.localPoint(e);this.zoomAt(Math.exp(-e.deltaY*(e.deltaMode===1?.05:.0015)),t,n)}pinchState(){let e=[...this.pointers.values()];if(e.length<2)return null;let[t,n]=e;return{dist:Math.hypot(t[0]-n[0],t[1]-n[1]),mid:[(t[0]+n[0])/2,(t[1]+n[1])/2]}}pushHistory(e){this.past.push(JSON.stringify(e)),this.past.length>Hr&&this.past.shift(),this.future=[],this._canUndo=!0,this._canRedo=!1}restoreLive(e){this._doc=e,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}roomDelta(e,t,n){if(n)return t;let i=this._doc.settings.grid,r=[Math.round(t[0]/i)*i,Math.round(t[1]/i)*i],a=At/this._view.scale;this._guides={};for(let l of this.floor?.rooms??[])if(l.id!==e.id)for(let c of l.points)for(let d of e.points){let u=Math.hypot(d[0]+t[0]-c[0],d[1]+t[1]-c[1]);u<a&&(a=u,r=[c[0]-d[0],c[1]-d[1]],this._guides={point:c})}return r}roomAt(e){return(this.floor?.rooms??[]).filter(i=>T(e,i.points)).sort((i,r)=>Ae(i.points)-Ae(r.points))[0]?.id??null}addDraftPoint(e,t){let n=this._draft;if(n.length>=3){let[r,s]=this.toScreen(n[0]);if(Math.hypot(r-t[0],s-t[1])<14){this.closeDraft();return}}let i=n[n.length-1];i&&Math.hypot(i[0]-e[0],i[1]-e[1])<1e-6||(this._draft=[...n,e])}closeDraft(){this._draft.length>=3&&Ae(this._draft)>.05&&this.addRoom(this._draft),this._draft=[],this._cursor=null,this._guides={}}measureStep(e){let t=this._draft[this._draft.length-1];if(!t||!(this._measureLen>0))return;let n=ze(t,this._measureLen,e),i=this._draft[0];if(this._draft.length>=3&&Math.hypot(n[0]-i[0],n[1]-i[1])<.01){this.closeDraft();return}this._draft=[...this._draft,n]}rectBySize(){let e=this._draft[0]??[0,0],[t,n]=this._rectSize;t>.1&&n>.1&&(this.addRoom([e,ze(e,t,"right"),ze(ze(e,t,"right"),n,"down"),ze(e,n,"down")]),this._draft=[])}renderMeasureForm(){let e=this._draft,t=e[0],n=e[e.length-1],i=t&&n&&e.length>1?Math.hypot(n[0]-t[0],n[1]-t[1]):0,r=[["up","\u2191"],["left","\u2190"],["right","\u2192"],["down","\u2193"]],s=a=>D(this.hass,a,2);return m`<section>
      <h3>${this.t("measure")}</h3>
      ${t?m`<p class="fp3d-sub">${this.t("measure_from",{x:s(t[0]),z:s(t[1])})}</p>
            <div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${this.t("measure_length")}
                <input
                  class="fp3d-measure-input"
                  type="number"
                  inputmode="decimal"
                  step="0.01"
                  min="0.05"
                  .value=${String(this._measureLen)}
                  @input=${a=>this._measureLen=parseFloat(a.target.value.replace(",","."))||0}
                  @keydown=${a=>{let l={ArrowRight:"right",ArrowLeft:"left",ArrowUp:"up",ArrowDown:"down"}[a.key];l?(a.preventDefault(),this.measureStep(l)):a.key==="Enter"&&this.closeDraft()}}
              /></label>
              <div class="fp3d-arrows fp3d-wide">
                ${r.map(([a,l])=>m`<button class="fp3d-btn fp3d-arrow-${a}" title=${this.t(`dir_${a}`)} @click=${()=>this.measureStep(a)}>${l}</button>`)}
              </div>
            </div>
            ${e.length>1?m`<ol class="fp3d-measure-list">
                  ${e.slice(1).map((a,l)=>m`<li>${s(Math.hypot(a[0]-e[l][0],a[1]-e[l][1]))} m</li>`)}
                </ol>`:y}
            <div class="fp3d-actions">
              <button class="fp3d-btn fp3d-primary" ?disabled=${e.length<3} @click=${()=>this.closeDraft()}>${this.t("measure_close")}</button>
              <button class="fp3d-btn" ?disabled=${e.length<2} @click=${()=>this._draft=e.slice(0,-1)}>${this.t("measure_undo")}</button>
            </div>
            ${e.length>=3?m`<p class="fp3d-sub">${this.t("measure_gap",{gap:s(i)})}</p>`:y}`:m`<p class="fp3d-sub">${this.t("measure_start")}</p>`}
      <h4 class="fp3d-lib-head">${this.t("rect_by_size")}</h4>
      <div class="fp3d-form">
        ${this.num(this.t("width"),this._rectSize[0],a=>this._rectSize=[Math.max(.1,a),this._rectSize[1]],.01,.1)}
        ${this.num(this.t("depth"),this._rectSize[1],a=>this._rectSize=[this._rectSize[0],Math.max(.1,a)],.01,.1)}
        <button class="fp3d-btn fp3d-wide" @click=${()=>this.rectBySize()}>${this.t("rect_add")}</button>
      </div>
      <p class="fp3d-sub">${this.t("measure_hint")}</p>
    </section>`}addFreeWall(e,t){if(!this.floor)return;let n={id:O("wall"),a:[S(e[0]),S(e[1])],b:[S(t[0]),S(t[1])],thickness:null};this.change((i,r)=>r.walls=[...r.walls??[],n]),this.selectItem("wall",n.id)}get freeWall(){return this._wallId?(this.floor?.walls??[]).find(e=>e.id===this._wallId):void 0}updateFreeWall(e){let t=this._wallId;t&&this.change((n,i)=>Object.assign((i.walls??[]).find(r=>r.id===t),e))}deleteFreeWall(){let e=this._wallId;!e||!this.isAdmin||!this.confirmFixedDelete("wall",e)||(this.change((t,n)=>{n.walls=(n.walls??[]).filter(i=>i.id!==e),n.openings=n.openings.filter(i=>i.wall!==e)}),this._wallId=null)}renderFreeWalls(e){return z`<g>${(e.walls??[]).map(t=>{let[n,i]=this.toScreen(t.a),[r,s]=this.toScreen(t.b),a=t.id===this._wallId;return z`<g data-free-wall=${t.id} class=${`fp3d-free-wall${a?" fp3d-free-wall-sel":""}`}>
        <line class="fp3d-hit" x1=${n} y1=${i} x2=${r} y2=${s} />
        <line class="fp3d-free-wall-line" x1=${n} y1=${i} x2=${r} y2=${s} />
      </g>
      ${a&&this.isAdmin&&!Zt(t,!0,this._doc.settings)?z`<g class="fp3d-vertex" data-wall-end=${`${t.id}:a`}><circle cx=${n} cy=${i} r="16" class="fp3d-hit" /><circle cx=${n} cy=${i} r="6" /></g>
            <g class="fp3d-vertex" data-wall-end=${`${t.id}:b`}><circle cx=${r} cy=${s} r="16" class="fp3d-hit" /><circle cx=${r} cy=${s} r="6" /></g>`:y}`})}</g>`}renderFreeWallForm(e){let t=this.isAdmin,n=Math.hypot(e.b[0]-e.a[0],e.b[1]-e.a[1]),i=r=>{let a=Math.max(.1,r)/(n||1);this.updateFreeWall({b:[S(e.a[0]+(e.b[0]-e.a[0])*a),S(e.a[1]+(e.b[1]-e.a[1])*a)]})};return m`<section>
      <div class="fp3d-h3row"><h3>${this.t("free_wall")}</h3>${this.fixButton("wall",e.id)}</div>
      <div class="fp3d-form">
        ${this.num(this.t("wall_length"),n,i,.01,.1)}
        ${this.num(this.t("wall_thickness"),e.thickness??this._doc.settings.wall_interior,r=>this.updateFreeWall({thickness:Math.min(1,Math.max(.02,r))}),.01,.02)}
        ${this.num(this.t("wall_height"),e.height??this.floor?.height??2.5,r=>this.updateFreeWall({height:r>=(this.floor?.height??2.5)-.005?null:Math.max(.05,r)}),.05,.05)}
      </div>
      ${t?m`<div class="fp3d-actions">
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFreeWall()}>${this.t("delete")}</button>
          </div>`:y}
      <p class="fp3d-sub">${this.t("free_wall_hint")}</p>
    </section>`}addHole(e,t){if(!this.floor)return;let n={id:O("hole"),type:"stairwell",x:S((e[0]+t[0])/2),z:S((e[1]+t[1])/2),w:S(t[0]-e[0]),d:S(t[1]-e[1]),h:.02,rotation:0,variant:null};this.change((i,r)=>r.furniture.push(n)),this.selectItem("furniture",n.id),this._tool="select"}addOutdoor(e){if(!this.floor)return;let t={id:O("outdoor"),type:"lawn",points:e.map(([n,i])=>[S(n),S(i)])};this.change((n,i)=>i.outdoor.push(t)),this.selectItem("outdoor",t.id),this._tool="select"}get outdoorArea(){return this._outdoorId?this.floor?.outdoor.find(e=>e.id===this._outdoorId):void 0}updateOutdoor(e){let t=this._outdoorId;this.change((n,i)=>Object.assign(i.outdoor.find(r=>r.id===t),e))}deleteOutdoor(){let e=this._outdoorId;!e||!this.isAdmin||!this.confirmFixedDelete("outdoor",e)||(this.change((t,n)=>n.outdoor=n.outdoor.filter(i=>i.id!==e)),this._outdoorId=null)}duplicateOutdoor(){let e=this.outdoorArea;if(!e||!this.isAdmin)return;let t={...e,id:O("outdoor"),points:e.points.map(([n,i])=>[S(n+.5),S(i+.5)])};this.change((n,i)=>i.outdoor.push(t)),this.selectItem("outdoor",t.id)}addRoom(e){if(!this.floor)return;let t=O("room"),n=this.floor.rooms.length+1;this.change((i,r)=>r.rooms.push({id:t,name:this.t("new_room",{n}),area_id:null,points:e.map(([s,a])=>[S(s),S(a)]),floor_material:"wood"})),this._roomId=t,this._vertex=null,this._tool="select"}onKey=e=>{if(e.composedPath().some(i=>i instanceof HTMLInputElement||i instanceof HTMLSelectElement||i instanceof HTMLTextAreaElement)||!this.isConnected||!this.offsetParent)return;let n=e.ctrlKey||e.metaKey;if(n&&e.key.toLowerCase()==="z")e.preventDefault(),e.shiftKey?this.redo():this.undo();else if(n&&e.key.toLowerCase()==="y")e.preventDefault(),this.redo();else if(n&&e.key.toLowerCase()==="d")e.preventDefault(),this.duplicateRoom();else if(e.key==="Delete"||e.key==="Backspace"&&(this._tool==="select"||this._tool==="furniture"))this._deviceId?this.deleteItem("device",this._deviceId):this._outdoorId?this.deleteOutdoor():this._wallId?this.deleteFreeWall():this._openingId?this.deleteOpening():this._furnitureId?this.deleteFurniture():this._vertex!==null?this.deleteVertex(this._vertex):this.deleteRoom();else if(e.key.toLowerCase()==="l"&&!n&&this._tool==="roof"&&this.roofSection&&!this._doc.settings.lock_plan)this.updateRoofSection({locked:!this.roofSection.locked});else if(e.key.toLowerCase()==="l"&&!n&&(this._furnitureId||this._deviceId)){let i=this.selectedFix;this.toggleFixed(i.kind,i.id)}else if(Object.hasOwn(Cr,e.key)&&!n&&(this._tool==="select"||this._tool==="furniture")){let i=e.altKey?.01:e.shiftKey?.1:this._doc.settings.grid,[r,s]=Cr[e.key];this.nudge(r*i,s*i)&&e.preventDefault()}else if(e.key.toLowerCase()==="r"&&!n&&this._furnitureId)this.rotateFurniture(e.shiftKey?-90:90);else if(e.key==="Backspace"&&this._tool==="polygon")this._draft=this._draft.slice(0,-1);else if(e.key==="Enter"&&this._tool==="polygon")this.closeDraft();else if(e.key==="Escape"){if(this._ctx){this._ctx=null;return}this._draft.length?this._draft=[]:this._tool!=="select"?this._tool="select":this.selectItem("room",null),this._cursor=null}};nudge(e,t){let n=this.floor;if(!n||!this.isAdmin)return!1;let i=this.selectedFix;if(i&&this.isFixedItem(i.kind,i.id))return this._fixedHint=!0,!0;let r=s=>[S(s[0]+e),S(s[1]+t)];if(this._deviceId){let s=this._deviceId;if(!n.placements.some(a=>a.entity_id===s))return!1;this.change((a,l)=>{let c=l.placements.find(d=>d.entity_id===s);[c.x,c.z]=r([c.x,c.z])})}else if(this._furnitureId){let s=this._furnitureId;this.change((a,l)=>{let c=l.furniture.find(d=>d.id===s);c&&([c.x,c.z]=r([c.x,c.z]))})}else if(this._openingId){let s=this.opening,a=s?Pe(s,n.rooms,n.walls??[]):null;if(!s||!a)return!1;let l=a.room.points[a.edge],c=a.room.points[(a.edge+1)%a.room.points.length],d=Math.hypot(c[0]-l[0],c[1]-l[1])||1,u=(e*(c[0]-l[0])+t*(c[1]-l[1]))/d;if(Math.abs(u)<1e-9)return!0;let h=Math.min(s.width,d)/2;this.updateOpening({offset:S(Math.min(d-h,Math.max(h,s.offset+u)))})}else if(this._wallId){let s=this._wallId;this.change((a,l)=>{let c=(l.walls??[]).find(d=>d.id===s);c&&([c.a,c.b]=[r(c.a),r(c.b)])})}else if(this._outdoorId){let s=this._outdoorId;this.change((a,l)=>{let c=l.outdoor.find(d=>d.id===s);c&&(c.points=c.points.map(r))})}else if(this._roomId){let s=this._roomId,a=this._vertex,l=n.rooms.find(d=>d.id===s);if(!l)return!1;let c=new Set(n.placements.filter(d=>T([d.x,d.z],l.points)).map(d=>d.entity_id));this.change((d,u)=>{let h=u.rooms.find(v=>v.id===s);if(a!==null&&a<h.points.length){h.points[a]=r(h.points[a]);return}h.points=h.points.map(r);for(let v of u.placements)c.has(v.entity_id)&&([v.x,v.z]=r([v.x,v.z]))})}else return!1;return!0}get freeHaFloors(){let e=new Set(this._doc.floors.map(t=>t.ha_floor));return Object.values(this.hass?.floors??{}).filter(t=>!e.has(t.floor_id)).sort((t,n)=>(t.level??99)-(n.level??99)||t.name.localeCompare(n.name))}unplacedAreas(e){if(!e.ha_floor)return[];let t=new Set(this._doc.floors.flatMap(n=>n.rooms.map(i=>i.area_id)));return Object.values(this.hass?.areas??{}).filter(n=>n.floor_id===e.ha_floor&&!t.has(n.area_id)).sort((n,i)=>n.name.localeCompare(i.name))}addFloor(e=null){let t=this._doc.floors,n=O("floor"),i=e?.name??(t.length===0?this.t("default_floor"):this.t("new_floor",{n:t.length})),r={...Pi(n,i,Ii(t,e?.level)),ha_floor:e?.floor_id??null},s=structuredClone(this._doc),a=s.floors.findIndex(l=>l.elevation>r.elevation);s.floors.splice(a<0?s.floors.length:a,0,r),this.setDoc(s),this._floorId=n,this._roomId=null,this._floorMenu=!1,this.fit()}addAreaRooms(e){let t=this.unplacedAreas(e);if(!t.length)return;let n=Ti(e,t,()=>O("room"));this.change((i,r)=>r.rooms.push(...n)),this.fit()}moveFloor(e){let t=this._doc.floors.findIndex(r=>r.id===this._floorId),n=t+e;if(t<0||n<0||n>=this._doc.floors.length)return;let i=structuredClone(this._doc);[i.floors[t],i.floors[n]]=[i.floors[n],i.floors[t]],this.setDoc(i)}deleteFloor(){let e=this.floor;if(!e||!confirm(this.t("delete_floor_confirm",{name:e.name})))return;let t=structuredClone(this._doc);t.floors=t.floors.filter(n=>n.id!==e.id),this.setDoc(t),this._floorId=t.floors[0]?.id??null,this._roomId=null}deleteRoom(){let e=this._roomId;!e||!this.isAdmin||!this.confirmFixedDelete("room",e)||(this.change((t,n)=>{let i=n.rooms.find(r=>r.id===e);n.rooms=n.rooms.filter(r=>r.id!==e),n.openings=n.openings.filter(r=>r.room_id!==e||r.wall),i&&(n.placements=n.placements.filter(r=>!T([r.x,r.z],i.points)))}),this._roomId=null,this._vertex=null)}duplicateRoom(){let e=this.room;if(!e||!this.isAdmin)return;let t=O("room");this.change((n,i)=>i.rooms.push({...structuredClone(e),id:t,points:e.points.map(([r,s])=>[S(r+.5),S(s+.5)])})),this._roomId=t}roofFixed(e){return!!e&&(!!e.locked||!!this._doc.settings.lock_plan)}renderRoofFloors(){let e=[...this._doc.floors].sort((t,n)=>n.elevation-t.elevation);return e.length<2?y:m`<div class="fp3d-seg fp3d-dev-source">
      ${e.map(t=>m`<button aria-pressed=${t.id===this._floorId} @click=${()=>this._floorId=t.id}>${t.name}</button>`)}
    </div>`}get roofSection(){return this._roofId?this._doc.settings.roof.sections?.find(e=>e.id===this._roofId):void 0}useRoofSections(e=!1){if(!this.isAdmin)return;let t=(this._doc.settings.roof.sections??[]).length>0;e&&t&&!confirm(this.t("roof_regen_confirm"))||(this.change(n=>{n.settings.roof.type="custom",(e||!t)&&(n.settings.roof.sections=mr(n,()=>O("roof")))}),this._roofId=null)}addRoofSection(e,t){if(!this.isAdmin)return;let n=fr(this._doc,e[0],e[1],t[0],t[1]),i=Math.min(...this._doc.floors.map(c=>c.elevation)),r=n===null,s=S(n??i+2.4),a=r?6:this._doc.settings.roof.pitch||35,l={id:O("roof"),x0:S(e[0]),z0:S(e[1]),x1:S(t[0]),z1:S(t[1]),shape:r?"pent":"gable",axis:t[0]-e[0]>=t[1]-e[1]?"x":"z",eave_a:s,eave_b:s,pitch_a:a,pitch_b:a,base:s,overhang:r?.15:null,...r?{open:!0}:{}};this.change(c=>{c.settings.roof.type="custom",c.settings.roof.sections=[...c.settings.roof.sections??[],l]}),this._roofId=l.id}updateRoofSection(e){let t=this._roofId;!t||!this.isAdmin||this.change(n=>{let i=n.settings.roof.sections?.find(r=>r.id===t);i&&Object.assign(i,e)})}deleteRoofSection(){let e=this._roofId;!e||!this.isAdmin||(this.change(t=>t.settings.roof.sections=(t.settings.roof.sections??[]).filter(n=>n.id!==e)),this._roofId=null)}duplicateRoofSection(){let e=this.roofSection;if(!e||!this.isAdmin)return;let t={...structuredClone(e),id:O("roof"),x0:S(e.x0+1),x1:S(e.x1+1),z0:S(e.z0+1),z1:S(e.z1+1)};this.change(n=>n.settings.roof.sections=[...n.settings.roof.sections??[],t]),this._roofId=t.id}renderRoofSections(){let e=this._doc.settings.roof,t=e.type==="custom"?e.sections??[]:[];return z`<g class="fp3d-roof-layer">${t.map((n,i)=>{let r=n.id===this._roofId,s=Ee(n),a=Ze(n),l=[s.at(s.u0,0),s.at(s.u1,0),s.at(s.u1,s.w),s.at(s.u0,s.w)].map(g=>this.toScreen(g)),c=(g,p)=>{let[w,b]=this.toScreen(g),[_,f]=this.toScreen(p);return z`<line x1=${w} y1=${b} x2=${_} y2=${f} />`},d;if(n.shape==="hip"){let g=Math.min((s.u1-s.u0)/2,Math.min(a.vr,s.w-a.vr)||s.w/2),p=s.at(s.u0+g,a.vr),w=s.at(s.u1-g,a.vr);d=z`${c(p,w)}${c(s.at(s.u0,0),p)}${c(s.at(s.u0,s.w),p)}${c(s.at(s.u1,0),w)}${c(s.at(s.u1,s.w),w)}`}else n.shape==="gable"?d=c(s.at(s.u0,a.vr),s.at(s.u1,a.vr)):n.shape==="pent"&&(d=c(s.at(s.u0,s.w),s.at(s.u1,s.w)));let[u,h]=this.toScreen(s.at((s.u0+s.u1)/2,s.w/2)),v=`${this.roofFixed(n)?"\u{1F512} ":""}${i+1} \xB7 ${n.open?this.t("roof_open_short"):this.t(`roof_shape_${n.shape}`)} \xB7 ${D(this.hass,vt(n),1)} m`;return z`<g data-roof=${n.id} class=${`fp3d-roof-sec${r?" fp3d-roof-sel":""}`}>
          <polygon points=${l.map(g=>g.join(",")).join(" ")} />
          <g class="fp3d-roof-ridge">${d}</g>
          <text x=${u} y=${h-14}>${v}</text>
        </g>
        ${r&&this.isAdmin&&!this.roofFixed(n)?[[0,0],[1,0],[1,1],[0,1]].map(([g,p])=>{let[w,b]=this.toScreen([g?Math.max(n.x0,n.x1):Math.min(n.x0,n.x1),p?Math.max(n.z0,n.z1):Math.min(n.z0,n.z1)]);return z`<g class="fp3d-vertex" data-roof-corner=${`${n.id}:${g}:${p}`}><circle cx=${w} cy=${b} r="16" class="fp3d-hit" /><circle cx=${w} cy=${b} r="6" /></g>`}):y}`})}</g>`}faceHit(e,t){return e.wall?{u:(t[0]-e.o[0])*e.eu[0]+(t[1]-e.o[2])*e.eu[2],s:Number.NaN}:St(e,t)}renderSolarFields(){let e=this._doc.settings.roof.solar??[];if(!e.length)return y;let t=V(this._doc);return z`<g class="fp3d-solar-layer">${e.map(n=>{let i=re(this._doc,n,t);if(!i||i.wall&&i.wall.floorId!==this._floorId)return y;let r=n.id===this._solarId,s=y;if(r&&i.unbounded&&this.isAdmin&&!n.locked){let[a,l]=Fn(i,n),c=(n.rotation??0)*Math.PI/180,d=.9+Math.max(...le(i,n,!0).flatMap(p=>p.corners.map(w=>Math.hypot(w[0]-a,w[2]-l))))*.5,[u,h]=this.toScreen([a,l]),[v,g]=this.toScreen([a+Math.sin(c)*d,l-Math.cos(c)*d]);s=z`<g class="fp3d-rotate" data-solar-turn=${n.id}>
          <line x1=${u} y1=${h} x2=${v} y2=${g} />
          <circle cx=${v} cy=${g} r="16" class="fp3d-hit" />
          <circle cx=${v} cy=${g} r="8" />
          <path d="M${v-4} ${g-1}a4 4 0 1 1 2 3.5" />
        </g>`}return z`<g data-solar=${n.id} class=${`fp3d-solar${r?" fp3d-solar-sel":""}${r&&this._solarPick?" fp3d-solar-pick":""}`}>${le(i,n,r).map(a=>{let l=i.wall?Math.max(.3,...a.corners.map(d=>(d[0]-i.o[0])*i.n[0]+(d[2]-i.o[2])*i.n[2])):0,c=i.wall?[a.corners[0],a.corners[1]].flatMap((d,u)=>{let h=[d[0],d[2]],v=[d[0]+i.n[0]*l,d[2]+i.n[2]*l];return u===0?[h,v]:[v,h]}):a.corners.map(d=>[d[0],d[2]]);return z`<polygon data-cell=${a.cell} class=${a.skipped?"fp3d-solar-off":""} points=${c.map(d=>this.toScreen(d).join(",")).join(" ")} />`})}</g>${s}`})}</g>`}renderRoofWindows(){let e=this._doc.settings.roof.windows??[];if(!e.length)return y;let t=new Map(V(this._doc).map(n=>[n.key,n]));return z`<g class="fp3d-roofwin-layer">${e.map(n=>{let i=t.get(n.face),r=i?Ar(i,n):null;return r?z`<g data-roofwin=${n.id} class=${`fp3d-roofwin${n.id===this._roofWinId?" fp3d-roofwin-sel":""}`}><polygon points=${r.map(s=>this.toScreen([s[0],s[2]]).join(",")).join(" ")} /></g>`:y})}</g>`}addRoofWindow(){if(!this.isAdmin)return;let e=V(this._doc).filter(i=>!i.flat),t=Mt(e,this._doc.settings.north??0)??V(this._doc)[0];if(!t)return;let n=Rn(t,O("rwin"));this.change(i=>i.settings.roof.windows=[...i.settings.roof.windows??[],n]),this._roofWinId=n.id,this._roofId=null}updateRoofWindow(e){let t=this._roofWinId;!t||!this.isAdmin||this.change(n=>{let i=n.settings.roof.windows?.find(s=>s.id===t);if(!i)return;Object.assign(i,e);let r=V(n).find(s=>s.key===i.face);r&&Object.assign(i,et(r,De(i)))})}deleteRoofWindow(){let e=this._roofWinId;!e||!this.isAdmin||(this.change(t=>t.settings.roof.windows=(t.settings.roof.windows??[]).filter(n=>n.id!==e)),this._roofWinId=null)}renderRoofWindowList(){let e=this._doc.settings.roof.windows??[],t=new Map(V(this._doc).map(n=>[n.key,n]));return m`<section>
      <h3>🪟 ${this.t("roof_windows")}</h3>
      <p class="fp3d-sub">${this.t(t.size?"roof_windows_hint":"solar_no_roof")}</p>
      ${e.length?m`<div class="fp3d-room-list">
            ${e.map((n,i)=>{let r=t.get(n.face);return m`<div class="fp3d-row">
                <button class="fp3d-dev-name" @click=${()=>{this._roofWinId=n.id,this._roofId=null}}>
                  <span>${this.t("roof_window")} ${i+1} · ${r?this.faceLabel(r):this.t("solar_face_gone")}</span>
                </button>
              </div>`})}
          </div>`:y}
      <div class="fp3d-actions"><button class="fp3d-btn" ?disabled=${!this.isAdmin||!t.size} @click=${()=>this.addRoofWindow()}>+ ${this.t("roof_window")}</button></div>
    </section>`}renderRoofWindowForm(e){let t=this.isAdmin,n=V(this._doc),i=l=>this.updateRoofWindow(l),r=(this._doc.settings.roof.windows??[]).findIndex(l=>l.id===e.id)+1,s=this.entityOptions(l=>l.startsWith("cover.")),a=this.entityOptions(l=>l.startsWith("binary_sensor.")||l.startsWith("sensor."));return m`<button class="fp3d-btn fp3d-back" @click=${()=>this._roofWinId=null}>‹ ${this.t("roof_sections")}</button>
      <section>
        <div class="fp3d-h3row">
          <h3>🪟 ${this.t("roof_window")} ${r}</h3>
          ${t?m`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!e.locked} title=${this.t("fix_hint")} @click=${()=>i({locked:!e.locked})}>
                ${e.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
              </button>`:y}
        </div>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_face")}
            <select ?disabled=${!t} @change=${l=>{let c=n.find(d=>d.key===l.target.value);c&&i({...Rn(c,e.id),w:e.w,h:e.h,cover:e.cover,contact:e.contact,tilt:e.tilt})}}>
              ${n.map(l=>m`<option value=${l.key} ?selected=${l.key===e.face}>${this.faceLabel(l)}</option>`)}
            </select></label
          >
          ${this.num(this.t("width"),e.w??.78,l=>i({w:Math.max(.3,Math.min(4,S(l)))}),.01,.3)}
          ${this.num(this.t("height_m"),e.h??1.18,l=>i({h:Math.max(.3,Math.min(4,S(l)))}),.01,.3)}
          ${this.num(this.t("solar_u"),e.u,l=>i({u:S(l)}),.05)}
          ${this.num(this.t("solar_v"),e.v,l=>i({v:S(l)}),.05)}
          ${this.entitySelect(this.t("cover_entity"),e.cover??null,void 0,s,l=>i({cover:l==="none"?null:l}))}
          ${this.entitySelect(this.t("contact_entity"),e.contact??null,void 0,a,l=>i({contact:l==="none"?null:l}))}
          ${this.entitySelect(this.t("roof_window_tilt"),e.tilt??null,void 0,a,l=>i({tilt:l==="none"?null:l}))}
        </div>
        <p class="fp3d-sub">${this.t("roof_window_hint")}</p>
        ${t?m`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoofWindow()}>${this.t("delete")}</button></div>`:y}
      </section>`}renderEnergyMarkers(){let e=this.floor;if(!e)return y;let t={inverter:"\u26A1",home_battery:"\u{1F50B}",wallbox:"\u{1F50C}"};return z`<g class="fp3d-energy-markers">${e.furniture.filter(n=>be.includes(n.type)).map(n=>{let[i,r]=this.toScreen([n.x,n.z]),s=n.id===this._furnitureId;return z`<g data-energy-device=${n.id} class=${`fp3d-energy-marker${s?" fp3d-energy-marker-sel":""}`}>
          <circle cx=${i} cy=${r} r="17" />
          <text x=${i} y=${r+6} class="fp3d-energy-icon">${t[n.type]??"\u26A1"}</text>
          ${s?z`<text x=${i} y=${r+32} class="fp3d-energy-name">${this.t(`furn_${n.type}`)}</text>`:y}
          <title>${this.t(`furn_${n.type}`)}</title>
        </g>`})}</g>`}faceLabel(e){if(e.key===pe)return this.t("solar_ground");if(e.wall){let i=this._doc.floors.find(r=>r.id===e.wall.floorId);return`${this.t("solar_wall")} ${i?.name??""} \xB7 ${this.t(`compass_${En(e,this._doc.settings.north??0)}`)} \xB7 ${D(this.hass,e.lu,1)} m`}let t=this._doc.settings.roof.sections??[],n=e.section?this.t("solar_section",{n:t.findIndex(i=>i.id===e.section)+1}):this.t("solar_main");return e.flat?`${n} \xB7 ${this.t("solar_flat")}`:`${n} \xB7 ${this.t(`compass_${En(e,this._doc.settings.north??0)}`)} \xB7 ${Math.round(e.pitch)}\xB0`}addSolarField(){if(!this.isAdmin)return;let e=V(this._doc),t=new Set((this._doc.settings.roof.solar??[]).map(s=>s.face)),n=this._doc.settings.north??0,i=Mt(e.filter(s=>!t.has(s.key)),n)??Mt(e,n);if(!i)return;let r=Le(i,O("pv"));this.change(s=>s.settings.roof.solar=[...s.settings.roof.solar??[],r]),this._solarId=r.id,this._roofId=null}selectSolar(e){this._solarId=e,this._roofId=null;let t=this._doc.settings.roof.solar?.find(n=>n.id===e);t?.face.startsWith("wall:")&&(this._floorId=t.face.split(":")[1])}addWallField(){if(!this.isAdmin)return;let e=this._floorId??this._doc.floors[0]?.id,t=e?xr(this._doc,O("pv"),e):null;t&&(this.change(n=>n.settings.roof.solar=[...n.settings.roof.solar??[],t]),this._solarId=t.id)}addGroundField(){if(!this.isAdmin)return;let e=Sn(this._doc,O("pv"));this.change(t=>t.settings.roof.solar=[...t.settings.roof.solar??[],e]),this._solarId=e.id}updateSolar(e){let t=this._solarId;!t||!this.isAdmin||this.change(n=>{let i=n.settings.roof.solar?.find(s=>s.id===t);if(!i)return;Object.assign(i,e);let r=re(n,i);r&&Object.assign(i,et(r,i))})}setSolarString(e){let t=this._solarId;!t||!this.isAdmin||this.change(n=>{let i=n.settings.roof,r=i.solar?.find(a=>a.id===t);if(!r)return;if(e==="new"){let a=i.strings??[],l={id:O("str"),name:this.t("solar_string_n",{n:a.length+1}),entity:r.entity??null,inverter:null};i.strings=[...a,l],r.string=l.id}else r.string=e;let s=new Set((i.solar??[]).map(a=>a.string).filter(Boolean));i.strings=(i.strings??[]).filter(a=>s.has(a.id))})}updateSolarString(e){let n=this._doc.settings.roof.solar?.find(i=>i.id===this._solarId)?.string;!n||!this.isAdmin||this.change(i=>{let r=i.settings.roof.strings?.find(s=>s.id===n);r&&Object.assign(r,e)})}toggleSolarCell(e){this.updateSolarField(t=>{let n=new Set(t.skip??[]);n.has(e)?n.delete(e):n.add(e),t.skip=n.size?[...n].sort():null})}updateSolarField(e){let t=this._solarId;!t||!this.isAdmin||this.change(n=>{let i=n.settings.roof.solar?.find(r=>r.id===t);i&&e(i)})}deleteSolar(){let e=this._solarId;!e||!this.isAdmin||(this.change(t=>{let n=t.settings.roof;n.solar=(n.solar??[]).filter(r=>r.id!==e);let i=new Set(n.solar.map(r=>r.string).filter(Boolean));n.strings=(n.strings??[]).filter(r=>i.has(r.id))}),this._solarId=null)}renderSolarList(){let e=this._doc.settings.roof.solar??[],t=V(this._doc),n=new Map(e.map(r=>[r.id,re(this._doc,r,t)])),i=this.isAdmin;return m`<section>
      ${this.renderRoofFloors()}
      <h3>☀ ${this.t("solar_fields")}</h3>
      <p class="fp3d-sub">${this.t(t.length?"solar_hint":"solar_no_roof")}</p>
      ${e.length?m`<div class="fp3d-room-list">
            ${e.map((r,s)=>{let a=n.get(r.id),l=a?le(a,r).length:0;return m`<div class="fp3d-row">
                <button
                  class="fp3d-dev-name"
                  @click=${()=>this.selectSolar(r.id)}
                >
                  <span>${r.name||`${this.t("solar_field")} ${s+1}`} · ${a?this.faceLabel(a):this.t("solar_face_gone")} · ${this.t("solar_summary",{n:l,kwp:D(this.hass,l*.4,1)})}</span>
                </button>
              </div>`})}
          </div>`:y}
      <div class="fp3d-actions">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!i||!t.length} @click=${()=>this.addSolarField()}>+ ${this.t("solar_add")}</button>
        <button class="fp3d-btn" ?disabled=${!i} @click=${()=>this.addGroundField()}>+ ${this.t("solar_add_ground")}</button>
        <button class="fp3d-btn" ?disabled=${!i||!this._floorId} @click=${()=>this.addWallField()}>+ ${this.t("solar_add_wall")}</button>
      </div>
      ${(this._doc.settings.roof.strings??[]).length?m`<h4 class="fp3d-lib-head">${this.t("solar_strings")}</h4>
            ${(this._doc.settings.roof.strings??[]).map(r=>{let s=e.filter(l=>l.string===r.id),a=s.reduce((l,c)=>l+(n.get(c.id)?le(n.get(c.id),c).length:0),0);return m`<p class="fp3d-sub">🔗 <b>${r.name}</b> · ${this.t("solar_string_sum",{fields:s.length,n:a,kwp:D(this.hass,a*.4,1)})}</p>`})}`:y}
    </section>`}renderSolarForm(e){let t=this.isAdmin,n=V(this._doc),i=Te(this._doc),r=re(this._doc,e,n),s=e.face===pe,a=r?le(r,e).length:0,l=$t(e),c=l.reduce((v,g)=>v+g,0)-(e.skip?.length??0),d=this.entityOptions(v=>v.startsWith("sensor.")&&this.hass?.states[v]?.attributes.device_class==="power"),u=v=>this.updateSolar(v),h=(this._doc.settings.roof.solar??[]).findIndex(v=>v.id===e.id)+1;return m`<button class="fp3d-btn fp3d-back" @click=${()=>this._solarId=null}>‹ ${this.t("solar_fields")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="fp3d-h3row">
          <h3>☀ ${e.name||`${this.t("solar_field")} ${h}`}</h3>
          ${t?m`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!e.locked} title=${this.t("fix_hint")} @click=${()=>this.updateSolar({locked:!e.locked})}>
                ${e.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
              </button>`:y}
        </div>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_name")}
            <input
              type="text"
              ?disabled=${!t}
              .value=${e.name??""}
              placeholder=${this.t("solar_name_hint")}
              @change=${v=>u({name:v.target.value.trim()||null})}
          /></label>
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_face")}
            <select
              ?disabled=${!t}
              @change=${v=>{let g=v.target.value,p={portrait:e.portrait,look:e.look,name:e.name,string:e.string,entity:e.entity,module_w:e.module_w,module_h:e.module_h};g===pe&&u({...Sn(this._doc,e.id),...p});let w=n.find(_=>_.key===g);w&&u({...Le(w,e.id),...p,rotation:null,flip:!1});let b=i.find(_=>_.key===g);b&&u({...Le(b,e.id),...p,rows:1,rotation:null,flip:!1})}}
            >
              ${r?y:m`<option selected>${this.t("solar_face_gone")}</option>`}
              ${n.map(v=>m`<option value=${v.key} ?selected=${v.key===e.face}>${this.faceLabel(v)}</option>`)}
              <option value=${pe} ?selected=${s}>${this.t("solar_ground")}</option>
              ${i.map(v=>m`<option value=${v.key} ?selected=${v.key===e.face}>${this.faceLabel(v)}</option>`)}
            </select></label
          >
          ${this.num(this.t("solar_rows"),l.length,v=>{let g=Math.max(1,Math.min(40,Math.round(v)));u(e.layout?.length?{layout:Array.from({length:g},(p,w)=>e.layout[w]??e.layout[e.layout.length-1]),rows:g}:{rows:g})},1,1)}
          <label class="fp3d-field"
            >${this.t("solar_cols")}
            <input
              type="text"
              inputmode="numeric"
              ?disabled=${!t}
              .value=${e.layout?.length?e.layout.join(", "):String(e.cols)}
              title=${this.t("solar_cols_hint")}
              @change=${v=>{let g=v.target.value.split(/[,;\s]+/).map(p=>parseInt(p,10)).filter(p=>Number.isFinite(p)&&p>=0);g.length&&(g.length===1?u({cols:Math.max(1,Math.min(60,g[0])),layout:null,skip:null}):u({layout:g.slice(0,40).map(p=>Math.min(60,p)),rows:Math.min(40,g.length),cols:Math.max(1,...g),skip:null}))}}
          /></label>
        </div>
        <p class="fp3d-sub">
          ${r&&!r.unbounded?m`${this.t("solar_face_size",{w:D(this.hass,r.lu,1),h:D(this.hass,r.ls,1)})} · `:y}${this.t("solar_cols_hint")}
        </p>
        ${e.layout?.length&&new Set(e.layout).size>1?m`<div class="fp3d-seg fp3d-dev-source">
              ${["left","center","right"].map(v=>m`<button aria-pressed=${(e.align??"left")===v} ?disabled=${!t} @click=${()=>u({align:v})}>${this.t(`solar_align_${v}`)}</button>`)}
            </div>`:y}
        <div class="fp3d-seg fp3d-dev-source">
          <button aria-pressed=${e.portrait!==!1} ?disabled=${!t} @click=${()=>u({portrait:!0})}>${this.t("solar_portrait")}</button>
          <button aria-pressed=${e.portrait===!1} ?disabled=${!t} @click=${()=>u({portrait:!1})}>${this.t("solar_landscape")}</button>
        </div>
        <div class="fp3d-seg fp3d-dev-source">
          <button aria-pressed=${e.look!=="blue"} ?disabled=${!t} @click=${()=>u({look:"black"})}>${this.t("solar_look_black")}</button>
          <button aria-pressed=${e.look==="blue"} ?disabled=${!t} @click=${()=>u({look:"blue"})}>${this.t("solar_look_blue")}</button>
        </div>
        <div class="fp3d-form">
          ${this.num(this.t("solar_module_w"),e.module_w??1.13,v=>u({module_w:Math.max(.3,Math.min(3,S(v)))}),.01,.3)}
          ${this.num(this.t("solar_module_h"),e.module_h??1.72,v=>u({module_h:Math.max(.3,Math.min(3,S(v)))}),.01,.3)}
        </div>
        <div class="fp3d-actions">
          <button class="fp3d-btn" aria-pressed=${this._solarPick} ?disabled=${!t} @click=${()=>this._solarPick=!this._solarPick}>${this._solarPick?"\u2713 ":""}${this.t("solar_pick")}</button>
          ${e.skip?.length?m`<button class="fp3d-btn" ?disabled=${!t} @click=${()=>u({skip:null})}>${this.t("solar_pick_all")}</button>`:y}
        </div>
        ${this._solarPick?m`<p class="fp3d-sub">${this.t("solar_pick_hint")}</p>`:y}
        <div class="fp3d-form">
          ${s?m`${this.num(this.t("solar_base"),e.base??0,v=>u({base:v>.001?Math.min(60,S(v)):null}),.05,0)}
                ${this.num(this.t("solar_rotation"),e.rotation??0,v=>u(tt(this._doc,e,v)),5)}
                <div class="fp3d-actions">
                  <button class="fp3d-chip" ?disabled=${!t} @click=${()=>u(tt(this._doc,e,(e.rotation??0)-15))}>↺ 15°</button>
                  <button class="fp3d-chip" ?disabled=${!t} @click=${()=>u(tt(this._doc,e,(e.rotation??0)+15))}>↻ 15°</button>
                </div>`:m`${this.num(this.t("solar_u"),e.u,v=>u({u:S(v)}),.05)} ${this.num(this.t(r?.wall?"solar_v_wall":"solar_v"),e.v,v=>u({v:S(v)}),.05)}`}
          ${r?.wall?m`${this.num(this.t("solar_tilt_wall"),e.tilt??0,v=>u({tilt:Math.max(0,Math.min(90,Math.round(v)))}),5,0)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" ?disabled=${!t} .checked=${!!e.flip} @change=${v=>u({flip:v.target.checked})} />
                  ${this.t("solar_flip_wall")}</label
                >`:y}
          ${r?.flat?m`${this.num(this.t("solar_tilt"),e.tilt??15,v=>u({tilt:Math.max(0,Math.min(45,Math.round(v)))}),1,0)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" ?disabled=${!t} .checked=${!!e.flip} @change=${v=>u({flip:v.target.checked})} />
                  ${this.t("solar_flip")}</label
                >`:y}
        </div>
        <p class="fp3d-sub">
          ${this.t("solar_summary",{n:a,kwp:D(this.hass,a*.4,1)})}${a<c?m` · <b>${this.t("solar_partial",{n:a,total:c})}</b>`:y}
        </p>
        <h4 class="fp3d-lib-head">🔗 ${this.t("solar_string")}</h4>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_string")}
            <select ?disabled=${!t} @change=${v=>{let g=v.target.value;this.setSolarString(g===""?null:g)}}>
              <option value="" ?selected=${!e.string}>${this.t("solar_string_none")}</option>
              ${(this._doc.settings.roof.strings??[]).map(v=>m`<option value=${v.id} ?selected=${v.id===e.string}>${v.name}</option>`)}
              <option value="new">+ ${this.t("solar_string_new")}</option>
            </select></label
          >
          ${(()=>{let v=this._doc.settings.roof.strings?.find(p=>p.id===e.string);if(!v)return this.entitySelect(this.t("solar_entity"),e.entity??null,void 0,d,p=>u({entity:p==="none"?null:p}));let g=this._doc.floors.flatMap(p=>p.furniture.filter(w=>w.type==="inverter").map((w,b)=>({id:w.id,label:`${this.t("furn_inverter")} ${b+1} \xB7 ${p.name}`})));return m`<label class="fp3d-field fp3d-wide"
                >${this.t("solar_string_name")}
                <input type="text" ?disabled=${!t} .value=${v.name} @change=${p=>this.updateSolarString({name:p.target.value.trim()||v.name})}
              /></label>
              ${this.entitySelect(this.t("solar_string_entity"),v.entity??null,void 0,d,p=>this.updateSolarString({entity:p==="none"?null:p}))}
              <label class="fp3d-field fp3d-wide"
                >${this.t("solar_string_inverter")}
                <select ?disabled=${!t} @change=${p=>this.updateSolarString({inverter:p.target.value||null})}>
                  <option value="" ?selected=${!v.inverter}>${this.t(g.length?"solar_string_inverter_none":"solar_string_inverter_missing")}</option>
                  ${g.map(p=>m`<option value=${p.id} ?selected=${p.id===v.inverter}>${p.label}</option>`)}
                </select></label
              >`})()}
        </div>
        <p class="fp3d-sub">${this.t("solar_string_hint")}</p>
        <p class="fp3d-sub">${this.t("solar_form_hint")}</p>
        ${t?m`<div class="fp3d-actions">
              <button class="fp3d-btn" ?disabled=${!r} @click=${()=>r&&u({...Le(r,e.id),portrait:e.portrait})}>${this.t("solar_fit")}</button>
              <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteSolar()}>${this.t("delete")}</button>
            </div>`:y}
      </section>`}renderRoofPanel(){let e=this._doc.settings.roof,t=this.isAdmin,n=e.type==="custom"?this.roofSection:void 0,i=this._roofWinId?e.windows?.find(s=>s.id===this._roofWinId):void 0;if(i)return this.renderRoofWindowForm(i);if(n)return this.renderRoofSectionForm(n);let r=e.type==="custom"?e.sections??[]:[];return m`<section>
      ${this.renderRoofFloors()}
      <h3>${this.t("roof_sections")}</h3>
      <p class="fp3d-sub">${this.t("roof_sections_hint")}</p>
      ${e.type!=="custom"?m`<div class="fp3d-actions"><button class="fp3d-btn fp3d-primary" ?disabled=${!t} @click=${()=>this.useRoofSections()}>${this.t("roof_sections_start")}</button></div>`:m`<div class="fp3d-room-list">
              ${r.map((s,a)=>m`<div class="fp3d-row">
                  <button class="fp3d-dev-name" @click=${()=>this._roofId=s.id}>
                    <span>${a+1} · ${this.t(`roof_shape_${s.shape}`)} · ${D(this.hass,Math.abs(s.x1-s.x0),1)} × ${D(this.hass,Math.abs(s.z1-s.z0),1)} m · ${this.t("roof_ridge_height")} ${D(this.hass,vt(s),1)} m</span>
                  </button>
                </div>`)}
            </div>
            <div class="fp3d-actions">
              <button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.useRoofSections(!0)}>${this.t("roof_sections_regen")}</button>
              <button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.change(s=>s.settings.roof.type="gable")}>${this.t("roof_sections_off")}</button>
            </div>`}
    </section>
    ${this.renderRoofWindowList()}`}renderEnergyPanel(){let e=this._solarId?this._doc.settings.roof.solar?.find(n=>n.id===this._solarId):void 0;if(e)return this.renderSolarForm(e);let t=this._furnitureId?this.floor?.furniture.find(n=>n.id===this._furnitureId&&be.includes(n.type)):void 0;return t?m`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("furniture",null)}>‹ ${this.t("tool_energy")}</button>
        ${this.renderFurnitureForm(t)}`:m`${this.renderSolarList()}${this.renderEnergyDevices()}${this.renderSolarProTeaser()}`}renderSolarProTeaser(){let e=new URL("./images/solar-pro.jpg",import.meta.url).href;return m`<section class="fp3d-teaser">
      <div class="fp3d-teaser-head"><b>☀ ${this.t("solar_pro_title")}</b><span class="fp3d-teaser-soon">${this.t("solar_pro_soon")}</span></div>
      <img src=${e} alt=${this.t("solar_pro_title")} loading="lazy" />
      <ul>
        <li>${this.t("solar_pro_1")}</li>
        <li>${this.t("solar_pro_2")}</li>
        <li>${this.t("solar_pro_3")}</li>
        <li>${this.t("solar_pro_4")}</li>
      </ul>
      <p class="fp3d-sub">${this.t("solar_pro_free")}</p>
    </section>`}addEnergyDevice(e){let t=this.floor;if(!t||!this.isAdmin)return;let n=b=>`${b.name} ${b.area_id&&this.hass?.areas?.[b.area_id]?.name||""} ${b.area_id??""}`.toLowerCase(),i=t.rooms.filter(b=>b.points.length>=3),r=b=>i.find(_=>b.test(n(_))),s=i.find(b=>t.furniture.some(_=>_.type==="parking"&&T([_.x,_.z],b.points))),a=r(/garage|carport/)??s,l=r(/hwr|hauswirt|technik|keller|abstell|utility|basement|boiler|heiz/),c=(e==="wallbox"?a:l??a)??this.room??i.sort((b,_)=>Math.abs(q(_.points))-Math.abs(q(b.points)))[0],[d,u,h]=dt(e),[v,g]=c?ne(c.points):this.toWorld(this._size.w/2,this._size.h/2);if(c){let[b,_]=ne(c.points),f=null,k=new Set(t.openings.filter(M=>M.room_id===c.id).map(M=>M.edge)),x=c.points.some((M,E)=>!k.has(E));c.points.forEach((M,E)=>{if(x&&k.has(E))return;let F=c.points[(E+1)%c.points.length],A=Math.hypot(F[0]-M[0],F[1]-M[1]);if(f&&A<=f.l)return;let R=(M[0]+F[0])/2,P=(M[1]+F[1])/2,I=-(F[1]-M[1])/A,L=(F[0]-M[0])/A;(b-R)*I+(_-P)*L<0&&([I,L]=[-I,-L]),f={mx:R,mz:P,nx:I,nz:L,l:A}});let $=f;$&&([v,g]=[$.mx+$.nx*(u/2+.25),$.mz+$.nz*(u/2+.25)])}let p={id:O("furniture"),type:e,x:S(v),z:S(g),rotation:0,w:d,d:u,h,variant:null},w=c?bt({...t,furniture:[...t.furniture,p]},p,this._doc.settings.wall_interior):null;w&&Object.assign(p,{x:S(w.x),z:S(w.z),rotation:w.rotation}),this.change((b,_)=>_.furniture.push(p)),this.selectItem("furniture",p.id),this.showPoint(p.x,p.z)}renderEnergyDevices(){let e=this.isAdmin,t=this._doc.floors.flatMap(n=>n.furniture.filter(i=>be.includes(i.type)).map(i=>({fl:n,m:i})));return m`<section>
      <h3>⚡ ${this.t("energy_devices")}</h3>
      <p class="fp3d-sub">${this.t("energy_devices_hint")}</p>
      ${t.length?m`<div class="fp3d-room-list">
            ${t.map(({fl:n,m:i})=>m`<div class="fp3d-row">
                <button
                  class="fp3d-dev-name"
                  @click=${()=>{this._floorId=n.id,this._solarId=null,this.selectItem("furniture",i.id),this.showPoint(i.x,i.z)}}
                >
                  <span>${this.t(`furn_${i.type}`)} · ${n.name}</span>
                </button>
              </div>`)}
          </div>`:y}
      <div class="fp3d-actions">
        ${be.map(n=>m`<button
            class="fp3d-btn"
            ?disabled=${!e||!this.floor}
            @click=${()=>{this._solarId=null,this.addEnergyDevice(n)}}
          >
            + ${this.t(`furn_${n}`)}
          </button>`)}
      </div>
    </section>`}renderRoofSectionForm(e){let t=this.isAdmin,n=h=>this.updateRoofSection(h),i=e.axis==="x"?[this.t("roof_side_top"),this.t("roof_side_bottom")]:[this.t("roof_side_left"),this.t("roof_side_right")],[r,s]=e.flip?[i[1],i[0]]:i,a=e.shape==="flat",l=e.shape==="pent",c=h=>h.findIndex(v=>v.id===e.id)+1,d=(h,v,g,p=.05,w=0)=>this.num(h,v,b=>g(Math.max(w,S(b))),p,w),u=!!this._doc.settings.lock_plan;return m`<button class="fp3d-btn fp3d-back" @click=${()=>this._roofId=null}>‹ ${this.t("roof_sections")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="fp3d-h3row">
          <h3>${this.t("roof_section")} ${c(this._doc.settings.roof.sections??[])}</h3>
          ${t?u?m`<button class="fp3d-btn fp3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>🔒 ${this.t("plan_locked")}</button>`:m`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!e.locked} title=${this.t("fix_hint")} @click=${()=>n({locked:!e.locked})}>
                  ${e.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
                </button>`:y}
        </div>
        <div class="fp3d-seg fp3d-dev-source">
          ${Mi.map(h=>m`<button aria-pressed=${e.shape===h} ?disabled=${!t} @click=${()=>n({shape:h})}>${this.t(`roof_shape_${h}`)}</button>`)}
        </div>
        ${a?y:m`<div class="fp3d-seg fp3d-dev-source">
              <button aria-pressed=${e.axis==="x"} ?disabled=${!t} @click=${()=>n({axis:"x"})}>${this.t("roof_axis_x")}</button>
              <button aria-pressed=${e.axis==="z"} ?disabled=${!t} @click=${()=>n({axis:"z"})}>${this.t("roof_axis_z")}</button>
            </div>`}
        <label class="fp3d-check fp3d-wide" title=${this.t("roof_open_hint")}
          ><input type="checkbox" .checked=${!!e.open} ?disabled=${!t} @change=${h=>n({open:h.target.checked})} />
          ${this.t("roof_open")}</label
        >
        <div class="fp3d-form">
          ${a?d(this.t("roof_height"),e.eave_a,h=>n({eave_a:h,eave_b:h})):m`${d(`${this.t("roof_eave")} ${l?"":r}`,e.eave_a,h=>n({eave_a:h}))}
              ${l?y:d(`${this.t("roof_eave")} ${s}`,e.eave_b,h=>n({eave_b:h}))}
              ${d(`${this.t("roof_pitch_short")} ${l?"":r}`,e.pitch_a,h=>n({pitch_a:Math.min(75,h)}),1,0)}
              ${l?y:d(`${this.t("roof_pitch_short")} ${s}`,e.pitch_b,h=>n({pitch_b:Math.min(75,h)}),1,0)}`}
          ${d(this.t("roof_base"),e.base,h=>n({base:h}))}
          ${d(this.t("roof_overhang"),e.overhang??this._doc.settings.roof.overhang,h=>n({overhang:Math.min(2,h)}),.05,0)}
        </div>
        <p class="fp3d-sub">${this.t("roof_ridge_height")}: ${D(this.hass,vt(e),2)} m · ${this.t("roof_section_hint")}</p>
        ${t?m`<div class="fp3d-actions">
              ${a?y:m`<button class="fp3d-btn" title=${this.t("roof_swap_hint")} @click=${()=>n({flip:!e.flip})}>⇅ ${this.t("roof_swap")}</button>`}
              <button class="fp3d-btn" @click=${()=>this.duplicateRoofSection()}>${this.t("duplicate")}</button>
              <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoofSection()}>${this.t("delete")}</button>
            </div>`:y}
      </section>`}fixItem(e,t,n){if(e)switch(t){case"room":return e.rooms.find(i=>i.id===n);case"opening":return e.openings.find(i=>i.id===n);case"furniture":return e.furniture.find(i=>i.id===n);case"device":return e.placements.find(i=>i.entity_id===n);case"wall":return(e.walls??[]).find(i=>i.id===n);case"outdoor":return e.outdoor.find(i=>i.id===n)}}isFixedItem(e,t){return Zt(this.fixItem(this.floor,e,t),e!=="furniture"&&e!=="device",this._doc.settings)}toggleFixed(e,t){if(!this.isAdmin||e!=="furniture"&&e!=="device")return;let n=!this.isFixedItem(e,t);this.change((i,r)=>{let s=this.fixItem(r,e,t);s&&(s.locked=n)})}toggleLockPlan(){this.isAdmin&&this.change(e=>e.settings.lock_plan=!e.settings.lock_plan)}get selectedFix(){return this._deviceId?{kind:"device",id:this._deviceId}:this._openingId?{kind:"opening",id:this._openingId}:this._furnitureId?{kind:"furniture",id:this._furnitureId}:this._wallId?{kind:"wall",id:this._wallId}:this._outdoorId?{kind:"outdoor",id:this._outdoorId}:this._roomId?{kind:"room",id:this._roomId}:null}confirmFixedDelete(e,t){return!this.isFixedItem(e,t)||confirm(this.t("fixed_delete_confirm"))}onContextMenu(e){e.preventDefault(),!(this._tool!=="select"&&this._tool!=="furniture")&&(this.drag=null,this.openContext(e.target,this.localPoint(e)))}openContext(e,t){if(!this.isAdmin||!this.floor)return;let n=this.toWorld(...t),i=g=>e.closest(`[${g}]`)?.getAttribute(g)??null,r=null,s=i("data-device"),a=i("data-opening"),l=e.closest("[data-vertex], [data-mid]")?null:i("data-furniture"),c=i("data-free-wall"),d=i("data-outdoor"),u=i("data-room")??this.roomAt(n);if(s?r=["device",s]:a?r=["opening",a]:l?r=["furniture",l]:c?r=["wall",c]:d&&!u?r=["outdoor",d]:u&&(r=["room",u]),!r){this._ctx=null;return}let[h,v]=r;this.selectItem(h,v),(h==="opening"||h==="furniture")&&(this._roomId=this._roomId??u),this._ctx={x:t[0],y:t[1],kind:h,id:v}}deleteItem(e,t){if(e==="device"){if(!this.confirmFixedDelete(e,t))return;this.removeDevice(t),this._deviceId=null;return}e==="room"?this.deleteRoom():e==="opening"?this.deleteOpening():e==="furniture"?this.deleteFurniture():e==="wall"?this.deleteFreeWall():this.deleteOutdoor()}renderContext(){let e=this._ctx;if(!e)return y;let t=this.isFixedItem(e.kind,e.id),n=this.renderRoot.querySelector(".fp3d-canvas-wrap"),i=Math.max(4,Math.min(e.x,(n?.clientWidth??800)-190)),r=Math.max(4,Math.min(e.y,(n?.clientHeight??600)-190)),s=a=>()=>{this._ctx=null,a()};return m`<div class="fp3d-ctx" style=${`left:${i}px;top:${r}px`} @pointerdown=${a=>a.stopPropagation()} @contextmenu=${a=>a.preventDefault()}>
      ${e.kind==="furniture"||e.kind==="device"?m`<button title=${this.t("fix_hint")} @click=${s(()=>this.toggleFixed(e.kind,e.id))}>${t?`\u{1F513} ${this.t("unfix")}`:`\u{1F512} ${this.t("fix")}`}</button>`:m`<button title=${this.t("lock_plan_hint")} @click=${s(()=>this.toggleLockPlan())}>${this._doc.settings.lock_plan?`\u{1F513} ${this.t("plan_unlock")}`:`\u{1F512} ${this.t("plan_lock")}`}</button>`}
      ${e.kind==="room"?m`<button @click=${s(()=>this.duplicateRoom())}>⧉ ${this.t("duplicate")}</button>`:y}
      ${e.kind==="furniture"?m`<button @click=${s(()=>this.duplicateFurniture())}>⧉ ${this.t("duplicate")}</button>
            <button ?disabled=${t} @click=${s(()=>this.rotateFurniture(90))}>↻ ${this.t("ctx_rotate")}</button>`:y}
      <button class="fp3d-ctx-danger" @click=${s(()=>this.deleteItem(e.kind,e.id))}>✕ ${this.t("delete")}</button>
    </div>`}fixButton(e,t){if(!this.isAdmin)return y;if(e!=="furniture"&&e!=="device")return this._doc.settings.lock_plan?m`<button class="fp3d-btn fp3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>
            🔒 ${this.t("plan_locked")}
          </button>`:y;let n=this.isFixedItem(e,t);return m`<button class="fp3d-btn fp3d-fix" aria-pressed=${n} title=${this.t("fix_hint")} @click=${()=>this.toggleFixed(e,t)}>
      ${n?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
    </button>`}selectItem(e,t){if(this._notice=null,t&&(this._sideOpen=!0),this._outdoorId=e==="outdoor"?t:null,this._wallId=e==="wall"?t:null,this._edgeHi=null,(e==="outdoor"||e==="wall")&&(this._roomId=null),(e!=="room"||t!==this._roomId)&&(this._vertex=null),this._roomId=e==="room"?t:this._roomId,this._openingId=e==="opening"?t:null,this._furnitureId=e==="furniture"?t:null,this._deviceId=e==="device"?t:null,e==="device"&&t){let n=this.floor?.placements.find(i=>i.entity_id===t);this._roomId=(n&&this.roomAt([n.x,n.z]))??this._roomId}e==="opening"&&t&&(this._roomId=this.floor?.openings.find(n=>n.id===t)?.room_id??this._roomId)}get opening(){return this._openingId?this.floor?.openings.find(e=>e.id===this._openingId):void 0}get furnitureItem(){return this._furnitureId?this.floor?.furniture.find(e=>e.id===this._furnitureId):void 0}offsetOnEdge(e,t,n,i,r){let s=e.points[t],a=e.points[(t+1)%e.points.length],l=Math.hypot(a[0]-s[0],a[1]-s[1])||1,c=((n[0]-s[0])*(a[0]-s[0])+(n[1]-s[1])*(a[1]-s[1]))/l,d=r?.01:this._doc.settings.grid,u=Math.min(i,l)/2;return S(Math.min(l-u,Math.max(u,Math.round(c/d)*d)))}placeOpening(e,t){let n=this.floor;if(!n||!this.isAdmin)return!1;let i=null;for(let p of n.walls??[]){let w=Pe({room_id:"",edge:0,wall:p.id},n.rooms,n.walls??[]);if(!w)continue;let[b,_]=this.toScreen(p.a),[f,k]=this.toScreen(p.b),x=(f-b)**2+(k-_)**2||1,$=Math.min(1,Math.max(0,((t[0]-b)*(f-b)+(t[1]-_)*(k-_))/x)),M=Math.hypot(t[0]-b-(f-b)*$,t[1]-_-(k-_)*$),E=[(p.a[0]+p.b[0])/2,(p.a[1]+p.b[1])/2],F=n.rooms.find(A=>A.points.length>=3&&T(E,A.points));M<At*2.2&&(!i||M-1<i.d)&&(i={room:w.room,edge:0,d:M-1,wall:p.id,roomId:F?.id??p.id})}for(let p of n.rooms)for(let w=0;w<p.points.length;w++){let[b,_]=this.toScreen(p.points[w]),[f,k]=this.toScreen(p.points[(w+1)%p.points.length]),x=(f-b)**2+(k-_)**2||1,$=Math.min(1,Math.max(0,((t[0]-b)*(f-b)+(t[1]-_)*(k-_))/x)),M=Math.hypot(t[0]-b-(f-b)*$,t[1]-_-(k-_)*$),E=M-(p.id===this._roomId?.5:0);M<At*2.2&&(!i||E<i.d)&&(i={room:p,edge:w,d:E})}if(!i)return!1;let{room:r,edge:s,wall:a}=i,l=r.points[s],c=r.points[(s+1)%r.points.length],d=Math.hypot(c[0]-l[0],c[1]-l[1]),u=ut[e],h=u.type,v=S(Math.min(u.width,Math.max(.3,d-.1))),g={id:O("opening"),room_id:i.roomId??r.id,edge:s,...a?{wall:a}:{},offset:this.offsetOnEdge(r,s,this.toWorld(...t),v,!1),width:v,type:h,sill:u.sill,height:u.height,hinge:"left",leaves:u.leaves,swing:"in",cover:null,contact:null,contact2:null,tilt:null};return this.change((p,w)=>w.openings.push(g)),this._tool="select",this.selectItem("opening",g.id),!0}setOpeningPreset(e,t){let n=ut[t];this._openingPreset=t;let i=sn(e)===t,r="style"in n?n.style:null;this.updateOpening({type:n.type,leaves:n.leaves,sill:n.sill,height:n.height,style:r,...i?{}:{width:n.width}})}updateOpening(e){let t=this._openingId;this.change((n,i)=>Object.assign(i.openings.find(r=>r.id===t),e))}deleteOpening(){let e=this._openingId;!e||!this.isAdmin||!this.confirmFixedDelete("opening",e)||(this.change((t,n)=>n.openings=n.openings.filter(i=>i.id!==e)),this._openingId=null)}addFurniture(e){let t=this.floor;if(!t||!this.isAdmin)return;let[n,i,r]=dt(e),s=this._doc.floors.filter(h=>h.elevation>t.elevation).sort((h,v)=>h.elevation-v.elevation)[0],a=e==="stairs"?S(s?s.elevation-t.elevation:t.height+.25):r,l=this.room,[c,d]=l?ne(l.points):this.toWorld(this._size.w/2,this._size.h/2),u={id:O("furniture"),type:e,x:S(c),z:S(d),rotation:0,w:n,d:i,h:a,variant:null};this.change((h,v)=>v.furniture.push(u)),this.selectItem("furniture",u.id),this.showPoint(u.x,u.z)}snapToWall(e){return this.floor?bt(this.floor,e,this._doc.settings.wall_interior):null}updateFurniture(e){let t=this._furnitureId;this.change((n,i)=>Object.assign(i.furniture.find(r=>r.id===t),e))}rotateFurniture(e){let t=this.furnitureItem;!t||!this.isAdmin||this.updateFurniture({rotation:((t.rotation+e)%360+360)%360})}deleteFurniture(){let e=this._furnitureId;!e||!this.isAdmin||!this.confirmFixedDelete("furniture",e)||(this.change((t,n)=>n.furniture=n.furniture.filter(i=>i.id!==e)),this._furnitureId=null)}duplicateFurniture(){let e=this.furnitureItem;if(!e||!this.isAdmin)return;let t={...structuredClone(e),id:O("furniture"),x:S(e.x+.3),z:S(e.z+.3)};this.change((n,i)=>i.furniture.push(t)),this.selectItem("furniture",t.id)}placeDevices(e){let t=this.room;if(!t||!e.length||!this.isAdmin)return;let n=new Set(e);this.change((i,r)=>{for(let a of i.floors)a.placements=a.placements.filter(l=>!n.has(l.entity_id)),a.furniture=a.furniture.filter(l=>!(oe(l.type)&&l.entity&&n.has(l.entity)));let s=[...r.placements.map(a=>[a.x,a.z]),...r.furniture.filter(a=>oe(a.type)).map(a=>[a.x,a.z])];for(let a of Qi(t,e,s)){if(!a.entity_id.startsWith("light.")){r.placements.push(a);continue}let[l,c,d]=te.lamp_ceiling;r.furniture.push({id:O("furniture"),type:"lamp_ceiling",x:a.x,z:a.z,rotation:0,w:l,d:c,h:d,variant:null,entity:a.entity_id,power:null})}})}get device(){return this._deviceId?this.floor?.placements.find(e=>e.entity_id===this._deviceId):void 0}updateDevice(e){let t=this._deviceId;this.change((n,i)=>Object.assign(i.placements.find(r=>r.entity_id===t),e))}centreDevice(){let e=this.device,t=e?this.roomAt([e.x,e.z]):null,n=this.floor?.rooms.find(s=>s.id===t);if(!e||!n)return;let[i,r]=ne(n.points);this.updateDevice({x:S(i),z:S(r)})}spreadCeilingLights(e){let t=this.floor;if(!t)return;let n=t.placements.filter(u=>W(u.entity_id)==="light"&&(u.mount??"ceiling")==="ceiling"&&T([u.x,u.z],e.points));if(n.length<2)return;let i=J(e.points),r=i.x1-i.x0,s=i.z1-i.z0,a=Math.max(1,Math.round(Math.sqrt(n.length*r/Math.max(.1,s)))),l=Math.ceil(n.length/a),c=n.map((u,h)=>{let v=Math.floor(h/a),g=v===l-1?n.length-a*(l-1):a,p=h-v*a;return[S(i.x0+r/g*(p+.5)),S(i.z0+s/l*(v+.5))]}),d=n.map(u=>u.entity_id);this.change((u,h)=>{d.forEach((v,g)=>Object.assign(h.placements.find(p=>p.entity_id===v),{x:c[g][0],z:c[g][1]}))})}closeFloorGaps(){let e=this.floor;if(!e||!this.isAdmin)return;let{rooms:t,gaps:n}=or(e.rooms);if(!n.length){this._notice=this.t("gaps_none");return}let i=ar(n);this.change((r,s)=>{s.rooms=t,i&&(r.settings.wall_interior=i)}),this._notice=i?this.t("gaps_closed_wall",{n:n.length,t:D(this.hass,i,2)}):this.t("gaps_closed",{n:n.length})}removeDevice(e){this.change(t=>{for(let n of t.floors)n.placements=n.placements.filter(i=>i.entity_id!==e),n.furniture=n.furniture.filter(i=>!(oe(i.type)&&i.entity===e))})}deleteVertex(e){let t=this.room;if(!t||t.points.length<=3)return;let n=t.points.length,i=(e-1+n)%n;this.change((r,s)=>{let a=s.rooms.find(l=>l.id===t.id);a.points.splice(e,1),a.wall_heights&&a.wall_heights.splice(e,1),s.openings=s.openings.filter(l=>l.room_id!==t.id||l.wall||l.edge!==e&&l.edge!==i).map(l=>l.room_id===t.id&&!l.wall&&l.edge>e?{...l,edge:l.edge-1}:l)}),this._vertex=null}updateFloor(e){this.change((t,n)=>Object.assign(n,e))}updateRoom(e){let t=this._roomId;this.change((n,i)=>Object.assign(i.rooms.find(r=>r.id===t),e))}setArea(e){let t=this.room;if(!t)return;let n=e?this.hass?.areas?.[e]:void 0,i=!t.name||/^(Raum|Room) \d+$/.test(t.name)||Object.values(this.hass?.areas??{}).some(r=>r.name===t.name);this.updateRoom({area_id:e||null,...n&&i?{name:n.name}:{}})}setRect(e,t){let n=this.room;if(!n||!Number.isFinite(t))return;let i=J(n.points),{x0:r,z0:s,x1:a,z1:l}=i;e==="x"&&([r,a]=[t,t+(a-r)]),e==="z"&&([s,l]=[t,t+(l-s)]),e==="w"&&t>.05&&(a=r+t),e==="d"&&t>.05&&(l=s+t),this.updateRoom({points:[[S(r),S(s)],[S(a),S(s)],[S(a),S(l)],[S(r),S(l)]]})}setPoint(e,t,n){let i=this.room;if(!i||!Number.isFinite(n))return;let r=i.points.map(s=>[...s]);r[e][t]=S(n),this.updateRoom({points:r})}async loadImage(e){this.loadingImages.add(e);try{let t=await Nt(this.hass,e),n=new Image;n.src=t,await n.decode(),this._images={...this._images,[e]:{url:t,aspect:n.naturalHeight/n.naturalWidth}}}catch{}}async uploadBackground(e){let t=e.target,n=t.files?.[0];if(t.value="",!n)return;let i=await createImageBitmap(n),r=Math.min(1,2048/Math.max(i.width,i.height)),s=document.createElement("canvas");s.width=Math.round(i.width*r),s.height=Math.round(i.height*r),s.getContext("2d").drawImage(i,0,0,s.width,s.height);let a=s.toDataURL("image/jpeg",.85),l=O("img");await ct(this.hass,l,a),this._images={...this._images,[l]:{url:a,aspect:s.height/s.width}};let c=this.floor?.rooms.length?J(this.floor.rooms.flatMap(d=>d.points)):null;this.updateFloor({background:{image_id:l,x:c?c.x0:0,z:c?c.z0:0,width:c?Math.max(4,S(c.x1-c.x0)):12,opacity:.5}})}render(){let e=this.floor,t=e?Re(e.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},e.walls??[]):null;return m`
      ${this.renderPreview()}
      <div class="fp3d-editor ${this.narrow?"fp3d-narrow":""}">
        <div class="fp3d-main">
          <div class="fp3d-toolbar">
            <div class="fp3d-seg" role="group" aria-label=${this.t("tool_select")}>
              ${["select","rect","polygon","wall","opening","furniture","outdoor","hole","roof","energy"].map(n=>m`<button
                  aria-pressed=${this._tool===n}
                  ?disabled=${!e||!this.isAdmin&&n!=="select"}
                  @click=${()=>{this._tool=n,this._draft=[],this._cursor=null,this._sideOpen=n!=="select"}}
                >
                  ${this.t(`tool_${n}`)}
                </button>`)}
            </div>
            <div class="fp3d-seg">
              <button ?disabled=${!this._canUndo} @click=${()=>this.undo()} title="Ctrl+Z">${this.t("undo")}</button>
              <button ?disabled=${!this._canRedo} @click=${()=>this.redo()} title="Ctrl+Y">${this.t("redo")}</button>
              <button @click=${()=>this.fit()}>${this.t("fit")}</button>
              <button aria-pressed=${this._split} title=${this.t("split_3d_hint")} @click=${()=>this.toggleSplit()}>${this.t("split_3d")}</button>
              ${this.isAdmin?m`<button aria-pressed=${!!this._doc.settings.lock_plan} title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>${this.t("lock_plan")}</button>`:y}
            </div>
            ${t?.warnings.length?m`<span class="fp3d-warn">${this.t("overlap_warning")}</span>`:y}
          </div>
          <div class="fp3d-stage-pair ${this._split?"fp3d-split":""}" style=${this._split&&!this.narrow?`--fp3d-split:${Math.round(this._splitRatio*100)}%`:""}>
          <div class="fp3d-canvas-wrap">
            ${this.houseTool?m`<div class="fp3d-tool-note">${this.t(this._tool==="energy"?"energy_only_note":"roof_only_note")}</div>`:y}
            <svg
              class="fp3d-plan fp3d-tool-${this._tool}"
              @pointerdown=${this.onPointerDown}
              @pointermove=${this.onPointerMove}
              @pointerup=${this.onPointerUp}
              @pointercancel=${this.onPointerUp}
              @pointerleave=${()=>{this.drag||(this._cursor=null)}}
              @wheel=${this.onWheel}
              @contextmenu=${this.onContextMenu}
            >
              ${this.renderBackground(e)} ${this.renderGrid()} ${this.renderGhost()} ${t?this.renderWalls(t.walls):y}
              ${e?this.renderOutdoor(e):y} ${e?this.renderRooms(e):y} ${e?this.renderFurniture(e):y}
              ${e?this.renderFreeWalls(e):y}
              ${e&&t?this.renderOpenings(e,t.walls):y} ${e?this.renderMeter(e):y}
              ${e&&this._tool==="select"?this.renderDevices(e):y}
              ${this.room&&this.isAdmin&&this._tool==="select"&&!this._openingId&&!this._furnitureId&&!this.isFixedItem("room",this.room.id)?this.renderHandles(this.room):y}
              ${e?this.renderOutdoorHandles(e):y}
              ${this._tool==="roof"?z`${this.renderRoofSections()}${this.renderRoofWindows()}`:this._tool==="energy"?z`${this.renderRoofSections()}${this.renderSolarFields()}${this.renderEnergyMarkers()}`:y} ${this.renderDraft()} ${this.renderGuides()}
            </svg>
            ${this.renderContext()}
            <p class="fp3d-hint ${this._fixedHint?"fp3d-hint-fixed":""}">${e?this._fixedHint?this.t("fixed_drag_hint"):this.t(`hint_${this._tool}`):this.t("hint_empty")}</p>
          </div>
          ${this._split&&!this.narrow?m`<div class="fp3d-split-handle" title=${this.t("split_handle_hint")} @pointerdown=${this.onSplitDown}></div>`:y}
          ${this._split?this.render3d():y}
          </div>
        </div>
        ${this.renderAside(e)}
      </div>
    `}renderBackground(e){let t=e?.background,n=t?this._images[t.image_id]:void 0;if(!t||!n)return y;let[i,r]=this.toScreen([t.x,t.z]),s=t.width*this._view.scale;return z`<image href=${n.url} x=${i} y=${r} width=${s} height=${s*n.aspect} opacity=${t.opacity} preserveAspectRatio="none" pointer-events="none" />`}renderGrid(){let{scale:e}=this._view,{w:t,h:n}=this._size,i=e>=90?.1:e>=30?.5:1,r=e>=20?1:5,[s,a]=this.toWorld(0,0),[l,c]=this.toWorld(t,n),d=[],u=(g,p)=>{for(let w=Math.ceil(s/g)*g;w<=l;w+=g){let b=this.toScreen([w,0])[0];d.push(z`<line class=${p} x1=${b} y1="0" x2=${b} y2=${n} />`)}for(let w=Math.ceil(a/g)*g;w<=c;w+=g){let b=this.toScreen([0,w])[1];d.push(z`<line class=${p} x1="0" y1=${b} x2=${t} y2=${b} />`)}};i<r&&u(i,"fp3d-grid-minor"),u(r,"fp3d-grid-major");let[h,v]=this.toScreen([0,0]);return d.push(z`<circle class="fp3d-origin" cx=${h} cy=${v} r="3" />`),z`<g pointer-events="none">${d}</g>`}renderGhost(){let e=this._doc?.floors.findIndex(n=>n.id===this._floorId)??-1,t=e>0?this._doc.floors[e-1]:void 0;return t?z`<g pointer-events="none">${t.rooms.map(n=>z`<polygon class="fp3d-ghost" points=${n.points.map(i=>this.toScreen(i).join(",")).join(" ")} />`)}</g>`:y}renderWalls(e){let t=this.floor?.height??2.5;return z`<g pointer-events="none">${e.map(n=>{let i=n.height!==void 0&&n.height<t-.01,r=`fp3d-wall${n.exterior?" fp3d-wall-ext":""}${i?" fp3d-wall-low":""}`;return z`<polygon class=${r} points=${n.footprint.map(s=>this.toScreen(s).join(",")).join(" ")} />`})}</g>`}setEdgeHeight(e,t,n){let i=this.floor;if(!i||!this.isAdmin)return;let s=Re(i.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},i.walls??[]).walls.filter(a=>a.sources.some(l=>l.room_id===e.id&&l.edge===t)).flatMap(a=>a.sources);s.some(a=>a.room_id===e.id&&a.edge===t)||s.push({room_id:e.id,edge:t,t0:0,t1:0}),this.change((a,l)=>{for(let c of s){let d=l.rooms.find(h=>h.id===c.room_id);if(!d)continue;let u=(d.wall_heights??[]).slice(0,d.points.length);for(;u.length<d.points.length;)u.push(null);u[c.edge]=n,d.wall_heights=u.every(h=>h===null)?void 0:u}})}renderEdgeHeights(e){let t=this.floor.height,n=e.points.length;return m`<div class="fp3d-edge-box">
      <h4>${this.t("wall_heights")}</h4>
      ${e.points.map((i,r)=>{let s=e.points[(r+1)%n],a=Math.hypot(s[0]-i[0],s[1]-i[1]),l=e.wall_heights?.[r]??null,c=()=>this._edgeHi=r,d=()=>this._edgeHi=null;return m`<div
          class="fp3d-edge-height${r===this._edgeHi?" fp3d-edge-on":""}${l!==null?" fp3d-edge-low":""}"
          @mouseenter=${c}
          @mouseleave=${d}
          @focusin=${c}
          @focusout=${d}
        >
          <span><b>${this.t("wall_n",{a:r+1,b:(r+1)%n+1})}</b><br /><span class="fp3d-muted">${D(this.hass,a,2)} m</span></span>
          ${this.num(this.t("wall_height"),l??t,u=>this.setEdgeHeight(e,r,u>=t-.005?null:Math.max(.05,u)),.05,.05)}
          ${this.isAdmin&&l!==null?m`<button class="fp3d-btn" title=${this.t("wall_height_full")} @click=${()=>this.setEdgeHeight(e,r,null)}>↥</button>`:y}
        </div>`})}
      <p class="fp3d-sub">${this.t("room_wall_hint")}</p>
    </div>`}renderOutdoorHandles(e){let t=this._outdoorId?e.outdoor.find(n=>n.id===this._outdoorId):void 0;return!t||!this.isAdmin||this._tool!=="select"||this._doc.settings.lock_plan?y:z`${t.points.map((n,i)=>{let[r,s]=this.toScreen(n);return z`<g class="fp3d-vertex" data-out-vertex=${`${t.id}:${i}`}><circle cx=${r} cy=${s} r="16" class="fp3d-hit" /><circle cx=${r} cy=${s} r="6" /></g>`})}`}renderOutdoor(e){return z`<g>${e.outdoor.map(t=>{let n=t.points.map(l=>this.toScreen(l).join(",")).join(" "),[i,r]=this.toScreen(ne(t.points)),s=J(t.points),a=Math.min(s.x1-s.x0,s.z1-s.z0)*this._view.scale>40;return z`<g data-outdoor=${t.id} class=${`fp3d-out fp3d-out-${t.type}${t.id===this._outdoorId?" fp3d-out-sel":""}`}>
        <polygon points=${n} />
        ${a?z`<text x=${i} y=${r+4}>${this.t(`out_${t.type}`)}</text>`:y}
      </g>`})}</g>`}renderOutdoorForm(e){let t=this.isAdmin,n=ht(e.points),i=J(e.points),r=(s,a)=>{let{x0:l,z0:c,x1:d,z1:u}=i;s==="x"&&([l,d]=[a,a+(d-l)]),s==="z"&&([c,u]=[a,a+(u-c)]),s==="w"&&(d=l+Math.max(.1,a)),s==="d"&&(u=c+Math.max(.1,a)),this.updateOutdoor({points:[[l,c],[d,c],[d,u],[l,u]].map(([h,v])=>[S(h),S(v)])})};return m`<section>
      <div class="fp3d-h3row"><h3>${this.t("outdoor")}</h3>${this.fixButton("outdoor",e.id)}</div>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("outdoor_type")}
          <select ?disabled=${!t} @change=${s=>this.updateOutdoor({type:s.target.value})}>
            ${Ai.map(s=>m`<option value=${s} ?selected=${s===e.type}>${this.t(`out_${s}`)}</option>`)}
          </select></label
        >
        ${n?m`${this.num(this.t("x"),i.x0,s=>r("x",s))} ${this.num(this.t("z"),i.z0,s=>r("z",s))}
            ${this.num(this.t("width"),i.x1-i.x0,s=>r("w",s),.01,.1)} ${this.num(this.t("depth"),i.z1-i.z0,s=>r("d",s),.01,.1)}`:y}
      </div>
      <p class="fp3d-sub">${this.t("outdoor_hint")}</p>
      ${t?m`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.duplicateOutdoor()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOutdoor()}>${this.t("delete")}</button>
          </div>`:y}
    </section>`}renderRooms(e){return z`
      <g>${e.rooms.map(t=>{let n=t.points.map(i=>this.toScreen(i).join(",")).join(" ");return z`<polygon data-room=${t.id} class=${t.id===this._roomId?"fp3d-room fp3d-room-sel":"fp3d-room"} points=${n} />`})}</g>
      ${this.renderEdgeHighlight()}
      <g pointer-events="none">${e.rooms.map(t=>{let[n,i]=this.toScreen(ne(t.points));return z`<text class="fp3d-room-name" x=${n} y=${i-2}>${t.name}</text>
          <text class="fp3d-room-area" x=${n} y=${i+14}>${this.t("area_m2",{a:D(this.hass,Ae(t.points),1)})}</text>`})}</g>
    `}renderEdgeHighlight(){let e=this.room,t=this._edgeHi;if(!e||t===null||t>=e.points.length)return y;let[n,i]=this.toScreen(e.points[t]),[r,s]=this.toScreen(e.points[(t+1)%e.points.length]);return z`<line class="fp3d-edge-hi" pointer-events="none" x1=${n} y1=${i} x2=${r} y2=${s} />`}renderMeter(e){let t=this._doc.energy?.meter;if(!t||t.floor_id!==e.id)return y;let[n,i]=this.toScreen([t.x,t.z]);return z`<g class="fp3d-meter" transform="translate(${n} ${i})" pointer-events="none">
      <rect x="-11" y="-11" width="22" height="22" rx="5" />
      <path d="M1.5 -7 L-4 1 H0 L-1.5 7 L4 -1 H0 Z" />
    </g>`}renderFurniture(e){let t=this._view.scale;return z`<g>${e.furniture.map(n=>{let i=n.id===this._furnitureId,[r,s]=this.toScreen([n.x,n.z]),a=Math.min(n.w,n.d)*t>44,l=n.rotation*Math.PI/180,c=n.d/2+Math.max(.3,26/t),[d,u]=this.toScreen([n.x-Math.sin(l)*c,n.z+Math.cos(l)*c]),[h,v]=this.toScreen([n.x-Math.sin(l)*(n.d/2),n.z+Math.cos(l)*(n.d/2)]),g=oe(n.type)&&!!n.entity&&n.entity!=="none"&&this.hass?.states[n.entity]?.state==="on";return z`<g data-furniture=${n.id} class=${`fp3d-furn${i?" fp3d-furn-sel":""}${g?" fp3d-furn-lit":""}${be.includes(n.type)?" fp3d-energy-item":""}`}>
        <g transform="translate(${r} ${s}) rotate(${n.rotation}) scale(${t})">
          <rect class="fp3d-furn-body" x=${-n.w/2} y=${-n.d/2} width=${n.w} height=${n.d} />
          <g class="fp3d-furn-sym">${sr(n.type,n.w,n.d)}</g>
          <line class="fp3d-furn-front" x1=${-n.w/2} y1=${n.d/2} x2=${n.w/2} y2=${n.d/2} />
        </g>
        ${a?z`<text x=${r} y=${s+4}>${it(this.hass,n.type)}</text>`:y}
      </g>
      ${i&&this.isAdmin&&!n.locked?[[-1,-1],[1,-1],[1,1],[-1,1]].map(([p,w])=>{let[b,_]=this.toScreen([n.x+p*n.w*Math.cos(l)/2-w*n.d*Math.sin(l)/2,n.z+p*n.w*Math.sin(l)/2+w*n.d*Math.cos(l)/2]);return z`<g class="fp3d-resize" data-resize=${`${n.id}:${p}:${w}`}>
              <circle cx=${b} cy=${_} r="14" class="fp3d-hit" />
              <rect x=${b-5} y=${_-5} width="10" height="10" rx="2" />
            </g>`}):y}
      ${i?(()=>{let[p,w]=this.toScreen([n.x+Math.sin(l)*(n.d/2+18/t),n.z-Math.cos(l)*(n.d/2+18/t)]);return z`<text class="fp3d-dim" x=${p} y=${w+4}>${D(this.hass,n.w,2)} × ${D(this.hass,n.d,2)} m</text>`})():y}
      ${i&&n.locked?z`<text class="fp3d-lock" x=${d} y=${u+5}>🔒</text>`:y}
      ${i&&this.isAdmin&&!n.locked?z`<g class="fp3d-rotate" data-rotate=${n.id}>
            <line x1=${h} y1=${v} x2=${d} y2=${u} />
            <circle cx=${d} cy=${u} r="16" class="fp3d-hit" />
            <circle cx=${d} cy=${u} r="8" />
            <path d="M${d-4} ${u-1}a4 4 0 1 1 2 3.5" />
          </g>`:y}`})}</g>`}renderOpenings(e,t){return z`<g>${e.openings.map(n=>{let i=Pe(n,e.rooms,e.walls??[]);if(!i)return y;let{room:r,edge:s}=i,a=kn(t,n,i),l=Fe(r,s,n.offset-n.width/2),c=Fe(r,s,n.offset+n.width/2),d=(c[0]-l[0])/(n.width||1),u=(c[1]-l[1])/(n.width||1),h=q(r.points)>=0?1:-1,v=[-u*h,d*h],g=[.06,.06];a&&(g=a.wall.free||a.wall.roomLeft===r.id?[a.wall.left,a.wall.right]:[a.wall.right,a.wall.left]);let p=($,M)=>this.toScreen([$[0]+v[0]*M,$[1]+v[1]*M]),w=[p(l,g[0]+.01),p(c,g[0]+.01),p(c,-g[1]-.01),p(l,-g[1]-.01)],b=n.id===this._openingId,_=nn(n,a?.wall.exterior??!1),f=n.type==="door"&&rn(_),k=`fp3d-open fp3d-open-${n.type}${f?" fp3d-open-front":""}${b?" fp3d-open-sel":""}`,x;if(n.type==="garage"){let $=p(l,g[0]-.04),M=p(c,g[0]-.04),E=p(l,g[0]+Math.min(2,n.height)),F=p(c,g[0]+Math.min(2,n.height));x=z`<line x1=${$[0]} y1=${$[1]} x2=${M[0]} y2=${M[1]} />
          <path class="fp3d-open-track" d="M${$[0]} ${$[1]}L${E[0]} ${E[1]}M${M[0]} ${M[1]}L${F[0]} ${F[1]}" />`}else if(n.type==="door"){let $=n.swing==="out",M=$?-g[1]:g[0],E=n.hinge==="left"==h>0,F=n.leaves===2,A=l,R=c,P=[];if(_==="sidelight"||_==="sidelights"){let X=_==="sidelights",Q=Math.min(1.05,Math.max(.6,n.width-.04-(X?.6:.3))),Z=(n.width-.04-Q)/(X?2:1),G=he=>Fe(r,s,n.offset-n.width/2+he),ce=X||!E?.02+Z:.02;A=G(ce),R=G(ce+Q),P=X?[[l,G(.02+Z)],[G(n.width-.02-Z),c]]:E?[[G(n.width-.02-Z),c]]:[[l,G(.02+Z)]]}let I=[(A[0]+R[0])/2,(A[1]+R[1])/2],L=(F?.5:1)*Math.hypot(R[0]-A[0],R[1]-A[1]),U=(g[0]-g[1])/2,Et=P.map(([X,Q])=>{let Z=p(X,U+.035),G=p(Q,U+.035),ce=p(X,U-.035),he=p(Q,U-.035);return z`<line class="fp3d-open-pane" x1=${Z[0]} y1=${Z[1]} x2=${G[0]} y2=${G[1]} /><line class="fp3d-open-pane" x1=${ce[0]} y1=${ce[1]} x2=${he[0]} y2=${he[1]} />`}),xe=(X,Q)=>{let[Z,G]=p(X,M),[ce,he]=p(Q,M),rt=p(X,M+($?-L:L)),On=L*this._view.scale,Br=(rt[0]-Z)*(he-G)-(rt[1]-G)*(ce-Z);return z`<path d="M${Z} ${G}L${rt[0]} ${rt[1]}A${On} ${On} 0 0 ${Br>0?1:0} ${ce} ${he}" />`};x=z`${Et}${_==="passage"?z`<line class="fp3d-open-passage" x1=${p(l,U)[0]} y1=${p(l,U)[1]} x2=${p(c,U)[0]} y2=${p(c,U)[1]} />`:_==="sliding"?z`<line x1=${p(A,M)[0]} y1=${p(A,M)[1]} x2=${p(R,M)[0]} y2=${p(R,M)[1]} />`:F?z`${xe(A,I)}${xe(R,I)}`:xe(E?A:R,E?R:A)}`}else{let $=(g[0]-g[1])/2,M=p(l,$+.035),E=p(c,$+.035),F=p(l,$-.035),A=p(c,$-.035),R=[(l[0]+c[0])/2,(l[1]+c[1])/2],P=p(R,g[0]),I=p(R,-g[1]);x=z`<line x1=${M[0]} y1=${M[1]} x2=${E[0]} y2=${E[1]} /><line x1=${F[0]} y1=${F[1]} x2=${A[0]} y2=${A[1]} />${n.leaves===2?z`<line x1=${P[0]} y1=${P[1]} x2=${I[0]} y2=${I[1]} />`:y}`}return z`<g data-opening=${n.id} class=${k}>
        <polygon class="fp3d-open-gap" points=${w.map($=>$.join(",")).join(" ")} />
        ${x}
      </g>`})}</g>`}renderDevices(e){return z`<g>${e.placements.map(t=>{let n=W(t.entity_id);if(!n)return y;let[i,r]=this.toScreen([t.x,t.z]),s=this.hass?.states[t.entity_id]?.state==="on",a=t.entity_id===this._deviceId,l=`fp3d-device${s?" fp3d-device-on":""}${a?" fp3d-device-sel":""}`;return z`${n==="camera"?this.renderCameraWedge(t,a):y}<g data-device=${t.entity_id} class=${l} transform="translate(${i} ${r})">
        <title>${N(this.hass,t.entity_id)}</title>
        <circle r="18" class="fp3d-hit" /><circle r="12" />
        <path d=${nt(n)} transform="translate(-7.2 -7.2) scale(0.6)" />
      </g>
      ${a&&t.locked?z`<text class="fp3d-lock" x=${i+16} y=${r-12}>🔒</text>`:y}`})}</g>`}renderCameraWedge(e,t){let n=e.mount==="ceiling",i=e.fov??(n?360:90),r=e.reach??(n?3:4.5),s=(e.rotation??0)*Math.PI/180,a=(f,k)=>this.toScreen([e.x-Math.sin(s+f)*k,e.z+Math.cos(s+f)*k]),[l,c]=this.toScreen([e.x,e.z]),d=Math.min(i,359.9)*Math.PI/180/2,[u,h]=a(-d,r),[v,g]=a(d,r),p=r*this._view.scale,w=i>=360?"":`M${l} ${c}L${u} ${h}A${p} ${p} 0 ${d>Math.PI/2?1:0} 1 ${v} ${g}Z`,[b,_]=a(0,r);return z`<g class="fp3d-wedge ${t?"fp3d-wedge-sel":""}">
      ${i>=360?z`<circle cx=${l} cy=${c} r=${p} />`:z`<path d=${w} />`}
      ${t&&this.isAdmin&&!e.locked?z`<g class="fp3d-rotate" data-aim=${e.entity_id}>
            <line x1=${l} y1=${c} x2=${b} y2=${_} />
            <circle cx=${b} cy=${_} r="16" class="fp3d-hit" />
            <circle cx=${b} cy=${_} r="8" />
            <path d="M${b-4} ${_-1}a4 4 0 1 1 2 3.5" />
          </g>`:y}
    </g>`}renderHandles(e){let t=e.points,n=t.length,i=t.map((s,a)=>{let l=t[(a+1)%n],[c,d]=this.toScreen(s),[u,h]=this.toScreen(l),v=Math.hypot(l[0]-s[0],l[1]-s[1]),g=(c+u)/2,p=(d+h)/2,[w,b]=this.toScreen(ne(t)),_=-(h-d),f=u-c,k=Math.hypot(_,f)||1;_/=k,f/=k,_*(g-w)+f*(p-b)<0&&(_=-_,f=-f);let x=Math.hypot(u-c,h-d);return z`
        ${x>50?z`<text class="fp3d-dim" x=${g+_*16} y=${p+f*16+4}>${D(this.hass,v,2)} m</text>`:y}
        ${x>36?z`<g data-mid=${a} class="fp3d-mid"><circle cx=${g} cy=${p} r="14" class="fp3d-hit" /><circle cx=${g} cy=${p} r="6" /><path d="M${g-3} ${p}h6M${g} ${p-3}v6" /></g>`:y}
      `}),r=t.map((s,a)=>{let[l,c]=this.toScreen(s);return z`<g data-vertex=${a} class=${a===this._vertex?"fp3d-vertex fp3d-vertex-sel":"fp3d-vertex"}><circle cx=${l} cy=${c} r="16" class="fp3d-hit" /><circle cx=${l} cy=${c} r="6" /></g>
        <text class="fp3d-vertex-no" x=${l+9} y=${c-9}>${a+1}</text>`});return z`<g>${i}${r}</g>`}renderDraft(){let e=this.drag;if(e?.kind==="freewall"){let[n,i]=this.toScreen(e.start),[r,s]=this.toScreen(e.end),a=Math.hypot(e.end[0]-e.start[0],e.end[1]-e.start[1]);return z`<g pointer-events="none">
        <line class="fp3d-draft fp3d-draft-wall" x1=${n} y1=${i} x2=${r} y2=${s} />
        <text class="fp3d-dim" x=${(n+r)/2} y=${(i+s)/2-10}>${D(this.hass,a,2)} m</text>
      </g>`}if(e?.kind==="rect"){let[n,i]=this.toScreen(e.start),[r,s]=this.toScreen(e.end),a=Math.abs(e.end[0]-e.start[0]),l=Math.abs(e.end[1]-e.start[1]);return z`<g pointer-events="none">
        <rect class="fp3d-draft" x=${Math.min(n,r)} y=${Math.min(i,s)} width=${Math.abs(r-n)} height=${Math.abs(s-i)} />
        <text class="fp3d-dim" x=${(n+r)/2} y=${Math.min(i,s)-8}>${D(this.hass,a,2)} × ${D(this.hass,l,2)} m</text>
      </g>`}if(this._tool!=="polygon"&&this._tool!=="measure")return y;let t=[...this._draft,...this._cursor?[this._cursor]:[]].map(n=>this.toScreen(n));return z`<g pointer-events="none">
      ${t.length>1?z`<polyline class="fp3d-draft" points=${t.map(n=>n.join(",")).join(" ")} />`:y}
      ${this._tool==="measure"?this._draft.slice(1).map((n,i)=>{let r=this.toScreen(this._draft[i]),s=this.toScreen(n);return z`<text class="fp3d-dim" x=${(r[0]+s[0])/2} y=${(r[1]+s[1])/2-6}>${D(this.hass,Math.hypot(n[0]-this._draft[i][0],n[1]-this._draft[i][1]),2)} m</text>`}):y}
      ${this._draft.map((n,i)=>{let[r,s]=this.toScreen(n);return z`<circle class=${i===0&&this._draft.length>=3?"fp3d-draft-pt fp3d-draft-first":"fp3d-draft-pt"} cx=${r} cy=${s} r=${i===0&&this._draft.length>=3?9:5} />`})}
      ${this._cursor?z`<circle class="fp3d-cursor" cx=${this.toScreen(this._cursor)[0]} cy=${this.toScreen(this._cursor)[1]} r="4" />`:y}
    </g>`}renderGuides(){let e=this._guides,{w:t,h:n}=this._size;return z`<g pointer-events="none">
      ${e.x!==void 0?z`<line class="fp3d-guide" x1=${this.toScreen([e.x,0])[0]} y1="0" x2=${this.toScreen([e.x,0])[0]} y2=${n} />`:y}
      ${e.z!==void 0?z`<line class="fp3d-guide" x1="0" y1=${this.toScreen([0,e.z])[1]} x2=${t} y2=${this.toScreen([0,e.z])[1]} />`:y}
      ${e.point?z`<circle class="fp3d-snap" cx=${this.toScreen(e.point)[0]} cy=${this.toScreen(e.point)[1]} r="9" />`:y}
    </g>`}num(e,t,n,i=.01,r){return m`<label class="fp3d-field"
      >${e}
      <input
        type="number"
        inputmode="decimal"
        step=${i}
        min=${r??y}
        .value=${String(S(t))}
        ?disabled=${!this.isAdmin}
        @change=${s=>{let a=parseFloat(s.target.value.replace(",","."));Number.isFinite(a)&&n(a)}}
    /></label>`}selectFrom3d(e,t){this.selectItem(e,t),this._sideOpen=!1}setSidePinned(e){this._sidePinned=e,this._sideOpen=!1;try{localStorage.setItem("neonplan3d.sidePinned",e?"1":"0")}catch{}}renderAside(e){return this._split&&!this._sidePinned&&!this.narrow?this._sideOpen?m`<aside class="fp3d-side fp3d-side-strip"></aside>
      <aside class="fp3d-side fp3d-side-overlay">
        ${this.renderPinRow(!0)}
        ${this.renderSide(e)}
      </aside>`:m`<aside class="fp3d-side fp3d-side-strip">
        <button class="fp3d-strip-btn" title=${this.t("side_open")} @click=${()=>this._sideOpen=!0}>☰</button>
        ${this._furnitureId||this._deviceId||this._openingId?m`<button class="fp3d-strip-btn fp3d-strip-hot" title=${this.t("side_details")} @click=${()=>this._sideOpen=!0}>⚙</button>`:y}
        <button class="fp3d-strip-btn" title=${this.t("tool_furniture")} @click=${()=>(this._tool="furniture",this._draft=[],this._sideOpen=!0)}>🛋</button>
        <button class="fp3d-strip-btn" title=${this.t("tool_opening")} @click=${()=>(this._tool="opening",this._draft=[],this._sideOpen=!0)}>🚪</button>
      </aside>`:m`<aside class="fp3d-side">${this.renderPinRow()}${this.renderSide(e)}</aside>`}renderPinRow(e=!1){return!this._split||this.narrow?y:m`<div class="fp3d-pin-row">
      ${e?m`<button class="fp3d-btn" @click=${()=>this._sideOpen=!1}>${this.t("side_close")}</button>`:y}
      <button class="fp3d-btn" aria-pressed=${this._sidePinned} title=${this.t("side_pin_hint")} @click=${()=>this.setSidePinned(!this._sidePinned)}>
        📌 ${this.t(this._sidePinned?"side_pinned":"side_pin")}
      </button>
    </div>`}renderSide(e){let t=this._doc?.floors??[],n=this.room,i=this.isAdmin,r=Object.values(this.hass?.areas??{}).sort((a,l)=>a.name.localeCompare(l.name));if(this._tool==="roof")return this.renderRoofPanel();if(this._tool==="energy")return this.renderEnergyPanel();if(this._tool==="furniture"&&e&&i)return m`${this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):y} ${this.renderFurnitureLibrary()}`;let s=this._tool==="measure"?null:this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.opening?this.renderOpeningForm(this.opening):this.device?this.renderDeviceForm(this.device):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.freeWall?this.renderFreeWallForm(this.freeWall):null;return s?m`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("room",this._roomId)}>‹ ${this.t(n?"back_to_room":"back_to_floor",{room:n?.name??""})}</button>
        ${s}`:n&&this._tool!=="measure"?m`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("room",null)}>‹ ${this.t("back_to_floor")}</button>
        ${this.renderRoomForm(n,r)} ${this.renderDeviceList(n)}`:m`
      ${i?y:m`<p class="fp3d-note">${this.t("read_only")}</p>`}
      <section>
        <h3>${this.t("floors")}</h3>
        <div class="fp3d-floor-list">
          ${[...t].reverse().map(a=>m`<button
              class="fp3d-chip"
              aria-pressed=${a.id===this._floorId}
              @click=${()=>{this._floorId=a.id,this._roomId=null,this._vertex=null,this._draft=[],this.fit()}}
            >
              ${a.name}
            </button>`)}
          ${i?m`<button
                class="fp3d-btn"
                aria-expanded=${this._floorMenu}
                @click=${()=>this.freeHaFloors.length?this._floorMenu=!this._floorMenu:this.addFloor()}
              >
                + ${this.t("add_floor")}
              </button>`:y}
        </div>
        ${i&&this._floorMenu?m`<div class="fp3d-floor-menu">
              <p class="fp3d-sub">${this.t("floor_from_ha")}</p>
              ${this.freeHaFloors.map(a=>m`<button class="fp3d-btn" @click=${()=>this.addFloor(a)}>
                  ${a.name}${a.level!=null?m` <span class="fp3d-sub">· ${this.t("level",{n:a.level})}</span>`:y}
                </button>`)}
              <button class="fp3d-btn" @click=${()=>this.addFloor()}>${this.t("floor_empty")}</button>
            </div>`:y}
        ${e?m`<div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${this.t("floor_name")}
                <input .value=${e.name} ?disabled=${!i} @change=${a=>this.updateFloor({name:a.target.value})}
              /></label>
              ${this.num(this.t("elevation"),e.elevation,a=>this.updateFloor({elevation:a}))}
              ${this.num(this.t("height"),e.height,a=>this.updateFloor({height:Math.max(1,a)}),.05,1)}
              ${Object.keys(this.hass?.floors??{}).length?m`<label class="fp3d-field fp3d-wide"
                    >${this.t("ha_floor")}
                    <select ?disabled=${!i} @change=${a=>this.updateFloor({ha_floor:a.target.value||null})}>
                      <option value="" ?selected=${!e.ha_floor}>${this.t("no_ha_floor")}</option>
                      ${Object.values(this.hass?.floors??{}).filter(a=>a.floor_id===e.ha_floor||!t.some(l=>l.ha_floor===a.floor_id)).map(a=>m`<option value=${a.floor_id} ?selected=${a.floor_id===e.ha_floor}>${a.name}</option>`)}
                    </select></label
                  >`:y}
              ${i&&this.unplacedAreas(e).length?m`<div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn fp3d-primary" title=${this.t("area_rooms_hint")} @click=${()=>this.addAreaRooms(e)}>
                      ${this.t("area_rooms",{n:this.unplacedAreas(e).length})}
                    </button>
                  </div>`:y}
              ${i?m`<div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn" @click=${()=>this.moveFloor(1)}>${this.t("move_up")}</button>
                    <button class="fp3d-btn" @click=${()=>this.moveFloor(-1)}>${this.t("move_down")}</button>
                    <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFloor()}>${this.t("delete_floor")}</button>
                  </div>
                  <div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn" title=${this.t("gaps_hint")} ?disabled=${e.rooms.length<2} @click=${()=>this.closeFloorGaps()}>
                      ${this.t("gaps_close")}
                    </button>
                  </div>
                  ${this._notice?m`<p class="fp3d-sub fp3d-wide fp3d-notice">${this._notice}</p>`:y}`:y}
            </div>`:y}
      </section>
      ${this._tool==="measure"&&e?this.renderMeasureForm():this.freeWall?this.renderFreeWallForm(this.freeWall):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.opening?this.renderOpeningForm(this.opening):this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.device?this.renderDeviceForm(this.device):n?m`${this.renderRoomForm(n,r)} ${this.renderDeviceList(n)}`:e?this.renderRoomList(e):y}
      ${i&&!1?this.renderEnergySettings():y}
      ${i&&!1?this.renderPresenceSettings():y}
      ${e&&i?this.renderBackgroundForm(e):y} ${i?this.renderSettings():y}
      ${i?this.renderBackup():y}
    `}renderRoomList(e){return e.rooms.length?m`<section>
      <h3>${this.t("rooms")}</h3>
      <div class="fp3d-room-list">
        ${e.rooms.map(t=>m`<button class="fp3d-row" @click=${()=>this.selectItem("room",t.id)}>
            <span>${t.name}</span><span class="fp3d-muted">${this.t("area_m2",{a:D(this.hass,Ae(t.points),1)})}</span>
          </button>`)}
      </div>
    </section>`:y}renderRoomForm(e,t){let n=this.isAdmin,i=ht(e.points),r=J(e.points);return m`<section>
      <div class="fp3d-h3row"><h3>${this.t("room")}</h3>${this.fixButton("room",e.id)}</div>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("room_name")}
          <input .value=${e.name} ?disabled=${!n} @change=${s=>this.updateRoom({name:s.target.value})}
        /></label>
        <label class="fp3d-field fp3d-wide"
          >${this.t("area")}
          <select ?disabled=${!n} @change=${s=>this.setArea(s.target.value)}>
            <option value="" ?selected=${!e.area_id}>${this.t("no_area")}</option>
            ${t.map(s=>m`<option value=${s.area_id} ?selected=${s.area_id===e.area_id}>${s.name}</option>`)}
          </select></label
        >
        <label class="fp3d-field fp3d-wide"
          >${this.t("material")}
          <select ?disabled=${!n} @change=${s=>this.updateRoom({floor_material:s.target.value})}>
            ${Ri.map(s=>m`<option value=${s} ?selected=${s===e.floor_material}>${this.t(`mat_${s}`)}</option>`)}
          </select></label
        >
        ${i?m`${this.num(this.t("x"),r.x0,s=>this.setRect("x",s))} ${this.num(this.t("z"),r.z0,s=>this.setRect("z",s))}
            ${this.num(this.t("width"),r.x1-r.x0,s=>this.setRect("w",s),.01,.05)}
            ${this.num(this.t("depth"),r.z1-r.z0,s=>this.setRect("d",s),.01,.05)}`:y}
      </div>
      ${this.renderEdgeHeights(e)} ${this.renderRoomClimate(e)}
      <details class="fp3d-points" ?open=${!i}>
        <summary>${this.t("points")} (${e.points.length})</summary>
        ${e.points.map((s,a)=>m`<div class="fp3d-point ${a===this._vertex?"fp3d-point-sel":""}">
            <span class="fp3d-muted">${a+1}</span>
            ${this.num(this.t("x"),s[0],l=>this.setPoint(a,0,l))} ${this.num(this.t("z"),s[1],l=>this.setPoint(a,1,l))}
            ${n?m`<button class="fp3d-btn" title=${this.t("delete_point")} ?disabled=${e.points.length<=3} @click=${()=>this.deleteVertex(a)}>
                  ×
                </button>`:y}
          </div>`)}
      </details>
      ${n?m`<div class="fp3d-actions">
            <button class="fp3d-btn fp3d-primary" @click=${()=>this._packages=!this._packages}>${this.t("pkg_open")}</button>
            <button class="fp3d-btn" @click=${()=>this.openSpotForm(e)}>${this.t("spots_place")}</button>
            <button class="fp3d-btn" @click=${()=>this.duplicateRoom()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoom()}>${this.t("delete")}</button>
          </div>`:y}
      ${this._spots?this.renderSpotForm(e):y}
      ${this._packages?m`<div class="fp3d-packages">
            ${Pr.map(s=>m`<button class="fp3d-btn" @click=${()=>this.applyPackage(e,s)}>
                <b>${this.t(`pkg_${s}`)}</b><span>${this.t(`pkg_${s}_desc`)}</span>
              </button>`)}
            <p class="fp3d-sub">${this.t("pkg_hint")}</p>
          </div>`:y}
    </section>`}applyPackage(e,t){if(!this.isAdmin)return;let n=Ir(e,t,()=>O("furniture"));this.change((i,r)=>r.furniture.push(...n)),this._packages=!1,this._notice=this.t("pkg_done",{n:n.length})}openSpotForm(e){let t=J(e.points),n=this.hass?ve(this.hass,e.area_id).filter(i=>i.startsWith("light.")):[];this._spots={type:"lamp_downlight",rows:Math.max(1,Math.round((t.z1-t.z0)/1.2)),cols:Math.max(1,Math.round((t.x1-t.x0)/1.2)),entity:n[0]??null}}placeSpots(e){let t=this._spots;if(!t||!this.isAdmin)return;let[n,i,r]=te[t.type],s=Qt(e,t.rows,t.cols).map(([a,l])=>({id:O("furniture"),type:t.type,x:a,z:l,rotation:0,w:n,d:i,h:r,variant:null,entity:t.entity??"none",power:null}));this.change((a,l)=>l.furniture.push(...s)),this._spots=null,this._notice=this.t("spots_placed",{n:s.length})}renderSpotForm(e){let t=this._spots,n=Qt(e,t.rows,t.cols).length,i=this.entityOptions(s=>/^(light|switch|input_boolean)\./.test(s)),r=s=>this._spots={...t,...s};return m`<div class="fp3d-form fp3d-spot-form">
      <label class="fp3d-field fp3d-wide"
        >${this.t("spots_type")}
        <select @change=${s=>r({type:s.target.value})}>
          ${["lamp_downlight","lamp_spot","lamp_panel","lamp_ceiling"].map(s=>m`<option value=${s} ?selected=${s===t.type}>${this.t(`furn_${s}`)}</option>`)}
        </select></label
      >
      ${this.num(this.t("spots_cols"),t.cols,s=>r({cols:Math.max(1,Math.min(12,Math.round(s)))}),1,1)}
      ${this.num(this.t("spots_rows"),t.rows,s=>r({rows:Math.max(1,Math.min(12,Math.round(s)))}),1,1)}
      ${this.entitySelect(this.t("furn_entity_light"),t.entity,void 0,i,s=>r({entity:s==="none"?null:s}))}
      <div class="fp3d-actions fp3d-wide">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!n} @click=${()=>this.placeSpots(e)}>${this.t("spots_add",{n})}</button>
        <button class="fp3d-btn" @click=${()=>this._spots=null}>${this.t("cancel")}</button>
      </div>
      <p class="fp3d-sub fp3d-wide">${this.t("spots_hint")}</p>
    </div>`}markerSelect(e,t){return m`<label class="fp3d-field fp3d-wide" title=${this.t("marker_show_hint")}
      >${this.t("marker_show")}
      <select ?disabled=${!this.isAdmin} @change=${n=>t(n.target.value||null)}>
        <option value="" ?selected=${!e}>${this.t("marker_show_auto")}</option>
        ${Si.map(n=>m`<option value=${n} ?selected=${n===e}>${this.t(`marker_show_${n}`)}</option>`)}
      </select></label
    >`}entityOptions(e){let t=n=>{let i=this.hass?.entities?.[n],r=i?.area_id??(i?.device_id?this.hass?.devices?.[i.device_id]?.area_id:null);return r?this.hass?.areas?.[r]?.name:void 0};return Object.keys(this.hass?.states??{}).filter(e).map(n=>({id:n,label:`${N(this.hass,n)}${t(n)?` \xB7 ${t(n)}`:""}`})).sort((n,i)=>n.label.localeCompare(i.label))}entitySelect(e,t,n,i,r){let s=n===void 0?null:n?this.t("entity_auto",{name:N(this.hass,n)}):this.t("entity_auto_none"),a=[...s!==null?[{id:"__auto",label:s}]:[],{id:"none",label:this.t("entity_none")}];return m`<label class="fp3d-field fp3d-wide"
      >${e}
      <fp3d-entity-picker
        .options=${i}
        .fixed=${a}
        .value=${t===null?s!==null?"__auto":"none":t}
        .placeholder=${this.t("entity_search")}
        ?disabled=${!this.isAdmin}
        @change=${c=>{c.stopPropagation(),r(c.detail.value==="__auto"?null:c.detail.value)}}
      ></fp3d-entity-picker></label
    >`}openingIsExterior(e){let t=this.floor,n=t?Pe(e,t.rooms,t.walls??[]):null;if(!t||!n)return!1;let i=Re(t.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},t.walls??[]);return kn(i.walls,e,n)?.wall.exterior??!1}renderStyleSelect(e){let t=e.type==="door"?en:tn,n=nn({type:e.type,style:null},this.openingIsExterior(e)),i=e.style&&t.includes(e.style)?e.style:"";return m`<label class="fp3d-field fp3d-wide"
      >${this.t("opening_style")}
      <select ?disabled=${!this.isAdmin} @change=${r=>this.updateOpening({style:r.target.value||null})}>
        <option value="" ?selected=${!i}>${this.t("style_auto",{style:this.t(`style_${n}`)})}</option>
        ${t.map(r=>m`<option value=${r} ?selected=${r===i}>${this.t(`style_${r}`)}</option>`)}
      </select></label
    >`}renderOpeningForm(e){let t=this.isAdmin,n=e.type==="window",i=e.type==="garage",r=p=>{if(!this.hass)return null;let w=structuredClone(this._doc.floors);for(let b of w)for(let _ of b.openings)_.id===e.id&&(_[p]=null);return er(this.hass,w).get(e.id)?.[p]??null},s=p=>this.hass?.states[p]?.attributes.device_class,a=this.entityOptions(p=>p.startsWith("cover.")),l=this.entityOptions(p=>/^(sensor|number|input_number)\./.test(p)&&Number.isFinite(Number(this.hass?.states[p]?.state))),c=this.entityOptions(p=>p.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(s(p)??"")||p.startsWith("sensor.")&&pn(this.hass?.states[p])!==null),d=this.entityOptions(p=>{let w=this.hass?.states[p];return p.startsWith("binary_sensor.")?typeof w?.attributes.window_state=="string":p.startsWith("sensor.")&&(pn(w)!==null||/griff|handle|fenster|window|drehgriff/i.test(`${p} ${N(this.hass,p)}`))}),u=this.entityOptions(p=>p.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(s(p)??"")),h=p=>{let w=p===1,b=w?e.tilt:e.tilt2??null,_=w?e.contact:e.contact2,f=(w?e.sensor:e.sensor2)??(b&&b!=="none"?"contact_tilt":"contact"),k=x=>this.updateOpening(w?{contact:x}:{contact2:x==="none"?null:x});return m`<label class="fp3d-field fp3d-wide"
          >${this.t("sensor_kind")}
          <select
            ?disabled=${!t}
            @change=${x=>{let $=x.target.value,M=$==="contact_tilt"?{}:w?{tilt:null}:{tilt2:null};this.updateOpening({...w?{sensor:$}:{sensor2:$},...M})}}
          >
            ${["contact","handle","contact_tilt"].map(x=>m`<option value=${x} ?selected=${x===f}>${this.t(`sensor_kind_${x}`)}</option>`)}
          </select></label
        >
        ${f==="handle"?this.entitySelect(this.t("handle_entity"),_,void 0,d,x=>k(x==="none"?w?"none":null:x)):this.entitySelect(this.t("contact_entity"),_,w?r("contact"):void 0,u,k)}
        ${f==="contact_tilt"?this.entitySelect(this.t("tilt_entity"),b,void 0,c,x=>this.updateOpening(w?{tilt:x==="none"?null:x}:{tilt2:x==="none"?null:x})):y}`},v=sn(e),g=e.type==="door";return m`<section>
      <div class="fp3d-h3row"><h3>${this.t(`preset_${v}`)}</h3>${this.fixButton("opening",e.id)}</div>
      ${t?m`<div class="fp3d-presets" role="group" aria-label=${this.t("opening_type")}>
            ${Object.keys(ut).map(p=>m`<button class="fp3d-chip" aria-pressed=${p===v} @click=${()=>this.setOpeningPreset(e,p)}>${this.t(`preset_${p}`)}</button>`)}
          </div>`:y}
      ${t&&!i?m`<div class="fp3d-actions">
            <button class="fp3d-btn" title=${this.t("flip_hinge_hint")} @click=${()=>this.updateOpening({hinge:e.hinge==="left"?"right":"left"})}>
              ⇆ ${this.t(e.leaves===2?"flip_main_leaf":"flip_hinge")}
            </button>
            ${g?m`<button class="fp3d-btn" title=${this.t("flip_swing_hint")} @click=${()=>this.updateOpening({swing:e.swing==="out"?"in":"out"})}>
                  ⇅ ${this.t("flip_swing")}
                </button>`:y}
          </div>`:y}
      <div class="fp3d-form">
        ${this.num(this.t("width"),e.width,p=>this.updateOpening({width:Math.max(.3,p)}),.01,.3)}
        ${this.num(this.t("opening_position"),e.offset,p=>this.updateOpening({offset:Math.max(0,p)}),.01,0)}
        ${n?this.num(this.t("sill"),e.sill,p=>this.updateOpening({sill:Math.max(0,p)}),.01,0):y}
        ${this.num(this.t("opening_height"),e.height,p=>this.updateOpening({height:Math.max(.3,p)}),.01,.3)}
        ${i?y:this.renderStyleSelect(e)}
        <label class="fp3d-field fp3d-wide" title=${this.t("opening_mark_hint")}
          >${this.t("opening_mark")}
          <select ?disabled=${!this.isAdmin} @change=${p=>this.updateOpening({mark:p.target.value==="closed"?"closed":null})}>
            <option value="" ?selected=${e.mark!=="closed"}>${this.t("opening_mark_open")}</option>
            <option value="closed" ?selected=${e.mark==="closed"}>${this.t("opening_mark_closed")}</option>
          </select></label
        >
        ${i?y:m`<label class="fp3d-field fp3d-wide"
          >${this.t(e.leaves===2?"main_leaf":"hinge")}
          <select ?disabled=${!t} @change=${p=>this.updateOpening({hinge:p.target.value})}>
            <option value="left" ?selected=${e.hinge==="left"}>${this.t("hinge_left")}</option>
            <option value="right" ?selected=${e.hinge==="right"}>${this.t("hinge_right")}</option>
          </select></label
        >`}
        ${n||i?this.entitySelect(this.t("cover_entity"),e.cover,r("cover"),a,p=>this.updateOpening({cover:p})):y}
        ${(n||i)&&e.cover!=="none"?m`${this.entitySelect(this.t("cover_position_entity"),e.position??null,void 0,l,p=>this.updateOpening({position:p==="none"?null:p}))}
              ${e.position?m`<label class="fp3d-check fp3d-wide"
                    ><input
                      type="checkbox"
                      ?disabled=${!t}
                      .checked=${!!e.position_inverted}
                      @change=${p=>this.updateOpening({position_inverted:p.target.checked})}
                    />
                    ${this.t("cover_position_invert")}</label
                  >`:y}
              <label class="fp3d-check fp3d-wide" title=${this.t("cover_confirm_hint")}
                ><input type="checkbox" ?disabled=${!t} .checked=${!!e.confirm} @change=${p=>this.updateOpening({confirm:p.target.checked})} />
                ${this.t("device_confirm")}</label
              >`:y}
        ${n?m`${e.leaves===2?m`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_main")}</h4>`:y}
              ${h(1)} ${e.leaves===2?m`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_second")}</h4>${h(2)}`:y}`:m`${this.entitySelect(this.t(e.leaves===2?"contact_main":"contact_entity"),e.contact,r("contact"),c,p=>this.updateOpening({contact:p}))}
              ${e.leaves===2&&!i?this.entitySelect(this.t("contact_second"),e.contact2,void 0,c,p=>this.updateOpening({contact2:p==="none"?null:p})):y}`}
      </div>
      <p class="fp3d-sub">${this.t(n?"opening_hint":i?"garage_hint":"door_hint")}</p>
      ${t?m`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOpening()}>${this.t("delete")}</button></div>`:y}
    </section>`}renderFurnitureForm(e){let t=this.isAdmin;return m`<section>
      <div class="fp3d-h3row"><h3>${this.t("furniture")}</h3>${this.fixButton("furniture",e.id)}</div>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("furniture_type")}
          <select ?disabled=${!t} @change=${n=>this.updateFurniture({type:n.target.value})}>
            ${Di.map(n=>m`<option value=${n} ?selected=${n===e.type}>${this.t(`furn_${n}`)}</option>`)}
            ${(this.packs??[]).map(n=>m`<optgroup label=${n.name}>
                ${n.items.map(i=>{let r=je(n.id,i.id);return m`<option value=${r} ?selected=${r===e.type}>${Me(i,this.hass?.language??"en")}</option>`})}
              </optgroup>`)}
            ${e.type.startsWith("pack:")&&!(this.packs??[]).some(n=>e.type.startsWith(`pack:${n.id}:`))?m`<option value=${e.type} selected>${it(this.hass,e.type)}</option>`:y}
          </select></label
        >
        ${this.num(this.t("x"),e.x,n=>this.updateFurniture({x:n}))} ${this.num(this.t("z"),e.z,n=>this.updateFurniture({z:n}))}
        ${this.num(this.t("width"),e.w,n=>this.updateFurniture({w:Math.max(.05,n)}),.01,.05)}
        ${this.num(this.t("depth"),e.d,n=>this.updateFurniture({d:Math.max(.05,n)}),.01,.05)}
        ${this.num(this.t("height_m"),e.h,n=>this.updateFurniture({h:Math.max(.005,n)}),.01,0)}
        ${this.num(this.t("rotation"),e.rotation,n=>this.updateFurniture({rotation:(n%360+360)%360}),1)}
        ${Jt(e)&&this.floor?m`${this.num(this.t("mount_height"),e.mount_y??Xt(this.floor,e),n=>this.updateFurniture({mount_y:Math.max(0,n)}),.01,0)}
              ${e.mount_y!=null?m`<button class="fp3d-btn fp3d-field-btn" ?disabled=${!t} @click=${()=>this.updateFurniture({mount_y:null})}>${this.t("height_auto")}</button>`:y}`:y}
      </div>
      ${e.type==="stairs"?m`<p class="fp3d-sub">${this.t("stairs_hint")}</p>`:y}
      ${e.type==="stairwell"?m`<p class="fp3d-sub">${this.t("stairwell_hint")}</p>
            ${this.floor&&!this.floor.rooms.some(n=>n.points.length>=3&&cr(on(e),n.points))?m`<p class="fp3d-sub fp3d-pack-error">${this.t("stairwell_outside")}</p>`:y}`:y}
      ${e.type==="lamp_pendant"?m`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("pendant_shape")}
              <select ?disabled=${!t} @change=${n=>this.updateFurniture({variant:n.target.value||null})}>
                ${["","globe","cone","drum"].map(n=>m`<option value=${n} ?selected=${(e.variant??"")===n}>${this.t(`pendant_${n||"shade"}`)}</option>`)}
              </select></label
            >
          </div>`:y}
      ${qt(e.type)?this.renderFurnitureLinks(e):y} ${e.type==="parking"?this.renderParkingForm(e):y}
      ${t?m`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.rotateFurniture(-90)}>${this.t("rotate_left")}</button>
            <button class="fp3d-btn" @click=${()=>this.rotateFurniture(90)}>${this.t("rotate_right")}</button>
            <button class="fp3d-btn" @click=${()=>this.duplicateFurniture()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
          </div>`:y}
    </section>`}setEnergy(e){let t=structuredClone(this._doc);t.energy={...t.energy,...e},this.setDoc(t)}renderEnergySettings(){let e=this._doc.energy,t=(l,c)=>this.hass?.states[l]?.attributes[c],n=this.entityOptions(l=>l.startsWith("sensor.")&&t(l,"device_class")==="power"),i=this.entityOptions(l=>l.startsWith("sensor.")&&t(l,"device_class")==="battery"),r=this.entityOptions(l=>l.startsWith("sensor.")&&(t(l,"device_class")==="monetary"||/\/(kWh|MWh)$/.test(t(l,"unit_of_measurement")??""))),s=l=>c=>this.setEnergy({[l]:c==="none"?null:c}),a=e.meter?this._doc.floors.find(l=>l.id===e.meter.floor_id)?.name:null;return m`<details class="fp3d-section">
      <summary>${this.t("energy")}</summary>
      <div class="fp3d-form">
        <div class="fp3d-actions fp3d-wide">
          <button class="fp3d-btn ${this._tool==="meter"?"fp3d-primary":""}" ?disabled=${!this.floor} @click=${()=>this._tool="meter"}>
            ${this.t("energy_meter_set")}
          </button>
          ${e.meter?m`<button class="fp3d-btn fp3d-danger" @click=${()=>this.setEnergy({meter:null})}>${this.t("energy_meter_remove")}</button>`:y}
        </div>
        <p class="fp3d-sub fp3d-wide">
          ${e.meter?`${this.t("energy_meter")}: ${a??""} \xB7 ${D(this.hass,e.meter.x,2)} / ${D(this.hass,e.meter.z,2)} m`:this.t("energy_meter_hint")}
        </p>
        ${this.entitySelect(this.t("energy_grid"),e.grid,void 0,n,s("grid"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${e.grid_invert} @change=${l=>this.setEnergy({grid_invert:l.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_solar_sensor"),e.solar,void 0,n,s("solar"))}
        ${this.entitySelect(this.t("energy_battery_sensor"),e.battery,void 0,n,s("battery"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${e.battery_invert} @change=${l=>this.setEnergy({battery_invert:l.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_battery_soc"),e.battery_soc,void 0,i,s("battery_soc"))}
        ${this.entitySelect(this.t("energy_tariff_sensor"),e.tariff,void 0,r,s("tariff"))}
      </div>
      <p class="fp3d-sub">${this.t("energy_hint")}</p>
    </details>`}renderPresenceSettings(){let e=Object.keys(this.hass?.states??{}).filter(i=>i.startsWith("person.")).sort(),t=i=>{let r=i.slice(7),s=this.entityOptions(l=>l.startsWith("sensor.")),a=l=>l.includes(r)&&/(area|room|raum|bermuda|espresense)/.test(l);return[...s.filter(l=>a(l.id)),...s.filter(l=>!a(l.id))]},n=(i,r)=>{let s=structuredClone(this._doc);s.presence=s.presence.filter(a=>a.person!==i),r&&r!=="none"&&s.presence.push({person:i,sensor:r}),this.setDoc(s)};return m`<details class="fp3d-section">
      <summary>${this.t("presence")}</summary>
      <div class="fp3d-form">
        ${e.length?e.map(i=>this.entitySelect(`${N(this.hass,i)} \xB7 ${this.t("presence_sensor")}`,this._doc.presence.find(r=>r.person===i)?.sensor??null,void 0,t(i),r=>n(i,r))):m`<p class="fp3d-sub fp3d-wide">${this.t("no_persons")}</p>`}
      </div>
      <p class="fp3d-sub">${this.t("presence_hint")}</p>
    </details>`}renderFurnitureLinks(e){if(!this.hass)return y;let t=this.hass,n=c=>{let d=structuredClone(this._doc.floors);for(let u of d)for(let h of u.furniture)h.id===e.id&&(h[c]=null);return mn(t,d).get(e.id)?.[c]??null},i=gt(e.type),r=oe(e.type),s=this.entityOptions(c=>r?/^(light|switch|input_boolean)\./.test(c):i?/^(media_player|switch|input_boolean|light)\./.test(c):e.type==="radiator"?c.startsWith("climate."):e.type==="robot_vacuum"?c.startsWith("vacuum."):/^(switch|media_player|fan|input_boolean|climate)\./.test(c)||Ji(t.states[c])),a=this.entityOptions(c=>c.startsWith("sensor.")&&t.states[c]?.attributes.device_class==="power"),l=e.type==="fridge_smart"?this.entityOptions(c=>c.startsWith("binary_sensor.")):[];return m`<div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t(r?"furn_entity_light":i?"furn_entity_tv":e.type==="radiator"?"furn_entity_climate":e.type==="robot_vacuum"?"furn_entity_vacuum":"furn_entity"),e.entity??null,n("entity"),s,c=>this.updateFurniture({entity:c}))}
        ${r?y:this.entitySelect(this.t("furn_power"),e.power??null,n("power"),a,c=>this.updateFurniture({power:c}))}
      </div>
      ${!r||e.entity?m`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
            ><input type="checkbox" .checked=${!!e.confirm} ?disabled=${!this.isAdmin} @change=${c=>this.updateFurniture({confirm:c.target.checked})} />
            ${this.t("device_confirm")}</label
          >
          <div class="fp3d-form">${this.markerSelect(e.marker??null,c=>this.updateFurniture({marker:c}))}</div>`:y}
      ${e.type==="robot_vacuum"?m`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_robot_room"),e.room_sensor??null,ir(t,mn(t,this._doc.floors).get(e.id)?.entity??null,null),this.entityOptions(c=>c.startsWith("sensor.")),c=>this.updateFurniture({room_sensor:c}))}
          </div>`:y}
      ${e.type==="home_battery"?m`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_soc"),e.soc??null,void 0,this.entityOptions(c=>c.startsWith("sensor.")&&(t.states[c]?.attributes.device_class==="battery"||t.states[c]?.attributes.unit_of_measurement==="%")),c=>this.updateFurniture({soc:c==="none"?null:c}))}
          </div>`:y}
      ${e.type==="wallbox"?m`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_wallbox_status"),e.status??null,void 0,this.entityOptions(c=>c.startsWith("binary_sensor.")||c.startsWith("sensor.")),c=>this.updateFurniture({status:c==="none"?null:c}))}
          </div>`:y}
      ${e.type==="fridge_smart"?m`<div class="fp3d-form fp3d-links">
              ${this.entitySelect(this.t("furn_door_left"),e.door_left??null,void 0,l,c=>this.updateFurniture({door_left:c}))}
              ${this.entitySelect(this.t("furn_door_right"),e.door_right??null,void 0,l,c=>this.updateFurniture({door_right:c}))}
            </div>
            <p class="fp3d-sub">${this.t("fridge_hint")}</p>`:y}
      ${nr(e.type)?this.renderPictureRules(e):y}
      <p class="fp3d-sub">${this.t(r?e.type==="lamp_pendant"?"lamp_hint_pendant":"lamp_hint":i?"furn_links_hint_tv":e.type==="robot_vacuum"?"robot_hint":"furn_links_hint")}</p>`}renderParkingForm(e){let t=this.isAdmin,n=this.hass?.language??"en",i=(this.packs??[]).flatMap(b=>b.items.filter(_=>_.vehicle).map(_=>({id:je(b.id,_.id),label:`${Me(_,n)} \xB7 ${b.name}`}))),r=this.entityOptions(b=>/^(binary_sensor|device_tracker|input_boolean|switch|sensor)\./.test(b)),s=this.entityOptions(b=>/^(sensor|input_select|select|input_text)\./.test(b)),a=e.type_entity?this.hass?.states[e.type_entity]:void 0,l=Array.isArray(a?.attributes.options)?a.attributes.options:[],c=e.types??[],d=b=>this.updateFurniture({types:b}),u=(b,_)=>m`<select ?disabled=${!t} @change=${f=>_(f.target.value||null)}>
        <option value="" ?selected=${!b}>${this.t("parking_vehicle_none")}</option>
        ${i.map(f=>m`<option value=${f.id} ?selected=${f.id===b}>${f.label}</option>`)}
      </select>`,h=this.floor,v=h?.rooms.find(b=>b.points.length>=3&&T([e.x,e.z],b.points)),g=e.vehicle?j(e.vehicle):void 0,p=g?g.size[2]*(e.scale??1):0,w=!!v&&!!h&&p>h.height+1e-6;return m`<div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t("parking_entity"),e.entity??null,void 0,r,b=>this.updateFurniture({entity:b==="none"?null:b}))}
        <label class="fp3d-field fp3d-wide">${this.t("parking_vehicle")} ${u(e.vehicle??null,b=>this.updateFurniture({vehicle:b}))}</label>
        ${i.length?y:m`<p class="fp3d-sub fp3d-wide">${this.t("parking_no_pack")}</p>`}
        ${this.num(this.t("parking_scale"),Math.round((e.scale??1)*100),b=>this.updateFurniture({scale:Math.min(150,Math.max(30,b))/100}),5,30)}
        ${this.entitySelect(this.t("parking_type_entity"),e.type_entity??null,void 0,s,b=>this.updateFurniture({type_entity:b==="none"?null:b}))}
        ${e.type_entity?m`<div class="fp3d-wide">
              <div class="fp3d-sub">${this.t("parking_types")}</div>
              ${c.map((b,_)=>m`<div class="fp3d-parking-row">
                  <input
                    type="text"
                    list="fp3d-parking-states"
                    placeholder=${this.t("parking_type_state")}
                    .value=${b.state}
                    ?disabled=${!t}
                    @change=${f=>d(c.map((k,x)=>x===_?{...k,state:f.target.value}:k))}
                  />
                  ${u(b.vehicle,f=>d(c.map((k,x)=>x===_?{...k,vehicle:f??""}:k)))}
                  <button class="fp3d-btn" ?disabled=${!t} title=${this.t("delete")} @click=${()=>d(c.filter((f,k)=>k!==_))}>✕</button>
                </div>`)}
              <datalist id="fp3d-parking-states">${l.map(b=>m`<option value=${b}></option>`)}</datalist>
              ${t?m`<button class="fp3d-btn" @click=${()=>d([...c,{state:l[c.length]??"",vehicle:i[0]?.id??""}])}>${this.t("parking_add_type")}</button>`:y}
            </div>`:y}
      </div>
      ${w?m`<p class="fp3d-sub fp3d-warn">${this.t("parking_too_tall",{car:D(this.hass,p,2),room:D(this.hass,h.height,2)})}</p>`:y}
      <p class="fp3d-sub">${this.t("parking_hint")}</p>`}toggleLibrary(e){let t=new Set(this._libOpen);t.has(e)?t.delete(e):t.add(e),this._libOpen=t;try{localStorage.setItem("neonplan3d.library",JSON.stringify([...t]))}catch{}}librarySection(e,t,n,i){let r=i?n.filter(a=>a.label.toLowerCase().includes(i)):n;if(i&&!r.length)return y;let s=i?!0:this._libOpen.has(e);return m`<button class="fp3d-lib-head fp3d-lib-toggle" aria-expanded=${s} @click=${()=>this.toggleLibrary(e)}>
        <span class="fp3d-lib-caret">${s?"\u25BE":"\u25B8"}</span>${t} <span class="fp3d-lib-count">${r.length}</span>
      </button>
      ${s?m`<div class="fp3d-library">${r.map(a=>this.libraryButton(a.type,a.label))}</div>`:y}`}storedPictures(){let e=[];for(let t of this._doc.floors)for(let n of t.furniture)for(let i of n.pictures??[])i.image&&!/^https?:\/\//.test(i.image)&&!i.image.startsWith("camera:")&&!e.includes(i.image)&&e.push(i.image);return e}renderPictureRules(e){let t=this.isAdmin,n=e.pictures??[];if(!wn("screens"))return m`<div class="fp3d-wide">
        <div class="fp3d-sub">${this.t("screen_pictures")}</div>
        <p class="fp3d-sub">🔒 ${this.t("pro_feature_screens")} – ${this.t("pro_locked")} <a href=${qe(this.hass?.language)} target="_blank" rel="noopener">${this.t("pro_shop")}</a> · <a href=${Xe(this.hass?.language,"screens")} target="_blank" rel="noopener">${this.t("manual_more")}</a></p>
      </div>`;let i=b=>this.updateFurniture({pictures:b}),r=this.entityOptions(()=>!0),s=b=>["string","number","boolean"].includes(typeof b),a=b=>Object.entries(this.hass?.states[b]?.attributes??{}).filter(([_,f])=>s(f)&&_!=="friendly_name"&&_!=="icon").map(([_])=>_),l=(b,_)=>{let f=this.hass?.states[b];return f?String((_?f.attributes[_]:f.state)??""):""},c=(b,_)=>{let f=this.hass?.states[b],k=!_&&Array.isArray(f?.attributes.options)?f.attributes.options:[];return k.length?k:[l(b,_)]},d=b=>`${b.entity}\0${b.attribute??""}`,u=[];n.forEach((b,_)=>{let f=u.find(k=>d(k)===d(b));f?f.rows.push(_):u.push({entity:b.entity,attribute:b.attribute??null,rows:[_]})});let h=(b,_)=>i(n.map((f,k)=>b.rows.includes(k)?{...f,..._}:f)),v=(b,_)=>i(n.map((f,k)=>k===b?{...f,..._}:f)),g=this.storedPictures(),p=this.entityOptions(b=>b.startsWith("camera.")),w=b=>b.image.startsWith("camera:")?b.image.slice(7):null;return m`<div class="fp3d-wide">
      <div class="fp3d-sub">${this.t("screen_pictures")}</div>
      ${n.length?m`<label class="fp3d-field fp3d-wide"
            >${this.t("screen_bg")}
            <select ?disabled=${!t} @change=${b=>this.updateFurniture({screen_bg:b.target.value})}>
              <option value="black" ?selected=${(e.screen_bg??"black")==="black"}>${this.t("screen_bg_black")}</option>
              <option value="white" ?selected=${e.screen_bg==="white"}>${this.t("screen_bg_white")}</option>
            </select></label
          >`:y}
      ${u.map(b=>m`<div class="fp3d-picture-group">
          <fp3d-entity-picker
            .options=${r}
            .value=${b.entity}
            .placeholder=${this.t("entity_search")}
            ?disabled=${!t}
            @change=${_=>{_.stopPropagation(),h(b,{entity:_.detail.value})}}
          ></fp3d-entity-picker>
          <select
            ?disabled=${!t}
            title=${this.t("picture_attribute")}
            @change=${_=>{let f=_.target.value||null,k=l(b.entity,f);i(n.map((x,$)=>b.rows.includes($)?{...x,attribute:f,state:b.rows[0]===$?k:x.state}:x))}}
          >
            <option value="" ?selected=${!b.attribute}>${this.t("picture_state_of")}</option>
            ${a(b.entity).map(_=>m`<option value=${_} ?selected=${_===b.attribute}>${_}</option>`)}
          </select>
          <span class="fp3d-sub fp3d-rule-now">${this.t("picture_current",{value:l(b.entity,b.attribute)||"\u2013"})}</span>
          ${b.rows.map(_=>{let f=n[_],k=!!this.hass&&tr(this.hass,f);return m`<div class="fp3d-picture-row ${k?"fp3d-rule-hit":""}">
              <input
                type="text"
                list="fp3d-picture-states-${_}"
                placeholder=${this.t("picture_state")}
                .value=${f.state}
                ?disabled=${!t}
                @change=${x=>v(_,{state:x.target.value})}
              />
              <datalist id="fp3d-picture-states-${_}"><option value="*"></option>${c(b.entity,b.attribute).map(x=>m`<option value=${x}></option>`)}</datalist>
              ${this._images[f.image]?m`<img class="fp3d-picture-thumb" src=${this._images[f.image].url} alt="" /> `:y}
              ${w(f)&&this.hass?.states[w(f)]?.attributes.entity_picture?m`<img class="fp3d-picture-thumb" src=${String(this.hass.states[w(f)].attributes.entity_picture)} alt="" />`:y}
              <label class="fp3d-btn fp3d-picture-pick">
                ${f.image?this.t("picture_change"):this.t("picture_pick")}
                <input type="file" accept="image/*" hidden ?disabled=${!t} @change=${x=>{this.uploadPicture(x,e,_)}} />
              </label>
              ${g.filter(x=>x!==f.image).length?m`<div class="fp3d-picture-reuse" title=${this.t("picture_reuse")}>
                    ${g.filter(x=>x!==f.image&&this._images[x]).map(x=>m`<button class="fp3d-picture-reuse-btn" ?disabled=${!t} @click=${()=>v(_,{image:x})}><img src=${this._images[x].url} alt="" /></button>`)}
                  </div>`:y}
              <input
                type="url"
                placeholder=${this.t("picture_url")}
                .value=${/^https?:\/\//.test(f.image)?f.image:""}
                ?disabled=${!t}
                @change=${x=>{let $=x.target.value.trim();$&&v(_,{image:$})}}
              />
              ${p.length?m`<fp3d-entity-picker
                    class="fp3d-picture-camera"
                    .options=${p}
                    .fixed=${[{id:"none",label:this.t("picture_camera_none")}]}
                    .value=${w(f)??"none"}
                    .placeholder=${this.t("picture_camera")}
                    ?disabled=${!t}
                    @change=${x=>{x.stopPropagation(),x.detail.value!=="none"?v(_,{image:`camera:${x.detail.value}`}):w(f)&&v(_,{image:""})}}
                  ></fp3d-entity-picker>`:y}
              <span class="fp3d-sub">${k?this.t("picture_matches"):""}</span>
              <button class="fp3d-btn" ?disabled=${!t} title=${this.t("delete")} @click=${()=>i(n.filter((x,$)=>$!==_))}>✕</button>
            </div>`})}
          ${t?m`<button class="fp3d-btn" @click=${()=>i([...n,{entity:b.entity,attribute:b.attribute,state:l(b.entity,b.attribute),image:""}])}>
                ${this.t("picture_add_value")}
              </button>`:y}
        </div>`)}
      ${t?m`<button class="fp3d-btn" @click=${()=>i([...n,{entity:r[0]?.id??"",attribute:null,state:"on",image:""}])}>${this.t("picture_add_entity")}</button>`:y}
      <p class="fp3d-sub">${this.t("screen_pictures_hint")}</p>
    </div>`}async uploadPicture(e,t,n){let i=e.target,r=i.files?.[0];if(i.value="",!r)return;let s=await createImageBitmap(r),a=Math.min(1,512/Math.max(s.width,s.height)),l=document.createElement("canvas");l.width=Math.round(s.width*a),l.height=Math.round(s.height*a),l.getContext("2d").drawImage(s,0,0,l.width,l.height);let c=l.toDataURL(r.type==="image/png"?"image/png":"image/jpeg",.85),d=O("pic");await ct(this.hass,d,c),this._images={...this._images,[d]:{url:c,aspect:l.height/l.width}};let u=this.furnitureItem?.id===t.id?this.furnitureItem.pictures??[]:t.pictures??[];this.updateFurniture({pictures:u.map((h,v)=>v===n?{...h,image:d}:h)})}renderFurnitureLibrary(){let e=this.room,t=this._furnQuery.trim().toLowerCase(),n=this.hass?.language??"en";return m`<section>
      <h3>${this.t("furniture_add")}</h3>
      <p class="fp3d-sub">${e?this.t("furniture_into",{room:e.name}):this.t("furniture_pick_room")}</p>
      <input
        class="fp3d-search"
        type="search"
        placeholder=${this.t("furniture_search")}
        .value=${this._furnQuery}
        @input=${i=>this._furnQuery=i.target.value}
      />
      ${Object.entries(Oi).map(([i,r])=>this.librarySection(`group:${i}`,this.t(`furn_group_${i}`),[...r,...i==="kitchen"&&wn("fridge_smart")?["fridge_smart"]:[]].map(s=>({type:s,label:this.t(`furn_${s}`)})),t))}
      ${(this.packs??[]).map(i=>this.librarySection(`pack:${i.id}`,i.name,i.items.map(r=>({type:je(i.id,r.id),label:Me(r,n)})),t))}
    </section>
    <div class="fp3d-ext-teaser">
      <b>${this.t("ext_teaser_title")}</b>
      <span class="fp3d-sub">${this.t("ext_teaser_text")}</span>
      <button class="fp3d-btn fp3d-primary" @click=${()=>this.dispatchEvent(new CustomEvent("open-extensions",{bubbles:!0,composed:!0}))}>${this.t("ext_open")}</button>
    </div>`}libraryButton(e,t){let n=r=>{this.showPreview(e,r.currentTarget)},i=oe(e)?"light":qt(e)?"switch":null;return m`<button
      class="fp3d-btn ${i?"fp3d-lib-electric":""}"
      title=${i?this.t(i==="light"?"lib_badge_light":"lib_badge_electric"):t}
      @click=${()=>this.addFurniture(e)}
      @mouseenter=${n}
      @focus=${n}
      @mouseleave=${()=>this._preview=null}
      @blur=${()=>this._preview=null}
    >
      ${t}
      ${i?m`<svg class="fp3d-lib-badge" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${nt(i)} />
          </svg>`:y}
    </button>`}async showPreview(e,t){let n=t.getBoundingClientRect(),i={left:Math.max(8,n.left-196),top:Math.max(8,Math.min(window.innerHeight-200,n.top+n.height/2-95))};this._preview={type:e,url:null,...i};try{let r=await Or(),[s,a,l]=dt(e),c=r.furniturePreview({type:e,w:s,d:a,h:l,variant:null,lamp:Hi[e]??null},180,this.packs??[]);this._preview?.type===e&&(this._preview={type:e,url:c,...i})}catch{this._preview=null}}renderPreview(){let e=this._preview;return e?m`<div class="fp3d-preview" style="left:${e.left}px;top:${e.top}px" aria-hidden="true">
      ${e.url?m`<img src=${e.url} alt="" />`:m`<span class="fp3d-preview-wait"></span>`}
      <b>${it(this.hass,e.type)}</b>
    </div>`:y}renderDeviceForm(e){let t=this.isAdmin,n=W(e.entity_id),i=n==="light",r=e.mount??"ceiling",s=n?un(n,this.floor?.height??2.5,i?r:null):1;return m`<section>
      <div class="fp3d-h3row"><h3>${this.t("device")}</h3>${this.fixButton("device",e.entity_id)}</div>
      <p class="fp3d-dev-title">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d=${n?nt(n):""} />
        </svg>
        ${N(this.hass,e.entity_id)}
      </p>
      <div class="fp3d-form">
        ${i?m`<label class="fp3d-field fp3d-wide"
              >${this.t("lamp_mount")}
              <select ?disabled=${!t} @change=${a=>this.updateDevice({mount:a.target.value,y:null})}>
                ${["ceiling","floor","table","wall"].map(a=>m`<option value=${a} ?selected=${a===r}>${this.t(`lamp_${a}`)}</option>`)}
              </select></label
            >`:n==="camera"?m`<label class="fp3d-field fp3d-wide"
                >${this.t("camera_mount")}
                <select ?disabled=${!t} @change=${a=>this.updateDevice({mount:a.target.value,y:null})}>
                  <option value="wall" ?selected=${(e.mount??"wall")==="wall"}>${this.t("camera_mount_wall")}</option>
                  <option value="ceiling" ?selected=${e.mount==="ceiling"}>${this.t("camera_mount_ceiling")}</option>
                </select></label
              >`:y}
        ${this.num(this.t("x"),e.x,a=>this.updateDevice({x:a}))} ${this.num(this.t("z"),e.z,a=>this.updateDevice({z:a}))}
        ${this.num(this.t("marker_height"),e.y??s,a=>this.updateDevice({y:Math.max(0,a)}),.05,0)}
        ${this.num(this.t("rotation"),e.rotation??0,a=>this.updateDevice({rotation:(a%360+360)%360}),1)}
        ${n==="camera"?m`${this.num(this.t("camera_fov"),e.fov??(e.mount==="ceiling"?360:90),a=>this.updateDevice({fov:Math.min(360,Math.max(10,a))}),5,10)}
            ${this.num(this.t("camera_reach"),e.reach??(e.mount==="ceiling"?3:4.5),a=>this.updateDevice({reach:Math.min(50,Math.max(.5,a))}),.5,.5)}
            ${this.num(this.t("camera_tilt"),e.tilt??(e.mount==="ceiling"?65:20),a=>this.updateDevice({tilt:Math.min(90,Math.max(0,a))}),5,0)}
            <p class="fp3d-sub fp3d-wide">${this.t("camera_aim_hint")}</p>`:y}
        ${n&&Ui.has(n)?m`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
              ><input type="checkbox" .checked=${!!e.confirm} ?disabled=${!t} @change=${a=>this.updateDevice({confirm:a.target.checked})} />
              ${this.t("device_confirm")}</label
            >`:y}
        ${this.markerSelect(e.marker??null,a=>this.updateDevice({marker:a}))}
      </div>
      ${t?m`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.centreDevice()}>${this.t("device_centre")}</button>
            ${e.y!==null?m`<button class="fp3d-btn" @click=${()=>this.updateDevice({y:null})}>${this.t("height_auto")}</button>`:y}
            <button
              class="fp3d-btn fp3d-danger"
              @click=${()=>{this.removeDevice(e.entity_id),this._deviceId=null}}
            >
              ${this.t("devices_remove")}
            </button>
          </div>`:y}
    </section>`}renderDeviceList(e){let t=this.isAdmin,n=this.hass,i=e.area_id?n?.areas?.[e.area_id]?.name:void 0,r=n?ve(n,e.area_id).filter(f=>mt(W(f))):[],s=new Set([...this.floor?.placements.filter(f=>T([f.x,f.z],e.points)).map(f=>f.entity_id)??[],...this.floor?.furniture.filter(f=>oe(f.type)&&f.entity&&T([f.x,f.z],e.points)).map(f=>f.entity)??[]]),a=n?hn(n,r):[],l=a.map(f=>f.primary).filter(f=>!s.has(f)),c=this._deviceQuery.trim().toLowerCase(),d=f=>!c||N(n,f,i).toLowerCase().includes(c)||f.includes(c),u=this.floor?.placements.filter(f=>W(f.entity_id)==="light"&&(f.mount??"ceiling")==="ceiling"&&T([f.x,f.z],e.points)).length,h=new Set(e.panel??[]),v=new Map;for(let f of this._doc.floors)for(let k of[...f.placements.map(x=>[x.entity_id,x.x,x.z]),...f.furniture.filter(x=>oe(x.type)&&x.entity).map(x=>[x.entity,x.x,x.z])]){let x=f.rooms.find($=>T([k[1],k[2]],$.points));x&&x.id!==e.id&&v.set(k[0],x.name)}let g=(f,k=!1,x=i)=>{let $=s.has(f),M=$?void 0:v.get(f);return m`<div class="fp3d-row fp3d-dev-row ${k?"fp3d-dev-extra":""}">
        <button class="fp3d-dev-name ${$?"":"fp3d-muted"}" ?disabled=${!$} @click=${()=>this.selectItem("device",f)}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${nt(W(f))} />
          </svg>
          <span>${N(n,f,x)}${M?m`<small class="fp3d-muted"> · ${this.t("devices_placed_in",{room:M})}</small>`:y}</span>
        </button>
        ${t&&!$?m`<button
              class="fp3d-pin ${h.has(f)?"fp3d-pin-on":""}"
              aria-pressed=${h.has(f)}
              title=${this.t(h.has(f)?"panel_unpin":"panel_pin")}
              @click=${()=>this.updateRoom({panel:h.has(f)?[...h].filter(E=>E!==f):[...h,f]})}
            >
              ${h.has(f)?"\u2605":"\u2606"}
            </button>`:y}
        ${t?$?m`<button class="fp3d-link" @click=${()=>this.removeDevice(f)}>${this.t("devices_remove")}</button>`:m`<button class="fp3d-link" @click=${()=>this.placeDevices([f])}>${this.t("devices_place")}</button>`:y}
      </div>`},p=t?this._devSource:"area",w=f=>{this._devSource=f,this._deviceQuery=""},b=m`<input
      class="fp3d-search"
      type="search"
      placeholder=${this.t("devices_search")}
      .value=${this._deviceQuery}
      @input=${f=>this._deviceQuery=f.target.value}
    />`,_=()=>{confirm(this.t("devices_place_all_confirm",{n:l.length}))&&this.placeDevices(l)};return m`<section>
      <h3>${this.t("devices")}</h3>
      <p class="fp3d-sub">${this.t("devices_panel_hint")}</p>
      ${t?m`<div class="fp3d-seg fp3d-dev-source">
            <button aria-pressed=${p==="area"} @click=${()=>w("area")}>${this.t("devices_src_area")}${r.length?` (${a.length})`:""}</button>
            <button aria-pressed=${p==="other"} @click=${()=>w("other")}>${this.t("devices_src_other")}</button>
            <button aria-pressed=${p==="none"} @click=${()=>w("none")}>${this.t("devices_src_none")}</button>
          </div>`:y}
      ${p!=="area"?m`${b}${this.renderDeviceExtras(e,g,p)}`:e.area_id?r.length?m`${t&&(u??0)>=2?m`<button class="fp3d-btn fp3d-wide-btn" @click=${()=>this.spreadCeilingLights(e)}>${this.t("lights_spread")}</button>`:y}
              ${r.length>8?b:y}
              <div class="fp3d-room-list">
                ${a.map(f=>{let k=f.others.filter(d),x=this._expanded.has(f.primary)||!!c&&k.length>0;return!d(f.primary)&&!k.length?y:m`${g(f.primary)}
                  ${f.others.length?m`<button
                        class="fp3d-more"
                        @click=${()=>{let $=new Set(this._expanded);$.has(f.primary)?$.delete(f.primary):$.add(f.primary),this._expanded=$}}
                      >
                        ${x?this.t("devices_less"):this.t("devices_more",{n:f.others.length})}
                      </button>`:y}
                  ${x?(c?k:f.others).map($=>g($,!0)):y}`})}
              </div>
              ${t&&l.length>1?m`<button class="fp3d-link fp3d-place-all" @click=${_}>${this.t("devices_place_all_n",{n:l.length})}</button>`:y}
              <p class="fp3d-sub">${this.t("devices_hint")}</p>`:m`<p class="fp3d-sub">${this.t("devices_none")}</p>`:m`<p class="fp3d-sub">${this.t("devices_none_area")}</p>`}
    </section>`}renderDeviceExtras(e,t,n){let i=this.hass;if(!i)return y;let r=50,s=this._deviceQuery.trim().toLowerCase(),a=(d,u)=>!s||`${N(i,d,u)} ${d} ${u??""}`.toLowerCase().includes(s),l=d=>d>0?m`<p class="fp3d-sub">${this.t("devices_narrow",{n:d})}</p>`:y;if(n==="other"){let d=0,u=0,h=qi(i,e.area_id).map(v=>{let g=v.ids.filter(w=>a(w,v.name)),p=g.slice(0,Math.max(0,r-d));return d+=p.length,u+=g.length-p.length,p.length?m`<div class="fp3d-dev-area">${v.name}</div>${p.map(w=>t(w,!1,v.name))}`:y});return d?m`<div class="fp3d-room-list">${h}</div>${l(u)}`:m`<p class="fp3d-sub">${this.t("devices_none")}</p>`}let c=Xi(i).filter(d=>a(d));return c.length?m`<div class="fp3d-room-list">${c.slice(0,r).map(d=>t(d))}</div>${l(c.length-Math.min(c.length,r))}`:m`<p class="fp3d-sub">${this.t("devices_none")}</p>`}renderRoomClimate(e){let t=this.hass;if(!t)return y;let n=(s,a)=>{let l={...e.climate??{},[s]:a},c=Object.values(l).every(d=>d==null);this.updateRoom({climate:c?null:l})},i=!!e.climate&&Object.values(e.climate).some(s=>s!=null),r=(s,a)=>{let l=cn[s],c=Zi(t,this.floor??null,{...e,climate:null},s),d=this.entityOptions(u=>u.startsWith("sensor.")&&t.states[u]?.attributes.device_class===l).map(u=>({...u,rank:(_t(t,u.id)===e.area_id?0:1)+(dn(t,u.id)?0:2)})).sort((u,h)=>u.rank-h.rank).map(({id:u,label:h})=>({id:u,label:h}));return this.entitySelect(a,e.climate?.[s]??null,c[0]??null,d,u=>n(s,u))};return m`<details class="fp3d-points" ?open=${i}>
      <summary>${this.t("climate")}</summary>
      <div class="fp3d-form">
        ${r("temperature",this.t("climate_temperature"))} ${r("humidity",this.t("climate_humidity"))} ${r("co2",this.t("climate_co2"))}
      </div>
      <p class="fp3d-sub">${this.t("climate_hint")}</p>
    </details>`}renderBackgroundForm(e){let t=e.background;return m`<details class="fp3d-section">
      <summary>${this.t("background")}</summary>
      <div class="fp3d-form">
        <label class="fp3d-btn fp3d-wide fp3d-upload"
          >${this.t("background_upload")}<input type="file" accept="image/png,image/jpeg,image/webp" @change=${this.uploadBackground}
        /></label>
        ${t?m`${this.num(this.t("x"),t.x,n=>this.updateFloor({background:{...t,x:n}}))}
              ${this.num(this.t("z"),t.z,n=>this.updateFloor({background:{...t,z:n}}))}
              ${this.num(this.t("background_width"),t.width,n=>this.updateFloor({background:{...t,width:Math.max(.1,n)}}),.01,.1)}
              <label class="fp3d-field"
                >${this.t("background_opacity")}
                <input
                  type="range"
                  min="0.05"
                  max="1"
                  step="0.05"
                  .value=${String(t.opacity)}
                  @change=${n=>this.updateFloor({background:{...t,opacity:parseFloat(n.target.value)}})}
              /></label>
              <button class="fp3d-btn fp3d-danger fp3d-wide" @click=${()=>this.updateFloor({background:null})}>${this.t("background_remove")}</button>`:y}
      </div>
    </details>`}async loadHistory(){if(this.hass)try{this._history=await ni(this.hass)}catch{this._history=[]}}async restoreFromHistory(e){!this.hass||!confirm(this.t("backup_restore_confirm",{time:this.snapshotTime(e)}))||(await ri(this.hass,e.id),this._notice=this.t("backup_restored"),await this.loadHistory())}async exportBackup(){if(this.hass){this._backupBusy=!0;try{let e=await fi(this.hass),t={};for(let i of Ni(e.building))try{t[i]=await Nt(this.hass,i)}catch{}let n=new Date().toISOString().slice(0,10);an(`neonplan3d-${this.t("export_name_full")}-${n}.json`,JSON.stringify({...e,exported_at:new Date().toISOString(),images:t}))}catch(e){alert(this.t("backup_import_error",{error:String(e?.message??e)}))}finally{this._backupBusy=!1}}}async importBackup(e){let t=e.target,n=t.files?.[0];if(t.value="",!n||!this.hass)return;let i;try{i=JSON.parse(await n.text())}catch{alert(this.t("import_error_not_json"));return}if(i?.format!=="neonplan3d-backup"||!i.building){alert(this.t("backup_full_not_backup"));return}if(confirm(this.t("backup_full_confirm"))){this._backupBusy=!0;try{let r=await mi(this.hass,i.building,i.packs??[]),s=0;for(let[l,c]of Object.entries(i.images??{}))try{await ct(this.hass,l,c),s++}catch{}this.setDoc(pt(r.building)),this._floorId=r.building.floors[0]?.id??null,this.selectItem("room",null),this.fit(),this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let a=r.skipped.length?` ${this.t("backup_full_skipped",{packs:r.skipped.map(l=>l.id).join(", ")})}`:"";this._notice=this.t("backup_full_restored",{packs:r.packs,pictures:s})+a}catch(r){let{code:s,message:a}=r??{};alert(this.t("backup_import_error",{error:a??s??String(r)}))}finally{this._backupBusy=!1}}}exportPlan(e){let t=new Date().toISOString().slice(0,10);an(`neonplan3d-${this.t(e?"export_name_template":"export_name_backup")}-${t}.json`,JSON.stringify(Bi(this._doc,e),null,2))}async importPlan(e){let t=e.target,n=t.files?.[0];if(t.value="",!n||!this.hass)return;let i;try{i=Vi(await n.text())}catch(r){let s=r.message;alert(s==="not_json"?this.t("import_error_not_json"):s==="not_plan"?this.t("import_error_not_plan"):this.t("backup_import_error",{error:s}));return}confirm(this.t("backup_import_confirm"))&&(await ii(this.hass).catch(()=>{}),this.setDoc(i),this._floorId=i.floors[0]?.id??null,this.selectItem("room",null),this.fit(),this._notice=this.t("backup_imported"))}snapshotTime(e){return new Date(e.saved_at*1e3).toLocaleString(this.hass?.language,{dateStyle:"short",timeStyle:"short"})}renderBackup(){return m`<details
      class="fp3d-section"
      @toggle=${e=>{e.target.open&&this.loadHistory()}}
    >
      <summary>${this.t("backup")}</summary>
      <h4 class="fp3d-lib-head">${this.t("backup_history")}</h4>
      ${this._history===null?m`<p class="fp3d-sub">${this.t("loading")}</p>`:this._history.length?m`<div class="fp3d-room-list">
              ${this._history.map(e=>m`<div class="fp3d-row fp3d-dev-row">
                  <span>${this.snapshotTime(e)} <span class="fp3d-muted">· ${this.t("backup_summary",{rooms:e.rooms,furniture:e.furniture})}</span></span>
                  <button class="fp3d-link" @click=${()=>this.restoreFromHistory(e)}>${this.t("backup_restore")}</button>
                </div>`)}
            </div>`:m`<p class="fp3d-sub">${this.t("backup_none")}</p>`}
      <h4 class="fp3d-lib-head">${this.t("backup_file")}</h4>
      <div class="fp3d-actions">
        <button class="fp3d-btn" @click=${()=>this.exportPlan(!1)}>${this.t("backup_export")}</button>
        <button class="fp3d-btn" title=${this.t("backup_export_share_hint")} @click=${()=>this.exportPlan(!0)}>${this.t("backup_export_share")}</button>
        <label class="fp3d-btn fp3d-upload"
          >${this.t("backup_import")}<input type="file" accept="application/json,.json" @change=${this.importPlan}
        /></label>
      </div>
      <p class="fp3d-sub">${this.t("backup_hint")}</p>
      <h4 class="fp3d-lib-head">${this.t("backup_full")}</h4>
      <div class="fp3d-actions">
        <button class="fp3d-btn" ?disabled=${this._backupBusy} @click=${()=>this.exportBackup()}>${this._backupBusy?"\u2026":this.t("backup_full_export")}</button>
        <label class="fp3d-btn fp3d-upload"
          >${this.t("backup_full_import")}<input type="file" accept="application/json,.json" @change=${this.importBackup}
        /></label>
      </div>
      <p class="fp3d-sub">${this.t("backup_full_hint")}</p>
    </details>`}renderSettings(){let e=this._doc.settings,t=n=>{let i=structuredClone(this._doc);Object.assign(i.settings,n),this.setDoc(i)};return m`<details class="fp3d-section">
      <summary>${this.t("settings")}</summary>
      <div class="fp3d-form">
        ${this.num(this.t("wall_exterior"),e.wall_exterior,n=>t({wall_exterior:Math.min(1,Math.max(.02,n))}),.01,.02)}
        ${this.num(this.t("wall_interior"),e.wall_interior,n=>t({wall_interior:Math.min(1,Math.max(.02,n))}),.01,.02)}
        ${this.num(this.t("grid"),e.grid,n=>t({grid:Math.min(1,Math.max(.01,n))}),.01,.01)}
        ${this.num(this.t("north"),e.north,n=>t({north:(Math.round(n)%360+360)%360}),1)}
        <label class="fp3d-field fp3d-wide"
          >${this.t("roof")}
          <select
            @change=${n=>{let i=n.target.value;i==="custom"?(this.useRoofSections(),this._tool="roof"):t({roof:{...e.roof,type:i}})}}
          >
            ${["none","flat","gable","custom"].map(n=>m`<option value=${n} ?selected=${n===e.roof.type}>${this.t(`roof_${n}`)}</option>`)}
          </select></label
        >
        ${e.roof.type==="gable"?m`<label class="fp3d-field fp3d-wide"
              >${this.t("roof_ridge")}
              <select @change=${n=>t({roof:{...e.roof,ridge:n.target.value==="short"?"short":null}})}>
                <option value="long" ?selected=${e.roof.ridge!=="short"}>${this.t("roof_ridge_long")}</option>
                <option value="short" ?selected=${e.roof.ridge==="short"}>${this.t("roof_ridge_short")}</option>
              </select></label
            >`:y}
        ${e.roof.type==="gable"?this.num(this.t("roof_pitch"),e.roof.pitch,n=>t({roof:{...e.roof,pitch:Math.min(60,Math.max(5,n))}}),1,5):y}
        ${e.roof.type!=="none"?this.num(this.t("roof_overhang"),e.roof.overhang,n=>t({roof:{...e.roof,overhang:Math.min(2,Math.max(0,n))}}),.05,0):y}
        ${this.hass?this.entitySelect(this.t("weather_entity"),e.weather_entity??null,dr(this.hass,null),this.entityOptions(n=>n.startsWith("weather.")),n=>t({weather_entity:n})):y}
        <div class="fp3d-sub fp3d-wide">${this.t("weather_effects")}</div>
        ${zi.map(n=>{let i=e.weather_effects??Yt;return m`<label class="fp3d-check"
            ><input
              type="checkbox"
              .checked=${i.includes(n)}
              @change=${r=>{let s=r.target.checked;t({weather_effects:s?[...new Set([...i,n])]:i.filter(a=>a!==n)})}}
            />
            ${this.t(`weather_effect_${n}`)}</label
          >`})}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${e.rain_warning!==!1} @change=${n=>t({rain_warning:n.target.checked})} />
          ${this.t("rain_warning")}</label
        >
      </div>
      <p class="fp3d-sub">${this.t("north_hint")} ${this.t("weather_entity_hint")}</p>
    </details>`}static styles=[Oe,zt,ee`
      :host {
        display: block;
        height: 100%;
      }
      .fp3d-editor {
        position: relative;
        display: grid;
        grid-template-columns: 1fr 320px;
        height: 100%;
        min-height: 0;
      }
      .fp3d-editor:has(> .fp3d-side-strip) {
        grid-template-columns: 1fr 52px;
      }
      .fp3d-side-strip {
        padding: 10px 6px;
        gap: 8px;
        align-items: center;
      }
      .fp3d-strip-btn {
        width: 40px;
        height: 40px;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        font-size: 18px;
        cursor: pointer;
      }
      .fp3d-strip-hot {
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
      }
      .fp3d-side-overlay {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: min(340px, 60%);
        z-index: 6;
        box-shadow: -12px 0 32px rgba(0, 0, 0, 0.45);
      }
      .fp3d-pin-row {
        display: flex;
        gap: 8px;
        justify-content: flex-end;
      }
      .fp3d-3d-size {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        color: var(--fp3d-muted);
        font-size: 12px;
      }
      .fp3d-3d-size input {
        width: 58px;
        padding: 4px 6px;
        font: inherit;
        color: var(--fp3d-text);
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
      }
      .fp3d-3d-select {
        font: inherit;
        color: var(--fp3d-text);
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        padding: 4px 10px;
      }
      .fp3d-editor.fp3d-narrow {
        grid-template-columns: 1fr;
        grid-template-rows: minmax(360px, 62vh) auto;
        height: auto;
      }
      .fp3d-main {
        display: grid;
        grid-template-rows: auto 1fr;
        min-height: 0;
        min-width: 0;
      }
      .fp3d-toolbar {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: center;
        padding: 10px 12px;
      }
      .fp3d-warn {
        color: var(--fp3d-warm);
        font-size: 12.5px;
      }
      .fp3d-picture-group {
        display: grid;
        gap: 6px;
        margin: 6px 0 10px;
        padding: 8px;
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
      }
      .fp3d-picture-group > select {
        min-width: 0;
      }
      .fp3d-picture-row {
        display: grid;
        grid-template-columns: 1fr auto auto;
        gap: 6px;
        align-items: center;
        padding: 6px;
        border-radius: 8px;
        background: color-mix(in srgb, var(--fp3d-line) 40%, transparent);
      }
      .fp3d-picture-row input[type="url"] {
        grid-column: 1 / -1;
        min-width: 0;
      }
      .fp3d-picture-row > .fp3d-sub,
      .fp3d-picture-row > .fp3d-picture-camera {
        grid-column: 1 / -1;
      }
      .fp3d-picture-row.fp3d-rule-hit {
        outline: 1px solid var(--fp3d-accent);
      }
      .fp3d-rule-now {
        grid-column: 1 / -1;
      }
      .fp3d-rule-hit {
        color: var(--fp3d-accent);
      }
      .fp3d-picture-reuse {
        grid-column: 1 / -1;
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
      }
      .fp3d-picture-reuse-btn {
        padding: 2px;
        border: 1px solid var(--fp3d-line);
        border-radius: 6px;
        background: var(--fp3d-chrome-solid);
        cursor: pointer;
      }
      .fp3d-picture-reuse-btn img {
        display: block;
        height: 28px;
        max-width: 60px;
        object-fit: contain;
      }
      .fp3d-picture-reuse-btn:hover {
        border-color: var(--fp3d-accent);
      }
      .fp3d-picture-thumb {
        max-height: 60px;
        max-width: 100%;
        border-radius: 6px;
        justify-self: start;
      }
      .fp3d-picture-pick {
        justify-self: start;
      }
      .fp3d-parking-row {
        display: flex;
        gap: 6px;
        align-items: center;
        margin: 4px 0;
      }
      .fp3d-parking-row input,
      .fp3d-parking-row select {
        flex: 1;
        min-width: 0;
      }
      .fp3d-stage-pair {
        display: flex;
        min-height: 0;
        min-width: 0;
      }
      .fp3d-stage-pair > .fp3d-canvas-wrap {
        flex: 1 1 var(--fp3d-split, 55%);
        min-width: 0;
      }
      .fp3d-split > .fp3d-canvas-wrap {
        flex: 0 0 var(--fp3d-split, 55%);
      }
      .fp3d-split-handle {
        flex: 0 0 8px;
        cursor: col-resize;
        background: var(--fp3d-line);
        touch-action: none;
      }
      .fp3d-split-handle:hover {
        background: var(--fp3d-accent);
      }
      .fp3d-editor-3d {
        position: relative;
        flex: 1 1 0;
        min-width: 240px;
        min-height: 0;
        border-left: 1px solid var(--fp3d-line);
        container-type: size;
        container-name: fp3d;
      }
      .fp3d-editor-3d fp3d-view3d {
        display: block;
        height: 100%;
      }
      .fp3d-3d-walls {
        position: absolute;
        top: 10px;
        left: 10px;
        z-index: 3;
      }
      .fp3d-3d-bar {
        position: absolute;
        left: 50%;
        bottom: 12px;
        transform: translateX(-50%);
        z-index: 3;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 8px;
        max-width: calc(100% - 24px);
        padding: 6px 8px 6px 14px;
        border-radius: 999px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        font-size: 13px;
      }
      .fp3d-danger-chip {
        color: var(--fp3d-danger, #ff6b7a);
      }
      .fp3d-narrow .fp3d-stage-pair.fp3d-split {
        flex-direction: column;
      }
      .fp3d-narrow .fp3d-split > .fp3d-canvas-wrap {
        flex: 1 1 auto;
      }
      .fp3d-narrow .fp3d-editor-3d {
        flex: 0 0 42%;
        min-width: 0;
        border-left: none;
        border-top: 1px solid var(--fp3d-line);
      }
      .fp3d-canvas-wrap {
        position: relative;
        min-height: 0;
        overflow: hidden;
        background: radial-gradient(ellipse at 50% 35%, var(--fp3d-bg2), var(--fp3d-bg) 75%);
      }
      svg.fp3d-plan {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        touch-action: none;
        user-select: none;
        -webkit-user-select: none;
        cursor: default;
      }
      svg.fp3d-tool-rect,
      svg.fp3d-tool-polygon {
        cursor: crosshair;
      }
      .fp3d-grid-minor {
        stroke: rgba(55, 224, 255, 0.05);
        stroke-width: 1;
      }
      .fp3d-grid-major {
        stroke: rgba(91, 124, 255, 0.16);
        stroke-width: 1;
      }
      .fp3d-origin {
        fill: rgba(91, 124, 255, 0.5);
      }
      .fp3d-ghost {
        fill: none;
        stroke: rgba(138, 155, 184, 0.35);
        stroke-dasharray: 4 4;
      }
      .fp3d-wall {
        fill: #1b2a47;
      }
      .fp3d-wall-ext {
        fill: #22345a;
      }
      .fp3d-room {
        fill: rgba(55, 224, 255, 0.05);
        stroke: rgba(55, 224, 255, 0.75);
        stroke-width: 1.5;
        stroke-linejoin: round;
        cursor: pointer;
      }
      .fp3d-room:hover {
        fill: rgba(55, 224, 255, 0.09);
      }
      .fp3d-room-sel {
        fill: rgba(55, 224, 255, 0.14);
        stroke: var(--fp3d-accent);
        stroke-width: 2.5;
      }
      .fp3d-room-name {
        fill: var(--fp3d-text);
        font: 600 13px var(--fp3d-title-font);
        text-anchor: middle;
      }
      .fp3d-room-area {
        fill: var(--fp3d-muted);
        font: 500 11.5px var(--fp3d-font);
        text-anchor: middle;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-dim {
        fill: var(--fp3d-accent);
        font: 600 11.5px var(--fp3d-font);
        text-anchor: middle;
        font-variant-numeric: tabular-nums;
        paint-order: stroke;
        stroke: var(--fp3d-bg);
        stroke-width: 3px;
      }
      .fp3d-vertex circle:not(.fp3d-hit) {
        fill: var(--fp3d-bg);
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-vertex-sel circle:not(.fp3d-hit) {
        fill: var(--fp3d-accent);
      }
      .fp3d-vertex,
      .fp3d-mid {
        cursor: grab;
      }
      .fp3d-hit {
        fill: transparent;
      }
      .fp3d-mid circle:not(.fp3d-hit) {
        fill: rgba(91, 124, 255, 0.35);
        stroke: var(--fp3d-soft);
      }
      .fp3d-mid path {
        stroke: var(--fp3d-text);
        stroke-width: 1.5;
      }
      .fp3d-draft {
        fill: rgba(255, 181, 71, 0.08);
        stroke: var(--fp3d-warm);
        stroke-width: 2;
        stroke-dasharray: 6 4;
      }
      polyline.fp3d-draft {
        fill: none;
      }
      .fp3d-draft-pt {
        fill: var(--fp3d-warm);
      }
      .fp3d-draft-first {
        fill: transparent;
        stroke: var(--fp3d-warm);
        stroke-width: 2;
      }
      .fp3d-cursor {
        fill: var(--fp3d-warm);
      }
      .fp3d-guide {
        stroke: rgba(255, 95, 210, 0.55);
        stroke-dasharray: 3 5;
      }
      .fp3d-snap {
        fill: none;
        stroke: #ff5fd2;
        stroke-width: 2;
      }
      .fp3d-hint {
        position: absolute;
        left: 12px;
        right: 12px;
        bottom: 8px;
        margin: 0;
        font-size: 12px;
        color: var(--fp3d-muted);
        pointer-events: none;
      }
      .fp3d-side {
        border-left: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        overflow-y: auto;
        padding: 12px 14px 24px;
        display: flex;
        flex-direction: column;
        gap: 18px;
        min-height: 0;
      }
      .fp3d-narrow .fp3d-side {
        border-left: none;
        border-top: 1px solid var(--fp3d-line);
      }
      h3,
      summary {
        margin: 0 0 8px;
        font-size: 11.5px;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--fp3d-muted);
        font-weight: 600;
      }
      summary {
        cursor: pointer;
        margin: 0;
      }
      details[open] > summary {
        margin-bottom: 8px;
      }
      .fp3d-floor-list,
      .fp3d-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-floor-list .fp3d-chip {
        box-shadow: none;
        border: 1px solid var(--fp3d-line);
      }
      .fp3d-form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        margin-top: 10px;
      }
      .fp3d-wide {
        grid-column: 1 / -1;
      }
      .fp3d-room-list {
        display: grid;
        gap: 2px;
      }
      .fp3d-row {
        display: flex;
        justify-content: space-between;
        gap: 8px;
        font: inherit;
        color: var(--fp3d-text);
        background: none;
        border: none;
        border-bottom: 1px solid var(--fp3d-line);
        padding: 9px 2px;
        cursor: pointer;
        text-align: left;
      }
      .fp3d-row:hover {
        color: var(--fp3d-accent);
      }
      .fp3d-check {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        color: var(--fp3d-muted);
      }
      .fp3d-check input {
        accent-color: var(--fp3d-accent);
      }
      .fp3d-meter rect {
        fill: #2a2a10;
        stroke: #ffc633;
        stroke-width: 1.5;
      }
      .fp3d-meter path {
        fill: #ffc633;
      }
      .fp3d-packages {
        display: grid;
        gap: 6px;
        margin-top: 10px;
      }
      .fp3d-packages .fp3d-btn {
        display: grid;
        text-align: left;
        gap: 2px;
      }
      .fp3d-packages .fp3d-btn span {
        font-weight: 400;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-arrows {
        display: grid;
        grid-template-columns: repeat(3, 52px);
        grid-template-areas: ". up ." "left . right" ". down .";
        gap: 6px;
        justify-content: center;
      }
      .fp3d-arrows .fp3d-btn {
        font-size: 20px;
        padding: 6px 0;
      }
      .fp3d-arrow-up {
        grid-area: up;
      }
      .fp3d-arrow-left {
        grid-area: left;
      }
      .fp3d-arrow-right {
        grid-area: right;
      }
      .fp3d-arrow-down {
        grid-area: down;
      }
      .fp3d-measure-list {
        margin: 8px 0;
        padding-left: 22px;
        color: var(--fp3d-muted);
        font-size: 13px;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-library {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(118px, 1fr));
        gap: 6px;
        margin-top: 8px;
      }
      .fp3d-library .fp3d-btn {
        font-weight: 500;
        font-size: 13px;
      }
      .fp3d-furn-body {
        fill: rgba(91, 124, 255, 0.1);
        stroke: rgba(91, 124, 255, 0.55);
        stroke-width: 1.2;
        vector-effect: non-scaling-stroke;
        cursor: grab;
      }
      .fp3d-furn-sym * {
        fill: none;
        stroke: rgba(150, 175, 255, 0.55);
        stroke-width: 1;
        vector-effect: non-scaling-stroke;
        pointer-events: none;
      }
      .fp3d-furn-sym .fp3d-sym-fill {
        fill: rgba(91, 124, 255, 0.28);
      }
      .fp3d-furn-sym .fp3d-sym-strong {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-out polygon {
        fill: rgba(91, 124, 255, 0.06);
        stroke: rgba(91, 124, 255, 0.4);
        stroke-width: 1;
        stroke-dasharray: 4 3;
        cursor: grab;
      }
      .fp3d-out-lawn polygon,
      .fp3d-out-bed polygon,
      .fp3d-out-hedge polygon {
        fill: rgba(61, 224, 160, 0.1);
        stroke: rgba(61, 224, 160, 0.5);
      }
      .fp3d-out-pool polygon {
        fill: rgba(55, 224, 255, 0.18);
        stroke: var(--fp3d-accent);
      }
      .fp3d-out-terrace polygon {
        fill: rgba(150, 130, 255, 0.12);
      }
      .fp3d-free-wall {
        cursor: grab;
      }
      .fp3d-vertex-no {
        fill: var(--fp3d-accent);
        font-size: 11px;
        font-weight: 700;
        pointer-events: none;
      }
      .fp3d-edge-box {
        margin: 12px 0;
        padding: 10px 12px;
        border: 1px solid color-mix(in srgb, var(--fp3d-accent) 45%, transparent);
        border-radius: 12px;
        background: color-mix(in srgb, var(--fp3d-accent) 6%, transparent);
      }
      .fp3d-edge-box h4 {
        margin: 0 0 4px;
        color: var(--fp3d-accent);
        font-size: 13px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }
      .fp3d-edge-height {
        display: grid;
        grid-template-columns: 1fr 1fr 40px;
        gap: 6px;
        align-items: end;
        padding: 4px 6px;
        margin: 0 -6px;
        border-radius: 8px;
      }
      .fp3d-edge-on {
        background: color-mix(in srgb, var(--fp3d-accent) 14%, transparent);
      }
      .fp3d-edge-low b {
        color: var(--fp3d-accent);
      }
      .fp3d-wall-low {
        opacity: 0.55;
      }
      .fp3d-dev-source {
        display: flex;
        margin: 8px 0;
      }
      .fp3d-dev-source button {
        flex: 1 1 0;
        min-width: 0;
        padding: 6px 4px;
        font-size: 12px;
        line-height: 1.2;
        white-space: normal;
        text-align: center;
        border-radius: 10px;
      }
      .fp3d-place-all {
        margin: 10px 0 0;
      }
      .fp3d-roof-sec polygon {
        fill: color-mix(in srgb, #ffb547 10%, transparent);
        stroke: #ffb547;
        stroke-width: 2;
        stroke-dasharray: 8 6;
        cursor: move;
      }
      .fp3d-roof-sel polygon {
        fill: color-mix(in srgb, var(--fp3d-accent) 14%, transparent);
        stroke: var(--fp3d-accent);
        stroke-dasharray: none;
      }
      /* solar modules: dark blue panes with a light frame, so they do not look like a selected room */
      .fp3d-roofwin polygon {
        fill: color-mix(in srgb, #2b6b8f 70%, transparent);
        stroke: #e3e9f5;
        stroke-width: 2;
        cursor: move;
      }
      .fp3d-roofwin-sel polygon {
        stroke: #ffd75a;
      }
      .fp3d-tool-energy .fp3d-roof-layer {
        opacity: 0.45;
      }
      .fp3d-tool-energy .fp3d-energy-item {
        pointer-events: auto;
      }
      .fp3d-energy-marker {
        cursor: move;
      }
      .fp3d-teaser {
        margin-top: 12px;
        padding: 12px;
        border-radius: 14px;
        border: 1px solid color-mix(in srgb, #ffd75a 45%, transparent);
        background: linear-gradient(160deg, color-mix(in srgb, #ffd75a 10%, transparent), transparent 60%);
      }
      .fp3d-teaser-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 8px;
        margin-bottom: 8px;
      }
      .fp3d-teaser-soon {
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: #0b1426;
        background: #ffd75a;
        border-radius: 999px;
        padding: 2px 8px;
        white-space: nowrap;
      }
      .fp3d-teaser img {
        display: block;
        width: 100%;
        border-radius: 10px;
        border: 1px solid color-mix(in srgb, var(--fp3d-accent) 40%, transparent);
      }
      .fp3d-teaser ul {
        margin: 8px 0 4px;
        padding-left: 18px;
        font-size: 13px;
      }
      /* the roof and energy tools say what can be moved there (everything else is locked) */
      .fp3d-tool-note {
        position: absolute;
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;
        max-width: calc(100% - 24px);
        padding: 5px 12px;
        border-radius: 999px;
        background: color-mix(in srgb, #0b1426 85%, transparent);
        border: 1px solid color-mix(in srgb, #ffd75a 60%, transparent);
        color: #ffe7a3;
        font-size: 12px;
        text-align: center;
        pointer-events: none;
      }
      .fp3d-energy-marker circle {
        fill: color-mix(in srgb, #0b1426 80%, transparent);
        stroke: #ffd75a;
        stroke-width: 2;
      }
      .fp3d-energy-marker-sel circle {
        stroke: var(--fp3d-accent);
        stroke-width: 3;
        fill: color-mix(in srgb, var(--fp3d-accent) 25%, #0b1426);
      }
      .fp3d-energy-marker text {
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-energy-icon {
        font-size: 17px;
      }
      .fp3d-energy-name {
        font-size: 11px;
        font-weight: 700;
        fill: #ffd75a;
        paint-order: stroke;
        stroke: rgba(0, 0, 0, 0.65);
        stroke-width: 3px;
      }
      .fp3d-solar polygon {
        fill: color-mix(in srgb, #1b3a8f 75%, transparent);
        stroke: #9fb8ff;
        stroke-width: 1.5;
        cursor: move;
      }
      .fp3d-solar-sel polygon {
        fill: color-mix(in srgb, #1b3a8f 80%, transparent);
        stroke: #ffd75a;
        stroke-width: 2;
      }
      .fp3d-solar polygon.fp3d-solar-off {
        fill: transparent;
        stroke-dasharray: 4 4;
        stroke-width: 1.5;
      }
      .fp3d-solar-pick polygon {
        cursor: pointer;
      }
      .fp3d-roof-ridge line {
        stroke: #ffb547;
        stroke-width: 2.5;
        pointer-events: none;
      }
      .fp3d-roof-sel .fp3d-roof-ridge line {
        stroke: var(--fp3d-accent);
      }
      .fp3d-roof-sec text {
        fill: #ffd28a;
        font-size: 12px;
        font-weight: 700;
        text-anchor: middle;
        paint-order: stroke;
        stroke: rgba(0, 0, 0, 0.6);
        stroke-width: 3px;
        pointer-events: none;
      }
      .fp3d-tool-energy .fp3d-room,
      .fp3d-tool-energy [data-furniture],
      .fp3d-tool-energy [data-device],
      .fp3d-tool-energy [data-opening],
      .fp3d-tool-energy [data-free-wall],
      .fp3d-tool-energy [data-outdoor],
      .fp3d-tool-energy .fp3d-roof-layer,
      .fp3d-tool-roof .fp3d-room,
      .fp3d-tool-roof [data-furniture],
      .fp3d-tool-roof [data-device],
      .fp3d-tool-roof [data-opening],
      .fp3d-tool-roof [data-free-wall],
      .fp3d-tool-roof [data-outdoor] {
        pointer-events: none;
      }
      .fp3d-dev-area {
        margin: 10px 0 2px;
        color: var(--fp3d-muted);
        font-size: 12px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }
      .fp3d-h3row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
      }
      .fp3d-h3row h3 {
        margin-bottom: 0;
      }
      .fp3d-fix {
        min-height: 30px;
        padding: 4px 10px;
        font-size: 13px;
      }
      .fp3d-fix[aria-pressed="true"] {
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
      }
      .fp3d-lock {
        font-size: 13px;
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-hint-fixed {
        color: var(--fp3d-accent);
      }
      .fp3d-ctx {
        position: absolute;
        z-index: 5;
        display: flex;
        flex-direction: column;
        min-width: 170px;
        padding: 4px;
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        background: var(--fp3d-panel, #111a2e);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
      }
      .fp3d-ctx button {
        padding: 8px 12px;
        border: none;
        border-radius: 7px;
        background: none;
        color: inherit;
        font: inherit;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-ctx button:hover:not(:disabled) {
        background: color-mix(in srgb, var(--fp3d-accent) 16%, transparent);
      }
      .fp3d-ctx button:disabled {
        opacity: 0.45;
        cursor: default;
      }
      .fp3d-ctx-danger {
        color: var(--fp3d-danger, #ff6b7a) !important;
      }
      .fp3d-edge-hi {
        stroke: var(--fp3d-accent);
        stroke-width: 6;
        stroke-linecap: round;
        filter: drop-shadow(0 0 6px var(--fp3d-accent));
      }
      .fp3d-free-wall .fp3d-hit {
        stroke: transparent;
        stroke-width: 18;
      }
      .fp3d-free-wall-line {
        stroke: transparent;
        stroke-width: 1;
      }
      .fp3d-free-wall-sel .fp3d-free-wall-line {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
        stroke-dasharray: 6 4;
      }
      .fp3d-draft-wall {
        stroke-width: 4;
      }
      .fp3d-open-passage {
        stroke-dasharray: 4 4;
      }
      .fp3d-out-sel polygon {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
        stroke-dasharray: none;
      }
      .fp3d-out text {
        fill: var(--fp3d-muted);
        font-size: 11px;
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-furn-lit .fp3d-furn-body {
        fill: rgba(255, 181, 71, 0.35);
        stroke: var(--fp3d-warm);
      }
      .fp3d-rotate {
        cursor: grab;
      }
      .fp3d-preview {
        position: fixed;
        z-index: 20;
        width: 180px;
        padding: 8px 8px 10px;
        border-radius: 16px;
        background: radial-gradient(circle at 50% 40%, #1d2c4d, #0b1222 75%);
        box-shadow: var(--fp3d-shadow), 0 0 0 1px var(--fp3d-line);
        text-align: center;
        pointer-events: none;
        animation: fp3d-pop 120ms ease-out;
      }
      @keyframes fp3d-pop {
        from {
          opacity: 0;
          transform: translateX(8px);
        }
      }
      .fp3d-preview img,
      .fp3d-preview-wait {
        display: block;
        width: 164px;
        height: 164px;
      }
      .fp3d-preview-wait {
        margin: 0 auto;
        border-radius: 12px;
        background: rgba(127, 127, 127, 0.1);
      }
      .fp3d-preview b {
        display: block;
        margin-top: 2px;
        font-size: 13px;
        color: #e8eeff;
      }
      .fp3d-lib-badge {
        margin-left: 4px;
        color: #37e0ff;
        vertical-align: -2px;
      }
      .fp3d-ext-teaser {
        display: grid;
        gap: 6px;
        margin: 12px 0;
        padding: 12px;
        border: 1px solid var(--fp3d-accent);
        border-radius: 12px;
        background: linear-gradient(135deg, rgba(55, 224, 255, 0.08), rgba(91, 124, 255, 0.08));
      }
      .fp3d-pin {
        border: 0;
        background: none;
        padding: 2px 6px;
        font-size: 17px;
        line-height: 1;
        color: var(--fp3d-muted);
        cursor: pointer;
      }
      .fp3d-pin-on {
        color: var(--fp3d-warm);
      }
      .fp3d-back {
        margin-bottom: 12px;
      }
      .fp3d-presets {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-bottom: 10px;
      }
      .fp3d-resize {
        cursor: nwse-resize;
      }
      .fp3d-resize rect {
        fill: var(--fp3d-accent);
        stroke: #0b1222;
        stroke-width: 1.5;
      }
      .fp3d-floor-menu {
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin: 8px 0;
        padding: 10px;
        border-radius: 12px;
        background: rgba(127, 127, 127, 0.1);
      }
      .fp3d-floor-menu .fp3d-btn {
        text-align: left;
      }
      .fp3d-rotate line {
        stroke: var(--fp3d-accent);
        stroke-dasharray: 3 3;
      }
      .fp3d-rotate circle:not(.fp3d-hit) {
        fill: #0b1222;
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-rotate path {
        fill: none;
        stroke: var(--fp3d-accent);
        stroke-width: 1.5;
        stroke-linecap: round;
      }
      .fp3d-lib-toggle {
        display: flex;
        align-items: center;
        gap: 6px;
        width: 100%;
        padding: 6px 0;
        border: 0;
        background: none;
        font: inherit;
        cursor: pointer;
        text-align: left;
      }
      .fp3d-lib-toggle:hover {
        color: var(--fp3d-text);
      }
      .fp3d-lib-caret {
        width: 12px;
        color: var(--fp3d-accent);
      }
      .fp3d-lib-count {
        margin-left: auto;
        font-weight: 500;
        letter-spacing: 0;
        text-transform: none;
        opacity: 0.7;
      }
      .fp3d-lib-head {
        margin: 10px 0 0;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
      }
      .fp3d-furn-front {
        stroke: var(--fp3d-accent);
        stroke-width: 2.5;
        vector-effect: non-scaling-stroke;
        opacity: 0.8;
        pointer-events: none;
      }
      .fp3d-furn text {
        fill: var(--fp3d-muted);
        font-size: 11px;
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-furn-sel .fp3d-furn-body {
        fill: rgba(55, 224, 255, 0.16);
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-open {
        cursor: grab;
      }
      .fp3d-open-gap {
        fill: #0b1222;
        stroke: none;
      }
      .fp3d-open path,
      .fp3d-open line {
        fill: none;
        stroke-width: 1.6;
        stroke-linecap: round;
      }
      .fp3d-open-door path {
        stroke: var(--fp3d-warm);
        stroke-dasharray: 3 3;
      }
      .fp3d-open-front path,
      .fp3d-open-door line {
        stroke: var(--fp3d-warm);
        stroke-width: 3;
        stroke-dasharray: none;
      }
      .fp3d-open-door line.fp3d-open-pane {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-open-garage line {
        stroke: var(--fp3d-warm);
        stroke-width: 3;
      }
      .fp3d-open-track {
        stroke: var(--fp3d-warm);
        stroke-dasharray: 4 4;
        opacity: 0.6;
      }
      .fp3d-open-window line {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-open-sel .fp3d-open-gap {
        fill: rgba(55, 224, 255, 0.25);
      }
      .fp3d-open-sel path,
      .fp3d-open-sel line {
        stroke-width: 2.4;
      }
      .fp3d-search {
        width: 100%;
        box-sizing: border-box;
        font: inherit;
        font-size: 14px;
        color: var(--fp3d-text);
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
        padding: 7px 9px;
        margin: 2px 0 6px;
      }
      .fp3d-more {
        font: inherit;
        font-size: 12px;
        color: var(--fp3d-muted);
        background: none;
        border: none;
        text-align: left;
        padding: 2px 26px 8px;
        cursor: pointer;
      }
      .fp3d-more:hover {
        color: var(--fp3d-accent);
      }
      .fp3d-dev-extra {
        padding-left: 18px;
        font-size: 13px;
      }
      .fp3d-dev-title {
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 0 0 8px;
        font-weight: 600;
      }
      .fp3d-notice {
        color: var(--fp3d-accent);
      }
      .fp3d-device-sel circle:not(.fp3d-hit) {
        stroke: var(--fp3d-accent);
        stroke-width: 3;
      }
      .fp3d-dev-row {
        align-items: center;
        cursor: default;
      }
      .fp3d-dev-row:hover {
        color: var(--fp3d-text);
      }
      .fp3d-dev-name {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        min-width: 0;
        font: inherit;
        color: inherit;
        background: none;
        border: none;
        padding: 0;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-dev-name:disabled {
        cursor: default;
      }
      .fp3d-dev-name span {
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-dev-name svg {
        flex: none;
      }
      .fp3d-link {
        font: inherit;
        font-size: 13px;
        font-weight: 600;
        color: var(--fp3d-accent);
        background: none;
        border: none;
        padding: 4px 2px;
        cursor: pointer;
        white-space: nowrap;
      }
      .fp3d-wide-btn {
        width: 100%;
        margin-bottom: 6px;
      }
      .fp3d-device {
        cursor: grab;
      }
      .fp3d-wedge path,
      .fp3d-wedge circle:not(.fp3d-hit) {
        fill: rgba(55, 224, 255, 0.12);
        stroke: rgba(55, 224, 255, 0.45);
        stroke-width: 1;
        pointer-events: none;
      }
      .fp3d-wedge-sel path,
      .fp3d-wedge-sel > circle {
        fill: rgba(55, 224, 255, 0.2);
        stroke: var(--fp3d-accent);
      }
      .fp3d-wedge .fp3d-rotate circle {
        pointer-events: auto;
      }
      .fp3d-device circle:not(.fp3d-hit) {
        fill: #111a2e;
        stroke: var(--fp3d-soft);
        stroke-width: 1.5;
        vector-effect: non-scaling-stroke;
      }
      .fp3d-device path {
        fill: none;
        stroke: var(--fp3d-text);
        stroke-width: 2.6;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      .fp3d-device-on circle:not(.fp3d-hit) {
        fill: var(--fp3d-warm);
        stroke: var(--fp3d-warm);
      }
      .fp3d-device-on path {
        stroke: #2a1a00;
      }
      .fp3d-muted {
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-points {
        margin: 12px 0;
      }
      .fp3d-point {
        display: grid;
        grid-template-columns: 18px 1fr 1fr auto;
        gap: 6px;
        align-items: end;
        padding: 4px 0;
      }
      .fp3d-point-sel .fp3d-muted {
        color: var(--fp3d-accent);
      }
      .fp3d-point .fp3d-btn {
        min-height: 34px;
        padding: 4px 10px;
      }
      .fp3d-upload {
        position: relative;
        text-align: center;
        overflow: hidden;
      }
      .fp3d-upload input {
        position: absolute;
        inset: 0;
        opacity: 0;
        cursor: pointer;
      }
      .fp3d-sub {
        margin: 8px 0 0;
        font-size: 12.5px;
        color: var(--fp3d-muted);
      }
      .fp3d-note {
        margin: 0;
        font-size: 12.5px;
        color: var(--fp3d-warm);
      }
    `]};customElements.get("fp3d-editor")||customElements.define("fp3d-editor",Dn);export{Dn as Fp3dEditor};
