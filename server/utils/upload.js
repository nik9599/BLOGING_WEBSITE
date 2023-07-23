import dotEnv from "dotenv";
dotEnv.config();

import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";

const storage = GridFsStorage({
  url: process.env.MONGO_URL,
  options: { useNewUrlParser: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpg"];

    if (match.indexOf(file.memeType) === -1) {
      return `${Date.now()}--blog--${file.originalname}`;
    }

    return {
      bucketName: "photos",
      filename: `${Date.now()}-blog-${file.originalname}`,
    };
  },
});

export default multer({ storage });
