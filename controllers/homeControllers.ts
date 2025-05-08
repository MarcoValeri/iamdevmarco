import { Request, Response, NextFunction } from "express";

const homeController = (_req: Request, res: Response, _next: NextFunction) => {
    res.render('./home', {
        pageTitle: 'I Am Dev Marco',
    });
};

export { homeController };