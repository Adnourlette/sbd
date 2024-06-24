const pool = require('../connection');

exports.getPackage = async(req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(
      `SELECT * FROM public.package`
    );
    if (result.rows.length !== 0) {
      res.status(200).json(result.rows);
    } else {
      res.status(200).json({result: false, message: "No Data."})
    };
    client.release();
  } catch (e) {
    console.error('Error executing query', e);
    res.status(500).json({result: false, message: e});
  }
}

exports.savePackage = async(req, res) => {
  const name = req.body.name;
  try {
    const client = await pool.connect();
    await client.query(
      `INSERT INTO public.package
        (name) VALUES 
        ('${name}');`
    );
    res.status(200).json({result: true, message: "Used API Save Package."})
    client.release();
  } catch (e) {
    console.error('Error executing query', e);
    res.status(500).json({result: false, message: e});
  }
}

exports.updatePackage = async(req, res) => {
  const packageid = req.body.packageid;
  try {
    const client = await pool.connect();
    await client.query(
      `UPDATE public.package SET
        status = true,
        date = now()
        WHERE
          packageid = ${packageid};`
    );
    res.status(200).json({result: true, message: "Used API Update Package."})
    client.release();
  } catch (e) {
    console.error('Error executing query', e);
    res.status(500).json({result: false, message: e});
  }
}