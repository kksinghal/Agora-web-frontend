import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ElectionService } from '../services/election.service';
import { Election } from '../model/election.model';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';
import { Winner } from '../model/winner.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.sass']
})
export class ResultsComponent implements OnInit {
  election: Election;
  id: string;
  user: User;

  constructor(private userService: UserService,
              private router: Router,
              private electionService: ElectionService,
              private route: ActivatedRoute) {
      this.route.params.subscribe(params => {
      this.election = new Election();
      this.id = params.id;
      this.user = this.userService.getCurrentUser();
      this.electionService.getElection(params.id).subscribe((data: Election) => {
        console.log(data);
        this.election = data;
      },
        (err: HttpErrorResponse) => {
          this.router.navigate(['/dashboard']);
        });
      this.electionService.getResults(this.id).subscribe((data: Winner[]) => {
          console.log(data);
          this.election.winners = data;
        });
    });
  }

  ngOnInit() {
  }

  addVoter() {
    this.router.navigate(['/addVoter/' + this.id]);
  }

  electionInfo() {
    this.router.navigate(['/election/' + this.id]);
  }

}
