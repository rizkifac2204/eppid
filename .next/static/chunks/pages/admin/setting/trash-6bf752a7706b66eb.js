(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6276],{10341:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/setting/trash",function(){return i(16421)}])},16421:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return T}});var n=i(85893),a=i(67294),s=i(6154),r=i(55678),l=i(85945),o=i(67848),d=i(66242),c=i(15861),h=i(65362),m=i(78591),u=i(69107),x=i(13173),p=i(22961),j=i(97097),g=i(84415),f=i(83321),Z=i(50657),P=i(31425),S=i(6514),A=i(37645),b=i(44267),k=i(86886),w=i(87357),_=i(43514),C=function(e){let{open:t,onClose:i,detail:a}=e;return(0,n.jsxs)(Z.Z,{open:t,onClose:i,fullScreen:!0,children:[(0,n.jsx)(A.Z,{children:"Detail Permohonan"}),(0,n.jsx)(S.Z,{children:(0,n.jsxs)(d.Z,{children:[(0,n.jsx)(b.Z,{children:(0,n.jsx)(k.ZP,{container:!0,spacing:2,children:(0,n.jsx)(k.ZP,{item:!0,children:(0,n.jsxs)(k.ZP,{container:!0,children:[(0,n.jsx)(k.ZP,{item:!0,xs:4,children:"Nomor Registrasi / Tiket"}),(0,n.jsxs)(k.ZP,{item:!0,xs:8,children:[": ",a.no_registrasi," /"," ",(0,n.jsx)(c.Z,{variant:"caption",color:"primary",children:a.tiket})]}),(0,n.jsx)(k.ZP,{item:!0,xs:4,children:"Kepada"}),(0,n.jsxs)(k.ZP,{item:!0,xs:8,children:[": ",a.nama_bawaslu]}),(0,n.jsx)(k.ZP,{item:!0,xs:4,children:"Tanggal"}),(0,n.jsxs)(k.ZP,{item:!0,xs:8,children:[": ",(0,n.jsx)(_.V2,{tanggal:a.tanggal_permohonan})]}),(0,n.jsx)(k.ZP,{item:!0,xs:4,children:"Nama"}),(0,n.jsxs)(k.ZP,{item:!0,xs:8,children:[": ",a.nama_pemohon]}),(0,n.jsx)(k.ZP,{item:!0,xs:4,children:"Pekerjaan"}),(0,n.jsxs)(k.ZP,{item:!0,xs:8,children:[": ",a.pekerjaan_pemohon]}),(0,n.jsx)(k.ZP,{item:!0,xs:4,children:"Telp/Hp"}),(0,n.jsxs)(k.ZP,{item:!0,xs:8,children:[": ",a.telp_pemohon]}),(0,n.jsx)(k.ZP,{item:!0,xs:4,children:"Email"}),(0,n.jsxs)(k.ZP,{item:!0,xs:8,children:[": ",a.email_pemohon]}),(0,n.jsx)(k.ZP,{item:!0,xs:4,children:"Alamat"}),(0,n.jsxs)(k.ZP,{item:!0,xs:8,children:[": ",a.alamat_pemohon]}),(0,n.jsx)(k.ZP,{item:!0,xs:4,children:"Rincian Informasi"}),(0,n.jsxs)(k.ZP,{item:!0,xs:8,children:[": ",a.rincian]}),(0,n.jsx)(k.ZP,{item:!0,xs:4,children:"Tujuan Informasi"}),(0,n.jsxs)(k.ZP,{item:!0,xs:8,children:[": ",a.tujuan]}),(0,n.jsx)(k.ZP,{item:!0,xs:4,children:"Cara Terima Informasi"}),(0,n.jsxs)(k.ZP,{item:!0,xs:8,children:[": ",a.cara_terima]}),(0,n.jsx)(k.ZP,{item:!0,xs:4,children:"Cara Dapat Informasi"}),(0,n.jsxs)(k.ZP,{item:!0,xs:8,children:[": ",a.cara_dapat]}),(0,n.jsx)(k.ZP,{item:!0,xs:4,children:"Status"}),(0,n.jsxs)(k.ZP,{item:!0,xs:8,children:[": ",a.status_permohonan]})]})})})}),(0,n.jsx)(w.Z,{p:2,children:(0,n.jsxs)(c.Z,{variant:"caption",children:["Dibuat :"," ",a.created_at&&new Date(a.created_at).toISOString().split("T")[0]]})})]})}),(0,n.jsx)(P.Z,{children:(0,n.jsx)(f.Z,{onClick:i,type:"button",children:"Tutup"})})]})};function D(e){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(c.Z,{children:[e.row.no_registrasi,(0,n.jsx)("br",{}),(0,n.jsx)(c.Z,{variant:"caption",color:"primary",children:e.row.tiket})]})})}function N(){let e=(0,l.NL)(),[t,i]=(0,a.useState)(10),[c,f]=(0,a.useState)([]),[Z,P]=(0,a.useState)({}),[S,A]=(0,a.useState)(!1),{data:b,isLoading:k}=(0,o.a)({queryKey:["trashs"],queryFn:e=>{let{signal:t}=e;return s.Z.get("/api/setting/trash",{signal:t}).then(e=>e.data).catch(e=>{throw Error(e.response.data.message)})}}),w=t=>{let i=confirm("Hapus Data Secara Permanen?");if(i){let i=r.Am.loading("Tunggu Sebentar...",{autoClose:!1});s.Z.post("/api/setting/trash/",{id:t.id}).then(t=>{setTimeout(()=>{e.invalidateQueries(["trashs"])}),r.Am.update(i,{render:t.data.message,type:"success",isLoading:!1,autoClose:2e3})}).catch(e=>{r.Am.update(i,{render:e.response.data.message,type:"error",isLoading:!1,autoClose:2e3})})}},_=t=>{let i=confirm("Yakin Mengembalikan Data?");if(i){let i=r.Am.loading("Tunggu Sebentar...",{autoClose:!1});s.Z.put("/api/setting/trash/",{id:t.id}).then(t=>{setTimeout(()=>{e.invalidateQueries(["trashs"]),e.invalidateQueries(["permohonans"])}),r.Am.update(i,{render:t.data.message,type:"success",isLoading:!1,autoClose:2e3})}).catch(e=>{r.Am.update(i,{render:e.response.data.message,type:"error",isLoading:!1,autoClose:2e3})})}},N=()=>{A(!1)},T=e=>{P(e),A(!0)},v=()=>{let t=confirm("Yakin Hapus Data Terpilih?");if(t){let t=r.Am.loading("Tunggu Sebentar...",{autoClose:!1});s.Z.delete("/api/setting/trash/",{data:{id:c}}).then(i=>{setTimeout(()=>{e.invalidateQueries(["trashs"])}),r.Am.update(t,{render:i.data.message,type:"success",isLoading:!1,autoClose:2e3})}).catch(e=>{r.Am.update(t,{render:e.response.data.message,type:"error",isLoading:!1,autoClose:2e3})})}};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.Z,{height:630,children:(0,n.jsx)(m._,{loading:k,autoHeight:!0,rows:b||[],columns:[{field:"no_registrasi",headerName:"Nomor Registrasi",minWidth:100,flex:1,renderCell:D,valueFormatter:e=>{let{value:t}=e;return"".concat(t)}},{field:"tiket",headerName:"Tiket",minWidth:180,hide:!0},{field:"nama_bawaslu",headerName:"Kepada",minWidth:220},{field:"platform",headerName:"Platform",minWidth:180},{field:"provinsi",headerName:"Provinsi",minWidth:180,hide:!0},{field:"nama_pemohon",headerName:"Pemohon",minWidth:180},{field:"telp_pemohon",headerName:"Telp/HP",minWidth:130,hide:!0},{field:"email_pemohon",headerName:"Email",minWidth:130,hide:!0},{field:"tanggal_permohonan",headerName:"Tanggal",minWidth:120,valueGetter:e=>{var t=new Date(e.row.tanggal_permohonan);return t instanceof Date&&!isNaN(t.valueOf())?t.toISOString().split("T")[0]:"-"},hide:!0},{field:"deleted_at",headerName:"Tanggal Hapus",minWidth:120,valueGetter:e=>{var t=new Date(e.row.deleted_at);return t instanceof Date&&!isNaN(t.valueOf())?t.toISOString().split("T")[0]:"-"}},{field:"status_permohonan",headerName:"Status",minWidth:150,hide:!0},{field:"actions",type:"actions",headerName:"Actions",width:200,cellClassName:"actions",getActions:e=>[(0,n.jsx)(h.u,{icon:(0,n.jsx)(p.Z,{}),label:"Detail",onClick:()=>T(e.row)},"0"),(0,n.jsx)(h.u,{icon:(0,n.jsx)(j.Z,{}),label:"Kembalikan",onClick:()=>_(e.row)},"1"),(0,n.jsx)(h.u,{icon:(0,n.jsx)(x.Z,{}),label:"Delete Permanen",onClick:()=>w(e.row)},"2")]}],pageSize:t,onPageSizeChange:e=>i(e),rowsPerPageOptions:[5,10,20,50],checkboxSelection:!0,disableSelectionOnClick:!0,onSelectionModelChange:e=>f(e),components:{Toolbar:g.N},componentsProps:{toolbar:{selectedItem:c,handleDeleteSelected:v,multiSearch:!0}},columnBuffer:8,initialState:{filter:{filterModel:{items:[],quickFilterLogicOperator:u.f.Or}}}})}),(0,n.jsx)(C,{open:S,onClose:N,detail:Z})]})}N.auth=!0,N.breadcrumb=[{path:"/admin",title:"Home"},{path:"/admin/setting/trash",title:"Data Dibuang"}];var T=N},43514:function(e,t,i){"use strict";i.d(t,{xX:function(){return m},V2:function(){return u},dl:function(){return x},Kz:function(){return h},aU:function(){return p}});var n=i(85893),a=i(92592),s=i(67294),r=i(25675),l=i.n(r),o=i(6154),d={src:"/_next/static/media/no-file.1bd1d555.png",height:253,width:320,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAqklEQVR42mNQ8Mtlct7wLdt544865w3fk4H0DiC+6Lzx5yUgrcQAJFa7bPq1FEhHuWz8OcF1618rl82/QoBiBS6bfq5kADIWAXEhUIcGUMLFZt5dXsfVHwSBkgxA3M0AlFwDxBOA1sQATSkHsh8C8WugdS5ABc0MQF1FQMZxoOR+F6CkC5ANpK8DTewH0nMZgAIWQMY5IN7nsvn3LCA/GSiZDKSnuWz+HQAAkZJzf8f/2FoAAAAASUVORK5CYII=",blurWidth:8,blurHeight:6},c=i(48764).lW;function h(e){let{text:t}=e,[i,r]=(0,s.useState)("");return(0,s.useEffect)(()=>{if(t)return a.toDataURL(t).then(e=>{r(e)}),()=>{}},[t]),(0,n.jsx)("div",{children:(0,n.jsx)("img",{src:i,alt:"QrCode"})})}function m(){let e=new Date,t=String(e.getDate()).padStart(2,"0"),i=String(e.getMonth()+1).padStart(2,"0"),n=e.getFullYear();return t+"/"+i+"/"+n}function u(e){let{tanggal:t}=e;if(t){var i=new Date(t);return i instanceof Date&&!isNaN(i.valueOf())?i.toISOString().split("T")[0]:"-"}}function x(e){let{number:t}=e;return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function p(e){let{image:t,altText:i="Pemohon"}=e,[a,r]=(0,s.useState)(d);return(0,s.useEffect)(()=>{if(!t)return;let e=!0;return o.Z.get("/api/services/file/public/upload/".concat(t),{responseType:"arraybuffer"}).then(e=>{let t=c.from(e.data,"binary").toString("base64");r("data:".concat(e.headers["content-type"],";base64, ").concat(t))}).catch(e=>{console.log(e.response)}),function(){}},[t]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(l(),{src:a,alt:i,priority:!0,width:280,height:0})})}},84415:function(e,t,i){"use strict";i.d(t,{D:function(){return Z},N:function(){return f}});var n=i(85893),a=i(83321),s=i(86886),r=i(13173),l=i(9944),o=i(93946),d=i(34386),c=i(42176),h=i(6132),m=i(50853),u=i(54482),x=i(10930),p=i(36433);let j=e=>{let{selectedItem:t,handleDeleteSelected:i}=e;return(0,n.jsxs)(a.Z,{variant:"text",size:"small",startIcon:(0,n.jsx)(r.Z,{}),disabled:0===t.length,onClick:i,children:["Hapus ",t.length," Data Terpilih"]})},g=()=>(0,n.jsx)(a.Z,{sx:{fontSize:12},variant:"text",size:"small",startIcon:(0,n.jsx)(l.Z,{}),onClick:()=>window.open("https://www.adinstruments.com/support/knowledge-base/how-can-comma-separated-list-be-converted-cells-column-lt","_blank"),children:"Bantuan"});function f(e){return(0,n.jsx)(c.D,{children:(0,n.jsxs)(s.ZP,{container:!0,spacing:1,justify:"space-between",children:[(0,n.jsx)(s.ZP,{item:!0,children:(0,n.jsx)(h.S,{})}),(0,n.jsx)(s.ZP,{item:!0,children:(0,n.jsx)(m.M,{})}),(0,n.jsx)(s.ZP,{item:!0,children:(0,n.jsx)(u.L,{})}),(0,n.jsx)(s.ZP,{item:!0,children:(0,n.jsx)(x.Zh,{})}),(0,n.jsx)(s.ZP,{item:!0,children:(0,n.jsx)(g,{})}),(0,n.jsx)(s.ZP,{item:!0,children:(0,n.jsx)(j,{selectedItem:e.selectedItem,handleDeleteSelected:e.handleDeleteSelected})}),(0,n.jsxs)(s.ZP,{item:!0,xs:12,children:[(0,n.jsx)(p.T,{quickFilterParser:e=>e.split(",").map(e=>e.trim()).filter(e=>""!==e)}),e.multiSearch&&(0,n.jsx)(d.Z,{title:"Jika Lebih dari satu pencarian, gunakan tanda koma (,)",children:(0,n.jsx)(o.Z,{size:"small",children:(0,n.jsx)(l.Z,{fontSize:"inherit"})})})]})]})})}function Z(e){return(0,n.jsx)(c.D,{children:(0,n.jsxs)(s.ZP,{container:!0,spacing:1,children:[(0,n.jsx)(s.ZP,{item:!0,children:(0,n.jsx)(h.S,{sx:{fontSize:12}})}),(0,n.jsx)(s.ZP,{item:!0,children:(0,n.jsx)(u.L,{sx:{fontSize:12}})}),(0,n.jsx)(s.ZP,{item:!0,children:(0,n.jsx)(x.Zh,{sx:{fontSize:12}})}),(0,n.jsx)(s.ZP,{item:!0,sx:{mr:3},children:(0,n.jsx)(g,{sx:{fontSize:12}})}),(0,n.jsxs)(s.ZP,{sx:{pt:1,ml:1},children:[(0,n.jsx)(p.T,{quickFilterParser:e=>e.split(",").map(e=>e.trim()).filter(e=>""!==e)}),(0,n.jsx)(d.Z,{title:"Jika Lebih dari satu pencarian, gunakan tanda koma (,)",children:(0,n.jsx)(o.Z,{size:"small",children:(0,n.jsx)(l.Z,{fontSize:"inherit"})})})]})]})})}}},function(e){e.O(0,[9004,6886,7848,5015,5382,3304,39,9774,2888,179],function(){return e(e.s=10341)}),_N_E=e.O()}]);