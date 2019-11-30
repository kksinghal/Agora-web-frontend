import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ElectionFormOne } from '../model/election/election-form-one.model';
import { ElectionDataService } from '../services/election-data.service';
@Component({
  selector: 'app-create-private-election',
  templateUrl: './create-private-election.component.html',
  styleUrls: ['./create-private-election.component.sass']
})
export class CreatePrivateElectionComponent implements OnInit {
  form1 = new ElectionFormOne();

  constructor(private electionDataService: ElectionDataService, private router: Router) {
    electionDataService.setOrigin('valid');
    electionDataService.setStatus('create');
    this.form1 = electionDataService.getForm1();
    this.form1.electionType = 'Private';
    this.electionDataService.setForm1(this.form1);
    this.router.navigate(['./form1'], { skipLocationChange: true });

  }
  ngOnInit() {
  }

}
