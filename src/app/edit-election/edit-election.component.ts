import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ElectionDataService } from '../services/election-data.service';
import { ElectionService } from '../services/election.service';
import { Election } from '../model/election.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-election',
  templateUrl: './edit-election.component.html',
  styleUrls: ['./edit-election.component.sass']
})
export class EditElectionComponent implements OnInit {

  constructor(
    private electionDataService: ElectionDataService,
    private router: Router,
    private electionService: ElectionService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.electionService.getElection(params.id).subscribe((data: Election) => {
        this.electionDataService.setOrigin('valid');
        this.electionDataService.setStatus('edit');
        this.electionDataService.buildElectionFormsData(data);
        console.log(data);
        this.router.navigate(['./form1'], { skipLocationChange: true });
      },
        (err: HttpErrorResponse) => {
          this.router.navigate(['/dashboard']);
        });
  });
}
  ngOnInit() {
  }

}
