var Jn=Object.defineProperty;var O=(r,e,t)=>()=>{if(t)throw t[0];try{return r&&(e=r(r=0)),e}catch(n){throw t=[n],n}};var Xn=(r,e)=>{for(var t in e)Jn(r,t,{get:e[t],enumerable:!0})};var Ee,Ae,Ue,Rt,he,zt,I,Tt,Ke,Ge=O(()=>{Ee=globalThis,Ae=Ee.ShadowRoot&&(Ee.ShadyCSS===void 0||Ee.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ue=Symbol(),Rt=new WeakMap,he=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Ue)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Ae&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Rt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Rt.set(t,e))}return e}toString(){return this.cssText}},zt=r=>new he(typeof r=="string"?r:r+"",void 0,Ue),I=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((n,o,i)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[i+1],r[0]);return new he(t,r,Ue)},Tt=(r,e)=>{if(Ae)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),o=Ee.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=t.cssText,r.appendChild(n)}},Ke=Ae?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return zt(t)})(r):r});var er,tr,nr,rr,or,ir,Re,It,sr,ar,fe,je,Ct,Pt,V,ze=O(()=>{Ge();Ge();({is:er,defineProperty:tr,getOwnPropertyDescriptor:nr,getOwnPropertyNames:rr,getOwnPropertySymbols:or,getPrototypeOf:ir}=Object),Re=globalThis,It=Re.trustedTypes,sr=It?It.emptyScript:"",ar=Re.reactiveElementPolyfillSupport,fe=(r,e)=>r,je={toAttribute(r,e){switch(e){case Boolean:r=r?sr:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Ct=(r,e)=>!er(r,e),Pt={attribute:!0,type:String,converter:je,reflect:!1,useDefault:!1,hasChanged:Ct};Symbol.metadata??=Symbol("metadata"),Re.litPropertyMetadata??=new WeakMap;V=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Pt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),o=this.getPropertyDescriptor(e,n,t);o!==void 0&&tr(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){let{get:o,set:i}=nr(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:o,set(s){let a=o?.call(this);i?.call(this,s),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Pt}static _$Ei(){if(this.hasOwnProperty(fe("elementProperties")))return;let e=ir(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(fe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(fe("properties"))){let t=this.properties,n=[...rr(t),...or(t)];for(let o of n)this.createProperty(o,t[o])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,o]of t)this.elementProperties.set(n,o)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let o=this._$Eu(t,n);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let o of n)t.unshift(Ke(o))}else e!==void 0&&t.push(Ke(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Tt(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(o!==void 0&&n.reflect===!0){let i=(n.converter?.toAttribute!==void 0?n.converter:je).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,o=n._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let i=n.getPropertyOptions(o),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:je;this._$Em=o;let a=s.fromAttribute(t,i.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,t,n,o=!1,i){if(e!==void 0){let s=this.constructor;if(o===!1&&(i=this[e]),n??=s.getPropertyOptions(e),!((n.hasChanged??Ct)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:o,wrapped:i},s){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),i!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[o,i]of n){let{wrapped:s}=i,a=this[o];s!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,i,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};V.elementStyles=[],V.shadowRootOptions={mode:"open"},V[fe("elementProperties")]=new Map,V[fe("finalized")]=new Map,ar?.({ReactiveElement:V}),(Re.reactiveElementVersions??=[]).push("2.1.2")});function Kt(r,e){if(!tt(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ft!==void 0?Ft.createHTML(e):e}function te(r,e,t=r,n){if(e===Q)return e;let o=n!==void 0?t._$Co?.[n]:t._$Cl,i=_e(e)?void 0:e._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(r),o._$AT(r,t,n)),n!==void 0?(t._$Co??=[])[n]=o:t._$Cl=o),o!==void 0&&(e=te(r,o._$AS(r,e.values),o,n)),e}var et,Ht,Te,Ft,Vt,U,Wt,lr,Y,ge,_e,tt,dr,qe,me,Dt,Lt,q,Bt,Nt,Ut,nt,m,ho,fo,Q,_,Ot,Z,cr,be,Ze,ve,ne,Ye,Qe,Je,Xe,pr,Gt,Ie=O(()=>{et=globalThis,Ht=r=>r,Te=et.trustedTypes,Ft=Te?Te.createPolicy("lit-html",{createHTML:r=>r}):void 0,Vt="$lit$",U=`lit$${Math.random().toFixed(9).slice(2)}$`,Wt="?"+U,lr=`<${Wt}>`,Y=document,ge=()=>Y.createComment(""),_e=r=>r===null||typeof r!="object"&&typeof r!="function",tt=Array.isArray,dr=r=>tt(r)||typeof r?.[Symbol.iterator]=="function",qe=`[ 	
\f\r]`,me=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Dt=/-->/g,Lt=/>/g,q=RegExp(`>|${qe}(?:([^\\s"'>=/]+)(${qe}*=${qe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Bt=/'/g,Nt=/"/g,Ut=/^(?:script|style|textarea|title)$/i,nt=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),m=nt(1),ho=nt(2),fo=nt(3),Q=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),Ot=new WeakMap,Z=Y.createTreeWalker(Y,129);cr=(r,e)=>{let t=r.length-1,n=[],o,i=e===2?"<svg>":e===3?"<math>":"",s=me;for(let a=0;a<t;a++){let l=r[a],c,d,h=-1,g=0;for(;g<l.length&&(s.lastIndex=g,d=s.exec(l),d!==null);)g=s.lastIndex,s===me?d[1]==="!--"?s=Dt:d[1]!==void 0?s=Lt:d[2]!==void 0?(Ut.test(d[2])&&(o=RegExp("</"+d[2],"g")),s=q):d[3]!==void 0&&(s=q):s===q?d[0]===">"?(s=o??me,h=-1):d[1]===void 0?h=-2:(h=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?q:d[3]==='"'?Nt:Bt):s===Nt||s===Bt?s=q:s===Dt||s===Lt?s=me:(s=q,o=void 0);let p=s===q&&r[a+1].startsWith("/>")?" ":"";i+=s===me?l+lr:h>=0?(n.push(c),l.slice(0,h)+Vt+l.slice(h)+U+p):l+U+(h===-2?a:p)}return[Kt(r,i+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},be=class r{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let i=0,s=0,a=e.length-1,l=this.parts,[c,d]=cr(e,t);if(this.el=r.createElement(c,n),Z.currentNode=this.el.content,t===2||t===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=Z.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let h of o.getAttributeNames())if(h.endsWith(Vt)){let g=d[s++],p=o.getAttribute(h).split(U),f=/([.?@])?(.*)/.exec(g);l.push({type:1,index:i,name:f[2],strings:p,ctor:f[1]==="."?Ye:f[1]==="?"?Qe:f[1]==="@"?Je:ne}),o.removeAttribute(h)}else h.startsWith(U)&&(l.push({type:6,index:i}),o.removeAttribute(h));if(Ut.test(o.tagName)){let h=o.textContent.split(U),g=h.length-1;if(g>0){o.textContent=Te?Te.emptyScript:"";for(let p=0;p<g;p++)o.append(h[p],ge()),Z.nextNode(),l.push({type:2,index:++i});o.append(h[g],ge())}}}else if(o.nodeType===8)if(o.data===Wt)l.push({type:2,index:i});else{let h=-1;for(;(h=o.data.indexOf(U,h+1))!==-1;)l.push({type:7,index:i}),h+=U.length-1}i++}}static createElement(e,t){let n=Y.createElement("template");return n.innerHTML=e,n}};Ze=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,o=(e?.creationScope??Y).importNode(t,!0);Z.currentNode=o;let i=Z.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new ve(i,i.nextSibling,this,e):l.type===1?c=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(c=new Xe(i,this,e)),this._$AV.push(c),l=n[++a]}s!==l?.index&&(i=Z.nextNode(),s++)}return Z.currentNode=Y,o}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},ve=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=te(this,e,t),_e(e)?e===_||e==null||e===""?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==Q&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):dr(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==_&&_e(this._$AH)?this._$AA.nextSibling.data=e:this.T(Y.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,o=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=be.createElement(Kt(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(t);else{let i=new Ze(o,this),s=i.u(this.options);i.p(t),this.T(s),this._$AH=i}}_$AC(e){let t=Ot.get(e.strings);return t===void 0&&Ot.set(e.strings,t=new be(e)),t}k(e){tt(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,o=0;for(let i of e)o===t.length?t.push(n=new r(this.O(ge()),this.O(ge()),this,this.options)):n=t[o],n._$AI(i),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=Ht(e).nextSibling;Ht(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},ne=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,i){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=_}_$AI(e,t=this,n,o){let i=this.strings,s=!1;if(i===void 0)e=te(this,e,t,0),s=!_e(e)||e!==this._$AH&&e!==Q,s&&(this._$AH=e);else{let a=e,l,c;for(e=i[0],l=0;l<i.length-1;l++)c=te(this,a[n+l],t,l),c===Q&&(c=this._$AH[l]),s||=!_e(c)||c!==this._$AH[l],c===_?e=_:e!==_&&(e+=(c??"")+i[l+1]),this._$AH[l]=c}s&&!o&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ye=class extends ne{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}},Qe=class extends ne{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_)}},Je=class extends ne{constructor(e,t,n,o,i){super(e,t,n,o,i),this.type=5}_$AI(e,t=this){if((e=te(this,e,t,0)??_)===Q)return;let n=this._$AH,o=e===_&&n!==_||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==_&&(n===_||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Xe=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){te(this,e)}},pr=et.litHtmlPolyfillSupport;pr?.(be,ve),(et.litHtmlVersions??=[]).push("3.3.3");Gt=(r,e,t)=>{let n=t?.renderBefore??e,o=n._$litPart$;if(o===void 0){let i=t?.renderBefore??null;n._$litPart$=o=new ve(e.insertBefore(ge(),i),i,void 0,t??{})}return o._$AI(r),o}});var rt,T,ur,jt=O(()=>{ze();ze();Ie();Ie();rt=globalThis,T=class extends V{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Gt(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Q}};T._$litElement$=!0,T.finalized=!0,rt.litElementHydrateSupport?.({LitElement:T});ur=rt.litElementPolyfillSupport;ur?.({LitElement:T});(rt.litElementVersions??=[]).push("4.2.2")});var qt=O(()=>{});var J=O(()=>{ze();Ie();jt();qt()});async function Pe(r){return r.callWS({type:"floorplan_3d/building/get"})}async function Zt(r,e){return(await r.callWS({type:"floorplan_3d/building/save",building:e})).revision}function Yt(r,e){return r.connection.subscribeMessage(t=>e(t.revision),{type:"floorplan_3d/building/subscribe"})}async function Qt(r){return(await r.callWS({type:"floorplan_3d/packs/list"})).packs}var ot=O(()=>{"use strict"});function k(r,e,t={}){let o=((r?.language??navigator.language).startsWith("de")?xn:Dr)[e]??xn[e]??e;for(let[i,s]of Object.entries(t))o=o.replace(`{${i}}`,String(s));return o}function F(r,e,t=2){return e.toLocaleString(r?.language??void 0,{maximumFractionDigits:t})}var xn,Dr,W=O(()=>{"use strict";xn={view:"3D",editor:"Editor",all_floors:"Alle Etagen",no_building:"Noch kein Grundriss vorhanden.",no_building_admin:"Noch kein Grundriss vorhanden. Im Editor zeichnest du deine erste Etage.",open_editor:"Editor \xF6ffnen",loading:"L\xE4dt \u2026",load_error:"Laden fehlgeschlagen",saving:"Speichert \u2026",saved:"Gespeichert",save_error:"Speichern fehlgeschlagen",save_failed_detail:"Speichern fehlgeschlagen: {error}. Deine \xC4nderungen bleiben in diesem Browser erhalten.",needs_restart:"Eine neue Version von Floorplan 3D ist installiert, aber Home Assistant l\xE4uft noch mit {version}. Bitte Home Assistant neu starten \u2013 bis dahin kann das Speichern fehlschlagen.",needs_restart_old:"Eine neue Version von Floorplan 3D ist installiert, aber Home Assistant l\xE4uft noch mit einer \xE4lteren. Bitte Home Assistant neu starten \u2013 bis dahin schl\xE4gt das Speichern fehl.",draft_found:"Nicht gespeicherte \xC4nderungen vom {time} gefunden.",draft_restore:"\xDCbernehmen und speichern",draft_discard:"Verwerfen",walls_auto:"W\xE4nde hoch",walls_cut:"Schnitt",reset_view:"\xDCbersicht",back:"Zur\xFCck",floor:"Etage",floors:"Etagen",add_floor:"Etage hinzuf\xFCgen",floor_from_ha:"Etagen aus Home Assistant:",floor_empty:"Leere Etage",level:"Ebene {n}",ha_floor:"Etage in Home Assistant",no_ha_floor:"\u2013 keine \u2013",area_rooms:"{n} R\xE4ume aus HA-Bereichen anlegen",area_rooms_hint:"Legt f\xFCr jeden Bereich dieser Etage einen Raum an (4 \xD7 3 m) \u2013 danach an die richtige Stelle ziehen und die Ecken anpassen",floor_name:"Name",elevation:"H\xF6he \xFCber Boden (m)",height:"Raumh\xF6he (m)",cut_height:"Schnitth\xF6he (m)",delete_floor:"Etage l\xF6schen",delete_floor_confirm:"Etage \u201E{name}\u201C mit allen R\xE4umen l\xF6schen?",move_up:"Nach oben",move_down:"Nach unten",default_floor:"Erdgeschoss",new_floor:"Etage {n}",tool_select:"Ausw\xE4hlen",tool_rect:"Rechteck",tool_polygon:"Freie Form",undo:"R\xFCckg\xE4ngig",redo:"Wiederholen",fit:"Alles zeigen",room:"Raum",rooms:"R\xE4ume",room_name:"Name",area:"Bereich",no_area:"Kein Bereich",material:"Boden",x:"X (m)",z:"Y (m)",width:"Breite (m)",depth:"Tiefe (m)",points:"Eckpunkte",delete_point:"Punkt l\xF6schen",duplicate:"Duplizieren",delete:"L\xF6schen",new_room:"Raum {n}",settings:"Einstellungen",pendant_shape:"Form",pendant_shade:"Schirm",pendant_globe:"Kugel",pendant_cone:"Kegel",pendant_drum:"Trommel",pkg_open:"Einrichten \u2026",pkg_hint:"Die M\xF6bel kommen an die W\xE4nde des Raums; Leuchten verbinden sich mit den Lichtern des Bereichs. Danach einzeln anpassen \u2013 Strg+Z nimmt alles zur\xFCck.",pkg_done:"{n} M\xF6bel gesetzt \u2013 Strg+Z nimmt es zur\xFCck.",pkg_kitchen_row:"K\xFCchenzeile",pkg_kitchen_row_desc:"Zeile an der R\xFCckwand mit K\xFChlschrank, Backofen, Sp\xFCle, Sp\xFClmaschine und Herd, Oberschrank, Esstisch mit Pendelleuchte",pkg_kitchen_l:"K\xFCche in L-Form",pkg_kitchen_l_desc:"Zeile hinten und links, Kochinsel mit Barhockern",pkg_bath:"Bad",pkg_bath_desc:"Waschtisch, WC, Badewanne, Waschmaschine, Einbauspot",pkg_bedroom:"Schlafzimmer",pkg_bedroom_desc:"Doppelbett mit zwei Nachttischen, Schrank, Kommode, Deckenleuchte",pkg_living:"Wohnzimmer",pkg_living_desc:"TV-Board, Sofa, Couchtisch, Teppich, Sessel, Regal, Stehlampe, Pflanze",pkg_dining:"Esszimmer",pkg_dining_desc:"Esstisch mit vier St\xFChlen, Sideboard, Pendelleuchte",pkg_office:"B\xFCro",pkg_office_desc:"Schreibtisch mit B\xFCrostuhl, zwei Regale, Deckenleuchte",pkg_kids:"Kinderzimmer",pkg_kids_desc:"Einzelbett, Schreibtisch, Regal, Teppich",pkg_hall:"Flur",pkg_hall_desc:"Garderobe, zwei Einbauspots",spots_place:"Spots setzen",spots_type:"Leuchte",spots_cols:"Spalten (links\u2013rechts)",spots_rows:"Reihen (vorne\u2013hinten)",spots_add:"{n} Leuchten setzen",spots_placed:"{n} Leuchten gesetzt.",spots_hint:"Alle Leuchten folgen dem gew\xE4hlten Licht (z. B. Spots an einem Dimmer). Einzeln verschieben und ein anderes Licht w\xE4hlen geht danach wie bei jedem M\xF6bel.",cancel:"Abbrechen",backup:"Sicherung",backup_history:"Wiederherstellungspunkte",backup_none:"Noch keine. Beim Bearbeiten entsteht h\xF6chstens alle 10 Minuten ein Punkt.",backup_summary:"{rooms} R\xE4ume, {furniture} M\xF6bel",backup_restore:"Wiederherstellen",backup_restore_confirm:"Den Stand vom {time} wiederherstellen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_restored:"Wiederhergestellt.",backup_file:"Datei",backup_export:"Exportieren",backup_export_share:"Als Vorlage teilen",backup_export_share_hint:"Ohne Bereiche, Ger\xE4te, Sensoren und Bilder \u2013 zum Weitergeben an andere.",backup_import:"Importieren \u2026",backup_import_confirm:"Den ganzen Grundriss durch die Datei ersetzen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_import_error:"Die Datei ist kein Floorplan-3D-Plan ({error}).",backup_imported:"Importiert.",backup_hint:"Hintergrundbilder sind nicht in der Datei enthalten.",wall_exterior:"Au\xDFenwand (m)",wall_interior:"Innenwand (m)",grid:"Raster (m)",background:"Vorlage (Grundriss-Bild)",background_upload:"Bild w\xE4hlen \u2026",background_width:"Breite im Plan (m)",background_opacity:"Deckkraft",background_remove:"Vorlage entfernen",hint_select:"Raum antippen zum Ausw\xE4hlen \xB7 Ecken ziehen \xB7 \u201E+\u201C auf einer Kante f\xFCgt einen Punkt ein \xB7 Entf l\xF6scht \xB7 Strg+Z",hint_rect:"Ziehen, um ein Rechteck zu zeichnen",hint_polygon:"Punkte setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",hint_empty:"Lege zuerst eine Etage an.",area_m2:"{a} m\xB2",overlap_warning:"R\xE4ume \xFCberlappen sich \u2013 die W\xE4nde dort sind unvollst\xE4ndig.",read_only:"Nur Administratoren k\xF6nnen den Grundriss bearbeiten.",mat_wood:"Holz",mat_oak:"Eiche",mat_tiles:"Fliesen",mat_carpet:"Teppich",mat_stone:"Stein",mat_concrete:"Beton",card_name:"Floorplan 3D",card_description:"Deine Wohnung in 3D (Neon).",stats:"{calls} Draw-Calls \xB7 {tris} Dreiecke",stats_fps:"{fps} B/s (langsamstes Bild {ms} ms)",stats_idle:"Ruhe (0 B/s)",stats_low:"Stufe Tablet, Pixeldichte {r}",stats_full:"volle Stufe, Pixeldichte {r}",floors_apart:"Auseinander",floors_stacked:"Gestapelt",floor_rooms_one:"1 Raum",floor_rooms:"{n} R\xE4ume",quality:"Qualit\xE4t",quality_auto:"Auto",quality_low:"Tablet",quality_high:"Hoch",state_on:"An",state_off:"Aus",state_open:"Offen",state_closed:"Zu",state_opening:"\xD6ffnet",state_closing:"Schlie\xDFt",state_playing:"Spielt",state_paused:"Pause",state_idle:"Bereit",state_locked:"Verriegelt",state_unlocked:"Entriegelt",state_detected:"Erkannt",state_clear:"Frei",state_unavailable:"Nicht verf\xFCgbar",state_heat:"Heizen",state_cool:"K\xFChlen",state_auto:"Automatik",state_heat_cool:"Heizen/K\xFChlen",state_dry:"Entfeuchten",state_fan_only:"L\xFCften",devices:"Ger\xE4te",devices_none_area:"Verkn\xFCpfe den Raum mit einem Bereich, dann erscheinen dessen Ger\xE4te hier.",devices_none:"Im Bereich gibt es keine passenden Ger\xE4te.",devices_place_all:"Alle automatisch platzieren",devices_place:"Platzieren",devices_remove:"Entfernen",devices_hint:"Platzierte Ger\xE4te erscheinen in 3D. Im Plan lassen sie sich verschieben.",panel_lights:"Licht",panel_covers:"Rolll\xE4den",panel_climate:"Heizung",panel_media:"Medien",panel_switches:"Schalter",panel_sensors:"Sensoren",panel_scenes:"Szenen & Skripte",panel_cameras:"Kameras",camera_live:"Livebild \xF6ffnen",state_recording:"Nimmt auf",state_streaming:"Streamt",panel_all_off:"Alle aus",panel_no_area:"Dieser Raum ist mit keinem Bereich verkn\xFCpft. Im Editor kannst du ihn verkn\xFCpfen.",panel_empty:"Im Bereich gibt es keine steuerbaren Ger\xE4te.",close:"Schlie\xDFen",brightness:"Helligkeit",color_temp:"Farbtemperatur",color:"Farbe",position:"Position",cover_open:"Auf",cover_stop:"Stopp",cover_close:"Zu",target_temp:"Soll",current_temp:"Ist",temp_down:"K\xE4lter",temp_up:"W\xE4rmer",volume:"Lautst\xE4rke",play_pause:"Wiedergabe/Pause",previous:"Zur\xFCck",next:"Weiter",run:"Ausf\xFChren",details:"Details",hold_hint:"Antippen schaltet \xB7 lange dr\xFCcken \xF6ffnet Details",tool_opening:"T\xFCr & Fenster",tool_furniture:"M\xF6bel",card_section_view:"Ansicht",card_section_show:"Anzeigen",card_floor:"Etage",card_floor_house:"Ganzes Haus (Etage antippen zum \xD6ffnen)",card_height:"H\xF6he (Pixel)",card_walls:"W\xE4nde",card_quality_hint:"\u201ETablet\u201C ist die sparsamste Stufe \u2013 ideal f\xFCr Fire-Tablets und andere Wandtablets.",card_flows_switch:"Schalter in der Karte",card_flows_on:"Immer an",card_flows_off:"Immer aus",card_energy:"Energiewerte oben anzeigen",card_room_panel:"Raum-Details beim Antippen",card_room_panel_hint:"Lichter, Rolll\xE4den und Kameras des Raums in einem Seitenfenster",card_explode:"Etagen in der Hausansicht auseinanderziehen",card_stats:"Leistungsanzeige (Bilder pro Sekunde)",card_stats_hint:"Zum Pr\xFCfen, wie fl\xFCssig die Karte auf dem Ger\xE4t l\xE4uft",packs:"M\xF6bel-Packs",packs_hint:"Nur unterschriebene Packs des Herausgebers lassen sich importieren.",pack_import:"M\xF6bel-Pack importieren \u2026",pack_imported:"\u201E{name}\u201C von {publisher} importiert \u2013 {n} M\xF6bel",pack_by:"von {publisher} \xB7 {n} M\xF6bel",pack_licensed:"Lizenziert f\xFCr {name}",pack_remove:"Entfernen",pack_remove_confirm:"Pack \u201E{name}\u201C entfernen? M\xF6bel daraus bleiben als einfache K\xE4sten im Plan.",pack_missing_item:"M\xF6bel aus entferntem Pack",pack_error_bad_signature:"Das Pack wurde ver\xE4ndert oder seine Unterschrift ist ung\xFCltig.",pack_error_unknown_publisher:"Dieses Pack stammt nicht von einem bekannten Herausgeber.",pack_error_unsigned:"Das Pack ist nicht unterschrieben.",pack_error_not_a_pack:"Das ist keine M\xF6bel-Pack-Datei.",pack_error_invalid_content:"Das Pack enth\xE4lt ung\xFCltige M\xF6bel: {detail}",pack_error_too_large:"Die Datei ist zu gro\xDF.",pack_error_other:"Import fehlgeschlagen: {detail}",back_to_room:"Zur\xFCck zu {room}",back_to_floor:"Zur\xFCck zur Etage",hint_furniture:"Raum antippen, dann rechts ein M\xF6belst\xFCck w\xE4hlen \xB7 M\xF6bel ziehen, an den Ecken die Gr\xF6\xDFe \xE4ndern",furniture_into:"Neue M\xF6bel kommen in die Mitte von \u201E{room}\u201C.",furniture_pick_room:"Tipp: Erst einen Raum antippen \u2013 dann landen neue M\xF6bel in seiner Mitte.",flows:"Stromfluss",flows_hint:"Leuchtende Leitungen vom Z\xE4hler zu den Verbrauchern ein- oder ausblenden",flow_on:"an",flow_off:"aus",hint_opening:"Auf eine Wand tippen, um eine T\xFCr oder ein Fenster einzusetzen \u2013 die Art w\xE4hlst du danach rechts",preset_door:"T\xFCr",preset_door_double:"Doppelt\xFCr",preset_window:"Fenster",preset_window_double:"Fenster 2-fl\xFCgelig",preset_terrace:"Terrassent\xFCr",preset_terrace_double:"Terrassent\xFCr 2-fl\xFCgelig",preset_garage:"Garagentor",flip_hinge:"Anschlag wechseln",flip_main_leaf:"Hauptfl\xFCgel wechseln",flip_hinge_hint:"Scharniere auf die andere Seite",flip_swing:"\xD6ffnungsrichtung umdrehen",flip_swing_hint:"Die T\xFCr schwenkt in den Raum oder zur anderen Seite",main_leaf:"Hauptfl\xFCgel (vom Raum aus)",contact_main:"Kontakt Hauptfl\xFCgel",contact_second:"Kontakt zweiter Fl\xFCgel",tool_outdoor:"Au\xDFen",tool_measure:"Nach Ma\xDF",hint_measure:"Startpunkt antippen, dann rechts die Wandl\xE4ngen mit Richtung eingeben",measure:"Raum nach Ma\xDF",measure_start:"Tippe im Plan auf den Startpunkt, z. B. eine Raumecke.",measure_from:"Start bei {x} / {z} m \u2013 antippen verschiebt den Start.",measure_length:"L\xE4nge der n\xE4chsten Wand (m)",measure_close:"Raum schlie\xDFen",measure_undo:"Letzte Wand weg",measure_gap:"L\xFCcke zum Start: {gap} m (wird beim Schlie\xDFen verbunden)",measure_hint:"Tipp: L\xE4nge eintippen und Pfeiltaste dr\xFCcken. Mit gemessenen Innenma\xDFen danach \u201EL\xFCcken schlie\xDFen\u201C.",rect_by_size:"Rechteck nach Ma\xDF",rect_add:"Rechteck anlegen",dir_up:"Nach oben",dir_down:"Nach unten",dir_left:"Nach links",dir_right:"Nach rechts",hint_outdoor:"Ziehen, um eine Au\xDFenfl\xE4che (Rasen, Terrasse, Pool \u2026) aufzuziehen",outdoor:"Au\xDFenfl\xE4che",outdoor_type:"Art",outdoor_hint:"Au\xDFenleuchten (Wegleuchte, Garten-Spot, Wandleuchte au\xDFen) beleuchten alle Au\xDFenfl\xE4chen und die Fassade.",out_lawn:"Rasen",out_terrace:"Terrasse",out_path:"Weg",out_driveway:"Einfahrt",out_pool:"Pool",out_bed:"Beet",out_hedge:"Hecke",out_fence:"Zaun",north:"Nordrichtung (\xB0 im Uhrzeigersinn von oben)",north_hint:"Die Nordrichtung braucht der Sonnenstand (Licht durch die Fenster).",roof:"Dach",roof_none:"Kein Dach",roof_flat:"Flachdach",roof_gable:"Satteldach",roof_pitch:"Dachneigung (\xB0)",roof_overhang:"Dach\xFCberstand (m)",device:"Ger\xE4t",lamp_mount:"Lampe",lamp_ceiling:"Deckenleuchte",lamp_floor:"Stehlampe",lamp_table:"Tischlampe",lamp_wall:"Wandleuchte",marker_height:"H\xF6he des Symbols (m)",height_auto:"H\xF6he automatisch",device_centre:"In Raummitte",lights_spread:"Deckenlampen gleichm\xE4\xDFig verteilen",devices_search:"Ger\xE4te suchen \u2026",devices_more:"+{n} weitere",devices_less:"weniger",panel_more:"Weitere anzeigen ({n})",panel_less:"Weniger anzeigen",gaps_close:"L\xFCcken schlie\xDFen",gaps_hint:"R\xE4ume mit bis zu 60 cm Abstand an einer gemeinsamen Wand zusammenf\xFChren; der Abstand wird die Innenwandst\xE4rke.",gaps_none:"Keine L\xFCcken zwischen R\xE4umen gefunden.",gaps_closed:"{n} Stellen geschlossen.",gaps_closed_wall:"{n} Stellen geschlossen, Innenwand jetzt {t} m.",fps:"FPS",fps_title:"Leistungsanzeige (Bilder pro Sekunde)",hint_garage:"Auf eine Wand tippen, um ein Garagentor einzusetzen",opening_garage:"Garagentor",garage_hint:"Das Tor folgt einem Garagen-Cover (Position oder offen/zu) oder einem Garagentor-Kontakt aus dem Bereich des Raums.",door_hint:"Mit T\xFCrkontakt schwenkt das T\xFCrblatt auf, ohne Sensor steht es halb offen.",hint_door:"Auf eine Wand tippen, um eine T\xFCr einzusetzen",hint_window:"Auf eine Wand tippen, um ein Fenster einzusetzen",opening_door:"T\xFCr",opening_window:"Fenster",opening_type:"Art",opening_position:"Mitte ab Ecke (m)",sill:"Br\xFCstung (m)",opening_height:"H\xF6he (m)",hinge:"Anschlag (vom Raum aus)",hinge_left:"Links",hinge_right:"Rechts",cover_entity:"Rollladen",contact_entity:"Kontakt",tilt_entity:"Kipp-Sensor",entity_auto:"Automatisch ({name})",entity_auto_none:"Automatisch (keiner gefunden)",entity_none:"Keiner",opening_hint:"Terrassent\xFCr: Fenster mit Br\xFCstung 0. Automatisch nimmt Rolll\xE4den und Kontakte aus dem Bereich des Raums.",furniture:"M\xF6bel",furniture_add:"M\xF6bel hinzuf\xFCgen",furniture_type:"M\xF6belst\xFCck",rotation:"Drehung (\xB0)",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"H\xF6he (m)",furn_sofa:"Sofa",furn_armchair:"Sessel",furn_table:"Tisch",furn_chair:"Stuhl",furn_bed:"Bett",furn_nightstand:"Nachttisch",furn_wardrobe:"Schrank",furn_shelf:"Regal",furn_kitchen:"K\xFCchenzeile",furn_fridge:"K\xFChlschrank",furn_stove:"Herd",furn_sink:"Sp\xFCle",furn_bathtub:"Badewanne",furn_shower:"Dusche",furn_wc:"WC",furn_washbasin:"Waschtisch",furn_desk:"Schreibtisch",furn_tv_board:"TV-Board",furn_plant:"Pflanze",furn_rug:"Teppich",furn_stairs:"Treppe",furn_lamp_ceiling:"Deckenleuchte",furn_lamp_downlight:"Einbauspot",furn_lamp_spot:"Aufbau-Spot",furn_lamp_panel:"LED-Panel",furn_lamp_uplight:"Deckenfluter",furn_lamp_bollard:"Wegleuchte",furn_lamp_garden:"Garten-Spot",furn_radiator:"Heizk\xF6rper",furn_lamp_pendant:"Pendelleuchte",furn_lamp_floor:"Stehlampe",furn_lamp_table:"Tischlampe",furn_lamp_wall:"Wandleuchte",furn_led_strip:"LED-Streifen",furn_group_lights:"Leuchten",furn_entity_light:"Licht",furn_entity_climate:"Heizung (Thermostat)",lamp_hint:"Antippen in 3D schaltet die Leuchte, lange dr\xFCcken \xF6ffnet die Details. Tischlampen stehen automatisch auf dem M\xF6bel darunter.",lamp_hint_pendant:"H\xF6he = Abh\xE4ngung unter der Decke. Antippen in 3D schaltet, lange dr\xFCcken \xF6ffnet die Details.",theme:"Look",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Tag",furnish:"Einrichten",size_w:"Breite (m)",size_d:"Tiefe (m)",size_h:"H\xF6he (m)",furnish_hint:"M\xF6bel und Leuchten mit dem Finger ziehen \xB7 an W\xE4nden rasten sie ein \xB7 antippen zum Drehen",done:"Fertig",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Feuchte",heat_short_co2:"CO\u2082",heat_temperature:"Temperatur",heat_humidity:"Luftfeuchtigkeit",heat_co2:"CO\u2082",heat_none_found:"Keine passenden Sensoren in den Bereichen der R\xE4ume.",markers:"Symbole",markers_none:"Keine",markers_important:"Wichtige",markers_all:"Alle",furn_stool:"Hocker",furn_coffee_table:"Couchtisch",furn_tv_wall:"Fernseher (Wand)",furn_sideboard:"Sideboard",furn_table_round:"Runder Tisch",furn_bench:"Sitzbank",furn_corner_bench:"Eckbank",furn_bar_stool:"Barhocker",furn_kitchen_wall:"Oberschrank",furn_kitchen_tall:"Hochschrank mit Backofen",furn_island:"Kochinsel",furn_dishwasher:"Sp\xFClmaschine",furn_bunk_bed:"Etagenbett",furn_dresser:"Kommode",furn_washer:"Waschmaschine",furn_dryer:"Trockner",furn_office_chair:"B\xFCrostuhl",furn_tall_cabinet:"Hochschrank",furn_coat_rack:"Garderobe",furn_group_living:"Wohnen",furn_group_dining:"Essen",furn_group_kitchen:"K\xFCche",furn_group_sleeping:"Schlafen",furn_group_bath:"Bad & Hauswirtschaft",furn_group_work:"Arbeiten & Sonstiges",furn_entity:"Ger\xE4t (Schalter, Steckdose \u2026)",furn_entity_tv:"Fernseher (Media-Player)",furn_power:"Leistungssensor (W)",furn_links_hint:"Mit Leistungssensor zeigt das M\xF6bel seine Watt und bekommt eine Energie-Leitung.",furn_links_hint_tv:"Der Bildschirm leuchtet, solange der Fernseher an ist, in der Farbe der App (Netflix, YouTube \u2026); das Schild zeigt App oder Titel.",stairs_hint:"Die Treppe steigt nach hinten an (weg von der markierten Vorderkante) und \xF6ffnet die Decke der Etage dar\xFCber.",floor_lights:"{n} Licht an",floor_open:"{n} offen",floor_persons:"{n} Pers.",energy_consumption:"Verbrauch",energy_grid_import:"Netzbezug",energy_grid_export:"Einspeisung",energy_solar:"Solar",energy_battery:"Akku",energy_tariff:"Tarif",energy:"Energie",energy_meter:"Z\xE4hlerplatz",energy_meter_set:"Z\xE4hlerplatz setzen",energy_meter_remove:"Z\xE4hlerplatz entfernen",energy_meter_hint:"Tippe im Plan auf die Stelle des Z\xE4hlers bzw. Hausanschlusses.",energy_grid:"Netz (W, + = Bezug)",energy_solar_sensor:"Solar-Erzeugung (W)",energy_battery_sensor:"Akku-Leistung (W, + = Entladen)",energy_battery_soc:"Akku-Ladestand (%)",energy_tariff_sensor:"Tarif (z. B. \u20AC/kWh)",energy_invert:"Vorzeichen umkehren",energy_hint:"Verbraucher sind platzierte Ger\xE4te mit Leistungssensor (W) \u2013 der Sensor selbst oder einer vom selben Ger\xE4t.",tool_meter:"Z\xE4hler",hint_meter:"Auf die Stelle des Z\xE4hlers tippen",presence:"Anwesenheit",presence_hint:"Raumsensor je Person (z. B. ESPresense, Bermuda): sein Zustand nennt den Raum oder Bereich.",presence_sensor:"Raumsensor",no_persons:"In Home Assistant gibt es keine Personen."},Dr={view:"3D",editor:"Editor",all_floors:"All floors",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",save_failed_detail:"Saving failed: {error}. Your changes are kept in this browser.",needs_restart:"A new version of Floorplan 3D is installed, but Home Assistant still runs {version}. Please restart Home Assistant \u2013 until then saving may fail.",needs_restart_old:"A new version of Floorplan 3D is installed, but Home Assistant still runs an older one. Please restart Home Assistant \u2013 until then saving fails.",draft_found:"Unsaved changes from {time} found.",draft_restore:"Restore and save",draft_discard:"Discard",walls_auto:"Tall walls",walls_cut:"Cut",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",add_floor:"Add floor",floor_from_ha:"Floors from Home Assistant:",floor_empty:"Empty floor",level:"Level {n}",ha_floor:"Floor in Home Assistant",no_ha_floor:"\u2013 none \u2013",area_rooms:"Add {n} rooms from HA areas",area_rooms_hint:"Adds a room (4 \xD7 3 m) for each area of this floor \u2013 then drag it into place and adjust the corners",floor_name:"Name",elevation:"Elevation (m)",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",default_floor:"Ground floor",new_floor:"Floor {n}",tool_select:"Select",tool_rect:"Rectangle",tool_polygon:"Free shape",undo:"Undo",redo:"Redo",fit:"Show all",room:"Room",rooms:"Rooms",room_name:"Name",area:"Area",no_area:"No area",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",delete_point:"Delete corner",duplicate:"Duplicate",delete:"Delete",new_room:"Room {n}",settings:"Settings",pendant_shape:"Shape",pendant_shade:"Shade",pendant_globe:"Globe",pendant_cone:"Cone",pendant_drum:"Drum",pkg_open:"Furnish \u2026",pkg_hint:"Furniture goes against the room's walls; lamps link to the area's lights. Adjust single items afterwards \u2013 Ctrl+Z takes it all back.",pkg_done:"{n} items placed \u2013 Ctrl+Z takes it back.",pkg_kitchen_row:"Kitchen row",pkg_kitchen_row_desc:"Row on the back wall with fridge, oven, sink, dishwasher and stove, wall cabinet, dining table with pendant",pkg_kitchen_l:"L-shaped kitchen",pkg_kitchen_l_desc:"Rows at the back and left, kitchen island with bar stools",pkg_bath:"Bathroom",pkg_bath_desc:"Washbasin, WC, bathtub, washing machine, downlight",pkg_bedroom:"Bedroom",pkg_bedroom_desc:"Double bed with two nightstands, wardrobe, chest of drawers, ceiling light",pkg_living:"Living room",pkg_living_desc:"TV board, sofa, coffee table, rug, armchair, shelf, floor lamp, plant",pkg_dining:"Dining room",pkg_dining_desc:"Table with four chairs, sideboard, pendant",pkg_office:"Office",pkg_office_desc:"Desk with office chair, two shelves, ceiling light",pkg_kids:"Kids' room",pkg_kids_desc:"Single bed, desk, shelf, rug",pkg_hall:"Hall",pkg_hall_desc:"Coat rack, two downlights",spots_place:"Place spots",spots_type:"Lamp",spots_cols:"Columns (left\u2013right)",spots_rows:"Rows (front\u2013back)",spots_add:"Place {n} lamps",spots_placed:"{n} lamps placed.",spots_hint:"All lamps follow the chosen light (e.g. spots on one dimmer). Afterwards each can be moved and linked to another light like any furniture.",cancel:"Cancel",backup:"Backup",backup_history:"Restore points",backup_none:"None yet. While editing, a restore point is kept at most every 10 minutes.",backup_summary:"{rooms} rooms, {furniture} items",backup_restore:"Restore",backup_restore_confirm:"Restore the state of {time}? The current state is kept as a restore point.",backup_restored:"Restored.",backup_file:"File",backup_export:"Export",backup_export_share:"Share as template",backup_export_share_hint:"Without areas, devices, sensors and images \u2013 for passing on to others.",backup_import:"Import \u2026",backup_import_confirm:"Replace the whole plan with the file? The current state is kept as a restore point.",backup_import_error:"The file is no Floorplan 3D plan ({error}).",backup_imported:"Imported.",backup_hint:"Background images are not part of the file.",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 Del deletes \xB7 Ctrl+Z",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_empty:"Add a floor first.",area_m2:"{a} m\xB2",overlap_warning:"Rooms overlap \u2013 walls there are incomplete.",read_only:"Only administrators can edit the floor plan.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"Floorplan 3D",card_description:"Your home in 3D (neon).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} fps (slowest frame {ms} ms)",stats_idle:"At rest (0 fps)",stats_low:"tablet level, pixel ratio {r}",stats_full:"full level, pixel ratio {r}",floors_apart:"Apart",floors_stacked:"Stacked",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",devices_none_area:"Link the room to an area and its devices appear here.",devices_none:"The area has no suitable devices.",devices_place_all:"Place all automatically",devices_place:"Place",devices_remove:"Remove",devices_hint:"Placed devices appear in 3D. Drag them in the plan to move them.",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",panel_cameras:"Cameras",camera_live:"Open live view",state_recording:"Recording",state_streaming:"Streaming",panel_all_off:"All off",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"The area has no controllable devices.",close:"Close",brightness:"Brightness",color_temp:"Colour temperature",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details",tool_opening:"Doors & windows",tool_furniture:"Furniture",card_section_view:"View",card_section_show:"Show",card_floor:"Floor",card_floor_house:"Whole house (tap a floor to open it)",card_height:"Height (pixels)",card_walls:"Walls",card_quality_hint:"\u201CTablet\u201D is the lightest setting \u2013 ideal for Fire tablets and other wall tablets.",card_flows_switch:"Switch in the card",card_flows_on:"Always on",card_flows_off:"Always off",card_energy:"Show energy values at the top",card_room_panel:"Room details on tap",card_room_panel_hint:"The room's lights, blinds and cameras in a side panel",card_explode:"Pull floors apart in the house view",card_stats:"Performance display (frames per second)",card_stats_hint:"To check how smoothly the card runs on the device",packs:"Furniture packs",packs_hint:"Only packs signed by the publisher can be imported.",pack_import:"Import furniture pack \u2026",pack_imported:"Imported \u201C{name}\u201D by {publisher} \u2013 {n} items",pack_by:"by {publisher} \xB7 {n} items",pack_licensed:"Licensed to {name}",pack_remove:"Remove",pack_remove_confirm:"Remove the pack \u201C{name}\u201D? Its furniture stays in the plan as plain boxes.",pack_missing_item:"Furniture of a removed pack",pack_error_bad_signature:"The pack was changed or its signature is invalid.",pack_error_unknown_publisher:"This pack is not from a known publisher.",pack_error_unsigned:"The pack is not signed.",pack_error_not_a_pack:"This is not a furniture pack file.",pack_error_invalid_content:"The pack contains invalid furniture: {detail}",pack_error_too_large:"The file is too large.",pack_error_other:"Import failed: {detail}",back_to_room:"Back to {room}",back_to_floor:"Back to the floor",hint_furniture:"Tap a room, then pick an item on the right \xB7 drag items, resize them by their corners",furniture_into:"New items go into the middle of \u201C{room}\u201D.",furniture_pick_room:"Tip: tap a room first \u2013 new items then land in its middle.",flows:"Power flow",flows_hint:"Show or hide glowing lines from the meter to the consumers",flow_on:"on",flow_off:"off",hint_opening:"Tap a wall to add a door or window \u2013 choose its kind on the right afterwards",preset_door:"Door",preset_door_double:"Double door",preset_window:"Window",preset_window_double:"Double window",preset_terrace:"Terrace door",preset_terrace_double:"French doors",preset_garage:"Garage door",flip_hinge:"Swap hinge side",flip_main_leaf:"Swap main leaf",flip_hinge_hint:"Hinges to the other side",flip_swing:"Reverse opening direction",flip_swing_hint:"The door swings into the room or to the other side",main_leaf:"Main leaf (seen from the room)",contact_main:"Contact main leaf",contact_second:"Contact second leaf",tool_outdoor:"Outdoor",tool_measure:"By measure",hint_measure:"Tap the starting point, then type the wall lengths with their direction on the right",measure:"Room by measure",measure_start:"Tap the starting point in the plan, e.g. a room corner.",measure_from:"Start at {x} / {z} m \u2013 tapping moves the start.",measure_length:"Length of the next wall (m)",measure_close:"Close room",measure_undo:"Remove last wall",measure_gap:"Gap to the start: {gap} m (joined when closing)",measure_hint:"Tip: type a length and press an arrow key. With measured inside dimensions, use \u201CClose gaps\u201D afterwards.",rect_by_size:"Rectangle by size",rect_add:"Add rectangle",dir_up:"Up",dir_down:"Down",dir_left:"Left",dir_right:"Right",hint_outdoor:"Drag to draw an outdoor area (lawn, terrace, pool \u2026)",outdoor:"Outdoor area",outdoor_type:"Type",outdoor_hint:"Outdoor lights (path light, garden spot, outdoor wall light) light all outdoor areas and the facade.",out_lawn:"Lawn",out_terrace:"Terrace",out_path:"Path",out_driveway:"Driveway",out_pool:"Pool",out_bed:"Flower bed",out_hedge:"Hedge",out_fence:"Fence",north:"North (\xB0 clockwise from up)",north_hint:"North is needed for the sun (light through the windows).",roof:"Roof",roof_none:"No roof",roof_flat:"Flat roof",roof_gable:"Gable roof",roof_pitch:"Roof pitch (\xB0)",roof_overhang:"Roof overhang (m)",device:"Device",lamp_mount:"Lamp",lamp_ceiling:"Ceiling light",lamp_floor:"Floor lamp",lamp_table:"Table lamp",lamp_wall:"Wall light",marker_height:"Marker height (m)",height_auto:"Automatic height",device_centre:"To room centre",lights_spread:"Spread ceiling lights evenly",devices_search:"Search devices \u2026",devices_more:"+{n} more",devices_less:"less",panel_more:"Show more ({n})",panel_less:"Show less",gaps_close:"Close gaps",gaps_hint:"Join rooms up to 60 cm apart at one shared wall; the gap becomes the interior wall thickness.",gaps_none:"No gaps between rooms found.",gaps_closed:"{n} places closed.",gaps_closed_wall:"{n} places closed, interior wall now {t} m.",fps:"FPS",fps_title:"Performance display (frames per second)",hint_garage:"Tap a wall to add a garage door",opening_garage:"Garage door",garage_hint:"The door follows a garage cover (position or open/closed) or a garage door contact of the room's area.",door_hint:"With a door contact the leaf swings open; without a sensor it stands half open.",hint_door:"Tap a wall to add a door",hint_window:"Tap a wall to add a window",opening_door:"Door",opening_window:"Window",opening_type:"Type",opening_position:"Centre from corner (m)",sill:"Sill height (m)",opening_height:"Height (m)",hinge:"Hinge (seen from the room)",hinge_left:"Left",hinge_right:"Right",cover_entity:"Blind",contact_entity:"Contact",tilt_entity:"Tilt sensor",entity_auto:"Automatic ({name})",entity_auto_none:"Automatic (none found)",entity_none:"None",opening_hint:"Terrace door: a window with sill 0. Automatic uses the blinds and contacts of the room's area.",furniture:"Furniture",furniture_add:"Add furniture",furniture_type:"Item",rotation:"Rotation (\xB0)",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Height (m)",furn_sofa:"Sofa",furn_armchair:"Armchair",furn_table:"Table",furn_chair:"Chair",furn_bed:"Bed",furn_nightstand:"Nightstand",furn_wardrobe:"Wardrobe",furn_shelf:"Shelf",furn_kitchen:"Kitchen unit",furn_fridge:"Fridge",furn_stove:"Stove",furn_sink:"Sink",furn_bathtub:"Bathtub",furn_shower:"Shower",furn_wc:"WC",furn_washbasin:"Washbasin",furn_desk:"Desk",furn_tv_board:"TV board",furn_plant:"Plant",furn_rug:"Rug",furn_stairs:"Stairs",furn_lamp_ceiling:"Ceiling light",furn_lamp_downlight:"Downlight",furn_lamp_spot:"Surface spot",furn_lamp_panel:"LED panel",furn_lamp_uplight:"Floor uplight",furn_lamp_bollard:"Path light",furn_lamp_garden:"Garden spot",furn_radiator:"Radiator",furn_lamp_pendant:"Pendant light",furn_lamp_floor:"Floor lamp",furn_lamp_table:"Table lamp",furn_lamp_wall:"Wall light",furn_led_strip:"LED strip",furn_group_lights:"Lights",furn_entity_light:"Light",furn_entity_climate:"Heating (thermostat)",lamp_hint:"Tap the lamp in 3D to switch it, long press for details. Table lamps stand on the furniture below them.",lamp_hint_pendant:"Height = drop below the ceiling. Tap in 3D to switch, long press for details.",theme:"Look",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Day",furnish:"Furnish",size_w:"Width (m)",size_d:"Depth (m)",size_h:"Height (m)",furnish_hint:"Drag furniture and lamps \xB7 they snap to walls \xB7 tap one to turn it",done:"Done",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humidity",heat_short_co2:"CO\u2082",heat_temperature:"Temperature",heat_humidity:"Humidity",heat_co2:"CO\u2082",heat_none_found:"No matching sensors in the rooms' areas.",markers:"Markers",markers_none:"None",markers_important:"Important",markers_all:"All",furn_stool:"Stool",furn_coffee_table:"Coffee table",furn_tv_wall:"TV (wall)",furn_sideboard:"Sideboard",furn_table_round:"Round table",furn_bench:"Bench",furn_corner_bench:"Corner bench",furn_bar_stool:"Bar stool",furn_kitchen_wall:"Wall cabinet",furn_kitchen_tall:"Tall unit with oven",furn_island:"Kitchen island",furn_dishwasher:"Dishwasher",furn_bunk_bed:"Bunk bed",furn_dresser:"Chest of drawers",furn_washer:"Washing machine",furn_dryer:"Dryer",furn_office_chair:"Office chair",furn_tall_cabinet:"Tall cabinet",furn_coat_rack:"Coat rack",furn_group_living:"Living",furn_group_dining:"Dining",furn_group_kitchen:"Kitchen",furn_group_sleeping:"Sleeping",furn_group_bath:"Bath & laundry",furn_group_work:"Work & other",furn_entity:"Device (switch, plug \u2026)",furn_entity_tv:"TV (media player)",furn_power:"Power sensor (W)",furn_links_hint:"With a power sensor the item shows its watts and gets an energy cable.",furn_links_hint_tv:"The screen glows while the TV is on, in the colour of the app (Netflix, YouTube \u2026); the label shows the app or title.",stairs_hint:"The stair rises towards the back (away from the marked front edge) and opens the ceiling of the floor above.",floor_lights:"{n} lights on",floor_open:"{n} open",floor_persons:"{n} people",energy_consumption:"Consumption",energy_grid_import:"Grid import",energy_grid_export:"Export",energy_solar:"Solar",energy_battery:"Battery",energy_tariff:"Tariff",energy:"Energy",energy_meter:"Meter",energy_meter_set:"Place meter",energy_meter_remove:"Remove meter",energy_meter_hint:"Tap the spot of the meter or house connection in the plan.",energy_grid:"Grid (W, + = import)",energy_solar_sensor:"Solar production (W)",energy_battery_sensor:"Battery power (W, + = discharging)",energy_battery_soc:"Battery charge (%)",energy_tariff_sensor:"Tariff (e.g. \u20AC/kWh)",energy_invert:"Invert sign",energy_hint:"Consumers are placed devices with a power sensor (W) \u2013 the sensor itself or one of the same device.",tool_meter:"Meter",hint_meter:"Tap the spot of the meter",presence:"Presence",presence_hint:"Room sensor per person (e.g. ESPresense, Bermuda): its state names the room or area.",presence_sensor:"Room sensor",no_persons:"There are no people in Home Assistant."}});var Yn={};Xn(Yn,{Floorplan3dCardEditor:()=>We});var Zn,We,Qn=O(()=>{"use strict";J();ot();W();Zn={height:420,walls:"auto",explode:!0,quality:"auto",stats:!1,markers:"important",heatmap:"none",theme:"neon",energy:!0,room_panel:!0},We=class extends T{static properties={hass:{attribute:!1},_config:{state:!0},_floors:{state:!0}};loading=!1;constructor(){super(),this._config={type:"custom:floorplan-3d-card"},this._floors=[]}setConfig(e){this._config=e}willUpdate(){this.hass&&!this.loading&&!this._floors.length&&(this.loading=!0,Pe(this.hass).then(e=>this._floors=e.building.floors.map(t=>({id:t.id,name:t.name})),()=>{}))}t(e,t){return k(this.hass,e,t)}get value(){return{...Zn,...this._config}}set(e,t){let n={...this._config};t===void 0||t===""||Zn[e]===t?delete n[e]:n[e]=t,this._config=n,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:n},bubbles:!0,composed:!0}))}select(e,t,n,o){return m`<label class="field"
      >${this.t(t)}
      <select @change=${i=>this.set(e,i.target.value)}>
        ${n.map(([i,s])=>m`<option value=${i} ?selected=${i===o}>${this.t(s)}</option>`)}
      </select>
    </label>`}toggle(e,t,n){let o=this.value[e];return m`<label class="toggle">
      <input type="checkbox" .checked=${o} @change=${i=>this.set(e,i.target.checked)} />
      <span>${this.t(t)}${n?m`<small>${this.t(n)}</small>`:_}</span>
    </label>`}render(){let e=this.value,t=e.flows===void 0?"switch":e.flows?"on":"off";return m`
      <h3>${this.t("card_section_view")}</h3>
      <div class="grid">
        <label class="field wide"
          >${this.t("card_floor")}
          <select @change=${n=>this.set("floor",n.target.value||void 0)}>
            <option value="" ?selected=${!e.floor}>${this.t("card_floor_house")}</option>
            ${this._floors.map(n=>m`<option value=${n.id} ?selected=${n.id===e.floor}>${n.name}</option>`)}
            ${e.floor&&!this._floors.some(n=>n.id===e.floor)?m`<option value=${e.floor} selected>${e.floor}</option>`:_}
          </select>
        </label>
        <label class="field"
          >${this.t("card_height")}
          <input
            type="number"
            min="150"
            max="2000"
            step="10"
            .value=${String(e.height)}
            @change=${n=>{let o=Math.round(Number(n.target.value));o>100&&this.set("height",o)}}
          />
        </label>
        ${this.select("theme","theme",[["neon","theme_neon"],["blueprint","theme_blueprint"],["day","theme_day"]],e.theme)}
        ${this.select("walls","card_walls",[["auto","walls_auto"],["cut","walls_cut"]],e.walls)}
        ${this.select("quality","quality",[["auto","quality_auto"],["low","quality_low"],["high","quality_high"]],e.quality)}
      </div>
      <p class="hint">${this.t("card_quality_hint")}</p>

      <h3>${this.t("card_section_show")}</h3>
      <div class="grid">
        ${this.select("markers","markers",[["none","markers_none"],["important","markers_important"],["all","markers_all"]],e.markers)}
        ${this.select("heatmap","heatmap",[["none","heat_off"],["temperature","heat_temperature"],["humidity","heat_humidity"],["co2","heat_co2"]],e.heatmap)}
        <label class="field wide"
          >${this.t("flows")}
          <select @change=${n=>{let o=n.target.value;this.set("flows",o==="switch"?void 0:o==="on")}}>
            <option value="switch" ?selected=${t==="switch"}>${this.t("card_flows_switch")}</option>
            <option value="on" ?selected=${t==="on"}>${this.t("card_flows_on")}</option>
            <option value="off" ?selected=${t==="off"}>${this.t("card_flows_off")}</option>
          </select>
        </label>
      </div>
      ${this.toggle("energy","card_energy")} ${this.toggle("room_panel","card_room_panel","card_room_panel_hint")}
      ${this.toggle("explode","card_explode")} ${this.toggle("stats","card_stats","card_stats_hint")}
    `}static styles=I`
    :host {
      display: block;
      color: var(--primary-text-color);
    }
    h3 {
      margin: 18px 0 8px;
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--secondary-text-color);
    }
    h3:first-child {
      margin-top: 0;
    }
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px 12px;
    }
    .wide {
      grid-column: 1 / -1;
    }
    .field {
      display: grid;
      gap: 4px;
      font-size: 13px;
      color: var(--secondary-text-color);
    }
    select,
    input[type="number"] {
      box-sizing: border-box;
      width: 100%;
      min-height: 40px;
      padding: 8px 10px;
      border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.4));
      border-radius: 8px;
      background: var(--card-background-color, transparent);
      color: var(--primary-text-color);
      font: inherit;
      font-size: 14px;
    }
    .toggle {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 8px 0;
      font-size: 14px;
      cursor: pointer;
    }
    .toggle input {
      width: 18px;
      height: 18px;
      margin: 1px 0 0;
      accent-color: var(--primary-color);
    }
    .toggle small,
    .hint {
      display: block;
      margin: 2px 0 0;
      font-size: 12px;
      color: var(--secondary-text-color);
    }
    @media (max-width: 450px) {
      .grid {
        grid-template-columns: 1fr;
      }
    }
  `};customElements.get("floorplan-3d-card-editor")||customElements.define("floorplan-3d-card-editor",We)});var Et=new URL(import.meta.url),$t=Et.searchParams.get("v"),Mt=r=>new URL(`./fonts/${r}${$t?`?v=${$t}`:""}`,Et).href,St="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD";function At(){if(typeof document>"u"||document.getElementById("fp3d-fonts"))return;let r=document.createElement("style");r.id="fp3d-fonts",r.textContent=`
@font-face{font-family:"Figtree";font-style:normal;font-display:swap;font-weight:300 900;src:url(${Mt("figtree.woff2")}) format("woff2");unicode-range:${St}}
@font-face{font-family:"Bricolage Grotesque";font-style:normal;font-display:swap;font-weight:200 800;src:url(${Mt("bricolage-grotesque.woff2")}) format("woff2");unicode-range:${St}}`,document.head.append(r)}J();ot();var hr={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,hedge:1.2,fence:1};function fr(r){return r.elevation>.3?0:-.2}function Jt(r,e,t){let n=(r.outdoor??[]).find(o=>o.type!=="hedge"&&o.type!=="fence"&&o.type!=="pool"&&P([e,t],o.points));return fr(r)+(n?hr[n.type]:0)}var mr={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,tariff:null};var Xt={type:"none",pitch:35,overhang:.4},gr={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Xt}};var en=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]);function tn(r){return en.has(r)}var _r=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","tv_board","dishwasher","washer","dryer"]);function nn(r,e,t){let n=0;for(let o of r.furniture)!_r.has(o.type)||!P([e,t],vr(o))||(n=Math.max(n,o.h));return n}var br=new Set([...en,"radiator","tv_board","tv_wall","desk","fridge","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),rn={sofa:[2.2,.9,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],fridge:[.6,.65,1.8],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};function it(r){r.energy={...mr,...r.energy??{}},r.presence=r.presence??[],r.settings={...gr,...r.settings,roof:{...Xt,...r.settings?.roof??{}}};for(let e of r.floors){e.outdoor=e.outdoor??[],e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(n=>({...n,mount:n.mount??null})),e.furniture=e.furniture.map(n=>({...n,entity:n.entity??null,power:n.power??null}));let t=e.placements.filter(n=>n.entity_id.startsWith("light."));if(t.length){let n={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let o of t){let i=n[o.mount??"ceiling"],[s,a,l]=rn[i];e.furniture.push({id:`lamp_${o.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:i,x:o.x,z:o.z,rotation:0,w:s,d:a,h:l,variant:null,entity:o.entity_id,power:null})}e.placements=e.placements.filter(o=>!o.entity_id.startsWith("light."))}e.openings=e.openings.map(n=>({...n,hinge:n.hinge??"left",leaves:n.leaves??1,swing:n.swing??"in",cover:n.cover??null,contact:n.contact??null,contact2:n.contact2??null,tilt:n.tilt??null}))}return r}function K(r){let e=0;for(let t=0;t<r.length;t++){let[n,o]=r[t],[i,s]=r[(t+1)%r.length];e+=n*s-i*o}return e/2}function st(r){let e=K(r);if(Math.abs(e)<1e-9){let o=r.length||1;return[r.reduce((i,s)=>i+s[0],0)/o,r.reduce((i,s)=>i+s[1],0)/o]}let t=0,n=0;for(let o=0;o<r.length;o++){let[i,s]=r[o],[a,l]=r[(o+1)%r.length],c=i*l-a*s;t+=(i+a)*c,n+=(s+l)*c}return[t/(6*e),n/(6*e)]}function vr(r){let e=r.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),o=r.w/2,i=r.d/2;return[[-o,-i],[o,-i],[o,i],[-o,i]].map(([s,a])=>[r.x+s*t-a*n,r.z+s*n+a*t])}function P(r,e){let t=!1;for(let n=0,o=e.length-1;n<e.length;o=n++){let[i,s]=e[n],[a,l]=e[o];s>r[1]!=l>r[1]&&r[0]<(a-i)*(r[1]-s)/(l-s)+i&&(t=!t)}return t}var on=[],sn=new Map,an=0;function ln(r){on=r,sn=new Map(r.flatMap(e=>e.items.map(t=>[yr(e.id,t.id),t]))),an++}function at(){return on}function Ce(){return an}function yr(r,e){return`pack:${r}:${e}`}function lt(r){return r.startsWith("pack:")}function dn(r){return lt(r)?sn.get(r):void 0}function cn(r,e){let t=e.split("-")[0];return r.name[t]??r.name.en??Object.values(r.name)[0]??r.id}var wr=700,ct="floorplan_3d.unsaved",pn="0.12.1";function xr(){try{let r=localStorage.getItem(ct);return r?JSON.parse(r):null}catch{return null}}function dt(r){try{r?localStorage.setItem(ct,JSON.stringify(r)):localStorage.removeItem(ct)}catch{}}var re=class{building=null;error=null;saveState="idle";saveError=null;backendVersion=null;draft=null;packs=[];host;hass=null;revision=-1;ownRevisions=new Set;unsubscribe=null;saveTimer;pending=null;saving=null;connected=!1;constructor(e){this.host=e,e.addController(this)}setHass(e){let t=this.hass===null;this.hass=e,t&&this.connected&&this.start()}hostConnected(){this.connected=!0,this.hass&&this.start()}hostDisconnected(){this.connected=!1,this.flush(),this.unsubscribe?.(),this.unsubscribe=null}edit(e){this.building=e,this.pending=e,clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{this.flush()},wr),this.host.requestUpdate()}get needsRestart(){return this.saveError&&/extra keys not allowed/i.test(this.saveError)?!0:!!this.backendVersion&&pn!=="dev"&&this.backendVersion!==pn}restoreDraft(){let e=this.draft;this.draft=null,e&&this.edit(it(e.building))}discardDraft(){this.draft=null,dt(null),this.host.requestUpdate()}async flush(){clearTimeout(this.saveTimer),this.saving&&await this.saving;let e=this.pending;!e||!this.hass||(this.pending=null,this.saveState="saving",this.host.requestUpdate(),this.saving=(async()=>{try{let t=await Zt(this.hass,e);this.ownRevisions.add(t),this.revision=t,this.saveState=this.pending?"saving":"saved",this.saveError=null,dt(null)}catch(t){this.saveState="error",this.saveError=un(t),dt({building:e,savedAt:Date.now()})}this.host.requestUpdate()})(),await this.saving,this.saving=null)}async start(){if(this.hass&&(await Promise.all([this.reloadPacks(),this.reload()]),!this.unsubscribe&&this.connected))try{this.unsubscribe=await Yt(this.hass,e=>{this.ownRevisions.has(e)||e===this.revision||this.pending||this.saving||this.reload()})}catch{}}async reloadPacks(){if(this.hass){try{this.packs=await Qt(this.hass)}catch{this.packs=[]}ln(this.packs),this.host.requestUpdate()}}async reload(){if(this.hass){try{let e=await Pe(this.hass);this.building=it(e.building),this.backendVersion=e.version??null,this.draft===null&&!this.pending&&(this.draft=xr()),this.revision=e.revision,this.error=null}catch(e){this.error=un(e)}this.host.requestUpdate()}}};function un(r){return r&&typeof r=="object"&&"message"in r?String(r.message):String(r)}var hn;function fn(){let r=new URL("./floorplan-3d-editor.js?v=736334d8d86d",new URL(import.meta.url)).href;return hn??=import(r),hn}J();var kr={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},$r=new Set(["temperature","humidity","power","carbon_dioxide"]),Mr=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas"]),mn=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],_n=new Set(["light","switch","fan"]);function Sr(r){return r.slice(0,r.indexOf("."))}function $(r){return kr[Sr(r)]??null}function Er(r,e){let t=r.entities?.[e];return t?t.area_id?t.area_id:t.device_id&&r.devices?.[t.device_id]?.area_id||null:null}function Ar(r,e){let t=$(e);if(!t)return!1;let n=r.entities?.[e];if(n?.hidden||n?.entity_category)return!1;let o=r.states[e];if(!o)return!1;let i=o.attributes.device_class;return t==="sensor"?!!i&&$r.has(i):t==="binary"?!!i&&Mr.has(i):!0}function H(r,e){if(!e||!r.entities)return[];let t=Object.keys(r.entities).filter(o=>Er(r,o)===e&&Ar(r,o)),n=r.areas?.[e]?.name;return t.sort((o,i)=>{let s=mn.indexOf($(o)),a=mn.indexOf($(i));return s-a||B(r,o,n).localeCompare(B(r,i,n))})}function B(r,e,t){let o=r.states[e]?.attributes.friendly_name??r.entities?.[e]?.name??e;if(t&&o.length>t.length+1&&o.toLowerCase().startsWith(t.toLowerCase()+" ")){let i=o.slice(t.length+1);return i.charAt(0).toUpperCase()+i.slice(1)}return o}function z(r){return!r||r.state==="unavailable"||r.state==="unknown"}function oe(r){if(!r)return!1;switch($(r.entity_id)){case"light":case"switch":case"fan":case"binary":return r.state==="on";case"cover":return r.state==="open"||r.state==="opening";case"climate":return r.attributes.hvac_action==="heating"||r.attributes.hvac_action==="cooling";case"media":return r.state==="playing";case"lock":return r.state==="unlocked"||r.state==="open";default:return!1}}function He(r){if(!r||r.state!=="on")return null;let e=r.attributes,t=typeof e.brightness=="number"?Math.max(.08,e.brightness/255):1,n=e.rgb_color,o;return n&&e.color_mode!=="color_temp"&&e.color_mode!=="brightness"&&e.color_mode!=="onoff"?o=[n[0]/255,n[1]/255,n[2]/255]:typeof e.color_temp_kelvin=="number"?o=Rr(e.color_temp_kelvin):o=[1,.71,.28],{color:o,level:t}}function Rr(r){let e=Math.min(1,Math.max(0,(r-2200)/4300)),t=[1,.66,.26],n=[.78,.9,1];return[t[0]+(n[0]-t[0])*e,t[1]+(n[1]-t[1])*e,t[2]+(n[2]-t[2])*e]}function bn(r,e,t=null){if(r==="light"&&t){if(t==="floor")return 1.95;if(t==="table")return 1.25;if(t==="wall")return 1.95}switch(r){case"light":case"camera":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}var zr=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),Tr=new Set(["garage","gate"]),Ir=new Set(["window","opening"]);function ye(r,e,t=!1){let n=new Map;return e.length&&r.forEach((o,i)=>{let s=t&&e.length===1?e[0]:e[i];s&&n.set(o.id,s)}),n}function vn(r,e){let t=new Map;for(let n of e)for(let o of n.rooms){let i=n.openings.filter(u=>u.room_id===o.id).sort((u,w)=>u.edge-w.edge||u.offset-w.offset);if(!i.length)continue;let s=H(r,o.area_id),a=u=>r.states[u]?.attributes.device_class,l=s.filter(u=>$(u)==="cover"&&zr.has(a(u))),c=i.filter(u=>u.type==="window"),d=i.filter(u=>u.type==="door"),h=i.filter(u=>u.type==="garage"),g=ye(c,l,!0),p=ye(c,s.filter(u=>$(u)==="binary"&&Ir.has(a(u)))),f=ye(d,s.filter(u=>$(u)==="binary"&&a(u)==="door")),b=ye(h,s.filter(u=>$(u)==="cover"&&Tr.has(a(u)??""))),y=ye(h,s.filter(u=>$(u)==="binary"&&a(u)==="garage_door")),v=(u,w)=>u==="none"?null:u??w??null;for(let u of i){let w=u.type==="window"?g:u.type==="garage"?b:null,M=u.type==="window"?p:u.type==="garage"?y:f;t.set(u.id,{cover:v(u.cover,w?.get(u.id)),contact:v(u.contact,M.get(u.id)),tilt:u.tilt==="none"?null:u.tilt,contact2:u.leaves===2&&u.contact2&&u.contact2!=="none"?u.contact2:null})}}return t}var Pr=.5;function Fe(r,e,t="window"){let n=d=>!!d&&r.states[d]?.state==="on",o=d=>!!d&&!!r.states[d]&&!z(r.states[d]),i=n(e.contact2)?1:0;if(t==="door")return{open:o(e.contact)?n(e.contact)?1:0:Pr,open2:i,tilt:0,cover:null};let s=n(e.tilt),a=n(e.contact)&&!s?1:0,l=null,c=e.cover?r.states[e.cover]:void 0;if(c&&!z(c)){let d=c.attributes.current_position;typeof d=="number"?l=1-Math.min(100,Math.max(0,d))/100:l=c.state==="closed"?1:c.state==="opening"||c.state==="closing"?.5:0}else e.cover&&(l=0);return t==="garage"?(l===null&&(l=o(e.contact)&&n(e.contact)?0:1),{open:0,open2:0,tilt:0,cover:l}):{open:a,open2:i,tilt:s?1:0,cover:l}}function ut(r,e){let t=new Map,n=[];for(let s of e){let a=r.entities?.[s]?.device_id??`entity:${s}`,l=t.get(a);l||(t.set(a,l=[]),n.push(a)),l.push(s)}let o=n.map(s=>{let a=t.get(s),l=a.find(c=>!r.entities?.[c]?.name)??a[0];return{primary:l,others:a.filter(c=>c!==l)}}),i=new Map(e.map((s,a)=>[s,a]));return o.sort((s,a)=>i.get(s.primary)-i.get(a.primary))}function ht(r,e){return ut(r,e).map(t=>t.primary)}var Cr={tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i},Hr=new Set(["tv_board","tv_wall"]),gn={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function pt(r,e){return e.startsWith("sensor.")&&r.states[e]?.attributes.device_class==="power"}function Fr(r,e){if(pt(r,e))return e;let t=r.entities?.[e]?.device_id;return!t||!r.entities?null:Object.values(r.entities).find(n=>n.device_id===t&&n.entity_id!==e&&pt(r,n.entity_id))?.entity_id??null}function yn(r,e){let t=new Map;for(let n of e){let o=new Set(n.furniture.flatMap(i=>[i.entity,i.power]).filter(i=>!!i&&i!=="none"));for(let i of n.furniture){let s=i.type in gn,a=s?gn[i.type]:Cr[i.type];if(!a&&i.entity==null&&i.power==null)continue;let l=n.rooms.find(p=>p.points.length>=3&&P([i.x,i.z],p.points)),c=l?ht(r,H(r,l.area_id)):[],d=p=>`${p} ${B(r,p)}`,h=i.entity==="none"?null:i.entity??null;if(i.entity==null){let p=c.filter(f=>!o.has(f));if(s){let f=p.filter(b=>$(b)==="light");h=f.find(b=>a.test(d(b)))??f[0]??null}else if(i.type==="radiator"){let f=p.filter(b=>$(b)==="climate");h=f.find(b=>a.test(d(b)))??f[0]??null}else if(Hr.has(i.type)){let f=p.filter(b=>$(b)==="media");h=f.find(b=>r.states[b]?.attributes.device_class==="tv")??f.find(b=>a?.test(d(b)))??f[0]??null}else a&&(h=p.find(f=>["switch","media","fan"].includes($(f)??"")&&a.test(d(f)))??null);h&&o.add(h)}let g=i.power==="none"?null:i.power??null;i.power==null&&(g=h?Fr(r,h):null,!g&&a&&l&&!s&&(g=H(r,l.area_id).find(f=>pt(r,f)&&!o.has(f)&&a.test(d(f)))??null),g&&o.add(g)),(h||g)&&t.set(i.id,{entity:h,power:g})}}return t}function wn(r){if(!r||r.state==="off"||r.state==="standby"||z(r))return null;let e=r.attributes,t=`${e.app_name??""} ${e.source??""} ${e.app_id??""}`.toLowerCase();return t.includes("netflix")?[.9,.04,.08]:t.includes("youtube")?[1,.1,.15]:t.includes("prime")||t.includes("amazon")?[.1,.6,.95]:t.includes("disney")?[.2,.35,1]:t.includes("spotify")?[.12,.85,.4]:t.includes("zdf")||t.includes("ard")||t.includes("mediathek")?[1,.5,.1]:[.22,.88,1]}W();var kn={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function $n(r){return kn[r]}function we(r){return`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${kn[r]}"/></svg>`}W();var G=(r,e)=>k(r,e);function C(r,e){if(!e||z(e))return G(r,"state_unavailable");let t=e.attributes;switch($(e.entity_id)){case"light":return e.state!=="on"?G(r,"state_off"):typeof t.brightness=="number"?`${Math.round(t.brightness/255*100)} %`:G(r,"state_on");case"switch":case"fan":return G(r,e.state==="on"?"state_on":"state_off");case"cover":return typeof t.current_position=="number"&&e.state!=="opening"&&e.state!=="closing"?`${t.current_position} %`:De(r,e.state);case"climate":{let n=typeof t.current_temperature=="number"?`${F(r,t.current_temperature,1)} \xB0C`:null;return e.state==="off"?n?`${n} \xB7 ${G(r,"state_off")}`:G(r,"state_off"):n??De(r,e.state)}case"media":{let n=e.state==="playing"||e.state==="paused"||e.state==="on"||e.state==="idle",o=[t.app_name,t.media_title,t.source].find(i=>typeof i=="string"&&i);return n&&o?o:De(r,e.state)}case"lock":case"camera":return De(r,e.state);case"binary":return["door","window","opening","garage_door"].includes(t.device_class)?G(r,e.state==="on"?"state_open":"state_closed"):G(r,e.state==="on"?"state_detected":"state_clear");case"sensor":{let n=Number(e.state),o=t.unit_of_measurement??"";return Number.isFinite(n)?`${F(r,n,1)}${o?` ${o}`:""}`:e.state}default:return""}}function De(r,e){let t=`state_${e}`,n=k(r,t);return n===t?e:n}function Mn(r,e){let t=[];for(let n of e.floors)for(let o of n.placements){let i=$(o.entity_id),s=r.states[o.entity_id];if(!i||!s)continue;let a=n.rooms.find(c=>c.points.length>=3&&P([o.x,o.z],c.points))??null,l=a?.area_id?r.areas?.[a.area_id]?.name:void 0;t.push({id:o.entity_id,floorId:n.id,roomId:a?.id??null,x:o.x,z:o.z,y:o.y??bn(i,n.height,o.mount??null),lamp:i==="light"?o.mount??"ceiling":null,icon:we(i),name:B(r,o.entity_id,l),text:C(r,s),active:oe(s),unavailable:z(s),glow:i==="light"?He(s):null})}return t}function Sn(r){return r.floors.flatMap(e=>e.placements.map(t=>t.entity_id))}function ie(r,e){r.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}function En(r,e){let t=e.slice(0,e.indexOf("."));return r.callService(t,"toggle",{entity_id:e})}J();var j=I`
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
`,Le=I`
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
`;var Lr=4,Br=3e3,Nr=8,Or=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[255,95,210],[120,255,150]],se=r=>m`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${$n(r)} />
  </svg>`,Be={previous:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z"},ft=r=>m`<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d=${r} /></svg>`,mt=class extends T{static properties={hass:{attribute:!1},room:{attribute:!1},_showAll:{state:!0},_tick:{state:!0}};cameraTimer;hasCameras=!1;constructor(){super(),this.room=null,this._showAll=!1,this._tick=0}connectedCallback(){super.connectedCallback(),this.cameraTimer=setInterval(()=>{this.hasCameras&&!document.hidden&&this._tick++},Br)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.cameraTimer)}t(e,t){return k(this.hass,e,t)}call(e,t,n){this.hass.callService(e,t,n)}get areaName(){return this.room?.area_id?this.hass.areas?.[this.room.area_id]?.name:void 0}name(e){return B(this.hass,e,this.areaName)}nameButton(e){return m`<button class="fp3d-rp-name" title=${this.t("details")} @click=${()=>ie(this,e)}>${this.name(e)}</button>`}toggle(e,t,n){return m`<button
      class="fp3d-switch"
      role="switch"
      aria-checked=${t?"true":"false"}
      aria-label=${this.name(e.entity_id)}
      ?disabled=${z(e)}
      @click=${n}
    ></button>`}render(){let e=this.room;if(!e||!this.hass)return _;let t=H(this.hass,e.area_id),n=ut(this.hass,t),o=n.reduce((v,u)=>v+u.others.length,0),i=this._showAll?t:n.map(v=>v.primary),s=v=>i.filter(u=>v.includes($(u))).map(u=>this.hass.states[u]),a=s(["light"]),l=s(["cover"]),c=s(["climate"]),d=s(["media"]),h=s(["switch","fan","lock"]),g=s(["sensor","binary"]),p=s(["camera"]);this.hasCameras=p.length>0;let f=s(["scene","script"]),b=this.facts(g,c),y=a.filter(v=>v.state==="on");return m`<section class="fp3d-rp" aria-label=${e.name}>
      <header class="fp3d-rp-head">
        <div>
          <h2>${e.name}</h2>
          ${b.length?m`<p class="fp3d-rp-facts">${b.join(" \xB7 ")}</p>`:_}
        </div>
        <button class="fp3d-rp-close" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>
      <div class="fp3d-rp-body">
        ${e.area_id?i.length?_:m`<p class="fp3d-rp-note">${this.t("panel_empty")}</p>`:m`<p class="fp3d-rp-note">${this.t("panel_no_area")}</p>`}
        ${a.length?this.section("panel_lights",a.map(v=>this.lightRow(v)),y.length?m`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_off",{entity_id:y.map(v=>v.entity_id)})}>
                    ${this.t("panel_all_off")}
                  </button>`:_):_}
        ${l.length?this.section("panel_covers",l.map(v=>this.coverRow(v))):_}
        ${c.length?this.section("panel_climate",c.map(v=>this.climateRow(v))):_}
        ${d.length?this.section("panel_media",d.map(v=>this.mediaRow(v))):_}
        ${h.length?this.section("panel_switches",h.map(v=>this.switchRow(v))):_}
        ${p.length?this.section("panel_cameras",p.map(v=>this.cameraTile(v))):_}
        ${g.length?this.section("panel_sensors",g.map(v=>this.sensorRow(v))):_}
        ${f.length?this.section("panel_scenes",[m`<div class="fp3d-rp-scenes">
                  ${f.map(v=>m`<button
                      class="fp3d-btn"
                      ?disabled=${z(v)}
                      @click=${()=>this.call($(v.entity_id)==="scene"?"scene":"script","turn_on",{entity_id:v.entity_id})}
                    >
                      ${this.name(v.entity_id)}
                    </button>`)}
                </div>`]):_}
        ${o?m`<button class="fp3d-btn fp3d-rp-small fp3d-rp-more" @click=${()=>this._showAll=!this._showAll}>
              ${this._showAll?this.t("panel_less"):this.t("panel_more",{n:o})}
            </button>`:_}
      </div>
    </section>`}facts(e,t){let n=[],o=e.find(a=>a.attributes.device_class==="temperature"&&!z(a)),i=t.find(a=>typeof a.attributes.current_temperature=="number");o?n.push(C(this.hass,o)):i&&n.push(`${F(this.hass,i.attributes.current_temperature,1)} \xB0C`);let s=e.find(a=>a.attributes.device_class==="humidity"&&!z(a));return s&&n.push(C(this.hass,s)),n}section(e,t,n=_){return m`<div class="fp3d-rp-sec">
      <div class="fp3d-rp-sec-head"><h3>${this.t(e)}</h3>${n}</div>
      ${t}
    </div>`}lightRow(e){let t=e.attributes,n=e.state==="on",o=t.supported_color_modes??[],i=o.some(g=>g!=="onoff"),s=o.includes("color_temp"),a=o.some(g=>["hs","rgb","rgbw","rgbww","xy"].includes(g)),l=typeof t.brightness=="number"?Math.round(t.brightness/255*100):100,c=t.min_color_temp_kelvin??2200,d=t.max_color_temp_kelvin??6500,h=e.entity_id;return m`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${se("light")}</span>
      ${this.nameButton(h)}
      <span class="fp3d-rp-state">${C(this.hass,e)}</span>
      ${this.toggle(e,n,()=>this.call("light","toggle",{entity_id:h}))}
      ${n&&i?m`<label class="fp3d-rp-slider"
            ><span>${this.t("brightness")}</span>
            <input
              type="range"
              min="1"
              max="100"
              .value=${String(l)}
              @change=${g=>this.call("light","turn_on",{entity_id:h,brightness_pct:Number(g.target.value)})}
          /></label>`:_}
      ${n&&s?m`<label class="fp3d-rp-slider fp3d-rp-ct"
            ><span>${this.t("color_temp")}</span>
            <input
              type="range"
              min=${c}
              max=${d}
              step="50"
              .value=${String(t.color_temp_kelvin??c)}
              @change=${g=>this.call("light","turn_on",{entity_id:h,color_temp_kelvin:Number(g.target.value)})}
          /></label>`:_}
      ${n&&a?m`<div class="fp3d-rp-swatches" role="group" aria-label=${this.t("color")}>
            ${Or.map(g=>m`<button
                class="fp3d-rp-swatch"
                style="--c: rgb(${g.join(",")})"
                aria-label="rgb(${g.join(", ")})"
                @click=${()=>this.call("light","turn_on",{entity_id:h,rgb_color:g})}
              ></button>`)}
          </div>`:_}
    </div>`}coverRow(e){let t=e.attributes,n=t.supported_features??0,o=e.entity_id,i=z(e);return m`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon">${se("cover")}</span>
      ${this.nameButton(o)}
      <span class="fp3d-rp-state">${C(this.hass,e)}</span>
      <div class="fp3d-rp-buttons">
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.call("cover","open_cover",{entity_id:o})}>${this.t("cover_open")}</button>
        ${n&Nr?m`<button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.call("cover","stop_cover",{entity_id:o})}>${this.t("cover_stop")}</button>`:_}
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.call("cover","close_cover",{entity_id:o})}>${this.t("cover_close")}</button>
      </div>
      ${n&Lr&&typeof t.current_position=="number"?m`<label class="fp3d-rp-slider"
            ><span>${this.t("position")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${i}
              .value=${String(t.current_position)}
              @change=${s=>this.call("cover","set_cover_position",{entity_id:o,position:Number(s.target.value)})}
          /></label>`:_}
    </div>`}climateRow(e){let t=e.attributes,n=e.entity_id,o=typeof t.temperature=="number"?t.temperature:null,i=t.target_temp_step??.5,s=t.min_temp??5,a=t.max_temp??30,l=t.hvac_modes??[],c=d=>this.call("climate","set_temperature",{entity_id:n,temperature:Math.min(a,Math.max(s,Math.round(d/i)*i))});return m`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${t.hvac_action==="heating"?"fp3d-rp-on":""}">${se("climate")}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${C(this.hass,e)}</span>
      ${o!==null?m`<div class="fp3d-rp-stepper fp3d-rp-wide">
            <button class="fp3d-btn" aria-label=${this.t("temp_down")} @click=${()=>c(o-i)}>−</button>
            <span><small>${this.t("target_temp")}</small> ${F(this.hass,o,1)} °C</span>
            <button class="fp3d-btn" aria-label=${this.t("temp_up")} @click=${()=>c(o+i)}>+</button>
          </div>`:_}
      ${l.length>1?m`<div class="fp3d-rp-chips">
            ${l.map(d=>m`<button
                class="fp3d-chip"
                aria-pressed=${e.state===d}
                @click=${()=>this.call("climate","set_hvac_mode",{entity_id:n,hvac_mode:d})}
              >
                ${this.stateLabel(d)}
              </button>`)}
          </div>`:_}
    </div>`}stateLabel(e){let t=`state_${e}`,n=this.t(t);return n===t?e:n}mediaRow(e){let t=e.attributes,n=e.entity_id,o=z(e)||e.state==="off",i=[t.media_title,t.media_artist].filter(s=>typeof s=="string"&&s).join(" \xB7 ");return m`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${e.state==="playing"?"fp3d-rp-on":""}">${se("media")}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${this.stateLabel(e.state)}</span>
      ${i?m`<p class="fp3d-rp-media fp3d-rp-wide">${i}</p>`:_}
      <div class="fp3d-rp-buttons fp3d-rp-wide">
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("previous")} ?disabled=${o} @click=${()=>this.call("media_player","media_previous_track",{entity_id:n})}>
          ${ft(Be.previous)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("play_pause")} ?disabled=${z(e)} @click=${()=>this.call("media_player","media_play_pause",{entity_id:n})}>
          ${ft(e.state==="playing"?Be.pause:Be.play)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("next")} ?disabled=${o} @click=${()=>this.call("media_player","media_next_track",{entity_id:n})}>
          ${ft(Be.next)}
        </button>
      </div>
      ${typeof t.volume_level=="number"?m`<label class="fp3d-rp-slider"
            ><span>${this.t("volume")}</span>
            <input
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(t.volume_level*100))}
              @change=${s=>this.call("media_player","volume_set",{entity_id:n,volume_level:Number(s.target.value)/100})}
          /></label>`:_}
    </div>`}switchRow(e){let t=e.entity_id,n=$(t),o=t.slice(0,t.indexOf(".")),i=n==="lock"?e.state==="unlocked"||e.state==="open":e.state==="on",s=()=>n==="lock"?this.call("lock",i?"lock":"unlock",{entity_id:t}):this.call(o,"toggle",{entity_id:t});return m`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${i?"fp3d-rp-on":""}">${se(n)}</span>
      ${this.nameButton(t)}
      <span class="fp3d-rp-state">${C(this.hass,e)}</span>
      ${this.toggle(e,i,s)}
    </div>`}cameraTile(e){let t=e.attributes.entity_picture,n=t&&!z(e)?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this._tick}`:null;return m`<button class="fp3d-rp-camera" title=${this.t("camera_live")} @click=${()=>ie(this,e.entity_id)}>
      ${n?m`<img src=${n} alt=${this.name(e.entity_id)} loading="lazy" />`:m`<span class="fp3d-rp-note">${C(this.hass,e)}</span>`}
      <span class="fp3d-rp-camera-name">${this.name(e.entity_id)}</span>
    </button>`}sensorRow(e){let t=$(e.entity_id),n=t==="binary"&&e.state==="on";return m`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${se(t)}</span>
      ${this.nameButton(e.entity_id)}
      <span class="fp3d-rp-state">${C(this.hass,e)}</span>
    </div>`}fire(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}static styles=[j,Le,I`
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
    `]};customElements.get("fp3d-room-panel")||customElements.define("fp3d-room-panel",mt);J();var N=(r,e)=>[r[0]-e[0],r[1]-e[1]],xe=(r,e)=>[r[0]+e[0],r[1]+e[1]],X=(r,e)=>[r[0]*e,r[1]*e],gt=(r,e)=>r[0]*e[0]+r[1]*e[1],ke=(r,e)=>r[0]*e[1]-r[1]*e[0],Ne=r=>Math.hypot(r[0],r[1]),$e=r=>{let e=Ne(r)||1;return[r[0]/e,r[1]/e]},An=r=>[-r[1],r[0]],Rn=r=>[r[1],-r[0]];function _t(r,e){let t=e.eps??.005,n=[],o=[],i=p=>{for(let f=0;f<o.length;f++)if(Math.abs(o[f][0]-p[0])<=t&&Math.abs(o[f][1]-p[1])<=t)return f;return o.push([p[0],p[1]]),o.length-1},s=[];for(let p of r){let f=p.points;if(f.length<3||Math.abs(K(f))<1e-6)continue;let b=K(f)>0,y=f.map(i);for(let v=0;v<f.length;v++){let u=y[v],w=y[(v+1)%f.length];u!==w&&s.push(b?{u,v:w,room:p.id,edge:v,forward:!0}:{u:w,v:u,room:p.id,edge:v,forward:!1})}}let a=[];for(let p of s){let f=o[p.u],b=o[p.v],y=N(b,f),v=Ne(y),u=X(y,1/v),w=[];for(let x=0;x<o.length;x++){if(x===p.u||x===p.v)continue;let S=N(o[x],f),E=gt(S,u);E<=t||E>=v-t||Math.abs(ke(u,S))<=t&&w.push({t:E,id:x})}w.sort((x,S)=>x.t-S.t);let M=[{t:0,id:p.u},...w,{t:v,id:p.v}];for(let x=0;x+1<M.length;x++){let S=M[x],E=M[x+1],A=p.forward?S.t:v-E.t,L=p.forward?E.t:v-S.t;a.push({u:S.id,v:E.id,room:p.room,edge:p.edge,t0:A,t1:L})}}let l=new Map;for(let p of a){let f=p.u<p.v?`${p.u}-${p.v}`:`${p.v}-${p.u}`,b=l.get(f);b||l.set(f,b=[]),b.push(p)}let c=p=>({room_id:p.room,edge:p.edge,t0:p.t0,t1:p.t1}),d=[];for(let p of l.values()){let f=p[0],b=p.find(y=>y!==f&&y.u===f.v&&y.v===f.u&&y.room!==f.room);for(let y of p)y!==f&&y!==b&&y.room!==f.room&&n.push(`overlap:${f.room}:${y.room}`);b?d.push({a:f.u,b:f.v,left:e.interior/2,right:e.interior/2,exterior:!1,roomLeft:f.room,roomRight:b.room,sources:[c(f),c(b)]}):d.push({a:f.u,b:f.v,left:0,right:e.exterior,exterior:!0,roomLeft:f.room,roomRight:null,sources:[c(f)]})}d=Wr(d,o);let h=Kr(d,o);return{walls:d.map((p,f)=>{let b=o[p.a],y=o[p.b],v=h.get(`${f}:a`),u=h.get(`${f}:b`),w=Gr([v.right,u.left,y,u.right,v.left,b],1e-6);return{id:Vr(b,y),a:[b[0],b[1]],b:[y[0],y[1]],left:p.left,right:p.right,exterior:p.exterior,roomLeft:p.roomLeft,roomRight:p.roomRight,sources:p.sources,footprint:w}}),warnings:[...new Set(n)]}}function Vr(r,e){let t=i=>Math.round(i*100),[n,o]=r[0]<e[0]||r[0]===e[0]&&r[1]<=e[1]?[r,e]:[e,r];return`w_${t(n[0])}_${t(n[1])}_${t(o[0])}_${t(o[1])}`}function zn(r){return{...r,a:r.b,b:r.a,left:r.right,right:r.left,roomLeft:r.roomRight,roomRight:r.roomLeft}}function Wr(r,e){let t=r.slice(),n=!0;for(;n;){n=!1;let o=new Map;t.forEach((i,s)=>{for(let a of[i.a,i.b]){let l=o.get(a);l||o.set(a,l=[]),l.push(s)}});for(let[i,s]of o){if(s.length!==2)continue;let a=t[s[0]],l=t[s[1]];if(a.b!==i&&(a=zn(a)),l.a!==i&&(l=zn(l)),a.a===l.b)continue;let c=$e(N(e[a.b],e[a.a])),d=$e(N(e[l.b],e[l.a]));if(Math.abs(ke(c,d))>1e-6||gt(c,d)<=0||a.exterior!==l.exterior||a.roomLeft!==l.roomLeft||a.roomRight!==l.roomRight||Math.abs(a.left-l.left)>1e-9||Math.abs(a.right-l.right)>1e-9)continue;let h={...a,b:l.b,sources:Ur(a.sources,l.sources)},g=t.filter((p,f)=>f!==s[0]&&f!==s[1]);g.push(h),t.length=0,t.push(...g),n=!0;break}}return t}function Ur(r,e){let t=r.map(n=>({...n}));for(let n of e){let o=t.find(i=>i.room_id===n.room_id&&i.edge===n.edge&&(Math.abs(i.t1-n.t0)<1e-6||Math.abs(n.t1-i.t0)<1e-6));o?(o.t0=Math.min(o.t0,n.t0),o.t1=Math.max(o.t1,n.t1)):t.push({...n})}return t}function Kr(r,e){let t=new Map;r.forEach((o,i)=>{let s=$e(N(e[o.b],e[o.a])),a=[[o.a,{key:`${i}:a`,d:s,left:o.left,right:o.right,angle:Math.atan2(s[1],s[0])}],[o.b,{key:`${i}:b`,d:X(s,-1),left:o.right,right:o.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a){let d=t.get(l);d||t.set(l,d=[]),d.push(c)}});let n=new Map;for(let[o,i]of t){let s=e[o];i.sort((c,d)=>c.angle-d.angle);let a=c=>({left:xe(s,X(An(c.d),c.left)),right:xe(s,X(Rn(c.d),c.right))});for(let c of i)n.set(c.key,a(c));if(i.length<2)continue;let l=4*Math.max(...i.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<i.length;c++){let d=i[c],h=i[(c+1)%i.length],g=xe(s,X(An(d.d),d.left)),p=xe(s,X(Rn(h.d),h.right)),f=ke(d.d,h.d);if(Math.abs(f)<1e-4)continue;let b=ke(N(p,g),h.d)/f,y=xe(g,X(d.d,b));Ne(N(y,s))>l||(n.get(d.key).left=y,n.get(h.key).right=y)}}return n}function Gr(r,e){let t=r.filter((o,i)=>Ne(N(o,r[(i+1)%r.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let o=0;o<t.length;o++){let i=t[(o+t.length-1)%t.length],s=t[o],a=t[(o+1)%t.length],l=N(s,i),c=N(a,s);if(Math.abs(ke($e(l),$e(c)))<1e-7&&gt(l,c)>0){t=t.filter((d,h)=>h!==o),n=!0;break}}}return t}var ee=.03,jr=.07;function ae(r,e=!1){if(!r)return null;let t=Number(r.state);if(!Number.isFinite(t))return null;let n=String(r.attributes.unit_of_measurement??"W"),o=n==="kW"?t*1e3:n==="MW"?t*1e6:t;return e?-o:o}function Tn(r,e){return e.startsWith("sensor.")&&r.states[e]?.attributes.device_class==="power"}function bt(r,e){if(Tn(r,e))return e;let t=r.entities?.[e]?.device_id;return!t||!r.entities?null:Object.values(r.entities).find(o=>o.device_id===t&&o.entity_id!==e&&Tn(r,o.entity_id))?.entity_id??null}function Cn(r,e){let t=e.energy,n=new Set([t.grid,t.solar,t.battery].filter(Boolean)),o=[],i=new Set;for(let s of e.floors)for(let a of s.placements){let l=bt(r,a.entity_id);!l||n.has(l)||i.has(l)||(i.add(l),o.push({id:a.entity_id,powerEntity:l,floorId:s.id,x:a.x,z:a.z,power:Math.max(0,ae(r.states[l])??0)}))}return o}function Hn(r,e,t){let n=e.energy,o=n.grid?ae(r.states[n.grid],n.grid_invert):null,i=n.solar?ae(r.states[n.solar]):null,s=n.battery?ae(r.states[n.battery],n.battery_invert):null,a=n.battery_soc?Number(r.states[n.battery_soc]?.state):NaN,l=n.tariff?r.states[n.tariff]:void 0,c=Number(l?.state),d=null;return o!==null||i!==null||s!==null?d=Math.max(0,(o??0)+Math.max(0,i??0)+(s??0)):t.length&&(d=t.reduce((h,g)=>h+g.power,0)),{grid:o,solar:i===null?null:Math.max(0,i),battery:s,soc:Number.isFinite(a)?a:null,tariff:l&&Number.isFinite(c)?{value:c,unit:String(l.attributes.unit_of_measurement??"")}:null,consumption:d}}function Oe(r,e){return r.pos.push(e),r.adj.push([]),r.pos.length-1}function le(r,e,t){let n=Math.hypot(r.pos[e][0]-r.pos[t][0],r.pos[e][1]-r.pos[t][1]);r.adj[e].push({to:t,w:n}),r.adj[t].push({to:e,w:n})}function qr(r,e){let t=r.length,n=r.map((o,i)=>{let s=r[(i+1)%t],a=s[0]-o[0],l=s[1]-o[1],c=Math.hypot(a,l)||1,d=-l/c,h=a/c;return{p:[o[0]+d*e[i],o[1]+h*e[i]],d:[a/c,l/c],n:[d,h]}});return r.map((o,i)=>{let s=n[(i-1+t)%t],a=n[i],l=s.d[0]*a.d[1]-s.d[1]*a.d[0];if(Math.abs(l)<1e-6)return[o[0]+a.n[0]*e[i],o[1]+a.n[1]*e[i]];let c=((a.p[0]-s.p[0])*a.d[1]-(a.p[1]-s.p[1])*a.d[0])/l;return[s.p[0]+s.d[0]*c,s.p[1]+s.d[1]*c]})}function Zr(r){return K(r.points)>=0?{pts:r.points,flipped:!1}:{pts:[...r.points].reverse(),flipped:!0}}function Yr(r,e,t){let n={pos:[],adj:[],rings:new Map},{walls:o}=_t(r.rooms,{exterior:e,interior:t});for(let i of r.rooms){if(i.points.length<3)continue;let{pts:s,flipped:a}=Zr(i),l=s.length,c=s.map((g,p)=>{let f=a?(l-2-p+l)%l:p,b=o.some(y=>!y.exterior&&y.sources.some(v=>v.room_id===i.id&&v.edge===f));return jr+(b?t/2:0)}),d=qr(s,c).map(g=>Oe(n,g)),h=d.map((g,p)=>[g,d[(p+1)%l]]);for(let[g,p]of h)le(n,g,p);n.rings.set(i.id,h)}for(let i of o){if(i.exterior||!i.roomLeft||!i.roomRight)continue;let s=[(i.a[0]+i.b[0])/2,(i.a[1]+i.b[1])/2],a=Ve(n,i.roomLeft,s),l=Ve(n,i.roomRight,s);a!==null&&l!==null&&le(n,a,l)}return n}function Ve(r,e,t){let n=r.rings.get(e);if(!n)return null;let o=null;for(let s of n){let a=r.pos[s[0]],l=r.pos[s[1]],c=l[0]-a[0],d=l[1]-a[1],h=c*c+d*d||1,g=Math.min(1,Math.max(0,((t[0]-a[0])*c+(t[1]-a[1])*d)/h)),p=[a[0]+c*g,a[1]+d*g],f=Math.hypot(t[0]-p[0],t[1]-p[1]);(!o||f<o.d)&&(o={seg:s,q:p,d:f})}if(!o)return null;let i=Oe(r,o.q);return le(r,i,o.seg[0]),le(r,i,o.seg[1]),i}function In(r,e){let t=r.rooms.filter(i=>i.points.length>=3),n=t.find(i=>P(e,i.points));if(n)return n;let o=null;for(let i of t)for(let s of i.points){let a=Math.hypot(e[0]-s[0],e[1]-s[1]);(!o||a<o.d)&&(o={room:i,d:a})}return o?.room??null}function Qr(r,e){let t=r.pos.map(()=>1/0),n=r.pos.map(()=>-1),o=r.pos.map(()=>!1);for(t[e]=0;;){let i=-1;for(let s=0;s<t.length;s++)!o[s]&&t[s]<1/0&&(i<0||t[s]<t[i])&&(i=s);if(i<0)break;o[i]=!0;for(let{to:s,w:a}of r.adj[i])t[i]+a<t[s]-1e-9&&(t[s]=t[i]+a,n[s]=i)}return{dist:t,prev:n}}var Pn=new WeakMap;function Jr(r,e){let t=r.energy.meter,n=r.floors.find(d=>d.id===t.floor_id),o=[],{wall_exterior:i,wall_interior:s}=r.settings,a=new Map,l=new Map;e.forEach((d,h)=>l.set(d.floorId,[...l.get(d.floorId)??[],h]));let c=r.floors.filter(d=>l.has(d.id));for(let d of c){if(d.id===n.id)continue;let h=d.elevation>n.elevation,g=l.get(d.id),p=g.every(b=>e[b].kind==="battery")?"battery":"consumer";o.push({floorId:n.id,a:[t.x,ee,t.z],b:[t.x,h?n.height:-.2,t.z],dist:0,members:g,kind:p});let f=Math.abs(d.elevation-n.elevation);o.push({floorId:d.id,a:[t.x,h?-.2:d.height,t.z],b:[t.x,ee,t.z],dist:f,members:g,kind:p}),a.set(d.id,f+.25)}for(let d of c){let h=Yr(d,i,s),g=In(d,[t.x,t.z]);if(!g)continue;let p=Oe(h,[t.x,t.z]),f=Ve(h,g.id,[t.x,t.z]);if(f===null)continue;le(h,p,f);let b=[];for(let M of l.get(d.id)){let x=e[M],S=In(d,[x.x,x.z]);if(!S)continue;let E=Oe(h,[x.x,x.z]),A=Ve(h,S.id,[x.x,x.z]);A!==null&&(le(h,E,A),b.push({node:E,member:M}))}let{dist:y,prev:v}=Qr(h,p),u=new Map;for(let M of b)if(Number.isFinite(y[M.node]))for(let x=M.node;v[x]>=0;x=v[x]){let S=v[x],E=`${S}>${x}`,A=u.get(E)??{a:S,b:x,members:[]};A.members.push(M.member),u.set(E,A)}let w=a.get(d.id)??0;for(let{a:M,b:x,members:S}of u.values()){let E=h.pos[M],A=h.pos[x],L=S.every(ce=>e[ce].kind==="battery")?"battery":"consumer";o.push({floorId:d.id,a:[E[0],ee,E[1]],b:[A[0],ee,A[1]],dist:w+y[M],members:S,kind:L})}}return o}function Fn({building:r,consumers:e,summary:t,battery:n}){let o=r.energy.meter;if(!o)return[];let i=r.floors.find(p=>p.id===o.floor_id);if(!i)return[];let{wall_exterior:s,wall_interior:a}=r.settings,l=e.map(p=>({floorId:p.floorId,x:p.x,z:p.z,kind:"consumer",power:p.power}));n&&t.battery!==null&&l.push({...n,kind:"battery",power:Math.abs(t.battery)});let c=`${o.floor_id}:${o.x},${o.z}|${l.map(p=>`${p.floorId}:${p.x},${p.z}:${p.kind}`).join(";")}`,d=Pn.get(r);d||Pn.set(r,d=new Map);let h=d.get(c);h||(h=Jr(r,l),d.clear(),d.set(c,h));let g=h.map(p=>({floorId:p.floorId,a:p.a,b:p.b,dist:p.dist,power:p.members.reduce((f,b)=>f+l[b].power,0),kind:p.kind}));if(t.grid!==null){let{walls:p}=_t(i.rooms,{exterior:s,interior:a}),f=null;for(let b of p){if(!b.exterior)continue;let y=b.b[0]-b.a[0],v=b.b[1]-b.a[1],u=y*y+v*v||1,w=Math.min(1,Math.max(0,((o.x-b.a[0])*y+(o.z-b.a[1])*v)/u)),M=[b.a[0]+y*w,b.a[1]+v*w],x=Math.hypot(o.x-M[0],o.z-M[1]),S=Math.sqrt(u);(!f||x<f.d)&&(f={q:M,out:[v/S,-y/S],d:x})}if(f){let b=[f.q[0]+f.out[0]*(s+1.4),ee,f.q[1]+f.out[1]*(s+1.4)],y=[o.x,ee,o.z],v=t.grid>=0;g.push({floorId:i.id,a:v?b:y,b:v?y:b,dist:0,power:Math.abs(t.grid),kind:v?"grid":"export"})}}if(t.solar!==null&&g.push({floorId:i.id,a:[o.x+.08,i.height+.6,o.z+.08],b:[o.x+.08,ee,o.z+.08],dist:0,power:t.solar,kind:"solar"}),t.battery!==null&&t.battery>0)for(let p of g)p.kind==="battery"&&([p.a,p.b]=[p.b,p.a]);return g}function Dn(r,e){let t=[.22,.88,1],n=[1,.78,.2],o=[.35,1,.55];if(r==="grid")return t;if(r==="export"||r==="solar")return n;if(r==="battery")return o;let i=[[Math.max(0,e.grid??0),t],[Math.max(0,(e.solar??0)-Math.max(0,-(e.grid??0))-Math.max(0,-(e.battery??0))),n],[Math.max(0,e.battery??0),o]],[s]=i.reduce((a,l)=>l[0]>a[0]?l:a);return s>0?i.find(a=>a[0]===s)[1]:t}var vt=["neon","blueprint","day"],yt={neon:{night:[[11,17,32],[7,11,20]],day:[[26,44,78],[12,20,36]]},blueprint:{night:[[26,70,130],[10,38,78]],day:[[34,86,150],[14,48,96]]},day:{night:[[214,224,238],[176,190,210]],day:[[242,246,251],[205,216,230]]}};var Me={temperature:{deviceClass:"temperature",unit:"\xB0C",stops:[[17,[.24,.48,1]],[20.5,[.2,.9,.7]],[23,[1,.75,.25]],[25.5,[1,.32,.2]]]},humidity:{deviceClass:"humidity",unit:"%",stops:[[30,[1,.6,.2]],[45,[.3,.9,.5]],[60,[.2,.8,1]],[75,[.3,.4,1]]]},co2:{deviceClass:"carbon_dioxide",unit:"ppm",stops:[[450,[.3,.9,.5]],[800,[1,.85,.3]],[1200,[1,.5,.2]],[1600,[1,.25,.25]]]}};function Ln(r,e){let t=Me[r].stops;if(e<=t[0][0])return t[0][1];for(let n=1;n<t.length;n++){let[o,i]=t[n],[s,a]=t[n-1];if(e<=o){let l=(e-s)/(o-s);return[a[0]+(i[0]-a[0])*l,a[1]+(i[1]-a[1])*l,a[2]+(i[2]-a[2])*l]}}return t[t.length-1][1]}function Bn(r,e,t){let n=new Map,o=Me[t].deviceClass;for(let i of e.floors)for(let s of i.rooms){let a=H(r,s.area_id).filter(l=>l.startsWith("sensor.")&&r.states[l]?.attributes.device_class===o).map(l=>Number(r.states[l].state)).filter(l=>Number.isFinite(l));a.length&&n.set(s.id,a.reduce((l,c)=>l+c,0)/a.length)}return n}function Nn(r){let e=Me[r].stops,t=e[0][0],n=e[e.length-1][0];return`linear-gradient(90deg, ${e.map(([o,i])=>`rgb(${i.map(s=>Math.round(s*255)).join(",")}) ${Math.round((o-t)/(n-t)*100)}%`).join(", ")})`}W();function Se(r,e){if(!lt(e))return k(r,`furn_${e}`);let t=dn(e);return t?cn(t,r?.language??navigator.language):k(r,"pack_missing_item")}W();var Xr=new URL(import.meta.url),eo=new URL("./floorplan-3d-3d.js?v=4216c2e5f819",Xr).href,On;function Vn(){return On??=import(eo),On}W();var Wn=r=>r.toLowerCase().replace(/[_\-]+/g," ").replace(/\s+/g," ").trim();function to(r,e,t){let n=Wn(t);if(!n||n==="unknown"||n==="unavailable"||n==="not home"||n==="away")return null;for(let o of e.floors)for(let i of o.rooms)if([i.name,i.area_id??"",i.area_id?r.areas?.[i.area_id]?.name??"":""].filter(Boolean).map(Wn).includes(n))return{floorId:o.id,room:i};return null}function no(r){let e=r.trim().split(/\s+/).filter(Boolean);return e.length?(e.length>1?e[0][0]+e[e.length-1][0]:e[0].slice(0,2)).toUpperCase():"?"}function Un(r,e){let t=[],n=new Map;for(let o of e.presence){let i=r.states[o.person];if(!i||!o.sensor||i.state!=="home"&&i.state!=="on")continue;let s=r.states[o.sensor];if(!s)continue;let a=to(r,e,s.state);if(!a)continue;let l=n.get(a.room.id)??0;n.set(a.room.id,l+1);let[c,d]=st(a.room.points),h=-Math.PI/2+.9+l*1.15,g=.75,p=i.attributes.friendly_name??o.person;t.push({id:o.person,name:p,initials:no(p),picture:i.attributes.entity_picture??null,floorId:a.floorId,roomId:a.room.id,x:c+Math.cos(h)*g,z:d+Math.sin(h)*g})}return t}function Kn(r,e,t,n){let o=new Map,i=s=>!!s&&r.states[s]?.state==="on";for(let s of e.floors){let a=new Set;for(let c of s.rooms)for(let d of ht(r,H(r,c.area_id)))$(d)==="light"&&a.add(d);for(let c of s.placements)$(c.entity_id)==="light"&&a.add(c.entity_id);let l=s.openings.filter(c=>{let d=t.get(c.id);return d?c.type==="garage"?(Fe(r,d,"garage").cover??1)<.95:i(d.contact)||i(d.tilt)||i(d.contact2??null):!1}).length;o.set(s.id,{rooms:s.rooms.length,lightsOn:[...a].filter(c=>r.states[c]?.state==="on").length,open:l,persons:n.filter(c=>c.floorId===s.id).length})}return o}function Gn(r,e){let t=[e.rooms===1?k(r,"floor_rooms_one"):k(r,"floor_rooms",{n:e.rooms})];return e.lightsOn&&t.push(k(r,"floor_lights",{n:e.lightsOn})),e.open&&t.push(k(r,"floor_open",{n:e.open})),e.persons&&t.push(k(r,"floor_persons",{n:e.persons})),t.join(" \xB7 ")}var ro={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"},wt=class extends T{static properties={hass:{attribute:!1},building:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},wallMode:{attribute:!1},explode:{type:Boolean},markerMode:{attribute:!1},heatMode:{attribute:!1},theme:{attribute:!1},packs:{attribute:!1},showEnergy:{attribute:!1},flows:{attribute:!1},furnish:{type:Boolean},selectedFurniture:{attribute:!1},_sky:{state:!0},quality:{attribute:!1},showStats:{type:Boolean},_stats:{state:!0},_error:{state:!0},_energy:{state:!0},_flows:{state:!0}};viewer=null;starting=!1;shownStates=new Map;shownPacks=-1;openingLinks=null;linkedRegistry;furnitureLinks=new Map;heatValues=new Map;watched=[];constructor(){super(),this.building=null,this.floorId=null,this.roomId=null,this.wallMode="auto",this.explode=!0,this.markerMode="important",this.heatMode="none",this.theme="neon",this.furnish=!1,this.showEnergy=!0,this.flows=null,this.selectedFurniture=null,this._sky=0,this.quality="auto",this.showStats=!1,this._stats=null,this._error=null,this._energy=null;try{this._flows=localStorage.getItem("floorplan_3d.flows")==="1"}catch{this._flows=!1}}connectedCallback(){super.connectedCallback(),this.hasUpdated&&!this.viewer&&this.start()}disconnectedCallback(){super.disconnectedCallback(),this.viewer?.dispose(),this.viewer=null}firstUpdated(){this.start()}async start(){if(!(this.starting||this.viewer)){this.starting=!0;try{let e=await Vn();if(!this.isConnected)return;let t=this.renderRoot.querySelector(".fp3d-stage");this.viewer=e.createViewer(t,{quality:this.quality,explode:this.explode,onRoomTap:(n,o)=>this.fire("room-tap",{floorId:n,roomId:o}),onFloorTap:n=>this.fire("floor-tap",{floorId:n}),floorInfo:n=>n.rooms.length===1?k(this.hass,"floor_rooms_one"):k(this.hass,"floor_rooms",{n:n.rooms.length}),onBack:()=>this.fire("back",{}),onDeviceTap:n=>this.onDeviceTap(n),onDeviceHold:n=>ie(this,n),onFurnitureSelect:n=>this.fire("furniture-select",{id:n}),onFurnitureMove:(n,o,i)=>this.fire("furniture-move",{id:n,x:o,z:i}),onStats:n=>{this.showStats&&(this._stats=n)}}),this.viewer.setWallMode(this.wallMode),this.viewer.setTheme(this.theme),this.viewer.setFurnishMode(this.furnish),this.viewer.setPacks([...at()]),this.shownPacks=Ce(),this.building&&this.viewer.setBuilding(this.building),this.syncDevices(!0),this.viewer.setFloor(this.floorId,!1),this.roomId&&this.viewer.selectRoom(this.roomId)}catch(e){this._error=String(e)}finally{this.starting=!1}}}updated(e){let t=this.viewer;t&&(this.shownPacks!==Ce()&&(this.shownPacks=Ce(),t.setPacks([...at()])),e.has("building")&&this.building&&t.setBuilding(this.building),(e.has("building")||e.has("hass")||e.has("markerMode")||e.has("heatMode")||e.has("flows"))&&this.syncDevices(e.has("building")||e.has("markerMode")||e.has("heatMode")||e.has("flows")),e.has("floorId")&&t.setFloor(this.floorId),e.has("roomId")&&(this.roomId||e.get("roomId"))&&t.selectRoom(this.roomId),e.has("wallMode")&&t.setWallMode(this.wallMode),e.has("explode")&&t.setExplode(this.explode),e.has("theme")&&t.setTheme(this.theme),e.has("furnish")&&t.setFurnishMode(this.furnish),e.has("selectedFurniture")&&t.selectFurniture(this.selectedFurniture),e.has("quality")&&e.get("quality")!==void 0&&t.setQuality(this.quality))}syncDevices(e){let t=this.viewer,n=this.building;if(!t||!n||!this.hass)return;let o=this.hass;if(e||!this.openingLinks||this.linkedRegistry!==o.entities){this.openingLinks=vn(o,n.floors),this.furnitureLinks=yn(o,n.floors),this.linkedRegistry=o.entities;let u=[...this.openingLinks.values()].flatMap(R=>[R.cover,R.contact,R.tilt,R.contact2??null]),w=Sn(n),M=w.map(R=>bt(o,R)),x=n.energy,S=n.presence.flatMap(R=>[R.person,R.sensor]),E=n.floors.flatMap(R=>R.rooms.flatMap(pe=>H(o,pe.area_id).filter(ue=>$(ue)==="light"))),A=[...this.furnitureLinks.values()].flatMap(R=>[R.entity,R.power]),L=this.heatMode==="none"?[]:n.floors.flatMap(R=>R.rooms.flatMap(pe=>H(o,pe.area_id).filter(ue=>ue.startsWith("sensor.")))),ce=[...w,...u,...M,...A,x.grid,x.solar,x.battery,x.battery_soc,x.tariff,...S,...E,...L,"sun.sun"];this.watched=[...new Set(ce.filter(R=>!!R))],e=!0}if(!(e||this.watched.some(u=>this.shownStates.get(u)!==o.states[u])))return;this.shownStates=new Map(this.watched.map(u=>[u,o.states[u]]));let s=Cn(o,n),a=Mn(o,n),l=this.furnitureMarkers(o,n,new Set(a.map(u=>u.id)),new Set(s.map(u=>u.powerEntity)));s.push(...l.consumers);let c=Hn(o,n,s),d=new Map(s.filter(u=>u.id!==u.powerEntity).map(u=>[u.id,u.power]));t.setDevices([...a,...l.markers].map(u=>{let w=d.get(u.id)??null,M={...u,power:w,powerText:w===null?void 0:de(o,w)};return{...M,pin:this.showPin(M)}})),t.setPickTargets(l.targets,this.openingTargets()),t.setScreens(l.screens);let h=new Map(n.floors.flatMap(u=>u.openings.map(w=>[w.id,w.type])));t.setOpeningStates(new Map([...this.openingLinks].map(([u,w])=>[u,Fe(o,w,h.get(u))])));let g=n.energy.battery?n.floors.flatMap(u=>u.placements.filter(w=>w.entity_id===n.energy.battery).map(w=>({floorId:u.id,x:w.x,z:w.z})))[0]:null;t.setFlows(this.flows??this._flows?Fn({building:n,consumers:s,summary:c,battery:g??null}).map(u=>({floorId:u.floorId,a:u.a,b:u.b,dist:u.dist,power:u.power,color:Dn(u.kind,c)})):[]);let p=Un(o,n);t.setPersons(p);let f=Kn(o,n,this.openingLinks,p);t.setFloorInfo(new Map([...f].map(([u,w])=>[u,Gn(o,w)])));let b=o.states["sun.sun"]?.attributes,y=typeof b?.elevation=="number"?b.elevation:null;if(t.setSun(y!==null&&typeof b?.azimuth=="number"?{elevation:y,azimuth:b.azimuth}:null),this._sky=y===null?0:Math.min(1,Math.max(0,(y+4)/16)),this.heatMode==="none")t.setRoomTint(null);else{let u=this.heatMode,w=Bn(o,n,u);this.heatValues=w,t.setRoomTint(new Map([...w].map(([M,x])=>[M,Ln(u,x)])))}let v=c.grid!==null||c.solar!==null||c.battery!==null||c.tariff!==null;this._energy=v?c:null}furnitureMarkers(e,t,n,o){let i=[],s=[],a=new Map,l=new Map;for(let c of t.floors)for(let d of c.furniture){let h=this.furnitureLinks.get(d.id);if(tn(d.type)){i.push(this.lampMarker(e,c,d,h?.entity??null));continue}if(!h)continue;l.set(d.id,h.entity??h.power);let g=h.entity??h.power,p=h.entity?e.states[h.entity]:void 0,f=h.power?ae(e.states[h.power]):null;h.power&&f!==null&&!o.has(h.power)&&(o.add(h.power),s.push({id:g,powerEntity:h.power,floorId:c.id,x:d.x,z:d.z,power:Math.max(0,f)}));let b=(f??0)>10||p?.state==="on"||p?.state==="running";if(d.type==="radiator"&&p&&$(p.entity_id)==="climate"){let u=p.attributes;if(u.hvac_action==="heating"){let w=typeof u.temperature=="number"&&typeof u.current_temperature=="number"?u.temperature-u.current_temperature:1;a.set(d.id,{color:[1,.42,.1],level:Math.min(1,.45+.25*Math.max(0,w))})}}else(d.type==="washer"||d.type==="dryer"||d.type==="dishwasher")&&b&&a.set(d.id,{color:[.3,.85,1],level:.8});if(p&&(d.type==="tv_board"||d.type==="tv_wall"||d.type==="desk")){let u=$(p.entity_id)==="media"?wn(p):oe(p)?[.22,.88,1]:null,w=$(p.entity_id)==="media"?p.attributes.entity_picture??null:null;u&&a.set(d.id,{color:u,level:p.state==="playing"?1:.6,picture:w})}if(n.has(g))continue;n.add(g);let y=h.entity?$(h.entity):null,v=c.rooms.find(u=>u.points.length>=3&&P([d.x,d.z],u.points));i.push({id:g,floorId:c.id,roomId:v?.id??null,x:d.x,z:d.z,y:oo(d),icon:we(y??"switch"),name:h.entity?B(e,h.entity):Se(e,d.type),text:p?C(e,p):f!==null?de(e,Math.max(0,f)):"",active:p?oe(p):(f??0)>5,unavailable:p?z(p):!1,glow:null,fromFurniture:!0})}return{markers:i,consumers:s,screens:a,targets:l}}lampMarker(e,t,n,o){let i=o?e.states[o]:void 0,s=ro[n.type],a=s==="table"?nn(t,n.x,n.z):s==="bollard"||s==="garden"?Jt(t,n.x,n.z):0,l=t.rooms.find(h=>h.points.length>=3&&P([n.x,n.z],h.points)),c=t.height,d={ceiling:c-.3,downlight:c-.25,spot:c-.35,panel:c-.25,pendant:Math.max(.6,c-n.h-.25),floor:n.h+.25,uplight:n.h+.25,table:a+n.h+.2,wall:2.1,strip:c-.25,bollard:a+n.h+.25,garden:a+n.h+.25}[s];return{id:o??`lamp:${n.id}`,floorId:t.id,roomId:l?.id??null,x:n.x,z:n.z,y:d,icon:we("light"),name:o?B(e,o):Se(e,n.type),text:i?C(e,i):"",active:i?oe(i):!1,unavailable:i?z(i):!1,glow:i?He(i):null,lamp:s,rotation:n.rotation,size:[n.w,n.d,n.h],base:a,pickable:!!o,furnitureId:n.id,effect:!!i&&i.state==="on"&&typeof i.attributes.effect=="string"&&!/^(none|off|solid|static|normal)$/i.test(i.attributes.effect),variant:n.variant,fromFurniture:!0}}showPin(e){if(this.markerMode==="none")return!1;if(this.markerMode==="all")return!0;if(e.lamp)return!1;let t=$(e.id);return t==="light"?!1:e.fromFurniture?(e.power??0)>=1||t==="media"&&e.active:!0}openingTargets(){let e=new Map;for(let[t,n]of this.openingLinks??[]){let o=n.cover??n.contact??n.tilt;o&&e.set(t,o)}return e}onDeviceTap(e){let t=$(e);t&&_n.has(t)?En(this.hass,e):ie(this,e)}resetView(){this.viewer?.resetView()}fire(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}toggleFlows(){this._flows=!this._flows;try{localStorage.setItem("floorplan_3d.flows",this._flows?"1":"0")}catch{}this.syncDevices(!0)}renderEnergy(){let e=this._energy;if(!e||this.roomId||!this.showEnergy)return _;let t=o=>k(this.hass,o),n=[];if(e.consumption!==null&&n.push({cls:"total",label:t("energy_consumption"),value:de(this.hass,e.consumption)}),e.grid!==null){let o=e.grid<0;n.push({cls:o?"export":"grid",label:t(o?"energy_grid_export":"energy_grid_import"),value:de(this.hass,Math.abs(e.grid))})}if(e.solar!==null&&n.push({cls:"solar",label:t("energy_solar"),value:de(this.hass,e.solar)}),e.battery!==null||e.soc!==null){let o=[e.battery!==null?de(this.hass,Math.abs(e.battery)):null,e.soc!==null?`${Math.round(e.soc)} %`:null].filter(Boolean);n.push({cls:"battery",label:t("energy_battery"),value:o.join(" \xB7 ")})}return e.tariff&&n.push({cls:"tariff",label:t("energy_tariff"),value:`${F(this.hass,e.tariff.value,3)} ${e.tariff.unit}`.trim()}),m`<div class="fp3d-energy" aria-live="off">
      ${n.map(o=>m`<div class="fp3d-energy-item fp3d-energy-${o.cls}"><span>${o.label}</span><b>${o.value}</b></div>`)}
      ${this.flows!==null?_:m`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._flows} title=${`${t("flows_hint")} (${t(this._flows?"flow_on":"flow_off")})`} aria-label=${t("flows")} @click=${()=>this.toggleFlows()}>
        <span>${t("flows")}</span><b>⚡</b>
      </button>`}
    </div>`}renderLegend(){if(this.heatMode==="none")return _;let e=Me[this.heatMode],t=e.stops[0][0],n=e.stops[e.stops.length-1][0],o=i=>k(this.hass,i);return m`<div class="fp3d-legend">
      <b>${o(`heat_${this.heatMode}`)}</b>
      <span class="fp3d-legend-bar" style="background:${Nn(this.heatMode)}"></span>
      <span class="fp3d-legend-range"><span>${F(this.hass,t,0)} ${e.unit}</span><span>${F(this.hass,n,0)} ${e.unit}</span></span>
      ${this.heatValues.size?_:m`<span class="fp3d-legend-none">${o("heat_none_found")}</span>`}
    </div>`}render(){let e=this._sky,t=(i,s)=>`rgb(${i.map((a,l)=>Math.round(a+(s[l]-a)*e)).join(",")})`,n=yt[this.theme]??yt.neon,o=`--fp3d-sky:${t(n.night[0],n.day[0])};--fp3d-ground:${t(n.night[1],n.day[1])}`;return m`<div class="fp3d-stage" style=${o}>
      ${this._error?m`<p class="fp3d-error">${this._error}</p>`:_} ${this.renderEnergy()} ${this.renderLegend()}
      ${this.showStats&&this._stats?m`<span class="fp3d-stats"
            ><b>${this._stats.fps?k(this.hass,"stats_fps",{fps:this._stats.fps,ms:this._stats.worstMs}):k(this.hass,"stats_idle")}</b> ·
            ${k(this.hass,"stats",{calls:this._stats.calls,tris:this._stats.triangles.toLocaleString()})} ·
            ${k(this.hass,this._stats.low?"stats_low":"stats_full",{r:F(this.hass,this._stats.pixelRatio,2)})}</span
          >`:_}
    </div>`}static styles=[j,I`
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
    `]};customElements.get("fp3d-view3d")||customElements.define("fp3d-view3d",wt);function de(r,e){return Math.abs(e)>=1e3?`${F(r,e/1e3,1)} kW`:`${Math.round(e)} W`}function oo(r){return r.type==="tv_board"?r.h+.9:r.type==="tv_wall"?1.3+r.h/2+.25:r.type==="kitchen_wall"?1.45+r.h+.25:r.h+.35}W();var io=.25,jn=r=>Math.round(r*1e3)/1e3;function qn(r,e,t,n=io){let o=r.rooms.find(c=>c.points.length>=3&&P([e.x,e.z],c.points));if(!o)return null;let i=o.points,s=K(i)>=0?1:-1,a=t/2,l=null;for(let c=0;c<i.length;c++){let d=i[c],h=i[(c+1)%i.length],g=Math.hypot(h[0]-d[0],h[1]-d[1]);if(g<.3)continue;let p=[(h[0]-d[0])/g,(h[1]-d[1])/g],f=[-p[1]*s,p[0]*s],b=(e.x-d[0])*p[0]+(e.z-d[1])*p[1];if(b<0||b>g)continue;let v=r.rooms.some(A=>A.id!==o.id&&A.points.some((L,ce)=>{let R=A.points[(ce+1)%A.points.length],pe=Math.abs((L[0]-d[0])*f[0]+(L[1]-d[1])*f[1]),ue=Math.abs((R[0]-d[0])*f[0]+(R[1]-d[1])*f[1]);return pe<.02&&ue<.02}))?a:0,u=(e.x-d[0])*f[0]+(e.z-d[1])*f[1]-v,w=Math.atan2(-f[0],f[1])*180/Math.PI,M=A=>Math.abs((e.rotation-A+540)%360-180),S=[{rotation:w,extent:e.d/2},{rotation:w+90,extent:e.w/2},{rotation:w-90,extent:e.w/2}].reduce((A,L)=>M(L.rotation)<M(A.rotation)?L:A);if(M(S.rotation)>50)continue;let E=u-S.extent;Math.abs(E)>n||l&&Math.abs(E)>=Math.abs(l.gap)||(l={x:jn(e.x-f[0]*E),z:jn(e.z-f[1]*E),rotation:(Math.round(S.rotation)%360+360)%360,gap:E})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}var D={get(r){try{return localStorage.getItem(`floorplan_3d.${r}`)}catch{return null}},set(r,e){try{localStorage.setItem(`floorplan_3d.${r}`,e)}catch{}}},xt=class extends T{static properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_mode:{state:!0},_editorReady:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_wallMode:{state:!0},_explode:{state:!0},_quality:{state:!0},_stats:{state:!0},_markers:{state:!0},_heat:{state:!0},_theme:{state:!0},_furnish:{state:!0},_selFurniture:{state:!0}};data=new re(this);constructor(){super(),this.narrow=!1,this._mode="view",this._editorReady=!!customElements.get("fp3d-editor"),this._floorId=null,this._roomId=null,this._wallMode="auto",this._explode=D.get("explode")!=="0";let e=D.get("quality");this._quality=e==="low"||e==="high"?e:"auto",this._stats=D.get("stats")==="1"||new URLSearchParams(location.search).has("fp3d_stats");let t=D.get("markers");this._markers=t==="none"||t==="all"?t:"important";let n=D.get("heat");this._heat=n==="temperature"||n==="humidity"||n==="co2"?n:"none";let o=D.get("theme");this._theme=o&&vt.includes(o)?o:"neon",this._furnish=!1,this._selFurniture=null}t(e,t){return k(this.hass,e,t)}willUpdate(e){e.has("hass")&&this.hass&&this.data.setHass(this.hass);let t=this.data.building;t&&this._floorId&&!t.floors.some(n=>n.id===this._floorId)&&(this._floorId=null,this._roomId=null)}get isAdmin(){return this.hass?.user?.is_admin??!1}setMode(e){e!==this._mode&&(e==="view"&&this.data.flush(),this._mode=e)}onRoomTap(e){let{floorId:t,roomId:n}=e.detail;n&&(this._floorId===null&&(this.data.building?.floors.length??0)>1&&(this._floorId=t),this._roomId=n===this._roomId?null:n)}setExplode(e){this._explode=e,D.set("explode",e?"1":"0")}setQuality(e){this._quality=e,D.set("quality",e)}editFurniture(e,t){let n=this.data.building;if(!n)return;let o=structuredClone(n);for(let i of o.floors){let s=i.furniture.find(a=>a.id===e);s&&t(s,i)}this.data.edit(o)}furnitureName(e){let t=this.data.building?.floors.flatMap(n=>n.furniture).find(n=>n.id===e);return t?Se(this.hass,t.type):""}moveFurniture(e){let{id:t,x:n,z:o}=e.detail,i=this.data.building?.settings.wall_interior??.12;this.editFurniture(t,(s,a)=>{Object.assign(s,{x:n,z:o});let l=qn(a,s,i);l&&Object.assign(s,l)})}renderSizeFields(e){let t=this.data.building?.floors.flatMap(o=>o.furniture).find(o=>o.id===e);if(!t)return _;let n=(o,i)=>m`<label class="fp3d-size" title=${this.t(`size_${o}`)}
      >${i}
      <input
        type="number"
        inputmode="decimal"
        step="0.05"
        min="0.05"
        .value=${String(Math.round(t[o]*100)/100)}
        @change=${s=>{let a=parseFloat(s.target.value.replace(",","."));Number.isFinite(a)&&a>0&&this.editFurniture(e,l=>l[o]=Math.round(a*1e3)/1e3)}}
    /></label>`;return m`${n("w","B")}${n("d","T")}${n("h","H")}`}turnFurniture(e){this._selFurniture&&this.editFurniture(this._selFurniture,t=>t.rotation=((t.rotation+e)%360+360)%360)}deleteFurniture(){let e=this._selFurniture,t=this.data.building;if(!e||!t)return;let n=structuredClone(t);for(let o of n.floors)o.furniture=o.furniture.filter(i=>i.id!==e);this.data.edit(n),this._selFurniture=null}back(){this._roomId?this._roomId=null:this._floorId&&(this.data.building?.floors.length??0)>1?this._floorId=null:this.renderRoot.querySelector("fp3d-view3d")?.resetView()}onKey=e=>{e.key==="Escape"&&this._mode==="view"&&this.back()};connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey)}render(){let e=this.data.building,t=this.data.saveState;return m`
      <div class="fp3d-app">
        <header class="fp3d-header">
          <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
          <h1>Floorplan 3D</h1>
          ${this.isAdmin?m`<div class="fp3d-seg" role="tablist">
                <button role="tab" aria-pressed=${this._mode==="view"} @click=${()=>this.setMode("view")}>${this.t("view")}</button>
                <button role="tab" aria-pressed=${this._mode==="editor"} @click=${()=>this.setMode("editor")}>${this.t("editor")}</button>
              </div>`:_}
          <span class="fp3d-grow"></span>
          ${this._mode==="view"&&e?.floors.some(n=>n.rooms.length)?m`<div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("quality")}>
                ${["auto","low","high"].map(n=>m`<button aria-pressed=${this._quality===n} @click=${()=>this.setQuality(n)}>${this.t(`quality_${n}`)}</button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("theme")}>
                ${vt.map(n=>m`<button
                      aria-pressed=${this._theme===n}
                      @click=${()=>{this._theme=n,D.set("theme",n)}}
                    >
                      ${this.t(`theme_${n}`)}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("markers")}>
                ${["none","important","all"].map(n=>m`<button
                      aria-pressed=${this._markers===n}
                      title=${this.t("markers")}
                      @click=${()=>{this._markers=n,D.set("markers",n)}}
                    >
                      ${this.t(`markers_${n}`)}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality">
                <button
                  aria-pressed=${this._stats}
                  title=${this.t("fps_title")}
                  @click=${()=>{this._stats=!this._stats,D.set("stats",this._stats?"1":"0")}}
                >
                  ${this.t("fps")}
                </button>
              </div>`:_}
          ${this._mode==="editor"&&t!=="idle"?m`<span class="fp3d-save fp3d-save-${t}">${this.t(t==="saving"?"saving":t==="saved"?"saved":"save_error")}</span>`:_}
        </header>
        ${this.renderNotices()}
        ${this.data.error&&!e?m`<p class="fp3d-message">${this.t("load_error")}: ${this.data.error}</p>`:_}
        ${!e&&!this.data.error?m`<p class="fp3d-message">${this.t("loading")}</p>`:_}
        ${e?this._mode==="editor"&&this.isAdmin?this.renderEditor(e):this.renderView(e):_}
      </div>
    `}renderNotices(){let e=this.data,t=[];if(e.needsRestart&&t.push(m`<div class="fp3d-notice fp3d-notice-warn">${e.backendVersion?this.t("needs_restart",{version:e.backendVersion}):this.t("needs_restart_old")}</div>`),e.saveState==="error"&&e.saveError&&t.push(m`<div class="fp3d-notice fp3d-notice-error">${this.t("save_failed_detail",{error:e.saveError})}</div>`),e.draft&&this.isAdmin){let n=new Date(e.draft.savedAt).toLocaleString(this.hass?.language);t.push(m`<div class="fp3d-notice">
          <span>${this.t("draft_found",{time:n})}</span>
          <button class="fp3d-btn fp3d-primary" @click=${()=>e.restoreDraft()}>${this.t("draft_restore")}</button>
          <button class="fp3d-btn" @click=${()=>e.discardDraft()}>${this.t("draft_discard")}</button>
        </div>`)}return t.length?m`<div class="fp3d-notices">${t}</div>`:_}renderEditor(e){return this._editorReady?m`<fp3d-editor
      class="fp3d-body"
      .hass=${this.hass}
      .building=${e}
      .narrow=${this.narrow}
      .packs=${this.data.packs}
      @packs-changed=${()=>{this.data.reloadPacks()}}
      @building-changed=${t=>this.data.edit(t.detail.building)}
    ></fp3d-editor>`:(fn().then(()=>this._editorReady=!0,t=>this.data.error=String(t)),m`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}renderView(e){if(!e.floors.length||!e.floors.some(o=>o.rooms.length))return m`<div class="fp3d-empty">
        <p>${this.t(this.isAdmin?"no_building_admin":"no_building")}</p>
        ${this.isAdmin?m`<button class="fp3d-btn fp3d-primary" @click=${()=>this.setMode("editor")}>${this.t("open_editor")}</button>`:_}
      </div>`;let t=e.floors.find(o=>o.id===this._floorId),n=t?[t]:e.floors;return m`
      <nav class="fp3d-nav">
        ${e.floors.length>1?m`<button class="fp3d-chip" aria-pressed=${this._floorId===null} @click=${()=>{this._floorId=null,this._roomId=null}}>
                ${this.t("all_floors")}
              </button>
              ${[...e.floors].reverse().map(o=>m`<button
                  class="fp3d-chip"
                  aria-pressed=${o.id===this._floorId}
                  @click=${()=>{this._floorId=o.id,this._roomId=null}}
                >
                  ${o.name}
                </button>`)}
              <span class="fp3d-sep"></span>`:_}
        ${n.flatMap(o=>o.rooms.map(i=>m`<button
              class="fp3d-chip fp3d-room-chip"
              aria-pressed=${i.id===this._roomId}
              @click=${()=>{e.floors.length>1&&(this._floorId=o.id),this._roomId=i.id===this._roomId?null:i.id}}
            >
              ${i.name}
            </button>`))}
      </nav>
      <div class="fp3d-stage-wrap">
        <fp3d-view3d
          class="fp3d-body"
          .hass=${this.hass}
          .building=${e}
          .packs=${this.data.packs}
          .floorId=${e.floors.length>1?this._floorId:e.floors[0]?.id??null}
          .roomId=${this._roomId}
          .wallMode=${this._wallMode}
          .explode=${this._explode}
          .markerMode=${this._markers}
          .heatMode=${this._heat}
          .theme=${this._theme}
          ?furnish=${this._furnish}
          .selectedFurniture=${this._selFurniture}
          @furniture-select=${o=>this._selFurniture=o.detail.id}
          @furniture-move=${this.moveFurniture}
          .quality=${this._quality}
          ?showStats=${this._stats}
          @room-tap=${this.onRoomTap}
          @floor-tap=${o=>{this._floorId=o.detail.floorId,this._roomId=null}}
          @back=${()=>this.back()}
        ></fp3d-view3d>
        ${this._roomId?m`<fp3d-room-panel
              class="fp3d-room-panel"
              .hass=${this.hass}
              .room=${e.floors.flatMap(o=>o.rooms).find(o=>o.id===this._roomId)??null}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:_}
        <div class="fp3d-overlay">
          <div class="fp3d-seg">
            <button aria-pressed=${this._wallMode==="auto"} @click=${()=>this._wallMode="auto"}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wallMode==="cut"} @click=${()=>this._wallMode="cut"}>${this.t("walls_cut")}</button>
          </div>
          ${e.floors.length>1&&!this._floorId?m`<div class="fp3d-seg">
                <button aria-pressed=${this._explode} @click=${()=>this.setExplode(!0)}>${this.t("floors_apart")}</button>
                <button aria-pressed=${!this._explode} @click=${()=>this.setExplode(!1)}>${this.t("floors_stacked")}</button>
              </div>`:_}
          <div class="fp3d-seg" role="group" aria-label=${this.t("heatmap")}>
            ${["none","temperature","humidity","co2"].map(o=>m`<button
                  aria-pressed=${this._heat===o}
                  @click=${()=>{this._heat=o,D.set("heat",o)}}
                >
                  ${this.t(o==="none"?"heat_off":`heat_short_${o}`)}
                </button>`)}
          </div>
          ${this.isAdmin?m`<button
                class="fp3d-chip ${this._furnish?"fp3d-chip-on":""}"
                aria-pressed=${this._furnish}
                title=${this.t("furnish_hint")}
                @click=${()=>{this._furnish=!this._furnish,this._selFurniture=null}}
              >
                ${this.t("furnish")}
              </button>`:_}
          ${this._roomId||this._floorId&&e.floors.length>1?m`<button class="fp3d-chip" @click=${()=>this.back()}>${this.t("back")}</button>`:_}
        </div>
        ${this._furnish?m`<div class="fp3d-furnish-bar">
              ${this._selFurniture?m`<span>${this.furnitureName(this._selFurniture)}</span>
                    ${this.renderSizeFields(this._selFurniture)}
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(-45)}>↺ 45°</button>
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(45)}>↻ 45°</button>
                    <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>`:m`<span>${this.t("furnish_hint")}</span>`}
              <button class="fp3d-chip fp3d-chip-on" @click=${()=>(this._furnish=!1,this._selFurniture=null)}>${this.t("done")}</button>
            </div>`:_}
      </div>
    `}static styles=[j,Le,I`
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
    `]};customElements.get("floorplan-3d-panel")||customElements.define("floorplan-3d-panel",xt);J();W();var kt=class extends T{static properties={hass:{attribute:!1},_config:{state:!0},_roomId:{state:!0},_floorId:{state:!0}};data=new re(this);constructor(){super(),this._roomId=null,this._floorId=null}static async getConfigElement(){return await Promise.resolve().then(()=>(Qn(),Yn)),document.createElement("floorplan-3d-card-editor")}static getStubConfig(){return{type:"custom:floorplan-3d-card"}}setConfig(e){if(e.height!==void 0&&!(e.height>100))throw new Error("height must be a number of pixels above 100");this._config=e}getCardSize(){return Math.ceil((this._config?.height??420)/50)}getGridOptions(){return{columns:"full",rows:Math.ceil((this._config?.height??420)/56),min_rows:4}}willUpdate(e){e.has("hass")&&this.hass&&this.data.setHass(this.hass)}back(){this._roomId?this._roomId=null:this._config?.floor||(this._floorId=null)}render(){let e=this.data.building,t=this._config?.height??420,n=this._config?.floor??(e&&e.floors.length===1?e.floors[0].id:e?.floors.some(i=>i.id===this._floorId)?this._floorId:null),o=!!this._roomId||!this._config?.floor&&!!this._floorId&&(e?.floors.length??0)>1;return m`<ha-card>
      <div class="fp3d-card-body" style="height:${t}px">
        ${e&&e.floors.some(i=>i.rooms.length)?m`<fp3d-view3d
              .hass=${this.hass}
              .building=${e}
              .packs=${this.data.packs}
              .floorId=${n}
              .roomId=${this._roomId}
              .wallMode=${this._config?.walls??"auto"}
              .explode=${this._config?.explode??!0}
              .quality=${this._config?.quality??"auto"}
              ?showStats=${this._config?.stats??!1}
              .markerMode=${this._config?.markers??"important"}
              .heatMode=${this._config?.heatmap??"none"}
              .theme=${this._config?.theme??"neon"}
              .showEnergy=${this._config?.energy??!0}
              .flows=${this._config?.flows??null}
              @room-tap=${i=>{i.detail.roomId&&(!n&&!this._config?.floor&&(this._floorId=i.detail.floorId),this._roomId=i.detail.roomId===this._roomId?null:i.detail.roomId)}}
              @floor-tap=${i=>{this._floorId=i.detail.floorId,this._roomId=null}}
              @back=${()=>this.back()}
            ></fp3d-view3d>`:m`<p class="fp3d-card-msg">${this.data.error??(e?k(this.hass,"no_building"):k(this.hass,"loading"))}</p>`}
        ${this._roomId&&e&&this._config?.room_panel!==!1?m`<fp3d-room-panel
              class="fp3d-card-panel"
              .hass=${this.hass}
              .room=${e.floors.flatMap(i=>i.rooms).find(i=>i.id===this._roomId)??null}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:_}
        ${o?m`<button class="fp3d-card-back" @click=${()=>this.back()}>${k(this.hass,"back")}</button>`:_}
      </div>
    </ha-card>`}static styles=[j,I`
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
    `]};if(!customElements.get("floorplan-3d-card")){customElements.define("floorplan-3d-card",kt);let r=window;r.customCards=r.customCards??[],r.customCards.push({type:"floorplan-3d-card",name:k(void 0,"card_name"),description:k(void 0,"card_description"),preview:!1})}At();
