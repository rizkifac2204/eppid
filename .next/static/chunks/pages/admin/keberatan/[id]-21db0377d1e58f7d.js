(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5960],{4554:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/keberatan/[id]",function(){return n(68611)}])},68611:function(e,a,n){"use strict";n.r(a);var i=n(85893),s=n(11163),t=n(67294),r=n(6154),l=n(55678),o=n(47116),c=n(85945),d=n(67848),m=n(66242),x=n(44267),h=n(15861),j=n(86886),Z=n(87357),u=n(16323),p=n(15497),P=n(88075),g=n(53457),k=n(50480),A=n(69368),b=n(13173),_=n(16023),f=n(53724),N=n(27452);function I(){let e=(0,s.useRouter)(),{id:a}=e.query,n=(0,c.NL)(),[I,T]=(0,t.useState)({}),E=(0,t.useRef)(),{data:B,isLoading:w,isError:S,error:y}=(0,d.a)({enabled:!!a,queryKey:["keberatan",a],queryFn:e=>{let{signal:n}=e;return r.Z.get("/api/keberatans/".concat(a),{signal:n}).then(e=>e.data).catch(e=>{throw Error(e.response.data.message)})}}),R=()=>{let i=confirm("Yakin Hapus Data?");if(i){let i=l.Am.loading("Tunggu Sebentar...",{autoClose:!1});r.Z.delete("/api/keberatans/"+a).then(a=>{l.Am.update(i,{render:a.data.message,type:"success",isLoading:!1,autoClose:2e3}),n.invalidateQueries(["keberatans"]),e.push("/admin/keberatan")}).catch(e=>{l.Am.update(i,{render:e.response.data.message,type:"error",isLoading:!1,autoClose:2e3})})}},v=e=>{let a=l.Am.loading("Menyiapkan Format...");r.Z.get("/api/services/profileBawaslu?id="+B.bawaslu_id).then(n=>{T(n.data),l.Am.dismiss(a),e()}).catch(e=>{console.log(e),l.Am.update(a,{render:"Terjadi Kesalahan",type:"error",isLoading:!1,autoClose:2e3})})},K=(0,o.useReactToPrint)({content:()=>E.current}),O=()=>{let e=0===Object.keys(I).length;if(e)return v(()=>{K()});K()},D=[{icon:(0,i.jsx)(_.Z,{}),name:"Print",action:O},{icon:(0,i.jsx)(b.Z,{}),name:"Hapus",action:R}];return S?(l.Am.error(y.message),setTimeout(()=>e.push("/admin/keberatan"),1e3),(0,i.jsx)(i.Fragment,{})):w?(0,i.jsx)(f.Z,{loading:w}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(m.Z,{children:[(0,i.jsx)(h.Z,{variant:"h5",component:"div",gutterBottom:!0,sx:{bgcolor:"background.paper",p:2},children:"DETAIL KEBERATAN ATAS PERMOHONAN INFORMASI"}),(0,i.jsx)(x.Z,{children:(0,i.jsxs)(j.ZP,{container:!0,children:[(0,i.jsx)(j.ZP,{item:!0,xs:12,children:(0,i.jsx)(h.Z,{variant:"h6",children:"A. INFORMASI PENGAJU KEBERATAN"})}),(0,i.jsx)(j.ZP,{item:!0,xs:4,children:"Nomor Registrasi"}),(0,i.jsxs)(j.ZP,{item:!0,xs:8,children:[": ",B.no_registrasi]}),(0,i.jsx)(j.ZP,{item:!0,xs:4,children:"Informasi"}),(0,i.jsxs)(j.ZP,{item:!0,xs:8,children:[": ",B.rincian]}),(0,i.jsx)(j.ZP,{item:!0,xs:4,children:"Tujuan Penggunaan Informasi"}),(0,i.jsxs)(j.ZP,{item:!0,xs:8,children:[": ",B.tujuan]}),(0,i.jsx)(j.ZP,{item:!0,xs:12,mt:2,children:(0,i.jsx)("b",{children:"Identitas Pemohon"})}),(0,i.jsx)(j.ZP,{item:!0,xs:4,children:"Nama"}),(0,i.jsxs)(j.ZP,{item:!0,xs:8,children:[": ",B.nama_pemohon]}),(0,i.jsx)(j.ZP,{item:!0,xs:4,children:"Alamat"}),(0,i.jsxs)(j.ZP,{item:!0,xs:8,children:[": ",B.alamat_pemohon]}),(0,i.jsx)(j.ZP,{item:!0,xs:4,children:"Pekerjaan"}),(0,i.jsxs)(j.ZP,{item:!0,xs:8,children:[": ",B.pekerjaann_pemohon]}),(0,i.jsx)(j.ZP,{item:!0,xs:4,children:"Telp/Hp"}),(0,i.jsxs)(j.ZP,{item:!0,xs:8,children:[": ",B.telp_pemohon]}),(0,i.jsx)(j.ZP,{item:!0,xs:4,children:"Email"}),(0,i.jsxs)(j.ZP,{item:!0,xs:8,children:[": ",B.email_pemohon]}),(0,i.jsx)(j.ZP,{item:!0,xs:12,mt:2,children:(0,i.jsx)("b",{children:"Identitas Kuasa Pemohon"})}),(0,i.jsx)(j.ZP,{item:!0,xs:4,children:"Nama"}),(0,i.jsx)(j.ZP,{item:!0,xs:8,children:":"}),(0,i.jsx)(j.ZP,{item:!0,xs:4,children:"Alamat"}),(0,i.jsx)(j.ZP,{item:!0,xs:8,children:":"}),(0,i.jsx)(j.ZP,{item:!0,xs:4,children:"Nomor Telepon"}),(0,i.jsx)(j.ZP,{item:!0,xs:8,children:":"}),(0,i.jsx)(j.ZP,{item:!0,xs:12,mt:2,children:(0,i.jsx)(h.Z,{variant:"h6",children:"B. ALASAN PENGAJUAN KEBERATAN"})}),(0,i.jsx)(j.ZP,{item:!0,xs:12,children:(0,i.jsxs)(g.Z,{children:[(0,i.jsx)(k.Z,{control:(0,i.jsx)(A.Z,{size:"small",checked:Boolean(B.alasan_a)}),label:"Permohonan Informasi ditolak"}),(0,i.jsx)(k.Z,{control:(0,i.jsx)(A.Z,{size:"small",checked:Boolean(B.alasan_b)}),label:"Informasi berkala tidak disediakan"}),(0,i.jsx)(k.Z,{control:(0,i.jsx)(A.Z,{size:"small",checked:Boolean(B.alasan_c)}),label:"Permintaan Informasi tidak ditanggapi"}),(0,i.jsx)(k.Z,{control:(0,i.jsx)(A.Z,{size:"small",checked:Boolean(B.alasan_d)}),label:"Permintaan Informasi ditanggapi tidak sebagaimana yang diminta"}),(0,i.jsx)(k.Z,{control:(0,i.jsx)(A.Z,{size:"small",checked:Boolean(B.alasan_e)}),label:"Permintaan Informasi tidak dipenuhi"}),(0,i.jsx)(k.Z,{control:(0,i.jsx)(A.Z,{size:"small",checked:Boolean(B.alasan_f)}),label:"Biaya yang dikenakan tidak wajar"}),(0,i.jsx)(k.Z,{control:(0,i.jsx)(A.Z,{size:"small",checked:Boolean(B.alasan_g)}),label:"Informasi disampaikan melebihi jangka waktu yang ditentukan"})]})}),(0,i.jsx)(j.ZP,{item:!0,xs:12,mt:2,children:(0,i.jsx)(h.Z,{variant:"h6",children:"C. KASUS POSISI"})}),(0,i.jsx)(j.ZP,{item:!0,xs:12,children:B.kasus_posisi}),(0,i.jsx)(j.ZP,{item:!0,xs:12,mt:2,children:(0,i.jsx)(h.Z,{variant:"h6",children:"D. HARI/TANGGAL TANGGAPAN ATAS KEBERATAN AKAN DIBERIKAN"})}),(0,i.jsx)(j.ZP,{item:!0,xs:12,children:B.tanggal_keberatan&&new Date(B.tanggal_keberatan).toISOString().split("T")[0]})]})}),(0,i.jsxs)(Z.Z,{p:2,children:[(0,i.jsxs)(h.Z,{variant:"caption",children:["Dibuat :"," ",B.created_at&&new Date(B.created_at).toISOString().split("T")[0]]}),(0,i.jsx)(Z.Z,{sx:{transform:"translateZ(0px)",flexGrow:1},children:(0,i.jsx)(u.Z,{ariaLabel:"SpeedDial basic example",sx:{position:"absolute",bottom:0,right:0},icon:(0,i.jsx)(p.Z,{}),children:D.map(e=>(0,i.jsx)(P.Z,{icon:e.icon,tooltipTitle:e.name,onClick:e.action},e.name))})})]})]}),(0,i.jsx)(N.Z,{ref:E,detail:B,profileBawaslu:I})]})}I.auth=!0,I.breadcrumb=[{path:"/admin",title:"Home"},{path:"/admin/keberatan",title:"Keberatan"},{path:"/admin/keberatan/detail",title:"Detail"}],a.default=I},53724:function(e,a,n){"use strict";n.d(a,{Z:function(){return t}});var i=n(85893),s=n(88078);function t(e){let{loading:a=!1}=e;return a?(0,i.jsx)(s.Z,{variant:"rectangular",width:"100%",sx:{minHeight:300}}):(0,i.jsx)(i.Fragment,{})}}},function(e){e.O(0,[6886,7848,3304,967,1868,8987,7452,9774,2888,179],function(){return e(e.s=4554)}),_N_E=e.O()}]);