import express, {NextFunction, Request, Response} from "express";
import * as fs from 'fs';
export const app = express();

app.set('view engine', 'pug')
app.use(express.static(process.cwd() + '/public'));


app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.render('pages/index', { })  
})

app.get("/parallax", (req: Request, res: Response, next: NextFunction) => {
    res.render("pages/parallax");
})

app.get("/correcteurOrthographe", (req: Request, res: Response, next: NextFunction) => {
    fs.readFile(process.cwd() + '/public/otherFile/listeMots.txt', 'utf8', (err, data) => {
        if (err) throw err;
        let listeMots = data[6]
        res.render("pages/correcteurOrthographe", {listeDeMots: listeMots});
    });
})