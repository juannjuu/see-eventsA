const errorHandler = require("../utils/error-handler");
const multer = require("multer");
const {
  CloudinaryStorage
} = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

module.exports = {
  uploadCloud: (fieldName) => {
    const storage = new CloudinaryStorage({
      cloudinary: cloudinary,
      params: (req, file) => {
        return {
          folder: fieldName + "/seeEvents",
          resource_type: "raw",
          public_id: Date.now() + " - " + file.originalname,
        };
      },
    });

    const fileFilter = (req, file, cb) => {
      if (!file.mimetype.includes("image")) {
        return cb(new Error("Please select image files only"), false);
      }
      cb(null, true);
    };

    // 1mb = 1024kb
    // 1kb = 1024byte
    const upload = multer({
      storage,
      fileFilter,
      limits: {
        fileSize: 1024 * 1024 * 2 //file limit 2MB
      }
    }).single(
      fieldName
    ); // setting uploader

    return (req, res, next) => {
      upload(req, res, (err) => {
        if (err) {
          // if ((err.code = "LIMIT_FILE_SIZE")) {
          //   return res.status(400).json({
          //     status: "Bad Request",
          //     message: "Exceed maximum file size (5MB)",
          //     result: {},
          //   });
          // }
          return res.status(400).json({
            status: "Bad Request",
            message: err.message,
            result: {},
          });
        }
        next();
      });
    };
  },
};