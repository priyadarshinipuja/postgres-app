import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Report } from './entities/report.entity';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { ApproveReportDto } from './dto/approve-report.dto';
import { GetEstimateDto } from './dto/get-estimate.dto';

@Injectable()
export class ReportService {
  constructor(
    @InjectRepository(Report)
    private reportRepository: Repository<Report>,
  ) {}
  create(createReportDto: CreateReportDto, user: User) {
    const report: Report = this.reportRepository.create(createReportDto);
    report.user = user;
    return this.reportRepository.save(report);
  }

  findAll() {
    return this.reportRepository.find({});
  }

  getEstimate({ make, model, year, lat, lng }: GetEstimateDto) {
    console.log('query', make);
    return this.reportRepository
      .createQueryBuilder()
      .select('AVG(price)', 'price')
      .where('make = :make', { make })
      .andWhere('model = :model', { model })
      .andWhere('lng - :lng BETWEEN -5 AND 5', { lng })
      .andWhere('lat - :lat BETWEEN -5 AND 5', { lat })
      .andWhere('year - :year BETWEEN -3 AND 3', { year })
      .limit(3)
      .getRawOne();
  }
  async findOne(id: string) {
    const report = await this.reportRepository.findOneBy({ id });
    if (!report) {
      throw new HttpException('not found', HttpStatus.NOT_FOUND);
    }
    return report;
  }

  async update(id: string, updateReportDto: UpdateReportDto) {
    const report = await this.findOne(id);
    return this.reportRepository.update(report.id, updateReportDto);
  }

  async remove(id: string) {
    const report = await this.findOne(id);
    return this.reportRepository.remove(report);
  }


  async changeApproval(id: string, body: ApproveReportDto) {
    const report = await this.findOne(id);

    report.approved = body.approved;

    return this.reportRepository.save(report);

  }
}
