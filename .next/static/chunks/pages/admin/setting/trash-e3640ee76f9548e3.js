(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6276],{10341:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/setting/trash",function(){return i(11478)}])},11478:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return C}});var n=i(85893),a=i(67294),s=i(6154),r=i(55678),l=i(66242),o=i(15861),c=i(65362),d=i(78591),m=i(69107),h=i(13173),u=i(22961),x=i(97097),p=i(84415),j=i(83321),f=i(50657),g=i(31425),Z=i(6514),P=i(37645),S=i(44267),_=i(86886),b=i(87357),k=i(69611),w=function(e){let{open:t,onClose:i,detail:a}=e;return(0,n.jsxs)(f.Z,{open:t,onClose:i,fullScreen:!0,children:[(0,n.jsx)(P.Z,{children:"Detail Permohonan"}),(0,n.jsx)(Z.Z,{children:(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(S.Z,{children:(0,n.jsx)(_.ZP,{container:!0,spacing:2,children:(0,n.jsx)(_.ZP,{item:!0,children:(0,n.jsxs)(_.ZP,{container:!0,children:[(0,n.jsx)(_.ZP,{item:!0,xs:4,children:"Nomor Registrasi / Tiket"}),(0,n.jsxs)(_.ZP,{item:!0,xs:8,children:[": ",a.no_registrasi," /"," ",(0,n.jsx)(o.Z,{variant:"caption",color:"primary",children:a.tiket})]}),(0,n.jsx)(_.ZP,{item:!0,xs:4,children:"Kepada"}),(0,n.jsxs)(_.ZP,{item:!0,xs:8,children:[": ",a.nama_bawaslu]}),(0,n.jsx)(_.ZP,{item:!0,xs:4,children:"Tanggal"}),(0,n.jsxs)(_.ZP,{item:!0,xs:8,children:[": ",(0,n.jsx)(k.V2,{tanggal:a.tanggal_permohonan})]}),(0,n.jsx)(_.ZP,{item:!0,xs:4,children:"Nama"}),(0,n.jsxs)(_.ZP,{item:!0,xs:8,children:[": ",a.nama_pemohon]}),(0,n.jsx)(_.ZP,{item:!0,xs:4,children:"Pekerjaan"}),(0,n.jsxs)(_.ZP,{item:!0,xs:8,children:[": ",a.pekerjaan_pemohon]}),(0,n.jsx)(_.ZP,{item:!0,xs:4,children:"Telp/Hp"}),(0,n.jsxs)(_.ZP,{item:!0,xs:8,children:[": ",a.telp_pemohon]}),(0,n.jsx)(_.ZP,{item:!0,xs:4,children:"Email"}),(0,n.jsxs)(_.ZP,{item:!0,xs:8,children:[": ",a.email_pemohon]}),(0,n.jsx)(_.ZP,{item:!0,xs:4,children:"Alamat"}),(0,n.jsxs)(_.ZP,{item:!0,xs:8,children:[": ",a.alamat_pemohon]}),(0,n.jsx)(_.ZP,{item:!0,xs:4,children:"Rincian Informasi"}),(0,n.jsxs)(_.ZP,{item:!0,xs:8,children:[": ",a.rincian]}),(0,n.jsx)(_.ZP,{item:!0,xs:4,children:"Tujuan Informasi"}),(0,n.jsxs)(_.ZP,{item:!0,xs:8,children:[": ",a.tujuan]}),(0,n.jsx)(_.ZP,{item:!0,xs:4,children:"Cara Terima Informasi"}),(0,n.jsxs)(_.ZP,{item:!0,xs:8,children:[": ",a.cara_terima]}),(0,n.jsx)(_.ZP,{item:!0,xs:4,children:"Cara Dapat Informasi"}),(0,n.jsxs)(_.ZP,{item:!0,xs:8,children:[": ",a.cara_dapat]}),(0,n.jsx)(_.ZP,{item:!0,xs:4,children:"Status"}),(0,n.jsxs)(_.ZP,{item:!0,xs:8,children:[": ",a.status_permohonan]})]})})})}),(0,n.jsx)(b.Z,{p:2,children:(0,n.jsxs)(o.Z,{variant:"caption",children:["Dibuat :"," ",a.created_at&&new Date(a.created_at).toISOString().split("T")[0]]})})]})}),(0,n.jsx)(g.Z,{children:(0,n.jsx)(j.Z,{onClick:i,type:"button",children:"Tutup"})})]})};function N(e){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(o.Z,{children:[e.row.no_registrasi,(0,n.jsx)("br",{}),(0,n.jsx)(o.Z,{variant:"caption",color:"primary",children:e.row.tiket})]})})}function T(){let[e,t]=(0,a.useState)([]),[i,o]=(0,a.useState)(10),[j,f]=(0,a.useState)([]),[g,Z]=(0,a.useState)({}),[P,S]=(0,a.useState)(!1);(0,a.useEffect)(()=>{s.Z.get("/api/setting/trash").then(e=>{t(e.data)}).catch(e=>{console.log(e),r.Am.error("Terjadi Kesalahan")})},[]);let _=e=>{let i=confirm("Hapus Data Secara Permanen?");if(i){let i=r.Am.loading("Tunggu Sebentar...",{autoClose:!1});s.Z.post("/api/setting/trash/",{id:e.id}).then(n=>{setTimeout(()=>{t(t=>t.filter(t=>t.id!=e.id))}),r.Am.update(i,{render:n.data.message,type:"success",isLoading:!1,autoClose:2e3})}).catch(e=>{r.Am.update(i,{render:e.response.data.message,type:"error",isLoading:!1,autoClose:2e3})})}},b=e=>{let i=confirm("Yakin Mengembalikan Data?");if(i){let i=r.Am.loading("Tunggu Sebentar...",{autoClose:!1});s.Z.put("/api/setting/trash/",{id:e.id}).then(n=>{setTimeout(()=>{t(t=>t.filter(t=>t.id!=e.id))}),r.Am.update(i,{render:n.data.message,type:"success",isLoading:!1,autoClose:2e3})}).catch(e=>{r.Am.update(i,{render:e.response.data.message,type:"error",isLoading:!1,autoClose:2e3})})}},k=()=>{S(!1)},T=e=>{Z(e),S(!0)},C=()=>{let e=confirm("Yakin Hapus Data Terpilih?");if(e){let e=r.Am.loading("Tunggu Sebentar...",{autoClose:!1});s.Z.delete("/api/setting/trash/",{data:{id:j}}).then(i=>{setTimeout(()=>{t(e=>e.filter(e=>!j.includes(e.id)))}),r.Am.update(e,{render:i.data.message,type:"success",isLoading:!1,autoClose:2e3})}).catch(t=>{r.Am.update(e,{render:t.response.data.message,type:"error",isLoading:!1,autoClose:2e3})})}};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{height:630,children:(0,n.jsx)(d._,{autoHeight:!0,rows:e,columns:[{field:"no_registrasi",headerName:"Nomor Registrasi",minWidth:100,flex:1,renderCell:N,valueFormatter:e=>{let{value:t}=e;return"".concat(t)}},{field:"tiket",headerName:"Tiket",minWidth:180,hide:!0},{field:"nama_bawaslu",headerName:"Kepada",minWidth:220},{field:"platform",headerName:"Platform",minWidth:180},{field:"provinsi",headerName:"Provinsi",minWidth:180,hide:!0},{field:"nama_pemohon",headerName:"Pemohon",minWidth:180},{field:"telp_pemohon",headerName:"Telp/HP",minWidth:130,hide:!0},{field:"email_pemohon",headerName:"Email",minWidth:130,hide:!0},{field:"tanggal_permohonan",headerName:"Tanggal",minWidth:120,valueGetter:e=>{var t=new Date(e.row.tanggal_permohonan);return t instanceof Date&&!isNaN(t.valueOf())?t.toISOString().split("T")[0]:"-"},hide:!0},{field:"deleted_at",headerName:"Tanggal Hapus",minWidth:120,valueGetter:e=>{var t=new Date(e.row.deleted_at);return t instanceof Date&&!isNaN(t.valueOf())?t.toISOString().split("T")[0]:"-"}},{field:"status_permohonan",headerName:"Status",minWidth:150,hide:!0},{field:"actions",type:"actions",headerName:"Actions",width:200,cellClassName:"actions",getActions:e=>[(0,n.jsx)(c.u,{icon:(0,n.jsx)(u.Z,{}),label:"Detail",onClick:()=>T(e.row)},"0"),(0,n.jsx)(c.u,{icon:(0,n.jsx)(x.Z,{}),label:"Kembalikan",onClick:()=>b(e.row)},"1"),(0,n.jsx)(c.u,{icon:(0,n.jsx)(h.Z,{}),label:"Delete Permanen",onClick:()=>_(e.row)},"2")]}],pageSize:i,onPageSizeChange:e=>o(e),rowsPerPageOptions:[5,10,20,50],checkboxSelection:!0,disableSelectionOnClick:!0,onSelectionModelChange:e=>f(e),components:{Toolbar:p.N},componentsProps:{toolbar:{selectedItem:j,handleDeleteSelected:C,multiSearch:!0}},columnBuffer:8,initialState:{filter:{filterModel:{items:[],quickFilterLogicOperator:m.f.Or}}}})}),(0,n.jsx)(w,{open:P,onClose:k,detail:g})]})}T.auth=!0,T.breadcrumb=[{path:"/admin",title:"Home"},{path:"/admin/setting/trash",title:"Data Dibuang"}];var C=T},69611:function(e,t,i){"use strict";i.d(t,{Kz:function(){return d},V2:function(){return h},aU:function(){return x},dl:function(){return u},xX:function(){return m}});var n=i(85893),a=i(92592),s=i(67294),r=i(25675),l=i.n(r),o=i(6154),c=i(48764).lW;function d(e){let{text:t}=e,[i,r]=(0,s.useState)("");return(0,s.useEffect)(()=>{if(t)return a.toDataURL(t).then(e=>{r(e)}),()=>{}},[t]),(0,n.jsx)("div",{children:(0,n.jsx)("img",{src:i,alt:"QrCode"})})}function m(){let e=new Date,t=String(e.getDate()).padStart(2,"0"),i=String(e.getMonth()+1).padStart(2,"0"),n=e.getFullYear();return t+"/"+i+"/"+n}function h(e){let{tanggal:t}=e;if(t){var i=new Date(t);return i instanceof Date&&!isNaN(i.valueOf())?i.toISOString().split("T")[0]:"-"}}function u(e){let{number:t}=e;return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function x(e){let{image:t,altText:i="Pemohon"}=e,[a,r]=(0,s.useState)("/images/no-file.png");return(0,s.useEffect)(()=>{if(!t)return;let e=!0;return o.Z.get("/api/services/file/public/upload/".concat(t),{responseType:"arraybuffer"}).then(e=>{let t=c.from(e.data,"binary").toString("base64");r("data:".concat(e.headers["content-type"],";base64, ").concat(t))}).catch(e=>{console.log(e.response)}),function(){}},[t]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(l(),{src:a,alt:i,layout:"fill",objectFit:"contain",priority:!0})})}},84415:function(e,t,i){"use strict";i.d(t,{D:function(){return Z},N:function(){return g}});var n=i(85893),a=i(83321),s=i(86886),r=i(13173),l=i(9944),o=i(93946),c=i(34386),d=i(42176),m=i(6132),h=i(50853),u=i(54482),x=i(10930),p=i(36433);let j=e=>{let{selectedItem:t,handleDeleteSelected:i}=e;return(0,n.jsxs)(a.Z,{variant:"text",size:"small",startIcon:(0,n.jsx)(r.Z,{}),disabled:0===t.length,onClick:i,children:["Hapus ",t.length," Data Terpilih"]})},f=()=>(0,n.jsx)(a.Z,{sx:{fontSize:12},variant:"text",size:"small",startIcon:(0,n.jsx)(l.Z,{}),onClick:()=>window.open("https://www.adinstruments.com/support/knowledge-base/how-can-comma-separated-list-be-converted-cells-column-lt","_blank"),children:"Bantuan"});function g(e){return(0,n.jsx)(d.D,{children:(0,n.jsxs)(s.ZP,{container:!0,spacing:1,justify:"space-between",children:[(0,n.jsx)(s.ZP,{item:!0,children:(0,n.jsx)(m.S,{})}),(0,n.jsx)(s.ZP,{item:!0,children:(0,n.jsx)(h.M,{})}),(0,n.jsx)(s.ZP,{item:!0,children:(0,n.jsx)(u.L,{})}),(0,n.jsx)(s.ZP,{item:!0,children:(0,n.jsx)(x.Zh,{})}),(0,n.jsx)(s.ZP,{item:!0,children:(0,n.jsx)(f,{})}),(0,n.jsx)(s.ZP,{item:!0,children:(0,n.jsx)(j,{selectedItem:e.selectedItem,handleDeleteSelected:e.handleDeleteSelected})}),(0,n.jsxs)(s.ZP,{item:!0,xs:12,children:[(0,n.jsx)(p.T,{quickFilterParser:e=>e.split(",").map(e=>e.trim()).filter(e=>""!==e)}),e.multiSearch&&(0,n.jsx)(c.Z,{title:"Jika Lebih dari satu pencarian, gunakan tanda koma (,)",children:(0,n.jsx)(o.Z,{size:"small",children:(0,n.jsx)(l.Z,{fontSize:"inherit"})})})]})]})})}function Z(e){return(0,n.jsx)(d.D,{children:(0,n.jsxs)(s.ZP,{container:!0,spacing:1,children:[(0,n.jsx)(s.ZP,{item:!0,children:(0,n.jsx)(m.S,{sx:{fontSize:12}})}),(0,n.jsx)(s.ZP,{item:!0,children:(0,n.jsx)(u.L,{sx:{fontSize:12}})}),(0,n.jsx)(s.ZP,{item:!0,children:(0,n.jsx)(x.Zh,{sx:{fontSize:12}})}),(0,n.jsx)(s.ZP,{item:!0,sx:{mr:3},children:(0,n.jsx)(f,{sx:{fontSize:12}})}),(0,n.jsxs)(s.ZP,{sx:{pt:1,ml:1},children:[(0,n.jsx)(p.T,{quickFilterParser:e=>e.split(",").map(e=>e.trim()).filter(e=>""!==e)}),(0,n.jsx)(c.Z,{title:"Jika Lebih dari satu pencarian, gunakan tanda koma (,)",children:(0,n.jsx)(o.Z,{size:"small",children:(0,n.jsx)(l.Z,{fontSize:"inherit"})})})]})]})})}}},function(e){e.O(0,[9004,6886,5015,5382,3304,39,9774,2888,179],function(){return e(e.s=10341)}),_N_E=e.O()}]);