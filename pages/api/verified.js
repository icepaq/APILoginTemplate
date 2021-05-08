const CheckToken = require('./modules/checkToken.js');

export default async function verified(req, res) {
    const checkToken = new CheckToken();

    res.status(200).json({result: await checkToken.run(req.query.token)});
}