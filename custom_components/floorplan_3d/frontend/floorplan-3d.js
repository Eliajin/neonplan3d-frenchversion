var ze=new URL(import.meta.url),Ae=ze.searchParams.get("v"),Ie=r=>new URL(`./fonts/${r}${Ae?`?v=${Ae}`:""}`,ze).href,Re="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD";function Pe(){if(typeof document>"u"||document.getElementById("fp3d-fonts"))return;let r=document.createElement("style");r.id="fp3d-fonts",r.textContent=`
@font-face{font-family:"Figtree";font-style:normal;font-display:swap;font-weight:300 900;src:url(${Ie("figtree.woff2")}) format("woff2");unicode-range:${Re}}
@font-face{font-family:"Bricolage Grotesque";font-style:normal;font-display:swap;font-weight:200 800;src:url(${Ie("bricolage-grotesque.woff2")}) format("woff2");unicode-range:${Re}}`,document.head.append(r)}var Lt=globalThis,Ht=Lt.ShadowRoot&&(Lt.ShadyCSS===void 0||Lt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Xt=Symbol(),Ce=new WeakMap,wt=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==Xt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Ht&&t===void 0){let n=e!==void 0&&e.length===1;n&&(t=Ce.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Ce.set(e,t))}return t}toString(){return this.cssText}},Fe=r=>new wt(typeof r=="string"?r:r+"",void 0,Xt),O=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((n,i,s)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[s+1],r[0]);return new wt(e,r,Xt)},Te=(r,t)=>{if(Ht)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let n=document.createElement("style"),i=Lt.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=e.cssText,r.appendChild(n)}},te=Ht?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let n of t.cssRules)e+=n.cssText;return Fe(e)})(r):r;var{is:ti,defineProperty:ei,getOwnPropertyDescriptor:ni,getOwnPropertyNames:ii,getOwnPropertySymbols:si,getPrototypeOf:ri}=Object,Ot=globalThis,De=Ot.trustedTypes,oi=De?De.emptyScript:"",ai=Ot.reactiveElementPolyfillSupport,$t=(r,t)=>r,ee={toAttribute(r,t){switch(t){case Boolean:r=r?oi:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},He=(r,t)=>!ti(r,t),Le={attribute:!0,type:String,converter:ee,reflect:!1,useDefault:!1,hasChanged:He};Symbol.metadata??=Symbol("metadata"),Ot.litPropertyMetadata??=new WeakMap;var q=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Le){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(t,n,e);i!==void 0&&ei(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){let{get:i,set:s}=ni(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:i,set(o){let a=i?.call(this);s?.call(this,o),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Le}static _$Ei(){if(this.hasOwnProperty($t("elementProperties")))return;let t=ri(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($t("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($t("properties"))){let e=this.properties,n=[...ii(e),...si(e)];for(let i of n)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[n,i]of e)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[e,n]of this.elementProperties){let i=this._$Eu(e,n);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let i of n)e.unshift(te(i))}else t!==void 0&&e.push(te(t));return e}static _$Eu(t,e){let n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Te(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){let n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){let s=(n.converter?.toAttribute!==void 0?n.converter:ee).toAttribute(e,n.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,e){let n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let s=n.getPropertyOptions(i),o=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:ee;this._$Em=i;let a=o.fromAttribute(e,s.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(t,e,n,i=!1,s){if(t!==void 0){let o=this.constructor;if(i===!1&&(s=this[t]),n??=o.getPropertyOptions(t),!((n.hasChanged??He)(s,e)||n.useDefault&&n.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:i,wrapped:s},o){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),s!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[i,s]of n){let{wrapped:o}=s,a=this[i];o!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,s,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(e)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};q.elementStyles=[],q.shadowRootOptions={mode:"open"},q[$t("elementProperties")]=new Map,q[$t("finalized")]=new Map,ai?.({ReactiveElement:q}),(Ot.reactiveElementVersions??=[]).push("2.1.2");var le=globalThis,Oe=r=>r,Vt=le.trustedTypes,Ve=Vt?Vt.createPolicy("lit-html",{createHTML:r=>r}):void 0,Ke="$lit$",J=`lit$${Math.random().toFixed(9).slice(2)}$`,Ge="?"+J,li=`<${Ge}>`,rt=document,Mt=()=>rt.createComment(""),St=r=>r===null||typeof r!="object"&&typeof r!="function",de=Array.isArray,di=r=>de(r)||typeof r?.[Symbol.iterator]=="function",ne=`[ 	
\f\r]`,kt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Be=/-->/g,Ne=/>/g,it=RegExp(`>|${ne}(?:([^\\s"'>=/]+)(${ne}*=${ne}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),We=/'/g,Ue=/"/g,qe=/^(?:script|style|textarea|title)$/i,ce=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),g=ce(1),E=ce(2),hs=ce(3),ot=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),je=new WeakMap,st=rt.createTreeWalker(rt,129);function Ye(r,t){if(!de(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ve!==void 0?Ve.createHTML(t):t}var ci=(r,t)=>{let e=r.length-1,n=[],i,s=t===2?"<svg>":t===3?"<math>":"",o=kt;for(let a=0;a<e;a++){let l=r[a],d,p,h=-1,f=0;for(;f<l.length&&(o.lastIndex=f,p=o.exec(l),p!==null);)f=o.lastIndex,o===kt?p[1]==="!--"?o=Be:p[1]!==void 0?o=Ne:p[2]!==void 0?(qe.test(p[2])&&(i=RegExp("</"+p[2],"g")),o=it):p[3]!==void 0&&(o=it):o===it?p[0]===">"?(o=i??kt,h=-1):p[1]===void 0?h=-2:(h=o.lastIndex-p[2].length,d=p[1],o=p[3]===void 0?it:p[3]==='"'?Ue:We):o===Ue||o===We?o=it:o===Be||o===Ne?o=kt:(o=it,i=void 0);let c=o===it&&r[a+1].startsWith("/>")?" ":"";s+=o===kt?l+li:h>=0?(n.push(d),l.slice(0,h)+Ke+l.slice(h)+J+c):l+J+(h===-2?a:c)}return[Ye(r,s+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},Et=class r{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let s=0,o=0,a=t.length-1,l=this.parts,[d,p]=ci(t,e);if(this.el=r.createElement(d,n),st.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=st.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let h of i.getAttributeNames())if(h.endsWith(Ke)){let f=p[o++],c=i.getAttribute(h).split(J),u=/([.?@])?(.*)/.exec(f);l.push({type:1,index:s,name:u[2],strings:c,ctor:u[1]==="."?se:u[1]==="?"?re:u[1]==="@"?oe:ct}),i.removeAttribute(h)}else h.startsWith(J)&&(l.push({type:6,index:s}),i.removeAttribute(h));if(qe.test(i.tagName)){let h=i.textContent.split(J),f=h.length-1;if(f>0){i.textContent=Vt?Vt.emptyScript:"";for(let c=0;c<f;c++)i.append(h[c],Mt()),st.nextNode(),l.push({type:2,index:++s});i.append(h[f],Mt())}}}else if(i.nodeType===8)if(i.data===Ge)l.push({type:2,index:s});else{let h=-1;for(;(h=i.data.indexOf(J,h+1))!==-1;)l.push({type:7,index:s}),h+=J.length-1}s++}}static createElement(t,e){let n=rt.createElement("template");return n.innerHTML=t,n}};function dt(r,t,e=r,n){if(t===ot)return t;let i=n!==void 0?e._$Co?.[n]:e._$Cl,s=St(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(r),i._$AT(r,e,n)),n!==void 0?(e._$Co??=[])[n]=i:e._$Cl=i),i!==void 0&&(t=dt(r,i._$AS(r,t.values),i,n)),t}var ie=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:n}=this._$AD,i=(t?.creationScope??rt).importNode(e,!0);st.currentNode=i;let s=st.nextNode(),o=0,a=0,l=n[0];for(;l!==void 0;){if(o===l.index){let d;l.type===2?d=new At(s,s.nextSibling,this,t):l.type===1?d=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(d=new ae(s,this,t)),this._$AV.push(d),l=n[++a]}o!==l?.index&&(s=st.nextNode(),o++)}return st.currentNode=rt,i}p(t){let e=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}},At=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,i){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=dt(this,t,e),St(t)?t===_||t==null||t===""?(this._$AH!==_&&this._$AR(),this._$AH=_):t!==this._$AH&&t!==ot&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):di(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==_&&St(this._$AH)?this._$AA.nextSibling.data=t:this.T(rt.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Et.createElement(Ye(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(e);else{let s=new ie(i,this),o=s.u(this.options);s.p(e),this.T(o),this._$AH=s}}_$AC(t){let e=je.get(t.strings);return e===void 0&&je.set(t.strings,e=new Et(t)),e}k(t){de(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,n,i=0;for(let s of t)i===e.length?e.push(n=new r(this.O(Mt()),this.O(Mt()),this,this.options)):n=e[i],n._$AI(s),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let n=Oe(t).nextSibling;Oe(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},ct=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,i,s){this.type=1,this._$AH=_,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=_}_$AI(t,e=this,n,i){let s=this.strings,o=!1;if(s===void 0)t=dt(this,t,e,0),o=!St(t)||t!==this._$AH&&t!==ot,o&&(this._$AH=t);else{let a=t,l,d;for(t=s[0],l=0;l<s.length-1;l++)d=dt(this,a[n+l],e,l),d===ot&&(d=this._$AH[l]),o||=!St(d)||d!==this._$AH[l],d===_?t=_:t!==_&&(t+=(d??"")+s[l+1]),this._$AH[l]=d}o&&!i&&this.j(t)}j(t){t===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},se=class extends ct{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===_?void 0:t}},re=class extends ct{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==_)}},oe=class extends ct{constructor(t,e,n,i,s){super(t,e,n,i,s),this.type=5}_$AI(t,e=this){if((t=dt(this,t,e,0)??_)===ot)return;let n=this._$AH,i=t===_&&n!==_||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==_&&(n===_||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},ae=class{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){dt(this,t)}};var pi=le.litHtmlPolyfillSupport;pi?.(Et,At),(le.litHtmlVersions??=[]).push("3.3.3");var Ze=(r,t,e)=>{let n=e?.renderBefore??t,i=n._$litPart$;if(i===void 0){let s=e?.renderBefore??null;n._$litPart$=i=new At(t.insertBefore(Mt(),s),s,void 0,e??{})}return i._$AI(r),i};var pe=globalThis,L=class extends q{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ze(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ot}};L._$litElement$=!0,L.finalized=!0,pe.litElementHydrateSupport?.({LitElement:L});var hi=pe.litElementPolyfillSupport;hi?.({LitElement:L});(pe.litElementVersions??=[]).push("4.2.2");async function Qe(r){return r.callWS({type:"floorplan_3d/building/get"})}async function Je(r,t){return(await r.callWS({type:"floorplan_3d/building/save",building:t})).revision}function Xe(r,t){return r.connection.subscribeMessage(e=>t(e.revision),{type:"floorplan_3d/building/subscribe"})}async function tn(r,t){return(await r.callWS({type:"floorplan_3d/image/get",image_id:t})).data}async function en(r,t,e){await r.callWS({type:"floorplan_3d/image/set",image_id:t,data:e})}async function nn(r){return(await r.callWS({type:"floorplan_3d/history/list"})).snapshots}async function sn(r){await r.callWS({type:"floorplan_3d/history/snapshot"})}async function rn(r,t){return(await r.callWS({type:"floorplan_3d/history/restore",snapshot_id:t})).revision}var ui={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,tariff:null},on=["wood","oak","tiles","carpet","stone","concrete"];function an(r,t,e){return{id:r,name:t,elevation:e,height:2.5,cut_height:1.15,rooms:[],openings:[],furniture:[],placements:[],background:null}}var ln=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_table","lamp_wall","led_strip","lamp_uplight","sofa","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug","table","table_round","chair","bench","corner_bench","bar_stool","kitchen","kitchen_wall","kitchen_tall","island","sink","stove","dishwasher","fridge","bed","bunk_bed","nightstand","wardrobe","dresser","bathtub","shower","wc","washbasin","washer","dryer","desk","office_chair","tall_cabinet","coat_rack","stairs"],dn={lights:["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip"],living:["sofa","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug"],dining:["table","table_round","chair","bench","corner_bench","bar_stool"],kitchen:["kitchen","kitchen_wall","kitchen_tall","island","sink","stove","dishwasher","fridge"],sleeping:["bed","bunk_bed","nightstand","wardrobe","dresser"],bath:["bathtub","shower","wc","washbasin","washer","dryer"],work:["desk","office_chair","tall_cabinet","coat_rack","stairs"]},cn=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip"]);function Y(r){return cn.has(r)}var fi=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","tv_board","dishwasher","washer","dryer"]);function he(r,t,e,n=0){let i=X(r.points),s=i.x1-i.x0-2*n,o=i.z1-i.z0-2*n,a=[];for(let l=0;l<t;l++)for(let d=0;d<e;d++){let p=[Math.round((i.x0+n+s/e*(d+.5))*1e3)/1e3,Math.round((i.z0+n+o/t*(l+.5))*1e3)/1e3];z(p,r.points)&&a.push(p)}return a}function pn(r,t,e){let n=0;for(let i of r.furniture)!fi.has(i.type)||!z([t,e],mi(i))||(n=Math.max(n,i.h));return n}var hn=new Set([...cn,"tv_board","tv_wall","desk","fridge","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),It={sofa:[2.2,.9,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],fridge:[.6,.65,1.8],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]},ue={door:{width:.9,sill:0,height:2.05},window:{width:1.2,sill:.9,height:1.3},garage:{width:2.5,sill:0,height:2.1}};function Rt(r){r.energy={...ui,...r.energy??{}},r.presence=r.presence??[];for(let t of r.floors){t.placements=t.placements.map(n=>({...n,mount:n.mount??null})),t.furniture=t.furniture.map(n=>({...n,entity:n.entity??null,power:n.power??null}));let e=t.placements.filter(n=>n.entity_id.startsWith("light."));if(e.length){let n={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let i of e){let s=n[i.mount??"ceiling"],[o,a,l]=It[s];t.furniture.push({id:`lamp_${i.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:s,x:i.x,z:i.z,rotation:0,w:o,d:a,h:l,variant:null,entity:i.entity_id,power:null})}t.placements=t.placements.filter(i=>!i.entity_id.startsWith("light."))}t.openings=t.openings.map(n=>({...n,hinge:n.hinge??"left",cover:n.cover??null,contact:n.contact??null,tilt:n.tilt??null}))}return r}function K(r){return`${r}_${Math.random().toString(36).slice(2,10)}`}function U(r){let t=0;for(let e=0;e<r.length;e++){let[n,i]=r[e],[s,o]=r[(e+1)%r.length];t+=n*o-s*i}return t/2}function pt(r){return Math.abs(U(r))}function Z(r){let t=U(r);if(Math.abs(t)<1e-9){let i=r.length||1;return[r.reduce((s,o)=>s+o[0],0)/i,r.reduce((s,o)=>s+o[1],0)/i]}let e=0,n=0;for(let i=0;i<r.length;i++){let[s,o]=r[i],[a,l]=r[(i+1)%r.length],d=s*l-a*o;e+=(s+a)*d,n+=(o+l)*d}return[e/(6*t),n/(6*t)]}function un(r){if(r.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=r[t],[i,s]=r[(t+1)%4];if(Math.abs(e-i)>1e-6&&Math.abs(n-s)>1e-6)return!1}return!0}function X(r){let t=1/0,e=1/0,n=-1/0,i=-1/0;for(let[s,o]of r)t=Math.min(t,s),e=Math.min(e,o),n=Math.max(n,s),i=Math.max(i,o);return{x0:t,z0:e,x1:n,z1:i}}function mi(r){let t=r.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),i=r.w/2,s=r.d/2;return[[-i,-s],[i,-s],[i,s],[-i,s]].map(([o,a])=>[r.x+o*e-a*n,r.z+o*n+a*e])}function z(r,t){let e=!1;for(let n=0,i=t.length-1;n<t.length;i=n++){let[s,o]=t[n],[a,l]=t[i];o>r[1]!=l>r[1]&&r[0]<(a-s)*(r[1]-o)/(l-o)+s&&(e=!e)}return e}var gi=700,me="floorplan_3d.unsaved",fn="0.8.0";function _i(){try{let r=localStorage.getItem(me);return r?JSON.parse(r):null}catch{return null}}function fe(r){try{r?localStorage.setItem(me,JSON.stringify(r)):localStorage.removeItem(me)}catch{}}var ht=class{building=null;error=null;saveState="idle";saveError=null;backendVersion=null;draft=null;host;hass=null;revision=-1;ownRevisions=new Set;unsubscribe=null;saveTimer;pending=null;saving=null;connected=!1;constructor(t){this.host=t,t.addController(this)}setHass(t){let e=this.hass===null;this.hass=t,e&&this.connected&&this.start()}hostConnected(){this.connected=!0,this.hass&&this.start()}hostDisconnected(){this.connected=!1,this.flush(),this.unsubscribe?.(),this.unsubscribe=null}edit(t){this.building=t,this.pending=t,clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{this.flush()},gi),this.host.requestUpdate()}get needsRestart(){return this.saveError&&/extra keys not allowed/i.test(this.saveError)?!0:!!this.backendVersion&&fn!=="dev"&&this.backendVersion!==fn}restoreDraft(){let t=this.draft;this.draft=null,t&&this.edit(Rt(t.building))}discardDraft(){this.draft=null,fe(null),this.host.requestUpdate()}async flush(){clearTimeout(this.saveTimer),this.saving&&await this.saving;let t=this.pending;!t||!this.hass||(this.pending=null,this.saveState="saving",this.host.requestUpdate(),this.saving=(async()=>{try{let e=await Je(this.hass,t);this.ownRevisions.add(e),this.revision=e,this.saveState=this.pending?"saving":"saved",this.saveError=null,fe(null)}catch(e){this.saveState="error",this.saveError=mn(e),fe({building:t,savedAt:Date.now()})}this.host.requestUpdate()})(),await this.saving,this.saving=null)}async start(){if(this.hass&&(await this.reload(),!this.unsubscribe&&this.connected))try{this.unsubscribe=await Xe(this.hass,t=>{this.ownRevisions.has(t)||t===this.revision||this.pending||this.saving||this.reload()})}catch{}}async reload(){if(this.hass){try{let t=await Qe(this.hass);this.building=Rt(t.building),this.backendVersion=t.version??null,this.draft===null&&!this.pending&&(this.draft=_i()),this.revision=t.revision,this.error=null}catch(t){this.error=mn(t)}this.host.requestUpdate()}}};function mn(r){return r&&typeof r=="object"&&"message"in r?String(r.message):String(r)}var gn="floorplan_3d";function bi(r){let t=structuredClone(r);t.energy={...t.energy,grid:null,solar:null,battery:null,battery_soc:null,tariff:null},t.presence=[];for(let e of t.floors)e.placements=[],e.background=null,e.rooms=e.rooms.map(n=>({...n,area_id:null})),e.furniture=e.furniture.map(n=>({...n,entity:null,power:null})),e.openings=e.openings.map(n=>({...n,cover:null,contact:null,tilt:null}));return t}function _n(r,t){return{format:gn,version:1,exported_at:new Date().toISOString(),building:t?bi(r):structuredClone(r)}}function bn(r){let t;try{t=JSON.parse(r)}catch{throw new Error("no JSON")}let e=t,n=e?.format===gn?e.building:t;if(!n||n.version!==1||!Array.isArray(n.floors)||!n.settings)throw new Error("no Floorplan 3D plan");for(let i of n.floors)i.background=null;return Rt(n)}function vn(r,t){let e=URL.createObjectURL(new Blob([t],{type:"application/json"})),n=document.createElement("a");n.href=e,n.download=r,n.click(),setTimeout(()=>URL.revokeObjectURL(e),1e3)}var vi={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},yi=new Set(["temperature","humidity","power"]),xi=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas"]),yn=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],wn=new Set(["light","switch","fan"]);function wi(r){return r.slice(0,r.indexOf("."))}function I(r){return vi[wi(r)]??null}function $n(r){return r!==null&&r!=="scene"&&r!=="script"}function $i(r,t){let e=r.entities?.[t];return e?e.area_id?e.area_id:e.device_id&&r.devices?.[e.device_id]?.area_id||null:null}function ki(r,t){let e=I(t);if(!e)return!1;let n=r.entities?.[t];if(n?.hidden||n?.entity_category)return!1;let i=r.states[t];if(!i)return!1;let s=i.attributes.device_class;return e==="sensor"?!!s&&yi.has(s):e==="binary"?!!s&&xi.has(s):!0}function j(r,t){if(!t||!r.entities)return[];let e=Object.keys(r.entities).filter(i=>$i(r,i)===t&&ki(r,i)),n=r.areas?.[t]?.name;return e.sort((i,s)=>{let o=yn.indexOf(I(i)),a=yn.indexOf(I(s));return o-a||T(r,i,n).localeCompare(T(r,s,n))})}function T(r,t,e){let i=r.states[t]?.attributes.friendly_name??r.entities?.[t]?.name??t;if(e&&i.length>e.length+1&&i.toLowerCase().startsWith(e.toLowerCase()+" ")){let s=i.slice(e.length+1);return s.charAt(0).toUpperCase()+s.slice(1)}return i}function D(r){return!r||r.state==="unavailable"||r.state==="unknown"}function ut(r){if(!r)return!1;switch(I(r.entity_id)){case"light":case"switch":case"fan":case"binary":return r.state==="on";case"cover":return r.state==="open"||r.state==="opening";case"climate":return r.attributes.hvac_action==="heating"||r.attributes.hvac_action==="cooling";case"media":return r.state==="playing";case"lock":return r.state==="unlocked"||r.state==="open";default:return!1}}function Bt(r){if(!r||r.state!=="on")return null;let t=r.attributes,e=typeof t.brightness=="number"?Math.max(.08,t.brightness/255):1,n=t.rgb_color,i;return n&&t.color_mode!=="color_temp"&&t.color_mode!=="brightness"&&t.color_mode!=="onoff"?i=[n[0]/255,n[1]/255,n[2]/255]:typeof t.color_temp_kelvin=="number"?i=Mi(t.color_temp_kelvin):i=[1,.71,.28],{color:i,level:e}}function Mi(r){let t=Math.min(1,Math.max(0,(r-2200)/4300)),e=[1,.66,.26],n=[.78,.9,1];return[e[0]+(n[0]-e[0])*t,e[1]+(n[1]-e[1])*t,e[2]+(n[2]-e[2])*t]}function Nt(r,t,e=null){if(r==="light"&&e){if(e==="floor")return 1.95;if(e==="table")return 1.25;if(e==="wall")return 1.95}switch(r){case"light":case"camera":return Math.max(.5,t-.25);case"cover":return Math.min(2,t-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}function Si(r,t){let e=1/0;for(let n=0;n<t.length;n++){let i=t[n],s=t[(n+1)%t.length],o=s[0]-i[0],a=s[1]-i[1],l=o*o+a*a||1,d=Math.min(1,Math.max(0,((r[0]-i[0])*o+(r[1]-i[1])*a)/l));e=Math.min(e,Math.hypot(r[0]-i[0]-o*d,r[1]-i[1]-a*d))}return e}function kn(r,t,e=[]){if(r.points.length<3||!t.length)return[];let n=r.points,i=n.map(b=>b[0]),s=n.map(b=>b[1]),o=Math.min(...i),a=Math.min(...s),l=Math.max(...i),d=Math.max(...s),p=Math.min(l-o,d-a),h=Math.max(.1,Math.min(.25,p/8)),f=Math.min(.35,p/5),c=Z(n),u=[];for(let b=o+h/2;b<l;b+=h)for(let x=a+h/2;x<d;x+=h){let M=[b,x];if(!z(M,n))continue;let w=Si(M,n);w<f||u.push({p:M,wall:w})}u.length||u.push({p:c,wall:0});let y=[...e],m=[],v=Math.min(.7,p/4);for(let b of t){let x=I(b)==="light",M=u[0].p,w=-1/0;for(let{p:k,wall:A}of u){let N=y.length?Math.min(...y.map(Dt=>Math.hypot(k[0]-Dt[0],k[1]-Dt[1]))):3,W=Math.hypot(k[0]-c[0],k[1]-c[1]),Q=Math.min(N,3)*2;W<v&&!x&&(Q-=10),Q-=x?W*.35:A*1.2,Q>w+1e-9&&(w=Q,M=k)}let $=[Math.round(M[0]*100)/100,Math.round(M[1]*100)/100];y.push($),m.push({entity_id:b,x:$[0],z:$[1],y:null,mount:null})}return m}var Ei=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),Ai=new Set(["garage","gate"]),Ii=new Set(["window","opening"]);function zt(r,t,e=!1){let n=new Map;return t.length&&r.forEach((i,s)=>{let o=e&&t.length===1?t[0]:t[s];o&&n.set(i.id,o)}),n}function Wt(r,t){let e=new Map;for(let n of t)for(let i of n.rooms){let s=n.openings.filter(b=>b.room_id===i.id).sort((b,x)=>b.edge-x.edge||b.offset-x.offset);if(!s.length)continue;let o=j(r,i.area_id),a=b=>r.states[b]?.attributes.device_class,l=o.filter(b=>I(b)==="cover"&&Ei.has(a(b))),d=s.filter(b=>b.type==="window"),p=s.filter(b=>b.type==="door"),h=s.filter(b=>b.type==="garage"),f=zt(d,l,!0),c=zt(d,o.filter(b=>I(b)==="binary"&&Ii.has(a(b)))),u=zt(p,o.filter(b=>I(b)==="binary"&&a(b)==="door")),y=zt(h,o.filter(b=>I(b)==="cover"&&Ai.has(a(b)??""))),m=zt(h,o.filter(b=>I(b)==="binary"&&a(b)==="garage_door")),v=(b,x)=>b==="none"?null:b??x??null;for(let b of s){let x=b.type==="window"?f:b.type==="garage"?y:null,M=b.type==="window"?c:b.type==="garage"?m:u;e.set(b.id,{cover:v(b.cover,x?.get(b.id)),contact:v(b.contact,M.get(b.id)),tilt:b.tilt==="none"?null:b.tilt})}}return e}var Ri=.5;function Ut(r,t,e="window"){let n=d=>!!d&&r.states[d]?.state==="on",i=d=>!!d&&!!r.states[d]&&!D(r.states[d]);if(e==="door")return{open:i(t.contact)?n(t.contact)?1:0:Ri,tilt:0,cover:null};let s=n(t.tilt),o=n(t.contact)&&!s?1:0,a=null,l=t.cover?r.states[t.cover]:void 0;if(l&&!D(l)){let d=l.attributes.current_position;typeof d=="number"?a=1-Math.min(100,Math.max(0,d))/100:a=l.state==="closed"?1:l.state==="opening"||l.state==="closing"?.5:0}else t.cover&&(a=0);return e==="garage"?(a===null&&(a=i(t.contact)&&n(t.contact)?0:1),{open:0,tilt:0,cover:a}):{open:o,tilt:s?1:0,cover:a}}function Pt(r,t){let e=new Map,n=[];for(let o of t){let a=r.entities?.[o]?.device_id??`entity:${o}`,l=e.get(a);l||(e.set(a,l=[]),n.push(a)),l.push(o)}let i=n.map(o=>{let a=e.get(o),l=a.find(d=>!r.entities?.[d]?.name)??a[0];return{primary:l,others:a.filter(d=>d!==l)}}),s=new Map(t.map((o,a)=>[o,a]));return i.sort((o,a)=>s.get(o.primary)-s.get(a.primary))}function _e(r,t){return Pt(r,t).map(e=>e.primary)}var zi={tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i},Pi=new Set(["tv_board","tv_wall"]),xn={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function ge(r,t){return t.startsWith("sensor.")&&r.states[t]?.attributes.device_class==="power"}function Ci(r,t){if(ge(r,t))return t;let e=r.entities?.[t]?.device_id;return!e||!r.entities?null:Object.values(r.entities).find(n=>n.device_id===e&&n.entity_id!==t&&ge(r,n.entity_id))?.entity_id??null}function jt(r,t){let e=new Map;for(let n of t){let i=new Set(n.furniture.flatMap(s=>[s.entity,s.power]).filter(s=>!!s&&s!=="none"));for(let s of n.furniture){let o=s.type in xn,a=o?xn[s.type]:zi[s.type];if(!a&&s.entity==null&&s.power==null)continue;let l=n.rooms.find(c=>c.points.length>=3&&z([s.x,s.z],c.points)),d=l?_e(r,j(r,l.area_id)):[],p=c=>`${c} ${T(r,c)}`,h=s.entity==="none"?null:s.entity??null;if(s.entity==null){let c=d.filter(u=>!i.has(u));if(o){let u=c.filter(y=>I(y)==="light");h=u.find(y=>a.test(p(y)))??u[0]??null}else if(Pi.has(s.type)){let u=c.filter(y=>I(y)==="media");h=u.find(y=>r.states[y]?.attributes.device_class==="tv")??u.find(y=>a?.test(p(y)))??u[0]??null}else a&&(h=c.find(u=>["switch","media","fan"].includes(I(u)??"")&&a.test(p(u)))??null);h&&i.add(h)}let f=s.power==="none"?null:s.power??null;s.power==null&&(f=h?Ci(r,h):null,!f&&a&&l&&!o&&(f=j(r,l.area_id).find(u=>ge(r,u)&&!i.has(u)&&a.test(p(u)))??null),f&&i.add(f)),(h||f)&&e.set(s.id,{entity:h,power:f})}}return e}function Mn(r){if(!r||r.state==="off"||r.state==="standby"||D(r))return null;let t=r.attributes,e=`${t.app_name??""} ${t.source??""} ${t.app_id??""}`.toLowerCase();return e.includes("netflix")?[.9,.04,.08]:e.includes("youtube")?[1,.1,.15]:e.includes("prime")||e.includes("amazon")?[.1,.6,.95]:e.includes("disney")?[.2,.35,1]:e.includes("spotify")?[.12,.85,.4]:e.includes("zdf")||e.includes("ard")||e.includes("mediathek")?[1,.5,.1]:[.22,.88,1]}var C=(r,t,e,n,i="")=>E`<rect class=${i} x=${Math.min(r,e)} y=${Math.min(t,n)} width=${Math.abs(e-r)} height=${Math.abs(n-t)} />`,P=(r,t,e,n,i="")=>E`<line class=${i} x1=${r} y1=${t} x2=${e} y2=${n} />`,H=(r,t,e,n="")=>E`<circle class=${n} cx=${r} cy=${t} r=${e} />`,be=(r,t,e,n,i="")=>E`<ellipse class=${i} cx=${r} cy=${t} rx=${e} ry=${n} />`;function ve(r,t,e){let n=[];for(let i=1;i<e;i++){let s=-r/2+r/e*i;n.push(P(s,t/2,s,t/2-Math.min(.12,t*.3)))}return n}function Sn(r,t,e,n){let i=Math.min(.24,t*.28),s=n?Math.min(.2,r*.12):0,o=[C(-r/2,-t/2,r/2,-t/2+i,"fp3d-sym-fill")];n&&o.push(C(-r/2,-t/2,-r/2+s,t/2,"fp3d-sym-fill"),C(r/2-s,-t/2,r/2,t/2,"fp3d-sym-fill"));let a=r-2*s;for(let l=1;l<e;l++){let d=-r/2+s+a/e*l;o.push(P(d,-t/2+i,d,t/2-.02))}return o}function En(r,t,e){switch(r){case"sofa":return Sn(t,e,Math.max(1,Math.round((t-.4)/.62)),!0);case"armchair":return Sn(t,e,1,!0);case"bench":return[C(-t/2,-e/2,t/2,-e/2+.08,"fp3d-sym-fill")];case"corner_bench":{let n=Math.min(.5,e*.4);return[C(-t/2,-e/2,t/2,-e/2+.08,"fp3d-sym-fill"),C(-t/2,-e/2,-t/2+.08,e/2,"fp3d-sym-fill"),P(-t/2+n,-e/2+n,t/2,-e/2+n),P(-t/2+n,-e/2+n,-t/2+n,e/2)]}case"chair":return[C(-t/2,-e/2,t/2,-e/2+.06,"fp3d-sym-fill")];case"office_chair":return[H(0,.03,Math.min(t,e)*.36),C(-t*.35,-e/2+.02,t*.35,-e/2+.1,"fp3d-sym-fill")];case"bar_stool":case"table_round":return[H(0,0,Math.min(t,e)*.42)];case"stool":return[C(-t/2+.04,-e/2+.04,t/2-.04,e/2-.04)];case"table":case"coffee_table":case"desk":{let n=[C(-t/2+.05,-e/2+.05,t/2-.05,e/2-.05)];return r==="desk"&&n.push(P(-.3,-e/2+.1,.3,-e/2+.1,"fp3d-sym-strong")),n}case"bed":case"bunk_bed":{let n=t>1.2?2:1,i=(t-.2)/n,s=[C(-t/2,-e/2,t/2,-e/2+.07,"fp3d-sym-fill"),P(-t/2,-e/2+(e-.1)*.36,t/2,-e/2+(e-.1)*.36)];for(let o=0;o<n;o++)s.push(C(-t/2+.13+i*o,-e/2+.12,-t/2+.07+i*(o+1),-e/2+.12+Math.min(.4,e*.18)));return s}case"nightstand":case"wardrobe":case"dresser":case"sideboard":case"tall_cabinet":case"kitchen":case"kitchen_wall":case"kitchen_tall":case"shelf":return ve(t,e,r==="nightstand"||r==="tall_cabinet"||r==="kitchen_tall"?1:Math.max(2,Math.round(t/.5)));case"coat_rack":return[C(-t/2,-e/2,t/2,-e/2+.03,"fp3d-sym-fill"),...ve(t,e,Math.max(2,Math.round(t/.5)))];case"island":return[P(-t/2,e/2-.3,t/2,e/2-.3)];case"fridge":return[P(-t/2+.06,e/2-.04,t/2-.06,e/2-.04,"fp3d-sym-strong")];case"stove":{let n=Math.min(t,e)*.14;return[H(-t*.22,-e*.2,n),H(t*.22,-e*.2,n*.8),H(-t*.22,e*.2,n*.8),H(t*.22,e*.2,n)]}case"sink":{let n=Math.min(.5,t-.2);return[C(-n/2,-e/2+.1,n/2,e/2-.08),H(0,-e/2+.06,.025,"fp3d-sym-fill")]}case"dishwasher":return[P(-t/2+.08,e/2-.05,t/2-.08,e/2-.05,"fp3d-sym-strong")];case"washer":case"dryer":return[H(0,.05,Math.min(t,e)*.3),P(-t/2,-e/2+.1,t/2,-e/2+.1)];case"bathtub":return[C(-t/2+.07,-e/2+.07,t/2-.07,e/2-.07),H(-t/2+.14,0,.03,"fp3d-sym-fill")];case"shower":return[P(-t/2,-e/2,t/2,e/2),P(t/2,-e/2,-t/2,e/2),H(0,0,.04)];case"wc":return[C(-t/2,-e/2,t/2,-e/2+Math.min(.18,e*.3),"fp3d-sym-fill"),be(0,e*.1,t*.36,e*.3)];case"washbasin":return[be(0,.03,t*.34,e*.3)];case"tv_board":return[P(-Math.min(t*.4,.72),-e/2+.14,Math.min(t*.4,.72),-e/2+.14,"fp3d-sym-strong"),...ve(t,e,Math.max(2,Math.round(t/.6)))];case"tv_wall":return[P(-t/2,0,t/2,0,"fp3d-sym-strong")];case"lamp_downlight":case"lamp_spot":return[H(0,0,Math.min(t,e)*.45,"fp3d-sym-fill"),H(0,0,Math.min(t,e)*1.4)];case"lamp_panel":return[C(-t/2+.03,-e/2+.03,t/2-.03,e/2-.03,"fp3d-sym-fill")];case"lamp_uplight":case"lamp_ceiling":case"lamp_pendant":case"lamp_floor":case"lamp_table":{let n=Math.min(t,e)/2,i=[H(0,0,n*.9,"fp3d-sym-fill"),H(0,0,n*.3)];if(r==="lamp_ceiling"||r==="lamp_pendant")for(let s=0;s<8;s++){let o=s/8*Math.PI*2;i.push(P(Math.cos(o)*n*1.05,Math.sin(o)*n*1.05,Math.cos(o)*n*1.35,Math.sin(o)*n*1.35))}return i}case"lamp_wall":return[C(-t/2,-e/2,t/2,-e/2+.03,"fp3d-sym-fill"),be(0,.01,t*.4,e*.4)];case"led_strip":return[P(-t/2,0,t/2,0,"fp3d-sym-strong")];case"plant":return[H(0,0,Math.min(t,e)*.46),H(0,0,Math.min(t,e)*.25)];case"rug":return[C(-t/2+.1,-e/2+.1,t/2-.1,e/2-.1)];case"stairs":{let n=Math.max(3,Math.round(e/.26)),i=[];for(let s=1;s<n;s++)i.push(P(-t/2,e/2-e/n*s,t/2,e/2-e/n*s));return i.push(P(0,e/2-.1,0,-e/2+.25,"fp3d-sym-strong"),P(-.15,-e/2+.45,0,-e/2+.25,"fp3d-sym-strong"),P(.15,-e/2+.45,0,-e/2+.25,"fp3d-sym-strong")),i}default:return _}}var Fi=.05,Ti=.2,Di=.12;function Li(r){let t=[];return r.forEach((e,n)=>{let i=e.points;if(i.length<3)return;let s=U(i)>=0;for(let o=0;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length],d=l[0]-a[0],p=l[1]-a[1],h=Math.hypot(d,p);if(h<.05)continue;let f=[d/h,p/h],c=s?[f[1],-f[0]]:[-f[1],f[0]];(f[1]<-1e-9||Math.abs(f[1])<=1e-9&&f[0]<0)&&(f=[-f[0],-f[1]]);let u=[-f[1],f[0]],y=a[0]*f[0]+a[1]*f[1],m=l[0]*f[0]+l[1]*f[1];t.push({room:n,index:o,dir:f,normal:u,offset:a[0]*u[0]+a[1]*u[1],outside:c[0]*u[0]+c[1]*u[1]>0?1:-1,t0:Math.min(y,m),t1:Math.max(y,m)})}}),t}function An(r,t=.6){let e=Li(r),n=e.map((p,h)=>h),i=p=>n[p]===p?p:n[p]=i(n[p]),s=[];for(let p=0;p<e.length;p++)for(let h=p+1;h<e.length;h++){let f=e[p],c=e[h];if(f.room===c.room||Math.abs(f.dir[0]*c.dir[1]-f.dir[1]*c.dir[0])>Fi||f.outside===c.outside)continue;let u=(c.offset-f.offset)*f.outside;u>t||u<-Di||Math.abs(u)<1e-4||Math.min(f.t1,c.t1)-Math.max(f.t0,c.t0)<Ti||(s.push(Math.round(u*1e3)/1e3),n[i(p)]=i(h))}if(!s.length)return{rooms:r.map(p=>({...p,points:p.points.map(h=>[h[0],h[1]])})),gaps:s};let o=new Map;e.forEach((p,h)=>{let f=i(h);if(f===h&&!e.some((u,y)=>y!==h&&i(y)===h))return;let c=o.get(f)??[];c.push(h),o.set(f,c)});let a=r.map(p=>p.points.map(()=>new Map));for(let[p,h]of o){let f=h.reduce((c,u)=>c+e[u].offset,0)/h.length;for(let c of h){let u=e[c],y=f-u.offset,m=[u.normal[0]*y,u.normal[1]*y],v=r[u.room].points.length;a[u.room][u.index].set(p,m),a[u.room][(u.index+1)%v].set(p,m)}}let l=p=>Math.round(p*1e3)/1e3;return{rooms:r.map((p,h)=>({...p,points:p.points.map((f,c)=>{let u=f[0],y=f[1];for(let[m,v]of a[h][c].values())u+=m,y+=v;return[l(u),l(y)]})})),gaps:s}}function In(r){let t=r.filter(n=>n>.04).sort((n,i)=>n-i);if(!t.length)return null;let e=t[Math.floor(t.length/2)];return Math.min(.5,Math.max(.08,Math.round(e*100)/100))}var V=(r,t)=>[r[0]-t[0],r[1]-t[1]],ft=(r,t)=>[r[0]+t[0],r[1]+t[1]],tt=(r,t)=>[r[0]*t,r[1]*t],Kt=(r,t)=>r[0]*t[0]+r[1]*t[1],Ct=(r,t)=>r[0]*t[1]-r[1]*t[0],Gt=r=>Math.hypot(r[0],r[1]),at=r=>{let t=Gt(r)||1;return[r[0]/t,r[1]/t]},Rn=r=>[-r[1],r[0]],zn=r=>[r[1],-r[0]];function Ft(r,t){let e=t.eps??.005,n=[],i=[],s=c=>{for(let u=0;u<i.length;u++)if(Math.abs(i[u][0]-c[0])<=e&&Math.abs(i[u][1]-c[1])<=e)return u;return i.push([c[0],c[1]]),i.length-1},o=[];for(let c of r){let u=c.points;if(u.length<3||Math.abs(U(u))<1e-6)continue;let y=U(u)>0,m=u.map(s);for(let v=0;v<u.length;v++){let b=m[v],x=m[(v+1)%u.length];b!==x&&o.push(y?{u:b,v:x,room:c.id,edge:v,forward:!0}:{u:x,v:b,room:c.id,edge:v,forward:!1})}}let a=[];for(let c of o){let u=i[c.u],y=i[c.v],m=V(y,u),v=Gt(m),b=tt(m,1/v),x=[];for(let w=0;w<i.length;w++){if(w===c.u||w===c.v)continue;let $=V(i[w],u),k=Kt($,b);k<=e||k>=v-e||Math.abs(Ct(b,$))<=e&&x.push({t:k,id:w})}x.sort((w,$)=>w.t-$.t);let M=[{t:0,id:c.u},...x,{t:v,id:c.v}];for(let w=0;w+1<M.length;w++){let $=M[w],k=M[w+1],A=c.forward?$.t:v-k.t,N=c.forward?k.t:v-$.t;a.push({u:$.id,v:k.id,room:c.room,edge:c.edge,t0:A,t1:N})}}let l=new Map;for(let c of a){let u=c.u<c.v?`${c.u}-${c.v}`:`${c.v}-${c.u}`,y=l.get(u);y||l.set(u,y=[]),y.push(c)}let d=c=>({room_id:c.room,edge:c.edge,t0:c.t0,t1:c.t1}),p=[];for(let c of l.values()){let u=c[0],y=c.find(m=>m!==u&&m.u===u.v&&m.v===u.u&&m.room!==u.room);for(let m of c)m!==u&&m!==y&&m.room!==u.room&&n.push(`overlap:${u.room}:${m.room}`);y?p.push({a:u.u,b:u.v,left:t.interior/2,right:t.interior/2,exterior:!1,roomLeft:u.room,roomRight:y.room,sources:[d(u),d(y)]}):p.push({a:u.u,b:u.v,left:0,right:t.exterior,exterior:!0,roomLeft:u.room,roomRight:null,sources:[d(u)]})}p=Oi(p,i);let h=Bi(p,i);return{walls:p.map((c,u)=>{let y=i[c.a],m=i[c.b],v=h.get(`${u}:a`),b=h.get(`${u}:b`),x=Ni([v.right,b.left,m,b.right,v.left,y],1e-6);return{id:Hi(y,m),a:[y[0],y[1]],b:[m[0],m[1]],left:c.left,right:c.right,exterior:c.exterior,roomLeft:c.roomLeft,roomRight:c.roomRight,sources:c.sources,footprint:x}}),warnings:[...new Set(n)]}}function Hi(r,t){let e=s=>Math.round(s*100),[n,i]=r[0]<t[0]||r[0]===t[0]&&r[1]<=t[1]?[r,t]:[t,r];return`w_${e(n[0])}_${e(n[1])}_${e(i[0])}_${e(i[1])}`}function Pn(r){return{...r,a:r.b,b:r.a,left:r.right,right:r.left,roomLeft:r.roomRight,roomRight:r.roomLeft}}function Oi(r,t){let e=r.slice(),n=!0;for(;n;){n=!1;let i=new Map;e.forEach((s,o)=>{for(let a of[s.a,s.b]){let l=i.get(a);l||i.set(a,l=[]),l.push(o)}});for(let[s,o]of i){if(o.length!==2)continue;let a=e[o[0]],l=e[o[1]];if(a.b!==s&&(a=Pn(a)),l.a!==s&&(l=Pn(l)),a.a===l.b)continue;let d=at(V(t[a.b],t[a.a])),p=at(V(t[l.b],t[l.a]));if(Math.abs(Ct(d,p))>1e-6||Kt(d,p)<=0||a.exterior!==l.exterior||a.roomLeft!==l.roomLeft||a.roomRight!==l.roomRight||Math.abs(a.left-l.left)>1e-9||Math.abs(a.right-l.right)>1e-9)continue;let h={...a,b:l.b,sources:Vi(a.sources,l.sources)},f=e.filter((c,u)=>u!==o[0]&&u!==o[1]);f.push(h),e.length=0,e.push(...f),n=!0;break}}return e}function Vi(r,t){let e=r.map(n=>({...n}));for(let n of t){let i=e.find(s=>s.room_id===n.room_id&&s.edge===n.edge&&(Math.abs(s.t1-n.t0)<1e-6||Math.abs(n.t1-s.t0)<1e-6));i?(i.t0=Math.min(i.t0,n.t0),i.t1=Math.max(i.t1,n.t1)):e.push({...n})}return e}function Bi(r,t){let e=new Map;r.forEach((i,s)=>{let o=at(V(t[i.b],t[i.a])),a=[[i.a,{key:`${s}:a`,d:o,left:i.left,right:i.right,angle:Math.atan2(o[1],o[0])}],[i.b,{key:`${s}:b`,d:tt(o,-1),left:i.right,right:i.left,angle:Math.atan2(-o[1],-o[0])}]];for(let[l,d]of a){let p=e.get(l);p||e.set(l,p=[]),p.push(d)}});let n=new Map;for(let[i,s]of e){let o=t[i];s.sort((d,p)=>d.angle-p.angle);let a=d=>({left:ft(o,tt(Rn(d.d),d.left)),right:ft(o,tt(zn(d.d),d.right))});for(let d of s)n.set(d.key,a(d));if(s.length<2)continue;let l=4*Math.max(...s.map(d=>Math.max(d.left,d.right)))+1e-9;for(let d=0;d<s.length;d++){let p=s[d],h=s[(d+1)%s.length],f=ft(o,tt(Rn(p.d),p.left)),c=ft(o,tt(zn(h.d),h.right)),u=Ct(p.d,h.d);if(Math.abs(u)<1e-4)continue;let y=Ct(V(c,f),h.d)/u,m=ft(f,tt(p.d,y));Gt(V(m,o))>l||(n.get(p.key).left=m,n.get(h.key).right=m)}}return n}function Ni(r,t){let e=r.filter((i,s)=>Gt(V(i,r[(s+1)%r.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let i=0;i<e.length;i++){let s=e[(i+e.length-1)%e.length],o=e[i],a=e[(i+1)%e.length],l=V(o,s),d=V(a,o);if(Math.abs(Ct(at(l),at(d)))<1e-7&&Kt(l,d)>0){e=e.filter((p,h)=>h!==i),n=!0;break}}}return e}function qt(r,t,e){let n=r.points[t],i=r.points[(t+1)%r.points.length],s=at(V(i,n));return ft(n,tt(s,e))}function Cn(r,t,e,n){for(let i of r){if(!i.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let o=qt(t,e,n);return{wall:i,s:Kt(V(o,i.a),at(V(i.b,i.a)))}}return null}var Fn={view:"3D",editor:"Editor",all_floors:"Alle Etagen",no_building:"Noch kein Grundriss vorhanden.",no_building_admin:"Noch kein Grundriss vorhanden. Im Editor zeichnest du deine erste Etage.",open_editor:"Editor \xF6ffnen",loading:"L\xE4dt \u2026",load_error:"Laden fehlgeschlagen",saving:"Speichert \u2026",saved:"Gespeichert",save_error:"Speichern fehlgeschlagen",save_failed_detail:"Speichern fehlgeschlagen: {error}. Deine \xC4nderungen bleiben in diesem Browser erhalten.",needs_restart:"Eine neue Version von Floorplan 3D ist installiert, aber Home Assistant l\xE4uft noch mit {version}. Bitte Home Assistant neu starten \u2013 bis dahin kann das Speichern fehlschlagen.",needs_restart_old:"Eine neue Version von Floorplan 3D ist installiert, aber Home Assistant l\xE4uft noch mit einer \xE4lteren. Bitte Home Assistant neu starten \u2013 bis dahin schl\xE4gt das Speichern fehl.",draft_found:"Nicht gespeicherte \xC4nderungen vom {time} gefunden.",draft_restore:"\xDCbernehmen und speichern",draft_discard:"Verwerfen",walls_auto:"W\xE4nde hoch",walls_cut:"Schnitt",reset_view:"\xDCbersicht",back:"Zur\xFCck",floor:"Etage",floors:"Etagen",add_floor:"Etage hinzuf\xFCgen",floor_name:"Name",elevation:"H\xF6he \xFCber Boden (m)",height:"Raumh\xF6he (m)",cut_height:"Schnitth\xF6he (m)",delete_floor:"Etage l\xF6schen",delete_floor_confirm:"Etage \u201E{name}\u201C mit allen R\xE4umen l\xF6schen?",move_up:"Nach oben",move_down:"Nach unten",default_floor:"Erdgeschoss",new_floor:"Etage {n}",tool_select:"Ausw\xE4hlen",tool_rect:"Rechteck",tool_polygon:"Freie Form",undo:"R\xFCckg\xE4ngig",redo:"Wiederholen",fit:"Alles zeigen",room:"Raum",rooms:"R\xE4ume",room_name:"Name",area:"Bereich",no_area:"Kein Bereich",material:"Boden",x:"X (m)",z:"Y (m)",width:"Breite (m)",depth:"Tiefe (m)",points:"Eckpunkte",delete_point:"Punkt l\xF6schen",duplicate:"Duplizieren",delete:"L\xF6schen",new_room:"Raum {n}",settings:"Einstellungen",spots_place:"Spots setzen",spots_type:"Leuchte",spots_cols:"Spalten (links\u2013rechts)",spots_rows:"Reihen (vorne\u2013hinten)",spots_add:"{n} Leuchten setzen",spots_placed:"{n} Leuchten gesetzt.",spots_hint:"Alle Leuchten folgen dem gew\xE4hlten Licht (z. B. Spots an einem Dimmer). Einzeln verschieben und ein anderes Licht w\xE4hlen geht danach wie bei jedem M\xF6bel.",cancel:"Abbrechen",backup:"Sicherung",backup_history:"Wiederherstellungspunkte",backup_none:"Noch keine. Beim Bearbeiten entsteht h\xF6chstens alle 10 Minuten ein Punkt.",backup_summary:"{rooms} R\xE4ume, {furniture} M\xF6bel",backup_restore:"Wiederherstellen",backup_restore_confirm:"Den Stand vom {time} wiederherstellen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_restored:"Wiederhergestellt.",backup_file:"Datei",backup_export:"Exportieren",backup_export_share:"Als Vorlage teilen",backup_export_share_hint:"Ohne Bereiche, Ger\xE4te, Sensoren und Bilder \u2013 zum Weitergeben an andere.",backup_import:"Importieren \u2026",backup_import_confirm:"Den ganzen Grundriss durch die Datei ersetzen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_import_error:"Die Datei ist kein Floorplan-3D-Plan ({error}).",backup_imported:"Importiert.",backup_hint:"Hintergrundbilder sind nicht in der Datei enthalten.",wall_exterior:"Au\xDFenwand (m)",wall_interior:"Innenwand (m)",grid:"Raster (m)",background:"Vorlage (Grundriss-Bild)",background_upload:"Bild w\xE4hlen \u2026",background_width:"Breite im Plan (m)",background_opacity:"Deckkraft",background_remove:"Vorlage entfernen",hint_select:"Raum antippen zum Ausw\xE4hlen \xB7 Ecken ziehen \xB7 \u201E+\u201C auf einer Kante f\xFCgt einen Punkt ein \xB7 Entf l\xF6scht \xB7 Strg+Z",hint_rect:"Ziehen, um ein Rechteck zu zeichnen",hint_polygon:"Punkte setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",hint_empty:"Lege zuerst eine Etage an.",area_m2:"{a} m\xB2",overlap_warning:"R\xE4ume \xFCberlappen sich \u2013 die W\xE4nde dort sind unvollst\xE4ndig.",read_only:"Nur Administratoren k\xF6nnen den Grundriss bearbeiten.",mat_wood:"Holz",mat_oak:"Eiche",mat_tiles:"Fliesen",mat_carpet:"Teppich",mat_stone:"Stein",mat_concrete:"Beton",card_name:"Floorplan 3D",card_description:"Deine Wohnung in 3D (Neon).",stats:"{calls} Draw-Calls \xB7 {tris} Dreiecke",stats_fps:"{fps} B/s (langsamstes Bild {ms} ms)",stats_idle:"Ruhe (0 B/s)",stats_low:"Stufe Tablet, Pixeldichte {r}",stats_full:"volle Stufe, Pixeldichte {r}",floors_apart:"Auseinander",floors_stacked:"Gestapelt",floor_rooms_one:"1 Raum",floor_rooms:"{n} R\xE4ume",quality:"Qualit\xE4t",quality_auto:"Auto",quality_low:"Tablet",quality_high:"Hoch",state_on:"An",state_off:"Aus",state_open:"Offen",state_closed:"Zu",state_opening:"\xD6ffnet",state_closing:"Schlie\xDFt",state_playing:"Spielt",state_paused:"Pause",state_idle:"Bereit",state_locked:"Verriegelt",state_unlocked:"Entriegelt",state_detected:"Erkannt",state_clear:"Frei",state_unavailable:"Nicht verf\xFCgbar",state_heat:"Heizen",state_cool:"K\xFChlen",state_auto:"Automatik",state_heat_cool:"Heizen/K\xFChlen",state_dry:"Entfeuchten",state_fan_only:"L\xFCften",devices:"Ger\xE4te",devices_none_area:"Verkn\xFCpfe den Raum mit einem Bereich, dann erscheinen dessen Ger\xE4te hier.",devices_none:"Im Bereich gibt es keine passenden Ger\xE4te.",devices_place_all:"Alle automatisch platzieren",devices_place:"Platzieren",devices_remove:"Entfernen",devices_hint:"Platzierte Ger\xE4te erscheinen in 3D. Im Plan lassen sie sich verschieben.",panel_lights:"Licht",panel_covers:"Rolll\xE4den",panel_climate:"Heizung",panel_media:"Medien",panel_switches:"Schalter",panel_sensors:"Sensoren",panel_scenes:"Szenen & Skripte",panel_cameras:"Kameras",camera_live:"Livebild \xF6ffnen",state_recording:"Nimmt auf",state_streaming:"Streamt",panel_all_off:"Alle aus",panel_no_area:"Dieser Raum ist mit keinem Bereich verkn\xFCpft. Im Editor kannst du ihn verkn\xFCpfen.",panel_empty:"Im Bereich gibt es keine steuerbaren Ger\xE4te.",close:"Schlie\xDFen",brightness:"Helligkeit",color_temp:"Farbtemperatur",color:"Farbe",position:"Position",cover_open:"Auf",cover_stop:"Stopp",cover_close:"Zu",target_temp:"Soll",current_temp:"Ist",temp_down:"K\xE4lter",temp_up:"W\xE4rmer",volume:"Lautst\xE4rke",play_pause:"Wiedergabe/Pause",previous:"Zur\xFCck",next:"Weiter",run:"Ausf\xFChren",details:"Details",hold_hint:"Antippen schaltet \xB7 lange dr\xFCcken \xF6ffnet Details",tool_door:"T\xFCr",tool_window:"Fenster",tool_garage:"Garagentor",device:"Ger\xE4t",lamp_mount:"Lampe",lamp_ceiling:"Deckenleuchte",lamp_floor:"Stehlampe",lamp_table:"Tischlampe",lamp_wall:"Wandleuchte",marker_height:"H\xF6he des Symbols (m)",height_auto:"H\xF6he automatisch",device_centre:"In Raummitte",lights_spread:"Deckenlampen gleichm\xE4\xDFig verteilen",devices_search:"Ger\xE4te suchen \u2026",devices_more:"+{n} weitere",devices_less:"weniger",panel_more:"Weitere anzeigen ({n})",panel_less:"Weniger anzeigen",gaps_close:"L\xFCcken schlie\xDFen",gaps_hint:"R\xE4ume mit bis zu 60 cm Abstand an einer gemeinsamen Wand zusammenf\xFChren; der Abstand wird die Innenwandst\xE4rke.",gaps_none:"Keine L\xFCcken zwischen R\xE4umen gefunden.",gaps_closed:"{n} Stellen geschlossen.",gaps_closed_wall:"{n} Stellen geschlossen, Innenwand jetzt {t} m.",fps:"FPS",fps_title:"Leistungsanzeige (Bilder pro Sekunde)",hint_garage:"Auf eine Wand tippen, um ein Garagentor einzusetzen",opening_garage:"Garagentor",garage_hint:"Das Tor folgt einem Garagen-Cover (Position oder offen/zu) oder einem Garagentor-Kontakt aus dem Bereich des Raums.",door_hint:"Mit T\xFCrkontakt schwenkt das T\xFCrblatt auf, ohne Sensor steht es halb offen.",hint_door:"Auf eine Wand tippen, um eine T\xFCr einzusetzen",hint_window:"Auf eine Wand tippen, um ein Fenster einzusetzen",opening_door:"T\xFCr",opening_window:"Fenster",opening_type:"Art",opening_position:"Mitte ab Ecke (m)",sill:"Br\xFCstung (m)",opening_height:"H\xF6he (m)",hinge:"Anschlag (vom Raum aus)",hinge_left:"Links",hinge_right:"Rechts",cover_entity:"Rollladen",contact_entity:"Kontakt",tilt_entity:"Kipp-Sensor",entity_auto:"Automatisch ({name})",entity_auto_none:"Automatisch (keiner gefunden)",entity_none:"Keiner",opening_hint:"Terrassent\xFCr: Fenster mit Br\xFCstung 0. Automatisch nimmt Rolll\xE4den und Kontakte aus dem Bereich des Raums.",furniture:"M\xF6bel",furniture_add:"M\xF6bel hinzuf\xFCgen",furniture_type:"M\xF6belst\xFCck",rotation:"Drehung (\xB0)",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"H\xF6he (m)",furn_sofa:"Sofa",furn_armchair:"Sessel",furn_table:"Tisch",furn_chair:"Stuhl",furn_bed:"Bett",furn_nightstand:"Nachttisch",furn_wardrobe:"Schrank",furn_shelf:"Regal",furn_kitchen:"K\xFCchenzeile",furn_fridge:"K\xFChlschrank",furn_stove:"Herd",furn_sink:"Sp\xFCle",furn_bathtub:"Badewanne",furn_shower:"Dusche",furn_wc:"WC",furn_washbasin:"Waschtisch",furn_desk:"Schreibtisch",furn_tv_board:"TV-Board",furn_plant:"Pflanze",furn_rug:"Teppich",furn_stairs:"Treppe",furn_lamp_ceiling:"Deckenleuchte",furn_lamp_downlight:"Einbauspot",furn_lamp_spot:"Aufbau-Spot",furn_lamp_panel:"LED-Panel",furn_lamp_uplight:"Deckenfluter",furn_lamp_pendant:"Pendelleuchte",furn_lamp_floor:"Stehlampe",furn_lamp_table:"Tischlampe",furn_lamp_wall:"Wandleuchte",furn_led_strip:"LED-Streifen",furn_group_lights:"Leuchten",furn_entity_light:"Licht",lamp_hint:"Antippen in 3D schaltet die Leuchte, lange dr\xFCcken \xF6ffnet die Details. Tischlampen stehen automatisch auf dem M\xF6bel darunter.",lamp_hint_pendant:"H\xF6he = Abh\xE4ngung unter der Decke. Antippen in 3D schaltet, lange dr\xFCcken \xF6ffnet die Details.",markers:"Symbole",markers_none:"Keine",markers_important:"Wichtige",markers_all:"Alle",furn_stool:"Hocker",furn_coffee_table:"Couchtisch",furn_tv_wall:"Fernseher (Wand)",furn_sideboard:"Sideboard",furn_table_round:"Runder Tisch",furn_bench:"Sitzbank",furn_corner_bench:"Eckbank",furn_bar_stool:"Barhocker",furn_kitchen_wall:"Oberschrank",furn_kitchen_tall:"Hochschrank mit Backofen",furn_island:"Kochinsel",furn_dishwasher:"Sp\xFClmaschine",furn_bunk_bed:"Etagenbett",furn_dresser:"Kommode",furn_washer:"Waschmaschine",furn_dryer:"Trockner",furn_office_chair:"B\xFCrostuhl",furn_tall_cabinet:"Hochschrank",furn_coat_rack:"Garderobe",furn_group_living:"Wohnen",furn_group_dining:"Essen",furn_group_kitchen:"K\xFCche",furn_group_sleeping:"Schlafen",furn_group_bath:"Bad & Hauswirtschaft",furn_group_work:"Arbeiten & Sonstiges",furn_entity:"Ger\xE4t (Schalter, Steckdose \u2026)",furn_entity_tv:"Fernseher (Media-Player)",furn_power:"Leistungssensor (W)",furn_links_hint:"Mit Leistungssensor zeigt das M\xF6bel seine Watt und bekommt eine Energie-Leitung.",furn_links_hint_tv:"Der Bildschirm leuchtet, solange der Fernseher an ist, in der Farbe der App (Netflix, YouTube \u2026); das Schild zeigt App oder Titel.",stairs_hint:"Die Treppe steigt nach hinten an (weg von der markierten Vorderkante) und \xF6ffnet die Decke der Etage dar\xFCber.",floor_lights:"{n} Licht an",floor_open:"{n} offen",floor_persons:"{n} Pers.",energy_consumption:"Verbrauch",energy_grid_import:"Netzbezug",energy_grid_export:"Einspeisung",energy_solar:"Solar",energy_battery:"Akku",energy_tariff:"Tarif",energy:"Energie",energy_meter:"Z\xE4hlerplatz",energy_meter_set:"Z\xE4hlerplatz setzen",energy_meter_remove:"Z\xE4hlerplatz entfernen",energy_meter_hint:"Tippe im Plan auf die Stelle des Z\xE4hlers bzw. Hausanschlusses.",energy_grid:"Netz (W, + = Bezug)",energy_solar_sensor:"Solar-Erzeugung (W)",energy_battery_sensor:"Akku-Leistung (W, + = Entladen)",energy_battery_soc:"Akku-Ladestand (%)",energy_tariff_sensor:"Tarif (z. B. \u20AC/kWh)",energy_invert:"Vorzeichen umkehren",energy_hint:"Verbraucher sind platzierte Ger\xE4te mit Leistungssensor (W) \u2013 der Sensor selbst oder einer vom selben Ger\xE4t.",tool_meter:"Z\xE4hler",hint_meter:"Auf die Stelle des Z\xE4hlers tippen",presence:"Anwesenheit",presence_hint:"Raumsensor je Person (z. B. ESPresense, Bermuda): sein Zustand nennt den Raum oder Bereich.",presence_sensor:"Raumsensor",no_persons:"In Home Assistant gibt es keine Personen."},Wi={view:"3D",editor:"Editor",all_floors:"All floors",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",save_failed_detail:"Saving failed: {error}. Your changes are kept in this browser.",needs_restart:"A new version of Floorplan 3D is installed, but Home Assistant still runs {version}. Please restart Home Assistant \u2013 until then saving may fail.",needs_restart_old:"A new version of Floorplan 3D is installed, but Home Assistant still runs an older one. Please restart Home Assistant \u2013 until then saving fails.",draft_found:"Unsaved changes from {time} found.",draft_restore:"Restore and save",draft_discard:"Discard",walls_auto:"Tall walls",walls_cut:"Cut",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",add_floor:"Add floor",floor_name:"Name",elevation:"Elevation (m)",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",default_floor:"Ground floor",new_floor:"Floor {n}",tool_select:"Select",tool_rect:"Rectangle",tool_polygon:"Free shape",undo:"Undo",redo:"Redo",fit:"Show all",room:"Room",rooms:"Rooms",room_name:"Name",area:"Area",no_area:"No area",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",delete_point:"Delete corner",duplicate:"Duplicate",delete:"Delete",new_room:"Room {n}",settings:"Settings",spots_place:"Place spots",spots_type:"Lamp",spots_cols:"Columns (left\u2013right)",spots_rows:"Rows (front\u2013back)",spots_add:"Place {n} lamps",spots_placed:"{n} lamps placed.",spots_hint:"All lamps follow the chosen light (e.g. spots on one dimmer). Afterwards each can be moved and linked to another light like any furniture.",cancel:"Cancel",backup:"Backup",backup_history:"Restore points",backup_none:"None yet. While editing, a restore point is kept at most every 10 minutes.",backup_summary:"{rooms} rooms, {furniture} items",backup_restore:"Restore",backup_restore_confirm:"Restore the state of {time}? The current state is kept as a restore point.",backup_restored:"Restored.",backup_file:"File",backup_export:"Export",backup_export_share:"Share as template",backup_export_share_hint:"Without areas, devices, sensors and images \u2013 for passing on to others.",backup_import:"Import \u2026",backup_import_confirm:"Replace the whole plan with the file? The current state is kept as a restore point.",backup_import_error:"The file is no Floorplan 3D plan ({error}).",backup_imported:"Imported.",backup_hint:"Background images are not part of the file.",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 Del deletes \xB7 Ctrl+Z",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_empty:"Add a floor first.",area_m2:"{a} m\xB2",overlap_warning:"Rooms overlap \u2013 walls there are incomplete.",read_only:"Only administrators can edit the floor plan.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"Floorplan 3D",card_description:"Your home in 3D (neon).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} fps (slowest frame {ms} ms)",stats_idle:"At rest (0 fps)",stats_low:"tablet level, pixel ratio {r}",stats_full:"full level, pixel ratio {r}",floors_apart:"Apart",floors_stacked:"Stacked",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",devices_none_area:"Link the room to an area and its devices appear here.",devices_none:"The area has no suitable devices.",devices_place_all:"Place all automatically",devices_place:"Place",devices_remove:"Remove",devices_hint:"Placed devices appear in 3D. Drag them in the plan to move them.",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",panel_cameras:"Cameras",camera_live:"Open live view",state_recording:"Recording",state_streaming:"Streaming",panel_all_off:"All off",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"The area has no controllable devices.",close:"Close",brightness:"Brightness",color_temp:"Colour temperature",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details",tool_door:"Door",tool_window:"Window",tool_garage:"Garage door",device:"Device",lamp_mount:"Lamp",lamp_ceiling:"Ceiling light",lamp_floor:"Floor lamp",lamp_table:"Table lamp",lamp_wall:"Wall light",marker_height:"Marker height (m)",height_auto:"Automatic height",device_centre:"To room centre",lights_spread:"Spread ceiling lights evenly",devices_search:"Search devices \u2026",devices_more:"+{n} more",devices_less:"less",panel_more:"Show more ({n})",panel_less:"Show less",gaps_close:"Close gaps",gaps_hint:"Join rooms up to 60 cm apart at one shared wall; the gap becomes the interior wall thickness.",gaps_none:"No gaps between rooms found.",gaps_closed:"{n} places closed.",gaps_closed_wall:"{n} places closed, interior wall now {t} m.",fps:"FPS",fps_title:"Performance display (frames per second)",hint_garage:"Tap a wall to add a garage door",opening_garage:"Garage door",garage_hint:"The door follows a garage cover (position or open/closed) or a garage door contact of the room's area.",door_hint:"With a door contact the leaf swings open; without a sensor it stands half open.",hint_door:"Tap a wall to add a door",hint_window:"Tap a wall to add a window",opening_door:"Door",opening_window:"Window",opening_type:"Type",opening_position:"Centre from corner (m)",sill:"Sill height (m)",opening_height:"Height (m)",hinge:"Hinge (seen from the room)",hinge_left:"Left",hinge_right:"Right",cover_entity:"Blind",contact_entity:"Contact",tilt_entity:"Tilt sensor",entity_auto:"Automatic ({name})",entity_auto_none:"Automatic (none found)",entity_none:"None",opening_hint:"Terrace door: a window with sill 0. Automatic uses the blinds and contacts of the room's area.",furniture:"Furniture",furniture_add:"Add furniture",furniture_type:"Item",rotation:"Rotation (\xB0)",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Height (m)",furn_sofa:"Sofa",furn_armchair:"Armchair",furn_table:"Table",furn_chair:"Chair",furn_bed:"Bed",furn_nightstand:"Nightstand",furn_wardrobe:"Wardrobe",furn_shelf:"Shelf",furn_kitchen:"Kitchen unit",furn_fridge:"Fridge",furn_stove:"Stove",furn_sink:"Sink",furn_bathtub:"Bathtub",furn_shower:"Shower",furn_wc:"WC",furn_washbasin:"Washbasin",furn_desk:"Desk",furn_tv_board:"TV board",furn_plant:"Plant",furn_rug:"Rug",furn_stairs:"Stairs",furn_lamp_ceiling:"Ceiling light",furn_lamp_downlight:"Downlight",furn_lamp_spot:"Surface spot",furn_lamp_panel:"LED panel",furn_lamp_uplight:"Floor uplight",furn_lamp_pendant:"Pendant light",furn_lamp_floor:"Floor lamp",furn_lamp_table:"Table lamp",furn_lamp_wall:"Wall light",furn_led_strip:"LED strip",furn_group_lights:"Lights",furn_entity_light:"Light",lamp_hint:"Tap the lamp in 3D to switch it, long press for details. Table lamps stand on the furniture below them.",lamp_hint_pendant:"Height = drop below the ceiling. Tap in 3D to switch, long press for details.",markers:"Markers",markers_none:"None",markers_important:"Important",markers_all:"All",furn_stool:"Stool",furn_coffee_table:"Coffee table",furn_tv_wall:"TV (wall)",furn_sideboard:"Sideboard",furn_table_round:"Round table",furn_bench:"Bench",furn_corner_bench:"Corner bench",furn_bar_stool:"Bar stool",furn_kitchen_wall:"Wall cabinet",furn_kitchen_tall:"Tall unit with oven",furn_island:"Kitchen island",furn_dishwasher:"Dishwasher",furn_bunk_bed:"Bunk bed",furn_dresser:"Chest of drawers",furn_washer:"Washing machine",furn_dryer:"Dryer",furn_office_chair:"Office chair",furn_tall_cabinet:"Tall cabinet",furn_coat_rack:"Coat rack",furn_group_living:"Living",furn_group_dining:"Dining",furn_group_kitchen:"Kitchen",furn_group_sleeping:"Sleeping",furn_group_bath:"Bath & laundry",furn_group_work:"Work & other",furn_entity:"Device (switch, plug \u2026)",furn_entity_tv:"TV (media player)",furn_power:"Power sensor (W)",furn_links_hint:"With a power sensor the item shows its watts and gets an energy cable.",furn_links_hint_tv:"The screen glows while the TV is on, in the colour of the app (Netflix, YouTube \u2026); the label shows the app or title.",stairs_hint:"The stair rises towards the back (away from the marked front edge) and opens the ceiling of the floor above.",floor_lights:"{n} lights on",floor_open:"{n} open",floor_persons:"{n} people",energy_consumption:"Consumption",energy_grid_import:"Grid import",energy_grid_export:"Export",energy_solar:"Solar",energy_battery:"Battery",energy_tariff:"Tariff",energy:"Energy",energy_meter:"Meter",energy_meter_set:"Place meter",energy_meter_remove:"Remove meter",energy_meter_hint:"Tap the spot of the meter or house connection in the plan.",energy_grid:"Grid (W, + = import)",energy_solar_sensor:"Solar production (W)",energy_battery_sensor:"Battery power (W, + = discharging)",energy_battery_soc:"Battery charge (%)",energy_tariff_sensor:"Tariff (e.g. \u20AC/kWh)",energy_invert:"Invert sign",energy_hint:"Consumers are placed devices with a power sensor (W) \u2013 the sensor itself or one of the same device.",tool_meter:"Meter",hint_meter:"Tap the spot of the meter",presence:"Presence",presence_hint:"Room sensor per person (e.g. ESPresense, Bermuda): its state names the room or area.",presence_sensor:"Room sensor",no_persons:"There are no people in Home Assistant."};function R(r,t,e={}){let i=((r?.language??navigator.language).startsWith("de")?Fn:Wi)[t]??Fn[t]??t;for(let[s,o]of Object.entries(e))i=i.replace(`{${s}}`,String(o));return i}function F(r,t,e=2){return t.toLocaleString(r?.language??void 0,{maximumFractionDigits:e})}var Tn={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function mt(r){return Tn[r]}function Tt(r){return`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${Tn[r]}"/></svg>`}var G=O`
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
`,gt=O`
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
`;var Dn=new Set(["vertex","room","device","opening","furniture","rotate"]),Ui=.25,Ln=100,ye=10,S=r=>Math.round(r*1e3)/1e3,xe=class extends L{static properties={hass:{attribute:!1},building:{attribute:!1},narrow:{type:Boolean},_doc:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_vertex:{state:!0},_openingId:{state:!0},_furnitureId:{state:!0},_deviceId:{state:!0},_deviceQuery:{state:!0},_expanded:{state:!0},_notice:{state:!0},_history:{state:!0},_spots:{state:!0},_tool:{state:!0},_draft:{state:!0},_cursor:{state:!0},_guides:{state:!0},_view:{state:!0},_size:{state:!0},_images:{state:!0},_canUndo:{state:!0},_canRedo:{state:!0}};past=[];future=[];drag=null;pointers=new Map;pinch=null;fitted=!1;resizeObserver;loadingImages=new Set;constructor(){super(),this.narrow=!1,this._floorId=null,this._roomId=null,this._vertex=null,this._openingId=null,this._furnitureId=null,this._deviceId=null,this._deviceQuery="",this._expanded=new Set,this._notice=null,this._history=null,this._spots=null,this._tool="select",this._draft=[],this._cursor=null,this._guides={},this._view={scale:50,ox:40,oy:40},this._size={w:800,h:600},this._images={},this._canUndo=!1,this._canRedo=!1}t(t,e){return R(this.hass,t,e)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.resizeObserver?.disconnect()}willUpdate(t){t.has("building")&&this.building!==this._doc&&(this._doc=this.building,this._doc.floors.some(e=>e.id===this._floorId)||(this._floorId=this._doc.floors[0]?.id??null),this.floor?.rooms.some(e=>e.id===this._roomId)||(this._roomId=null))}firstUpdated(){let t=this.renderRoot.querySelector(".fp3d-canvas-wrap");this.resizeObserver=new ResizeObserver(()=>{this._size={w:t.clientWidth,h:t.clientHeight},!this.fitted&&this._size.w>0&&(this.fitted=!0,this.fit())}),this.resizeObserver.observe(t)}updated(){let t=this.floor?.background;t&&!this._images[t.image_id]&&!this.loadingImages.has(t.image_id)&&this.loadImage(t.image_id)}get floor(){return this._doc?.floors.find(t=>t.id===this._floorId)}get room(){return this.floor?.rooms.find(t=>t.id===this._roomId)}get isAdmin(){return this.hass?.user?.is_admin??!0}setDoc(t,e=this._doc){e&&(this.past.push(JSON.stringify(e)),this.past.length>Ln&&this.past.shift(),this.future=[]),this._doc=t,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}change(t,e=this._doc,n=!0){let i=structuredClone(e),s=i.floors.find(o=>o.id===this._floorId);!s&&this._floorId||(t(i,s),this.setDoc(i,n?e:null))}undo(){let t=this.past.pop();t&&(this.future.push(JSON.stringify(this._doc)),this.restore(JSON.parse(t)))}redo(){let t=this.future.pop();t&&(this.past.push(JSON.stringify(this._doc)),this.restore(JSON.parse(t)))}restore(t){this._doc=t,t.floors.some(e=>e.id===this._floorId)||(this._floorId=t.floors[0]?.id??null),this.floor?.rooms.some(e=>e.id===this._roomId)||(this._roomId=null),this._vertex=null,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}toScreen(t){let{scale:e,ox:n,oy:i}=this._view;return[t[0]*e+n,t[1]*e+i]}toWorld(t,e){let{scale:n,ox:i,oy:s}=this._view;return[(t-i)/n,(e-s)/n]}localPoint(t){let e=this.renderRoot.querySelector("svg").getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}fit(){let t=this.floor?.rooms.flatMap(a=>a.points)??[],e=t.length?X(t):{x0:0,z0:0,x1:10,z1:8},n=1.5,i=e.x1-e.x0+2*n,s=e.z1-e.z0+2*n,o=Math.max(8,Math.min(400,Math.min(this._size.w/i,this._size.h/s)));this._view={scale:o,ox:this._size.w/2-(e.x0+e.x1)/2*o,oy:this._size.h/2-(e.z0+e.z1)/2*o}}zoomAt(t,e,n){let{scale:i,ox:s,oy:o}=this._view,a=Math.max(8,Math.min(600,i*t)),l=a/i;this._view={scale:a,ox:e-(e-s)*l,oy:n-(n-o)*l}}snap(t,e,n=!1){if(this._guides={},n)return t;let i=ye/this._view.scale,s=this.floor?.rooms??[],o=[];for(let u of s)u.points.forEach((y,m)=>{e&&u.id===e.roomId&&(e.index===void 0||e.index===m)||o.push(y)});let a=null,l=i;for(let u of o){let y=Math.hypot(u[0]-t[0],u[1]-t[1]);y<l&&(l=y,a=u)}if(a)return this._guides={point:a},[a[0],a[1]];for(let u of s)if(!(e&&u.id===e.roomId))for(let y=0;y<u.points.length;y++){let m=u.points[y],v=u.points[(y+1)%u.points.length],b=v[0]-m[0],x=v[1]-m[1],M=b*b+x*x;if(M<1e-9)continue;let w=((t[0]-m[0])*b+(t[1]-m[1])*x)/M;if(w<=0||w>=1)continue;let $=[m[0]+w*b,m[1]+w*x],k=Math.hypot($[0]-t[0],$[1]-t[1]),A=this._doc.settings.grid;Math.abs(x)<1e-9&&($[0]=Math.min(Math.max(Math.round($[0]/A)*A,Math.min(m[0],v[0])),Math.max(m[0],v[0]))),Math.abs(b)<1e-9&&($[1]=Math.min(Math.max(Math.round($[1]/A)*A,Math.min(m[1],v[1])),Math.max(m[1],v[1]))),k<l&&(l=k,a=$)}if(a)return this._guides={point:a},[S(a[0]),S(a[1])];let d=this._doc.settings.grid,p=[S(Math.round(t[0]/d)*d),S(Math.round(t[1]/d)*d)],h=i,f=i,c={};for(let u of o)Math.abs(u[0]-t[0])<h&&(h=Math.abs(u[0]-t[0]),p[0]=u[0],c.x=u[0]),Math.abs(u[1]-t[1])<f&&(f=Math.abs(u[1]-t[1]),p[1]=u[1],c.z=u[1]);return this._guides=c,p}onPointerDown(t){t.currentTarget.setPointerCapture(t.pointerId);let n=this.localPoint(t);if(this.pointers.set(t.pointerId,n),this.pointers.size===2){this.drag&&Dn.has(this.drag.kind)&&"moved"in this.drag&&this.drag.moved&&"base"in this.drag&&this.restoreLive(this.drag.base),this.drag=null,this.pinch=this.pinchState();return}if(this.pointers.size>2)return;if(t.button===1||t.button===2||!this.floor){this.drag={kind:"pan",last:n};return}let i=this.toWorld(...n),s=t.target;if(this._tool==="rect"){let c=this.snap(i,void 0,t.altKey);this.drag={kind:"rect",start:c,end:c};return}if(this._tool==="polygon"){this.drag={kind:"tap",startScreen:n,last:n,panning:!1};return}if(this._tool==="door"||this._tool==="window"||this._tool==="garage"){this.placeOpening(this._tool,n)||(this.drag={kind:"pan",last:n});return}if(this._tool==="meter"){if(this.isAdmin&&this._floorId){let c=this._doc.settings.grid,[u,y]=i.map(m=>S(Math.round(m/c)*c));this.setEnergy({meter:{floor_id:this._floorId,x:u,z:y}})}this._tool="select";return}let o=s.closest("[data-device]");if(o&&this.isAdmin){this.drag={kind:"device",entityId:o.getAttribute("data-device"),start:i,startScreen:n,base:this._doc,moved:!1};return}let a=s.closest("[data-opening]");if(a){let c=a.getAttribute("data-opening");this.selectItem("opening",c),this.drag=this.isAdmin?{kind:"opening",id:c,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let l=s.closest("[data-rotate]");if(l&&this.isAdmin){this.drag={kind:"rotate",id:l.getAttribute("data-rotate"),base:this._doc,moved:!1};return}let d=s.closest("[data-furniture]");if(d&&!s.closest("[data-vertex], [data-mid]")){let c=d.getAttribute("data-furniture");this.selectItem("furniture",c),this.drag=this.isAdmin?{kind:"furniture",id:c,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let p=s.closest("[data-vertex]"),h=s.closest("[data-mid]");if(p&&this.room&&this.isAdmin){this._vertex=Number(p.getAttribute("data-vertex")),this.drag={kind:"vertex",roomId:this.room.id,index:this._vertex,base:this._doc,moved:!1};return}if(h&&this.room&&this.isAdmin){let c=Number(h.getAttribute("data-mid")),u=this.room.points,y=u[c],m=u[(c+1)%u.length],v=[S((y[0]+m[0])/2),S((y[1]+m[1])/2)],b=this._doc,x=this.room.id;this.change((M,w)=>{w.rooms.find(k=>k.id===x).points.splice(c+1,0,v);let $=Math.hypot(v[0]-y[0],v[1]-y[1]);for(let k of w.openings)k.room_id===x&&(k.edge>c?k.edge+=1:k.edge===c&&k.offset>$&&(k.edge=c+1,k.offset=S(k.offset-$)))},b,!1),this._vertex=c+1,this.drag={kind:"vertex",roomId:x,index:c+1,base:b,moved:!0};return}let f=s.closest("[data-room]")?.getAttribute("data-room")??this.roomAt(i);if(f){f!==this._roomId&&(this._vertex=null),this.selectItem("room",f),this.drag=this.isAdmin?{kind:"room",roomId:f,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}this.selectItem("room",null),this.drag={kind:"pan",last:n}}onPointerMove(t){let e=this.localPoint(t);if(this.pointers.has(t.pointerId)&&this.pointers.set(t.pointerId,e),this.pinch){let s=this.pinchState();s&&(this.zoomAt(s.dist/Math.max(1,this.pinch.dist),...s.mid),this._view={...this._view,ox:this._view.ox+s.mid[0]-this.pinch.mid[0],oy:this._view.oy+s.mid[1]-this.pinch.mid[1]},this.pinch=s);return}let n=this.toWorld(...e),i=this.drag;if(!i){this._tool!=="select"&&this.floor&&(this._cursor=this.snap(n,void 0,t.altKey));return}switch(i.kind){case"pan":this._view={...this._view,ox:this._view.ox+e[0]-i.last[0],oy:this._view.oy+e[1]-i.last[1]},i.last=e;break;case"tap":(i.panning||Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])>6)&&(i.panning=!0,this._view={...this._view,ox:this._view.ox+e[0]-i.last[0],oy:this._view.oy+e[1]-i.last[1]}),i.last=e;break;case"rect":i.end=this.snap(n,void 0,t.altKey),this.requestUpdate();break;case"vertex":{let s=this.snap(n,{roomId:i.roomId,index:i.index},t.altKey);i.moved=!0,this.change((o,a)=>{a.rooms.find(l=>l.id===i.roomId).points[i.index]=s},i.base,!1);break}case"room":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.base.floors.find(d=>d.id===this._floorId)?.rooms.find(d=>d.id===i.roomId);if(!s)return;let o=this.roomDelta(s,[n[0]-i.start[0],n[1]-i.start[1]],t.altKey),a=i.base.floors.find(d=>d.id===this._floorId),l=new Set(a.placements.filter(d=>z([d.x,d.z],s.points)).map(d=>d.entity_id));this.change((d,p)=>{let h=p.rooms.find(f=>f.id===i.roomId);h.points=s.points.map(([f,c])=>[S(f+o[0]),S(c+o[1])]),p.placements=a.placements.map(f=>l.has(f.entity_id)?{...f,x:S(f.x+o[0]),z:S(f.z+o[1])}:f)},i.base,!1);break}case"opening":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.base.floors.find(d=>d.id===this._floorId),o=s?.openings.find(d=>d.id===i.id),a=s?.rooms.find(d=>d.id===o?.room_id);if(!o||!a)return;let l=this.offsetOnEdge(a,o.edge,n,o.width,t.altKey);this.change((d,p)=>Object.assign(p.openings.find(h=>h.id===i.id),{offset:l}),i.base,!1);break}case"furniture":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.base.floors.find(h=>h.id===this._floorId)?.furniture.find(h=>h.id===i.id);if(!s)return;let o=t.altKey?.01:this._doc.settings.grid,a=S(Math.round((s.x+n[0]-i.start[0])/o)*o),l=S(Math.round((s.z+n[1]-i.start[1])/o)*o),d=s.rotation,p=t.altKey?null:this.snapToWall({...s,x:a,z:l});p&&({x:a,z:l,rotation:d}=p),this.change((h,f)=>Object.assign(f.furniture.find(c=>c.id===i.id),{x:a,z:l,rotation:d}),i.base,!1);break}case"rotate":{i.moved=!0;let s=i.base.floors.find(l=>l.id===this._floorId)?.furniture.find(l=>l.id===i.id);if(!s)return;let o=Math.atan2(-(n[0]-s.x),n[1]-s.z)*180/Math.PI,a=t.altKey?1:15;o=(Math.round(o/a)*a%360+360)%360,this.change((l,d)=>Object.assign(d.furniture.find(p=>p.id===i.id),{rotation:o}),i.base,!1);break}case"device":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.base.floors.find(d=>d.id===this._floorId)?.placements.find(d=>d.entity_id===i.entityId);if(!s)return;let o=t.altKey?.01:this._doc.settings.grid,a=S(Math.round((s.x+n[0]-i.start[0])/o)*o),l=S(Math.round((s.z+n[1]-i.start[1])/o)*o);this.change((d,p)=>Object.assign(p.placements.find(h=>h.entity_id===i.entityId),{x:a,z:l}),i.base,!1);break}}}onPointerUp(t){if(this.pointers.delete(t.pointerId),this.pinch){this.pointers.size<2&&(this.pinch=null);return}let e=this.drag;if(this.drag=null,!e||t.type==="pointercancel"){e&&Dn.has(e.kind)&&"moved"in e&&e.moved&&"base"in e&&this.restoreLive(e.base);return}let n=this.localPoint(t);switch(e.kind){case"rect":{let[i,s]=e.start,[o,a]=e.end;if(Math.abs(o-i)>=.2&&Math.abs(a-s)>=.2){let l=[Math.min(i,o),Math.min(s,a)],d=[Math.max(i,o),Math.max(s,a)];this.addRoom([l,[d[0],l[1]],d,[l[0],d[1]]])}this._guides={};break}case"tap":e.panning||this.addDraftPoint(this.snap(this.toWorld(...n),void 0,t.altKey),n);break;case"opening":case"furniture":case"rotate":e.moved&&this.pushHistory(e.base);break;case"device":e.moved?this.pushHistory(e.base):this.selectItem("device",e.entityId);break;case"vertex":case"room":e.moved&&this.pushHistory(e.base),this._guides={};break;default:break}}onWheel(t){t.preventDefault();let[e,n]=this.localPoint(t);this.zoomAt(Math.exp(-t.deltaY*(t.deltaMode===1?.05:.0015)),e,n)}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e[0]-n[0],e[1]-n[1]),mid:[(e[0]+n[0])/2,(e[1]+n[1])/2]}}pushHistory(t){this.past.push(JSON.stringify(t)),this.past.length>Ln&&this.past.shift(),this.future=[],this._canUndo=!0,this._canRedo=!1}restoreLive(t){this._doc=t,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}roomDelta(t,e,n){if(n)return e;let i=this._doc.settings.grid,s=[Math.round(e[0]/i)*i,Math.round(e[1]/i)*i],a=ye/this._view.scale;this._guides={};for(let l of this.floor?.rooms??[])if(l.id!==t.id)for(let d of l.points)for(let p of t.points){let h=Math.hypot(p[0]+e[0]-d[0],p[1]+e[1]-d[1]);h<a&&(a=h,s=[d[0]-p[0],d[1]-p[1]],this._guides={point:d})}return s}roomAt(t){return(this.floor?.rooms??[]).filter(i=>z(t,i.points)).sort((i,s)=>pt(i.points)-pt(s.points))[0]?.id??null}addDraftPoint(t,e){let n=this._draft;if(n.length>=3){let[s,o]=this.toScreen(n[0]);if(Math.hypot(s-e[0],o-e[1])<14){this.closeDraft();return}}let i=n[n.length-1];i&&Math.hypot(i[0]-t[0],i[1]-t[1])<1e-6||(this._draft=[...n,t])}closeDraft(){this._draft.length>=3&&pt(this._draft)>.05&&this.addRoom(this._draft),this._draft=[],this._cursor=null,this._guides={}}addRoom(t){if(!this.floor)return;let e=K("room"),n=this.floor.rooms.length+1;this.change((i,s)=>s.rooms.push({id:e,name:this.t("new_room",{n}),area_id:null,points:t.map(([o,a])=>[S(o),S(a)]),floor_material:"wood"})),this._roomId=e,this._vertex=null,this._tool="select"}onKey=t=>{if(t.composedPath().some(i=>i instanceof HTMLInputElement||i instanceof HTMLSelectElement||i instanceof HTMLTextAreaElement)||!this.isConnected||!this.offsetParent)return;let n=t.ctrlKey||t.metaKey;n&&t.key.toLowerCase()==="z"?(t.preventDefault(),t.shiftKey?this.redo():this.undo()):n&&t.key.toLowerCase()==="y"?(t.preventDefault(),this.redo()):n&&t.key.toLowerCase()==="d"?(t.preventDefault(),this.duplicateRoom()):t.key==="Delete"||t.key==="Backspace"&&this._tool==="select"?this._deviceId?(this.removeDevice(this._deviceId),this._deviceId=null):this._openingId?this.deleteOpening():this._furnitureId?this.deleteFurniture():this._vertex!==null?this.deleteVertex(this._vertex):this.deleteRoom():t.key.toLowerCase()==="r"&&!n&&this._furnitureId?this.rotateFurniture(t.shiftKey?-90:90):t.key==="Backspace"&&this._tool==="polygon"?this._draft=this._draft.slice(0,-1):t.key==="Enter"&&this._tool==="polygon"?this.closeDraft():t.key==="Escape"&&(this._draft.length?this._draft=[]:this._tool!=="select"?this._tool="select":this.selectItem("room",null),this._cursor=null)};addFloor(){let t=this._doc.floors,e=t[t.length-1],n=K("floor"),i=t.length===0?this.t("default_floor"):this.t("new_floor",{n:t.length}),s=e?S(e.elevation+e.height+.25):0,o=structuredClone(this._doc);o.floors.push(an(n,i,s)),this.setDoc(o),this._floorId=n,this._roomId=null}moveFloor(t){let e=this._doc.floors.findIndex(s=>s.id===this._floorId),n=e+t;if(e<0||n<0||n>=this._doc.floors.length)return;let i=structuredClone(this._doc);[i.floors[e],i.floors[n]]=[i.floors[n],i.floors[e]],this.setDoc(i)}deleteFloor(){let t=this.floor;if(!t||!confirm(this.t("delete_floor_confirm",{name:t.name})))return;let e=structuredClone(this._doc);e.floors=e.floors.filter(n=>n.id!==t.id),this.setDoc(e),this._floorId=e.floors[0]?.id??null,this._roomId=null}deleteRoom(){let t=this._roomId;!t||!this.isAdmin||(this.change((e,n)=>{let i=n.rooms.find(s=>s.id===t);n.rooms=n.rooms.filter(s=>s.id!==t),n.openings=n.openings.filter(s=>s.room_id!==t),i&&(n.placements=n.placements.filter(s=>!z([s.x,s.z],i.points)))}),this._roomId=null,this._vertex=null)}duplicateRoom(){let t=this.room;if(!t||!this.isAdmin)return;let e=K("room");this.change((n,i)=>i.rooms.push({...structuredClone(t),id:e,points:t.points.map(([s,o])=>[S(s+.5),S(o+.5)])})),this._roomId=e}selectItem(t,e){if(this._notice=null,(t!=="room"||e!==this._roomId)&&(this._vertex=null),this._roomId=t==="room"?e:this._roomId,this._openingId=t==="opening"?e:null,this._furnitureId=t==="furniture"?e:null,this._deviceId=t==="device"?e:null,t==="device"&&e){let n=this.floor?.placements.find(i=>i.entity_id===e);this._roomId=(n&&this.roomAt([n.x,n.z]))??this._roomId}t==="opening"&&e&&(this._roomId=this.floor?.openings.find(n=>n.id===e)?.room_id??this._roomId)}get opening(){return this._openingId?this.floor?.openings.find(t=>t.id===this._openingId):void 0}get furnitureItem(){return this._furnitureId?this.floor?.furniture.find(t=>t.id===this._furnitureId):void 0}offsetOnEdge(t,e,n,i,s){let o=t.points[e],a=t.points[(e+1)%t.points.length],l=Math.hypot(a[0]-o[0],a[1]-o[1])||1,d=((n[0]-o[0])*(a[0]-o[0])+(n[1]-o[1])*(a[1]-o[1]))/l,p=s?.01:this._doc.settings.grid,h=Math.min(i,l)/2;return S(Math.min(l-h,Math.max(h,Math.round(d/p)*p)))}placeOpening(t,e){let n=this.floor;if(!n||!this.isAdmin)return!1;let i=null;for(let c of n.rooms)for(let u=0;u<c.points.length;u++){let[y,m]=this.toScreen(c.points[u]),[v,b]=this.toScreen(c.points[(u+1)%c.points.length]),x=(v-y)**2+(b-m)**2||1,M=Math.min(1,Math.max(0,((e[0]-y)*(v-y)+(e[1]-m)*(b-m))/x)),w=Math.hypot(e[0]-y-(v-y)*M,e[1]-m-(b-m)*M),$=w-(c.id===this._roomId?.5:0);w<ye*2.2&&(!i||$<i.d)&&(i={room:c,edge:u,d:$})}if(!i)return!1;let{room:s,edge:o}=i,a=s.points[o],l=s.points[(o+1)%s.points.length],d=Math.hypot(l[0]-a[0],l[1]-a[1]),p=ue[t],h=S(Math.min(p.width,Math.max(.3,d-.1))),f={id:K("opening"),room_id:s.id,edge:o,offset:this.offsetOnEdge(s,o,this.toWorld(...e),h,!1),width:h,type:t,sill:p.sill,height:p.height,hinge:"left",cover:null,contact:null,tilt:null};return this.change((c,u)=>u.openings.push(f)),this._tool="select",this.selectItem("opening",f.id),!0}updateOpening(t){let e=this._openingId;this.change((n,i)=>Object.assign(i.openings.find(s=>s.id===e),t))}deleteOpening(){let t=this._openingId;!t||!this.isAdmin||(this.change((e,n)=>n.openings=n.openings.filter(i=>i.id!==t)),this._openingId=null)}addFurniture(t){let e=this.floor;if(!e||!this.isAdmin)return;let[n,i,s]=It[t],o=this._doc.floors.filter(f=>f.elevation>e.elevation).sort((f,c)=>f.elevation-c.elevation)[0],a=t==="stairs"?S(o?o.elevation-e.elevation:e.height+.25):s,l=this.room,[d,p]=l?Z(l.points):this.toWorld(this._size.w/2,this._size.h/2),h={id:K("furniture"),type:t,x:S(d),z:S(p),rotation:0,w:n,d:i,h:a,variant:null};this.change((f,c)=>c.furniture.push(h)),this.selectItem("furniture",h.id)}snapToWall(t){let e=this.floor;if(!e)return null;let n=e.rooms.find(l=>l.points.length>=3&&z([t.x,t.z],l.points));if(!n)return null;let i=n.points,s=U(i)>=0?1:-1,o=this._doc.settings.wall_interior/2,a=null;for(let l=0;l<i.length;l++){let d=i[l],p=i[(l+1)%i.length],h=Math.hypot(p[0]-d[0],p[1]-d[1]);if(h<.3)continue;let f=[(p[0]-d[0])/h,(p[1]-d[1])/h],c=[-f[1]*s,f[0]*s],u=(t.x-d[0])*f[0]+(t.z-d[1])*f[1];if(u<0||u>h)continue;let m=e.rooms.some(k=>k.id!==n.id&&k.points.some((A,N)=>{let W=k.points[(N+1)%k.points.length],Q=Math.abs((A[0]-d[0])*c[0]+(A[1]-d[1])*c[1]),Dt=Math.abs((W[0]-d[0])*c[0]+(W[1]-d[1])*c[1]);return Q<.02&&Dt<.02}))?o:0,v=(t.x-d[0])*c[0]+(t.z-d[1])*c[1]-m,b=Math.atan2(-c[0],c[1])*180/Math.PI,x=k=>Math.abs((t.rotation-k+540)%360-180),w=[{rotation:b,extent:t.d/2},{rotation:b+90,extent:t.w/2},{rotation:b-90,extent:t.w/2}].reduce((k,A)=>x(A.rotation)<x(k.rotation)?A:k);if(x(w.rotation)>50)continue;let $=v-w.extent;Math.abs($)>Ui||a&&Math.abs($)>=Math.abs(a.gap)||(a={x:S(t.x-c[0]*$),z:S(t.z-c[1]*$),rotation:(Math.round(w.rotation)%360+360)%360,gap:$})}return a?{x:a.x,z:a.z,rotation:a.rotation}:null}updateFurniture(t){let e=this._furnitureId;this.change((n,i)=>Object.assign(i.furniture.find(s=>s.id===e),t))}rotateFurniture(t){let e=this.furnitureItem;!e||!this.isAdmin||this.updateFurniture({rotation:((e.rotation+t)%360+360)%360})}deleteFurniture(){let t=this._furnitureId;!t||!this.isAdmin||(this.change((e,n)=>n.furniture=n.furniture.filter(i=>i.id!==t)),this._furnitureId=null)}duplicateFurniture(){let t=this.furnitureItem;if(!t||!this.isAdmin)return;let e={...structuredClone(t),id:K("furniture"),x:S(t.x+.3),z:S(t.z+.3)};this.change((n,i)=>i.furniture.push(e)),this.selectItem("furniture",e.id)}placeDevices(t){let e=this.room;if(!e||!t.length||!this.isAdmin)return;let n=new Set(t);this.change((i,s)=>{for(let a of i.floors)a.placements=a.placements.filter(l=>!n.has(l.entity_id)),a.furniture=a.furniture.filter(l=>!(Y(l.type)&&l.entity&&n.has(l.entity)));let o=[...s.placements.map(a=>[a.x,a.z]),...s.furniture.filter(a=>Y(a.type)).map(a=>[a.x,a.z])];for(let a of kn(e,t,o)){if(!a.entity_id.startsWith("light.")){s.placements.push(a);continue}let[l,d,p]=It.lamp_ceiling;s.furniture.push({id:K("furniture"),type:"lamp_ceiling",x:a.x,z:a.z,rotation:0,w:l,d,h:p,variant:null,entity:a.entity_id,power:null})}})}get device(){return this._deviceId?this.floor?.placements.find(t=>t.entity_id===this._deviceId):void 0}updateDevice(t){let e=this._deviceId;this.change((n,i)=>Object.assign(i.placements.find(s=>s.entity_id===e),t))}centreDevice(){let t=this.device,e=t?this.roomAt([t.x,t.z]):null,n=this.floor?.rooms.find(o=>o.id===e);if(!t||!n)return;let[i,s]=Z(n.points);this.updateDevice({x:S(i),z:S(s)})}spreadCeilingLights(t){let e=this.floor;if(!e)return;let n=e.placements.filter(h=>I(h.entity_id)==="light"&&(h.mount??"ceiling")==="ceiling"&&z([h.x,h.z],t.points));if(n.length<2)return;let i=X(t.points),s=i.x1-i.x0,o=i.z1-i.z0,a=Math.max(1,Math.round(Math.sqrt(n.length*s/Math.max(.1,o)))),l=Math.ceil(n.length/a),d=n.map((h,f)=>{let c=Math.floor(f/a),u=c===l-1?n.length-a*(l-1):a,y=f-c*a;return[S(i.x0+s/u*(y+.5)),S(i.z0+o/l*(c+.5))]}),p=n.map(h=>h.entity_id);this.change((h,f)=>{p.forEach((c,u)=>Object.assign(f.placements.find(y=>y.entity_id===c),{x:d[u][0],z:d[u][1]}))})}closeFloorGaps(){let t=this.floor;if(!t||!this.isAdmin)return;let{rooms:e,gaps:n}=An(t.rooms);if(!n.length){this._notice=this.t("gaps_none");return}let i=In(n);this.change((s,o)=>{o.rooms=e,i&&(s.settings.wall_interior=i)}),this._notice=i?this.t("gaps_closed_wall",{n:n.length,t:F(this.hass,i,2)}):this.t("gaps_closed",{n:n.length})}removeDevice(t){this.change(e=>{for(let n of e.floors)n.placements=n.placements.filter(i=>i.entity_id!==t),n.furniture=n.furniture.filter(i=>!(Y(i.type)&&i.entity===t))})}deleteVertex(t){let e=this.room;if(!e||e.points.length<=3)return;let n=e.points.length,i=(t-1+n)%n;this.change((s,o)=>{o.rooms.find(a=>a.id===e.id).points.splice(t,1),o.openings=o.openings.filter(a=>a.room_id!==e.id||a.edge!==t&&a.edge!==i).map(a=>a.room_id===e.id&&a.edge>t?{...a,edge:a.edge-1}:a)}),this._vertex=null}updateFloor(t){this.change((e,n)=>Object.assign(n,t))}updateRoom(t){let e=this._roomId;this.change((n,i)=>Object.assign(i.rooms.find(s=>s.id===e),t))}setArea(t){let e=this.room;if(!e)return;let n=t?this.hass?.areas?.[t]:void 0,i=!e.name||/^(Raum|Room) \d+$/.test(e.name)||Object.values(this.hass?.areas??{}).some(s=>s.name===e.name);this.updateRoom({area_id:t||null,...n&&i?{name:n.name}:{}})}setRect(t,e){let n=this.room;if(!n||!Number.isFinite(e))return;let i=X(n.points),{x0:s,z0:o,x1:a,z1:l}=i;t==="x"&&([s,a]=[e,e+(a-s)]),t==="z"&&([o,l]=[e,e+(l-o)]),t==="w"&&e>.05&&(a=s+e),t==="d"&&e>.05&&(l=o+e),this.updateRoom({points:[[S(s),S(o)],[S(a),S(o)],[S(a),S(l)],[S(s),S(l)]]})}setPoint(t,e,n){let i=this.room;if(!i||!Number.isFinite(n))return;let s=i.points.map(o=>[...o]);s[t][e]=S(n),this.updateRoom({points:s})}async loadImage(t){this.loadingImages.add(t);try{let e=await tn(this.hass,t),n=new Image;n.src=e,await n.decode(),this._images={...this._images,[t]:{url:e,aspect:n.naturalHeight/n.naturalWidth}}}catch{}}async uploadBackground(t){let e=t.target,n=e.files?.[0];if(e.value="",!n)return;let i=await createImageBitmap(n),s=Math.min(1,2048/Math.max(i.width,i.height)),o=document.createElement("canvas");o.width=Math.round(i.width*s),o.height=Math.round(i.height*s),o.getContext("2d").drawImage(i,0,0,o.width,o.height);let a=o.toDataURL("image/jpeg",.85),l=K("img");await en(this.hass,l,a),this._images={...this._images,[l]:{url:a,aspect:o.height/o.width}};let d=this.floor?.rooms.length?X(this.floor.rooms.flatMap(p=>p.points)):null;this.updateFloor({background:{image_id:l,x:d?d.x0:0,z:d?d.z0:0,width:d?Math.max(4,S(d.x1-d.x0)):12,opacity:.5}})}render(){let t=this.floor,e=t?Ft(t.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior}):null;return g`
      <div class="fp3d-editor ${this.narrow?"fp3d-narrow":""}">
        <div class="fp3d-main">
          <div class="fp3d-toolbar">
            <div class="fp3d-seg" role="group" aria-label=${this.t("tool_select")}>
              ${["select","rect","polygon","door","window","garage"].map(n=>g`<button
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
            ${e?.warnings.length?g`<span class="fp3d-warn">${this.t("overlap_warning")}</span>`:_}
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
              ${this.renderBackground(t)} ${this.renderGrid()} ${this.renderGhost()} ${e?this.renderWalls(e.walls):_}
              ${t?this.renderRooms(t):_} ${t?this.renderFurniture(t):_}
              ${t&&e?this.renderOpenings(t,e.walls):_} ${t?this.renderMeter(t):_}
              ${t&&this._tool==="select"?this.renderDevices(t):_}
              ${this.room&&this.isAdmin&&this._tool==="select"&&!this._openingId&&!this._furnitureId?this.renderHandles(this.room):_}
              ${this.renderDraft()} ${this.renderGuides()}
            </svg>
            <p class="fp3d-hint">${t?this.t(`hint_${this._tool}`):this.t("hint_empty")}</p>
          </div>
        </div>
        <aside class="fp3d-side">${this.renderSide(t)}</aside>
      </div>
    `}renderBackground(t){let e=t?.background,n=e?this._images[e.image_id]:void 0;if(!e||!n)return _;let[i,s]=this.toScreen([e.x,e.z]),o=e.width*this._view.scale;return E`<image href=${n.url} x=${i} y=${s} width=${o} height=${o*n.aspect} opacity=${e.opacity} preserveAspectRatio="none" pointer-events="none" />`}renderGrid(){let{scale:t}=this._view,{w:e,h:n}=this._size,i=t>=90?.1:t>=30?.5:1,s=t>=20?1:5,[o,a]=this.toWorld(0,0),[l,d]=this.toWorld(e,n),p=[],h=(u,y)=>{for(let m=Math.ceil(o/u)*u;m<=l;m+=u){let v=this.toScreen([m,0])[0];p.push(E`<line class=${y} x1=${v} y1="0" x2=${v} y2=${n} />`)}for(let m=Math.ceil(a/u)*u;m<=d;m+=u){let v=this.toScreen([0,m])[1];p.push(E`<line class=${y} x1="0" y1=${v} x2=${e} y2=${v} />`)}};i<s&&h(i,"fp3d-grid-minor"),h(s,"fp3d-grid-major");let[f,c]=this.toScreen([0,0]);return p.push(E`<circle class="fp3d-origin" cx=${f} cy=${c} r="3" />`),E`<g pointer-events="none">${p}</g>`}renderGhost(){let t=this._doc?.floors.findIndex(n=>n.id===this._floorId)??-1,e=t>0?this._doc.floors[t-1]:void 0;return e?E`<g pointer-events="none">${e.rooms.map(n=>E`<polygon class="fp3d-ghost" points=${n.points.map(i=>this.toScreen(i).join(",")).join(" ")} />`)}</g>`:_}renderWalls(t){return E`<g pointer-events="none">${t.map(e=>E`<polygon class=${e.exterior?"fp3d-wall fp3d-wall-ext":"fp3d-wall"} points=${e.footprint.map(n=>this.toScreen(n).join(",")).join(" ")} />`)}</g>`}renderRooms(t){return E`
      <g>${t.rooms.map(e=>{let n=e.points.map(i=>this.toScreen(i).join(",")).join(" ");return E`<polygon data-room=${e.id} class=${e.id===this._roomId?"fp3d-room fp3d-room-sel":"fp3d-room"} points=${n} />`})}</g>
      <g pointer-events="none">${t.rooms.map(e=>{let[n,i]=this.toScreen(Z(e.points));return E`<text class="fp3d-room-name" x=${n} y=${i-2}>${e.name}</text>
          <text class="fp3d-room-area" x=${n} y=${i+14}>${this.t("area_m2",{a:F(this.hass,pt(e.points),1)})}</text>`})}</g>
    `}renderMeter(t){let e=this._doc.energy?.meter;if(!e||e.floor_id!==t.id)return _;let[n,i]=this.toScreen([e.x,e.z]);return E`<g class="fp3d-meter" transform="translate(${n} ${i})" pointer-events="none">
      <rect x="-11" y="-11" width="22" height="22" rx="5" />
      <path d="M1.5 -7 L-4 1 H0 L-1.5 7 L4 -1 H0 Z" />
    </g>`}renderFurniture(t){let e=this._view.scale;return E`<g>${t.furniture.map(n=>{let i=n.id===this._furnitureId,[s,o]=this.toScreen([n.x,n.z]),a=Math.min(n.w,n.d)*e>44,l=n.rotation*Math.PI/180,d=n.d/2+Math.max(.3,26/e),[p,h]=this.toScreen([n.x-Math.sin(l)*d,n.z+Math.cos(l)*d]),[f,c]=this.toScreen([n.x-Math.sin(l)*(n.d/2),n.z+Math.cos(l)*(n.d/2)]),u=Y(n.type)&&!!n.entity&&n.entity!=="none"&&this.hass?.states[n.entity]?.state==="on";return E`<g data-furniture=${n.id} class=${`fp3d-furn${i?" fp3d-furn-sel":""}${u?" fp3d-furn-lit":""}`}>
        <g transform="translate(${s} ${o}) rotate(${n.rotation}) scale(${e})">
          <rect class="fp3d-furn-body" x=${-n.w/2} y=${-n.d/2} width=${n.w} height=${n.d} />
          <g class="fp3d-furn-sym">${En(n.type,n.w,n.d)}</g>
          <line class="fp3d-furn-front" x1=${-n.w/2} y1=${n.d/2} x2=${n.w/2} y2=${n.d/2} />
        </g>
        ${a?E`<text x=${s} y=${o+4}>${this.t(`furn_${n.type}`)}</text>`:_}
      </g>
      ${i&&this.isAdmin?E`<g class="fp3d-rotate" data-rotate=${n.id}>
            <line x1=${f} y1=${c} x2=${p} y2=${h} />
            <circle cx=${p} cy=${h} r="16" class="fp3d-hit" />
            <circle cx=${p} cy=${h} r="8" />
            <path d="M${p-4} ${h-1}a4 4 0 1 1 2 3.5" />
          </g>`:_}`})}</g>`}renderOpenings(t,e){return E`<g>${t.openings.map(n=>{let i=t.rooms.find(b=>b.id===n.room_id);if(!i||n.edge>=i.points.length)return _;let s=Cn(e,i,n.edge,n.offset),o=qt(i,n.edge,n.offset-n.width/2),a=qt(i,n.edge,n.offset+n.width/2),l=(a[0]-o[0])/(n.width||1),d=(a[1]-o[1])/(n.width||1),p=U(i.points)>=0?1:-1,h=[-d*p,l*p],f=[.06,.06];s&&(f=s.wall.roomLeft===i.id?[s.wall.left,s.wall.right]:[s.wall.right,s.wall.left]);let c=(b,x)=>this.toScreen([b[0]+h[0]*x,b[1]+h[1]*x]),u=[c(o,f[0]+.01),c(a,f[0]+.01),c(a,-f[1]-.01),c(o,-f[1]-.01)],y=n.id===this._openingId,m=`fp3d-open fp3d-open-${n.type}${y?" fp3d-open-sel":""}`,v;if(n.type==="garage"){let b=c(o,f[0]-.04),x=c(a,f[0]-.04),M=c(o,f[0]+Math.min(2,n.height)),w=c(a,f[0]+Math.min(2,n.height));v=E`<line x1=${b[0]} y1=${b[1]} x2=${x[0]} y2=${x[1]} />
          <path class="fp3d-open-track" d="M${b[0]} ${b[1]}L${M[0]} ${M[1]}M${x[0]} ${x[1]}L${w[0]} ${w[1]}" />`}else if(n.type==="door"){let b=n.hinge==="left",x=b?o:a,M=b?a:o,w=c(x,n.width),[$,k]=this.toScreen(x),[A,N]=this.toScreen(M),W=n.width*this._view.scale,Q=(w[0]-$)*(N-k)-(w[1]-k)*(A-$);v=E`<path d="M${$} ${k}L${w[0]} ${w[1]}A${W} ${W} 0 0 ${Q>0?1:0} ${A} ${N}" />`}else{let b=(f[0]-f[1])/2,x=c(o,b+.035),M=c(a,b+.035),w=c(o,b-.035),$=c(a,b-.035);v=E`<line x1=${x[0]} y1=${x[1]} x2=${M[0]} y2=${M[1]} /><line x1=${w[0]} y1=${w[1]} x2=${$[0]} y2=${$[1]} />`}return E`<g data-opening=${n.id} class=${m}>
        <polygon class="fp3d-open-gap" points=${u.map(b=>b.join(",")).join(" ")} />
        ${v}
      </g>`})}</g>`}renderDevices(t){return E`<g>${t.placements.map(e=>{let n=I(e.entity_id);if(!n)return _;let[i,s]=this.toScreen([e.x,e.z]),a=`fp3d-device${this.hass?.states[e.entity_id]?.state==="on"?" fp3d-device-on":""}${e.entity_id===this._deviceId?" fp3d-device-sel":""}`;return E`<g data-device=${e.entity_id} class=${a} transform="translate(${i} ${s})">
        <title>${T(this.hass,e.entity_id)}</title>
        <circle r="18" class="fp3d-hit" /><circle r="12" />
        <path d=${mt(n)} transform="translate(-7.2 -7.2) scale(0.6)" />
      </g>`})}</g>`}renderHandles(t){let e=t.points,n=e.length,i=e.map((o,a)=>{let l=e[(a+1)%n],[d,p]=this.toScreen(o),[h,f]=this.toScreen(l),c=Math.hypot(l[0]-o[0],l[1]-o[1]),u=(d+h)/2,y=(p+f)/2,[m,v]=this.toScreen(Z(e)),b=-(f-p),x=h-d,M=Math.hypot(b,x)||1;b/=M,x/=M,b*(u-m)+x*(y-v)<0&&(b=-b,x=-x);let w=Math.hypot(h-d,f-p);return E`
        ${w>50?E`<text class="fp3d-dim" x=${u+b*16} y=${y+x*16+4}>${F(this.hass,c,2)} m</text>`:_}
        ${w>36?E`<g data-mid=${a} class="fp3d-mid"><circle cx=${u} cy=${y} r="14" class="fp3d-hit" /><circle cx=${u} cy=${y} r="6" /><path d="M${u-3} ${y}h6M${u} ${y-3}v6" /></g>`:_}
      `}),s=e.map((o,a)=>{let[l,d]=this.toScreen(o);return E`<g data-vertex=${a} class=${a===this._vertex?"fp3d-vertex fp3d-vertex-sel":"fp3d-vertex"}><circle cx=${l} cy=${d} r="16" class="fp3d-hit" /><circle cx=${l} cy=${d} r="6" /></g>`});return E`<g>${i}${s}</g>`}renderDraft(){let t=this.drag;if(t?.kind==="rect"){let[n,i]=this.toScreen(t.start),[s,o]=this.toScreen(t.end),a=Math.abs(t.end[0]-t.start[0]),l=Math.abs(t.end[1]-t.start[1]);return E`<g pointer-events="none">
        <rect class="fp3d-draft" x=${Math.min(n,s)} y=${Math.min(i,o)} width=${Math.abs(s-n)} height=${Math.abs(o-i)} />
        <text class="fp3d-dim" x=${(n+s)/2} y=${Math.min(i,o)-8}>${F(this.hass,a,2)} × ${F(this.hass,l,2)} m</text>
      </g>`}if(this._tool!=="polygon")return _;let e=[...this._draft,...this._cursor?[this._cursor]:[]].map(n=>this.toScreen(n));return E`<g pointer-events="none">
      ${e.length>1?E`<polyline class="fp3d-draft" points=${e.map(n=>n.join(",")).join(" ")} />`:_}
      ${this._draft.map((n,i)=>{let[s,o]=this.toScreen(n);return E`<circle class=${i===0&&this._draft.length>=3?"fp3d-draft-pt fp3d-draft-first":"fp3d-draft-pt"} cx=${s} cy=${o} r=${i===0&&this._draft.length>=3?9:5} />`})}
      ${this._cursor?E`<circle class="fp3d-cursor" cx=${this.toScreen(this._cursor)[0]} cy=${this.toScreen(this._cursor)[1]} r="4" />`:_}
    </g>`}renderGuides(){let t=this._guides,{w:e,h:n}=this._size;return E`<g pointer-events="none">
      ${t.x!==void 0?E`<line class="fp3d-guide" x1=${this.toScreen([t.x,0])[0]} y1="0" x2=${this.toScreen([t.x,0])[0]} y2=${n} />`:_}
      ${t.z!==void 0?E`<line class="fp3d-guide" x1="0" y1=${this.toScreen([0,t.z])[1]} x2=${e} y2=${this.toScreen([0,t.z])[1]} />`:_}
      ${t.point?E`<circle class="fp3d-snap" cx=${this.toScreen(t.point)[0]} cy=${this.toScreen(t.point)[1]} r="9" />`:_}
    </g>`}num(t,e,n,i=.01,s){return g`<label class="fp3d-field"
      >${t}
      <input
        type="number"
        inputmode="decimal"
        step=${i}
        min=${s??_}
        .value=${String(S(e))}
        ?disabled=${!this.isAdmin}
        @change=${o=>{let a=parseFloat(o.target.value.replace(",","."));Number.isFinite(a)&&n(a)}}
    /></label>`}renderSide(t){let e=this._doc?.floors??[],n=this.room,i=this.isAdmin,s=Object.values(this.hass?.areas??{}).sort((o,a)=>o.name.localeCompare(a.name));return g`
      ${i?_:g`<p class="fp3d-note">${this.t("read_only")}</p>`}
      <section>
        <h3>${this.t("floors")}</h3>
        <div class="fp3d-floor-list">
          ${[...e].reverse().map(o=>g`<button
              class="fp3d-chip"
              aria-pressed=${o.id===this._floorId}
              @click=${()=>{this._floorId=o.id,this._roomId=null,this._vertex=null,this._draft=[],this.fit()}}
            >
              ${o.name}
            </button>`)}
          ${i?g`<button class="fp3d-btn" @click=${()=>this.addFloor()}>+ ${this.t("add_floor")}</button>`:_}
        </div>
        ${t?g`<div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${this.t("floor_name")}
                <input .value=${t.name} ?disabled=${!i} @change=${o=>this.updateFloor({name:o.target.value})}
              /></label>
              ${this.num(this.t("elevation"),t.elevation,o=>this.updateFloor({elevation:o}))}
              ${this.num(this.t("height"),t.height,o=>this.updateFloor({height:Math.max(1,o)}),.05,1)}
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
                  ${this._notice?g`<p class="fp3d-sub fp3d-wide fp3d-notice">${this._notice}</p>`:_}`:_}
            </div>`:_}
      </section>
      ${this.opening?this.renderOpeningForm(this.opening):this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.device?this.renderDeviceForm(this.device):n?g`${this.renderRoomForm(n,s)} ${this.renderDeviceList(n)}`:t?this.renderRoomList(t):_}
      ${t&&i?this.renderFurnitureLibrary():_} ${i?this.renderEnergySettings():_}
      ${i?this.renderPresenceSettings():_}
      ${t&&i?this.renderBackgroundForm(t):_} ${i?this.renderSettings():_}
      ${i?this.renderBackup():_}
    `}renderRoomList(t){return t.rooms.length?g`<section>
      <h3>${this.t("rooms")}</h3>
      <div class="fp3d-room-list">
        ${t.rooms.map(e=>g`<button class="fp3d-row" @click=${()=>this.selectItem("room",e.id)}>
            <span>${e.name}</span><span class="fp3d-muted">${this.t("area_m2",{a:F(this.hass,pt(e.points),1)})}</span>
          </button>`)}
      </div>
    </section>`:_}renderRoomForm(t,e){let n=this.isAdmin,i=un(t.points),s=X(t.points);return g`<section>
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
            ${e.map(o=>g`<option value=${o.area_id} ?selected=${o.area_id===t.area_id}>${o.name}</option>`)}
          </select></label
        >
        <label class="fp3d-field fp3d-wide"
          >${this.t("material")}
          <select ?disabled=${!n} @change=${o=>this.updateRoom({floor_material:o.target.value})}>
            ${on.map(o=>g`<option value=${o} ?selected=${o===t.floor_material}>${this.t(`mat_${o}`)}</option>`)}
          </select></label
        >
        ${i?g`${this.num(this.t("x"),s.x0,o=>this.setRect("x",o))} ${this.num(this.t("z"),s.z0,o=>this.setRect("z",o))}
            ${this.num(this.t("width"),s.x1-s.x0,o=>this.setRect("w",o),.01,.05)}
            ${this.num(this.t("depth"),s.z1-s.z0,o=>this.setRect("d",o),.01,.05)}`:_}
      </div>
      <details class="fp3d-points" ?open=${!i}>
        <summary>${this.t("points")} (${t.points.length})</summary>
        ${t.points.map((o,a)=>g`<div class="fp3d-point ${a===this._vertex?"fp3d-point-sel":""}">
            <span class="fp3d-muted">${a+1}</span>
            ${this.num(this.t("x"),o[0],l=>this.setPoint(a,0,l))} ${this.num(this.t("z"),o[1],l=>this.setPoint(a,1,l))}
            ${n?g`<button class="fp3d-btn" title=${this.t("delete_point")} ?disabled=${t.points.length<=3} @click=${()=>this.deleteVertex(a)}>
                  ×
                </button>`:_}
          </div>`)}
      </details>
      ${n?g`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.openSpotForm(t)}>${this.t("spots_place")}</button>
            <button class="fp3d-btn" @click=${()=>this.duplicateRoom()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoom()}>${this.t("delete")}</button>
          </div>`:_}
      ${this._spots?this.renderSpotForm(t):_}
    </section>`}openSpotForm(t){let e=X(t.points),n=this.hass?j(this.hass,t.area_id).filter(i=>i.startsWith("light.")):[];this._spots={type:"lamp_downlight",rows:Math.max(1,Math.round((e.z1-e.z0)/1.2)),cols:Math.max(1,Math.round((e.x1-e.x0)/1.2)),entity:n[0]??null}}placeSpots(t){let e=this._spots;if(!e||!this.isAdmin)return;let[n,i,s]=It[e.type],o=he(t,e.rows,e.cols).map(([a,l])=>({id:K("furniture"),type:e.type,x:a,z:l,rotation:0,w:n,d:i,h:s,variant:null,entity:e.entity??"none",power:null}));this.change((a,l)=>l.furniture.push(...o)),this._spots=null,this._notice=this.t("spots_placed",{n:o.length})}renderSpotForm(t){let e=this._spots,n=he(t,e.rows,e.cols).length,i=this.entityOptions(o=>o.startsWith("light.")),s=o=>this._spots={...e,...o};return g`<div class="fp3d-form fp3d-spot-form">
      <label class="fp3d-field fp3d-wide"
        >${this.t("spots_type")}
        <select @change=${o=>s({type:o.target.value})}>
          ${["lamp_downlight","lamp_spot","lamp_panel","lamp_ceiling"].map(o=>g`<option value=${o} ?selected=${o===e.type}>${this.t(`furn_${o}`)}</option>`)}
        </select></label
      >
      ${this.num(this.t("spots_cols"),e.cols,o=>s({cols:Math.max(1,Math.min(12,Math.round(o)))}),1,1)}
      ${this.num(this.t("spots_rows"),e.rows,o=>s({rows:Math.max(1,Math.min(12,Math.round(o)))}),1,1)}
      ${this.entitySelect(this.t("furn_entity_light"),e.entity,void 0,i,o=>s({entity:o==="none"?null:o}))}
      <div class="fp3d-actions fp3d-wide">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!n} @click=${()=>this.placeSpots(t)}>${this.t("spots_add",{n})}</button>
        <button class="fp3d-btn" @click=${()=>this._spots=null}>${this.t("cancel")}</button>
      </div>
      <p class="fp3d-sub fp3d-wide">${this.t("spots_hint")}</p>
    </div>`}entityOptions(t){let e=n=>{let i=this.hass?.entities?.[n],s=i?.area_id??(i?.device_id?this.hass?.devices?.[i.device_id]?.area_id:null);return s?this.hass?.areas?.[s]?.name:void 0};return Object.keys(this.hass?.states??{}).filter(t).map(n=>({id:n,label:`${T(this.hass,n)}${e(n)?` \xB7 ${e(n)}`:""}`})).sort((n,i)=>n.label.localeCompare(i.label))}entitySelect(t,e,n,i,s){let o=n===void 0?null:n?this.t("entity_auto",{name:T(this.hass,n)}):this.t("entity_auto_none");return g`<label class="fp3d-field fp3d-wide"
      >${t}
      <select
        ?disabled=${!this.isAdmin}
        @change=${a=>{let l=a.target.value;s(l==="__auto"?null:l)}}
      >
        ${o!==null?g`<option value="__auto" ?selected=${e===null}>${o}</option>`:_}
        <option value="none" ?selected=${e==="none"||o===null&&e===null}>${this.t("entity_none")}</option>
        ${i.map(a=>g`<option value=${a.id} ?selected=${a.id===e}>${a.label}</option>`)}
      </select></label
    >`}renderOpeningForm(t){let e=this.isAdmin,n=t.type==="window",i=t.type==="garage",s=d=>{if(!this.hass)return null;let p=structuredClone(this._doc.floors);for(let h of p)for(let f of h.openings)f.id===t.id&&(f[d]=null);return Wt(this.hass,p).get(t.id)?.[d]??null},o=d=>this.hass?.states[d]?.attributes.device_class,a=this.entityOptions(d=>d.startsWith("cover.")),l=this.entityOptions(d=>d.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(o(d)??""));return g`<section>
      <h3>${this.t(`opening_${t.type}`)}</h3>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("opening_type")}
          <select
            ?disabled=${!e}
            @change=${d=>{let p=d.target.value,h=ue[p];this.updateOpening({type:p,sill:h.sill,height:h.height,width:p==="garage"||t.type==="garage"?h.width:t.width})}}
          >
            ${["door","window","garage"].map(d=>g`<option value=${d} ?selected=${t.type===d}>${this.t(`opening_${d}`)}</option>`)}
          </select></label
        >
        ${this.num(this.t("width"),t.width,d=>this.updateOpening({width:Math.max(.3,d)}),.01,.3)}
        ${this.num(this.t("opening_position"),t.offset,d=>this.updateOpening({offset:Math.max(0,d)}),.01,0)}
        ${n?this.num(this.t("sill"),t.sill,d=>this.updateOpening({sill:Math.max(0,d)}),.01,0):_}
        ${this.num(this.t("opening_height"),t.height,d=>this.updateOpening({height:Math.max(.3,d)}),.01,.3)}
        ${i?_:g`<label class="fp3d-field fp3d-wide"
          >${this.t("hinge")}
          <select ?disabled=${!e} @change=${d=>this.updateOpening({hinge:d.target.value})}>
            <option value="left" ?selected=${t.hinge==="left"}>${this.t("hinge_left")}</option>
            <option value="right" ?selected=${t.hinge==="right"}>${this.t("hinge_right")}</option>
          </select></label
        >`}
        ${n||i?this.entitySelect(this.t("cover_entity"),t.cover,s("cover"),a,d=>this.updateOpening({cover:d})):_}
        ${this.entitySelect(this.t("contact_entity"),t.contact,s("contact"),l,d=>this.updateOpening({contact:d}))}
        ${n?this.entitySelect(this.t("tilt_entity"),t.tilt,void 0,l,d=>this.updateOpening({tilt:d==="none"?null:d})):_}
      </div>
      <p class="fp3d-sub">${this.t(n?"opening_hint":i?"garage_hint":"door_hint")}</p>
      ${e?g`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOpening()}>${this.t("delete")}</button></div>`:_}
    </section>`}renderFurnitureForm(t){let e=this.isAdmin;return g`<section>
      <h3>${this.t("furniture")}</h3>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("furniture_type")}
          <select ?disabled=${!e} @change=${n=>this.updateFurniture({type:n.target.value})}>
            ${ln.map(n=>g`<option value=${n} ?selected=${n===t.type}>${this.t(`furn_${n}`)}</option>`)}
          </select></label
        >
        ${this.num(this.t("x"),t.x,n=>this.updateFurniture({x:n}))} ${this.num(this.t("z"),t.z,n=>this.updateFurniture({z:n}))}
        ${this.num(this.t("width"),t.w,n=>this.updateFurniture({w:Math.max(.05,n)}),.01,.05)}
        ${this.num(this.t("depth"),t.d,n=>this.updateFurniture({d:Math.max(.05,n)}),.01,.05)}
        ${this.num(this.t("height_m"),t.h,n=>this.updateFurniture({h:Math.max(.005,n)}),.01,0)}
        ${this.num(this.t("rotation"),t.rotation,n=>this.updateFurniture({rotation:(n%360+360)%360}),1)}
      </div>
      ${t.type==="stairs"?g`<p class="fp3d-sub">${this.t("stairs_hint")}</p>`:_}
      ${hn.has(t.type)?this.renderFurnitureLinks(t):_}
      ${e?g`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.rotateFurniture(-90)}>${this.t("rotate_left")}</button>
            <button class="fp3d-btn" @click=${()=>this.rotateFurniture(90)}>${this.t("rotate_right")}</button>
            <button class="fp3d-btn" @click=${()=>this.duplicateFurniture()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
          </div>`:_}
    </section>`}setEnergy(t){let e=structuredClone(this._doc);e.energy={...e.energy,...t},this.setDoc(e)}renderEnergySettings(){let t=this._doc.energy,e=(l,d)=>this.hass?.states[l]?.attributes[d],n=this.entityOptions(l=>l.startsWith("sensor.")&&e(l,"device_class")==="power"),i=this.entityOptions(l=>l.startsWith("sensor.")&&e(l,"device_class")==="battery"),s=this.entityOptions(l=>l.startsWith("sensor.")&&(e(l,"device_class")==="monetary"||/\/(kWh|MWh)$/.test(e(l,"unit_of_measurement")??""))),o=l=>d=>this.setEnergy({[l]:d==="none"?null:d}),a=t.meter?this._doc.floors.find(l=>l.id===t.meter.floor_id)?.name:null;return g`<details class="fp3d-section">
      <summary>${this.t("energy")}</summary>
      <div class="fp3d-form">
        <div class="fp3d-actions fp3d-wide">
          <button class="fp3d-btn ${this._tool==="meter"?"fp3d-primary":""}" ?disabled=${!this.floor} @click=${()=>this._tool="meter"}>
            ${this.t("energy_meter_set")}
          </button>
          ${t.meter?g`<button class="fp3d-btn fp3d-danger" @click=${()=>this.setEnergy({meter:null})}>${this.t("energy_meter_remove")}</button>`:_}
        </div>
        <p class="fp3d-sub fp3d-wide">
          ${t.meter?`${this.t("energy_meter")}: ${a??""} \xB7 ${F(this.hass,t.meter.x,2)} / ${F(this.hass,t.meter.z,2)} m`:this.t("energy_meter_hint")}
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
    </details>`}renderPresenceSettings(){let t=Object.keys(this.hass?.states??{}).filter(i=>i.startsWith("person.")).sort(),e=i=>{let s=i.slice(7),o=this.entityOptions(l=>l.startsWith("sensor.")),a=l=>l.includes(s)&&/(area|room|raum|bermuda|espresense)/.test(l);return[...o.filter(l=>a(l.id)),...o.filter(l=>!a(l.id))]},n=(i,s)=>{let o=structuredClone(this._doc);o.presence=o.presence.filter(a=>a.person!==i),s&&s!=="none"&&o.presence.push({person:i,sensor:s}),this.setDoc(o)};return g`<details class="fp3d-section">
      <summary>${this.t("presence")}</summary>
      <div class="fp3d-form">
        ${t.length?t.map(i=>this.entitySelect(`${T(this.hass,i)} \xB7 ${this.t("presence_sensor")}`,this._doc.presence.find(s=>s.person===i)?.sensor??null,void 0,e(i),s=>n(i,s))):g`<p class="fp3d-sub fp3d-wide">${this.t("no_persons")}</p>`}
      </div>
      <p class="fp3d-sub">${this.t("presence_hint")}</p>
    </details>`}renderFurnitureLinks(t){if(!this.hass)return _;let e=this.hass,n=l=>{let d=structuredClone(this._doc.floors);for(let p of d)for(let h of p.furniture)h.id===t.id&&(h[l]=null);return jt(e,d).get(t.id)?.[l]??null},i=t.type==="tv_board"||t.type==="tv_wall",s=Y(t.type),o=this.entityOptions(l=>s?l.startsWith("light."):i?l.startsWith("media_player."):/^(switch|media_player|fan|input_boolean|climate)\./.test(l)),a=this.entityOptions(l=>l.startsWith("sensor.")&&e.states[l]?.attributes.device_class==="power");return g`<div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t(s?"furn_entity_light":i?"furn_entity_tv":"furn_entity"),t.entity??null,n("entity"),o,l=>this.updateFurniture({entity:l}))}
        ${s?_:this.entitySelect(this.t("furn_power"),t.power??null,n("power"),a,l=>this.updateFurniture({power:l}))}
      </div>
      <p class="fp3d-sub">${this.t(s?t.type==="lamp_pendant"?"lamp_hint_pendant":"lamp_hint":i?"furn_links_hint_tv":"furn_links_hint")}</p>`}renderFurnitureLibrary(){return g`<details class="fp3d-section">
      <summary>${this.t("furniture_add")}</summary>
      ${Object.entries(dn).map(([t,e])=>g`<h4 class="fp3d-lib-head">${this.t(`furn_group_${t}`)}</h4>
          <div class="fp3d-library">
            ${e.map(n=>g`<button class="fp3d-btn" @click=${()=>this.addFurniture(n)}>${this.t(`furn_${n}`)}</button>`)}
          </div>`)}
    </details>`}renderDeviceForm(t){let e=this.isAdmin,n=I(t.entity_id),i=n==="light",s=t.mount??"ceiling",o=n?Nt(n,this.floor?.height??2.5,i?s:null):1;return g`<section>
      <h3>${this.t("device")}</h3>
      <p class="fp3d-dev-title">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d=${n?mt(n):""} />
        </svg>
        ${T(this.hass,t.entity_id)}
      </p>
      <div class="fp3d-form">
        ${i?g`<label class="fp3d-field fp3d-wide"
              >${this.t("lamp_mount")}
              <select ?disabled=${!e} @change=${a=>this.updateDevice({mount:a.target.value,y:null})}>
                ${["ceiling","floor","table","wall"].map(a=>g`<option value=${a} ?selected=${a===s}>${this.t(`lamp_${a}`)}</option>`)}
              </select></label
            >`:_}
        ${this.num(this.t("x"),t.x,a=>this.updateDevice({x:a}))} ${this.num(this.t("z"),t.z,a=>this.updateDevice({z:a}))}
        ${this.num(this.t("marker_height"),t.y??o,a=>this.updateDevice({y:Math.max(0,a)}),.05,0)}
      </div>
      ${e?g`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.centreDevice()}>${this.t("device_centre")}</button>
            ${t.y!==null?g`<button class="fp3d-btn" @click=${()=>this.updateDevice({y:null})}>${this.t("height_auto")}</button>`:_}
            <button
              class="fp3d-btn fp3d-danger"
              @click=${()=>{this.removeDevice(t.entity_id),this._deviceId=null}}
            >
              ${this.t("devices_remove")}
            </button>
          </div>`:_}
    </section>`}renderDeviceList(t){let e=this.isAdmin,n=this.hass,i=t.area_id?n?.areas?.[t.area_id]?.name:void 0,s=n?j(n,t.area_id).filter(c=>$n(I(c))):[],o=new Set([...this.floor?.placements.filter(c=>z([c.x,c.z],t.points)).map(c=>c.entity_id)??[],...this.floor?.furniture.filter(c=>Y(c.type)&&c.entity&&z([c.x,c.z],t.points)).map(c=>c.entity)??[]]),a=n?Pt(n,s):[],l=a.map(c=>c.primary).filter(c=>!o.has(c)),d=this._deviceQuery.trim().toLowerCase(),p=c=>!d||T(n,c,i).toLowerCase().includes(d)||c.includes(d),h=this.floor?.placements.filter(c=>I(c.entity_id)==="light"&&(c.mount??"ceiling")==="ceiling"&&z([c.x,c.z],t.points)).length,f=(c,u=!1)=>{let y=o.has(c);return g`<div class="fp3d-row fp3d-dev-row ${u?"fp3d-dev-extra":""}">
        <button class="fp3d-dev-name ${y?"":"fp3d-muted"}" ?disabled=${!y} @click=${()=>this.selectItem("device",c)}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${mt(I(c))} />
          </svg>
          <span>${T(n,c,i)}</span>
        </button>
        ${e?y?g`<button class="fp3d-link" @click=${()=>this.removeDevice(c)}>${this.t("devices_remove")}</button>`:g`<button class="fp3d-link" @click=${()=>this.placeDevices([c])}>${this.t("devices_place")}</button>`:_}
      </div>`};return g`<section>
      <h3>${this.t("devices")}</h3>
      ${t.area_id?s.length?g`${e&&l.length?g`<button class="fp3d-btn fp3d-primary fp3d-wide-btn" @click=${()=>this.placeDevices(l)}>${this.t("devices_place_all")}</button>`:_}
              ${e&&(h??0)>=2?g`<button class="fp3d-btn fp3d-wide-btn" @click=${()=>this.spreadCeilingLights(t)}>${this.t("lights_spread")}</button>`:_}
              ${s.length>8?g`<input
                    class="fp3d-search"
                    type="search"
                    placeholder=${this.t("devices_search")}
                    .value=${this._deviceQuery}
                    @input=${c=>this._deviceQuery=c.target.value}
                  />`:_}
              <div class="fp3d-room-list">
                ${a.map(c=>{let u=c.others.filter(p),y=this._expanded.has(c.primary)||!!d&&u.length>0;return!p(c.primary)&&!u.length?_:g`${f(c.primary)}
                  ${c.others.length?g`<button
                        class="fp3d-more"
                        @click=${()=>{let m=new Set(this._expanded);m.has(c.primary)?m.delete(c.primary):m.add(c.primary),this._expanded=m}}
                      >
                        ${y?this.t("devices_less"):this.t("devices_more",{n:c.others.length})}
                      </button>`:_}
                  ${y?(d?u:c.others).map(m=>f(m,!0)):_}`})}
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
              <button class="fp3d-btn fp3d-danger fp3d-wide" @click=${()=>this.updateFloor({background:null})}>${this.t("background_remove")}</button>`:_}
      </div>
    </details>`}async loadHistory(){if(this.hass)try{this._history=await nn(this.hass)}catch{this._history=[]}}async restoreFromHistory(t){!this.hass||!confirm(this.t("backup_restore_confirm",{time:this.snapshotTime(t)}))||(await rn(this.hass,t.id),this._notice=this.t("backup_restored"),await this.loadHistory())}exportPlan(t){let e=new Date().toISOString().slice(0,10);vn(`floorplan-3d-${t?"vorlage":"sicherung"}-${e}.json`,JSON.stringify(_n(this._doc,t),null,2))}async importPlan(t){let e=t.target,n=e.files?.[0];if(e.value="",!n||!this.hass)return;let i;try{i=bn(await n.text())}catch(s){alert(this.t("backup_import_error",{error:s.message}));return}confirm(this.t("backup_import_confirm"))&&(await sn(this.hass).catch(()=>{}),this.setDoc(i),this._floorId=i.floors[0]?.id??null,this.selectItem("room",null),this.fit(),this._notice=this.t("backup_imported"))}snapshotTime(t){return new Date(t.saved_at*1e3).toLocaleString(this.hass?.language,{dateStyle:"short",timeStyle:"short"})}renderBackup(){return g`<details
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
      </div>
    </details>`}static styles=[G,gt,O`
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
      .fp3d-furn-lit .fp3d-furn-body {
        fill: rgba(255, 181, 71, 0.35);
        stroke: var(--fp3d-warm);
      }
      .fp3d-rotate {
        cursor: grab;
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
    `]};customElements.get("fp3d-editor")||customElements.define("fp3d-editor",xe);var et=(r,t)=>R(r,t);function B(r,t){if(!t||D(t))return et(r,"state_unavailable");let e=t.attributes;switch(I(t.entity_id)){case"light":return t.state!=="on"?et(r,"state_off"):typeof e.brightness=="number"?`${Math.round(e.brightness/255*100)} %`:et(r,"state_on");case"switch":case"fan":return et(r,t.state==="on"?"state_on":"state_off");case"cover":return typeof e.current_position=="number"&&t.state!=="opening"&&t.state!=="closing"?`${e.current_position} %`:Yt(r,t.state);case"climate":{let n=typeof e.current_temperature=="number"?`${F(r,e.current_temperature,1)} \xB0C`:null;return t.state==="off"?n?`${n} \xB7 ${et(r,"state_off")}`:et(r,"state_off"):n??Yt(r,t.state)}case"media":{let n=t.state==="playing"||t.state==="paused"||t.state==="on"||t.state==="idle",i=[e.app_name,e.media_title,e.source].find(s=>typeof s=="string"&&s);return n&&i?i:Yt(r,t.state)}case"lock":case"camera":return Yt(r,t.state);case"binary":return["door","window","opening","garage_door"].includes(e.device_class)?et(r,t.state==="on"?"state_open":"state_closed"):et(r,t.state==="on"?"state_detected":"state_clear");case"sensor":{let n=Number(t.state),i=e.unit_of_measurement??"";return Number.isFinite(n)?`${F(r,n,1)}${i?` ${i}`:""}`:t.state}default:return""}}function Yt(r,t){let e=`state_${t}`,n=R(r,e);return n===e?t:n}function Hn(r,t){let e=[];for(let n of t.floors)for(let i of n.placements){let s=I(i.entity_id),o=r.states[i.entity_id];if(!s||!o)continue;let a=n.rooms.find(d=>d.points.length>=3&&z([i.x,i.z],d.points))??null,l=a?.area_id?r.areas?.[a.area_id]?.name:void 0;e.push({id:i.entity_id,floorId:n.id,roomId:a?.id??null,x:i.x,z:i.z,y:i.y??Nt(s,n.height,i.mount??null),lamp:s==="light"?i.mount??"ceiling":null,icon:Tt(s),name:T(r,i.entity_id,l),text:B(r,o),active:ut(o),unavailable:D(o),glow:s==="light"?Bt(o):null})}return e}function On(r){return r.floors.flatMap(t=>t.placements.map(e=>e.entity_id))}function _t(r,t){r.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}function Vn(r,t){let e=t.slice(0,t.indexOf("."));return r.callService(e,"toggle",{entity_id:t})}var ji=4,Ki=3e3,Gi=8,qi=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[255,95,210],[120,255,150]],bt=r=>g`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${mt(r)} />
  </svg>`,Zt={previous:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z"},we=r=>g`<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d=${r} /></svg>`,$e=class extends L{static properties={hass:{attribute:!1},room:{attribute:!1},_showAll:{state:!0},_tick:{state:!0}};cameraTimer;hasCameras=!1;constructor(){super(),this.room=null,this._showAll=!1,this._tick=0}connectedCallback(){super.connectedCallback(),this.cameraTimer=setInterval(()=>{this.hasCameras&&!document.hidden&&this._tick++},Ki)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.cameraTimer)}t(t,e){return R(this.hass,t,e)}call(t,e,n){this.hass.callService(t,e,n)}get areaName(){return this.room?.area_id?this.hass.areas?.[this.room.area_id]?.name:void 0}name(t){return T(this.hass,t,this.areaName)}nameButton(t){return g`<button class="fp3d-rp-name" title=${this.t("details")} @click=${()=>_t(this,t)}>${this.name(t)}</button>`}toggle(t,e,n){return g`<button
      class="fp3d-switch"
      role="switch"
      aria-checked=${e?"true":"false"}
      aria-label=${this.name(t.entity_id)}
      ?disabled=${D(t)}
      @click=${n}
    ></button>`}render(){let t=this.room;if(!t||!this.hass)return _;let e=j(this.hass,t.area_id),n=Pt(this.hass,e),i=n.reduce((v,b)=>v+b.others.length,0),s=this._showAll?e:n.map(v=>v.primary),o=v=>s.filter(b=>v.includes(I(b))).map(b=>this.hass.states[b]),a=o(["light"]),l=o(["cover"]),d=o(["climate"]),p=o(["media"]),h=o(["switch","fan","lock"]),f=o(["sensor","binary"]),c=o(["camera"]);this.hasCameras=c.length>0;let u=o(["scene","script"]),y=this.facts(f,d),m=a.filter(v=>v.state==="on");return g`<section class="fp3d-rp" aria-label=${t.name}>
      <header class="fp3d-rp-head">
        <div>
          <h2>${t.name}</h2>
          ${y.length?g`<p class="fp3d-rp-facts">${y.join(" \xB7 ")}</p>`:_}
        </div>
        <button class="fp3d-rp-close" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>
      <div class="fp3d-rp-body">
        ${t.area_id?s.length?_:g`<p class="fp3d-rp-note">${this.t("panel_empty")}</p>`:g`<p class="fp3d-rp-note">${this.t("panel_no_area")}</p>`}
        ${a.length?this.section("panel_lights",a.map(v=>this.lightRow(v)),m.length?g`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_off",{entity_id:m.map(v=>v.entity_id)})}>
                    ${this.t("panel_all_off")}
                  </button>`:_):_}
        ${l.length?this.section("panel_covers",l.map(v=>this.coverRow(v))):_}
        ${d.length?this.section("panel_climate",d.map(v=>this.climateRow(v))):_}
        ${p.length?this.section("panel_media",p.map(v=>this.mediaRow(v))):_}
        ${h.length?this.section("panel_switches",h.map(v=>this.switchRow(v))):_}
        ${c.length?this.section("panel_cameras",c.map(v=>this.cameraTile(v))):_}
        ${f.length?this.section("panel_sensors",f.map(v=>this.sensorRow(v))):_}
        ${u.length?this.section("panel_scenes",[g`<div class="fp3d-rp-scenes">
                  ${u.map(v=>g`<button
                      class="fp3d-btn"
                      ?disabled=${D(v)}
                      @click=${()=>this.call(I(v.entity_id)==="scene"?"scene":"script","turn_on",{entity_id:v.entity_id})}
                    >
                      ${this.name(v.entity_id)}
                    </button>`)}
                </div>`]):_}
        ${i?g`<button class="fp3d-btn fp3d-rp-small fp3d-rp-more" @click=${()=>this._showAll=!this._showAll}>
              ${this._showAll?this.t("panel_less"):this.t("panel_more",{n:i})}
            </button>`:_}
      </div>
    </section>`}facts(t,e){let n=[],i=t.find(a=>a.attributes.device_class==="temperature"&&!D(a)),s=e.find(a=>typeof a.attributes.current_temperature=="number");i?n.push(B(this.hass,i)):s&&n.push(`${F(this.hass,s.attributes.current_temperature,1)} \xB0C`);let o=t.find(a=>a.attributes.device_class==="humidity"&&!D(a));return o&&n.push(B(this.hass,o)),n}section(t,e,n=_){return g`<div class="fp3d-rp-sec">
      <div class="fp3d-rp-sec-head"><h3>${this.t(t)}</h3>${n}</div>
      ${e}
    </div>`}lightRow(t){let e=t.attributes,n=t.state==="on",i=e.supported_color_modes??[],s=i.some(f=>f!=="onoff"),o=i.includes("color_temp"),a=i.some(f=>["hs","rgb","rgbw","rgbww","xy"].includes(f)),l=typeof e.brightness=="number"?Math.round(e.brightness/255*100):100,d=e.min_color_temp_kelvin??2200,p=e.max_color_temp_kelvin??6500,h=t.entity_id;return g`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${bt("light")}</span>
      ${this.nameButton(h)}
      <span class="fp3d-rp-state">${B(this.hass,t)}</span>
      ${this.toggle(t,n,()=>this.call("light","toggle",{entity_id:h}))}
      ${n&&s?g`<label class="fp3d-rp-slider"
            ><span>${this.t("brightness")}</span>
            <input
              type="range"
              min="1"
              max="100"
              .value=${String(l)}
              @change=${f=>this.call("light","turn_on",{entity_id:h,brightness_pct:Number(f.target.value)})}
          /></label>`:_}
      ${n&&o?g`<label class="fp3d-rp-slider fp3d-rp-ct"
            ><span>${this.t("color_temp")}</span>
            <input
              type="range"
              min=${d}
              max=${p}
              step="50"
              .value=${String(e.color_temp_kelvin??d)}
              @change=${f=>this.call("light","turn_on",{entity_id:h,color_temp_kelvin:Number(f.target.value)})}
          /></label>`:_}
      ${n&&a?g`<div class="fp3d-rp-swatches" role="group" aria-label=${this.t("color")}>
            ${qi.map(f=>g`<button
                class="fp3d-rp-swatch"
                style="--c: rgb(${f.join(",")})"
                aria-label="rgb(${f.join(", ")})"
                @click=${()=>this.call("light","turn_on",{entity_id:h,rgb_color:f})}
              ></button>`)}
          </div>`:_}
    </div>`}coverRow(t){let e=t.attributes,n=e.supported_features??0,i=t.entity_id,s=D(t);return g`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon">${bt("cover")}</span>
      ${this.nameButton(i)}
      <span class="fp3d-rp-state">${B(this.hass,t)}</span>
      <div class="fp3d-rp-buttons">
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${s} @click=${()=>this.call("cover","open_cover",{entity_id:i})}>${this.t("cover_open")}</button>
        ${n&Gi?g`<button class="fp3d-btn fp3d-rp-small" ?disabled=${s} @click=${()=>this.call("cover","stop_cover",{entity_id:i})}>${this.t("cover_stop")}</button>`:_}
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${s} @click=${()=>this.call("cover","close_cover",{entity_id:i})}>${this.t("cover_close")}</button>
      </div>
      ${n&ji&&typeof e.current_position=="number"?g`<label class="fp3d-rp-slider"
            ><span>${this.t("position")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${s}
              .value=${String(e.current_position)}
              @change=${o=>this.call("cover","set_cover_position",{entity_id:i,position:Number(o.target.value)})}
          /></label>`:_}
    </div>`}climateRow(t){let e=t.attributes,n=t.entity_id,i=typeof e.temperature=="number"?e.temperature:null,s=e.target_temp_step??.5,o=e.min_temp??5,a=e.max_temp??30,l=e.hvac_modes??[],d=p=>this.call("climate","set_temperature",{entity_id:n,temperature:Math.min(a,Math.max(o,Math.round(p/s)*s))});return g`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${e.hvac_action==="heating"?"fp3d-rp-on":""}">${bt("climate")}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${B(this.hass,t)}</span>
      ${i!==null?g`<div class="fp3d-rp-stepper fp3d-rp-wide">
            <button class="fp3d-btn" aria-label=${this.t("temp_down")} @click=${()=>d(i-s)}>−</button>
            <span><small>${this.t("target_temp")}</small> ${F(this.hass,i,1)} °C</span>
            <button class="fp3d-btn" aria-label=${this.t("temp_up")} @click=${()=>d(i+s)}>+</button>
          </div>`:_}
      ${l.length>1?g`<div class="fp3d-rp-chips">
            ${l.map(p=>g`<button
                class="fp3d-chip"
                aria-pressed=${t.state===p}
                @click=${()=>this.call("climate","set_hvac_mode",{entity_id:n,hvac_mode:p})}
              >
                ${this.stateLabel(p)}
              </button>`)}
          </div>`:_}
    </div>`}stateLabel(t){let e=`state_${t}`,n=this.t(e);return n===e?t:n}mediaRow(t){let e=t.attributes,n=t.entity_id,i=D(t)||t.state==="off",s=[e.media_title,e.media_artist].filter(o=>typeof o=="string"&&o).join(" \xB7 ");return g`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${t.state==="playing"?"fp3d-rp-on":""}">${bt("media")}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${this.stateLabel(t.state)}</span>
      ${s?g`<p class="fp3d-rp-media fp3d-rp-wide">${s}</p>`:_}
      <div class="fp3d-rp-buttons fp3d-rp-wide">
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("previous")} ?disabled=${i} @click=${()=>this.call("media_player","media_previous_track",{entity_id:n})}>
          ${we(Zt.previous)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("play_pause")} ?disabled=${D(t)} @click=${()=>this.call("media_player","media_play_pause",{entity_id:n})}>
          ${we(t.state==="playing"?Zt.pause:Zt.play)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("next")} ?disabled=${i} @click=${()=>this.call("media_player","media_next_track",{entity_id:n})}>
          ${we(Zt.next)}
        </button>
      </div>
      ${typeof e.volume_level=="number"?g`<label class="fp3d-rp-slider"
            ><span>${this.t("volume")}</span>
            <input
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(e.volume_level*100))}
              @change=${o=>this.call("media_player","volume_set",{entity_id:n,volume_level:Number(o.target.value)/100})}
          /></label>`:_}
    </div>`}switchRow(t){let e=t.entity_id,n=I(e),i=e.slice(0,e.indexOf(".")),s=n==="lock"?t.state==="unlocked"||t.state==="open":t.state==="on",o=()=>n==="lock"?this.call("lock",s?"lock":"unlock",{entity_id:e}):this.call(i,"toggle",{entity_id:e});return g`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${s?"fp3d-rp-on":""}">${bt(n)}</span>
      ${this.nameButton(e)}
      <span class="fp3d-rp-state">${B(this.hass,t)}</span>
      ${this.toggle(t,s,o)}
    </div>`}cameraTile(t){let e=t.attributes.entity_picture,n=e&&!D(t)?e.startsWith("data:")?e:`${e}${e.includes("?")?"&":"?"}fp3d=${this._tick}`:null;return g`<button class="fp3d-rp-camera" title=${this.t("camera_live")} @click=${()=>_t(this,t.entity_id)}>
      ${n?g`<img src=${n} alt=${this.name(t.entity_id)} loading="lazy" />`:g`<span class="fp3d-rp-note">${B(this.hass,t)}</span>`}
      <span class="fp3d-rp-camera-name">${this.name(t.entity_id)}</span>
    </button>`}sensorRow(t){let e=I(t.entity_id),n=e==="binary"&&t.state==="on";return g`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${bt(e)}</span>
      ${this.nameButton(t.entity_id)}
      <span class="fp3d-rp-state">${B(this.hass,t)}</span>
    </div>`}fire(t){this.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0}))}static styles=[G,gt,O`
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
    `]};customElements.get("fp3d-room-panel")||customElements.define("fp3d-room-panel",$e);var lt=.03,Yi=.07;function vt(r,t=!1){if(!r)return null;let e=Number(r.state);if(!Number.isFinite(e))return null;let n=String(r.attributes.unit_of_measurement??"W"),i=n==="kW"?e*1e3:n==="MW"?e*1e6:e;return t?-i:i}function Bn(r,t){return t.startsWith("sensor.")&&r.states[t]?.attributes.device_class==="power"}function ke(r,t){if(Bn(r,t))return t;let e=r.entities?.[t]?.device_id;return!e||!r.entities?null:Object.values(r.entities).find(i=>i.device_id===e&&i.entity_id!==t&&Bn(r,i.entity_id))?.entity_id??null}function Un(r,t){let e=t.energy,n=new Set([e.grid,e.solar,e.battery].filter(Boolean)),i=[],s=new Set;for(let o of t.floors)for(let a of o.placements){let l=ke(r,a.entity_id);!l||n.has(l)||s.has(l)||(s.add(l),i.push({id:a.entity_id,powerEntity:l,floorId:o.id,x:a.x,z:a.z,power:Math.max(0,vt(r.states[l])??0)}))}return i}function jn(r,t,e){let n=t.energy,i=n.grid?vt(r.states[n.grid],n.grid_invert):null,s=n.solar?vt(r.states[n.solar]):null,o=n.battery?vt(r.states[n.battery],n.battery_invert):null,a=n.battery_soc?Number(r.states[n.battery_soc]?.state):NaN,l=n.tariff?r.states[n.tariff]:void 0,d=Number(l?.state),p=null;return i!==null||s!==null||o!==null?p=Math.max(0,(i??0)+Math.max(0,s??0)+(o??0)):e.length&&(p=e.reduce((h,f)=>h+f.power,0)),{grid:i,solar:s===null?null:Math.max(0,s),battery:o,soc:Number.isFinite(a)?a:null,tariff:l&&Number.isFinite(d)?{value:d,unit:String(l.attributes.unit_of_measurement??"")}:null,consumption:p}}function Qt(r,t){return r.pos.push(t),r.adj.push([]),r.pos.length-1}function yt(r,t,e){let n=Math.hypot(r.pos[t][0]-r.pos[e][0],r.pos[t][1]-r.pos[e][1]);r.adj[t].push({to:e,w:n}),r.adj[e].push({to:t,w:n})}function Zi(r,t){let e=r.length,n=r.map((i,s)=>{let o=r[(s+1)%e],a=o[0]-i[0],l=o[1]-i[1],d=Math.hypot(a,l)||1,p=-l/d,h=a/d;return{p:[i[0]+p*t[s],i[1]+h*t[s]],d:[a/d,l/d],n:[p,h]}});return r.map((i,s)=>{let o=n[(s-1+e)%e],a=n[s],l=o.d[0]*a.d[1]-o.d[1]*a.d[0];if(Math.abs(l)<1e-6)return[i[0]+a.n[0]*t[s],i[1]+a.n[1]*t[s]];let d=((a.p[0]-o.p[0])*a.d[1]-(a.p[1]-o.p[1])*a.d[0])/l;return[o.p[0]+o.d[0]*d,o.p[1]+o.d[1]*d]})}function Qi(r){return U(r.points)>=0?{pts:r.points,flipped:!1}:{pts:[...r.points].reverse(),flipped:!0}}function Ji(r,t,e){let n={pos:[],adj:[],rings:new Map},{walls:i}=Ft(r.rooms,{exterior:t,interior:e});for(let s of r.rooms){if(s.points.length<3)continue;let{pts:o,flipped:a}=Qi(s),l=o.length,d=o.map((f,c)=>{let u=a?(l-2-c+l)%l:c,y=i.some(m=>!m.exterior&&m.sources.some(v=>v.room_id===s.id&&v.edge===u));return Yi+(y?e/2:0)}),p=Zi(o,d).map(f=>Qt(n,f)),h=p.map((f,c)=>[f,p[(c+1)%l]]);for(let[f,c]of h)yt(n,f,c);n.rings.set(s.id,h)}for(let s of i){if(s.exterior||!s.roomLeft||!s.roomRight)continue;let o=[(s.a[0]+s.b[0])/2,(s.a[1]+s.b[1])/2],a=Jt(n,s.roomLeft,o),l=Jt(n,s.roomRight,o);a!==null&&l!==null&&yt(n,a,l)}return n}function Jt(r,t,e){let n=r.rings.get(t);if(!n)return null;let i=null;for(let o of n){let a=r.pos[o[0]],l=r.pos[o[1]],d=l[0]-a[0],p=l[1]-a[1],h=d*d+p*p||1,f=Math.min(1,Math.max(0,((e[0]-a[0])*d+(e[1]-a[1])*p)/h)),c=[a[0]+d*f,a[1]+p*f],u=Math.hypot(e[0]-c[0],e[1]-c[1]);(!i||u<i.d)&&(i={seg:o,q:c,d:u})}if(!i)return null;let s=Qt(r,i.q);return yt(r,s,i.seg[0]),yt(r,s,i.seg[1]),s}function Nn(r,t){let e=r.rooms.filter(s=>s.points.length>=3),n=e.find(s=>z(t,s.points));if(n)return n;let i=null;for(let s of e)for(let o of s.points){let a=Math.hypot(t[0]-o[0],t[1]-o[1]);(!i||a<i.d)&&(i={room:s,d:a})}return i?.room??null}function Xi(r,t){let e=r.pos.map(()=>1/0),n=r.pos.map(()=>-1),i=r.pos.map(()=>!1);for(e[t]=0;;){let s=-1;for(let o=0;o<e.length;o++)!i[o]&&e[o]<1/0&&(s<0||e[o]<e[s])&&(s=o);if(s<0)break;i[s]=!0;for(let{to:o,w:a}of r.adj[s])e[s]+a<e[o]-1e-9&&(e[o]=e[s]+a,n[o]=s)}return{dist:e,prev:n}}var Wn=new WeakMap;function ts(r,t){let e=r.energy.meter,n=r.floors.find(p=>p.id===e.floor_id),i=[],{wall_exterior:s,wall_interior:o}=r.settings,a=new Map,l=new Map;t.forEach((p,h)=>l.set(p.floorId,[...l.get(p.floorId)??[],h]));let d=r.floors.filter(p=>l.has(p.id));for(let p of d){if(p.id===n.id)continue;let h=p.elevation>n.elevation,f=l.get(p.id),c=f.every(y=>t[y].kind==="battery")?"battery":"consumer";i.push({floorId:n.id,a:[e.x,lt,e.z],b:[e.x,h?n.height:-.2,e.z],dist:0,members:f,kind:c});let u=Math.abs(p.elevation-n.elevation);i.push({floorId:p.id,a:[e.x,h?-.2:p.height,e.z],b:[e.x,lt,e.z],dist:u,members:f,kind:c}),a.set(p.id,u+.25)}for(let p of d){let h=Ji(p,s,o),f=Nn(p,[e.x,e.z]);if(!f)continue;let c=Qt(h,[e.x,e.z]),u=Jt(h,f.id,[e.x,e.z]);if(u===null)continue;yt(h,c,u);let y=[];for(let M of l.get(p.id)){let w=t[M],$=Nn(p,[w.x,w.z]);if(!$)continue;let k=Qt(h,[w.x,w.z]),A=Jt(h,$.id,[w.x,w.z]);A!==null&&(yt(h,k,A),y.push({node:k,member:M}))}let{dist:m,prev:v}=Xi(h,c),b=new Map;for(let M of y)if(Number.isFinite(m[M.node]))for(let w=M.node;v[w]>=0;w=v[w]){let $=v[w],k=`${$}>${w}`,A=b.get(k)??{a:$,b:w,members:[]};A.members.push(M.member),b.set(k,A)}let x=a.get(p.id)??0;for(let{a:M,b:w,members:$}of b.values()){let k=h.pos[M],A=h.pos[w],N=$.every(W=>t[W].kind==="battery")?"battery":"consumer";i.push({floorId:p.id,a:[k[0],lt,k[1]],b:[A[0],lt,A[1]],dist:x+m[M],members:$,kind:N})}}return i}function Kn({building:r,consumers:t,summary:e,battery:n}){let i=r.energy.meter;if(!i)return[];let s=r.floors.find(c=>c.id===i.floor_id);if(!s)return[];let{wall_exterior:o,wall_interior:a}=r.settings,l=t.map(c=>({floorId:c.floorId,x:c.x,z:c.z,kind:"consumer",power:c.power}));n&&e.battery!==null&&l.push({...n,kind:"battery",power:Math.abs(e.battery)});let d=`${i.floor_id}:${i.x},${i.z}|${l.map(c=>`${c.floorId}:${c.x},${c.z}:${c.kind}`).join(";")}`,p=Wn.get(r);p||Wn.set(r,p=new Map);let h=p.get(d);h||(h=ts(r,l),p.clear(),p.set(d,h));let f=h.map(c=>({floorId:c.floorId,a:c.a,b:c.b,dist:c.dist,power:c.members.reduce((u,y)=>u+l[y].power,0),kind:c.kind}));if(e.grid!==null){let{walls:c}=Ft(s.rooms,{exterior:o,interior:a}),u=null;for(let y of c){if(!y.exterior)continue;let m=y.b[0]-y.a[0],v=y.b[1]-y.a[1],b=m*m+v*v||1,x=Math.min(1,Math.max(0,((i.x-y.a[0])*m+(i.z-y.a[1])*v)/b)),M=[y.a[0]+m*x,y.a[1]+v*x],w=Math.hypot(i.x-M[0],i.z-M[1]),$=Math.sqrt(b);(!u||w<u.d)&&(u={q:M,out:[v/$,-m/$],d:w})}if(u){let y=[u.q[0]+u.out[0]*(o+1.4),lt,u.q[1]+u.out[1]*(o+1.4)],m=[i.x,lt,i.z],v=e.grid>=0;f.push({floorId:s.id,a:v?y:m,b:v?m:y,dist:0,power:Math.abs(e.grid),kind:v?"grid":"export"})}}if(e.solar!==null&&f.push({floorId:s.id,a:[i.x+.08,s.height+.6,i.z+.08],b:[i.x+.08,lt,i.z+.08],dist:0,power:e.solar,kind:"solar"}),e.battery!==null&&e.battery>0)for(let c of f)c.kind==="battery"&&([c.a,c.b]=[c.b,c.a]);return f}function Gn(r,t){let e=[.22,.88,1],n=[1,.78,.2],i=[.35,1,.55];if(r==="grid")return e;if(r==="export"||r==="solar")return n;if(r==="battery")return i;let s=[[Math.max(0,t.grid??0),e],[Math.max(0,(t.solar??0)-Math.max(0,-(t.grid??0))-Math.max(0,-(t.battery??0))),n],[Math.max(0,t.battery??0),i]],[o]=s.reduce((a,l)=>l[0]>a[0]?l:a);return o>0?s.find(a=>a[0]===o)[1]:e}var es=new URL(import.meta.url),ns=new URL("./floorplan-3d-3d.js?v=ee868bedc88a",es).href,qn;function Yn(){return qn??=import(ns),qn}var Zn=r=>r.toLowerCase().replace(/[_\-]+/g," ").replace(/\s+/g," ").trim();function is(r,t,e){let n=Zn(e);if(!n||n==="unknown"||n==="unavailable"||n==="not home"||n==="away")return null;for(let i of t.floors)for(let s of i.rooms)if([s.name,s.area_id??"",s.area_id?r.areas?.[s.area_id]?.name??"":""].filter(Boolean).map(Zn).includes(n))return{floorId:i.id,room:s};return null}function ss(r){let t=r.trim().split(/\s+/).filter(Boolean);return t.length?(t.length>1?t[0][0]+t[t.length-1][0]:t[0].slice(0,2)).toUpperCase():"?"}function Qn(r,t){let e=[],n=new Map;for(let i of t.presence){let s=r.states[i.person];if(!s||!i.sensor||s.state!=="home"&&s.state!=="on")continue;let o=r.states[i.sensor];if(!o)continue;let a=is(r,t,o.state);if(!a)continue;let l=n.get(a.room.id)??0;n.set(a.room.id,l+1);let[d,p]=Z(a.room.points),h=-Math.PI/2+.9+l*1.15,f=.75,c=s.attributes.friendly_name??i.person;e.push({id:i.person,name:c,initials:ss(c),picture:s.attributes.entity_picture??null,floorId:a.floorId,roomId:a.room.id,x:d+Math.cos(h)*f,z:p+Math.sin(h)*f})}return e}function Jn(r,t,e,n){let i=new Map,s=o=>!!o&&r.states[o]?.state==="on";for(let o of t.floors){let a=new Set;for(let d of o.rooms)for(let p of _e(r,j(r,d.area_id)))I(p)==="light"&&a.add(p);for(let d of o.placements)I(d.entity_id)==="light"&&a.add(d.entity_id);let l=o.openings.filter(d=>{let p=e.get(d.id);return p?d.type==="garage"?(Ut(r,p,"garage").cover??1)<.95:s(p.contact)||s(p.tilt):!1}).length;i.set(o.id,{rooms:o.rooms.length,lightsOn:[...a].filter(d=>r.states[d]?.state==="on").length,open:l,persons:n.filter(d=>d.floorId===o.id).length})}return i}function Xn(r,t){let e=[t.rooms===1?R(r,"floor_rooms_one"):R(r,"floor_rooms",{n:t.rooms})];return t.lightsOn&&e.push(R(r,"floor_lights",{n:t.lightsOn})),t.open&&e.push(R(r,"floor_open",{n:t.open})),t.persons&&e.push(R(r,"floor_persons",{n:t.persons})),e.join(" \xB7 ")}var rs={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"},Me=class extends L{static properties={hass:{attribute:!1},building:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},wallMode:{attribute:!1},explode:{type:Boolean},markerMode:{attribute:!1},quality:{attribute:!1},showStats:{type:Boolean},_stats:{state:!0},_error:{state:!0},_energy:{state:!0}};viewer=null;starting=!1;shownStates=new Map;openingLinks=null;linkedRegistry;furnitureLinks=new Map;watched=[];constructor(){super(),this.building=null,this.floorId=null,this.roomId=null,this.wallMode="auto",this.explode=!0,this.markerMode="important",this.quality="auto",this.showStats=!1,this._stats=null,this._error=null,this._energy=null}connectedCallback(){super.connectedCallback(),this.hasUpdated&&!this.viewer&&this.start()}disconnectedCallback(){super.disconnectedCallback(),this.viewer?.dispose(),this.viewer=null}firstUpdated(){this.start()}async start(){if(!(this.starting||this.viewer)){this.starting=!0;try{let t=await Yn();if(!this.isConnected)return;let e=this.renderRoot.querySelector(".fp3d-stage");this.viewer=t.createViewer(e,{quality:this.quality,explode:this.explode,onRoomTap:(n,i)=>this.fire("room-tap",{floorId:n,roomId:i}),onFloorTap:n=>this.fire("floor-tap",{floorId:n}),floorInfo:n=>n.rooms.length===1?R(this.hass,"floor_rooms_one"):R(this.hass,"floor_rooms",{n:n.rooms.length}),onBack:()=>this.fire("back",{}),onDeviceTap:n=>this.onDeviceTap(n),onDeviceHold:n=>_t(this,n),onStats:n=>{this.showStats&&(this._stats=n)}}),this.viewer.setWallMode(this.wallMode),this.building&&this.viewer.setBuilding(this.building),this.syncDevices(!0),this.viewer.setFloor(this.floorId,!1),this.roomId&&this.viewer.selectRoom(this.roomId)}catch(t){this._error=String(t)}finally{this.starting=!1}}}updated(t){let e=this.viewer;e&&(t.has("building")&&this.building&&e.setBuilding(this.building),(t.has("building")||t.has("hass")||t.has("markerMode"))&&this.syncDevices(t.has("building")||t.has("markerMode")),t.has("floorId")&&e.setFloor(this.floorId),t.has("roomId")&&(this.roomId||t.get("roomId"))&&e.selectRoom(this.roomId),t.has("wallMode")&&e.setWallMode(this.wallMode),t.has("explode")&&e.setExplode(this.explode),t.has("quality")&&t.get("quality")!==void 0&&e.setQuality(this.quality))}syncDevices(t){let e=this.viewer,n=this.building;if(!e||!n||!this.hass)return;let i=this.hass;if(t||!this.openingLinks||this.linkedRegistry!==i.entities){this.openingLinks=Wt(i,n.floors),this.furnitureLinks=jt(i,n.floors),this.linkedRegistry=i.entities;let m=[...this.openingLinks.values()].flatMap(A=>[A.cover,A.contact,A.tilt]),v=On(n),b=v.map(A=>ke(i,A)),x=n.energy,M=n.presence.flatMap(A=>[A.person,A.sensor]),w=n.floors.flatMap(A=>A.rooms.flatMap(N=>j(i,N.area_id).filter(W=>I(W)==="light"))),$=[...this.furnitureLinks.values()].flatMap(A=>[A.entity,A.power]),k=[...v,...m,...b,...$,x.grid,x.solar,x.battery,x.battery_soc,x.tariff,...M,...w];this.watched=[...new Set(k.filter(A=>!!A))],t=!0}if(!(t||this.watched.some(m=>this.shownStates.get(m)!==i.states[m])))return;this.shownStates=new Map(this.watched.map(m=>[m,i.states[m]]));let o=Un(i,n),a=Hn(i,n),l=this.furnitureMarkers(i,n,new Set(a.map(m=>m.id)),new Set(o.map(m=>m.powerEntity)));o.push(...l.consumers);let d=jn(i,n,o),p=new Map(o.filter(m=>m.id!==m.powerEntity).map(m=>[m.id,m.power]));e.setDevices([...a,...l.markers].map(m=>{let v=p.get(m.id)??null,b={...m,power:v,powerText:v===null?void 0:xt(i,v)};return{...b,pin:this.showPin(b)}})),e.setPickTargets(l.targets,this.openingTargets()),e.setScreens(l.screens);let h=new Map(n.floors.flatMap(m=>m.openings.map(v=>[v.id,v.type])));e.setOpeningStates(new Map([...this.openingLinks].map(([m,v])=>[m,Ut(i,v,h.get(m))])));let f=n.energy.battery?n.floors.flatMap(m=>m.placements.filter(v=>v.entity_id===n.energy.battery).map(v=>({floorId:m.id,x:v.x,z:v.z})))[0]:null;e.setFlows(Kn({building:n,consumers:o,summary:d,battery:f??null}).map(m=>({floorId:m.floorId,a:m.a,b:m.b,dist:m.dist,power:m.power,color:Gn(m.kind,d)})));let c=Qn(i,n);e.setPersons(c);let u=Jn(i,n,this.openingLinks,c);e.setFloorInfo(new Map([...u].map(([m,v])=>[m,Xn(i,v)])));let y=d.grid!==null||d.solar!==null||d.battery!==null||d.tariff!==null;this._energy=y?d:null}furnitureMarkers(t,e,n,i){let s=[],o=[],a=new Map,l=new Map;for(let d of e.floors)for(let p of d.furniture){let h=this.furnitureLinks.get(p.id);if(Y(p.type)){s.push(this.lampMarker(t,d,p,h?.entity??null));continue}if(!h)continue;l.set(p.id,h.entity??h.power);let f=h.entity??h.power,c=h.entity?t.states[h.entity]:void 0,u=h.power?vt(t.states[h.power]):null;if(h.power&&u!==null&&!i.has(h.power)&&(i.add(h.power),o.push({id:f,powerEntity:h.power,floorId:d.id,x:p.x,z:p.z,power:Math.max(0,u)})),c&&(p.type==="tv_board"||p.type==="tv_wall"||p.type==="desk")){let v=I(c.entity_id)==="media"?Mn(c):ut(c)?[.22,.88,1]:null,b=I(c.entity_id)==="media"?c.attributes.entity_picture??null:null;v&&a.set(p.id,{color:v,level:c.state==="playing"?1:.6,picture:b})}if(n.has(f))continue;n.add(f);let y=h.entity?I(h.entity):null,m=d.rooms.find(v=>v.points.length>=3&&z([p.x,p.z],v.points));s.push({id:f,floorId:d.id,roomId:m?.id??null,x:p.x,z:p.z,y:os(p),icon:Tt(y??"switch"),name:h.entity?T(t,h.entity):R(t,`furn_${p.type}`),text:c?B(t,c):u!==null?xt(t,Math.max(0,u)):"",active:c?ut(c):(u??0)>5,unavailable:c?D(c):!1,glow:null,fromFurniture:!0})}return{markers:s,consumers:o,screens:a,targets:l}}lampMarker(t,e,n,i){let s=i?t.states[i]:void 0,o=rs[n.type],a=o==="table"?pn(e,n.x,n.z):0,l=e.rooms.find(h=>h.points.length>=3&&z([n.x,n.z],h.points)),d=e.height,p={ceiling:d-.3,downlight:d-.25,spot:d-.35,panel:d-.25,pendant:Math.max(.6,d-n.h-.25),floor:n.h+.25,uplight:n.h+.25,table:a+n.h+.2,wall:2.1,strip:d-.25}[o];return{id:i??`lamp:${n.id}`,floorId:e.id,roomId:l?.id??null,x:n.x,z:n.z,y:p,icon:Tt("light"),name:i?T(t,i):R(t,`furn_${n.type}`),text:s?B(t,s):"",active:s?ut(s):!1,unavailable:s?D(s):!1,glow:s?Bt(s):null,lamp:o,rotation:n.rotation,size:[n.w,n.d,n.h],base:a,pickable:!!i,fromFurniture:!0}}showPin(t){if(this.markerMode==="none")return!1;if(this.markerMode==="all")return!0;if(t.lamp)return!1;let e=I(t.id);return e==="light"?!1:t.fromFurniture?(t.power??0)>=1||e==="media"&&t.active:!0}openingTargets(){let t=new Map;for(let[e,n]of this.openingLinks??[]){let i=n.cover??n.contact??n.tilt;i&&t.set(e,i)}return t}onDeviceTap(t){let e=I(t);e&&wn.has(e)?Vn(this.hass,t):_t(this,t)}resetView(){this.viewer?.resetView()}fire(t,e){this.dispatchEvent(new CustomEvent(t,{detail:e,bubbles:!0,composed:!0}))}renderEnergy(){let t=this._energy;if(!t||this.roomId)return _;let e=i=>R(this.hass,i),n=[];if(t.consumption!==null&&n.push({cls:"total",label:e("energy_consumption"),value:xt(this.hass,t.consumption)}),t.grid!==null){let i=t.grid<0;n.push({cls:i?"export":"grid",label:e(i?"energy_grid_export":"energy_grid_import"),value:xt(this.hass,Math.abs(t.grid))})}if(t.solar!==null&&n.push({cls:"solar",label:e("energy_solar"),value:xt(this.hass,t.solar)}),t.battery!==null||t.soc!==null){let i=[t.battery!==null?xt(this.hass,Math.abs(t.battery)):null,t.soc!==null?`${Math.round(t.soc)} %`:null].filter(Boolean);n.push({cls:"battery",label:e("energy_battery"),value:i.join(" \xB7 ")})}return t.tariff&&n.push({cls:"tariff",label:e("energy_tariff"),value:`${F(this.hass,t.tariff.value,3)} ${t.tariff.unit}`.trim()}),g`<div class="fp3d-energy" aria-live="off">
      ${n.map(i=>g`<div class="fp3d-energy-item fp3d-energy-${i.cls}"><span>${i.label}</span><b>${i.value}</b></div>`)}
    </div>`}render(){return g`<div class="fp3d-stage">
      ${this._error?g`<p class="fp3d-error">${this._error}</p>`:_} ${this.renderEnergy()}
      ${this.showStats&&this._stats?g`<span class="fp3d-stats"
            ><b>${this._stats.fps?R(this.hass,"stats_fps",{fps:this._stats.fps,ms:this._stats.worstMs}):R(this.hass,"stats_idle")}</b> ·
            ${R(this.hass,"stats",{calls:this._stats.calls,tris:this._stats.triangles.toLocaleString()})} ·
            ${R(this.hass,this._stats.low?"stats_low":"stats_full",{r:F(this.hass,this._stats.pixelRatio,2)})}</span
          >`:_}
    </div>`}static styles=[G,O`
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
    `]};customElements.get("fp3d-view3d")||customElements.define("fp3d-view3d",Me);function xt(r,t){return Math.abs(t)>=1e3?`${F(r,t/1e3,1)} kW`:`${Math.round(t)} W`}function os(r){return r.type==="tv_board"?r.h+.9:r.type==="tv_wall"?1.3+r.h/2+.25:r.type==="kitchen_wall"?1.45+r.h+.25:r.h+.35}var nt={get(r){try{return localStorage.getItem(`floorplan_3d.${r}`)}catch{return null}},set(r,t){try{localStorage.setItem(`floorplan_3d.${r}`,t)}catch{}}},Se=class extends L{static properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_mode:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_wallMode:{state:!0},_explode:{state:!0},_quality:{state:!0},_stats:{state:!0},_markers:{state:!0}};data=new ht(this);constructor(){super(),this.narrow=!1,this._mode="view",this._floorId=null,this._roomId=null,this._wallMode="auto",this._explode=nt.get("explode")!=="0";let t=nt.get("quality");this._quality=t==="low"||t==="high"?t:"auto",this._stats=nt.get("stats")==="1"||new URLSearchParams(location.search).has("fp3d_stats");let e=nt.get("markers");this._markers=e==="none"||e==="all"?e:"important"}t(t,e){return R(this.hass,t,e)}willUpdate(t){t.has("hass")&&this.hass&&this.data.setHass(this.hass);let e=this.data.building;e&&this._floorId&&!e.floors.some(n=>n.id===this._floorId)&&(this._floorId=null,this._roomId=null)}get isAdmin(){return this.hass?.user?.is_admin??!1}setMode(t){t!==this._mode&&(t==="view"&&this.data.flush(),this._mode=t)}onRoomTap(t){let{floorId:e,roomId:n}=t.detail;n&&(this._floorId===null&&(this.data.building?.floors.length??0)>1&&(this._floorId=e),this._roomId=n===this._roomId?null:n)}setExplode(t){this._explode=t,nt.set("explode",t?"1":"0")}setQuality(t){this._quality=t,nt.set("quality",t)}back(){this._roomId?this._roomId=null:this._floorId&&(this.data.building?.floors.length??0)>1?this._floorId=null:this.renderRoot.querySelector("fp3d-view3d")?.resetView()}onKey=t=>{t.key==="Escape"&&this._mode==="view"&&this.back()};connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey)}render(){let t=this.data.building,e=this.data.saveState;return g`
      <div class="fp3d-app">
        <header class="fp3d-header">
          <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
          <h1>Floorplan 3D</h1>
          ${this.isAdmin?g`<div class="fp3d-seg" role="tablist">
                <button role="tab" aria-pressed=${this._mode==="view"} @click=${()=>this.setMode("view")}>${this.t("view")}</button>
                <button role="tab" aria-pressed=${this._mode==="editor"} @click=${()=>this.setMode("editor")}>${this.t("editor")}</button>
              </div>`:_}
          <span class="fp3d-grow"></span>
          ${this._mode==="view"&&t?.floors.some(n=>n.rooms.length)?g`<div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("quality")}>
                ${["auto","low","high"].map(n=>g`<button aria-pressed=${this._quality===n} @click=${()=>this.setQuality(n)}>${this.t(`quality_${n}`)}</button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("markers")}>
                ${["none","important","all"].map(n=>g`<button
                      aria-pressed=${this._markers===n}
                      title=${this.t("markers")}
                      @click=${()=>{this._markers=n,nt.set("markers",n)}}
                    >
                      ${this.t(`markers_${n}`)}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality">
                <button
                  aria-pressed=${this._stats}
                  title=${this.t("fps_title")}
                  @click=${()=>{this._stats=!this._stats,nt.set("stats",this._stats?"1":"0")}}
                >
                  ${this.t("fps")}
                </button>
              </div>`:_}
          ${this._mode==="editor"&&e!=="idle"?g`<span class="fp3d-save fp3d-save-${e}">${this.t(e==="saving"?"saving":e==="saved"?"saved":"save_error")}</span>`:_}
        </header>
        ${this.renderNotices()}
        ${this.data.error&&!t?g`<p class="fp3d-message">${this.t("load_error")}: ${this.data.error}</p>`:_}
        ${!t&&!this.data.error?g`<p class="fp3d-message">${this.t("loading")}</p>`:_}
        ${t?this._mode==="editor"&&this.isAdmin?this.renderEditor(t):this.renderView(t):_}
      </div>
    `}renderNotices(){let t=this.data,e=[];if(t.needsRestart&&e.push(g`<div class="fp3d-notice fp3d-notice-warn">${t.backendVersion?this.t("needs_restart",{version:t.backendVersion}):this.t("needs_restart_old")}</div>`),t.saveState==="error"&&t.saveError&&e.push(g`<div class="fp3d-notice fp3d-notice-error">${this.t("save_failed_detail",{error:t.saveError})}</div>`),t.draft&&this.isAdmin){let n=new Date(t.draft.savedAt).toLocaleString(this.hass?.language);e.push(g`<div class="fp3d-notice">
          <span>${this.t("draft_found",{time:n})}</span>
          <button class="fp3d-btn fp3d-primary" @click=${()=>t.restoreDraft()}>${this.t("draft_restore")}</button>
          <button class="fp3d-btn" @click=${()=>t.discardDraft()}>${this.t("draft_discard")}</button>
        </div>`)}return e.length?g`<div class="fp3d-notices">${e}</div>`:_}renderEditor(t){return g`<fp3d-editor
      class="fp3d-body"
      .hass=${this.hass}
      .building=${t}
      .narrow=${this.narrow}
      @building-changed=${e=>this.data.edit(e.detail.building)}
    ></fp3d-editor>`}renderView(t){if(!t.floors.length||!t.floors.some(i=>i.rooms.length))return g`<div class="fp3d-empty">
        <p>${this.t(this.isAdmin?"no_building_admin":"no_building")}</p>
        ${this.isAdmin?g`<button class="fp3d-btn fp3d-primary" @click=${()=>this.setMode("editor")}>${this.t("open_editor")}</button>`:_}
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
              <span class="fp3d-sep"></span>`:_}
        ${n.flatMap(i=>i.rooms.map(s=>g`<button
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
          .markerMode=${this._markers}
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
            ></fp3d-room-panel>`:_}
        <div class="fp3d-overlay">
          <div class="fp3d-seg">
            <button aria-pressed=${this._wallMode==="auto"} @click=${()=>this._wallMode="auto"}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wallMode==="cut"} @click=${()=>this._wallMode="cut"}>${this.t("walls_cut")}</button>
          </div>
          ${t.floors.length>1&&!this._floorId?g`<div class="fp3d-seg">
                <button aria-pressed=${this._explode} @click=${()=>this.setExplode(!0)}>${this.t("floors_apart")}</button>
                <button aria-pressed=${!this._explode} @click=${()=>this.setExplode(!1)}>${this.t("floors_stacked")}</button>
              </div>`:_}
          ${this._roomId||this._floorId&&t.floors.length>1?g`<button class="fp3d-chip" @click=${()=>this.back()}>${this.t("back")}</button>`:_}
        </div>
      </div>
    `}static styles=[G,gt,O`
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
    `]};customElements.get("floorplan-3d-panel")||customElements.define("floorplan-3d-panel",Se);var Ee=class extends L{static properties={hass:{attribute:!1},_config:{state:!0},_roomId:{state:!0},_floorId:{state:!0}};data=new ht(this);constructor(){super(),this._roomId=null,this._floorId=null}static getStubConfig(){return{type:"custom:floorplan-3d-card"}}setConfig(t){if(t.height!==void 0&&!(t.height>100))throw new Error("height must be a number of pixels above 100");this._config=t}getCardSize(){return Math.ceil((this._config?.height??420)/50)}getGridOptions(){return{columns:"full",rows:Math.ceil((this._config?.height??420)/56),min_rows:4}}willUpdate(t){t.has("hass")&&this.hass&&this.data.setHass(this.hass)}back(){this._roomId?this._roomId=null:this._config?.floor||(this._floorId=null)}render(){let t=this.data.building,e=this._config?.height??420,n=this._config?.floor??(t&&t.floors.length===1?t.floors[0].id:t?.floors.some(s=>s.id===this._floorId)?this._floorId:null),i=!!this._roomId||!this._config?.floor&&!!this._floorId&&(t?.floors.length??0)>1;return g`<ha-card>
      <div class="fp3d-card-body" style="height:${e}px">
        ${t&&t.floors.some(s=>s.rooms.length)?g`<fp3d-view3d
              .hass=${this.hass}
              .building=${t}
              .floorId=${n}
              .roomId=${this._roomId}
              .wallMode=${this._config?.walls??"auto"}
              .explode=${this._config?.explode??!0}
              .quality=${this._config?.quality??"auto"}
              ?showStats=${this._config?.stats??!1}
              .markerMode=${this._config?.markers??"important"}
              @room-tap=${s=>{s.detail.roomId&&(!n&&!this._config?.floor&&(this._floorId=s.detail.floorId),this._roomId=s.detail.roomId===this._roomId?null:s.detail.roomId)}}
              @floor-tap=${s=>{this._floorId=s.detail.floorId,this._roomId=null}}
              @back=${()=>this.back()}
            ></fp3d-view3d>`:g`<p class="fp3d-card-msg">${this.data.error??(t?R(this.hass,"no_building"):R(this.hass,"loading"))}</p>`}
        ${this._roomId&&t?g`<fp3d-room-panel
              class="fp3d-card-panel"
              .hass=${this.hass}
              .room=${t.floors.flatMap(s=>s.rooms).find(s=>s.id===this._roomId)??null}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:_}
        ${i?g`<button class="fp3d-card-back" @click=${()=>this.back()}>${R(this.hass,"back")}</button>`:_}
      </div>
    </ha-card>`}static styles=[G,O`
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
    `]};if(!customElements.get("floorplan-3d-card")){customElements.define("floorplan-3d-card",Ee);let r=window;r.customCards=r.customCards??[],r.customCards.push({type:"floorplan-3d-card",name:R(void 0,"card_name"),description:R(void 0,"card_description"),preview:!1})}Pe();
