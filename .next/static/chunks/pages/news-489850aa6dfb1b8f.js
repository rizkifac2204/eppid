(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6134],{5115:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news",function(){return s(10614)}])},10614:function(e,a,s){"use strict";s.r(a);var i=s(85893),l=s(67294),n=s(82175),r=s(74231),t=s(55678),o=s(6154),d=s(56815),u=s(19141);let c=(e,a,s)=>{let i=t.Am.loading("Tunggu Sebentar...",{autoClose:!1});o.Z.post("/api/public/subscribe",e).then(e=>{a(e.data),t.Am.update(i,{render:e.data.message,type:"success",isLoading:!1,autoClose:2e3})}).catch(e=>{console.log(e),t.Am.update(i,{render:"err.response.data.message",type:"error",isLoading:!1,autoClose:2e3})}).then(()=>{s(!1)})},h=r.Ry({email:r.Z_().email("Email Tidak Valid").required("Email Harus Diisi"),kepada:r.Z_().required("Harus Diisi"),id_prov:r.Rx().when("kepada",{is:e=>"Bawaslu Republik Indonesia"!==e,then:r.Rx().required("Provinsi Harus Dipilih"),otherwise:r.Rx()}),id_kabkota:r.Rx().when("kepada",{is:e=>"Bawaslu"===e,then:r.Rx().required("Kabupaten/Kota Harus Diisi"),otherwise:r.Rx()})}),p=()=>{let[e,a]=(0,l.useState)([]),[s,r]=(0,l.useState)([]),[t,p]=(0,l.useState)({email:"",kepada:"",id_prov:"",id_kabkota:""}),x=(0,l.useRef)(null),m=s=>{if(0!==e.length){s&&s();return}o.Z.get("/api/services/provinsis-selected").then(e=>{a(()=>e.data),s&&s()}).catch(e=>{console.log(e)})},v=(e,a)=>{o.Z.get("/api/services/provinsis-selected/"+e).then(e=>{r(()=>e.data.kabkota),a&&a()}).catch(e=>{console.log(e)})},k=(0,n.TA)({initialValues:t,enableReinitialize:!0,validationSchema:h,onSubmit:(e,a)=>{let{setSubmitting:s}=a;c(e,j,s)}}),j=e=>{console.log(e)};return(0,l.useEffect)(()=>{k.values.kepada&&(k.setFieldValue("id_prov",""),k.setFieldValue("id_kabkota",""),"Bawaslu Republik Indonesia"!==k.values.kepada&&m())},[k.values.kepada]),(0,l.useEffect)(()=>{k.setFieldValue("id_kabkota",""),k.values.id_prov&&"Bawaslu"===k.values.kepada&&v(k.values.id_prov)},[k.values.id_prov]),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{id:"news-popup",children:[(0,i.jsxs)("div",{className:"background-top",children:[(0,i.jsxs)("div",{className:"item-title",children:[(0,i.jsxs)("h2",{children:[(0,i.jsx)("i",{className:"fa fa-newspaper-o fa-2x"}),(0,i.jsx)("br",{}),(0,i.jsx)("span",{className:"point",children:"Berlangganan"})," Berita Bawaslu."]}),(0,i.jsx)("p",{children:"Daftarkan email kamu dan dapatkan kabar terbaru yang akan kami kirimkan melalui email"})]}),(0,i.jsx)("button",{className:"scroll-chevron",onClick:()=>{x.current.scrollIntoView({behavior:"smooth",block:"start"})},children:(0,i.jsx)("i",{className:"fa fa-chevron-down fa-2x"})})]}),(0,i.jsxs)("div",{className:"info-item",ref:x,children:[(0,i.jsx)("div",{className:"first-block",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"col-md-12",children:(0,i.jsx)("h2",{children:"Dapatkan Berita Terupdate"})})})}),(0,i.jsxs)("div",{className:"newsletter-block",children:[(0,i.jsx)("div",{className:"col-xs-12 col-sm-12 col-lg-5 block-left-newsletter",children:(0,i.jsx)("i",{className:"fa fa-bell"})}),(0,i.jsx)("div",{className:"col-xs-12 col-sm-12 col-lg-7 block-right-newsletter",children:(0,i.jsxs)("div",{id:"subscribe",children:[(0,i.jsx)("h2",{children:"Daftarkan Email"}),(0,i.jsx)("p",{children:"Selalu update informasi terbaru dengan manjadi bagian dari kami"}),(0,i.jsxs)("form",{id:"notifyMe",onSubmit:k.handleSubmit,children:[(0,i.jsxs)("div",{className:"row",style:{marginBottom:"20px"},children:[(0,i.jsx)("div",{className:"col-xs-12 col-sm-4",children:(0,i.jsxs)(u.sP,{error:k.touched.kepada&&Boolean(k.errors.kepada),children:[(0,i.jsx)(u.qL,{children:"Ditujukan Kepada *"}),(0,i.jsxs)(u.uU,{name:"kepada",value:k.values.kepada,onChange:k.handleChange,onBlur:k.handleBlur,children:[(0,i.jsx)(u.D4,{value:"Bawaslu Republik Indonesia",children:"Bawaslu Republik Indonesia"}),(0,i.jsx)(u.D4,{value:"Bawaslu Provinsi",children:"Bawaslu Provinsi"}),(0,i.jsx)(u.D4,{value:"Bawaslu",children:"Bawaslu Kabupaten/Kota"})]}),(0,i.jsx)(d.Z,{children:k.touched.kepada&&k.errors.kepada})]})}),k.values.kepada&&"Bawaslu Republik Indonesia"!==k.values.kepada&&(0,i.jsx)("div",{className:"col-xs-12 col-sm-4",children:(0,i.jsxs)(u.sP,{error:k.touched.id_prov&&Boolean(k.errors.id_prov),children:[(0,i.jsx)(u.qL,{children:"Provinsi *"}),(0,i.jsxs)(u.uU,{name:"id_prov",value:k.values.id_prov,onChange:k.handleChange,onBlur:k.handleBlur,children:[(0,i.jsx)(u.D4,{value:"",children:"--Pilih--"}),0!==e.length&&e.map((e,a)=>(0,i.jsxs)(u.D4,{value:e.id,children:["Bawaslu Provinsi"===k.values.kepada&&"Bawaslu"," ",e.provinsi]},a))]}),(0,i.jsx)(d.Z,{children:k.touched.id_prov&&k.errors.id_prov})]})}),k.values.kepada&&"Bawaslu"===k.values.kepada&&(0,i.jsx)("div",{className:"col-xs-12 col-sm-4",children:(0,i.jsxs)(u.sP,{error:k.touched.id_kabkota&&Boolean(k.errors.id_kabkota),children:[(0,i.jsx)(u.qL,{children:"Kabupaten/Kota *"}),(0,i.jsx)(u.uU,{name:"id_kabkota",value:k.values.id_kabkota,onChange:k.handleChange,children:0!==s.length&&s.map(e=>(0,i.jsxs)(u.D4,{value:e.id,children:["Bawaslu ",e.kabkota]},e.id))}),(0,i.jsx)(d.Z,{children:k.touched.id_kabkota&&k.errors.id_kabkota})]})})]}),(0,i.jsx)("div",{className:"form-group",children:(0,i.jsxs)("div",{className:"controls",children:[(0,i.jsx)("input",{type:"email",name:"email",placeholder:"Masukan Email",className:"form-control email srequiredField",value:k.values.email,onChange:k.handleChange,onBlur:k.handleBlur}),(0,i.jsx)("button",{disabled:k.isSubmitting,className:"btn btn-lg submit",type:"submit",children:"Subscribe"}),(0,i.jsx)("div",{className:"clear"})]})}),k.touched.email&&Boolean(k.errors.email)&&(0,i.jsx)("p",{children:k.errors.email})]})]})}),(0,i.jsx)("div",{className:"clear"}),(0,i.jsx)("div",{className:"legal-info col-md-12",children:(0,i.jsx)("div",{className:"text-center",children:(0,i.jsx)("p",{children:"Pejabat Pengelola Informasi dan Dokumentasi Bawaslu Terintegrasi"})})})]})]})]})})};p.public=!0,a.default=p},19141:function(e,a,s){"use strict";s.d(a,{BH:function(){return w},D4:function(){return f},Kn:function(){return _},bc:function(){return m},k6:function(){return j},nc:function(){return B},oC:function(){return g},qL:function(){return k},sP:function(){return v},uU:function(){return b}});var i=s(85893),l=s(50135),n=s(94054),r=s(40476),t=s(36872),o=s(50480),d=s(47312),u=s(31085),c=s(18972),h=s(69368),p=s(59874);let x=(0,p.Z)(()=>({root:{"& .MuiPaper-root":{borderRadius:"100px",boxShadow:"10px 10px 5px 0px rgba(0,0,0,0.75);"}},list:{maxHeight:300}})),m=e=>(0,i.jsx)(l.Z,{fullWidth:!0,required:!0,margin:"normal",variant:"standard",inputProps:{style:{fontSize:14}},InputLabelProps:{style:{fontSize:14}},...e}),v=e=>(0,i.jsx)(n.Z,{fullWidth:!0,sx:{mt:2.5},...e}),k=e=>(0,i.jsx)(d.Z,{style:{fontSize:14,marginLeft:-15},...e}),j=e=>(0,i.jsx)(r.Z,{style:{fontSize:14},...e}),b=e=>{let a=x();return(0,i.jsx)(u.Z,{MenuProps:{classes:{list:a.list}},required:!0,sx:{fontSize:14},variant:"standard",...e})},f=e=>(0,i.jsx)(c.Z,{style:{fontSize:14},...e}),g=e=>(0,i.jsx)(o.Z,{control:(0,i.jsx)(t.Z,{required:!0}),...e}),w=e=>(0,i.jsx)("p",{style:{fontSize:14,color:"grey"},children:e.text}),_=e=>(0,i.jsx)(h.Z,{sx:{"& .MuiSvgIcon-root":{fontSize:18}},...e}),B=e=>{let{text:a}=e;return(0,i.jsx)("p",{style:{fontSize:14,color:"grey"},children:a})}}},function(e){e.O(0,[9004,8271,5015,5542,9774,2888,179],function(){return e(e.s=5115)}),_N_E=e.O()}]);