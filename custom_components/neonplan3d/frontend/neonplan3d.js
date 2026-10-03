Array.prototype.at||Object.defineProperty(Array.prototype,"at",{configurable:!0,writable:!0,value:function(e){let t=Math.trunc(e)||0;return this[t<0?this.length+t:t]}});typeof globalThis.structuredClone!="function"&&(globalThis.structuredClone=i=>i===void 0?i:JSON.parse(JSON.stringify(i)));var ln=new URL(import.meta.url),on=ln.searchParams.get("v"),sn=i=>new URL(`./fonts/${i}${on?`?v=${on}`:""}`,ln).href,an="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD";function cn(){if(typeof document>"u"||document.getElementById("fp3d-fonts"))return;let i=document.createElement("style");i.id="fp3d-fonts",i.textContent=`
@font-face{font-family:"Figtree";font-style:normal;font-display:swap;font-weight:300 900;src:url(${sn("figtree.woff2")}) format("woff2");unicode-range:${an}}
@font-face{font-family:"Bricolage Grotesque";font-style:normal;font-display:swap;font-weight:200 800;src:url(${sn("bricolage-grotesque.woff2")}) format("woff2");unicode-range:${an}}`,document.head.append(i)}var qe=globalThis,Ue=qe.ShadowRoot&&(qe.ShadyCSS===void 0||qe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pt=Symbol(),un=new WeakMap,$e=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==pt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Ue&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=un.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&un.set(t,e))}return e}toString(){return this.cssText}},dn=i=>new $e(typeof i=="string"?i:i+"",void 0,pt),V=(i,...e)=>{let t=i.length===1?i[0]:e.reduce((n,r,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[o+1],i[0]);return new $e(t,i,pt)},pn=(i,e)=>{if(Ue)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),r=qe.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,i.appendChild(n)}},ht=Ue?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return dn(t)})(i):i;var{is:bi,defineProperty:vi,getOwnPropertyDescriptor:wi,getOwnPropertyNames:yi,getOwnPropertySymbols:ki,getPrototypeOf:xi}=Object,je=globalThis,hn=je.trustedTypes,Si=hn?hn.emptyScript:"",$i=je.reactiveElementPolyfillSupport,Ae=(i,e)=>i,ft={toAttribute(i,e){switch(e){case Boolean:i=i?Si:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},mn=(i,e)=>!bi(i,e),fn={attribute:!0,type:String,converter:ft,reflect:!1,useDefault:!1,hasChanged:mn};Symbol.metadata??=Symbol("metadata"),je.litPropertyMetadata??=new WeakMap;var Z=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=fn){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&vi(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:o}=wi(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:r,set(s){let a=r?.call(this);o?.call(this,s),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??fn}static _$Ei(){if(this.hasOwnProperty(Ae("elementProperties")))return;let e=xi(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ae("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ae("properties"))){let t=this.properties,n=[...yi(t),...ki(t)];for(let r of n)this.createProperty(r,t[r])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,r]of t)this.elementProperties.set(n,r)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let r=this._$Eu(t,n);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let r of n)t.unshift(ht(r))}else e!==void 0&&t.push(ht(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return pn(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&n.reflect===!0){let o=(n.converter?.toAttribute!==void 0?n.converter:ft).toAttribute(t,n.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let o=n.getPropertyOptions(r),s=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:ft;this._$Em=r;let a=s.fromAttribute(t,o.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,o){if(e!==void 0){let s=this.constructor;if(r===!1&&(o=this[e]),n??=s.getPropertyOptions(e),!((n.hasChanged??mn)(o,t)||n.useDefault&&n.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:o},s){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),o!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[r,o]of n){let{wrapped:s}=o,a=this[r];s!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,o,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};Z.elementStyles=[],Z.shadowRootOptions={mode:"open"},Z[Ae("elementProperties")]=new Map,Z[Ae("finalized")]=new Map,$i?.({ReactiveElement:Z}),(je.reactiveElementVersions??=[]).push("2.1.2");var yt=globalThis,_n=i=>i,Ke=yt.trustedTypes,gn=Ke?Ke.createPolicy("lit-html",{createHTML:i=>i}):void 0,xn="$lit$",Y=`lit$${Math.random().toFixed(9).slice(2)}$`,Sn="?"+Y,Ai=`<${Sn}>`,ae=document,Ee=()=>ae.createComment(""),Te=i=>i===null||typeof i!="object"&&typeof i!="function",kt=Array.isArray,Mi=i=>kt(i)||typeof i?.[Symbol.iterator]=="function",mt=`[ 	
\f\r]`,Me=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,bn=/-->/g,vn=/>/g,oe=RegExp(`>|${mt}(?:([^\\s"'>=/]+)(${mt}*=${mt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),wn=/'/g,yn=/"/g,$n=/^(?:script|style|textarea|title)$/i,xt=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),f=xt(1),os=xt(2),ss=xt(3),le=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),kn=new WeakMap,se=ae.createTreeWalker(ae,129);function An(i,e){if(!kt(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return gn!==void 0?gn.createHTML(e):e}var Ei=(i,e)=>{let t=i.length-1,n=[],r,o=e===2?"<svg>":e===3?"<math>":"",s=Me;for(let a=0;a<t;a++){let l=i[a],c,u,d=-1,p=0;for(;p<l.length&&(s.lastIndex=p,u=s.exec(l),u!==null);)p=s.lastIndex,s===Me?u[1]==="!--"?s=bn:u[1]!==void 0?s=vn:u[2]!==void 0?($n.test(u[2])&&(r=RegExp("</"+u[2],"g")),s=oe):u[3]!==void 0&&(s=oe):s===oe?u[0]===">"?(s=r??Me,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?oe:u[3]==='"'?yn:wn):s===yn||s===wn?s=oe:s===bn||s===vn?s=Me:(s=oe,r=void 0);let m=s===oe&&i[a+1].startsWith("/>")?" ":"";o+=s===Me?l+Ai:d>=0?(n.push(c),l.slice(0,d)+xn+l.slice(d)+Y+m):l+Y+(d===-2?a:m)}return[An(i,o+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},Re=class i{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let o=0,s=0,a=e.length-1,l=this.parts,[c,u]=Ei(e,t);if(this.el=i.createElement(c,n),se.currentNode=this.el.content,t===2||t===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=se.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(let d of r.getAttributeNames())if(d.endsWith(xn)){let p=u[s++],m=r.getAttribute(d).split(Y),_=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:_[2],strings:m,ctor:_[1]==="."?gt:_[1]==="?"?bt:_[1]==="@"?vt:fe}),r.removeAttribute(d)}else d.startsWith(Y)&&(l.push({type:6,index:o}),r.removeAttribute(d));if($n.test(r.tagName)){let d=r.textContent.split(Y),p=d.length-1;if(p>0){r.textContent=Ke?Ke.emptyScript:"";for(let m=0;m<p;m++)r.append(d[m],Ee()),se.nextNode(),l.push({type:2,index:++o});r.append(d[p],Ee())}}}else if(r.nodeType===8)if(r.data===Sn)l.push({type:2,index:o});else{let d=-1;for(;(d=r.data.indexOf(Y,d+1))!==-1;)l.push({type:7,index:o}),d+=Y.length-1}o++}}static createElement(e,t){let n=ae.createElement("template");return n.innerHTML=e,n}};function he(i,e,t=i,n){if(e===le)return e;let r=n!==void 0?t._$Co?.[n]:t._$Cl,o=Te(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),o===void 0?r=void 0:(r=new o(i),r._$AT(i,t,n)),n!==void 0?(t._$Co??=[])[n]=r:t._$Cl=r),r!==void 0&&(e=he(i,r._$AS(i,e.values),r,n)),e}var _t=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??ae).importNode(t,!0);se.currentNode=r;let o=se.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new ze(o,o.nextSibling,this,e):l.type===1?c=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(c=new wt(o,this,e)),this._$AV.push(c),l=n[++a]}s!==l?.index&&(o=se.nextNode(),s++)}return se.currentNode=ae,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},ze=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=he(this,e,t),Te(e)?e===v||e==null||e===""?(this._$AH!==v&&this._$AR(),this._$AH=v):e!==this._$AH&&e!==le&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Mi(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==v&&Te(this._$AH)?this._$AA.nextSibling.data=e:this.T(ae.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Re.createElement(An(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let o=new _t(r,this),s=o.u(this.options);o.p(t),this.T(s),this._$AH=o}}_$AC(e){let t=kn.get(e.strings);return t===void 0&&kn.set(e.strings,t=new Re(e)),t}k(e){kt(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,r=0;for(let o of e)r===t.length?t.push(n=new i(this.O(Ee()),this.O(Ee()),this,this.options)):n=t[r],n._$AI(o),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=_n(e).nextSibling;_n(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},fe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,o){this.type=1,this._$AH=v,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=v}_$AI(e,t=this,n,r){let o=this.strings,s=!1;if(o===void 0)e=he(this,e,t,0),s=!Te(e)||e!==this._$AH&&e!==le,s&&(this._$AH=e);else{let a=e,l,c;for(e=o[0],l=0;l<o.length-1;l++)c=he(this,a[n+l],t,l),c===le&&(c=this._$AH[l]),s||=!Te(c)||c!==this._$AH[l],c===v?e=v:e!==v&&(e+=(c??"")+o[l+1]),this._$AH[l]=c}s&&!r&&this.j(e)}j(e){e===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},gt=class extends fe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===v?void 0:e}},bt=class extends fe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==v)}},vt=class extends fe{constructor(e,t,n,r,o){super(e,t,n,r,o),this.type=5}_$AI(e,t=this){if((e=he(this,e,t,0)??v)===le)return;let n=this._$AH,r=e===v&&n!==v||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==v&&(n===v||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},wt=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){he(this,e)}};var Ti=yt.litHtmlPolyfillSupport;Ti?.(Re,ze),(yt.litHtmlVersions??=[]).push("3.3.3");var Mn=(i,e,t)=>{let n=t?.renderBefore??e,r=n._$litPart$;if(r===void 0){let o=t?.renderBefore??null;n._$litPart$=r=new ze(e.insertBefore(Ee(),o),o,void 0,t??{})}return r._$AI(i),r};var St=globalThis,W=class extends Z{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Mn(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return le}};W._$litElement$=!0,W.finalized=!0,St.litElementHydrateSupport?.({LitElement:W});var Ri=St.litElementPolyfillSupport;Ri?.({LitElement:W});(St.litElementVersions??=[]).push("4.2.2");async function En(i){return i.callWS({type:"neonplan3d/building/get"})}async function Tn(i,e){return(await i.callWS({type:"neonplan3d/building/save",building:e})).revision}function Rn(i,e){return i.connection.subscribeMessage(t=>e(t.revision),{type:"neonplan3d/building/subscribe"})}async function zn(i,e){return(await i.callWS({type:"neonplan3d/image/get",image_id:e})).data}async function Pn(i){return(await i.callWS({type:"neonplan3d/packs/list"})).packs}var zi="neonplan3d.seenOffers";function In(i){let e=[];try{e=JSON.parse(localStorage.getItem(zi)??"[]")}catch{}return i.filter(t=>!e.includes(t.id))}var Pi="neonplan3d.seenUpdates";function Dn(i){let e=[];try{e=JSON.parse(localStorage.getItem(Pi)??"[]")}catch{}return i.filter(t=>!e.includes(`${t.id}@${t.release}`))}function Fn(i){return i.callWS({type:"neonplan3d/upstream/get"})}function Cn(i){return i.callWS({type:"neonplan3d/license/get"})}var Hn=[],$t=new Map,Ln=0;function Wn(i){Hn=i,$t=new Map(i.flatMap(e=>e.items.map(t=>[Ii(e.id,t.id),t]))),Ln++}function Pe(){return Hn}function Ge(){return Ln}function Ii(i,e){return`pack:${i}:${e}`}function At(i){return i.startsWith("pack:")}var Di={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function On(i){return U(i)?.parts.find(e=>e.screen)}function U(i){if(!At(i))return;let e=$t.get(i);if(e)return e;let[,t,...n]=i.split(":"),r=Di[t];return r?$t.get(`pack:${r}:${n.join(":")}`):void 0}function Nn(i,e){let t=e.split("-")[0];return i.name[t]??i.name.en??Object.values(i.name)[0]??i.id}function me(i,e){let t=U(e.type);if(e.mount_y!=null)return e.mount_y;if(e.type==="lamp_wall")return Bn;if(e.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,e.h));switch(t?.mount){case"surface":return Ze(i,e.x,e.z);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,i.height-e.h);default:return t?0:Vn(e)}}var Un=["rain","snow","clouds","lightning","sky"];var Ci={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,hedge:1.2,fence:1};function Hi(i){return i.elevation>.3?0:-.2}function jn(i,e,t){let n=(i.outdoor??[]).find(r=>r.type!=="hedge"&&r.type!=="fence"&&r.type!=="pool"&&I([e,t],r.points));return Hi(i)+(n?Ci[n.type]:0)}var Li={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,tariff:null};var Kn={type:"none",pitch:35,overhang:.4},Wi={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Kn}};var Gn=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Bn=1.75;function Zn(i){return["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","stairs","stairwell","parking"].includes(i.type)?!1:U(i.type)?.mount!=="ceiling"}function Mt(i){return Gn.has(i)||!!U(i)?.light}var Oi=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Vn(i){switch(i.type){case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"inverter":return 1.1;case"wallbox":return 1;default:return 0}}function Ze(i,e,t){let n=0;for(let r of i.furniture)!(Oi.has(r.type)||U(r.type)?.surface)||!I([e,t],Xe(r))||(n=Math.max(n,r.h));return n}var Fi=new Set([...Gn,"radiator","robot_vacuum","inverter","home_battery","wallbox","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),qn={sofa:[2.2,.9,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};function Et(i){i.energy={...Li,...i.energy??{}},i.presence=i.presence??[],i.settings={...Wi,...i.settings,roof:{...Kn,...i.settings?.roof??{}}};for(let e of i.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(n=>({...n,panel:n.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(n=>({...n,mount:n.mount??null,rotation:n.rotation??0})),e.furniture=e.furniture.map(n=>({...n,entity:n.entity??null,power:n.power??null}));let t=e.placements.filter(n=>n.entity_id.startsWith("light."));if(t.length){let n={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let r of t){let o=n[r.mount??"ceiling"],[s,a,l]=qn[o];e.furniture.push({id:`lamp_${r.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:o,x:r.x,z:r.z,rotation:0,w:s,d:a,h:l,variant:null,entity:r.entity_id,power:null})}e.placements=e.placements.filter(r=>!r.entity_id.startsWith("light."))}e.openings=e.openings.map(n=>({...n,hinge:n.hinge??"left",leaves:n.leaves??1,swing:n.swing??"in",style:n.style??null,cover:n.cover??null,contact:n.contact??null,contact2:n.contact2??null,tilt:n.tilt??null}))}return i}function J(i){let e=0;for(let t=0;t<i.length;t++){let[n,r]=i[t],[o,s]=i[(t+1)%i.length];e+=n*s-o*r}return e/2}function ce(i){let e=J(i);if(Math.abs(e)<1e-9){let r=i.length||1;return[i.reduce((o,s)=>o+s[0],0)/r,i.reduce((o,s)=>o+s[1],0)/r]}let t=0,n=0;for(let r=0;r<i.length;r++){let[o,s]=i[r],[a,l]=i[(r+1)%i.length],c=o*l-a*s;t+=(o+a)*c,n+=(s+l)*c}return[t/(6*e),n/(6*e)]}function Xe(i){let e=i.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),r=i.w/2,o=i.d/2;return[[-r,-o],[r,-o],[r,o],[-r,o]].map(([s,a])=>[i.x+s*t-a*n,i.z+s*n+a*t])}function I(i,e){let t=!1;for(let n=0,r=e.length-1;n<e.length;r=n++){let[o,s]=e[n],[a,l]=e[r];s>i[1]!=l>i[1]&&i[0]<(a-o)*(i[1]-s)/(l-s)+o&&(t=!t)}return t}var Xn={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};function Yn(i,e){let t=i.split(".").map(r=>parseInt(r,10)||0),n=e.split(".").map(r=>parseInt(r,10)||0);for(let r=0;r<Math.max(t.length,n.length);r++){let o=(t[r]??0)-(n[r]??0);if(o)return o>0}return!1}var Ni=700,Rt="neonplan3d.unsaved",_e="1.8.4",Qn="floorplan-3d.unsaved";function Bi(){try{let i=localStorage.getItem(Rt)??localStorage.getItem(Qn);return i?JSON.parse(i):null}catch{return null}}function Tt(i){try{i?localStorage.setItem(Rt,JSON.stringify(i)):(localStorage.removeItem(Rt),localStorage.removeItem(Qn))}catch{}}var ge=class{building=null;error=null;saveState="idle";saveError=null;backendVersion=null;draft=null;packs=[];host;hass=null;revision=-1;ownRevisions=new Set;unsubscribe=null;saveTimer;pending=null;saving=null;connected=!1;constructor(e){this.host=e,e.addController(this)}setHass(e){let t=this.hass===null;this.hass=e,t&&this.connected&&this.start()}hostConnected(){this.connected=!0,this.hass&&this.start()}hostDisconnected(){this.connected=!1,this.flush(),this.unsubscribe?.(),this.unsubscribe=null}edit(e){this.building=e,this.pending=e,clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{this.flush()},Ni),this.host.requestUpdate()}get needsReload(){return!!this.backendVersion&&_e!=="dev"&&Yn(this.backendVersion,_e)}get needsRestart(){return this.saveError&&/extra keys not allowed/i.test(this.saveError)?!0:!!this.backendVersion&&_e!=="dev"&&this.backendVersion!==_e}restoreDraft(){let e=this.draft;this.draft=null,e&&this.edit(Et(e.building))}discardDraft(){this.draft=null,Tt(null),this.host.requestUpdate()}async flush(){clearTimeout(this.saveTimer),this.saving&&await this.saving;let e=this.pending;!e||!this.hass||(this.pending=null,this.saveState="saving",this.host.requestUpdate(),this.saving=(async()=>{try{let t=await Tn(this.hass,e);this.ownRevisions.add(t),this.revision=t,this.saveState=this.pending?"saving":"saved",this.saveError=null,Tt(null)}catch(t){this.saveState="error",this.saveError=Jn(t),Tt({building:e,savedAt:Date.now()})}this.host.requestUpdate()})(),await this.saving,this.saving=null)}async start(){if(this.hass&&(await Promise.all([this.reloadPacks(),this.reload()]),!this.unsubscribe&&this.connected))try{this.unsubscribe=await Rn(this.hass,e=>{this.ownRevisions.has(e)||e===this.revision||this.pending||this.saving||this.reload()})}catch{}}async reloadPacks(){if(this.hass){try{this.packs=await Pn(this.hass)}catch{this.packs=[]}Wn(this.packs),this.host.requestUpdate()}}async reload(){if(this.hass){try{let e=await En(this.hass);this.building=Et(e.building),this.backendVersion=e.version??null,this.draft===null&&!this.pending&&(this.draft=Bi()),this.revision=e.revision,this.error=null}catch(e){this.error=Jn(e)}this.host.requestUpdate()}}};function Jn(i){return i&&typeof i=="object"&&"message"in i?String(i.message):String(i)}var er;function zt(){let i=new URL("./neonplan3d-editor.js?v=7168e13c86ad",new URL(import.meta.url)).href;return er??=import(i),er}var Vi={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},qi=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure"]),Ui=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx"]),ji=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),Ye=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],ir=new Set(["light","switch","fan"]);function or(i){return i.slice(0,i.indexOf("."))}function $(i){return Vi[or(i)]??null}function Ki(i){return i!==null&&i!=="scene"&&i!=="script"}function sr(i,e){let t=i.entities?.[e];return t?t.area_id?t.area_id:t.device_id&&i.devices?.[t.device_id]?.area_id||null:null}function Gi(i,e){let t=$(e);if(!t)return!1;let n=i.entities?.[e];if(n?.hidden||n?.entity_category)return!1;let r=i.states[e];if(!r)return!1;let o=r.attributes.device_class;return t==="sensor"?o?qi.has(o):Ui.has(String(r.attributes.unit_of_measurement??"")):t==="binary"?!!o&&ji.has(o):!0}var Zi=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function Xi(i,e){if($(e)!=="sensor")return!1;let t=i.entities?.[e];if(t?.hidden||t?.entity_category)return!1;let n=i.states[e];return!n||!n.attributes.unit_of_measurement||Zi.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||F(n)}var Pt=null;function It(i){let e=Pt;if(e&&e.entities===i.entities&&e.devices===i.devices&&(e.states===i.states||(e.states=i.states,Object.keys(i.states).length===e.stateCount)))return e;let t=new Map,n=new Map,r=[],o=new Map;for(let s of Object.keys(i.entities??{})){let a=i.entities[s],l=a.device_id;l&&Nt(i,s)&&(n.get(l)??n.set(l,[]).get(l)).push(s),l&&!a.hidden&&!a.entity_category&&(o.get(l)??o.set(l,new Set).get(l)).add(or(s));let c=Gi(i,s),u=sr(i,s);if(!u){(c||Xi(i,s))&&Ki($(s))&&r.push(s);continue}c&&(t.get(u)??t.set(u,[]).get(u)).push(s)}r.sort((s,a)=>Ye.indexOf($(s))-Ye.indexOf($(a))||D(i,s).localeCompare(D(i,a)));for(let[s,a]of t){let l=i.areas?.[s]?.name;a.sort((c,u)=>{let d=Ye.indexOf($(c)),p=Ye.indexOf($(u));return d-p||D(i,c,l).localeCompare(D(i,u,l))})}return Pt={entities:i.entities,devices:i.devices,states:i.states,stateCount:Object.keys(i.states).length,areas:t,power:n,unassigned:r,domains:o},Pt}function H(i,e){return!e||!i.entities?[]:It(i).areas.get(e)??[]}var Yi={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},Ji=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),Qi=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function eo(i,e){let t=i.entities?.[e]?.device_id,n=t?It(i).domains.get(t):void 0;return n&&[...n].some(r=>Ji.has(r))?!1:!Qi.test(`${e} ${i.states[e]?.attributes.friendly_name??""}`)}function Dt(i,e,t,n){let r=t.climate?.[n];if(r==="none")return[];if(r)return i.states[r]?[r]:[];let o=Yi[n],s=(d,p)=>I([d,p],t.points),a=e?.placements.filter(d=>d.entity_id.startsWith("sensor."))??[],l=a.filter(d=>s(d.x,d.z)).map(d=>d.entity_id),c=new Set(a.filter(d=>!s(d.x,d.z)).map(d=>d.entity_id));return[...new Set([...H(i,t.area_id).filter(d=>!c.has(d)),...l])].filter(d=>d.startsWith("sensor.")&&i.states[d]?.attributes.device_class===o&&eo(i,d))}function X(i){return i.config?.unit_system?.temperature==="\xB0F"?"\xB0F":"\xB0C"}function to(i,e){return e==="\xB0F"?(i-32)*5/9:e==="K"?i-273.15:i}function De(i,e){return X(i)==="\xB0F"?e*9/5+32:e}function Je(i,e,t,n){let r=Dt(i,e,t,n).map(o=>{let s=Number(i.states[o]?.state);return n==="temperature"?to(s,i.states[o]?.attributes.unit_of_measurement):s}).filter(o=>Number.isFinite(o));return r.length?r.reduce((o,s)=>o+s,0)/r.length:null}function Ft(i,e){return i.entities?It(i).power.get(e)??[]:[]}function D(i,e,t){let r=i.states[e]?.attributes.friendly_name??i.entities?.[e]?.name??e;if(t&&r.length>t.length+1&&r.toLowerCase().startsWith(t.toLowerCase()+" ")){let o=r.slice(t.length+1);return o.charAt(0).toUpperCase()+o.slice(1)}return r}function F(i){return!i||i.state==="unavailable"||i.state==="unknown"}var no=new Set(["running","printing","prepare","preparing","slicing","heating","busy","working","active","washing","rinsing","spinning","drying","cleaning","in_progress","in progress","on"]);function Ct(i){return!!i&&i.entity_id.startsWith("sensor.")&&i.attributes.device_class==="enum"}function ue(i){if(!i)return!1;switch($(i.entity_id)){case"light":case"switch":case"fan":case"binary":return i.state==="on";case"cover":return i.state==="open"||i.state==="opening";case"climate":return i.attributes.hvac_action==="heating"||i.attributes.hvac_action==="cooling";case"media":return i.state==="playing";case"lock":return i.state==="unlocked"||i.state==="open";case"sensor":return Ct(i)&&no.has(String(i.state).toLowerCase());default:return!1}}function Fe(i){if(!i||i.state!=="on")return null;let e=i.attributes,t=typeof e.brightness=="number"?Math.max(.08,e.brightness/255):1,n=e.rgb_color,r;return n&&e.color_mode!=="color_temp"&&e.color_mode!=="brightness"&&e.color_mode!=="onoff"?r=[n[0]/255,n[1]/255,n[2]/255]:typeof e.color_temp_kelvin=="number"?r=ro(e.color_temp_kelvin):r=[1,.71,.28],{color:r,level:t}}function ro(i){let e=Math.min(1,Math.max(0,(i-2200)/4300)),t=[1,.66,.26],n=[.78,.9,1];return[t[0]+(n[0]-t[0])*e,t[1]+(n[1]-t[1])*e,t[2]+(n[2]-t[2])*e]}function be(i,e,t=null){if(i==="camera")return t==="ceiling"?Math.max(.5,e-.05):2.2;if(i==="light"&&t){if(t==="floor")return 1.95;if(t==="table")return 1.25;if(t==="wall")return 1.95}switch(i){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}var io=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),oo=new Set(["garage","gate"]),so=new Set(["window","opening"]);function Ie(i,e,t=!1){let n=new Map;return e.length&&i.forEach((r,o)=>{let s=t&&e.length===1?e[0]:e[o];s&&n.set(r.id,s)}),n}function Qe(i,e){let t=new Map;for(let n of e)for(let r of n.rooms){let o=n.openings.filter(h=>h.room_id===r.id).sort((h,k)=>h.edge-k.edge||h.offset-k.offset);if(!o.length)continue;let s=H(i,r.area_id),a=h=>i.states[h]?.attributes.device_class,l=s.filter(h=>$(h)==="cover"&&io.has(a(h))),c=o.filter(h=>h.type==="window"),u=o.filter(h=>h.type==="door"),d=o.filter(h=>h.type==="garage"),p=Ie(c,l,!0),m=Ie(c,s.filter(h=>$(h)==="binary"&&so.has(a(h)))),_=Ie(u,s.filter(h=>$(h)==="binary"&&a(h)==="door")),b=Ie(d,s.filter(h=>$(h)==="cover"&&oo.has(a(h)??""))),x=Ie(d,s.filter(h=>$(h)==="binary"&&a(h)==="garage_door")),g=(h,k)=>h==="none"?null:h??k??null;for(let h of o){let k=h.type==="window"?p:h.type==="garage"?b:null,w=h.type==="window"?m:h.type==="garage"?x:_;t.set(h.id,{cover:g(h.cover,k?.get(h.id)),contact:h.sensor==="handle"&&h.contact==null?null:g(h.contact,w.get(h.id)),tilt:h.tilt==="none"?null:h.tilt,contact2:h.leaves===2&&h.contact2&&h.contact2!=="none"?h.contact2:null,tilt2:h.leaves===2&&h.tilt2&&h.tilt2!=="none"?h.tilt2:null,position:h.position&&h.position!=="none"?h.position:null,positionInverted:!!h.position_inverted})}}return t}var ao=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function lo(i){if(!i||F(i))return null;let e=i.attributes.window_state;for(let t of[typeof e=="string"?e:null,i.state]){if(!t)continue;let n=ao.find(([r])=>r.test(t.trim()));if(n)return n[1]}return null}var co=.5;function Q(i,e,t="window"){let n=m=>!!m&&i.states[m]?.state==="on",r=m=>!!m&&!!i.states[m]&&!F(i.states[m]),o=m=>m?lo(i.states[m]):null,s=n(e.tilt2)||o(e.tilt2)==="tilted"||o(e.contact2)==="tilted",a=o(e.contact2)==="open"&&!s?1:0;if(t==="door"){let m=o(e.contact);return{open:m===null?co:m==="closed"?0:1,open2:o(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:null,sensed:m!==null}}let l=n(e.tilt)||o(e.tilt)==="tilted"||o(e.contact)==="tilted",c=o(e.contact)==="open"&&!l?1:0,u=null,d=e.cover?i.states[e.cover]:void 0,p=uo(i,e.position);if(p!==null)u=e.positionInverted?p:1-p;else if(d&&!F(d)){let m=d.attributes.current_position;typeof m=="number"?u=1-Math.min(100,Math.max(0,m))/100:u=d.state==="closed"?1:d.state==="opening"||d.state==="closing"?.5:0}else e.cover&&(u=0);if(t==="garage"){let m=u!==null||r(e.contact);return u===null&&(u=r(e.contact)&&n(e.contact)?0:1),{open:0,open2:0,tilt:0,tilt2:0,cover:u,sensed:m}}return{open:c,open2:a,tilt:l?1:0,tilt2:s?1:0,cover:u,sensed:r(e.contact)||r(e.tilt)}}function uo(i,e){let t=e?i.states[e]:void 0;if(!t||F(t))return null;let n=Number(t.state);if(!Number.isFinite(n))return null;let r=t.attributes.unit_of_measurement==="%"||n>1;return Math.min(1,Math.max(0,r?n/100:n))}function Ht(i,e){let t=new Map,n=[];for(let s of e){let a=i.entities?.[s]?.device_id??`entity:${s}`,l=t.get(a);l||(t.set(a,l=[]),n.push(a)),l.push(s)}let r=n.map(s=>{let a=t.get(s),l=a.find(c=>!i.entities?.[c]?.name)??a[0];return{primary:l,others:a.filter(c=>c!==l)}}),o=new Map(e.map((s,a)=>[s,a]));return r.sort((s,a)=>o.get(s.primary)-o.get(a.primary))}function Lt(i,e){return Ht(i,e).map(t=>t.primary)}var po={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i},ho=new Set(["tv_board","tv_wall"]);function ar(i,e){let t=i.states[e.entity];if(!t)return!1;let n=e.attribute?t.attributes[e.attribute]:t.state;if(n==null)return!1;let r=String(n).toLowerCase(),o=e.state.trim().toLowerCase();return e.state.trim()==="*"||r===o||o.length>=3&&r.includes(o)}function lr(i){return ho.has(i)||!!On(i)}function Wt(i){return lr(i)||i==="desk"||i==="fridge_smart"}function ve(i,e){let t=new Set,n=we(i,e),r=e.some(o=>o.openings.some(s=>s.confirm))?Qe(i,e):null;for(let o of e){for(let s of o.placements)s.confirm&&t.add(s.entity_id);for(let s of o.openings){let a=s.confirm?r?.get(s.id)?.cover:null;a&&a!=="none"&&t.add(a)}for(let s of o.furniture){let a=s.confirm?n.get(s.id)?.entity:null;a&&a!=="none"&&t.add(a)}}return t}function Ot(i,e){let t=r=>{if(!r||r==="none")return!1;let o=i.states[r]?.state;return o==="on"||o==="open"},n=new Map;for(let r of e)for(let o of r.furniture)o.type==="fridge_smart"&&n.set(o.id,{left:t(o.door_left),right:t(o.door_right)});return n}var tr={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function Nt(i,e){return e.startsWith("sensor.")&&i.states[e]?.attributes.device_class==="power"}function fo(i,e){if(Nt(i,e))return e;let t=i.entities?.[e]?.device_id;return t?Ft(i,t).find(n=>n!==e)??null:null}function we(i,e){let t=new Map;for(let n of e){let r=new Set(n.furniture.flatMap(o=>[o.entity,o.power]).filter(o=>!!o&&o!=="none"));for(let o of n.furniture){let s=o.type in tr,a=s?tr[o.type]:po[o.type];if(!a&&o.entity==null&&o.power==null)continue;let l=n.rooms.find(m=>m.points.length>=3&&I([o.x,o.z],m.points)),c=l?Lt(i,H(i,l.area_id)):[],u=m=>`${m} ${D(i,m)}`,d=o.entity==="none"?null:o.entity??null;if(o.entity==null){let m=c.filter(_=>!r.has(_));if(s){let _=m.filter(b=>$(b)==="light");d=_.find(b=>a.test(u(b)))??_[0]??null}else if(o.type==="robot_vacuum"){let _=l?.area_id??null;d=Object.keys(i.entities??{}).find(b=>b.startsWith("vacuum.")&&!r.has(b)&&sr(i,b)===_)??null}else if(o.type==="radiator"){let _=m.filter(b=>$(b)==="climate");d=_.find(b=>a.test(u(b)))??_[0]??null}else if(lr(o.type)){let _=m.filter(b=>$(b)==="media");d=_.find(b=>i.states[b]?.attributes.device_class==="tv")??_.find(b=>a?.test(u(b)))??_[0]??null}else a&&(d=m.find(_=>["switch","media","fan"].includes($(_)??"")&&a.test(u(_)))??null);d&&r.add(d)}let p=o.power==="none"?null:o.power??null;o.power==null&&(p=d?fo(i,d):null,!p&&a&&l&&!s&&(p=H(i,l.area_id).find(_=>Nt(i,_)&&!r.has(_)&&a.test(u(_)))??null),p&&r.add(p)),(d||p)&&t.set(o.id,{entity:d,power:p})}}return t}function cr(i){if(!i||i.state==="off"||i.state==="standby"||F(i))return null;let e=i.attributes,t=`${e.app_name??""} ${e.source??""} ${e.app_id??""}`.toLowerCase();return t.includes("netflix")?[.9,.04,.08]:t.includes("youtube")?[1,.1,.15]:t.includes("prime")||t.includes("amazon")?[.1,.6,.95]:t.includes("disney")?[.2,.35,1]:t.includes("spotify")?[.12,.85,.4]:t.includes("zdf")||t.includes("ard")||t.includes("mediathek")?[1,.5,.1]:[.22,.88,1]}function ur(i,e,t){let n=(c,u)=>I([c,u],t.points),r=we(i,[e]),o=Qe(i,[e]),s=[...e.placements.filter(c=>n(c.x,c.z)).map(c=>c.entity_id),...e.furniture.filter(c=>n(c.x,c.z)).flatMap(c=>[r.get(c.id)?.entity,r.get(c.id)?.power]),...e.openings.filter(c=>c.room_id===t.id).flatMap(c=>{let u=o.get(c.id);return u?[u.cover,u.contact,u.tilt,u.contact2]:[]}),...t.panel??[]].filter(c=>!!c&&!!i.states[c]),a=[...new Set(s)],l=new Set(a);return{shown:a,more:H(i,t.area_id).filter(c=>!l.has(c))}}var nr=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/;function Bt(i,e,t){if(t==="none")return null;if(t)return t;let n=e?i.entities?.[e]?.device_id:null;if(!n||!i.entities)return null;for(let r of Object.values(i.entities))if(!(r.device_id!==n||!r.entity_id.startsWith("sensor."))&&(nr.test(r.translation_key??"")||nr.test(r.entity_id.split(".")[1])))return r.entity_id;return null}function rr(i){return i.toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss").replace(/ae/g,"a").replace(/oe/g,"o").replace(/ue/g,"u").normalize("NFD").replace(/[^a-z0-9]/g,"")}function dr(i,e,t,n){let r=n?i.states[n]?.state:t?i.states[t]?.attributes.current_room:void 0;if(typeof r!="string"||!r||r==="unknown"||r==="unavailable")return null;let o=rr(r);if(!o)return null;let s=a=>[a.name,a.area_id??"",a.area_id&&i.areas?.[a.area_id]?.name||""].map(rr).filter(Boolean);return e.find(a=>s(a).includes(o))??e.find(a=>s(a).some(l=>l.length>=3&&(l.includes(o)||o.includes(l))))??null}var pr={view:"3D",editor:"\xC9diteur",all_floors:"Tous les \xE9tages",no_building:"Aucun plan pour l'instant.",no_building_admin:"Aucun plan pour l'instant. Dessinez votre premier \xE9tage dans l'\xE9diteur.",open_editor:"Ouvrir l'\xE9diteur",loading:"Chargement \u2026",load_error:"\xC9chec du chargement",saving:"Enregistrement \u2026",saved:"Enregistr\xE9",save_error:"\xC9chec de l'enregistrement",save_failed_detail:"\xC9chec de l'enregistrement : {error}. Vos modifications restent conserv\xE9es dans ce navigateur.",needs_restart:"Une nouvelle version de NeonPlan 3D est install\xE9e, mais Home Assistant tourne encore avec la {version}. Red\xE9marrez Home Assistant \u2013 d'ici l\xE0, l'enregistrement peut \xE9chouer.",needs_reload:"Home Assistant tourne d\xE9j\xE0 avec NeonPlan 3D {version}, mais cette page utilise encore la {frontend} depuis le cache du navigateur. Rechargez la page (Ctrl+F5) ; dans l'application Companion : Param\xE8tres \u2192 Application Companion \u2192 D\xE9pannage \u2192 R\xE9initialiser le cache du frontend.",needs_restart_old:"Une nouvelle version de NeonPlan 3D est install\xE9e, mais Home Assistant tourne encore avec une version plus ancienne. Red\xE9marrez Home Assistant \u2013 d'ici l\xE0, l'enregistrement \xE9choue.",draft_found:"Modifications non enregistr\xE9es du {time} trouv\xE9es.",draft_restore:"Restaurer et enregistrer",draft_discard:"Abandonner",walls_auto:"Murs hauts",walls_cut:"Coupe",reset_view:"Vue d'ensemble",back:"Retour",floor:"\xC9tage",floors:"\xC9tages",add_floor:"Ajouter un \xE9tage",floor_from_ha:"\xC9tages de Home Assistant :",floor_empty:"\xC9tage vide",level:"Niveau {n}",ha_floor:"\xC9tage dans Home Assistant",no_ha_floor:"\u2013 aucun \u2013",area_rooms:"Cr\xE9er {n} pi\xE8ces depuis les pi\xE8ces HA",area_rooms_hint:"Cr\xE9e une pi\xE8ce (4 \xD7 3 m) pour chaque pi\xE8ce HA de cet \xE9tage \u2013 faites-la ensuite glisser \xE0 sa place et ajustez les angles",floor_name:"Nom",elevation:"Hauteur au-dessus du sol (m)",height:"Hauteur sous plafond (m)",cut_height:"Hauteur de coupe (m)",delete_floor:"Supprimer l'\xE9tage",delete_floor_confirm:"Supprimer l'\xE9tage \xAB {name} \xBB avec toutes ses pi\xE8ces ?",move_up:"Monter",move_down:"Descendre",default_floor:"Rez-de-chauss\xE9e",new_floor:"\xC9tage {n}",tool_select:"S\xE9lection",tool_rect:"Rectangle",tool_polygon:"Forme libre",undo:"Annuler",redo:"R\xE9tablir",fit:"Tout afficher",room:"Pi\xE8ce",rooms:"Pi\xE8ces",room_name:"Nom",area:"Pi\xE8ce HA",no_area:"Aucune pi\xE8ce HA",material:"Sol",x:"X (m)",z:"Y (m)",width:"Largeur (m)",depth:"Profondeur (m)",points:"Angles",delete_point:"Supprimer l'angle",duplicate:"Dupliquer",delete:"Supprimer",new_room:"Pi\xE8ce {n}",settings:"R\xE9glages",pendant_shape:"Forme",pendant_shade:"Abat-jour",pendant_globe:"Globe",pendant_cone:"C\xF4ne",pendant_drum:"Tambour",pkg_open:"Meubler \u2026",pkg_hint:"Les meubles se placent contre les murs de la pi\xE8ce ; les luminaires se lient aux lumi\xE8res de la pi\xE8ce HA. Ajustez ensuite chaque \xE9l\xE9ment \u2013 Ctrl+Z annule tout.",pkg_done:"{n} meubles plac\xE9s \u2013 Ctrl+Z annule.",pkg_kitchen_row:"Cuisine lin\xE9aire",pkg_kitchen_row_desc:"Rang\xE9e contre le mur du fond avec r\xE9frig\xE9rateur, four, \xE9vier, lave-vaisselle et plaque de cuisson, meuble haut, table \xE0 manger avec suspension",pkg_kitchen_l:"Cuisine en L",pkg_kitchen_l_desc:"Rang\xE9es au fond et \xE0 gauche, \xEElot central avec tabourets de bar",pkg_bath:"Salle de bain",pkg_bath_desc:"Lavabo, WC, baignoire, lave-linge, spot encastr\xE9",pkg_bedroom:"Chambre",pkg_bedroom_desc:"Lit double avec deux tables de chevet, armoire, commode, plafonnier",pkg_living:"Salon",pkg_living_desc:"Meuble TV, canap\xE9, table basse, tapis, fauteuil, \xE9tag\xE8re, lampadaire, plante",pkg_dining:"Salle \xE0 manger",pkg_dining_desc:"Table avec quatre chaises, buffet, suspension",pkg_office:"Bureau",pkg_office_desc:"Bureau avec chaise de bureau, deux \xE9tag\xE8res, plafonnier",pkg_kids:"Chambre d'enfant",pkg_kids_desc:"Lit simple, bureau, \xE9tag\xE8re, tapis",pkg_hall:"Entr\xE9e",pkg_hall_desc:"Portemanteau, deux spots encastr\xE9s",spots_place:"Placer des spots",spots_type:"Luminaire",spots_cols:"Colonnes (gauche\u2013droite)",spots_rows:"Rang\xE9es (avant\u2013arri\xE8re)",spots_add:"Placer {n} luminaires",spots_placed:"{n} luminaires plac\xE9s.",spots_hint:"Tous les luminaires suivent la lumi\xE8re choisie (p. ex. des spots sur un m\xEAme variateur). Ensuite, chacun peut \xEAtre d\xE9plac\xE9 et li\xE9 \xE0 une autre lumi\xE8re comme n'importe quel meuble.",cancel:"Annuler",backup:"Sauvegarde",backup_history:"Points de restauration",backup_none:"Aucun pour l'instant. Pendant l'\xE9dition, un point de restauration est conserv\xE9 au plus toutes les 10 minutes.",backup_summary:"{rooms} pi\xE8ces, {furniture} meubles",backup_restore:"Restaurer",backup_restore_confirm:"Restaurer l'\xE9tat du {time} ? L'\xE9tat actuel est conserv\xE9 comme point de restauration.",backup_restored:"Restaur\xE9.",backup_file:"Fichier",backup_export:"Exporter",backup_export_share:"Partager comme mod\xE8le",backup_export_share_hint:"Sans pi\xE8ces HA, appareils, capteurs ni images \u2013 pour le transmettre \xE0 d'autres.",backup_import:"Importer \u2026",backup_import_confirm:"Remplacer tout le plan par le fichier ? L'\xE9tat actuel est conserv\xE9 comme point de restauration.",backup_import_error:"Le fichier n'est pas un plan NeonPlan 3D ({error}).",backup_imported:"Import\xE9.",backup_hint:"Les images d'arri\xE8re-plan ne font pas partie du fichier.",backup_full:"Sauvegarde compl\xE8te",backup_full_export:"Tout sauvegarder (plan, images, packs)",backup_full_import:"Restaurer une sauvegarde compl\xE8te \u2026",backup_full_hint:"Un seul fichier avec le plan, toutes les images d'arri\xE8re-plan et d'\xE9cran et les packs install\xE9s. \xC0 la restauration, chaque pack est rev\xE9rifi\xE9 ; la cl\xE9 de licence n'est pas incluse.",backup_full_confirm:"Remplacer le plan, les images et les packs par la sauvegarde ? L'\xE9tat actuel reste disponible comme point de restauration.",backup_full_not_backup:"Ce n'est pas une sauvegarde compl\xE8te NeonPlan 3D.",backup_full_restored:"Sauvegarde restaur\xE9e : {packs} packs, {pictures} images.",backup_full_skipped:"Ignor\xE9s (non v\xE9rifiables ou li\xE9s \xE0 une autre installation) : {packs}.",export_name_full:"complet",device_confirm:"Demander avant de commuter",device_confirm_hint:"Un appui en 3D, le menu rapide et le panneau de la pi\xE8ce demandent d'abord confirmation. Un double appui sur la pi\xE8ce ignore cet appareil.",cover_confirm_hint:"Ouvrir, fermer et les positions demandent d'abord confirmation dans le menu rapide et le panneau de la pi\xE8ce, et un glissement sur le marqueur ne d\xE9place plus le volet (il fait tourner la vue). Stop ne demande jamais.",confirm_switch:"Vraiment commuter {name} ?",split_handle_hint:"Glisser : largeur du plan et de la vue 3D",wall_exterior:"Mur ext\xE9rieur (m)",wall_interior:"Mur int\xE9rieur (m)",grid:"Grille (m)",background:"Mod\xE8le (image du plan)",background_upload:"Choisir une image \u2026",background_width:"Largeur dans le plan (m)",background_opacity:"Opacit\xE9",background_remove:"Retirer le mod\xE8le",hint_select:"Touchez une pi\xE8ce pour la s\xE9lectionner \xB7 faites glisser les angles \xB7 \xAB + \xBB sur un bord ins\xE8re un angle \xB7 les fl\xE8ches d\xE9placent finement \xB7 Suppr supprime \xB7 Ctrl+Z",hint_rect:"Faites glisser pour dessiner un rectangle",hint_polygon:"Placez les angles \xB7 touchez le premier angle ou appuyez sur Entr\xE9e pour fermer \xB7 \xC9chap annule",hint_empty:"Ajoutez d'abord un \xE9tage.",area_m2:"{a} m\xB2",overlap_warning:"Des pi\xE8ces se chevauchent \u2013 les murs y sont incomplets.",read_only:"Seuls les administrateurs peuvent modifier le plan.",mat_wood:"Bois",mat_oak:"Ch\xEAne",mat_tiles:"Carrelage",mat_carpet:"Moquette",mat_stone:"Pierre",mat_concrete:"B\xE9ton",card_name:"NeonPlan 3D",card_description:"Votre maison en 3D (n\xE9on).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} i/s (image la plus lente {ms} ms)",stats_idle:"Au repos (0 i/s)",stats_busy_camera:"cam\xE9ra",stats_busy_floors:"\xE9tages",stats_busy_openings:"portes/fen\xEAtres",stats_busy_flash:"flash",stats_busy_roof:"toit",stats_busy_flow:"flux d'\xE9nergie",stats_busy_effect:"effet de couleur",stats_busy_robot:"robot",stats_busy_orbit:"rotation de la cam\xE9ra",stats_busy_tint:"teinte de la pi\xE8ce",stats_low:"niveau tablette, ratio de pixels {r}",stats_full:"niveau complet, ratio de pixels {r}",floors_apart:"\xC9cart\xE9s",floors_stacked:"Empil\xE9s",floor_rooms_one:"1 pi\xE8ce",floor_rooms:"{n} pi\xE8ces",quality:"Qualit\xE9",quality_auto:"Auto",quality_low:"Tablette",quality_high:"\xC9lev\xE9e",state_on:"Allum\xE9",state_off:"\xC9teint",state_open:"Ouvert",state_closed:"Ferm\xE9",state_opening:"Ouverture",state_closing:"Fermeture",state_playing:"Lecture",state_paused:"En pause",state_idle:"Inactif",state_locked:"Verrouill\xE9",state_unlocked:"D\xE9verrouill\xE9",state_detected:"D\xE9tect\xE9",state_clear:"RAS",state_unavailable:"Indisponible",state_heat:"Chauffage",state_cool:"Climatisation",state_auto:"Auto",state_heat_cool:"Chaud/froid",state_dry:"D\xE9shumidification",state_fan_only:"Ventilation",devices:"Appareils",devices_none_area:"Liez la pi\xE8ce \xE0 une pi\xE8ce HA et ses appareils appara\xEEtront ici.",devices_none:"La pi\xE8ce HA n'a aucun appareil adapt\xE9.",devices_place_all_n:"Placer les {n} \u2026",devices_place_all_confirm:"Placer {n} appareils dans la pi\xE8ce d'un coup ? (Ctrl+Z ou \xAB Annuler \xBB les retire tous en une \xE9tape.)",devices_src_area:"Cette pi\xE8ce HA",devices_src_other:"Autres pi\xE8ces HA",devices_src_none:"Sans pi\xE8ce HA",devices_place:"Placer",devices_remove:"Retirer",devices_hint:"Les appareils plac\xE9s apparaissent en 3D. Faites-les glisser dans le plan pour les d\xE9placer.",panel_lights:"Lumi\xE8res",panel_covers:"Volets",panel_climate:"Chauffage",panel_media:"M\xE9dias",panel_switches:"Interrupteurs",panel_sensors:"Capteurs",panel_scenes:"Sc\xE8nes et scripts",panel_cameras:"Cam\xE9ras",camera_live:"Ouvrir la vue en direct",through_camera:"Regarder par la cam\xE9ra",through_blend:"Fondu",through_back:"Retour \xE0 la vue",camera_mount:"Montage",camera_mount_wall:"Mural (regarde selon sa rotation)",camera_mount_ceiling:"Plafond (d\xF4me, 360\xB0)",camera_fov:"Champ de vision (\xB0)",camera_reach:"Port\xE9e (m)",camera_fov_short:"Angle \xB0",camera_reach_short:"Port\xE9e m",camera_tilt:"Inclinaison vers le bas (\xB0)",camera_tilt_short:"Incl. \xB0",camera_aim_hint:"Dans le plan, le c\xF4ne montre o\xF9 regarde la cam\xE9ra. La poign\xE9e \xE0 sa pointe fait tourner la cam\xE9ra et r\xE8gle sa port\xE9e.",state_recording:"Enregistrement",state_streaming:"Diffusion",panel_all_off:"Tout \xE9teindre",panel_no_area:"Cette pi\xE8ce n'est li\xE9e \xE0 aucune pi\xE8ce HA. Vous pouvez la lier dans l'\xE9diteur.",panel_empty:"Aucun appareil de cette pi\xE8ce n'est dans le plan. Dans l'\xE9diteur, placez des appareils ou choisissez-les pour le panneau de la pi\xE8ce avec \u2606.",close:"Fermer",brightness:"Luminosit\xE9",color_temp:"Temp\xE9rature de couleur",color:"Couleur",position:"Position",cover_open:"Ouvrir",cover_stop:"Stop",cover_close:"Fermer",target_temp:"Consigne",current_temp:"Actuelle",temp_down:"Plus frais",temp_up:"Plus chaud",volume:"Volume",play_pause:"Lecture/pause",previous:"Pr\xE9c\xE9dent",next:"Suivant",run:"Ex\xE9cuter",details:"D\xE9tails",hold_hint:"Appui : commute \xB7 appui long : d\xE9tails",tool_opening:"Portes et fen\xEAtres",tool_furniture:"Meubles",qm_off:"\xC9teint",find:"Rechercher",find_placeholder:"O\xF9 est \u2026? Appareil ou pi\xE8ce",find_none:"Aucun r\xE9sultat",swipe_off:"\xC9teint",panel_pin:"Afficher dans le panneau de la pi\xE8ce",panel_unpin:"Ne pas afficher dans le panneau de la pi\xE8ce",devices_panel_hint:"Le panneau de la pi\xE8ce affiche les appareils du plan. \u2606 ajoute un appareil au panneau de la pi\xE8ce sans le placer.",card_section_view:"Vue",card_size:"Taille",card_size_fixed:"Hauteur fixe",card_size_fill:"Remplir l'\xE9cran",card_fill_hint:"Fonctionne au mieux dans une vue de tableau de bord de type \xAB Panneau (carte unique) \xBB \u2013 la carte prend alors toute la place.",card_controls:"Boutons dans la carte",card_floor_thumbs:"\xC9tages en miniatures",card_floor_thumbs_hint:"Petites images des \xE9tages sur le c\xF4t\xE9 \u2013 touchez-en une pour changer",card_floor_thumbs_hint_start:"L'\xE9tage choisi est alors celui o\xF9 d\xE9marre la carte \u2013 les images sur le c\xF4t\xE9 basculent vers les autres",card_room_names:"Afficher les noms des pi\xE8ces",card_section_kiosk:"Tablette murale (kiosque)",card_section_features:"Fonctions",card_weather_plan:"comme r\xE9gl\xE9 dans le plan",card_pro_hint:"La trace de mouvement et la m\xE9t\xE9o sont des modules Pro : sans le module correspondant, ces options sont sans effet.",card_idle_return:"Retour \xE0 la vue de d\xE9part apr\xE8s",card_idle_off:"Jamais",card_idle_min:"{n} min sans contact",card_idle_hint:"Apr\xE8s ce d\xE9lai, la carte ferme la pi\xE8ce et r\xE9affiche la vue de d\xE9part.",card_night:"Att\xE9nuation nocturne",card_night_off:"D\xE9sactiv\xE9e",card_night_sun:"Selon le soleil",card_night_time:"Plage horaire",card_night_range:"Plage horaire (p. ex. 22:00-06:00)",card_idle_orbit:"Rotation de la cam\xE9ra comme \xE9conomiseur d'\xE9cran",card_idle_orbit_hint:"Apr\xE8s le retour, la vue tourne lentement jusqu'\xE0 ce que quelqu'un touche la tablette",card_alerts:"Afficher les alertes",card_alerts_hint:"Fum\xE9e, gaz, CO, eau, alarme et fen\xEAtres ouvertes sous la pluie : la pi\xE8ce pulse, une notification appara\xEEt en haut",card_alert_jump:"Aller \xE0 la pi\xE8ce d'une nouvelle alerte",card_alert_jump_hint:"La vue passe d'elle-m\xEAme \xE0 l'\xE9tage et \xE0 la pi\xE8ce de l'alerte",card_scenes:"Boutons de sc\xE8ne dans la pi\xE8ce",card_scenes_hint:"Sc\xE8nes et scripts de la pi\xE8ce HA en boutons sous la vue 3D quand une pi\xE8ce est s\xE9lectionn\xE9e",card_motion_trail:"Trace de mouvement",card_motion_trail_hint:"O\xF9 un mouvement a \xE9t\xE9 signal\xE9 ces 30 derni\xE8res minutes, avec les heures (capteurs de mouvement, de pr\xE9sence et cam\xE9ras)",trail_short:"Trace",weather_short:"M\xE9t\xE9o",weather_entity:"Entit\xE9 m\xE9t\xE9o",weather_effects:"Effets m\xE9t\xE9o en 3D",rain_warning:"Alerte : fen\xEAtre ouverte sous la pluie",weather_effect_rain:"Pluie",weather_effect_snow:"Neige",weather_effect_fog:"Brouillard (grise la sc\xE8ne)",weather_effect_clouds:"Les nuages assombrissent le ciel et le soleil",weather_effect_lightning:"\xC9clairs pendant les orages",weather_effect_sky:"Soleil et lune dans le ciel",weather_entity_hint:"L'entit\xE9 m\xE9t\xE9o fournit pluie, neige, brouillard et nuages \xE0 la vue 3D ; en automatique, la premi\xE8re est utilis\xE9e.",weather_hint:"M\xE9t\xE9o ext\xE9rieure : pluie, neige, brouillard et nuages depuis l'entit\xE9 m\xE9t\xE9o, soleil et lune depuis sun.sun",card_weather:"M\xE9t\xE9o ext\xE9rieure",card_weather_hint:"Pluie, neige, brouillard et nuages depuis la premi\xE8re entit\xE9 m\xE9t\xE9o (weather_entity en choisit une autre) ; seulement les nuages au niveau tablette",trail_hint:"Trace de mouvement : o\xF9 un mouvement a \xE9t\xE9 signal\xE9 ces 30 derni\xE8res minutes, avec les heures",alerts:"Alertes",alert_smoke:"Fum\xE9e : {name}",alert_gas:"Gaz : {name}",alert_co:"Monoxyde de carbone : {name}",alert_water:"Eau : {name}",alert_alarm:"Alarme d\xE9clench\xE9e",alert_alarm_pending:"Alarme en attente",alert_window_rain:"Fen\xEAtre ouverte sous la pluie : {name}",room_names_short:"Noms des pi\xE8ces",floor_stack_short_dim:"Att\xE9nu\xE9s",floor_stack_short_stacked:"Empil\xE9s",floor_stack_short_single:"Seul",size_short_w:"L",size_short_d:"P",size_short_h:"H",import_error_not_json:"Le fichier n'est pas du JSON.",import_error_not_plan:"Le fichier n'est pas un plan NeonPlan 3D.",export_name_template:"modele",export_name_backup:"sauvegarde",card_floor_stack:"\xC9tages inf\xE9rieurs",floor_stack_dim:"Att\xE9nu\xE9s",floor_stack_stacked:"Empil\xE9s (la maison jusqu'ici)",floor_stack_single:"Masqu\xE9s (seulement cet \xE9tage)",card_control_walls:"Murs hauts/coupe",card_control_floors:"\xC9tages \xE9cart\xE9s",card_control_temperature:"Temp\xE9rature",card_control_humidity:"Humidit\xE9",card_control_co2:"CO\u2082",card_controls_hint:"Murs hauts/coupe, \xE9tages \xE9cart\xE9s et temp\xE9rature, humidit\xE9, CO\u2082 \xE0 basculer",card_fullscreen_button:"Bouton plein \xE9cran",card_fullscreen_button_hint:"Masque le tableau de bord autour de la carte (p. ex. sur une tablette murale)",fullscreen:"Plein \xE9cran",fullscreen_exit:"Quitter le plein \xE9cran",card_section_show:"Afficher",card_floor:"\xC9tage",card_floor_house:"Toute la maison (touchez un \xE9tage pour l'ouvrir)",card_height:"Hauteur (pixels)",card_walls:"Murs",card_quality_hint:"\xAB Tablette \xBB est le r\xE9glage le plus l\xE9ger \u2013 id\xE9al pour les tablettes Fire et autres tablettes murales.",card_flows_switch:"Bouton dans la carte",card_flows_on:"Toujours activ\xE9",card_flows_off:"Toujours d\xE9sactiv\xE9",card_energy:"Afficher les valeurs d'\xE9nergie en haut",card_room_panel:"D\xE9tails de la pi\xE8ce au toucher",card_room_panel_hint:"Lumi\xE8res, volets et cam\xE9ras de la pi\xE8ce dans un panneau lat\xE9ral",card_explode:"\xC9carter les \xE9tages dans la vue maison",card_stats:"Indicateur de performance (images par seconde)",card_stats_hint:"Pour v\xE9rifier la fluidit\xE9 de la carte sur l'appareil",packs:"Packs de meubles",packs_hint:"Seuls les packs sign\xE9s par l'\xE9diteur peuvent \xEAtre import\xE9s.",lib_badge_light:"Luminaire : se lie \xE0 une lumi\xE8re et se commute en 3D",lib_badge_electric:"\xC9lectrique : se lie \xE0 une entit\xE9 et \xE0 un capteur de puissance (commutation, images, consommation)",lib_badge_hint:"Les \xE9l\xE9ments avec un symbole se lient \xE0 des entit\xE9s : les luminaires se commutent, les \xE9crans affichent des images, les appareils montrent leur consommation.",pack_error_wrong_instance:"Ce pack est sign\xE9 pour une autre installation de Home Assistant. Le compte de la boutique peut le fournir pour celle-ci.",license_title:"Connexion \xE0 la boutique",license_instance:"Identifiant d'installation",license_copy:"Copier",license_copied:"Identifiant copi\xE9",license_activate:"Activer",license_activated:"Connect\xE9 \u2013 vos packs sont list\xE9s ci-dessous.",license_active:"Connect\xE9 en tant que {name} (cl\xE9 {key})",license_checked:"derni\xE8re v\xE9rification {time}",license_refresh:"V\xE9rifier maintenant",license_refreshed:"V\xE9rifi\xE9.",license_remove:"D\xE9connecter",license_remove_confirm:"Se d\xE9connecter de la boutique ? Les packs install\xE9s restent, seules les mises \xE0 jour automatiques s'arr\xEAtent.",license_installed:"install\xE9 \xB7 v{release}",license_update_available:"mise \xE0 jour vers v{release} disponible",license_not_installed:"pas encore install\xE9",license_install:"Installer",license_update:"Mettre \xE0 jour",license_none:"Aucun pack dans le compte pour l'instant.",license_hint:"La cl\xE9 de licence figure dans votre commande et dans votre compte sur mastershort.de. Saisie une fois, les packs achet\xE9s apparaissent ici, sont sign\xE9s pour cette installation et se mettent \xE0 jour d'eux-m\xEAmes (v\xE9rification une fois par jour). Tout ce qui est install\xE9 continue de fonctionner sans la connexion.",license_shop:"Plus de packs dans la boutique",license_error_invalid_key:"La boutique ne conna\xEEt pas cette cl\xE9. Elle ressemble \xE0 NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"Cette cl\xE9 est d\xE9j\xE0 li\xE9e au nombre d'installations autoris\xE9.",license_error_shop_unreachable:"La boutique est injoignable pour le moment. Les packs install\xE9s continuent de fonctionner.",license_error_not_owned:"Ce pack n'est pas dans ce compte.",license_error_no_key:"Saisissez d'abord la cl\xE9 de licence.",license_error_wrong_instance:"La boutique a sign\xE9 le pack pour une autre installation.",license_error_other:"Cela n'a pas fonctionn\xE9 : {detail}",pack_import:"Importer des packs de meubles \u2026",pack_imported:"\xAB {name} \xBB de {publisher} import\xE9 \u2013 {n} \xE9l\xE9ments",packs_imported_n:"{n} packs sur {total} import\xE9s",pack_by:"de {publisher} \xB7 {n} \xE9l\xE9ments",pack_features:"de {publisher} \xB7 d\xE9bloque {n} fonctions Pro",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Cockpit cam\xE9ra : regarder par la cam\xE9ra et trace de mouvement",pro_name_camera_cockpit:"Cockpit cam\xE9ra",pro_name_weather:"M\xE9t\xE9o ext\xE9rieure",pro_name_screens:"\xC9crans en direct",ext_tab:"Extensions",offers_title:"Nouveau dans la boutique",offers_new:"NOUVEAU",offers_loyalty:"Votre remise fid\xE9lit\xE9 : {percent} % sur chaque pack et module Pro suppl\xE9mentaire",offers_kind_pack:"Pack de meubles",offers_kind_pro:"Module Pro",offers_kind_bundle:"Lot",offers_dot:"Nouveau dans la boutique",pack_updated:"{name} a \xE9t\xE9 mis \xE0 jour vers la version {release}.",pack_updated_added:"{name} a \xE9t\xE9 mis \xE0 jour vers la version {release} : {n} nouveaux \xE9l\xE9ments \u2013 jetez un \u0153il \xE0 la biblioth\xE8que !",ext_title:"Extensions",ext_intro:"Packs de meubles et modules Pro pour NeonPlan 3D. Installez ici ce que vous avez achet\xE9 avec votre cl\xE9 de licence ; tout se met \xE0 jour seul et fonctionne aussi sans la connexion.",ext_shop:"Ouvrir la boutique",ext_pro:"Modules Pro",ext_active:"actif",ext_get:"Voir dans la boutique",ext_open:"Ouvrir les extensions",manual:"Manuel",manual_more:"En savoir plus",ext_teaser_title:"Plus de meubles et de fonctions Pro",ext_teaser_text:"Les packs de meubles, la connexion \xE0 la boutique et les modules Pro se trouvent sous \xAB Extensions \xBB en haut.",pro_feature_weather:"M\xE9t\xE9o ext\xE9rieure : pluie, neige, nuages, soleil et lune",pro_feature_screens:"\xC9crans en direct : couleur de l'appli et pochette du lecteur multim\xE9dia, r\xE8gles d'images, images en direct des cam\xE9ras sur les \xE9crans",pro_locked:"Cette fonction est un module Pro. Apr\xE8s l'achat, elle appara\xEEt sous Extensions \u203A Connexion \xE0 la boutique et s'installe depuis l\xE0.",pro_shop:"Vers la boutique",pack_licensed:"Sous licence pour {name}",pack_remove:"Retirer",pack_remove_confirm:"Retirer le pack \xAB {name} \xBB ? Ses meubles restent dans le plan sous forme de simples blocs.",pack_missing_item:"Meuble d'un pack retir\xE9",pack_error_bad_signature:"Le pack a \xE9t\xE9 modifi\xE9 ou sa signature est invalide.",pack_error_unknown_publisher:"Ce pack ne provient pas d'un \xE9diteur connu.",pack_error_unsigned:"Le pack n'est pas sign\xE9.",pack_error_not_a_pack:"Ce n'est pas un fichier de pack de meubles.",pack_error_invalid_content:"Le pack contient des meubles invalides : {detail}",pack_error_too_large:"Le fichier est trop volumineux.",pack_error_other:"\xC9chec de l'import : {detail}",back_to_room:"Retour \xE0 {room}",back_to_floor:"Retour \xE0 l'\xE9tage",hint_furniture:"Touchez une pi\xE8ce, puis choisissez un \xE9l\xE9ment \xE0 droite \xB7 faites glisser les \xE9l\xE9ments, redimensionnez-les par leurs angles",furniture_into:"Les nouveaux \xE9l\xE9ments arrivent au milieu de \xAB {room} \xBB.",furniture_pick_room:"Astuce : touchez d'abord une pi\xE8ce \u2013 les nouveaux \xE9l\xE9ments arrivent alors en son milieu.",flows:"Flux d'\xE9nergie",flows_hint:"Afficher ou masquer les lignes lumineuses du compteur vers les consommateurs",flow_on:"activ\xE9",flow_off:"d\xE9sactiv\xE9",hint_opening:"Touchez un mur pour ajouter une porte ou une fen\xEAtre \u2013 choisissez ensuite son type \xE0 droite",preset_door:"Porte",preset_door_double:"Porte double",preset_window:"Fen\xEAtre",preset_window_double:"Fen\xEAtre double",preset_terrace:"Porte de terrasse",preset_terrace_double:"Porte-fen\xEAtre double",preset_garage:"Porte de garage",preset_front:"Porte d'entr\xE9e",opening_style:"Style",style_auto:"Automatique ({style})",style_interior:"Porte int\xE9rieure",style_front:"Porte d'entr\xE9e",style_front_glass:"Porte d'entr\xE9e vitr\xE9e",style_sidelight:"Porte d'entr\xE9e avec imposte lat\xE9rale",style_sidelights:"Porte d'entr\xE9e avec deux impostes lat\xE9rales",style_glass:"Porte vitr\xE9e",style_sliding:"Porte coulissante",style_passage:"Passage (sans porte)",style_standard:"Standard",style_bars:"Avec petits-bois",flip_hinge:"Inverser le c\xF4t\xE9 des charni\xE8res",flip_main_leaf:"Inverser le battant principal",flip_hinge_hint:"Charni\xE8res de l'autre c\xF4t\xE9",flip_swing:"Inverser le sens d'ouverture",flip_swing_hint:"La porte s'ouvre vers la pi\xE8ce ou de l'autre c\xF4t\xE9",main_leaf:"Battant principal (vu de la pi\xE8ce)",contact_main:"Contact battant principal",contact_second:"Contact second battant",tool_outdoor:"Ext\xE9rieur",tool_measure:"Par cotes",hint_measure:"Touchez le point de d\xE9part, puis saisissez \xE0 droite les longueurs de mur avec leur direction",measure:"Pi\xE8ce par cotes",measure_start:"Touchez le point de d\xE9part dans le plan, p. ex. un angle de pi\xE8ce.",measure_from:"D\xE9part \xE0 {x} / {z} m \u2013 toucher d\xE9place le d\xE9part.",measure_length:"Longueur du mur suivant (m)",measure_close:"Fermer la pi\xE8ce",measure_undo:"Retirer le dernier mur",measure_gap:"\xC9cart au d\xE9part : {gap} m (combl\xE9 \xE0 la fermeture)",measure_hint:"Astuce : saisissez une longueur et appuyez sur une fl\xE8che. Avec des cotes int\xE9rieures, utilisez ensuite \xAB Combler les \xE9carts \xBB.",rect_by_size:"Rectangle par dimensions",rect_add:"Ajouter le rectangle",dir_up:"Haut",dir_down:"Bas",dir_left:"Gauche",dir_right:"Droite",hint_outdoor:"Faites glisser pour dessiner un espace ext\xE9rieur (pelouse, terrasse, piscine \u2026)",outdoor:"Espace ext\xE9rieur",outdoor_type:"Type",outdoor_hint:"Les \xE9clairages ext\xE9rieurs (borne, spot de jardin, applique ext\xE9rieure) \xE9clairent tous les espaces ext\xE9rieurs et la fa\xE7ade.",out_lawn:"Pelouse",out_terrace:"Terrasse",out_path:"All\xE9e",out_driveway:"Acc\xE8s voiture",out_pool:"Piscine",out_bed:"Parterre",out_hedge:"Haie",out_fence:"Cl\xF4ture",north:"Nord (\xB0 dans le sens horaire depuis le haut)",north_hint:"Le nord est n\xE9cessaire pour le soleil (lumi\xE8re par les fen\xEAtres).",roof:"Toit",roof_none:"Pas de toit",roof_flat:"Toit plat",roof_gable:"Toit \xE0 deux pans",roof_custom:"Sections de toit (personnalis\xE9)",roof_sections:"Sections de toit",roof_sections_hint:"Chaque section de toit couvre un rectangle de la maison, p. ex. la maison, la grange ou une extension \u2013 chacune avec sa propre forme, direction de fa\xEEtage, hauteur d'\xE9gout et pente. Faites glisser dans le plan pour en dessiner une nouvelle ; toucher la s\xE9lectionne, glisser la d\xE9place, les angles la redimensionnent.",roof_sections_start:"Cr\xE9er des sections de toit \xE0 partir des pi\xE8ces",roof_sections_regen:"Recr\xE9er \xE0 partir des pi\xE8ces",roof_sections_off:"Revenir \xE0 un seul toit",roof_regen_confirm:"Remplacer toutes les sections de toit par une nouvelle proposition \xE0 partir des pi\xE8ces ?",roof_section:"Section de toit",roof_section_hint:"Les hauteurs se comptent depuis le sol. Un c\xF4t\xE9 avec un \xE9gout plus bas descend plus loin (toit asym\xE9trique) ; les toits monopentes montent depuis le premier c\xF4t\xE9.",roof_shape_gable:"Deux pans",roof_shape_hip:"Quatre pans",roof_shape_pent:"Monopente",roof_shape_flat:"Plat",roof_axis_x:"Fa\xEEtage \u2194",roof_axis_z:"Fa\xEEtage \u2195",roof_eave:"\xC9gout (m)",roof_pitch_short:"Pente (\xB0)",roof_height:"Hauteur (m)",roof_base:"Haut des murs (m)",roof_ridge_height:"Hauteur du fa\xEEtage",roof_side_top:"haut",roof_side_bottom:"bas",roof_side_left:"gauche",roof_side_right:"droite",roof_swap:"Inverser les c\xF4t\xE9s",roof_open:"Auvent (poteaux au lieu de murs, transparent)",roof_open_short:"Auvent",roof_open_hint:"Pour une toiture de terrasse ou un carport : des poteaux et des poutres portent le toit \xE0 la place des murs, et il est transparent. L\xE0 o\xF9 l'auvent touche le mur de la maison, il repose sur le mur.",roof_swap_hint:"Retourne le toit : les deux c\xF4t\xE9s \xE9changent \xE9gout et pente, un toit monopente monte dans l'autre sens.",roof_pitch:"Pente du toit (\xB0)",roof_overhang:"D\xE9bord de toit (m)",roof_ridge:"Fa\xEEtage",roof_ridge_long:"Le long du grand c\xF4t\xE9",roof_ridge_short:"Le long du petit c\xF4t\xE9 (p. ex. maison mitoyenne)",device:"Appareil",lamp_mount:"Luminaire",lamp_ceiling:"Plafonnier",lamp_floor:"Lampadaire",lamp_table:"Lampe de table",lamp_wall:"Applique murale",marker_height:"Hauteur du marqueur (m)",height_auto:"Hauteur automatique",device_centre:"Au centre de la pi\xE8ce",lights_spread:"R\xE9partir les plafonniers r\xE9guli\xE8rement",devices_search:"Rechercher des appareils \u2026",devices_more:"+{n} de plus",devices_less:"moins",panel_more:"Autres appareils de la pi\xE8ce HA ({n})",panel_less:"Afficher moins",gaps_close:"Combler les \xE9carts",gaps_hint:"Joint les pi\xE8ces distantes de 60 cm au plus par un mur commun ; l'\xE9cart devient l'\xE9paisseur du mur int\xE9rieur.",gaps_none:"Aucun \xE9cart entre les pi\xE8ces trouv\xE9.",gaps_closed:"{n} endroits combl\xE9s.",gaps_closed_wall:"{n} endroits combl\xE9s, mur int\xE9rieur d\xE9sormais de {t} m.",fps:"FPS",fps_title:"Indicateur de performance (images par seconde)",hint_garage:"Touchez un mur pour ajouter une porte de garage",opening_garage:"Porte de garage",garage_hint:"La porte suit un volet de garage (position ou ouvert/ferm\xE9) ou un contact de porte de garage de la pi\xE8ce HA.",door_hint:"Avec un contact de porte, le battant s'ouvre ; sans capteur, il reste entrouvert.",hint_door:"Touchez un mur pour ajouter une porte",hint_window:"Touchez un mur pour ajouter une fen\xEAtre",opening_door:"Porte",opening_window:"Fen\xEAtre",opening_type:"Type",opening_position:"Centre depuis l'angle (m)",sill:"Hauteur d'all\xE8ge (m)",opening_height:"Hauteur (m)",hinge:"Charni\xE8res (vu de la pi\xE8ce)",hinge_left:"Gauche",hinge_right:"Droite",cover_entity:"Volet",cover_position_entity:"Capteur de position (en direct)",cover_position_invert:"Le capteur compte dans l'autre sens (0 = ouvert)",contact_entity:"Contact",sensor_kind:"Type de capteur",sensor_kind_contact:"Contact de fen\xEAtre (ouvert/ferm\xE9)",sensor_kind_handle:"Capteur de poign\xE9e (ouvert/bascul\xE9/ferm\xE9)",sensor_kind_contact_tilt:"Contact + capteur d'oscillo-battant",handle_entity:"Capteur de poign\xE9e",handle_main:"Capteur de poign\xE9e battant principal",leaf_main:"Battant principal",leaf_second:"Second battant",tilt_entity:"Capteur d'oscillo-battant",entity_auto:"Automatique ({name})",entity_auto_none:"Automatique (aucun trouv\xE9)",entity_none:"Aucun",entity_search:"Tapez pour rechercher \u2026",opening_hint:"Type de capteur : contact de fen\xEAtre (signale ouvert/ferm\xE9), capteur de poign\xE9e (signale ouvert, bascul\xE9 et ferm\xE9 \u2013 p. ex. une poign\xE9e Homematic) ou contact + capteur d'oscillo-battant (un second capteur qui ne signale que bascul\xE9). Automatique utilise les volets et contacts de la pi\xE8ce HA. Capteur de position : une entit\xE9 qui indique la position du volet pendant son mouvement (p. ex. un \xAB level \xBB Homematic, 0\u2013100 % ou 0\u20131, ouvert = haut) \u2013 le volet bouge alors en direct en 3D.",furniture:"Meubles",furniture_add:"Ajouter un meuble",furniture_search:"Rechercher un meuble \u2026",furniture_type:"\xC9l\xE9ment",rotation:"Rotation (\xB0)",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Hauteur (m)",furn_sofa:"Canap\xE9",furn_armchair:"Fauteuil",furn_table:"Table",furn_chair:"Chaise",furn_bed:"Lit",furn_nightstand:"Table de chevet",furn_wardrobe:"Armoire",furn_shelf:"\xC9tag\xE8re",furn_kitchen:"Meuble de cuisine",furn_worktop:"Plan de travail",furn_fridge:"R\xE9frig\xE9rateur",furn_fridge_smart:"R\xE9frig\xE9rateur connect\xE9 (am\xE9ricain)",furn_door_left:"Capteur de porte gauche (c\xF4t\xE9 cong\xE9lateur)",furn_door_right:"Capteur de porte droite (c\xF4t\xE9 r\xE9frig\xE9rateur)",fridge_hint:"Tant qu'un capteur de porte signale \xAB ouvert \xBB, la porte s'ouvre en 3D. L'\xE9cran de la porte droite affiche des images selon des r\xE8gles comme un t\xE9l\xE9viseur \u2013 tant que cette porte est ferm\xE9e.",furn_stove:"Cuisini\xE8re",furn_sink:"\xC9vier",furn_bathtub:"Baignoire",furn_shower:"Douche",furn_wc:"WC",furn_washbasin:"Lavabo",furn_desk:"Bureau",furn_tv_board:"Meuble TV",furn_plant:"Plante",furn_rug:"Tapis",furn_stairs:"Escalier",furn_stairwell:"Tr\xE9mie",stairwell_hint:"Un trou dans ce plancher, par exemple au-dessus de l'escalier ou pour une mezzanine ; d'en haut, on voit au travers. La tr\xE9mie doit se trouver dans une seule pi\xE8ce ; plusieurs tr\xE9mies peuvent se chevaucher (pour une forme en L, par exemple). Un escalier de l'\xE9tage inf\xE9rieur qui monte jusqu'ici ouvre aussi le plancher de lui-m\xEAme.",tool_hole:"Tr\xE9mie",tool_roof:"Toit",tool_energy:"\xC9nergie",tool_wall:"Mur",hint_wall:"Faites glisser pour dessiner un mur isol\xE9 (cloison, muret) \xB7 Maj le garde droit \xB7 Alt sans magn\xE9tisme",free_wall:"Mur",wall_length:"Longueur (m)",wall_thickness:"\xC9paisseur du mur (m)",wall_height:"Hauteur (m)",wall_height_full:"Toute la hauteur de la pi\xE8ce",wall_heights:"Hauteurs des murs",wall_n:"Mur {a}\u2013{b}",wall_exterior_short:"mur ext\xE9rieur",room_wall_hint:"Une hauteur plus faible transforme le mur en muret ou en comptoir. Si deux pi\xE8ces partagent le mur, le r\xE9glage le plus bas s'applique. Les fen\xEAtres et portes qui s'y trouvent s'arr\xEAtent \xE0 la hauteur du mur.",free_wall_hint:"Un mur ind\xE9pendant, p. ex. une cloison. L\xE0 o\xF9 il rejoint un mur de pi\xE8ce, l'angle est raccord\xE9. Faites glisser les poign\xE9es pour d\xE9placer ses extr\xE9mit\xE9s, la ligne pour d\xE9placer tout le mur.",stairwell_outside:"Cette tr\xE9mie d\xE9passe la limite d'une pi\xE8ce et n'est donc pas d\xE9coup\xE9e. D\xE9placez-la enti\xE8rement dans une pi\xE8ce ou r\xE9duisez-la.",hint_hole:"Faites glisser pour dessiner une tr\xE9mie (cage d'escalier, mezzanine)",hint_roof:"Faites glisser pour dessiner une section de toit \xB7 toucher s\xE9lectionne \xB7 glisser d\xE9place \xB7 les angles redimensionnent",hint_energy:"Touchez un champ solaire pour le s\xE9lectionner \xB7 faites-le glisser pour le d\xE9placer, aussi sur un autre pan de toit \xB7 nouveaux champs avec + Champ solaire \xE0 droite",furn_parking:"Place de parking",furn_group_vehicles:"Parking",parking_entity:"Capteur \xAB voiture pr\xE9sente \xBB",parking_vehicle:"V\xE9hicule",parking_vehicle_none:"Aucun",parking_no_pack:"Aucun pack de v\xE9hicules import\xE9 \u2013 les v\xE9hicules viennent du pack \xAB V\xE9hicules \xBB (Meubles \u2192 Importer des packs de meubles).",parking_scale:"Taille (%)",parking_type_entity:"Capteur de type de v\xE9hicule (facultatif)",parking_types:"\xC9tat \u2192 v\xE9hicule",parking_type_state:"\xC9tat (p. ex. van)",parking_add_type:"+ Correspondance",parking_hint:"Sans capteur, le v\xE9hicule est toujours l\xE0. Avec un capteur, il appara\xEEt d\xE8s que celui-ci signale \xAB on \xBB, \xAB home \xBB ou \xAB present \xBB. Un capteur de type de v\xE9hicule (p. ex. issu d'une analyse IA de cam\xE9ra) choisit le mod\xE8le : si son \xE9tat correspond \xE0 une correspondance \u2013 m\xEAme comme mot dans le texte \u2013 ce v\xE9hicule est affich\xE9, sinon celui par d\xE9faut.",parking_too_tall:"Le v\xE9hicule ({car} m) est plus haut que la pi\xE8ce ({room} m).",furn_lamp_ceiling:"Plafonnier",furn_lamp_downlight:"Spot encastr\xE9",furn_lamp_spot:"Spot en saillie",furn_lamp_panel:"Panneau LED",furn_lamp_uplight:"Spot de sol",furn_lamp_bollard:"Borne d'\xE9clairage",furn_lamp_garden:"Spot de jardin",furn_radiator:"Radiateur",furn_robot_vacuum:"Robot aspirateur",furn_entity_vacuum:"Robot aspirateur",furn_robot_room:"Pi\xE8ce actuelle (capteur)",robot_hint:"Pendant que le robot nettoie dans Home Assistant, il parcourt en 3D des bandes dans la pi\xE8ce qu'il signale (un capteur \xAB pi\xE8ce actuelle \xBB, compar\xE9 au nom de la pi\xE8ce ou de la pi\xE8ce HA), sinon dans la pi\xE8ce de sa base. Le trajet est simul\xE9 \u2013 Home Assistant ne conna\xEEt g\xE9n\xE9ralement pas la position exacte. Il retourne \xE0 sa base quand il rentre.",furn_lamp_pendant:"Suspension",furn_lamp_floor:"Lampadaire",furn_lamp_table:"Lampe de table",furn_lamp_wall:"Applique murale",furn_led_strip:"Ruban LED",furn_group_lights:"\xC9clairage",furn_entity_light:"Lumi\xE8re ou interrupteur",furn_entity_climate:"Chauffage (thermostat)",lamp_hint:"Touchez le luminaire en 3D pour le commuter, appui long pour le menu rapide. Les interrupteurs fonctionnent aussi (p. ex. un relais pour le plafonnier) \u2013 le luminaire brille tant qu'il est allum\xE9. Les lampes de table se posent sur le meuble en dessous.",lamp_hint_pendant:"Hauteur = suspension sous le plafond. Touchez en 3D pour commuter, appui long pour les d\xE9tails.",theme:"Apparence",theme_neon:"N\xE9on",theme_blueprint:"Plan bleu",theme_day:"Jour",furnish:"Meubler",split_3d:"3D \xE0 c\xF4t\xE9",mount_height:"Hauteur au-dessus du sol (m)",side_open:"Ouvrir la barre lat\xE9rale",side_close:"Fermer",side_details:"D\xE9tails de la s\xE9lection",side_pin:"\xC9pingler",side_pinned:"\xC9pingl\xE9e",side_pin_hint:"\xC9pingl\xE9e, la barre lat\xE9rale reste ouverte ; sinon elle se replie \xE0 c\xF4t\xE9 de la vue 3D tant que rien n'est s\xE9lectionn\xE9",split_3d_hint:"3D en direct \xE0 c\xF4t\xE9 du plan : d\xE9placez et tournez-y meubles et appareils \u2013 avec annulation, enregistr\xE9 avec le plan",size_w:"Largeur (m)",size_d:"Profondeur (m)",size_h:"Hauteur (m)",furnish_hint:"Faites glisser meubles, luminaires et appareils \xB7 les meubles s'aimantent aux murs \xB7 touchez-en un pour le tourner, r\xE9gler sa hauteur et son montage",done:"Termin\xE9",heatmap:"Carte thermique",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humidit\xE9",heat_short_co2:"CO\u2082",heat_temperature:"Temp\xE9rature",heat_humidity:"Humidit\xE9",heat_co2:"CO\u2082",heat_none_found:"Aucun capteur adapt\xE9 dans les pi\xE8ces HA des pi\xE8ces.",markers:"Marqueurs",markers_none:"Aucun",markers_important:"Importants",markers_all:"Tous",furn_stool:"Tabouret",furn_coffee_table:"Table basse",furn_tv_wall:"TV (murale)",furn_sideboard:"Buffet",furn_table_round:"Table ronde",furn_bench:"Banc",furn_corner_bench:"Banquette d'angle",furn_bar_stool:"Tabouret de bar",furn_kitchen_wall:"Meuble haut",furn_kitchen_tall:"Colonne avec four",furn_island:"\xCElot central",furn_dishwasher:"Lave-vaisselle",furn_bunk_bed:"Lits superpos\xE9s",furn_dresser:"Commode",furn_washer:"Lave-linge",furn_dryer:"S\xE8che-linge",furn_office_chair:"Chaise de bureau",furn_tall_cabinet:"Armoire haute",furn_coat_rack:"Portemanteau",furn_group_living:"S\xE9jour",furn_group_dining:"Repas",furn_group_energy:"\xC9nergie et solaire",energy_devices:"Appareils",solar_pro_title:"Solar & Energy Pro",solar_pro_soon:"bient\xF4t disponible",solar_pro_1:"Des modules qui s'animent au soleil et brillent selon leur production",solar_pro_2:"De fines lignes de flux d'\xE9nergie \xE0 travers la maison : d'o\xF9 vient le courant et o\xF9 il va",solar_pro_3:"Un hologramme de verre avec la puissance, la courbe du jour, la production du jour et l'autosuffisance",solar_pro_4:"Les valeurs par string sur le toit, la batterie, la borne de recharge et le r\xE9seau en un coup d'\u0153il",solar_pro_free:"Tout ce que vous configurez ici (champs, strings, appareils, capteurs) reste gratuit et sera utilis\xE9 directement par le module Pro.",wallbox_charging:"en charge",wallbox_plugged:"branch\xE9e",furn_soc:"\xC9tat de charge (%)",furn_wallbox_status:"Statut (en charge, branch\xE9e)",energy_only_note:"\u26A1 \xC9nergie : seuls les champs solaires et les appareils d'\xE9nergie peuvent \xEAtre d\xE9plac\xE9s ici ; les pi\xE8ces et les meubles sont verrouill\xE9s.",roof_only_note:"\u{1F3E0} Toit : seules les sections de toit et les fen\xEAtres de toit peuvent \xEAtre d\xE9plac\xE9es ici ; les pi\xE8ces et les meubles sont verrouill\xE9s.",energy_devices_hint:"Onduleurs, batteries domestiques et bornes de recharge s'ajoutent ici : sur l'\xE9tage choisi ci-dessus, d\xE9pla\xE7ables dans le plan. Avec un capteur de puissance, ils affichent leurs watts ; un string choisit son onduleur.",solar_fields:"Champs solaires",solar_hint:"Placez des modules sur le toit : ils suivent la pente du pan de toit ; sur un toit plat, ils reposent sur des supports. Faites glisser un champ dans le plan pour le d\xE9placer.",solar_no_roof:"Les champs solaires n\xE9cessitent un toit : un toit \xE0 deux pans ou plat dans R\xE9glages, ou des sections de toit ici dans l'outil Toit.",solar_face_gone:"pan de toit manquant",solar_summary:"{n} modules \xB7 {kwp} kWc",solar_add:"Champ solaire",solar_field:"Champ solaire",solar_face:"Pan de toit",solar_rows:"Rang\xE9es",solar_cols:"Modules par rang\xE9e",solar_portrait:"Portrait",solar_landscape:"Paysage",solar_u:"Distance au bord (m)",solar_v:"Distance \xE0 l'\xE9gout (m)",solar_tilt:"Inclinaison des supports (\xB0)",solar_flip:"Incliner dans l'autre sens",solar_partial:"seulement {n} sur {total} tiennent sur le pan",solar_form_hint:"Les modules qui d\xE9passeraient du pan de toit sont omis. \xAB Remplir le pan \xBB place autant de modules que possible sur le toit. kWc calcul\xE9s avec 400 W par module.",solar_fit:"Remplir le pan",roof_windows:"Fen\xEAtres de toit",roof_window:"Fen\xEAtre de toit",roof_windows_hint:"Les fen\xEAtres de toit s'int\xE8grent au pan de toit, avec volet et contacts comme les fen\xEAtres. Faites-les glisser dans le plan, aussi sur un autre pan de toit.",roof_window_tilt:"Contact d'entreb\xE2illement",roof_window_hint:"Ouvert, l'ouvrant pivote vers l'ext\xE9rieur, articul\xE9 en haut ; entreb\xE2ill\xE9, un peu ; le volet descend sur la vitre depuis le haut.",solar_ground:"Au sol (jardin, toit de garage \u2026)",solar_add_ground:"Au sol",solar_base:"Hauteur de la surface (m, 0 = sol)",solar_add_wall:"Sur un mur",solar_wall:"Mur",solar_v_wall:"Hauteur au-dessus du sol (m)",solar_tilt_wall:"Inclinaison par rapport au mur (\xB0, 90 = auvent)",solar_flip_wall:"\xC9cart\xE9 en bas plut\xF4t qu'en haut",solar_rotation:"Rotation (\xB0)",solar_name:"Nom",solar_name_hint:"p. ex. string 1 sud",solar_module_w:"Largeur du module (m)",solar_module_h:"Hauteur du module (m)",solar_string:"String",solar_strings:"Strings",solar_string_none:"Aucun string",solar_string_new:"Nouveau string",solar_string_n:"String {n}",solar_string_name:"Nom du string",solar_string_entity:"Puissance PV du string",solar_string_inverter:"Onduleur",solar_string_inverter_none:"Aucun onduleur choisi",solar_string_inverter_missing:"Aucun onduleur dans le plan pour l'instant (ajoutez-en un ci-dessous sous Appareils)",solar_string_hint:"Les champs d'un m\xEAme string vont ensemble, m\xEAme sur des toits diff\xE9rents (p. ex. 5 modules sur la maison et 5 sur le garage). Le capteur et l'onduleur valent pour tout le string.",solar_string_sum:"{fields} champs \xB7 {n} modules \xB7 {kwp} kWc",solar_face_size:"Pan de toit {w} \xD7 {h} m (le long de l'\xE9gout \xD7 dans la pente)",solar_cols_hint:"Un nombre pour des rang\xE9es de m\xEAme longueur, ou une liste pour des rang\xE9es de longueur propre : \xAB 4, 4, 3 \xBB (depuis l'\xE9gout).",solar_align_left:"Gauche",solar_align_center:"Centre",solar_align_right:"Droite",solar_look_black:"Full black",solar_look_blue:"Bleu",solar_pick:"Activer/retirer les modules un par un",solar_pick_all:"Tout r\xE9activer",solar_pick_hint:"Touchez un module dans le plan pour le retirer ou le remettre. Les modules retir\xE9s sont en pointill\xE9s.",solar_entity:"Puissance PV de ce champ (p. ex. son string)",solar_main:"Toit principal",solar_section:"Section {n}",solar_flat:"toit plat",compass_n:"nord",compass_ne:"nord-est",compass_e:"est",compass_se:"sud-est",compass_s:"sud",compass_sw:"sud-ouest",compass_w:"ouest",compass_nw:"nord-ouest",furn_inverter:"Onduleur solaire",furn_home_battery:"Batterie domestique",furn_wallbox:"Borne de recharge",furn_group_kitchen:"Cuisine",furn_group_sleeping:"Chambre",furn_group_bath:"Bain et buanderie",furn_group_work:"Travail et divers",furn_entity:"Appareil (interrupteur, prise \u2026)",furn_entity_tv:"TV (lecteur multim\xE9dia ou prise connect\xE9e)",fix:"Fixer",unfix:"Lib\xE9rer",fix_hint:"Fix\xE9 : ne peut plus \xEAtre d\xE9plac\xE9 par accident (touche L, clic droit ou appui long)",fixed_drag_hint:"\u{1F512} Fix\xE9 \u2013 lib\xE9rez-le d'abord pour le d\xE9placer (cadenas dans le formulaire, clic droit ou touche L)",fixed_delete_confirm:"Cet \xE9l\xE9ment est fix\xE9. Le supprimer quand m\xEAme ?",lock_plan:"\u{1F512} Plan",lock_plan_hint:"Verrouiller le plan : pi\xE8ces, murs, portes, fen\xEAtres et espaces ext\xE9rieurs ne peuvent plus \xEAtre d\xE9plac\xE9s par accident. Les meubles et appareils restent libres.",ctx_rotate:"Tourner de 90\xB0",devices_placed_in:"dans {room}",devices_narrow:"{n} de plus \u2013 affinez la recherche",climate:"Climat de la pi\xE8ce",climate_temperature:"Temp\xE9rature",climate_humidity:"Humidit\xE9",climate_co2:"CO\u2082",climate_hint:"Ces capteurs comptent pour la carte thermique et le panneau de la pi\xE8ce. \xAB Automatique \xBB prend les capteurs de la pi\xE8ce HA et ceux plac\xE9s dans la pi\xE8ce, mais aucune temp\xE9rature d'appareil (imprimante 3D, pompe \xE0 chaleur, d\xE9part \u2026).",plan_locked:"Plan verrouill\xE9",plan_lock:"Verrouiller le plan",plan_unlock:"D\xE9verrouiller le plan",opening_mark:"Mettre en \xE9vidence en 3D",opening_mark_open:"Quand ouvert",opening_mark_closed:"Quand ferm\xE9 (p. ex. WC)",opening_mark_hint:"Une fen\xEAtre ou une porte mise en \xE9vidence brille d'une lueur chaude. \xAB Quand ferm\xE9 \xBB n\xE9cessite un contact ; sans capteur, rien n'est mis en \xE9vidence.",marker_show:"Marqueur en 3D",marker_show_hint:"Automatique suit le choix Aucun / Importants / Tous de la vue 3D. Toujours afficher et Masquer s'appliquent quoi qu'il arrive (sauf avec Aucun).",marker_show_auto:"Automatique",marker_show_always:"Toujours afficher",marker_show_no_power:"Sans watts",marker_show_never:"Masquer",furn_power:"Capteur de puissance (W)",furn_links_hint:"Avec un capteur de puissance, l'\xE9l\xE9ment affiche ses watts et re\xE7oit un c\xE2ble d'\xE9nergie.",screen_pictures:"Images selon l'\xE9tat",screen_pictures_hint:"L'\xE9tat ou un attribut de l'entit\xE9 est compar\xE9 (p. ex. app_name d'un t\xE9l\xE9viseur). Une valeur correspond si elle est \xE9gale ou contenue dans le texte (\xAB youtube \xBB correspond \xE0 \xAB com.google.android.youtube.tv \xBB) ; \xAB * \xBB = toujours. La premi\xE8re r\xE8gle qui correspond l'emporte. Les images sont enregistr\xE9es r\xE9duites \xE0 512 px ; une URL d'image ou une cam\xE9ra fonctionne aussi \u2013 l'image en direct d'une cam\xE9ra est rafra\xEEchie toutes les 5 secondes tant qu'elle est affich\xE9e. Sans r\xE8gle correspondante, l'\xE9cran affiche le lecteur multim\xE9dia.",picture_state:"est ou contient \u2026 (p. ex. netflix)",picture_state_of:"\xC9tat",picture_attribute:"Comparer l'\xE9tat ou un attribut",picture_pick:"Choisir une image \u2026",picture_change:"Changer l'image \u2026",picture_url:"ou URL d'image",picture_add_value:"+ Valeur",picture_reuse:"Utiliser une image enregistr\xE9e",picture_camera:"ou une cam\xE9ra (image en direct) \u2026",picture_camera_none:"Aucune cam\xE9ra",screen_bg:"\xC9cran derri\xE8re l'image",screen_bg_black:"Sombre",screen_bg_white:"Blanc",picture_add_entity:"+ Autre entit\xE9",picture_current:"actuellement : {value}",picture_matches:"\u2713 correspond maintenant \u2013 cette image s'affiche",furn_links_hint_tv:"L'\xE9cran brille tant que le t\xE9l\xE9viseur est allum\xE9, dans la couleur de l'appli (Netflix, YouTube \u2026) ; l'\xE9tiquette affiche l'appli ou le titre.",stairs_hint:"L'escalier monte vers l'arri\xE8re (\xE0 l'oppos\xE9 du bord avant marqu\xE9) et ouvre le plafond de l'\xE9tage sup\xE9rieur.",floor_lights:"{n} lumi\xE8res allum\xE9es",floor_open:"{n} ouverts",floor_persons:"{n} personnes",energy_consumption:"Consommation",energy_grid_import:"Soutirage r\xE9seau",energy_grid_export:"Injection",energy_solar:"Solaire",energy_battery:"Batterie",energy_tariff:"Tarif",energy:"\xC9nergie",energy_meter:"Compteur",energy_meter_set:"Placer le compteur",energy_meter_remove:"Retirer le compteur",energy_meter_hint:"Touchez dans le plan l'emplacement du compteur ou du raccordement de la maison.",energy_grid:"R\xE9seau (W, + = soutirage)",energy_solar_sensor:"Production solaire (W)",energy_battery_sensor:"Puissance de la batterie (W, + = d\xE9charge)",energy_battery_soc:"Charge de la batterie (%)",energy_tariff_sensor:"Tarif (p. ex. \u20AC/kWh)",energy_invert:"Inverser le signe",energy_hint:"Les consommateurs sont les appareils plac\xE9s avec un capteur de puissance (W) \u2013 le capteur lui-m\xEAme ou un capteur du m\xEAme appareil.",tool_meter:"Compteur",hint_meter:"Touchez l'emplacement du compteur",presence:"Pr\xE9sence",presence_hint:"Capteur de pi\xE8ce par personne (p. ex. ESPresense, Bermuda) : son \xE9tat indique la pi\xE8ce ou la pi\xE8ce HA.",presence_sensor:"Capteur de pi\xE8ce",no_persons:"Il n'y a aucune personne dans Home Assistant.",upstream_update:"Le NeonPlan 3D original a publi\xE9 la version {latest} (cette version fran\xE7aise est bas\xE9e sur la {base}).",upstream_notes:"Notes de version"};var mo={view:"3D",editor:"Editor",all_floors:"Alle Etagen",no_building:"Noch kein Grundriss vorhanden.",no_building_admin:"Noch kein Grundriss vorhanden. Im Editor zeichnest du deine erste Etage.",open_editor:"Editor \xF6ffnen",loading:"L\xE4dt \u2026",load_error:"Laden fehlgeschlagen",saving:"Speichert \u2026",saved:"Gespeichert",save_error:"Speichern fehlgeschlagen",save_failed_detail:"Speichern fehlgeschlagen: {error}. Deine \xC4nderungen bleiben in diesem Browser erhalten.",needs_restart:"Eine neue Version von NeonPlan 3D ist installiert, aber Home Assistant l\xE4uft noch mit {version}. Bitte Home Assistant neu starten \u2013 bis dahin kann das Speichern fehlschlagen.",needs_restart_old:"Eine neue Version von NeonPlan 3D ist installiert, aber Home Assistant l\xE4uft noch mit einer \xE4lteren. Bitte Home Assistant neu starten \u2013 bis dahin schl\xE4gt das Speichern fehl.",needs_reload:"Home Assistant l\xE4uft schon mit NeonPlan 3D {version}, diese Seite aber noch mit {frontend} aus dem Browser-Cache. Bitte die Seite neu laden (Strg+F5); in der Companion-App: Einstellungen \u2192 Companion-App \u2192 Fehlerbehebung \u2192 Frontend-Cache zur\xFCcksetzen.",draft_found:"Nicht gespeicherte \xC4nderungen vom {time} gefunden.",draft_restore:"\xDCbernehmen und speichern",draft_discard:"Verwerfen",walls_auto:"W\xE4nde hoch",walls_cut:"Schnitt",reset_view:"\xDCbersicht",back:"Zur\xFCck",floor:"Etage",floors:"Etagen",add_floor:"Etage hinzuf\xFCgen",floor_from_ha:"Etagen aus Home Assistant:",floor_empty:"Leere Etage",level:"Ebene {n}",ha_floor:"Etage in Home Assistant",no_ha_floor:"\u2013 keine \u2013",area_rooms:"{n} R\xE4ume aus HA-Bereichen anlegen",area_rooms_hint:"Legt f\xFCr jeden Bereich dieser Etage einen Raum an (4 \xD7 3 m) \u2013 danach an die richtige Stelle ziehen und die Ecken anpassen",floor_name:"Name",elevation:"H\xF6he \xFCber Boden (m)",height:"Raumh\xF6he (m)",cut_height:"Schnitth\xF6he (m)",delete_floor:"Etage l\xF6schen",delete_floor_confirm:"Etage \u201E{name}\u201C mit allen R\xE4umen l\xF6schen?",move_up:"Nach oben",move_down:"Nach unten",default_floor:"Erdgeschoss",new_floor:"Etage {n}",tool_select:"Ausw\xE4hlen",tool_rect:"Rechteck",tool_polygon:"Freie Form",undo:"R\xFCckg\xE4ngig",redo:"Wiederholen",fit:"Alles zeigen",room:"Raum",rooms:"R\xE4ume",room_name:"Name",area:"Bereich",no_area:"Kein Bereich",material:"Boden",x:"X (m)",z:"Y (m)",width:"Breite (m)",depth:"Tiefe (m)",points:"Eckpunkte",delete_point:"Punkt l\xF6schen",duplicate:"Duplizieren",delete:"L\xF6schen",new_room:"Raum {n}",settings:"Einstellungen",pendant_shape:"Form",pendant_shade:"Schirm",pendant_globe:"Kugel",pendant_cone:"Kegel",pendant_drum:"Trommel",pkg_open:"Einrichten \u2026",pkg_hint:"Die M\xF6bel kommen an die W\xE4nde des Raums; Leuchten verbinden sich mit den Lichtern des Bereichs. Danach einzeln anpassen \u2013 Strg+Z nimmt alles zur\xFCck.",pkg_done:"{n} M\xF6bel gesetzt \u2013 Strg+Z nimmt es zur\xFCck.",pkg_kitchen_row:"K\xFCchenzeile",pkg_kitchen_row_desc:"Zeile an der R\xFCckwand mit K\xFChlschrank, Backofen, Sp\xFCle, Sp\xFClmaschine und Herd, Oberschrank, Esstisch mit Pendelleuchte",pkg_kitchen_l:"K\xFCche in L-Form",pkg_kitchen_l_desc:"Zeile hinten und links, Kochinsel mit Barhockern",pkg_bath:"Bad",pkg_bath_desc:"Waschtisch, WC, Badewanne, Waschmaschine, Einbauspot",pkg_bedroom:"Schlafzimmer",pkg_bedroom_desc:"Doppelbett mit zwei Nachttischen, Schrank, Kommode, Deckenleuchte",pkg_living:"Wohnzimmer",pkg_living_desc:"TV-Board, Sofa, Couchtisch, Teppich, Sessel, Regal, Stehlampe, Pflanze",pkg_dining:"Esszimmer",pkg_dining_desc:"Esstisch mit vier St\xFChlen, Sideboard, Pendelleuchte",pkg_office:"B\xFCro",pkg_office_desc:"Schreibtisch mit B\xFCrostuhl, zwei Regale, Deckenleuchte",pkg_kids:"Kinderzimmer",pkg_kids_desc:"Einzelbett, Schreibtisch, Regal, Teppich",pkg_hall:"Flur",pkg_hall_desc:"Garderobe, zwei Einbauspots",spots_place:"Spots setzen",spots_type:"Leuchte",spots_cols:"Spalten (links\u2013rechts)",spots_rows:"Reihen (vorne\u2013hinten)",spots_add:"{n} Leuchten setzen",spots_placed:"{n} Leuchten gesetzt.",spots_hint:"Alle Leuchten folgen dem gew\xE4hlten Licht (z. B. Spots an einem Dimmer). Einzeln verschieben und ein anderes Licht w\xE4hlen geht danach wie bei jedem M\xF6bel.",cancel:"Abbrechen",backup:"Sicherung",backup_history:"Wiederherstellungspunkte",backup_none:"Noch keine. Beim Bearbeiten entsteht h\xF6chstens alle 10 Minuten ein Punkt.",backup_summary:"{rooms} R\xE4ume, {furniture} M\xF6bel",backup_restore:"Wiederherstellen",backup_restore_confirm:"Den Stand vom {time} wiederherstellen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_restored:"Wiederhergestellt.",backup_file:"Datei",backup_export:"Exportieren",backup_export_share:"Als Vorlage teilen",backup_export_share_hint:"Ohne Bereiche, Ger\xE4te, Sensoren und Bilder \u2013 zum Weitergeben an andere.",backup_import:"Importieren \u2026",backup_import_confirm:"Den ganzen Grundriss durch die Datei ersetzen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_import_error:"Die Datei ist kein Floorplan-3D-Plan ({error}).",backup_imported:"Importiert.",backup_hint:"Hintergrundbilder sind nicht in der Datei enthalten.",backup_full:"Komplett-Backup",backup_full_export:"Alles sichern (Plan, Bilder, Packs)",backup_full_import:"Komplett-Backup wiederherstellen \u2026",backup_full_hint:"Eine Datei mit dem Plan, allen Hintergrund- und Bildschirmbildern und den installierten Packs. Beim Wiederherstellen wird jedes Pack erneut gepr\xFCft; der Lizenzschl\xFCssel ist nicht enthalten.",backup_full_confirm:"Plan, Bilder und Packs durch das Backup ersetzen? Der aktuelle Stand bleibt als Wiederherstellungspunkt erhalten.",backup_full_not_backup:"Das ist kein Komplett-Backup von NeonPlan 3D.",backup_full_restored:"Backup wiederhergestellt: {packs} Packs, {pictures} Bilder.",backup_full_skipped:"\xDCbersprungen (nicht pr\xFCfbar oder f\xFCr eine andere Installation): {packs}.",export_name_full:"komplett",device_confirm:"Vor dem Schalten nachfragen",device_confirm_hint:"Beim Antippen in 3D, im Schnellmen\xFC und im Raumfenster erscheint erst eine R\xFCckfrage. Doppeltipp auf den Raum l\xE4sst dieses Ger\xE4t aus.",cover_confirm_hint:"Auf, Zu und Positionen fragen im Schnellmen\xFC und im Raumfenster erst nach, und Wischen \xFCber das Symbol bewegt den Rollladen nicht mehr (es dreht dann die Ansicht). Stopp fragt nie.",confirm_switch:"{name} wirklich schalten?",split_handle_hint:"Ziehen: Breite von Plan und 3D-Ansicht",wall_exterior:"Au\xDFenwand (m)",wall_interior:"Innenwand (m)",grid:"Raster (m)",background:"Vorlage (Grundriss-Bild)",background_upload:"Bild w\xE4hlen \u2026",background_width:"Breite im Plan (m)",background_opacity:"Deckkraft",background_remove:"Vorlage entfernen",hint_select:"Raum antippen zum Ausw\xE4hlen \xB7 Ecken ziehen \xB7 \u201E+\u201C auf einer Kante f\xFCgt einen Punkt ein \xB7 Pfeiltasten verschieben \xB7 Entf l\xF6scht \xB7 Strg+Z",hint_rect:"Ziehen, um ein Rechteck zu zeichnen",hint_polygon:"Punkte setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",hint_empty:"Lege zuerst eine Etage an.",area_m2:"{a} m\xB2",overlap_warning:"R\xE4ume \xFCberlappen sich \u2013 die W\xE4nde dort sind unvollst\xE4ndig.",read_only:"Nur Administratoren k\xF6nnen den Grundriss bearbeiten.",mat_wood:"Holz",mat_oak:"Eiche",mat_tiles:"Fliesen",mat_carpet:"Teppich",mat_stone:"Stein",mat_concrete:"Beton",card_name:"NeonPlan 3D",card_description:"Deine Wohnung in 3D (Neon).",stats:"{calls} Draw-Calls \xB7 {tris} Dreiecke",stats_fps:"{fps} B/s (langsamstes Bild {ms} ms)",stats_idle:"Ruhe (0 B/s)",stats_busy_camera:"Kamera",stats_busy_floors:"Etagen",stats_busy_openings:"T\xFCren/Fenster",stats_busy_flash:"Blitz",stats_busy_roof:"Dach",stats_busy_flow:"Stromfluss",stats_busy_effect:"Farbeffekt",stats_busy_robot:"Roboter",stats_busy_orbit:"Kamerafahrt",stats_busy_tint:"Raumfarbe",stats_low:"Stufe Tablet, Pixeldichte {r}",stats_full:"volle Stufe, Pixeldichte {r}",floors_apart:"Auseinander",floors_stacked:"Gestapelt",floor_rooms_one:"1 Raum",floor_rooms:"{n} R\xE4ume",quality:"Qualit\xE4t",quality_auto:"Auto",quality_low:"Tablet",quality_high:"Hoch",state_on:"An",state_off:"Aus",state_open:"Offen",state_closed:"Zu",state_opening:"\xD6ffnet",state_closing:"Schlie\xDFt",state_playing:"Spielt",state_paused:"Pause",state_idle:"Bereit",state_locked:"Verriegelt",state_unlocked:"Entriegelt",state_detected:"Erkannt",state_clear:"Frei",state_unavailable:"Nicht verf\xFCgbar",state_heat:"Heizen",state_cool:"K\xFChlen",state_auto:"Automatik",state_heat_cool:"Heizen/K\xFChlen",state_dry:"Entfeuchten",state_fan_only:"L\xFCften",devices:"Ger\xE4te",devices_none_area:"Verkn\xFCpfe den Raum mit einem Bereich, dann erscheinen dessen Ger\xE4te hier.",devices_none:"Im Bereich gibt es keine passenden Ger\xE4te.",devices_place_all_n:"Alle {n} platzieren \u2026",devices_place_all_confirm:"{n} Ger\xE4te auf einmal in den Raum setzen? (Strg+Z bzw. \u201ER\xFCckg\xE4ngig\u201C nimmt alle in einem Schritt zur\xFCck.)",devices_src_area:"Dieser Bereich",devices_src_other:"Andere Bereiche",devices_src_none:"Ohne Bereich",devices_place:"Platzieren",devices_remove:"Entfernen",devices_hint:"Platzierte Ger\xE4te erscheinen in 3D. Im Plan lassen sie sich verschieben.",panel_lights:"Licht",panel_covers:"Rolll\xE4den",panel_climate:"Heizung",panel_media:"Medien",panel_switches:"Schalter",panel_sensors:"Sensoren",panel_scenes:"Szenen & Skripte",panel_cameras:"Kameras",camera_live:"Livebild \xF6ffnen",through_camera:"Durch die Kamera schauen",through_blend:"\xDCberblendung",through_back:"Zur\xFCck zur Ansicht",camera_mount:"Montage",camera_mount_wall:"Wand (Blickrichtung = Drehung)",camera_mount_ceiling:"Decke (Dome, rundum)",camera_fov:"Sichtwinkel (\xB0)",camera_reach:"Reichweite (m)",camera_fov_short:"Winkel \xB0",camera_reach_short:"Reichweite m",camera_tilt:"Neigung nach unten (\xB0)",camera_tilt_short:"Neigung \xB0",camera_aim_hint:"Im Plan zeigt der Kegel, wohin die Kamera schaut. Der Griff an seiner Spitze dreht die Kamera und setzt die Reichweite.",state_recording:"Nimmt auf",state_streaming:"Streamt",panel_all_off:"Alle aus",panel_no_area:"Dieser Raum ist mit keinem Bereich verkn\xFCpft. Im Editor kannst du ihn verkn\xFCpfen.",panel_empty:"F\xFCr diesen Raum sind keine Ger\xE4te im Grundriss. Im Editor lassen sich Ger\xE4te platzieren oder mit \u2606 f\xFCrs Raumfenster ausw\xE4hlen.",close:"Schlie\xDFen",brightness:"Helligkeit",color_temp:"Farbtemperatur",color:"Farbe",position:"Position",cover_open:"Auf",cover_stop:"Stopp",cover_close:"Zu",target_temp:"Soll",current_temp:"Ist",temp_down:"K\xE4lter",temp_up:"W\xE4rmer",volume:"Lautst\xE4rke",play_pause:"Wiedergabe/Pause",previous:"Zur\xFCck",next:"Weiter",run:"Ausf\xFChren",details:"Details",hold_hint:"Antippen schaltet \xB7 lange dr\xFCcken \xF6ffnet Details",tool_opening:"T\xFCr & Fenster",tool_furniture:"M\xF6bel",qm_off:"Aus",find:"Suchen",find_placeholder:"Wo ist \u2026? Ger\xE4t oder Raum",find_none:"Nichts gefunden",swipe_off:"Aus",panel_pin:"Im Raumfenster zeigen",panel_unpin:"Nicht im Raumfenster zeigen",devices_panel_hint:"Das Raumfenster zeigt die Ger\xE4te im Grundriss. \u2606 nimmt ein Ger\xE4t zus\xE4tzlich ins Raumfenster auf, ohne es zu platzieren.",card_section_view:"Ansicht",card_size:"Gr\xF6\xDFe",card_size_fixed:"Feste H\xF6he",card_size_fill:"Bildschirm f\xFCllen",card_fill_hint:"Am besten in einer Dashboard-Ansicht vom Typ \u201EPanel (1 Karte)\u201C \u2013 dann nimmt die Karte den ganzen Platz ein.",card_controls:"Schalter in der Karte",card_floor_thumbs:"Etagen als Mini-Ansichten",card_floor_thumbs_hint:"Kleine Bilder der Etagen am Rand \u2013 antippen wechselt die Etage",card_floor_thumbs_hint_start:"Die gew\xE4hlte Etage ist dann die Start-Etage \u2013 mit den Bildern am Rand wechselt man zu den anderen",card_room_names:"Raumnamen anzeigen",card_section_kiosk:"Wandtablet (Kiosk)",card_section_features:"Funktionen",card_weather_plan:"wie im Plan eingestellt",card_pro_hint:"Bewegungsspur und Wetter sind Pro-Erweiterungen: ohne die passende Erweiterung bleiben die Schalter wirkungslos.",card_idle_return:"Zur\xFCck zur Startansicht nach",card_idle_off:"Nie",card_idle_min:"{n} min ohne Bedienung",card_idle_hint:"Nach der Wartezeit schlie\xDFt die Karte den Raum und zeigt wieder die Startansicht.",card_night:"Nachtdimmung",card_night_off:"Aus",card_night_sun:"Nach Sonnenstand",card_night_time:"Zeitraum",card_night_range:"Zeitraum (z. B. 22:00-06:00)",card_idle_orbit:"Kamerafahrt als Bildschirmschoner",card_idle_orbit_hint:"Nach der R\xFCckkehr dreht sich die Ansicht langsam, bis jemand das Tablet ber\xFChrt",card_alerts:"Warnungen anzeigen",card_alerts_hint:"Rauch, Gas, CO, Wasser, Alarmanlage und offene Fenster bei Regen: der Raum pulsiert, oben erscheint ein Hinweis",card_alert_jump:"Bei neuer Warnung zum Raum springen",card_alert_jump_hint:"Die Ansicht wechselt selbst zur Etage und zum Raum der Warnung",card_scenes:"Szenen-Kn\xF6pfe im Raum",card_scenes_hint:"Szenen und Skripte des Bereichs als Kn\xF6pfe unter der 3D-Ansicht, wenn ein Raum gew\xE4hlt ist",card_motion_trail:"Bewegungsspur",card_motion_trail_hint:"Wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit (Bewegungs-, Pr\xE4senz- und Kamerasensoren)",trail_short:"Spur",weather_short:"Wetter",weather_entity:"Wetter-Entit\xE4t",weather_effects:"Wetter-Effekte in 3D",weather_effect_rain:"Regen",weather_effect_snow:"Schnee",weather_effect_fog:"Nebel (graut die Szene ein)",weather_effect_clouds:"Wolken dunkeln Himmel und Sonne ab",weather_effect_lightning:"Blitze bei Gewitter",weather_effect_sky:"Sonne und Mond am Himmel",rain_warning:"Warnung: Fenster offen bei Regen",weather_entity_hint:"Die Wetter-Entit\xE4t liefert Regen, Schnee, Nebel und Wolken f\xFCr die 3D-Ansicht; \u201Eautomatisch\u201C nimmt die erste.",weather_hint:"Wetter drau\xDFen: Regen, Schnee, Nebel und Wolken aus der Wetter-Entit\xE4t, Sonne und Mond nach sun.sun",card_weather:"Wetter drau\xDFen",card_weather_hint:"Regen, Schnee, Nebel und Wolken aus der ersten Wetter-Entit\xE4t (weather_entity w\xE4hlt eine andere); auf Stufe Tablet nur die Bew\xF6lkung",trail_hint:"Bewegungsspur: wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit",alerts:"Warnungen",alert_smoke:"Rauch: {name}",alert_gas:"Gas: {name}",alert_co:"Kohlenmonoxid: {name}",alert_water:"Wasser: {name}",alert_alarm:"Alarm ausgel\xF6st",alert_alarm_pending:"Alarm wird ausgel\xF6st",alert_window_rain:"Fenster offen bei Regen: {name}",room_names_short:"Raumnamen",floor_stack_short_dim:"Abgedunkelt",floor_stack_short_stacked:"Gestapelt",floor_stack_short_single:"Einzeln",size_short_w:"B",size_short_d:"T",size_short_h:"H",import_error_not_json:"Die Datei ist kein JSON.",import_error_not_plan:"Die Datei ist kein Floorplan-3D-Plan.",export_name_template:"vorlage",export_name_backup:"sicherung",card_floor_stack:"Etagen darunter",floor_stack_dim:"Abgedunkelt",floor_stack_stacked:"Gestapelt (ganzes Haus bis hier)",floor_stack_single:"Ausgeblendet (nur diese Etage)",card_control_walls:"W\xE4nde hoch/Schnitt",card_control_floors:"Etagen auseinander",card_control_temperature:"Temperatur",card_control_humidity:"Feuchte",card_control_co2:"CO\u2082",card_controls_hint:"W\xE4nde hoch/Schnitt, Etagen auseinander und Temperatur, Feuchte, CO\u2082 zum Umschalten",card_fullscreen_button:"Vollbild-Taste",card_fullscreen_button_hint:"Blendet das Dashboard drumherum aus (z. B. am Wandtablet)",fullscreen:"Vollbild",fullscreen_exit:"Vollbild beenden",card_section_show:"Anzeigen",card_floor:"Etage",card_floor_house:"Ganzes Haus (Etage antippen zum \xD6ffnen)",card_height:"H\xF6he (Pixel)",card_walls:"W\xE4nde",card_quality_hint:"\u201ETablet\u201C ist die sparsamste Stufe \u2013 ideal f\xFCr Fire-Tablets und andere Wandtablets.",card_flows_switch:"Schalter in der Karte",card_flows_on:"Immer an",card_flows_off:"Immer aus",card_energy:"Energiewerte oben anzeigen",card_room_panel:"Raum-Details beim Antippen",card_room_panel_hint:"Lichter, Rolll\xE4den und Kameras des Raums in einem Seitenfenster",card_explode:"Etagen in der Hausansicht auseinanderziehen",card_stats:"Leistungsanzeige (Bilder pro Sekunde)",card_stats_hint:"Zum Pr\xFCfen, wie fl\xFCssig die Karte auf dem Ger\xE4t l\xE4uft",packs:"M\xF6bel-Packs",packs_hint:"Nur unterschriebene Packs des Herausgebers lassen sich importieren.",lib_badge_light:"Leuchte: l\xE4sst sich mit einem Licht verkn\xFCpfen und in 3D schalten",lib_badge_electric:"Elektrisch: l\xE4sst sich mit Entit\xE4t und Leistungssensor verkn\xFCpfen (schalten, Bild, Verbrauch)",lib_badge_hint:"M\xF6bel mit Symbol lassen sich mit Entit\xE4ten verkn\xFCpfen: Leuchten schalten, Bildschirme zeigen Bilder, Ger\xE4te ihren Verbrauch.",pack_error_wrong_instance:"Dieses Pack ist f\xFCr eine andere Home-Assistant-Installation signiert. Im Shop-Konto l\xE4sst es sich f\xFCr diese Installation neu laden.",license_title:"Shop-Verbindung",license_instance:"Installations-Kennung",license_copy:"Kopieren",license_copied:"Kennung kopiert",license_activate:"Aktivieren",license_activated:"Verbunden \u2013 die gekauften Packs stehen unten.",license_active:"Verbunden als {name} (Schl\xFCssel {key})",license_checked:"zuletzt gepr\xFCft {time}",license_refresh:"Jetzt pr\xFCfen",license_refreshed:"Gepr\xFCft.",license_remove:"Trennen",license_remove_confirm:"Shop-Verbindung trennen? Installierte Packs bleiben, nur Updates kommen nicht mehr von selbst.",license_installed:"installiert \xB7 v{release}",license_update_available:"Update auf v{release} verf\xFCgbar",license_not_installed:"noch nicht installiert",license_install:"Installieren",license_update:"Aktualisieren",license_none:"Noch keine Packs im Konto.",license_hint:"Den Lizenzschl\xFCssel findest du in der Bestellung und im Kundenkonto auf mastershort.de. Einmal eingetragen, erscheinen gekaufte Packs hier, werden f\xFCr diese Installation signiert und bekommen Updates von selbst (einmal t\xE4glich gepr\xFCft). Alles Installierte funktioniert auch ohne Verbindung.",license_shop:"Mehr Packs im Shop",license_error_invalid_key:"Diesen Schl\xFCssel kennt der Shop nicht. Er sieht so aus: NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"Dieser Schl\xFCssel ist schon mit der erlaubten Zahl von Installationen verbunden.",license_error_shop_unreachable:"Der Shop ist gerade nicht erreichbar. Installierte Packs funktionieren weiter.",license_error_not_owned:"Dieses Pack geh\xF6rt nicht zu diesem Konto.",license_error_no_key:"Zuerst den Lizenzschl\xFCssel eintragen.",license_error_wrong_instance:"Der Shop hat das Pack f\xFCr eine andere Installation signiert.",license_error_other:"Das hat nicht geklappt: {detail}",pack_import:"M\xF6bel-Packs importieren \u2026",pack_imported:"\u201E{name}\u201C von {publisher} importiert \u2013 {n} M\xF6bel",packs_imported_n:"{n} von {total} Packs importiert",pack_by:"von {publisher} \xB7 {n} M\xF6bel",pack_features:"von {publisher} \xB7 schaltet {n} Pro-Funktionen frei",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Kamera-Cockpit: durch die Kamera schauen und Bewegungsspur",pro_name_camera_cockpit:"Kamera-Cockpit",pro_name_weather:"Wetter drau\xDFen",pro_name_screens:"Bildschirme live",ext_tab:"Erweiterungen",offers_title:"Neu im Shop",offers_new:"NEU",offers_loyalty:"Dein Treuerabatt: {percent} % auf jedes weitere Pack und jede Pro-Erweiterung",offers_kind_pack:"M\xF6bel-Pack",offers_kind_pro:"Pro-Erweiterung",offers_kind_bundle:"Bundle",offers_dot:"Neues im Shop",pack_updated:"{name} wurde auf Version {release} aktualisiert.",pack_updated_added:"{name} wurde auf Version {release} aktualisiert: {n} neue M\xF6bel \u2013 schau in die Bibliothek!",ext_title:"Erweiterungen",ext_intro:"M\xF6bel-Packs und Pro-Erweiterungen f\xFCr NeonPlan 3D. Gekaufte Erweiterungen installierst du hier mit deinem Lizenzschl\xFCssel; sie bekommen Updates von selbst und funktionieren auch ohne Verbindung.",ext_shop:"Shop \xF6ffnen",ext_pro:"Pro-Erweiterungen",ext_active:"aktiv",ext_get:"Im Shop ansehen",ext_open:"Erweiterungen \xF6ffnen",manual:"Anleitung",manual_more:"Mehr erfahren",ext_teaser_title:"Mehr M\xF6bel und Pro-Funktionen",ext_teaser_text:"M\xF6bel-Packs, Shop-Verbindung und Pro-Erweiterungen findest du oben unter \u201EErweiterungen\u201C.",pro_feature_weather:"Wetter drau\xDFen: Regen, Schnee, Wolken, Sonne und Mond",pro_feature_screens:"Bildschirme live: App-Farbe und Cover des Media Players, Bildregeln, Kamera-Livebild auf Bildschirmen",pro_locked:"Diese Funktion ist eine Pro-Erweiterung. Nach dem Kauf erscheint sie unter Erweiterungen \u203A Shop-Verbindung und l\xE4sst sich dort installieren.",pro_shop:"Zum Shop",pack_licensed:"Lizenziert f\xFCr {name}",pack_remove:"Entfernen",pack_remove_confirm:"Pack \u201E{name}\u201C entfernen? M\xF6bel daraus bleiben als einfache K\xE4sten im Plan.",pack_missing_item:"M\xF6bel aus entferntem Pack",pack_error_bad_signature:"Das Pack wurde ver\xE4ndert oder seine Unterschrift ist ung\xFCltig.",pack_error_unknown_publisher:"Dieses Pack stammt nicht von einem bekannten Herausgeber.",pack_error_unsigned:"Das Pack ist nicht unterschrieben.",pack_error_not_a_pack:"Das ist keine M\xF6bel-Pack-Datei.",pack_error_invalid_content:"Das Pack enth\xE4lt ung\xFCltige M\xF6bel: {detail}",pack_error_too_large:"Die Datei ist zu gro\xDF.",pack_error_other:"Import fehlgeschlagen: {detail}",back_to_room:"Zur\xFCck zu {room}",back_to_floor:"Zur\xFCck zur Etage",hint_furniture:"Raum antippen, dann rechts ein M\xF6belst\xFCck w\xE4hlen \xB7 M\xF6bel ziehen, an den Ecken die Gr\xF6\xDFe \xE4ndern",furniture_into:"Neue M\xF6bel kommen in die Mitte von \u201E{room}\u201C.",furniture_pick_room:"Tipp: Erst einen Raum antippen \u2013 dann landen neue M\xF6bel in seiner Mitte.",flows:"Stromfluss",flows_hint:"Leuchtende Leitungen vom Z\xE4hler zu den Verbrauchern ein- oder ausblenden",flow_on:"an",flow_off:"aus",hint_opening:"Auf eine Wand tippen, um eine T\xFCr oder ein Fenster einzusetzen \u2013 die Art w\xE4hlst du danach rechts",preset_door:"T\xFCr",preset_door_double:"Doppelt\xFCr",preset_window:"Fenster",preset_window_double:"Fenster 2-fl\xFCgelig",preset_terrace:"Terrassent\xFCr",preset_terrace_double:"Terrassent\xFCr 2-fl\xFCgelig",preset_garage:"Garagentor",preset_front:"Haust\xFCr",opening_style:"Stil",style_auto:"Automatisch ({style})",style_interior:"Zimmert\xFCr",style_front:"Haust\xFCr",style_front_glass:"Haust\xFCr mit Glasausschnitt",style_sidelight:"Haust\xFCr mit Seitenteil",style_sidelights:"Haust\xFCr mit 2 Seitenteilen",style_glass:"Glast\xFCr",style_sliding:"Schiebet\xFCr",style_passage:"Durchbruch (ohne T\xFCr)",style_standard:"Standard",style_bars:"Mit Sprossen",flip_hinge:"Anschlag wechseln",flip_main_leaf:"Hauptfl\xFCgel wechseln",flip_hinge_hint:"Scharniere auf die andere Seite",flip_swing:"\xD6ffnungsrichtung umdrehen",flip_swing_hint:"Die T\xFCr schwenkt in den Raum oder zur anderen Seite",main_leaf:"Hauptfl\xFCgel (vom Raum aus)",contact_main:"Kontakt Hauptfl\xFCgel",contact_second:"Kontakt zweiter Fl\xFCgel",tool_outdoor:"Au\xDFen",tool_measure:"Nach Ma\xDF",hint_measure:"Startpunkt antippen, dann rechts die Wandl\xE4ngen mit Richtung eingeben",measure:"Raum nach Ma\xDF",measure_start:"Tippe im Plan auf den Startpunkt, z. B. eine Raumecke.",measure_from:"Start bei {x} / {z} m \u2013 antippen verschiebt den Start.",measure_length:"L\xE4nge der n\xE4chsten Wand (m)",measure_close:"Raum schlie\xDFen",measure_undo:"Letzte Wand weg",measure_gap:"L\xFCcke zum Start: {gap} m (wird beim Schlie\xDFen verbunden)",measure_hint:"Tipp: L\xE4nge eintippen und Pfeiltaste dr\xFCcken. Mit gemessenen Innenma\xDFen danach \u201EL\xFCcken schlie\xDFen\u201C.",rect_by_size:"Rechteck nach Ma\xDF",rect_add:"Rechteck anlegen",dir_up:"Nach oben",dir_down:"Nach unten",dir_left:"Nach links",dir_right:"Nach rechts",hint_outdoor:"Ziehen, um eine Au\xDFenfl\xE4che (Rasen, Terrasse, Pool \u2026) aufzuziehen",outdoor:"Au\xDFenfl\xE4che",outdoor_type:"Art",outdoor_hint:"Au\xDFenleuchten (Wegleuchte, Garten-Spot, Wandleuchte au\xDFen) beleuchten alle Au\xDFenfl\xE4chen und die Fassade.",out_lawn:"Rasen",out_terrace:"Terrasse",out_path:"Weg",out_driveway:"Einfahrt",out_pool:"Pool",out_bed:"Beet",out_hedge:"Hecke",out_fence:"Zaun",north:"Nordrichtung (\xB0 im Uhrzeigersinn von oben)",north_hint:"Die Nordrichtung braucht der Sonnenstand (Licht durch die Fenster).",roof:"Dach",roof_none:"Kein Dach",roof_flat:"Flachdach",roof_gable:"Satteldach",roof_custom:"Dachfl\xE4chen (frei)",roof_sections:"Dachfl\xE4chen",roof_sections_hint:"Jede Dachfl\xE4che deckt ein Rechteck des Hauses ab, etwa das Wohnhaus, die Scheune oder einen Anbau \u2013 jede mit eigener Form, Firstrichtung, Traufh\xF6he und Neigung. Eine neue Fl\xE4che ziehst du im Plan auf; antippen w\xE4hlt sie aus, ziehen verschiebt sie, die Ecken \xE4ndern die Gr\xF6\xDFe.",roof_sections_start:"Dachfl\xE4chen aus den R\xE4umen erzeugen",roof_sections_regen:"Neu aus den R\xE4umen erzeugen",roof_sections_off:"Zur\xFCck zu einem Dach",roof_regen_confirm:"Alle Dachfl\xE4chen durch einen neuen Vorschlag aus den R\xE4umen ersetzen?",roof_section:"Dachfl\xE4che",roof_section_hint:"H\xF6hen z\xE4hlen vom Boden. Eine Seite mit tieferer Traufe zieht weiter herunter (Abschleppdach); Pultd\xE4cher steigen von der ersten Seite an.",roof_shape_gable:"Sattel",roof_shape_hip:"Walm",roof_shape_pent:"Pult",roof_shape_flat:"Flach",roof_axis_x:"First \u2194",roof_axis_z:"First \u2195",roof_eave:"Traufe (m)",roof_pitch_short:"Neigung (\xB0)",roof_height:"H\xF6he (m)",roof_base:"Wandoberkante (m)",roof_ridge_height:"Firsth\xF6he",roof_side_top:"oben",roof_side_bottom:"unten",roof_side_left:"links",roof_side_right:"rechts",roof_swap:"Seiten tauschen",roof_open:"\xDCberdachung (Pfosten statt W\xE4nde, durchsichtig)",roof_open_short:"\xDCberdachung",roof_open_hint:"F\xFCr Terrassendach oder Carport: Statt W\xE4nden tragen Pfosten und Balken das Dach, die Fl\xE4che ist durchsichtig. Wo die \xDCberdachung an die Hauswand st\xF6\xDFt, liegt sie auf der Wand auf.",roof_swap_hint:"Dreht das Dach um: Die beiden Seiten tauschen Traufe und Neigung, ein Pultdach steigt in die andere Richtung.",roof_pitch:"Dachneigung (\xB0)",roof_overhang:"Dach\xFCberstand (m)",roof_ridge:"First",roof_ridge_long:"Entlang der langen Seite",roof_ridge_short:"Entlang der kurzen Seite (z. B. Reihenhaus)",device:"Ger\xE4t",lamp_mount:"Lampe",lamp_ceiling:"Deckenleuchte",lamp_floor:"Stehlampe",lamp_table:"Tischlampe",lamp_wall:"Wandleuchte",marker_height:"H\xF6he des Symbols (m)",height_auto:"H\xF6he automatisch",device_centre:"In Raummitte",lights_spread:"Deckenlampen gleichm\xE4\xDFig verteilen",devices_search:"Ger\xE4te suchen \u2026",devices_more:"+{n} weitere",devices_less:"weniger",panel_more:"Weitere Ger\xE4te des Bereichs ({n})",panel_less:"Weniger anzeigen",gaps_close:"L\xFCcken schlie\xDFen",gaps_hint:"R\xE4ume mit bis zu 60 cm Abstand an einer gemeinsamen Wand zusammenf\xFChren; der Abstand wird die Innenwandst\xE4rke.",gaps_none:"Keine L\xFCcken zwischen R\xE4umen gefunden.",gaps_closed:"{n} Stellen geschlossen.",gaps_closed_wall:"{n} Stellen geschlossen, Innenwand jetzt {t} m.",fps:"FPS",fps_title:"Leistungsanzeige (Bilder pro Sekunde)",hint_garage:"Auf eine Wand tippen, um ein Garagentor einzusetzen",opening_garage:"Garagentor",garage_hint:"Das Tor folgt einem Garagen-Cover (Position oder offen/zu) oder einem Garagentor-Kontakt aus dem Bereich des Raums.",door_hint:"Mit T\xFCrkontakt schwenkt das T\xFCrblatt auf, ohne Sensor steht es halb offen.",hint_door:"Auf eine Wand tippen, um eine T\xFCr einzusetzen",hint_window:"Auf eine Wand tippen, um ein Fenster einzusetzen",opening_door:"T\xFCr",opening_window:"Fenster",opening_type:"Art",opening_position:"Mitte ab Ecke (m)",sill:"Br\xFCstung (m)",opening_height:"H\xF6he (m)",hinge:"Anschlag (vom Raum aus)",hinge_left:"Links",hinge_right:"Rechts",cover_entity:"Rollladen",cover_position_entity:"Positions-Sensor (live)",cover_position_invert:"Sensor z\xE4hlt umgekehrt (0 = offen)",contact_entity:"Kontakt",sensor_kind:"Sensor-Art",sensor_kind_contact:"Fensterkontakt (offen/zu)",sensor_kind_handle:"Griff-Sensor (offen/gekippt/zu)",sensor_kind_contact_tilt:"Kontakt + Kipp-Sensor",handle_entity:"Griff-Sensor",handle_main:"Griff-Sensor Hauptfl\xFCgel",leaf_main:"Hauptfl\xFCgel",leaf_second:"Zweiter Fl\xFCgel",tilt_entity:"Kipp-Sensor",entity_auto:"Automatisch ({name})",entity_auto_none:"Automatisch (keiner gefunden)",entity_none:"Keiner",entity_search:"Tippen zum Suchen \u2026",opening_hint:"Sensor-Art: Fensterkontakt (meldet offen/zu), Griff-Sensor (meldet offen, gekippt und zu \u2013 z. B. Homematic-Fenstergriff) oder Kontakt + Kipp-Sensor (ein zweiter Sensor, der nur \u201Egekippt\u201C meldet). Automatisch nimmt Rolll\xE4den und Kontakte aus dem Bereich des Raums. Positions-Sensor: eine Entit\xE4t, die die Rollladen-Position auch w\xE4hrend der Fahrt meldet (z. B. Homematic \u201ELevel\u201C, 0\u2013100 % oder 0\u20131, offen = hoch) \u2013 dann f\xE4hrt der Rollladen in 3D live.",furniture:"M\xF6bel",furniture_add:"M\xF6bel hinzuf\xFCgen",furniture_search:"M\xF6bel suchen \u2026",furniture_type:"M\xF6belst\xFCck",rotation:"Drehung (\xB0)",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"H\xF6he (m)",furn_sofa:"Sofa",furn_armchair:"Sessel",furn_table:"Tisch",furn_chair:"Stuhl",furn_bed:"Bett",furn_nightstand:"Nachttisch",furn_wardrobe:"Schrank",furn_shelf:"Regal",furn_kitchen:"K\xFCchenzeile",furn_worktop:"Arbeitsplatte",furn_fridge:"K\xFChlschrank",furn_fridge_smart:"Smart-K\xFChlschrank (Side-by-Side)",furn_door_left:"T\xFCrsensor links (Gefrierseite)",furn_door_right:"T\xFCrsensor rechts (K\xFChlseite)",fridge_hint:"Meldet ein T\xFCrsensor \u201Eoffen\u201C, schwingt die T\xFCr in 3D auf. Der Bildschirm auf der rechten T\xFCr zeigt Bilder nach Regeln wie ein Fernseher \u2013 solange die T\xFCr zu ist.",furn_stove:"Herd",furn_sink:"Sp\xFCle",furn_bathtub:"Badewanne",furn_shower:"Dusche",furn_wc:"WC",furn_washbasin:"Waschtisch",furn_desk:"Schreibtisch",furn_tv_board:"TV-Board",furn_plant:"Pflanze",furn_rug:"Teppich",furn_stairs:"Treppe",furn_stairwell:"Boden\xF6ffnung",stairwell_hint:"Ein Loch im Boden dieser Etage, zum Beispiel \xFCber dem Treppenaufgang oder f\xFCr eine Galerie; von oben sieht man hindurch. Die \xD6ffnung muss ganz in einem Raum liegen; mehrere \xD6ffnungen d\xFCrfen sich \xFCberlappen (zum Beispiel f\xFCr eine L-Form). Eine Treppe auf der Etage darunter, die bis hier hinauf reicht, \xF6ffnet den Boden auch von selbst.",tool_hole:"Boden\xF6ffnung",tool_roof:"Dach",tool_energy:"Energie",tool_wall:"Wand",hint_wall:"Ziehen, um eine einzelne Wand zu zeichnen (Raumteiler, halbe Wand) \xB7 Umschalt h\xE4lt sie gerade \xB7 Alt ohne Fangen",free_wall:"Wand",wall_length:"L\xE4nge (m)",wall_thickness:"Wandst\xE4rke (m)",wall_height:"H\xF6he (m)",wall_height_full:"Volle Raumh\xF6he",wall_heights:"Wandh\xF6hen",wall_n:"Wand {a}\u2013{b}",wall_exterior_short:"Au\xDFenwand",room_wall_hint:"Eine niedrigere H\xF6he macht aus der Wand eine Br\xFCstung oder Theke. Teilen sich zwei R\xE4ume die Wand, gilt die niedrigere Einstellung. Fenster und T\xFCren darin enden an der Wandh\xF6he.",free_wall_hint:"Eine frei stehende Wand, zum Beispiel ein Raumteiler. Trifft sie auf eine Raumwand, wird die Ecke verschnitten. Die Endpunkte ziehst du an den Griffen, die ganze Wand verschiebst du an der Linie.",stairwell_outside:"Diese \xD6ffnung ragt \xFCber eine Raumgrenze und wird deshalb nicht ausgeschnitten. Ziehe sie ganz in einen Raum oder verkleinere sie.",hint_hole:"Ziehen, um eine Boden\xF6ffnung aufzuziehen (Treppenaufgang, Galerie)",hint_roof:"Dachfl\xE4che aufziehen \xB7 antippen w\xE4hlt aus \xB7 ziehen verschiebt \xB7 Ecken \xE4ndern die Gr\xF6\xDFe",hint_energy:"Solarfeld antippen w\xE4hlt aus \xB7 ziehen verschiebt, auch auf eine andere Dachfl\xE4che \xB7 neue Felder rechts mit + Solarfeld",furn_parking:"Stellplatz",furn_group_vehicles:"Stellpl\xE4tze",parking_entity:"Sensor \u201EAuto anwesend\u201C",parking_vehicle:"Fahrzeug",parking_vehicle_none:"Keins",parking_no_pack:"Kein Fahrzeug-Pack importiert \u2013 Fahrzeuge kommen aus dem Pack \u201EFahrzeuge\u201C (M\xF6bel \u2192 M\xF6bel-Pack importieren).",parking_scale:"Gr\xF6\xDFe (%)",parking_type_entity:"Fahrzeugtyp-Sensor (optional)",parking_types:"Zustand \u2192 Fahrzeug",parking_type_state:"Zustand (z. B. van)",parking_add_type:"+ Zuordnung",parking_hint:"Ohne Sensor steht das Fahrzeug immer da. Mit Sensor erscheint es, sobald der Sensor \u201Ean\u201C, \u201Ehome\u201C oder \u201Eanwesend\u201C meldet. Ein Fahrzeugtyp-Sensor (z. B. aus einer KI-Kameraauswertung) w\xE4hlt das Modell: Passt sein Zustand zu einer Zuordnung \u2013 auch als Wort im Text \u2013, wird dieses Fahrzeug gezeigt, sonst das Standard-Fahrzeug.",parking_too_tall:"Das Fahrzeug ({car} m) ist h\xF6her als der Raum ({room} m).",furn_lamp_ceiling:"Deckenleuchte",furn_lamp_downlight:"Einbauspot",furn_lamp_spot:"Aufbau-Spot",furn_lamp_panel:"LED-Panel",furn_lamp_uplight:"Deckenfluter",furn_lamp_bollard:"Wegleuchte",furn_lamp_garden:"Garten-Spot",furn_radiator:"Heizk\xF6rper",furn_robot_vacuum:"Saugroboter",furn_entity_vacuum:"Saugroboter",furn_robot_room:"Aktueller Raum (Sensor)",robot_hint:"Saugt der Roboter in Home Assistant, f\xE4hrt er in 3D in Bahnen durch den Raum, den er meldet (Sensor \u201EAktueller Raum\u201C, zugeordnet \xFCber den Raum- oder Bereichsnamen), sonst durch den Raum seiner Station. Die Fahrspur ist simuliert \u2013 Home Assistant kennt meist nicht die genaue Position. Zur\xFCck f\xE4hrt er zur Station.",furn_lamp_pendant:"Pendelleuchte",furn_lamp_floor:"Stehlampe",furn_lamp_table:"Tischlampe",furn_lamp_wall:"Wandleuchte",furn_led_strip:"LED-Streifen",furn_group_lights:"Leuchten",furn_entity_light:"Licht oder Schalter",furn_entity_climate:"Heizung (Thermostat)",lamp_hint:"Antippen in 3D schaltet die Leuchte, lange dr\xFCcken \xF6ffnet das Schnellmen\xFC. Auch Schalter (z. B. ein Relais f\xFCrs Deckenlicht) sind m\xF6glich \u2013 die Leuchte strahlt dann, solange er an ist. Tischlampen stehen automatisch auf dem M\xF6bel darunter.",lamp_hint_pendant:"H\xF6he = Abh\xE4ngung unter der Decke. Antippen in 3D schaltet, lange dr\xFCcken \xF6ffnet die Details.",theme:"Look",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Tag",furnish:"Einrichten",split_3d:"3D daneben",mount_height:"H\xF6he \xFCber Boden (m)",side_open:"Seitenleiste \xF6ffnen",side_close:"Schlie\xDFen",side_details:"Details zur Auswahl",side_pin:"Anheften",side_pinned:"Angeheftet",side_pin_hint:"Angeheftet bleibt die Seitenleiste immer offen; sonst klappt sie neben der 3D-Ansicht zu, solange nichts ausgew\xE4hlt ist",split_3d_hint:"Live-3D neben dem Plan: M\xF6bel und Ger\xE4te dort ziehen und drehen \u2013 mit R\xFCckg\xE4ngig, gespeichert wird mit dem Plan",size_w:"Breite (m)",size_d:"Tiefe (m)",size_h:"H\xF6he (m)",furnish_hint:"M\xF6bel, Leuchten und Ger\xE4te mit dem Finger ziehen \xB7 M\xF6bel rasten an W\xE4nden ein \xB7 antippen zum Drehen, f\xFCr H\xF6he und Montage",done:"Fertig",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Feuchte",heat_short_co2:"CO\u2082",heat_temperature:"Temperatur",heat_humidity:"Luftfeuchtigkeit",heat_co2:"CO\u2082",heat_none_found:"Keine passenden Sensoren in den Bereichen der R\xE4ume.",markers:"Symbole",markers_none:"Keine",markers_important:"Wichtige",markers_all:"Alle",furn_stool:"Hocker",furn_coffee_table:"Couchtisch",furn_tv_wall:"Fernseher (Wand)",furn_sideboard:"Sideboard",furn_table_round:"Runder Tisch",furn_bench:"Sitzbank",furn_corner_bench:"Eckbank",furn_bar_stool:"Barhocker",furn_kitchen_wall:"Oberschrank",furn_kitchen_tall:"Hochschrank mit Backofen",furn_island:"Kochinsel",furn_dishwasher:"Sp\xFClmaschine",furn_bunk_bed:"Etagenbett",furn_dresser:"Kommode",furn_washer:"Waschmaschine",furn_dryer:"Trockner",furn_office_chair:"B\xFCrostuhl",furn_tall_cabinet:"Hochschrank",furn_coat_rack:"Garderobe",furn_group_living:"Wohnen",furn_group_dining:"Essen",furn_group_kitchen:"K\xFCche",furn_group_sleeping:"Schlafen",furn_group_bath:"Bad & Hauswirtschaft",furn_group_work:"Arbeiten & Sonstiges",furn_group_energy:"Energie & Solar",energy_devices:"Ger\xE4te",solar_pro_title:"Solar & Energie Pro",solar_pro_soon:"bald verf\xFCgbar",solar_pro_1:"Module, die bei Sonne leben und mit der Leistung leuchten",solar_pro_2:"Feine Stromfluss-Leitungen durchs Haus: woher der Strom gerade kommt und wohin er flie\xDFt",solar_pro_3:"Ein Hologramm aus Glas mit Leistung, Tageskurve, Ertrag heute und Autarkie",solar_pro_4:"Werte je Strang auf dem Dach, Akku, Wallbox und Netz auf einen Blick",solar_pro_free:"Alles, was du hier einrichtest (Felder, Str\xE4nge, Ger\xE4te, Sensoren), bleibt kostenlos und wird von der Pro-Erweiterung direkt genutzt.",wallbox_charging:"l\xE4dt",wallbox_plugged:"angesteckt",furn_soc:"Ladestand (%)",furn_wallbox_status:"Status (l\xE4dt, angesteckt)",energy_only_note:"\u26A1 Energie: Hier lassen sich nur Solarfelder und Energieger\xE4te verschieben, R\xE4ume und M\xF6bel sind gesperrt.",roof_only_note:"\u{1F3E0} Dach: Hier lassen sich nur Dachfl\xE4chen und Dachfenster verschieben, R\xE4ume und M\xF6bel sind gesperrt.",energy_devices_hint:"Wechselrichter, Stromspeicher und Wallbox werden hier angelegt: auf der oben gew\xE4hlten Etage, im Grundriss verschiebbar. Mit Leistungssensor zeigen sie ihre Watt; beim Strang w\xE4hlst du den Wechselrichter.",solar_fields:"Solarfelder",solar_hint:"Module aufs Dach legen: Sie liegen in der Neigung der Dachfl\xE4che, auf einem Flachdach stehen sie aufgest\xE4ndert. Im Grundriss l\xE4sst sich ein Feld mit der Maus verschieben.",solar_no_roof:"F\xFCr Solarfelder braucht das Haus ein Dach: unter Einstellungen ein Sattel- oder Flachdach, oder Dachabschnitte hier im Dach-Werkzeug.",solar_face_gone:"Dachfl\xE4che fehlt",solar_summary:"{n} Module \xB7 {kwp} kWp",solar_add:"Solarfeld",solar_field:"Solarfeld",solar_face:"Dachfl\xE4che",solar_rows:"Reihen",solar_cols:"Module pro Reihe",solar_portrait:"Hochformat",solar_landscape:"Querformat",solar_u:"Abstand vom Rand (m)",solar_v:"Abstand von der Traufe (m)",solar_tilt:"Neigung der Aufst\xE4nderung (\xB0)",solar_flip:"In die andere Richtung neigen",solar_partial:"nur {n} von {total} passen auf die Fl\xE4che",solar_form_hint:"Module, die \xFCber die Dachfl\xE4che hinausragen w\xFCrden, fallen weg. \u201EFl\xE4che f\xFCllen\u201C legt so viele Module aufs Dach, wie passen. kWp gerechnet mit 400 W je Modul.",solar_fit:"Fl\xE4che f\xFCllen",roof_windows:"Dachfenster",roof_window:"Dachfenster",roof_windows_hint:"Dachfenster liegen in der Dachfl\xE4che, mit Rollladen und Kontakt wie normale Fenster. Im Grundriss lassen sie sich verschieben, auch auf eine andere Dachfl\xE4che.",roof_window_tilt:"Kippkontakt",roof_window_hint:"Offen klappt der Fl\xFCgel oben angeschlagen nach au\xDFen, gekippt ein St\xFCck; der Rollladen f\xE4hrt von oben \xFCber die Scheibe.",solar_ground:"Frei aufgest\xE4ndert (Garten, Garagendach \u2026)",solar_add_ground:"Frei aufgest\xE4ndert",solar_base:"H\xF6he der Aufstellfl\xE4che (m, 0 = Boden)",solar_add_wall:"An der Wand",solar_wall:"Wand",solar_v_wall:"H\xF6he \xFCber dem Boden (m)",solar_tilt_wall:"Neigung von der Wand (\xB0, 90 = Vordach)",solar_flip_wall:"Unten abstehend statt oben",solar_rotation:"Drehung (\xB0)",solar_name:"Name",solar_name_hint:"z. B. Strang 1 S\xFCd",solar_module_w:"Modulbreite (m)",solar_module_h:"Modulh\xF6he (m)",solar_string:"Strang",solar_strings:"Str\xE4nge",solar_string_none:"Kein Strang",solar_string_new:"Neuer Strang",solar_string_n:"Strang {n}",solar_string_name:"Name des Strangs",solar_string_entity:"PV-Leistung des Strangs",solar_string_inverter:"Wechselrichter",solar_string_inverter_none:"Kein Wechselrichter gew\xE4hlt",solar_string_inverter_missing:"Noch kein Wechselrichter im Plan (unten bei Ger\xE4te anlegen)",solar_string_hint:"Felder im selben Strang geh\xF6ren zusammen, auch auf verschiedenen D\xE4chern (z. B. 5 Module auf dem Haus und 5 auf der Garage). Sensor und Wechselrichter gelten f\xFCr den ganzen Strang.",solar_string_sum:"{fields} Felder \xB7 {n} Module \xB7 {kwp} kWp",solar_face_size:"Dachfl\xE4che {w} \xD7 {h} m (entlang der Traufe \xD7 die Schr\xE4ge hoch)",solar_cols_hint:"Eine Zahl f\xFCr gleich lange Reihen, oder eine Liste f\xFCr Reihen eigener L\xE4nge: \u201E4, 4, 3\u201C (von der Traufe aus).",solar_align_left:"Links",solar_align_center:"Mitte",solar_align_right:"Rechts",solar_look_black:"Full Black",solar_look_blue:"Blau",solar_pick:"Module einzeln an/aus",solar_pick_all:"Alle wieder an",solar_pick_hint:"Tippe im Grundriss auf ein Modul, um es wegzunehmen oder wieder dazuzunehmen. Weggenommene sind gestrichelt.",solar_entity:"PV-Leistung dieses Feldes (z. B. sein Strang)",solar_main:"Hauptdach",solar_section:"Abschnitt {n}",solar_flat:"Flachdach",compass_n:"Nord",compass_ne:"Nordost",compass_e:"Ost",compass_se:"S\xFCdost",compass_s:"S\xFCd",compass_sw:"S\xFCdwest",compass_w:"West",compass_nw:"Nordwest",furn_inverter:"Wechselrichter",furn_home_battery:"Stromspeicher",furn_wallbox:"Wallbox",furn_entity:"Ger\xE4t (Schalter, Steckdose \u2026)",furn_entity_tv:"Fernseher (Media-Player oder Steckdose)",fix:"Fixieren",unfix:"L\xF6sen",fix_hint:"Fixiert: l\xE4sst sich nicht mehr versehentlich verschieben (Taste L, Rechtsklick oder langes Dr\xFCcken)",fixed_drag_hint:"\u{1F512} Fixiert \u2013 zum Verschieben erst l\xF6sen (Schloss im Formular, Rechtsklick oder Taste L)",fixed_delete_confirm:"Dieses Element ist fixiert. Trotzdem l\xF6schen?",lock_plan:"\u{1F512} Grundriss",lock_plan_hint:"Grundriss sperren: R\xE4ume, W\xE4nde, T\xFCren, Fenster und Au\xDFenfl\xE4chen lassen sich nicht mehr versehentlich verschieben. M\xF6bel und Ger\xE4te bleiben frei.",ctx_rotate:"Drehen 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} weitere \u2013 Suche eingrenzen",climate:"Raumklima",climate_temperature:"Temperatur",climate_humidity:"Luftfeuchte",climate_co2:"CO\u2082",climate_hint:"Diese Sensoren gelten f\xFCr die Heatmap und das Raumfenster. \u201EAutomatisch\u201C nimmt die Sensoren des Bereichs und die im Raum platzierten, aber keine Ger\xE4tetemperaturen (3D-Drucker, W\xE4rmepumpe, Vorlauf \u2026).",plan_locked:"Grundriss gesperrt",plan_lock:"Grundriss sperren",plan_unlock:"Grundriss entsperren",opening_mark:"Markieren in 3D",opening_mark_open:"Wenn offen",opening_mark_closed:"Wenn geschlossen (z. B. WC)",opening_mark_hint:"Ein markiertes Fenster oder eine markierte T\xFCr leuchtet warm. \u201EWenn geschlossen\u201C braucht einen Kontakt; ohne Sensor wird nichts markiert.",marker_show:"Symbol in 3D",marker_show_hint:"Automatisch folgt dem Schalter Keine / Wichtige / Alle in der 3D-Ansicht. Immer zeigen und Ausblenden gelten unabh\xE4ngig davon (au\xDFer bei Keine).",marker_show_auto:"Automatisch",marker_show_always:"Immer zeigen",marker_show_no_power:"Ohne Watt",marker_show_never:"Ausblenden",furn_power:"Leistungssensor (W)",furn_links_hint:"Mit Leistungssensor zeigt das M\xF6bel seine Watt und bekommt eine Energie-Leitung.",screen_pictures:"Bilder nach Zustand",screen_pictures_hint:"Verglichen wird der Zustand oder ein Attribut der Entit\xE4t (z. B. app_name eines Fernsehers). Der Wert passt, wenn er gleich ist oder im Text vorkommt (\u201Eyoutube\u201C passt zu \u201Ecom.google.android.youtube.tv\u201C); \u201E*\u201C = immer. Die erste passende Regel gewinnt. Bilder werden auf 512 px verkleinert gespeichert; alternativ eine Bild-URL oder eine Kamera \u2013 deren Livebild wird alle 5 Sekunden erneuert, solange es gezeigt wird. Ohne passende Regel zeigt der Bildschirm den Media Player.",picture_state:"ist oder enth\xE4lt \u2026 (z. B. netflix)",picture_state_of:"Zustand",picture_attribute:"Zustand oder Attribut vergleichen",picture_pick:"Bild w\xE4hlen \u2026",picture_change:"Bild \xE4ndern \u2026",picture_url:"oder Bild-URL",picture_add_value:"+ Wert",picture_reuse:"Vorhandenes Bild verwenden",picture_camera:"oder Kamera (Livebild) \u2026",picture_camera_none:"Keine Kamera",screen_bg:"Bildschirm hinter dem Bild",screen_bg_black:"Dunkel",screen_bg_white:"Wei\xDF",picture_add_entity:"+ Weitere Entit\xE4t",picture_current:"aktuell: {value}",picture_matches:"\u2713 passt gerade \u2013 dieses Bild wird gezeigt",furn_links_hint_tv:"Der Bildschirm leuchtet, solange der Fernseher an ist, in der Farbe der App (Netflix, YouTube \u2026); das Schild zeigt App oder Titel.",stairs_hint:"Die Treppe steigt nach hinten an (weg von der markierten Vorderkante) und \xF6ffnet die Decke der Etage dar\xFCber.",floor_lights:"{n} Licht an",floor_open:"{n} offen",floor_persons:"{n} Pers.",energy_consumption:"Verbrauch",energy_grid_import:"Netzbezug",energy_grid_export:"Einspeisung",energy_solar:"Solar",energy_battery:"Akku",energy_tariff:"Tarif",energy:"Energie",energy_meter:"Z\xE4hlerplatz",energy_meter_set:"Z\xE4hlerplatz setzen",energy_meter_remove:"Z\xE4hlerplatz entfernen",energy_meter_hint:"Tippe im Plan auf die Stelle des Z\xE4hlers bzw. Hausanschlusses.",energy_grid:"Netz (W, + = Bezug)",energy_solar_sensor:"Solar-Erzeugung (W)",energy_battery_sensor:"Akku-Leistung (W, + = Entladen)",energy_battery_soc:"Akku-Ladestand (%)",energy_tariff_sensor:"Tarif (z. B. \u20AC/kWh)",energy_invert:"Vorzeichen umkehren",energy_hint:"Verbraucher sind platzierte Ger\xE4te mit Leistungssensor (W) \u2013 der Sensor selbst oder einer vom selben Ger\xE4t.",tool_meter:"Z\xE4hler",hint_meter:"Auf die Stelle des Z\xE4hlers tippen",presence:"Anwesenheit",presence_hint:"Raumsensor je Person (z. B. ESPresense, Bermuda): sein Zustand nennt den Raum oder Bereich.",presence_sensor:"Raumsensor",no_persons:"In Home Assistant gibt es keine Personen.",upstream_update:"Das originale NeonPlan 3D hat Version {latest} ver\xF6ffentlicht (diese franz\xF6sische Version basiert auf {base}).",upstream_notes:"Versionshinweise"},hr={view:"3D",editor:"Editor",all_floors:"All floors",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",save_failed_detail:"Saving failed: {error}. Your changes are kept in this browser.",needs_restart:"A new version of NeonPlan 3D is installed, but Home Assistant still runs {version}. Please restart Home Assistant \u2013 until then saving may fail.",needs_restart_old:"A new version of NeonPlan 3D is installed, but Home Assistant still runs an older one. Please restart Home Assistant \u2013 until then saving fails.",needs_reload:"Home Assistant already runs NeonPlan 3D {version}, but this page still uses {frontend} from the browser cache. Please reload the page (Ctrl+F5); in the Companion app: Settings \u2192 Companion app \u2192 Troubleshooting \u2192 Reset frontend cache.",draft_found:"Unsaved changes from {time} found.",draft_restore:"Restore and save",draft_discard:"Discard",walls_auto:"Tall walls",walls_cut:"Cut",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",add_floor:"Add floor",floor_from_ha:"Floors from Home Assistant:",floor_empty:"Empty floor",level:"Level {n}",ha_floor:"Floor in Home Assistant",no_ha_floor:"\u2013 none \u2013",area_rooms:"Add {n} rooms from HA areas",area_rooms_hint:"Adds a room (4 \xD7 3 m) for each area of this floor \u2013 then drag it into place and adjust the corners",floor_name:"Name",elevation:"Elevation (m)",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",default_floor:"Ground floor",new_floor:"Floor {n}",tool_select:"Select",tool_rect:"Rectangle",tool_polygon:"Free shape",undo:"Undo",redo:"Redo",fit:"Show all",room:"Room",rooms:"Rooms",room_name:"Name",area:"Area",no_area:"No area",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",delete_point:"Delete corner",duplicate:"Duplicate",delete:"Delete",new_room:"Room {n}",settings:"Settings",pendant_shape:"Shape",pendant_shade:"Shade",pendant_globe:"Globe",pendant_cone:"Cone",pendant_drum:"Drum",pkg_open:"Furnish \u2026",pkg_hint:"Furniture goes against the room's walls; lamps link to the area's lights. Adjust single items afterwards \u2013 Ctrl+Z takes it all back.",pkg_done:"{n} items placed \u2013 Ctrl+Z takes it back.",pkg_kitchen_row:"Kitchen row",pkg_kitchen_row_desc:"Row on the back wall with fridge, oven, sink, dishwasher and stove, wall cabinet, dining table with pendant",pkg_kitchen_l:"L-shaped kitchen",pkg_kitchen_l_desc:"Rows at the back and left, kitchen island with bar stools",pkg_bath:"Bathroom",pkg_bath_desc:"Washbasin, WC, bathtub, washing machine, downlight",pkg_bedroom:"Bedroom",pkg_bedroom_desc:"Double bed with two nightstands, wardrobe, chest of drawers, ceiling light",pkg_living:"Living room",pkg_living_desc:"TV board, sofa, coffee table, rug, armchair, shelf, floor lamp, plant",pkg_dining:"Dining room",pkg_dining_desc:"Table with four chairs, sideboard, pendant",pkg_office:"Office",pkg_office_desc:"Desk with office chair, two shelves, ceiling light",pkg_kids:"Kids' room",pkg_kids_desc:"Single bed, desk, shelf, rug",pkg_hall:"Hall",pkg_hall_desc:"Coat rack, two downlights",spots_place:"Place spots",spots_type:"Lamp",spots_cols:"Columns (left\u2013right)",spots_rows:"Rows (front\u2013back)",spots_add:"Place {n} lamps",spots_placed:"{n} lamps placed.",spots_hint:"All lamps follow the chosen light (e.g. spots on one dimmer). Afterwards each can be moved and linked to another light like any furniture.",cancel:"Cancel",backup:"Backup",backup_history:"Restore points",backup_none:"None yet. While editing, a restore point is kept at most every 10 minutes.",backup_summary:"{rooms} rooms, {furniture} items",backup_restore:"Restore",backup_restore_confirm:"Restore the state of {time}? The current state is kept as a restore point.",backup_restored:"Restored.",backup_file:"File",backup_export:"Export",backup_export_share:"Share as template",backup_export_share_hint:"Without areas, devices, sensors and images \u2013 for passing on to others.",backup_import:"Import \u2026",backup_import_confirm:"Replace the whole plan with the file? The current state is kept as a restore point.",backup_import_error:"The file is no NeonPlan 3D plan ({error}).",backup_imported:"Imported.",backup_hint:"Background images are not part of the file.",backup_full:"Full backup",backup_full_export:"Back up everything (plan, pictures, packs)",backup_full_import:"Restore a full backup \u2026",backup_full_hint:"One file with the plan, every background and screen picture and the installed packs. On restore every pack is checked again; the licence key is not included.",backup_full_confirm:"Replace the plan, the pictures and the packs with the backup? The current state stays as a restore point.",backup_full_not_backup:"This is not a full NeonPlan 3D backup.",backup_full_restored:"Backup restored: {packs} packs, {pictures} pictures.",backup_full_skipped:"Skipped (not verifiable or bound to another installation): {packs}.",export_name_full:"full",device_confirm:"Ask before switching",device_confirm_hint:"A tap in 3D, the quick menu and the room panel ask first. A double tap on the room leaves this device out.",cover_confirm_hint:"Open, close and positions ask first in the quick menu and the room panel, and a swipe on the marker no longer moves the blind (it turns the view instead). Stop never asks.",confirm_switch:"Really switch {name}?",split_handle_hint:"Drag: width of the plan and the 3D view",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 arrow keys nudge \xB7 Del deletes \xB7 Ctrl+Z",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_empty:"Add a floor first.",area_m2:"{a} m\xB2",overlap_warning:"Rooms overlap \u2013 walls there are incomplete.",read_only:"Only administrators can edit the floor plan.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"NeonPlan 3D",card_description:"Your home in 3D (neon).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} fps (slowest frame {ms} ms)",stats_idle:"At rest (0 fps)",stats_busy_camera:"camera",stats_busy_floors:"floors",stats_busy_openings:"doors/windows",stats_busy_flash:"flash",stats_busy_roof:"roof",stats_busy_flow:"power flow",stats_busy_effect:"colour effect",stats_busy_robot:"robot",stats_busy_orbit:"camera turn",stats_busy_tint:"room tint",stats_low:"tablet level, pixel ratio {r}",stats_full:"full level, pixel ratio {r}",floors_apart:"Apart",floors_stacked:"Stacked",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",devices_none_area:"Link the room to an area and its devices appear here.",devices_none:"The area has no suitable devices.",devices_place_all_n:"Place all {n} \u2026",devices_place_all_confirm:"Put {n} devices into the room at once? (Ctrl+Z or \u201CUndo\u201D takes them all back in one step.)",devices_src_area:"This area",devices_src_other:"Other areas",devices_src_none:"No area",devices_place:"Place",devices_remove:"Remove",devices_hint:"Placed devices appear in 3D. Drag them in the plan to move them.",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",panel_cameras:"Cameras",camera_live:"Open live view",through_camera:"Look through the camera",through_blend:"Blend",through_back:"Back to the view",camera_mount:"Mount",camera_mount_wall:"Wall (looks along its rotation)",camera_mount_ceiling:"Ceiling (dome, all round)",camera_fov:"Field of view (\xB0)",camera_reach:"Reach (m)",camera_fov_short:"Angle \xB0",camera_reach_short:"Reach m",camera_tilt:"Tilt down (\xB0)",camera_tilt_short:"Tilt \xB0",camera_aim_hint:"In the plan the wedge shows where the camera looks. The handle at its tip turns the camera and sets its reach.",state_recording:"Recording",state_streaming:"Streaming",panel_all_off:"All off",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"No devices of this room are in the plan. In the editor, place devices or pick them for the room panel with \u2606.",close:"Close",brightness:"Brightness",color_temp:"Colour temperature",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details",tool_opening:"Doors & windows",tool_furniture:"Furniture",qm_off:"Off",find:"Search",find_placeholder:"Where is \u2026? Device or room",find_none:"Nothing found",swipe_off:"Off",panel_pin:"Show in the room panel",panel_unpin:"Don't show in the room panel",devices_panel_hint:"The room panel shows the devices in the plan. \u2606 adds a device to the room panel without placing it.",card_section_view:"View",card_size:"Size",card_size_fixed:"Fixed height",card_size_fill:"Fill the screen",card_fill_hint:"Works best in a dashboard view of the type \u201CPanel (single card)\u201D \u2013 the card then takes all the space.",card_controls:"Switches in the card",card_floor_thumbs:"Floors as miniatures",card_floor_thumbs_hint:"Small pictures of the floors at the side \u2013 tap one to switch",card_floor_thumbs_hint_start:"The chosen floor is then where the card starts \u2013 the pictures at the side switch to the others",card_room_names:"Show room names",card_section_kiosk:"Wall tablet (kiosk)",card_section_features:"Features",card_weather_plan:"as set in the plan",card_pro_hint:"Motion trail and weather are Pro add-ons: without the matching add-on these switches have no effect.",card_idle_return:"Back to the start view after",card_idle_off:"Never",card_idle_min:"{n} min without a touch",card_idle_hint:"After the wait the card closes the room and shows the start view again.",card_night:"Night dimming",card_night_off:"Off",card_night_sun:"By the sun",card_night_time:"Time range",card_night_range:"Time range (e.g. 22:00-06:00)",card_idle_orbit:"Camera turn as screensaver",card_idle_orbit_hint:"After the return the view turns slowly until someone touches the tablet",card_alerts:"Show warnings",card_alerts_hint:"Smoke, gas, CO, water, alarm panel and windows open in the rain: the room pulses, a note appears at the top",card_alert_jump:"Jump to the room of a new warning",card_alert_jump_hint:"The view switches to the floor and room of the warning by itself",card_scenes:"Scene buttons in the room",card_scenes_hint:"Scenes and scripts of the area as buttons under the 3D view while a room is selected",card_motion_trail:"Motion trail",card_motion_trail_hint:"Where motion was reported in the last 30 minutes, with times (motion, presence and camera sensors)",trail_short:"Trail",weather_short:"Weather",weather_entity:"Weather entity",weather_effects:"Weather effects in 3D",rain_warning:"Warning: window open while it rains",weather_effect_rain:"Rain",weather_effect_snow:"Snow",weather_effect_fog:"Fog (greys the scene)",weather_effect_clouds:"Clouds dim the sky and the sun",weather_effect_lightning:"Lightning in storms",weather_effect_sky:"Sun and moon in the sky",weather_entity_hint:"The weather entity provides rain, snow, fog and clouds for the 3D view; automatic takes the first one.",weather_hint:"Weather outside: rain, snow, fog and clouds from the weather entity, sun and moon from sun.sun",card_weather:"Weather outside",card_weather_hint:"Rain, snow, fog and clouds from the first weather entity (weather_entity picks another); only the clouds on the tablet level",trail_hint:"Motion trail: where motion was reported in the last 30 minutes, with times",alerts:"Warnings",alert_smoke:"Smoke: {name}",alert_gas:"Gas: {name}",alert_co:"Carbon monoxide: {name}",alert_water:"Water: {name}",alert_alarm:"Alarm triggered",alert_alarm_pending:"Alarm pending",alert_window_rain:"Window open in the rain: {name}",room_names_short:"Room names",floor_stack_short_dim:"Dimmed",floor_stack_short_stacked:"Stacked",floor_stack_short_single:"Alone",size_short_w:"W",size_short_d:"D",size_short_h:"H",import_error_not_json:"The file is no JSON.",import_error_not_plan:"The file is no NeonPlan 3D plan.",export_name_template:"template",export_name_backup:"backup",card_floor_stack:"Floors below",floor_stack_dim:"Dimmed",floor_stack_stacked:"Stacked (the house up to here)",floor_stack_single:"Hidden (only this floor)",card_control_walls:"Tall walls/cut",card_control_floors:"Floors apart",card_control_temperature:"Temperature",card_control_humidity:"Humidity",card_control_co2:"CO\u2082",card_controls_hint:"Tall walls/cut, floors apart and temperature, humidity, CO\u2082 to switch",card_fullscreen_button:"Full screen button",card_fullscreen_button_hint:"Hides the dashboard around the card (e.g. on a wall tablet)",fullscreen:"Full screen",fullscreen_exit:"Exit full screen",card_section_show:"Show",card_floor:"Floor",card_floor_house:"Whole house (tap a floor to open it)",card_height:"Height (pixels)",card_walls:"Walls",card_quality_hint:"\u201CTablet\u201D is the lightest setting \u2013 ideal for Fire tablets and other wall tablets.",card_flows_switch:"Switch in the card",card_flows_on:"Always on",card_flows_off:"Always off",card_energy:"Show energy values at the top",card_room_panel:"Room details on tap",card_room_panel_hint:"The room's lights, blinds and cameras in a side panel",card_explode:"Pull floors apart in the house view",card_stats:"Performance display (frames per second)",card_stats_hint:"To check how smoothly the card runs on the device",packs:"Furniture packs",packs_hint:"Only packs signed by the publisher can be imported.",lib_badge_light:"Lamp: links to a light and switches in 3D",lib_badge_electric:"Electric: links to an entity and a power sensor (switching, pictures, consumption)",lib_badge_hint:"Items with a symbol link to entities: lamps switch, screens show pictures, appliances show their consumption.",pack_error_wrong_instance:"This pack is signed for another Home Assistant installation. The shop account can deliver it for this one.",license_title:"Shop connection",license_instance:"Installation id",license_copy:"Copy",license_copied:"Id copied",license_activate:"Activate",license_activated:"Connected \u2013 your packs are listed below.",license_active:"Connected as {name} (key {key})",license_checked:"last checked {time}",license_refresh:"Check now",license_refreshed:"Checked.",license_remove:"Disconnect",license_remove_confirm:"Disconnect from the shop? Installed packs stay, only updates stop coming by themselves.",license_installed:"installed \xB7 v{release}",license_update_available:"update to v{release} available",license_not_installed:"not installed yet",license_install:"Install",license_update:"Update",license_none:"No packs in the account yet.",license_hint:"The licence key is in your order and in your account at mastershort.de. Entered once, bought packs appear here, are signed for this installation and update by themselves (checked once a day). Everything installed keeps working without the connection.",license_shop:"More packs in the shop",license_error_invalid_key:"The shop does not know this key. It looks like NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"This key is already bound to the allowed number of installations.",license_error_shop_unreachable:"The shop cannot be reached right now. Installed packs keep working.",license_error_not_owned:"This pack is not in this account.",license_error_no_key:"Enter the licence key first.",license_error_wrong_instance:"The shop signed the pack for another installation.",license_error_other:"That did not work: {detail}",pack_import:"Import furniture packs \u2026",pack_imported:"Imported \u201C{name}\u201D by {publisher} \u2013 {n} items",packs_imported_n:"{n} of {total} packs imported",pack_by:"by {publisher} \xB7 {n} items",pack_features:"by {publisher} \xB7 unlocks {n} Pro features",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Camera cockpit: look through the camera and motion trail",pro_name_camera_cockpit:"Camera cockpit",pro_name_weather:"Weather outside",pro_name_screens:"Live screens",ext_tab:"Extensions",offers_title:"New in the shop",offers_new:"NEW",offers_loyalty:"Your loyalty discount: {percent} % on every further pack and Pro add-on",offers_kind_pack:"Furniture pack",offers_kind_pro:"Pro add-on",offers_kind_bundle:"Bundle",offers_dot:"New in the shop",pack_updated:"{name} was updated to release {release}.",pack_updated_added:"{name} was updated to release {release}: {n} new items \u2013 have a look in the library!",ext_title:"Extensions",ext_intro:"Furniture packs and Pro add-ons for NeonPlan 3D. Install what you bought here with your licence key; it updates by itself and works without the connection too.",ext_shop:"Open the shop",ext_pro:"Pro add-ons",ext_active:"active",ext_get:"See in the shop",ext_open:"Open extensions",manual:"Manual",manual_more:"Learn more",ext_teaser_title:"More furniture and Pro features",ext_teaser_text:'Furniture packs, the shop connection and Pro add-ons are under "Extensions" at the top.',pro_feature_weather:"Weather outside: rain, snow, clouds, sun and moon",pro_feature_screens:"Live screens: the media player's app colour and artwork, picture rules, camera live pictures on screens",pro_locked:"This feature is a Pro add-on. After the purchase it appears under Extensions \u203A Shop connection and installs from there.",pro_shop:"To the shop",pack_licensed:"Licensed to {name}",pack_remove:"Remove",pack_remove_confirm:"Remove the pack \u201C{name}\u201D? Its furniture stays in the plan as plain boxes.",pack_missing_item:"Furniture of a removed pack",pack_error_bad_signature:"The pack was changed or its signature is invalid.",pack_error_unknown_publisher:"This pack is not from a known publisher.",pack_error_unsigned:"The pack is not signed.",pack_error_not_a_pack:"This is not a furniture pack file.",pack_error_invalid_content:"The pack contains invalid furniture: {detail}",pack_error_too_large:"The file is too large.",pack_error_other:"Import failed: {detail}",back_to_room:"Back to {room}",back_to_floor:"Back to the floor",hint_furniture:"Tap a room, then pick an item on the right \xB7 drag items, resize them by their corners",furniture_into:"New items go into the middle of \u201C{room}\u201D.",furniture_pick_room:"Tip: tap a room first \u2013 new items then land in its middle.",flows:"Power flow",flows_hint:"Show or hide glowing lines from the meter to the consumers",flow_on:"on",flow_off:"off",hint_opening:"Tap a wall to add a door or window \u2013 choose its kind on the right afterwards",preset_door:"Door",preset_door_double:"Double door",preset_window:"Window",preset_window_double:"Double window",preset_terrace:"Terrace door",preset_terrace_double:"French doors",preset_garage:"Garage door",preset_front:"Front door",opening_style:"Style",style_auto:"Automatic ({style})",style_interior:"Room door",style_front:"Front door",style_front_glass:"Front door with glass",style_sidelight:"Front door with sidelight",style_sidelights:"Front door with two sidelights",style_glass:"Glass door",style_sliding:"Sliding door",style_passage:"Opening (no door)",style_standard:"Standard",style_bars:"With glazing bars",flip_hinge:"Swap hinge side",flip_main_leaf:"Swap main leaf",flip_hinge_hint:"Hinges to the other side",flip_swing:"Reverse opening direction",flip_swing_hint:"The door swings into the room or to the other side",main_leaf:"Main leaf (seen from the room)",contact_main:"Contact main leaf",contact_second:"Contact second leaf",tool_outdoor:"Outdoor",tool_measure:"By measure",hint_measure:"Tap the starting point, then type the wall lengths with their direction on the right",measure:"Room by measure",measure_start:"Tap the starting point in the plan, e.g. a room corner.",measure_from:"Start at {x} / {z} m \u2013 tapping moves the start.",measure_length:"Length of the next wall (m)",measure_close:"Close room",measure_undo:"Remove last wall",measure_gap:"Gap to the start: {gap} m (joined when closing)",measure_hint:"Tip: type a length and press an arrow key. With measured inside dimensions, use \u201CClose gaps\u201D afterwards.",rect_by_size:"Rectangle by size",rect_add:"Add rectangle",dir_up:"Up",dir_down:"Down",dir_left:"Left",dir_right:"Right",hint_outdoor:"Drag to draw an outdoor area (lawn, terrace, pool \u2026)",outdoor:"Outdoor area",outdoor_type:"Type",outdoor_hint:"Outdoor lights (path light, garden spot, outdoor wall light) light all outdoor areas and the facade.",out_lawn:"Lawn",out_terrace:"Terrace",out_path:"Path",out_driveway:"Driveway",out_pool:"Pool",out_bed:"Flower bed",out_hedge:"Hedge",out_fence:"Fence",north:"North (\xB0 clockwise from up)",north_hint:"North is needed for the sun (light through the windows).",roof:"Roof",roof_none:"No roof",roof_flat:"Flat roof",roof_gable:"Gable roof",roof_custom:"Roof sections (custom)",roof_sections:"Roof sections",roof_sections_hint:"Each roof section covers a rectangle of the house, e.g. the house, the barn or an extension \u2013 each with its own shape, ridge direction, eave height and pitch. Drag in the plan to draw a new one; tap selects it, dragging moves it, the corners resize it.",roof_sections_start:"Create roof sections from the rooms",roof_sections_regen:"Create again from the rooms",roof_sections_off:"Back to one roof",roof_regen_confirm:"Replace all roof sections with a new proposal from the rooms?",roof_section:"Roof section",roof_section_hint:"Heights count from the ground. A side with a lower eave reaches further down (catslide); pent roofs rise from the first side.",roof_shape_gable:"Gable",roof_shape_hip:"Hip",roof_shape_pent:"Pent",roof_shape_flat:"Flat",roof_axis_x:"Ridge \u2194",roof_axis_z:"Ridge \u2195",roof_eave:"Eave (m)",roof_pitch_short:"Pitch (\xB0)",roof_height:"Height (m)",roof_base:"Top of walls (m)",roof_ridge_height:"Ridge height",roof_side_top:"top",roof_side_bottom:"bottom",roof_side_left:"left",roof_side_right:"right",roof_swap:"Swap sides",roof_open:"Canopy (posts instead of walls, see-through)",roof_open_short:"Canopy",roof_open_hint:"For a terrace roof or a carport: posts and beams carry the roof instead of walls, and it is see-through. Where the canopy meets the house wall, it rests on the wall.",roof_swap_hint:"Turns the roof round: the two sides swap eave and pitch, a pent roof rises the other way.",roof_pitch:"Roof pitch (\xB0)",roof_overhang:"Roof overhang (m)",roof_ridge:"Ridge",roof_ridge_long:"Along the long side",roof_ridge_short:"Along the short side (e.g. terraced house)",device:"Device",lamp_mount:"Lamp",lamp_ceiling:"Ceiling light",lamp_floor:"Floor lamp",lamp_table:"Table lamp",lamp_wall:"Wall light",marker_height:"Marker height (m)",height_auto:"Automatic height",device_centre:"To room centre",lights_spread:"Spread ceiling lights evenly",devices_search:"Search devices \u2026",devices_more:"+{n} more",devices_less:"less",panel_more:"More devices of the area ({n})",panel_less:"Show less",gaps_close:"Close gaps",gaps_hint:"Join rooms up to 60 cm apart at one shared wall; the gap becomes the interior wall thickness.",gaps_none:"No gaps between rooms found.",gaps_closed:"{n} places closed.",gaps_closed_wall:"{n} places closed, interior wall now {t} m.",fps:"FPS",fps_title:"Performance display (frames per second)",hint_garage:"Tap a wall to add a garage door",opening_garage:"Garage door",garage_hint:"The door follows a garage cover (position or open/closed) or a garage door contact of the room's area.",door_hint:"With a door contact the leaf swings open; without a sensor it stands half open.",hint_door:"Tap a wall to add a door",hint_window:"Tap a wall to add a window",opening_door:"Door",opening_window:"Window",opening_type:"Type",opening_position:"Centre from corner (m)",sill:"Sill height (m)",opening_height:"Height (m)",hinge:"Hinge (seen from the room)",hinge_left:"Left",hinge_right:"Right",cover_entity:"Blind",cover_position_entity:"Position sensor (live)",cover_position_invert:"Sensor counts the other way round (0 = open)",contact_entity:"Contact",sensor_kind:"Sensor type",sensor_kind_contact:"Window contact (open/closed)",sensor_kind_handle:"Handle sensor (open/tilted/closed)",sensor_kind_contact_tilt:"Contact + tilt sensor",handle_entity:"Handle sensor",handle_main:"Handle sensor main leaf",leaf_main:"Main leaf",leaf_second:"Second leaf",tilt_entity:"Tilt sensor",entity_auto:"Automatic ({name})",entity_auto_none:"Automatic (none found)",entity_none:"None",entity_search:"Type to search \u2026",opening_hint:`Sensor type: window contact (reports open/closed), handle sensor (reports open, tilted and closed \u2013 e.g. a Homematic window handle) or contact + tilt sensor (a second sensor that only reports tilted). Automatic uses the blinds and contacts of the room's area. Position sensor: an entity reporting the blind's position while it moves (e.g. a Homematic "level", 0\u2013100 % or 0\u20131, open = high) \u2013 the blind then moves live in 3D.`,furniture:"Furniture",furniture_add:"Add furniture",furniture_search:"Search furniture \u2026",furniture_type:"Item",rotation:"Rotation (\xB0)",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Height (m)",furn_sofa:"Sofa",furn_armchair:"Armchair",furn_table:"Table",furn_chair:"Chair",furn_bed:"Bed",furn_nightstand:"Nightstand",furn_wardrobe:"Wardrobe",furn_shelf:"Shelf",furn_kitchen:"Kitchen unit",furn_worktop:"Worktop",furn_fridge:"Fridge",furn_fridge_smart:"Smart fridge (side by side)",furn_door_left:"Door sensor left (freezer side)",furn_door_right:"Door sensor right (fridge side)",fridge_hint:"While a door sensor reports open, the door swings open in 3D. The screen on the right door shows pictures by rules like a TV \u2013 while that door is closed.",furn_stove:"Stove",furn_sink:"Sink",furn_bathtub:"Bathtub",furn_shower:"Shower",furn_wc:"WC",furn_washbasin:"Washbasin",furn_desk:"Desk",furn_tv_board:"TV board",furn_plant:"Plant",furn_rug:"Rug",furn_stairs:"Stairs",furn_stairwell:"Floor opening",stairwell_hint:"A hole in this floor, for example above the staircase or for a gallery; from above you look through it. The opening must lie within one room; several openings may overlap (for an L shape, for example). Stairs on the floor below that reach up here open the floor by themselves as well.",tool_hole:"Floor opening",tool_roof:"Roof",tool_energy:"Energy",tool_wall:"Wall",hint_wall:"Drag to draw a single wall (partition, half wall) \xB7 Shift keeps it straight \xB7 Alt without snapping",free_wall:"Wall",wall_length:"Length (m)",wall_thickness:"Wall thickness (m)",wall_height:"Height (m)",wall_height_full:"Full room height",wall_heights:"Wall heights",wall_n:"Wall {a}\u2013{b}",wall_exterior_short:"exterior wall",room_wall_hint:"A lower height turns the wall into a parapet or a counter. If two rooms share the wall, the lower setting applies. Windows and doors in it end at the wall height.",free_wall_hint:"A free-standing wall, e.g. a partition. Where it meets a room wall, the corner is mitred. Drag the handles to move its ends, drag the line to move the whole wall.",stairwell_outside:"This opening reaches across a room boundary and is therefore not cut. Move it fully into one room or make it smaller.",hint_hole:"Drag to draw a floor opening (stairwell, gallery)",hint_roof:"Drag to draw a roof section \xB7 tap selects \xB7 drag moves \xB7 corners resize",hint_energy:"Tap a solar field to select it \xB7 drag to move it, also onto another roof face \xB7 new fields with + Solar field on the right",furn_parking:"Parking spot",furn_group_vehicles:"Parking",parking_entity:'Sensor "car present"',parking_vehicle:"Vehicle",parking_vehicle_none:"None",parking_no_pack:'No vehicle pack imported \u2013 vehicles come from the "Vehicles" pack (Furniture \u2192 Import furniture pack).',parking_scale:"Size (%)",parking_type_entity:"Vehicle type sensor (optional)",parking_types:"State \u2192 vehicle",parking_type_state:"State (e.g. van)",parking_add_type:"+ Mapping",parking_hint:'Without a sensor the vehicle always stands there. With one it appears as soon as the sensor reports "on", "home" or "present". A vehicle type sensor (e.g. from an AI camera analysis) picks the model: when its state matches a mapping \u2013 also as a word in the text \u2013 that vehicle is shown, otherwise the default one.',parking_too_tall:"The vehicle ({car} m) is taller than the room ({room} m).",furn_lamp_ceiling:"Ceiling light",furn_lamp_downlight:"Downlight",furn_lamp_spot:"Surface spot",furn_lamp_panel:"LED panel",furn_lamp_uplight:"Floor uplight",furn_lamp_bollard:"Path light",furn_lamp_garden:"Garden spot",furn_radiator:"Radiator",furn_robot_vacuum:"Robot vacuum",furn_entity_vacuum:"Robot vacuum",furn_robot_room:"Current room (sensor)",robot_hint:"While the robot cleans in Home Assistant it drives lanes in 3D through the room it reports (a \u201Ccurrent room\u201D sensor, matched by room or area name), else through the room of its dock. The track is simulated \u2013 Home Assistant usually does not know the exact position. It drives back to the dock when it returns.",furn_lamp_pendant:"Pendant light",furn_lamp_floor:"Floor lamp",furn_lamp_table:"Table lamp",furn_lamp_wall:"Wall light",furn_led_strip:"LED strip",furn_group_lights:"Lights",furn_entity_light:"Light or switch",furn_entity_climate:"Heating (thermostat)",lamp_hint:"Tap the lamp in 3D to switch it, long press for the quick menu. Switches work too (e.g. a relay for the ceiling light) \u2013 the lamp shines while it is on. Table lamps stand on the furniture below them.",lamp_hint_pendant:"Height = drop below the ceiling. Tap in 3D to switch, long press for details.",theme:"Look",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Day",furnish:"Furnish",split_3d:"3D beside",mount_height:"Height above the floor (m)",side_open:"Open the sidebar",side_close:"Close",side_details:"Details of the selection",side_pin:"Pin",side_pinned:"Pinned",side_pin_hint:"Pinned, the sidebar stays open; otherwise it folds away beside the 3D view while nothing is selected",split_3d_hint:"Live 3D next to the plan: drag and turn furniture and devices there \u2013 with undo, saved with the plan",size_w:"Width (m)",size_d:"Depth (m)",size_h:"Height (m)",furnish_hint:"Drag furniture, lamps and devices \xB7 furniture snaps to walls \xB7 tap one to turn it, set its height and mount",done:"Done",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humidity",heat_short_co2:"CO\u2082",heat_temperature:"Temperature",heat_humidity:"Humidity",heat_co2:"CO\u2082",heat_none_found:"No matching sensors in the rooms' areas.",markers:"Markers",markers_none:"None",markers_important:"Important",markers_all:"All",furn_stool:"Stool",furn_coffee_table:"Coffee table",furn_tv_wall:"TV (wall)",furn_sideboard:"Sideboard",furn_table_round:"Round table",furn_bench:"Bench",furn_corner_bench:"Corner bench",furn_bar_stool:"Bar stool",furn_kitchen_wall:"Wall cabinet",furn_kitchen_tall:"Tall unit with oven",furn_island:"Kitchen island",furn_dishwasher:"Dishwasher",furn_bunk_bed:"Bunk bed",furn_dresser:"Chest of drawers",furn_washer:"Washing machine",furn_dryer:"Dryer",furn_office_chair:"Office chair",furn_tall_cabinet:"Tall cabinet",furn_coat_rack:"Coat rack",furn_group_living:"Living",furn_group_dining:"Dining",furn_group_energy:"Energy & solar",energy_devices:"Devices",solar_pro_title:"Solar & Energy Pro",solar_pro_soon:"coming soon",solar_pro_1:"Modules that come alive in the sun and glow with their output",solar_pro_2:"Fine power-flow lines through the house: where the power comes from and where it goes",solar_pro_3:"A glass hologram with power, day curve, today's yield and self-sufficiency",solar_pro_4:"Values per string on the roof, battery, wallbox and grid at a glance",solar_pro_free:"Everything you set up here (fields, strings, devices, sensors) stays free and is used by the Pro add-on directly.",wallbox_charging:"charging",wallbox_plugged:"plugged in",furn_soc:"State of charge (%)",furn_wallbox_status:"Status (charging, plugged in)",energy_only_note:"\u26A1 Energy: only solar fields and energy devices can be moved here; rooms and furniture are locked.",roof_only_note:"\u{1F3E0} Roof: only roof sections and roof windows can be moved here; rooms and furniture are locked.",energy_devices_hint:"Inverters, home batteries and wallboxes are added here: on the floor chosen above, movable in the plan. With a power sensor they show their watts; a string picks its inverter.",solar_fields:"Solar fields",solar_hint:"Put modules on the roof: they lie in the slope of the roof face; on a flat roof they stand on frames. Drag a field in the plan to move it.",solar_no_roof:"Solar fields need a roof: a gable or flat roof under Settings, or roof sections here in the Roof tool.",solar_face_gone:"roof face missing",solar_summary:"{n} modules \xB7 {kwp} kWp",solar_add:"Solar field",solar_field:"Solar field",solar_face:"Roof face",solar_rows:"Rows",solar_cols:"Modules per row",solar_portrait:"Portrait",solar_landscape:"Landscape",solar_u:"Distance from the edge (m)",solar_v:"Distance from the eave (m)",solar_tilt:"Tilt of the frames (\xB0)",solar_flip:"Lean the other way",solar_partial:"only {n} of {total} fit on the face",solar_form_hint:"Modules that would reach beyond the roof face are left out. \u201CFill face\u201D puts as many modules on the roof as fit. kWp counted with 400 W per module.",solar_fit:"Fill face",roof_windows:"Roof windows",roof_window:"Roof window",roof_windows_hint:"Roof windows lie in the roof face, with a blind and contacts like windows. Drag them in the plan, also onto another roof face.",roof_window_tilt:"Tilt contact",roof_window_hint:"Open, the sash swings out, hinged at the top; tilted, a little; the blind comes down over the glass from the top.",solar_ground:"Free-standing (garden, garage roof \u2026)",solar_add_ground:"Free-standing",solar_base:"Height of the surface (m, 0 = ground)",solar_add_wall:"On a wall",solar_wall:"Wall",solar_v_wall:"Height above the floor (m)",solar_tilt_wall:"Tilt away from the wall (\xB0, 90 = canopy)",solar_flip_wall:"Standing off at the bottom instead of the top",solar_rotation:"Rotation (\xB0)",solar_name:"Name",solar_name_hint:"e.g. string 1 south",solar_module_w:"Module width (m)",solar_module_h:"Module height (m)",solar_string:"String",solar_strings:"Strings",solar_string_none:"No string",solar_string_new:"New string",solar_string_n:"String {n}",solar_string_name:"Name of the string",solar_string_entity:"PV power of the string",solar_string_inverter:"Inverter",solar_string_inverter_none:"No inverter chosen",solar_string_inverter_missing:"No inverter in the plan yet (add one below under Devices)",solar_string_hint:"Fields in the same string belong together, also on different roofs (e.g. 5 modules on the house and 5 on the garage). Sensor and inverter count for the whole string.",solar_string_sum:"{fields} fields \xB7 {n} modules \xB7 {kwp} kWp",solar_face_size:"Roof face {w} \xD7 {h} m (along the eave \xD7 up the slope)",solar_cols_hint:"One number for rows of equal length, or a list for rows of their own: \u201C4, 4, 3\u201D (from the eave).",solar_align_left:"Left",solar_align_center:"Centre",solar_align_right:"Right",solar_look_black:"Full black",solar_look_blue:"Blue",solar_pick:"Modules on/off one by one",solar_pick_all:"All on again",solar_pick_hint:"Tap a module in the plan to take it away or put it back. Removed ones are dashed.",solar_entity:"PV power of this field (e.g. its string)",solar_main:"Main roof",solar_section:"Section {n}",solar_flat:"flat roof",compass_n:"north",compass_ne:"north-east",compass_e:"east",compass_se:"south-east",compass_s:"south",compass_sw:"south-west",compass_w:"west",compass_nw:"north-west",furn_inverter:"Solar inverter",furn_home_battery:"Home battery",furn_wallbox:"Wallbox",furn_group_kitchen:"Kitchen",furn_group_sleeping:"Sleeping",furn_group_bath:"Bath & laundry",furn_group_work:"Work & other",furn_entity:"Device (switch, plug \u2026)",furn_entity_tv:"TV (media player or smart plug)",fix:"Fix",unfix:"Release",fix_hint:"Fixed: cannot be moved by accident any more (key L, right-click or long press)",fixed_drag_hint:"\u{1F512} Fixed \u2013 release it first to move it (lock in the form, right-click or key L)",fixed_delete_confirm:"This item is fixed. Delete it anyway?",lock_plan:"\u{1F512} Floor plan",lock_plan_hint:"Lock the floor plan: rooms, walls, doors, windows and outdoor areas cannot be moved by accident. Furniture and devices stay free.",ctx_rotate:"Turn 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} more \u2013 narrow the search",climate:"Room climate",climate_temperature:"Temperature",climate_humidity:"Humidity",climate_co2:"CO\u2082",climate_hint:"These sensors count for the heatmap and the room panel. \u201CAutomatic\u201D takes the sensors of the area and the ones placed in the room, but no device temperatures (3D printer, heat pump, flow \u2026).",plan_locked:"Floor plan locked",plan_lock:"Lock floor plan",plan_unlock:"Unlock floor plan",opening_mark:"Highlight in 3D",opening_mark_open:"When open",opening_mark_closed:"When closed (e.g. WC)",opening_mark_hint:"A highlighted window or door glows warm. \u201CWhen closed\u201D needs a contact; without a sensor nothing is highlighted.",marker_show:"Marker in 3D",marker_show_hint:"Automatic follows the None / Important / All switch of the 3D view. Always show and Hide apply regardless (except with None).",marker_show_auto:"Automatic",marker_show_always:"Always show",marker_show_no_power:"Without watts",marker_show_never:"Hide",furn_power:"Power sensor (W)",furn_links_hint:"With a power sensor the item shows its watts and gets an energy cable.",screen_pictures:"Pictures by state",screen_pictures_hint:`The state or an attribute of the entity is compared (e.g. a TV's app_name). A value matches when it is equal or contained in the text ("youtube" matches "com.google.android.youtube.tv"); "*" = always. The first matching rule wins. Pictures are stored scaled to 512 px; a picture URL or a camera works too \u2013 a camera's live picture is refreshed every 5 seconds while shown. Without a matching rule the screen shows the media player.`,picture_state:"is or contains \u2026 (e.g. netflix)",picture_state_of:"State",picture_attribute:"Compare the state or an attribute",picture_pick:"Choose picture \u2026",picture_change:"Change picture \u2026",picture_url:"or picture URL",picture_add_value:"+ Value",picture_reuse:"Use a stored picture",picture_camera:"or a camera (live picture) \u2026",picture_camera_none:"No camera",screen_bg:"Screen behind the picture",screen_bg_black:"Dark",screen_bg_white:"White",picture_add_entity:"+ Another entity",picture_current:"now: {value}",picture_matches:"\u2713 matches now \u2013 this picture shows",furn_links_hint_tv:"The screen glows while the TV is on, in the colour of the app (Netflix, YouTube \u2026); the label shows the app or title.",stairs_hint:"The stair rises towards the back (away from the marked front edge) and opens the ceiling of the floor above.",floor_lights:"{n} lights on",floor_open:"{n} open",floor_persons:"{n} people",energy_consumption:"Consumption",energy_grid_import:"Grid import",energy_grid_export:"Export",energy_solar:"Solar",energy_battery:"Battery",energy_tariff:"Tariff",energy:"Energy",energy_meter:"Meter",energy_meter_set:"Place meter",energy_meter_remove:"Remove meter",energy_meter_hint:"Tap the spot of the meter or house connection in the plan.",energy_grid:"Grid (W, + = import)",energy_solar_sensor:"Solar production (W)",energy_battery_sensor:"Battery power (W, + = discharging)",energy_battery_soc:"Battery charge (%)",energy_tariff_sensor:"Tariff (e.g. \u20AC/kWh)",energy_invert:"Invert sign",energy_hint:"Consumers are placed devices with a power sensor (W) \u2013 the sensor itself or one of the same device.",tool_meter:"Meter",hint_meter:"Tap the spot of the meter",presence:"Presence",presence_hint:"Room sensor per person (e.g. ESPresense, Bermuda): its state names the room or area.",presence_sensor:"Room sensor",no_persons:"There are no people in Home Assistant.",upstream_update:"The original NeonPlan 3D has released version {latest} (this French version is based on {base}).",upstream_notes:"Release notes"};function S(i,e,t={}){let n=i?.language??navigator.language,o=(n.startsWith("de")?mo:n.startsWith("fr")?pr:hr)[e]??hr[e]??e;for(let[s,a]of Object.entries(t))o=o.replace(`{${s}}`,String(a));return o}function N(i,e,t=2){return e.toLocaleString(i?.language??void 0,{maximumFractionDigits:t})}var _o=["camera_cockpit","weather","screens"],go=["fridge_smart"];var fr=i=>(i??navigator.language).toLowerCase().startsWith("de");function mr(i){return fr(i)?"https://mastershort.de/neonplan3d/?lang=de":"https://mastershort.de/en/neonplan3d/?lang=en"}var bo={camera_cockpit:{de:"pro-erweiterungen/#61-kamera-cockpit",en:"pro-add-ons/#61-camera-cockpit"},weather:{de:"pro-erweiterungen/#62-wetter-drau%C3%9Fen",en:"pro-add-ons/#62-weather-outside"},screens:{de:"pro-erweiterungen/#63-bildschirme-live",en:"pro-add-ons/#63-live-screens"},extensions:{de:"erweiterungen-shop-moebel-packs/",en:"extensions-shop-furniture-packs/"}};function _r(i,e){let t=fr(i),n=t?"https://mastershort.de/neonplan3d/anleitung/":"https://mastershort.de/en/neonplan3d/manual/",r=e?bo[e]:void 0,o=r?t?r.de:r.en:"",[s,a]=o.split("#");return`${n}${s}?lang=${t?"de":"en"}${a?`#${a}`:""}`}function vo(i=Pe()){let e=new Set;for(let t of i)for(let n of t.features??[])(_o.includes(n)||go.includes(n))&&e.add(n);return e}function q(i,e){return vo(e).has(i)}var gr={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function et(i){return gr[i]}function Ce(i){return`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${gr[i]}"/></svg>`}var ee=(i,e)=>S(i,e);function L(i,e){if(!e||F(e))return ee(i,"state_unavailable");let t=e.attributes;switch($(e.entity_id)){case"light":return e.state!=="on"?ee(i,"state_off"):typeof t.brightness=="number"?`${Math.round(t.brightness/255*100)} %`:ee(i,"state_on");case"switch":case"fan":return ee(i,e.state==="on"?"state_on":"state_off");case"cover":return typeof t.current_position=="number"&&e.state!=="opening"&&e.state!=="closing"?`${t.current_position} %`:tt(i,e.state);case"climate":{let n=typeof t.current_temperature=="number"?`${N(i,t.current_temperature,1)} ${i?X(i):"\xB0C"}`:null;return e.state==="off"?n?`${n} \xB7 ${ee(i,"state_off")}`:ee(i,"state_off"):n??tt(i,e.state)}case"media":{let n=e.state==="playing"||e.state==="paused"||e.state==="on"||e.state==="idle",r=[t.app_name,t.media_title,t.source].find(o=>typeof o=="string"&&o);return n&&r?r:tt(i,e.state)}case"lock":case"camera":return tt(i,e.state);case"binary":return["door","window","opening","garage_door"].includes(t.device_class)?ee(i,e.state==="on"?"state_open":"state_closed"):ee(i,e.state==="on"?"state_detected":"state_clear");case"sensor":{let n=Number(e.state),r=t.unit_of_measurement??"",o=i?.entities?.[e.entity_id]?.display_precision??1;return Number.isFinite(n)?`${N(i,n,o)}${r?` ${r}`:""}`:e.state}default:return""}}function tt(i,e){let t=`state_${e}`,n=S(i,t);return n===t?e:n}function br(i,e){let t=[];for(let n of e.floors)for(let r of n.placements){let o=$(r.entity_id),s=i.states[r.entity_id];if(!o||!s)continue;let a=n.rooms.find(c=>c.points.length>=3&&I([r.x,r.z],c.points))??null,l=a?.area_id?i.areas?.[a.area_id]?.name:void 0;t.push({id:r.entity_id,floorId:n.id,roomId:a?.id??null,x:r.x,z:r.z,y:r.y??be(o,n.height,r.mount??null),lamp:o==="light"?r.mount??"ceiling":null,model:o==="camera"?r.mount==="ceiling"?"camera_ceiling":"camera_wall":void 0,motion:o==="camera"?wo(i,r.entity_id):void 0,fov:r.fov??void 0,reach:r.reach??void 0,tilt:r.tilt??void 0,rotation:r.rotation??0,icon:Ce(o),name:D(i,r.entity_id,l),text:L(i,s),active:ue(s),unavailable:F(s),glow:o==="light"?Fe(s):null,show:r.marker??void 0,fixed:!!r.locked})}return t}function wo(i,e){return He(i,e).some(t=>i.states[t]?.state==="on")}function He(i,e){let t=i.entities?.[e]?.device_id;return t?Object.values(i.entities??{}).filter(n=>n.device_id===t&&n.entity_id.startsWith("binary_sensor.")).map(n=>n.entity_id).filter(n=>["motion","occupancy","presence"].includes(String(i.states[n]?.attributes.device_class))):[]}function vr(i){return i.floors.flatMap(e=>e.placements.map(t=>t.entity_id))}function te(i,e){i.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}function wr(i,e){let t=e.slice(0,e.indexOf("."));return i.callService(t,"toggle",{entity_id:e})}var j=V`
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
`,ne=V`
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
`;var yo=4,ko=3e3,xo=8,So=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[255,95,210],[120,255,150]],ye=i=>f`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${et(i)} />
  </svg>`,nt={previous:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z"},Vt=i=>f`<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d=${i} /></svg>`,qt=class extends W{static properties={hass:{attribute:!1},room:{attribute:!1},floor:{attribute:!1},confirmEntities:{attribute:!1},_showAll:{state:!0},_tick:{state:!0}};cameraTimer;memo=null;hasCameras=!1;constructor(){super(),this.room=null,this.floor=null,this._showAll=!1,this._tick=0}connectedCallback(){super.connectedCallback(),this.cameraTimer=setInterval(()=>{this.hasCameras&&!document.hidden&&this._tick++},ko)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.cameraTimer)}t(e,t){return S(this.hass,e,t)}call(e,t,n){this.hass.callService(e,t,n)}get areaName(){return this.room?.area_id?this.hass.areas?.[this.room.area_id]?.name:void 0}name(e){return D(this.hass,e,this.areaName)}nameButton(e){return f`<button class="fp3d-rp-name" title=${this.t("details")} @click=${()=>te(this,e)}>${this.name(e)}</button>`}askFor(e){return!this.confirmEntities?.has(e)||confirm(this.t("confirm_switch",{name:this.name(e)}))}toggle(e,t,n){let r=()=>{this.confirmEntities?.has(e.entity_id)&&!confirm(this.t("confirm_switch",{name:this.name(e.entity_id)}))||n()};return f`<button
      class="fp3d-switch"
      role="switch"
      aria-checked=${t?"true":"false"}
      aria-label=${this.name(e.entity_id)}
      ?disabled=${F(e)}
      @click=${r}
    ></button>`}render(){let e=this.room;if(!e||!this.hass)return v;let t=H(this.hass,e.area_id),n=this.memo,{shown:r,more:o}=n&&n.entities===this.hass.entities&&n.floor===this.floor&&n.room===e?n:this.memo={entities:this.hass.entities,floor:this.floor,room:e,...this.floor?ur(this.hass,this.floor,e):{shown:t,more:[]}},s=Ht(this.hass,o).map(w=>w.primary),a=s.length,l=this._showAll?[...r,...s]:r,c=w=>l.filter(A=>w.includes($(A))).map(A=>this.hass.states[A]),u=c(["light"]),d=c(["cover"]),p=c(["climate"]),m=c(["media"]),_=c(["switch","fan","lock"]),b=c(["sensor","binary"]),x=c(["camera"]);this.hasCameras=x.length>0;let g=c(["scene","script"]),h=this.facts(p),k=u.filter(w=>w.state==="on");return f`<section class="fp3d-rp" aria-label=${e.name}>
      <header class="fp3d-rp-head">
        <div>
          <h2>${e.name}</h2>
          ${h.length?f`<p class="fp3d-rp-facts">${h.join(" \xB7 ")}</p>`:v}
        </div>
        <button class="fp3d-rp-close" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>
      <div class="fp3d-rp-body">
        ${e.area_id?l.length?v:f`<p class="fp3d-rp-note">${this.t("panel_empty")}</p>`:f`<p class="fp3d-rp-note">${this.t("panel_no_area")}</p>`}
        ${u.length?this.section("panel_lights",u.map(w=>this.lightRow(w)),k.length?f`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_off",{entity_id:k.map(w=>w.entity_id)})}>
                    ${this.t("panel_all_off")}
                  </button>`:v):v}
        ${d.length?this.section("panel_covers",d.map(w=>this.coverRow(w))):v}
        ${p.length?this.section("panel_climate",p.map(w=>this.climateRow(w))):v}
        ${m.length?this.section("panel_media",m.map(w=>this.mediaRow(w))):v}
        ${_.length?this.section("panel_switches",_.map(w=>this.switchRow(w))):v}
        ${x.length?this.section("panel_cameras",x.map(w=>this.cameraTile(w))):v}
        ${b.length?this.section("panel_sensors",b.map(w=>this.sensorRow(w))):v}
        ${g.length?this.section("panel_scenes",[f`<div class="fp3d-rp-scenes">
                  ${g.map(w=>f`<button
                      class="fp3d-btn"
                      ?disabled=${F(w)}
                      @click=${()=>this.call($(w.entity_id)==="scene"?"scene":"script","turn_on",{entity_id:w.entity_id})}
                    >
                      ${this.name(w.entity_id)}
                    </button>`)}
                </div>`]):v}
        ${a?f`<button class="fp3d-btn fp3d-rp-small fp3d-rp-more" @click=${()=>this._showAll=!this._showAll}>
              ${this._showAll?this.t("panel_less"):this.t("panel_more",{n:a})}
            </button>`:v}
      </div>
    </section>`}facts(e){let t=[],n=this.room,r=(l,c)=>{let u=Je(this.hass,this.floor,n,l);if(u===null)return null;if(l==="temperature")return`${N(this.hass,De(this.hass,u),1)} ${X(this.hass)}`;let d=Dt(this.hass,this.floor,n,l)[0],p=this.hass.states[d]?.attributes.unit_of_measurement??c;return`${N(this.hass,u,1)} ${p}`},o=e.find(l=>typeof l.attributes.current_temperature=="number"),s=r("temperature","\xB0C");s?t.push(s):o&&n.climate?.temperature!=="none"&&t.push(`${N(this.hass,o.attributes.current_temperature,1)} ${X(this.hass)}`);let a=r("humidity","%");return a&&t.push(a),t}section(e,t,n=v){return f`<div class="fp3d-rp-sec">
      <div class="fp3d-rp-sec-head"><h3>${this.t(e)}</h3>${n}</div>
      ${t}
    </div>`}lightRow(e){let t=e.attributes,n=e.state==="on",r=t.supported_color_modes??[],o=r.some(p=>p!=="onoff"),s=r.includes("color_temp"),a=r.some(p=>["hs","rgb","rgbw","rgbww","xy"].includes(p)),l=typeof t.brightness=="number"?Math.round(t.brightness/255*100):100,c=t.min_color_temp_kelvin??2200,u=t.max_color_temp_kelvin??6500,d=e.entity_id;return f`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${ye("light")}</span>
      ${this.nameButton(d)}
      <span class="fp3d-rp-state">${L(this.hass,e)}</span>
      ${this.toggle(e,n,()=>this.call("light","toggle",{entity_id:d}))}
      ${n&&o?f`<label class="fp3d-rp-slider"
            ><span>${this.t("brightness")}</span>
            <input
              type="range"
              min="1"
              max="100"
              .value=${String(l)}
              @change=${p=>this.call("light","turn_on",{entity_id:d,brightness_pct:Number(p.target.value)})}
          /></label>`:v}
      ${n&&s?f`<label class="fp3d-rp-slider fp3d-rp-ct"
            ><span>${this.t("color_temp")}</span>
            <input
              type="range"
              min=${c}
              max=${u}
              step="50"
              .value=${String(t.color_temp_kelvin??c)}
              @change=${p=>this.call("light","turn_on",{entity_id:d,color_temp_kelvin:Number(p.target.value)})}
          /></label>`:v}
      ${n&&a?f`<div class="fp3d-rp-swatches" role="group" aria-label=${this.t("color")}>
            ${So.map(p=>f`<button
                class="fp3d-rp-swatch"
                style="--c: rgb(${p.join(",")})"
                aria-label="rgb(${p.join(", ")})"
                @click=${()=>this.call("light","turn_on",{entity_id:d,rgb_color:p})}
              ></button>`)}
          </div>`:v}
    </div>`}coverRow(e){let t=e.attributes,n=t.supported_features??0,r=e.entity_id,o=F(e);return f`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon">${ye("cover")}</span>
      ${this.nameButton(r)}
      <span class="fp3d-rp-state">${L(this.hass,e)}</span>
      <div class="fp3d-rp-buttons">
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${o} @click=${()=>this.askFor(r)&&this.call("cover","open_cover",{entity_id:r})}>${this.t("cover_open")}</button>
        ${n&xo?f`<button class="fp3d-btn fp3d-rp-small" ?disabled=${o} @click=${()=>this.call("cover","stop_cover",{entity_id:r})}>${this.t("cover_stop")}</button>`:v}
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${o} @click=${()=>this.askFor(r)&&this.call("cover","close_cover",{entity_id:r})}>${this.t("cover_close")}</button>
      </div>
      ${n&yo&&typeof t.current_position=="number"?f`<label class="fp3d-rp-slider"
            ><span>${this.t("position")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${o}
              .value=${String(t.current_position)}
              @change=${s=>this.call("cover","set_cover_position",{entity_id:r,position:Number(s.target.value)})}
          /></label>`:v}
    </div>`}climateRow(e){let t=e.attributes,n=e.entity_id,r=typeof t.temperature=="number"?t.temperature:null,o=t.target_temp_step??.5,s=t.min_temp??5,a=t.max_temp??30,l=t.hvac_modes??[],c=u=>this.call("climate","set_temperature",{entity_id:n,temperature:Math.min(a,Math.max(s,Math.round(u/o)*o))});return f`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${t.hvac_action==="heating"?"fp3d-rp-on":""}">${ye("climate")}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${L(this.hass,e)}</span>
      ${r!==null?f`<div class="fp3d-rp-stepper fp3d-rp-wide">
            <button class="fp3d-btn" aria-label=${this.t("temp_down")} @click=${()=>c(r-o)}>−</button>
            <span><small>${this.t("target_temp")}</small> ${N(this.hass,r,1)} ${X(this.hass)}</span>
            <button class="fp3d-btn" aria-label=${this.t("temp_up")} @click=${()=>c(r+o)}>+</button>
          </div>`:v}
      ${l.length>1?f`<div class="fp3d-rp-chips">
            ${l.map(u=>f`<button
                class="fp3d-chip"
                aria-pressed=${e.state===u}
                @click=${()=>this.call("climate","set_hvac_mode",{entity_id:n,hvac_mode:u})}
              >
                ${this.stateLabel(u)}
              </button>`)}
          </div>`:v}
    </div>`}stateLabel(e){let t=`state_${e}`,n=this.t(t);return n===t?e:n}mediaRow(e){let t=e.attributes,n=e.entity_id,r=F(e)||e.state==="off",o=[t.media_title,t.media_artist].filter(s=>typeof s=="string"&&s).join(" \xB7 ");return f`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${e.state==="playing"?"fp3d-rp-on":""}">${ye("media")}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${this.stateLabel(e.state)}</span>
      ${o?f`<p class="fp3d-rp-media fp3d-rp-wide">${o}</p>`:v}
      <div class="fp3d-rp-buttons fp3d-rp-wide">
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("previous")} ?disabled=${r} @click=${()=>this.call("media_player","media_previous_track",{entity_id:n})}>
          ${Vt(nt.previous)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("play_pause")} ?disabled=${F(e)} @click=${()=>this.call("media_player","media_play_pause",{entity_id:n})}>
          ${Vt(e.state==="playing"?nt.pause:nt.play)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("next")} ?disabled=${r} @click=${()=>this.call("media_player","media_next_track",{entity_id:n})}>
          ${Vt(nt.next)}
        </button>
      </div>
      ${typeof t.volume_level=="number"?f`<label class="fp3d-rp-slider"
            ><span>${this.t("volume")}</span>
            <input
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(t.volume_level*100))}
              @change=${s=>this.call("media_player","volume_set",{entity_id:n,volume_level:Number(s.target.value)/100})}
          /></label>`:v}
    </div>`}switchRow(e){let t=e.entity_id,n=$(t),r=t.slice(0,t.indexOf(".")),o=n==="lock"?e.state==="unlocked"||e.state==="open":e.state==="on",s=()=>n==="lock"?this.call("lock",o?"lock":"unlock",{entity_id:t}):this.call(r,"toggle",{entity_id:t});return f`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${o?"fp3d-rp-on":""}">${ye(n)}</span>
      ${this.nameButton(t)}
      <span class="fp3d-rp-state">${L(this.hass,e)}</span>
      ${this.toggle(e,o,s)}
    </div>`}cameraTile(e){let t=e.attributes.entity_picture,n=t&&!F(e)?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this._tick}`:null,r=this.floor?.placements.some(o=>o.entity_id===e.entity_id);return f`<div class="fp3d-rp-camera-wrap">
      <button class="fp3d-rp-camera" title=${this.t("camera_live")} @click=${()=>te(this,e.entity_id)}>
        ${n?f`<img src=${n} alt=${this.name(e.entity_id)} loading="lazy" />`:f`<span class="fp3d-rp-note">${L(this.hass,e)}</span>`}
        <span class="fp3d-rp-camera-name">${this.name(e.entity_id)}</span>
      </button>
      ${r?f`<button
            class="fp3d-rp-look"
            title=${this.t("through_camera")}
            @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:e.entity_id},bubbles:!0,composed:!0}))}
          >
            ${q("camera_cockpit")?"":"\u{1F512} "}${this.t("through_camera")}
          </button>`:v}
    </div>`}sensorRow(e){let t=$(e.entity_id),n=t==="binary"&&e.state==="on";return f`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${ye(t)}</span>
      ${this.nameButton(e.entity_id)}
      <span class="fp3d-rp-state">${L(this.hass,e)}</span>
    </div>`}fire(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}static styles=[j,ne,V`
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
    `]};customElements.get("fp3d-room-panel")||customElements.define("fp3d-room-panel",qt);var $o={"clear-night":{},sunny:{},partlycloudy:{cloud:.45},cloudy:{cloud:.9},fog:{fog:1,cloud:.6},hail:{rain:.8,cloud:1},lightning:{lightning:!0,cloud:.9},"lightning-rainy":{rain:.8,lightning:!0,cloud:1},pouring:{rain:1,cloud:1},rainy:{rain:.55,cloud:.85},snowy:{snow:.8,cloud:.9},"snowy-rainy":{rain:.35,snow:.5,cloud:1},windy:{wind:.8,cloud:.2},"windy-variant":{wind:.8,cloud:.7},exceptional:{cloud:.5}};function Le(i,e){return e&&i.states[e]?e:Object.keys(i.states).filter(t=>t.startsWith("weather.")).sort()[0]??null}function yr(i,e){let t=e?i.states[e]:void 0;if(!t||t.state==="unavailable"||t.state==="unknown")return null;let n=$o[t.state];if(!n)return null;let r=t.attributes,o=n.cloud??0;typeof r.cloud_coverage=="number"&&(o=Math.min(1,Math.max(0,r.cloud_coverage/100)));let s=n.wind??0;if(typeof r.wind_speed=="number"){let a=r.wind_speed_unit==="m/s"?r.wind_speed*3.6:r.wind_speed_unit==="mph"?r.wind_speed*1.609:r.wind_speed;s=Math.max(s,Math.min(1,a/60))}return{entity:t.entity_id,condition:t.state,rain:n.rain??0,snow:n.snow??0,fog:n.fog??0,cloud:o,wind:s,lightning:!!n.lightning}}function kr(i,e){let t=new Set(e??Un);return{...i,rain:t.has("rain")?i.rain:0,snow:t.has("snow")?i.snow:0,fog:t.has("fog")?i.fog:0,cloud:t.has("clouds")?i.cloud:0,lightning:t.has("lightning")&&i.lightning,sky:t.has("sky")}}var Ao=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),xr={smoke:"smoke",gas:"gas",carbon_monoxide:"co",moisture:"water"};function Sr(i,e,t){let n=[];for(let s of e.floors)for(let a of s.rooms){let l=H(i,a.area_id).filter(c=>c.startsWith("binary_sensor.")&&!!xr[String(i.states[c]?.attributes.device_class)]);l.length&&n.push({floorId:s.id,roomId:a.id,sensors:l})}let r=Object.keys(i.states),o=e.settings.rain_warning===!1?null:Le(i,t??e.settings.weather_entity);return{rooms:n,alarms:r.filter(s=>s.startsWith("alarm_control_panel.")),weather:o}}function $r(i){return[...i.rooms.flatMap(e=>e.sensors),...i.alarms,...i.weather?[i.weather]:[]]}function Ar(i,e,t,n){let r=[];for(let s of t.rooms)for(let a of s.sensors){let l=i.states[a];l?.state==="on"&&r.push({kind:xr[String(l.attributes.device_class)],entity:a,roomId:s.roomId,floorId:s.floorId})}if(!!t.weather&&Ao.has(i.states[t.weather]?.state??""))for(let s of e.floors)for(let a of s.openings){if(a.type!=="window")continue;let l=n.get(a.id);if(!l)continue;let c=Q(i,l,"window");c.open<.5&&c.tilt<.5&&c.open2<.5&&c.tilt2<.5||r.push({kind:"window_rain",entity:l.contact??l.tilt??l.contact2??a.id,roomId:a.room_id,floorId:s.id})}for(let s of t.alarms){let a=i.states[s]?.state;a==="triggered"?r.push({kind:"alarm",entity:s,roomId:null,floorId:null}):a==="pending"&&r.push({kind:"alarm_pending",entity:s,roomId:null,floorId:null})}return r}function Mr(i){switch(i){case"water":return[.2,.6,1];case"window_rain":return[.35,.72,1];case"alarm_pending":return[1,.62,.2];default:return[1,.2,.25]}}function Ut(i,e,t){let n=t.roomId?e.floors.flatMap(s=>s.rooms).find(s=>s.id===t.roomId):null,r=i?D(i,t.entity):t.entity,o=S(i,`alert_${t.kind}`,{name:r});return n?`${n.name} \xB7 ${o}`:o}var K=(i,e)=>[i[0]-e[0],i[1]-e[1]],We=(i,e)=>[i[0]+e[0],i[1]+e[1]],de=(i,e)=>[i[0]*e,i[1]*e],jt=(i,e)=>i[0]*e[0]+i[1]*e[1],Oe=(i,e)=>i[0]*e[1]-i[1]*e[0],rt=i=>Math.hypot(i[0],i[1]),Ne=i=>{let e=rt(i)||1;return[i[0]/e,i[1]/e]},Er=i=>[-i[1],i[0]],Tr=i=>[i[1],-i[0]];function Kt(i,e,t=[]){let n=e.eps??.005,r=[],o=t.filter(g=>Math.hypot(g.b[0]-g.a[0],g.b[1]-g.a[1])>.05),s=[],a=g=>{for(let h=0;h<s.length;h++)if(Math.abs(s[h][0]-g[0])<=n&&Math.abs(s[h][1]-g[1])<=n)return h;return s.push([g[0],g[1]]),s.length-1},l=[];for(let g of i){let h=g.points;if(h.length<3||Math.abs(J(h))<1e-6)continue;let k=J(h)>0,w=h.map(a);for(let A=0;A<h.length;A++){let R=w[A],E=w[(A+1)%h.length];R!==E&&l.push(k?{u:R,v:E,room:g.id,edge:A,forward:!0}:{u:E,v:R,room:g.id,edge:A,forward:!1})}}let c=o.map(g=>[a(g.a),a(g.b)]),u=[];for(let g of l){let h=s[g.u],k=s[g.v],w=K(k,h),A=rt(w),R=de(w,1/A),E=[];for(let P=0;P<s.length;P++){if(P===g.u||P===g.v)continue;let y=K(s[P],h),M=jt(y,R);M<=n||M>=A-n||Math.abs(Oe(R,y))<=n&&E.push({t:M,id:P})}E.sort((P,y)=>P.t-y.t);let z=[{t:0,id:g.u},...E,{t:A,id:g.v}];for(let P=0;P+1<z.length;P++){let y=z[P],M=z[P+1],B=g.forward?y.t:A-M.t,G=g.forward?M.t:A-y.t;u.push({u:y.id,v:M.id,room:g.room,edge:g.edge,t0:B,t1:G})}}let d=new Map;for(let g of u){let h=g.u<g.v?`${g.u}-${g.v}`:`${g.v}-${g.u}`,k=d.get(h);k||d.set(h,k=[]),k.push(g)}let p=g=>({room_id:g.room,edge:g.edge,t0:g.t0,t1:g.t1}),m=g=>{let h=g.map(k=>i.find(w=>w.id===k.room)?.wall_heights?.[k.edge]).filter(k=>typeof k=="number"&&k>0);return h.length?Math.min(...h):void 0},_=[];for(let g of d.values()){let h=g[0],k=g.find(w=>w!==h&&w.u===h.v&&w.v===h.u&&w.room!==h.room);for(let w of g)w!==h&&w!==k&&w.room!==h.room&&r.push(`overlap:${h.room}:${w.room}`);k?_.push({a:h.u,b:h.v,left:e.interior/2,right:e.interior/2,exterior:!1,roomLeft:h.room,roomRight:k.room,sources:[p(h),p(k)],height:m([h,k])}):_.push({a:h.u,b:h.v,left:0,right:e.exterior,exterior:!0,roomLeft:h.room,roomRight:null,sources:[p(h)],height:m([h])})}o.forEach((g,h)=>{let[k,w]=c[h];if(k===w)return;let A=[(g.a[0]+g.b[0])/2,(g.a[1]+g.b[1])/2],R=i.find(P=>P.points.length>=3&&I(A,P.points))?.id??null,E=(g.thickness??e.interior)/2,z=typeof g.height=="number"&&g.height>0?g.height:void 0;_.push({free:g.id,a:k,b:w,left:E,right:E,exterior:!1,roomLeft:R,roomRight:R,sources:[],height:z})}),_=Eo(_,s);let b=Ro(_,s);return{walls:_.map((g,h)=>{let k=s[g.a],w=s[g.b],A=b.get(`${h}:a`),R=b.get(`${h}:b`),E=zo([A.right,R.left,w,R.right,A.left,k],1e-6);return{id:Mo(k,w),a:[k[0],k[1]],b:[w[0],w[1]],left:g.left,right:g.right,exterior:g.exterior,roomLeft:g.roomLeft,roomRight:g.roomRight,sources:g.sources,footprint:E,...g.free?{free:g.free}:{},...g.height!==void 0?{height:g.height}:{}}}),warnings:[...new Set(r)]}}function Mo(i,e){let t=o=>Math.round(o*100),[n,r]=i[0]<e[0]||i[0]===e[0]&&i[1]<=e[1]?[i,e]:[e,i];return`w_${t(n[0])}_${t(n[1])}_${t(r[0])}_${t(r[1])}`}function Rr(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function Eo(i,e){let t=i.slice(),n=!0;for(;n;){n=!1;let r=new Map;t.forEach((o,s)=>{for(let a of[o.a,o.b]){let l=r.get(a);l||r.set(a,l=[]),l.push(s)}});for(let[o,s]of r){if(s.length!==2)continue;let a=t[s[0]],l=t[s[1]];if(a.b!==o&&(a=Rr(a)),l.a!==o&&(l=Rr(l)),a.a===l.b)continue;let c=Ne(K(e[a.b],e[a.a])),u=Ne(K(e[l.b],e[l.a]));if(Math.abs(Oe(c,u))>1e-6||jt(c,u)<=0||a.free||l.free||a.height!==l.height||a.exterior!==l.exterior||a.roomLeft!==l.roomLeft||a.roomRight!==l.roomRight||Math.abs(a.left-l.left)>1e-9||Math.abs(a.right-l.right)>1e-9)continue;let d={...a,b:l.b,sources:To(a.sources,l.sources)},p=t.filter((m,_)=>_!==s[0]&&_!==s[1]);p.push(d),t.length=0,t.push(...p),n=!0;break}}return t}function To(i,e){let t=i.map(n=>({...n}));for(let n of e){let r=t.find(o=>o.room_id===n.room_id&&o.edge===n.edge&&(Math.abs(o.t1-n.t0)<1e-6||Math.abs(n.t1-o.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):t.push({...n})}return t}function Ro(i,e){let t=new Map;i.forEach((r,o)=>{let s=Ne(K(e[r.b],e[r.a])),a=[[r.a,{key:`${o}:a`,d:s,left:r.left,right:r.right,angle:Math.atan2(s[1],s[0])}],[r.b,{key:`${o}:b`,d:de(s,-1),left:r.right,right:r.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a){let u=t.get(l);u||t.set(l,u=[]),u.push(c)}});let n=new Map;for(let[r,o]of t){let s=e[r];o.sort((c,u)=>c.angle-u.angle);let a=c=>({left:We(s,de(Er(c.d),c.left)),right:We(s,de(Tr(c.d),c.right))});for(let c of o)n.set(c.key,a(c));if(o.length<2)continue;let l=4*Math.max(...o.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<o.length;c++){let u=o[c],d=o[(c+1)%o.length],p=We(s,de(Er(u.d),u.left)),m=We(s,de(Tr(d.d),d.right)),_=Oe(u.d,d.d);if(Math.abs(_)<1e-4)continue;let b=Oe(K(m,p),d.d)/_,x=We(p,de(u.d,b));rt(K(x,s))>l||(n.get(u.key).left=x,n.get(d.key).right=x)}}return n}function zo(i,e){let t=i.filter((r,o)=>rt(K(r,i[(o+1)%i.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let r=0;r<t.length;r++){let o=t[(r+t.length-1)%t.length],s=t[r],a=t[(r+1)%t.length],l=K(s,o),c=K(a,s);if(Math.abs(Oe(Ne(l),Ne(c)))<1e-7&&jt(l,c)>0){t=t.filter((u,d)=>d!==r),n=!0;break}}}return t}var pe=.03,Po=.07;function ke(i,e=!1){if(!i)return null;let t=Number(i.state);if(!Number.isFinite(t))return null;let n=String(i.attributes.unit_of_measurement??"W"),r=n==="kW"?t*1e3:n==="MW"?t*1e6:t;return e?-r:r}function Io(i,e){return e.startsWith("sensor.")&&i.states[e]?.attributes.device_class==="power"}function Gt(i,e){if(Io(i,e))return e;let t=i.entities?.[e]?.device_id;return t?Ft(i,t).find(n=>n!==e)??null:null}function Ir(i,e){let t=e.energy,n=new Set([t.grid,t.solar,t.battery].filter(Boolean)),r=[],o=new Set;for(let s of e.floors)for(let a of s.placements){let l=Gt(i,a.entity_id);!l||n.has(l)||o.has(l)||(o.add(l),r.push({id:a.entity_id,powerEntity:l,floorId:s.id,x:a.x,z:a.z,power:Math.max(0,ke(i.states[l])??0)}))}return r}function Dr(i,e,t){let n=e.energy,r=n.grid?ke(i.states[n.grid],n.grid_invert):null,o=n.solar?ke(i.states[n.solar]):null,s=n.battery?ke(i.states[n.battery],n.battery_invert):null,a=n.battery_soc?Number(i.states[n.battery_soc]?.state):NaN,l=n.tariff?i.states[n.tariff]:void 0,c=Number(l?.state),u=null;return r!==null||o!==null||s!==null?u=Math.max(0,(r??0)+Math.max(0,o??0)+(s??0)):t.length&&(u=t.reduce((d,p)=>d+p.power,0)),{grid:r,solar:o===null?null:Math.max(0,o),battery:s,soc:Number.isFinite(a)?a:null,tariff:l&&Number.isFinite(c)?{value:c,unit:String(l.attributes.unit_of_measurement??"")}:null,consumption:u}}function it(i,e){return i.pos.push(e),i.adj.push([]),i.pos.length-1}function xe(i,e,t){let n=Math.hypot(i.pos[e][0]-i.pos[t][0],i.pos[e][1]-i.pos[t][1]);i.adj[e].push({to:t,w:n}),i.adj[t].push({to:e,w:n})}function Do(i,e){let t=i.length,n=i.map((r,o)=>{let s=i[(o+1)%t],a=s[0]-r[0],l=s[1]-r[1],c=Math.hypot(a,l)||1,u=-l/c,d=a/c;return{p:[r[0]+u*e[o],r[1]+d*e[o]],d:[a/c,l/c],n:[u,d]}});return i.map((r,o)=>{let s=n[(o-1+t)%t],a=n[o],l=s.d[0]*a.d[1]-s.d[1]*a.d[0];if(Math.abs(l)<1e-6)return[r[0]+a.n[0]*e[o],r[1]+a.n[1]*e[o]];let c=((a.p[0]-s.p[0])*a.d[1]-(a.p[1]-s.p[1])*a.d[0])/l;return[s.p[0]+s.d[0]*c,s.p[1]+s.d[1]*c]})}function Fo(i){return J(i.points)>=0?{pts:i.points,flipped:!1}:{pts:[...i.points].reverse(),flipped:!0}}function Co(i,e,t){let n={pos:[],adj:[],rings:new Map},{walls:r}=Kt(i.rooms,{exterior:e,interior:t},i.walls??[]);for(let o of i.rooms){if(o.points.length<3)continue;let{pts:s,flipped:a}=Fo(o),l=s.length,c=s.map((p,m)=>{let _=a?(l-2-m+l)%l:m,b=r.some(x=>!x.exterior&&x.sources.some(g=>g.room_id===o.id&&g.edge===_));return Po+(b?t/2:0)}),u=Do(s,c).map(p=>it(n,p)),d=u.map((p,m)=>[p,u[(m+1)%l]]);for(let[p,m]of d)xe(n,p,m);n.rings.set(o.id,d)}for(let o of r){if(o.exterior||!o.roomLeft||!o.roomRight)continue;let s=[(o.a[0]+o.b[0])/2,(o.a[1]+o.b[1])/2],a=ot(n,o.roomLeft,s),l=ot(n,o.roomRight,s);a!==null&&l!==null&&xe(n,a,l)}return n}function ot(i,e,t){let n=i.rings.get(e);if(!n)return null;let r=null;for(let s of n){let a=i.pos[s[0]],l=i.pos[s[1]],c=l[0]-a[0],u=l[1]-a[1],d=c*c+u*u||1,p=Math.min(1,Math.max(0,((t[0]-a[0])*c+(t[1]-a[1])*u)/d)),m=[a[0]+c*p,a[1]+u*p],_=Math.hypot(t[0]-m[0],t[1]-m[1]);(!r||_<r.d)&&(r={seg:s,q:m,d:_})}if(!r)return null;let o=it(i,r.q);return xe(i,o,r.seg[0]),xe(i,o,r.seg[1]),o}function zr(i,e){let t=i.rooms.filter(o=>o.points.length>=3),n=t.find(o=>I(e,o.points));if(n)return n;let r=null;for(let o of t)for(let s of o.points){let a=Math.hypot(e[0]-s[0],e[1]-s[1]);(!r||a<r.d)&&(r={room:o,d:a})}return r?.room??null}function Ho(i,e){let t=i.pos.map(()=>1/0),n=i.pos.map(()=>-1),r=i.pos.map(()=>!1);for(t[e]=0;;){let o=-1;for(let s=0;s<t.length;s++)!r[s]&&t[s]<1/0&&(o<0||t[s]<t[o])&&(o=s);if(o<0)break;r[o]=!0;for(let{to:s,w:a}of i.adj[o])t[o]+a<t[s]-1e-9&&(t[s]=t[o]+a,n[s]=o)}return{dist:t,prev:n}}var Pr=new WeakMap;function Lo(i,e){let t=i.energy.meter,n=i.floors.find(u=>u.id===t.floor_id),r=[],{wall_exterior:o,wall_interior:s}=i.settings,a=new Map,l=new Map;e.forEach((u,d)=>l.set(u.floorId,[...l.get(u.floorId)??[],d]));let c=i.floors.filter(u=>l.has(u.id));for(let u of c){if(u.id===n.id)continue;let d=u.elevation>n.elevation,p=l.get(u.id),m=p.every(b=>e[b].kind==="battery")?"battery":"consumer";r.push({floorId:n.id,a:[t.x,pe,t.z],b:[t.x,d?n.height:-.2,t.z],dist:0,members:p,kind:m});let _=Math.abs(u.elevation-n.elevation);r.push({floorId:u.id,a:[t.x,d?-.2:u.height,t.z],b:[t.x,pe,t.z],dist:_,members:p,kind:m}),a.set(u.id,_+.25)}for(let u of c){let d=Co(u,o,s),p=zr(u,[t.x,t.z]);if(!p)continue;let m=it(d,[t.x,t.z]),_=ot(d,p.id,[t.x,t.z]);if(_===null)continue;xe(d,m,_);let b=[];for(let w of l.get(u.id)){let A=e[w],R=zr(u,[A.x,A.z]);if(!R)continue;let E=it(d,[A.x,A.z]),z=ot(d,R.id,[A.x,A.z]);z!==null&&(xe(d,E,z),b.push({node:E,member:w}))}let{dist:x,prev:g}=Ho(d,m),h=new Map;for(let w of b)if(Number.isFinite(x[w.node]))for(let A=w.node;g[A]>=0;A=g[A]){let R=g[A],E=`${R}>${A}`,z=h.get(E)??{a:R,b:A,members:[]};z.members.push(w.member),h.set(E,z)}let k=a.get(u.id)??0;for(let{a:w,b:A,members:R}of h.values()){let E=d.pos[w],z=d.pos[A],P=R.every(y=>e[y].kind==="battery")?"battery":"consumer";r.push({floorId:u.id,a:[E[0],pe,E[1]],b:[z[0],pe,z[1]],dist:k+x[w],members:R,kind:P})}}return r}function Fr({building:i,consumers:e,summary:t,battery:n}){let r=i.energy.meter;if(!r)return[];let o=i.floors.find(m=>m.id===r.floor_id);if(!o)return[];let{wall_exterior:s,wall_interior:a}=i.settings,l=e.map(m=>({floorId:m.floorId,x:m.x,z:m.z,kind:"consumer",power:m.power}));n&&t.battery!==null&&l.push({...n,kind:"battery",power:Math.abs(t.battery)});let c=`${r.floor_id}:${r.x},${r.z}|${l.map(m=>`${m.floorId}:${m.x},${m.z}:${m.kind}`).join(";")}`,u=Pr.get(i);u||Pr.set(i,u=new Map);let d=u.get(c);d||(d=Lo(i,l),u.clear(),u.set(c,d));let p=d.map(m=>({floorId:m.floorId,a:m.a,b:m.b,dist:m.dist,power:m.members.reduce((_,b)=>_+l[b].power,0),kind:m.kind}));if(t.grid!==null){let{walls:m}=Kt(o.rooms,{exterior:s,interior:a},o.walls??[]),_=null;for(let b of m){if(!b.exterior)continue;let x=b.b[0]-b.a[0],g=b.b[1]-b.a[1],h=x*x+g*g||1,k=Math.min(1,Math.max(0,((r.x-b.a[0])*x+(r.z-b.a[1])*g)/h)),w=[b.a[0]+x*k,b.a[1]+g*k],A=Math.hypot(r.x-w[0],r.z-w[1]),R=Math.sqrt(h);(!_||A<_.d)&&(_={q:w,out:[g/R,-x/R],d:A})}if(_){let b=[_.q[0]+_.out[0]*(s+1.4),pe,_.q[1]+_.out[1]*(s+1.4)],x=[r.x,pe,r.z],g=t.grid>=0;p.push({floorId:o.id,a:g?b:x,b:g?x:b,dist:0,power:Math.abs(t.grid),kind:g?"grid":"export"})}}if(t.solar!==null&&p.push({floorId:o.id,a:[r.x+.08,o.height+.6,r.z+.08],b:[r.x+.08,pe,r.z+.08],dist:0,power:t.solar,kind:"solar"}),t.battery!==null&&t.battery>0)for(let m of p)m.kind==="battery"&&([m.a,m.b]=[m.b,m.a]);return p}function Cr(i,e){let t=[.22,.88,1],n=[1,.78,.2],r=[.35,1,.55];if(i==="grid")return t;if(i==="export"||i==="solar")return n;if(i==="battery")return r;let o=[[Math.max(0,e.grid??0),t],[Math.max(0,(e.solar??0)-Math.max(0,-(e.grid??0))-Math.max(0,-(e.battery??0))),n],[Math.max(0,e.battery??0),r]],[s]=o.reduce((a,l)=>l[0]>a[0]?l:a);return s>0?o.find(a=>a[0]===s)[1]:t}var Zt=["neon","blueprint","day"],Be={neon:{night:[[11,17,32],[7,11,20]],day:[[26,44,78],[12,20,36]]},blueprint:{night:[[26,70,130],[10,38,78]],day:[[34,86,150],[14,48,96]]},day:{night:[[214,224,238],[176,190,210]],day:[[242,246,251],[205,216,230]]}};var st={temperature:{deviceClass:"temperature",unit:"\xB0C",stops:[[17,[.24,.48,1]],[20.5,[.2,.9,.7]],[23,[1,.75,.25]],[25.5,[1,.32,.2]]]},humidity:{deviceClass:"humidity",unit:"%",stops:[[30,[1,.6,.2]],[45,[.3,.9,.5]],[60,[.2,.8,1]],[75,[.3,.4,1]]]},co2:{deviceClass:"carbon_dioxide",unit:"ppm",stops:[[450,[.3,.9,.5]],[800,[1,.85,.3]],[1200,[1,.5,.2]],[1600,[1,.25,.25]]]}};function Hr(i,e){let t=st[i].stops;if(e<=t[0][0])return t[0][1];for(let n=1;n<t.length;n++){let[r,o]=t[n],[s,a]=t[n-1];if(e<=r){let l=(e-s)/(r-s);return[a[0]+(o[0]-a[0])*l,a[1]+(o[1]-a[1])*l,a[2]+(o[2]-a[2])*l]}}return t[t.length-1][1]}function Lr(i,e,t){let n=new Map;for(let r of e.floors)for(let o of r.rooms){let s=Je(i,r,o,t);s!==null&&n.set(o.id,s)}return n}function Wr(i){let e=st[i].stops,t=e[0][0],n=e[e.length-1][0];return`linear-gradient(90deg, ${e.map(([r,o])=>`rgb(${o.map(s=>Math.round(s*255)).join(",")}) ${Math.round((r-t)/(n-t)*100)}%`).join(", ")})`}function Ve(i,e){if(!At(e))return S(i,`furn_${e}`);let t=U(e);return t?Nn(t,i?.language??navigator.language):S(i,"pack_missing_item")}var Wo=new Set(["on","home","true","present","occupied","detected","parked","yes","1"]);function at(i){return i&&i!=="none"?i:null}function Oo(i,e){if(e.type!=="parking")return null;let t=at(e.entity);if(t){let o=i.states[t];if(!o||!Wo.has(o.state.toLowerCase()))return null}let n=e.vehicle??null,r=at(e.type_entity);if(r&&e.types?.length){let o=(i.states[r]?.state??"").trim().toLowerCase();if(o){let s=l=>l.trim().toLowerCase(),a=e.types.find(l=>s(l.state)===o)??e.types.find(l=>s(l.state)&&o.includes(s(l.state)));a&&(n=a.vehicle)}}return n&&U(n)?n:null}function Xt(i,e){let t=new Map;for(let n of e.floors)for(let r of n.furniture){let o=Oo(i,r);o&&t.set(r.id,o)}return t}function Or(i){return i.flatMap(e=>e.furniture.filter(t=>t.type==="parking").flatMap(t=>[at(t.entity),at(t.type_entity)])).filter(e=>!!e)}var lt=1800*1e3,No=new Set(["motion","occupancy","presence"]);function Nr(i,e){return e.startsWith("binary_sensor.")&&No.has(String(i.states[e]?.attributes.device_class))}function ct(i,e){let t=[],n=new Set,r=(o,s,a,l)=>{n.has(o)||(n.add(o),t.push({entity:o,floorId:s,x:a,z:l}))};for(let o of e.floors)for(let s of o.placements)if(Nr(i,s.entity_id))r(s.entity_id,o.id,s.x,s.z);else if($(s.entity_id)==="camera")for(let a of He(i,s.entity_id))r(a,o.id,s.x,s.z);for(let o of e.floors)for(let s of o.rooms){if(!s.area_id||s.points.length<3)continue;let[a,l]=ce(s.points);for(let c of H(i,s.area_id))Nr(i,c)&&r(c,o.id,a,l)}return t}function Br(i,e,t,n=lt){let r=t-n,o=[];for(let[s,a]of Object.entries(i)){let l="";for(let c of a){let u=(c.lc??c.lu)*1e3;c.s==="on"&&l!=="on"&&u>=r&&u<=t&&o.push({entity:s,time:u}),l=c.s}}for(let s of e){let a=s.lastChanged??NaN;s.state!=="on"||!(a>=r&&a<=t)||o.some(l=>l.entity===s.entity&&Math.abs(l.time-a)<2e3)||o.push({entity:s.entity,time:a})}return o.sort((s,a)=>s.time-a.time)}function Vr(i,e,t,n=lt){let r=new Map(i.map(s=>[s.entity,s])),o=[];for(let s of e){let a=r.get(s.entity);if(!a)continue;let l=o[o.length-1];l&&l.entity===s.entity&&s.time-l.time<6e4||o.push({...a,time:s.time,age:Math.min(1,Math.max(0,(t-s.time)/n))})}return o.slice(-40)}function qr(i,e){return new Date(e).toLocaleTimeString(i.language,{hour:"2-digit",minute:"2-digit"})}var Ur='<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>';var ut=i=>i.toLocaleLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");function jr(i,e){let t=[],n=we(i,e.floors),r=e.floors.length>1;for(let o of e.floors){let s=(u,d)=>o.rooms.find(p=>p.points.length>=3&&I([u,d],p.points))??null,a=(u,d)=>[s(u,d)?.name,r?o.name:null].filter(Boolean).join(" \xB7 ");for(let u of o.rooms){if(u.points.length<3)continue;let[d,p]=ce(u.points);t.push({kind:"room",name:u.name,where:r?o.name:"",floorId:o.id,roomId:u.id,entity:null,icon:null,x:d,z:p,y:0})}let l=new Set,c=(u,d,p,m)=>{l.has(u)||!i.states[u]||(l.add(u),t.push({kind:"device",name:D(i,u),where:a(d,p),floorId:o.id,roomId:s(d,p)?.id??null,entity:u,icon:$(u),x:d,z:p,y:m}))};for(let u of o.placements)c(u.entity_id,u.x,u.z,u.y??be($(u.entity_id)??"sensor",o.height,u.mount));for(let u of o.furniture){let d=n.get(u.id),p=d?.entity??d?.power;p&&c(p,u.x,u.z,Math.min(o.height-.3,Math.max(.5,u.h)))}}return t}function Kr(i,e,t=8){let n=ut(e).split(/\s+/).filter(Boolean);if(!n.length)return[];let r=i.filter(a=>{let l=ut(`${a.name} ${a.where} ${a.entity??""}`);return n.every(c=>l.includes(c))}),o=ut(e.trim()),s=a=>(ut(a.name).startsWith(o)?0:2)+(a.kind==="room"?0:1);return r.sort((a,l)=>s(a)-s(l)||a.name.localeCompare(l.name)).slice(0,t)}var Bo=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[190,90,255],[255,95,210],[255,70,70],[120,255,150]],Vo=[2200,2700,3200,4e3,5e3,6500],qo=["hs","rgb","rgbw","rgbww","xy"],Uo=4;function Jt(i){let e=i.attributes.supported_color_modes??[],t=e.some(n=>qo.includes(n));return{dim:e.some(n=>n!=="onoff"),color:t,temp:e.includes("color_temp")}}function Qt(i){return((i.attributes.supported_features??0)&Uo)!==0&&typeof i.attributes.current_position=="number"}var Yt=class extends W{static properties={hass:{attribute:!1},entity:{attribute:!1},confirmSwitch:{type:Boolean},pro:{type:Boolean},low:{type:Boolean,reflect:!0},_tick:{state:!0}};tickTimer;connectedCallback(){super.connectedCallback(),this._tick=0,this.tickTimer=setInterval(()=>{$(this.entity)==="camera"&&!document.hidden&&this._tick++},3e3)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.tickTimer)}renderCamera(e){let t=e.attributes.entity_picture,n=t?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this._tick}`:null;return f`<button class="qm-camera" title=${this.t("camera_live")} @click=${()=>this.details()}>
        ${n?f`<img src=${n} alt=${D(this.hass,this.entity)} />`:f`<span class="qm-note">${L(this.hass,e)}</span>`}
      </button>
      <button class="qm-details qm-look" @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:this.entity},bubbles:!0,composed:!0}))}>
        ${this.pro?"":"\u{1F512} "}${this.t("through_camera")}
      </button>`}t(e,t){return S(this.hass,e,t)}ask(){return!this.confirmSwitch||confirm(this.t("confirm_switch",{name:D(this.hass,this.entity)}))}call(e,t,n={}){this.hass.callService(e,t,{entity_id:this.entity,...n})}close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}details(){te(this,this.entity),this.close()}ring(e){let t=e.length;return e.map((n,r)=>{let o=r/t*Math.PI*2-Math.PI/2;return f`<div class="qm-at" style="left:${50+Math.cos(o)*39}%;top:${50+Math.sin(o)*39}%">${n}</div>`})}renderLight(e){let t=Jt(e),n=e.state==="on",r=n&&typeof e.attributes.brightness=="number"?Math.round(e.attributes.brightness/2.55):n?100:0,o=t.color?Bo.map(s=>f`<button class="qm-swatch" style="background:rgb(${s.join(",")})" aria-label=${`RGB ${s.join(", ")}`} @click=${()=>this.call("light","turn_on",{rgb_color:s})}></button>`):t.temp?Vo.map(s=>f`<button class="qm-swatch" style="background:${jo(s)}" aria-label=${`${s} K`} @click=${()=>this.call("light","turn_on",{color_temp_kelvin:s})}></button>`):[];return f`<div class="qm-ring ${o.length?"":"qm-ring-small"}">
        ${this.ring(o)}
        <button class="qm-power ${n?"qm-on":""}" aria-pressed=${n} @click=${()=>this.ask()&&this.call("light","toggle")}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
          <b>${n?`${r} %`:this.t("qm_off")}</b>
        </button>
      </div>
      ${t.dim?f`<input
            class="qm-slider"
            type="range"
            min="1"
            max="100"
            .value=${String(Math.max(1,r))}
            aria-label=${this.t("brightness")}
            @change=${s=>this.call("light","turn_on",{brightness_pct:Number(s.target.value)})}
          />`:v}`}renderCover(e){let t=typeof e.attributes.current_position=="number"?e.attributes.current_position:null,n=e.state==="opening"||e.state==="closing",r=Qt(e),o=(c,u,d,p=!1)=>f`<button class="qm-swatch qm-slot ${p?"qm-slot-on":""}" aria-label=${u} @click=${d}>${c}</button>`,s=c=>t!==null&&Math.abs(t-c)<3,a=[o("\u25B2",this.t("cover_open"),()=>this.ask()&&this.call("cover","open_cover"),s(100)),...r?[75,50].map(c=>o(`${c}`,`${c} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:c}),s(c))):[],o("\u25BC",this.t("cover_close"),()=>this.ask()&&this.call("cover","close_cover"),s(0)),...r?[25].map(c=>o(`${c}`,`${c} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:c}),s(c))):[],o("\u25A0",this.t("cover_stop"),()=>this.call("cover","stop_cover"),n)],l=t===null?e.state==="closed"?100:0:100-t;return f`<div class="qm-ring">
        ${this.ring(a)}
        <button
          class="qm-power qm-blind ${l<100?"qm-on":""}"
          style="--closed:${l}%"
          aria-label=${n?this.t("cover_stop"):l>50?this.t("cover_open"):this.t("cover_close")}
          @click=${()=>n?this.call("cover","stop_cover"):this.ask()&&this.call("cover",l>50?"open_cover":"close_cover")}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16M5 4v15M19 4v15M7 8h10M7 12h10M7 16h10" /></svg>
          <b>${t!==null?`${t} %`:L(this.hass,e)}</b>
        </button>
      </div>
      ${r?f`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(t??0)}
            aria-label=${this.t("position")}
            @change=${c=>this.call("cover","set_cover_position",{position:Number(c.target.value)})}
          />`:v}`}renderToggle(e){let t=e.state==="on"||e.state==="unlocked"||e.state==="playing",n=e.entity_id.split(".")[0];return f`<div class="qm-ring qm-ring-small">
      <button
        class="qm-power ${t?"qm-on":""}"
        aria-pressed=${t}
        @click=${()=>this.ask()&&(n==="lock"?this.call("lock",t?"lock":"unlock"):this.call("homeassistant","toggle"))}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
        <b>${L(this.hass,e)}</b>
      </button>
    </div>`}render(){let e=this.hass?.states[this.entity];if(!e)return v;let t=$(this.entity),n=F(e)?f`<p class="qm-note">${L(this.hass,e)}</p>`:t==="light"?this.renderLight(e):t==="cover"?this.renderCover(e):t==="camera"?this.renderCamera(e):this.renderToggle(e);return f`<div class="qm" role="dialog" aria-label=${D(this.hass,this.entity)}>
      <div class="qm-title">${D(this.hass,this.entity)}</div>
      ${n}
      <button class="qm-details" @click=${()=>this.details()}>${this.t("details")} …</button>
    </div>`}static styles=[j,V`
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
    `]};function jo(i){let e=Math.min(1,Math.max(0,(i-2200)/4300)),t=(n,r)=>Math.round(n+(r-n)*e);return`rgb(${t(255,200)},${t(170,225)},${t(80,255)})`}customElements.get("fp3d-quick-menu")||customElements.define("fp3d-quick-menu",Yt);var Ko=new URL(import.meta.url),Go=new URL("./neonplan3d-3d.js?v=66a6580c3503",Ko).href,Gr;function Zr(){return Gr??=import(Go),Gr}var Xr=i=>i.toLowerCase().replace(/[_\-]+/g," ").replace(/\s+/g," ").trim();function Zo(i,e,t){let n=Xr(t);if(!n||n==="unknown"||n==="unavailable"||n==="not home"||n==="away")return null;for(let r of e.floors)for(let o of r.rooms)if([o.name,o.area_id??"",o.area_id?i.areas?.[o.area_id]?.name??"":""].filter(Boolean).map(Xr).includes(n))return{floorId:r.id,room:o};return null}function Xo(i){let e=i.trim().split(/\s+/).filter(Boolean);return e.length?(e.length>1?e[0][0]+e[e.length-1][0]:e[0].slice(0,2)).toUpperCase():"?"}function Yr(i,e){let t=[],n=new Map;for(let r of e.presence){let o=i.states[r.person];if(!o||!r.sensor||o.state!=="home"&&o.state!=="on")continue;let s=i.states[r.sensor];if(!s)continue;let a=Zo(i,e,s.state);if(!a)continue;let l=n.get(a.room.id)??0;n.set(a.room.id,l+1);let[c,u]=ce(a.room.points),d=-Math.PI/2+.9+l*1.15,p=.75,m=o.attributes.friendly_name??r.person;t.push({id:r.person,name:m,initials:Xo(m),picture:o.attributes.entity_picture??null,floorId:a.floorId,roomId:a.room.id,x:c+Math.cos(d)*p,z:u+Math.sin(d)*p})}return t}function Jr(i,e,t,n){let r=new Map,o=s=>!!s&&i.states[s]?.state==="on";for(let s of e.floors){let a=new Set;for(let c of s.rooms)for(let u of Lt(i,H(i,c.area_id)))$(u)==="light"&&a.add(u);for(let c of s.placements)$(c.entity_id)==="light"&&a.add(c.entity_id);let l=s.openings.filter(c=>{let u=t.get(c.id);if(!u)return!1;if(c.type==="garage")return(Q(i,u,"garage").cover??1)<.95;if(c.type==="door")return o(u.contact)||o(u.contact2??null);let d=Q(i,u,"window");return d.open>.5||d.tilt>.5||d.open2>.5||d.tilt2>.5}).length;r.set(s.id,{rooms:s.rooms.length,lightsOn:[...a].filter(c=>i.states[c]?.state==="on").length,open:l,persons:n.filter(c=>c.floorId===s.id).length})}return r}function Qr(i,e){let t=[e.rooms===1?S(i,"floor_rooms_one"):S(i,"floor_rooms",{n:e.rooms})];return e.lightsOn&&t.push(S(i,"floor_lights",{n:e.lightsOn})),e.open&&t.push(S(i,"floor_open",{n:e.open})),e.persons&&t.push(S(i,"floor_persons",{n:e.persons})),t.join(" \xB7 ")}var en=class extends W{static properties={hass:{attribute:!1},building:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},wallMode:{attribute:!1},explode:{type:Boolean},markerMode:{attribute:!1},heatMode:{attribute:!1},theme:{attribute:!1},packs:{attribute:!1},showEnergy:{attribute:!1},flows:{attribute:!1},furnish:{type:Boolean},surfaceGrab:{attribute:!1},furnishTypes:{attribute:!1},trail:{type:Boolean},weather:{type:Boolean},weatherEntityId:{attribute:!1},_flash:{state:!0},_proHint:{state:!0},selectedFurniture:{attribute:!1},selectedDevice:{attribute:!1},_sky:{state:!0},quality:{attribute:!1},showStats:{type:Boolean},_stats:{state:!0},_error:{state:!0},_energy:{state:!0},_flows:{state:!0},_swipe:{state:!0},_menu:{state:!0},_through:{state:!0},_blend:{state:!0},_find:{state:!0},_thumbs:{state:!0},floorThumbs:{attribute:!1},roomLabels:{attribute:!1},floorStack:{attribute:!1},panelOpen:{attribute:!1},alerts:{attribute:!1},alertJump:{attribute:!1},scenes:{attribute:!1},dimmed:{attribute:!1},autoOrbit:{attribute:!1},_low:{state:!0},_narrowStage:{state:!0},_alerts:{state:!0},_sceneFired:{state:!0}};flashTimer;cloud=0;confirmSet=new Set;trailRows={};trailTimer;resizeObs=null;alertSrc=null;alertTimer;seenAlerts=new Set;roomFlash=null;findIndex=null;tintSig="";thumbTimer;thumbSig="";thumbsAt=0;swipeSent=0;swipeTimer;viewer=null;starting=!1;shownStates=new Map;shownPacks=-1;openingLinks=null;linkedRegistry;furnitureLinks=new Map;heatValues=new Map;watched=[];pictureUrls=new Map;cameraTick=0;cameraTimer;cameraScreens=0;throughFloor=null;constructor(){super(),this.building=null,this.floorId=null,this.roomId=null,this.wallMode="auto",this.explode=!0,this.markerMode="important",this.heatMode="none",this.theme="neon",this.furnish=!1,this.trail=!1,this.weather=!0,this.weatherEntityId=null,this._flash=!1,this._proHint=null,this.showEnergy=!0,this.flows=null,this.selectedFurniture=null,this.selectedDevice=null,this._sky=0,this.quality="auto",this.showStats=!1,this._stats=null,this._error=null,this._energy=null,this._swipe=null,this._menu=null,this._through=null,this._blend=.6,this._find=null,this._thumbs=[],this.floorThumbs=!0,this.roomLabels=!0,this.floorStack="dim",this._low=!1,this.panelOpen=!1,this._narrowStage=!1,this.alerts=!0,this.alertJump=!1,this._alerts=[],this.scenes=!0,this._sceneFired=null,this.dimmed=!1,this.autoOrbit=!1;try{this._flows=localStorage.getItem("neonplan3d.flows")==="1"}catch{this._flows=!1}}connectedCallback(){super.connectedCallback(),this.hasUpdated&&(this.observeStage(),this.viewer||this.start())}disconnectedCallback(){super.disconnectedCallback(),this.resizeObs?.disconnect(),this.resizeObs=null,clearInterval(this.alertTimer),this.alertTimer=void 0,clearInterval(this.cameraTimer),this.cameraTimer=void 0,clearInterval(this.trailTimer),this.trailTimer=void 0,clearTimeout(this.flashTimer),this.flashTimer=void 0,this.viewer?.dispose(),this.viewer=null}firstUpdated(){this.observeStage(),this.start()}observeStage(){let e=this.renderRoot.querySelector(".fp3d-stage");!e||this.resizeObs||typeof ResizeObserver!="function"||(this.resizeObs=new ResizeObserver(t=>{let n=(t[0]?.contentRect.width??1e3)<700;n!==this._narrowStage&&(this._narrowStage=n,this.scheduleThumbs())}),this.resizeObs.observe(e))}async start(){if(!(this.starting||this.viewer)){this.starting=!0;try{let e=await Zr();if(!this.isConnected)return;let t=this.renderRoot.querySelector(".fp3d-stage");this.viewer=e.createViewer(t,{quality:this.quality,explode:this.explode,onRoomTap:(n,r)=>this.fire("room-tap",{floorId:n,roomId:r}),onFloorTap:n=>this.fire("floor-tap",{floorId:n}),floorInfo:n=>n.rooms.length===1?S(this.hass,"floor_rooms_one"):S(this.hass,"floor_rooms",{n:n.rooms.length}),onBack:()=>this.fire("back",{}),onDeviceTap:(n,r,o)=>this.onDeviceTap(n,r,o),onDeviceHold:(n,r,o)=>this.onDeviceHold(n,r,o),onRoomDoubleTap:(n,r)=>this.onRoomDoubleTap(n,r),onDeviceSwipe:(n,r,o,s,a)=>this.onDeviceSwipe(n,r,o,s,a),onFurnitureSelect:n=>this.fire("furniture-select",{id:n}),onFurnitureMove:(n,r,o)=>this.fire("furniture-move",{id:n,x:r,z:o}),onDeviceSelect:n=>this.fire("device-select",{id:n}),onDeviceMove:(n,r,o)=>this.fire("device-move",{id:n,x:r,z:o}),onStats:n=>{this.showStats&&(this._stats=n)}}),this.viewer.setWallMode(this.wallMode),this.viewer.setTheme(this.theme),this.viewer.setFurnishMode(this.furnish),this.viewer.setSurfaceGrab(this.surfaceGrab??null),this.viewer.setFurnishTypes(this.furnishTypes??null),this.viewer.setFloorStack(this.floorStack),this.viewer.setStats(this.showStats),this.viewer.setAutoOrbit(this.autoOrbit?.06:0),this._low=this.viewer.low,this.viewer.setPacks([...Pe()]),this.shownPacks=Ge(),this.building&&this.viewer.setBuilding(this.building),this.scheduleThumbs(),this.syncDevices(!0),this.viewer.setFloor(this.floorId,!1),this.roomId&&this.viewer.selectRoom(this.roomId)}catch(e){this._error=String(e)}finally{this.starting=!1}}}updated(e){let t=this.viewer;if(!t)return;this._through&&(e.has("roomId")||e.has("floorId"))&&(this.floorId===this.throughFloor?this.throughFloor=null:this._through=null),this.shownPacks!==Ge()&&(this.shownPacks=Ge(),t.setPacks([...Pe()]),this.hass&&this.building&&t.setParked(Xt(this.hass,this.building))),e.has("building")&&this.building&&t.setBuilding(this.building),(e.has("building")||e.has("theme")||e.has("floorThumbs")||e.has("packs"))&&this.scheduleThumbs();let n=["building","markerMode","heatMode","flows","alerts","dimmed"].some(r=>e.has(r));(n||e.has("hass"))&&this.syncDevices(n),e.has("autoOrbit")&&t.setAutoOrbit(this.autoOrbit?.06:0),(e.has("_thumbs")||e.has("_narrowStage"))&&t.setLabelInset(this._thumbs.length?this.narrowThumbs?136:184:0),e.has("floorId")&&t.setFloor(this.floorId),e.has("roomId")&&(this.roomId||e.get("roomId"))&&t.selectRoom(this.roomId),e.has("wallMode")&&t.setWallMode(this.wallMode),e.has("explode")&&t.setExplode(this.explode),e.has("floorStack")&&t.setFloorStack(this.floorStack),e.has("theme")&&t.setTheme(this.theme),e.has("surfaceGrab")&&t.setSurfaceGrab(this.surfaceGrab??null),e.has("furnishTypes")&&t.setFurnishTypes(this.furnishTypes??null),e.has("furnish")&&(t.setFurnishMode(this.furnish),this.syncDevices(!0)),e.has("selectedFurniture")&&t.selectFurniture(this.selectedFurniture),e.has("selectedDevice")&&t.setSelectedDevice(this.selectedDevice),e.has("trail")&&this.watchTrail(),(e.has("weather")||e.has("weatherEntityId"))&&this.syncDevices(!0),e.has("quality")&&e.get("quality")!==void 0&&(t.setQuality(this.quality),this._low=t.low),e.has("showStats")&&t.setStats(this.showStats),e.has("building")&&(this.findIndex=null)}syncDevices(e){let t=this.viewer,n=this.building;if(!t||!n||!this.hass)return;let r=this.hass;if(e||!this.openingLinks||this.linkedRegistry!==r.entities){this.openingLinks=Qe(r,n.floors),this.furnitureLinks=we(r,n.floors),this.linkedRegistry=r.entities,this.findIndex=null;let y=[...this.openingLinks.values()].flatMap(T=>[T.cover,T.contact,T.tilt,T.contact2??null,T.tilt2??null,T.position??null]),M=vr(n),B=M.filter(T=>$(T)==="camera").flatMap(T=>He(r,T)),G=M.map(T=>Gt(r,T)),Se=n.energy,oi=n.presence.flatMap(T=>[T.person,T.sensor]),si=n.floors.flatMap(T=>T.rooms.flatMap(O=>H(r,O.area_id).filter(ie=>$(ie)==="light"))),ai=[...this.furnitureLinks.values()].flatMap(T=>[T.entity,T.power]),li=n.floors.flatMap(T=>T.furniture.flatMap(O=>[O.door_left??null,O.door_right??null,O.soc??null,O.status??null])),ci=(n.settings.roof?.windows??[]).flatMap(T=>[T.cover,T.contact,T.tilt]).filter(T=>!!T&&T!=="none"),ui=n.floors.flatMap(T=>T.furniture.filter(O=>O.type==="robot_vacuum").map(O=>Bt(r,this.furnitureLinks.get(O.id)?.entity??null,O.room_sensor))),di=n.floors.flatMap(T=>T.furniture.flatMap(O=>(O.pictures??[]).flatMap(ie=>[ie.entity,...ie.image.startsWith("camera:")?[ie.image.slice(7)]:[]]))),pi=this.heatMode==="none"?[]:n.floors.flatMap(T=>T.rooms.flatMap(O=>H(r,O.area_id).filter(ie=>ie.startsWith("sensor."))));this.alertSrc=this.alerts?Sr(r,n,this.weatherEntityId):null;let hi=this.alertSrc?$r(this.alertSrc):[],fi=Or(n.floors),mi=ct(r,n).map(T=>T.entity),_i=Le(r,this.weatherEntityId??n.settings.weather_entity),gi=[...M,...B,...y,...G,...ai,...li,...ui,...ci,...di,Se.grid,Se.solar,Se.battery,Se.battery_soc,Se.tariff,...oi,...si,...pi,...hi,...fi,...mi,_i,"sun.sun"];this.watched=[...new Set(gi.filter(T=>!!T))],e=!0}if(!(e||this.watched.some(y=>this.shownStates.get(y)!==r.states[y])))return;this.shownStates=new Map(this.watched.map(y=>[y,r.states[y]]));let s=Ir(r,n),a=br(r,n),l=this.furnitureMarkers(r,n,new Set(a.map(y=>y.id)),new Set(s.map(y=>y.powerEntity)));s.push(...l.consumers);let c=Dr(r,n,s),u=new Map(s.filter(y=>y.id!==y.powerEntity).map(y=>[y.id,y.power]));this.confirmSet=ve(r,n.floors);let d=this.trail?this.trailNow(r,n):[];t.setDevices([...[...a,...l.markers].map(y=>{let M=y.show==="no_power"?null:u.get(y.id)??null,B={...y,power:M,powerText:M===null?void 0:re(r,M),effect:this.dimmed?!1:y.effect};return{...B,pin:this.showPin(B)}}),...d.map((y,M)=>({id:`trail:${M}`,floorId:y.floorId,roomId:null,x:y.x,z:y.z,y:.3+.4*d.slice(0,M).filter(B=>B.entity===y.entity).length,icon:Ur,name:D(r,y.entity),text:qr(r,y.time),active:!1,unavailable:!1,glow:null,pin:!0}))]),t.setTrail(d),t.setPickTargets(l.targets,this.openingTargets()),t.setScreens(l.screens),t.setFridgeDoors(Ot(r,n.floors)),t.setRobots(this.robotInfos(r,n));let p=new Map;for(let y of n.settings.roof?.windows??[]){let M=G=>G&&G!=="none"?G:null,B=Q(r,{cover:M(y.cover),contact:M(y.contact),tilt:M(y.tilt)},"window");p.set(y.id,{open:B.open,tilt:B.tilt,cover:B.cover??0})}t.setRoofWindows(p),t.setParked(Xt(r,n));let m=new Map(n.floors.flatMap(y=>y.openings.map(M=>[M.id,M.type]))),_=new Map([...this.openingLinks].map(([y,M])=>[y,Q(r,M,m.get(y))]));t.setOpeningStates(_),this.setAlerts(this.alertSrc?Ar(r,n,this.alertSrc,this.openingLinks):[]);let b=[...a,...l.markers].map(y=>`${y.id}:${y.glow?`${y.glow.level.toFixed(1)}/${y.glow.color.map(M=>M.toFixed(1)).join("/")}`:0}`).join(";")+"|"+[..._].map(([y,M])=>`${y}:${M.open}:${M.cover===null?"-":M.cover.toFixed(1)}`).join(";");if(b!==this.thumbSig){let y=this.thumbSig==="";this.thumbSig=b,y||this.scheduleThumbs(1500)}let x=n.energy.battery?n.floors.flatMap(y=>y.placements.filter(M=>M.entity_id===n.energy.battery).map(M=>({floorId:y.id,x:M.x,z:M.z})))[0]:null;t.setFlows(!!1||!(this.flows??this._flows)||this.dimmed?[]:Fr({building:n,consumers:s,summary:c,battery:x??null}).map(y=>({floorId:y.floorId,a:y.a,b:y.b,dist:y.dist,power:y.power,color:Cr(y.kind,c)})));let g=[];t.setPersons(g);let h=Jr(r,n,this.openingLinks,g);t.setFloorInfo(new Map([...h].map(([y,M])=>[y,Qr(r,M)])));let k=r.states["sun.sun"]?.attributes,w=typeof k?.elevation=="number"?k.elevation:null;t.setSun(w!==null&&typeof k?.azimuth=="number"?{elevation:w,azimuth:k.azimuth}:null);let A=this.weather&&!this.dimmed&&q("weather")?yr(r,Le(r,this.weatherEntityId??n.settings.weather_entity)):null,R=A?kr(A,n.settings.weather_effects):null;this.cloud=R?.cloud??0,this._sky=(w===null?0:Math.min(1,Math.max(0,(w+4)/16)))*(1-.45*this.cloud);let E=R?R.sky:(n.settings.weather_effects??["sky"]).includes("sky");t.setWeather(this.weather&&!this.dimmed&&q("weather")?{...R??{rain:0,snow:0,fog:0,cloud:0,wind:0},sky:this.skyColor(),disc:E}:null),this.watchLightning(!!R?.lightning),this.applyTint();let P=c.grid!==null||c.solar!==null||c.battery!==null||c.tariff!==null?c:null;JSON.stringify(P)!==JSON.stringify(this._energy)&&(this._energy=P)}setAlerts(e){let t=e.map(r=>`${r.kind}:${r.entity}`),n=e.filter((r,o)=>!this.seenAlerts.has(t[o]));this.seenAlerts=new Set(t),t.join()!==this._alerts.map(r=>`${r.kind}:${r.entity}`).join()&&(this._alerts=e),e.length&&!this.alertTimer&&(this.alertTimer=setInterval(()=>!document.hidden&&this.applyTint(),this._low?200:100)),!e.length&&this.alertTimer&&(clearInterval(this.alertTimer),this.alertTimer=void 0),n.length&&this.alertJump&&this.jumpTo(n[0])}jumpTo(e){if(!e.floorId){this.fire("floor-tap",{floorId:null});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),e.roomId&&setTimeout(()=>this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId}),60)}onRoomDoubleTap(e,t){let n=this.building,r=this.hass,o=n?.floors.find(u=>u.id===e),s=o?.rooms.find(u=>u.id===t);if(!n||!r||!o||!s)return;let a=new Set(H(r,s.area_id).filter(u=>$(u)==="light"));for(let u of o.placements)$(u.entity_id)==="light"&&I([u.x,u.z],s.points)&&a.add(u.entity_id);for(let u of o.furniture){let d=this.furnitureLinks.get(u.id)?.entity;d&&Mt(u.type)&&I([u.x,u.z],s.points)&&a.add(d)}let l=[...a].filter(u=>!this.confirmSet.has(u));if(!l.length)return;let c=l.some(u=>r.states[u]?.state==="on");r.callService("homeassistant",c?"turn_off":"turn_on",{entity_id:l}),this.roomFlash={roomId:t,until:performance.now()+350},this.applyTint(),setTimeout(()=>{this.roomFlash=null,this.applyTint()},380)}runScene(e){this.hass.callService(e.split(".")[0],"turn_on",{entity_id:e}),this._sceneFired=e,setTimeout(()=>this._sceneFired=null,600)}applyTint(){let e=this.viewer,t=this.building,n=this.hass;if(!e||!t||!n)return;let r=null;if(this.heatMode!=="none"){let s=this.heatMode,a=Lr(n,t,s);this.heatValues=a,r=new Map([...a].map(([l,c])=>[l,Hr(s,c)]))}if(this._alerts.length){r??=new Map;let s=.55+.45*Math.sin(performance.now()/160);for(let a of this._alerts){let l=Mr(a.kind).map(c=>c*s);if(a.roomId)r.set(a.roomId,l);else for(let c of t.floors)for(let u of c.rooms)r.set(u.id,l)}}this.roomFlash&&performance.now()<this.roomFlash.until&&(r??=new Map,r.set(this.roomFlash.roomId,[.9,.95,1]));let o=r?[...r].map(([s,a])=>`${s}:${a.map(l=>l.toFixed(2)).join(",")}`).join(";"):"";o!==this.tintSig&&(this.tintSig=o,e.setRoomTint(r))}furnitureMarkers(e,t,n,r){let o=[],s=[],a=new Map,l=new Map;for(let d of t.floors)for(let p of d.furniture){let m=this.furnitureLinks.get(p.id);if(Mt(p.type)){o.push(this.lampMarker(e,d,p,m?.entity??null));continue}let _=p.type==="home_battery"?p.soc:p.type==="wallbox"?p.status:null,b=_&&_!=="none"?_:null,x=m??(b?{entity:null,power:null}:void 0);if(!x)continue;l.set(p.id,x.entity??x.power??b);let g=x.entity??x.power??b,h=x.entity?e.states[x.entity]:void 0,k=x.power?ke(e.states[x.power]):null;x.power&&k!==null&&!r.has(x.power)&&(r.add(x.power),s.push({id:g,powerEntity:x.power,floorId:d.id,x:p.x,z:p.z,power:Math.max(0,k)}));let w=(k??0)>10||h?.state==="on"||h?.state==="running"||Ct(h)&&ue(h);if(p.type==="radiator"&&h&&$(h.entity_id)==="climate"){let E=h.attributes;if(E.hvac_action==="heating"){let z=typeof E.temperature=="number"&&typeof E.current_temperature=="number"?E.temperature-E.current_temperature:1;a.set(p.id,{color:[1,.42,.1],level:Math.min(1,.45+.25*Math.max(0,z))})}}else(p.type==="washer"||p.type==="dryer"||p.type==="dishwasher")&&w&&a.set(p.id,{color:[.3,.85,1],level:.8});if(h&&Wt(p.type)){let E=q("screens"),z=$(h.entity_id)==="light"?Fe(h):null,P=E&&$(h.entity_id)==="media"?cr(h):z?z.color:ue(h)||h.state==="playing"?[.22,.88,1]:null,y=E&&$(h.entity_id)==="media"?h.attributes.entity_picture??null:null;P&&a.set(p.id,{color:P,level:h.state==="playing"?1:.6,picture:y})}if(n.has(g))continue;n.add(g);let A=x.entity?$(x.entity):null,R=d.rooms.find(E=>E.points.length>=3&&I([p.x,p.z],E.points));o.push({id:g,floorId:d.id,roomId:R?.id??null,x:p.x,z:p.z,y:Jo(p)+me(d,p),icon:Ce(A??"switch"),name:x.entity?D(e,x.entity):Ve(e,p.type),text:p.type==="home_battery"?this.batteryText(e,b,k):p.type==="wallbox"?this.wallboxText(e,b,k):h?L(e,h):k!==null?re(e,Math.max(0,k)):"",active:h?ue(h):(k??0)>5,unavailable:h?F(h):!1,glow:null,furnitureId:p.id,show:p.marker??void 0,fromFurniture:!0})}this.cameraScreens=0;let c=Ot(e,t.floors),u=q("screens");for(let d of t.floors)for(let p of d.furniture){if(!u||!p.pictures?.length||!Wt(p.type)||p.type==="fridge_smart"&&c.get(p.id)?.right)continue;let m=p.pictures.find(x=>ar(e,x));if(!m)continue;let _=this.pictureUrl(m.image),b=p.screen_bg==="white"?[.92,.94,1]:[.08,.08,.1];_&&a.set(p.id,{color:b,level:1,picture:_,plain:!0})}return this.watchCameras(this.cameraScreens>0||!!this._through),{markers:o,consumers:s,screens:a,targets:l}}trailNow(e,t){let n=Date.now(),r=ct(e,t),o=r.map(s=>{let a=e.states[s.entity];return{entity:s.entity,state:a?.state,lastChanged:a?.last_changed?Date.parse(a.last_changed):void 0}});return Vr(r,Br(this.trailRows,o,n),n)}watchTrail(){if(clearInterval(this.trailTimer),this.trailTimer=void 0,this.trail&&!q("camera_cockpit")&&(this._proHint="camera_cockpit"),!this.trail||!q("camera_cockpit")){this.trailRows={},this.syncDevices(!0);return}let e=async()=>{let t=this.hass,n=this.building;if(!t||!n||document.hidden)return;let r=ct(t,n).map(o=>o.entity);if(r.length){try{let o=await t.callWS({type:"history/history_during_period",start_time:new Date(Date.now()-lt).toISOString(),entity_ids:r,minimal_response:!0,no_attributes:!0,significant_changes_only:!1});this.trailRows=o??{}}catch{this.trailRows={}}this.syncDevices(!0)}};e(),this.trailTimer=setInterval(()=>{e()},6e4)}watchCameras(e){e&&!this.cameraTimer?this.cameraTimer=setInterval(()=>{document.hidden||(this.cameraTick++,this.syncDevices(!0),this._through&&this.requestUpdate())},this._low?1e4:5e3):!e&&this.cameraTimer&&(clearInterval(this.cameraTimer),this.cameraTimer=void 0)}pictureUrl(e){if(/^https?:\/\//.test(e))return e;if(e.startsWith("camera:")){let t=this.hass.states[e.slice(7)],n=t?.attributes.entity_picture;return!n||F(t)?null:(this.cameraScreens++,n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this.cameraTick}`)}return this.pictureUrls.has(e)?this.pictureUrls.get(e)??null:(this.pictureUrls.set(e,null),zn(this.hass,e).then(t=>{this.pictureUrls.set(e,t),this.syncDevices(!0)},()=>{}),null)}robotObstacles(e,t){let n=new Set(["rug","worktop","table","table_round","coffee_table","chair","office_chair","stool","bar_stool","bench","desk","robot_vacuum","parking","stairwell","radiator","tv_wall","kitchen_wall","led_strip"]);return e.furniture.filter(r=>{if(n.has(r.type)||r.type.startsWith("lamp_")&&r.type!=="lamp_floor"&&r.type!=="lamp_uplight"||r.h<.04||me(e,r)>.12)return!1;let o=U(r.type);return o&&(o.hole||/table|desk|chair|stool|bench|rug|carpet|mat$/.test(r.type))?!1:I([r.x,r.z],t)||Xe(r).some(s=>I(s,t))}).map(r=>Xe(r))}robotInfos(e,t){let n=[];for(let r of t.floors)for(let o of r.furniture){if(o.type!=="robot_vacuum")continue;let s=this.furnitureLinks.get(o.id)?.entity??null,a=s?e.states[s]?.state:void 0,l=a==="cleaning"?"cleaning":a==="returning"?"returning":a==="error"?"error":a==="docked"||!a?"docked":"idle",c=o.rotation*Math.PI/180,u=o.d*.14,d=[o.x-Math.sin(c)*u,o.z+Math.cos(c)*u],p=r.rooms.filter(x=>x.points.length>=3),_=(l==="cleaning"?dr(e,p,s,Bt(e,s,o.room_sensor)):null)??p.find(x=>I(d,x.points)),b=l==="cleaning"&&_?this.robotObstacles(r,_.points):[];n.push({id:o.id,floorId:r.id,rest:d,restHeading:-c,mode:l,room:_?.points??null,roomId:_?.id??null,obstacles:b})}return n}batteryText(e,t,n){let r=t?Number(e.states[t]?.state):Number.NaN,o=[];return Number.isFinite(r)&&o.push(`${N(e,r,0)} %`),n!==null&&Math.abs(n)>=10&&o.push(`${n<0?"\u25B2":"\u25BC"} ${re(e,Math.abs(n))}`),o.join(" \xB7 ")}wallboxText(e,t,n){let r=t?e.states[t]:void 0,o=String(r?.state??"").toLowerCase(),s=(n??0)>50||/charg|laden|lädt/.test(o),a=r?.entity_id.startsWith("binary_sensor.")?o==="on":/connect|plug|ready|angesteckt|verbunden|wait|paused|suspend/.test(o),l=s?S(e,"wallbox_charging"):a?S(e,"wallbox_plugged"):r&&!F(r)&&!r.entity_id.startsWith("binary_sensor.")?L(e,r):"",c=n!==null&&n>50?re(e,n):"";return[l,c].filter(Boolean).join(" \xB7 ")}lampMarker(e,t,n,r){let o=r?e.states[r]:void 0,s=U(n.type),a=Xn[n.type]??s?.light??"floor",l=n.mount_y!=null&&!s?n.mount_y:s||a==="wall"||a==="strip"?me(t,n):a==="table"?Ze(t,n.x,n.z):a==="bollard"||a==="garden"?jn(t,n.x,n.z):0,c=t.rooms.find(p=>p.points.length>=3&&I([n.x,n.z],p.points)),u=t.height,d=s?s.mount==="ceiling"?Math.max(.5,l-.15):l+n.h+.2:{ceiling:u-.3,downlight:u-.25,spot:u-.35,panel:u-.25,pendant:Math.max(.6,u-n.h-.25),floor:l+n.h+.25,uplight:l+n.h+.25,table:l+n.h+.2,wall:l+n.h+.2,strip:Math.max(.3,l-.2),bollard:l+n.h+.25,garden:l+n.h+.25}[a];return{id:r??`lamp:${n.id}`,floorId:t.id,roomId:c?.id??null,x:n.x,z:n.z,y:d,icon:Ce("light"),name:r?D(e,r):Ve(e,n.type),text:o?L(e,o):"",active:o?ue(o):!1,unavailable:o?F(o):!1,glow:o?Fe(o):null,lamp:a,rotation:n.rotation,size:[n.w,n.d,n.h],base:l,pickable:!!r,furnitureId:n.id,pack:s?n.type:null,lightY:s?s.mount==="ceiling"?l:l+n.h*.85:void 0,effect:!!o&&o.state==="on"&&typeof o.attributes.effect=="string"&&!/^(none|off|solid|static|normal)$/i.test(o.attributes.effect),variant:n.variant,show:n.marker??void 0,fromFurniture:!0}}showPin(e){if(this.furnish&&!e.fromFurniture)return!0;if(e.show==="never"||this.markerMode==="none")return!1;if(e.show==="always"||this.markerMode==="all")return!0;if(e.lamp||e.model)return!1;let t=$(e.id);return t==="light"?!1:e.fromFurniture?(e.power??0)>=1||t==="media"&&e.active:!0}openingTargets(){let e=new Map;for(let[t,n]of this.openingLinks??[]){let r=n.cover??n.contact??n.tilt;r&&e.set(t,r)}return e}scheduleThumbs(e=600){clearTimeout(this.thumbTimer);let t=this.building?.floors.filter(r=>r.rooms.length).length??0;if(!this.floorThumbs||t<2){this._thumbs=[];return}let n=Math.max(e,this.thumbsAt+(this._low?8e3:4e3)-Date.now());this.thumbTimer=setTimeout(()=>{if(!(!this.viewer||this.dimmed&&this._thumbs.length)){if(document.hidden){this.scheduleThumbs(3e3);return}this.thumbsAt=Date.now(),this._thumbs=this.viewer.floorThumbnails(this.narrowThumbs?104:150,this.narrowThumbs?78:112)}},n)}get narrowThumbs(){return this._narrowStage}renderThumbs(){if(!this._thumbs.length||!this.building)return v;let e=new Map(this.building.floors.map(n=>[n.id,n.name])),t=[...this._thumbs].sort((n,r)=>(this.building.floors.find(o=>o.id===r.floorId)?.elevation??0)-(this.building.floors.find(o=>o.id===n.floorId)?.elevation??0));return f`<nav class="fp3d-thumbs ${this.narrowThumbs?"fp3d-thumbs-small":""}" aria-label=${S(this.hass,"floors")}>
      <button class="fp3d-thumb fp3d-thumb-house" aria-pressed=${this.floorId===null} @click=${()=>this.fire("floor-tap",{floorId:null})}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 11l9-7 9 7M5 10v10h14V10" /></svg>
        <span>${S(this.hass,"all_floors")}</span>
      </button>
      ${t.map(n=>f`<button class="fp3d-thumb" aria-pressed=${this.floorId===n.floorId} @click=${()=>this.fire("floor-tap",{floorId:n.floorId})}>
          <img src=${n.url} alt="" />
          <span>${e.get(n.floorId)??""}</span>
        </button>`)}
    </nav>`}onDeviceHold(e,t,n){let r=$(e);r==="light"||r==="cover"||r==="switch"||r==="fan"||r==="lock"||r==="camera"?this._menu={entity:e,x:t,y:n}:te(this,e)}onDeviceSwipe(e,t,n,r,o){let s=this.hass?.states[e];if(t==="start"){if(!s||F(s)||this.confirmSet.has(e))return!1;let l=$(e);if(l==="light"&&Jt(s).dim){let c=s.state==="on"?typeof s.attributes.brightness=="number"?Math.round(s.attributes.brightness/2.55):100:0;return this._swipe={entity:e,kind:"light",start:c,value:c,x:r,y:o},!0}if(l==="cover"&&Qt(s)){let c=s.attributes.current_position;return this._swipe={entity:e,kind:"cover",start:c,value:c,x:r,y:o},!0}return!1}let a=this._swipe;if(!a||a.entity!==e)return!1;if(t==="move"){let l=Math.round(Math.min(100,Math.max(0,a.start-n/220*100)));l!==a.value&&(this._swipe={...a,value:l});let c=performance.now();c-this.swipeSent>350&&(this.swipeSent=c,this.applySwipe())}else this.applySwipe(),clearTimeout(this.swipeTimer),this.swipeTimer=setTimeout(()=>this._swipe=null,700);return!0}applySwipe(){let e=this._swipe;!e||!this.hass||(e.kind==="light"?e.value<=0?this.hass.callService("light","turn_off",{entity_id:e.entity}):this.hass.callService("light","turn_on",{entity_id:e.entity,brightness_pct:e.value}):this.hass.callService("cover","set_cover_position",{entity_id:e.entity,position:e.value}))}goTo(e){if(this._find=null,e.kind==="room"){this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),setTimeout(()=>this.viewer?.focus(e.floorId,e.x,e.z,e.y,e.entity),120)}renderAlerts(){let e=this.building;if(!this._alerts.length||!e)return v;let t=this._alerts.slice(0,3);return f`<div class="fp3d-alert-banner" role="alert">
      ${t.map(n=>f`<button class="fp3d-alert fp3d-alert-${n.kind}" title=${Ut(this.hass,e,n)} @click=${()=>this.jumpTo(n)}>${Ut(this.hass,e,n)}</button>`)}
      ${this._alerts.length>3?f`<span class="fp3d-alert-more">+${this._alerts.length-3}</span>`:v}
    </div>`}renderScenes(){let e=this.building;if(!this.scenes||!this.roomId||this.panelOpen||!e||!this.hass)return v;let t=e.floors.flatMap(o=>o.rooms).find(o=>o.id===this.roomId),n=t?H(this.hass,t.area_id).filter(o=>$(o)==="scene"||$(o)==="script").slice(0,6):[];if(!n.length)return v;let r=t?.area_id?this.hass.areas?.[t.area_id]?.name:void 0;return f`<div class="fp3d-scenes">
      ${n.map(o=>f`<button class="fp3d-chip" aria-pressed=${this._sceneFired===o} @click=${()=>this.runScene(o)}>${D(this.hass,o,r)}</button>`)}
    </div>`}renderFind(){let e=this.building;if(!e||!this.hass)return v;if(this._find===null)return f`<button class="fp3d-find-btn" title=${S(this.hass,"find")} aria-label=${S(this.hass,"find")} @click=${()=>this._find=""}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>
      </button>`;let t=Kr(this.findIndex??=jr(this.hass,e),this._find);return f`<div class="fp3d-find">
      <input
        type="search"
        placeholder=${S(this.hass,"find_placeholder")}
        .value=${this._find}
        @input=${n=>this._find=n.target.value}
        @keydown=${n=>{n.key==="Escape"&&(this._find=null),n.key==="Enter"&&t[0]&&this.goTo(t[0])}}
      />
      <button class="fp3d-find-close" aria-label=${S(this.hass,"close")} @click=${()=>this._find=null}>✕</button>
      ${this._find.trim()?f`<div class="fp3d-find-list">
            ${t.length?t.map(n=>f`<button @click=${()=>this.goTo(n)}>
                    <span class="fp3d-find-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d=${n.icon?et(n.icon):"M4 10l8-6 8 6v10H4z"} /></svg></span>
                    <span><b>${n.name}</b>${n.where?f`<small>${n.where}</small>`:v}</span>
                  </button>`):f`<p>${S(this.hass,"find_none")}</p>`}
          </div>`:v}
    </div>`}renderSwipe(){let e=this._swipe;if(!e||!this.hass)return v;let t=e.kind==="light"&&e.value<=0;return f`<div class="fp3d-swipe" style="left:${e.x}px;top:${e.y}px">
      <span>${D(this.hass,e.entity)}</span>
      <b>${t?S(this.hass,"swipe_off"):`${e.value} %`}</b>
      <i><em style="height:${e.value}%"></em></i>
    </div>`}lookThrough(e){let t=this.viewer,n=this.building;if(!t||!n)return;if(!q("camera_cockpit")){this._menu=null,this._proHint="camera_cockpit";return}let r=n.floors.find(s=>s.placements.some(a=>a.entity_id===e))?.id;if(!r)return;this._menu=null,this._through?this._through={...this._through,entity:e}:this._through={entity:e,back:t.getView()},this.watchCameras(!0);let o=this.floorId===r?0:300;o&&(this.throughFloor=r,this.fire("floor-tap",{floorId:r})),setTimeout(()=>{this._through?.entity===e&&!this.viewer?.lookThrough(e)&&(this._through=null)},o)}endThrough(){let e=this._through;e&&(this._through=null,this.viewer?.flyTo(e.back))}renderProHint(){return!this._proHint||!this.hass?v:f`<div class="fp3d-pro" role="dialog">
      <b>${S(this.hass,"pro_title")}</b>
      <span>${S(this.hass,`pro_feature_${this._proHint}`)}</span>
      <span class="fp3d-sub">${S(this.hass,"pro_locked")}</span>
      <div>
        <a class="fp3d-chip fp3d-chip-on" href=${mr(this.hass.language)} target="_blank" rel="noopener">${S(this.hass,"pro_shop")}</a>
        <a class="fp3d-chip" href=${_r(this.hass.language,this._proHint)} target="_blank" rel="noopener">${S(this.hass,"manual_more")}</a>
        <button class="fp3d-chip" @click=${()=>(this._proHint=null,this.fire("open-extensions",null))}>${S(this.hass,"ext_tab")}</button>
        <button class="fp3d-chip" @click=${()=>this._proHint=null}>${S(this.hass,"close")}</button>
      </div>
    </div>`}renderThrough(){let e=this._through;if(!e||!this.hass)return v;let t=this.hass.states[e.entity],n=t?.attributes.entity_picture,r=n&&!F(t)?n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null;return f`<div class="fp3d-through" style="--fp3d-blend:${this._blend}">
      ${r?f`<img class="fp3d-through-img" src=${r} alt="" />`:v}
      <div class="fp3d-through-bar">
        <span class="fp3d-through-name">${D(this.hass,e.entity)}</span>
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
    </div>`}renderMenu(){let e=this._menu;if(!e||!this.hass)return v;let t=this.renderRoot.querySelector(".fp3d-stage"),n=t?.clientWidth??800,r=t?.clientHeight??600,o=Math.max(8,Math.min(n-240,e.x-116)),s=Math.max(8,Math.min(r-360,e.y-170));return f`<div class="fp3d-menu-backdrop" @click=${()=>this._menu=null}></div>
      <fp3d-quick-menu
        style="left:${o}px;top:${s}px"
        ?low=${this._low}
        .hass=${this.hass}
        .entity=${e.entity}
        ?confirmSwitch=${this.confirmSet.has(e.entity)}
        ?pro=${q("camera_cockpit")}
        @close=${()=>this._menu=null}
        @camera-look=${a=>this.lookThrough(a.detail.entity)}
      ></fp3d-quick-menu>`}onDeviceTap(e,t=0,n=0){if(e.startsWith("trail:"))return;let r=$(e);if(r==="cover"||r==="camera"){this._menu={entity:e,x:t,y:n};return}if(r&&ir.has(r)){if(this.confirmSet.has(e)&&!confirm(S(this.hass,"confirm_switch",{name:D(this.hass,e)})))return;wr(this.hass,e)}else te(this,e)}resetView(){this._through=null,this.viewer?.resetView()}fire(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}toggleFlows(){this._flows=!this._flows;try{localStorage.setItem("neonplan3d.flows",this._flows?"1":"0")}catch{}this.syncDevices(!0)}renderEnergy(){let e=this._energy;if(!!1||!e||this.roomId||!this.showEnergy)return v;let t=r=>S(this.hass,r),n=[];if(e.consumption!==null&&n.push({cls:"total",label:t("energy_consumption"),value:re(this.hass,e.consumption)}),e.grid!==null){let r=e.grid<0;n.push({cls:r?"export":"grid",label:t(r?"energy_grid_export":"energy_grid_import"),value:re(this.hass,Math.abs(e.grid))})}if(e.solar!==null&&n.push({cls:"solar",label:t("energy_solar"),value:re(this.hass,e.solar)}),e.battery!==null||e.soc!==null){let r=[e.battery!==null?re(this.hass,Math.abs(e.battery)):null,e.soc!==null?`${Math.round(e.soc)} %`:null].filter(Boolean);n.push({cls:"battery",label:t("energy_battery"),value:r.join(" \xB7 ")})}return e.tariff&&n.push({cls:"tariff",label:t("energy_tariff"),value:`${N(this.hass,e.tariff.value,3)} ${e.tariff.unit}`.trim()}),f`<div class="fp3d-energy" aria-live="off">
      ${n.map(r=>f`<div class="fp3d-energy-item fp3d-energy-${r.cls}"><span>${r.label}</span><b>${r.value}</b></div>`)}
      ${this.flows!==null?v:f`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._flows} title=${`${t("flows_hint")} (${t(this._flows?"flow_on":"flow_off")})`} aria-label=${t("flows")} @click=${()=>this.toggleFlows()}>
        <span>${t("flows")}</span><b>⚡</b>
      </button>`}
    </div>`}renderLegend(){if(this.heatMode==="none")return v;let e=st[this.heatMode],t=this.heatMode==="temperature",n=t?De(this.hass,e.stops[0][0]):e.stops[0][0],r=t?De(this.hass,e.stops[e.stops.length-1][0]):e.stops[e.stops.length-1][0],o=t?X(this.hass):e.unit,s=a=>S(this.hass,a);return f`<div class="fp3d-legend">
      <b>${s(`heat_${this.heatMode}`)}</b>
      <span class="fp3d-legend-bar" style="background:${Wr(this.heatMode)}"></span>
      <span class="fp3d-legend-range"><span>${N(this.hass,n,0)} ${o}</span><span>${N(this.hass,r,0)} ${o}</span></span>
      ${this.heatValues.size?v:f`<span class="fp3d-legend-none">${s("heat_none_found")}</span>`}
    </div>`}skyColor(){let e=Be[this.theme]??Be.neon,t=this._sky;return e.night[0].map((n,r)=>Math.round(n+(e.day[0][r]-n)*t))}watchLightning(e){if(!e){clearTimeout(this.flashTimer),this.flashTimer=void 0;return}if(this.flashTimer)return;let t=()=>{this.flashTimer=setTimeout(()=>{document.hidden||(this._flash=!0,setTimeout(()=>this._flash=!1,140)),t()},5e3+Math.random()*9e3)};t()}render(){let e=this._sky,t=(o,s)=>`rgb(${o.map((a,l)=>Math.round(a+(s[l]-a)*e)).join(",")})`,n=Be[this.theme]??Be.neon,r=`--fp3d-sky:${t(n.night[0],n.day[0])};--fp3d-ground:${t(n.night[1],n.day[1])}`;return f`<div
      class="fp3d-stage ${this.roomLabels?"":"fp3d-no-room-names"} ${this._low?"fp3d-low":""} ${this.panelOpen?"fp3d-panel-open":""} ${this._alerts.length?"fp3d-has-alerts":""} ${this._through?"fp3d-through-on":""} ${this._flash?"fp3d-flash":""}"
      style=${r}
    >
      ${this._error?f`<p class="fp3d-error">${this._error}</p>`:v} ${this.renderEnergy()} ${this.renderLegend()}
      ${this.renderAlerts()} ${this.renderThumbs()} ${this.renderScenes()} ${this.renderFind()} ${this.renderSwipe()} ${this.renderThrough()} ${this.renderProHint()} ${this.renderMenu()}
      ${this.showStats&&this._stats?f`<span class="fp3d-stats"
            ><b>${this._stats.fps?S(this.hass,"stats_fps",{fps:this._stats.fps,ms:this._stats.worstMs}):S(this.hass,"stats_idle")}</b>
            ${this._stats.busy.length?f`(${this._stats.busy.map(o=>S(this.hass,`stats_busy_${o}`)).join(", ")})`:v} ·
            ${S(this.hass,"stats",{calls:this._stats.calls,tris:this._stats.triangles.toLocaleString()})} ·
            ${S(this.hass,this._stats.low?"stats_low":"stats_full",{r:N(this.hass,this._stats.pixelRatio,2)})}</span
          >`:v}
    </div>`}static styles=[j,ne,V`
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
      .fp3d-pro {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 6;
        display: flex;
        flex-direction: column;
        gap: 8px;
        max-width: 320px;
        padding: 16px 18px;
        border-radius: 14px;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-accent);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
      }
      .fp3d-pro div {
        display: flex;
        gap: 8px;
      }
      .fp3d-pro a {
        text-decoration: none;
      }
      .fp3d-flash::after {
        content: "";
        position: absolute;
        inset: 0;
        z-index: 3;
        background: rgba(225, 238, 255, 0.4);
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
    `]};customElements.get("fp3d-view3d")||customElements.define("fp3d-view3d",en);function re(i,e){return Math.abs(e)>=1e3?`${N(i,e/1e3,1)} kW`:`${Math.round(e)} W`}function Jo(i){return i.type==="tv_board"?i.h+.9:i.type==="tv_wall"||i.type==="kitchen_wall"?i.h+.25:i.h+.35}var Qo=.25,ti=i=>Math.round(i*1e3)/1e3;function tn(i,e,t,n,r){let o=i.rooms.find(s=>s.points.length>=3&&I([e,t],s.points));return!o||I([n,r],o.points)?[n,r]:I([n,t],o.points)?[n,t]:I([e,r],o.points)?[e,r]:[e,t]}function ni(i,e,t,n=Qo){let r=i.rooms.find(c=>c.points.length>=3&&I([e.x,e.z],c.points));if(!r)return null;let o=r.points,s=J(o)>=0?1:-1,a=t/2,l=null;for(let c=0;c<o.length;c++){let u=o[c],d=o[(c+1)%o.length],p=Math.hypot(d[0]-u[0],d[1]-u[1]);if(p<.3)continue;let m=[(d[0]-u[0])/p,(d[1]-u[1])/p],_=[-m[1]*s,m[0]*s],b=(e.x-u[0])*m[0]+(e.z-u[1])*m[1];if(b<0||b>p)continue;let g=i.rooms.some(z=>z.id!==r.id&&z.points.some((P,y)=>{let M=z.points[(y+1)%z.points.length],B=Math.abs((P[0]-u[0])*_[0]+(P[1]-u[1])*_[1]),G=Math.abs((M[0]-u[0])*_[0]+(M[1]-u[1])*_[1]);return B<.02&&G<.02}))?a:0,h=(e.x-u[0])*_[0]+(e.z-u[1])*_[1]-g,k=Math.atan2(-_[0],_[1])*180/Math.PI,w=z=>Math.abs((e.rotation-z+540)%360-180),R=[{rotation:k,extent:e.d/2},{rotation:k+90,extent:e.w/2},{rotation:k-90,extent:e.w/2}].reduce((z,P)=>w(P.rotation)<w(z.rotation)?P:z);if(w(R.rotation)>50)continue;let E=h-R.extent;Math.abs(E)>n||l&&Math.abs(E)>=Math.abs(l.gap)||(l={x:ti(e.x-_[0]*E),z:ti(e.z-_[1]*E),rotation:(Math.round(R.rotation)%360+360)%360,gap:E})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}var C={get(i){try{return localStorage.getItem(`neonplan3d.${i}`)}catch{return null}},set(i,e){try{localStorage.setItem(`neonplan3d.${i}`,e)}catch{}}},nn=class extends W{static properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_mode:{state:!0},_newOffers:{state:!0},_upstream:{state:!0},_editorReady:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_wallMode:{state:!0},_explode:{state:!0},_quality:{state:!0},_stats:{state:!0},_markers:{state:!0},_heat:{state:!0},_theme:{state:!0},_furnish:{state:!0},_selFurniture:{state:!0},_selDevice:{state:!0},_floorStack:{state:!0},_roomNames:{state:!0},_trail:{state:!0},_weather:{state:!0}};offersChecked=!1;data=new ge(this);constructor(){super(),this.narrow=!1,this._mode="view",this._newOffers=0,this._editorReady=!!customElements.get("fp3d-editor"),this._floorId=null,this._roomId=null,this._wallMode="auto",this._explode=C.get("explode")!=="0";let e=C.get("quality");this._quality=e==="low"||e==="high"?e:"auto",this._stats=C.get("stats")==="1"||new URLSearchParams(location.search).has("fp3d_stats");let t=C.get("markers");this._markers=t==="none"||t==="all"?t:"important";let n=C.get("heat");this._heat=n==="temperature"||n==="humidity"||n==="co2"?n:"none";let r=C.get("theme");this._theme=r&&Zt.includes(r)?r:"neon",this._furnish=!1,this._selFurniture=null,this._selDevice=null;let o=C.get("floor_stack");this._floorStack=o==="stacked"||o==="single"?o:"dim",this._roomNames=C.get("room_names")!=="0",this._trail=C.get("trail")==="1",this._weather=C.get("weather")!=="0"}t(e,t){return S(this.hass,e,t)}willUpdate(e){e.has("hass")&&this.hass&&this.data.setHass(this.hass);let t=this.data.building;t&&this._floorId&&!t.floors.some(n=>n.id===this._floorId)&&(this._floorId=null,this._roomId=null)}get isAdmin(){return this.hass?.user?.is_admin??!1}setMode(e){e!==this._mode&&(e==="view"&&this.data.flush(),this._mode=e)}onRoomTap(e){let{floorId:t,roomId:n}=e.detail;if((this.data.building?.floors.length??0)>1&&t&&this._floorId!==t){this._floorId=t,this._roomId=null;return}n&&(this._roomId=n===this._roomId?null:n)}setExplode(e){this._explode=e,C.set("explode",e?"1":"0")}setQuality(e){this._quality=e,C.set("quality",e)}editFurniture(e,t){let n=this.data.building;if(!n)return;let r=structuredClone(n);for(let o of r.floors){let s=o.furniture.find(a=>a.id===e);s&&t(s,o)}this.data.edit(r)}editDevice(e,t){let n=this.data.building;if(!n)return;let r=structuredClone(n);for(let o of r.floors){let s=o.placements.find(a=>a.entity_id===e);s&&t(s,o)}this.data.edit(r)}moveDevice(e){let{id:t,x:n,z:r}=e.detail;this.editDevice(t,(o,s)=>{let[a,l]=tn(s,o.x,o.z,n,r);Object.assign(o,{x:a,z:l})})}turnStep(){return $(this._selDevice??"")==="camera"?15:45}turnDevice(e){this._selDevice&&this.editDevice(this._selDevice,t=>t.rotation=(((t.rotation??0)+e)%360+360)%360)}deleteDevice(){let e=this._selDevice,t=this.data.building;if(!e||!t)return;let n=structuredClone(t);for(let r of n.floors)r.placements=r.placements.filter(o=>o.entity_id!==e);this.data.edit(n),this._selDevice=null}renderDeviceFields(e){let n=this.data.building?.floors.find(d=>d.placements.some(p=>p.entity_id===e)),r=n?.placements.find(d=>d.entity_id===e);if(!n||!r)return v;let o=$(e),s=o==="light",a=o==="camera",l=r.mount==="ceiling",c=o?be(o,n.height,s||a?r.mount??(a?"wall":"ceiling"):null):1,u=(d,p,m,_,b,x)=>f`<label class="fp3d-size" title=${d}
        >${d}
        <input
          type="number"
          inputmode="decimal"
          step=${m}
          min=${_}
          max=${b}
          .value=${String(Math.round(p*100)/100)}
          @change=${g=>{let h=parseFloat(g.target.value.replace(",","."));Number.isFinite(h)&&x(Math.min(b,Math.max(_,h)))}}
        />
      </label>`;return f`${s?f`<select class="fp3d-size-select" title=${this.t("lamp_mount")} @change=${d=>this.editDevice(e,p=>Object.assign(p,{mount:d.target.value,y:null}))}>
            ${["ceiling","floor","table","wall"].map(d=>f`<option value=${d} ?selected=${d===(r.mount??"ceiling")}>${this.t(`lamp_${d}`)}</option>`)}
          </select>`:v}
      ${a?f`<select class="fp3d-size-select" title=${this.t("camera_mount")} @change=${d=>this.editDevice(e,p=>Object.assign(p,{mount:d.target.value,y:null}))}>
              <option value="wall" ?selected=${!l}>${this.t("camera_mount_wall")}</option>
              <option value="ceiling" ?selected=${l}>${this.t("camera_mount_ceiling")}</option>
            </select>
            ${u(this.t("camera_fov_short"),r.fov??(l?360:90),5,10,360,d=>this.editDevice(e,p=>p.fov=d))}
            ${u(this.t("camera_reach_short"),r.reach??(l?3:4.5),.5,.5,50,d=>this.editDevice(e,p=>p.reach=d))}
            ${u(this.t("camera_tilt_short"),r.tilt??(l?65:20),5,0,90,d=>this.editDevice(e,p=>p.tilt=d))}`:v}
      <label class="fp3d-size" title=${this.t("marker_height")}
        >${this.t("size_short_h")}
        <input
          type="number"
          inputmode="decimal"
          step="0.05"
          min="0"
          .value=${String(Math.round((r.y??c)*100)/100)}
          @change=${d=>{let p=parseFloat(d.target.value.replace(",","."));Number.isFinite(p)&&p>=0&&this.editDevice(e,m=>m.y=Math.round(p*1e3)/1e3)}}
        />
      </label>
      ${r.y!==null?f`<button class="fp3d-chip" @click=${()=>this.editDevice(e,d=>d.y=null)}>${this.t("height_auto")}</button>`:v}`}furnitureName(e){let t=this.data.building?.floors.flatMap(n=>n.furniture).find(n=>n.id===e);return t?Ve(this.hass,t.type):""}moveFurniture(e){let{id:t,x:n,z:r}=e.detail,o=this.data.building?.settings.wall_interior??.12;this.editFurniture(t,(s,a)=>{let[l,c]=tn(a,s.x,s.z,n,r);Object.assign(s,{x:l,z:c});let u=ni(a,s,o);u&&Object.assign(s,u)})}renderSizeFields(e){let t=this.data.building?.floors.flatMap(o=>o.furniture).find(o=>o.id===e);if(!t)return v;let n=(o,s)=>f`<label class="fp3d-size" title=${this.t(`size_${o}`)}
      >${s}
      <input
        type="number"
        inputmode="decimal"
        step="0.05"
        min="0.05"
        .value=${String(Math.round(t[o]*100)/100)}
        @change=${a=>{let l=parseFloat(a.target.value.replace(",","."));Number.isFinite(l)&&l>0&&this.editFurniture(e,c=>c[o]=Math.round(l*1e3)/1e3)}}
    /></label>`,r=this.data.building?.floors.find(o=>o.furniture.some(s=>s.id===e));return f`${n("w",this.t("size_short_w"))}${n("d",this.t("size_short_d"))}${n("h",this.t("size_short_h"))}
    ${r&&Zn(t)?f`<label class="fp3d-size" title=${this.t("mount_height")}
            >↕
            <input
              type="number"
              inputmode="decimal"
              step="0.05"
              min="0"
              .value=${String(Math.round((t.mount_y??me(r,t))*100)/100)}
              @change=${o=>{let s=parseFloat(o.target.value.replace(",","."));Number.isFinite(s)&&s>=0&&this.editFurniture(e,a=>a.mount_y=Math.round(s*1e3)/1e3)}}
          /></label>
          ${t.mount_y!=null?f`<button class="fp3d-chip" @click=${()=>this.editFurniture(e,o=>o.mount_y=null)}>${this.t("height_auto")}</button>`:v}`:v}`}turnFurniture(e){this._selFurniture&&this.editFurniture(this._selFurniture,t=>t.rotation=((t.rotation+e)%360+360)%360)}deleteFurniture(){let e=this._selFurniture,t=this.data.building;if(!e||!t)return;let n=structuredClone(t);for(let r of n.floors)r.furniture=r.furniture.filter(o=>o.id!==e);this.data.edit(n),this._selFurniture=null}view3d(){return this.renderRoot.querySelector("fp3d-view3d")}back(){this._roomId?this._roomId=null:this._floorId&&(this.data.building?.floors.length??0)>1?this._floorId=null:this.view3d()?.resetView()}onKey=e=>{e.key==="Escape"&&this._mode==="view"&&this.back()};connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}checkOffers(){this.offersChecked||!this.hass?.user?.is_admin||(this.offersChecked=!0,Cn(this.hass).then(e=>this._newOffers=e.active?In(e.offers??[]).length+Dn(e.updates??[]).length:0).catch(()=>{}),Fn(this.hass).then(e=>this._upstream=e).catch(()=>{}))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey)}render(){this.checkOffers();let e=this.data.building,t=this.data.saveState;return f`
      <div class="fp3d-app">
        <header class="fp3d-header">
          <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
          <h1>NeonPlan 3D</h1>
          ${this.isAdmin?f`<div class="fp3d-seg" role="tablist">
                <button role="tab" aria-pressed=${this._mode==="view"} @click=${()=>this.setMode("view")}>${this.t("view")}</button>
                <button role="tab" aria-pressed=${this._mode==="editor"} @click=${()=>this.setMode("editor")}>${this.t("editor")}</button>
                <button role="tab" class="fp3d-tab-ext" aria-pressed=${this._mode==="extensions"} @click=${()=>this.setMode("extensions")} title=${this._newOffers?this.t("offers_dot"):""}>
                  ✦ ${this.t("ext_tab")}${this._newOffers?f`<span class="fp3d-dot" aria-label=${this.t("offers_dot")}></span>`:v}
                </button>
              </div>`:v}
          <span class="fp3d-grow"></span>
          ${this._mode==="view"&&e?.floors.some(n=>n.rooms.length)?f`<div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("quality")}>
                ${["auto","low","high"].map(n=>f`<button aria-pressed=${this._quality===n} @click=${()=>this.setQuality(n)}>${this.t(`quality_${n}`)}</button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("theme")}>
                ${Zt.map(n=>f`<button
                      aria-pressed=${this._theme===n}
                      @click=${()=>{this._theme=n,C.set("theme",n)}}
                    >
                      ${this.t(`theme_${n}`)}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("markers")}>
                ${["none","important","all"].map(n=>f`<button
                      aria-pressed=${this._markers===n}
                      title=${this.t("markers")}
                      @click=${()=>{this._markers=n,C.set("markers",n)}}
                    >
                      ${this.t(`markers_${n}`)}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality">
                <button
                  aria-pressed=${this._stats}
                  title=${this.t("fps_title")}
                  @click=${()=>{this._stats=!this._stats,C.set("stats",this._stats?"1":"0")}}
                >
                  ${this.t("fps")}
                </button>
              </div>`:v}
          ${this._mode==="editor"&&t!=="idle"?f`<span class="fp3d-save fp3d-save-${t}">${this.t(t==="saving"?"saving":t==="saved"?"saved":"save_error")}</span>`:v}
        </header>
        ${this.renderNotices()}
        ${this.data.error&&!e?f`<p class="fp3d-message">${this.t("load_error")}: ${this.data.error}</p>`:v}
        ${!e&&!this.data.error?f`<p class="fp3d-message">${this.t("loading")}</p>`:v}
        ${e?this._mode==="editor"&&this.isAdmin?this.renderEditor(e):this._mode==="extensions"&&this.isAdmin?this.renderExtensions():this.renderView(e):v}
      </div>
    `}renderNotices(){let e=this.data,t=[];if(e.needsReload?t.push(f`<div class="fp3d-notice fp3d-notice-warn">${this.t("needs_reload",{version:e.backendVersion??"",frontend:_e})}</div>`):e.needsRestart&&t.push(f`<div class="fp3d-notice fp3d-notice-warn">${e.backendVersion?this.t("needs_restart",{version:e.backendVersion}):this.t("needs_restart_old")}</div>`),this._upstream&&this.isAdmin){let n=this._upstream;t.push(f`<div class="fp3d-notice">
          <span>${this.t("upstream_update",{latest:n.latest,base:n.base})}</span>
          <a class="fp3d-btn" href=${n.url} target="_blank" rel="noopener">${this.t("upstream_notes")}</a>
        </div>`)}if(e.saveState==="error"&&e.saveError&&t.push(f`<div class="fp3d-notice fp3d-notice-error">${this.t("save_failed_detail",{error:e.saveError})}</div>`),e.draft&&this.isAdmin){let n=new Date(e.draft.savedAt).toLocaleString(this.hass?.language);t.push(f`<div class="fp3d-notice">
          <span>${this.t("draft_found",{time:n})}</span>
          <button class="fp3d-btn fp3d-primary" @click=${()=>e.restoreDraft()}>${this.t("draft_restore")}</button>
          <button class="fp3d-btn" @click=${()=>e.discardDraft()}>${this.t("draft_discard")}</button>
        </div>`)}return t.length?f`<div class="fp3d-notices">${t}</div>`:v}renderExtensions(){return this._editorReady?f`<fp3d-extensions
      class="fp3d-body"
      .hass=${this.hass}
      .packs=${this.data.packs}
      @packs-changed=${()=>{this.data.reloadPacks()}}
      @offers-seen=${()=>this._newOffers=0}
    ></fp3d-extensions>`:(zt().then(()=>this._editorReady=!0,e=>this.data.error=String(e)),f`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}renderEditor(e){return this._editorReady?f`<fp3d-editor
      class="fp3d-body"
      .hass=${this.hass}
      .building=${e}
      .narrow=${this.narrow}
      .packs=${this.data.packs}
      @packs-changed=${()=>{this.data.reloadPacks()}}
      @open-extensions=${()=>this.setMode("extensions")}
      @building-changed=${t=>this.data.edit(t.detail.building)}
    ></fp3d-editor>`:(zt().then(()=>this._editorReady=!0,t=>this.data.error=String(t)),f`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}renderView(e){if(!e.floors.length||!e.floors.some(r=>r.rooms.length))return f`<div class="fp3d-empty">
        <p>${this.t(this.isAdmin?"no_building_admin":"no_building")}</p>
        ${this.isAdmin?f`<button class="fp3d-btn fp3d-primary" @click=${()=>this.setMode("editor")}>${this.t("open_editor")}</button>`:v}
      </div>`;let t=e.floors.find(r=>r.id===this._floorId),n=t?[t]:e.floors;return f`
      <nav class="fp3d-nav">
        ${e.floors.length>1?f`<button class="fp3d-chip" aria-pressed=${this._floorId===null} @click=${()=>{this._floorId=null,this._roomId=null}}>
                ${this.t("all_floors")}
              </button>
              ${[...e.floors].reverse().map(r=>f`<button
                  class="fp3d-chip"
                  aria-pressed=${r.id===this._floorId}
                  @click=${()=>{this._floorId=r.id,this._roomId=null}}
                >
                  ${r.name}
                </button>`)}
              <span class="fp3d-sep"></span>`:v}
        ${n.flatMap(r=>r.rooms.map(o=>f`<button
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
          ?weather=${this._weather}
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
          @open-extensions=${()=>this.setMode("extensions")}
          @floor-tap=${r=>{this._floorId=r.detail.floorId,this._roomId=null}}
          @back=${()=>this.back()}
        ></fp3d-view3d>
        ${this._roomId?f`<fp3d-room-panel
              class="fp3d-room-panel"
              @camera-look=${r=>this.view3d()?.lookThrough(r.detail.entity)}
              .hass=${this.hass}
              .room=${e.floors.flatMap(r=>r.rooms).find(r=>r.id===this._roomId)??null}
              .floor=${e.floors.find(r=>r.rooms.some(o=>o.id===this._roomId))??null}
              .confirmEntities=${ve(this.hass,e.floors)}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:v}
        <div class="fp3d-overlay">
          <div class="fp3d-seg">
            <button aria-pressed=${this._wallMode==="auto"} @click=${()=>this._wallMode="auto"}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wallMode==="cut"} @click=${()=>this._wallMode="cut"}>${this.t("walls_cut")}</button>
          </div>
          ${e.floors.length>1&&!this._floorId?f`<div class="fp3d-seg">
                <button aria-pressed=${this._explode} @click=${()=>this.setExplode(!0)}>${this.t("floors_apart")}</button>
                <button aria-pressed=${!this._explode} @click=${()=>this.setExplode(!1)}>${this.t("floors_stacked")}</button>
              </div>`:v}
          ${e.floors.length>1&&this._floorId?f`<div class="fp3d-seg" role="group" aria-label=${this.t("card_floor_stack")}>
                ${["dim","stacked","single"].map(r=>f`<button
                      aria-pressed=${this._floorStack===r}
                      @click=${()=>{this._floorStack=r,C.set("floor_stack",r)}}
                    >
                      ${this.t(`floor_stack_short_${r}`)}
                    </button>`)}
              </div>`:v}
          <div class="fp3d-seg" role="group" aria-label=${this.t("heatmap")}>
            ${["none","temperature","humidity","co2"].map(r=>f`<button
                  aria-pressed=${this._heat===r}
                  @click=${()=>{this._heat=r,C.set("heat",r)}}
                >
                  ${this.t(r==="none"?"heat_off":`heat_short_${r}`)}
                </button>`)}
          </div>
          <button
            class="fp3d-chip"
            aria-pressed=${this._roomNames}
            @click=${()=>{this._roomNames=!this._roomNames,C.set("room_names",this._roomNames?"1":"0")}}
          >
            ${this.t("room_names_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._trail}
            title=${this.t("trail_hint")}
            @click=${()=>{this._trail=!this._trail,C.set("trail",this._trail?"1":"0")}}
          >
            ${q("camera_cockpit")?"":"\u{1F512} "}${this.t("trail_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._weather}
            title=${this.t("weather_hint")}
            @click=${()=>{this._weather=!this._weather,C.set("weather",this._weather?"1":"0")}}
          >
            ${q("weather")?"":"\u{1F512} "}${this.t("weather_short")}
          </button>
          ${this._roomId||this._floorId&&e.floors.length>1?f`<button class="fp3d-chip" @click=${()=>this.back()}>${this.t("back")}</button>`:v}
        </div>
        ${this._furnish?f`<div class="fp3d-furnish-bar">
              ${this._selFurniture?f`<span>${this.furnitureName(this._selFurniture)}</span>
                    ${this.renderSizeFields(this._selFurniture)}
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(-45)}>↺ 45°</button>
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(45)}>↻ 45°</button>
                    <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>`:this._selDevice?f`<span>${D(this.hass,this._selDevice)}</span>
                      ${this.renderDeviceFields(this._selDevice)}
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(-this.turnStep())}>↺ ${this.turnStep()}°</button>
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(this.turnStep())}>↻ ${this.turnStep()}°</button>
                      <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteDevice()}>${this.t("delete")}</button>`:f`<span>${this.t("furnish_hint")}</span>`}
              <button class="fp3d-chip fp3d-chip-on" @click=${()=>(this._furnish=!1,this._selFurniture=null,this._selDevice=null)}>${this.t("done")}</button>
            </div>`:v}
      </div>
    `}static styles=[j,ne,V`
      .fp3d-dot {
        display: inline-block;
        width: 8px;
        height: 8px;
        margin-left: 6px;
        border-radius: 50%;
        background: #ffb547;
        box-shadow: 0 0 8px #ffb547;
        vertical-align: middle;
      }
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
      .fp3d-notice a.fp3d-btn {
        display: inline-flex;
        align-items: center;
        text-decoration: none;
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
    `]};customElements.get("neonplan3d-panel")||customElements.define("neonplan3d-panel",nn);function dt(i,e,t=new Date){if(!i||i==="off")return!1;if(i==="sun")return e?.states["sun.sun"]?.state==="below_horizon";let n=/^(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})$/.exec(i.trim());if(!n)return!1;let r=Number(n[1])*60+Number(n[2]),o=Number(n[3])*60+Number(n[4]),s=t.getHours()*60+t.getMinutes();return r<=o?s>=r&&s<o:s>=r||s<o}var ri;function ii(){let i=new URL("./neonplan3d-card-editor.js?v=768e5a9e1755",new URL(import.meta.url)).href;return ri??=import(i),ri}var rn=class extends W{static properties={hass:{attribute:!1},_config:{state:!0},_roomId:{state:!0},_floorId:{state:!0},_walls:{state:!0},_heat:{state:!0},_explode:{state:!0},_fullscreen:{state:!0},_night:{state:!0},_orbit:{state:!0}};idleTimer;nightTimer;data=new ge(this);constructor(){super(),this._roomId=null,this._floorId=void 0,this._walls=null,this._heat=null,this._explode=null,this._fullscreen=!1,this._night=!1,this._orbit=!1}touch=()=>{this._orbit&&(this._orbit=!1),this.armIdle()};armIdle(){clearTimeout(this.idleTimer);let e=this._config?.idle_return??0;e>0&&(this.idleTimer=setTimeout(()=>this.returnHome(),e*1e3))}view3d(){return this.shadowRoot?.querySelector("fp3d-view3d")}returnHome(){this._roomId=null,this._floorId=void 0,this.view3d()?.resetView(),this._config?.idle_orbit&&(this._orbit=!0)}onFullscreen=()=>this._fullscreen=!!document.fullscreenElement&&this.shadowRoot?.contains(document.fullscreenElement)===!0;connectedCallback(){super.connectedCallback(),document.addEventListener("fullscreenchange",this.onFullscreen),this.armIdle(),this.nightTimer=setInterval(()=>this._night=dt(this._config?.night,this.hass),6e4)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this.onFullscreen),clearTimeout(this.idleTimer),clearInterval(this.nightTimer)}toggleFullscreen(){document.fullscreenElement?document.exitFullscreen():this.shadowRoot?.querySelector("ha-card")?.requestFullscreen?.()}static async getConfigElement(){return await ii(),document.createElement("neonplan3d-card-editor")}static getStubConfig(){return{type:"custom:neonplan3d-card"}}setConfig(e){if(e.height!==void 0&&!(e.height>100))throw new Error("height must be a number of pixels above 100");this._config=e,this._floorId=void 0,this._walls=null,this._heat=null,this._explode=null,this._orbit=!1,this._night=dt(e.night,this.hass),this.armIdle()}getCardSize(){return Math.ceil((this._config?.height??420)/50)}getGridOptions(){return{columns:"full",rows:this._config?.fill?12:Math.ceil((this._config?.height??420)/56),min_rows:4}}willUpdate(e){if(e.has("hass")&&this.hass){this.data.setHass(this.hass);let t=dt(this._config?.night,this.hass);t!==this._night&&(this._night=t)}}get canSwitch(){return!this._config?.floor||this.thumbs}get thumbs(){return this._config?.floor_thumbs??!this._config?.floor}back(){this._roomId?this._roomId=null:this.canSwitch&&(this._floorId=null)}render(){let e=this.data.building,t=this._config?.height??420,n=this._config,r=this._floorId===void 0?n?.floor??null:this._floorId,o=e&&e.floors.length===1?e.floors[0].id:e?.floors.some(b=>b.id===r)?r:null,s=!!this._roomId&&n?.room_panel===!1||!this.thumbs&&this.canSwitch&&!this._roomId&&!!o&&(e?.floors.length??0)>1,a=b=>n?.controls===!0||Array.isArray(n?.controls)&&n.controls.includes(b),l=["temperature","humidity","co2"].filter(b=>a(b)),c=this._walls??n?.walls??"auto",u=this._heat??n?.heatmap??"none",d=this._explode??n?.explode??!0,p=this._fullscreen?"100vh":n?.fill?"calc(100vh - var(--header-height, 56px) - 16px)":`${t}px`,m=!!e&&(s||!!n?.controls&&!(this._roomId&&n.room_panel!==!1)),_=b=>S(this.hass,b);return f`<ha-card class=${this._night?"fp3d-night":""} @pointerdown=${this.touch} @keydown=${this.touch} @wheel=${this.touch}>
      <div class="fp3d-card-body" style="height:${p}">
        ${e&&e.floors.some(b=>b.rooms.length)?f`<fp3d-view3d
              .hass=${this.hass}
              .building=${e}
              .packs=${this.data.packs}
              .floorId=${o}
              .roomId=${this._roomId}
              .wallMode=${c}
              .explode=${d}
              .quality=${this._config?.quality??"auto"}
              ?showStats=${this._config?.stats??!1}
              .markerMode=${this._config?.markers??"important"}
              .heatMode=${u}
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
              ?weather=${n?.weather!==!1}
              .weatherEntityId=${n?.weather_entity??null}
              .dimmed=${this._night}
              .autoOrbit=${this._orbit}
              style=${m?"--fp3d-bottom-inset: 52px":""}
              @room-tap=${b=>{if(this.canSwitch&&(e?.floors.length??0)>1&&b.detail.floorId&&o!==b.detail.floorId){this._floorId=b.detail.floorId,this._roomId=null;return}b.detail.roomId&&(this._roomId=b.detail.roomId===this._roomId?null:b.detail.roomId)}}
              @floor-tap=${b=>{this._floorId=b.detail.floorId,this._roomId=null}}
              @back=${()=>this.back()}
            ></fp3d-view3d>`:f`<p class="fp3d-card-msg">${this.data.error??(e?S(this.hass,"no_building"):S(this.hass,"loading"))}</p>`}
        ${this._roomId&&e&&this._config?.room_panel!==!1?f`<fp3d-room-panel
              @camera-look=${b=>this.view3d()?.lookThrough(b.detail.entity)}
              class="fp3d-card-panel"
              .hass=${this.hass}
              .room=${e.floors.flatMap(b=>b.rooms).find(b=>b.id===this._roomId)??null}
              .floor=${e.floors.find(b=>b.rooms.some(x=>x.id===this._roomId))??null}
              .confirmEntities=${ve(this.hass,e.floors)}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:v}
        ${m&&e?f`<div class="fp3d-card-controls">
              ${s?f`<button class="fp3d-chip" @click=${()=>this.back()}>${_("back")}</button>`:v}
              ${a("walls")?f`<div class="fp3d-seg">
                    <button aria-pressed=${c==="auto"} @click=${()=>this._walls="auto"}>${_("walls_auto")}</button>
                    <button aria-pressed=${c==="cut"} @click=${()=>this._walls="cut"}>${_("walls_cut")}</button>
                  </div>`:v}
              ${a("floors")&&e.floors.length>1&&!o?f`<div class="fp3d-seg">
                    <button aria-pressed=${d} @click=${()=>this._explode=!0}>${_("floors_apart")}</button>
                    <button aria-pressed=${!d} @click=${()=>this._explode=!1}>${_("floors_stacked")}</button>
                  </div>`:v}
              ${l.length?f`<div class="fp3d-seg" role="group" aria-label=${_("heatmap")}>
                    ${["none",...l].map(b=>f`<button aria-pressed=${u===b} @click=${()=>this._heat=b}>
                          ${_(b==="none"?"heat_off":`heat_short_${b}`)}
                        </button>`)}
                  </div>`:v}
            </div>`:v}
        ${n?.fullscreen_button&&!(this._roomId&&n.room_panel!==!1)?f`<button class="fp3d-card-full" title=${_(this._fullscreen?"fullscreen_exit":"fullscreen")} aria-label=${_(this._fullscreen?"fullscreen_exit":"fullscreen")} @click=${()=>this.toggleFullscreen()}>
              ${this._fullscreen?"\u2715":"\u26F6"}
            </button>`:v}
      </div>
    </ha-card>`}static styles=[j,ne,V`
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
    `]};if(!customElements.get("neonplan3d-card")){customElements.define("neonplan3d-card",rn);let i=window;i.customCards=i.customCards??[],i.customCards.push({type:"neonplan3d-card",name:S(void 0,"card_name"),description:S(void 0,"card_description"),preview:!1})}cn();
