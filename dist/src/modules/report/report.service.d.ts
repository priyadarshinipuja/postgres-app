import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { Report } from './entities/report.entity';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { ApproveReportDto } from './dto/approve-report.dto';
import { GetEstimateDto } from './dto/get-estimate.dto';
export declare class ReportService {
    private reportRepository;
    constructor(reportRepository: Repository<Report>);
    create(createReportDto: CreateReportDto, user: User): Promise<Report>;
    findAll(): Promise<Report[]>;
    getEstimate({ make, model, year, lat, lng, mileage }: GetEstimateDto): Promise<any>;
    findOne(id: string): Promise<Report>;
    update(id: string, updateReportDto: UpdateReportDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<Report>;
    changeApproval(id: string, body: ApproveReportDto): Promise<Report>;
}
