import { use,get } from "./decorators";
import { Request,Response,NextFunction } from "express";
import { controller } from "./decorators";


const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
    if (req.session && req.session.loggedIn) {
      return next();
      return;
    }
  
    res.status(403);
    res.end('Not permitted');
  };

@controller('')
class RootController{

    @get('/')
    getRoot(req:Request, res:Response){
        if (req.session && req.session.loggedIn) {
          res.send(`
            <div>
              <div>You're logged in</div>
              <a href="/auth/logout">LOGOUT</a>
            </div>
            `);
        } else {
          res.send(`
            <div>
              <div>You're not logged in</div>
              <a href="/auth/logout">LOGOUT</a>
            </div>
            `);
        }
      }

    @get('/protected')
    @use(requireAuth)
    getProtectedRoute (req: Request, res: Response){
        res.send(`Hello sydney, you're welcome!`);
    }

}