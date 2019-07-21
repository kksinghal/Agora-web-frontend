import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ElectionDataService } from '../services/election-data.service';
import { ElectionFormThree } from '../model/election/election-form-three.model';
import { ElectionFormOne } from '../model/election/election-form-one.model';

@Component({
  selector: 'app-election-form-two',
  templateUrl: './election-form-two.component.html',
  styleUrls: ['./election-form-two.component.sass']
})
export class ElectionFormTwoComponent implements OnInit {

  currentCandidate: string;
  form1 = new ElectionFormOne();
  form3 = new ElectionFormThree();
  constructor(private router: Router, private route: ActivatedRoute, private electionDataService: ElectionDataService) {
    const origin = this.electionDataService.getOrigin();
    if (origin && 'valid' === origin) {
      this.form1 = this.electionDataService.getForm1();
      this.form3 = this.electionDataService.getForm3();
    } else {
      // this.router.navigate(['dashboard']);
    }
    this.currentCandidate = '';
  }

  ngOnInit() {
  }

  hasCandidates() {
    if (this.form3.candidates.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  next() {
      this.electionDataService.setForm3(this.form3);
      this.router.navigate(['../form4'], { relativeTo: this.route, skipLocationChange: true });
  }

  delete(index: number) {
    this.form3.candidates.splice(index, 1);
  }

  previous() {
    this.router.navigate(['../form1'], { relativeTo: this.route, skipLocationChange: true });
  }

  add(candidate: string) {
    this.form3.candidates.push(candidate);
    this.currentCandidate = '';
  }

}
