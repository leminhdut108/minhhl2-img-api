import sharp from 'sharp';

interface ImageProcessorParams {
  imagePath: string;
  thumbPath: string;
  thumbWidth: number;
  thumbHeight: number;
}

const imageProcessor = ({
  imagePath,
  thumbPath,
  thumbWidth,
  thumbHeight
}: ImageProcessorParams) => {
  return sharp(imagePath).resize(thumbWidth, thumbHeight).toFile(thumbPath);
};

export default imageProcessor;
