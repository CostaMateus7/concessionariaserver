const multer = require('multer');

module.exports = (
  multer({
    storage: multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, './Public/Upload');
      },
      filename: (req, file, cb) => {
        cb(null, `${Date.now().toString()}_${file.originalname}`);
      },
    }),
    fileFilter: (req, file, cb) => {
      const exImg = ['image/png', 'image/jpg', 'image/jpeg'].find((acceptedFormat) => acceptedFormat === file.mimetype);
      if (exImg) {
        return cb(null, true);
      }
      return (cb(new multer.MulterError('Arquivos precisam ser png ou jpeg'), false));
    },
  })
);
