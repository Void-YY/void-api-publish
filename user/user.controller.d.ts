import { CreateUserDto } from './dto';
import { UserService } from './user.service';
export declare class UserController {
    private userServise;
    constructor(userServise: UserService);
    findAll(request: any): object;
    creat(createUserDto: CreateUserDto): Promise<{
        status: number;
        post: CreateUserDto;
    }>;
}
