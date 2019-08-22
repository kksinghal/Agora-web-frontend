import { Deserializable } from './deserializable.model';

export class Question implements Deserializable {

    question: string;
    answer: string;
    crypto: string;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
