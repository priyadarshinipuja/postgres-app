import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UserService } from '../modules/user/user.service';



@Injectable()
export class CurrentUserMiddleware implements NestMiddleware {
  constructor(private usersService: UserService) {}
  async use(req: Request, _res: Response, next: NextFunction) {
    //const { userId } = { userId: 1 } || req?.session || {};

    const { userId } = { userId: 1 };
    console.log('userId', userId);
    if (userId) {
      const user = await this.usersService.findOne(userId);
      // @ts-ignore
      req.currentUser = user;
    }
    next();
  }
}
