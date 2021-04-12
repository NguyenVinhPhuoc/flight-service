import multer from 'multer';

const storage = multer.memoryStorage();
const excelFileFilter = (req, file, cb) => {
  if (
    file.mimetype.includes('excel') ||
    file.mimetype.includes('spreadsheetml')
  ) {
    cb(null, true);
  } else {
    cb('Please upload only excel file.', false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: excelFileFilter,
});

export default upload;
