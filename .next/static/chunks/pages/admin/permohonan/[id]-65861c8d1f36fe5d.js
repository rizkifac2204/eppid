(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1529],{34105:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/permohonan/[id]",function(){return a(18598)}])},18598:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return X}});var s=a(85893),i=a(11163),r=a(67294),t=a(6154),o=a(55678),l=a(47116),d=a(66242),c=a(44267),x=a(15861),m=a(86886),h=a(87357),p=a(16323),j=a(15497),u=a(88075),Z=a(13173),g=a(16023),f=a(17373),P=a(56868),b=a(53724),_=a(69611),k=a(59982),y=a(17806),v=a(57424),A=a(78445),S=a(93946),w=a(62023),T=a(90629),C=a(34386),B=a(69661),D=a(67358),I=a(38895),N=a(22797),R=a(23508),F=a(93843),E=a(10901),L=a(39386),H=a(24519),K=a(58953),O=a(90948),U=a(98456);let M=(0,O.ZP)("input")({display:"none"});function Y(e){return(0,s.jsxs)(h.Z,{sx:{position:"relative",display:"inline-flex"},children:[(0,s.jsx)(U.Z,{variant:"determinate",...e}),(0,s.jsx)(h.Z,{sx:{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,s.jsx)(x.Z,{variant:"caption",component:"div",color:"text.secondary",children:"".concat(Math.round(e.value),"%")})})]})}var z=function(e){let{data:n,path:a,namaFile:i,responses:l,setResponses:d}=e,[c,x]=(0,r.useState)(!1),[m,h]=(0,r.useState)(0),p=e=>{x(!0);let s=e.target.files[0];if(!s)return;let r="(".concat(n.id,")_").concat(s.name),c=new FormData;c.append("file",s,r),c.append("id",n.id),c.append("kolom",i),t.Z.post("/api/permohonan/upload",c,{headers:{"content-type":"multipart/form-data",destinationfile:a},onUploadProgress:e=>{h(Math.round(100*e.loaded/e.total))}}).then(e=>{o.Am.success(e.data.message);let a=l.map(a=>a.id==n.id?{...a,[i]:e.data.file}:a);d(a)}).catch(e=>{console.log(e),o.Am.error(e.response.data.message)}).then(e=>{x(!1),h(0)})},j=(e,n,s)=>{let r=confirm("Yakin Hapus File Data?");if(r){let s=o.Am.loading("Tunggu Sebentar...",{autoClose:!1});t.Z.delete("/api/permohonan/upload",{params:{id:e,file:n,path:a,namaFile:i}}).then(n=>{let a=l.map(n=>n.id==e?{...n,[i]:null}:n);d(a),o.Am.update(s,{render:n.data.message,type:"success",isLoading:!1,autoClose:2e3})}).catch(e=>{console.log(e),o.Am.update(s,{render:e.response.data.message,type:"error",isLoading:!1,autoClose:2e3})})}};return n[i]?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("a",{href:"/api/services/file/public/"+a+"/"+n[i],target:"_blank",rel:"noreferrer",children:n[i]}),(0,s.jsx)("br",{}),(0,s.jsx)("a",{href:"/api/services/file/public/"+a+"/"+n[i],download:!0,children:(0,s.jsx)(S.Z,{children:(0,s.jsx)(K.Z,{})})}),(0,s.jsx)(S.Z,{title:"Delete File",onClick:()=>j(n.id,n[i],i),children:(0,s.jsx)(Z.Z,{})})]}):(0,s.jsxs)(s.Fragment,{children:[!c&&(0,s.jsxs)("label",{htmlFor:"file"+n.id,children:[(0,s.jsx)(M,{id:"file"+n.id,type:"file",onChange:p}),(0,s.jsx)(S.Z,{color:"secondary","aria-label":"upload",component:"span",children:(0,s.jsx)(H.Z,{})})]}),c&&(0,s.jsx)(Y,{value:m})]})},W=function(e){var n;let{data:a,onDeleteResponse:i,responses:r,setResponses:l}=e,h=e=>{let n=confirm("Yakin Hapus Data?");if(n){let n=o.Am.loading("Tunggu Sebentar...",{autoClose:!1});t.Z.delete("/api/permohonan/"+a.permohonan_id+"/responses/"+e).then(a=>{i(e),o.Am.update(n,{render:a.data.message,type:"success",isLoading:!1,autoClose:2e3})}).catch(e=>{o.Am.update(n,{render:e.response.data.message,type:"error",isLoading:!1,autoClose:2e3})})}},p=e=>{let n=confirm("Konfirmasi Kirim Ulang Email");if(n){let n=o.Am.loading("Tunggu Sebentar...",{autoClose:!1});t.Z.put("/api/permohonan/"+a.permohonan_id+"/responses/"+e).then(a=>{let s=r.map(n=>n.id==e?{...n,mailed:1}:n);l(s),o.Am.update(n,{render:a.data.message,type:"success",isLoading:!1,autoClose:2e3})}).catch(e=>{console.log(e.response),o.Am.update(n,{render:e.response.data.message,type:"error",isLoading:!1,autoClose:2e3})})}};return(0,s.jsx)(m.ZP,{item:!0,xs:12,md:6,children:(0,s.jsxs)(D.Z,{children:[(0,s.jsxs)(I.Z,{expandIcon:(0,s.jsx)(R.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:[(0,s.jsx)(A.Z,{avatar:(0,s.jsx)(B.Z,{sx:{bgcolor:function(e){let n,a=0;for(n=0;n<e.length;n+=1)a=e.charCodeAt(n)+((a<<5)-a);let s="#";for(n=0;n<3;n+=1){let e=a>>8*n&255;s+="00".concat(e.toString(16)).slice(-2)}return s}(n=a.jenis_respon)},children:"".concat(n.split(" ")[0][0]).concat(n.split(" ")[1][0])}),title:a.jenis_respon,subheader:(0,s.jsx)(_.V2,{tanggal:a.tanggal_respon})}),(0,s.jsxs)(w.Z,{disableSpacing:!0,children:[a.mailed?(0,s.jsx)(C.Z,{title:"Email Terkirim",children:(0,s.jsx)(F.Z,{fontSize:"small",color:"primary"})}):(0,s.jsx)(C.Z,{title:"Email Tidak Terkirim",children:(0,s.jsx)(E.Z,{fontSize:"small",color:"primary"})}),(0,s.jsx)(S.Z,{"aria-label":"Hapus Response",onClick:e=>{e.preventDefault(),h(a.id)},children:(0,s.jsx)(Z.Z,{})}),(0,s.jsx)(S.Z,{"aria-label":"Kirim Ulang Email",onClick:e=>{e.preventDefault(),p(a.id)},children:(0,s.jsx)(C.Z,{title:"Kirim Ulang Email",children:(0,s.jsx)(L.Z,{})})})]})]}),(0,s.jsx)(N.Z,{children:(0,s.jsx)(d.Z,{children:(0,s.jsx)(c.Z,{children:(0,s.jsxs)(m.ZP,{container:!0,spacing:1,children:[(0,s.jsx)(m.ZP,{item:!0,xs:12,md:6,children:(0,s.jsxs)(T.Z,{sx:{p:1},children:[(0,s.jsx)(x.Z,{variant:"caption",color:"secondary",children:"Penguasaan Informasi:"}),(0,s.jsx)(x.Z,{gutterBottom:!0,children:a.penguasaan_informasi})]})}),(0,s.jsx)(m.ZP,{item:!0,xs:12,md:6,children:(0,s.jsxs)(T.Z,{sx:{p:1},children:[(0,s.jsx)(x.Z,{variant:"caption",color:"secondary",children:"Bentuk Fisik:"}),(0,s.jsx)(x.Z,{gutterBottom:!0,children:a.bentuk_fisik})]})}),(0,s.jsx)(m.ZP,{item:!0,xs:12,md:6,children:(0,s.jsxs)(T.Z,{sx:{p:1},children:[(0,s.jsx)(x.Z,{variant:"caption",color:"secondary",children:"Biaya:"}),(0,s.jsxs)(x.Z,{gutterBottom:!0,children:["Rp. ",(0,s.jsx)(_.dl,{number:a.ket_biaya})]})]})}),(0,s.jsx)(m.ZP,{item:!0,xs:12,md:6,children:(0,s.jsxs)(T.Z,{sx:{p:1},children:[(0,s.jsx)(x.Z,{variant:"caption",color:"secondary",children:"Jangka Waktu:"}),(0,s.jsxs)(x.Z,{gutterBottom:!0,children:[a.jangka_waktu," Hari"]})]})}),(0,s.jsx)(m.ZP,{item:!0,xs:12,children:(0,s.jsxs)(T.Z,{sx:{p:1},children:[(0,s.jsx)(x.Z,{variant:"caption",color:"secondary",children:"Penjelasan Penghitaman:"}),(0,s.jsx)(x.Z,{gutterBottom:!0,children:a.penjelasan_penghitaman})]})}),(0,s.jsx)(m.ZP,{item:!0,xs:12,md:6,children:(0,s.jsxs)(T.Z,{sx:{p:1},children:[(0,s.jsx)(x.Z,{variant:"caption",color:"secondary",children:"Surat Pemberitahuan"}),(0,s.jsx)("br",{}),(0,s.jsx)(z,{path:"pemberitahuan",namaFile:"file_surat_pemberitahuan",data:a,responses:r,setResponses:l})]})}),(0,s.jsx)(m.ZP,{item:!0,xs:12,md:6,children:(0,s.jsxs)(T.Z,{sx:{p:1},children:[(0,s.jsx)(x.Z,{variant:"caption",color:"secondary",children:"File Informasi:"}),(0,s.jsx)("br",{}),(0,s.jsx)(z,{path:"response",namaFile:"file_informasi",data:a,responses:r,setResponses:l})]})}),a.tolak_id&&(0,s.jsx)(m.ZP,{item:!0,xs:12,children:(0,s.jsxs)(T.Z,{sx:{p:1,bgcolor:"warning.main"},children:[(0,s.jsx)(x.Z,{variant:"caption",color:"secondary",children:"Dasar Pengecualian"}),(0,s.jsx)(x.Z,{gutterBottom:!0,children:a.dasar_pengecualian}),(0,s.jsx)(x.Z,{variant:"caption",color:"secondary",children:"Pada Pasal"}),(0,s.jsx)(x.Z,{gutterBottom:!0,children:a.pada_pasal}),(0,s.jsx)(x.Z,{variant:"caption",color:"secondary",children:"Keterangan Konsekuensi"}),(0,s.jsx)(x.Z,{gutterBottom:!0,children:a.ket_konsekuensi})]})}),(0,s.jsx)(m.ZP,{item:!0,xs:12,children:(0,s.jsxs)(T.Z,{sx:{p:1},children:[(0,s.jsx)(x.Z,{variant:"caption",color:"secondary",children:"Pesan Admin:"}),(0,s.jsx)(x.Z,{gutterBottom:!0,children:a.pesan})]})})]})})})})]})})};function V(){let e=(0,i.useRouter)(),[n,a]=(0,r.useState)({}),[A,S]=(0,r.useState)([]),[w,T]=(0,r.useState)(!1),[C,B]=(0,r.useState)({}),{id:D}=e.query,I=(0,r.useRef)(),N=(0,r.useRef)();(0,r.useEffect)(()=>{D&&(t.Z.get("/api/permohonan/"+D).then(e=>{a(e.data)}).catch(n=>{o.Am.error(n.response.data.message),setTimeout(()=>e.push("/admin/permohonan"),1e3)}),t.Z.get("/api/permohonan/"+D+"/responses").then(e=>{S(e.data)}).catch(e=>{o.Am.error(e.response.data.message)}))},[D,e]);let R=e=>{let n=A.filter(n=>n.id!=e);S(n)},F=()=>{let n=confirm("Yakin Hapus Data?");if(n){let n=o.Am.loading("Tunggu Sebentar...",{autoClose:!1});t.Z.delete("/api/permohonan/"+D).then(a=>{o.Am.update(n,{render:a.data.message,type:"success",isLoading:!1,autoClose:2e3}),e.push("/admin/permohonan")}).catch(e=>{o.Am.update(n,{render:e.response.data.message,type:"error",isLoading:!1,autoClose:2e3})})}},E=e=>{let a=o.Am.loading("Menyiapkan Format...");t.Z.get("/api/services/profileBawaslu?id="+n.bawaslu_id).then(n=>{B(n.data),o.Am.dismiss(a),e()}).catch(e=>{console.log(e),o.Am.update(a,{render:"Terjadi Kesalahan",type:"error",isLoading:!1,autoClose:2e3})})},L=e=>{let n=0===Object.keys(C).length;if(n)return E(()=>{"bukti"===e?K():H()});"bukti"===e?K():H()},H=(0,l.useReactToPrint)({content:()=>I.current}),K=(0,l.useReactToPrint)({content:()=>N.current}),O=()=>{T(!0)},U=()=>{T(!1)},M=[{icon:(0,s.jsx)(f.Z,{}),name:"Tanggapi",action:O},{icon:(0,s.jsx)(P.Z,{}),name:"Print Bukti Permohonan",action:()=>L("bukti")},{icon:(0,s.jsx)(g.Z,{}),name:"Print Data Permohonan",action:()=>L("data")},{icon:(0,s.jsx)(Z.Z,{}),name:"Hapus",action:F}];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(b.Z,{loading:0==Object.keys(n).length}),0!==Object.keys(n).length&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(d.Z,{sx:{mb:2},children:[(0,s.jsxs)(x.Z,{variant:"h5",component:"div",gutterBottom:!0,sx:{bgcolor:"background.paper",p:2},children:["Detail Permohonan ",n.no_registrasi]}),(0,s.jsx)(c.Z,{children:(0,s.jsxs)(m.ZP,{container:!0,spacing:2,children:[(0,s.jsx)(m.ZP,{item:!0,xs:12,md:3,sx:{position:"relative",minHeight:200},children:(0,s.jsx)(_.aU,{altText:n.nama_pemohon,image:n.identitas_pemohon})}),(0,s.jsx)(m.ZP,{item:!0,xs:12,md:9,children:(0,s.jsxs)(m.ZP,{container:!0,children:[(0,s.jsx)(m.ZP,{item:!0,xs:4,children:"Nomor Registrasi / Tiket"}),(0,s.jsxs)(m.ZP,{item:!0,xs:8,children:[": ",n.no_registrasi," /"," ",(0,s.jsx)(x.Z,{variant:"caption",color:"primary",children:n.tiket})]}),(0,s.jsx)(m.ZP,{item:!0,xs:4,children:"Kepada"}),(0,s.jsxs)(m.ZP,{item:!0,xs:8,children:[": ",n.nama_bawaslu]}),(0,s.jsx)(m.ZP,{item:!0,xs:4,children:"Tanggal"}),(0,s.jsxs)(m.ZP,{item:!0,xs:8,children:[": ",(0,s.jsx)(_.V2,{tanggal:n.tanggal_permohonan})]}),(0,s.jsx)(m.ZP,{item:!0,xs:4,children:"Nama"}),(0,s.jsxs)(m.ZP,{item:!0,xs:8,children:[": ",n.nama_pemohon]}),(0,s.jsx)(m.ZP,{item:!0,xs:4,children:"Pekerjaan"}),(0,s.jsxs)(m.ZP,{item:!0,xs:8,children:[": ",n.pekerjaan_pemohon]}),(0,s.jsx)(m.ZP,{item:!0,xs:4,children:"Pendidikan"}),(0,s.jsxs)(m.ZP,{item:!0,xs:8,children:[": ",n.pendidikan_pemohon]}),(0,s.jsx)(m.ZP,{item:!0,xs:4,children:"Telp/Hp"}),(0,s.jsxs)(m.ZP,{item:!0,xs:8,children:[": ",n.telp_pemohon]}),(0,s.jsx)(m.ZP,{item:!0,xs:4,children:"Email"}),(0,s.jsxs)(m.ZP,{item:!0,xs:8,children:[": ",n.email_pemohon]}),(0,s.jsx)(m.ZP,{item:!0,xs:4,children:"Alamat"}),(0,s.jsxs)(m.ZP,{item:!0,xs:8,children:[": ",n.alamat_pemohon]}),(0,s.jsx)(m.ZP,{item:!0,xs:4,children:"Rincian Informasi"}),(0,s.jsxs)(m.ZP,{item:!0,xs:8,children:[": ",n.rincian]}),(0,s.jsx)(m.ZP,{item:!0,xs:4,children:"Tujuan Informasi"}),(0,s.jsxs)(m.ZP,{item:!0,xs:8,children:[": ",n.tujuan]}),(0,s.jsx)(m.ZP,{item:!0,xs:4,children:"Cara Terima Informasi"}),(0,s.jsxs)(m.ZP,{item:!0,xs:8,children:[": ",n.cara_terima]}),(0,s.jsx)(m.ZP,{item:!0,xs:4,children:"Cara Dapat Informasi"}),(0,s.jsxs)(m.ZP,{item:!0,xs:8,children:[": ",n.cara_dapat]}),(0,s.jsx)(m.ZP,{item:!0,xs:4,children:"Status Permohonan"}),(0,s.jsxs)(m.ZP,{item:!0,xs:8,children:[": ",n.status_permohonan]})]})})]})}),(0,s.jsxs)(h.Z,{p:2,children:[(0,s.jsxs)(x.Z,{variant:"caption",children:["Dibuat :"," ",n.created_at&&new Date(n.created_at).toISOString().split("T")[0]]}),(0,s.jsx)(h.Z,{sx:{transform:"translateZ(0px)",flexGrow:1},children:(0,s.jsx)(p.Z,{ariaLabel:"SpeedDial",sx:{position:"absolute",bottom:0,right:0},icon:(0,s.jsx)(j.Z,{}),children:M.map(e=>(0,s.jsx)(u.Z,{icon:e.icon,tooltipTitle:e.name,onClick:e.action,FabProps:{}},e.name))})})]})]}),(0,s.jsx)(m.ZP,{container:!0,spacing:2,children:A.map(e=>(0,s.jsx)(W,{data:e,onDeleteResponse:R,responses:A,setResponses:S},e.id))}),(0,s.jsx)(v.Z,{open:w,onClose:U,fullScreen:!0,detail:n,setDetail:a,responses:A,setResponses:S}),(0,s.jsx)(k.Z,{ref:I,detail:n,profileBawaslu:C}),(0,s.jsx)(y.Z,{ref:N,detail:n,profileBawaslu:C})]})]})}V.auth=!0,V.breadcrumb=[{path:"/admin",title:"Home"},{path:"/admin/permohonan",title:"Permohonan"},{path:"/admin/permohonan",title:"Detail"}];var X=V},17806:function(e,n,a){"use strict";var s=a(85893),i=a(25675),r=a.n(i),t=a(67294),o=a(15799),l=a(48452),d=a(66242),c=a(15861),x=a(87357),m=a(7906),h=a(295),p=a(53252),j=a(72882),u=a(68509),Z=a(69611);let g=(0,o.Z)({palette:{mode:"light"}}),f=t.forwardRef((e,n)=>{let{detail:a,profileBawaslu:i}=e,t=a.no_registrasi?a.no_registrasi:a.tiket;return(0,s.jsx)(l.Z,{theme:g,children:(0,s.jsxs)(d.Z,{sx:{display:"none",displayPrint:"block",p:2},ref:n,children:[(0,s.jsxs)(x.Z,{sx:{display:"flex",flexWrap:"nowrap",p:2,mb:2},children:[(0,s.jsx)(x.Z,{sx:{position:"relative",width:100,height:90,mr:3},children:(0,s.jsx)(r(),{src:"/images/logo-buttom.png",alt:"Logo",layout:"fill",priority:!0})}),(0,s.jsxs)(x.Z,{children:[(0,s.jsx)(c.Z,{variant:"h5",children:(0,s.jsx)("b",{children:"BADAN PENGAWAS PEMILIHAN UMUM"})}),(0,s.jsxs)(c.Z,{children:[i.alamat_bawaslu," ",(0,s.jsx)("br",{}),i.telp_bawaslu," / ",i.email_bawaslu]})]})]}),(0,s.jsxs)(c.Z,{variant:"h5",align:"center",children:["TANDA BUKTI ",(0,s.jsx)("br",{})," PERMOHONAN INFORMASI PUBLIK"]}),(0,s.jsx)(j.Z,{children:(0,s.jsx)(m.Z,{sx:{minWidth:650},"aria-label":"simple table",children:(0,s.jsxs)(h.Z,{children:[(0,s.jsx)(u.Z,{children:(0,s.jsx)(p.Z,{colSpan:2,children:"Yang menyerahkan formulir permohonan Informasi Publik:"})}),(0,s.jsxs)(u.Z,{children:[(0,s.jsx)(p.Z,{children:"Nama"}),(0,s.jsxs)(p.Z,{children:[": ",(0,s.jsx)("b",{children:a.nama_pemohon})]})]}),(0,s.jsxs)(u.Z,{children:[(0,s.jsx)(p.Z,{children:"Alamat"}),(0,s.jsxs)(p.Z,{children:[": ",(0,s.jsx)("b",{children:a.alamat_pemohon})]})]}),(0,s.jsxs)(u.Z,{children:[(0,s.jsx)(p.Z,{children:"Tanggal penyerahan formulir permohonan"}),(0,s.jsxs)(p.Z,{children:[":"," ",(0,s.jsx)("b",{children:(0,s.jsx)(Z.V2,{tanggal:a.tanggal_permohonan})})]})]}),(0,s.jsxs)(u.Z,{children:[(0,s.jsx)(p.Z,{children:"Nomor Registrasi Permohonan"}),(0,s.jsxs)(p.Z,{children:[":"," ",a.no_registrasi?(0,s.jsx)("b",{children:a.no_registrasi}):"Belum Tersedia"]})]}),(0,s.jsx)(u.Z,{children:(0,s.jsx)(p.Z,{colSpan:2,children:"Yang menerima formulir permohonan Informasi Publik:"})}),(0,s.jsxs)(u.Z,{children:[(0,s.jsx)(p.Z,{children:"Nama"}),(0,s.jsxs)(p.Z,{children:[": ",(0,s.jsx)("b",{children:i.nama_admin})]})]}),(0,s.jsxs)(u.Z,{children:[(0,s.jsx)(p.Z,{children:"Jabatan"}),(0,s.jsxs)(p.Z,{children:[": ",(0,s.jsx)("b",{children:"Andministrator PPID"})]})]}),(0,s.jsx)(u.Z,{sx:{border:0},children:(0,s.jsxs)(p.Z,{colSpan:2,children:[i.kota_bawaslu,", ",(0,s.jsx)(Z.xX,{})]})})]})})}),(0,s.jsxs)(x.Z,{children:[(0,s.jsx)(Z.Kz,{text:"https://ppidapp.bawaslu.go.id/qr/permohonan/"+t}),(0,s.jsxs)(x.Z,{sx:{fontSize:10,m:1},children:["(Kode merupakan bukti Sah dari Sistem PPID Bawaslu ",(0,s.jsx)("br",{})," selama dapat terbaca dan terscan dengan benar)"]})]})]})})});f.displayName="BuktiPermohonan",n.Z=f},53724:function(e,n,a){"use strict";a.d(n,{Z:function(){return r}});var s=a(85893),i=a(88078);function r(e){let{loading:n=!1}=e;return n?(0,s.jsx)(i.Z,{variant:"rectangular",width:"100%",sx:{minHeight:300}}):(0,s.jsx)(s.Fragment,{})}}},function(e){e.O(0,[9004,6886,8271,3304,967,1868,1235,8682,1738,9774,2888,179],function(){return e(e.s=34105)}),_N_E=e.O()}]);