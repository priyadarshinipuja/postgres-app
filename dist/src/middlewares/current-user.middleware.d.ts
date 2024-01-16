import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UserService } from '../modules/user/user.service';
export declare class CurrentUserMiddleware implements NestMiddleware {
    private usersService;
    constructor(usersService: UserService);
    use(req: Request, _res: Response, next: NextFunction): Promise<void>;
}
