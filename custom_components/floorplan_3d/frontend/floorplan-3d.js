var _e=new URL(import.meta.url),fe=_e.searchParams.get("v"),me=r=>new URL(`./fonts/${r}${fe?`?v=${fe}`:""}`,_e).href,ge="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD";function be(){if(typeof document>"u"||document.getElementById("fp3d-fonts"))return;let r=document.createElement("style");r.id="fp3d-fonts",r.textContent=`
@font-face{font-family:"Figtree";font-style:normal;font-display:swap;font-weight:300 900;src:url(${me("figtree.woff2")}) format("woff2");unicode-range:${ge}}
@font-face{font-family:"Bricolage Grotesque";font-style:normal;font-display:swap;font-weight:200 800;src:url(${me("bricolage-grotesque.woff2")}) format("woff2");unicode-range:${ge}}`,document.head.append(r)}var At=globalThis,zt=At.ShadowRoot&&(At.ShadyCSS===void 0||At.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ut=Symbol(),ve=new WeakMap,gt=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==Ut)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(zt&&t===void 0){let n=e!==void 0&&e.length===1;n&&(t=ve.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&ve.set(e,t))}return t}toString(){return this.cssText}},ye=r=>new gt(typeof r=="string"?r:r+"",void 0,Ut),H=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((n,i,s)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[s+1],r[0]);return new gt(e,r,Ut)},xe=(r,t)=>{if(zt)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let n=document.createElement("style"),i=At.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=e.cssText,r.appendChild(n)}},jt=zt?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let n of t.cssRules)e+=n.cssText;return ye(e)})(r):r;var{is:An,defineProperty:zn,getOwnPropertyDescriptor:Rn,getOwnPropertyNames:Cn,getOwnPropertySymbols:Pn,getPrototypeOf:On}=Object,Rt=globalThis,we=Rt.trustedTypes,Hn=we?we.emptyScript:"",Fn=Rt.reactiveElementPolyfillSupport,_t=(r,t)=>r,Kt={toAttribute(r,t){switch(t){case Boolean:r=r?Hn:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},ke=(r,t)=>!An(r,t),$e={attribute:!0,type:String,converter:Kt,reflect:!1,useDefault:!1,hasChanged:ke};Symbol.metadata??=Symbol("metadata"),Rt.litPropertyMetadata??=new WeakMap;var U=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$e){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(t,n,e);i!==void 0&&zn(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){let{get:i,set:s}=Rn(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:i,set(o){let a=i?.call(this);s?.call(this,o),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$e}static _$Ei(){if(this.hasOwnProperty(_t("elementProperties")))return;let t=On(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_t("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_t("properties"))){let e=this.properties,n=[...Cn(e),...Pn(e)];for(let i of n)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[n,i]of e)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[e,n]of this.elementProperties){let i=this._$Eu(e,n);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let i of n)e.unshift(jt(i))}else t!==void 0&&e.push(jt(t));return e}static _$Eu(t,e){let n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return xe(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){let n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){let s=(n.converter?.toAttribute!==void 0?n.converter:Kt).toAttribute(e,n.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,e){let n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let s=n.getPropertyOptions(i),o=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Kt;this._$Em=i;let a=o.fromAttribute(e,s.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(t,e,n,i=!1,s){if(t!==void 0){let o=this.constructor;if(i===!1&&(s=this[t]),n??=o.getPropertyOptions(t),!((n.hasChanged??ke)(s,e)||n.useDefault&&n.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:i,wrapped:s},o){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),s!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[i,s]of n){let{wrapped:o}=s,a=this[i];o!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,s,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(e)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};U.elementStyles=[],U.shadowRootOptions={mode:"open"},U[_t("elementProperties")]=new Map,U[_t("finalized")]=new Map,Fn?.({ReactiveElement:U}),(Rt.reactiveElementVersions??=[]).push("2.1.2");var Xt=globalThis,Me=r=>r,Ct=Xt.trustedTypes,Se=Ct?Ct.createPolicy("lit-html",{createHTML:r=>r}):void 0,Ce="$lit$",q=`lit$${Math.random().toFixed(9).slice(2)}$`,Pe="?"+q,Tn=`<${Pe}>`,et=document,vt=()=>et.createComment(""),yt=r=>r===null||typeof r!="object"&&typeof r!="function",te=Array.isArray,Vn=r=>te(r)||typeof r?.[Symbol.iterator]=="function",Gt=`[ 	
\f\r]`,bt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ee=/-->/g,Ie=/>/g,X=RegExp(`>|${Gt}(?:([^\\s"'>=/]+)(${Gt}*=${Gt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ae=/'/g,ze=/"/g,Oe=/^(?:script|style|textarea|title)$/i,ee=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),_=ee(1),S=ee(2),Ai=ee(3),nt=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),Re=new WeakMap,tt=et.createTreeWalker(et,129);function He(r,t){if(!te(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Se!==void 0?Se.createHTML(t):t}var Dn=(r,t)=>{let e=r.length-1,n=[],i,s=t===2?"<svg>":t===3?"<math>":"",o=bt;for(let a=0;a<e;a++){let l=r[a],d,h,f=-1,u=0;for(;u<l.length&&(o.lastIndex=u,h=o.exec(l),h!==null);)u=o.lastIndex,o===bt?h[1]==="!--"?o=Ee:h[1]!==void 0?o=Ie:h[2]!==void 0?(Oe.test(h[2])&&(i=RegExp("</"+h[2],"g")),o=X):h[3]!==void 0&&(o=X):o===X?h[0]===">"?(o=i??bt,f=-1):h[1]===void 0?f=-2:(f=o.lastIndex-h[2].length,d=h[1],o=h[3]===void 0?X:h[3]==='"'?ze:Ae):o===ze||o===Ae?o=X:o===Ee||o===Ie?o=bt:(o=X,i=void 0);let p=o===X&&r[a+1].startsWith("/>")?" ":"";s+=o===bt?l+Tn:f>=0?(n.push(d),l.slice(0,f)+Ce+l.slice(f)+q+p):l+q+(f===-2?a:p)}return[He(r,s+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},xt=class r{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let s=0,o=0,a=t.length-1,l=this.parts,[d,h]=Dn(t,e);if(this.el=r.createElement(d,n),tt.currentNode=this.el.content,e===2||e===3){let f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(i=tt.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let f of i.getAttributeNames())if(f.endsWith(Ce)){let u=h[o++],p=i.getAttribute(f).split(q),c=/([.?@])?(.*)/.exec(u);l.push({type:1,index:s,name:c[2],strings:p,ctor:c[1]==="."?Qt:c[1]==="?"?Zt:c[1]==="@"?Yt:rt}),i.removeAttribute(f)}else f.startsWith(q)&&(l.push({type:6,index:s}),i.removeAttribute(f));if(Oe.test(i.tagName)){let f=i.textContent.split(q),u=f.length-1;if(u>0){i.textContent=Ct?Ct.emptyScript:"";for(let p=0;p<u;p++)i.append(f[p],vt()),tt.nextNode(),l.push({type:2,index:++s});i.append(f[u],vt())}}}else if(i.nodeType===8)if(i.data===Pe)l.push({type:2,index:s});else{let f=-1;for(;(f=i.data.indexOf(q,f+1))!==-1;)l.push({type:7,index:s}),f+=q.length-1}s++}}static createElement(t,e){let n=et.createElement("template");return n.innerHTML=t,n}};function ot(r,t,e=r,n){if(t===nt)return t;let i=n!==void 0?e._$Co?.[n]:e._$Cl,s=yt(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(r),i._$AT(r,e,n)),n!==void 0?(e._$Co??=[])[n]=i:e._$Cl=i),i!==void 0&&(t=ot(r,i._$AS(r,t.values),i,n)),t}var qt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:n}=this._$AD,i=(t?.creationScope??et).importNode(e,!0);tt.currentNode=i;let s=tt.nextNode(),o=0,a=0,l=n[0];for(;l!==void 0;){if(o===l.index){let d;l.type===2?d=new wt(s,s.nextSibling,this,t):l.type===1?d=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(d=new Jt(s,this,t)),this._$AV.push(d),l=n[++a]}o!==l?.index&&(s=tt.nextNode(),o++)}return tt.currentNode=et,i}p(t){let e=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}},wt=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,i){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ot(this,t,e),yt(t)?t===v||t==null||t===""?(this._$AH!==v&&this._$AR(),this._$AH=v):t!==this._$AH&&t!==nt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Vn(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==v&&yt(this._$AH)?this._$AA.nextSibling.data=t:this.T(et.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=xt.createElement(He(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(e);else{let s=new qt(i,this),o=s.u(this.options);s.p(e),this.T(o),this._$AH=s}}_$AC(t){let e=Re.get(t.strings);return e===void 0&&Re.set(t.strings,e=new xt(t)),e}k(t){te(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,n,i=0;for(let s of t)i===e.length?e.push(n=new r(this.O(vt()),this.O(vt()),this,this.options)):n=e[i],n._$AI(s),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let n=Me(t).nextSibling;Me(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},rt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,i,s){this.type=1,this._$AH=v,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=v}_$AI(t,e=this,n,i){let s=this.strings,o=!1;if(s===void 0)t=ot(this,t,e,0),o=!yt(t)||t!==this._$AH&&t!==nt,o&&(this._$AH=t);else{let a=t,l,d;for(t=s[0],l=0;l<s.length-1;l++)d=ot(this,a[n+l],e,l),d===nt&&(d=this._$AH[l]),o||=!yt(d)||d!==this._$AH[l],d===v?t=v:t!==v&&(t+=(d??"")+s[l+1]),this._$AH[l]=d}o&&!i&&this.j(t)}j(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Qt=class extends rt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===v?void 0:t}},Zt=class extends rt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==v)}},Yt=class extends rt{constructor(t,e,n,i,s){super(t,e,n,i,s),this.type=5}_$AI(t,e=this){if((t=ot(this,t,e,0)??v)===nt)return;let n=this._$AH,i=t===v&&n!==v||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==v&&(n===v||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Jt=class{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){ot(this,t)}};var Ln=Xt.litHtmlPolyfillSupport;Ln?.(xt,wt),(Xt.litHtmlVersions??=[]).push("3.3.3");var Fe=(r,t,e)=>{let n=e?.renderBefore??t,i=n._$litPart$;if(i===void 0){let s=e?.renderBefore??null;n._$litPart$=i=new wt(t.insertBefore(vt(),s),s,void 0,e??{})}return i._$AI(r),i};var ne=globalThis,P=class extends U{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Fe(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return nt}};P._$litElement$=!0,P.finalized=!0,ne.litElementHydrateSupport?.({LitElement:P});var Bn=ne.litElementPolyfillSupport;Bn?.({LitElement:P});(ne.litElementVersions??=[]).push("4.2.2");async function Te(r){return r.callWS({type:"floorplan_3d/building/get"})}async function Ve(r,t){return(await r.callWS({type:"floorplan_3d/building/save",building:t})).revision}function De(r,t){return r.connection.subscribeMessage(e=>t(e.revision),{type:"floorplan_3d/building/subscribe"})}async function Le(r,t){return(await r.callWS({type:"floorplan_3d/image/get",image_id:t})).data}async function Be(r,t,e){await r.callWS({type:"floorplan_3d/image/set",image_id:t,data:e})}var Nn={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,tariff:null},Ne=["wood","oak","tiles","carpet","stone","concrete"];function We(r,t,e){return{id:r,name:t,elevation:e,height:2.5,cut_height:1.15,rooms:[],openings:[],furniture:[],placements:[],background:null}}var ie=["sofa","armchair","table","chair","bed","nightstand","wardrobe","shelf","kitchen","fridge","stove","sink","bathtub","shower","wc","washbasin","desk","tv_board","plant","rug","stairs"],Ue={sofa:[2.2,.9,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],fridge:[.6,.65,1.8],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75]},se={door:{width:.9,sill:0,height:2.05},window:{width:1.2,sill:.9,height:1.3},garage:{width:2.5,sill:0,height:2.1}};function je(r){r.energy={...Nn,...r.energy??{}},r.presence=r.presence??[];for(let t of r.floors)t.placements=t.placements.map(e=>({...e,mount:e.mount??null})),t.openings=t.openings.map(e=>({...e,hinge:e.hinge??"left",cover:e.cover??null,contact:e.contact??null,tilt:e.tilt??null}));return r}function Q(r){return`${r}_${Math.random().toString(36).slice(2,10)}`}function B(r){let t=0;for(let e=0;e<r.length;e++){let[n,i]=r[e],[s,o]=r[(e+1)%r.length];t+=n*o-s*i}return t/2}function at(r){return Math.abs(B(r))}function j(r){let t=B(r);if(Math.abs(t)<1e-9){let i=r.length||1;return[r.reduce((s,o)=>s+o[0],0)/i,r.reduce((s,o)=>s+o[1],0)/i]}let e=0,n=0;for(let i=0;i<r.length;i++){let[s,o]=r[i],[a,l]=r[(i+1)%r.length],d=s*l-a*o;e+=(s+a)*d,n+=(o+l)*d}return[e/(6*t),n/(6*t)]}function Ke(r){if(r.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=r[t],[i,s]=r[(t+1)%4];if(Math.abs(e-i)>1e-6&&Math.abs(n-s)>1e-6)return!1}return!0}function lt(r){let t=1/0,e=1/0,n=-1/0,i=-1/0;for(let[s,o]of r)t=Math.min(t,s),e=Math.min(e,o),n=Math.max(n,s),i=Math.max(i,o);return{x0:t,z0:e,x1:n,z1:i}}function Ge(r){let t=r.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),i=r.w/2,s=r.d/2;return[[-i,-s],[i,-s],[i,s],[-i,s]].map(([o,a])=>[r.x+o*e-a*n,r.z+o*n+a*e])}function V(r,t){let e=!1;for(let n=0,i=t.length-1;n<t.length;i=n++){let[s,o]=t[n],[a,l]=t[i];o>r[1]!=l>r[1]&&r[0]<(a-s)*(r[1]-o)/(l-o)+s&&(e=!e)}return e}var Wn=700,dt=class{building=null;error=null;saveState="idle";host;hass=null;revision=-1;ownRevisions=new Set;unsubscribe=null;saveTimer;pending=null;saving=null;connected=!1;constructor(t){this.host=t,t.addController(this)}setHass(t){let e=this.hass===null;this.hass=t,e&&this.connected&&this.start()}hostConnected(){this.connected=!0,this.hass&&this.start()}hostDisconnected(){this.connected=!1,this.flush(),this.unsubscribe?.(),this.unsubscribe=null}edit(t){this.building=t,this.pending=t,clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{this.flush()},Wn),this.host.requestUpdate()}async flush(){clearTimeout(this.saveTimer),this.saving&&await this.saving;let t=this.pending;!t||!this.hass||(this.pending=null,this.saveState="saving",this.host.requestUpdate(),this.saving=(async()=>{try{let e=await Ve(this.hass,t);this.ownRevisions.add(e),this.revision=e,this.saveState=this.pending?"saving":"saved"}catch(e){this.saveState="error",this.error=qe(e)}this.host.requestUpdate()})(),await this.saving,this.saving=null)}async start(){if(this.hass&&(await this.reload(),!this.unsubscribe&&this.connected))try{this.unsubscribe=await De(this.hass,t=>{this.ownRevisions.has(t)||t===this.revision||this.pending||this.saving||this.reload()})}catch{}}async reload(){if(this.hass){try{let t=await Te(this.hass);this.building=je(t.building),this.revision=t.revision,this.error=null}catch(t){this.error=qe(t)}this.host.requestUpdate()}}};function qe(r){return r&&typeof r=="object"&&"message"in r?String(r.message):String(r)}var Un={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},jn=new Set(["temperature","humidity","power"]),Kn=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas"]),Qe=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],Ze=new Set(["light","switch","fan"]);function Gn(r){return r.slice(0,r.indexOf("."))}function E(r){return Un[Gn(r)]??null}function Ye(r){return r!==null&&r!=="scene"&&r!=="script"}function qn(r,t){let e=r.entities?.[t];return e?e.area_id?e.area_id:e.device_id&&r.devices?.[e.device_id]?.area_id||null:null}function Qn(r,t){let e=E(t);if(!e)return!1;let n=r.entities?.[t];if(n?.hidden||n?.entity_category)return!1;let i=r.states[t];if(!i)return!1;let s=i.attributes.device_class;return e==="sensor"?!!s&&jn.has(s):e==="binary"?!!s&&Kn.has(s):!0}function K(r,t){if(!t||!r.entities)return[];let e=Object.keys(r.entities).filter(i=>qn(r,i)===t&&Qn(r,i)),n=r.areas?.[t]?.name;return e.sort((i,s)=>{let o=Qe.indexOf(E(i)),a=Qe.indexOf(E(s));return o-a||F(r,i,n).localeCompare(F(r,s,n))})}function F(r,t,e){let i=r.states[t]?.attributes.friendly_name??r.entities?.[t]?.name??t;if(e&&i.length>e.length+1&&i.toLowerCase().startsWith(e.toLowerCase()+" ")){let s=i.slice(e.length+1);return s.charAt(0).toUpperCase()+s.slice(1)}return i}function D(r){return!r||r.state==="unavailable"||r.state==="unknown"}function Je(r){if(!r)return!1;switch(E(r.entity_id)){case"light":case"switch":case"fan":case"binary":return r.state==="on";case"cover":return r.state==="open"||r.state==="opening";case"climate":return r.attributes.hvac_action==="heating"||r.attributes.hvac_action==="cooling";case"media":return r.state==="playing";case"lock":return r.state==="unlocked"||r.state==="open";default:return!1}}function Xe(r){if(!r||r.state!=="on")return null;let t=r.attributes,e=typeof t.brightness=="number"?Math.max(.08,t.brightness/255):1,n=t.rgb_color,i;return n&&t.color_mode!=="color_temp"&&t.color_mode!=="brightness"&&t.color_mode!=="onoff"?i=[n[0]/255,n[1]/255,n[2]/255]:typeof t.color_temp_kelvin=="number"?i=Zn(t.color_temp_kelvin):i=[1,.71,.28],{color:i,level:e}}function Zn(r){let t=Math.min(1,Math.max(0,(r-2200)/4300)),e=[1,.66,.26],n=[.78,.9,1];return[e[0]+(n[0]-e[0])*t,e[1]+(n[1]-e[1])*t,e[2]+(n[2]-e[2])*t]}function Pt(r,t,e=null){if(r==="light"&&e){if(e==="floor")return 1.95;if(e==="table")return 1.25;if(e==="wall")return 1.95}switch(r){case"light":case"camera":return Math.max(.5,t-.25);case"cover":return Math.min(2,t-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}function Yn(r,t){let e=1/0;for(let n=0;n<t.length;n++){let i=t[n],s=t[(n+1)%t.length],o=s[0]-i[0],a=s[1]-i[1],l=o*o+a*a||1,d=Math.min(1,Math.max(0,((r[0]-i[0])*o+(r[1]-i[1])*a)/l));e=Math.min(e,Math.hypot(r[0]-i[0]-o*d,r[1]-i[1]-a*d))}return e}function tn(r,t,e=[]){if(r.points.length<3||!t.length)return[];let n=r.points,i=n.map(b=>b[0]),s=n.map(b=>b[1]),o=Math.min(...i),a=Math.min(...s),l=Math.max(...i),d=Math.max(...s),h=Math.min(l-o,d-a),f=Math.max(.1,Math.min(.25,h/8)),u=Math.min(.35,h/5),p=j(n),c=[];for(let b=o+f/2;b<l;b+=f)for(let w=a+f/2;w<d;w+=f){let M=[b,w];if(!V(M,n))continue;let x=Yn(M,n);x<u||c.push({p:M,wall:x})}c.length||c.push({p,wall:0});let g=[...e],m=[],y=Math.min(.7,h/4);for(let b of t){let w=E(b)==="light",M=c[0].p,x=-1/0;for(let{p:I,wall:T}of c){let z=g.length?Math.min(...g.map(N=>Math.hypot(I[0]-N[0],I[1]-N[1]))):3,C=Math.hypot(I[0]-p[0],I[1]-p[1]),O=Math.min(z,3)*2;C<y&&!w&&(O-=10),O-=w?C*.35:T*1.2,O>x+1e-9&&(x=O,M=I)}let $=[Math.round(M[0]*100)/100,Math.round(M[1]*100)/100];g.push($),m.push({entity_id:b,x:$[0],z:$[1],y:null,mount:null})}return m}var Jn=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),Xn=new Set(["garage","gate"]),ti=new Set(["window","opening"]);function $t(r,t,e=!1){let n=new Map;return t.length&&r.forEach((i,s)=>{let o=e&&t.length===1?t[0]:t[s];o&&n.set(i.id,o)}),n}function Ot(r,t){let e=new Map;for(let n of t)for(let i of n.rooms){let s=n.openings.filter(b=>b.room_id===i.id).sort((b,w)=>b.edge-w.edge||b.offset-w.offset);if(!s.length)continue;let o=K(r,i.area_id),a=b=>r.states[b]?.attributes.device_class,l=o.filter(b=>E(b)==="cover"&&Jn.has(a(b))),d=s.filter(b=>b.type==="window"),h=s.filter(b=>b.type==="door"),f=s.filter(b=>b.type==="garage"),u=$t(d,l,!0),p=$t(d,o.filter(b=>E(b)==="binary"&&ti.has(a(b)))),c=$t(h,o.filter(b=>E(b)==="binary"&&a(b)==="door")),g=$t(f,o.filter(b=>E(b)==="cover"&&Xn.has(a(b)??""))),m=$t(f,o.filter(b=>E(b)==="binary"&&a(b)==="garage_door")),y=(b,w)=>b==="none"?null:b??w??null;for(let b of s){let w=b.type==="window"?u:b.type==="garage"?g:null,M=b.type==="window"?p:b.type==="garage"?m:c;e.set(b.id,{cover:y(b.cover,w?.get(b.id)),contact:y(b.contact,M.get(b.id)),tilt:b.tilt==="none"?null:b.tilt})}}return e}var ei=.5;function Ht(r,t,e="window"){let n=d=>!!d&&r.states[d]?.state==="on",i=d=>!!d&&!!r.states[d]&&!D(r.states[d]);if(e==="door")return{open:i(t.contact)?n(t.contact)?1:0:ei,tilt:0,cover:null};let s=n(t.tilt),o=n(t.contact)&&!s?1:0,a=null,l=t.cover?r.states[t.cover]:void 0;if(l&&!D(l)){let d=l.attributes.current_position;typeof d=="number"?a=1-Math.min(100,Math.max(0,d))/100:a=l.state==="closed"?1:l.state==="opening"||l.state==="closing"?.5:0}else t.cover&&(a=0);return e==="garage"?(a===null&&(a=i(t.contact)&&n(t.contact)?0:1),{open:0,tilt:0,cover:a}):{open:o,tilt:s?1:0,cover:a}}function kt(r,t){let e=new Map,n=[];for(let o of t){let a=r.entities?.[o]?.device_id??`entity:${o}`,l=e.get(a);l||(e.set(a,l=[]),n.push(a)),l.push(o)}let i=n.map(o=>{let a=e.get(o),l=a.find(d=>!r.entities?.[d]?.name)??a[0];return{primary:l,others:a.filter(d=>d!==l)}}),s=new Map(t.map((o,a)=>[o,a]));return i.sort((o,a)=>s.get(o.primary)-s.get(a.primary))}function en(r,t){return kt(r,t).map(e=>e.primary)}var ni=.05,ii=.2,si=.12;function oi(r){let t=[];return r.forEach((e,n)=>{let i=e.points;if(i.length<3)return;let s=B(i)>=0;for(let o=0;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length],d=l[0]-a[0],h=l[1]-a[1],f=Math.hypot(d,h);if(f<.05)continue;let u=[d/f,h/f],p=s?[u[1],-u[0]]:[-u[1],u[0]];(u[1]<-1e-9||Math.abs(u[1])<=1e-9&&u[0]<0)&&(u=[-u[0],-u[1]]);let c=[-u[1],u[0]],g=a[0]*u[0]+a[1]*u[1],m=l[0]*u[0]+l[1]*u[1];t.push({room:n,index:o,dir:u,normal:c,offset:a[0]*c[0]+a[1]*c[1],outside:p[0]*c[0]+p[1]*c[1]>0?1:-1,t0:Math.min(g,m),t1:Math.max(g,m)})}}),t}function nn(r,t=.6){let e=oi(r),n=e.map((h,f)=>f),i=h=>n[h]===h?h:n[h]=i(n[h]),s=[];for(let h=0;h<e.length;h++)for(let f=h+1;f<e.length;f++){let u=e[h],p=e[f];if(u.room===p.room||Math.abs(u.dir[0]*p.dir[1]-u.dir[1]*p.dir[0])>ni||u.outside===p.outside)continue;let c=(p.offset-u.offset)*u.outside;c>t||c<-si||Math.abs(c)<1e-4||Math.min(u.t1,p.t1)-Math.max(u.t0,p.t0)<ii||(s.push(Math.round(c*1e3)/1e3),n[i(h)]=i(f))}if(!s.length)return{rooms:r.map(h=>({...h,points:h.points.map(f=>[f[0],f[1]])})),gaps:s};let o=new Map;e.forEach((h,f)=>{let u=i(f);if(u===f&&!e.some((c,g)=>g!==f&&i(g)===f))return;let p=o.get(u)??[];p.push(f),o.set(u,p)});let a=r.map(h=>h.points.map(()=>new Map));for(let[h,f]of o){let u=f.reduce((p,c)=>p+e[c].offset,0)/f.length;for(let p of f){let c=e[p],g=u-c.offset,m=[c.normal[0]*g,c.normal[1]*g],y=r[c.room].points.length;a[c.room][c.index].set(h,m),a[c.room][(c.index+1)%y].set(h,m)}}let l=h=>Math.round(h*1e3)/1e3;return{rooms:r.map((h,f)=>({...h,points:h.points.map((u,p)=>{let c=u[0],g=u[1];for(let[m,y]of a[f][p].values())c+=m,g+=y;return[l(c),l(g)]})})),gaps:s}}function sn(r){let t=r.filter(n=>n>.04).sort((n,i)=>n-i);if(!t.length)return null;let e=t[Math.floor(t.length/2)];return Math.min(.5,Math.max(.08,Math.round(e*100)/100))}var L=(r,t)=>[r[0]-t[0],r[1]-t[1]],ct=(r,t)=>[r[0]+t[0],r[1]+t[1]],Z=(r,t)=>[r[0]*t,r[1]*t],Ft=(r,t)=>r[0]*t[0]+r[1]*t[1],Mt=(r,t)=>r[0]*t[1]-r[1]*t[0],Tt=r=>Math.hypot(r[0],r[1]),it=r=>{let t=Tt(r)||1;return[r[0]/t,r[1]/t]},on=r=>[-r[1],r[0]],rn=r=>[r[1],-r[0]];function St(r,t){let e=t.eps??.005,n=[],i=[],s=p=>{for(let c=0;c<i.length;c++)if(Math.abs(i[c][0]-p[0])<=e&&Math.abs(i[c][1]-p[1])<=e)return c;return i.push([p[0],p[1]]),i.length-1},o=[];for(let p of r){let c=p.points;if(c.length<3||Math.abs(B(c))<1e-6)continue;let g=B(c)>0,m=c.map(s);for(let y=0;y<c.length;y++){let b=m[y],w=m[(y+1)%c.length];b!==w&&o.push(g?{u:b,v:w,room:p.id,edge:y,forward:!0}:{u:w,v:b,room:p.id,edge:y,forward:!1})}}let a=[];for(let p of o){let c=i[p.u],g=i[p.v],m=L(g,c),y=Tt(m),b=Z(m,1/y),w=[];for(let x=0;x<i.length;x++){if(x===p.u||x===p.v)continue;let $=L(i[x],c),I=Ft($,b);I<=e||I>=y-e||Math.abs(Mt(b,$))<=e&&w.push({t:I,id:x})}w.sort((x,$)=>x.t-$.t);let M=[{t:0,id:p.u},...w,{t:y,id:p.v}];for(let x=0;x+1<M.length;x++){let $=M[x],I=M[x+1],T=p.forward?$.t:y-I.t,z=p.forward?I.t:y-$.t;a.push({u:$.id,v:I.id,room:p.room,edge:p.edge,t0:T,t1:z})}}let l=new Map;for(let p of a){let c=p.u<p.v?`${p.u}-${p.v}`:`${p.v}-${p.u}`,g=l.get(c);g||l.set(c,g=[]),g.push(p)}let d=p=>({room_id:p.room,edge:p.edge,t0:p.t0,t1:p.t1}),h=[];for(let p of l.values()){let c=p[0],g=p.find(m=>m!==c&&m.u===c.v&&m.v===c.u&&m.room!==c.room);for(let m of p)m!==c&&m!==g&&m.room!==c.room&&n.push(`overlap:${c.room}:${m.room}`);g?h.push({a:c.u,b:c.v,left:t.interior/2,right:t.interior/2,exterior:!1,roomLeft:c.room,roomRight:g.room,sources:[d(c),d(g)]}):h.push({a:c.u,b:c.v,left:0,right:t.exterior,exterior:!0,roomLeft:c.room,roomRight:null,sources:[d(c)]})}h=ai(h,i);let f=di(h,i);return{walls:h.map((p,c)=>{let g=i[p.a],m=i[p.b],y=f.get(`${c}:a`),b=f.get(`${c}:b`),w=ci([y.right,b.left,m,b.right,y.left,g],1e-6);return{id:ri(g,m),a:[g[0],g[1]],b:[m[0],m[1]],left:p.left,right:p.right,exterior:p.exterior,roomLeft:p.roomLeft,roomRight:p.roomRight,sources:p.sources,footprint:w}}),warnings:[...new Set(n)]}}function ri(r,t){let e=s=>Math.round(s*100),[n,i]=r[0]<t[0]||r[0]===t[0]&&r[1]<=t[1]?[r,t]:[t,r];return`w_${e(n[0])}_${e(n[1])}_${e(i[0])}_${e(i[1])}`}function an(r){return{...r,a:r.b,b:r.a,left:r.right,right:r.left,roomLeft:r.roomRight,roomRight:r.roomLeft}}function ai(r,t){let e=r.slice(),n=!0;for(;n;){n=!1;let i=new Map;e.forEach((s,o)=>{for(let a of[s.a,s.b]){let l=i.get(a);l||i.set(a,l=[]),l.push(o)}});for(let[s,o]of i){if(o.length!==2)continue;let a=e[o[0]],l=e[o[1]];if(a.b!==s&&(a=an(a)),l.a!==s&&(l=an(l)),a.a===l.b)continue;let d=it(L(t[a.b],t[a.a])),h=it(L(t[l.b],t[l.a]));if(Math.abs(Mt(d,h))>1e-6||Ft(d,h)<=0||a.exterior!==l.exterior||a.roomLeft!==l.roomLeft||a.roomRight!==l.roomRight||Math.abs(a.left-l.left)>1e-9||Math.abs(a.right-l.right)>1e-9)continue;let f={...a,b:l.b,sources:li(a.sources,l.sources)},u=e.filter((p,c)=>c!==o[0]&&c!==o[1]);u.push(f),e.length=0,e.push(...u),n=!0;break}}return e}function li(r,t){let e=r.map(n=>({...n}));for(let n of t){let i=e.find(s=>s.room_id===n.room_id&&s.edge===n.edge&&(Math.abs(s.t1-n.t0)<1e-6||Math.abs(n.t1-s.t0)<1e-6));i?(i.t0=Math.min(i.t0,n.t0),i.t1=Math.max(i.t1,n.t1)):e.push({...n})}return e}function di(r,t){let e=new Map;r.forEach((i,s)=>{let o=it(L(t[i.b],t[i.a])),a=[[i.a,{key:`${s}:a`,d:o,left:i.left,right:i.right,angle:Math.atan2(o[1],o[0])}],[i.b,{key:`${s}:b`,d:Z(o,-1),left:i.right,right:i.left,angle:Math.atan2(-o[1],-o[0])}]];for(let[l,d]of a){let h=e.get(l);h||e.set(l,h=[]),h.push(d)}});let n=new Map;for(let[i,s]of e){let o=t[i];s.sort((d,h)=>d.angle-h.angle);let a=d=>({left:ct(o,Z(on(d.d),d.left)),right:ct(o,Z(rn(d.d),d.right))});for(let d of s)n.set(d.key,a(d));if(s.length<2)continue;let l=4*Math.max(...s.map(d=>Math.max(d.left,d.right)))+1e-9;for(let d=0;d<s.length;d++){let h=s[d],f=s[(d+1)%s.length],u=ct(o,Z(on(h.d),h.left)),p=ct(o,Z(rn(f.d),f.right)),c=Mt(h.d,f.d);if(Math.abs(c)<1e-4)continue;let g=Mt(L(p,u),f.d)/c,m=ct(u,Z(h.d,g));Tt(L(m,o))>l||(n.get(h.key).left=m,n.get(f.key).right=m)}}return n}function ci(r,t){let e=r.filter((i,s)=>Tt(L(i,r[(s+1)%r.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let i=0;i<e.length;i++){let s=e[(i+e.length-1)%e.length],o=e[i],a=e[(i+1)%e.length],l=L(o,s),d=L(a,o);if(Math.abs(Mt(it(l),it(d)))<1e-7&&Ft(l,d)>0){e=e.filter((h,f)=>f!==i),n=!0;break}}}return e}function Vt(r,t,e){let n=r.points[t],i=r.points[(t+1)%r.points.length],s=it(L(i,n));return ct(n,Z(s,e))}function ln(r,t,e,n){for(let i of r){if(!i.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let o=Vt(t,e,n);return{wall:i,s:Ft(L(o,i.a),it(L(i.b,i.a)))}}return null}var dn={view:"3D",editor:"Editor",all_floors:"Alle Etagen",no_building:"Noch kein Grundriss vorhanden.",no_building_admin:"Noch kein Grundriss vorhanden. Im Editor zeichnest du deine erste Etage.",open_editor:"Editor \xF6ffnen",loading:"L\xE4dt \u2026",load_error:"Laden fehlgeschlagen",saving:"Speichert \u2026",saved:"Gespeichert",save_error:"Speichern fehlgeschlagen",walls_auto:"W\xE4nde hoch",walls_cut:"Schnitt",reset_view:"\xDCbersicht",back:"Zur\xFCck",floor:"Etage",floors:"Etagen",add_floor:"Etage hinzuf\xFCgen",floor_name:"Name",elevation:"H\xF6he \xFCber Boden (m)",height:"Raumh\xF6he (m)",cut_height:"Schnitth\xF6he (m)",delete_floor:"Etage l\xF6schen",delete_floor_confirm:"Etage \u201E{name}\u201C mit allen R\xE4umen l\xF6schen?",move_up:"Nach oben",move_down:"Nach unten",default_floor:"Erdgeschoss",new_floor:"Etage {n}",tool_select:"Ausw\xE4hlen",tool_rect:"Rechteck",tool_polygon:"Freie Form",undo:"R\xFCckg\xE4ngig",redo:"Wiederholen",fit:"Alles zeigen",room:"Raum",rooms:"R\xE4ume",room_name:"Name",area:"Bereich",no_area:"Kein Bereich",material:"Boden",x:"X (m)",z:"Y (m)",width:"Breite (m)",depth:"Tiefe (m)",points:"Eckpunkte",delete_point:"Punkt l\xF6schen",duplicate:"Duplizieren",delete:"L\xF6schen",new_room:"Raum {n}",settings:"Einstellungen",wall_exterior:"Au\xDFenwand (m)",wall_interior:"Innenwand (m)",grid:"Raster (m)",background:"Vorlage (Grundriss-Bild)",background_upload:"Bild w\xE4hlen \u2026",background_width:"Breite im Plan (m)",background_opacity:"Deckkraft",background_remove:"Vorlage entfernen",hint_select:"Raum antippen zum Ausw\xE4hlen \xB7 Ecken ziehen \xB7 \u201E+\u201C auf einer Kante f\xFCgt einen Punkt ein \xB7 Entf l\xF6scht \xB7 Strg+Z",hint_rect:"Ziehen, um ein Rechteck zu zeichnen",hint_polygon:"Punkte setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",hint_empty:"Lege zuerst eine Etage an.",area_m2:"{a} m\xB2",overlap_warning:"R\xE4ume \xFCberlappen sich \u2013 die W\xE4nde dort sind unvollst\xE4ndig.",read_only:"Nur Administratoren k\xF6nnen den Grundriss bearbeiten.",mat_wood:"Holz",mat_oak:"Eiche",mat_tiles:"Fliesen",mat_carpet:"Teppich",mat_stone:"Stein",mat_concrete:"Beton",card_name:"Floorplan 3D",card_description:"Deine Wohnung in 3D (Neon).",stats:"{calls} Draw-Calls \xB7 {tris} Dreiecke",stats_fps:"{fps} B/s (langsamstes Bild {ms} ms)",stats_idle:"Ruhe (0 B/s)",stats_low:"Stufe Tablet, Pixeldichte {r}",stats_full:"volle Stufe, Pixeldichte {r}",floors_apart:"Auseinander",floors_stacked:"Gestapelt",floor_rooms_one:"1 Raum",floor_rooms:"{n} R\xE4ume",quality:"Qualit\xE4t",quality_auto:"Auto",quality_low:"Tablet",quality_high:"Hoch",state_on:"An",state_off:"Aus",state_open:"Offen",state_closed:"Zu",state_opening:"\xD6ffnet",state_closing:"Schlie\xDFt",state_playing:"Spielt",state_paused:"Pause",state_idle:"Bereit",state_locked:"Verriegelt",state_unlocked:"Entriegelt",state_detected:"Erkannt",state_clear:"Frei",state_unavailable:"Nicht verf\xFCgbar",state_heat:"Heizen",state_cool:"K\xFChlen",state_auto:"Automatik",state_heat_cool:"Heizen/K\xFChlen",state_dry:"Entfeuchten",state_fan_only:"L\xFCften",devices:"Ger\xE4te",devices_none_area:"Verkn\xFCpfe den Raum mit einem Bereich, dann erscheinen dessen Ger\xE4te hier.",devices_none:"Im Bereich gibt es keine passenden Ger\xE4te.",devices_place_all:"Alle automatisch platzieren",devices_place:"Platzieren",devices_remove:"Entfernen",devices_hint:"Platzierte Ger\xE4te erscheinen in 3D. Im Plan lassen sie sich verschieben.",panel_lights:"Licht",panel_covers:"Rolll\xE4den",panel_climate:"Heizung",panel_media:"Medien",panel_switches:"Schalter",panel_sensors:"Sensoren",panel_scenes:"Szenen & Skripte",panel_all_off:"Alle aus",panel_no_area:"Dieser Raum ist mit keinem Bereich verkn\xFCpft. Im Editor kannst du ihn verkn\xFCpfen.",panel_empty:"Im Bereich gibt es keine steuerbaren Ger\xE4te.",close:"Schlie\xDFen",brightness:"Helligkeit",color_temp:"Farbtemperatur",color:"Farbe",position:"Position",cover_open:"Auf",cover_stop:"Stopp",cover_close:"Zu",target_temp:"Soll",current_temp:"Ist",temp_down:"K\xE4lter",temp_up:"W\xE4rmer",volume:"Lautst\xE4rke",play_pause:"Wiedergabe/Pause",previous:"Zur\xFCck",next:"Weiter",run:"Ausf\xFChren",details:"Details",hold_hint:"Antippen schaltet \xB7 lange dr\xFCcken \xF6ffnet Details",tool_door:"T\xFCr",tool_window:"Fenster",tool_garage:"Garagentor",device:"Ger\xE4t",lamp_mount:"Lampe",lamp_ceiling:"Deckenleuchte",lamp_floor:"Stehlampe",lamp_table:"Tischlampe",lamp_wall:"Wandleuchte",marker_height:"H\xF6he des Symbols (m)",height_auto:"H\xF6he automatisch",device_centre:"In Raummitte",lights_spread:"Deckenlampen gleichm\xE4\xDFig verteilen",devices_search:"Ger\xE4te suchen \u2026",devices_more:"+{n} weitere",devices_less:"weniger",panel_more:"Weitere anzeigen ({n})",panel_less:"Weniger anzeigen",gaps_close:"L\xFCcken schlie\xDFen",gaps_hint:"R\xE4ume mit bis zu 60 cm Abstand an einer gemeinsamen Wand zusammenf\xFChren; der Abstand wird die Innenwandst\xE4rke.",gaps_none:"Keine L\xFCcken zwischen R\xE4umen gefunden.",gaps_closed:"{n} Stellen geschlossen.",gaps_closed_wall:"{n} Stellen geschlossen, Innenwand jetzt {t} m.",fps:"FPS",fps_title:"Leistungsanzeige (Bilder pro Sekunde)",hint_garage:"Auf eine Wand tippen, um ein Garagentor einzusetzen",opening_garage:"Garagentor",garage_hint:"Das Tor folgt einem Garagen-Cover (Position oder offen/zu) oder einem Garagentor-Kontakt aus dem Bereich des Raums.",door_hint:"Mit T\xFCrkontakt schwenkt das T\xFCrblatt auf, ohne Sensor steht es halb offen.",hint_door:"Auf eine Wand tippen, um eine T\xFCr einzusetzen",hint_window:"Auf eine Wand tippen, um ein Fenster einzusetzen",opening_door:"T\xFCr",opening_window:"Fenster",opening_type:"Art",opening_position:"Mitte ab Ecke (m)",sill:"Br\xFCstung (m)",opening_height:"H\xF6he (m)",hinge:"Anschlag (vom Raum aus)",hinge_left:"Links",hinge_right:"Rechts",cover_entity:"Rollladen",contact_entity:"Kontakt",tilt_entity:"Kipp-Sensor",entity_auto:"Automatisch ({name})",entity_auto_none:"Automatisch (keiner gefunden)",entity_none:"Keiner",opening_hint:"Terrassent\xFCr: Fenster mit Br\xFCstung 0. Automatisch nimmt Rolll\xE4den und Kontakte aus dem Bereich des Raums.",furniture:"M\xF6bel",furniture_add:"M\xF6bel hinzuf\xFCgen",furniture_type:"M\xF6belst\xFCck",rotation:"Drehung (\xB0)",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"H\xF6he (m)",furn_sofa:"Sofa",furn_armchair:"Sessel",furn_table:"Tisch",furn_chair:"Stuhl",furn_bed:"Bett",furn_nightstand:"Nachttisch",furn_wardrobe:"Schrank",furn_shelf:"Regal",furn_kitchen:"K\xFCchenzeile",furn_fridge:"K\xFChlschrank",furn_stove:"Herd",furn_sink:"Sp\xFCle",furn_bathtub:"Badewanne",furn_shower:"Dusche",furn_wc:"WC",furn_washbasin:"Waschtisch",furn_desk:"Schreibtisch",furn_tv_board:"TV-Board",furn_plant:"Pflanze",furn_rug:"Teppich",furn_stairs:"Treppe",stairs_hint:"Die Treppe steigt nach hinten an (weg von der markierten Vorderkante) und \xF6ffnet die Decke der Etage dar\xFCber.",floor_lights:"{n} Licht an",floor_open:"{n} offen",floor_persons:"{n} Pers.",energy_consumption:"Verbrauch",energy_grid_import:"Netzbezug",energy_grid_export:"Einspeisung",energy_solar:"Solar",energy_battery:"Akku",energy_tariff:"Tarif",energy:"Energie",energy_meter:"Z\xE4hlerplatz",energy_meter_set:"Z\xE4hlerplatz setzen",energy_meter_remove:"Z\xE4hlerplatz entfernen",energy_meter_hint:"Tippe im Plan auf die Stelle des Z\xE4hlers bzw. Hausanschlusses.",energy_grid:"Netz (W, + = Bezug)",energy_solar_sensor:"Solar-Erzeugung (W)",energy_battery_sensor:"Akku-Leistung (W, + = Entladen)",energy_battery_soc:"Akku-Ladestand (%)",energy_tariff_sensor:"Tarif (z. B. \u20AC/kWh)",energy_invert:"Vorzeichen umkehren",energy_hint:"Verbraucher sind platzierte Ger\xE4te mit Leistungssensor (W) \u2013 der Sensor selbst oder einer vom selben Ger\xE4t.",tool_meter:"Z\xE4hler",hint_meter:"Auf die Stelle des Z\xE4hlers tippen",presence:"Anwesenheit",presence_hint:"Raumsensor je Person (z. B. ESPresense, Bermuda): sein Zustand nennt den Raum oder Bereich.",presence_sensor:"Raumsensor",no_persons:"In Home Assistant gibt es keine Personen."},pi={view:"3D",editor:"Editor",all_floors:"All floors",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",walls_auto:"Tall walls",walls_cut:"Cut",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",add_floor:"Add floor",floor_name:"Name",elevation:"Elevation (m)",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",default_floor:"Ground floor",new_floor:"Floor {n}",tool_select:"Select",tool_rect:"Rectangle",tool_polygon:"Free shape",undo:"Undo",redo:"Redo",fit:"Show all",room:"Room",rooms:"Rooms",room_name:"Name",area:"Area",no_area:"No area",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",delete_point:"Delete corner",duplicate:"Duplicate",delete:"Delete",new_room:"Room {n}",settings:"Settings",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 Del deletes \xB7 Ctrl+Z",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_empty:"Add a floor first.",area_m2:"{a} m\xB2",overlap_warning:"Rooms overlap \u2013 walls there are incomplete.",read_only:"Only administrators can edit the floor plan.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"Floorplan 3D",card_description:"Your home in 3D (neon).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} fps (slowest frame {ms} ms)",stats_idle:"At rest (0 fps)",stats_low:"tablet level, pixel ratio {r}",stats_full:"full level, pixel ratio {r}",floors_apart:"Apart",floors_stacked:"Stacked",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",devices_none_area:"Link the room to an area and its devices appear here.",devices_none:"The area has no suitable devices.",devices_place_all:"Place all automatically",devices_place:"Place",devices_remove:"Remove",devices_hint:"Placed devices appear in 3D. Drag them in the plan to move them.",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",panel_all_off:"All off",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"The area has no controllable devices.",close:"Close",brightness:"Brightness",color_temp:"Colour temperature",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details",tool_door:"Door",tool_window:"Window",tool_garage:"Garage door",device:"Device",lamp_mount:"Lamp",lamp_ceiling:"Ceiling light",lamp_floor:"Floor lamp",lamp_table:"Table lamp",lamp_wall:"Wall light",marker_height:"Marker height (m)",height_auto:"Automatic height",device_centre:"To room centre",lights_spread:"Spread ceiling lights evenly",devices_search:"Search devices \u2026",devices_more:"+{n} more",devices_less:"less",panel_more:"Show more ({n})",panel_less:"Show less",gaps_close:"Close gaps",gaps_hint:"Join rooms up to 60 cm apart at one shared wall; the gap becomes the interior wall thickness.",gaps_none:"No gaps between rooms found.",gaps_closed:"{n} places closed.",gaps_closed_wall:"{n} places closed, interior wall now {t} m.",fps:"FPS",fps_title:"Performance display (frames per second)",hint_garage:"Tap a wall to add a garage door",opening_garage:"Garage door",garage_hint:"The door follows a garage cover (position or open/closed) or a garage door contact of the room's area.",door_hint:"With a door contact the leaf swings open; without a sensor it stands half open.",hint_door:"Tap a wall to add a door",hint_window:"Tap a wall to add a window",opening_door:"Door",opening_window:"Window",opening_type:"Type",opening_position:"Centre from corner (m)",sill:"Sill height (m)",opening_height:"Height (m)",hinge:"Hinge (seen from the room)",hinge_left:"Left",hinge_right:"Right",cover_entity:"Blind",contact_entity:"Contact",tilt_entity:"Tilt sensor",entity_auto:"Automatic ({name})",entity_auto_none:"Automatic (none found)",entity_none:"None",opening_hint:"Terrace door: a window with sill 0. Automatic uses the blinds and contacts of the room's area.",furniture:"Furniture",furniture_add:"Add furniture",furniture_type:"Item",rotation:"Rotation (\xB0)",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Height (m)",furn_sofa:"Sofa",furn_armchair:"Armchair",furn_table:"Table",furn_chair:"Chair",furn_bed:"Bed",furn_nightstand:"Nightstand",furn_wardrobe:"Wardrobe",furn_shelf:"Shelf",furn_kitchen:"Kitchen unit",furn_fridge:"Fridge",furn_stove:"Stove",furn_sink:"Sink",furn_bathtub:"Bathtub",furn_shower:"Shower",furn_wc:"WC",furn_washbasin:"Washbasin",furn_desk:"Desk",furn_tv_board:"TV board",furn_plant:"Plant",furn_rug:"Rug",furn_stairs:"Stairs",stairs_hint:"The stair rises towards the back (away from the marked front edge) and opens the ceiling of the floor above.",floor_lights:"{n} lights on",floor_open:"{n} open",floor_persons:"{n} people",energy_consumption:"Consumption",energy_grid_import:"Grid import",energy_grid_export:"Export",energy_solar:"Solar",energy_battery:"Battery",energy_tariff:"Tariff",energy:"Energy",energy_meter:"Meter",energy_meter_set:"Place meter",energy_meter_remove:"Remove meter",energy_meter_hint:"Tap the spot of the meter or house connection in the plan.",energy_grid:"Grid (W, + = import)",energy_solar_sensor:"Solar production (W)",energy_battery_sensor:"Battery power (W, + = discharging)",energy_battery_soc:"Battery charge (%)",energy_tariff_sensor:"Tariff (e.g. \u20AC/kWh)",energy_invert:"Invert sign",energy_hint:"Consumers are placed devices with a power sensor (W) \u2013 the sensor itself or one of the same device.",tool_meter:"Meter",hint_meter:"Tap the spot of the meter",presence:"Presence",presence_hint:"Room sensor per person (e.g. ESPresense, Bermuda): its state names the room or area.",presence_sensor:"Room sensor",no_persons:"There are no people in Home Assistant."};function A(r,t,e={}){let i=((r?.language??navigator.language).startsWith("de")?dn:pi)[t]??dn[t]??t;for(let[s,o]of Object.entries(e))i=i.replace(`{${s}}`,String(o));return i}function R(r,t,e=2){return t.toLocaleString(r?.language??void 0,{maximumFractionDigits:e})}var cn={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function pt(r){return cn[r]}function pn(r){return`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${cn[r]}"/></svg>`}var W=H`
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
`,ht=H`
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
`;var hn=new Set(["vertex","room","device","opening","furniture"]),un=100,oe=10,k=r=>Math.round(r*1e3)/1e3,re=class extends P{static properties={hass:{attribute:!1},building:{attribute:!1},narrow:{type:Boolean},_doc:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_vertex:{state:!0},_openingId:{state:!0},_furnitureId:{state:!0},_deviceId:{state:!0},_deviceQuery:{state:!0},_expanded:{state:!0},_notice:{state:!0},_tool:{state:!0},_draft:{state:!0},_cursor:{state:!0},_guides:{state:!0},_view:{state:!0},_size:{state:!0},_images:{state:!0},_canUndo:{state:!0},_canRedo:{state:!0}};past=[];future=[];drag=null;pointers=new Map;pinch=null;fitted=!1;resizeObserver;loadingImages=new Set;constructor(){super(),this.narrow=!1,this._floorId=null,this._roomId=null,this._vertex=null,this._openingId=null,this._furnitureId=null,this._deviceId=null,this._deviceQuery="",this._expanded=new Set,this._notice=null,this._tool="select",this._draft=[],this._cursor=null,this._guides={},this._view={scale:50,ox:40,oy:40},this._size={w:800,h:600},this._images={},this._canUndo=!1,this._canRedo=!1}t(t,e){return A(this.hass,t,e)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.resizeObserver?.disconnect()}willUpdate(t){t.has("building")&&this.building!==this._doc&&(this._doc=this.building,this._doc.floors.some(e=>e.id===this._floorId)||(this._floorId=this._doc.floors[0]?.id??null),this.floor?.rooms.some(e=>e.id===this._roomId)||(this._roomId=null))}firstUpdated(){let t=this.renderRoot.querySelector(".fp3d-canvas-wrap");this.resizeObserver=new ResizeObserver(()=>{this._size={w:t.clientWidth,h:t.clientHeight},!this.fitted&&this._size.w>0&&(this.fitted=!0,this.fit())}),this.resizeObserver.observe(t)}updated(){let t=this.floor?.background;t&&!this._images[t.image_id]&&!this.loadingImages.has(t.image_id)&&this.loadImage(t.image_id)}get floor(){return this._doc?.floors.find(t=>t.id===this._floorId)}get room(){return this.floor?.rooms.find(t=>t.id===this._roomId)}get isAdmin(){return this.hass?.user?.is_admin??!0}setDoc(t,e=this._doc){e&&(this.past.push(JSON.stringify(e)),this.past.length>un&&this.past.shift(),this.future=[]),this._doc=t,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}change(t,e=this._doc,n=!0){let i=structuredClone(e),s=i.floors.find(o=>o.id===this._floorId);!s&&this._floorId||(t(i,s),this.setDoc(i,n?e:null))}undo(){let t=this.past.pop();t&&(this.future.push(JSON.stringify(this._doc)),this.restore(JSON.parse(t)))}redo(){let t=this.future.pop();t&&(this.past.push(JSON.stringify(this._doc)),this.restore(JSON.parse(t)))}restore(t){this._doc=t,t.floors.some(e=>e.id===this._floorId)||(this._floorId=t.floors[0]?.id??null),this.floor?.rooms.some(e=>e.id===this._roomId)||(this._roomId=null),this._vertex=null,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}toScreen(t){let{scale:e,ox:n,oy:i}=this._view;return[t[0]*e+n,t[1]*e+i]}toWorld(t,e){let{scale:n,ox:i,oy:s}=this._view;return[(t-i)/n,(e-s)/n]}localPoint(t){let e=this.renderRoot.querySelector("svg").getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}fit(){let t=this.floor?.rooms.flatMap(a=>a.points)??[],e=t.length?lt(t):{x0:0,z0:0,x1:10,z1:8},n=1.5,i=e.x1-e.x0+2*n,s=e.z1-e.z0+2*n,o=Math.max(8,Math.min(400,Math.min(this._size.w/i,this._size.h/s)));this._view={scale:o,ox:this._size.w/2-(e.x0+e.x1)/2*o,oy:this._size.h/2-(e.z0+e.z1)/2*o}}zoomAt(t,e,n){let{scale:i,ox:s,oy:o}=this._view,a=Math.max(8,Math.min(600,i*t)),l=a/i;this._view={scale:a,ox:e-(e-s)*l,oy:n-(n-o)*l}}snap(t,e,n=!1){if(this._guides={},n)return t;let i=oe/this._view.scale,s=this.floor?.rooms??[],o=[];for(let c of s)c.points.forEach((g,m)=>{e&&c.id===e.roomId&&(e.index===void 0||e.index===m)||o.push(g)});let a=null,l=i;for(let c of o){let g=Math.hypot(c[0]-t[0],c[1]-t[1]);g<l&&(l=g,a=c)}if(a)return this._guides={point:a},[a[0],a[1]];for(let c of s)if(!(e&&c.id===e.roomId))for(let g=0;g<c.points.length;g++){let m=c.points[g],y=c.points[(g+1)%c.points.length],b=y[0]-m[0],w=y[1]-m[1],M=b*b+w*w;if(M<1e-9)continue;let x=((t[0]-m[0])*b+(t[1]-m[1])*w)/M;if(x<=0||x>=1)continue;let $=[m[0]+x*b,m[1]+x*w],I=Math.hypot($[0]-t[0],$[1]-t[1]),T=this._doc.settings.grid;Math.abs(w)<1e-9&&($[0]=Math.min(Math.max(Math.round($[0]/T)*T,Math.min(m[0],y[0])),Math.max(m[0],y[0]))),Math.abs(b)<1e-9&&($[1]=Math.min(Math.max(Math.round($[1]/T)*T,Math.min(m[1],y[1])),Math.max(m[1],y[1]))),I<l&&(l=I,a=$)}if(a)return this._guides={point:a},[k(a[0]),k(a[1])];let d=this._doc.settings.grid,h=[k(Math.round(t[0]/d)*d),k(Math.round(t[1]/d)*d)],f=i,u=i,p={};for(let c of o)Math.abs(c[0]-t[0])<f&&(f=Math.abs(c[0]-t[0]),h[0]=c[0],p.x=c[0]),Math.abs(c[1]-t[1])<u&&(u=Math.abs(c[1]-t[1]),h[1]=c[1],p.z=c[1]);return this._guides=p,h}onPointerDown(t){t.currentTarget.setPointerCapture(t.pointerId);let n=this.localPoint(t);if(this.pointers.set(t.pointerId,n),this.pointers.size===2){this.drag&&hn.has(this.drag.kind)&&"moved"in this.drag&&this.drag.moved&&"base"in this.drag&&this.restoreLive(this.drag.base),this.drag=null,this.pinch=this.pinchState();return}if(this.pointers.size>2)return;if(t.button===1||t.button===2||!this.floor){this.drag={kind:"pan",last:n};return}let i=this.toWorld(...n),s=t.target;if(this._tool==="rect"){let u=this.snap(i,void 0,t.altKey);this.drag={kind:"rect",start:u,end:u};return}if(this._tool==="polygon"){this.drag={kind:"tap",startScreen:n,last:n,panning:!1};return}if(this._tool==="door"||this._tool==="window"||this._tool==="garage"){this.placeOpening(this._tool,n)||(this.drag={kind:"pan",last:n});return}if(this._tool==="meter"){if(this.isAdmin&&this._floorId){let u=this._doc.settings.grid,[p,c]=i.map(g=>k(Math.round(g/u)*u));this.setEnergy({meter:{floor_id:this._floorId,x:p,z:c}})}this._tool="select";return}let o=s.closest("[data-device]");if(o&&this.isAdmin){this.drag={kind:"device",entityId:o.getAttribute("data-device"),start:i,startScreen:n,base:this._doc,moved:!1};return}let a=s.closest("[data-opening]");if(a){let u=a.getAttribute("data-opening");this.selectItem("opening",u),this.drag=this.isAdmin?{kind:"opening",id:u,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let l=s.closest("[data-furniture]");if(l&&!s.closest("[data-vertex], [data-mid]")){let u=l.getAttribute("data-furniture");this.selectItem("furniture",u),this.drag=this.isAdmin?{kind:"furniture",id:u,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let d=s.closest("[data-vertex]"),h=s.closest("[data-mid]");if(d&&this.room&&this.isAdmin){this._vertex=Number(d.getAttribute("data-vertex")),this.drag={kind:"vertex",roomId:this.room.id,index:this._vertex,base:this._doc,moved:!1};return}if(h&&this.room&&this.isAdmin){let u=Number(h.getAttribute("data-mid")),p=this.room.points,c=p[u],g=p[(u+1)%p.length],m=[k((c[0]+g[0])/2),k((c[1]+g[1])/2)],y=this._doc,b=this.room.id;this.change((w,M)=>{M.rooms.find($=>$.id===b).points.splice(u+1,0,m);let x=Math.hypot(m[0]-c[0],m[1]-c[1]);for(let $ of M.openings)$.room_id===b&&($.edge>u?$.edge+=1:$.edge===u&&$.offset>x&&($.edge=u+1,$.offset=k($.offset-x)))},y,!1),this._vertex=u+1,this.drag={kind:"vertex",roomId:b,index:u+1,base:y,moved:!0};return}let f=s.closest("[data-room]")?.getAttribute("data-room")??this.roomAt(i);if(f){f!==this._roomId&&(this._vertex=null),this.selectItem("room",f),this.drag=this.isAdmin?{kind:"room",roomId:f,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}this.selectItem("room",null),this.drag={kind:"pan",last:n}}onPointerMove(t){let e=this.localPoint(t);if(this.pointers.has(t.pointerId)&&this.pointers.set(t.pointerId,e),this.pinch){let s=this.pinchState();s&&(this.zoomAt(s.dist/Math.max(1,this.pinch.dist),...s.mid),this._view={...this._view,ox:this._view.ox+s.mid[0]-this.pinch.mid[0],oy:this._view.oy+s.mid[1]-this.pinch.mid[1]},this.pinch=s);return}let n=this.toWorld(...e),i=this.drag;if(!i){this._tool!=="select"&&this.floor&&(this._cursor=this.snap(n,void 0,t.altKey));return}switch(i.kind){case"pan":this._view={...this._view,ox:this._view.ox+e[0]-i.last[0],oy:this._view.oy+e[1]-i.last[1]},i.last=e;break;case"tap":(i.panning||Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])>6)&&(i.panning=!0,this._view={...this._view,ox:this._view.ox+e[0]-i.last[0],oy:this._view.oy+e[1]-i.last[1]}),i.last=e;break;case"rect":i.end=this.snap(n,void 0,t.altKey),this.requestUpdate();break;case"vertex":{let s=this.snap(n,{roomId:i.roomId,index:i.index},t.altKey);i.moved=!0,this.change((o,a)=>{a.rooms.find(l=>l.id===i.roomId).points[i.index]=s},i.base,!1);break}case"room":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.base.floors.find(d=>d.id===this._floorId)?.rooms.find(d=>d.id===i.roomId);if(!s)return;let o=this.roomDelta(s,[n[0]-i.start[0],n[1]-i.start[1]],t.altKey),a=i.base.floors.find(d=>d.id===this._floorId),l=new Set(a.placements.filter(d=>V([d.x,d.z],s.points)).map(d=>d.entity_id));this.change((d,h)=>{let f=h.rooms.find(u=>u.id===i.roomId);f.points=s.points.map(([u,p])=>[k(u+o[0]),k(p+o[1])]),h.placements=a.placements.map(u=>l.has(u.entity_id)?{...u,x:k(u.x+o[0]),z:k(u.z+o[1])}:u)},i.base,!1);break}case"opening":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.base.floors.find(d=>d.id===this._floorId),o=s?.openings.find(d=>d.id===i.id),a=s?.rooms.find(d=>d.id===o?.room_id);if(!o||!a)return;let l=this.offsetOnEdge(a,o.edge,n,o.width,t.altKey);this.change((d,h)=>Object.assign(h.openings.find(f=>f.id===i.id),{offset:l}),i.base,!1);break}case"furniture":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.base.floors.find(d=>d.id===this._floorId)?.furniture.find(d=>d.id===i.id);if(!s)return;let o=t.altKey?.01:this._doc.settings.grid,a=k(Math.round((s.x+n[0]-i.start[0])/o)*o),l=k(Math.round((s.z+n[1]-i.start[1])/o)*o);this.change((d,h)=>Object.assign(h.furniture.find(f=>f.id===i.id),{x:a,z:l}),i.base,!1);break}case"device":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.base.floors.find(d=>d.id===this._floorId)?.placements.find(d=>d.entity_id===i.entityId);if(!s)return;let o=t.altKey?.01:this._doc.settings.grid,a=k(Math.round((s.x+n[0]-i.start[0])/o)*o),l=k(Math.round((s.z+n[1]-i.start[1])/o)*o);this.change((d,h)=>Object.assign(h.placements.find(f=>f.entity_id===i.entityId),{x:a,z:l}),i.base,!1);break}}}onPointerUp(t){if(this.pointers.delete(t.pointerId),this.pinch){this.pointers.size<2&&(this.pinch=null);return}let e=this.drag;if(this.drag=null,!e||t.type==="pointercancel"){e&&hn.has(e.kind)&&"moved"in e&&e.moved&&"base"in e&&this.restoreLive(e.base);return}let n=this.localPoint(t);switch(e.kind){case"rect":{let[i,s]=e.start,[o,a]=e.end;if(Math.abs(o-i)>=.2&&Math.abs(a-s)>=.2){let l=[Math.min(i,o),Math.min(s,a)],d=[Math.max(i,o),Math.max(s,a)];this.addRoom([l,[d[0],l[1]],d,[l[0],d[1]]])}this._guides={};break}case"tap":e.panning||this.addDraftPoint(this.snap(this.toWorld(...n),void 0,t.altKey),n);break;case"opening":case"furniture":e.moved&&this.pushHistory(e.base);break;case"device":e.moved?this.pushHistory(e.base):this.selectItem("device",e.entityId);break;case"vertex":case"room":e.moved&&this.pushHistory(e.base),this._guides={};break;default:break}}onWheel(t){t.preventDefault();let[e,n]=this.localPoint(t);this.zoomAt(Math.exp(-t.deltaY*(t.deltaMode===1?.05:.0015)),e,n)}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e[0]-n[0],e[1]-n[1]),mid:[(e[0]+n[0])/2,(e[1]+n[1])/2]}}pushHistory(t){this.past.push(JSON.stringify(t)),this.past.length>un&&this.past.shift(),this.future=[],this._canUndo=!0,this._canRedo=!1}restoreLive(t){this._doc=t,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}roomDelta(t,e,n){if(n)return e;let i=this._doc.settings.grid,s=[Math.round(e[0]/i)*i,Math.round(e[1]/i)*i],a=oe/this._view.scale;this._guides={};for(let l of this.floor?.rooms??[])if(l.id!==t.id)for(let d of l.points)for(let h of t.points){let f=Math.hypot(h[0]+e[0]-d[0],h[1]+e[1]-d[1]);f<a&&(a=f,s=[d[0]-h[0],d[1]-h[1]],this._guides={point:d})}return s}roomAt(t){return(this.floor?.rooms??[]).filter(i=>V(t,i.points)).sort((i,s)=>at(i.points)-at(s.points))[0]?.id??null}addDraftPoint(t,e){let n=this._draft;if(n.length>=3){let[s,o]=this.toScreen(n[0]);if(Math.hypot(s-e[0],o-e[1])<14){this.closeDraft();return}}let i=n[n.length-1];i&&Math.hypot(i[0]-t[0],i[1]-t[1])<1e-6||(this._draft=[...n,t])}closeDraft(){this._draft.length>=3&&at(this._draft)>.05&&this.addRoom(this._draft),this._draft=[],this._cursor=null,this._guides={}}addRoom(t){if(!this.floor)return;let e=Q("room"),n=this.floor.rooms.length+1;this.change((i,s)=>s.rooms.push({id:e,name:this.t("new_room",{n}),area_id:null,points:t.map(([o,a])=>[k(o),k(a)]),floor_material:"wood"})),this._roomId=e,this._vertex=null,this._tool="select"}onKey=t=>{if(t.composedPath().some(i=>i instanceof HTMLInputElement||i instanceof HTMLSelectElement||i instanceof HTMLTextAreaElement)||!this.isConnected||!this.offsetParent)return;let n=t.ctrlKey||t.metaKey;n&&t.key.toLowerCase()==="z"?(t.preventDefault(),t.shiftKey?this.redo():this.undo()):n&&t.key.toLowerCase()==="y"?(t.preventDefault(),this.redo()):n&&t.key.toLowerCase()==="d"?(t.preventDefault(),this.duplicateRoom()):t.key==="Delete"||t.key==="Backspace"&&this._tool==="select"?this._deviceId?(this.removeDevice(this._deviceId),this._deviceId=null):this._openingId?this.deleteOpening():this._furnitureId?this.deleteFurniture():this._vertex!==null?this.deleteVertex(this._vertex):this.deleteRoom():t.key.toLowerCase()==="r"&&!n&&this._furnitureId?this.rotateFurniture(t.shiftKey?-90:90):t.key==="Backspace"&&this._tool==="polygon"?this._draft=this._draft.slice(0,-1):t.key==="Enter"&&this._tool==="polygon"?this.closeDraft():t.key==="Escape"&&(this._draft.length?this._draft=[]:this._tool!=="select"?this._tool="select":this.selectItem("room",null),this._cursor=null)};addFloor(){let t=this._doc.floors,e=t[t.length-1],n=Q("floor"),i=t.length===0?this.t("default_floor"):this.t("new_floor",{n:t.length}),s=e?k(e.elevation+e.height+.25):0,o=structuredClone(this._doc);o.floors.push(We(n,i,s)),this.setDoc(o),this._floorId=n,this._roomId=null}moveFloor(t){let e=this._doc.floors.findIndex(s=>s.id===this._floorId),n=e+t;if(e<0||n<0||n>=this._doc.floors.length)return;let i=structuredClone(this._doc);[i.floors[e],i.floors[n]]=[i.floors[n],i.floors[e]],this.setDoc(i)}deleteFloor(){let t=this.floor;if(!t||!confirm(this.t("delete_floor_confirm",{name:t.name})))return;let e=structuredClone(this._doc);e.floors=e.floors.filter(n=>n.id!==t.id),this.setDoc(e),this._floorId=e.floors[0]?.id??null,this._roomId=null}deleteRoom(){let t=this._roomId;!t||!this.isAdmin||(this.change((e,n)=>{let i=n.rooms.find(s=>s.id===t);n.rooms=n.rooms.filter(s=>s.id!==t),n.openings=n.openings.filter(s=>s.room_id!==t),i&&(n.placements=n.placements.filter(s=>!V([s.x,s.z],i.points)))}),this._roomId=null,this._vertex=null)}duplicateRoom(){let t=this.room;if(!t||!this.isAdmin)return;let e=Q("room");this.change((n,i)=>i.rooms.push({...structuredClone(t),id:e,points:t.points.map(([s,o])=>[k(s+.5),k(o+.5)])})),this._roomId=e}selectItem(t,e){if(this._notice=null,(t!=="room"||e!==this._roomId)&&(this._vertex=null),this._roomId=t==="room"?e:this._roomId,this._openingId=t==="opening"?e:null,this._furnitureId=t==="furniture"?e:null,this._deviceId=t==="device"?e:null,t==="device"&&e){let n=this.floor?.placements.find(i=>i.entity_id===e);this._roomId=(n&&this.roomAt([n.x,n.z]))??this._roomId}t==="opening"&&e&&(this._roomId=this.floor?.openings.find(n=>n.id===e)?.room_id??this._roomId)}get opening(){return this._openingId?this.floor?.openings.find(t=>t.id===this._openingId):void 0}get furnitureItem(){return this._furnitureId?this.floor?.furniture.find(t=>t.id===this._furnitureId):void 0}offsetOnEdge(t,e,n,i,s){let o=t.points[e],a=t.points[(e+1)%t.points.length],l=Math.hypot(a[0]-o[0],a[1]-o[1])||1,d=((n[0]-o[0])*(a[0]-o[0])+(n[1]-o[1])*(a[1]-o[1]))/l,h=s?.01:this._doc.settings.grid,f=Math.min(i,l)/2;return k(Math.min(l-f,Math.max(f,Math.round(d/h)*h)))}placeOpening(t,e){let n=this.floor;if(!n||!this.isAdmin)return!1;let i=null;for(let p of n.rooms)for(let c=0;c<p.points.length;c++){let[g,m]=this.toScreen(p.points[c]),[y,b]=this.toScreen(p.points[(c+1)%p.points.length]),w=(y-g)**2+(b-m)**2||1,M=Math.min(1,Math.max(0,((e[0]-g)*(y-g)+(e[1]-m)*(b-m))/w)),x=Math.hypot(e[0]-g-(y-g)*M,e[1]-m-(b-m)*M),$=x-(p.id===this._roomId?.5:0);x<oe*2.2&&(!i||$<i.d)&&(i={room:p,edge:c,d:$})}if(!i)return!1;let{room:s,edge:o}=i,a=s.points[o],l=s.points[(o+1)%s.points.length],d=Math.hypot(l[0]-a[0],l[1]-a[1]),h=se[t],f=k(Math.min(h.width,Math.max(.3,d-.1))),u={id:Q("opening"),room_id:s.id,edge:o,offset:this.offsetOnEdge(s,o,this.toWorld(...e),f,!1),width:f,type:t,sill:h.sill,height:h.height,hinge:"left",cover:null,contact:null,tilt:null};return this.change((p,c)=>c.openings.push(u)),this._tool="select",this.selectItem("opening",u.id),!0}updateOpening(t){let e=this._openingId;this.change((n,i)=>Object.assign(i.openings.find(s=>s.id===e),t))}deleteOpening(){let t=this._openingId;!t||!this.isAdmin||(this.change((e,n)=>n.openings=n.openings.filter(i=>i.id!==t)),this._openingId=null)}addFurniture(t){let e=this.floor;if(!e||!this.isAdmin)return;let[n,i,s]=Ue[t],o=this._doc.floors.filter(u=>u.elevation>e.elevation).sort((u,p)=>u.elevation-p.elevation)[0],a=t==="stairs"?k(o?o.elevation-e.elevation:e.height+.25):s,l=this.room,[d,h]=l?j(l.points):this.toWorld(this._size.w/2,this._size.h/2),f={id:Q("furniture"),type:t,x:k(d),z:k(h),rotation:0,w:n,d:i,h:a,variant:null};this.change((u,p)=>p.furniture.push(f)),this.selectItem("furniture",f.id)}updateFurniture(t){let e=this._furnitureId;this.change((n,i)=>Object.assign(i.furniture.find(s=>s.id===e),t))}rotateFurniture(t){let e=this.furnitureItem;!e||!this.isAdmin||this.updateFurniture({rotation:((e.rotation+t)%360+360)%360})}deleteFurniture(){let t=this._furnitureId;!t||!this.isAdmin||(this.change((e,n)=>n.furniture=n.furniture.filter(i=>i.id!==t)),this._furnitureId=null)}duplicateFurniture(){let t=this.furnitureItem;if(!t||!this.isAdmin)return;let e={...structuredClone(t),id:Q("furniture"),x:k(t.x+.3),z:k(t.z+.3)};this.change((n,i)=>i.furniture.push(e)),this.selectItem("furniture",e.id)}placeDevices(t){let e=this.room;if(!e||!t.length||!this.isAdmin)return;let n=new Set(t);this.change((i,s)=>{for(let o of i.floors)o.placements=o.placements.filter(a=>!n.has(a.entity_id));s.placements.push(...tn(e,t,s.placements.map(o=>[o.x,o.z])))})}get device(){return this._deviceId?this.floor?.placements.find(t=>t.entity_id===this._deviceId):void 0}updateDevice(t){let e=this._deviceId;this.change((n,i)=>Object.assign(i.placements.find(s=>s.entity_id===e),t))}centreDevice(){let t=this.device,e=t?this.roomAt([t.x,t.z]):null,n=this.floor?.rooms.find(o=>o.id===e);if(!t||!n)return;let[i,s]=j(n.points);this.updateDevice({x:k(i),z:k(s)})}spreadCeilingLights(t){let e=this.floor;if(!e)return;let n=e.placements.filter(f=>E(f.entity_id)==="light"&&(f.mount??"ceiling")==="ceiling"&&V([f.x,f.z],t.points));if(n.length<2)return;let i=lt(t.points),s=i.x1-i.x0,o=i.z1-i.z0,a=Math.max(1,Math.round(Math.sqrt(n.length*s/Math.max(.1,o)))),l=Math.ceil(n.length/a),d=n.map((f,u)=>{let p=Math.floor(u/a),c=p===l-1?n.length-a*(l-1):a,g=u-p*a;return[k(i.x0+s/c*(g+.5)),k(i.z0+o/l*(p+.5))]}),h=n.map(f=>f.entity_id);this.change((f,u)=>{h.forEach((p,c)=>Object.assign(u.placements.find(g=>g.entity_id===p),{x:d[c][0],z:d[c][1]}))})}closeFloorGaps(){let t=this.floor;if(!t||!this.isAdmin)return;let{rooms:e,gaps:n}=nn(t.rooms);if(!n.length){this._notice=this.t("gaps_none");return}let i=sn(n);this.change((s,o)=>{o.rooms=e,i&&(s.settings.wall_interior=i)}),this._notice=i?this.t("gaps_closed_wall",{n:n.length,t:R(this.hass,i,2)}):this.t("gaps_closed",{n:n.length})}removeDevice(t){this.change(e=>{for(let n of e.floors)n.placements=n.placements.filter(i=>i.entity_id!==t)})}deleteVertex(t){let e=this.room;if(!e||e.points.length<=3)return;let n=e.points.length,i=(t-1+n)%n;this.change((s,o)=>{o.rooms.find(a=>a.id===e.id).points.splice(t,1),o.openings=o.openings.filter(a=>a.room_id!==e.id||a.edge!==t&&a.edge!==i).map(a=>a.room_id===e.id&&a.edge>t?{...a,edge:a.edge-1}:a)}),this._vertex=null}updateFloor(t){this.change((e,n)=>Object.assign(n,t))}updateRoom(t){let e=this._roomId;this.change((n,i)=>Object.assign(i.rooms.find(s=>s.id===e),t))}setArea(t){let e=this.room;if(!e)return;let n=t?this.hass?.areas?.[t]:void 0,i=!e.name||/^(Raum|Room) \d+$/.test(e.name)||Object.values(this.hass?.areas??{}).some(s=>s.name===e.name);this.updateRoom({area_id:t||null,...n&&i?{name:n.name}:{}})}setRect(t,e){let n=this.room;if(!n||!Number.isFinite(e))return;let i=lt(n.points),{x0:s,z0:o,x1:a,z1:l}=i;t==="x"&&([s,a]=[e,e+(a-s)]),t==="z"&&([o,l]=[e,e+(l-o)]),t==="w"&&e>.05&&(a=s+e),t==="d"&&e>.05&&(l=o+e),this.updateRoom({points:[[k(s),k(o)],[k(a),k(o)],[k(a),k(l)],[k(s),k(l)]]})}setPoint(t,e,n){let i=this.room;if(!i||!Number.isFinite(n))return;let s=i.points.map(o=>[...o]);s[t][e]=k(n),this.updateRoom({points:s})}async loadImage(t){this.loadingImages.add(t);try{let e=await Le(this.hass,t),n=new Image;n.src=e,await n.decode(),this._images={...this._images,[t]:{url:e,aspect:n.naturalHeight/n.naturalWidth}}}catch{}}async uploadBackground(t){let e=t.target,n=e.files?.[0];if(e.value="",!n)return;let i=await createImageBitmap(n),s=Math.min(1,2048/Math.max(i.width,i.height)),o=document.createElement("canvas");o.width=Math.round(i.width*s),o.height=Math.round(i.height*s),o.getContext("2d").drawImage(i,0,0,o.width,o.height);let a=o.toDataURL("image/jpeg",.85),l=Q("img");await Be(this.hass,l,a),this._images={...this._images,[l]:{url:a,aspect:o.height/o.width}};let d=this.floor?.rooms.length?lt(this.floor.rooms.flatMap(h=>h.points)):null;this.updateFloor({background:{image_id:l,x:d?d.x0:0,z:d?d.z0:0,width:d?Math.max(4,k(d.x1-d.x0)):12,opacity:.5}})}render(){let t=this.floor,e=t?St(t.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior}):null;return _`
      <div class="fp3d-editor ${this.narrow?"fp3d-narrow":""}">
        <div class="fp3d-main">
          <div class="fp3d-toolbar">
            <div class="fp3d-seg" role="group" aria-label=${this.t("tool_select")}>
              ${["select","rect","polygon","door","window","garage"].map(n=>_`<button
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
            ${e?.warnings.length?_`<span class="fp3d-warn">${this.t("overlap_warning")}</span>`:v}
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
              ${this.renderBackground(t)} ${this.renderGrid()} ${this.renderGhost()} ${e?this.renderWalls(e.walls):v}
              ${t?this.renderRooms(t):v} ${t?this.renderFurniture(t):v}
              ${t&&e?this.renderOpenings(t,e.walls):v} ${t?this.renderMeter(t):v}
              ${t&&this._tool==="select"?this.renderDevices(t):v}
              ${this.room&&this.isAdmin&&this._tool==="select"&&!this._openingId&&!this._furnitureId?this.renderHandles(this.room):v}
              ${this.renderDraft()} ${this.renderGuides()}
            </svg>
            <p class="fp3d-hint">${t?this.t(`hint_${this._tool}`):this.t("hint_empty")}</p>
          </div>
        </div>
        <aside class="fp3d-side">${this.renderSide(t)}</aside>
      </div>
    `}renderBackground(t){let e=t?.background,n=e?this._images[e.image_id]:void 0;if(!e||!n)return v;let[i,s]=this.toScreen([e.x,e.z]),o=e.width*this._view.scale;return S`<image href=${n.url} x=${i} y=${s} width=${o} height=${o*n.aspect} opacity=${e.opacity} preserveAspectRatio="none" pointer-events="none" />`}renderGrid(){let{scale:t}=this._view,{w:e,h:n}=this._size,i=t>=90?.1:t>=30?.5:1,s=t>=20?1:5,[o,a]=this.toWorld(0,0),[l,d]=this.toWorld(e,n),h=[],f=(c,g)=>{for(let m=Math.ceil(o/c)*c;m<=l;m+=c){let y=this.toScreen([m,0])[0];h.push(S`<line class=${g} x1=${y} y1="0" x2=${y} y2=${n} />`)}for(let m=Math.ceil(a/c)*c;m<=d;m+=c){let y=this.toScreen([0,m])[1];h.push(S`<line class=${g} x1="0" y1=${y} x2=${e} y2=${y} />`)}};i<s&&f(i,"fp3d-grid-minor"),f(s,"fp3d-grid-major");let[u,p]=this.toScreen([0,0]);return h.push(S`<circle class="fp3d-origin" cx=${u} cy=${p} r="3" />`),S`<g pointer-events="none">${h}</g>`}renderGhost(){let t=this._doc?.floors.findIndex(n=>n.id===this._floorId)??-1,e=t>0?this._doc.floors[t-1]:void 0;return e?S`<g pointer-events="none">${e.rooms.map(n=>S`<polygon class="fp3d-ghost" points=${n.points.map(i=>this.toScreen(i).join(",")).join(" ")} />`)}</g>`:v}renderWalls(t){return S`<g pointer-events="none">${t.map(e=>S`<polygon class=${e.exterior?"fp3d-wall fp3d-wall-ext":"fp3d-wall"} points=${e.footprint.map(n=>this.toScreen(n).join(",")).join(" ")} />`)}</g>`}renderRooms(t){return S`
      <g>${t.rooms.map(e=>{let n=e.points.map(i=>this.toScreen(i).join(",")).join(" ");return S`<polygon data-room=${e.id} class=${e.id===this._roomId?"fp3d-room fp3d-room-sel":"fp3d-room"} points=${n} />`})}</g>
      <g pointer-events="none">${t.rooms.map(e=>{let[n,i]=this.toScreen(j(e.points));return S`<text class="fp3d-room-name" x=${n} y=${i-2}>${e.name}</text>
          <text class="fp3d-room-area" x=${n} y=${i+14}>${this.t("area_m2",{a:R(this.hass,at(e.points),1)})}</text>`})}</g>
    `}renderMeter(t){let e=this._doc.energy?.meter;if(!e||e.floor_id!==t.id)return v;let[n,i]=this.toScreen([e.x,e.z]);return S`<g class="fp3d-meter" transform="translate(${n} ${i})" pointer-events="none">
      <rect x="-11" y="-11" width="22" height="22" rx="5" />
      <path d="M1.5 -7 L-4 1 H0 L-1.5 7 L4 -1 H0 Z" />
    </g>`}renderFurniture(t){return S`<g>${t.furniture.map(e=>{let n=Ge(e).map(h=>this.toScreen(h)),i=e.id===this._furnitureId,[s,o]=[n[2],n[3]],[a,l]=this.toScreen([e.x,e.z]),d=Math.min(e.w,e.d)*this._view.scale>34;return S`<g data-furniture=${e.id} class=${i?"fp3d-furn fp3d-furn-sel":"fp3d-furn"}>
        <polygon points=${n.map(h=>h.join(",")).join(" ")} />
        <line class="fp3d-furn-front" x1=${s[0]} y1=${s[1]} x2=${o[0]} y2=${o[1]} />
        ${d?S`<text x=${a} y=${l+4}>${this.t(`furn_${e.type}`)}</text>`:v}
      </g>`})}</g>`}renderOpenings(t,e){return S`<g>${t.openings.map(n=>{let i=t.rooms.find(b=>b.id===n.room_id);if(!i||n.edge>=i.points.length)return v;let s=ln(e,i,n.edge,n.offset),o=Vt(i,n.edge,n.offset-n.width/2),a=Vt(i,n.edge,n.offset+n.width/2),l=(a[0]-o[0])/(n.width||1),d=(a[1]-o[1])/(n.width||1),h=B(i.points)>=0?1:-1,f=[-d*h,l*h],u=[.06,.06];s&&(u=s.wall.roomLeft===i.id?[s.wall.left,s.wall.right]:[s.wall.right,s.wall.left]);let p=(b,w)=>this.toScreen([b[0]+f[0]*w,b[1]+f[1]*w]),c=[p(o,u[0]+.01),p(a,u[0]+.01),p(a,-u[1]-.01),p(o,-u[1]-.01)],g=n.id===this._openingId,m=`fp3d-open fp3d-open-${n.type}${g?" fp3d-open-sel":""}`,y;if(n.type==="garage"){let b=p(o,u[0]-.04),w=p(a,u[0]-.04),M=p(o,u[0]+Math.min(2,n.height)),x=p(a,u[0]+Math.min(2,n.height));y=S`<line x1=${b[0]} y1=${b[1]} x2=${w[0]} y2=${w[1]} />
          <path class="fp3d-open-track" d="M${b[0]} ${b[1]}L${M[0]} ${M[1]}M${w[0]} ${w[1]}L${x[0]} ${x[1]}" />`}else if(n.type==="door"){let b=n.hinge==="left",w=b?o:a,M=b?a:o,x=p(w,n.width),[$,I]=this.toScreen(w),[T,z]=this.toScreen(M),C=n.width*this._view.scale,O=(x[0]-$)*(z-I)-(x[1]-I)*(T-$);y=S`<path d="M${$} ${I}L${x[0]} ${x[1]}A${C} ${C} 0 0 ${O>0?1:0} ${T} ${z}" />`}else{let b=(u[0]-u[1])/2,w=p(o,b+.035),M=p(a,b+.035),x=p(o,b-.035),$=p(a,b-.035);y=S`<line x1=${w[0]} y1=${w[1]} x2=${M[0]} y2=${M[1]} /><line x1=${x[0]} y1=${x[1]} x2=${$[0]} y2=${$[1]} />`}return S`<g data-opening=${n.id} class=${m}>
        <polygon class="fp3d-open-gap" points=${c.map(b=>b.join(",")).join(" ")} />
        ${y}
      </g>`})}</g>`}renderDevices(t){return S`<g>${t.placements.map(e=>{let n=E(e.entity_id);if(!n)return v;let[i,s]=this.toScreen([e.x,e.z]),a=`fp3d-device${this.hass?.states[e.entity_id]?.state==="on"?" fp3d-device-on":""}${e.entity_id===this._deviceId?" fp3d-device-sel":""}`;return S`<g data-device=${e.entity_id} class=${a} transform="translate(${i} ${s})">
        <title>${F(this.hass,e.entity_id)}</title>
        <circle r="18" class="fp3d-hit" /><circle r="12" />
        <path d=${pt(n)} transform="translate(-7.2 -7.2) scale(0.6)" />
      </g>`})}</g>`}renderHandles(t){let e=t.points,n=e.length,i=e.map((o,a)=>{let l=e[(a+1)%n],[d,h]=this.toScreen(o),[f,u]=this.toScreen(l),p=Math.hypot(l[0]-o[0],l[1]-o[1]),c=(d+f)/2,g=(h+u)/2,[m,y]=this.toScreen(j(e)),b=-(u-h),w=f-d,M=Math.hypot(b,w)||1;b/=M,w/=M,b*(c-m)+w*(g-y)<0&&(b=-b,w=-w);let x=Math.hypot(f-d,u-h);return S`
        ${x>50?S`<text class="fp3d-dim" x=${c+b*16} y=${g+w*16+4}>${R(this.hass,p,2)} m</text>`:v}
        ${x>36?S`<g data-mid=${a} class="fp3d-mid"><circle cx=${c} cy=${g} r="14" class="fp3d-hit" /><circle cx=${c} cy=${g} r="6" /><path d="M${c-3} ${g}h6M${c} ${g-3}v6" /></g>`:v}
      `}),s=e.map((o,a)=>{let[l,d]=this.toScreen(o);return S`<g data-vertex=${a} class=${a===this._vertex?"fp3d-vertex fp3d-vertex-sel":"fp3d-vertex"}><circle cx=${l} cy=${d} r="16" class="fp3d-hit" /><circle cx=${l} cy=${d} r="6" /></g>`});return S`<g>${i}${s}</g>`}renderDraft(){let t=this.drag;if(t?.kind==="rect"){let[n,i]=this.toScreen(t.start),[s,o]=this.toScreen(t.end),a=Math.abs(t.end[0]-t.start[0]),l=Math.abs(t.end[1]-t.start[1]);return S`<g pointer-events="none">
        <rect class="fp3d-draft" x=${Math.min(n,s)} y=${Math.min(i,o)} width=${Math.abs(s-n)} height=${Math.abs(o-i)} />
        <text class="fp3d-dim" x=${(n+s)/2} y=${Math.min(i,o)-8}>${R(this.hass,a,2)} × ${R(this.hass,l,2)} m</text>
      </g>`}if(this._tool!=="polygon")return v;let e=[...this._draft,...this._cursor?[this._cursor]:[]].map(n=>this.toScreen(n));return S`<g pointer-events="none">
      ${e.length>1?S`<polyline class="fp3d-draft" points=${e.map(n=>n.join(",")).join(" ")} />`:v}
      ${this._draft.map((n,i)=>{let[s,o]=this.toScreen(n);return S`<circle class=${i===0&&this._draft.length>=3?"fp3d-draft-pt fp3d-draft-first":"fp3d-draft-pt"} cx=${s} cy=${o} r=${i===0&&this._draft.length>=3?9:5} />`})}
      ${this._cursor?S`<circle class="fp3d-cursor" cx=${this.toScreen(this._cursor)[0]} cy=${this.toScreen(this._cursor)[1]} r="4" />`:v}
    </g>`}renderGuides(){let t=this._guides,{w:e,h:n}=this._size;return S`<g pointer-events="none">
      ${t.x!==void 0?S`<line class="fp3d-guide" x1=${this.toScreen([t.x,0])[0]} y1="0" x2=${this.toScreen([t.x,0])[0]} y2=${n} />`:v}
      ${t.z!==void 0?S`<line class="fp3d-guide" x1="0" y1=${this.toScreen([0,t.z])[1]} x2=${e} y2=${this.toScreen([0,t.z])[1]} />`:v}
      ${t.point?S`<circle class="fp3d-snap" cx=${this.toScreen(t.point)[0]} cy=${this.toScreen(t.point)[1]} r="9" />`:v}
    </g>`}num(t,e,n,i=.01,s){return _`<label class="fp3d-field"
      >${t}
      <input
        type="number"
        inputmode="decimal"
        step=${i}
        min=${s??v}
        .value=${String(k(e))}
        ?disabled=${!this.isAdmin}
        @change=${o=>{let a=parseFloat(o.target.value.replace(",","."));Number.isFinite(a)&&n(a)}}
    /></label>`}renderSide(t){let e=this._doc?.floors??[],n=this.room,i=this.isAdmin,s=Object.values(this.hass?.areas??{}).sort((o,a)=>o.name.localeCompare(a.name));return _`
      ${i?v:_`<p class="fp3d-note">${this.t("read_only")}</p>`}
      <section>
        <h3>${this.t("floors")}</h3>
        <div class="fp3d-floor-list">
          ${[...e].reverse().map(o=>_`<button
              class="fp3d-chip"
              aria-pressed=${o.id===this._floorId}
              @click=${()=>{this._floorId=o.id,this._roomId=null,this._vertex=null,this._draft=[],this.fit()}}
            >
              ${o.name}
            </button>`)}
          ${i?_`<button class="fp3d-btn" @click=${()=>this.addFloor()}>+ ${this.t("add_floor")}</button>`:v}
        </div>
        ${t?_`<div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${this.t("floor_name")}
                <input .value=${t.name} ?disabled=${!i} @change=${o=>this.updateFloor({name:o.target.value})}
              /></label>
              ${this.num(this.t("elevation"),t.elevation,o=>this.updateFloor({elevation:o}))}
              ${this.num(this.t("height"),t.height,o=>this.updateFloor({height:Math.max(1,o)}),.05,1)}
              ${i?_`<div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn" @click=${()=>this.moveFloor(1)}>${this.t("move_up")}</button>
                    <button class="fp3d-btn" @click=${()=>this.moveFloor(-1)}>${this.t("move_down")}</button>
                    <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFloor()}>${this.t("delete_floor")}</button>
                  </div>
                  <div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn" title=${this.t("gaps_hint")} ?disabled=${t.rooms.length<2} @click=${()=>this.closeFloorGaps()}>
                      ${this.t("gaps_close")}
                    </button>
                  </div>
                  ${this._notice?_`<p class="fp3d-sub fp3d-wide fp3d-notice">${this._notice}</p>`:v}`:v}
            </div>`:v}
      </section>
      ${this.opening?this.renderOpeningForm(this.opening):this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.device?this.renderDeviceForm(this.device):n?_`${this.renderRoomForm(n,s)} ${this.renderDeviceList(n)}`:t?this.renderRoomList(t):v}
      ${t&&i?this.renderFurnitureLibrary():v} ${i?this.renderEnergySettings():v}
      ${i?this.renderPresenceSettings():v}
      ${t&&i?this.renderBackgroundForm(t):v} ${i?this.renderSettings():v}
    `}renderRoomList(t){return t.rooms.length?_`<section>
      <h3>${this.t("rooms")}</h3>
      <div class="fp3d-room-list">
        ${t.rooms.map(e=>_`<button class="fp3d-row" @click=${()=>this.selectItem("room",e.id)}>
            <span>${e.name}</span><span class="fp3d-muted">${this.t("area_m2",{a:R(this.hass,at(e.points),1)})}</span>
          </button>`)}
      </div>
    </section>`:v}renderRoomForm(t,e){let n=this.isAdmin,i=Ke(t.points),s=lt(t.points);return _`<section>
      <h3>${this.t("room")}</h3>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("room_name")}
          <input .value=${t.name} ?disabled=${!n} @change=${o=>this.updateRoom({name:o.target.value})}
        /></label>
        <label class="fp3d-field fp3d-wide"
          >${this.t("area")}
          <select ?disabled=${!n} @change=${o=>this.setArea(o.target.value)}>
            <option value="" ?selected=${!t.area_id}>${this.t("no_area")}</option>
            ${e.map(o=>_`<option value=${o.area_id} ?selected=${o.area_id===t.area_id}>${o.name}</option>`)}
          </select></label
        >
        <label class="fp3d-field fp3d-wide"
          >${this.t("material")}
          <select ?disabled=${!n} @change=${o=>this.updateRoom({floor_material:o.target.value})}>
            ${Ne.map(o=>_`<option value=${o} ?selected=${o===t.floor_material}>${this.t(`mat_${o}`)}</option>`)}
          </select></label
        >
        ${i?_`${this.num(this.t("x"),s.x0,o=>this.setRect("x",o))} ${this.num(this.t("z"),s.z0,o=>this.setRect("z",o))}
            ${this.num(this.t("width"),s.x1-s.x0,o=>this.setRect("w",o),.01,.05)}
            ${this.num(this.t("depth"),s.z1-s.z0,o=>this.setRect("d",o),.01,.05)}`:v}
      </div>
      <details class="fp3d-points" ?open=${!i}>
        <summary>${this.t("points")} (${t.points.length})</summary>
        ${t.points.map((o,a)=>_`<div class="fp3d-point ${a===this._vertex?"fp3d-point-sel":""}">
            <span class="fp3d-muted">${a+1}</span>
            ${this.num(this.t("x"),o[0],l=>this.setPoint(a,0,l))} ${this.num(this.t("z"),o[1],l=>this.setPoint(a,1,l))}
            ${n?_`<button class="fp3d-btn" title=${this.t("delete_point")} ?disabled=${t.points.length<=3} @click=${()=>this.deleteVertex(a)}>
                  ×
                </button>`:v}
          </div>`)}
      </details>
      ${n?_`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.duplicateRoom()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoom()}>${this.t("delete")}</button>
          </div>`:v}
    </section>`}entityOptions(t){let e=n=>{let i=this.hass?.entities?.[n],s=i?.area_id??(i?.device_id?this.hass?.devices?.[i.device_id]?.area_id:null);return s?this.hass?.areas?.[s]?.name:void 0};return Object.keys(this.hass?.states??{}).filter(t).map(n=>({id:n,label:`${F(this.hass,n)}${e(n)?` \xB7 ${e(n)}`:""}`})).sort((n,i)=>n.label.localeCompare(i.label))}entitySelect(t,e,n,i,s){let o=n===void 0?null:n?this.t("entity_auto",{name:F(this.hass,n)}):this.t("entity_auto_none");return _`<label class="fp3d-field fp3d-wide"
      >${t}
      <select
        ?disabled=${!this.isAdmin}
        @change=${a=>{let l=a.target.value;s(l==="__auto"?null:l)}}
      >
        ${o!==null?_`<option value="__auto" ?selected=${e===null}>${o}</option>`:v}
        <option value="none" ?selected=${e==="none"||o===null&&e===null}>${this.t("entity_none")}</option>
        ${i.map(a=>_`<option value=${a.id} ?selected=${a.id===e}>${a.label}</option>`)}
      </select></label
    >`}renderOpeningForm(t){let e=this.isAdmin,n=t.type==="window",i=t.type==="garage",s=d=>{if(!this.hass)return null;let h=structuredClone(this._doc.floors);for(let f of h)for(let u of f.openings)u.id===t.id&&(u[d]=null);return Ot(this.hass,h).get(t.id)?.[d]??null},o=d=>this.hass?.states[d]?.attributes.device_class,a=this.entityOptions(d=>d.startsWith("cover.")),l=this.entityOptions(d=>d.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(o(d)??""));return _`<section>
      <h3>${this.t(`opening_${t.type}`)}</h3>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("opening_type")}
          <select
            ?disabled=${!e}
            @change=${d=>{let h=d.target.value,f=se[h];this.updateOpening({type:h,sill:f.sill,height:f.height,width:h==="garage"||t.type==="garage"?f.width:t.width})}}
          >
            ${["door","window","garage"].map(d=>_`<option value=${d} ?selected=${t.type===d}>${this.t(`opening_${d}`)}</option>`)}
          </select></label
        >
        ${this.num(this.t("width"),t.width,d=>this.updateOpening({width:Math.max(.3,d)}),.01,.3)}
        ${this.num(this.t("opening_position"),t.offset,d=>this.updateOpening({offset:Math.max(0,d)}),.01,0)}
        ${n?this.num(this.t("sill"),t.sill,d=>this.updateOpening({sill:Math.max(0,d)}),.01,0):v}
        ${this.num(this.t("opening_height"),t.height,d=>this.updateOpening({height:Math.max(.3,d)}),.01,.3)}
        ${i?v:_`<label class="fp3d-field fp3d-wide"
          >${this.t("hinge")}
          <select ?disabled=${!e} @change=${d=>this.updateOpening({hinge:d.target.value})}>
            <option value="left" ?selected=${t.hinge==="left"}>${this.t("hinge_left")}</option>
            <option value="right" ?selected=${t.hinge==="right"}>${this.t("hinge_right")}</option>
          </select></label
        >`}
        ${n||i?this.entitySelect(this.t("cover_entity"),t.cover,s("cover"),a,d=>this.updateOpening({cover:d})):v}
        ${this.entitySelect(this.t("contact_entity"),t.contact,s("contact"),l,d=>this.updateOpening({contact:d}))}
        ${n?this.entitySelect(this.t("tilt_entity"),t.tilt,void 0,l,d=>this.updateOpening({tilt:d==="none"?null:d})):v}
      </div>
      <p class="fp3d-sub">${this.t(n?"opening_hint":i?"garage_hint":"door_hint")}</p>
      ${e?_`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOpening()}>${this.t("delete")}</button></div>`:v}
    </section>`}renderFurnitureForm(t){let e=this.isAdmin;return _`<section>
      <h3>${this.t("furniture")}</h3>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("furniture_type")}
          <select ?disabled=${!e} @change=${n=>this.updateFurniture({type:n.target.value})}>
            ${ie.map(n=>_`<option value=${n} ?selected=${n===t.type}>${this.t(`furn_${n}`)}</option>`)}
          </select></label
        >
        ${this.num(this.t("x"),t.x,n=>this.updateFurniture({x:n}))} ${this.num(this.t("z"),t.z,n=>this.updateFurniture({z:n}))}
        ${this.num(this.t("width"),t.w,n=>this.updateFurniture({w:Math.max(.05,n)}),.01,.05)}
        ${this.num(this.t("depth"),t.d,n=>this.updateFurniture({d:Math.max(.05,n)}),.01,.05)}
        ${this.num(this.t("height_m"),t.h,n=>this.updateFurniture({h:Math.max(.005,n)}),.01,0)}
        ${this.num(this.t("rotation"),t.rotation,n=>this.updateFurniture({rotation:(n%360+360)%360}),1)}
      </div>
      ${t.type==="stairs"?_`<p class="fp3d-sub">${this.t("stairs_hint")}</p>`:v}
      ${e?_`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.rotateFurniture(-90)}>${this.t("rotate_left")}</button>
            <button class="fp3d-btn" @click=${()=>this.rotateFurniture(90)}>${this.t("rotate_right")}</button>
            <button class="fp3d-btn" @click=${()=>this.duplicateFurniture()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
          </div>`:v}
    </section>`}setEnergy(t){let e=structuredClone(this._doc);e.energy={...e.energy,...t},this.setDoc(e)}renderEnergySettings(){let t=this._doc.energy,e=(l,d)=>this.hass?.states[l]?.attributes[d],n=this.entityOptions(l=>l.startsWith("sensor.")&&e(l,"device_class")==="power"),i=this.entityOptions(l=>l.startsWith("sensor.")&&e(l,"device_class")==="battery"),s=this.entityOptions(l=>l.startsWith("sensor.")&&(e(l,"device_class")==="monetary"||/\/(kWh|MWh)$/.test(e(l,"unit_of_measurement")??""))),o=l=>d=>this.setEnergy({[l]:d==="none"?null:d}),a=t.meter?this._doc.floors.find(l=>l.id===t.meter.floor_id)?.name:null;return _`<details class="fp3d-section">
      <summary>${this.t("energy")}</summary>
      <div class="fp3d-form">
        <div class="fp3d-actions fp3d-wide">
          <button class="fp3d-btn ${this._tool==="meter"?"fp3d-primary":""}" ?disabled=${!this.floor} @click=${()=>this._tool="meter"}>
            ${this.t("energy_meter_set")}
          </button>
          ${t.meter?_`<button class="fp3d-btn fp3d-danger" @click=${()=>this.setEnergy({meter:null})}>${this.t("energy_meter_remove")}</button>`:v}
        </div>
        <p class="fp3d-sub fp3d-wide">
          ${t.meter?`${this.t("energy_meter")}: ${a??""} \xB7 ${R(this.hass,t.meter.x,2)} / ${R(this.hass,t.meter.z,2)} m`:this.t("energy_meter_hint")}
        </p>
        ${this.entitySelect(this.t("energy_grid"),t.grid,void 0,n,o("grid"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${t.grid_invert} @change=${l=>this.setEnergy({grid_invert:l.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_solar_sensor"),t.solar,void 0,n,o("solar"))}
        ${this.entitySelect(this.t("energy_battery_sensor"),t.battery,void 0,n,o("battery"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${t.battery_invert} @change=${l=>this.setEnergy({battery_invert:l.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_battery_soc"),t.battery_soc,void 0,i,o("battery_soc"))}
        ${this.entitySelect(this.t("energy_tariff_sensor"),t.tariff,void 0,s,o("tariff"))}
      </div>
      <p class="fp3d-sub">${this.t("energy_hint")}</p>
    </details>`}renderPresenceSettings(){let t=Object.keys(this.hass?.states??{}).filter(i=>i.startsWith("person.")).sort(),e=i=>{let s=i.slice(7),o=this.entityOptions(l=>l.startsWith("sensor.")),a=l=>l.includes(s)&&/(area|room|raum|bermuda|espresense)/.test(l);return[...o.filter(l=>a(l.id)),...o.filter(l=>!a(l.id))]},n=(i,s)=>{let o=structuredClone(this._doc);o.presence=o.presence.filter(a=>a.person!==i),s&&s!=="none"&&o.presence.push({person:i,sensor:s}),this.setDoc(o)};return _`<details class="fp3d-section">
      <summary>${this.t("presence")}</summary>
      <div class="fp3d-form">
        ${t.length?t.map(i=>this.entitySelect(`${F(this.hass,i)} \xB7 ${this.t("presence_sensor")}`,this._doc.presence.find(s=>s.person===i)?.sensor??null,void 0,e(i),s=>n(i,s))):_`<p class="fp3d-sub fp3d-wide">${this.t("no_persons")}</p>`}
      </div>
      <p class="fp3d-sub">${this.t("presence_hint")}</p>
    </details>`}renderFurnitureLibrary(){return _`<details class="fp3d-section">
      <summary>${this.t("furniture_add")}</summary>
      <div class="fp3d-library">
        ${ie.map(t=>_`<button class="fp3d-btn" @click=${()=>this.addFurniture(t)}>${this.t(`furn_${t}`)}</button>`)}
      </div>
    </details>`}renderDeviceForm(t){let e=this.isAdmin,n=E(t.entity_id),i=n==="light",s=t.mount??"ceiling",o=n?Pt(n,this.floor?.height??2.5,i?s:null):1;return _`<section>
      <h3>${this.t("device")}</h3>
      <p class="fp3d-dev-title">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d=${n?pt(n):""} />
        </svg>
        ${F(this.hass,t.entity_id)}
      </p>
      <div class="fp3d-form">
        ${i?_`<label class="fp3d-field fp3d-wide"
              >${this.t("lamp_mount")}
              <select ?disabled=${!e} @change=${a=>this.updateDevice({mount:a.target.value,y:null})}>
                ${["ceiling","floor","table","wall"].map(a=>_`<option value=${a} ?selected=${a===s}>${this.t(`lamp_${a}`)}</option>`)}
              </select></label
            >`:v}
        ${this.num(this.t("x"),t.x,a=>this.updateDevice({x:a}))} ${this.num(this.t("z"),t.z,a=>this.updateDevice({z:a}))}
        ${this.num(this.t("marker_height"),t.y??o,a=>this.updateDevice({y:Math.max(0,a)}),.05,0)}
      </div>
      ${e?_`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.centreDevice()}>${this.t("device_centre")}</button>
            ${t.y!==null?_`<button class="fp3d-btn" @click=${()=>this.updateDevice({y:null})}>${this.t("height_auto")}</button>`:v}
            <button
              class="fp3d-btn fp3d-danger"
              @click=${()=>{this.removeDevice(t.entity_id),this._deviceId=null}}
            >
              ${this.t("devices_remove")}
            </button>
          </div>`:v}
    </section>`}renderDeviceList(t){let e=this.isAdmin,n=this.hass,i=t.area_id?n?.areas?.[t.area_id]?.name:void 0,s=n?K(n,t.area_id).filter(p=>Ye(E(p))):[],o=new Set(this.floor?.placements.filter(p=>V([p.x,p.z],t.points)).map(p=>p.entity_id)),a=n?kt(n,s):[],l=a.map(p=>p.primary).filter(p=>!o.has(p)),d=this._deviceQuery.trim().toLowerCase(),h=p=>!d||F(n,p,i).toLowerCase().includes(d)||p.includes(d),f=this.floor?.placements.filter(p=>E(p.entity_id)==="light"&&(p.mount??"ceiling")==="ceiling"&&V([p.x,p.z],t.points)).length,u=(p,c=!1)=>{let g=o.has(p);return _`<div class="fp3d-row fp3d-dev-row ${c?"fp3d-dev-extra":""}">
        <button class="fp3d-dev-name ${g?"":"fp3d-muted"}" ?disabled=${!g} @click=${()=>this.selectItem("device",p)}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${pt(E(p))} />
          </svg>
          <span>${F(n,p,i)}</span>
        </button>
        ${e?g?_`<button class="fp3d-link" @click=${()=>this.removeDevice(p)}>${this.t("devices_remove")}</button>`:_`<button class="fp3d-link" @click=${()=>this.placeDevices([p])}>${this.t("devices_place")}</button>`:v}
      </div>`};return _`<section>
      <h3>${this.t("devices")}</h3>
      ${t.area_id?s.length?_`${e&&l.length?_`<button class="fp3d-btn fp3d-primary fp3d-wide-btn" @click=${()=>this.placeDevices(l)}>${this.t("devices_place_all")}</button>`:v}
              ${e&&(f??0)>=2?_`<button class="fp3d-btn fp3d-wide-btn" @click=${()=>this.spreadCeilingLights(t)}>${this.t("lights_spread")}</button>`:v}
              ${s.length>8?_`<input
                    class="fp3d-search"
                    type="search"
                    placeholder=${this.t("devices_search")}
                    .value=${this._deviceQuery}
                    @input=${p=>this._deviceQuery=p.target.value}
                  />`:v}
              <div class="fp3d-room-list">
                ${a.map(p=>{let c=p.others.filter(h),g=this._expanded.has(p.primary)||!!d&&c.length>0;return!h(p.primary)&&!c.length?v:_`${u(p.primary)}
                  ${p.others.length?_`<button
                        class="fp3d-more"
                        @click=${()=>{let m=new Set(this._expanded);m.has(p.primary)?m.delete(p.primary):m.add(p.primary),this._expanded=m}}
                      >
                        ${g?this.t("devices_less"):this.t("devices_more",{n:p.others.length})}
                      </button>`:v}
                  ${g?(d?c:p.others).map(m=>u(m,!0)):v}`})}
              </div>
              <p class="fp3d-sub">${this.t("devices_hint")}</p>`:_`<p class="fp3d-sub">${this.t("devices_none")}</p>`:_`<p class="fp3d-sub">${this.t("devices_none_area")}</p>`}
    </section>`}renderBackgroundForm(t){let e=t.background;return _`<details class="fp3d-section">
      <summary>${this.t("background")}</summary>
      <div class="fp3d-form">
        <label class="fp3d-btn fp3d-wide fp3d-upload"
          >${this.t("background_upload")}<input type="file" accept="image/png,image/jpeg,image/webp" @change=${this.uploadBackground}
        /></label>
        ${e?_`${this.num(this.t("x"),e.x,n=>this.updateFloor({background:{...e,x:n}}))}
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
              <button class="fp3d-btn fp3d-danger fp3d-wide" @click=${()=>this.updateFloor({background:null})}>${this.t("background_remove")}</button>`:v}
      </div>
    </details>`}renderSettings(){let t=this._doc.settings,e=n=>{let i=structuredClone(this._doc);Object.assign(i.settings,n),this.setDoc(i)};return _`<details class="fp3d-section">
      <summary>${this.t("settings")}</summary>
      <div class="fp3d-form">
        ${this.num(this.t("wall_exterior"),t.wall_exterior,n=>e({wall_exterior:Math.min(1,Math.max(.02,n))}),.01,.02)}
        ${this.num(this.t("wall_interior"),t.wall_interior,n=>e({wall_interior:Math.min(1,Math.max(.02,n))}),.01,.02)}
        ${this.num(this.t("grid"),t.grid,n=>e({grid:Math.min(1,Math.max(.01,n))}),.01,.01)}
      </div>
    </details>`}static styles=[W,ht,H`
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
    `]};customElements.get("fp3d-editor")||customElements.define("fp3d-editor",re);var Y=(r,t)=>A(r,t);function G(r,t){if(!t||D(t))return Y(r,"state_unavailable");let e=t.attributes;switch(E(t.entity_id)){case"light":return t.state!=="on"?Y(r,"state_off"):typeof e.brightness=="number"?`${Math.round(e.brightness/255*100)} %`:Y(r,"state_on");case"switch":case"fan":return Y(r,t.state==="on"?"state_on":"state_off");case"cover":return typeof e.current_position=="number"&&t.state!=="opening"&&t.state!=="closing"?`${e.current_position} %`:Dt(r,t.state);case"climate":{let n=typeof e.current_temperature=="number"?`${R(r,e.current_temperature,1)} \xB0C`:null;return t.state==="off"?n?`${n} \xB7 ${Y(r,"state_off")}`:Y(r,"state_off"):n??Dt(r,t.state)}case"media":return t.state==="playing"&&typeof e.media_title=="string"?e.media_title:Dt(r,t.state);case"lock":return Dt(r,t.state);case"binary":return["door","window","opening","garage_door"].includes(e.device_class)?Y(r,t.state==="on"?"state_open":"state_closed"):Y(r,t.state==="on"?"state_detected":"state_clear");case"sensor":{let n=Number(t.state),i=e.unit_of_measurement??"";return Number.isFinite(n)?`${R(r,n,1)}${i?` ${i}`:""}`:t.state}default:return""}}function Dt(r,t){let e=`state_${t}`,n=A(r,e);return n===e?t:n}function fn(r,t){let e=[];for(let n of t.floors)for(let i of n.placements){let s=E(i.entity_id),o=r.states[i.entity_id];if(!s||!o)continue;let a=n.rooms.find(d=>d.points.length>=3&&V([i.x,i.z],d.points))??null,l=a?.area_id?r.areas?.[a.area_id]?.name:void 0;e.push({id:i.entity_id,floorId:n.id,roomId:a?.id??null,x:i.x,z:i.z,y:i.y??Pt(s,n.height,i.mount??null),lamp:s==="light"?i.mount??"ceiling":null,icon:pn(s),name:F(r,i.entity_id,l),text:G(r,o),active:Je(o),unavailable:D(o),glow:s==="light"?Xe(o):null})}return e}function mn(r){return r.floors.flatMap(t=>t.placements.map(e=>e.entity_id))}function Et(r,t){r.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}function gn(r,t){let e=t.slice(0,t.indexOf("."));return r.callService(e,"toggle",{entity_id:t})}var hi=4,ui=8,fi=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[255,95,210],[120,255,150]],ut=r=>_`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${pt(r)} />
  </svg>`,Lt={previous:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z"},ae=r=>_`<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d=${r} /></svg>`,le=class extends P{static properties={hass:{attribute:!1},room:{attribute:!1},_showAll:{state:!0}};constructor(){super(),this.room=null,this._showAll=!1}t(t,e){return A(this.hass,t,e)}call(t,e,n){this.hass.callService(t,e,n)}get areaName(){return this.room?.area_id?this.hass.areas?.[this.room.area_id]?.name:void 0}name(t){return F(this.hass,t,this.areaName)}nameButton(t){return _`<button class="fp3d-rp-name" title=${this.t("details")} @click=${()=>Et(this,t)}>${this.name(t)}</button>`}toggle(t,e,n){return _`<button
      class="fp3d-switch"
      role="switch"
      aria-checked=${e?"true":"false"}
      aria-label=${this.name(t.entity_id)}
      ?disabled=${D(t)}
      @click=${n}
    ></button>`}render(){let t=this.room;if(!t||!this.hass)return v;let e=K(this.hass,t.area_id),n=kt(this.hass,e),i=n.reduce((m,y)=>m+y.others.length,0),s=this._showAll?e:n.map(m=>m.primary),o=m=>s.filter(y=>m.includes(E(y))).map(y=>this.hass.states[y]),a=o(["light"]),l=o(["cover"]),d=o(["climate"]),h=o(["media"]),f=o(["switch","fan","lock"]),u=o(["sensor","binary"]),p=o(["scene","script"]),c=this.facts(u,d),g=a.filter(m=>m.state==="on");return _`<section class="fp3d-rp" aria-label=${t.name}>
      <header class="fp3d-rp-head">
        <div>
          <h2>${t.name}</h2>
          ${c.length?_`<p class="fp3d-rp-facts">${c.join(" \xB7 ")}</p>`:v}
        </div>
        <button class="fp3d-rp-close" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>
      <div class="fp3d-rp-body">
        ${t.area_id?s.length?v:_`<p class="fp3d-rp-note">${this.t("panel_empty")}</p>`:_`<p class="fp3d-rp-note">${this.t("panel_no_area")}</p>`}
        ${a.length?this.section("panel_lights",a.map(m=>this.lightRow(m)),g.length?_`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_off",{entity_id:g.map(m=>m.entity_id)})}>
                    ${this.t("panel_all_off")}
                  </button>`:v):v}
        ${l.length?this.section("panel_covers",l.map(m=>this.coverRow(m))):v}
        ${d.length?this.section("panel_climate",d.map(m=>this.climateRow(m))):v}
        ${h.length?this.section("panel_media",h.map(m=>this.mediaRow(m))):v}
        ${f.length?this.section("panel_switches",f.map(m=>this.switchRow(m))):v}
        ${u.length?this.section("panel_sensors",u.map(m=>this.sensorRow(m))):v}
        ${p.length?this.section("panel_scenes",[_`<div class="fp3d-rp-scenes">
                  ${p.map(m=>_`<button
                      class="fp3d-btn"
                      ?disabled=${D(m)}
                      @click=${()=>this.call(E(m.entity_id)==="scene"?"scene":"script","turn_on",{entity_id:m.entity_id})}
                    >
                      ${this.name(m.entity_id)}
                    </button>`)}
                </div>`]):v}
        ${i?_`<button class="fp3d-btn fp3d-rp-small fp3d-rp-more" @click=${()=>this._showAll=!this._showAll}>
              ${this._showAll?this.t("panel_less"):this.t("panel_more",{n:i})}
            </button>`:v}
      </div>
    </section>`}facts(t,e){let n=[],i=t.find(a=>a.attributes.device_class==="temperature"&&!D(a)),s=e.find(a=>typeof a.attributes.current_temperature=="number");i?n.push(G(this.hass,i)):s&&n.push(`${R(this.hass,s.attributes.current_temperature,1)} \xB0C`);let o=t.find(a=>a.attributes.device_class==="humidity"&&!D(a));return o&&n.push(G(this.hass,o)),n}section(t,e,n=v){return _`<div class="fp3d-rp-sec">
      <div class="fp3d-rp-sec-head"><h3>${this.t(t)}</h3>${n}</div>
      ${e}
    </div>`}lightRow(t){let e=t.attributes,n=t.state==="on",i=e.supported_color_modes??[],s=i.some(u=>u!=="onoff"),o=i.includes("color_temp"),a=i.some(u=>["hs","rgb","rgbw","rgbww","xy"].includes(u)),l=typeof e.brightness=="number"?Math.round(e.brightness/255*100):100,d=e.min_color_temp_kelvin??2200,h=e.max_color_temp_kelvin??6500,f=t.entity_id;return _`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${ut("light")}</span>
      ${this.nameButton(f)}
      <span class="fp3d-rp-state">${G(this.hass,t)}</span>
      ${this.toggle(t,n,()=>this.call("light","toggle",{entity_id:f}))}
      ${n&&s?_`<label class="fp3d-rp-slider"
            ><span>${this.t("brightness")}</span>
            <input
              type="range"
              min="1"
              max="100"
              .value=${String(l)}
              @change=${u=>this.call("light","turn_on",{entity_id:f,brightness_pct:Number(u.target.value)})}
          /></label>`:v}
      ${n&&o?_`<label class="fp3d-rp-slider fp3d-rp-ct"
            ><span>${this.t("color_temp")}</span>
            <input
              type="range"
              min=${d}
              max=${h}
              step="50"
              .value=${String(e.color_temp_kelvin??d)}
              @change=${u=>this.call("light","turn_on",{entity_id:f,color_temp_kelvin:Number(u.target.value)})}
          /></label>`:v}
      ${n&&a?_`<div class="fp3d-rp-swatches" role="group" aria-label=${this.t("color")}>
            ${fi.map(u=>_`<button
                class="fp3d-rp-swatch"
                style="--c: rgb(${u.join(",")})"
                aria-label="rgb(${u.join(", ")})"
                @click=${()=>this.call("light","turn_on",{entity_id:f,rgb_color:u})}
              ></button>`)}
          </div>`:v}
    </div>`}coverRow(t){let e=t.attributes,n=e.supported_features??0,i=t.entity_id,s=D(t);return _`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon">${ut("cover")}</span>
      ${this.nameButton(i)}
      <span class="fp3d-rp-state">${G(this.hass,t)}</span>
      <div class="fp3d-rp-buttons">
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${s} @click=${()=>this.call("cover","open_cover",{entity_id:i})}>${this.t("cover_open")}</button>
        ${n&ui?_`<button class="fp3d-btn fp3d-rp-small" ?disabled=${s} @click=${()=>this.call("cover","stop_cover",{entity_id:i})}>${this.t("cover_stop")}</button>`:v}
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${s} @click=${()=>this.call("cover","close_cover",{entity_id:i})}>${this.t("cover_close")}</button>
      </div>
      ${n&hi&&typeof e.current_position=="number"?_`<label class="fp3d-rp-slider"
            ><span>${this.t("position")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${s}
              .value=${String(e.current_position)}
              @change=${o=>this.call("cover","set_cover_position",{entity_id:i,position:Number(o.target.value)})}
          /></label>`:v}
    </div>`}climateRow(t){let e=t.attributes,n=t.entity_id,i=typeof e.temperature=="number"?e.temperature:null,s=e.target_temp_step??.5,o=e.min_temp??5,a=e.max_temp??30,l=e.hvac_modes??[],d=h=>this.call("climate","set_temperature",{entity_id:n,temperature:Math.min(a,Math.max(o,Math.round(h/s)*s))});return _`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${e.hvac_action==="heating"?"fp3d-rp-on":""}">${ut("climate")}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${G(this.hass,t)}</span>
      ${i!==null?_`<div class="fp3d-rp-stepper fp3d-rp-wide">
            <button class="fp3d-btn" aria-label=${this.t("temp_down")} @click=${()=>d(i-s)}>−</button>
            <span><small>${this.t("target_temp")}</small> ${R(this.hass,i,1)} °C</span>
            <button class="fp3d-btn" aria-label=${this.t("temp_up")} @click=${()=>d(i+s)}>+</button>
          </div>`:v}
      ${l.length>1?_`<div class="fp3d-rp-chips">
            ${l.map(h=>_`<button
                class="fp3d-chip"
                aria-pressed=${t.state===h}
                @click=${()=>this.call("climate","set_hvac_mode",{entity_id:n,hvac_mode:h})}
              >
                ${this.stateLabel(h)}
              </button>`)}
          </div>`:v}
    </div>`}stateLabel(t){let e=`state_${t}`,n=this.t(e);return n===e?t:n}mediaRow(t){let e=t.attributes,n=t.entity_id,i=D(t)||t.state==="off",s=[e.media_title,e.media_artist].filter(o=>typeof o=="string"&&o).join(" \xB7 ");return _`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${t.state==="playing"?"fp3d-rp-on":""}">${ut("media")}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${this.stateLabel(t.state)}</span>
      ${s?_`<p class="fp3d-rp-media fp3d-rp-wide">${s}</p>`:v}
      <div class="fp3d-rp-buttons fp3d-rp-wide">
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("previous")} ?disabled=${i} @click=${()=>this.call("media_player","media_previous_track",{entity_id:n})}>
          ${ae(Lt.previous)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("play_pause")} ?disabled=${D(t)} @click=${()=>this.call("media_player","media_play_pause",{entity_id:n})}>
          ${ae(t.state==="playing"?Lt.pause:Lt.play)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("next")} ?disabled=${i} @click=${()=>this.call("media_player","media_next_track",{entity_id:n})}>
          ${ae(Lt.next)}
        </button>
      </div>
      ${typeof e.volume_level=="number"?_`<label class="fp3d-rp-slider"
            ><span>${this.t("volume")}</span>
            <input
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(e.volume_level*100))}
              @change=${o=>this.call("media_player","volume_set",{entity_id:n,volume_level:Number(o.target.value)/100})}
          /></label>`:v}
    </div>`}switchRow(t){let e=t.entity_id,n=E(e),i=e.slice(0,e.indexOf(".")),s=n==="lock"?t.state==="unlocked"||t.state==="open":t.state==="on",o=()=>n==="lock"?this.call("lock",s?"lock":"unlock",{entity_id:e}):this.call(i,"toggle",{entity_id:e});return _`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${s?"fp3d-rp-on":""}">${ut(n)}</span>
      ${this.nameButton(e)}
      <span class="fp3d-rp-state">${G(this.hass,t)}</span>
      ${this.toggle(t,s,o)}
    </div>`}sensorRow(t){let e=E(t.entity_id),n=e==="binary"&&t.state==="on";return _`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${ut(e)}</span>
      ${this.nameButton(t.entity_id)}
      <span class="fp3d-rp-state">${G(this.hass,t)}</span>
    </div>`}fire(t){this.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0}))}static styles=[W,ht,H`
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
    `]};customElements.get("fp3d-room-panel")||customElements.define("fp3d-room-panel",le);var st=.03,mi=.07;function Bt(r,t=!1){if(!r)return null;let e=Number(r.state);if(!Number.isFinite(e))return null;let n=String(r.attributes.unit_of_measurement??"W"),i=n==="kW"?e*1e3:n==="MW"?e*1e6:e;return t?-i:i}function _n(r,t){return t.startsWith("sensor.")&&r.states[t]?.attributes.device_class==="power"}function de(r,t){if(_n(r,t))return t;let e=r.entities?.[t]?.device_id;return!e||!r.entities?null:Object.values(r.entities).find(i=>i.device_id===e&&i.entity_id!==t&&_n(r,i.entity_id))?.entity_id??null}function vn(r,t){let e=t.energy,n=new Set([e.grid,e.solar,e.battery].filter(Boolean)),i=[],s=new Set;for(let o of t.floors)for(let a of o.placements){let l=de(r,a.entity_id);!l||n.has(l)||s.has(l)||(s.add(l),i.push({id:a.entity_id,powerEntity:l,floorId:o.id,x:a.x,z:a.z,power:Math.max(0,Bt(r.states[l])??0)}))}return i}function yn(r,t,e){let n=t.energy,i=n.grid?Bt(r.states[n.grid],n.grid_invert):null,s=n.solar?Bt(r.states[n.solar]):null,o=n.battery?Bt(r.states[n.battery],n.battery_invert):null,a=n.battery_soc?Number(r.states[n.battery_soc]?.state):NaN,l=n.tariff?r.states[n.tariff]:void 0,d=Number(l?.state),h=null;return i!==null||s!==null||o!==null?h=Math.max(0,(i??0)+Math.max(0,s??0)+(o??0)):e.length&&(h=e.reduce((f,u)=>f+u.power,0)),{grid:i,solar:s===null?null:Math.max(0,s),battery:o,soc:Number.isFinite(a)?a:null,tariff:l&&Number.isFinite(d)?{value:d,unit:String(l.attributes.unit_of_measurement??"")}:null,consumption:h}}function Nt(r,t){return r.pos.push(t),r.adj.push([]),r.pos.length-1}function ft(r,t,e){let n=Math.hypot(r.pos[t][0]-r.pos[e][0],r.pos[t][1]-r.pos[e][1]);r.adj[t].push({to:e,w:n}),r.adj[e].push({to:t,w:n})}function gi(r,t){let e=r.length,n=r.map((i,s)=>{let o=r[(s+1)%e],a=o[0]-i[0],l=o[1]-i[1],d=Math.hypot(a,l)||1,h=-l/d,f=a/d;return{p:[i[0]+h*t[s],i[1]+f*t[s]],d:[a/d,l/d],n:[h,f]}});return r.map((i,s)=>{let o=n[(s-1+e)%e],a=n[s],l=o.d[0]*a.d[1]-o.d[1]*a.d[0];if(Math.abs(l)<1e-6)return[i[0]+a.n[0]*t[s],i[1]+a.n[1]*t[s]];let d=((a.p[0]-o.p[0])*a.d[1]-(a.p[1]-o.p[1])*a.d[0])/l;return[o.p[0]+o.d[0]*d,o.p[1]+o.d[1]*d]})}function _i(r){return B(r.points)>=0?{pts:r.points,flipped:!1}:{pts:[...r.points].reverse(),flipped:!0}}function bi(r,t,e){let n={pos:[],adj:[],rings:new Map},{walls:i}=St(r.rooms,{exterior:t,interior:e});for(let s of r.rooms){if(s.points.length<3)continue;let{pts:o,flipped:a}=_i(s),l=o.length,d=o.map((u,p)=>{let c=a?(l-2-p+l)%l:p,g=i.some(m=>!m.exterior&&m.sources.some(y=>y.room_id===s.id&&y.edge===c));return mi+(g?e/2:0)}),h=gi(o,d).map(u=>Nt(n,u)),f=h.map((u,p)=>[u,h[(p+1)%l]]);for(let[u,p]of f)ft(n,u,p);n.rings.set(s.id,f)}for(let s of i){if(s.exterior||!s.roomLeft||!s.roomRight)continue;let o=[(s.a[0]+s.b[0])/2,(s.a[1]+s.b[1])/2],a=Wt(n,s.roomLeft,o),l=Wt(n,s.roomRight,o);a!==null&&l!==null&&ft(n,a,l)}return n}function Wt(r,t,e){let n=r.rings.get(t);if(!n)return null;let i=null;for(let o of n){let a=r.pos[o[0]],l=r.pos[o[1]],d=l[0]-a[0],h=l[1]-a[1],f=d*d+h*h||1,u=Math.min(1,Math.max(0,((e[0]-a[0])*d+(e[1]-a[1])*h)/f)),p=[a[0]+d*u,a[1]+h*u],c=Math.hypot(e[0]-p[0],e[1]-p[1]);(!i||c<i.d)&&(i={seg:o,q:p,d:c})}if(!i)return null;let s=Nt(r,i.q);return ft(r,s,i.seg[0]),ft(r,s,i.seg[1]),s}function bn(r,t){let e=r.rooms.filter(s=>s.points.length>=3),n=e.find(s=>V(t,s.points));if(n)return n;let i=null;for(let s of e)for(let o of s.points){let a=Math.hypot(t[0]-o[0],t[1]-o[1]);(!i||a<i.d)&&(i={room:s,d:a})}return i?.room??null}function vi(r,t){let e=r.pos.map(()=>1/0),n=r.pos.map(()=>-1),i=r.pos.map(()=>!1);for(e[t]=0;;){let s=-1;for(let o=0;o<e.length;o++)!i[o]&&e[o]<1/0&&(s<0||e[o]<e[s])&&(s=o);if(s<0)break;i[s]=!0;for(let{to:o,w:a}of r.adj[s])e[s]+a<e[o]-1e-9&&(e[o]=e[s]+a,n[o]=s)}return{dist:e,prev:n}}function xn({building:r,consumers:t,summary:e,battery:n}){let i=r.energy.meter;if(!i)return[];let s=r.floors.find(c=>c.id===i.floor_id);if(!s)return[];let o=[],{wall_exterior:a,wall_interior:l}=r.settings,d=new Map,h=c=>c.elevation>s.elevation,f=new Map;for(let c of t){let g=f.get(c.floorId)??[];g.push({id:c.id,x:c.x,z:c.z,power:c.power,kind:"consumer"}),f.set(c.floorId,g)}if(n&&e.battery!==null){let c=f.get(n.floorId)??[];c.push({id:"__battery",x:n.x,z:n.z,power:Math.abs(e.battery),kind:"battery"}),f.set(n.floorId,c)}let u=r.floors.filter(c=>f.has(c.id)),p=c=>(f.get(c.id)??[]).reduce((g,m)=>g+m.power,0);for(let c of u){if(c.id===s.id)continue;let g=h(c),m=p(c);o.push({floorId:s.id,a:[i.x,st,i.z],b:[i.x,g?s.height:-.2,i.z],dist:0,power:m,kind:"consumer"});let y=Math.abs(c.elevation-s.elevation);o.push({floorId:c.id,a:[i.x,g?-.2:c.height,i.z],b:[i.x,st,i.z],dist:y,power:m,kind:"consumer"}),d.set(c.id,y+.25)}for(let c of u){let g=f.get(c.id),m=bi(c,a,l),y=bn(c,[i.x,i.z]);if(!y)continue;let b=Nt(m,[i.x,i.z]),w=Wt(m,y.id,[i.x,i.z]);if(w===null)continue;ft(m,b,w);let M=[];for(let z of g){let C=bn(c,[z.x,z.z]);if(!C)continue;let O=Nt(m,[z.x,z.z]),N=Wt(m,C.id,[z.x,z.z]);N!==null&&(ft(m,O,N),M.push({node:O,power:z.power,kind:z.kind}))}let{dist:x,prev:$}=vi(m,b),I=new Map;for(let z of M)if(Number.isFinite(x[z.node]))for(let C=z.node;$[C]>=0;C=$[C]){let O=$[C],N=`${O}>${C}`,J=I.get(N)??{a:O,b:C,power:0,kind:z.kind};J.power+=z.power,J.kind!==z.kind&&(J.kind="consumer"),I.set(N,J)}let T=d.get(c.id)??0;for(let{a:z,b:C,power:O,kind:N}of I.values()){let J=m.pos[z],ue=m.pos[C];o.push({floorId:c.id,a:[J[0],st,J[1]],b:[ue[0],st,ue[1]],dist:T+x[z],power:O,kind:N})}}if(e.grid!==null){let{walls:c}=St(s.rooms,{exterior:a,interior:l}),g=null;for(let m of c){if(!m.exterior)continue;let y=m.b[0]-m.a[0],b=m.b[1]-m.a[1],w=y*y+b*b||1,M=Math.min(1,Math.max(0,((i.x-m.a[0])*y+(i.z-m.a[1])*b)/w)),x=[m.a[0]+y*M,m.a[1]+b*M],$=Math.hypot(i.x-x[0],i.z-x[1]),I=Math.sqrt(w);(!g||$<g.d)&&(g={q:x,out:[b/I,-y/I],d:$})}if(g){let m=[g.q[0]+g.out[0]*(a+1.4),st,g.q[1]+g.out[1]*(a+1.4)],y=[i.x,st,i.z],b=e.grid>=0;o.push({floorId:s.id,a:b?m:y,b:b?y:m,dist:0,power:Math.abs(e.grid),kind:b?"grid":"export"})}}if(e.solar!==null&&o.push({floorId:s.id,a:[i.x+.08,s.height+.6,i.z+.08],b:[i.x+.08,st,i.z+.08],dist:0,power:e.solar,kind:"solar"}),e.battery!==null&&e.battery>0)for(let c of o)c.kind==="battery"&&([c.a,c.b]=[c.b,c.a]);return o}function wn(r,t){let e=[.22,.88,1],n=[1,.78,.2],i=[.35,1,.55];if(r==="grid")return e;if(r==="export"||r==="solar")return n;if(r==="battery")return i;let s=[[Math.max(0,t.grid??0),e],[Math.max(0,(t.solar??0)-Math.max(0,-(t.grid??0))-Math.max(0,-(t.battery??0))),n],[Math.max(0,t.battery??0),i]],[o]=s.reduce((a,l)=>l[0]>a[0]?l:a);return o>0?s.find(a=>a[0]===o)[1]:e}var yi=new URL(import.meta.url),xi=new URL("./floorplan-3d-3d.js?v=e44da5bec20e",yi).href,$n;function kn(){return $n??=import(xi),$n}var Mn=r=>r.toLowerCase().replace(/[_\-]+/g," ").replace(/\s+/g," ").trim();function wi(r,t,e){let n=Mn(e);if(!n||n==="unknown"||n==="unavailable"||n==="not home"||n==="away")return null;for(let i of t.floors)for(let s of i.rooms)if([s.name,s.area_id??"",s.area_id?r.areas?.[s.area_id]?.name??"":""].filter(Boolean).map(Mn).includes(n))return{floorId:i.id,room:s};return null}function $i(r){let t=r.trim().split(/\s+/).filter(Boolean);return t.length?(t.length>1?t[0][0]+t[t.length-1][0]:t[0].slice(0,2)).toUpperCase():"?"}function Sn(r,t){let e=[],n=new Map;for(let i of t.presence){let s=r.states[i.person];if(!s||!i.sensor||s.state!=="home"&&s.state!=="on")continue;let o=r.states[i.sensor];if(!o)continue;let a=wi(r,t,o.state);if(!a)continue;let l=n.get(a.room.id)??0;n.set(a.room.id,l+1);let[d,h]=j(a.room.points),f=-Math.PI/2+.9+l*1.15,u=.75,p=s.attributes.friendly_name??i.person;e.push({id:i.person,name:p,initials:$i(p),picture:s.attributes.entity_picture??null,floorId:a.floorId,roomId:a.room.id,x:d+Math.cos(f)*u,z:h+Math.sin(f)*u})}return e}function En(r,t,e,n){let i=new Map,s=o=>!!o&&r.states[o]?.state==="on";for(let o of t.floors){let a=new Set;for(let d of o.rooms)for(let h of en(r,K(r,d.area_id)))E(h)==="light"&&a.add(h);for(let d of o.placements)E(d.entity_id)==="light"&&a.add(d.entity_id);let l=o.openings.filter(d=>{let h=e.get(d.id);return h?d.type==="garage"?(Ht(r,h,"garage").cover??1)<.95:s(h.contact)||s(h.tilt):!1}).length;i.set(o.id,{rooms:o.rooms.length,lightsOn:[...a].filter(d=>r.states[d]?.state==="on").length,open:l,persons:n.filter(d=>d.floorId===o.id).length})}return i}function In(r,t){let e=[t.rooms===1?A(r,"floor_rooms_one"):A(r,"floor_rooms",{n:t.rooms})];return t.lightsOn&&e.push(A(r,"floor_lights",{n:t.lightsOn})),t.open&&e.push(A(r,"floor_open",{n:t.open})),t.persons&&e.push(A(r,"floor_persons",{n:t.persons})),e.join(" \xB7 ")}var ce=class extends P{static properties={hass:{attribute:!1},building:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},wallMode:{attribute:!1},explode:{type:Boolean},quality:{attribute:!1},showStats:{type:Boolean},_stats:{state:!0},_error:{state:!0},_energy:{state:!0}};viewer=null;starting=!1;shownStates=new Map;openingLinks=null;linkedRegistry;watched=[];constructor(){super(),this.building=null,this.floorId=null,this.roomId=null,this.wallMode="auto",this.explode=!0,this.quality="auto",this.showStats=!1,this._stats=null,this._error=null,this._energy=null}connectedCallback(){super.connectedCallback(),this.hasUpdated&&!this.viewer&&this.start()}disconnectedCallback(){super.disconnectedCallback(),this.viewer?.dispose(),this.viewer=null}firstUpdated(){this.start()}async start(){if(!(this.starting||this.viewer)){this.starting=!0;try{let t=await kn();if(!this.isConnected)return;let e=this.renderRoot.querySelector(".fp3d-stage");this.viewer=t.createViewer(e,{quality:this.quality,explode:this.explode,onRoomTap:(n,i)=>this.fire("room-tap",{floorId:n,roomId:i}),onFloorTap:n=>this.fire("floor-tap",{floorId:n}),floorInfo:n=>n.rooms.length===1?A(this.hass,"floor_rooms_one"):A(this.hass,"floor_rooms",{n:n.rooms.length}),onBack:()=>this.fire("back",{}),onDeviceTap:n=>this.onDeviceTap(n),onDeviceHold:n=>Et(this,n),onStats:n=>{this.showStats&&(this._stats=n)}}),this.viewer.setWallMode(this.wallMode),this.building&&this.viewer.setBuilding(this.building),this.syncDevices(!0),this.viewer.setFloor(this.floorId,!1),this.roomId&&this.viewer.selectRoom(this.roomId)}catch(t){this._error=String(t)}finally{this.starting=!1}}}updated(t){let e=this.viewer;e&&(t.has("building")&&this.building&&e.setBuilding(this.building),(t.has("building")||t.has("hass"))&&this.syncDevices(t.has("building")),t.has("floorId")&&e.setFloor(this.floorId),t.has("roomId")&&(this.roomId||t.get("roomId"))&&e.selectRoom(this.roomId),t.has("wallMode")&&e.setWallMode(this.wallMode),t.has("explode")&&e.setExplode(this.explode),t.has("quality")&&t.get("quality")!==void 0&&e.setQuality(this.quality))}syncDevices(t){let e=this.viewer,n=this.building;if(!e||!n||!this.hass)return;let i=this.hass;if(t||!this.openingLinks||this.linkedRegistry!==i.entities){this.openingLinks=Ot(i,n.floors),this.linkedRegistry=i.entities;let c=[...this.openingLinks.values()].flatMap(x=>[x.cover,x.contact,x.tilt]),g=mn(n),m=g.map(x=>de(i,x)),y=n.energy,b=n.presence.flatMap(x=>[x.person,x.sensor]),w=n.floors.flatMap(x=>x.rooms.flatMap($=>K(i,$.area_id).filter(I=>E(I)==="light"))),M=[...g,...c,...m,y.grid,y.solar,y.battery,y.battery_soc,y.tariff,...b,...w];this.watched=[...new Set(M.filter(x=>!!x))],t=!0}if(!(t||this.watched.some(c=>this.shownStates.get(c)!==i.states[c])))return;this.shownStates=new Map(this.watched.map(c=>[c,i.states[c]]));let o=vn(i,n),a=yn(i,n,o),l=new Map(o.filter(c=>c.id!==c.powerEntity).map(c=>[c.id,c.power]));e.setDevices(fn(i,n).map(c=>{let g=l.get(c.id)??null;return{...c,power:g,powerText:g===null?void 0:It(i,g)}}));let d=new Map(n.floors.flatMap(c=>c.openings.map(g=>[g.id,g.type])));e.setOpeningStates(new Map([...this.openingLinks].map(([c,g])=>[c,Ht(i,g,d.get(c))])));let h=n.energy.battery?n.floors.flatMap(c=>c.placements.filter(g=>g.entity_id===n.energy.battery).map(g=>({floorId:c.id,x:g.x,z:g.z})))[0]:null;e.setFlows(xn({building:n,consumers:o,summary:a,battery:h??null}).map(c=>({floorId:c.floorId,a:c.a,b:c.b,dist:c.dist,power:c.power,color:wn(c.kind,a)})));let f=Sn(i,n);e.setPersons(f);let u=En(i,n,this.openingLinks,f);e.setFloorInfo(new Map([...u].map(([c,g])=>[c,In(i,g)])));let p=a.grid!==null||a.solar!==null||a.battery!==null||a.tariff!==null;this._energy=p?a:null}onDeviceTap(t){let e=E(t);e&&Ze.has(e)?gn(this.hass,t):Et(this,t)}resetView(){this.viewer?.resetView()}fire(t,e){this.dispatchEvent(new CustomEvent(t,{detail:e,bubbles:!0,composed:!0}))}renderEnergy(){let t=this._energy;if(!t||this.roomId)return v;let e=i=>A(this.hass,i),n=[];if(t.consumption!==null&&n.push({cls:"total",label:e("energy_consumption"),value:It(this.hass,t.consumption)}),t.grid!==null){let i=t.grid<0;n.push({cls:i?"export":"grid",label:e(i?"energy_grid_export":"energy_grid_import"),value:It(this.hass,Math.abs(t.grid))})}if(t.solar!==null&&n.push({cls:"solar",label:e("energy_solar"),value:It(this.hass,t.solar)}),t.battery!==null||t.soc!==null){let i=[t.battery!==null?It(this.hass,Math.abs(t.battery)):null,t.soc!==null?`${Math.round(t.soc)} %`:null].filter(Boolean);n.push({cls:"battery",label:e("energy_battery"),value:i.join(" \xB7 ")})}return t.tariff&&n.push({cls:"tariff",label:e("energy_tariff"),value:`${R(this.hass,t.tariff.value,3)} ${t.tariff.unit}`.trim()}),_`<div class="fp3d-energy" aria-live="off">
      ${n.map(i=>_`<div class="fp3d-energy-item fp3d-energy-${i.cls}"><span>${i.label}</span><b>${i.value}</b></div>`)}
    </div>`}render(){return _`<div class="fp3d-stage">
      ${this._error?_`<p class="fp3d-error">${this._error}</p>`:v} ${this.renderEnergy()}
      ${this.showStats&&this._stats?_`<span class="fp3d-stats"
            ><b>${this._stats.fps?A(this.hass,"stats_fps",{fps:this._stats.fps,ms:this._stats.worstMs}):A(this.hass,"stats_idle")}</b> ·
            ${A(this.hass,"stats",{calls:this._stats.calls,tris:this._stats.triangles.toLocaleString()})} ·
            ${A(this.hass,this._stats.low?"stats_low":"stats_full",{r:R(this.hass,this._stats.pixelRatio,2)})}</span
          >`:v}
    </div>`}static styles=[W,H`
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
    `]};customElements.get("fp3d-view3d")||customElements.define("fp3d-view3d",ce);function It(r,t){return Math.abs(t)>=1e3?`${R(r,t/1e3,1)} kW`:`${Math.round(t)} W`}var mt={get(r){try{return localStorage.getItem(`floorplan_3d.${r}`)}catch{return null}},set(r,t){try{localStorage.setItem(`floorplan_3d.${r}`,t)}catch{}}},pe=class extends P{static properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_mode:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_wallMode:{state:!0},_explode:{state:!0},_quality:{state:!0},_stats:{state:!0}};data=new dt(this);constructor(){super(),this.narrow=!1,this._mode="view",this._floorId=null,this._roomId=null,this._wallMode="auto",this._explode=mt.get("explode")!=="0";let t=mt.get("quality");this._quality=t==="low"||t==="high"?t:"auto",this._stats=mt.get("stats")==="1"||new URLSearchParams(location.search).has("fp3d_stats")}t(t,e){return A(this.hass,t,e)}willUpdate(t){t.has("hass")&&this.hass&&this.data.setHass(this.hass);let e=this.data.building;e&&this._floorId&&!e.floors.some(n=>n.id===this._floorId)&&(this._floorId=null,this._roomId=null)}get isAdmin(){return this.hass?.user?.is_admin??!1}setMode(t){t!==this._mode&&(t==="view"&&this.data.flush(),this._mode=t)}onRoomTap(t){let{floorId:e,roomId:n}=t.detail;n&&(this._floorId===null&&(this.data.building?.floors.length??0)>1&&(this._floorId=e),this._roomId=n===this._roomId?null:n)}setExplode(t){this._explode=t,mt.set("explode",t?"1":"0")}setQuality(t){this._quality=t,mt.set("quality",t)}back(){this._roomId?this._roomId=null:this._floorId&&(this.data.building?.floors.length??0)>1?this._floorId=null:this.renderRoot.querySelector("fp3d-view3d")?.resetView()}onKey=t=>{t.key==="Escape"&&this._mode==="view"&&this.back()};connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey)}render(){let t=this.data.building,e=this.data.saveState;return _`
      <div class="fp3d-app">
        <header class="fp3d-header">
          <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
          <h1>Floorplan 3D</h1>
          ${this.isAdmin?_`<div class="fp3d-seg" role="tablist">
                <button role="tab" aria-pressed=${this._mode==="view"} @click=${()=>this.setMode("view")}>${this.t("view")}</button>
                <button role="tab" aria-pressed=${this._mode==="editor"} @click=${()=>this.setMode("editor")}>${this.t("editor")}</button>
              </div>`:v}
          <span class="fp3d-grow"></span>
          ${this._mode==="view"&&t?.floors.some(n=>n.rooms.length)?_`<div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("quality")}>
                ${["auto","low","high"].map(n=>_`<button aria-pressed=${this._quality===n} @click=${()=>this.setQuality(n)}>${this.t(`quality_${n}`)}</button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality">
                <button
                  aria-pressed=${this._stats}
                  title=${this.t("fps_title")}
                  @click=${()=>{this._stats=!this._stats,mt.set("stats",this._stats?"1":"0")}}
                >
                  ${this.t("fps")}
                </button>
              </div>`:v}
          ${this._mode==="editor"&&e!=="idle"?_`<span class="fp3d-save fp3d-save-${e}">${this.t(e==="saving"?"saving":e==="saved"?"saved":"save_error")}</span>`:v}
        </header>
        ${this.data.error&&!t?_`<p class="fp3d-message">${this.t("load_error")}: ${this.data.error}</p>`:v}
        ${!t&&!this.data.error?_`<p class="fp3d-message">${this.t("loading")}</p>`:v}
        ${t?this._mode==="editor"&&this.isAdmin?this.renderEditor(t):this.renderView(t):v}
      </div>
    `}renderEditor(t){return _`<fp3d-editor
      class="fp3d-body"
      .hass=${this.hass}
      .building=${t}
      .narrow=${this.narrow}
      @building-changed=${e=>this.data.edit(e.detail.building)}
    ></fp3d-editor>`}renderView(t){if(!t.floors.length||!t.floors.some(i=>i.rooms.length))return _`<div class="fp3d-empty">
        <p>${this.t(this.isAdmin?"no_building_admin":"no_building")}</p>
        ${this.isAdmin?_`<button class="fp3d-btn fp3d-primary" @click=${()=>this.setMode("editor")}>${this.t("open_editor")}</button>`:v}
      </div>`;let e=t.floors.find(i=>i.id===this._floorId),n=e?[e]:t.floors;return _`
      <nav class="fp3d-nav">
        ${t.floors.length>1?_`<button class="fp3d-chip" aria-pressed=${this._floorId===null} @click=${()=>{this._floorId=null,this._roomId=null}}>
                ${this.t("all_floors")}
              </button>
              ${[...t.floors].reverse().map(i=>_`<button
                  class="fp3d-chip"
                  aria-pressed=${i.id===this._floorId}
                  @click=${()=>{this._floorId=i.id,this._roomId=null}}
                >
                  ${i.name}
                </button>`)}
              <span class="fp3d-sep"></span>`:v}
        ${n.flatMap(i=>i.rooms.map(s=>_`<button
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
          ?showStats=${this._stats}
          @room-tap=${this.onRoomTap}
          @floor-tap=${i=>{this._floorId=i.detail.floorId,this._roomId=null}}
          @back=${()=>this.back()}
        ></fp3d-view3d>
        ${this._roomId?_`<fp3d-room-panel
              class="fp3d-room-panel"
              .hass=${this.hass}
              .room=${t.floors.flatMap(i=>i.rooms).find(i=>i.id===this._roomId)??null}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:v}
        <div class="fp3d-overlay">
          <div class="fp3d-seg">
            <button aria-pressed=${this._wallMode==="auto"} @click=${()=>this._wallMode="auto"}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wallMode==="cut"} @click=${()=>this._wallMode="cut"}>${this.t("walls_cut")}</button>
          </div>
          ${t.floors.length>1&&!this._floorId?_`<div class="fp3d-seg">
                <button aria-pressed=${this._explode} @click=${()=>this.setExplode(!0)}>${this.t("floors_apart")}</button>
                <button aria-pressed=${!this._explode} @click=${()=>this.setExplode(!1)}>${this.t("floors_stacked")}</button>
              </div>`:v}
          ${this._roomId||this._floorId&&t.floors.length>1?_`<button class="fp3d-chip" @click=${()=>this.back()}>${this.t("back")}</button>`:v}
        </div>
      </div>
    `}static styles=[W,ht,H`
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
    `]};customElements.get("floorplan-3d-panel")||customElements.define("floorplan-3d-panel",pe);var he=class extends P{static properties={hass:{attribute:!1},_config:{state:!0},_roomId:{state:!0},_floorId:{state:!0}};data=new dt(this);constructor(){super(),this._roomId=null,this._floorId=null}static getStubConfig(){return{type:"custom:floorplan-3d-card"}}setConfig(t){if(t.height!==void 0&&!(t.height>100))throw new Error("height must be a number of pixels above 100");this._config=t}getCardSize(){return Math.ceil((this._config?.height??420)/50)}getGridOptions(){return{columns:"full",rows:Math.ceil((this._config?.height??420)/56),min_rows:4}}willUpdate(t){t.has("hass")&&this.hass&&this.data.setHass(this.hass)}back(){this._roomId?this._roomId=null:this._config?.floor||(this._floorId=null)}render(){let t=this.data.building,e=this._config?.height??420,n=this._config?.floor??(t&&t.floors.length===1?t.floors[0].id:t?.floors.some(s=>s.id===this._floorId)?this._floorId:null),i=!!this._roomId||!this._config?.floor&&!!this._floorId&&(t?.floors.length??0)>1;return _`<ha-card>
      <div class="fp3d-card-body" style="height:${e}px">
        ${t&&t.floors.some(s=>s.rooms.length)?_`<fp3d-view3d
              .hass=${this.hass}
              .building=${t}
              .floorId=${n}
              .roomId=${this._roomId}
              .wallMode=${this._config?.walls??"auto"}
              .explode=${this._config?.explode??!0}
              .quality=${this._config?.quality??"auto"}
              ?showStats=${this._config?.stats??!1}
              @room-tap=${s=>{s.detail.roomId&&(!n&&!this._config?.floor&&(this._floorId=s.detail.floorId),this._roomId=s.detail.roomId===this._roomId?null:s.detail.roomId)}}
              @floor-tap=${s=>{this._floorId=s.detail.floorId,this._roomId=null}}
              @back=${()=>this.back()}
            ></fp3d-view3d>`:_`<p class="fp3d-card-msg">${this.data.error??(t?A(this.hass,"no_building"):A(this.hass,"loading"))}</p>`}
        ${this._roomId&&t?_`<fp3d-room-panel
              class="fp3d-card-panel"
              .hass=${this.hass}
              .room=${t.floors.flatMap(s=>s.rooms).find(s=>s.id===this._roomId)??null}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:v}
        ${i?_`<button class="fp3d-card-back" @click=${()=>this.back()}>${A(this.hass,"back")}</button>`:v}
      </div>
    </ha-card>`}static styles=[W,H`
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
    `]};if(!customElements.get("floorplan-3d-card")){customElements.define("floorplan-3d-card",he);let r=window;r.customCards=r.customCards??[],r.customCards.push({type:"floorplan-3d-card",name:A(void 0,"card_name"),description:A(void 0,"card_description"),preview:!1})}be();
