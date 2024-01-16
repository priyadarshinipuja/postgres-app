import { HttpException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User | null>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<User | null>;
    remove(id: number): Promise<User | HttpException>;
}
