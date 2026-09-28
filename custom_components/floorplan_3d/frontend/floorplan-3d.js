var fe=new URL(import.meta.url),pe=fe.searchParams.get("v"),he=o=>new URL(`./fonts/${o}${pe?`?v=${pe}`:""}`,fe).href,ue="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD";function me(){if(typeof document>"u"||document.getElementById("fp3d-fonts"))return;let o=document.createElement("style");o.id="fp3d-fonts",o.textContent=`
@font-face{font-family:"Figtree";font-style:normal;font-display:swap;font-weight:300 900;src:url(${he("figtree.woff2")}) format("woff2");unicode-range:${ue}}
@font-face{font-family:"Bricolage Grotesque";font-style:normal;font-display:swap;font-weight:200 800;src:url(${he("bricolage-grotesque.woff2")}) format("woff2");unicode-range:${ue}}`,document.head.append(o)}var St=globalThis,Et=St.ShadowRoot&&(St.ShadyCSS===void 0||St.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Bt=Symbol(),ge=new WeakMap,ut=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==Bt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Et&&t===void 0){let n=e!==void 0&&e.length===1;n&&(t=ge.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&ge.set(e,t))}return t}toString(){return this.cssText}},be=o=>new ut(typeof o=="string"?o:o+"",void 0,Bt),F=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((n,i,s)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[s+1],o[0]);return new ut(e,o,Bt)},_e=(o,t)=>{if(Et)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let n=document.createElement("style"),i=St.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=e.cssText,o.appendChild(n)}},Nt=Et?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let n of t.cssRules)e+=n.cssText;return be(e)})(o):o;var{is:Mn,defineProperty:Sn,getOwnPropertyDescriptor:En,getOwnPropertyNames:In,getOwnPropertySymbols:An,getPrototypeOf:Rn}=Object,It=globalThis,ve=It.trustedTypes,zn=ve?ve.emptyScript:"",Cn=It.reactiveElementPolyfillSupport,ft=(o,t)=>o,Wt={toAttribute(o,t){switch(t){case Boolean:o=o?zn:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},xe=(o,t)=>!Mn(o,t),ye={attribute:!0,type:String,converter:Wt,reflect:!1,useDefault:!1,hasChanged:xe};Symbol.metadata??=Symbol("metadata"),It.litPropertyMetadata??=new WeakMap;var W=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ye){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(t,n,e);i!==void 0&&Sn(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){let{get:i,set:s}=En(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get:i,set(r){let a=i?.call(this);s?.call(this,r),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ye}static _$Ei(){if(this.hasOwnProperty(ft("elementProperties")))return;let t=Rn(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ft("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ft("properties"))){let e=this.properties,n=[...In(e),...An(e)];for(let i of n)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[n,i]of e)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[e,n]of this.elementProperties){let i=this._$Eu(e,n);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let i of n)e.unshift(Nt(i))}else t!==void 0&&e.push(Nt(t));return e}static _$Eu(t,e){let n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _e(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){let n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){let s=(n.converter?.toAttribute!==void 0?n.converter:Wt).toAttribute(e,n.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,e){let n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let s=n.getPropertyOptions(i),r=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Wt;this._$Em=i;let a=r.fromAttribute(e,s.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(t,e,n,i=!1,s){if(t!==void 0){let r=this.constructor;if(i===!1&&(s=this[t]),n??=r.getPropertyOptions(t),!((n.hasChanged??xe)(s,e)||n.useDefault&&n.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:i,wrapped:s},r){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),s!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[i,s]of n){let{wrapped:r}=s,a=this[i];r!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,s,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(e)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};W.elementStyles=[],W.shadowRootOptions={mode:"open"},W[ft("elementProperties")]=new Map,W[ft("finalized")]=new Map,Cn?.({ReactiveElement:W}),(It.reactiveElementVersions??=[]).push("2.1.2");var Yt=globalThis,we=o=>o,At=Yt.trustedTypes,$e=At?At.createPolicy("lit-html",{createHTML:o=>o}):void 0,Ae="$lit$",q=`lit$${Math.random().toFixed(9).slice(2)}$`,Re="?"+q,Pn=`<${Re}>`,et=document,gt=()=>et.createComment(""),bt=o=>o===null||typeof o!="object"&&typeof o!="function",Qt=Array.isArray,Hn=o=>Qt(o)||typeof o?.[Symbol.iterator]=="function",Ut=`[ 	
\f\r]`,mt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ke=/-->/g,Me=/>/g,X=RegExp(`>|${Ut}(?:([^\\s"'>=/]+)(${Ut}*=${Ut}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Se=/'/g,Ee=/"/g,ze=/^(?:script|style|textarea|title)$/i,Jt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),b=Jt(1),S=Jt(2),vi=Jt(3),nt=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),Ie=new WeakMap,tt=et.createTreeWalker(et,129);function Ce(o,t){if(!Qt(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return $e!==void 0?$e.createHTML(t):t}var Fn=(o,t)=>{let e=o.length-1,n=[],i,s=t===2?"<svg>":t===3?"<math>":"",r=mt;for(let a=0;a<e;a++){let l=o[a],d,h,u=-1,m=0;for(;m<l.length&&(r.lastIndex=m,h=r.exec(l),h!==null);)m=r.lastIndex,r===mt?h[1]==="!--"?r=ke:h[1]!==void 0?r=Me:h[2]!==void 0?(ze.test(h[2])&&(i=RegExp("</"+h[2],"g")),r=X):h[3]!==void 0&&(r=X):r===X?h[0]===">"?(r=i??mt,u=-1):h[1]===void 0?u=-2:(u=r.lastIndex-h[2].length,d=h[1],r=h[3]===void 0?X:h[3]==='"'?Ee:Se):r===Ee||r===Se?r=X:r===ke||r===Me?r=mt:(r=X,i=void 0);let p=r===X&&o[a+1].startsWith("/>")?" ":"";s+=r===mt?l+Pn:u>=0?(n.push(d),l.slice(0,u)+Ae+l.slice(u)+q+p):l+q+(u===-2?a:p)}return[Ce(o,s+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},_t=class o{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let s=0,r=0,a=t.length-1,l=this.parts,[d,h]=Fn(t,e);if(this.el=o.createElement(d,n),tt.currentNode=this.el.content,e===2||e===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=tt.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let u of i.getAttributeNames())if(u.endsWith(Ae)){let m=h[r++],p=i.getAttribute(u).split(q),c=/([.?@])?(.*)/.exec(m);l.push({type:1,index:s,name:c[2],strings:p,ctor:c[1]==="."?Kt:c[1]==="?"?qt:c[1]==="@"?Gt:rt}),i.removeAttribute(u)}else u.startsWith(q)&&(l.push({type:6,index:s}),i.removeAttribute(u));if(ze.test(i.tagName)){let u=i.textContent.split(q),m=u.length-1;if(m>0){i.textContent=At?At.emptyScript:"";for(let p=0;p<m;p++)i.append(u[p],gt()),tt.nextNode(),l.push({type:2,index:++s});i.append(u[m],gt())}}}else if(i.nodeType===8)if(i.data===Re)l.push({type:2,index:s});else{let u=-1;for(;(u=i.data.indexOf(q,u+1))!==-1;)l.push({type:7,index:s}),u+=q.length-1}s++}}static createElement(t,e){let n=et.createElement("template");return n.innerHTML=t,n}};function ot(o,t,e=o,n){if(t===nt)return t;let i=n!==void 0?e._$Co?.[n]:e._$Cl,s=bt(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(o),i._$AT(o,e,n)),n!==void 0?(e._$Co??=[])[n]=i:e._$Cl=i),i!==void 0&&(t=ot(o,i._$AS(o,t.values),i,n)),t}var jt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:n}=this._$AD,i=(t?.creationScope??et).importNode(e,!0);tt.currentNode=i;let s=tt.nextNode(),r=0,a=0,l=n[0];for(;l!==void 0;){if(r===l.index){let d;l.type===2?d=new vt(s,s.nextSibling,this,t):l.type===1?d=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(d=new Zt(s,this,t)),this._$AV.push(d),l=n[++a]}r!==l?.index&&(s=tt.nextNode(),r++)}return tt.currentNode=et,i}p(t){let e=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}},vt=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,i){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ot(this,t,e),bt(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==nt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Hn(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==g&&bt(this._$AH)?this._$AA.nextSibling.data=t:this.T(et.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=_t.createElement(Ce(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(e);else{let s=new jt(i,this),r=s.u(this.options);s.p(e),this.T(r),this._$AH=s}}_$AC(t){let e=Ie.get(t.strings);return e===void 0&&Ie.set(t.strings,e=new _t(t)),e}k(t){Qt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,n,i=0;for(let s of t)i===e.length?e.push(n=new o(this.O(gt()),this.O(gt()),this,this.options)):n=e[i],n._$AI(s),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let n=we(t).nextSibling;we(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},rt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,i,s){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=g}_$AI(t,e=this,n,i){let s=this.strings,r=!1;if(s===void 0)t=ot(this,t,e,0),r=!bt(t)||t!==this._$AH&&t!==nt,r&&(this._$AH=t);else{let a=t,l,d;for(t=s[0],l=0;l<s.length-1;l++)d=ot(this,a[n+l],e,l),d===nt&&(d=this._$AH[l]),r||=!bt(d)||d!==this._$AH[l],d===g?t=g:t!==g&&(t+=(d??"")+s[l+1]),this._$AH[l]=d}r&&!i&&this.j(t)}j(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Kt=class extends rt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===g?void 0:t}},qt=class extends rt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==g)}},Gt=class extends rt{constructor(t,e,n,i,s){super(t,e,n,i,s),this.type=5}_$AI(t,e=this){if((t=ot(this,t,e,0)??g)===nt)return;let n=this._$AH,i=t===g&&n!==g||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==g&&(n===g||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Zt=class{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){ot(this,t)}};var On=Yt.litHtmlPolyfillSupport;On?.(_t,vt),(Yt.litHtmlVersions??=[]).push("3.3.3");var Pe=(o,t,e)=>{let n=e?.renderBefore??t,i=n._$litPart$;if(i===void 0){let s=e?.renderBefore??null;n._$litPart$=i=new vt(t.insertBefore(gt(),s),s,void 0,e??{})}return i._$AI(o),i};var Xt=globalThis,P=class extends W{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Pe(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return nt}};P._$litElement$=!0,P.finalized=!0,Xt.litElementHydrateSupport?.({LitElement:P});var Vn=Xt.litElementPolyfillSupport;Vn?.({LitElement:P});(Xt.litElementVersions??=[]).push("4.2.2");async function He(o){return o.callWS({type:"floorplan_3d/building/get"})}async function Fe(o,t){return(await o.callWS({type:"floorplan_3d/building/save",building:t})).revision}function Oe(o,t){return o.connection.subscribeMessage(e=>t(e.revision),{type:"floorplan_3d/building/subscribe"})}async function Ve(o,t){return(await o.callWS({type:"floorplan_3d/image/get",image_id:t})).data}async function Te(o,t,e){await o.callWS({type:"floorplan_3d/image/set",image_id:t,data:e})}var Tn={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,tariff:null},De=["wood","oak","tiles","carpet","stone","concrete"];function Le(o,t,e){return{id:o,name:t,elevation:e,height:2.5,cut_height:1.15,rooms:[],openings:[],furniture:[],placements:[],background:null}}var te=["sofa","armchair","table","chair","bed","nightstand","wardrobe","shelf","kitchen","fridge","stove","sink","bathtub","shower","wc","washbasin","desk","tv_board","plant","rug","stairs"],Be={sofa:[2.2,.9,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],fridge:[.6,.65,1.8],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75]},Rt={door:{width:.9,sill:0,height:2.05},window:{width:1.2,sill:.9,height:1.3}};function Ne(o){o.energy={...Tn,...o.energy??{}},o.presence=o.presence??[];for(let t of o.floors)t.openings=t.openings.map(e=>({...e,hinge:e.hinge??"left",cover:e.cover??null,contact:e.contact??null,tilt:e.tilt??null}));return o}function G(o){return`${o}_${Math.random().toString(36).slice(2,10)}`}function U(o){let t=0;for(let e=0;e<o.length;e++){let[n,i]=o[e],[s,r]=o[(e+1)%o.length];t+=n*r-s*i}return t/2}function at(o){return Math.abs(U(o))}function Z(o){let t=U(o);if(Math.abs(t)<1e-9){let i=o.length||1;return[o.reduce((s,r)=>s+r[0],0)/i,o.reduce((s,r)=>s+r[1],0)/i]}let e=0,n=0;for(let i=0;i<o.length;i++){let[s,r]=o[i],[a,l]=o[(i+1)%o.length],d=s*l-a*r;e+=(s+a)*d,n+=(r+l)*d}return[e/(6*t),n/(6*t)]}function We(o){if(o.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=o[t],[i,s]=o[(t+1)%4];if(Math.abs(e-i)>1e-6&&Math.abs(n-s)>1e-6)return!1}return!0}function yt(o){let t=1/0,e=1/0,n=-1/0,i=-1/0;for(let[s,r]of o)t=Math.min(t,s),e=Math.min(e,r),n=Math.max(n,s),i=Math.max(i,r);return{x0:t,z0:e,x1:n,z1:i}}function Ue(o){let t=o.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),i=o.w/2,s=o.d/2;return[[-i,-s],[i,-s],[i,s],[-i,s]].map(([r,a])=>[o.x+r*e-a*n,o.z+r*n+a*e])}function L(o,t){let e=!1;for(let n=0,i=t.length-1;n<t.length;i=n++){let[s,r]=t[n],[a,l]=t[i];r>o[1]!=l>o[1]&&o[0]<(a-s)*(o[1]-r)/(l-r)+s&&(e=!e)}return e}var Dn=700,lt=class{building=null;error=null;saveState="idle";host;hass=null;revision=-1;ownRevisions=new Set;unsubscribe=null;saveTimer;pending=null;saving=null;connected=!1;constructor(t){this.host=t,t.addController(this)}setHass(t){let e=this.hass===null;this.hass=t,e&&this.connected&&this.start()}hostConnected(){this.connected=!0,this.hass&&this.start()}hostDisconnected(){this.connected=!1,this.flush(),this.unsubscribe?.(),this.unsubscribe=null}edit(t){this.building=t,this.pending=t,clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{this.flush()},Dn),this.host.requestUpdate()}async flush(){clearTimeout(this.saveTimer),this.saving&&await this.saving;let t=this.pending;!t||!this.hass||(this.pending=null,this.saveState="saving",this.host.requestUpdate(),this.saving=(async()=>{try{let e=await Fe(this.hass,t);this.ownRevisions.add(e),this.revision=e,this.saveState=this.pending?"saving":"saved"}catch(e){this.saveState="error",this.error=je(e)}this.host.requestUpdate()})(),await this.saving,this.saving=null)}async start(){if(this.hass&&(await this.reload(),!this.unsubscribe&&this.connected))try{this.unsubscribe=await Oe(this.hass,t=>{this.ownRevisions.has(t)||t===this.revision||this.pending||this.saving||this.reload()})}catch{}}async reload(){if(this.hass){try{let t=await He(this.hass);this.building=Ne(t.building),this.revision=t.revision,this.error=null}catch(t){this.error=je(t)}this.host.requestUpdate()}}};function je(o){return o&&typeof o=="object"&&"message"in o?String(o.message):String(o)}var Ln={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},Bn=new Set(["temperature","humidity","power"]),Nn=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas"]),Ke=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],qe=new Set(["light","switch","fan"]);function Wn(o){return o.slice(0,o.indexOf("."))}function I(o){return Ln[Wn(o)]??null}function Ge(o){return o!==null&&o!=="scene"&&o!=="script"}function Un(o,t){let e=o.entities?.[t];return e?e.area_id?e.area_id:e.device_id&&o.devices?.[e.device_id]?.area_id||null:null}function jn(o,t){let e=I(t);if(!e)return!1;let n=o.entities?.[t];if(n?.hidden||n?.entity_category)return!1;let i=o.states[t];if(!i)return!1;let s=i.attributes.device_class;return e==="sensor"?!!s&&Bn.has(s):e==="binary"?!!s&&Nn.has(s):!0}function j(o,t){if(!t||!o.entities)return[];let e=Object.keys(o.entities).filter(i=>Un(o,i)===t&&jn(o,i)),n=o.areas?.[t]?.name;return e.sort((i,s)=>{let r=Ke.indexOf(I(i)),a=Ke.indexOf(I(s));return r-a||T(o,i,n).localeCompare(T(o,s,n))})}function T(o,t,e){let i=o.states[t]?.attributes.friendly_name??o.entities?.[t]?.name??t;if(e&&i.length>e.length+1&&i.toLowerCase().startsWith(e.toLowerCase()+" ")){let s=i.slice(e.length+1);return s.charAt(0).toUpperCase()+s.slice(1)}return i}function D(o){return!o||o.state==="unavailable"||o.state==="unknown"}function Ze(o){if(!o)return!1;switch(I(o.entity_id)){case"light":case"switch":case"fan":case"binary":return o.state==="on";case"cover":return o.state==="open"||o.state==="opening";case"climate":return o.attributes.hvac_action==="heating"||o.attributes.hvac_action==="cooling";case"media":return o.state==="playing";case"lock":return o.state==="unlocked"||o.state==="open";default:return!1}}function Ye(o){if(!o||o.state!=="on")return null;let t=o.attributes,e=typeof t.brightness=="number"?Math.max(.08,t.brightness/255):1,n=t.rgb_color,i;return n&&t.color_mode!=="color_temp"&&t.color_mode!=="brightness"&&t.color_mode!=="onoff"?i=[n[0]/255,n[1]/255,n[2]/255]:typeof t.color_temp_kelvin=="number"?i=Kn(t.color_temp_kelvin):i=[1,.71,.28],{color:i,level:e}}function Kn(o){let t=Math.min(1,Math.max(0,(o-2200)/4300)),e=[1,.66,.26],n=[.78,.9,1];return[e[0]+(n[0]-e[0])*t,e[1]+(n[1]-e[1])*t,e[2]+(n[2]-e[2])*t]}function Qe(o,t){switch(o){case"light":case"camera":return Math.max(.5,t-.25);case"cover":return Math.min(2,t-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}function qn(o,t){let e=1/0;for(let n=0;n<t.length;n++){let i=t[n],s=t[(n+1)%t.length],r=s[0]-i[0],a=s[1]-i[1],l=r*r+a*a||1,d=Math.min(1,Math.max(0,((o[0]-i[0])*r+(o[1]-i[1])*a)/l));e=Math.min(e,Math.hypot(o[0]-i[0]-r*d,o[1]-i[1]-a*d))}return e}function Je(o,t,e=[]){if(o.points.length<3||!t.length)return[];let n=o.points,i=n.map(v=>v[0]),s=n.map(v=>v[1]),r=Math.min(...i),a=Math.min(...s),l=Math.max(...i),d=Math.max(...s),h=Math.min(l-r,d-a),u=Math.max(.1,Math.min(.25,h/8)),m=Math.min(.35,h/5),p=Z(n),c=[];for(let v=r+u/2;v<l;v+=u)for(let $=a+u/2;$<d;$+=u){let k=[v,$];if(!L(k,n))continue;let x=qn(k,n);x<m||c.push({p:k,wall:x})}c.length||c.push({p,wall:0});let f=[...e],_=[],y=Math.min(.7,h/4);for(let v of t){let $=I(v)==="light",k=c[0].p,x=-1/0;for(let{p:E,wall:O}of c){let R=f.length?Math.min(...f.map(B=>Math.hypot(E[0]-B[0],E[1]-B[1]))):3,z=Math.hypot(E[0]-p[0],E[1]-p[1]),H=Math.min(R,3)*2;z<y&&(H-=10),H-=$?z*.35:O*1.2,H>x+1e-9&&(x=H,k=E)}let w=[Math.round(k[0]*100)/100,Math.round(k[1]*100)/100];f.push(w),_.push({entity_id:v,x:w[0],z:w[1],y:null})}return _}var Gn=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),Zn=new Set(["window","opening"]);function ee(o,t,e=!1){let n=new Map;return t.length&&o.forEach((i,s)=>{let r=e&&t.length===1?t[0]:t[s];r&&n.set(i.id,r)}),n}function zt(o,t){let e=new Map;for(let n of t)for(let i of n.rooms){let s=n.openings.filter(f=>f.room_id===i.id).sort((f,_)=>f.edge-_.edge||f.offset-_.offset);if(!s.length)continue;let r=j(o,i.area_id),a=f=>o.states[f]?.attributes.device_class,l=r.filter(f=>I(f)==="cover"&&Gn.has(a(f))),d=s.filter(f=>f.type==="window"),h=s.filter(f=>f.type==="door"),u=ee(d,l,!0),m=ee(d,r.filter(f=>I(f)==="binary"&&Zn.has(a(f)))),p=ee(h,r.filter(f=>I(f)==="binary"&&a(f)==="door")),c=(f,_)=>f==="none"?null:f??_??null;for(let f of s)e.set(f.id,{cover:f.type==="window"?c(f.cover,u.get(f.id)):c(f.cover,void 0),contact:c(f.contact,(f.type==="window"?m:p).get(f.id)),tilt:f.tilt==="none"?null:f.tilt})}return e}function Xe(o,t){let e=a=>!!a&&o.states[a]?.state==="on",n=e(t.tilt),i=e(t.contact)&&!n?1:0,s=null,r=t.cover?o.states[t.cover]:void 0;if(r&&!D(r)){let a=r.attributes.current_position;s=typeof a=="number"?1-Math.min(100,Math.max(0,a))/100:r.state==="closed"?1:0}else t.cover&&(s=0);return{open:i,tilt:n?1:0,cover:s}}var V=(o,t)=>[o[0]-t[0],o[1]-t[1]],dt=(o,t)=>[o[0]+t[0],o[1]+t[1]],Y=(o,t)=>[o[0]*t,o[1]*t],Ct=(o,t)=>o[0]*t[0]+o[1]*t[1],xt=(o,t)=>o[0]*t[1]-o[1]*t[0],Pt=o=>Math.hypot(o[0],o[1]),it=o=>{let t=Pt(o)||1;return[o[0]/t,o[1]/t]},tn=o=>[-o[1],o[0]],en=o=>[o[1],-o[0]];function wt(o,t){let e=t.eps??.005,n=[],i=[],s=p=>{for(let c=0;c<i.length;c++)if(Math.abs(i[c][0]-p[0])<=e&&Math.abs(i[c][1]-p[1])<=e)return c;return i.push([p[0],p[1]]),i.length-1},r=[];for(let p of o){let c=p.points;if(c.length<3||Math.abs(U(c))<1e-6)continue;let f=U(c)>0,_=c.map(s);for(let y=0;y<c.length;y++){let v=_[y],$=_[(y+1)%c.length];v!==$&&r.push(f?{u:v,v:$,room:p.id,edge:y,forward:!0}:{u:$,v,room:p.id,edge:y,forward:!1})}}let a=[];for(let p of r){let c=i[p.u],f=i[p.v],_=V(f,c),y=Pt(_),v=Y(_,1/y),$=[];for(let x=0;x<i.length;x++){if(x===p.u||x===p.v)continue;let w=V(i[x],c),E=Ct(w,v);E<=e||E>=y-e||Math.abs(xt(v,w))<=e&&$.push({t:E,id:x})}$.sort((x,w)=>x.t-w.t);let k=[{t:0,id:p.u},...$,{t:y,id:p.v}];for(let x=0;x+1<k.length;x++){let w=k[x],E=k[x+1],O=p.forward?w.t:y-E.t,R=p.forward?E.t:y-w.t;a.push({u:w.id,v:E.id,room:p.room,edge:p.edge,t0:O,t1:R})}}let l=new Map;for(let p of a){let c=p.u<p.v?`${p.u}-${p.v}`:`${p.v}-${p.u}`,f=l.get(c);f||l.set(c,f=[]),f.push(p)}let d=p=>({room_id:p.room,edge:p.edge,t0:p.t0,t1:p.t1}),h=[];for(let p of l.values()){let c=p[0],f=p.find(_=>_!==c&&_.u===c.v&&_.v===c.u&&_.room!==c.room);for(let _ of p)_!==c&&_!==f&&_.room!==c.room&&n.push(`overlap:${c.room}:${_.room}`);f?h.push({a:c.u,b:c.v,left:t.interior/2,right:t.interior/2,exterior:!1,roomLeft:c.room,roomRight:f.room,sources:[d(c),d(f)]}):h.push({a:c.u,b:c.v,left:0,right:t.exterior,exterior:!0,roomLeft:c.room,roomRight:null,sources:[d(c)]})}h=Qn(h,i);let u=Xn(h,i);return{walls:h.map((p,c)=>{let f=i[p.a],_=i[p.b],y=u.get(`${c}:a`),v=u.get(`${c}:b`),$=ti([y.right,v.left,_,v.right,y.left,f],1e-6);return{id:Yn(f,_),a:[f[0],f[1]],b:[_[0],_[1]],left:p.left,right:p.right,exterior:p.exterior,roomLeft:p.roomLeft,roomRight:p.roomRight,sources:p.sources,footprint:$}}),warnings:[...new Set(n)]}}function Yn(o,t){let e=s=>Math.round(s*100),[n,i]=o[0]<t[0]||o[0]===t[0]&&o[1]<=t[1]?[o,t]:[t,o];return`w_${e(n[0])}_${e(n[1])}_${e(i[0])}_${e(i[1])}`}function nn(o){return{...o,a:o.b,b:o.a,left:o.right,right:o.left,roomLeft:o.roomRight,roomRight:o.roomLeft}}function Qn(o,t){let e=o.slice(),n=!0;for(;n;){n=!1;let i=new Map;e.forEach((s,r)=>{for(let a of[s.a,s.b]){let l=i.get(a);l||i.set(a,l=[]),l.push(r)}});for(let[s,r]of i){if(r.length!==2)continue;let a=e[r[0]],l=e[r[1]];if(a.b!==s&&(a=nn(a)),l.a!==s&&(l=nn(l)),a.a===l.b)continue;let d=it(V(t[a.b],t[a.a])),h=it(V(t[l.b],t[l.a]));if(Math.abs(xt(d,h))>1e-6||Ct(d,h)<=0||a.exterior!==l.exterior||a.roomLeft!==l.roomLeft||a.roomRight!==l.roomRight||Math.abs(a.left-l.left)>1e-9||Math.abs(a.right-l.right)>1e-9)continue;let u={...a,b:l.b,sources:Jn(a.sources,l.sources)},m=e.filter((p,c)=>c!==r[0]&&c!==r[1]);m.push(u),e.length=0,e.push(...m),n=!0;break}}return e}function Jn(o,t){let e=o.map(n=>({...n}));for(let n of t){let i=e.find(s=>s.room_id===n.room_id&&s.edge===n.edge&&(Math.abs(s.t1-n.t0)<1e-6||Math.abs(n.t1-s.t0)<1e-6));i?(i.t0=Math.min(i.t0,n.t0),i.t1=Math.max(i.t1,n.t1)):e.push({...n})}return e}function Xn(o,t){let e=new Map;o.forEach((i,s)=>{let r=it(V(t[i.b],t[i.a])),a=[[i.a,{key:`${s}:a`,d:r,left:i.left,right:i.right,angle:Math.atan2(r[1],r[0])}],[i.b,{key:`${s}:b`,d:Y(r,-1),left:i.right,right:i.left,angle:Math.atan2(-r[1],-r[0])}]];for(let[l,d]of a){let h=e.get(l);h||e.set(l,h=[]),h.push(d)}});let n=new Map;for(let[i,s]of e){let r=t[i];s.sort((d,h)=>d.angle-h.angle);let a=d=>({left:dt(r,Y(tn(d.d),d.left)),right:dt(r,Y(en(d.d),d.right))});for(let d of s)n.set(d.key,a(d));if(s.length<2)continue;let l=4*Math.max(...s.map(d=>Math.max(d.left,d.right)))+1e-9;for(let d=0;d<s.length;d++){let h=s[d],u=s[(d+1)%s.length],m=dt(r,Y(tn(h.d),h.left)),p=dt(r,Y(en(u.d),u.right)),c=xt(h.d,u.d);if(Math.abs(c)<1e-4)continue;let f=xt(V(p,m),u.d)/c,_=dt(m,Y(h.d,f));Pt(V(_,r))>l||(n.get(h.key).left=_,n.get(u.key).right=_)}}return n}function ti(o,t){let e=o.filter((i,s)=>Pt(V(i,o[(s+1)%o.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let i=0;i<e.length;i++){let s=e[(i+e.length-1)%e.length],r=e[i],a=e[(i+1)%e.length],l=V(r,s),d=V(a,r);if(Math.abs(xt(it(l),it(d)))<1e-7&&Ct(l,d)>0){e=e.filter((h,u)=>u!==i),n=!0;break}}}return e}function Ht(o,t,e){let n=o.points[t],i=o.points[(t+1)%o.points.length],s=it(V(i,n));return dt(n,Y(s,e))}function sn(o,t,e,n){for(let i of o){if(!i.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let r=Ht(t,e,n);return{wall:i,s:Ct(V(r,i.a),it(V(i.b,i.a)))}}return null}var on={view:"3D",editor:"Editor",all_floors:"Alle Etagen",no_building:"Noch kein Grundriss vorhanden.",no_building_admin:"Noch kein Grundriss vorhanden. Im Editor zeichnest du deine erste Etage.",open_editor:"Editor \xF6ffnen",loading:"L\xE4dt \u2026",load_error:"Laden fehlgeschlagen",saving:"Speichert \u2026",saved:"Gespeichert",save_error:"Speichern fehlgeschlagen",walls_auto:"W\xE4nde hoch",walls_cut:"Schnitt",reset_view:"\xDCbersicht",back:"Zur\xFCck",floor:"Etage",floors:"Etagen",add_floor:"Etage hinzuf\xFCgen",floor_name:"Name",elevation:"H\xF6he \xFCber Boden (m)",height:"Raumh\xF6he (m)",cut_height:"Schnitth\xF6he (m)",delete_floor:"Etage l\xF6schen",delete_floor_confirm:"Etage \u201E{name}\u201C mit allen R\xE4umen l\xF6schen?",move_up:"Nach oben",move_down:"Nach unten",default_floor:"Erdgeschoss",new_floor:"Etage {n}",tool_select:"Ausw\xE4hlen",tool_rect:"Rechteck",tool_polygon:"Freie Form",undo:"R\xFCckg\xE4ngig",redo:"Wiederholen",fit:"Alles zeigen",room:"Raum",rooms:"R\xE4ume",room_name:"Name",area:"Bereich",no_area:"Kein Bereich",material:"Boden",x:"X (m)",z:"Y (m)",width:"Breite (m)",depth:"Tiefe (m)",points:"Eckpunkte",delete_point:"Punkt l\xF6schen",duplicate:"Duplizieren",delete:"L\xF6schen",new_room:"Raum {n}",settings:"Einstellungen",wall_exterior:"Au\xDFenwand (m)",wall_interior:"Innenwand (m)",grid:"Raster (m)",background:"Vorlage (Grundriss-Bild)",background_upload:"Bild w\xE4hlen \u2026",background_width:"Breite im Plan (m)",background_opacity:"Deckkraft",background_remove:"Vorlage entfernen",hint_select:"Raum antippen zum Ausw\xE4hlen \xB7 Ecken ziehen \xB7 \u201E+\u201C auf einer Kante f\xFCgt einen Punkt ein \xB7 Entf l\xF6scht \xB7 Strg+Z",hint_rect:"Ziehen, um ein Rechteck zu zeichnen",hint_polygon:"Punkte setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",hint_empty:"Lege zuerst eine Etage an.",area_m2:"{a} m\xB2",overlap_warning:"R\xE4ume \xFCberlappen sich \u2013 die W\xE4nde dort sind unvollst\xE4ndig.",read_only:"Nur Administratoren k\xF6nnen den Grundriss bearbeiten.",mat_wood:"Holz",mat_oak:"Eiche",mat_tiles:"Fliesen",mat_carpet:"Teppich",mat_stone:"Stein",mat_concrete:"Beton",card_name:"Floorplan 3D",card_description:"Deine Wohnung in 3D (Neon).",stats:"{fps} B/s \xB7 {calls} Draw-Calls \xB7 {tris} Dreiecke",floors_apart:"Auseinander",floors_stacked:"Gestapelt",floor_rooms_one:"1 Raum",floor_rooms:"{n} R\xE4ume",quality:"Qualit\xE4t",quality_auto:"Auto",quality_low:"Tablet",quality_high:"Hoch",state_on:"An",state_off:"Aus",state_open:"Offen",state_closed:"Zu",state_opening:"\xD6ffnet",state_closing:"Schlie\xDFt",state_playing:"Spielt",state_paused:"Pause",state_idle:"Bereit",state_locked:"Verriegelt",state_unlocked:"Entriegelt",state_detected:"Erkannt",state_clear:"Frei",state_unavailable:"Nicht verf\xFCgbar",state_heat:"Heizen",state_cool:"K\xFChlen",state_auto:"Automatik",state_heat_cool:"Heizen/K\xFChlen",state_dry:"Entfeuchten",state_fan_only:"L\xFCften",devices:"Ger\xE4te",devices_none_area:"Verkn\xFCpfe den Raum mit einem Bereich, dann erscheinen dessen Ger\xE4te hier.",devices_none:"Im Bereich gibt es keine passenden Ger\xE4te.",devices_place_all:"Alle automatisch platzieren",devices_place:"Platzieren",devices_remove:"Entfernen",devices_hint:"Platzierte Ger\xE4te erscheinen in 3D. Im Plan lassen sie sich verschieben.",panel_lights:"Licht",panel_covers:"Rolll\xE4den",panel_climate:"Heizung",panel_media:"Medien",panel_switches:"Schalter",panel_sensors:"Sensoren",panel_scenes:"Szenen & Skripte",panel_all_off:"Alle aus",panel_no_area:"Dieser Raum ist mit keinem Bereich verkn\xFCpft. Im Editor kannst du ihn verkn\xFCpfen.",panel_empty:"Im Bereich gibt es keine steuerbaren Ger\xE4te.",close:"Schlie\xDFen",brightness:"Helligkeit",color_temp:"Farbtemperatur",color:"Farbe",position:"Position",cover_open:"Auf",cover_stop:"Stopp",cover_close:"Zu",target_temp:"Soll",current_temp:"Ist",temp_down:"K\xE4lter",temp_up:"W\xE4rmer",volume:"Lautst\xE4rke",play_pause:"Wiedergabe/Pause",previous:"Zur\xFCck",next:"Weiter",run:"Ausf\xFChren",details:"Details",hold_hint:"Antippen schaltet \xB7 lange dr\xFCcken \xF6ffnet Details",tool_door:"T\xFCr",tool_window:"Fenster",hint_door:"Auf eine Wand tippen, um eine T\xFCr einzusetzen",hint_window:"Auf eine Wand tippen, um ein Fenster einzusetzen",opening_door:"T\xFCr",opening_window:"Fenster",opening_type:"Art",opening_position:"Mitte ab Ecke (m)",sill:"Br\xFCstung (m)",opening_height:"H\xF6he (m)",hinge:"Anschlag (vom Raum aus)",hinge_left:"Links",hinge_right:"Rechts",cover_entity:"Rollladen",contact_entity:"Kontakt",tilt_entity:"Kipp-Sensor",entity_auto:"Automatisch ({name})",entity_auto_none:"Automatisch (keiner gefunden)",entity_none:"Keiner",opening_hint:"Terrassent\xFCr: Fenster mit Br\xFCstung 0. Automatisch nimmt Rolll\xE4den und Kontakte aus dem Bereich des Raums.",furniture:"M\xF6bel",furniture_add:"M\xF6bel hinzuf\xFCgen",furniture_type:"M\xF6belst\xFCck",rotation:"Drehung (\xB0)",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"H\xF6he (m)",furn_sofa:"Sofa",furn_armchair:"Sessel",furn_table:"Tisch",furn_chair:"Stuhl",furn_bed:"Bett",furn_nightstand:"Nachttisch",furn_wardrobe:"Schrank",furn_shelf:"Regal",furn_kitchen:"K\xFCchenzeile",furn_fridge:"K\xFChlschrank",furn_stove:"Herd",furn_sink:"Sp\xFCle",furn_bathtub:"Badewanne",furn_shower:"Dusche",furn_wc:"WC",furn_washbasin:"Waschtisch",furn_desk:"Schreibtisch",furn_tv_board:"TV-Board",furn_plant:"Pflanze",furn_rug:"Teppich",furn_stairs:"Treppe",stairs_hint:"Die Treppe steigt nach hinten an (weg von der markierten Vorderkante) und \xF6ffnet die Decke der Etage dar\xFCber.",floor_lights:"{n} Licht an",floor_open:"{n} offen",floor_persons:"{n} Pers.",energy_consumption:"Verbrauch",energy_grid_import:"Netzbezug",energy_grid_export:"Einspeisung",energy_solar:"Solar",energy_battery:"Akku",energy_tariff:"Tarif",energy:"Energie",energy_meter:"Z\xE4hlerplatz",energy_meter_set:"Z\xE4hlerplatz setzen",energy_meter_remove:"Z\xE4hlerplatz entfernen",energy_meter_hint:"Tippe im Plan auf die Stelle des Z\xE4hlers bzw. Hausanschlusses.",energy_grid:"Netz (W, + = Bezug)",energy_solar_sensor:"Solar-Erzeugung (W)",energy_battery_sensor:"Akku-Leistung (W, + = Entladen)",energy_battery_soc:"Akku-Ladestand (%)",energy_tariff_sensor:"Tarif (z. B. \u20AC/kWh)",energy_invert:"Vorzeichen umkehren",energy_hint:"Verbraucher sind platzierte Ger\xE4te mit Leistungssensor (W) \u2013 der Sensor selbst oder einer vom selben Ger\xE4t.",tool_meter:"Z\xE4hler",hint_meter:"Auf die Stelle des Z\xE4hlers tippen",presence:"Anwesenheit",presence_hint:"Raumsensor je Person (z. B. ESPresense, Bermuda): sein Zustand nennt den Raum oder Bereich.",presence_sensor:"Raumsensor",no_persons:"In Home Assistant gibt es keine Personen."},ei={view:"3D",editor:"Editor",all_floors:"All floors",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",walls_auto:"Tall walls",walls_cut:"Cut",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",add_floor:"Add floor",floor_name:"Name",elevation:"Elevation (m)",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",default_floor:"Ground floor",new_floor:"Floor {n}",tool_select:"Select",tool_rect:"Rectangle",tool_polygon:"Free shape",undo:"Undo",redo:"Redo",fit:"Show all",room:"Room",rooms:"Rooms",room_name:"Name",area:"Area",no_area:"No area",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",delete_point:"Delete corner",duplicate:"Duplicate",delete:"Delete",new_room:"Room {n}",settings:"Settings",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 Del deletes \xB7 Ctrl+Z",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_empty:"Add a floor first.",area_m2:"{a} m\xB2",overlap_warning:"Rooms overlap \u2013 walls there are incomplete.",read_only:"Only administrators can edit the floor plan.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"Floorplan 3D",card_description:"Your home in 3D (neon).",stats:"{fps} fps \xB7 {calls} draw calls \xB7 {tris} triangles",floors_apart:"Apart",floors_stacked:"Stacked",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",devices_none_area:"Link the room to an area and its devices appear here.",devices_none:"The area has no suitable devices.",devices_place_all:"Place all automatically",devices_place:"Place",devices_remove:"Remove",devices_hint:"Placed devices appear in 3D. Drag them in the plan to move them.",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",panel_all_off:"All off",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"The area has no controllable devices.",close:"Close",brightness:"Brightness",color_temp:"Colour temperature",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details",tool_door:"Door",tool_window:"Window",hint_door:"Tap a wall to add a door",hint_window:"Tap a wall to add a window",opening_door:"Door",opening_window:"Window",opening_type:"Type",opening_position:"Centre from corner (m)",sill:"Sill height (m)",opening_height:"Height (m)",hinge:"Hinge (seen from the room)",hinge_left:"Left",hinge_right:"Right",cover_entity:"Blind",contact_entity:"Contact",tilt_entity:"Tilt sensor",entity_auto:"Automatic ({name})",entity_auto_none:"Automatic (none found)",entity_none:"None",opening_hint:"Terrace door: a window with sill 0. Automatic uses the blinds and contacts of the room's area.",furniture:"Furniture",furniture_add:"Add furniture",furniture_type:"Item",rotation:"Rotation (\xB0)",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Height (m)",furn_sofa:"Sofa",furn_armchair:"Armchair",furn_table:"Table",furn_chair:"Chair",furn_bed:"Bed",furn_nightstand:"Nightstand",furn_wardrobe:"Wardrobe",furn_shelf:"Shelf",furn_kitchen:"Kitchen unit",furn_fridge:"Fridge",furn_stove:"Stove",furn_sink:"Sink",furn_bathtub:"Bathtub",furn_shower:"Shower",furn_wc:"WC",furn_washbasin:"Washbasin",furn_desk:"Desk",furn_tv_board:"TV board",furn_plant:"Plant",furn_rug:"Rug",furn_stairs:"Stairs",stairs_hint:"The stair rises towards the back (away from the marked front edge) and opens the ceiling of the floor above.",floor_lights:"{n} lights on",floor_open:"{n} open",floor_persons:"{n} people",energy_consumption:"Consumption",energy_grid_import:"Grid import",energy_grid_export:"Export",energy_solar:"Solar",energy_battery:"Battery",energy_tariff:"Tariff",energy:"Energy",energy_meter:"Meter",energy_meter_set:"Place meter",energy_meter_remove:"Remove meter",energy_meter_hint:"Tap the spot of the meter or house connection in the plan.",energy_grid:"Grid (W, + = import)",energy_solar_sensor:"Solar production (W)",energy_battery_sensor:"Battery power (W, + = discharging)",energy_battery_soc:"Battery charge (%)",energy_tariff_sensor:"Tariff (e.g. \u20AC/kWh)",energy_invert:"Invert sign",energy_hint:"Consumers are placed devices with a power sensor (W) \u2013 the sensor itself or one of the same device.",tool_meter:"Meter",hint_meter:"Tap the spot of the meter",presence:"Presence",presence_hint:"Room sensor per person (e.g. ESPresense, Bermuda): its state names the room or area.",presence_sensor:"Room sensor",no_persons:"There are no people in Home Assistant."};function A(o,t,e={}){let i=((o?.language??navigator.language).startsWith("de")?on:ei)[t]??on[t]??t;for(let[s,r]of Object.entries(e))i=i.replace(`{${s}}`,String(r));return i}function C(o,t,e=2){return t.toLocaleString(o?.language??void 0,{maximumFractionDigits:e})}var rn={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function $t(o){return rn[o]}function an(o){return`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${rn[o]}"/></svg>`}var N=F`
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
`,ct=F`
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
`;var ln=new Set(["vertex","room","device","opening","furniture"]),dn=100,ne=10,M=o=>Math.round(o*1e3)/1e3,ie=class extends P{static properties={hass:{attribute:!1},building:{attribute:!1},narrow:{type:Boolean},_doc:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_vertex:{state:!0},_openingId:{state:!0},_furnitureId:{state:!0},_tool:{state:!0},_draft:{state:!0},_cursor:{state:!0},_guides:{state:!0},_view:{state:!0},_size:{state:!0},_images:{state:!0},_canUndo:{state:!0},_canRedo:{state:!0}};past=[];future=[];drag=null;pointers=new Map;pinch=null;fitted=!1;resizeObserver;loadingImages=new Set;constructor(){super(),this.narrow=!1,this._floorId=null,this._roomId=null,this._vertex=null,this._openingId=null,this._furnitureId=null,this._tool="select",this._draft=[],this._cursor=null,this._guides={},this._view={scale:50,ox:40,oy:40},this._size={w:800,h:600},this._images={},this._canUndo=!1,this._canRedo=!1}t(t,e){return A(this.hass,t,e)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.resizeObserver?.disconnect()}willUpdate(t){t.has("building")&&this.building!==this._doc&&(this._doc=this.building,this._doc.floors.some(e=>e.id===this._floorId)||(this._floorId=this._doc.floors[0]?.id??null),this.floor?.rooms.some(e=>e.id===this._roomId)||(this._roomId=null))}firstUpdated(){let t=this.renderRoot.querySelector(".fp3d-canvas-wrap");this.resizeObserver=new ResizeObserver(()=>{this._size={w:t.clientWidth,h:t.clientHeight},!this.fitted&&this._size.w>0&&(this.fitted=!0,this.fit())}),this.resizeObserver.observe(t)}updated(){let t=this.floor?.background;t&&!this._images[t.image_id]&&!this.loadingImages.has(t.image_id)&&this.loadImage(t.image_id)}get floor(){return this._doc?.floors.find(t=>t.id===this._floorId)}get room(){return this.floor?.rooms.find(t=>t.id===this._roomId)}get isAdmin(){return this.hass?.user?.is_admin??!0}setDoc(t,e=this._doc){e&&(this.past.push(JSON.stringify(e)),this.past.length>dn&&this.past.shift(),this.future=[]),this._doc=t,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}change(t,e=this._doc,n=!0){let i=structuredClone(e),s=i.floors.find(r=>r.id===this._floorId);!s&&this._floorId||(t(i,s),this.setDoc(i,n?e:null))}undo(){let t=this.past.pop();t&&(this.future.push(JSON.stringify(this._doc)),this.restore(JSON.parse(t)))}redo(){let t=this.future.pop();t&&(this.past.push(JSON.stringify(this._doc)),this.restore(JSON.parse(t)))}restore(t){this._doc=t,t.floors.some(e=>e.id===this._floorId)||(this._floorId=t.floors[0]?.id??null),this.floor?.rooms.some(e=>e.id===this._roomId)||(this._roomId=null),this._vertex=null,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}toScreen(t){let{scale:e,ox:n,oy:i}=this._view;return[t[0]*e+n,t[1]*e+i]}toWorld(t,e){let{scale:n,ox:i,oy:s}=this._view;return[(t-i)/n,(e-s)/n]}localPoint(t){let e=this.renderRoot.querySelector("svg").getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}fit(){let t=this.floor?.rooms.flatMap(a=>a.points)??[],e=t.length?yt(t):{x0:0,z0:0,x1:10,z1:8},n=1.5,i=e.x1-e.x0+2*n,s=e.z1-e.z0+2*n,r=Math.max(8,Math.min(400,Math.min(this._size.w/i,this._size.h/s)));this._view={scale:r,ox:this._size.w/2-(e.x0+e.x1)/2*r,oy:this._size.h/2-(e.z0+e.z1)/2*r}}zoomAt(t,e,n){let{scale:i,ox:s,oy:r}=this._view,a=Math.max(8,Math.min(600,i*t)),l=a/i;this._view={scale:a,ox:e-(e-s)*l,oy:n-(n-r)*l}}snap(t,e,n=!1){if(this._guides={},n)return t;let i=ne/this._view.scale,s=this.floor?.rooms??[],r=[];for(let c of s)c.points.forEach((f,_)=>{e&&c.id===e.roomId&&(e.index===void 0||e.index===_)||r.push(f)});let a=null,l=i;for(let c of r){let f=Math.hypot(c[0]-t[0],c[1]-t[1]);f<l&&(l=f,a=c)}if(a)return this._guides={point:a},[a[0],a[1]];for(let c of s)if(!(e&&c.id===e.roomId))for(let f=0;f<c.points.length;f++){let _=c.points[f],y=c.points[(f+1)%c.points.length],v=y[0]-_[0],$=y[1]-_[1],k=v*v+$*$;if(k<1e-9)continue;let x=((t[0]-_[0])*v+(t[1]-_[1])*$)/k;if(x<=0||x>=1)continue;let w=[_[0]+x*v,_[1]+x*$],E=Math.hypot(w[0]-t[0],w[1]-t[1]),O=this._doc.settings.grid;Math.abs($)<1e-9&&(w[0]=Math.min(Math.max(Math.round(w[0]/O)*O,Math.min(_[0],y[0])),Math.max(_[0],y[0]))),Math.abs(v)<1e-9&&(w[1]=Math.min(Math.max(Math.round(w[1]/O)*O,Math.min(_[1],y[1])),Math.max(_[1],y[1]))),E<l&&(l=E,a=w)}if(a)return this._guides={point:a},[M(a[0]),M(a[1])];let d=this._doc.settings.grid,h=[M(Math.round(t[0]/d)*d),M(Math.round(t[1]/d)*d)],u=i,m=i,p={};for(let c of r)Math.abs(c[0]-t[0])<u&&(u=Math.abs(c[0]-t[0]),h[0]=c[0],p.x=c[0]),Math.abs(c[1]-t[1])<m&&(m=Math.abs(c[1]-t[1]),h[1]=c[1],p.z=c[1]);return this._guides=p,h}onPointerDown(t){t.currentTarget.setPointerCapture(t.pointerId);let n=this.localPoint(t);if(this.pointers.set(t.pointerId,n),this.pointers.size===2){this.drag&&ln.has(this.drag.kind)&&"moved"in this.drag&&this.drag.moved&&"base"in this.drag&&this.restoreLive(this.drag.base),this.drag=null,this.pinch=this.pinchState();return}if(this.pointers.size>2)return;if(t.button===1||t.button===2||!this.floor){this.drag={kind:"pan",last:n};return}let i=this.toWorld(...n),s=t.target;if(this._tool==="rect"){let m=this.snap(i,void 0,t.altKey);this.drag={kind:"rect",start:m,end:m};return}if(this._tool==="polygon"){this.drag={kind:"tap",startScreen:n,last:n,panning:!1};return}if(this._tool==="door"||this._tool==="window"){this.placeOpening(this._tool,n)||(this.drag={kind:"pan",last:n});return}if(this._tool==="meter"){if(this.isAdmin&&this._floorId){let m=this._doc.settings.grid,[p,c]=i.map(f=>M(Math.round(f/m)*m));this.setEnergy({meter:{floor_id:this._floorId,x:p,z:c}})}this._tool="select";return}let r=s.closest("[data-device]");if(r&&this.isAdmin){this.drag={kind:"device",entityId:r.getAttribute("data-device"),start:i,startScreen:n,base:this._doc,moved:!1};return}let a=s.closest("[data-opening]");if(a){let m=a.getAttribute("data-opening");this.selectItem("opening",m),this.drag=this.isAdmin?{kind:"opening",id:m,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let l=s.closest("[data-furniture]");if(l&&!s.closest("[data-vertex], [data-mid]")){let m=l.getAttribute("data-furniture");this.selectItem("furniture",m),this.drag=this.isAdmin?{kind:"furniture",id:m,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let d=s.closest("[data-vertex]"),h=s.closest("[data-mid]");if(d&&this.room&&this.isAdmin){this._vertex=Number(d.getAttribute("data-vertex")),this.drag={kind:"vertex",roomId:this.room.id,index:this._vertex,base:this._doc,moved:!1};return}if(h&&this.room&&this.isAdmin){let m=Number(h.getAttribute("data-mid")),p=this.room.points,c=p[m],f=p[(m+1)%p.length],_=[M((c[0]+f[0])/2),M((c[1]+f[1])/2)],y=this._doc,v=this.room.id;this.change(($,k)=>{k.rooms.find(w=>w.id===v).points.splice(m+1,0,_);let x=Math.hypot(_[0]-c[0],_[1]-c[1]);for(let w of k.openings)w.room_id===v&&(w.edge>m?w.edge+=1:w.edge===m&&w.offset>x&&(w.edge=m+1,w.offset=M(w.offset-x)))},y,!1),this._vertex=m+1,this.drag={kind:"vertex",roomId:v,index:m+1,base:y,moved:!0};return}let u=s.closest("[data-room]")?.getAttribute("data-room")??this.roomAt(i);if(u){u!==this._roomId&&(this._vertex=null),this.selectItem("room",u),this.drag=this.isAdmin?{kind:"room",roomId:u,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}this.selectItem("room",null),this.drag={kind:"pan",last:n}}onPointerMove(t){let e=this.localPoint(t);if(this.pointers.has(t.pointerId)&&this.pointers.set(t.pointerId,e),this.pinch){let s=this.pinchState();s&&(this.zoomAt(s.dist/Math.max(1,this.pinch.dist),...s.mid),this._view={...this._view,ox:this._view.ox+s.mid[0]-this.pinch.mid[0],oy:this._view.oy+s.mid[1]-this.pinch.mid[1]},this.pinch=s);return}let n=this.toWorld(...e),i=this.drag;if(!i){this._tool!=="select"&&this.floor&&(this._cursor=this.snap(n,void 0,t.altKey));return}switch(i.kind){case"pan":this._view={...this._view,ox:this._view.ox+e[0]-i.last[0],oy:this._view.oy+e[1]-i.last[1]},i.last=e;break;case"tap":(i.panning||Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])>6)&&(i.panning=!0,this._view={...this._view,ox:this._view.ox+e[0]-i.last[0],oy:this._view.oy+e[1]-i.last[1]}),i.last=e;break;case"rect":i.end=this.snap(n,void 0,t.altKey),this.requestUpdate();break;case"vertex":{let s=this.snap(n,{roomId:i.roomId,index:i.index},t.altKey);i.moved=!0,this.change((r,a)=>{a.rooms.find(l=>l.id===i.roomId).points[i.index]=s},i.base,!1);break}case"room":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.base.floors.find(d=>d.id===this._floorId)?.rooms.find(d=>d.id===i.roomId);if(!s)return;let r=this.roomDelta(s,[n[0]-i.start[0],n[1]-i.start[1]],t.altKey),a=i.base.floors.find(d=>d.id===this._floorId),l=new Set(a.placements.filter(d=>L([d.x,d.z],s.points)).map(d=>d.entity_id));this.change((d,h)=>{let u=h.rooms.find(m=>m.id===i.roomId);u.points=s.points.map(([m,p])=>[M(m+r[0]),M(p+r[1])]),h.placements=a.placements.map(m=>l.has(m.entity_id)?{...m,x:M(m.x+r[0]),z:M(m.z+r[1])}:m)},i.base,!1);break}case"opening":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.base.floors.find(d=>d.id===this._floorId),r=s?.openings.find(d=>d.id===i.id),a=s?.rooms.find(d=>d.id===r?.room_id);if(!r||!a)return;let l=this.offsetOnEdge(a,r.edge,n,r.width,t.altKey);this.change((d,h)=>Object.assign(h.openings.find(u=>u.id===i.id),{offset:l}),i.base,!1);break}case"furniture":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.base.floors.find(d=>d.id===this._floorId)?.furniture.find(d=>d.id===i.id);if(!s)return;let r=t.altKey?.01:this._doc.settings.grid,a=M(Math.round((s.x+n[0]-i.start[0])/r)*r),l=M(Math.round((s.z+n[1]-i.start[1])/r)*r);this.change((d,h)=>Object.assign(h.furniture.find(u=>u.id===i.id),{x:a,z:l}),i.base,!1);break}case"device":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.base.floors.find(d=>d.id===this._floorId)?.placements.find(d=>d.entity_id===i.entityId);if(!s)return;let r=t.altKey?.01:this._doc.settings.grid,a=M(Math.round((s.x+n[0]-i.start[0])/r)*r),l=M(Math.round((s.z+n[1]-i.start[1])/r)*r);this.change((d,h)=>Object.assign(h.placements.find(u=>u.entity_id===i.entityId),{x:a,z:l}),i.base,!1);break}}}onPointerUp(t){if(this.pointers.delete(t.pointerId),this.pinch){this.pointers.size<2&&(this.pinch=null);return}let e=this.drag;if(this.drag=null,!e||t.type==="pointercancel"){e&&ln.has(e.kind)&&"moved"in e&&e.moved&&"base"in e&&this.restoreLive(e.base);return}let n=this.localPoint(t);switch(e.kind){case"rect":{let[i,s]=e.start,[r,a]=e.end;if(Math.abs(r-i)>=.2&&Math.abs(a-s)>=.2){let l=[Math.min(i,r),Math.min(s,a)],d=[Math.max(i,r),Math.max(s,a)];this.addRoom([l,[d[0],l[1]],d,[l[0],d[1]]])}this._guides={};break}case"tap":e.panning||this.addDraftPoint(this.snap(this.toWorld(...n),void 0,t.altKey),n);break;case"opening":case"furniture":e.moved&&this.pushHistory(e.base);break;case"device":if(e.moved)this.pushHistory(e.base);else{let i=this.floor?.placements.find(r=>r.entity_id===e.entityId),s=i?this.roomAt([i.x,i.z]):null;s&&(this._roomId=s)}break;case"vertex":case"room":e.moved&&this.pushHistory(e.base),this._guides={};break;default:break}}onWheel(t){t.preventDefault();let[e,n]=this.localPoint(t);this.zoomAt(Math.exp(-t.deltaY*(t.deltaMode===1?.05:.0015)),e,n)}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e[0]-n[0],e[1]-n[1]),mid:[(e[0]+n[0])/2,(e[1]+n[1])/2]}}pushHistory(t){this.past.push(JSON.stringify(t)),this.past.length>dn&&this.past.shift(),this.future=[],this._canUndo=!0,this._canRedo=!1}restoreLive(t){this._doc=t,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}roomDelta(t,e,n){if(n)return e;let i=this._doc.settings.grid,s=[Math.round(e[0]/i)*i,Math.round(e[1]/i)*i],a=ne/this._view.scale;this._guides={};for(let l of this.floor?.rooms??[])if(l.id!==t.id)for(let d of l.points)for(let h of t.points){let u=Math.hypot(h[0]+e[0]-d[0],h[1]+e[1]-d[1]);u<a&&(a=u,s=[d[0]-h[0],d[1]-h[1]],this._guides={point:d})}return s}roomAt(t){return(this.floor?.rooms??[]).filter(i=>L(t,i.points)).sort((i,s)=>at(i.points)-at(s.points))[0]?.id??null}addDraftPoint(t,e){let n=this._draft;if(n.length>=3){let[s,r]=this.toScreen(n[0]);if(Math.hypot(s-e[0],r-e[1])<14){this.closeDraft();return}}let i=n[n.length-1];i&&Math.hypot(i[0]-t[0],i[1]-t[1])<1e-6||(this._draft=[...n,t])}closeDraft(){this._draft.length>=3&&at(this._draft)>.05&&this.addRoom(this._draft),this._draft=[],this._cursor=null,this._guides={}}addRoom(t){if(!this.floor)return;let e=G("room"),n=this.floor.rooms.length+1;this.change((i,s)=>s.rooms.push({id:e,name:this.t("new_room",{n}),area_id:null,points:t.map(([r,a])=>[M(r),M(a)]),floor_material:"wood"})),this._roomId=e,this._vertex=null,this._tool="select"}onKey=t=>{if(t.composedPath().some(i=>i instanceof HTMLInputElement||i instanceof HTMLSelectElement||i instanceof HTMLTextAreaElement)||!this.isConnected||!this.offsetParent)return;let n=t.ctrlKey||t.metaKey;n&&t.key.toLowerCase()==="z"?(t.preventDefault(),t.shiftKey?this.redo():this.undo()):n&&t.key.toLowerCase()==="y"?(t.preventDefault(),this.redo()):n&&t.key.toLowerCase()==="d"?(t.preventDefault(),this.duplicateRoom()):t.key==="Delete"||t.key==="Backspace"&&this._tool==="select"?this._openingId?this.deleteOpening():this._furnitureId?this.deleteFurniture():this._vertex!==null?this.deleteVertex(this._vertex):this.deleteRoom():t.key.toLowerCase()==="r"&&!n&&this._furnitureId?this.rotateFurniture(t.shiftKey?-90:90):t.key==="Backspace"&&this._tool==="polygon"?this._draft=this._draft.slice(0,-1):t.key==="Enter"&&this._tool==="polygon"?this.closeDraft():t.key==="Escape"&&(this._draft.length?this._draft=[]:this._tool!=="select"?this._tool="select":this.selectItem("room",null),this._cursor=null)};addFloor(){let t=this._doc.floors,e=t[t.length-1],n=G("floor"),i=t.length===0?this.t("default_floor"):this.t("new_floor",{n:t.length}),s=e?M(e.elevation+e.height+.25):0,r=structuredClone(this._doc);r.floors.push(Le(n,i,s)),this.setDoc(r),this._floorId=n,this._roomId=null}moveFloor(t){let e=this._doc.floors.findIndex(s=>s.id===this._floorId),n=e+t;if(e<0||n<0||n>=this._doc.floors.length)return;let i=structuredClone(this._doc);[i.floors[e],i.floors[n]]=[i.floors[n],i.floors[e]],this.setDoc(i)}deleteFloor(){let t=this.floor;if(!t||!confirm(this.t("delete_floor_confirm",{name:t.name})))return;let e=structuredClone(this._doc);e.floors=e.floors.filter(n=>n.id!==t.id),this.setDoc(e),this._floorId=e.floors[0]?.id??null,this._roomId=null}deleteRoom(){let t=this._roomId;!t||!this.isAdmin||(this.change((e,n)=>{let i=n.rooms.find(s=>s.id===t);n.rooms=n.rooms.filter(s=>s.id!==t),n.openings=n.openings.filter(s=>s.room_id!==t),i&&(n.placements=n.placements.filter(s=>!L([s.x,s.z],i.points)))}),this._roomId=null,this._vertex=null)}duplicateRoom(){let t=this.room;if(!t||!this.isAdmin)return;let e=G("room");this.change((n,i)=>i.rooms.push({...structuredClone(t),id:e,points:t.points.map(([s,r])=>[M(s+.5),M(r+.5)])})),this._roomId=e}selectItem(t,e){(t!=="room"||e!==this._roomId)&&(this._vertex=null),this._roomId=t==="room"?e:this._roomId,this._openingId=t==="opening"?e:null,this._furnitureId=t==="furniture"?e:null,t==="opening"&&e&&(this._roomId=this.floor?.openings.find(n=>n.id===e)?.room_id??this._roomId)}get opening(){return this._openingId?this.floor?.openings.find(t=>t.id===this._openingId):void 0}get furnitureItem(){return this._furnitureId?this.floor?.furniture.find(t=>t.id===this._furnitureId):void 0}offsetOnEdge(t,e,n,i,s){let r=t.points[e],a=t.points[(e+1)%t.points.length],l=Math.hypot(a[0]-r[0],a[1]-r[1])||1,d=((n[0]-r[0])*(a[0]-r[0])+(n[1]-r[1])*(a[1]-r[1]))/l,h=s?.01:this._doc.settings.grid,u=Math.min(i,l)/2;return M(Math.min(l-u,Math.max(u,Math.round(d/h)*h)))}placeOpening(t,e){let n=this.floor;if(!n||!this.isAdmin)return!1;let i=null;for(let p of n.rooms)for(let c=0;c<p.points.length;c++){let[f,_]=this.toScreen(p.points[c]),[y,v]=this.toScreen(p.points[(c+1)%p.points.length]),$=(y-f)**2+(v-_)**2||1,k=Math.min(1,Math.max(0,((e[0]-f)*(y-f)+(e[1]-_)*(v-_))/$)),x=Math.hypot(e[0]-f-(y-f)*k,e[1]-_-(v-_)*k),w=x-(p.id===this._roomId?.5:0);x<ne*2.2&&(!i||w<i.d)&&(i={room:p,edge:c,d:w})}if(!i)return!1;let{room:s,edge:r}=i,a=s.points[r],l=s.points[(r+1)%s.points.length],d=Math.hypot(l[0]-a[0],l[1]-a[1]),h=Rt[t],u=M(Math.min(h.width,Math.max(.3,d-.1))),m={id:G("opening"),room_id:s.id,edge:r,offset:this.offsetOnEdge(s,r,this.toWorld(...e),u,!1),width:u,type:t,sill:h.sill,height:h.height,hinge:"left",cover:null,contact:null,tilt:null};return this.change((p,c)=>c.openings.push(m)),this._tool="select",this.selectItem("opening",m.id),!0}updateOpening(t){let e=this._openingId;this.change((n,i)=>Object.assign(i.openings.find(s=>s.id===e),t))}deleteOpening(){let t=this._openingId;!t||!this.isAdmin||(this.change((e,n)=>n.openings=n.openings.filter(i=>i.id!==t)),this._openingId=null)}addFurniture(t){let e=this.floor;if(!e||!this.isAdmin)return;let[n,i,s]=Be[t],r=this._doc.floors.filter(m=>m.elevation>e.elevation).sort((m,p)=>m.elevation-p.elevation)[0],a=t==="stairs"?M(r?r.elevation-e.elevation:e.height+.25):s,l=this.room,[d,h]=l?Z(l.points):this.toWorld(this._size.w/2,this._size.h/2),u={id:G("furniture"),type:t,x:M(d),z:M(h),rotation:0,w:n,d:i,h:a,variant:null};this.change((m,p)=>p.furniture.push(u)),this.selectItem("furniture",u.id)}updateFurniture(t){let e=this._furnitureId;this.change((n,i)=>Object.assign(i.furniture.find(s=>s.id===e),t))}rotateFurniture(t){let e=this.furnitureItem;!e||!this.isAdmin||this.updateFurniture({rotation:((e.rotation+t)%360+360)%360})}deleteFurniture(){let t=this._furnitureId;!t||!this.isAdmin||(this.change((e,n)=>n.furniture=n.furniture.filter(i=>i.id!==t)),this._furnitureId=null)}duplicateFurniture(){let t=this.furnitureItem;if(!t||!this.isAdmin)return;let e={...structuredClone(t),id:G("furniture"),x:M(t.x+.3),z:M(t.z+.3)};this.change((n,i)=>i.furniture.push(e)),this.selectItem("furniture",e.id)}placeDevices(t){let e=this.room;if(!e||!t.length||!this.isAdmin)return;let n=new Set(t);this.change((i,s)=>{for(let r of i.floors)r.placements=r.placements.filter(a=>!n.has(a.entity_id));s.placements.push(...Je(e,t,s.placements.map(r=>[r.x,r.z])))})}removeDevice(t){this.change(e=>{for(let n of e.floors)n.placements=n.placements.filter(i=>i.entity_id!==t)})}deleteVertex(t){let e=this.room;if(!e||e.points.length<=3)return;let n=e.points.length,i=(t-1+n)%n;this.change((s,r)=>{r.rooms.find(a=>a.id===e.id).points.splice(t,1),r.openings=r.openings.filter(a=>a.room_id!==e.id||a.edge!==t&&a.edge!==i).map(a=>a.room_id===e.id&&a.edge>t?{...a,edge:a.edge-1}:a)}),this._vertex=null}updateFloor(t){this.change((e,n)=>Object.assign(n,t))}updateRoom(t){let e=this._roomId;this.change((n,i)=>Object.assign(i.rooms.find(s=>s.id===e),t))}setArea(t){let e=this.room;if(!e)return;let n=t?this.hass?.areas?.[t]:void 0,i=!e.name||/^(Raum|Room) \d+$/.test(e.name)||Object.values(this.hass?.areas??{}).some(s=>s.name===e.name);this.updateRoom({area_id:t||null,...n&&i?{name:n.name}:{}})}setRect(t,e){let n=this.room;if(!n||!Number.isFinite(e))return;let i=yt(n.points),{x0:s,z0:r,x1:a,z1:l}=i;t==="x"&&([s,a]=[e,e+(a-s)]),t==="z"&&([r,l]=[e,e+(l-r)]),t==="w"&&e>.05&&(a=s+e),t==="d"&&e>.05&&(l=r+e),this.updateRoom({points:[[M(s),M(r)],[M(a),M(r)],[M(a),M(l)],[M(s),M(l)]]})}setPoint(t,e,n){let i=this.room;if(!i||!Number.isFinite(n))return;let s=i.points.map(r=>[...r]);s[t][e]=M(n),this.updateRoom({points:s})}async loadImage(t){this.loadingImages.add(t);try{let e=await Ve(this.hass,t),n=new Image;n.src=e,await n.decode(),this._images={...this._images,[t]:{url:e,aspect:n.naturalHeight/n.naturalWidth}}}catch{}}async uploadBackground(t){let e=t.target,n=e.files?.[0];if(e.value="",!n)return;let i=await createImageBitmap(n),s=Math.min(1,2048/Math.max(i.width,i.height)),r=document.createElement("canvas");r.width=Math.round(i.width*s),r.height=Math.round(i.height*s),r.getContext("2d").drawImage(i,0,0,r.width,r.height);let a=r.toDataURL("image/jpeg",.85),l=G("img");await Te(this.hass,l,a),this._images={...this._images,[l]:{url:a,aspect:r.height/r.width}};let d=this.floor?.rooms.length?yt(this.floor.rooms.flatMap(h=>h.points)):null;this.updateFloor({background:{image_id:l,x:d?d.x0:0,z:d?d.z0:0,width:d?Math.max(4,M(d.x1-d.x0)):12,opacity:.5}})}render(){let t=this.floor,e=t?wt(t.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior}):null;return b`
      <div class="fp3d-editor ${this.narrow?"fp3d-narrow":""}">
        <div class="fp3d-main">
          <div class="fp3d-toolbar">
            <div class="fp3d-seg" role="group" aria-label=${this.t("tool_select")}>
              ${["select","rect","polygon","door","window"].map(n=>b`<button
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
            ${e?.warnings.length?b`<span class="fp3d-warn">${this.t("overlap_warning")}</span>`:g}
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
              ${this.renderBackground(t)} ${this.renderGrid()} ${this.renderGhost()} ${e?this.renderWalls(e.walls):g}
              ${t?this.renderRooms(t):g} ${t?this.renderFurniture(t):g}
              ${t&&e?this.renderOpenings(t,e.walls):g} ${t?this.renderMeter(t):g}
              ${t&&this._tool==="select"?this.renderDevices(t):g}
              ${this.room&&this.isAdmin&&this._tool==="select"&&!this._openingId&&!this._furnitureId?this.renderHandles(this.room):g}
              ${this.renderDraft()} ${this.renderGuides()}
            </svg>
            <p class="fp3d-hint">${t?this.t(`hint_${this._tool}`):this.t("hint_empty")}</p>
          </div>
        </div>
        <aside class="fp3d-side">${this.renderSide(t)}</aside>
      </div>
    `}renderBackground(t){let e=t?.background,n=e?this._images[e.image_id]:void 0;if(!e||!n)return g;let[i,s]=this.toScreen([e.x,e.z]),r=e.width*this._view.scale;return S`<image href=${n.url} x=${i} y=${s} width=${r} height=${r*n.aspect} opacity=${e.opacity} preserveAspectRatio="none" pointer-events="none" />`}renderGrid(){let{scale:t}=this._view,{w:e,h:n}=this._size,i=t>=90?.1:t>=30?.5:1,s=t>=20?1:5,[r,a]=this.toWorld(0,0),[l,d]=this.toWorld(e,n),h=[],u=(c,f)=>{for(let _=Math.ceil(r/c)*c;_<=l;_+=c){let y=this.toScreen([_,0])[0];h.push(S`<line class=${f} x1=${y} y1="0" x2=${y} y2=${n} />`)}for(let _=Math.ceil(a/c)*c;_<=d;_+=c){let y=this.toScreen([0,_])[1];h.push(S`<line class=${f} x1="0" y1=${y} x2=${e} y2=${y} />`)}};i<s&&u(i,"fp3d-grid-minor"),u(s,"fp3d-grid-major");let[m,p]=this.toScreen([0,0]);return h.push(S`<circle class="fp3d-origin" cx=${m} cy=${p} r="3" />`),S`<g pointer-events="none">${h}</g>`}renderGhost(){let t=this._doc?.floors.findIndex(n=>n.id===this._floorId)??-1,e=t>0?this._doc.floors[t-1]:void 0;return e?S`<g pointer-events="none">${e.rooms.map(n=>S`<polygon class="fp3d-ghost" points=${n.points.map(i=>this.toScreen(i).join(",")).join(" ")} />`)}</g>`:g}renderWalls(t){return S`<g pointer-events="none">${t.map(e=>S`<polygon class=${e.exterior?"fp3d-wall fp3d-wall-ext":"fp3d-wall"} points=${e.footprint.map(n=>this.toScreen(n).join(",")).join(" ")} />`)}</g>`}renderRooms(t){return S`
      <g>${t.rooms.map(e=>{let n=e.points.map(i=>this.toScreen(i).join(",")).join(" ");return S`<polygon data-room=${e.id} class=${e.id===this._roomId?"fp3d-room fp3d-room-sel":"fp3d-room"} points=${n} />`})}</g>
      <g pointer-events="none">${t.rooms.map(e=>{let[n,i]=this.toScreen(Z(e.points));return S`<text class="fp3d-room-name" x=${n} y=${i-2}>${e.name}</text>
          <text class="fp3d-room-area" x=${n} y=${i+14}>${this.t("area_m2",{a:C(this.hass,at(e.points),1)})}</text>`})}</g>
    `}renderMeter(t){let e=this._doc.energy?.meter;if(!e||e.floor_id!==t.id)return g;let[n,i]=this.toScreen([e.x,e.z]);return S`<g class="fp3d-meter" transform="translate(${n} ${i})" pointer-events="none">
      <rect x="-11" y="-11" width="22" height="22" rx="5" />
      <path d="M1.5 -7 L-4 1 H0 L-1.5 7 L4 -1 H0 Z" />
    </g>`}renderFurniture(t){return S`<g>${t.furniture.map(e=>{let n=Ue(e).map(h=>this.toScreen(h)),i=e.id===this._furnitureId,[s,r]=[n[2],n[3]],[a,l]=this.toScreen([e.x,e.z]),d=Math.min(e.w,e.d)*this._view.scale>34;return S`<g data-furniture=${e.id} class=${i?"fp3d-furn fp3d-furn-sel":"fp3d-furn"}>
        <polygon points=${n.map(h=>h.join(",")).join(" ")} />
        <line class="fp3d-furn-front" x1=${s[0]} y1=${s[1]} x2=${r[0]} y2=${r[1]} />
        ${d?S`<text x=${a} y=${l+4}>${this.t(`furn_${e.type}`)}</text>`:g}
      </g>`})}</g>`}renderOpenings(t,e){return S`<g>${t.openings.map(n=>{let i=t.rooms.find(v=>v.id===n.room_id);if(!i||n.edge>=i.points.length)return g;let s=sn(e,i,n.edge,n.offset),r=Ht(i,n.edge,n.offset-n.width/2),a=Ht(i,n.edge,n.offset+n.width/2),l=(a[0]-r[0])/(n.width||1),d=(a[1]-r[1])/(n.width||1),h=U(i.points)>=0?1:-1,u=[-d*h,l*h],m=[.06,.06];s&&(m=s.wall.roomLeft===i.id?[s.wall.left,s.wall.right]:[s.wall.right,s.wall.left]);let p=(v,$)=>this.toScreen([v[0]+u[0]*$,v[1]+u[1]*$]),c=[p(r,m[0]+.01),p(a,m[0]+.01),p(a,-m[1]-.01),p(r,-m[1]-.01)],f=n.id===this._openingId,_=`fp3d-open ${n.type==="door"?"fp3d-open-door":"fp3d-open-window"}${f?" fp3d-open-sel":""}`,y;if(n.type==="door"){let v=n.hinge==="left",$=v?r:a,k=v?a:r,x=p($,n.width),[w,E]=this.toScreen($),[O,R]=this.toScreen(k),z=n.width*this._view.scale,H=(x[0]-w)*(R-E)-(x[1]-E)*(O-w);y=S`<path d="M${w} ${E}L${x[0]} ${x[1]}A${z} ${z} 0 0 ${H>0?1:0} ${O} ${R}" />`}else{let v=(m[0]-m[1])/2,$=p(r,v+.035),k=p(a,v+.035),x=p(r,v-.035),w=p(a,v-.035);y=S`<line x1=${$[0]} y1=${$[1]} x2=${k[0]} y2=${k[1]} /><line x1=${x[0]} y1=${x[1]} x2=${w[0]} y2=${w[1]} />`}return S`<g data-opening=${n.id} class=${_}>
        <polygon class="fp3d-open-gap" points=${c.map(v=>v.join(",")).join(" ")} />
        ${y}
      </g>`})}</g>`}renderDevices(t){return S`<g>${t.placements.map(e=>{let n=I(e.entity_id);if(!n)return g;let[i,s]=this.toScreen([e.x,e.z]),r=this.hass?.states[e.entity_id]?.state==="on";return S`<g data-device=${e.entity_id} class=${r?"fp3d-device fp3d-device-on":"fp3d-device"} transform="translate(${i} ${s})">
        <title>${T(this.hass,e.entity_id)}</title>
        <circle r="18" class="fp3d-hit" /><circle r="12" />
        <path d=${$t(n)} transform="translate(-7.2 -7.2) scale(0.6)" />
      </g>`})}</g>`}renderHandles(t){let e=t.points,n=e.length,i=e.map((r,a)=>{let l=e[(a+1)%n],[d,h]=this.toScreen(r),[u,m]=this.toScreen(l),p=Math.hypot(l[0]-r[0],l[1]-r[1]),c=(d+u)/2,f=(h+m)/2,[_,y]=this.toScreen(Z(e)),v=-(m-h),$=u-d,k=Math.hypot(v,$)||1;v/=k,$/=k,v*(c-_)+$*(f-y)<0&&(v=-v,$=-$);let x=Math.hypot(u-d,m-h);return S`
        ${x>50?S`<text class="fp3d-dim" x=${c+v*16} y=${f+$*16+4}>${C(this.hass,p,2)} m</text>`:g}
        ${x>36?S`<g data-mid=${a} class="fp3d-mid"><circle cx=${c} cy=${f} r="14" class="fp3d-hit" /><circle cx=${c} cy=${f} r="6" /><path d="M${c-3} ${f}h6M${c} ${f-3}v6" /></g>`:g}
      `}),s=e.map((r,a)=>{let[l,d]=this.toScreen(r);return S`<g data-vertex=${a} class=${a===this._vertex?"fp3d-vertex fp3d-vertex-sel":"fp3d-vertex"}><circle cx=${l} cy=${d} r="16" class="fp3d-hit" /><circle cx=${l} cy=${d} r="6" /></g>`});return S`<g>${i}${s}</g>`}renderDraft(){let t=this.drag;if(t?.kind==="rect"){let[n,i]=this.toScreen(t.start),[s,r]=this.toScreen(t.end),a=Math.abs(t.end[0]-t.start[0]),l=Math.abs(t.end[1]-t.start[1]);return S`<g pointer-events="none">
        <rect class="fp3d-draft" x=${Math.min(n,s)} y=${Math.min(i,r)} width=${Math.abs(s-n)} height=${Math.abs(r-i)} />
        <text class="fp3d-dim" x=${(n+s)/2} y=${Math.min(i,r)-8}>${C(this.hass,a,2)} × ${C(this.hass,l,2)} m</text>
      </g>`}if(this._tool!=="polygon")return g;let e=[...this._draft,...this._cursor?[this._cursor]:[]].map(n=>this.toScreen(n));return S`<g pointer-events="none">
      ${e.length>1?S`<polyline class="fp3d-draft" points=${e.map(n=>n.join(",")).join(" ")} />`:g}
      ${this._draft.map((n,i)=>{let[s,r]=this.toScreen(n);return S`<circle class=${i===0&&this._draft.length>=3?"fp3d-draft-pt fp3d-draft-first":"fp3d-draft-pt"} cx=${s} cy=${r} r=${i===0&&this._draft.length>=3?9:5} />`})}
      ${this._cursor?S`<circle class="fp3d-cursor" cx=${this.toScreen(this._cursor)[0]} cy=${this.toScreen(this._cursor)[1]} r="4" />`:g}
    </g>`}renderGuides(){let t=this._guides,{w:e,h:n}=this._size;return S`<g pointer-events="none">
      ${t.x!==void 0?S`<line class="fp3d-guide" x1=${this.toScreen([t.x,0])[0]} y1="0" x2=${this.toScreen([t.x,0])[0]} y2=${n} />`:g}
      ${t.z!==void 0?S`<line class="fp3d-guide" x1="0" y1=${this.toScreen([0,t.z])[1]} x2=${e} y2=${this.toScreen([0,t.z])[1]} />`:g}
      ${t.point?S`<circle class="fp3d-snap" cx=${this.toScreen(t.point)[0]} cy=${this.toScreen(t.point)[1]} r="9" />`:g}
    </g>`}num(t,e,n,i=.01,s){return b`<label class="fp3d-field"
      >${t}
      <input
        type="number"
        inputmode="decimal"
        step=${i}
        min=${s??g}
        .value=${String(M(e))}
        ?disabled=${!this.isAdmin}
        @change=${r=>{let a=parseFloat(r.target.value.replace(",","."));Number.isFinite(a)&&n(a)}}
    /></label>`}renderSide(t){let e=this._doc?.floors??[],n=this.room,i=this.isAdmin,s=Object.values(this.hass?.areas??{}).sort((r,a)=>r.name.localeCompare(a.name));return b`
      ${i?g:b`<p class="fp3d-note">${this.t("read_only")}</p>`}
      <section>
        <h3>${this.t("floors")}</h3>
        <div class="fp3d-floor-list">
          ${[...e].reverse().map(r=>b`<button
              class="fp3d-chip"
              aria-pressed=${r.id===this._floorId}
              @click=${()=>{this._floorId=r.id,this._roomId=null,this._vertex=null,this._draft=[],this.fit()}}
            >
              ${r.name}
            </button>`)}
          ${i?b`<button class="fp3d-btn" @click=${()=>this.addFloor()}>+ ${this.t("add_floor")}</button>`:g}
        </div>
        ${t?b`<div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${this.t("floor_name")}
                <input .value=${t.name} ?disabled=${!i} @change=${r=>this.updateFloor({name:r.target.value})}
              /></label>
              ${this.num(this.t("elevation"),t.elevation,r=>this.updateFloor({elevation:r}))}
              ${this.num(this.t("height"),t.height,r=>this.updateFloor({height:Math.max(1,r)}),.05,1)}
              ${i?b`<div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn" @click=${()=>this.moveFloor(1)}>${this.t("move_up")}</button>
                    <button class="fp3d-btn" @click=${()=>this.moveFloor(-1)}>${this.t("move_down")}</button>
                    <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFloor()}>${this.t("delete_floor")}</button>
                  </div>`:g}
            </div>`:g}
      </section>
      ${this.opening?this.renderOpeningForm(this.opening):this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):n?b`${this.renderRoomForm(n,s)} ${this.renderDeviceList(n)}`:t?this.renderRoomList(t):g}
      ${t&&i?this.renderFurnitureLibrary():g} ${i?this.renderEnergySettings():g}
      ${i?this.renderPresenceSettings():g}
      ${t&&i?this.renderBackgroundForm(t):g} ${i?this.renderSettings():g}
    `}renderRoomList(t){return t.rooms.length?b`<section>
      <h3>${this.t("rooms")}</h3>
      <div class="fp3d-room-list">
        ${t.rooms.map(e=>b`<button class="fp3d-row" @click=${()=>this.selectItem("room",e.id)}>
            <span>${e.name}</span><span class="fp3d-muted">${this.t("area_m2",{a:C(this.hass,at(e.points),1)})}</span>
          </button>`)}
      </div>
    </section>`:g}renderRoomForm(t,e){let n=this.isAdmin,i=We(t.points),s=yt(t.points);return b`<section>
      <h3>${this.t("room")}</h3>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("room_name")}
          <input .value=${t.name} ?disabled=${!n} @change=${r=>this.updateRoom({name:r.target.value})}
        /></label>
        <label class="fp3d-field fp3d-wide"
          >${this.t("area")}
          <select ?disabled=${!n} @change=${r=>this.setArea(r.target.value)}>
            <option value="" ?selected=${!t.area_id}>${this.t("no_area")}</option>
            ${e.map(r=>b`<option value=${r.area_id} ?selected=${r.area_id===t.area_id}>${r.name}</option>`)}
          </select></label
        >
        <label class="fp3d-field fp3d-wide"
          >${this.t("material")}
          <select ?disabled=${!n} @change=${r=>this.updateRoom({floor_material:r.target.value})}>
            ${De.map(r=>b`<option value=${r} ?selected=${r===t.floor_material}>${this.t(`mat_${r}`)}</option>`)}
          </select></label
        >
        ${i?b`${this.num(this.t("x"),s.x0,r=>this.setRect("x",r))} ${this.num(this.t("z"),s.z0,r=>this.setRect("z",r))}
            ${this.num(this.t("width"),s.x1-s.x0,r=>this.setRect("w",r),.01,.05)}
            ${this.num(this.t("depth"),s.z1-s.z0,r=>this.setRect("d",r),.01,.05)}`:g}
      </div>
      <details class="fp3d-points" ?open=${!i}>
        <summary>${this.t("points")} (${t.points.length})</summary>
        ${t.points.map((r,a)=>b`<div class="fp3d-point ${a===this._vertex?"fp3d-point-sel":""}">
            <span class="fp3d-muted">${a+1}</span>
            ${this.num(this.t("x"),r[0],l=>this.setPoint(a,0,l))} ${this.num(this.t("z"),r[1],l=>this.setPoint(a,1,l))}
            ${n?b`<button class="fp3d-btn" title=${this.t("delete_point")} ?disabled=${t.points.length<=3} @click=${()=>this.deleteVertex(a)}>
                  ×
                </button>`:g}
          </div>`)}
      </details>
      ${n?b`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.duplicateRoom()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoom()}>${this.t("delete")}</button>
          </div>`:g}
    </section>`}entityOptions(t){let e=n=>{let i=this.hass?.entities?.[n],s=i?.area_id??(i?.device_id?this.hass?.devices?.[i.device_id]?.area_id:null);return s?this.hass?.areas?.[s]?.name:void 0};return Object.keys(this.hass?.states??{}).filter(t).map(n=>({id:n,label:`${T(this.hass,n)}${e(n)?` \xB7 ${e(n)}`:""}`})).sort((n,i)=>n.label.localeCompare(i.label))}entitySelect(t,e,n,i,s){let r=n===void 0?null:n?this.t("entity_auto",{name:T(this.hass,n)}):this.t("entity_auto_none");return b`<label class="fp3d-field fp3d-wide"
      >${t}
      <select
        ?disabled=${!this.isAdmin}
        @change=${a=>{let l=a.target.value;s(l==="__auto"?null:l)}}
      >
        ${r!==null?b`<option value="__auto" ?selected=${e===null}>${r}</option>`:g}
        <option value="none" ?selected=${e==="none"||r===null&&e===null}>${this.t("entity_none")}</option>
        ${i.map(a=>b`<option value=${a.id} ?selected=${a.id===e}>${a.label}</option>`)}
      </select></label
    >`}renderOpeningForm(t){let e=this.isAdmin,n=t.type==="window",i=l=>{if(!this.hass)return null;let d=structuredClone(this._doc.floors);for(let h of d)for(let u of h.openings)u.id===t.id&&(u[l]=null);return zt(this.hass,d).get(t.id)?.[l]??null},s=l=>this.hass?.states[l]?.attributes.device_class,r=this.entityOptions(l=>l.startsWith("cover.")),a=this.entityOptions(l=>l.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(s(l)??""));return b`<section>
      <h3>${this.t(n?"opening_window":"opening_door")}</h3>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("opening_type")}
          <select
            ?disabled=${!e}
            @change=${l=>{let d=l.target.value;this.updateOpening({type:d,sill:Rt[d].sill,height:Rt[d].height})}}
          >
            <option value="door" ?selected=${!n}>${this.t("opening_door")}</option>
            <option value="window" ?selected=${n}>${this.t("opening_window")}</option>
          </select></label
        >
        ${this.num(this.t("width"),t.width,l=>this.updateOpening({width:Math.max(.3,l)}),.01,.3)}
        ${this.num(this.t("opening_position"),t.offset,l=>this.updateOpening({offset:Math.max(0,l)}),.01,0)}
        ${n?this.num(this.t("sill"),t.sill,l=>this.updateOpening({sill:Math.max(0,l)}),.01,0):g}
        ${this.num(this.t("opening_height"),t.height,l=>this.updateOpening({height:Math.max(.3,l)}),.01,.3)}
        <label class="fp3d-field fp3d-wide"
          >${this.t("hinge")}
          <select ?disabled=${!e} @change=${l=>this.updateOpening({hinge:l.target.value})}>
            <option value="left" ?selected=${t.hinge==="left"}>${this.t("hinge_left")}</option>
            <option value="right" ?selected=${t.hinge==="right"}>${this.t("hinge_right")}</option>
          </select></label
        >
        ${n?this.entitySelect(this.t("cover_entity"),t.cover,i("cover"),r,l=>this.updateOpening({cover:l})):g}
        ${this.entitySelect(this.t("contact_entity"),t.contact,i("contact"),a,l=>this.updateOpening({contact:l}))}
        ${n?this.entitySelect(this.t("tilt_entity"),t.tilt,void 0,a,l=>this.updateOpening({tilt:l==="none"?null:l})):g}
      </div>
      <p class="fp3d-sub">${this.t("opening_hint")}</p>
      ${e?b`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOpening()}>${this.t("delete")}</button></div>`:g}
    </section>`}renderFurnitureForm(t){let e=this.isAdmin;return b`<section>
      <h3>${this.t("furniture")}</h3>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("furniture_type")}
          <select ?disabled=${!e} @change=${n=>this.updateFurniture({type:n.target.value})}>
            ${te.map(n=>b`<option value=${n} ?selected=${n===t.type}>${this.t(`furn_${n}`)}</option>`)}
          </select></label
        >
        ${this.num(this.t("x"),t.x,n=>this.updateFurniture({x:n}))} ${this.num(this.t("z"),t.z,n=>this.updateFurniture({z:n}))}
        ${this.num(this.t("width"),t.w,n=>this.updateFurniture({w:Math.max(.05,n)}),.01,.05)}
        ${this.num(this.t("depth"),t.d,n=>this.updateFurniture({d:Math.max(.05,n)}),.01,.05)}
        ${this.num(this.t("height_m"),t.h,n=>this.updateFurniture({h:Math.max(.005,n)}),.01,0)}
        ${this.num(this.t("rotation"),t.rotation,n=>this.updateFurniture({rotation:(n%360+360)%360}),1)}
      </div>
      ${t.type==="stairs"?b`<p class="fp3d-sub">${this.t("stairs_hint")}</p>`:g}
      ${e?b`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.rotateFurniture(-90)}>${this.t("rotate_left")}</button>
            <button class="fp3d-btn" @click=${()=>this.rotateFurniture(90)}>${this.t("rotate_right")}</button>
            <button class="fp3d-btn" @click=${()=>this.duplicateFurniture()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
          </div>`:g}
    </section>`}setEnergy(t){let e=structuredClone(this._doc);e.energy={...e.energy,...t},this.setDoc(e)}renderEnergySettings(){let t=this._doc.energy,e=(l,d)=>this.hass?.states[l]?.attributes[d],n=this.entityOptions(l=>l.startsWith("sensor.")&&e(l,"device_class")==="power"),i=this.entityOptions(l=>l.startsWith("sensor.")&&e(l,"device_class")==="battery"),s=this.entityOptions(l=>l.startsWith("sensor.")&&(e(l,"device_class")==="monetary"||/\/(kWh|MWh)$/.test(e(l,"unit_of_measurement")??""))),r=l=>d=>this.setEnergy({[l]:d==="none"?null:d}),a=t.meter?this._doc.floors.find(l=>l.id===t.meter.floor_id)?.name:null;return b`<details class="fp3d-section">
      <summary>${this.t("energy")}</summary>
      <div class="fp3d-form">
        <div class="fp3d-actions fp3d-wide">
          <button class="fp3d-btn ${this._tool==="meter"?"fp3d-primary":""}" ?disabled=${!this.floor} @click=${()=>this._tool="meter"}>
            ${this.t("energy_meter_set")}
          </button>
          ${t.meter?b`<button class="fp3d-btn fp3d-danger" @click=${()=>this.setEnergy({meter:null})}>${this.t("energy_meter_remove")}</button>`:g}
        </div>
        <p class="fp3d-sub fp3d-wide">
          ${t.meter?`${this.t("energy_meter")}: ${a??""} \xB7 ${C(this.hass,t.meter.x,2)} / ${C(this.hass,t.meter.z,2)} m`:this.t("energy_meter_hint")}
        </p>
        ${this.entitySelect(this.t("energy_grid"),t.grid,void 0,n,r("grid"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${t.grid_invert} @change=${l=>this.setEnergy({grid_invert:l.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_solar_sensor"),t.solar,void 0,n,r("solar"))}
        ${this.entitySelect(this.t("energy_battery_sensor"),t.battery,void 0,n,r("battery"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${t.battery_invert} @change=${l=>this.setEnergy({battery_invert:l.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_battery_soc"),t.battery_soc,void 0,i,r("battery_soc"))}
        ${this.entitySelect(this.t("energy_tariff_sensor"),t.tariff,void 0,s,r("tariff"))}
      </div>
      <p class="fp3d-sub">${this.t("energy_hint")}</p>
    </details>`}renderPresenceSettings(){let t=Object.keys(this.hass?.states??{}).filter(i=>i.startsWith("person.")).sort(),e=i=>{let s=i.slice(7),r=this.entityOptions(l=>l.startsWith("sensor.")),a=l=>l.includes(s)&&/(area|room|raum|bermuda|espresense)/.test(l);return[...r.filter(l=>a(l.id)),...r.filter(l=>!a(l.id))]},n=(i,s)=>{let r=structuredClone(this._doc);r.presence=r.presence.filter(a=>a.person!==i),s&&s!=="none"&&r.presence.push({person:i,sensor:s}),this.setDoc(r)};return b`<details class="fp3d-section">
      <summary>${this.t("presence")}</summary>
      <div class="fp3d-form">
        ${t.length?t.map(i=>this.entitySelect(`${T(this.hass,i)} \xB7 ${this.t("presence_sensor")}`,this._doc.presence.find(s=>s.person===i)?.sensor??null,void 0,e(i),s=>n(i,s))):b`<p class="fp3d-sub fp3d-wide">${this.t("no_persons")}</p>`}
      </div>
      <p class="fp3d-sub">${this.t("presence_hint")}</p>
    </details>`}renderFurnitureLibrary(){return b`<details class="fp3d-section">
      <summary>${this.t("furniture_add")}</summary>
      <div class="fp3d-library">
        ${te.map(t=>b`<button class="fp3d-btn" @click=${()=>this.addFurniture(t)}>${this.t(`furn_${t}`)}</button>`)}
      </div>
    </details>`}renderDeviceList(t){let e=this.isAdmin,n=t.area_id?this.hass?.areas?.[t.area_id]?.name:void 0,i=this.hass?j(this.hass,t.area_id).filter(a=>Ge(I(a))):[],s=new Set(this.floor?.placements.filter(a=>L([a.x,a.z],t.points)).map(a=>a.entity_id)),r=i.filter(a=>!s.has(a));return b`<section>
      <h3>${this.t("devices")}</h3>
      ${t.area_id?i.length?b`${e&&r.length?b`<button class="fp3d-btn fp3d-primary fp3d-wide-btn" @click=${()=>this.placeDevices(r)}>${this.t("devices_place_all")}</button>`:g}
              <div class="fp3d-room-list">
                ${i.map(a=>{let l=s.has(a);return b`<div class="fp3d-row fp3d-dev-row">
                    <span class="fp3d-dev-name ${l?"":"fp3d-muted"}">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d=${$t(I(a))} />
                      </svg>
                      ${T(this.hass,a,n)}
                    </span>
                    ${e?l?b`<button class="fp3d-link" @click=${()=>this.removeDevice(a)}>${this.t("devices_remove")}</button>`:b`<button class="fp3d-link" @click=${()=>this.placeDevices([a])}>${this.t("devices_place")}</button>`:g}
                  </div>`})}
              </div>
              <p class="fp3d-sub">${this.t("devices_hint")}</p>`:b`<p class="fp3d-sub">${this.t("devices_none")}</p>`:b`<p class="fp3d-sub">${this.t("devices_none_area")}</p>`}
    </section>`}renderBackgroundForm(t){let e=t.background;return b`<details class="fp3d-section">
      <summary>${this.t("background")}</summary>
      <div class="fp3d-form">
        <label class="fp3d-btn fp3d-wide fp3d-upload"
          >${this.t("background_upload")}<input type="file" accept="image/png,image/jpeg,image/webp" @change=${this.uploadBackground}
        /></label>
        ${e?b`${this.num(this.t("x"),e.x,n=>this.updateFloor({background:{...e,x:n}}))}
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
              <button class="fp3d-btn fp3d-danger fp3d-wide" @click=${()=>this.updateFloor({background:null})}>${this.t("background_remove")}</button>`:g}
      </div>
    </details>`}renderSettings(){let t=this._doc.settings,e=n=>{let i=structuredClone(this._doc);Object.assign(i.settings,n),this.setDoc(i)};return b`<details class="fp3d-section">
      <summary>${this.t("settings")}</summary>
      <div class="fp3d-form">
        ${this.num(this.t("wall_exterior"),t.wall_exterior,n=>e({wall_exterior:Math.min(1,Math.max(.02,n))}),.01,.02)}
        ${this.num(this.t("wall_interior"),t.wall_interior,n=>e({wall_interior:Math.min(1,Math.max(.02,n))}),.01,.02)}
        ${this.num(this.t("grid"),t.grid,n=>e({grid:Math.min(1,Math.max(.01,n))}),.01,.01)}
      </div>
    </details>`}static styles=[N,ct,F`
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
      .fp3d-furn polygon {
        fill: rgba(91, 124, 255, 0.1);
        stroke: rgba(91, 124, 255, 0.55);
        stroke-width: 1.2;
        cursor: grab;
      }
      .fp3d-furn-front {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
        opacity: 0.7;
        pointer-events: none;
      }
      .fp3d-furn text {
        fill: var(--fp3d-muted);
        font-size: 11px;
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-furn-sel polygon {
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
    `]};customElements.get("fp3d-editor")||customElements.define("fp3d-editor",ie);var Q=(o,t)=>A(o,t);function K(o,t){if(!t||D(t))return Q(o,"state_unavailable");let e=t.attributes;switch(I(t.entity_id)){case"light":return t.state!=="on"?Q(o,"state_off"):typeof e.brightness=="number"?`${Math.round(e.brightness/255*100)} %`:Q(o,"state_on");case"switch":case"fan":return Q(o,t.state==="on"?"state_on":"state_off");case"cover":return typeof e.current_position=="number"&&t.state!=="opening"&&t.state!=="closing"?`${e.current_position} %`:Ft(o,t.state);case"climate":{let n=typeof e.current_temperature=="number"?`${C(o,e.current_temperature,1)} \xB0C`:null;return t.state==="off"?n?`${n} \xB7 ${Q(o,"state_off")}`:Q(o,"state_off"):n??Ft(o,t.state)}case"media":return t.state==="playing"&&typeof e.media_title=="string"?e.media_title:Ft(o,t.state);case"lock":return Ft(o,t.state);case"binary":return["door","window","opening","garage_door"].includes(e.device_class)?Q(o,t.state==="on"?"state_open":"state_closed"):Q(o,t.state==="on"?"state_detected":"state_clear");case"sensor":{let n=Number(t.state),i=e.unit_of_measurement??"";return Number.isFinite(n)?`${C(o,n,1)}${i?` ${i}`:""}`:t.state}default:return""}}function Ft(o,t){let e=`state_${t}`,n=A(o,e);return n===e?t:n}function cn(o,t){let e=[];for(let n of t.floors)for(let i of n.placements){let s=I(i.entity_id),r=o.states[i.entity_id];if(!s||!r)continue;let a=n.rooms.find(d=>d.points.length>=3&&L([i.x,i.z],d.points))??null,l=a?.area_id?o.areas?.[a.area_id]?.name:void 0;e.push({id:i.entity_id,floorId:n.id,roomId:a?.id??null,x:i.x,z:i.z,y:i.y??Qe(s,n.height),icon:an(s),name:T(o,i.entity_id,l),text:K(o,r),active:Ze(r),unavailable:D(r),glow:s==="light"?Ye(r):null})}return e}function pn(o){return o.floors.flatMap(t=>t.placements.map(e=>e.entity_id))}function kt(o,t){o.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}function hn(o,t){let e=t.slice(0,t.indexOf("."));return o.callService(e,"toggle",{entity_id:t})}var ni=4,ii=8,si=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[255,95,210],[120,255,150]],pt=o=>b`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${$t(o)} />
  </svg>`,Ot={previous:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z"},se=o=>b`<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d=${o} /></svg>`,oe=class extends P{static properties={hass:{attribute:!1},room:{attribute:!1}};constructor(){super(),this.room=null}t(t,e){return A(this.hass,t,e)}call(t,e,n){this.hass.callService(t,e,n)}get areaName(){return this.room?.area_id?this.hass.areas?.[this.room.area_id]?.name:void 0}name(t){return T(this.hass,t,this.areaName)}nameButton(t){return b`<button class="fp3d-rp-name" title=${this.t("details")} @click=${()=>kt(this,t)}>${this.name(t)}</button>`}toggle(t,e,n){return b`<button
      class="fp3d-switch"
      role="switch"
      aria-checked=${e?"true":"false"}
      aria-label=${this.name(t.entity_id)}
      ?disabled=${D(t)}
      @click=${n}
    ></button>`}render(){let t=this.room;if(!t||!this.hass)return g;let e=j(this.hass,t.area_id),n=p=>e.filter(c=>p.includes(I(c))).map(c=>this.hass.states[c]),i=n(["light"]),s=n(["cover"]),r=n(["climate"]),a=n(["media"]),l=n(["switch","fan","lock"]),d=n(["sensor","binary"]),h=n(["scene","script"]),u=this.facts(d,r),m=i.filter(p=>p.state==="on");return b`<section class="fp3d-rp" aria-label=${t.name}>
      <header class="fp3d-rp-head">
        <div>
          <h2>${t.name}</h2>
          ${u.length?b`<p class="fp3d-rp-facts">${u.join(" \xB7 ")}</p>`:g}
        </div>
        <button class="fp3d-rp-close" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>
      <div class="fp3d-rp-body">
        ${t.area_id?e.length?g:b`<p class="fp3d-rp-note">${this.t("panel_empty")}</p>`:b`<p class="fp3d-rp-note">${this.t("panel_no_area")}</p>`}
        ${i.length?this.section("panel_lights",i.map(p=>this.lightRow(p)),m.length?b`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_off",{entity_id:m.map(p=>p.entity_id)})}>
                    ${this.t("panel_all_off")}
                  </button>`:g):g}
        ${s.length?this.section("panel_covers",s.map(p=>this.coverRow(p))):g}
        ${r.length?this.section("panel_climate",r.map(p=>this.climateRow(p))):g}
        ${a.length?this.section("panel_media",a.map(p=>this.mediaRow(p))):g}
        ${l.length?this.section("panel_switches",l.map(p=>this.switchRow(p))):g}
        ${d.length?this.section("panel_sensors",d.map(p=>this.sensorRow(p))):g}
        ${h.length?this.section("panel_scenes",[b`<div class="fp3d-rp-scenes">
                  ${h.map(p=>b`<button
                      class="fp3d-btn"
                      ?disabled=${D(p)}
                      @click=${()=>this.call(I(p.entity_id)==="scene"?"scene":"script","turn_on",{entity_id:p.entity_id})}
                    >
                      ${this.name(p.entity_id)}
                    </button>`)}
                </div>`]):g}
      </div>
    </section>`}facts(t,e){let n=[],i=t.find(a=>a.attributes.device_class==="temperature"&&!D(a)),s=e.find(a=>typeof a.attributes.current_temperature=="number");i?n.push(K(this.hass,i)):s&&n.push(`${C(this.hass,s.attributes.current_temperature,1)} \xB0C`);let r=t.find(a=>a.attributes.device_class==="humidity"&&!D(a));return r&&n.push(K(this.hass,r)),n}section(t,e,n=g){return b`<div class="fp3d-rp-sec">
      <div class="fp3d-rp-sec-head"><h3>${this.t(t)}</h3>${n}</div>
      ${e}
    </div>`}lightRow(t){let e=t.attributes,n=t.state==="on",i=e.supported_color_modes??[],s=i.some(m=>m!=="onoff"),r=i.includes("color_temp"),a=i.some(m=>["hs","rgb","rgbw","rgbww","xy"].includes(m)),l=typeof e.brightness=="number"?Math.round(e.brightness/255*100):100,d=e.min_color_temp_kelvin??2200,h=e.max_color_temp_kelvin??6500,u=t.entity_id;return b`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${pt("light")}</span>
      ${this.nameButton(u)}
      <span class="fp3d-rp-state">${K(this.hass,t)}</span>
      ${this.toggle(t,n,()=>this.call("light","toggle",{entity_id:u}))}
      ${n&&s?b`<label class="fp3d-rp-slider"
            ><span>${this.t("brightness")}</span>
            <input
              type="range"
              min="1"
              max="100"
              .value=${String(l)}
              @change=${m=>this.call("light","turn_on",{entity_id:u,brightness_pct:Number(m.target.value)})}
          /></label>`:g}
      ${n&&r?b`<label class="fp3d-rp-slider fp3d-rp-ct"
            ><span>${this.t("color_temp")}</span>
            <input
              type="range"
              min=${d}
              max=${h}
              step="50"
              .value=${String(e.color_temp_kelvin??d)}
              @change=${m=>this.call("light","turn_on",{entity_id:u,color_temp_kelvin:Number(m.target.value)})}
          /></label>`:g}
      ${n&&a?b`<div class="fp3d-rp-swatches" role="group" aria-label=${this.t("color")}>
            ${si.map(m=>b`<button
                class="fp3d-rp-swatch"
                style="--c: rgb(${m.join(",")})"
                aria-label="rgb(${m.join(", ")})"
                @click=${()=>this.call("light","turn_on",{entity_id:u,rgb_color:m})}
              ></button>`)}
          </div>`:g}
    </div>`}coverRow(t){let e=t.attributes,n=e.supported_features??0,i=t.entity_id,s=D(t);return b`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon">${pt("cover")}</span>
      ${this.nameButton(i)}
      <span class="fp3d-rp-state">${K(this.hass,t)}</span>
      <div class="fp3d-rp-buttons">
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${s} @click=${()=>this.call("cover","open_cover",{entity_id:i})}>${this.t("cover_open")}</button>
        ${n&ii?b`<button class="fp3d-btn fp3d-rp-small" ?disabled=${s} @click=${()=>this.call("cover","stop_cover",{entity_id:i})}>${this.t("cover_stop")}</button>`:g}
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${s} @click=${()=>this.call("cover","close_cover",{entity_id:i})}>${this.t("cover_close")}</button>
      </div>
      ${n&ni&&typeof e.current_position=="number"?b`<label class="fp3d-rp-slider"
            ><span>${this.t("position")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${s}
              .value=${String(e.current_position)}
              @change=${r=>this.call("cover","set_cover_position",{entity_id:i,position:Number(r.target.value)})}
          /></label>`:g}
    </div>`}climateRow(t){let e=t.attributes,n=t.entity_id,i=typeof e.temperature=="number"?e.temperature:null,s=e.target_temp_step??.5,r=e.min_temp??5,a=e.max_temp??30,l=e.hvac_modes??[],d=h=>this.call("climate","set_temperature",{entity_id:n,temperature:Math.min(a,Math.max(r,Math.round(h/s)*s))});return b`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${e.hvac_action==="heating"?"fp3d-rp-on":""}">${pt("climate")}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${K(this.hass,t)}</span>
      ${i!==null?b`<div class="fp3d-rp-stepper fp3d-rp-wide">
            <button class="fp3d-btn" aria-label=${this.t("temp_down")} @click=${()=>d(i-s)}>−</button>
            <span><small>${this.t("target_temp")}</small> ${C(this.hass,i,1)} °C</span>
            <button class="fp3d-btn" aria-label=${this.t("temp_up")} @click=${()=>d(i+s)}>+</button>
          </div>`:g}
      ${l.length>1?b`<div class="fp3d-rp-chips">
            ${l.map(h=>b`<button
                class="fp3d-chip"
                aria-pressed=${t.state===h}
                @click=${()=>this.call("climate","set_hvac_mode",{entity_id:n,hvac_mode:h})}
              >
                ${this.stateLabel(h)}
              </button>`)}
          </div>`:g}
    </div>`}stateLabel(t){let e=`state_${t}`,n=this.t(e);return n===e?t:n}mediaRow(t){let e=t.attributes,n=t.entity_id,i=D(t)||t.state==="off",s=[e.media_title,e.media_artist].filter(r=>typeof r=="string"&&r).join(" \xB7 ");return b`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${t.state==="playing"?"fp3d-rp-on":""}">${pt("media")}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${this.stateLabel(t.state)}</span>
      ${s?b`<p class="fp3d-rp-media fp3d-rp-wide">${s}</p>`:g}
      <div class="fp3d-rp-buttons fp3d-rp-wide">
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("previous")} ?disabled=${i} @click=${()=>this.call("media_player","media_previous_track",{entity_id:n})}>
          ${se(Ot.previous)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("play_pause")} ?disabled=${D(t)} @click=${()=>this.call("media_player","media_play_pause",{entity_id:n})}>
          ${se(t.state==="playing"?Ot.pause:Ot.play)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("next")} ?disabled=${i} @click=${()=>this.call("media_player","media_next_track",{entity_id:n})}>
          ${se(Ot.next)}
        </button>
      </div>
      ${typeof e.volume_level=="number"?b`<label class="fp3d-rp-slider"
            ><span>${this.t("volume")}</span>
            <input
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(e.volume_level*100))}
              @change=${r=>this.call("media_player","volume_set",{entity_id:n,volume_level:Number(r.target.value)/100})}
          /></label>`:g}
    </div>`}switchRow(t){let e=t.entity_id,n=I(e),i=e.slice(0,e.indexOf(".")),s=n==="lock"?t.state==="unlocked"||t.state==="open":t.state==="on",r=()=>n==="lock"?this.call("lock",s?"lock":"unlock",{entity_id:e}):this.call(i,"toggle",{entity_id:e});return b`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${s?"fp3d-rp-on":""}">${pt(n)}</span>
      ${this.nameButton(e)}
      <span class="fp3d-rp-state">${K(this.hass,t)}</span>
      ${this.toggle(t,s,r)}
    </div>`}sensorRow(t){let e=I(t.entity_id),n=e==="binary"&&t.state==="on";return b`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${pt(e)}</span>
      ${this.nameButton(t.entity_id)}
      <span class="fp3d-rp-state">${K(this.hass,t)}</span>
    </div>`}fire(t){this.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0}))}static styles=[N,ct,F`
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
    `]};customElements.get("fp3d-room-panel")||customElements.define("fp3d-room-panel",oe);var st=.03,oi=.07;function Vt(o,t=!1){if(!o)return null;let e=Number(o.state);if(!Number.isFinite(e))return null;let n=String(o.attributes.unit_of_measurement??"W"),i=n==="kW"?e*1e3:n==="MW"?e*1e6:e;return t?-i:i}function un(o,t){return t.startsWith("sensor.")&&o.states[t]?.attributes.device_class==="power"}function re(o,t){if(un(o,t))return t;let e=o.entities?.[t]?.device_id;return!e||!o.entities?null:Object.values(o.entities).find(i=>i.device_id===e&&i.entity_id!==t&&un(o,i.entity_id))?.entity_id??null}function mn(o,t){let e=t.energy,n=new Set([e.grid,e.solar,e.battery].filter(Boolean)),i=[],s=new Set;for(let r of t.floors)for(let a of r.placements){let l=re(o,a.entity_id);!l||n.has(l)||s.has(l)||(s.add(l),i.push({id:a.entity_id,powerEntity:l,floorId:r.id,x:a.x,z:a.z,power:Math.max(0,Vt(o.states[l])??0)}))}return i}function gn(o,t,e){let n=t.energy,i=n.grid?Vt(o.states[n.grid],n.grid_invert):null,s=n.solar?Vt(o.states[n.solar]):null,r=n.battery?Vt(o.states[n.battery],n.battery_invert):null,a=n.battery_soc?Number(o.states[n.battery_soc]?.state):NaN,l=n.tariff?o.states[n.tariff]:void 0,d=Number(l?.state),h=null;return i!==null||s!==null||r!==null?h=Math.max(0,(i??0)+Math.max(0,s??0)+(r??0)):e.length&&(h=e.reduce((u,m)=>u+m.power,0)),{grid:i,solar:s===null?null:Math.max(0,s),battery:r,soc:Number.isFinite(a)?a:null,tariff:l&&Number.isFinite(d)?{value:d,unit:String(l.attributes.unit_of_measurement??"")}:null,consumption:h}}function Tt(o,t){return o.pos.push(t),o.adj.push([]),o.pos.length-1}function ht(o,t,e){let n=Math.hypot(o.pos[t][0]-o.pos[e][0],o.pos[t][1]-o.pos[e][1]);o.adj[t].push({to:e,w:n}),o.adj[e].push({to:t,w:n})}function ri(o,t){let e=o.length,n=o.map((i,s)=>{let r=o[(s+1)%e],a=r[0]-i[0],l=r[1]-i[1],d=Math.hypot(a,l)||1,h=-l/d,u=a/d;return{p:[i[0]+h*t[s],i[1]+u*t[s]],d:[a/d,l/d],n:[h,u]}});return o.map((i,s)=>{let r=n[(s-1+e)%e],a=n[s],l=r.d[0]*a.d[1]-r.d[1]*a.d[0];if(Math.abs(l)<1e-6)return[i[0]+a.n[0]*t[s],i[1]+a.n[1]*t[s]];let d=((a.p[0]-r.p[0])*a.d[1]-(a.p[1]-r.p[1])*a.d[0])/l;return[r.p[0]+r.d[0]*d,r.p[1]+r.d[1]*d]})}function ai(o){return U(o.points)>=0?{pts:o.points,flipped:!1}:{pts:[...o.points].reverse(),flipped:!0}}function li(o,t,e){let n={pos:[],adj:[],rings:new Map},{walls:i}=wt(o.rooms,{exterior:t,interior:e});for(let s of o.rooms){if(s.points.length<3)continue;let{pts:r,flipped:a}=ai(s),l=r.length,d=r.map((m,p)=>{let c=a?(l-2-p+l)%l:p,f=i.some(_=>!_.exterior&&_.sources.some(y=>y.room_id===s.id&&y.edge===c));return oi+(f?e/2:0)}),h=ri(r,d).map(m=>Tt(n,m)),u=h.map((m,p)=>[m,h[(p+1)%l]]);for(let[m,p]of u)ht(n,m,p);n.rings.set(s.id,u)}for(let s of i){if(s.exterior||!s.roomLeft||!s.roomRight)continue;let r=[(s.a[0]+s.b[0])/2,(s.a[1]+s.b[1])/2],a=Dt(n,s.roomLeft,r),l=Dt(n,s.roomRight,r);a!==null&&l!==null&&ht(n,a,l)}return n}function Dt(o,t,e){let n=o.rings.get(t);if(!n)return null;let i=null;for(let r of n){let a=o.pos[r[0]],l=o.pos[r[1]],d=l[0]-a[0],h=l[1]-a[1],u=d*d+h*h||1,m=Math.min(1,Math.max(0,((e[0]-a[0])*d+(e[1]-a[1])*h)/u)),p=[a[0]+d*m,a[1]+h*m],c=Math.hypot(e[0]-p[0],e[1]-p[1]);(!i||c<i.d)&&(i={seg:r,q:p,d:c})}if(!i)return null;let s=Tt(o,i.q);return ht(o,s,i.seg[0]),ht(o,s,i.seg[1]),s}function fn(o,t){let e=o.rooms.filter(s=>s.points.length>=3),n=e.find(s=>L(t,s.points));if(n)return n;let i=null;for(let s of e)for(let r of s.points){let a=Math.hypot(t[0]-r[0],t[1]-r[1]);(!i||a<i.d)&&(i={room:s,d:a})}return i?.room??null}function di(o,t){let e=o.pos.map(()=>1/0),n=o.pos.map(()=>-1),i=o.pos.map(()=>!1);for(e[t]=0;;){let s=-1;for(let r=0;r<e.length;r++)!i[r]&&e[r]<1/0&&(s<0||e[r]<e[s])&&(s=r);if(s<0)break;i[s]=!0;for(let{to:r,w:a}of o.adj[s])e[s]+a<e[r]-1e-9&&(e[r]=e[s]+a,n[r]=s)}return{dist:e,prev:n}}function bn({building:o,consumers:t,summary:e,battery:n}){let i=o.energy.meter;if(!i)return[];let s=o.floors.find(c=>c.id===i.floor_id);if(!s)return[];let r=[],{wall_exterior:a,wall_interior:l}=o.settings,d=new Map,h=c=>c.elevation>s.elevation,u=new Map;for(let c of t){let f=u.get(c.floorId)??[];f.push({id:c.id,x:c.x,z:c.z,power:c.power,kind:"consumer"}),u.set(c.floorId,f)}if(n&&e.battery!==null){let c=u.get(n.floorId)??[];c.push({id:"__battery",x:n.x,z:n.z,power:Math.abs(e.battery),kind:"battery"}),u.set(n.floorId,c)}let m=o.floors.filter(c=>u.has(c.id)),p=c=>(u.get(c.id)??[]).reduce((f,_)=>f+_.power,0);for(let c of m){if(c.id===s.id)continue;let f=h(c),_=p(c);r.push({floorId:s.id,a:[i.x,st,i.z],b:[i.x,f?s.height:-.2,i.z],dist:0,power:_,kind:"consumer"});let y=Math.abs(c.elevation-s.elevation);r.push({floorId:c.id,a:[i.x,f?-.2:c.height,i.z],b:[i.x,st,i.z],dist:y,power:_,kind:"consumer"}),d.set(c.id,y+.25)}for(let c of m){let f=u.get(c.id),_=li(c,a,l),y=fn(c,[i.x,i.z]);if(!y)continue;let v=Tt(_,[i.x,i.z]),$=Dt(_,y.id,[i.x,i.z]);if($===null)continue;ht(_,v,$);let k=[];for(let R of f){let z=fn(c,[R.x,R.z]);if(!z)continue;let H=Tt(_,[R.x,R.z]),B=Dt(_,z.id,[R.x,R.z]);B!==null&&(ht(_,H,B),k.push({node:H,power:R.power,kind:R.kind}))}let{dist:x,prev:w}=di(_,v),E=new Map;for(let R of k)if(Number.isFinite(x[R.node]))for(let z=R.node;w[z]>=0;z=w[z]){let H=w[z],B=`${H}>${z}`,J=E.get(B)??{a:H,b:z,power:0,kind:R.kind};J.power+=R.power,J.kind!==R.kind&&(J.kind="consumer"),E.set(B,J)}let O=d.get(c.id)??0;for(let{a:R,b:z,power:H,kind:B}of E.values()){let J=_.pos[R],ce=_.pos[z];r.push({floorId:c.id,a:[J[0],st,J[1]],b:[ce[0],st,ce[1]],dist:O+x[R],power:H,kind:B})}}if(e.grid!==null){let{walls:c}=wt(s.rooms,{exterior:a,interior:l}),f=null;for(let _ of c){if(!_.exterior)continue;let y=_.b[0]-_.a[0],v=_.b[1]-_.a[1],$=y*y+v*v||1,k=Math.min(1,Math.max(0,((i.x-_.a[0])*y+(i.z-_.a[1])*v)/$)),x=[_.a[0]+y*k,_.a[1]+v*k],w=Math.hypot(i.x-x[0],i.z-x[1]),E=Math.sqrt($);(!f||w<f.d)&&(f={q:x,out:[v/E,-y/E],d:w})}if(f){let _=[f.q[0]+f.out[0]*(a+1.4),st,f.q[1]+f.out[1]*(a+1.4)],y=[i.x,st,i.z],v=e.grid>=0;r.push({floorId:s.id,a:v?_:y,b:v?y:_,dist:0,power:Math.abs(e.grid),kind:v?"grid":"export"})}}if(e.solar!==null&&r.push({floorId:s.id,a:[i.x+.08,s.height+.6,i.z+.08],b:[i.x+.08,st,i.z+.08],dist:0,power:e.solar,kind:"solar"}),e.battery!==null&&e.battery>0)for(let c of r)c.kind==="battery"&&([c.a,c.b]=[c.b,c.a]);return r}function _n(o,t){let e=[.22,.88,1],n=[1,.78,.2],i=[.35,1,.55];if(o==="grid")return e;if(o==="export"||o==="solar")return n;if(o==="battery")return i;let s=[[Math.max(0,t.grid??0),e],[Math.max(0,(t.solar??0)-Math.max(0,-(t.grid??0))-Math.max(0,-(t.battery??0))),n],[Math.max(0,t.battery??0),i]],[r]=s.reduce((a,l)=>l[0]>a[0]?l:a);return r>0?s.find(a=>a[0]===r)[1]:e}var ci=new URL(import.meta.url),pi=new URL("./floorplan-3d-3d.js?v=c37066d0895b",ci).href,vn;function yn(){return vn??=import(pi),vn}var xn=o=>o.toLowerCase().replace(/[_\-]+/g," ").replace(/\s+/g," ").trim();function hi(o,t,e){let n=xn(e);if(!n||n==="unknown"||n==="unavailable"||n==="not home"||n==="away")return null;for(let i of t.floors)for(let s of i.rooms)if([s.name,s.area_id??"",s.area_id?o.areas?.[s.area_id]?.name??"":""].filter(Boolean).map(xn).includes(n))return{floorId:i.id,room:s};return null}function ui(o){let t=o.trim().split(/\s+/).filter(Boolean);return t.length?(t.length>1?t[0][0]+t[t.length-1][0]:t[0].slice(0,2)).toUpperCase():"?"}function wn(o,t){let e=[],n=new Map;for(let i of t.presence){let s=o.states[i.person];if(!s||!i.sensor||s.state!=="home"&&s.state!=="on")continue;let r=o.states[i.sensor];if(!r)continue;let a=hi(o,t,r.state);if(!a)continue;let l=n.get(a.room.id)??0;n.set(a.room.id,l+1);let[d,h]=Z(a.room.points),u=-Math.PI/2+.9+l*1.15,m=.75,p=s.attributes.friendly_name??i.person;e.push({id:i.person,name:p,initials:ui(p),picture:s.attributes.entity_picture??null,floorId:a.floorId,roomId:a.room.id,x:d+Math.cos(u)*m,z:h+Math.sin(u)*m})}return e}function $n(o,t,e,n){let i=new Map,s=r=>!!r&&o.states[r]?.state==="on";for(let r of t.floors){let a=new Set;for(let d of r.rooms)for(let h of j(o,d.area_id))I(h)==="light"&&a.add(h);for(let d of r.placements)I(d.entity_id)==="light"&&a.add(d.entity_id);let l=r.openings.filter(d=>{let h=e.get(d.id);return!!h&&(s(h.contact)||s(h.tilt))}).length;i.set(r.id,{rooms:r.rooms.length,lightsOn:[...a].filter(d=>o.states[d]?.state==="on").length,open:l,persons:n.filter(d=>d.floorId===r.id).length})}return i}function kn(o,t){let e=[t.rooms===1?A(o,"floor_rooms_one"):A(o,"floor_rooms",{n:t.rooms})];return t.lightsOn&&e.push(A(o,"floor_lights",{n:t.lightsOn})),t.open&&e.push(A(o,"floor_open",{n:t.open})),t.persons&&e.push(A(o,"floor_persons",{n:t.persons})),e.join(" \xB7 ")}var ae=class extends P{static properties={hass:{attribute:!1},building:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},wallMode:{attribute:!1},explode:{type:Boolean},quality:{attribute:!1},showStats:{type:Boolean},_stats:{state:!0},_error:{state:!0},_energy:{state:!0}};viewer=null;starting=!1;shownStates=new Map;openingLinks=null;linkedRegistry;watched=[];constructor(){super(),this.building=null,this.floorId=null,this.roomId=null,this.wallMode="auto",this.explode=!0,this.quality="auto",this.showStats=!1,this._stats=null,this._error=null,this._energy=null}connectedCallback(){super.connectedCallback(),this.hasUpdated&&!this.viewer&&this.start()}disconnectedCallback(){super.disconnectedCallback(),this.viewer?.dispose(),this.viewer=null}firstUpdated(){this.start()}async start(){if(!(this.starting||this.viewer)){this.starting=!0;try{let t=await yn();if(!this.isConnected)return;let e=this.renderRoot.querySelector(".fp3d-stage");this.viewer=t.createViewer(e,{quality:this.quality,explode:this.explode,onRoomTap:(n,i)=>this.fire("room-tap",{floorId:n,roomId:i}),onFloorTap:n=>this.fire("floor-tap",{floorId:n}),floorInfo:n=>n.rooms.length===1?A(this.hass,"floor_rooms_one"):A(this.hass,"floor_rooms",{n:n.rooms.length}),onBack:()=>this.fire("back",{}),onDeviceTap:n=>this.onDeviceTap(n),onDeviceHold:n=>kt(this,n),onStats:this.showStats?n=>this._stats=n:void 0}),this.viewer.setWallMode(this.wallMode),this.building&&this.viewer.setBuilding(this.building),this.syncDevices(!0),this.viewer.setFloor(this.floorId,!1),this.roomId&&this.viewer.selectRoom(this.roomId)}catch(t){this._error=String(t)}finally{this.starting=!1}}}updated(t){let e=this.viewer;e&&(t.has("building")&&this.building&&e.setBuilding(this.building),(t.has("building")||t.has("hass"))&&this.syncDevices(t.has("building")),t.has("floorId")&&e.setFloor(this.floorId),t.has("roomId")&&(this.roomId||t.get("roomId"))&&e.selectRoom(this.roomId),t.has("wallMode")&&e.setWallMode(this.wallMode),t.has("explode")&&e.setExplode(this.explode),t.has("quality")&&t.get("quality")!==void 0&&e.setQuality(this.quality))}syncDevices(t){let e=this.viewer,n=this.building;if(!e||!n||!this.hass)return;let i=this.hass;if(t||!this.openingLinks||this.linkedRegistry!==i.entities){this.openingLinks=zt(i,n.floors),this.linkedRegistry=i.entities;let p=[...this.openingLinks.values()].flatMap(k=>[k.cover,k.contact,k.tilt]),c=pn(n),f=c.map(k=>re(i,k)),_=n.energy,y=n.presence.flatMap(k=>[k.person,k.sensor]),v=n.floors.flatMap(k=>k.rooms.flatMap(x=>j(i,x.area_id).filter(w=>I(w)==="light"))),$=[...c,...p,...f,_.grid,_.solar,_.battery,_.battery_soc,_.tariff,...y,...v];this.watched=[...new Set($.filter(k=>!!k))],t=!0}if(!(t||this.watched.some(p=>this.shownStates.get(p)!==i.states[p])))return;this.shownStates=new Map(this.watched.map(p=>[p,i.states[p]]));let r=mn(i,n),a=gn(i,n,r),l=new Map(r.filter(p=>p.id!==p.powerEntity).map(p=>[p.id,p.power]));e.setDevices(cn(i,n).map(p=>{let c=l.get(p.id)??null;return{...p,power:c,powerText:c===null?void 0:Mt(i,c)}})),e.setOpeningStates(new Map([...this.openingLinks].map(([p,c])=>[p,Xe(i,c)])));let d=n.energy.battery?n.floors.flatMap(p=>p.placements.filter(c=>c.entity_id===n.energy.battery).map(c=>({floorId:p.id,x:c.x,z:c.z})))[0]:null;e.setFlows(bn({building:n,consumers:r,summary:a,battery:d??null}).map(p=>({floorId:p.floorId,a:p.a,b:p.b,dist:p.dist,power:p.power,color:_n(p.kind,a)})));let h=wn(i,n);e.setPersons(h);let u=$n(i,n,this.openingLinks,h);e.setFloorInfo(new Map([...u].map(([p,c])=>[p,kn(i,c)])));let m=a.grid!==null||a.solar!==null||a.battery!==null||a.tariff!==null;this._energy=m?a:null}onDeviceTap(t){let e=I(t);e&&qe.has(e)?hn(this.hass,t):kt(this,t)}resetView(){this.viewer?.resetView()}fire(t,e){this.dispatchEvent(new CustomEvent(t,{detail:e,bubbles:!0,composed:!0}))}renderEnergy(){let t=this._energy;if(!t||this.roomId)return g;let e=i=>A(this.hass,i),n=[];if(t.consumption!==null&&n.push({cls:"total",label:e("energy_consumption"),value:Mt(this.hass,t.consumption)}),t.grid!==null){let i=t.grid<0;n.push({cls:i?"export":"grid",label:e(i?"energy_grid_export":"energy_grid_import"),value:Mt(this.hass,Math.abs(t.grid))})}if(t.solar!==null&&n.push({cls:"solar",label:e("energy_solar"),value:Mt(this.hass,t.solar)}),t.battery!==null||t.soc!==null){let i=[t.battery!==null?Mt(this.hass,Math.abs(t.battery)):null,t.soc!==null?`${Math.round(t.soc)} %`:null].filter(Boolean);n.push({cls:"battery",label:e("energy_battery"),value:i.join(" \xB7 ")})}return t.tariff&&n.push({cls:"tariff",label:e("energy_tariff"),value:`${C(this.hass,t.tariff.value,3)} ${t.tariff.unit}`.trim()}),b`<div class="fp3d-energy" aria-live="off">
      ${n.map(i=>b`<div class="fp3d-energy-item fp3d-energy-${i.cls}"><span>${i.label}</span><b>${i.value}</b></div>`)}
    </div>`}render(){return b`<div class="fp3d-stage">
      ${this._error?b`<p class="fp3d-error">${this._error}</p>`:g} ${this.renderEnergy()}
      ${this.showStats&&this._stats?b`<span class="fp3d-stats"
            >${A(this.hass,"stats",{fps:this._stats.fps,calls:this._stats.calls,tris:this._stats.triangles.toLocaleString()})}</span
          >`:g}
    </div>`}static styles=[N,F`
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
    `]};customElements.get("fp3d-view3d")||customElements.define("fp3d-view3d",ae);function Mt(o,t){return Math.abs(t)>=1e3?`${C(o,t/1e3,1)} kW`:`${Math.round(t)} W`}var Lt={get(o){try{return localStorage.getItem(`floorplan_3d.${o}`)}catch{return null}},set(o,t){try{localStorage.setItem(`floorplan_3d.${o}`,t)}catch{}}},le=class extends P{static properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_mode:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_wallMode:{state:!0},_explode:{state:!0},_quality:{state:!0}};data=new lt(this);showStats=new URLSearchParams(location.search).has("fp3d_stats");constructor(){super(),this.narrow=!1,this._mode="view",this._floorId=null,this._roomId=null,this._wallMode="auto",this._explode=Lt.get("explode")!=="0";let t=Lt.get("quality");this._quality=t==="low"||t==="high"?t:"auto"}t(t,e){return A(this.hass,t,e)}willUpdate(t){t.has("hass")&&this.hass&&this.data.setHass(this.hass);let e=this.data.building;e&&this._floorId&&!e.floors.some(n=>n.id===this._floorId)&&(this._floorId=null,this._roomId=null)}get isAdmin(){return this.hass?.user?.is_admin??!1}setMode(t){t!==this._mode&&(t==="view"&&this.data.flush(),this._mode=t)}onRoomTap(t){let{floorId:e,roomId:n}=t.detail;n&&(this._floorId===null&&(this.data.building?.floors.length??0)>1&&(this._floorId=e),this._roomId=n===this._roomId?null:n)}setExplode(t){this._explode=t,Lt.set("explode",t?"1":"0")}setQuality(t){this._quality=t,Lt.set("quality",t)}back(){this._roomId?this._roomId=null:this._floorId&&(this.data.building?.floors.length??0)>1?this._floorId=null:this.renderRoot.querySelector("fp3d-view3d")?.resetView()}onKey=t=>{t.key==="Escape"&&this._mode==="view"&&this.back()};connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey)}render(){let t=this.data.building,e=this.data.saveState;return b`
      <div class="fp3d-app">
        <header class="fp3d-header">
          <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
          <h1>Floorplan 3D</h1>
          ${this.isAdmin?b`<div class="fp3d-seg" role="tablist">
                <button role="tab" aria-pressed=${this._mode==="view"} @click=${()=>this.setMode("view")}>${this.t("view")}</button>
                <button role="tab" aria-pressed=${this._mode==="editor"} @click=${()=>this.setMode("editor")}>${this.t("editor")}</button>
              </div>`:g}
          <span class="fp3d-grow"></span>
          ${this._mode==="view"&&t?.floors.some(n=>n.rooms.length)?b`<div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("quality")}>
                ${["auto","low","high"].map(n=>b`<button aria-pressed=${this._quality===n} @click=${()=>this.setQuality(n)}>${this.t(`quality_${n}`)}</button>`)}
              </div>`:g}
          ${this._mode==="editor"&&e!=="idle"?b`<span class="fp3d-save fp3d-save-${e}">${this.t(e==="saving"?"saving":e==="saved"?"saved":"save_error")}</span>`:g}
        </header>
        ${this.data.error&&!t?b`<p class="fp3d-message">${this.t("load_error")}: ${this.data.error}</p>`:g}
        ${!t&&!this.data.error?b`<p class="fp3d-message">${this.t("loading")}</p>`:g}
        ${t?this._mode==="editor"&&this.isAdmin?this.renderEditor(t):this.renderView(t):g}
      </div>
    `}renderEditor(t){return b`<fp3d-editor
      class="fp3d-body"
      .hass=${this.hass}
      .building=${t}
      .narrow=${this.narrow}
      @building-changed=${e=>this.data.edit(e.detail.building)}
    ></fp3d-editor>`}renderView(t){if(!t.floors.length||!t.floors.some(i=>i.rooms.length))return b`<div class="fp3d-empty">
        <p>${this.t(this.isAdmin?"no_building_admin":"no_building")}</p>
        ${this.isAdmin?b`<button class="fp3d-btn fp3d-primary" @click=${()=>this.setMode("editor")}>${this.t("open_editor")}</button>`:g}
      </div>`;let e=t.floors.find(i=>i.id===this._floorId),n=e?[e]:t.floors;return b`
      <nav class="fp3d-nav">
        ${t.floors.length>1?b`<button class="fp3d-chip" aria-pressed=${this._floorId===null} @click=${()=>{this._floorId=null,this._roomId=null}}>
                ${this.t("all_floors")}
              </button>
              ${[...t.floors].reverse().map(i=>b`<button
                  class="fp3d-chip"
                  aria-pressed=${i.id===this._floorId}
                  @click=${()=>{this._floorId=i.id,this._roomId=null}}
                >
                  ${i.name}
                </button>`)}
              <span class="fp3d-sep"></span>`:g}
        ${n.flatMap(i=>i.rooms.map(s=>b`<button
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
        ${this._roomId?b`<fp3d-room-panel
              class="fp3d-room-panel"
              .hass=${this.hass}
              .room=${t.floors.flatMap(i=>i.rooms).find(i=>i.id===this._roomId)??null}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:g}
        <div class="fp3d-overlay">
          <div class="fp3d-seg">
            <button aria-pressed=${this._wallMode==="auto"} @click=${()=>this._wallMode="auto"}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wallMode==="cut"} @click=${()=>this._wallMode="cut"}>${this.t("walls_cut")}</button>
          </div>
          ${t.floors.length>1&&!this._floorId?b`<div class="fp3d-seg">
                <button aria-pressed=${this._explode} @click=${()=>this.setExplode(!0)}>${this.t("floors_apart")}</button>
                <button aria-pressed=${!this._explode} @click=${()=>this.setExplode(!1)}>${this.t("floors_stacked")}</button>
              </div>`:g}
          ${this._roomId||this._floorId&&t.floors.length>1?b`<button class="fp3d-chip" @click=${()=>this.back()}>${this.t("back")}</button>`:g}
        </div>
      </div>
    `}static styles=[N,ct,F`
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
    `]};customElements.get("floorplan-3d-panel")||customElements.define("floorplan-3d-panel",le);var de=class extends P{static properties={hass:{attribute:!1},_config:{state:!0},_roomId:{state:!0},_floorId:{state:!0}};data=new lt(this);constructor(){super(),this._roomId=null,this._floorId=null}static getStubConfig(){return{type:"custom:floorplan-3d-card"}}setConfig(t){if(t.height!==void 0&&!(t.height>100))throw new Error("height must be a number of pixels above 100");this._config=t}getCardSize(){return Math.ceil((this._config?.height??420)/50)}getGridOptions(){return{columns:"full",rows:Math.ceil((this._config?.height??420)/56),min_rows:4}}willUpdate(t){t.has("hass")&&this.hass&&this.data.setHass(this.hass)}back(){this._roomId?this._roomId=null:this._config?.floor||(this._floorId=null)}render(){let t=this.data.building,e=this._config?.height??420,n=this._config?.floor??(t&&t.floors.length===1?t.floors[0].id:t?.floors.some(s=>s.id===this._floorId)?this._floorId:null),i=!!this._roomId||!this._config?.floor&&!!this._floorId&&(t?.floors.length??0)>1;return b`<ha-card>
      <div class="fp3d-card-body" style="height:${e}px">
        ${t&&t.floors.some(s=>s.rooms.length)?b`<fp3d-view3d
              .hass=${this.hass}
              .building=${t}
              .floorId=${n}
              .roomId=${this._roomId}
              .wallMode=${this._config?.walls??"auto"}
              .explode=${this._config?.explode??!0}
              .quality=${this._config?.quality??"auto"}
              @room-tap=${s=>{s.detail.roomId&&(!n&&!this._config?.floor&&(this._floorId=s.detail.floorId),this._roomId=s.detail.roomId===this._roomId?null:s.detail.roomId)}}
              @floor-tap=${s=>{this._floorId=s.detail.floorId,this._roomId=null}}
              @back=${()=>this.back()}
            ></fp3d-view3d>`:b`<p class="fp3d-card-msg">${this.data.error??(t?A(this.hass,"no_building"):A(this.hass,"loading"))}</p>`}
        ${this._roomId&&t?b`<fp3d-room-panel
              class="fp3d-card-panel"
              .hass=${this.hass}
              .room=${t.floors.flatMap(s=>s.rooms).find(s=>s.id===this._roomId)??null}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:g}
        ${i?b`<button class="fp3d-card-back" @click=${()=>this.back()}>${A(this.hass,"back")}</button>`:g}
      </div>
    </ha-card>`}static styles=[N,F`
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
    `]};if(!customElements.get("floorplan-3d-card")){customElements.define("floorplan-3d-card",de);let o=window;o.customCards=o.customCards??[],o.customCards.push({type:"floorplan-3d-card",name:A(void 0,"card_name"),description:A(void 0,"card_description"),preview:!1})}me();
