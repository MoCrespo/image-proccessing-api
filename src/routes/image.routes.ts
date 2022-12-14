import { Router } from 'express';
import * as fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const router = Router();

router.get('/api/images', async (req, res) => {
  const filename: string = req.query.filename as string;
  const width: string = req.query.width as string;
  const height: string = req.query.height as string;

  const imageFile: string = path.join(
    __dirname,
    `../../images/full/${filename}.jpg`
  );
  const imageThumb: string = path.join(
    __dirname,
    `../../images/thumb/${filename}_${width}_${height}.jpg`
  );

  if (!filename || !fs.existsSync(imageFile)) {
    try {
      if (!filename) throw 'Enter filename';
      if (!fs.existsSync(imageFile)) throw 'Filename does not exist';
    } catch (err) {
      return res.status(400).send({ error: err });
    }
  } else if (filename && (!width || !height)) {
    try {
      if (typeof width === 'undefined' && typeof height === 'undefined') {
        return res.status(200).sendFile(imageFile);
      }
      if (!width || !height) {
        throw 'please enter width and height';
      }
    } catch (err) {
      return res.status(400).send({ error: err });
    }
  } else if (filename && width && height) {
    try {
      if (fs.existsSync(imageThumb)) {
        return res.sendFile(imageThumb);
      }
      if (!fs.existsSync(imageThumb)) {
        try {
          sharp(imageFile)
            .resize(parseInt(width), parseInt(height))
            .toFile(imageThumb, () => {
              return res.status(200).sendFile(imageThumb);
            });
        } catch (err) {
          return res
            .status(400)
            .send({ error: 'width and height should be a number' });
        }
      }
    } catch (e) {
      return res.status(400).json({ error: e });
    }
  }
});

export default router;
