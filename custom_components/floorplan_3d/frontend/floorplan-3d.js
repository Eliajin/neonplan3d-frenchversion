var rt=globalThis,nt=rt.ShadowRoot&&(rt.ShadyCSS===void 0||rt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ct=Symbol(),Rt=new WeakMap,K=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==ct)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(nt&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=Rt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Rt.set(e,t))}return t}toString(){return this.cssText}},Ct=n=>new K(typeof n=="string"?n:n+"",void 0,ct),E=(n,...t)=>{let e=n.length===1?n[0]:t.reduce((i,s,o)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[o+1],n[0]);return new K(e,n,ct)},Pt=(n,t)=>{if(nt)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let i=document.createElement("style"),s=rt.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)}},pt=nt?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return Ct(e)})(n):n;var{is:ge,defineProperty:ve,getOwnPropertyDescriptor:be,getOwnPropertyNames:_e,getOwnPropertySymbols:$e,getPrototypeOf:xe}=Object,at=globalThis,Vt=at.trustedTypes,ye=Vt?Vt.emptyScript:"",we=at.reactiveElementPolyfillSupport,q=(n,t)=>n,ut={toAttribute(n,t){switch(t){case Boolean:n=n?ye:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},Ht=(n,t)=>!ge(n,t),zt={attribute:!0,type:String,converter:ut,reflect:!1,useDefault:!1,hasChanged:Ht};Symbol.metadata??=Symbol("metadata"),at.litPropertyMetadata??=new WeakMap;var P=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=zt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&ve(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){let{get:s,set:o}=be(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get:s,set(r){let l=s?.call(this);o?.call(this,r),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??zt}static _$Ei(){if(this.hasOwnProperty(q("elementProperties")))return;let t=xe(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(q("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(q("properties"))){let e=this.properties,i=[..._e(e),...$e(e)];for(let s of i)this.createProperty(s,e[s])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let s of i)e.unshift(pt(s))}else t!==void 0&&e.push(pt(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Pt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){let o=(i.converter?.toAttribute!==void 0?i.converter:ut).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){let i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){let o=i.getPropertyOptions(s),r=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:ut;this._$Em=s;let l=r.fromAttribute(e,o.type);this[s]=l??this._$Ej?.get(s)??l,this._$Em=null}}requestUpdate(t,e,i,s=!1,o){if(t!==void 0){let r=this.constructor;if(s===!1&&(o=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??Ht)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),o!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[s,o]of i){let{wrapped:r}=o,l=this[s];r!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,o,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};P.elementStyles=[],P.shadowRootOptions={mode:"open"},P[q("elementProperties")]=new Map,P[q("finalized")]=new Map,we?.({ReactiveElement:P}),(at.reactiveElementVersions??=[]).push("2.1.2");var $t=globalThis,Bt=n=>n,lt=$t.trustedTypes,Tt=lt?lt.createPolicy("lit-html",{createHTML:n=>n}):void 0,Wt="$lit$",V=`lit$${Math.random().toFixed(9).slice(2)}$`,Ft="?"+V,ke=`<${Ft}>`,T=document,J=()=>T.createComment(""),Y=n=>n===null||typeof n!="object"&&typeof n!="function",xt=Array.isArray,Se=n=>xt(n)||typeof n?.[Symbol.iterator]=="function",ft=`[ 	
\f\r]`,G=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Dt=/-->/g,Lt=/>/g,H=RegExp(`>|${ft}(?:([^\\s"'>=/]+)(${ft}*=${ft}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ot=/'/g,Ut=/"/g,jt=/^(?:script|style|textarea|title)$/i,yt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),g=yt(1),$=yt(2),Ue=yt(3),D=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),Nt=new WeakMap,B=T.createTreeWalker(T,129);function Kt(n,t){if(!xt(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Tt!==void 0?Tt.createHTML(t):t}var Ae=(n,t)=>{let e=n.length-1,i=[],s,o=t===2?"<svg>":t===3?"<math>":"",r=G;for(let l=0;l<e;l++){let a=n[l],d,c,f=-1,_=0;for(;_<a.length&&(r.lastIndex=_,c=r.exec(a),c!==null);)_=r.lastIndex,r===G?c[1]==="!--"?r=Dt:c[1]!==void 0?r=Lt:c[2]!==void 0?(jt.test(c[2])&&(s=RegExp("</"+c[2],"g")),r=H):c[3]!==void 0&&(r=H):r===H?c[0]===">"?(r=s??G,f=-1):c[1]===void 0?f=-2:(f=r.lastIndex-c[2].length,d=c[1],r=c[3]===void 0?H:c[3]==='"'?Ut:Ot):r===Ut||r===Ot?r=H:r===Dt||r===Lt?r=G:(r=H,s=void 0);let p=r===H&&n[l+1].startsWith("/>")?" ":"";o+=r===G?a+ke:f>=0?(i.push(d),a.slice(0,f)+Wt+a.slice(f)+V+p):a+V+(f===-2?l:p)}return[Kt(n,o+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},Z=class n{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0,l=t.length-1,a=this.parts,[d,c]=Ae(t,e);if(this.el=n.createElement(d,i),B.currentNode=this.el.content,e===2||e===3){let f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(s=B.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(let f of s.getAttributeNames())if(f.endsWith(Wt)){let _=c[r++],p=s.getAttribute(f).split(V),h=/([.?@])?(.*)/.exec(_);a.push({type:1,index:o,name:h[2],strings:p,ctor:h[1]==="."?gt:h[1]==="?"?vt:h[1]==="@"?bt:N}),s.removeAttribute(f)}else f.startsWith(V)&&(a.push({type:6,index:o}),s.removeAttribute(f));if(jt.test(s.tagName)){let f=s.textContent.split(V),_=f.length-1;if(_>0){s.textContent=lt?lt.emptyScript:"";for(let p=0;p<_;p++)s.append(f[p],J()),B.nextNode(),a.push({type:2,index:++o});s.append(f[_],J())}}}else if(s.nodeType===8)if(s.data===Ft)a.push({type:2,index:o});else{let f=-1;for(;(f=s.data.indexOf(V,f+1))!==-1;)a.push({type:7,index:o}),f+=V.length-1}o++}}static createElement(t,e){let i=T.createElement("template");return i.innerHTML=t,i}};function U(n,t,e=n,i){if(t===D)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl,o=Y(t)?void 0:t._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),o===void 0?s=void 0:(s=new o(n),s._$AT(n,e,i)),i!==void 0?(e._$Co??=[])[i]=s:e._$Cl=s),s!==void 0&&(t=U(n,s._$AS(n,t.values),s,i)),t}var mt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??T).importNode(e,!0);B.currentNode=s;let o=B.nextNode(),r=0,l=0,a=i[0];for(;a!==void 0;){if(r===a.index){let d;a.type===2?d=new X(o,o.nextSibling,this,t):a.type===1?d=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(d=new _t(o,this,t)),this._$AV.push(d),a=i[++l]}r!==a?.index&&(o=B.nextNode(),r++)}return B.currentNode=T,s}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},X=class n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=U(this,t,e),Y(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==D&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Se(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==u&&Y(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Z.createElement(Kt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{let o=new mt(s,this),r=o.u(this.options);o.p(e),this.T(r),this._$AH=o}}_$AC(t){let e=Nt.get(t.strings);return e===void 0&&Nt.set(t.strings,e=new Z(t)),e}k(t){xt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let o of t)s===e.length?e.push(i=new n(this.O(J()),this.O(J()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let i=Bt(t).nextSibling;Bt(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},N=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}_$AI(t,e=this,i,s){let o=this.strings,r=!1;if(o===void 0)t=U(this,t,e,0),r=!Y(t)||t!==this._$AH&&t!==D,r&&(this._$AH=t);else{let l=t,a,d;for(t=o[0],a=0;a<o.length-1;a++)d=U(this,l[i+a],e,a),d===D&&(d=this._$AH[a]),r||=!Y(d)||d!==this._$AH[a],d===u?t=u:t!==u&&(t+=(d??"")+o[a+1]),this._$AH[a]=d}r&&!s&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},gt=class extends N{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}},vt=class extends N{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==u)}},bt=class extends N{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=U(this,t,e,0)??u)===D)return;let i=this._$AH,s=t===u&&i!==u||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==u&&(i===u||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},_t=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){U(this,t)}};var Ee=$t.litHtmlPolyfillSupport;Ee?.(Z,X),($t.litHtmlVersions??=[]).push("3.3.3");var qt=(n,t,e)=>{let i=e?.renderBefore??t,s=i._$litPart$;if(s===void 0){let o=e?.renderBefore??null;i._$litPart$=s=new X(t.insertBefore(J(),o),o,void 0,e??{})}return s._$AI(n),s};var wt=globalThis,A=class extends P{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=qt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return D}};A._$litElement$=!0,A.finalized=!0,wt.litElementHydrateSupport?.({LitElement:A});var Me=wt.litElementPolyfillSupport;Me?.({LitElement:A});(wt.litElementVersions??=[]).push("4.2.2");async function Gt(n){return n.callWS({type:"floorplan_3d/building/get"})}async function Jt(n,t){return(await n.callWS({type:"floorplan_3d/building/save",building:t})).revision}function Yt(n,t){return n.connection.subscribeMessage(e=>t(e.revision),{type:"floorplan_3d/building/subscribe"})}async function Zt(n,t){return(await n.callWS({type:"floorplan_3d/image/get",image_id:t})).data}async function Xt(n,t,e){await n.callWS({type:"floorplan_3d/image/set",image_id:t,data:e})}var Ie=700,W=class{building=null;error=null;saveState="idle";host;hass=null;revision=-1;ownRevisions=new Set;unsubscribe=null;saveTimer;pending=null;saving=null;connected=!1;constructor(t){this.host=t,t.addController(this)}setHass(t){let e=this.hass===null;this.hass=t,e&&this.connected&&this.start()}hostConnected(){this.connected=!0,this.hass&&this.start()}hostDisconnected(){this.connected=!1,this.flush(),this.unsubscribe?.(),this.unsubscribe=null}edit(t){this.building=t,this.pending=t,clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{this.flush()},Ie),this.host.requestUpdate()}async flush(){clearTimeout(this.saveTimer),this.saving&&await this.saving;let t=this.pending;!t||!this.hass||(this.pending=null,this.saveState="saving",this.host.requestUpdate(),this.saving=(async()=>{try{let e=await Jt(this.hass,t);this.ownRevisions.add(e),this.revision=e,this.saveState=this.pending?"saving":"saved"}catch(e){this.saveState="error",this.error=Qt(e)}this.host.requestUpdate()})(),await this.saving,this.saving=null)}async start(){if(this.hass&&(await this.reload(),!this.unsubscribe&&this.connected))try{this.unsubscribe=await Yt(this.hass,t=>{this.ownRevisions.has(t)||t===this.revision||this.pending||this.saving||this.reload()})}catch{}}async reload(){if(this.hass){try{let t=await Gt(this.hass);this.building=t.building,this.revision=t.revision,this.error=null}catch(t){this.error=Qt(t)}this.host.requestUpdate()}}};function Qt(n){return n&&typeof n=="object"&&"message"in n?String(n.message):String(n)}var te=["wood","oak","tiles","carpet","stone","concrete"];function ee(n,t,e){return{id:n,name:t,elevation:e,height:2.5,cut_height:1.15,rooms:[],openings:[],furniture:[],placements:[],background:null}}function Q(n){return`${n}_${Math.random().toString(36).slice(2,10)}`}function tt(n){let t=0;for(let e=0;e<n.length;e++){let[i,s]=n[e],[o,r]=n[(e+1)%n.length];t+=i*r-o*s}return t/2}function F(n){return Math.abs(tt(n))}function kt(n){let t=tt(n);if(Math.abs(t)<1e-9){let s=n.length||1;return[n.reduce((o,r)=>o+r[0],0)/s,n.reduce((o,r)=>o+r[1],0)/s]}let e=0,i=0;for(let s=0;s<n.length;s++){let[o,r]=n[s],[l,a]=n[(s+1)%n.length],d=o*a-l*r;e+=(o+l)*d,i+=(r+a)*d}return[e/(6*t),i/(6*t)]}function ie(n){if(n.length!==4)return!1;for(let t=0;t<4;t++){let[e,i]=n[t],[s,o]=n[(t+1)%4];if(Math.abs(e-s)>1e-6&&Math.abs(i-o)>1e-6)return!1}return!0}function et(n){let t=1/0,e=1/0,i=-1/0,s=-1/0;for(let[o,r]of n)t=Math.min(t,o),e=Math.min(e,r),i=Math.max(i,o),s=Math.max(s,r);return{x0:t,z0:e,x1:i,z1:s}}function se(n,t){let e=!1;for(let i=0,s=t.length-1;i<t.length;s=i++){let[o,r]=t[i],[l,a]=t[s];r>n[1]!=a>n[1]&&n[0]<(l-o)*(n[1]-r)/(a-r)+o&&(e=!e)}return e}var R=(n,t)=>[n[0]-t[0],n[1]-t[1]],it=(n,t)=>[n[0]+t[0],n[1]+t[1]],L=(n,t)=>[n[0]*t,n[1]*t],St=(n,t)=>n[0]*t[0]+n[1]*t[1],st=(n,t)=>n[0]*t[1]-n[1]*t[0],dt=n=>Math.hypot(n[0],n[1]),ot=n=>{let t=dt(n)||1;return[n[0]/t,n[1]/t]},oe=n=>[-n[1],n[0]],re=n=>[n[1],-n[0]];function ae(n,t){let e=t.eps??.005,i=[],s=[],o=p=>{for(let h=0;h<s.length;h++)if(Math.abs(s[h][0]-p[0])<=e&&Math.abs(s[h][1]-p[1])<=e)return h;return s.push([p[0],p[1]]),s.length-1},r=[];for(let p of n){let h=p.points;if(h.length<3||Math.abs(tt(h))<1e-6)continue;let v=tt(h)>0,m=h.map(o);for(let b=0;b<h.length;b++){let x=m[b],w=m[(b+1)%h.length];x!==w&&r.push(v?{u:x,v:w,room:p.id,edge:b,forward:!0}:{u:w,v:x,room:p.id,edge:b,forward:!1})}}let l=[];for(let p of r){let h=s[p.u],v=s[p.v],m=R(v,h),b=dt(m),x=L(m,1/b),w=[];for(let k=0;k<s.length;k++){if(k===p.u||k===p.v)continue;let S=R(s[k],h),I=St(S,x);I<=e||I>=b-e||Math.abs(st(x,S))<=e&&w.push({t:I,id:k})}w.sort((k,S)=>k.t-S.t);let C=[{t:0,id:p.u},...w,{t:b,id:p.v}];for(let k=0;k+1<C.length;k++){let S=C[k],I=C[k+1],O=p.forward?S.t:b-I.t,me=p.forward?I.t:b-S.t;l.push({u:S.id,v:I.id,room:p.room,edge:p.edge,t0:O,t1:me})}}let a=new Map;for(let p of l){let h=p.u<p.v?`${p.u}-${p.v}`:`${p.v}-${p.u}`,v=a.get(h);v||a.set(h,v=[]),v.push(p)}let d=p=>({room_id:p.room,edge:p.edge,t0:p.t0,t1:p.t1}),c=[];for(let p of a.values()){let h=p[0],v=p.find(m=>m!==h&&m.u===h.v&&m.v===h.u&&m.room!==h.room);for(let m of p)m!==h&&m!==v&&m.room!==h.room&&i.push(`overlap:${h.room}:${m.room}`);v?c.push({a:h.u,b:h.v,left:t.interior/2,right:t.interior/2,exterior:!1,roomLeft:h.room,roomRight:v.room,sources:[d(h),d(v)]}):c.push({a:h.u,b:h.v,left:0,right:t.exterior,exterior:!0,roomLeft:h.room,roomRight:null,sources:[d(h)]})}c=Ce(c,s);let f=Ve(c,s);return{walls:c.map((p,h)=>{let v=s[p.a],m=s[p.b],b=f.get(`${h}:a`),x=f.get(`${h}:b`),w=ze([b.right,x.left,m,x.right,b.left,v],1e-6);return{id:Re(v,m),a:[v[0],v[1]],b:[m[0],m[1]],left:p.left,right:p.right,exterior:p.exterior,roomLeft:p.roomLeft,roomRight:p.roomRight,sources:p.sources,footprint:w}}),warnings:[...new Set(i)]}}function Re(n,t){let e=o=>Math.round(o*100),[i,s]=n[0]<t[0]||n[0]===t[0]&&n[1]<=t[1]?[n,t]:[t,n];return`w_${e(i[0])}_${e(i[1])}_${e(s[0])}_${e(s[1])}`}function ne(n){return{...n,a:n.b,b:n.a,left:n.right,right:n.left,roomLeft:n.roomRight,roomRight:n.roomLeft}}function Ce(n,t){let e=n.slice(),i=!0;for(;i;){i=!1;let s=new Map;e.forEach((o,r)=>{for(let l of[o.a,o.b]){let a=s.get(l);a||s.set(l,a=[]),a.push(r)}});for(let[o,r]of s){if(r.length!==2)continue;let l=e[r[0]],a=e[r[1]];if(l.b!==o&&(l=ne(l)),a.a!==o&&(a=ne(a)),l.a===a.b)continue;let d=ot(R(t[l.b],t[l.a])),c=ot(R(t[a.b],t[a.a]));if(Math.abs(st(d,c))>1e-6||St(d,c)<=0||l.exterior!==a.exterior||l.roomLeft!==a.roomLeft||l.roomRight!==a.roomRight||Math.abs(l.left-a.left)>1e-9||Math.abs(l.right-a.right)>1e-9)continue;let f={...l,b:a.b,sources:Pe(l.sources,a.sources)},_=e.filter((p,h)=>h!==r[0]&&h!==r[1]);_.push(f),e.length=0,e.push(..._),i=!0;break}}return e}function Pe(n,t){let e=n.map(i=>({...i}));for(let i of t){let s=e.find(o=>o.room_id===i.room_id&&o.edge===i.edge&&(Math.abs(o.t1-i.t0)<1e-6||Math.abs(i.t1-o.t0)<1e-6));s?(s.t0=Math.min(s.t0,i.t0),s.t1=Math.max(s.t1,i.t1)):e.push({...i})}return e}function Ve(n,t){let e=new Map;n.forEach((s,o)=>{let r=ot(R(t[s.b],t[s.a])),l=[[s.a,{key:`${o}:a`,d:r,left:s.left,right:s.right,angle:Math.atan2(r[1],r[0])}],[s.b,{key:`${o}:b`,d:L(r,-1),left:s.right,right:s.left,angle:Math.atan2(-r[1],-r[0])}]];for(let[a,d]of l){let c=e.get(a);c||e.set(a,c=[]),c.push(d)}});let i=new Map;for(let[s,o]of e){let r=t[s];o.sort((d,c)=>d.angle-c.angle);let l=d=>({left:it(r,L(oe(d.d),d.left)),right:it(r,L(re(d.d),d.right))});for(let d of o)i.set(d.key,l(d));if(o.length<2)continue;let a=4*Math.max(...o.map(d=>Math.max(d.left,d.right)))+1e-9;for(let d=0;d<o.length;d++){let c=o[d],f=o[(d+1)%o.length],_=it(r,L(oe(c.d),c.left)),p=it(r,L(re(f.d),f.right)),h=st(c.d,f.d);if(Math.abs(h)<1e-4)continue;let v=st(R(p,_),f.d)/h,m=it(_,L(c.d,v));dt(R(m,r))>a||(i.get(c.key).left=m,i.get(f.key).right=m)}}return i}function ze(n,t){let e=n.filter((s,o)=>dt(R(s,n[(o+1)%n.length]))>t),i=!0;for(;i&&e.length>3;){i=!1;for(let s=0;s<e.length;s++){let o=e[(s+e.length-1)%e.length],r=e[s],l=e[(s+1)%e.length],a=R(r,o),d=R(l,r);if(Math.abs(st(ot(a),ot(d)))<1e-7&&St(a,d)>0){e=e.filter((c,f)=>f!==s),i=!0;break}}}return e}var le={view:"3D",editor:"Editor",all_floors:"Alle Etagen",no_building:"Noch kein Grundriss vorhanden.",no_building_admin:"Noch kein Grundriss vorhanden. Im Editor zeichnest du deine erste Etage.",open_editor:"Editor \xF6ffnen",loading:"L\xE4dt \u2026",load_error:"Laden fehlgeschlagen",saving:"Speichert \u2026",saved:"Gespeichert",save_error:"Speichern fehlgeschlagen",walls_auto:"W\xE4nde hoch",walls_cut:"Schnitt",reset_view:"\xDCbersicht",back:"Zur\xFCck",floor:"Etage",floors:"Etagen",add_floor:"Etage hinzuf\xFCgen",floor_name:"Name",elevation:"H\xF6he \xFCber Boden (m)",height:"Raumh\xF6he (m)",cut_height:"Schnitth\xF6he (m)",delete_floor:"Etage l\xF6schen",delete_floor_confirm:"Etage \u201E{name}\u201C mit allen R\xE4umen l\xF6schen?",move_up:"Nach oben",move_down:"Nach unten",default_floor:"Erdgeschoss",new_floor:"Etage {n}",tool_select:"Ausw\xE4hlen",tool_rect:"Rechteck",tool_polygon:"Freie Form",undo:"R\xFCckg\xE4ngig",redo:"Wiederholen",fit:"Alles zeigen",room:"Raum",rooms:"R\xE4ume",room_name:"Name",area:"Bereich",no_area:"Kein Bereich",material:"Boden",x:"X (m)",z:"Y (m)",width:"Breite (m)",depth:"Tiefe (m)",points:"Eckpunkte",delete_point:"Punkt l\xF6schen",duplicate:"Duplizieren",delete:"L\xF6schen",new_room:"Raum {n}",settings:"Einstellungen",wall_exterior:"Au\xDFenwand (m)",wall_interior:"Innenwand (m)",grid:"Raster (m)",background:"Vorlage (Grundriss-Bild)",background_upload:"Bild w\xE4hlen \u2026",background_width:"Breite im Plan (m)",background_opacity:"Deckkraft",background_remove:"Vorlage entfernen",hint_select:"Raum antippen zum Ausw\xE4hlen \xB7 Ecken ziehen \xB7 \u201E+\u201C auf einer Kante f\xFCgt einen Punkt ein \xB7 Entf l\xF6scht \xB7 Strg+Z",hint_rect:"Ziehen, um ein Rechteck zu zeichnen",hint_polygon:"Punkte setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",hint_empty:"Lege zuerst eine Etage an.",area_m2:"{a} m\xB2",overlap_warning:"R\xE4ume \xFCberlappen sich \u2013 die W\xE4nde dort sind unvollst\xE4ndig.",read_only:"Nur Administratoren k\xF6nnen den Grundriss bearbeiten.",mat_wood:"Holz",mat_oak:"Eiche",mat_tiles:"Fliesen",mat_carpet:"Teppich",mat_stone:"Stein",mat_concrete:"Beton",card_name:"Floorplan 3D",card_description:"Deine Wohnung in 3D (Neon).",stats:"{fps} B/s \xB7 {calls} Draw-Calls \xB7 {tris} Dreiecke"},He={view:"3D",editor:"Editor",all_floors:"All floors",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",walls_auto:"Tall walls",walls_cut:"Cut",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",add_floor:"Add floor",floor_name:"Name",elevation:"Elevation (m)",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",default_floor:"Ground floor",new_floor:"Floor {n}",tool_select:"Select",tool_rect:"Rectangle",tool_polygon:"Free shape",undo:"Undo",redo:"Redo",fit:"Show all",room:"Room",rooms:"Rooms",room_name:"Name",area:"Area",no_area:"No area",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",delete_point:"Delete corner",duplicate:"Duplicate",delete:"Delete",new_room:"Room {n}",settings:"Settings",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 Del deletes \xB7 Ctrl+Z",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_empty:"Add a floor first.",area_m2:"{a} m\xB2",overlap_warning:"Rooms overlap \u2013 walls there are incomplete.",read_only:"Only administrators can edit the floor plan.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"Floorplan 3D",card_description:"Your home in 3D (neon).",stats:"{fps} fps \xB7 {calls} draw calls \xB7 {tris} triangles"};function M(n,t,e={}){let s=((n?.language??navigator.language).startsWith("de")?le:He)[t]??le[t]??t;for(let[o,r]of Object.entries(e))s=s.replace(`{${o}}`,String(r));return s}function j(n,t,e=2){return t.toLocaleString(n?.language??void 0,{maximumFractionDigits:e})}var z=E`
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
`,ht=E`
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
`;var de=100,he=10,y=n=>Math.round(n*1e3)/1e3,At=class extends A{static properties={hass:{attribute:!1},building:{attribute:!1},narrow:{type:Boolean},_doc:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_vertex:{state:!0},_tool:{state:!0},_draft:{state:!0},_cursor:{state:!0},_guides:{state:!0},_view:{state:!0},_size:{state:!0},_images:{state:!0},_canUndo:{state:!0},_canRedo:{state:!0}};past=[];future=[];drag=null;pointers=new Map;pinch=null;fitted=!1;resizeObserver;loadingImages=new Set;constructor(){super(),this.narrow=!1,this._floorId=null,this._roomId=null,this._vertex=null,this._tool="select",this._draft=[],this._cursor=null,this._guides={},this._view={scale:50,ox:40,oy:40},this._size={w:800,h:600},this._images={},this._canUndo=!1,this._canRedo=!1}t(t,e){return M(this.hass,t,e)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.resizeObserver?.disconnect()}willUpdate(t){t.has("building")&&this.building!==this._doc&&(this._doc=this.building,this._doc.floors.some(e=>e.id===this._floorId)||(this._floorId=this._doc.floors[0]?.id??null),this.floor?.rooms.some(e=>e.id===this._roomId)||(this._roomId=null))}firstUpdated(){let t=this.renderRoot.querySelector(".fp3d-canvas-wrap");this.resizeObserver=new ResizeObserver(()=>{this._size={w:t.clientWidth,h:t.clientHeight},!this.fitted&&this._size.w>0&&(this.fitted=!0,this.fit())}),this.resizeObserver.observe(t)}updated(){let t=this.floor?.background;t&&!this._images[t.image_id]&&!this.loadingImages.has(t.image_id)&&this.loadImage(t.image_id)}get floor(){return this._doc?.floors.find(t=>t.id===this._floorId)}get room(){return this.floor?.rooms.find(t=>t.id===this._roomId)}get isAdmin(){return this.hass?.user?.is_admin??!0}setDoc(t,e=this._doc){e&&(this.past.push(JSON.stringify(e)),this.past.length>de&&this.past.shift(),this.future=[]),this._doc=t,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}change(t,e=this._doc,i=!0){let s=structuredClone(e),o=s.floors.find(r=>r.id===this._floorId);!o&&this._floorId||(t(s,o),this.setDoc(s,i?e:null))}undo(){let t=this.past.pop();t&&(this.future.push(JSON.stringify(this._doc)),this.restore(JSON.parse(t)))}redo(){let t=this.future.pop();t&&(this.past.push(JSON.stringify(this._doc)),this.restore(JSON.parse(t)))}restore(t){this._doc=t,t.floors.some(e=>e.id===this._floorId)||(this._floorId=t.floors[0]?.id??null),this.floor?.rooms.some(e=>e.id===this._roomId)||(this._roomId=null),this._vertex=null,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}toScreen(t){let{scale:e,ox:i,oy:s}=this._view;return[t[0]*e+i,t[1]*e+s]}toWorld(t,e){let{scale:i,ox:s,oy:o}=this._view;return[(t-s)/i,(e-o)/i]}localPoint(t){let e=this.renderRoot.querySelector("svg").getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}fit(){let t=this.floor?.rooms.flatMap(l=>l.points)??[],e=t.length?et(t):{x0:0,z0:0,x1:10,z1:8},i=1.5,s=e.x1-e.x0+2*i,o=e.z1-e.z0+2*i,r=Math.max(8,Math.min(400,Math.min(this._size.w/s,this._size.h/o)));this._view={scale:r,ox:this._size.w/2-(e.x0+e.x1)/2*r,oy:this._size.h/2-(e.z0+e.z1)/2*r}}zoomAt(t,e,i){let{scale:s,ox:o,oy:r}=this._view,l=Math.max(8,Math.min(600,s*t)),a=l/s;this._view={scale:l,ox:e-(e-o)*a,oy:i-(i-r)*a}}snap(t,e,i=!1){if(this._guides={},i)return t;let s=he/this._view.scale,o=this.floor?.rooms??[],r=[];for(let h of o)h.points.forEach((v,m)=>{e&&h.id===e.roomId&&(e.index===void 0||e.index===m)||r.push(v)});let l=null,a=s;for(let h of r){let v=Math.hypot(h[0]-t[0],h[1]-t[1]);v<a&&(a=v,l=h)}if(l)return this._guides={point:l},[l[0],l[1]];for(let h of o)if(!(e&&h.id===e.roomId))for(let v=0;v<h.points.length;v++){let m=h.points[v],b=h.points[(v+1)%h.points.length],x=b[0]-m[0],w=b[1]-m[1],C=x*x+w*w;if(C<1e-9)continue;let k=((t[0]-m[0])*x+(t[1]-m[1])*w)/C;if(k<=0||k>=1)continue;let S=[m[0]+k*x,m[1]+k*w],I=Math.hypot(S[0]-t[0],S[1]-t[1]),O=this._doc.settings.grid;Math.abs(w)<1e-9&&(S[0]=Math.min(Math.max(Math.round(S[0]/O)*O,Math.min(m[0],b[0])),Math.max(m[0],b[0]))),Math.abs(x)<1e-9&&(S[1]=Math.min(Math.max(Math.round(S[1]/O)*O,Math.min(m[1],b[1])),Math.max(m[1],b[1]))),I<a&&(a=I,l=S)}if(l)return this._guides={point:l},[y(l[0]),y(l[1])];let d=this._doc.settings.grid,c=[y(Math.round(t[0]/d)*d),y(Math.round(t[1]/d)*d)],f=s,_=s,p={};for(let h of r)Math.abs(h[0]-t[0])<f&&(f=Math.abs(h[0]-t[0]),c[0]=h[0],p.x=h[0]),Math.abs(h[1]-t[1])<_&&(_=Math.abs(h[1]-t[1]),c[1]=h[1],p.z=h[1]);return this._guides=p,c}onPointerDown(t){t.currentTarget.setPointerCapture(t.pointerId);let i=this.localPoint(t);if(this.pointers.set(t.pointerId,i),this.pointers.size===2){this.drag&&(this.drag.kind==="vertex"||this.drag.kind==="room")&&this.drag.moved&&this.restoreLive(this.drag.base),this.drag=null,this.pinch=this.pinchState();return}if(this.pointers.size>2)return;if(t.button===1||t.button===2||!this.floor){this.drag={kind:"pan",last:i};return}let s=this.toWorld(...i),o=t.target;if(this._tool==="rect"){let d=this.snap(s,void 0,t.altKey);this.drag={kind:"rect",start:d,end:d};return}if(this._tool==="polygon"){this.drag={kind:"tap",startScreen:i,last:i,panning:!1};return}let r=o.closest("[data-vertex]"),l=o.closest("[data-mid]");if(r&&this.room&&this.isAdmin){this._vertex=Number(r.getAttribute("data-vertex")),this.drag={kind:"vertex",roomId:this.room.id,index:this._vertex,base:this._doc,moved:!1};return}if(l&&this.room&&this.isAdmin){let d=Number(l.getAttribute("data-mid")),c=this.room.points,f=c[d],_=c[(d+1)%c.length],p=[y((f[0]+_[0])/2),y((f[1]+_[1])/2)],h=this._doc,v=this.room.id;this.change((m,b)=>b.rooms.find(x=>x.id===v).points.splice(d+1,0,p),h,!1),this._vertex=d+1,this.drag={kind:"vertex",roomId:v,index:d+1,base:h,moved:!0};return}let a=o.closest("[data-room]")?.getAttribute("data-room")??this.roomAt(s);if(a){a!==this._roomId&&(this._vertex=null),this._roomId=a,this.drag=this.isAdmin?{kind:"room",roomId:a,start:s,startScreen:i,base:this._doc,moved:!1}:{kind:"pan",last:i};return}this._roomId=null,this._vertex=null,this.drag={kind:"pan",last:i}}onPointerMove(t){let e=this.localPoint(t);if(this.pointers.has(t.pointerId)&&this.pointers.set(t.pointerId,e),this.pinch){let o=this.pinchState();o&&(this.zoomAt(o.dist/Math.max(1,this.pinch.dist),...o.mid),this._view={...this._view,ox:this._view.ox+o.mid[0]-this.pinch.mid[0],oy:this._view.oy+o.mid[1]-this.pinch.mid[1]},this.pinch=o);return}let i=this.toWorld(...e),s=this.drag;if(!s){this._tool!=="select"&&this.floor&&(this._cursor=this.snap(i,void 0,t.altKey));return}switch(s.kind){case"pan":this._view={...this._view,ox:this._view.ox+e[0]-s.last[0],oy:this._view.oy+e[1]-s.last[1]},s.last=e;break;case"tap":(s.panning||Math.hypot(e[0]-s.startScreen[0],e[1]-s.startScreen[1])>6)&&(s.panning=!0,this._view={...this._view,ox:this._view.ox+e[0]-s.last[0],oy:this._view.oy+e[1]-s.last[1]}),s.last=e;break;case"rect":s.end=this.snap(i,void 0,t.altKey),this.requestUpdate();break;case"vertex":{let o=this.snap(i,{roomId:s.roomId,index:s.index},t.altKey);s.moved=!0,this.change((r,l)=>{l.rooms.find(a=>a.id===s.roomId).points[s.index]=o},s.base,!1);break}case"room":{if(!s.moved&&Math.hypot(e[0]-s.startScreen[0],e[1]-s.startScreen[1])<5)return;s.moved=!0;let o=s.base.floors.find(l=>l.id===this._floorId)?.rooms.find(l=>l.id===s.roomId);if(!o)return;let r=this.roomDelta(o,[i[0]-s.start[0],i[1]-s.start[1]],t.altKey);this.change((l,a)=>{let d=a.rooms.find(c=>c.id===s.roomId);d.points=o.points.map(([c,f])=>[y(c+r[0]),y(f+r[1])])},s.base,!1);break}}}onPointerUp(t){if(this.pointers.delete(t.pointerId),this.pinch){this.pointers.size<2&&(this.pinch=null);return}let e=this.drag;if(this.drag=null,!e||t.type==="pointercancel"){e&&(e.kind==="vertex"||e.kind==="room")&&e.moved&&this.restoreLive(e.base);return}let i=this.localPoint(t);switch(e.kind){case"rect":{let[s,o]=e.start,[r,l]=e.end;if(Math.abs(r-s)>=.2&&Math.abs(l-o)>=.2){let a=[Math.min(s,r),Math.min(o,l)],d=[Math.max(s,r),Math.max(o,l)];this.addRoom([a,[d[0],a[1]],d,[a[0],d[1]]])}this._guides={};break}case"tap":e.panning||this.addDraftPoint(this.snap(this.toWorld(...i),void 0,t.altKey),i);break;case"vertex":case"room":e.moved&&this.pushHistory(e.base),this._guides={};break;default:break}}onWheel(t){t.preventDefault();let[e,i]=this.localPoint(t);this.zoomAt(Math.exp(-t.deltaY*(t.deltaMode===1?.05:.0015)),e,i)}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,i]=t;return{dist:Math.hypot(e[0]-i[0],e[1]-i[1]),mid:[(e[0]+i[0])/2,(e[1]+i[1])/2]}}pushHistory(t){this.past.push(JSON.stringify(t)),this.past.length>de&&this.past.shift(),this.future=[],this._canUndo=!0,this._canRedo=!1}restoreLive(t){this._doc=t,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}roomDelta(t,e,i){if(i)return e;let s=this._doc.settings.grid,o=[Math.round(e[0]/s)*s,Math.round(e[1]/s)*s],l=he/this._view.scale;this._guides={};for(let a of this.floor?.rooms??[])if(a.id!==t.id)for(let d of a.points)for(let c of t.points){let f=Math.hypot(c[0]+e[0]-d[0],c[1]+e[1]-d[1]);f<l&&(l=f,o=[d[0]-c[0],d[1]-c[1]],this._guides={point:d})}return o}roomAt(t){return(this.floor?.rooms??[]).filter(s=>se(t,s.points)).sort((s,o)=>F(s.points)-F(o.points))[0]?.id??null}addDraftPoint(t,e){let i=this._draft;if(i.length>=3){let[o,r]=this.toScreen(i[0]);if(Math.hypot(o-e[0],r-e[1])<14){this.closeDraft();return}}let s=i[i.length-1];s&&Math.hypot(s[0]-t[0],s[1]-t[1])<1e-6||(this._draft=[...i,t])}closeDraft(){this._draft.length>=3&&F(this._draft)>.05&&this.addRoom(this._draft),this._draft=[],this._cursor=null,this._guides={}}addRoom(t){if(!this.floor)return;let e=Q("room"),i=this.floor.rooms.length+1;this.change((s,o)=>o.rooms.push({id:e,name:this.t("new_room",{n:i}),area_id:null,points:t.map(([r,l])=>[y(r),y(l)]),floor_material:"wood"})),this._roomId=e,this._vertex=null,this._tool="select"}onKey=t=>{if(t.composedPath().some(s=>s instanceof HTMLInputElement||s instanceof HTMLSelectElement||s instanceof HTMLTextAreaElement)||!this.isConnected||!this.offsetParent)return;let i=t.ctrlKey||t.metaKey;i&&t.key.toLowerCase()==="z"?(t.preventDefault(),t.shiftKey?this.redo():this.undo()):i&&t.key.toLowerCase()==="y"?(t.preventDefault(),this.redo()):i&&t.key.toLowerCase()==="d"?(t.preventDefault(),this.duplicateRoom()):t.key==="Delete"||t.key==="Backspace"&&this._tool==="select"?this._vertex!==null?this.deleteVertex(this._vertex):this.deleteRoom():t.key==="Backspace"&&this._tool==="polygon"?this._draft=this._draft.slice(0,-1):t.key==="Enter"&&this._tool==="polygon"?this.closeDraft():t.key==="Escape"&&(this._draft.length?this._draft=[]:this._tool!=="select"?this._tool="select":(this._roomId=null,this._vertex=null),this._cursor=null)};addFloor(){let t=this._doc.floors,e=t[t.length-1],i=Q("floor"),s=t.length===0?this.t("default_floor"):this.t("new_floor",{n:t.length}),o=e?y(e.elevation+e.height+.25):0,r=structuredClone(this._doc);r.floors.push(ee(i,s,o)),this.setDoc(r),this._floorId=i,this._roomId=null}moveFloor(t){let e=this._doc.floors.findIndex(o=>o.id===this._floorId),i=e+t;if(e<0||i<0||i>=this._doc.floors.length)return;let s=structuredClone(this._doc);[s.floors[e],s.floors[i]]=[s.floors[i],s.floors[e]],this.setDoc(s)}deleteFloor(){let t=this.floor;if(!t||!confirm(this.t("delete_floor_confirm",{name:t.name})))return;let e=structuredClone(this._doc);e.floors=e.floors.filter(i=>i.id!==t.id),this.setDoc(e),this._floorId=e.floors[0]?.id??null,this._roomId=null}deleteRoom(){let t=this._roomId;!t||!this.isAdmin||(this.change((e,i)=>{i.rooms=i.rooms.filter(s=>s.id!==t),i.openings=i.openings.filter(s=>s.room_id!==t)}),this._roomId=null,this._vertex=null)}duplicateRoom(){let t=this.room;if(!t||!this.isAdmin)return;let e=Q("room");this.change((i,s)=>s.rooms.push({...structuredClone(t),id:e,points:t.points.map(([o,r])=>[y(o+.5),y(r+.5)])})),this._roomId=e}deleteVertex(t){let e=this.room;!e||e.points.length<=3||(this.change((i,s)=>s.rooms.find(o=>o.id===e.id).points.splice(t,1)),this._vertex=null)}updateFloor(t){this.change((e,i)=>Object.assign(i,t))}updateRoom(t){let e=this._roomId;this.change((i,s)=>Object.assign(s.rooms.find(o=>o.id===e),t))}setArea(t){let e=this.room;if(!e)return;let i=t?this.hass?.areas?.[t]:void 0,s=!e.name||/^(Raum|Room) \d+$/.test(e.name)||Object.values(this.hass?.areas??{}).some(o=>o.name===e.name);this.updateRoom({area_id:t||null,...i&&s?{name:i.name}:{}})}setRect(t,e){let i=this.room;if(!i||!Number.isFinite(e))return;let s=et(i.points),{x0:o,z0:r,x1:l,z1:a}=s;t==="x"&&([o,l]=[e,e+(l-o)]),t==="z"&&([r,a]=[e,e+(a-r)]),t==="w"&&e>.05&&(l=o+e),t==="d"&&e>.05&&(a=r+e),this.updateRoom({points:[[y(o),y(r)],[y(l),y(r)],[y(l),y(a)],[y(o),y(a)]]})}setPoint(t,e,i){let s=this.room;if(!s||!Number.isFinite(i))return;let o=s.points.map(r=>[...r]);o[t][e]=y(i),this.updateRoom({points:o})}async loadImage(t){this.loadingImages.add(t);try{let e=await Zt(this.hass,t),i=new Image;i.src=e,await i.decode(),this._images={...this._images,[t]:{url:e,aspect:i.naturalHeight/i.naturalWidth}}}catch{}}async uploadBackground(t){let e=t.target,i=e.files?.[0];if(e.value="",!i)return;let s=await createImageBitmap(i),o=Math.min(1,2048/Math.max(s.width,s.height)),r=document.createElement("canvas");r.width=Math.round(s.width*o),r.height=Math.round(s.height*o),r.getContext("2d").drawImage(s,0,0,r.width,r.height);let l=r.toDataURL("image/jpeg",.85),a=Q("img");await Xt(this.hass,a,l),this._images={...this._images,[a]:{url:l,aspect:r.height/r.width}};let d=this.floor?.rooms.length?et(this.floor.rooms.flatMap(c=>c.points)):null;this.updateFloor({background:{image_id:a,x:d?d.x0:0,z:d?d.z0:0,width:d?Math.max(4,y(d.x1-d.x0)):12,opacity:.5}})}render(){let t=this.floor,e=t?ae(t.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior}):null;return g`
      <div class="fp3d-editor ${this.narrow?"fp3d-narrow":""}">
        <div class="fp3d-main">
          <div class="fp3d-toolbar">
            <div class="fp3d-seg" role="group" aria-label=${this.t("tool_select")}>
              ${["select","rect","polygon"].map(i=>g`<button
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
            ${e?.warnings.length?g`<span class="fp3d-warn">${this.t("overlap_warning")}</span>`:u}
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
              ${this.renderBackground(t)} ${this.renderGrid()} ${this.renderGhost()} ${e?this.renderWalls(e.walls):u}
              ${t?this.renderRooms(t):u} ${this.renderDraft()} ${this.renderGuides()}
            </svg>
            <p class="fp3d-hint">${t?this.t(`hint_${this._tool}`):this.t("hint_empty")}</p>
          </div>
        </div>
        <aside class="fp3d-side">${this.renderSide(t)}</aside>
      </div>
    `}renderBackground(t){let e=t?.background,i=e?this._images[e.image_id]:void 0;if(!e||!i)return u;let[s,o]=this.toScreen([e.x,e.z]),r=e.width*this._view.scale;return $`<image href=${i.url} x=${s} y=${o} width=${r} height=${r*i.aspect} opacity=${e.opacity} preserveAspectRatio="none" pointer-events="none" />`}renderGrid(){let{scale:t}=this._view,{w:e,h:i}=this._size,s=t>=90?.1:t>=30?.5:1,o=t>=20?1:5,[r,l]=this.toWorld(0,0),[a,d]=this.toWorld(e,i),c=[],f=(h,v)=>{for(let m=Math.ceil(r/h)*h;m<=a;m+=h){let b=this.toScreen([m,0])[0];c.push($`<line class=${v} x1=${b} y1="0" x2=${b} y2=${i} />`)}for(let m=Math.ceil(l/h)*h;m<=d;m+=h){let b=this.toScreen([0,m])[1];c.push($`<line class=${v} x1="0" y1=${b} x2=${e} y2=${b} />`)}};s<o&&f(s,"fp3d-grid-minor"),f(o,"fp3d-grid-major");let[_,p]=this.toScreen([0,0]);return c.push($`<circle class="fp3d-origin" cx=${_} cy=${p} r="3" />`),$`<g pointer-events="none">${c}</g>`}renderGhost(){let t=this._doc?.floors.findIndex(i=>i.id===this._floorId)??-1,e=t>0?this._doc.floors[t-1]:void 0;return e?$`<g pointer-events="none">${e.rooms.map(i=>$`<polygon class="fp3d-ghost" points=${i.points.map(s=>this.toScreen(s).join(",")).join(" ")} />`)}</g>`:u}renderWalls(t){return $`<g pointer-events="none">${t.map(e=>$`<polygon class=${e.exterior?"fp3d-wall fp3d-wall-ext":"fp3d-wall"} points=${e.footprint.map(i=>this.toScreen(i).join(",")).join(" ")} />`)}</g>`}renderRooms(t){let e=this.room;return $`
      <g>${t.rooms.map(i=>{let s=i.points.map(o=>this.toScreen(o).join(",")).join(" ");return $`<polygon data-room=${i.id} class=${i.id===this._roomId?"fp3d-room fp3d-room-sel":"fp3d-room"} points=${s} />`})}</g>
      <g pointer-events="none">${t.rooms.map(i=>{let[s,o]=this.toScreen(kt(i.points));return $`<text class="fp3d-room-name" x=${s} y=${o-2}>${i.name}</text>
          <text class="fp3d-room-area" x=${s} y=${o+14}>${this.t("area_m2",{a:j(this.hass,F(i.points),1)})}</text>`})}</g>
      ${e&&this.isAdmin?this.renderHandles(e):u}
    `}renderHandles(t){let e=t.points,i=e.length,s=e.map((r,l)=>{let a=e[(l+1)%i],[d,c]=this.toScreen(r),[f,_]=this.toScreen(a),p=Math.hypot(a[0]-r[0],a[1]-r[1]),h=(d+f)/2,v=(c+_)/2,[m,b]=this.toScreen(kt(e)),x=-(_-c),w=f-d,C=Math.hypot(x,w)||1;x/=C,w/=C,x*(h-m)+w*(v-b)<0&&(x=-x,w=-w);let k=Math.hypot(f-d,_-c);return $`
        ${k>50?$`<text class="fp3d-dim" x=${h+x*16} y=${v+w*16+4}>${j(this.hass,p,2)} m</text>`:u}
        ${k>36?$`<g data-mid=${l} class="fp3d-mid"><circle cx=${h} cy=${v} r="14" class="fp3d-hit" /><circle cx=${h} cy=${v} r="6" /><path d="M${h-3} ${v}h6M${h} ${v-3}v6" /></g>`:u}
      `}),o=e.map((r,l)=>{let[a,d]=this.toScreen(r);return $`<g data-vertex=${l} class=${l===this._vertex?"fp3d-vertex fp3d-vertex-sel":"fp3d-vertex"}><circle cx=${a} cy=${d} r="16" class="fp3d-hit" /><circle cx=${a} cy=${d} r="6" /></g>`});return $`<g>${s}${o}</g>`}renderDraft(){let t=this.drag;if(t?.kind==="rect"){let[i,s]=this.toScreen(t.start),[o,r]=this.toScreen(t.end),l=Math.abs(t.end[0]-t.start[0]),a=Math.abs(t.end[1]-t.start[1]);return $`<g pointer-events="none">
        <rect class="fp3d-draft" x=${Math.min(i,o)} y=${Math.min(s,r)} width=${Math.abs(o-i)} height=${Math.abs(r-s)} />
        <text class="fp3d-dim" x=${(i+o)/2} y=${Math.min(s,r)-8}>${j(this.hass,l,2)} × ${j(this.hass,a,2)} m</text>
      </g>`}if(this._tool!=="polygon")return u;let e=[...this._draft,...this._cursor?[this._cursor]:[]].map(i=>this.toScreen(i));return $`<g pointer-events="none">
      ${e.length>1?$`<polyline class="fp3d-draft" points=${e.map(i=>i.join(",")).join(" ")} />`:u}
      ${this._draft.map((i,s)=>{let[o,r]=this.toScreen(i);return $`<circle class=${s===0&&this._draft.length>=3?"fp3d-draft-pt fp3d-draft-first":"fp3d-draft-pt"} cx=${o} cy=${r} r=${s===0&&this._draft.length>=3?9:5} />`})}
      ${this._cursor?$`<circle class="fp3d-cursor" cx=${this.toScreen(this._cursor)[0]} cy=${this.toScreen(this._cursor)[1]} r="4" />`:u}
    </g>`}renderGuides(){let t=this._guides,{w:e,h:i}=this._size;return $`<g pointer-events="none">
      ${t.x!==void 0?$`<line class="fp3d-guide" x1=${this.toScreen([t.x,0])[0]} y1="0" x2=${this.toScreen([t.x,0])[0]} y2=${i} />`:u}
      ${t.z!==void 0?$`<line class="fp3d-guide" x1="0" y1=${this.toScreen([0,t.z])[1]} x2=${e} y2=${this.toScreen([0,t.z])[1]} />`:u}
      ${t.point?$`<circle class="fp3d-snap" cx=${this.toScreen(t.point)[0]} cy=${this.toScreen(t.point)[1]} r="9" />`:u}
    </g>`}num(t,e,i,s=.01,o){return g`<label class="fp3d-field"
      >${t}
      <input
        type="number"
        inputmode="decimal"
        step=${s}
        min=${o??u}
        .value=${String(y(e))}
        ?disabled=${!this.isAdmin}
        @change=${r=>{let l=parseFloat(r.target.value.replace(",","."));Number.isFinite(l)&&i(l)}}
    /></label>`}renderSide(t){let e=this._doc?.floors??[],i=this.room,s=this.isAdmin,o=Object.values(this.hass?.areas??{}).sort((r,l)=>r.name.localeCompare(l.name));return g`
      ${s?u:g`<p class="fp3d-note">${this.t("read_only")}</p>`}
      <section>
        <h3>${this.t("floors")}</h3>
        <div class="fp3d-floor-list">
          ${[...e].reverse().map(r=>g`<button
              class="fp3d-chip"
              aria-pressed=${r.id===this._floorId}
              @click=${()=>{this._floorId=r.id,this._roomId=null,this._vertex=null,this._draft=[],this.fit()}}
            >
              ${r.name}
            </button>`)}
          ${s?g`<button class="fp3d-btn" @click=${()=>this.addFloor()}>+ ${this.t("add_floor")}</button>`:u}
        </div>
        ${t?g`<div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${this.t("floor_name")}
                <input .value=${t.name} ?disabled=${!s} @change=${r=>this.updateFloor({name:r.target.value})}
              /></label>
              ${this.num(this.t("elevation"),t.elevation,r=>this.updateFloor({elevation:r}))}
              ${this.num(this.t("height"),t.height,r=>this.updateFloor({height:Math.max(1,r)}),.05,1)}
              ${s?g`<div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn" @click=${()=>this.moveFloor(1)}>${this.t("move_up")}</button>
                    <button class="fp3d-btn" @click=${()=>this.moveFloor(-1)}>${this.t("move_down")}</button>
                    <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFloor()}>${this.t("delete_floor")}</button>
                  </div>`:u}
            </div>`:u}
      </section>
      ${i?this.renderRoomForm(i,o):t?this.renderRoomList(t):u}
      ${t&&s?this.renderBackgroundForm(t):u} ${s?this.renderSettings():u}
    `}renderRoomList(t){return t.rooms.length?g`<section>
      <h3>${this.t("rooms")}</h3>
      <div class="fp3d-room-list">
        ${t.rooms.map(e=>g`<button class="fp3d-row" @click=${()=>this._roomId=e.id}>
            <span>${e.name}</span><span class="fp3d-muted">${this.t("area_m2",{a:j(this.hass,F(e.points),1)})}</span>
          </button>`)}
      </div>
    </section>`:u}renderRoomForm(t,e){let i=this.isAdmin,s=ie(t.points),o=et(t.points);return g`<section>
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
            ${e.map(r=>g`<option value=${r.area_id} ?selected=${r.area_id===t.area_id}>${r.name}</option>`)}
          </select></label
        >
        <label class="fp3d-field fp3d-wide"
          >${this.t("material")}
          <select ?disabled=${!i} @change=${r=>this.updateRoom({floor_material:r.target.value})}>
            ${te.map(r=>g`<option value=${r} ?selected=${r===t.floor_material}>${this.t(`mat_${r}`)}</option>`)}
          </select></label
        >
        ${s?g`${this.num(this.t("x"),o.x0,r=>this.setRect("x",r))} ${this.num(this.t("z"),o.z0,r=>this.setRect("z",r))}
            ${this.num(this.t("width"),o.x1-o.x0,r=>this.setRect("w",r),.01,.05)}
            ${this.num(this.t("depth"),o.z1-o.z0,r=>this.setRect("d",r),.01,.05)}`:u}
      </div>
      <details class="fp3d-points" ?open=${!s}>
        <summary>${this.t("points")} (${t.points.length})</summary>
        ${t.points.map((r,l)=>g`<div class="fp3d-point ${l===this._vertex?"fp3d-point-sel":""}">
            <span class="fp3d-muted">${l+1}</span>
            ${this.num(this.t("x"),r[0],a=>this.setPoint(l,0,a))} ${this.num(this.t("z"),r[1],a=>this.setPoint(l,1,a))}
            ${i?g`<button class="fp3d-btn" title=${this.t("delete_point")} ?disabled=${t.points.length<=3} @click=${()=>this.deleteVertex(l)}>
                  ×
                </button>`:u}
          </div>`)}
      </details>
      ${i?g`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.duplicateRoom()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoom()}>${this.t("delete")}</button>
          </div>`:u}
    </section>`}renderBackgroundForm(t){let e=t.background;return g`<details class="fp3d-section">
      <summary>${this.t("background")}</summary>
      <div class="fp3d-form">
        <label class="fp3d-btn fp3d-wide fp3d-upload"
          >${this.t("background_upload")}<input type="file" accept="image/png,image/jpeg,image/webp" @change=${this.uploadBackground}
        /></label>
        ${e?g`${this.num(this.t("x"),e.x,i=>this.updateFloor({background:{...e,x:i}}))}
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
              <button class="fp3d-btn fp3d-danger fp3d-wide" @click=${()=>this.updateFloor({background:null})}>${this.t("background_remove")}</button>`:u}
      </div>
    </details>`}renderSettings(){let t=this._doc.settings,e=i=>{let s=structuredClone(this._doc);Object.assign(s.settings,i),this.setDoc(s)};return g`<details class="fp3d-section">
      <summary>${this.t("settings")}</summary>
      <div class="fp3d-form">
        ${this.num(this.t("wall_exterior"),t.wall_exterior,i=>e({wall_exterior:Math.min(1,Math.max(.02,i))}),.01,.02)}
        ${this.num(this.t("wall_interior"),t.wall_interior,i=>e({wall_interior:Math.min(1,Math.max(.02,i))}),.01,.02)}
        ${this.num(this.t("grid"),t.grid,i=>e({grid:Math.min(1,Math.max(.01,i))}),.01,.01)}
      </div>
    </details>`}static styles=[z,ht,E`
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
    `]};customElements.get("fp3d-editor")||customElements.define("fp3d-editor",At);var ue=new URL(import.meta.url),ce=ue.searchParams.get("v"),Be=new URL(`./floorplan-3d-3d.js${ce?`?v=${ce}`:""}`,ue).href,pe;function fe(){return pe??=import(Be),pe}var Et=class extends A{static properties={hass:{attribute:!1},building:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},wallMode:{attribute:!1},quality:{attribute:!1},showStats:{type:Boolean},_stats:{state:!0},_error:{state:!0}};viewer=null;starting=!1;constructor(){super(),this.building=null,this.floorId=null,this.roomId=null,this.wallMode="auto",this.quality="auto",this.showStats=!1,this._stats=null,this._error=null}connectedCallback(){super.connectedCallback(),this.hasUpdated&&!this.viewer&&this.start()}disconnectedCallback(){super.disconnectedCallback(),this.viewer?.dispose(),this.viewer=null}firstUpdated(){this.start()}async start(){if(!(this.starting||this.viewer)){this.starting=!0;try{let t=await fe();if(!this.isConnected)return;let e=this.renderRoot.querySelector(".fp3d-stage");this.viewer=t.createViewer(e,{quality:this.quality,onRoomTap:(i,s)=>this.fire("room-tap",{floorId:i,roomId:s}),onBack:()=>this.fire("back",{}),onStats:this.showStats?i=>this._stats=i:void 0}),this.viewer.setWallMode(this.wallMode),this.building&&this.viewer.setBuilding(this.building),this.viewer.setFloor(this.floorId,!1),this.roomId&&this.viewer.selectRoom(this.roomId)}catch(t){this._error=String(t)}finally{this.starting=!1}}}updated(t){let e=this.viewer;e&&(t.has("building")&&this.building&&e.setBuilding(this.building),t.has("floorId")&&e.setFloor(this.floorId),t.has("roomId")&&(this.roomId||t.get("roomId"))&&e.selectRoom(this.roomId),t.has("wallMode")&&e.setWallMode(this.wallMode),t.has("quality")&&t.get("quality")!==void 0&&e.setQuality(this.quality))}resetView(){this.viewer?.resetView()}fire(t,e){this.dispatchEvent(new CustomEvent(t,{detail:e,bubbles:!0,composed:!0}))}render(){return g`<div class="fp3d-stage">
      ${this._error?g`<p class="fp3d-error">${this._error}</p>`:u}
      ${this.showStats&&this._stats?g`<span class="fp3d-stats"
            >${M(this.hass,"stats",{fps:this._stats.fps,calls:this._stats.calls,tris:this._stats.triangles.toLocaleString()})}</span
          >`:u}
    </div>`}static styles=[z,E`
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
    `]};customElements.get("fp3d-view3d")||customElements.define("fp3d-view3d",Et);var Mt=class extends A{static properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_mode:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_wallMode:{state:!0}};data=new W(this);showStats=new URLSearchParams(location.search).has("fp3d_stats");constructor(){super(),this.narrow=!1,this._mode="view",this._floorId=null,this._roomId=null,this._wallMode="auto"}t(t,e){return M(this.hass,t,e)}willUpdate(t){t.has("hass")&&this.hass&&this.data.setHass(this.hass);let e=this.data.building;e&&this._floorId&&!e.floors.some(i=>i.id===this._floorId)&&(this._floorId=null,this._roomId=null)}get isAdmin(){return this.hass?.user?.is_admin??!1}setMode(t){t!==this._mode&&(t==="view"&&this.data.flush(),this._mode=t)}onRoomTap(t){let{floorId:e,roomId:i}=t.detail;i&&(this._floorId===null&&(this.data.building?.floors.length??0)>1&&(this._floorId=e),this._roomId=i===this._roomId?null:i)}back(){this._roomId?this._roomId=null:this._floorId&&(this.data.building?.floors.length??0)>1?this._floorId=null:this.renderRoot.querySelector("fp3d-view3d")?.resetView()}onKey=t=>{t.key==="Escape"&&this._mode==="view"&&this.back()};connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey)}render(){let t=this.data.building,e=this.data.saveState;return g`
      <div class="fp3d-app">
        <header class="fp3d-header">
          <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
          <h1>Floorplan 3D</h1>
          ${this.isAdmin?g`<div class="fp3d-seg" role="tablist">
                <button role="tab" aria-pressed=${this._mode==="view"} @click=${()=>this.setMode("view")}>${this.t("view")}</button>
                <button role="tab" aria-pressed=${this._mode==="editor"} @click=${()=>this.setMode("editor")}>${this.t("editor")}</button>
              </div>`:u}
          <span class="fp3d-grow"></span>
          ${this._mode==="editor"&&e!=="idle"?g`<span class="fp3d-save fp3d-save-${e}">${this.t(e==="saving"?"saving":e==="saved"?"saved":"save_error")}</span>`:u}
        </header>
        ${this.data.error&&!t?g`<p class="fp3d-message">${this.t("load_error")}: ${this.data.error}</p>`:u}
        ${!t&&!this.data.error?g`<p class="fp3d-message">${this.t("loading")}</p>`:u}
        ${t?this._mode==="editor"&&this.isAdmin?this.renderEditor(t):this.renderView(t):u}
      </div>
    `}renderEditor(t){return g`<fp3d-editor
      class="fp3d-body"
      .hass=${this.hass}
      .building=${t}
      .narrow=${this.narrow}
      @building-changed=${e=>this.data.edit(e.detail.building)}
    ></fp3d-editor>`}renderView(t){if(!t.floors.length||!t.floors.some(s=>s.rooms.length))return g`<div class="fp3d-empty">
        <p>${this.t(this.isAdmin?"no_building_admin":"no_building")}</p>
        ${this.isAdmin?g`<button class="fp3d-btn fp3d-primary" @click=${()=>this.setMode("editor")}>${this.t("open_editor")}</button>`:u}
      </div>`;let e=t.floors.find(s=>s.id===this._floorId),i=e?[e]:t.floors;return g`
      <nav class="fp3d-nav">
        ${t.floors.length>1?g`<button class="fp3d-chip" aria-pressed=${this._floorId===null} @click=${()=>{this._floorId=null,this._roomId=null}}>
                ${this.t("all_floors")}
              </button>
              ${[...t.floors].reverse().map(s=>g`<button
                  class="fp3d-chip"
                  aria-pressed=${s.id===this._floorId}
                  @click=${()=>{this._floorId=s.id,this._roomId=null}}
                >
                  ${s.name}
                </button>`)}
              <span class="fp3d-sep"></span>`:u}
        ${i.flatMap(s=>s.rooms.map(o=>g`<button
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
          ?showStats=${this.showStats}
          @room-tap=${this.onRoomTap}
          @back=${()=>this.back()}
        ></fp3d-view3d>
        <div class="fp3d-overlay">
          <div class="fp3d-seg">
            <button aria-pressed=${this._wallMode==="auto"} @click=${()=>this._wallMode="auto"}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wallMode==="cut"} @click=${()=>this._wallMode="cut"}>${this.t("walls_cut")}</button>
          </div>
          ${this._roomId||this._floorId&&t.floors.length>1?g`<button class="fp3d-chip" @click=${()=>this.back()}>${this.t("back")}</button>`:u}
        </div>
      </div>
    `}static styles=[z,ht,E`
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
        display: flex;
        gap: 8px;
        align-items: center;
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
    `]};customElements.get("floorplan-3d-panel")||customElements.define("floorplan-3d-panel",Mt);var It=class extends A{static properties={hass:{attribute:!1},_config:{state:!0},_roomId:{state:!0}};data=new W(this);constructor(){super(),this._roomId=null}static getStubConfig(){return{type:"custom:floorplan-3d-card"}}setConfig(t){if(t.height!==void 0&&!(t.height>100))throw new Error("height must be a number of pixels above 100");this._config=t}getCardSize(){return Math.ceil((this._config?.height??420)/50)}getGridOptions(){return{columns:"full",rows:Math.ceil((this._config?.height??420)/56),min_rows:4}}willUpdate(t){t.has("hass")&&this.hass&&this.data.setHass(this.hass)}render(){let t=this.data.building,e=this._config?.height??420,i=this._config?.floor??(t&&t.floors.length===1?t.floors[0].id:null);return g`<ha-card>
      <div class="fp3d-card-body" style="height:${e}px">
        ${t&&t.floors.some(s=>s.rooms.length)?g`<fp3d-view3d
              .hass=${this.hass}
              .building=${t}
              .floorId=${i}
              .roomId=${this._roomId}
              .wallMode=${this._config?.walls??"auto"}
              @room-tap=${s=>{s.detail.roomId&&(this._roomId=s.detail.roomId===this._roomId?null:s.detail.roomId)}}
              @back=${()=>this._roomId=null}
            ></fp3d-view3d>`:g`<p class="fp3d-card-msg">${this.data.error??(t?M(this.hass,"no_building"):M(this.hass,"loading"))}</p>`}
        ${this._roomId?g`<button class="fp3d-card-back" @click=${()=>this._roomId=null}>${M(this.hass,"back")}</button>`:u}
      </div>
    </ha-card>`}static styles=[z,E`
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
    `]};if(!customElements.get("floorplan-3d-card")){customElements.define("floorplan-3d-card",It);let n=window;n.customCards=n.customCards??[],n.customCards.push({type:"floorplan-3d-card",name:M(void 0,"card_name"),description:M(void 0,"card_description"),preview:!1})}
