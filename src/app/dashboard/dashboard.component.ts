import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import * as Moment from 'moment';

import { UserService } from '../services/user.service';
import { User } from '../model/user.model';
import { ElectionService } from '../services/election.service';
import { Election } from '../model/election.model';

declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  user: User;
  elections: Election[] = new Array();
  pendingElections: Election[] = new Array();
  activeElections: Election[] = new Array();
  finishedElections: Election[] = new Array();

  constructor(private userService: UserService, private electionService: ElectionService, private router: Router) {
    this.user = new User();
    this.user = this.userService.getCurrentUser();
  }

  ngOnInit() {
    this.electionService.getElections().subscribe(data => {
      this.elections = data;
      this.doStats(this.elections);
    });
  }

  isMobile() {
    if ($(window).width() > 768) {
      return false;
    }
    return true;
  }
  navigateElection(id: string) {
    this.router.navigate(['/election/' + id]);
  }
  navigatePoll() {
    this.router.navigate(['/create-poll']);
  }

  navigatePrivate() {
    this.router.navigate(['/create-election']);
  }

  profile() {
    this.router.navigate(['/profile']);
  }

  getDisplayDate(date: string): string {
    return Moment.utc(date, 'YYYY-MM-DDTHH:mm:ssZ', false).local(true).toDate().toLocaleString();
  }

  getStatus(election: Election): string {
    const date = Moment.utc().format();
    const now = Moment.utc(date, 'YYYY-MM-DDTHH:mm:ssZ', false).local(true).toDate().getTime();
    const start = Moment.utc(election.start, 'YYYY-MM-DDTHH:mm:ssZ', false).local(true).toDate().getTime();
    const end = Moment.utc(election.end, 'YYYY-MM-DDTHH:mm:ssZ', false).local(true).toDate().getTime();
    if (now < start) {
      return 'Pending';
    } else if (now > start && now < end) {
      return 'Active';
         } else { return 'Finish'; }
  }

  isEmpty(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }



  doStats(data: Election[]) {
    this.activeElections = new Array();
    this.pendingElections = new Array();
    this.finishedElections = new Array();

    data.filter(datas => {
      const status = this.getStatus(datas);
      if (status === 'Active') {
        this.activeElections.push(datas);
      } else if (status === 'Pending') {
        this.pendingElections.push(datas);
      } else {
        this.finishedElections.push(datas);
      }
    });
  }

  edit(id: string) {
    let isActiveElection = false;
    let isFinishedElection = false;

    this.activeElections.forEach(value => {
      if (value._id === id) {
        isActiveElection = true;
      }
    });

    this.finishedElections.forEach(value => {
      if (value._id === id) {
        isFinishedElection = true;
      }
    });

    if (isActiveElection) {
      Swal({
        title: 'Forbidden',
        text: 'Active elections can\'\t be modified. You can however add voters',
        type: 'error',
        confirmButtonColor: '#FFCD00',
        showCancelButton: true,
        confirmButtonText: 'Add Voters',
        cancelButtonText: 'Cancel'
      }).then((result) => {
        if (result.value) {
          this.router.navigate(['election/' + id + '/voters']);
        }
      });
    } else if (isFinishedElection) {
      Swal({
        title: 'Forbidden',
        text: 'Finished elections can\'t be modified. You can however view its results',
        type: 'error',
        confirmButtonColor: '#FFCD00',
        showCancelButton: true,
        confirmButtonText: 'Results',
        cancelButtonText: 'Cancel'
      }).then((result) => {
        if (result.value) {
          this.router.navigate(['election/' + id]);
        }
      });
    } else {
      this.router.navigate(['election/edit/' + id]);
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
