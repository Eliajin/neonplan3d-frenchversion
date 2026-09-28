var Jt=new URL(import.meta.url),Qt=Jt.searchParams.get("v"),Yt=n=>new URL(`./fonts/${n}${Qt?`?v=${Qt}`:""}`,Jt).href,Zt="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD";function Xt(){if(typeof document>"u"||document.getElementById("fp3d-fonts"))return;let n=document.createElement("style");n.id="fp3d-fonts",n.textContent=`
@font-face{font-family:"Figtree";font-style:normal;font-display:swap;font-weight:300 900;src:url(${Yt("figtree.woff2")}) format("woff2");unicode-range:${Zt}}
@font-face{font-family:"Bricolage Grotesque";font-style:normal;font-display:swap;font-weight:200 800;src:url(${Yt("bricolage-grotesque.woff2")}) format("woff2");unicode-range:${Zt}}`,document.head.append(n)}var vt=globalThis,_t=vt.ShadowRoot&&(vt.ShadyCSS===void 0||vt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Et=Symbol(),te=new WeakMap,tt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Et)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(_t&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=te.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&te.set(e,t))}return t}toString(){return this.cssText}},ee=n=>new tt(typeof n=="string"?n:n+"",void 0,Et),C=(n,...t)=>{let e=n.length===1?n[0]:t.reduce((i,s,o)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[o+1],n[0]);return new tt(e,n,Et)},ie=(n,t)=>{if(_t)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let i=document.createElement("style"),s=vt.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)}},At=_t?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return ee(e)})(n):n;var{is:Ge,defineProperty:Qe,getOwnPropertyDescriptor:Ye,getOwnPropertyNames:Ze,getOwnPropertySymbols:Je,getPrototypeOf:Xe}=Object,bt=globalThis,se=bt.trustedTypes,ti=se?se.emptyScript:"",ei=bt.reactiveElementPolyfillSupport,et=(n,t)=>n,It={toAttribute(n,t){switch(t){case Boolean:n=n?ti:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},ne=(n,t)=>!Ge(n,t),oe={attribute:!0,type:String,converter:It,reflect:!1,useDefault:!1,hasChanged:ne};Symbol.metadata??=Symbol("metadata"),bt.litPropertyMetadata??=new WeakMap;var D=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=oe){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Qe(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){let{get:s,set:o}=Ye(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get:s,set(r){let a=s?.call(this);o?.call(this,r),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??oe}static _$Ei(){if(this.hasOwnProperty(et("elementProperties")))return;let t=Xe(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(et("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(et("properties"))){let e=this.properties,i=[...Ze(e),...Je(e)];for(let s of i)this.createProperty(s,e[s])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let s of i)e.unshift(At(s))}else t!==void 0&&e.push(At(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ie(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){let o=(i.converter?.toAttribute!==void 0?i.converter:It).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){let i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){let o=i.getPropertyOptions(s),r=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:It;this._$Em=s;let a=r.fromAttribute(e,o.type);this[s]=a??this._$Ej?.get(s)??a,this._$Em=null}}requestUpdate(t,e,i,s=!1,o){if(t!==void 0){let r=this.constructor;if(s===!1&&(o=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??ne)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),o!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[s,o]of i){let{wrapped:r}=o,a=this[s];r!==!0||this._$AL.has(s)||a===void 0||this.C(s,void 0,o,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};D.elementStyles=[],D.shadowRootOptions={mode:"open"},D[et("elementProperties")]=new Map,D[et("finalized")]=new Map,ei?.({ReactiveElement:D}),(bt.reactiveElementVersions??=[]).push("2.1.2");var Dt=globalThis,re=n=>n,xt=Dt.trustedTypes,ae=xt?xt.createPolicy("lit-html",{createHTML:n=>n}):void 0,ue="$lit$",U=`lit$${Math.random().toFixed(9).slice(2)}$`,fe="?"+U,ii=`<${fe}>`,K=document,st=()=>K.createComment(""),ot=n=>n===null||typeof n!="object"&&typeof n!="function",Bt=Array.isArray,si=n=>Bt(n)||typeof n?.[Symbol.iterator]=="function",Rt=`[ 	
\f\r]`,it=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,le=/-->/g,de=/>/g,F=RegExp(`>|${Rt}(?:([^\\s"'>=/]+)(${Rt}*=${Rt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ce=/'/g,pe=/"/g,me=/^(?:script|style|textarea|title)$/i,Tt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),u=Tt(1),$=Tt(2),zi=Tt(3),j=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),he=new WeakMap,W=K.createTreeWalker(K,129);function ge(n,t){if(!Bt(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return ae!==void 0?ae.createHTML(t):t}var oi=(n,t)=>{let e=n.length-1,i=[],s,o=t===2?"<svg>":t===3?"<math>":"",r=it;for(let a=0;a<e;a++){let l=n[a],d,f,m=-1,g=0;for(;g<l.length&&(r.lastIndex=g,f=r.exec(l),f!==null);)g=r.lastIndex,r===it?f[1]==="!--"?r=le:f[1]!==void 0?r=de:f[2]!==void 0?(me.test(f[2])&&(s=RegExp("</"+f[2],"g")),r=F):f[3]!==void 0&&(r=F):r===F?f[0]===">"?(r=s??it,m=-1):f[1]===void 0?m=-2:(m=r.lastIndex-f[2].length,d=f[1],r=f[3]===void 0?F:f[3]==='"'?pe:ce):r===pe||r===ce?r=F:r===le||r===de?r=it:(r=F,s=void 0);let c=r===F&&n[a+1].startsWith("/>")?" ":"";o+=r===it?l+ii:m>=0?(i.push(d),l.slice(0,m)+ue+l.slice(m)+U+c):l+U+(m===-2?a:c)}return[ge(n,o+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},nt=class n{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0,a=t.length-1,l=this.parts,[d,f]=oi(t,e);if(this.el=n.createElement(d,i),W.currentNode=this.el.content,e===2||e===3){let m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(s=W.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(let m of s.getAttributeNames())if(m.endsWith(ue)){let g=f[r++],c=s.getAttribute(m).split(U),p=/([.?@])?(.*)/.exec(g);l.push({type:1,index:o,name:p[2],strings:c,ctor:p[1]==="."?zt:p[1]==="?"?Pt:p[1]==="@"?Ht:Q}),s.removeAttribute(m)}else m.startsWith(U)&&(l.push({type:6,index:o}),s.removeAttribute(m));if(me.test(s.tagName)){let m=s.textContent.split(U),g=m.length-1;if(g>0){s.textContent=xt?xt.emptyScript:"";for(let c=0;c<g;c++)s.append(m[c],st()),W.nextNode(),l.push({type:2,index:++o});s.append(m[g],st())}}}else if(s.nodeType===8)if(s.data===fe)l.push({type:2,index:o});else{let m=-1;for(;(m=s.data.indexOf(U,m+1))!==-1;)l.push({type:7,index:o}),m+=U.length-1}o++}}static createElement(t,e){let i=K.createElement("template");return i.innerHTML=t,i}};function G(n,t,e=n,i){if(t===j)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl,o=ot(t)?void 0:t._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),o===void 0?s=void 0:(s=new o(n),s._$AT(n,e,i)),i!==void 0?(e._$Co??=[])[i]=s:e._$Cl=s),s!==void 0&&(t=G(n,s._$AS(n,t.values),s,i)),t}var Ct=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??K).importNode(e,!0);W.currentNode=s;let o=W.nextNode(),r=0,a=0,l=i[0];for(;l!==void 0;){if(r===l.index){let d;l.type===2?d=new rt(o,o.nextSibling,this,t):l.type===1?d=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(d=new Vt(o,this,t)),this._$AV.push(d),l=i[++a]}r!==l?.index&&(o=W.nextNode(),r++)}return W.currentNode=K,s}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},rt=class n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),ot(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==j&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):si(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==h&&ot(this._$AH)?this._$AA.nextSibling.data=t:this.T(K.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=nt.createElement(ge(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{let o=new Ct(s,this),r=o.u(this.options);o.p(e),this.T(r),this._$AH=o}}_$AC(t){let e=he.get(t.strings);return e===void 0&&he.set(t.strings,e=new nt(t)),e}k(t){Bt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let o of t)s===e.length?e.push(i=new n(this.O(st()),this.O(st()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let i=re(t).nextSibling;re(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},Q=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=h}_$AI(t,e=this,i,s){let o=this.strings,r=!1;if(o===void 0)t=G(this,t,e,0),r=!ot(t)||t!==this._$AH&&t!==j,r&&(this._$AH=t);else{let a=t,l,d;for(t=o[0],l=0;l<o.length-1;l++)d=G(this,a[i+l],e,l),d===j&&(d=this._$AH[l]),r||=!ot(d)||d!==this._$AH[l],d===h?t=h:t!==h&&(t+=(d??"")+o[l+1]),this._$AH[l]=d}r&&!s&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},zt=class extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}},Pt=class extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}},Ht=class extends Q{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??h)===j)return;let i=this._$AH,s=t===h&&i!==h||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==h&&(i===h||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Vt=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}};var ni=Dt.litHtmlPolyfillSupport;ni?.(nt,rt),(Dt.litHtmlVersions??=[]).push("3.3.3");var ve=(n,t,e)=>{let i=e?.renderBefore??t,s=i._$litPart$;if(s===void 0){let o=e?.renderBefore??null;i._$litPart$=s=new rt(t.insertBefore(st(),o),o,void 0,e??{})}return s._$AI(n),s};var Lt=globalThis,R=class extends D{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ve(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return j}};R._$litElement$=!0,R.finalized=!0,Lt.litElementHydrateSupport?.({LitElement:R});var ri=Lt.litElementPolyfillSupport;ri?.({LitElement:R});(Lt.litElementVersions??=[]).push("4.2.2");async function _e(n){return n.callWS({type:"floorplan_3d/building/get"})}async function be(n,t){return(await n.callWS({type:"floorplan_3d/building/save",building:t})).revision}function xe(n,t){return n.connection.subscribeMessage(e=>t(e.revision),{type:"floorplan_3d/building/subscribe"})}async function ye(n,t){return(await n.callWS({type:"floorplan_3d/image/get",image_id:t})).data}async function $e(n,t,e){await n.callWS({type:"floorplan_3d/image/set",image_id:t,data:e})}var ai=700,Y=class{building=null;error=null;saveState="idle";host;hass=null;revision=-1;ownRevisions=new Set;unsubscribe=null;saveTimer;pending=null;saving=null;connected=!1;constructor(t){this.host=t,t.addController(this)}setHass(t){let e=this.hass===null;this.hass=t,e&&this.connected&&this.start()}hostConnected(){this.connected=!0,this.hass&&this.start()}hostDisconnected(){this.connected=!1,this.flush(),this.unsubscribe?.(),this.unsubscribe=null}edit(t){this.building=t,this.pending=t,clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{this.flush()},ai),this.host.requestUpdate()}async flush(){clearTimeout(this.saveTimer),this.saving&&await this.saving;let t=this.pending;!t||!this.hass||(this.pending=null,this.saveState="saving",this.host.requestUpdate(),this.saving=(async()=>{try{let e=await be(this.hass,t);this.ownRevisions.add(e),this.revision=e,this.saveState=this.pending?"saving":"saved"}catch(e){this.saveState="error",this.error=we(e)}this.host.requestUpdate()})(),await this.saving,this.saving=null)}async start(){if(this.hass&&(await this.reload(),!this.unsubscribe&&this.connected))try{this.unsubscribe=await xe(this.hass,t=>{this.ownRevisions.has(t)||t===this.revision||this.pending||this.saving||this.reload()})}catch{}}async reload(){if(this.hass){try{let t=await _e(this.hass);this.building=t.building,this.revision=t.revision,this.error=null}catch(t){this.error=we(t)}this.host.requestUpdate()}}};function we(n){return n&&typeof n=="object"&&"message"in n?String(n.message):String(n)}var ke=["wood","oak","tiles","carpet","stone","concrete"];function Me(n,t,e){return{id:n,name:t,elevation:e,height:2.5,cut_height:1.15,rooms:[],openings:[],furniture:[],placements:[],background:null}}function at(n){return`${n}_${Math.random().toString(36).slice(2,10)}`}function lt(n){let t=0;for(let e=0;e<n.length;e++){let[i,s]=n[e],[o,r]=n[(e+1)%n.length];t+=i*r-o*s}return t/2}function Z(n){return Math.abs(lt(n))}function dt(n){let t=lt(n);if(Math.abs(t)<1e-9){let s=n.length||1;return[n.reduce((o,r)=>o+r[0],0)/s,n.reduce((o,r)=>o+r[1],0)/s]}let e=0,i=0;for(let s=0;s<n.length;s++){let[o,r]=n[s],[a,l]=n[(s+1)%n.length],d=o*l-a*r;e+=(o+a)*d,i+=(r+l)*d}return[e/(6*t),i/(6*t)]}function Se(n){if(n.length!==4)return!1;for(let t=0;t<4;t++){let[e,i]=n[t],[s,o]=n[(t+1)%4];if(Math.abs(e-s)>1e-6&&Math.abs(i-o)>1e-6)return!1}return!0}function ct(n){let t=1/0,e=1/0,i=-1/0,s=-1/0;for(let[o,r]of n)t=Math.min(t,o),e=Math.min(e,r),i=Math.max(i,o),s=Math.max(s,r);return{x0:t,z0:e,x1:i,z1:s}}function B(n,t){let e=!1;for(let i=0,s=t.length-1;i<t.length;s=i++){let[o,r]=t[i],[a,l]=t[s];r>n[1]!=l>n[1]&&n[0]<(a-o)*(n[1]-r)/(l-r)+o&&(e=!e)}return e}var li={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},di=new Set(["temperature","humidity"]),ci=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas"]),Ee=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],Ae=new Set(["light","switch","fan"]);function pi(n){return n.slice(0,n.indexOf("."))}function S(n){return li[pi(n)]??null}function Ie(n){return n!==null&&n!=="scene"&&n!=="script"}function hi(n,t){let e=n.entities?.[t];return e?e.area_id?e.area_id:e.device_id&&n.devices?.[e.device_id]?.area_id||null:null}function ui(n,t){let e=S(t);if(!e)return!1;let i=n.entities?.[t];if(i?.hidden||i?.entity_category)return!1;let s=n.states[t];if(!s)return!1;let o=s.attributes.device_class;return e==="sensor"?!!o&&di.has(o):e==="binary"?!!o&&ci.has(o):!0}function yt(n,t){if(!t||!n.entities)return[];let e=Object.keys(n.entities).filter(s=>hi(n,s)===t&&ui(n,s)),i=n.areas?.[t]?.name;return e.sort((s,o)=>{let r=Ee.indexOf(S(s)),a=Ee.indexOf(S(o));return r-a||T(n,s,i).localeCompare(T(n,o,i))})}function T(n,t,e){let s=n.states[t]?.attributes.friendly_name??n.entities?.[t]?.name??t;if(e&&s.length>e.length+1&&s.toLowerCase().startsWith(e.toLowerCase()+" ")){let o=s.slice(e.length+1);return o.charAt(0).toUpperCase()+o.slice(1)}return s}function P(n){return!n||n.state==="unavailable"||n.state==="unknown"}function Re(n){if(!n)return!1;switch(S(n.entity_id)){case"light":case"switch":case"fan":case"binary":return n.state==="on";case"cover":return n.state==="open"||n.state==="opening";case"climate":return n.attributes.hvac_action==="heating"||n.attributes.hvac_action==="cooling";case"media":return n.state==="playing";case"lock":return n.state==="unlocked"||n.state==="open";default:return!1}}function Ce(n){if(!n||n.state!=="on")return null;let t=n.attributes,e=typeof t.brightness=="number"?Math.max(.08,t.brightness/255):1,i=t.rgb_color,s;return i&&t.color_mode!=="color_temp"&&t.color_mode!=="brightness"&&t.color_mode!=="onoff"?s=[i[0]/255,i[1]/255,i[2]/255]:typeof t.color_temp_kelvin=="number"?s=fi(t.color_temp_kelvin):s=[1,.71,.28],{color:s,level:e}}function fi(n){let t=Math.min(1,Math.max(0,(n-2200)/4300)),e=[1,.66,.26],i=[.78,.9,1];return[e[0]+(i[0]-e[0])*t,e[1]+(i[1]-e[1])*t,e[2]+(i[2]-e[2])*t]}function ze(n,t){switch(n){case"light":case"camera":return Math.max(.5,t-.25);case"cover":return Math.min(2,t-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}function mi(n,t){let e=1/0;for(let i=0;i<t.length;i++){let s=t[i],o=t[(i+1)%t.length],r=o[0]-s[0],a=o[1]-s[1],l=r*r+a*a||1,d=Math.min(1,Math.max(0,((n[0]-s[0])*r+(n[1]-s[1])*a)/l));e=Math.min(e,Math.hypot(n[0]-s[0]-r*d,n[1]-s[1]-a*d))}return e}function Pe(n,t,e=[]){if(n.points.length<3||!t.length)return[];let i=n.points,s=i.map(b=>b[0]),o=i.map(b=>b[1]),r=Math.min(...s),a=Math.min(...o),l=Math.max(...s),d=Math.max(...o),f=Math.min(l-r,d-a),m=Math.max(.1,Math.min(.25,f/8)),g=Math.min(.35,f/5),c=dt(i),p=[];for(let b=r+m/2;b<l;b+=m)for(let y=a+m/2;y<d;y+=m){let A=[b,y];if(!B(A,i))continue;let k=mi(A,i);k<g||p.push({p:A,wall:k})}p.length||p.push({p:c,wall:0});let _=[...e],v=[],x=Math.min(.7,f/4);for(let b of t){let y=S(b)==="light",A=p[0].p,k=-1/0;for(let{p:I,wall:O}of p){let St=_.length?Math.min(..._.map(Gt=>Math.hypot(I[0]-Gt[0],I[1]-Gt[1]))):3,qt=Math.hypot(I[0]-c[0],I[1]-c[1]),gt=Math.min(St,3)*2;qt<x&&(gt-=10),gt-=y?qt*.35:O*1.2,gt>k+1e-9&&(k=gt,A=I)}let M=[Math.round(A[0]*100)/100,Math.round(A[1]*100)/100];_.push(M),v.push({entity_id:b,x:M[0],z:M[1],y:null})}return v}var H=(n,t)=>[n[0]-t[0],n[1]-t[1]],pt=(n,t)=>[n[0]+t[0],n[1]+t[1]],q=(n,t)=>[n[0]*t,n[1]*t],Ot=(n,t)=>n[0]*t[0]+n[1]*t[1],ht=(n,t)=>n[0]*t[1]-n[1]*t[0],$t=n=>Math.hypot(n[0],n[1]),ut=n=>{let t=$t(n)||1;return[n[0]/t,n[1]/t]},He=n=>[-n[1],n[0]],Ve=n=>[n[1],-n[0]];function Be(n,t){let e=t.eps??.005,i=[],s=[],o=c=>{for(let p=0;p<s.length;p++)if(Math.abs(s[p][0]-c[0])<=e&&Math.abs(s[p][1]-c[1])<=e)return p;return s.push([c[0],c[1]]),s.length-1},r=[];for(let c of n){let p=c.points;if(p.length<3||Math.abs(lt(p))<1e-6)continue;let _=lt(p)>0,v=p.map(o);for(let x=0;x<p.length;x++){let b=v[x],y=v[(x+1)%p.length];b!==y&&r.push(_?{u:b,v:y,room:c.id,edge:x,forward:!0}:{u:y,v:b,room:c.id,edge:x,forward:!1})}}let a=[];for(let c of r){let p=s[c.u],_=s[c.v],v=H(_,p),x=$t(v),b=q(v,1/x),y=[];for(let k=0;k<s.length;k++){if(k===c.u||k===c.v)continue;let M=H(s[k],p),I=Ot(M,b);I<=e||I>=x-e||Math.abs(ht(b,M))<=e&&y.push({t:I,id:k})}y.sort((k,M)=>k.t-M.t);let A=[{t:0,id:c.u},...y,{t:x,id:c.v}];for(let k=0;k+1<A.length;k++){let M=A[k],I=A[k+1],O=c.forward?M.t:x-I.t,St=c.forward?I.t:x-M.t;a.push({u:M.id,v:I.id,room:c.room,edge:c.edge,t0:O,t1:St})}}let l=new Map;for(let c of a){let p=c.u<c.v?`${c.u}-${c.v}`:`${c.v}-${c.u}`,_=l.get(p);_||l.set(p,_=[]),_.push(c)}let d=c=>({room_id:c.room,edge:c.edge,t0:c.t0,t1:c.t1}),f=[];for(let c of l.values()){let p=c[0],_=c.find(v=>v!==p&&v.u===p.v&&v.v===p.u&&v.room!==p.room);for(let v of c)v!==p&&v!==_&&v.room!==p.room&&i.push(`overlap:${p.room}:${v.room}`);_?f.push({a:p.u,b:p.v,left:t.interior/2,right:t.interior/2,exterior:!1,roomLeft:p.room,roomRight:_.room,sources:[d(p),d(_)]}):f.push({a:p.u,b:p.v,left:0,right:t.exterior,exterior:!0,roomLeft:p.room,roomRight:null,sources:[d(p)]})}f=vi(f,s);let m=bi(f,s);return{walls:f.map((c,p)=>{let _=s[c.a],v=s[c.b],x=m.get(`${p}:a`),b=m.get(`${p}:b`),y=xi([x.right,b.left,v,b.right,x.left,_],1e-6);return{id:gi(_,v),a:[_[0],_[1]],b:[v[0],v[1]],left:c.left,right:c.right,exterior:c.exterior,roomLeft:c.roomLeft,roomRight:c.roomRight,sources:c.sources,footprint:y}}),warnings:[...new Set(i)]}}function gi(n,t){let e=o=>Math.round(o*100),[i,s]=n[0]<t[0]||n[0]===t[0]&&n[1]<=t[1]?[n,t]:[t,n];return`w_${e(i[0])}_${e(i[1])}_${e(s[0])}_${e(s[1])}`}function De(n){return{...n,a:n.b,b:n.a,left:n.right,right:n.left,roomLeft:n.roomRight,roomRight:n.roomLeft}}function vi(n,t){let e=n.slice(),i=!0;for(;i;){i=!1;let s=new Map;e.forEach((o,r)=>{for(let a of[o.a,o.b]){let l=s.get(a);l||s.set(a,l=[]),l.push(r)}});for(let[o,r]of s){if(r.length!==2)continue;let a=e[r[0]],l=e[r[1]];if(a.b!==o&&(a=De(a)),l.a!==o&&(l=De(l)),a.a===l.b)continue;let d=ut(H(t[a.b],t[a.a])),f=ut(H(t[l.b],t[l.a]));if(Math.abs(ht(d,f))>1e-6||Ot(d,f)<=0||a.exterior!==l.exterior||a.roomLeft!==l.roomLeft||a.roomRight!==l.roomRight||Math.abs(a.left-l.left)>1e-9||Math.abs(a.right-l.right)>1e-9)continue;let m={...a,b:l.b,sources:_i(a.sources,l.sources)},g=e.filter((c,p)=>p!==r[0]&&p!==r[1]);g.push(m),e.length=0,e.push(...g),i=!0;break}}return e}function _i(n,t){let e=n.map(i=>({...i}));for(let i of t){let s=e.find(o=>o.room_id===i.room_id&&o.edge===i.edge&&(Math.abs(o.t1-i.t0)<1e-6||Math.abs(i.t1-o.t0)<1e-6));s?(s.t0=Math.min(s.t0,i.t0),s.t1=Math.max(s.t1,i.t1)):e.push({...i})}return e}function bi(n,t){let e=new Map;n.forEach((s,o)=>{let r=ut(H(t[s.b],t[s.a])),a=[[s.a,{key:`${o}:a`,d:r,left:s.left,right:s.right,angle:Math.atan2(r[1],r[0])}],[s.b,{key:`${o}:b`,d:q(r,-1),left:s.right,right:s.left,angle:Math.atan2(-r[1],-r[0])}]];for(let[l,d]of a){let f=e.get(l);f||e.set(l,f=[]),f.push(d)}});let i=new Map;for(let[s,o]of e){let r=t[s];o.sort((d,f)=>d.angle-f.angle);let a=d=>({left:pt(r,q(He(d.d),d.left)),right:pt(r,q(Ve(d.d),d.right))});for(let d of o)i.set(d.key,a(d));if(o.length<2)continue;let l=4*Math.max(...o.map(d=>Math.max(d.left,d.right)))+1e-9;for(let d=0;d<o.length;d++){let f=o[d],m=o[(d+1)%o.length],g=pt(r,q(He(f.d),f.left)),c=pt(r,q(Ve(m.d),m.right)),p=ht(f.d,m.d);if(Math.abs(p)<1e-4)continue;let _=ht(H(c,g),m.d)/p,v=pt(g,q(f.d,_));$t(H(v,r))>l||(i.get(f.key).left=v,i.get(m.key).right=v)}}return i}function xi(n,t){let e=n.filter((s,o)=>$t(H(s,n[(o+1)%n.length]))>t),i=!0;for(;i&&e.length>3;){i=!1;for(let s=0;s<e.length;s++){let o=e[(s+e.length-1)%e.length],r=e[s],a=e[(s+1)%e.length],l=H(r,o),d=H(a,r);if(Math.abs(ht(ut(l),ut(d)))<1e-7&&Ot(l,d)>0){e=e.filter((f,m)=>m!==s),i=!0;break}}}return e}var Te={view:"3D",editor:"Editor",all_floors:"Alle Etagen",no_building:"Noch kein Grundriss vorhanden.",no_building_admin:"Noch kein Grundriss vorhanden. Im Editor zeichnest du deine erste Etage.",open_editor:"Editor \xF6ffnen",loading:"L\xE4dt \u2026",load_error:"Laden fehlgeschlagen",saving:"Speichert \u2026",saved:"Gespeichert",save_error:"Speichern fehlgeschlagen",walls_auto:"W\xE4nde hoch",walls_cut:"Schnitt",reset_view:"\xDCbersicht",back:"Zur\xFCck",floor:"Etage",floors:"Etagen",add_floor:"Etage hinzuf\xFCgen",floor_name:"Name",elevation:"H\xF6he \xFCber Boden (m)",height:"Raumh\xF6he (m)",cut_height:"Schnitth\xF6he (m)",delete_floor:"Etage l\xF6schen",delete_floor_confirm:"Etage \u201E{name}\u201C mit allen R\xE4umen l\xF6schen?",move_up:"Nach oben",move_down:"Nach unten",default_floor:"Erdgeschoss",new_floor:"Etage {n}",tool_select:"Ausw\xE4hlen",tool_rect:"Rechteck",tool_polygon:"Freie Form",undo:"R\xFCckg\xE4ngig",redo:"Wiederholen",fit:"Alles zeigen",room:"Raum",rooms:"R\xE4ume",room_name:"Name",area:"Bereich",no_area:"Kein Bereich",material:"Boden",x:"X (m)",z:"Y (m)",width:"Breite (m)",depth:"Tiefe (m)",points:"Eckpunkte",delete_point:"Punkt l\xF6schen",duplicate:"Duplizieren",delete:"L\xF6schen",new_room:"Raum {n}",settings:"Einstellungen",wall_exterior:"Au\xDFenwand (m)",wall_interior:"Innenwand (m)",grid:"Raster (m)",background:"Vorlage (Grundriss-Bild)",background_upload:"Bild w\xE4hlen \u2026",background_width:"Breite im Plan (m)",background_opacity:"Deckkraft",background_remove:"Vorlage entfernen",hint_select:"Raum antippen zum Ausw\xE4hlen \xB7 Ecken ziehen \xB7 \u201E+\u201C auf einer Kante f\xFCgt einen Punkt ein \xB7 Entf l\xF6scht \xB7 Strg+Z",hint_rect:"Ziehen, um ein Rechteck zu zeichnen",hint_polygon:"Punkte setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",hint_empty:"Lege zuerst eine Etage an.",area_m2:"{a} m\xB2",overlap_warning:"R\xE4ume \xFCberlappen sich \u2013 die W\xE4nde dort sind unvollst\xE4ndig.",read_only:"Nur Administratoren k\xF6nnen den Grundriss bearbeiten.",mat_wood:"Holz",mat_oak:"Eiche",mat_tiles:"Fliesen",mat_carpet:"Teppich",mat_stone:"Stein",mat_concrete:"Beton",card_name:"Floorplan 3D",card_description:"Deine Wohnung in 3D (Neon).",stats:"{fps} B/s \xB7 {calls} Draw-Calls \xB7 {tris} Dreiecke",floors_apart:"Auseinander",floors_stacked:"Gestapelt",floor_rooms_one:"1 Raum",floor_rooms:"{n} R\xE4ume",quality:"Qualit\xE4t",quality_auto:"Auto",quality_low:"Tablet",quality_high:"Hoch",state_on:"An",state_off:"Aus",state_open:"Offen",state_closed:"Zu",state_opening:"\xD6ffnet",state_closing:"Schlie\xDFt",state_playing:"Spielt",state_paused:"Pause",state_idle:"Bereit",state_locked:"Verriegelt",state_unlocked:"Entriegelt",state_detected:"Erkannt",state_clear:"Frei",state_unavailable:"Nicht verf\xFCgbar",state_heat:"Heizen",state_cool:"K\xFChlen",state_auto:"Automatik",state_heat_cool:"Heizen/K\xFChlen",state_dry:"Entfeuchten",state_fan_only:"L\xFCften",devices:"Ger\xE4te",devices_none_area:"Verkn\xFCpfe den Raum mit einem Bereich, dann erscheinen dessen Ger\xE4te hier.",devices_none:"Im Bereich gibt es keine passenden Ger\xE4te.",devices_place_all:"Alle automatisch platzieren",devices_place:"Platzieren",devices_remove:"Entfernen",devices_hint:"Platzierte Ger\xE4te erscheinen in 3D. Im Plan lassen sie sich verschieben.",panel_lights:"Licht",panel_covers:"Rolll\xE4den",panel_climate:"Heizung",panel_media:"Medien",panel_switches:"Schalter",panel_sensors:"Sensoren",panel_scenes:"Szenen & Skripte",panel_all_off:"Alle aus",panel_no_area:"Dieser Raum ist mit keinem Bereich verkn\xFCpft. Im Editor kannst du ihn verkn\xFCpfen.",panel_empty:"Im Bereich gibt es keine steuerbaren Ger\xE4te.",close:"Schlie\xDFen",brightness:"Helligkeit",color_temp:"Farbtemperatur",color:"Farbe",position:"Position",cover_open:"Auf",cover_stop:"Stopp",cover_close:"Zu",target_temp:"Soll",current_temp:"Ist",temp_down:"K\xE4lter",temp_up:"W\xE4rmer",volume:"Lautst\xE4rke",play_pause:"Wiedergabe/Pause",previous:"Zur\xFCck",next:"Weiter",run:"Ausf\xFChren",details:"Details",hold_hint:"Antippen schaltet \xB7 lange dr\xFCcken \xF6ffnet Details"},yi={view:"3D",editor:"Editor",all_floors:"All floors",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",walls_auto:"Tall walls",walls_cut:"Cut",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",add_floor:"Add floor",floor_name:"Name",elevation:"Elevation (m)",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",default_floor:"Ground floor",new_floor:"Floor {n}",tool_select:"Select",tool_rect:"Rectangle",tool_polygon:"Free shape",undo:"Undo",redo:"Redo",fit:"Show all",room:"Room",rooms:"Rooms",room_name:"Name",area:"Area",no_area:"No area",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",delete_point:"Delete corner",duplicate:"Duplicate",delete:"Delete",new_room:"Room {n}",settings:"Settings",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 Del deletes \xB7 Ctrl+Z",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_empty:"Add a floor first.",area_m2:"{a} m\xB2",overlap_warning:"Rooms overlap \u2013 walls there are incomplete.",read_only:"Only administrators can edit the floor plan.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"Floorplan 3D",card_description:"Your home in 3D (neon).",stats:"{fps} fps \xB7 {calls} draw calls \xB7 {tris} triangles",floors_apart:"Apart",floors_stacked:"Stacked",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",devices_none_area:"Link the room to an area and its devices appear here.",devices_none:"The area has no suitable devices.",devices_place_all:"Place all automatically",devices_place:"Place",devices_remove:"Remove",devices_hint:"Placed devices appear in 3D. Drag them in the plan to move them.",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",panel_all_off:"All off",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"The area has no controllable devices.",close:"Close",brightness:"Brightness",color_temp:"Colour temperature",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details"};function E(n,t,e={}){let s=((n?.language??navigator.language).startsWith("de")?Te:yi)[t]??Te[t]??t;for(let[o,r]of Object.entries(e))s=s.replace(`{${o}}`,String(r));return s}function z(n,t,e=2){return t.toLocaleString(n?.language??void 0,{maximumFractionDigits:e})}var Le={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function ft(n){return Le[n]}function Oe(n){return`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${Le[n]}"/></svg>`}var V=C`
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
`,J=C`
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
`;var Ue=100,Ne=10,w=n=>Math.round(n*1e3)/1e3,Ut=class extends R{static properties={hass:{attribute:!1},building:{attribute:!1},narrow:{type:Boolean},_doc:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_vertex:{state:!0},_tool:{state:!0},_draft:{state:!0},_cursor:{state:!0},_guides:{state:!0},_view:{state:!0},_size:{state:!0},_images:{state:!0},_canUndo:{state:!0},_canRedo:{state:!0}};past=[];future=[];drag=null;pointers=new Map;pinch=null;fitted=!1;resizeObserver;loadingImages=new Set;constructor(){super(),this.narrow=!1,this._floorId=null,this._roomId=null,this._vertex=null,this._tool="select",this._draft=[],this._cursor=null,this._guides={},this._view={scale:50,ox:40,oy:40},this._size={w:800,h:600},this._images={},this._canUndo=!1,this._canRedo=!1}t(t,e){return E(this.hass,t,e)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.resizeObserver?.disconnect()}willUpdate(t){t.has("building")&&this.building!==this._doc&&(this._doc=this.building,this._doc.floors.some(e=>e.id===this._floorId)||(this._floorId=this._doc.floors[0]?.id??null),this.floor?.rooms.some(e=>e.id===this._roomId)||(this._roomId=null))}firstUpdated(){let t=this.renderRoot.querySelector(".fp3d-canvas-wrap");this.resizeObserver=new ResizeObserver(()=>{this._size={w:t.clientWidth,h:t.clientHeight},!this.fitted&&this._size.w>0&&(this.fitted=!0,this.fit())}),this.resizeObserver.observe(t)}updated(){let t=this.floor?.background;t&&!this._images[t.image_id]&&!this.loadingImages.has(t.image_id)&&this.loadImage(t.image_id)}get floor(){return this._doc?.floors.find(t=>t.id===this._floorId)}get room(){return this.floor?.rooms.find(t=>t.id===this._roomId)}get isAdmin(){return this.hass?.user?.is_admin??!0}setDoc(t,e=this._doc){e&&(this.past.push(JSON.stringify(e)),this.past.length>Ue&&this.past.shift(),this.future=[]),this._doc=t,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}change(t,e=this._doc,i=!0){let s=structuredClone(e),o=s.floors.find(r=>r.id===this._floorId);!o&&this._floorId||(t(s,o),this.setDoc(s,i?e:null))}undo(){let t=this.past.pop();t&&(this.future.push(JSON.stringify(this._doc)),this.restore(JSON.parse(t)))}redo(){let t=this.future.pop();t&&(this.past.push(JSON.stringify(this._doc)),this.restore(JSON.parse(t)))}restore(t){this._doc=t,t.floors.some(e=>e.id===this._floorId)||(this._floorId=t.floors[0]?.id??null),this.floor?.rooms.some(e=>e.id===this._roomId)||(this._roomId=null),this._vertex=null,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}toScreen(t){let{scale:e,ox:i,oy:s}=this._view;return[t[0]*e+i,t[1]*e+s]}toWorld(t,e){let{scale:i,ox:s,oy:o}=this._view;return[(t-s)/i,(e-o)/i]}localPoint(t){let e=this.renderRoot.querySelector("svg").getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}fit(){let t=this.floor?.rooms.flatMap(a=>a.points)??[],e=t.length?ct(t):{x0:0,z0:0,x1:10,z1:8},i=1.5,s=e.x1-e.x0+2*i,o=e.z1-e.z0+2*i,r=Math.max(8,Math.min(400,Math.min(this._size.w/s,this._size.h/o)));this._view={scale:r,ox:this._size.w/2-(e.x0+e.x1)/2*r,oy:this._size.h/2-(e.z0+e.z1)/2*r}}zoomAt(t,e,i){let{scale:s,ox:o,oy:r}=this._view,a=Math.max(8,Math.min(600,s*t)),l=a/s;this._view={scale:a,ox:e-(e-o)*l,oy:i-(i-r)*l}}snap(t,e,i=!1){if(this._guides={},i)return t;let s=Ne/this._view.scale,o=this.floor?.rooms??[],r=[];for(let p of o)p.points.forEach((_,v)=>{e&&p.id===e.roomId&&(e.index===void 0||e.index===v)||r.push(_)});let a=null,l=s;for(let p of r){let _=Math.hypot(p[0]-t[0],p[1]-t[1]);_<l&&(l=_,a=p)}if(a)return this._guides={point:a},[a[0],a[1]];for(let p of o)if(!(e&&p.id===e.roomId))for(let _=0;_<p.points.length;_++){let v=p.points[_],x=p.points[(_+1)%p.points.length],b=x[0]-v[0],y=x[1]-v[1],A=b*b+y*y;if(A<1e-9)continue;let k=((t[0]-v[0])*b+(t[1]-v[1])*y)/A;if(k<=0||k>=1)continue;let M=[v[0]+k*b,v[1]+k*y],I=Math.hypot(M[0]-t[0],M[1]-t[1]),O=this._doc.settings.grid;Math.abs(y)<1e-9&&(M[0]=Math.min(Math.max(Math.round(M[0]/O)*O,Math.min(v[0],x[0])),Math.max(v[0],x[0]))),Math.abs(b)<1e-9&&(M[1]=Math.min(Math.max(Math.round(M[1]/O)*O,Math.min(v[1],x[1])),Math.max(v[1],x[1]))),I<l&&(l=I,a=M)}if(a)return this._guides={point:a},[w(a[0]),w(a[1])];let d=this._doc.settings.grid,f=[w(Math.round(t[0]/d)*d),w(Math.round(t[1]/d)*d)],m=s,g=s,c={};for(let p of r)Math.abs(p[0]-t[0])<m&&(m=Math.abs(p[0]-t[0]),f[0]=p[0],c.x=p[0]),Math.abs(p[1]-t[1])<g&&(g=Math.abs(p[1]-t[1]),f[1]=p[1],c.z=p[1]);return this._guides=c,f}onPointerDown(t){t.currentTarget.setPointerCapture(t.pointerId);let i=this.localPoint(t);if(this.pointers.set(t.pointerId,i),this.pointers.size===2){this.drag&&(this.drag.kind==="vertex"||this.drag.kind==="room"||this.drag.kind==="device")&&this.drag.moved&&this.restoreLive(this.drag.base),this.drag=null,this.pinch=this.pinchState();return}if(this.pointers.size>2)return;if(t.button===1||t.button===2||!this.floor){this.drag={kind:"pan",last:i};return}let s=this.toWorld(...i),o=t.target;if(this._tool==="rect"){let f=this.snap(s,void 0,t.altKey);this.drag={kind:"rect",start:f,end:f};return}if(this._tool==="polygon"){this.drag={kind:"tap",startScreen:i,last:i,panning:!1};return}let r=o.closest("[data-device]");if(r&&this.isAdmin){this.drag={kind:"device",entityId:r.getAttribute("data-device"),start:s,startScreen:i,base:this._doc,moved:!1};return}let a=o.closest("[data-vertex]"),l=o.closest("[data-mid]");if(a&&this.room&&this.isAdmin){this._vertex=Number(a.getAttribute("data-vertex")),this.drag={kind:"vertex",roomId:this.room.id,index:this._vertex,base:this._doc,moved:!1};return}if(l&&this.room&&this.isAdmin){let f=Number(l.getAttribute("data-mid")),m=this.room.points,g=m[f],c=m[(f+1)%m.length],p=[w((g[0]+c[0])/2),w((g[1]+c[1])/2)],_=this._doc,v=this.room.id;this.change((x,b)=>b.rooms.find(y=>y.id===v).points.splice(f+1,0,p),_,!1),this._vertex=f+1,this.drag={kind:"vertex",roomId:v,index:f+1,base:_,moved:!0};return}let d=o.closest("[data-room]")?.getAttribute("data-room")??this.roomAt(s);if(d){d!==this._roomId&&(this._vertex=null),this._roomId=d,this.drag=this.isAdmin?{kind:"room",roomId:d,start:s,startScreen:i,base:this._doc,moved:!1}:{kind:"pan",last:i};return}this._roomId=null,this._vertex=null,this.drag={kind:"pan",last:i}}onPointerMove(t){let e=this.localPoint(t);if(this.pointers.has(t.pointerId)&&this.pointers.set(t.pointerId,e),this.pinch){let o=this.pinchState();o&&(this.zoomAt(o.dist/Math.max(1,this.pinch.dist),...o.mid),this._view={...this._view,ox:this._view.ox+o.mid[0]-this.pinch.mid[0],oy:this._view.oy+o.mid[1]-this.pinch.mid[1]},this.pinch=o);return}let i=this.toWorld(...e),s=this.drag;if(!s){this._tool!=="select"&&this.floor&&(this._cursor=this.snap(i,void 0,t.altKey));return}switch(s.kind){case"pan":this._view={...this._view,ox:this._view.ox+e[0]-s.last[0],oy:this._view.oy+e[1]-s.last[1]},s.last=e;break;case"tap":(s.panning||Math.hypot(e[0]-s.startScreen[0],e[1]-s.startScreen[1])>6)&&(s.panning=!0,this._view={...this._view,ox:this._view.ox+e[0]-s.last[0],oy:this._view.oy+e[1]-s.last[1]}),s.last=e;break;case"rect":s.end=this.snap(i,void 0,t.altKey),this.requestUpdate();break;case"vertex":{let o=this.snap(i,{roomId:s.roomId,index:s.index},t.altKey);s.moved=!0,this.change((r,a)=>{a.rooms.find(l=>l.id===s.roomId).points[s.index]=o},s.base,!1);break}case"room":{if(!s.moved&&Math.hypot(e[0]-s.startScreen[0],e[1]-s.startScreen[1])<5)return;s.moved=!0;let o=s.base.floors.find(d=>d.id===this._floorId)?.rooms.find(d=>d.id===s.roomId);if(!o)return;let r=this.roomDelta(o,[i[0]-s.start[0],i[1]-s.start[1]],t.altKey),a=s.base.floors.find(d=>d.id===this._floorId),l=new Set(a.placements.filter(d=>B([d.x,d.z],o.points)).map(d=>d.entity_id));this.change((d,f)=>{let m=f.rooms.find(g=>g.id===s.roomId);m.points=o.points.map(([g,c])=>[w(g+r[0]),w(c+r[1])]),f.placements=a.placements.map(g=>l.has(g.entity_id)?{...g,x:w(g.x+r[0]),z:w(g.z+r[1])}:g)},s.base,!1);break}case"device":{if(!s.moved&&Math.hypot(e[0]-s.startScreen[0],e[1]-s.startScreen[1])<5)return;s.moved=!0;let o=s.base.floors.find(d=>d.id===this._floorId)?.placements.find(d=>d.entity_id===s.entityId);if(!o)return;let r=t.altKey?.01:this._doc.settings.grid,a=w(Math.round((o.x+i[0]-s.start[0])/r)*r),l=w(Math.round((o.z+i[1]-s.start[1])/r)*r);this.change((d,f)=>Object.assign(f.placements.find(m=>m.entity_id===s.entityId),{x:a,z:l}),s.base,!1);break}}}onPointerUp(t){if(this.pointers.delete(t.pointerId),this.pinch){this.pointers.size<2&&(this.pinch=null);return}let e=this.drag;if(this.drag=null,!e||t.type==="pointercancel"){e&&(e.kind==="vertex"||e.kind==="room"||e.kind==="device")&&e.moved&&this.restoreLive(e.base);return}let i=this.localPoint(t);switch(e.kind){case"rect":{let[s,o]=e.start,[r,a]=e.end;if(Math.abs(r-s)>=.2&&Math.abs(a-o)>=.2){let l=[Math.min(s,r),Math.min(o,a)],d=[Math.max(s,r),Math.max(o,a)];this.addRoom([l,[d[0],l[1]],d,[l[0],d[1]]])}this._guides={};break}case"tap":e.panning||this.addDraftPoint(this.snap(this.toWorld(...i),void 0,t.altKey),i);break;case"device":if(e.moved)this.pushHistory(e.base);else{let s=this.floor?.placements.find(r=>r.entity_id===e.entityId),o=s?this.roomAt([s.x,s.z]):null;o&&(this._roomId=o)}break;case"vertex":case"room":e.moved&&this.pushHistory(e.base),this._guides={};break;default:break}}onWheel(t){t.preventDefault();let[e,i]=this.localPoint(t);this.zoomAt(Math.exp(-t.deltaY*(t.deltaMode===1?.05:.0015)),e,i)}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,i]=t;return{dist:Math.hypot(e[0]-i[0],e[1]-i[1]),mid:[(e[0]+i[0])/2,(e[1]+i[1])/2]}}pushHistory(t){this.past.push(JSON.stringify(t)),this.past.length>Ue&&this.past.shift(),this.future=[],this._canUndo=!0,this._canRedo=!1}restoreLive(t){this._doc=t,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}roomDelta(t,e,i){if(i)return e;let s=this._doc.settings.grid,o=[Math.round(e[0]/s)*s,Math.round(e[1]/s)*s],a=Ne/this._view.scale;this._guides={};for(let l of this.floor?.rooms??[])if(l.id!==t.id)for(let d of l.points)for(let f of t.points){let m=Math.hypot(f[0]+e[0]-d[0],f[1]+e[1]-d[1]);m<a&&(a=m,o=[d[0]-f[0],d[1]-f[1]],this._guides={point:d})}return o}roomAt(t){return(this.floor?.rooms??[]).filter(s=>B(t,s.points)).sort((s,o)=>Z(s.points)-Z(o.points))[0]?.id??null}addDraftPoint(t,e){let i=this._draft;if(i.length>=3){let[o,r]=this.toScreen(i[0]);if(Math.hypot(o-e[0],r-e[1])<14){this.closeDraft();return}}let s=i[i.length-1];s&&Math.hypot(s[0]-t[0],s[1]-t[1])<1e-6||(this._draft=[...i,t])}closeDraft(){this._draft.length>=3&&Z(this._draft)>.05&&this.addRoom(this._draft),this._draft=[],this._cursor=null,this._guides={}}addRoom(t){if(!this.floor)return;let e=at("room"),i=this.floor.rooms.length+1;this.change((s,o)=>o.rooms.push({id:e,name:this.t("new_room",{n:i}),area_id:null,points:t.map(([r,a])=>[w(r),w(a)]),floor_material:"wood"})),this._roomId=e,this._vertex=null,this._tool="select"}onKey=t=>{if(t.composedPath().some(s=>s instanceof HTMLInputElement||s instanceof HTMLSelectElement||s instanceof HTMLTextAreaElement)||!this.isConnected||!this.offsetParent)return;let i=t.ctrlKey||t.metaKey;i&&t.key.toLowerCase()==="z"?(t.preventDefault(),t.shiftKey?this.redo():this.undo()):i&&t.key.toLowerCase()==="y"?(t.preventDefault(),this.redo()):i&&t.key.toLowerCase()==="d"?(t.preventDefault(),this.duplicateRoom()):t.key==="Delete"||t.key==="Backspace"&&this._tool==="select"?this._vertex!==null?this.deleteVertex(this._vertex):this.deleteRoom():t.key==="Backspace"&&this._tool==="polygon"?this._draft=this._draft.slice(0,-1):t.key==="Enter"&&this._tool==="polygon"?this.closeDraft():t.key==="Escape"&&(this._draft.length?this._draft=[]:this._tool!=="select"?this._tool="select":(this._roomId=null,this._vertex=null),this._cursor=null)};addFloor(){let t=this._doc.floors,e=t[t.length-1],i=at("floor"),s=t.length===0?this.t("default_floor"):this.t("new_floor",{n:t.length}),o=e?w(e.elevation+e.height+.25):0,r=structuredClone(this._doc);r.floors.push(Me(i,s,o)),this.setDoc(r),this._floorId=i,this._roomId=null}moveFloor(t){let e=this._doc.floors.findIndex(o=>o.id===this._floorId),i=e+t;if(e<0||i<0||i>=this._doc.floors.length)return;let s=structuredClone(this._doc);[s.floors[e],s.floors[i]]=[s.floors[i],s.floors[e]],this.setDoc(s)}deleteFloor(){let t=this.floor;if(!t||!confirm(this.t("delete_floor_confirm",{name:t.name})))return;let e=structuredClone(this._doc);e.floors=e.floors.filter(i=>i.id!==t.id),this.setDoc(e),this._floorId=e.floors[0]?.id??null,this._roomId=null}deleteRoom(){let t=this._roomId;!t||!this.isAdmin||(this.change((e,i)=>{let s=i.rooms.find(o=>o.id===t);i.rooms=i.rooms.filter(o=>o.id!==t),i.openings=i.openings.filter(o=>o.room_id!==t),s&&(i.placements=i.placements.filter(o=>!B([o.x,o.z],s.points)))}),this._roomId=null,this._vertex=null)}duplicateRoom(){let t=this.room;if(!t||!this.isAdmin)return;let e=at("room");this.change((i,s)=>s.rooms.push({...structuredClone(t),id:e,points:t.points.map(([o,r])=>[w(o+.5),w(r+.5)])})),this._roomId=e}placeDevices(t){let e=this.room;if(!e||!t.length||!this.isAdmin)return;let i=new Set(t);this.change((s,o)=>{for(let r of s.floors)r.placements=r.placements.filter(a=>!i.has(a.entity_id));o.placements.push(...Pe(e,t,o.placements.map(r=>[r.x,r.z])))})}removeDevice(t){this.change(e=>{for(let i of e.floors)i.placements=i.placements.filter(s=>s.entity_id!==t)})}deleteVertex(t){let e=this.room;!e||e.points.length<=3||(this.change((i,s)=>s.rooms.find(o=>o.id===e.id).points.splice(t,1)),this._vertex=null)}updateFloor(t){this.change((e,i)=>Object.assign(i,t))}updateRoom(t){let e=this._roomId;this.change((i,s)=>Object.assign(s.rooms.find(o=>o.id===e),t))}setArea(t){let e=this.room;if(!e)return;let i=t?this.hass?.areas?.[t]:void 0,s=!e.name||/^(Raum|Room) \d+$/.test(e.name)||Object.values(this.hass?.areas??{}).some(o=>o.name===e.name);this.updateRoom({area_id:t||null,...i&&s?{name:i.name}:{}})}setRect(t,e){let i=this.room;if(!i||!Number.isFinite(e))return;let s=ct(i.points),{x0:o,z0:r,x1:a,z1:l}=s;t==="x"&&([o,a]=[e,e+(a-o)]),t==="z"&&([r,l]=[e,e+(l-r)]),t==="w"&&e>.05&&(a=o+e),t==="d"&&e>.05&&(l=r+e),this.updateRoom({points:[[w(o),w(r)],[w(a),w(r)],[w(a),w(l)],[w(o),w(l)]]})}setPoint(t,e,i){let s=this.room;if(!s||!Number.isFinite(i))return;let o=s.points.map(r=>[...r]);o[t][e]=w(i),this.updateRoom({points:o})}async loadImage(t){this.loadingImages.add(t);try{let e=await ye(this.hass,t),i=new Image;i.src=e,await i.decode(),this._images={...this._images,[t]:{url:e,aspect:i.naturalHeight/i.naturalWidth}}}catch{}}async uploadBackground(t){let e=t.target,i=e.files?.[0];if(e.value="",!i)return;let s=await createImageBitmap(i),o=Math.min(1,2048/Math.max(s.width,s.height)),r=document.createElement("canvas");r.width=Math.round(s.width*o),r.height=Math.round(s.height*o),r.getContext("2d").drawImage(s,0,0,r.width,r.height);let a=r.toDataURL("image/jpeg",.85),l=at("img");await $e(this.hass,l,a),this._images={...this._images,[l]:{url:a,aspect:r.height/r.width}};let d=this.floor?.rooms.length?ct(this.floor.rooms.flatMap(f=>f.points)):null;this.updateFloor({background:{image_id:l,x:d?d.x0:0,z:d?d.z0:0,width:d?Math.max(4,w(d.x1-d.x0)):12,opacity:.5}})}render(){let t=this.floor,e=t?Be(t.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior}):null;return u`
      <div class="fp3d-editor ${this.narrow?"fp3d-narrow":""}">
        <div class="fp3d-main">
          <div class="fp3d-toolbar">
            <div class="fp3d-seg" role="group" aria-label=${this.t("tool_select")}>
              ${["select","rect","polygon"].map(i=>u`<button
                  aria-pressed=${this._tool===i}
                  ?disabled=${!t||!this.isAdmin&&i!=="select"}
                  @click=${()=>{this._tool=i,this._draft=[],this._cursor=null}}
                >
                  ${this.t(`tool_${i}`)}
                </button>`)}
            </div>
            <div class="fp3d-seg">
              <button ?disabled=${!this._canUndo} @click=${()=>this.undo()} title="Ctrl+Z">${this.t("undo")}</button>
              <button ?disabled=${!this._canRedo} @click=${()=>this.redo()} title="Ctrl+Y">${this.t("redo")}</button>
              <button @click=${()=>this.fit()}>${this.t("fit")}</button>
            </div>
            ${e?.warnings.length?u`<span class="fp3d-warn">${this.t("overlap_warning")}</span>`:h}
          </div>
          <div class="fp3d-canvas-wrap">
            <svg
              class="fp3d-plan fp3d-tool-${this._tool}"
              @pointerdown=${this.onPointerDown}
              @pointermove=${this.onPointerMove}
              @pointerup=${this.onPointerUp}
              @pointercancel=${this.onPointerUp}
              @pointerleave=${()=>{this.drag||(this._cursor=null)}}
              @wheel=${this.onWheel}
              @contextmenu=${i=>i.preventDefault()}
            >
              ${this.renderBackground(t)} ${this.renderGrid()} ${this.renderGhost()} ${e?this.renderWalls(e.walls):h}
              ${t?this.renderRooms(t):h} ${t&&this._tool==="select"?this.renderDevices(t):h}
              ${this.renderDraft()} ${this.renderGuides()}
            </svg>
            <p class="fp3d-hint">${t?this.t(`hint_${this._tool}`):this.t("hint_empty")}</p>
          </div>
        </div>
        <aside class="fp3d-side">${this.renderSide(t)}</aside>
      </div>
    `}renderBackground(t){let e=t?.background,i=e?this._images[e.image_id]:void 0;if(!e||!i)return h;let[s,o]=this.toScreen([e.x,e.z]),r=e.width*this._view.scale;return $`<image href=${i.url} x=${s} y=${o} width=${r} height=${r*i.aspect} opacity=${e.opacity} preserveAspectRatio="none" pointer-events="none" />`}renderGrid(){let{scale:t}=this._view,{w:e,h:i}=this._size,s=t>=90?.1:t>=30?.5:1,o=t>=20?1:5,[r,a]=this.toWorld(0,0),[l,d]=this.toWorld(e,i),f=[],m=(p,_)=>{for(let v=Math.ceil(r/p)*p;v<=l;v+=p){let x=this.toScreen([v,0])[0];f.push($`<line class=${_} x1=${x} y1="0" x2=${x} y2=${i} />`)}for(let v=Math.ceil(a/p)*p;v<=d;v+=p){let x=this.toScreen([0,v])[1];f.push($`<line class=${_} x1="0" y1=${x} x2=${e} y2=${x} />`)}};s<o&&m(s,"fp3d-grid-minor"),m(o,"fp3d-grid-major");let[g,c]=this.toScreen([0,0]);return f.push($`<circle class="fp3d-origin" cx=${g} cy=${c} r="3" />`),$`<g pointer-events="none">${f}</g>`}renderGhost(){let t=this._doc?.floors.findIndex(i=>i.id===this._floorId)??-1,e=t>0?this._doc.floors[t-1]:void 0;return e?$`<g pointer-events="none">${e.rooms.map(i=>$`<polygon class="fp3d-ghost" points=${i.points.map(s=>this.toScreen(s).join(",")).join(" ")} />`)}</g>`:h}renderWalls(t){return $`<g pointer-events="none">${t.map(e=>$`<polygon class=${e.exterior?"fp3d-wall fp3d-wall-ext":"fp3d-wall"} points=${e.footprint.map(i=>this.toScreen(i).join(",")).join(" ")} />`)}</g>`}renderRooms(t){let e=this.room;return $`
      <g>${t.rooms.map(i=>{let s=i.points.map(o=>this.toScreen(o).join(",")).join(" ");return $`<polygon data-room=${i.id} class=${i.id===this._roomId?"fp3d-room fp3d-room-sel":"fp3d-room"} points=${s} />`})}</g>
      <g pointer-events="none">${t.rooms.map(i=>{let[s,o]=this.toScreen(dt(i.points));return $`<text class="fp3d-room-name" x=${s} y=${o-2}>${i.name}</text>
          <text class="fp3d-room-area" x=${s} y=${o+14}>${this.t("area_m2",{a:z(this.hass,Z(i.points),1)})}</text>`})}</g>
      ${e&&this.isAdmin?this.renderHandles(e):h}
    `}renderDevices(t){return $`<g>${t.placements.map(e=>{let i=S(e.entity_id);if(!i)return h;let[s,o]=this.toScreen([e.x,e.z]),r=this.hass?.states[e.entity_id]?.state==="on";return $`<g data-device=${e.entity_id} class=${r?"fp3d-device fp3d-device-on":"fp3d-device"} transform="translate(${s} ${o})">
        <title>${T(this.hass,e.entity_id)}</title>
        <circle r="18" class="fp3d-hit" /><circle r="12" />
        <path d=${ft(i)} transform="translate(-7.2 -7.2) scale(0.6)" />
      </g>`})}</g>`}renderHandles(t){let e=t.points,i=e.length,s=e.map((r,a)=>{let l=e[(a+1)%i],[d,f]=this.toScreen(r),[m,g]=this.toScreen(l),c=Math.hypot(l[0]-r[0],l[1]-r[1]),p=(d+m)/2,_=(f+g)/2,[v,x]=this.toScreen(dt(e)),b=-(g-f),y=m-d,A=Math.hypot(b,y)||1;b/=A,y/=A,b*(p-v)+y*(_-x)<0&&(b=-b,y=-y);let k=Math.hypot(m-d,g-f);return $`
        ${k>50?$`<text class="fp3d-dim" x=${p+b*16} y=${_+y*16+4}>${z(this.hass,c,2)} m</text>`:h}
        ${k>36?$`<g data-mid=${a} class="fp3d-mid"><circle cx=${p} cy=${_} r="14" class="fp3d-hit" /><circle cx=${p} cy=${_} r="6" /><path d="M${p-3} ${_}h6M${p} ${_-3}v6" /></g>`:h}
      `}),o=e.map((r,a)=>{let[l,d]=this.toScreen(r);return $`<g data-vertex=${a} class=${a===this._vertex?"fp3d-vertex fp3d-vertex-sel":"fp3d-vertex"}><circle cx=${l} cy=${d} r="16" class="fp3d-hit" /><circle cx=${l} cy=${d} r="6" /></g>`});return $`<g>${s}${o}</g>`}renderDraft(){let t=this.drag;if(t?.kind==="rect"){let[i,s]=this.toScreen(t.start),[o,r]=this.toScreen(t.end),a=Math.abs(t.end[0]-t.start[0]),l=Math.abs(t.end[1]-t.start[1]);return $`<g pointer-events="none">
        <rect class="fp3d-draft" x=${Math.min(i,o)} y=${Math.min(s,r)} width=${Math.abs(o-i)} height=${Math.abs(r-s)} />
        <text class="fp3d-dim" x=${(i+o)/2} y=${Math.min(s,r)-8}>${z(this.hass,a,2)} × ${z(this.hass,l,2)} m</text>
      </g>`}if(this._tool!=="polygon")return h;let e=[...this._draft,...this._cursor?[this._cursor]:[]].map(i=>this.toScreen(i));return $`<g pointer-events="none">
      ${e.length>1?$`<polyline class="fp3d-draft" points=${e.map(i=>i.join(",")).join(" ")} />`:h}
      ${this._draft.map((i,s)=>{let[o,r]=this.toScreen(i);return $`<circle class=${s===0&&this._draft.length>=3?"fp3d-draft-pt fp3d-draft-first":"fp3d-draft-pt"} cx=${o} cy=${r} r=${s===0&&this._draft.length>=3?9:5} />`})}
      ${this._cursor?$`<circle class="fp3d-cursor" cx=${this.toScreen(this._cursor)[0]} cy=${this.toScreen(this._cursor)[1]} r="4" />`:h}
    </g>`}renderGuides(){let t=this._guides,{w:e,h:i}=this._size;return $`<g pointer-events="none">
      ${t.x!==void 0?$`<line class="fp3d-guide" x1=${this.toScreen([t.x,0])[0]} y1="0" x2=${this.toScreen([t.x,0])[0]} y2=${i} />`:h}
      ${t.z!==void 0?$`<line class="fp3d-guide" x1="0" y1=${this.toScreen([0,t.z])[1]} x2=${e} y2=${this.toScreen([0,t.z])[1]} />`:h}
      ${t.point?$`<circle class="fp3d-snap" cx=${this.toScreen(t.point)[0]} cy=${this.toScreen(t.point)[1]} r="9" />`:h}
    </g>`}num(t,e,i,s=.01,o){return u`<label class="fp3d-field"
      >${t}
      <input
        type="number"
        inputmode="decimal"
        step=${s}
        min=${o??h}
        .value=${String(w(e))}
        ?disabled=${!this.isAdmin}
        @change=${r=>{let a=parseFloat(r.target.value.replace(",","."));Number.isFinite(a)&&i(a)}}
    /></label>`}renderSide(t){let e=this._doc?.floors??[],i=this.room,s=this.isAdmin,o=Object.values(this.hass?.areas??{}).sort((r,a)=>r.name.localeCompare(a.name));return u`
      ${s?h:u`<p class="fp3d-note">${this.t("read_only")}</p>`}
      <section>
        <h3>${this.t("floors")}</h3>
        <div class="fp3d-floor-list">
          ${[...e].reverse().map(r=>u`<button
              class="fp3d-chip"
              aria-pressed=${r.id===this._floorId}
              @click=${()=>{this._floorId=r.id,this._roomId=null,this._vertex=null,this._draft=[],this.fit()}}
            >
              ${r.name}
            </button>`)}
          ${s?u`<button class="fp3d-btn" @click=${()=>this.addFloor()}>+ ${this.t("add_floor")}</button>`:h}
        </div>
        ${t?u`<div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${this.t("floor_name")}
                <input .value=${t.name} ?disabled=${!s} @change=${r=>this.updateFloor({name:r.target.value})}
              /></label>
              ${this.num(this.t("elevation"),t.elevation,r=>this.updateFloor({elevation:r}))}
              ${this.num(this.t("height"),t.height,r=>this.updateFloor({height:Math.max(1,r)}),.05,1)}
              ${s?u`<div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn" @click=${()=>this.moveFloor(1)}>${this.t("move_up")}</button>
                    <button class="fp3d-btn" @click=${()=>this.moveFloor(-1)}>${this.t("move_down")}</button>
                    <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFloor()}>${this.t("delete_floor")}</button>
                  </div>`:h}
            </div>`:h}
      </section>
      ${i?u`${this.renderRoomForm(i,o)} ${this.renderDeviceList(i)}`:t?this.renderRoomList(t):h}
      ${t&&s?this.renderBackgroundForm(t):h} ${s?this.renderSettings():h}
    `}renderRoomList(t){return t.rooms.length?u`<section>
      <h3>${this.t("rooms")}</h3>
      <div class="fp3d-room-list">
        ${t.rooms.map(e=>u`<button class="fp3d-row" @click=${()=>this._roomId=e.id}>
            <span>${e.name}</span><span class="fp3d-muted">${this.t("area_m2",{a:z(this.hass,Z(e.points),1)})}</span>
          </button>`)}
      </div>
    </section>`:h}renderRoomForm(t,e){let i=this.isAdmin,s=Se(t.points),o=ct(t.points);return u`<section>
      <h3>${this.t("room")}</h3>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("room_name")}
          <input .value=${t.name} ?disabled=${!i} @change=${r=>this.updateRoom({name:r.target.value})}
        /></label>
        <label class="fp3d-field fp3d-wide"
          >${this.t("area")}
          <select ?disabled=${!i} @change=${r=>this.setArea(r.target.value)}>
            <option value="" ?selected=${!t.area_id}>${this.t("no_area")}</option>
            ${e.map(r=>u`<option value=${r.area_id} ?selected=${r.area_id===t.area_id}>${r.name}</option>`)}
          </select></label
        >
        <label class="fp3d-field fp3d-wide"
          >${this.t("material")}
          <select ?disabled=${!i} @change=${r=>this.updateRoom({floor_material:r.target.value})}>
            ${ke.map(r=>u`<option value=${r} ?selected=${r===t.floor_material}>${this.t(`mat_${r}`)}</option>`)}
          </select></label
        >
        ${s?u`${this.num(this.t("x"),o.x0,r=>this.setRect("x",r))} ${this.num(this.t("z"),o.z0,r=>this.setRect("z",r))}
            ${this.num(this.t("width"),o.x1-o.x0,r=>this.setRect("w",r),.01,.05)}
            ${this.num(this.t("depth"),o.z1-o.z0,r=>this.setRect("d",r),.01,.05)}`:h}
      </div>
      <details class="fp3d-points" ?open=${!s}>
        <summary>${this.t("points")} (${t.points.length})</summary>
        ${t.points.map((r,a)=>u`<div class="fp3d-point ${a===this._vertex?"fp3d-point-sel":""}">
            <span class="fp3d-muted">${a+1}</span>
            ${this.num(this.t("x"),r[0],l=>this.setPoint(a,0,l))} ${this.num(this.t("z"),r[1],l=>this.setPoint(a,1,l))}
            ${i?u`<button class="fp3d-btn" title=${this.t("delete_point")} ?disabled=${t.points.length<=3} @click=${()=>this.deleteVertex(a)}>
                  ×
                </button>`:h}
          </div>`)}
      </details>
      ${i?u`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.duplicateRoom()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoom()}>${this.t("delete")}</button>
          </div>`:h}
    </section>`}renderDeviceList(t){let e=this.isAdmin,i=t.area_id?this.hass?.areas?.[t.area_id]?.name:void 0,s=this.hass?yt(this.hass,t.area_id).filter(a=>Ie(S(a))):[],o=new Set(this.floor?.placements.filter(a=>B([a.x,a.z],t.points)).map(a=>a.entity_id)),r=s.filter(a=>!o.has(a));return u`<section>
      <h3>${this.t("devices")}</h3>
      ${t.area_id?s.length?u`${e&&r.length?u`<button class="fp3d-btn fp3d-primary fp3d-wide-btn" @click=${()=>this.placeDevices(r)}>${this.t("devices_place_all")}</button>`:h}
              <div class="fp3d-room-list">
                ${s.map(a=>{let l=o.has(a);return u`<div class="fp3d-row fp3d-dev-row">
                    <span class="fp3d-dev-name ${l?"":"fp3d-muted"}">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d=${ft(S(a))} />
                      </svg>
                      ${T(this.hass,a,i)}
                    </span>
                    ${e?l?u`<button class="fp3d-link" @click=${()=>this.removeDevice(a)}>${this.t("devices_remove")}</button>`:u`<button class="fp3d-link" @click=${()=>this.placeDevices([a])}>${this.t("devices_place")}</button>`:h}
                  </div>`})}
              </div>
              <p class="fp3d-sub">${this.t("devices_hint")}</p>`:u`<p class="fp3d-sub">${this.t("devices_none")}</p>`:u`<p class="fp3d-sub">${this.t("devices_none_area")}</p>`}
    </section>`}renderBackgroundForm(t){let e=t.background;return u`<details class="fp3d-section">
      <summary>${this.t("background")}</summary>
      <div class="fp3d-form">
        <label class="fp3d-btn fp3d-wide fp3d-upload"
          >${this.t("background_upload")}<input type="file" accept="image/png,image/jpeg,image/webp" @change=${this.uploadBackground}
        /></label>
        ${e?u`${this.num(this.t("x"),e.x,i=>this.updateFloor({background:{...e,x:i}}))}
              ${this.num(this.t("z"),e.z,i=>this.updateFloor({background:{...e,z:i}}))}
              ${this.num(this.t("background_width"),e.width,i=>this.updateFloor({background:{...e,width:Math.max(.1,i)}}),.01,.1)}
              <label class="fp3d-field"
                >${this.t("background_opacity")}
                <input
                  type="range"
                  min="0.05"
                  max="1"
                  step="0.05"
                  .value=${String(e.opacity)}
                  @change=${i=>this.updateFloor({background:{...e,opacity:parseFloat(i.target.value)}})}
              /></label>
              <button class="fp3d-btn fp3d-danger fp3d-wide" @click=${()=>this.updateFloor({background:null})}>${this.t("background_remove")}</button>`:h}
      </div>
    </details>`}renderSettings(){let t=this._doc.settings,e=i=>{let s=structuredClone(this._doc);Object.assign(s.settings,i),this.setDoc(s)};return u`<details class="fp3d-section">
      <summary>${this.t("settings")}</summary>
      <div class="fp3d-form">
        ${this.num(this.t("wall_exterior"),t.wall_exterior,i=>e({wall_exterior:Math.min(1,Math.max(.02,i))}),.01,.02)}
        ${this.num(this.t("wall_interior"),t.wall_interior,i=>e({wall_interior:Math.min(1,Math.max(.02,i))}),.01,.02)}
        ${this.num(this.t("grid"),t.grid,i=>e({grid:Math.min(1,Math.max(.01,i))}),.01,.01)}
      </div>
    </details>`}static styles=[V,J,C`
      :host {
        display: block;
        height: 100%;
      }
      .fp3d-editor {
        display: grid;
        grid-template-columns: 1fr 320px;
        height: 100%;
        min-height: 0;
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
    `]};customElements.get("fp3d-editor")||customElements.define("fp3d-editor",Ut);var N=(n,t)=>E(n,t);function L(n,t){if(!t||P(t))return N(n,"state_unavailable");let e=t.attributes;switch(S(t.entity_id)){case"light":return t.state!=="on"?N(n,"state_off"):typeof e.brightness=="number"?`${Math.round(e.brightness/255*100)} %`:N(n,"state_on");case"switch":case"fan":return N(n,t.state==="on"?"state_on":"state_off");case"cover":return typeof e.current_position=="number"&&t.state!=="opening"&&t.state!=="closing"?`${e.current_position} %`:wt(n,t.state);case"climate":{let i=typeof e.current_temperature=="number"?`${z(n,e.current_temperature,1)} \xB0C`:null;return t.state==="off"?i?`${i} \xB7 ${N(n,"state_off")}`:N(n,"state_off"):i??wt(n,t.state)}case"media":return t.state==="playing"&&typeof e.media_title=="string"?e.media_title:wt(n,t.state);case"lock":return wt(n,t.state);case"binary":return["door","window","opening","garage_door"].includes(e.device_class)?N(n,t.state==="on"?"state_open":"state_closed"):N(n,t.state==="on"?"state_detected":"state_clear");case"sensor":{let i=Number(t.state),s=e.unit_of_measurement??"";return Number.isFinite(i)?`${z(n,i,1)}${s?` ${s}`:""}`:t.state}default:return""}}function wt(n,t){let e=`state_${t}`,i=E(n,e);return i===e?t:i}function Fe(n,t){let e=[];for(let i of t.floors)for(let s of i.placements){let o=S(s.entity_id),r=n.states[s.entity_id];if(!o||!r)continue;let a=i.rooms.find(d=>d.points.length>=3&&B([s.x,s.z],d.points))??null,l=a?.area_id?n.areas?.[a.area_id]?.name:void 0;e.push({id:s.entity_id,floorId:i.id,roomId:a?.id??null,x:s.x,z:s.z,y:s.y??ze(o,i.height),icon:Oe(o),name:T(n,s.entity_id,l),text:L(n,r),active:Re(r),unavailable:P(r),glow:o==="light"?Ce(r):null})}return e}function We(n){return n.floors.flatMap(t=>t.placements.map(e=>e.entity_id))}function mt(n,t){n.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}function Ke(n,t){let e=t.slice(0,t.indexOf("."));return n.callService(e,"toggle",{entity_id:t})}var $i=4,wi=8,ki=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[255,95,210],[120,255,150]],X=n=>u`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${ft(n)} />
  </svg>`,kt={previous:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z"},Nt=n=>u`<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d=${n} /></svg>`,Ft=class extends R{static properties={hass:{attribute:!1},room:{attribute:!1}};constructor(){super(),this.room=null}t(t,e){return E(this.hass,t,e)}call(t,e,i){this.hass.callService(t,e,i)}get areaName(){return this.room?.area_id?this.hass.areas?.[this.room.area_id]?.name:void 0}name(t){return T(this.hass,t,this.areaName)}nameButton(t){return u`<button class="fp3d-rp-name" title=${this.t("details")} @click=${()=>mt(this,t)}>${this.name(t)}</button>`}toggle(t,e,i){return u`<button
      class="fp3d-switch"
      role="switch"
      aria-checked=${e?"true":"false"}
      aria-label=${this.name(t.entity_id)}
      ?disabled=${P(t)}
      @click=${i}
    ></button>`}render(){let t=this.room;if(!t||!this.hass)return h;let e=yt(this.hass,t.area_id),i=c=>e.filter(p=>c.includes(S(p))).map(p=>this.hass.states[p]),s=i(["light"]),o=i(["cover"]),r=i(["climate"]),a=i(["media"]),l=i(["switch","fan","lock"]),d=i(["sensor","binary"]),f=i(["scene","script"]),m=this.facts(d,r),g=s.filter(c=>c.state==="on");return u`<section class="fp3d-rp" aria-label=${t.name}>
      <header class="fp3d-rp-head">
        <div>
          <h2>${t.name}</h2>
          ${m.length?u`<p class="fp3d-rp-facts">${m.join(" \xB7 ")}</p>`:h}
        </div>
        <button class="fp3d-rp-close" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>
      <div class="fp3d-rp-body">
        ${t.area_id?e.length?h:u`<p class="fp3d-rp-note">${this.t("panel_empty")}</p>`:u`<p class="fp3d-rp-note">${this.t("panel_no_area")}</p>`}
        ${s.length?this.section("panel_lights",s.map(c=>this.lightRow(c)),g.length?u`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_off",{entity_id:g.map(c=>c.entity_id)})}>
                    ${this.t("panel_all_off")}
                  </button>`:h):h}
        ${o.length?this.section("panel_covers",o.map(c=>this.coverRow(c))):h}
        ${r.length?this.section("panel_climate",r.map(c=>this.climateRow(c))):h}
        ${a.length?this.section("panel_media",a.map(c=>this.mediaRow(c))):h}
        ${l.length?this.section("panel_switches",l.map(c=>this.switchRow(c))):h}
        ${d.length?this.section("panel_sensors",d.map(c=>this.sensorRow(c))):h}
        ${f.length?this.section("panel_scenes",[u`<div class="fp3d-rp-scenes">
                  ${f.map(c=>u`<button
                      class="fp3d-btn"
                      ?disabled=${P(c)}
                      @click=${()=>this.call(S(c.entity_id)==="scene"?"scene":"script","turn_on",{entity_id:c.entity_id})}
                    >
                      ${this.name(c.entity_id)}
                    </button>`)}
                </div>`]):h}
      </div>
    </section>`}facts(t,e){let i=[],s=t.find(a=>a.attributes.device_class==="temperature"&&!P(a)),o=e.find(a=>typeof a.attributes.current_temperature=="number");s?i.push(L(this.hass,s)):o&&i.push(`${z(this.hass,o.attributes.current_temperature,1)} \xB0C`);let r=t.find(a=>a.attributes.device_class==="humidity"&&!P(a));return r&&i.push(L(this.hass,r)),i}section(t,e,i=h){return u`<div class="fp3d-rp-sec">
      <div class="fp3d-rp-sec-head"><h3>${this.t(t)}</h3>${i}</div>
      ${e}
    </div>`}lightRow(t){let e=t.attributes,i=t.state==="on",s=e.supported_color_modes??[],o=s.some(g=>g!=="onoff"),r=s.includes("color_temp"),a=s.some(g=>["hs","rgb","rgbw","rgbww","xy"].includes(g)),l=typeof e.brightness=="number"?Math.round(e.brightness/255*100):100,d=e.min_color_temp_kelvin??2200,f=e.max_color_temp_kelvin??6500,m=t.entity_id;return u`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${i?"fp3d-rp-on":""}">${X("light")}</span>
      ${this.nameButton(m)}
      <span class="fp3d-rp-state">${L(this.hass,t)}</span>
      ${this.toggle(t,i,()=>this.call("light","toggle",{entity_id:m}))}
      ${i&&o?u`<label class="fp3d-rp-slider"
            ><span>${this.t("brightness")}</span>
            <input
              type="range"
              min="1"
              max="100"
              .value=${String(l)}
              @change=${g=>this.call("light","turn_on",{entity_id:m,brightness_pct:Number(g.target.value)})}
          /></label>`:h}
      ${i&&r?u`<label class="fp3d-rp-slider fp3d-rp-ct"
            ><span>${this.t("color_temp")}</span>
            <input
              type="range"
              min=${d}
              max=${f}
              step="50"
              .value=${String(e.color_temp_kelvin??d)}
              @change=${g=>this.call("light","turn_on",{entity_id:m,color_temp_kelvin:Number(g.target.value)})}
          /></label>`:h}
      ${i&&a?u`<div class="fp3d-rp-swatches" role="group" aria-label=${this.t("color")}>
            ${ki.map(g=>u`<button
                class="fp3d-rp-swatch"
                style="--c: rgb(${g.join(",")})"
                aria-label="rgb(${g.join(", ")})"
                @click=${()=>this.call("light","turn_on",{entity_id:m,rgb_color:g})}
              ></button>`)}
          </div>`:h}
    </div>`}coverRow(t){let e=t.attributes,i=e.supported_features??0,s=t.entity_id,o=P(t);return u`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon">${X("cover")}</span>
      ${this.nameButton(s)}
      <span class="fp3d-rp-state">${L(this.hass,t)}</span>
      <div class="fp3d-rp-buttons">
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${o} @click=${()=>this.call("cover","open_cover",{entity_id:s})}>${this.t("cover_open")}</button>
        ${i&wi?u`<button class="fp3d-btn fp3d-rp-small" ?disabled=${o} @click=${()=>this.call("cover","stop_cover",{entity_id:s})}>${this.t("cover_stop")}</button>`:h}
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${o} @click=${()=>this.call("cover","close_cover",{entity_id:s})}>${this.t("cover_close")}</button>
      </div>
      ${i&$i&&typeof e.current_position=="number"?u`<label class="fp3d-rp-slider"
            ><span>${this.t("position")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${o}
              .value=${String(e.current_position)}
              @change=${r=>this.call("cover","set_cover_position",{entity_id:s,position:Number(r.target.value)})}
          /></label>`:h}
    </div>`}climateRow(t){let e=t.attributes,i=t.entity_id,s=typeof e.temperature=="number"?e.temperature:null,o=e.target_temp_step??.5,r=e.min_temp??5,a=e.max_temp??30,l=e.hvac_modes??[],d=f=>this.call("climate","set_temperature",{entity_id:i,temperature:Math.min(a,Math.max(r,Math.round(f/o)*o))});return u`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${e.hvac_action==="heating"?"fp3d-rp-on":""}">${X("climate")}</span>
      ${this.nameButton(i)}
      <span class="fp3d-rp-state">${L(this.hass,t)}</span>
      ${s!==null?u`<div class="fp3d-rp-stepper fp3d-rp-wide">
            <button class="fp3d-btn" aria-label=${this.t("temp_down")} @click=${()=>d(s-o)}>−</button>
            <span><small>${this.t("target_temp")}</small> ${z(this.hass,s,1)} °C</span>
            <button class="fp3d-btn" aria-label=${this.t("temp_up")} @click=${()=>d(s+o)}>+</button>
          </div>`:h}
      ${l.length>1?u`<div class="fp3d-rp-chips">
            ${l.map(f=>u`<button
                class="fp3d-chip"
                aria-pressed=${t.state===f}
                @click=${()=>this.call("climate","set_hvac_mode",{entity_id:i,hvac_mode:f})}
              >
                ${this.stateLabel(f)}
              </button>`)}
          </div>`:h}
    </div>`}stateLabel(t){let e=`state_${t}`,i=this.t(e);return i===e?t:i}mediaRow(t){let e=t.attributes,i=t.entity_id,s=P(t)||t.state==="off",o=[e.media_title,e.media_artist].filter(r=>typeof r=="string"&&r).join(" \xB7 ");return u`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${t.state==="playing"?"fp3d-rp-on":""}">${X("media")}</span>
      ${this.nameButton(i)}
      <span class="fp3d-rp-state">${this.stateLabel(t.state)}</span>
      ${o?u`<p class="fp3d-rp-media fp3d-rp-wide">${o}</p>`:h}
      <div class="fp3d-rp-buttons fp3d-rp-wide">
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("previous")} ?disabled=${s} @click=${()=>this.call("media_player","media_previous_track",{entity_id:i})}>
          ${Nt(kt.previous)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("play_pause")} ?disabled=${P(t)} @click=${()=>this.call("media_player","media_play_pause",{entity_id:i})}>
          ${Nt(t.state==="playing"?kt.pause:kt.play)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("next")} ?disabled=${s} @click=${()=>this.call("media_player","media_next_track",{entity_id:i})}>
          ${Nt(kt.next)}
        </button>
      </div>
      ${typeof e.volume_level=="number"?u`<label class="fp3d-rp-slider"
            ><span>${this.t("volume")}</span>
            <input
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(e.volume_level*100))}
              @change=${r=>this.call("media_player","volume_set",{entity_id:i,volume_level:Number(r.target.value)/100})}
          /></label>`:h}
    </div>`}switchRow(t){let e=t.entity_id,i=S(e),s=e.slice(0,e.indexOf(".")),o=i==="lock"?t.state==="unlocked"||t.state==="open":t.state==="on",r=()=>i==="lock"?this.call("lock",o?"lock":"unlock",{entity_id:e}):this.call(s,"toggle",{entity_id:e});return u`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${o?"fp3d-rp-on":""}">${X(i)}</span>
      ${this.nameButton(e)}
      <span class="fp3d-rp-state">${L(this.hass,t)}</span>
      ${this.toggle(t,o,r)}
    </div>`}sensorRow(t){let e=S(t.entity_id),i=e==="binary"&&t.state==="on";return u`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${i?"fp3d-rp-on":""}">${X(e)}</span>
      ${this.nameButton(t.entity_id)}
      <span class="fp3d-rp-state">${L(this.hass,t)}</span>
    </div>`}fire(t){this.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0}))}static styles=[V,J,C`
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
    `]};customElements.get("fp3d-room-panel")||customElements.define("fp3d-room-panel",Ft);var Mi=new URL(import.meta.url),Si=new URL("./floorplan-3d-3d.js?v=804a6bc4a201",Mi).href,je;function qe(){return je??=import(Si),je}var Wt=class extends R{static properties={hass:{attribute:!1},building:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},wallMode:{attribute:!1},explode:{type:Boolean},quality:{attribute:!1},showStats:{type:Boolean},_stats:{state:!0},_error:{state:!0}};viewer=null;starting=!1;shownStates=new Map;constructor(){super(),this.building=null,this.floorId=null,this.roomId=null,this.wallMode="auto",this.explode=!0,this.quality="auto",this.showStats=!1,this._stats=null,this._error=null}connectedCallback(){super.connectedCallback(),this.hasUpdated&&!this.viewer&&this.start()}disconnectedCallback(){super.disconnectedCallback(),this.viewer?.dispose(),this.viewer=null}firstUpdated(){this.start()}async start(){if(!(this.starting||this.viewer)){this.starting=!0;try{let t=await qe();if(!this.isConnected)return;let e=this.renderRoot.querySelector(".fp3d-stage");this.viewer=t.createViewer(e,{quality:this.quality,explode:this.explode,onRoomTap:(i,s)=>this.fire("room-tap",{floorId:i,roomId:s}),onFloorTap:i=>this.fire("floor-tap",{floorId:i}),floorInfo:i=>i.rooms.length===1?E(this.hass,"floor_rooms_one"):E(this.hass,"floor_rooms",{n:i.rooms.length}),onBack:()=>this.fire("back",{}),onDeviceTap:i=>this.onDeviceTap(i),onDeviceHold:i=>mt(this,i),onStats:this.showStats?i=>this._stats=i:void 0}),this.viewer.setWallMode(this.wallMode),this.building&&this.viewer.setBuilding(this.building),this.syncDevices(!0),this.viewer.setFloor(this.floorId,!1),this.roomId&&this.viewer.selectRoom(this.roomId)}catch(t){this._error=String(t)}finally{this.starting=!1}}}updated(t){let e=this.viewer;e&&(t.has("building")&&this.building&&e.setBuilding(this.building),(t.has("building")||t.has("hass"))&&this.syncDevices(t.has("building")),t.has("floorId")&&e.setFloor(this.floorId),t.has("roomId")&&(this.roomId||t.get("roomId"))&&e.selectRoom(this.roomId),t.has("wallMode")&&e.setWallMode(this.wallMode),t.has("explode")&&e.setExplode(this.explode),t.has("quality")&&t.get("quality")!==void 0&&e.setQuality(this.quality))}syncDevices(t){let e=this.viewer;if(!e||!this.building||!this.hass)return;let i=We(this.building);(t||i.length!==this.shownStates.size||i.some(o=>this.shownStates.get(o)!==this.hass.states[o]))&&(this.shownStates=new Map(i.map(o=>[o,this.hass.states[o]])),e.setDevices(Fe(this.hass,this.building)))}onDeviceTap(t){let e=S(t);e&&Ae.has(e)?Ke(this.hass,t):mt(this,t)}resetView(){this.viewer?.resetView()}fire(t,e){this.dispatchEvent(new CustomEvent(t,{detail:e,bubbles:!0,composed:!0}))}render(){return u`<div class="fp3d-stage">
      ${this._error?u`<p class="fp3d-error">${this._error}</p>`:h}
      ${this.showStats&&this._stats?u`<span class="fp3d-stats"
            >${E(this.hass,"stats",{fps:this._stats.fps,calls:this._stats.calls,tris:this._stats.triangles.toLocaleString()})}</span
          >`:h}
    </div>`}static styles=[V,C`
      :host {
        display: block;
        position: relative;
        min-height: 200px;
      }
      .fp3d-stage {
        position: absolute;
        inset: 0;
        overflow: hidden;
        background: radial-gradient(ellipse at 50% 35%, var(--fp3d-bg2), var(--fp3d-bg) 72%);
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
      .fp3d-dev-text {
        display: none;
        padding-right: 6px;
        color: var(--fp3d-text);
        font-variant-numeric: tabular-nums;
        max-width: 160px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-dev-full .fp3d-dev-text {
        display: inline;
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
      .fp3d-stats {
        position: absolute;
        right: 10px;
        bottom: 8px;
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
    `]};customElements.get("fp3d-view3d")||customElements.define("fp3d-view3d",Wt);var Mt={get(n){try{return localStorage.getItem(`floorplan_3d.${n}`)}catch{return null}},set(n,t){try{localStorage.setItem(`floorplan_3d.${n}`,t)}catch{}}},Kt=class extends R{static properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_mode:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_wallMode:{state:!0},_explode:{state:!0},_quality:{state:!0}};data=new Y(this);showStats=new URLSearchParams(location.search).has("fp3d_stats");constructor(){super(),this.narrow=!1,this._mode="view",this._floorId=null,this._roomId=null,this._wallMode="auto",this._explode=Mt.get("explode")!=="0";let t=Mt.get("quality");this._quality=t==="low"||t==="high"?t:"auto"}t(t,e){return E(this.hass,t,e)}willUpdate(t){t.has("hass")&&this.hass&&this.data.setHass(this.hass);let e=this.data.building;e&&this._floorId&&!e.floors.some(i=>i.id===this._floorId)&&(this._floorId=null,this._roomId=null)}get isAdmin(){return this.hass?.user?.is_admin??!1}setMode(t){t!==this._mode&&(t==="view"&&this.data.flush(),this._mode=t)}onRoomTap(t){let{floorId:e,roomId:i}=t.detail;i&&(this._floorId===null&&(this.data.building?.floors.length??0)>1&&(this._floorId=e),this._roomId=i===this._roomId?null:i)}setExplode(t){this._explode=t,Mt.set("explode",t?"1":"0")}setQuality(t){this._quality=t,Mt.set("quality",t)}back(){this._roomId?this._roomId=null:this._floorId&&(this.data.building?.floors.length??0)>1?this._floorId=null:this.renderRoot.querySelector("fp3d-view3d")?.resetView()}onKey=t=>{t.key==="Escape"&&this._mode==="view"&&this.back()};connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey)}render(){let t=this.data.building,e=this.data.saveState;return u`
      <div class="fp3d-app">
        <header class="fp3d-header">
          <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
          <h1>Floorplan 3D</h1>
          ${this.isAdmin?u`<div class="fp3d-seg" role="tablist">
                <button role="tab" aria-pressed=${this._mode==="view"} @click=${()=>this.setMode("view")}>${this.t("view")}</button>
                <button role="tab" aria-pressed=${this._mode==="editor"} @click=${()=>this.setMode("editor")}>${this.t("editor")}</button>
              </div>`:h}
          <span class="fp3d-grow"></span>
          ${this._mode==="view"&&t?.floors.some(i=>i.rooms.length)?u`<div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("quality")}>
                ${["auto","low","high"].map(i=>u`<button aria-pressed=${this._quality===i} @click=${()=>this.setQuality(i)}>${this.t(`quality_${i}`)}</button>`)}
              </div>`:h}
          ${this._mode==="editor"&&e!=="idle"?u`<span class="fp3d-save fp3d-save-${e}">${this.t(e==="saving"?"saving":e==="saved"?"saved":"save_error")}</span>`:h}
        </header>
        ${this.data.error&&!t?u`<p class="fp3d-message">${this.t("load_error")}: ${this.data.error}</p>`:h}
        ${!t&&!this.data.error?u`<p class="fp3d-message">${this.t("loading")}</p>`:h}
        ${t?this._mode==="editor"&&this.isAdmin?this.renderEditor(t):this.renderView(t):h}
      </div>
    `}renderEditor(t){return u`<fp3d-editor
      class="fp3d-body"
      .hass=${this.hass}
      .building=${t}
      .narrow=${this.narrow}
      @building-changed=${e=>this.data.edit(e.detail.building)}
    ></fp3d-editor>`}renderView(t){if(!t.floors.length||!t.floors.some(s=>s.rooms.length))return u`<div class="fp3d-empty">
        <p>${this.t(this.isAdmin?"no_building_admin":"no_building")}</p>
        ${this.isAdmin?u`<button class="fp3d-btn fp3d-primary" @click=${()=>this.setMode("editor")}>${this.t("open_editor")}</button>`:h}
      </div>`;let e=t.floors.find(s=>s.id===this._floorId),i=e?[e]:t.floors;return u`
      <nav class="fp3d-nav">
        ${t.floors.length>1?u`<button class="fp3d-chip" aria-pressed=${this._floorId===null} @click=${()=>{this._floorId=null,this._roomId=null}}>
                ${this.t("all_floors")}
              </button>
              ${[...t.floors].reverse().map(s=>u`<button
                  class="fp3d-chip"
                  aria-pressed=${s.id===this._floorId}
                  @click=${()=>{this._floorId=s.id,this._roomId=null}}
                >
                  ${s.name}
                </button>`)}
              <span class="fp3d-sep"></span>`:h}
        ${i.flatMap(s=>s.rooms.map(o=>u`<button
              class="fp3d-chip fp3d-room-chip"
              aria-pressed=${o.id===this._roomId}
              @click=${()=>{t.floors.length>1&&(this._floorId=s.id),this._roomId=o.id===this._roomId?null:o.id}}
            >
              ${o.name}
            </button>`))}
      </nav>
      <div class="fp3d-stage-wrap">
        <fp3d-view3d
          class="fp3d-body"
          .hass=${this.hass}
          .building=${t}
          .floorId=${t.floors.length>1?this._floorId:t.floors[0]?.id??null}
          .roomId=${this._roomId}
          .wallMode=${this._wallMode}
          .explode=${this._explode}
          .quality=${this._quality}
          ?showStats=${this.showStats}
          @room-tap=${this.onRoomTap}
          @floor-tap=${s=>{this._floorId=s.detail.floorId,this._roomId=null}}
          @back=${()=>this.back()}
        ></fp3d-view3d>
        ${this._roomId?u`<fp3d-room-panel
              class="fp3d-room-panel"
              .hass=${this.hass}
              .room=${t.floors.flatMap(s=>s.rooms).find(s=>s.id===this._roomId)??null}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:h}
        <div class="fp3d-overlay">
          <div class="fp3d-seg">
            <button aria-pressed=${this._wallMode==="auto"} @click=${()=>this._wallMode="auto"}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wallMode==="cut"} @click=${()=>this._wallMode="cut"}>${this.t("walls_cut")}</button>
          </div>
          ${t.floors.length>1&&!this._floorId?u`<div class="fp3d-seg">
                <button aria-pressed=${this._explode} @click=${()=>this.setExplode(!0)}>${this.t("floors_apart")}</button>
                <button aria-pressed=${!this._explode} @click=${()=>this.setExplode(!1)}>${this.t("floors_stacked")}</button>
              </div>`:h}
          ${this._roomId||this._floorId&&t.floors.length>1?u`<button class="fp3d-chip" @click=${()=>this.back()}>${this.t("back")}</button>`:h}
        </div>
      </div>
    `}static styles=[V,J,C`
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
      /* phones and portrait tablets: panel as a sheet at the bottom */
      @media (max-width: 700px), (orientation: portrait) and (max-width: 1000px) {
        .fp3d-room-panel {
          top: auto;
          left: 8px;
          right: 8px;
          bottom: 8px;
          width: auto;
          height: 55%;
          justify-content: flex-end;
        }
      }
      .fp3d-overlay {
        position: absolute;
        right: 14px;
        top: 10px;
        left: 14px;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
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
    `]};customElements.get("floorplan-3d-panel")||customElements.define("floorplan-3d-panel",Kt);var jt=class extends R{static properties={hass:{attribute:!1},_config:{state:!0},_roomId:{state:!0},_floorId:{state:!0}};data=new Y(this);constructor(){super(),this._roomId=null,this._floorId=null}static getStubConfig(){return{type:"custom:floorplan-3d-card"}}setConfig(t){if(t.height!==void 0&&!(t.height>100))throw new Error("height must be a number of pixels above 100");this._config=t}getCardSize(){return Math.ceil((this._config?.height??420)/50)}getGridOptions(){return{columns:"full",rows:Math.ceil((this._config?.height??420)/56),min_rows:4}}willUpdate(t){t.has("hass")&&this.hass&&this.data.setHass(this.hass)}back(){this._roomId?this._roomId=null:this._config?.floor||(this._floorId=null)}render(){let t=this.data.building,e=this._config?.height??420,i=this._config?.floor??(t&&t.floors.length===1?t.floors[0].id:t?.floors.some(o=>o.id===this._floorId)?this._floorId:null),s=!!this._roomId||!this._config?.floor&&!!this._floorId&&(t?.floors.length??0)>1;return u`<ha-card>
      <div class="fp3d-card-body" style="height:${e}px">
        ${t&&t.floors.some(o=>o.rooms.length)?u`<fp3d-view3d
              .hass=${this.hass}
              .building=${t}
              .floorId=${i}
              .roomId=${this._roomId}
              .wallMode=${this._config?.walls??"auto"}
              .explode=${this._config?.explode??!0}
              .quality=${this._config?.quality??"auto"}
              @room-tap=${o=>{o.detail.roomId&&(!i&&!this._config?.floor&&(this._floorId=o.detail.floorId),this._roomId=o.detail.roomId===this._roomId?null:o.detail.roomId)}}
              @floor-tap=${o=>{this._floorId=o.detail.floorId,this._roomId=null}}
              @back=${()=>this.back()}
            ></fp3d-view3d>`:u`<p class="fp3d-card-msg">${this.data.error??(t?E(this.hass,"no_building"):E(this.hass,"loading"))}</p>`}
        ${this._roomId&&t?u`<fp3d-room-panel
              class="fp3d-card-panel"
              .hass=${this.hass}
              .room=${t.floors.flatMap(o=>o.rooms).find(o=>o.id===this._roomId)??null}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:h}
        ${s?u`<button class="fp3d-card-back" @click=${()=>this.back()}>${E(this.hass,"back")}</button>`:h}
      </div>
    </ha-card>`}static styles=[V,C`
      ha-card {
        overflow: hidden;
        background: var(--fp3d-bg);
        height: 100%;
      }
      .fp3d-card-body {
        position: relative;
        display: flex;
        height: 100%;
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
      .fp3d-card-back {
        position: absolute;
        left: 10px;
        top: 10px;
        font: 500 13px var(--fp3d-font);
        color: var(--fp3d-text);
        background: var(--fp3d-chrome);
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        padding: 6px 12px;
        cursor: pointer;
      }
    `]};if(!customElements.get("floorplan-3d-card")){customElements.define("floorplan-3d-card",jt);let n=window;n.customCards=n.customCards??[],n.customCards.push({type:"floorplan-3d-card",name:E(void 0,"card_name"),description:E(void 0,"card_description"),preview:!1})}Xt();
