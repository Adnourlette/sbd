const pool = require('../connection');
const moment = require('moment');

exports.middle = async(req, res, next) => {
  console.log(moment().format("D/MM HH.mm"),"Path:", req.originalUrl);
  try {
    const client = await pool.connect();
    client.release();
    next();
  } catch (e) {
    res.status(200).json({message : 'Failed to connection database', error: e});
  }
}

// API for check database connection
exports.db = async (req, res) => {
  const client = await pool.connect();
  res.status(200).json({message : 'Success to connection database'});
  client.release();
}
