(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1363],{77957:function(a,e,l){"use strict";var r=l(64836);e.Z=void 0;var t=r(l(64938)),o=l(85893),n=(0,t.default)((0,o.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");e.Z=n},44267:function(a,e,l){"use strict";l.d(e,{Z:function(){return g}});var r=l(87462),t=l(63366),o=l(67294),n=l(86010),u=l(94780),i=l(90948),s=l(71657),d=l(1588),m=l(34867);function h(a){return(0,m.Z)("MuiCardContent",a)}(0,d.Z)("MuiCardContent",["root"]);var b=l(85893);let w=["className","component"],_=a=>{let{classes:e}=a;return(0,u.Z)({root:["root"]},h,e)},c=(0,i.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(a,e)=>e.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),p=o.forwardRef(function(a,e){let l=(0,s.Z)({props:a,name:"MuiCardContent"}),{className:o,component:u="div"}=l,i=(0,t.Z)(l,w),d=(0,r.Z)({},l,{component:u}),m=_(d);return(0,b.jsx)(c,(0,r.Z)({as:u,className:(0,n.Z)(m.root,o),ownerState:d,ref:e},i))});var g=p},66242:function(a,e,l){"use strict";l.d(e,{Z:function(){return f}});var r=l(87462),t=l(63366),o=l(67294),n=l(86010),u=l(94780),i=l(90948),s=l(71657),d=l(90629),m=l(1588),h=l(34867);function b(a){return(0,h.Z)("MuiCard",a)}(0,m.Z)("MuiCard",["root"]);var w=l(85893);let _=["className","raised"],c=a=>{let{classes:e}=a;return(0,u.Z)({root:["root"]},b,e)},p=(0,i.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(a,e)=>e.root})(()=>({overflow:"hidden"})),g=o.forwardRef(function(a,e){let l=(0,s.Z)({props:a,name:"MuiCard"}),{className:o,raised:u=!1}=l,i=(0,t.Z)(l,_),d=(0,r.Z)({},l,{raised:u}),m=c(d);return(0,w.jsx)(p,(0,r.Z)({className:(0,n.Z)(m.root,o),elevation:u?8:void 0,ref:e,ownerState:d},i))});var f=g},24498:function(a,e,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/setting/wilayah",function(){return l(72376)}])},72376:function(a,e,l){"use strict";l.r(e);var r=l(85893),t=l(82175),o=l(67294),n=l(74231),u=l(55678),i=l(6154),s=l(66242),d=l(44267),m=l(87357),h=l(50135),b=l(86886),w=l(83321),_=l(77957);let c=(a,e)=>{let l=u.Am.loading("Tunggu Sebentar...",{autoClose:!1});i.Z.post("/api/setting/wilayah",a).then(a=>{u.Am.update(l,{render:a.data.message,type:"success",isLoading:!1,autoClose:2e3})}).catch(a=>{console.log(a.response.data),u.Am.update(l,{render:a.response.data.message,type:"error",isLoading:!1,autoClose:2e3})}).then(()=>{e(!1)})},p=n.Ry({nama_bawaslu:n.Z_().required("Harus Diisi"),email_bawaslu:n.Z_("Masukan Email").email("Email Tidak Valid").required("Harus Diisi"),telp_bawaslu:n.Z_().required("Harus Diisi"),alamat_bawaslu:n.Z_().required("Alamat Harus Diisi"),kota_bawaslu:n.Z_().required("Kota Harus Diisi"),web_profile:n.Z_().required("URL PPID Harus Diisi"),web_ppid:n.Z_().required("URL PPID Harus Diisi"),facebook:n.Z_(),twitter:n.Z_(),youtube:n.Z_(),instagram:n.Z_()}),g=()=>{let[a,e]=(0,o.useState)({nama_bawaslu:"",email_bawaslu:"",telp_bawaslu:"",alamat_bawaslu:"",kota_bawaslu:"",web_profile:"",web_ppid:"",facebook:"",twitter:"",youtube:"",instagram:""});(0,o.useEffect)(()=>{i.Z.get("/api/setting/wilayah").then(a=>{var l,r,t,o,n,u,i,s,d,m,h;let b={...a.data,nama_bawaslu:null!==(l=a.data.nama_bawaslu)&&void 0!==l?l:"",email_bawaslu:null!==(r=a.data.email_bawaslu)&&void 0!==r?r:"",telp_bawaslu:null!==(t=a.data.telp_bawaslu)&&void 0!==t?t:"",alamat_bawaslu:null!==(o=a.data.alamat_bawaslu)&&void 0!==o?o:"",kota_bawaslu:null!==(n=a.data.kota_bawaslu)&&void 0!==n?n:"",web_profile:null!==(u=a.data.web_profile)&&void 0!==u?u:"",web_ppid:null!==(i=a.data.web_ppid)&&void 0!==i?i:"",facebook:null!==(s=a.data.facebook)&&void 0!==s?s:"",twitter:null!==(d=a.data.twitter)&&void 0!==d?d:"",youtube:null!==(m=a.data.youtube)&&void 0!==m?m:"",instagram:null!==(h=a.data.instagram)&&void 0!==h?h:""};e(b)}).catch(a=>{console.log(a.response.data)})},[]);let l=(0,t.TA)({initialValues:a,enableReinitialize:!0,validationSchema:p,onSubmit:(a,e)=>{let{setSubmitting:l}=e;return c(a,l)}});return(0,r.jsx)(s.Z,{children:(0,r.jsx)(d.Z,{children:(0,r.jsx)(m.Z,{children:(0,r.jsxs)("form",{onSubmit:l.handleSubmit,children:[(0,r.jsx)(h.Z,{fullWidth:!0,required:!0,margin:"normal",label:"Nama Bawaslu",name:"nama_bawaslu",value:l.values.nama_bawaslu,onChange:l.handleChange,onBlur:l.handleBlur,error:l.touched.nama_bawaslu&&Boolean(l.errors.nama_bawaslu),helperText:l.touched.nama_bawaslu&&l.errors.nama_bawaslu}),(0,r.jsx)(h.Z,{fullWidth:!0,required:!0,margin:"normal",type:"email",label:"Email Bawaslu",name:"email_bawaslu",value:l.values.email_bawaslu,onChange:l.handleChange,onBlur:l.handleBlur,error:l.touched.email_bawaslu&&Boolean(l.errors.email_bawaslu),helperText:l.touched.email_bawaslu&&l.errors.email_bawaslu}),(0,r.jsx)(h.Z,{fullWidth:!0,required:!0,margin:"normal",label:"HP / Telp Bawaslu",name:"telp_bawaslu",value:l.values.telp_bawaslu,onChange:l.handleChange,onBlur:l.handleBlur,error:l.touched.telp_bawaslu&&Boolean(l.errors.telp_bawaslu),helperText:l.touched.telp_bawaslu&&l.errors.telp_bawaslu}),(0,r.jsx)(h.Z,{fullWidth:!0,required:!0,multiline:!0,rows:3,margin:"normal",label:"Alamat Bawaslu",name:"alamat_bawaslu",value:l.values.alamat_bawaslu,onChange:l.handleChange,onBlur:l.handleBlur,error:l.touched.alamat_bawaslu&&Boolean(l.errors.alamat_bawaslu),helperText:l.touched.alamat_bawaslu&&l.errors.alamat_bawaslu}),(0,r.jsx)(h.Z,{fullWidth:!0,required:!0,margin:"normal",label:"Kota",name:"kota_bawaslu",value:l.values.kota_bawaslu,onChange:l.handleChange,onBlur:l.handleBlur,error:l.touched.kota_bawaslu&&Boolean(l.errors.kota_bawaslu),helperText:l.touched.kota_bawaslu&&l.errors.kota_bawaslu}),(0,r.jsx)(h.Z,{fullWidth:!0,required:!0,margin:"normal",label:"URL Website",name:"web_profile",value:l.values.web_profile,onChange:l.handleChange,onBlur:l.handleBlur,error:l.touched.web_profile&&Boolean(l.errors.web_profile),helperText:l.touched.web_profile&&l.errors.web_profile}),(0,r.jsx)(h.Z,{fullWidth:!0,required:!0,margin:"normal",label:"URL PPID",name:"web_ppid",value:l.values.web_ppid,onChange:l.handleChange,onBlur:l.handleBlur,error:l.touched.web_ppid&&Boolean(l.errors.web_ppid),helperText:l.touched.web_ppid&&l.errors.web_ppid}),(0,r.jsxs)(b.ZP,{container:!0,spacing:2,children:[(0,r.jsx)(b.ZP,{item:!0,xs:12,md:6,children:(0,r.jsx)(h.Z,{fullWidth:!0,margin:"normal",label:"Alamat Facebook",name:"facebook",value:l.values.facebook,onChange:l.handleChange,onBlur:l.handleBlur,error:l.touched.facebook&&Boolean(l.errors.facebook),helperText:l.touched.facebook&&l.errors.facebook})}),(0,r.jsx)(b.ZP,{item:!0,xs:12,md:6,children:(0,r.jsx)(h.Z,{fullWidth:!0,margin:"normal",label:"Alamat Twitter",name:"twitter",value:l.values.twitter,onChange:l.handleChange,onBlur:l.handleBlur,error:l.touched.twitter&&Boolean(l.errors.twitter),helperText:l.touched.twitter&&l.errors.twitter})}),(0,r.jsx)(b.ZP,{item:!0,xs:12,md:6,children:(0,r.jsx)(h.Z,{fullWidth:!0,margin:"normal",label:"Alamat Youtube",name:"youtube",value:l.values.youtube,onChange:l.handleChange,onBlur:l.handleBlur,error:l.touched.youtube&&Boolean(l.errors.youtube),helperText:l.touched.youtube&&l.errors.youtube})}),(0,r.jsx)(b.ZP,{item:!0,xs:12,md:6,children:(0,r.jsx)(h.Z,{fullWidth:!0,margin:"normal",label:"Alamat Instagram",name:"instagram",value:l.values.instagram,onChange:l.handleChange,onBlur:l.handleBlur,error:l.touched.instagram&&Boolean(l.errors.instagram),helperText:l.touched.instagram&&l.errors.instagram})})]}),(0,r.jsx)(w.Z,{disabled:l.isSubmitting,type:"submit",variant:"contained",endIcon:(0,r.jsx)(_.Z,{}),children:"Submit"})]})})})})};g.auth=!0,g.breadcrumb=[{path:"/admin",title:"Home"},{path:"/admin/setting/wilayah",title:"Profile Bawaslu"}],e.default=g}},function(a){a.O(0,[9004,6886,8271,9774,2888,179],function(){return a(a.s=24498)}),_N_E=a.O()}]);