// import { Router, Request, Response, NextFunction } from 'express';
// import  'reflect-metadata';



// const router = Router();


// router
//   .route('/login')
//   .get((req: Request, res: Response) => {
//     res.send(`
//     <form method="POST">
//         <div>
//             <label>Email:</label>
//             <input type="email" name="email"/>
//         </div>

//         <div>
//             <label>Password:</label>
//             <input type="password" name="password"/>
//         </div>
//         <button>SUBMIT</button>
//     </form>
//     `);
//   })



// router.route('/logout').get((req: Request, res: Response) => {
//   req.session = undefined;
//   res.redirect('/api/v1/users/login');
// });

// router.route('/protected').get(requireAuth, (req: Request, res: Response) => {
//   res.send(`Hello sydney, you're welcome!`);
// });
// export default router;

//TODO:
//1. Decorator to associate a method with a route
//2 . Decorator to perform some validation
//3 . Decorator to setup some middleware
//4 . Decorator to mark a class as being an actual controller

//NOTE: The class decorator will attach the class methods to the router object
//       as route handlers
