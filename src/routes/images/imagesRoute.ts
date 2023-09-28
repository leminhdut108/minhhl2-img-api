import express from 'express';
import path from 'path';
import fs from 'fs';
import imageProcessor from '../../helpers/processer';
import { paramsValidator } from '../../helpers/validation';

const imagesRouter = express.Router();

interface ImageProcessingRequestParams {
  fileName?: string;
  width?: string;
  height?: string;
}

imagesRouter.get('/images', async (req, res) => {
  const queryParams: ImageProcessingRequestParams = req.query;
  const {
    fileName,
    width: thumbWidthStr,
    height: thumbHeightStr,
  } = queryParams;
  try {
    paramsValidator(fileName, thumbWidthStr, thumbHeightStr);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).send(error.message);
    }
    return res.status(400).send('invalid params');
  }
  const thumbWidthNumber = parseInt(thumbWidthStr as string);
  const thumbHeightNumber = parseInt(thumbHeightStr as string);
  const imagePath = path.resolve(`./public/assets/images/${fileName}.jpg`);
  const thumbPath = path.resolve(
    `./public/assets/thumbs/${fileName}-w${thumbWidthNumber}-h${thumbHeightNumber}.jpg`
  );
  console.log('imagePath', imagePath);
  if (fs.existsSync(thumbPath)) {
    return res.sendFile(thumbPath);
  } else {
    try {
      await imageProcessor({
        imagePath,
        thumbPath,
        thumbWidth: thumbWidthNumber,
        thumbHeight: thumbHeightNumber,
      });
      return res.sendFile(thumbPath);
    } catch (error) {
      return res.status(500).send('Image Processing Error');
    }
  }
});

export default imagesRouter;
