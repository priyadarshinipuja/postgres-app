import { User } from '../../user/entities/user.entity';
export declare class Report {
    id: string;
    price: number;
    make: string;
    model: string;
    year: number;
    lng: number;
    lat: number;
    mileage: number;
    user: User;
    approved: boolean;
}
