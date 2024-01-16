import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  create(createUserDto: CreateUserDto): Promise<User> {
    console.log('createUserDto', createUserDto);
    const user: User = new User();
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.isActive = createUserDto.isActive;
    user.isActive = createUserDto.isActive;
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    return this.usersRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User | null> {
    const exstinguser = await this.findOne(id);
    if (!exstinguser) {
      throw new HttpException('not found', HttpStatus.NOT_FOUND);
    }
    const user: User = new User();
    user.firstName = updateUserDto.firstName;
    user.lastName = updateUserDto.lastName;
    user.isActive = updateUserDto.isActive;
    user.email = updateUserDto.email;
    user.password = updateUserDto.password;
    user.id = id;
    return this.usersRepository.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) {
      return new HttpException('not found', HttpStatus.NOT_FOUND);
    }
    return this.usersRepository.remove(user);
  }
}
