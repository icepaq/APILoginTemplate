# API SignUp / Login Template
This is an login system for web applications that use an API backend to render front end components.

Created with Next.js

## How it Works
There are three pages.

1. Login - pages/login
2. Signup - pages/index
3. Secure - pages/secure

### Signup
Type in an email/username and password. When you press sign up /api/signup is called. The information is stored in a MongoDB collection. The password is salted and hashed using SHA512.

### Login
Provide your email and password. When you press login, a request is sent to /api/login. From login.js authenticate.js is called to authenticate your login credentials. 

If the credentials match the database, login.js calls getToken.jsa unique number from 0 - 100 000 000 is generated. This number is a temporary API key. 

The API key is stored in the database with an expiry epoch. The API is key is also stored as a cookie with same expiry time.

### Secure
This page is just an example showing how to authenticated API key works. The page will show your key (the cookie) and if it is valid or not.

Secure calls api/verified and passes your token stored in cookies. From there api/modules/CheckToken.js is called and returns true or false depending on whether your token has expired or not.

In production your API backend will take the API key and validate it. The rest of the backend functionality will only work if the key is valid.