import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    signin () {
        return 'i am sign in'
    }

    signup() {
        return 'sign up'
    }
}
