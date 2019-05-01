const express = require('express');

// creating an express instance
const cookieSession = require('cookie-session');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const port = 3000;
const cors = require('cors');

const app = express();
// app.set('trust proxy', 1);

app.use(cors());
// getting the local authentication type
const LocalStrategy = require('passport-local').Strategy;

//initializing body parser
app.use(bodyParser.json());

//initializing cookie session
// app.use(cookieSession({
//   name: 'session',
//   keys: ["secretkeys"],
//   // Cookie Options
//   secure: false,
//   maxAge: 24 * 60 * 60 * 1000 // 24 hours
// }))

app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true, maxAge: 1000 * 60 * 2 } //2 minutes
  })
);

// telling express we want to use passport
app.use(passport.initialize());

// telling passport to start the session management system
app.use(passport.session());

// Serializing user:
// We need to tell Passport.js how to handle a given user object. This is necessary if we want to do some work before storing it in session. In this case, we only want to store the id as it is enough to identify the user when we extract it from the cookie.
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserializing user:
// When a user makes a request for a secured URL. We tell passport how to retrieve the user object from our array of users. It will use the id we stored using the serializeUser method to achieve this.
passport.deserializeUser((id, done) => {
  console.log("deserialize");
  
  let user = users.find(user => {
    return user.id === id;
  });
  done(null, user);
});

// Configuring passport
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },

    (username, password, done) => {
      let user = users.find(user => {
        return user.email === username && user.password === password;
      });

      if (user) {
        done(null, user);
      } else {
        done(null, false, { message: 'Incorrect username or password' });
      }
    }
  )
);

// in-memory "database"
let users = [
  {
    id: 1,
    name: 'Jude',
    email: 'user@email.com',
    password: 'password'
  },
  {
    id: 2,
    name: 'Emma',
    email: 'emma@email.com',
    password: 'password2'
  }
];

// login logic
app.post('/api/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(400).send([user, 'Cannot log in', info]);
    }
    req.login(user, err => {
      
      if (err) {
        return next(err);
      }
      
      console.log('Here req.user should be defined');
      console.log('req.user', ': ', req.user);
      return res.send(
        `Successfully authenticated. Welcome ${req.user.name}`
      );
    });
  })(req, res, next);
});

// logout logic, req.logout invalidates the cookie if it exists
app.get('/api/logout', function(req, res) {
  req.logout();
  console.log('logged out');
  return res.send();
});

// authentication middleware
const authMiddleware = (req, res, next) => {
  console.log('req.user', ': ', req.user);

  if (!req.isAuthenticated()) {
    res.send('You are not authenticated');
  } else {
    return next();
  }
};

// protected data
app.get('/api/user',authMiddleware, (req, res) => {
  console.log('req.session', ': ', req.session);
  console.log('req.user', ': ', req.user);

  // let user = users.find(user => {
  //   return user.id === req.session.passport.user
  // })

  // console.log([user, req.session])

  res.send('testing');
});

// Staring the express server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
