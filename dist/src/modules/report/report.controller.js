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
exports.ReportController = void 0;
const common_1 = require("@nestjs/common");
const report_service_1 = require("./report.service");
const create_report_dto_1 = require("./dto/create-report.dto");
const update_report_dto_1 = require("./dto/update-report.dto");
const current_user_decorator_1 = require("../user/decorators/current-user.decorator");
const user_entity_1 = require("../user/entities/user.entity");
const serialize_interceptor_1 = require("../../interceptors/serialize.interceptor");
const report_dto_1 = require("./dto/report.dto");
const approve_report_dto_1 = require("./dto/approve-report.dto");
const admin_guard_1 = require("../../guards/admin.guard");
const get_estimate_dto_1 = require("./dto/get-estimate.dto");
let ReportController = class ReportController {
    constructor(reportService) {
        this.reportService = reportService;
    }
    create(createReportDto, user) {
        console.log('cuser', user);
        return this.reportService.create(createReportDto, user);
    }
    getEstimate(query) {
        console.log('query', query);
        return this.reportService.getEstimate(query);
    }
    findAll() {
        return this.reportService.findAll();
    }
    findOne(id) {
        return this.reportService.findOne(id);
    }
    update(id, updateReportDto) {
        return this.reportService.update(id, updateReportDto);
    }
    remove(id) {
        return this.reportService.remove(id);
    }
    approveReport(id, body) {
        return this.reportService.changeApproval(id, body);
    }
};
exports.ReportController = ReportController;
__decorate([
    (0, common_1.Post)(),
    (0, serialize_interceptor_1.Serialize)(report_dto_1.ReportDto),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_report_dto_1.CreateReportDto, user_entity_1.User]),
    __metadata("design:returntype", void 0)
], ReportController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('estimate'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_estimate_dto_1.GetEstimateDto]),
    __metadata("design:returntype", void 0)
], ReportController.prototype, "getEstimate", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReportController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReportController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_report_dto_1.UpdateReportDto]),
    __metadata("design:returntype", void 0)
], ReportController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReportController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, approve_report_dto_1.ApproveReportDto]),
    __metadata("design:returntype", void 0)
], ReportController.prototype, "approveReport", null);
exports.ReportController = ReportController = __decorate([
    (0, common_1.Controller)('report'),
    __metadata("design:paramtypes", [report_service_1.ReportService])
], ReportController);
//# sourceMappingURL=report.controller.js.map