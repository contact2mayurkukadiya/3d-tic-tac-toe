var Zx=Object.defineProperty,Kx=Object.defineProperties;var Jx=Object.getOwnPropertyDescriptors;var za=Object.getOwnPropertySymbols;var Am=Object.prototype.hasOwnProperty,Im=Object.prototype.propertyIsEnumerable;var Dm=(n,e,t)=>e in n?Zx(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Ct=(n,e)=>{for(var t in e||={})Am.call(e,t)&&Dm(n,t,e[t]);if(za)for(var t of za(e))Im.call(e,t)&&Dm(n,t,e[t]);return n},Jt=(n,e)=>Kx(n,Jx(e));var Rm=(n,e)=>{var t={};for(var i in n)Am.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&za)for(var i of za(n))e.indexOf(i)<0&&Im.call(n,i)&&(t[i]=n[i]);return t};var es=(n,e,t)=>new Promise((i,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?i(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(n,e)).next())});var sd=null;var Nm=1,ao=Symbol("SIGNAL");function Je(n){let e=sd;return sd=n,e}function ad(){return sd}var ld={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Pm(n){if(!(fd(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===Nm)){if(!n.producerMustRecompute(n)&&!ud(n)){od(n);return}n.producerRecomputeValue(n),od(n)}}function od(n){n.dirty=!1,n.lastCleanEpoch=Nm}function cd(n){return n&&(n.nextProducerIndex=0),Je(n)}function Fm(n,e){if(Je(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(fd(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)hd(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function ud(n){pd(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],i=n.producerLastReadVersion[e];if(i!==t.version||(Pm(t),i!==t.version))return!0}return!1}function dd(n){if(pd(n),fd(n))for(let e=0;e<n.producerNode.length;e++)hd(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function hd(n,e){if(Qx(n),n.liveConsumerNode.length===1&&eE(n))for(let i=0;i<n.producerNode.length;i++)hd(n.producerNode[i],n.producerIndexOfThis[i]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let i=n.liveConsumerIndexOfThis[e],r=n.liveConsumerNode[e];pd(r),r.producerIndexOfThis[i]=e}}function fd(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function pd(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function Qx(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function eE(n){return n.producerNode!==void 0}function tE(){throw new Error}var nE=tE;function md(n){nE=n}var gd;function lo(){return gd}function hi(n){let e=gd;return gd=n,e}var Ga=Symbol("NotFound");function Qt(n){return typeof n=="function"}function Wa(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var ja=Wa(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function co(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var $t=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(Qt(i))try{i()}catch(s){e=s instanceof ja?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{Om(s)}catch(o){e=e??[],o instanceof ja?e=[...e,...o.errors]:e.push(o)}}if(e)throw new ja(e)}}add(e){var t;if(e&&e!==this)if(this.closed)Om(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&co(t,e)}remove(e){let{_finalizers:t}=this;t&&co(t,e),e instanceof n&&e._removeParent(this)}};$t.EMPTY=(()=>{let n=new $t;return n.closed=!0,n})();var yd=$t.EMPTY;function $a(n){return n instanceof $t||n&&"closed"in n&&Qt(n.remove)&&Qt(n.add)&&Qt(n.unsubscribe)}function Om(n){Qt(n)?n():n.unsubscribe()}var Fn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var ts={setTimeout(n,e,...t){let{delegate:i}=ts;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=ts;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function Lm(n){ts.setTimeout(()=>{let{onUnhandledError:e}=Fn;if(e)e(n);else throw n})}function _d(){}var km=vd("C",void 0,void 0);function Um(n){return vd("E",void 0,n)}function Bm(n){return vd("N",n,void 0)}function vd(n,e,t){return{kind:n,value:e,error:t}}var gr=null;function ns(n){if(Fn.useDeprecatedSynchronousErrorHandling){let e=!gr;if(e&&(gr={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=gr;if(gr=null,t)throw i}}else n()}function Vm(n){Fn.useDeprecatedSynchronousErrorHandling&&gr&&(gr.errorThrown=!0,gr.error=n)}var yr=class extends $t{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,$a(e)&&e.add(this)):this.destination=mE}static create(e,t,i){return new is(e,t,i)}next(e){this.isStopped?Ed(Bm(e),this):this._next(e)}error(e){this.isStopped?Ed(Um(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?Ed(km,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},fE=Function.prototype.bind;function xd(n,e){return fE.call(n,e)}var Md=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){qa(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){qa(i)}else qa(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){qa(t)}}},is=class extends yr{constructor(e,t,i){super();let r;if(Qt(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&Fn.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&xd(e.next,s),error:e.error&&xd(e.error,s),complete:e.complete&&xd(e.complete,s)}):r=e}this.destination=new Md(r)}};function qa(n){Fn.useDeprecatedSynchronousErrorHandling?Vm(n):Lm(n)}function pE(n){throw n}function Ed(n,e){let{onStoppedNotification:t}=Fn;t&&ts.setTimeout(()=>t(n,e))}var mE={closed:!0,next:_d,error:pE,complete:_d};var Hm=typeof Symbol=="function"&&Symbol.observable||"@@observable";function zm(n){return n}function Gm(n){return n.length===0?zm:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var Sd=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=yE(t)?t:new is(t,i,r);return ns(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=Wm(i),new i((r,s)=>{let o=new is({next:a=>{try{t(a)}catch(l){s(l),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[Hm](){return this}pipe(...t){return Gm(t)(this)}toPromise(t){return t=Wm(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function Wm(n){var e;return(e=n??Fn.Promise)!==null&&e!==void 0?e:Promise}function gE(n){return n&&Qt(n.next)&&Qt(n.error)&&Qt(n.complete)}function yE(n){return n&&n instanceof yr||gE(n)&&$a(n)}function _E(n){return Qt(n?.lift)}function jm(n){return e=>{if(_E(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function $m(n,e,t,i,r){return new bd(n,e,t,i,r)}var bd=class extends yr{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(l){e.error(l)}}:super._next,this._error=r?function(a){try{r(a)}catch(l){e.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};var qm=Wa(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var Vi=(()=>{class n extends Sd{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new Xa(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new qm}next(t){ns(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){ns(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){ns(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?yd:(this.currentObservers=null,s.push(t),new $t(()=>{this.currentObservers=null,co(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new Sd;return t.source=this,t}}return n.create=(e,t)=>new Xa(e,t),n})(),Xa=class extends Vi{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:yd}};var uo=class extends Vi{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};function wd(n,e){return jm((t,i)=>{let r=0;t.subscribe($m(i,s=>{i.next(n.call(e,s,r++))}))})}var ue=class extends Error{code;constructor(e,t){super(xE(e,t)),this.code=e}};function vE(n){return`NG0${Math.abs(n)}`}function xE(n,e){return`${vE(n)}${e?": "+e:""}`}function mh(n){return{toString:n}.toString()}function gt(n){for(let e in n)if(n[e]===gt)return e;throw Error("Could not find renamed property on target object.")}function kn(n){if(typeof n=="string")return n;if(Array.isArray(n))return`[${n.map(kn).join(", ")}]`;if(n==null)return""+n;let e=n.overriddenName||n.name;if(e)return`${e}`;let t=n.toString();if(t==null)return""+t;let i=t.indexOf(`
`);return i>=0?t.slice(0,i):t}function Xm(n,e){return n?e?`${n} ${e}`:n:e||""}var EE=gt({__forward_ref__:gt});function gh(n){return n.__forward_ref__=gh,n.toString=function(){return kn(this())},n}function Ln(n){return ME(n)?n():n}function ME(n){return typeof n=="function"&&n.hasOwnProperty(EE)&&n.__forward_ref__===gh}function pt(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function br(n){return{providers:n.providers||[],imports:n.imports||[]}}function yh(n){return Ym(n,Ng)||Ym(n,Pg)}function Ym(n,e){return n.hasOwnProperty(e)?n[e]:null}function SE(n){let e=n&&(n[Ng]||n[Pg]);return e||null}function Zm(n){return n&&(n.hasOwnProperty(Km)||n.hasOwnProperty(bE))?n[Km]:null}var Ng=gt({\u0275prov:gt}),Km=gt({\u0275inj:gt}),Pg=gt({ngInjectableDef:gt}),bE=gt({ngInjectorDef:gt}),Ke=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(e,t){this._desc=e,this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=pt({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Fg(n){return n&&!!n.\u0275providers}var wE=gt({\u0275cmp:gt}),TE=gt({\u0275dir:gt}),CE=gt({\u0275pipe:gt});var Jm=gt({\u0275fac:gt}),mo=gt({__NG_ELEMENT_ID__:gt}),Qm=gt({__NG_ENV_ID__:gt});function Og(n){return typeof n=="string"?n:n==null?"":String(n)}function DE(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():Og(n)}function Lg(n,e){throw new ue(-200,n)}function _h(n,e){throw new ue(-201,!1)}var $e=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}($e||{}),Fd;function kg(){return Fd}function xn(n){let e=Fd;return Fd=n,e}function Ug(n,e,t){let i=yh(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&$e.Optional)return null;if(e!==void 0)return e;_h(n,"Injector")}var AE={},_r=AE,IE="__NG_DI_FLAG__",tl=class{injector;constructor(e){this.injector=e}retrieve(e,t){let i=t;return this.injector.get(e,i.optional?Ga:_r,i)}},nl="ngTempTokenPath",RE="ngTokenPath",NE=/\n/gm,PE="\u0275",eg="__source";function FE(n,e=$e.Default){if(lo()===void 0)throw new ue(-203,!1);if(lo()===null)return Ug(n,void 0,e);{let t=lo(),i;return t instanceof tl?i=t.injector:i=t,i.get(n,e&$e.Optional?null:void 0,e)}}function nt(n,e=$e.Default){return(kg()||FE)(Ln(n),e)}function lt(n,e=$e.Default){return nt(n,Sl(e))}function Sl(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function Od(n){let e=[];for(let t=0;t<n.length;t++){let i=Ln(n[t]);if(Array.isArray(i)){if(i.length===0)throw new ue(900,!1);let r,s=$e.Default;for(let o=0;o<i.length;o++){let a=i[o],l=OE(a);typeof l=="number"?l===-1?r=a.token:s|=l:r=a}e.push(nt(r,s))}else e.push(nt(i))}return e}function OE(n){return n[IE]}function LE(n,e,t,i){let r=n[nl];throw e[eg]&&r.unshift(e[eg]),n.message=kE(`
`+n.message,r,t,i),n[RE]=r,n[nl]=null,n}function kE(n,e,t,i=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==PE?n.slice(2):n;let r=kn(e);if(Array.isArray(e))r=e.map(kn).join(" -> ");else if(typeof e=="object"){let s=[];for(let o in e)if(e.hasOwnProperty(o)){let a=e[o];s.push(o+":"+(typeof a=="string"?JSON.stringify(a):kn(a)))}r=`{${s.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace(NE,`
  `)}`}function go(n,e){let t=n.hasOwnProperty(Jm);return t?n[Jm]:null}function UE(n,e,t){if(n.length!==e.length)return!1;for(let i=0;i<n.length;i++){let r=n[i],s=e[i];if(t&&(r=t(r),s=t(s)),s!==r)return!1}return!0}function BE(n){return n.flat(Number.POSITIVE_INFINITY)}function vh(n,e){n.forEach(t=>Array.isArray(t)?vh(t,e):e(t))}function Bg(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function il(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}var ls={},Kn=[],rl=new Ke(""),Vg=new Ke("",-1),Hg=new Ke(""),sl=class{get(e,t=_r){if(t===_r){let i=new Error(`NullInjectorError: No provider for ${kn(e)}!`);throw i.name="NullInjectorError",i}return t}};function yo(n){return n[wE]||null}function VE(n){return n[TE]||null}function HE(n){return n[CE]||null}function zE(...n){return{\u0275providers:zg(!0,n),\u0275fromNgModule:!0}}function zg(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return vh(e,o=>{let a=o;Ld(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&Gg(r,s),t}function Gg(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];xh(r,s=>{e(s,i)})}}function Ld(n,e,t,i){if(n=Ln(n),!n)return!1;let r=null,s=Zm(n),o=!s&&yo(n);if(!s&&!o){let l=n.ngModule;if(s=Zm(l),s)r=l;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let l=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let c of l)Ld(c,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let c;try{vh(s.imports,u=>{Ld(u,e,t,i)&&(c||=[],c.push(u))})}finally{}c!==void 0&&Gg(c,e)}if(!a){let c=go(r)||(()=>new r);e({provide:r,useFactory:c,deps:Kn},r),e({provide:Hg,useValue:r,multi:!0},r),e({provide:rl,useValue:()=>nt(r),multi:!0},r)}let l=s.providers;if(l!=null&&!a){let c=n;xh(l,u=>{e(u,c)})}}else return!1;return r!==n&&n.providers!==void 0}function xh(n,e){for(let t of n)Fg(t)&&(t=t.\u0275providers),Array.isArray(t)?xh(t,e):e(t)}var GE=gt({provide:String,useValue:gt});function Wg(n){return n!==null&&typeof n=="object"&&GE in n}function WE(n){return!!(n&&n.useExisting)}function jE(n){return!!(n&&n.useFactory)}function kd(n){return typeof n=="function"}var bl=new Ke(""),Ya={},tg={},Td;function Eh(){return Td===void 0&&(Td=new sl),Td}var Gi=class{},_o=class extends Gi{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,Bd(e,o=>this.processProvider(o)),this.records.set(Vg,rs(void 0,this)),r.has("environment")&&this.records.set(Gi,rs(void 0,this));let s=this.records.get(bl);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(Hg,Kn,$e.Self))}retrieve(e,t){let i=t;return this.get(e,i.optional?Ga:_r,i)}destroy(){fo(this),this._destroyed=!0;let e=Je(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),Je(e)}}onDestroy(e){return fo(this),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){fo(this);let t=hi(this),i=xn(void 0),r;try{return e()}finally{hi(t),xn(i)}}get(e,t=_r,i=$e.Default){if(fo(this),e.hasOwnProperty(Qm))return e[Qm](this);i=Sl(i);let r,s=hi(this),o=xn(void 0);try{if(!(i&$e.SkipSelf)){let l=this.records.get(e);if(l===void 0){let c=KE(e)&&yh(e);c&&this.injectableDefInScope(c)?l=rs(Ud(e),Ya):l=null,this.records.set(e,l)}if(l!=null)return this.hydrate(e,l,i)}let a=i&$e.Self?Eh():this.parent;return t=i&$e.Optional&&t===_r?null:t,a.get(e,t)}catch(a){if(a.name==="NullInjectorError"){if((a[nl]=a[nl]||[]).unshift(kn(e)),s)throw a;return LE(a,e,"R3InjectorError",this.source)}else throw a}finally{xn(o),hi(s)}}resolveInjectorInitializers(){let e=Je(null),t=hi(this),i=xn(void 0),r;try{let s=this.get(rl,Kn,$e.Self);for(let o of s)o()}finally{hi(t),xn(i),Je(e)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(kn(i));return`R3Injector[${e.join(", ")}]`}processProvider(e){e=Ln(e);let t=kd(e)?e:Ln(e&&e.provide),i=qE(e);if(!kd(e)&&e.multi===!0){let r=this.records.get(t);r||(r=rs(void 0,Ya,!0),r.factory=()=>Od(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t,i){let r=Je(null);try{return t.value===tg?Lg(kn(e)):t.value===Ya&&(t.value=tg,t.value=t.factory(void 0,i)),typeof t.value=="object"&&t.value&&ZE(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{Je(r)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=Ln(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function Ud(n){let e=yh(n),t=e!==null?e.factory:go(n);if(t!==null)return t;if(n instanceof Ke)throw new ue(204,!1);if(n instanceof Function)return $E(n);throw new ue(204,!1)}function $E(n){if(n.length>0)throw new ue(204,!1);let t=SE(n);return t!==null?()=>t.factory(n):()=>new n}function qE(n){if(Wg(n))return rs(void 0,n.useValue);{let e=XE(n);return rs(e,Ya)}}function XE(n,e,t){let i;if(kd(n)){let r=Ln(n);return go(r)||Ud(r)}else if(Wg(n))i=()=>Ln(n.useValue);else if(jE(n))i=()=>n.useFactory(...Od(n.deps||[]));else if(WE(n))i=(r,s)=>nt(Ln(n.useExisting),s!==void 0&&s&$e.Optional?$e.Optional:void 0);else{let r=Ln(n&&(n.useClass||n.provide));if(YE(n))i=()=>new r(...Od(n.deps));else return go(r)||Ud(r)}return i}function fo(n){if(n.destroyed)throw new ue(205,!1)}function rs(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function YE(n){return!!n.deps}function ZE(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function KE(n){return typeof n=="function"||typeof n=="object"&&n instanceof Ke}function Bd(n,e){for(let t of n)Array.isArray(t)?Bd(t,e):t&&Fg(t)?Bd(t.\u0275providers,e):e(t)}function jg(n,e){let t;n instanceof _o?(fo(n),t=n):t=new tl(n);let i,r=hi(t),s=xn(void 0);try{return e()}finally{hi(r),xn(s)}}function JE(){return kg()!==void 0||lo()!=null}function QE(n){return typeof n=="function"}var yi=0,qe=1,Ve=2,Bt=3,Un=4,Bn=5,ol=6,al=7,en=8,cs=9,Wi=10,qt=11,vo=12,ng=13,fs=14,fi=15,xr=16,ss=17,pi=18,wl=19,$g=20,Hi=21,Cd=22,ll=23,En=24,Dd=25,Qn=26,qg=1;var Er=7,cl=8,us=9,un=10;function zi(n){return Array.isArray(n)&&typeof n[qg]=="object"}function _i(n){return Array.isArray(n)&&n[qg]===!0}function Xg(n){return(n.flags&4)!==0}function bo(n){return n.componentOffset>-1}function Mh(n){return(n.flags&1)===1}function wr(n){return!!n.template}function ul(n){return(n[Ve]&512)!==0}function ps(n){return(n[Ve]&256)===256}var Vd=class{previousValue;currentValue;firstChange;constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function Yg(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}function eM(n){return n.type.prototype.ngOnChanges&&(n.setInput=nM),tM}function tM(){let n=Kg(this),e=n?.current;if(e){let t=n.previous;if(t===ls)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function nM(n,e,t,i,r){let s=this.declaredInputs[i],o=Kg(n)||iM(n,{previous:ls,current:null}),a=o.current||(o.current={}),l=o.previous,c=l[s];a[s]=new Vd(c&&c.currentValue,t,l===ls),Yg(n,e,r,t)}var Zg="__ngSimpleChanges__";function Kg(n){return n[Zg]||null}function iM(n,e){return n[Zg]=e}var ig=null;var ft=function(n,e=null,t){ig?.(n,e,t)},rM="svg",sM="math";function ei(n){for(;Array.isArray(n);)n=n[yi];return n}function oM(n,e){return ei(e[n])}function vi(n,e){return ei(e[n.index])}function Jg(n,e){return n.data[e]}function aM(n,e){return n[e]}function mi(n,e){let t=e[n];return zi(t)?t:t[yi]}function lM(n){return(n[Ve]&4)===4}function Sh(n){return(n[Ve]&128)===128}function cM(n){return _i(n[Bt])}function dl(n,e){return e==null?null:n[e]}function Qg(n){n[ss]=0}function ey(n){n[Ve]&1024||(n[Ve]|=1024,Sh(n)&&Cl(n))}function uM(n,e){for(;n>0;)e=e[fs],n--;return e}function Tl(n){return!!(n[Ve]&9216||n[En]?.dirty)}function Hd(n){n[Wi].changeDetectionScheduler?.notify(8),n[Ve]&64&&(n[Ve]|=1024),Tl(n)&&Cl(n)}function Cl(n){n[Wi].changeDetectionScheduler?.notify(0);let e=Mr(n);for(;e!==null&&!(e[Ve]&8192||(e[Ve]|=8192,!Sh(e)));)e=Mr(e)}function ty(n,e){if(ps(n))throw new ue(911,!1);n[Hi]===null&&(n[Hi]=[]),n[Hi].push(e)}function dM(n,e){if(n[Hi]===null)return;let t=n[Hi].indexOf(e);t!==-1&&n[Hi].splice(t,1)}function Mr(n){let e=n[Bt];return _i(e)?e[Bt]:e}function bh(n){return n[al]??=[]}function wh(n){return n.cleanup??=[]}function hM(n,e,t,i){let r=bh(e);r.push(t),n.firstCreatePass&&wh(n).push(i,r.length-1)}var Xe={lFrame:dy(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var zd=!1;function fM(){return Xe.lFrame.elementDepthCount}function pM(){Xe.lFrame.elementDepthCount++}function mM(){Xe.lFrame.elementDepthCount--}function ny(){return Xe.bindingsEnabled}function gM(){return Xe.skipHydrationRootTNode!==null}function yM(n){return Xe.skipHydrationRootTNode===n}function _M(){Xe.skipHydrationRootTNode=null}function St(){return Xe.lFrame.lView}function xi(){return Xe.lFrame.tView}function tn(n){return Xe.lFrame.contextLView=n,n[en]}function nn(n){return Xe.lFrame.contextLView=null,n}function Ei(){let n=iy();for(;n!==null&&n.type===64;)n=n.parent;return n}function iy(){return Xe.lFrame.currentTNode}function vM(){let n=Xe.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function wo(n,e){let t=Xe.lFrame;t.currentTNode=n,t.isParent=e}function ry(){return Xe.lFrame.isParent}function xM(){Xe.lFrame.isParent=!1}function EM(){return Xe.lFrame.contextLView}function sy(){return zd}function rg(n){let e=zd;return zd=n,e}function oy(){let n=Xe.lFrame,e=n.bindingRootIndex;return e===-1&&(e=n.bindingRootIndex=n.tView.bindingStartIndex),e}function MM(n){return Xe.lFrame.bindingIndex=n}function ay(){return Xe.lFrame.bindingIndex++}function SM(){return Xe.lFrame.inI18n}function bM(n,e){let t=Xe.lFrame;t.bindingIndex=t.bindingRootIndex=n,Gd(e)}function wM(){return Xe.lFrame.currentDirectiveIndex}function Gd(n){Xe.lFrame.currentDirectiveIndex=n}function ly(){return Xe.lFrame.currentQueryIndex}function Th(n){Xe.lFrame.currentQueryIndex=n}function TM(n){let e=n[qe];return e.type===2?e.declTNode:e.type===1?n[Bn]:null}function cy(n,e,t){if(t&$e.SkipSelf){let r=e,s=n;for(;r=r.parent,r===null&&!(t&$e.Host);)if(r=TM(s),r===null||(s=s[fs],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=Xe.lFrame=uy();return i.currentTNode=e,i.lView=n,!0}function Ch(n){let e=uy(),t=n[qe];Xe.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function uy(){let n=Xe.lFrame,e=n===null?null:n.child;return e===null?dy(n):e}function dy(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function hy(){let n=Xe.lFrame;return Xe.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var fy=hy;function Dh(){let n=hy();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function CM(n){return(Xe.lFrame.contextLView=uM(n,Xe.lFrame.contextLView))[en]}function Ah(){return Xe.lFrame.selectedIndex}function Sr(n){Xe.lFrame.selectedIndex=n}function DM(){let n=Xe.lFrame;return Jg(n.tView,n.selectedIndex)}function AM(){return Xe.lFrame.currentNamespace}var py=!0;function Ih(){return py}function Rh(n){py=n}function IM(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=eM(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function my(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),l&&(n.viewHooks??=[]).push(-t,l),c&&((n.viewHooks??=[]).push(t,c),(n.viewCheckHooks??=[]).push(t,c)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function Za(n,e,t){gy(n,e,3,t)}function Ka(n,e,t,i){(n[Ve]&3)===t&&gy(n,e,t,i)}function Ad(n,e){let t=n[Ve];(t&3)===e&&(t&=16383,t+=1,n[Ve]=t)}function gy(n,e,t,i){let r=i!==void 0?n[ss]&65535:0,s=i??-1,o=e.length-1,a=0;for(let l=r;l<o;l++)if(typeof e[l+1]=="number"){if(a=e[l],i!=null&&a>=i)break}else e[l]<0&&(n[ss]+=65536),(a<s||s==-1)&&(RM(n,t,e,l),n[ss]=(n[ss]&4294901760)+l+2),l++}function sg(n,e){ft(4,n,e);let t=Je(null);try{e.call(n)}finally{Je(t),ft(5,n,e)}}function RM(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[Ve]>>14<n[ss]>>16&&(n[Ve]&3)===e&&(n[Ve]+=16384,sg(a,s)):sg(a,s)}var as=-1,xo=class{factory;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(e,t,i){this.factory=e,this.canSeeViewProviders=t,this.injectImpl=i}};function NM(n){return(n.flags&8)!==0}function PM(n){return(n.flags&16)!==0}function FM(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];LM(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function OM(n){return n===3||n===4||n===6}function LM(n){return n.charCodeAt(0)===64}function Nh(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?og(n,t,r,null,e[++i]):og(n,t,r,null,null))}}return n}function og(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){r!==null&&(n[s+1]=r);return}s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),r!==null&&n.splice(s++,0,r)}function yy(n){return n!==as}function hl(n){return n&32767}function kM(n){return n>>16}function fl(n,e){let t=kM(n),i=e;for(;t>0;)i=i[fs],t--;return i}var Wd=!0;function ag(n){let e=Wd;return Wd=n,e}var UM=256,_y=UM-1,vy=5,BM=0,Jn={};function VM(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(mo)&&(i=t[mo]),i==null&&(i=t[mo]=BM++);let r=i&_y,s=1<<r;e.data[n+(r>>vy)]|=s}function xy(n,e){let t=Ey(n,e);if(t!==-1)return t;let i=e[qe];i.firstCreatePass&&(n.injectorIndex=e.length,Id(i.data,n),Id(e,null),Id(i.blueprint,null));let r=Ph(n,e),s=n.injectorIndex;if(yy(r)){let o=hl(r),a=fl(r,e),l=a[qe].data;for(let c=0;c<8;c++)e[s+c]=a[o+c]|l[o+c]}return e[s+8]=r,s}function Id(n,e){n.push(0,0,0,0,0,0,0,0,e)}function Ey(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function Ph(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=Ty(r),i===null)return as;if(t++,r=r[fs],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return as}function HM(n,e,t){VM(n,e,t)}function My(n,e,t){if(t&$e.Optional||n!==void 0)return n;_h(e,"NodeInjector")}function Sy(n,e,t,i){if(t&$e.Optional&&i===void 0&&(i=null),(t&($e.Self|$e.Host))===0){let r=n[cs],s=xn(void 0);try{return r?r.get(e,i,t&$e.Optional):Ug(e,i,t&$e.Optional)}finally{xn(s)}}return My(i,e,t)}function by(n,e,t,i=$e.Default,r){if(n!==null){if(e[Ve]&2048&&!(i&$e.Self)){let o=jM(n,e,t,i,Jn);if(o!==Jn)return o}let s=wy(n,e,t,i,Jn);if(s!==Jn)return s}return Sy(e,t,i,r)}function wy(n,e,t,i,r){let s=GM(t);if(typeof s=="function"){if(!cy(e,n,i))return i&$e.Host?My(r,t,i):Sy(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&$e.Optional))_h(t);else return o}finally{fy()}}else if(typeof s=="number"){let o=null,a=Ey(n,e),l=as,c=i&$e.Host?e[fi][Bn]:null;for((a===-1||i&$e.SkipSelf)&&(l=a===-1?Ph(n,e):e[a+8],l===as||!cg(i,!1)?a=-1:(o=e[qe],a=hl(l),e=fl(l,e)));a!==-1;){let u=e[qe];if(lg(s,a,u.data)){let d=zM(a,e,t,o,i,c);if(d!==Jn)return d}l=e[a+8],l!==as&&cg(i,e[qe].data[a+8]===c)&&lg(s,a,e)?(o=u,a=hl(l),e=fl(l,e)):a=-1}}return r}function zM(n,e,t,i,r,s){let o=e[qe],a=o.data[n+8],l=i==null?bo(a)&&Wd:i!=o&&(a.type&3)!==0,c=r&$e.Host&&s===a,u=Ja(a,o,t,l,c);return u!==null?pl(e,o,u,a,r):Jn}function Ja(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,l=n.directiveStart,c=n.directiveEnd,u=s>>20,d=i?a:a+u,f=r?a+u:c;for(let h=d;h<f;h++){let g=o[h];if(h<l&&t===g||h>=l&&g.type===t)return h}if(r){let h=o[l];if(h&&wr(h)&&h.type===t)return l}return null}function pl(n,e,t,i,r){let s=n[t],o=e.data;if(s instanceof xo){let a=s;a.resolving&&Lg(DE(o[t]));let l=ag(a.canSeeViewProviders);a.resolving=!0;let c,u=a.injectImpl?xn(a.injectImpl):null,d=cy(n,i,$e.Default);try{s=n[t]=a.factory(void 0,r,o,n,i),e.firstCreatePass&&t>=i.directiveStart&&IM(t,o[t],e)}finally{u!==null&&xn(u),ag(l),a.resolving=!1,fy()}}return s}function GM(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(mo)?n[mo]:void 0;return typeof e=="number"?e>=0?e&_y:WM:e}function lg(n,e,t){let i=1<<n;return!!(t[e+(n>>vy)]&i)}function cg(n,e){return!(n&$e.Self)&&!(n&$e.Host&&e)}var vr=class{_tNode;_lView;constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return by(this._tNode,this._lView,e,Sl(i),t)}};function WM(){return new vr(Ei(),St())}function jM(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[Ve]&2048&&!ul(o);){let a=wy(s,o,t,i|$e.Self,Jn);if(a!==Jn)return a;let l=s.parent;if(!l){let c=o[$g];if(c){let u=c.get(t,Jn,i);if(u!==Jn)return u}l=Ty(o),o=o[fs]}s=l}return r}function Ty(n){let e=n[qe],t=e.type;return t===2?e.declTNode:t===1?n[Bn]:null}function ug(n,e=null,t=null,i){let r=$M(n,e,t,i);return r.resolveInjectorInitializers(),r}function $M(n,e=null,t=null,i,r=new Set){let s=[t||Kn,zE(n)];return i=i||(typeof n=="object"?void 0:kn(n)),new _o(s,e||Eh(),i||null,r)}var ds=class n{static THROW_IF_NOT_FOUND=_r;static NULL=new sl;static create(e,t){if(Array.isArray(e))return ug({name:""},t,e,"");{let i=e.name??"";return ug({name:i},e.parent,e.providers,i)}}static \u0275prov=pt({token:n,providedIn:"any",factory:()=>nt(Vg)});static __NG_ELEMENT_ID__=-1};var qM=new Ke("");qM.__NG_ELEMENT_ID__=n=>{let e=Ei();if(e===null)throw new ue(204,!1);if(e.type&2)return e.value;if(n&$e.Optional)return null;throw new ue(204,!1)};var Cy=!1,Dy=(()=>{class n{static __NG_ELEMENT_ID__=XM;static __NG_ENV_ID__=t=>t}return n})(),jd=class extends Dy{_lView;constructor(e){super(),this._lView=e}onDestroy(e){let t=this._lView;return ps(t)?(e(),()=>{}):(ty(t,e),()=>dM(t,e))}};function XM(){return new jd(St())}var Eo=class{},Ay=new Ke("",{providedIn:"root",factory:()=>!1});var Iy=new Ke(""),Ry=new Ke(""),Dl=(()=>{class n{taskId=0;pendingTasks=new Set;get _hasPendingTasks(){return this.hasPendingTasks.value}hasPendingTasks=new uo(!1);add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),t}has(t){return this.pendingTasks.has(t)}remove(t){this.pendingTasks.delete(t),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}static \u0275prov=pt({token:n,providedIn:"root",factory:()=>new n})}return n})();var $d=class extends Vi{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(e=!1){super(),this.__isAsync=e,JE()&&(this.destroyRef=lt(Dy,{optional:!0})??void 0,this.pendingTasks=lt(Dl,{optional:!0})??void 0)}emit(e){let t=Je(null);try{super.next(e)}finally{Je(t)}}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let l=e;r=l.next?.bind(l),s=l.error?.bind(l),o=l.complete?.bind(l)}this.__isAsync&&(s=this.wrapInTimeout(s),r&&(r=this.wrapInTimeout(r)),o&&(o=this.wrapInTimeout(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof $t&&e.add(a),a}wrapInTimeout(e){return t=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{e(t)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},cn=$d;function ml(...n){}function Ny(n){let e,t;function i(){n=ml;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),e!==void 0&&clearTimeout(e)}catch{}}return e=setTimeout(()=>{n(),i()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{n(),i()})),()=>i()}function dg(n){return queueMicrotask(()=>n()),()=>{n=ml}}var Fh="isAngularZone",gl=Fh+"_ID",YM=0,Rt=class n{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new cn(!1);onMicrotaskEmpty=new cn(!1);onStable=new cn(!1);onError=new cn(!1);constructor(e){let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:s=Cy}=e;if(typeof Zone>"u")throw new ue(908,!1);Zone.assertZonePatched();let o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&i,o.shouldCoalesceRunChangeDetection=r,o.callbackScheduled=!1,o.scheduleInRootZone=s,JM(o)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Fh)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new ue(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new ue(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,ZM,ml,ml);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},ZM={};function Oh(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function KM(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function e(){Ny(()=>{n.callbackScheduled=!1,qd(n),n.isCheckStableRunning=!0,Oh(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{e()}):n._outer.run(()=>{e()}),qd(n)}function JM(n){let e=()=>{KM(n)},t=YM++;n._inner=n._inner.fork({name:"angular",properties:{[Fh]:!0,[gl]:t,[gl+t]:!0},onInvokeTask:(i,r,s,o,a,l)=>{if(QM(l))return i.invokeTask(s,o,a,l);try{return hg(n),i.invokeTask(s,o,a,l)}finally{(n.shouldCoalesceEventChangeDetection&&o.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),fg(n)}},onInvoke:(i,r,s,o,a,l,c)=>{try{return hg(n),i.invoke(s,o,a,l,c)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!eS(l)&&e(),fg(n)}},onHasTask:(i,r,s,o)=>{i.hasTask(s,o),r===s&&(o.change=="microTask"?(n._hasPendingMicrotasks=o.microTask,qd(n),Oh(n)):o.change=="macroTask"&&(n.hasPendingMacrotasks=o.macroTask))},onHandleError:(i,r,s,o)=>(i.handleError(s,o),n.runOutsideAngular(()=>n.onError.emit(o)),!1)})}function qd(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function hg(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function fg(n){n._nesting--,Oh(n)}var Xd=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new cn;onMicrotaskEmpty=new cn;onStable=new cn;onError=new cn;run(e,t,i){return e.apply(t,i)}runGuarded(e,t,i){return e.apply(t,i)}runOutsideAngular(e){return e()}runTask(e,t,i,r){return e.apply(t,i)}};function QM(n){return Py(n,"__ignore_ng_zone__")}function eS(n){return Py(n,"__scheduler_tick__")}function Py(n,e){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[e]===!0}var gi=class{_console=console;handleError(e){this._console.error("ERROR",e)}},tS=new Ke("",{providedIn:"root",factory:()=>{let n=lt(Rt),e=lt(gi);return t=>n.runOutsideAngular(()=>e.handleError(t))}});function nS(){return ms(Ei(),St())}function ms(n,e){return new Tr(vi(n,e))}var Tr=(()=>{class n{nativeElement;constructor(t){this.nativeElement=t}static __NG_ELEMENT_ID__=nS}return n})();function iS(n){return n instanceof Tr?n.nativeElement:n}function rS(){return this._results[Symbol.iterator]()}var Yd=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new Vi}constructor(e=!1){this._emitDistinctChangesOnly=e}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,t){this.dirty=!1;let i=BE(e);(this._changesDetected=!UE(this._results,i,t))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=rS};function Fy(n){return(n.flags&128)===128}var Oy=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(Oy||{}),Ly=new Map,sS=0;function oS(){return sS++}function aS(n){Ly.set(n[wl],n)}function Zd(n){Ly.delete(n[wl])}var pg="__ngContext__";function To(n,e){zi(e)?(n[pg]=e[wl],aS(e)):n[pg]=e}function ky(n){return By(n[vo])}function Uy(n){return By(n[Un])}function By(n){for(;n!==null&&!_i(n);)n=n[Un];return n}var Kd;function Vy(n){Kd=n}function lS(){if(Kd!==void 0)return Kd;if(typeof document<"u")return document;throw new ue(210,!1)}var Lh=new Ke("",{providedIn:"root",factory:()=>cS}),cS="ng",kh=new Ke(""),Co=new Ke("",{providedIn:"platform",factory:()=>"unknown"});var Uh=new Ke(""),Bh=new Ke("",{providedIn:"root",factory:()=>lS().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var uS="h",dS="b";var Hy=!1,hS=new Ke("",{providedIn:"root",factory:()=>Hy});var zy=function(n){return n[n.CHANGE_DETECTION=0]="CHANGE_DETECTION",n[n.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",n}(zy||{}),Al=new Ke(""),mg=new Set;function Vh(n){mg.has(n)||(mg.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}var fS=(()=>{class n{impl=null;execute(){this.impl?.execute()}static \u0275prov=pt({token:n,providedIn:"root",factory:()=>new n})}return n})();var pS=(n,e,t,i)=>{};function mS(n,e,t,i){pS(n,e,t,i)}var gS=()=>null;function Gy(n,e,t=!1){return gS(n,e,t)}function Wy(n,e){let t=n.contentQueries;if(t!==null){let i=Je(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];Th(s),a.contentQueries(2,e[o],o)}}}finally{Je(i)}}}function Jd(n,e,t){Th(0);let i=Je(null);try{e(n,t)}finally{Je(i)}}function jy(n,e,t){if(Xg(e)){let i=Je(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];if(a.contentQueries){let l=t[o];a.contentQueries(1,l,o)}}}finally{Je(i)}}}var ti=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(ti||{});function $y(n){return n.ownerDocument.defaultView}function yS(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}var qy="ng-template";function _S(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&yS(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(Hh(n))return!1;if(r=e.indexOf(1,r),r>-1){let s;for(;++r<e.length&&typeof(s=e[r])=="string";)if(s.toLowerCase()===t)return!0}return!1}function Hh(n){return n.type===4&&n.value!==qy}function vS(n,e,t){let i=n.type===4&&!t?qy:n.value;return e===i}function xS(n,e,t){let i=4,r=n.attrs,s=r!==null?SS(r):0,o=!1;for(let a=0;a<e.length;a++){let l=e[a];if(typeof l=="number"){if(!o&&!On(i)&&!On(l))return!1;if(o&&On(l))continue;o=!1,i=l|i&1;continue}if(!o)if(i&4){if(i=2|i&1,l!==""&&!vS(n,l,t)||l===""&&e.length===1){if(On(i))return!1;o=!0}}else if(i&8){if(r===null||!_S(n,r,l,t)){if(On(i))return!1;o=!0}}else{let c=e[++a],u=ES(l,r,Hh(n),t);if(u===-1){if(On(i))return!1;o=!0;continue}if(c!==""){let d;if(u>s?d="":d=r[u+1].toLowerCase(),i&2&&c!==d){if(On(i))return!1;o=!0}}}}return On(i)||o}function On(n){return(n&1)===0}function ES(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return bS(e,n)}function MS(n,e,t=!1){for(let i=0;i<e.length;i++)if(xS(n,e[i],t))return!0;return!1}function SS(n){for(let e=0;e<n.length;e++){let t=n[e];if(OM(t))return e}return n.length}function bS(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function gg(n,e){return n?":not("+e.trim()+")":e}function wS(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!On(o)&&(e+=gg(s,r),r=""),i=o,s=s||!On(i);t++}return r!==""&&(e+=gg(s,r)),e}function TS(n){return n.map(wS).join(",")}function CS(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!On(r))break;r=s}i++}return t.length&&e.push(1,...t),e}var Do={};function DS(n,e){return n.createText(e)}function AS(n,e,t){n.setValue(e,t)}function Xy(n,e,t){return n.createElement(e,t)}function yl(n,e,t,i,r){n.insertBefore(e,t,i,r)}function Yy(n,e,t){n.appendChild(e,t)}function yg(n,e,t,i,r){i!==null?yl(n,e,t,i,r):Yy(n,e,t)}function IS(n,e,t){n.removeChild(null,e,t)}function RS(n,e,t){n.setAttribute(e,"style",t)}function NS(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function Zy(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&FM(n,e,i),r!==null&&NS(n,e,r),s!==null&&RS(n,e,s)}function zh(n,e,t,i,r,s,o,a,l,c,u){let d=Qn+i,f=d+r,h=PS(d,f),g=typeof c=="function"?c():c;return h[qe]={type:n,blueprint:h,template:t,queries:null,viewQuery:a,declTNode:e,data:h.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:l,consts:g,incompleteFirstPass:!1,ssrId:u}}function PS(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:Do);return t}function FS(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=zh(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function Gh(n,e,t,i,r,s,o,a,l,c,u){let d=e.blueprint.slice();return d[yi]=r,d[Ve]=i|4|128|8|64|1024,(c!==null||n&&n[Ve]&2048)&&(d[Ve]|=2048),Qg(d),d[Bt]=d[fs]=n,d[en]=t,d[Wi]=o||n&&n[Wi],d[qt]=a||n&&n[qt],d[cs]=l||n&&n[cs]||null,d[Bn]=s,d[wl]=oS(),d[ol]=u,d[$g]=c,d[fi]=e.type==2?n[fi]:d,d}function OS(n,e,t){let i=vi(e,n),r=FS(t),s=n[Wi].rendererFactory,o=Wh(n,Gh(n,r,null,Ky(t),i,e,null,s.createRenderer(i,t),null,null,null));return n[e.index]=o}function Ky(n){let e=16;return n.signals?e=4096:n.onPush&&(e=64),e}function Jy(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function Wh(n,e){return n[vo]?n[ng][Un]=e:n[vo]=e,n[ng]=e,e}function bt(n=1){Qy(xi(),St(),Ah()+n,!1)}function Qy(n,e,t,i){if(!i)if((e[Ve]&3)===3){let s=n.preOrderCheckHooks;s!==null&&Za(e,s,t)}else{let s=n.preOrderHooks;s!==null&&Ka(e,s,0,t)}Sr(t)}var Il=function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n}(Il||{});function Qd(n,e,t,i){let r=Je(null);try{let[s,o,a]=n.inputs[t],l=null;(o&Il.SignalBased)!==0&&(l=e[s][ao]),l!==null&&l.transformFn!==void 0?i=l.transformFn(i):a!==null&&(i=a.call(e,i)),n.setInput!==null?n.setInput(e,l,i,t,s):Yg(e,l,s,i)}finally{Je(r)}}function e_(n,e,t,i,r){let s=Ah(),o=i&2;try{Sr(-1),o&&e.length>Qn&&Qy(n,e,Qn,!1),ft(o?2:0,r),t(i,r)}finally{Sr(s),ft(o?3:1,r)}}function jh(n,e,t){zS(n,e,t),(t.flags&64)===64&&GS(n,e,t)}function t_(n,e,t=vi){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function LS(n,e,t,i){let s=i.get(hS,Hy)||t===ti.ShadowDom,o=n.selectRootElement(e,s);return kS(o),o}function kS(n){US(n)}var US=()=>null;function BS(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function VS(n,e,t,i,r,s,o,a){if(!a&&$h(e,n,t,i,r)){bo(e)&&HS(t,e.index);return}if(e.type&3){let l=vi(e,t);i=BS(i),r=o!=null?o(r,e.value||"",i):r,s.setProperty(l,i,r)}else e.type&12}function HS(n,e){let t=mi(e,n);t[Ve]&16||(t[Ve]|=64)}function zS(n,e,t){let i=t.directiveStart,r=t.directiveEnd;bo(t)&&OS(e,t,n.data[i+t.componentOffset]),n.firstCreatePass||xy(t,e);let s=t.initialInputs;for(let o=i;o<r;o++){let a=n.data[o],l=pl(e,n,o,t);if(To(l,e),s!==null&&jS(e,o-i,l,a,t,s),wr(a)){let c=mi(t.index,e);c[en]=pl(e,n,o,t)}}}function GS(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=wM();try{Sr(s);for(let a=i;a<r;a++){let l=n.data[a],c=e[a];Gd(a),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&WS(l,c)}}finally{Sr(-1),Gd(o)}}function WS(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function n_(n,e){let t=n.directiveRegistry,i=null;if(t)for(let r=0;r<t.length;r++){let s=t[r];MS(e,s.selectors,!1)&&(i??=[],wr(s)?i.unshift(s):i.push(s))}return i}function jS(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;a+=2){let l=o[a],c=o[a+1];Qd(i,t,l,c)}}function $S(n,e){let t=n[cs],i=t?t.get(gi,null):null;i&&i.handleError(e)}function $h(n,e,t,i,r){let s=n.inputs?.[i],o=n.hostDirectiveInputs?.[i],a=!1;if(o)for(let l=0;l<o.length;l+=2){let c=o[l],u=o[l+1],d=e.data[c];Qd(d,t[c],u,r),a=!0}if(s)for(let l of s){let c=t[l],u=e.data[l];Qd(u,c,i,r),a=!0}return a}function qS(n,e){let t=mi(e,n),i=t[qe];XS(i,t);let r=t[yi];r!==null&&t[ol]===null&&(t[ol]=Gy(r,t[cs])),ft(18),qh(i,t,t[en]),ft(19,t[en])}function XS(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function qh(n,e,t){Ch(e);try{let i=n.viewQuery;i!==null&&Jd(1,i,t);let r=n.template;r!==null&&e_(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[pi]?.finishViewCreation(n),n.staticContentQueries&&Wy(n,e),n.staticViewQueries&&Jd(2,n.viewQuery,t);let s=n.components;s!==null&&YS(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[Ve]&=-5,Dh()}}function YS(n,e){for(let t=0;t<e.length;t++)qS(n,e[t])}function ZS(n,e,t,i){let r=Je(null);try{let s=e.tView,a=n[Ve]&4096?4096:16,l=Gh(n,s,t,a,null,e,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),c=n[e.index];l[xr]=c;let u=n[pi];return u!==null&&(l[pi]=u.createEmbeddedView(s)),qh(s,l,t),l}finally{Je(r)}}function _g(n,e){return!e||e.firstChild===null||Fy(n)}var KS;function Xh(n,e){return KS(n,e)}var Cr=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(Cr||{});function i_(n){return(n.flags&32)===32}function os(n,e,t,i,r){if(i!=null){let s,o=!1;_i(i)?s=i:zi(i)&&(o=!0,i=i[yi]);let a=ei(i);n===0&&t!==null?r==null?Yy(e,t,a):yl(e,t,a,r||null,!0):n===1&&t!==null?yl(e,t,a,r||null,!0):n===2?IS(e,a,o):n===3&&e.destroyNode(a),s!=null&&cb(e,n,s,t,r)}}function JS(n,e){r_(n,e),e[yi]=null,e[Bn]=null}function QS(n,e,t,i,r,s){i[yi]=r,i[Bn]=e,Rl(n,i,t,1,r,s)}function r_(n,e){e[Wi].changeDetectionScheduler?.notify(9),Rl(n,e,e[qt],2,null,null)}function eb(n){let e=n[vo];if(!e)return Rd(n[qe],n);for(;e;){let t=null;if(zi(e))t=e[vo];else{let i=e[un];i&&(t=i)}if(!t){for(;e&&!e[Un]&&e!==n;)zi(e)&&Rd(e[qe],e),e=e[Bt];e===null&&(e=n),zi(e)&&Rd(e[qe],e),t=e&&e[Un]}e=t}}function Yh(n,e){let t=n[us],i=t.indexOf(e);t.splice(i,1)}function s_(n,e){if(ps(e))return;let t=e[qt];t.destroyNode&&Rl(n,e,t,3,null,null),eb(e)}function Rd(n,e){if(ps(e))return;let t=Je(null);try{e[Ve]&=-129,e[Ve]|=256,e[En]&&dd(e[En]),nb(n,e),tb(n,e),e[qe].type===1&&e[qt].destroy();let i=e[xr];if(i!==null&&_i(e[Bt])){i!==e[Bt]&&Yh(i,e);let r=e[pi];r!==null&&r.detachView(n)}Zd(e)}finally{Je(t)}}function tb(n,e){let t=n.cleanup,i=e[al];if(t!==null)for(let o=0;o<t.length-1;o+=2)if(typeof t[o]=="string"){let a=t[o+3];a>=0?i[a]():i[-a].unsubscribe(),o+=2}else{let a=i[t[o+1]];t[o].call(a)}i!==null&&(e[al]=null);let r=e[Hi];if(r!==null){e[Hi]=null;for(let o=0;o<r.length;o++){let a=r[o];a()}}let s=e[ll];if(s!==null){e[ll]=null;for(let o of s)o.destroy()}}function nb(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof xo)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],l=s[o+1];ft(4,a,l);try{l.call(a)}finally{ft(5,a,l)}}else{ft(4,r,s);try{s.call(r)}finally{ft(5,r,s)}}}}}function ib(n,e,t){return rb(n,e.parent,t)}function rb(n,e,t){let i=e;for(;i!==null&&i.type&168;)e=i,i=e.parent;if(i===null)return t[yi];if(bo(i)){let{encapsulation:r}=n.data[i.directiveStart+i.componentOffset];if(r===ti.None||r===ti.Emulated)return null}return vi(i,t)}function sb(n,e,t){return ab(n,e,t)}function ob(n,e,t){return n.type&40?vi(n,t):null}var ab=ob,vg;function Zh(n,e,t,i){let r=ib(n,i,e),s=e[qt],o=i.parent||e[Bn],a=sb(o,i,e);if(r!=null)if(Array.isArray(t))for(let l=0;l<t.length;l++)yg(s,r,t[l],a,!1);else yg(s,r,t,a,!1);vg!==void 0&&vg(s,i,e,t,r)}function po(n,e){if(e!==null){let t=e.type;if(t&3)return vi(e,n);if(t&4)return eh(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return po(n,i);{let r=n[e.index];return _i(r)?eh(-1,r):ei(r)}}else{if(t&128)return po(n,e.next);if(t&32)return Xh(e,n)()||ei(n[e.index]);{let i=o_(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=Mr(n[fi]);return po(r,i)}else return po(n,e.next)}}}return null}function o_(n,e){if(e!==null){let i=n[fi][Bn],r=e.projection;return i.projection[r]}return null}function eh(n,e){let t=un+n+1;if(t<e.length){let i=e[t],r=i[qe].firstChild;if(r!==null)return po(i,r)}return e[Er]}function Kh(n,e,t,i,r,s,o){for(;t!=null;){if(t.type===128){t=t.next;continue}let a=i[t.index],l=t.type;if(o&&e===0&&(a&&To(ei(a),i),t.flags|=2),!i_(t))if(l&8)Kh(n,e,t.child,i,r,s,!1),os(e,n,r,a,s);else if(l&32){let c=Xh(t,i),u;for(;u=c();)os(e,n,r,u,s);os(e,n,r,a,s)}else l&16?lb(n,e,i,t,r,s):os(e,n,r,a,s);t=o?t.projectionNext:t.next}}function Rl(n,e,t,i,r,s){Kh(t,i,n.firstChild,e,r,s,!1)}function lb(n,e,t,i,r,s){let o=t[fi],l=o[Bn].projection[i.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++){let u=l[c];os(e,n,r,u,s)}else{let c=l,u=o[Bt];Fy(i)&&(c.flags|=128),Kh(n,e,c,u,r,s,!0)}}function cb(n,e,t,i,r){let s=t[Er],o=ei(t);s!==o&&os(e,n,i,s,r);for(let a=un;a<t.length;a++){let l=t[a];Rl(l[qe],l,n,e,i,s)}}function _l(n,e,t,i,r=!1){for(;t!==null;){if(t.type===128){t=r?t.projectionNext:t.next;continue}let s=e[t.index];s!==null&&i.push(ei(s)),_i(s)&&ub(s,i);let o=t.type;if(o&8)_l(n,e,t.child,i);else if(o&32){let a=Xh(t,e),l;for(;l=a();)i.push(l)}else if(o&16){let a=o_(e,t);if(Array.isArray(a))i.push(...a);else{let l=Mr(e[fi]);_l(l[qe],l,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function ub(n,e){for(let t=un;t<n.length;t++){let i=n[t],r=i[qe].firstChild;r!==null&&_l(i[qe],i,r,e)}n[Er]!==n[yi]&&e.push(n[Er])}function a_(n){if(n[Dd]!==null){for(let e of n[Dd])e.impl.addSequence(e);n[Dd].length=0}}var l_=[];function db(n){return n[En]??hb(n)}function hb(n){let e=l_.pop()??Object.create(pb);return e.lView=n,e}function fb(n){n.lView[En]!==n&&(n.lView=null,l_.push(n))}var pb=Jt(Ct({},ld),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{Cl(n.lView)},consumerOnSignalRead(){this.lView[En]=this}});function mb(n){let e=n[En]??Object.create(gb);return e.lView=n,e}var gb=Jt(Ct({},ld),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{let e=Mr(n.lView);for(;e&&!c_(e[qe]);)e=Mr(e);e&&ey(e)},consumerOnSignalRead(){this.lView[En]=this}});function c_(n){return n.type!==2}function u_(n){if(n[ll]===null)return;let e=!0;for(;e;){let t=!1;for(let i of n[ll])i.dirty&&(t=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));e=t&&!!(n[Ve]&8192)}}var yb=100;function d_(n,e=!0,t=0){let r=n[Wi].rendererFactory,s=!1;s||r.begin?.();try{_b(n,t)}catch(o){throw e&&$S(n,o),o}finally{s||r.end?.()}}function _b(n,e){let t=sy();try{rg(!0),th(n,e);let i=0;for(;Tl(n);){if(i===yb)throw new ue(103,!1);i++,th(n,1)}}finally{rg(t)}}function vb(n,e,t,i){if(ps(e))return;let r=e[Ve],s=!1,o=!1;Ch(e);let a=!0,l=null,c=null;s||(c_(n)?(c=db(e),l=cd(c)):ad()===null?(a=!1,c=mb(e),l=cd(c)):e[En]&&(dd(e[En]),e[En]=null));try{Qg(e),MM(n.bindingStartIndex),t!==null&&e_(n,e,t,2,i);let u=(r&3)===3;if(!s)if(u){let h=n.preOrderCheckHooks;h!==null&&Za(e,h,null)}else{let h=n.preOrderHooks;h!==null&&Ka(e,h,0,null),Ad(e,0)}if(o||xb(e),u_(e),h_(e,0),n.contentQueries!==null&&Wy(n,e),!s)if(u){let h=n.contentCheckHooks;h!==null&&Za(e,h)}else{let h=n.contentHooks;h!==null&&Ka(e,h,1),Ad(e,1)}Mb(n,e);let d=n.components;d!==null&&p_(e,d,0);let f=n.viewQuery;if(f!==null&&Jd(2,f,i),!s)if(u){let h=n.viewCheckHooks;h!==null&&Za(e,h)}else{let h=n.viewHooks;h!==null&&Ka(e,h,2),Ad(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[Cd]){for(let h of e[Cd])h();e[Cd]=null}s||(a_(e),e[Ve]&=-73)}catch(u){throw s||Cl(e),u}finally{c!==null&&(Fm(c,l),a&&fb(c)),Dh()}}function h_(n,e){for(let t=ky(n);t!==null;t=Uy(t))for(let i=un;i<t.length;i++){let r=t[i];f_(r,e)}}function xb(n){for(let e=ky(n);e!==null;e=Uy(e)){if(!(e[Ve]&2))continue;let t=e[us];for(let i=0;i<t.length;i++){let r=t[i];ey(r)}}}function Eb(n,e,t){ft(18);let i=mi(e,n);f_(i,t),ft(19,i[en])}function f_(n,e){Sh(n)&&th(n,e)}function th(n,e){let i=n[qe],r=n[Ve],s=n[En],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&ud(s)),o||=!1,s&&(s.dirty=!1),n[Ve]&=-9217,o)vb(i,n,i.template,n[en]);else if(r&8192){u_(n),h_(n,1);let a=i.components;a!==null&&p_(n,a,1),a_(n)}}function p_(n,e,t){for(let i=0;i<e.length;i++)Eb(n,e[i],t)}function Mb(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)Sr(~r);else{let s=r,o=t[++i],a=t[++i];bM(o,s);let l=e[s];ft(24,l),a(2,l),ft(25,l)}}}finally{Sr(-1)}}function Jh(n,e){let t=sy()?64:1088;for(n[Wi].changeDetectionScheduler?.notify(e);n;){n[Ve]|=t;let i=Mr(n);if(ul(n)&&!i)return n;n=i}return null}function m_(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function Sb(n,e,t,i=!0){let r=e[qe];if(bb(r,e,n,t),i){let o=eh(t,n),a=e[qt],l=a.parentNode(n[Er]);l!==null&&QS(r,n[Bn],a,e,l,o)}let s=e[ol];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function nh(n,e){if(n.length<=un)return;let t=un+e,i=n[t];if(i){let r=i[xr];r!==null&&r!==n&&Yh(r,i),e>0&&(n[t-1][Un]=i[Un]);let s=il(n,un+e);JS(i[qe],i);let o=s[pi];o!==null&&o.detachView(s[qe]),i[Bt]=null,i[Un]=null,i[Ve]&=-129}return i}function bb(n,e,t,i){let r=un+i,s=t.length;i>0&&(t[r-1][Un]=e),i<s-un?(e[Un]=t[r],Bg(t,un+i,e)):(t.push(e),e[Un]=null),e[Bt]=t;let o=e[xr];o!==null&&t!==o&&g_(o,e);let a=e[pi];a!==null&&a.insertView(n),Hd(e),e[Ve]|=128}function g_(n,e){let t=n[us],i=e[Bt];if(zi(i))n[Ve]|=2;else{let r=i[Bt][fi];e[fi]!==r&&(n[Ve]|=2)}t===null?n[us]=[e]:t.push(e)}var Qh=class{_lView;_cdRefInjectingView;notifyErrorHandler;_appRef=null;_attachedToViewContainer=!1;get rootNodes(){let e=this._lView,t=e[qe];return _l(t,e,t.firstChild,[])}constructor(e,t,i=!0){this._lView=e,this._cdRefInjectingView=t,this.notifyErrorHandler=i}get context(){return this._lView[en]}set context(e){this._lView[en]=e}get destroyed(){return ps(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[Bt];if(_i(e)){let t=e[cl],i=t?t.indexOf(this):-1;i>-1&&(nh(e,i),il(t,i))}this._attachedToViewContainer=!1}s_(this._lView[qe],this._lView)}onDestroy(e){ty(this._lView,e)}markForCheck(){Jh(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[Ve]&=-129}reattach(){Hd(this._lView),this._lView[Ve]|=128}detectChanges(){this._lView[Ve]|=1024,d_(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new ue(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=ul(this._lView),t=this._lView[xr];t!==null&&!e&&Yh(t,this._lView),r_(this._lView[qe],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new ue(902,!1);this._appRef=e;let t=ul(this._lView),i=this._lView[xr];i!==null&&!t&&g_(i,this._lView),Hd(this._lView)}};var hs=(()=>{class n{static __NG_ELEMENT_ID__=Cb}return n})(),wb=hs,Tb=class extends wb{_declarationLView;_declarationTContainer;elementRef;constructor(e,t,i){super(),this._declarationLView=e,this._declarationTContainer=t,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,t){return this.createEmbeddedViewImpl(e,t)}createEmbeddedViewImpl(e,t,i){let r=ZS(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:t,dehydratedView:i});return new Qh(r)}};function Cb(){return ef(Ei(),St())}function ef(n,e){return n.type&4?new Tb(e,n,ms(n,e)):null}function tf(n,e,t,i,r){let s=n.data[e];if(s===null)s=Db(n,e,t,i,r),SM()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=vM();s.injectorIndex=o===null?-1:o.injectorIndex}return wo(s,!0),s}function Db(n,e,t,i,r){let s=iy(),o=ry(),a=o?s:s&&s.parent,l=n.data[e]=Ib(n,a,t,e,i,r);return Ab(n,l,s,o),l}function Ab(n,e,t,i){n.firstChild===null&&(n.firstChild=e),t!==null&&(i?t.child==null&&e.parent!==null&&(t.child=e):t.next===null&&(t.next=e,e.prev=t))}function Ib(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return gM()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var _F=new RegExp(`^(\\d+)*(${dS}|${uS})*(.*)`);var Rb=()=>null;function xg(n,e){return Rb(n,e)}var Nb=class{},y_=class{},ih=class{resolveComponentFactory(e){throw Error(`No component factory found for ${kn(e)}.`)}},nf=class{static NULL=new ih},ji=class{},rf=(()=>{class n{destroyNode=null;static __NG_ELEMENT_ID__=()=>Pb()}return n})();function Pb(){let n=St(),e=Ei(),t=mi(e.index,n);return(zi(t)?t:n)[qt]}var Fb=(()=>{class n{static \u0275prov=pt({token:n,providedIn:"root",factory:()=>null})}return n})();var Nd={},rh=class{injector;parentInjector;constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){i=Sl(i);let r=this.injector.get(e,Nd,i);return r!==Nd||t===Nd?r:this.parentInjector.get(e,t,i)}};function Eg(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=Xm(r,a);else if(s==2){let l=a,c=e[++o];i=Xm(i,l+": "+c+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}function Mi(n,e=$e.Default){let t=St();if(t===null)return nt(n,e);let i=Ei();return by(i,t,Ln(n),e)}function __(n,e,t,i,r){let s=i===null?null:{"":-1},o=r(n,t);if(o!==null){let a,l=null,c=null,u=Lb(o);u===null?a=o:[a,l,c]=u,Bb(n,e,t,a,s,l,c)}s!==null&&i!==null&&Ob(t,i,s)}function Ob(n,e,t){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new ue(-301,!1);i.push(e[r],s)}}function Lb(n){let e=null,t=!1;for(let o=0;o<n.length;o++){let a=n[o];if(o===0&&wr(a)&&(e=a),a.findHostDirectiveDefs!==null){t=!0;break}}if(!t)return null;let i=null,r=null,s=null;for(let o of n)o.findHostDirectiveDefs!==null&&(i??=[],r??=new Map,s??=new Map,kb(o,i,s,r)),o===e&&(i??=[],i.push(o));return i!==null?(i.push(...e===null?n:n.slice(1)),[i,r,s]):null}function kb(n,e,t,i){let r=e.length;n.findHostDirectiveDefs(n,e,i),t.set(n,[r,e.length-1])}function Ub(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function Bb(n,e,t,i,r,s,o){let a=i.length,l=!1;for(let f=0;f<a;f++){let h=i[f];!l&&wr(h)&&(l=!0,Ub(n,t,f)),HM(xy(t,e),n,h.type)}jb(t,n.data.length,a);for(let f=0;f<a;f++){let h=i[f];h.providersResolver&&h.providersResolver(h)}let c=!1,u=!1,d=Jy(n,e,a,null);a>0&&(t.directiveToIndex=new Map);for(let f=0;f<a;f++){let h=i[f];if(t.mergedAttrs=Nh(t.mergedAttrs,h.hostAttrs),Hb(n,t,e,d,h),Wb(d,h,r),o!==null&&o.has(h)){let[y,m]=o.get(h);t.directiveToIndex.set(h.type,[d,y+t.directiveStart,m+t.directiveStart])}else(s===null||!s.has(h))&&t.directiveToIndex.set(h.type,d);h.contentQueries!==null&&(t.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(t.flags|=64);let g=h.type.prototype;!c&&(g.ngOnChanges||g.ngOnInit||g.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),c=!0),!u&&(g.ngOnChanges||g.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),u=!0),d++}Vb(n,t,s)}function Vb(n,e,t){for(let i=e.directiveStart;i<e.directiveEnd;i++){let r=n.data[i];if(t===null||!t.has(r))Mg(0,e,r,i),Mg(1,e,r,i),bg(e,i,!1);else{let s=t.get(r);Sg(0,e,s,i),Sg(1,e,s,i),bg(e,i,!0)}}}function Mg(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let s in r)if(r.hasOwnProperty(s)){let o;n===0?o=e.inputs??={}:o=e.outputs??={},o[s]??=[],o[s].push(i),v_(e,s)}}function Sg(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let s in r)if(r.hasOwnProperty(s)){let o=r[s],a;n===0?a=e.hostDirectiveInputs??={}:a=e.hostDirectiveOutputs??={},a[o]??=[],a[o].push(i,s),v_(e,o)}}function v_(n,e){e==="class"?n.flags|=8:e==="style"&&(n.flags|=16)}function bg(n,e,t){let{attrs:i,inputs:r,hostDirectiveInputs:s}=n;if(i===null||!t&&r===null||t&&s===null||Hh(n)){n.initialInputs??=[],n.initialInputs.push(null);return}let o=null,a=0;for(;a<i.length;){let l=i[a];if(l===0){a+=4;continue}else if(l===5){a+=2;continue}else if(typeof l=="number")break;if(!t&&r.hasOwnProperty(l)){let c=r[l];for(let u of c)if(u===e){o??=[],o.push(l,i[a+1]);break}}else if(t&&s.hasOwnProperty(l)){let c=s[l];for(let u=0;u<c.length;u+=2)if(c[u]===e){o??=[],o.push(c[u+1],i[a+1]);break}}a+=2}n.initialInputs??=[],n.initialInputs.push(o)}function Hb(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=go(r.type,!0)),o=new xo(s,wr(r),Mi);n.blueprint[i]=o,t[i]=o,zb(n,e,i,Jy(n,t,r.hostVars,Do),r)}function zb(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;Gb(o)!=a&&o.push(a),o.push(t,i,s)}}function Gb(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function Wb(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;wr(e)&&(t[""]=n)}}function jb(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function x_(n,e,t,i,r,s,o,a){let l=e.consts,c=dl(l,o),u=tf(e,n,2,i,c);return s&&__(e,t,u,dl(l,a),r),u.mergedAttrs=Nh(u.mergedAttrs,u.attrs),u.attrs!==null&&Eg(u,u.attrs,!1),u.mergedAttrs!==null&&Eg(u,u.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,u),u}function E_(n,e){my(n,e),Xg(e)&&n.queries.elementEnd(e)}var sh=class extends nf{ngModule;constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=yo(e);return new vl(t,this.ngModule)}};function $b(n){return Object.keys(n).map(e=>{let[t,i,r]=n[e],s={propName:t,templateName:e,isSignal:(i&Il.SignalBased)!==0};return r&&(s.transform=r),s})}function qb(n){return Object.keys(n).map(e=>({propName:n[e],templateName:e}))}function Xb(n,e,t){let i=e instanceof Gi?e:e?.injector;return i&&n.getStandaloneInjector!==null&&(i=n.getStandaloneInjector(i)||i),i?new rh(t,i):t}function Yb(n){let e=n.get(ji,null);if(e===null)throw new ue(407,!1);let t=n.get(Fb,null),i=n.get(Eo,null);return{rendererFactory:e,sanitizer:t,changeDetectionScheduler:i}}function Zb(n,e){let t=(n.selectors[0][0]||"div").toLowerCase();return Xy(e,t,t==="svg"?rM:t==="math"?sM:null)}var vl=class extends y_{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=$b(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=qb(this.componentDef.outputs),this.cachedOutputs}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=TS(e.selectors),this.ngContentSelectors=e.ngContentSelectors??[],this.isBoundToModule=!!t}create(e,t,i,r){ft(22);let s=Je(null);try{let o=this.componentDef,a=i?["ng-version","19.2.14"]:CS(this.componentDef.selectors[0]),l=zh(0,null,null,1,0,null,null,null,null,[a],null),c=Xb(o,r||this.ngModule,e),u=Yb(c),d=u.rendererFactory.createRenderer(null,o),f=i?LS(d,i,o.encapsulation,c):Zb(o,d),h=Gh(null,l,null,512|Ky(o),null,null,u,d,c,null,Gy(f,c,!0));h[Qn]=f,Ch(h);let g=null;try{let y=x_(Qn,l,h,"#host",()=>[this.componentDef],!0,0);f&&(Zy(d,f,y),To(f,h)),jh(l,h,y),jy(l,y,h),E_(l,y),t!==void 0&&Kb(y,this.ngContentSelectors,t),g=mi(y.index,h),h[en]=g[en],qh(l,h,null)}catch(y){throw g!==null&&Zd(g),Zd(h),y}finally{ft(23),Dh()}return new oh(this.componentType,h)}finally{Je(s)}}},oh=class extends Nb{_rootLView;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(e,t){super(),this._rootLView=t,this._tNode=Jg(t[qe],Qn),this.location=ms(this._tNode,t),this.instance=mi(this._tNode.index,t)[en],this.hostView=this.changeDetectorRef=new Qh(t,void 0,!1),this.componentType=e}setInput(e,t){let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let r=this._rootLView,s=$h(i,r[qe],r,e,t);this.previousInputValues.set(e,t);let o=mi(i.index,r);Jh(o,1)}get injector(){return new vr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function Kb(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null&&s.length?Array.from(s):null)}}var Ao=(()=>{class n{static __NG_ELEMENT_ID__=Jb}return n})();function Jb(){let n=Ei();return S_(n,St())}var Qb=Ao,M_=class extends Qb{_lContainer;_hostTNode;_hostLView;constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return ms(this._hostTNode,this._hostLView)}get injector(){return new vr(this._hostTNode,this._hostLView)}get parentInjector(){let e=Ph(this._hostTNode,this._hostLView);if(yy(e)){let t=fl(e,this._hostLView),i=hl(e),r=t[qe].data[i+8];return new vr(r,t)}else return new vr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=wg(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-un}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=xg(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,_g(this._hostTNode,o)),a}createComponent(e,t,i,r,s){let o=e&&!QE(e),a;if(o)a=t;else{let g=t||{};a=g.index,i=g.injector,r=g.projectableNodes,s=g.environmentInjector||g.ngModuleRef}let l=o?e:new vl(yo(e)),c=i||this.parentInjector;if(!s&&l.ngModule==null){let y=(o?c:this.parentInjector).get(Gi,null);y&&(s=y)}let u=yo(l.componentType??{}),d=xg(this._lContainer,u?.id??null),f=d?.firstChild??null,h=l.create(c,r,f,s);return this.insertImpl(h.hostView,a,_g(this._hostTNode,d)),h}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(cM(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let l=r[Bt],c=new M_(l,l[Bn],l[Bt]);c.detach(c.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return Sb(o,r,s,i),e.attachToViewContainerRef(),Bg(Pd(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=wg(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=nh(this._lContainer,t);i&&(il(Pd(this._lContainer),t),s_(i[qe],i))}detach(e){let t=this._adjustIndex(e,-1),i=nh(this._lContainer,t);return i&&il(Pd(this._lContainer),t)!=null?new Qh(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function wg(n){return n[cl]}function Pd(n){return n[cl]||(n[cl]=[])}function S_(n,e){let t,i=e[n.index];return _i(i)?t=i:(t=m_(i,e,null,n),e[n.index]=t,Wh(e,t)),tw(t,e,n,i),new M_(t,n,e)}function ew(n,e){let t=n[qt],i=t.createComment(""),r=vi(e,n),s=t.parentNode(r);return yl(t,s,i,t.nextSibling(r),!1),i}var tw=rw,nw=()=>!1;function iw(n,e,t){return nw(n,e,t)}function rw(n,e,t,i){if(n[Er])return;let r;t.type&8?r=ei(i):r=ew(e,t),n[Er]=r}var ah=class n{queryList;matches=null;constructor(e){this.queryList=e}clone(){return new n(this.queryList)}setDirty(){this.queryList.setDirty()}},lh=class n{queries;constructor(e=[]){this.queries=e}createEmbeddedView(e){let t=e.queries;if(t!==null){let i=e.contentQueries!==null?e.contentQueries[0]:t.length,r=[];for(let s=0;s<i;s++){let o=t.getByIndex(s),a=this.queries[o.indexInDeclarationView];r.push(a.clone())}return new n(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)sf(e,t).matches!==null&&this.queries[t].setDirty()}},ch=class{flags;read;predicate;constructor(e,t,i=null){this.flags=t,this.read=i,typeof e=="string"?this.predicate=hw(e):this.predicate=e}},uh=class n{queries;constructor(e=[]){this.queries=e}elementStart(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let i=0;i<this.length;i++){let r=t!==null?t.length:0,s=this.getByIndex(i).embeddedTView(e,r);s&&(s.indexInDeclarationView=i,t!==null?t.push(s):t=[s])}return t!==null?new n(t):null}template(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},dh=class n{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(e,t=-1){this.metadata=e,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new n(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,i=e.parent;for(;i!==null&&i.type&8&&i.index!==t;)i=i.parent;return t===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(e,t){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let s=i[r];this.matchTNodeWithReadOption(e,t,sw(t,s)),this.matchTNodeWithReadOption(e,t,Ja(t,e,s,!1,!1))}else i===hs?t.type&4&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,Ja(t,e,i,!1,!1))}matchTNodeWithReadOption(e,t,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===Tr||r===Ao||r===hs&&t.type&4)this.addMatch(t.index,-2);else{let s=Ja(t,e,r,!1,!1);s!==null&&this.addMatch(t.index,s)}else this.addMatch(t.index,i)}}addMatch(e,t){this.matches===null?this.matches=[e,t]:this.matches.push(e,t)}};function sw(n,e){let t=n.localNames;if(t!==null){for(let i=0;i<t.length;i+=2)if(t[i]===e)return t[i+1]}return null}function ow(n,e){return n.type&11?ms(n,e):n.type&4?ef(n,e):null}function aw(n,e,t,i){return t===-1?ow(e,n):t===-2?lw(n,e,i):pl(n,n[qe],t,e)}function lw(n,e,t){if(t===Tr)return ms(e,n);if(t===hs)return ef(e,n);if(t===Ao)return S_(e,n)}function b_(n,e,t,i){let r=e[pi].queries[i];if(r.matches===null){let s=n.data,o=t.matches,a=[];for(let l=0;o!==null&&l<o.length;l+=2){let c=o[l];if(c<0)a.push(null);else{let u=s[c];a.push(aw(e,u,o[l+1],t.metadata.read))}}r.matches=a}return r.matches}function hh(n,e,t,i){let r=n.queries.getByIndex(t),s=r.matches;if(s!==null){let o=b_(n,e,r,t);for(let a=0;a<s.length;a+=2){let l=s[a];if(l>0)i.push(o[a/2]);else{let c=s[a+1],u=e[-l];for(let d=un;d<u.length;d++){let f=u[d];f[xr]===f[Bt]&&hh(f[qe],f,c,i)}if(u[us]!==null){let d=u[us];for(let f=0;f<d.length;f++){let h=d[f];hh(h[qe],h,c,i)}}}}}return i}function cw(n,e){return n[pi].queries[e].queryList}function uw(n,e,t){let i=new Yd((t&4)===4);return hM(n,e,i,i.destroy),(e[pi]??=new lh).queries.push(new ah(i))-1}function dw(n,e,t){let i=xi();return i.firstCreatePass&&(fw(i,new ch(n,e,t),-1),(e&2)===2&&(i.staticViewQueries=!0)),uw(i,St(),e)}function hw(n){return n.split(",").map(e=>e.trim())}function fw(n,e,t){n.queries===null&&(n.queries=new uh),n.queries.track(new dh(e,t))}function sf(n,e){return n.queries.getByIndex(e)}function pw(n,e){let t=n[qe],i=sf(t,e);return i.crossesNgTemplate?hh(t,n,e,[]):b_(t,n,i,e)}var xl=class{};var El=class extends xl{injector;componentFactoryResolver=new sh(this);instance=null;constructor(e){super();let t=new _o([...e.providers,{provide:xl,useValue:this},{provide:nf,useValue:this.componentFactoryResolver}],e.parent||Eh(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function mw(n,e,t=null){return new El({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var gw=(()=>{class n{_injector;cachedInjectors=new Map;constructor(t){this._injector=t}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let i=zg(!1,t.type),r=i.length>0?mw([i],this._injector,`Standalone[${t.type.name}]`):null;this.cachedInjectors.set(t,r)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=pt({token:n,providedIn:"environment",factory:()=>new n(nt(Gi))})}return n})();function gs(n){return mh(()=>{let e=w_(n),t=Jt(Ct({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===Oy.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:e.standalone?r=>r.get(gw).getOrCreateStandaloneInjector(t):null,getExternalStyles:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||ti.Emulated,styles:n.styles||Kn,_:null,schemas:n.schemas||null,tView:null,id:""});e.standalone&&Vh("NgStandalone"),T_(t);let i=n.dependencies;return t.directiveDefs=Tg(i,!1),t.pipeDefs=Tg(i,!0),t.id=Ew(t),t})}function yw(n){return yo(n)||VE(n)}function _w(n){return n!==null}function Dr(n){return mh(()=>({type:n.type,bootstrap:n.bootstrap||Kn,declarations:n.declarations||Kn,imports:n.imports||Kn,exports:n.exports||Kn,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function vw(n,e){if(n==null)return ls;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s,o,a,l;Array.isArray(r)?(a=r[0],s=r[1],o=r[2]??s,l=r[3]||null):(s=r,o=r,a=Il.None,l=null),t[s]=[i,a,l],e[s]=o}return t}function xw(n){if(n==null)return ls;let e={};for(let t in n)n.hasOwnProperty(t)&&(e[n[t]]=t);return e}function Nl(n){return mh(()=>{let e=w_(n);return T_(e),e})}function w_(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputConfig:n.inputs||ls,exportAs:n.exportAs||null,standalone:n.standalone??!0,signals:n.signals===!0,selectors:n.selectors||Kn,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:vw(n.inputs,e),outputs:xw(n.outputs),debugInfo:null}}function T_(n){n.features?.forEach(e=>e(n))}function Tg(n,e){if(!n)return null;let t=e?HE:yw;return()=>(typeof n=="function"?n():n).map(i=>t(i)).filter(_w)}function Ew(n){let e=0,t=typeof n.consts=="function"?"":n.consts,i=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,t,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery];for(let s of i.join("|"))e=Math.imul(31,e)+s.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function C_(n,e,t){return n[e]=t}function Mo(n,e,t){let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}function Mw(n,e,t,i){let r=Mo(n,e,t);return Mo(n,e+1,i)||r}function Sw(n,e,t,i,r,s,o,a,l){let c=e.consts,u=tf(e,n,4,o||null,a||null);ny()&&__(e,t,u,dl(c,l),n_),u.mergedAttrs=Nh(u.mergedAttrs,u.attrs),my(e,u);let d=u.tView=zh(2,u,i,r,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,c,null);return e.queries!==null&&(e.queries.template(e,u),d.queries=e.queries.embeddedTView(u)),u}function bw(n,e,t,i,r,s,o,a,l,c){let u=t+Qn,d=e.firstCreatePass?Sw(u,e,n,i,r,s,o,a,l):e.data[u];wo(d,!1);let f=ww(e,n,d,t);Ih()&&Zh(e,n,f,d),To(f,n);let h=m_(f,n,f,d);return n[u]=h,Wh(n,h),iw(h,d,n),Mh(d)&&jh(e,n,d),l!=null&&t_(n,d,c),d}function Si(n,e,t,i,r,s,o,a){let l=St(),c=xi(),u=dl(c.consts,s);return bw(l,c,n,e,t,i,r,u,o,a),Si}var ww=Tw;function Tw(n,e,t,i){return Rh(!0),e[qt].createComment("")}var D_=new Ke("");var Cw=(()=>{class n{static \u0275prov=pt({token:n,providedIn:"root",factory:()=>new fh})}return n})(),fh=class{queuedEffectCount=0;queues=new Map;schedule(e){this.enqueue(e)}remove(e){let t=e.zone,i=this.queues.get(t);i.has(e)&&(i.delete(e),this.queuedEffectCount--)}enqueue(e){let t=e.zone;this.queues.has(t)||this.queues.set(t,new Set);let i=this.queues.get(t);i.has(e)||(this.queuedEffectCount++,i.add(e))}flush(){for(;this.queuedEffectCount>0;)for(let[e,t]of this.queues)e===null?this.flushQueue(t):e.run(()=>this.flushQueue(t))}flushQueue(e){for(let t of e)e.delete(t),this.queuedEffectCount--,t.run()}};function Pl(n){return!!n&&typeof n.then=="function"}function A_(n){return!!n&&typeof n.subscribe=="function"}var Dw=new Ke("");var I_=(()=>{class n{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((t,i)=>{this.resolve=t,this.reject=i});appInits=lt(Dw,{optional:!0})??[];injector=lt(ds);constructor(){}runInitializers(){if(this.initialized)return;let t=[];for(let r of this.appInits){let s=jg(this.injector,r);if(Pl(s))t.push(s);else if(A_(s)){let o=new Promise((a,l)=>{s.subscribe({complete:a,error:l})});t.push(o)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{i()}).catch(r=>{this.reject(r)}),t.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=pt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Aw=new Ke("");function Iw(){md(()=>{throw new ue(600,!1)})}function Rw(n){return n.isBoundToModule}var Nw=10;var So=(()=>{class n{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=lt(tS);afterRenderManager=lt(fS);zonelessEnabled=lt(Ay);rootEffectScheduler=lt(Cw);dirtyFlags=0;tracingSnapshot=null;externalTestViews=new Set;afterTick=new Vi;get allViews(){return[...this.externalTestViews.keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];isStable=lt(Dl).hasPendingTasks.pipe(wd(t=>!t));constructor(){lt(Al,{optional:!0})}whenStable(){let t;return new Promise(i=>{t=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{t.unsubscribe()})}_injector=lt(Gi);_rendererFactory=null;get injector(){return this._injector}bootstrap(t,i){return this.bootstrapImpl(t,i)}bootstrapImpl(t,i,r=ds.NULL){ft(10);let s=t instanceof y_;if(!this._injector.get(I_).done){let h="";throw new ue(405,h)}let a;s?a=t:a=this._injector.get(nf).resolveComponentFactory(t),this.componentTypes.push(a.componentType);let l=Rw(a)?void 0:this._injector.get(xl),c=i||a.selector,u=a.create(r,[],c,l),d=u.location.nativeElement,f=u.injector.get(D_,null);return f?.registerApplication(d),u.onDestroy(()=>{this.detachView(u.hostView),Qa(this.components,u),f?.unregisterApplication(d)}),this._loadComponent(u),ft(11,u),u}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){ft(12),this.tracingSnapshot!==null?this.tracingSnapshot.run(zy.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw new ue(101,!1);let t=Je(null);try{this._runningTick=!0,this.synchronize()}catch(i){this.internalErrorHandler(i)}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,Je(t),this.afterTick.next(),ft(13)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(ji,null,{optional:!0}));let t=0;for(;this.dirtyFlags!==0&&t++<Nw;)ft(14),this.synchronizeOnce(),ft(15)}synchronizeOnce(){if(this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush()),this.dirtyFlags&7){let t=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:i,notifyErrorHandler:r}of this.allViews)Pw(i,r,t,this.zonelessEnabled);if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}else this._rendererFactory?.begin?.(),this._rendererFactory?.end?.();this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>Tl(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){let i=t;Qa(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView),this.tick(),this.components.push(t),this._injector.get(Aw,[]).forEach(r=>r(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>Qa(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new ue(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||n)};static \u0275prov=pt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Qa(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function Pw(n,e,t,i){if(!t&&!Tl(n))return;d_(n,e,t&&!i?0:1)}function Fw(n,e,t,i){return Mo(n,ay(),t)?e+Og(t)+i:Do}function Dt(n,e,t){let i=St(),r=ay();if(Mo(i,r,e)){let s=xi(),o=DM();VS(s,o,i,n,e,i[qt],t,!1)}return Dt}function Cg(n,e,t,i,r){$h(e,n,t,r?"class":"style",i)}function Ie(n,e,t,i){let r=St(),s=xi(),o=Qn+n,a=r[qt],l=s.firstCreatePass?x_(o,s,r,e,n_,ny(),t,i):s.data[o],c=Ow(s,r,l,a,e,n);r[o]=c;let u=Mh(l);return wo(l,!0),Zy(a,c,l),!i_(l)&&Ih()&&Zh(s,r,c,l),(fM()===0||u)&&To(c,r),pM(),u&&(jh(s,r,l),jy(s,l,r)),i!==null&&t_(r,l),Ie}function Re(){let n=Ei();ry()?xM():(n=n.parent,wo(n,!1));let e=n;yM(e)&&_M(),mM();let t=xi();return t.firstCreatePass&&E_(t,e),e.classesWithoutHost!=null&&NM(e)&&Cg(t,e,St(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&PM(e)&&Cg(t,e,St(),e.stylesWithoutHost,!1),Re}function Vt(n,e,t,i){return Ie(n,e,t,i),Re(),Vt}var Ow=(n,e,t,i,r,s)=>(Rh(!0),Xy(i,r,AM()));function Io(){return St()}var Ml="en-US";var Lw=Ml;function kw(n){typeof n=="string"&&(Lw=n.toLowerCase().replace(/_/g,"-"))}function Dg(n,e,t){return function i(r){if(r===Function)return t;let s=bo(n)?mi(n.index,e):e;Jh(s,5);let o=e[en],a=Ag(e,o,t,r),l=i.__ngNextListenerFn__;for(;l;)a=Ag(e,o,l,r)&&a,l=l.__ngNextListenerFn__;return a}}function Ag(n,e,t,i){let r=Je(null);try{return ft(6,e,t),t(i)!==!1}catch(s){return Uw(n,s),!1}finally{ft(7,e,t),Je(r)}}function Uw(n,e){let t=n[cs],i=t?t.get(gi,null):null;i&&i.handleError(e)}function Ig(n,e,t,i,r,s){let o=e[t],a=e[qe],c=a.data[t].outputs[i],u=o[c],d=a.firstCreatePass?wh(a):null,f=bh(e),h=u.subscribe(s),g=f.length;f.push(s,h),d&&d.push(r,n.index,g,-(g+1))}function dn(n,e,t,i){let r=St(),s=xi(),o=Ei();return Vw(s,r,r[qt],o,n,e,i),dn}function Bw(n,e,t,i){let r=n.cleanup;if(r!=null)for(let s=0;s<r.length-1;s+=2){let o=r[s];if(o===t&&r[s+1]===i){let a=e[al],l=r[s+2];return a.length>l?a[l]:null}typeof o=="string"&&(s+=2)}return null}function Vw(n,e,t,i,r,s,o){let a=Mh(i),c=n.firstCreatePass?wh(n):null,u=bh(e),d=!0;if(i.type&3||o){let f=vi(i,e),h=o?o(f):f,g=u.length,y=o?p=>o(ei(p[i.index])):i.index,m=null;if(!o&&a&&(m=Bw(n,e,r,i.index)),m!==null){let p=m.__ngLastListenerFn__||m;p.__ngNextListenerFn__=s,m.__ngLastListenerFn__=s,d=!1}else{s=Dg(i,e,s),mS(e,h,r,s);let p=t.listen(h,r,s);u.push(s,p),c&&c.push(r,y,g,g+1)}}else s=Dg(i,e,s);if(d){let f=i.outputs?.[r],h=i.hostDirectiveOutputs?.[r];if(h&&h.length)for(let g=0;g<h.length;g+=2){let y=h[g],m=h[g+1];Ig(i,e,y,m,r,s)}if(f&&f.length)for(let g of f)Ig(i,e,g,r,r,s)}}function Vn(n=1){return CM(n)}function $i(n,e,t){dw(n,e,t)}function qi(n){let e=St(),t=xi(),i=ly();Th(i+1);let r=sf(t,i);if(n.dirty&&lM(e)===((r.metadata.flags&2)===2)){if(r.matches===null)n.reset([]);else{let s=pw(e,i);n.reset(s,iS),n.notifyOnChanges()}return!0}return!1}function Xi(){return cw(St(),ly())}function R_(n){let e=EM();return aM(e,Qn+n)}function Pe(n,e=""){let t=St(),i=xi(),r=n+Qn,s=i.firstCreatePass?tf(i,r,1,e,null):i.data[r],o=Hw(i,t,s,e,n);t[r]=o,Ih()&&Zh(i,t,o,s),wo(s,!1)}var Hw=(n,e,t,i,r)=>(Rh(!0),DS(e[qt],i));function Ar(n){return Fl("",n,""),Ar}function Fl(n,e,t){let i=St(),r=Fw(i,n,e,t);return r!==Do&&zw(i,Ah(),r),Fl}function zw(n,e,t){let i=oM(e,n);AS(n[qt],i,t)}function Ol(n,e,t,i){return Gw(St(),oy(),n,e,t,i)}function of(n,e,t,i,r){return Ww(St(),oy(),n,e,t,i,r)}function N_(n,e){let t=n[e];return t===Do?void 0:t}function Gw(n,e,t,i,r,s){let o=e+t;return Mo(n,o,r)?C_(n,o+1,s?i.call(s,r):i(r)):N_(n,o+1)}function Ww(n,e,t,i,r,s,o){let a=e+t;return Mw(n,a,r,s)?C_(n,a+2,o?i.call(o,r,s):i(r,s)):N_(n,a+2)}var jw=(()=>{class n{zone=lt(Rt);changeDetectionScheduler=lt(Eo);applicationRef=lt(So);_onMicrotaskEmptySubscription;initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=pt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function $w({ngZoneFactory:n,ignoreChangesOutsideZone:e,scheduleInRootZone:t}){return n??=()=>new Rt(Jt(Ct({},qw()),{scheduleInRootZone:t})),[{provide:Rt,useFactory:n},{provide:rl,multi:!0,useFactory:()=>{let i=lt(jw,{optional:!0});return()=>i.initialize()}},{provide:rl,multi:!0,useFactory:()=>{let i=lt(Xw);return()=>{i.initialize()}}},e===!0?{provide:Iy,useValue:!0}:[],{provide:Ry,useValue:t??Cy}]}function qw(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var Xw=(()=>{class n{subscription=new $t;initialized=!1;zone=lt(Rt);pendingTasks=lt(Dl);initialize(){if(this.initialized)return;this.initialized=!0;let t=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(t=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{Rt.assertNotInAngularZone(),queueMicrotask(()=>{t!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(t),t=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{Rt.assertInAngularZone(),t??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=pt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Yw=(()=>{class n{appRef=lt(So);taskService=lt(Dl);ngZone=lt(Rt);zonelessEnabled=lt(Ay);tracing=lt(Al,{optional:!0});disableScheduling=lt(Iy,{optional:!0})??!1;zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new $t;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(gl):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(lt(Ry,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof Xd||!this.zoneIsDefined)}notify(t){if(!this.zonelessEnabled&&t===5)return;let i=!1;switch(t){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2,i=!0;break}case 12:{this.appRef.dirtyFlags|=16,i=!0;break}case 13:{this.appRef.dirtyFlags|=2,i=!0;break}case 11:{i=!0;break}case 9:case 8:case 7:case 10:default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick(i))return;let r=this.useMicrotaskScheduler?dg:Ny;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(t){return!(this.disableScheduling&&!t||this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(gl+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){throw this.taskService.remove(t),i}finally{this.cleanup()}this.useMicrotaskScheduler=!0,dg(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=pt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Zw(){return typeof $localize<"u"&&$localize.locale||Ml}var af=new Ke("",{providedIn:"root",factory:()=>lt(af,$e.Optional|$e.SkipSelf)||Zw()});var ph=new Ke(""),Kw=new Ke("");function ho(n){return!n.moduleRef}function Jw(n){let e=ho(n)?n.r3Injector:n.moduleRef.injector,t=e.get(Rt);return t.run(()=>{ho(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let i=e.get(gi,null),r;if(t.runOutsideAngular(()=>{r=t.onError.subscribe({next:s=>{i.handleError(s)}})}),ho(n)){let s=()=>e.destroy(),o=n.platformInjector.get(ph);o.add(s),e.onDestroy(()=>{r.unsubscribe(),o.delete(s)})}else{let s=()=>n.moduleRef.destroy(),o=n.platformInjector.get(ph);o.add(s),n.moduleRef.onDestroy(()=>{Qa(n.allPlatformModules,n.moduleRef),r.unsubscribe(),o.delete(s)})}return eT(i,t,()=>{let s=e.get(I_);return s.runInitializers(),s.donePromise.then(()=>{let o=e.get(af,Ml);if(kw(o||Ml),!e.get(Kw,!0))return ho(n)?e.get(So):(n.allPlatformModules.push(n.moduleRef),n.moduleRef);if(ho(n)){let l=e.get(So);return n.rootComponent!==void 0&&l.bootstrap(n.rootComponent),l}else return Qw(n.moduleRef,n.allPlatformModules),n.moduleRef})})})}function Qw(n,e){let t=n.injector.get(So);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(i=>t.bootstrap(i));else if(n.instance.ngDoBootstrap)n.instance.ngDoBootstrap(t);else throw new ue(-403,!1);e.push(n)}function eT(n,e,t){try{let i=t();return Pl(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n.handleError(i)),i}}var el=null;function tT(n=[],e){return ds.create({name:e,providers:[{provide:bl,useValue:"platform"},{provide:ph,useValue:new Set([()=>el=null])},...n]})}function nT(n=[]){if(el)return el;let e=tT(n);return el=e,Iw(),iT(e),e}function iT(n){let e=n.get(kh,null);jg(n,()=>{e?.forEach(t=>t())})}function P_(n){ft(8);try{let{rootComponent:e,appProviders:t,platformProviders:i}=n,r=nT(i),s=[$w({}),{provide:Eo,useExisting:Yw},...t||[]],o=new El({providers:s,parent:r,debugName:"",runEnvironmentInitializers:!1});return Jw({r3Injector:o.injector,platformInjector:r,rootComponent:e})}catch(e){return Promise.reject(e)}finally{ft(9)}}var Rg=class{[ao];constructor(e){this[ao]=e}destroy(){this[ao].destroy()}};var Mn=new Ke("");var F_=null;function No(){return F_}function lf(n){F_??=n}var Ro=class{};var cf=/\s+/,O_=[],uf=(()=>{class n{_ngEl;_renderer;initialClasses=O_;rawClass;stateMap=new Map;constructor(t,i){this._ngEl=t,this._renderer=i}set klass(t){this.initialClasses=t!=null?t.trim().split(cf):O_}set ngClass(t){this.rawClass=typeof t=="string"?t.trim().split(cf):t}ngDoCheck(){for(let i of this.initialClasses)this._updateState(i,!0);let t=this.rawClass;if(Array.isArray(t)||t instanceof Set)for(let i of t)this._updateState(i,!0);else if(t!=null)for(let i of Object.keys(t))this._updateState(i,!!t[i]);this._applyStateDiff()}_updateState(t,i){let r=this.stateMap.get(t);r!==void 0?(r.enabled!==i&&(r.changed=!0,r.enabled=i),r.touched=!0):this.stateMap.set(t,{enabled:i,changed:!0,touched:!0})}_applyStateDiff(){for(let t of this.stateMap){let i=t[0],r=t[1];r.changed?(this._toggleClass(i,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(i,!1),this.stateMap.delete(i)),r.touched=!1}}_toggleClass(t,i){t=t.trim(),t.length>0&&t.split(cf).forEach(r=>{i?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}static \u0275fac=function(i){return new(i||n)(Mi(Tr),Mi(rf))};static \u0275dir=Nl({type:n,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return n})();var Po=(()=>{class n{_viewContainer;_context=new Ll;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(t,i){this._viewContainer=t,this._thenTemplateRef=i}set ngIf(t){this._context.$implicit=this._context.ngIf=t,this._updateView()}set ngIfThen(t){L_(t,!1),this._thenTemplateRef=t,this._thenViewRef=null,this._updateView()}set ngIfElse(t){L_(t,!1),this._elseTemplateRef=t,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(t,i){return!0}static \u0275fac=function(i){return new(i||n)(Mi(Ao),Mi(hs))};static \u0275dir=Nl({type:n,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return n})(),Ll=class{$implicit=null;ngIf=null};function L_(n,e){if(n&&!n.createEmbeddedView)throw new ue(2020,!1)}var ys=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Dr({type:n});static \u0275inj=br({})}return n})();function df(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var hf="browser",k_="server";function kl(n){return n===k_}var Fo=class{};var Vl=new Ke(""),gf=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,i){this._zone=i,t.forEach(r=>{r.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,i,r,s){return this._findPluginFor(i).addEventListener(t,i,r,s)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(s=>s.supports(t)),!i)throw new ue(5101,!1);return this._eventNameToPlugin.set(t,i),i}static \u0275fac=function(i){return new(i||n)(nt(Vl),nt(Rt))};static \u0275prov=pt({token:n,factory:n.\u0275fac})}return n})(),Oo=class{_doc;constructor(e){this._doc=e}manager},Ul="ng-app-id";function B_(n){for(let e of n)e.remove()}function V_(n,e){let t=e.createElement("style");return t.textContent=n,t}function lT(n,e,t,i){let r=n.head?.querySelectorAll(`style[${Ul}="${e}"],link[${Ul}="${e}"]`);if(r)for(let s of r)s.removeAttribute(Ul),s instanceof HTMLLinkElement?i.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&t.set(s.textContent,{usage:0,elements:[s]})}function pf(n,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var yf=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(t,i,r,s={}){this.doc=t,this.appId=i,this.nonce=r,this.isServer=kl(s),lT(t,i,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,i){for(let r of t)this.addUsage(r,this.inline,V_);i?.forEach(r=>this.addUsage(r,this.external,pf))}removeStyles(t,i){for(let r of t)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,i,r){let s=i.get(t);s?s.usage++:i.set(t,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,r(t,this.doc)))})}removeUsage(t,i){let r=i.get(t);r&&(r.usage--,r.usage<=0&&(B_(r.elements),i.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])B_(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(t,V_(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(t,pf(i,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,i){return this.nonce&&i.setAttribute("nonce",this.nonce),this.isServer&&i.setAttribute(Ul,this.appId),t.appendChild(i)}static \u0275fac=function(i){return new(i||n)(nt(Mn),nt(Lh),nt(Bh,8),nt(Co))};static \u0275prov=pt({token:n,factory:n.\u0275fac})}return n})(),ff={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},_f=/%COMP%/g;var z_="%COMP%",cT=`_nghost-${z_}`,uT=`_ngcontent-${z_}`,dT=!0,hT=new Ke("",{providedIn:"root",factory:()=>dT});function fT(n){return uT.replace(_f,n)}function pT(n){return cT.replace(_f,n)}function G_(n,e){return e.map(t=>t.replace(_f,n))}var Uo=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,i,r,s,o,a,l,c=null,u=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=o,this.platformId=a,this.ngZone=l,this.nonce=c,this.tracingService=u,this.platformIsServer=kl(a),this.defaultRenderer=new Lo(t,o,l,this.platformIsServer,this.tracingService)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;this.platformIsServer&&i.encapsulation===ti.ShadowDom&&(i=Jt(Ct({},i),{encapsulation:ti.Emulated}));let r=this.getOrCreateRenderer(t,i);return r instanceof Bl?r.applyToHost(t):r instanceof ko&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,s=r.get(i.id);if(!s){let o=this.doc,a=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.platformIsServer,f=this.tracingService;switch(i.encapsulation){case ti.Emulated:s=new Bl(l,c,i,this.appId,u,o,a,d,f);break;case ti.ShadowDom:return new mf(l,c,t,i,o,a,this.nonce,d,f);default:s=new ko(l,c,i,u,o,a,d,f);break}r.set(i.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(i){return new(i||n)(nt(gf),nt(yf),nt(Lh),nt(hT),nt(Mn),nt(Co),nt(Rt),nt(Bh),nt(Al,8))};static \u0275prov=pt({token:n,factory:n.\u0275fac})}return n})(),Lo=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,i,r,s){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r,this.tracingService=s}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(ff[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(H_(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(H_(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){t.remove()}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new ue(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=ff[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=ff[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(Cr.DashCase|Cr.Important)?e.style.setProperty(t,i,r&Cr.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&Cr.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i,r){if(typeof e=="string"&&(e=No().getGlobalEventTarget(this.doc,e),!e))throw new ue(5102,!1);let s=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(s=this.tracingService.wrapEventListener(e,t,s)),this.eventManager.addEventListener(e,t,s,r)}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function H_(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var mf=class extends Lo{sharedStylesHost;hostEl;shadowRoot;constructor(e,t,i,r,s,o,a,l,c){super(e,s,o,l,c),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=r.styles;u=G_(r.id,u);for(let f of u){let h=document.createElement("style");a&&h.setAttribute("nonce",a),h.textContent=f,this.shadowRoot.appendChild(h)}let d=r.getExternalStyles?.();if(d)for(let f of d){let h=pf(f,s);a&&h.setAttribute("nonce",a),this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},ko=class extends Lo{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,i,r,s,o,a,l,c){super(e,s,o,a,l),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r;let u=i.styles;this.styles=c?G_(c,u):u,this.styleUrls=i.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Bl=class extends ko{contentAttr;hostAttr;constructor(e,t,i,r,s,o,a,l,c){let u=r+"-"+i.id;super(e,t,i,s,o,a,l,c,u),this.contentAttr=fT(u),this.hostAttr=pT(u)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}};var Hl=class n extends Ro{supportsDOMEvents=!0;static makeCurrent(){lf(new n)}onAndCancel(e,t,i,r){return e.addEventListener(t,i,r),()=>{e.removeEventListener(t,i,r)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=mT();return t==null?null:gT(t)}resetBaseElement(){Bo=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return df(document.cookie,e)}},Bo=null;function mT(){return Bo=Bo||document.head.querySelector("base"),Bo?Bo.getAttribute("href"):null}function gT(n){return new URL(n,document.baseURI).pathname}var yT=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||n)};static \u0275prov=pt({token:n,factory:n.\u0275fac})}return n})(),j_=(()=>{class n extends Oo{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r,s){return t.addEventListener(i,r,s),()=>this.removeEventListener(t,i,r,s)}removeEventListener(t,i,r,s){return t.removeEventListener(i,r,s)}static \u0275fac=function(i){return new(i||n)(nt(Mn))};static \u0275prov=pt({token:n,factory:n.\u0275fac})}return n})(),W_=["alt","control","meta","shift"],_T={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},vT={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},$_=(()=>{class n extends Oo{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,r,s){let o=n.parseEventName(i),a=n.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>No().onAndCancel(t,o.domEventName,a,s))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let s=n._normalizeKey(i.pop()),o="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),o="code."),W_.forEach(c=>{let u=i.indexOf(c);u>-1&&(i.splice(u,1),o+=c+".")}),o+=s,i.length!=0||s.length===0)return null;let l={};return l.domEventName=r,l.fullKey=o,l}static matchEventFullKeyCode(t,i){let r=_T[t.key]||t.key,s="";return i.indexOf("code.")>-1&&(r=t.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),W_.forEach(o=>{if(o!==r){let a=vT[o];a(t)&&(s+=o+".")}}),s+=r,s===i)}static eventCallback(t,i,r){return s=>{n.matchEventFullKeyCode(s,t)&&r.runGuarded(()=>i(s))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(i){return new(i||n)(nt(Mn))};static \u0275prov=pt({token:n,factory:n.\u0275fac})}return n})();function vf(n,e){return P_(Ct({rootComponent:n},xT(e)))}function xT(n){return{appProviders:[...wT,...n?.providers??[]],platformProviders:bT}}function ET(){Hl.makeCurrent()}function MT(){return new gi}function ST(){return Vy(document),document}var bT=[{provide:Co,useValue:hf},{provide:kh,useValue:ET,multi:!0},{provide:Mn,useFactory:ST}];var wT=[{provide:bl,useValue:"root"},{provide:gi,useFactory:MT},{provide:Vl,useClass:j_,multi:!0,deps:[Mn]},{provide:Vl,useClass:$_,multi:!0,deps:[Mn]},Uo,yf,gf,{provide:ji,useExisting:Uo},{provide:Fo,useClass:yT},[]];var Lc="177",lr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},cr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yv=0,np=1,_v=2;var ip=1,vv=2,oi=3,Pi=0,Yt=1,ai=2,Oi=0,Or=1,rp=2,sp=3,op=4,xv=5,nr=100,Ev=101,Mv=102,Sv=103,bv=104,wv=200,Tv=201,Cv=202,Dv=203,lc=204,cc=205,Av=206,Iv=207,Rv=208,Nv=209,Pv=210,Fv=211,Ov=212,Lv=213,kv=214,kc=0,Uc=1,Bc=2,Lr=3,Vc=4,Hc=5,zc=6,Gc=7,ap=0,Uv=1,Bv=2,Li=0,Vv=1,Hv=2,zv=3,Gv=4,Wv=5,jv=6,$v=7;var Xo=300,Hr=301,zr=302,Ws=303,Wc=304,ba=306,uc=1e3,Wn=1001,dc=1002,rn=1003,qv=1004;var wa=1005;var gn=1006,jc=1007;var ur=1008,lp=1008,$n=1009,cp=1010,up=1011,js=1012,$c=1013,dr=1014,An=1015,qn=1016,qc=1017,Xc=1018,$s=1020,dp=35902,hp=1021,fp=1022,Zt=1023,Ns=1026,qs=1027,pp=1028,Yc=1029,mp=1030,Zc=1031;var Kc=1033,Ta=33776,Ca=33777,Da=33778,Aa=33779,Jc=35840,Qc=35841,eu=35842,tu=35843,nu=36196,iu=37492,ru=37496,su=37808,ou=37809,au=37810,lu=37811,cu=37812,uu=37813,du=37814,hu=37815,fu=37816,pu=37817,mu=37818,gu=37819,yu=37820,_u=37821,Ia=36492,vu=36494,xu=36495,gp=36283,Eu=36284,Mu=36285,Su=36286;var Yo=2300,hc=2301,ac=2302,jf=2400,$f=2401,qf=2402;var Xv=3200,Yv=3201;var yp=0,Zv=1,ki="",pn="srgb",Fi="srgb-linear",Zo="linear",ct="srgb";var Fr=7680;var Xf=519,Kv=512,Jv=513,Qv=514,_p=515,e0=516,t0=517,n0=518,i0=519,Yf=35044;var vp="300 es",ni=2e3,Ko=2001;var ii=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],q_=1234567,Wo=Math.PI/180,Ps=180/Math.PI;function Xs(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function He(n,e,t){return Math.max(e,Math.min(t,n))}function xp(n,e){return(n%e+e)%e}function TT(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function CT(n,e,t){return n!==e?(t-n)/(e-n):0}function jo(n,e,t){return(1-t)*n+t*e}function DT(n,e,t,i){return jo(n,e,1-Math.exp(-t*i))}function AT(n,e=1){return e-Math.abs(xp(n,e*2)-e)}function IT(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function RT(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function NT(n,e){return n+Math.floor(Math.random()*(e-n+1))}function PT(n,e){return n+Math.random()*(e-n)}function FT(n){return n*(.5-Math.random())}function OT(n){n!==void 0&&(q_=n);let e=q_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function LT(n){return n*Wo}function kT(n){return n*Ps}function UT(n){return(n&n-1)===0&&n!==0}function BT(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function VT(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function HT(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),h=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*h,a*c);break;case"YXY":n.set(l*h,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Is(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Xt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Ep={DEG2RAD:Wo,RAD2DEG:Ps,generateUUID:Xs,clamp:He,euclideanModulo:xp,mapLinear:TT,inverseLerp:CT,lerp:jo,damp:DT,pingpong:AT,smoothstep:IT,smootherstep:RT,randInt:NT,randFloat:PT,randFloatSpread:FT,seededRandom:OT,degToRad:LT,radToDeg:kT,isPowerOfTwo:UT,ceilPowerOfTwo:BT,floorPowerOfTwo:VT,setQuaternionFromProperEuler:HT,normalize:Xt,denormalize:Is},pe=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(He(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Tn=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],h=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=g,e[t+3]=y;return}if(d!==y||l!==f||c!==h||u!==g){let m=1-a,p=l*f+c*h+u*g+d*y,b=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let A=Math.sqrt(S),C=Math.atan2(A,p*b);m=Math.sin(m*C)/A,a=Math.sin(a*C)/A}let E=a*b;if(l=l*m+f*E,c=c*m+h*E,u=u*m+g*E,d=d*m+y*E,m===1-a){let A=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=A,c*=A,u*=A,d*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],h=s[o+2],g=s[o+3];return e[t]=a*g+u*d+l*h-c*f,e[t+1]=l*g+u*f+c*d-a*h,e[t+2]=c*g+u*h+a*f-l*d,e[t+3]=u*g-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),h=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"YZX":this._x=f*u*d+c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d-f*h*g;break;case"XZY":this._x=f*u*d-c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>d){let h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>d){let h=2*Math.sqrt(1+a-i-d);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{let h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(X_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(X_.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xf.copy(this).projectOnVector(e),this.sub(xf)}reflect(e){return this.sub(xf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(He(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xf=new N,X_=new Tn,ze=class n{constructor(e,t,i,r,s,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],y=r[0],m=r[3],p=r[6],b=r[1],S=r[4],E=r[7],A=r[2],C=r[5],T=r[8];return s[0]=o*y+a*b+l*A,s[3]=o*m+a*S+l*C,s[6]=o*p+a*E+l*T,s[1]=c*y+u*b+d*A,s[4]=c*m+u*S+d*C,s[7]=c*p+u*E+d*T,s[2]=f*y+h*b+g*A,s[5]=f*m+h*S+g*C,s[8]=f*p+h*E+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,h=c*s-o*l,g=t*d+i*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(u*t-r*l)*y,e[5]=(r*s-a*t)*y,e[6]=h*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ef.makeScale(e,t)),this}rotate(e){return this.premultiply(Ef.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ef.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ef=new ze;function Mp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Jo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function r0(){let n=Jo("canvas");return n.style.display="block",n}var Y_={};function kr(n){n in Y_||(Y_[n]=!0,console.warn(n))}function s0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function o0(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function a0(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Z_=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),K_=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zT(){let n={enabled:!0,workingColorSpace:Fi,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ct&&(r.r=Ni(r.r),r.g=Ni(r.g),r.b=Ni(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(r.r=Rs(r.r),r.g=Rs(r.g),r.b=Rs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ki?Zo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return kr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return kr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Fi]:{primaries:e,whitePoint:i,transfer:Zo,toXYZ:Z_,fromXYZ:K_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:Z_,fromXYZ:K_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),n}var Qe=zT();function Ni(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Rs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var _s,fc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{_s===void 0&&(_s=Jo("canvas")),_s.width=e.width,_s.height=e.height;let r=_s.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=_s}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Jo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ni(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ni(t[i]/255)*255):t[i]=Ni(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},GT=0,Fs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:GT++}),this.uuid=Xs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Mf(r[o].image)):s.push(Mf(r[o]))}else s=Mf(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Mf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var WT=0,Sf=new N,Ui=(()=>{class n extends ii{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=Wn,s=Wn,o=gn,a=ur,l=Zt,c=$n,u=n.DEFAULT_ANISOTROPY,d=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:WT++}),this.uuid=Xs(),this.name="",this.source=new Fs(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Sf).x}get height(){return this.source.getSize(Sf).y}get depth(){return this.source.getSize(Sf).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let s=this[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}s&&r&&s.isVector2&&r.isVector2||s&&r&&s.isVector3&&r.isVector3||s&&r&&s.isMatrix3&&r.isMatrix3?s.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case uc:t.x=t.x-Math.floor(t.x);break;case Wn:t.x=t.x<0?0:1;break;case dc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case uc:t.y=t.y-Math.floor(t.y);break;case Wn:t.y=t.y<0?0:1;break;case dc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=Xo,n.DEFAULT_ANISOTROPY=1,n})(),Et=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,E=(h+1)/2,A=(p+1)/2,C=(u+f)/4,T=(d+y)/4,P=(g+m)/4;return S>E&&S>A?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=C/i,s=T/i):E>A?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=C/r,s=P/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=T/s,r=P/s),this.set(i,r,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-y)/b,this.z=(f-u)/b,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},pc=class extends ii{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);let r={width:e,height:t,depth:i.depth},s=new Ui(r);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Fs(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ri=class extends pc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Qo=class extends Ui{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var mc=class extends Ui{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ir=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hn):Hn.fromBufferAttribute(s,o),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),zl.copy(i.boundingBox)),zl.applyMatrix4(e.matrixWorld),this.union(zl)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vo),Gl.subVectors(this.max,Vo),vs.subVectors(e.a,Vo),xs.subVectors(e.b,Vo),Es.subVectors(e.c,Vo),Yi.subVectors(xs,vs),Zi.subVectors(Es,xs),Ir.subVectors(vs,Es);let t=[0,-Yi.z,Yi.y,0,-Zi.z,Zi.y,0,-Ir.z,Ir.y,Yi.z,0,-Yi.x,Zi.z,0,-Zi.x,Ir.z,0,-Ir.x,-Yi.y,Yi.x,0,-Zi.y,Zi.x,0,-Ir.y,Ir.x,0];return!bf(t,vs,xs,Es,Gl)||(t=[1,0,0,0,1,0,0,0,1],!bf(t,vs,xs,Es,Gl))?!1:(Wl.crossVectors(Yi,Zi),t=[Wl.x,Wl.y,Wl.z],bf(t,vs,xs,Es,Gl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},wi=[new N,new N,new N,new N,new N,new N,new N,new N],Hn=new N,zl=new ir,vs=new N,xs=new N,Es=new N,Yi=new N,Zi=new N,Ir=new N,Vo=new N,Gl=new N,Wl=new N,Rr=new N;function bf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Rr.fromArray(n,s);let a=r.x*Math.abs(Rr.x)+r.y*Math.abs(Rr.y)+r.z*Math.abs(Rr.z),l=e.dot(Rr),c=t.dot(Rr),u=i.dot(Rr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var jT=new ir,Ho=new N,wf=new N,Os=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):jT.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);let t=Ho.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ho,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add(wf)),this.expandByPoint(Ho.copy(e.center).sub(wf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ti=new N,Tf=new N,jl=new N,Ki=new N,Cf=new N,$l=new N,Df=new N,Ur=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Tf.copy(e).add(t).multiplyScalar(.5),jl.copy(t).sub(e).normalize(),Ki.copy(this.origin).sub(Tf);let s=e.distanceTo(t)*.5,o=-this.direction.dot(jl),a=Ki.dot(this.direction),l=-Ki.dot(jl),c=Ki.lengthSq(),u=Math.abs(1-o*o),d,f,h,g;if(u>0)if(d=o*l-a,f=o*a-l,g=s*u,d>=0)if(f>=-g)if(f<=g){let y=1/u;d*=y,f*=y,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Tf).addScaledVector(jl,f),h}intersectSphere(e,t){Ti.subVectors(e.center,this.origin);let i=Ti.dot(this.direction),r=Ti.dot(Ti)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,i,r,s){Cf.subVectors(t,e),$l.subVectors(i,e),Df.crossVectors(Cf,$l);let o=this.direction.dot(Df),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ki.subVectors(this.origin,e);let l=a*this.direction.dot($l.crossVectors(Ki,$l));if(l<0)return null;let c=a*this.direction.dot(Cf.cross(Ki));if(c<0||l+c>o)return null;let u=-a*Ki.dot(Df);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_t=class n{constructor(e,t,i,r,s,o,a,l,c,u,d,f,h,g,y,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,d,f,h,g,y,m)}set(e,t,i,r,s,o,a,l,c,u,d,f,h,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Ms.setFromMatrixColumn(e,0).length(),s=1/Ms.setFromMatrixColumn(e,1).length(),o=1/Ms.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*u,h=o*d,g=a*u,y=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+g*c,t[5]=f-y*c,t[9]=-a*l,t[2]=y-f*c,t[6]=g+h*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,h=l*d,g=c*u,y=c*d;t[0]=f+y*a,t[4]=g*a-h,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=y+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,h=l*d,g=c*u,y=c*d;t[0]=f-y*a,t[4]=-o*d,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=y-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,h=o*d,g=a*u,y=a*d;t[0]=l*u,t[4]=g*c-h,t[8]=f*c+y,t[1]=l*d,t[5]=y*c+f,t[9]=h*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,h=o*c,g=a*l,y=a*c;t[0]=l*u,t[4]=y-f*d,t[8]=g*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*d+g,t[10]=f-y*d}else if(e.order==="XZY"){let f=o*l,h=o*c,g=a*l,y=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+y,t[5]=o*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=a*u,t[10]=y*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($T,e,qT)}lookAt(e,t,i){let r=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Ji.crossVectors(i,hn),Ji.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Ji.crossVectors(i,hn)),Ji.normalize(),ql.crossVectors(hn,Ji),r[0]=Ji.x,r[4]=ql.x,r[8]=hn.x,r[1]=Ji.y,r[5]=ql.y,r[9]=hn.y,r[2]=Ji.z,r[6]=ql.z,r[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],y=i[6],m=i[10],p=i[14],b=i[3],S=i[7],E=i[11],A=i[15],C=r[0],T=r[4],P=r[8],M=r[12],v=r[1],I=r[5],W=r[9],H=r[13],q=r[2],Z=r[6],L=r[10],U=r[14],F=r[3],Y=r[7],ie=r[11],fe=r[15];return s[0]=o*C+a*v+l*q+c*F,s[4]=o*T+a*I+l*Z+c*Y,s[8]=o*P+a*W+l*L+c*ie,s[12]=o*M+a*H+l*U+c*fe,s[1]=u*C+d*v+f*q+h*F,s[5]=u*T+d*I+f*Z+h*Y,s[9]=u*P+d*W+f*L+h*ie,s[13]=u*M+d*H+f*U+h*fe,s[2]=g*C+y*v+m*q+p*F,s[6]=g*T+y*I+m*Z+p*Y,s[10]=g*P+y*W+m*L+p*ie,s[14]=g*M+y*H+m*U+p*fe,s[3]=b*C+S*v+E*q+A*F,s[7]=b*T+S*I+E*Z+A*Y,s[11]=b*P+S*W+E*L+A*ie,s[15]=b*M+S*H+E*U+A*fe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],y=e[7],m=e[11],p=e[15];return g*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*h-i*l*h)+y*(+t*l*h-t*c*f+s*o*f-r*o*h+r*c*u-s*l*u)+m*(+t*c*d-t*a*h-s*o*d+i*o*h+s*a*u-i*c*u)+p*(-r*a*u-t*l*d+t*a*f+r*o*d-i*o*f+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],y=e[13],m=e[14],p=e[15],b=d*m*c-y*f*c+y*l*h-a*m*h-d*l*p+a*f*p,S=g*f*c-u*m*c-g*l*h+o*m*h+u*l*p-o*f*p,E=u*y*c-g*d*c+g*a*h-o*y*h-u*a*p+o*d*p,A=g*d*l-u*y*l-g*a*f+o*y*f+u*a*m-o*d*m,C=t*b+i*S+r*E+s*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/C;return e[0]=b*T,e[1]=(y*f*s-d*m*s-y*r*h+i*m*h+d*r*p-i*f*p)*T,e[2]=(a*m*s-y*l*s+y*r*c-i*m*c-a*r*p+i*l*p)*T,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*h-i*l*h)*T,e[4]=S*T,e[5]=(u*m*s-g*f*s+g*r*h-t*m*h-u*r*p+t*f*p)*T,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*p-t*l*p)*T,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*h+t*l*h)*T,e[8]=E*T,e[9]=(g*d*s-u*y*s-g*i*h+t*y*h+u*i*p-t*d*p)*T,e[10]=(o*y*s-g*a*s+g*i*c-t*y*c-o*i*p+t*a*p)*T,e[11]=(u*a*s-o*d*s-u*i*c+t*d*c+o*i*h-t*a*h)*T,e[12]=A*T,e[13]=(u*y*r-g*d*r+g*i*f-t*y*f-u*i*m+t*d*m)*T,e[14]=(g*a*r-o*y*r-g*i*l+t*y*l+o*i*m-t*a*m)*T,e[15]=(o*d*r-u*a*r+u*i*l-t*d*l-o*i*f+t*a*f)*T,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,f=s*c,h=s*u,g=s*d,y=o*u,m=o*d,p=a*d,b=l*c,S=l*u,E=l*d,A=i.x,C=i.y,T=i.z;return r[0]=(1-(y+p))*A,r[1]=(h+E)*A,r[2]=(g-S)*A,r[3]=0,r[4]=(h-E)*C,r[5]=(1-(f+p))*C,r[6]=(m+b)*C,r[7]=0,r[8]=(g+S)*T,r[9]=(m-b)*T,r[10]=(1-(f+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=Ms.set(r[0],r[1],r[2]).length(),o=Ms.set(r[4],r[5],r[6]).length(),a=Ms.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],zn.copy(this);let c=1/s,u=1/o,d=1/a;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=u,zn.elements[5]*=u,zn.elements[6]*=u,zn.elements[8]*=d,zn.elements[9]*=d,zn.elements[10]*=d,t.setFromRotationMatrix(zn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=ni){let l=this.elements,c=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r),h,g;if(a===ni)h=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ko)h=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=ni){let l=this.elements,c=1/(t-e),u=1/(i-r),d=1/(o-s),f=(t+e)*c,h=(i+r)*u,g,y;if(a===ni)g=(o+s)*d,y=-2*d;else if(a===Ko)g=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ms=new N,zn=new _t,$T=new N(0,0,0),qT=new N(1,1,1),Ji=new N,ql=new N,hn=new N,J_=new _t,Q_=new Tn,rr=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],l=s[8],c=s[1],u=s[5],d=s[9],f=s[2],h=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-He(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(He(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return J_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(J_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Q_.setFromEuler(this),this.setFromQuaternion(Q_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),Ls=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},XT=0,ev=new N,Ss=new Tn,Ci=new _t,Xl=new N,zo=new N,YT=new N,ZT=new Tn,tv=new N(1,0,0),nv=new N(0,1,0),iv=new N(0,0,1),rv={type:"added"},KT={type:"removed"},bs={type:"childadded",child:null},Af={type:"childremoved",child:null},si=(()=>{class n extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:XT++}),this.uuid=Xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new N,i=new rr,r=new Tn,s=new N(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new ze}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ls,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ss.setFromAxisAngle(t,i),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(t,i){return Ss.setFromAxisAngle(t,i),this.quaternion.premultiply(Ss),this}rotateX(t){return this.rotateOnAxis(tv,t)}rotateY(t){return this.rotateOnAxis(nv,t)}rotateZ(t){return this.rotateOnAxis(iv,t)}translateOnAxis(t,i){return ev.copy(t).applyQuaternion(this.quaternion),this.position.add(ev.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(tv,t)}translateY(t){return this.translateOnAxis(nv,t)}translateZ(t){return this.translateOnAxis(iv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Xl.copy(t):Xl.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(zo,Xl,this.up):Ci.lookAt(Xl,zo,this.up),this.quaternion.setFromRotationMatrix(Ci),s&&(Ci.extractRotation(s.matrixWorld),Ss.setFromRotationMatrix(Ci),this.quaternion.premultiply(Ss.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rv),bs.child=t,this.dispatchEvent(bs),bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(KT),Af.child=t,this.dispatchEvent(Af),Af.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rv),bs.child=t,this.dispatchEvent(bs),bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,t,YT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,ZT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>Jt(Ct({},l),{boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>Ct({},l)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let u=0,d=c.length;u<d;u++){let f=c[u];o(t.shapes,f)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(o(t.materials,this.material[c]));s.material=l}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(o(t.animations,c))}}if(i){let l=a(t.geometries),c=a(t.materials),u=a(t.textures),d=a(t.images),f=a(t.shapes),h=a(t.skeletons),g=a(t.animations),y=a(t.nodes);l.length>0&&(r.geometries=l),c.length>0&&(r.materials=c),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),f.length>0&&(r.shapes=f),h.length>0&&(r.skeletons=h),g.length>0&&(r.animations=g),y.length>0&&(r.nodes=y)}return r.object=s,r;function a(l){let c=[];for(let u in l){let d=l[u];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new N(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),Gn=new N,Di=new N,If=new N,Ai=new N,ws=new N,Ts=new N,sv=new N,Rf=new N,Nf=new N,Pf=new N,Ff=new Et,Of=new Et,Lf=new Et,tr=class n{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Gn.subVectors(e,t),r.cross(Gn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Gn.subVectors(r,t),Di.subVectors(i,t),If.subVectors(e,t);let o=Gn.dot(Gn),a=Gn.dot(Di),l=Gn.dot(If),c=Di.dot(Di),u=Di.dot(If),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let f=1/d,h=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ai.x),l.addScaledVector(o,Ai.y),l.addScaledVector(a,Ai.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Ff.setScalar(0),Of.setScalar(0),Lf.setScalar(0),Ff.fromBufferAttribute(e,t),Of.fromBufferAttribute(e,i),Lf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ff,s.x),o.addScaledVector(Of,s.y),o.addScaledVector(Lf,s.z),o}static isFrontFacing(e,t,i,r){return Gn.subVectors(i,t),Di.subVectors(e,t),Gn.cross(Di).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),Gn.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;ws.subVectors(r,i),Ts.subVectors(s,i),Rf.subVectors(e,i);let l=ws.dot(Rf),c=Ts.dot(Rf);if(l<=0&&c<=0)return t.copy(i);Nf.subVectors(e,r);let u=ws.dot(Nf),d=Ts.dot(Nf);if(u>=0&&d<=u)return t.copy(r);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(ws,o);Pf.subVectors(e,s);let h=ws.dot(Pf),g=Ts.dot(Pf);if(g>=0&&h<=g)return t.copy(s);let y=h*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Ts,a);let m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return sv.subVectors(s,r),a=(d-u)/(d-u+(h-g)),t.copy(r).addScaledVector(sv,a);let p=1/(m+y+f);return o=y*p,a=f*p,t.copy(i).addScaledVector(ws,o).addScaledVector(Ts,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},l0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},Yl={h:0,s:0,l:0};function kf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var We=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Qe.workingColorSpace){if(e=xp(e,1),t=He(t,0,1),i=He(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=kf(o,s,e+1/3),this.g=kf(o,s,e),this.b=kf(o,s,e-1/3)}return Qe.colorSpaceToWorking(this,r),this}setStyle(e,t=pn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pn){let i=l0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return Qe.workingToColorSpace(zt.copy(this),e),Math.round(He(zt.r*255,0,255))*65536+Math.round(He(zt.g*255,0,255))*256+Math.round(He(zt.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(zt.copy(this),t);let i=zt.r,r=zt.g,s=zt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=pn){Qe.workingToColorSpace(zt.copy(this),e);let t=zt.r,i=zt.g,r=zt.b;return e!==pn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL(Yl);let i=jo(Qi.h,Yl.h,t),r=jo(Qi.s,Yl.s,t),s=jo(Qi.l,Yl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zt=new We;We.NAMES=l0;var JT=0,sr=class extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:JT++}),this.uuid=Xs(),this.name="",this.type="Material",this.blending=Or,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lc,this.blendDst=cc,this.blendEquation=nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Or&&(i.blending=this.blending),this.side!==Pi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==lc&&(i.blendSrc=this.blendSrc),this.blendDst!==cc&&(i.blendDst=this.blendDst),this.blendEquation!==nr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Lr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ea=class extends sr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rr,this.combine=ap,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ri=QT();function QT(){let n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,r[l]=24,r[l|256]=24):(i[l]=31744,i[l|256]=64512,r[l]=13,r[l|256]=13)}let s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function eC(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=He(n,-65504,65504),Ri.floatView[0]=n;let e=Ri.uint32View[0],t=e>>23&511;return Ri.baseTable[t]+((e&8388607)>>Ri.shiftTable[t])}function tC(n){let e=n>>10;return Ri.uint32View[0]=Ri.mantissaTable[Ri.offsetTable[e]+(n&1023)]+Ri.exponentTable[e],Ri.floatView[0]}var ta=class{static toHalfFloat(e){return eC(e)}static fromHalfFloat(e){return tC(e)}},At=new N,Zl=new pe,nC=0,mn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nC++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Yf,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Zl.fromBufferAttribute(this,t),Zl.applyMatrix3(e),this.setXY(t,Zl.x,Zl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Is(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Xt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Is(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Is(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Is(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Is(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),r=Xt(r,this.array),s=Xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yf&&(e.usage=this.usage),e}};var na=class extends mn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ia=class extends mn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Tt=class extends mn{constructor(e,t,i){super(new Float32Array(e),t,i)}},iC=0,Sn=new _t,Uf=new si,Cs=new N,fn=new ir,Go=new ir,Lt=new N,Cn=class n extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iC++}),this.uuid=Xs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mp(e)?ia:na)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,i){return Sn.makeTranslation(e,t,i),this.applyMatrix4(Sn),this}scale(e,t,i){return Sn.makeScale(e,t,i),this.applyMatrix4(Sn),this}lookAt(e){return Uf.lookAt(e),Uf.updateMatrix(),this.applyMatrix4(Uf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Tt(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ir);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Os);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Go.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(fn.min,Go.min),fn.expandByPoint(Lt),Lt.addVectors(fn.max,Go.max),fn.expandByPoint(Lt)):(fn.expandByPoint(Go.min),fn.expandByPoint(Go.max))}fn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Lt.fromBufferAttribute(a,c),l&&(Cs.fromBufferAttribute(e,c),Lt.add(Cs)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new N,l[P]=new N;let c=new N,u=new N,d=new N,f=new pe,h=new pe,g=new pe,y=new N,m=new N;function p(P,M,v){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,v),f.fromBufferAttribute(s,P),h.fromBufferAttribute(s,M),g.fromBufferAttribute(s,v),u.sub(c),d.sub(c),h.sub(f),g.sub(f);let I=1/(h.x*g.y-g.x*h.y);isFinite(I)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(I),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(I),a[P].add(y),a[M].add(y),a[v].add(y),l[P].add(m),l[M].add(m),l[v].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let P=0,M=b.length;P<M;++P){let v=b[P],I=v.start,W=v.count;for(let H=I,q=I+W;H<q;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let S=new N,E=new N,A=new N,C=new N;function T(P){A.fromBufferAttribute(r,P),C.copy(A);let M=a[P];S.copy(M),S.sub(A.multiplyScalar(A.dot(M))).normalize(),E.crossVectors(C,M);let I=E.dot(l[P])<0?-1:1;o.setXYZW(P,S.x,S.y,S.z,I)}for(let P=0,M=b.length;P<M;++P){let v=b[P],I=v.start,W=v.count;for(let H=I,q=I+W;H<q;H+=3)T(e.getX(H+0)),T(e.getX(H+1)),T(e.getX(H+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,u=new N,d=new N;if(e)for(let f=0,h=e.count;f<h;f+=3){let g=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u),h=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?h=l[y]*a.data.stride+a.offset:h=l[y]*u;for(let p=0;p<u;p++)f[g++]=c[h++]}return new mn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){let f=c[u],h=e(f,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ov=new _t,Nr=new Ur,Kl=new Os,av=new N,Jl=new N,Ql=new N,ec=new N,Bf=new N,tc=new N,lv=new N,nc=new N,Nt=class extends si{constructor(e=new Cn,t=new ea){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){tc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],d=s[l];u!==0&&(Bf.fromBufferAttribute(d,e),o?tc.addScaledVector(Bf,u):tc.addScaledVector(Bf.sub(t),u))}t.add(tc)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Kl.copy(i.boundingSphere),Kl.applyMatrix4(s),Nr.copy(e.ray).recast(e.near),!(Kl.containsPoint(Nr.origin)===!1&&(Nr.intersectSphere(Kl,av)===null||Nr.origin.distanceToSquared(av)>(e.far-e.near)**2))&&(ov.copy(s).invert(),Nr.copy(e.ray).applyMatrix4(ov),!(i.boundingBox!==null&&Nr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Nr)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],p=o[m.materialIndex],b=Math.max(m.start,h.start),S=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let E=b,A=S;E<A;E+=3){let C=a.getX(E),T=a.getX(E+1),P=a.getX(E+2);r=ic(this,p,e,i,c,u,d,C,T,P),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),y=Math.min(a.count,h.start+h.count);for(let m=g,p=y;m<p;m+=3){let b=a.getX(m),S=a.getX(m+1),E=a.getX(m+2);r=ic(this,o,e,i,c,u,d,b,S,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],p=o[m.materialIndex],b=Math.max(m.start,h.start),S=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let E=b,A=S;E<A;E+=3){let C=E,T=E+1,P=E+2;r=ic(this,p,e,i,c,u,d,C,T,P),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),y=Math.min(l.count,h.start+h.count);for(let m=g,p=y;m<p;m+=3){let b=m,S=m+1,E=m+2;r=ic(this,o,e,i,c,u,d,b,S,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function rC(n,e,t,i,r,s,o,a){let l;if(e.side===Yt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Pi,a),l===null)return null;nc.copy(a),nc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(nc);return c<t.near||c>t.far?null:{distance:c,point:nc.clone(),object:n}}function ic(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Jl),n.getVertexPosition(l,Ql),n.getVertexPosition(c,ec);let u=rC(n,e,t,i,Jl,Ql,ec,lv);if(u){let d=new N;tr.getBarycoord(lv,Jl,Ql,ec,d),r&&(u.uv=tr.getInterpolatedAttribute(r,a,l,c,d,new pe)),s&&(u.uv1=tr.getInterpolatedAttribute(s,a,l,c,d,new pe)),o&&(u.normal=tr.getInterpolatedAttribute(o,a,l,c,d,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new N,materialIndex:0};tr.getNormal(Jl,Ql,ec,f.normal),u.face=f,u.barycoord=d}return u}var ks=class n extends Cn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],d=[],f=0,h=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(u,3)),this.setAttribute("uv",new Tt(d,2));function g(y,m,p,b,S,E,A,C,T,P,M){let v=E/T,I=A/P,W=E/2,H=A/2,q=C/2,Z=T+1,L=P+1,U=0,F=0,Y=new N;for(let ie=0;ie<L;ie++){let fe=ie*I-H;for(let Te=0;Te<Z;Te++){let Ye=Te*v-W;Y[y]=Ye*b,Y[m]=fe*S,Y[p]=q,c.push(Y.x,Y.y,Y.z),Y[y]=0,Y[m]=0,Y[p]=C>0?1:-1,u.push(Y.x,Y.y,Y.z),d.push(Te/T),d.push(1-ie/P),U+=1}}for(let ie=0;ie<P;ie++)for(let fe=0;fe<T;fe++){let Te=f+fe+Z*ie,Ye=f+fe+Z*(ie+1),G=f+(fe+1)+Z*(ie+1),re=f+(fe+1)+Z*ie;l.push(Te,Ye,re),l.push(Ye,G,re),F+=6}a.addGroup(h,F,M),h+=F,f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Gr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Gt(n){let e={};for(let t=0;t<n.length;t++){let i=Gr(n[t]);for(let r in i)e[r]=i[r]}return e}function sC(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Sp(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}var c0={clone:Gr,merge:Gt},oC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,jn=class extends sr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oC,this.fragmentShader=aC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gr(e.uniforms),this.uniformsGroups=sC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ra=class extends si{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},er=new N,cv=new pe,uv=new pe,Ut=class extends ra{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Wo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(Wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(er.x,er.y).multiplyScalar(-e/er.z),er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(er.x,er.y).multiplyScalar(-e/er.z)}getViewSize(e,t){return this.getViewBounds(e,cv,uv),t.subVectors(uv,cv)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Wo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ds=-90,As=1,gc=class extends si{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ut(Ds,As,e,t);r.layers=this.layers,this.add(r);let s=new Ut(Ds,As,e,t);s.layers=this.layers,this.add(s);let o=new Ut(Ds,As,e,t);o.layers=this.layers,this.add(o);let a=new Ut(Ds,As,e,t);a.layers=this.layers,this.add(a);let l=new Ut(Ds,As,e,t);l.layers=this.layers,this.add(l);let c=new Ut(Ds,As,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===ni)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ko)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},sa=class extends Ui{constructor(e=[],t=Hr,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},yc=class extends ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new sa(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ks(5,5,5),s=new jn({name:"CubemapFromEquirect",uniforms:Gr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:Oi});s.uniforms.tEquirect.value=t;let o=new Nt(r,s),a=t.minFilter;return t.minFilter===ur&&(t.minFilter=gn),new gc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},wn=class extends si{constructor(){super(),this.isGroup=!0,this.type="Group"}},lC={type:"move"},Us=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;c.inputState.pinching&&f>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new wn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var oa=class extends si{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rr,this.environmentIntensity=1,this.environmentRotation=new rr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var aa=class extends Ui{constructor(e=null,t=1,i=1,r,s,o,a,l,c=rn,u=rn,d,f){super(null,o,a,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vf=new N,cC=new N,uC=new ze,bn=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Vf.subVectors(i,t).cross(cC.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Vf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||uC.getNormalMatrix(e),r=this.coplanarPoint(Vf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Pr=new Os,rc=new N,Bs=class{constructor(e=new bn,t=new bn,i=new bn,r=new bn,s=new bn,o=new bn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ni){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],h=r[8],g=r[9],y=r[10],m=r[11],p=r[12],b=r[13],S=r[14],E=r[15];if(i[0].setComponents(l-s,f-c,m-h,E-p).normalize(),i[1].setComponents(l+s,f+c,m+h,E+p).normalize(),i[2].setComponents(l+o,f+u,m+g,E+b).normalize(),i[3].setComponents(l-o,f-u,m-g,E-b).normalize(),i[4].setComponents(l-a,f-d,m-y,E-S).normalize(),t===ni)i[5].setComponents(l+a,f+d,m+y,E+S).normalize();else if(t===Ko)i[5].setComponents(a,d,y,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(e){return Pr.center.set(0,0,0),Pr.radius=.7071067811865476,Pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(rc.x=r.normal.x>0?e.max.x:e.min.x,rc.y=r.normal.y>0?e.max.y:e.min.y,rc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(rc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var la=class extends Ui{constructor(e,t,i=dr,r,s,o,a=rn,l=rn,c,u=Ns,d=1){if(u!==Ns&&u!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ca=class n extends Cn{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let o=[],a=[],l=[],c=[],u=t/2,d=Math.PI/2*e,f=t,h=2*d+f,g=i*2+s,y=r+1,m=new N,p=new N;for(let b=0;b<=g;b++){let S=0,E=0,A=0,C=0;if(b<=i){let M=b/i,v=M*Math.PI/2;E=-u-e*Math.cos(v),A=e*Math.sin(v),C=-e*Math.cos(v),S=M*d}else if(b<=i+s){let M=(b-i)/s;E=-u+M*t,A=e,C=0,S=d+M*f}else{let M=(b-i-s)/i,v=M*Math.PI/2;E=u+e*Math.sin(v),A=e*Math.cos(v),C=e*Math.sin(v),S=d+f+M*d}let T=Math.max(0,Math.min(1,S/h)),P=0;b===0?P=.5/r:b===g&&(P=-.5/r);for(let M=0;M<=r;M++){let v=M/r,I=v*Math.PI*2,W=Math.sin(I),H=Math.cos(I);p.x=-A*H,p.y=E,p.z=A*W,a.push(p.x,p.y,p.z),m.set(-A*H,C,A*W),m.normalize(),l.push(m.x,m.y,m.z),c.push(v+P,T)}if(b>0){let M=(b-1)*y;for(let v=0;v<r;v++){let I=M+v,W=M+v+1,H=b*y+v,q=b*y+v+1;o.push(I,W,H),o.push(W,q,H)}}}this.setIndex(o),this.setAttribute("position",new Tt(a,3)),this.setAttribute("normal",new Tt(l,3)),this.setAttribute("uv",new Tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var Dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,s=i.length,o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);let u=i[r],f=i[r+1]-u,h=(o-u)/f;return(r+h)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new pe:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new N,r=[],s=[],o=[],a=new N,l=new _t;for(let h=0;h<=e;h++){let g=h/e;r[h]=this.getTangentAt(g,new N)}s[0]=new N,o[0]=new N;let c=Number.MAX_VALUE,u=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(r[h-1],r[h]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(He(r[h-1].dot(r[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(a,g))}o[h].crossVectors(r[h],s[h])}if(t===!0){let h=Math.acos(He(s[0].dot(s[e]),-1,1));h/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(h=-h);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],h*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ua=class extends Dn{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new pe){let i=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,h=c-this.aY;l=f*u-h*d+this.aX,c=f*d+h*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},_c=class extends ua{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function bp(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,d){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,h=(a-o)/u-(l-o)/(u+d)+(l-a)/d;f*=u,h*=u,r(o,a,f,h)},calc:function(s){let o=s*s,a=o*s;return n+e*s+t*o+i*a}}}var sc=new N,Hf=new bp,zf=new bp,Gf=new bp,Vs=class extends Dn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new N){let i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(sc.subVectors(r[0],r[1]).add(r[0]),c=sc);let d=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(sc.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=sc),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),h),y=Math.pow(d.distanceToSquared(f),h),m=Math.pow(f.distanceToSquared(u),h);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Hf.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,g,y,m),zf.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,g,y,m),Gf.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,g,y,m)}else this.curveType==="catmullrom"&&(Hf.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),zf.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),Gf.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return i.set(Hf.calc(l),zf.calc(l),Gf.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new N().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function dv(n,e,t,i,r){let s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function dC(n,e){let t=1-n;return t*t*e}function hC(n,e){return 2*(1-n)*n*e}function fC(n,e){return n*n*e}function $o(n,e,t,i){return dC(n,e)+hC(n,t)+fC(n,i)}function pC(n,e){let t=1-n;return t*t*t*e}function mC(n,e){let t=1-n;return 3*t*t*n*e}function gC(n,e){return 3*(1-n)*n*n*e}function yC(n,e){return n*n*n*e}function qo(n,e,t,i,r){return pC(n,e)+mC(n,t)+gC(n,i)+yC(n,r)}var vc=class extends Dn{constructor(e=new pe,t=new pe,i=new pe,r=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new pe){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(qo(e,r.x,s.x,o.x,a.x),qo(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},xc=class extends Dn{constructor(e=new N,t=new N,i=new N,r=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new N){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(qo(e,r.x,s.x,o.x,a.x),qo(e,r.y,s.y,o.y,a.y),qo(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ec=class extends Dn{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mc=class extends Dn{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sc=class extends Dn{constructor(e=new pe,t=new pe,i=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new pe){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set($o(e,r.x,s.x,o.x),$o(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},da=class extends Dn{constructor(e=new N,t=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new N){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set($o(e,r.x,s.x,o.x),$o(e,r.y,s.y,o.y),$o(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bc=class extends Dn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){let i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(dv(a,l.x,c.x,u.x,d.x),dv(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new pe().fromArray(r))}return this}},_C=Object.freeze({__proto__:null,ArcCurve:_c,CatmullRomCurve3:Vs,CubicBezierCurve:vc,CubicBezierCurve3:xc,EllipseCurve:ua,LineCurve:Ec,LineCurve3:Mc,QuadraticBezierCurve:Sc,QuadraticBezierCurve3:da,SplineCurve:bc});var ha=class n extends Cn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,h=[],g=[],y=[],m=[];for(let p=0;p<u;p++){let b=p*f-o;for(let S=0;S<c;S++){let E=S*d-s;g.push(E,-b,0),y.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){let S=b+c*p,E=b+c*(p+1),A=b+1+c*(p+1),C=b+1+c*p;h.push(S,E,C),h.push(E,A,C)}this.setIndex(h),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(y,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var fa=class n extends Cn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new N,f=new N,h=[],g=[],y=[],m=[];for(let p=0;p<=i;p++){let b=[],S=p/i,E=0;p===0&&o===0?E=.5/t:p===i&&l===Math.PI&&(E=-.5/t);for(let A=0;A<=t;A++){let C=A/t;d.x=-e*Math.cos(r+C*s)*Math.sin(o+S*a),d.y=e*Math.cos(o+S*a),d.z=e*Math.sin(r+C*s)*Math.sin(o+S*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),m.push(C+E,1-S),b.push(c++)}u.push(b)}for(let p=0;p<i;p++)for(let b=0;b<t;b++){let S=u[p][b+1],E=u[p][b],A=u[p+1][b],C=u[p+1][b+1];(p!==0||o>0)&&h.push(S,E,C),(p!==i-1||l<Math.PI)&&h.push(E,A,C)}this.setIndex(h),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(y,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var pa=class n extends Cn{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);let o=[],a=[],l=[],c=[],u=new N,d=new N,f=new N;for(let h=0;h<=i;h++)for(let g=0;g<=r;g++){let y=g/r*s,m=h/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(y),d.y=(e+t*Math.cos(m))*Math.sin(y),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/r),c.push(h/i)}for(let h=1;h<=i;h++)for(let g=1;g<=r;g++){let y=(r+1)*h+g-1,m=(r+1)*(h-1)+g-1,p=(r+1)*(h-1)+g,b=(r+1)*h+g;o.push(y,m,b),o.push(m,p,b)}this.setIndex(o),this.setAttribute("position",new Tt(a,3)),this.setAttribute("normal",new Tt(l,3)),this.setAttribute("uv",new Tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ma=class n extends Cn{constructor(e=new da(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};let o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new N,l=new N,c=new pe,u=new N,d=[],f=[],h=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new Tt(d,3)),this.setAttribute("normal",new Tt(f,3)),this.setAttribute("uv",new Tt(h,2));function y(){for(let S=0;S<t;S++)m(S);m(s===!1?t:0),b(),p()}function m(S){u=e.getPointAt(S/t,u);let E=o.normals[S],A=o.binormals[S];for(let C=0;C<=r;C++){let T=C/r*Math.PI*2,P=Math.sin(T),M=-Math.cos(T);l.x=M*E.x+P*A.x,l.y=M*E.y+P*A.y,l.z=M*E.z+P*A.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,d.push(a.x,a.y,a.z)}}function p(){for(let S=1;S<=t;S++)for(let E=1;E<=r;E++){let A=(r+1)*(S-1)+(E-1),C=(r+1)*S+(E-1),T=(r+1)*S+E,P=(r+1)*(S-1)+E;g.push(A,C,P),g.push(C,T,P)}}function b(){for(let S=0;S<=t;S++)for(let E=0;E<=r;E++)c.x=S/t,c.y=E/r,h.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new _C[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Br=class extends sr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yp,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Hs=class extends Br{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return He(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var wc=class extends sr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Tc=class extends sr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function oc(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function vC(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Vr=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Cc=class extends Vr{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jf,endingEnd:jf}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case $f:s=e,a=2*t-i;break;case qf:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case $f:o=e,l=2*i-t;break;case qf:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,g=(i-t)/(r-t),y=g*g,m=y*g,p=-f*m+2*f*y-f*g,b=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*g+1,S=(-1-h)*m+(1.5+h)*y+.5*g,E=h*m-h*y;for(let A=0;A!==a;++A)s[A]=p*o[u+A]+b*o[c+A]+S*o[l+A]+E*o[d+A];return s}},Dc=class extends Vr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*d+o[l+f]*u;return s}},Ac=class extends Vr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},yn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=oc(t,this.TimeBufferType),this.values=oc(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:oc(e.times,Array),values:oc(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ac(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Dc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Cc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Yo:t=this.InterpolantFactoryMethodDiscrete;break;case hc:t=this.InterpolantFactoryMethodLinear;break;case ac:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yo;case this.InterpolantFactoryMethodLinear:return hc;case this.InterpolantFactoryMethodSmooth:return ac}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&vC(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===ac,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let d=a*i,f=d-i,h=d+i;for(let g=0;g!==i;++g){let y=t[d+g];if(y!==t[f+g]||y!==t[h+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=hc;var or=class extends yn{constructor(e,t,i){super(e,t,i)}};or.prototype.ValueTypeName="bool";or.prototype.ValueBufferType=Array;or.prototype.DefaultInterpolation=Yo;or.prototype.InterpolantFactoryMethodLinear=void 0;or.prototype.InterpolantFactoryMethodSmooth=void 0;var Ic=class extends yn{constructor(e,t,i,r){super(e,t,i,r)}};Ic.prototype.ValueTypeName="color";var Rc=class extends yn{constructor(e,t,i,r){super(e,t,i,r)}};Rc.prototype.ValueTypeName="number";var Nc=class extends Vr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)Tn.slerpFlat(s,0,o,c-a,o,c,l);return s}},ga=class extends yn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Nc(this.times,this.values,this.getValueSize(),e)}};ga.prototype.ValueTypeName="quaternion";ga.prototype.InterpolantFactoryMethodSmooth=void 0;var ar=class extends yn{constructor(e,t,i){super(e,t,i)}};ar.prototype.ValueTypeName="string";ar.prototype.ValueBufferType=Array;ar.prototype.DefaultInterpolation=Yo;ar.prototype.InterpolantFactoryMethodLinear=void 0;ar.prototype.InterpolantFactoryMethodSmooth=void 0;var Pc=class extends yn{constructor(e,t,i,r){super(e,t,i,r)}};Pc.prototype.ValueTypeName="vector";var Zf={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Fc=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let h=c[d],g=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null}}},u0=new Fc,bu=(()=>{class n{constructor(t){this.manager=t!==void 0?t:u0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){let r=this;return new Promise(function(s,o){r.load(t,s,i,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}return n.DEFAULT_MATERIAL_NAME="__DEFAULT",n})(),Ii={},Kf=class extends Error{constructor(e,t){super(e),this.response=t}},ya=class extends bu{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Zf.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ii[e]!==void 0){Ii[e].push({onLoad:t,onProgress:i,onError:r});return}Ii[e]=[],Ii[e].push({onLoad:t,onProgress:i,onError:r});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Ii[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),h=f?parseInt(f):0,g=h!==0,y=0,m=new ReadableStream({start(p){b();function b(){d.read().then(({done:S,value:E})=>{if(S)p.close();else{y+=E.byteLength;let A=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:h});for(let C=0,T=u.length;C<T;C++){let P=u[C];P.onProgress&&P.onProgress(A)}p.enqueue(E),b()}},S=>{p.error(S)})}}});return new Response(m)}else throw new Kf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,h=new TextDecoder(f);return c.arrayBuffer().then(g=>h.decode(g))}}}).then(c=>{Zf.add(e,c);let u=Ii[e];delete Ii[e];for(let d=0,f=u.length;d<f;d++){let h=u[d];h.onLoad&&h.onLoad(c)}}).catch(c=>{let u=Ii[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ii[e];for(let d=0,f=u.length;d<f;d++){let h=u[d];h.onError&&h.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var _a=class extends si{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var Wf=new _t,hv=new N,fv=new N,Jf=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=$n,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bs,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;hv.setFromMatrixPosition(e.matrixWorld),t.position.copy(hv),fv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fv),t.updateMatrixWorld(),Wf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Wf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var va=class extends ra{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Qf=class extends Jf{constructor(){super(new va(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zs=class extends _a{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(si.DEFAULT_UP),this.updateMatrix(),this.target=new si,this.shadow=new Qf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},xa=class extends _a{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Oc=class extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ea=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=pv();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function pv(){return performance.now()}var wp="\\[\\]\\.:\\/",xC=new RegExp("["+wp+"]","g"),Tp="[^"+wp+"]",EC="[^"+wp.replace("\\.","")+"]",MC=/((?:WC+[\/:])*)/.source.replace("WC",Tp),SC=/(WCOD+)?/.source.replace("WCOD",EC),bC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tp),wC=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tp),TC=new RegExp("^"+MC+SC+bC+wC+"$"),CC=["material","materials","bones","map"],ep=class{constructor(e,t,i){let r=i||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},wt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(xC,"")}static parseTrackName(t){let i=TC.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);CC.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let l=o[a];if(l.name===i||l.uuid===i)return l;let c=r(l.children);if(c)return c}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=ep,n})();wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var jL=new Float32Array(1);var mv=new _t,Ma=class{constructor(e,t,i=0,r=1/0){this.ray=new Ur(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Ls,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return mv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mv),this}intersectObject(e,t=!0,i=[]){return tp(e,this,i,t),i.sort(gv),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)tp(e[r],this,i,t);return i.sort(gv),i}};function gv(n,e){return n.distance-e.distance}function tp(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let o=0,a=s.length;o<a;o++)tp(s[o],e,t,!0)}}var Gs=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=He(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(He(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Sa=class extends ii{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Cp(n,e,t,i){let r=DC(i);switch(t){case hp:return n*e;case pp:return n*e/r.components*r.byteLength;case Yc:return n*e/r.components*r.byteLength;case mp:return n*e*2/r.components*r.byteLength;case Zc:return n*e*2/r.components*r.byteLength;case fp:return n*e*3/r.components*r.byteLength;case Zt:return n*e*4/r.components*r.byteLength;case Kc:return n*e*4/r.components*r.byteLength;case Ta:case Ca:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Da:case Aa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qc:case tu:return Math.max(n,16)*Math.max(e,8)/4;case Jc:case eu:return Math.max(n,8)*Math.max(e,8)/2;case nu:case iu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ru:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case su:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ou:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case au:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case lu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case cu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case uu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case du:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case hu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case fu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case pu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case mu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case gu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case yu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case _u:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ia:case vu:case xu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case gp:case Eu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Mu:case Su:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function DC(n){switch(n){case $n:case cp:return{byteLength:1,components:1};case js:case up:case qn:return{byteLength:2,components:1};case qc:case Xc:return{byteLength:2,components:4};case dr:case $c:case An:return{byteLength:4,components:1};case dp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lc);function F0(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function AC(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){let g=d[f],y=d[h];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,d[f]=y)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){let y=d[h];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var IC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,RC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,NC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,PC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,OC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,UC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,BC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,VC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,HC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zC=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,GC=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,WC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$C=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,XC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ZC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,KC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,JC=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,QC=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,eD=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tD=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nD=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iD=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rD=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sD=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oD="gl_FragColor = linearToOutputTexel( gl_FragColor );",aD=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lD=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cD=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uD=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dD=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hD=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fD=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pD=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mD=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gD=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yD=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_D=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vD=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xD=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ED=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,MD=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,SD=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bD=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wD=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,TD=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CD=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,DD=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,AD=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ID=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,RD=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ND=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,PD=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FD=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OD=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,LD=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kD=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,UD=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,BD=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VD=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,HD=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zD=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,GD=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WD=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jD=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$D=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qD=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,XD=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,YD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KD=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JD=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,QD=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,sA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,hA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_A=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,EA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,MA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,SA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,TA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,CA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,DA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,AA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,IA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,LA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,UA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,BA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,WA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$A=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,XA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ZA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,KA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,eI=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tI=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nI=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iI=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rI=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sI=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oI=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,aI=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lI=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:IC,alphahash_pars_fragment:RC,alphamap_fragment:NC,alphamap_pars_fragment:PC,alphatest_fragment:FC,alphatest_pars_fragment:OC,aomap_fragment:LC,aomap_pars_fragment:kC,batching_pars_vertex:UC,batching_vertex:BC,begin_vertex:VC,beginnormal_vertex:HC,bsdfs:zC,iridescence_fragment:GC,bumpmap_pars_fragment:WC,clipping_planes_fragment:jC,clipping_planes_pars_fragment:$C,clipping_planes_pars_vertex:qC,clipping_planes_vertex:XC,color_fragment:YC,color_pars_fragment:ZC,color_pars_vertex:KC,color_vertex:JC,common:QC,cube_uv_reflection_fragment:eD,defaultnormal_vertex:tD,displacementmap_pars_vertex:nD,displacementmap_vertex:iD,emissivemap_fragment:rD,emissivemap_pars_fragment:sD,colorspace_fragment:oD,colorspace_pars_fragment:aD,envmap_fragment:lD,envmap_common_pars_fragment:cD,envmap_pars_fragment:uD,envmap_pars_vertex:dD,envmap_physical_pars_fragment:MD,envmap_vertex:hD,fog_vertex:fD,fog_pars_vertex:pD,fog_fragment:mD,fog_pars_fragment:gD,gradientmap_pars_fragment:yD,lightmap_pars_fragment:_D,lights_lambert_fragment:vD,lights_lambert_pars_fragment:xD,lights_pars_begin:ED,lights_toon_fragment:SD,lights_toon_pars_fragment:bD,lights_phong_fragment:wD,lights_phong_pars_fragment:TD,lights_physical_fragment:CD,lights_physical_pars_fragment:DD,lights_fragment_begin:AD,lights_fragment_maps:ID,lights_fragment_end:RD,logdepthbuf_fragment:ND,logdepthbuf_pars_fragment:PD,logdepthbuf_pars_vertex:FD,logdepthbuf_vertex:OD,map_fragment:LD,map_pars_fragment:kD,map_particle_fragment:UD,map_particle_pars_fragment:BD,metalnessmap_fragment:VD,metalnessmap_pars_fragment:HD,morphinstance_vertex:zD,morphcolor_vertex:GD,morphnormal_vertex:WD,morphtarget_pars_vertex:jD,morphtarget_vertex:$D,normal_fragment_begin:qD,normal_fragment_maps:XD,normal_pars_fragment:YD,normal_pars_vertex:ZD,normal_vertex:KD,normalmap_pars_fragment:JD,clearcoat_normal_fragment_begin:QD,clearcoat_normal_fragment_maps:eA,clearcoat_pars_fragment:tA,iridescence_pars_fragment:nA,opaque_fragment:iA,packing:rA,premultiplied_alpha_fragment:sA,project_vertex:oA,dithering_fragment:aA,dithering_pars_fragment:lA,roughnessmap_fragment:cA,roughnessmap_pars_fragment:uA,shadowmap_pars_fragment:dA,shadowmap_pars_vertex:hA,shadowmap_vertex:fA,shadowmask_pars_fragment:pA,skinbase_vertex:mA,skinning_pars_vertex:gA,skinning_vertex:yA,skinnormal_vertex:_A,specularmap_fragment:vA,specularmap_pars_fragment:xA,tonemapping_fragment:EA,tonemapping_pars_fragment:MA,transmission_fragment:SA,transmission_pars_fragment:bA,uv_pars_fragment:wA,uv_pars_vertex:TA,uv_vertex:CA,worldpos_vertex:DA,background_vert:AA,background_frag:IA,backgroundCube_vert:RA,backgroundCube_frag:NA,cube_vert:PA,cube_frag:FA,depth_vert:OA,depth_frag:LA,distanceRGBA_vert:kA,distanceRGBA_frag:UA,equirect_vert:BA,equirect_frag:VA,linedashed_vert:HA,linedashed_frag:zA,meshbasic_vert:GA,meshbasic_frag:WA,meshlambert_vert:jA,meshlambert_frag:$A,meshmatcap_vert:qA,meshmatcap_frag:XA,meshnormal_vert:YA,meshnormal_frag:ZA,meshphong_vert:KA,meshphong_frag:JA,meshphysical_vert:QA,meshphysical_frag:eI,meshtoon_vert:tI,meshtoon_frag:nI,points_vert:iI,points_frag:rI,shadow_vert:sI,shadow_frag:oI,sprite_vert:aI,sprite_frag:lI},oe={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},li={basic:{uniforms:Gt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Gt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new We(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Gt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Gt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Gt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new We(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Gt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Gt([oe.points,oe.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Gt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Gt([oe.common,oe.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Gt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Gt([oe.sprite,oe.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Gt([oe.common,oe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Gt([oe.lights,oe.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};li.physical={uniforms:Gt([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var wu={r:0,b:0,g:0},Wr=new rr,cI=new _t;function uI(n,e,t,i,r,s,o){let a=new We(0),l=s===!0?0:1,c,u,d=null,f=0,h=null;function g(S){let E=S.isScene===!0?S.background:null;return E&&E.isTexture&&(E=(S.backgroundBlurriness>0?t:e).get(E)),E}function y(S){let E=!1,A=g(S);A===null?p(a,l):A&&A.isColor&&(p(A,1),E=!0);let C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,E){let A=g(E);A&&(A.isCubeTexture||A.mapping===ba)?(u===void 0&&(u=new Nt(new ks(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:Gr(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Wr.copy(E.backgroundRotation),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(cI.makeRotationFromEuler(Wr)),u.material.toneMapped=Qe.getTransfer(A.colorSpace)!==ct,(d!==A||f!==A.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=A,f=A.version,h=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Nt(new ha(2,2),new jn({name:"BackgroundMaterial",uniforms:Gr(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(A.colorSpace)!==ct,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||f!==A.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=A,f=A.version,h=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,E){S.getRGB(wu,Sp(n)),i.buffers.color.setClear(wu.r,wu.g,wu.b,E,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,E=1){a.set(S),l=E,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:y,addToRenderList:m,dispose:b}}function dI(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(v,I,W,H,q){let Z=!1,L=d(H,W,I);s!==L&&(s=L,c(s.object)),Z=h(v,H,W,q),Z&&g(v,H,W,q),q!==null&&e.update(q,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,E(v,I,W,H),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return n.createVertexArray()}function c(v){return n.bindVertexArray(v)}function u(v){return n.deleteVertexArray(v)}function d(v,I,W){let H=W.wireframe===!0,q=i[v.id];q===void 0&&(q={},i[v.id]=q);let Z=q[I.id];Z===void 0&&(Z={},q[I.id]=Z);let L=Z[H];return L===void 0&&(L=f(l()),Z[H]=L),L}function f(v){let I=[],W=[],H=[];for(let q=0;q<t;q++)I[q]=0,W[q]=0,H[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:W,attributeDivisors:H,object:v,attributes:{},index:null}}function h(v,I,W,H){let q=s.attributes,Z=I.attributes,L=0,U=W.getAttributes();for(let F in U)if(U[F].location>=0){let ie=q[F],fe=Z[F];if(fe===void 0&&(F==="instanceMatrix"&&v.instanceMatrix&&(fe=v.instanceMatrix),F==="instanceColor"&&v.instanceColor&&(fe=v.instanceColor)),ie===void 0||ie.attribute!==fe||fe&&ie.data!==fe.data)return!0;L++}return s.attributesNum!==L||s.index!==H}function g(v,I,W,H){let q={},Z=I.attributes,L=0,U=W.getAttributes();for(let F in U)if(U[F].location>=0){let ie=Z[F];ie===void 0&&(F==="instanceMatrix"&&v.instanceMatrix&&(ie=v.instanceMatrix),F==="instanceColor"&&v.instanceColor&&(ie=v.instanceColor));let fe={};fe.attribute=ie,ie&&ie.data&&(fe.data=ie.data),q[F]=fe,L++}s.attributes=q,s.attributesNum=L,s.index=H}function y(){let v=s.newAttributes;for(let I=0,W=v.length;I<W;I++)v[I]=0}function m(v){p(v,0)}function p(v,I){let W=s.newAttributes,H=s.enabledAttributes,q=s.attributeDivisors;W[v]=1,H[v]===0&&(n.enableVertexAttribArray(v),H[v]=1),q[v]!==I&&(n.vertexAttribDivisor(v,I),q[v]=I)}function b(){let v=s.newAttributes,I=s.enabledAttributes;for(let W=0,H=I.length;W<H;W++)I[W]!==v[W]&&(n.disableVertexAttribArray(W),I[W]=0)}function S(v,I,W,H,q,Z,L){L===!0?n.vertexAttribIPointer(v,I,W,q,Z):n.vertexAttribPointer(v,I,W,H,q,Z)}function E(v,I,W,H){y();let q=H.attributes,Z=W.getAttributes(),L=I.defaultAttributeValues;for(let U in Z){let F=Z[U];if(F.location>=0){let Y=q[U];if(Y===void 0&&(U==="instanceMatrix"&&v.instanceMatrix&&(Y=v.instanceMatrix),U==="instanceColor"&&v.instanceColor&&(Y=v.instanceColor)),Y!==void 0){let ie=Y.normalized,fe=Y.itemSize,Te=e.get(Y);if(Te===void 0)continue;let Ye=Te.buffer,G=Te.type,re=Te.bytesPerElement,xe=G===n.INT||G===n.UNSIGNED_INT||Y.gpuType===$c;if(Y.isInterleavedBufferAttribute){let ne=Y.data,ge=ne.stride,Le=Y.offset;if(ne.isInstancedInterleavedBuffer){for(let we=0;we<F.locationSize;we++)p(F.location+we,ne.meshPerAttribute);v.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let we=0;we<F.locationSize;we++)m(F.location+we);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let we=0;we<F.locationSize;we++)S(F.location+we,fe/F.locationSize,G,ie,ge*re,(Le+fe/F.locationSize*we)*re,xe)}else{if(Y.isInstancedBufferAttribute){for(let ne=0;ne<F.locationSize;ne++)p(F.location+ne,Y.meshPerAttribute);v.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ne=0;ne<F.locationSize;ne++)m(F.location+ne);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let ne=0;ne<F.locationSize;ne++)S(F.location+ne,fe/F.locationSize,G,ie,fe*re,fe/F.locationSize*ne*re,xe)}}else if(L!==void 0){let ie=L[U];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(F.location,ie);break;case 3:n.vertexAttrib3fv(F.location,ie);break;case 4:n.vertexAttrib4fv(F.location,ie);break;default:n.vertexAttrib1fv(F.location,ie)}}}}b()}function A(){P();for(let v in i){let I=i[v];for(let W in I){let H=I[W];for(let q in H)u(H[q].object),delete H[q];delete I[W]}delete i[v]}}function C(v){if(i[v.id]===void 0)return;let I=i[v.id];for(let W in I){let H=I[W];for(let q in H)u(H[q].object),delete H[q];delete I[W]}delete i[v.id]}function T(v){for(let I in i){let W=i[I];if(W[v.id]===void 0)continue;let H=W[v.id];for(let q in H)u(H[q].object),delete H[q];delete W[v.id]}}function P(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:m,disableUnusedAttributes:b}}function hI(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];t.update(h,i,1)}function l(c,u,d,f){if(d===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let g=0;for(let y=0;y<d;y++)g+=u[y]*f[y];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function fI(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Zt&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let P=T===qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==$n&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==An&&!P)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:E,vertexTextures:A,maxSamples:C}}function pI(n){let e=this,t=null,i=0,r=!1,s=!1,o=new bn,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{let b=s?0:i,S=b*4,E=p.clippingState||null;l.value=E,E=u(g,f,S,h);for(let A=0;A!==S;++A)E[A]=t[A];p.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=h+y*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,E=h;S!==y;++S,E+=4)o.copy(d[S]).applyMatrix4(b,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function mI(n){let e=new WeakMap;function t(o,a){return a===Ws?o.mapping=Hr:a===Wc&&(o.mapping=zr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ws||a===Wc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new yc(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var Zs=4,d0=[.125,.215,.35,.446,.526,.582],qr=20,Dp=new va,h0=new We,Ap=null,Ip=0,Rp=0,Np=!1,$r=(1+Math.sqrt(5))/2,Ys=1/$r,f0=[new N(-$r,Ys,0),new N($r,Ys,0),new N(-Ys,0,$r),new N(Ys,0,$r),new N(0,$r,-Ys),new N(0,$r,Ys),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],gI=new N,Du=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=gI}=s;Ap=this._renderer.getRenderTarget(),Ip=this._renderer.getActiveCubeFace(),Rp=this._renderer.getActiveMipmapLevel(),Np=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=g0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=m0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ap,Ip,Rp),this._renderer.xr.enabled=Np,e.scissorTest=!1,Tu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hr||e.mapping===zr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ap=this._renderer.getRenderTarget(),Ip=this._renderer.getActiveCubeFace(),Rp=this._renderer.getActiveMipmapLevel(),Np=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:qn,format:Zt,colorSpace:Fi,depthBuffer:!1},r=p0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=p0(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yI(s)),this._blurMaterial=_I(s,e,t)}return r}_compileMaterial(e){let t=new Nt(this._lodPlanes[0],e);this._renderer.compile(t,Dp)}_sceneToCubeUV(e,t,i,r,s){let l=new Ut(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(h0),d.toneMapping=Li,d.autoClear=!1;let g=new ea({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),y=new Nt(new ks,g),m=!1,p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(h0),m=!0);for(let b=0;b<6;b++){let S=b%3;S===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[b],s.y,s.z)):S===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[b]));let E=this._cubeSize;Tu(r,S*E,b>2?E:0,E,E),d.setRenderTarget(r),m&&d.render(y,l),d.render(e,l)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Hr||e.mapping===zr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=g0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=m0());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Nt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Tu(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Dp)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=f0[(r-s-1)%f0.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Nt(this._lodPlanes[r],c),f=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*qr-1),y=s/g,m=isFinite(s)?1+Math.floor(u*y):qr;m>qr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qr}`);let p=[],b=0;for(let T=0;T<qr;++T){let P=T/y,M=Math.exp(-P*P/2);p.push(M),T===0?b+=M:T<m&&(b+=2*M)}for(let T=0;T<p.length;T++)p[T]=p[T]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-i;let E=this._sizeLods[r],A=3*E*(r>S-Zs?r-S+Zs:0),C=4*(this._cubeSize-E);Tu(t,A,C,3*E,2*E),l.setRenderTarget(t),l.render(d,Dp)}};function yI(n){let e=[],t=[],i=[],r=n,s=n-Zs+1+d0.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Zs?l=d0[o-n+Zs-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,y=3,m=2,p=1,b=new Float32Array(y*g*h),S=new Float32Array(m*g*h),E=new Float32Array(p*g*h);for(let C=0;C<h;C++){let T=C%3*2/3-1,P=C>2?0:-1,M=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];b.set(M,y*g*C),S.set(f,m*g*C);let v=[C,C,C,C,C,C];E.set(v,p*g*C)}let A=new Cn;A.setAttribute("position",new mn(b,y)),A.setAttribute("uv",new mn(S,m)),A.setAttribute("faceIndex",new mn(E,p)),e.push(A),r>Zs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function p0(n,e,t){let i=new ri(n,e,t);return i.texture.mapping=ba,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Tu(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function _I(n,e,t){let i=new Float32Array(qr),r=new N(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:zp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function m0(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function g0(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function zp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vI(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ws||l===Wc,u=l===Hr||l===zr;if(c||u){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Du(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let h=a.image;return c&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new Du(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function xI(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&kr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function EI(n,e,t,i){let r={},s=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];let h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let h in f)e.update(f[h],n.ARRAY_BUFFER)}function c(d){let f=[],h=d.index,g=d.attributes.position,y=0;if(h!==null){let b=h.array;y=h.version;for(let S=0,E=b.length;S<E;S+=3){let A=b[S+0],C=b[S+1],T=b[S+2];f.push(A,C,C,T,T,A)}}else if(g!==void 0){let b=g.array;y=g.version;for(let S=0,E=b.length/3-1;S<E;S+=3){let A=S+0,C=S+1,T=S+2;f.push(A,C,C,T,T,A)}}else return;let m=new(Mp(f)?ia:na)(f,1);m.version=y;let p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){let f=s.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function MI(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,h){n.drawElements(i,h,s,f*o),t.update(h,i,1)}function c(f,h,g){g!==0&&(n.drawElementsInstanced(i,h,s,f*o,g),t.update(h,i,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,i,1)}function d(f,h,g,y){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,h[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,f,0,y,0,g);let p=0;for(let b=0;b<g;b++)p+=h[b]*y[b];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function SI(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function bI(n,e,t){let i=new WeakMap,r=new Et;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let v=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",v)};var h=v;f!==void 0&&f.texture.dispose();let g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],E=0;g===!0&&(E=1),y===!0&&(E=2),m===!0&&(E=3);let A=a.attributes.position.count*E,C=1;A>e.maxTextureSize&&(C=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);let T=new Float32Array(A*C*4*d),P=new Qo(T,A,C,d);P.type=An,P.needsUpdate=!0;let M=E*4;for(let I=0;I<d;I++){let W=p[I],H=b[I],q=S[I],Z=A*C*4*I;for(let L=0;L<W.count;L++){let U=L*M;g===!0&&(r.fromBufferAttribute(W,L),T[Z+U+0]=r.x,T[Z+U+1]=r.y,T[Z+U+2]=r.z,T[Z+U+3]=0),y===!0&&(r.fromBufferAttribute(H,L),T[Z+U+4]=r.x,T[Z+U+5]=r.y,T[Z+U+6]=r.z,T[Z+U+7]=0),m===!0&&(r.fromBufferAttribute(q,L),T[Z+U+8]=r.x,T[Z+U+9]=r.y,T[Z+U+10]=r.z,T[Z+U+11]=q.itemSize===4?r.w:1)}}f={count:d,texture:P,size:new pe(A,C)},i.set(a,f),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];let y=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",y),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function wI(n,e,t,i){let r=new WeakMap;function s(l){let c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var O0=new Ui,y0=new la(1,1),L0=new Qo,k0=new mc,U0=new sa,_0=[],v0=[],x0=new Float32Array(16),E0=new Float32Array(9),M0=new Float32Array(4);function Js(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=_0[r];if(s===void 0&&(s=new Float32Array(r),_0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ft(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Iu(n,e){let t=v0[e];t===void 0&&(t=new Int32Array(e),v0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function TI(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function CI(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2fv(this.addr,e),Ft(t,e)}}function DI(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;n.uniform3fv(this.addr,e),Ft(t,e)}}function AI(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4fv(this.addr,e),Ft(t,e)}}function II(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Pt(t,i))return;M0.set(i),n.uniformMatrix2fv(this.addr,!1,M0),Ft(t,i)}}function RI(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Pt(t,i))return;E0.set(i),n.uniformMatrix3fv(this.addr,!1,E0),Ft(t,i)}}function NI(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Pt(t,i))return;x0.set(i),n.uniformMatrix4fv(this.addr,!1,x0),Ft(t,i)}}function PI(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function FI(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2iv(this.addr,e),Ft(t,e)}}function OI(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3iv(this.addr,e),Ft(t,e)}}function LI(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4iv(this.addr,e),Ft(t,e)}}function kI(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function UI(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2uiv(this.addr,e),Ft(t,e)}}function BI(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3uiv(this.addr,e),Ft(t,e)}}function VI(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4uiv(this.addr,e),Ft(t,e)}}function HI(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(y0.compareFunction=_p,s=y0):s=O0,t.setTexture2D(e||s,r)}function zI(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||k0,r)}function GI(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||U0,r)}function WI(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||L0,r)}function jI(n){switch(n){case 5126:return TI;case 35664:return CI;case 35665:return DI;case 35666:return AI;case 35674:return II;case 35675:return RI;case 35676:return NI;case 5124:case 35670:return PI;case 35667:case 35671:return FI;case 35668:case 35672:return OI;case 35669:case 35673:return LI;case 5125:return kI;case 36294:return UI;case 36295:return BI;case 36296:return VI;case 35678:case 36198:case 36298:case 36306:case 35682:return HI;case 35679:case 36299:case 36307:return zI;case 35680:case 36300:case 36308:case 36293:return GI;case 36289:case 36303:case 36311:case 36292:return WI}}function $I(n,e){n.uniform1fv(this.addr,e)}function qI(n,e){let t=Js(e,this.size,2);n.uniform2fv(this.addr,t)}function XI(n,e){let t=Js(e,this.size,3);n.uniform3fv(this.addr,t)}function YI(n,e){let t=Js(e,this.size,4);n.uniform4fv(this.addr,t)}function ZI(n,e){let t=Js(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function KI(n,e){let t=Js(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function JI(n,e){let t=Js(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function QI(n,e){n.uniform1iv(this.addr,e)}function e1(n,e){n.uniform2iv(this.addr,e)}function t1(n,e){n.uniform3iv(this.addr,e)}function n1(n,e){n.uniform4iv(this.addr,e)}function i1(n,e){n.uniform1uiv(this.addr,e)}function r1(n,e){n.uniform2uiv(this.addr,e)}function s1(n,e){n.uniform3uiv(this.addr,e)}function o1(n,e){n.uniform4uiv(this.addr,e)}function a1(n,e,t){let i=this.cache,r=e.length,s=Iu(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||O0,s[o])}function l1(n,e,t){let i=this.cache,r=e.length,s=Iu(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||k0,s[o])}function c1(n,e,t){let i=this.cache,r=e.length,s=Iu(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||U0,s[o])}function u1(n,e,t){let i=this.cache,r=e.length,s=Iu(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||L0,s[o])}function d1(n){switch(n){case 5126:return $I;case 35664:return qI;case 35665:return XI;case 35666:return YI;case 35674:return ZI;case 35675:return KI;case 35676:return JI;case 5124:case 35670:return QI;case 35667:case 35671:return e1;case 35668:case 35672:return t1;case 35669:case 35673:return n1;case 5125:return i1;case 36294:return r1;case 36295:return s1;case 36296:return o1;case 35678:case 36198:case 36298:case 36306:case 35682:return a1;case 35679:case 36299:case 36307:return l1;case 35680:case 36300:case 36308:case 36293:return c1;case 36289:case 36303:case 36311:case 36292:return u1}}var Fp=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=jI(t.type)}},Op=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=d1(t.type)}},Lp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},Pp=/(\w+)(\])?(\[|\.)?/g;function S0(n,e){n.seq.push(e),n.map[e.id]=e}function h1(n,e,t){let i=n.name,r=i.length;for(Pp.lastIndex=0;;){let s=Pp.exec(i),o=Pp.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){S0(t,c===void 0?new Fp(a,n,e):new Op(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Lp(a),S0(t,d)),t=d}}}var Ks=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);h1(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function b0(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var f1=37297,p1=0;function m1(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var w0=new ze;function g1(n){Qe._getMatrix(w0,Qe.workingColorSpace,n);let e=`mat3( ${w0.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(n)){case Zo:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function T0(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+m1(n.getShaderSource(e),o)}else return r}function y1(n,e){let t=g1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function _1(n,e){let t;switch(e){case Vv:t="Linear";break;case Hv:t="Reinhard";break;case zv:t="Cineon";break;case Gv:t="ACESFilmic";break;case jv:t="AgX";break;case $v:t="Neutral";break;case Wv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Cu=new N;function v1(){Qe.getLuminanceCoefficients(Cu);let n=Cu.x.toFixed(4),e=Cu.y.toFixed(4),t=Cu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function x1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ra).join(`
`)}function E1(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function M1(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ra(n){return n!==""}function C0(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function D0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var S1=/^[ \t]*#include +<([\w\d./]+)>/gm;function kp(n){return n.replace(S1,w1)}var b1=new Map;function w1(n,e){let t=je[e];if(t===void 0){let i=b1.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return kp(t)}var T1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function A0(n){return n.replace(T1,C1)}function C1(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function I0(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function D1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ip?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===vv?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function A1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Hr:case zr:e="ENVMAP_TYPE_CUBE";break;case ba:e="ENVMAP_TYPE_CUBE_UV";break}return e}function I1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case zr:e="ENVMAP_MODE_REFRACTION";break}return e}function R1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ap:e="ENVMAP_BLENDING_MULTIPLY";break;case Uv:e="ENVMAP_BLENDING_MIX";break;case Bv:e="ENVMAP_BLENDING_ADD";break}return e}function N1(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function P1(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=D1(t),c=A1(t),u=I1(t),d=R1(t),f=N1(t),h=x1(t),g=E1(s),y=r.createProgram(),m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ra).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ra).join(`
`),p.length>0&&(p+=`
`)):(m=[I0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ra).join(`
`),p=[I0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?je.tonemapping_pars_fragment:"",t.toneMapping!==Li?_1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,y1("linearToOutputTexel",t.outputColorSpace),v1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ra).join(`
`)),o=kp(o),o=C0(o,t),o=D0(o,t),a=kp(a),a=C0(a,t),a=D0(a,t),o=A0(o),a=A0(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===vp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=b+m+o,E=b+p+a,A=b0(r,r.VERTEX_SHADER,S),C=b0(r,r.FRAGMENT_SHADER,E);r.attachShader(y,A),r.attachShader(y,C),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function T(I){if(n.debug.checkShaderErrors){let W=r.getProgramInfoLog(y).trim(),H=r.getShaderInfoLog(A).trim(),q=r.getShaderInfoLog(C).trim(),Z=!0,L=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,A,C);else{let U=T0(r,A,"vertex"),F=T0(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+W+`
`+U+`
`+F)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(H===""||q==="")&&(L=!1);L&&(I.diagnostics={runnable:Z,programLog:W,vertexShader:{log:H,prefix:m},fragmentShader:{log:q,prefix:p}})}r.deleteShader(A),r.deleteShader(C),P=new Ks(r,y),M=M1(r,y)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(y,f1)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=p1++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=C,this}var F1=0,Up=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Bp(e),t.set(e,i)),i}},Bp=class{constructor(e){this.id=F1++,this.code=e,this.usedTimes=0}};function O1(n,e,t,i,r,s,o){let a=new Ls,l=new Up,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures,h=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,v,I,W,H){let q=W.fog,Z=H.geometry,L=M.isMeshStandardMaterial?W.environment:null,U=(M.isMeshStandardMaterial?t:e).get(M.envMap||L),F=U&&U.mapping===ba?U.image.height:null,Y=g[M.type];M.precision!==null&&(h=r.getMaxPrecision(M.precision),h!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));let ie=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,fe=ie!==void 0?ie.length:0,Te=0;Z.morphAttributes.position!==void 0&&(Te=1),Z.morphAttributes.normal!==void 0&&(Te=2),Z.morphAttributes.color!==void 0&&(Te=3);let Ye,G,re,xe;if(Y){let ot=li[Y];Ye=ot.vertexShader,G=ot.fragmentShader}else Ye=M.vertexShader,G=M.fragmentShader,l.update(M),re=l.getVertexShaderID(M),xe=l.getFragmentShaderID(M);let ne=n.getRenderTarget(),ge=n.state.buffers.depth.getReversed(),Le=H.isInstancedMesh===!0,we=H.isBatchedMesh===!0,dt=!!M.map,vt=!!M.matcap,it=!!U,D=!!M.aoMap,Wt=!!M.lightMap,rt=!!M.bumpMap,ht=!!M.normalMap,Ee=!!M.displacementMap,et=!!M.emissiveMap,Ce=!!M.metalnessMap,Ge=!!M.roughnessMap,It=M.anisotropy>0,w=M.clearcoat>0,_=M.dispersion>0,B=M.iridescence>0,$=M.sheen>0,K=M.transmission>0,j=It&&!!M.anisotropyMap,Me=w&&!!M.clearcoatMap,ae=w&&!!M.clearcoatNormalMap,ve=w&&!!M.clearcoatRoughnessMap,Se=B&&!!M.iridescenceMap,J=B&&!!M.iridescenceThicknessMap,de=$&&!!M.sheenColorMap,Ne=$&&!!M.sheenRoughnessMap,Ae=!!M.specularMap,se=!!M.specularColorMap,ke=!!M.specularIntensityMap,R=K&&!!M.transmissionMap,le=K&&!!M.thicknessMap,Q=!!M.gradientMap,me=!!M.alphaMap,ee=M.alphaTest>0,X=!!M.alphaHash,ye=!!M.extensions,Be=Li;M.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Be=n.toneMapping);let mt={shaderID:Y,shaderType:M.type,shaderName:M.name,vertexShader:Ye,fragmentShader:G,defines:M.defines,customVertexShaderID:re,customFragmentShaderID:xe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:we,batchingColor:we&&H._colorsTexture!==null,instancing:Le,instancingColor:Le&&H.instanceColor!==null,instancingMorph:Le&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Fi,alphaToCoverage:!!M.alphaToCoverage,map:dt,matcap:vt,envMap:it,envMapMode:it&&U.mapping,envMapCubeUVHeight:F,aoMap:D,lightMap:Wt,bumpMap:rt,normalMap:ht,displacementMap:f&&Ee,emissiveMap:et,normalMapObjectSpace:ht&&M.normalMapType===Zv,normalMapTangentSpace:ht&&M.normalMapType===yp,metalnessMap:Ce,roughnessMap:Ge,anisotropy:It,anisotropyMap:j,clearcoat:w,clearcoatMap:Me,clearcoatNormalMap:ae,clearcoatRoughnessMap:ve,dispersion:_,iridescence:B,iridescenceMap:Se,iridescenceThicknessMap:J,sheen:$,sheenColorMap:de,sheenRoughnessMap:Ne,specularMap:Ae,specularColorMap:se,specularIntensityMap:ke,transmission:K,transmissionMap:R,thicknessMap:le,gradientMap:Q,opaque:M.transparent===!1&&M.blending===Or&&M.alphaToCoverage===!1,alphaMap:me,alphaTest:ee,alphaHash:X,combine:M.combine,mapUv:dt&&y(M.map.channel),aoMapUv:D&&y(M.aoMap.channel),lightMapUv:Wt&&y(M.lightMap.channel),bumpMapUv:rt&&y(M.bumpMap.channel),normalMapUv:ht&&y(M.normalMap.channel),displacementMapUv:Ee&&y(M.displacementMap.channel),emissiveMapUv:et&&y(M.emissiveMap.channel),metalnessMapUv:Ce&&y(M.metalnessMap.channel),roughnessMapUv:Ge&&y(M.roughnessMap.channel),anisotropyMapUv:j&&y(M.anisotropyMap.channel),clearcoatMapUv:Me&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:ae&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:J&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:de&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&y(M.sheenRoughnessMap.channel),specularMapUv:Ae&&y(M.specularMap.channel),specularColorMapUv:se&&y(M.specularColorMap.channel),specularIntensityMapUv:ke&&y(M.specularIntensityMap.channel),transmissionMapUv:R&&y(M.transmissionMap.channel),thicknessMapUv:le&&y(M.thicknessMap.channel),alphaMapUv:me&&y(M.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(ht||It),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Z.attributes.uv&&(dt||me),fog:!!q,useFog:M.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ge,skinning:H.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Te,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Be,decodeVideoTexture:dt&&M.map.isVideoTexture===!0&&Qe.getTransfer(M.map.colorSpace)===ct,decodeVideoTextureEmissive:et&&M.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(M.emissiveMap.colorSpace)===ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ai,flipSided:M.side===Yt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ye&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&M.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return mt.vertexUv1s=c.has(1),mt.vertexUv2s=c.has(2),mt.vertexUv3s=c.has(3),c.clear(),mt}function p(M){let v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(let I in M.defines)v.push(I),v.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(b(v,M),S(v,M),v.push(n.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function b(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function S(M,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),M.push(a.mask)}function E(M){let v=g[M.type],I;if(v){let W=li[v];I=c0.clone(W.uniforms)}else I=M.uniforms;return I}function A(M,v){let I;for(let W=0,H=u.length;W<H;W++){let q=u[W];if(q.cacheKey===v){I=q,++I.usedTimes;break}}return I===void 0&&(I=new P1(n,v,M,s),u.push(I)),I}function C(M){if(--M.usedTimes===0){let v=u.indexOf(M);u[v]=u[u.length-1],u.pop(),M.destroy()}}function T(M){l.remove(M)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:A,releaseProgram:C,releaseShaderCache:T,programs:u,dispose:P}}function L1(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function k1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function R0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function N0(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,h,g,y,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:y,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=y,p.group=m),e++,p}function a(d,f,h,g,y,m){let p=o(d,f,h,g,y,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):t.push(p)}function l(d,f,h,g,y,m){let p=o(d,f,h,g,y,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function c(d,f){t.length>1&&t.sort(d||k1),i.length>1&&i.sort(f||R0),r.length>1&&r.sort(f||R0)}function u(){for(let d=e,f=n.length;d<f;d++){let h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function U1(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new N0,n.set(i,[o])):r>=s.length?(o=new N0,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function B1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new We};break;case"SpotLight":t={position:new N,direction:new N,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function V1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var H1=0;function z1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function G1(n){let e=new B1,t=V1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);let r=new N,s=new _t,o=new _t;function a(c){let u=0,d=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let h=0,g=0,y=0,m=0,p=0,b=0,S=0,E=0,A=0,C=0,T=0;c.sort(z1);for(let M=0,v=c.length;M<v;M++){let I=c[M],W=I.color,H=I.intensity,q=I.distance,Z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=W.r*H,d+=W.g*H,f+=W.b*H;else if(I.isLightProbe){for(let L=0;L<9;L++)i.probe[L].addScaledVector(I.sh.coefficients[L],H);T++}else if(I.isDirectionalLight){let L=e.get(I);if(L.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let U=I.shadow,F=t.get(I);F.shadowIntensity=U.intensity,F.shadowBias=U.bias,F.shadowNormalBias=U.normalBias,F.shadowRadius=U.radius,F.shadowMapSize=U.mapSize,i.directionalShadow[h]=F,i.directionalShadowMap[h]=Z,i.directionalShadowMatrix[h]=I.shadow.matrix,b++}i.directional[h]=L,h++}else if(I.isSpotLight){let L=e.get(I);L.position.setFromMatrixPosition(I.matrixWorld),L.color.copy(W).multiplyScalar(H),L.distance=q,L.coneCos=Math.cos(I.angle),L.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),L.decay=I.decay,i.spot[y]=L;let U=I.shadow;if(I.map&&(i.spotLightMap[A]=I.map,A++,U.updateMatrices(I),I.castShadow&&C++),i.spotLightMatrix[y]=U.matrix,I.castShadow){let F=t.get(I);F.shadowIntensity=U.intensity,F.shadowBias=U.bias,F.shadowNormalBias=U.normalBias,F.shadowRadius=U.radius,F.shadowMapSize=U.mapSize,i.spotShadow[y]=F,i.spotShadowMap[y]=Z,E++}y++}else if(I.isRectAreaLight){let L=e.get(I);L.color.copy(W).multiplyScalar(H),L.halfWidth.set(I.width*.5,0,0),L.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=L,m++}else if(I.isPointLight){let L=e.get(I);if(L.color.copy(I.color).multiplyScalar(I.intensity),L.distance=I.distance,L.decay=I.decay,I.castShadow){let U=I.shadow,F=t.get(I);F.shadowIntensity=U.intensity,F.shadowBias=U.bias,F.shadowNormalBias=U.normalBias,F.shadowRadius=U.radius,F.shadowMapSize=U.mapSize,F.shadowCameraNear=U.camera.near,F.shadowCameraFar=U.camera.far,i.pointShadow[g]=F,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=I.shadow.matrix,S++}i.point[g]=L,g++}else if(I.isHemisphereLight){let L=e.get(I);L.skyColor.copy(I.color).multiplyScalar(H),L.groundColor.copy(I.groundColor).multiplyScalar(H),i.hemi[p]=L,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let P=i.hash;(P.directionalLength!==h||P.pointLength!==g||P.spotLength!==y||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==b||P.numPointShadows!==S||P.numSpotShadows!==E||P.numSpotMaps!==A||P.numLightProbes!==T)&&(i.directional.length=h,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=E+A-C,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=T,P.directionalLength=h,P.pointLength=g,P.spotLength=y,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=b,P.numPointShadows=S,P.numSpotShadows=E,P.numSpotMaps=A,P.numLightProbes=T,i.version=H1++)}function l(c,u){let d=0,f=0,h=0,g=0,y=0,m=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){let S=c[p];if(S.isDirectionalLight){let E=i.directional[d];E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),d++}else if(S.isSpotLight){let E=i.spot[h];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),h++}else if(S.isRectAreaLight){let E=i.rectArea[g];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let E=i.point[f];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let E=i.hemi[y];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function P0(n){let e=new G1(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function W1(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new P0(n),e.set(r,[a])):s>=o.length?(a=new P0(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var j1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function q1(n,e,t){let i=new Bs,r=new pe,s=new pe,o=new Et,a=new wc({depthPacking:Yv}),l=new Tc,c={},u=t.maxTextureSize,d={[Pi]:Yt,[Yt]:Pi,[ai]:ai},f=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:j1,fragmentShader:$1}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let g=new Cn;g.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Nt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ip;let p=this.type;this.render=function(C,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let M=n.getRenderTarget(),v=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),W=n.state;W.setBlending(Oi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let H=p!==oi&&this.type===oi,q=p===oi&&this.type!==oi;for(let Z=0,L=C.length;Z<L;Z++){let U=C[Z],F=U.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);let Y=F.getFrameExtents();if(r.multiply(Y),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,F.mapSize.y=s.y)),F.map===null||H===!0||q===!0){let fe=this.type!==oi?{minFilter:rn,magFilter:rn}:{};F.map!==null&&F.map.dispose(),F.map=new ri(r.x,r.y,fe),F.map.texture.name=U.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();let ie=F.getViewportCount();for(let fe=0;fe<ie;fe++){let Te=F.getViewport(fe);o.set(s.x*Te.x,s.y*Te.y,s.x*Te.z,s.y*Te.w),W.viewport(o),F.updateMatrices(U,fe),i=F.getFrustum(),E(T,P,F.camera,U,this.type)}F.isPointLightShadow!==!0&&this.type===oi&&b(F,P),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,v,I)};function b(C,T){let P=e.update(y);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,h.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ri(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(T,null,P,f,y,null),h.uniforms.shadow_pass.value=C.mapPass.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(T,null,P,h,y,null)}function S(C,T,P,M){let v=null,I=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)v=I;else if(v=P.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let W=v.uuid,H=T.uuid,q=c[W];q===void 0&&(q={},c[W]=q);let Z=q[H];Z===void 0&&(Z=v.clone(),q[H]=Z,T.addEventListener("dispose",A)),v=Z}if(v.visible=T.visible,v.wireframe=T.wireframe,M===oi?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:d[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let W=n.properties.get(v);W.light=P}return v}function E(C,T,P,M,v){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&v===oi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);let H=e.update(C),q=C.material;if(Array.isArray(q)){let Z=H.groups;for(let L=0,U=Z.length;L<U;L++){let F=Z[L],Y=q[F.materialIndex];if(Y&&Y.visible){let ie=S(C,Y,M,v);C.onBeforeShadow(n,C,T,P,H,ie,F),n.renderBufferDirect(P,null,H,ie,C,F),C.onAfterShadow(n,C,T,P,H,ie,F)}}}else if(q.visible){let Z=S(C,q,M,v);C.onBeforeShadow(n,C,T,P,H,Z,null),n.renderBufferDirect(P,null,H,Z,C,null),C.onAfterShadow(n,C,T,P,H,Z,null)}}let W=C.children;for(let H=0,q=W.length;H<q;H++)E(W[H],T,P,M,v)}function A(C){C.target.removeEventListener("dispose",A);for(let P in c){let M=c[P],v=C.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}var X1={[kc]:Uc,[Bc]:zc,[Vc]:Gc,[Lr]:Hc,[Uc]:kc,[zc]:Bc,[Gc]:Vc,[Hc]:Lr};function Y1(n,e){function t(){let R=!1,le=new Et,Q=null,me=new Et(0,0,0,0);return{setMask:function(ee){Q!==ee&&!R&&(n.colorMask(ee,ee,ee,ee),Q=ee)},setLocked:function(ee){R=ee},setClear:function(ee,X,ye,Be,mt){mt===!0&&(ee*=Be,X*=Be,ye*=Be),le.set(ee,X,ye,Be),me.equals(le)===!1&&(n.clearColor(ee,X,ye,Be),me.copy(le))},reset:function(){R=!1,Q=null,me.set(-1,0,0,0)}}}function i(){let R=!1,le=!1,Q=null,me=null,ee=null;return{setReversed:function(X){if(le!==X){let ye=e.get("EXT_clip_control");X?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),le=X;let Be=ee;ee=null,this.setClear(Be)}},getReversed:function(){return le},setTest:function(X){X?ne(n.DEPTH_TEST):ge(n.DEPTH_TEST)},setMask:function(X){Q!==X&&!R&&(n.depthMask(X),Q=X)},setFunc:function(X){if(le&&(X=X1[X]),me!==X){switch(X){case kc:n.depthFunc(n.NEVER);break;case Uc:n.depthFunc(n.ALWAYS);break;case Bc:n.depthFunc(n.LESS);break;case Lr:n.depthFunc(n.LEQUAL);break;case Vc:n.depthFunc(n.EQUAL);break;case Hc:n.depthFunc(n.GEQUAL);break;case zc:n.depthFunc(n.GREATER);break;case Gc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=X}},setLocked:function(X){R=X},setClear:function(X){ee!==X&&(le&&(X=1-X),n.clearDepth(X),ee=X)},reset:function(){R=!1,Q=null,me=null,ee=null,le=!1}}}function r(){let R=!1,le=null,Q=null,me=null,ee=null,X=null,ye=null,Be=null,mt=null;return{setTest:function(ot){R||(ot?ne(n.STENCIL_TEST):ge(n.STENCIL_TEST))},setMask:function(ot){le!==ot&&!R&&(n.stencilMask(ot),le=ot)},setFunc:function(ot,Nn,di){(Q!==ot||me!==Nn||ee!==di)&&(n.stencilFunc(ot,Nn,di),Q=ot,me=Nn,ee=di)},setOp:function(ot,Nn,di){(X!==ot||ye!==Nn||Be!==di)&&(n.stencilOp(ot,Nn,di),X=ot,ye=Nn,Be=di)},setLocked:function(ot){R=ot},setClear:function(ot){mt!==ot&&(n.clearStencil(ot),mt=ot)},reset:function(){R=!1,le=null,Q=null,me=null,ee=null,X=null,ye=null,Be=null,mt=null}}}let s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap,u={},d={},f=new WeakMap,h=[],g=null,y=!1,m=null,p=null,b=null,S=null,E=null,A=null,C=null,T=new We(0,0,0),P=0,M=!1,v=null,I=null,W=null,H=null,q=null,Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),L=!1,U=0,F=n.getParameter(n.VERSION);F.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(F)[1]),L=U>=1):F.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),L=U>=2);let Y=null,ie={},fe=n.getParameter(n.SCISSOR_BOX),Te=n.getParameter(n.VIEWPORT),Ye=new Et().fromArray(fe),G=new Et().fromArray(Te);function re(R,le,Q,me){let ee=new Uint8Array(4),X=n.createTexture();n.bindTexture(R,X),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ye=0;ye<Q;ye++)R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,ee):n.texImage2D(le+ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ee);return X}let xe={};xe[n.TEXTURE_2D]=re(n.TEXTURE_2D,n.TEXTURE_2D,1),xe[n.TEXTURE_CUBE_MAP]=re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[n.TEXTURE_2D_ARRAY]=re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xe[n.TEXTURE_3D]=re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(n.DEPTH_TEST),o.setFunc(Lr),rt(!1),ht(np),ne(n.CULL_FACE),D(Oi);function ne(R){u[R]!==!0&&(n.enable(R),u[R]=!0)}function ge(R){u[R]!==!1&&(n.disable(R),u[R]=!1)}function Le(R,le){return d[R]!==le?(n.bindFramebuffer(R,le),d[R]=le,R===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=le),R===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=le),!0):!1}function we(R,le){let Q=h,me=!1;if(R){Q=f.get(le),Q===void 0&&(Q=[],f.set(le,Q));let ee=R.textures;if(Q.length!==ee.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let X=0,ye=ee.length;X<ye;X++)Q[X]=n.COLOR_ATTACHMENT0+X;Q.length=ee.length,me=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,me=!0);me&&n.drawBuffers(Q)}function dt(R){return g!==R?(n.useProgram(R),g=R,!0):!1}let vt={[nr]:n.FUNC_ADD,[Ev]:n.FUNC_SUBTRACT,[Mv]:n.FUNC_REVERSE_SUBTRACT};vt[Sv]=n.MIN,vt[bv]=n.MAX;let it={[wv]:n.ZERO,[Tv]:n.ONE,[Cv]:n.SRC_COLOR,[lc]:n.SRC_ALPHA,[Pv]:n.SRC_ALPHA_SATURATE,[Rv]:n.DST_COLOR,[Av]:n.DST_ALPHA,[Dv]:n.ONE_MINUS_SRC_COLOR,[cc]:n.ONE_MINUS_SRC_ALPHA,[Nv]:n.ONE_MINUS_DST_COLOR,[Iv]:n.ONE_MINUS_DST_ALPHA,[Fv]:n.CONSTANT_COLOR,[Ov]:n.ONE_MINUS_CONSTANT_COLOR,[Lv]:n.CONSTANT_ALPHA,[kv]:n.ONE_MINUS_CONSTANT_ALPHA};function D(R,le,Q,me,ee,X,ye,Be,mt,ot){if(R===Oi){y===!0&&(ge(n.BLEND),y=!1);return}if(y===!1&&(ne(n.BLEND),y=!0),R!==xv){if(R!==m||ot!==M){if((p!==nr||E!==nr)&&(n.blendEquation(n.FUNC_ADD),p=nr,E=nr),ot)switch(R){case Or:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rp:n.blendFunc(n.ONE,n.ONE);break;case sp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case op:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Or:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rp:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case sp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case op:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}b=null,S=null,A=null,C=null,T.set(0,0,0),P=0,m=R,M=ot}return}ee=ee||le,X=X||Q,ye=ye||me,(le!==p||ee!==E)&&(n.blendEquationSeparate(vt[le],vt[ee]),p=le,E=ee),(Q!==b||me!==S||X!==A||ye!==C)&&(n.blendFuncSeparate(it[Q],it[me],it[X],it[ye]),b=Q,S=me,A=X,C=ye),(Be.equals(T)===!1||mt!==P)&&(n.blendColor(Be.r,Be.g,Be.b,mt),T.copy(Be),P=mt),m=R,M=!1}function Wt(R,le){R.side===ai?ge(n.CULL_FACE):ne(n.CULL_FACE);let Q=R.side===Yt;le&&(Q=!Q),rt(Q),R.blending===Or&&R.transparent===!1?D(Oi):D(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),s.setMask(R.colorWrite);let me=R.stencilWrite;a.setTest(me),me&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),et(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function rt(R){v!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),v=R)}function ht(R){R!==yv?(ne(n.CULL_FACE),R!==I&&(R===np?n.cullFace(n.BACK):R===_v?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ge(n.CULL_FACE),I=R}function Ee(R){R!==W&&(L&&n.lineWidth(R),W=R)}function et(R,le,Q){R?(ne(n.POLYGON_OFFSET_FILL),(H!==le||q!==Q)&&(n.polygonOffset(le,Q),H=le,q=Q)):ge(n.POLYGON_OFFSET_FILL)}function Ce(R){R?ne(n.SCISSOR_TEST):ge(n.SCISSOR_TEST)}function Ge(R){R===void 0&&(R=n.TEXTURE0+Z-1),Y!==R&&(n.activeTexture(R),Y=R)}function It(R,le,Q){Q===void 0&&(Y===null?Q=n.TEXTURE0+Z-1:Q=Y);let me=ie[Q];me===void 0&&(me={type:void 0,texture:void 0},ie[Q]=me),(me.type!==R||me.texture!==le)&&(Y!==Q&&(n.activeTexture(Q),Y=Q),n.bindTexture(R,le||xe[R]),me.type=R,me.texture=le)}function w(){let R=ie[Y];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function B(){try{n.compressedTexImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function $(){try{n.texSubImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function K(){try{n.texSubImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Me(){try{n.compressedTexSubImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ae(){try{n.texStorage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ve(){try{n.texStorage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Se(){try{n.texImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function J(){try{n.texImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function de(R){Ye.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),Ye.copy(R))}function Ne(R){G.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),G.copy(R))}function Ae(R,le){let Q=c.get(le);Q===void 0&&(Q=new WeakMap,c.set(le,Q));let me=Q.get(R);me===void 0&&(me=n.getUniformBlockIndex(le,R.name),Q.set(R,me))}function se(R,le){let me=c.get(le).get(R);l.get(le)!==me&&(n.uniformBlockBinding(le,me,R.__bindingPointIndex),l.set(le,me))}function ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Y=null,ie={},d={},f=new WeakMap,h=[],g=null,y=!1,m=null,p=null,b=null,S=null,E=null,A=null,C=null,T=new We(0,0,0),P=0,M=!1,v=null,I=null,W=null,H=null,q=null,Ye.set(0,0,n.canvas.width,n.canvas.height),G.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ne,disable:ge,bindFramebuffer:Le,drawBuffers:we,useProgram:dt,setBlending:D,setMaterial:Wt,setFlipSided:rt,setCullFace:ht,setLineWidth:Ee,setPolygonOffset:et,setScissorTest:Ce,activeTexture:Ge,bindTexture:It,unbindTexture:w,compressedTexImage2D:_,compressedTexImage3D:B,texImage2D:Se,texImage3D:J,updateUBOMapping:Ae,uniformBlockBinding:se,texStorage2D:ae,texStorage3D:ve,texSubImage2D:$,texSubImage3D:K,compressedTexSubImage2D:j,compressedTexSubImage3D:Me,scissor:de,viewport:Ne,reset:ke}}function Z1(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pe,u=new WeakMap,d,f=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,_){return h?new OffscreenCanvas(w,_):Jo("canvas")}function y(w,_,B){let $=1,K=It(w);if((K.width>B||K.height>B)&&($=B/Math.max(K.width,K.height)),$<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let j=Math.floor($*K.width),Me=Math.floor($*K.height);d===void 0&&(d=g(j,Me));let ae=_?g(j,Me):d;return ae.width=j,ae.height=Me,ae.getContext("2d").drawImage(w,0,0,j,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+j+"x"+Me+")."),ae}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){n.generateMipmap(w)}function b(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(w,_,B,$,K=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let j=_;if(_===n.RED&&(B===n.FLOAT&&(j=n.R32F),B===n.HALF_FLOAT&&(j=n.R16F),B===n.UNSIGNED_BYTE&&(j=n.R8)),_===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(j=n.R8UI),B===n.UNSIGNED_SHORT&&(j=n.R16UI),B===n.UNSIGNED_INT&&(j=n.R32UI),B===n.BYTE&&(j=n.R8I),B===n.SHORT&&(j=n.R16I),B===n.INT&&(j=n.R32I)),_===n.RG&&(B===n.FLOAT&&(j=n.RG32F),B===n.HALF_FLOAT&&(j=n.RG16F),B===n.UNSIGNED_BYTE&&(j=n.RG8)),_===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(j=n.RG8UI),B===n.UNSIGNED_SHORT&&(j=n.RG16UI),B===n.UNSIGNED_INT&&(j=n.RG32UI),B===n.BYTE&&(j=n.RG8I),B===n.SHORT&&(j=n.RG16I),B===n.INT&&(j=n.RG32I)),_===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(j=n.RGB8UI),B===n.UNSIGNED_SHORT&&(j=n.RGB16UI),B===n.UNSIGNED_INT&&(j=n.RGB32UI),B===n.BYTE&&(j=n.RGB8I),B===n.SHORT&&(j=n.RGB16I),B===n.INT&&(j=n.RGB32I)),_===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),B===n.UNSIGNED_INT&&(j=n.RGBA32UI),B===n.BYTE&&(j=n.RGBA8I),B===n.SHORT&&(j=n.RGBA16I),B===n.INT&&(j=n.RGBA32I)),_===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),_===n.RGBA){let Me=K?Zo:Qe.getTransfer($);B===n.FLOAT&&(j=n.RGBA32F),B===n.HALF_FLOAT&&(j=n.RGBA16F),B===n.UNSIGNED_BYTE&&(j=Me===ct?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function E(w,_){let B;return w?_===null||_===dr||_===$s?B=n.DEPTH24_STENCIL8:_===An?B=n.DEPTH32F_STENCIL8:_===js&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===dr||_===$s?B=n.DEPTH_COMPONENT24:_===An?B=n.DEPTH_COMPONENT32F:_===js&&(B=n.DEPTH_COMPONENT16),B}function A(w,_){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==rn&&w.minFilter!==gn?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function C(w){let _=w.target;_.removeEventListener("dispose",C),P(_),_.isVideoTexture&&u.delete(_)}function T(w){let _=w.target;_.removeEventListener("dispose",T),v(_)}function P(w){let _=i.get(w);if(_.__webglInit===void 0)return;let B=w.source,$=f.get(B);if($){let K=$[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&M(w),Object.keys($).length===0&&f.delete(B)}i.remove(w)}function M(w){let _=i.get(w);n.deleteTexture(_.__webglTexture);let B=w.source,$=f.get(B);delete $[_.__cacheKey],o.memory.textures--}function v(w){let _=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(_.__webglFramebuffer[$]))for(let K=0;K<_.__webglFramebuffer[$].length;K++)n.deleteFramebuffer(_.__webglFramebuffer[$][K]);else n.deleteFramebuffer(_.__webglFramebuffer[$]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[$])}else{if(Array.isArray(_.__webglFramebuffer))for(let $=0;$<_.__webglFramebuffer.length;$++)n.deleteFramebuffer(_.__webglFramebuffer[$]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let $=0;$<_.__webglColorRenderbuffer.length;$++)_.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[$]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let B=w.textures;for(let $=0,K=B.length;$<K;$++){let j=i.get(B[$]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(B[$])}i.remove(w)}let I=0;function W(){I=0}function H(){let w=I;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),I+=1,w}function q(w){let _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function Z(w,_){let B=i.get(w);if(w.isVideoTexture&&Ce(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){let $=w.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(B,w,_);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+_)}function L(w,_){let B=i.get(w);if(w.version>0&&B.__version!==w.version){xe(B,w,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+_)}function U(w,_){let B=i.get(w);if(w.version>0&&B.__version!==w.version){xe(B,w,_);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+_)}function F(w,_){let B=i.get(w);if(w.version>0&&B.__version!==w.version){ne(B,w,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+_)}let Y={[uc]:n.REPEAT,[Wn]:n.CLAMP_TO_EDGE,[dc]:n.MIRRORED_REPEAT},ie={[rn]:n.NEAREST,[qv]:n.NEAREST_MIPMAP_NEAREST,[wa]:n.NEAREST_MIPMAP_LINEAR,[gn]:n.LINEAR,[jc]:n.LINEAR_MIPMAP_NEAREST,[ur]:n.LINEAR_MIPMAP_LINEAR},fe={[Kv]:n.NEVER,[i0]:n.ALWAYS,[Jv]:n.LESS,[_p]:n.LEQUAL,[Qv]:n.EQUAL,[n0]:n.GEQUAL,[e0]:n.GREATER,[t0]:n.NOTEQUAL};function Te(w,_){if(_.type===An&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===gn||_.magFilter===jc||_.magFilter===wa||_.magFilter===ur||_.minFilter===gn||_.minFilter===jc||_.minFilter===wa||_.minFilter===ur)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,Y[_.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,Y[_.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,Y[_.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,ie[_.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,ie[_.minFilter]),_.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,fe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===rn||_.minFilter!==wa&&_.minFilter!==ur||_.type===An&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Ye(w,_){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",C));let $=_.source,K=f.get($);K===void 0&&(K={},f.set($,K));let j=q(_);if(j!==w.__cacheKey){K[j]===void 0&&(K[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),K[j].usedTimes++;let Me=K[w.__cacheKey];Me!==void 0&&(K[w.__cacheKey].usedTimes--,Me.usedTimes===0&&M(_)),w.__cacheKey=j,w.__webglTexture=K[j].texture}return B}function G(w,_,B){return Math.floor(Math.floor(w/B)/_)}function re(w,_,B,$){let j=w.updateRanges;if(j.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,B,$,_.data);else{j.sort((J,de)=>J.start-de.start);let Me=0;for(let J=1;J<j.length;J++){let de=j[Me],Ne=j[J],Ae=de.start+de.count,se=G(Ne.start,_.width,4),ke=G(de.start,_.width,4);Ne.start<=Ae+1&&se===ke&&G(Ne.start+Ne.count-1,_.width,4)===se?de.count=Math.max(de.count,Ne.start+Ne.count-de.start):(++Me,j[Me]=Ne)}j.length=Me+1;let ae=n.getParameter(n.UNPACK_ROW_LENGTH),ve=n.getParameter(n.UNPACK_SKIP_PIXELS),Se=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let J=0,de=j.length;J<de;J++){let Ne=j[J],Ae=Math.floor(Ne.start/4),se=Math.ceil(Ne.count/4),ke=Ae%_.width,R=Math.floor(Ae/_.width),le=se,Q=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,R),t.texSubImage2D(n.TEXTURE_2D,0,ke,R,le,Q,B,$,_.data)}w.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ae),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ve),n.pixelStorei(n.UNPACK_SKIP_ROWS,Se)}}function xe(w,_,B){let $=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&($=n.TEXTURE_3D);let K=Ye(w,_),j=_.source;t.bindTexture($,w.__webglTexture,n.TEXTURE0+B);let Me=i.get(j);if(j.version!==Me.__version||K===!0){t.activeTexture(n.TEXTURE0+B);let ae=Qe.getPrimaries(Qe.workingColorSpace),ve=_.colorSpace===ki?null:Qe.getPrimaries(_.colorSpace),Se=_.colorSpace===ki||ae===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let J=y(_.image,!1,r.maxTextureSize);J=Ge(_,J);let de=s.convert(_.format,_.colorSpace),Ne=s.convert(_.type),Ae=S(_.internalFormat,de,Ne,_.colorSpace,_.isVideoTexture);Te($,_);let se,ke=_.mipmaps,R=_.isVideoTexture!==!0,le=Me.__version===void 0||K===!0,Q=j.dataReady,me=A(_,J);if(_.isDepthTexture)Ae=E(_.format===qs,_.type),le&&(R?t.texStorage2D(n.TEXTURE_2D,1,Ae,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,Ae,J.width,J.height,0,de,Ne,null));else if(_.isDataTexture)if(ke.length>0){R&&le&&t.texStorage2D(n.TEXTURE_2D,me,Ae,ke[0].width,ke[0].height);for(let ee=0,X=ke.length;ee<X;ee++)se=ke[ee],R?Q&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,se.width,se.height,de,Ne,se.data):t.texImage2D(n.TEXTURE_2D,ee,Ae,se.width,se.height,0,de,Ne,se.data);_.generateMipmaps=!1}else R?(le&&t.texStorage2D(n.TEXTURE_2D,me,Ae,J.width,J.height),Q&&re(_,J,de,Ne)):t.texImage2D(n.TEXTURE_2D,0,Ae,J.width,J.height,0,de,Ne,J.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){R&&le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Ae,ke[0].width,ke[0].height,J.depth);for(let ee=0,X=ke.length;ee<X;ee++)if(se=ke[ee],_.format!==Zt)if(de!==null)if(R){if(Q)if(_.layerUpdates.size>0){let ye=Cp(se.width,se.height,_.format,_.type);for(let Be of _.layerUpdates){let mt=se.data.subarray(Be*ye/se.data.BYTES_PER_ELEMENT,(Be+1)*ye/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,Be,se.width,se.height,1,de,mt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,se.width,se.height,J.depth,de,se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,Ae,se.width,se.height,J.depth,0,se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else R?Q&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,se.width,se.height,J.depth,de,Ne,se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,Ae,se.width,se.height,J.depth,0,de,Ne,se.data)}else{R&&le&&t.texStorage2D(n.TEXTURE_2D,me,Ae,ke[0].width,ke[0].height);for(let ee=0,X=ke.length;ee<X;ee++)se=ke[ee],_.format!==Zt?de!==null?R?Q&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,se.width,se.height,de,se.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,Ae,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):R?Q&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,se.width,se.height,de,Ne,se.data):t.texImage2D(n.TEXTURE_2D,ee,Ae,se.width,se.height,0,de,Ne,se.data)}else if(_.isDataArrayTexture)if(R){if(le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Ae,J.width,J.height,J.depth),Q)if(_.layerUpdates.size>0){let ee=Cp(J.width,J.height,_.format,_.type);for(let X of _.layerUpdates){let ye=J.data.subarray(X*ee/J.data.BYTES_PER_ELEMENT,(X+1)*ee/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,X,J.width,J.height,1,de,Ne,ye)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,de,Ne,J.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,J.width,J.height,J.depth,0,de,Ne,J.data);else if(_.isData3DTexture)R?(le&&t.texStorage3D(n.TEXTURE_3D,me,Ae,J.width,J.height,J.depth),Q&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,de,Ne,J.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,J.width,J.height,J.depth,0,de,Ne,J.data);else if(_.isFramebufferTexture){if(le)if(R)t.texStorage2D(n.TEXTURE_2D,me,Ae,J.width,J.height);else{let ee=J.width,X=J.height;for(let ye=0;ye<me;ye++)t.texImage2D(n.TEXTURE_2D,ye,Ae,ee,X,0,de,Ne,null),ee>>=1,X>>=1}}else if(ke.length>0){if(R&&le){let ee=It(ke[0]);t.texStorage2D(n.TEXTURE_2D,me,Ae,ee.width,ee.height)}for(let ee=0,X=ke.length;ee<X;ee++)se=ke[ee],R?Q&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,de,Ne,se):t.texImage2D(n.TEXTURE_2D,ee,Ae,de,Ne,se);_.generateMipmaps=!1}else if(R){if(le){let ee=It(J);t.texStorage2D(n.TEXTURE_2D,me,Ae,ee.width,ee.height)}Q&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,Ne,J)}else t.texImage2D(n.TEXTURE_2D,0,Ae,de,Ne,J);m(_)&&p($),Me.__version=j.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function ne(w,_,B){if(_.image.length!==6)return;let $=Ye(w,_),K=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+B);let j=i.get(K);if(K.version!==j.__version||$===!0){t.activeTexture(n.TEXTURE0+B);let Me=Qe.getPrimaries(Qe.workingColorSpace),ae=_.colorSpace===ki?null:Qe.getPrimaries(_.colorSpace),ve=_.colorSpace===ki||Me===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let Se=_.isCompressedTexture||_.image[0].isCompressedTexture,J=_.image[0]&&_.image[0].isDataTexture,de=[];for(let X=0;X<6;X++)!Se&&!J?de[X]=y(_.image[X],!0,r.maxCubemapSize):de[X]=J?_.image[X].image:_.image[X],de[X]=Ge(_,de[X]);let Ne=de[0],Ae=s.convert(_.format,_.colorSpace),se=s.convert(_.type),ke=S(_.internalFormat,Ae,se,_.colorSpace),R=_.isVideoTexture!==!0,le=j.__version===void 0||$===!0,Q=K.dataReady,me=A(_,Ne);Te(n.TEXTURE_CUBE_MAP,_);let ee;if(Se){R&&le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,ke,Ne.width,Ne.height);for(let X=0;X<6;X++){ee=de[X].mipmaps;for(let ye=0;ye<ee.length;ye++){let Be=ee[ye];_.format!==Zt?Ae!==null?R?Q&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ye,0,0,Be.width,Be.height,Ae,Be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ye,ke,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ye,0,0,Be.width,Be.height,Ae,se,Be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ye,ke,Be.width,Be.height,0,Ae,se,Be.data)}}}else{if(ee=_.mipmaps,R&&le){ee.length>0&&me++;let X=It(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,me,ke,X.width,X.height)}for(let X=0;X<6;X++)if(J){R?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,de[X].width,de[X].height,Ae,se,de[X].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,ke,de[X].width,de[X].height,0,Ae,se,de[X].data);for(let ye=0;ye<ee.length;ye++){let mt=ee[ye].image[X].image;R?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ye+1,0,0,mt.width,mt.height,Ae,se,mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ye+1,ke,mt.width,mt.height,0,Ae,se,mt.data)}}else{R?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Ae,se,de[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,ke,Ae,se,de[X]);for(let ye=0;ye<ee.length;ye++){let Be=ee[ye];R?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ye+1,0,0,Ae,se,Be.image[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ye+1,ke,Ae,se,Be.image[X])}}}m(_)&&p(n.TEXTURE_CUBE_MAP),j.__version=K.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function ge(w,_,B,$,K,j){let Me=s.convert(B.format,B.colorSpace),ae=s.convert(B.type),ve=S(B.internalFormat,Me,ae,B.colorSpace),Se=i.get(_),J=i.get(B);if(J.__renderTarget=_,!Se.__hasExternalTextures){let de=Math.max(1,_.width>>j),Ne=Math.max(1,_.height>>j);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,j,ve,de,Ne,_.depth,0,Me,ae,null):t.texImage2D(K,j,ve,de,Ne,0,Me,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),et(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,K,J.__webglTexture,0,Ee(_)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,K,J.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(w,_,B){if(n.bindRenderbuffer(n.RENDERBUFFER,w),_.depthBuffer){let $=_.depthTexture,K=$&&$.isDepthTexture?$.type:null,j=E(_.stencilBuffer,K),Me=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=Ee(_);et(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,j,_.width,_.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,j,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,j,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,w)}else{let $=_.textures;for(let K=0;K<$.length;K++){let j=$[K],Me=s.convert(j.format,j.colorSpace),ae=s.convert(j.type),ve=S(j.internalFormat,Me,ae,j.colorSpace),Se=Ee(_);B&&et(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,ve,_.width,_.height):et(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se,ve,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ve,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(w,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=i.get(_.depthTexture);$.__renderTarget=_,(!$.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Z(_.depthTexture,0);let K=$.__webglTexture,j=Ee(_);if(_.depthTexture.format===Ns)et(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(_.depthTexture.format===qs)et(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function dt(w){let _=i.get(w),B=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){let $=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),$){let K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,$.removeEventListener("dispose",K)};$.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=$}if(w.depthTexture&&!_.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");let $=w.texture.mipmaps;$&&$.length>0?we(_.__webglFramebuffer[0],w):we(_.__webglFramebuffer,w)}else if(B){_.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[$]),_.__webglDepthbuffer[$]===void 0)_.__webglDepthbuffer[$]=n.createRenderbuffer(),Le(_.__webglDepthbuffer[$],w,!1);else{let K=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=_.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,j)}}else{let $=w.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Le(_.__webglDepthbuffer,w,!1);else{let K=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,j)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function vt(w,_,B){let $=i.get(w);_!==void 0&&ge($.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&dt(w)}function it(w){let _=w.texture,B=i.get(w),$=i.get(_);w.addEventListener("dispose",T);let K=w.textures,j=w.isWebGLCubeRenderTarget===!0,Me=K.length>1;if(Me||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=_.version,o.memory.textures++),j){B.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[ae]=[];for(let ve=0;ve<_.mipmaps.length;ve++)B.__webglFramebuffer[ae][ve]=n.createFramebuffer()}else B.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let ae=0;ae<_.mipmaps.length;ae++)B.__webglFramebuffer[ae]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Me)for(let ae=0,ve=K.length;ae<ve;ae++){let Se=i.get(K[ae]);Se.__webglTexture===void 0&&(Se.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&et(w)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ae=0;ae<K.length;ae++){let ve=K[ae];B.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[ae]);let Se=s.convert(ve.format,ve.colorSpace),J=s.convert(ve.type),de=S(ve.internalFormat,Se,J,ve.colorSpace,w.isXRRenderTarget===!0),Ne=Ee(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,de,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,B.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Le(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),Te(n.TEXTURE_CUBE_MAP,_);for(let ae=0;ae<6;ae++)if(_.mipmaps&&_.mipmaps.length>0)for(let ve=0;ve<_.mipmaps.length;ve++)ge(B.__webglFramebuffer[ae][ve],w,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve);else ge(B.__webglFramebuffer[ae],w,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(_)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ae=0,ve=K.length;ae<ve;ae++){let Se=K[ae],J=i.get(Se);t.bindTexture(n.TEXTURE_2D,J.__webglTexture),Te(n.TEXTURE_2D,Se),ge(B.__webglFramebuffer,w,Se,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,0),m(Se)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ae=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,$.__webglTexture),Te(ae,_),_.mipmaps&&_.mipmaps.length>0)for(let ve=0;ve<_.mipmaps.length;ve++)ge(B.__webglFramebuffer[ve],w,_,n.COLOR_ATTACHMENT0,ae,ve);else ge(B.__webglFramebuffer,w,_,n.COLOR_ATTACHMENT0,ae,0);m(_)&&p(ae),t.unbindTexture()}w.depthBuffer&&dt(w)}function D(w){let _=w.textures;for(let B=0,$=_.length;B<$;B++){let K=_[B];if(m(K)){let j=b(w),Me=i.get(K).__webglTexture;t.bindTexture(j,Me),p(j),t.unbindTexture()}}}let Wt=[],rt=[];function ht(w){if(w.samples>0){if(et(w)===!1){let _=w.textures,B=w.width,$=w.height,K=n.COLOR_BUFFER_BIT,j=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(w),ae=_.length>1;if(ae)for(let Se=0;Se<_.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);let ve=w.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Se=0;Se<_.length;Se++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[Se]);let J=i.get(_[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,B,$,0,0,B,$,K,n.NEAREST),l===!0&&(Wt.length=0,rt.length=0,Wt.push(n.COLOR_ATTACHMENT0+Se),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Wt.push(j),rt.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,rt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Wt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let Se=0;Se<_.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,Me.__webglColorRenderbuffer[Se]);let J=i.get(_[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,J,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let _=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Ee(w){return Math.min(r.maxSamples,w.samples)}function et(w){let _=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ce(w){let _=o.render.frame;u.get(w)!==_&&(u.set(w,_),w.update())}function Ge(w,_){let B=w.colorSpace,$=w.format,K=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==Fi&&B!==ki&&(Qe.getTransfer(B)===ct?($!==Zt||K!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),_}function It(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=W,this.setTexture2D=Z,this.setTexture2DArray=L,this.setTexture3D=U,this.setTextureCube=F,this.rebindTextures=vt,this.setupRenderTarget=it,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=et}function K1(n,e){function t(i,r=ki){let s,o=Qe.getTransfer(r);if(i===$n)return n.UNSIGNED_BYTE;if(i===qc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Xc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===dp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===cp)return n.BYTE;if(i===up)return n.SHORT;if(i===js)return n.UNSIGNED_SHORT;if(i===$c)return n.INT;if(i===dr)return n.UNSIGNED_INT;if(i===An)return n.FLOAT;if(i===qn)return n.HALF_FLOAT;if(i===hp)return n.ALPHA;if(i===fp)return n.RGB;if(i===Zt)return n.RGBA;if(i===Ns)return n.DEPTH_COMPONENT;if(i===qs)return n.DEPTH_STENCIL;if(i===pp)return n.RED;if(i===Yc)return n.RED_INTEGER;if(i===mp)return n.RG;if(i===Zc)return n.RG_INTEGER;if(i===Kc)return n.RGBA_INTEGER;if(i===Ta||i===Ca||i===Da||i===Aa)if(o===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ta)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Aa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ta)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ca)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Da)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Aa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Jc||i===Qc||i===eu||i===tu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Jc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===eu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===tu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===nu||i===iu||i===ru)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===nu||i===iu)return o===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ru)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===su||i===ou||i===au||i===lu||i===cu||i===uu||i===du||i===hu||i===fu||i===pu||i===mu||i===gu||i===yu||i===_u)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===su)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ou)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===au)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===lu)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===cu)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===uu)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===du)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hu)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fu)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===pu)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===mu)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gu)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===yu)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_u)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ia||i===vu||i===xu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ia)return o===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===gp||i===Eu||i===Mu||i===Su)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ia)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Eu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Su)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$s?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var J1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Q1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Vp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new Ui,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new jn({vertexShader:J1,fragmentShader:Q1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Nt(new ha(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hp=class extends ii{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,g=null,y=new Vp,m=t.getContextAttributes(),p=null,b=null,S=[],E=[],A=new pe,C=null,T=new Ut;T.viewport=new Et;let P=new Ut;P.viewport=new Et;let M=[T,P],v=new Oc,I=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let re=S[G];return re===void 0&&(re=new Us,S[G]=re),re.getTargetRaySpace()},this.getControllerGrip=function(G){let re=S[G];return re===void 0&&(re=new Us,S[G]=re),re.getGripSpace()},this.getHand=function(G){let re=S[G];return re===void 0&&(re=new Us,S[G]=re),re.getHandSpace()};function H(G){let re=E.indexOf(G.inputSource);if(re===-1)return;let xe=S[re];xe!==void 0&&(xe.update(G.inputSource,G.frame,c||o),xe.dispatchEvent({type:G.type,data:G.inputSource}))}function q(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",Z);for(let G=0;G<S.length;G++){let re=E[G];re!==null&&(E[G]=null,S[G].disconnect(re))}I=null,W=null,y.reset(),e.setRenderTarget(p),h=null,f=null,d=null,r=null,b=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(G){return es(this,null,function*(){if(r=G,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",q),r.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&(yield t.makeXRCompatible()),C=e.getPixelRatio(),e.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,ne=null,ge=null;m.depth&&(ge=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=m.stencil?qs:Ns,ne=m.stencil?$s:dr);let Le={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(Le),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new ri(f.textureWidth,f.textureHeight,{format:Zt,type:$n,depthTexture:new la(f.textureWidth,f.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let xe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,xe),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),b=new ri(h.framebufferWidth,h.framebufferHeight,{format:Zt,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=yield r.requestReferenceSpace(a),Ye.setContext(r),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Z(G){for(let re=0;re<G.removed.length;re++){let xe=G.removed[re],ne=E.indexOf(xe);ne>=0&&(E[ne]=null,S[ne].disconnect(xe))}for(let re=0;re<G.added.length;re++){let xe=G.added[re],ne=E.indexOf(xe);if(ne===-1){for(let Le=0;Le<S.length;Le++)if(Le>=E.length){E.push(xe),ne=Le;break}else if(E[Le]===null){E[Le]=xe,ne=Le;break}if(ne===-1)break}let ge=S[ne];ge&&ge.connect(xe)}}let L=new N,U=new N;function F(G,re,xe){L.setFromMatrixPosition(re.matrixWorld),U.setFromMatrixPosition(xe.matrixWorld);let ne=L.distanceTo(U),ge=re.projectionMatrix.elements,Le=xe.projectionMatrix.elements,we=ge[14]/(ge[10]-1),dt=ge[14]/(ge[10]+1),vt=(ge[9]+1)/ge[5],it=(ge[9]-1)/ge[5],D=(ge[8]-1)/ge[0],Wt=(Le[8]+1)/Le[0],rt=we*D,ht=we*Wt,Ee=ne/(-D+Wt),et=Ee*-D;if(re.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(et),G.translateZ(Ee),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),ge[10]===-1)G.projectionMatrix.copy(re.projectionMatrix),G.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let Ce=we+Ee,Ge=dt+Ee,It=rt-et,w=ht+(ne-et),_=vt*dt/Ge*Ce,B=it*dt/Ge*Ce;G.projectionMatrix.makePerspective(It,w,_,B,Ce,Ge),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function Y(G,re){re===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(re.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let re=G.near,xe=G.far;y.texture!==null&&(y.depthNear>0&&(re=y.depthNear),y.depthFar>0&&(xe=y.depthFar)),v.near=P.near=T.near=re,v.far=P.far=T.far=xe,(I!==v.near||W!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),I=v.near,W=v.far),T.layers.mask=G.layers.mask|2,P.layers.mask=G.layers.mask|4,v.layers.mask=T.layers.mask|P.layers.mask;let ne=G.parent,ge=v.cameras;Y(v,ne);for(let Le=0;Le<ge.length;Le++)Y(ge[Le],ne);ge.length===2?F(v,T,P):v.projectionMatrix.copy(T.projectionMatrix),ie(G,v,ne)};function ie(G,re,xe){xe===null?G.matrix.copy(re.matrixWorld):(G.matrix.copy(xe.matrixWorld),G.matrix.invert(),G.matrix.multiply(re.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(re.projectionMatrix),G.projectionMatrixInverse.copy(re.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Ps*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=G)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(v)};let fe=null;function Te(G,re){if(u=re.getViewerPose(c||o),g=re,u!==null){let xe=u.views;h!==null&&(e.setRenderTargetFramebuffer(b,h.framebuffer),e.setRenderTarget(b));let ne=!1;xe.length!==v.cameras.length&&(v.cameras.length=0,ne=!0);for(let we=0;we<xe.length;we++){let dt=xe[we],vt=null;if(h!==null)vt=h.getViewport(dt);else{let D=d.getViewSubImage(f,dt);vt=D.viewport,we===0&&(e.setRenderTargetTextures(b,D.colorTexture,D.depthStencilTexture),e.setRenderTarget(b))}let it=M[we];it===void 0&&(it=new Ut,it.layers.enable(we),it.viewport=new Et,M[we]=it),it.matrix.fromArray(dt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(dt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(vt.x,vt.y,vt.width,vt.height),we===0&&(v.matrix.copy(it.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ne===!0&&v.cameras.push(it)}let ge=r.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){let we=d.getDepthInformation(xe[0]);we&&we.isValid&&we.texture&&y.init(e,we,r.renderState)}}for(let xe=0;xe<S.length;xe++){let ne=E[xe],ge=S[xe];ne!==null&&ge!==void 0&&ge.update(ne,re,c||o)}fe&&fe(G,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),g=null}let Ye=new F0;Ye.setAnimationLoop(Te),this.setAnimationLoop=function(G){fe=G},this.dispose=function(){}}},jr=new rr,eR=new _t;function tR(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Sp(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,b,S,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,E)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),y(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Yt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Yt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=e.get(p),S=b.envMap,E=b.envMapRotation;S&&(m.envMap.value=S,jr.copy(E),jr.x*=-1,jr.y*=-1,jr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),m.envMapRotation.value.setFromMatrix4(eR.makeRotationFromEuler(jr)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function nR(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){let E=S.program;i.uniformBlockBinding(b,E)}function c(b,S){let E=r[b.id];E===void 0&&(g(b),E=u(b),r[b.id]=E,b.addEventListener("dispose",m));let A=S.program;i.updateUBOMapping(b,A);let C=e.render.frame;s[b.id]!==C&&(f(b),s[b.id]=C)}function u(b){let S=d();b.__bindingPointIndex=S;let E=n.createBuffer(),A=b.__size,C=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,A,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,E),E}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let S=r[b.id],E=b.uniforms,A=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let C=0,T=E.length;C<T;C++){let P=Array.isArray(E[C])?E[C]:[E[C]];for(let M=0,v=P.length;M<v;M++){let I=P[M];if(h(I,C,M,A)===!0){let W=I.__offset,H=Array.isArray(I.value)?I.value:[I.value],q=0;for(let Z=0;Z<H.length;Z++){let L=H[Z],U=y(L);typeof L=="number"||typeof L=="boolean"?(I.__data[0]=L,n.bufferSubData(n.UNIFORM_BUFFER,W+q,I.__data)):L.isMatrix3?(I.__data[0]=L.elements[0],I.__data[1]=L.elements[1],I.__data[2]=L.elements[2],I.__data[3]=0,I.__data[4]=L.elements[3],I.__data[5]=L.elements[4],I.__data[6]=L.elements[5],I.__data[7]=0,I.__data[8]=L.elements[6],I.__data[9]=L.elements[7],I.__data[10]=L.elements[8],I.__data[11]=0):(L.toArray(I.__data,q),q+=U.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(b,S,E,A){let C=b.value,T=S+"_"+E;if(A[T]===void 0)return typeof C=="number"||typeof C=="boolean"?A[T]=C:A[T]=C.clone(),!0;{let P=A[T];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return A[T]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function g(b){let S=b.uniforms,E=0,A=16;for(let T=0,P=S.length;T<P;T++){let M=Array.isArray(S[T])?S[T]:[S[T]];for(let v=0,I=M.length;v<I;v++){let W=M[v],H=Array.isArray(W.value)?W.value:[W.value];for(let q=0,Z=H.length;q<Z;q++){let L=H[q],U=y(L),F=E%A,Y=F%U.boundary,ie=F+Y;E+=Y,ie!==0&&A-ie<U.storage&&(E+=A-ie),W.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=E,E+=U.storage}}}let C=E%A;return C>0&&(E+=A-C),b.__size=E,b.__cache={},this}function y(b){let S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function m(b){let S=b.target;S.removeEventListener("dispose",m);let E=o.indexOf(S.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function p(){for(let b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}var Au=class{constructor(e={}){let{canvas:t=r0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;let g=new Uint32Array(4),y=new Int32Array(4),m=null,p=null,b=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,A=!1;this._outputColorSpace=pn;let C=0,T=0,P=null,M=-1,v=null,I=new Et,W=new Et,H=null,q=new We(0),Z=0,L=t.width,U=t.height,F=1,Y=null,ie=null,fe=new Et(0,0,L,U),Te=new Et(0,0,L,U),Ye=!1,G=new Bs,re=!1,xe=!1,ne=new _t,ge=new _t,Le=new N,we=new Et,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},vt=!1;function it(){return P===null?F:1}let D=i;function Wt(x,O){return t.getContext(x,O)}try{let x={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Lc}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",ee,!1),t.addEventListener("webglcontextcreationerror",X,!1),D===null){let O="webgl2";if(D=Wt(O,x),D===null)throw Wt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let rt,ht,Ee,et,Ce,Ge,It,w,_,B,$,K,j,Me,ae,ve,Se,J,de,Ne,Ae,se,ke,R;function le(){rt=new xI(D),rt.init(),se=new K1(D,rt),ht=new fI(D,rt,e,se),Ee=new Y1(D,rt),ht.reverseDepthBuffer&&f&&Ee.buffers.depth.setReversed(!0),et=new SI(D),Ce=new L1,Ge=new Z1(D,rt,Ee,Ce,ht,se,et),It=new mI(E),w=new vI(E),_=new AC(D),ke=new dI(D,_),B=new EI(D,_,et,ke),$=new wI(D,B,_,et),de=new bI(D,ht,Ge),ve=new pI(Ce),K=new O1(E,It,w,rt,ht,ke,ve),j=new tR(E,Ce),Me=new U1,ae=new W1(rt),J=new uI(E,It,w,Ee,$,h,l),Se=new q1(E,$,ht),R=new nR(D,et,ht,Ee),Ne=new hI(D,rt,et),Ae=new MI(D,rt,et),et.programs=K.programs,E.capabilities=ht,E.extensions=rt,E.properties=Ce,E.renderLists=Me,E.shadowMap=Se,E.state=Ee,E.info=et}le();let Q=new Hp(E,D);this.xr=Q,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let x=rt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=rt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(x){x!==void 0&&(F=x,this.setSize(L,U,!1))},this.getSize=function(x){return x.set(L,U)},this.setSize=function(x,O,V=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=x,U=O,t.width=Math.floor(x*F),t.height=Math.floor(O*F),V===!0&&(t.style.width=x+"px",t.style.height=O+"px"),this.setViewport(0,0,x,O)},this.getDrawingBufferSize=function(x){return x.set(L*F,U*F).floor()},this.setDrawingBufferSize=function(x,O,V){L=x,U=O,F=V,t.width=Math.floor(x*V),t.height=Math.floor(O*V),this.setViewport(0,0,x,O)},this.getCurrentViewport=function(x){return x.copy(I)},this.getViewport=function(x){return x.copy(fe)},this.setViewport=function(x,O,V,z){x.isVector4?fe.set(x.x,x.y,x.z,x.w):fe.set(x,O,V,z),Ee.viewport(I.copy(fe).multiplyScalar(F).round())},this.getScissor=function(x){return x.copy(Te)},this.setScissor=function(x,O,V,z){x.isVector4?Te.set(x.x,x.y,x.z,x.w):Te.set(x,O,V,z),Ee.scissor(W.copy(Te).multiplyScalar(F).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(x){Ee.setScissorTest(Ye=x)},this.setOpaqueSort=function(x){Y=x},this.setTransparentSort=function(x){ie=x},this.getClearColor=function(x){return x.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor(...arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha(...arguments)},this.clear=function(x=!0,O=!0,V=!0){let z=0;if(x){let k=!1;if(P!==null){let te=P.texture.format;k=te===Kc||te===Zc||te===Yc}if(k){let te=P.texture.type,ce=te===$n||te===dr||te===js||te===$s||te===qc||te===Xc,_e=J.getClearColor(),he=J.getClearAlpha(),Fe=_e.r,Oe=_e.g,be=_e.b;ce?(g[0]=Fe,g[1]=Oe,g[2]=be,g[3]=he,D.clearBufferuiv(D.COLOR,0,g)):(y[0]=Fe,y[1]=Oe,y[2]=be,y[3]=he,D.clearBufferiv(D.COLOR,0,y))}else z|=D.COLOR_BUFFER_BIT}O&&(z|=D.DEPTH_BUFFER_BIT),V&&(z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",ee,!1),t.removeEventListener("webglcontextcreationerror",X,!1),J.dispose(),Me.dispose(),ae.dispose(),Ce.dispose(),It.dispose(),w.dispose(),$.dispose(),ke.dispose(),R.dispose(),K.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Em),Q.removeEventListener("sessionend",Mm),pr.stop()};function me(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ee(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let x=et.autoReset,O=Se.enabled,V=Se.autoUpdate,z=Se.needsUpdate,k=Se.type;le(),et.autoReset=x,Se.enabled=O,Se.autoUpdate=V,Se.needsUpdate=z,Se.type=k}function X(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function ye(x){let O=x.target;O.removeEventListener("dispose",ye),Be(O)}function Be(x){mt(x),Ce.remove(x)}function mt(x){let O=Ce.get(x).programs;O!==void 0&&(O.forEach(function(V){K.releaseProgram(V)}),x.isShaderMaterial&&K.releaseShaderCache(x))}this.renderBufferDirect=function(x,O,V,z,k,te){O===null&&(O=dt);let ce=k.isMesh&&k.matrixWorld.determinant()<0,_e=Wx(x,O,V,z,k);Ee.setMaterial(z,ce);let he=V.index,Fe=1;if(z.wireframe===!0){if(he=B.getWireframeAttribute(V),he===void 0)return;Fe=2}let Oe=V.drawRange,be=V.attributes.position,Ze=Oe.start*Fe,at=(Oe.start+Oe.count)*Fe;te!==null&&(Ze=Math.max(Ze,te.start*Fe),at=Math.min(at,(te.start+te.count)*Fe)),he!==null?(Ze=Math.max(Ze,0),at=Math.min(at,he.count)):be!=null&&(Ze=Math.max(Ze,0),at=Math.min(at,be.count));let xt=at-Ze;if(xt<0||xt===1/0)return;ke.setup(k,z,_e,V,he);let Mt,tt=Ne;if(he!==null&&(Mt=_.get(he),tt=Ae,tt.setIndex(Mt)),k.isMesh)z.wireframe===!0?(Ee.setLineWidth(z.wireframeLinewidth*it()),tt.setMode(D.LINES)):tt.setMode(D.TRIANGLES);else if(k.isLine){let De=z.linewidth;De===void 0&&(De=1),Ee.setLineWidth(De*it()),k.isLineSegments?tt.setMode(D.LINES):k.isLineLoop?tt.setMode(D.LINE_LOOP):tt.setMode(D.LINE_STRIP)}else k.isPoints?tt.setMode(D.POINTS):k.isSprite&&tt.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)kr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),tt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))tt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let De=k._multiDrawStarts,kt=k._multiDrawCounts,st=k._multiDrawCount,Pn=he?_.get(he).bytesPerElement:1,Qr=Ce.get(z).currentProgram.getUniforms();for(let ln=0;ln<st;ln++)Qr.setValue(D,"_gl_DrawID",ln),tt.render(De[ln]/Pn,kt[ln])}else if(k.isInstancedMesh)tt.renderInstances(Ze,xt,k.count);else if(V.isInstancedBufferGeometry){let De=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,kt=Math.min(V.instanceCount,De);tt.renderInstances(Ze,xt,kt)}else tt.render(Ze,xt)};function ot(x,O,V){x.transparent===!0&&x.side===ai&&x.forceSinglePass===!1?(x.side=Yt,x.needsUpdate=!0,Ha(x,O,V),x.side=Pi,x.needsUpdate=!0,Ha(x,O,V),x.side=ai):Ha(x,O,V)}this.compile=function(x,O,V=null){V===null&&(V=x),p=ae.get(V),p.init(O),S.push(p),V.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),x!==V&&x.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();let z=new Set;return x.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let te=k.material;if(te)if(Array.isArray(te))for(let ce=0;ce<te.length;ce++){let _e=te[ce];ot(_e,V,k),z.add(_e)}else ot(te,V,k),z.add(te)}),p=S.pop(),z},this.compileAsync=function(x,O,V=null){let z=this.compile(x,O,V);return new Promise(k=>{function te(){if(z.forEach(function(ce){Ce.get(ce).currentProgram.isReady()&&z.delete(ce)}),z.size===0){k(x);return}setTimeout(te,10)}rt.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let Nn=null;function di(x){Nn&&Nn(x)}function Em(){pr.stop()}function Mm(){pr.start()}let pr=new F0;pr.setAnimationLoop(di),typeof self<"u"&&pr.setContext(self),this.setAnimationLoop=function(x){Nn=x,Q.setAnimationLoop(x),x===null?pr.stop():pr.start()},Q.addEventListener("sessionstart",Em),Q.addEventListener("sessionend",Mm),this.render=function(x,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(O),O=Q.getCamera()),x.isScene===!0&&x.onBeforeRender(E,x,O,P),p=ae.get(x,S.length),p.init(O),S.push(p),ge.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),G.setFromProjectionMatrix(ge),xe=this.localClippingEnabled,re=ve.init(this.clippingPlanes,xe),m=Me.get(x,b.length),m.init(),b.push(m),Q.enabled===!0&&Q.isPresenting===!0){let te=E.xr.getDepthSensingMesh();te!==null&&id(te,O,-1/0,E.sortObjects)}id(x,O,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(Y,ie),vt=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,vt&&J.addToRenderList(m,x),this.info.render.frame++,re===!0&&ve.beginShadows();let V=p.state.shadowsArray;Se.render(V,x,O),re===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=m.opaque,k=m.transmissive;if(p.setupLights(),O.isArrayCamera){let te=O.cameras;if(k.length>0)for(let ce=0,_e=te.length;ce<_e;ce++){let he=te[ce];bm(z,k,x,he)}vt&&J.render(x);for(let ce=0,_e=te.length;ce<_e;ce++){let he=te[ce];Sm(m,x,he,he.viewport)}}else k.length>0&&bm(z,k,x,O),vt&&J.render(x),Sm(m,x,O);P!==null&&T===0&&(Ge.updateMultisampleRenderTarget(P),Ge.updateRenderTargetMipmap(P)),x.isScene===!0&&x.onAfterRender(E,x,O),ke.resetDefaultState(),M=-1,v=null,S.pop(),S.length>0?(p=S[S.length-1],re===!0&&ve.setGlobalState(E.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function id(x,O,V,z){if(x.visible===!1)return;if(x.layers.test(O.layers)){if(x.isGroup)V=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(O);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||G.intersectsSprite(x)){z&&we.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ge);let ce=$.update(x),_e=x.material;_e.visible&&m.push(x,ce,_e,V,we.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||G.intersectsObject(x))){let ce=$.update(x),_e=x.material;if(z&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),we.copy(x.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),we.copy(ce.boundingSphere.center)),we.applyMatrix4(x.matrixWorld).applyMatrix4(ge)),Array.isArray(_e)){let he=ce.groups;for(let Fe=0,Oe=he.length;Fe<Oe;Fe++){let be=he[Fe],Ze=_e[be.materialIndex];Ze&&Ze.visible&&m.push(x,ce,Ze,V,we.z,be)}}else _e.visible&&m.push(x,ce,_e,V,we.z,null)}}let te=x.children;for(let ce=0,_e=te.length;ce<_e;ce++)id(te[ce],O,V,z)}function Sm(x,O,V,z){let k=x.opaque,te=x.transmissive,ce=x.transparent;p.setupLightsView(V),re===!0&&ve.setGlobalState(E.clippingPlanes,V),z&&Ee.viewport(I.copy(z)),k.length>0&&Va(k,O,V),te.length>0&&Va(te,O,V),ce.length>0&&Va(ce,O,V),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function bm(x,O,V,z){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new ri(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?qn:$n,minFilter:ur,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));let te=p.state.transmissionRenderTarget[z.id],ce=z.viewport||I;te.setSize(ce.z*E.transmissionResolutionScale,ce.w*E.transmissionResolutionScale);let _e=E.getRenderTarget();E.setRenderTarget(te),E.getClearColor(q),Z=E.getClearAlpha(),Z<1&&E.setClearColor(16777215,.5),E.clear(),vt&&J.render(V);let he=E.toneMapping;E.toneMapping=Li;let Fe=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),re===!0&&ve.setGlobalState(E.clippingPlanes,z),Va(x,V,z),Ge.updateMultisampleRenderTarget(te),Ge.updateRenderTargetMipmap(te),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let be=0,Ze=O.length;be<Ze;be++){let at=O[be],xt=at.object,Mt=at.geometry,tt=at.material,De=at.group;if(tt.side===ai&&xt.layers.test(z.layers)){let kt=tt.side;tt.side=Yt,tt.needsUpdate=!0,wm(xt,V,z,Mt,tt,De),tt.side=kt,tt.needsUpdate=!0,Oe=!0}}Oe===!0&&(Ge.updateMultisampleRenderTarget(te),Ge.updateRenderTargetMipmap(te))}E.setRenderTarget(_e),E.setClearColor(q,Z),Fe!==void 0&&(z.viewport=Fe),E.toneMapping=he}function Va(x,O,V){let z=O.isScene===!0?O.overrideMaterial:null;for(let k=0,te=x.length;k<te;k++){let ce=x[k],_e=ce.object,he=ce.geometry,Fe=ce.group,Oe=ce.material;Oe.allowOverride===!0&&z!==null&&(Oe=z),_e.layers.test(V.layers)&&wm(_e,O,V,he,Oe,Fe)}}function wm(x,O,V,z,k,te){x.onBeforeRender(E,O,V,z,k,te),x.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),k.onBeforeRender(E,O,V,z,x,te),k.transparent===!0&&k.side===ai&&k.forceSinglePass===!1?(k.side=Yt,k.needsUpdate=!0,E.renderBufferDirect(V,O,z,k,x,te),k.side=Pi,k.needsUpdate=!0,E.renderBufferDirect(V,O,z,k,x,te),k.side=ai):E.renderBufferDirect(V,O,z,k,x,te),x.onAfterRender(E,O,V,z,k,te)}function Ha(x,O,V){O.isScene!==!0&&(O=dt);let z=Ce.get(x),k=p.state.lights,te=p.state.shadowsArray,ce=k.state.version,_e=K.getParameters(x,k.state,te,O,V),he=K.getProgramCacheKey(_e),Fe=z.programs;z.environment=x.isMeshStandardMaterial?O.environment:null,z.fog=O.fog,z.envMap=(x.isMeshStandardMaterial?w:It).get(x.envMap||z.environment),z.envMapRotation=z.environment!==null&&x.envMap===null?O.environmentRotation:x.envMapRotation,Fe===void 0&&(x.addEventListener("dispose",ye),Fe=new Map,z.programs=Fe);let Oe=Fe.get(he);if(Oe!==void 0){if(z.currentProgram===Oe&&z.lightsStateVersion===ce)return Cm(x,_e),Oe}else _e.uniforms=K.getUniforms(x),x.onBeforeCompile(_e,E),Oe=K.acquireProgram(_e,he),Fe.set(he,Oe),z.uniforms=_e.uniforms;let be=z.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(be.clippingPlanes=ve.uniform),Cm(x,_e),z.needsLights=$x(x),z.lightsStateVersion=ce,z.needsLights&&(be.ambientLightColor.value=k.state.ambient,be.lightProbe.value=k.state.probe,be.directionalLights.value=k.state.directional,be.directionalLightShadows.value=k.state.directionalShadow,be.spotLights.value=k.state.spot,be.spotLightShadows.value=k.state.spotShadow,be.rectAreaLights.value=k.state.rectArea,be.ltc_1.value=k.state.rectAreaLTC1,be.ltc_2.value=k.state.rectAreaLTC2,be.pointLights.value=k.state.point,be.pointLightShadows.value=k.state.pointShadow,be.hemisphereLights.value=k.state.hemi,be.directionalShadowMap.value=k.state.directionalShadowMap,be.directionalShadowMatrix.value=k.state.directionalShadowMatrix,be.spotShadowMap.value=k.state.spotShadowMap,be.spotLightMatrix.value=k.state.spotLightMatrix,be.spotLightMap.value=k.state.spotLightMap,be.pointShadowMap.value=k.state.pointShadowMap,be.pointShadowMatrix.value=k.state.pointShadowMatrix),z.currentProgram=Oe,z.uniformsList=null,Oe}function Tm(x){if(x.uniformsList===null){let O=x.currentProgram.getUniforms();x.uniformsList=Ks.seqWithValue(O.seq,x.uniforms)}return x.uniformsList}function Cm(x,O){let V=Ce.get(x);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.batchingColor=O.batchingColor,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.instancingMorph=O.instancingMorph,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function Wx(x,O,V,z,k){O.isScene!==!0&&(O=dt),Ge.resetTextureUnits();let te=O.fog,ce=z.isMeshStandardMaterial?O.environment:null,_e=P===null?E.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Fi,he=(z.isMeshStandardMaterial?w:It).get(z.envMap||ce),Fe=z.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Oe=!!V.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),be=!!V.morphAttributes.position,Ze=!!V.morphAttributes.normal,at=!!V.morphAttributes.color,xt=Li;z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(xt=E.toneMapping);let Mt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,tt=Mt!==void 0?Mt.length:0,De=Ce.get(z),kt=p.state.lights;if(re===!0&&(xe===!0||x!==v)){let jt=x===v&&z.id===M;ve.setState(z,x,jt)}let st=!1;z.version===De.__version?(De.needsLights&&De.lightsStateVersion!==kt.state.version||De.outputColorSpace!==_e||k.isBatchedMesh&&De.batching===!1||!k.isBatchedMesh&&De.batching===!0||k.isBatchedMesh&&De.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&De.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&De.instancing===!1||!k.isInstancedMesh&&De.instancing===!0||k.isSkinnedMesh&&De.skinning===!1||!k.isSkinnedMesh&&De.skinning===!0||k.isInstancedMesh&&De.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&De.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&De.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&De.instancingMorph===!1&&k.morphTexture!==null||De.envMap!==he||z.fog===!0&&De.fog!==te||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ve.numPlanes||De.numIntersection!==ve.numIntersection)||De.vertexAlphas!==Fe||De.vertexTangents!==Oe||De.morphTargets!==be||De.morphNormals!==Ze||De.morphColors!==at||De.toneMapping!==xt||De.morphTargetsCount!==tt)&&(st=!0):(st=!0,De.__version=z.version);let Pn=De.currentProgram;st===!0&&(Pn=Ha(z,O,k));let Qr=!1,ln=!1,oo=!1,yt=Pn.getUniforms(),_n=De.uniforms;if(Ee.useProgram(Pn.program)&&(Qr=!0,ln=!0,oo=!0),z.id!==M&&(M=z.id,ln=!0),Qr||v!==x){Ee.buffers.depth.getReversed()?(ne.copy(x.projectionMatrix),o0(ne),a0(ne),yt.setValue(D,"projectionMatrix",ne)):yt.setValue(D,"projectionMatrix",x.projectionMatrix),yt.setValue(D,"viewMatrix",x.matrixWorldInverse);let Kt=yt.map.cameraPosition;Kt!==void 0&&Kt.setValue(D,Le.setFromMatrixPosition(x.matrixWorld)),ht.logarithmicDepthBuffer&&yt.setValue(D,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&yt.setValue(D,"isOrthographic",x.isOrthographicCamera===!0),v!==x&&(v=x,ln=!0,oo=!0)}if(k.isSkinnedMesh){yt.setOptional(D,k,"bindMatrix"),yt.setOptional(D,k,"bindMatrixInverse");let jt=k.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),yt.setValue(D,"boneTexture",jt.boneTexture,Ge))}k.isBatchedMesh&&(yt.setOptional(D,k,"batchingTexture"),yt.setValue(D,"batchingTexture",k._matricesTexture,Ge),yt.setOptional(D,k,"batchingIdTexture"),yt.setValue(D,"batchingIdTexture",k._indirectTexture,Ge),yt.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&yt.setValue(D,"batchingColorTexture",k._colorsTexture,Ge));let vn=V.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&de.update(k,V,Pn),(ln||De.receiveShadow!==k.receiveShadow)&&(De.receiveShadow=k.receiveShadow,yt.setValue(D,"receiveShadow",k.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(_n.envMap.value=he,_n.flipEnvMap.value=he.isCubeTexture&&he.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&O.environment!==null&&(_n.envMapIntensity.value=O.environmentIntensity),ln&&(yt.setValue(D,"toneMappingExposure",E.toneMappingExposure),De.needsLights&&jx(_n,oo),te&&z.fog===!0&&j.refreshFogUniforms(_n,te),j.refreshMaterialUniforms(_n,z,F,U,p.state.transmissionRenderTarget[x.id]),Ks.upload(D,Tm(De),_n,Ge)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ks.upload(D,Tm(De),_n,Ge),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&yt.setValue(D,"center",k.center),yt.setValue(D,"modelViewMatrix",k.modelViewMatrix),yt.setValue(D,"normalMatrix",k.normalMatrix),yt.setValue(D,"modelMatrix",k.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let jt=z.uniformsGroups;for(let Kt=0,rd=jt.length;Kt<rd;Kt++){let mr=jt[Kt];R.update(mr,Pn),R.bind(mr,Pn)}}return Pn}function jx(x,O){x.ambientLightColor.needsUpdate=O,x.lightProbe.needsUpdate=O,x.directionalLights.needsUpdate=O,x.directionalLightShadows.needsUpdate=O,x.pointLights.needsUpdate=O,x.pointLightShadows.needsUpdate=O,x.spotLights.needsUpdate=O,x.spotLightShadows.needsUpdate=O,x.rectAreaLights.needsUpdate=O,x.hemisphereLights.needsUpdate=O}function $x(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(x,O,V){let z=Ce.get(x);z.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Ce.get(x.texture).__webglTexture=O,Ce.get(x.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:V,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,O){let V=Ce.get(x);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0};let qx=D.createFramebuffer();this.setRenderTarget=function(x,O=0,V=0){P=x,C=O,T=V;let z=!0,k=null,te=!1,ce=!1;if(x){let he=Ce.get(x);if(he.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(D.FRAMEBUFFER,null),z=!1;else if(he.__webglFramebuffer===void 0)Ge.setupRenderTarget(x);else if(he.__hasExternalTextures)Ge.rebindTextures(x,Ce.get(x.texture).__webglTexture,Ce.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let be=x.depthTexture;if(he.__boundDepthTexture!==be){if(be!==null&&Ce.has(be)&&(x.width!==be.image.width||x.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(x)}}let Fe=x.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ce=!0);let Oe=Ce.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Oe[O])?k=Oe[O][V]:k=Oe[O],te=!0):x.samples>0&&Ge.useMultisampledRTT(x)===!1?k=Ce.get(x).__webglMultisampledFramebuffer:Array.isArray(Oe)?k=Oe[V]:k=Oe,I.copy(x.viewport),W.copy(x.scissor),H=x.scissorTest}else I.copy(fe).multiplyScalar(F).floor(),W.copy(Te).multiplyScalar(F).floor(),H=Ye;if(V!==0&&(k=qx),Ee.bindFramebuffer(D.FRAMEBUFFER,k)&&z&&Ee.drawBuffers(x,k),Ee.viewport(I),Ee.scissor(W),Ee.setScissorTest(H),te){let he=Ce.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,he.__webglTexture,V)}else if(ce){let he=Ce.get(x.texture),Fe=O;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,he.__webglTexture,V,Fe)}else if(x!==null&&V!==0){let he=Ce.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,he.__webglTexture,V)}M=-1},this.readRenderTargetPixels=function(x,O,V,z,k,te,ce,_e=0){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=Ce.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ce!==void 0&&(he=he[ce]),he){Ee.bindFramebuffer(D.FRAMEBUFFER,he);try{let Fe=x.textures[_e],Oe=Fe.format,be=Fe.type;if(!ht.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=x.width-z&&V>=0&&V<=x.height-k&&(x.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+_e),D.readPixels(O,V,z,k,se.convert(Oe),se.convert(be),te))}finally{let Fe=P!==null?Ce.get(P).__webglFramebuffer:null;Ee.bindFramebuffer(D.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=function(x,O,V,z,k,te,ce,_e=0){return es(this,null,function*(){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=Ce.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ce!==void 0&&(he=he[ce]),he)if(O>=0&&O<=x.width-z&&V>=0&&V<=x.height-k){Ee.bindFramebuffer(D.FRAMEBUFFER,he);let Fe=x.textures[_e],Oe=Fe.format,be=Fe.type;if(!ht.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ze=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ze),D.bufferData(D.PIXEL_PACK_BUFFER,te.byteLength,D.STREAM_READ),x.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+_e),D.readPixels(O,V,z,k,se.convert(Oe),se.convert(be),0);let at=P!==null?Ce.get(P).__webglFramebuffer:null;Ee.bindFramebuffer(D.FRAMEBUFFER,at);let xt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),yield s0(D,xt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ze),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,te),D.deleteBuffer(Ze),D.deleteSync(xt),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(x,O=null,V=0){let z=Math.pow(2,-V),k=Math.floor(x.image.width*z),te=Math.floor(x.image.height*z),ce=O!==null?O.x:0,_e=O!==null?O.y:0;Ge.setTexture2D(x,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,ce,_e,k,te),Ee.unbindTexture()};let Xx=D.createFramebuffer(),Yx=D.createFramebuffer();this.copyTextureToTexture=function(x,O,V=null,z=null,k=0,te=null){te===null&&(k!==0?(kr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=k,k=0):te=0);let ce,_e,he,Fe,Oe,be,Ze,at,xt,Mt=x.isCompressedTexture?x.mipmaps[te]:x.image;if(V!==null)ce=V.max.x-V.min.x,_e=V.max.y-V.min.y,he=V.isBox3?V.max.z-V.min.z:1,Fe=V.min.x,Oe=V.min.y,be=V.isBox3?V.min.z:0;else{let vn=Math.pow(2,-k);ce=Math.floor(Mt.width*vn),_e=Math.floor(Mt.height*vn),x.isDataArrayTexture?he=Mt.depth:x.isData3DTexture?he=Math.floor(Mt.depth*vn):he=1,Fe=0,Oe=0,be=0}z!==null?(Ze=z.x,at=z.y,xt=z.z):(Ze=0,at=0,xt=0);let tt=se.convert(O.format),De=se.convert(O.type),kt;O.isData3DTexture?(Ge.setTexture3D(O,0),kt=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Ge.setTexture2DArray(O,0),kt=D.TEXTURE_2D_ARRAY):(Ge.setTexture2D(O,0),kt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);let st=D.getParameter(D.UNPACK_ROW_LENGTH),Pn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Qr=D.getParameter(D.UNPACK_SKIP_PIXELS),ln=D.getParameter(D.UNPACK_SKIP_ROWS),oo=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Mt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Mt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Fe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Oe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,be);let yt=x.isDataArrayTexture||x.isData3DTexture,_n=O.isDataArrayTexture||O.isData3DTexture;if(x.isDepthTexture){let vn=Ce.get(x),jt=Ce.get(O),Kt=Ce.get(vn.__renderTarget),rd=Ce.get(jt.__renderTarget);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,Kt.__webglFramebuffer),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,rd.__webglFramebuffer);for(let mr=0;mr<he;mr++)yt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ce.get(x).__webglTexture,k,be+mr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ce.get(O).__webglTexture,te,xt+mr)),D.blitFramebuffer(Fe,Oe,ce,_e,Ze,at,ce,_e,D.DEPTH_BUFFER_BIT,D.NEAREST);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||x.isRenderTargetTexture||Ce.has(x)){let vn=Ce.get(x),jt=Ce.get(O);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,Xx),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,Yx);for(let Kt=0;Kt<he;Kt++)yt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vn.__webglTexture,k,be+Kt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,vn.__webglTexture,k),_n?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,jt.__webglTexture,te,xt+Kt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,jt.__webglTexture,te),k!==0?D.blitFramebuffer(Fe,Oe,ce,_e,Ze,at,ce,_e,D.COLOR_BUFFER_BIT,D.NEAREST):_n?D.copyTexSubImage3D(kt,te,Ze,at,xt+Kt,Fe,Oe,ce,_e):D.copyTexSubImage2D(kt,te,Ze,at,Fe,Oe,ce,_e);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else _n?x.isDataTexture||x.isData3DTexture?D.texSubImage3D(kt,te,Ze,at,xt,ce,_e,he,tt,De,Mt.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(kt,te,Ze,at,xt,ce,_e,he,tt,Mt.data):D.texSubImage3D(kt,te,Ze,at,xt,ce,_e,he,tt,De,Mt):x.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,te,Ze,at,ce,_e,tt,De,Mt.data):x.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,te,Ze,at,Mt.width,Mt.height,tt,Mt.data):D.texSubImage2D(D.TEXTURE_2D,te,Ze,at,ce,_e,tt,De,Mt);D.pixelStorei(D.UNPACK_ROW_LENGTH,st),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Pn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Qr),D.pixelStorei(D.UNPACK_SKIP_ROWS,ln),D.pixelStorei(D.UNPACK_SKIP_IMAGES,oo),te===0&&O.generateMipmaps&&D.generateMipmap(kt),Ee.unbindTexture()},this.copyTextureToTexture3D=function(x,O,V=null,z=null,k=0){return kr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,O,V,z,k)},this.initRenderTarget=function(x){Ce.get(x).__webglFramebuffer===void 0&&Ge.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Ge.setTextureCube(x,0):x.isData3DTexture?Ge.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Ge.setTexture2DArray(x,0):Ge.setTexture2D(x,0),Ee.unbindTexture()},this.resetState=function(){C=0,T=0,P=null,Ee.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}};var B0={type:"change"},Wp={type:"start"},H0={type:"end"},Ru=new Ur,V0=new bn,rR=Math.cos(70*Ep.DEG2RAD),Ot=new N,sn=2*Math.PI,ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Gp=1e-6,Nu=class extends Sa{constructor(e,t=null){super(e,t),this.state=ut.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:lr.ROTATE,MIDDLE:lr.DOLLY,RIGHT:lr.PAN},this.touches={ONE:cr.ROTATE,TWO:cr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Tn,this._lastTargetPosition=new N,this._quat=new Tn().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Gs,this._sphericalDelta=new Gs,this._scale=1,this._panOffset=new N,this._rotateStart=new pe,this._rotateEnd=new pe,this._rotateDelta=new pe,this._panStart=new pe,this._panEnd=new pe,this._panDelta=new pe,this._dollyStart=new pe,this._dollyEnd=new pe,this._dollyDelta=new pe,this._dollyDirection=new N,this._mouse=new pe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=oR.bind(this),this._onPointerDown=sR.bind(this),this._onPointerUp=aR.bind(this),this._onContextMenu=pR.bind(this),this._onMouseWheel=uR.bind(this),this._onKeyDown=dR.bind(this),this._onTouchStart=hR.bind(this),this._onTouchMove=fR.bind(this),this._onMouseDown=lR.bind(this),this._onMouseMove=cR.bind(this),this._interceptControlDown=mR.bind(this),this._interceptControlUp=gR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(B0),this.update(),this.state=ut.NONE}update(e=null){let t=this.object.position;Ot.copy(t).sub(this.target),Ot.applyQuaternion(this._quat),this._spherical.setFromVector3(Ot),this.autoRotate&&this.state===ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=sn:i>Math.PI&&(i-=sn),r<-Math.PI?r+=sn:r>Math.PI&&(r-=sn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Ot.setFromSpherical(this._spherical),Ot.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ot),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ot.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){let a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;let c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ot.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ru.origin.copy(this.object.position),Ru.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ru.direction))<rR?this.object.lookAt(this.target):(V0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ru.intersectPlane(V0,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Gp||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Gp||this._lastTargetPosition.distanceToSquared(this.target)>Gp?(this.dispatchEvent(B0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?sn/60*this.autoRotateSpeed*e:sn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ot.setFromMatrixColumn(t,0),Ot.multiplyScalar(-e),this._panOffset.add(Ot)}_panUp(e,t){this.screenSpacePanning===!0?Ot.setFromMatrixColumn(t,1):(Ot.setFromMatrixColumn(t,0),Ot.crossVectors(this.object.up,Ot)),Ot.multiplyScalar(e),this._panOffset.add(Ot)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Ot.copy(r).sub(this.target);let s=Ot.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new pe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function sR(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function oR(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function aR(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(H0),this.state=ut.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function lR(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case lr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ut.DOLLY;break;case lr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ut.ROTATE}break;case lr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ut.PAN}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(Wp)}function cR(n){switch(this.state){case ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function uR(n){this.enabled===!1||this.enableZoom===!1||this.state!==ut.NONE||(n.preventDefault(),this.dispatchEvent(Wp),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(H0))}function dR(n){this.enabled!==!1&&this._handleKeyDown(n)}function hR(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case cr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ut.TOUCH_ROTATE;break;case cr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ut.TOUCH_PAN;break;default:this.state=ut.NONE}break;case 2:switch(this.touches.TWO){case cr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ut.TOUCH_DOLLY_PAN;break;case cr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ut.TOUCH_DOLLY_ROTATE;break;default:this.state=ut.NONE}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(Wp)}function fR(n){switch(this._trackPointer(n),this.state){case ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ut.NONE}}function pR(n){this.enabled!==!1&&n.preventDefault()}function mR(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gR(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var yR=Array(1024).fill(0).map((n,e)=>Math.pow(e/255*.9478672986+.0521327014,2.4)),Pu=class extends bu{constructor(e){super(e),this.type=qn}setDataType(e){return this.type=e,this}parse(e,t){let i={version:null,baseRenditionIsHDR:null,gainMapMin:null,gainMapMax:null,gamma:null,offsetSDR:null,offsetHDR:null,hdrCapacityMin:null,hdrCapacityMax:null},r=new TextDecoder,s=new DataView(e),o=0,a=[];for(;o<s.byteLength;){let u=s.getUint8(o);if(u===255){let d=s.getUint8(o+1);[216,224,225,226].includes(d)?(a.push({sectionType:d,section:[u,d],sectionOffset:o+2}),o+=2):(a[a.length-1].section.push(u,d),o+=2)}else a[a.length-1].section.push(u),o++}let l,c;for(let u=0;u<a.length;u++){let{sectionType:d,section:f,sectionOffset:h}=a[u];if(d!==224){if(d===225)this._parseXMPMetadata(r.decode(new Uint8Array(f)),i);else if(d===226){let g=new DataView(new Uint8Array(f.slice(2)).buffer);if(g.getUint32(2,!1)===1297106432){let m=g.getUint32(6)===1229531648,p=60,b=g.getUint32(p,m),S=g.getUint32(p+4,m),E=g.getUint32(p+16,m),A=g.getUint32(p+20,m)+h+6;l=new Uint8Array(s.buffer,S,b),c=new Uint8Array(s.buffer,A,E)}}}}if(!i.version)throw new Error("THREE.UltraHDRLoader: Not a valid UltraHDR image");if(l&&c)this._applyGainmapToSDR(i,l,c,(u,d,f)=>{t({width:d,height:f,data:u,format:Zt,type:this.type})},u=>{throw new Error(u)});else throw new Error("THREE.UltraHDRLoader: Could not parse UltraHDR images")}load(e,t,i,r){let s=new aa(this.type===qn?new Uint16Array:new Float32Array,0,0,Zt,this.type,Xo,Wn,Wn,gn,lp,1,Fi);s.generateMipmaps=!0,s.flipY=!0;let o=new ya(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(this.withCredentials),o.load(e,a=>{try{this.parse(a,l=>{s.image={data:l.data,width:l.width,height:l.height},s.needsUpdate=!0,t&&t(s,l)})}catch(l){r&&r(l),console.error(l)}},i,r),s}_parseXMPMetadata(e,t){let r=new DOMParser().parseFromString(e.substring(e.indexOf("<"),e.lastIndexOf(">")+1),"text/xml"),[s]=r.getElementsByTagName("Container:Directory");if(!s){let[o]=r.getElementsByTagName("rdf:Description");t.version=o.getAttribute("hdrgm:Version"),t.baseRenditionIsHDR=o.getAttribute("hdrgm:BaseRenditionIsHDR")==="True",t.gainMapMin=parseFloat(o.getAttribute("hdrgm:GainMapMin")||0),t.gainMapMax=parseFloat(o.getAttribute("hdrgm:GainMapMax")||1),t.gamma=parseFloat(o.getAttribute("hdrgm:Gamma")||1),t.offsetSDR=parseFloat(o.getAttribute("hdrgm:OffsetSDR")/(1/64)),t.offsetHDR=parseFloat(o.getAttribute("hdrgm:OffsetHDR")/(1/64)),t.hdrCapacityMin=parseFloat(o.getAttribute("hdrgm:HDRCapacityMin")||0),t.hdrCapacityMax=parseFloat(o.getAttribute("hdrgm:HDRCapacityMax")||1)}}_srgbToLinear(e){return e/255<.04045?e/255*.0773993808:e<1024?yR[~~e]:Math.pow(e/255*.9478672986+.0521327014,2.4)}_applyGainmapToSDR(e,t,i,r,s){let o=a=>new Promise((l,c)=>{let u=document.createElement("img");u.onload=()=>{let d={width:u.naturalWidth,height:u.naturalHeight,source:u};URL.revokeObjectURL(u.src),l(d)},u.onerror=()=>{URL.revokeObjectURL(u.src),c()},u.src=URL.createObjectURL(new Blob([a],{type:"image/jpeg"}))});Promise.all([o(t),o(i)]).then(([a,l])=>{let c=a.width/a.height,u=l.width/l.height;if(c!==u){s("THREE.UltraHDRLoader Error: Aspect ratio mismatch between SDR and Gainmap images");return}let d=document.createElement("canvas"),f=d.getContext("2d",{willReadFrequently:!0,colorSpace:"srgb"});d.width=a.width,d.height=a.height,f.drawImage(l.source,0,0,l.width,l.height,0,0,a.width,a.height);let h=f.getImageData(0,0,a.width,a.height,{colorSpace:"srgb"});f.drawImage(a.source,0,0);let g=f.getImageData(0,0,a.width,a.height,{colorSpace:"srgb"}),y;this.type===qn?y=new Uint16Array(g.data.length).fill(23544):y=new Float32Array(g.data.length).fill(255);let m=Math.sqrt(Math.pow(1.8,e.hdrCapacityMax)),p=(Math.log2(m)-e.hdrCapacityMin)/(e.hdrCapacityMax-e.hdrCapacityMin),b=Math.min(Math.max(p,0),1),S=e.gamma===1;for(let E=0;E<g.data.length;E+=4){let A=E/4%a.width,C=Math.floor(E/4/a.width);for(let T=0;T<3;T++){let P=g.data[E+T],M=(C*a.width+A)*4+T,v=h.data[M]/255,I=S?v:Math.pow(v,1/e.gamma),W=e.gainMapMin*(1-I)+e.gainMapMax*I,H=(P+e.offsetSDR)*(W*b===0?1:Math.pow(2,W*b))-e.offsetHDR,q=Math.min(Math.max(this._srgbToLinear(H),0),65504);y[E+T]=this.type===qn?ta.toHalfFloat(q):q}}r(y,a.width,a.height)}).catch(()=>{throw new Error("THREE.UltraHDRLoader Error: Could not parse UltraHDR images")})}};var _R={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},EB=Jt(Ct({},_R),{"[class.ng-submitted]":"isSubmitted"});var vR=new Ke("",{providedIn:"root",factory:()=>z0}),z0="always";var xR=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Dr({type:n});static \u0275inj=br({})}return n})();var G0=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:vR,useValue:t.callSetDisabledState??z0}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=Dr({type:n});static \u0275inj=br({imports:[xR]})}return n})();var Ue=function(n){return n[n.State=0]="State",n[n.Transition=1]="Transition",n[n.Sequence=2]="Sequence",n[n.Group=3]="Group",n[n.Animate=4]="Animate",n[n.Keyframes=5]="Keyframes",n[n.Style=6]="Style",n[n.Trigger=7]="Trigger",n[n.Reference=8]="Reference",n[n.AnimateChild=9]="AnimateChild",n[n.AnimateRef=10]="AnimateRef",n[n.Query=11]="Query",n[n.Stagger=12]="Stagger",n}(Ue||{}),In="*";function Fu(n,e){return{type:Ue.Trigger,name:n,definitions:e,options:{}}}function Qs(n,e=null){return{type:Ue.Animate,styles:e,timings:n}}function W0(n,e=null){return{type:Ue.Sequence,steps:n,options:e}}function Xn(n){return{type:Ue.Style,styles:n,offset:null}}function hr(n,e,t){return{type:Ue.State,name:n,styles:e,options:t}}function eo(n,e,t=null){return{type:Ue.Transition,expr:n,animation:e,options:t}}var ci=class{_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_originalOnDoneFns=[];_originalOnStartFns=[];_started=!1;_destroyed=!1;_finished=!1;_position=0;parentPlayer=null;totalTime;constructor(e=0,t=0){this.totalTime=e+t}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}onStart(e){this._originalOnStartFns.push(e),this._onStartFns.push(e)}onDone(e){this._originalOnDoneFns.push(e),this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(e=>e()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(e){this._position=this.totalTime?e*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(e){let t=e=="start"?this._onStartFns:this._onDoneFns;t.forEach(i=>i()),t.length=0}},Xr=class{_onDoneFns=[];_onStartFns=[];_finished=!1;_started=!1;_destroyed=!1;_onDestroyFns=[];parentPlayer=null;totalTime=0;players;constructor(e){this.players=e;let t=0,i=0,r=0,s=this.players.length;s==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(o=>{o.onDone(()=>{++t==s&&this._onFinish()}),o.onDestroy(()=>{++i==s&&this._onDestroy()}),o.onStart(()=>{++r==s&&this._onStart()})}),this.totalTime=this.players.reduce((o,a)=>Math.max(o,a.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this.players.forEach(e=>e.init())}onStart(e){this._onStartFns.push(e)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(e=>e()),this._onStartFns=[])}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(e=>e.play())}pause(){this.players.forEach(e=>e.pause())}restart(){this.players.forEach(e=>e.restart())}finish(){this._onFinish(),this.players.forEach(e=>e.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(e=>e.destroy()),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this.players.forEach(e=>e.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(e){let t=e*this.totalTime;this.players.forEach(i=>{let r=i.totalTime?Math.min(1,t/i.totalTime):1;i.setPosition(r)})}getPosition(){let e=this.players.reduce((t,i)=>t===null||i.totalTime>t.totalTime?i:t,null);return e!=null?e.getPosition():0}beforeDestroy(){this.players.forEach(e=>{e.beforeDestroy&&e.beforeDestroy()})}triggerCallback(e){let t=e=="start"?this._onStartFns:this._onDoneFns;t.forEach(i=>i()),t.length=0}},to="!";function ER(n,e){if(n&1){let t=Io();Ie(0,"div",2),dn("click",function(){tn(t);let r=Vn();return nn(r.close())}),Re()}if(n&2){let t=Vn();Dt("@fadeOverlay",t.isOpen?"open":"closed")}}function MR(n,e){n&1&&Vt(0,"img",31)}function SR(n,e){n&1&&Vt(0,"img",32)}function bR(n,e){n&1&&Vt(0,"img",33)}function wR(n,e){n&1&&Vt(0,"img",34)}function TR(n,e){if(n&1){let t=Io();Ie(0,"div",3)(1,"div",4)(2,"h2"),Pe(3),Re(),Ie(4,"button",5),dn("click",function(){tn(t);let r=Vn();return nn(r.close())}),Vt(5,"img",6),Re()(),Vt(6,"hr",7),Ie(7,"div",8)(8,"div",9)(9,"span",10),Pe(10,"Sounds"),Re(),Ie(11,"div",11)(12,"button",5),dn("click",function(){tn(t);let r=Vn();return nn(r.onMusicToggleChange())}),Si(13,MR,1,0,"img",12)(14,SR,1,0,"img",13),Re(),Ie(15,"button",5),dn("click",function(){tn(t);let r=Vn();return nn(r.onSoundEffectsToggleChange())}),Si(16,bR,1,0,"img",14)(17,wR,1,0,"img",15),Re()()(),Ie(18,"div",16)(19,"h2",17),Pe(20," How to Play "),Re(),Ie(21,"p",18),Pe(22," Be the first to get **three marks in a row** \u2014 horizontally, vertically, or diagonally. "),Re(),Ie(23,"div",19)(24,"h3",20),Pe(25," Controls "),Re(),Ie(26,"ul",21)(27,"li",22)(28,"span",23),Pe(29,"\u25CF"),Re(),Ie(30,"div")(31,"strong",24),Pe(32,"Rotate:"),Re(),Pe(33," Click & Drag Mouse"),Re()(),Ie(34,"li",22)(35,"span",23),Pe(36,"\u25CF"),Re(),Ie(37,"div")(38,"strong",24),Pe(39,"Zoom:"),Re(),Pe(40," Scroll Mouse Wheel"),Re()()()(),Ie(41,"div")(42,"h3",25),Pe(43," Gameplay "),Re(),Ie(44,"ul",21)(45,"li",22)(46,"span",26),Pe(47,"1."),Re(),Ie(48,"div"),Pe(49,"Click "),Ie(50,"strong",24),Pe(51,"Start New Game"),Re(),Pe(52," to begin."),Re()(),Ie(53,"li",22)(54,"span",26),Pe(55,"2."),Re(),Ie(56,"div"),Pe(57,"Click any "),Ie(58,"strong",24),Pe(59,"empty sphere"),Re(),Pe(60," to place your mark. "),Re()(),Ie(61,"li",22)(62,"span",26),Pe(63,"3."),Re(),Ie(64,"div"),Pe(65,"The first player to "),Ie(66,"strong",24),Pe(67,"align three marks"),Re(),Pe(68," wins! "),Re()(),Ie(69,"li",22)(70,"span",26),Pe(71,"4."),Re(),Ie(72,"div"),Pe(73,"If all spheres are filled with no winner, the game is a "),Ie(74,"strong",24),Pe(75,"Draw"),Re(),Pe(76,"."),Re()()()(),Ie(77,"div",27)(78,"p",28)(79,"strong"),Pe(80,"Pro-Tip:"),Re(),Pe(81," Always rotate the board to see all angles! "),Re()()()(),Ie(82,"div",29)(83,"button",30),dn("click",function(){tn(t);let r=Vn();return nn(r.close())}),Pe(84),Re()()()}if(n&2){let t=Vn();Dt("@zoomDialog",t.isOpen?"open":"closed"),bt(3),Ar(t.title),bt(10),Dt("ngIf",t.musicEnabled),bt(),Dt("ngIf",!t.musicEnabled),bt(2),Dt("ngIf",t.soundEffectsEnabled),bt(),Dt("ngIf",!t.soundEffectsEnabled),bt(67),Ar(t.closeButtonText)}}var Na=class n{isOpen=!1;title="Dialog Title";closeButtonText="Close";initialMusicToggleState=!0;initialSoundEffectsToggleState=!0;closeDialog=new cn;musicToggleChange=new cn;soundEffectsToggleChange=new cn;musicEnabled=!0;soundEffectsEnabled=!0;ngOnInit(){this.musicEnabled=this.initialMusicToggleState,this.soundEffectsEnabled=this.initialSoundEffectsToggleState}open(){this.isOpen=!0,console.log("setting open")}close(){this.isOpen=!1,this.closeDialog.emit()}onMusicToggleChange(){this.musicEnabled=!this.musicEnabled,this.musicToggleChange.emit(this.musicEnabled)}onSoundEffectsToggleChange(){this.soundEffectsEnabled=!this.soundEffectsEnabled,this.soundEffectsToggleChange.emit(this.soundEffectsEnabled)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=gs({type:n,selectors:[["app-setting"]],inputs:{isOpen:"isOpen",title:"title",closeButtonText:"closeButtonText",initialMusicToggleState:"initialMusicToggleState",initialSoundEffectsToggleState:"initialSoundEffectsToggleState"},outputs:{closeDialog:"closeDialog",musicToggleChange:"musicToggleChange",soundEffectsToggleChange:"soundEffectsToggleChange"},decls:2,vars:2,consts:[["class","dialog-overlay",3,"click",4,"ngIf"],["class","dialog-container",4,"ngIf"],[1,"dialog-overlay",3,"click"],[1,"dialog-container"],[1,"dialog-header"],[1,"action-button","icon-button",3,"click"],["src","icon/close.svg","alt","Close",1,"action-icon","small-icon"],[1,"section-divider"],[1,"dialog-content"],[1,"flex","items-center","justify-between","mb-4"],[1,"text-white","text-base","tracking-wide"],[1,"flex","gap-2"],["src","icon/music-on.svg","alt","Music On","class","action-icon",4,"ngIf"],["src","icon/music-off.svg","alt","Music Off","class","action-icon",4,"ngIf"],["src","icon/volume-on.svg","alt","Sound On","class","action-icon",4,"ngIf"],["src","icon/volume-off.svg","alt","Sound Off","class","action-icon",4,"ngIf"],[1,"bg-gray-800","text-white","p-6","rounded-lg","shadow-xl","border","border-gray-600","max-w-md","mx-auto","font-sans"],[1,"text-2xl","font-bold","text-center","mb-4"],[1,"text-sm","text-center","text-gray-300","mb-5"],[1,"mb-5"],[1,"text-lg","font-semibold","text-teal-300","mb-2"],[1,"list-none","space-y-2","text-gray-200","text-sm"],[1,"flex","items-center"],[1,"text-teal-400","mr-2"],[1,"font-medium","text-white"],[1,"text-lg","font-semibold","text-pink-300","mb-2"],[1,"text-pink-400","mr-2"],[1,"mt-5","pt-4","border-t","border-gray-700"],[1,"text-center","text-amber-300","text-xs","bg-gray-900/50","p-3","rounded-md"],[1,"dialog-footer"],[1,"dialog-button",3,"click"],["src","icon/music-on.svg","alt","Music On",1,"action-icon"],["src","icon/music-off.svg","alt","Music Off",1,"action-icon"],["src","icon/volume-on.svg","alt","Sound On",1,"action-icon"],["src","icon/volume-off.svg","alt","Sound Off",1,"action-icon"]],template:function(t,i){t&1&&Si(0,ER,1,1,"div",0)(1,TR,85,7,"div",1),t&2&&(Dt("ngIf",i.isOpen),bt(),Dt("ngIf",i.isOpen))},dependencies:[ys,Po,G0],styles:['[_nghost-%COMP%]{position:absolute;inset:0;z-index:1000;display:flex;justify-content:center;align-items:center}.dialog-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#0000;display:flex;justify-content:center;align-items:center;z-index:999}.dialog-container[_ngcontent-%COMP%]{position:relative;z-index:1001;width:100%;max-width:500px;overflow:hidden;display:flex;flex-direction:column;width:90%;background-color:#ffffff1a;border:1px solid rgba(255,255,255,.1);border-radius:16px;-webkit-backdrop-filter:blur(30px);backdrop-filter:blur(30px);color:#fffc;box-shadow:0 4px 20px #0000001a}.dialog-header[_ngcontent-%COMP%]{padding:16px;color:#fff;display:flex;justify-content:space-between;align-items:center}.dialog-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:1.5em;font-family:JellyBounce,Arial,sans-serif}.dialog-close-button[_ngcontent-%COMP%]{background:none;border:none;color:#fff;font-size:1.8em;cursor:pointer;padding:0 5px;transition:color .2s ease-in-out}.dialog-close-button[_ngcontent-%COMP%]:hover{color:#ff6b6b}.dialog-content[_ngcontent-%COMP%]{padding:20px;flex-grow:1;color:#333;font-size:1.1em;line-height:1.6}.dialog-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:10px}.dialog-footer[_ngcontent-%COMP%]{padding:15px 20px;border-top:1px solid #e0e0e0;text-align:right}.dialog-button[_ngcontent-%COMP%]{background-color:#ff6b6b;color:#fff;border:none;padding:10px 20px;border-radius:8px;cursor:pointer;font-size:1em;transition:background-color .2s ease-in-out,transform .1s ease-in-out}.dialog-button[_ngcontent-%COMP%]:hover{background-color:#e65a5a;transform:translateY(-2px)}.dialog-button[_ngcontent-%COMP%]:active{transform:translateY(0)}.section-divider[_ngcontent-%COMP%]{border:0;height:1px;background-image:linear-gradient(to right,#0000,#0003,#0000);margin:0}h3[_ngcontent-%COMP%]{margin-top:25px;margin-bottom:15px;color:#3b82f6;font-size:1.3em;border-bottom:2px solid #e0e0e0;padding-bottom:5px}.setting-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:15px;padding:5px 0}.switch[_ngcontent-%COMP%]{position:relative;display:inline-block;width:60px;height:34px}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;width:0;height:0}.slider[_ngcontent-%COMP%]{position:absolute;cursor:pointer;inset:0;background-color:#ccc;-webkit-transition:.4s;transition:.4s;border-radius:34px}.slider[_ngcontent-%COMP%]:before{position:absolute;content:"";height:26px;width:26px;left:4px;bottom:4px;background-color:#fff;-webkit-transition:.4s;transition:.4s;border-radius:50%}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]{background-color:#3b82f6}input[_ngcontent-%COMP%]:focus + .slider[_ngcontent-%COMP%]{box-shadow:0 0 1px #3b82f6}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{-webkit-transform:translateX(26px);-ms-transform:translateX(26px);transform:translate(26px)}'],data:{animation:[Fu("zoomDialog",[hr("void",Xn({transform:"scale(0.5)",opacity:0})),hr("open",Xn({transform:"scale(1)",opacity:1})),hr("closed",Xn({transform:"scale(0.5)",opacity:0})),eo("void => open",[Qs("300ms ease-out")]),eo("open => closed",[Qs("200ms ease-in")])]),Fu("fadeOverlay",[hr("void",Xn({opacity:0})),hr("open",Xn({opacity:1})),hr("closed",Xn({opacity:0})),eo("void => open",[Qs("200ms ease-out")]),eo("open => closed",[Qs("150ms ease-in")])])]}})};var CR=["rendererCanvas"],DR=["hoverSound"],AR=["clickSound"],IR=["winSound"],RR=["drawSound"],NR=["bgSound"],jp=n=>({hidden:n}),$0=(n,e)=>({"player-x":n,"player-o":e});function PR(n,e){n&1&&Vt(0,"span",26)}function FR(n,e){n&1&&(Ie(0,"h1",27),Pe(1,"3D Tic-Tac-Toe"),Re())}function OR(n,e){if(n&1&&(Ie(0,"div",28),Pe(1," Current Player: "),Ie(2,"span",29),Pe(3),Re()()),n&2){let t=Vn();bt(2),Dt("ngClass",of(2,$0,t.currentPlayer==="X",t.currentPlayer==="O")),bt(),Ar(t.currentPlayer)}}function LR(n,e){if(n&1&&(Ie(0,"div",30),Pe(1," Player "),Ie(2,"span",29),Pe(3),Re(),Pe(4," wins! "),Re()),n&2){let t=Vn();bt(2),Dt("ngClass",of(2,$0,t.winner==="X",t.winner==="O")),bt(),Ar(t.winner)}}function kR(n,e){n&1&&(Ie(0,"div",31),Pe(1," It's a Draw! "),Re())}var Ou=class n{constructor(e){this.ngZone=e}rendererCanvas;hoverSoundRef;clickSoundRef;winSoundRef;drawSoundRef;bgSoundRef;projectDetailsDialog;scene;loader;camera;renderer;controls;isMusicEnabled=!0;isSoundEffectsEnabled=!0;raycaster;mouse;boardCubes=[];markerGroup;board=[];currentPlayer="X";winner=null;isDraw=!1;isGameStarted=!1;animationFrameId=null;clock=new Ea;gridSize=3;cellSize=2;cellSpacing=2;boardScaleAnimationActive=!1;boardScaleAnimationStartTime=0;boardScaleAnimationDuration=500;boardScaleInitial=.001;boardScaleFinal=1;boardScaleOvershoot=.1;boardScaleOvershootDuration=200;sphereAnimationData=[];winLineMesh=null;loading=!0;onHostWindowResize(){setTimeout(()=>{this.onWindowResize()})}ngAfterViewInit(){if(!this.rendererCanvas){console.error("Renderer canvas not available in ngAfterViewInit!");return}setTimeout(()=>{this.initThreeJS(),this.resetGameInternal(),this.animate(),this.rendererCanvas.nativeElement.addEventListener("click",this.onCanvasClick.bind(this)),this.toggleBackgroundMusic(this.isMusicEnabled)},0)}ngOnDestroy(){this.animationFrameId!==null&&cancelAnimationFrame(this.animationFrameId),this.rendererCanvas&&this.rendererCanvas.nativeElement&&this.rendererCanvas.nativeElement.removeEventListener("click",this.onCanvasClick.bind(this)),this.controls&&this.controls.dispose(),this.renderer&&this.renderer.dispose(),this.boardCubes.forEach(e=>{e.geometry&&e.geometry.dispose(),Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material&&e.material.dispose()}),this.boardCubes=[],this.markerGroup&&(this.markerGroup.children.slice().forEach(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose()),e instanceof wn&&(e.children.slice().forEach(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()}),e.clear())}),this.markerGroup.clear()),this.scene&&(this.scene.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose())}),this.scene.clear())}initThreeJS(){this.scene=new oa,this.loader=new Pu,this.loader.setDataType(An),this.loader.load("blue_photo_studio_4k.jpg",a=>{a.mapping=Ws,a.needsUpdate=!0,this.scene.background=a,this.scene.environment=a,this.loading=!1,this.createBoardCells(),this.boardScaleAnimationActive=!0,this.boardScaleAnimationStartTime=this.clock.getElapsedTime()*1e3});let e=this.rendererCanvas.nativeElement,t=e.clientWidth,i=e.clientHeight;t===0||i===0?(console.error("Canvas dimensions are 0. Ensure it's visible and has dimensions."),this.camera=new Ut(75,600/400,.1,1e3)):this.camera=new Ut(75,t/i,.1,1e3),this.camera.position.set(this.gridSize*this.cellSize*-2,this.gridSize*this.cellSize*2,this.gridSize*this.cellSize*2),this.camera.lookAt(0,0,0),this.renderer=new Au({canvas:e,antialias:!0}),this.renderer.setSize(t,i),this.renderer.setPixelRatio(window.devicePixelRatio);let r=new xa(16777215,.7);this.scene.add(r);let s=new zs(16777215,.9);s.position.set(8,15,10),this.scene.add(s);let o=new zs(16777215,.3);o.position.set(-8,5,-10),this.scene.add(o),this.controls=new Nu(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.minDistance=3,this.controls.maxDistance=40,this.controls.target.set(0,0,0),this.controls.update(),this.raycaster=new Ma,this.mouse=new pe,this.markerGroup=new wn,this.scene.add(this.markerGroup)}createBoardCells(){let t=-(this.gridSize*this.cellSize+(this.gridSize-1)*this.cellSpacing)/2+this.cellSize/2,i=new fa(this.cellSize/2,32,16);setTimeout(()=>{for(let r=0;r<this.gridSize;r++)for(let s=0;s<this.gridSize;s++)for(let o=0;o<this.gridSize;o++){let a=new Hs({color:15792383,transparent:!1,opacity:.9,transmission:1,roughness:0,metalness:0,clearcoat:1,clearcoatRoughness:.05,ior:1.31,sheen:0,reflectivity:.5,specularIntensity:1,specularColor:new We(16777215),thickness:5,envMap:this.scene.environment}),l=new Nt(i,a),c=r*(this.cellSize+this.cellSpacing)+t,u=s*(this.cellSize+this.cellSpacing)+t,d=o*(this.cellSize+this.cellSpacing)+t;l.position.set(c,u,d),l.userData={x:r,y:s,z:o,isCell:!0},this.boardCubes.push(l),this.scene.add(l),this.sphereAnimationData.push({mesh:l,initialPosition:new N(c,u,d),animationOffset:Math.random()*Math.PI*2})}},100)}animateWaterDroplets(e){if(this.boardScaleAnimationActive)return;let t=.08,i=2,r=.03,s=2.5;this.sphereAnimationData.forEach(o=>{let{mesh:a,initialPosition:l,animationOffset:c}=o;a.position.copy(l);let u=1+Math.sin(e*i+c)*t,d=Math.sin(e*s+c+Math.PI/2)*r;a.scale.set(u+d,u-d,u+d)})}resetGameInternal(){this.toggleBackgroundMusic(this.isMusicEnabled),this.board=[];for(let e=0;e<this.gridSize;e++){this.board[e]=[];for(let t=0;t<this.gridSize;t++){this.board[e][t]=[];for(let i=0;i<this.gridSize;i++)this.board[e][t][i]=null}}this.currentPlayer="X",this.winner=null,this.isDraw=!1,this.isGameStarted=!1,this.removeWinLine(),this.markerGroup.children.slice().forEach(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose()),e instanceof wn&&(e.children.slice().forEach(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()}),e.clear())}),this.markerGroup.clear()}resetGame(){this.ngZone.run(()=>{this.resetGameInternal(),this.playClickSound()})}onCanvasClick(e){if(this.winner||this.isDraw||!this.rendererCanvas||this.boardScaleAnimationActive)return;let t=this.rendererCanvas.nativeElement,i=t.getBoundingClientRect();this.mouse.x=(e.clientX-i.left)/t.clientWidth*2-1,this.mouse.y=-((e.clientY-i.top)/t.clientHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);let r=this.raycaster.intersectObjects(this.boardCubes,!1);if(r.length>0){let s=r[0].object;if(s instanceof Nt&&s.userData.isCell){let{x:o,y:a,z:l}=s.userData;this.ngZone.run(()=>{this.handleCellClick(o,a,l,s)})}}}handleCellClick(e,t,i,r){if(this.board[e][t][i]===null&&!this.winner){this.isGameStarted=!0,this.board[e][t][i]=this.currentPlayer,this.placeMarker(r.position);let s=r.material;s&&(s.opacity=.05);let o=this.checkWin(e,t,i);o?(this.winner=this.currentPlayer,this.drawWinLine(o),this.playWinSound()):this.checkDraw()?(this.isDraw=!0,this.playDrawSound()):this.currentPlayer=this.currentPlayer==="X"?"O":"X"}}removeWinLine(){this.winLineMesh&&(this.scene.remove(this.winLineMesh),this.winLineMesh.geometry&&this.winLineMesh.geometry.dispose(),this.winLineMesh.material&&this.winLineMesh.material.dispose(),this.winLineMesh=null)}placeMarker(e){this.playClickSound();let t,i=this.cellSize*.4;if(this.currentPlayer==="X")t=this.createXMarker(i*1.1);else{let r=new pa(i*.8,i*.2,16,100),s=new Br({color:3900150,roughness:.3,metalness:.4});t=new Nt(r,s)}t.position.copy(e),this.markerGroup.add(t)}createXMarker(e){let t=new wn,i=e*1.2,r=e*.2,s=new ca(r/2,i-r,4,8),o=new Br({color:16739179,roughness:.4,metalness:.3}),a=new Nt(s,o);a.rotation.z=Math.PI/4;let l=new Nt(s,o.clone());return l.rotation.z=-Math.PI/4,t.add(a),t.add(l),t}checkWin(e,t,i){let r=this.board[e][t][i];if(!r)return null;let s=this.gridSize,o=(l,c)=>{let u=0;for(let[d,f,h]of l)if(this.board[d][f][h]===r)u++;else break;return u===s?{type:c,start:l[0],end:l[s-1]}:null},a;return a=o(Array.from({length:s},(l,c)=>[c,t,i]),"rowX"),a||(a=o(Array.from({length:s},(l,c)=>[e,c,i]),"rowY"),a)||(a=o(Array.from({length:s},(l,c)=>[e,t,c]),"rowZ"),a)||t===i&&(a=o(Array.from({length:s},(l,c)=>[e,c,c]),"diagYZ1"),a)||t+i===s-1&&(a=o(Array.from({length:s},(l,c)=>[e,c,s-1-c]),"diagYZ2"),a)||e===i&&(a=o(Array.from({length:s},(l,c)=>[c,t,c]),"diagXZ1"),a)||e+i===s-1&&(a=o(Array.from({length:s},(l,c)=>[c,t,s-1-c]),"diagXZ2"),a)||e===t&&(a=o(Array.from({length:s},(l,c)=>[c,c,i]),"diagXY1"),a)||e+t===s-1&&(a=o(Array.from({length:s},(l,c)=>[c,s-1-c,i]),"diagXY2"),a)||e===t&&t===i&&(a=o(Array.from({length:s},(l,c)=>[c,c,c]),"diag3D_1"),a)||e+t===s-1&&t===i&&(a=o(Array.from({length:s},(l,c)=>[s-1-c,c,c]),"diag3D_2"),a)||e===i&&e+t===s-1&&(a=o(Array.from({length:s},(l,c)=>[c,s-1-c,c]),"diag3D_3"),a)||e===t&&t+i===s-1&&(a=o(Array.from({length:s},(l,c)=>[c,c,s-1-c]),"diag3D_4"),a)?a:null}drawWinLine(e){this.removeWinLine();let t=this.winner;if(!t)return;let i=t==="X"?16711680:255,s=-(this.gridSize*this.cellSize+(this.gridSize-1)*this.cellSpacing)/2+this.cellSize/2,o=m=>{let[p,b,S]=m;return new N(p*(this.cellSize+this.cellSpacing)+s,b*(this.cellSize+this.cellSpacing)+s,S*(this.cellSize+this.cellSpacing)+s)},a=o(e.start),l=o(e.end),c=new Vs([a,l]),u=this.cellSize*.1,d=128,f=64,h=!1,g=new ma(c,d,u,f,h),y=new Hs({color:i,transparent:!1,opacity:.2,transmission:1,roughness:0,metalness:0,clearcoat:1,clearcoatRoughness:.05,ior:1.31,sheen:0,reflectivity:.5,specularIntensity:1,specularColor:new We(16777215),thickness:2,envMap:this.scene.environment});this.winLineMesh=new Nt(g,y),this.scene.add(this.winLineMesh)}checkDraw(){for(let e=0;e<this.gridSize;e++)for(let t=0;t<this.gridSize;t++)for(let i=0;i<this.gridSize;i++)if(this.board[e][t][i]===null)return!1;return!0}animate(){this.ngZone.runOutsideAngular(()=>{let e=()=>{if(this.animationFrameId=requestAnimationFrame(e),this.renderer&&this.scene&&this.camera){this.controls&&this.controls.update(),this.markerGroup.children.forEach(i=>{i.rotation.y+=.05});let t=this.clock.getElapsedTime()*1e3;if(this.boardScaleAnimationActive){let i=Math.min(1,(t-this.boardScaleAnimationStartTime)/this.boardScaleAnimationDuration),r=this.boardScaleInitial+(this.boardScaleFinal-this.boardScaleInitial)*(.5-.5*Math.cos(i*Math.PI));if(!(i<1)){let s=Math.min(1,(t-(this.boardScaleAnimationStartTime+this.boardScaleAnimationDuration))/this.boardScaleOvershootDuration),o=Math.sin(s*Math.PI);r=this.boardScaleFinal+this.boardScaleOvershoot*o}this.boardCubes.forEach(s=>{s.scale.set(r,r,r)}),i>=1&&t-(this.boardScaleAnimationStartTime+this.boardScaleAnimationDuration)>=this.boardScaleOvershootDuration&&(this.boardScaleAnimationActive=!1,this.controls.enabled=!0,this.boardCubes.forEach(s=>{s.scale.set(this.boardScaleFinal,this.boardScaleFinal,this.boardScaleFinal)})),this.controls.update()}else this.controls&&this.controls.update(),this.animateWaterDroplets(this.clock.getElapsedTime());this.renderer.render(this.scene,this.camera)}else this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null)};e()})}onWindowResize(){if(!this.camera||!this.renderer||!this.rendererCanvas||!this.rendererCanvas.nativeElement)return;let e=this.rendererCanvas.nativeElement;this.ngZone.runOutsideAngular(()=>{let t=e.clientWidth,i=e.clientHeight;if(t===0||i===0){console.warn("onWindowResize: Canvas dimensions are 0. Resize not applied.");return}this.camera.aspect=t/i,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,i)})}playClickSound(){this.playSound(this.clickSoundRef,this.isSoundEffectsEnabled)}playHoverSound(){this.playSound(this.hoverSoundRef,this.isSoundEffectsEnabled)}playWinSound(){this.playSound(this.winSoundRef,this.isSoundEffectsEnabled)}playDrawSound(){this.playSound(this.drawSoundRef,this.isSoundEffectsEnabled)}playSound(e,t){if(t&&e&&e.nativeElement){let i=e.nativeElement;i.pause(),i.currentTime=0,i.play().catch(r=>console.error("Error playing sound:",r))}}toggleBackgroundMusic(e){this.isMusicEnabled=e,this.bgSoundRef&&this.bgSoundRef.nativeElement&&(e?this.bgSoundRef.nativeElement.play().catch(t=>{console.error("Error playing background music:",t)}):(this.bgSoundRef.nativeElement.pause(),this.bgSoundRef.nativeElement.currentTime=0))}toggleSoundEffects(e){this.isSoundEffectsEnabled=e}openSettingMenu(){this.projectDetailsDialog&&this.projectDetailsDialog.open()}closeProjectDetailsDialog(){this.projectDetailsDialog&&this.projectDetailsDialog.close()}static \u0275fac=function(t){return new(t||n)(Mi(Rt))};static \u0275cmp=gs({type:n,selectors:[["app-game"]],viewQuery:function(t,i){if(t&1&&($i(CR,5),$i(DR,5),$i(AR,5),$i(IR,5),$i(RR,5),$i(NR,5),$i(Na,5)),t&2){let r;qi(r=Xi())&&(i.rendererCanvas=r.first),qi(r=Xi())&&(i.hoverSoundRef=r.first),qi(r=Xi())&&(i.clickSoundRef=r.first),qi(r=Xi())&&(i.winSoundRef=r.first),qi(r=Xi())&&(i.drawSoundRef=r.first),qi(r=Xi())&&(i.bgSoundRef=r.first),qi(r=Xi())&&(i.projectDetailsDialog=r.first)}},hostBindings:function(t,i){t&1&&dn("resize",function(){return i.onHostWindowResize()},!1,$y)},decls:41,vars:20,consts:[["rendererCanvas",""],["hoverSound",""],["clickSound",""],["winSound",""],["drawSound",""],["bgSound",""],["projectDetailsDialogRef",""],[1,"game-container"],["class","loader",4,"ngIf"],[1,"three-canvas",3,"ngClass"],[1,"game-ui",3,"hidden","ngClass"],["class","game-title",4,"ngIf"],[1,"game-status"],["style","margin-bottom: 16px;",4,"ngIf"],["class","message winner",4,"ngIf"],["class","message draw",4,"ngIf"],[1,"action-button",3,"mouseenter","click"],["src","audio/button-hover.wav","preload","auto"],["src","audio/button-click.mp3","preload","auto"],["src","audio/game-win.wav","preload","auto"],["src","audio/game-draw.mp3","preload","auto"],[1,"action-panel"],[1,"action-button","icon-button",3,"mouseenter","click"],["src","icon/setting.svg","alt","Setting Icon",1,"action-icon"],["src","audio/game-bg.mp3","loop","","preload","auto"],[1,"setting-dialog",3,"musicToggleChange","soundEffectsToggleChange","closeDialog","title","closeButtonText","initialMusicToggleState","initialSoundEffectsToggleState","ngClass"],[1,"loader"],[1,"game-title"],[2,"margin-bottom","16px"],[3,"ngClass"],[1,"message","winner"],[1,"message","draw"]],template:function(t,i){if(t&1){let r=Io();Ie(0,"div",7),Si(1,PR,1,0,"span",8),Vt(2,"canvas",9,0),Ie(4,"div",10),Si(5,FR,2,0,"h1",11),Ie(6,"div",12),Si(7,OR,4,5,"div",13)(8,LR,5,5,"div",14)(9,kR,2,0,"div",15),Ie(10,"button",16),dn("mouseenter",function(){return tn(r),nn(i.playHoverSound())})("click",function(){return tn(r),nn(i.resetGame())}),Pe(11),Re(),Vt(12,"audio",17,1)(14,"audio",18,2)(16,"audio",19,3)(18,"audio",20,4),Re(),Ie(20,"div",21)(21,"button",22),dn("mouseenter",function(){return tn(r),nn(i.playHoverSound())})("click",function(){return tn(r),i.playClickSound(),nn(i.openSettingMenu())}),Vt(22,"img",23),Re()()()(),Vt(23,"audio",24,5),Ie(25,"app-setting",25,6),dn("musicToggleChange",function(o){return tn(r),nn(i.toggleBackgroundMusic(o))})("soundEffectsToggleChange",function(o){return tn(r),nn(i.toggleSoundEffects(o))})("closeDialog",function(){return tn(r),nn(i.playClickSound())}),Ie(27,"p"),Pe(28,"This is a 3D Tic-Tac-Toe game built with Angular and Three.js."),Re(),Ie(29,"p"),Pe(30," Objective: Be the first player to get three of your marks in a row, column, or diagonal across the 3x3x3 grid. "),Re(),Pe(31," Controls: "),Ie(32,"ul")(33,"li"),Pe(34,"Click on an empty sphere to place your marker."),Re(),Ie(35,"li"),Pe(36,"Drag to rotate the board."),Re(),Ie(37,"li"),Pe(38,"Scroll to zoom in/out."),Re()(),Ie(39,"p"),Pe(40,"Have fun!"),Re()()}if(t&2){let r=R_(26);bt(),Dt("ngIf",i.loading),bt(),Dt("ngClass",Ol(14,jp,i.loading)),bt(2),Dt("hidden",i.loading)("ngClass",Ol(16,jp,i.loading)),bt(),Dt("ngIf",!i.isGameStarted&&!i.winner&&!i.isDraw),bt(2),Dt("ngIf",i.isGameStarted&&!i.winner&&!i.isDraw),bt(),Dt("ngIf",i.winner),bt(),Dt("ngIf",i.isDraw),bt(2),Fl(" ",i.winner||i.isDraw?"Play Again":i.isGameStarted?"Reset Game":"Start New Game"," "),bt(14),Dt("title","Settings")("closeButtonText","Close")("initialMusicToggleState",i.isMusicEnabled)("initialSoundEffectsToggleState",i.isSoundEffectsEnabled)("ngClass",Ol(18,jp,!r.isOpen))}},dependencies:[ys,uf,Po,Na],styles:['[_nghost-%COMP%]{display:block;width:100vw;height:100vh;overflow:hidden;position:relative;font-family:JellyBounce,Segoe UI,Tahoma,Geneva,Verdana,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.hidden[_ngcontent-%COMP%]{opacity:0;visibility:hidden}.game-container[_ngcontent-%COMP%]{width:100%;height:100%;position:relative;display:flex;justify-content:center;align-items:center;background-color:#000}.three-canvas[_ngcontent-%COMP%]{display:block;width:100%!important;height:100%!important}.game-ui[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;pointer-events:none;color:#fff;text-shadow:0px 0px 8px rgba(0,0,0,.5);-webkit-user-select:none;user-select:none}.game-title[_ngcontent-%COMP%]{font-size:1.8em;margin-bottom:20px;color:#e0f2f7;text-transform:uppercase;letter-spacing:2px;font-weight:600;text-shadow:1px 1px 1px #919191,1px 2px 1px #919191,1px 3px 1px #919191,1px 4px 1px #919191,1px 5px 1px #919191,1px 6px 1px #919191,1px 7px 1px #919191,1px 8px 1px #919191,1px 9px 1px #919191,1px 10px 1px #919191,1px 18px 6px rgba(16,16,16,.4),1px 22px 10px rgba(16,16,16,.2),1px 25px 35px rgba(16,16,16,.2),1px 30px 60px rgba(16,16,16,.4)}.game-status[_ngcontent-%COMP%]{color:#fff;margin:10px auto;background-color:#ffffff0f;border:1px solid rgba(255,255,255,.1);border-radius:15px;padding:16px;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.player-x[_ngcontent-%COMP%]{color:#ff6b6b;font-weight:700}.player-o[_ngcontent-%COMP%]{color:#3b82f6;font-weight:700}.message[_ngcontent-%COMP%]{font-size:1.8em;font-weight:700;margin-bottom:15px}.message.winner[_ngcontent-%COMP%]{color:#72ef7d}.message.draw[_ngcontent-%COMP%]{color:#f7e072}@media (max-width: 768px){.game-title[_ngcontent-%COMP%]{font-size:2em}.game-status[_ngcontent-%COMP%]{font-size:1.2em;padding:10px 20px}.message[_ngcontent-%COMP%]{font-size:1.5em}.reset-button[_ngcontent-%COMP%]{font-size:1em;padding:10px 20px}}.loader[_ngcontent-%COMP%]{width:48px;height:48px;border-radius:50%;position:absolute;animation:_ngcontent-%COMP%_rotate 1s linear infinite}.loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after{content:"";box-sizing:border-box;position:absolute;inset:0;border-radius:50%;border:5px solid #FFF;animation:_ngcontent-%COMP%_prixClipFix 2s linear infinite}.loader[_ngcontent-%COMP%]:after{inset:8px;transform:rotate3d(90,90,0,180deg);border-color:#ff3d00}@keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes _ngcontent-%COMP%_prixClipFix{0%{clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}50%{clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}75%,to{clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}}.action-panel[_ngcontent-%COMP%]{position:absolute;top:16px;right:16px}.action-button[_ngcontent-%COMP%]{width:100%}']})};var Lu=class n{title="three-tic-tac-toe";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=gs({type:n,selectors:[["app-root"]],decls:1,vars:0,template:function(t,i){t&1&&Vt(0,"app-game")},dependencies:[Ou],encapsulation:2})};function q0(n){return new ue(3e3,!1)}function UR(){return new ue(3100,!1)}function BR(){return new ue(3101,!1)}function VR(n){return new ue(3001,!1)}function HR(n){return new ue(3003,!1)}function zR(n){return new ue(3004,!1)}function Y0(n,e){return new ue(3005,!1)}function Z0(){return new ue(3006,!1)}function K0(){return new ue(3007,!1)}function J0(n,e){return new ue(3008,!1)}function Q0(n){return new ue(3002,!1)}function ex(n,e,t,i,r){return new ue(3010,!1)}function tx(){return new ue(3011,!1)}function nx(){return new ue(3012,!1)}function ix(){return new ue(3200,!1)}function rx(){return new ue(3202,!1)}function sx(){return new ue(3013,!1)}function ox(n){return new ue(3014,!1)}function ax(n){return new ue(3015,!1)}function lx(n){return new ue(3016,!1)}function cx(n,e){return new ue(3404,!1)}function GR(n){return new ue(3502,!1)}function ux(n){return new ue(3503,!1)}function dx(){return new ue(3300,!1)}function hx(n){return new ue(3504,!1)}function fx(n){return new ue(3301,!1)}function px(n,e){return new ue(3302,!1)}function mx(n){return new ue(3303,!1)}function gx(n,e){return new ue(3400,!1)}function yx(n){return new ue(3401,!1)}function _x(n){return new ue(3402,!1)}function vx(n,e){return new ue(3505,!1)}function Bi(n){switch(n.length){case 0:return new ci;case 1:return n[0];default:return new Xr(n)}}function Yp(n,e,t=new Map,i=new Map){let r=[],s=[],o=-1,a=null;if(e.forEach(l=>{let c=l.get("offset"),u=c==o,d=u&&a||new Map;l.forEach((f,h)=>{let g=h,y=f;if(h!=="offset")switch(g=n.normalizePropertyName(g,r),y){case to:y=t.get(h);break;case In:y=i.get(h);break;default:y=n.normalizeStyleValue(h,g,y,r);break}d.set(g,y)}),u||s.push(d),a=d,o=c}),r.length)throw GR(r);return s}function ku(n,e,t,i){switch(e){case"start":n.onStart(()=>i(t&&$p(t,"start",n)));break;case"done":n.onDone(()=>i(t&&$p(t,"done",n)));break;case"destroy":n.onDestroy(()=>i(t&&$p(t,"destroy",n)));break}}function $p(n,e,t){let i=t.totalTime,r=!!t.disabled,s=Uu(n.element,n.triggerName,n.fromState,n.toState,e||n.phaseName,i??n.totalTime,r),o=n._data;return o!=null&&(s._data=o),s}function Uu(n,e,t,i,r="",s=0,o){return{element:n,triggerName:e,fromState:t,toState:i,phaseName:r,totalTime:s,disabled:!!o}}function on(n,e,t){let i=n.get(e);return i||n.set(e,i=t),i}function Zp(n){let e=n.indexOf(":"),t=n.substring(1,e),i=n.slice(e+1);return[t,i]}var WR=typeof document>"u"?null:document.documentElement;function Bu(n){let e=n.parentNode||n.host||null;return e===WR?null:e}function jR(n){return n.substring(1,6)=="ebkit"}var Yr=null,X0=!1;function xx(n){Yr||(Yr=$R()||{},X0=Yr.style?"WebkitAppearance"in Yr.style:!1);let e=!0;return Yr.style&&!jR(n)&&(e=n in Yr.style,!e&&X0&&(e="Webkit"+n.charAt(0).toUpperCase()+n.slice(1)in Yr.style)),e}function $R(){return typeof document<"u"?document.body:null}function Kp(n,e){for(;e;){if(e===n)return!0;e=Bu(e)}return!1}function Jp(n,e,t){if(t)return Array.from(n.querySelectorAll(e));let i=n.querySelector(e);return i?[i]:[]}var qR=1e3,Qp="{{",XR="}}",em="ng-enter",Vu="ng-leave",Pa="ng-trigger",Fa=".ng-trigger",tm="ng-animating",Hu=".ng-animating";function ui(n){if(typeof n=="number")return n;let e=n.match(/^(-?[\.\d]+)(m?s)/);return!e||e.length<2?0:qp(parseFloat(e[1]),e[2])}function qp(n,e){switch(e){case"s":return n*qR;default:return n}}function Oa(n,e,t){return n.hasOwnProperty("duration")?n:YR(n,e,t)}function YR(n,e,t){let i=/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i,r,s=0,o="";if(typeof n=="string"){let a=n.match(i);if(a===null)return e.push(q0(n)),{duration:0,delay:0,easing:""};r=qp(parseFloat(a[1]),a[2]);let l=a[3];l!=null&&(s=qp(parseFloat(l),a[4]));let c=a[5];c&&(o=c)}else r=n;if(!t){let a=!1,l=e.length;r<0&&(e.push(UR()),a=!0),s<0&&(e.push(BR()),a=!0),a&&e.splice(l,0,q0(n))}return{duration:r,delay:s,easing:o}}function Ex(n){return n.length?n[0]instanceof Map?n:n.map(e=>new Map(Object.entries(e))):[]}function Yn(n,e,t){e.forEach((i,r)=>{let s=zu(r);t&&!t.has(r)&&t.set(r,n.style[s]),n.style[s]=i})}function fr(n,e){e.forEach((t,i)=>{let r=zu(i);n.style[r]=""})}function no(n){return Array.isArray(n)?n.length==1?n[0]:W0(n):n}function Mx(n,e,t){let i=e.params||{},r=nm(n);r.length&&r.forEach(s=>{i.hasOwnProperty(s)||t.push(VR(s))})}var Xp=new RegExp(`${Qp}\\s*(.+?)\\s*${XR}`,"g");function nm(n){let e=[];if(typeof n=="string"){let t;for(;t=Xp.exec(n);)e.push(t[1]);Xp.lastIndex=0}return e}function io(n,e,t){let i=`${n}`,r=i.replace(Xp,(s,o)=>{let a=e[o];return a==null&&(t.push(HR(o)),a=""),a.toString()});return r==i?n:r}var ZR=/-+([a-z0-9])/g;function zu(n){return n.replace(ZR,(...e)=>e[1].toUpperCase())}function Sx(n,e){return n===0||e===0}function bx(n,e,t){if(t.size&&e.length){let i=e[0],r=[];if(t.forEach((s,o)=>{i.has(o)||r.push(o),i.set(o,s)}),r.length)for(let s=1;s<e.length;s++){let o=e[s];r.forEach(a=>o.set(a,Gu(n,a)))}}return e}function an(n,e,t){switch(e.type){case Ue.Trigger:return n.visitTrigger(e,t);case Ue.State:return n.visitState(e,t);case Ue.Transition:return n.visitTransition(e,t);case Ue.Sequence:return n.visitSequence(e,t);case Ue.Group:return n.visitGroup(e,t);case Ue.Animate:return n.visitAnimate(e,t);case Ue.Keyframes:return n.visitKeyframes(e,t);case Ue.Style:return n.visitStyle(e,t);case Ue.Reference:return n.visitReference(e,t);case Ue.AnimateChild:return n.visitAnimateChild(e,t);case Ue.AnimateRef:return n.visitAnimateRef(e,t);case Ue.Query:return n.visitQuery(e,t);case Ue.Stagger:return n.visitStagger(e,t);default:throw zR(e.type)}}function Gu(n,e){return window.getComputedStyle(n)[e]}var vm=(()=>{class n{validateStyleProperty(t){return xx(t)}containsElement(t,i){return Kp(t,i)}getParentElement(t){return Bu(t)}query(t,i,r){return Jp(t,i,r)}computeStyle(t,i,r){return r||""}animate(t,i,r,s,o,a=[],l){return new ci(r,s)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=pt({token:n,factory:n.\u0275fac})}return n})(),Kr=class{static NOOP=new vm},Jr=class{};var KR=new Set(["width","height","minWidth","minHeight","maxWidth","maxHeight","left","top","bottom","right","fontSize","outlineWidth","outlineOffset","paddingTop","paddingLeft","paddingBottom","paddingRight","marginTop","marginLeft","marginBottom","marginRight","borderRadius","borderWidth","borderTopWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","textIndent","perspective"]),Xu=class extends Jr{normalizePropertyName(e,t){return zu(e)}normalizeStyleValue(e,t,i,r){let s="",o=i.toString().trim();if(KR.has(t)&&i!==0&&i!=="0")if(typeof i=="number")s="px";else{let a=i.match(/^[+-]?[\d\.]+([a-z]*)$/);a&&a[1].length==0&&r.push(Y0(e,i))}return o+s}};var Yu="*";function JR(n,e){let t=[];return typeof n=="string"?n.split(/\s*,\s*/).forEach(i=>QR(i,t,e)):t.push(n),t}function QR(n,e,t){if(n[0]==":"){let l=eN(n,t);if(typeof l=="function"){e.push(l);return}n=l}let i=n.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(i==null||i.length<4)return t.push(ax(n)),e;let r=i[1],s=i[2],o=i[3];e.push(wx(r,o));let a=r==Yu&&o==Yu;s[0]=="<"&&!a&&e.push(wx(o,r))}function eN(n,e){switch(n){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(t,i)=>parseFloat(i)>parseFloat(t);case":decrement":return(t,i)=>parseFloat(i)<parseFloat(t);default:return e.push(lx(n)),"* => *"}}var Wu=new Set(["true","1"]),ju=new Set(["false","0"]);function wx(n,e){let t=Wu.has(n)||ju.has(n),i=Wu.has(e)||ju.has(e);return(r,s)=>{let o=n==Yu||n==r,a=e==Yu||e==s;return!o&&t&&typeof r=="boolean"&&(o=r?Wu.has(n):ju.has(n)),!a&&i&&typeof s=="boolean"&&(a=s?Wu.has(e):ju.has(e)),o&&a}}var Ox=":self",tN=new RegExp(`s*${Ox}s*,?`,"g");function Lx(n,e,t,i){return new lm(n).build(e,t,i)}var Tx="",lm=class{_driver;constructor(e){this._driver=e}build(e,t,i){let r=new cm(t);return this._resetContextStyleTimingState(r),an(this,no(e),r)}_resetContextStyleTimingState(e){e.currentQuerySelector=Tx,e.collectedStyles=new Map,e.collectedStyles.set(Tx,new Map),e.currentTime=0}visitTrigger(e,t){let i=t.queryCount=0,r=t.depCount=0,s=[],o=[];return e.name.charAt(0)=="@"&&t.errors.push(Z0()),e.definitions.forEach(a=>{if(this._resetContextStyleTimingState(t),a.type==Ue.State){let l=a,c=l.name;c.toString().split(/\s*,\s*/).forEach(u=>{l.name=u,s.push(this.visitState(l,t))}),l.name=c}else if(a.type==Ue.Transition){let l=this.visitTransition(a,t);i+=l.queryCount,r+=l.depCount,o.push(l)}else t.errors.push(K0())}),{type:Ue.Trigger,name:e.name,states:s,transitions:o,queryCount:i,depCount:r,options:null}}visitState(e,t){let i=this.visitStyle(e.styles,t),r=e.options&&e.options.params||null;if(i.containsDynamicStyles){let s=new Set,o=r||{};i.styles.forEach(a=>{a instanceof Map&&a.forEach(l=>{nm(l).forEach(c=>{o.hasOwnProperty(c)||s.add(c)})})}),s.size&&t.errors.push(J0(e.name,[...s.values()]))}return{type:Ue.State,name:e.name,style:i,options:r?{params:r}:null}}visitTransition(e,t){t.queryCount=0,t.depCount=0;let i=an(this,no(e.animation),t),r=JR(e.expr,t.errors);return{type:Ue.Transition,matchers:r,animation:i,queryCount:t.queryCount,depCount:t.depCount,options:Zr(e.options)}}visitSequence(e,t){return{type:Ue.Sequence,steps:e.steps.map(i=>an(this,i,t)),options:Zr(e.options)}}visitGroup(e,t){let i=t.currentTime,r=0,s=e.steps.map(o=>{t.currentTime=i;let a=an(this,o,t);return r=Math.max(r,t.currentTime),a});return t.currentTime=r,{type:Ue.Group,steps:s,options:Zr(e.options)}}visitAnimate(e,t){let i=sN(e.timings,t.errors);t.currentAnimateTimings=i;let r,s=e.styles?e.styles:Xn({});if(s.type==Ue.Keyframes)r=this.visitKeyframes(s,t);else{let o=e.styles,a=!1;if(!o){a=!0;let c={};i.easing&&(c.easing=i.easing),o=Xn(c)}t.currentTime+=i.duration+i.delay;let l=this.visitStyle(o,t);l.isEmptyStep=a,r=l}return t.currentAnimateTimings=null,{type:Ue.Animate,timings:i,style:r,options:null}}visitStyle(e,t){let i=this._makeStyleAst(e,t);return this._validateStyleAst(i,t),i}_makeStyleAst(e,t){let i=[],r=Array.isArray(e.styles)?e.styles:[e.styles];for(let a of r)typeof a=="string"?a===In?i.push(a):t.errors.push(Q0(a)):i.push(new Map(Object.entries(a)));let s=!1,o=null;return i.forEach(a=>{if(a instanceof Map&&(a.has("easing")&&(o=a.get("easing"),a.delete("easing")),!s)){for(let l of a.values())if(l.toString().indexOf(Qp)>=0){s=!0;break}}}),{type:Ue.Style,styles:i,easing:o,offset:e.offset,containsDynamicStyles:s,options:null}}_validateStyleAst(e,t){let i=t.currentAnimateTimings,r=t.currentTime,s=t.currentTime;i&&s>0&&(s-=i.duration+i.delay),e.styles.forEach(o=>{typeof o!="string"&&o.forEach((a,l)=>{let c=t.collectedStyles.get(t.currentQuerySelector),u=c.get(l),d=!0;u&&(s!=r&&s>=u.startTime&&r<=u.endTime&&(t.errors.push(ex(l,u.startTime,u.endTime,s,r)),d=!1),s=u.startTime),d&&c.set(l,{startTime:s,endTime:r}),t.options&&Mx(a,t.options,t.errors)})})}visitKeyframes(e,t){let i={type:Ue.Keyframes,styles:[],options:null};if(!t.currentAnimateTimings)return t.errors.push(tx()),i;let r=1,s=0,o=[],a=!1,l=!1,c=0,u=e.steps.map(p=>{let b=this._makeStyleAst(p,t),S=b.offset!=null?b.offset:rN(b.styles),E=0;return S!=null&&(s++,E=b.offset=S),l=l||E<0||E>1,a=a||E<c,c=E,o.push(E),b});l&&t.errors.push(nx()),a&&t.errors.push(ix());let d=e.steps.length,f=0;s>0&&s<d?t.errors.push(rx()):s==0&&(f=r/(d-1));let h=d-1,g=t.currentTime,y=t.currentAnimateTimings,m=y.duration;return u.forEach((p,b)=>{let S=f>0?b==h?1:f*b:o[b],E=S*m;t.currentTime=g+y.delay+E,y.duration=E,this._validateStyleAst(p,t),p.offset=S,i.styles.push(p)}),i}visitReference(e,t){return{type:Ue.Reference,animation:an(this,no(e.animation),t),options:Zr(e.options)}}visitAnimateChild(e,t){return t.depCount++,{type:Ue.AnimateChild,options:Zr(e.options)}}visitAnimateRef(e,t){return{type:Ue.AnimateRef,animation:this.visitReference(e.animation,t),options:Zr(e.options)}}visitQuery(e,t){let i=t.currentQuerySelector,r=e.options||{};t.queryCount++,t.currentQuery=e;let[s,o]=nN(e.selector);t.currentQuerySelector=i.length?i+" "+s:s,on(t.collectedStyles,t.currentQuerySelector,new Map);let a=an(this,no(e.animation),t);return t.currentQuery=null,t.currentQuerySelector=i,{type:Ue.Query,selector:s,limit:r.limit||0,optional:!!r.optional,includeSelf:o,animation:a,originalSelector:e.selector,options:Zr(e.options)}}visitStagger(e,t){t.currentQuery||t.errors.push(sx());let i=e.timings==="full"?{duration:0,delay:0,easing:"full"}:Oa(e.timings,t.errors,!0);return{type:Ue.Stagger,animation:an(this,no(e.animation),t),timings:i,options:null}}};function nN(n){let e=!!n.split(/\s*,\s*/).find(t=>t==Ox);return e&&(n=n.replace(tN,"")),n=n.replace(/@\*/g,Fa).replace(/@\w+/g,t=>Fa+"-"+t.slice(1)).replace(/:animating/g,Hu),[n,e]}function iN(n){return n?Ct({},n):null}var cm=class{errors;queryCount=0;depCount=0;currentTransition=null;currentQuery=null;currentQuerySelector=null;currentAnimateTimings=null;currentTime=0;collectedStyles=new Map;options=null;unsupportedCSSPropertiesFound=new Set;constructor(e){this.errors=e}};function rN(n){if(typeof n=="string")return null;let e=null;if(Array.isArray(n))n.forEach(t=>{if(t instanceof Map&&t.has("offset")){let i=t;e=parseFloat(i.get("offset")),i.delete("offset")}});else if(n instanceof Map&&n.has("offset")){let t=n;e=parseFloat(t.get("offset")),t.delete("offset")}return e}function sN(n,e){if(n.hasOwnProperty("duration"))return n;if(typeof n=="number"){let s=Oa(n,e).duration;return im(s,0,"")}let t=n;if(t.split(/\s+/).some(s=>s.charAt(0)=="{"&&s.charAt(1)=="{")){let s=im(0,0,"");return s.dynamic=!0,s.strValue=t,s}let r=Oa(t,e);return im(r.duration,r.delay,r.easing)}function Zr(n){return n?(n=Ct({},n),n.params&&(n.params=iN(n.params))):n={},n}function im(n,e,t){return{duration:n,delay:e,easing:t}}function xm(n,e,t,i,r,s,o=null,a=!1){return{type:1,element:n,keyframes:e,preStyleProps:t,postStyleProps:i,duration:r,delay:s,totalTime:r+s,easing:o,subTimeline:a}}var ka=class{_map=new Map;get(e){return this._map.get(e)||[]}append(e,t){let i=this._map.get(e);i||this._map.set(e,i=[]),i.push(...t)}has(e){return this._map.has(e)}clear(){this._map.clear()}},oN=1,aN=":enter",lN=new RegExp(aN,"g"),cN=":leave",uN=new RegExp(cN,"g");function kx(n,e,t,i,r,s=new Map,o=new Map,a,l,c=[]){return new um().buildKeyframes(n,e,t,i,r,s,o,a,l,c)}var um=class{buildKeyframes(e,t,i,r,s,o,a,l,c,u=[]){c=c||new ka;let d=new dm(e,t,c,r,s,u,[]);d.options=l;let f=l.delay?ui(l.delay):0;d.currentTimeline.delayNextStep(f),d.currentTimeline.setStyles([o],null,d.errors,l),an(this,i,d);let h=d.timelines.filter(g=>g.containsAnimation());if(h.length&&a.size){let g;for(let y=h.length-1;y>=0;y--){let m=h[y];if(m.element===t){g=m;break}}g&&!g.allowOnlyTimelineStyles()&&g.setStyles([a],null,d.errors,l)}return h.length?h.map(g=>g.buildKeyframes()):[xm(t,[],[],[],0,f,"",!1)]}visitTrigger(e,t){}visitState(e,t){}visitTransition(e,t){}visitAnimateChild(e,t){let i=t.subInstructions.get(t.element);if(i){let r=t.createSubContext(e.options),s=t.currentTimeline.currentTime,o=this._visitSubInstructions(i,r,r.options);s!=o&&t.transformIntoNewTimeline(o)}t.previousNode=e}visitAnimateRef(e,t){let i=t.createSubContext(e.options);i.transformIntoNewTimeline(),this._applyAnimationRefDelays([e.options,e.animation.options],t,i),this.visitReference(e.animation,i),t.transformIntoNewTimeline(i.currentTimeline.currentTime),t.previousNode=e}_applyAnimationRefDelays(e,t,i){for(let r of e){let s=r?.delay;if(s){let o=typeof s=="number"?s:ui(io(s,r?.params??{},t.errors));i.delayNextStep(o)}}}_visitSubInstructions(e,t,i){let s=t.currentTimeline.currentTime,o=i.duration!=null?ui(i.duration):null,a=i.delay!=null?ui(i.delay):null;return o!==0&&e.forEach(l=>{let c=t.appendInstructionToTimeline(l,o,a);s=Math.max(s,c.duration+c.delay)}),s}visitReference(e,t){t.updateOptions(e.options,!0),an(this,e.animation,t),t.previousNode=e}visitSequence(e,t){let i=t.subContextCount,r=t,s=e.options;if(s&&(s.params||s.delay)&&(r=t.createSubContext(s),r.transformIntoNewTimeline(),s.delay!=null)){r.previousNode.type==Ue.Style&&(r.currentTimeline.snapshotCurrentStyles(),r.previousNode=Zu);let o=ui(s.delay);r.delayNextStep(o)}e.steps.length&&(e.steps.forEach(o=>an(this,o,r)),r.currentTimeline.applyStylesToKeyframe(),r.subContextCount>i&&r.transformIntoNewTimeline()),t.previousNode=e}visitGroup(e,t){let i=[],r=t.currentTimeline.currentTime,s=e.options&&e.options.delay?ui(e.options.delay):0;e.steps.forEach(o=>{let a=t.createSubContext(e.options);s&&a.delayNextStep(s),an(this,o,a),r=Math.max(r,a.currentTimeline.currentTime),i.push(a.currentTimeline)}),i.forEach(o=>t.currentTimeline.mergeTimelineCollectedStyles(o)),t.transformIntoNewTimeline(r),t.previousNode=e}_visitTiming(e,t){if(e.dynamic){let i=e.strValue,r=t.params?io(i,t.params,t.errors):i;return Oa(r,t.errors)}else return{duration:e.duration,delay:e.delay,easing:e.easing}}visitAnimate(e,t){let i=t.currentAnimateTimings=this._visitTiming(e.timings,t),r=t.currentTimeline;i.delay&&(t.incrementTime(i.delay),r.snapshotCurrentStyles());let s=e.style;s.type==Ue.Keyframes?this.visitKeyframes(s,t):(t.incrementTime(i.duration),this.visitStyle(s,t),r.applyStylesToKeyframe()),t.currentAnimateTimings=null,t.previousNode=e}visitStyle(e,t){let i=t.currentTimeline,r=t.currentAnimateTimings;!r&&i.hasCurrentStyleProperties()&&i.forwardFrame();let s=r&&r.easing||e.easing;e.isEmptyStep?i.applyEmptyStep(s):i.setStyles(e.styles,s,t.errors,t.options),t.previousNode=e}visitKeyframes(e,t){let i=t.currentAnimateTimings,r=t.currentTimeline.duration,s=i.duration,a=t.createSubContext().currentTimeline;a.easing=i.easing,e.styles.forEach(l=>{let c=l.offset||0;a.forwardTime(c*s),a.setStyles(l.styles,l.easing,t.errors,t.options),a.applyStylesToKeyframe()}),t.currentTimeline.mergeTimelineCollectedStyles(a),t.transformIntoNewTimeline(r+s),t.previousNode=e}visitQuery(e,t){let i=t.currentTimeline.currentTime,r=e.options||{},s=r.delay?ui(r.delay):0;s&&(t.previousNode.type===Ue.Style||i==0&&t.currentTimeline.hasCurrentStyleProperties())&&(t.currentTimeline.snapshotCurrentStyles(),t.previousNode=Zu);let o=i,a=t.invokeQuery(e.selector,e.originalSelector,e.limit,e.includeSelf,!!r.optional,t.errors);t.currentQueryTotal=a.length;let l=null;a.forEach((c,u)=>{t.currentQueryIndex=u;let d=t.createSubContext(e.options,c);s&&d.delayNextStep(s),c===t.element&&(l=d.currentTimeline),an(this,e.animation,d),d.currentTimeline.applyStylesToKeyframe();let f=d.currentTimeline.currentTime;o=Math.max(o,f)}),t.currentQueryIndex=0,t.currentQueryTotal=0,t.transformIntoNewTimeline(o),l&&(t.currentTimeline.mergeTimelineCollectedStyles(l),t.currentTimeline.snapshotCurrentStyles()),t.previousNode=e}visitStagger(e,t){let i=t.parentContext,r=t.currentTimeline,s=e.timings,o=Math.abs(s.duration),a=o*(t.currentQueryTotal-1),l=o*t.currentQueryIndex;switch(s.duration<0?"reverse":s.easing){case"reverse":l=a-l;break;case"full":l=i.currentStaggerTime;break}let u=t.currentTimeline;l&&u.delayNextStep(l);let d=u.currentTime;an(this,e.animation,t),t.previousNode=e,i.currentStaggerTime=r.currentTime-d+(r.startTime-i.currentTimeline.startTime)}},Zu={},dm=class n{_driver;element;subInstructions;_enterClassName;_leaveClassName;errors;timelines;parentContext=null;currentTimeline;currentAnimateTimings=null;previousNode=Zu;subContextCount=0;options={};currentQueryIndex=0;currentQueryTotal=0;currentStaggerTime=0;constructor(e,t,i,r,s,o,a,l){this._driver=e,this.element=t,this.subInstructions=i,this._enterClassName=r,this._leaveClassName=s,this.errors=o,this.timelines=a,this.currentTimeline=l||new Ku(this._driver,t,0),a.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(e,t){if(!e)return;let i=e,r=this.options;i.duration!=null&&(r.duration=ui(i.duration)),i.delay!=null&&(r.delay=ui(i.delay));let s=i.params;if(s){let o=r.params;o||(o=this.options.params={}),Object.keys(s).forEach(a=>{(!t||!o.hasOwnProperty(a))&&(o[a]=io(s[a],o,this.errors))})}}_copyOptions(){let e={};if(this.options){let t=this.options.params;if(t){let i=e.params={};Object.keys(t).forEach(r=>{i[r]=t[r]})}}return e}createSubContext(e=null,t,i){let r=t||this.element,s=new n(this._driver,r,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(r,i||0));return s.previousNode=this.previousNode,s.currentAnimateTimings=this.currentAnimateTimings,s.options=this._copyOptions(),s.updateOptions(e),s.currentQueryIndex=this.currentQueryIndex,s.currentQueryTotal=this.currentQueryTotal,s.parentContext=this,this.subContextCount++,s}transformIntoNewTimeline(e){return this.previousNode=Zu,this.currentTimeline=this.currentTimeline.fork(this.element,e),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(e,t,i){let r={duration:t??e.duration,delay:this.currentTimeline.currentTime+(i??0)+e.delay,easing:""},s=new hm(this._driver,e.element,e.keyframes,e.preStyleProps,e.postStyleProps,r,e.stretchStartingKeyframe);return this.timelines.push(s),r}incrementTime(e){this.currentTimeline.forwardTime(this.currentTimeline.duration+e)}delayNextStep(e){e>0&&this.currentTimeline.delayNextStep(e)}invokeQuery(e,t,i,r,s,o){let a=[];if(r&&a.push(this.element),e.length>0){e=e.replace(lN,"."+this._enterClassName),e=e.replace(uN,"."+this._leaveClassName);let l=i!=1,c=this._driver.query(this.element,e,l);i!==0&&(c=i<0?c.slice(c.length+i,c.length):c.slice(0,i)),a.push(...c)}return!s&&a.length==0&&o.push(ox(t)),a}},Ku=class n{_driver;element;startTime;_elementTimelineStylesLookup;duration=0;easing=null;_previousKeyframe=new Map;_currentKeyframe=new Map;_keyframes=new Map;_styleSummary=new Map;_localTimelineStyles=new Map;_globalTimelineStyles;_pendingStyles=new Map;_backFill=new Map;_currentEmptyStepKeyframe=null;constructor(e,t,i,r){this._driver=e,this.element=t,this.startTime=i,this._elementTimelineStylesLookup=r,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(t),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(t,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(e){let t=this._keyframes.size===1&&this._pendingStyles.size;this.duration||t?(this.forwardTime(this.currentTime+e),t&&this.snapshotCurrentStyles()):this.startTime+=e}fork(e,t){return this.applyStylesToKeyframe(),new n(this._driver,e,t||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=oN,this._loadKeyframe()}forwardTime(e){this.applyStylesToKeyframe(),this.duration=e,this._loadKeyframe()}_updateStyle(e,t){this._localTimelineStyles.set(e,t),this._globalTimelineStyles.set(e,t),this._styleSummary.set(e,{time:this.currentTime,value:t})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(e){e&&this._previousKeyframe.set("easing",e);for(let[t,i]of this._globalTimelineStyles)this._backFill.set(t,i||In),this._currentKeyframe.set(t,In);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(e,t,i,r){t&&this._previousKeyframe.set("easing",t);let s=r&&r.params||{},o=dN(e,this._globalTimelineStyles);for(let[a,l]of o){let c=io(l,s,i);this._pendingStyles.set(a,c),this._localTimelineStyles.has(a)||this._backFill.set(a,this._globalTimelineStyles.get(a)??In),this._updateStyle(a,c)}}applyStylesToKeyframe(){this._pendingStyles.size!=0&&(this._pendingStyles.forEach((e,t)=>{this._currentKeyframe.set(t,e)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((e,t)=>{this._currentKeyframe.has(t)||this._currentKeyframe.set(t,e)}))}snapshotCurrentStyles(){for(let[e,t]of this._localTimelineStyles)this._pendingStyles.set(e,t),this._updateStyle(e,t)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){let e=[];for(let t in this._currentKeyframe)e.push(t);return e}mergeTimelineCollectedStyles(e){e._styleSummary.forEach((t,i)=>{let r=this._styleSummary.get(i);(!r||t.time>r.time)&&this._updateStyle(i,t.value)})}buildKeyframes(){this.applyStylesToKeyframe();let e=new Set,t=new Set,i=this._keyframes.size===1&&this.duration===0,r=[];this._keyframes.forEach((a,l)=>{let c=new Map([...this._backFill,...a]);c.forEach((u,d)=>{u===to?e.add(d):u===In&&t.add(d)}),i||c.set("offset",l/this.duration),r.push(c)});let s=[...e.values()],o=[...t.values()];if(i){let a=r[0],l=new Map(a);a.set("offset",0),l.set("offset",1),r=[a,l]}return xm(this.element,r,s,o,this.duration,this.startTime,this.easing,!1)}},hm=class extends Ku{keyframes;preStyleProps;postStyleProps;_stretchStartingKeyframe;timings;constructor(e,t,i,r,s,o,a=!1){super(e,t,o.delay),this.keyframes=i,this.preStyleProps=r,this.postStyleProps=s,this._stretchStartingKeyframe=a,this.timings={duration:o.duration,delay:o.delay,easing:o.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let e=this.keyframes,{delay:t,duration:i,easing:r}=this.timings;if(this._stretchStartingKeyframe&&t){let s=[],o=i+t,a=t/o,l=new Map(e[0]);l.set("offset",0),s.push(l);let c=new Map(e[0]);c.set("offset",Cx(a)),s.push(c);let u=e.length-1;for(let d=1;d<=u;d++){let f=new Map(e[d]),h=f.get("offset"),g=t+h*i;f.set("offset",Cx(g/o)),s.push(f)}i=o,t=0,r="",e=s}return xm(this.element,e,this.preStyleProps,this.postStyleProps,i,t,r,!0)}};function Cx(n,e=3){let t=Math.pow(10,e-1);return Math.round(n*t)/t}function dN(n,e){let t=new Map,i;return n.forEach(r=>{if(r==="*"){i??=e.keys();for(let s of i)t.set(s,In)}else for(let[s,o]of r)t.set(s,o)}),t}function Dx(n,e,t,i,r,s,o,a,l,c,u,d,f){return{type:0,element:n,triggerName:e,isRemovalTransition:r,fromState:t,fromStyles:s,toState:i,toStyles:o,timelines:a,queriedElements:l,preStyleProps:c,postStyleProps:u,totalTime:d,errors:f}}var rm={},Ju=class{_triggerName;ast;_stateStyles;constructor(e,t,i){this._triggerName=e,this.ast=t,this._stateStyles=i}match(e,t,i,r){return hN(this.ast.matchers,e,t,i,r)}buildStyles(e,t,i){let r=this._stateStyles.get("*");return e!==void 0&&(r=this._stateStyles.get(e?.toString())||r),r?r.buildStyles(t,i):new Map}build(e,t,i,r,s,o,a,l,c,u){let d=[],f=this.ast.options&&this.ast.options.params||rm,h=a&&a.params||rm,g=this.buildStyles(i,h,d),y=l&&l.params||rm,m=this.buildStyles(r,y,d),p=new Set,b=new Map,S=new Map,E=r==="void",A={params:Ux(y,f),delay:this.ast.options?.delay},C=u?[]:kx(e,t,this.ast.animation,s,o,g,m,A,c,d),T=0;return C.forEach(P=>{T=Math.max(P.duration+P.delay,T)}),d.length?Dx(t,this._triggerName,i,r,E,g,m,[],[],b,S,T,d):(C.forEach(P=>{let M=P.element,v=on(b,M,new Set);P.preStyleProps.forEach(W=>v.add(W));let I=on(S,M,new Set);P.postStyleProps.forEach(W=>I.add(W)),M!==t&&p.add(M)}),Dx(t,this._triggerName,i,r,E,g,m,C,[...p.values()],b,S,T))}};function hN(n,e,t,i,r){return n.some(s=>s(e,t,i,r))}function Ux(n,e){let t=Ct({},e);return Object.entries(n).forEach(([i,r])=>{r!=null&&(t[i]=r)}),t}var fm=class{styles;defaultParams;normalizer;constructor(e,t,i){this.styles=e,this.defaultParams=t,this.normalizer=i}buildStyles(e,t){let i=new Map,r=Ux(e,this.defaultParams);return this.styles.styles.forEach(s=>{typeof s!="string"&&s.forEach((o,a)=>{o&&(o=io(o,r,t));let l=this.normalizer.normalizePropertyName(a,t);o=this.normalizer.normalizeStyleValue(a,l,o,t),i.set(a,o)})}),i}};function fN(n,e,t){return new pm(n,e,t)}var pm=class{name;ast;_normalizer;transitionFactories=[];fallbackTransition;states=new Map;constructor(e,t,i){this.name=e,this.ast=t,this._normalizer=i,t.states.forEach(r=>{let s=r.options&&r.options.params||{};this.states.set(r.name,new fm(r.style,s,i))}),Ax(this.states,"true","1"),Ax(this.states,"false","0"),t.transitions.forEach(r=>{this.transitionFactories.push(new Ju(e,r,this.states))}),this.fallbackTransition=pN(e,this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(e,t,i,r){return this.transitionFactories.find(o=>o.match(e,t,i,r))||null}matchStyles(e,t,i){return this.fallbackTransition.buildStyles(e,t,i)}};function pN(n,e,t){let i=[(o,a)=>!0],r={type:Ue.Sequence,steps:[],options:null},s={type:Ue.Transition,animation:r,matchers:i,options:null,queryCount:0,depCount:0};return new Ju(n,s,e)}function Ax(n,e,t){n.has(e)?n.has(t)||n.set(t,n.get(e)):n.has(t)&&n.set(e,n.get(t))}var mN=new ka,mm=class{bodyNode;_driver;_normalizer;_animations=new Map;_playersById=new Map;players=[];constructor(e,t,i){this.bodyNode=e,this._driver=t,this._normalizer=i}register(e,t){let i=[],r=[],s=Lx(this._driver,t,i,r);if(i.length)throw ux(i);this._animations.set(e,s)}_buildPlayer(e,t,i){let r=e.element,s=Yp(this._normalizer,e.keyframes,t,i);return this._driver.animate(r,s,e.duration,e.delay,e.easing,[],!0)}create(e,t,i={}){let r=[],s=this._animations.get(e),o,a=new Map;if(s?(o=kx(this._driver,t,s,em,Vu,new Map,new Map,i,mN,r),o.forEach(u=>{let d=on(a,u.element,new Map);u.postStyleProps.forEach(f=>d.set(f,null))})):(r.push(dx()),o=[]),r.length)throw hx(r);a.forEach((u,d)=>{u.forEach((f,h)=>{u.set(h,this._driver.computeStyle(d,h,In))})});let l=o.map(u=>{let d=a.get(u.element);return this._buildPlayer(u,new Map,d)}),c=Bi(l);return this._playersById.set(e,c),c.onDestroy(()=>this.destroy(e)),this.players.push(c),c}destroy(e){let t=this._getPlayer(e);t.destroy(),this._playersById.delete(e);let i=this.players.indexOf(t);i>=0&&this.players.splice(i,1)}_getPlayer(e){let t=this._playersById.get(e);if(!t)throw fx(e);return t}listen(e,t,i,r){let s=Uu(t,"","","");return ku(this._getPlayer(e),i,s,r),()=>{}}command(e,t,i,r){if(i=="register"){this.register(e,r[0]);return}if(i=="create"){let o=r[0]||{};this.create(e,t,o);return}let s=this._getPlayer(e);switch(i){case"play":s.play();break;case"pause":s.pause();break;case"reset":s.reset();break;case"restart":s.restart();break;case"finish":s.finish();break;case"init":s.init();break;case"setPosition":s.setPosition(parseFloat(r[0]));break;case"destroy":this.destroy(e);break}}},Ix="ng-animate-queued",gN=".ng-animate-queued",sm="ng-animate-disabled",yN=".ng-animate-disabled",_N="ng-star-inserted",vN=".ng-star-inserted",xN=[],Bx={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},EN={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},Zn="__ng_removed",Ua=class{namespaceId;value;options;get params(){return this.options.params}constructor(e,t=""){this.namespaceId=t;let i=e&&e.hasOwnProperty("value"),r=i?e.value:e;if(this.value=SN(r),i){let s=e,{value:o}=s,a=Rm(s,["value"]);this.options=a}else this.options={};this.options.params||(this.options.params={})}absorbOptions(e){let t=e.params;if(t){let i=this.options.params;Object.keys(t).forEach(r=>{i[r]==null&&(i[r]=t[r])})}}},La="void",om=new Ua(La),gm=class{id;hostElement;_engine;players=[];_triggers=new Map;_queue=[];_elementListeners=new Map;_hostClassName;constructor(e,t,i){this.id=e,this.hostElement=t,this._engine=i,this._hostClassName="ng-tns-"+e,Rn(t,this._hostClassName)}listen(e,t,i,r){if(!this._triggers.has(t))throw px(i,t);if(i==null||i.length==0)throw mx(t);if(!bN(i))throw gx(i,t);let s=on(this._elementListeners,e,[]),o={name:t,phase:i,callback:r};s.push(o);let a=on(this._engine.statesByElement,e,new Map);return a.has(t)||(Rn(e,Pa),Rn(e,Pa+"-"+t),a.set(t,om)),()=>{this._engine.afterFlush(()=>{let l=s.indexOf(o);l>=0&&s.splice(l,1),this._triggers.has(t)||a.delete(t)})}}register(e,t){return this._triggers.has(e)?!1:(this._triggers.set(e,t),!0)}_getTrigger(e){let t=this._triggers.get(e);if(!t)throw yx(e);return t}trigger(e,t,i,r=!0){let s=this._getTrigger(t),o=new Ba(this.id,t,e),a=this._engine.statesByElement.get(e);a||(Rn(e,Pa),Rn(e,Pa+"-"+t),this._engine.statesByElement.set(e,a=new Map));let l=a.get(t),c=new Ua(i,this.id);if(!(i&&i.hasOwnProperty("value"))&&l&&c.absorbOptions(l.options),a.set(t,c),l||(l=om),!(c.value===La)&&l.value===c.value){if(!CN(l.params,c.params)){let y=[],m=s.matchStyles(l.value,l.params,y),p=s.matchStyles(c.value,c.params,y);y.length?this._engine.reportError(y):this._engine.afterFlush(()=>{fr(e,m),Yn(e,p)})}return}let f=on(this._engine.playersByElement,e,[]);f.forEach(y=>{y.namespaceId==this.id&&y.triggerName==t&&y.queued&&y.destroy()});let h=s.matchTransition(l.value,c.value,e,c.params),g=!1;if(!h){if(!r)return;h=s.fallbackTransition,g=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:t,transition:h,fromState:l,toState:c,player:o,isFallbackTransition:g}),g||(Rn(e,Ix),o.onStart(()=>{ro(e,Ix)})),o.onDone(()=>{let y=this.players.indexOf(o);y>=0&&this.players.splice(y,1);let m=this._engine.playersByElement.get(e);if(m){let p=m.indexOf(o);p>=0&&m.splice(p,1)}}),this.players.push(o),f.push(o),o}deregister(e){this._triggers.delete(e),this._engine.statesByElement.forEach(t=>t.delete(e)),this._elementListeners.forEach((t,i)=>{this._elementListeners.set(i,t.filter(r=>r.name!=e))})}clearElementCache(e){this._engine.statesByElement.delete(e),this._elementListeners.delete(e);let t=this._engine.playersByElement.get(e);t&&(t.forEach(i=>i.destroy()),this._engine.playersByElement.delete(e))}_signalRemovalForInnerTriggers(e,t){let i=this._engine.driver.query(e,Fa,!0);i.forEach(r=>{if(r[Zn])return;let s=this._engine.fetchNamespacesByElement(r);s.size?s.forEach(o=>o.triggerLeaveAnimation(r,t,!1,!0)):this.clearElementCache(r)}),this._engine.afterFlushAnimationsDone(()=>i.forEach(r=>this.clearElementCache(r)))}triggerLeaveAnimation(e,t,i,r){let s=this._engine.statesByElement.get(e),o=new Map;if(s){let a=[];if(s.forEach((l,c)=>{if(o.set(c,l.value),this._triggers.has(c)){let u=this.trigger(e,c,La,r);u&&a.push(u)}}),a.length)return this._engine.markElementAsRemoved(this.id,e,!0,t,o),i&&Bi(a).onDone(()=>this._engine.processLeaveNode(e)),!0}return!1}prepareLeaveAnimationListeners(e){let t=this._elementListeners.get(e),i=this._engine.statesByElement.get(e);if(t&&i){let r=new Set;t.forEach(s=>{let o=s.name;if(r.has(o))return;r.add(o);let l=this._triggers.get(o).fallbackTransition,c=i.get(o)||om,u=new Ua(La),d=new Ba(this.id,o,e);this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:o,transition:l,fromState:c,toState:u,player:d,isFallbackTransition:!0})})}}removeNode(e,t){let i=this._engine;if(e.childElementCount&&this._signalRemovalForInnerTriggers(e,t),this.triggerLeaveAnimation(e,t,!0))return;let r=!1;if(i.totalAnimations){let s=i.players.length?i.playersByQueriedElement.get(e):[];if(s&&s.length)r=!0;else{let o=e;for(;o=o.parentNode;)if(i.statesByElement.get(o)){r=!0;break}}}if(this.prepareLeaveAnimationListeners(e),r)i.markElementAsRemoved(this.id,e,!1,t);else{let s=e[Zn];(!s||s===Bx)&&(i.afterFlush(()=>this.clearElementCache(e)),i.destroyInnerAnimations(e),i._onRemovalComplete(e,t))}}insertNode(e,t){Rn(e,this._hostClassName)}drainQueuedTransitions(e){let t=[];return this._queue.forEach(i=>{let r=i.player;if(r.destroyed)return;let s=i.element,o=this._elementListeners.get(s);o&&o.forEach(a=>{if(a.name==i.triggerName){let l=Uu(s,i.triggerName,i.fromState.value,i.toState.value);l._data=e,ku(i.player,a.phase,l,a.callback)}}),r.markedForDestroy?this._engine.afterFlush(()=>{r.destroy()}):t.push(i)}),this._queue=[],t.sort((i,r)=>{let s=i.transition.ast.depCount,o=r.transition.ast.depCount;return s==0||o==0?s-o:this._engine.driver.containsElement(i.element,r.element)?1:-1})}destroy(e){this.players.forEach(t=>t.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,e)}},ym=class{bodyNode;driver;_normalizer;players=[];newHostElements=new Map;playersByElement=new Map;playersByQueriedElement=new Map;statesByElement=new Map;disabledNodes=new Set;totalAnimations=0;totalQueuedPlayers=0;_namespaceLookup={};_namespaceList=[];_flushFns=[];_whenQuietFns=[];namespacesByHostElement=new Map;collectedEnterElements=[];collectedLeaveElements=[];onRemovalComplete=(e,t)=>{};_onRemovalComplete(e,t){this.onRemovalComplete(e,t)}constructor(e,t,i){this.bodyNode=e,this.driver=t,this._normalizer=i}get queuedPlayers(){let e=[];return this._namespaceList.forEach(t=>{t.players.forEach(i=>{i.queued&&e.push(i)})}),e}createNamespace(e,t){let i=new gm(e,t,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,t)?this._balanceNamespaceList(i,t):(this.newHostElements.set(t,i),this.collectEnterElement(t)),this._namespaceLookup[e]=i}_balanceNamespaceList(e,t){let i=this._namespaceList,r=this.namespacesByHostElement;if(i.length-1>=0){let o=!1,a=this.driver.getParentElement(t);for(;a;){let l=r.get(a);if(l){let c=i.indexOf(l);i.splice(c+1,0,e),o=!0;break}a=this.driver.getParentElement(a)}o||i.unshift(e)}else i.push(e);return r.set(t,e),e}register(e,t){let i=this._namespaceLookup[e];return i||(i=this.createNamespace(e,t)),i}registerTrigger(e,t,i){let r=this._namespaceLookup[e];r&&r.register(t,i)&&this.totalAnimations++}destroy(e,t){e&&(this.afterFlush(()=>{}),this.afterFlushAnimationsDone(()=>{let i=this._fetchNamespace(e);this.namespacesByHostElement.delete(i.hostElement);let r=this._namespaceList.indexOf(i);r>=0&&this._namespaceList.splice(r,1),i.destroy(t),delete this._namespaceLookup[e]}))}_fetchNamespace(e){return this._namespaceLookup[e]}fetchNamespacesByElement(e){let t=new Set,i=this.statesByElement.get(e);if(i){for(let r of i.values())if(r.namespaceId){let s=this._fetchNamespace(r.namespaceId);s&&t.add(s)}}return t}trigger(e,t,i,r){if($u(t)){let s=this._fetchNamespace(e);if(s)return s.trigger(t,i,r),!0}return!1}insertNode(e,t,i,r){if(!$u(t))return;let s=t[Zn];if(s&&s.setForRemoval){s.setForRemoval=!1,s.setForMove=!0;let o=this.collectedLeaveElements.indexOf(t);o>=0&&this.collectedLeaveElements.splice(o,1)}if(e){let o=this._fetchNamespace(e);o&&o.insertNode(t,i)}r&&this.collectEnterElement(t)}collectEnterElement(e){this.collectedEnterElements.push(e)}markElementAsDisabled(e,t){t?this.disabledNodes.has(e)||(this.disabledNodes.add(e),Rn(e,sm)):this.disabledNodes.has(e)&&(this.disabledNodes.delete(e),ro(e,sm))}removeNode(e,t,i){if($u(t)){let r=e?this._fetchNamespace(e):null;r?r.removeNode(t,i):this.markElementAsRemoved(e,t,!1,i);let s=this.namespacesByHostElement.get(t);s&&s.id!==e&&s.removeNode(t,i)}else this._onRemovalComplete(t,i)}markElementAsRemoved(e,t,i,r,s){this.collectedLeaveElements.push(t),t[Zn]={namespaceId:e,setForRemoval:r,hasAnimation:i,removedBeforeQueried:!1,previousTriggersValues:s}}listen(e,t,i,r,s){return $u(t)?this._fetchNamespace(e).listen(t,i,r,s):()=>{}}_buildInstruction(e,t,i,r,s){return e.transition.build(this.driver,e.element,e.fromState.value,e.toState.value,i,r,e.fromState.options,e.toState.options,t,s)}destroyInnerAnimations(e){let t=this.driver.query(e,Fa,!0);t.forEach(i=>this.destroyActiveAnimationsForElement(i)),this.playersByQueriedElement.size!=0&&(t=this.driver.query(e,Hu,!0),t.forEach(i=>this.finishActiveQueriedAnimationOnElement(i)))}destroyActiveAnimationsForElement(e){let t=this.playersByElement.get(e);t&&t.forEach(i=>{i.queued?i.markedForDestroy=!0:i.destroy()})}finishActiveQueriedAnimationOnElement(e){let t=this.playersByQueriedElement.get(e);t&&t.forEach(i=>i.finish())}whenRenderingDone(){return new Promise(e=>{if(this.players.length)return Bi(this.players).onDone(()=>e());e()})}processLeaveNode(e){let t=e[Zn];if(t&&t.setForRemoval){if(e[Zn]=Bx,t.namespaceId){this.destroyInnerAnimations(e);let i=this._fetchNamespace(t.namespaceId);i&&i.clearElementCache(e)}this._onRemovalComplete(e,t.setForRemoval)}e.classList?.contains(sm)&&this.markElementAsDisabled(e,!1),this.driver.query(e,yN,!0).forEach(i=>{this.markElementAsDisabled(i,!1)})}flush(e=-1){let t=[];if(this.newHostElements.size&&(this.newHostElements.forEach((i,r)=>this._balanceNamespaceList(i,r)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let i=0;i<this.collectedEnterElements.length;i++){let r=this.collectedEnterElements[i];Rn(r,_N)}if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){let i=[];try{t=this._flushAnimations(i,e)}finally{for(let r=0;r<i.length;r++)i[r]()}}else for(let i=0;i<this.collectedLeaveElements.length;i++){let r=this.collectedLeaveElements[i];this.processLeaveNode(r)}if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(i=>i()),this._flushFns=[],this._whenQuietFns.length){let i=this._whenQuietFns;this._whenQuietFns=[],t.length?Bi(t).onDone(()=>{i.forEach(r=>r())}):i.forEach(r=>r())}}reportError(e){throw _x(e)}_flushAnimations(e,t){let i=new ka,r=[],s=new Map,o=[],a=new Map,l=new Map,c=new Map,u=new Set;this.disabledNodes.forEach(L=>{u.add(L);let U=this.driver.query(L,gN,!0);for(let F=0;F<U.length;F++)u.add(U[F])});let d=this.bodyNode,f=Array.from(this.statesByElement.keys()),h=Px(f,this.collectedEnterElements),g=new Map,y=0;h.forEach((L,U)=>{let F=em+y++;g.set(U,F),L.forEach(Y=>Rn(Y,F))});let m=[],p=new Set,b=new Set;for(let L=0;L<this.collectedLeaveElements.length;L++){let U=this.collectedLeaveElements[L],F=U[Zn];F&&F.setForRemoval&&(m.push(U),p.add(U),F.hasAnimation?this.driver.query(U,vN,!0).forEach(Y=>p.add(Y)):b.add(U))}let S=new Map,E=Px(f,Array.from(p));E.forEach((L,U)=>{let F=Vu+y++;S.set(U,F),L.forEach(Y=>Rn(Y,F))}),e.push(()=>{h.forEach((L,U)=>{let F=g.get(U);L.forEach(Y=>ro(Y,F))}),E.forEach((L,U)=>{let F=S.get(U);L.forEach(Y=>ro(Y,F))}),m.forEach(L=>{this.processLeaveNode(L)})});let A=[],C=[];for(let L=this._namespaceList.length-1;L>=0;L--)this._namespaceList[L].drainQueuedTransitions(t).forEach(F=>{let Y=F.player,ie=F.element;if(A.push(Y),this.collectedEnterElements.length){let ne=ie[Zn];if(ne&&ne.setForMove){if(ne.previousTriggersValues&&ne.previousTriggersValues.has(F.triggerName)){let ge=ne.previousTriggersValues.get(F.triggerName),Le=this.statesByElement.get(F.element);if(Le&&Le.has(F.triggerName)){let we=Le.get(F.triggerName);we.value=ge,Le.set(F.triggerName,we)}}Y.destroy();return}}let fe=!d||!this.driver.containsElement(d,ie),Te=S.get(ie),Ye=g.get(ie),G=this._buildInstruction(F,i,Ye,Te,fe);if(G.errors&&G.errors.length){C.push(G);return}if(fe){Y.onStart(()=>fr(ie,G.fromStyles)),Y.onDestroy(()=>Yn(ie,G.toStyles)),r.push(Y);return}if(F.isFallbackTransition){Y.onStart(()=>fr(ie,G.fromStyles)),Y.onDestroy(()=>Yn(ie,G.toStyles)),r.push(Y);return}let re=[];G.timelines.forEach(ne=>{ne.stretchStartingKeyframe=!0,this.disabledNodes.has(ne.element)||re.push(ne)}),G.timelines=re,i.append(ie,G.timelines);let xe={instruction:G,player:Y,element:ie};o.push(xe),G.queriedElements.forEach(ne=>on(a,ne,[]).push(Y)),G.preStyleProps.forEach((ne,ge)=>{if(ne.size){let Le=l.get(ge);Le||l.set(ge,Le=new Set),ne.forEach((we,dt)=>Le.add(dt))}}),G.postStyleProps.forEach((ne,ge)=>{let Le=c.get(ge);Le||c.set(ge,Le=new Set),ne.forEach((we,dt)=>Le.add(dt))})});if(C.length){let L=[];C.forEach(U=>{L.push(vx(U.triggerName,U.errors))}),A.forEach(U=>U.destroy()),this.reportError(L)}let T=new Map,P=new Map;o.forEach(L=>{let U=L.element;i.has(U)&&(P.set(U,U),this._beforeAnimationBuild(L.player.namespaceId,L.instruction,T))}),r.forEach(L=>{let U=L.element;this._getPreviousPlayers(U,!1,L.namespaceId,L.triggerName,null).forEach(Y=>{on(T,U,[]).push(Y),Y.destroy()})});let M=m.filter(L=>Fx(L,l,c)),v=new Map;Nx(v,this.driver,b,c,In).forEach(L=>{Fx(L,l,c)&&M.push(L)});let W=new Map;h.forEach((L,U)=>{Nx(W,this.driver,new Set(L),l,to)}),M.forEach(L=>{let U=v.get(L),F=W.get(L);v.set(L,new Map([...U?.entries()??[],...F?.entries()??[]]))});let H=[],q=[],Z={};o.forEach(L=>{let{element:U,player:F,instruction:Y}=L;if(i.has(U)){if(u.has(U)){F.onDestroy(()=>Yn(U,Y.toStyles)),F.disabled=!0,F.overrideTotalTime(Y.totalTime),r.push(F);return}let ie=Z;if(P.size>1){let Te=U,Ye=[];for(;Te=Te.parentNode;){let G=P.get(Te);if(G){ie=G;break}Ye.push(Te)}Ye.forEach(G=>P.set(G,ie))}let fe=this._buildAnimation(F.namespaceId,Y,T,s,W,v);if(F.setRealPlayer(fe),ie===Z)H.push(F);else{let Te=this.playersByElement.get(ie);Te&&Te.length&&(F.parentPlayer=Bi(Te)),r.push(F)}}else fr(U,Y.fromStyles),F.onDestroy(()=>Yn(U,Y.toStyles)),q.push(F),u.has(U)&&r.push(F)}),q.forEach(L=>{let U=s.get(L.element);if(U&&U.length){let F=Bi(U);L.setRealPlayer(F)}}),r.forEach(L=>{L.parentPlayer?L.syncPlayerEvents(L.parentPlayer):L.destroy()});for(let L=0;L<m.length;L++){let U=m[L],F=U[Zn];if(ro(U,Vu),F&&F.hasAnimation)continue;let Y=[];if(a.size){let fe=a.get(U);fe&&fe.length&&Y.push(...fe);let Te=this.driver.query(U,Hu,!0);for(let Ye=0;Ye<Te.length;Ye++){let G=a.get(Te[Ye]);G&&G.length&&Y.push(...G)}}let ie=Y.filter(fe=>!fe.destroyed);ie.length?wN(this,U,ie):this.processLeaveNode(U)}return m.length=0,H.forEach(L=>{this.players.push(L),L.onDone(()=>{L.destroy();let U=this.players.indexOf(L);this.players.splice(U,1)}),L.play()}),H}afterFlush(e){this._flushFns.push(e)}afterFlushAnimationsDone(e){this._whenQuietFns.push(e)}_getPreviousPlayers(e,t,i,r,s){let o=[];if(t){let a=this.playersByQueriedElement.get(e);a&&(o=a)}else{let a=this.playersByElement.get(e);if(a){let l=!s||s==La;a.forEach(c=>{c.queued||!l&&c.triggerName!=r||o.push(c)})}}return(i||r)&&(o=o.filter(a=>!(i&&i!=a.namespaceId||r&&r!=a.triggerName))),o}_beforeAnimationBuild(e,t,i){let r=t.triggerName,s=t.element,o=t.isRemovalTransition?void 0:e,a=t.isRemovalTransition?void 0:r;for(let l of t.timelines){let c=l.element,u=c!==s,d=on(i,c,[]);this._getPreviousPlayers(c,u,o,a,t.toState).forEach(h=>{let g=h.getRealPlayer();g.beforeDestroy&&g.beforeDestroy(),h.destroy(),d.push(h)})}fr(s,t.fromStyles)}_buildAnimation(e,t,i,r,s,o){let a=t.triggerName,l=t.element,c=[],u=new Set,d=new Set,f=t.timelines.map(g=>{let y=g.element;u.add(y);let m=y[Zn];if(m&&m.removedBeforeQueried)return new ci(g.duration,g.delay);let p=y!==l,b=TN((i.get(y)||xN).map(T=>T.getRealPlayer())).filter(T=>{let P=T;return P.element?P.element===y:!1}),S=s.get(y),E=o.get(y),A=Yp(this._normalizer,g.keyframes,S,E),C=this._buildPlayer(g,A,b);if(g.subTimeline&&r&&d.add(y),p){let T=new Ba(e,a,y);T.setRealPlayer(C),c.push(T)}return C});c.forEach(g=>{on(this.playersByQueriedElement,g.element,[]).push(g),g.onDone(()=>MN(this.playersByQueriedElement,g.element,g))}),u.forEach(g=>Rn(g,tm));let h=Bi(f);return h.onDestroy(()=>{u.forEach(g=>ro(g,tm)),Yn(l,t.toStyles)}),d.forEach(g=>{on(r,g,[]).push(h)}),h}_buildPlayer(e,t,i){return t.length>0?this.driver.animate(e.element,t,e.duration,e.delay,e.easing,i):new ci(e.duration,e.delay)}},Ba=class{namespaceId;triggerName;element;_player=new ci;_containsRealPlayer=!1;_queuedCallbacks=new Map;destroyed=!1;parentPlayer=null;markedForDestroy=!1;disabled=!1;queued=!0;totalTime=0;constructor(e,t,i){this.namespaceId=e,this.triggerName=t,this.element=i}setRealPlayer(e){this._containsRealPlayer||(this._player=e,this._queuedCallbacks.forEach((t,i)=>{t.forEach(r=>ku(e,i,void 0,r))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(e.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(e){this.totalTime=e}syncPlayerEvents(e){let t=this._player;t.triggerCallback&&e.onStart(()=>t.triggerCallback("start")),e.onDone(()=>this.finish()),e.onDestroy(()=>this.destroy())}_queueEvent(e,t){on(this._queuedCallbacks,e,[]).push(t)}onDone(e){this.queued&&this._queueEvent("done",e),this._player.onDone(e)}onStart(e){this.queued&&this._queueEvent("start",e),this._player.onStart(e)}onDestroy(e){this.queued&&this._queueEvent("destroy",e),this._player.onDestroy(e)}init(){this._player.init()}hasStarted(){return this.queued?!1:this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(e){this.queued||this._player.setPosition(e)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(e){let t=this._player;t.triggerCallback&&t.triggerCallback(e)}};function MN(n,e,t){let i=n.get(e);if(i){if(i.length){let r=i.indexOf(t);i.splice(r,1)}i.length==0&&n.delete(e)}return i}function SN(n){return n??null}function $u(n){return n&&n.nodeType===1}function bN(n){return n=="start"||n=="done"}function Rx(n,e){let t=n.style.display;return n.style.display=e??"none",t}function Nx(n,e,t,i,r){let s=[];t.forEach(l=>s.push(Rx(l)));let o=[];i.forEach((l,c)=>{let u=new Map;l.forEach(d=>{let f=e.computeStyle(c,d,r);u.set(d,f),(!f||f.length==0)&&(c[Zn]=EN,o.push(c))}),n.set(c,u)});let a=0;return t.forEach(l=>Rx(l,s[a++])),o}function Px(n,e){let t=new Map;if(n.forEach(a=>t.set(a,[])),e.length==0)return t;let i=1,r=new Set(e),s=new Map;function o(a){if(!a)return i;let l=s.get(a);if(l)return l;let c=a.parentNode;return t.has(c)?l=c:r.has(c)?l=i:l=o(c),s.set(a,l),l}return e.forEach(a=>{let l=o(a);l!==i&&t.get(l).push(a)}),t}function Rn(n,e){n.classList?.add(e)}function ro(n,e){n.classList?.remove(e)}function wN(n,e,t){Bi(t).onDone(()=>n.processLeaveNode(e))}function TN(n){let e=[];return Vx(n,e),e}function Vx(n,e){for(let t=0;t<n.length;t++){let i=n[t];i instanceof Xr?Vx(i.players,e):e.push(i)}}function CN(n,e){let t=Object.keys(n),i=Object.keys(e);if(t.length!=i.length)return!1;for(let r=0;r<t.length;r++){let s=t[r];if(!e.hasOwnProperty(s)||n[s]!==e[s])return!1}return!0}function Fx(n,e,t){let i=t.get(n);if(!i)return!1;let r=e.get(n);return r?i.forEach(s=>r.add(s)):e.set(n,i),t.delete(n),!0}var so=class{_driver;_normalizer;_transitionEngine;_timelineEngine;_triggerCache={};onRemovalComplete=(e,t)=>{};constructor(e,t,i){this._driver=t,this._normalizer=i,this._transitionEngine=new ym(e.body,t,i),this._timelineEngine=new mm(e.body,t,i),this._transitionEngine.onRemovalComplete=(r,s)=>this.onRemovalComplete(r,s)}registerTrigger(e,t,i,r,s){let o=e+"-"+r,a=this._triggerCache[o];if(!a){let l=[],c=[],u=Lx(this._driver,s,l,c);if(l.length)throw cx(r,l);a=fN(r,u,this._normalizer),this._triggerCache[o]=a}this._transitionEngine.registerTrigger(t,r,a)}register(e,t){this._transitionEngine.register(e,t)}destroy(e,t){this._transitionEngine.destroy(e,t)}onInsert(e,t,i,r){this._transitionEngine.insertNode(e,t,i,r)}onRemove(e,t,i){this._transitionEngine.removeNode(e,t,i)}disableAnimations(e,t){this._transitionEngine.markElementAsDisabled(e,t)}process(e,t,i,r){if(i.charAt(0)=="@"){let[s,o]=Zp(i),a=r;this._timelineEngine.command(s,t,o,a)}else this._transitionEngine.trigger(e,t,i,r)}listen(e,t,i,r,s){if(i.charAt(0)=="@"){let[o,a]=Zp(i);return this._timelineEngine.listen(o,t,a,s)}return this._transitionEngine.listen(e,t,i,r,s)}flush(e=-1){this._transitionEngine.flush(e)}get players(){return[...this._transitionEngine.players,...this._timelineEngine.players]}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}afterFlushAnimationsDone(e){this._transitionEngine.afterFlushAnimationsDone(e)}};function DN(n,e){let t=null,i=null;return Array.isArray(e)&&e.length?(t=am(e[0]),e.length>1&&(i=am(e[e.length-1]))):e instanceof Map&&(t=am(e)),t||i?new AN(n,t,i):null}var AN=(()=>{class n{_element;_startStyles;_endStyles;static initialStylesByElement=new WeakMap;_state=0;_initialStyles;constructor(t,i,r){this._element=t,this._startStyles=i,this._endStyles=r;let s=n.initialStylesByElement.get(t);s||n.initialStylesByElement.set(t,s=new Map),this._initialStyles=s}start(){this._state<1&&(this._startStyles&&Yn(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(Yn(this._element,this._initialStyles),this._endStyles&&(Yn(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(n.initialStylesByElement.delete(this._element),this._startStyles&&(fr(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(fr(this._element,this._endStyles),this._endStyles=null),Yn(this._element,this._initialStyles),this._state=3)}}return n})();function am(n){let e=null;return n.forEach((t,i)=>{IN(i)&&(e=e||new Map,e.set(i,t))}),e}function IN(n){return n==="display"||n==="position"}var Qu=class{element;keyframes;options;_specialStyles;_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_duration;_delay;_initialized=!1;_finished=!1;_started=!1;_destroyed=!1;_finalKeyframe;_originalOnDoneFns=[];_originalOnStartFns=[];domPlayer;time=0;parentPlayer=null;currentSnapshot=new Map;constructor(e,t,i,r){this.element=e,this.keyframes=t,this.options=i,this._specialStyles=r,this._duration=i.duration,this._delay=i.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this._buildPlayer(),this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return;this._initialized=!0;let e=this.keyframes;this.domPlayer=this._triggerWebAnimation(this.element,e,this.options),this._finalKeyframe=e.length?e[e.length-1]:new Map;let t=()=>this._onFinish();this.domPlayer.addEventListener("finish",t),this.onDestroy(()=>{this.domPlayer.removeEventListener("finish",t)})}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer.pause()}_convertKeyframesToObject(e){let t=[];return e.forEach(i=>{t.push(Object.fromEntries(i))}),t}_triggerWebAnimation(e,t,i){return e.animate(this._convertKeyframesToObject(t),i)}onStart(e){this._originalOnStartFns.push(e),this._onStartFns.push(e)}onDone(e){this._originalOnDoneFns.push(e),this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}play(){this._buildPlayer(),this.hasStarted()||(this._onStartFns.forEach(e=>e()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),this.domPlayer.play()}pause(){this.init(),this.domPlayer.pause()}finish(){this.init(),this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish()}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer&&this.domPlayer.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}setPosition(e){this.domPlayer===void 0&&this.init(),this.domPlayer.currentTime=e*this.time}getPosition(){return+(this.domPlayer.currentTime??0)/this.time}get totalTime(){return this._delay+this._duration}beforeDestroy(){let e=new Map;this.hasStarted()&&this._finalKeyframe.forEach((i,r)=>{r!=="offset"&&e.set(r,this._finished?i:Gu(this.element,r))}),this.currentSnapshot=e}triggerCallback(e){let t=e==="start"?this._onStartFns:this._onDoneFns;t.forEach(i=>i()),t.length=0}},ed=class{validateStyleProperty(e){return!0}validateAnimatableStyleProperty(e){return!0}containsElement(e,t){return Kp(e,t)}getParentElement(e){return Bu(e)}query(e,t,i){return Jp(e,t,i)}computeStyle(e,t,i){return Gu(e,t)}animate(e,t,i,r,s,o=[]){let a=r==0?"both":"forwards",l={duration:i,delay:r,fill:a};s&&(l.easing=s);let c=new Map,u=o.filter(h=>h instanceof Qu);Sx(i,r)&&u.forEach(h=>{h.currentSnapshot.forEach((g,y)=>c.set(y,g))});let d=Ex(t).map(h=>new Map(h));d=bx(e,d,c);let f=DN(e,d);return new Qu(e,d,l,f)}};var qu="@",Hx="@.disabled",td=class{namespaceId;delegate;engine;_onDestroy;\u0275type=0;constructor(e,t,i,r){this.namespaceId=e,this.delegate=t,this.engine=i,this._onDestroy=r}get data(){return this.delegate.data}destroyNode(e){this.delegate.destroyNode?.(e)}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.engine.afterFlushAnimationsDone(()=>{queueMicrotask(()=>{this.delegate.destroy()})}),this._onDestroy?.()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}appendChild(e,t){this.delegate.appendChild(e,t),this.engine.onInsert(this.namespaceId,t,e,!1)}insertBefore(e,t,i,r=!0){this.delegate.insertBefore(e,t,i),this.engine.onInsert(this.namespaceId,t,e,r)}removeChild(e,t,i){this.parentNode(t)&&this.engine.onRemove(this.namespaceId,t,this.delegate)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,i,r){this.delegate.setAttribute(e,t,i,r)}removeAttribute(e,t,i){this.delegate.removeAttribute(e,t,i)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,i,r){this.delegate.setStyle(e,t,i,r)}removeStyle(e,t,i){this.delegate.removeStyle(e,t,i)}setProperty(e,t,i){t.charAt(0)==qu&&t==Hx?this.disableAnimations(e,!!i):this.delegate.setProperty(e,t,i)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,i,r){return this.delegate.listen(e,t,i,r)}disableAnimations(e,t){this.engine.disableAnimations(e,t)}},_m=class extends td{factory;constructor(e,t,i,r,s){super(t,i,r,s),this.factory=e,this.namespaceId=t}setProperty(e,t,i){t.charAt(0)==qu?t.charAt(1)=="."&&t==Hx?(i=i===void 0?!0:!!i,this.disableAnimations(e,i)):this.engine.process(this.namespaceId,e,t.slice(1),i):this.delegate.setProperty(e,t,i)}listen(e,t,i,r){if(t.charAt(0)==qu){let s=RN(e),o=t.slice(1),a="";return o.charAt(0)!=qu&&([o,a]=NN(o)),this.engine.listen(this.namespaceId,s,o,a,l=>{let c=l._data||-1;this.factory.scheduleListenerCallback(c,i,l)})}return this.delegate.listen(e,t,i,r)}};function RN(n){switch(n){case"body":return document.body;case"document":return document;case"window":return window;default:return n}}function NN(n){let e=n.indexOf("."),t=n.substring(0,e),i=n.slice(e+1);return[t,i]}var nd=class{delegate;engine;_zone;_currentId=0;_microtaskId=1;_animationCallbacksBuffer=[];_rendererCache=new Map;_cdRecurDepth=0;constructor(e,t,i){this.delegate=e,this.engine=t,this._zone=i,t.onRemovalComplete=(r,s)=>{s?.removeChild(null,r)}}createRenderer(e,t){let i="",r=this.delegate.createRenderer(e,t);if(!e||!t?.data?.animation){let c=this._rendererCache,u=c.get(r);if(!u){let d=()=>c.delete(r);u=new td(i,r,this.engine,d),c.set(r,u)}return u}let s=t.id,o=t.id+"-"+this._currentId;this._currentId++,this.engine.register(o,e);let a=c=>{Array.isArray(c)?c.forEach(a):this.engine.registerTrigger(s,o,e,c.name,c)};return t.data.animation.forEach(a),new _m(this,o,r,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){queueMicrotask(()=>{this._microtaskId++})}scheduleListenerCallback(e,t,i){if(e>=0&&e<this._microtaskId){this._zone.run(()=>t(i));return}let r=this._animationCallbacksBuffer;r.length==0&&queueMicrotask(()=>{this._zone.run(()=>{r.forEach(s=>{let[o,a]=s;o(a)}),this._animationCallbacksBuffer=[]})}),r.push([t,i])}end(){this._cdRecurDepth--,this._cdRecurDepth==0&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}componentReplaced(e){this.engine.flush(),this.delegate.componentReplaced?.(e)}};var FN=(()=>{class n extends so{constructor(t,i,r){super(t,i,r)}ngOnDestroy(){this.flush()}static \u0275fac=function(i){return new(i||n)(nt(Mn),nt(Kr),nt(Jr))};static \u0275prov=pt({token:n,factory:n.\u0275fac})}return n})();function ON(){return new Xu}function LN(n,e,t){return new nd(n,e,t)}var zx=[{provide:Jr,useFactory:ON},{provide:so,useClass:FN},{provide:ji,useFactory:LN,deps:[Uo,so,Rt]}],fV=[{provide:Kr,useClass:vm},{provide:Uh,useValue:"NoopAnimations"},...zx],kN=[{provide:Kr,useFactory:()=>new ed},{provide:Uh,useFactory:()=>"BrowserAnimations"},...zx];function Gx(){return Vh("NgEagerAnimations"),[...kN]}vf(Lu,{providers:[Gx()]}).catch(n=>console.error(n));
