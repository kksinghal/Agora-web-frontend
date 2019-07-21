import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ElectionFormOne } from '../model/election/election-form-one.model';
import { ElectionFormTwo } from '../model/election/election-form-two.model';
import { ElectionDataService } from '../services/election-data.service';

@Component({
  selector: 'app-election-form-one',
  templateUrl: './election-form-one.component.html',
  styleUrls: ['./election-form-one.component.sass']
})
export class ElectionFormOneComponent implements OnInit {

  form1 = new ElectionFormOne();
  form2 = new ElectionFormTwo();
  constructor(private router: Router, private route: ActivatedRoute, private electionDataService: ElectionDataService) {
    const origin = this.electionDataService.getOrigin();
    if (origin && 'valid' === origin) {
      this.form1 = this.electionDataService.getForm1();
    } else {
        this.router.navigate(['dashboard']);
    }
  }

  ngOnInit() {
  }

  next() {
    this.electionDataService.setForm1(this.form1);
    this.electionDataService.setForm2(this.form2);
    this.router.navigate(['../form2'], { relativeTo: this.route, skipLocationChange: true });
  }


  getMaxStart() {
    if (this.form2.endDate) {
      return new Date(this.form2.endDate);
    } else {
      return new Date(2100, 1, 1);
    }
  }

  getToday() {
    return new Date();
  }

  getMinEnd() {
    if (this.form2.startDate) {
      return new Date(this.form2.startDate);
    } else {
      return new Date();
    }
  }

  getEndStart() {
    return this.form2.startDate;
  }

}
