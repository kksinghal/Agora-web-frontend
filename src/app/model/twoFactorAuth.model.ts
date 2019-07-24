import { Deserializable } from './deserializable.model';

export class TwoFactorAuth implements Deserializable {
    username: string;
    crypto: string;
    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
