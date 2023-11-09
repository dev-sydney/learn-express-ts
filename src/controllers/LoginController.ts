import {  NextFunction, Request, Response } from 'express';
import {get,post,controller, use, bodyValidator,} from './decorators';

interface RequestWithBody extends Request {
    body: { [key: string]: string | undefined };
  }
  

function logger(req:Request,res:Response,next:NextFunction){
    console.log("Youre logging wai");
    next()
}

@controller('/auth')
class LoginController{

    @use(logger)
    @get('/login')
    getLogin(req: Request, res: Response):void {
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
          }
          
    @post('/login')
    @bodyValidator('email','password')
    postLogin(req: RequestWithBody, res: Response) {
            const { email, password } = req.body;
            if (email && password && email === 'hi@hi.com' && password === 'test1234') {
              //mark the user as logged in
              req.session = { loggedIn: true };
              //redirect them to the root route
              res.redirect('/');
            } else {
              res.send('Invalid email or password');
            }
          }

    @get('/logout')
    getLogout(req: Request, res: Response) {
        req.session = undefined;
        res.redirect('/auth/login');
      }
     
}
