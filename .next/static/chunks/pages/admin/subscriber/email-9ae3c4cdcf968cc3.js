(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4978],{67593:function(e,i,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/subscriber/email",function(){return s(32706)}])},32706:function(e,i,s){"use strict";s.r(i),s.d(i,{default:function(){return M}});var a=s(85893),t=s(67294),n=s(11163),l=s(6154),r=s(55678),u=s(66242),o=s(83321),d=s(65362),c=s(78591),m=s(96540),h=s(13173),p=s(22961),b=s(77957),x=s(26307),j=s(93903),f=s(84415),Z=s(82175),g=s(74231),k=s(50135),S=s(50657),C=s(31425),P=s(6514),y=s(37645),v=s(94054),_=s(47312),w=s(31085),T=s(18972),A=s(59334),D=s(69368),z=s(56815),q=s(87357),I=s(87918),N=s(90918);let B=(e,i,s)=>{let a=s.current.getContent();if(!a)return r.Am.info("Isi Email Masih Kosong");e={...e,isi:a};let t=r.Am.loading("Tunggu Sebentar...",{autoClose:!1});l.Z.post("/api/subscriber/email",e).then(e=>{setTimeout(()=>i.onClose(),2e3),i.router.push({pathname:i.router.pathname,query:i.router.query}),r.Am.update(t,{render:e.data.message,type:e.data.type,isLoading:!1,autoClose:2e3})}).catch(e=>{console.log(e.response.data),r.Am.update(t,{render:e.response.data.message,type:"error",isLoading:!1,autoClose:2e3})})},E=g.Ry({penerima:g.Z_().required("Harus Dipilih"),subjek:g.Z_().required("Harus Diisi"),list_penerima:g.IX().when("penerima",{is:e=>"Select"===e,then:g.IX().min(1,"Minimal Pilih Salah Satu Penerima"),otherwise:g.IX()})});var L=function(e){let i=(0,t.useRef)(null),s=(0,Z.TA)({initialValues:{id:e.detail.id?e.detail.id:"",penerima:e.detail.penerima?e.detail.penerima:"",subjek:e.detail.subjek?e.detail.subjek:"",list_penerima:[],send:!1},enableReinitialize:!0,validationSchema:E,onSubmit:s=>B(s,e,i)});function n(e,i){i.setFieldValue("send",e,i.handleSubmit())}return((0,t.useEffect)(()=>{e.open||s.resetForm()},[e.open]),(0,t.useEffect)(()=>{s.setFieldValue("list_penerima",[])},[s.values.penerima]),0===e.subscriber.length)?(0,a.jsxs)(S.Z,{open:e.open,onClose:e.onClose,fullScreen:!1,children:[(0,a.jsx)(y.Z,{children:"Tidak Memiliki Subscriber"}),(0,a.jsx)(C.Z,{children:(0,a.jsx)(o.Z,{onClick:e.onClose,type:"button",children:"Tutup"})})]}):(0,a.jsx)(S.Z,{open:e.open,onClose:e.onClose,fullScreen:!0,children:(0,a.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,a.jsxs)(P.Z,{children:[(0,a.jsxs)(v.Z,{fullWidth:!0,error:s.touched.penerima&&Boolean(s.errors.penerima),children:[(0,a.jsx)(_.Z,{children:"Penerima *"}),(0,a.jsxs)(w.Z,{name:"penerima",label:"Penerima *",value:s.values.penerima,onChange:s.handleChange,onBlur:s.handleBlur,children:[(0,a.jsx)(T.Z,{value:"All",children:"Semua Subscriber"}),(0,a.jsx)(T.Z,{value:"Select",children:"Pilih Dari Daftar"})]}),(0,a.jsx)(z.Z,{children:s.touched.penerima&&s.errors.penerima})]}),"Select"===s.values.penerima&&(0,a.jsx)(I.Z,{label:s.values.list_penerima.length+" Penerima"}),"All"===s.values.penerima&&(0,a.jsx)(I.Z,{label:e.subscriber.length+" Penerima"}),"Select"===s.values.penerima&&(0,a.jsxs)(v.Z,{fullWidth:!0,sx:{mt:2},error:s.touched.list_penerima&&Boolean(s.errors.list_penerima),children:[(0,a.jsx)(_.Z,{id:"demo-multiple-chip-label",children:"Pilih Penerima *"}),(0,a.jsx)(w.Z,{labelId:"demo-multiple-chip-label",id:"demo-multiple-chip",multiple:!0,name:"list_penerima",label:"Pilih Penerima *",value:s.values.list_penerima,onChange:s.handleChange,onBlur:s.handleBlur,renderValue:e=>(0,a.jsx)(q.Z,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:e.map(e=>(0,a.jsx)(I.Z,{label:e},e))}),MenuProps:{PaperProps:{style:{maxHeight:224,width:250}}},children:e.subscriber.map(e=>(0,a.jsxs)(T.Z,{value:e.email_subscriber,children:[(0,a.jsx)(D.Z,{checked:s.values.list_penerima.indexOf(e.email_subscriber)>-1}),(0,a.jsx)(A.Z,{primary:e.email_subscriber})]},e.id))}),(0,a.jsx)(z.Z,{children:s.touched.list_penerima&&s.errors.list_penerima})]}),(0,a.jsx)(k.Z,{sx:{mb:2},fullWidth:!0,required:!0,margin:"normal",label:"Subjek",name:"subjek",value:s.values.subjek,onChange:s.handleChange,onBlur:s.handleBlur,error:s.touched.subjek&&Boolean(s.errors.subjek),helperText:s.touched.subjek&&s.errors.subjek}),(0,a.jsx)(N.M,{onInit:(e,s)=>i.current=s,apiKey:"mgdq5xn0ze8c48b5urdackwvsitkys648xw6lvt5ea9s40qy",initialValue:e.detail.isi?e.detail.isi:"",init:{height:400,plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste wordcount"],toolbar:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",content_style:"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"}})]}),(0,a.jsxs)(C.Z,{children:[(0,a.jsx)(o.Z,{type:"button",onClick:e=>n(!0,s),children:"Kirim dan Tutup"}),(0,a.jsx)(o.Z,{type:"button",onClick:e=>n(!1,s),children:"Draft dan Tutup"}),(0,a.jsx)(o.Z,{type:"button",onClick:e.onClose,children:"Buang"})]})]})})};function H(){let e=(0,n.useRouter)(),[i,s]=(0,t.useState)([]),[Z,g]=(0,t.useState)(10),[k,S]=(0,t.useState)([]),[C,P]=(0,t.useState)([]),[y,v]=(0,t.useState)(!1),[_,w]=(0,t.useState)({});function T(e){l.Z.get(e).then(e=>{setTimeout(()=>{s(i=>e.data)})}).catch(e=>{r.Am.error("Terjadi Kesalahan")})}(0,t.useEffect)(()=>{let i=!0;setTimeout(()=>{s(e=>[])});let{status:a}=e.query;return a?(i&&T("draft"===a?"/api/subscriber/email?status=0":"/api/subscriber/email?status=1"),()=>i=!1):T("/api/subscriber/email?status=1")},[e]),(0,t.useEffect)(()=>{l.Z.get("/api/subscriber").then(e=>{P(e.data)}).catch(e=>{r.Am.error("Terjadi Kesalahan")})},[]);let A=()=>{v(!1),w({})},D=e=>{let i=confirm("Yakin Hapus Data?");if(i){let i=r.Am.loading("Tunggu Sebentar...",{autoClose:!1});l.Z.delete("/api/subscriber/email/".concat(e)).then(a=>{setTimeout(()=>{s(i=>i.filter(i=>i.id!=e))}),r.Am.update(i,{render:a.data.message,type:"success",isLoading:!1,autoClose:2e3})}).catch(e=>{r.Am.update(i,{render:e.response.data.message,type:"error",isLoading:!1,autoClose:2e3})})}},z=()=>{let e=confirm("Yakin Hapus Data Terpilih?");if(e){let e=r.Am.loading("Tunggu Sebentar...",{autoClose:!1});l.Z.delete("/api/subscriber/email",{data:k}).then(i=>{setTimeout(()=>{s(e=>e.filter(e=>!k.includes(e.id)))}),r.Am.update(e,{render:i.data.message,type:"success",isLoading:!1,autoClose:2e3})}).catch(i=>{r.Am.update(e,{render:i.response.data.message,type:"error",isLoading:!1,autoClose:2e3})})}},q=e=>{v(!0),w(i=>e)};return(0,a.jsxs)(u.Z,{children:[(0,a.jsx)(o.Z,{variant:"outlined",sx:{mb:2},onClick:()=>v(!0),startIcon:(0,a.jsx)(m.Z,{}),children:"Tulis"}),(0,a.jsx)(o.Z,{variant:"outlined",disabled:"send"===e.query.status||!e.query.status,sx:{mb:2,mx:2},onClick:()=>{e.push({pathname:"/admin/subscriber/email",query:{status:"send"}})},startIcon:(0,a.jsx)(x.Z,{}),children:"Terkirim"}),(0,a.jsx)(o.Z,{variant:"outlined",disabled:"draft"===e.query.status,sx:{mb:2},onClick:()=>{e.push({pathname:"/admin/subscriber/email",query:{status:"draft"}})},startIcon:(0,a.jsx)(j.Z,{}),children:"Draft"}),(0,a.jsx)(c._,{autoHeight:!0,rows:i,columns:[{field:"nama_bawaslu",headerName:"Oleh",minWidth:200},{field:"penerima",headerName:"Penerima",minWidth:180},{field:"subjek",headerName:"Subjek",minWidth:180,flex:1},{field:"actions",type:"actions",headerName:"Actions",width:200,cellClassName:"actions",getActions:i=>0===i.row.status?[(0,a.jsx)(d.u,{icon:(0,a.jsx)(b.Z,{}),label:"Tulis Ulang",onClick:()=>q(i.row)},"0"),(0,a.jsx)(d.u,{icon:(0,a.jsx)(h.Z,{}),label:"Delete",onClick:()=>D(i.id)},"1")]:[(0,a.jsx)(d.u,{icon:(0,a.jsx)(p.Z,{}),label:"Detail",onClick:()=>e.push("/admin/subscriber/email/"+i.id)},"0"),(0,a.jsx)(d.u,{icon:(0,a.jsx)(h.Z,{}),label:"Delete",onClick:()=>D(i.id)},"1")]}],pageSize:Z,onPageSizeChange:e=>g(e),rowsPerPageOptions:[5,10,20],checkboxSelection:!0,disableSelectionOnClick:!0,onSelectionModelChange:e=>S(e),components:{Toolbar:f.N},componentsProps:{toolbar:{selectedItem:k,handleDeleteSelected:z}}}),(0,a.jsx)(L,{open:y,onClose:A,subscriber:C,detail:_,router:e})]})}H.auth=!0,H.breadcrumb=[{path:"/admin",title:"Home"},{path:"/admin/subscriber",title:"Subscriber"},{path:"/admin/subscriber/email",title:"Email"}];var M=H},84415:function(e,i,s){"use strict";s.d(i,{D:function(){return Z},N:function(){return f}});var a=s(85893),t=s(83321),n=s(86886),l=s(13173),r=s(9944),u=s(93946),o=s(34386),d=s(42176),c=s(6132),m=s(50853),h=s(54482),p=s(10930),b=s(36433);let x=e=>{let{selectedItem:i,handleDeleteSelected:s}=e;return(0,a.jsxs)(t.Z,{variant:"text",size:"small",startIcon:(0,a.jsx)(l.Z,{}),disabled:0===i.length,onClick:s,children:["Hapus ",i.length," Data Terpilih"]})},j=()=>(0,a.jsx)(t.Z,{sx:{fontSize:12},variant:"text",size:"small",startIcon:(0,a.jsx)(r.Z,{}),onClick:()=>window.open("https://www.adinstruments.com/support/knowledge-base/how-can-comma-separated-list-be-converted-cells-column-lt","_blank"),children:"Bantuan"});function f(e){return(0,a.jsx)(d.D,{children:(0,a.jsxs)(n.ZP,{container:!0,spacing:1,justify:"space-between",children:[(0,a.jsx)(n.ZP,{item:!0,children:(0,a.jsx)(c.S,{})}),(0,a.jsx)(n.ZP,{item:!0,children:(0,a.jsx)(m.M,{})}),(0,a.jsx)(n.ZP,{item:!0,children:(0,a.jsx)(h.L,{})}),(0,a.jsx)(n.ZP,{item:!0,children:(0,a.jsx)(p.Zh,{})}),(0,a.jsx)(n.ZP,{item:!0,children:(0,a.jsx)(j,{})}),(0,a.jsx)(n.ZP,{item:!0,children:(0,a.jsx)(x,{selectedItem:e.selectedItem,handleDeleteSelected:e.handleDeleteSelected})}),(0,a.jsxs)(n.ZP,{item:!0,xs:12,children:[(0,a.jsx)(b.T,{quickFilterParser:e=>e.split(",").map(e=>e.trim()).filter(e=>""!==e)}),e.multiSearch&&(0,a.jsx)(o.Z,{title:"Jika Lebih dari satu pencarian, gunakan tanda koma (,)",children:(0,a.jsx)(u.Z,{size:"small",children:(0,a.jsx)(r.Z,{fontSize:"inherit"})})})]})]})})}function Z(e){return(0,a.jsx)(d.D,{children:(0,a.jsxs)(n.ZP,{container:!0,spacing:1,children:[(0,a.jsx)(n.ZP,{item:!0,children:(0,a.jsx)(c.S,{sx:{fontSize:12}})}),(0,a.jsx)(n.ZP,{item:!0,children:(0,a.jsx)(h.L,{sx:{fontSize:12}})}),(0,a.jsx)(n.ZP,{item:!0,children:(0,a.jsx)(p.Zh,{sx:{fontSize:12}})}),(0,a.jsx)(n.ZP,{item:!0,sx:{mr:3},children:(0,a.jsx)(j,{sx:{fontSize:12}})}),(0,a.jsxs)(n.ZP,{sx:{pt:1,ml:1},children:[(0,a.jsx)(b.T,{quickFilterParser:e=>e.split(",").map(e=>e.trim()).filter(e=>""!==e)}),(0,a.jsx)(o.Z,{title:"Jika Lebih dari satu pencarian, gunakan tanda koma (,)",children:(0,a.jsx)(u.Z,{size:"small",children:(0,a.jsx)(r.Z,{fontSize:"inherit"})})})]})]})})}}},function(e){e.O(0,[9004,6886,8271,5015,5382,7085,9774,2888,179],function(){return e(e.s=67593)}),_N_E=e.O()}]);