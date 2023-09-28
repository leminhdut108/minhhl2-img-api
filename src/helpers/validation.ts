import fs from 'fs';
import path from 'path';

export const paramsValidator = (
  fileName: string | undefined,
  thumbWidth: string | undefined,
  thumbHeight: string | undefined
) => {
  if (!fileName || !thumbWidth || !thumbHeight) {
    throw new Error(
      'Missing of params required, required params are: fileName, width, height'
    );
  }
  const imagePath = path.resolve(`./public/assets/images/${fileName}.jpg`);
  if (!fs.existsSync(imagePath)) {
    throw new Error('invalid file name');
  }
  const thumbWidthNumber = parseInt(thumbWidth ?? '');
  const thumbHeightNumber = parseInt(thumbHeight ?? '');
  if (
    isNaN(thumbWidthNumber) ||
    isNaN(thumbHeightNumber) ||
    thumbWidthNumber <= 0 ||
    thumbHeightNumber <= 0
  ) {
    throw new Error('Size params must be a valid number');
  }
};
