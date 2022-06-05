const multer = require("multer");
const path = require("path");

app.use(express.static("./public"));

router.post("/upload", async (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.json({ error: err });
    } else {
      if (req.file == undefined) {
        res.json({ success: false });
      } else {
        res.json({
          success: true,
          msg: "File uploaded successfully",
          // file: `uploads/${req.file.filename}`,
        });
      }
    }
  });
});

// Set Storage Engine
const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  }, // file.fieldname is the name of the input field
});
//Init upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).single("myImage");

function checkFileType(file, cb) {
  //Check FileTypes
  const filetypes = /jpeg|jpg|png|gif/;
  //Check Extentions
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  //Check Mime
  const mimetype = filetypes.test(file.mimetype);
  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error : Images only!");
  }
}
cb;
