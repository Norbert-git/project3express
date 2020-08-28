```
Auth Steps:
1. npm i bcrypt connect-mongo cors express-session passport passport-local
2. add file structure for auth (and connect to the server):
    - models/user.js
    - controllers/auth.js
    - routes/auth.js
3. fill in models/user file with:
    - require mongoose and bcrypt
    - fill in schema with name, email, password
    - fill in UserSchema.methods object
    - fill in UserSchema.pre('save'. () => {})
4. fill in routes/auth file with routes for:
    - login
    - logout
    - register
    - verify
5. fill in controllers/auth with:
    - register()
    - login()
    - verify()
    - logout() 
5. configure middleware to set up for auth
    - cors with corsOptions
    - express-session, 
    - connect-mongo, 
6. configure passport with a LocalStrategy
    - make file structure for passport
    - in passport/index.js add serializeUser and deserializeUser methods
    - in passport/localStrategy.js define and export the LocalStrategy
    - add passport.authenticate() to routes#login
```