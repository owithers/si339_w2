if (self.CavalryLogger) { CavalryLogger.start_js(["4Cj4t"]); }

__d("Link.react",["AbstractLink.react","isBonfireURI","isFacebookURI","isMessengerDotComURI","killswitch","LinkshimHandlerConfig","React","URI"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;function h(a){return b("isFacebookURI")(a)||b("isMessengerDotComURI")(a)||b("isBonfireURI")(a)}function i(a){return a.getDomain().endsWith(".onion")}var j=/^(#|\/\w)/;function k(a){if(j.test(a))return!1;a=new(b("URI"))(a);var c=a.getProtocol();return(c==="http"||c==="https")&&!h(a)}var l=new RegExp("^(l|lm|h)\\..*$","i");function m(a){if(b("killswitch")("LINK_UPGRADE_UNSHIMMED_JS"))return null;if(a.getProtocol()!=="http")return null;if(!h(a))return null;return l.test(a.getDomain())?null:a.setProtocol("https")}g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.prototype.render=function(){__p&&__p();var a=this.props;a.allowunsafehref;var c=a.s,d=a.href,e=a.linkRef,f=a.target;a=babelHelpers.objectWithoutProperties(a,["allowunsafehref","s","href","linkRef","target"]);var g="#",h=null;d instanceof b("URI")?g=d.toString():typeof d==="string"&&d!==""&&d!=="#"?g=d:typeof d==="object"&&d!==null?(g=d.url.toString(),h=d.shimhash?d.shimhash.toString():h):(g="#",h=null);h==null&&k(g)&&(h=b("LinkshimHandlerConfig").link_react_default_hash);d=h!=null;var j=h!=null,l=!1,n=new(b("URI"))(g);b("LinkshimHandlerConfig").supports_meta_referrer&&(b("LinkshimHandlerConfig").onion_always_shim&&i(n)?j=!0:(c&&(j=!1),h!=null&&(l=!0)));c=b("LinkshimHandlerConfig").use_rel_no_opener&&h!==null&&f==="_blank";n=m(n);n!=null&&(g=n.toString());return b("React").createElement(b("AbstractLink.react"),babelHelpers["extends"]({},a,{href:g,linkRef:e,nofollow:d,noopener:c,shimhash:h,target:f,useRedirect:j,useMetaReferrer:l}))};function a(){g.apply(this,arguments)}e.exports=a}),null);