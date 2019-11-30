import { Deserializable } from './deserializable.model';

export class OneTimePassword implements Deserializable {
    crypto: string;
    otp: string;
    trustedDevice: boolean;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
