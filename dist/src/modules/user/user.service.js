"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./entities/user.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let UserService = class UserService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    create(createUserDto) {
        console.log('createUserDto', createUserDto);
        const user = new user_entity_1.User();
        user.firstName = createUserDto.firstName;
        user.lastName = createUserDto.lastName;
        user.isActive = createUserDto.isActive;
        user.isActive = createUserDto.isActive;
        user.email = createUserDto.email;
        user.password = createUserDto.password;
        return this.usersRepository.save(user);
    }
    findAll() {
        return this.usersRepository.find();
    }
    findOne(id) {
        return this.usersRepository.findOneBy({ id });
    }
    async update(id, updateUserDto) {
        const exstinguser = await this.findOne(id);
        if (!exstinguser) {
            throw new common_1.HttpException('not found', common_1.HttpStatus.NOT_FOUND);
        }
        const user = new user_entity_1.User();
        user.firstName = updateUserDto.firstName;
        user.lastName = updateUserDto.lastName;
        user.isActive = updateUserDto.isActive;
        user.email = updateUserDto.email;
        user.password = updateUserDto.password;
        user.id = id;
        return this.usersRepository.save(user);
    }
    async remove(id) {
        const user = await this.findOne(id);
        if (!user) {
            return new common_1.HttpException('not found', common_1.HttpStatus.NOT_FOUND);
        }
        return this.usersRepository.remove(user);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map