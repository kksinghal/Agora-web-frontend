import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Voter } from '../model/voter.model';
import { ElectionService } from '../services/election.service';
import { ElectionDataService } from '../services/election-data.service';
import { ElectionFormThree } from '../model/election/election-form-three.model';

declare var $: any;

@Component({
  selector: 'app-election-form-three',
  templateUrl: './election-form-three.component.html',
  styleUrls: ['./election-form-three.component.sass']
})
export class ElectionFormThreeComponent implements OnInit {

  voter = new Voter();
  form3 = new ElectionFormThree();
  isLoading = false;
  buttonText = 'Submit';
  id = '';
constructor(private router: Router, private electionService: ElectionService, private route: ActivatedRoute,
            private electionDataService: ElectionDataService ) {
      const origin = this.electionDataService.getOrigin();
      if (origin && 'valid' === origin) {
        this.form3 = this.electionDataService.getForm3();
      } else {
        this.router.navigate(['dashboard']);
      }
  }

  ngOnInit() {
  }

  next() {
    this.electionDataService.setForm3(this.form3);
    this.router.navigate(['../form4'], { relativeTo: this.route, skipLocationChange: true });
  }

  delete(index: number) {
    this.form3.candidates.splice(index, 1);
  }

  previous() {
    this.router.navigate(['../form2'], { relativeTo: this.route, skipLocationChange: true });
  }

  add() {
    let isFound = false;
    this.form3.voters.forEach(value => {
      if (value.hash.trim().toLowerCase() === this.voter.hash.trim().toLowerCase()) {
        isFound = true;
      }
    });

    if (isFound) {
      this.showNotification('danger', 'Voter with same email already exist');
    } else {
      this.voter.hash.trim();
      this.form3.voters.push(this.voter);
      this.voter = new Voter();
    }
  }

  hasVoters() {
    if (this.form3.voters.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  showNotification(notifType, message) {
    $.notify({
      icon: notifType === 'success' ? 'done' : 'notifications',
      message: message

    }, {
        type: notifType,
        timer: 4000,
        placement: {
          from: 'top',
          align: 'right'
        },
        template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>'
      });
  }

}
