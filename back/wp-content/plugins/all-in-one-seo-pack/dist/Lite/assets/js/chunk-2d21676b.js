(window["aioseopjsonp"]=window["aioseopjsonp"]||[]).push([["chunk-2d21676b"],{c327:function(t,i,n){"use strict";n.r(i);var s=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[n("blur"),n("cta",{attrs:{"cta-link":t.$aioseo.urls.aio.featureManager+"&aioseo-activate=aioseo-link-assistant","cta-button-action":"","cta-button-loading":t.activationLoading,"same-tab":"","button-text":t.strings.ctaButtonText,"learn-more-link":t.$links.getDocUrl("link-assistant"),"feature-list":[t.strings.linkOpportunities,t.strings.domainReports,t.strings.orphanedPosts,t.strings.affiliateLinks]},on:{"cta-button-click":t.upgradeAddon},scopedSlots:t._u([{key:"header-text",fn:function(){return[t._v(" "+t._s(t.strings.ctaHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[n("core-alert",{attrs:{type:"yellow"}},[t._v(" "+t._s(t.strings.updateRequired)+" ")]),t.failed?n("core-alert",{attrs:{type:"red"}},[t._v(" "+t._s(t.strings.activateError)+" ")]):t._e(),t._v(" "+t._s(t.strings.ctaDescription)+" ")]},proxy:!0},{key:"learn-more-text",fn:function(){return[t._v(" "+t._s(t.strings.learnMoreText)+" ")]},proxy:!0}])})],1)},e=[],a=n("5530"),o=(n("d3b7"),n("3ca3"),n("ddb0"),n("2f62")),r=n("2585"),d={components:{Blur:r["default"]},data:function(){return{strings:{ctaButtonText:this.$t.__("Update Link Assistant",this.$tdPro),ctaHeader:this.$t.__("Enable Link Assistant on your Site",this.$tdPro),ctaDescription:this.$t.__("Get relevant suggestions for adding internal links to all your content as well as finding any orphaned posts that have no internal links.",this.$td),linkOpportunities:this.$t.__("Actionable Link Suggestions",this.$td),orphanedPosts:this.$t.__("See Orphaned Posts",this.$td),affiliateLinks:this.$t.__("See Affiliate Links",this.$td),domainReports:this.$t.__("Top Domain Reports",this.$td),activateError:this.$t.__("An error occurred while activating the addon. Please upload it manually or contact support for more information.",this.$td),permissionWarning:this.$t.__("You currently don't have permission to update this addon. Please ask a site administrator to update.",this.$td),updateRequired:this.$t.sprintf(this.$t.__("This addon requires an update. %1$s %2$s requires a minimum version of %3$s for the %4$s addon. You currently have %5$s installed.",this.$td),"AIOSEO","Pro",this.$addons.getAddon("aioseo-link-assistant").minimumVersion,"Link Assistant",this.$addons.getAddon("aioseo-link-assistant").installedVersion)},failed:!1,activationLoading:!1}},computed:Object(a["a"])({},Object(o["e"])("linkAssistant",["suggestionsScan"])),methods:Object(a["a"])(Object(a["a"])(Object(a["a"])(Object(a["a"])({},Object(o["b"])("linkAssistant",["getMenuData","pollSuggestionsScan"])),Object(o["b"])(["upgradePlugins"])),Object(o["d"])(["updateAddon"])),{},{upgradeAddon:function(){var t=this;this.failed=!1,this.activationLoading=!0;var i=this.$addons.getAddon("aioseo-link-assistant");this.upgradePlugins([{plugin:i.sku}]).then((function(n){if(n.body.failed.length)return t.activationLoading=!1,void(t.failed=!0);var s=[t.getMenuData()];Promise.all(s).then((function(){var s=n.body.completed[i.sku];t.activationLoading=!1,i.hasMinimumVersion=!0,i.isActive=!0,i.installedVersion=s.installedVersion,t.updateAddon(i),t.$isPro&&100!==t.suggestionsScan.percent&&t.pollSuggestionsScan()}))})).catch((function(){t.activationLoading=!1}))}})},l=d,u=n("2877"),c=Object(u["a"])(l,s,e,!1,null,null,null);i["default"]=c.exports}}]);