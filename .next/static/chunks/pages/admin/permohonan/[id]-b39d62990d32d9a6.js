(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1529],{34105:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/permohonan/[id]",function(){return a(30224)}])},30224:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return G}});var s=a(85893),i=a(11163),r=a(67294),t=a(6154),o=a(55678),l=a(47116),d=a(85945),c=a(67848),x=a(66242),h=a(44267),m=a(15861),p=a(86886),j=a(87357),u=a(16323),Z=a(15497),g=a(88075),f=a(81458),P=a(13173),b=a(16023),_=a(17373),k=a(56868),y=a(53724),v=a(43514),A=a(59982),w=a(17806),S=a(57444),T=a(78445),C=a(93946),B=a(62023),D=a(90629),F=a(34386),I=a(69661),N=a(67358),E=a(38895),L=a(22797),K=a(23508),R=a(93843),H=a(10901),U=a(39386),M=a(24519),Q=a(58953),O=a(90948),q=a(98456);let Y=(0,O.ZP)("input")({display:"none"});function z(e){return(0,s.jsxs)(j.Z,{sx:{position:"relative",display:"inline-flex"},children:[(0,s.jsx)(q.Z,{variant:"determinate",...e}),(0,s.jsx)(j.Z,{sx:{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,s.jsx)(m.Z,{variant:"caption",component:"div",color:"text.secondary",children:"".concat(Math.round(e.value),"%")})})]})}var W=function(e){let{data:n,path:a,namaFile:i,invalidateQueries:l}=e,[d,c]=(0,r.useState)(!1),[x,h]=(0,r.useState)(0),m=e=>{c(!0);let s=e.target.files[0];if(!s)return;let r="(".concat(n.id,")_").concat(s.name),d=new FormData;d.append("file",s,r),d.append("id",n.id),d.append("kolom",i),t.Z.post("/api/permohonan/upload",d,{headers:{"content-type":"multipart/form-data",destinationfile:a},onUploadProgress:e=>{h(Math.round(100*e.loaded/e.total))}}).then(e=>{o.Am.success(e.data.message),l()}).catch(e=>{console.log(e),o.Am.error(e.response.data.message)}).then(e=>{c(!1),h(0)})},p=(e,n,s)=>{let r=confirm("Yakin Hapus File Data?");if(r){let s=o.Am.loading("Tunggu Sebentar...",{autoClose:!1});t.Z.delete("/api/permohonan/upload",{params:{id:e,file:n,path:a,namaFile:i}}).then(e=>{l(),o.Am.update(s,{render:e.data.message,type:"success",isLoading:!1,autoClose:2e3})}).catch(e=>{console.log(e),o.Am.update(s,{render:e.response.data.message,type:"error",isLoading:!1,autoClose:2e3})})}};return n[i]?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("a",{href:"/api/services/file/public/"+a+"/"+n[i],target:"_blank",rel:"noreferrer",children:n[i]}),(0,s.jsx)("br",{}),(0,s.jsx)("a",{href:"/api/services/file/public/"+a+"/"+n[i],download:!0,children:(0,s.jsx)(C.Z,{children:(0,s.jsx)(Q.Z,{})})}),(0,s.jsx)(C.Z,{title:"Delete File",onClick:()=>p(n.id,n[i],i),children:(0,s.jsx)(P.Z,{})})]}):(0,s.jsxs)(s.Fragment,{children:[!d&&(0,s.jsxs)("label",{htmlFor:"file"+n.id,children:[(0,s.jsx)(Y,{id:"file"+n.id,type:"file",onChange:m}),(0,s.jsx)(C.Z,{color:"secondary","aria-label":"upload",component:"span",children:(0,s.jsx)(M.Z,{})})]}),d&&(0,s.jsx)(z,{value:x})]})},V=function(e){var n;let{data:a,invalidateQueries:i}=e,r=e=>{let n=confirm("Yakin Hapus Data?");if(n){let n=o.Am.loading("Tunggu Sebentar...",{autoClose:!1});t.Z.delete("/api/permohonan/"+a.permohonan_id+"/responses/"+e).then(e=>{i(),o.Am.update(n,{render:e.data.message,type:"success",isLoading:!1,autoClose:2e3})}).catch(e=>{o.Am.update(n,{render:e.response.data.message,type:"error",isLoading:!1,autoClose:2e3})})}},l=e=>{let n=confirm("Konfirmasi Kirim Ulang Email");if(n){let n=o.Am.loading("Tunggu Sebentar...",{autoClose:!1});t.Z.put("/api/permohonan/"+a.permohonan_id+"/responses/"+e).then(e=>{i(),o.Am.update(n,{render:e.data.message,type:"success",isLoading:!1,autoClose:2e3})}).catch(e=>{console.log(e.response),o.Am.update(n,{render:e.response.data.message,type:"error",isLoading:!1,autoClose:2e3})})}};return(0,s.jsx)(p.ZP,{item:!0,xs:12,md:6,children:(0,s.jsxs)(N.Z,{children:[(0,s.jsxs)(E.Z,{expandIcon:(0,s.jsx)(K.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:[(0,s.jsx)(T.Z,{avatar:(0,s.jsx)(I.Z,{sx:{bgcolor:function(e){let n,a=0;for(n=0;n<e.length;n+=1)a=e.charCodeAt(n)+((a<<5)-a);let s="#";for(n=0;n<3;n+=1){let e=a>>8*n&255;s+="00".concat(e.toString(16)).slice(-2)}return s}(n=a.jenis_respon)},children:"".concat(n.split(" ")[0][0]).concat(n.split(" ")[1][0])}),title:a.jenis_respon,subheader:(0,s.jsx)(v.V2,{tanggal:a.tanggal_respon})}),(0,s.jsxs)(B.Z,{disableSpacing:!0,children:[a.mailed?(0,s.jsx)(F.Z,{title:"Email Terkirim",children:(0,s.jsx)(R.Z,{fontSize:"small",color:"primary"})}):(0,s.jsx)(F.Z,{title:"Email Tidak Terkirim",children:(0,s.jsx)(H.Z,{fontSize:"small",color:"primary"})}),(0,s.jsx)(C.Z,{"aria-label":"Hapus Response",onClick:e=>{e.preventDefault(),r(a.id)},children:(0,s.jsx)(P.Z,{})}),(0,s.jsx)(C.Z,{"aria-label":"Kirim Ulang Email",onClick:e=>{e.preventDefault(),l(a.id)},children:(0,s.jsx)(F.Z,{title:"Kirim Ulang Email",children:(0,s.jsx)(U.Z,{})})})]})]}),(0,s.jsx)(L.Z,{children:(0,s.jsx)(x.Z,{children:(0,s.jsx)(h.Z,{children:(0,s.jsxs)(p.ZP,{container:!0,spacing:1,children:[(0,s.jsx)(p.ZP,{item:!0,xs:12,md:6,children:(0,s.jsxs)(D.Z,{sx:{p:1},children:[(0,s.jsx)(m.Z,{variant:"caption",color:"secondary",children:"Penguasaan Informasi:"}),(0,s.jsx)(m.Z,{gutterBottom:!0,children:a.penguasaan_informasi})]})}),(0,s.jsx)(p.ZP,{item:!0,xs:12,md:6,children:(0,s.jsxs)(D.Z,{sx:{p:1},children:[(0,s.jsx)(m.Z,{variant:"caption",color:"secondary",children:"Bentuk Fisik:"}),(0,s.jsx)(m.Z,{gutterBottom:!0,children:a.bentuk_fisik})]})}),(0,s.jsx)(p.ZP,{item:!0,xs:12,md:6,children:(0,s.jsxs)(D.Z,{sx:{p:1},children:[(0,s.jsx)(m.Z,{variant:"caption",color:"secondary",children:"Biaya:"}),(0,s.jsxs)(m.Z,{gutterBottom:!0,children:["Rp. ",(0,s.jsx)(v.dl,{number:a.ket_biaya})]})]})}),(0,s.jsx)(p.ZP,{item:!0,xs:12,md:6,children:(0,s.jsxs)(D.Z,{sx:{p:1},children:[(0,s.jsx)(m.Z,{variant:"caption",color:"secondary",children:"Jangka Waktu:"}),(0,s.jsxs)(m.Z,{gutterBottom:!0,children:[a.jangka_waktu," Hari"]})]})}),(0,s.jsx)(p.ZP,{item:!0,xs:12,children:(0,s.jsxs)(D.Z,{sx:{p:1},children:[(0,s.jsx)(m.Z,{variant:"caption",color:"secondary",children:"Penjelasan Penghitaman:"}),(0,s.jsx)(m.Z,{gutterBottom:!0,children:a.penjelasan_penghitaman})]})}),(0,s.jsx)(p.ZP,{item:!0,xs:12,md:6,children:(0,s.jsxs)(D.Z,{sx:{p:1},children:[(0,s.jsx)(m.Z,{variant:"caption",color:"secondary",children:"Surat Pemberitahuan"}),(0,s.jsx)("br",{}),(0,s.jsx)(W,{path:"pemberitahuan",namaFile:"file_surat_pemberitahuan",data:a,invalidateQueries:i})]})}),(0,s.jsx)(p.ZP,{item:!0,xs:12,md:6,children:(0,s.jsxs)(D.Z,{sx:{p:1},children:[(0,s.jsx)(m.Z,{variant:"caption",color:"secondary",children:"File Informasi:"}),(0,s.jsx)("br",{}),(0,s.jsx)(W,{path:"response",namaFile:"file_informasi",data:a,invalidateQueries:i})]})}),a.tolak_id&&(0,s.jsx)(p.ZP,{item:!0,xs:12,children:(0,s.jsxs)(D.Z,{sx:{p:1,bgcolor:"warning.main"},children:[(0,s.jsx)(m.Z,{variant:"caption",color:"secondary",children:"Dasar Pengecualian"}),(0,s.jsx)(m.Z,{gutterBottom:!0,children:a.dasar_pengecualian}),(0,s.jsx)(m.Z,{variant:"caption",color:"secondary",children:"Pada Pasal"}),(0,s.jsx)(m.Z,{gutterBottom:!0,children:a.pada_pasal}),(0,s.jsx)(m.Z,{variant:"caption",color:"secondary",children:"Keterangan Konsekuensi"}),(0,s.jsx)(m.Z,{gutterBottom:!0,children:a.ket_konsekuensi})]})}),(0,s.jsx)(p.ZP,{item:!0,xs:12,children:(0,s.jsxs)(D.Z,{sx:{p:1},children:[(0,s.jsx)(m.Z,{variant:"caption",color:"secondary",children:"Pesan Admin:"}),(0,s.jsx)(m.Z,{gutterBottom:!0,children:a.pesan})]})})]})})})})]})})};function X(){let e=(0,i.useRouter)(),{id:n}=e.query,a=(0,d.NL)(),[T,C]=(0,r.useState)(!1),[B,D]=(0,r.useState)({}),F=(0,r.useRef)(),I=(0,r.useRef)(),{data:N,isLoading:E,isError:L,error:K}=(0,c.a)({enabled:!!n,queryKey:["permohonan",n],queryFn:e=>{let{signal:a}=e;return t.Z.get("/api/permohonan/".concat(n),{signal:a}).then(e=>e.data).catch(e=>{throw Error(e.response.data.message)})}}),{data:R,isLoading:H,isFetching:U}=(0,c.a)({enabled:!!n,queryKey:["permohonan",n,"responses"],queryFn:e=>{let{signal:a}=e;return t.Z.get("/api/permohonan/".concat(n,"/responses"),{signal:a}).then(e=>e.data).catch(e=>{throw Error(e.response.data.message)})}}),M=e=>{let n=0===Object.keys(B).length;if(n)return function(e){let n=o.Am.loading("Menyiapkan Format...");t.Z.get("/api/services/profileBawaslu?id="+N.bawaslu_id).then(a=>{D(a.data),o.Am.dismiss(n),e()}).catch(e=>{console.log(e),o.Am.update(n,{render:"Terjadi Kesalahan",type:"error",isLoading:!1,autoClose:2e3})})}(()=>{"bukti"===e?O():Q()});"bukti"===e?O():Q()},Q=(0,l.useReactToPrint)({content:()=>F.current}),O=(0,l.useReactToPrint)({content:()=>I.current}),q=[{icon:(0,s.jsx)(_.Z,{}),name:"Tanggapi",action:function(){C(!0)}},{icon:(0,s.jsx)(k.Z,{}),name:"Print Bukti Permohonan",action:()=>M("bukti")},{icon:(0,s.jsx)(b.Z,{}),name:"Print Data Permohonan",action:()=>M("data")},{icon:(0,s.jsx)(P.Z,{}),name:"Hapus",action:function(){let s=confirm("Yakin Hapus Data?");if(s){let s=o.Am.loading("Tunggu Sebentar...",{autoClose:!1});t.Z.delete("/api/permohonan/"+n).then(n=>{o.Am.update(s,{render:n.data.message,type:"success",isLoading:!1,autoClose:2e3}),a.invalidateQueries(["permohonans"]),e.push("/admin/permohonan")}).catch(e=>{o.Am.update(s,{render:e.response.data.message,type:"error",isLoading:!1,autoClose:2e3})})}}}];return L?(o.Am.error(K.message),setTimeout(()=>e.push("/admin/permohonan"),1e3),(0,s.jsx)(s.Fragment,{})):E?(0,s.jsx)(y.Z,{loading:E}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(x.Z,{sx:{mb:2},children:[(0,s.jsxs)(m.Z,{variant:"h5",component:"div",gutterBottom:!0,sx:{bgcolor:"background.paper",p:2},children:["Detail Permohonan ",N.no_registrasi]}),(0,s.jsx)(h.Z,{children:(0,s.jsxs)(p.ZP,{container:!0,spacing:2,children:[(0,s.jsx)(p.ZP,{item:!0,xs:12,md:3,sx:{position:"relative",minHeight:200},children:(0,s.jsx)(v.aU,{altText:N.nama_pemohon,image:N.identitas_pemohon})}),(0,s.jsx)(p.ZP,{item:!0,xs:12,md:9,children:(0,s.jsxs)(p.ZP,{container:!0,children:[(0,s.jsx)(p.ZP,{item:!0,xs:4,children:"Nomor Registrasi / Tiket"}),(0,s.jsxs)(p.ZP,{item:!0,xs:8,children:[": ",N.no_registrasi," /"," ",(0,s.jsx)(m.Z,{variant:"caption",color:"primary",children:N.tiket})]}),(0,s.jsx)(p.ZP,{item:!0,xs:4,children:"Kepada"}),(0,s.jsxs)(p.ZP,{item:!0,xs:8,children:[": ",N.nama_bawaslu]}),(0,s.jsx)(p.ZP,{item:!0,xs:4,children:"Tanggal"}),(0,s.jsxs)(p.ZP,{item:!0,xs:8,children:[": ",(0,s.jsx)(v.V2,{tanggal:N.tanggal_permohonan})]}),(0,s.jsx)(p.ZP,{item:!0,xs:4,children:"Nama"}),(0,s.jsxs)(p.ZP,{item:!0,xs:8,children:[": ",N.nama_pemohon]}),(0,s.jsx)(p.ZP,{item:!0,xs:4,children:"Pekerjaan"}),(0,s.jsxs)(p.ZP,{item:!0,xs:8,children:[": ",N.pekerjaan_pemohon]}),(0,s.jsx)(p.ZP,{item:!0,xs:4,children:"Pendidikan"}),(0,s.jsxs)(p.ZP,{item:!0,xs:8,children:[": ",N.pendidikan_pemohon]}),(0,s.jsx)(p.ZP,{item:!0,xs:4,children:"Telp/Hp"}),(0,s.jsxs)(p.ZP,{item:!0,xs:8,children:[": ",N.telp_pemohon]}),(0,s.jsx)(p.ZP,{item:!0,xs:4,children:"Email"}),(0,s.jsxs)(p.ZP,{item:!0,xs:8,children:[": ",N.email_pemohon]}),(0,s.jsx)(p.ZP,{item:!0,xs:4,children:"Alamat"}),(0,s.jsxs)(p.ZP,{item:!0,xs:8,children:[": ",N.alamat_pemohon]}),(0,s.jsx)(p.ZP,{item:!0,xs:4,children:"Rincian Informasi"}),(0,s.jsxs)(p.ZP,{item:!0,xs:8,children:[": ",N.rincian]}),(0,s.jsx)(p.ZP,{item:!0,xs:4,children:"Tujuan Informasi"}),(0,s.jsxs)(p.ZP,{item:!0,xs:8,children:[": ",N.tujuan]}),(0,s.jsx)(p.ZP,{item:!0,xs:4,children:"Cara Terima Informasi"}),(0,s.jsxs)(p.ZP,{item:!0,xs:8,children:[": ",N.cara_terima]}),(0,s.jsx)(p.ZP,{item:!0,xs:4,children:"Cara Dapat Informasi"}),(0,s.jsxs)(p.ZP,{item:!0,xs:8,children:[": ",N.cara_dapat]}),(0,s.jsx)(p.ZP,{item:!0,xs:4,children:"Status Permohonan"}),(0,s.jsxs)(p.ZP,{item:!0,xs:8,children:[": ",N.status_permohonan]})]})})]})}),(0,s.jsxs)(j.Z,{p:2,children:[(0,s.jsxs)(m.Z,{variant:"caption",children:["Dibuat :"," ",N.created_at&&new Date(N.created_at).toISOString().split("T")[0]]}),(0,s.jsx)(j.Z,{sx:{transform:"translateZ(0px)",flexGrow:1},children:(0,s.jsx)(u.Z,{ariaLabel:"SpeedDial",sx:{position:"absolute",bottom:0,right:0},icon:(0,s.jsx)(Z.Z,{}),children:q.map(e=>(0,s.jsx)(g.Z,{icon:e.icon,tooltipTitle:e.name,onClick:e.action,FabProps:{}},e.name))})})]})]}),(H||U)&&(0,s.jsx)(f.Z,{}),(0,s.jsx)(p.ZP,{container:!0,spacing:2,children:R&&0!==R.length&&R.map(e=>(0,s.jsx)(V,{data:e,invalidateQueries:()=>a.invalidateQueries(["permohonan",n,"responses"])},e.id))}),(0,s.jsx)(S.Z,{open:T,onClose:function(){C(!1)},fullScreen:!0,detail:N,invalidateQueries:()=>{a.invalidateQueries(["permohonan",n,"responses"]),a.invalidateQueries(["permohonan",n])}}),(0,s.jsx)(A.Z,{ref:F,detail:N,profileBawaslu:B}),(0,s.jsx)(w.Z,{ref:I,detail:N,profileBawaslu:B})]})}X.auth=!0,X.breadcrumb=[{path:"/admin",title:"Home"},{path:"/admin/permohonan",title:"Permohonan"},{path:"/admin/permohonan",title:"Detail"}];var G=X},17806:function(e,n,a){"use strict";var s=a(85893),i=a(25675),r=a.n(i),t=a(67294),o=a(15799),l=a(48452),d=a(66242),c=a(15861),x=a(87357),h=a(7906),m=a(295),p=a(53252),j=a(72882),u=a(68509),Z=a(43514);let g=(0,o.Z)({palette:{mode:"light"}}),f=t.forwardRef((e,n)=>{let{detail:a,profileBawaslu:i}=e,t=a.no_registrasi?a.no_registrasi:a.tiket;return(0,s.jsx)(l.Z,{theme:g,children:(0,s.jsxs)(d.Z,{sx:{display:"none",displayPrint:"block",p:2},ref:n,children:[(0,s.jsxs)(x.Z,{sx:{display:"flex",flexWrap:"nowrap",p:2,mb:2},children:[(0,s.jsx)(x.Z,{sx:{position:"relative",width:100,height:90,mr:3},children:(0,s.jsx)(r(),{src:"/images/logo-buttom.png",alt:"Logo",layout:"fill",priority:!0})}),(0,s.jsxs)(x.Z,{children:[(0,s.jsx)(c.Z,{variant:"h5",children:(0,s.jsx)("b",{children:"BADAN PENGAWAS PEMILIHAN UMUM"})}),(0,s.jsxs)(c.Z,{children:[i.alamat_bawaslu," ",(0,s.jsx)("br",{}),i.telp_bawaslu," / ",i.email_bawaslu]})]})]}),(0,s.jsxs)(c.Z,{variant:"h5",align:"center",children:["TANDA BUKTI ",(0,s.jsx)("br",{})," PERMOHONAN INFORMASI PUBLIK"]}),(0,s.jsx)(j.Z,{children:(0,s.jsx)(h.Z,{sx:{minWidth:650},"aria-label":"simple table",children:(0,s.jsxs)(m.Z,{children:[(0,s.jsx)(u.Z,{children:(0,s.jsx)(p.Z,{colSpan:2,children:"Yang menyerahkan formulir permohonan Informasi Publik:"})}),(0,s.jsxs)(u.Z,{children:[(0,s.jsx)(p.Z,{children:"Nama"}),(0,s.jsxs)(p.Z,{children:[": ",(0,s.jsx)("b",{children:a.nama_pemohon})]})]}),(0,s.jsxs)(u.Z,{children:[(0,s.jsx)(p.Z,{children:"Alamat"}),(0,s.jsxs)(p.Z,{children:[": ",(0,s.jsx)("b",{children:a.alamat_pemohon})]})]}),(0,s.jsxs)(u.Z,{children:[(0,s.jsx)(p.Z,{children:"Tanggal penyerahan formulir permohonan"}),(0,s.jsxs)(p.Z,{children:[":"," ",(0,s.jsx)("b",{children:(0,s.jsx)(Z.V2,{tanggal:a.tanggal_permohonan})})]})]}),(0,s.jsxs)(u.Z,{children:[(0,s.jsx)(p.Z,{children:"Nomor Registrasi Permohonan"}),(0,s.jsxs)(p.Z,{children:[":"," ",a.no_registrasi?(0,s.jsx)("b",{children:a.no_registrasi}):"Belum Tersedia"]})]}),(0,s.jsx)(u.Z,{children:(0,s.jsx)(p.Z,{colSpan:2,children:"Yang menerima formulir permohonan Informasi Publik:"})}),(0,s.jsxs)(u.Z,{children:[(0,s.jsx)(p.Z,{children:"Nama"}),(0,s.jsxs)(p.Z,{children:[": ",(0,s.jsx)("b",{children:i.nama_admin})]})]}),(0,s.jsxs)(u.Z,{children:[(0,s.jsx)(p.Z,{children:"Jabatan"}),(0,s.jsxs)(p.Z,{children:[": ",(0,s.jsx)("b",{children:"Andministrator PPID"})]})]}),(0,s.jsx)(u.Z,{sx:{border:0},children:(0,s.jsxs)(p.Z,{colSpan:2,children:[i.kota_bawaslu,", ",(0,s.jsx)(Z.xX,{})]})})]})})}),(0,s.jsxs)(x.Z,{children:[(0,s.jsx)(Z.Kz,{text:"https://ppidapp.bawaslu.go.id/qr/permohonan/"+t}),(0,s.jsxs)(x.Z,{sx:{fontSize:10,m:1},children:["(Kode merupakan bukti Sah dari Sistem PPID Bawaslu ",(0,s.jsx)("br",{})," selama dapat terbaca dan terscan dengan benar)"]})]})]})})});f.displayName="BuktiPermohonan",n.Z=f},53724:function(e,n,a){"use strict";a.d(n,{Z:function(){return r}});var s=a(85893),i=a(88078);function r(e){let{loading:n=!1}=e;return n?(0,s.jsx)(i.Z,{variant:"rectangular",width:"100%",sx:{minHeight:300}}):(0,s.jsx)(s.Fragment,{})}}},function(e){e.O(0,[9004,6886,8271,7848,3304,967,1868,1235,1699,4627,3424,9774,2888,179],function(){return e(e.s=34105)}),_N_E=e.O()}]);