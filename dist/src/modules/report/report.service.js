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
exports.ReportService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const report_entity_1 = require("./entities/report.entity");
const typeorm_2 = require("typeorm");
let ReportService = class ReportService {
    constructor(reportRepository) {
        this.reportRepository = reportRepository;
    }
    create(createReportDto, user) {
        const report = this.reportRepository.create(createReportDto);
        report.user = user;
        return this.reportRepository.save(report);
    }
    findAll() {
        return this.reportRepository.find({});
    }
    getEstimate({ make, model, year, lat, lng, mileage }) {
        console.log('query', make);
        return this.reportRepository
            .createQueryBuilder()
            .select('AVG(price)', 'price')
            .where('make = :make', { make })
            .andWhere('model = :model', { model })
            .andWhere('lng - :lng BETWEEN -5 AND 5', { lng })
            .andWhere('lat - :lat BETWEEN -5 AND 5', { lat })
            .andWhere('year - :year BETWEEN -3 AND 3', { year })
            .orderBy('ABS(mileage - :mileage)', 'DESC')
            .limit(3)
            .getRawOne();
    }
    async findOne(id) {
        const report = await this.reportRepository.findOneBy({ id });
        if (!report) {
            throw new common_1.HttpException('not found', common_1.HttpStatus.NOT_FOUND);
        }
        return report;
    }
    async update(id, updateReportDto) {
        const report = await this.findOne(id);
        return this.reportRepository.update(report.id, updateReportDto);
    }
    async remove(id) {
        const report = await this.findOne(id);
        return this.reportRepository.remove(report);
    }
    async changeApproval(id, body) {
        const report = await this.findOne(id);
        report.approved = body.approved;
        return this.reportRepository.save(report);
    }
};
exports.ReportService = ReportService;
exports.ReportService = ReportService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(report_entity_1.Report)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ReportService);
//# sourceMappingURL=report.service.js.map