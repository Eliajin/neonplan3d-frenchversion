var We=new URL(import.meta.url),Le=We.searchParams.get("v"),Ve=o=>new URL(`./fonts/${o}${Le?`?v=${Le}`:""}`,We).href,Be="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD";function Ne(){if(typeof document>"u"||document.getElementById("fp3d-fonts"))return;let o=document.createElement("style");o.id="fp3d-fonts",o.textContent=`
@font-face{font-family:"Figtree";font-style:normal;font-display:swap;font-weight:300 900;src:url(${Ve("figtree.woff2")}) format("woff2");unicode-range:${Be}}
@font-face{font-family:"Bricolage Grotesque";font-style:normal;font-display:swap;font-weight:200 800;src:url(${Ve("bricolage-grotesque.woff2")}) format("woff2");unicode-range:${Be}}`,document.head.append(o)}var Bt=globalThis,Wt=Bt.ShadowRoot&&(Bt.ShadyCSS===void 0||Bt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,se=Symbol(),Ue=new WeakMap,St=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==se)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Wt&&t===void 0){let n=e!==void 0&&e.length===1;n&&(t=Ue.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Ue.set(e,t))}return t}toString(){return this.cssText}},Ke=o=>new St(typeof o=="string"?o:o+"",void 0,se),W=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((n,i,r)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[r+1],o[0]);return new St(e,o,se)},je=(o,t)=>{if(Wt)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let n=document.createElement("style"),i=Bt.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=e.cssText,o.appendChild(n)}},oe=Wt?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let n of t.cssRules)e+=n.cssText;return Ke(e)})(o):o;var{is:ki,defineProperty:Mi,getOwnPropertyDescriptor:Si,getOwnPropertyNames:Ei,getOwnPropertySymbols:zi,getPrototypeOf:Ai}=Object,Nt=globalThis,Ge=Nt.trustedTypes,Ii=Ge?Ge.emptyScript:"",Ri=Nt.reactiveElementPolyfillSupport,Et=(o,t)=>o,ae={toAttribute(o,t){switch(t){case Boolean:o=o?Ii:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Ze=(o,t)=>!ki(o,t),qe={attribute:!0,type:String,converter:ae,reflect:!1,useDefault:!1,hasChanged:Ze};Symbol.metadata??=Symbol("metadata"),Nt.litPropertyMetadata??=new WeakMap;var X=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=qe){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(t,n,e);i!==void 0&&Mi(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){let{get:i,set:r}=Si(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get:i,set(s){let a=i?.call(this);r?.call(this,s),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??qe}static _$Ei(){if(this.hasOwnProperty(Et("elementProperties")))return;let t=Ai(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Et("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Et("properties"))){let e=this.properties,n=[...Ei(e),...zi(e)];for(let i of n)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[n,i]of e)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[e,n]of this.elementProperties){let i=this._$Eu(e,n);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let i of n)e.unshift(oe(i))}else t!==void 0&&e.push(oe(t));return e}static _$Eu(t,e){let n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return je(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){let n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){let r=(n.converter?.toAttribute!==void 0?n.converter:ae).toAttribute(e,n.type);this._$Em=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){let n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let r=n.getPropertyOptions(i),s=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:ae;this._$Em=i;let a=s.fromAttribute(e,r.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(t,e,n,i=!1,r){if(t!==void 0){let s=this.constructor;if(i===!1&&(r=this[t]),n??=s.getPropertyOptions(t),!((n.hasChanged??Ze)(r,e)||n.useDefault&&n.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:i,wrapped:r},s){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),r!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[i,r]of n){let{wrapped:s}=r,a=this[i];s!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,r,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(e)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};X.elementStyles=[],X.shadowRootOptions={mode:"open"},X[Et("elementProperties")]=new Map,X[Et("finalized")]=new Map,Ri?.({ReactiveElement:X}),(Nt.reactiveElementVersions??=[]).push("2.1.2");var fe=globalThis,Ye=o=>o,Ut=fe.trustedTypes,Qe=Ut?Ut.createPolicy("lit-html",{createHTML:o=>o}):void 0,rn="$lit$",it=`lit$${Math.random().toFixed(9).slice(2)}$`,sn="?"+it,Fi=`<${sn}>`,lt=document,At=()=>lt.createComment(""),It=o=>o===null||typeof o!="object"&&typeof o!="function",me=Array.isArray,Ti=o=>me(o)||typeof o?.[Symbol.iterator]=="function",le=`[ 	
\f\r]`,zt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Je=/-->/g,Xe=/>/g,ot=RegExp(`>|${le}(?:([^\\s"'>=/]+)(${le}*=${le}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),tn=/'/g,en=/"/g,on=/^(?:script|style|textarea|title)$/i,ge=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),g=ge(1),k=ge(2),Wr=ge(3),dt=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),nn=new WeakMap,at=lt.createTreeWalker(lt,129);function an(o,t){if(!me(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Qe!==void 0?Qe.createHTML(t):t}var Pi=(o,t)=>{let e=o.length-1,n=[],i,r=t===2?"<svg>":t===3?"<math>":"",s=zt;for(let a=0;a<e;a++){let l=o[a],c,d,h=-1,f=0;for(;f<l.length&&(s.lastIndex=f,d=s.exec(l),d!==null);)f=s.lastIndex,s===zt?d[1]==="!--"?s=Je:d[1]!==void 0?s=Xe:d[2]!==void 0?(on.test(d[2])&&(i=RegExp("</"+d[2],"g")),s=ot):d[3]!==void 0&&(s=ot):s===ot?d[0]===">"?(s=i??zt,h=-1):d[1]===void 0?h=-2:(h=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?ot:d[3]==='"'?en:tn):s===en||s===tn?s=ot:s===Je||s===Xe?s=zt:(s=ot,i=void 0);let p=s===ot&&o[a+1].startsWith("/>")?" ":"";r+=s===zt?l+Fi:h>=0?(n.push(c),l.slice(0,h)+rn+l.slice(h)+it+p):l+it+(h===-2?a:p)}return[an(o,r+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},Rt=class o{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let r=0,s=0,a=t.length-1,l=this.parts,[c,d]=Pi(t,e);if(this.el=o.createElement(c,n),at.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=at.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let h of i.getAttributeNames())if(h.endsWith(rn)){let f=d[s++],p=i.getAttribute(h).split(it),u=/([.?@])?(.*)/.exec(f);l.push({type:1,index:r,name:u[2],strings:p,ctor:u[1]==="."?ce:u[1]==="?"?pe:u[1]==="@"?he:ut}),i.removeAttribute(h)}else h.startsWith(it)&&(l.push({type:6,index:r}),i.removeAttribute(h));if(on.test(i.tagName)){let h=i.textContent.split(it),f=h.length-1;if(f>0){i.textContent=Ut?Ut.emptyScript:"";for(let p=0;p<f;p++)i.append(h[p],At()),at.nextNode(),l.push({type:2,index:++r});i.append(h[f],At())}}}else if(i.nodeType===8)if(i.data===sn)l.push({type:2,index:r});else{let h=-1;for(;(h=i.data.indexOf(it,h+1))!==-1;)l.push({type:7,index:r}),h+=it.length-1}r++}}static createElement(t,e){let n=lt.createElement("template");return n.innerHTML=t,n}};function ht(o,t,e=o,n){if(t===dt)return t;let i=n!==void 0?e._$Co?.[n]:e._$Cl,r=It(t)?void 0:t._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(o),i._$AT(o,e,n)),n!==void 0?(e._$Co??=[])[n]=i:e._$Cl=i),i!==void 0&&(t=ht(o,i._$AS(o,t.values),i,n)),t}var de=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:n}=this._$AD,i=(t?.creationScope??lt).importNode(e,!0);at.currentNode=i;let r=at.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new Ft(r,r.nextSibling,this,t):l.type===1?c=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(c=new ue(r,this,t)),this._$AV.push(c),l=n[++a]}s!==l?.index&&(r=at.nextNode(),s++)}return at.currentNode=lt,i}p(t){let e=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}},Ft=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,i){this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ht(this,t,e),It(t)?t===b||t==null||t===""?(this._$AH!==b&&this._$AR(),this._$AH=b):t!==this._$AH&&t!==dt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ti(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==b&&It(this._$AH)?this._$AA.nextSibling.data=t:this.T(lt.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Rt.createElement(an(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(e);else{let r=new de(i,this),s=r.u(this.options);r.p(e),this.T(s),this._$AH=r}}_$AC(t){let e=nn.get(t.strings);return e===void 0&&nn.set(t.strings,e=new Rt(t)),e}k(t){me(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,n,i=0;for(let r of t)i===e.length?e.push(n=new o(this.O(At()),this.O(At()),this,this.options)):n=e[i],n._$AI(r),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let n=Ye(t).nextSibling;Ye(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},ut=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,i,r){this.type=1,this._$AH=b,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=b}_$AI(t,e=this,n,i){let r=this.strings,s=!1;if(r===void 0)t=ht(this,t,e,0),s=!It(t)||t!==this._$AH&&t!==dt,s&&(this._$AH=t);else{let a=t,l,c;for(t=r[0],l=0;l<r.length-1;l++)c=ht(this,a[n+l],e,l),c===dt&&(c=this._$AH[l]),s||=!It(c)||c!==this._$AH[l],c===b?t=b:t!==b&&(t+=(c??"")+r[l+1]),this._$AH[l]=c}s&&!i&&this.j(t)}j(t){t===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ce=class extends ut{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===b?void 0:t}},pe=class extends ut{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==b)}},he=class extends ut{constructor(t,e,n,i,r){super(t,e,n,i,r),this.type=5}_$AI(t,e=this){if((t=ht(this,t,e,0)??b)===dt)return;let n=this._$AH,i=t===b&&n!==b||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==b&&(n===b||i);i&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},ue=class{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){ht(this,t)}};var Oi=fe.litHtmlPolyfillSupport;Oi?.(Rt,Ft),(fe.litHtmlVersions??=[]).push("3.3.3");var ln=(o,t,e)=>{let n=e?.renderBefore??t,i=n._$litPart$;if(i===void 0){let r=e?.renderBefore??null;n._$litPart$=i=new Ft(t.insertBefore(At(),r),r,void 0,e??{})}return i._$AI(o),i};var _e=globalThis,V=class extends X{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ln(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return dt}};V._$litElement$=!0,V.finalized=!0,_e.litElementHydrateSupport?.({LitElement:V});var Ci=_e.litElementPolyfillSupport;Ci?.({LitElement:V});(_e.litElementVersions??=[]).push("4.2.2");async function dn(o){return o.callWS({type:"floorplan_3d/building/get"})}async function cn(o,t){return(await o.callWS({type:"floorplan_3d/building/save",building:t})).revision}function pn(o,t){return o.connection.subscribeMessage(e=>t(e.revision),{type:"floorplan_3d/building/subscribe"})}async function hn(o,t){return(await o.callWS({type:"floorplan_3d/image/get",image_id:t})).data}async function un(o,t,e){await o.callWS({type:"floorplan_3d/image/set",image_id:t,data:e})}async function fn(o){return(await o.callWS({type:"floorplan_3d/history/list"})).snapshots}async function mn(o){await o.callWS({type:"floorplan_3d/history/snapshot"})}async function gn(o,t){return(await o.callWS({type:"floorplan_3d/history/restore",snapshot_id:t})).revision}var _n=["lawn","terrace","path","driveway","pool","bed","hedge","fence"],Di={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,hedge:1.2,fence:1};function Hi(o){return o.elevation>.3?0:-.2}function bn(o,t,e){let n=(o.outdoor??[]).find(i=>i.type!=="hedge"&&i.type!=="fence"&&i.type!=="pool"&&P([t,e],i.points));return Hi(o)+(n?Di[n.type]:0)}var Li={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,tariff:null},vn=["wood","oak","tiles","carpet","stone","concrete"],yn={type:"none",pitch:35,overhang:.4},Vi={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...yn}};function wn(o,t,e){return{id:o,name:t,elevation:e,height:2.5,cut_height:1.15,rooms:[],openings:[],furniture:[],placements:[],background:null,outdoor:[],ha_floor:null}}var Bi=2.75;function xn(o,t){if(t!=null&&Number.isFinite(t))return Math.round(t*Bi*100)/100;let e=o.reduce((n,i)=>!n||i.elevation>n.elevation?i:n,null);return e?Math.round((e.elevation+e.height+.25)*100)/100:0}function $n(o,t,e){let n=o.rooms.flatMap(a=>a.points.map(l=>l[0])),i=o.rooms.flatMap(a=>a.points.map(l=>l[1])),r=n.length?Math.ceil(Math.max(...n))+1:0,s=i.length?Math.floor(Math.min(...i)):0;return t.map((a,l)=>{let c=r+l%3*4.5,d=s+Math.floor(l/3)*3.5;return{id:e(),name:a.name,area_id:a.area_id,points:[[c,d],[c+4,d],[c+4,d+3],[c,d+3]],floor_material:"wood"}})}function kn(o,t,e,n){let i=o.rotation*Math.PI/180,r=Math.cos(i),s=Math.sin(i),[a,l]=t,c=o.x-a*(o.w/2)*r+l*(o.d/2)*s,d=o.z-a*(o.w/2)*s-l*(o.d/2)*r,h=e[0]-c,f=e[1]-d,p=y=>Math.max(.1,Math.round(y/n)*n),u=p((h*r+f*s)*a),_=p((-h*s+f*r)*l),v=y=>Math.round(y*1e3)/1e3;return{x:v(c+a*(u/2)*r-l*(_/2)*s),z:v(d+a*(u/2)*s+l*(_/2)*r),w:v(u),d:v(_)}}var Mn=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_table","lamp_wall","led_strip","lamp_uplight","lamp_bollard","lamp_garden","radiator","sofa","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug","table","table_round","chair","bench","corner_bench","bar_stool","kitchen","kitchen_wall","kitchen_tall","island","sink","stove","dishwasher","fridge","bed","bunk_bed","nightstand","wardrobe","dresser","bathtub","shower","wc","washbasin","washer","dryer","desk","office_chair","tall_cabinet","coat_rack","stairs"],Sn={lights:["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"],living:["sofa","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug"],dining:["table","table_round","chair","bench","corner_bench","bar_stool"],kitchen:["kitchen","kitchen_wall","kitchen_tall","island","sink","stove","dishwasher","fridge"],sleeping:["bed","bunk_bed","nightstand","wardrobe","dresser"],bath:["bathtub","shower","wc","washbasin","washer","dryer"],work:["desk","office_chair","tall_cabinet","coat_rack","radiator","stairs"]},En=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]);function tt(o){return En.has(o)}var Wi=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","tv_board","dishwasher","washer","dryer"]);function be(o,t,e,n=0){let i=q(o.points),r=i.x1-i.x0-2*n,s=i.z1-i.z0-2*n,a=[];for(let l=0;l<t;l++)for(let c=0;c<e;c++){let d=[Math.round((i.x0+n+r/e*(c+.5))*1e3)/1e3,Math.round((i.z0+n+s/t*(l+.5))*1e3)/1e3];P(d,o.points)&&a.push(d)}return a}function ft(o,t,e){let n=s=>Math.round(s*1e3)/1e3,[i,r]={right:[1,0],down:[0,1],left:[-1,0],up:[0,-1]}[e];return[n(o[0]+i*t),n(o[1]+r*t)]}function zn(o,t,e){let n=0;for(let i of o.furniture)!Wi.has(i.type)||!P([t,e],Ni(i))||(n=Math.max(n,i.h));return n}var An=new Set([...En,"radiator","tv_board","tv_wall","desk","fridge","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),et={sofa:[2.2,.9,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],fridge:[.6,.65,1.8],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};var Kt={door:{type:"door",leaves:1,width:.9,sill:0,height:2.05},door_double:{type:"door",leaves:2,width:1.6,sill:0,height:2.05},window:{type:"window",leaves:1,width:1.2,sill:.9,height:1.3},window_double:{type:"window",leaves:2,width:1.6,sill:.9,height:1.3},terrace:{type:"window",leaves:1,width:1,sill:0,height:2.1},terrace_double:{type:"window",leaves:2,width:1.8,sill:0,height:2.1},garage:{type:"garage",leaves:1,width:2.5,sill:0,height:2.1}};function ve(o){if(o.type==="garage")return"garage";let t=o.leaves===2;return o.type==="door"?t?"door_double":"door":o.sill<.1?t?"terrace_double":"terrace":t?"window_double":"window"}function Tt(o){o.energy={...Li,...o.energy??{}},o.presence=o.presence??[],o.settings={...Vi,...o.settings,roof:{...yn,...o.settings?.roof??{}}};for(let t of o.floors){t.outdoor=t.outdoor??[],t.ha_floor=t.ha_floor??null,t.placements=t.placements.map(n=>({...n,mount:n.mount??null})),t.furniture=t.furniture.map(n=>({...n,entity:n.entity??null,power:n.power??null}));let e=t.placements.filter(n=>n.entity_id.startsWith("light."));if(e.length){let n={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let i of e){let r=n[i.mount??"ceiling"],[s,a,l]=et[r];t.furniture.push({id:`lamp_${i.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:r,x:i.x,z:i.z,rotation:0,w:s,d:a,h:l,variant:null,entity:i.entity_id,power:null})}t.placements=t.placements.filter(i=>!i.entity_id.startsWith("light."))}t.openings=t.openings.map(n=>({...n,hinge:n.hinge??"left",leaves:n.leaves??1,swing:n.swing??"in",cover:n.cover??null,contact:n.contact??null,contact2:n.contact2??null,tilt:n.tilt??null}))}return o}function N(o){return`${o}_${Math.random().toString(36).slice(2,10)}`}function U(o){let t=0;for(let e=0;e<o.length;e++){let[n,i]=o[e],[r,s]=o[(e+1)%o.length];t+=n*s-r*i}return t/2}function mt(o){return Math.abs(U(o))}function Q(o){let t=U(o);if(Math.abs(t)<1e-9){let i=o.length||1;return[o.reduce((r,s)=>r+s[0],0)/i,o.reduce((r,s)=>r+s[1],0)/i]}let e=0,n=0;for(let i=0;i<o.length;i++){let[r,s]=o[i],[a,l]=o[(i+1)%o.length],c=r*l-a*s;e+=(r+a)*c,n+=(s+l)*c}return[e/(6*t),n/(6*t)]}function ye(o){if(o.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=o[t],[i,r]=o[(t+1)%4];if(Math.abs(e-i)>1e-6&&Math.abs(n-r)>1e-6)return!1}return!0}function q(o){let t=1/0,e=1/0,n=-1/0,i=-1/0;for(let[r,s]of o)t=Math.min(t,r),e=Math.min(e,s),n=Math.max(n,r),i=Math.max(i,s);return{x0:t,z0:e,x1:n,z1:i}}function Ni(o){let t=o.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),i=o.w/2,r=o.d/2;return[[-i,-r],[i,-r],[i,r],[-i,r]].map(([s,a])=>[o.x+s*e-a*n,o.z+s*n+a*e])}function P(o,t){let e=!1;for(let n=0,i=t.length-1;n<t.length;i=n++){let[r,s]=t[n],[a,l]=t[i];s>o[1]!=l>o[1]&&o[0]<(a-r)*(o[1]-s)/(l-s)+r&&(e=!e)}return e}var Ui=700,xe="floorplan_3d.unsaved",In="0.11.1";function Ki(){try{let o=localStorage.getItem(xe);return o?JSON.parse(o):null}catch{return null}}function we(o){try{o?localStorage.setItem(xe,JSON.stringify(o)):localStorage.removeItem(xe)}catch{}}var gt=class{building=null;error=null;saveState="idle";saveError=null;backendVersion=null;draft=null;host;hass=null;revision=-1;ownRevisions=new Set;unsubscribe=null;saveTimer;pending=null;saving=null;connected=!1;constructor(t){this.host=t,t.addController(this)}setHass(t){let e=this.hass===null;this.hass=t,e&&this.connected&&this.start()}hostConnected(){this.connected=!0,this.hass&&this.start()}hostDisconnected(){this.connected=!1,this.flush(),this.unsubscribe?.(),this.unsubscribe=null}edit(t){this.building=t,this.pending=t,clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{this.flush()},Ui),this.host.requestUpdate()}get needsRestart(){return this.saveError&&/extra keys not allowed/i.test(this.saveError)?!0:!!this.backendVersion&&In!=="dev"&&this.backendVersion!==In}restoreDraft(){let t=this.draft;this.draft=null,t&&this.edit(Tt(t.building))}discardDraft(){this.draft=null,we(null),this.host.requestUpdate()}async flush(){clearTimeout(this.saveTimer),this.saving&&await this.saving;let t=this.pending;!t||!this.hass||(this.pending=null,this.saveState="saving",this.host.requestUpdate(),this.saving=(async()=>{try{let e=await cn(this.hass,t);this.ownRevisions.add(e),this.revision=e,this.saveState=this.pending?"saving":"saved",this.saveError=null,we(null)}catch(e){this.saveState="error",this.saveError=Rn(e),we({building:t,savedAt:Date.now()})}this.host.requestUpdate()})(),await this.saving,this.saving=null)}async start(){if(this.hass&&(await this.reload(),!this.unsubscribe&&this.connected))try{this.unsubscribe=await pn(this.hass,t=>{this.ownRevisions.has(t)||t===this.revision||this.pending||this.saving||this.reload()})}catch{}}async reload(){if(this.hass){try{let t=await dn(this.hass);this.building=Tt(t.building),this.backendVersion=t.version??null,this.draft===null&&!this.pending&&(this.draft=Ki()),this.revision=t.revision,this.error=null}catch(t){this.error=Rn(t)}this.host.requestUpdate()}}};function Rn(o){return o&&typeof o=="object"&&"message"in o?String(o.message):String(o)}var Fn="floorplan_3d";function ji(o){let t=structuredClone(o);t.energy={...t.energy,grid:null,solar:null,battery:null,battery_soc:null,tariff:null},t.presence=[];for(let e of t.floors)e.placements=[],e.background=null,e.rooms=e.rooms.map(n=>({...n,area_id:null})),e.furniture=e.furniture.map(n=>({...n,entity:null,power:null})),e.openings=e.openings.map(n=>({...n,cover:null,contact:null,tilt:null}));return t}function Tn(o,t){return{format:Fn,version:1,exported_at:new Date().toISOString(),building:t?ji(o):structuredClone(o)}}function Pn(o){let t;try{t=JSON.parse(o)}catch{throw new Error("no JSON")}let e=t,n=e?.format===Fn?e.building:t;if(!n||n.version!==1||!Array.isArray(n.floors)||!n.settings)throw new Error("no Floorplan 3D plan");for(let i of n.floors)i.background=null;return Tt(n)}function On(o,t){let e=URL.createObjectURL(new Blob([t],{type:"application/json"})),n=document.createElement("a");n.href=e,n.download=o,n.click(),setTimeout(()=>URL.revokeObjectURL(e),1e3)}var Gi={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},qi=new Set(["temperature","humidity","power","carbon_dioxide"]),Zi=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas"]),Cn=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],Hn=new Set(["light","switch","fan"]);function Yi(o){return o.slice(0,o.indexOf("."))}function z(o){return Gi[Yi(o)]??null}function Ln(o){return o!==null&&o!=="scene"&&o!=="script"}function Qi(o,t){let e=o.entities?.[t];return e?e.area_id?e.area_id:e.device_id&&o.devices?.[e.device_id]?.area_id||null:null}function Ji(o,t){let e=z(t);if(!e)return!1;let n=o.entities?.[t];if(n?.hidden||n?.entity_category)return!1;let i=o.states[t];if(!i)return!1;let r=i.attributes.device_class;return e==="sensor"?!!r&&qi.has(r):e==="binary"?!!r&&Zi.has(r):!0}function B(o,t){if(!t||!o.entities)return[];let e=Object.keys(o.entities).filter(i=>Qi(o,i)===t&&Ji(o,i)),n=o.areas?.[t]?.name;return e.sort((i,r)=>{let s=Cn.indexOf(z(i)),a=Cn.indexOf(z(r));return s-a||D(o,i,n).localeCompare(D(o,r,n))})}function D(o,t,e){let i=o.states[t]?.attributes.friendly_name??o.entities?.[t]?.name??t;if(e&&i.length>e.length+1&&i.toLowerCase().startsWith(e.toLowerCase()+" ")){let r=i.slice(e.length+1);return r.charAt(0).toUpperCase()+r.slice(1)}return i}function H(o){return!o||o.state==="unavailable"||o.state==="unknown"}function _t(o){if(!o)return!1;switch(z(o.entity_id)){case"light":case"switch":case"fan":case"binary":return o.state==="on";case"cover":return o.state==="open"||o.state==="opening";case"climate":return o.attributes.hvac_action==="heating"||o.attributes.hvac_action==="cooling";case"media":return o.state==="playing";case"lock":return o.state==="unlocked"||o.state==="open";default:return!1}}function jt(o){if(!o||o.state!=="on")return null;let t=o.attributes,e=typeof t.brightness=="number"?Math.max(.08,t.brightness/255):1,n=t.rgb_color,i;return n&&t.color_mode!=="color_temp"&&t.color_mode!=="brightness"&&t.color_mode!=="onoff"?i=[n[0]/255,n[1]/255,n[2]/255]:typeof t.color_temp_kelvin=="number"?i=Xi(t.color_temp_kelvin):i=[1,.71,.28],{color:i,level:e}}function Xi(o){let t=Math.min(1,Math.max(0,(o-2200)/4300)),e=[1,.66,.26],n=[.78,.9,1];return[e[0]+(n[0]-e[0])*t,e[1]+(n[1]-e[1])*t,e[2]+(n[2]-e[2])*t]}function Gt(o,t,e=null){if(o==="light"&&e){if(e==="floor")return 1.95;if(e==="table")return 1.25;if(e==="wall")return 1.95}switch(o){case"light":case"camera":return Math.max(.5,t-.25);case"cover":return Math.min(2,t-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}function tr(o,t){let e=1/0;for(let n=0;n<t.length;n++){let i=t[n],r=t[(n+1)%t.length],s=r[0]-i[0],a=r[1]-i[1],l=s*s+a*a||1,c=Math.min(1,Math.max(0,((o[0]-i[0])*s+(o[1]-i[1])*a)/l));e=Math.min(e,Math.hypot(o[0]-i[0]-s*c,o[1]-i[1]-a*c))}return e}function Vn(o,t,e=[]){if(o.points.length<3||!t.length)return[];let n=o.points,i=n.map(m=>m[0]),r=n.map(m=>m[1]),s=Math.min(...i),a=Math.min(...r),l=Math.max(...i),c=Math.max(...r),d=Math.min(l-s,c-a),h=Math.max(.1,Math.min(.25,d/8)),f=Math.min(.35,d/5),p=Q(n),u=[];for(let m=s+h/2;m<l;m+=h)for(let w=a+h/2;w<c;w+=h){let $=[m,w];if(!P($,n))continue;let x=tr($,n);x<f||u.push({p:$,wall:x})}u.length||u.push({p,wall:0});let _=[...e],v=[],y=Math.min(.7,d/4);for(let m of t){let w=z(m)==="light",$=u[0].p,x=-1/0;for(let{p:E,wall:A}of u){let R=_.length?Math.min(..._.map(G=>Math.hypot(E[0]-G[0],E[1]-G[1]))):3,Y=Math.hypot(E[0]-p[0],E[1]-p[1]),F=Math.min(R,3)*2;Y<y&&!w&&(F-=10),F-=w?Y*.35:A*1.2,F>x+1e-9&&(x=F,$=E)}let S=[Math.round($[0]*100)/100,Math.round($[1]*100)/100];_.push(S),v.push({entity_id:m,x:S[0],z:S[1],y:null,mount:null})}return v}var er=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),nr=new Set(["garage","gate"]),ir=new Set(["window","opening"]);function Pt(o,t,e=!1){let n=new Map;return t.length&&o.forEach((i,r)=>{let s=e&&t.length===1?t[0]:t[r];s&&n.set(i.id,s)}),n}function qt(o,t){let e=new Map;for(let n of t)for(let i of n.rooms){let r=n.openings.filter(m=>m.room_id===i.id).sort((m,w)=>m.edge-w.edge||m.offset-w.offset);if(!r.length)continue;let s=B(o,i.area_id),a=m=>o.states[m]?.attributes.device_class,l=s.filter(m=>z(m)==="cover"&&er.has(a(m))),c=r.filter(m=>m.type==="window"),d=r.filter(m=>m.type==="door"),h=r.filter(m=>m.type==="garage"),f=Pt(c,l,!0),p=Pt(c,s.filter(m=>z(m)==="binary"&&ir.has(a(m)))),u=Pt(d,s.filter(m=>z(m)==="binary"&&a(m)==="door")),_=Pt(h,s.filter(m=>z(m)==="cover"&&nr.has(a(m)??""))),v=Pt(h,s.filter(m=>z(m)==="binary"&&a(m)==="garage_door")),y=(m,w)=>m==="none"?null:m??w??null;for(let m of r){let w=m.type==="window"?f:m.type==="garage"?_:null,$=m.type==="window"?p:m.type==="garage"?v:u;e.set(m.id,{cover:y(m.cover,w?.get(m.id)),contact:y(m.contact,$.get(m.id)),tilt:m.tilt==="none"?null:m.tilt,contact2:m.leaves===2&&m.contact2&&m.contact2!=="none"?m.contact2:null})}}return e}var rr=.5;function Zt(o,t,e="window"){let n=d=>!!d&&o.states[d]?.state==="on",i=d=>!!d&&!!o.states[d]&&!H(o.states[d]),r=n(t.contact2)?1:0;if(e==="door")return{open:i(t.contact)?n(t.contact)?1:0:rr,open2:r,tilt:0,cover:null};let s=n(t.tilt),a=n(t.contact)&&!s?1:0,l=null,c=t.cover?o.states[t.cover]:void 0;if(c&&!H(c)){let d=c.attributes.current_position;typeof d=="number"?l=1-Math.min(100,Math.max(0,d))/100:l=c.state==="closed"?1:c.state==="opening"||c.state==="closing"?.5:0}else t.cover&&(l=0);return e==="garage"?(l===null&&(l=i(t.contact)&&n(t.contact)?0:1),{open:0,open2:0,tilt:0,cover:l}):{open:a,open2:r,tilt:s?1:0,cover:l}}function Ot(o,t){let e=new Map,n=[];for(let s of t){let a=o.entities?.[s]?.device_id??`entity:${s}`,l=e.get(a);l||(e.set(a,l=[]),n.push(a)),l.push(s)}let i=n.map(s=>{let a=e.get(s),l=a.find(c=>!o.entities?.[c]?.name)??a[0];return{primary:l,others:a.filter(c=>c!==l)}}),r=new Map(t.map((s,a)=>[s,a]));return i.sort((s,a)=>r.get(s.primary)-r.get(a.primary))}function ke(o,t){return Ot(o,t).map(e=>e.primary)}var sr={tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i},or=new Set(["tv_board","tv_wall"]),Dn={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function $e(o,t){return t.startsWith("sensor.")&&o.states[t]?.attributes.device_class==="power"}function ar(o,t){if($e(o,t))return t;let e=o.entities?.[t]?.device_id;return!e||!o.entities?null:Object.values(o.entities).find(n=>n.device_id===e&&n.entity_id!==t&&$e(o,n.entity_id))?.entity_id??null}function Yt(o,t){let e=new Map;for(let n of t){let i=new Set(n.furniture.flatMap(r=>[r.entity,r.power]).filter(r=>!!r&&r!=="none"));for(let r of n.furniture){let s=r.type in Dn,a=s?Dn[r.type]:sr[r.type];if(!a&&r.entity==null&&r.power==null)continue;let l=n.rooms.find(p=>p.points.length>=3&&P([r.x,r.z],p.points)),c=l?ke(o,B(o,l.area_id)):[],d=p=>`${p} ${D(o,p)}`,h=r.entity==="none"?null:r.entity??null;if(r.entity==null){let p=c.filter(u=>!i.has(u));if(s){let u=p.filter(_=>z(_)==="light");h=u.find(_=>a.test(d(_)))??u[0]??null}else if(r.type==="radiator"){let u=p.filter(_=>z(_)==="climate");h=u.find(_=>a.test(d(_)))??u[0]??null}else if(or.has(r.type)){let u=p.filter(_=>z(_)==="media");h=u.find(_=>o.states[_]?.attributes.device_class==="tv")??u.find(_=>a?.test(d(_)))??u[0]??null}else a&&(h=p.find(u=>["switch","media","fan"].includes(z(u)??"")&&a.test(d(u)))??null);h&&i.add(h)}let f=r.power==="none"?null:r.power??null;r.power==null&&(f=h?ar(o,h):null,!f&&a&&l&&!s&&(f=B(o,l.area_id).find(u=>$e(o,u)&&!i.has(u)&&a.test(d(u)))??null),f&&i.add(f)),(h||f)&&e.set(r.id,{entity:h,power:f})}}return e}function Bn(o){if(!o||o.state==="off"||o.state==="standby"||H(o))return null;let t=o.attributes,e=`${t.app_name??""} ${t.source??""} ${t.app_id??""}`.toLowerCase();return e.includes("netflix")?[.9,.04,.08]:e.includes("youtube")?[1,.1,.15]:e.includes("prime")||e.includes("amazon")?[.1,.6,.95]:e.includes("disney")?[.2,.35,1]:e.includes("spotify")?[.12,.85,.4]:e.includes("zdf")||e.includes("ard")||e.includes("mediathek")?[1,.5,.1]:[.22,.88,1]}var C=(o,t,e,n,i="")=>k`<rect class=${i} x=${Math.min(o,e)} y=${Math.min(t,n)} width=${Math.abs(e-o)} height=${Math.abs(n-t)} />`,O=(o,t,e,n,i="")=>k`<line class=${i} x1=${o} y1=${t} x2=${e} y2=${n} />`,L=(o,t,e,n="")=>k`<circle class=${n} cx=${o} cy=${t} r=${e} />`,Me=(o,t,e,n,i="")=>k`<ellipse class=${i} cx=${o} cy=${t} rx=${e} ry=${n} />`;function Se(o,t,e){let n=[];for(let i=1;i<e;i++){let r=-o/2+o/e*i;n.push(O(r,t/2,r,t/2-Math.min(.12,t*.3)))}return n}function Wn(o,t,e,n){let i=Math.min(.24,t*.28),r=n?Math.min(.2,o*.12):0,s=[C(-o/2,-t/2,o/2,-t/2+i,"fp3d-sym-fill")];n&&s.push(C(-o/2,-t/2,-o/2+r,t/2,"fp3d-sym-fill"),C(o/2-r,-t/2,o/2,t/2,"fp3d-sym-fill"));let a=o-2*r;for(let l=1;l<e;l++){let c=-o/2+r+a/e*l;s.push(O(c,-t/2+i,c,t/2-.02))}return s}function Nn(o,t,e){switch(o){case"sofa":return Wn(t,e,Math.max(1,Math.round((t-.4)/.62)),!0);case"armchair":return Wn(t,e,1,!0);case"bench":return[C(-t/2,-e/2,t/2,-e/2+.08,"fp3d-sym-fill")];case"corner_bench":{let n=Math.min(.5,e*.4);return[C(-t/2,-e/2,t/2,-e/2+.08,"fp3d-sym-fill"),C(-t/2,-e/2,-t/2+.08,e/2,"fp3d-sym-fill"),O(-t/2+n,-e/2+n,t/2,-e/2+n),O(-t/2+n,-e/2+n,-t/2+n,e/2)]}case"chair":return[C(-t/2,-e/2,t/2,-e/2+.06,"fp3d-sym-fill")];case"office_chair":return[L(0,.03,Math.min(t,e)*.36),C(-t*.35,-e/2+.02,t*.35,-e/2+.1,"fp3d-sym-fill")];case"bar_stool":case"table_round":return[L(0,0,Math.min(t,e)*.42)];case"stool":return[C(-t/2+.04,-e/2+.04,t/2-.04,e/2-.04)];case"table":case"coffee_table":case"desk":{let n=[C(-t/2+.05,-e/2+.05,t/2-.05,e/2-.05)];return o==="desk"&&n.push(O(-.3,-e/2+.1,.3,-e/2+.1,"fp3d-sym-strong")),n}case"bed":case"bunk_bed":{let n=t>1.2?2:1,i=(t-.2)/n,r=[C(-t/2,-e/2,t/2,-e/2+.07,"fp3d-sym-fill"),O(-t/2,-e/2+(e-.1)*.36,t/2,-e/2+(e-.1)*.36)];for(let s=0;s<n;s++)r.push(C(-t/2+.13+i*s,-e/2+.12,-t/2+.07+i*(s+1),-e/2+.12+Math.min(.4,e*.18)));return r}case"nightstand":case"wardrobe":case"dresser":case"sideboard":case"tall_cabinet":case"kitchen":case"kitchen_wall":case"kitchen_tall":case"shelf":return Se(t,e,o==="nightstand"||o==="tall_cabinet"||o==="kitchen_tall"?1:Math.max(2,Math.round(t/.5)));case"coat_rack":return[C(-t/2,-e/2,t/2,-e/2+.03,"fp3d-sym-fill"),...Se(t,e,Math.max(2,Math.round(t/.5)))];case"island":return[O(-t/2,e/2-.3,t/2,e/2-.3)];case"fridge":return[O(-t/2+.06,e/2-.04,t/2-.06,e/2-.04,"fp3d-sym-strong")];case"stove":{let n=Math.min(t,e)*.14;return[L(-t*.22,-e*.2,n),L(t*.22,-e*.2,n*.8),L(-t*.22,e*.2,n*.8),L(t*.22,e*.2,n)]}case"sink":{let n=Math.min(.5,t-.2);return[C(-n/2,-e/2+.1,n/2,e/2-.08),L(0,-e/2+.06,.025,"fp3d-sym-fill")]}case"dishwasher":return[O(-t/2+.08,e/2-.05,t/2-.08,e/2-.05,"fp3d-sym-strong")];case"washer":case"dryer":return[L(0,.05,Math.min(t,e)*.3),O(-t/2,-e/2+.1,t/2,-e/2+.1)];case"bathtub":return[C(-t/2+.07,-e/2+.07,t/2-.07,e/2-.07),L(-t/2+.14,0,.03,"fp3d-sym-fill")];case"shower":return[O(-t/2,-e/2,t/2,e/2),O(t/2,-e/2,-t/2,e/2),L(0,0,.04)];case"wc":return[C(-t/2,-e/2,t/2,-e/2+Math.min(.18,e*.3),"fp3d-sym-fill"),Me(0,e*.1,t*.36,e*.3)];case"washbasin":return[Me(0,.03,t*.34,e*.3)];case"tv_board":return[O(-Math.min(t*.4,.72),-e/2+.14,Math.min(t*.4,.72),-e/2+.14,"fp3d-sym-strong"),...Se(t,e,Math.max(2,Math.round(t/.6)))];case"tv_wall":return[O(-t/2,0,t/2,0,"fp3d-sym-strong")];case"lamp_downlight":case"lamp_spot":return[L(0,0,Math.min(t,e)*.45,"fp3d-sym-fill"),L(0,0,Math.min(t,e)*1.4)];case"lamp_bollard":case"lamp_garden":return[L(0,0,Math.min(t,e)*.5,"fp3d-sym-fill"),L(0,0,Math.min(t,e)*1.6)];case"radiator":{let n=[],i=Math.max(3,Math.round(t/.1));for(let r=1;r<i;r++)n.push(O(-t/2+t/i*r,-e/2,-t/2+t/i*r,e/2));return n}case"lamp_panel":return[C(-t/2+.03,-e/2+.03,t/2-.03,e/2-.03,"fp3d-sym-fill")];case"lamp_uplight":case"lamp_ceiling":case"lamp_pendant":case"lamp_floor":case"lamp_table":{let n=Math.min(t,e)/2,i=[L(0,0,n*.9,"fp3d-sym-fill"),L(0,0,n*.3)];if(o==="lamp_ceiling"||o==="lamp_pendant")for(let r=0;r<8;r++){let s=r/8*Math.PI*2;i.push(O(Math.cos(s)*n*1.05,Math.sin(s)*n*1.05,Math.cos(s)*n*1.35,Math.sin(s)*n*1.35))}return i}case"lamp_wall":return[C(-t/2,-e/2,t/2,-e/2+.03,"fp3d-sym-fill"),Me(0,.01,t*.4,e*.4)];case"led_strip":return[O(-t/2,0,t/2,0,"fp3d-sym-strong")];case"plant":return[L(0,0,Math.min(t,e)*.46),L(0,0,Math.min(t,e)*.25)];case"rug":return[C(-t/2+.1,-e/2+.1,t/2-.1,e/2-.1)];case"stairs":{let n=Math.max(3,Math.round(e/.26)),i=[];for(let r=1;r<n;r++)i.push(O(-t/2,e/2-e/n*r,t/2,e/2-e/n*r));return i.push(O(0,e/2-.1,0,-e/2+.25,"fp3d-sym-strong"),O(-.15,-e/2+.45,0,-e/2+.25,"fp3d-sym-strong"),O(.15,-e/2+.45,0,-e/2+.25,"fp3d-sym-strong")),i}default:return b}}var lr=.05,dr=.2,cr=.12;function pr(o){let t=[];return o.forEach((e,n)=>{let i=e.points;if(i.length<3)return;let r=U(i)>=0;for(let s=0;s<i.length;s++){let a=i[s],l=i[(s+1)%i.length],c=l[0]-a[0],d=l[1]-a[1],h=Math.hypot(c,d);if(h<.05)continue;let f=[c/h,d/h],p=r?[f[1],-f[0]]:[-f[1],f[0]];(f[1]<-1e-9||Math.abs(f[1])<=1e-9&&f[0]<0)&&(f=[-f[0],-f[1]]);let u=[-f[1],f[0]],_=a[0]*f[0]+a[1]*f[1],v=l[0]*f[0]+l[1]*f[1];t.push({room:n,index:s,dir:f,normal:u,offset:a[0]*u[0]+a[1]*u[1],outside:p[0]*u[0]+p[1]*u[1]>0?1:-1,t0:Math.min(_,v),t1:Math.max(_,v)})}}),t}function Un(o,t=.6){let e=pr(o),n=e.map((d,h)=>h),i=d=>n[d]===d?d:n[d]=i(n[d]),r=[];for(let d=0;d<e.length;d++)for(let h=d+1;h<e.length;h++){let f=e[d],p=e[h];if(f.room===p.room||Math.abs(f.dir[0]*p.dir[1]-f.dir[1]*p.dir[0])>lr||f.outside===p.outside)continue;let u=(p.offset-f.offset)*f.outside;u>t||u<-cr||Math.abs(u)<1e-4||Math.min(f.t1,p.t1)-Math.max(f.t0,p.t0)<dr||(r.push(Math.round(u*1e3)/1e3),n[i(d)]=i(h))}if(!r.length)return{rooms:o.map(d=>({...d,points:d.points.map(h=>[h[0],h[1]])})),gaps:r};let s=new Map;e.forEach((d,h)=>{let f=i(h);if(f===h&&!e.some((u,_)=>_!==h&&i(_)===h))return;let p=s.get(f)??[];p.push(h),s.set(f,p)});let a=o.map(d=>d.points.map(()=>new Map));for(let[d,h]of s){let f=h.reduce((p,u)=>p+e[u].offset,0)/h.length;for(let p of h){let u=e[p],_=f-u.offset,v=[u.normal[0]*_,u.normal[1]*_],y=o[u.room].points.length;a[u.room][u.index].set(d,v),a[u.room][(u.index+1)%y].set(d,v)}}let l=d=>Math.round(d*1e3)/1e3;return{rooms:o.map((d,h)=>({...d,points:d.points.map((f,p)=>{let u=f[0],_=f[1];for(let[v,y]of a[h][p].values())u+=v,_+=y;return[l(u),l(_)]})})),gaps:r}}function Kn(o){let t=o.filter(n=>n>.04).sort((n,i)=>n-i);if(!t.length)return null;let e=t[Math.floor(t.length/2)];return Math.min(.5,Math.max(.08,Math.round(e*100)/100))}var hr=.25,jn=o=>Math.round(o*1e3)/1e3;function Qt(o,t,e,n=hr){let i=o.rooms.find(c=>c.points.length>=3&&P([t.x,t.z],c.points));if(!i)return null;let r=i.points,s=U(r)>=0?1:-1,a=e/2,l=null;for(let c=0;c<r.length;c++){let d=r[c],h=r[(c+1)%r.length],f=Math.hypot(h[0]-d[0],h[1]-d[1]);if(f<.3)continue;let p=[(h[0]-d[0])/f,(h[1]-d[1])/f],u=[-p[1]*s,p[0]*s],_=(t.x-d[0])*p[0]+(t.z-d[1])*p[1];if(_<0||_>f)continue;let y=o.rooms.some(A=>A.id!==i.id&&A.points.some((R,Y)=>{let F=A.points[(Y+1)%A.points.length],G=Math.abs((R[0]-d[0])*u[0]+(R[1]-d[1])*u[1]),nt=Math.abs((F[0]-d[0])*u[0]+(F[1]-d[1])*u[1]);return G<.02&&nt<.02}))?a:0,m=(t.x-d[0])*u[0]+(t.z-d[1])*u[1]-y,w=Math.atan2(-u[0],u[1])*180/Math.PI,$=A=>Math.abs((t.rotation-A+540)%360-180),S=[{rotation:w,extent:t.d/2},{rotation:w+90,extent:t.w/2},{rotation:w-90,extent:t.w/2}].reduce((A,R)=>$(R.rotation)<$(A.rotation)?R:A);if($(S.rotation)>50)continue;let E=m-S.extent;Math.abs(E)>n||l&&Math.abs(E)>=Math.abs(l.gap)||(l={x:jn(t.x-u[0]*E),z:jn(t.z-u[1]*E),rotation:(Math.round(S.rotation)%360+360)%360,gap:E})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}var qn=["kitchen_row","kitchen_l","bath","bedroom","living","dining","office","kids","hall"],ur={kitchen_row:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"kitchen",size:[.9,.62,.92]},{type:"sink"},{type:"dishwasher"},{type:"stove"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"back",align:"start",items:[{type:"kitchen_wall",size:[1.2,.35,.7]}]}],free:[{type:"table",at:[.5,.72],rotation:0,size:[1.2,.8,.75]},{type:"lamp_pendant",at:[.5,.72],rotation:0},{type:"lamp_ceiling",at:[.5,.3],rotation:0}]},kitchen_l:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"sink"},{type:"dishwasher"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"left",align:"end",items:[{type:"stove"},{type:"kitchen",size:[1.2,.62,.92]}]}],free:[{type:"island",at:[.62,.62],rotation:0,size:[1.6,.9,.92]},{type:"bar_stool",at:[.52,.86],rotation:180},{type:"bar_stool",at:[.72,.86],rotation:180},{type:"lamp_ceiling",at:[.5,.35],rotation:0}]},bath:{rows:[{wall:"back",align:"center",items:[{type:"washbasin"}]},{wall:"back",align:"end",items:[{type:"wc"}]},{wall:"front",align:"start",items:[{type:"bathtub"}]},{wall:"left",align:"start",items:[{type:"washer"}]}],free:[{type:"lamp_downlight",at:[.5,.5],rotation:0}]},bedroom:{rows:[{wall:"back",align:"center",items:[{type:"nightstand"},{type:"bed"},{type:"nightstand"}]},{wall:"left",align:"center",items:[{type:"wardrobe",size:[2,.6,2.1]}]},{wall:"front",align:"end",items:[{type:"dresser"}]}],free:[{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},living:{rows:[{wall:"back",align:"center",items:[{type:"tv_board"}]},{wall:"right",align:"start",items:[{type:"shelf"}]}],free:[{type:"sofa",at:[.5,.72],rotation:180},{type:"coffee_table",at:[.5,.52],rotation:0},{type:"rug",at:[.5,.55],rotation:0,size:[2.2,1.6,.01]},{type:"armchair",at:[.14,.5],rotation:270},{type:"lamp_floor",at:[.86,.8],rotation:0},{type:"plant",at:[.9,.12],rotation:0},{type:"lamp_ceiling",at:[.5,.45],rotation:0}]},dining:{rows:[{wall:"back",align:"center",items:[{type:"sideboard"}]}],free:[{type:"table",at:[.5,.55],rotation:0},{type:"chair",at:[.4,.35],rotation:0},{type:"chair",at:[.6,.35],rotation:0},{type:"chair",at:[.4,.75],rotation:180},{type:"chair",at:[.6,.75],rotation:180},{type:"lamp_pendant",at:[.5,.55],rotation:0}]},office:{rows:[{wall:"back",align:"center",items:[{type:"desk"}]},{wall:"left",align:"center",items:[{type:"shelf"},{type:"shelf"}]}],free:[{type:"office_chair",at:[.5,.38],rotation:180},{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},kids:{rows:[{wall:"left",align:"start",items:[{type:"bed",size:[.9,2,.8]}]},{wall:"back",align:"end",items:[{type:"desk",size:[1.2,.6,.75]}]},{wall:"right",align:"end",items:[{type:"shelf"}]}],free:[{type:"rug",at:[.55,.6],rotation:0,size:[1.6,1.2,.01]},{type:"lamp_ceiling",at:[.5,.5],rotation:0}]},hall:{rows:[{wall:"left",align:"start",items:[{type:"coat_rack"}]}],free:[{type:"lamp_downlight",at:[.5,.3],rotation:0},{type:"lamp_downlight",at:[.5,.7],rotation:0}]}},fr={back:0,right:90,front:180,left:270};function Zn(o,t,e){let n=q(o.points),i=n.x1-n.x0,r=n.z1-n.z0,s=ur[t],a=[],l=(d,h,f,p,u)=>{let[_,v,y]=u??et[d];a.push({id:e(),type:d,x:Gn(h),z:Gn(f),rotation:p,w:_,d:v,h:y,variant:null,entity:null,power:null})},c=.02;for(let d of s.rows){let h=d.items.map(v=>({type:v.type,size:v.size??et[v.type]})),f=d.wall==="back"||d.wall==="front"?i:r,p=[],u=0;for(let v of h){if(u+v.size[0]>f-.1)break;p.push(v),u+=v.size[0]}let _=d.align==="start"?.05:d.align==="end"?f-u-.05:(f-u)/2;for(let v of p){let[y,m]=v.size,w=_+y/2,$=m/2+c;d.wall==="back"?l(v.type,n.x0+w,n.z0+$,0,v.size):d.wall==="front"?l(v.type,n.x1-w,n.z1-$,180,v.size):d.wall==="right"?l(v.type,n.x1-$,n.z0+w,90,v.size):l(v.type,n.x0+$,n.z1-w,fr.left,v.size),_+=y}}for(let d of s.free){let[h,f]=d.size??et[d.type],p=Math.min(n.x1-h/2-.05,Math.max(n.x0+h/2+.05,n.x0+i*d.at[0])),u=Math.min(n.z1-f/2-.05,Math.max(n.z0+f/2+.05,n.z0+r*d.at[1]));l(d.type,p,u,d.rotation,d.size)}return a}var Gn=o=>Math.round(o*1e3)/1e3;var K=(o,t)=>[o[0]-t[0],o[1]-t[1]],bt=(o,t)=>[o[0]+t[0],o[1]+t[1]],rt=(o,t)=>[o[0]*t,o[1]*t],Jt=(o,t)=>o[0]*t[0]+o[1]*t[1],Ct=(o,t)=>o[0]*t[1]-o[1]*t[0],Xt=o=>Math.hypot(o[0],o[1]),ct=o=>{let t=Xt(o)||1;return[o[0]/t,o[1]/t]},Yn=o=>[-o[1],o[0]],Qn=o=>[o[1],-o[0]];function Dt(o,t){let e=t.eps??.005,n=[],i=[],r=p=>{for(let u=0;u<i.length;u++)if(Math.abs(i[u][0]-p[0])<=e&&Math.abs(i[u][1]-p[1])<=e)return u;return i.push([p[0],p[1]]),i.length-1},s=[];for(let p of o){let u=p.points;if(u.length<3||Math.abs(U(u))<1e-6)continue;let _=U(u)>0,v=u.map(r);for(let y=0;y<u.length;y++){let m=v[y],w=v[(y+1)%u.length];m!==w&&s.push(_?{u:m,v:w,room:p.id,edge:y,forward:!0}:{u:w,v:m,room:p.id,edge:y,forward:!1})}}let a=[];for(let p of s){let u=i[p.u],_=i[p.v],v=K(_,u),y=Xt(v),m=rt(v,1/y),w=[];for(let x=0;x<i.length;x++){if(x===p.u||x===p.v)continue;let S=K(i[x],u),E=Jt(S,m);E<=e||E>=y-e||Math.abs(Ct(m,S))<=e&&w.push({t:E,id:x})}w.sort((x,S)=>x.t-S.t);let $=[{t:0,id:p.u},...w,{t:y,id:p.v}];for(let x=0;x+1<$.length;x++){let S=$[x],E=$[x+1],A=p.forward?S.t:y-E.t,R=p.forward?E.t:y-S.t;a.push({u:S.id,v:E.id,room:p.room,edge:p.edge,t0:A,t1:R})}}let l=new Map;for(let p of a){let u=p.u<p.v?`${p.u}-${p.v}`:`${p.v}-${p.u}`,_=l.get(u);_||l.set(u,_=[]),_.push(p)}let c=p=>({room_id:p.room,edge:p.edge,t0:p.t0,t1:p.t1}),d=[];for(let p of l.values()){let u=p[0],_=p.find(v=>v!==u&&v.u===u.v&&v.v===u.u&&v.room!==u.room);for(let v of p)v!==u&&v!==_&&v.room!==u.room&&n.push(`overlap:${u.room}:${v.room}`);_?d.push({a:u.u,b:u.v,left:t.interior/2,right:t.interior/2,exterior:!1,roomLeft:u.room,roomRight:_.room,sources:[c(u),c(_)]}):d.push({a:u.u,b:u.v,left:0,right:t.exterior,exterior:!0,roomLeft:u.room,roomRight:null,sources:[c(u)]})}d=gr(d,i);let h=br(d,i);return{walls:d.map((p,u)=>{let _=i[p.a],v=i[p.b],y=h.get(`${u}:a`),m=h.get(`${u}:b`),w=vr([y.right,m.left,v,m.right,y.left,_],1e-6);return{id:mr(_,v),a:[_[0],_[1]],b:[v[0],v[1]],left:p.left,right:p.right,exterior:p.exterior,roomLeft:p.roomLeft,roomRight:p.roomRight,sources:p.sources,footprint:w}}),warnings:[...new Set(n)]}}function mr(o,t){let e=r=>Math.round(r*100),[n,i]=o[0]<t[0]||o[0]===t[0]&&o[1]<=t[1]?[o,t]:[t,o];return`w_${e(n[0])}_${e(n[1])}_${e(i[0])}_${e(i[1])}`}function Jn(o){return{...o,a:o.b,b:o.a,left:o.right,right:o.left,roomLeft:o.roomRight,roomRight:o.roomLeft}}function gr(o,t){let e=o.slice(),n=!0;for(;n;){n=!1;let i=new Map;e.forEach((r,s)=>{for(let a of[r.a,r.b]){let l=i.get(a);l||i.set(a,l=[]),l.push(s)}});for(let[r,s]of i){if(s.length!==2)continue;let a=e[s[0]],l=e[s[1]];if(a.b!==r&&(a=Jn(a)),l.a!==r&&(l=Jn(l)),a.a===l.b)continue;let c=ct(K(t[a.b],t[a.a])),d=ct(K(t[l.b],t[l.a]));if(Math.abs(Ct(c,d))>1e-6||Jt(c,d)<=0||a.exterior!==l.exterior||a.roomLeft!==l.roomLeft||a.roomRight!==l.roomRight||Math.abs(a.left-l.left)>1e-9||Math.abs(a.right-l.right)>1e-9)continue;let h={...a,b:l.b,sources:_r(a.sources,l.sources)},f=e.filter((p,u)=>u!==s[0]&&u!==s[1]);f.push(h),e.length=0,e.push(...f),n=!0;break}}return e}function _r(o,t){let e=o.map(n=>({...n}));for(let n of t){let i=e.find(r=>r.room_id===n.room_id&&r.edge===n.edge&&(Math.abs(r.t1-n.t0)<1e-6||Math.abs(n.t1-r.t0)<1e-6));i?(i.t0=Math.min(i.t0,n.t0),i.t1=Math.max(i.t1,n.t1)):e.push({...n})}return e}function br(o,t){let e=new Map;o.forEach((i,r)=>{let s=ct(K(t[i.b],t[i.a])),a=[[i.a,{key:`${r}:a`,d:s,left:i.left,right:i.right,angle:Math.atan2(s[1],s[0])}],[i.b,{key:`${r}:b`,d:rt(s,-1),left:i.right,right:i.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a){let d=e.get(l);d||e.set(l,d=[]),d.push(c)}});let n=new Map;for(let[i,r]of e){let s=t[i];r.sort((c,d)=>c.angle-d.angle);let a=c=>({left:bt(s,rt(Yn(c.d),c.left)),right:bt(s,rt(Qn(c.d),c.right))});for(let c of r)n.set(c.key,a(c));if(r.length<2)continue;let l=4*Math.max(...r.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<r.length;c++){let d=r[c],h=r[(c+1)%r.length],f=bt(s,rt(Yn(d.d),d.left)),p=bt(s,rt(Qn(h.d),h.right)),u=Ct(d.d,h.d);if(Math.abs(u)<1e-4)continue;let _=Ct(K(p,f),h.d)/u,v=bt(f,rt(d.d,_));Xt(K(v,s))>l||(n.get(d.key).left=v,n.get(h.key).right=v)}}return n}function vr(o,t){let e=o.filter((i,r)=>Xt(K(i,o[(r+1)%o.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let i=0;i<e.length;i++){let r=e[(i+e.length-1)%e.length],s=e[i],a=e[(i+1)%e.length],l=K(s,r),c=K(a,s);if(Math.abs(Ct(ct(l),ct(c)))<1e-7&&Jt(l,c)>0){e=e.filter((d,h)=>h!==i),n=!0;break}}}return e}function te(o,t,e){let n=o.points[t],i=o.points[(t+1)%o.points.length],r=ct(K(i,n));return bt(n,rt(r,e))}function Xn(o,t,e,n){for(let i of o){if(!i.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let s=te(t,e,n);return{wall:i,s:Jt(K(s,i.a),ct(K(i.b,i.a)))}}return null}var ti={view:"3D",editor:"Editor",all_floors:"Alle Etagen",no_building:"Noch kein Grundriss vorhanden.",no_building_admin:"Noch kein Grundriss vorhanden. Im Editor zeichnest du deine erste Etage.",open_editor:"Editor \xF6ffnen",loading:"L\xE4dt \u2026",load_error:"Laden fehlgeschlagen",saving:"Speichert \u2026",saved:"Gespeichert",save_error:"Speichern fehlgeschlagen",save_failed_detail:"Speichern fehlgeschlagen: {error}. Deine \xC4nderungen bleiben in diesem Browser erhalten.",needs_restart:"Eine neue Version von Floorplan 3D ist installiert, aber Home Assistant l\xE4uft noch mit {version}. Bitte Home Assistant neu starten \u2013 bis dahin kann das Speichern fehlschlagen.",needs_restart_old:"Eine neue Version von Floorplan 3D ist installiert, aber Home Assistant l\xE4uft noch mit einer \xE4lteren. Bitte Home Assistant neu starten \u2013 bis dahin schl\xE4gt das Speichern fehl.",draft_found:"Nicht gespeicherte \xC4nderungen vom {time} gefunden.",draft_restore:"\xDCbernehmen und speichern",draft_discard:"Verwerfen",walls_auto:"W\xE4nde hoch",walls_cut:"Schnitt",reset_view:"\xDCbersicht",back:"Zur\xFCck",floor:"Etage",floors:"Etagen",add_floor:"Etage hinzuf\xFCgen",floor_from_ha:"Etagen aus Home Assistant:",floor_empty:"Leere Etage",level:"Ebene {n}",ha_floor:"Etage in Home Assistant",no_ha_floor:"\u2013 keine \u2013",area_rooms:"{n} R\xE4ume aus HA-Bereichen anlegen",area_rooms_hint:"Legt f\xFCr jeden Bereich dieser Etage einen Raum an (4 \xD7 3 m) \u2013 danach an die richtige Stelle ziehen und die Ecken anpassen",floor_name:"Name",elevation:"H\xF6he \xFCber Boden (m)",height:"Raumh\xF6he (m)",cut_height:"Schnitth\xF6he (m)",delete_floor:"Etage l\xF6schen",delete_floor_confirm:"Etage \u201E{name}\u201C mit allen R\xE4umen l\xF6schen?",move_up:"Nach oben",move_down:"Nach unten",default_floor:"Erdgeschoss",new_floor:"Etage {n}",tool_select:"Ausw\xE4hlen",tool_rect:"Rechteck",tool_polygon:"Freie Form",undo:"R\xFCckg\xE4ngig",redo:"Wiederholen",fit:"Alles zeigen",room:"Raum",rooms:"R\xE4ume",room_name:"Name",area:"Bereich",no_area:"Kein Bereich",material:"Boden",x:"X (m)",z:"Y (m)",width:"Breite (m)",depth:"Tiefe (m)",points:"Eckpunkte",delete_point:"Punkt l\xF6schen",duplicate:"Duplizieren",delete:"L\xF6schen",new_room:"Raum {n}",settings:"Einstellungen",pendant_shape:"Form",pendant_shade:"Schirm",pendant_globe:"Kugel",pendant_cone:"Kegel",pendant_drum:"Trommel",pkg_open:"Einrichten \u2026",pkg_hint:"Die M\xF6bel kommen an die W\xE4nde des Raums; Leuchten verbinden sich mit den Lichtern des Bereichs. Danach einzeln anpassen \u2013 Strg+Z nimmt alles zur\xFCck.",pkg_done:"{n} M\xF6bel gesetzt \u2013 Strg+Z nimmt es zur\xFCck.",pkg_kitchen_row:"K\xFCchenzeile",pkg_kitchen_row_desc:"Zeile an der R\xFCckwand mit K\xFChlschrank, Backofen, Sp\xFCle, Sp\xFClmaschine und Herd, Oberschrank, Esstisch mit Pendelleuchte",pkg_kitchen_l:"K\xFCche in L-Form",pkg_kitchen_l_desc:"Zeile hinten und links, Kochinsel mit Barhockern",pkg_bath:"Bad",pkg_bath_desc:"Waschtisch, WC, Badewanne, Waschmaschine, Einbauspot",pkg_bedroom:"Schlafzimmer",pkg_bedroom_desc:"Doppelbett mit zwei Nachttischen, Schrank, Kommode, Deckenleuchte",pkg_living:"Wohnzimmer",pkg_living_desc:"TV-Board, Sofa, Couchtisch, Teppich, Sessel, Regal, Stehlampe, Pflanze",pkg_dining:"Esszimmer",pkg_dining_desc:"Esstisch mit vier St\xFChlen, Sideboard, Pendelleuchte",pkg_office:"B\xFCro",pkg_office_desc:"Schreibtisch mit B\xFCrostuhl, zwei Regale, Deckenleuchte",pkg_kids:"Kinderzimmer",pkg_kids_desc:"Einzelbett, Schreibtisch, Regal, Teppich",pkg_hall:"Flur",pkg_hall_desc:"Garderobe, zwei Einbauspots",spots_place:"Spots setzen",spots_type:"Leuchte",spots_cols:"Spalten (links\u2013rechts)",spots_rows:"Reihen (vorne\u2013hinten)",spots_add:"{n} Leuchten setzen",spots_placed:"{n} Leuchten gesetzt.",spots_hint:"Alle Leuchten folgen dem gew\xE4hlten Licht (z. B. Spots an einem Dimmer). Einzeln verschieben und ein anderes Licht w\xE4hlen geht danach wie bei jedem M\xF6bel.",cancel:"Abbrechen",backup:"Sicherung",backup_history:"Wiederherstellungspunkte",backup_none:"Noch keine. Beim Bearbeiten entsteht h\xF6chstens alle 10 Minuten ein Punkt.",backup_summary:"{rooms} R\xE4ume, {furniture} M\xF6bel",backup_restore:"Wiederherstellen",backup_restore_confirm:"Den Stand vom {time} wiederherstellen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_restored:"Wiederhergestellt.",backup_file:"Datei",backup_export:"Exportieren",backup_export_share:"Als Vorlage teilen",backup_export_share_hint:"Ohne Bereiche, Ger\xE4te, Sensoren und Bilder \u2013 zum Weitergeben an andere.",backup_import:"Importieren \u2026",backup_import_confirm:"Den ganzen Grundriss durch die Datei ersetzen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_import_error:"Die Datei ist kein Floorplan-3D-Plan ({error}).",backup_imported:"Importiert.",backup_hint:"Hintergrundbilder sind nicht in der Datei enthalten.",wall_exterior:"Au\xDFenwand (m)",wall_interior:"Innenwand (m)",grid:"Raster (m)",background:"Vorlage (Grundriss-Bild)",background_upload:"Bild w\xE4hlen \u2026",background_width:"Breite im Plan (m)",background_opacity:"Deckkraft",background_remove:"Vorlage entfernen",hint_select:"Raum antippen zum Ausw\xE4hlen \xB7 Ecken ziehen \xB7 \u201E+\u201C auf einer Kante f\xFCgt einen Punkt ein \xB7 Entf l\xF6scht \xB7 Strg+Z",hint_rect:"Ziehen, um ein Rechteck zu zeichnen",hint_polygon:"Punkte setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",hint_empty:"Lege zuerst eine Etage an.",area_m2:"{a} m\xB2",overlap_warning:"R\xE4ume \xFCberlappen sich \u2013 die W\xE4nde dort sind unvollst\xE4ndig.",read_only:"Nur Administratoren k\xF6nnen den Grundriss bearbeiten.",mat_wood:"Holz",mat_oak:"Eiche",mat_tiles:"Fliesen",mat_carpet:"Teppich",mat_stone:"Stein",mat_concrete:"Beton",card_name:"Floorplan 3D",card_description:"Deine Wohnung in 3D (Neon).",stats:"{calls} Draw-Calls \xB7 {tris} Dreiecke",stats_fps:"{fps} B/s (langsamstes Bild {ms} ms)",stats_idle:"Ruhe (0 B/s)",stats_low:"Stufe Tablet, Pixeldichte {r}",stats_full:"volle Stufe, Pixeldichte {r}",floors_apart:"Auseinander",floors_stacked:"Gestapelt",floor_rooms_one:"1 Raum",floor_rooms:"{n} R\xE4ume",quality:"Qualit\xE4t",quality_auto:"Auto",quality_low:"Tablet",quality_high:"Hoch",state_on:"An",state_off:"Aus",state_open:"Offen",state_closed:"Zu",state_opening:"\xD6ffnet",state_closing:"Schlie\xDFt",state_playing:"Spielt",state_paused:"Pause",state_idle:"Bereit",state_locked:"Verriegelt",state_unlocked:"Entriegelt",state_detected:"Erkannt",state_clear:"Frei",state_unavailable:"Nicht verf\xFCgbar",state_heat:"Heizen",state_cool:"K\xFChlen",state_auto:"Automatik",state_heat_cool:"Heizen/K\xFChlen",state_dry:"Entfeuchten",state_fan_only:"L\xFCften",devices:"Ger\xE4te",devices_none_area:"Verkn\xFCpfe den Raum mit einem Bereich, dann erscheinen dessen Ger\xE4te hier.",devices_none:"Im Bereich gibt es keine passenden Ger\xE4te.",devices_place_all:"Alle automatisch platzieren",devices_place:"Platzieren",devices_remove:"Entfernen",devices_hint:"Platzierte Ger\xE4te erscheinen in 3D. Im Plan lassen sie sich verschieben.",panel_lights:"Licht",panel_covers:"Rolll\xE4den",panel_climate:"Heizung",panel_media:"Medien",panel_switches:"Schalter",panel_sensors:"Sensoren",panel_scenes:"Szenen & Skripte",panel_cameras:"Kameras",camera_live:"Livebild \xF6ffnen",state_recording:"Nimmt auf",state_streaming:"Streamt",panel_all_off:"Alle aus",panel_no_area:"Dieser Raum ist mit keinem Bereich verkn\xFCpft. Im Editor kannst du ihn verkn\xFCpfen.",panel_empty:"Im Bereich gibt es keine steuerbaren Ger\xE4te.",close:"Schlie\xDFen",brightness:"Helligkeit",color_temp:"Farbtemperatur",color:"Farbe",position:"Position",cover_open:"Auf",cover_stop:"Stopp",cover_close:"Zu",target_temp:"Soll",current_temp:"Ist",temp_down:"K\xE4lter",temp_up:"W\xE4rmer",volume:"Lautst\xE4rke",play_pause:"Wiedergabe/Pause",previous:"Zur\xFCck",next:"Weiter",run:"Ausf\xFChren",details:"Details",hold_hint:"Antippen schaltet \xB7 lange dr\xFCcken \xF6ffnet Details",tool_opening:"T\xFCr & Fenster",tool_furniture:"M\xF6bel",hint_furniture:"Raum antippen, dann rechts ein M\xF6belst\xFCck w\xE4hlen \xB7 M\xF6bel ziehen, an den Ecken die Gr\xF6\xDFe \xE4ndern",furniture_into:"Neue M\xF6bel kommen in die Mitte von \u201E{room}\u201C.",furniture_pick_room:"Tipp: Erst einen Raum antippen \u2013 dann landen neue M\xF6bel in seiner Mitte.",flows:"Stromfluss",flows_hint:"Leuchtende Leitungen vom Z\xE4hler zu den Verbrauchern ein- oder ausblenden",flow_on:"an",flow_off:"aus",hint_opening:"Auf eine Wand tippen, um eine T\xFCr oder ein Fenster einzusetzen \u2013 die Art w\xE4hlst du danach rechts",preset_door:"T\xFCr",preset_door_double:"Doppelt\xFCr",preset_window:"Fenster",preset_window_double:"Fenster 2-fl\xFCgelig",preset_terrace:"Terrassent\xFCr",preset_terrace_double:"Terrassent\xFCr 2-fl\xFCgelig",preset_garage:"Garagentor",flip_hinge:"Anschlag wechseln",flip_main_leaf:"Hauptfl\xFCgel wechseln",flip_hinge_hint:"Scharniere auf die andere Seite",flip_swing:"\xD6ffnungsrichtung umdrehen",flip_swing_hint:"Die T\xFCr schwenkt in den Raum oder zur anderen Seite",main_leaf:"Hauptfl\xFCgel (vom Raum aus)",contact_main:"Kontakt Hauptfl\xFCgel",contact_second:"Kontakt zweiter Fl\xFCgel",tool_outdoor:"Au\xDFen",tool_measure:"Nach Ma\xDF",hint_measure:"Startpunkt antippen, dann rechts die Wandl\xE4ngen mit Richtung eingeben",measure:"Raum nach Ma\xDF",measure_start:"Tippe im Plan auf den Startpunkt, z. B. eine Raumecke.",measure_from:"Start bei {x} / {z} m \u2013 antippen verschiebt den Start.",measure_length:"L\xE4nge der n\xE4chsten Wand (m)",measure_close:"Raum schlie\xDFen",measure_undo:"Letzte Wand weg",measure_gap:"L\xFCcke zum Start: {gap} m (wird beim Schlie\xDFen verbunden)",measure_hint:"Tipp: L\xE4nge eintippen und Pfeiltaste dr\xFCcken. Mit gemessenen Innenma\xDFen danach \u201EL\xFCcken schlie\xDFen\u201C.",rect_by_size:"Rechteck nach Ma\xDF",rect_add:"Rechteck anlegen",dir_up:"Nach oben",dir_down:"Nach unten",dir_left:"Nach links",dir_right:"Nach rechts",hint_outdoor:"Ziehen, um eine Au\xDFenfl\xE4che (Rasen, Terrasse, Pool \u2026) aufzuziehen",outdoor:"Au\xDFenfl\xE4che",outdoor_type:"Art",outdoor_hint:"Au\xDFenleuchten (Wegleuchte, Garten-Spot, Wandleuchte au\xDFen) beleuchten alle Au\xDFenfl\xE4chen und die Fassade.",out_lawn:"Rasen",out_terrace:"Terrasse",out_path:"Weg",out_driveway:"Einfahrt",out_pool:"Pool",out_bed:"Beet",out_hedge:"Hecke",out_fence:"Zaun",north:"Nordrichtung (\xB0 im Uhrzeigersinn von oben)",north_hint:"Die Nordrichtung braucht der Sonnenstand (Licht durch die Fenster).",roof:"Dach",roof_none:"Kein Dach",roof_flat:"Flachdach",roof_gable:"Satteldach",roof_pitch:"Dachneigung (\xB0)",roof_overhang:"Dach\xFCberstand (m)",device:"Ger\xE4t",lamp_mount:"Lampe",lamp_ceiling:"Deckenleuchte",lamp_floor:"Stehlampe",lamp_table:"Tischlampe",lamp_wall:"Wandleuchte",marker_height:"H\xF6he des Symbols (m)",height_auto:"H\xF6he automatisch",device_centre:"In Raummitte",lights_spread:"Deckenlampen gleichm\xE4\xDFig verteilen",devices_search:"Ger\xE4te suchen \u2026",devices_more:"+{n} weitere",devices_less:"weniger",panel_more:"Weitere anzeigen ({n})",panel_less:"Weniger anzeigen",gaps_close:"L\xFCcken schlie\xDFen",gaps_hint:"R\xE4ume mit bis zu 60 cm Abstand an einer gemeinsamen Wand zusammenf\xFChren; der Abstand wird die Innenwandst\xE4rke.",gaps_none:"Keine L\xFCcken zwischen R\xE4umen gefunden.",gaps_closed:"{n} Stellen geschlossen.",gaps_closed_wall:"{n} Stellen geschlossen, Innenwand jetzt {t} m.",fps:"FPS",fps_title:"Leistungsanzeige (Bilder pro Sekunde)",hint_garage:"Auf eine Wand tippen, um ein Garagentor einzusetzen",opening_garage:"Garagentor",garage_hint:"Das Tor folgt einem Garagen-Cover (Position oder offen/zu) oder einem Garagentor-Kontakt aus dem Bereich des Raums.",door_hint:"Mit T\xFCrkontakt schwenkt das T\xFCrblatt auf, ohne Sensor steht es halb offen.",hint_door:"Auf eine Wand tippen, um eine T\xFCr einzusetzen",hint_window:"Auf eine Wand tippen, um ein Fenster einzusetzen",opening_door:"T\xFCr",opening_window:"Fenster",opening_type:"Art",opening_position:"Mitte ab Ecke (m)",sill:"Br\xFCstung (m)",opening_height:"H\xF6he (m)",hinge:"Anschlag (vom Raum aus)",hinge_left:"Links",hinge_right:"Rechts",cover_entity:"Rollladen",contact_entity:"Kontakt",tilt_entity:"Kipp-Sensor",entity_auto:"Automatisch ({name})",entity_auto_none:"Automatisch (keiner gefunden)",entity_none:"Keiner",opening_hint:"Terrassent\xFCr: Fenster mit Br\xFCstung 0. Automatisch nimmt Rolll\xE4den und Kontakte aus dem Bereich des Raums.",furniture:"M\xF6bel",furniture_add:"M\xF6bel hinzuf\xFCgen",furniture_type:"M\xF6belst\xFCck",rotation:"Drehung (\xB0)",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"H\xF6he (m)",furn_sofa:"Sofa",furn_armchair:"Sessel",furn_table:"Tisch",furn_chair:"Stuhl",furn_bed:"Bett",furn_nightstand:"Nachttisch",furn_wardrobe:"Schrank",furn_shelf:"Regal",furn_kitchen:"K\xFCchenzeile",furn_fridge:"K\xFChlschrank",furn_stove:"Herd",furn_sink:"Sp\xFCle",furn_bathtub:"Badewanne",furn_shower:"Dusche",furn_wc:"WC",furn_washbasin:"Waschtisch",furn_desk:"Schreibtisch",furn_tv_board:"TV-Board",furn_plant:"Pflanze",furn_rug:"Teppich",furn_stairs:"Treppe",furn_lamp_ceiling:"Deckenleuchte",furn_lamp_downlight:"Einbauspot",furn_lamp_spot:"Aufbau-Spot",furn_lamp_panel:"LED-Panel",furn_lamp_uplight:"Deckenfluter",furn_lamp_bollard:"Wegleuchte",furn_lamp_garden:"Garten-Spot",furn_radiator:"Heizk\xF6rper",furn_lamp_pendant:"Pendelleuchte",furn_lamp_floor:"Stehlampe",furn_lamp_table:"Tischlampe",furn_lamp_wall:"Wandleuchte",furn_led_strip:"LED-Streifen",furn_group_lights:"Leuchten",furn_entity_light:"Licht",furn_entity_climate:"Heizung (Thermostat)",lamp_hint:"Antippen in 3D schaltet die Leuchte, lange dr\xFCcken \xF6ffnet die Details. Tischlampen stehen automatisch auf dem M\xF6bel darunter.",lamp_hint_pendant:"H\xF6he = Abh\xE4ngung unter der Decke. Antippen in 3D schaltet, lange dr\xFCcken \xF6ffnet die Details.",theme:"Look",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Tag",furnish:"Einrichten",size_w:"Breite (m)",size_d:"Tiefe (m)",size_h:"H\xF6he (m)",furnish_hint:"M\xF6bel und Leuchten mit dem Finger ziehen \xB7 an W\xE4nden rasten sie ein \xB7 antippen zum Drehen",done:"Fertig",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Feuchte",heat_short_co2:"CO\u2082",heat_temperature:"Temperatur",heat_humidity:"Luftfeuchtigkeit",heat_co2:"CO\u2082",heat_none_found:"Keine passenden Sensoren in den Bereichen der R\xE4ume.",markers:"Symbole",markers_none:"Keine",markers_important:"Wichtige",markers_all:"Alle",furn_stool:"Hocker",furn_coffee_table:"Couchtisch",furn_tv_wall:"Fernseher (Wand)",furn_sideboard:"Sideboard",furn_table_round:"Runder Tisch",furn_bench:"Sitzbank",furn_corner_bench:"Eckbank",furn_bar_stool:"Barhocker",furn_kitchen_wall:"Oberschrank",furn_kitchen_tall:"Hochschrank mit Backofen",furn_island:"Kochinsel",furn_dishwasher:"Sp\xFClmaschine",furn_bunk_bed:"Etagenbett",furn_dresser:"Kommode",furn_washer:"Waschmaschine",furn_dryer:"Trockner",furn_office_chair:"B\xFCrostuhl",furn_tall_cabinet:"Hochschrank",furn_coat_rack:"Garderobe",furn_group_living:"Wohnen",furn_group_dining:"Essen",furn_group_kitchen:"K\xFCche",furn_group_sleeping:"Schlafen",furn_group_bath:"Bad & Hauswirtschaft",furn_group_work:"Arbeiten & Sonstiges",furn_entity:"Ger\xE4t (Schalter, Steckdose \u2026)",furn_entity_tv:"Fernseher (Media-Player)",furn_power:"Leistungssensor (W)",furn_links_hint:"Mit Leistungssensor zeigt das M\xF6bel seine Watt und bekommt eine Energie-Leitung.",furn_links_hint_tv:"Der Bildschirm leuchtet, solange der Fernseher an ist, in der Farbe der App (Netflix, YouTube \u2026); das Schild zeigt App oder Titel.",stairs_hint:"Die Treppe steigt nach hinten an (weg von der markierten Vorderkante) und \xF6ffnet die Decke der Etage dar\xFCber.",floor_lights:"{n} Licht an",floor_open:"{n} offen",floor_persons:"{n} Pers.",energy_consumption:"Verbrauch",energy_grid_import:"Netzbezug",energy_grid_export:"Einspeisung",energy_solar:"Solar",energy_battery:"Akku",energy_tariff:"Tarif",energy:"Energie",energy_meter:"Z\xE4hlerplatz",energy_meter_set:"Z\xE4hlerplatz setzen",energy_meter_remove:"Z\xE4hlerplatz entfernen",energy_meter_hint:"Tippe im Plan auf die Stelle des Z\xE4hlers bzw. Hausanschlusses.",energy_grid:"Netz (W, + = Bezug)",energy_solar_sensor:"Solar-Erzeugung (W)",energy_battery_sensor:"Akku-Leistung (W, + = Entladen)",energy_battery_soc:"Akku-Ladestand (%)",energy_tariff_sensor:"Tarif (z. B. \u20AC/kWh)",energy_invert:"Vorzeichen umkehren",energy_hint:"Verbraucher sind platzierte Ger\xE4te mit Leistungssensor (W) \u2013 der Sensor selbst oder einer vom selben Ger\xE4t.",tool_meter:"Z\xE4hler",hint_meter:"Auf die Stelle des Z\xE4hlers tippen",presence:"Anwesenheit",presence_hint:"Raumsensor je Person (z. B. ESPresense, Bermuda): sein Zustand nennt den Raum oder Bereich.",presence_sensor:"Raumsensor",no_persons:"In Home Assistant gibt es keine Personen."},yr={view:"3D",editor:"Editor",all_floors:"All floors",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",save_failed_detail:"Saving failed: {error}. Your changes are kept in this browser.",needs_restart:"A new version of Floorplan 3D is installed, but Home Assistant still runs {version}. Please restart Home Assistant \u2013 until then saving may fail.",needs_restart_old:"A new version of Floorplan 3D is installed, but Home Assistant still runs an older one. Please restart Home Assistant \u2013 until then saving fails.",draft_found:"Unsaved changes from {time} found.",draft_restore:"Restore and save",draft_discard:"Discard",walls_auto:"Tall walls",walls_cut:"Cut",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",add_floor:"Add floor",floor_from_ha:"Floors from Home Assistant:",floor_empty:"Empty floor",level:"Level {n}",ha_floor:"Floor in Home Assistant",no_ha_floor:"\u2013 none \u2013",area_rooms:"Add {n} rooms from HA areas",area_rooms_hint:"Adds a room (4 \xD7 3 m) for each area of this floor \u2013 then drag it into place and adjust the corners",floor_name:"Name",elevation:"Elevation (m)",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",default_floor:"Ground floor",new_floor:"Floor {n}",tool_select:"Select",tool_rect:"Rectangle",tool_polygon:"Free shape",undo:"Undo",redo:"Redo",fit:"Show all",room:"Room",rooms:"Rooms",room_name:"Name",area:"Area",no_area:"No area",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",delete_point:"Delete corner",duplicate:"Duplicate",delete:"Delete",new_room:"Room {n}",settings:"Settings",pendant_shape:"Shape",pendant_shade:"Shade",pendant_globe:"Globe",pendant_cone:"Cone",pendant_drum:"Drum",pkg_open:"Furnish \u2026",pkg_hint:"Furniture goes against the room's walls; lamps link to the area's lights. Adjust single items afterwards \u2013 Ctrl+Z takes it all back.",pkg_done:"{n} items placed \u2013 Ctrl+Z takes it back.",pkg_kitchen_row:"Kitchen row",pkg_kitchen_row_desc:"Row on the back wall with fridge, oven, sink, dishwasher and stove, wall cabinet, dining table with pendant",pkg_kitchen_l:"L-shaped kitchen",pkg_kitchen_l_desc:"Rows at the back and left, kitchen island with bar stools",pkg_bath:"Bathroom",pkg_bath_desc:"Washbasin, WC, bathtub, washing machine, downlight",pkg_bedroom:"Bedroom",pkg_bedroom_desc:"Double bed with two nightstands, wardrobe, chest of drawers, ceiling light",pkg_living:"Living room",pkg_living_desc:"TV board, sofa, coffee table, rug, armchair, shelf, floor lamp, plant",pkg_dining:"Dining room",pkg_dining_desc:"Table with four chairs, sideboard, pendant",pkg_office:"Office",pkg_office_desc:"Desk with office chair, two shelves, ceiling light",pkg_kids:"Kids' room",pkg_kids_desc:"Single bed, desk, shelf, rug",pkg_hall:"Hall",pkg_hall_desc:"Coat rack, two downlights",spots_place:"Place spots",spots_type:"Lamp",spots_cols:"Columns (left\u2013right)",spots_rows:"Rows (front\u2013back)",spots_add:"Place {n} lamps",spots_placed:"{n} lamps placed.",spots_hint:"All lamps follow the chosen light (e.g. spots on one dimmer). Afterwards each can be moved and linked to another light like any furniture.",cancel:"Cancel",backup:"Backup",backup_history:"Restore points",backup_none:"None yet. While editing, a restore point is kept at most every 10 minutes.",backup_summary:"{rooms} rooms, {furniture} items",backup_restore:"Restore",backup_restore_confirm:"Restore the state of {time}? The current state is kept as a restore point.",backup_restored:"Restored.",backup_file:"File",backup_export:"Export",backup_export_share:"Share as template",backup_export_share_hint:"Without areas, devices, sensors and images \u2013 for passing on to others.",backup_import:"Import \u2026",backup_import_confirm:"Replace the whole plan with the file? The current state is kept as a restore point.",backup_import_error:"The file is no Floorplan 3D plan ({error}).",backup_imported:"Imported.",backup_hint:"Background images are not part of the file.",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 Del deletes \xB7 Ctrl+Z",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_empty:"Add a floor first.",area_m2:"{a} m\xB2",overlap_warning:"Rooms overlap \u2013 walls there are incomplete.",read_only:"Only administrators can edit the floor plan.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"Floorplan 3D",card_description:"Your home in 3D (neon).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} fps (slowest frame {ms} ms)",stats_idle:"At rest (0 fps)",stats_low:"tablet level, pixel ratio {r}",stats_full:"full level, pixel ratio {r}",floors_apart:"Apart",floors_stacked:"Stacked",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",devices_none_area:"Link the room to an area and its devices appear here.",devices_none:"The area has no suitable devices.",devices_place_all:"Place all automatically",devices_place:"Place",devices_remove:"Remove",devices_hint:"Placed devices appear in 3D. Drag them in the plan to move them.",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",panel_cameras:"Cameras",camera_live:"Open live view",state_recording:"Recording",state_streaming:"Streaming",panel_all_off:"All off",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"The area has no controllable devices.",close:"Close",brightness:"Brightness",color_temp:"Colour temperature",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details",tool_opening:"Doors & windows",tool_furniture:"Furniture",hint_furniture:"Tap a room, then pick an item on the right \xB7 drag items, resize them by their corners",furniture_into:"New items go into the middle of \u201C{room}\u201D.",furniture_pick_room:"Tip: tap a room first \u2013 new items then land in its middle.",flows:"Power flow",flows_hint:"Show or hide glowing lines from the meter to the consumers",flow_on:"on",flow_off:"off",hint_opening:"Tap a wall to add a door or window \u2013 choose its kind on the right afterwards",preset_door:"Door",preset_door_double:"Double door",preset_window:"Window",preset_window_double:"Double window",preset_terrace:"Terrace door",preset_terrace_double:"French doors",preset_garage:"Garage door",flip_hinge:"Swap hinge side",flip_main_leaf:"Swap main leaf",flip_hinge_hint:"Hinges to the other side",flip_swing:"Reverse opening direction",flip_swing_hint:"The door swings into the room or to the other side",main_leaf:"Main leaf (seen from the room)",contact_main:"Contact main leaf",contact_second:"Contact second leaf",tool_outdoor:"Outdoor",tool_measure:"By measure",hint_measure:"Tap the starting point, then type the wall lengths with their direction on the right",measure:"Room by measure",measure_start:"Tap the starting point in the plan, e.g. a room corner.",measure_from:"Start at {x} / {z} m \u2013 tapping moves the start.",measure_length:"Length of the next wall (m)",measure_close:"Close room",measure_undo:"Remove last wall",measure_gap:"Gap to the start: {gap} m (joined when closing)",measure_hint:"Tip: type a length and press an arrow key. With measured inside dimensions, use \u201CClose gaps\u201D afterwards.",rect_by_size:"Rectangle by size",rect_add:"Add rectangle",dir_up:"Up",dir_down:"Down",dir_left:"Left",dir_right:"Right",hint_outdoor:"Drag to draw an outdoor area (lawn, terrace, pool \u2026)",outdoor:"Outdoor area",outdoor_type:"Type",outdoor_hint:"Outdoor lights (path light, garden spot, outdoor wall light) light all outdoor areas and the facade.",out_lawn:"Lawn",out_terrace:"Terrace",out_path:"Path",out_driveway:"Driveway",out_pool:"Pool",out_bed:"Flower bed",out_hedge:"Hedge",out_fence:"Fence",north:"North (\xB0 clockwise from up)",north_hint:"North is needed for the sun (light through the windows).",roof:"Roof",roof_none:"No roof",roof_flat:"Flat roof",roof_gable:"Gable roof",roof_pitch:"Roof pitch (\xB0)",roof_overhang:"Roof overhang (m)",device:"Device",lamp_mount:"Lamp",lamp_ceiling:"Ceiling light",lamp_floor:"Floor lamp",lamp_table:"Table lamp",lamp_wall:"Wall light",marker_height:"Marker height (m)",height_auto:"Automatic height",device_centre:"To room centre",lights_spread:"Spread ceiling lights evenly",devices_search:"Search devices \u2026",devices_more:"+{n} more",devices_less:"less",panel_more:"Show more ({n})",panel_less:"Show less",gaps_close:"Close gaps",gaps_hint:"Join rooms up to 60 cm apart at one shared wall; the gap becomes the interior wall thickness.",gaps_none:"No gaps between rooms found.",gaps_closed:"{n} places closed.",gaps_closed_wall:"{n} places closed, interior wall now {t} m.",fps:"FPS",fps_title:"Performance display (frames per second)",hint_garage:"Tap a wall to add a garage door",opening_garage:"Garage door",garage_hint:"The door follows a garage cover (position or open/closed) or a garage door contact of the room's area.",door_hint:"With a door contact the leaf swings open; without a sensor it stands half open.",hint_door:"Tap a wall to add a door",hint_window:"Tap a wall to add a window",opening_door:"Door",opening_window:"Window",opening_type:"Type",opening_position:"Centre from corner (m)",sill:"Sill height (m)",opening_height:"Height (m)",hinge:"Hinge (seen from the room)",hinge_left:"Left",hinge_right:"Right",cover_entity:"Blind",contact_entity:"Contact",tilt_entity:"Tilt sensor",entity_auto:"Automatic ({name})",entity_auto_none:"Automatic (none found)",entity_none:"None",opening_hint:"Terrace door: a window with sill 0. Automatic uses the blinds and contacts of the room's area.",furniture:"Furniture",furniture_add:"Add furniture",furniture_type:"Item",rotation:"Rotation (\xB0)",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Height (m)",furn_sofa:"Sofa",furn_armchair:"Armchair",furn_table:"Table",furn_chair:"Chair",furn_bed:"Bed",furn_nightstand:"Nightstand",furn_wardrobe:"Wardrobe",furn_shelf:"Shelf",furn_kitchen:"Kitchen unit",furn_fridge:"Fridge",furn_stove:"Stove",furn_sink:"Sink",furn_bathtub:"Bathtub",furn_shower:"Shower",furn_wc:"WC",furn_washbasin:"Washbasin",furn_desk:"Desk",furn_tv_board:"TV board",furn_plant:"Plant",furn_rug:"Rug",furn_stairs:"Stairs",furn_lamp_ceiling:"Ceiling light",furn_lamp_downlight:"Downlight",furn_lamp_spot:"Surface spot",furn_lamp_panel:"LED panel",furn_lamp_uplight:"Floor uplight",furn_lamp_bollard:"Path light",furn_lamp_garden:"Garden spot",furn_radiator:"Radiator",furn_lamp_pendant:"Pendant light",furn_lamp_floor:"Floor lamp",furn_lamp_table:"Table lamp",furn_lamp_wall:"Wall light",furn_led_strip:"LED strip",furn_group_lights:"Lights",furn_entity_light:"Light",furn_entity_climate:"Heating (thermostat)",lamp_hint:"Tap the lamp in 3D to switch it, long press for details. Table lamps stand on the furniture below them.",lamp_hint_pendant:"Height = drop below the ceiling. Tap in 3D to switch, long press for details.",theme:"Look",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Day",furnish:"Furnish",size_w:"Width (m)",size_d:"Depth (m)",size_h:"Height (m)",furnish_hint:"Drag furniture and lamps \xB7 they snap to walls \xB7 tap one to turn it",done:"Done",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humidity",heat_short_co2:"CO\u2082",heat_temperature:"Temperature",heat_humidity:"Humidity",heat_co2:"CO\u2082",heat_none_found:"No matching sensors in the rooms' areas.",markers:"Markers",markers_none:"None",markers_important:"Important",markers_all:"All",furn_stool:"Stool",furn_coffee_table:"Coffee table",furn_tv_wall:"TV (wall)",furn_sideboard:"Sideboard",furn_table_round:"Round table",furn_bench:"Bench",furn_corner_bench:"Corner bench",furn_bar_stool:"Bar stool",furn_kitchen_wall:"Wall cabinet",furn_kitchen_tall:"Tall unit with oven",furn_island:"Kitchen island",furn_dishwasher:"Dishwasher",furn_bunk_bed:"Bunk bed",furn_dresser:"Chest of drawers",furn_washer:"Washing machine",furn_dryer:"Dryer",furn_office_chair:"Office chair",furn_tall_cabinet:"Tall cabinet",furn_coat_rack:"Coat rack",furn_group_living:"Living",furn_group_dining:"Dining",furn_group_kitchen:"Kitchen",furn_group_sleeping:"Sleeping",furn_group_bath:"Bath & laundry",furn_group_work:"Work & other",furn_entity:"Device (switch, plug \u2026)",furn_entity_tv:"TV (media player)",furn_power:"Power sensor (W)",furn_links_hint:"With a power sensor the item shows its watts and gets an energy cable.",furn_links_hint_tv:"The screen glows while the TV is on, in the colour of the app (Netflix, YouTube \u2026); the label shows the app or title.",stairs_hint:"The stair rises towards the back (away from the marked front edge) and opens the ceiling of the floor above.",floor_lights:"{n} lights on",floor_open:"{n} open",floor_persons:"{n} people",energy_consumption:"Consumption",energy_grid_import:"Grid import",energy_grid_export:"Export",energy_solar:"Solar",energy_battery:"Battery",energy_tariff:"Tariff",energy:"Energy",energy_meter:"Meter",energy_meter_set:"Place meter",energy_meter_remove:"Remove meter",energy_meter_hint:"Tap the spot of the meter or house connection in the plan.",energy_grid:"Grid (W, + = import)",energy_solar_sensor:"Solar production (W)",energy_battery_sensor:"Battery power (W, + = discharging)",energy_battery_soc:"Battery charge (%)",energy_tariff_sensor:"Tariff (e.g. \u20AC/kWh)",energy_invert:"Invert sign",energy_hint:"Consumers are placed devices with a power sensor (W) \u2013 the sensor itself or one of the same device.",tool_meter:"Meter",hint_meter:"Tap the spot of the meter",presence:"Presence",presence_hint:"Room sensor per person (e.g. ESPresense, Bermuda): its state names the room or area.",presence_sensor:"Room sensor",no_persons:"There are no people in Home Assistant."};function I(o,t,e={}){let i=((o?.language??navigator.language).startsWith("de")?ti:yr)[t]??ti[t]??t;for(let[r,s]of Object.entries(e))i=i.replace(`{${r}}`,String(s));return i}function T(o,t,e=2){return t.toLocaleString(o?.language??void 0,{maximumFractionDigits:e})}var ei={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function vt(o){return ei[o]}function Ht(o){return`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${ei[o]}"/></svg>`}var J=W`
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
`,yt=W`
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
`;var ni=new Set(["vertex","room","device","opening","furniture","rotate","resize","outdoor"]),ii=100,Ee=10,M=o=>Math.round(o*1e3)/1e3,ze=class extends V{static properties={hass:{attribute:!1},building:{attribute:!1},narrow:{type:Boolean},_doc:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_vertex:{state:!0},_openingId:{state:!0},_furnitureId:{state:!0},_deviceId:{state:!0},_deviceQuery:{state:!0},_expanded:{state:!0},_notice:{state:!0},_history:{state:!0},_spots:{state:!0},_outdoorId:{state:!0},_floorMenu:{state:!0},_openingPreset:{state:!0},_measureLen:{state:!0},_packages:{state:!0},_rectSize:{state:!0},_tool:{state:!0},_draft:{state:!0},_cursor:{state:!0},_guides:{state:!0},_view:{state:!0},_size:{state:!0},_images:{state:!0},_canUndo:{state:!0},_canRedo:{state:!0}};past=[];future=[];drag=null;pointers=new Map;pinch=null;fitted=!1;resizeObserver;loadingImages=new Set;constructor(){super(),this.narrow=!1,this._floorId=null,this._roomId=null,this._vertex=null,this._openingId=null,this._furnitureId=null,this._deviceId=null,this._deviceQuery="",this._expanded=new Set,this._notice=null,this._history=null,this._spots=null,this._outdoorId=null,this._floorMenu=!1,this._openingPreset="door",this._measureLen=3,this._packages=!1,this._rectSize=[4,3],this._tool="select",this._draft=[],this._cursor=null,this._guides={},this._view={scale:50,ox:40,oy:40},this._size={w:800,h:600},this._images={},this._canUndo=!1,this._canRedo=!1}t(t,e){return I(this.hass,t,e)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.resizeObserver?.disconnect()}willUpdate(t){t.has("building")&&this.building!==this._doc&&(this._doc=this.building,this._doc.floors.some(e=>e.id===this._floorId)||(this._floorId=this._doc.floors[0]?.id??null),this.floor?.rooms.some(e=>e.id===this._roomId)||(this._roomId=null))}firstUpdated(){let t=this.renderRoot.querySelector(".fp3d-canvas-wrap");this.resizeObserver=new ResizeObserver(()=>{this._size={w:t.clientWidth,h:t.clientHeight},!this.fitted&&this._size.w>0&&(this.fitted=!0,this.fit())}),this.resizeObserver.observe(t)}updated(){let t=this.floor?.background;t&&!this._images[t.image_id]&&!this.loadingImages.has(t.image_id)&&this.loadImage(t.image_id)}get floor(){return this._doc?.floors.find(t=>t.id===this._floorId)}get room(){return this.floor?.rooms.find(t=>t.id===this._roomId)}get isAdmin(){return this.hass?.user?.is_admin??!0}setDoc(t,e=this._doc){e&&(this.past.push(JSON.stringify(e)),this.past.length>ii&&this.past.shift(),this.future=[]),this._doc=t,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}change(t,e=this._doc,n=!0){let i=structuredClone(e),r=i.floors.find(s=>s.id===this._floorId);!r&&this._floorId||(t(i,r),this.setDoc(i,n?e:null))}undo(){let t=this.past.pop();t&&(this.future.push(JSON.stringify(this._doc)),this.restore(JSON.parse(t)))}redo(){let t=this.future.pop();t&&(this.past.push(JSON.stringify(this._doc)),this.restore(JSON.parse(t)))}restore(t){this._doc=t,t.floors.some(e=>e.id===this._floorId)||(this._floorId=t.floors[0]?.id??null),this.floor?.rooms.some(e=>e.id===this._roomId)||(this._roomId=null),this._vertex=null,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}toScreen(t){let{scale:e,ox:n,oy:i}=this._view;return[t[0]*e+n,t[1]*e+i]}toWorld(t,e){let{scale:n,ox:i,oy:r}=this._view;return[(t-i)/n,(e-r)/n]}localPoint(t){let e=this.renderRoot.querySelector("svg").getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}fit(){let t=this.floor?.rooms.flatMap(a=>a.points)??[],e=t.length?q(t):{x0:0,z0:0,x1:10,z1:8},n=1.5,i=e.x1-e.x0+2*n,r=e.z1-e.z0+2*n,s=Math.max(8,Math.min(400,Math.min(this._size.w/i,this._size.h/r)));this._view={scale:s,ox:this._size.w/2-(e.x0+e.x1)/2*s,oy:this._size.h/2-(e.z0+e.z1)/2*s}}zoomAt(t,e,n){let{scale:i,ox:r,oy:s}=this._view,a=Math.max(8,Math.min(600,i*t)),l=a/i;this._view={scale:a,ox:e-(e-r)*l,oy:n-(n-s)*l}}snap(t,e,n=!1){if(this._guides={},n)return t;let i=Ee/this._view.scale,r=this.floor?.rooms??[],s=[];for(let u of r)u.points.forEach((_,v)=>{e&&u.id===e.roomId&&(e.index===void 0||e.index===v)||s.push(_)});let a=null,l=i;for(let u of s){let _=Math.hypot(u[0]-t[0],u[1]-t[1]);_<l&&(l=_,a=u)}if(a)return this._guides={point:a},[a[0],a[1]];for(let u of r)if(!(e&&u.id===e.roomId))for(let _=0;_<u.points.length;_++){let v=u.points[_],y=u.points[(_+1)%u.points.length],m=y[0]-v[0],w=y[1]-v[1],$=m*m+w*w;if($<1e-9)continue;let x=((t[0]-v[0])*m+(t[1]-v[1])*w)/$;if(x<=0||x>=1)continue;let S=[v[0]+x*m,v[1]+x*w],E=Math.hypot(S[0]-t[0],S[1]-t[1]),A=this._doc.settings.grid;Math.abs(w)<1e-9&&(S[0]=Math.min(Math.max(Math.round(S[0]/A)*A,Math.min(v[0],y[0])),Math.max(v[0],y[0]))),Math.abs(m)<1e-9&&(S[1]=Math.min(Math.max(Math.round(S[1]/A)*A,Math.min(v[1],y[1])),Math.max(v[1],y[1]))),E<l&&(l=E,a=S)}if(a)return this._guides={point:a},[M(a[0]),M(a[1])];let c=this._doc.settings.grid,d=[M(Math.round(t[0]/c)*c),M(Math.round(t[1]/c)*c)],h=i,f=i,p={};for(let u of s)Math.abs(u[0]-t[0])<h&&(h=Math.abs(u[0]-t[0]),d[0]=u[0],p.x=u[0]),Math.abs(u[1]-t[1])<f&&(f=Math.abs(u[1]-t[1]),d[1]=u[1],p.z=u[1]);return this._guides=p,d}onPointerDown(t){t.currentTarget.setPointerCapture(t.pointerId);let n=this.localPoint(t);if(this.pointers.set(t.pointerId,n),this.pointers.size===2){this.drag&&ni.has(this.drag.kind)&&"moved"in this.drag&&this.drag.moved&&"base"in this.drag&&this.restoreLive(this.drag.base),this.drag=null,this.pinch=this.pinchState();return}if(this.pointers.size>2)return;if(t.button===1||t.button===2||!this.floor){this.drag={kind:"pan",last:n};return}let i=this.toWorld(...n),r=t.target;if(this._tool==="rect"||this._tool==="outdoor"){let _=this.snap(i,void 0,t.altKey);this.drag={kind:"rect",start:_,end:_,outdoor:this._tool==="outdoor"};return}if(this._tool==="polygon"||this._tool==="measure"){this.drag={kind:"tap",startScreen:n,last:n,panning:!1};return}if(this._tool==="opening"){this.placeOpening(this._openingPreset,n)||(this.drag={kind:"pan",last:n});return}if(this._tool==="meter"){if(this.isAdmin&&this._floorId){let _=this._doc.settings.grid,[v,y]=i.map(m=>M(Math.round(m/_)*_));this.setEnergy({meter:{floor_id:this._floorId,x:v,z:y}})}this._tool="select";return}let s=r.closest("[data-device]");if(s&&this.isAdmin){this.drag={kind:"device",entityId:s.getAttribute("data-device"),start:i,startScreen:n,base:this._doc,moved:!1};return}let a=r.closest("[data-opening]");if(a){let _=a.getAttribute("data-opening");this.selectItem("opening",_),this.drag=this.isAdmin?{kind:"opening",id:_,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let l=r.closest("[data-resize]");if(l&&this.isAdmin){let[_,v,y]=l.getAttribute("data-resize").split(":");this.drag={kind:"resize",id:_,corner:[v==="1"?1:-1,y==="1"?1:-1],base:this._doc,moved:!1};return}let c=r.closest("[data-rotate]");if(c&&this.isAdmin){this.drag={kind:"rotate",id:c.getAttribute("data-rotate"),base:this._doc,moved:!1};return}let d=r.closest("[data-furniture]");if(d&&!r.closest("[data-vertex], [data-mid]")){let _=d.getAttribute("data-furniture");this.selectItem("furniture",_),this.drag=this.isAdmin?{kind:"furniture",id:_,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let h=r.closest("[data-vertex]"),f=r.closest("[data-mid]");if(h&&this.room&&this.isAdmin){this._vertex=Number(h.getAttribute("data-vertex")),this.drag={kind:"vertex",roomId:this.room.id,index:this._vertex,base:this._doc,moved:!1};return}if(f&&this.room&&this.isAdmin){let _=Number(f.getAttribute("data-mid")),v=this.room.points,y=v[_],m=v[(_+1)%v.length],w=[M((y[0]+m[0])/2),M((y[1]+m[1])/2)],$=this._doc,x=this.room.id;this.change((S,E)=>{E.rooms.find(R=>R.id===x).points.splice(_+1,0,w);let A=Math.hypot(w[0]-y[0],w[1]-y[1]);for(let R of E.openings)R.room_id===x&&(R.edge>_?R.edge+=1:R.edge===_&&R.offset>A&&(R.edge=_+1,R.offset=M(R.offset-A)))},$,!1),this._vertex=_+1,this.drag={kind:"vertex",roomId:x,index:_+1,base:$,moved:!0};return}let p=r.closest("[data-outdoor]");if(p&&!r.closest("[data-room]")&&!this.roomAt(i)){let _=p.getAttribute("data-outdoor");this.selectItem("outdoor",_),this.drag=this.isAdmin?{kind:"outdoor",id:_,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let u=r.closest("[data-room]")?.getAttribute("data-room")??this.roomAt(i);if(u){u!==this._roomId&&(this._vertex=null),this.selectItem("room",u),this.drag=this.isAdmin&&this._tool!=="furniture"?{kind:"room",roomId:u,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}this.selectItem("room",null),this.drag={kind:"pan",last:n}}onPointerMove(t){let e=this.localPoint(t);if(this.pointers.has(t.pointerId)&&this.pointers.set(t.pointerId,e),this.pinch){let r=this.pinchState();r&&(this.zoomAt(r.dist/Math.max(1,this.pinch.dist),...r.mid),this._view={...this._view,ox:this._view.ox+r.mid[0]-this.pinch.mid[0],oy:this._view.oy+r.mid[1]-this.pinch.mid[1]},this.pinch=r);return}let n=this.toWorld(...e),i=this.drag;if(!i){this._tool!=="select"&&this._tool!=="furniture"&&this.floor&&(this._cursor=this.snap(n,void 0,t.altKey));return}switch(i.kind){case"pan":this._view={...this._view,ox:this._view.ox+e[0]-i.last[0],oy:this._view.oy+e[1]-i.last[1]},i.last=e;break;case"tap":(i.panning||Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])>6)&&(i.panning=!0,this._view={...this._view,ox:this._view.ox+e[0]-i.last[0],oy:this._view.oy+e[1]-i.last[1]}),i.last=e;break;case"rect":i.end=this.snap(n,void 0,t.altKey),this.requestUpdate();break;case"vertex":{let r=this.snap(n,{roomId:i.roomId,index:i.index},t.altKey);i.moved=!0,this.change((s,a)=>{a.rooms.find(l=>l.id===i.roomId).points[i.index]=r},i.base,!1);break}case"room":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let r=i.base.floors.find(c=>c.id===this._floorId)?.rooms.find(c=>c.id===i.roomId);if(!r)return;let s=this.roomDelta(r,[n[0]-i.start[0],n[1]-i.start[1]],t.altKey),a=i.base.floors.find(c=>c.id===this._floorId),l=new Set(a.placements.filter(c=>P([c.x,c.z],r.points)).map(c=>c.entity_id));this.change((c,d)=>{let h=d.rooms.find(f=>f.id===i.roomId);h.points=r.points.map(([f,p])=>[M(f+s[0]),M(p+s[1])]),d.placements=a.placements.map(f=>l.has(f.entity_id)?{...f,x:M(f.x+s[0]),z:M(f.z+s[1])}:f)},i.base,!1);break}case"opening":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let r=i.base.floors.find(c=>c.id===this._floorId),s=r?.openings.find(c=>c.id===i.id),a=r?.rooms.find(c=>c.id===s?.room_id);if(!s||!a)return;let l=this.offsetOnEdge(a,s.edge,n,s.width,t.altKey);this.change((c,d)=>Object.assign(d.openings.find(h=>h.id===i.id),{offset:l}),i.base,!1);break}case"furniture":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let r=i.base.floors.find(h=>h.id===this._floorId)?.furniture.find(h=>h.id===i.id);if(!r)return;let s=t.altKey?.01:this._doc.settings.grid,a=M(Math.round((r.x+n[0]-i.start[0])/s)*s),l=M(Math.round((r.z+n[1]-i.start[1])/s)*s),c=r.rotation,d=t.altKey?null:this.snapToWall({...r,x:a,z:l});d&&({x:a,z:l,rotation:c}=d),this.change((h,f)=>Object.assign(f.furniture.find(p=>p.id===i.id),{x:a,z:l,rotation:c}),i.base,!1);break}case"outdoor":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let r=i.base.floors.find(c=>c.id===this._floorId)?.outdoor.find(c=>c.id===i.id);if(!r)return;let s=t.altKey?.01:this._doc.settings.grid,a=Math.round((n[0]-i.start[0])/s)*s,l=Math.round((n[1]-i.start[1])/s)*s;this.change((c,d)=>d.outdoor.find(h=>h.id===i.id).points=r.points.map(([h,f])=>[M(h+a),M(f+l)]),i.base,!1);break}case"resize":{i.moved=!0;let r=i.base.floors.find(a=>a.id===this._floorId)?.furniture.find(a=>a.id===i.id);if(!r)return;let s=kn(r,i.corner,n,t.altKey?.01:this._doc.settings.grid);this.change((a,l)=>Object.assign(l.furniture.find(c=>c.id===i.id),s),i.base,!1);break}case"rotate":{i.moved=!0;let r=i.base.floors.find(l=>l.id===this._floorId)?.furniture.find(l=>l.id===i.id);if(!r)return;let s=Math.atan2(-(n[0]-r.x),n[1]-r.z)*180/Math.PI,a=t.altKey?1:15;s=(Math.round(s/a)*a%360+360)%360,this.change((l,c)=>Object.assign(c.furniture.find(d=>d.id===i.id),{rotation:s}),i.base,!1);break}case"device":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let r=i.base.floors.find(c=>c.id===this._floorId)?.placements.find(c=>c.entity_id===i.entityId);if(!r)return;let s=t.altKey?.01:this._doc.settings.grid,a=M(Math.round((r.x+n[0]-i.start[0])/s)*s),l=M(Math.round((r.z+n[1]-i.start[1])/s)*s);this.change((c,d)=>Object.assign(d.placements.find(h=>h.entity_id===i.entityId),{x:a,z:l}),i.base,!1);break}}}onPointerUp(t){if(this.pointers.delete(t.pointerId),this.pinch){this.pointers.size<2&&(this.pinch=null);return}let e=this.drag;if(this.drag=null,!e||t.type==="pointercancel"){e&&ni.has(e.kind)&&"moved"in e&&e.moved&&"base"in e&&this.restoreLive(e.base);return}let n=this.localPoint(t);switch(e.kind){case"rect":{let[i,r]=e.start,[s,a]=e.end;if(Math.abs(s-i)>=.2&&Math.abs(a-r)>=.2){let l=[Math.min(i,s),Math.min(r,a)],c=[Math.max(i,s),Math.max(r,a)],d=[l,[c[0],l[1]],c,[l[0],c[1]]];e.outdoor?this.addOutdoor(d):this.addRoom(d)}this._guides={};break}case"tap":if(e.panning)break;this._tool==="measure"?this._draft=[this.snap(this.toWorld(...n),void 0,t.altKey)]:this.addDraftPoint(this.snap(this.toWorld(...n),void 0,t.altKey),n);break;case"opening":case"furniture":case"rotate":case"resize":case"outdoor":e.moved&&this.pushHistory(e.base);break;case"device":e.moved?this.pushHistory(e.base):this.selectItem("device",e.entityId);break;case"vertex":case"room":e.moved&&this.pushHistory(e.base),this._guides={};break;default:break}}onWheel(t){t.preventDefault();let[e,n]=this.localPoint(t);this.zoomAt(Math.exp(-t.deltaY*(t.deltaMode===1?.05:.0015)),e,n)}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e[0]-n[0],e[1]-n[1]),mid:[(e[0]+n[0])/2,(e[1]+n[1])/2]}}pushHistory(t){this.past.push(JSON.stringify(t)),this.past.length>ii&&this.past.shift(),this.future=[],this._canUndo=!0,this._canRedo=!1}restoreLive(t){this._doc=t,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}roomDelta(t,e,n){if(n)return e;let i=this._doc.settings.grid,r=[Math.round(e[0]/i)*i,Math.round(e[1]/i)*i],a=Ee/this._view.scale;this._guides={};for(let l of this.floor?.rooms??[])if(l.id!==t.id)for(let c of l.points)for(let d of t.points){let h=Math.hypot(d[0]+e[0]-c[0],d[1]+e[1]-c[1]);h<a&&(a=h,r=[c[0]-d[0],c[1]-d[1]],this._guides={point:c})}return r}roomAt(t){return(this.floor?.rooms??[]).filter(i=>P(t,i.points)).sort((i,r)=>mt(i.points)-mt(r.points))[0]?.id??null}addDraftPoint(t,e){let n=this._draft;if(n.length>=3){let[r,s]=this.toScreen(n[0]);if(Math.hypot(r-e[0],s-e[1])<14){this.closeDraft();return}}let i=n[n.length-1];i&&Math.hypot(i[0]-t[0],i[1]-t[1])<1e-6||(this._draft=[...n,t])}closeDraft(){this._draft.length>=3&&mt(this._draft)>.05&&this.addRoom(this._draft),this._draft=[],this._cursor=null,this._guides={}}measureStep(t){let e=this._draft[this._draft.length-1];if(!e||!(this._measureLen>0))return;let n=ft(e,this._measureLen,t),i=this._draft[0];if(this._draft.length>=3&&Math.hypot(n[0]-i[0],n[1]-i[1])<.01){this.closeDraft();return}this._draft=[...this._draft,n]}rectBySize(){let t=this._draft[0]??[0,0],[e,n]=this._rectSize;e>.1&&n>.1&&(this.addRoom([t,ft(t,e,"right"),ft(ft(t,e,"right"),n,"down"),ft(t,n,"down")]),this._draft=[])}renderMeasureForm(){let t=this._draft,e=t[0],n=t[t.length-1],i=e&&n&&t.length>1?Math.hypot(n[0]-e[0],n[1]-e[1]):0,r=[["up","\u2191"],["left","\u2190"],["right","\u2192"],["down","\u2193"]],s=a=>T(this.hass,a,2);return g`<section>
      <h3>${this.t("measure")}</h3>
      ${e?g`<p class="fp3d-sub">${this.t("measure_from",{x:s(e[0]),z:s(e[1])})}</p>
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
                ${r.map(([a,l])=>g`<button class="fp3d-btn fp3d-arrow-${a}" title=${this.t(`dir_${a}`)} @click=${()=>this.measureStep(a)}>${l}</button>`)}
              </div>
            </div>
            ${t.length>1?g`<ol class="fp3d-measure-list">
                  ${t.slice(1).map((a,l)=>g`<li>${s(Math.hypot(a[0]-t[l][0],a[1]-t[l][1]))} m</li>`)}
                </ol>`:b}
            <div class="fp3d-actions">
              <button class="fp3d-btn fp3d-primary" ?disabled=${t.length<3} @click=${()=>this.closeDraft()}>${this.t("measure_close")}</button>
              <button class="fp3d-btn" ?disabled=${t.length<2} @click=${()=>this._draft=t.slice(0,-1)}>${this.t("measure_undo")}</button>
            </div>
            ${t.length>=3?g`<p class="fp3d-sub">${this.t("measure_gap",{gap:s(i)})}</p>`:b}`:g`<p class="fp3d-sub">${this.t("measure_start")}</p>`}
      <h4 class="fp3d-lib-head">${this.t("rect_by_size")}</h4>
      <div class="fp3d-form">
        ${this.num(this.t("width"),this._rectSize[0],a=>this._rectSize=[Math.max(.1,a),this._rectSize[1]],.01,.1)}
        ${this.num(this.t("depth"),this._rectSize[1],a=>this._rectSize=[this._rectSize[0],Math.max(.1,a)],.01,.1)}
        <button class="fp3d-btn fp3d-wide" @click=${()=>this.rectBySize()}>${this.t("rect_add")}</button>
      </div>
      <p class="fp3d-sub">${this.t("measure_hint")}</p>
    </section>`}addOutdoor(t){if(!this.floor)return;let e={id:N("outdoor"),type:"lawn",points:t.map(([n,i])=>[M(n),M(i)])};this.change((n,i)=>i.outdoor.push(e)),this.selectItem("outdoor",e.id),this._tool="select"}get outdoorArea(){return this._outdoorId?this.floor?.outdoor.find(t=>t.id===this._outdoorId):void 0}updateOutdoor(t){let e=this._outdoorId;this.change((n,i)=>Object.assign(i.outdoor.find(r=>r.id===e),t))}deleteOutdoor(){let t=this._outdoorId;!t||!this.isAdmin||(this.change((e,n)=>n.outdoor=n.outdoor.filter(i=>i.id!==t)),this._outdoorId=null)}duplicateOutdoor(){let t=this.outdoorArea;if(!t||!this.isAdmin)return;let e={...t,id:N("outdoor"),points:t.points.map(([n,i])=>[M(n+.5),M(i+.5)])};this.change((n,i)=>i.outdoor.push(e)),this.selectItem("outdoor",e.id)}addRoom(t){if(!this.floor)return;let e=N("room"),n=this.floor.rooms.length+1;this.change((i,r)=>r.rooms.push({id:e,name:this.t("new_room",{n}),area_id:null,points:t.map(([s,a])=>[M(s),M(a)]),floor_material:"wood"})),this._roomId=e,this._vertex=null,this._tool="select"}onKey=t=>{if(t.composedPath().some(i=>i instanceof HTMLInputElement||i instanceof HTMLSelectElement||i instanceof HTMLTextAreaElement)||!this.isConnected||!this.offsetParent)return;let n=t.ctrlKey||t.metaKey;n&&t.key.toLowerCase()==="z"?(t.preventDefault(),t.shiftKey?this.redo():this.undo()):n&&t.key.toLowerCase()==="y"?(t.preventDefault(),this.redo()):n&&t.key.toLowerCase()==="d"?(t.preventDefault(),this.duplicateRoom()):t.key==="Delete"||t.key==="Backspace"&&(this._tool==="select"||this._tool==="furniture")?this._deviceId?(this.removeDevice(this._deviceId),this._deviceId=null):this._outdoorId?this.deleteOutdoor():this._openingId?this.deleteOpening():this._furnitureId?this.deleteFurniture():this._vertex!==null?this.deleteVertex(this._vertex):this.deleteRoom():t.key.toLowerCase()==="r"&&!n&&this._furnitureId?this.rotateFurniture(t.shiftKey?-90:90):t.key==="Backspace"&&this._tool==="polygon"?this._draft=this._draft.slice(0,-1):t.key==="Enter"&&this._tool==="polygon"?this.closeDraft():t.key==="Escape"&&(this._draft.length?this._draft=[]:this._tool!=="select"?this._tool="select":this.selectItem("room",null),this._cursor=null)};get freeHaFloors(){let t=new Set(this._doc.floors.map(e=>e.ha_floor));return Object.values(this.hass?.floors??{}).filter(e=>!t.has(e.floor_id)).sort((e,n)=>(e.level??99)-(n.level??99)||e.name.localeCompare(n.name))}unplacedAreas(t){if(!t.ha_floor)return[];let e=new Set(this._doc.floors.flatMap(n=>n.rooms.map(i=>i.area_id)));return Object.values(this.hass?.areas??{}).filter(n=>n.floor_id===t.ha_floor&&!e.has(n.area_id)).sort((n,i)=>n.name.localeCompare(i.name))}addFloor(t=null){let e=this._doc.floors,n=N("floor"),i=t?.name??(e.length===0?this.t("default_floor"):this.t("new_floor",{n:e.length})),r={...wn(n,i,xn(e,t?.level)),ha_floor:t?.floor_id??null},s=structuredClone(this._doc),a=s.floors.findIndex(l=>l.elevation>r.elevation);s.floors.splice(a<0?s.floors.length:a,0,r),this.setDoc(s),this._floorId=n,this._roomId=null,this._floorMenu=!1,this.fit()}addAreaRooms(t){let e=this.unplacedAreas(t);if(!e.length)return;let n=$n(t,e,()=>N("room"));this.change((i,r)=>r.rooms.push(...n)),this.fit()}moveFloor(t){let e=this._doc.floors.findIndex(r=>r.id===this._floorId),n=e+t;if(e<0||n<0||n>=this._doc.floors.length)return;let i=structuredClone(this._doc);[i.floors[e],i.floors[n]]=[i.floors[n],i.floors[e]],this.setDoc(i)}deleteFloor(){let t=this.floor;if(!t||!confirm(this.t("delete_floor_confirm",{name:t.name})))return;let e=structuredClone(this._doc);e.floors=e.floors.filter(n=>n.id!==t.id),this.setDoc(e),this._floorId=e.floors[0]?.id??null,this._roomId=null}deleteRoom(){let t=this._roomId;!t||!this.isAdmin||(this.change((e,n)=>{let i=n.rooms.find(r=>r.id===t);n.rooms=n.rooms.filter(r=>r.id!==t),n.openings=n.openings.filter(r=>r.room_id!==t),i&&(n.placements=n.placements.filter(r=>!P([r.x,r.z],i.points)))}),this._roomId=null,this._vertex=null)}duplicateRoom(){let t=this.room;if(!t||!this.isAdmin)return;let e=N("room");this.change((n,i)=>i.rooms.push({...structuredClone(t),id:e,points:t.points.map(([r,s])=>[M(r+.5),M(s+.5)])})),this._roomId=e}selectItem(t,e){if(this._notice=null,this._outdoorId=t==="outdoor"?e:null,t==="outdoor"&&(this._roomId=null),(t!=="room"||e!==this._roomId)&&(this._vertex=null),this._roomId=t==="room"?e:this._roomId,this._openingId=t==="opening"?e:null,this._furnitureId=t==="furniture"?e:null,this._deviceId=t==="device"?e:null,t==="device"&&e){let n=this.floor?.placements.find(i=>i.entity_id===e);this._roomId=(n&&this.roomAt([n.x,n.z]))??this._roomId}t==="opening"&&e&&(this._roomId=this.floor?.openings.find(n=>n.id===e)?.room_id??this._roomId)}get opening(){return this._openingId?this.floor?.openings.find(t=>t.id===this._openingId):void 0}get furnitureItem(){return this._furnitureId?this.floor?.furniture.find(t=>t.id===this._furnitureId):void 0}offsetOnEdge(t,e,n,i,r){let s=t.points[e],a=t.points[(e+1)%t.points.length],l=Math.hypot(a[0]-s[0],a[1]-s[1])||1,c=((n[0]-s[0])*(a[0]-s[0])+(n[1]-s[1])*(a[1]-s[1]))/l,d=r?.01:this._doc.settings.grid,h=Math.min(i,l)/2;return M(Math.min(l-h,Math.max(h,Math.round(c/d)*d)))}placeOpening(t,e){let n=this.floor;if(!n||!this.isAdmin)return!1;let i=null;for(let u of n.rooms)for(let _=0;_<u.points.length;_++){let[v,y]=this.toScreen(u.points[_]),[m,w]=this.toScreen(u.points[(_+1)%u.points.length]),$=(m-v)**2+(w-y)**2||1,x=Math.min(1,Math.max(0,((e[0]-v)*(m-v)+(e[1]-y)*(w-y))/$)),S=Math.hypot(e[0]-v-(m-v)*x,e[1]-y-(w-y)*x),E=S-(u.id===this._roomId?.5:0);S<Ee*2.2&&(!i||E<i.d)&&(i={room:u,edge:_,d:E})}if(!i)return!1;let{room:r,edge:s}=i,a=r.points[s],l=r.points[(s+1)%r.points.length],c=Math.hypot(l[0]-a[0],l[1]-a[1]),d=Kt[t],h=d.type,f=M(Math.min(d.width,Math.max(.3,c-.1))),p={id:N("opening"),room_id:r.id,edge:s,offset:this.offsetOnEdge(r,s,this.toWorld(...e),f,!1),width:f,type:h,sill:d.sill,height:d.height,hinge:"left",leaves:d.leaves,swing:"in",cover:null,contact:null,contact2:null,tilt:null};return this.change((u,_)=>_.openings.push(p)),this._tool="select",this.selectItem("opening",p.id),!0}setOpeningPreset(t,e){let n=Kt[e];this._openingPreset=e;let i=ve(t)===e;this.updateOpening({type:n.type,leaves:n.leaves,sill:n.sill,height:n.height,...i?{}:{width:n.width}})}updateOpening(t){let e=this._openingId;this.change((n,i)=>Object.assign(i.openings.find(r=>r.id===e),t))}deleteOpening(){let t=this._openingId;!t||!this.isAdmin||(this.change((e,n)=>n.openings=n.openings.filter(i=>i.id!==t)),this._openingId=null)}addFurniture(t){let e=this.floor;if(!e||!this.isAdmin)return;let[n,i,r]=et[t],s=this._doc.floors.filter(f=>f.elevation>e.elevation).sort((f,p)=>f.elevation-p.elevation)[0],a=t==="stairs"?M(s?s.elevation-e.elevation:e.height+.25):r,l=this.room,[c,d]=l?Q(l.points):this.toWorld(this._size.w/2,this._size.h/2),h={id:N("furniture"),type:t,x:M(c),z:M(d),rotation:0,w:n,d:i,h:a,variant:null};this.change((f,p)=>p.furniture.push(h)),this.selectItem("furniture",h.id)}snapToWall(t){return this.floor?Qt(this.floor,t,this._doc.settings.wall_interior):null}updateFurniture(t){let e=this._furnitureId;this.change((n,i)=>Object.assign(i.furniture.find(r=>r.id===e),t))}rotateFurniture(t){let e=this.furnitureItem;!e||!this.isAdmin||this.updateFurniture({rotation:((e.rotation+t)%360+360)%360})}deleteFurniture(){let t=this._furnitureId;!t||!this.isAdmin||(this.change((e,n)=>n.furniture=n.furniture.filter(i=>i.id!==t)),this._furnitureId=null)}duplicateFurniture(){let t=this.furnitureItem;if(!t||!this.isAdmin)return;let e={...structuredClone(t),id:N("furniture"),x:M(t.x+.3),z:M(t.z+.3)};this.change((n,i)=>i.furniture.push(e)),this.selectItem("furniture",e.id)}placeDevices(t){let e=this.room;if(!e||!t.length||!this.isAdmin)return;let n=new Set(t);this.change((i,r)=>{for(let a of i.floors)a.placements=a.placements.filter(l=>!n.has(l.entity_id)),a.furniture=a.furniture.filter(l=>!(tt(l.type)&&l.entity&&n.has(l.entity)));let s=[...r.placements.map(a=>[a.x,a.z]),...r.furniture.filter(a=>tt(a.type)).map(a=>[a.x,a.z])];for(let a of Vn(e,t,s)){if(!a.entity_id.startsWith("light.")){r.placements.push(a);continue}let[l,c,d]=et.lamp_ceiling;r.furniture.push({id:N("furniture"),type:"lamp_ceiling",x:a.x,z:a.z,rotation:0,w:l,d:c,h:d,variant:null,entity:a.entity_id,power:null})}})}get device(){return this._deviceId?this.floor?.placements.find(t=>t.entity_id===this._deviceId):void 0}updateDevice(t){let e=this._deviceId;this.change((n,i)=>Object.assign(i.placements.find(r=>r.entity_id===e),t))}centreDevice(){let t=this.device,e=t?this.roomAt([t.x,t.z]):null,n=this.floor?.rooms.find(s=>s.id===e);if(!t||!n)return;let[i,r]=Q(n.points);this.updateDevice({x:M(i),z:M(r)})}spreadCeilingLights(t){let e=this.floor;if(!e)return;let n=e.placements.filter(h=>z(h.entity_id)==="light"&&(h.mount??"ceiling")==="ceiling"&&P([h.x,h.z],t.points));if(n.length<2)return;let i=q(t.points),r=i.x1-i.x0,s=i.z1-i.z0,a=Math.max(1,Math.round(Math.sqrt(n.length*r/Math.max(.1,s)))),l=Math.ceil(n.length/a),c=n.map((h,f)=>{let p=Math.floor(f/a),u=p===l-1?n.length-a*(l-1):a,_=f-p*a;return[M(i.x0+r/u*(_+.5)),M(i.z0+s/l*(p+.5))]}),d=n.map(h=>h.entity_id);this.change((h,f)=>{d.forEach((p,u)=>Object.assign(f.placements.find(_=>_.entity_id===p),{x:c[u][0],z:c[u][1]}))})}closeFloorGaps(){let t=this.floor;if(!t||!this.isAdmin)return;let{rooms:e,gaps:n}=Un(t.rooms);if(!n.length){this._notice=this.t("gaps_none");return}let i=Kn(n);this.change((r,s)=>{s.rooms=e,i&&(r.settings.wall_interior=i)}),this._notice=i?this.t("gaps_closed_wall",{n:n.length,t:T(this.hass,i,2)}):this.t("gaps_closed",{n:n.length})}removeDevice(t){this.change(e=>{for(let n of e.floors)n.placements=n.placements.filter(i=>i.entity_id!==t),n.furniture=n.furniture.filter(i=>!(tt(i.type)&&i.entity===t))})}deleteVertex(t){let e=this.room;if(!e||e.points.length<=3)return;let n=e.points.length,i=(t-1+n)%n;this.change((r,s)=>{s.rooms.find(a=>a.id===e.id).points.splice(t,1),s.openings=s.openings.filter(a=>a.room_id!==e.id||a.edge!==t&&a.edge!==i).map(a=>a.room_id===e.id&&a.edge>t?{...a,edge:a.edge-1}:a)}),this._vertex=null}updateFloor(t){this.change((e,n)=>Object.assign(n,t))}updateRoom(t){let e=this._roomId;this.change((n,i)=>Object.assign(i.rooms.find(r=>r.id===e),t))}setArea(t){let e=this.room;if(!e)return;let n=t?this.hass?.areas?.[t]:void 0,i=!e.name||/^(Raum|Room) \d+$/.test(e.name)||Object.values(this.hass?.areas??{}).some(r=>r.name===e.name);this.updateRoom({area_id:t||null,...n&&i?{name:n.name}:{}})}setRect(t,e){let n=this.room;if(!n||!Number.isFinite(e))return;let i=q(n.points),{x0:r,z0:s,x1:a,z1:l}=i;t==="x"&&([r,a]=[e,e+(a-r)]),t==="z"&&([s,l]=[e,e+(l-s)]),t==="w"&&e>.05&&(a=r+e),t==="d"&&e>.05&&(l=s+e),this.updateRoom({points:[[M(r),M(s)],[M(a),M(s)],[M(a),M(l)],[M(r),M(l)]]})}setPoint(t,e,n){let i=this.room;if(!i||!Number.isFinite(n))return;let r=i.points.map(s=>[...s]);r[t][e]=M(n),this.updateRoom({points:r})}async loadImage(t){this.loadingImages.add(t);try{let e=await hn(this.hass,t),n=new Image;n.src=e,await n.decode(),this._images={...this._images,[t]:{url:e,aspect:n.naturalHeight/n.naturalWidth}}}catch{}}async uploadBackground(t){let e=t.target,n=e.files?.[0];if(e.value="",!n)return;let i=await createImageBitmap(n),r=Math.min(1,2048/Math.max(i.width,i.height)),s=document.createElement("canvas");s.width=Math.round(i.width*r),s.height=Math.round(i.height*r),s.getContext("2d").drawImage(i,0,0,s.width,s.height);let a=s.toDataURL("image/jpeg",.85),l=N("img");await un(this.hass,l,a),this._images={...this._images,[l]:{url:a,aspect:s.height/s.width}};let c=this.floor?.rooms.length?q(this.floor.rooms.flatMap(d=>d.points)):null;this.updateFloor({background:{image_id:l,x:c?c.x0:0,z:c?c.z0:0,width:c?Math.max(4,M(c.x1-c.x0)):12,opacity:.5}})}render(){let t=this.floor,e=t?Dt(t.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior}):null;return g`
      <div class="fp3d-editor ${this.narrow?"fp3d-narrow":""}">
        <div class="fp3d-main">
          <div class="fp3d-toolbar">
            <div class="fp3d-seg" role="group" aria-label=${this.t("tool_select")}>
              ${["select","rect","polygon","measure","opening","furniture","outdoor"].map(n=>g`<button
                  aria-pressed=${this._tool===n}
                  ?disabled=${!t||!this.isAdmin&&n!=="select"}
                  @click=${()=>{this._tool=n,this._draft=[],this._cursor=null}}
                >
                  ${this.t(`tool_${n}`)}
                </button>`)}
            </div>
            <div class="fp3d-seg">
              <button ?disabled=${!this._canUndo} @click=${()=>this.undo()} title="Ctrl+Z">${this.t("undo")}</button>
              <button ?disabled=${!this._canRedo} @click=${()=>this.redo()} title="Ctrl+Y">${this.t("redo")}</button>
              <button @click=${()=>this.fit()}>${this.t("fit")}</button>
            </div>
            ${e?.warnings.length?g`<span class="fp3d-warn">${this.t("overlap_warning")}</span>`:b}
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
              @contextmenu=${n=>n.preventDefault()}
            >
              ${this.renderBackground(t)} ${this.renderGrid()} ${this.renderGhost()} ${e?this.renderWalls(e.walls):b}
              ${t?this.renderOutdoor(t):b} ${t?this.renderRooms(t):b} ${t?this.renderFurniture(t):b}
              ${t&&e?this.renderOpenings(t,e.walls):b} ${t?this.renderMeter(t):b}
              ${t&&this._tool==="select"?this.renderDevices(t):b}
              ${this.room&&this.isAdmin&&this._tool==="select"&&!this._openingId&&!this._furnitureId?this.renderHandles(this.room):b}
              ${this.renderDraft()} ${this.renderGuides()}
            </svg>
            <p class="fp3d-hint">${t?this.t(`hint_${this._tool}`):this.t("hint_empty")}</p>
          </div>
        </div>
        <aside class="fp3d-side">${this.renderSide(t)}</aside>
      </div>
    `}renderBackground(t){let e=t?.background,n=e?this._images[e.image_id]:void 0;if(!e||!n)return b;let[i,r]=this.toScreen([e.x,e.z]),s=e.width*this._view.scale;return k`<image href=${n.url} x=${i} y=${r} width=${s} height=${s*n.aspect} opacity=${e.opacity} preserveAspectRatio="none" pointer-events="none" />`}renderGrid(){let{scale:t}=this._view,{w:e,h:n}=this._size,i=t>=90?.1:t>=30?.5:1,r=t>=20?1:5,[s,a]=this.toWorld(0,0),[l,c]=this.toWorld(e,n),d=[],h=(u,_)=>{for(let v=Math.ceil(s/u)*u;v<=l;v+=u){let y=this.toScreen([v,0])[0];d.push(k`<line class=${_} x1=${y} y1="0" x2=${y} y2=${n} />`)}for(let v=Math.ceil(a/u)*u;v<=c;v+=u){let y=this.toScreen([0,v])[1];d.push(k`<line class=${_} x1="0" y1=${y} x2=${e} y2=${y} />`)}};i<r&&h(i,"fp3d-grid-minor"),h(r,"fp3d-grid-major");let[f,p]=this.toScreen([0,0]);return d.push(k`<circle class="fp3d-origin" cx=${f} cy=${p} r="3" />`),k`<g pointer-events="none">${d}</g>`}renderGhost(){let t=this._doc?.floors.findIndex(n=>n.id===this._floorId)??-1,e=t>0?this._doc.floors[t-1]:void 0;return e?k`<g pointer-events="none">${e.rooms.map(n=>k`<polygon class="fp3d-ghost" points=${n.points.map(i=>this.toScreen(i).join(",")).join(" ")} />`)}</g>`:b}renderWalls(t){return k`<g pointer-events="none">${t.map(e=>k`<polygon class=${e.exterior?"fp3d-wall fp3d-wall-ext":"fp3d-wall"} points=${e.footprint.map(n=>this.toScreen(n).join(",")).join(" ")} />`)}</g>`}renderOutdoor(t){return k`<g>${t.outdoor.map(e=>{let n=e.points.map(l=>this.toScreen(l).join(",")).join(" "),[i,r]=this.toScreen(Q(e.points)),s=q(e.points),a=Math.min(s.x1-s.x0,s.z1-s.z0)*this._view.scale>40;return k`<g data-outdoor=${e.id} class=${`fp3d-out fp3d-out-${e.type}${e.id===this._outdoorId?" fp3d-out-sel":""}`}>
        <polygon points=${n} />
        ${a?k`<text x=${i} y=${r+4}>${this.t(`out_${e.type}`)}</text>`:b}
      </g>`})}</g>`}renderOutdoorForm(t){let e=this.isAdmin,n=ye(t.points),i=q(t.points),r=(s,a)=>{let{x0:l,z0:c,x1:d,z1:h}=i;s==="x"&&([l,d]=[a,a+(d-l)]),s==="z"&&([c,h]=[a,a+(h-c)]),s==="w"&&(d=l+Math.max(.1,a)),s==="d"&&(h=c+Math.max(.1,a)),this.updateOutdoor({points:[[l,c],[d,c],[d,h],[l,h]].map(([f,p])=>[M(f),M(p)])})};return g`<section>
      <h3>${this.t("outdoor")}</h3>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("outdoor_type")}
          <select ?disabled=${!e} @change=${s=>this.updateOutdoor({type:s.target.value})}>
            ${_n.map(s=>g`<option value=${s} ?selected=${s===t.type}>${this.t(`out_${s}`)}</option>`)}
          </select></label
        >
        ${n?g`${this.num(this.t("x"),i.x0,s=>r("x",s))} ${this.num(this.t("z"),i.z0,s=>r("z",s))}
            ${this.num(this.t("width"),i.x1-i.x0,s=>r("w",s),.01,.1)} ${this.num(this.t("depth"),i.z1-i.z0,s=>r("d",s),.01,.1)}`:b}
      </div>
      <p class="fp3d-sub">${this.t("outdoor_hint")}</p>
      ${e?g`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.duplicateOutdoor()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOutdoor()}>${this.t("delete")}</button>
          </div>`:b}
    </section>`}renderRooms(t){return k`
      <g>${t.rooms.map(e=>{let n=e.points.map(i=>this.toScreen(i).join(",")).join(" ");return k`<polygon data-room=${e.id} class=${e.id===this._roomId?"fp3d-room fp3d-room-sel":"fp3d-room"} points=${n} />`})}</g>
      <g pointer-events="none">${t.rooms.map(e=>{let[n,i]=this.toScreen(Q(e.points));return k`<text class="fp3d-room-name" x=${n} y=${i-2}>${e.name}</text>
          <text class="fp3d-room-area" x=${n} y=${i+14}>${this.t("area_m2",{a:T(this.hass,mt(e.points),1)})}</text>`})}</g>
    `}renderMeter(t){let e=this._doc.energy?.meter;if(!e||e.floor_id!==t.id)return b;let[n,i]=this.toScreen([e.x,e.z]);return k`<g class="fp3d-meter" transform="translate(${n} ${i})" pointer-events="none">
      <rect x="-11" y="-11" width="22" height="22" rx="5" />
      <path d="M1.5 -7 L-4 1 H0 L-1.5 7 L4 -1 H0 Z" />
    </g>`}renderFurniture(t){let e=this._view.scale;return k`<g>${t.furniture.map(n=>{let i=n.id===this._furnitureId,[r,s]=this.toScreen([n.x,n.z]),a=Math.min(n.w,n.d)*e>44,l=n.rotation*Math.PI/180,c=n.d/2+Math.max(.3,26/e),[d,h]=this.toScreen([n.x-Math.sin(l)*c,n.z+Math.cos(l)*c]),[f,p]=this.toScreen([n.x-Math.sin(l)*(n.d/2),n.z+Math.cos(l)*(n.d/2)]),u=tt(n.type)&&!!n.entity&&n.entity!=="none"&&this.hass?.states[n.entity]?.state==="on";return k`<g data-furniture=${n.id} class=${`fp3d-furn${i?" fp3d-furn-sel":""}${u?" fp3d-furn-lit":""}`}>
        <g transform="translate(${r} ${s}) rotate(${n.rotation}) scale(${e})">
          <rect class="fp3d-furn-body" x=${-n.w/2} y=${-n.d/2} width=${n.w} height=${n.d} />
          <g class="fp3d-furn-sym">${Nn(n.type,n.w,n.d)}</g>
          <line class="fp3d-furn-front" x1=${-n.w/2} y1=${n.d/2} x2=${n.w/2} y2=${n.d/2} />
        </g>
        ${a?k`<text x=${r} y=${s+4}>${this.t(`furn_${n.type}`)}</text>`:b}
      </g>
      ${i&&this.isAdmin?[[-1,-1],[1,-1],[1,1],[-1,1]].map(([_,v])=>{let[y,m]=this.toScreen([n.x+_*n.w*Math.cos(l)/2-v*n.d*Math.sin(l)/2,n.z+_*n.w*Math.sin(l)/2+v*n.d*Math.cos(l)/2]);return k`<g class="fp3d-resize" data-resize=${`${n.id}:${_}:${v}`}>
              <circle cx=${y} cy=${m} r="14" class="fp3d-hit" />
              <rect x=${y-5} y=${m-5} width="10" height="10" rx="2" />
            </g>`}):b}
      ${i?(()=>{let[_,v]=this.toScreen([n.x+Math.sin(l)*(n.d/2+18/e),n.z-Math.cos(l)*(n.d/2+18/e)]);return k`<text class="fp3d-dim" x=${_} y=${v+4}>${T(this.hass,n.w,2)} × ${T(this.hass,n.d,2)} m</text>`})():b}
      ${i&&this.isAdmin?k`<g class="fp3d-rotate" data-rotate=${n.id}>
            <line x1=${f} y1=${p} x2=${d} y2=${h} />
            <circle cx=${d} cy=${h} r="16" class="fp3d-hit" />
            <circle cx=${d} cy=${h} r="8" />
            <path d="M${d-4} ${h-1}a4 4 0 1 1 2 3.5" />
          </g>`:b}`})}</g>`}renderOpenings(t,e){return k`<g>${t.openings.map(n=>{let i=t.rooms.find(m=>m.id===n.room_id);if(!i||n.edge>=i.points.length)return b;let r=Xn(e,i,n.edge,n.offset),s=te(i,n.edge,n.offset-n.width/2),a=te(i,n.edge,n.offset+n.width/2),l=(a[0]-s[0])/(n.width||1),c=(a[1]-s[1])/(n.width||1),d=U(i.points)>=0?1:-1,h=[-c*d,l*d],f=[.06,.06];r&&(f=r.wall.roomLeft===i.id?[r.wall.left,r.wall.right]:[r.wall.right,r.wall.left]);let p=(m,w)=>this.toScreen([m[0]+h[0]*w,m[1]+h[1]*w]),u=[p(s,f[0]+.01),p(a,f[0]+.01),p(a,-f[1]-.01),p(s,-f[1]-.01)],_=n.id===this._openingId,v=`fp3d-open fp3d-open-${n.type}${_?" fp3d-open-sel":""}`,y;if(n.type==="garage"){let m=p(s,f[0]-.04),w=p(a,f[0]-.04),$=p(s,f[0]+Math.min(2,n.height)),x=p(a,f[0]+Math.min(2,n.height));y=k`<line x1=${m[0]} y1=${m[1]} x2=${w[0]} y2=${w[1]} />
          <path class="fp3d-open-track" d="M${m[0]} ${m[1]}L${$[0]} ${$[1]}M${w[0]} ${w[1]}L${x[0]} ${x[1]}" />`}else if(n.type==="door"){let m=n.swing==="out",w=m?-f[1]:f[0],$=n.hinge==="left"==d>0,x=n.leaves===2,S=[(s[0]+a[0])/2,(s[1]+a[1])/2],E=x?n.width/2:n.width,A=(R,Y)=>{let[F,G]=p(R,w),[nt,De]=p(Y,w),Vt=p(R,w+(m?-E:E)),He=E*this._view.scale,$i=(Vt[0]-F)*(De-G)-(Vt[1]-G)*(nt-F);return k`<path d="M${F} ${G}L${Vt[0]} ${Vt[1]}A${He} ${He} 0 0 ${$i>0?1:0} ${nt} ${De}" />`};y=x?k`${A(s,S)}${A(a,S)}`:A($?s:a,$?a:s)}else{let m=(f[0]-f[1])/2,w=p(s,m+.035),$=p(a,m+.035),x=p(s,m-.035),S=p(a,m-.035),E=[(s[0]+a[0])/2,(s[1]+a[1])/2],A=p(E,f[0]),R=p(E,-f[1]);y=k`<line x1=${w[0]} y1=${w[1]} x2=${$[0]} y2=${$[1]} /><line x1=${x[0]} y1=${x[1]} x2=${S[0]} y2=${S[1]} />${n.leaves===2?k`<line x1=${A[0]} y1=${A[1]} x2=${R[0]} y2=${R[1]} />`:b}`}return k`<g data-opening=${n.id} class=${v}>
        <polygon class="fp3d-open-gap" points=${u.map(m=>m.join(",")).join(" ")} />
        ${y}
      </g>`})}</g>`}renderDevices(t){return k`<g>${t.placements.map(e=>{let n=z(e.entity_id);if(!n)return b;let[i,r]=this.toScreen([e.x,e.z]),a=`fp3d-device${this.hass?.states[e.entity_id]?.state==="on"?" fp3d-device-on":""}${e.entity_id===this._deviceId?" fp3d-device-sel":""}`;return k`<g data-device=${e.entity_id} class=${a} transform="translate(${i} ${r})">
        <title>${D(this.hass,e.entity_id)}</title>
        <circle r="18" class="fp3d-hit" /><circle r="12" />
        <path d=${vt(n)} transform="translate(-7.2 -7.2) scale(0.6)" />
      </g>`})}</g>`}renderHandles(t){let e=t.points,n=e.length,i=e.map((s,a)=>{let l=e[(a+1)%n],[c,d]=this.toScreen(s),[h,f]=this.toScreen(l),p=Math.hypot(l[0]-s[0],l[1]-s[1]),u=(c+h)/2,_=(d+f)/2,[v,y]=this.toScreen(Q(e)),m=-(f-d),w=h-c,$=Math.hypot(m,w)||1;m/=$,w/=$,m*(u-v)+w*(_-y)<0&&(m=-m,w=-w);let x=Math.hypot(h-c,f-d);return k`
        ${x>50?k`<text class="fp3d-dim" x=${u+m*16} y=${_+w*16+4}>${T(this.hass,p,2)} m</text>`:b}
        ${x>36?k`<g data-mid=${a} class="fp3d-mid"><circle cx=${u} cy=${_} r="14" class="fp3d-hit" /><circle cx=${u} cy=${_} r="6" /><path d="M${u-3} ${_}h6M${u} ${_-3}v6" /></g>`:b}
      `}),r=e.map((s,a)=>{let[l,c]=this.toScreen(s);return k`<g data-vertex=${a} class=${a===this._vertex?"fp3d-vertex fp3d-vertex-sel":"fp3d-vertex"}><circle cx=${l} cy=${c} r="16" class="fp3d-hit" /><circle cx=${l} cy=${c} r="6" /></g>`});return k`<g>${i}${r}</g>`}renderDraft(){let t=this.drag;if(t?.kind==="rect"){let[n,i]=this.toScreen(t.start),[r,s]=this.toScreen(t.end),a=Math.abs(t.end[0]-t.start[0]),l=Math.abs(t.end[1]-t.start[1]);return k`<g pointer-events="none">
        <rect class="fp3d-draft" x=${Math.min(n,r)} y=${Math.min(i,s)} width=${Math.abs(r-n)} height=${Math.abs(s-i)} />
        <text class="fp3d-dim" x=${(n+r)/2} y=${Math.min(i,s)-8}>${T(this.hass,a,2)} × ${T(this.hass,l,2)} m</text>
      </g>`}if(this._tool!=="polygon"&&this._tool!=="measure")return b;let e=[...this._draft,...this._cursor?[this._cursor]:[]].map(n=>this.toScreen(n));return k`<g pointer-events="none">
      ${e.length>1?k`<polyline class="fp3d-draft" points=${e.map(n=>n.join(",")).join(" ")} />`:b}
      ${this._tool==="measure"?this._draft.slice(1).map((n,i)=>{let r=this.toScreen(this._draft[i]),s=this.toScreen(n);return k`<text class="fp3d-dim" x=${(r[0]+s[0])/2} y=${(r[1]+s[1])/2-6}>${T(this.hass,Math.hypot(n[0]-this._draft[i][0],n[1]-this._draft[i][1]),2)} m</text>`}):b}
      ${this._draft.map((n,i)=>{let[r,s]=this.toScreen(n);return k`<circle class=${i===0&&this._draft.length>=3?"fp3d-draft-pt fp3d-draft-first":"fp3d-draft-pt"} cx=${r} cy=${s} r=${i===0&&this._draft.length>=3?9:5} />`})}
      ${this._cursor?k`<circle class="fp3d-cursor" cx=${this.toScreen(this._cursor)[0]} cy=${this.toScreen(this._cursor)[1]} r="4" />`:b}
    </g>`}renderGuides(){let t=this._guides,{w:e,h:n}=this._size;return k`<g pointer-events="none">
      ${t.x!==void 0?k`<line class="fp3d-guide" x1=${this.toScreen([t.x,0])[0]} y1="0" x2=${this.toScreen([t.x,0])[0]} y2=${n} />`:b}
      ${t.z!==void 0?k`<line class="fp3d-guide" x1="0" y1=${this.toScreen([0,t.z])[1]} x2=${e} y2=${this.toScreen([0,t.z])[1]} />`:b}
      ${t.point?k`<circle class="fp3d-snap" cx=${this.toScreen(t.point)[0]} cy=${this.toScreen(t.point)[1]} r="9" />`:b}
    </g>`}num(t,e,n,i=.01,r){return g`<label class="fp3d-field"
      >${t}
      <input
        type="number"
        inputmode="decimal"
        step=${i}
        min=${r??b}
        .value=${String(M(e))}
        ?disabled=${!this.isAdmin}
        @change=${s=>{let a=parseFloat(s.target.value.replace(",","."));Number.isFinite(a)&&n(a)}}
    /></label>`}renderSide(t){let e=this._doc?.floors??[],n=this.room,i=this.isAdmin,r=Object.values(this.hass?.areas??{}).sort((s,a)=>s.name.localeCompare(a.name));return this._tool==="furniture"&&t&&i?g`${this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):b} ${this.renderFurnitureLibrary()}`:g`
      ${i?b:g`<p class="fp3d-note">${this.t("read_only")}</p>`}
      <section>
        <h3>${this.t("floors")}</h3>
        <div class="fp3d-floor-list">
          ${[...e].reverse().map(s=>g`<button
              class="fp3d-chip"
              aria-pressed=${s.id===this._floorId}
              @click=${()=>{this._floorId=s.id,this._roomId=null,this._vertex=null,this._draft=[],this.fit()}}
            >
              ${s.name}
            </button>`)}
          ${i?g`<button
                class="fp3d-btn"
                aria-expanded=${this._floorMenu}
                @click=${()=>this.freeHaFloors.length?this._floorMenu=!this._floorMenu:this.addFloor()}
              >
                + ${this.t("add_floor")}
              </button>`:b}
        </div>
        ${i&&this._floorMenu?g`<div class="fp3d-floor-menu">
              <p class="fp3d-sub">${this.t("floor_from_ha")}</p>
              ${this.freeHaFloors.map(s=>g`<button class="fp3d-btn" @click=${()=>this.addFloor(s)}>
                  ${s.name}${s.level!=null?g` <span class="fp3d-sub">· ${this.t("level",{n:s.level})}</span>`:b}
                </button>`)}
              <button class="fp3d-btn" @click=${()=>this.addFloor()}>${this.t("floor_empty")}</button>
            </div>`:b}
        ${t?g`<div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${this.t("floor_name")}
                <input .value=${t.name} ?disabled=${!i} @change=${s=>this.updateFloor({name:s.target.value})}
              /></label>
              ${this.num(this.t("elevation"),t.elevation,s=>this.updateFloor({elevation:s}))}
              ${this.num(this.t("height"),t.height,s=>this.updateFloor({height:Math.max(1,s)}),.05,1)}
              ${Object.keys(this.hass?.floors??{}).length?g`<label class="fp3d-field fp3d-wide"
                    >${this.t("ha_floor")}
                    <select ?disabled=${!i} @change=${s=>this.updateFloor({ha_floor:s.target.value||null})}>
                      <option value="" ?selected=${!t.ha_floor}>${this.t("no_ha_floor")}</option>
                      ${Object.values(this.hass?.floors??{}).filter(s=>s.floor_id===t.ha_floor||!e.some(a=>a.ha_floor===s.floor_id)).map(s=>g`<option value=${s.floor_id} ?selected=${s.floor_id===t.ha_floor}>${s.name}</option>`)}
                    </select></label
                  >`:b}
              ${i&&this.unplacedAreas(t).length?g`<div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn fp3d-primary" title=${this.t("area_rooms_hint")} @click=${()=>this.addAreaRooms(t)}>
                      ${this.t("area_rooms",{n:this.unplacedAreas(t).length})}
                    </button>
                  </div>`:b}
              ${i?g`<div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn" @click=${()=>this.moveFloor(1)}>${this.t("move_up")}</button>
                    <button class="fp3d-btn" @click=${()=>this.moveFloor(-1)}>${this.t("move_down")}</button>
                    <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFloor()}>${this.t("delete_floor")}</button>
                  </div>
                  <div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn" title=${this.t("gaps_hint")} ?disabled=${t.rooms.length<2} @click=${()=>this.closeFloorGaps()}>
                      ${this.t("gaps_close")}
                    </button>
                  </div>
                  ${this._notice?g`<p class="fp3d-sub fp3d-wide fp3d-notice">${this._notice}</p>`:b}`:b}
            </div>`:b}
      </section>
      ${this._tool==="measure"&&t?this.renderMeasureForm():this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.opening?this.renderOpeningForm(this.opening):this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.device?this.renderDeviceForm(this.device):n?g`${this.renderRoomForm(n,r)} ${this.renderDeviceList(n)}`:t?this.renderRoomList(t):b}
      ${i?this.renderEnergySettings():b}
      ${i?this.renderPresenceSettings():b}
      ${t&&i?this.renderBackgroundForm(t):b} ${i?this.renderSettings():b}
      ${i?this.renderBackup():b}
    `}renderRoomList(t){return t.rooms.length?g`<section>
      <h3>${this.t("rooms")}</h3>
      <div class="fp3d-room-list">
        ${t.rooms.map(e=>g`<button class="fp3d-row" @click=${()=>this.selectItem("room",e.id)}>
            <span>${e.name}</span><span class="fp3d-muted">${this.t("area_m2",{a:T(this.hass,mt(e.points),1)})}</span>
          </button>`)}
      </div>
    </section>`:b}renderRoomForm(t,e){let n=this.isAdmin,i=ye(t.points),r=q(t.points);return g`<section>
      <h3>${this.t("room")}</h3>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("room_name")}
          <input .value=${t.name} ?disabled=${!n} @change=${s=>this.updateRoom({name:s.target.value})}
        /></label>
        <label class="fp3d-field fp3d-wide"
          >${this.t("area")}
          <select ?disabled=${!n} @change=${s=>this.setArea(s.target.value)}>
            <option value="" ?selected=${!t.area_id}>${this.t("no_area")}</option>
            ${e.map(s=>g`<option value=${s.area_id} ?selected=${s.area_id===t.area_id}>${s.name}</option>`)}
          </select></label
        >
        <label class="fp3d-field fp3d-wide"
          >${this.t("material")}
          <select ?disabled=${!n} @change=${s=>this.updateRoom({floor_material:s.target.value})}>
            ${vn.map(s=>g`<option value=${s} ?selected=${s===t.floor_material}>${this.t(`mat_${s}`)}</option>`)}
          </select></label
        >
        ${i?g`${this.num(this.t("x"),r.x0,s=>this.setRect("x",s))} ${this.num(this.t("z"),r.z0,s=>this.setRect("z",s))}
            ${this.num(this.t("width"),r.x1-r.x0,s=>this.setRect("w",s),.01,.05)}
            ${this.num(this.t("depth"),r.z1-r.z0,s=>this.setRect("d",s),.01,.05)}`:b}
      </div>
      <details class="fp3d-points" ?open=${!i}>
        <summary>${this.t("points")} (${t.points.length})</summary>
        ${t.points.map((s,a)=>g`<div class="fp3d-point ${a===this._vertex?"fp3d-point-sel":""}">
            <span class="fp3d-muted">${a+1}</span>
            ${this.num(this.t("x"),s[0],l=>this.setPoint(a,0,l))} ${this.num(this.t("z"),s[1],l=>this.setPoint(a,1,l))}
            ${n?g`<button class="fp3d-btn" title=${this.t("delete_point")} ?disabled=${t.points.length<=3} @click=${()=>this.deleteVertex(a)}>
                  ×
                </button>`:b}
          </div>`)}
      </details>
      ${n?g`<div class="fp3d-actions">
            <button class="fp3d-btn fp3d-primary" @click=${()=>this._packages=!this._packages}>${this.t("pkg_open")}</button>
            <button class="fp3d-btn" @click=${()=>this.openSpotForm(t)}>${this.t("spots_place")}</button>
            <button class="fp3d-btn" @click=${()=>this.duplicateRoom()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoom()}>${this.t("delete")}</button>
          </div>`:b}
      ${this._spots?this.renderSpotForm(t):b}
      ${this._packages?g`<div class="fp3d-packages">
            ${qn.map(s=>g`<button class="fp3d-btn" @click=${()=>this.applyPackage(t,s)}>
                <b>${this.t(`pkg_${s}`)}</b><span>${this.t(`pkg_${s}_desc`)}</span>
              </button>`)}
            <p class="fp3d-sub">${this.t("pkg_hint")}</p>
          </div>`:b}
    </section>`}applyPackage(t,e){if(!this.isAdmin)return;let n=Zn(t,e,()=>N("furniture"));this.change((i,r)=>r.furniture.push(...n)),this._packages=!1,this._notice=this.t("pkg_done",{n:n.length})}openSpotForm(t){let e=q(t.points),n=this.hass?B(this.hass,t.area_id).filter(i=>i.startsWith("light.")):[];this._spots={type:"lamp_downlight",rows:Math.max(1,Math.round((e.z1-e.z0)/1.2)),cols:Math.max(1,Math.round((e.x1-e.x0)/1.2)),entity:n[0]??null}}placeSpots(t){let e=this._spots;if(!e||!this.isAdmin)return;let[n,i,r]=et[e.type],s=be(t,e.rows,e.cols).map(([a,l])=>({id:N("furniture"),type:e.type,x:a,z:l,rotation:0,w:n,d:i,h:r,variant:null,entity:e.entity??"none",power:null}));this.change((a,l)=>l.furniture.push(...s)),this._spots=null,this._notice=this.t("spots_placed",{n:s.length})}renderSpotForm(t){let e=this._spots,n=be(t,e.rows,e.cols).length,i=this.entityOptions(s=>s.startsWith("light.")),r=s=>this._spots={...e,...s};return g`<div class="fp3d-form fp3d-spot-form">
      <label class="fp3d-field fp3d-wide"
        >${this.t("spots_type")}
        <select @change=${s=>r({type:s.target.value})}>
          ${["lamp_downlight","lamp_spot","lamp_panel","lamp_ceiling"].map(s=>g`<option value=${s} ?selected=${s===e.type}>${this.t(`furn_${s}`)}</option>`)}
        </select></label
      >
      ${this.num(this.t("spots_cols"),e.cols,s=>r({cols:Math.max(1,Math.min(12,Math.round(s)))}),1,1)}
      ${this.num(this.t("spots_rows"),e.rows,s=>r({rows:Math.max(1,Math.min(12,Math.round(s)))}),1,1)}
      ${this.entitySelect(this.t("furn_entity_light"),e.entity,void 0,i,s=>r({entity:s==="none"?null:s}))}
      <div class="fp3d-actions fp3d-wide">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!n} @click=${()=>this.placeSpots(t)}>${this.t("spots_add",{n})}</button>
        <button class="fp3d-btn" @click=${()=>this._spots=null}>${this.t("cancel")}</button>
      </div>
      <p class="fp3d-sub fp3d-wide">${this.t("spots_hint")}</p>
    </div>`}entityOptions(t){let e=n=>{let i=this.hass?.entities?.[n],r=i?.area_id??(i?.device_id?this.hass?.devices?.[i.device_id]?.area_id:null);return r?this.hass?.areas?.[r]?.name:void 0};return Object.keys(this.hass?.states??{}).filter(t).map(n=>({id:n,label:`${D(this.hass,n)}${e(n)?` \xB7 ${e(n)}`:""}`})).sort((n,i)=>n.label.localeCompare(i.label))}entitySelect(t,e,n,i,r){let s=n===void 0?null:n?this.t("entity_auto",{name:D(this.hass,n)}):this.t("entity_auto_none");return g`<label class="fp3d-field fp3d-wide"
      >${t}
      <select
        ?disabled=${!this.isAdmin}
        @change=${a=>{let l=a.target.value;r(l==="__auto"?null:l)}}
      >
        ${s!==null?g`<option value="__auto" ?selected=${e===null}>${s}</option>`:b}
        <option value="none" ?selected=${e==="none"||s===null&&e===null}>${this.t("entity_none")}</option>
        ${i.map(a=>g`<option value=${a.id} ?selected=${a.id===e}>${a.label}</option>`)}
      </select></label
    >`}renderOpeningForm(t){let e=this.isAdmin,n=t.type==="window",i=t.type==="garage",r=h=>{if(!this.hass)return null;let f=structuredClone(this._doc.floors);for(let p of f)for(let u of p.openings)u.id===t.id&&(u[h]=null);return qt(this.hass,f).get(t.id)?.[h]??null},s=h=>this.hass?.states[h]?.attributes.device_class,a=this.entityOptions(h=>h.startsWith("cover.")),l=this.entityOptions(h=>h.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(s(h)??"")),c=ve(t),d=t.type==="door";return g`<section>
      <h3>${this.t(`preset_${c}`)}</h3>
      ${e?g`<div class="fp3d-presets" role="group" aria-label=${this.t("opening_type")}>
            ${Object.keys(Kt).map(h=>g`<button class="fp3d-chip" aria-pressed=${h===c} @click=${()=>this.setOpeningPreset(t,h)}>${this.t(`preset_${h}`)}</button>`)}
          </div>`:b}
      ${e&&!i?g`<div class="fp3d-actions">
            <button class="fp3d-btn" title=${this.t("flip_hinge_hint")} @click=${()=>this.updateOpening({hinge:t.hinge==="left"?"right":"left"})}>
              ⇆ ${this.t(t.leaves===2?"flip_main_leaf":"flip_hinge")}
            </button>
            ${d?g`<button class="fp3d-btn" title=${this.t("flip_swing_hint")} @click=${()=>this.updateOpening({swing:t.swing==="out"?"in":"out"})}>
                  ⇅ ${this.t("flip_swing")}
                </button>`:b}
          </div>`:b}
      <div class="fp3d-form">
        ${this.num(this.t("width"),t.width,h=>this.updateOpening({width:Math.max(.3,h)}),.01,.3)}
        ${this.num(this.t("opening_position"),t.offset,h=>this.updateOpening({offset:Math.max(0,h)}),.01,0)}
        ${n?this.num(this.t("sill"),t.sill,h=>this.updateOpening({sill:Math.max(0,h)}),.01,0):b}
        ${this.num(this.t("opening_height"),t.height,h=>this.updateOpening({height:Math.max(.3,h)}),.01,.3)}
        ${i?b:g`<label class="fp3d-field fp3d-wide"
          >${this.t(t.leaves===2?"main_leaf":"hinge")}
          <select ?disabled=${!e} @change=${h=>this.updateOpening({hinge:h.target.value})}>
            <option value="left" ?selected=${t.hinge==="left"}>${this.t("hinge_left")}</option>
            <option value="right" ?selected=${t.hinge==="right"}>${this.t("hinge_right")}</option>
          </select></label
        >`}
        ${n||i?this.entitySelect(this.t("cover_entity"),t.cover,r("cover"),a,h=>this.updateOpening({cover:h})):b}
        ${this.entitySelect(this.t(t.leaves===2?"contact_main":"contact_entity"),t.contact,r("contact"),l,h=>this.updateOpening({contact:h}))}
        ${t.leaves===2&&!i?this.entitySelect(this.t("contact_second"),t.contact2,void 0,l,h=>this.updateOpening({contact2:h==="none"?null:h})):b}
        ${n?this.entitySelect(this.t("tilt_entity"),t.tilt,void 0,l,h=>this.updateOpening({tilt:h==="none"?null:h})):b}
      </div>
      <p class="fp3d-sub">${this.t(n?"opening_hint":i?"garage_hint":"door_hint")}</p>
      ${e?g`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOpening()}>${this.t("delete")}</button></div>`:b}
    </section>`}renderFurnitureForm(t){let e=this.isAdmin;return g`<section>
      <h3>${this.t("furniture")}</h3>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("furniture_type")}
          <select ?disabled=${!e} @change=${n=>this.updateFurniture({type:n.target.value})}>
            ${Mn.map(n=>g`<option value=${n} ?selected=${n===t.type}>${this.t(`furn_${n}`)}</option>`)}
          </select></label
        >
        ${this.num(this.t("x"),t.x,n=>this.updateFurniture({x:n}))} ${this.num(this.t("z"),t.z,n=>this.updateFurniture({z:n}))}
        ${this.num(this.t("width"),t.w,n=>this.updateFurniture({w:Math.max(.05,n)}),.01,.05)}
        ${this.num(this.t("depth"),t.d,n=>this.updateFurniture({d:Math.max(.05,n)}),.01,.05)}
        ${this.num(this.t("height_m"),t.h,n=>this.updateFurniture({h:Math.max(.005,n)}),.01,0)}
        ${this.num(this.t("rotation"),t.rotation,n=>this.updateFurniture({rotation:(n%360+360)%360}),1)}
      </div>
      ${t.type==="stairs"?g`<p class="fp3d-sub">${this.t("stairs_hint")}</p>`:b}
      ${t.type==="lamp_pendant"?g`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("pendant_shape")}
              <select ?disabled=${!e} @change=${n=>this.updateFurniture({variant:n.target.value||null})}>
                ${["","globe","cone","drum"].map(n=>g`<option value=${n} ?selected=${(t.variant??"")===n}>${this.t(`pendant_${n||"shade"}`)}</option>`)}
              </select></label
            >
          </div>`:b}
      ${An.has(t.type)?this.renderFurnitureLinks(t):b}
      ${e?g`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.rotateFurniture(-90)}>${this.t("rotate_left")}</button>
            <button class="fp3d-btn" @click=${()=>this.rotateFurniture(90)}>${this.t("rotate_right")}</button>
            <button class="fp3d-btn" @click=${()=>this.duplicateFurniture()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
          </div>`:b}
    </section>`}setEnergy(t){let e=structuredClone(this._doc);e.energy={...e.energy,...t},this.setDoc(e)}renderEnergySettings(){let t=this._doc.energy,e=(l,c)=>this.hass?.states[l]?.attributes[c],n=this.entityOptions(l=>l.startsWith("sensor.")&&e(l,"device_class")==="power"),i=this.entityOptions(l=>l.startsWith("sensor.")&&e(l,"device_class")==="battery"),r=this.entityOptions(l=>l.startsWith("sensor.")&&(e(l,"device_class")==="monetary"||/\/(kWh|MWh)$/.test(e(l,"unit_of_measurement")??""))),s=l=>c=>this.setEnergy({[l]:c==="none"?null:c}),a=t.meter?this._doc.floors.find(l=>l.id===t.meter.floor_id)?.name:null;return g`<details class="fp3d-section">
      <summary>${this.t("energy")}</summary>
      <div class="fp3d-form">
        <div class="fp3d-actions fp3d-wide">
          <button class="fp3d-btn ${this._tool==="meter"?"fp3d-primary":""}" ?disabled=${!this.floor} @click=${()=>this._tool="meter"}>
            ${this.t("energy_meter_set")}
          </button>
          ${t.meter?g`<button class="fp3d-btn fp3d-danger" @click=${()=>this.setEnergy({meter:null})}>${this.t("energy_meter_remove")}</button>`:b}
        </div>
        <p class="fp3d-sub fp3d-wide">
          ${t.meter?`${this.t("energy_meter")}: ${a??""} \xB7 ${T(this.hass,t.meter.x,2)} / ${T(this.hass,t.meter.z,2)} m`:this.t("energy_meter_hint")}
        </p>
        ${this.entitySelect(this.t("energy_grid"),t.grid,void 0,n,s("grid"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${t.grid_invert} @change=${l=>this.setEnergy({grid_invert:l.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_solar_sensor"),t.solar,void 0,n,s("solar"))}
        ${this.entitySelect(this.t("energy_battery_sensor"),t.battery,void 0,n,s("battery"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${t.battery_invert} @change=${l=>this.setEnergy({battery_invert:l.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_battery_soc"),t.battery_soc,void 0,i,s("battery_soc"))}
        ${this.entitySelect(this.t("energy_tariff_sensor"),t.tariff,void 0,r,s("tariff"))}
      </div>
      <p class="fp3d-sub">${this.t("energy_hint")}</p>
    </details>`}renderPresenceSettings(){let t=Object.keys(this.hass?.states??{}).filter(i=>i.startsWith("person.")).sort(),e=i=>{let r=i.slice(7),s=this.entityOptions(l=>l.startsWith("sensor.")),a=l=>l.includes(r)&&/(area|room|raum|bermuda|espresense)/.test(l);return[...s.filter(l=>a(l.id)),...s.filter(l=>!a(l.id))]},n=(i,r)=>{let s=structuredClone(this._doc);s.presence=s.presence.filter(a=>a.person!==i),r&&r!=="none"&&s.presence.push({person:i,sensor:r}),this.setDoc(s)};return g`<details class="fp3d-section">
      <summary>${this.t("presence")}</summary>
      <div class="fp3d-form">
        ${t.length?t.map(i=>this.entitySelect(`${D(this.hass,i)} \xB7 ${this.t("presence_sensor")}`,this._doc.presence.find(r=>r.person===i)?.sensor??null,void 0,e(i),r=>n(i,r))):g`<p class="fp3d-sub fp3d-wide">${this.t("no_persons")}</p>`}
      </div>
      <p class="fp3d-sub">${this.t("presence_hint")}</p>
    </details>`}renderFurnitureLinks(t){if(!this.hass)return b;let e=this.hass,n=l=>{let c=structuredClone(this._doc.floors);for(let d of c)for(let h of d.furniture)h.id===t.id&&(h[l]=null);return Yt(e,c).get(t.id)?.[l]??null},i=t.type==="tv_board"||t.type==="tv_wall",r=tt(t.type),s=this.entityOptions(l=>r?l.startsWith("light."):i?l.startsWith("media_player."):t.type==="radiator"?l.startsWith("climate."):/^(switch|media_player|fan|input_boolean|climate)\./.test(l)),a=this.entityOptions(l=>l.startsWith("sensor.")&&e.states[l]?.attributes.device_class==="power");return g`<div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t(r?"furn_entity_light":i?"furn_entity_tv":t.type==="radiator"?"furn_entity_climate":"furn_entity"),t.entity??null,n("entity"),s,l=>this.updateFurniture({entity:l}))}
        ${r?b:this.entitySelect(this.t("furn_power"),t.power??null,n("power"),a,l=>this.updateFurniture({power:l}))}
      </div>
      <p class="fp3d-sub">${this.t(r?t.type==="lamp_pendant"?"lamp_hint_pendant":"lamp_hint":i?"furn_links_hint_tv":"furn_links_hint")}</p>`}renderFurnitureLibrary(){let t=this.room;return g`<section>
      <h3>${this.t("furniture_add")}</h3>
      <p class="fp3d-sub">${t?this.t("furniture_into",{room:t.name}):this.t("furniture_pick_room")}</p>
      ${Object.entries(Sn).map(([e,n])=>g`<h4 class="fp3d-lib-head">${this.t(`furn_group_${e}`)}</h4>
          <div class="fp3d-library">
            ${n.map(i=>g`<button class="fp3d-btn" @click=${()=>this.addFurniture(i)}>${this.t(`furn_${i}`)}</button>`)}
          </div>`)}
    </section>`}renderDeviceForm(t){let e=this.isAdmin,n=z(t.entity_id),i=n==="light",r=t.mount??"ceiling",s=n?Gt(n,this.floor?.height??2.5,i?r:null):1;return g`<section>
      <h3>${this.t("device")}</h3>
      <p class="fp3d-dev-title">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d=${n?vt(n):""} />
        </svg>
        ${D(this.hass,t.entity_id)}
      </p>
      <div class="fp3d-form">
        ${i?g`<label class="fp3d-field fp3d-wide"
              >${this.t("lamp_mount")}
              <select ?disabled=${!e} @change=${a=>this.updateDevice({mount:a.target.value,y:null})}>
                ${["ceiling","floor","table","wall"].map(a=>g`<option value=${a} ?selected=${a===r}>${this.t(`lamp_${a}`)}</option>`)}
              </select></label
            >`:b}
        ${this.num(this.t("x"),t.x,a=>this.updateDevice({x:a}))} ${this.num(this.t("z"),t.z,a=>this.updateDevice({z:a}))}
        ${this.num(this.t("marker_height"),t.y??s,a=>this.updateDevice({y:Math.max(0,a)}),.05,0)}
      </div>
      ${e?g`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.centreDevice()}>${this.t("device_centre")}</button>
            ${t.y!==null?g`<button class="fp3d-btn" @click=${()=>this.updateDevice({y:null})}>${this.t("height_auto")}</button>`:b}
            <button
              class="fp3d-btn fp3d-danger"
              @click=${()=>{this.removeDevice(t.entity_id),this._deviceId=null}}
            >
              ${this.t("devices_remove")}
            </button>
          </div>`:b}
    </section>`}renderDeviceList(t){let e=this.isAdmin,n=this.hass,i=t.area_id?n?.areas?.[t.area_id]?.name:void 0,r=n?B(n,t.area_id).filter(p=>Ln(z(p))):[],s=new Set([...this.floor?.placements.filter(p=>P([p.x,p.z],t.points)).map(p=>p.entity_id)??[],...this.floor?.furniture.filter(p=>tt(p.type)&&p.entity&&P([p.x,p.z],t.points)).map(p=>p.entity)??[]]),a=n?Ot(n,r):[],l=a.map(p=>p.primary).filter(p=>!s.has(p)),c=this._deviceQuery.trim().toLowerCase(),d=p=>!c||D(n,p,i).toLowerCase().includes(c)||p.includes(c),h=this.floor?.placements.filter(p=>z(p.entity_id)==="light"&&(p.mount??"ceiling")==="ceiling"&&P([p.x,p.z],t.points)).length,f=(p,u=!1)=>{let _=s.has(p);return g`<div class="fp3d-row fp3d-dev-row ${u?"fp3d-dev-extra":""}">
        <button class="fp3d-dev-name ${_?"":"fp3d-muted"}" ?disabled=${!_} @click=${()=>this.selectItem("device",p)}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${vt(z(p))} />
          </svg>
          <span>${D(n,p,i)}</span>
        </button>
        ${e?_?g`<button class="fp3d-link" @click=${()=>this.removeDevice(p)}>${this.t("devices_remove")}</button>`:g`<button class="fp3d-link" @click=${()=>this.placeDevices([p])}>${this.t("devices_place")}</button>`:b}
      </div>`};return g`<section>
      <h3>${this.t("devices")}</h3>
      ${t.area_id?r.length?g`${e&&l.length?g`<button class="fp3d-btn fp3d-primary fp3d-wide-btn" @click=${()=>this.placeDevices(l)}>${this.t("devices_place_all")}</button>`:b}
              ${e&&(h??0)>=2?g`<button class="fp3d-btn fp3d-wide-btn" @click=${()=>this.spreadCeilingLights(t)}>${this.t("lights_spread")}</button>`:b}
              ${r.length>8?g`<input
                    class="fp3d-search"
                    type="search"
                    placeholder=${this.t("devices_search")}
                    .value=${this._deviceQuery}
                    @input=${p=>this._deviceQuery=p.target.value}
                  />`:b}
              <div class="fp3d-room-list">
                ${a.map(p=>{let u=p.others.filter(d),_=this._expanded.has(p.primary)||!!c&&u.length>0;return!d(p.primary)&&!u.length?b:g`${f(p.primary)}
                  ${p.others.length?g`<button
                        class="fp3d-more"
                        @click=${()=>{let v=new Set(this._expanded);v.has(p.primary)?v.delete(p.primary):v.add(p.primary),this._expanded=v}}
                      >
                        ${_?this.t("devices_less"):this.t("devices_more",{n:p.others.length})}
                      </button>`:b}
                  ${_?(c?u:p.others).map(v=>f(v,!0)):b}`})}
              </div>
              <p class="fp3d-sub">${this.t("devices_hint")}</p>`:g`<p class="fp3d-sub">${this.t("devices_none")}</p>`:g`<p class="fp3d-sub">${this.t("devices_none_area")}</p>`}
    </section>`}renderBackgroundForm(t){let e=t.background;return g`<details class="fp3d-section">
      <summary>${this.t("background")}</summary>
      <div class="fp3d-form">
        <label class="fp3d-btn fp3d-wide fp3d-upload"
          >${this.t("background_upload")}<input type="file" accept="image/png,image/jpeg,image/webp" @change=${this.uploadBackground}
        /></label>
        ${e?g`${this.num(this.t("x"),e.x,n=>this.updateFloor({background:{...e,x:n}}))}
              ${this.num(this.t("z"),e.z,n=>this.updateFloor({background:{...e,z:n}}))}
              ${this.num(this.t("background_width"),e.width,n=>this.updateFloor({background:{...e,width:Math.max(.1,n)}}),.01,.1)}
              <label class="fp3d-field"
                >${this.t("background_opacity")}
                <input
                  type="range"
                  min="0.05"
                  max="1"
                  step="0.05"
                  .value=${String(e.opacity)}
                  @change=${n=>this.updateFloor({background:{...e,opacity:parseFloat(n.target.value)}})}
              /></label>
              <button class="fp3d-btn fp3d-danger fp3d-wide" @click=${()=>this.updateFloor({background:null})}>${this.t("background_remove")}</button>`:b}
      </div>
    </details>`}async loadHistory(){if(this.hass)try{this._history=await fn(this.hass)}catch{this._history=[]}}async restoreFromHistory(t){!this.hass||!confirm(this.t("backup_restore_confirm",{time:this.snapshotTime(t)}))||(await gn(this.hass,t.id),this._notice=this.t("backup_restored"),await this.loadHistory())}exportPlan(t){let e=new Date().toISOString().slice(0,10);On(`floorplan-3d-${t?"vorlage":"sicherung"}-${e}.json`,JSON.stringify(Tn(this._doc,t),null,2))}async importPlan(t){let e=t.target,n=e.files?.[0];if(e.value="",!n||!this.hass)return;let i;try{i=Pn(await n.text())}catch(r){alert(this.t("backup_import_error",{error:r.message}));return}confirm(this.t("backup_import_confirm"))&&(await mn(this.hass).catch(()=>{}),this.setDoc(i),this._floorId=i.floors[0]?.id??null,this.selectItem("room",null),this.fit(),this._notice=this.t("backup_imported"))}snapshotTime(t){return new Date(t.saved_at*1e3).toLocaleString(this.hass?.language,{dateStyle:"short",timeStyle:"short"})}renderBackup(){return g`<details
      class="fp3d-section"
      @toggle=${t=>{t.target.open&&this.loadHistory()}}
    >
      <summary>${this.t("backup")}</summary>
      <h4 class="fp3d-lib-head">${this.t("backup_history")}</h4>
      ${this._history===null?g`<p class="fp3d-sub">${this.t("loading")}</p>`:this._history.length?g`<div class="fp3d-room-list">
              ${this._history.map(t=>g`<div class="fp3d-row fp3d-dev-row">
                  <span>${this.snapshotTime(t)} <span class="fp3d-muted">· ${this.t("backup_summary",{rooms:t.rooms,furniture:t.furniture})}</span></span>
                  <button class="fp3d-link" @click=${()=>this.restoreFromHistory(t)}>${this.t("backup_restore")}</button>
                </div>`)}
            </div>`:g`<p class="fp3d-sub">${this.t("backup_none")}</p>`}
      <h4 class="fp3d-lib-head">${this.t("backup_file")}</h4>
      <div class="fp3d-actions">
        <button class="fp3d-btn" @click=${()=>this.exportPlan(!1)}>${this.t("backup_export")}</button>
        <button class="fp3d-btn" title=${this.t("backup_export_share_hint")} @click=${()=>this.exportPlan(!0)}>${this.t("backup_export_share")}</button>
        <label class="fp3d-btn fp3d-upload"
          >${this.t("backup_import")}<input type="file" accept="application/json,.json" @change=${this.importPlan}
        /></label>
      </div>
      <p class="fp3d-sub">${this.t("backup_hint")}</p>
    </details>`}renderSettings(){let t=this._doc.settings,e=n=>{let i=structuredClone(this._doc);Object.assign(i.settings,n),this.setDoc(i)};return g`<details class="fp3d-section">
      <summary>${this.t("settings")}</summary>
      <div class="fp3d-form">
        ${this.num(this.t("wall_exterior"),t.wall_exterior,n=>e({wall_exterior:Math.min(1,Math.max(.02,n))}),.01,.02)}
        ${this.num(this.t("wall_interior"),t.wall_interior,n=>e({wall_interior:Math.min(1,Math.max(.02,n))}),.01,.02)}
        ${this.num(this.t("grid"),t.grid,n=>e({grid:Math.min(1,Math.max(.01,n))}),.01,.01)}
        ${this.num(this.t("north"),t.north,n=>e({north:(Math.round(n)%360+360)%360}),1)}
        <label class="fp3d-field fp3d-wide"
          >${this.t("roof")}
          <select @change=${n=>e({roof:{...t.roof,type:n.target.value}})}>
            ${["none","flat","gable"].map(n=>g`<option value=${n} ?selected=${n===t.roof.type}>${this.t(`roof_${n}`)}</option>`)}
          </select></label
        >
        ${t.roof.type==="gable"?this.num(this.t("roof_pitch"),t.roof.pitch,n=>e({roof:{...t.roof,pitch:Math.min(60,Math.max(5,n))}}),1,5):b}
        ${t.roof.type!=="none"?this.num(this.t("roof_overhang"),t.roof.overhang,n=>e({roof:{...t.roof,overhang:Math.min(2,Math.max(0,n))}}),.05,0):b}
      </div>
      <p class="fp3d-sub">${this.t("north_hint")}</p>
    </details>`}static styles=[J,yt,W`
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
    `]};customElements.get("fp3d-editor")||customElements.define("fp3d-editor",ze);var st=(o,t)=>I(o,t);function j(o,t){if(!t||H(t))return st(o,"state_unavailable");let e=t.attributes;switch(z(t.entity_id)){case"light":return t.state!=="on"?st(o,"state_off"):typeof e.brightness=="number"?`${Math.round(e.brightness/255*100)} %`:st(o,"state_on");case"switch":case"fan":return st(o,t.state==="on"?"state_on":"state_off");case"cover":return typeof e.current_position=="number"&&t.state!=="opening"&&t.state!=="closing"?`${e.current_position} %`:ee(o,t.state);case"climate":{let n=typeof e.current_temperature=="number"?`${T(o,e.current_temperature,1)} \xB0C`:null;return t.state==="off"?n?`${n} \xB7 ${st(o,"state_off")}`:st(o,"state_off"):n??ee(o,t.state)}case"media":{let n=t.state==="playing"||t.state==="paused"||t.state==="on"||t.state==="idle",i=[e.app_name,e.media_title,e.source].find(r=>typeof r=="string"&&r);return n&&i?i:ee(o,t.state)}case"lock":case"camera":return ee(o,t.state);case"binary":return["door","window","opening","garage_door"].includes(e.device_class)?st(o,t.state==="on"?"state_open":"state_closed"):st(o,t.state==="on"?"state_detected":"state_clear");case"sensor":{let n=Number(t.state),i=e.unit_of_measurement??"";return Number.isFinite(n)?`${T(o,n,1)}${i?` ${i}`:""}`:t.state}default:return""}}function ee(o,t){let e=`state_${t}`,n=I(o,e);return n===e?t:n}function ri(o,t){let e=[];for(let n of t.floors)for(let i of n.placements){let r=z(i.entity_id),s=o.states[i.entity_id];if(!r||!s)continue;let a=n.rooms.find(c=>c.points.length>=3&&P([i.x,i.z],c.points))??null,l=a?.area_id?o.areas?.[a.area_id]?.name:void 0;e.push({id:i.entity_id,floorId:n.id,roomId:a?.id??null,x:i.x,z:i.z,y:i.y??Gt(r,n.height,i.mount??null),lamp:r==="light"?i.mount??"ceiling":null,icon:Ht(r),name:D(o,i.entity_id,l),text:j(o,s),active:_t(s),unavailable:H(s),glow:r==="light"?jt(s):null})}return e}function si(o){return o.floors.flatMap(t=>t.placements.map(e=>e.entity_id))}function wt(o,t){o.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}function oi(o,t){let e=t.slice(0,t.indexOf("."));return o.callService(e,"toggle",{entity_id:t})}var wr=4,xr=3e3,$r=8,kr=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[255,95,210],[120,255,150]],xt=o=>g`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${vt(o)} />
  </svg>`,ne={previous:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z"},Ae=o=>g`<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d=${o} /></svg>`,Ie=class extends V{static properties={hass:{attribute:!1},room:{attribute:!1},_showAll:{state:!0},_tick:{state:!0}};cameraTimer;hasCameras=!1;constructor(){super(),this.room=null,this._showAll=!1,this._tick=0}connectedCallback(){super.connectedCallback(),this.cameraTimer=setInterval(()=>{this.hasCameras&&!document.hidden&&this._tick++},xr)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.cameraTimer)}t(t,e){return I(this.hass,t,e)}call(t,e,n){this.hass.callService(t,e,n)}get areaName(){return this.room?.area_id?this.hass.areas?.[this.room.area_id]?.name:void 0}name(t){return D(this.hass,t,this.areaName)}nameButton(t){return g`<button class="fp3d-rp-name" title=${this.t("details")} @click=${()=>wt(this,t)}>${this.name(t)}</button>`}toggle(t,e,n){return g`<button
      class="fp3d-switch"
      role="switch"
      aria-checked=${e?"true":"false"}
      aria-label=${this.name(t.entity_id)}
      ?disabled=${H(t)}
      @click=${n}
    ></button>`}render(){let t=this.room;if(!t||!this.hass)return b;let e=B(this.hass,t.area_id),n=Ot(this.hass,e),i=n.reduce((y,m)=>y+m.others.length,0),r=this._showAll?e:n.map(y=>y.primary),s=y=>r.filter(m=>y.includes(z(m))).map(m=>this.hass.states[m]),a=s(["light"]),l=s(["cover"]),c=s(["climate"]),d=s(["media"]),h=s(["switch","fan","lock"]),f=s(["sensor","binary"]),p=s(["camera"]);this.hasCameras=p.length>0;let u=s(["scene","script"]),_=this.facts(f,c),v=a.filter(y=>y.state==="on");return g`<section class="fp3d-rp" aria-label=${t.name}>
      <header class="fp3d-rp-head">
        <div>
          <h2>${t.name}</h2>
          ${_.length?g`<p class="fp3d-rp-facts">${_.join(" \xB7 ")}</p>`:b}
        </div>
        <button class="fp3d-rp-close" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>
      <div class="fp3d-rp-body">
        ${t.area_id?r.length?b:g`<p class="fp3d-rp-note">${this.t("panel_empty")}</p>`:g`<p class="fp3d-rp-note">${this.t("panel_no_area")}</p>`}
        ${a.length?this.section("panel_lights",a.map(y=>this.lightRow(y)),v.length?g`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_off",{entity_id:v.map(y=>y.entity_id)})}>
                    ${this.t("panel_all_off")}
                  </button>`:b):b}
        ${l.length?this.section("panel_covers",l.map(y=>this.coverRow(y))):b}
        ${c.length?this.section("panel_climate",c.map(y=>this.climateRow(y))):b}
        ${d.length?this.section("panel_media",d.map(y=>this.mediaRow(y))):b}
        ${h.length?this.section("panel_switches",h.map(y=>this.switchRow(y))):b}
        ${p.length?this.section("panel_cameras",p.map(y=>this.cameraTile(y))):b}
        ${f.length?this.section("panel_sensors",f.map(y=>this.sensorRow(y))):b}
        ${u.length?this.section("panel_scenes",[g`<div class="fp3d-rp-scenes">
                  ${u.map(y=>g`<button
                      class="fp3d-btn"
                      ?disabled=${H(y)}
                      @click=${()=>this.call(z(y.entity_id)==="scene"?"scene":"script","turn_on",{entity_id:y.entity_id})}
                    >
                      ${this.name(y.entity_id)}
                    </button>`)}
                </div>`]):b}
        ${i?g`<button class="fp3d-btn fp3d-rp-small fp3d-rp-more" @click=${()=>this._showAll=!this._showAll}>
              ${this._showAll?this.t("panel_less"):this.t("panel_more",{n:i})}
            </button>`:b}
      </div>
    </section>`}facts(t,e){let n=[],i=t.find(a=>a.attributes.device_class==="temperature"&&!H(a)),r=e.find(a=>typeof a.attributes.current_temperature=="number");i?n.push(j(this.hass,i)):r&&n.push(`${T(this.hass,r.attributes.current_temperature,1)} \xB0C`);let s=t.find(a=>a.attributes.device_class==="humidity"&&!H(a));return s&&n.push(j(this.hass,s)),n}section(t,e,n=b){return g`<div class="fp3d-rp-sec">
      <div class="fp3d-rp-sec-head"><h3>${this.t(t)}</h3>${n}</div>
      ${e}
    </div>`}lightRow(t){let e=t.attributes,n=t.state==="on",i=e.supported_color_modes??[],r=i.some(f=>f!=="onoff"),s=i.includes("color_temp"),a=i.some(f=>["hs","rgb","rgbw","rgbww","xy"].includes(f)),l=typeof e.brightness=="number"?Math.round(e.brightness/255*100):100,c=e.min_color_temp_kelvin??2200,d=e.max_color_temp_kelvin??6500,h=t.entity_id;return g`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${xt("light")}</span>
      ${this.nameButton(h)}
      <span class="fp3d-rp-state">${j(this.hass,t)}</span>
      ${this.toggle(t,n,()=>this.call("light","toggle",{entity_id:h}))}
      ${n&&r?g`<label class="fp3d-rp-slider"
            ><span>${this.t("brightness")}</span>
            <input
              type="range"
              min="1"
              max="100"
              .value=${String(l)}
              @change=${f=>this.call("light","turn_on",{entity_id:h,brightness_pct:Number(f.target.value)})}
          /></label>`:b}
      ${n&&s?g`<label class="fp3d-rp-slider fp3d-rp-ct"
            ><span>${this.t("color_temp")}</span>
            <input
              type="range"
              min=${c}
              max=${d}
              step="50"
              .value=${String(e.color_temp_kelvin??c)}
              @change=${f=>this.call("light","turn_on",{entity_id:h,color_temp_kelvin:Number(f.target.value)})}
          /></label>`:b}
      ${n&&a?g`<div class="fp3d-rp-swatches" role="group" aria-label=${this.t("color")}>
            ${kr.map(f=>g`<button
                class="fp3d-rp-swatch"
                style="--c: rgb(${f.join(",")})"
                aria-label="rgb(${f.join(", ")})"
                @click=${()=>this.call("light","turn_on",{entity_id:h,rgb_color:f})}
              ></button>`)}
          </div>`:b}
    </div>`}coverRow(t){let e=t.attributes,n=e.supported_features??0,i=t.entity_id,r=H(t);return g`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon">${xt("cover")}</span>
      ${this.nameButton(i)}
      <span class="fp3d-rp-state">${j(this.hass,t)}</span>
      <div class="fp3d-rp-buttons">
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${()=>this.call("cover","open_cover",{entity_id:i})}>${this.t("cover_open")}</button>
        ${n&$r?g`<button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${()=>this.call("cover","stop_cover",{entity_id:i})}>${this.t("cover_stop")}</button>`:b}
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${()=>this.call("cover","close_cover",{entity_id:i})}>${this.t("cover_close")}</button>
      </div>
      ${n&wr&&typeof e.current_position=="number"?g`<label class="fp3d-rp-slider"
            ><span>${this.t("position")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${r}
              .value=${String(e.current_position)}
              @change=${s=>this.call("cover","set_cover_position",{entity_id:i,position:Number(s.target.value)})}
          /></label>`:b}
    </div>`}climateRow(t){let e=t.attributes,n=t.entity_id,i=typeof e.temperature=="number"?e.temperature:null,r=e.target_temp_step??.5,s=e.min_temp??5,a=e.max_temp??30,l=e.hvac_modes??[],c=d=>this.call("climate","set_temperature",{entity_id:n,temperature:Math.min(a,Math.max(s,Math.round(d/r)*r))});return g`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${e.hvac_action==="heating"?"fp3d-rp-on":""}">${xt("climate")}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${j(this.hass,t)}</span>
      ${i!==null?g`<div class="fp3d-rp-stepper fp3d-rp-wide">
            <button class="fp3d-btn" aria-label=${this.t("temp_down")} @click=${()=>c(i-r)}>−</button>
            <span><small>${this.t("target_temp")}</small> ${T(this.hass,i,1)} °C</span>
            <button class="fp3d-btn" aria-label=${this.t("temp_up")} @click=${()=>c(i+r)}>+</button>
          </div>`:b}
      ${l.length>1?g`<div class="fp3d-rp-chips">
            ${l.map(d=>g`<button
                class="fp3d-chip"
                aria-pressed=${t.state===d}
                @click=${()=>this.call("climate","set_hvac_mode",{entity_id:n,hvac_mode:d})}
              >
                ${this.stateLabel(d)}
              </button>`)}
          </div>`:b}
    </div>`}stateLabel(t){let e=`state_${t}`,n=this.t(e);return n===e?t:n}mediaRow(t){let e=t.attributes,n=t.entity_id,i=H(t)||t.state==="off",r=[e.media_title,e.media_artist].filter(s=>typeof s=="string"&&s).join(" \xB7 ");return g`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${t.state==="playing"?"fp3d-rp-on":""}">${xt("media")}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${this.stateLabel(t.state)}</span>
      ${r?g`<p class="fp3d-rp-media fp3d-rp-wide">${r}</p>`:b}
      <div class="fp3d-rp-buttons fp3d-rp-wide">
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("previous")} ?disabled=${i} @click=${()=>this.call("media_player","media_previous_track",{entity_id:n})}>
          ${Ae(ne.previous)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("play_pause")} ?disabled=${H(t)} @click=${()=>this.call("media_player","media_play_pause",{entity_id:n})}>
          ${Ae(t.state==="playing"?ne.pause:ne.play)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("next")} ?disabled=${i} @click=${()=>this.call("media_player","media_next_track",{entity_id:n})}>
          ${Ae(ne.next)}
        </button>
      </div>
      ${typeof e.volume_level=="number"?g`<label class="fp3d-rp-slider"
            ><span>${this.t("volume")}</span>
            <input
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(e.volume_level*100))}
              @change=${s=>this.call("media_player","volume_set",{entity_id:n,volume_level:Number(s.target.value)/100})}
          /></label>`:b}
    </div>`}switchRow(t){let e=t.entity_id,n=z(e),i=e.slice(0,e.indexOf(".")),r=n==="lock"?t.state==="unlocked"||t.state==="open":t.state==="on",s=()=>n==="lock"?this.call("lock",r?"lock":"unlock",{entity_id:e}):this.call(i,"toggle",{entity_id:e});return g`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${r?"fp3d-rp-on":""}">${xt(n)}</span>
      ${this.nameButton(e)}
      <span class="fp3d-rp-state">${j(this.hass,t)}</span>
      ${this.toggle(t,r,s)}
    </div>`}cameraTile(t){let e=t.attributes.entity_picture,n=e&&!H(t)?e.startsWith("data:")?e:`${e}${e.includes("?")?"&":"?"}fp3d=${this._tick}`:null;return g`<button class="fp3d-rp-camera" title=${this.t("camera_live")} @click=${()=>wt(this,t.entity_id)}>
      ${n?g`<img src=${n} alt=${this.name(t.entity_id)} loading="lazy" />`:g`<span class="fp3d-rp-note">${j(this.hass,t)}</span>`}
      <span class="fp3d-rp-camera-name">${this.name(t.entity_id)}</span>
    </button>`}sensorRow(t){let e=z(t.entity_id),n=e==="binary"&&t.state==="on";return g`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${xt(e)}</span>
      ${this.nameButton(t.entity_id)}
      <span class="fp3d-rp-state">${j(this.hass,t)}</span>
    </div>`}fire(t){this.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0}))}static styles=[J,yt,W`
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
    `]};customElements.get("fp3d-room-panel")||customElements.define("fp3d-room-panel",Ie);var pt=.03,Mr=.07;function $t(o,t=!1){if(!o)return null;let e=Number(o.state);if(!Number.isFinite(e))return null;let n=String(o.attributes.unit_of_measurement??"W"),i=n==="kW"?e*1e3:n==="MW"?e*1e6:e;return t?-i:i}function ai(o,t){return t.startsWith("sensor.")&&o.states[t]?.attributes.device_class==="power"}function Re(o,t){if(ai(o,t))return t;let e=o.entities?.[t]?.device_id;return!e||!o.entities?null:Object.values(o.entities).find(i=>i.device_id===e&&i.entity_id!==t&&ai(o,i.entity_id))?.entity_id??null}function ci(o,t){let e=t.energy,n=new Set([e.grid,e.solar,e.battery].filter(Boolean)),i=[],r=new Set;for(let s of t.floors)for(let a of s.placements){let l=Re(o,a.entity_id);!l||n.has(l)||r.has(l)||(r.add(l),i.push({id:a.entity_id,powerEntity:l,floorId:s.id,x:a.x,z:a.z,power:Math.max(0,$t(o.states[l])??0)}))}return i}function pi(o,t,e){let n=t.energy,i=n.grid?$t(o.states[n.grid],n.grid_invert):null,r=n.solar?$t(o.states[n.solar]):null,s=n.battery?$t(o.states[n.battery],n.battery_invert):null,a=n.battery_soc?Number(o.states[n.battery_soc]?.state):NaN,l=n.tariff?o.states[n.tariff]:void 0,c=Number(l?.state),d=null;return i!==null||r!==null||s!==null?d=Math.max(0,(i??0)+Math.max(0,r??0)+(s??0)):e.length&&(d=e.reduce((h,f)=>h+f.power,0)),{grid:i,solar:r===null?null:Math.max(0,r),battery:s,soc:Number.isFinite(a)?a:null,tariff:l&&Number.isFinite(c)?{value:c,unit:String(l.attributes.unit_of_measurement??"")}:null,consumption:d}}function ie(o,t){return o.pos.push(t),o.adj.push([]),o.pos.length-1}function kt(o,t,e){let n=Math.hypot(o.pos[t][0]-o.pos[e][0],o.pos[t][1]-o.pos[e][1]);o.adj[t].push({to:e,w:n}),o.adj[e].push({to:t,w:n})}function Sr(o,t){let e=o.length,n=o.map((i,r)=>{let s=o[(r+1)%e],a=s[0]-i[0],l=s[1]-i[1],c=Math.hypot(a,l)||1,d=-l/c,h=a/c;return{p:[i[0]+d*t[r],i[1]+h*t[r]],d:[a/c,l/c],n:[d,h]}});return o.map((i,r)=>{let s=n[(r-1+e)%e],a=n[r],l=s.d[0]*a.d[1]-s.d[1]*a.d[0];if(Math.abs(l)<1e-6)return[i[0]+a.n[0]*t[r],i[1]+a.n[1]*t[r]];let c=((a.p[0]-s.p[0])*a.d[1]-(a.p[1]-s.p[1])*a.d[0])/l;return[s.p[0]+s.d[0]*c,s.p[1]+s.d[1]*c]})}function Er(o){return U(o.points)>=0?{pts:o.points,flipped:!1}:{pts:[...o.points].reverse(),flipped:!0}}function zr(o,t,e){let n={pos:[],adj:[],rings:new Map},{walls:i}=Dt(o.rooms,{exterior:t,interior:e});for(let r of o.rooms){if(r.points.length<3)continue;let{pts:s,flipped:a}=Er(r),l=s.length,c=s.map((f,p)=>{let u=a?(l-2-p+l)%l:p,_=i.some(v=>!v.exterior&&v.sources.some(y=>y.room_id===r.id&&y.edge===u));return Mr+(_?e/2:0)}),d=Sr(s,c).map(f=>ie(n,f)),h=d.map((f,p)=>[f,d[(p+1)%l]]);for(let[f,p]of h)kt(n,f,p);n.rings.set(r.id,h)}for(let r of i){if(r.exterior||!r.roomLeft||!r.roomRight)continue;let s=[(r.a[0]+r.b[0])/2,(r.a[1]+r.b[1])/2],a=re(n,r.roomLeft,s),l=re(n,r.roomRight,s);a!==null&&l!==null&&kt(n,a,l)}return n}function re(o,t,e){let n=o.rings.get(t);if(!n)return null;let i=null;for(let s of n){let a=o.pos[s[0]],l=o.pos[s[1]],c=l[0]-a[0],d=l[1]-a[1],h=c*c+d*d||1,f=Math.min(1,Math.max(0,((e[0]-a[0])*c+(e[1]-a[1])*d)/h)),p=[a[0]+c*f,a[1]+d*f],u=Math.hypot(e[0]-p[0],e[1]-p[1]);(!i||u<i.d)&&(i={seg:s,q:p,d:u})}if(!i)return null;let r=ie(o,i.q);return kt(o,r,i.seg[0]),kt(o,r,i.seg[1]),r}function li(o,t){let e=o.rooms.filter(r=>r.points.length>=3),n=e.find(r=>P(t,r.points));if(n)return n;let i=null;for(let r of e)for(let s of r.points){let a=Math.hypot(t[0]-s[0],t[1]-s[1]);(!i||a<i.d)&&(i={room:r,d:a})}return i?.room??null}function Ar(o,t){let e=o.pos.map(()=>1/0),n=o.pos.map(()=>-1),i=o.pos.map(()=>!1);for(e[t]=0;;){let r=-1;for(let s=0;s<e.length;s++)!i[s]&&e[s]<1/0&&(r<0||e[s]<e[r])&&(r=s);if(r<0)break;i[r]=!0;for(let{to:s,w:a}of o.adj[r])e[r]+a<e[s]-1e-9&&(e[s]=e[r]+a,n[s]=r)}return{dist:e,prev:n}}var di=new WeakMap;function Ir(o,t){let e=o.energy.meter,n=o.floors.find(d=>d.id===e.floor_id),i=[],{wall_exterior:r,wall_interior:s}=o.settings,a=new Map,l=new Map;t.forEach((d,h)=>l.set(d.floorId,[...l.get(d.floorId)??[],h]));let c=o.floors.filter(d=>l.has(d.id));for(let d of c){if(d.id===n.id)continue;let h=d.elevation>n.elevation,f=l.get(d.id),p=f.every(_=>t[_].kind==="battery")?"battery":"consumer";i.push({floorId:n.id,a:[e.x,pt,e.z],b:[e.x,h?n.height:-.2,e.z],dist:0,members:f,kind:p});let u=Math.abs(d.elevation-n.elevation);i.push({floorId:d.id,a:[e.x,h?-.2:d.height,e.z],b:[e.x,pt,e.z],dist:u,members:f,kind:p}),a.set(d.id,u+.25)}for(let d of c){let h=zr(d,r,s),f=li(d,[e.x,e.z]);if(!f)continue;let p=ie(h,[e.x,e.z]),u=re(h,f.id,[e.x,e.z]);if(u===null)continue;kt(h,p,u);let _=[];for(let $ of l.get(d.id)){let x=t[$],S=li(d,[x.x,x.z]);if(!S)continue;let E=ie(h,[x.x,x.z]),A=re(h,S.id,[x.x,x.z]);A!==null&&(kt(h,E,A),_.push({node:E,member:$}))}let{dist:v,prev:y}=Ar(h,p),m=new Map;for(let $ of _)if(Number.isFinite(v[$.node]))for(let x=$.node;y[x]>=0;x=y[x]){let S=y[x],E=`${S}>${x}`,A=m.get(E)??{a:S,b:x,members:[]};A.members.push($.member),m.set(E,A)}let w=a.get(d.id)??0;for(let{a:$,b:x,members:S}of m.values()){let E=h.pos[$],A=h.pos[x],R=S.every(Y=>t[Y].kind==="battery")?"battery":"consumer";i.push({floorId:d.id,a:[E[0],pt,E[1]],b:[A[0],pt,A[1]],dist:w+v[$],members:S,kind:R})}}return i}function hi({building:o,consumers:t,summary:e,battery:n}){let i=o.energy.meter;if(!i)return[];let r=o.floors.find(p=>p.id===i.floor_id);if(!r)return[];let{wall_exterior:s,wall_interior:a}=o.settings,l=t.map(p=>({floorId:p.floorId,x:p.x,z:p.z,kind:"consumer",power:p.power}));n&&e.battery!==null&&l.push({...n,kind:"battery",power:Math.abs(e.battery)});let c=`${i.floor_id}:${i.x},${i.z}|${l.map(p=>`${p.floorId}:${p.x},${p.z}:${p.kind}`).join(";")}`,d=di.get(o);d||di.set(o,d=new Map);let h=d.get(c);h||(h=Ir(o,l),d.clear(),d.set(c,h));let f=h.map(p=>({floorId:p.floorId,a:p.a,b:p.b,dist:p.dist,power:p.members.reduce((u,_)=>u+l[_].power,0),kind:p.kind}));if(e.grid!==null){let{walls:p}=Dt(r.rooms,{exterior:s,interior:a}),u=null;for(let _ of p){if(!_.exterior)continue;let v=_.b[0]-_.a[0],y=_.b[1]-_.a[1],m=v*v+y*y||1,w=Math.min(1,Math.max(0,((i.x-_.a[0])*v+(i.z-_.a[1])*y)/m)),$=[_.a[0]+v*w,_.a[1]+y*w],x=Math.hypot(i.x-$[0],i.z-$[1]),S=Math.sqrt(m);(!u||x<u.d)&&(u={q:$,out:[y/S,-v/S],d:x})}if(u){let _=[u.q[0]+u.out[0]*(s+1.4),pt,u.q[1]+u.out[1]*(s+1.4)],v=[i.x,pt,i.z],y=e.grid>=0;f.push({floorId:r.id,a:y?_:v,b:y?v:_,dist:0,power:Math.abs(e.grid),kind:y?"grid":"export"})}}if(e.solar!==null&&f.push({floorId:r.id,a:[i.x+.08,r.height+.6,i.z+.08],b:[i.x+.08,pt,i.z+.08],dist:0,power:e.solar,kind:"solar"}),e.battery!==null&&e.battery>0)for(let p of f)p.kind==="battery"&&([p.a,p.b]=[p.b,p.a]);return f}function ui(o,t){let e=[.22,.88,1],n=[1,.78,.2],i=[.35,1,.55];if(o==="grid")return e;if(o==="export"||o==="solar")return n;if(o==="battery")return i;let r=[[Math.max(0,t.grid??0),e],[Math.max(0,(t.solar??0)-Math.max(0,-(t.grid??0))-Math.max(0,-(t.battery??0))),n],[Math.max(0,t.battery??0),i]],[s]=r.reduce((a,l)=>l[0]>a[0]?l:a);return s>0?r.find(a=>a[0]===s)[1]:e}var Fe=["neon","blueprint","day"],Te={neon:{night:[[11,17,32],[7,11,20]],day:[[26,44,78],[12,20,36]]},blueprint:{night:[[26,70,130],[10,38,78]],day:[[34,86,150],[14,48,96]]},day:{night:[[214,224,238],[176,190,210]],day:[[242,246,251],[205,216,230]]}};var Lt={temperature:{deviceClass:"temperature",unit:"\xB0C",stops:[[17,[.24,.48,1]],[20.5,[.2,.9,.7]],[23,[1,.75,.25]],[25.5,[1,.32,.2]]]},humidity:{deviceClass:"humidity",unit:"%",stops:[[30,[1,.6,.2]],[45,[.3,.9,.5]],[60,[.2,.8,1]],[75,[.3,.4,1]]]},co2:{deviceClass:"carbon_dioxide",unit:"ppm",stops:[[450,[.3,.9,.5]],[800,[1,.85,.3]],[1200,[1,.5,.2]],[1600,[1,.25,.25]]]}};function fi(o,t){let e=Lt[o].stops;if(t<=e[0][0])return e[0][1];for(let n=1;n<e.length;n++){let[i,r]=e[n],[s,a]=e[n-1];if(t<=i){let l=(t-s)/(i-s);return[a[0]+(r[0]-a[0])*l,a[1]+(r[1]-a[1])*l,a[2]+(r[2]-a[2])*l]}}return e[e.length-1][1]}function mi(o,t,e){let n=new Map,i=Lt[e].deviceClass;for(let r of t.floors)for(let s of r.rooms){let a=B(o,s.area_id).filter(l=>l.startsWith("sensor.")&&o.states[l]?.attributes.device_class===i).map(l=>Number(o.states[l].state)).filter(l=>Number.isFinite(l));a.length&&n.set(s.id,a.reduce((l,c)=>l+c,0)/a.length)}return n}function gi(o){let t=Lt[o].stops,e=t[0][0],n=t[t.length-1][0];return`linear-gradient(90deg, ${t.map(([i,r])=>`rgb(${r.map(s=>Math.round(s*255)).join(",")}) ${Math.round((i-e)/(n-e)*100)}%`).join(", ")})`}var Rr=new URL(import.meta.url),Fr=new URL("./floorplan-3d-3d.js?v=c9e9fff681a4",Rr).href,_i;function bi(){return _i??=import(Fr),_i}var vi=o=>o.toLowerCase().replace(/[_\-]+/g," ").replace(/\s+/g," ").trim();function Tr(o,t,e){let n=vi(e);if(!n||n==="unknown"||n==="unavailable"||n==="not home"||n==="away")return null;for(let i of t.floors)for(let r of i.rooms)if([r.name,r.area_id??"",r.area_id?o.areas?.[r.area_id]?.name??"":""].filter(Boolean).map(vi).includes(n))return{floorId:i.id,room:r};return null}function Pr(o){let t=o.trim().split(/\s+/).filter(Boolean);return t.length?(t.length>1?t[0][0]+t[t.length-1][0]:t[0].slice(0,2)).toUpperCase():"?"}function yi(o,t){let e=[],n=new Map;for(let i of t.presence){let r=o.states[i.person];if(!r||!i.sensor||r.state!=="home"&&r.state!=="on")continue;let s=o.states[i.sensor];if(!s)continue;let a=Tr(o,t,s.state);if(!a)continue;let l=n.get(a.room.id)??0;n.set(a.room.id,l+1);let[c,d]=Q(a.room.points),h=-Math.PI/2+.9+l*1.15,f=.75,p=r.attributes.friendly_name??i.person;e.push({id:i.person,name:p,initials:Pr(p),picture:r.attributes.entity_picture??null,floorId:a.floorId,roomId:a.room.id,x:c+Math.cos(h)*f,z:d+Math.sin(h)*f})}return e}function wi(o,t,e,n){let i=new Map,r=s=>!!s&&o.states[s]?.state==="on";for(let s of t.floors){let a=new Set;for(let c of s.rooms)for(let d of ke(o,B(o,c.area_id)))z(d)==="light"&&a.add(d);for(let c of s.placements)z(c.entity_id)==="light"&&a.add(c.entity_id);let l=s.openings.filter(c=>{let d=e.get(c.id);return d?c.type==="garage"?(Zt(o,d,"garage").cover??1)<.95:r(d.contact)||r(d.tilt)||r(d.contact2??null):!1}).length;i.set(s.id,{rooms:s.rooms.length,lightsOn:[...a].filter(c=>o.states[c]?.state==="on").length,open:l,persons:n.filter(c=>c.floorId===s.id).length})}return i}function xi(o,t){let e=[t.rooms===1?I(o,"floor_rooms_one"):I(o,"floor_rooms",{n:t.rooms})];return t.lightsOn&&e.push(I(o,"floor_lights",{n:t.lightsOn})),t.open&&e.push(I(o,"floor_open",{n:t.open})),t.persons&&e.push(I(o,"floor_persons",{n:t.persons})),e.join(" \xB7 ")}var Or={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"},Pe=class extends V{static properties={hass:{attribute:!1},building:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},wallMode:{attribute:!1},explode:{type:Boolean},markerMode:{attribute:!1},heatMode:{attribute:!1},theme:{attribute:!1},furnish:{type:Boolean},selectedFurniture:{attribute:!1},_sky:{state:!0},quality:{attribute:!1},showStats:{type:Boolean},_stats:{state:!0},_error:{state:!0},_energy:{state:!0},_flows:{state:!0}};viewer=null;starting=!1;shownStates=new Map;openingLinks=null;linkedRegistry;furnitureLinks=new Map;heatValues=new Map;watched=[];constructor(){super(),this.building=null,this.floorId=null,this.roomId=null,this.wallMode="auto",this.explode=!0,this.markerMode="important",this.heatMode="none",this.theme="neon",this.furnish=!1,this.selectedFurniture=null,this._sky=0,this.quality="auto",this.showStats=!1,this._stats=null,this._error=null,this._energy=null;try{this._flows=localStorage.getItem("floorplan_3d.flows")==="1"}catch{this._flows=!1}}connectedCallback(){super.connectedCallback(),this.hasUpdated&&!this.viewer&&this.start()}disconnectedCallback(){super.disconnectedCallback(),this.viewer?.dispose(),this.viewer=null}firstUpdated(){this.start()}async start(){if(!(this.starting||this.viewer)){this.starting=!0;try{let t=await bi();if(!this.isConnected)return;let e=this.renderRoot.querySelector(".fp3d-stage");this.viewer=t.createViewer(e,{quality:this.quality,explode:this.explode,onRoomTap:(n,i)=>this.fire("room-tap",{floorId:n,roomId:i}),onFloorTap:n=>this.fire("floor-tap",{floorId:n}),floorInfo:n=>n.rooms.length===1?I(this.hass,"floor_rooms_one"):I(this.hass,"floor_rooms",{n:n.rooms.length}),onBack:()=>this.fire("back",{}),onDeviceTap:n=>this.onDeviceTap(n),onDeviceHold:n=>wt(this,n),onFurnitureSelect:n=>this.fire("furniture-select",{id:n}),onFurnitureMove:(n,i,r)=>this.fire("furniture-move",{id:n,x:i,z:r}),onStats:n=>{this.showStats&&(this._stats=n)}}),this.viewer.setWallMode(this.wallMode),this.viewer.setTheme(this.theme),this.viewer.setFurnishMode(this.furnish),this.building&&this.viewer.setBuilding(this.building),this.syncDevices(!0),this.viewer.setFloor(this.floorId,!1),this.roomId&&this.viewer.selectRoom(this.roomId)}catch(t){this._error=String(t)}finally{this.starting=!1}}}updated(t){let e=this.viewer;e&&(t.has("building")&&this.building&&e.setBuilding(this.building),(t.has("building")||t.has("hass")||t.has("markerMode")||t.has("heatMode"))&&this.syncDevices(t.has("building")||t.has("markerMode")||t.has("heatMode")),t.has("floorId")&&e.setFloor(this.floorId),t.has("roomId")&&(this.roomId||t.get("roomId"))&&e.selectRoom(this.roomId),t.has("wallMode")&&e.setWallMode(this.wallMode),t.has("explode")&&e.setExplode(this.explode),t.has("theme")&&e.setTheme(this.theme),t.has("furnish")&&e.setFurnishMode(this.furnish),t.has("selectedFurniture")&&e.selectFurniture(this.selectedFurniture),t.has("quality")&&t.get("quality")!==void 0&&e.setQuality(this.quality))}syncDevices(t){let e=this.viewer,n=this.building;if(!e||!n||!this.hass)return;let i=this.hass;if(t||!this.openingLinks||this.linkedRegistry!==i.entities){this.openingLinks=qt(i,n.floors),this.furnitureLinks=Yt(i,n.floors),this.linkedRegistry=i.entities;let m=[...this.openingLinks.values()].flatMap(F=>[F.cover,F.contact,F.tilt,F.contact2??null]),w=si(n),$=w.map(F=>Re(i,F)),x=n.energy,S=n.presence.flatMap(F=>[F.person,F.sensor]),E=n.floors.flatMap(F=>F.rooms.flatMap(G=>B(i,G.area_id).filter(nt=>z(nt)==="light"))),A=[...this.furnitureLinks.values()].flatMap(F=>[F.entity,F.power]),R=this.heatMode==="none"?[]:n.floors.flatMap(F=>F.rooms.flatMap(G=>B(i,G.area_id).filter(nt=>nt.startsWith("sensor.")))),Y=[...w,...m,...$,...A,x.grid,x.solar,x.battery,x.battery_soc,x.tariff,...S,...E,...R,"sun.sun"];this.watched=[...new Set(Y.filter(F=>!!F))],t=!0}if(!(t||this.watched.some(m=>this.shownStates.get(m)!==i.states[m])))return;this.shownStates=new Map(this.watched.map(m=>[m,i.states[m]]));let s=ci(i,n),a=ri(i,n),l=this.furnitureMarkers(i,n,new Set(a.map(m=>m.id)),new Set(s.map(m=>m.powerEntity)));s.push(...l.consumers);let c=pi(i,n,s),d=new Map(s.filter(m=>m.id!==m.powerEntity).map(m=>[m.id,m.power]));e.setDevices([...a,...l.markers].map(m=>{let w=d.get(m.id)??null,$={...m,power:w,powerText:w===null?void 0:Mt(i,w)};return{...$,pin:this.showPin($)}})),e.setPickTargets(l.targets,this.openingTargets()),e.setScreens(l.screens);let h=new Map(n.floors.flatMap(m=>m.openings.map(w=>[w.id,w.type])));e.setOpeningStates(new Map([...this.openingLinks].map(([m,w])=>[m,Zt(i,w,h.get(m))])));let f=n.energy.battery?n.floors.flatMap(m=>m.placements.filter(w=>w.entity_id===n.energy.battery).map(w=>({floorId:m.id,x:w.x,z:w.z})))[0]:null;e.setFlows(this._flows?hi({building:n,consumers:s,summary:c,battery:f??null}).map(m=>({floorId:m.floorId,a:m.a,b:m.b,dist:m.dist,power:m.power,color:ui(m.kind,c)})):[]);let p=yi(i,n);e.setPersons(p);let u=wi(i,n,this.openingLinks,p);e.setFloorInfo(new Map([...u].map(([m,w])=>[m,xi(i,w)])));let _=i.states["sun.sun"]?.attributes,v=typeof _?.elevation=="number"?_.elevation:null;if(e.setSun(v!==null&&typeof _?.azimuth=="number"?{elevation:v,azimuth:_.azimuth}:null),this._sky=v===null?0:Math.min(1,Math.max(0,(v+4)/16)),this.heatMode==="none")e.setRoomTint(null);else{let m=this.heatMode,w=mi(i,n,m);this.heatValues=w,e.setRoomTint(new Map([...w].map(([$,x])=>[$,fi(m,x)])))}let y=c.grid!==null||c.solar!==null||c.battery!==null||c.tariff!==null;this._energy=y?c:null}furnitureMarkers(t,e,n,i){let r=[],s=[],a=new Map,l=new Map;for(let c of e.floors)for(let d of c.furniture){let h=this.furnitureLinks.get(d.id);if(tt(d.type)){r.push(this.lampMarker(t,c,d,h?.entity??null));continue}if(!h)continue;l.set(d.id,h.entity??h.power);let f=h.entity??h.power,p=h.entity?t.states[h.entity]:void 0,u=h.power?$t(t.states[h.power]):null;h.power&&u!==null&&!i.has(h.power)&&(i.add(h.power),s.push({id:f,powerEntity:h.power,floorId:c.id,x:d.x,z:d.z,power:Math.max(0,u)}));let _=(u??0)>10||p?.state==="on"||p?.state==="running";if(d.type==="radiator"&&p&&z(p.entity_id)==="climate"){let m=p.attributes;if(m.hvac_action==="heating"){let w=typeof m.temperature=="number"&&typeof m.current_temperature=="number"?m.temperature-m.current_temperature:1;a.set(d.id,{color:[1,.42,.1],level:Math.min(1,.45+.25*Math.max(0,w))})}}else(d.type==="washer"||d.type==="dryer"||d.type==="dishwasher")&&_&&a.set(d.id,{color:[.3,.85,1],level:.8});if(p&&(d.type==="tv_board"||d.type==="tv_wall"||d.type==="desk")){let m=z(p.entity_id)==="media"?Bn(p):_t(p)?[.22,.88,1]:null,w=z(p.entity_id)==="media"?p.attributes.entity_picture??null:null;m&&a.set(d.id,{color:m,level:p.state==="playing"?1:.6,picture:w})}if(n.has(f))continue;n.add(f);let v=h.entity?z(h.entity):null,y=c.rooms.find(m=>m.points.length>=3&&P([d.x,d.z],m.points));r.push({id:f,floorId:c.id,roomId:y?.id??null,x:d.x,z:d.z,y:Cr(d),icon:Ht(v??"switch"),name:h.entity?D(t,h.entity):I(t,`furn_${d.type}`),text:p?j(t,p):u!==null?Mt(t,Math.max(0,u)):"",active:p?_t(p):(u??0)>5,unavailable:p?H(p):!1,glow:null,fromFurniture:!0})}return{markers:r,consumers:s,screens:a,targets:l}}lampMarker(t,e,n,i){let r=i?t.states[i]:void 0,s=Or[n.type],a=s==="table"?zn(e,n.x,n.z):s==="bollard"||s==="garden"?bn(e,n.x,n.z):0,l=e.rooms.find(h=>h.points.length>=3&&P([n.x,n.z],h.points)),c=e.height,d={ceiling:c-.3,downlight:c-.25,spot:c-.35,panel:c-.25,pendant:Math.max(.6,c-n.h-.25),floor:n.h+.25,uplight:n.h+.25,table:a+n.h+.2,wall:2.1,strip:c-.25,bollard:a+n.h+.25,garden:a+n.h+.25}[s];return{id:i??`lamp:${n.id}`,floorId:e.id,roomId:l?.id??null,x:n.x,z:n.z,y:d,icon:Ht("light"),name:i?D(t,i):I(t,`furn_${n.type}`),text:r?j(t,r):"",active:r?_t(r):!1,unavailable:r?H(r):!1,glow:r?jt(r):null,lamp:s,rotation:n.rotation,size:[n.w,n.d,n.h],base:a,pickable:!!i,furnitureId:n.id,effect:!!r&&r.state==="on"&&typeof r.attributes.effect=="string"&&!/^(none|off|solid|static|normal)$/i.test(r.attributes.effect),variant:n.variant,fromFurniture:!0}}showPin(t){if(this.markerMode==="none")return!1;if(this.markerMode==="all")return!0;if(t.lamp)return!1;let e=z(t.id);return e==="light"?!1:t.fromFurniture?(t.power??0)>=1||e==="media"&&t.active:!0}openingTargets(){let t=new Map;for(let[e,n]of this.openingLinks??[]){let i=n.cover??n.contact??n.tilt;i&&t.set(e,i)}return t}onDeviceTap(t){let e=z(t);e&&Hn.has(e)?oi(this.hass,t):wt(this,t)}resetView(){this.viewer?.resetView()}fire(t,e){this.dispatchEvent(new CustomEvent(t,{detail:e,bubbles:!0,composed:!0}))}toggleFlows(){this._flows=!this._flows;try{localStorage.setItem("floorplan_3d.flows",this._flows?"1":"0")}catch{}this.syncDevices(!0)}renderEnergy(){let t=this._energy;if(!t||this.roomId)return b;let e=i=>I(this.hass,i),n=[];if(t.consumption!==null&&n.push({cls:"total",label:e("energy_consumption"),value:Mt(this.hass,t.consumption)}),t.grid!==null){let i=t.grid<0;n.push({cls:i?"export":"grid",label:e(i?"energy_grid_export":"energy_grid_import"),value:Mt(this.hass,Math.abs(t.grid))})}if(t.solar!==null&&n.push({cls:"solar",label:e("energy_solar"),value:Mt(this.hass,t.solar)}),t.battery!==null||t.soc!==null){let i=[t.battery!==null?Mt(this.hass,Math.abs(t.battery)):null,t.soc!==null?`${Math.round(t.soc)} %`:null].filter(Boolean);n.push({cls:"battery",label:e("energy_battery"),value:i.join(" \xB7 ")})}return t.tariff&&n.push({cls:"tariff",label:e("energy_tariff"),value:`${T(this.hass,t.tariff.value,3)} ${t.tariff.unit}`.trim()}),g`<div class="fp3d-energy" aria-live="off">
      ${n.map(i=>g`<div class="fp3d-energy-item fp3d-energy-${i.cls}"><span>${i.label}</span><b>${i.value}</b></div>`)}
      <button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._flows} title=${`${e("flows_hint")} (${e(this._flows?"flow_on":"flow_off")})`} aria-label=${e("flows")} @click=${()=>this.toggleFlows()}>
        <span>${e("flows")}</span><b>⚡</b>
      </button>
    </div>`}renderLegend(){if(this.heatMode==="none")return b;let t=Lt[this.heatMode],e=t.stops[0][0],n=t.stops[t.stops.length-1][0],i=r=>I(this.hass,r);return g`<div class="fp3d-legend">
      <b>${i(`heat_${this.heatMode}`)}</b>
      <span class="fp3d-legend-bar" style="background:${gi(this.heatMode)}"></span>
      <span class="fp3d-legend-range"><span>${T(this.hass,e,0)} ${t.unit}</span><span>${T(this.hass,n,0)} ${t.unit}</span></span>
      ${this.heatValues.size?b:g`<span class="fp3d-legend-none">${i("heat_none_found")}</span>`}
    </div>`}render(){let t=this._sky,e=(r,s)=>`rgb(${r.map((a,l)=>Math.round(a+(s[l]-a)*t)).join(",")})`,n=Te[this.theme]??Te.neon,i=`--fp3d-sky:${e(n.night[0],n.day[0])};--fp3d-ground:${e(n.night[1],n.day[1])}`;return g`<div class="fp3d-stage" style=${i}>
      ${this._error?g`<p class="fp3d-error">${this._error}</p>`:b} ${this.renderEnergy()} ${this.renderLegend()}
      ${this.showStats&&this._stats?g`<span class="fp3d-stats"
            ><b>${this._stats.fps?I(this.hass,"stats_fps",{fps:this._stats.fps,ms:this._stats.worstMs}):I(this.hass,"stats_idle")}</b> ·
            ${I(this.hass,"stats",{calls:this._stats.calls,tris:this._stats.triangles.toLocaleString()})} ·
            ${I(this.hass,this._stats.low?"stats_low":"stats_full",{r:T(this.hass,this._stats.pixelRatio,2)})}</span
          >`:b}
    </div>`}static styles=[J,W`
      :host {
        display: block;
        position: relative;
        min-height: 200px;
      }
      .fp3d-stage {
        position: absolute;
        inset: 0;
        overflow: hidden;
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
      .fp3d-legend {
        position: absolute;
        left: 12px;
        bottom: 10px;
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
      @media (max-width: 600px) {
        .fp3d-energy-item:nth-child(n + 4) {
          display: none;
        }
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
    `]};customElements.get("fp3d-view3d")||customElements.define("fp3d-view3d",Pe);function Mt(o,t){return Math.abs(t)>=1e3?`${T(o,t/1e3,1)} kW`:`${Math.round(t)} W`}function Cr(o){return o.type==="tv_board"?o.h+.9:o.type==="tv_wall"?1.3+o.h/2+.25:o.type==="kitchen_wall"?1.45+o.h+.25:o.h+.35}var Z={get(o){try{return localStorage.getItem(`floorplan_3d.${o}`)}catch{return null}},set(o,t){try{localStorage.setItem(`floorplan_3d.${o}`,t)}catch{}}},Oe=class extends V{static properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_mode:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_wallMode:{state:!0},_explode:{state:!0},_quality:{state:!0},_stats:{state:!0},_markers:{state:!0},_heat:{state:!0},_theme:{state:!0},_furnish:{state:!0},_selFurniture:{state:!0}};data=new gt(this);constructor(){super(),this.narrow=!1,this._mode="view",this._floorId=null,this._roomId=null,this._wallMode="auto",this._explode=Z.get("explode")!=="0";let t=Z.get("quality");this._quality=t==="low"||t==="high"?t:"auto",this._stats=Z.get("stats")==="1"||new URLSearchParams(location.search).has("fp3d_stats");let e=Z.get("markers");this._markers=e==="none"||e==="all"?e:"important";let n=Z.get("heat");this._heat=n==="temperature"||n==="humidity"||n==="co2"?n:"none";let i=Z.get("theme");this._theme=i&&Fe.includes(i)?i:"neon",this._furnish=!1,this._selFurniture=null}t(t,e){return I(this.hass,t,e)}willUpdate(t){t.has("hass")&&this.hass&&this.data.setHass(this.hass);let e=this.data.building;e&&this._floorId&&!e.floors.some(n=>n.id===this._floorId)&&(this._floorId=null,this._roomId=null)}get isAdmin(){return this.hass?.user?.is_admin??!1}setMode(t){t!==this._mode&&(t==="view"&&this.data.flush(),this._mode=t)}onRoomTap(t){let{floorId:e,roomId:n}=t.detail;n&&(this._floorId===null&&(this.data.building?.floors.length??0)>1&&(this._floorId=e),this._roomId=n===this._roomId?null:n)}setExplode(t){this._explode=t,Z.set("explode",t?"1":"0")}setQuality(t){this._quality=t,Z.set("quality",t)}editFurniture(t,e){let n=this.data.building;if(!n)return;let i=structuredClone(n);for(let r of i.floors){let s=r.furniture.find(a=>a.id===t);s&&e(s,r)}this.data.edit(i)}furnitureName(t){let e=this.data.building?.floors.flatMap(n=>n.furniture).find(n=>n.id===t);return e?this.t(`furn_${e.type}`):""}moveFurniture(t){let{id:e,x:n,z:i}=t.detail,r=this.data.building?.settings.wall_interior??.12;this.editFurniture(e,(s,a)=>{Object.assign(s,{x:n,z:i});let l=Qt(a,s,r);l&&Object.assign(s,l)})}renderSizeFields(t){let e=this.data.building?.floors.flatMap(i=>i.furniture).find(i=>i.id===t);if(!e)return b;let n=(i,r)=>g`<label class="fp3d-size" title=${this.t(`size_${i}`)}
      >${r}
      <input
        type="number"
        inputmode="decimal"
        step="0.05"
        min="0.05"
        .value=${String(Math.round(e[i]*100)/100)}
        @change=${s=>{let a=parseFloat(s.target.value.replace(",","."));Number.isFinite(a)&&a>0&&this.editFurniture(t,l=>l[i]=Math.round(a*1e3)/1e3)}}
    /></label>`;return g`${n("w","B")}${n("d","T")}${n("h","H")}`}turnFurniture(t){this._selFurniture&&this.editFurniture(this._selFurniture,e=>e.rotation=((e.rotation+t)%360+360)%360)}deleteFurniture(){let t=this._selFurniture,e=this.data.building;if(!t||!e)return;let n=structuredClone(e);for(let i of n.floors)i.furniture=i.furniture.filter(r=>r.id!==t);this.data.edit(n),this._selFurniture=null}back(){this._roomId?this._roomId=null:this._floorId&&(this.data.building?.floors.length??0)>1?this._floorId=null:this.renderRoot.querySelector("fp3d-view3d")?.resetView()}onKey=t=>{t.key==="Escape"&&this._mode==="view"&&this.back()};connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey)}render(){let t=this.data.building,e=this.data.saveState;return g`
      <div class="fp3d-app">
        <header class="fp3d-header">
          <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
          <h1>Floorplan 3D</h1>
          ${this.isAdmin?g`<div class="fp3d-seg" role="tablist">
                <button role="tab" aria-pressed=${this._mode==="view"} @click=${()=>this.setMode("view")}>${this.t("view")}</button>
                <button role="tab" aria-pressed=${this._mode==="editor"} @click=${()=>this.setMode("editor")}>${this.t("editor")}</button>
              </div>`:b}
          <span class="fp3d-grow"></span>
          ${this._mode==="view"&&t?.floors.some(n=>n.rooms.length)?g`<div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("quality")}>
                ${["auto","low","high"].map(n=>g`<button aria-pressed=${this._quality===n} @click=${()=>this.setQuality(n)}>${this.t(`quality_${n}`)}</button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("theme")}>
                ${Fe.map(n=>g`<button
                      aria-pressed=${this._theme===n}
                      @click=${()=>{this._theme=n,Z.set("theme",n)}}
                    >
                      ${this.t(`theme_${n}`)}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("markers")}>
                ${["none","important","all"].map(n=>g`<button
                      aria-pressed=${this._markers===n}
                      title=${this.t("markers")}
                      @click=${()=>{this._markers=n,Z.set("markers",n)}}
                    >
                      ${this.t(`markers_${n}`)}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality">
                <button
                  aria-pressed=${this._stats}
                  title=${this.t("fps_title")}
                  @click=${()=>{this._stats=!this._stats,Z.set("stats",this._stats?"1":"0")}}
                >
                  ${this.t("fps")}
                </button>
              </div>`:b}
          ${this._mode==="editor"&&e!=="idle"?g`<span class="fp3d-save fp3d-save-${e}">${this.t(e==="saving"?"saving":e==="saved"?"saved":"save_error")}</span>`:b}
        </header>
        ${this.renderNotices()}
        ${this.data.error&&!t?g`<p class="fp3d-message">${this.t("load_error")}: ${this.data.error}</p>`:b}
        ${!t&&!this.data.error?g`<p class="fp3d-message">${this.t("loading")}</p>`:b}
        ${t?this._mode==="editor"&&this.isAdmin?this.renderEditor(t):this.renderView(t):b}
      </div>
    `}renderNotices(){let t=this.data,e=[];if(t.needsRestart&&e.push(g`<div class="fp3d-notice fp3d-notice-warn">${t.backendVersion?this.t("needs_restart",{version:t.backendVersion}):this.t("needs_restart_old")}</div>`),t.saveState==="error"&&t.saveError&&e.push(g`<div class="fp3d-notice fp3d-notice-error">${this.t("save_failed_detail",{error:t.saveError})}</div>`),t.draft&&this.isAdmin){let n=new Date(t.draft.savedAt).toLocaleString(this.hass?.language);e.push(g`<div class="fp3d-notice">
          <span>${this.t("draft_found",{time:n})}</span>
          <button class="fp3d-btn fp3d-primary" @click=${()=>t.restoreDraft()}>${this.t("draft_restore")}</button>
          <button class="fp3d-btn" @click=${()=>t.discardDraft()}>${this.t("draft_discard")}</button>
        </div>`)}return e.length?g`<div class="fp3d-notices">${e}</div>`:b}renderEditor(t){return g`<fp3d-editor
      class="fp3d-body"
      .hass=${this.hass}
      .building=${t}
      .narrow=${this.narrow}
      @building-changed=${e=>this.data.edit(e.detail.building)}
    ></fp3d-editor>`}renderView(t){if(!t.floors.length||!t.floors.some(i=>i.rooms.length))return g`<div class="fp3d-empty">
        <p>${this.t(this.isAdmin?"no_building_admin":"no_building")}</p>
        ${this.isAdmin?g`<button class="fp3d-btn fp3d-primary" @click=${()=>this.setMode("editor")}>${this.t("open_editor")}</button>`:b}
      </div>`;let e=t.floors.find(i=>i.id===this._floorId),n=e?[e]:t.floors;return g`
      <nav class="fp3d-nav">
        ${t.floors.length>1?g`<button class="fp3d-chip" aria-pressed=${this._floorId===null} @click=${()=>{this._floorId=null,this._roomId=null}}>
                ${this.t("all_floors")}
              </button>
              ${[...t.floors].reverse().map(i=>g`<button
                  class="fp3d-chip"
                  aria-pressed=${i.id===this._floorId}
                  @click=${()=>{this._floorId=i.id,this._roomId=null}}
                >
                  ${i.name}
                </button>`)}
              <span class="fp3d-sep"></span>`:b}
        ${n.flatMap(i=>i.rooms.map(r=>g`<button
              class="fp3d-chip fp3d-room-chip"
              aria-pressed=${r.id===this._roomId}
              @click=${()=>{t.floors.length>1&&(this._floorId=i.id),this._roomId=r.id===this._roomId?null:r.id}}
            >
              ${r.name}
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
          .markerMode=${this._markers}
          .heatMode=${this._heat}
          .theme=${this._theme}
          ?furnish=${this._furnish}
          .selectedFurniture=${this._selFurniture}
          @furniture-select=${i=>this._selFurniture=i.detail.id}
          @furniture-move=${this.moveFurniture}
          .quality=${this._quality}
          ?showStats=${this._stats}
          @room-tap=${this.onRoomTap}
          @floor-tap=${i=>{this._floorId=i.detail.floorId,this._roomId=null}}
          @back=${()=>this.back()}
        ></fp3d-view3d>
        ${this._roomId?g`<fp3d-room-panel
              class="fp3d-room-panel"
              .hass=${this.hass}
              .room=${t.floors.flatMap(i=>i.rooms).find(i=>i.id===this._roomId)??null}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:b}
        <div class="fp3d-overlay">
          <div class="fp3d-seg">
            <button aria-pressed=${this._wallMode==="auto"} @click=${()=>this._wallMode="auto"}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wallMode==="cut"} @click=${()=>this._wallMode="cut"}>${this.t("walls_cut")}</button>
          </div>
          ${t.floors.length>1&&!this._floorId?g`<div class="fp3d-seg">
                <button aria-pressed=${this._explode} @click=${()=>this.setExplode(!0)}>${this.t("floors_apart")}</button>
                <button aria-pressed=${!this._explode} @click=${()=>this.setExplode(!1)}>${this.t("floors_stacked")}</button>
              </div>`:b}
          <div class="fp3d-seg" role="group" aria-label=${this.t("heatmap")}>
            ${["none","temperature","humidity","co2"].map(i=>g`<button
                  aria-pressed=${this._heat===i}
                  @click=${()=>{this._heat=i,Z.set("heat",i)}}
                >
                  ${this.t(i==="none"?"heat_off":`heat_short_${i}`)}
                </button>`)}
          </div>
          ${this.isAdmin?g`<button
                class="fp3d-chip ${this._furnish?"fp3d-chip-on":""}"
                aria-pressed=${this._furnish}
                title=${this.t("furnish_hint")}
                @click=${()=>{this._furnish=!this._furnish,this._selFurniture=null}}
              >
                ${this.t("furnish")}
              </button>`:b}
          ${this._roomId||this._floorId&&t.floors.length>1?g`<button class="fp3d-chip" @click=${()=>this.back()}>${this.t("back")}</button>`:b}
        </div>
        ${this._furnish?g`<div class="fp3d-furnish-bar">
              ${this._selFurniture?g`<span>${this.furnitureName(this._selFurniture)}</span>
                    ${this.renderSizeFields(this._selFurniture)}
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(-45)}>↺ 45°</button>
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(45)}>↻ 45°</button>
                    <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>`:g`<span>${this.t("furnish_hint")}</span>`}
              <button class="fp3d-chip fp3d-chip-on" @click=${()=>(this._furnish=!1,this._selFurniture=null)}>${this.t("done")}</button>
            </div>`:b}
      </div>
    `}static styles=[J,yt,W`
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
    `]};customElements.get("floorplan-3d-panel")||customElements.define("floorplan-3d-panel",Oe);var Ce=class extends V{static properties={hass:{attribute:!1},_config:{state:!0},_roomId:{state:!0},_floorId:{state:!0}};data=new gt(this);constructor(){super(),this._roomId=null,this._floorId=null}static getStubConfig(){return{type:"custom:floorplan-3d-card"}}setConfig(t){if(t.height!==void 0&&!(t.height>100))throw new Error("height must be a number of pixels above 100");this._config=t}getCardSize(){return Math.ceil((this._config?.height??420)/50)}getGridOptions(){return{columns:"full",rows:Math.ceil((this._config?.height??420)/56),min_rows:4}}willUpdate(t){t.has("hass")&&this.hass&&this.data.setHass(this.hass)}back(){this._roomId?this._roomId=null:this._config?.floor||(this._floorId=null)}render(){let t=this.data.building,e=this._config?.height??420,n=this._config?.floor??(t&&t.floors.length===1?t.floors[0].id:t?.floors.some(r=>r.id===this._floorId)?this._floorId:null),i=!!this._roomId||!this._config?.floor&&!!this._floorId&&(t?.floors.length??0)>1;return g`<ha-card>
      <div class="fp3d-card-body" style="height:${e}px">
        ${t&&t.floors.some(r=>r.rooms.length)?g`<fp3d-view3d
              .hass=${this.hass}
              .building=${t}
              .floorId=${n}
              .roomId=${this._roomId}
              .wallMode=${this._config?.walls??"auto"}
              .explode=${this._config?.explode??!0}
              .quality=${this._config?.quality??"auto"}
              ?showStats=${this._config?.stats??!1}
              .markerMode=${this._config?.markers??"important"}
              .heatMode=${this._config?.heatmap??"none"}
              .theme=${this._config?.theme??"neon"}
              @room-tap=${r=>{r.detail.roomId&&(!n&&!this._config?.floor&&(this._floorId=r.detail.floorId),this._roomId=r.detail.roomId===this._roomId?null:r.detail.roomId)}}
              @floor-tap=${r=>{this._floorId=r.detail.floorId,this._roomId=null}}
              @back=${()=>this.back()}
            ></fp3d-view3d>`:g`<p class="fp3d-card-msg">${this.data.error??(t?I(this.hass,"no_building"):I(this.hass,"loading"))}</p>`}
        ${this._roomId&&t?g`<fp3d-room-panel
              class="fp3d-card-panel"
              .hass=${this.hass}
              .room=${t.floors.flatMap(r=>r.rooms).find(r=>r.id===this._roomId)??null}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:b}
        ${i?g`<button class="fp3d-card-back" @click=${()=>this.back()}>${I(this.hass,"back")}</button>`:b}
      </div>
    </ha-card>`}static styles=[J,W`
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
    `]};if(!customElements.get("floorplan-3d-card")){customElements.define("floorplan-3d-card",Ce);let o=window;o.customCards=o.customCards??[],o.customCards.push({type:"floorplan-3d-card",name:I(void 0,"card_name"),description:I(void 0,"card_description"),preview:!1})}Ne();
