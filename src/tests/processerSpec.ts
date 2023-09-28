import path from 'path';
import imageProcessor from '../helpers/processer';

it('expect imageProcessor not throw any error', () => {
  expect(async () => {
    const imagePath = path.resolve(`./public/assets/images/santamonica.jpg`);
    const thumbPath = path.resolve(
      `./public/assets/thumbs/santamonica-w400-h400.jpg`
    );
    await imageProcessor({
      imagePath,
      thumbPath,
      thumbWidth: 400,
      thumbHeight: 400
    });
  }).not.toThrow();
});
