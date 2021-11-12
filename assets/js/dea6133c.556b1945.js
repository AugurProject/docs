"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[353],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),c=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(r),f=n,g=m["".concat(u,".").concat(f)]||m[f]||p[f]||o;return r?a.createElement(g,s(s({ref:t},l),{},{components:r})):a.createElement(g,s({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3351:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),s=["components"],i={title:"Getting Started",sidebar_position:2},u="SDK / Flask",c={unversionedId:"v2/flash",id:"v2/flash",isDocsHomePage:!1,title:"Getting Started",description:"The AugurV2 SDK was begun before good typescript wrappers existed.",source:"@site/docs/v2/flash.md",sourceDirName:"v2",slug:"/v2/flash",permalink:"/v2/flash",editUrl:"https://github.com/AugurProject/docs/edit/master/docs/v2/flash.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Getting Started",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Resources",permalink:"/v2"},next:{title:"Contract Overview",permalink:"/v2/contract-overview"}},l=[{value:"Flash Examples",id:"flash-examples",children:[],level:2},{value:"SDK Usage Example",id:"sdk-usage-example",children:[],level:2}],p={toc:l};function m(e){var t=e.components,r=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sdk--flask"},"SDK / Flask"),(0,o.kt)("p",null,"The AugurV2 SDK was begun before good typescript wrappers existed.\nSo while Augur Turbo uses TypeChain and Hardhat, AugurV2 uses custom wrappers.\nBelow is an example of how to set up the SDK.\nFor more information, see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AugurProject/augur/blob/dev/packages/augur-tools/src/flash/scripts.ts#L1373"},"flash scripts")," and especially the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AugurProject/augur/blob/dev/packages/augur-tools/src/libs/contract-api.ts"},"contract-api"),".\nThe flash setup for contract-api is done ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AugurProject/augur/blob/dev/packages/augur-tools/src/flash/flash.ts#L121"},"here"),"."),(0,o.kt)("h2",{id:"flash-examples"},"Flash Examples"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Get a list of all markets: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/AugurProject/augur/blob/dev/packages/augur-tools/src/flash/scripts.ts#L1930"},"markets")),(0,o.kt)("li",{parentName:"ul"},"Create a new market: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/AugurProject/augur/blob/dev/packages/augur-tools/src/flash/scripts.ts#L319"},"new-market")),(0,o.kt)("li",{parentName:"ul"},"Finalize a market: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/AugurProject/augur/blob/dev/packages/augur-tools/src/flash/scripts.ts#L1820"},"finalize")),(0,o.kt)("li",{parentName:"ul"},"Get the list of open orders for a market: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/AugurProject/augur/blob/dev/packages/augur-tools/src/flash/scripts.ts#L859"},"get-market-order-book")),(0,o.kt)("li",{parentName:"ul"},"Create an order: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/AugurProject/augur/blob/dev/packages/augur-tools/src/flash/scripts.ts#L1041"},"create-market-order")),(0,o.kt)("li",{parentName:"ul"},"Only take an existing order: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/AugurProject/augur/blob/dev/packages/augur-tools/src/flash/scripts.ts#L2417"},"take-order")),(0,o.kt)("li",{parentName:"ul"},"Report market resolution: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/AugurProject/augur/blob/dev/packages/augur-tools/src/flash/scripts.ts#L1641"},"initial-report")),(0,o.kt)("li",{parentName:"ul"},"Dispute market resolution: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/AugurProject/augur/blob/dev/packages/augur-tools/src/flash/scripts.ts#L1701"},"dispute"))),(0,o.kt)("h2",{id:"sdk-usage-example"},"SDK Usage Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// Import the contract interfaces if you want typing.\nimport { ContractInterfaces } from '@augurproject/core';\nimport { ContractAPI } from '@augurproject/tools\nimport { computeAddress } from 'ethers/utils' \n\n// Create the wrapper for making calls.\nconst privateKey = \"0x123456789\"; // your private key, starting with \"0x\"\nconst account = {\n  privateKey,\n  address: computeAddress(privateKey)\n};\nconst network = 1; // ethereum mainnet\nconst config = buildConfig(network)\nconst provider = await providerFromConfig(config);\nconst connector = new Connectors.SingleThreadConnector();\nconst user = ContractAPI.userWrapper(\n  account,\n  provider,\n  config,\n  connector\n);\n\n// Create object with typing for Market.sol ABI.\nconst market: ContractInterfaces.Market = await user.getMarketContract(\n  marketId\n);\n\n// Call read-only methods, which start with an underscore.\nawait market._getEndTime();\nawait market._isFinalized();\n\n// Call writing methods.\nawait market.finalize();\n")))}m.isMDXComponent=!0}}]);