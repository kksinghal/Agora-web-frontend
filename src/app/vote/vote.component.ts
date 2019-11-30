import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { VotingService } from '../services/voting.service';
import { ElectionService } from '../services/election.service';
import { ElectionData } from '../model/electionData.model';
import { VOTING_ALGORITHMS } from '../model/election.model';
import { BallotType } from '../model/ballot.model';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.sass']
})
export class VoteComponent implements OnInit {
  isError = false;
  isShow = true;
  constructor(
    private votingService: VotingService,
    private router: Router,
    private electionService: ElectionService,
    private route: ActivatedRoute
    ) {
      this.route.params.subscribe(params => {
        this.electionService.verifyVoter(params.id, params.pass).subscribe((data: ElectionData) => {
          this.votingService.setOrigin('valid');
          this.votingService.setData(data);
          this.votingService.setVoterCode(params.pass);
          this.votingService.setVoterID(params.id);
          this.isShow = false;
          this.doNavigation(data);
        },
        (err: HttpErrorResponse) => {
          this.isError = true;
        });
    });
  }

  doNavigation(data: ElectionData) {
    this.isShow = false;
    for (const algo of VOTING_ALGORITHMS) {
      if (algo.value === data.votingAlgo) {
        console.log('Entered the first if');
        if (algo.ballotType as BallotType === BallotType.PreferenceBallot) {
          this.router.navigate(['./preferencial-ballot'], { skipLocationChange: true });
        } else if (algo.ballotType as BallotType === BallotType.RankBallot as BallotType) {
          this.router.navigate(['./rank-ballot'], { skipLocationChange: true });
        } else if (algo.ballotType as BallotType === BallotType.ScoreBallot as BallotType) {
          this.router.navigate(['./score-ballot'], { skipLocationChange: true });
        } else {
          this.isError = true;
        }
        break;
      }
    }
  }
  ngOnInit() {
  }
}

