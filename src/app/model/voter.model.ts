import { Deserializable } from './deserializable.model';

export class Voter implements Deserializable {
    name: string;
    hash: string;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
