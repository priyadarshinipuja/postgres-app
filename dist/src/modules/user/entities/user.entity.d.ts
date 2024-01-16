import { Report } from '../../report/entities/report.entity';
export declare class User {
    id: number;
    firstName: string;
    lastName: string;
    isActive: boolean;
    email: string;
    password: string;
    reports: Report[];
}
