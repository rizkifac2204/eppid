(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3684],{84480:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/subscriber/email/[id]",function(){return i(62570)}])},62570:function(e,s,i){"use strict";i.r(s);var n=i(85893),a=i(11163),r=i(67294),t=i(6154),l=i(25675),c=i.n(l),d=i(55678),o=i(29238),h=i.n(o),u=i(86886),x=i(66242),j=i(44267),Z=i(69661),m=i(67358),p=i(38895),b=i(22797),f=i(15861),g=i(7906),_=i(295),S=i(53252),P=i(72882),k=i(68509),w=i(90629),D=i(34386),T=i(87357),E=i(16323),v=i(15497),I=i(88075),C=i(22961),y=i(23508),A=i(13173);function N(){let e=(0,a.useRouter)(),{id:s}=e.query,[i,l]=(0,r.useState)({}),[o,N]=(0,r.useState)(""),[H,L]=(0,r.useState)(!0);(0,r.useEffect)(()=>{s&&t.Z.get("/api/subscriber/email/"+s).then(e=>{l(e.data)}).catch(s=>{d.Am.error(s.response.data.message),setTimeout(()=>e.push("/admin/subscriber/email"),2e3)}).then(()=>L(!1))},[s]),(0,r.useEffect)(()=>{if(!i.listPenerima)return;let e=i.listPenerima.map(e=>e.email_subscriber),s=e.join(", ");N(s)},[i]);let O=()=>{let i=confirm("Yakin Hapus Data?");if(i){let i=d.Am.loading("Tunggu Sebentar...",{autoClose:!1});t.Z.delete("/api/subscriber/email/".concat(s)).then(s=>{d.Am.update(i,{render:s.data.message,type:"success",isLoading:!1,autoClose:2e3}),e.push("/admin/subscriber/email")}).catch(e=>{d.Am.update(i,{render:e.response.data.message,type:"error",isLoading:!1,autoClose:2e3})})}},z=[{icon:(0,n.jsx)(A.Z,{}),name:"Hapus",action:O}];return(0,n.jsxs)(x.Z,{children:[(0,n.jsx)(j.Z,{children:(0,n.jsxs)(u.ZP,{container:!0,children:[(0,n.jsx)(u.ZP,{item:!0,children:(0,n.jsx)(Z.Z,{sx:{m:1,bgcolor:"white"},children:(0,n.jsx)(c(),{src:"/images/logo.png",layout:"fill",alt:"PPID"})})}),(0,n.jsxs)(u.ZP,{item:!0,children:[(0,n.jsx)(f.Z,{variant:"h4",children:i.subjek}),(0,n.jsxs)(m.Z,{children:[(0,n.jsx)(p.Z,{expandIcon:(0,n.jsx)(y.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,n.jsx)(f.Z,{variant:"caption",children:"PPID"})}),(0,n.jsx)(b.Z,{children:(0,n.jsx)(P.Z,{component:w.Z,children:(0,n.jsx)(g.Z,{sx:{},"aria-label":"simple table",children:(0,n.jsxs)(_.Z,{children:[(0,n.jsxs)(k.Z,{children:[(0,n.jsx)(S.Z,{children:"Dari"}),(0,n.jsx)(S.Z,{children:": PPID Bawaslu"})]}),(0,n.jsxs)(k.Z,{children:[(0,n.jsx)(S.Z,{children:"Provinsi"}),(0,n.jsxs)(S.Z,{children:[": ",i.provinsi]})]}),(0,n.jsxs)(k.Z,{children:[(0,n.jsx)(S.Z,{children:"Kabupaten/Kota"}),(0,n.jsxs)(S.Z,{children:[": ",i.kabupaten]})]}),(0,n.jsxs)(k.Z,{children:[(0,n.jsx)(S.Z,{children:"Status"}),(0,n.jsx)(S.Z,{children:": Terkirim"})]}),(0,n.jsxs)(k.Z,{children:[(0,n.jsx)(S.Z,{children:"Tanggal"}),(0,n.jsxs)(S.Z,{children:[":"," ",i.sended_at&&new Date(i.sended_at).toISOString().split("T")[0]]})]}),(0,n.jsxs)(k.Z,{children:[(0,n.jsx)(S.Z,{children:"Subjek"}),(0,n.jsxs)(S.Z,{children:[": ",i.subjek]})]}),(0,n.jsxs)(k.Z,{children:[(0,n.jsx)(S.Z,{children:"Penerima"}),"All"===i.penerima?(0,n.jsx)(S.Z,{children:": Semua Subscriber"}):(0,n.jsxs)(S.Z,{children:[":",(0,n.jsx)(D.Z,{title:o,children:(0,n.jsx)(C.Z,{fontSize:"small"})})]})]})]})})})})]}),(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:h().sanitize(i.isi)}})]})]})}),(0,n.jsxs)(T.Z,{p:2,children:[(0,n.jsxs)(f.Z,{variant:"caption",children:["Dibuat :"," ",i.created_at&&new Date(i.created_at).toISOString().split("T")[0]]}),(0,n.jsx)(T.Z,{sx:{transform:"translateZ(0px)",flexGrow:1},children:(0,n.jsx)(E.Z,{ariaLabel:"SpeedDial basic example",sx:{position:"absolute",bottom:0,right:0},icon:(0,n.jsx)(v.Z,{}),children:z.map(e=>(0,n.jsx)(I.Z,{icon:e.icon,tooltipTitle:e.name,onClick:e.action},e.name))})})]})]})}N.auth=!0,N.breadcrumb=[{path:"/admin",title:"Home"},{path:"/admin/subscriber",title:"Subscriber"},{path:"/admin/subscriber/email",title:"Email"},{path:"/admin/subscriber/email",title:"Detail"}],s.default=N}},function(e){e.O(0,[6886,1868,1235,465,9774,2888,179],function(){return e(e.s=84480)}),_N_E=e.O()}]);