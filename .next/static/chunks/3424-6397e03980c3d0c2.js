"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3424],{43514:function(e,a,n){n.d(a,{xX:function(){return c},V2:function(){return p},dl:function(){return m},Kz:function(){return h},aU:function(){return x}});var i=n(85893),r=n(92592),s=n(67294),l=n(25675),o=n.n(l),t=n(6154),d={src:"/_next/static/media/no-file.1bd1d555.png",height:253,width:320,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAqklEQVR42mNQ8Mtlct7wLdt544865w3fk4H0DiC+6Lzx5yUgrcQAJFa7bPq1FEhHuWz8OcF1618rl82/QoBiBS6bfq5kADIWAXEhUIcGUMLFZt5dXsfVHwSBkgxA3M0AlFwDxBOA1sQATSkHsh8C8WugdS5ABc0MQF1FQMZxoOR+F6CkC5ANpK8DTewH0nMZgAIWQMY5IN7nsvn3LCA/GSiZDKSnuWz+HQAAkZJzf8f/2FoAAAAASUVORK5CYII=",blurWidth:8,blurHeight:6},u=n(48764).lW;function h(e){let{text:a}=e,[n,l]=(0,s.useState)("");return(0,s.useEffect)(()=>{if(a)return r.toDataURL(a).then(e=>{l(e)}),()=>{}},[a]),(0,i.jsx)("div",{children:(0,i.jsx)("img",{src:n,alt:"QrCode"})})}function c(){let e=new Date,a=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),i=e.getFullYear();return a+"/"+n+"/"+i}function p(e){let{tanggal:a}=e;if(a){var n=new Date(a);return n instanceof Date&&!isNaN(n.valueOf())?n.toISOString().split("T")[0]:"-"}}function m(e){let{number:a}=e;return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function x(e){let{image:a,altText:n="Pemohon"}=e,[r,l]=(0,s.useState)(d);return(0,s.useEffect)(()=>{if(!a)return;let e=!0;return t.Z.get("/api/services/file/public/upload/".concat(a),{responseType:"arraybuffer"}).then(e=>{let a=u.from(e.data,"binary").toString("base64");l("data:".concat(e.headers["content-type"],";base64, ").concat(a))}).catch(e=>{console.log(e.response)}),function(){}},[a]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(o(),{src:r,alt:n,priority:!0,width:280,height:0})})}},57444:function(e,a,n){var i=n(85893),r=n(67294),s=n(82175),l=n(74231),o=n(55678),t=n(6154),d=n(83321),u=n(50135),h=n(50657),c=n(31425),p=n(6514),m=n(37645),x=n(94054),g=n(47312),j=n(31085),_=n(18972),k=n(56815),Z=n(53457),b=n(50480),f=n(69368),v=n(86886),P=n(87357),B=n(15861),D=n(14564),S=n(9944);let A=(e,a,n)=>{let i={...e,email_pemohon:a.detail.email_pemohon,tiket:a.detail.tiket},r=o.Am.loading("Tunggu Sebentar...",{autoClose:!1});t.Z.post("/api/permohonan/".concat(e.permohonan_id,"/responses"),i).then(e=>{a.invalidateQueries&&a.invalidateQueries(),setTimeout(()=>a.onClose(),1e3),o.Am.update(r,{render:e.data.message,type:e.data.type,isLoading:!1,autoClose:2e3})}).catch(e=>{console.log(e),o.Am.update(r,{render:e.response.data.message,type:"error",isLoading:!1,autoClose:2e3})}).then(()=>{n(!1)})},C=l.Ry({no_registrasi:l.Z_().required("Harus Diisi"),status_permohonan:l.Z_().required("Harus Diisi"),jenis_respon:l.Z_().required("Harus Diisi"),pesan:l.Z_().required("Harus Diisi"),jangka_waktu:l.Rx().when("jenis_respon",{is:e=>"Respon Final"===e,then:l.Rx().required("Harus Diisi")}),bentuk_fisik:l.Z_().when("status_permohonan",{is:e=>["Diberikan","Diberikan Sebagian"].includes(e),then:l.Z_().required("Harus Diisi")}),ket_biaya:l.Rx().when("status_permohonan",{is:e=>["Diberikan","Diberikan Sebagian"].includes(e),then:l.Rx().required("Harus Diisi")}),penjelasan_penghitaman:l.Z_().when("status_permohonan",{is:e=>"Diberikan Sebagian"===e,then:l.Z_().required("Harus Diisi")}),penguasaan_informasi:l.Z_().when("status_permohonan",{is:e=>"Tidak Dapat Diberikan"===e,then:l.Z_().required("Harus Diisi")}),penguasaan_informasi_lain:l.Z_().when("penguasaan_informasi",{is:e=>"Badan Publik Lain"===e,then:l.Z_().required("Isi Badan Publik")}),dasar_pengecualian:l.Z_().when("status_permohonan",{is:e=>"Tidak Dapat Diberikan"===e,then:l.Z_().required("Harus Diisi")}),pada_pasal:l.Z_().when("status_permohonan",{is:e=>"Tidak Dapat Diberikan"===e,then:l.Z_().required("Harus Diisi")}),ket_konsekuensi:l.Z_().when("status_permohonan",{is:e=>"Tidak Dapat Diberikan"===e,then:l.Z_().required("Harus Diisi")})});a.Z=function(e){let[a,n]=(0,r.useState)(null),l=(0,s.TA)({initialValues:{current_no_registrasi:e.detail.no_registrasi?e.detail.no_registrasi:"",no_registrasi:e.detail.no_registrasi?e.detail.no_registrasi:"",permohonan_id:e.detail.id?e.detail.id:"",status_permohonan:e.detail.status_permohonan?e.detail.status_permohonan:"",jenis_respon:"",penjelasan_penghitaman:"",jangka_waktu:"",pesan:"",mailed:!0,penguasaan_informasi:"",penguasaan_informasi_lain:"",bentuk_fisik:"",ket_biaya:"",dasar_pengecualian:"",pada_pasal:"",ket_konsekuensi:""},enableReinitialize:!0,validationSchema:C,onSubmit:(a,n)=>{let{setSubmitting:i}=n;return A(a,e,i)}});return(0,r.useEffect)(()=>{e.open&&l.resetForm()},[e.open]),(0,i.jsx)(h.Z,{open:e.open,onClose:e.onClose,fullScreen:e.fullScreen,children:(0,i.jsxs)("form",{onSubmit:l.handleSubmit,children:[(0,i.jsxs)(m.Z,{children:["Response ",e.detail.no_registrasi," ",e.detail.tiket]}),(0,i.jsxs)(p.Z,{children:[(0,i.jsxs)(v.ZP,{container:!0,columnSpacing:1,children:[(0,i.jsx)(v.ZP,{item:!0,xs:12,md:6,children:(0,i.jsx)(u.Z,{fullWidth:!0,required:!0,margin:"normal",label:"Nomor Registrasi",name:"no_registrasi",value:l.values.no_registrasi,onChange:l.handleChange,onBlur:l.handleBlur,error:l.touched.no_registrasi&&Boolean(l.errors.no_registrasi),helperText:l.touched.no_registrasi&&l.errors.no_registrasi})}),(0,i.jsx)(v.ZP,{item:!0,xs:12,md:6,children:(0,i.jsxs)(P.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsxs)(x.Z,{fullWidth:!0,required:!0,margin:"normal",error:Boolean(l.errors.jenis_respon),children:[(0,i.jsx)(g.Z,{children:"Jenis Respon"}),(0,i.jsxs)(j.Z,{name:"jenis_respon",label:"Jenis Respon",value:l.values.jenis_respon,onChange:l.handleChange,children:[(0,i.jsx)(_.Z,{value:"Respon Awal",children:"Respon Awal"}),(0,i.jsx)(_.Z,{value:"Respon Lanjutan",children:"Respon Lanjutan"}),(0,i.jsx)(_.Z,{value:"Respon Final",children:"Respon Final"}),(0,i.jsx)(_.Z,{value:"Respon Perbaikan",children:"Respon Perbaikan"}),(0,i.jsx)(_.Z,{value:"Respon Keberatan",children:"Respon Keberatan"})]}),(0,i.jsx)(k.Z,{children:l.errors.jenis_respon})]}),(0,i.jsx)(d.Z,{"aria-describedby":Boolean(a)?"login-google":void 0,variant:"text",onClick:e=>n(e.currentTarget),children:(0,i.jsx)(S.Z,{fontSize:"small"})}),(0,i.jsx)(D.ZP,{id:Boolean(a)?"login-google":void 0,open:Boolean(a),anchorEl:a,onClose:()=>n(null),anchorOrigin:{vertical:"bottom",horizontal:"left"},children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(B.Z,{color:"inherit",children:"Jenis Respon"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Respon Awal : merupakan Respon Pertama yang diberikan (Biasanya pada saat memberikan Nomor Registrasi) dan belum memberikan informasi"}),(0,i.jsx)("li",{children:"Respon Lanjutan : merupakan Respon setelah respon awal dan belum selesai dalam memberikan informasi (informasi masih diberikan secara berkala)"}),(0,i.jsx)("li",{children:"Respon Final : merupakan Respon terkahir setelah memberikan informasi yang diminta (dapat menjadi respon awal jika informasi langsung dapat diberikan)"}),(0,i.jsx)("li",{children:"Respon Perbaikan : merupakan Respon jika terjadi perbaikan dalam memberikan informasi"}),(0,i.jsx)("li",{children:"Respon Keberatan : merupakan Respon yang diberikan setelah permohon melakukan keberatan terkait permohonan"})]})]})})]})}),(0,i.jsx)(v.ZP,{item:!0,xs:12,md:6,children:(0,i.jsxs)(x.Z,{fullWidth:!0,required:!0,margin:"normal",error:Boolean(l.errors.status_permohonan),children:[(0,i.jsx)(g.Z,{children:"Status Permohonan"}),(0,i.jsxs)(j.Z,{name:"status_permohonan",label:"Status Permohonan",value:l.values.status_permohonan,onChange:l.handleChange,children:[(0,i.jsx)(_.Z,{value:"Proses",children:"Diproses"}),(0,i.jsx)(_.Z,{value:"Diberikan",children:"Diberikan"}),(0,i.jsx)(_.Z,{value:"Diberikan Sebagian",children:"Diberikan Sebagian"}),(0,i.jsx)(_.Z,{value:"Tidak Dapat Diberikan",children:"Tidak Dapat Diberikan"}),(0,i.jsx)(_.Z,{value:"Proses Keberatan",children:"Proses Keberatan"}),(0,i.jsx)(_.Z,{value:"Sengketa",children:"Sengketa"})]}),(0,i.jsx)(k.Z,{children:l.errors.status_permohonan})]})})]}),["Diberikan","Diberikan Sebagian"].includes(l.values.status_permohonan)&&(0,i.jsxs)(v.ZP,{container:!0,columnSpacing:1,children:[(0,i.jsx)(v.ZP,{item:!0,xs:12,md:6,children:(0,i.jsxs)(x.Z,{fullWidth:!0,required:!0,margin:"normal",error:Boolean(l.errors.bentuk_fisik),children:[(0,i.jsx)(g.Z,{children:"Bentuk Fisik"}),(0,i.jsxs)(j.Z,{name:"bentuk_fisik",label:"Bentuk Fisik",value:l.values.bentuk_fisik,onChange:l.handleChange,children:[(0,i.jsx)(_.Z,{value:"Softcopy",children:"Softcopy"}),(0,i.jsx)(_.Z,{value:"Hardcopy",children:"Hardcopy"})]}),(0,i.jsx)(k.Z,{children:l.errors.bentuk_fisik})]})}),(0,i.jsx)(v.ZP,{item:!0,xs:12,md:6,children:(0,i.jsx)(u.Z,{fullWidth:!0,required:!0,type:"number",margin:"normal",label:"Biaya",name:"ket_biaya",value:l.values.ket_biaya,onChange:l.handleChange,onBlur:l.handleBlur,error:l.touched.ket_biaya&&Boolean(l.errors.ket_biaya),helperText:l.touched.ket_biaya&&l.errors.ket_biaya})})]}),"Diberikan Sebagian"===l.values.status_permohonan&&(0,i.jsx)(v.ZP,{container:!0,columnSpacing:1,children:(0,i.jsx)(v.ZP,{item:!0,xs:12,md:6,children:(0,i.jsx)(u.Z,{fullWidth:!0,required:!0,multiline:!0,rows:2,margin:"normal",label:"Penjelasan Penghitaman",name:"penjelasan_penghitaman",value:l.values.penjelasan_penghitaman,onChange:l.handleChange,onBlur:l.handleBlur,error:l.touched.penjelasan_penghitaman&&Boolean(l.errors.penjelasan_penghitaman),helperText:l.touched.penjelasan_penghitaman&&l.errors.penjelasan_penghitaman})})}),"Tidak Dapat Diberikan"===l.values.status_permohonan&&(0,i.jsxs)(v.ZP,{container:!0,columnSpacing:1,children:[(0,i.jsx)(v.ZP,{item:!0,xs:12,md:6,children:(0,i.jsxs)(x.Z,{fullWidth:!0,required:!0,margin:"normal",error:Boolean(l.errors.penguasaan_informasi),children:[(0,i.jsx)(g.Z,{children:"Penguasaan Informasi"}),(0,i.jsxs)(j.Z,{name:"penguasaan_informasi",label:"Penguasaan Informasi",value:l.values.penguasaan_informasi,onChange:l.handleChange,children:[(0,i.jsx)(_.Z,{value:"Bawaslu",children:"Bawaslu"}),(0,i.jsx)(_.Z,{value:"Badan Publik Lain",children:"Badan Publik Lain..."})]}),(0,i.jsx)(k.Z,{children:l.errors.penguasaan_informasi})]})}),(0,i.jsx)(v.ZP,{item:!0,xs:12,md:6,children:"Badan Publik Lain"===l.values.penguasaan_informasi&&(0,i.jsx)(u.Z,{fullWidth:!0,required:!0,margin:"normal",label:"Badan Publik",name:"penguasaan_informasi_lain",value:l.values.penguasaan_informasi_lain,onChange:l.handleChange,onBlur:l.handleBlur,error:l.touched.penguasaan_informasi_lain&&Boolean(l.errors.penguasaan_informasi_lain),helperText:l.touched.penguasaan_informasi_lain&&l.errors.penguasaan_informasi_lain})}),(0,i.jsx)(v.ZP,{item:!0,xs:12,md:6,children:(0,i.jsx)(u.Z,{fullWidth:!0,required:!0,margin:"normal",label:"Dasar Pengecualian",name:"dasar_pengecualian",value:l.values.dasar_pengecualian,onChange:l.handleChange,onBlur:l.handleBlur,error:l.touched.dasar_pengecualian&&Boolean(l.errors.dasar_pengecualian),helperText:l.touched.dasar_pengecualian&&l.errors.dasar_pengecualian})}),(0,i.jsx)(v.ZP,{item:!0,xs:12,md:6,children:(0,i.jsx)(u.Z,{fullWidth:!0,required:!0,margin:"normal",label:"Pada Pasal",name:"pada_pasal",value:l.values.pada_pasal,onChange:l.handleChange,onBlur:l.handleBlur,error:l.touched.pada_pasal&&Boolean(l.errors.pada_pasal),helperText:l.touched.pada_pasal&&l.errors.pada_pasal})}),(0,i.jsx)(v.ZP,{item:!0,xs:12,md:6,children:(0,i.jsx)(u.Z,{fullWidth:!0,required:!0,multiline:!0,rows:4,margin:"normal",label:"Keterangan Konsekuensi",name:"ket_konsekuensi",value:l.values.ket_konsekuensi,onChange:l.handleChange,onBlur:l.handleBlur,error:l.touched.ket_konsekuensi&&Boolean(l.errors.ket_konsekuensi),helperText:l.touched.ket_konsekuensi&&l.errors.ket_konsekuensi})})]}),"Respon Final"===l.values.jenis_respon&&(0,i.jsx)(v.ZP,{container:!0,columnSpacing:1,children:(0,i.jsx)(v.ZP,{item:!0,xs:12,md:6,children:(0,i.jsx)(u.Z,{fullWidth:!0,required:!0,type:"number",margin:"normal",label:"Jangka Waktu Proses (Hari)",name:"jangka_waktu",value:l.values.jangka_waktu,onChange:l.handleChange,onBlur:l.handleBlur,error:l.touched.jangka_waktu&&Boolean(l.errors.jangka_waktu),helperText:l.touched.jangka_waktu&&l.errors.jangka_waktu})})}),(0,i.jsx)(v.ZP,{container:!0,columnSpacing:1,children:(0,i.jsx)(v.ZP,{item:!0,xs:12,children:(0,i.jsx)(u.Z,{fullWidth:!0,required:!0,multiline:!0,rows:4,margin:"normal",label:"Pesan Kepada Pemohon",name:"pesan",value:l.values.pesan,onChange:l.handleChange,onBlur:l.handleBlur,error:l.touched.pesan&&Boolean(l.errors.pesan),helperText:l.touched.pesan&&l.errors.pesan})})}),(0,i.jsx)(Z.Z,{children:(0,i.jsx)(b.Z,{control:(0,i.jsx)(f.Z,{defaultChecked:!0}),label:"Kirim Email Kepada Pemohon",name:"mailed",onChange:l.handleChange})})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)(d.Z,{type:"submit",disabled:l.isSubmitting,children:"Simpan dan Tutup"}),(0,i.jsx)(d.Z,{onClick:e.onClose,type:"button",children:"Tutup"})]})]})})}},59982:function(e,a,n){var i=n(85893),r=n(25675),s=n.n(r),l=n(67294),o=n(15799),t=n(48452),d=n(66242),u=n(15861),h=n(87357),c=n(7906),p=n(295),m=n(53252),x=n(72882),g=n(68509),j=n(43514);let _=(0,o.Z)({palette:{mode:"light"}}),k=l.forwardRef((e,a)=>{let{detail:n,profileBawaslu:r}=e,l=n.no_registrasi?n.no_registrasi:n.tiket,o=0===Object.keys(n).length;return o?(0,i.jsx)(i.Fragment,{}):(0,i.jsx)(t.Z,{theme:_,children:(0,i.jsxs)(d.Z,{sx:{display:"none",displayPrint:"block",p:2},ref:a,children:[(0,i.jsxs)(h.Z,{sx:{display:"flex",flexWrap:"nowrap",p:2,mb:2},children:[(0,i.jsx)(h.Z,{sx:{position:"relative",width:100,height:90,mr:3},children:(0,i.jsx)(s(),{src:"/images/logo-buttom.png",alt:"Logo",layout:"fill",priority:!0})}),(0,i.jsxs)(h.Z,{children:[(0,i.jsx)(u.Z,{variant:"h5",children:(0,i.jsx)("b",{children:"BADAN PENGAWAS PEMILIHAN UMUM"})}),(0,i.jsxs)(u.Z,{children:[r.alamat_bawaslu," ",(0,i.jsx)("br",{}),r.telp_bawaslu," / ",r.email_bawaslu]})]})]}),(0,i.jsx)(u.Z,{variant:"h5",align:"center",children:"DATA PERMOHONAN INFORMASI PUBLIK"}),(0,i.jsx)(x.Z,{children:(0,i.jsx)(c.Z,{sx:{minWidth:650},"aria-label":"simple table",children:(0,i.jsxs)(p.Z,{children:[(0,i.jsx)(g.Z,{children:(0,i.jsx)(m.Z,{colSpan:2,children:"Yang menyerahkan formulir permohonan Informasi Publik:"})}),(0,i.jsxs)(g.Z,{children:[(0,i.jsx)(m.Z,{children:"Nama"}),(0,i.jsxs)(m.Z,{children:[": ",(0,i.jsx)("b",{children:n.nama_pemohon})]})]}),(0,i.jsxs)(g.Z,{children:[(0,i.jsx)(m.Z,{children:"Pekerjaan"}),(0,i.jsxs)(m.Z,{children:[": ",(0,i.jsx)("b",{children:n.pekerjaan_pemohon})]})]}),(0,i.jsxs)(g.Z,{children:[(0,i.jsx)(m.Z,{children:"Telp"}),(0,i.jsxs)(m.Z,{children:[": ",(0,i.jsx)("b",{children:n.telp_pemohon})]})]}),(0,i.jsxs)(g.Z,{children:[(0,i.jsx)(m.Z,{children:"Email"}),(0,i.jsxs)(m.Z,{children:[": ",(0,i.jsx)("b",{children:n.email_pemohon})]})]}),(0,i.jsxs)(g.Z,{children:[(0,i.jsx)(m.Z,{children:"Alamat"}),(0,i.jsxs)(m.Z,{children:[": ",(0,i.jsx)("b",{children:n.alamat_pemohon})]})]}),(0,i.jsxs)(g.Z,{children:[(0,i.jsx)(m.Z,{children:"Tanggal Pemohonan"}),(0,i.jsxs)(m.Z,{children:[":"," ",(0,i.jsx)("b",{children:(0,i.jsx)(j.V2,{tanggal:n.tanggal_permohonan})})]})]}),(0,i.jsxs)(g.Z,{children:[(0,i.jsx)(m.Z,{children:"Rincian"}),(0,i.jsxs)(m.Z,{children:[": ",(0,i.jsx)("b",{children:n.rincian})]})]}),(0,i.jsxs)(g.Z,{children:[(0,i.jsx)(m.Z,{children:"Tujuan"}),(0,i.jsxs)(m.Z,{children:[": ",(0,i.jsx)("b",{children:n.tujuan})]})]}),(0,i.jsx)(g.Z,{sx:{border:0},children:(0,i.jsxs)(m.Z,{colSpan:2,children:[r.kota_bawaslu,", ",(0,i.jsx)(j.xX,{})]})})]})})}),(0,i.jsxs)(h.Z,{sx:{display:"flex",justifyContent:"space-evenly"},children:[(0,i.jsxs)(h.Z,{children:[(0,i.jsx)(j.Kz,{text:"https://ppidapp.bawaslu.go.id/qr/permohonan/"+l}),(0,i.jsxs)(h.Z,{sx:{fontSize:10,m:1},children:["(Kode merupakan bukti Sah dari Sistem PPID Bawaslu ",(0,i.jsx)("br",{})," selama dapat terbaca dan terscan dengan benar)"]})]}),(0,i.jsxs)(h.Z,{sx:{position:"relative",width:100,height:90,mr:3},children:[(0,i.jsx)(j.aU,{image:n.identitas_pemohon,altText:n.nama_pemohon}),(0,i.jsx)(h.Z,{sx:{fontSize:10,m:1},children:"Pemohon"})]})]})]})})});k.displayName="DataPermohonan",a.Z=k}}]);