(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3459],{9944:function(e,t,n){"use strict";var r=n(64836);t.Z=void 0;var o=r(n(64938)),a=n(85893),l=(0,o.default)((0,a.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"}),"Help");t.Z=l},46901:function(e,t,n){"use strict";n.d(t,{Z:function(){return B}});var r=n(63366),o=n(87462),a=n(67294),l=n(86010),s=n(94780),i=n(41796),d=n(90948),c=n(71657),u=n(98216),p=n(90629),h=n(1588),m=n(34867);function g(e){return(0,m.Z)("MuiAlert",e)}let v=(0,h.Z)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]);var x=n(93946),f=n(88169),w=n(85893),Z=(0,f.Z)((0,w.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),j=(0,f.Z)((0,w.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),C=(0,f.Z)((0,w.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),b=(0,f.Z)((0,w.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),y=n(34484);let S=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],k=e=>{let{variant:t,color:n,severity:r,classes:o}=e,a={root:["root",`${t}${(0,u.Z)(n||r)}`,`${t}`],icon:["icon"],message:["message"],action:["action"]};return(0,s.Z)(a,g,o)},A=(0,d.ZP)(p.Z,{name:"MuiAlert",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],t[`${n.variant}${(0,u.Z)(n.color||n.severity)}`]]}})(({theme:e,ownerState:t})=>{let n="light"===e.palette.mode?i._j:i.$n,r="light"===e.palette.mode?i.$n:i._j,a=t.color||t.severity;return(0,o.Z)({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},a&&"standard"===t.variant&&{color:e.vars?e.vars.palette.Alert[`${a}Color`]:n(e.palette[a].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${a}StandardBg`]:r(e.palette[a].light,.9),[`& .${v.icon}`]:e.vars?{color:e.vars.palette.Alert[`${a}IconColor`]}:{color:e.palette[a].main}},a&&"outlined"===t.variant&&{color:e.vars?e.vars.palette.Alert[`${a}Color`]:n(e.palette[a].light,.6),border:`1px solid ${(e.vars||e).palette[a].light}`,[`& .${v.icon}`]:e.vars?{color:e.vars.palette.Alert[`${a}IconColor`]}:{color:e.palette[a].main}},a&&"filled"===t.variant&&(0,o.Z)({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${a}FilledColor`],backgroundColor:e.vars.palette.Alert[`${a}FilledBg`]}:{backgroundColor:"dark"===e.palette.mode?e.palette[a].dark:e.palette[a].main,color:e.palette.getContrastText(e.palette[a].main)}))}),I=(0,d.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,t)=>t.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),M=(0,d.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),P=(0,d.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),z={success:(0,w.jsx)(Z,{fontSize:"inherit"}),warning:(0,w.jsx)(j,{fontSize:"inherit"}),error:(0,w.jsx)(C,{fontSize:"inherit"}),info:(0,w.jsx)(b,{fontSize:"inherit"})},E=a.forwardRef(function(e,t){var n,a,s,i,d,u;let p=(0,c.Z)({props:e,name:"MuiAlert"}),{action:h,children:m,className:g,closeText:v="Close",color:f,components:Z={},componentsProps:j={},icon:C,iconMapping:b=z,onClose:E,role:B="alert",severity:L="success",slotProps:_={},slots:$={},variant:H="standard"}=p,R=(0,r.Z)(p,S),N=(0,o.Z)({},p,{color:f,severity:L,variant:H}),T=k(N),D=null!=(n=null!=(a=$.closeButton)?a:Z.CloseButton)?n:x.Z,O=null!=(s=null!=(i=$.closeIcon)?i:Z.CloseIcon)?s:y.Z,W=null!=(d=_.closeButton)?d:j.closeButton,q=null!=(u=_.closeIcon)?u:j.closeIcon;return(0,w.jsxs)(A,(0,o.Z)({role:B,elevation:0,ownerState:N,className:(0,l.Z)(T.root,g),ref:t},R,{children:[!1!==C?(0,w.jsx)(I,{ownerState:N,className:T.icon,children:C||b[L]||z[L]}):null,(0,w.jsx)(M,{ownerState:N,className:T.message,children:m}),null!=h?(0,w.jsx)(P,{ownerState:N,className:T.action,children:h}):null,null==h&&E?(0,w.jsx)(P,{ownerState:N,className:T.action,children:(0,w.jsx)(D,(0,o.Z)({size:"small","aria-label":v,title:v,color:"inherit",onClick:E},W,{children:(0,w.jsx)(O,(0,o.Z)({fontSize:"small"},q))}))}):null]}))});var B=E},34484:function(e,t,n){"use strict";n(67294);var r=n(88169),o=n(85893);t.Z=(0,r.Z)((0,o.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},42070:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n(84749)}])},84749:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return A}});var r=n(85893),o=n(67294),a=n(11163),l=n.n(a),s=n(82175),i=n(74231),d=n(55678),c=n(6154),u=n(25675),p=n.n(u),h=n(83321),m=n(50135),g=n(90629),v=n(87357),x=n(86886),f=n(15861),w=n(46901);function Z(e){this.message=e}Z.prototype=Error(),Z.prototype.name="InvalidCharacterError";var j="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new Z("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,r,o=0,a=0,l="";r=t.charAt(a++);~r&&(n=o%4?64*n+r:r,o++%4)&&(l+=String.fromCharCode(255&n>>(-2*o&6))))r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);return l};function C(e){this.message=e}C.prototype=Error(),C.prototype.name="InvalidTokenError";var b=function(e,t){if("string"!=typeof e)throw new C("Invalid token specified");var n=!0===(t=t||{}).header?0:1;try{return JSON.parse(function(e){var t,n=e.replace(/-/g,"+").replace(/_/g,"/");switch(n.length%4){case 0:break;case 2:n+="==";break;case 3:n+="=";break;default:throw"Illegal base64url string!"}try{return t=n,decodeURIComponent(j(t).replace(/(.)/g,function(e,t){var n=t.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n}))}catch(e){return j(n)}}(e.split(".")[n]))}catch(e){throw new C("Invalid token specified: "+e.message)}},y=n(14564),S=n(9944);function k(){let[e,t]=(0,o.useState)(null),[n,a]=(0,o.useState)(!1),s=e=>{let t=b(e.credential);c.Z.post("/api/auth/checkEmail",{email:t.email,image:t.picture}).then(e=>{d.Am.success("Sukses Login, Mengalihkan Halaman..."),l().push("/admin")}).catch(e=>{console.log(e.response.data),d.Am.error(e.response.data.message)})};return(0,o.useEffect)(()=>{var e;if(n)return;let t=()=>{window.google&&!n&&(a(!0),window.google.accounts.id.initialize({client_id:"592359789333-hmgvetnf8n8m4kl3rb207dps1ec59goh.apps.googleusercontent.com",callback:s}),window.google.accounts.id.renderButton(document.getElementById("signInDiv"),{theme:"outline",size:"large"}))},r=document.createElement("script");return r.src="https://accounts.google.com/gsi/client",r.onload=t,r.async=!0,r.id="google-client-script",null===(e=document.querySelector("body"))||void 0===e||e.appendChild(r),()=>{var e,t;null===(e=window.google)||void 0===e||e.accounts.id.cancel(),null===(t=document.getElementById("google-client-script"))||void 0===t||t.remove()}},[n]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{id:"signInDiv"}),(0,r.jsx)(h.Z,{"aria-describedby":Boolean(e)?"login-google":void 0,variant:"text",onClick:e=>t(e.currentTarget),children:(0,r.jsx)(S.Z,{fontSize:"small"})}),(0,r.jsx)(y.ZP,{id:Boolean(e)?"login-google":void 0,open:Boolean(e),anchorEl:e,onClose:()=>t(null),anchorOrigin:{vertical:"bottom",horizontal:"left"},children:(0,r.jsx)(f.Z,{sx:{p:2},children:"Daftarkan/isi email pada Halaman Profile untuk dapat Login kedalam Aplikasi lebih mudah"})})]})}function A(e){let[t,n]=(0,o.useState)(null),l=(0,a.useRouter)(),u=i.Ry({username:i.Z_("Masukan Username").required("Harus Diisi"),password:i.Z_("Masukan password").required("Password Harus Diisi")}),Z=(e,t)=>{let n=d.Am.loading("Tunggu Sebentar...",{autoClose:!1});c.Z.post("/api/auth/loginCredential",e).then(e=>{d.Am.update(n,{render:e.data.message,type:"success",isLoading:!1,autoClose:2e3}),l.push("/admin")}).catch(e=>{console.log(e.response);let t="Gagal Login";404==e.response.status&&(t="Hubungi admin untuk gantikan password");let r=e.response.data.message?e.response.data.message:t;d.Am.update(n,{render:r,type:"error",isLoading:!1,autoClose:2e3})}).then(()=>{t(!1)})},j=(0,s.TA)({initialValues:{username:"",password:""},validationSchema:u,onSubmit:(e,t)=>{let{setSubmitting:n}=t;return Z(e,n)}}),C=l.query;return(0,o.useEffect)(()=>{let e=C.error;e&&n(e)},[C]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(x.ZP,{container:!0,component:"main",sx:{height:"100vh"},children:[(0,r.jsx)(x.ZP,{item:!0,xs:!1,sm:4,md:7,children:(0,r.jsx)("div",{style:{height:"100vh",position:"relative"},children:(0,r.jsx)(p(),{src:"/images/bg.jpg",alt:"PPID",quality:100,priority:!0,fill:!0,sizes:"(max-width: 768px) 100vw,   (max-width: 1200px) 50vw,   33vw"})})}),(0,r.jsx)(x.ZP,{item:!0,xs:12,sm:8,md:5,component:g.Z,elevation:6,square:!0,children:(0,r.jsxs)(v.Z,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,r.jsx)(v.Z,{sx:{m:1},children:(0,r.jsx)(p(),{src:"/images/logo.png",width:50,height:50,alt:"PPID"})}),(0,r.jsx)(f.Z,{component:"h1",variant:"h5",children:"Sign in PPID Bawaslu"}),t&&("CredentialsSignin"==t?(0,r.jsx)(w.Z,{severity:"error",children:"Salah Memasukan Username/Password"}):(0,r.jsx)(w.Z,{severity:"error",children:t})),(0,r.jsxs)(v.Z,{sx:{mt:1},children:[(0,r.jsxs)("form",{onSubmit:j.handleSubmit,children:[(0,r.jsx)(m.Z,{margin:"normal",fullWidth:!0,label:"Username",name:"username",autoComplete:"username",value:j.values.username,onChange:j.handleChange,onBlur:j.handleBlur,error:j.touched.username&&Boolean(j.errors.username),helperText:j.touched.username&&j.errors.username}),(0,r.jsx)(m.Z,{margin:"normal",fullWidth:!0,name:"password",label:"Password",type:"password",autoComplete:"current-password",value:j.values.password,onChange:j.handleChange,onBlur:j.handleBlur,error:j.touched.password&&Boolean(j.errors.password),helperText:j.touched.password&&j.errors.password}),(0,r.jsx)(h.Z,{type:"submit",disabled:j.isSubmitting,fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign In"})]}),(0,r.jsxs)(x.ZP,{container:!0,children:[(0,r.jsx)(x.ZP,{item:!0,xs:!0,children:(0,r.jsx)(h.Z,{variant:"text",onClick:()=>l.push("/"),children:"HOME"})}),(0,r.jsx)(k,{})]}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsxs)(f.Z,{sx:{pt:3},variant:"body2",color:"text.secondary",align:"center",...e,children:["Copyright \xa9 ",(0,r.jsx)("a",{href:"https://bawaslu.go.id/",rel:"noopener noreferrer",target:"_blank",children:"Bawaslu Repiblik Indonesia"})," ",new Date().getFullYear(),"."]})]})]})})]})})}}},function(e){e.O(0,[9004,6886,8271,9774,2888,179],function(){return e(e.s=42070)}),_N_E=e.O()}]);