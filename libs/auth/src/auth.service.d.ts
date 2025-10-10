import { JwtService } from '@nestjs/jwt';
import { User } from './user.entity';
export declare class AuthService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    validateUser(user: User): Promise<any>;
    login(user: User): Promise<{
        access_token: string;
    }>;
}
