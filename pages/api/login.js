const GetToken = require('./modules/getToken.js');
const Authenticate = require('./modules/authenticate.js');
const Crypt = require('crypto');

export default async function login(req, res) {

    const getToken = new GetToken();
    const authenticate = new Authenticate();

    let username = req.query.email;
    let password = req.query.password;

    password = password = '54LT3D' + password;
    password = Crypt.createHash('sha512').update(password).digest('hex');

    if(await authenticate.run(username, password)) {
        console.log('Authenticated');
        await res.status(200).json({ result: await getToken.run()});
    }
    else {
        console.log('Authentication Failed');
        res.status(200).json({ result: 'ERROR'});
    }
}