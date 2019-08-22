import { Deserializable } from './deserializable.model';
import { Question } from './question.model';

export class SignUp implements Deserializable {

    identifier: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    securityQuestion: Question;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
