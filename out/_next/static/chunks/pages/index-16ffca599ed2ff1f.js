(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(5117)}])},1023:function(e,t,i){"use strict";var r=i(5893);i(7294),t.Z=()=>(0,r.jsx)("div",{className:"py-4 ",children:(0,r.jsxs)("div",{className:"grid grid-cols-1  px-4 md:grid-cols-2 md:px-48 justify-items-start align-middle ",children:[(0,r.jsxs)("div",{className:"self-center md:w-[450px] flex flex-col",children:[(0,r.jsx)("p",{className:"font-semibold text-4xl md:text-[40px] text-gray-800 ",children:"The new standard in AI Services"}),(0,r.jsx)("p",{className:"text-gray-600 text-base pt-5",children:"Business transformation is AI transformation. Get business solutions fron the professionals in artificial intellegence and machine learning"}),(0,r.jsx)("p",{className:"text-gray-600 pt-5 ",children:"Our experts have mastered AI/ML development and implementation for top tech companies, including us."}),(0,r.jsxs)("div",{className:"flex  pt-12",children:[(0,r.jsx)("input",{type:"email",name:"",id:"",className:"outline-none border py-1 placeholder:text-sm text-gray-600 px-3 rounded border-gray-300 placeholder:text-gray-400",placeholder:"Your work email"}),(0,r.jsx)("div",{className:"md:px-5 px-2 md:text-base text-xs text-white hover:opacity-90 bg-blue-500 cursor-pointer rounded-sm   py-2",children:"Talk to an Expert"})]})]}),(0,r.jsx)("div",{className:"justify-self-end",children:(0,r.jsx)("picture",{children:(0,r.jsx)("img",{src:"https://d2mk45aasx86xg.cloudfront.net/AI_Services_f6eae42bac.svg",alt:"",className:"h-[500px]"})})})]})})},3740:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return v}});let r=i(8754),s=i(1757),a=s._(i(7294)),n=r._(i(2636)),l=i(7757),o=i(3735),d=i(3341);i(4210);let c=r._(i(7746)),u={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e){return void 0!==e.default}function p(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function f(e,t,i,r,s,a,n){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===i&&a(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,s=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>s,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{s=!0,t.stopPropagation()}})}(null==s?void 0:s.current)&&s.current(e)}})}function g(e){let[t,i]=a.version.split("."),r=parseInt(t,10),s=parseInt(i,10);return r>18||18===r&&s>=3?{fetchPriority:e}:{fetchpriority:e}}let x=(0,a.forwardRef)((e,t)=>{let{imgAttributes:i,heightInt:r,widthInt:s,qualityInt:n,className:l,imgStyle:o,blurStyle:d,isLazy:c,fetchPriority:u,fill:m,placeholder:p,loading:x,srcString:h,config:v,unoptimized:y,loader:b,onLoadRef:j,onLoadingCompleteRef:w,setBlurComplete:N,setShowAltText:_,onLoad:k,onError:E,...A}=e;return x=c?"lazy":x,a.default.createElement("img",{...A,...g(u),loading:x,width:s,height:r,decoding:"async","data-nimg":m?"fill":"1",className:l,style:{...o,...d},...i,ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(E&&(e.src=e.src),e.complete&&f(e,h,p,j,w,N,y))},[h,p,j,w,N,E,y,t]),onLoad:e=>{let t=e.currentTarget;f(t,h,p,j,w,N,y)},onError:e=>{_(!0),"blur"===p&&N(!0),E&&E(e)}})}),h=(0,a.forwardRef)((e,t)=>{var i;let r,s,{src:f,sizes:h,unoptimized:v=!1,priority:y=!1,loading:b,className:j,quality:w,width:N,height:_,fill:k,style:E,onLoad:A,onLoadingComplete:S,placeholder:C="empty",blurDataURL:I,fetchPriority:T,layout:O,objectFit:z,objectPosition:P,lazyBoundary:M,lazyRoot:R,...D}=e,L=(0,a.useContext)(d.ImageConfigContext),W=(0,a.useMemo)(()=>{let e=u||L||o.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:i}},[L]),U=D.loader||c.default;delete D.loader;let F="__next_img_default"in U;if(F){if("custom"===W.loader)throw Error('Image with src "'+f+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=U;U=t=>{let{config:i,...r}=t;return e(r)}}if(O){"fill"===O&&(k=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];e&&(E={...E,...e});let t={responsive:"100vw",fill:"100vw"}[O];t&&!h&&(h=t)}let B="",G=p(N),H=p(_);if("object"==typeof(i=f)&&(m(i)||void 0!==i.src)){let e=m(f)?f.default:f;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(r=e.blurWidth,s=e.blurHeight,I=I||e.blurDataURL,B=e.src,!k){if(G||H){if(G&&!H){let t=G/e.width;H=Math.round(e.height*t)}else if(!G&&H){let t=H/e.height;G=Math.round(e.width*t)}}else G=e.width,H=e.height}}let V=!y&&("lazy"===b||void 0===b);(!(f="string"==typeof f?f:B)||f.startsWith("data:")||f.startsWith("blob:"))&&(v=!0,V=!1),W.unoptimized&&(v=!0),F&&f.endsWith(".svg")&&!W.dangerouslyAllowSVG&&(v=!0),y&&(T="high");let[Y,q]=(0,a.useState)(!1),[J,X]=(0,a.useState)(!1),Z=p(w),$=Object.assign(k?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:z,objectPosition:P}:{},J?{}:{color:"transparent"},E),K="blur"===C&&I&&!Y?{backgroundSize:$.objectFit||"cover",backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,l.getImageBlurSvg)({widthInt:G,heightInt:H,blurWidth:r,blurHeight:s,blurDataURL:I,objectFit:$.objectFit})+'")'}:{},Q=function(e){let{config:t,src:i,unoptimized:r,width:s,quality:a,sizes:n,loader:l}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:o,kind:d}=function(e,t,i){let{deviceSizes:r,allSizes:s}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(i);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:s.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:s,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let a=[...new Set([t,2*t].map(e=>s.find(t=>t>=e)||s[s.length-1]))];return{widths:a,kind:"x"}}(t,s,n),c=o.length-1;return{sizes:n||"w"!==d?n:"100vw",srcSet:o.map((e,r)=>l({config:t,src:i,quality:a,width:e})+" "+("w"===d?e:r+1)+d).join(", "),src:l({config:t,src:i,quality:a,width:o[c]})}}({config:W,src:f,unoptimized:v,width:G,quality:Z,sizes:h,loader:U}),ee=f,et=(0,a.useRef)(A);(0,a.useEffect)(()=>{et.current=A},[A]);let ei=(0,a.useRef)(S);(0,a.useEffect)(()=>{ei.current=S},[S]);let er={isLazy:V,imgAttributes:Q,heightInt:H,widthInt:G,qualityInt:Z,className:j,imgStyle:$,blurStyle:K,loading:b,config:W,fetchPriority:T,fill:k,unoptimized:v,placeholder:C,loader:U,srcString:ee,onLoadRef:et,onLoadingCompleteRef:ei,setBlurComplete:q,setShowAltText:X,...D};return a.default.createElement(a.default.Fragment,null,a.default.createElement(x,{...er,ref:t}),y?a.default.createElement(n.default,null,a.default.createElement("link",{key:"__nimg-"+Q.src+Q.srcSet+Q.sizes,rel:"preload",as:"image",href:Q.srcSet?void 0:Q.src,imageSrcSet:Q.srcSet,imageSizes:Q.sizes,crossOrigin:D.crossOrigin,referrerPolicy:D.referrerPolicy,...g(T)})):null)}),v=h;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";function i(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:s,blurDataURL:a,objectFit:n}=e,l=r||t,o=s||i,d=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&o?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+l+" "+o+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(r&&s?"1":"20")+"'/%3E"+d+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+a+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===n?"xMidYMid":"cover"===n?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+a+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},7746:function(e,t){"use strict";function i(e){let{config:t,src:i,width:r,quality:s}=e;return t.path+"?url="+encodeURIComponent(i)+"&w="+r+"&q="+(s||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),i.__next_img_default=!0;let r=i},5117:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return p}});var r=i(5893);i(5675);var s=i(1023),a=i(1664),n=i.n(a);i(7294);var l=()=>(0,r.jsxs)("div",{className:"py-6",children:[(0,r.jsxs)("p",{className:"text-blue-500 text-center pb-5 font-semibold text-3xl",children:[(0,r.jsx)("span",{className:"text-gray-800 ",children:"For"}),"\xa0Companies"]}),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 px-4 md:px-48 justify-items-start align-middle ",children:[(0,r.jsx)("div",{className:"",children:(0,r.jsx)("picture",{children:(0,r.jsx)("img",{src:"https://img.freepik.com/free-vector/cute-chatbot-greeting-people-isometric-icon-with-computer-various-objects-3d_1284-63055.jpg?w=740&t=st=1685382512~exp=1685383112~hmac=1b653bc09183d624f0388a99e3a09329a57fb26c3bb50f5278c41a0c60e507c5",alt:"",className:"md:h-[450px] "})})}),(0,r.jsxs)("div",{className:"  justify-self-end self-center flex flex-col",children:[(0,r.jsx)("p",{className:"font-semibold text-3xl text-gray-800 ",children:"Managed Staffing"}),(0,r.jsx)("p",{className:"text-gray-600 text-base pt-5",children:"Unlock the full potential your organisation. This 4-week timeboxed offering is designed investigate and evaluate the potential impact of AI methadologies on your oraganisation"}),(0,r.jsx)("p",{className:"text-gray-600 pt-5 ",children:"We work with you to identify AI and data-driven solutions that can solve your business problems. We'll help you establish on impactful and optimized path forward supported by existing data and create a roadmap for the implementation of AI solutions. This includes data collection and ingestion, AI/ML modeling methods and an ROI framework"}),(0,r.jsx)(n(),{href:"/hire_developers",children:(0,r.jsx)("div",{className:"px-6 cursor-pointer mx-auto md:mx-0 w-fit text-white mt-10 hover:opacity-90 bg-blue-500 rounded-md   py-2 text-sm",children:"Sign up to learn more"})})]})]})]}),o=()=>(0,r.jsx)("div",{className:"py-6",children:(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 px-4 md:px-48 justify-items-start align-middle ",children:[(0,r.jsxs)("div",{className:"   self-center flex flex-col",children:[(0,r.jsx)("p",{className:"font-semibold text-3xl text-gray-700 ",children:"Talent training programs"}),(0,r.jsx)("p",{className:"text-gray-600 text-base pt-5",children:"Get extensive Ai knowledge and experience to revolutionize your business. Trusted by hundreds of comapnies and VCs, Turing is offering AI advice from our experts."}),(0,r.jsx)("p",{className:"text-gray-600 pt-5 ",children:"This free service empowers companies to realize the numerous benifits of AI, gain a solid understanding of its fundamentals and core technologies, and ultimately unlock the full potential of AI and machine learning. With Ai Advisory, companies will gain access to Turing's extensive knowledge and experience, enabling them to frame their Ai strategy and stay ahead of the curve."}),(0,r.jsx)(n(),{href:"/training",children:(0,r.jsx)("div",{className:"px-6 cursor-pointer mx-auto md:mx-0 w-fit text-white mt-10 bg-blue-500 rounded-md   py-2 text-sm hover:opacity-90",children:"Sign up to learn more"})})]}),(0,r.jsx)("div",{className:"justify-self-end ",children:(0,r.jsx)("picture",{children:(0,r.jsx)("img",{src:"https://d2mk45aasx86xg.cloudfront.net/Turing_Developers_d3807bfc1c.svg",alt:"",className:"h-[450px] w-fit "})})})]})}),d=()=>(0,r.jsx)("div",{className:"py-6",children:(0,r.jsxs)("div",{className:"md:grid flex flex-col-reverse md:grid-cols-2 px-4 md:px-48 justify-items-start  align-middle ",children:[(0,r.jsx)("div",{className:"",children:(0,r.jsx)("picture",{children:(0,r.jsx)("img",{src:"https://d2mk45aasx86xg.cloudfront.net/Turing_Services_9913a8f414.svg",alt:"",className:"h-[450px] "})})}),(0,r.jsxs)("div",{className:"   self-center justify-self-end flex flex-col",children:[(0,r.jsx)("p",{className:"font-semibold text-3xl text-gray-700 ",children:"AI advisory services"}),(0,r.jsx)("p",{className:"text-gray-600 text-base pt-5",children:"Supercharge software develpment with our Ai-enhanced development pilot program . By leveraging our cutting-edge Ai models. Turing developers can build with unparalleld speed, efficiency, ad accuracy for faster project delivery, cost savings, and a competitive edge for your business."}),(0,r.jsx)("p",{className:"text-gray-600 pt-5 ",children:"Discover streamlined workflows, enhanced productivity, seamless integration, expert support, and continous improvement from the leader in Ai-driven development."}),(0,r.jsx)(n(),{href:"/advisory",children:(0,r.jsx)("div",{className:"px-6 cursor-pointer w-fit text-white mt-10 bg-blue-500 rounded-md   py-2 text-sm hover:opacity-90 ",children:"Sign up to learn more"})})]})]})}),c=e=>{let{text:t,post:i,imgUrl:s,name:a}=e;return(0,r.jsxs)("div",{className:"rounded-xl bg-white flex flex-col justify-start shadow-md border",children:[(0,r.jsx)("div",{className:"bg-gradient-to-r rounded-t-xl flex justify-end from-blue-500 to-white px-6",children:(0,r.jsx)("picture",{children:(0,r.jsx)("img",{src:"/bg.png",alt:"",className:"w-10"})})}),(0,r.jsx)("p",{className:"px-6 text-gray-600 pt-4 pb-8 leading-6",children:t}),(0,r.jsxs)("div",{className:"flex flex-col px-6 space-y-1 h-fit mt-auto pb-10 items-center",children:[(0,r.jsx)("span",{class:"inline-block h-1 w-10 rounded bg-blue-500 mb-3"}),(0,r.jsx)("h2",{class:"text-gray-900 font-medium uppercase title-font tracking-wider text-sm",children:a}),(0,r.jsx)("p",{class:"text-gray-500 text-center text-sm",children:i})]})]})};let u=[{text:"Turing has been a valuable partner in helping us grow our team. We use Turing because it helps us quickly find great talent globally in the ultra-competitive market climate.",post:"HR Manager of a multimillion-dollar software solution provider",imgUrl:"https://d2mk45aasx86xg.cloudfront.net/software_solutions_242940f846.svg",name:"HOLDEN CAULFIELD"},{text:"Our team had a great experience working with Turing to expand our growing company. Their platform and shortlisting process were extremely helpful and efficient for everyone involved.",post:"Tech Lead of a fast-scaling delivery optimization platform",imgUrl:"https://d2mk45aasx86xg.cloudfront.net/delivery_optimization_675027d1ce.svg",name:"HOLDEN CAULFIELD"},{text:"We were very pleased to discover in Turing a reliable partner that understood our needs and addressed them with a very professional approach. Turing has helped us fill our open roles in a timely manner while providing talented people that were eager to jump in and help our business progress.",post:"HR Manager of a multimillion-dollar embedded payments company",imgUrl:"https://d2mk45aasx86xg.cloudfront.net/embedded_payments_c13112b086.svg",name:"HOLDEN CAULFIELD"}];var m=()=>(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"bg-gray-100 px-4 py-8 md:px-48",children:[(0,r.jsx)("p",{className:"text-gray-800 font-semibold text-3xl",children:"What clients say about Turing"}),(0,r.jsx)("p",{className:"text-gray-700 pt-4 pb-8",children:"900+ top comapnies have trusted Turing and the Talent Cloud for the engineering needs."}),(0,r.jsx)("div",{className:"grid md:grid-cols-3 gap-y-5  gap-x-8",children:u.map(e=>(0,r.jsx)(c,{text:e.text,post:e.post,imgUrl:e.imgUrl,name:e.name}))}),(0,r.jsxs)("div",{className:"py-20 flex flex-col space-y-8 items-center",children:[(0,r.jsx)("p",{className:"font-semibold ",children:"Ready to share your AI business needs?"}),(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)("input",{type:"email",name:"",id:"",className:"outline-none border md:w-72 py-1 placeholder:text-sm text-gray-600 px-3 rounded border-gray-300 placeholder:text-gray-400",placeholder:"Your work email"}),(0,r.jsx)("div",{className:"md:px-5 px-2 text-white md:text-base text-sm bg-blue-500 cursor-pointer rounded   py-2",children:"Talk to an Expert"})]})]})]})});function p(){return(0,r.jsxs)("main",{className:"",children:[(0,r.jsx)(s.Z,{}),(0,r.jsx)(l,{}),(0,r.jsx)(o,{}),(0,r.jsx)(d,{}),(0,r.jsx)(m,{})]})}},5675:function(e,t,i){i(3740)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);