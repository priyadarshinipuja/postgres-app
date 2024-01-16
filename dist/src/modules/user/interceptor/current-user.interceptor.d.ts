import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { UserService } from '../user.service';
export declare class CurrentUserInterceptor implements NestInterceptor {
    private usersService;
    constructor(usersService: UserService);
    intercept(context: ExecutionContext, handler: CallHandler): Promise<import("rxjs").Observable<any>>;
}
