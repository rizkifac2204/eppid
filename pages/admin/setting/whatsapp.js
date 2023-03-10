import { useState, useEffect, useContext, useRef } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import QRCode from "qrcode";
// MUI
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// Components
import AuthContext from "context/AuthContext";
import { useWhatsappContext } from "context/whatsappContext";
import { formatedDateFromEpoch } from "components/Attributes";

function Whatsapp() {
  const { user } = useContext(AuthContext);
  const { whatsapp } = useWhatsappContext();
  const [src, setSrc] = useState("");

  const numberRef = useRef();
  const messageRef = useRef();

  function generateQRCode(string) {
    QRCode.toDataURL(string).then((data) => {
      setSrc(data);
    });
  }

  function reloadPage() {
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  }

  useEffect(() => {
    if (whatsapp.qr) generateQRCode(whatsapp.qr);
    if (whatsapp.isNewLogin) reloadPage();
    return () => {
      "cleanup";
    };
  }, [whatsapp]);

  const cobaKirim = (e) => {
    const post = {
      number: numberRef.current.value,
      message: messageRef.current.value,
    };
    axios
      .post(`/api/setting/whatsapp`, post)
      .then((res) => {
        toast.success(res.data.message);
        console.log(res.data);
      })
      .catch((err) => {
        toast(err.response.data.message, { type: err.response.data.type });
        console.log(err);
      });
  };

  return (
    <>
      <Alert severity="warning" sx={{ mb: 2 }}>
        Halaman ini hanya muncul pada tampilan admin saja untuk keperluan
        pengembangan (Belum berpengaruh pada data)
      </Alert>
      <Grid container spacing={1}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                image={
                  whatsapp?.status === "Scan" ? src : "/images/whatsapp.png"
                }
                alt="Whatsapp Active"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {whatsapp.status}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {whatsapp.message}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        {whatsapp.info ? (
          <Grid item xs={12} md={8}>
            <Card sx={{ p: 2 }}>
              <ul>
                <li>Nama : {whatsapp.info?.me?.name}</li>
                <li>Nomor : {whatsapp.info?.me?.id.split(":")[0]}</li>
                <li>Paltform : {whatsapp.info?.platform}</li>
                <li>
                  lastAccountSyncTimestamp :{" "}
                  {formatedDateFromEpoch(
                    whatsapp.info?.lastAccountSyncTimestamp,
                    true
                  )}
                </li>
              </ul>

              {whatsapp.status === "Ready" ? (
                <>
                  Formulir Coba Kirim Whatsapp
                  <Box sx={{ display: "flex", my: 2 }}>
                    <TextField
                      label="Nomor Whatsapp"
                      variant="outlined"
                      name="number"
                      size="small"
                      placeholder="Nomor WA"
                      inputRef={numberRef}
                      sx={{ mr: 2 }}
                    />
                    <TextField
                      label="Pesan"
                      variant="outlined"
                      name="message"
                      size="small"
                      placeholder="Pesan"
                      inputRef={messageRef}
                      fullWidth
                    />
                  </Box>
                  <Button onClick={cobaKirim}>Coba Kirim</Button>
                </>
              ) : null}
            </Card>
          </Grid>
        ) : null}
      </Grid>

      {/* {whatsapp.status === "Ready" ? (
        <>
          <input
            type="text"
            name="number"
            placeholder="Nomor WA"
            ref={numberRef}
          ></input>
          <input
            type="text"
            name="message"
            placeholder="Isi WA"
            ref={messageRef}
          ></input>
          <Button onClick={cobaKirim}>Coba Kirim</Button>
        </>
      ) : null} */}
    </>
  );
}

Whatsapp.auth = true;
Whatsapp.breadcrumb = [
  {
    path: "/admin",
    title: "Home",
  },
  {
    path: "/admin/setting/whatsapp",
    title: "Whatsapp",
  },
];
export default Whatsapp;
