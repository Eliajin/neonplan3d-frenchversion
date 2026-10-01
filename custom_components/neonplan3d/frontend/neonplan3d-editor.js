var Te=globalThis,Fe=Te.ShadowRoot&&(Te.ShadyCSS===void 0||Te.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ue=Symbol(),Ht=new WeakMap,be=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Ue)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Fe&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Ht.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Ht.set(t,e))}return e}toString(){return this.cssText}},Wt=o=>new be(typeof o=="string"?o:o+"",void 0,Ue),J=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((n,i,s)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[s+1],o[0]);return new be(t,o,Ue)},Bt=(o,e)=>{if(Fe)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),i=Te.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,o.appendChild(n)}},je=Fe?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return Wt(t)})(o):o;var{is:di,defineProperty:pi,getOwnPropertyDescriptor:hi,getOwnPropertyNames:ui,getOwnPropertySymbols:fi,getPrototypeOf:mi}=Object,Oe=globalThis,Ct=Oe.trustedTypes,_i=Ct?Ct.emptyScript:"",gi=Oe.reactiveElementPolyfillSupport,ve=(o,e)=>o,Ge={toAttribute(o,e){switch(e){case Boolean:o=o?_i:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},Vt=(o,e)=>!di(o,e),Nt={attribute:!0,type:String,converter:Ge,reflect:!1,useDefault:!1,hasChanged:Vt};Symbol.metadata??=Symbol("metadata"),Oe.litPropertyMetadata??=new WeakMap;var Z=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Nt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(e,n,t);i!==void 0&&pi(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){let{get:i,set:s}=hi(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:i,set(r){let a=i?.call(this);s?.call(this,r),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Nt}static _$Ei(){if(this.hasOwnProperty(ve("elementProperties")))return;let e=mi(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ve("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ve("properties"))){let t=this.properties,n=[...ui(t),...fi(t)];for(let i of n)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,i]of t)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let i=this._$Eu(t,n);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let i of n)t.unshift(je(i))}else e!==void 0&&t.push(je(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Bt(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){let s=(n.converter?.toAttribute!==void 0?n.converter:Ge).toAttribute(t,n.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,t){let n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let s=n.getPropertyOptions(i),r=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Ge;this._$Em=i;let a=r.fromAttribute(t,s.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(e,t,n,i=!1,s){if(e!==void 0){let r=this.constructor;if(i===!1&&(s=this[e]),n??=r.getPropertyOptions(e),!((n.hasChanged??Vt)(s,t)||n.useDefault&&n.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:i,wrapped:s},r){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),s!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[i,s]of n){let{wrapped:r}=s,a=this[i];r!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,s,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};Z.elementStyles=[],Z.shadowRootOptions={mode:"open"},Z[ve("elementProperties")]=new Map,Z[ve("finalized")]=new Map,gi?.({ReactiveElement:Z}),(Oe.reactiveElementVersions??=[]).push("2.1.2");var et=globalThis,Kt=o=>o,De=et.trustedTypes,Ut=De?De.createPolicy("lit-html",{createHTML:o=>o}):void 0,Yt="$lit$",Q=`lit$${Math.random().toFixed(9).slice(2)}$`,Jt="?"+Q,bi=`<${Jt}>`,ae=document,ke=()=>ae.createComment(""),we=o=>o===null||typeof o!="object"&&typeof o!="function",tt=Array.isArray,vi=o=>tt(o)||typeof o?.[Symbol.iterator]=="function",Xe=`[ 	
\f\r]`,ye=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,jt=/-->/g,Gt=/>/g,re=RegExp(`>|${Xe}(?:([^\\s"'>=/]+)(${Xe}*=${Xe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Xt=/'/g,Zt=/"/g,Qt=/^(?:script|style|textarea|title)$/i,nt=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),m=nt(1),x=nt(2),ms=nt(3),le=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),qt=new WeakMap,oe=ae.createTreeWalker(ae,129);function en(o,e){if(!tt(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ut!==void 0?Ut.createHTML(e):e}var yi=(o,e)=>{let t=o.length-1,n=[],i,s=e===2?"<svg>":e===3?"<math>":"",r=ye;for(let a=0;a<t;a++){let l=o[a],c,p,u=-1,_=0;for(;_<l.length&&(r.lastIndex=_,p=r.exec(l),p!==null);)_=r.lastIndex,r===ye?p[1]==="!--"?r=jt:p[1]!==void 0?r=Gt:p[2]!==void 0?(Qt.test(p[2])&&(i=RegExp("</"+p[2],"g")),r=re):p[3]!==void 0&&(r=re):r===re?p[0]===">"?(r=i??ye,u=-1):p[1]===void 0?u=-2:(u=r.lastIndex-p[2].length,c=p[1],r=p[3]===void 0?re:p[3]==='"'?Zt:Xt):r===Zt||r===Xt?r=re:r===jt||r===Gt?r=ye:(r=re,i=void 0);let h=r===re&&o[a+1].startsWith("/>")?" ":"";s+=r===ye?l+bi:u>=0?(n.push(c),l.slice(0,u)+Yt+l.slice(u)+Q+h):l+Q+(u===-2?a:h)}return[en(o,s+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},$e=class o{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let s=0,r=0,a=e.length-1,l=this.parts,[c,p]=yi(e,t);if(this.el=o.createElement(c,n),oe.currentNode=this.el.content,t===2||t===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=oe.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let u of i.getAttributeNames())if(u.endsWith(Yt)){let _=p[r++],h=i.getAttribute(u).split(Q),d=/([.?@])?(.*)/.exec(_);l.push({type:1,index:s,name:d[2],strings:h,ctor:d[1]==="."?qe:d[1]==="?"?Ye:d[1]==="@"?Je:he}),i.removeAttribute(u)}else u.startsWith(Q)&&(l.push({type:6,index:s}),i.removeAttribute(u));if(Qt.test(i.tagName)){let u=i.textContent.split(Q),_=u.length-1;if(_>0){i.textContent=De?De.emptyScript:"";for(let h=0;h<_;h++)i.append(u[h],ke()),oe.nextNode(),l.push({type:2,index:++s});i.append(u[_],ke())}}}else if(i.nodeType===8)if(i.data===Jt)l.push({type:2,index:s});else{let u=-1;for(;(u=i.data.indexOf(Q,u+1))!==-1;)l.push({type:7,index:s}),u+=Q.length-1}s++}}static createElement(e,t){let n=ae.createElement("template");return n.innerHTML=e,n}};function pe(o,e,t=o,n){if(e===le)return e;let i=n!==void 0?t._$Co?.[n]:t._$Cl,s=we(e)?void 0:e._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(o),i._$AT(o,t,n)),n!==void 0?(t._$Co??=[])[n]=i:t._$Cl=i),i!==void 0&&(e=pe(o,i._$AS(o,e.values),i,n)),e}var Ze=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,i=(e?.creationScope??ae).importNode(t,!0);oe.currentNode=i;let s=oe.nextNode(),r=0,a=0,l=n[0];for(;l!==void 0;){if(r===l.index){let c;l.type===2?c=new xe(s,s.nextSibling,this,e):l.type===1?c=new l.ctor(s,l.name,l.strings,this,e):l.type===6&&(c=new Qe(s,this,e)),this._$AV.push(c),l=n[++a]}r!==l?.index&&(s=oe.nextNode(),r++)}return oe.currentNode=ae,i}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},xe=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,i){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=pe(this,e,t),we(e)?e===y||e==null||e===""?(this._$AH!==y&&this._$AR(),this._$AH=y):e!==this._$AH&&e!==le&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):vi(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==y&&we(this._$AH)?this._$AA.nextSibling.data=e:this.T(ae.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=$e.createElement(en(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(t);else{let s=new Ze(i,this),r=s.u(this.options);s.p(t),this.T(r),this._$AH=s}}_$AC(e){let t=qt.get(e.strings);return t===void 0&&qt.set(e.strings,t=new $e(e)),t}k(e){tt(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,i=0;for(let s of e)i===t.length?t.push(n=new o(this.O(ke()),this.O(ke()),this,this.options)):n=t[i],n._$AI(s),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=Kt(e).nextSibling;Kt(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},he=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,s){this.type=1,this._$AH=y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=y}_$AI(e,t=this,n,i){let s=this.strings,r=!1;if(s===void 0)e=pe(this,e,t,0),r=!we(e)||e!==this._$AH&&e!==le,r&&(this._$AH=e);else{let a=e,l,c;for(e=s[0],l=0;l<s.length-1;l++)c=pe(this,a[n+l],t,l),c===le&&(c=this._$AH[l]),r||=!we(c)||c!==this._$AH[l],c===y?e=y:e!==y&&(e+=(c??"")+s[l+1]),this._$AH[l]=c}r&&!i&&this.j(e)}j(e){e===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},qe=class extends he{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===y?void 0:e}},Ye=class extends he{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==y)}},Je=class extends he{constructor(e,t,n,i,s){super(e,t,n,i,s),this.type=5}_$AI(e,t=this){if((e=pe(this,e,t,0)??y)===le)return;let n=this._$AH,i=e===y&&n!==y||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==y&&(n===y||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Qe=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){pe(this,e)}};var ki=et.litHtmlPolyfillSupport;ki?.($e,xe),(et.litHtmlVersions??=[]).push("3.3.3");var tn=(o,e,t)=>{let n=t?.renderBefore??e,i=n._$litPart$;if(i===void 0){let s=t?.renderBefore??null;n._$litPart$=i=new xe(e.insertBefore(ke(),s),s,void 0,t??{})}return i._$AI(o),i};var it=globalThis,G=class extends Z{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=tn(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return le}};G._$litElement$=!0,G.finalized=!0,it.litElementHydrateSupport?.({LitElement:G});var wi=it.litElementPolyfillSupport;wi?.({LitElement:G});(it.litElementVersions??=[]).push("4.2.2");async function st(o,e){return(await o.callWS({type:"neonplan3d/image/get",image_id:e})).data}async function Le(o,e,t){await o.callWS({type:"neonplan3d/image/set",image_id:e,data:t})}async function nn(o){return(await o.callWS({type:"neonplan3d/history/list"})).snapshots}async function sn(o){await o.callWS({type:"neonplan3d/history/snapshot"})}async function rn(o,e){return(await o.callWS({type:"neonplan3d/history/restore",snapshot_id:e})).revision}async function on(o,e){return o.callWS({type:"neonplan3d/packs/import",pack:e})}async function an(o,e){await o.callWS({type:"neonplan3d/packs/remove",pack_id:e})}function rt(o){return o.callWS({type:"neonplan3d/license/get"})}function ot(o,e){return o.callWS({type:"neonplan3d/license/activate",key:e})}function ln(o){return o.callWS({type:"neonplan3d/license/remove"})}function cn(o){return o.callWS({type:"neonplan3d/license/refresh"})}function dn(o){return o.callWS({type:"neonplan3d/backup/export"})}function pn(o,e,t){return o.callWS({type:"neonplan3d/backup/import",building:e,packs:t})}function hn(o,e){return o.callWS({type:"neonplan3d/packs/install",pack_id:e})}var $i=[],at=new Map,xi=0;function un(o){$i=o,at=new Map(o.flatMap(e=>e.items.map(t=>[Se(e.id,t.id),t]))),xi++}function Se(o,e){return`pack:${o}:${e}`}function lt(o){return o.startsWith("pack:")}var Si={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function fn(o){return H(o)?.parts.find(e=>e.screen)}function H(o){if(!lt(o))return;let e=at.get(o);if(e)return e;let[,t,...n]=o.split(":"),i=Si[t];return i?at.get(`pack:${i}:${n.join(":")}`):void 0}function ct(o){return X[o]??H(o)?.size??[.6,.6,.8]}function dt(o){return _n.has(o)||!!H(o)?.electric}function ue(o,e){let t=e.split("-")[0];return o.name[t]??o.name.en??Object.values(o.name)[0]??o.id}function pt(o,e){let t=H(e.type);if(e.mount_y!=null)return e.mount_y;switch(t?.mount){case"surface":return mn(o,e.x,e.z);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,o.height-e.h);default:return 0}}var gn=["rain","snow","fog","clouds","lightning","sky"],ht=["rain","snow","clouds","lightning","sky"],bn=["lawn","terrace","path","driveway","pool","bed","hedge","fence"];var Mi={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,tariff:null},vn=["wood","oak","tiles","carpet","stone","concrete"],yn={type:"none",pitch:35,overhang:.4},Ei={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...yn}};function kn(o,e,t){return{id:o,name:e,elevation:t,height:2.5,cut_height:1.15,rooms:[],openings:[],furniture:[],placements:[],background:null,outdoor:[],ha_floor:null}}var zi=2.75;function wn(o,e){if(e!=null&&Number.isFinite(e))return Math.round(e*zi*100)/100;let t=o.reduce((n,i)=>!n||i.elevation>n.elevation?i:n,null);return t?Math.round((t.elevation+t.height+.25)*100)/100:0}function $n(o,e,t){let n=o.rooms.flatMap(a=>a.points.map(l=>l[0])),i=o.rooms.flatMap(a=>a.points.map(l=>l[1])),s=n.length?Math.ceil(Math.max(...n))+1:0,r=i.length?Math.floor(Math.min(...i)):0;return e.map((a,l)=>{let c=s+l%3*4.5,p=r+Math.floor(l/3)*3.5;return{id:t(),name:a.name,area_id:a.area_id,points:[[c,p],[c+4,p],[c+4,p+3],[c,p+3]],floor_material:"wood"}})}function xn(o,e,t,n){let i=o.rotation*Math.PI/180,s=Math.cos(i),r=Math.sin(i),[a,l]=e,c=o.x-a*(o.w/2)*s+l*(o.d/2)*r,p=o.z-a*(o.w/2)*r-l*(o.d/2)*s,u=t[0]-c,_=t[1]-p,h=b=>Math.max(.1,Math.round(b/n)*n),d=h((u*s+_*r)*a),f=h((-u*r+_*s)*l),v=b=>Math.round(b*1e3)/1e3;return{x:v(c+a*(d/2)*s-l*(f/2)*r),z:v(p+a*(d/2)*r+l*(f/2)*s),w:v(d),d:v(f)}}var Sn=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_table","lamp_wall","led_strip","lamp_uplight","lamp_bollard","lamp_garden","radiator","sofa","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug","table","table_round","chair","bench","corner_bench","bar_stool","kitchen","kitchen_wall","kitchen_tall","island","sink","stove","dishwasher","fridge","bed","bunk_bed","nightstand","wardrobe","dresser","bathtub","shower","wc","washbasin","washer","dryer","desk","office_chair","tall_cabinet","coat_rack","stairs","robot_vacuum","parking","fridge_smart","stairwell"],Mn={lights:["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"],living:["sofa","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug"],dining:["table","table_round","chair","bench","corner_bench","bar_stool"],kitchen:["kitchen","kitchen_wall","kitchen_tall","island","sink","stove","dishwasher","fridge","fridge_smart"],sleeping:["bed","bunk_bed","nightstand","wardrobe","dresser"],bath:["bathtub","shower","wc","washbasin","washer","dryer"],work:["desk","office_chair","tall_cabinet","coat_rack","radiator","stairs","stairwell","robot_vacuum"],vehicles:["parking"]},En=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]);function ut(o){return["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","led_strip","stairs","stairwell","parking"].includes(o.type)?!1:H(o.type)?.mount!=="ceiling"}function ee(o){return En.has(o)||!!H(o)?.light}var Ai=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","tv_board","dishwasher","washer","dryer"]);function ft(o,e,t,n=0){let i=K(o.points),s=i.x1-i.x0-2*n,r=i.z1-i.z0-2*n,a=[];for(let l=0;l<e;l++)for(let c=0;c<t;c++){let p=[Math.round((i.x0+n+s/t*(c+.5))*1e3)/1e3,Math.round((i.z0+n+r/e*(l+.5))*1e3)/1e3];O(p,o.points)&&a.push(p)}return a}function fe(o,e,t){let n=r=>Math.round(r*1e3)/1e3,[i,s]={right:[1,0],down:[0,1],left:[-1,0],up:[0,-1]}[t];return[n(o[0]+i*e),n(o[1]+s*e)]}function mn(o,e,t){let n=0;for(let i of o.furniture)!(Ai.has(i.type)||H(i.type)?.surface)||!O([e,t],Pi(i))||(n=Math.max(n,i.h));return n}var _n=new Set([...En,"radiator","robot_vacuum","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),X={sofa:[2.2,.9,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};var mt=["interior","front","front_glass","sidelight","sidelights","glass","sliding"],_t=["standard","bars"];function gt(o,e){return o.type==="door"?o.style&&mt.includes(o.style)?o.style:e?"front":"interior":o.style&&_t.includes(o.style)?o.style:"standard"}function bt(o){return o==="front"||o==="front_glass"||o==="sidelight"||o==="sidelights"}var He={door:{type:"door",leaves:1,width:.9,sill:0,height:2.05,style:"interior"},front:{type:"door",leaves:1,width:1,sill:0,height:2.1,style:"front"},door_double:{type:"door",leaves:2,width:1.6,sill:0,height:2.05},window:{type:"window",leaves:1,width:1.2,sill:.9,height:1.3},window_double:{type:"window",leaves:2,width:1.6,sill:.9,height:1.3},terrace:{type:"window",leaves:1,width:1,sill:0,height:2.1},terrace_double:{type:"window",leaves:2,width:1.8,sill:0,height:2.1},garage:{type:"garage",leaves:1,width:2.5,sill:0,height:2.1}};function vt(o){if(o.type==="garage")return"garage";let e=o.leaves===2;return o.type==="door"?!e&&o.style&&bt(o.style)?"front":e?"door_double":"door":o.sill<.1?e?"terrace_double":"terrace":e?"window_double":"window"}function We(o){o.energy={...Mi,...o.energy??{}},o.presence=o.presence??[],o.settings={...Ei,...o.settings,roof:{...yn,...o.settings?.roof??{}}};for(let e of o.floors){e.outdoor=e.outdoor??[],e.rooms=e.rooms.map(n=>({...n,panel:n.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(n=>({...n,mount:n.mount??null,rotation:n.rotation??0})),e.furniture=e.furniture.map(n=>({...n,entity:n.entity??null,power:n.power??null}));let t=e.placements.filter(n=>n.entity_id.startsWith("light."));if(t.length){let n={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let i of t){let s=n[i.mount??"ceiling"],[r,a,l]=X[s];e.furniture.push({id:`lamp_${i.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:s,x:i.x,z:i.z,rotation:0,w:r,d:a,h:l,variant:null,entity:i.entity_id,power:null})}e.placements=e.placements.filter(i=>!i.entity_id.startsWith("light."))}e.openings=e.openings.map(n=>({...n,hinge:n.hinge??"left",leaves:n.leaves??1,swing:n.swing??"in",style:n.style??null,cover:n.cover??null,contact:n.contact??null,contact2:n.contact2??null,tilt:n.tilt??null}))}return o}function D(o){return`${o}_${Math.random().toString(36).slice(2,10)}`}function U(o){let e=0;for(let t=0;t<o.length;t++){let[n,i]=o[t],[s,r]=o[(t+1)%o.length];e+=n*r-s*i}return e/2}function me(o){return Math.abs(U(o))}function te(o){let e=U(o);if(Math.abs(e)<1e-9){let i=o.length||1;return[o.reduce((s,r)=>s+r[0],0)/i,o.reduce((s,r)=>s+r[1],0)/i]}let t=0,n=0;for(let i=0;i<o.length;i++){let[s,r]=o[i],[a,l]=o[(i+1)%o.length],c=s*l-a*r;t+=(s+a)*c,n+=(r+l)*c}return[t/(6*e),n/(6*e)]}function yt(o){if(o.length!==4)return!1;for(let e=0;e<4;e++){let[t,n]=o[e],[i,s]=o[(e+1)%4];if(Math.abs(t-i)>1e-6&&Math.abs(n-s)>1e-6)return!1}return!0}function K(o){let e=1/0,t=1/0,n=-1/0,i=-1/0;for(let[s,r]of o)e=Math.min(e,s),t=Math.min(t,r),n=Math.max(n,s),i=Math.max(i,r);return{x0:e,z0:t,x1:n,z1:i}}function Pi(o){let e=o.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),i=o.w/2,s=o.d/2;return[[-i,-s],[i,-s],[i,s],[-i,s]].map(([r,a])=>[o.x+r*t-a*n,o.z+r*n+a*t])}function O(o,e){let t=!1;for(let n=0,i=e.length-1;n<e.length;i=n++){let[s,r]=e[n],[a,l]=e[i];r>o[1]!=l>o[1]&&o[0]<(a-s)*(o[1]-r)/(l-r)+s&&(t=!t)}return t}var zn={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var An="neonplan3d";function Ri(o){let e=structuredClone(o);e.energy={...e.energy,grid:null,solar:null,battery:null,battery_soc:null,tariff:null},e.presence=[];for(let t of e.floors)t.placements=[],t.background=null,t.rooms=t.rooms.map(n=>({...n,area_id:null})),t.furniture=t.furniture.map(n=>({...n,entity:null,power:null})),t.openings=t.openings.map(n=>({...n,cover:null,contact:null,tilt:null}));return e}function Pn(o,e){return{format:An,version:1,exported_at:new Date().toISOString(),building:e?Ri(o):structuredClone(o)}}function Rn(o){let e;try{e=JSON.parse(o)}catch{throw new Error("not_json")}let t=e,n=t?.format===An?t.building:e;if(!n||n.version!==1||!Array.isArray(n.floors)||!n.settings)throw new Error("not_plan");for(let i of n.floors)i.background=null;return We(n)}function In(o){let e=new Set;for(let t of o.floors){t.background?.image_id&&e.add(t.background.image_id);for(let n of t.furniture)for(let i of n.pictures??[])i.image&&!/^https?:\/\//.test(i.image)&&!i.image.startsWith("camera:")&&e.add(i.image)}return[...e]}function kt(o,e){let t=URL.createObjectURL(new Blob([e],{type:"application/json"})),n=document.createElement("a");n.href=t,n.download=o,n.click(),setTimeout(()=>URL.revokeObjectURL(t),1e3)}var Ii={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},Ti=new Set(["temperature","humidity","power","carbon_dioxide"]),Fi=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),Tn=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],On=new Set(["light","switch","fan"]);function Oi(o){return o.slice(0,o.indexOf("."))}function T(o){return Ii[Oi(o)]??null}function Dn(o){return o!==null&&o!=="scene"&&o!=="script"}function Ln(o,e){let t=o.entities?.[e];return t?t.area_id?t.area_id:t.device_id&&o.devices?.[t.device_id]?.area_id||null:null}function Di(o,e){let t=T(e);if(!t)return!1;let n=o.entities?.[e];if(n?.hidden||n?.entity_category)return!1;let i=o.states[e];if(!i)return!1;let s=i.attributes.device_class;return t==="sensor"?!!s&&Ti.has(s):t==="binary"?!!s&&Fi.has(s):!0}var wt=null;function Hn(o){let e=wt;if(e&&e.entities===o.entities&&e.devices===o.devices&&(e.states===o.states||(e.states=o.states,Object.keys(o.states).length===e.stateCount)))return e;let t=new Map,n=new Map;for(let i of Object.keys(o.entities??{})){let s=o.entities[i].device_id;if(s&&Mt(o,i)&&(n.get(s)??n.set(s,[]).get(s)).push(i),!Di(o,i))continue;let r=Ln(o,i);r&&(t.get(r)??t.set(r,[]).get(r)).push(i)}for(let[i,s]of t){let r=o.areas?.[i]?.name;s.sort((a,l)=>{let c=Tn.indexOf(T(a)),p=Tn.indexOf(T(l));return c-p||C(o,a,r).localeCompare(C(o,l,r))})}return wt={entities:o.entities,devices:o.devices,states:o.states,stateCount:Object.keys(o.states).length,areas:t,power:n},wt}function _e(o,e){return!e||!o.entities?[]:Hn(o).areas.get(e)??[]}function Li(o,e){return o.entities?Hn(o).power.get(e)??[]:[]}function C(o,e,t){let i=o.states[e]?.attributes.friendly_name??o.entities?.[e]?.name??e;if(t&&i.length>t.length+1&&i.toLowerCase().startsWith(t.toLowerCase()+" ")){let s=i.slice(t.length+1);return s.charAt(0).toUpperCase()+s.slice(1)}return i}function Hi(o){return!o||o.state==="unavailable"||o.state==="unknown"}function $t(o,e,t=null){if(o==="camera")return t==="ceiling"?Math.max(.5,e-.05):2.2;if(o==="light"&&t){if(t==="floor")return 1.95;if(t==="table")return 1.25;if(t==="wall")return 1.95}switch(o){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}function Wi(o,e){let t=1/0;for(let n=0;n<e.length;n++){let i=e[n],s=e[(n+1)%e.length],r=s[0]-i[0],a=s[1]-i[1],l=r*r+a*a||1,c=Math.min(1,Math.max(0,((o[0]-i[0])*r+(o[1]-i[1])*a)/l));t=Math.min(t,Math.hypot(o[0]-i[0]-r*c,o[1]-i[1]-a*c))}return t}function Wn(o,e,t=[]){if(o.points.length<3||!e.length)return[];let n=o.points,i=n.map(g=>g[0]),s=n.map(g=>g[1]),r=Math.min(...i),a=Math.min(...s),l=Math.max(...i),c=Math.max(...s),p=Math.min(l-r,c-a),u=Math.max(.1,Math.min(.25,p/8)),_=Math.min(.35,p/5),h=te(n),d=[];for(let g=r+u/2;g<l;g+=u)for(let k=a+u/2;k<c;k+=u){let $=[g,k];if(!O($,n))continue;let w=Wi($,n);w<_||d.push({p:$,wall:w})}d.length||d.push({p:h,wall:0});let f=[...t],v=[],b=Math.min(.7,p/4);for(let g of e){let k=T(g)==="light",$=d[0].p,w=-1/0;for(let{p:E,wall:z}of d){let A=f.length?Math.min(...f.map(q=>Math.hypot(E[0]-q[0],E[1]-q[1]))):3,I=Math.hypot(E[0]-h[0],E[1]-h[1]),W=Math.min(A,3)*2;I<b&&!k&&(W-=10),W-=k?I*.35:z*1.2,W>w+1e-9&&(w=W,$=E)}let S=[Math.round($[0]*100)/100,Math.round($[1]*100)/100];f.push(S),v.push({entity_id:g,x:S[0],z:S[1],y:null,mount:null})}return v}var Bi=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),Ci=new Set(["garage","gate"]),Ni=new Set(["window","opening"]);function Me(o,e,t=!1){let n=new Map;return e.length&&o.forEach((i,s)=>{let r=t&&e.length===1?e[0]:e[s];r&&n.set(i.id,r)}),n}function Bn(o,e){let t=new Map;for(let n of e)for(let i of n.rooms){let s=n.openings.filter(g=>g.room_id===i.id).sort((g,k)=>g.edge-k.edge||g.offset-k.offset);if(!s.length)continue;let r=_e(o,i.area_id),a=g=>o.states[g]?.attributes.device_class,l=r.filter(g=>T(g)==="cover"&&Bi.has(a(g))),c=s.filter(g=>g.type==="window"),p=s.filter(g=>g.type==="door"),u=s.filter(g=>g.type==="garage"),_=Me(c,l,!0),h=Me(c,r.filter(g=>T(g)==="binary"&&Ni.has(a(g)))),d=Me(p,r.filter(g=>T(g)==="binary"&&a(g)==="door")),f=Me(u,r.filter(g=>T(g)==="cover"&&Ci.has(a(g)??""))),v=Me(u,r.filter(g=>T(g)==="binary"&&a(g)==="garage_door")),b=(g,k)=>g==="none"?null:g??k??null;for(let g of s){let k=g.type==="window"?_:g.type==="garage"?f:null,$=g.type==="window"?h:g.type==="garage"?v:d;t.set(g.id,{cover:b(g.cover,k?.get(g.id)),contact:g.sensor==="handle"&&g.contact==null?null:b(g.contact,$.get(g.id)),tilt:g.tilt==="none"?null:g.tilt,contact2:g.leaves===2&&g.contact2&&g.contact2!=="none"?g.contact2:null,tilt2:g.leaves===2&&g.tilt2&&g.tilt2!=="none"?g.tilt2:null,position:g.position&&g.position!=="none"?g.position:null,positionInverted:!!g.position_inverted})}}return t}var Vi=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function xt(o){if(!o||Hi(o))return null;let e=o.attributes.window_state;for(let t of[typeof e=="string"?e:null,o.state]){if(!t)continue;let n=Vi.find(([i])=>i.test(t.trim()));if(n)return n[1]}return null}function St(o,e){let t=new Map,n=[];for(let r of e){let a=o.entities?.[r]?.device_id??`entity:${r}`,l=t.get(a);l||(t.set(a,l=[]),n.push(a)),l.push(r)}let i=n.map(r=>{let a=t.get(r),l=a.find(c=>!o.entities?.[c]?.name)??a[0];return{primary:l,others:a.filter(c=>c!==l)}}),s=new Map(e.map((r,a)=>[r,a]));return i.sort((r,a)=>s.get(r.primary)-s.get(a.primary))}function Ki(o,e){return St(o,e).map(t=>t.primary)}var Ui={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i},ji=new Set(["tv_board","tv_wall"]);function Cn(o,e){let t=o.states[e.entity];if(!t)return!1;let n=e.attribute?t.attributes[e.attribute]:t.state;if(n==null)return!1;let i=String(n).toLowerCase(),s=e.state.trim().toLowerCase();return e.state.trim()==="*"||i===s||s.length>=3&&i.includes(s)}function Be(o){return ji.has(o)||!!fn(o)}function Nn(o){return Be(o)||o==="desk"||o==="fridge_smart"}var Fn={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function Mt(o,e){return e.startsWith("sensor.")&&o.states[e]?.attributes.device_class==="power"}function Gi(o,e){if(Mt(o,e))return e;let t=o.entities?.[e]?.device_id;return t?Li(o,t).find(n=>n!==e)??null:null}function Vn(o,e){let t=new Map;for(let n of e){let i=new Set(n.furniture.flatMap(s=>[s.entity,s.power]).filter(s=>!!s&&s!=="none"));for(let s of n.furniture){let r=s.type in Fn,a=r?Fn[s.type]:Ui[s.type];if(!a&&s.entity==null&&s.power==null)continue;let l=n.rooms.find(h=>h.points.length>=3&&O([s.x,s.z],h.points)),c=l?Ki(o,_e(o,l.area_id)):[],p=h=>`${h} ${C(o,h)}`,u=s.entity==="none"?null:s.entity??null;if(s.entity==null){let h=c.filter(d=>!i.has(d));if(r){let d=h.filter(f=>T(f)==="light");u=d.find(f=>a.test(p(f)))??d[0]??null}else if(s.type==="robot_vacuum"){let d=l?.area_id??null;u=Object.keys(o.entities??{}).find(f=>f.startsWith("vacuum.")&&!i.has(f)&&Ln(o,f)===d)??null}else if(s.type==="radiator"){let d=h.filter(f=>T(f)==="climate");u=d.find(f=>a.test(p(f)))??d[0]??null}else if(Be(s.type)){let d=h.filter(f=>T(f)==="media");u=d.find(f=>o.states[f]?.attributes.device_class==="tv")??d.find(f=>a?.test(p(f)))??d[0]??null}else a&&(u=h.find(d=>["switch","media","fan"].includes(T(d)??"")&&a.test(p(d)))??null);u&&i.add(u)}let _=s.power==="none"?null:s.power??null;s.power==null&&(_=u?Gi(o,u):null,!_&&a&&l&&!r&&(_=_e(o,l.area_id).find(d=>Mt(o,d)&&!i.has(d)&&a.test(p(d)))??null),_&&i.add(_)),(u||_)&&t.set(s.id,{entity:u,power:_})}}return t}var R=(o,e,t,n,i="")=>x`<rect class=${i} x=${Math.min(o,t)} y=${Math.min(e,n)} width=${Math.abs(t-o)} height=${Math.abs(n-e)} />`,P=(o,e,t,n,i="")=>x`<line class=${i} x1=${o} y1=${e} x2=${t} y2=${n} />`,F=(o,e,t,n="")=>x`<circle class=${n} cx=${o} cy=${e} r=${t} />`,Et=(o,e,t,n,i="")=>x`<ellipse class=${i} cx=${o} cy=${e} rx=${t} ry=${n} />`;function zt(o,e,t){let n=[];for(let i=1;i<t;i++){let s=-o/2+o/t*i;n.push(P(s,e/2,s,e/2-Math.min(.12,e*.3)))}return n}function Kn(o,e,t,n){let i=Math.min(.24,e*.28),s=n?Math.min(.2,o*.12):0,r=[R(-o/2,-e/2,o/2,-e/2+i,"fp3d-sym-fill")];n&&r.push(R(-o/2,-e/2,-o/2+s,e/2,"fp3d-sym-fill"),R(o/2-s,-e/2,o/2,e/2,"fp3d-sym-fill"));let a=o-2*s;for(let l=1;l<t;l++){let c=-o/2+s+a/t*l;r.push(P(c,-e/2+i,c,e/2-.02))}return r}function Un(o,e,t){switch(o){case"sofa":return Kn(e,t,Math.max(1,Math.round((e-.4)/.62)),!0);case"armchair":return Kn(e,t,1,!0);case"bench":return[R(-e/2,-t/2,e/2,-t/2+.08,"fp3d-sym-fill")];case"corner_bench":{let n=Math.min(.5,t*.4);return[R(-e/2,-t/2,e/2,-t/2+.08,"fp3d-sym-fill"),R(-e/2,-t/2,-e/2+.08,t/2,"fp3d-sym-fill"),P(-e/2+n,-t/2+n,e/2,-t/2+n),P(-e/2+n,-t/2+n,-e/2+n,t/2)]}case"chair":return[R(-e/2,-t/2,e/2,-t/2+.06,"fp3d-sym-fill")];case"office_chair":return[F(0,.03,Math.min(e,t)*.36),R(-e*.35,-t/2+.02,e*.35,-t/2+.1,"fp3d-sym-fill")];case"bar_stool":case"table_round":return[F(0,0,Math.min(e,t)*.42)];case"stool":return[R(-e/2+.04,-t/2+.04,e/2-.04,t/2-.04)];case"table":case"coffee_table":case"desk":{let n=[R(-e/2+.05,-t/2+.05,e/2-.05,t/2-.05)];return o==="desk"&&n.push(P(-.3,-t/2+.1,.3,-t/2+.1,"fp3d-sym-strong")),n}case"bed":case"bunk_bed":{let n=e>1.2?2:1,i=(e-.2)/n,s=[R(-e/2,-t/2,e/2,-t/2+.07,"fp3d-sym-fill"),P(-e/2,-t/2+(t-.1)*.36,e/2,-t/2+(t-.1)*.36)];for(let r=0;r<n;r++)s.push(R(-e/2+.13+i*r,-t/2+.12,-e/2+.07+i*(r+1),-t/2+.12+Math.min(.4,t*.18)));return s}case"nightstand":case"wardrobe":case"dresser":case"sideboard":case"tall_cabinet":case"kitchen":case"kitchen_wall":case"kitchen_tall":case"shelf":return zt(e,t,o==="nightstand"||o==="tall_cabinet"||o==="kitchen_tall"?1:Math.max(2,Math.round(e/.5)));case"coat_rack":return[R(-e/2,-t/2,e/2,-t/2+.03,"fp3d-sym-fill"),...zt(e,t,Math.max(2,Math.round(e/.5)))];case"island":return[P(-e/2,t/2-.3,e/2,t/2-.3)];case"fridge":return[P(-e/2+.06,t/2-.04,e/2-.06,t/2-.04,"fp3d-sym-strong")];case"stove":{let n=Math.min(e,t)*.14;return[F(-e*.22,-t*.2,n),F(e*.22,-t*.2,n*.8),F(-e*.22,t*.2,n*.8),F(e*.22,t*.2,n)]}case"sink":{let n=Math.min(.5,e-.2);return[R(-n/2,-t/2+.1,n/2,t/2-.08),F(0,-t/2+.06,.025,"fp3d-sym-fill")]}case"dishwasher":return[P(-e/2+.08,t/2-.05,e/2-.08,t/2-.05,"fp3d-sym-strong")];case"washer":case"dryer":return[F(0,.05,Math.min(e,t)*.3),P(-e/2,-t/2+.1,e/2,-t/2+.1)];case"bathtub":return[R(-e/2+.07,-t/2+.07,e/2-.07,t/2-.07),F(-e/2+.14,0,.03,"fp3d-sym-fill")];case"shower":return[P(-e/2,-t/2,e/2,t/2),P(e/2,-t/2,-e/2,t/2),F(0,0,.04)];case"wc":return[R(-e/2,-t/2,e/2,-t/2+Math.min(.18,t*.3),"fp3d-sym-fill"),Et(0,t*.1,e*.36,t*.3)];case"washbasin":return[Et(0,.03,e*.34,t*.3)];case"tv_board":return[P(-Math.min(e*.4,.72),-t/2+.14,Math.min(e*.4,.72),-t/2+.14,"fp3d-sym-strong"),...zt(e,t,Math.max(2,Math.round(e/.6)))];case"tv_wall":return[P(-e/2,0,e/2,0,"fp3d-sym-strong")];case"lamp_downlight":case"lamp_spot":return[F(0,0,Math.min(e,t)*.45,"fp3d-sym-fill"),F(0,0,Math.min(e,t)*1.4)];case"lamp_bollard":case"lamp_garden":return[F(0,0,Math.min(e,t)*.5,"fp3d-sym-fill"),F(0,0,Math.min(e,t)*1.6)];case"parking":return[R(-e/2+.08,-t/2+.08,e/2-.08,t/2-.08),P(-e*.15,t/2-.5,0,t/2-.22,"fp3d-sym-strong"),P(0,t/2-.22,e*.15,t/2-.5,"fp3d-sym-strong")];case"robot_vacuum":return[R(-e*.45,-t/2,e*.45,-t/2+t*.3,"fp3d-sym-fill"),F(0,t*.14,Math.min(e,t)*.47)];case"radiator":{let n=[],i=Math.max(3,Math.round(e/.1));for(let s=1;s<i;s++)n.push(P(-e/2+e/i*s,-t/2,-e/2+e/i*s,t/2));return n}case"lamp_panel":return[R(-e/2+.03,-t/2+.03,e/2-.03,t/2-.03,"fp3d-sym-fill")];case"lamp_uplight":case"lamp_ceiling":case"lamp_pendant":case"lamp_floor":case"lamp_table":{let n=Math.min(e,t)/2,i=[F(0,0,n*.9,"fp3d-sym-fill"),F(0,0,n*.3)];if(o==="lamp_ceiling"||o==="lamp_pendant")for(let s=0;s<8;s++){let r=s/8*Math.PI*2;i.push(P(Math.cos(r)*n*1.05,Math.sin(r)*n*1.05,Math.cos(r)*n*1.35,Math.sin(r)*n*1.35))}return i}case"lamp_wall":return[R(-e/2,-t/2,e/2,-t/2+.03,"fp3d-sym-fill"),Et(0,.01,e*.4,t*.4)];case"led_strip":return[P(-e/2,0,e/2,0,"fp3d-sym-strong")];case"plant":return[F(0,0,Math.min(e,t)*.46),F(0,0,Math.min(e,t)*.25)];case"rug":return[R(-e/2+.1,-t/2+.1,e/2-.1,t/2-.1)];case"stairs":{let n=Math.max(3,Math.round(t/.26)),i=[];for(let s=1;s<n;s++)i.push(P(-e/2,t/2-t/n*s,e/2,t/2-t/n*s));return i.push(P(0,t/2-.1,0,-t/2+.25,"fp3d-sym-strong"),P(-.15,-t/2+.45,0,-t/2+.25,"fp3d-sym-strong"),P(.15,-t/2+.45,0,-t/2+.25,"fp3d-sym-strong")),i}default:{let n=H(o);return n?Xi(n,e,t):y}}}function Xi(o,e,t){return o.symbol?.length?o.symbol.map(n=>n.shape==="rect"?R((n.x-n.w/2)*e,(n.z-n.d/2)*t,(n.x+n.w/2)*e,(n.z+n.d/2)*t,n.fill?"fp3d-sym-fill":""):n.shape==="circle"?F(n.x*e,n.z*t,n.r*Math.min(e,t)):P(n.x1*e,n.z1*t,n.x2*e,n.z2*t)):o.parts.filter(n=>n.w<.98||n.d<.98).map(n=>n.shape==="cyl"&&(n.axis??"y")==="y"?F(n.x*e,n.z*t,Math.min(n.w*e,n.d*t)/2):R((n.x-n.w/2)*e,(n.z-n.d/2)*t,(n.x+n.w/2)*e,(n.z+n.d/2)*t))}var Zi=.05,qi=.2,Yi=.12;function Ji(o){let e=[];return o.forEach((t,n)=>{let i=t.points;if(i.length<3)return;let s=U(i)>=0;for(let r=0;r<i.length;r++){let a=i[r],l=i[(r+1)%i.length],c=l[0]-a[0],p=l[1]-a[1],u=Math.hypot(c,p);if(u<.05)continue;let _=[c/u,p/u],h=s?[_[1],-_[0]]:[-_[1],_[0]];(_[1]<-1e-9||Math.abs(_[1])<=1e-9&&_[0]<0)&&(_=[-_[0],-_[1]]);let d=[-_[1],_[0]],f=a[0]*_[0]+a[1]*_[1],v=l[0]*_[0]+l[1]*_[1];e.push({room:n,index:r,dir:_,normal:d,offset:a[0]*d[0]+a[1]*d[1],outside:h[0]*d[0]+h[1]*d[1]>0?1:-1,t0:Math.min(f,v),t1:Math.max(f,v)})}}),e}function jn(o,e=.6){let t=Ji(o),n=t.map((p,u)=>u),i=p=>n[p]===p?p:n[p]=i(n[p]),s=[];for(let p=0;p<t.length;p++)for(let u=p+1;u<t.length;u++){let _=t[p],h=t[u];if(_.room===h.room||Math.abs(_.dir[0]*h.dir[1]-_.dir[1]*h.dir[0])>Zi||_.outside===h.outside)continue;let d=(h.offset-_.offset)*_.outside;d>e||d<-Yi||Math.abs(d)<1e-4||Math.min(_.t1,h.t1)-Math.max(_.t0,h.t0)<qi||(s.push(Math.round(d*1e3)/1e3),n[i(p)]=i(u))}if(!s.length)return{rooms:o.map(p=>({...p,points:p.points.map(u=>[u[0],u[1]])})),gaps:s};let r=new Map;t.forEach((p,u)=>{let _=i(u);if(_===u&&!t.some((d,f)=>f!==u&&i(f)===u))return;let h=r.get(_)??[];h.push(u),r.set(_,h)});let a=o.map(p=>p.points.map(()=>new Map));for(let[p,u]of r){let _=u.reduce((h,d)=>h+t[d].offset,0)/u.length;for(let h of u){let d=t[h],f=_-d.offset,v=[d.normal[0]*f,d.normal[1]*f],b=o[d.room].points.length;a[d.room][d.index].set(p,v),a[d.room][(d.index+1)%b].set(p,v)}}let l=p=>Math.round(p*1e3)/1e3;return{rooms:o.map((p,u)=>({...p,points:p.points.map((_,h)=>{let d=_[0],f=_[1];for(let[v,b]of a[u][h].values())d+=v,f+=b;return[l(d),l(f)]})})),gaps:s}}function Gn(o){let e=o.filter(n=>n>.04).sort((n,i)=>n-i);if(!e.length)return null;let t=e[Math.floor(e.length/2)];return Math.min(.5,Math.max(.08,Math.round(t*100)/100))}var Qi=.25,Xn=o=>Math.round(o*1e3)/1e3;function At(o,e,t,n,i){let s=o.rooms.find(r=>r.points.length>=3&&O([e,t],r.points));return!s||O([n,i],s.points)?[n,i]:O([n,t],s.points)?[n,t]:O([e,i],s.points)?[e,i]:[e,t]}function Pt(o,e,t,n=Qi){let i=o.rooms.find(c=>c.points.length>=3&&O([e.x,e.z],c.points));if(!i)return null;let s=i.points,r=U(s)>=0?1:-1,a=t/2,l=null;for(let c=0;c<s.length;c++){let p=s[c],u=s[(c+1)%s.length],_=Math.hypot(u[0]-p[0],u[1]-p[1]);if(_<.3)continue;let h=[(u[0]-p[0])/_,(u[1]-p[1])/_],d=[-h[1]*r,h[0]*r],f=(e.x-p[0])*h[0]+(e.z-p[1])*h[1];if(f<0||f>_)continue;let b=o.rooms.some(z=>z.id!==i.id&&z.points.some((A,I)=>{let W=z.points[(I+1)%z.points.length],q=Math.abs((A[0]-p[0])*d[0]+(A[1]-p[1])*d[1]),de=Math.abs((W[0]-p[0])*d[0]+(W[1]-p[1])*d[1]);return q<.02&&de<.02}))?a:0,g=(e.x-p[0])*d[0]+(e.z-p[1])*d[1]-b,k=Math.atan2(-d[0],d[1])*180/Math.PI,$=z=>Math.abs((e.rotation-z+540)%360-180),S=[{rotation:k,extent:e.d/2},{rotation:k+90,extent:e.w/2},{rotation:k-90,extent:e.w/2}].reduce((z,A)=>$(A.rotation)<$(z.rotation)?A:z);if($(S.rotation)>50)continue;let E=g-S.extent;Math.abs(E)>n||l&&Math.abs(E)>=Math.abs(l.gap)||(l={x:Xn(e.x-d[0]*E),z:Xn(e.z-d[1]*E),rotation:(Math.round(S.rotation)%360+360)%360,gap:E})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}function Zn(o,e){return e&&o.states[e]?e:Object.keys(o.states).filter(t=>t.startsWith("weather.")).sort()[0]??null}var Yn=["kitchen_row","kitchen_l","bath","bedroom","living","dining","office","kids","hall"],es={kitchen_row:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"kitchen",size:[.9,.62,.92]},{type:"sink"},{type:"dishwasher"},{type:"stove"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"back",align:"start",items:[{type:"kitchen_wall",size:[1.2,.35,.7]}]}],free:[{type:"table",at:[.5,.72],rotation:0,size:[1.2,.8,.75]},{type:"lamp_pendant",at:[.5,.72],rotation:0},{type:"lamp_ceiling",at:[.5,.3],rotation:0}]},kitchen_l:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"sink"},{type:"dishwasher"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"left",align:"end",items:[{type:"stove"},{type:"kitchen",size:[1.2,.62,.92]}]}],free:[{type:"island",at:[.62,.62],rotation:0,size:[1.6,.9,.92]},{type:"bar_stool",at:[.52,.86],rotation:180},{type:"bar_stool",at:[.72,.86],rotation:180},{type:"lamp_ceiling",at:[.5,.35],rotation:0}]},bath:{rows:[{wall:"back",align:"center",items:[{type:"washbasin"}]},{wall:"back",align:"end",items:[{type:"wc"}]},{wall:"front",align:"start",items:[{type:"bathtub"}]},{wall:"left",align:"start",items:[{type:"washer"}]}],free:[{type:"lamp_downlight",at:[.5,.5],rotation:0}]},bedroom:{rows:[{wall:"back",align:"center",items:[{type:"nightstand"},{type:"bed"},{type:"nightstand"}]},{wall:"left",align:"center",items:[{type:"wardrobe",size:[2,.6,2.1]}]},{wall:"front",align:"end",items:[{type:"dresser"}]}],free:[{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},living:{rows:[{wall:"back",align:"center",items:[{type:"tv_board"}]},{wall:"right",align:"start",items:[{type:"shelf"}]}],free:[{type:"sofa",at:[.5,.72],rotation:180},{type:"coffee_table",at:[.5,.52],rotation:0},{type:"rug",at:[.5,.55],rotation:0,size:[2.2,1.6,.01]},{type:"armchair",at:[.14,.5],rotation:270},{type:"lamp_floor",at:[.86,.8],rotation:0},{type:"plant",at:[.9,.12],rotation:0},{type:"lamp_ceiling",at:[.5,.45],rotation:0}]},dining:{rows:[{wall:"back",align:"center",items:[{type:"sideboard"}]}],free:[{type:"table",at:[.5,.55],rotation:0},{type:"chair",at:[.4,.35],rotation:0},{type:"chair",at:[.6,.35],rotation:0},{type:"chair",at:[.4,.75],rotation:180},{type:"chair",at:[.6,.75],rotation:180},{type:"lamp_pendant",at:[.5,.55],rotation:0}]},office:{rows:[{wall:"back",align:"center",items:[{type:"desk"}]},{wall:"left",align:"center",items:[{type:"shelf"},{type:"shelf"}]}],free:[{type:"office_chair",at:[.5,.38],rotation:180},{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},kids:{rows:[{wall:"left",align:"start",items:[{type:"bed",size:[.9,2,.8]}]},{wall:"back",align:"end",items:[{type:"desk",size:[1.2,.6,.75]}]},{wall:"right",align:"end",items:[{type:"shelf"}]}],free:[{type:"rug",at:[.55,.6],rotation:0,size:[1.6,1.2,.01]},{type:"lamp_ceiling",at:[.5,.5],rotation:0}]},hall:{rows:[{wall:"left",align:"start",items:[{type:"coat_rack"}]}],free:[{type:"lamp_downlight",at:[.5,.3],rotation:0},{type:"lamp_downlight",at:[.5,.7],rotation:0}]}},ts={back:0,right:90,front:180,left:270};function Jn(o,e,t){let n=K(o.points),i=n.x1-n.x0,s=n.z1-n.z0,r=es[e],a=[],l=(p,u,_,h,d)=>{let[f,v,b]=d??X[p];a.push({id:t(),type:p,x:qn(u),z:qn(_),rotation:h,w:f,d:v,h:b,variant:null,entity:null,power:null})},c=.02;for(let p of r.rows){let u=p.items.map(v=>({type:v.type,size:v.size??X[v.type]})),_=p.wall==="back"||p.wall==="front"?i:s,h=[],d=0;for(let v of u){if(d+v.size[0]>_-.1)break;h.push(v),d+=v.size[0]}let f=p.align==="start"?.05:p.align==="end"?_-d-.05:(_-d)/2;for(let v of h){let[b,g]=v.size,k=f+b/2,$=g/2+c;p.wall==="back"?l(v.type,n.x0+k,n.z0+$,0,v.size):p.wall==="front"?l(v.type,n.x1-k,n.z1-$,180,v.size):p.wall==="right"?l(v.type,n.x1-$,n.z0+k,90,v.size):l(v.type,n.x0+$,n.z1-k,ts.left,v.size),f+=b}}for(let p of r.free){let[u,_]=p.size??X[p.type],h=Math.min(n.x1-u/2-.05,Math.max(n.x0+u/2+.05,n.x0+i*p.at[0])),d=Math.min(n.z1-_/2-.05,Math.max(n.z0+_/2+.05,n.z0+s*p.at[1]));l(p.type,h,d,p.rotation,p.size)}return a}var qn=o=>Math.round(o*1e3)/1e3;var N=(o,e)=>[o[0]-e[0],o[1]-e[1]],ge=(o,e)=>[o[0]+e[0],o[1]+e[1]],ne=(o,e)=>[o[0]*e,o[1]*e],Ce=(o,e)=>o[0]*e[0]+o[1]*e[1],Ee=(o,e)=>o[0]*e[1]-o[1]*e[0],Ne=o=>Math.hypot(o[0],o[1]),ce=o=>{let e=Ne(o)||1;return[o[0]/e,o[1]/e]},Qn=o=>[-o[1],o[0]],ei=o=>[o[1],-o[0]];function Rt(o,e){let t=e.eps??.005,n=[],i=[],s=h=>{for(let d=0;d<i.length;d++)if(Math.abs(i[d][0]-h[0])<=t&&Math.abs(i[d][1]-h[1])<=t)return d;return i.push([h[0],h[1]]),i.length-1},r=[];for(let h of o){let d=h.points;if(d.length<3||Math.abs(U(d))<1e-6)continue;let f=U(d)>0,v=d.map(s);for(let b=0;b<d.length;b++){let g=v[b],k=v[(b+1)%d.length];g!==k&&r.push(f?{u:g,v:k,room:h.id,edge:b,forward:!0}:{u:k,v:g,room:h.id,edge:b,forward:!1})}}let a=[];for(let h of r){let d=i[h.u],f=i[h.v],v=N(f,d),b=Ne(v),g=ne(v,1/b),k=[];for(let w=0;w<i.length;w++){if(w===h.u||w===h.v)continue;let S=N(i[w],d),E=Ce(S,g);E<=t||E>=b-t||Math.abs(Ee(g,S))<=t&&k.push({t:E,id:w})}k.sort((w,S)=>w.t-S.t);let $=[{t:0,id:h.u},...k,{t:b,id:h.v}];for(let w=0;w+1<$.length;w++){let S=$[w],E=$[w+1],z=h.forward?S.t:b-E.t,A=h.forward?E.t:b-S.t;a.push({u:S.id,v:E.id,room:h.room,edge:h.edge,t0:z,t1:A})}}let l=new Map;for(let h of a){let d=h.u<h.v?`${h.u}-${h.v}`:`${h.v}-${h.u}`,f=l.get(d);f||l.set(d,f=[]),f.push(h)}let c=h=>({room_id:h.room,edge:h.edge,t0:h.t0,t1:h.t1}),p=[];for(let h of l.values()){let d=h[0],f=h.find(v=>v!==d&&v.u===d.v&&v.v===d.u&&v.room!==d.room);for(let v of h)v!==d&&v!==f&&v.room!==d.room&&n.push(`overlap:${d.room}:${v.room}`);f?p.push({a:d.u,b:d.v,left:e.interior/2,right:e.interior/2,exterior:!1,roomLeft:d.room,roomRight:f.room,sources:[c(d),c(f)]}):p.push({a:d.u,b:d.v,left:0,right:e.exterior,exterior:!0,roomLeft:d.room,roomRight:null,sources:[c(d)]})}p=is(p,i);let u=rs(p,i);return{walls:p.map((h,d)=>{let f=i[h.a],v=i[h.b],b=u.get(`${d}:a`),g=u.get(`${d}:b`),k=os([b.right,g.left,v,g.right,b.left,f],1e-6);return{id:ns(f,v),a:[f[0],f[1]],b:[v[0],v[1]],left:h.left,right:h.right,exterior:h.exterior,roomLeft:h.roomLeft,roomRight:h.roomRight,sources:h.sources,footprint:k}}),warnings:[...new Set(n)]}}function ns(o,e){let t=s=>Math.round(s*100),[n,i]=o[0]<e[0]||o[0]===e[0]&&o[1]<=e[1]?[o,e]:[e,o];return`w_${t(n[0])}_${t(n[1])}_${t(i[0])}_${t(i[1])}`}function ti(o){return{...o,a:o.b,b:o.a,left:o.right,right:o.left,roomLeft:o.roomRight,roomRight:o.roomLeft}}function is(o,e){let t=o.slice(),n=!0;for(;n;){n=!1;let i=new Map;t.forEach((s,r)=>{for(let a of[s.a,s.b]){let l=i.get(a);l||i.set(a,l=[]),l.push(r)}});for(let[s,r]of i){if(r.length!==2)continue;let a=t[r[0]],l=t[r[1]];if(a.b!==s&&(a=ti(a)),l.a!==s&&(l=ti(l)),a.a===l.b)continue;let c=ce(N(e[a.b],e[a.a])),p=ce(N(e[l.b],e[l.a]));if(Math.abs(Ee(c,p))>1e-6||Ce(c,p)<=0||a.exterior!==l.exterior||a.roomLeft!==l.roomLeft||a.roomRight!==l.roomRight||Math.abs(a.left-l.left)>1e-9||Math.abs(a.right-l.right)>1e-9)continue;let u={...a,b:l.b,sources:ss(a.sources,l.sources)},_=t.filter((h,d)=>d!==r[0]&&d!==r[1]);_.push(u),t.length=0,t.push(..._),n=!0;break}}return t}function ss(o,e){let t=o.map(n=>({...n}));for(let n of e){let i=t.find(s=>s.room_id===n.room_id&&s.edge===n.edge&&(Math.abs(s.t1-n.t0)<1e-6||Math.abs(n.t1-s.t0)<1e-6));i?(i.t0=Math.min(i.t0,n.t0),i.t1=Math.max(i.t1,n.t1)):t.push({...n})}return t}function rs(o,e){let t=new Map;o.forEach((i,s)=>{let r=ce(N(e[i.b],e[i.a])),a=[[i.a,{key:`${s}:a`,d:r,left:i.left,right:i.right,angle:Math.atan2(r[1],r[0])}],[i.b,{key:`${s}:b`,d:ne(r,-1),left:i.right,right:i.left,angle:Math.atan2(-r[1],-r[0])}]];for(let[l,c]of a){let p=t.get(l);p||t.set(l,p=[]),p.push(c)}});let n=new Map;for(let[i,s]of t){let r=e[i];s.sort((c,p)=>c.angle-p.angle);let a=c=>({left:ge(r,ne(Qn(c.d),c.left)),right:ge(r,ne(ei(c.d),c.right))});for(let c of s)n.set(c.key,a(c));if(s.length<2)continue;let l=4*Math.max(...s.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<s.length;c++){let p=s[c],u=s[(c+1)%s.length],_=ge(r,ne(Qn(p.d),p.left)),h=ge(r,ne(ei(u.d),u.right)),d=Ee(p.d,u.d);if(Math.abs(d)<1e-4)continue;let f=Ee(N(h,_),u.d)/d,v=ge(_,ne(p.d,f));Ne(N(v,r))>l||(n.get(p.key).left=v,n.get(u.key).right=v)}}return n}function os(o,e){let t=o.filter((i,s)=>Ne(N(i,o[(s+1)%o.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let i=0;i<t.length;i++){let s=t[(i+t.length-1)%t.length],r=t[i],a=t[(i+1)%t.length],l=N(r,s),c=N(a,r);if(Math.abs(Ee(ce(l),ce(c)))<1e-7&&Ce(l,c)>0){t=t.filter((p,u)=>u!==i),n=!0;break}}}return t}function ze(o,e,t){let n=o.points[e],i=o.points[(e+1)%o.points.length],s=ce(N(i,n));return ge(n,ne(s,t))}function It(o,e,t,n){for(let i of o){if(!i.sources.find(a=>a.room_id===e.id&&a.edge===t&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let r=ze(e,t,n);return{wall:i,s:Ce(N(r,i.a),ce(N(i.b,i.a)))}}return null}var ni={view:"3D",editor:"Editor",all_floors:"Alle Etagen",no_building:"Noch kein Grundriss vorhanden.",no_building_admin:"Noch kein Grundriss vorhanden. Im Editor zeichnest du deine erste Etage.",open_editor:"Editor \xF6ffnen",loading:"L\xE4dt \u2026",load_error:"Laden fehlgeschlagen",saving:"Speichert \u2026",saved:"Gespeichert",save_error:"Speichern fehlgeschlagen",save_failed_detail:"Speichern fehlgeschlagen: {error}. Deine \xC4nderungen bleiben in diesem Browser erhalten.",needs_restart:"Eine neue Version von NeonPlan 3D ist installiert, aber Home Assistant l\xE4uft noch mit {version}. Bitte Home Assistant neu starten \u2013 bis dahin kann das Speichern fehlschlagen.",needs_restart_old:"Eine neue Version von NeonPlan 3D ist installiert, aber Home Assistant l\xE4uft noch mit einer \xE4lteren. Bitte Home Assistant neu starten \u2013 bis dahin schl\xE4gt das Speichern fehl.",draft_found:"Nicht gespeicherte \xC4nderungen vom {time} gefunden.",draft_restore:"\xDCbernehmen und speichern",draft_discard:"Verwerfen",walls_auto:"W\xE4nde hoch",walls_cut:"Schnitt",reset_view:"\xDCbersicht",back:"Zur\xFCck",floor:"Etage",floors:"Etagen",add_floor:"Etage hinzuf\xFCgen",floor_from_ha:"Etagen aus Home Assistant:",floor_empty:"Leere Etage",level:"Ebene {n}",ha_floor:"Etage in Home Assistant",no_ha_floor:"\u2013 keine \u2013",area_rooms:"{n} R\xE4ume aus HA-Bereichen anlegen",area_rooms_hint:"Legt f\xFCr jeden Bereich dieser Etage einen Raum an (4 \xD7 3 m) \u2013 danach an die richtige Stelle ziehen und die Ecken anpassen",floor_name:"Name",elevation:"H\xF6he \xFCber Boden (m)",height:"Raumh\xF6he (m)",cut_height:"Schnitth\xF6he (m)",delete_floor:"Etage l\xF6schen",delete_floor_confirm:"Etage \u201E{name}\u201C mit allen R\xE4umen l\xF6schen?",move_up:"Nach oben",move_down:"Nach unten",default_floor:"Erdgeschoss",new_floor:"Etage {n}",tool_select:"Ausw\xE4hlen",tool_rect:"Rechteck",tool_polygon:"Freie Form",undo:"R\xFCckg\xE4ngig",redo:"Wiederholen",fit:"Alles zeigen",room:"Raum",rooms:"R\xE4ume",room_name:"Name",area:"Bereich",no_area:"Kein Bereich",material:"Boden",x:"X (m)",z:"Y (m)",width:"Breite (m)",depth:"Tiefe (m)",points:"Eckpunkte",delete_point:"Punkt l\xF6schen",duplicate:"Duplizieren",delete:"L\xF6schen",new_room:"Raum {n}",settings:"Einstellungen",pendant_shape:"Form",pendant_shade:"Schirm",pendant_globe:"Kugel",pendant_cone:"Kegel",pendant_drum:"Trommel",pkg_open:"Einrichten \u2026",pkg_hint:"Die M\xF6bel kommen an die W\xE4nde des Raums; Leuchten verbinden sich mit den Lichtern des Bereichs. Danach einzeln anpassen \u2013 Strg+Z nimmt alles zur\xFCck.",pkg_done:"{n} M\xF6bel gesetzt \u2013 Strg+Z nimmt es zur\xFCck.",pkg_kitchen_row:"K\xFCchenzeile",pkg_kitchen_row_desc:"Zeile an der R\xFCckwand mit K\xFChlschrank, Backofen, Sp\xFCle, Sp\xFClmaschine und Herd, Oberschrank, Esstisch mit Pendelleuchte",pkg_kitchen_l:"K\xFCche in L-Form",pkg_kitchen_l_desc:"Zeile hinten und links, Kochinsel mit Barhockern",pkg_bath:"Bad",pkg_bath_desc:"Waschtisch, WC, Badewanne, Waschmaschine, Einbauspot",pkg_bedroom:"Schlafzimmer",pkg_bedroom_desc:"Doppelbett mit zwei Nachttischen, Schrank, Kommode, Deckenleuchte",pkg_living:"Wohnzimmer",pkg_living_desc:"TV-Board, Sofa, Couchtisch, Teppich, Sessel, Regal, Stehlampe, Pflanze",pkg_dining:"Esszimmer",pkg_dining_desc:"Esstisch mit vier St\xFChlen, Sideboard, Pendelleuchte",pkg_office:"B\xFCro",pkg_office_desc:"Schreibtisch mit B\xFCrostuhl, zwei Regale, Deckenleuchte",pkg_kids:"Kinderzimmer",pkg_kids_desc:"Einzelbett, Schreibtisch, Regal, Teppich",pkg_hall:"Flur",pkg_hall_desc:"Garderobe, zwei Einbauspots",spots_place:"Spots setzen",spots_type:"Leuchte",spots_cols:"Spalten (links\u2013rechts)",spots_rows:"Reihen (vorne\u2013hinten)",spots_add:"{n} Leuchten setzen",spots_placed:"{n} Leuchten gesetzt.",spots_hint:"Alle Leuchten folgen dem gew\xE4hlten Licht (z. B. Spots an einem Dimmer). Einzeln verschieben und ein anderes Licht w\xE4hlen geht danach wie bei jedem M\xF6bel.",cancel:"Abbrechen",backup:"Sicherung",backup_history:"Wiederherstellungspunkte",backup_none:"Noch keine. Beim Bearbeiten entsteht h\xF6chstens alle 10 Minuten ein Punkt.",backup_summary:"{rooms} R\xE4ume, {furniture} M\xF6bel",backup_restore:"Wiederherstellen",backup_restore_confirm:"Den Stand vom {time} wiederherstellen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_restored:"Wiederhergestellt.",backup_file:"Datei",backup_export:"Exportieren",backup_export_share:"Als Vorlage teilen",backup_export_share_hint:"Ohne Bereiche, Ger\xE4te, Sensoren und Bilder \u2013 zum Weitergeben an andere.",backup_import:"Importieren \u2026",backup_import_confirm:"Den ganzen Grundriss durch die Datei ersetzen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_import_error:"Die Datei ist kein Floorplan-3D-Plan ({error}).",backup_imported:"Importiert.",backup_hint:"Hintergrundbilder sind nicht in der Datei enthalten.",backup_full:"Komplett-Backup",backup_full_export:"Alles sichern (Plan, Bilder, Packs)",backup_full_import:"Komplett-Backup wiederherstellen \u2026",backup_full_hint:"Eine Datei mit dem Plan, allen Hintergrund- und Bildschirmbildern und den installierten Packs. Beim Wiederherstellen wird jedes Pack erneut gepr\xFCft; der Lizenzschl\xFCssel ist nicht enthalten.",backup_full_confirm:"Plan, Bilder und Packs durch das Backup ersetzen? Der aktuelle Stand bleibt als Wiederherstellungspunkt erhalten.",backup_full_not_backup:"Das ist kein Komplett-Backup von NeonPlan 3D.",backup_full_restored:"Backup wiederhergestellt: {packs} Packs, {pictures} Bilder.",backup_full_skipped:"\xDCbersprungen (nicht pr\xFCfbar oder f\xFCr eine andere Installation): {packs}.",export_name_full:"komplett",device_confirm:"Vor dem Schalten nachfragen",device_confirm_hint:"Beim Antippen in 3D, im Schnellmen\xFC und im Raumfenster erscheint erst eine R\xFCckfrage. Doppeltipp auf den Raum l\xE4sst dieses Ger\xE4t aus.",confirm_switch:"{name} wirklich schalten?",split_handle_hint:"Ziehen: Breite von Plan und 3D-Ansicht",wall_exterior:"Au\xDFenwand (m)",wall_interior:"Innenwand (m)",grid:"Raster (m)",background:"Vorlage (Grundriss-Bild)",background_upload:"Bild w\xE4hlen \u2026",background_width:"Breite im Plan (m)",background_opacity:"Deckkraft",background_remove:"Vorlage entfernen",hint_select:"Raum antippen zum Ausw\xE4hlen \xB7 Ecken ziehen \xB7 \u201E+\u201C auf einer Kante f\xFCgt einen Punkt ein \xB7 Entf l\xF6scht \xB7 Strg+Z",hint_rect:"Ziehen, um ein Rechteck zu zeichnen",hint_polygon:"Punkte setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",hint_empty:"Lege zuerst eine Etage an.",area_m2:"{a} m\xB2",overlap_warning:"R\xE4ume \xFCberlappen sich \u2013 die W\xE4nde dort sind unvollst\xE4ndig.",read_only:"Nur Administratoren k\xF6nnen den Grundriss bearbeiten.",mat_wood:"Holz",mat_oak:"Eiche",mat_tiles:"Fliesen",mat_carpet:"Teppich",mat_stone:"Stein",mat_concrete:"Beton",card_name:"NeonPlan 3D",card_description:"Deine Wohnung in 3D (Neon).",stats:"{calls} Draw-Calls \xB7 {tris} Dreiecke",stats_fps:"{fps} B/s (langsamstes Bild {ms} ms)",stats_idle:"Ruhe (0 B/s)",stats_busy_camera:"Kamera",stats_busy_floors:"Etagen",stats_busy_openings:"T\xFCren/Fenster",stats_busy_flash:"Blitz",stats_busy_roof:"Dach",stats_busy_flow:"Stromfluss",stats_busy_effect:"Farbeffekt",stats_busy_robot:"Roboter",stats_busy_orbit:"Kamerafahrt",stats_busy_tint:"Raumfarbe",stats_low:"Stufe Tablet, Pixeldichte {r}",stats_full:"volle Stufe, Pixeldichte {r}",floors_apart:"Auseinander",floors_stacked:"Gestapelt",floor_rooms_one:"1 Raum",floor_rooms:"{n} R\xE4ume",quality:"Qualit\xE4t",quality_auto:"Auto",quality_low:"Tablet",quality_high:"Hoch",state_on:"An",state_off:"Aus",state_open:"Offen",state_closed:"Zu",state_opening:"\xD6ffnet",state_closing:"Schlie\xDFt",state_playing:"Spielt",state_paused:"Pause",state_idle:"Bereit",state_locked:"Verriegelt",state_unlocked:"Entriegelt",state_detected:"Erkannt",state_clear:"Frei",state_unavailable:"Nicht verf\xFCgbar",state_heat:"Heizen",state_cool:"K\xFChlen",state_auto:"Automatik",state_heat_cool:"Heizen/K\xFChlen",state_dry:"Entfeuchten",state_fan_only:"L\xFCften",devices:"Ger\xE4te",devices_none_area:"Verkn\xFCpfe den Raum mit einem Bereich, dann erscheinen dessen Ger\xE4te hier.",devices_none:"Im Bereich gibt es keine passenden Ger\xE4te.",devices_place_all:"Alle automatisch platzieren",devices_place:"Platzieren",devices_remove:"Entfernen",devices_hint:"Platzierte Ger\xE4te erscheinen in 3D. Im Plan lassen sie sich verschieben.",panel_lights:"Licht",panel_covers:"Rolll\xE4den",panel_climate:"Heizung",panel_media:"Medien",panel_switches:"Schalter",panel_sensors:"Sensoren",panel_scenes:"Szenen & Skripte",panel_cameras:"Kameras",camera_live:"Livebild \xF6ffnen",through_camera:"Durch die Kamera schauen",through_blend:"\xDCberblendung",through_back:"Zur\xFCck zur Ansicht",camera_mount:"Montage",camera_mount_wall:"Wand (Blickrichtung = Drehung)",camera_mount_ceiling:"Decke (Dome, rundum)",camera_fov:"Sichtwinkel (\xB0)",camera_reach:"Reichweite (m)",camera_fov_short:"Winkel \xB0",camera_reach_short:"Reichweite m",camera_tilt:"Neigung nach unten (\xB0)",camera_tilt_short:"Neigung \xB0",camera_aim_hint:"Im Plan zeigt der Kegel, wohin die Kamera schaut. Der Griff an seiner Spitze dreht die Kamera und setzt die Reichweite.",state_recording:"Nimmt auf",state_streaming:"Streamt",panel_all_off:"Alle aus",panel_no_area:"Dieser Raum ist mit keinem Bereich verkn\xFCpft. Im Editor kannst du ihn verkn\xFCpfen.",panel_empty:"F\xFCr diesen Raum sind keine Ger\xE4te im Grundriss. Im Editor lassen sich Ger\xE4te platzieren oder mit \u2606 f\xFCrs Raumfenster ausw\xE4hlen.",close:"Schlie\xDFen",brightness:"Helligkeit",color_temp:"Farbtemperatur",color:"Farbe",position:"Position",cover_open:"Auf",cover_stop:"Stopp",cover_close:"Zu",target_temp:"Soll",current_temp:"Ist",temp_down:"K\xE4lter",temp_up:"W\xE4rmer",volume:"Lautst\xE4rke",play_pause:"Wiedergabe/Pause",previous:"Zur\xFCck",next:"Weiter",run:"Ausf\xFChren",details:"Details",hold_hint:"Antippen schaltet \xB7 lange dr\xFCcken \xF6ffnet Details",tool_opening:"T\xFCr & Fenster",tool_furniture:"M\xF6bel",qm_off:"Aus",find:"Suchen",find_placeholder:"Wo ist \u2026? Ger\xE4t oder Raum",find_none:"Nichts gefunden",swipe_off:"Aus",panel_pin:"Im Raumfenster zeigen",panel_unpin:"Nicht im Raumfenster zeigen",devices_panel_hint:"Das Raumfenster zeigt die Ger\xE4te im Grundriss. \u2606 nimmt ein Ger\xE4t zus\xE4tzlich ins Raumfenster auf, ohne es zu platzieren.",card_section_view:"Ansicht",card_size:"Gr\xF6\xDFe",card_size_fixed:"Feste H\xF6he",card_size_fill:"Bildschirm f\xFCllen",card_fill_hint:"Am besten in einer Dashboard-Ansicht vom Typ \u201EPanel (1 Karte)\u201C \u2013 dann nimmt die Karte den ganzen Platz ein.",card_controls:"Schalter in der Karte",card_floor_thumbs:"Etagen als Mini-Ansichten",card_floor_thumbs_hint:"Kleine Bilder der Etagen am Rand \u2013 antippen wechselt die Etage",card_floor_thumbs_hint_start:"Die gew\xE4hlte Etage ist dann die Start-Etage \u2013 mit den Bildern am Rand wechselt man zu den anderen",card_room_names:"Raumnamen anzeigen",card_section_kiosk:"Wandtablet (Kiosk)",card_idle_return:"Zur\xFCck zur Startansicht nach",card_idle_off:"Nie",card_idle_min:"{n} min ohne Bedienung",card_idle_hint:"Nach der Wartezeit schlie\xDFt die Karte den Raum und zeigt wieder die Startansicht.",card_night:"Nachtdimmung",card_night_off:"Aus",card_night_sun:"Nach Sonnenstand",card_night_time:"Zeitraum",card_night_range:"Zeitraum (z. B. 22:00-06:00)",card_idle_orbit:"Kamerafahrt als Bildschirmschoner",card_idle_orbit_hint:"Nach der R\xFCckkehr dreht sich die Ansicht langsam, bis jemand das Tablet ber\xFChrt",card_alerts:"Warnungen anzeigen",card_alerts_hint:"Rauch, Gas, CO, Wasser, Alarmanlage und offene Fenster bei Regen: der Raum pulsiert, oben erscheint ein Hinweis",card_alert_jump:"Bei neuer Warnung zum Raum springen",card_alert_jump_hint:"Die Ansicht wechselt selbst zur Etage und zum Raum der Warnung",card_scenes:"Szenen-Kn\xF6pfe im Raum",card_scenes_hint:"Szenen und Skripte des Bereichs als Kn\xF6pfe unter der 3D-Ansicht, wenn ein Raum gew\xE4hlt ist",card_motion_trail:"Bewegungsspur",card_motion_trail_hint:"Wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit (Bewegungs-, Pr\xE4senz- und Kamerasensoren)",trail_short:"Spur",weather_short:"Wetter",weather_entity:"Wetter-Entit\xE4t",weather_effects:"Wetter-Effekte in 3D",weather_effect_rain:"Regen",weather_effect_snow:"Schnee",weather_effect_fog:"Nebel (graut die Szene ein)",weather_effect_clouds:"Wolken dunkeln Himmel und Sonne ab",weather_effect_lightning:"Blitze bei Gewitter",weather_effect_sky:"Sonne und Mond am Himmel",weather_entity_hint:"Die Wetter-Entit\xE4t liefert Regen, Schnee, Nebel und Wolken f\xFCr die 3D-Ansicht; \u201Eautomatisch\u201C nimmt die erste.",weather_hint:"Wetter drau\xDFen: Regen, Schnee, Nebel und Wolken aus der Wetter-Entit\xE4t, Sonne und Mond nach sun.sun",card_weather:"Wetter drau\xDFen",card_weather_hint:"Regen, Schnee, Nebel und Wolken aus der ersten Wetter-Entit\xE4t (weather_entity w\xE4hlt eine andere); auf Stufe Tablet nur die Bew\xF6lkung",trail_hint:"Bewegungsspur: wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit",alerts:"Warnungen",alert_smoke:"Rauch: {name}",alert_gas:"Gas: {name}",alert_co:"Kohlenmonoxid: {name}",alert_water:"Wasser: {name}",alert_alarm:"Alarm ausgel\xF6st",alert_alarm_pending:"Alarm wird ausgel\xF6st",alert_window_rain:"Fenster offen bei Regen: {name}",room_names_short:"Raumnamen",floor_stack_short_dim:"Abgedunkelt",floor_stack_short_stacked:"Gestapelt",floor_stack_short_single:"Einzeln",size_short_w:"B",size_short_d:"T",size_short_h:"H",import_error_not_json:"Die Datei ist kein JSON.",import_error_not_plan:"Die Datei ist kein Floorplan-3D-Plan.",export_name_template:"vorlage",export_name_backup:"sicherung",card_floor_stack:"Etagen darunter",floor_stack_dim:"Abgedunkelt",floor_stack_stacked:"Gestapelt (ganzes Haus bis hier)",floor_stack_single:"Ausgeblendet (nur diese Etage)",card_control_walls:"W\xE4nde hoch/Schnitt",card_control_floors:"Etagen auseinander",card_control_temperature:"Temperatur",card_control_humidity:"Feuchte",card_control_co2:"CO\u2082",card_controls_hint:"W\xE4nde hoch/Schnitt, Etagen auseinander und Temperatur, Feuchte, CO\u2082 zum Umschalten",card_fullscreen_button:"Vollbild-Taste",card_fullscreen_button_hint:"Blendet das Dashboard drumherum aus (z. B. am Wandtablet)",fullscreen:"Vollbild",fullscreen_exit:"Vollbild beenden",card_section_show:"Anzeigen",card_floor:"Etage",card_floor_house:"Ganzes Haus (Etage antippen zum \xD6ffnen)",card_height:"H\xF6he (Pixel)",card_walls:"W\xE4nde",card_quality_hint:"\u201ETablet\u201C ist die sparsamste Stufe \u2013 ideal f\xFCr Fire-Tablets und andere Wandtablets.",card_flows_switch:"Schalter in der Karte",card_flows_on:"Immer an",card_flows_off:"Immer aus",card_energy:"Energiewerte oben anzeigen",card_room_panel:"Raum-Details beim Antippen",card_room_panel_hint:"Lichter, Rolll\xE4den und Kameras des Raums in einem Seitenfenster",card_explode:"Etagen in der Hausansicht auseinanderziehen",card_stats:"Leistungsanzeige (Bilder pro Sekunde)",card_stats_hint:"Zum Pr\xFCfen, wie fl\xFCssig die Karte auf dem Ger\xE4t l\xE4uft",packs:"M\xF6bel-Packs",packs_hint:"Nur unterschriebene Packs des Herausgebers lassen sich importieren.",lib_badge_light:"Leuchte: l\xE4sst sich mit einem Licht verkn\xFCpfen und in 3D schalten",lib_badge_electric:"Elektrisch: l\xE4sst sich mit Entit\xE4t und Leistungssensor verkn\xFCpfen (schalten, Bild, Verbrauch)",lib_badge_hint:"M\xF6bel mit Symbol lassen sich mit Entit\xE4ten verkn\xFCpfen: Leuchten schalten, Bildschirme zeigen Bilder, Ger\xE4te ihren Verbrauch.",pack_error_wrong_instance:"Dieses Pack ist f\xFCr eine andere Home-Assistant-Installation signiert. Im Shop-Konto l\xE4sst es sich f\xFCr diese Installation neu laden.",license_title:"Shop-Verbindung",license_instance:"Installations-Kennung",license_copy:"Kopieren",license_copied:"Kennung kopiert",license_activate:"Aktivieren",license_activated:"Verbunden \u2013 die gekauften Packs stehen unten.",license_active:"Verbunden als {name} (Schl\xFCssel {key})",license_checked:"zuletzt gepr\xFCft {time}",license_refresh:"Jetzt pr\xFCfen",license_refreshed:"Gepr\xFCft.",license_remove:"Trennen",license_remove_confirm:"Shop-Verbindung trennen? Installierte Packs bleiben, nur Updates kommen nicht mehr von selbst.",license_installed:"installiert \xB7 v{release}",license_update_available:"Update auf v{release} verf\xFCgbar",license_not_installed:"noch nicht installiert",license_install:"Installieren",license_update:"Aktualisieren",license_none:"Noch keine Packs im Konto.",license_hint:"Den Lizenzschl\xFCssel findest du in der Bestellung und im Kundenkonto auf mastershort.de. Einmal eingetragen, erscheinen gekaufte Packs hier, werden f\xFCr diese Installation signiert und bekommen Updates von selbst (einmal t\xE4glich gepr\xFCft). Alles Installierte funktioniert auch ohne Verbindung.",license_shop:"Mehr Packs im Shop",license_error_invalid_key:"Diesen Schl\xFCssel kennt der Shop nicht. Er sieht so aus: NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"Dieser Schl\xFCssel ist schon mit der erlaubten Zahl von Installationen verbunden.",license_error_shop_unreachable:"Der Shop ist gerade nicht erreichbar. Installierte Packs funktionieren weiter.",license_error_not_owned:"Dieses Pack geh\xF6rt nicht zu diesem Konto.",license_error_no_key:"Zuerst den Lizenzschl\xFCssel eintragen.",license_error_wrong_instance:"Der Shop hat das Pack f\xFCr eine andere Installation signiert.",license_error_other:"Das hat nicht geklappt: {detail}",pack_import:"M\xF6bel-Packs importieren \u2026",pack_imported:"\u201E{name}\u201C von {publisher} importiert \u2013 {n} M\xF6bel",packs_imported_n:"{n} von {total} Packs importiert",pack_by:"von {publisher} \xB7 {n} M\xF6bel",pack_licensed:"Lizenziert f\xFCr {name}",pack_remove:"Entfernen",pack_remove_confirm:"Pack \u201E{name}\u201C entfernen? M\xF6bel daraus bleiben als einfache K\xE4sten im Plan.",pack_missing_item:"M\xF6bel aus entferntem Pack",pack_error_bad_signature:"Das Pack wurde ver\xE4ndert oder seine Unterschrift ist ung\xFCltig.",pack_error_unknown_publisher:"Dieses Pack stammt nicht von einem bekannten Herausgeber.",pack_error_unsigned:"Das Pack ist nicht unterschrieben.",pack_error_not_a_pack:"Das ist keine M\xF6bel-Pack-Datei.",pack_error_invalid_content:"Das Pack enth\xE4lt ung\xFCltige M\xF6bel: {detail}",pack_error_too_large:"Die Datei ist zu gro\xDF.",pack_error_other:"Import fehlgeschlagen: {detail}",back_to_room:"Zur\xFCck zu {room}",back_to_floor:"Zur\xFCck zur Etage",hint_furniture:"Raum antippen, dann rechts ein M\xF6belst\xFCck w\xE4hlen \xB7 M\xF6bel ziehen, an den Ecken die Gr\xF6\xDFe \xE4ndern",furniture_into:"Neue M\xF6bel kommen in die Mitte von \u201E{room}\u201C.",furniture_pick_room:"Tipp: Erst einen Raum antippen \u2013 dann landen neue M\xF6bel in seiner Mitte.",flows:"Stromfluss",flows_hint:"Leuchtende Leitungen vom Z\xE4hler zu den Verbrauchern ein- oder ausblenden",flow_on:"an",flow_off:"aus",hint_opening:"Auf eine Wand tippen, um eine T\xFCr oder ein Fenster einzusetzen \u2013 die Art w\xE4hlst du danach rechts",preset_door:"T\xFCr",preset_door_double:"Doppelt\xFCr",preset_window:"Fenster",preset_window_double:"Fenster 2-fl\xFCgelig",preset_terrace:"Terrassent\xFCr",preset_terrace_double:"Terrassent\xFCr 2-fl\xFCgelig",preset_garage:"Garagentor",preset_front:"Haust\xFCr",opening_style:"Stil",style_auto:"Automatisch ({style})",style_interior:"Zimmert\xFCr",style_front:"Haust\xFCr",style_front_glass:"Haust\xFCr mit Glasausschnitt",style_sidelight:"Haust\xFCr mit Seitenteil",style_sidelights:"Haust\xFCr mit 2 Seitenteilen",style_glass:"Glast\xFCr",style_sliding:"Schiebet\xFCr",style_standard:"Standard",style_bars:"Mit Sprossen",flip_hinge:"Anschlag wechseln",flip_main_leaf:"Hauptfl\xFCgel wechseln",flip_hinge_hint:"Scharniere auf die andere Seite",flip_swing:"\xD6ffnungsrichtung umdrehen",flip_swing_hint:"Die T\xFCr schwenkt in den Raum oder zur anderen Seite",main_leaf:"Hauptfl\xFCgel (vom Raum aus)",contact_main:"Kontakt Hauptfl\xFCgel",contact_second:"Kontakt zweiter Fl\xFCgel",tool_outdoor:"Au\xDFen",tool_measure:"Nach Ma\xDF",hint_measure:"Startpunkt antippen, dann rechts die Wandl\xE4ngen mit Richtung eingeben",measure:"Raum nach Ma\xDF",measure_start:"Tippe im Plan auf den Startpunkt, z. B. eine Raumecke.",measure_from:"Start bei {x} / {z} m \u2013 antippen verschiebt den Start.",measure_length:"L\xE4nge der n\xE4chsten Wand (m)",measure_close:"Raum schlie\xDFen",measure_undo:"Letzte Wand weg",measure_gap:"L\xFCcke zum Start: {gap} m (wird beim Schlie\xDFen verbunden)",measure_hint:"Tipp: L\xE4nge eintippen und Pfeiltaste dr\xFCcken. Mit gemessenen Innenma\xDFen danach \u201EL\xFCcken schlie\xDFen\u201C.",rect_by_size:"Rechteck nach Ma\xDF",rect_add:"Rechteck anlegen",dir_up:"Nach oben",dir_down:"Nach unten",dir_left:"Nach links",dir_right:"Nach rechts",hint_outdoor:"Ziehen, um eine Au\xDFenfl\xE4che (Rasen, Terrasse, Pool \u2026) aufzuziehen",outdoor:"Au\xDFenfl\xE4che",outdoor_type:"Art",outdoor_hint:"Au\xDFenleuchten (Wegleuchte, Garten-Spot, Wandleuchte au\xDFen) beleuchten alle Au\xDFenfl\xE4chen und die Fassade.",out_lawn:"Rasen",out_terrace:"Terrasse",out_path:"Weg",out_driveway:"Einfahrt",out_pool:"Pool",out_bed:"Beet",out_hedge:"Hecke",out_fence:"Zaun",north:"Nordrichtung (\xB0 im Uhrzeigersinn von oben)",north_hint:"Die Nordrichtung braucht der Sonnenstand (Licht durch die Fenster).",roof:"Dach",roof_none:"Kein Dach",roof_flat:"Flachdach",roof_gable:"Satteldach",roof_pitch:"Dachneigung (\xB0)",roof_overhang:"Dach\xFCberstand (m)",device:"Ger\xE4t",lamp_mount:"Lampe",lamp_ceiling:"Deckenleuchte",lamp_floor:"Stehlampe",lamp_table:"Tischlampe",lamp_wall:"Wandleuchte",marker_height:"H\xF6he des Symbols (m)",height_auto:"H\xF6he automatisch",device_centre:"In Raummitte",lights_spread:"Deckenlampen gleichm\xE4\xDFig verteilen",devices_search:"Ger\xE4te suchen \u2026",devices_more:"+{n} weitere",devices_less:"weniger",panel_more:"Weitere Ger\xE4te des Bereichs ({n})",panel_less:"Weniger anzeigen",gaps_close:"L\xFCcken schlie\xDFen",gaps_hint:"R\xE4ume mit bis zu 60 cm Abstand an einer gemeinsamen Wand zusammenf\xFChren; der Abstand wird die Innenwandst\xE4rke.",gaps_none:"Keine L\xFCcken zwischen R\xE4umen gefunden.",gaps_closed:"{n} Stellen geschlossen.",gaps_closed_wall:"{n} Stellen geschlossen, Innenwand jetzt {t} m.",fps:"FPS",fps_title:"Leistungsanzeige (Bilder pro Sekunde)",hint_garage:"Auf eine Wand tippen, um ein Garagentor einzusetzen",opening_garage:"Garagentor",garage_hint:"Das Tor folgt einem Garagen-Cover (Position oder offen/zu) oder einem Garagentor-Kontakt aus dem Bereich des Raums.",door_hint:"Mit T\xFCrkontakt schwenkt das T\xFCrblatt auf, ohne Sensor steht es halb offen.",hint_door:"Auf eine Wand tippen, um eine T\xFCr einzusetzen",hint_window:"Auf eine Wand tippen, um ein Fenster einzusetzen",opening_door:"T\xFCr",opening_window:"Fenster",opening_type:"Art",opening_position:"Mitte ab Ecke (m)",sill:"Br\xFCstung (m)",opening_height:"H\xF6he (m)",hinge:"Anschlag (vom Raum aus)",hinge_left:"Links",hinge_right:"Rechts",cover_entity:"Rollladen",cover_position_entity:"Positions-Sensor (live)",cover_position_invert:"Sensor z\xE4hlt umgekehrt (0 = offen)",contact_entity:"Kontakt",sensor_kind:"Sensor-Art",sensor_kind_contact:"Fensterkontakt (offen/zu)",sensor_kind_handle:"Griff-Sensor (offen/gekippt/zu)",sensor_kind_contact_tilt:"Kontakt + Kipp-Sensor",handle_entity:"Griff-Sensor",handle_main:"Griff-Sensor Hauptfl\xFCgel",leaf_main:"Hauptfl\xFCgel",leaf_second:"Zweiter Fl\xFCgel",tilt_entity:"Kipp-Sensor",entity_auto:"Automatisch ({name})",entity_auto_none:"Automatisch (keiner gefunden)",entity_none:"Keiner",entity_search:"Tippen zum Suchen \u2026",opening_hint:"Sensor-Art: Fensterkontakt (meldet offen/zu), Griff-Sensor (meldet offen, gekippt und zu \u2013 z. B. Homematic-Fenstergriff) oder Kontakt + Kipp-Sensor (ein zweiter Sensor, der nur \u201Egekippt\u201C meldet). Automatisch nimmt Rolll\xE4den und Kontakte aus dem Bereich des Raums. Positions-Sensor: eine Entit\xE4t, die die Rollladen-Position auch w\xE4hrend der Fahrt meldet (z. B. Homematic \u201ELevel\u201C, 0\u2013100 % oder 0\u20131, offen = hoch) \u2013 dann f\xE4hrt der Rollladen in 3D live.",furniture:"M\xF6bel",furniture_add:"M\xF6bel hinzuf\xFCgen",furniture_search:"M\xF6bel suchen \u2026",furniture_type:"M\xF6belst\xFCck",rotation:"Drehung (\xB0)",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"H\xF6he (m)",furn_sofa:"Sofa",furn_armchair:"Sessel",furn_table:"Tisch",furn_chair:"Stuhl",furn_bed:"Bett",furn_nightstand:"Nachttisch",furn_wardrobe:"Schrank",furn_shelf:"Regal",furn_kitchen:"K\xFCchenzeile",furn_fridge:"K\xFChlschrank",furn_fridge_smart:"Smart-K\xFChlschrank (Side-by-Side)",furn_door_left:"T\xFCrsensor links (Gefrierseite)",furn_door_right:"T\xFCrsensor rechts (K\xFChlseite)",fridge_hint:"Meldet ein T\xFCrsensor \u201Eoffen\u201C, schwingt die T\xFCr in 3D auf. Der Bildschirm auf der rechten T\xFCr zeigt Bilder nach Regeln wie ein Fernseher \u2013 solange die T\xFCr zu ist.",furn_stove:"Herd",furn_sink:"Sp\xFCle",furn_bathtub:"Badewanne",furn_shower:"Dusche",furn_wc:"WC",furn_washbasin:"Waschtisch",furn_desk:"Schreibtisch",furn_tv_board:"TV-Board",furn_plant:"Pflanze",furn_rug:"Teppich",furn_stairs:"Treppe",furn_stairwell:"Treppen\xF6ffnung",stairwell_hint:"Schneidet ein Loch in den Boden dieser Etage, zum Beispiel \xFCber dem Treppenaufgang; von oben sieht man hindurch. Die \xD6ffnung muss ganz in einem Raum liegen. Eine Treppe auf der Etage darunter, die bis hier hinauf reicht, \xF6ffnet den Boden auch von selbst.",furn_parking:"Stellplatz",furn_group_vehicles:"Stellpl\xE4tze",parking_entity:"Sensor \u201EAuto anwesend\u201C",parking_vehicle:"Fahrzeug",parking_vehicle_none:"Keins",parking_no_pack:"Kein Fahrzeug-Pack importiert \u2013 Fahrzeuge kommen aus dem Pack \u201EFahrzeuge\u201C (M\xF6bel \u2192 M\xF6bel-Pack importieren).",parking_scale:"Gr\xF6\xDFe (%)",parking_type_entity:"Fahrzeugtyp-Sensor (optional)",parking_types:"Zustand \u2192 Fahrzeug",parking_type_state:"Zustand (z. B. van)",parking_add_type:"+ Zuordnung",parking_hint:"Ohne Sensor steht das Fahrzeug immer da. Mit Sensor erscheint es, sobald der Sensor \u201Ean\u201C, \u201Ehome\u201C oder \u201Eanwesend\u201C meldet. Ein Fahrzeugtyp-Sensor (z. B. aus einer KI-Kameraauswertung) w\xE4hlt das Modell: Passt sein Zustand zu einer Zuordnung \u2013 auch als Wort im Text \u2013, wird dieses Fahrzeug gezeigt, sonst das Standard-Fahrzeug.",parking_too_tall:"Das Fahrzeug ({car} m) ist h\xF6her als der Raum ({room} m).",furn_lamp_ceiling:"Deckenleuchte",furn_lamp_downlight:"Einbauspot",furn_lamp_spot:"Aufbau-Spot",furn_lamp_panel:"LED-Panel",furn_lamp_uplight:"Deckenfluter",furn_lamp_bollard:"Wegleuchte",furn_lamp_garden:"Garten-Spot",furn_radiator:"Heizk\xF6rper",furn_robot_vacuum:"Saugroboter",furn_entity_vacuum:"Saugroboter",robot_hint:"Saugt der Roboter in Home Assistant, f\xE4hrt er in 3D in Bahnen durch den Raum seiner Station (die Fahrspur ist simuliert \u2013 Home Assistant kennt meist nicht die echte Position). Zur\xFCck f\xE4hrt er zur Station.",furn_lamp_pendant:"Pendelleuchte",furn_lamp_floor:"Stehlampe",furn_lamp_table:"Tischlampe",furn_lamp_wall:"Wandleuchte",furn_led_strip:"LED-Streifen",furn_group_lights:"Leuchten",furn_entity_light:"Licht oder Schalter",furn_entity_climate:"Heizung (Thermostat)",lamp_hint:"Antippen in 3D schaltet die Leuchte, lange dr\xFCcken \xF6ffnet das Schnellmen\xFC. Auch Schalter (z. B. ein Relais f\xFCrs Deckenlicht) sind m\xF6glich \u2013 die Leuchte strahlt dann, solange er an ist. Tischlampen stehen automatisch auf dem M\xF6bel darunter.",lamp_hint_pendant:"H\xF6he = Abh\xE4ngung unter der Decke. Antippen in 3D schaltet, lange dr\xFCcken \xF6ffnet die Details.",theme:"Look",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Tag",furnish:"Einrichten",split_3d:"3D daneben",mount_height:"H\xF6he \xFCber Boden (m)",side_open:"Seitenleiste \xF6ffnen",side_close:"Schlie\xDFen",side_details:"Details zur Auswahl",side_pin:"Anheften",side_pinned:"Angeheftet",side_pin_hint:"Angeheftet bleibt die Seitenleiste immer offen; sonst klappt sie neben der 3D-Ansicht zu, solange nichts ausgew\xE4hlt ist",split_3d_hint:"Live-3D neben dem Plan: M\xF6bel und Ger\xE4te dort ziehen und drehen \u2013 mit R\xFCckg\xE4ngig, gespeichert wird mit dem Plan",size_w:"Breite (m)",size_d:"Tiefe (m)",size_h:"H\xF6he (m)",furnish_hint:"M\xF6bel, Leuchten und Ger\xE4te mit dem Finger ziehen \xB7 M\xF6bel rasten an W\xE4nden ein \xB7 antippen zum Drehen, f\xFCr H\xF6he und Montage",done:"Fertig",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Feuchte",heat_short_co2:"CO\u2082",heat_temperature:"Temperatur",heat_humidity:"Luftfeuchtigkeit",heat_co2:"CO\u2082",heat_none_found:"Keine passenden Sensoren in den Bereichen der R\xE4ume.",markers:"Symbole",markers_none:"Keine",markers_important:"Wichtige",markers_all:"Alle",furn_stool:"Hocker",furn_coffee_table:"Couchtisch",furn_tv_wall:"Fernseher (Wand)",furn_sideboard:"Sideboard",furn_table_round:"Runder Tisch",furn_bench:"Sitzbank",furn_corner_bench:"Eckbank",furn_bar_stool:"Barhocker",furn_kitchen_wall:"Oberschrank",furn_kitchen_tall:"Hochschrank mit Backofen",furn_island:"Kochinsel",furn_dishwasher:"Sp\xFClmaschine",furn_bunk_bed:"Etagenbett",furn_dresser:"Kommode",furn_washer:"Waschmaschine",furn_dryer:"Trockner",furn_office_chair:"B\xFCrostuhl",furn_tall_cabinet:"Hochschrank",furn_coat_rack:"Garderobe",furn_group_living:"Wohnen",furn_group_dining:"Essen",furn_group_kitchen:"K\xFCche",furn_group_sleeping:"Schlafen",furn_group_bath:"Bad & Hauswirtschaft",furn_group_work:"Arbeiten & Sonstiges",furn_entity:"Ger\xE4t (Schalter, Steckdose \u2026)",furn_entity_tv:"Fernseher (Media-Player)",furn_power:"Leistungssensor (W)",furn_links_hint:"Mit Leistungssensor zeigt das M\xF6bel seine Watt und bekommt eine Energie-Leitung.",screen_pictures:"Bilder nach Zustand",screen_pictures_hint:"Verglichen wird der Zustand oder ein Attribut der Entit\xE4t (z. B. app_name eines Fernsehers). Der Wert passt, wenn er gleich ist oder im Text vorkommt (\u201Eyoutube\u201C passt zu \u201Ecom.google.android.youtube.tv\u201C); \u201E*\u201C = immer. Die erste passende Regel gewinnt. Bilder werden auf 512 px verkleinert gespeichert; alternativ eine Bild-URL oder eine Kamera \u2013 deren Livebild wird alle 5 Sekunden erneuert, solange es gezeigt wird. Ohne passende Regel zeigt der Bildschirm den Media Player.",picture_state:"ist oder enth\xE4lt \u2026 (z. B. netflix)",picture_state_of:"Zustand",picture_attribute:"Zustand oder Attribut vergleichen",picture_pick:"Bild w\xE4hlen \u2026",picture_change:"Bild \xE4ndern \u2026",picture_url:"oder Bild-URL",picture_add_value:"+ Wert",picture_reuse:"Vorhandenes Bild verwenden",picture_camera:"oder Kamera (Livebild) \u2026",picture_camera_none:"Keine Kamera",screen_bg:"Bildschirm hinter dem Bild",screen_bg_black:"Dunkel",screen_bg_white:"Wei\xDF",picture_add_entity:"+ Weitere Entit\xE4t",picture_current:"aktuell: {value}",picture_matches:"\u2713 passt gerade \u2013 dieses Bild wird gezeigt",furn_links_hint_tv:"Der Bildschirm leuchtet, solange der Fernseher an ist, in der Farbe der App (Netflix, YouTube \u2026); das Schild zeigt App oder Titel.",stairs_hint:"Die Treppe steigt nach hinten an (weg von der markierten Vorderkante) und \xF6ffnet die Decke der Etage dar\xFCber.",floor_lights:"{n} Licht an",floor_open:"{n} offen",floor_persons:"{n} Pers.",energy_consumption:"Verbrauch",energy_grid_import:"Netzbezug",energy_grid_export:"Einspeisung",energy_solar:"Solar",energy_battery:"Akku",energy_tariff:"Tarif",energy:"Energie",energy_meter:"Z\xE4hlerplatz",energy_meter_set:"Z\xE4hlerplatz setzen",energy_meter_remove:"Z\xE4hlerplatz entfernen",energy_meter_hint:"Tippe im Plan auf die Stelle des Z\xE4hlers bzw. Hausanschlusses.",energy_grid:"Netz (W, + = Bezug)",energy_solar_sensor:"Solar-Erzeugung (W)",energy_battery_sensor:"Akku-Leistung (W, + = Entladen)",energy_battery_soc:"Akku-Ladestand (%)",energy_tariff_sensor:"Tarif (z. B. \u20AC/kWh)",energy_invert:"Vorzeichen umkehren",energy_hint:"Verbraucher sind platzierte Ger\xE4te mit Leistungssensor (W) \u2013 der Sensor selbst oder einer vom selben Ger\xE4t.",tool_meter:"Z\xE4hler",hint_meter:"Auf die Stelle des Z\xE4hlers tippen",presence:"Anwesenheit",presence_hint:"Raumsensor je Person (z. B. ESPresense, Bermuda): sein Zustand nennt den Raum oder Bereich.",presence_sensor:"Raumsensor",no_persons:"In Home Assistant gibt es keine Personen."},as={view:"3D",editor:"Editor",all_floors:"All floors",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",save_failed_detail:"Saving failed: {error}. Your changes are kept in this browser.",needs_restart:"A new version of NeonPlan 3D is installed, but Home Assistant still runs {version}. Please restart Home Assistant \u2013 until then saving may fail.",needs_restart_old:"A new version of NeonPlan 3D is installed, but Home Assistant still runs an older one. Please restart Home Assistant \u2013 until then saving fails.",draft_found:"Unsaved changes from {time} found.",draft_restore:"Restore and save",draft_discard:"Discard",walls_auto:"Tall walls",walls_cut:"Cut",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",add_floor:"Add floor",floor_from_ha:"Floors from Home Assistant:",floor_empty:"Empty floor",level:"Level {n}",ha_floor:"Floor in Home Assistant",no_ha_floor:"\u2013 none \u2013",area_rooms:"Add {n} rooms from HA areas",area_rooms_hint:"Adds a room (4 \xD7 3 m) for each area of this floor \u2013 then drag it into place and adjust the corners",floor_name:"Name",elevation:"Elevation (m)",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",default_floor:"Ground floor",new_floor:"Floor {n}",tool_select:"Select",tool_rect:"Rectangle",tool_polygon:"Free shape",undo:"Undo",redo:"Redo",fit:"Show all",room:"Room",rooms:"Rooms",room_name:"Name",area:"Area",no_area:"No area",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",delete_point:"Delete corner",duplicate:"Duplicate",delete:"Delete",new_room:"Room {n}",settings:"Settings",pendant_shape:"Shape",pendant_shade:"Shade",pendant_globe:"Globe",pendant_cone:"Cone",pendant_drum:"Drum",pkg_open:"Furnish \u2026",pkg_hint:"Furniture goes against the room's walls; lamps link to the area's lights. Adjust single items afterwards \u2013 Ctrl+Z takes it all back.",pkg_done:"{n} items placed \u2013 Ctrl+Z takes it back.",pkg_kitchen_row:"Kitchen row",pkg_kitchen_row_desc:"Row on the back wall with fridge, oven, sink, dishwasher and stove, wall cabinet, dining table with pendant",pkg_kitchen_l:"L-shaped kitchen",pkg_kitchen_l_desc:"Rows at the back and left, kitchen island with bar stools",pkg_bath:"Bathroom",pkg_bath_desc:"Washbasin, WC, bathtub, washing machine, downlight",pkg_bedroom:"Bedroom",pkg_bedroom_desc:"Double bed with two nightstands, wardrobe, chest of drawers, ceiling light",pkg_living:"Living room",pkg_living_desc:"TV board, sofa, coffee table, rug, armchair, shelf, floor lamp, plant",pkg_dining:"Dining room",pkg_dining_desc:"Table with four chairs, sideboard, pendant",pkg_office:"Office",pkg_office_desc:"Desk with office chair, two shelves, ceiling light",pkg_kids:"Kids' room",pkg_kids_desc:"Single bed, desk, shelf, rug",pkg_hall:"Hall",pkg_hall_desc:"Coat rack, two downlights",spots_place:"Place spots",spots_type:"Lamp",spots_cols:"Columns (left\u2013right)",spots_rows:"Rows (front\u2013back)",spots_add:"Place {n} lamps",spots_placed:"{n} lamps placed.",spots_hint:"All lamps follow the chosen light (e.g. spots on one dimmer). Afterwards each can be moved and linked to another light like any furniture.",cancel:"Cancel",backup:"Backup",backup_history:"Restore points",backup_none:"None yet. While editing, a restore point is kept at most every 10 minutes.",backup_summary:"{rooms} rooms, {furniture} items",backup_restore:"Restore",backup_restore_confirm:"Restore the state of {time}? The current state is kept as a restore point.",backup_restored:"Restored.",backup_file:"File",backup_export:"Export",backup_export_share:"Share as template",backup_export_share_hint:"Without areas, devices, sensors and images \u2013 for passing on to others.",backup_import:"Import \u2026",backup_import_confirm:"Replace the whole plan with the file? The current state is kept as a restore point.",backup_import_error:"The file is no NeonPlan 3D plan ({error}).",backup_imported:"Imported.",backup_hint:"Background images are not part of the file.",backup_full:"Full backup",backup_full_export:"Back up everything (plan, pictures, packs)",backup_full_import:"Restore a full backup \u2026",backup_full_hint:"One file with the plan, every background and screen picture and the installed packs. On restore every pack is checked again; the licence key is not included.",backup_full_confirm:"Replace the plan, the pictures and the packs with the backup? The current state stays as a restore point.",backup_full_not_backup:"This is not a full NeonPlan 3D backup.",backup_full_restored:"Backup restored: {packs} packs, {pictures} pictures.",backup_full_skipped:"Skipped (not verifiable or bound to another installation): {packs}.",export_name_full:"full",device_confirm:"Ask before switching",device_confirm_hint:"A tap in 3D, the quick menu and the room panel ask first. A double tap on the room leaves this device out.",confirm_switch:"Really switch {name}?",split_handle_hint:"Drag: width of the plan and the 3D view",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 Del deletes \xB7 Ctrl+Z",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_empty:"Add a floor first.",area_m2:"{a} m\xB2",overlap_warning:"Rooms overlap \u2013 walls there are incomplete.",read_only:"Only administrators can edit the floor plan.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"NeonPlan 3D",card_description:"Your home in 3D (neon).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} fps (slowest frame {ms} ms)",stats_idle:"At rest (0 fps)",stats_busy_camera:"camera",stats_busy_floors:"floors",stats_busy_openings:"doors/windows",stats_busy_flash:"flash",stats_busy_roof:"roof",stats_busy_flow:"power flow",stats_busy_effect:"colour effect",stats_busy_robot:"robot",stats_busy_orbit:"camera turn",stats_busy_tint:"room tint",stats_low:"tablet level, pixel ratio {r}",stats_full:"full level, pixel ratio {r}",floors_apart:"Apart",floors_stacked:"Stacked",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",devices_none_area:"Link the room to an area and its devices appear here.",devices_none:"The area has no suitable devices.",devices_place_all:"Place all automatically",devices_place:"Place",devices_remove:"Remove",devices_hint:"Placed devices appear in 3D. Drag them in the plan to move them.",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",panel_cameras:"Cameras",camera_live:"Open live view",through_camera:"Look through the camera",through_blend:"Blend",through_back:"Back to the view",camera_mount:"Mount",camera_mount_wall:"Wall (looks along its rotation)",camera_mount_ceiling:"Ceiling (dome, all round)",camera_fov:"Field of view (\xB0)",camera_reach:"Reach (m)",camera_fov_short:"Angle \xB0",camera_reach_short:"Reach m",camera_tilt:"Tilt down (\xB0)",camera_tilt_short:"Tilt \xB0",camera_aim_hint:"In the plan the wedge shows where the camera looks. The handle at its tip turns the camera and sets its reach.",state_recording:"Recording",state_streaming:"Streaming",panel_all_off:"All off",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"No devices of this room are in the plan. In the editor, place devices or pick them for the room panel with \u2606.",close:"Close",brightness:"Brightness",color_temp:"Colour temperature",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details",tool_opening:"Doors & windows",tool_furniture:"Furniture",qm_off:"Off",find:"Search",find_placeholder:"Where is \u2026? Device or room",find_none:"Nothing found",swipe_off:"Off",panel_pin:"Show in the room panel",panel_unpin:"Don't show in the room panel",devices_panel_hint:"The room panel shows the devices in the plan. \u2606 adds a device to the room panel without placing it.",card_section_view:"View",card_size:"Size",card_size_fixed:"Fixed height",card_size_fill:"Fill the screen",card_fill_hint:"Works best in a dashboard view of the type \u201CPanel (single card)\u201D \u2013 the card then takes all the space.",card_controls:"Switches in the card",card_floor_thumbs:"Floors as miniatures",card_floor_thumbs_hint:"Small pictures of the floors at the side \u2013 tap one to switch",card_floor_thumbs_hint_start:"The chosen floor is then where the card starts \u2013 the pictures at the side switch to the others",card_room_names:"Show room names",card_section_kiosk:"Wall tablet (kiosk)",card_idle_return:"Back to the start view after",card_idle_off:"Never",card_idle_min:"{n} min without a touch",card_idle_hint:"After the wait the card closes the room and shows the start view again.",card_night:"Night dimming",card_night_off:"Off",card_night_sun:"By the sun",card_night_time:"Time range",card_night_range:"Time range (e.g. 22:00-06:00)",card_idle_orbit:"Camera turn as screensaver",card_idle_orbit_hint:"After the return the view turns slowly until someone touches the tablet",card_alerts:"Show warnings",card_alerts_hint:"Smoke, gas, CO, water, alarm panel and windows open in the rain: the room pulses, a note appears at the top",card_alert_jump:"Jump to the room of a new warning",card_alert_jump_hint:"The view switches to the floor and room of the warning by itself",card_scenes:"Scene buttons in the room",card_scenes_hint:"Scenes and scripts of the area as buttons under the 3D view while a room is selected",card_motion_trail:"Motion trail",card_motion_trail_hint:"Where motion was reported in the last 30 minutes, with times (motion, presence and camera sensors)",trail_short:"Trail",weather_short:"Weather",weather_entity:"Weather entity",weather_effects:"Weather effects in 3D",weather_effect_rain:"Rain",weather_effect_snow:"Snow",weather_effect_fog:"Fog (greys the scene)",weather_effect_clouds:"Clouds dim the sky and the sun",weather_effect_lightning:"Lightning in storms",weather_effect_sky:"Sun and moon in the sky",weather_entity_hint:"The weather entity provides rain, snow, fog and clouds for the 3D view; automatic takes the first one.",weather_hint:"Weather outside: rain, snow, fog and clouds from the weather entity, sun and moon from sun.sun",card_weather:"Weather outside",card_weather_hint:"Rain, snow, fog and clouds from the first weather entity (weather_entity picks another); only the clouds on the tablet level",trail_hint:"Motion trail: where motion was reported in the last 30 minutes, with times",alerts:"Warnings",alert_smoke:"Smoke: {name}",alert_gas:"Gas: {name}",alert_co:"Carbon monoxide: {name}",alert_water:"Water: {name}",alert_alarm:"Alarm triggered",alert_alarm_pending:"Alarm pending",alert_window_rain:"Window open in the rain: {name}",room_names_short:"Room names",floor_stack_short_dim:"Dimmed",floor_stack_short_stacked:"Stacked",floor_stack_short_single:"Alone",size_short_w:"W",size_short_d:"D",size_short_h:"H",import_error_not_json:"The file is no JSON.",import_error_not_plan:"The file is no NeonPlan 3D plan.",export_name_template:"template",export_name_backup:"backup",card_floor_stack:"Floors below",floor_stack_dim:"Dimmed",floor_stack_stacked:"Stacked (the house up to here)",floor_stack_single:"Hidden (only this floor)",card_control_walls:"Tall walls/cut",card_control_floors:"Floors apart",card_control_temperature:"Temperature",card_control_humidity:"Humidity",card_control_co2:"CO\u2082",card_controls_hint:"Tall walls/cut, floors apart and temperature, humidity, CO\u2082 to switch",card_fullscreen_button:"Full screen button",card_fullscreen_button_hint:"Hides the dashboard around the card (e.g. on a wall tablet)",fullscreen:"Full screen",fullscreen_exit:"Exit full screen",card_section_show:"Show",card_floor:"Floor",card_floor_house:"Whole house (tap a floor to open it)",card_height:"Height (pixels)",card_walls:"Walls",card_quality_hint:"\u201CTablet\u201D is the lightest setting \u2013 ideal for Fire tablets and other wall tablets.",card_flows_switch:"Switch in the card",card_flows_on:"Always on",card_flows_off:"Always off",card_energy:"Show energy values at the top",card_room_panel:"Room details on tap",card_room_panel_hint:"The room's lights, blinds and cameras in a side panel",card_explode:"Pull floors apart in the house view",card_stats:"Performance display (frames per second)",card_stats_hint:"To check how smoothly the card runs on the device",packs:"Furniture packs",packs_hint:"Only packs signed by the publisher can be imported.",lib_badge_light:"Lamp: links to a light and switches in 3D",lib_badge_electric:"Electric: links to an entity and a power sensor (switching, pictures, consumption)",lib_badge_hint:"Items with a symbol link to entities: lamps switch, screens show pictures, appliances show their consumption.",pack_error_wrong_instance:"This pack is signed for another Home Assistant installation. The shop account can deliver it for this one.",license_title:"Shop connection",license_instance:"Installation id",license_copy:"Copy",license_copied:"Id copied",license_activate:"Activate",license_activated:"Connected \u2013 your packs are listed below.",license_active:"Connected as {name} (key {key})",license_checked:"last checked {time}",license_refresh:"Check now",license_refreshed:"Checked.",license_remove:"Disconnect",license_remove_confirm:"Disconnect from the shop? Installed packs stay, only updates stop coming by themselves.",license_installed:"installed \xB7 v{release}",license_update_available:"update to v{release} available",license_not_installed:"not installed yet",license_install:"Install",license_update:"Update",license_none:"No packs in the account yet.",license_hint:"The licence key is in your order and in your account at mastershort.de. Entered once, bought packs appear here, are signed for this installation and update by themselves (checked once a day). Everything installed keeps working without the connection.",license_shop:"More packs in the shop",license_error_invalid_key:"The shop does not know this key. It looks like NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"This key is already bound to the allowed number of installations.",license_error_shop_unreachable:"The shop cannot be reached right now. Installed packs keep working.",license_error_not_owned:"This pack is not in this account.",license_error_no_key:"Enter the licence key first.",license_error_wrong_instance:"The shop signed the pack for another installation.",license_error_other:"That did not work: {detail}",pack_import:"Import furniture packs \u2026",pack_imported:"Imported \u201C{name}\u201D by {publisher} \u2013 {n} items",packs_imported_n:"{n} of {total} packs imported",pack_by:"by {publisher} \xB7 {n} items",pack_licensed:"Licensed to {name}",pack_remove:"Remove",pack_remove_confirm:"Remove the pack \u201C{name}\u201D? Its furniture stays in the plan as plain boxes.",pack_missing_item:"Furniture of a removed pack",pack_error_bad_signature:"The pack was changed or its signature is invalid.",pack_error_unknown_publisher:"This pack is not from a known publisher.",pack_error_unsigned:"The pack is not signed.",pack_error_not_a_pack:"This is not a furniture pack file.",pack_error_invalid_content:"The pack contains invalid furniture: {detail}",pack_error_too_large:"The file is too large.",pack_error_other:"Import failed: {detail}",back_to_room:"Back to {room}",back_to_floor:"Back to the floor",hint_furniture:"Tap a room, then pick an item on the right \xB7 drag items, resize them by their corners",furniture_into:"New items go into the middle of \u201C{room}\u201D.",furniture_pick_room:"Tip: tap a room first \u2013 new items then land in its middle.",flows:"Power flow",flows_hint:"Show or hide glowing lines from the meter to the consumers",flow_on:"on",flow_off:"off",hint_opening:"Tap a wall to add a door or window \u2013 choose its kind on the right afterwards",preset_door:"Door",preset_door_double:"Double door",preset_window:"Window",preset_window_double:"Double window",preset_terrace:"Terrace door",preset_terrace_double:"French doors",preset_garage:"Garage door",preset_front:"Front door",opening_style:"Style",style_auto:"Automatic ({style})",style_interior:"Room door",style_front:"Front door",style_front_glass:"Front door with glass",style_sidelight:"Front door with sidelight",style_sidelights:"Front door with two sidelights",style_glass:"Glass door",style_sliding:"Sliding door",style_standard:"Standard",style_bars:"With glazing bars",flip_hinge:"Swap hinge side",flip_main_leaf:"Swap main leaf",flip_hinge_hint:"Hinges to the other side",flip_swing:"Reverse opening direction",flip_swing_hint:"The door swings into the room or to the other side",main_leaf:"Main leaf (seen from the room)",contact_main:"Contact main leaf",contact_second:"Contact second leaf",tool_outdoor:"Outdoor",tool_measure:"By measure",hint_measure:"Tap the starting point, then type the wall lengths with their direction on the right",measure:"Room by measure",measure_start:"Tap the starting point in the plan, e.g. a room corner.",measure_from:"Start at {x} / {z} m \u2013 tapping moves the start.",measure_length:"Length of the next wall (m)",measure_close:"Close room",measure_undo:"Remove last wall",measure_gap:"Gap to the start: {gap} m (joined when closing)",measure_hint:"Tip: type a length and press an arrow key. With measured inside dimensions, use \u201CClose gaps\u201D afterwards.",rect_by_size:"Rectangle by size",rect_add:"Add rectangle",dir_up:"Up",dir_down:"Down",dir_left:"Left",dir_right:"Right",hint_outdoor:"Drag to draw an outdoor area (lawn, terrace, pool \u2026)",outdoor:"Outdoor area",outdoor_type:"Type",outdoor_hint:"Outdoor lights (path light, garden spot, outdoor wall light) light all outdoor areas and the facade.",out_lawn:"Lawn",out_terrace:"Terrace",out_path:"Path",out_driveway:"Driveway",out_pool:"Pool",out_bed:"Flower bed",out_hedge:"Hedge",out_fence:"Fence",north:"North (\xB0 clockwise from up)",north_hint:"North is needed for the sun (light through the windows).",roof:"Roof",roof_none:"No roof",roof_flat:"Flat roof",roof_gable:"Gable roof",roof_pitch:"Roof pitch (\xB0)",roof_overhang:"Roof overhang (m)",device:"Device",lamp_mount:"Lamp",lamp_ceiling:"Ceiling light",lamp_floor:"Floor lamp",lamp_table:"Table lamp",lamp_wall:"Wall light",marker_height:"Marker height (m)",height_auto:"Automatic height",device_centre:"To room centre",lights_spread:"Spread ceiling lights evenly",devices_search:"Search devices \u2026",devices_more:"+{n} more",devices_less:"less",panel_more:"More devices of the area ({n})",panel_less:"Show less",gaps_close:"Close gaps",gaps_hint:"Join rooms up to 60 cm apart at one shared wall; the gap becomes the interior wall thickness.",gaps_none:"No gaps between rooms found.",gaps_closed:"{n} places closed.",gaps_closed_wall:"{n} places closed, interior wall now {t} m.",fps:"FPS",fps_title:"Performance display (frames per second)",hint_garage:"Tap a wall to add a garage door",opening_garage:"Garage door",garage_hint:"The door follows a garage cover (position or open/closed) or a garage door contact of the room's area.",door_hint:"With a door contact the leaf swings open; without a sensor it stands half open.",hint_door:"Tap a wall to add a door",hint_window:"Tap a wall to add a window",opening_door:"Door",opening_window:"Window",opening_type:"Type",opening_position:"Centre from corner (m)",sill:"Sill height (m)",opening_height:"Height (m)",hinge:"Hinge (seen from the room)",hinge_left:"Left",hinge_right:"Right",cover_entity:"Blind",cover_position_entity:"Position sensor (live)",cover_position_invert:"Sensor counts the other way round (0 = open)",contact_entity:"Contact",sensor_kind:"Sensor type",sensor_kind_contact:"Window contact (open/closed)",sensor_kind_handle:"Handle sensor (open/tilted/closed)",sensor_kind_contact_tilt:"Contact + tilt sensor",handle_entity:"Handle sensor",handle_main:"Handle sensor main leaf",leaf_main:"Main leaf",leaf_second:"Second leaf",tilt_entity:"Tilt sensor",entity_auto:"Automatic ({name})",entity_auto_none:"Automatic (none found)",entity_none:"None",entity_search:"Type to search \u2026",opening_hint:`Sensor type: window contact (reports open/closed), handle sensor (reports open, tilted and closed \u2013 e.g. a Homematic window handle) or contact + tilt sensor (a second sensor that only reports tilted). Automatic uses the blinds and contacts of the room's area. Position sensor: an entity reporting the blind's position while it moves (e.g. a Homematic "level", 0\u2013100 % or 0\u20131, open = high) \u2013 the blind then moves live in 3D.`,furniture:"Furniture",furniture_add:"Add furniture",furniture_search:"Search furniture \u2026",furniture_type:"Item",rotation:"Rotation (\xB0)",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Height (m)",furn_sofa:"Sofa",furn_armchair:"Armchair",furn_table:"Table",furn_chair:"Chair",furn_bed:"Bed",furn_nightstand:"Nightstand",furn_wardrobe:"Wardrobe",furn_shelf:"Shelf",furn_kitchen:"Kitchen unit",furn_fridge:"Fridge",furn_fridge_smart:"Smart fridge (side by side)",furn_door_left:"Door sensor left (freezer side)",furn_door_right:"Door sensor right (fridge side)",fridge_hint:"While a door sensor reports open, the door swings open in 3D. The screen on the right door shows pictures by rules like a TV \u2013 while that door is closed.",furn_stove:"Stove",furn_sink:"Sink",furn_bathtub:"Bathtub",furn_shower:"Shower",furn_wc:"WC",furn_washbasin:"Washbasin",furn_desk:"Desk",furn_tv_board:"TV board",furn_plant:"Plant",furn_rug:"Rug",furn_stairs:"Stairs",furn_stairwell:"Stairwell opening",stairwell_hint:"Cuts a hole into this floor, for example above the staircase; from above you look through it. The opening must lie within one room. Stairs on the floor below that reach up here open the floor by themselves as well.",furn_parking:"Parking spot",furn_group_vehicles:"Parking",parking_entity:'Sensor "car present"',parking_vehicle:"Vehicle",parking_vehicle_none:"None",parking_no_pack:'No vehicle pack imported \u2013 vehicles come from the "Vehicles" pack (Furniture \u2192 Import furniture pack).',parking_scale:"Size (%)",parking_type_entity:"Vehicle type sensor (optional)",parking_types:"State \u2192 vehicle",parking_type_state:"State (e.g. van)",parking_add_type:"+ Mapping",parking_hint:'Without a sensor the vehicle always stands there. With one it appears as soon as the sensor reports "on", "home" or "present". A vehicle type sensor (e.g. from an AI camera analysis) picks the model: when its state matches a mapping \u2013 also as a word in the text \u2013 that vehicle is shown, otherwise the default one.',parking_too_tall:"The vehicle ({car} m) is taller than the room ({room} m).",furn_lamp_ceiling:"Ceiling light",furn_lamp_downlight:"Downlight",furn_lamp_spot:"Surface spot",furn_lamp_panel:"LED panel",furn_lamp_uplight:"Floor uplight",furn_lamp_bollard:"Path light",furn_lamp_garden:"Garden spot",furn_radiator:"Radiator",furn_robot_vacuum:"Robot vacuum",furn_entity_vacuum:"Robot vacuum",robot_hint:"While the robot cleans in Home Assistant it drives lanes through the room of its dock in 3D (the track is simulated \u2013 Home Assistant usually does not know the real position). It drives back to the dock when it returns.",furn_lamp_pendant:"Pendant light",furn_lamp_floor:"Floor lamp",furn_lamp_table:"Table lamp",furn_lamp_wall:"Wall light",furn_led_strip:"LED strip",furn_group_lights:"Lights",furn_entity_light:"Light or switch",furn_entity_climate:"Heating (thermostat)",lamp_hint:"Tap the lamp in 3D to switch it, long press for the quick menu. Switches work too (e.g. a relay for the ceiling light) \u2013 the lamp shines while it is on. Table lamps stand on the furniture below them.",lamp_hint_pendant:"Height = drop below the ceiling. Tap in 3D to switch, long press for details.",theme:"Look",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Day",furnish:"Furnish",split_3d:"3D beside",mount_height:"Height above the floor (m)",side_open:"Open the sidebar",side_close:"Close",side_details:"Details of the selection",side_pin:"Pin",side_pinned:"Pinned",side_pin_hint:"Pinned, the sidebar stays open; otherwise it folds away beside the 3D view while nothing is selected",split_3d_hint:"Live 3D next to the plan: drag and turn furniture and devices there \u2013 with undo, saved with the plan",size_w:"Width (m)",size_d:"Depth (m)",size_h:"Height (m)",furnish_hint:"Drag furniture, lamps and devices \xB7 furniture snaps to walls \xB7 tap one to turn it, set its height and mount",done:"Done",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humidity",heat_short_co2:"CO\u2082",heat_temperature:"Temperature",heat_humidity:"Humidity",heat_co2:"CO\u2082",heat_none_found:"No matching sensors in the rooms' areas.",markers:"Markers",markers_none:"None",markers_important:"Important",markers_all:"All",furn_stool:"Stool",furn_coffee_table:"Coffee table",furn_tv_wall:"TV (wall)",furn_sideboard:"Sideboard",furn_table_round:"Round table",furn_bench:"Bench",furn_corner_bench:"Corner bench",furn_bar_stool:"Bar stool",furn_kitchen_wall:"Wall cabinet",furn_kitchen_tall:"Tall unit with oven",furn_island:"Kitchen island",furn_dishwasher:"Dishwasher",furn_bunk_bed:"Bunk bed",furn_dresser:"Chest of drawers",furn_washer:"Washing machine",furn_dryer:"Dryer",furn_office_chair:"Office chair",furn_tall_cabinet:"Tall cabinet",furn_coat_rack:"Coat rack",furn_group_living:"Living",furn_group_dining:"Dining",furn_group_kitchen:"Kitchen",furn_group_sleeping:"Sleeping",furn_group_bath:"Bath & laundry",furn_group_work:"Work & other",furn_entity:"Device (switch, plug \u2026)",furn_entity_tv:"TV (media player)",furn_power:"Power sensor (W)",furn_links_hint:"With a power sensor the item shows its watts and gets an energy cable.",screen_pictures:"Pictures by state",screen_pictures_hint:`The state or an attribute of the entity is compared (e.g. a TV's app_name). A value matches when it is equal or contained in the text ("youtube" matches "com.google.android.youtube.tv"); "*" = always. The first matching rule wins. Pictures are stored scaled to 512 px; a picture URL or a camera works too \u2013 a camera's live picture is refreshed every 5 seconds while shown. Without a matching rule the screen shows the media player.`,picture_state:"is or contains \u2026 (e.g. netflix)",picture_state_of:"State",picture_attribute:"Compare the state or an attribute",picture_pick:"Choose picture \u2026",picture_change:"Change picture \u2026",picture_url:"or picture URL",picture_add_value:"+ Value",picture_reuse:"Use a stored picture",picture_camera:"or a camera (live picture) \u2026",picture_camera_none:"No camera",screen_bg:"Screen behind the picture",screen_bg_black:"Dark",screen_bg_white:"White",picture_add_entity:"+ Another entity",picture_current:"now: {value}",picture_matches:"\u2713 matches now \u2013 this picture shows",furn_links_hint_tv:"The screen glows while the TV is on, in the colour of the app (Netflix, YouTube \u2026); the label shows the app or title.",stairs_hint:"The stair rises towards the back (away from the marked front edge) and opens the ceiling of the floor above.",floor_lights:"{n} lights on",floor_open:"{n} open",floor_persons:"{n} people",energy_consumption:"Consumption",energy_grid_import:"Grid import",energy_grid_export:"Export",energy_solar:"Solar",energy_battery:"Battery",energy_tariff:"Tariff",energy:"Energy",energy_meter:"Meter",energy_meter_set:"Place meter",energy_meter_remove:"Remove meter",energy_meter_hint:"Tap the spot of the meter or house connection in the plan.",energy_grid:"Grid (W, + = import)",energy_solar_sensor:"Solar production (W)",energy_battery_sensor:"Battery power (W, + = discharging)",energy_battery_soc:"Battery charge (%)",energy_tariff_sensor:"Tariff (e.g. \u20AC/kWh)",energy_invert:"Invert sign",energy_hint:"Consumers are placed devices with a power sensor (W) \u2013 the sensor itself or one of the same device.",tool_meter:"Meter",hint_meter:"Tap the spot of the meter",presence:"Presence",presence_hint:"Room sensor per person (e.g. ESPresense, Bermuda): its state names the room or area.",presence_sensor:"Room sensor",no_persons:"There are no people in Home Assistant."};function Ae(o,e,t={}){let i=((o?.language??navigator.language).startsWith("de")?ni:as)[e]??ni[e]??e;for(let[s,r]of Object.entries(t))i=i.replace(`{${s}}`,String(r));return i}function L(o,e,t=2){return e.toLocaleString(o?.language??void 0,{maximumFractionDigits:t})}var ls={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function Pe(o){return ls[o]}var Ve=J`
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
`,ii=J`
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
`;var Tt=40,Ft=class extends G{static properties={options:{attribute:!1},fixed:{attribute:!1},value:{attribute:!1},disabled:{type:Boolean},placeholder:{attribute:!1},_query:{state:!0},_open:{state:!0},_cursor:{state:!0}};blurTimer;constructor(){super(),this.options=[],this.fixed=[],this.value=null,this.disabled=!1,this.placeholder="",this._query="",this._open=!1,this._cursor=0}get current(){return[...this.fixed,...this.options].find(e=>e.id===this.value)}get hits(){let e=this._query.trim().toLowerCase(),t=e.split(/\s+/).filter(Boolean),n=r=>{let a=`${r.label} ${r.id}`.toLowerCase();return t.every(l=>a.includes(l))},i=this.fixed.filter(r=>!e||n(r)),s=e?this.options.filter(n):this.options;return[...i,...s.slice(0,Tt)]}choose(e){this.value=e,this._query="",this._open=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0,composed:!0}))}onKey(e){let t=this.hits;e.key==="ArrowDown"?(this._open=!0,this._cursor=Math.min(t.length-1,this._cursor+1),e.preventDefault()):e.key==="ArrowUp"?(this._cursor=Math.max(0,this._cursor-1),e.preventDefault()):e.key==="Enter"?(this._open&&t[this._cursor]&&this.choose(t[this._cursor].id),e.preventDefault()):e.key==="Escape"&&(this._open=!1,this._query="")}render(){let e=this.current,t=this._open?this.hits:[];return m`<div class="wrap">
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
                @mousedown=${s=>s.preventDefault()}
                @click=${()=>this.choose(n.id)}
              >
                <span>${n.label}</span>${n.id.includes(".")?m`<small>${n.id}</small>`:y}
              </li>`)}
            ${this._query&&this.options.length>Tt&&t.length>=Tt?m`<li class="empty">…</li>`:y}
          </ul>`:y}
    </div>`}static styles=[Ve,J`
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
    `]};customElements.get("fp3d-entity-picker")||customElements.define("fp3d-entity-picker",Ft);var cs=new URL(import.meta.url),ds=new URL("./neonplan3d-3d.js?v=2d05d353ce47",cs).href,si;function ri(){return si??=import(ds),si}function Re(o,e){if(!lt(e))return Ae(o,`furn_${e}`);let t=H(e);return t?ue(t,o?.language??navigator.language):Ae(o,"pack_missing_item")}var oi=new Set(["vertex","room","device","opening","furniture","rotate","resize","outdoor"]),ai=100,Ot=10,M=o=>Math.round(o*1e3)/1e3,Dt=class extends G{static properties={hass:{attribute:!1},building:{attribute:!1},narrow:{type:Boolean},packs:{attribute:!1},_packMsg:{state:!0},_license:{state:!0},_licenseKey:{state:!0},_licenseBusy:{state:!0},_licenseMsg:{state:!0},_preview:{state:!0},_doc:{state:!0},_doc3d:{state:!0},_split:{state:!0},_splitRatio:{state:!0},_backupBusy:{state:!0},_wall3d:{state:!0},_sidePinned:{state:!0},_sideOpen:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_vertex:{state:!0},_openingId:{state:!0},_furnitureId:{state:!0},_deviceId:{state:!0},_deviceQuery:{state:!0},_furnQuery:{state:!0},_libOpen:{state:!0},_expanded:{state:!0},_notice:{state:!0},_history:{state:!0},_spots:{state:!0},_outdoorId:{state:!0},_floorMenu:{state:!0},_openingPreset:{state:!0},_measureLen:{state:!0},_packages:{state:!0},_rectSize:{state:!0},_tool:{state:!0},_draft:{state:!0},_cursor:{state:!0},_guides:{state:!0},_view:{state:!0},_size:{state:!0},_images:{state:!0},_canUndo:{state:!0},_canRedo:{state:!0}};licenseLoading=!1;doc3dTimer;past=[];future=[];drag=null;pointers=new Map;pinch=null;fitted=!1;resizeObserver;loadingImages=new Set;constructor(){super(),this.narrow=!1,this._floorId=null,this._roomId=null,this._vertex=null,this._openingId=null,this._furnitureId=null,this._deviceId=null,this._deviceQuery="",this._furnQuery="",this._libOpen=new Set(["group:lights","group:living"]);try{let n=localStorage.getItem("neonplan3d.library");n&&(this._libOpen=new Set(JSON.parse(n)))}catch{}this._expanded=new Set,this._notice=null,this._history=null,this._spots=null,this._outdoorId=null,this._floorMenu=!1,this._openingPreset="door",this._packMsg=null,this._license=null,this._licenseKey="",this._licenseBusy=null,this._licenseMsg=null;let e=!1;try{e=localStorage.getItem("neonplan3d.editor3d")==="1"}catch{}this._split=e,this._splitRatio=.55;try{let n=Number(localStorage.getItem("neonplan3d.editorSplit"));n>=20&&n<=80&&(this._splitRatio=n/100)}catch{}this._backupBusy=!1,this._wall3d="cut",this._doc3d=this._doc,this._sideOpen=!1;let t=!0;try{t=localStorage.getItem("neonplan3d.sidePinned")!=="0"}catch{}this._sidePinned=t,this._preview=null,this._measureLen=3,this._packages=!1,this._rectSize=[4,3],this._tool="select",this._draft=[],this._cursor=null,this._guides={},this._view={scale:50,ox:40,oy:40},this._size={w:800,h:600},this._images={},this._canUndo=!1,this._canRedo=!1}t(e,t){return Ae(this.hass,e,t)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.resizeObserver?.disconnect()}willUpdate(e){e.has("packs")&&un(this.packs??[]),e.has("_doc")&&this._split&&this.queue3d(),e.has("_split")&&this._split&&(this._doc3d=this._doc),e.has("building")&&this.building!==this._doc&&(this._doc=this.building,this._doc3d=this.building,this._doc.floors.some(t=>t.id===this._floorId)||(this._floorId=this._doc.floors[0]?.id??null),this.floor?.rooms.some(t=>t.id===this._roomId)||(this._roomId=null))}firstUpdated(){let e=this.renderRoot.querySelector(".fp3d-canvas-wrap");this.resizeObserver=new ResizeObserver(()=>{this._size={w:e.clientWidth,h:e.clientHeight},!this.fitted&&this._size.w>0&&(this.fitted=!0,this.fit())}),this.resizeObserver.observe(e)}queue3d(){clearTimeout(this.doc3dTimer),this.doc3dTimer=setTimeout(()=>this._doc3d=this._doc,150)}onSplitDown(e){let t=e.currentTarget.parentElement,n=e.currentTarget;n.setPointerCapture(e.pointerId);let i=t.getBoundingClientRect(),s=a=>{this._splitRatio=Math.min(.8,Math.max(.2,(a.clientX-i.left)/i.width))},r=()=>{n.removeEventListener("pointermove",s),n.removeEventListener("pointerup",r),n.removeEventListener("pointercancel",r);try{localStorage.setItem("neonplan3d.editorSplit",String(Math.round(this._splitRatio*100)))}catch{}};n.addEventListener("pointermove",s),n.addEventListener("pointerup",r),n.addEventListener("pointercancel",r),e.preventDefault()}toggleSplit(){this._split=!this._split;try{localStorage.setItem("neonplan3d.editor3d",this._split?"1":"0")}catch{}}onFurnitureMoved3d(e){let{id:t,x:n,z:i}=e.detail,s=this._doc.settings.wall_interior;this.change(r=>{for(let a of r.floors){let l=a.furniture.find(_=>_.id===t);if(!l)continue;let[c,p]=At(a,l.x,l.z,n,i);Object.assign(l,{x:c,z:p});let u=Pt(a,l,s);u&&Object.assign(l,u)}})}onDeviceMoved3d(e){let{id:t,x:n,z:i}=e.detail;this.change(s=>{for(let r of s.floors){let a=r.placements.find(p=>p.entity_id===t);if(!a)continue;let[l,c]=At(r,a.x,a.z,n,i);Object.assign(a,{x:l,z:c})}})}render3dBar(){if(!this.isAdmin)return y;let e=this.furnitureItem,t=this.device;if(e){let n=ut(e),i=(s,r,a=.05)=>m`<label class="fp3d-3d-size" title=${this.t(`size_${s}`)}
        >${r}
        <input
          type="number"
          inputmode="decimal"
          step="0.05"
          min=${a}
          .value=${String(Math.round(e[s]*100)/100)}
          @change=${l=>{let c=parseFloat(l.target.value.replace(",","."));Number.isFinite(c)&&c>=a&&this.updateFurniture({[s]:Math.round(c*1e3)/1e3})}}
        />
      </label>`;return m`<div class="fp3d-3d-bar">
        <span>${Re(this.hass,e.type)}</span>
        ${i("w",this.t("size_short_w"))} ${i("d",this.t("size_short_d"))} ${i("h",this.t("size_short_h"))}
        ${n?m`<label class="fp3d-3d-size" title=${this.t("mount_height")}
              >↕
              <input
                type="number"
                inputmode="decimal"
                step="0.05"
                min="0"
                .value=${String(Math.round((e.mount_y??pt(this.floor,e))*100)/100)}
                @change=${s=>{let r=parseFloat(s.target.value.replace(",","."));Number.isFinite(r)&&r>=0&&this.updateFurniture({mount_y:Math.round(r*1e3)/1e3})}}
              />
            </label>`:y}
        <button class="fp3d-chip" @click=${()=>this.rotateFurniture(-45)}>↺ 45°</button>
        <button class="fp3d-chip" @click=${()=>this.rotateFurniture(45)}>↻ 45°</button>
        <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
      </div>`}if(t){let n=T(t.entity_id),i=n==="light",s=n?$t(n,this.floor?.height??2.5,i?t.mount??"ceiling":null):1;return m`<div class="fp3d-3d-bar">
        <span>${C(this.hass,t.entity_id)}</span>
        ${i?m`<select class="fp3d-3d-select" title=${this.t("lamp_mount")} @change=${r=>this.updateDevice({mount:r.target.value,y:null})}>
              ${["ceiling","floor","table","wall"].map(r=>m`<option value=${r} ?selected=${r===(t.mount??"ceiling")}>${this.t(`lamp_${r}`)}</option>`)}
            </select>`:y}
        <label class="fp3d-3d-size" title=${this.t("marker_height")}
          >${this.t("size_short_h")}
          <input
            type="number"
            inputmode="decimal"
            step="0.05"
            min="0"
            .value=${String(Math.round((t.y??s)*100)/100)}
            @change=${r=>{let a=parseFloat(r.target.value.replace(",","."));Number.isFinite(a)&&a>=0&&this.updateDevice({y:Math.round(a*1e3)/1e3})}}
          />
        </label>
        <button class="fp3d-chip" @click=${()=>this.updateDevice({rotation:(((t.rotation??0)-45)%360+360)%360})}>↺ 45°</button>
        <button class="fp3d-chip" @click=${()=>this.updateDevice({rotation:((t.rotation??0)+45)%360%360})}>↻ 45°</button>
        <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.removeDevice(t.entity_id)}>${this.t("delete")}</button>
      </div>`}return y}render3d(){return m`<div class="fp3d-editor-3d">
      <div class="fp3d-seg fp3d-3d-walls">
        <button aria-pressed=${this._wall3d==="auto"} @click=${()=>this._wall3d="auto"}>${this.t("walls_auto")}</button>
        <button aria-pressed=${this._wall3d==="cut"} @click=${()=>this._wall3d="cut"}>${this.t("walls_cut")}</button>
      </div>
      ${this.render3dBar()}
      <fp3d-view3d
        .hass=${this.hass}
        .building=${this._doc3d}
        .floorId=${this._floorId}
        .roomId=${null}
        .wallMode=${this._wall3d}
        .explode=${!1}
        .markerMode=${"important"}
        .heatMode=${"none"}
        .theme=${"neon"}
        .packs=${this.packs}
        .showEnergy=${!1}
        .flows=${!1}
        ?furnish=${this.isAdmin}
        .selectedFurniture=${this._furnitureId}
        .selectedDevice=${this._deviceId}
        .quality=${"auto"}
        .floorThumbs=${!1}
        .roomLabels=${!0}
        .floorStack=${"single"}
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
    </div>`}updated(){let e=this.floor?.background;if(e&&!this._images[e.image_id]&&!this.loadingImages.has(e.image_id)&&this.loadImage(e.image_id),this.furnitureItem?.pictures)for(let t of this.storedPictures())!this._images[t]&&!this.loadingImages.has(t)&&this.loadImage(t)}get floor(){return this._doc?.floors.find(e=>e.id===this._floorId)}get room(){return this.floor?.rooms.find(e=>e.id===this._roomId)}get isAdmin(){return this.hass?.user?.is_admin??!0}setDoc(e,t=this._doc){t&&(this.past.push(JSON.stringify(t)),this.past.length>ai&&this.past.shift(),this.future=[]),this._doc=e,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}change(e,t=this._doc,n=!0){let i=structuredClone(t),s=i.floors.find(r=>r.id===this._floorId);!s&&this._floorId||(e(i,s),this.setDoc(i,n?t:null))}undo(){let e=this.past.pop();e&&(this.future.push(JSON.stringify(this._doc)),this.restore(JSON.parse(e)))}redo(){let e=this.future.pop();e&&(this.past.push(JSON.stringify(this._doc)),this.restore(JSON.parse(e)))}restore(e){this._doc=e,e.floors.some(t=>t.id===this._floorId)||(this._floorId=e.floors[0]?.id??null),this.floor?.rooms.some(t=>t.id===this._roomId)||(this._roomId=null),this._vertex=null,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}toScreen(e){let{scale:t,ox:n,oy:i}=this._view;return[e[0]*t+n,e[1]*t+i]}toWorld(e,t){let{scale:n,ox:i,oy:s}=this._view;return[(e-i)/n,(t-s)/n]}localPoint(e){let t=this.renderRoot.querySelector("svg").getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]}fit(){let e=this.floor?.rooms.flatMap(a=>a.points)??[],t=e.length?K(e):{x0:0,z0:0,x1:10,z1:8},n=1.5,i=t.x1-t.x0+2*n,s=t.z1-t.z0+2*n,r=Math.max(8,Math.min(400,Math.min(this._size.w/i,this._size.h/s)));this._view={scale:r,ox:this._size.w/2-(t.x0+t.x1)/2*r,oy:this._size.h/2-(t.z0+t.z1)/2*r}}zoomAt(e,t,n){let{scale:i,ox:s,oy:r}=this._view,a=Math.max(8,Math.min(600,i*e)),l=a/i;this._view={scale:a,ox:t-(t-s)*l,oy:n-(n-r)*l}}snap(e,t,n=!1){if(this._guides={},n)return e;let i=Ot/this._view.scale,s=this.floor?.rooms??[],r=[];for(let d of s)d.points.forEach((f,v)=>{t&&d.id===t.roomId&&(t.index===void 0||t.index===v)||r.push(f)});let a=null,l=i;for(let d of r){let f=Math.hypot(d[0]-e[0],d[1]-e[1]);f<l&&(l=f,a=d)}if(a)return this._guides={point:a},[a[0],a[1]];for(let d of s)if(!(t&&d.id===t.roomId))for(let f=0;f<d.points.length;f++){let v=d.points[f],b=d.points[(f+1)%d.points.length],g=b[0]-v[0],k=b[1]-v[1],$=g*g+k*k;if($<1e-9)continue;let w=((e[0]-v[0])*g+(e[1]-v[1])*k)/$;if(w<=0||w>=1)continue;let S=[v[0]+w*g,v[1]+w*k],E=Math.hypot(S[0]-e[0],S[1]-e[1]),z=this._doc.settings.grid;Math.abs(k)<1e-9&&(S[0]=Math.min(Math.max(Math.round(S[0]/z)*z,Math.min(v[0],b[0])),Math.max(v[0],b[0]))),Math.abs(g)<1e-9&&(S[1]=Math.min(Math.max(Math.round(S[1]/z)*z,Math.min(v[1],b[1])),Math.max(v[1],b[1]))),E<l&&(l=E,a=S)}if(a)return this._guides={point:a},[M(a[0]),M(a[1])];let c=this._doc.settings.grid,p=[M(Math.round(e[0]/c)*c),M(Math.round(e[1]/c)*c)],u=i,_=i,h={};for(let d of r)Math.abs(d[0]-e[0])<u&&(u=Math.abs(d[0]-e[0]),p[0]=d[0],h.x=d[0]),Math.abs(d[1]-e[1])<_&&(_=Math.abs(d[1]-e[1]),p[1]=d[1],h.z=d[1]);return this._guides=h,p}onPointerDown(e){e.currentTarget.setPointerCapture(e.pointerId);let n=this.localPoint(e);if(this.pointers.set(e.pointerId,n),this.pointers.size===2){this.drag&&oi.has(this.drag.kind)&&"moved"in this.drag&&this.drag.moved&&"base"in this.drag&&this.restoreLive(this.drag.base),this.drag=null,this.pinch=this.pinchState();return}if(this.pointers.size>2)return;if(e.button===1||e.button===2||!this.floor){this.drag={kind:"pan",last:n};return}let i=this.toWorld(...n),s=e.target;if(this._tool==="rect"||this._tool==="outdoor"){let v=this.snap(i,void 0,e.altKey);this.drag={kind:"rect",start:v,end:v,outdoor:this._tool==="outdoor"};return}if(this._tool==="polygon"||this._tool==="measure"){this.drag={kind:"tap",startScreen:n,last:n,panning:!1};return}if(this._tool==="opening"){this.placeOpening(this._openingPreset,n)||(this.drag={kind:"pan",last:n});return}if(this._tool==="meter"){if(this.isAdmin&&this._floorId){let v=this._doc.settings.grid,[b,g]=i.map(k=>M(Math.round(k/v)*v));this.setEnergy({meter:{floor_id:this._floorId,x:b,z:g}})}this._tool="select";return}let r=s.closest("[data-device]");if(r&&this.isAdmin){this.drag={kind:"device",entityId:r.getAttribute("data-device"),start:i,startScreen:n,base:this._doc,moved:!1};return}let a=s.closest("[data-opening]");if(a){let v=a.getAttribute("data-opening");this.selectItem("opening",v),this.drag=this.isAdmin?{kind:"opening",id:v,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let l=s.closest("[data-resize]");if(l&&this.isAdmin){let[v,b,g]=l.getAttribute("data-resize").split(":");this.drag={kind:"resize",id:v,corner:[b==="1"?1:-1,g==="1"?1:-1],base:this._doc,moved:!1};return}let c=s.closest("[data-rotate]");if(c&&this.isAdmin){this.drag={kind:"rotate",id:c.getAttribute("data-rotate"),base:this._doc,moved:!1};return}let p=s.closest("[data-aim]");if(p&&this.isAdmin){this.drag={kind:"aim",entityId:p.getAttribute("data-aim"),base:this._doc,moved:!1};return}let u=s.closest("[data-furniture]");if(u&&!s.closest("[data-vertex], [data-mid]")){let v=u.getAttribute("data-furniture");this.selectItem("furniture",v),this.drag=this.isAdmin?{kind:"furniture",id:v,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let _=s.closest("[data-vertex]"),h=s.closest("[data-mid]");if(_&&this.room&&this.isAdmin){this._vertex=Number(_.getAttribute("data-vertex")),this.drag={kind:"vertex",roomId:this.room.id,index:this._vertex,base:this._doc,moved:!1};return}if(h&&this.room&&this.isAdmin){let v=Number(h.getAttribute("data-mid")),b=this.room.points,g=b[v],k=b[(v+1)%b.length],$=[M((g[0]+k[0])/2),M((g[1]+k[1])/2)],w=this._doc,S=this.room.id;this.change((E,z)=>{z.rooms.find(I=>I.id===S).points.splice(v+1,0,$);let A=Math.hypot($[0]-g[0],$[1]-g[1]);for(let I of z.openings)I.room_id===S&&(I.edge>v?I.edge+=1:I.edge===v&&I.offset>A&&(I.edge=v+1,I.offset=M(I.offset-A)))},w,!1),this._vertex=v+1,this.drag={kind:"vertex",roomId:S,index:v+1,base:w,moved:!0};return}let d=s.closest("[data-outdoor]");if(d&&!s.closest("[data-room]")&&!this.roomAt(i)){let v=d.getAttribute("data-outdoor");this.selectItem("outdoor",v),this.drag=this.isAdmin?{kind:"outdoor",id:v,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let f=s.closest("[data-room]")?.getAttribute("data-room")??this.roomAt(i);if(f){f!==this._roomId&&(this._vertex=null),this.selectItem("room",f),this.drag=this.isAdmin&&this._tool!=="furniture"?{kind:"room",roomId:f,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}this.selectItem("room",null),this.drag={kind:"pan",last:n}}onPointerMove(e){let t=this.localPoint(e);if(this.pointers.has(e.pointerId)&&this.pointers.set(e.pointerId,t),this.pinch){let s=this.pinchState();s&&(this.zoomAt(s.dist/Math.max(1,this.pinch.dist),...s.mid),this._view={...this._view,ox:this._view.ox+s.mid[0]-this.pinch.mid[0],oy:this._view.oy+s.mid[1]-this.pinch.mid[1]},this.pinch=s);return}let n=this.toWorld(...t),i=this.drag;if(!i){this._tool!=="select"&&this._tool!=="furniture"&&this.floor&&(this._cursor=this.snap(n,void 0,e.altKey));return}switch(i.kind){case"pan":this._view={...this._view,ox:this._view.ox+t[0]-i.last[0],oy:this._view.oy+t[1]-i.last[1]},i.last=t;break;case"tap":(i.panning||Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])>6)&&(i.panning=!0,this._view={...this._view,ox:this._view.ox+t[0]-i.last[0],oy:this._view.oy+t[1]-i.last[1]}),i.last=t;break;case"rect":i.end=this.snap(n,void 0,e.altKey),this.requestUpdate();break;case"vertex":{let s=this.snap(n,{roomId:i.roomId,index:i.index},e.altKey);i.moved=!0,this.change((r,a)=>{a.rooms.find(l=>l.id===i.roomId).points[i.index]=s},i.base,!1);break}case"room":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.base.floors.find(c=>c.id===this._floorId)?.rooms.find(c=>c.id===i.roomId);if(!s)return;let r=this.roomDelta(s,[n[0]-i.start[0],n[1]-i.start[1]],e.altKey),a=i.base.floors.find(c=>c.id===this._floorId),l=new Set(a.placements.filter(c=>O([c.x,c.z],s.points)).map(c=>c.entity_id));this.change((c,p)=>{let u=p.rooms.find(_=>_.id===i.roomId);u.points=s.points.map(([_,h])=>[M(_+r[0]),M(h+r[1])]),p.placements=a.placements.map(_=>l.has(_.entity_id)?{..._,x:M(_.x+r[0]),z:M(_.z+r[1])}:_)},i.base,!1);break}case"opening":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.base.floors.find(c=>c.id===this._floorId),r=s?.openings.find(c=>c.id===i.id),a=s?.rooms.find(c=>c.id===r?.room_id);if(!r||!a)return;let l=this.offsetOnEdge(a,r.edge,n,r.width,e.altKey);this.change((c,p)=>Object.assign(p.openings.find(u=>u.id===i.id),{offset:l}),i.base,!1);break}case"furniture":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.base.floors.find(u=>u.id===this._floorId)?.furniture.find(u=>u.id===i.id);if(!s)return;let r=e.altKey?.01:this._doc.settings.grid,a=M(Math.round((s.x+n[0]-i.start[0])/r)*r),l=M(Math.round((s.z+n[1]-i.start[1])/r)*r),c=s.rotation,p=e.altKey?null:this.snapToWall({...s,x:a,z:l});p&&({x:a,z:l,rotation:c}=p),this.change((u,_)=>Object.assign(_.furniture.find(h=>h.id===i.id),{x:a,z:l,rotation:c}),i.base,!1);break}case"outdoor":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.base.floors.find(c=>c.id===this._floorId)?.outdoor.find(c=>c.id===i.id);if(!s)return;let r=e.altKey?.01:this._doc.settings.grid,a=Math.round((n[0]-i.start[0])/r)*r,l=Math.round((n[1]-i.start[1])/r)*r;this.change((c,p)=>p.outdoor.find(u=>u.id===i.id).points=s.points.map(([u,_])=>[M(u+a),M(_+l)]),i.base,!1);break}case"resize":{i.moved=!0;let s=i.base.floors.find(a=>a.id===this._floorId)?.furniture.find(a=>a.id===i.id);if(!s)return;let r=xn(s,i.corner,n,e.altKey?.01:this._doc.settings.grid);this.change((a,l)=>Object.assign(l.furniture.find(c=>c.id===i.id),r),i.base,!1);break}case"rotate":{i.moved=!0;let s=i.base.floors.find(l=>l.id===this._floorId)?.furniture.find(l=>l.id===i.id);if(!s)return;let r=Math.atan2(-(n[0]-s.x),n[1]-s.z)*180/Math.PI,a=e.altKey?1:15;r=(Math.round(r/a)*a%360+360)%360,this.change((l,c)=>Object.assign(c.furniture.find(p=>p.id===i.id),{rotation:r}),i.base,!1);break}case"aim":{i.moved=!0;let s=i.base.floors.find(c=>c.id===this._floorId)?.placements.find(c=>c.entity_id===i.entityId);if(!s)return;let r=Math.atan2(-(n[0]-s.x),n[1]-s.z)*180/Math.PI,a=e.altKey?1:5;r=(Math.round(r/a)*a%360+360)%360;let l=Math.min(50,Math.max(.5,Math.round(Math.hypot(n[0]-s.x,n[1]-s.z)*10)/10));this.change((c,p)=>Object.assign(p.placements.find(u=>u.entity_id===i.entityId),{rotation:r,reach:l}),i.base,!1);break}case"device":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.base.floors.find(c=>c.id===this._floorId)?.placements.find(c=>c.entity_id===i.entityId);if(!s)return;let r=e.altKey?.01:this._doc.settings.grid,a=M(Math.round((s.x+n[0]-i.start[0])/r)*r),l=M(Math.round((s.z+n[1]-i.start[1])/r)*r);this.change((c,p)=>Object.assign(p.placements.find(u=>u.entity_id===i.entityId),{x:a,z:l}),i.base,!1);break}}}onPointerUp(e){if(this.pointers.delete(e.pointerId),this.pinch){this.pointers.size<2&&(this.pinch=null);return}let t=this.drag;if(this.drag=null,!t||e.type==="pointercancel"){t&&oi.has(t.kind)&&"moved"in t&&t.moved&&"base"in t&&this.restoreLive(t.base);return}let n=this.localPoint(e);switch(t.kind){case"rect":{let[i,s]=t.start,[r,a]=t.end;if(Math.abs(r-i)>=.2&&Math.abs(a-s)>=.2){let l=[Math.min(i,r),Math.min(s,a)],c=[Math.max(i,r),Math.max(s,a)],p=[l,[c[0],l[1]],c,[l[0],c[1]]];t.outdoor?this.addOutdoor(p):this.addRoom(p)}this._guides={};break}case"tap":if(t.panning)break;this._tool==="measure"?this._draft=[this.snap(this.toWorld(...n),void 0,e.altKey)]:this.addDraftPoint(this.snap(this.toWorld(...n),void 0,e.altKey),n);break;case"opening":case"furniture":case"rotate":case"aim":case"resize":case"outdoor":t.moved&&this.pushHistory(t.base);break;case"device":t.moved?this.pushHistory(t.base):this.selectItem("device",t.entityId);break;case"vertex":case"room":t.moved&&this.pushHistory(t.base),this._guides={};break;default:break}}onWheel(e){e.preventDefault();let[t,n]=this.localPoint(e);this.zoomAt(Math.exp(-e.deltaY*(e.deltaMode===1?.05:.0015)),t,n)}pinchState(){let e=[...this.pointers.values()];if(e.length<2)return null;let[t,n]=e;return{dist:Math.hypot(t[0]-n[0],t[1]-n[1]),mid:[(t[0]+n[0])/2,(t[1]+n[1])/2]}}pushHistory(e){this.past.push(JSON.stringify(e)),this.past.length>ai&&this.past.shift(),this.future=[],this._canUndo=!0,this._canRedo=!1}restoreLive(e){this._doc=e,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}roomDelta(e,t,n){if(n)return t;let i=this._doc.settings.grid,s=[Math.round(t[0]/i)*i,Math.round(t[1]/i)*i],a=Ot/this._view.scale;this._guides={};for(let l of this.floor?.rooms??[])if(l.id!==e.id)for(let c of l.points)for(let p of e.points){let u=Math.hypot(p[0]+t[0]-c[0],p[1]+t[1]-c[1]);u<a&&(a=u,s=[c[0]-p[0],c[1]-p[1]],this._guides={point:c})}return s}roomAt(e){return(this.floor?.rooms??[]).filter(i=>O(e,i.points)).sort((i,s)=>me(i.points)-me(s.points))[0]?.id??null}addDraftPoint(e,t){let n=this._draft;if(n.length>=3){let[s,r]=this.toScreen(n[0]);if(Math.hypot(s-t[0],r-t[1])<14){this.closeDraft();return}}let i=n[n.length-1];i&&Math.hypot(i[0]-e[0],i[1]-e[1])<1e-6||(this._draft=[...n,e])}closeDraft(){this._draft.length>=3&&me(this._draft)>.05&&this.addRoom(this._draft),this._draft=[],this._cursor=null,this._guides={}}measureStep(e){let t=this._draft[this._draft.length-1];if(!t||!(this._measureLen>0))return;let n=fe(t,this._measureLen,e),i=this._draft[0];if(this._draft.length>=3&&Math.hypot(n[0]-i[0],n[1]-i[1])<.01){this.closeDraft();return}this._draft=[...this._draft,n]}rectBySize(){let e=this._draft[0]??[0,0],[t,n]=this._rectSize;t>.1&&n>.1&&(this.addRoom([e,fe(e,t,"right"),fe(fe(e,t,"right"),n,"down"),fe(e,n,"down")]),this._draft=[])}renderMeasureForm(){let e=this._draft,t=e[0],n=e[e.length-1],i=t&&n&&e.length>1?Math.hypot(n[0]-t[0],n[1]-t[1]):0,s=[["up","\u2191"],["left","\u2190"],["right","\u2192"],["down","\u2193"]],r=a=>L(this.hass,a,2);return m`<section>
      <h3>${this.t("measure")}</h3>
      ${t?m`<p class="fp3d-sub">${this.t("measure_from",{x:r(t[0]),z:r(t[1])})}</p>
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
                ${s.map(([a,l])=>m`<button class="fp3d-btn fp3d-arrow-${a}" title=${this.t(`dir_${a}`)} @click=${()=>this.measureStep(a)}>${l}</button>`)}
              </div>
            </div>
            ${e.length>1?m`<ol class="fp3d-measure-list">
                  ${e.slice(1).map((a,l)=>m`<li>${r(Math.hypot(a[0]-e[l][0],a[1]-e[l][1]))} m</li>`)}
                </ol>`:y}
            <div class="fp3d-actions">
              <button class="fp3d-btn fp3d-primary" ?disabled=${e.length<3} @click=${()=>this.closeDraft()}>${this.t("measure_close")}</button>
              <button class="fp3d-btn" ?disabled=${e.length<2} @click=${()=>this._draft=e.slice(0,-1)}>${this.t("measure_undo")}</button>
            </div>
            ${e.length>=3?m`<p class="fp3d-sub">${this.t("measure_gap",{gap:r(i)})}</p>`:y}`:m`<p class="fp3d-sub">${this.t("measure_start")}</p>`}
      <h4 class="fp3d-lib-head">${this.t("rect_by_size")}</h4>
      <div class="fp3d-form">
        ${this.num(this.t("width"),this._rectSize[0],a=>this._rectSize=[Math.max(.1,a),this._rectSize[1]],.01,.1)}
        ${this.num(this.t("depth"),this._rectSize[1],a=>this._rectSize=[this._rectSize[0],Math.max(.1,a)],.01,.1)}
        <button class="fp3d-btn fp3d-wide" @click=${()=>this.rectBySize()}>${this.t("rect_add")}</button>
      </div>
      <p class="fp3d-sub">${this.t("measure_hint")}</p>
    </section>`}addOutdoor(e){if(!this.floor)return;let t={id:D("outdoor"),type:"lawn",points:e.map(([n,i])=>[M(n),M(i)])};this.change((n,i)=>i.outdoor.push(t)),this.selectItem("outdoor",t.id),this._tool="select"}get outdoorArea(){return this._outdoorId?this.floor?.outdoor.find(e=>e.id===this._outdoorId):void 0}updateOutdoor(e){let t=this._outdoorId;this.change((n,i)=>Object.assign(i.outdoor.find(s=>s.id===t),e))}deleteOutdoor(){let e=this._outdoorId;!e||!this.isAdmin||(this.change((t,n)=>n.outdoor=n.outdoor.filter(i=>i.id!==e)),this._outdoorId=null)}duplicateOutdoor(){let e=this.outdoorArea;if(!e||!this.isAdmin)return;let t={...e,id:D("outdoor"),points:e.points.map(([n,i])=>[M(n+.5),M(i+.5)])};this.change((n,i)=>i.outdoor.push(t)),this.selectItem("outdoor",t.id)}addRoom(e){if(!this.floor)return;let t=D("room"),n=this.floor.rooms.length+1;this.change((i,s)=>s.rooms.push({id:t,name:this.t("new_room",{n}),area_id:null,points:e.map(([r,a])=>[M(r),M(a)]),floor_material:"wood"})),this._roomId=t,this._vertex=null,this._tool="select"}onKey=e=>{if(e.composedPath().some(i=>i instanceof HTMLInputElement||i instanceof HTMLSelectElement||i instanceof HTMLTextAreaElement)||!this.isConnected||!this.offsetParent)return;let n=e.ctrlKey||e.metaKey;n&&e.key.toLowerCase()==="z"?(e.preventDefault(),e.shiftKey?this.redo():this.undo()):n&&e.key.toLowerCase()==="y"?(e.preventDefault(),this.redo()):n&&e.key.toLowerCase()==="d"?(e.preventDefault(),this.duplicateRoom()):e.key==="Delete"||e.key==="Backspace"&&(this._tool==="select"||this._tool==="furniture")?this._deviceId?(this.removeDevice(this._deviceId),this._deviceId=null):this._outdoorId?this.deleteOutdoor():this._openingId?this.deleteOpening():this._furnitureId?this.deleteFurniture():this._vertex!==null?this.deleteVertex(this._vertex):this.deleteRoom():e.key.toLowerCase()==="r"&&!n&&this._furnitureId?this.rotateFurniture(e.shiftKey?-90:90):e.key==="Backspace"&&this._tool==="polygon"?this._draft=this._draft.slice(0,-1):e.key==="Enter"&&this._tool==="polygon"?this.closeDraft():e.key==="Escape"&&(this._draft.length?this._draft=[]:this._tool!=="select"?this._tool="select":this.selectItem("room",null),this._cursor=null)};get freeHaFloors(){let e=new Set(this._doc.floors.map(t=>t.ha_floor));return Object.values(this.hass?.floors??{}).filter(t=>!e.has(t.floor_id)).sort((t,n)=>(t.level??99)-(n.level??99)||t.name.localeCompare(n.name))}unplacedAreas(e){if(!e.ha_floor)return[];let t=new Set(this._doc.floors.flatMap(n=>n.rooms.map(i=>i.area_id)));return Object.values(this.hass?.areas??{}).filter(n=>n.floor_id===e.ha_floor&&!t.has(n.area_id)).sort((n,i)=>n.name.localeCompare(i.name))}addFloor(e=null){let t=this._doc.floors,n=D("floor"),i=e?.name??(t.length===0?this.t("default_floor"):this.t("new_floor",{n:t.length})),s={...kn(n,i,wn(t,e?.level)),ha_floor:e?.floor_id??null},r=structuredClone(this._doc),a=r.floors.findIndex(l=>l.elevation>s.elevation);r.floors.splice(a<0?r.floors.length:a,0,s),this.setDoc(r),this._floorId=n,this._roomId=null,this._floorMenu=!1,this.fit()}addAreaRooms(e){let t=this.unplacedAreas(e);if(!t.length)return;let n=$n(e,t,()=>D("room"));this.change((i,s)=>s.rooms.push(...n)),this.fit()}moveFloor(e){let t=this._doc.floors.findIndex(s=>s.id===this._floorId),n=t+e;if(t<0||n<0||n>=this._doc.floors.length)return;let i=structuredClone(this._doc);[i.floors[t],i.floors[n]]=[i.floors[n],i.floors[t]],this.setDoc(i)}deleteFloor(){let e=this.floor;if(!e||!confirm(this.t("delete_floor_confirm",{name:e.name})))return;let t=structuredClone(this._doc);t.floors=t.floors.filter(n=>n.id!==e.id),this.setDoc(t),this._floorId=t.floors[0]?.id??null,this._roomId=null}deleteRoom(){let e=this._roomId;!e||!this.isAdmin||(this.change((t,n)=>{let i=n.rooms.find(s=>s.id===e);n.rooms=n.rooms.filter(s=>s.id!==e),n.openings=n.openings.filter(s=>s.room_id!==e),i&&(n.placements=n.placements.filter(s=>!O([s.x,s.z],i.points)))}),this._roomId=null,this._vertex=null)}duplicateRoom(){let e=this.room;if(!e||!this.isAdmin)return;let t=D("room");this.change((n,i)=>i.rooms.push({...structuredClone(e),id:t,points:e.points.map(([s,r])=>[M(s+.5),M(r+.5)])})),this._roomId=t}selectItem(e,t){if(this._notice=null,t&&(this._sideOpen=!0),this._outdoorId=e==="outdoor"?t:null,e==="outdoor"&&(this._roomId=null),(e!=="room"||t!==this._roomId)&&(this._vertex=null),this._roomId=e==="room"?t:this._roomId,this._openingId=e==="opening"?t:null,this._furnitureId=e==="furniture"?t:null,this._deviceId=e==="device"?t:null,e==="device"&&t){let n=this.floor?.placements.find(i=>i.entity_id===t);this._roomId=(n&&this.roomAt([n.x,n.z]))??this._roomId}e==="opening"&&t&&(this._roomId=this.floor?.openings.find(n=>n.id===t)?.room_id??this._roomId)}get opening(){return this._openingId?this.floor?.openings.find(e=>e.id===this._openingId):void 0}get furnitureItem(){return this._furnitureId?this.floor?.furniture.find(e=>e.id===this._furnitureId):void 0}offsetOnEdge(e,t,n,i,s){let r=e.points[t],a=e.points[(t+1)%e.points.length],l=Math.hypot(a[0]-r[0],a[1]-r[1])||1,c=((n[0]-r[0])*(a[0]-r[0])+(n[1]-r[1])*(a[1]-r[1]))/l,p=s?.01:this._doc.settings.grid,u=Math.min(i,l)/2;return M(Math.min(l-u,Math.max(u,Math.round(c/p)*p)))}placeOpening(e,t){let n=this.floor;if(!n||!this.isAdmin)return!1;let i=null;for(let d of n.rooms)for(let f=0;f<d.points.length;f++){let[v,b]=this.toScreen(d.points[f]),[g,k]=this.toScreen(d.points[(f+1)%d.points.length]),$=(g-v)**2+(k-b)**2||1,w=Math.min(1,Math.max(0,((t[0]-v)*(g-v)+(t[1]-b)*(k-b))/$)),S=Math.hypot(t[0]-v-(g-v)*w,t[1]-b-(k-b)*w),E=S-(d.id===this._roomId?.5:0);S<Ot*2.2&&(!i||E<i.d)&&(i={room:d,edge:f,d:E})}if(!i)return!1;let{room:s,edge:r}=i,a=s.points[r],l=s.points[(r+1)%s.points.length],c=Math.hypot(l[0]-a[0],l[1]-a[1]),p=He[e],u=p.type,_=M(Math.min(p.width,Math.max(.3,c-.1))),h={id:D("opening"),room_id:s.id,edge:r,offset:this.offsetOnEdge(s,r,this.toWorld(...t),_,!1),width:_,type:u,sill:p.sill,height:p.height,hinge:"left",leaves:p.leaves,swing:"in",cover:null,contact:null,contact2:null,tilt:null};return this.change((d,f)=>f.openings.push(h)),this._tool="select",this.selectItem("opening",h.id),!0}setOpeningPreset(e,t){let n=He[t];this._openingPreset=t;let i=vt(e)===t,s="style"in n?n.style:null;this.updateOpening({type:n.type,leaves:n.leaves,sill:n.sill,height:n.height,style:s,...i?{}:{width:n.width}})}updateOpening(e){let t=this._openingId;this.change((n,i)=>Object.assign(i.openings.find(s=>s.id===t),e))}deleteOpening(){let e=this._openingId;!e||!this.isAdmin||(this.change((t,n)=>n.openings=n.openings.filter(i=>i.id!==e)),this._openingId=null)}addFurniture(e){let t=this.floor;if(!t||!this.isAdmin)return;let[n,i,s]=ct(e),r=this._doc.floors.filter(_=>_.elevation>t.elevation).sort((_,h)=>_.elevation-h.elevation)[0],a=e==="stairs"?M(r?r.elevation-t.elevation:t.height+.25):s,l=this.room,[c,p]=l?te(l.points):this.toWorld(this._size.w/2,this._size.h/2),u={id:D("furniture"),type:e,x:M(c),z:M(p),rotation:0,w:n,d:i,h:a,variant:null};this.change((_,h)=>h.furniture.push(u)),this.selectItem("furniture",u.id)}snapToWall(e){return this.floor?Pt(this.floor,e,this._doc.settings.wall_interior):null}updateFurniture(e){let t=this._furnitureId;this.change((n,i)=>Object.assign(i.furniture.find(s=>s.id===t),e))}rotateFurniture(e){let t=this.furnitureItem;!t||!this.isAdmin||this.updateFurniture({rotation:((t.rotation+e)%360+360)%360})}deleteFurniture(){let e=this._furnitureId;!e||!this.isAdmin||(this.change((t,n)=>n.furniture=n.furniture.filter(i=>i.id!==e)),this._furnitureId=null)}duplicateFurniture(){let e=this.furnitureItem;if(!e||!this.isAdmin)return;let t={...structuredClone(e),id:D("furniture"),x:M(e.x+.3),z:M(e.z+.3)};this.change((n,i)=>i.furniture.push(t)),this.selectItem("furniture",t.id)}placeDevices(e){let t=this.room;if(!t||!e.length||!this.isAdmin)return;let n=new Set(e);this.change((i,s)=>{for(let a of i.floors)a.placements=a.placements.filter(l=>!n.has(l.entity_id)),a.furniture=a.furniture.filter(l=>!(ee(l.type)&&l.entity&&n.has(l.entity)));let r=[...s.placements.map(a=>[a.x,a.z]),...s.furniture.filter(a=>ee(a.type)).map(a=>[a.x,a.z])];for(let a of Wn(t,e,r)){if(!a.entity_id.startsWith("light.")){s.placements.push(a);continue}let[l,c,p]=X.lamp_ceiling;s.furniture.push({id:D("furniture"),type:"lamp_ceiling",x:a.x,z:a.z,rotation:0,w:l,d:c,h:p,variant:null,entity:a.entity_id,power:null})}})}get device(){return this._deviceId?this.floor?.placements.find(e=>e.entity_id===this._deviceId):void 0}updateDevice(e){let t=this._deviceId;this.change((n,i)=>Object.assign(i.placements.find(s=>s.entity_id===t),e))}centreDevice(){let e=this.device,t=e?this.roomAt([e.x,e.z]):null,n=this.floor?.rooms.find(r=>r.id===t);if(!e||!n)return;let[i,s]=te(n.points);this.updateDevice({x:M(i),z:M(s)})}spreadCeilingLights(e){let t=this.floor;if(!t)return;let n=t.placements.filter(u=>T(u.entity_id)==="light"&&(u.mount??"ceiling")==="ceiling"&&O([u.x,u.z],e.points));if(n.length<2)return;let i=K(e.points),s=i.x1-i.x0,r=i.z1-i.z0,a=Math.max(1,Math.round(Math.sqrt(n.length*s/Math.max(.1,r)))),l=Math.ceil(n.length/a),c=n.map((u,_)=>{let h=Math.floor(_/a),d=h===l-1?n.length-a*(l-1):a,f=_-h*a;return[M(i.x0+s/d*(f+.5)),M(i.z0+r/l*(h+.5))]}),p=n.map(u=>u.entity_id);this.change((u,_)=>{p.forEach((h,d)=>Object.assign(_.placements.find(f=>f.entity_id===h),{x:c[d][0],z:c[d][1]}))})}closeFloorGaps(){let e=this.floor;if(!e||!this.isAdmin)return;let{rooms:t,gaps:n}=jn(e.rooms);if(!n.length){this._notice=this.t("gaps_none");return}let i=Gn(n);this.change((s,r)=>{r.rooms=t,i&&(s.settings.wall_interior=i)}),this._notice=i?this.t("gaps_closed_wall",{n:n.length,t:L(this.hass,i,2)}):this.t("gaps_closed",{n:n.length})}removeDevice(e){this.change(t=>{for(let n of t.floors)n.placements=n.placements.filter(i=>i.entity_id!==e),n.furniture=n.furniture.filter(i=>!(ee(i.type)&&i.entity===e))})}deleteVertex(e){let t=this.room;if(!t||t.points.length<=3)return;let n=t.points.length,i=(e-1+n)%n;this.change((s,r)=>{r.rooms.find(a=>a.id===t.id).points.splice(e,1),r.openings=r.openings.filter(a=>a.room_id!==t.id||a.edge!==e&&a.edge!==i).map(a=>a.room_id===t.id&&a.edge>e?{...a,edge:a.edge-1}:a)}),this._vertex=null}updateFloor(e){this.change((t,n)=>Object.assign(n,e))}updateRoom(e){let t=this._roomId;this.change((n,i)=>Object.assign(i.rooms.find(s=>s.id===t),e))}setArea(e){let t=this.room;if(!t)return;let n=e?this.hass?.areas?.[e]:void 0,i=!t.name||/^(Raum|Room) \d+$/.test(t.name)||Object.values(this.hass?.areas??{}).some(s=>s.name===t.name);this.updateRoom({area_id:e||null,...n&&i?{name:n.name}:{}})}setRect(e,t){let n=this.room;if(!n||!Number.isFinite(t))return;let i=K(n.points),{x0:s,z0:r,x1:a,z1:l}=i;e==="x"&&([s,a]=[t,t+(a-s)]),e==="z"&&([r,l]=[t,t+(l-r)]),e==="w"&&t>.05&&(a=s+t),e==="d"&&t>.05&&(l=r+t),this.updateRoom({points:[[M(s),M(r)],[M(a),M(r)],[M(a),M(l)],[M(s),M(l)]]})}setPoint(e,t,n){let i=this.room;if(!i||!Number.isFinite(n))return;let s=i.points.map(r=>[...r]);s[e][t]=M(n),this.updateRoom({points:s})}async loadImage(e){this.loadingImages.add(e);try{let t=await st(this.hass,e),n=new Image;n.src=t,await n.decode(),this._images={...this._images,[e]:{url:t,aspect:n.naturalHeight/n.naturalWidth}}}catch{}}async uploadBackground(e){let t=e.target,n=t.files?.[0];if(t.value="",!n)return;let i=await createImageBitmap(n),s=Math.min(1,2048/Math.max(i.width,i.height)),r=document.createElement("canvas");r.width=Math.round(i.width*s),r.height=Math.round(i.height*s),r.getContext("2d").drawImage(i,0,0,r.width,r.height);let a=r.toDataURL("image/jpeg",.85),l=D("img");await Le(this.hass,l,a),this._images={...this._images,[l]:{url:a,aspect:r.height/r.width}};let c=this.floor?.rooms.length?K(this.floor.rooms.flatMap(p=>p.points)):null;this.updateFloor({background:{image_id:l,x:c?c.x0:0,z:c?c.z0:0,width:c?Math.max(4,M(c.x1-c.x0)):12,opacity:.5}})}render(){let e=this.floor,t=e?Rt(e.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior}):null;return m`
      ${this.renderPreview()}
      <div class="fp3d-editor ${this.narrow?"fp3d-narrow":""}">
        <div class="fp3d-main">
          <div class="fp3d-toolbar">
            <div class="fp3d-seg" role="group" aria-label=${this.t("tool_select")}>
              ${["select","rect","polygon","measure","opening","furniture","outdoor"].map(n=>m`<button
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
            </div>
            ${t?.warnings.length?m`<span class="fp3d-warn">${this.t("overlap_warning")}</span>`:y}
          </div>
          <div class="fp3d-stage-pair ${this._split?"fp3d-split":""}" style=${this._split&&!this.narrow?`--fp3d-split:${Math.round(this._splitRatio*100)}%`:""}>
          <div class="fp3d-canvas-wrap">
            <svg
              class="fp3d-plan fp3d-tool-${this._tool}"
              @pointerdown=${this.onPointerDown}
              @pointermove=${this.onPointerMove}
              @pointerup=${this.onPointerUp}
              @pointercancel=${this.onPointerUp}
              @pointerleave=${()=>{this.drag||(this._cursor=null)}}
              @wheel=${this.onWheel}
              @contextmenu=${n=>n.preventDefault()}
            >
              ${this.renderBackground(e)} ${this.renderGrid()} ${this.renderGhost()} ${t?this.renderWalls(t.walls):y}
              ${e?this.renderOutdoor(e):y} ${e?this.renderRooms(e):y} ${e?this.renderFurniture(e):y}
              ${e&&t?this.renderOpenings(e,t.walls):y} ${e?this.renderMeter(e):y}
              ${e&&this._tool==="select"?this.renderDevices(e):y}
              ${this.room&&this.isAdmin&&this._tool==="select"&&!this._openingId&&!this._furnitureId?this.renderHandles(this.room):y}
              ${this.renderDraft()} ${this.renderGuides()}
            </svg>
            <p class="fp3d-hint">${e?this.t(`hint_${this._tool}`):this.t("hint_empty")}</p>
          </div>
          ${this._split&&!this.narrow?m`<div class="fp3d-split-handle" title=${this.t("split_handle_hint")} @pointerdown=${this.onSplitDown}></div>`:y}
          ${this._split?this.render3d():y}
          </div>
        </div>
        ${this.renderAside(e)}
      </div>
    `}renderBackground(e){let t=e?.background,n=t?this._images[t.image_id]:void 0;if(!t||!n)return y;let[i,s]=this.toScreen([t.x,t.z]),r=t.width*this._view.scale;return x`<image href=${n.url} x=${i} y=${s} width=${r} height=${r*n.aspect} opacity=${t.opacity} preserveAspectRatio="none" pointer-events="none" />`}renderGrid(){let{scale:e}=this._view,{w:t,h:n}=this._size,i=e>=90?.1:e>=30?.5:1,s=e>=20?1:5,[r,a]=this.toWorld(0,0),[l,c]=this.toWorld(t,n),p=[],u=(d,f)=>{for(let v=Math.ceil(r/d)*d;v<=l;v+=d){let b=this.toScreen([v,0])[0];p.push(x`<line class=${f} x1=${b} y1="0" x2=${b} y2=${n} />`)}for(let v=Math.ceil(a/d)*d;v<=c;v+=d){let b=this.toScreen([0,v])[1];p.push(x`<line class=${f} x1="0" y1=${b} x2=${t} y2=${b} />`)}};i<s&&u(i,"fp3d-grid-minor"),u(s,"fp3d-grid-major");let[_,h]=this.toScreen([0,0]);return p.push(x`<circle class="fp3d-origin" cx=${_} cy=${h} r="3" />`),x`<g pointer-events="none">${p}</g>`}renderGhost(){let e=this._doc?.floors.findIndex(n=>n.id===this._floorId)??-1,t=e>0?this._doc.floors[e-1]:void 0;return t?x`<g pointer-events="none">${t.rooms.map(n=>x`<polygon class="fp3d-ghost" points=${n.points.map(i=>this.toScreen(i).join(",")).join(" ")} />`)}</g>`:y}renderWalls(e){return x`<g pointer-events="none">${e.map(t=>x`<polygon class=${t.exterior?"fp3d-wall fp3d-wall-ext":"fp3d-wall"} points=${t.footprint.map(n=>this.toScreen(n).join(",")).join(" ")} />`)}</g>`}renderOutdoor(e){return x`<g>${e.outdoor.map(t=>{let n=t.points.map(l=>this.toScreen(l).join(",")).join(" "),[i,s]=this.toScreen(te(t.points)),r=K(t.points),a=Math.min(r.x1-r.x0,r.z1-r.z0)*this._view.scale>40;return x`<g data-outdoor=${t.id} class=${`fp3d-out fp3d-out-${t.type}${t.id===this._outdoorId?" fp3d-out-sel":""}`}>
        <polygon points=${n} />
        ${a?x`<text x=${i} y=${s+4}>${this.t(`out_${t.type}`)}</text>`:y}
      </g>`})}</g>`}renderOutdoorForm(e){let t=this.isAdmin,n=yt(e.points),i=K(e.points),s=(r,a)=>{let{x0:l,z0:c,x1:p,z1:u}=i;r==="x"&&([l,p]=[a,a+(p-l)]),r==="z"&&([c,u]=[a,a+(u-c)]),r==="w"&&(p=l+Math.max(.1,a)),r==="d"&&(u=c+Math.max(.1,a)),this.updateOutdoor({points:[[l,c],[p,c],[p,u],[l,u]].map(([_,h])=>[M(_),M(h)])})};return m`<section>
      <h3>${this.t("outdoor")}</h3>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("outdoor_type")}
          <select ?disabled=${!t} @change=${r=>this.updateOutdoor({type:r.target.value})}>
            ${bn.map(r=>m`<option value=${r} ?selected=${r===e.type}>${this.t(`out_${r}`)}</option>`)}
          </select></label
        >
        ${n?m`${this.num(this.t("x"),i.x0,r=>s("x",r))} ${this.num(this.t("z"),i.z0,r=>s("z",r))}
            ${this.num(this.t("width"),i.x1-i.x0,r=>s("w",r),.01,.1)} ${this.num(this.t("depth"),i.z1-i.z0,r=>s("d",r),.01,.1)}`:y}
      </div>
      <p class="fp3d-sub">${this.t("outdoor_hint")}</p>
      ${t?m`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.duplicateOutdoor()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOutdoor()}>${this.t("delete")}</button>
          </div>`:y}
    </section>`}renderRooms(e){return x`
      <g>${e.rooms.map(t=>{let n=t.points.map(i=>this.toScreen(i).join(",")).join(" ");return x`<polygon data-room=${t.id} class=${t.id===this._roomId?"fp3d-room fp3d-room-sel":"fp3d-room"} points=${n} />`})}</g>
      <g pointer-events="none">${e.rooms.map(t=>{let[n,i]=this.toScreen(te(t.points));return x`<text class="fp3d-room-name" x=${n} y=${i-2}>${t.name}</text>
          <text class="fp3d-room-area" x=${n} y=${i+14}>${this.t("area_m2",{a:L(this.hass,me(t.points),1)})}</text>`})}</g>
    `}renderMeter(e){let t=this._doc.energy?.meter;if(!t||t.floor_id!==e.id)return y;let[n,i]=this.toScreen([t.x,t.z]);return x`<g class="fp3d-meter" transform="translate(${n} ${i})" pointer-events="none">
      <rect x="-11" y="-11" width="22" height="22" rx="5" />
      <path d="M1.5 -7 L-4 1 H0 L-1.5 7 L4 -1 H0 Z" />
    </g>`}renderFurniture(e){let t=this._view.scale;return x`<g>${e.furniture.map(n=>{let i=n.id===this._furnitureId,[s,r]=this.toScreen([n.x,n.z]),a=Math.min(n.w,n.d)*t>44,l=n.rotation*Math.PI/180,c=n.d/2+Math.max(.3,26/t),[p,u]=this.toScreen([n.x-Math.sin(l)*c,n.z+Math.cos(l)*c]),[_,h]=this.toScreen([n.x-Math.sin(l)*(n.d/2),n.z+Math.cos(l)*(n.d/2)]),d=ee(n.type)&&!!n.entity&&n.entity!=="none"&&this.hass?.states[n.entity]?.state==="on";return x`<g data-furniture=${n.id} class=${`fp3d-furn${i?" fp3d-furn-sel":""}${d?" fp3d-furn-lit":""}`}>
        <g transform="translate(${s} ${r}) rotate(${n.rotation}) scale(${t})">
          <rect class="fp3d-furn-body" x=${-n.w/2} y=${-n.d/2} width=${n.w} height=${n.d} />
          <g class="fp3d-furn-sym">${Un(n.type,n.w,n.d)}</g>
          <line class="fp3d-furn-front" x1=${-n.w/2} y1=${n.d/2} x2=${n.w/2} y2=${n.d/2} />
        </g>
        ${a?x`<text x=${s} y=${r+4}>${Re(this.hass,n.type)}</text>`:y}
      </g>
      ${i&&this.isAdmin?[[-1,-1],[1,-1],[1,1],[-1,1]].map(([f,v])=>{let[b,g]=this.toScreen([n.x+f*n.w*Math.cos(l)/2-v*n.d*Math.sin(l)/2,n.z+f*n.w*Math.sin(l)/2+v*n.d*Math.cos(l)/2]);return x`<g class="fp3d-resize" data-resize=${`${n.id}:${f}:${v}`}>
              <circle cx=${b} cy=${g} r="14" class="fp3d-hit" />
              <rect x=${b-5} y=${g-5} width="10" height="10" rx="2" />
            </g>`}):y}
      ${i?(()=>{let[f,v]=this.toScreen([n.x+Math.sin(l)*(n.d/2+18/t),n.z-Math.cos(l)*(n.d/2+18/t)]);return x`<text class="fp3d-dim" x=${f} y=${v+4}>${L(this.hass,n.w,2)} × ${L(this.hass,n.d,2)} m</text>`})():y}
      ${i&&this.isAdmin?x`<g class="fp3d-rotate" data-rotate=${n.id}>
            <line x1=${_} y1=${h} x2=${p} y2=${u} />
            <circle cx=${p} cy=${u} r="16" class="fp3d-hit" />
            <circle cx=${p} cy=${u} r="8" />
            <path d="M${p-4} ${u-1}a4 4 0 1 1 2 3.5" />
          </g>`:y}`})}</g>`}renderOpenings(e,t){return x`<g>${e.openings.map(n=>{let i=e.rooms.find($=>$.id===n.room_id);if(!i||n.edge>=i.points.length)return y;let s=It(t,i,n.edge,n.offset),r=ze(i,n.edge,n.offset-n.width/2),a=ze(i,n.edge,n.offset+n.width/2),l=(a[0]-r[0])/(n.width||1),c=(a[1]-r[1])/(n.width||1),p=U(i.points)>=0?1:-1,u=[-c*p,l*p],_=[.06,.06];s&&(_=s.wall.roomLeft===i.id?[s.wall.left,s.wall.right]:[s.wall.right,s.wall.left]);let h=($,w)=>this.toScreen([$[0]+u[0]*w,$[1]+u[1]*w]),d=[h(r,_[0]+.01),h(a,_[0]+.01),h(a,-_[1]-.01),h(r,-_[1]-.01)],f=n.id===this._openingId,v=gt(n,s?.wall.exterior??!1),b=n.type==="door"&&bt(v),g=`fp3d-open fp3d-open-${n.type}${b?" fp3d-open-front":""}${f?" fp3d-open-sel":""}`,k;if(n.type==="garage"){let $=h(r,_[0]-.04),w=h(a,_[0]-.04),S=h(r,_[0]+Math.min(2,n.height)),E=h(a,_[0]+Math.min(2,n.height));k=x`<line x1=${$[0]} y1=${$[1]} x2=${w[0]} y2=${w[1]} />
          <path class="fp3d-open-track" d="M${$[0]} ${$[1]}L${S[0]} ${S[1]}M${w[0]} ${w[1]}L${E[0]} ${E[1]}" />`}else if(n.type==="door"){let $=n.swing==="out",w=$?-_[1]:_[0],S=n.hinge==="left"==p>0,E=n.leaves===2,z=r,A=a,I=[];if(v==="sidelight"||v==="sidelights"){let j=v==="sidelights",ie=Math.min(1.05,Math.max(.6,n.width-.04-(j?.6:.3))),V=(n.width-.04-ie)/(j?2:1),B=se=>ze(i,n.edge,n.offset-n.width/2+se),Y=j||!S?.02+V:.02;z=B(Y),A=B(Y+ie),I=j?[[r,B(.02+V)],[B(n.width-.02-V),a]]:S?[[B(n.width-.02-V),a]]:[[r,B(.02+V)]]}let W=[(z[0]+A[0])/2,(z[1]+A[1])/2],q=(E?.5:1)*Math.hypot(A[0]-z[0],A[1]-z[1]),de=(_[0]-_[1])/2,li=I.map(([j,ie])=>{let V=h(j,de+.035),B=h(ie,de+.035),Y=h(j,de-.035),se=h(ie,de-.035);return x`<line class="fp3d-open-pane" x1=${V[0]} y1=${V[1]} x2=${B[0]} y2=${B[1]} /><line class="fp3d-open-pane" x1=${Y[0]} y1=${Y[1]} x2=${se[0]} y2=${se[1]} />`}),Ke=(j,ie)=>{let[V,B]=h(j,w),[Y,se]=h(ie,w),Ie=h(j,w+($?-q:q)),Lt=q*this._view.scale,ci=(Ie[0]-V)*(se-B)-(Ie[1]-B)*(Y-V);return x`<path d="M${V} ${B}L${Ie[0]} ${Ie[1]}A${Lt} ${Lt} 0 0 ${ci>0?1:0} ${Y} ${se}" />`};k=x`${li}${v==="sliding"?x`<line x1=${h(z,w)[0]} y1=${h(z,w)[1]} x2=${h(A,w)[0]} y2=${h(A,w)[1]} />`:E?x`${Ke(z,W)}${Ke(A,W)}`:Ke(S?z:A,S?A:z)}`}else{let $=(_[0]-_[1])/2,w=h(r,$+.035),S=h(a,$+.035),E=h(r,$-.035),z=h(a,$-.035),A=[(r[0]+a[0])/2,(r[1]+a[1])/2],I=h(A,_[0]),W=h(A,-_[1]);k=x`<line x1=${w[0]} y1=${w[1]} x2=${S[0]} y2=${S[1]} /><line x1=${E[0]} y1=${E[1]} x2=${z[0]} y2=${z[1]} />${n.leaves===2?x`<line x1=${I[0]} y1=${I[1]} x2=${W[0]} y2=${W[1]} />`:y}`}return x`<g data-opening=${n.id} class=${g}>
        <polygon class="fp3d-open-gap" points=${d.map($=>$.join(",")).join(" ")} />
        ${k}
      </g>`})}</g>`}renderDevices(e){return x`<g>${e.placements.map(t=>{let n=T(t.entity_id);if(!n)return y;let[i,s]=this.toScreen([t.x,t.z]),r=this.hass?.states[t.entity_id]?.state==="on",a=t.entity_id===this._deviceId,l=`fp3d-device${r?" fp3d-device-on":""}${a?" fp3d-device-sel":""}`;return x`${n==="camera"?this.renderCameraWedge(t,a):y}<g data-device=${t.entity_id} class=${l} transform="translate(${i} ${s})">
        <title>${C(this.hass,t.entity_id)}</title>
        <circle r="18" class="fp3d-hit" /><circle r="12" />
        <path d=${Pe(n)} transform="translate(-7.2 -7.2) scale(0.6)" />
      </g>`})}</g>`}renderCameraWedge(e,t){let n=e.mount==="ceiling",i=e.fov??(n?360:90),s=e.reach??(n?3:4.5),r=(e.rotation??0)*Math.PI/180,a=(k,$)=>this.toScreen([e.x-Math.sin(r+k)*$,e.z+Math.cos(r+k)*$]),[l,c]=this.toScreen([e.x,e.z]),p=Math.min(i,359.9)*Math.PI/180/2,[u,_]=a(-p,s),[h,d]=a(p,s),f=s*this._view.scale,v=i>=360?"":`M${l} ${c}L${u} ${_}A${f} ${f} 0 ${p>Math.PI/2?1:0} 1 ${h} ${d}Z`,[b,g]=a(0,s);return x`<g class="fp3d-wedge ${t?"fp3d-wedge-sel":""}">
      ${i>=360?x`<circle cx=${l} cy=${c} r=${f} />`:x`<path d=${v} />`}
      ${t&&this.isAdmin?x`<g class="fp3d-rotate" data-aim=${e.entity_id}>
            <line x1=${l} y1=${c} x2=${b} y2=${g} />
            <circle cx=${b} cy=${g} r="16" class="fp3d-hit" />
            <circle cx=${b} cy=${g} r="8" />
            <path d="M${b-4} ${g-1}a4 4 0 1 1 2 3.5" />
          </g>`:y}
    </g>`}renderHandles(e){let t=e.points,n=t.length,i=t.map((r,a)=>{let l=t[(a+1)%n],[c,p]=this.toScreen(r),[u,_]=this.toScreen(l),h=Math.hypot(l[0]-r[0],l[1]-r[1]),d=(c+u)/2,f=(p+_)/2,[v,b]=this.toScreen(te(t)),g=-(_-p),k=u-c,$=Math.hypot(g,k)||1;g/=$,k/=$,g*(d-v)+k*(f-b)<0&&(g=-g,k=-k);let w=Math.hypot(u-c,_-p);return x`
        ${w>50?x`<text class="fp3d-dim" x=${d+g*16} y=${f+k*16+4}>${L(this.hass,h,2)} m</text>`:y}
        ${w>36?x`<g data-mid=${a} class="fp3d-mid"><circle cx=${d} cy=${f} r="14" class="fp3d-hit" /><circle cx=${d} cy=${f} r="6" /><path d="M${d-3} ${f}h6M${d} ${f-3}v6" /></g>`:y}
      `}),s=t.map((r,a)=>{let[l,c]=this.toScreen(r);return x`<g data-vertex=${a} class=${a===this._vertex?"fp3d-vertex fp3d-vertex-sel":"fp3d-vertex"}><circle cx=${l} cy=${c} r="16" class="fp3d-hit" /><circle cx=${l} cy=${c} r="6" /></g>`});return x`<g>${i}${s}</g>`}renderDraft(){let e=this.drag;if(e?.kind==="rect"){let[n,i]=this.toScreen(e.start),[s,r]=this.toScreen(e.end),a=Math.abs(e.end[0]-e.start[0]),l=Math.abs(e.end[1]-e.start[1]);return x`<g pointer-events="none">
        <rect class="fp3d-draft" x=${Math.min(n,s)} y=${Math.min(i,r)} width=${Math.abs(s-n)} height=${Math.abs(r-i)} />
        <text class="fp3d-dim" x=${(n+s)/2} y=${Math.min(i,r)-8}>${L(this.hass,a,2)} × ${L(this.hass,l,2)} m</text>
      </g>`}if(this._tool!=="polygon"&&this._tool!=="measure")return y;let t=[...this._draft,...this._cursor?[this._cursor]:[]].map(n=>this.toScreen(n));return x`<g pointer-events="none">
      ${t.length>1?x`<polyline class="fp3d-draft" points=${t.map(n=>n.join(",")).join(" ")} />`:y}
      ${this._tool==="measure"?this._draft.slice(1).map((n,i)=>{let s=this.toScreen(this._draft[i]),r=this.toScreen(n);return x`<text class="fp3d-dim" x=${(s[0]+r[0])/2} y=${(s[1]+r[1])/2-6}>${L(this.hass,Math.hypot(n[0]-this._draft[i][0],n[1]-this._draft[i][1]),2)} m</text>`}):y}
      ${this._draft.map((n,i)=>{let[s,r]=this.toScreen(n);return x`<circle class=${i===0&&this._draft.length>=3?"fp3d-draft-pt fp3d-draft-first":"fp3d-draft-pt"} cx=${s} cy=${r} r=${i===0&&this._draft.length>=3?9:5} />`})}
      ${this._cursor?x`<circle class="fp3d-cursor" cx=${this.toScreen(this._cursor)[0]} cy=${this.toScreen(this._cursor)[1]} r="4" />`:y}
    </g>`}renderGuides(){let e=this._guides,{w:t,h:n}=this._size;return x`<g pointer-events="none">
      ${e.x!==void 0?x`<line class="fp3d-guide" x1=${this.toScreen([e.x,0])[0]} y1="0" x2=${this.toScreen([e.x,0])[0]} y2=${n} />`:y}
      ${e.z!==void 0?x`<line class="fp3d-guide" x1="0" y1=${this.toScreen([0,e.z])[1]} x2=${t} y2=${this.toScreen([0,e.z])[1]} />`:y}
      ${e.point?x`<circle class="fp3d-snap" cx=${this.toScreen(e.point)[0]} cy=${this.toScreen(e.point)[1]} r="9" />`:y}
    </g>`}num(e,t,n,i=.01,s){return m`<label class="fp3d-field"
      >${e}
      <input
        type="number"
        inputmode="decimal"
        step=${i}
        min=${s??y}
        .value=${String(M(t))}
        ?disabled=${!this.isAdmin}
        @change=${r=>{let a=parseFloat(r.target.value.replace(",","."));Number.isFinite(a)&&n(a)}}
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
    </div>`}renderSide(e){let t=this._doc?.floors??[],n=this.room,i=this.isAdmin,s=Object.values(this.hass?.areas??{}).sort((a,l)=>a.name.localeCompare(l.name));if(this._tool==="furniture"&&e&&i)return m`${this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):y} ${this.renderFurnitureLibrary()}`;let r=this._tool==="measure"?null:this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.opening?this.renderOpeningForm(this.opening):this.device?this.renderDeviceForm(this.device):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):null;return r?m`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("room",this._roomId)}>‹ ${this.t(n?"back_to_room":"back_to_floor",{room:n?.name??""})}</button>
        ${r}`:n&&this._tool!=="measure"?m`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("room",null)}>‹ ${this.t("back_to_floor")}</button>
        ${this.renderRoomForm(n,s)} ${this.renderDeviceList(n)}`:m`
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
      ${this._tool==="measure"&&e?this.renderMeasureForm():this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.opening?this.renderOpeningForm(this.opening):this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.device?this.renderDeviceForm(this.device):n?m`${this.renderRoomForm(n,s)} ${this.renderDeviceList(n)}`:e?this.renderRoomList(e):y}
      ${i?this.renderEnergySettings():y}
      ${i?this.renderPresenceSettings():y}
      ${e&&i?this.renderBackgroundForm(e):y} ${i?this.renderSettings():y}
      ${i?this.renderBackup():y}
    `}renderRoomList(e){return e.rooms.length?m`<section>
      <h3>${this.t("rooms")}</h3>
      <div class="fp3d-room-list">
        ${e.rooms.map(t=>m`<button class="fp3d-row" @click=${()=>this.selectItem("room",t.id)}>
            <span>${t.name}</span><span class="fp3d-muted">${this.t("area_m2",{a:L(this.hass,me(t.points),1)})}</span>
          </button>`)}
      </div>
    </section>`:y}renderRoomForm(e,t){let n=this.isAdmin,i=yt(e.points),s=K(e.points);return m`<section>
      <h3>${this.t("room")}</h3>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("room_name")}
          <input .value=${e.name} ?disabled=${!n} @change=${r=>this.updateRoom({name:r.target.value})}
        /></label>
        <label class="fp3d-field fp3d-wide"
          >${this.t("area")}
          <select ?disabled=${!n} @change=${r=>this.setArea(r.target.value)}>
            <option value="" ?selected=${!e.area_id}>${this.t("no_area")}</option>
            ${t.map(r=>m`<option value=${r.area_id} ?selected=${r.area_id===e.area_id}>${r.name}</option>`)}
          </select></label
        >
        <label class="fp3d-field fp3d-wide"
          >${this.t("material")}
          <select ?disabled=${!n} @change=${r=>this.updateRoom({floor_material:r.target.value})}>
            ${vn.map(r=>m`<option value=${r} ?selected=${r===e.floor_material}>${this.t(`mat_${r}`)}</option>`)}
          </select></label
        >
        ${i?m`${this.num(this.t("x"),s.x0,r=>this.setRect("x",r))} ${this.num(this.t("z"),s.z0,r=>this.setRect("z",r))}
            ${this.num(this.t("width"),s.x1-s.x0,r=>this.setRect("w",r),.01,.05)}
            ${this.num(this.t("depth"),s.z1-s.z0,r=>this.setRect("d",r),.01,.05)}`:y}
      </div>
      <details class="fp3d-points" ?open=${!i}>
        <summary>${this.t("points")} (${e.points.length})</summary>
        ${e.points.map((r,a)=>m`<div class="fp3d-point ${a===this._vertex?"fp3d-point-sel":""}">
            <span class="fp3d-muted">${a+1}</span>
            ${this.num(this.t("x"),r[0],l=>this.setPoint(a,0,l))} ${this.num(this.t("z"),r[1],l=>this.setPoint(a,1,l))}
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
            ${Yn.map(r=>m`<button class="fp3d-btn" @click=${()=>this.applyPackage(e,r)}>
                <b>${this.t(`pkg_${r}`)}</b><span>${this.t(`pkg_${r}_desc`)}</span>
              </button>`)}
            <p class="fp3d-sub">${this.t("pkg_hint")}</p>
          </div>`:y}
    </section>`}applyPackage(e,t){if(!this.isAdmin)return;let n=Jn(e,t,()=>D("furniture"));this.change((i,s)=>s.furniture.push(...n)),this._packages=!1,this._notice=this.t("pkg_done",{n:n.length})}openSpotForm(e){let t=K(e.points),n=this.hass?_e(this.hass,e.area_id).filter(i=>i.startsWith("light.")):[];this._spots={type:"lamp_downlight",rows:Math.max(1,Math.round((t.z1-t.z0)/1.2)),cols:Math.max(1,Math.round((t.x1-t.x0)/1.2)),entity:n[0]??null}}placeSpots(e){let t=this._spots;if(!t||!this.isAdmin)return;let[n,i,s]=X[t.type],r=ft(e,t.rows,t.cols).map(([a,l])=>({id:D("furniture"),type:t.type,x:a,z:l,rotation:0,w:n,d:i,h:s,variant:null,entity:t.entity??"none",power:null}));this.change((a,l)=>l.furniture.push(...r)),this._spots=null,this._notice=this.t("spots_placed",{n:r.length})}renderSpotForm(e){let t=this._spots,n=ft(e,t.rows,t.cols).length,i=this.entityOptions(r=>/^(light|switch|input_boolean)\./.test(r)),s=r=>this._spots={...t,...r};return m`<div class="fp3d-form fp3d-spot-form">
      <label class="fp3d-field fp3d-wide"
        >${this.t("spots_type")}
        <select @change=${r=>s({type:r.target.value})}>
          ${["lamp_downlight","lamp_spot","lamp_panel","lamp_ceiling"].map(r=>m`<option value=${r} ?selected=${r===t.type}>${this.t(`furn_${r}`)}</option>`)}
        </select></label
      >
      ${this.num(this.t("spots_cols"),t.cols,r=>s({cols:Math.max(1,Math.min(12,Math.round(r)))}),1,1)}
      ${this.num(this.t("spots_rows"),t.rows,r=>s({rows:Math.max(1,Math.min(12,Math.round(r)))}),1,1)}
      ${this.entitySelect(this.t("furn_entity_light"),t.entity,void 0,i,r=>s({entity:r==="none"?null:r}))}
      <div class="fp3d-actions fp3d-wide">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!n} @click=${()=>this.placeSpots(e)}>${this.t("spots_add",{n})}</button>
        <button class="fp3d-btn" @click=${()=>this._spots=null}>${this.t("cancel")}</button>
      </div>
      <p class="fp3d-sub fp3d-wide">${this.t("spots_hint")}</p>
    </div>`}entityOptions(e){let t=n=>{let i=this.hass?.entities?.[n],s=i?.area_id??(i?.device_id?this.hass?.devices?.[i.device_id]?.area_id:null);return s?this.hass?.areas?.[s]?.name:void 0};return Object.keys(this.hass?.states??{}).filter(e).map(n=>({id:n,label:`${C(this.hass,n)}${t(n)?` \xB7 ${t(n)}`:""}`})).sort((n,i)=>n.label.localeCompare(i.label))}entitySelect(e,t,n,i,s){let r=n===void 0?null:n?this.t("entity_auto",{name:C(this.hass,n)}):this.t("entity_auto_none"),a=[...r!==null?[{id:"__auto",label:r}]:[],{id:"none",label:this.t("entity_none")}];return m`<label class="fp3d-field fp3d-wide"
      >${e}
      <fp3d-entity-picker
        .options=${i}
        .fixed=${a}
        .value=${t===null?r!==null?"__auto":"none":t}
        .placeholder=${this.t("entity_search")}
        ?disabled=${!this.isAdmin}
        @change=${c=>{c.stopPropagation(),s(c.detail.value==="__auto"?null:c.detail.value)}}
      ></fp3d-entity-picker></label
    >`}openingIsExterior(e){let t=this.floor,n=t?.rooms.find(s=>s.id===e.room_id);if(!t||!n)return!1;let i=Rt(t.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior});return It(i.walls,n,e.edge,e.offset)?.wall.exterior??!1}renderStyleSelect(e){let t=e.type==="door"?mt:_t,n=gt({type:e.type,style:null},this.openingIsExterior(e)),i=e.style&&t.includes(e.style)?e.style:"";return m`<label class="fp3d-field fp3d-wide"
      >${this.t("opening_style")}
      <select ?disabled=${!this.isAdmin} @change=${s=>this.updateOpening({style:s.target.value||null})}>
        <option value="" ?selected=${!i}>${this.t("style_auto",{style:this.t(`style_${n}`)})}</option>
        ${t.map(s=>m`<option value=${s} ?selected=${s===i}>${this.t(`style_${s}`)}</option>`)}
      </select></label
    >`}renderOpeningForm(e){let t=this.isAdmin,n=e.type==="window",i=e.type==="garage",s=f=>{if(!this.hass)return null;let v=structuredClone(this._doc.floors);for(let b of v)for(let g of b.openings)g.id===e.id&&(g[f]=null);return Bn(this.hass,v).get(e.id)?.[f]??null},r=f=>this.hass?.states[f]?.attributes.device_class,a=this.entityOptions(f=>f.startsWith("cover.")),l=this.entityOptions(f=>/^(sensor|number|input_number)\./.test(f)&&Number.isFinite(Number(this.hass?.states[f]?.state))),c=this.entityOptions(f=>f.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(r(f)??"")||f.startsWith("sensor.")&&xt(this.hass?.states[f])!==null),p=this.entityOptions(f=>{let v=this.hass?.states[f];return f.startsWith("binary_sensor.")?typeof v?.attributes.window_state=="string":f.startsWith("sensor.")&&(xt(v)!==null||/griff|handle|fenster|window|drehgriff/i.test(`${f} ${C(this.hass,f)}`))}),u=this.entityOptions(f=>f.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(r(f)??"")),_=f=>{let v=f===1,b=v?e.tilt:e.tilt2??null,g=v?e.contact:e.contact2,k=(v?e.sensor:e.sensor2)??(b&&b!=="none"?"contact_tilt":"contact"),$=w=>this.updateOpening(v?{contact:w}:{contact2:w==="none"?null:w});return m`<label class="fp3d-field fp3d-wide"
          >${this.t("sensor_kind")}
          <select
            ?disabled=${!t}
            @change=${w=>{let S=w.target.value,E=S==="contact_tilt"?{}:v?{tilt:null}:{tilt2:null};this.updateOpening({...v?{sensor:S}:{sensor2:S},...E})}}
          >
            ${["contact","handle","contact_tilt"].map(w=>m`<option value=${w} ?selected=${w===k}>${this.t(`sensor_kind_${w}`)}</option>`)}
          </select></label
        >
        ${k==="handle"?this.entitySelect(this.t("handle_entity"),g,void 0,p,w=>$(w==="none"?v?"none":null:w)):this.entitySelect(this.t("contact_entity"),g,v?s("contact"):void 0,u,$)}
        ${k==="contact_tilt"?this.entitySelect(this.t("tilt_entity"),b,void 0,c,w=>this.updateOpening(v?{tilt:w==="none"?null:w}:{tilt2:w==="none"?null:w})):y}`},h=vt(e),d=e.type==="door";return m`<section>
      <h3>${this.t(`preset_${h}`)}</h3>
      ${t?m`<div class="fp3d-presets" role="group" aria-label=${this.t("opening_type")}>
            ${Object.keys(He).map(f=>m`<button class="fp3d-chip" aria-pressed=${f===h} @click=${()=>this.setOpeningPreset(e,f)}>${this.t(`preset_${f}`)}</button>`)}
          </div>`:y}
      ${t&&!i?m`<div class="fp3d-actions">
            <button class="fp3d-btn" title=${this.t("flip_hinge_hint")} @click=${()=>this.updateOpening({hinge:e.hinge==="left"?"right":"left"})}>
              ⇆ ${this.t(e.leaves===2?"flip_main_leaf":"flip_hinge")}
            </button>
            ${d?m`<button class="fp3d-btn" title=${this.t("flip_swing_hint")} @click=${()=>this.updateOpening({swing:e.swing==="out"?"in":"out"})}>
                  ⇅ ${this.t("flip_swing")}
                </button>`:y}
          </div>`:y}
      <div class="fp3d-form">
        ${this.num(this.t("width"),e.width,f=>this.updateOpening({width:Math.max(.3,f)}),.01,.3)}
        ${this.num(this.t("opening_position"),e.offset,f=>this.updateOpening({offset:Math.max(0,f)}),.01,0)}
        ${n?this.num(this.t("sill"),e.sill,f=>this.updateOpening({sill:Math.max(0,f)}),.01,0):y}
        ${this.num(this.t("opening_height"),e.height,f=>this.updateOpening({height:Math.max(.3,f)}),.01,.3)}
        ${i?y:this.renderStyleSelect(e)}
        ${i?y:m`<label class="fp3d-field fp3d-wide"
          >${this.t(e.leaves===2?"main_leaf":"hinge")}
          <select ?disabled=${!t} @change=${f=>this.updateOpening({hinge:f.target.value})}>
            <option value="left" ?selected=${e.hinge==="left"}>${this.t("hinge_left")}</option>
            <option value="right" ?selected=${e.hinge==="right"}>${this.t("hinge_right")}</option>
          </select></label
        >`}
        ${n||i?this.entitySelect(this.t("cover_entity"),e.cover,s("cover"),a,f=>this.updateOpening({cover:f})):y}
        ${(n||i)&&e.cover!=="none"?m`${this.entitySelect(this.t("cover_position_entity"),e.position??null,void 0,l,f=>this.updateOpening({position:f==="none"?null:f}))}
              ${e.position?m`<label class="fp3d-check fp3d-wide"
                    ><input
                      type="checkbox"
                      ?disabled=${!t}
                      .checked=${!!e.position_inverted}
                      @change=${f=>this.updateOpening({position_inverted:f.target.checked})}
                    />
                    ${this.t("cover_position_invert")}</label
                  >`:y}`:y}
        ${n?m`${e.leaves===2?m`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_main")}</h4>`:y}
              ${_(1)} ${e.leaves===2?m`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_second")}</h4>${_(2)}`:y}`:m`${this.entitySelect(this.t(e.leaves===2?"contact_main":"contact_entity"),e.contact,s("contact"),c,f=>this.updateOpening({contact:f}))}
              ${e.leaves===2&&!i?this.entitySelect(this.t("contact_second"),e.contact2,void 0,c,f=>this.updateOpening({contact2:f==="none"?null:f})):y}`}
      </div>
      <p class="fp3d-sub">${this.t(n?"opening_hint":i?"garage_hint":"door_hint")}</p>
      ${t?m`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOpening()}>${this.t("delete")}</button></div>`:y}
    </section>`}renderFurnitureForm(e){let t=this.isAdmin;return m`<section>
      <h3>${this.t("furniture")}</h3>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("furniture_type")}
          <select ?disabled=${!t} @change=${n=>this.updateFurniture({type:n.target.value})}>
            ${Sn.map(n=>m`<option value=${n} ?selected=${n===e.type}>${this.t(`furn_${n}`)}</option>`)}
            ${(this.packs??[]).map(n=>m`<optgroup label=${n.name}>
                ${n.items.map(i=>{let s=Se(n.id,i.id);return m`<option value=${s} ?selected=${s===e.type}>${ue(i,this.hass?.language??"en")}</option>`})}
              </optgroup>`)}
            ${e.type.startsWith("pack:")&&!(this.packs??[]).some(n=>e.type.startsWith(`pack:${n.id}:`))?m`<option value=${e.type} selected>${Re(this.hass,e.type)}</option>`:y}
          </select></label
        >
        ${this.num(this.t("x"),e.x,n=>this.updateFurniture({x:n}))} ${this.num(this.t("z"),e.z,n=>this.updateFurniture({z:n}))}
        ${this.num(this.t("width"),e.w,n=>this.updateFurniture({w:Math.max(.05,n)}),.01,.05)}
        ${this.num(this.t("depth"),e.d,n=>this.updateFurniture({d:Math.max(.05,n)}),.01,.05)}
        ${this.num(this.t("height_m"),e.h,n=>this.updateFurniture({h:Math.max(.005,n)}),.01,0)}
        ${this.num(this.t("rotation"),e.rotation,n=>this.updateFurniture({rotation:(n%360+360)%360}),1)}
        ${ut(e)&&this.floor?m`${this.num(this.t("mount_height"),e.mount_y??pt(this.floor,e),n=>this.updateFurniture({mount_y:Math.max(0,n)}),.01,0)}
              ${e.mount_y!=null?m`<button class="fp3d-btn fp3d-field-btn" ?disabled=${!t} @click=${()=>this.updateFurniture({mount_y:null})}>${this.t("height_auto")}</button>`:y}`:y}
      </div>
      ${e.type==="stairs"?m`<p class="fp3d-sub">${this.t("stairs_hint")}</p>`:y}
      ${e.type==="stairwell"?m`<p class="fp3d-sub">${this.t("stairwell_hint")}</p>`:y}
      ${e.type==="lamp_pendant"?m`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("pendant_shape")}
              <select ?disabled=${!t} @change=${n=>this.updateFurniture({variant:n.target.value||null})}>
                ${["","globe","cone","drum"].map(n=>m`<option value=${n} ?selected=${(e.variant??"")===n}>${this.t(`pendant_${n||"shade"}`)}</option>`)}
              </select></label
            >
          </div>`:y}
      ${dt(e.type)?this.renderFurnitureLinks(e):y} ${e.type==="parking"?this.renderParkingForm(e):y}
      ${t?m`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.rotateFurniture(-90)}>${this.t("rotate_left")}</button>
            <button class="fp3d-btn" @click=${()=>this.rotateFurniture(90)}>${this.t("rotate_right")}</button>
            <button class="fp3d-btn" @click=${()=>this.duplicateFurniture()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
          </div>`:y}
    </section>`}setEnergy(e){let t=structuredClone(this._doc);t.energy={...t.energy,...e},this.setDoc(t)}renderEnergySettings(){let e=this._doc.energy,t=(l,c)=>this.hass?.states[l]?.attributes[c],n=this.entityOptions(l=>l.startsWith("sensor.")&&t(l,"device_class")==="power"),i=this.entityOptions(l=>l.startsWith("sensor.")&&t(l,"device_class")==="battery"),s=this.entityOptions(l=>l.startsWith("sensor.")&&(t(l,"device_class")==="monetary"||/\/(kWh|MWh)$/.test(t(l,"unit_of_measurement")??""))),r=l=>c=>this.setEnergy({[l]:c==="none"?null:c}),a=e.meter?this._doc.floors.find(l=>l.id===e.meter.floor_id)?.name:null;return m`<details class="fp3d-section">
      <summary>${this.t("energy")}</summary>
      <div class="fp3d-form">
        <div class="fp3d-actions fp3d-wide">
          <button class="fp3d-btn ${this._tool==="meter"?"fp3d-primary":""}" ?disabled=${!this.floor} @click=${()=>this._tool="meter"}>
            ${this.t("energy_meter_set")}
          </button>
          ${e.meter?m`<button class="fp3d-btn fp3d-danger" @click=${()=>this.setEnergy({meter:null})}>${this.t("energy_meter_remove")}</button>`:y}
        </div>
        <p class="fp3d-sub fp3d-wide">
          ${e.meter?`${this.t("energy_meter")}: ${a??""} \xB7 ${L(this.hass,e.meter.x,2)} / ${L(this.hass,e.meter.z,2)} m`:this.t("energy_meter_hint")}
        </p>
        ${this.entitySelect(this.t("energy_grid"),e.grid,void 0,n,r("grid"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${e.grid_invert} @change=${l=>this.setEnergy({grid_invert:l.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_solar_sensor"),e.solar,void 0,n,r("solar"))}
        ${this.entitySelect(this.t("energy_battery_sensor"),e.battery,void 0,n,r("battery"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${e.battery_invert} @change=${l=>this.setEnergy({battery_invert:l.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_battery_soc"),e.battery_soc,void 0,i,r("battery_soc"))}
        ${this.entitySelect(this.t("energy_tariff_sensor"),e.tariff,void 0,s,r("tariff"))}
      </div>
      <p class="fp3d-sub">${this.t("energy_hint")}</p>
    </details>`}renderPresenceSettings(){let e=Object.keys(this.hass?.states??{}).filter(i=>i.startsWith("person.")).sort(),t=i=>{let s=i.slice(7),r=this.entityOptions(l=>l.startsWith("sensor.")),a=l=>l.includes(s)&&/(area|room|raum|bermuda|espresense)/.test(l);return[...r.filter(l=>a(l.id)),...r.filter(l=>!a(l.id))]},n=(i,s)=>{let r=structuredClone(this._doc);r.presence=r.presence.filter(a=>a.person!==i),s&&s!=="none"&&r.presence.push({person:i,sensor:s}),this.setDoc(r)};return m`<details class="fp3d-section">
      <summary>${this.t("presence")}</summary>
      <div class="fp3d-form">
        ${e.length?e.map(i=>this.entitySelect(`${C(this.hass,i)} \xB7 ${this.t("presence_sensor")}`,this._doc.presence.find(s=>s.person===i)?.sensor??null,void 0,t(i),s=>n(i,s))):m`<p class="fp3d-sub fp3d-wide">${this.t("no_persons")}</p>`}
      </div>
      <p class="fp3d-sub">${this.t("presence_hint")}</p>
    </details>`}renderFurnitureLinks(e){if(!this.hass)return y;let t=this.hass,n=c=>{let p=structuredClone(this._doc.floors);for(let u of p)for(let _ of u.furniture)_.id===e.id&&(_[c]=null);return Vn(t,p).get(e.id)?.[c]??null},i=Be(e.type),s=ee(e.type),r=this.entityOptions(c=>s?/^(light|switch|input_boolean)\./.test(c):i?c.startsWith("media_player."):e.type==="radiator"?c.startsWith("climate."):e.type==="robot_vacuum"?c.startsWith("vacuum."):/^(switch|media_player|fan|input_boolean|climate)\./.test(c)),a=this.entityOptions(c=>c.startsWith("sensor.")&&t.states[c]?.attributes.device_class==="power"),l=e.type==="fridge_smart"?this.entityOptions(c=>c.startsWith("binary_sensor.")):[];return m`<div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t(s?"furn_entity_light":i?"furn_entity_tv":e.type==="radiator"?"furn_entity_climate":e.type==="robot_vacuum"?"furn_entity_vacuum":"furn_entity"),e.entity??null,n("entity"),r,c=>this.updateFurniture({entity:c}))}
        ${s?y:this.entitySelect(this.t("furn_power"),e.power??null,n("power"),a,c=>this.updateFurniture({power:c}))}
      </div>
      ${!s||e.entity?m`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
            ><input type="checkbox" .checked=${!!e.confirm} ?disabled=${!this.isAdmin} @change=${c=>this.updateFurniture({confirm:c.target.checked})} />
            ${this.t("device_confirm")}</label
          >`:y}
      ${e.type==="fridge_smart"?m`<div class="fp3d-form fp3d-links">
              ${this.entitySelect(this.t("furn_door_left"),e.door_left??null,void 0,l,c=>this.updateFurniture({door_left:c}))}
              ${this.entitySelect(this.t("furn_door_right"),e.door_right??null,void 0,l,c=>this.updateFurniture({door_right:c}))}
            </div>
            <p class="fp3d-sub">${this.t("fridge_hint")}</p>`:y}
      ${Nn(e.type)?this.renderPictureRules(e):y}
      <p class="fp3d-sub">${this.t(s?e.type==="lamp_pendant"?"lamp_hint_pendant":"lamp_hint":i?"furn_links_hint_tv":e.type==="robot_vacuum"?"robot_hint":"furn_links_hint")}</p>`}renderParkingForm(e){let t=this.isAdmin,n=this.hass?.language??"en",i=(this.packs??[]).flatMap(b=>b.items.filter(g=>g.vehicle).map(g=>({id:Se(b.id,g.id),label:`${ue(g,n)} \xB7 ${b.name}`}))),s=this.entityOptions(b=>/^(binary_sensor|device_tracker|input_boolean|switch|sensor)\./.test(b)),r=this.entityOptions(b=>/^(sensor|input_select|select|input_text)\./.test(b)),a=e.type_entity?this.hass?.states[e.type_entity]:void 0,l=Array.isArray(a?.attributes.options)?a.attributes.options:[],c=e.types??[],p=b=>this.updateFurniture({types:b}),u=(b,g)=>m`<select ?disabled=${!t} @change=${k=>g(k.target.value||null)}>
        <option value="" ?selected=${!b}>${this.t("parking_vehicle_none")}</option>
        ${i.map(k=>m`<option value=${k.id} ?selected=${k.id===b}>${k.label}</option>`)}
      </select>`,_=this.floor,h=_?.rooms.find(b=>b.points.length>=3&&O([e.x,e.z],b.points)),d=e.vehicle?H(e.vehicle):void 0,f=d?d.size[2]*(e.scale??1):0,v=!!h&&!!_&&f>_.height+1e-6;return m`<div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t("parking_entity"),e.entity??null,void 0,s,b=>this.updateFurniture({entity:b==="none"?null:b}))}
        <label class="fp3d-field fp3d-wide">${this.t("parking_vehicle")} ${u(e.vehicle??null,b=>this.updateFurniture({vehicle:b}))}</label>
        ${i.length?y:m`<p class="fp3d-sub fp3d-wide">${this.t("parking_no_pack")}</p>`}
        ${this.num(this.t("parking_scale"),Math.round((e.scale??1)*100),b=>this.updateFurniture({scale:Math.min(150,Math.max(30,b))/100}),5,30)}
        ${this.entitySelect(this.t("parking_type_entity"),e.type_entity??null,void 0,r,b=>this.updateFurniture({type_entity:b==="none"?null:b}))}
        ${e.type_entity?m`<div class="fp3d-wide">
              <div class="fp3d-sub">${this.t("parking_types")}</div>
              ${c.map((b,g)=>m`<div class="fp3d-parking-row">
                  <input
                    type="text"
                    list="fp3d-parking-states"
                    placeholder=${this.t("parking_type_state")}
                    .value=${b.state}
                    ?disabled=${!t}
                    @change=${k=>p(c.map(($,w)=>w===g?{...$,state:k.target.value}:$))}
                  />
                  ${u(b.vehicle,k=>p(c.map(($,w)=>w===g?{...$,vehicle:k??""}:$)))}
                  <button class="fp3d-btn" ?disabled=${!t} title=${this.t("delete")} @click=${()=>p(c.filter((k,$)=>$!==g))}>✕</button>
                </div>`)}
              <datalist id="fp3d-parking-states">${l.map(b=>m`<option value=${b}></option>`)}</datalist>
              ${t?m`<button class="fp3d-btn" @click=${()=>p([...c,{state:l[c.length]??"",vehicle:i[0]?.id??""}])}>${this.t("parking_add_type")}</button>`:y}
            </div>`:y}
      </div>
      ${v?m`<p class="fp3d-sub fp3d-warn">${this.t("parking_too_tall",{car:L(this.hass,f,2),room:L(this.hass,_.height,2)})}</p>`:y}
      <p class="fp3d-sub">${this.t("parking_hint")}</p>`}toggleLibrary(e){let t=new Set(this._libOpen);t.has(e)?t.delete(e):t.add(e),this._libOpen=t;try{localStorage.setItem("neonplan3d.library",JSON.stringify([...t]))}catch{}}librarySection(e,t,n,i){let s=i?n.filter(a=>a.label.toLowerCase().includes(i)):n;if(i&&!s.length)return y;let r=i?!0:this._libOpen.has(e);return m`<button class="fp3d-lib-head fp3d-lib-toggle" aria-expanded=${r} @click=${()=>this.toggleLibrary(e)}>
        <span class="fp3d-lib-caret">${r?"\u25BE":"\u25B8"}</span>${t} <span class="fp3d-lib-count">${s.length}</span>
      </button>
      ${r?m`<div class="fp3d-library">${s.map(a=>this.libraryButton(a.type,a.label))}</div>`:y}`}storedPictures(){let e=[];for(let t of this._doc.floors)for(let n of t.furniture)for(let i of n.pictures??[])i.image&&!/^https?:\/\//.test(i.image)&&!i.image.startsWith("camera:")&&!e.includes(i.image)&&e.push(i.image);return e}renderPictureRules(e){let t=this.isAdmin,n=e.pictures??[],i=b=>this.updateFurniture({pictures:b}),s=this.entityOptions(()=>!0),r=b=>["string","number","boolean"].includes(typeof b),a=b=>Object.entries(this.hass?.states[b]?.attributes??{}).filter(([g,k])=>r(k)&&g!=="friendly_name"&&g!=="icon").map(([g])=>g),l=(b,g)=>{let k=this.hass?.states[b];return k?String((g?k.attributes[g]:k.state)??""):""},c=(b,g)=>{let k=this.hass?.states[b],$=!g&&Array.isArray(k?.attributes.options)?k.attributes.options:[];return $.length?$:[l(b,g)]},p=b=>`${b.entity}\0${b.attribute??""}`,u=[];n.forEach((b,g)=>{let k=u.find($=>p($)===p(b));k?k.rows.push(g):u.push({entity:b.entity,attribute:b.attribute??null,rows:[g]})});let _=(b,g)=>i(n.map((k,$)=>b.rows.includes($)?{...k,...g}:k)),h=(b,g)=>i(n.map((k,$)=>$===b?{...k,...g}:k)),d=this.storedPictures(),f=this.entityOptions(b=>b.startsWith("camera.")),v=b=>b.image.startsWith("camera:")?b.image.slice(7):null;return m`<div class="fp3d-wide">
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
            .options=${s}
            .value=${b.entity}
            .placeholder=${this.t("entity_search")}
            ?disabled=${!t}
            @change=${g=>{g.stopPropagation(),_(b,{entity:g.detail.value})}}
          ></fp3d-entity-picker>
          <select
            ?disabled=${!t}
            title=${this.t("picture_attribute")}
            @change=${g=>{let k=g.target.value||null,$=l(b.entity,k);i(n.map((w,S)=>b.rows.includes(S)?{...w,attribute:k,state:b.rows[0]===S?$:w.state}:w))}}
          >
            <option value="" ?selected=${!b.attribute}>${this.t("picture_state_of")}</option>
            ${a(b.entity).map(g=>m`<option value=${g} ?selected=${g===b.attribute}>${g}</option>`)}
          </select>
          <span class="fp3d-sub fp3d-rule-now">${this.t("picture_current",{value:l(b.entity,b.attribute)||"\u2013"})}</span>
          ${b.rows.map(g=>{let k=n[g],$=!!this.hass&&Cn(this.hass,k);return m`<div class="fp3d-picture-row ${$?"fp3d-rule-hit":""}">
              <input
                type="text"
                list="fp3d-picture-states-${g}"
                placeholder=${this.t("picture_state")}
                .value=${k.state}
                ?disabled=${!t}
                @change=${w=>h(g,{state:w.target.value})}
              />
              <datalist id="fp3d-picture-states-${g}"><option value="*"></option>${c(b.entity,b.attribute).map(w=>m`<option value=${w}></option>`)}</datalist>
              ${this._images[k.image]?m`<img class="fp3d-picture-thumb" src=${this._images[k.image].url} alt="" /> `:y}
              ${v(k)&&this.hass?.states[v(k)]?.attributes.entity_picture?m`<img class="fp3d-picture-thumb" src=${String(this.hass.states[v(k)].attributes.entity_picture)} alt="" />`:y}
              <label class="fp3d-btn fp3d-picture-pick">
                ${k.image?this.t("picture_change"):this.t("picture_pick")}
                <input type="file" accept="image/*" hidden ?disabled=${!t} @change=${w=>{this.uploadPicture(w,e,g)}} />
              </label>
              ${d.filter(w=>w!==k.image).length?m`<div class="fp3d-picture-reuse" title=${this.t("picture_reuse")}>
                    ${d.filter(w=>w!==k.image&&this._images[w]).map(w=>m`<button class="fp3d-picture-reuse-btn" ?disabled=${!t} @click=${()=>h(g,{image:w})}><img src=${this._images[w].url} alt="" /></button>`)}
                  </div>`:y}
              <input
                type="url"
                placeholder=${this.t("picture_url")}
                .value=${/^https?:\/\//.test(k.image)?k.image:""}
                ?disabled=${!t}
                @change=${w=>{let S=w.target.value.trim();S&&h(g,{image:S})}}
              />
              ${f.length?m`<fp3d-entity-picker
                    class="fp3d-picture-camera"
                    .options=${f}
                    .fixed=${[{id:"none",label:this.t("picture_camera_none")}]}
                    .value=${v(k)??"none"}
                    .placeholder=${this.t("picture_camera")}
                    ?disabled=${!t}
                    @change=${w=>{w.stopPropagation(),w.detail.value!=="none"?h(g,{image:`camera:${w.detail.value}`}):v(k)&&h(g,{image:""})}}
                  ></fp3d-entity-picker>`:y}
              <span class="fp3d-sub">${$?this.t("picture_matches"):""}</span>
              <button class="fp3d-btn" ?disabled=${!t} title=${this.t("delete")} @click=${()=>i(n.filter((w,S)=>S!==g))}>✕</button>
            </div>`})}
          ${t?m`<button class="fp3d-btn" @click=${()=>i([...n,{entity:b.entity,attribute:b.attribute,state:l(b.entity,b.attribute),image:""}])}>
                ${this.t("picture_add_value")}
              </button>`:y}
        </div>`)}
      ${t?m`<button class="fp3d-btn" @click=${()=>i([...n,{entity:s[0]?.id??"",attribute:null,state:"on",image:""}])}>${this.t("picture_add_entity")}</button>`:y}
      <p class="fp3d-sub">${this.t("screen_pictures_hint")}</p>
    </div>`}async uploadPicture(e,t,n){let i=e.target,s=i.files?.[0];if(i.value="",!s)return;let r=await createImageBitmap(s),a=Math.min(1,512/Math.max(r.width,r.height)),l=document.createElement("canvas");l.width=Math.round(r.width*a),l.height=Math.round(r.height*a),l.getContext("2d").drawImage(r,0,0,l.width,l.height);let c=l.toDataURL(s.type==="image/png"?"image/png":"image/jpeg",.85),p=D("pic");await Le(this.hass,p,c),this._images={...this._images,[p]:{url:c,aspect:l.height/l.width}};let u=this.furnitureItem?.id===t.id?this.furnitureItem.pictures??[]:t.pictures??[];this.updateFurniture({pictures:u.map((_,h)=>h===n?{..._,image:p}:_)})}renderFurnitureLibrary(){let e=this.room,t=this._furnQuery.trim().toLowerCase(),n=this.hass?.language??"en";return m`<section>
      <h3>${this.t("furniture_add")}</h3>
      <p class="fp3d-sub">${e?this.t("furniture_into",{room:e.name}):this.t("furniture_pick_room")}</p>
      <input
        class="fp3d-search"
        type="search"
        placeholder=${this.t("furniture_search")}
        .value=${this._furnQuery}
        @input=${i=>this._furnQuery=i.target.value}
      />
      ${Object.entries(Mn).map(([i,s])=>this.librarySection(`group:${i}`,this.t(`furn_group_${i}`),s.map(r=>({type:r,label:this.t(`furn_${r}`)})),t))}
      ${(this.packs??[]).map(i=>this.librarySection(`pack:${i.id}`,i.name,i.items.map(s=>({type:Se(i.id,s.id),label:ue(s,n)})),t))}
    </section>
    ${this.renderPacks()}`}libraryButton(e,t){let n=s=>{this.showPreview(e,s.currentTarget)},i=ee(e)?"light":dt(e)?"switch":null;return m`<button
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
            <path d=${Pe(i)} />
          </svg>`:y}
    </button>`}async showPreview(e,t){let n=t.getBoundingClientRect(),i={left:Math.max(8,n.left-196),top:Math.max(8,Math.min(window.innerHeight-200,n.top+n.height/2-95))};this._preview={type:e,url:null,...i};try{let s=await ri(),[r,a,l]=ct(e),c=s.furniturePreview({type:e,w:r,d:a,h:l,variant:null,lamp:zn[e]??null},180,this.packs??[]);this._preview?.type===e&&(this._preview={type:e,url:c,...i})}catch{this._preview=null}}renderPreview(){let e=this._preview;return e?m`<div class="fp3d-preview" style="left:${e.left}px;top:${e.top}px" aria-hidden="true">
      ${e.url?m`<img src=${e.url} alt="" />`:m`<span class="fp3d-preview-wait"></span>`}
      <b>${Re(this.hass,e.type)}</b>
    </div>`:y}async loadLicense(){if(!(!this.hass||this.licenseLoading)){this.licenseLoading=!0;try{this._license=await rt(this.hass)}catch{this._license=null}finally{this.licenseLoading=!1}}}async shopCall(e,t,n){this._licenseBusy=e,this._licenseMsg=null;try{this._license=await t(),n&&(this._licenseMsg={ok:!0,text:n})}catch(i){let{code:s,message:r}=i??{},a=`license_error_${s}`,l=this.t(a);this._licenseMsg={ok:!1,text:l===a?this.t("license_error_other",{detail:r??String(i)}):l}}finally{this._licenseBusy=null}}async installFromShop(e){if(!this.hass)return;let t=this.hass;await this.shopCall(e.id,async()=>{let n=await hn(t,e.id);return this._packMsg={ok:!0,text:this.t("pack_imported",{name:n.name,publisher:n.publisher,n:n.items})},this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0})),rt(t)})}renderShop(){let e=this._license;if(!this.isAdmin||!this.hass)return y;if(!e)return this.loadLicense(),y;let t=this.hass,n=this._licenseBusy,i=e.checked_at?new Date(e.checked_at*1e3).toLocaleString(t.language):null;return m`<div class="fp3d-shop">
      <div class="fp3d-sub">${this.t("license_title")}</div>
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
              <button class="fp3d-btn" ?disabled=${!!n} @click=${()=>this.shopCall("refresh",()=>cn(t),this.t("license_refreshed"))}>
                ${n==="refresh"?"\u2026":this.t("license_refresh")}
              </button>
              <button class="fp3d-btn fp3d-danger" ?disabled=${!!n} @click=${()=>confirm(this.t("license_remove_confirm"))&&this.shopCall("remove",()=>ln(t))}>
                ${this.t("license_remove")}
              </button>
            </div>
            ${e.error?m`<p class="fp3d-sub fp3d-pack-error">${this.t(`license_error_${e.error}`)}</p>`:y}
            ${e.packs.length?e.packs.map(s=>{let r=s.installed===null?"install":s.installed<s.release?"update":"installed";return m`<div class="fp3d-pack">
                    <div>
                      <b>${s.name}</b>
                      <span class="fp3d-sub">${r==="installed"?this.t("license_installed",{release:s.release}):r==="update"?this.t("license_update_available",{release:s.release}):this.t("license_not_installed")}</span>
                    </div>
                    ${r==="installed"?y:m`<button class="fp3d-btn fp3d-primary" ?disabled=${!!n} @click=${()=>this.installFromShop(s)}>
                          ${n===s.id?"\u2026":this.t(r==="update"?"license_update":"license_install")}
                        </button>`}
                  </div>`}):m`<p class="fp3d-sub">${this.t("license_none")}</p>`}`:m`<div class="fp3d-shop-row">
            <input
              type="text"
              class="fp3d-shop-key"
              placeholder="NP-XXXX-XXXX-XXXX-XXXX"
              autocomplete="off"
              spellcheck="false"
              .value=${this._licenseKey}
              @input=${s=>this._licenseKey=s.target.value}
              @keydown=${s=>{s.key==="Enter"&&this._licenseKey.trim()&&this.shopCall("activate",()=>ot(t,this._licenseKey),this.t("license_activated"))}}
            />
            <button class="fp3d-btn fp3d-primary" ?disabled=${!!n||!this._licenseKey.trim()} @click=${()=>this.shopCall("activate",()=>ot(t,this._licenseKey),this.t("license_activated"))}>
              ${n==="activate"?"\u2026":this.t("license_activate")}
            </button>
          </div>`}
      ${this._licenseMsg?m`<p class="fp3d-sub ${this._licenseMsg.ok?"fp3d-notice":"fp3d-pack-error"}">${this._licenseMsg.text}</p>`:y}
      <p class="fp3d-sub">${this.t("license_hint")} <a href=${e.shop_url} target="_blank" rel="noopener">${this.t("license_shop")}</a></p>
    </div>`}renderPacks(){let e=this.packs??[];return m`<section>
      <h3>${this.t("packs")}</h3>
      ${e.map(t=>m`<div class="fp3d-pack">
          <div>
            <b>${t.name}</b>
            <span class="fp3d-sub">${this.t("pack_by",{publisher:t.publisher,n:t.items.length})}</span>
            ${t.licensee?m`<span class="fp3d-sub">${this.t("pack_licensed",{name:t.licensee})}${t.release&&t.release>1?` \xB7 v${t.release}`:""}</span>`:y}
          </div>
          <button class="fp3d-btn fp3d-danger" @click=${()=>this.deletePack(t)}>${this.t("pack_remove")}</button>
        </div>`)}
      ${this.renderShop()}
      <label class="fp3d-btn fp3d-primary fp3d-pack-import">
        ${this.t("pack_import")}
        <input type="file" accept=".fp3dpack,.json,application/json" multiple hidden @change=${t=>this.importPackFile(t)} />
      </label>
      ${this._packMsg?m`<p class="fp3d-sub ${this._packMsg.ok?"fp3d-notice":"fp3d-pack-error"}">${this._packMsg.text}</p>`:y}
      <p class="fp3d-sub">${this.t("packs_hint")}</p>
    </section>`}async importPackFile(e){let t=e.target,n=[...t.files??[]];if(t.value="",!n.length||!this.hass)return;let i=[],s=[];for(let a of n)try{let l=await on(this.hass,await a.text());i.push(this.t("pack_imported",{name:l.name,publisher:l.publisher,n:l.items}))}catch(l){let{code:c,message:p}=l??{},u=`pack_error_${c}`,_=this.t(u,{detail:p??String(l)});s.push(`${a.name}: ${_===u?this.t("pack_error_other",{detail:p??String(l)}):_}`)}i.length&&this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let r=n.length>1?[this.t("packs_imported_n",{n:i.length,total:n.length})]:[];this._packMsg={ok:s.length===0,text:[...r,...i,...s].join(" \xB7 ")}}async deletePack(e){!this.hass||!confirm(this.t("pack_remove_confirm",{name:e.name}))||(await an(this.hass,e.id),this._packMsg=null,this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0})))}renderDeviceForm(e){let t=this.isAdmin,n=T(e.entity_id),i=n==="light",s=e.mount??"ceiling",r=n?$t(n,this.floor?.height??2.5,i?s:null):1;return m`<section>
      <h3>${this.t("device")}</h3>
      <p class="fp3d-dev-title">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d=${n?Pe(n):""} />
        </svg>
        ${C(this.hass,e.entity_id)}
      </p>
      <div class="fp3d-form">
        ${i?m`<label class="fp3d-field fp3d-wide"
              >${this.t("lamp_mount")}
              <select ?disabled=${!t} @change=${a=>this.updateDevice({mount:a.target.value,y:null})}>
                ${["ceiling","floor","table","wall"].map(a=>m`<option value=${a} ?selected=${a===s}>${this.t(`lamp_${a}`)}</option>`)}
              </select></label
            >`:n==="camera"?m`<label class="fp3d-field fp3d-wide"
                >${this.t("camera_mount")}
                <select ?disabled=${!t} @change=${a=>this.updateDevice({mount:a.target.value,y:null})}>
                  <option value="wall" ?selected=${(e.mount??"wall")==="wall"}>${this.t("camera_mount_wall")}</option>
                  <option value="ceiling" ?selected=${e.mount==="ceiling"}>${this.t("camera_mount_ceiling")}</option>
                </select></label
              >`:y}
        ${this.num(this.t("x"),e.x,a=>this.updateDevice({x:a}))} ${this.num(this.t("z"),e.z,a=>this.updateDevice({z:a}))}
        ${this.num(this.t("marker_height"),e.y??r,a=>this.updateDevice({y:Math.max(0,a)}),.05,0)}
        ${this.num(this.t("rotation"),e.rotation??0,a=>this.updateDevice({rotation:(a%360+360)%360}),1)}
        ${n==="camera"?m`${this.num(this.t("camera_fov"),e.fov??(e.mount==="ceiling"?360:90),a=>this.updateDevice({fov:Math.min(360,Math.max(10,a))}),5,10)}
            ${this.num(this.t("camera_reach"),e.reach??(e.mount==="ceiling"?3:4.5),a=>this.updateDevice({reach:Math.min(50,Math.max(.5,a))}),.5,.5)}
            ${this.num(this.t("camera_tilt"),e.tilt??(e.mount==="ceiling"?65:20),a=>this.updateDevice({tilt:Math.min(90,Math.max(0,a))}),5,0)}
            <p class="fp3d-sub fp3d-wide">${this.t("camera_aim_hint")}</p>`:y}
        ${n&&On.has(n)?m`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
              ><input type="checkbox" .checked=${!!e.confirm} ?disabled=${!t} @change=${a=>this.updateDevice({confirm:a.target.checked})} />
              ${this.t("device_confirm")}</label
            >`:y}
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
    </section>`}renderDeviceList(e){let t=this.isAdmin,n=this.hass,i=e.area_id?n?.areas?.[e.area_id]?.name:void 0,s=n?_e(n,e.area_id).filter(d=>Dn(T(d))):[],r=new Set([...this.floor?.placements.filter(d=>O([d.x,d.z],e.points)).map(d=>d.entity_id)??[],...this.floor?.furniture.filter(d=>ee(d.type)&&d.entity&&O([d.x,d.z],e.points)).map(d=>d.entity)??[]]),a=n?St(n,s):[],l=a.map(d=>d.primary).filter(d=>!r.has(d)),c=this._deviceQuery.trim().toLowerCase(),p=d=>!c||C(n,d,i).toLowerCase().includes(c)||d.includes(c),u=this.floor?.placements.filter(d=>T(d.entity_id)==="light"&&(d.mount??"ceiling")==="ceiling"&&O([d.x,d.z],e.points)).length,_=new Set(e.panel??[]),h=(d,f=!1)=>{let v=r.has(d);return m`<div class="fp3d-row fp3d-dev-row ${f?"fp3d-dev-extra":""}">
        <button class="fp3d-dev-name ${v?"":"fp3d-muted"}" ?disabled=${!v} @click=${()=>this.selectItem("device",d)}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${Pe(T(d))} />
          </svg>
          <span>${C(n,d,i)}</span>
        </button>
        ${t&&!v?m`<button
              class="fp3d-pin ${_.has(d)?"fp3d-pin-on":""}"
              aria-pressed=${_.has(d)}
              title=${this.t(_.has(d)?"panel_unpin":"panel_pin")}
              @click=${()=>this.updateRoom({panel:_.has(d)?[..._].filter(b=>b!==d):[..._,d]})}
            >
              ${_.has(d)?"\u2605":"\u2606"}
            </button>`:y}
        ${t?v?m`<button class="fp3d-link" @click=${()=>this.removeDevice(d)}>${this.t("devices_remove")}</button>`:m`<button class="fp3d-link" @click=${()=>this.placeDevices([d])}>${this.t("devices_place")}</button>`:y}
      </div>`};return m`<section>
      <h3>${this.t("devices")}</h3>
      <p class="fp3d-sub">${this.t("devices_panel_hint")}</p>
      ${e.area_id?s.length?m`${t&&l.length?m`<button class="fp3d-btn fp3d-primary fp3d-wide-btn" @click=${()=>this.placeDevices(l)}>${this.t("devices_place_all")}</button>`:y}
              ${t&&(u??0)>=2?m`<button class="fp3d-btn fp3d-wide-btn" @click=${()=>this.spreadCeilingLights(e)}>${this.t("lights_spread")}</button>`:y}
              ${s.length>8?m`<input
                    class="fp3d-search"
                    type="search"
                    placeholder=${this.t("devices_search")}
                    .value=${this._deviceQuery}
                    @input=${d=>this._deviceQuery=d.target.value}
                  />`:y}
              <div class="fp3d-room-list">
                ${a.map(d=>{let f=d.others.filter(p),v=this._expanded.has(d.primary)||!!c&&f.length>0;return!p(d.primary)&&!f.length?y:m`${h(d.primary)}
                  ${d.others.length?m`<button
                        class="fp3d-more"
                        @click=${()=>{let b=new Set(this._expanded);b.has(d.primary)?b.delete(d.primary):b.add(d.primary),this._expanded=b}}
                      >
                        ${v?this.t("devices_less"):this.t("devices_more",{n:d.others.length})}
                      </button>`:y}
                  ${v?(c?f:d.others).map(b=>h(b,!0)):y}`})}
              </div>
              <p class="fp3d-sub">${this.t("devices_hint")}</p>`:m`<p class="fp3d-sub">${this.t("devices_none")}</p>`:m`<p class="fp3d-sub">${this.t("devices_none_area")}</p>`}
    </section>`}renderBackgroundForm(e){let t=e.background;return m`<details class="fp3d-section">
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
    </details>`}async loadHistory(){if(this.hass)try{this._history=await nn(this.hass)}catch{this._history=[]}}async restoreFromHistory(e){!this.hass||!confirm(this.t("backup_restore_confirm",{time:this.snapshotTime(e)}))||(await rn(this.hass,e.id),this._notice=this.t("backup_restored"),await this.loadHistory())}async exportBackup(){if(this.hass){this._backupBusy=!0;try{let e=await dn(this.hass),t={};for(let i of In(e.building))try{t[i]=await st(this.hass,i)}catch{}let n=new Date().toISOString().slice(0,10);kt(`neonplan3d-${this.t("export_name_full")}-${n}.json`,JSON.stringify({...e,exported_at:new Date().toISOString(),images:t}))}catch(e){alert(this.t("backup_import_error",{error:String(e?.message??e)}))}finally{this._backupBusy=!1}}}async importBackup(e){let t=e.target,n=t.files?.[0];if(t.value="",!n||!this.hass)return;let i;try{i=JSON.parse(await n.text())}catch{alert(this.t("import_error_not_json"));return}if(i?.format!=="neonplan3d-backup"||!i.building){alert(this.t("backup_full_not_backup"));return}if(confirm(this.t("backup_full_confirm"))){this._backupBusy=!0;try{let s=await pn(this.hass,i.building,i.packs??[]),r=0;for(let[l,c]of Object.entries(i.images??{}))try{await Le(this.hass,l,c),r++}catch{}this.setDoc(We(s.building)),this._floorId=s.building.floors[0]?.id??null,this.selectItem("room",null),this.fit(),this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let a=s.skipped.length?` ${this.t("backup_full_skipped",{packs:s.skipped.map(l=>l.id).join(", ")})}`:"";this._notice=this.t("backup_full_restored",{packs:s.packs,pictures:r})+a}catch(s){let{code:r,message:a}=s??{};alert(this.t("backup_import_error",{error:a??r??String(s)}))}finally{this._backupBusy=!1}}}exportPlan(e){let t=new Date().toISOString().slice(0,10);kt(`neonplan3d-${this.t(e?"export_name_template":"export_name_backup")}-${t}.json`,JSON.stringify(Pn(this._doc,e),null,2))}async importPlan(e){let t=e.target,n=t.files?.[0];if(t.value="",!n||!this.hass)return;let i;try{i=Rn(await n.text())}catch(s){let r=s.message;alert(r==="not_json"?this.t("import_error_not_json"):r==="not_plan"?this.t("import_error_not_plan"):this.t("backup_import_error",{error:r}));return}confirm(this.t("backup_import_confirm"))&&(await sn(this.hass).catch(()=>{}),this.setDoc(i),this._floorId=i.floors[0]?.id??null,this.selectItem("room",null),this.fit(),this._notice=this.t("backup_imported"))}snapshotTime(e){return new Date(e.saved_at*1e3).toLocaleString(this.hass?.language,{dateStyle:"short",timeStyle:"short"})}renderBackup(){return m`<details
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
          <select @change=${n=>t({roof:{...e.roof,type:n.target.value}})}>
            ${["none","flat","gable"].map(n=>m`<option value=${n} ?selected=${n===e.roof.type}>${this.t(`roof_${n}`)}</option>`)}
          </select></label
        >
        ${e.roof.type==="gable"?this.num(this.t("roof_pitch"),e.roof.pitch,n=>t({roof:{...e.roof,pitch:Math.min(60,Math.max(5,n))}}),1,5):y}
        ${e.roof.type!=="none"?this.num(this.t("roof_overhang"),e.roof.overhang,n=>t({roof:{...e.roof,overhang:Math.min(2,Math.max(0,n))}}),.05,0):y}
        ${this.hass?this.entitySelect(this.t("weather_entity"),e.weather_entity??null,Zn(this.hass,null),this.entityOptions(n=>n.startsWith("weather.")),n=>t({weather_entity:n})):y}
        <div class="fp3d-sub fp3d-wide">${this.t("weather_effects")}</div>
        ${gn.map(n=>{let i=e.weather_effects??ht;return m`<label class="fp3d-check"
            ><input
              type="checkbox"
              .checked=${i.includes(n)}
              @change=${s=>{let r=s.target.checked;t({weather_effects:r?[...new Set([...i,n])]:i.filter(a=>a!==n)})}}
            />
            ${this.t(`weather_effect_${n}`)}</label
          >`})}
      </div>
      <p class="fp3d-sub">${this.t("north_hint")} ${this.t("weather_entity_hint")}</p>
    </details>`}static styles=[Ve,ii,J`
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
    `]};customElements.get("fp3d-editor")||customElements.define("fp3d-editor",Dt);export{Dt as Fp3dEditor};
