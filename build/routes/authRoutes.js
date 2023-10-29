"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const requireAuth = (req, res, next) => {
    if (req.session && req.session.loggedIn) {
        return next();
        return;
    }
    res.status(403);
    res.end('Not permitted');
};
router
    .route('/login')
    .get((req, res) => {
    res.send(`
    <form method="POST">
        <div>
            <label>Email:</label>
            <input type="email" name="email"/>
        </div>

        <div>
            <label>Password:</label>
            <input type="password" name="password"/>
        </div>
        <button>SUBMIT</button>
    </form>
    `);
})
    .post((req, res) => {
    const { email, password } = req.body;
    console.log({ email, password });
    if (email && password && email === 'hi@hi.com' && password === 'test1234') {
        //mark the user as logged in
        req.session = { loggedIn: true };
        //redirect them to the root route
        res.redirect('/api/v1/users/');
    }
    else {
        res.send('Invalid email or password');
    }
});
router.route('/').get((req, res) => {
    if (req.session && req.session.loggedIn) {
        res.send(`
      <div>
        <div>You're logged in</div>
        <a href="/api/v1/users/logout">LOGOUT</a>
      </div>
      `);
    }
    else {
        res.send(`
      <div>
        <div>You're not logged in</div>
        <a href="/api/v1/users/logout">LOGOUT</a>
      </div>
      `);
    }
});
router.route('/logout').get((req, res) => {
    req.session = undefined;
    res.redirect('/api/v1/users/login');
});
router.route('/protected').get(requireAuth, (req, res) => {
    res.send(`Hello sydney, you're welcome!`);
});
exports.default = router;