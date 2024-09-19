(()=>{var e={};e.id=565,e.ids=[565],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},2594:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GlobalError:()=>o.a,__next_app__:()=>h,originalPathname:()=>m,pages:()=>c,routeModule:()=>u,tree:()=>d}),n(6826),n(1506),n(5866);var s=n(3191),r=n(8716),a=n(7922),o=n.n(a),i=n(5231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);n.d(t,l);let d=["",{children:["cart",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.bind(n,6826)),"/home/primotion/Documents/techmart/frontend/app/cart/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(n.bind(n,1506)),"/home/primotion/Documents/techmart/frontend/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(n.t.bind(n,5866,23)),"next/dist/client/components/not-found-error"]}],c=["/home/primotion/Documents/techmart/frontend/app/cart/page.tsx"],m="/cart/page",h={require:n,loadChunk:()=>Promise.resolve()},u=new s.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/cart/page",pathname:"/cart",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},8287:(e,t,n)=>{Promise.resolve().then(n.bind(n,1753))},8240:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,2994,23)),Promise.resolve().then(n.t.bind(n,6114,23)),Promise.resolve().then(n.t.bind(n,9727,23)),Promise.resolve().then(n.t.bind(n,9671,23)),Promise.resolve().then(n.t.bind(n,1868,23)),Promise.resolve().then(n.t.bind(n,4759,23))},3394:()=>{},1753:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>m});var s=n(326),r=n(7577),a=n(2881);let o=(0,a.Z)("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);var i=n(1019),l=n(3855);let d=(0,a.Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var c=n(434);function m(){let[e,t]=(0,r.useState)([{id:1,name:"Ultra-Slim Laptop Pro X1",price:1299.99,quantity:1,image:"https://g-ycrmd35tgas.vusercontent.net/placeholder.svg?height=100&width=100&text=Laptop"},{id:2,name:"Wireless Noise-Cancelling Headphones",price:249.99,quantity:2,image:"https://g-ycrmd35tgas.vusercontent.net/placeholder.svg?height=100&width=100&text=Headphones"},{id:3,name:"4K Ultra HD Smart TV",price:799.99,quantity:1,image:"https://g-ycrmd35tgas.vusercontent.net/placeholder.svg?height=100&width=100&text=TV"}]),n=(n,s)=>{t(e.map(e=>e.id===n?{...e,quantity:Math.max(0,s)}:e).filter(e=>e.quantity>0))},a=n=>{t(e.filter(e=>e.id!==n))},m=e.reduce((e,t)=>e+t.price*t.quantity,0);return(0,s.jsxs)(s.Fragment,{children:[s.jsx(Object(function(){var e=Error("Cannot find module '@/components/ui/custom/navbar'");throw e.code="MODULE_NOT_FOUND",e}()),{}),(0,s.jsxs)("div",{className:"container mx-auto px-4 py-8",children:[s.jsx("h1",{className:"text-3xl font-bold mb-8",children:"Your Shopping Cart"}),(0,s.jsxs)("div",{className:"flex flex-col lg:flex-row gap-8",children:[s.jsx("div",{className:"lg:w-2/3",children:0===e.length?(0,s.jsxs)("div",{className:"text-center py-8",children:[s.jsx(o,{className:"mx-auto h-16 w-16 text-gray-400 mb-4"}),s.jsx("h2",{className:"text-2xl font-semibold mb-2",children:"Your cart is empty"}),s.jsx("p",{className:"text-gray-600 mb-4",children:"Looks like you haven't added any items to your cart yet."}),s.jsx(Object(function(){var e=Error("Cannot find module '@/components/ui/button'");throw e.code="MODULE_NOT_FOUND",e}()),{asChild:!0,children:s.jsx(c.default,{href:"/",children:"Start Shopping"})})]}):s.jsx("ul",{className:"divide-y divide-gray-200",children:e.map(e=>(0,s.jsxs)("li",{className:"py-6 flex",children:[s.jsx("div",{className:"flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden",children:s.jsx("img",{src:e.image,alt:e.name,className:"w-full h-full object-center object-cover"})}),(0,s.jsxs)("div",{className:"ml-4 flex-1 flex flex-col",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex justify-between text-base font-medium text-gray-900",children:[s.jsx("h3",{children:e.name}),(0,s.jsxs)("p",{className:"ml-4",children:["$",(e.price*e.quantity).toFixed(2)]})]}),(0,s.jsxs)("p",{className:"mt-1 text-sm text-gray-500",children:["$",e.price.toFixed(2)," each"]})]}),(0,s.jsxs)("div",{className:"flex-1 flex items-end justify-between text-sm",children:[(0,s.jsxs)("div",{className:"flex items-center",children:[s.jsx(Object(function(){var e=Error("Cannot find module '@/components/ui/button'");throw e.code="MODULE_NOT_FOUND",e}()),{variant:"outline",size:"icon",className:"h-8 w-8",onClick:()=>n(e.id,e.quantity-1),children:s.jsx(i.Z,{className:"h-4 w-4"})}),s.jsx("span",{className:"mx-2 w-8 text-center",children:e.quantity}),s.jsx(Object(function(){var e=Error("Cannot find module '@/components/ui/button'");throw e.code="MODULE_NOT_FOUND",e}()),{variant:"outline",size:"icon",className:"h-8 w-8",onClick:()=>n(e.id,e.quantity+1),children:s.jsx(l.Z,{className:"h-4 w-4"})})]}),s.jsx("div",{className:"flex",children:(0,s.jsxs)(Object(function(){var e=Error("Cannot find module '@/components/ui/button'");throw e.code="MODULE_NOT_FOUND",e}()),{variant:"ghost",onClick:()=>a(e.id),className:"text-red-600 hover:text-red-500",children:[s.jsx(d,{className:"h-4 w-4 mr-1"}),"Remove"]})})]})]})]},e.id))})}),(0,s.jsxs)("div",{className:"lg:w-1/3",children:[(0,s.jsxs)("div",{className:"bg-gray-50 rounded-lg shadow-sm p-6",children:[s.jsx("h2",{className:"text-lg font-semibold mb-4",children:"Order Summary"}),(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("div",{className:"flex justify-between",children:[s.jsx("span",{children:"Subtotal"}),(0,s.jsxs)("span",{children:["$",m.toFixed(2)]})]}),(0,s.jsxs)("div",{className:"flex justify-between",children:[s.jsx("span",{children:"Shipping"}),(0,s.jsxs)("span",{children:["$","10.00"]})]}),s.jsx(Object(function(){var e=Error("Cannot find module '@/components/ui/separator'");throw e.code="MODULE_NOT_FOUND",e}()),{}),(0,s.jsxs)("div",{className:"flex justify-between font-semibold",children:[s.jsx("span",{children:"Total"}),(0,s.jsxs)("span",{children:["$",(m+10).toFixed(2)]})]})]}),s.jsx(Object(function(){var e=Error("Cannot find module '@/components/ui/button'");throw e.code="MODULE_NOT_FOUND",e}()),{className:"w-full mt-6",disabled:0===e.length,children:"Proceed to Checkout"}),s.jsx(Object(function(){var e=Error("Cannot find module '@/components/ui/button'");throw e.code="MODULE_NOT_FOUND",e}()),{variant:"outline",className:"w-full mt-4",asChild:!0,children:s.jsx(c.default,{href:"/",children:"Continue Shopping"})})]}),(0,s.jsxs)("div",{className:"mt-6",children:[s.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Have a promo code?"}),(0,s.jsxs)("div",{className:"flex",children:[s.jsx(Object(function(){var e=Error("Cannot find module '@/components/ui/input'");throw e.code="MODULE_NOT_FOUND",e}()),{type:"text",placeholder:"Enter your code",className:"rounded-r-none"}),s.jsx(Object(function(){var e=Error("Cannot find module '@/components/ui/button'");throw e.code="MODULE_NOT_FOUND",e}()),{className:"rounded-l-none",children:"Apply"})]})]}),(0,s.jsxs)("div",{className:"mt-8",children:[s.jsx("h3",{className:"text-lg font-semibold mb-4",children:"You might also like"}),s.jsx("div",{className:"grid grid-cols-2 gap-4",children:[{name:"Wireless Mouse",price:29.99,image:"https://g-ycrmd35tgas.vusercontent.net/placeholder.svg?height=80&width=80&text=Mouse"},{name:"USB-C Hub",price:49.99,image:"https://g-ycrmd35tgas.vusercontent.net/placeholder.svg?height=80&width=80&text=Hub"}].map((e,t)=>(0,s.jsxs)("div",{className:"border rounded-lg p-4 text-center",children:[s.jsx("img",{src:e.image,alt:e.name,className:"w-20 h-20 mx-auto mb-2"}),s.jsx("h4",{className:"text-sm font-semibold",children:e.name}),(0,s.jsxs)("p",{className:"text-sm text-gray-600",children:["$",e.price.toFixed(2)]}),s.jsx(Object(function(){var e=Error("Cannot find module '@/components/ui/button'");throw e.code="MODULE_NOT_FOUND",e}()),{variant:"outline",size:"sm",className:"mt-2",children:"Add to Cart"})]},t))})]})]})]})]})]})}(function(){var e=Error("Cannot find module '@/components/ui/button'");throw e.code="MODULE_NOT_FOUND",e})(),function(){var e=Error("Cannot find module '@/components/ui/input'");throw e.code="MODULE_NOT_FOUND",e}(),function(){var e=Error("Cannot find module '@/components/ui/separator'");throw e.code="MODULE_NOT_FOUND",e}(),function(){var e=Error("Cannot find module '@/components/ui/custom/navbar'");throw e.code="MODULE_NOT_FOUND",e}()},2881:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var s=n(7577);let r=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=(...e)=>e.filter((e,t,n)=>!!e&&n.indexOf(e)===t).join(" ");var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=(0,s.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:l,iconNode:d,...c},m)=>(0,s.createElement)("svg",{ref:m,...o,width:t,height:t,stroke:e,strokeWidth:r?24*Number(n)/Number(t):n,className:a("lucide",i),...c},[...d.map(([e,t])=>(0,s.createElement)(e,t)),...Array.isArray(l)?l:[l]])),l=(e,t)=>{let n=(0,s.forwardRef)(({className:n,...o},l)=>(0,s.createElement)(i,{ref:l,iconNode:t,className:a(`lucide-${r(e)}`,n),...o}));return n.displayName=`${e}`,n}},1019:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});let s=(0,n(2881).Z)("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]])},3855:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});let s=(0,n(2881).Z)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]])},6826:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});let s=(0,n(8570).createProxy)(String.raw`/home/primotion/Documents/techmart/frontend/app/cart/page.tsx#default`)},1506:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>m,metadata:()=>c});var s=n(9510),r=n(8215),a=n.n(r),o=n(623),i=n.n(o),l=n(691),d=n.n(l);n(7272);let c={title:"TechMart",description:"An ecommerce store for tech stuff"};function m({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{className:`${a().variable} ${i().variable} ${d().className} antialiased`,children:e})})}},7272:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),s=t.X(0,[940,434],()=>n(2594));module.exports=s})();