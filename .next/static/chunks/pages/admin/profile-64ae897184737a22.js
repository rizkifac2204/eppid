(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8172],{77957:function(e,a,r){"use strict";var n=r(64836);a.Z=void 0;var i=n(r(64938)),l=r(85893),s=(0,i.default)((0,l.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");a.Z=s},44267:function(e,a,r){"use strict";r.d(a,{Z:function(){return g}});var n=r(87462),i=r(63366),l=r(67294),s=r(86010),t=r(94780),o=r(90948),d=r(71657),u=r(1588),m=r(34867);function c(e){return(0,m.Z)("MuiCardContent",e)}(0,u.Z)("MuiCardContent",["root"]);var h=r(85893);let p=["className","component"],x=e=>{let{classes:a}=e;return(0,t.Z)({root:["root"]},c,a)},Z=(0,o.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,a)=>a.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),f=l.forwardRef(function(e,a){let r=(0,d.Z)({props:e,name:"MuiCardContent"}),{className:l,component:t="div"}=r,o=(0,i.Z)(r,p),u=(0,n.Z)({},r,{component:t}),m=x(u);return(0,h.jsx)(Z,(0,n.Z)({as:t,className:(0,s.Z)(m.root,l),ownerState:u,ref:a},o))});var g=f},66242:function(e,a,r){"use strict";r.d(a,{Z:function(){return j}});var n=r(87462),i=r(63366),l=r(67294),s=r(86010),t=r(94780),o=r(90948),d=r(71657),u=r(90629),m=r(1588),c=r(34867);function h(e){return(0,c.Z)("MuiCard",e)}(0,m.Z)("MuiCard",["root"]);var p=r(85893);let x=["className","raised"],Z=e=>{let{classes:a}=e;return(0,t.Z)({root:["root"]},h,a)},f=(0,o.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,a)=>a.root})(()=>({overflow:"hidden"})),g=l.forwardRef(function(e,a){let r=(0,d.Z)({props:e,name:"MuiCard"}),{className:l,raised:t=!1}=r,o=(0,i.Z)(r,x),u=(0,n.Z)({},r,{raised:t}),m=Z(u);return(0,p.jsx)(f,(0,n.Z)({className:(0,s.Z)(m.root,l),elevation:t?8:void 0,ref:a,ownerState:u},o))});var j=g},29660:function(e,a,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/profile",function(){return r(29401)}])},29401:function(e,a,r){"use strict";r.r(a),r.d(a,{default:function(){return H}});var n=r(85893),i=r(67294),l=r(40039),s=r(6154),t=r(55678),o=r(86886),d=r(88409),u=r(40044),m=r(87357),c=r(53724),h=r(54678),p=r(82175),x=r(74231),Z=r(66242),f=r(44267),g=r(15861),j=r(50135),_=r(83321),v=r(77957);let b=(e,a,r)=>{let n=t.Am.loading("Tunggu Sebentar...",{autoClose:!1});s.Z.put("/api/profile",e).then(r=>{a(()=>e),t.Am.update(n,{render:r.data.message,type:"success",isLoading:!1,autoClose:2e3})}).catch(e=>{console.log(e.response.data);let a="Gagal Proses";404==e.response.status&&(a="Mohon Maaf, Hilangkan atau ganti spesial karakter pada inputan anda");let r=e.response.data.message?e.response.data.message:a;t.Am.update(n,{render:r,type:"error",isLoading:!1,autoClose:2e3})}).then(()=>{r(!1)})},C=x.Ry({nama_admin:x.Z_("Masukan Nama").required("Harus Diisi"),telp_admin:x.Z_("Masukan Telp/HP").required("Telp Harus Diisi"),email_admin:x.Z_("Masukan Email").email("Email Tidak Valid").required("Email Harus Diisi"),alamat_admin:x.Z_().required("Alamat Harus Diisi"),username:x.Z_().required("Username Harus Diisi"),passwordConfirm:x.Z_().required("Password Harus Diisi")});var w=function(e){let{profile:a,setProfile:r}=e,i=(0,p.TA)({initialValues:{...a,email_admin:a.email_admin?a.email_admin:"",passwordConfirm:""},enableReinitialize:!0,validationSchema:C,onSubmit:(e,a)=>{let{setSubmitting:n}=a;return b(e,r,n)}});return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(Z.Z,{children:(0,n.jsxs)(f.Z,{children:[(0,n.jsx)(g.Z,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:"Ganti Data Profile"}),(0,n.jsx)(m.Z,{children:(0,n.jsxs)("form",{onSubmit:i.handleSubmit,children:[(0,n.jsx)(j.Z,{fullWidth:!0,required:!0,margin:"normal",placeholder:"Ganti Nama",label:"Nama",name:"nama_admin",value:i.values.nama_admin,onChange:i.handleChange,onBlur:i.handleBlur,error:i.touched.nama_admin&&Boolean(i.errors.nama_admin),helperText:i.touched.nama_admin&&i.errors.nama_admin}),(0,n.jsx)(j.Z,{fullWidth:!0,required:!0,margin:"normal",placeholder:"Telp",label:"HP / Telp",name:"telp_admin",value:i.values.telp_admin,onChange:i.handleChange,onBlur:i.handleBlur,error:i.touched.telp_admin&&Boolean(i.errors.telp_admin),helperText:i.touched.telp_admin&&i.errors.telp_admin}),(0,n.jsx)(j.Z,{fullWidth:!0,required:!0,margin:"normal",type:"email",placeholder:"Email",label:"Email",name:"email_admin",value:i.values.email_admin,onChange:i.handleChange,onBlur:i.handleBlur,error:i.touched.email_admin&&Boolean(i.errors.email_admin),helperText:i.touched.email_admin&&i.errors.email_admin}),(0,n.jsx)(j.Z,{fullWidth:!0,required:!0,multiline:!0,rows:3,margin:"normal",placeholder:"Alamat",label:"Alamat",name:"alamat_admin",value:i.values.alamat_admin,onChange:i.handleChange,onBlur:i.handleBlur,error:i.touched.alamat_admin&&Boolean(i.errors.alamat_admin),helperText:i.touched.alamat_admin&&i.errors.alamat_admin}),(0,n.jsx)(j.Z,{fullWidth:!0,required:!0,margin:"normal",placeholder:"Username",label:"Username",name:"username",value:i.values.username,onChange:i.handleChange,onBlur:i.handleBlur,error:i.touched.username&&Boolean(i.errors.username),helperText:i.touched.username&&i.errors.username}),(0,n.jsx)(j.Z,{fullWidth:!0,margin:"normal",required:!0,type:"password",placeholder:"Password Lama",label:"Password Lama",name:"passwordConfirm",value:i.values.passwordConfirm,onChange:i.handleChange,onBlur:i.handleBlur,error:i.touched.passwordConfirm&&Boolean(i.errors.passwordConfirm),helperText:i.touched.passwordConfirm&&i.errors.passwordConfirm}),(0,n.jsx)(_.Z,{disabled:i.isSubmitting,type:"submit",variant:"contained",endIcon:(0,n.jsx)(v.Z,{}),children:"Update"})]})})]})})})};let P=(e,a)=>{let r=t.Am.loading("Tunggu Sebentar...",{autoClose:!1});s.Z.put("/api/profile/gantiPassword",e).then(e=>{t.Am.update(r,{render:e.data.message,type:"success",isLoading:!1,autoClose:2e3})}).catch(e=>{console.log(e.response.data);let a="Gagal Proses";404==e.response.status&&(a="Mohon Maaf, Hilangkan atau ganti spesial karakter pada inputan anda");let n=e.response.data.message?e.response.data.message:a;t.Am.update(r,{render:n,type:"error",isLoading:!1,autoClose:2e3})}).then(()=>{a(!1)})},B=x.Ry({lama:x.Z_().required("Password Lama Harus Diisi"),baru:x.Z_().required("Password Baru Harus Diisi"),confirm:x.Z_().required("Konfirmasi Password Harus Diisi").oneOf([x.iH("baru"),null],"Passwords tidak sama")});var y=function(e){let{profile:a}=e,r=(0,p.TA)({initialValues:{lama:"",baru:"",confirm:""},validationSchema:B,onSubmit:(e,a)=>{let{setSubmitting:r}=a;return P(e,r)}});return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(Z.Z,{children:(0,n.jsxs)(f.Z,{children:[(0,n.jsx)(g.Z,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:"Ganti Password"}),(0,n.jsx)(m.Z,{children:(0,n.jsxs)("form",{onSubmit:r.handleSubmit,children:[(0,n.jsx)(j.Z,{fullWidth:!0,required:!0,type:"password",margin:"normal",placeholder:"Password Lama",label:"Password Lama",name:"lama",value:r.values.lama,onChange:r.handleChange,onBlur:r.handleBlur,error:r.touched.lama&&Boolean(r.errors.lama),helperText:r.touched.lama&&r.errors.lama}),(0,n.jsx)(j.Z,{fullWidth:!0,required:!0,type:"password",margin:"normal",placeholder:"Password Baru",label:"Password Baru",name:"baru",value:r.values.baru,onChange:r.handleChange,onBlur:r.handleBlur,error:r.touched.baru&&Boolean(r.errors.baru),helperText:r.touched.baru&&r.errors.baru}),(0,n.jsx)(j.Z,{fullWidth:!0,required:!0,type:"password",margin:"normal",placeholder:"Konfirmasi Password Baru",label:"Konfirmasi Password Baru",name:"confirm",value:r.values.confirm,onChange:r.handleChange,onBlur:r.handleBlur,error:r.touched.confirm&&Boolean(r.errors.confirm),helperText:r.touched.confirm&&r.errors.confirm}),(0,n.jsx)(_.Z,{disabled:r.isSubmitting,type:"submit",variant:"contained",endIcon:(0,n.jsx)(v.Z,{}),children:"Update"})]})})]})})})};function T(e){let{children:a,value:r,index:i,...l}=e;return(0,n.jsx)("div",{role:"tabpanel",hidden:r!==i,id:"simple-tabpanel-".concat(i),"aria-labelledby":"simple-tab-".concat(i),...l,children:r===i&&(0,n.jsx)(m.Z,{sx:{pt:2},children:a})})}function S(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}function q(){let{user:e}=(0,i.useContext)(l.Z),[a,r]=(0,i.useState)({}),[p,x]=(0,i.useState)(!0),[Z,f]=(0,i.useState)(0),g=(e,a)=>{f(a)};return(0,i.useEffect)(()=>{e&&(x(!0),s.Z.get("/api/profile").then(e=>{r(e.data),x(!1)}).catch(e=>{console.log(e),t.Am.error(e.response.data)}).then(()=>x(!1)))},[e]),(0,n.jsxs)(o.ZP,{container:!0,spacing:1,children:[(0,n.jsxs)(o.ZP,{item:!0,xs:12,md:3,children:[(0,n.jsx)(c.Z,{loading:p}),(0,n.jsx)(h.Z,{profile:a})]}),(0,n.jsxs)(o.ZP,{item:!0,xs:12,md:9,children:[(0,n.jsx)(m.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,n.jsxs)(d.Z,{value:Z,onChange:g,"aria-label":"Pengaturan Profile",children:[(0,n.jsx)(u.Z,{label:"Ganti Data Profile",...S(0)}),(0,n.jsx)(u.Z,{label:"Ganti Password",...S(1)})]})}),(0,n.jsxs)(T,{value:Z,index:0,children:[(0,n.jsx)(c.Z,{loading:p}),!p&&(0,n.jsx)(w,{profile:a,setProfile:r})]}),(0,n.jsxs)(T,{value:Z,index:1,children:[(0,n.jsx)(c.Z,{loading:p}),!p&&(0,n.jsx)(y,{profile:a})]})]})]})}q.auth=!0,q.breadcrumb=[{path:"/admin",title:"Home"},{path:"/admin/profile",title:"Profile"}];var H=q},54678:function(e,a,r){"use strict";var n=r(85893),i=r(66242),l=r(44267),s=r(15861),t=r(69661),o=r(87357),d=r(62023),u=r(86886),m=r(83321);a.Z=function(e){let{profile:a,handleDelete:r}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)(l.Z,{children:[(0,n.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",flexWrap:"wrap",mb:3},children:[(0,n.jsx)(t.Z,{alt:a.nama_admin||a.name,src:a.image?a.image:".",sx:{width:160,height:160}}),(0,n.jsx)(s.Z,{variant:"h5",children:a.level})]}),(0,n.jsxs)(u.ZP,{container:!0,wrap:"wrap",sx:{typography:"body2"},spacing:1,children:[(0,n.jsx)(u.ZP,{item:!0,xs:4,children:"Nama"}),(0,n.jsxs)(u.ZP,{item:!0,xs:8,children:[": ",a.nama_admin]}),(0,n.jsx)(u.ZP,{item:!0,xs:4,children:"Unit"}),(0,n.jsxs)(u.ZP,{item:!0,xs:8,children:[": ",a.nama_bawaslu]}),(0,n.jsx)(u.ZP,{item:!0,xs:4,children:"Telp"}),(0,n.jsxs)(u.ZP,{item:!0,xs:8,children:[": ",a.telp_admin]}),(0,n.jsx)(u.ZP,{item:!0,xs:4,children:"Email"}),(0,n.jsxs)(u.ZP,{item:!0,xs:8,children:[": ",a.email_admin]}),(0,n.jsx)(u.ZP,{item:!0,xs:4,children:"Alamat"}),(0,n.jsxs)(u.ZP,{item:!0,xs:8,children:[": ",a.alamat_admin]})]})]}),(0,n.jsx)(d.Z,{children:r&&Boolean(a.editable)&&(0,n.jsx)(m.Z,{size:"small",color:"secondary",onClick:r,children:"Hapus"})})]})})}},53724:function(e,a,r){"use strict";r.d(a,{Z:function(){return l}});var n=r(85893),i=r(88078);function l(e){let{loading:a=!1}=e;return a?(0,n.jsx)(i.Z,{variant:"rectangular",width:"100%",sx:{minHeight:300}}):(0,n.jsx)(n.Fragment,{})}}},function(e){e.O(0,[9004,6886,8271,861,9774,2888,179],function(){return e(e.s=29660)}),_N_E=e.O()}]);