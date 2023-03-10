"use strict";
exports.id = 6954;
exports.ids = [6954];
exports.modules = {

/***/ 6954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A_": () => (/* binding */ TextPermohonanBaruKepadaAdmin),
/* harmony export */   "Wk": () => (/* binding */ TextPerubahanStatus),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "_e": () => (/* binding */ TextPermohonanBaruKepadaPemohon),
/* harmony export */   "hW": () => (/* binding */ mailOption),
/* harmony export */   "pc": () => (/* binding */ TextKeberatanKepadaPemohon),
/* harmony export */   "qU": () => (/* binding */ TextKeberatanKepadaAdmin)
/* harmony export */ });
/* harmony import */ var middlewares_getLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4383);

const nodemailer = __webpack_require__(5184);
const TextPerubahanStatus = (tiket_number, email, status, reg_number, response)=>{
    return ` Salam Awas. <br/>
    <p>
      Permohonan Informasi yang anda ajukan kepada PPID Bawaslu dengan data
    </p>
    Nomor Tiket <b>${tiket_number}</b> <br/>
    Email <b>${email}</b><br/>
    <p>
       Telah ditanggapi oleh Admin. Status aktif pada Permohonan Informasi tersebut sekarang adalah
    </p>
    <h3>${status}</h3>
    Nomor Registrasi <b>${reg_number}</b> <br/>
    Dengan pesan/response <b>${response}</b><br/>
    <p>
    Atau anda dapat melihat detail permohonan anda pada link berikut : <br />
    ${"https://ppidapp.bawaslu.go.id"}/cek?email=${email}&ticket=${tiket_number}
    </p>
    Terimakasih<br/>
    Bawaslu Terbuka, Pemilu Terpercaya<br/>
    --PPID Bawaslu`;
};
const TextPermohonanBaruKepadaAdmin = (tiket_number, email)=>{
    return ` Permohonan Informasi Baru. <br/>
    <p>
      Hai Bapak/Ibu Admin PPID, Anda menerima 1 (Satu) Permintaan Permohonan Informasi baru dari
    </p>
    Email <b>${email}</b><br/>
    Nomor Tiket <b>${tiket_number}</b><br/>
    <p>
      Silakan Login Website PPID bawaslu kemudian pilih Menu Permohonan Informasi - Online Untuk Melihat Rincian Permohonan Informasi
    </p>
    Terimakasih<br/>
    Bawaslu Terbuka, Bawaslu Terpercaya<br/>
    --PPID Bawaslu`;
};
const TextPermohonanBaruKepadaPemohon = (tiket_number, email)=>{
    return `Salam Awas. <br/>
    <p>
      Permohonan informasi Anda telah kami terima. Terima kasih telah menyampaikan permohonan informasi ke PPID Bawaslu <br/>
      Setelah diregistrasi, kami akan mengirimkan pemberitahuan tertulis dalam jangka waktu sesuai <b>PERKI 1 2021</b>.<br/>
      Anda dapat melakukan pengecekan informasi yang anda lakukan dengan mengunjungi halaman Cek Pemohonan di Website PPID dan mengisi form dengan data sebagai berikut :
    </p>
    Nomor Tiket <b>${tiket_number}</b><br/>
    Email <b>${email}</b><br/><br/>
    Atau anda dapat melihat detail permohonan anda pada link berikut : <br />
    ${"https://ppidapp.bawaslu.go.id"}/cek?email=${email}&ticket=${tiket_number} <br />
    Terimakasih<br/>
    Bawaslu Terbuka, Bawaslu Terpercaya<br/>
    --PPID Bawaslu`;
};
const TextKeberatanKepadaAdmin = (reg_number, email = "Tidak Diketahui", tiket = "Tidak Diketahui")=>{
    return `Pengajuan Keberatan. <br/>
    <p>
      Hai Admin PPID, Ada Pengajuan Keberatan dari Nomor Registrasi <b>${reg_number} / ${tiket}</b> dengan email <b>${email}</b> <br/>
      Silakan Buka Website ppid bawaslu dan Login Sebagai Dengan Data Yang Sudah Diberikan Untuk Melihat Rincian Pengajuan Keberatan.
    </p>
    Terimakasih<br/>
    Bawaslu Terbuka, Bawaslu Terpercaya<br/>
    --PPID Bawaslu`;
};
const TextKeberatanKepadaPemohon = (reg_number, tiket = "Tidak Diketahui")=>{
    return `Salam Awas. <br/>
    <p>
      Pengajuan Keberatan Anda telah kami terima <br/>
      Pengajuan Keberatan yang anda ajukan akan segera kami tindak lanjut.
      PPID Bawaslu akan segera menghubungi melalui Nomor Telp atau Email sesuai data Permohonan dengan Nomor Registrasi <b>${reg_number} / ${tiket}</b>
    </p>
    Terimakasih<br/>
    Bawaslu Terbuka, Bawaslu Terpercaya<br/>
    --PPID Bawaslu`;
};
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});
const mailOption = (to, subject, text)=>{
    const option = {
        from: `ePPID Bawaslu ${process.env.EMAIL_USER}`,
        to: to,
        subject: subject,
        html: text
    };
    return option;
};
const sendingMail = (messageData)=>{
    return new Promise((resolve, reject)=>{
        try {
            transporter.sendMail(messageData, (error, info)=>{
                if (error) {
                    resolve(false);
                    middlewares_getLogger__WEBPACK_IMPORTED_MODULE_0__/* ["default"].error */ .Z.error(error);
                } else {
                    resolve(true);
                }
            });
        } catch (err) {
            middlewares_getLogger__WEBPACK_IMPORTED_MODULE_0__/* ["default"].error */ .Z.error(err);
            resolve(true);
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendingMail);


/***/ })

};
;