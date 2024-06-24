const pool = require('../connection');

exports.login = async(req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const client = await pool.connect();
    const result = await client.query(
      `SELECT userid, username, password 
      FROM public.users 
      WHERE username = '${username}' 
      AND password = '${password}'`
    );
    if (result.rows.length !== 0) {
      res.status(200).json(result.rows[0]);
    } else {
      res.status(200).json({result: false, message: "Username or Password wrong."})
    };
    client.release();
  } catch (e) {
    console.error('Error executing query', e);
    res.status(500).json({result: false, message: e});
  }
}

exports.saveUser = async(req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const client = await pool.connect();
    await client.query(
      `INSERT INTO public.users
        (username, password) VALUES 
        ('${username}', '${password}');`
    );
    res.status(200).json({result: true, message: "Used API Save User."})
    client.release();
  } catch (e) {
    console.error('Error executing query', e);
    res.status(500).json({result: false, message: e});
  }
}