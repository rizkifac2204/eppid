"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7452],{69611:function(e,n,a){a.d(n,{Kz:function(){return x},V2:function(){return o},aU:function(){return Z},dl:function(){return h},xX:function(){return j}});var s=a(85893),l=a(92592),i=a(67294),r=a(25675),t=a.n(r),c=a(6154),d=a(48764).lW;function x(e){let{text:n}=e,[a,r]=(0,i.useState)("");return(0,i.useEffect)(()=>{if(n)return l.toDataURL(n).then(e=>{r(e)}),()=>{}},[n]),(0,s.jsx)("div",{children:(0,s.jsx)("img",{src:a,alt:"QrCode"})})}function j(){let e=new Date,n=String(e.getDate()).padStart(2,"0"),a=String(e.getMonth()+1).padStart(2,"0"),s=e.getFullYear();return n+"/"+a+"/"+s}function o(e){let{tanggal:n}=e;if(n){var a=new Date(n);return a instanceof Date&&!isNaN(a.valueOf())?a.toISOString().split("T")[0]:"-"}}function h(e){let{number:n}=e;return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function Z(e){let{image:n,altText:a="Pemohon"}=e,[l,r]=(0,i.useState)("/images/no-file.png");return(0,i.useEffect)(()=>{if(!n)return;let e=!0;return c.Z.get("/api/services/file/public/upload/".concat(n),{responseType:"arraybuffer"}).then(e=>{let n=d.from(e.data,"binary").toString("base64");r("data:".concat(e.headers["content-type"],";base64, ").concat(n))}).catch(e=>{console.log(e.response)}),function(){}},[n]),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t(),{src:l,alt:a,layout:"fill",objectFit:"contain",priority:!0})})}},27452:function(e,n,a){var s=a(85893),l=a(25675),i=a.n(l),r=a(67294),t=a(15799),c=a(48452),d=a(66242),x=a(15861),j=a(87357),o=a(7906),h=a(295),Z=a(53252),u=a(72882),m=a(68509),p=a(53457),b=a(50480),f=a(69368),g=a(69611);let k=(0,t.Z)({palette:{mode:"light"}}),A=r.forwardRef((e,n)=>{let{detail:a,profileBawaslu:l}=e,r=a.tiket?a.tiket:a.no_registrasi;return(0,s.jsx)(c.Z,{theme:k,children:(0,s.jsxs)(d.Z,{sx:{display:"none",displayPrint:"block",p:2},ref:n,children:[(0,s.jsxs)(j.Z,{sx:{display:"flex",flexWrap:"nowrap",p:2,mb:2},children:[(0,s.jsx)(j.Z,{sx:{position:"relative",width:100,height:90,mr:3},children:(0,s.jsx)(i(),{src:"/images/logo-buttom.png",alt:"Logo",layout:"fill",priority:!0})}),(0,s.jsxs)(j.Z,{children:[(0,s.jsx)(x.Z,{variant:"h5",children:(0,s.jsx)("b",{children:"BADAN PENGAWAS PEMILIHAN UMUM"})}),(0,s.jsxs)(x.Z,{children:[l.alamat_bawaslu," ",(0,s.jsx)("br",{}),l.telp_bawaslu," / ",l.email_bawaslu]})]})]}),(0,s.jsx)(x.Z,{variant:"h5",align:"center",children:"PERNYATAAN KEBERATAN ATAS PERMOHONAN INFORMASI"}),(0,s.jsx)(u.Z,{children:(0,s.jsx)(o.Z,{sx:{minWidth:650},"aria-label":"simple table",children:(0,s.jsxs)(h.Z,{children:[(0,s.jsxs)(m.Z,{children:[(0,s.jsx)(Z.Z,{width:1,children:(0,s.jsx)("b",{children:"A"})}),(0,s.jsx)(Z.Z,{colSpan:2,children:(0,s.jsx)("b",{children:"INFORMASI PENGAJU KEBERATAN"})})]}),(0,s.jsxs)(m.Z,{children:[(0,s.jsx)(Z.Z,{}),(0,s.jsx)(Z.Z,{children:(0,s.jsx)("b",{children:"Nomor Tiket keberatan"})}),(0,s.jsxs)(Z.Z,{children:[": ",(0,s.jsx)("b",{children:a.no_registrasi})]})]}),(0,s.jsxs)(m.Z,{children:[(0,s.jsx)(Z.Z,{}),(0,s.jsx)(Z.Z,{children:(0,s.jsx)("b",{children:"Nomor Pendaftaran Pemohon"})}),(0,s.jsx)(Z.Z,{children:": -"})]}),(0,s.jsxs)(m.Z,{children:[(0,s.jsx)(Z.Z,{}),(0,s.jsx)(Z.Z,{children:(0,s.jsx)("b",{children:"Informasi"})}),(0,s.jsxs)(Z.Z,{children:[": ",a.rincian]})]}),(0,s.jsxs)(m.Z,{children:[(0,s.jsx)(Z.Z,{}),(0,s.jsx)(Z.Z,{children:(0,s.jsx)("b",{children:"Tujuan Penggunaan Informasi"})}),(0,s.jsxs)(Z.Z,{children:[": ",a.tujuan]})]}),(0,s.jsxs)(m.Z,{children:[(0,s.jsx)(Z.Z,{}),(0,s.jsx)(Z.Z,{colSpan:2,children:(0,s.jsx)("b",{children:"Identitas Pemohon"})})]}),(0,s.jsxs)(m.Z,{children:[(0,s.jsx)(Z.Z,{}),(0,s.jsx)(Z.Z,{children:"Nama"}),(0,s.jsxs)(Z.Z,{children:[": ",a.nama_pemohon]})]}),(0,s.jsxs)(m.Z,{children:[(0,s.jsx)(Z.Z,{}),(0,s.jsx)(Z.Z,{children:"Alamat"}),(0,s.jsxs)(Z.Z,{children:[": ",a.alamat_pemohon]})]}),(0,s.jsxs)(m.Z,{children:[(0,s.jsx)(Z.Z,{}),(0,s.jsx)(Z.Z,{children:"Pekerjaan"}),(0,s.jsxs)(Z.Z,{children:[": ",a.pekerjaan_pemohon]})]}),(0,s.jsxs)(m.Z,{children:[(0,s.jsx)(Z.Z,{}),(0,s.jsx)(Z.Z,{children:"Nomor Telepon"}),(0,s.jsxs)(Z.Z,{children:[": ",a.telp_pemohon]})]}),(0,s.jsxs)(m.Z,{children:[(0,s.jsx)(Z.Z,{}),(0,s.jsx)(Z.Z,{colSpan:2,children:(0,s.jsx)("b",{children:"Identitas Kuasa Pemohon"})})]}),(0,s.jsxs)(m.Z,{children:[(0,s.jsx)(Z.Z,{}),(0,s.jsx)(Z.Z,{children:"Nama"}),(0,s.jsxs)(Z.Z,{children:[": ",a.nama_kuasa]})]}),(0,s.jsxs)(m.Z,{children:[(0,s.jsx)(Z.Z,{}),(0,s.jsx)(Z.Z,{children:"Alamat"}),(0,s.jsxs)(Z.Z,{children:[": ",a.alamat_kuasa]})]}),(0,s.jsxs)(m.Z,{children:[(0,s.jsx)(Z.Z,{}),(0,s.jsx)(Z.Z,{children:"Nomor Telepon"}),(0,s.jsxs)(Z.Z,{children:[": ",a.telp_kuasa]})]}),(0,s.jsxs)(m.Z,{children:[(0,s.jsx)(Z.Z,{children:(0,s.jsx)("b",{children:"B"})}),(0,s.jsx)(Z.Z,{colSpan:2,children:(0,s.jsx)("b",{children:"ALASAN PENGAJUAN KEBERATAN"})})]}),(0,s.jsxs)(m.Z,{children:[(0,s.jsx)(Z.Z,{}),(0,s.jsx)(Z.Z,{colSpan:2,children:(0,s.jsxs)(p.Z,{children:[(0,s.jsx)(b.Z,{control:(0,s.jsx)(f.Z,{size:"small",checked:Boolean(a.alasan_a)}),label:"Permohonan Informasi ditolak"}),(0,s.jsx)(b.Z,{control:(0,s.jsx)(f.Z,{size:"small",checked:Boolean(a.alasan_b)}),label:"Informasi berkala tidak disediakan"}),(0,s.jsx)(b.Z,{control:(0,s.jsx)(f.Z,{size:"small",checked:Boolean(a.alasan_c)}),label:"Permintaan Informasi tidak ditanggapi"}),(0,s.jsx)(b.Z,{control:(0,s.jsx)(f.Z,{size:"small",checked:Boolean(a.alasan_d)}),label:"Permintaan Informasi ditanggapi tidak sebagaimana yang diminta"}),(0,s.jsx)(b.Z,{control:(0,s.jsx)(f.Z,{size:"small",checked:Boolean(a.alasan_e)}),label:"Permintaan Informasi tidak dipenuhi"}),(0,s.jsx)(b.Z,{control:(0,s.jsx)(f.Z,{size:"small",checked:Boolean(a.alasan_f)}),label:"Biaya yang dikenakan tidak wajar"}),(0,s.jsx)(b.Z,{control:(0,s.jsx)(f.Z,{size:"small",checked:Boolean(a.alasan_g)}),label:"Informasi disampaikan melebihi jangka waktu yang ditentukan"})]})})]}),(0,s.jsxs)(m.Z,{children:[(0,s.jsx)(Z.Z,{children:(0,s.jsx)("b",{children:"C"})}),(0,s.jsx)(Z.Z,{colSpan:2,children:(0,s.jsx)("b",{children:"KASUS POSISI"})})]}),(0,s.jsxs)(m.Z,{children:[(0,s.jsx)(Z.Z,{}),(0,s.jsx)(Z.Z,{colSpan:2,children:a.kasus_posisi})]}),(0,s.jsxs)(m.Z,{children:[(0,s.jsx)(Z.Z,{children:(0,s.jsx)("b",{children:"D"})}),(0,s.jsx)(Z.Z,{colSpan:2,children:(0,s.jsx)("b",{children:"HARI/TANGGAL TANGGAPAN ATAS KEBERATAN AKAN DIBERIKAN"})})]}),(0,s.jsxs)(m.Z,{children:[(0,s.jsx)(Z.Z,{}),(0,s.jsx)(Z.Z,{colSpan:2,children:a.tanggal_keberatan&&new Date(a.tanggal_keberatan).toISOString().split("T")[0]})]}),(0,s.jsx)(m.Z,{sx:{border:0},children:(0,s.jsxs)(Z.Z,{colSpan:2,children:[l.kota_bawaslu,", ",(0,s.jsx)(g.xX,{})]})})]})})}),(0,s.jsxs)(j.Z,{children:[(0,s.jsx)(g.Kz,{text:"https://ppidapp.bawaslu.go.id/qr/keberatan/"+r}),(0,s.jsxs)(j.Z,{sx:{fontSize:10,m:1},children:["(Kode merupakan bukti Sah dari Sistem PPID Bawaslu ",(0,s.jsx)("br",{})," selama dapat terbaca dan terscan dengan benar)"]})]})]})})});A.displayName="BuktiPengajuanKeberatan",n.Z=A}}]);