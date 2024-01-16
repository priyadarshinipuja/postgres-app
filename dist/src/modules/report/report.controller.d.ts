import { ReportService } from './report.service';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { User } from '../user/entities/user.entity';
import { ApproveReportDto } from './dto/approve-report.dto';
import { GetEstimateDto } from './dto/get-estimate.dto';
export declare class ReportController {
    private readonly reportService;
    constructor(reportService: ReportService);
    create(createReportDto: CreateReportDto, user: User): Promise<import("./entities/report.entity").Report>;
    getEstimate(query: GetEstimateDto): Promise<any>;
    findAll(): Promise<import("./entities/report.entity").Report[]>;
    findOne(id: string): Promise<import("./entities/report.entity").Report>;
    update(id: string, updateReportDto: UpdateReportDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("./entities/report.entity").Report>;
    approveReport(id: string, body: ApproveReportDto): Promise<import("./entities/report.entity").Report>;
}
