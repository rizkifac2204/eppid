(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8455],{22961:function(e,t,i){"use strict";var s=i(64836);t.Z=void 0;var n=s(i(64938)),r=i(85893),a=(0,n.default)((0,r.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.Z=a},80154:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/permohonan",function(){return i(18566)}])},18566:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return L}});var s=i(85893),n=i(67294),r=i(11163),a=i(6154),o=i(55678),l=i(47116),u=i(85945),c=i(67848),h=i(464),d=i(32161),m=i(89886),p=i(30081),x=i(33989);class f extends x.l{constructor(e,t){super(),this.client=e,this.setOptions(t),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){let t=this.options;this.options=this.client.defaultMutationOptions(e),(0,d.VS)(t,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this})}onUnsubscribe(){if(!this.listeners.length){var e;null==(e=this.currentMutation)||e.removeObserver(this)}}onMutationUpdate(e){this.updateResult();let t={listeners:!0};"success"===e.type?t.onSuccess=!0:"error"===e.type&&(t.onError=!0),this.notify(t)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(e,t){return this.mutateOptions=t,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:void 0!==e?e:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){let e=this.currentMutation?this.currentMutation.state:(0,m.R)(),t={...e,isLoading:"loading"===e.status,isSuccess:"success"===e.status,isError:"error"===e.status,isIdle:"idle"===e.status,mutate:this.mutate,reset:this.reset};this.currentResult=t}notify(e){p.V.batch(()=>{if(this.mutateOptions&&this.hasListeners()){var t,i,s,n,r,a,o,l;e.onSuccess?(null==(t=(i=this.mutateOptions).onSuccess)||t.call(i,this.currentResult.data,this.currentResult.variables,this.currentResult.context),null==(s=(n=this.mutateOptions).onSettled)||s.call(n,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)):e.onError&&(null==(r=(a=this.mutateOptions).onError)||r.call(a,this.currentResult.error,this.currentResult.variables,this.currentResult.context),null==(o=(l=this.mutateOptions).onSettled)||o.call(l,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context))}e.listeners&&this.listeners.forEach(e=>{e(this.currentResult)})})}}var j=i(24798);function g(e,t,i){let s=(0,d.lV)(e,t,i),r=(0,u.NL)({context:s.context}),[a]=n.useState(()=>new f(r,s));n.useEffect(()=>{a.setOptions(s)},[a,s]);let o=(0,h.$)(n.useCallback(e=>a.subscribe(p.V.batchCalls(e)),[a]),()=>a.getCurrentResult(),()=>a.getCurrentResult()),l=n.useCallback((e,t)=>{a.mutate(e,t).catch(v)},[a]);if(o.error&&(0,j.L)(a.options.useErrorBoundary,[o.error]))throw o.error;return{...o,mutate:l,mutateAsync:o.mutate}}function v(){}var b=i(81458),Z=i(66242),S=i(15861),w=i(65362),k=i(78591),P=i(69107),R=i(13173),C=i(22961),M=i(16023),N=i(17373),_=i(84415),y=i(57444),O=i(59982);function T(e){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(S.Z,{children:[e.row.no_registrasi,(0,s.jsx)("br",{}),(0,s.jsx)(S.Z,{variant:"caption",color:"primary",children:e.row.tiket})]})})}async function E(e){if(e)try{let t=await a.Z.delete("/api/permohonan/".concat(e));return t.data}catch(e){var t,i;throw Error((null==e?void 0:null===(t=e.response)||void 0===t?void 0:null===(i=t.data)||void 0===i?void 0:i.message)||"Terjadi Kesalahan")}}async function z(e){try{let t=await a.Z.delete("/api/permohonan/",{data:e});return t.data}catch(e){var t,i;throw Error((null==e?void 0:null===(t=e.response)||void 0===t?void 0:null===(i=t.data)||void 0===i?void 0:i.message)||"Terjadi Kesalahan")}}function D(){let e=(0,u.NL)(),t=(0,r.useRouter)(),[i,h]=(0,n.useState)(10),[d,m]=(0,n.useState)([]),[p,x]=(0,n.useState)({}),[f,j]=(0,n.useState)(!1),[v,S]=(0,n.useState)({}),D=(0,n.useRef)(),{data:L,isLoading:I,isFetching:A}=(0,c.a)({queryKey:["permohonans"],queryFn:e=>{let{signal:t}=e;return a.Z.get("/api/permohonan",{signal:t}).then(e=>e.data).catch(e=>{throw Error(e.response.data.message)})}}),{mutate:F,isLoading:W}=g({mutationFn:z,onSuccess:t=>{e.invalidateQueries(["permohonans"]),o.Am.success(t.message||"Sukses")},onError:e=>{console.log(e),o.Am.error(e.message)}}),{mutate:q,isLoading:H}=g({mutationFn:E,onSuccess:t=>{e.invalidateQueries(["permohonans"]),o.Am.success(t.message||"Sukses")},onError:(e,t)=>{o.Am.error(e.message)}}),B=(0,l.useReactToPrint)({content:()=>D.current}),K=e=>{setTimeout(()=>{x(t=>e),function(e,t){let i=o.Am.loading("Menyiapkan Format...");a.Z.get("/api/services/profileBawaslu?id="+e).then(e=>{S(e.data),o.Am.dismiss(i),t()}).catch(e=>{console.log(e),o.Am.update(i,{render:"Terjadi Kesalahan",type:"error",isLoading:!1,autoClose:2e3})})}(e.bawaslu_id,()=>{setTimeout(()=>{B()},500)})})},V=()=>{j(!0)},Q=()=>{j(!1)},U=e=>{setTimeout(()=>{x(t=>e)}),V()};return(0,s.jsxs)(s.Fragment,{children:[(A||H||W)&&(0,s.jsx)(b.Z,{}),(0,s.jsx)(Z.Z,{height:630,children:(0,s.jsx)(k._,{loading:I,autoHeight:!0,rows:L||[],columns:[{field:"no_registrasi",headerName:"Nomor Registrasi",width:250,renderCell:T,valueFormatter:e=>{let{value:t}=e;return"".concat(t)}},{field:"tiket",headerName:"Tiket",minWidth:180,hide:!0},{field:"nama_bawaslu",headerName:"Kepada",minWidth:250},{field:"platform",headerName:"Platform",minWidth:180,hide:!0},{field:"provinsi",headerName:"Provinsi",minWidth:180,hide:!0},{field:"nama_pemohon",headerName:"Pemohon",minWidth:180},{field:"telp_pemohon",headerName:"Telp/HP",minWidth:130,hide:!0},{field:"email_pemohon",headerName:"Email",minWidth:130,hide:!0},{field:"tanggal_permohonan",headerName:"Tanggal",minWidth:120,valueGetter:e=>{var t=new Date(e.row.tanggal_permohonan);return t instanceof Date&&!isNaN(t.valueOf())?t.toISOString().split("T")[0]:"-"}},{field:"status_permohonan",headerName:"Status",minWidth:150,flex:1,editable:!0},{field:"actions",type:"actions",headerName:"Actions",width:200,cellClassName:"actions",getActions:e=>[(0,s.jsx)(w.u,{icon:(0,s.jsx)(C.Z,{}),label:"Detail",onClick:()=>t.push("/admin/permohonan/"+e.id)},"0"),(0,s.jsx)(w.u,{icon:(0,s.jsx)(C.Z,{}),label:"Detail",onClick:()=>U(e.row),showInMenu:!0},"1"),(0,s.jsx)(w.u,{icon:(0,s.jsx)(N.Z,{}),label:"Tanggapi",onClick:()=>U(e.row),showInMenu:!0},"2"),(0,s.jsx)(w.u,{icon:(0,s.jsx)(M.Z,{}),label:"Print",onClick:()=>K(e.row),showInMenu:!0},"3"),(0,s.jsx)(w.u,{icon:(0,s.jsx)(R.Z,{}),label:"Delete",onClick:()=>(function(e){let t=confirm("Yakin Hapus Data?");t&&q(e)})(e.id),showInMenu:!0},"4")]}],pageSize:i,onPageSizeChange:e=>h(e),rowsPerPageOptions:[5,10,20,50],checkboxSelection:!0,disableSelectionOnClick:!0,onSelectionModelChange:e=>m(e),components:{Toolbar:_.N},componentsProps:{toolbar:{selectedItem:d,handleDeleteSelected:function(){let e=confirm("Yakin Hapus Data Terpilih?");e&&F(d)},multiSearch:!0}},columnBuffer:8,initialState:{filter:{filterModel:{items:[],quickFilterLogicOperator:P.f.Or}}}})}),(0,s.jsx)(y.Z,{open:f,onClose:Q,fullScreen:!0,detail:p,invalidateQueries:()=>props.queryClient.invalidateQueries(["permohonans"])}),(0,s.jsx)(O.Z,{ref:D,detail:p,profileBawaslu:v})]})}D.auth=!0,D.breadcrumb=[{path:"/admin",title:"Home"},{path:"/admin/permohonan",title:"Permohonan"}];var L=D},84415:function(e,t,i){"use strict";i.d(t,{D:function(){return v},N:function(){return g}});var s=i(85893),n=i(83321),r=i(86886),a=i(13173),o=i(9944),l=i(93946),u=i(34386),c=i(42176),h=i(6132),d=i(50853),m=i(54482),p=i(10930),x=i(36433);let f=e=>{let{selectedItem:t,handleDeleteSelected:i}=e;return(0,s.jsxs)(n.Z,{variant:"text",size:"small",startIcon:(0,s.jsx)(a.Z,{}),disabled:0===t.length,onClick:i,children:["Hapus ",t.length," Data Terpilih"]})},j=()=>(0,s.jsx)(n.Z,{sx:{fontSize:12},variant:"text",size:"small",startIcon:(0,s.jsx)(o.Z,{}),onClick:()=>window.open("https://www.adinstruments.com/support/knowledge-base/how-can-comma-separated-list-be-converted-cells-column-lt","_blank"),children:"Bantuan"});function g(e){return(0,s.jsx)(c.D,{children:(0,s.jsxs)(r.ZP,{container:!0,spacing:1,justify:"space-between",children:[(0,s.jsx)(r.ZP,{item:!0,children:(0,s.jsx)(h.S,{})}),(0,s.jsx)(r.ZP,{item:!0,children:(0,s.jsx)(d.M,{})}),(0,s.jsx)(r.ZP,{item:!0,children:(0,s.jsx)(m.L,{})}),(0,s.jsx)(r.ZP,{item:!0,children:(0,s.jsx)(p.Zh,{})}),(0,s.jsx)(r.ZP,{item:!0,children:(0,s.jsx)(j,{})}),(0,s.jsx)(r.ZP,{item:!0,children:(0,s.jsx)(f,{selectedItem:e.selectedItem,handleDeleteSelected:e.handleDeleteSelected})}),(0,s.jsxs)(r.ZP,{item:!0,xs:12,children:[(0,s.jsx)(x.T,{quickFilterParser:e=>e.split(",").map(e=>e.trim()).filter(e=>""!==e)}),e.multiSearch&&(0,s.jsx)(u.Z,{title:"Jika Lebih dari satu pencarian, gunakan tanda koma (,)",children:(0,s.jsx)(l.Z,{size:"small",children:(0,s.jsx)(o.Z,{fontSize:"inherit"})})})]})]})})}function v(e){return(0,s.jsx)(c.D,{children:(0,s.jsxs)(r.ZP,{container:!0,spacing:1,children:[(0,s.jsx)(r.ZP,{item:!0,children:(0,s.jsx)(h.S,{sx:{fontSize:12}})}),(0,s.jsx)(r.ZP,{item:!0,children:(0,s.jsx)(m.L,{sx:{fontSize:12}})}),(0,s.jsx)(r.ZP,{item:!0,children:(0,s.jsx)(p.Zh,{sx:{fontSize:12}})}),(0,s.jsx)(r.ZP,{item:!0,sx:{mr:3},children:(0,s.jsx)(j,{sx:{fontSize:12}})}),(0,s.jsxs)(r.ZP,{sx:{pt:1,ml:1},children:[(0,s.jsx)(x.T,{quickFilterParser:e=>e.split(",").map(e=>e.trim()).filter(e=>""!==e)}),(0,s.jsx)(u.Z,{title:"Jika Lebih dari satu pencarian, gunakan tanda koma (,)",children:(0,s.jsx)(l.Z,{size:"small",children:(0,s.jsx)(o.Z,{fontSize:"inherit"})})})]})]})})}}},function(e){e.O(0,[9004,6886,8271,7848,5015,5382,3304,967,1699,3424,9774,2888,179],function(){return e(e.s=80154)}),_N_E=e.O()}]);