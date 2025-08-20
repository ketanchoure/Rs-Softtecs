const multer = require("multer");

const Storage = multer.diskStorage({
   
    destination: function (req, file, cb) {
        if (file.fieldname === "profile") {
          cb(null, "./uploads/profile");
        } else if (file.fieldname === "images") {
          cb(null, "./uploads/images");
        } else {
          cb(new Error("Invalid field name"), null);
        }
      },
    filename:(req,file,cb)=>{
        return cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage:Storage });

const uploadFields = upload.fields([
  { name: "profile", maxCount: 1 },
  { name: "images", maxCount: 3 },
]);

module.exports = { uploadFields };