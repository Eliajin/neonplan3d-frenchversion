var $e=globalThis,xe=$e.ShadowRoot&&($e.ShadyCSS===void 0||$e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Te=Symbol(),ot=new WeakMap,de=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Te)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(xe&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=ot.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ot.set(t,e))}return e}toString(){return this.cssText}},at=o=>new de(typeof o=="string"?o:o+"",void 0,Te),ie=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((n,i,r)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[r+1],o[0]);return new de(t,o,Te)},lt=(o,e)=>{if(xe)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),i=$e.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,o.appendChild(n)}},Oe=xe?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return at(t)})(o):o;var{is:zn,defineProperty:En,getOwnPropertyDescriptor:An,getOwnPropertyNames:Rn,getOwnPropertySymbols:Pn,getPrototypeOf:In}=Object,Me=globalThis,ct=Me.trustedTypes,Fn=ct?ct.emptyScript:"",Tn=Me.reactiveElementPolyfillSupport,he=(o,e)=>o,De={toAttribute(o,e){switch(e){case Boolean:o=o?Fn:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},ht=(o,e)=>!zn(o,e),dt={attribute:!0,type:String,converter:De,reflect:!1,useDefault:!1,hasChanged:ht};Symbol.metadata??=Symbol("metadata"),Me.litPropertyMetadata??=new WeakMap;var N=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=dt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(e,n,t);i!==void 0&&En(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){let{get:i,set:r}=An(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:i,set(s){let a=i?.call(this);r?.call(this,s),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??dt}static _$Ei(){if(this.hasOwnProperty(he("elementProperties")))return;let e=In(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(he("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(he("properties"))){let t=this.properties,n=[...Rn(t),...Pn(t)];for(let i of n)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,i]of t)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let i=this._$Eu(t,n);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let i of n)t.unshift(Oe(i))}else e!==void 0&&t.push(Oe(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return lt(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){let r=(n.converter?.toAttribute!==void 0?n.converter:De).toAttribute(t,n.type);this._$Em=e,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){let n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let r=n.getPropertyOptions(i),s=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:De;this._$Em=i;let a=s.fromAttribute(t,r.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(e,t,n,i=!1,r){if(e!==void 0){let s=this.constructor;if(i===!1&&(r=this[e]),n??=s.getPropertyOptions(e),!((n.hasChanged??ht)(r,t)||n.useDefault&&n.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:i,wrapped:r},s){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),r!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[i,r]of n){let{wrapped:s}=r,a=this[i];s!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,r,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};N.elementStyles=[],N.shadowRootOptions={mode:"open"},N[he("elementProperties")]=new Map,N[he("finalized")]=new Map,Tn?.({ReactiveElement:N}),(Me.reactiveElementVersions??=[]).push("2.1.2");var Ne=globalThis,pt=o=>o,Se=Ne.trustedTypes,ut=Se?Se.createPolicy("lit-html",{createHTML:o=>o}):void 0,vt="$lit$",K=`lit$${Math.random().toFixed(9).slice(2)}$`,yt="?"+K,On=`<${yt}>`,Q=document,ue=()=>Q.createComment(""),fe=o=>o===null||typeof o!="object"&&typeof o!="function",Ue=Array.isArray,Dn=o=>Ue(o)||typeof o?.[Symbol.iterator]=="function",Le=`[ 	
\f\r]`,pe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ft=/-->/g,mt=/>/g,Y=RegExp(`>|${Le}(?:([^\\s"'>=/]+)(${Le}*=${Le}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gt=/'/g,_t=/"/g,wt=/^(?:script|style|textarea|title)$/i,Ke=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),v=Ke(1),k=Ke(2),zi=Ke(3),X=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),bt=new WeakMap,J=Q.createTreeWalker(Q,129);function kt(o,e){if(!Ue(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return ut!==void 0?ut.createHTML(e):e}var Ln=(o,e)=>{let t=o.length-1,n=[],i,r=e===2?"<svg>":e===3?"<math>":"",s=pe;for(let a=0;a<t;a++){let l=o[a],d,h,p=-1,f=0;for(;f<l.length&&(s.lastIndex=f,h=s.exec(l),h!==null);)f=s.lastIndex,s===pe?h[1]==="!--"?s=ft:h[1]!==void 0?s=mt:h[2]!==void 0?(wt.test(h[2])&&(i=RegExp("</"+h[2],"g")),s=Y):h[3]!==void 0&&(s=Y):s===Y?h[0]===">"?(s=i??pe,p=-1):h[1]===void 0?p=-2:(p=s.lastIndex-h[2].length,d=h[1],s=h[3]===void 0?Y:h[3]==='"'?_t:gt):s===_t||s===gt?s=Y:s===ft||s===mt?s=pe:(s=Y,i=void 0);let u=s===Y&&o[a+1].startsWith("/>")?" ":"";r+=s===pe?l+On:p>=0?(n.push(d),l.slice(0,p)+vt+l.slice(p)+K+u):l+K+(p===-2?a:u)}return[kt(o,r+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},me=class o{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let r=0,s=0,a=e.length-1,l=this.parts,[d,h]=Ln(e,t);if(this.el=o.createElement(d,n),J.currentNode=this.el.content,t===2||t===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=J.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let p of i.getAttributeNames())if(p.endsWith(vt)){let f=h[s++],u=i.getAttribute(p).split(K),c=/([.?@])?(.*)/.exec(f);l.push({type:1,index:r,name:c[2],strings:u,ctor:c[1]==="."?Ce:c[1]==="?"?Ve:c[1]==="@"?We:se}),i.removeAttribute(p)}else p.startsWith(K)&&(l.push({type:6,index:r}),i.removeAttribute(p));if(wt.test(i.tagName)){let p=i.textContent.split(K),f=p.length-1;if(f>0){i.textContent=Se?Se.emptyScript:"";for(let u=0;u<f;u++)i.append(p[u],ue()),J.nextNode(),l.push({type:2,index:++r});i.append(p[f],ue())}}}else if(i.nodeType===8)if(i.data===yt)l.push({type:2,index:r});else{let p=-1;for(;(p=i.data.indexOf(K,p+1))!==-1;)l.push({type:7,index:r}),p+=K.length-1}r++}}static createElement(e,t){let n=Q.createElement("template");return n.innerHTML=e,n}};function re(o,e,t=o,n){if(e===X)return e;let i=n!==void 0?t._$Co?.[n]:t._$Cl,r=fe(e)?void 0:e._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(o),i._$AT(o,t,n)),n!==void 0?(t._$Co??=[])[n]=i:t._$Cl=i),i!==void 0&&(e=re(o,i._$AS(o,e.values),i,n)),e}var He=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,i=(e?.creationScope??Q).importNode(t,!0);J.currentNode=i;let r=J.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let d;l.type===2?d=new ge(r,r.nextSibling,this,e):l.type===1?d=new l.ctor(r,l.name,l.strings,this,e):l.type===6&&(d=new Be(r,this,e)),this._$AV.push(d),l=n[++a]}s!==l?.index&&(r=J.nextNode(),s++)}return J.currentNode=Q,i}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},ge=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,i){this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=re(this,e,t),fe(e)?e===b||e==null||e===""?(this._$AH!==b&&this._$AR(),this._$AH=b):e!==this._$AH&&e!==X&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Dn(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==b&&fe(this._$AH)?this._$AA.nextSibling.data=e:this.T(Q.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=me.createElement(kt(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(t);else{let r=new He(i,this),s=r.u(this.options);r.p(t),this.T(s),this._$AH=r}}_$AC(e){let t=bt.get(e.strings);return t===void 0&&bt.set(e.strings,t=new me(e)),t}k(e){Ue(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,i=0;for(let r of e)i===t.length?t.push(n=new o(this.O(ue()),this.O(ue()),this,this.options)):n=t[i],n._$AI(r),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=pt(e).nextSibling;pt(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},se=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,r){this.type=1,this._$AH=b,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=b}_$AI(e,t=this,n,i){let r=this.strings,s=!1;if(r===void 0)e=re(this,e,t,0),s=!fe(e)||e!==this._$AH&&e!==X,s&&(this._$AH=e);else{let a=e,l,d;for(e=r[0],l=0;l<r.length-1;l++)d=re(this,a[n+l],t,l),d===X&&(d=this._$AH[l]),s||=!fe(d)||d!==this._$AH[l],d===b?e=b:e!==b&&(e+=(d??"")+r[l+1]),this._$AH[l]=d}s&&!i&&this.j(e)}j(e){e===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ce=class extends se{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===b?void 0:e}},Ve=class extends se{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==b)}},We=class extends se{constructor(e,t,n,i,r){super(e,t,n,i,r),this.type=5}_$AI(e,t=this){if((e=re(this,e,t,0)??b)===X)return;let n=this._$AH,i=e===b&&n!==b||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==b&&(n===b||i);i&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Be=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){re(this,e)}};var Hn=Ne.litHtmlPolyfillSupport;Hn?.(me,ge),(Ne.litHtmlVersions??=[]).push("3.3.3");var $t=(o,e,t)=>{let n=t?.renderBefore??e,i=n._$litPart$;if(i===void 0){let r=t?.renderBefore??null;n._$litPart$=i=new ge(e.insertBefore(ue(),r),r,void 0,t??{})}return i._$AI(o),i};var Ge=globalThis,G=class extends N{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=$t(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return X}};G._$litElement$=!0,G.finalized=!0,Ge.litElementHydrateSupport?.({LitElement:G});var Cn=Ge.litElementPolyfillSupport;Cn?.({LitElement:G});(Ge.litElementVersions??=[]).push("4.2.2");async function xt(o,e){return(await o.callWS({type:"floorplan_3d/image/get",image_id:e})).data}async function Mt(o,e,t){await o.callWS({type:"floorplan_3d/image/set",image_id:e,data:t})}async function St(o){return(await o.callWS({type:"floorplan_3d/history/list"})).snapshots}async function zt(o){await o.callWS({type:"floorplan_3d/history/snapshot"})}async function Et(o,e){return(await o.callWS({type:"floorplan_3d/history/restore",snapshot_id:e})).revision}async function At(o,e){return o.callWS({type:"floorplan_3d/packs/import",pack:e})}async function Rt(o,e){await o.callWS({type:"floorplan_3d/packs/remove",pack_id:e})}var Vn=[],Pt=new Map,Wn=0;function It(o){Vn=o,Pt=new Map(o.flatMap(e=>e.items.map(t=>[ze(e.id,t.id),t]))),Wn++}function ze(o,e){return`pack:${o}:${e}`}function je(o){return o.startsWith("pack:")}function j(o){return je(o)?Pt.get(o):void 0}function Ze(o){return B[o]??j(o)?.size??[.6,.6,.8]}function Ft(o){return Tt.has(o)||!!j(o)?.electric}function _e(o,e){let t=e.split("-")[0];return o.name[t]??o.name.en??Object.values(o.name)[0]??o.id}var Ot=["lawn","terrace","path","driveway","pool","bed","hedge","fence"];var Bn={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,tariff:null},Dt=["wood","oak","tiles","carpet","stone","concrete"],Lt={type:"none",pitch:35,overhang:.4},Nn={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Lt}};function Ht(o,e,t){return{id:o,name:e,elevation:t,height:2.5,cut_height:1.15,rooms:[],openings:[],furniture:[],placements:[],background:null,outdoor:[],ha_floor:null}}var Un=2.75;function Ct(o,e){if(e!=null&&Number.isFinite(e))return Math.round(e*Un*100)/100;let t=o.reduce((n,i)=>!n||i.elevation>n.elevation?i:n,null);return t?Math.round((t.elevation+t.height+.25)*100)/100:0}function Vt(o,e,t){let n=o.rooms.flatMap(a=>a.points.map(l=>l[0])),i=o.rooms.flatMap(a=>a.points.map(l=>l[1])),r=n.length?Math.ceil(Math.max(...n))+1:0,s=i.length?Math.floor(Math.min(...i)):0;return e.map((a,l)=>{let d=r+l%3*4.5,h=s+Math.floor(l/3)*3.5;return{id:t(),name:a.name,area_id:a.area_id,points:[[d,h],[d+4,h],[d+4,h+3],[d,h+3]],floor_material:"wood"}})}function Wt(o,e,t,n){let i=o.rotation*Math.PI/180,r=Math.cos(i),s=Math.sin(i),[a,l]=e,d=o.x-a*(o.w/2)*r+l*(o.d/2)*s,h=o.z-a*(o.w/2)*s-l*(o.d/2)*r,p=t[0]-d,f=t[1]-h,u=y=>Math.max(.1,Math.round(y/n)*n),c=u((p*r+f*s)*a),m=u((-p*s+f*r)*l),g=y=>Math.round(y*1e3)/1e3;return{x:g(d+a*(c/2)*r-l*(m/2)*s),z:g(h+a*(c/2)*s+l*(m/2)*r),w:g(c),d:g(m)}}var Bt=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_table","lamp_wall","led_strip","lamp_uplight","lamp_bollard","lamp_garden","radiator","sofa","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug","table","table_round","chair","bench","corner_bench","bar_stool","kitchen","kitchen_wall","kitchen_tall","island","sink","stove","dishwasher","fridge","bed","bunk_bed","nightstand","wardrobe","dresser","bathtub","shower","wc","washbasin","washer","dryer","desk","office_chair","tall_cabinet","coat_rack","stairs"],Nt={lights:["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"],living:["sofa","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug"],dining:["table","table_round","chair","bench","corner_bench","bar_stool"],kitchen:["kitchen","kitchen_wall","kitchen_tall","island","sink","stove","dishwasher","fridge"],sleeping:["bed","bunk_bed","nightstand","wardrobe","dresser"],bath:["bathtub","shower","wc","washbasin","washer","dryer"],work:["desk","office_chair","tall_cabinet","coat_rack","radiator","stairs"]},Ut=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]);function ee(o){return Ut.has(o)||!!j(o)?.light}function qe(o,e,t,n=0){let i=H(o.points),r=i.x1-i.x0-2*n,s=i.z1-i.z0-2*n,a=[];for(let l=0;l<e;l++)for(let d=0;d<t;d++){let h=[Math.round((i.x0+n+r/t*(d+.5))*1e3)/1e3,Math.round((i.z0+n+s/e*(l+.5))*1e3)/1e3];O(h,o.points)&&a.push(h)}return a}function oe(o,e,t){let n=s=>Math.round(s*1e3)/1e3,[i,r]={right:[1,0],down:[0,1],left:[-1,0],up:[0,-1]}[t];return[n(o[0]+i*e),n(o[1]+r*e)]}var Tt=new Set([...Ut,"radiator","tv_board","tv_wall","desk","fridge","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),B={sofa:[2.2,.9,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],fridge:[.6,.65,1.8],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};var Ee={door:{type:"door",leaves:1,width:.9,sill:0,height:2.05},door_double:{type:"door",leaves:2,width:1.6,sill:0,height:2.05},window:{type:"window",leaves:1,width:1.2,sill:.9,height:1.3},window_double:{type:"window",leaves:2,width:1.6,sill:.9,height:1.3},terrace:{type:"window",leaves:1,width:1,sill:0,height:2.1},terrace_double:{type:"window",leaves:2,width:1.8,sill:0,height:2.1},garage:{type:"garage",leaves:1,width:2.5,sill:0,height:2.1}};function Ye(o){if(o.type==="garage")return"garage";let e=o.leaves===2;return o.type==="door"?e?"door_double":"door":o.sill<.1?e?"terrace_double":"terrace":e?"window_double":"window"}function Kt(o){o.energy={...Bn,...o.energy??{}},o.presence=o.presence??[],o.settings={...Nn,...o.settings,roof:{...Lt,...o.settings?.roof??{}}};for(let e of o.floors){e.outdoor=e.outdoor??[],e.rooms=e.rooms.map(n=>({...n,panel:n.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(n=>({...n,mount:n.mount??null})),e.furniture=e.furniture.map(n=>({...n,entity:n.entity??null,power:n.power??null}));let t=e.placements.filter(n=>n.entity_id.startsWith("light."));if(t.length){let n={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let i of t){let r=n[i.mount??"ceiling"],[s,a,l]=B[r];e.furniture.push({id:`lamp_${i.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:r,x:i.x,z:i.z,rotation:0,w:s,d:a,h:l,variant:null,entity:i.entity_id,power:null})}e.placements=e.placements.filter(i=>!i.entity_id.startsWith("light."))}e.openings=e.openings.map(n=>({...n,hinge:n.hinge??"left",leaves:n.leaves??1,swing:n.swing??"in",cover:n.cover??null,contact:n.contact??null,contact2:n.contact2??null,tilt:n.tilt??null}))}return o}function T(o){return`${o}_${Math.random().toString(36).slice(2,10)}`}function V(o){let e=0;for(let t=0;t<o.length;t++){let[n,i]=o[t],[r,s]=o[(t+1)%o.length];e+=n*s-r*i}return e/2}function ae(o){return Math.abs(V(o))}function Z(o){let e=V(o);if(Math.abs(e)<1e-9){let i=o.length||1;return[o.reduce((r,s)=>r+s[0],0)/i,o.reduce((r,s)=>r+s[1],0)/i]}let t=0,n=0;for(let i=0;i<o.length;i++){let[r,s]=o[i],[a,l]=o[(i+1)%o.length],d=r*l-a*s;t+=(r+a)*d,n+=(s+l)*d}return[t/(6*e),n/(6*e)]}function Je(o){if(o.length!==4)return!1;for(let e=0;e<4;e++){let[t,n]=o[e],[i,r]=o[(e+1)%4];if(Math.abs(t-i)>1e-6&&Math.abs(n-r)>1e-6)return!1}return!0}function H(o){let e=1/0,t=1/0,n=-1/0,i=-1/0;for(let[r,s]of o)e=Math.min(e,r),t=Math.min(t,s),n=Math.max(n,r),i=Math.max(i,s);return{x0:e,z0:t,x1:n,z1:i}}function O(o,e){let t=!1;for(let n=0,i=e.length-1;n<e.length;i=n++){let[r,s]=e[n],[a,l]=e[i];s>o[1]!=l>o[1]&&o[0]<(a-r)*(o[1]-s)/(l-s)+r&&(t=!t)}return t}var Gt={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var jt="floorplan_3d";function Kn(o){let e=structuredClone(o);e.energy={...e.energy,grid:null,solar:null,battery:null,battery_soc:null,tariff:null},e.presence=[];for(let t of e.floors)t.placements=[],t.background=null,t.rooms=t.rooms.map(n=>({...n,area_id:null})),t.furniture=t.furniture.map(n=>({...n,entity:null,power:null})),t.openings=t.openings.map(n=>({...n,cover:null,contact:null,tilt:null}));return e}function Zt(o,e){return{format:jt,version:1,exported_at:new Date().toISOString(),building:e?Kn(o):structuredClone(o)}}function qt(o){let e;try{e=JSON.parse(o)}catch{throw new Error("no JSON")}let t=e,n=t?.format===jt?t.building:e;if(!n||n.version!==1||!Array.isArray(n.floors)||!n.settings)throw new Error("no Floorplan 3D plan");for(let i of n.floors)i.background=null;return Kt(n)}function Yt(o,e){let t=URL.createObjectURL(new Blob([e],{type:"application/json"})),n=document.createElement("a");n.href=t,n.download=o,n.click(),setTimeout(()=>URL.revokeObjectURL(t),1e3)}var Gn={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},jn=new Set(["temperature","humidity","power","carbon_dioxide"]),Zn=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas"]),Jt=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"];function qn(o){return o.slice(0,o.indexOf("."))}function I(o){return Gn[qn(o)]??null}function Xt(o){return o!==null&&o!=="scene"&&o!=="script"}function Yn(o,e){let t=o.entities?.[e];return t?t.area_id?t.area_id:t.device_id&&o.devices?.[t.device_id]?.area_id||null:null}function Jn(o,e){let t=I(e);if(!t)return!1;let n=o.entities?.[e];if(n?.hidden||n?.entity_category)return!1;let i=o.states[e];if(!i)return!1;let r=i.attributes.device_class;return t==="sensor"?!!r&&jn.has(r):t==="binary"?!!r&&Zn.has(r):!0}function le(o,e){if(!e||!o.entities)return[];let t=Object.keys(o.entities).filter(i=>Yn(o,i)===e&&Jn(o,i)),n=o.areas?.[e]?.name;return t.sort((i,r)=>{let s=Jt.indexOf(I(i)),a=Jt.indexOf(I(r));return s-a||W(o,i,n).localeCompare(W(o,r,n))})}function W(o,e,t){let i=o.states[e]?.attributes.friendly_name??o.entities?.[e]?.name??e;if(t&&i.length>t.length+1&&i.toLowerCase().startsWith(t.toLowerCase()+" ")){let r=i.slice(t.length+1);return r.charAt(0).toUpperCase()+r.slice(1)}return i}function en(o,e,t=null){if(o==="light"&&t){if(t==="floor")return 1.95;if(t==="table")return 1.25;if(t==="wall")return 1.95}switch(o){case"light":case"camera":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}function Qn(o,e){let t=1/0;for(let n=0;n<e.length;n++){let i=e[n],r=e[(n+1)%e.length],s=r[0]-i[0],a=r[1]-i[1],l=s*s+a*a||1,d=Math.min(1,Math.max(0,((o[0]-i[0])*s+(o[1]-i[1])*a)/l));t=Math.min(t,Math.hypot(o[0]-i[0]-s*d,o[1]-i[1]-a*d))}return t}function tn(o,e,t=[]){if(o.points.length<3||!e.length)return[];let n=o.points,i=n.map(_=>_[0]),r=n.map(_=>_[1]),s=Math.min(...i),a=Math.min(...r),l=Math.max(...i),d=Math.max(...r),h=Math.min(l-s,d-a),p=Math.max(.1,Math.min(.25,h/8)),f=Math.min(.35,h/5),u=Z(n),c=[];for(let _=s+p/2;_<l;_+=p)for(let w=a+p/2;w<d;w+=p){let M=[_,w];if(!O(M,n))continue;let x=Qn(M,n);x<f||c.push({p:M,wall:x})}c.length||c.push({p:u,wall:0});let m=[...t],g=[],y=Math.min(.7,h/4);for(let _ of e){let w=I(_)==="light",M=c[0].p,x=-1/0;for(let{p:S,wall:E}of c){let A=m.length?Math.min(...m.map(U=>Math.hypot(S[0]-U[0],S[1]-U[1]))):3,ne=Math.hypot(S[0]-u[0],S[1]-u[1]),C=Math.min(A,3)*2;ne<y&&!w&&(C-=10),C-=w?ne*.35:E*1.2,C>x+1e-9&&(x=C,M=S)}let z=[Math.round(M[0]*100)/100,Math.round(M[1]*100)/100];m.push(z),g.push({entity_id:_,x:z[0],z:z[1],y:null,mount:null})}return g}var Xn=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),ei=new Set(["garage","gate"]),ti=new Set(["window","opening"]);function be(o,e,t=!1){let n=new Map;return e.length&&o.forEach((i,r)=>{let s=t&&e.length===1?e[0]:e[r];s&&n.set(i.id,s)}),n}function nn(o,e){let t=new Map;for(let n of e)for(let i of n.rooms){let r=n.openings.filter(_=>_.room_id===i.id).sort((_,w)=>_.edge-w.edge||_.offset-w.offset);if(!r.length)continue;let s=le(o,i.area_id),a=_=>o.states[_]?.attributes.device_class,l=s.filter(_=>I(_)==="cover"&&Xn.has(a(_))),d=r.filter(_=>_.type==="window"),h=r.filter(_=>_.type==="door"),p=r.filter(_=>_.type==="garage"),f=be(d,l,!0),u=be(d,s.filter(_=>I(_)==="binary"&&ti.has(a(_)))),c=be(h,s.filter(_=>I(_)==="binary"&&a(_)==="door")),m=be(p,s.filter(_=>I(_)==="cover"&&ei.has(a(_)??""))),g=be(p,s.filter(_=>I(_)==="binary"&&a(_)==="garage_door")),y=(_,w)=>_==="none"?null:_??w??null;for(let _ of r){let w=_.type==="window"?f:_.type==="garage"?m:null,M=_.type==="window"?u:_.type==="garage"?g:c;t.set(_.id,{cover:y(_.cover,w?.get(_.id)),contact:y(_.contact,M.get(_.id)),tilt:_.tilt==="none"?null:_.tilt,contact2:_.leaves===2&&_.contact2&&_.contact2!=="none"?_.contact2:null})}}return t}function Xe(o,e){let t=new Map,n=[];for(let s of e){let a=o.entities?.[s]?.device_id??`entity:${s}`,l=t.get(a);l||(t.set(a,l=[]),n.push(a)),l.push(s)}let i=n.map(s=>{let a=t.get(s),l=a.find(d=>!o.entities?.[d]?.name)??a[0];return{primary:l,others:a.filter(d=>d!==l)}}),r=new Map(e.map((s,a)=>[s,a]));return i.sort((s,a)=>r.get(s.primary)-r.get(a.primary))}function ni(o,e){return Xe(o,e).map(t=>t.primary)}var ii={tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i},ri=new Set(["tv_board","tv_wall"]),Qt={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function Qe(o,e){return e.startsWith("sensor.")&&o.states[e]?.attributes.device_class==="power"}function si(o,e){if(Qe(o,e))return e;let t=o.entities?.[e]?.device_id;return!t||!o.entities?null:Object.values(o.entities).find(n=>n.device_id===t&&n.entity_id!==e&&Qe(o,n.entity_id))?.entity_id??null}function rn(o,e){let t=new Map;for(let n of e){let i=new Set(n.furniture.flatMap(r=>[r.entity,r.power]).filter(r=>!!r&&r!=="none"));for(let r of n.furniture){let s=r.type in Qt,a=s?Qt[r.type]:ii[r.type];if(!a&&r.entity==null&&r.power==null)continue;let l=n.rooms.find(u=>u.points.length>=3&&O([r.x,r.z],u.points)),d=l?ni(o,le(o,l.area_id)):[],h=u=>`${u} ${W(o,u)}`,p=r.entity==="none"?null:r.entity??null;if(r.entity==null){let u=d.filter(c=>!i.has(c));if(s){let c=u.filter(m=>I(m)==="light");p=c.find(m=>a.test(h(m)))??c[0]??null}else if(r.type==="radiator"){let c=u.filter(m=>I(m)==="climate");p=c.find(m=>a.test(h(m)))??c[0]??null}else if(ri.has(r.type)){let c=u.filter(m=>I(m)==="media");p=c.find(m=>o.states[m]?.attributes.device_class==="tv")??c.find(m=>a?.test(h(m)))??c[0]??null}else a&&(p=u.find(c=>["switch","media","fan"].includes(I(c)??"")&&a.test(h(c)))??null);p&&i.add(p)}let f=r.power==="none"?null:r.power??null;r.power==null&&(f=p?si(o,p):null,!f&&a&&l&&!s&&(f=le(o,l.area_id).find(c=>Qe(o,c)&&!i.has(c)&&a.test(h(c)))??null),f&&i.add(f)),(p||f)&&t.set(r.id,{entity:p,power:f})}}return t}var P=(o,e,t,n,i="")=>k`<rect class=${i} x=${Math.min(o,t)} y=${Math.min(e,n)} width=${Math.abs(t-o)} height=${Math.abs(n-e)} />`,R=(o,e,t,n,i="")=>k`<line class=${i} x1=${o} y1=${e} x2=${t} y2=${n} />`,F=(o,e,t,n="")=>k`<circle class=${n} cx=${o} cy=${e} r=${t} />`,et=(o,e,t,n,i="")=>k`<ellipse class=${i} cx=${o} cy=${e} rx=${t} ry=${n} />`;function tt(o,e,t){let n=[];for(let i=1;i<t;i++){let r=-o/2+o/t*i;n.push(R(r,e/2,r,e/2-Math.min(.12,e*.3)))}return n}function sn(o,e,t,n){let i=Math.min(.24,e*.28),r=n?Math.min(.2,o*.12):0,s=[P(-o/2,-e/2,o/2,-e/2+i,"fp3d-sym-fill")];n&&s.push(P(-o/2,-e/2,-o/2+r,e/2,"fp3d-sym-fill"),P(o/2-r,-e/2,o/2,e/2,"fp3d-sym-fill"));let a=o-2*r;for(let l=1;l<t;l++){let d=-o/2+r+a/t*l;s.push(R(d,-e/2+i,d,e/2-.02))}return s}function on(o,e,t){switch(o){case"sofa":return sn(e,t,Math.max(1,Math.round((e-.4)/.62)),!0);case"armchair":return sn(e,t,1,!0);case"bench":return[P(-e/2,-t/2,e/2,-t/2+.08,"fp3d-sym-fill")];case"corner_bench":{let n=Math.min(.5,t*.4);return[P(-e/2,-t/2,e/2,-t/2+.08,"fp3d-sym-fill"),P(-e/2,-t/2,-e/2+.08,t/2,"fp3d-sym-fill"),R(-e/2+n,-t/2+n,e/2,-t/2+n),R(-e/2+n,-t/2+n,-e/2+n,t/2)]}case"chair":return[P(-e/2,-t/2,e/2,-t/2+.06,"fp3d-sym-fill")];case"office_chair":return[F(0,.03,Math.min(e,t)*.36),P(-e*.35,-t/2+.02,e*.35,-t/2+.1,"fp3d-sym-fill")];case"bar_stool":case"table_round":return[F(0,0,Math.min(e,t)*.42)];case"stool":return[P(-e/2+.04,-t/2+.04,e/2-.04,t/2-.04)];case"table":case"coffee_table":case"desk":{let n=[P(-e/2+.05,-t/2+.05,e/2-.05,t/2-.05)];return o==="desk"&&n.push(R(-.3,-t/2+.1,.3,-t/2+.1,"fp3d-sym-strong")),n}case"bed":case"bunk_bed":{let n=e>1.2?2:1,i=(e-.2)/n,r=[P(-e/2,-t/2,e/2,-t/2+.07,"fp3d-sym-fill"),R(-e/2,-t/2+(t-.1)*.36,e/2,-t/2+(t-.1)*.36)];for(let s=0;s<n;s++)r.push(P(-e/2+.13+i*s,-t/2+.12,-e/2+.07+i*(s+1),-t/2+.12+Math.min(.4,t*.18)));return r}case"nightstand":case"wardrobe":case"dresser":case"sideboard":case"tall_cabinet":case"kitchen":case"kitchen_wall":case"kitchen_tall":case"shelf":return tt(e,t,o==="nightstand"||o==="tall_cabinet"||o==="kitchen_tall"?1:Math.max(2,Math.round(e/.5)));case"coat_rack":return[P(-e/2,-t/2,e/2,-t/2+.03,"fp3d-sym-fill"),...tt(e,t,Math.max(2,Math.round(e/.5)))];case"island":return[R(-e/2,t/2-.3,e/2,t/2-.3)];case"fridge":return[R(-e/2+.06,t/2-.04,e/2-.06,t/2-.04,"fp3d-sym-strong")];case"stove":{let n=Math.min(e,t)*.14;return[F(-e*.22,-t*.2,n),F(e*.22,-t*.2,n*.8),F(-e*.22,t*.2,n*.8),F(e*.22,t*.2,n)]}case"sink":{let n=Math.min(.5,e-.2);return[P(-n/2,-t/2+.1,n/2,t/2-.08),F(0,-t/2+.06,.025,"fp3d-sym-fill")]}case"dishwasher":return[R(-e/2+.08,t/2-.05,e/2-.08,t/2-.05,"fp3d-sym-strong")];case"washer":case"dryer":return[F(0,.05,Math.min(e,t)*.3),R(-e/2,-t/2+.1,e/2,-t/2+.1)];case"bathtub":return[P(-e/2+.07,-t/2+.07,e/2-.07,t/2-.07),F(-e/2+.14,0,.03,"fp3d-sym-fill")];case"shower":return[R(-e/2,-t/2,e/2,t/2),R(e/2,-t/2,-e/2,t/2),F(0,0,.04)];case"wc":return[P(-e/2,-t/2,e/2,-t/2+Math.min(.18,t*.3),"fp3d-sym-fill"),et(0,t*.1,e*.36,t*.3)];case"washbasin":return[et(0,.03,e*.34,t*.3)];case"tv_board":return[R(-Math.min(e*.4,.72),-t/2+.14,Math.min(e*.4,.72),-t/2+.14,"fp3d-sym-strong"),...tt(e,t,Math.max(2,Math.round(e/.6)))];case"tv_wall":return[R(-e/2,0,e/2,0,"fp3d-sym-strong")];case"lamp_downlight":case"lamp_spot":return[F(0,0,Math.min(e,t)*.45,"fp3d-sym-fill"),F(0,0,Math.min(e,t)*1.4)];case"lamp_bollard":case"lamp_garden":return[F(0,0,Math.min(e,t)*.5,"fp3d-sym-fill"),F(0,0,Math.min(e,t)*1.6)];case"radiator":{let n=[],i=Math.max(3,Math.round(e/.1));for(let r=1;r<i;r++)n.push(R(-e/2+e/i*r,-t/2,-e/2+e/i*r,t/2));return n}case"lamp_panel":return[P(-e/2+.03,-t/2+.03,e/2-.03,t/2-.03,"fp3d-sym-fill")];case"lamp_uplight":case"lamp_ceiling":case"lamp_pendant":case"lamp_floor":case"lamp_table":{let n=Math.min(e,t)/2,i=[F(0,0,n*.9,"fp3d-sym-fill"),F(0,0,n*.3)];if(o==="lamp_ceiling"||o==="lamp_pendant")for(let r=0;r<8;r++){let s=r/8*Math.PI*2;i.push(R(Math.cos(s)*n*1.05,Math.sin(s)*n*1.05,Math.cos(s)*n*1.35,Math.sin(s)*n*1.35))}return i}case"lamp_wall":return[P(-e/2,-t/2,e/2,-t/2+.03,"fp3d-sym-fill"),et(0,.01,e*.4,t*.4)];case"led_strip":return[R(-e/2,0,e/2,0,"fp3d-sym-strong")];case"plant":return[F(0,0,Math.min(e,t)*.46),F(0,0,Math.min(e,t)*.25)];case"rug":return[P(-e/2+.1,-t/2+.1,e/2-.1,t/2-.1)];case"stairs":{let n=Math.max(3,Math.round(t/.26)),i=[];for(let r=1;r<n;r++)i.push(R(-e/2,t/2-t/n*r,e/2,t/2-t/n*r));return i.push(R(0,t/2-.1,0,-t/2+.25,"fp3d-sym-strong"),R(-.15,-t/2+.45,0,-t/2+.25,"fp3d-sym-strong"),R(.15,-t/2+.45,0,-t/2+.25,"fp3d-sym-strong")),i}default:{let n=j(o);return n?oi(n,e,t):b}}}function oi(o,e,t){return o.symbol?.length?o.symbol.map(n=>n.shape==="rect"?P((n.x-n.w/2)*e,(n.z-n.d/2)*t,(n.x+n.w/2)*e,(n.z+n.d/2)*t,n.fill?"fp3d-sym-fill":""):n.shape==="circle"?F(n.x*e,n.z*t,n.r*Math.min(e,t)):R(n.x1*e,n.z1*t,n.x2*e,n.z2*t)):o.parts.filter(n=>n.w<.98||n.d<.98).map(n=>n.shape==="cyl"?F(n.x*e,n.z*t,Math.min(n.w*e,n.d*t)/2):P((n.x-n.w/2)*e,(n.z-n.d/2)*t,(n.x+n.w/2)*e,(n.z+n.d/2)*t))}var ai=.05,li=.2,ci=.12;function di(o){let e=[];return o.forEach((t,n)=>{let i=t.points;if(i.length<3)return;let r=V(i)>=0;for(let s=0;s<i.length;s++){let a=i[s],l=i[(s+1)%i.length],d=l[0]-a[0],h=l[1]-a[1],p=Math.hypot(d,h);if(p<.05)continue;let f=[d/p,h/p],u=r?[f[1],-f[0]]:[-f[1],f[0]];(f[1]<-1e-9||Math.abs(f[1])<=1e-9&&f[0]<0)&&(f=[-f[0],-f[1]]);let c=[-f[1],f[0]],m=a[0]*f[0]+a[1]*f[1],g=l[0]*f[0]+l[1]*f[1];e.push({room:n,index:s,dir:f,normal:c,offset:a[0]*c[0]+a[1]*c[1],outside:u[0]*c[0]+u[1]*c[1]>0?1:-1,t0:Math.min(m,g),t1:Math.max(m,g)})}}),e}function an(o,e=.6){let t=di(o),n=t.map((h,p)=>p),i=h=>n[h]===h?h:n[h]=i(n[h]),r=[];for(let h=0;h<t.length;h++)for(let p=h+1;p<t.length;p++){let f=t[h],u=t[p];if(f.room===u.room||Math.abs(f.dir[0]*u.dir[1]-f.dir[1]*u.dir[0])>ai||f.outside===u.outside)continue;let c=(u.offset-f.offset)*f.outside;c>e||c<-ci||Math.abs(c)<1e-4||Math.min(f.t1,u.t1)-Math.max(f.t0,u.t0)<li||(r.push(Math.round(c*1e3)/1e3),n[i(h)]=i(p))}if(!r.length)return{rooms:o.map(h=>({...h,points:h.points.map(p=>[p[0],p[1]])})),gaps:r};let s=new Map;t.forEach((h,p)=>{let f=i(p);if(f===p&&!t.some((c,m)=>m!==p&&i(m)===p))return;let u=s.get(f)??[];u.push(p),s.set(f,u)});let a=o.map(h=>h.points.map(()=>new Map));for(let[h,p]of s){let f=p.reduce((u,c)=>u+t[c].offset,0)/p.length;for(let u of p){let c=t[u],m=f-c.offset,g=[c.normal[0]*m,c.normal[1]*m],y=o[c.room].points.length;a[c.room][c.index].set(h,g),a[c.room][(c.index+1)%y].set(h,g)}}let l=h=>Math.round(h*1e3)/1e3;return{rooms:o.map((h,p)=>({...h,points:h.points.map((f,u)=>{let c=f[0],m=f[1];for(let[g,y]of a[p][u].values())c+=g,m+=y;return[l(c),l(m)]})})),gaps:r}}function ln(o){let e=o.filter(n=>n>.04).sort((n,i)=>n-i);if(!e.length)return null;let t=e[Math.floor(e.length/2)];return Math.min(.5,Math.max(.08,Math.round(t*100)/100))}var hi=.25,cn=o=>Math.round(o*1e3)/1e3;function dn(o,e,t,n=hi){let i=o.rooms.find(d=>d.points.length>=3&&O([e.x,e.z],d.points));if(!i)return null;let r=i.points,s=V(r)>=0?1:-1,a=t/2,l=null;for(let d=0;d<r.length;d++){let h=r[d],p=r[(d+1)%r.length],f=Math.hypot(p[0]-h[0],p[1]-h[1]);if(f<.3)continue;let u=[(p[0]-h[0])/f,(p[1]-h[1])/f],c=[-u[1]*s,u[0]*s],m=(e.x-h[0])*u[0]+(e.z-h[1])*u[1];if(m<0||m>f)continue;let y=o.rooms.some(E=>E.id!==i.id&&E.points.some((A,ne)=>{let C=E.points[(ne+1)%E.points.length],U=Math.abs((A[0]-h[0])*c[0]+(A[1]-h[1])*c[1]),we=Math.abs((C[0]-h[0])*c[0]+(C[1]-h[1])*c[1]);return U<.02&&we<.02}))?a:0,_=(e.x-h[0])*c[0]+(e.z-h[1])*c[1]-y,w=Math.atan2(-c[0],c[1])*180/Math.PI,M=E=>Math.abs((e.rotation-E+540)%360-180),z=[{rotation:w,extent:e.d/2},{rotation:w+90,extent:e.w/2},{rotation:w-90,extent:e.w/2}].reduce((E,A)=>M(A.rotation)<M(E.rotation)?A:E);if(M(z.rotation)>50)continue;let S=_-z.extent;Math.abs(S)>n||l&&Math.abs(S)>=Math.abs(l.gap)||(l={x:cn(e.x-c[0]*S),z:cn(e.z-c[1]*S),rotation:(Math.round(z.rotation)%360+360)%360,gap:S})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}var pn=["kitchen_row","kitchen_l","bath","bedroom","living","dining","office","kids","hall"],pi={kitchen_row:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"kitchen",size:[.9,.62,.92]},{type:"sink"},{type:"dishwasher"},{type:"stove"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"back",align:"start",items:[{type:"kitchen_wall",size:[1.2,.35,.7]}]}],free:[{type:"table",at:[.5,.72],rotation:0,size:[1.2,.8,.75]},{type:"lamp_pendant",at:[.5,.72],rotation:0},{type:"lamp_ceiling",at:[.5,.3],rotation:0}]},kitchen_l:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"sink"},{type:"dishwasher"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"left",align:"end",items:[{type:"stove"},{type:"kitchen",size:[1.2,.62,.92]}]}],free:[{type:"island",at:[.62,.62],rotation:0,size:[1.6,.9,.92]},{type:"bar_stool",at:[.52,.86],rotation:180},{type:"bar_stool",at:[.72,.86],rotation:180},{type:"lamp_ceiling",at:[.5,.35],rotation:0}]},bath:{rows:[{wall:"back",align:"center",items:[{type:"washbasin"}]},{wall:"back",align:"end",items:[{type:"wc"}]},{wall:"front",align:"start",items:[{type:"bathtub"}]},{wall:"left",align:"start",items:[{type:"washer"}]}],free:[{type:"lamp_downlight",at:[.5,.5],rotation:0}]},bedroom:{rows:[{wall:"back",align:"center",items:[{type:"nightstand"},{type:"bed"},{type:"nightstand"}]},{wall:"left",align:"center",items:[{type:"wardrobe",size:[2,.6,2.1]}]},{wall:"front",align:"end",items:[{type:"dresser"}]}],free:[{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},living:{rows:[{wall:"back",align:"center",items:[{type:"tv_board"}]},{wall:"right",align:"start",items:[{type:"shelf"}]}],free:[{type:"sofa",at:[.5,.72],rotation:180},{type:"coffee_table",at:[.5,.52],rotation:0},{type:"rug",at:[.5,.55],rotation:0,size:[2.2,1.6,.01]},{type:"armchair",at:[.14,.5],rotation:270},{type:"lamp_floor",at:[.86,.8],rotation:0},{type:"plant",at:[.9,.12],rotation:0},{type:"lamp_ceiling",at:[.5,.45],rotation:0}]},dining:{rows:[{wall:"back",align:"center",items:[{type:"sideboard"}]}],free:[{type:"table",at:[.5,.55],rotation:0},{type:"chair",at:[.4,.35],rotation:0},{type:"chair",at:[.6,.35],rotation:0},{type:"chair",at:[.4,.75],rotation:180},{type:"chair",at:[.6,.75],rotation:180},{type:"lamp_pendant",at:[.5,.55],rotation:0}]},office:{rows:[{wall:"back",align:"center",items:[{type:"desk"}]},{wall:"left",align:"center",items:[{type:"shelf"},{type:"shelf"}]}],free:[{type:"office_chair",at:[.5,.38],rotation:180},{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},kids:{rows:[{wall:"left",align:"start",items:[{type:"bed",size:[.9,2,.8]}]},{wall:"back",align:"end",items:[{type:"desk",size:[1.2,.6,.75]}]},{wall:"right",align:"end",items:[{type:"shelf"}]}],free:[{type:"rug",at:[.55,.6],rotation:0,size:[1.6,1.2,.01]},{type:"lamp_ceiling",at:[.5,.5],rotation:0}]},hall:{rows:[{wall:"left",align:"start",items:[{type:"coat_rack"}]}],free:[{type:"lamp_downlight",at:[.5,.3],rotation:0},{type:"lamp_downlight",at:[.5,.7],rotation:0}]}},ui={back:0,right:90,front:180,left:270};function un(o,e,t){let n=H(o.points),i=n.x1-n.x0,r=n.z1-n.z0,s=pi[e],a=[],l=(h,p,f,u,c)=>{let[m,g,y]=c??B[h];a.push({id:t(),type:h,x:hn(p),z:hn(f),rotation:u,w:m,d:g,h:y,variant:null,entity:null,power:null})},d=.02;for(let h of s.rows){let p=h.items.map(g=>({type:g.type,size:g.size??B[g.type]})),f=h.wall==="back"||h.wall==="front"?i:r,u=[],c=0;for(let g of p){if(c+g.size[0]>f-.1)break;u.push(g),c+=g.size[0]}let m=h.align==="start"?.05:h.align==="end"?f-c-.05:(f-c)/2;for(let g of u){let[y,_]=g.size,w=m+y/2,M=_/2+d;h.wall==="back"?l(g.type,n.x0+w,n.z0+M,0,g.size):h.wall==="front"?l(g.type,n.x1-w,n.z1-M,180,g.size):h.wall==="right"?l(g.type,n.x1-M,n.z0+w,90,g.size):l(g.type,n.x0+M,n.z1-w,ui.left,g.size),m+=y}}for(let h of s.free){let[p,f]=h.size??B[h.type],u=Math.min(n.x1-p/2-.05,Math.max(n.x0+p/2+.05,n.x0+i*h.at[0])),c=Math.min(n.z1-f/2-.05,Math.max(n.z0+f/2+.05,n.z0+r*h.at[1]));l(h.type,u,c,h.rotation,h.size)}return a}var hn=o=>Math.round(o*1e3)/1e3;var D=(o,e)=>[o[0]-e[0],o[1]-e[1]],ce=(o,e)=>[o[0]+e[0],o[1]+e[1]],q=(o,e)=>[o[0]*e,o[1]*e],Ae=(o,e)=>o[0]*e[0]+o[1]*e[1],ve=(o,e)=>o[0]*e[1]-o[1]*e[0],Re=o=>Math.hypot(o[0],o[1]),te=o=>{let e=Re(o)||1;return[o[0]/e,o[1]/e]},fn=o=>[-o[1],o[0]],mn=o=>[o[1],-o[0]];function _n(o,e){let t=e.eps??.005,n=[],i=[],r=u=>{for(let c=0;c<i.length;c++)if(Math.abs(i[c][0]-u[0])<=t&&Math.abs(i[c][1]-u[1])<=t)return c;return i.push([u[0],u[1]]),i.length-1},s=[];for(let u of o){let c=u.points;if(c.length<3||Math.abs(V(c))<1e-6)continue;let m=V(c)>0,g=c.map(r);for(let y=0;y<c.length;y++){let _=g[y],w=g[(y+1)%c.length];_!==w&&s.push(m?{u:_,v:w,room:u.id,edge:y,forward:!0}:{u:w,v:_,room:u.id,edge:y,forward:!1})}}let a=[];for(let u of s){let c=i[u.u],m=i[u.v],g=D(m,c),y=Re(g),_=q(g,1/y),w=[];for(let x=0;x<i.length;x++){if(x===u.u||x===u.v)continue;let z=D(i[x],c),S=Ae(z,_);S<=t||S>=y-t||Math.abs(ve(_,z))<=t&&w.push({t:S,id:x})}w.sort((x,z)=>x.t-z.t);let M=[{t:0,id:u.u},...w,{t:y,id:u.v}];for(let x=0;x+1<M.length;x++){let z=M[x],S=M[x+1],E=u.forward?z.t:y-S.t,A=u.forward?S.t:y-z.t;a.push({u:z.id,v:S.id,room:u.room,edge:u.edge,t0:E,t1:A})}}let l=new Map;for(let u of a){let c=u.u<u.v?`${u.u}-${u.v}`:`${u.v}-${u.u}`,m=l.get(c);m||l.set(c,m=[]),m.push(u)}let d=u=>({room_id:u.room,edge:u.edge,t0:u.t0,t1:u.t1}),h=[];for(let u of l.values()){let c=u[0],m=u.find(g=>g!==c&&g.u===c.v&&g.v===c.u&&g.room!==c.room);for(let g of u)g!==c&&g!==m&&g.room!==c.room&&n.push(`overlap:${c.room}:${g.room}`);m?h.push({a:c.u,b:c.v,left:e.interior/2,right:e.interior/2,exterior:!1,roomLeft:c.room,roomRight:m.room,sources:[d(c),d(m)]}):h.push({a:c.u,b:c.v,left:0,right:e.exterior,exterior:!0,roomLeft:c.room,roomRight:null,sources:[d(c)]})}h=mi(h,i);let p=_i(h,i);return{walls:h.map((u,c)=>{let m=i[u.a],g=i[u.b],y=p.get(`${c}:a`),_=p.get(`${c}:b`),w=bi([y.right,_.left,g,_.right,y.left,m],1e-6);return{id:fi(m,g),a:[m[0],m[1]],b:[g[0],g[1]],left:u.left,right:u.right,exterior:u.exterior,roomLeft:u.roomLeft,roomRight:u.roomRight,sources:u.sources,footprint:w}}),warnings:[...new Set(n)]}}function fi(o,e){let t=r=>Math.round(r*100),[n,i]=o[0]<e[0]||o[0]===e[0]&&o[1]<=e[1]?[o,e]:[e,o];return`w_${t(n[0])}_${t(n[1])}_${t(i[0])}_${t(i[1])}`}function gn(o){return{...o,a:o.b,b:o.a,left:o.right,right:o.left,roomLeft:o.roomRight,roomRight:o.roomLeft}}function mi(o,e){let t=o.slice(),n=!0;for(;n;){n=!1;let i=new Map;t.forEach((r,s)=>{for(let a of[r.a,r.b]){let l=i.get(a);l||i.set(a,l=[]),l.push(s)}});for(let[r,s]of i){if(s.length!==2)continue;let a=t[s[0]],l=t[s[1]];if(a.b!==r&&(a=gn(a)),l.a!==r&&(l=gn(l)),a.a===l.b)continue;let d=te(D(e[a.b],e[a.a])),h=te(D(e[l.b],e[l.a]));if(Math.abs(ve(d,h))>1e-6||Ae(d,h)<=0||a.exterior!==l.exterior||a.roomLeft!==l.roomLeft||a.roomRight!==l.roomRight||Math.abs(a.left-l.left)>1e-9||Math.abs(a.right-l.right)>1e-9)continue;let p={...a,b:l.b,sources:gi(a.sources,l.sources)},f=t.filter((u,c)=>c!==s[0]&&c!==s[1]);f.push(p),t.length=0,t.push(...f),n=!0;break}}return t}function gi(o,e){let t=o.map(n=>({...n}));for(let n of e){let i=t.find(r=>r.room_id===n.room_id&&r.edge===n.edge&&(Math.abs(r.t1-n.t0)<1e-6||Math.abs(n.t1-r.t0)<1e-6));i?(i.t0=Math.min(i.t0,n.t0),i.t1=Math.max(i.t1,n.t1)):t.push({...n})}return t}function _i(o,e){let t=new Map;o.forEach((i,r)=>{let s=te(D(e[i.b],e[i.a])),a=[[i.a,{key:`${r}:a`,d:s,left:i.left,right:i.right,angle:Math.atan2(s[1],s[0])}],[i.b,{key:`${r}:b`,d:q(s,-1),left:i.right,right:i.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,d]of a){let h=t.get(l);h||t.set(l,h=[]),h.push(d)}});let n=new Map;for(let[i,r]of t){let s=e[i];r.sort((d,h)=>d.angle-h.angle);let a=d=>({left:ce(s,q(fn(d.d),d.left)),right:ce(s,q(mn(d.d),d.right))});for(let d of r)n.set(d.key,a(d));if(r.length<2)continue;let l=4*Math.max(...r.map(d=>Math.max(d.left,d.right)))+1e-9;for(let d=0;d<r.length;d++){let h=r[d],p=r[(d+1)%r.length],f=ce(s,q(fn(h.d),h.left)),u=ce(s,q(mn(p.d),p.right)),c=ve(h.d,p.d);if(Math.abs(c)<1e-4)continue;let m=ve(D(u,f),p.d)/c,g=ce(f,q(h.d,m));Re(D(g,s))>l||(n.get(h.key).left=g,n.get(p.key).right=g)}}return n}function bi(o,e){let t=o.filter((i,r)=>Re(D(i,o[(r+1)%o.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let i=0;i<t.length;i++){let r=t[(i+t.length-1)%t.length],s=t[i],a=t[(i+1)%t.length],l=D(s,r),d=D(a,s);if(Math.abs(ve(te(l),te(d)))<1e-7&&Ae(l,d)>0){t=t.filter((h,p)=>p!==i),n=!0;break}}}return t}function Pe(o,e,t){let n=o.points[e],i=o.points[(e+1)%o.points.length],r=te(D(i,n));return ce(n,q(r,t))}function bn(o,e,t,n){for(let i of o){if(!i.sources.find(a=>a.room_id===e.id&&a.edge===t&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let s=Pe(e,t,n);return{wall:i,s:Ae(D(s,i.a),te(D(i.b,i.a)))}}return null}var vn={view:"3D",editor:"Editor",all_floors:"Alle Etagen",no_building:"Noch kein Grundriss vorhanden.",no_building_admin:"Noch kein Grundriss vorhanden. Im Editor zeichnest du deine erste Etage.",open_editor:"Editor \xF6ffnen",loading:"L\xE4dt \u2026",load_error:"Laden fehlgeschlagen",saving:"Speichert \u2026",saved:"Gespeichert",save_error:"Speichern fehlgeschlagen",save_failed_detail:"Speichern fehlgeschlagen: {error}. Deine \xC4nderungen bleiben in diesem Browser erhalten.",needs_restart:"Eine neue Version von Floorplan 3D ist installiert, aber Home Assistant l\xE4uft noch mit {version}. Bitte Home Assistant neu starten \u2013 bis dahin kann das Speichern fehlschlagen.",needs_restart_old:"Eine neue Version von Floorplan 3D ist installiert, aber Home Assistant l\xE4uft noch mit einer \xE4lteren. Bitte Home Assistant neu starten \u2013 bis dahin schl\xE4gt das Speichern fehl.",draft_found:"Nicht gespeicherte \xC4nderungen vom {time} gefunden.",draft_restore:"\xDCbernehmen und speichern",draft_discard:"Verwerfen",walls_auto:"W\xE4nde hoch",walls_cut:"Schnitt",reset_view:"\xDCbersicht",back:"Zur\xFCck",floor:"Etage",floors:"Etagen",add_floor:"Etage hinzuf\xFCgen",floor_from_ha:"Etagen aus Home Assistant:",floor_empty:"Leere Etage",level:"Ebene {n}",ha_floor:"Etage in Home Assistant",no_ha_floor:"\u2013 keine \u2013",area_rooms:"{n} R\xE4ume aus HA-Bereichen anlegen",area_rooms_hint:"Legt f\xFCr jeden Bereich dieser Etage einen Raum an (4 \xD7 3 m) \u2013 danach an die richtige Stelle ziehen und die Ecken anpassen",floor_name:"Name",elevation:"H\xF6he \xFCber Boden (m)",height:"Raumh\xF6he (m)",cut_height:"Schnitth\xF6he (m)",delete_floor:"Etage l\xF6schen",delete_floor_confirm:"Etage \u201E{name}\u201C mit allen R\xE4umen l\xF6schen?",move_up:"Nach oben",move_down:"Nach unten",default_floor:"Erdgeschoss",new_floor:"Etage {n}",tool_select:"Ausw\xE4hlen",tool_rect:"Rechteck",tool_polygon:"Freie Form",undo:"R\xFCckg\xE4ngig",redo:"Wiederholen",fit:"Alles zeigen",room:"Raum",rooms:"R\xE4ume",room_name:"Name",area:"Bereich",no_area:"Kein Bereich",material:"Boden",x:"X (m)",z:"Y (m)",width:"Breite (m)",depth:"Tiefe (m)",points:"Eckpunkte",delete_point:"Punkt l\xF6schen",duplicate:"Duplizieren",delete:"L\xF6schen",new_room:"Raum {n}",settings:"Einstellungen",pendant_shape:"Form",pendant_shade:"Schirm",pendant_globe:"Kugel",pendant_cone:"Kegel",pendant_drum:"Trommel",pkg_open:"Einrichten \u2026",pkg_hint:"Die M\xF6bel kommen an die W\xE4nde des Raums; Leuchten verbinden sich mit den Lichtern des Bereichs. Danach einzeln anpassen \u2013 Strg+Z nimmt alles zur\xFCck.",pkg_done:"{n} M\xF6bel gesetzt \u2013 Strg+Z nimmt es zur\xFCck.",pkg_kitchen_row:"K\xFCchenzeile",pkg_kitchen_row_desc:"Zeile an der R\xFCckwand mit K\xFChlschrank, Backofen, Sp\xFCle, Sp\xFClmaschine und Herd, Oberschrank, Esstisch mit Pendelleuchte",pkg_kitchen_l:"K\xFCche in L-Form",pkg_kitchen_l_desc:"Zeile hinten und links, Kochinsel mit Barhockern",pkg_bath:"Bad",pkg_bath_desc:"Waschtisch, WC, Badewanne, Waschmaschine, Einbauspot",pkg_bedroom:"Schlafzimmer",pkg_bedroom_desc:"Doppelbett mit zwei Nachttischen, Schrank, Kommode, Deckenleuchte",pkg_living:"Wohnzimmer",pkg_living_desc:"TV-Board, Sofa, Couchtisch, Teppich, Sessel, Regal, Stehlampe, Pflanze",pkg_dining:"Esszimmer",pkg_dining_desc:"Esstisch mit vier St\xFChlen, Sideboard, Pendelleuchte",pkg_office:"B\xFCro",pkg_office_desc:"Schreibtisch mit B\xFCrostuhl, zwei Regale, Deckenleuchte",pkg_kids:"Kinderzimmer",pkg_kids_desc:"Einzelbett, Schreibtisch, Regal, Teppich",pkg_hall:"Flur",pkg_hall_desc:"Garderobe, zwei Einbauspots",spots_place:"Spots setzen",spots_type:"Leuchte",spots_cols:"Spalten (links\u2013rechts)",spots_rows:"Reihen (vorne\u2013hinten)",spots_add:"{n} Leuchten setzen",spots_placed:"{n} Leuchten gesetzt.",spots_hint:"Alle Leuchten folgen dem gew\xE4hlten Licht (z. B. Spots an einem Dimmer). Einzeln verschieben und ein anderes Licht w\xE4hlen geht danach wie bei jedem M\xF6bel.",cancel:"Abbrechen",backup:"Sicherung",backup_history:"Wiederherstellungspunkte",backup_none:"Noch keine. Beim Bearbeiten entsteht h\xF6chstens alle 10 Minuten ein Punkt.",backup_summary:"{rooms} R\xE4ume, {furniture} M\xF6bel",backup_restore:"Wiederherstellen",backup_restore_confirm:"Den Stand vom {time} wiederherstellen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_restored:"Wiederhergestellt.",backup_file:"Datei",backup_export:"Exportieren",backup_export_share:"Als Vorlage teilen",backup_export_share_hint:"Ohne Bereiche, Ger\xE4te, Sensoren und Bilder \u2013 zum Weitergeben an andere.",backup_import:"Importieren \u2026",backup_import_confirm:"Den ganzen Grundriss durch die Datei ersetzen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_import_error:"Die Datei ist kein Floorplan-3D-Plan ({error}).",backup_imported:"Importiert.",backup_hint:"Hintergrundbilder sind nicht in der Datei enthalten.",wall_exterior:"Au\xDFenwand (m)",wall_interior:"Innenwand (m)",grid:"Raster (m)",background:"Vorlage (Grundriss-Bild)",background_upload:"Bild w\xE4hlen \u2026",background_width:"Breite im Plan (m)",background_opacity:"Deckkraft",background_remove:"Vorlage entfernen",hint_select:"Raum antippen zum Ausw\xE4hlen \xB7 Ecken ziehen \xB7 \u201E+\u201C auf einer Kante f\xFCgt einen Punkt ein \xB7 Entf l\xF6scht \xB7 Strg+Z",hint_rect:"Ziehen, um ein Rechteck zu zeichnen",hint_polygon:"Punkte setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",hint_empty:"Lege zuerst eine Etage an.",area_m2:"{a} m\xB2",overlap_warning:"R\xE4ume \xFCberlappen sich \u2013 die W\xE4nde dort sind unvollst\xE4ndig.",read_only:"Nur Administratoren k\xF6nnen den Grundriss bearbeiten.",mat_wood:"Holz",mat_oak:"Eiche",mat_tiles:"Fliesen",mat_carpet:"Teppich",mat_stone:"Stein",mat_concrete:"Beton",card_name:"Floorplan 3D",card_description:"Deine Wohnung in 3D (Neon).",stats:"{calls} Draw-Calls \xB7 {tris} Dreiecke",stats_fps:"{fps} B/s (langsamstes Bild {ms} ms)",stats_idle:"Ruhe (0 B/s)",stats_low:"Stufe Tablet, Pixeldichte {r}",stats_full:"volle Stufe, Pixeldichte {r}",floors_apart:"Auseinander",floors_stacked:"Gestapelt",floor_rooms_one:"1 Raum",floor_rooms:"{n} R\xE4ume",quality:"Qualit\xE4t",quality_auto:"Auto",quality_low:"Tablet",quality_high:"Hoch",state_on:"An",state_off:"Aus",state_open:"Offen",state_closed:"Zu",state_opening:"\xD6ffnet",state_closing:"Schlie\xDFt",state_playing:"Spielt",state_paused:"Pause",state_idle:"Bereit",state_locked:"Verriegelt",state_unlocked:"Entriegelt",state_detected:"Erkannt",state_clear:"Frei",state_unavailable:"Nicht verf\xFCgbar",state_heat:"Heizen",state_cool:"K\xFChlen",state_auto:"Automatik",state_heat_cool:"Heizen/K\xFChlen",state_dry:"Entfeuchten",state_fan_only:"L\xFCften",devices:"Ger\xE4te",devices_none_area:"Verkn\xFCpfe den Raum mit einem Bereich, dann erscheinen dessen Ger\xE4te hier.",devices_none:"Im Bereich gibt es keine passenden Ger\xE4te.",devices_place_all:"Alle automatisch platzieren",devices_place:"Platzieren",devices_remove:"Entfernen",devices_hint:"Platzierte Ger\xE4te erscheinen in 3D. Im Plan lassen sie sich verschieben.",panel_lights:"Licht",panel_covers:"Rolll\xE4den",panel_climate:"Heizung",panel_media:"Medien",panel_switches:"Schalter",panel_sensors:"Sensoren",panel_scenes:"Szenen & Skripte",panel_cameras:"Kameras",camera_live:"Livebild \xF6ffnen",state_recording:"Nimmt auf",state_streaming:"Streamt",panel_all_off:"Alle aus",panel_no_area:"Dieser Raum ist mit keinem Bereich verkn\xFCpft. Im Editor kannst du ihn verkn\xFCpfen.",panel_empty:"F\xFCr diesen Raum sind keine Ger\xE4te im Grundriss. Im Editor lassen sich Ger\xE4te platzieren oder mit \u2606 f\xFCrs Raumfenster ausw\xE4hlen.",close:"Schlie\xDFen",brightness:"Helligkeit",color_temp:"Farbtemperatur",color:"Farbe",position:"Position",cover_open:"Auf",cover_stop:"Stopp",cover_close:"Zu",target_temp:"Soll",current_temp:"Ist",temp_down:"K\xE4lter",temp_up:"W\xE4rmer",volume:"Lautst\xE4rke",play_pause:"Wiedergabe/Pause",previous:"Zur\xFCck",next:"Weiter",run:"Ausf\xFChren",details:"Details",hold_hint:"Antippen schaltet \xB7 lange dr\xFCcken \xF6ffnet Details",tool_opening:"T\xFCr & Fenster",tool_furniture:"M\xF6bel",qm_off:"Aus",find:"Suchen",find_placeholder:"Wo ist \u2026? Ger\xE4t oder Raum",find_none:"Nichts gefunden",swipe_off:"Aus",panel_pin:"Im Raumfenster zeigen",panel_unpin:"Nicht im Raumfenster zeigen",devices_panel_hint:"Das Raumfenster zeigt die Ger\xE4te im Grundriss. \u2606 nimmt ein Ger\xE4t zus\xE4tzlich ins Raumfenster auf, ohne es zu platzieren.",card_section_view:"Ansicht",card_size:"Gr\xF6\xDFe",card_size_fixed:"Feste H\xF6he",card_size_fill:"Bildschirm f\xFCllen",card_fill_hint:"Am besten in einer Dashboard-Ansicht vom Typ \u201EPanel (1 Karte)\u201C \u2013 dann nimmt die Karte den ganzen Platz ein.",card_controls:"Schalter in der Karte",card_floor_thumbs:"Etagen als Mini-Ansichten",card_floor_thumbs_hint:"Kleine Bilder der Etagen am Rand \u2013 antippen wechselt die Etage",card_controls_hint:"W\xE4nde hoch/Schnitt, Etagen auseinander und Temperatur, Feuchte, CO\u2082 zum Umschalten",card_fullscreen_button:"Vollbild-Taste",card_fullscreen_button_hint:"Blendet das Dashboard drumherum aus (z. B. am Wandtablet)",fullscreen:"Vollbild",fullscreen_exit:"Vollbild beenden",card_section_show:"Anzeigen",card_floor:"Etage",card_floor_house:"Ganzes Haus (Etage antippen zum \xD6ffnen)",card_height:"H\xF6he (Pixel)",card_walls:"W\xE4nde",card_quality_hint:"\u201ETablet\u201C ist die sparsamste Stufe \u2013 ideal f\xFCr Fire-Tablets und andere Wandtablets.",card_flows_switch:"Schalter in der Karte",card_flows_on:"Immer an",card_flows_off:"Immer aus",card_energy:"Energiewerte oben anzeigen",card_room_panel:"Raum-Details beim Antippen",card_room_panel_hint:"Lichter, Rolll\xE4den und Kameras des Raums in einem Seitenfenster",card_explode:"Etagen in der Hausansicht auseinanderziehen",card_stats:"Leistungsanzeige (Bilder pro Sekunde)",card_stats_hint:"Zum Pr\xFCfen, wie fl\xFCssig die Karte auf dem Ger\xE4t l\xE4uft",packs:"M\xF6bel-Packs",packs_hint:"Nur unterschriebene Packs des Herausgebers lassen sich importieren.",pack_import:"M\xF6bel-Pack importieren \u2026",pack_imported:"\u201E{name}\u201C von {publisher} importiert \u2013 {n} M\xF6bel",pack_by:"von {publisher} \xB7 {n} M\xF6bel",pack_licensed:"Lizenziert f\xFCr {name}",pack_remove:"Entfernen",pack_remove_confirm:"Pack \u201E{name}\u201C entfernen? M\xF6bel daraus bleiben als einfache K\xE4sten im Plan.",pack_missing_item:"M\xF6bel aus entferntem Pack",pack_error_bad_signature:"Das Pack wurde ver\xE4ndert oder seine Unterschrift ist ung\xFCltig.",pack_error_unknown_publisher:"Dieses Pack stammt nicht von einem bekannten Herausgeber.",pack_error_unsigned:"Das Pack ist nicht unterschrieben.",pack_error_not_a_pack:"Das ist keine M\xF6bel-Pack-Datei.",pack_error_invalid_content:"Das Pack enth\xE4lt ung\xFCltige M\xF6bel: {detail}",pack_error_too_large:"Die Datei ist zu gro\xDF.",pack_error_other:"Import fehlgeschlagen: {detail}",back_to_room:"Zur\xFCck zu {room}",back_to_floor:"Zur\xFCck zur Etage",hint_furniture:"Raum antippen, dann rechts ein M\xF6belst\xFCck w\xE4hlen \xB7 M\xF6bel ziehen, an den Ecken die Gr\xF6\xDFe \xE4ndern",furniture_into:"Neue M\xF6bel kommen in die Mitte von \u201E{room}\u201C.",furniture_pick_room:"Tipp: Erst einen Raum antippen \u2013 dann landen neue M\xF6bel in seiner Mitte.",flows:"Stromfluss",flows_hint:"Leuchtende Leitungen vom Z\xE4hler zu den Verbrauchern ein- oder ausblenden",flow_on:"an",flow_off:"aus",hint_opening:"Auf eine Wand tippen, um eine T\xFCr oder ein Fenster einzusetzen \u2013 die Art w\xE4hlst du danach rechts",preset_door:"T\xFCr",preset_door_double:"Doppelt\xFCr",preset_window:"Fenster",preset_window_double:"Fenster 2-fl\xFCgelig",preset_terrace:"Terrassent\xFCr",preset_terrace_double:"Terrassent\xFCr 2-fl\xFCgelig",preset_garage:"Garagentor",flip_hinge:"Anschlag wechseln",flip_main_leaf:"Hauptfl\xFCgel wechseln",flip_hinge_hint:"Scharniere auf die andere Seite",flip_swing:"\xD6ffnungsrichtung umdrehen",flip_swing_hint:"Die T\xFCr schwenkt in den Raum oder zur anderen Seite",main_leaf:"Hauptfl\xFCgel (vom Raum aus)",contact_main:"Kontakt Hauptfl\xFCgel",contact_second:"Kontakt zweiter Fl\xFCgel",tool_outdoor:"Au\xDFen",tool_measure:"Nach Ma\xDF",hint_measure:"Startpunkt antippen, dann rechts die Wandl\xE4ngen mit Richtung eingeben",measure:"Raum nach Ma\xDF",measure_start:"Tippe im Plan auf den Startpunkt, z. B. eine Raumecke.",measure_from:"Start bei {x} / {z} m \u2013 antippen verschiebt den Start.",measure_length:"L\xE4nge der n\xE4chsten Wand (m)",measure_close:"Raum schlie\xDFen",measure_undo:"Letzte Wand weg",measure_gap:"L\xFCcke zum Start: {gap} m (wird beim Schlie\xDFen verbunden)",measure_hint:"Tipp: L\xE4nge eintippen und Pfeiltaste dr\xFCcken. Mit gemessenen Innenma\xDFen danach \u201EL\xFCcken schlie\xDFen\u201C.",rect_by_size:"Rechteck nach Ma\xDF",rect_add:"Rechteck anlegen",dir_up:"Nach oben",dir_down:"Nach unten",dir_left:"Nach links",dir_right:"Nach rechts",hint_outdoor:"Ziehen, um eine Au\xDFenfl\xE4che (Rasen, Terrasse, Pool \u2026) aufzuziehen",outdoor:"Au\xDFenfl\xE4che",outdoor_type:"Art",outdoor_hint:"Au\xDFenleuchten (Wegleuchte, Garten-Spot, Wandleuchte au\xDFen) beleuchten alle Au\xDFenfl\xE4chen und die Fassade.",out_lawn:"Rasen",out_terrace:"Terrasse",out_path:"Weg",out_driveway:"Einfahrt",out_pool:"Pool",out_bed:"Beet",out_hedge:"Hecke",out_fence:"Zaun",north:"Nordrichtung (\xB0 im Uhrzeigersinn von oben)",north_hint:"Die Nordrichtung braucht der Sonnenstand (Licht durch die Fenster).",roof:"Dach",roof_none:"Kein Dach",roof_flat:"Flachdach",roof_gable:"Satteldach",roof_pitch:"Dachneigung (\xB0)",roof_overhang:"Dach\xFCberstand (m)",device:"Ger\xE4t",lamp_mount:"Lampe",lamp_ceiling:"Deckenleuchte",lamp_floor:"Stehlampe",lamp_table:"Tischlampe",lamp_wall:"Wandleuchte",marker_height:"H\xF6he des Symbols (m)",height_auto:"H\xF6he automatisch",device_centre:"In Raummitte",lights_spread:"Deckenlampen gleichm\xE4\xDFig verteilen",devices_search:"Ger\xE4te suchen \u2026",devices_more:"+{n} weitere",devices_less:"weniger",panel_more:"Weitere Ger\xE4te des Bereichs ({n})",panel_less:"Weniger anzeigen",gaps_close:"L\xFCcken schlie\xDFen",gaps_hint:"R\xE4ume mit bis zu 60 cm Abstand an einer gemeinsamen Wand zusammenf\xFChren; der Abstand wird die Innenwandst\xE4rke.",gaps_none:"Keine L\xFCcken zwischen R\xE4umen gefunden.",gaps_closed:"{n} Stellen geschlossen.",gaps_closed_wall:"{n} Stellen geschlossen, Innenwand jetzt {t} m.",fps:"FPS",fps_title:"Leistungsanzeige (Bilder pro Sekunde)",hint_garage:"Auf eine Wand tippen, um ein Garagentor einzusetzen",opening_garage:"Garagentor",garage_hint:"Das Tor folgt einem Garagen-Cover (Position oder offen/zu) oder einem Garagentor-Kontakt aus dem Bereich des Raums.",door_hint:"Mit T\xFCrkontakt schwenkt das T\xFCrblatt auf, ohne Sensor steht es halb offen.",hint_door:"Auf eine Wand tippen, um eine T\xFCr einzusetzen",hint_window:"Auf eine Wand tippen, um ein Fenster einzusetzen",opening_door:"T\xFCr",opening_window:"Fenster",opening_type:"Art",opening_position:"Mitte ab Ecke (m)",sill:"Br\xFCstung (m)",opening_height:"H\xF6he (m)",hinge:"Anschlag (vom Raum aus)",hinge_left:"Links",hinge_right:"Rechts",cover_entity:"Rollladen",contact_entity:"Kontakt",tilt_entity:"Kipp-Sensor",entity_auto:"Automatisch ({name})",entity_auto_none:"Automatisch (keiner gefunden)",entity_none:"Keiner",opening_hint:"Terrassent\xFCr: Fenster mit Br\xFCstung 0. Automatisch nimmt Rolll\xE4den und Kontakte aus dem Bereich des Raums.",furniture:"M\xF6bel",furniture_add:"M\xF6bel hinzuf\xFCgen",furniture_type:"M\xF6belst\xFCck",rotation:"Drehung (\xB0)",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"H\xF6he (m)",furn_sofa:"Sofa",furn_armchair:"Sessel",furn_table:"Tisch",furn_chair:"Stuhl",furn_bed:"Bett",furn_nightstand:"Nachttisch",furn_wardrobe:"Schrank",furn_shelf:"Regal",furn_kitchen:"K\xFCchenzeile",furn_fridge:"K\xFChlschrank",furn_stove:"Herd",furn_sink:"Sp\xFCle",furn_bathtub:"Badewanne",furn_shower:"Dusche",furn_wc:"WC",furn_washbasin:"Waschtisch",furn_desk:"Schreibtisch",furn_tv_board:"TV-Board",furn_plant:"Pflanze",furn_rug:"Teppich",furn_stairs:"Treppe",furn_lamp_ceiling:"Deckenleuchte",furn_lamp_downlight:"Einbauspot",furn_lamp_spot:"Aufbau-Spot",furn_lamp_panel:"LED-Panel",furn_lamp_uplight:"Deckenfluter",furn_lamp_bollard:"Wegleuchte",furn_lamp_garden:"Garten-Spot",furn_radiator:"Heizk\xF6rper",furn_lamp_pendant:"Pendelleuchte",furn_lamp_floor:"Stehlampe",furn_lamp_table:"Tischlampe",furn_lamp_wall:"Wandleuchte",furn_led_strip:"LED-Streifen",furn_group_lights:"Leuchten",furn_entity_light:"Licht oder Schalter",furn_entity_climate:"Heizung (Thermostat)",lamp_hint:"Antippen in 3D schaltet die Leuchte, lange dr\xFCcken \xF6ffnet das Schnellmen\xFC. Auch Schalter (z. B. ein Relais f\xFCrs Deckenlicht) sind m\xF6glich \u2013 die Leuchte strahlt dann, solange er an ist. Tischlampen stehen automatisch auf dem M\xF6bel darunter.",lamp_hint_pendant:"H\xF6he = Abh\xE4ngung unter der Decke. Antippen in 3D schaltet, lange dr\xFCcken \xF6ffnet die Details.",theme:"Look",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Tag",furnish:"Einrichten",size_w:"Breite (m)",size_d:"Tiefe (m)",size_h:"H\xF6he (m)",furnish_hint:"M\xF6bel und Leuchten mit dem Finger ziehen \xB7 an W\xE4nden rasten sie ein \xB7 antippen zum Drehen",done:"Fertig",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Feuchte",heat_short_co2:"CO\u2082",heat_temperature:"Temperatur",heat_humidity:"Luftfeuchtigkeit",heat_co2:"CO\u2082",heat_none_found:"Keine passenden Sensoren in den Bereichen der R\xE4ume.",markers:"Symbole",markers_none:"Keine",markers_important:"Wichtige",markers_all:"Alle",furn_stool:"Hocker",furn_coffee_table:"Couchtisch",furn_tv_wall:"Fernseher (Wand)",furn_sideboard:"Sideboard",furn_table_round:"Runder Tisch",furn_bench:"Sitzbank",furn_corner_bench:"Eckbank",furn_bar_stool:"Barhocker",furn_kitchen_wall:"Oberschrank",furn_kitchen_tall:"Hochschrank mit Backofen",furn_island:"Kochinsel",furn_dishwasher:"Sp\xFClmaschine",furn_bunk_bed:"Etagenbett",furn_dresser:"Kommode",furn_washer:"Waschmaschine",furn_dryer:"Trockner",furn_office_chair:"B\xFCrostuhl",furn_tall_cabinet:"Hochschrank",furn_coat_rack:"Garderobe",furn_group_living:"Wohnen",furn_group_dining:"Essen",furn_group_kitchen:"K\xFCche",furn_group_sleeping:"Schlafen",furn_group_bath:"Bad & Hauswirtschaft",furn_group_work:"Arbeiten & Sonstiges",furn_entity:"Ger\xE4t (Schalter, Steckdose \u2026)",furn_entity_tv:"Fernseher (Media-Player)",furn_power:"Leistungssensor (W)",furn_links_hint:"Mit Leistungssensor zeigt das M\xF6bel seine Watt und bekommt eine Energie-Leitung.",furn_links_hint_tv:"Der Bildschirm leuchtet, solange der Fernseher an ist, in der Farbe der App (Netflix, YouTube \u2026); das Schild zeigt App oder Titel.",stairs_hint:"Die Treppe steigt nach hinten an (weg von der markierten Vorderkante) und \xF6ffnet die Decke der Etage dar\xFCber.",floor_lights:"{n} Licht an",floor_open:"{n} offen",floor_persons:"{n} Pers.",energy_consumption:"Verbrauch",energy_grid_import:"Netzbezug",energy_grid_export:"Einspeisung",energy_solar:"Solar",energy_battery:"Akku",energy_tariff:"Tarif",energy:"Energie",energy_meter:"Z\xE4hlerplatz",energy_meter_set:"Z\xE4hlerplatz setzen",energy_meter_remove:"Z\xE4hlerplatz entfernen",energy_meter_hint:"Tippe im Plan auf die Stelle des Z\xE4hlers bzw. Hausanschlusses.",energy_grid:"Netz (W, + = Bezug)",energy_solar_sensor:"Solar-Erzeugung (W)",energy_battery_sensor:"Akku-Leistung (W, + = Entladen)",energy_battery_soc:"Akku-Ladestand (%)",energy_tariff_sensor:"Tarif (z. B. \u20AC/kWh)",energy_invert:"Vorzeichen umkehren",energy_hint:"Verbraucher sind platzierte Ger\xE4te mit Leistungssensor (W) \u2013 der Sensor selbst oder einer vom selben Ger\xE4t.",tool_meter:"Z\xE4hler",hint_meter:"Auf die Stelle des Z\xE4hlers tippen",presence:"Anwesenheit",presence_hint:"Raumsensor je Person (z. B. ESPresense, Bermuda): sein Zustand nennt den Raum oder Bereich.",presence_sensor:"Raumsensor",no_persons:"In Home Assistant gibt es keine Personen."},vi={view:"3D",editor:"Editor",all_floors:"All floors",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",save_failed_detail:"Saving failed: {error}. Your changes are kept in this browser.",needs_restart:"A new version of Floorplan 3D is installed, but Home Assistant still runs {version}. Please restart Home Assistant \u2013 until then saving may fail.",needs_restart_old:"A new version of Floorplan 3D is installed, but Home Assistant still runs an older one. Please restart Home Assistant \u2013 until then saving fails.",draft_found:"Unsaved changes from {time} found.",draft_restore:"Restore and save",draft_discard:"Discard",walls_auto:"Tall walls",walls_cut:"Cut",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",add_floor:"Add floor",floor_from_ha:"Floors from Home Assistant:",floor_empty:"Empty floor",level:"Level {n}",ha_floor:"Floor in Home Assistant",no_ha_floor:"\u2013 none \u2013",area_rooms:"Add {n} rooms from HA areas",area_rooms_hint:"Adds a room (4 \xD7 3 m) for each area of this floor \u2013 then drag it into place and adjust the corners",floor_name:"Name",elevation:"Elevation (m)",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",default_floor:"Ground floor",new_floor:"Floor {n}",tool_select:"Select",tool_rect:"Rectangle",tool_polygon:"Free shape",undo:"Undo",redo:"Redo",fit:"Show all",room:"Room",rooms:"Rooms",room_name:"Name",area:"Area",no_area:"No area",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",delete_point:"Delete corner",duplicate:"Duplicate",delete:"Delete",new_room:"Room {n}",settings:"Settings",pendant_shape:"Shape",pendant_shade:"Shade",pendant_globe:"Globe",pendant_cone:"Cone",pendant_drum:"Drum",pkg_open:"Furnish \u2026",pkg_hint:"Furniture goes against the room's walls; lamps link to the area's lights. Adjust single items afterwards \u2013 Ctrl+Z takes it all back.",pkg_done:"{n} items placed \u2013 Ctrl+Z takes it back.",pkg_kitchen_row:"Kitchen row",pkg_kitchen_row_desc:"Row on the back wall with fridge, oven, sink, dishwasher and stove, wall cabinet, dining table with pendant",pkg_kitchen_l:"L-shaped kitchen",pkg_kitchen_l_desc:"Rows at the back and left, kitchen island with bar stools",pkg_bath:"Bathroom",pkg_bath_desc:"Washbasin, WC, bathtub, washing machine, downlight",pkg_bedroom:"Bedroom",pkg_bedroom_desc:"Double bed with two nightstands, wardrobe, chest of drawers, ceiling light",pkg_living:"Living room",pkg_living_desc:"TV board, sofa, coffee table, rug, armchair, shelf, floor lamp, plant",pkg_dining:"Dining room",pkg_dining_desc:"Table with four chairs, sideboard, pendant",pkg_office:"Office",pkg_office_desc:"Desk with office chair, two shelves, ceiling light",pkg_kids:"Kids' room",pkg_kids_desc:"Single bed, desk, shelf, rug",pkg_hall:"Hall",pkg_hall_desc:"Coat rack, two downlights",spots_place:"Place spots",spots_type:"Lamp",spots_cols:"Columns (left\u2013right)",spots_rows:"Rows (front\u2013back)",spots_add:"Place {n} lamps",spots_placed:"{n} lamps placed.",spots_hint:"All lamps follow the chosen light (e.g. spots on one dimmer). Afterwards each can be moved and linked to another light like any furniture.",cancel:"Cancel",backup:"Backup",backup_history:"Restore points",backup_none:"None yet. While editing, a restore point is kept at most every 10 minutes.",backup_summary:"{rooms} rooms, {furniture} items",backup_restore:"Restore",backup_restore_confirm:"Restore the state of {time}? The current state is kept as a restore point.",backup_restored:"Restored.",backup_file:"File",backup_export:"Export",backup_export_share:"Share as template",backup_export_share_hint:"Without areas, devices, sensors and images \u2013 for passing on to others.",backup_import:"Import \u2026",backup_import_confirm:"Replace the whole plan with the file? The current state is kept as a restore point.",backup_import_error:"The file is no Floorplan 3D plan ({error}).",backup_imported:"Imported.",backup_hint:"Background images are not part of the file.",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 Del deletes \xB7 Ctrl+Z",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_empty:"Add a floor first.",area_m2:"{a} m\xB2",overlap_warning:"Rooms overlap \u2013 walls there are incomplete.",read_only:"Only administrators can edit the floor plan.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"Floorplan 3D",card_description:"Your home in 3D (neon).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} fps (slowest frame {ms} ms)",stats_idle:"At rest (0 fps)",stats_low:"tablet level, pixel ratio {r}",stats_full:"full level, pixel ratio {r}",floors_apart:"Apart",floors_stacked:"Stacked",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",devices_none_area:"Link the room to an area and its devices appear here.",devices_none:"The area has no suitable devices.",devices_place_all:"Place all automatically",devices_place:"Place",devices_remove:"Remove",devices_hint:"Placed devices appear in 3D. Drag them in the plan to move them.",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",panel_cameras:"Cameras",camera_live:"Open live view",state_recording:"Recording",state_streaming:"Streaming",panel_all_off:"All off",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"No devices of this room are in the plan. In the editor, place devices or pick them for the room panel with \u2606.",close:"Close",brightness:"Brightness",color_temp:"Colour temperature",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details",tool_opening:"Doors & windows",tool_furniture:"Furniture",qm_off:"Off",find:"Search",find_placeholder:"Where is \u2026? Device or room",find_none:"Nothing found",swipe_off:"Off",panel_pin:"Show in the room panel",panel_unpin:"Don't show in the room panel",devices_panel_hint:"The room panel shows the devices in the plan. \u2606 adds a device to the room panel without placing it.",card_section_view:"View",card_size:"Size",card_size_fixed:"Fixed height",card_size_fill:"Fill the screen",card_fill_hint:"Works best in a dashboard view of the type \u201CPanel (single card)\u201D \u2013 the card then takes all the space.",card_controls:"Switches in the card",card_floor_thumbs:"Floors as miniatures",card_floor_thumbs_hint:"Small pictures of the floors at the side \u2013 tap one to switch",card_controls_hint:"Tall walls/cut, floors apart and temperature, humidity, CO\u2082 to switch",card_fullscreen_button:"Full screen button",card_fullscreen_button_hint:"Hides the dashboard around the card (e.g. on a wall tablet)",fullscreen:"Full screen",fullscreen_exit:"Exit full screen",card_section_show:"Show",card_floor:"Floor",card_floor_house:"Whole house (tap a floor to open it)",card_height:"Height (pixels)",card_walls:"Walls",card_quality_hint:"\u201CTablet\u201D is the lightest setting \u2013 ideal for Fire tablets and other wall tablets.",card_flows_switch:"Switch in the card",card_flows_on:"Always on",card_flows_off:"Always off",card_energy:"Show energy values at the top",card_room_panel:"Room details on tap",card_room_panel_hint:"The room's lights, blinds and cameras in a side panel",card_explode:"Pull floors apart in the house view",card_stats:"Performance display (frames per second)",card_stats_hint:"To check how smoothly the card runs on the device",packs:"Furniture packs",packs_hint:"Only packs signed by the publisher can be imported.",pack_import:"Import furniture pack \u2026",pack_imported:"Imported \u201C{name}\u201D by {publisher} \u2013 {n} items",pack_by:"by {publisher} \xB7 {n} items",pack_licensed:"Licensed to {name}",pack_remove:"Remove",pack_remove_confirm:"Remove the pack \u201C{name}\u201D? Its furniture stays in the plan as plain boxes.",pack_missing_item:"Furniture of a removed pack",pack_error_bad_signature:"The pack was changed or its signature is invalid.",pack_error_unknown_publisher:"This pack is not from a known publisher.",pack_error_unsigned:"The pack is not signed.",pack_error_not_a_pack:"This is not a furniture pack file.",pack_error_invalid_content:"The pack contains invalid furniture: {detail}",pack_error_too_large:"The file is too large.",pack_error_other:"Import failed: {detail}",back_to_room:"Back to {room}",back_to_floor:"Back to the floor",hint_furniture:"Tap a room, then pick an item on the right \xB7 drag items, resize them by their corners",furniture_into:"New items go into the middle of \u201C{room}\u201D.",furniture_pick_room:"Tip: tap a room first \u2013 new items then land in its middle.",flows:"Power flow",flows_hint:"Show or hide glowing lines from the meter to the consumers",flow_on:"on",flow_off:"off",hint_opening:"Tap a wall to add a door or window \u2013 choose its kind on the right afterwards",preset_door:"Door",preset_door_double:"Double door",preset_window:"Window",preset_window_double:"Double window",preset_terrace:"Terrace door",preset_terrace_double:"French doors",preset_garage:"Garage door",flip_hinge:"Swap hinge side",flip_main_leaf:"Swap main leaf",flip_hinge_hint:"Hinges to the other side",flip_swing:"Reverse opening direction",flip_swing_hint:"The door swings into the room or to the other side",main_leaf:"Main leaf (seen from the room)",contact_main:"Contact main leaf",contact_second:"Contact second leaf",tool_outdoor:"Outdoor",tool_measure:"By measure",hint_measure:"Tap the starting point, then type the wall lengths with their direction on the right",measure:"Room by measure",measure_start:"Tap the starting point in the plan, e.g. a room corner.",measure_from:"Start at {x} / {z} m \u2013 tapping moves the start.",measure_length:"Length of the next wall (m)",measure_close:"Close room",measure_undo:"Remove last wall",measure_gap:"Gap to the start: {gap} m (joined when closing)",measure_hint:"Tip: type a length and press an arrow key. With measured inside dimensions, use \u201CClose gaps\u201D afterwards.",rect_by_size:"Rectangle by size",rect_add:"Add rectangle",dir_up:"Up",dir_down:"Down",dir_left:"Left",dir_right:"Right",hint_outdoor:"Drag to draw an outdoor area (lawn, terrace, pool \u2026)",outdoor:"Outdoor area",outdoor_type:"Type",outdoor_hint:"Outdoor lights (path light, garden spot, outdoor wall light) light all outdoor areas and the facade.",out_lawn:"Lawn",out_terrace:"Terrace",out_path:"Path",out_driveway:"Driveway",out_pool:"Pool",out_bed:"Flower bed",out_hedge:"Hedge",out_fence:"Fence",north:"North (\xB0 clockwise from up)",north_hint:"North is needed for the sun (light through the windows).",roof:"Roof",roof_none:"No roof",roof_flat:"Flat roof",roof_gable:"Gable roof",roof_pitch:"Roof pitch (\xB0)",roof_overhang:"Roof overhang (m)",device:"Device",lamp_mount:"Lamp",lamp_ceiling:"Ceiling light",lamp_floor:"Floor lamp",lamp_table:"Table lamp",lamp_wall:"Wall light",marker_height:"Marker height (m)",height_auto:"Automatic height",device_centre:"To room centre",lights_spread:"Spread ceiling lights evenly",devices_search:"Search devices \u2026",devices_more:"+{n} more",devices_less:"less",panel_more:"More devices of the area ({n})",panel_less:"Show less",gaps_close:"Close gaps",gaps_hint:"Join rooms up to 60 cm apart at one shared wall; the gap becomes the interior wall thickness.",gaps_none:"No gaps between rooms found.",gaps_closed:"{n} places closed.",gaps_closed_wall:"{n} places closed, interior wall now {t} m.",fps:"FPS",fps_title:"Performance display (frames per second)",hint_garage:"Tap a wall to add a garage door",opening_garage:"Garage door",garage_hint:"The door follows a garage cover (position or open/closed) or a garage door contact of the room's area.",door_hint:"With a door contact the leaf swings open; without a sensor it stands half open.",hint_door:"Tap a wall to add a door",hint_window:"Tap a wall to add a window",opening_door:"Door",opening_window:"Window",opening_type:"Type",opening_position:"Centre from corner (m)",sill:"Sill height (m)",opening_height:"Height (m)",hinge:"Hinge (seen from the room)",hinge_left:"Left",hinge_right:"Right",cover_entity:"Blind",contact_entity:"Contact",tilt_entity:"Tilt sensor",entity_auto:"Automatic ({name})",entity_auto_none:"Automatic (none found)",entity_none:"None",opening_hint:"Terrace door: a window with sill 0. Automatic uses the blinds and contacts of the room's area.",furniture:"Furniture",furniture_add:"Add furniture",furniture_type:"Item",rotation:"Rotation (\xB0)",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Height (m)",furn_sofa:"Sofa",furn_armchair:"Armchair",furn_table:"Table",furn_chair:"Chair",furn_bed:"Bed",furn_nightstand:"Nightstand",furn_wardrobe:"Wardrobe",furn_shelf:"Shelf",furn_kitchen:"Kitchen unit",furn_fridge:"Fridge",furn_stove:"Stove",furn_sink:"Sink",furn_bathtub:"Bathtub",furn_shower:"Shower",furn_wc:"WC",furn_washbasin:"Washbasin",furn_desk:"Desk",furn_tv_board:"TV board",furn_plant:"Plant",furn_rug:"Rug",furn_stairs:"Stairs",furn_lamp_ceiling:"Ceiling light",furn_lamp_downlight:"Downlight",furn_lamp_spot:"Surface spot",furn_lamp_panel:"LED panel",furn_lamp_uplight:"Floor uplight",furn_lamp_bollard:"Path light",furn_lamp_garden:"Garden spot",furn_radiator:"Radiator",furn_lamp_pendant:"Pendant light",furn_lamp_floor:"Floor lamp",furn_lamp_table:"Table lamp",furn_lamp_wall:"Wall light",furn_led_strip:"LED strip",furn_group_lights:"Lights",furn_entity_light:"Light or switch",furn_entity_climate:"Heating (thermostat)",lamp_hint:"Tap the lamp in 3D to switch it, long press for the quick menu. Switches work too (e.g. a relay for the ceiling light) \u2013 the lamp shines while it is on. Table lamps stand on the furniture below them.",lamp_hint_pendant:"Height = drop below the ceiling. Tap in 3D to switch, long press for details.",theme:"Look",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Day",furnish:"Furnish",size_w:"Width (m)",size_d:"Depth (m)",size_h:"Height (m)",furnish_hint:"Drag furniture and lamps \xB7 they snap to walls \xB7 tap one to turn it",done:"Done",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humidity",heat_short_co2:"CO\u2082",heat_temperature:"Temperature",heat_humidity:"Humidity",heat_co2:"CO\u2082",heat_none_found:"No matching sensors in the rooms' areas.",markers:"Markers",markers_none:"None",markers_important:"Important",markers_all:"All",furn_stool:"Stool",furn_coffee_table:"Coffee table",furn_tv_wall:"TV (wall)",furn_sideboard:"Sideboard",furn_table_round:"Round table",furn_bench:"Bench",furn_corner_bench:"Corner bench",furn_bar_stool:"Bar stool",furn_kitchen_wall:"Wall cabinet",furn_kitchen_tall:"Tall unit with oven",furn_island:"Kitchen island",furn_dishwasher:"Dishwasher",furn_bunk_bed:"Bunk bed",furn_dresser:"Chest of drawers",furn_washer:"Washing machine",furn_dryer:"Dryer",furn_office_chair:"Office chair",furn_tall_cabinet:"Tall cabinet",furn_coat_rack:"Coat rack",furn_group_living:"Living",furn_group_dining:"Dining",furn_group_kitchen:"Kitchen",furn_group_sleeping:"Sleeping",furn_group_bath:"Bath & laundry",furn_group_work:"Work & other",furn_entity:"Device (switch, plug \u2026)",furn_entity_tv:"TV (media player)",furn_power:"Power sensor (W)",furn_links_hint:"With a power sensor the item shows its watts and gets an energy cable.",furn_links_hint_tv:"The screen glows while the TV is on, in the colour of the app (Netflix, YouTube \u2026); the label shows the app or title.",stairs_hint:"The stair rises towards the back (away from the marked front edge) and opens the ceiling of the floor above.",floor_lights:"{n} lights on",floor_open:"{n} open",floor_persons:"{n} people",energy_consumption:"Consumption",energy_grid_import:"Grid import",energy_grid_export:"Export",energy_solar:"Solar",energy_battery:"Battery",energy_tariff:"Tariff",energy:"Energy",energy_meter:"Meter",energy_meter_set:"Place meter",energy_meter_remove:"Remove meter",energy_meter_hint:"Tap the spot of the meter or house connection in the plan.",energy_grid:"Grid (W, + = import)",energy_solar_sensor:"Solar production (W)",energy_battery_sensor:"Battery power (W, + = discharging)",energy_battery_soc:"Battery charge (%)",energy_tariff_sensor:"Tariff (e.g. \u20AC/kWh)",energy_invert:"Invert sign",energy_hint:"Consumers are placed devices with a power sensor (W) \u2013 the sensor itself or one of the same device.",tool_meter:"Meter",hint_meter:"Tap the spot of the meter",presence:"Presence",presence_hint:"Room sensor per person (e.g. ESPresense, Bermuda): its state names the room or area.",presence_sensor:"Room sensor",no_persons:"There are no people in Home Assistant."};function ye(o,e,t={}){let i=((o?.language??navigator.language).startsWith("de")?vn:vi)[e]??vn[e]??e;for(let[r,s]of Object.entries(t))i=i.replace(`{${r}}`,String(s));return i}function L(o,e,t=2){return e.toLocaleString(o?.language??void 0,{maximumFractionDigits:t})}var yi={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function Ie(o){return yi[o]}var yn=ie`
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
`,wn=ie`
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
`;var wi=new URL(import.meta.url),ki=new URL("./floorplan-3d-3d.js?v=b8a4615054c3",wi).href,kn;function $n(){return kn??=import(ki),kn}function Fe(o,e){if(!je(e))return ye(o,`furn_${e}`);let t=j(e);return t?_e(t,o?.language??navigator.language):ye(o,"pack_missing_item")}var xn=new Set(["vertex","room","device","opening","furniture","rotate","resize","outdoor"]),Mn=100,nt=10,$=o=>Math.round(o*1e3)/1e3,it=class extends G{static properties={hass:{attribute:!1},building:{attribute:!1},narrow:{type:Boolean},packs:{attribute:!1},_packMsg:{state:!0},_preview:{state:!0},_doc:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_vertex:{state:!0},_openingId:{state:!0},_furnitureId:{state:!0},_deviceId:{state:!0},_deviceQuery:{state:!0},_expanded:{state:!0},_notice:{state:!0},_history:{state:!0},_spots:{state:!0},_outdoorId:{state:!0},_floorMenu:{state:!0},_openingPreset:{state:!0},_measureLen:{state:!0},_packages:{state:!0},_rectSize:{state:!0},_tool:{state:!0},_draft:{state:!0},_cursor:{state:!0},_guides:{state:!0},_view:{state:!0},_size:{state:!0},_images:{state:!0},_canUndo:{state:!0},_canRedo:{state:!0}};past=[];future=[];drag=null;pointers=new Map;pinch=null;fitted=!1;resizeObserver;loadingImages=new Set;constructor(){super(),this.narrow=!1,this._floorId=null,this._roomId=null,this._vertex=null,this._openingId=null,this._furnitureId=null,this._deviceId=null,this._deviceQuery="",this._expanded=new Set,this._notice=null,this._history=null,this._spots=null,this._outdoorId=null,this._floorMenu=!1,this._openingPreset="door",this._packMsg=null,this._preview=null,this._measureLen=3,this._packages=!1,this._rectSize=[4,3],this._tool="select",this._draft=[],this._cursor=null,this._guides={},this._view={scale:50,ox:40,oy:40},this._size={w:800,h:600},this._images={},this._canUndo=!1,this._canRedo=!1}t(e,t){return ye(this.hass,e,t)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.resizeObserver?.disconnect()}willUpdate(e){e.has("packs")&&It(this.packs??[]),e.has("building")&&this.building!==this._doc&&(this._doc=this.building,this._doc.floors.some(t=>t.id===this._floorId)||(this._floorId=this._doc.floors[0]?.id??null),this.floor?.rooms.some(t=>t.id===this._roomId)||(this._roomId=null))}firstUpdated(){let e=this.renderRoot.querySelector(".fp3d-canvas-wrap");this.resizeObserver=new ResizeObserver(()=>{this._size={w:e.clientWidth,h:e.clientHeight},!this.fitted&&this._size.w>0&&(this.fitted=!0,this.fit())}),this.resizeObserver.observe(e)}updated(){let e=this.floor?.background;e&&!this._images[e.image_id]&&!this.loadingImages.has(e.image_id)&&this.loadImage(e.image_id)}get floor(){return this._doc?.floors.find(e=>e.id===this._floorId)}get room(){return this.floor?.rooms.find(e=>e.id===this._roomId)}get isAdmin(){return this.hass?.user?.is_admin??!0}setDoc(e,t=this._doc){t&&(this.past.push(JSON.stringify(t)),this.past.length>Mn&&this.past.shift(),this.future=[]),this._doc=e,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}change(e,t=this._doc,n=!0){let i=structuredClone(t),r=i.floors.find(s=>s.id===this._floorId);!r&&this._floorId||(e(i,r),this.setDoc(i,n?t:null))}undo(){let e=this.past.pop();e&&(this.future.push(JSON.stringify(this._doc)),this.restore(JSON.parse(e)))}redo(){let e=this.future.pop();e&&(this.past.push(JSON.stringify(this._doc)),this.restore(JSON.parse(e)))}restore(e){this._doc=e,e.floors.some(t=>t.id===this._floorId)||(this._floorId=e.floors[0]?.id??null),this.floor?.rooms.some(t=>t.id===this._roomId)||(this._roomId=null),this._vertex=null,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}toScreen(e){let{scale:t,ox:n,oy:i}=this._view;return[e[0]*t+n,e[1]*t+i]}toWorld(e,t){let{scale:n,ox:i,oy:r}=this._view;return[(e-i)/n,(t-r)/n]}localPoint(e){let t=this.renderRoot.querySelector("svg").getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]}fit(){let e=this.floor?.rooms.flatMap(a=>a.points)??[],t=e.length?H(e):{x0:0,z0:0,x1:10,z1:8},n=1.5,i=t.x1-t.x0+2*n,r=t.z1-t.z0+2*n,s=Math.max(8,Math.min(400,Math.min(this._size.w/i,this._size.h/r)));this._view={scale:s,ox:this._size.w/2-(t.x0+t.x1)/2*s,oy:this._size.h/2-(t.z0+t.z1)/2*s}}zoomAt(e,t,n){let{scale:i,ox:r,oy:s}=this._view,a=Math.max(8,Math.min(600,i*e)),l=a/i;this._view={scale:a,ox:t-(t-r)*l,oy:n-(n-s)*l}}snap(e,t,n=!1){if(this._guides={},n)return e;let i=nt/this._view.scale,r=this.floor?.rooms??[],s=[];for(let c of r)c.points.forEach((m,g)=>{t&&c.id===t.roomId&&(t.index===void 0||t.index===g)||s.push(m)});let a=null,l=i;for(let c of s){let m=Math.hypot(c[0]-e[0],c[1]-e[1]);m<l&&(l=m,a=c)}if(a)return this._guides={point:a},[a[0],a[1]];for(let c of r)if(!(t&&c.id===t.roomId))for(let m=0;m<c.points.length;m++){let g=c.points[m],y=c.points[(m+1)%c.points.length],_=y[0]-g[0],w=y[1]-g[1],M=_*_+w*w;if(M<1e-9)continue;let x=((e[0]-g[0])*_+(e[1]-g[1])*w)/M;if(x<=0||x>=1)continue;let z=[g[0]+x*_,g[1]+x*w],S=Math.hypot(z[0]-e[0],z[1]-e[1]),E=this._doc.settings.grid;Math.abs(w)<1e-9&&(z[0]=Math.min(Math.max(Math.round(z[0]/E)*E,Math.min(g[0],y[0])),Math.max(g[0],y[0]))),Math.abs(_)<1e-9&&(z[1]=Math.min(Math.max(Math.round(z[1]/E)*E,Math.min(g[1],y[1])),Math.max(g[1],y[1]))),S<l&&(l=S,a=z)}if(a)return this._guides={point:a},[$(a[0]),$(a[1])];let d=this._doc.settings.grid,h=[$(Math.round(e[0]/d)*d),$(Math.round(e[1]/d)*d)],p=i,f=i,u={};for(let c of s)Math.abs(c[0]-e[0])<p&&(p=Math.abs(c[0]-e[0]),h[0]=c[0],u.x=c[0]),Math.abs(c[1]-e[1])<f&&(f=Math.abs(c[1]-e[1]),h[1]=c[1],u.z=c[1]);return this._guides=u,h}onPointerDown(e){e.currentTarget.setPointerCapture(e.pointerId);let n=this.localPoint(e);if(this.pointers.set(e.pointerId,n),this.pointers.size===2){this.drag&&xn.has(this.drag.kind)&&"moved"in this.drag&&this.drag.moved&&"base"in this.drag&&this.restoreLive(this.drag.base),this.drag=null,this.pinch=this.pinchState();return}if(this.pointers.size>2)return;if(e.button===1||e.button===2||!this.floor){this.drag={kind:"pan",last:n};return}let i=this.toWorld(...n),r=e.target;if(this._tool==="rect"||this._tool==="outdoor"){let m=this.snap(i,void 0,e.altKey);this.drag={kind:"rect",start:m,end:m,outdoor:this._tool==="outdoor"};return}if(this._tool==="polygon"||this._tool==="measure"){this.drag={kind:"tap",startScreen:n,last:n,panning:!1};return}if(this._tool==="opening"){this.placeOpening(this._openingPreset,n)||(this.drag={kind:"pan",last:n});return}if(this._tool==="meter"){if(this.isAdmin&&this._floorId){let m=this._doc.settings.grid,[g,y]=i.map(_=>$(Math.round(_/m)*m));this.setEnergy({meter:{floor_id:this._floorId,x:g,z:y}})}this._tool="select";return}let s=r.closest("[data-device]");if(s&&this.isAdmin){this.drag={kind:"device",entityId:s.getAttribute("data-device"),start:i,startScreen:n,base:this._doc,moved:!1};return}let a=r.closest("[data-opening]");if(a){let m=a.getAttribute("data-opening");this.selectItem("opening",m),this.drag=this.isAdmin?{kind:"opening",id:m,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let l=r.closest("[data-resize]");if(l&&this.isAdmin){let[m,g,y]=l.getAttribute("data-resize").split(":");this.drag={kind:"resize",id:m,corner:[g==="1"?1:-1,y==="1"?1:-1],base:this._doc,moved:!1};return}let d=r.closest("[data-rotate]");if(d&&this.isAdmin){this.drag={kind:"rotate",id:d.getAttribute("data-rotate"),base:this._doc,moved:!1};return}let h=r.closest("[data-furniture]");if(h&&!r.closest("[data-vertex], [data-mid]")){let m=h.getAttribute("data-furniture");this.selectItem("furniture",m),this.drag=this.isAdmin?{kind:"furniture",id:m,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let p=r.closest("[data-vertex]"),f=r.closest("[data-mid]");if(p&&this.room&&this.isAdmin){this._vertex=Number(p.getAttribute("data-vertex")),this.drag={kind:"vertex",roomId:this.room.id,index:this._vertex,base:this._doc,moved:!1};return}if(f&&this.room&&this.isAdmin){let m=Number(f.getAttribute("data-mid")),g=this.room.points,y=g[m],_=g[(m+1)%g.length],w=[$((y[0]+_[0])/2),$((y[1]+_[1])/2)],M=this._doc,x=this.room.id;this.change((z,S)=>{S.rooms.find(A=>A.id===x).points.splice(m+1,0,w);let E=Math.hypot(w[0]-y[0],w[1]-y[1]);for(let A of S.openings)A.room_id===x&&(A.edge>m?A.edge+=1:A.edge===m&&A.offset>E&&(A.edge=m+1,A.offset=$(A.offset-E)))},M,!1),this._vertex=m+1,this.drag={kind:"vertex",roomId:x,index:m+1,base:M,moved:!0};return}let u=r.closest("[data-outdoor]");if(u&&!r.closest("[data-room]")&&!this.roomAt(i)){let m=u.getAttribute("data-outdoor");this.selectItem("outdoor",m),this.drag=this.isAdmin?{kind:"outdoor",id:m,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let c=r.closest("[data-room]")?.getAttribute("data-room")??this.roomAt(i);if(c){c!==this._roomId&&(this._vertex=null),this.selectItem("room",c),this.drag=this.isAdmin&&this._tool!=="furniture"?{kind:"room",roomId:c,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}this.selectItem("room",null),this.drag={kind:"pan",last:n}}onPointerMove(e){let t=this.localPoint(e);if(this.pointers.has(e.pointerId)&&this.pointers.set(e.pointerId,t),this.pinch){let r=this.pinchState();r&&(this.zoomAt(r.dist/Math.max(1,this.pinch.dist),...r.mid),this._view={...this._view,ox:this._view.ox+r.mid[0]-this.pinch.mid[0],oy:this._view.oy+r.mid[1]-this.pinch.mid[1]},this.pinch=r);return}let n=this.toWorld(...t),i=this.drag;if(!i){this._tool!=="select"&&this._tool!=="furniture"&&this.floor&&(this._cursor=this.snap(n,void 0,e.altKey));return}switch(i.kind){case"pan":this._view={...this._view,ox:this._view.ox+t[0]-i.last[0],oy:this._view.oy+t[1]-i.last[1]},i.last=t;break;case"tap":(i.panning||Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])>6)&&(i.panning=!0,this._view={...this._view,ox:this._view.ox+t[0]-i.last[0],oy:this._view.oy+t[1]-i.last[1]}),i.last=t;break;case"rect":i.end=this.snap(n,void 0,e.altKey),this.requestUpdate();break;case"vertex":{let r=this.snap(n,{roomId:i.roomId,index:i.index},e.altKey);i.moved=!0,this.change((s,a)=>{a.rooms.find(l=>l.id===i.roomId).points[i.index]=r},i.base,!1);break}case"room":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let r=i.base.floors.find(d=>d.id===this._floorId)?.rooms.find(d=>d.id===i.roomId);if(!r)return;let s=this.roomDelta(r,[n[0]-i.start[0],n[1]-i.start[1]],e.altKey),a=i.base.floors.find(d=>d.id===this._floorId),l=new Set(a.placements.filter(d=>O([d.x,d.z],r.points)).map(d=>d.entity_id));this.change((d,h)=>{let p=h.rooms.find(f=>f.id===i.roomId);p.points=r.points.map(([f,u])=>[$(f+s[0]),$(u+s[1])]),h.placements=a.placements.map(f=>l.has(f.entity_id)?{...f,x:$(f.x+s[0]),z:$(f.z+s[1])}:f)},i.base,!1);break}case"opening":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let r=i.base.floors.find(d=>d.id===this._floorId),s=r?.openings.find(d=>d.id===i.id),a=r?.rooms.find(d=>d.id===s?.room_id);if(!s||!a)return;let l=this.offsetOnEdge(a,s.edge,n,s.width,e.altKey);this.change((d,h)=>Object.assign(h.openings.find(p=>p.id===i.id),{offset:l}),i.base,!1);break}case"furniture":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let r=i.base.floors.find(p=>p.id===this._floorId)?.furniture.find(p=>p.id===i.id);if(!r)return;let s=e.altKey?.01:this._doc.settings.grid,a=$(Math.round((r.x+n[0]-i.start[0])/s)*s),l=$(Math.round((r.z+n[1]-i.start[1])/s)*s),d=r.rotation,h=e.altKey?null:this.snapToWall({...r,x:a,z:l});h&&({x:a,z:l,rotation:d}=h),this.change((p,f)=>Object.assign(f.furniture.find(u=>u.id===i.id),{x:a,z:l,rotation:d}),i.base,!1);break}case"outdoor":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let r=i.base.floors.find(d=>d.id===this._floorId)?.outdoor.find(d=>d.id===i.id);if(!r)return;let s=e.altKey?.01:this._doc.settings.grid,a=Math.round((n[0]-i.start[0])/s)*s,l=Math.round((n[1]-i.start[1])/s)*s;this.change((d,h)=>h.outdoor.find(p=>p.id===i.id).points=r.points.map(([p,f])=>[$(p+a),$(f+l)]),i.base,!1);break}case"resize":{i.moved=!0;let r=i.base.floors.find(a=>a.id===this._floorId)?.furniture.find(a=>a.id===i.id);if(!r)return;let s=Wt(r,i.corner,n,e.altKey?.01:this._doc.settings.grid);this.change((a,l)=>Object.assign(l.furniture.find(d=>d.id===i.id),s),i.base,!1);break}case"rotate":{i.moved=!0;let r=i.base.floors.find(l=>l.id===this._floorId)?.furniture.find(l=>l.id===i.id);if(!r)return;let s=Math.atan2(-(n[0]-r.x),n[1]-r.z)*180/Math.PI,a=e.altKey?1:15;s=(Math.round(s/a)*a%360+360)%360,this.change((l,d)=>Object.assign(d.furniture.find(h=>h.id===i.id),{rotation:s}),i.base,!1);break}case"device":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let r=i.base.floors.find(d=>d.id===this._floorId)?.placements.find(d=>d.entity_id===i.entityId);if(!r)return;let s=e.altKey?.01:this._doc.settings.grid,a=$(Math.round((r.x+n[0]-i.start[0])/s)*s),l=$(Math.round((r.z+n[1]-i.start[1])/s)*s);this.change((d,h)=>Object.assign(h.placements.find(p=>p.entity_id===i.entityId),{x:a,z:l}),i.base,!1);break}}}onPointerUp(e){if(this.pointers.delete(e.pointerId),this.pinch){this.pointers.size<2&&(this.pinch=null);return}let t=this.drag;if(this.drag=null,!t||e.type==="pointercancel"){t&&xn.has(t.kind)&&"moved"in t&&t.moved&&"base"in t&&this.restoreLive(t.base);return}let n=this.localPoint(e);switch(t.kind){case"rect":{let[i,r]=t.start,[s,a]=t.end;if(Math.abs(s-i)>=.2&&Math.abs(a-r)>=.2){let l=[Math.min(i,s),Math.min(r,a)],d=[Math.max(i,s),Math.max(r,a)],h=[l,[d[0],l[1]],d,[l[0],d[1]]];t.outdoor?this.addOutdoor(h):this.addRoom(h)}this._guides={};break}case"tap":if(t.panning)break;this._tool==="measure"?this._draft=[this.snap(this.toWorld(...n),void 0,e.altKey)]:this.addDraftPoint(this.snap(this.toWorld(...n),void 0,e.altKey),n);break;case"opening":case"furniture":case"rotate":case"resize":case"outdoor":t.moved&&this.pushHistory(t.base);break;case"device":t.moved?this.pushHistory(t.base):this.selectItem("device",t.entityId);break;case"vertex":case"room":t.moved&&this.pushHistory(t.base),this._guides={};break;default:break}}onWheel(e){e.preventDefault();let[t,n]=this.localPoint(e);this.zoomAt(Math.exp(-e.deltaY*(e.deltaMode===1?.05:.0015)),t,n)}pinchState(){let e=[...this.pointers.values()];if(e.length<2)return null;let[t,n]=e;return{dist:Math.hypot(t[0]-n[0],t[1]-n[1]),mid:[(t[0]+n[0])/2,(t[1]+n[1])/2]}}pushHistory(e){this.past.push(JSON.stringify(e)),this.past.length>Mn&&this.past.shift(),this.future=[],this._canUndo=!0,this._canRedo=!1}restoreLive(e){this._doc=e,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}roomDelta(e,t,n){if(n)return t;let i=this._doc.settings.grid,r=[Math.round(t[0]/i)*i,Math.round(t[1]/i)*i],a=nt/this._view.scale;this._guides={};for(let l of this.floor?.rooms??[])if(l.id!==e.id)for(let d of l.points)for(let h of e.points){let p=Math.hypot(h[0]+t[0]-d[0],h[1]+t[1]-d[1]);p<a&&(a=p,r=[d[0]-h[0],d[1]-h[1]],this._guides={point:d})}return r}roomAt(e){return(this.floor?.rooms??[]).filter(i=>O(e,i.points)).sort((i,r)=>ae(i.points)-ae(r.points))[0]?.id??null}addDraftPoint(e,t){let n=this._draft;if(n.length>=3){let[r,s]=this.toScreen(n[0]);if(Math.hypot(r-t[0],s-t[1])<14){this.closeDraft();return}}let i=n[n.length-1];i&&Math.hypot(i[0]-e[0],i[1]-e[1])<1e-6||(this._draft=[...n,e])}closeDraft(){this._draft.length>=3&&ae(this._draft)>.05&&this.addRoom(this._draft),this._draft=[],this._cursor=null,this._guides={}}measureStep(e){let t=this._draft[this._draft.length-1];if(!t||!(this._measureLen>0))return;let n=oe(t,this._measureLen,e),i=this._draft[0];if(this._draft.length>=3&&Math.hypot(n[0]-i[0],n[1]-i[1])<.01){this.closeDraft();return}this._draft=[...this._draft,n]}rectBySize(){let e=this._draft[0]??[0,0],[t,n]=this._rectSize;t>.1&&n>.1&&(this.addRoom([e,oe(e,t,"right"),oe(oe(e,t,"right"),n,"down"),oe(e,n,"down")]),this._draft=[])}renderMeasureForm(){let e=this._draft,t=e[0],n=e[e.length-1],i=t&&n&&e.length>1?Math.hypot(n[0]-t[0],n[1]-t[1]):0,r=[["up","\u2191"],["left","\u2190"],["right","\u2192"],["down","\u2193"]],s=a=>L(this.hass,a,2);return v`<section>
      <h3>${this.t("measure")}</h3>
      ${t?v`<p class="fp3d-sub">${this.t("measure_from",{x:s(t[0]),z:s(t[1])})}</p>
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
                ${r.map(([a,l])=>v`<button class="fp3d-btn fp3d-arrow-${a}" title=${this.t(`dir_${a}`)} @click=${()=>this.measureStep(a)}>${l}</button>`)}
              </div>
            </div>
            ${e.length>1?v`<ol class="fp3d-measure-list">
                  ${e.slice(1).map((a,l)=>v`<li>${s(Math.hypot(a[0]-e[l][0],a[1]-e[l][1]))} m</li>`)}
                </ol>`:b}
            <div class="fp3d-actions">
              <button class="fp3d-btn fp3d-primary" ?disabled=${e.length<3} @click=${()=>this.closeDraft()}>${this.t("measure_close")}</button>
              <button class="fp3d-btn" ?disabled=${e.length<2} @click=${()=>this._draft=e.slice(0,-1)}>${this.t("measure_undo")}</button>
            </div>
            ${e.length>=3?v`<p class="fp3d-sub">${this.t("measure_gap",{gap:s(i)})}</p>`:b}`:v`<p class="fp3d-sub">${this.t("measure_start")}</p>`}
      <h4 class="fp3d-lib-head">${this.t("rect_by_size")}</h4>
      <div class="fp3d-form">
        ${this.num(this.t("width"),this._rectSize[0],a=>this._rectSize=[Math.max(.1,a),this._rectSize[1]],.01,.1)}
        ${this.num(this.t("depth"),this._rectSize[1],a=>this._rectSize=[this._rectSize[0],Math.max(.1,a)],.01,.1)}
        <button class="fp3d-btn fp3d-wide" @click=${()=>this.rectBySize()}>${this.t("rect_add")}</button>
      </div>
      <p class="fp3d-sub">${this.t("measure_hint")}</p>
    </section>`}addOutdoor(e){if(!this.floor)return;let t={id:T("outdoor"),type:"lawn",points:e.map(([n,i])=>[$(n),$(i)])};this.change((n,i)=>i.outdoor.push(t)),this.selectItem("outdoor",t.id),this._tool="select"}get outdoorArea(){return this._outdoorId?this.floor?.outdoor.find(e=>e.id===this._outdoorId):void 0}updateOutdoor(e){let t=this._outdoorId;this.change((n,i)=>Object.assign(i.outdoor.find(r=>r.id===t),e))}deleteOutdoor(){let e=this._outdoorId;!e||!this.isAdmin||(this.change((t,n)=>n.outdoor=n.outdoor.filter(i=>i.id!==e)),this._outdoorId=null)}duplicateOutdoor(){let e=this.outdoorArea;if(!e||!this.isAdmin)return;let t={...e,id:T("outdoor"),points:e.points.map(([n,i])=>[$(n+.5),$(i+.5)])};this.change((n,i)=>i.outdoor.push(t)),this.selectItem("outdoor",t.id)}addRoom(e){if(!this.floor)return;let t=T("room"),n=this.floor.rooms.length+1;this.change((i,r)=>r.rooms.push({id:t,name:this.t("new_room",{n}),area_id:null,points:e.map(([s,a])=>[$(s),$(a)]),floor_material:"wood"})),this._roomId=t,this._vertex=null,this._tool="select"}onKey=e=>{if(e.composedPath().some(i=>i instanceof HTMLInputElement||i instanceof HTMLSelectElement||i instanceof HTMLTextAreaElement)||!this.isConnected||!this.offsetParent)return;let n=e.ctrlKey||e.metaKey;n&&e.key.toLowerCase()==="z"?(e.preventDefault(),e.shiftKey?this.redo():this.undo()):n&&e.key.toLowerCase()==="y"?(e.preventDefault(),this.redo()):n&&e.key.toLowerCase()==="d"?(e.preventDefault(),this.duplicateRoom()):e.key==="Delete"||e.key==="Backspace"&&(this._tool==="select"||this._tool==="furniture")?this._deviceId?(this.removeDevice(this._deviceId),this._deviceId=null):this._outdoorId?this.deleteOutdoor():this._openingId?this.deleteOpening():this._furnitureId?this.deleteFurniture():this._vertex!==null?this.deleteVertex(this._vertex):this.deleteRoom():e.key.toLowerCase()==="r"&&!n&&this._furnitureId?this.rotateFurniture(e.shiftKey?-90:90):e.key==="Backspace"&&this._tool==="polygon"?this._draft=this._draft.slice(0,-1):e.key==="Enter"&&this._tool==="polygon"?this.closeDraft():e.key==="Escape"&&(this._draft.length?this._draft=[]:this._tool!=="select"?this._tool="select":this.selectItem("room",null),this._cursor=null)};get freeHaFloors(){let e=new Set(this._doc.floors.map(t=>t.ha_floor));return Object.values(this.hass?.floors??{}).filter(t=>!e.has(t.floor_id)).sort((t,n)=>(t.level??99)-(n.level??99)||t.name.localeCompare(n.name))}unplacedAreas(e){if(!e.ha_floor)return[];let t=new Set(this._doc.floors.flatMap(n=>n.rooms.map(i=>i.area_id)));return Object.values(this.hass?.areas??{}).filter(n=>n.floor_id===e.ha_floor&&!t.has(n.area_id)).sort((n,i)=>n.name.localeCompare(i.name))}addFloor(e=null){let t=this._doc.floors,n=T("floor"),i=e?.name??(t.length===0?this.t("default_floor"):this.t("new_floor",{n:t.length})),r={...Ht(n,i,Ct(t,e?.level)),ha_floor:e?.floor_id??null},s=structuredClone(this._doc),a=s.floors.findIndex(l=>l.elevation>r.elevation);s.floors.splice(a<0?s.floors.length:a,0,r),this.setDoc(s),this._floorId=n,this._roomId=null,this._floorMenu=!1,this.fit()}addAreaRooms(e){let t=this.unplacedAreas(e);if(!t.length)return;let n=Vt(e,t,()=>T("room"));this.change((i,r)=>r.rooms.push(...n)),this.fit()}moveFloor(e){let t=this._doc.floors.findIndex(r=>r.id===this._floorId),n=t+e;if(t<0||n<0||n>=this._doc.floors.length)return;let i=structuredClone(this._doc);[i.floors[t],i.floors[n]]=[i.floors[n],i.floors[t]],this.setDoc(i)}deleteFloor(){let e=this.floor;if(!e||!confirm(this.t("delete_floor_confirm",{name:e.name})))return;let t=structuredClone(this._doc);t.floors=t.floors.filter(n=>n.id!==e.id),this.setDoc(t),this._floorId=t.floors[0]?.id??null,this._roomId=null}deleteRoom(){let e=this._roomId;!e||!this.isAdmin||(this.change((t,n)=>{let i=n.rooms.find(r=>r.id===e);n.rooms=n.rooms.filter(r=>r.id!==e),n.openings=n.openings.filter(r=>r.room_id!==e),i&&(n.placements=n.placements.filter(r=>!O([r.x,r.z],i.points)))}),this._roomId=null,this._vertex=null)}duplicateRoom(){let e=this.room;if(!e||!this.isAdmin)return;let t=T("room");this.change((n,i)=>i.rooms.push({...structuredClone(e),id:t,points:e.points.map(([r,s])=>[$(r+.5),$(s+.5)])})),this._roomId=t}selectItem(e,t){if(this._notice=null,this._outdoorId=e==="outdoor"?t:null,e==="outdoor"&&(this._roomId=null),(e!=="room"||t!==this._roomId)&&(this._vertex=null),this._roomId=e==="room"?t:this._roomId,this._openingId=e==="opening"?t:null,this._furnitureId=e==="furniture"?t:null,this._deviceId=e==="device"?t:null,e==="device"&&t){let n=this.floor?.placements.find(i=>i.entity_id===t);this._roomId=(n&&this.roomAt([n.x,n.z]))??this._roomId}e==="opening"&&t&&(this._roomId=this.floor?.openings.find(n=>n.id===t)?.room_id??this._roomId)}get opening(){return this._openingId?this.floor?.openings.find(e=>e.id===this._openingId):void 0}get furnitureItem(){return this._furnitureId?this.floor?.furniture.find(e=>e.id===this._furnitureId):void 0}offsetOnEdge(e,t,n,i,r){let s=e.points[t],a=e.points[(t+1)%e.points.length],l=Math.hypot(a[0]-s[0],a[1]-s[1])||1,d=((n[0]-s[0])*(a[0]-s[0])+(n[1]-s[1])*(a[1]-s[1]))/l,h=r?.01:this._doc.settings.grid,p=Math.min(i,l)/2;return $(Math.min(l-p,Math.max(p,Math.round(d/h)*h)))}placeOpening(e,t){let n=this.floor;if(!n||!this.isAdmin)return!1;let i=null;for(let c of n.rooms)for(let m=0;m<c.points.length;m++){let[g,y]=this.toScreen(c.points[m]),[_,w]=this.toScreen(c.points[(m+1)%c.points.length]),M=(_-g)**2+(w-y)**2||1,x=Math.min(1,Math.max(0,((t[0]-g)*(_-g)+(t[1]-y)*(w-y))/M)),z=Math.hypot(t[0]-g-(_-g)*x,t[1]-y-(w-y)*x),S=z-(c.id===this._roomId?.5:0);z<nt*2.2&&(!i||S<i.d)&&(i={room:c,edge:m,d:S})}if(!i)return!1;let{room:r,edge:s}=i,a=r.points[s],l=r.points[(s+1)%r.points.length],d=Math.hypot(l[0]-a[0],l[1]-a[1]),h=Ee[e],p=h.type,f=$(Math.min(h.width,Math.max(.3,d-.1))),u={id:T("opening"),room_id:r.id,edge:s,offset:this.offsetOnEdge(r,s,this.toWorld(...t),f,!1),width:f,type:p,sill:h.sill,height:h.height,hinge:"left",leaves:h.leaves,swing:"in",cover:null,contact:null,contact2:null,tilt:null};return this.change((c,m)=>m.openings.push(u)),this._tool="select",this.selectItem("opening",u.id),!0}setOpeningPreset(e,t){let n=Ee[t];this._openingPreset=t;let i=Ye(e)===t;this.updateOpening({type:n.type,leaves:n.leaves,sill:n.sill,height:n.height,...i?{}:{width:n.width}})}updateOpening(e){let t=this._openingId;this.change((n,i)=>Object.assign(i.openings.find(r=>r.id===t),e))}deleteOpening(){let e=this._openingId;!e||!this.isAdmin||(this.change((t,n)=>n.openings=n.openings.filter(i=>i.id!==e)),this._openingId=null)}addFurniture(e){let t=this.floor;if(!t||!this.isAdmin)return;let[n,i,r]=Ze(e),s=this._doc.floors.filter(f=>f.elevation>t.elevation).sort((f,u)=>f.elevation-u.elevation)[0],a=e==="stairs"?$(s?s.elevation-t.elevation:t.height+.25):r,l=this.room,[d,h]=l?Z(l.points):this.toWorld(this._size.w/2,this._size.h/2),p={id:T("furniture"),type:e,x:$(d),z:$(h),rotation:0,w:n,d:i,h:a,variant:null};this.change((f,u)=>u.furniture.push(p)),this.selectItem("furniture",p.id)}snapToWall(e){return this.floor?dn(this.floor,e,this._doc.settings.wall_interior):null}updateFurniture(e){let t=this._furnitureId;this.change((n,i)=>Object.assign(i.furniture.find(r=>r.id===t),e))}rotateFurniture(e){let t=this.furnitureItem;!t||!this.isAdmin||this.updateFurniture({rotation:((t.rotation+e)%360+360)%360})}deleteFurniture(){let e=this._furnitureId;!e||!this.isAdmin||(this.change((t,n)=>n.furniture=n.furniture.filter(i=>i.id!==e)),this._furnitureId=null)}duplicateFurniture(){let e=this.furnitureItem;if(!e||!this.isAdmin)return;let t={...structuredClone(e),id:T("furniture"),x:$(e.x+.3),z:$(e.z+.3)};this.change((n,i)=>i.furniture.push(t)),this.selectItem("furniture",t.id)}placeDevices(e){let t=this.room;if(!t||!e.length||!this.isAdmin)return;let n=new Set(e);this.change((i,r)=>{for(let a of i.floors)a.placements=a.placements.filter(l=>!n.has(l.entity_id)),a.furniture=a.furniture.filter(l=>!(ee(l.type)&&l.entity&&n.has(l.entity)));let s=[...r.placements.map(a=>[a.x,a.z]),...r.furniture.filter(a=>ee(a.type)).map(a=>[a.x,a.z])];for(let a of tn(t,e,s)){if(!a.entity_id.startsWith("light.")){r.placements.push(a);continue}let[l,d,h]=B.lamp_ceiling;r.furniture.push({id:T("furniture"),type:"lamp_ceiling",x:a.x,z:a.z,rotation:0,w:l,d,h,variant:null,entity:a.entity_id,power:null})}})}get device(){return this._deviceId?this.floor?.placements.find(e=>e.entity_id===this._deviceId):void 0}updateDevice(e){let t=this._deviceId;this.change((n,i)=>Object.assign(i.placements.find(r=>r.entity_id===t),e))}centreDevice(){let e=this.device,t=e?this.roomAt([e.x,e.z]):null,n=this.floor?.rooms.find(s=>s.id===t);if(!e||!n)return;let[i,r]=Z(n.points);this.updateDevice({x:$(i),z:$(r)})}spreadCeilingLights(e){let t=this.floor;if(!t)return;let n=t.placements.filter(p=>I(p.entity_id)==="light"&&(p.mount??"ceiling")==="ceiling"&&O([p.x,p.z],e.points));if(n.length<2)return;let i=H(e.points),r=i.x1-i.x0,s=i.z1-i.z0,a=Math.max(1,Math.round(Math.sqrt(n.length*r/Math.max(.1,s)))),l=Math.ceil(n.length/a),d=n.map((p,f)=>{let u=Math.floor(f/a),c=u===l-1?n.length-a*(l-1):a,m=f-u*a;return[$(i.x0+r/c*(m+.5)),$(i.z0+s/l*(u+.5))]}),h=n.map(p=>p.entity_id);this.change((p,f)=>{h.forEach((u,c)=>Object.assign(f.placements.find(m=>m.entity_id===u),{x:d[c][0],z:d[c][1]}))})}closeFloorGaps(){let e=this.floor;if(!e||!this.isAdmin)return;let{rooms:t,gaps:n}=an(e.rooms);if(!n.length){this._notice=this.t("gaps_none");return}let i=ln(n);this.change((r,s)=>{s.rooms=t,i&&(r.settings.wall_interior=i)}),this._notice=i?this.t("gaps_closed_wall",{n:n.length,t:L(this.hass,i,2)}):this.t("gaps_closed",{n:n.length})}removeDevice(e){this.change(t=>{for(let n of t.floors)n.placements=n.placements.filter(i=>i.entity_id!==e),n.furniture=n.furniture.filter(i=>!(ee(i.type)&&i.entity===e))})}deleteVertex(e){let t=this.room;if(!t||t.points.length<=3)return;let n=t.points.length,i=(e-1+n)%n;this.change((r,s)=>{s.rooms.find(a=>a.id===t.id).points.splice(e,1),s.openings=s.openings.filter(a=>a.room_id!==t.id||a.edge!==e&&a.edge!==i).map(a=>a.room_id===t.id&&a.edge>e?{...a,edge:a.edge-1}:a)}),this._vertex=null}updateFloor(e){this.change((t,n)=>Object.assign(n,e))}updateRoom(e){let t=this._roomId;this.change((n,i)=>Object.assign(i.rooms.find(r=>r.id===t),e))}setArea(e){let t=this.room;if(!t)return;let n=e?this.hass?.areas?.[e]:void 0,i=!t.name||/^(Raum|Room) \d+$/.test(t.name)||Object.values(this.hass?.areas??{}).some(r=>r.name===t.name);this.updateRoom({area_id:e||null,...n&&i?{name:n.name}:{}})}setRect(e,t){let n=this.room;if(!n||!Number.isFinite(t))return;let i=H(n.points),{x0:r,z0:s,x1:a,z1:l}=i;e==="x"&&([r,a]=[t,t+(a-r)]),e==="z"&&([s,l]=[t,t+(l-s)]),e==="w"&&t>.05&&(a=r+t),e==="d"&&t>.05&&(l=s+t),this.updateRoom({points:[[$(r),$(s)],[$(a),$(s)],[$(a),$(l)],[$(r),$(l)]]})}setPoint(e,t,n){let i=this.room;if(!i||!Number.isFinite(n))return;let r=i.points.map(s=>[...s]);r[e][t]=$(n),this.updateRoom({points:r})}async loadImage(e){this.loadingImages.add(e);try{let t=await xt(this.hass,e),n=new Image;n.src=t,await n.decode(),this._images={...this._images,[e]:{url:t,aspect:n.naturalHeight/n.naturalWidth}}}catch{}}async uploadBackground(e){let t=e.target,n=t.files?.[0];if(t.value="",!n)return;let i=await createImageBitmap(n),r=Math.min(1,2048/Math.max(i.width,i.height)),s=document.createElement("canvas");s.width=Math.round(i.width*r),s.height=Math.round(i.height*r),s.getContext("2d").drawImage(i,0,0,s.width,s.height);let a=s.toDataURL("image/jpeg",.85),l=T("img");await Mt(this.hass,l,a),this._images={...this._images,[l]:{url:a,aspect:s.height/s.width}};let d=this.floor?.rooms.length?H(this.floor.rooms.flatMap(h=>h.points)):null;this.updateFloor({background:{image_id:l,x:d?d.x0:0,z:d?d.z0:0,width:d?Math.max(4,$(d.x1-d.x0)):12,opacity:.5}})}render(){let e=this.floor,t=e?_n(e.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior}):null;return v`
      ${this.renderPreview()}
      <div class="fp3d-editor ${this.narrow?"fp3d-narrow":""}">
        <div class="fp3d-main">
          <div class="fp3d-toolbar">
            <div class="fp3d-seg" role="group" aria-label=${this.t("tool_select")}>
              ${["select","rect","polygon","measure","opening","furniture","outdoor"].map(n=>v`<button
                  aria-pressed=${this._tool===n}
                  ?disabled=${!e||!this.isAdmin&&n!=="select"}
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
            ${t?.warnings.length?v`<span class="fp3d-warn">${this.t("overlap_warning")}</span>`:b}
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
              ${this.renderBackground(e)} ${this.renderGrid()} ${this.renderGhost()} ${t?this.renderWalls(t.walls):b}
              ${e?this.renderOutdoor(e):b} ${e?this.renderRooms(e):b} ${e?this.renderFurniture(e):b}
              ${e&&t?this.renderOpenings(e,t.walls):b} ${e?this.renderMeter(e):b}
              ${e&&this._tool==="select"?this.renderDevices(e):b}
              ${this.room&&this.isAdmin&&this._tool==="select"&&!this._openingId&&!this._furnitureId?this.renderHandles(this.room):b}
              ${this.renderDraft()} ${this.renderGuides()}
            </svg>
            <p class="fp3d-hint">${e?this.t(`hint_${this._tool}`):this.t("hint_empty")}</p>
          </div>
        </div>
        <aside class="fp3d-side">${this.renderSide(e)}</aside>
      </div>
    `}renderBackground(e){let t=e?.background,n=t?this._images[t.image_id]:void 0;if(!t||!n)return b;let[i,r]=this.toScreen([t.x,t.z]),s=t.width*this._view.scale;return k`<image href=${n.url} x=${i} y=${r} width=${s} height=${s*n.aspect} opacity=${t.opacity} preserveAspectRatio="none" pointer-events="none" />`}renderGrid(){let{scale:e}=this._view,{w:t,h:n}=this._size,i=e>=90?.1:e>=30?.5:1,r=e>=20?1:5,[s,a]=this.toWorld(0,0),[l,d]=this.toWorld(t,n),h=[],p=(c,m)=>{for(let g=Math.ceil(s/c)*c;g<=l;g+=c){let y=this.toScreen([g,0])[0];h.push(k`<line class=${m} x1=${y} y1="0" x2=${y} y2=${n} />`)}for(let g=Math.ceil(a/c)*c;g<=d;g+=c){let y=this.toScreen([0,g])[1];h.push(k`<line class=${m} x1="0" y1=${y} x2=${t} y2=${y} />`)}};i<r&&p(i,"fp3d-grid-minor"),p(r,"fp3d-grid-major");let[f,u]=this.toScreen([0,0]);return h.push(k`<circle class="fp3d-origin" cx=${f} cy=${u} r="3" />`),k`<g pointer-events="none">${h}</g>`}renderGhost(){let e=this._doc?.floors.findIndex(n=>n.id===this._floorId)??-1,t=e>0?this._doc.floors[e-1]:void 0;return t?k`<g pointer-events="none">${t.rooms.map(n=>k`<polygon class="fp3d-ghost" points=${n.points.map(i=>this.toScreen(i).join(",")).join(" ")} />`)}</g>`:b}renderWalls(e){return k`<g pointer-events="none">${e.map(t=>k`<polygon class=${t.exterior?"fp3d-wall fp3d-wall-ext":"fp3d-wall"} points=${t.footprint.map(n=>this.toScreen(n).join(",")).join(" ")} />`)}</g>`}renderOutdoor(e){return k`<g>${e.outdoor.map(t=>{let n=t.points.map(l=>this.toScreen(l).join(",")).join(" "),[i,r]=this.toScreen(Z(t.points)),s=H(t.points),a=Math.min(s.x1-s.x0,s.z1-s.z0)*this._view.scale>40;return k`<g data-outdoor=${t.id} class=${`fp3d-out fp3d-out-${t.type}${t.id===this._outdoorId?" fp3d-out-sel":""}`}>
        <polygon points=${n} />
        ${a?k`<text x=${i} y=${r+4}>${this.t(`out_${t.type}`)}</text>`:b}
      </g>`})}</g>`}renderOutdoorForm(e){let t=this.isAdmin,n=Je(e.points),i=H(e.points),r=(s,a)=>{let{x0:l,z0:d,x1:h,z1:p}=i;s==="x"&&([l,h]=[a,a+(h-l)]),s==="z"&&([d,p]=[a,a+(p-d)]),s==="w"&&(h=l+Math.max(.1,a)),s==="d"&&(p=d+Math.max(.1,a)),this.updateOutdoor({points:[[l,d],[h,d],[h,p],[l,p]].map(([f,u])=>[$(f),$(u)])})};return v`<section>
      <h3>${this.t("outdoor")}</h3>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("outdoor_type")}
          <select ?disabled=${!t} @change=${s=>this.updateOutdoor({type:s.target.value})}>
            ${Ot.map(s=>v`<option value=${s} ?selected=${s===e.type}>${this.t(`out_${s}`)}</option>`)}
          </select></label
        >
        ${n?v`${this.num(this.t("x"),i.x0,s=>r("x",s))} ${this.num(this.t("z"),i.z0,s=>r("z",s))}
            ${this.num(this.t("width"),i.x1-i.x0,s=>r("w",s),.01,.1)} ${this.num(this.t("depth"),i.z1-i.z0,s=>r("d",s),.01,.1)}`:b}
      </div>
      <p class="fp3d-sub">${this.t("outdoor_hint")}</p>
      ${t?v`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.duplicateOutdoor()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOutdoor()}>${this.t("delete")}</button>
          </div>`:b}
    </section>`}renderRooms(e){return k`
      <g>${e.rooms.map(t=>{let n=t.points.map(i=>this.toScreen(i).join(",")).join(" ");return k`<polygon data-room=${t.id} class=${t.id===this._roomId?"fp3d-room fp3d-room-sel":"fp3d-room"} points=${n} />`})}</g>
      <g pointer-events="none">${e.rooms.map(t=>{let[n,i]=this.toScreen(Z(t.points));return k`<text class="fp3d-room-name" x=${n} y=${i-2}>${t.name}</text>
          <text class="fp3d-room-area" x=${n} y=${i+14}>${this.t("area_m2",{a:L(this.hass,ae(t.points),1)})}</text>`})}</g>
    `}renderMeter(e){let t=this._doc.energy?.meter;if(!t||t.floor_id!==e.id)return b;let[n,i]=this.toScreen([t.x,t.z]);return k`<g class="fp3d-meter" transform="translate(${n} ${i})" pointer-events="none">
      <rect x="-11" y="-11" width="22" height="22" rx="5" />
      <path d="M1.5 -7 L-4 1 H0 L-1.5 7 L4 -1 H0 Z" />
    </g>`}renderFurniture(e){let t=this._view.scale;return k`<g>${e.furniture.map(n=>{let i=n.id===this._furnitureId,[r,s]=this.toScreen([n.x,n.z]),a=Math.min(n.w,n.d)*t>44,l=n.rotation*Math.PI/180,d=n.d/2+Math.max(.3,26/t),[h,p]=this.toScreen([n.x-Math.sin(l)*d,n.z+Math.cos(l)*d]),[f,u]=this.toScreen([n.x-Math.sin(l)*(n.d/2),n.z+Math.cos(l)*(n.d/2)]),c=ee(n.type)&&!!n.entity&&n.entity!=="none"&&this.hass?.states[n.entity]?.state==="on";return k`<g data-furniture=${n.id} class=${`fp3d-furn${i?" fp3d-furn-sel":""}${c?" fp3d-furn-lit":""}`}>
        <g transform="translate(${r} ${s}) rotate(${n.rotation}) scale(${t})">
          <rect class="fp3d-furn-body" x=${-n.w/2} y=${-n.d/2} width=${n.w} height=${n.d} />
          <g class="fp3d-furn-sym">${on(n.type,n.w,n.d)}</g>
          <line class="fp3d-furn-front" x1=${-n.w/2} y1=${n.d/2} x2=${n.w/2} y2=${n.d/2} />
        </g>
        ${a?k`<text x=${r} y=${s+4}>${Fe(this.hass,n.type)}</text>`:b}
      </g>
      ${i&&this.isAdmin?[[-1,-1],[1,-1],[1,1],[-1,1]].map(([m,g])=>{let[y,_]=this.toScreen([n.x+m*n.w*Math.cos(l)/2-g*n.d*Math.sin(l)/2,n.z+m*n.w*Math.sin(l)/2+g*n.d*Math.cos(l)/2]);return k`<g class="fp3d-resize" data-resize=${`${n.id}:${m}:${g}`}>
              <circle cx=${y} cy=${_} r="14" class="fp3d-hit" />
              <rect x=${y-5} y=${_-5} width="10" height="10" rx="2" />
            </g>`}):b}
      ${i?(()=>{let[m,g]=this.toScreen([n.x+Math.sin(l)*(n.d/2+18/t),n.z-Math.cos(l)*(n.d/2+18/t)]);return k`<text class="fp3d-dim" x=${m} y=${g+4}>${L(this.hass,n.w,2)} × ${L(this.hass,n.d,2)} m</text>`})():b}
      ${i&&this.isAdmin?k`<g class="fp3d-rotate" data-rotate=${n.id}>
            <line x1=${f} y1=${u} x2=${h} y2=${p} />
            <circle cx=${h} cy=${p} r="16" class="fp3d-hit" />
            <circle cx=${h} cy=${p} r="8" />
            <path d="M${h-4} ${p-1}a4 4 0 1 1 2 3.5" />
          </g>`:b}`})}</g>`}renderOpenings(e,t){return k`<g>${e.openings.map(n=>{let i=e.rooms.find(_=>_.id===n.room_id);if(!i||n.edge>=i.points.length)return b;let r=bn(t,i,n.edge,n.offset),s=Pe(i,n.edge,n.offset-n.width/2),a=Pe(i,n.edge,n.offset+n.width/2),l=(a[0]-s[0])/(n.width||1),d=(a[1]-s[1])/(n.width||1),h=V(i.points)>=0?1:-1,p=[-d*h,l*h],f=[.06,.06];r&&(f=r.wall.roomLeft===i.id?[r.wall.left,r.wall.right]:[r.wall.right,r.wall.left]);let u=(_,w)=>this.toScreen([_[0]+p[0]*w,_[1]+p[1]*w]),c=[u(s,f[0]+.01),u(a,f[0]+.01),u(a,-f[1]-.01),u(s,-f[1]-.01)],m=n.id===this._openingId,g=`fp3d-open fp3d-open-${n.type}${m?" fp3d-open-sel":""}`,y;if(n.type==="garage"){let _=u(s,f[0]-.04),w=u(a,f[0]-.04),M=u(s,f[0]+Math.min(2,n.height)),x=u(a,f[0]+Math.min(2,n.height));y=k`<line x1=${_[0]} y1=${_[1]} x2=${w[0]} y2=${w[1]} />
          <path class="fp3d-open-track" d="M${_[0]} ${_[1]}L${M[0]} ${M[1]}M${w[0]} ${w[1]}L${x[0]} ${x[1]}" />`}else if(n.type==="door"){let _=n.swing==="out",w=_?-f[1]:f[0],M=n.hinge==="left"==h>0,x=n.leaves===2,z=[(s[0]+a[0])/2,(s[1]+a[1])/2],S=x?n.width/2:n.width,E=(A,ne)=>{let[C,U]=u(A,w),[we,rt]=u(ne,w),ke=u(A,w+(_?-S:S)),st=S*this._view.scale,Sn=(ke[0]-C)*(rt-U)-(ke[1]-U)*(we-C);return k`<path d="M${C} ${U}L${ke[0]} ${ke[1]}A${st} ${st} 0 0 ${Sn>0?1:0} ${we} ${rt}" />`};y=x?k`${E(s,z)}${E(a,z)}`:E(M?s:a,M?a:s)}else{let _=(f[0]-f[1])/2,w=u(s,_+.035),M=u(a,_+.035),x=u(s,_-.035),z=u(a,_-.035),S=[(s[0]+a[0])/2,(s[1]+a[1])/2],E=u(S,f[0]),A=u(S,-f[1]);y=k`<line x1=${w[0]} y1=${w[1]} x2=${M[0]} y2=${M[1]} /><line x1=${x[0]} y1=${x[1]} x2=${z[0]} y2=${z[1]} />${n.leaves===2?k`<line x1=${E[0]} y1=${E[1]} x2=${A[0]} y2=${A[1]} />`:b}`}return k`<g data-opening=${n.id} class=${g}>
        <polygon class="fp3d-open-gap" points=${c.map(_=>_.join(",")).join(" ")} />
        ${y}
      </g>`})}</g>`}renderDevices(e){return k`<g>${e.placements.map(t=>{let n=I(t.entity_id);if(!n)return b;let[i,r]=this.toScreen([t.x,t.z]),a=`fp3d-device${this.hass?.states[t.entity_id]?.state==="on"?" fp3d-device-on":""}${t.entity_id===this._deviceId?" fp3d-device-sel":""}`;return k`<g data-device=${t.entity_id} class=${a} transform="translate(${i} ${r})">
        <title>${W(this.hass,t.entity_id)}</title>
        <circle r="18" class="fp3d-hit" /><circle r="12" />
        <path d=${Ie(n)} transform="translate(-7.2 -7.2) scale(0.6)" />
      </g>`})}</g>`}renderHandles(e){let t=e.points,n=t.length,i=t.map((s,a)=>{let l=t[(a+1)%n],[d,h]=this.toScreen(s),[p,f]=this.toScreen(l),u=Math.hypot(l[0]-s[0],l[1]-s[1]),c=(d+p)/2,m=(h+f)/2,[g,y]=this.toScreen(Z(t)),_=-(f-h),w=p-d,M=Math.hypot(_,w)||1;_/=M,w/=M,_*(c-g)+w*(m-y)<0&&(_=-_,w=-w);let x=Math.hypot(p-d,f-h);return k`
        ${x>50?k`<text class="fp3d-dim" x=${c+_*16} y=${m+w*16+4}>${L(this.hass,u,2)} m</text>`:b}
        ${x>36?k`<g data-mid=${a} class="fp3d-mid"><circle cx=${c} cy=${m} r="14" class="fp3d-hit" /><circle cx=${c} cy=${m} r="6" /><path d="M${c-3} ${m}h6M${c} ${m-3}v6" /></g>`:b}
      `}),r=t.map((s,a)=>{let[l,d]=this.toScreen(s);return k`<g data-vertex=${a} class=${a===this._vertex?"fp3d-vertex fp3d-vertex-sel":"fp3d-vertex"}><circle cx=${l} cy=${d} r="16" class="fp3d-hit" /><circle cx=${l} cy=${d} r="6" /></g>`});return k`<g>${i}${r}</g>`}renderDraft(){let e=this.drag;if(e?.kind==="rect"){let[n,i]=this.toScreen(e.start),[r,s]=this.toScreen(e.end),a=Math.abs(e.end[0]-e.start[0]),l=Math.abs(e.end[1]-e.start[1]);return k`<g pointer-events="none">
        <rect class="fp3d-draft" x=${Math.min(n,r)} y=${Math.min(i,s)} width=${Math.abs(r-n)} height=${Math.abs(s-i)} />
        <text class="fp3d-dim" x=${(n+r)/2} y=${Math.min(i,s)-8}>${L(this.hass,a,2)} × ${L(this.hass,l,2)} m</text>
      </g>`}if(this._tool!=="polygon"&&this._tool!=="measure")return b;let t=[...this._draft,...this._cursor?[this._cursor]:[]].map(n=>this.toScreen(n));return k`<g pointer-events="none">
      ${t.length>1?k`<polyline class="fp3d-draft" points=${t.map(n=>n.join(",")).join(" ")} />`:b}
      ${this._tool==="measure"?this._draft.slice(1).map((n,i)=>{let r=this.toScreen(this._draft[i]),s=this.toScreen(n);return k`<text class="fp3d-dim" x=${(r[0]+s[0])/2} y=${(r[1]+s[1])/2-6}>${L(this.hass,Math.hypot(n[0]-this._draft[i][0],n[1]-this._draft[i][1]),2)} m</text>`}):b}
      ${this._draft.map((n,i)=>{let[r,s]=this.toScreen(n);return k`<circle class=${i===0&&this._draft.length>=3?"fp3d-draft-pt fp3d-draft-first":"fp3d-draft-pt"} cx=${r} cy=${s} r=${i===0&&this._draft.length>=3?9:5} />`})}
      ${this._cursor?k`<circle class="fp3d-cursor" cx=${this.toScreen(this._cursor)[0]} cy=${this.toScreen(this._cursor)[1]} r="4" />`:b}
    </g>`}renderGuides(){let e=this._guides,{w:t,h:n}=this._size;return k`<g pointer-events="none">
      ${e.x!==void 0?k`<line class="fp3d-guide" x1=${this.toScreen([e.x,0])[0]} y1="0" x2=${this.toScreen([e.x,0])[0]} y2=${n} />`:b}
      ${e.z!==void 0?k`<line class="fp3d-guide" x1="0" y1=${this.toScreen([0,e.z])[1]} x2=${t} y2=${this.toScreen([0,e.z])[1]} />`:b}
      ${e.point?k`<circle class="fp3d-snap" cx=${this.toScreen(e.point)[0]} cy=${this.toScreen(e.point)[1]} r="9" />`:b}
    </g>`}num(e,t,n,i=.01,r){return v`<label class="fp3d-field"
      >${e}
      <input
        type="number"
        inputmode="decimal"
        step=${i}
        min=${r??b}
        .value=${String($(t))}
        ?disabled=${!this.isAdmin}
        @change=${s=>{let a=parseFloat(s.target.value.replace(",","."));Number.isFinite(a)&&n(a)}}
    /></label>`}renderSide(e){let t=this._doc?.floors??[],n=this.room,i=this.isAdmin,r=Object.values(this.hass?.areas??{}).sort((a,l)=>a.name.localeCompare(l.name));if(this._tool==="furniture"&&e&&i)return v`${this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):b} ${this.renderFurnitureLibrary()}`;let s=this._tool==="measure"?null:this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.opening?this.renderOpeningForm(this.opening):this.device?this.renderDeviceForm(this.device):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):null;return s?v`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("room",this._roomId)}>‹ ${this.t(n?"back_to_room":"back_to_floor",{room:n?.name??""})}</button>
        ${s}`:n&&this._tool!=="measure"?v`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("room",null)}>‹ ${this.t("back_to_floor")}</button>
        ${this.renderRoomForm(n,r)} ${this.renderDeviceList(n)}`:v`
      ${i?b:v`<p class="fp3d-note">${this.t("read_only")}</p>`}
      <section>
        <h3>${this.t("floors")}</h3>
        <div class="fp3d-floor-list">
          ${[...t].reverse().map(a=>v`<button
              class="fp3d-chip"
              aria-pressed=${a.id===this._floorId}
              @click=${()=>{this._floorId=a.id,this._roomId=null,this._vertex=null,this._draft=[],this.fit()}}
            >
              ${a.name}
            </button>`)}
          ${i?v`<button
                class="fp3d-btn"
                aria-expanded=${this._floorMenu}
                @click=${()=>this.freeHaFloors.length?this._floorMenu=!this._floorMenu:this.addFloor()}
              >
                + ${this.t("add_floor")}
              </button>`:b}
        </div>
        ${i&&this._floorMenu?v`<div class="fp3d-floor-menu">
              <p class="fp3d-sub">${this.t("floor_from_ha")}</p>
              ${this.freeHaFloors.map(a=>v`<button class="fp3d-btn" @click=${()=>this.addFloor(a)}>
                  ${a.name}${a.level!=null?v` <span class="fp3d-sub">· ${this.t("level",{n:a.level})}</span>`:b}
                </button>`)}
              <button class="fp3d-btn" @click=${()=>this.addFloor()}>${this.t("floor_empty")}</button>
            </div>`:b}
        ${e?v`<div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${this.t("floor_name")}
                <input .value=${e.name} ?disabled=${!i} @change=${a=>this.updateFloor({name:a.target.value})}
              /></label>
              ${this.num(this.t("elevation"),e.elevation,a=>this.updateFloor({elevation:a}))}
              ${this.num(this.t("height"),e.height,a=>this.updateFloor({height:Math.max(1,a)}),.05,1)}
              ${Object.keys(this.hass?.floors??{}).length?v`<label class="fp3d-field fp3d-wide"
                    >${this.t("ha_floor")}
                    <select ?disabled=${!i} @change=${a=>this.updateFloor({ha_floor:a.target.value||null})}>
                      <option value="" ?selected=${!e.ha_floor}>${this.t("no_ha_floor")}</option>
                      ${Object.values(this.hass?.floors??{}).filter(a=>a.floor_id===e.ha_floor||!t.some(l=>l.ha_floor===a.floor_id)).map(a=>v`<option value=${a.floor_id} ?selected=${a.floor_id===e.ha_floor}>${a.name}</option>`)}
                    </select></label
                  >`:b}
              ${i&&this.unplacedAreas(e).length?v`<div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn fp3d-primary" title=${this.t("area_rooms_hint")} @click=${()=>this.addAreaRooms(e)}>
                      ${this.t("area_rooms",{n:this.unplacedAreas(e).length})}
                    </button>
                  </div>`:b}
              ${i?v`<div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn" @click=${()=>this.moveFloor(1)}>${this.t("move_up")}</button>
                    <button class="fp3d-btn" @click=${()=>this.moveFloor(-1)}>${this.t("move_down")}</button>
                    <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFloor()}>${this.t("delete_floor")}</button>
                  </div>
                  <div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn" title=${this.t("gaps_hint")} ?disabled=${e.rooms.length<2} @click=${()=>this.closeFloorGaps()}>
                      ${this.t("gaps_close")}
                    </button>
                  </div>
                  ${this._notice?v`<p class="fp3d-sub fp3d-wide fp3d-notice">${this._notice}</p>`:b}`:b}
            </div>`:b}
      </section>
      ${this._tool==="measure"&&e?this.renderMeasureForm():this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.opening?this.renderOpeningForm(this.opening):this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.device?this.renderDeviceForm(this.device):n?v`${this.renderRoomForm(n,r)} ${this.renderDeviceList(n)}`:e?this.renderRoomList(e):b}
      ${i?this.renderEnergySettings():b}
      ${i?this.renderPresenceSettings():b}
      ${e&&i?this.renderBackgroundForm(e):b} ${i?this.renderSettings():b}
      ${i?this.renderBackup():b}
    `}renderRoomList(e){return e.rooms.length?v`<section>
      <h3>${this.t("rooms")}</h3>
      <div class="fp3d-room-list">
        ${e.rooms.map(t=>v`<button class="fp3d-row" @click=${()=>this.selectItem("room",t.id)}>
            <span>${t.name}</span><span class="fp3d-muted">${this.t("area_m2",{a:L(this.hass,ae(t.points),1)})}</span>
          </button>`)}
      </div>
    </section>`:b}renderRoomForm(e,t){let n=this.isAdmin,i=Je(e.points),r=H(e.points);return v`<section>
      <h3>${this.t("room")}</h3>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("room_name")}
          <input .value=${e.name} ?disabled=${!n} @change=${s=>this.updateRoom({name:s.target.value})}
        /></label>
        <label class="fp3d-field fp3d-wide"
          >${this.t("area")}
          <select ?disabled=${!n} @change=${s=>this.setArea(s.target.value)}>
            <option value="" ?selected=${!e.area_id}>${this.t("no_area")}</option>
            ${t.map(s=>v`<option value=${s.area_id} ?selected=${s.area_id===e.area_id}>${s.name}</option>`)}
          </select></label
        >
        <label class="fp3d-field fp3d-wide"
          >${this.t("material")}
          <select ?disabled=${!n} @change=${s=>this.updateRoom({floor_material:s.target.value})}>
            ${Dt.map(s=>v`<option value=${s} ?selected=${s===e.floor_material}>${this.t(`mat_${s}`)}</option>`)}
          </select></label
        >
        ${i?v`${this.num(this.t("x"),r.x0,s=>this.setRect("x",s))} ${this.num(this.t("z"),r.z0,s=>this.setRect("z",s))}
            ${this.num(this.t("width"),r.x1-r.x0,s=>this.setRect("w",s),.01,.05)}
            ${this.num(this.t("depth"),r.z1-r.z0,s=>this.setRect("d",s),.01,.05)}`:b}
      </div>
      <details class="fp3d-points" ?open=${!i}>
        <summary>${this.t("points")} (${e.points.length})</summary>
        ${e.points.map((s,a)=>v`<div class="fp3d-point ${a===this._vertex?"fp3d-point-sel":""}">
            <span class="fp3d-muted">${a+1}</span>
            ${this.num(this.t("x"),s[0],l=>this.setPoint(a,0,l))} ${this.num(this.t("z"),s[1],l=>this.setPoint(a,1,l))}
            ${n?v`<button class="fp3d-btn" title=${this.t("delete_point")} ?disabled=${e.points.length<=3} @click=${()=>this.deleteVertex(a)}>
                  ×
                </button>`:b}
          </div>`)}
      </details>
      ${n?v`<div class="fp3d-actions">
            <button class="fp3d-btn fp3d-primary" @click=${()=>this._packages=!this._packages}>${this.t("pkg_open")}</button>
            <button class="fp3d-btn" @click=${()=>this.openSpotForm(e)}>${this.t("spots_place")}</button>
            <button class="fp3d-btn" @click=${()=>this.duplicateRoom()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoom()}>${this.t("delete")}</button>
          </div>`:b}
      ${this._spots?this.renderSpotForm(e):b}
      ${this._packages?v`<div class="fp3d-packages">
            ${pn.map(s=>v`<button class="fp3d-btn" @click=${()=>this.applyPackage(e,s)}>
                <b>${this.t(`pkg_${s}`)}</b><span>${this.t(`pkg_${s}_desc`)}</span>
              </button>`)}
            <p class="fp3d-sub">${this.t("pkg_hint")}</p>
          </div>`:b}
    </section>`}applyPackage(e,t){if(!this.isAdmin)return;let n=un(e,t,()=>T("furniture"));this.change((i,r)=>r.furniture.push(...n)),this._packages=!1,this._notice=this.t("pkg_done",{n:n.length})}openSpotForm(e){let t=H(e.points),n=this.hass?le(this.hass,e.area_id).filter(i=>i.startsWith("light.")):[];this._spots={type:"lamp_downlight",rows:Math.max(1,Math.round((t.z1-t.z0)/1.2)),cols:Math.max(1,Math.round((t.x1-t.x0)/1.2)),entity:n[0]??null}}placeSpots(e){let t=this._spots;if(!t||!this.isAdmin)return;let[n,i,r]=B[t.type],s=qe(e,t.rows,t.cols).map(([a,l])=>({id:T("furniture"),type:t.type,x:a,z:l,rotation:0,w:n,d:i,h:r,variant:null,entity:t.entity??"none",power:null}));this.change((a,l)=>l.furniture.push(...s)),this._spots=null,this._notice=this.t("spots_placed",{n:s.length})}renderSpotForm(e){let t=this._spots,n=qe(e,t.rows,t.cols).length,i=this.entityOptions(s=>/^(light|switch|input_boolean)\./.test(s)),r=s=>this._spots={...t,...s};return v`<div class="fp3d-form fp3d-spot-form">
      <label class="fp3d-field fp3d-wide"
        >${this.t("spots_type")}
        <select @change=${s=>r({type:s.target.value})}>
          ${["lamp_downlight","lamp_spot","lamp_panel","lamp_ceiling"].map(s=>v`<option value=${s} ?selected=${s===t.type}>${this.t(`furn_${s}`)}</option>`)}
        </select></label
      >
      ${this.num(this.t("spots_cols"),t.cols,s=>r({cols:Math.max(1,Math.min(12,Math.round(s)))}),1,1)}
      ${this.num(this.t("spots_rows"),t.rows,s=>r({rows:Math.max(1,Math.min(12,Math.round(s)))}),1,1)}
      ${this.entitySelect(this.t("furn_entity_light"),t.entity,void 0,i,s=>r({entity:s==="none"?null:s}))}
      <div class="fp3d-actions fp3d-wide">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!n} @click=${()=>this.placeSpots(e)}>${this.t("spots_add",{n})}</button>
        <button class="fp3d-btn" @click=${()=>this._spots=null}>${this.t("cancel")}</button>
      </div>
      <p class="fp3d-sub fp3d-wide">${this.t("spots_hint")}</p>
    </div>`}entityOptions(e){let t=n=>{let i=this.hass?.entities?.[n],r=i?.area_id??(i?.device_id?this.hass?.devices?.[i.device_id]?.area_id:null);return r?this.hass?.areas?.[r]?.name:void 0};return Object.keys(this.hass?.states??{}).filter(e).map(n=>({id:n,label:`${W(this.hass,n)}${t(n)?` \xB7 ${t(n)}`:""}`})).sort((n,i)=>n.label.localeCompare(i.label))}entitySelect(e,t,n,i,r){let s=n===void 0?null:n?this.t("entity_auto",{name:W(this.hass,n)}):this.t("entity_auto_none");return v`<label class="fp3d-field fp3d-wide"
      >${e}
      <select
        ?disabled=${!this.isAdmin}
        @change=${a=>{let l=a.target.value;r(l==="__auto"?null:l)}}
      >
        ${s!==null?v`<option value="__auto" ?selected=${t===null}>${s}</option>`:b}
        <option value="none" ?selected=${t==="none"||s===null&&t===null}>${this.t("entity_none")}</option>
        ${i.map(a=>v`<option value=${a.id} ?selected=${a.id===t}>${a.label}</option>`)}
      </select></label
    >`}renderOpeningForm(e){let t=this.isAdmin,n=e.type==="window",i=e.type==="garage",r=p=>{if(!this.hass)return null;let f=structuredClone(this._doc.floors);for(let u of f)for(let c of u.openings)c.id===e.id&&(c[p]=null);return nn(this.hass,f).get(e.id)?.[p]??null},s=p=>this.hass?.states[p]?.attributes.device_class,a=this.entityOptions(p=>p.startsWith("cover.")),l=this.entityOptions(p=>p.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(s(p)??"")),d=Ye(e),h=e.type==="door";return v`<section>
      <h3>${this.t(`preset_${d}`)}</h3>
      ${t?v`<div class="fp3d-presets" role="group" aria-label=${this.t("opening_type")}>
            ${Object.keys(Ee).map(p=>v`<button class="fp3d-chip" aria-pressed=${p===d} @click=${()=>this.setOpeningPreset(e,p)}>${this.t(`preset_${p}`)}</button>`)}
          </div>`:b}
      ${t&&!i?v`<div class="fp3d-actions">
            <button class="fp3d-btn" title=${this.t("flip_hinge_hint")} @click=${()=>this.updateOpening({hinge:e.hinge==="left"?"right":"left"})}>
              ⇆ ${this.t(e.leaves===2?"flip_main_leaf":"flip_hinge")}
            </button>
            ${h?v`<button class="fp3d-btn" title=${this.t("flip_swing_hint")} @click=${()=>this.updateOpening({swing:e.swing==="out"?"in":"out"})}>
                  ⇅ ${this.t("flip_swing")}
                </button>`:b}
          </div>`:b}
      <div class="fp3d-form">
        ${this.num(this.t("width"),e.width,p=>this.updateOpening({width:Math.max(.3,p)}),.01,.3)}
        ${this.num(this.t("opening_position"),e.offset,p=>this.updateOpening({offset:Math.max(0,p)}),.01,0)}
        ${n?this.num(this.t("sill"),e.sill,p=>this.updateOpening({sill:Math.max(0,p)}),.01,0):b}
        ${this.num(this.t("opening_height"),e.height,p=>this.updateOpening({height:Math.max(.3,p)}),.01,.3)}
        ${i?b:v`<label class="fp3d-field fp3d-wide"
          >${this.t(e.leaves===2?"main_leaf":"hinge")}
          <select ?disabled=${!t} @change=${p=>this.updateOpening({hinge:p.target.value})}>
            <option value="left" ?selected=${e.hinge==="left"}>${this.t("hinge_left")}</option>
            <option value="right" ?selected=${e.hinge==="right"}>${this.t("hinge_right")}</option>
          </select></label
        >`}
        ${n||i?this.entitySelect(this.t("cover_entity"),e.cover,r("cover"),a,p=>this.updateOpening({cover:p})):b}
        ${this.entitySelect(this.t(e.leaves===2?"contact_main":"contact_entity"),e.contact,r("contact"),l,p=>this.updateOpening({contact:p}))}
        ${e.leaves===2&&!i?this.entitySelect(this.t("contact_second"),e.contact2,void 0,l,p=>this.updateOpening({contact2:p==="none"?null:p})):b}
        ${n?this.entitySelect(this.t("tilt_entity"),e.tilt,void 0,l,p=>this.updateOpening({tilt:p==="none"?null:p})):b}
      </div>
      <p class="fp3d-sub">${this.t(n?"opening_hint":i?"garage_hint":"door_hint")}</p>
      ${t?v`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOpening()}>${this.t("delete")}</button></div>`:b}
    </section>`}renderFurnitureForm(e){let t=this.isAdmin;return v`<section>
      <h3>${this.t("furniture")}</h3>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("furniture_type")}
          <select ?disabled=${!t} @change=${n=>this.updateFurniture({type:n.target.value})}>
            ${Bt.map(n=>v`<option value=${n} ?selected=${n===e.type}>${this.t(`furn_${n}`)}</option>`)}
            ${(this.packs??[]).map(n=>v`<optgroup label=${n.name}>
                ${n.items.map(i=>{let r=ze(n.id,i.id);return v`<option value=${r} ?selected=${r===e.type}>${_e(i,this.hass?.language??"en")}</option>`})}
              </optgroup>`)}
            ${e.type.startsWith("pack:")&&!(this.packs??[]).some(n=>e.type.startsWith(`pack:${n.id}:`))?v`<option value=${e.type} selected>${Fe(this.hass,e.type)}</option>`:b}
          </select></label
        >
        ${this.num(this.t("x"),e.x,n=>this.updateFurniture({x:n}))} ${this.num(this.t("z"),e.z,n=>this.updateFurniture({z:n}))}
        ${this.num(this.t("width"),e.w,n=>this.updateFurniture({w:Math.max(.05,n)}),.01,.05)}
        ${this.num(this.t("depth"),e.d,n=>this.updateFurniture({d:Math.max(.05,n)}),.01,.05)}
        ${this.num(this.t("height_m"),e.h,n=>this.updateFurniture({h:Math.max(.005,n)}),.01,0)}
        ${this.num(this.t("rotation"),e.rotation,n=>this.updateFurniture({rotation:(n%360+360)%360}),1)}
      </div>
      ${e.type==="stairs"?v`<p class="fp3d-sub">${this.t("stairs_hint")}</p>`:b}
      ${e.type==="lamp_pendant"?v`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("pendant_shape")}
              <select ?disabled=${!t} @change=${n=>this.updateFurniture({variant:n.target.value||null})}>
                ${["","globe","cone","drum"].map(n=>v`<option value=${n} ?selected=${(e.variant??"")===n}>${this.t(`pendant_${n||"shade"}`)}</option>`)}
              </select></label
            >
          </div>`:b}
      ${Ft(e.type)?this.renderFurnitureLinks(e):b}
      ${t?v`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.rotateFurniture(-90)}>${this.t("rotate_left")}</button>
            <button class="fp3d-btn" @click=${()=>this.rotateFurniture(90)}>${this.t("rotate_right")}</button>
            <button class="fp3d-btn" @click=${()=>this.duplicateFurniture()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
          </div>`:b}
    </section>`}setEnergy(e){let t=structuredClone(this._doc);t.energy={...t.energy,...e},this.setDoc(t)}renderEnergySettings(){let e=this._doc.energy,t=(l,d)=>this.hass?.states[l]?.attributes[d],n=this.entityOptions(l=>l.startsWith("sensor.")&&t(l,"device_class")==="power"),i=this.entityOptions(l=>l.startsWith("sensor.")&&t(l,"device_class")==="battery"),r=this.entityOptions(l=>l.startsWith("sensor.")&&(t(l,"device_class")==="monetary"||/\/(kWh|MWh)$/.test(t(l,"unit_of_measurement")??""))),s=l=>d=>this.setEnergy({[l]:d==="none"?null:d}),a=e.meter?this._doc.floors.find(l=>l.id===e.meter.floor_id)?.name:null;return v`<details class="fp3d-section">
      <summary>${this.t("energy")}</summary>
      <div class="fp3d-form">
        <div class="fp3d-actions fp3d-wide">
          <button class="fp3d-btn ${this._tool==="meter"?"fp3d-primary":""}" ?disabled=${!this.floor} @click=${()=>this._tool="meter"}>
            ${this.t("energy_meter_set")}
          </button>
          ${e.meter?v`<button class="fp3d-btn fp3d-danger" @click=${()=>this.setEnergy({meter:null})}>${this.t("energy_meter_remove")}</button>`:b}
        </div>
        <p class="fp3d-sub fp3d-wide">
          ${e.meter?`${this.t("energy_meter")}: ${a??""} \xB7 ${L(this.hass,e.meter.x,2)} / ${L(this.hass,e.meter.z,2)} m`:this.t("energy_meter_hint")}
        </p>
        ${this.entitySelect(this.t("energy_grid"),e.grid,void 0,n,s("grid"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${e.grid_invert} @change=${l=>this.setEnergy({grid_invert:l.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_solar_sensor"),e.solar,void 0,n,s("solar"))}
        ${this.entitySelect(this.t("energy_battery_sensor"),e.battery,void 0,n,s("battery"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${e.battery_invert} @change=${l=>this.setEnergy({battery_invert:l.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_battery_soc"),e.battery_soc,void 0,i,s("battery_soc"))}
        ${this.entitySelect(this.t("energy_tariff_sensor"),e.tariff,void 0,r,s("tariff"))}
      </div>
      <p class="fp3d-sub">${this.t("energy_hint")}</p>
    </details>`}renderPresenceSettings(){let e=Object.keys(this.hass?.states??{}).filter(i=>i.startsWith("person.")).sort(),t=i=>{let r=i.slice(7),s=this.entityOptions(l=>l.startsWith("sensor.")),a=l=>l.includes(r)&&/(area|room|raum|bermuda|espresense)/.test(l);return[...s.filter(l=>a(l.id)),...s.filter(l=>!a(l.id))]},n=(i,r)=>{let s=structuredClone(this._doc);s.presence=s.presence.filter(a=>a.person!==i),r&&r!=="none"&&s.presence.push({person:i,sensor:r}),this.setDoc(s)};return v`<details class="fp3d-section">
      <summary>${this.t("presence")}</summary>
      <div class="fp3d-form">
        ${e.length?e.map(i=>this.entitySelect(`${W(this.hass,i)} \xB7 ${this.t("presence_sensor")}`,this._doc.presence.find(r=>r.person===i)?.sensor??null,void 0,t(i),r=>n(i,r))):v`<p class="fp3d-sub fp3d-wide">${this.t("no_persons")}</p>`}
      </div>
      <p class="fp3d-sub">${this.t("presence_hint")}</p>
    </details>`}renderFurnitureLinks(e){if(!this.hass)return b;let t=this.hass,n=l=>{let d=structuredClone(this._doc.floors);for(let h of d)for(let p of h.furniture)p.id===e.id&&(p[l]=null);return rn(t,d).get(e.id)?.[l]??null},i=e.type==="tv_board"||e.type==="tv_wall",r=ee(e.type),s=this.entityOptions(l=>r?/^(light|switch|input_boolean)\./.test(l):i?l.startsWith("media_player."):e.type==="radiator"?l.startsWith("climate."):/^(switch|media_player|fan|input_boolean|climate)\./.test(l)),a=this.entityOptions(l=>l.startsWith("sensor.")&&t.states[l]?.attributes.device_class==="power");return v`<div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t(r?"furn_entity_light":i?"furn_entity_tv":e.type==="radiator"?"furn_entity_climate":"furn_entity"),e.entity??null,n("entity"),s,l=>this.updateFurniture({entity:l}))}
        ${r?b:this.entitySelect(this.t("furn_power"),e.power??null,n("power"),a,l=>this.updateFurniture({power:l}))}
      </div>
      <p class="fp3d-sub">${this.t(r?e.type==="lamp_pendant"?"lamp_hint_pendant":"lamp_hint":i?"furn_links_hint_tv":"furn_links_hint")}</p>`}renderFurnitureLibrary(){let e=this.room;return v`<section>
      <h3>${this.t("furniture_add")}</h3>
      <p class="fp3d-sub">${e?this.t("furniture_into",{room:e.name}):this.t("furniture_pick_room")}</p>
      ${Object.entries(Nt).map(([t,n])=>v`<h4 class="fp3d-lib-head">${this.t(`furn_group_${t}`)}</h4>
          <div class="fp3d-library">
            ${n.map(i=>this.libraryButton(i,this.t(`furn_${i}`)))}
          </div>`)}
      ${(this.packs??[]).map(t=>v`<h4 class="fp3d-lib-head">${t.name}</h4>
          <div class="fp3d-library">
            ${t.items.map(n=>this.libraryButton(ze(t.id,n.id),_e(n,this.hass?.language??"en")))}
          </div>`)}
    </section>
    ${this.renderPacks()}`}libraryButton(e,t){let n=i=>{this.showPreview(e,i.currentTarget)};return v`<button
      class="fp3d-btn"
      @click=${()=>this.addFurniture(e)}
      @mouseenter=${n}
      @focus=${n}
      @mouseleave=${()=>this._preview=null}
      @blur=${()=>this._preview=null}
    >
      ${t}
    </button>`}async showPreview(e,t){let n=t.getBoundingClientRect(),i={left:Math.max(8,n.left-196),top:Math.max(8,Math.min(window.innerHeight-200,n.top+n.height/2-95))};this._preview={type:e,url:null,...i};try{let r=await $n(),[s,a,l]=Ze(e),d=r.furniturePreview({type:e,w:s,d:a,h:l,variant:null,lamp:Gt[e]??null},180,this.packs??[]);this._preview?.type===e&&(this._preview={type:e,url:d,...i})}catch{this._preview=null}}renderPreview(){let e=this._preview;return e?v`<div class="fp3d-preview" style="left:${e.left}px;top:${e.top}px" aria-hidden="true">
      ${e.url?v`<img src=${e.url} alt="" />`:v`<span class="fp3d-preview-wait"></span>`}
      <b>${Fe(this.hass,e.type)}</b>
    </div>`:b}renderPacks(){let e=this.packs??[];return v`<section>
      <h3>${this.t("packs")}</h3>
      ${e.map(t=>v`<div class="fp3d-pack">
          <div>
            <b>${t.name}</b>
            <span class="fp3d-sub">${this.t("pack_by",{publisher:t.publisher,n:t.items.length})}</span>
            ${t.licensee?v`<span class="fp3d-sub">${this.t("pack_licensed",{name:t.licensee})}</span>`:b}
          </div>
          <button class="fp3d-btn fp3d-danger" @click=${()=>this.deletePack(t)}>${this.t("pack_remove")}</button>
        </div>`)}
      <label class="fp3d-btn fp3d-primary fp3d-pack-import">
        ${this.t("pack_import")}
        <input type="file" accept=".fp3dpack,.json,application/json" hidden @change=${t=>this.importPackFile(t)} />
      </label>
      ${this._packMsg?v`<p class="fp3d-sub ${this._packMsg.ok?"fp3d-notice":"fp3d-pack-error"}">${this._packMsg.text}</p>`:b}
      <p class="fp3d-sub">${this.t("packs_hint")}</p>
    </section>`}async importPackFile(e){let t=e.target,n=t.files?.[0];if(t.value="",!(!n||!this.hass))try{let i=await At(this.hass,await n.text());this._packMsg={ok:!0,text:this.t("pack_imported",{name:i.name,publisher:i.publisher,n:i.items})},this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}))}catch(i){let{code:r,message:s}=i??{},a=`pack_error_${r}`,l=this.t(a,{detail:s??String(i)});this._packMsg={ok:!1,text:l===a?this.t("pack_error_other",{detail:s??String(i)}):l}}}async deletePack(e){!this.hass||!confirm(this.t("pack_remove_confirm",{name:e.name}))||(await Rt(this.hass,e.id),this._packMsg=null,this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0})))}renderDeviceForm(e){let t=this.isAdmin,n=I(e.entity_id),i=n==="light",r=e.mount??"ceiling",s=n?en(n,this.floor?.height??2.5,i?r:null):1;return v`<section>
      <h3>${this.t("device")}</h3>
      <p class="fp3d-dev-title">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d=${n?Ie(n):""} />
        </svg>
        ${W(this.hass,e.entity_id)}
      </p>
      <div class="fp3d-form">
        ${i?v`<label class="fp3d-field fp3d-wide"
              >${this.t("lamp_mount")}
              <select ?disabled=${!t} @change=${a=>this.updateDevice({mount:a.target.value,y:null})}>
                ${["ceiling","floor","table","wall"].map(a=>v`<option value=${a} ?selected=${a===r}>${this.t(`lamp_${a}`)}</option>`)}
              </select></label
            >`:b}
        ${this.num(this.t("x"),e.x,a=>this.updateDevice({x:a}))} ${this.num(this.t("z"),e.z,a=>this.updateDevice({z:a}))}
        ${this.num(this.t("marker_height"),e.y??s,a=>this.updateDevice({y:Math.max(0,a)}),.05,0)}
      </div>
      ${t?v`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.centreDevice()}>${this.t("device_centre")}</button>
            ${e.y!==null?v`<button class="fp3d-btn" @click=${()=>this.updateDevice({y:null})}>${this.t("height_auto")}</button>`:b}
            <button
              class="fp3d-btn fp3d-danger"
              @click=${()=>{this.removeDevice(e.entity_id),this._deviceId=null}}
            >
              ${this.t("devices_remove")}
            </button>
          </div>`:b}
    </section>`}renderDeviceList(e){let t=this.isAdmin,n=this.hass,i=e.area_id?n?.areas?.[e.area_id]?.name:void 0,r=n?le(n,e.area_id).filter(c=>Xt(I(c))):[],s=new Set([...this.floor?.placements.filter(c=>O([c.x,c.z],e.points)).map(c=>c.entity_id)??[],...this.floor?.furniture.filter(c=>ee(c.type)&&c.entity&&O([c.x,c.z],e.points)).map(c=>c.entity)??[]]),a=n?Xe(n,r):[],l=a.map(c=>c.primary).filter(c=>!s.has(c)),d=this._deviceQuery.trim().toLowerCase(),h=c=>!d||W(n,c,i).toLowerCase().includes(d)||c.includes(d),p=this.floor?.placements.filter(c=>I(c.entity_id)==="light"&&(c.mount??"ceiling")==="ceiling"&&O([c.x,c.z],e.points)).length,f=new Set(e.panel??[]),u=(c,m=!1)=>{let g=s.has(c);return v`<div class="fp3d-row fp3d-dev-row ${m?"fp3d-dev-extra":""}">
        <button class="fp3d-dev-name ${g?"":"fp3d-muted"}" ?disabled=${!g} @click=${()=>this.selectItem("device",c)}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${Ie(I(c))} />
          </svg>
          <span>${W(n,c,i)}</span>
        </button>
        ${t&&!g?v`<button
              class="fp3d-pin ${f.has(c)?"fp3d-pin-on":""}"
              aria-pressed=${f.has(c)}
              title=${this.t(f.has(c)?"panel_unpin":"panel_pin")}
              @click=${()=>this.updateRoom({panel:f.has(c)?[...f].filter(y=>y!==c):[...f,c]})}
            >
              ${f.has(c)?"\u2605":"\u2606"}
            </button>`:b}
        ${t?g?v`<button class="fp3d-link" @click=${()=>this.removeDevice(c)}>${this.t("devices_remove")}</button>`:v`<button class="fp3d-link" @click=${()=>this.placeDevices([c])}>${this.t("devices_place")}</button>`:b}
      </div>`};return v`<section>
      <h3>${this.t("devices")}</h3>
      <p class="fp3d-sub">${this.t("devices_panel_hint")}</p>
      ${e.area_id?r.length?v`${t&&l.length?v`<button class="fp3d-btn fp3d-primary fp3d-wide-btn" @click=${()=>this.placeDevices(l)}>${this.t("devices_place_all")}</button>`:b}
              ${t&&(p??0)>=2?v`<button class="fp3d-btn fp3d-wide-btn" @click=${()=>this.spreadCeilingLights(e)}>${this.t("lights_spread")}</button>`:b}
              ${r.length>8?v`<input
                    class="fp3d-search"
                    type="search"
                    placeholder=${this.t("devices_search")}
                    .value=${this._deviceQuery}
                    @input=${c=>this._deviceQuery=c.target.value}
                  />`:b}
              <div class="fp3d-room-list">
                ${a.map(c=>{let m=c.others.filter(h),g=this._expanded.has(c.primary)||!!d&&m.length>0;return!h(c.primary)&&!m.length?b:v`${u(c.primary)}
                  ${c.others.length?v`<button
                        class="fp3d-more"
                        @click=${()=>{let y=new Set(this._expanded);y.has(c.primary)?y.delete(c.primary):y.add(c.primary),this._expanded=y}}
                      >
                        ${g?this.t("devices_less"):this.t("devices_more",{n:c.others.length})}
                      </button>`:b}
                  ${g?(d?m:c.others).map(y=>u(y,!0)):b}`})}
              </div>
              <p class="fp3d-sub">${this.t("devices_hint")}</p>`:v`<p class="fp3d-sub">${this.t("devices_none")}</p>`:v`<p class="fp3d-sub">${this.t("devices_none_area")}</p>`}
    </section>`}renderBackgroundForm(e){let t=e.background;return v`<details class="fp3d-section">
      <summary>${this.t("background")}</summary>
      <div class="fp3d-form">
        <label class="fp3d-btn fp3d-wide fp3d-upload"
          >${this.t("background_upload")}<input type="file" accept="image/png,image/jpeg,image/webp" @change=${this.uploadBackground}
        /></label>
        ${t?v`${this.num(this.t("x"),t.x,n=>this.updateFloor({background:{...t,x:n}}))}
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
              <button class="fp3d-btn fp3d-danger fp3d-wide" @click=${()=>this.updateFloor({background:null})}>${this.t("background_remove")}</button>`:b}
      </div>
    </details>`}async loadHistory(){if(this.hass)try{this._history=await St(this.hass)}catch{this._history=[]}}async restoreFromHistory(e){!this.hass||!confirm(this.t("backup_restore_confirm",{time:this.snapshotTime(e)}))||(await Et(this.hass,e.id),this._notice=this.t("backup_restored"),await this.loadHistory())}exportPlan(e){let t=new Date().toISOString().slice(0,10);Yt(`floorplan-3d-${e?"vorlage":"sicherung"}-${t}.json`,JSON.stringify(Zt(this._doc,e),null,2))}async importPlan(e){let t=e.target,n=t.files?.[0];if(t.value="",!n||!this.hass)return;let i;try{i=qt(await n.text())}catch(r){alert(this.t("backup_import_error",{error:r.message}));return}confirm(this.t("backup_import_confirm"))&&(await zt(this.hass).catch(()=>{}),this.setDoc(i),this._floorId=i.floors[0]?.id??null,this.selectItem("room",null),this.fit(),this._notice=this.t("backup_imported"))}snapshotTime(e){return new Date(e.saved_at*1e3).toLocaleString(this.hass?.language,{dateStyle:"short",timeStyle:"short"})}renderBackup(){return v`<details
      class="fp3d-section"
      @toggle=${e=>{e.target.open&&this.loadHistory()}}
    >
      <summary>${this.t("backup")}</summary>
      <h4 class="fp3d-lib-head">${this.t("backup_history")}</h4>
      ${this._history===null?v`<p class="fp3d-sub">${this.t("loading")}</p>`:this._history.length?v`<div class="fp3d-room-list">
              ${this._history.map(e=>v`<div class="fp3d-row fp3d-dev-row">
                  <span>${this.snapshotTime(e)} <span class="fp3d-muted">· ${this.t("backup_summary",{rooms:e.rooms,furniture:e.furniture})}</span></span>
                  <button class="fp3d-link" @click=${()=>this.restoreFromHistory(e)}>${this.t("backup_restore")}</button>
                </div>`)}
            </div>`:v`<p class="fp3d-sub">${this.t("backup_none")}</p>`}
      <h4 class="fp3d-lib-head">${this.t("backup_file")}</h4>
      <div class="fp3d-actions">
        <button class="fp3d-btn" @click=${()=>this.exportPlan(!1)}>${this.t("backup_export")}</button>
        <button class="fp3d-btn" title=${this.t("backup_export_share_hint")} @click=${()=>this.exportPlan(!0)}>${this.t("backup_export_share")}</button>
        <label class="fp3d-btn fp3d-upload"
          >${this.t("backup_import")}<input type="file" accept="application/json,.json" @change=${this.importPlan}
        /></label>
      </div>
      <p class="fp3d-sub">${this.t("backup_hint")}</p>
    </details>`}renderSettings(){let e=this._doc.settings,t=n=>{let i=structuredClone(this._doc);Object.assign(i.settings,n),this.setDoc(i)};return v`<details class="fp3d-section">
      <summary>${this.t("settings")}</summary>
      <div class="fp3d-form">
        ${this.num(this.t("wall_exterior"),e.wall_exterior,n=>t({wall_exterior:Math.min(1,Math.max(.02,n))}),.01,.02)}
        ${this.num(this.t("wall_interior"),e.wall_interior,n=>t({wall_interior:Math.min(1,Math.max(.02,n))}),.01,.02)}
        ${this.num(this.t("grid"),e.grid,n=>t({grid:Math.min(1,Math.max(.01,n))}),.01,.01)}
        ${this.num(this.t("north"),e.north,n=>t({north:(Math.round(n)%360+360)%360}),1)}
        <label class="fp3d-field fp3d-wide"
          >${this.t("roof")}
          <select @change=${n=>t({roof:{...e.roof,type:n.target.value}})}>
            ${["none","flat","gable"].map(n=>v`<option value=${n} ?selected=${n===e.roof.type}>${this.t(`roof_${n}`)}</option>`)}
          </select></label
        >
        ${e.roof.type==="gable"?this.num(this.t("roof_pitch"),e.roof.pitch,n=>t({roof:{...e.roof,pitch:Math.min(60,Math.max(5,n))}}),1,5):b}
        ${e.roof.type!=="none"?this.num(this.t("roof_overhang"),e.roof.overhang,n=>t({roof:{...e.roof,overhang:Math.min(2,Math.max(0,n))}}),.05,0):b}
      </div>
      <p class="fp3d-sub">${this.t("north_hint")}</p>
    </details>`}static styles=[yn,wn,ie`
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
    `]};customElements.get("fp3d-editor")||customElements.define("fp3d-editor",it);export{it as Fp3dEditor};
