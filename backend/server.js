/* ============================== RESTFUL API FOR POSTGRESQL ============================== */
/* ============================== IMPORT ============================== */
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const bodyParser = require('body-parser');
const service = require('./service');

/* ============================== SETTING ============================== */
const app = express();
const upload = multer();
app.use(cors());
app.use(upload.array());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* ============================== MIDDLEWERE ============================== */
app.use(service.middleWere.middle);
app.get('/', service.middleWere.db);

/* ============================== API ============================== */
app.post('/api/login', service.user.login);
app.post('/api/saveUser', service.user.saveUser);
app.get('/api/getPackage', service.package.getPackage);
app.post('/api/savePackage', service.package.savePackage);
app.post('/api/updatePackage', service.package.updatePackage);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));