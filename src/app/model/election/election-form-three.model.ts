import { Voter } from '../voter.model';

export class ElectionFormThree {
    candidates: Array<string>;
    voters: Array<Voter>;
    constructor() {
        this.candidates = new Array<string>();
        this.voters = new Array<Voter>();
    }

}
