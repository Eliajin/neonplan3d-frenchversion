var zt=new URL(import.meta.url),Ct=zt.searchParams.get("v"),Pt=r=>new URL(`./fonts/${r}${Ct?`?v=${Ct}`:""}`,zt).href,Vt="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD";function Ut(){if(typeof document>"u"||document.getElementById("fp3d-fonts"))return;let r=document.createElement("style");r.id="fp3d-fonts",r.textContent=`
@font-face{font-family:"Figtree";font-style:normal;font-display:swap;font-weight:300 900;src:url(${Pt("figtree.woff2")}) format("woff2");unicode-range:${Vt}}
@font-face{font-family:"Bricolage Grotesque";font-style:normal;font-display:swap;font-weight:200 800;src:url(${Pt("bricolage-grotesque.woff2")}) format("woff2");unicode-range:${Vt}}`,document.head.append(r)}var rt=globalThis,nt=rt.ShadowRoot&&(rt.ShadyCSS===void 0||rt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pt=Symbol(),Bt=new WeakMap,j=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==pt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(nt&&t===void 0){let o=e!==void 0&&e.length===1;o&&(t=Bt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Bt.set(e,t))}return t}toString(){return this.cssText}},Ht=r=>new j(typeof r=="string"?r:r+"",void 0,pt),I=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((o,i,s)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[s+1],r[0]);return new j(e,r,pt)},Tt=(r,t)=>{if(nt)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let o=document.createElement("style"),i=rt.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=e.cssText,r.appendChild(o)}},ut=nt?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let o of t.cssRules)e+=o.cssText;return Ht(e)})(r):r;var{is:ye,defineProperty:we,getOwnPropertyDescriptor:ke,getOwnPropertyNames:Se,getOwnPropertySymbols:Ae,getPrototypeOf:Ee}=Object,at=globalThis,Dt=at.trustedTypes,Ie=Dt?Dt.emptyScript:"",Me=at.reactiveElementPolyfillSupport,K=(r,t)=>r,ft={toAttribute(r,t){switch(t){case Boolean:r=r?Ie:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},Ft=(r,t)=>!ye(r,t),Lt={attribute:!0,type:String,converter:ft,reflect:!1,useDefault:!1,hasChanged:Ft};Symbol.metadata??=Symbol("metadata"),at.litPropertyMetadata??=new WeakMap;var P=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Lt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let o=Symbol(),i=this.getPropertyDescriptor(t,o,e);i!==void 0&&we(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){let{get:i,set:s}=ke(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){let l=i?.call(this);s?.call(this,n),this.requestUpdate(t,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Lt}static _$Ei(){if(this.hasOwnProperty(K("elementProperties")))return;let t=Ee(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(K("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(K("properties"))){let e=this.properties,o=[...Se(e),...Ae(e)];for(let i of o)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[o,i]of e)this.elementProperties.set(o,i)}this._$Eh=new Map;for(let[e,o]of this.elementProperties){let i=this._$Eu(e,o);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let o=new Set(t.flat(1/0).reverse());for(let i of o)e.unshift(ut(i))}else t!==void 0&&e.push(ut(t));return e}static _$Eu(t,e){let o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Tt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ET(t,e){let o=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,o);if(i!==void 0&&o.reflect===!0){let s=(o.converter?.toAttribute!==void 0?o.converter:ft).toAttribute(e,o.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,e){let o=this.constructor,i=o._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let s=o.getPropertyOptions(i),n=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:ft;this._$Em=i;let l=n.fromAttribute(e,s.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(t,e,o,i=!1,s){if(t!==void 0){let n=this.constructor;if(i===!1&&(s=this[t]),o??=n.getPropertyOptions(t),!((o.hasChanged??Ft)(s,e)||o.useDefault&&o.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,o))))return;this.C(t,e,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:o,reflect:i,wrapped:s},n){o&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),s!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||o||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}let o=this.constructor.elementProperties;if(o.size>0)for(let[i,s]of o){let{wrapped:n}=s,l=this[i];n!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,s,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(e)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};P.elementStyles=[],P.shadowRootOptions={mode:"open"},P[K("elementProperties")]=new Map,P[K("finalized")]=new Map,Me?.({ReactiveElement:P}),(at.reactiveElementVersions??=[]).push("2.1.2");var xt=globalThis,Ot=r=>r,lt=xt.trustedTypes,Nt=lt?lt.createPolicy("lit-html",{createHTML:r=>r}):void 0,Qt="$lit$",V=`lit$${Math.random().toFixed(9).slice(2)}$`,Jt="?"+V,Re=`<${Jt}>`,H=document,Q=()=>H.createComment(""),J=r=>r===null||typeof r!="object"&&typeof r!="function",yt=Array.isArray,Ce=r=>yt(r)||typeof r?.[Symbol.iterator]=="function",mt=`[ 	
\f\r]`,G=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Wt=/-->/g,qt=/>/g,U=RegExp(`>|${mt}(?:([^\\s"'>=/]+)(${mt}*=${mt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),jt=/'/g,Kt=/"/g,Yt=/^(?:script|style|textarea|title)$/i,wt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),m=wt(1),$=wt(2),Ge=wt(3),T=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),Gt=new WeakMap,B=H.createTreeWalker(H,129);function Zt(r,t){if(!yt(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Nt!==void 0?Nt.createHTML(t):t}var Pe=(r,t)=>{let e=r.length-1,o=[],i,s=t===2?"<svg>":t===3?"<math>":"",n=G;for(let l=0;l<e;l++){let a=r[l],d,c,f=-1,b=0;for(;b<a.length&&(n.lastIndex=b,c=n.exec(a),c!==null);)b=n.lastIndex,n===G?c[1]==="!--"?n=Wt:c[1]!==void 0?n=qt:c[2]!==void 0?(Yt.test(c[2])&&(i=RegExp("</"+c[2],"g")),n=U):c[3]!==void 0&&(n=U):n===U?c[0]===">"?(n=i??G,f=-1):c[1]===void 0?f=-2:(f=n.lastIndex-c[2].length,d=c[1],n=c[3]===void 0?U:c[3]==='"'?Kt:jt):n===Kt||n===jt?n=U:n===Wt||n===qt?n=G:(n=U,i=void 0);let p=n===U&&r[l+1].startsWith("/>")?" ":"";s+=n===G?a+Re:f>=0?(o.push(d),a.slice(0,f)+Qt+a.slice(f)+V+p):a+V+(f===-2?l:p)}return[Zt(r,s+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]},Y=class r{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let s=0,n=0,l=t.length-1,a=this.parts,[d,c]=Pe(t,e);if(this.el=r.createElement(d,o),B.currentNode=this.el.content,e===2||e===3){let f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(i=B.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let f of i.getAttributeNames())if(f.endsWith(Qt)){let b=c[n++],p=i.getAttribute(f).split(V),h=/([.?@])?(.*)/.exec(b);a.push({type:1,index:s,name:h[2],strings:p,ctor:h[1]==="."?vt:h[1]==="?"?_t:h[1]==="@"?bt:O}),i.removeAttribute(f)}else f.startsWith(V)&&(a.push({type:6,index:s}),i.removeAttribute(f));if(Yt.test(i.tagName)){let f=i.textContent.split(V),b=f.length-1;if(b>0){i.textContent=lt?lt.emptyScript:"";for(let p=0;p<b;p++)i.append(f[p],Q()),B.nextNode(),a.push({type:2,index:++s});i.append(f[b],Q())}}}else if(i.nodeType===8)if(i.data===Jt)a.push({type:2,index:s});else{let f=-1;for(;(f=i.data.indexOf(V,f+1))!==-1;)a.push({type:7,index:s}),f+=V.length-1}s++}}static createElement(t,e){let o=H.createElement("template");return o.innerHTML=t,o}};function F(r,t,e=r,o){if(t===T)return t;let i=o!==void 0?e._$Co?.[o]:e._$Cl,s=J(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(r),i._$AT(r,e,o)),o!==void 0?(e._$Co??=[])[o]=i:e._$Cl=i),i!==void 0&&(t=F(r,i._$AS(r,t.values),i,o)),t}var gt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:o}=this._$AD,i=(t?.creationScope??H).importNode(e,!0);B.currentNode=i;let s=B.nextNode(),n=0,l=0,a=o[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new Z(s,s.nextSibling,this,t):a.type===1?d=new a.ctor(s,a.name,a.strings,this,t):a.type===6&&(d=new $t(s,this,t)),this._$AV.push(d),a=o[++l]}n!==a?.index&&(s=B.nextNode(),n++)}return B.currentNode=H,i}p(t){let e=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}},Z=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,o,i){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=F(this,t,e),J(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==T&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ce(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==u&&J(this._$AH)?this._$AA.nextSibling.data=t:this.T(H.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:o}=t,i=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Y.createElement(Zt(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(e);else{let s=new gt(i,this),n=s.u(this.options);s.p(e),this.T(n),this._$AH=s}}_$AC(t){let e=Gt.get(t.strings);return e===void 0&&Gt.set(t.strings,e=new Y(t)),e}k(t){yt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,o,i=0;for(let s of t)i===e.length?e.push(o=new r(this.O(Q()),this.O(Q()),this,this.options)):o=e[i],o._$AI(s),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let o=Ot(t).nextSibling;Ot(t).remove(),t=o}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},O=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,i,s){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=u}_$AI(t,e=this,o,i){let s=this.strings,n=!1;if(s===void 0)t=F(this,t,e,0),n=!J(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else{let l=t,a,d;for(t=s[0],a=0;a<s.length-1;a++)d=F(this,l[o+a],e,a),d===T&&(d=this._$AH[a]),n||=!J(d)||d!==this._$AH[a],d===u?t=u:t!==u&&(t+=(d??"")+s[a+1]),this._$AH[a]=d}n&&!i&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},vt=class extends O{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}},_t=class extends O{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==u)}},bt=class extends O{constructor(t,e,o,i,s){super(t,e,o,i,s),this.type=5}_$AI(t,e=this){if((t=F(this,t,e,0)??u)===T)return;let o=this._$AH,i=t===u&&o!==u||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==u&&(o===u||i);i&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},$t=class{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){F(this,t)}};var Ve=xt.litHtmlPolyfillSupport;Ve?.(Y,Z),(xt.litHtmlVersions??=[]).push("3.3.3");var Xt=(r,t,e)=>{let o=e?.renderBefore??t,i=o._$litPart$;if(i===void 0){let s=e?.renderBefore??null;o._$litPart$=i=new Z(t.insertBefore(Q(),s),s,void 0,e??{})}return i._$AI(r),i};var kt=globalThis,A=class extends P{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Xt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return T}};A._$litElement$=!0,A.finalized=!0,kt.litElementHydrateSupport?.({LitElement:A});var ze=kt.litElementPolyfillSupport;ze?.({LitElement:A});(kt.litElementVersions??=[]).push("4.2.2");async function te(r){return r.callWS({type:"floorplan_3d/building/get"})}async function ee(r,t){return(await r.callWS({type:"floorplan_3d/building/save",building:t})).revision}function oe(r,t){return r.connection.subscribeMessage(e=>t(e.revision),{type:"floorplan_3d/building/subscribe"})}async function ie(r,t){return(await r.callWS({type:"floorplan_3d/image/get",image_id:t})).data}async function se(r,t,e){await r.callWS({type:"floorplan_3d/image/set",image_id:t,data:e})}var Ue=700,N=class{building=null;error=null;saveState="idle";host;hass=null;revision=-1;ownRevisions=new Set;unsubscribe=null;saveTimer;pending=null;saving=null;connected=!1;constructor(t){this.host=t,t.addController(this)}setHass(t){let e=this.hass===null;this.hass=t,e&&this.connected&&this.start()}hostConnected(){this.connected=!0,this.hass&&this.start()}hostDisconnected(){this.connected=!1,this.flush(),this.unsubscribe?.(),this.unsubscribe=null}edit(t){this.building=t,this.pending=t,clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{this.flush()},Ue),this.host.requestUpdate()}async flush(){clearTimeout(this.saveTimer),this.saving&&await this.saving;let t=this.pending;!t||!this.hass||(this.pending=null,this.saveState="saving",this.host.requestUpdate(),this.saving=(async()=>{try{let e=await ee(this.hass,t);this.ownRevisions.add(e),this.revision=e,this.saveState=this.pending?"saving":"saved"}catch(e){this.saveState="error",this.error=re(e)}this.host.requestUpdate()})(),await this.saving,this.saving=null)}async start(){if(this.hass&&(await this.reload(),!this.unsubscribe&&this.connected))try{this.unsubscribe=await oe(this.hass,t=>{this.ownRevisions.has(t)||t===this.revision||this.pending||this.saving||this.reload()})}catch{}}async reload(){if(this.hass){try{let t=await te(this.hass);this.building=t.building,this.revision=t.revision,this.error=null}catch(t){this.error=re(t)}this.host.requestUpdate()}}};function re(r){return r&&typeof r=="object"&&"message"in r?String(r.message):String(r)}var ne=["wood","oak","tiles","carpet","stone","concrete"];function ae(r,t,e){return{id:r,name:t,elevation:e,height:2.5,cut_height:1.15,rooms:[],openings:[],furniture:[],placements:[],background:null}}function X(r){return`${r}_${Math.random().toString(36).slice(2,10)}`}function tt(r){let t=0;for(let e=0;e<r.length;e++){let[o,i]=r[e],[s,n]=r[(e+1)%r.length];t+=o*n-s*i}return t/2}function W(r){return Math.abs(tt(r))}function St(r){let t=tt(r);if(Math.abs(t)<1e-9){let i=r.length||1;return[r.reduce((s,n)=>s+n[0],0)/i,r.reduce((s,n)=>s+n[1],0)/i]}let e=0,o=0;for(let i=0;i<r.length;i++){let[s,n]=r[i],[l,a]=r[(i+1)%r.length],d=s*a-l*n;e+=(s+l)*d,o+=(n+a)*d}return[e/(6*t),o/(6*t)]}function le(r){if(r.length!==4)return!1;for(let t=0;t<4;t++){let[e,o]=r[t],[i,s]=r[(t+1)%4];if(Math.abs(e-i)>1e-6&&Math.abs(o-s)>1e-6)return!1}return!0}function et(r){let t=1/0,e=1/0,o=-1/0,i=-1/0;for(let[s,n]of r)t=Math.min(t,s),e=Math.min(e,n),o=Math.max(o,s),i=Math.max(i,n);return{x0:t,z0:e,x1:o,z1:i}}function de(r,t){let e=!1;for(let o=0,i=t.length-1;o<t.length;i=o++){let[s,n]=t[o],[l,a]=t[i];n>r[1]!=a>r[1]&&r[0]<(l-s)*(r[1]-n)/(a-n)+s&&(e=!e)}return e}var R=(r,t)=>[r[0]-t[0],r[1]-t[1]],ot=(r,t)=>[r[0]+t[0],r[1]+t[1]],D=(r,t)=>[r[0]*t,r[1]*t],At=(r,t)=>r[0]*t[0]+r[1]*t[1],it=(r,t)=>r[0]*t[1]-r[1]*t[0],dt=r=>Math.hypot(r[0],r[1]),st=r=>{let t=dt(r)||1;return[r[0]/t,r[1]/t]},he=r=>[-r[1],r[0]],ce=r=>[r[1],-r[0]];function ue(r,t){let e=t.eps??.005,o=[],i=[],s=p=>{for(let h=0;h<i.length;h++)if(Math.abs(i[h][0]-p[0])<=e&&Math.abs(i[h][1]-p[1])<=e)return h;return i.push([p[0],p[1]]),i.length-1},n=[];for(let p of r){let h=p.points;if(h.length<3||Math.abs(tt(h))<1e-6)continue;let v=tt(h)>0,g=h.map(s);for(let _=0;_<h.length;_++){let x=g[_],w=g[(_+1)%h.length];x!==w&&n.push(v?{u:x,v:w,room:p.id,edge:_,forward:!0}:{u:w,v:x,room:p.id,edge:_,forward:!1})}}let l=[];for(let p of n){let h=i[p.u],v=i[p.v],g=R(v,h),_=dt(g),x=D(g,1/_),w=[];for(let k=0;k<i.length;k++){if(k===p.u||k===p.v)continue;let S=R(i[k],h),M=At(S,x);M<=e||M>=_-e||Math.abs(it(x,S))<=e&&w.push({t:M,id:k})}w.sort((k,S)=>k.t-S.t);let C=[{t:0,id:p.u},...w,{t:_,id:p.v}];for(let k=0;k+1<C.length;k++){let S=C[k],M=C[k+1],L=p.forward?S.t:_-M.t,xe=p.forward?M.t:_-S.t;l.push({u:S.id,v:M.id,room:p.room,edge:p.edge,t0:L,t1:xe})}}let a=new Map;for(let p of l){let h=p.u<p.v?`${p.u}-${p.v}`:`${p.v}-${p.u}`,v=a.get(h);v||a.set(h,v=[]),v.push(p)}let d=p=>({room_id:p.room,edge:p.edge,t0:p.t0,t1:p.t1}),c=[];for(let p of a.values()){let h=p[0],v=p.find(g=>g!==h&&g.u===h.v&&g.v===h.u&&g.room!==h.room);for(let g of p)g!==h&&g!==v&&g.room!==h.room&&o.push(`overlap:${h.room}:${g.room}`);v?c.push({a:h.u,b:h.v,left:t.interior/2,right:t.interior/2,exterior:!1,roomLeft:h.room,roomRight:v.room,sources:[d(h),d(v)]}):c.push({a:h.u,b:h.v,left:0,right:t.exterior,exterior:!0,roomLeft:h.room,roomRight:null,sources:[d(h)]})}c=He(c,i);let f=De(c,i);return{walls:c.map((p,h)=>{let v=i[p.a],g=i[p.b],_=f.get(`${h}:a`),x=f.get(`${h}:b`),w=Le([_.right,x.left,g,x.right,_.left,v],1e-6);return{id:Be(v,g),a:[v[0],v[1]],b:[g[0],g[1]],left:p.left,right:p.right,exterior:p.exterior,roomLeft:p.roomLeft,roomRight:p.roomRight,sources:p.sources,footprint:w}}),warnings:[...new Set(o)]}}function Be(r,t){let e=s=>Math.round(s*100),[o,i]=r[0]<t[0]||r[0]===t[0]&&r[1]<=t[1]?[r,t]:[t,r];return`w_${e(o[0])}_${e(o[1])}_${e(i[0])}_${e(i[1])}`}function pe(r){return{...r,a:r.b,b:r.a,left:r.right,right:r.left,roomLeft:r.roomRight,roomRight:r.roomLeft}}function He(r,t){let e=r.slice(),o=!0;for(;o;){o=!1;let i=new Map;e.forEach((s,n)=>{for(let l of[s.a,s.b]){let a=i.get(l);a||i.set(l,a=[]),a.push(n)}});for(let[s,n]of i){if(n.length!==2)continue;let l=e[n[0]],a=e[n[1]];if(l.b!==s&&(l=pe(l)),a.a!==s&&(a=pe(a)),l.a===a.b)continue;let d=st(R(t[l.b],t[l.a])),c=st(R(t[a.b],t[a.a]));if(Math.abs(it(d,c))>1e-6||At(d,c)<=0||l.exterior!==a.exterior||l.roomLeft!==a.roomLeft||l.roomRight!==a.roomRight||Math.abs(l.left-a.left)>1e-9||Math.abs(l.right-a.right)>1e-9)continue;let f={...l,b:a.b,sources:Te(l.sources,a.sources)},b=e.filter((p,h)=>h!==n[0]&&h!==n[1]);b.push(f),e.length=0,e.push(...b),o=!0;break}}return e}function Te(r,t){let e=r.map(o=>({...o}));for(let o of t){let i=e.find(s=>s.room_id===o.room_id&&s.edge===o.edge&&(Math.abs(s.t1-o.t0)<1e-6||Math.abs(o.t1-s.t0)<1e-6));i?(i.t0=Math.min(i.t0,o.t0),i.t1=Math.max(i.t1,o.t1)):e.push({...o})}return e}function De(r,t){let e=new Map;r.forEach((i,s)=>{let n=st(R(t[i.b],t[i.a])),l=[[i.a,{key:`${s}:a`,d:n,left:i.left,right:i.right,angle:Math.atan2(n[1],n[0])}],[i.b,{key:`${s}:b`,d:D(n,-1),left:i.right,right:i.left,angle:Math.atan2(-n[1],-n[0])}]];for(let[a,d]of l){let c=e.get(a);c||e.set(a,c=[]),c.push(d)}});let o=new Map;for(let[i,s]of e){let n=t[i];s.sort((d,c)=>d.angle-c.angle);let l=d=>({left:ot(n,D(he(d.d),d.left)),right:ot(n,D(ce(d.d),d.right))});for(let d of s)o.set(d.key,l(d));if(s.length<2)continue;let a=4*Math.max(...s.map(d=>Math.max(d.left,d.right)))+1e-9;for(let d=0;d<s.length;d++){let c=s[d],f=s[(d+1)%s.length],b=ot(n,D(he(c.d),c.left)),p=ot(n,D(ce(f.d),f.right)),h=it(c.d,f.d);if(Math.abs(h)<1e-4)continue;let v=it(R(p,b),f.d)/h,g=ot(b,D(c.d,v));dt(R(g,n))>a||(o.get(c.key).left=g,o.get(f.key).right=g)}}return o}function Le(r,t){let e=r.filter((i,s)=>dt(R(i,r[(s+1)%r.length]))>t),o=!0;for(;o&&e.length>3;){o=!1;for(let i=0;i<e.length;i++){let s=e[(i+e.length-1)%e.length],n=e[i],l=e[(i+1)%e.length],a=R(n,s),d=R(l,n);if(Math.abs(it(st(a),st(d)))<1e-7&&At(a,d)>0){e=e.filter((c,f)=>f!==i),o=!0;break}}}return e}var fe={view:"3D",editor:"Editor",all_floors:"Alle Etagen",no_building:"Noch kein Grundriss vorhanden.",no_building_admin:"Noch kein Grundriss vorhanden. Im Editor zeichnest du deine erste Etage.",open_editor:"Editor \xF6ffnen",loading:"L\xE4dt \u2026",load_error:"Laden fehlgeschlagen",saving:"Speichert \u2026",saved:"Gespeichert",save_error:"Speichern fehlgeschlagen",walls_auto:"W\xE4nde hoch",walls_cut:"Schnitt",reset_view:"\xDCbersicht",back:"Zur\xFCck",floor:"Etage",floors:"Etagen",add_floor:"Etage hinzuf\xFCgen",floor_name:"Name",elevation:"H\xF6he \xFCber Boden (m)",height:"Raumh\xF6he (m)",cut_height:"Schnitth\xF6he (m)",delete_floor:"Etage l\xF6schen",delete_floor_confirm:"Etage \u201E{name}\u201C mit allen R\xE4umen l\xF6schen?",move_up:"Nach oben",move_down:"Nach unten",default_floor:"Erdgeschoss",new_floor:"Etage {n}",tool_select:"Ausw\xE4hlen",tool_rect:"Rechteck",tool_polygon:"Freie Form",undo:"R\xFCckg\xE4ngig",redo:"Wiederholen",fit:"Alles zeigen",room:"Raum",rooms:"R\xE4ume",room_name:"Name",area:"Bereich",no_area:"Kein Bereich",material:"Boden",x:"X (m)",z:"Y (m)",width:"Breite (m)",depth:"Tiefe (m)",points:"Eckpunkte",delete_point:"Punkt l\xF6schen",duplicate:"Duplizieren",delete:"L\xF6schen",new_room:"Raum {n}",settings:"Einstellungen",wall_exterior:"Au\xDFenwand (m)",wall_interior:"Innenwand (m)",grid:"Raster (m)",background:"Vorlage (Grundriss-Bild)",background_upload:"Bild w\xE4hlen \u2026",background_width:"Breite im Plan (m)",background_opacity:"Deckkraft",background_remove:"Vorlage entfernen",hint_select:"Raum antippen zum Ausw\xE4hlen \xB7 Ecken ziehen \xB7 \u201E+\u201C auf einer Kante f\xFCgt einen Punkt ein \xB7 Entf l\xF6scht \xB7 Strg+Z",hint_rect:"Ziehen, um ein Rechteck zu zeichnen",hint_polygon:"Punkte setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",hint_empty:"Lege zuerst eine Etage an.",area_m2:"{a} m\xB2",overlap_warning:"R\xE4ume \xFCberlappen sich \u2013 die W\xE4nde dort sind unvollst\xE4ndig.",read_only:"Nur Administratoren k\xF6nnen den Grundriss bearbeiten.",mat_wood:"Holz",mat_oak:"Eiche",mat_tiles:"Fliesen",mat_carpet:"Teppich",mat_stone:"Stein",mat_concrete:"Beton",card_name:"Floorplan 3D",card_description:"Deine Wohnung in 3D (Neon).",stats:"{fps} B/s \xB7 {calls} Draw-Calls \xB7 {tris} Dreiecke",floors_apart:"Auseinander",floors_stacked:"Gestapelt",floor_rooms_one:"1 Raum",floor_rooms:"{n} R\xE4ume",quality:"Qualit\xE4t",quality_auto:"Auto",quality_low:"Tablet",quality_high:"Hoch"},Fe={view:"3D",editor:"Editor",all_floors:"All floors",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",walls_auto:"Tall walls",walls_cut:"Cut",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",add_floor:"Add floor",floor_name:"Name",elevation:"Elevation (m)",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",default_floor:"Ground floor",new_floor:"Floor {n}",tool_select:"Select",tool_rect:"Rectangle",tool_polygon:"Free shape",undo:"Undo",redo:"Redo",fit:"Show all",room:"Room",rooms:"Rooms",room_name:"Name",area:"Area",no_area:"No area",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",delete_point:"Delete corner",duplicate:"Duplicate",delete:"Delete",new_room:"Room {n}",settings:"Settings",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 Del deletes \xB7 Ctrl+Z",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_empty:"Add a floor first.",area_m2:"{a} m\xB2",overlap_warning:"Rooms overlap \u2013 walls there are incomplete.",read_only:"Only administrators can edit the floor plan.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"Floorplan 3D",card_description:"Your home in 3D (neon).",stats:"{fps} fps \xB7 {calls} draw calls \xB7 {tris} triangles",floors_apart:"Apart",floors_stacked:"Stacked",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High"};function E(r,t,e={}){let i=((r?.language??navigator.language).startsWith("de")?fe:Fe)[t]??fe[t]??t;for(let[s,n]of Object.entries(e))i=i.replace(`{${s}}`,String(n));return i}function q(r,t,e=2){return t.toLocaleString(r?.language??void 0,{maximumFractionDigits:e})}var z=I`
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
`,ht=I`
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
`;var me=100,ge=10,y=r=>Math.round(r*1e3)/1e3,Et=class extends A{static properties={hass:{attribute:!1},building:{attribute:!1},narrow:{type:Boolean},_doc:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_vertex:{state:!0},_tool:{state:!0},_draft:{state:!0},_cursor:{state:!0},_guides:{state:!0},_view:{state:!0},_size:{state:!0},_images:{state:!0},_canUndo:{state:!0},_canRedo:{state:!0}};past=[];future=[];drag=null;pointers=new Map;pinch=null;fitted=!1;resizeObserver;loadingImages=new Set;constructor(){super(),this.narrow=!1,this._floorId=null,this._roomId=null,this._vertex=null,this._tool="select",this._draft=[],this._cursor=null,this._guides={},this._view={scale:50,ox:40,oy:40},this._size={w:800,h:600},this._images={},this._canUndo=!1,this._canRedo=!1}t(t,e){return E(this.hass,t,e)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.resizeObserver?.disconnect()}willUpdate(t){t.has("building")&&this.building!==this._doc&&(this._doc=this.building,this._doc.floors.some(e=>e.id===this._floorId)||(this._floorId=this._doc.floors[0]?.id??null),this.floor?.rooms.some(e=>e.id===this._roomId)||(this._roomId=null))}firstUpdated(){let t=this.renderRoot.querySelector(".fp3d-canvas-wrap");this.resizeObserver=new ResizeObserver(()=>{this._size={w:t.clientWidth,h:t.clientHeight},!this.fitted&&this._size.w>0&&(this.fitted=!0,this.fit())}),this.resizeObserver.observe(t)}updated(){let t=this.floor?.background;t&&!this._images[t.image_id]&&!this.loadingImages.has(t.image_id)&&this.loadImage(t.image_id)}get floor(){return this._doc?.floors.find(t=>t.id===this._floorId)}get room(){return this.floor?.rooms.find(t=>t.id===this._roomId)}get isAdmin(){return this.hass?.user?.is_admin??!0}setDoc(t,e=this._doc){e&&(this.past.push(JSON.stringify(e)),this.past.length>me&&this.past.shift(),this.future=[]),this._doc=t,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}change(t,e=this._doc,o=!0){let i=structuredClone(e),s=i.floors.find(n=>n.id===this._floorId);!s&&this._floorId||(t(i,s),this.setDoc(i,o?e:null))}undo(){let t=this.past.pop();t&&(this.future.push(JSON.stringify(this._doc)),this.restore(JSON.parse(t)))}redo(){let t=this.future.pop();t&&(this.past.push(JSON.stringify(this._doc)),this.restore(JSON.parse(t)))}restore(t){this._doc=t,t.floors.some(e=>e.id===this._floorId)||(this._floorId=t.floors[0]?.id??null),this.floor?.rooms.some(e=>e.id===this._roomId)||(this._roomId=null),this._vertex=null,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}toScreen(t){let{scale:e,ox:o,oy:i}=this._view;return[t[0]*e+o,t[1]*e+i]}toWorld(t,e){let{scale:o,ox:i,oy:s}=this._view;return[(t-i)/o,(e-s)/o]}localPoint(t){let e=this.renderRoot.querySelector("svg").getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}fit(){let t=this.floor?.rooms.flatMap(l=>l.points)??[],e=t.length?et(t):{x0:0,z0:0,x1:10,z1:8},o=1.5,i=e.x1-e.x0+2*o,s=e.z1-e.z0+2*o,n=Math.max(8,Math.min(400,Math.min(this._size.w/i,this._size.h/s)));this._view={scale:n,ox:this._size.w/2-(e.x0+e.x1)/2*n,oy:this._size.h/2-(e.z0+e.z1)/2*n}}zoomAt(t,e,o){let{scale:i,ox:s,oy:n}=this._view,l=Math.max(8,Math.min(600,i*t)),a=l/i;this._view={scale:l,ox:e-(e-s)*a,oy:o-(o-n)*a}}snap(t,e,o=!1){if(this._guides={},o)return t;let i=ge/this._view.scale,s=this.floor?.rooms??[],n=[];for(let h of s)h.points.forEach((v,g)=>{e&&h.id===e.roomId&&(e.index===void 0||e.index===g)||n.push(v)});let l=null,a=i;for(let h of n){let v=Math.hypot(h[0]-t[0],h[1]-t[1]);v<a&&(a=v,l=h)}if(l)return this._guides={point:l},[l[0],l[1]];for(let h of s)if(!(e&&h.id===e.roomId))for(let v=0;v<h.points.length;v++){let g=h.points[v],_=h.points[(v+1)%h.points.length],x=_[0]-g[0],w=_[1]-g[1],C=x*x+w*w;if(C<1e-9)continue;let k=((t[0]-g[0])*x+(t[1]-g[1])*w)/C;if(k<=0||k>=1)continue;let S=[g[0]+k*x,g[1]+k*w],M=Math.hypot(S[0]-t[0],S[1]-t[1]),L=this._doc.settings.grid;Math.abs(w)<1e-9&&(S[0]=Math.min(Math.max(Math.round(S[0]/L)*L,Math.min(g[0],_[0])),Math.max(g[0],_[0]))),Math.abs(x)<1e-9&&(S[1]=Math.min(Math.max(Math.round(S[1]/L)*L,Math.min(g[1],_[1])),Math.max(g[1],_[1]))),M<a&&(a=M,l=S)}if(l)return this._guides={point:l},[y(l[0]),y(l[1])];let d=this._doc.settings.grid,c=[y(Math.round(t[0]/d)*d),y(Math.round(t[1]/d)*d)],f=i,b=i,p={};for(let h of n)Math.abs(h[0]-t[0])<f&&(f=Math.abs(h[0]-t[0]),c[0]=h[0],p.x=h[0]),Math.abs(h[1]-t[1])<b&&(b=Math.abs(h[1]-t[1]),c[1]=h[1],p.z=h[1]);return this._guides=p,c}onPointerDown(t){t.currentTarget.setPointerCapture(t.pointerId);let o=this.localPoint(t);if(this.pointers.set(t.pointerId,o),this.pointers.size===2){this.drag&&(this.drag.kind==="vertex"||this.drag.kind==="room")&&this.drag.moved&&this.restoreLive(this.drag.base),this.drag=null,this.pinch=this.pinchState();return}if(this.pointers.size>2)return;if(t.button===1||t.button===2||!this.floor){this.drag={kind:"pan",last:o};return}let i=this.toWorld(...o),s=t.target;if(this._tool==="rect"){let d=this.snap(i,void 0,t.altKey);this.drag={kind:"rect",start:d,end:d};return}if(this._tool==="polygon"){this.drag={kind:"tap",startScreen:o,last:o,panning:!1};return}let n=s.closest("[data-vertex]"),l=s.closest("[data-mid]");if(n&&this.room&&this.isAdmin){this._vertex=Number(n.getAttribute("data-vertex")),this.drag={kind:"vertex",roomId:this.room.id,index:this._vertex,base:this._doc,moved:!1};return}if(l&&this.room&&this.isAdmin){let d=Number(l.getAttribute("data-mid")),c=this.room.points,f=c[d],b=c[(d+1)%c.length],p=[y((f[0]+b[0])/2),y((f[1]+b[1])/2)],h=this._doc,v=this.room.id;this.change((g,_)=>_.rooms.find(x=>x.id===v).points.splice(d+1,0,p),h,!1),this._vertex=d+1,this.drag={kind:"vertex",roomId:v,index:d+1,base:h,moved:!0};return}let a=s.closest("[data-room]")?.getAttribute("data-room")??this.roomAt(i);if(a){a!==this._roomId&&(this._vertex=null),this._roomId=a,this.drag=this.isAdmin?{kind:"room",roomId:a,start:i,startScreen:o,base:this._doc,moved:!1}:{kind:"pan",last:o};return}this._roomId=null,this._vertex=null,this.drag={kind:"pan",last:o}}onPointerMove(t){let e=this.localPoint(t);if(this.pointers.has(t.pointerId)&&this.pointers.set(t.pointerId,e),this.pinch){let s=this.pinchState();s&&(this.zoomAt(s.dist/Math.max(1,this.pinch.dist),...s.mid),this._view={...this._view,ox:this._view.ox+s.mid[0]-this.pinch.mid[0],oy:this._view.oy+s.mid[1]-this.pinch.mid[1]},this.pinch=s);return}let o=this.toWorld(...e),i=this.drag;if(!i){this._tool!=="select"&&this.floor&&(this._cursor=this.snap(o,void 0,t.altKey));return}switch(i.kind){case"pan":this._view={...this._view,ox:this._view.ox+e[0]-i.last[0],oy:this._view.oy+e[1]-i.last[1]},i.last=e;break;case"tap":(i.panning||Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])>6)&&(i.panning=!0,this._view={...this._view,ox:this._view.ox+e[0]-i.last[0],oy:this._view.oy+e[1]-i.last[1]}),i.last=e;break;case"rect":i.end=this.snap(o,void 0,t.altKey),this.requestUpdate();break;case"vertex":{let s=this.snap(o,{roomId:i.roomId,index:i.index},t.altKey);i.moved=!0,this.change((n,l)=>{l.rooms.find(a=>a.id===i.roomId).points[i.index]=s},i.base,!1);break}case"room":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.base.floors.find(l=>l.id===this._floorId)?.rooms.find(l=>l.id===i.roomId);if(!s)return;let n=this.roomDelta(s,[o[0]-i.start[0],o[1]-i.start[1]],t.altKey);this.change((l,a)=>{let d=a.rooms.find(c=>c.id===i.roomId);d.points=s.points.map(([c,f])=>[y(c+n[0]),y(f+n[1])])},i.base,!1);break}}}onPointerUp(t){if(this.pointers.delete(t.pointerId),this.pinch){this.pointers.size<2&&(this.pinch=null);return}let e=this.drag;if(this.drag=null,!e||t.type==="pointercancel"){e&&(e.kind==="vertex"||e.kind==="room")&&e.moved&&this.restoreLive(e.base);return}let o=this.localPoint(t);switch(e.kind){case"rect":{let[i,s]=e.start,[n,l]=e.end;if(Math.abs(n-i)>=.2&&Math.abs(l-s)>=.2){let a=[Math.min(i,n),Math.min(s,l)],d=[Math.max(i,n),Math.max(s,l)];this.addRoom([a,[d[0],a[1]],d,[a[0],d[1]]])}this._guides={};break}case"tap":e.panning||this.addDraftPoint(this.snap(this.toWorld(...o),void 0,t.altKey),o);break;case"vertex":case"room":e.moved&&this.pushHistory(e.base),this._guides={};break;default:break}}onWheel(t){t.preventDefault();let[e,o]=this.localPoint(t);this.zoomAt(Math.exp(-t.deltaY*(t.deltaMode===1?.05:.0015)),e,o)}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,o]=t;return{dist:Math.hypot(e[0]-o[0],e[1]-o[1]),mid:[(e[0]+o[0])/2,(e[1]+o[1])/2]}}pushHistory(t){this.past.push(JSON.stringify(t)),this.past.length>me&&this.past.shift(),this.future=[],this._canUndo=!0,this._canRedo=!1}restoreLive(t){this._doc=t,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}roomDelta(t,e,o){if(o)return e;let i=this._doc.settings.grid,s=[Math.round(e[0]/i)*i,Math.round(e[1]/i)*i],l=ge/this._view.scale;this._guides={};for(let a of this.floor?.rooms??[])if(a.id!==t.id)for(let d of a.points)for(let c of t.points){let f=Math.hypot(c[0]+e[0]-d[0],c[1]+e[1]-d[1]);f<l&&(l=f,s=[d[0]-c[0],d[1]-c[1]],this._guides={point:d})}return s}roomAt(t){return(this.floor?.rooms??[]).filter(i=>de(t,i.points)).sort((i,s)=>W(i.points)-W(s.points))[0]?.id??null}addDraftPoint(t,e){let o=this._draft;if(o.length>=3){let[s,n]=this.toScreen(o[0]);if(Math.hypot(s-e[0],n-e[1])<14){this.closeDraft();return}}let i=o[o.length-1];i&&Math.hypot(i[0]-t[0],i[1]-t[1])<1e-6||(this._draft=[...o,t])}closeDraft(){this._draft.length>=3&&W(this._draft)>.05&&this.addRoom(this._draft),this._draft=[],this._cursor=null,this._guides={}}addRoom(t){if(!this.floor)return;let e=X("room"),o=this.floor.rooms.length+1;this.change((i,s)=>s.rooms.push({id:e,name:this.t("new_room",{n:o}),area_id:null,points:t.map(([n,l])=>[y(n),y(l)]),floor_material:"wood"})),this._roomId=e,this._vertex=null,this._tool="select"}onKey=t=>{if(t.composedPath().some(i=>i instanceof HTMLInputElement||i instanceof HTMLSelectElement||i instanceof HTMLTextAreaElement)||!this.isConnected||!this.offsetParent)return;let o=t.ctrlKey||t.metaKey;o&&t.key.toLowerCase()==="z"?(t.preventDefault(),t.shiftKey?this.redo():this.undo()):o&&t.key.toLowerCase()==="y"?(t.preventDefault(),this.redo()):o&&t.key.toLowerCase()==="d"?(t.preventDefault(),this.duplicateRoom()):t.key==="Delete"||t.key==="Backspace"&&this._tool==="select"?this._vertex!==null?this.deleteVertex(this._vertex):this.deleteRoom():t.key==="Backspace"&&this._tool==="polygon"?this._draft=this._draft.slice(0,-1):t.key==="Enter"&&this._tool==="polygon"?this.closeDraft():t.key==="Escape"&&(this._draft.length?this._draft=[]:this._tool!=="select"?this._tool="select":(this._roomId=null,this._vertex=null),this._cursor=null)};addFloor(){let t=this._doc.floors,e=t[t.length-1],o=X("floor"),i=t.length===0?this.t("default_floor"):this.t("new_floor",{n:t.length}),s=e?y(e.elevation+e.height+.25):0,n=structuredClone(this._doc);n.floors.push(ae(o,i,s)),this.setDoc(n),this._floorId=o,this._roomId=null}moveFloor(t){let e=this._doc.floors.findIndex(s=>s.id===this._floorId),o=e+t;if(e<0||o<0||o>=this._doc.floors.length)return;let i=structuredClone(this._doc);[i.floors[e],i.floors[o]]=[i.floors[o],i.floors[e]],this.setDoc(i)}deleteFloor(){let t=this.floor;if(!t||!confirm(this.t("delete_floor_confirm",{name:t.name})))return;let e=structuredClone(this._doc);e.floors=e.floors.filter(o=>o.id!==t.id),this.setDoc(e),this._floorId=e.floors[0]?.id??null,this._roomId=null}deleteRoom(){let t=this._roomId;!t||!this.isAdmin||(this.change((e,o)=>{o.rooms=o.rooms.filter(i=>i.id!==t),o.openings=o.openings.filter(i=>i.room_id!==t)}),this._roomId=null,this._vertex=null)}duplicateRoom(){let t=this.room;if(!t||!this.isAdmin)return;let e=X("room");this.change((o,i)=>i.rooms.push({...structuredClone(t),id:e,points:t.points.map(([s,n])=>[y(s+.5),y(n+.5)])})),this._roomId=e}deleteVertex(t){let e=this.room;!e||e.points.length<=3||(this.change((o,i)=>i.rooms.find(s=>s.id===e.id).points.splice(t,1)),this._vertex=null)}updateFloor(t){this.change((e,o)=>Object.assign(o,t))}updateRoom(t){let e=this._roomId;this.change((o,i)=>Object.assign(i.rooms.find(s=>s.id===e),t))}setArea(t){let e=this.room;if(!e)return;let o=t?this.hass?.areas?.[t]:void 0,i=!e.name||/^(Raum|Room) \d+$/.test(e.name)||Object.values(this.hass?.areas??{}).some(s=>s.name===e.name);this.updateRoom({area_id:t||null,...o&&i?{name:o.name}:{}})}setRect(t,e){let o=this.room;if(!o||!Number.isFinite(e))return;let i=et(o.points),{x0:s,z0:n,x1:l,z1:a}=i;t==="x"&&([s,l]=[e,e+(l-s)]),t==="z"&&([n,a]=[e,e+(a-n)]),t==="w"&&e>.05&&(l=s+e),t==="d"&&e>.05&&(a=n+e),this.updateRoom({points:[[y(s),y(n)],[y(l),y(n)],[y(l),y(a)],[y(s),y(a)]]})}setPoint(t,e,o){let i=this.room;if(!i||!Number.isFinite(o))return;let s=i.points.map(n=>[...n]);s[t][e]=y(o),this.updateRoom({points:s})}async loadImage(t){this.loadingImages.add(t);try{let e=await ie(this.hass,t),o=new Image;o.src=e,await o.decode(),this._images={...this._images,[t]:{url:e,aspect:o.naturalHeight/o.naturalWidth}}}catch{}}async uploadBackground(t){let e=t.target,o=e.files?.[0];if(e.value="",!o)return;let i=await createImageBitmap(o),s=Math.min(1,2048/Math.max(i.width,i.height)),n=document.createElement("canvas");n.width=Math.round(i.width*s),n.height=Math.round(i.height*s),n.getContext("2d").drawImage(i,0,0,n.width,n.height);let l=n.toDataURL("image/jpeg",.85),a=X("img");await se(this.hass,a,l),this._images={...this._images,[a]:{url:l,aspect:n.height/n.width}};let d=this.floor?.rooms.length?et(this.floor.rooms.flatMap(c=>c.points)):null;this.updateFloor({background:{image_id:a,x:d?d.x0:0,z:d?d.z0:0,width:d?Math.max(4,y(d.x1-d.x0)):12,opacity:.5}})}render(){let t=this.floor,e=t?ue(t.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior}):null;return m`
      <div class="fp3d-editor ${this.narrow?"fp3d-narrow":""}">
        <div class="fp3d-main">
          <div class="fp3d-toolbar">
            <div class="fp3d-seg" role="group" aria-label=${this.t("tool_select")}>
              ${["select","rect","polygon"].map(o=>m`<button
                  aria-pressed=${this._tool===o}
                  ?disabled=${!t||!this.isAdmin&&o!=="select"}
                  @click=${()=>{this._tool=o,this._draft=[],this._cursor=null}}
                >
                  ${this.t(`tool_${o}`)}
                </button>`)}
            </div>
            <div class="fp3d-seg">
              <button ?disabled=${!this._canUndo} @click=${()=>this.undo()} title="Ctrl+Z">${this.t("undo")}</button>
              <button ?disabled=${!this._canRedo} @click=${()=>this.redo()} title="Ctrl+Y">${this.t("redo")}</button>
              <button @click=${()=>this.fit()}>${this.t("fit")}</button>
            </div>
            ${e?.warnings.length?m`<span class="fp3d-warn">${this.t("overlap_warning")}</span>`:u}
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
              @contextmenu=${o=>o.preventDefault()}
            >
              ${this.renderBackground(t)} ${this.renderGrid()} ${this.renderGhost()} ${e?this.renderWalls(e.walls):u}
              ${t?this.renderRooms(t):u} ${this.renderDraft()} ${this.renderGuides()}
            </svg>
            <p class="fp3d-hint">${t?this.t(`hint_${this._tool}`):this.t("hint_empty")}</p>
          </div>
        </div>
        <aside class="fp3d-side">${this.renderSide(t)}</aside>
      </div>
    `}renderBackground(t){let e=t?.background,o=e?this._images[e.image_id]:void 0;if(!e||!o)return u;let[i,s]=this.toScreen([e.x,e.z]),n=e.width*this._view.scale;return $`<image href=${o.url} x=${i} y=${s} width=${n} height=${n*o.aspect} opacity=${e.opacity} preserveAspectRatio="none" pointer-events="none" />`}renderGrid(){let{scale:t}=this._view,{w:e,h:o}=this._size,i=t>=90?.1:t>=30?.5:1,s=t>=20?1:5,[n,l]=this.toWorld(0,0),[a,d]=this.toWorld(e,o),c=[],f=(h,v)=>{for(let g=Math.ceil(n/h)*h;g<=a;g+=h){let _=this.toScreen([g,0])[0];c.push($`<line class=${v} x1=${_} y1="0" x2=${_} y2=${o} />`)}for(let g=Math.ceil(l/h)*h;g<=d;g+=h){let _=this.toScreen([0,g])[1];c.push($`<line class=${v} x1="0" y1=${_} x2=${e} y2=${_} />`)}};i<s&&f(i,"fp3d-grid-minor"),f(s,"fp3d-grid-major");let[b,p]=this.toScreen([0,0]);return c.push($`<circle class="fp3d-origin" cx=${b} cy=${p} r="3" />`),$`<g pointer-events="none">${c}</g>`}renderGhost(){let t=this._doc?.floors.findIndex(o=>o.id===this._floorId)??-1,e=t>0?this._doc.floors[t-1]:void 0;return e?$`<g pointer-events="none">${e.rooms.map(o=>$`<polygon class="fp3d-ghost" points=${o.points.map(i=>this.toScreen(i).join(",")).join(" ")} />`)}</g>`:u}renderWalls(t){return $`<g pointer-events="none">${t.map(e=>$`<polygon class=${e.exterior?"fp3d-wall fp3d-wall-ext":"fp3d-wall"} points=${e.footprint.map(o=>this.toScreen(o).join(",")).join(" ")} />`)}</g>`}renderRooms(t){let e=this.room;return $`
      <g>${t.rooms.map(o=>{let i=o.points.map(s=>this.toScreen(s).join(",")).join(" ");return $`<polygon data-room=${o.id} class=${o.id===this._roomId?"fp3d-room fp3d-room-sel":"fp3d-room"} points=${i} />`})}</g>
      <g pointer-events="none">${t.rooms.map(o=>{let[i,s]=this.toScreen(St(o.points));return $`<text class="fp3d-room-name" x=${i} y=${s-2}>${o.name}</text>
          <text class="fp3d-room-area" x=${i} y=${s+14}>${this.t("area_m2",{a:q(this.hass,W(o.points),1)})}</text>`})}</g>
      ${e&&this.isAdmin?this.renderHandles(e):u}
    `}renderHandles(t){let e=t.points,o=e.length,i=e.map((n,l)=>{let a=e[(l+1)%o],[d,c]=this.toScreen(n),[f,b]=this.toScreen(a),p=Math.hypot(a[0]-n[0],a[1]-n[1]),h=(d+f)/2,v=(c+b)/2,[g,_]=this.toScreen(St(e)),x=-(b-c),w=f-d,C=Math.hypot(x,w)||1;x/=C,w/=C,x*(h-g)+w*(v-_)<0&&(x=-x,w=-w);let k=Math.hypot(f-d,b-c);return $`
        ${k>50?$`<text class="fp3d-dim" x=${h+x*16} y=${v+w*16+4}>${q(this.hass,p,2)} m</text>`:u}
        ${k>36?$`<g data-mid=${l} class="fp3d-mid"><circle cx=${h} cy=${v} r="14" class="fp3d-hit" /><circle cx=${h} cy=${v} r="6" /><path d="M${h-3} ${v}h6M${h} ${v-3}v6" /></g>`:u}
      `}),s=e.map((n,l)=>{let[a,d]=this.toScreen(n);return $`<g data-vertex=${l} class=${l===this._vertex?"fp3d-vertex fp3d-vertex-sel":"fp3d-vertex"}><circle cx=${a} cy=${d} r="16" class="fp3d-hit" /><circle cx=${a} cy=${d} r="6" /></g>`});return $`<g>${i}${s}</g>`}renderDraft(){let t=this.drag;if(t?.kind==="rect"){let[o,i]=this.toScreen(t.start),[s,n]=this.toScreen(t.end),l=Math.abs(t.end[0]-t.start[0]),a=Math.abs(t.end[1]-t.start[1]);return $`<g pointer-events="none">
        <rect class="fp3d-draft" x=${Math.min(o,s)} y=${Math.min(i,n)} width=${Math.abs(s-o)} height=${Math.abs(n-i)} />
        <text class="fp3d-dim" x=${(o+s)/2} y=${Math.min(i,n)-8}>${q(this.hass,l,2)} × ${q(this.hass,a,2)} m</text>
      </g>`}if(this._tool!=="polygon")return u;let e=[...this._draft,...this._cursor?[this._cursor]:[]].map(o=>this.toScreen(o));return $`<g pointer-events="none">
      ${e.length>1?$`<polyline class="fp3d-draft" points=${e.map(o=>o.join(",")).join(" ")} />`:u}
      ${this._draft.map((o,i)=>{let[s,n]=this.toScreen(o);return $`<circle class=${i===0&&this._draft.length>=3?"fp3d-draft-pt fp3d-draft-first":"fp3d-draft-pt"} cx=${s} cy=${n} r=${i===0&&this._draft.length>=3?9:5} />`})}
      ${this._cursor?$`<circle class="fp3d-cursor" cx=${this.toScreen(this._cursor)[0]} cy=${this.toScreen(this._cursor)[1]} r="4" />`:u}
    </g>`}renderGuides(){let t=this._guides,{w:e,h:o}=this._size;return $`<g pointer-events="none">
      ${t.x!==void 0?$`<line class="fp3d-guide" x1=${this.toScreen([t.x,0])[0]} y1="0" x2=${this.toScreen([t.x,0])[0]} y2=${o} />`:u}
      ${t.z!==void 0?$`<line class="fp3d-guide" x1="0" y1=${this.toScreen([0,t.z])[1]} x2=${e} y2=${this.toScreen([0,t.z])[1]} />`:u}
      ${t.point?$`<circle class="fp3d-snap" cx=${this.toScreen(t.point)[0]} cy=${this.toScreen(t.point)[1]} r="9" />`:u}
    </g>`}num(t,e,o,i=.01,s){return m`<label class="fp3d-field"
      >${t}
      <input
        type="number"
        inputmode="decimal"
        step=${i}
        min=${s??u}
        .value=${String(y(e))}
        ?disabled=${!this.isAdmin}
        @change=${n=>{let l=parseFloat(n.target.value.replace(",","."));Number.isFinite(l)&&o(l)}}
    /></label>`}renderSide(t){let e=this._doc?.floors??[],o=this.room,i=this.isAdmin,s=Object.values(this.hass?.areas??{}).sort((n,l)=>n.name.localeCompare(l.name));return m`
      ${i?u:m`<p class="fp3d-note">${this.t("read_only")}</p>`}
      <section>
        <h3>${this.t("floors")}</h3>
        <div class="fp3d-floor-list">
          ${[...e].reverse().map(n=>m`<button
              class="fp3d-chip"
              aria-pressed=${n.id===this._floorId}
              @click=${()=>{this._floorId=n.id,this._roomId=null,this._vertex=null,this._draft=[],this.fit()}}
            >
              ${n.name}
            </button>`)}
          ${i?m`<button class="fp3d-btn" @click=${()=>this.addFloor()}>+ ${this.t("add_floor")}</button>`:u}
        </div>
        ${t?m`<div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${this.t("floor_name")}
                <input .value=${t.name} ?disabled=${!i} @change=${n=>this.updateFloor({name:n.target.value})}
              /></label>
              ${this.num(this.t("elevation"),t.elevation,n=>this.updateFloor({elevation:n}))}
              ${this.num(this.t("height"),t.height,n=>this.updateFloor({height:Math.max(1,n)}),.05,1)}
              ${i?m`<div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn" @click=${()=>this.moveFloor(1)}>${this.t("move_up")}</button>
                    <button class="fp3d-btn" @click=${()=>this.moveFloor(-1)}>${this.t("move_down")}</button>
                    <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFloor()}>${this.t("delete_floor")}</button>
                  </div>`:u}
            </div>`:u}
      </section>
      ${o?this.renderRoomForm(o,s):t?this.renderRoomList(t):u}
      ${t&&i?this.renderBackgroundForm(t):u} ${i?this.renderSettings():u}
    `}renderRoomList(t){return t.rooms.length?m`<section>
      <h3>${this.t("rooms")}</h3>
      <div class="fp3d-room-list">
        ${t.rooms.map(e=>m`<button class="fp3d-row" @click=${()=>this._roomId=e.id}>
            <span>${e.name}</span><span class="fp3d-muted">${this.t("area_m2",{a:q(this.hass,W(e.points),1)})}</span>
          </button>`)}
      </div>
    </section>`:u}renderRoomForm(t,e){let o=this.isAdmin,i=le(t.points),s=et(t.points);return m`<section>
      <h3>${this.t("room")}</h3>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("room_name")}
          <input .value=${t.name} ?disabled=${!o} @change=${n=>this.updateRoom({name:n.target.value})}
        /></label>
        <label class="fp3d-field fp3d-wide"
          >${this.t("area")}
          <select ?disabled=${!o} @change=${n=>this.setArea(n.target.value)}>
            <option value="" ?selected=${!t.area_id}>${this.t("no_area")}</option>
            ${e.map(n=>m`<option value=${n.area_id} ?selected=${n.area_id===t.area_id}>${n.name}</option>`)}
          </select></label
        >
        <label class="fp3d-field fp3d-wide"
          >${this.t("material")}
          <select ?disabled=${!o} @change=${n=>this.updateRoom({floor_material:n.target.value})}>
            ${ne.map(n=>m`<option value=${n} ?selected=${n===t.floor_material}>${this.t(`mat_${n}`)}</option>`)}
          </select></label
        >
        ${i?m`${this.num(this.t("x"),s.x0,n=>this.setRect("x",n))} ${this.num(this.t("z"),s.z0,n=>this.setRect("z",n))}
            ${this.num(this.t("width"),s.x1-s.x0,n=>this.setRect("w",n),.01,.05)}
            ${this.num(this.t("depth"),s.z1-s.z0,n=>this.setRect("d",n),.01,.05)}`:u}
      </div>
      <details class="fp3d-points" ?open=${!i}>
        <summary>${this.t("points")} (${t.points.length})</summary>
        ${t.points.map((n,l)=>m`<div class="fp3d-point ${l===this._vertex?"fp3d-point-sel":""}">
            <span class="fp3d-muted">${l+1}</span>
            ${this.num(this.t("x"),n[0],a=>this.setPoint(l,0,a))} ${this.num(this.t("z"),n[1],a=>this.setPoint(l,1,a))}
            ${o?m`<button class="fp3d-btn" title=${this.t("delete_point")} ?disabled=${t.points.length<=3} @click=${()=>this.deleteVertex(l)}>
                  ×
                </button>`:u}
          </div>`)}
      </details>
      ${o?m`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.duplicateRoom()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoom()}>${this.t("delete")}</button>
          </div>`:u}
    </section>`}renderBackgroundForm(t){let e=t.background;return m`<details class="fp3d-section">
      <summary>${this.t("background")}</summary>
      <div class="fp3d-form">
        <label class="fp3d-btn fp3d-wide fp3d-upload"
          >${this.t("background_upload")}<input type="file" accept="image/png,image/jpeg,image/webp" @change=${this.uploadBackground}
        /></label>
        ${e?m`${this.num(this.t("x"),e.x,o=>this.updateFloor({background:{...e,x:o}}))}
              ${this.num(this.t("z"),e.z,o=>this.updateFloor({background:{...e,z:o}}))}
              ${this.num(this.t("background_width"),e.width,o=>this.updateFloor({background:{...e,width:Math.max(.1,o)}}),.01,.1)}
              <label class="fp3d-field"
                >${this.t("background_opacity")}
                <input
                  type="range"
                  min="0.05"
                  max="1"
                  step="0.05"
                  .value=${String(e.opacity)}
                  @change=${o=>this.updateFloor({background:{...e,opacity:parseFloat(o.target.value)}})}
              /></label>
              <button class="fp3d-btn fp3d-danger fp3d-wide" @click=${()=>this.updateFloor({background:null})}>${this.t("background_remove")}</button>`:u}
      </div>
    </details>`}renderSettings(){let t=this._doc.settings,e=o=>{let i=structuredClone(this._doc);Object.assign(i.settings,o),this.setDoc(i)};return m`<details class="fp3d-section">
      <summary>${this.t("settings")}</summary>
      <div class="fp3d-form">
        ${this.num(this.t("wall_exterior"),t.wall_exterior,o=>e({wall_exterior:Math.min(1,Math.max(.02,o))}),.01,.02)}
        ${this.num(this.t("wall_interior"),t.wall_interior,o=>e({wall_interior:Math.min(1,Math.max(.02,o))}),.01,.02)}
        ${this.num(this.t("grid"),t.grid,o=>e({grid:Math.min(1,Math.max(.01,o))}),.01,.01)}
      </div>
    </details>`}static styles=[z,ht,I`
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
      .fp3d-note {
        margin: 0;
        font-size: 12.5px;
        color: var(--fp3d-warm);
      }
    `]};customElements.get("fp3d-editor")||customElements.define("fp3d-editor",Et);var be=new URL(import.meta.url),ve=be.searchParams.get("v"),Oe=new URL(`./floorplan-3d-3d.js${ve?`?v=${ve}`:""}`,be).href,_e;function $e(){return _e??=import(Oe),_e}var It=class extends A{static properties={hass:{attribute:!1},building:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},wallMode:{attribute:!1},explode:{type:Boolean},quality:{attribute:!1},showStats:{type:Boolean},_stats:{state:!0},_error:{state:!0}};viewer=null;starting=!1;constructor(){super(),this.building=null,this.floorId=null,this.roomId=null,this.wallMode="auto",this.explode=!0,this.quality="auto",this.showStats=!1,this._stats=null,this._error=null}connectedCallback(){super.connectedCallback(),this.hasUpdated&&!this.viewer&&this.start()}disconnectedCallback(){super.disconnectedCallback(),this.viewer?.dispose(),this.viewer=null}firstUpdated(){this.start()}async start(){if(!(this.starting||this.viewer)){this.starting=!0;try{let t=await $e();if(!this.isConnected)return;let e=this.renderRoot.querySelector(".fp3d-stage");this.viewer=t.createViewer(e,{quality:this.quality,explode:this.explode,onRoomTap:(o,i)=>this.fire("room-tap",{floorId:o,roomId:i}),onFloorTap:o=>this.fire("floor-tap",{floorId:o}),floorInfo:o=>o.rooms.length===1?E(this.hass,"floor_rooms_one"):E(this.hass,"floor_rooms",{n:o.rooms.length}),onBack:()=>this.fire("back",{}),onStats:this.showStats?o=>this._stats=o:void 0}),this.viewer.setWallMode(this.wallMode),this.building&&this.viewer.setBuilding(this.building),this.viewer.setFloor(this.floorId,!1),this.roomId&&this.viewer.selectRoom(this.roomId)}catch(t){this._error=String(t)}finally{this.starting=!1}}}updated(t){let e=this.viewer;e&&(t.has("building")&&this.building&&e.setBuilding(this.building),t.has("floorId")&&e.setFloor(this.floorId),t.has("roomId")&&(this.roomId||t.get("roomId"))&&e.selectRoom(this.roomId),t.has("wallMode")&&e.setWallMode(this.wallMode),t.has("explode")&&e.setExplode(this.explode),t.has("quality")&&t.get("quality")!==void 0&&e.setQuality(this.quality))}resetView(){this.viewer?.resetView()}fire(t,e){this.dispatchEvent(new CustomEvent(t,{detail:e,bubbles:!0,composed:!0}))}render(){return m`<div class="fp3d-stage">
      ${this._error?m`<p class="fp3d-error">${this._error}</p>`:u}
      ${this.showStats&&this._stats?m`<span class="fp3d-stats"
            >${E(this.hass,"stats",{fps:this._stats.fps,calls:this._stats.calls,tris:this._stats.triangles.toLocaleString()})}</span
          >`:u}
    </div>`}static styles=[z,I`
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
    `]};customElements.get("fp3d-view3d")||customElements.define("fp3d-view3d",It);var ct={get(r){try{return localStorage.getItem(`floorplan_3d.${r}`)}catch{return null}},set(r,t){try{localStorage.setItem(`floorplan_3d.${r}`,t)}catch{}}},Mt=class extends A{static properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_mode:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_wallMode:{state:!0},_explode:{state:!0},_quality:{state:!0}};data=new N(this);showStats=new URLSearchParams(location.search).has("fp3d_stats");constructor(){super(),this.narrow=!1,this._mode="view",this._floorId=null,this._roomId=null,this._wallMode="auto",this._explode=ct.get("explode")!=="0";let t=ct.get("quality");this._quality=t==="low"||t==="high"?t:"auto"}t(t,e){return E(this.hass,t,e)}willUpdate(t){t.has("hass")&&this.hass&&this.data.setHass(this.hass);let e=this.data.building;e&&this._floorId&&!e.floors.some(o=>o.id===this._floorId)&&(this._floorId=null,this._roomId=null)}get isAdmin(){return this.hass?.user?.is_admin??!1}setMode(t){t!==this._mode&&(t==="view"&&this.data.flush(),this._mode=t)}onRoomTap(t){let{floorId:e,roomId:o}=t.detail;o&&(this._floorId===null&&(this.data.building?.floors.length??0)>1&&(this._floorId=e),this._roomId=o===this._roomId?null:o)}setExplode(t){this._explode=t,ct.set("explode",t?"1":"0")}setQuality(t){this._quality=t,ct.set("quality",t)}back(){this._roomId?this._roomId=null:this._floorId&&(this.data.building?.floors.length??0)>1?this._floorId=null:this.renderRoot.querySelector("fp3d-view3d")?.resetView()}onKey=t=>{t.key==="Escape"&&this._mode==="view"&&this.back()};connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey)}render(){let t=this.data.building,e=this.data.saveState;return m`
      <div class="fp3d-app">
        <header class="fp3d-header">
          <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
          <h1>Floorplan 3D</h1>
          ${this.isAdmin?m`<div class="fp3d-seg" role="tablist">
                <button role="tab" aria-pressed=${this._mode==="view"} @click=${()=>this.setMode("view")}>${this.t("view")}</button>
                <button role="tab" aria-pressed=${this._mode==="editor"} @click=${()=>this.setMode("editor")}>${this.t("editor")}</button>
              </div>`:u}
          <span class="fp3d-grow"></span>
          ${this._mode==="view"&&t?.floors.some(o=>o.rooms.length)?m`<div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("quality")}>
                ${["auto","low","high"].map(o=>m`<button aria-pressed=${this._quality===o} @click=${()=>this.setQuality(o)}>${this.t(`quality_${o}`)}</button>`)}
              </div>`:u}
          ${this._mode==="editor"&&e!=="idle"?m`<span class="fp3d-save fp3d-save-${e}">${this.t(e==="saving"?"saving":e==="saved"?"saved":"save_error")}</span>`:u}
        </header>
        ${this.data.error&&!t?m`<p class="fp3d-message">${this.t("load_error")}: ${this.data.error}</p>`:u}
        ${!t&&!this.data.error?m`<p class="fp3d-message">${this.t("loading")}</p>`:u}
        ${t?this._mode==="editor"&&this.isAdmin?this.renderEditor(t):this.renderView(t):u}
      </div>
    `}renderEditor(t){return m`<fp3d-editor
      class="fp3d-body"
      .hass=${this.hass}
      .building=${t}
      .narrow=${this.narrow}
      @building-changed=${e=>this.data.edit(e.detail.building)}
    ></fp3d-editor>`}renderView(t){if(!t.floors.length||!t.floors.some(i=>i.rooms.length))return m`<div class="fp3d-empty">
        <p>${this.t(this.isAdmin?"no_building_admin":"no_building")}</p>
        ${this.isAdmin?m`<button class="fp3d-btn fp3d-primary" @click=${()=>this.setMode("editor")}>${this.t("open_editor")}</button>`:u}
      </div>`;let e=t.floors.find(i=>i.id===this._floorId),o=e?[e]:t.floors;return m`
      <nav class="fp3d-nav">
        ${t.floors.length>1?m`<button class="fp3d-chip" aria-pressed=${this._floorId===null} @click=${()=>{this._floorId=null,this._roomId=null}}>
                ${this.t("all_floors")}
              </button>
              ${[...t.floors].reverse().map(i=>m`<button
                  class="fp3d-chip"
                  aria-pressed=${i.id===this._floorId}
                  @click=${()=>{this._floorId=i.id,this._roomId=null}}
                >
                  ${i.name}
                </button>`)}
              <span class="fp3d-sep"></span>`:u}
        ${o.flatMap(i=>i.rooms.map(s=>m`<button
              class="fp3d-chip fp3d-room-chip"
              aria-pressed=${s.id===this._roomId}
              @click=${()=>{t.floors.length>1&&(this._floorId=i.id),this._roomId=s.id===this._roomId?null:s.id}}
            >
              ${s.name}
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
          @floor-tap=${i=>{this._floorId=i.detail.floorId,this._roomId=null}}
          @back=${()=>this.back()}
        ></fp3d-view3d>
        <div class="fp3d-overlay">
          <div class="fp3d-seg">
            <button aria-pressed=${this._wallMode==="auto"} @click=${()=>this._wallMode="auto"}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wallMode==="cut"} @click=${()=>this._wallMode="cut"}>${this.t("walls_cut")}</button>
          </div>
          ${t.floors.length>1&&!this._floorId?m`<div class="fp3d-seg">
                <button aria-pressed=${this._explode} @click=${()=>this.setExplode(!0)}>${this.t("floors_apart")}</button>
                <button aria-pressed=${!this._explode} @click=${()=>this.setExplode(!1)}>${this.t("floors_stacked")}</button>
              </div>`:u}
          ${this._roomId||this._floorId&&t.floors.length>1?m`<button class="fp3d-chip" @click=${()=>this.back()}>${this.t("back")}</button>`:u}
        </div>
      </div>
    `}static styles=[z,ht,I`
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
    `]};customElements.get("floorplan-3d-panel")||customElements.define("floorplan-3d-panel",Mt);var Rt=class extends A{static properties={hass:{attribute:!1},_config:{state:!0},_roomId:{state:!0},_floorId:{state:!0}};data=new N(this);constructor(){super(),this._roomId=null,this._floorId=null}static getStubConfig(){return{type:"custom:floorplan-3d-card"}}setConfig(t){if(t.height!==void 0&&!(t.height>100))throw new Error("height must be a number of pixels above 100");this._config=t}getCardSize(){return Math.ceil((this._config?.height??420)/50)}getGridOptions(){return{columns:"full",rows:Math.ceil((this._config?.height??420)/56),min_rows:4}}willUpdate(t){t.has("hass")&&this.hass&&this.data.setHass(this.hass)}back(){this._roomId?this._roomId=null:this._config?.floor||(this._floorId=null)}render(){let t=this.data.building,e=this._config?.height??420,o=this._config?.floor??(t&&t.floors.length===1?t.floors[0].id:t?.floors.some(s=>s.id===this._floorId)?this._floorId:null),i=!!this._roomId||!this._config?.floor&&!!this._floorId&&(t?.floors.length??0)>1;return m`<ha-card>
      <div class="fp3d-card-body" style="height:${e}px">
        ${t&&t.floors.some(s=>s.rooms.length)?m`<fp3d-view3d
              .hass=${this.hass}
              .building=${t}
              .floorId=${o}
              .roomId=${this._roomId}
              .wallMode=${this._config?.walls??"auto"}
              .explode=${this._config?.explode??!0}
              .quality=${this._config?.quality??"auto"}
              @room-tap=${s=>{s.detail.roomId&&(!o&&!this._config?.floor&&(this._floorId=s.detail.floorId),this._roomId=s.detail.roomId===this._roomId?null:s.detail.roomId)}}
              @floor-tap=${s=>{this._floorId=s.detail.floorId,this._roomId=null}}
              @back=${()=>this.back()}
            ></fp3d-view3d>`:m`<p class="fp3d-card-msg">${this.data.error??(t?E(this.hass,"no_building"):E(this.hass,"loading"))}</p>`}
        ${i?m`<button class="fp3d-card-back" @click=${()=>this.back()}>${E(this.hass,"back")}</button>`:u}
      </div>
    </ha-card>`}static styles=[z,I`
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
      .fp3d-card-back {
        position: absolute;
        right: 10px;
        top: 10px;
        font: 500 13px var(--fp3d-font);
        color: var(--fp3d-text);
        background: var(--fp3d-chrome);
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        padding: 6px 12px;
        cursor: pointer;
      }
    `]};if(!customElements.get("floorplan-3d-card")){customElements.define("floorplan-3d-card",Rt);let r=window;r.customCards=r.customCards??[],r.customCards.push({type:"floorplan-3d-card",name:E(void 0,"card_name"),description:E(void 0,"card_description"),preview:!1})}Ut();
