import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
// MUI
import Card from "@mui/material/Card";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
// ICONS
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
// Components
import { CustomToolbar } from "components/TableComponents";
import AuthContext from "context/AuthContext";

function Regulasi() {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [selected, setSelected] = useState([]);

  function fecthRegulasi() {
    axios
      .get(`/api/setting/regulasi`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        toast.error("Terjadi Kesalahan");
      });
  }

  useEffect(() => {
    fecthRegulasi();
  }, []);

  const handleDelete = (id) => {
    const ask = confirm("Yakin Hapus Data?");
    if (ask) {
      const toastProses = toast.loading("Tunggu Sebentar...", {
        autoClose: false,
      });
      axios
        .delete(`/api/setting/regulasi/${id}`)
        .then((res) => {
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
          console.log(err);
          toast.update(toastProses, {
            render: err.response.data.message,
            type: "error",
            isLoading: false,
            autoClose: 2000,
          });
        });
    }
  };
  const handleDeleteSelected = () => {
    const ask = confirm("Yakin Hapus Data Terpilih?");
    if (ask) {
      const toastProses = toast.loading("Tunggu Sebentar...", {
        autoClose: false,
      });
      axios
        .delete(`/api/setting/regulasi`, { data: selected })
        .then((res) => {
          setTimeout(() => {
            setData((prevRows) =>
              prevRows.filter((row) => !selected.includes(row.id))
            );
          });
          toast.update(toastProses, {
            render: res.data.message,
            type: "success",
            isLoading: false,
            autoClose: 2000,
          });
        })
        .catch((err) => {
          toast.update(toastProses, {
            render: err.response.data.message,
            type: "error",
            isLoading: false,
            autoClose: 2000,
          });
        });
    }
  };

  const columns = [
    {
      field: "nomor",
      headerName: "Nomor",
      minWidth: 100,
    },
    {
      field: "kategori",
      headerName: "Kategori",
      minWidth: 200,
    },
    {
      field: "judul",
      headerName: "Judul",
      minWidth: 200,
    },
    {
      field: "tentang",
      headerName: "Tentang",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "berkas",
      headerName: "Berkas",
      minWidth: 100,
      renderCell: (params) => (
        <a
          target={`_blank`}
          href={`/api/services/file/public/regulasi/${params.row.berkas}`}
          rel="noopener noreferrer"
        >
          Lihat Berkas
        </a>
      ),
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
        <DataGrid
          autoHeight
          rows={data}
          columns={columns}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20]}
          checkboxSelection
          disableSelectionOnClick
          onSelectionModelChange={(itm) => setSelected(itm)}
          components={{
            Toolbar: CustomToolbar,
          }}
          componentsProps={{
            toolbar: {
              selectedItem: selected,
              handleDeleteSelected: handleDeleteSelected,
            },
          }}
        />
      </Card>
    </>
  );
}

Regulasi.auth = true;
Regulasi.breadcrumb = [
  {
    path: "/admin",
    title: "Home",
  },
  {
    path: "/admin/setting/regulasi",
    title: "Regulasi",
  },
];
export default Regulasi;
