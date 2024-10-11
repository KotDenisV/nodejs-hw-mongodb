import { env } from "../utils/env.js";
import { saveFileToCloudinary } from "./saveFileToCloudinary.js";
import { saveFileToUploadDir } from "./saveFileToUploadDir.js";

export const saveImage = async (photo) => {
  if (env('ENABLE_CLOUDINARY') === 'true') {
    return await saveFileToCloudinary(photo);
  } else {
    return await saveFileToUploadDir(photo);
  }
};