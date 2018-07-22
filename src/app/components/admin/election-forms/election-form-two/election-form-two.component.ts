import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ElectionFormTwo } from '../../../../model/election/election-form-two.model';
import { ElectionDataService } from '../../../../services/election-data.service';

@Component({
  selector: 'app-election-form-two',
  templateUrl: './election-form-two.component.html',
  styleUrls: ['./election-form-two.component.scss']
})
export class ElectionFormTwoComponent implements OnInit {

  form2 = new ElectionFormTwo();
  constructor(private router: Router, private route: ActivatedRoute, private electionDataService: ElectionDataService) {
    let origin = this.electionDataService.getOrigin();
    if (origin && "valid" === origin) {
      if(this.electionDataService.getStatus() === "create") {
        this.form2 = this.electionDataService.getForm2();
        this.form2.endDate = new Date(2100, 1, 1);
      } else {
        this.form2 = this.electionDataService.getForm2();
      }
      console.log(this.form2);
    } else
      this.router.navigate(["dashboard"]);
  }

  ngOnInit() {
  }

  getMaxStart() {
    if (this.form2.endDate) {
      return new Date(this.form2.endDate)
    } else {
      return new Date(2100, 1, 1);
    }
  }

  getToday() {
    return new Date();
  }

  getMinEnd() {
    if (this.form2.startDate) {
      return new Date(this.form2.startDate)
    } else {
      return new Date();
    }
  }

  getEndStart() {
    return this.form2.startDate;
  }

  next() {
    this.electionDataService.setForm2(this.form2);
    this.router.navigate(["../form3"], { relativeTo: this.route, skipLocationChange: true });
  }

  previous() {
    this.electionDataService.setForm2(this.form2);
    this.router.navigate(["../form1"], { relativeTo: this.route, skipLocationChange: true });
  }

}
