import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ElectionFormOne } from '../model/election/election-form-one.model';
import { ElectionDataService } from '../services/election-data.service';
@Component({
  selector: 'app-create-public-election',
  templateUrl: './create-public-election.component.html',
  styleUrls: ['./create-public-election.component.sass']
})
export class CreatePublicElectionComponent implements OnInit {

  form1 = new ElectionFormOne();

  constructor(private electionDataService: ElectionDataService, private router: Router) {
    electionDataService.setOrigin('valid');
    electionDataService.setStatus('create');
    this.form1 = electionDataService.getForm1();
    this.form1.electionType = 'Public';
    this.electionDataService.setForm1(this.form1);
    console.log('Polls');
    this.router.navigate(['./form1'], { skipLocationChange: true });
  }
  ngOnInit() {
  }

}
