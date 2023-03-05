import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
// MUI
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
// ICONS
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
// Components
import { CustomToolbar } from "components/TableComponents";
import RegulasiKategoriAddForm from "components/Regulasi/RegulasiKategoriAddForm";
import AuthContext from "context/AuthContext";

function RegulasiKategori() {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [selected, setSelected] = useState([]);
  const [openForm, setOpenForm] = useState(false);

  function fecthKategori() {
    axios
      .get(`/api/setting/regulasi/kategori`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        toast.error("Terjadi Kesalahan");
      });
  }

  useEffect(() => {
    fecthKategori();
  }, []);

  const handleDelete = (id) => {
    const ask = confirm("Yakin Hapus Data?");
    if (ask) {
      const toastProses = toast.loading("Tunggu Sebentar...", {
        autoClose: false,
      });
      axios
        .delete(`/api/setting/regulasi/kategori`, { data: { id } })
        .then((res) => {
          console.log(res);
          setTimeout(() => {
            setData((prev) => prev.filter((row) => row.id != id));
          });
          toast.update(toastProses, {
            render: res.data.message,
            type: "success",
            isLoading: false,
            autoClose: 2000,
          });
        })
        .catch((err) => {
          var msg = err.response.data.message || "Terjadi Kesalahan";
          if (msg.includes("a foreign key")) {
            msg =
              "Gagal, Harus Menghapus Regulasi Pada Kategori Tersebut Terlebih Dahulu";
          }
          toast.update(toastProses, {
            render: msg,
            type: "error",
            isLoading: false,
            autoClose: 2000,
          });
        });
    }
  };

  const columns = [
    {
      field: "kategori",
      headerName: "Kategori",
      minWidth: 200,
    },
    {
      hide: !(user && user.level === 1),
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 200,
      cellClassName: "actions",
      getActions: (values) => {
        return [
          <GridActionsCellItem
            key="3"
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => handleDelete(values.id)}
          />,
        ];
      },
    },
  ];

  return (
    <>
      <Card>
        {user && user.level === 1 && (
          <Button
            variant="outlined"
            sx={{ mb: 2 }}
            onClick={() => setOpenForm(true)}
          >
            Tambah Kategori
          </Button>
        )}
        <DataGrid
          autoHeight
          rows={data}
          columns={columns}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20]}
          disableSelectionOnClick
          checkboxSelection
          disableMultipleSelection={true}
          isRowSelectable={() => false}
          onSelectionModelChange={(itm) => setSelected(itm)}
          components={{
            Toolbar: CustomToolbar,
          }}
          componentsProps={{
            toolbar: {
              selectedItem: [],
              handleDeleteSelected: () => {},
            },
          }}
        />
      </Card>

      <RegulasiKategoriAddForm
        open={openForm}
        onClose={() => setOpenForm(false)}
        fecthKategori={fecthKategori}
      />
    </>
  );
}

RegulasiKategori.auth = true;
RegulasiKategori.breadcrumb = [
  {
    path: "/admin",
    title: "Home",
  },
  {
    path: "/admin/setting/regulasi",
    title: "Regulasi",
  },
  {
    path: "/admin/setting/regulasi/kategori",
    title: "Kategori",
  },
];
export default RegulasiKategori;
