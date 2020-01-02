import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ElectionService } from '../services/election.service';
import { Election } from '../model/election.model';
import { HttpErrorResponse } from '@angular/common/http';
import * as Moment from 'moment';
import Swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.sass']
})

export class ElectionComponent implements OnInit {
  candidateSearchStr: string;
  election: Election;
  status: string;
  id: string;
  activated: boolean;
  tabsNumber: number;
  constructor(private router: Router, private electionService: ElectionService, private route: ActivatedRoute) {
    this.election = new Election();
    this.candidateSearchStr = "";
    this.tabsNumber = 3;
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.electionService.getElection(params.id).subscribe((data: Election) => {
        console.log(data);
        this.election = data;
        this.status = this.getStatus();
      },
        (err: HttpErrorResponse) => {
          this.router.navigate(['/dashboard']);
        });
    });
  }

  ngOnInit() {
  }
  changeTabsNumber(n){
    this.tabsNumber = n;
  }
  getTabsNumber(){
    return this.tabsNumber;
  }
  getAddVoterDisplay(){
    if(this.tabsNumber==3) {
      return 'list-item';
    }
    else{
      return 'none';
    }
  }
  filterCandidate(event){
    this.candidateSearchStr = event.target.value ;
  }
  getTime(date: string){
     var d= Moment.utc(date, 'YYYY-MM-DDTHH:mm:ssZ', false).local(true).toDate().toLocaleString();
     var arr = d.split(',')
     return arr[1];
  }

  getDate(date: string): string {
     var d= Moment.utc(date, 'YYYY-MM-DDTHH:mm:ssZ', false).local(true).toDate().toLocaleString();
     var arr = d.split(',')[0].split('/')
     return arr[0];
  }
  getMonth(date: string): string {
    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var d= Moment.utc(date, 'YYYY-MM-DDTHH:mm:ssZ', false).local(true).toDate().toLocaleString();
    var arr = d.split(',')[0].split('/')
    return month[parseInt(arr[1])-1];
  }
  getYear(date: string): string {
    var d= Moment.utc(date, 'YYYY-MM-DDTHH:mm:ssZ', false).local(true).toDate().toLocaleString();
    var arr = d.split(',')[0].split('/')
    return arr[2];
  }

  delete() {
    this.activated = false;
    const status = this.getStatus();
    console.log(status === 'Active', status);
    if (status === 'Active') {
      this.activated = true;
    }
    if (!this.activated) {
      Swal({
        title: 'Delete',
        text: 'Are you sure you want to delete this election?',
        type: 'warning',
        confirmButtonColor: '#FFCD00',
        showCancelButton: true,
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel'
      }).then((result) => {
        if (result.value) {
          this.electionService.delete(this.id).subscribe((data: any) => {
            this.router.navigate(['/dashboard']);
            this.showNotification('success', 'Election was successfully deleted');
          }, (err: HttpErrorResponse) => {
            if (err.status === 200) {
              this.router.navigate(['/dashboard']);
              this.showNotification('success', 'Election was successfully deleted');
            } else {
              this.showNotification('danger', 'Unable to delete election. Please try again');
            }
          });
        }
      });
    } else {
      console.log(this.activated);
      this.showNotification('danger', 'Active elections can\'t be deleted');
    }
  }

  generateUrl() {
    this.electionService.generateUrl(this.id).subscribe((data: any) => {
      console.log(data);
      this.election.adminLink = data.adminLink;
    });
  }

  getStatus(): string {
    const date = Moment.utc().format();
    const now = Moment.utc(date, 'YYYY-MM-DDTHH:mm:ssZ', false).local(true).toDate().getTime();
    const start = Moment.utc(this.election.start, 'YYYY-MM-DDTHH:mm:ssZ', false).local(true).toDate().getTime();
    const end = Moment.utc(this.election.end, 'YYYY-MM-DDTHH:mm:ssZ', true).local(true).toDate().getTime();
    if (now < start) {
      return 'Pending';
    } else if (now > start && now < end) {
      return 'Active';
    } else { return 'Finish'; }
  }

  addVoter() {
    this.router.navigate(['/addVoter/' + this.id]);
  }

  results() {
    this.router.navigate(['/results/' + this.id]);
  }

  edit() {
    if (this.election.electionType === 'Public' && this.getStatus() === 'Active') {
      Swal({
        title: 'Forbidden',
        text: 'Active elections can\'\t be modified.',
        type: 'error',
        showCancelButton: true,
        cancelButtonColor: '#FFCD00',
        cancelButtonText: 'Cancel'
      });
    } else if (this.getStatus() === 'Active') {
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
          this.router.navigate(['addVoter/' + this.id]);
        }
      });
    } else if (this.getStatus() === 'Finish') {
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
          this.router.navigate(['results/' + this.id]);
        }
      });
    } else {
      this.router.navigate(['edit/' + this.id]);
    }
  }

  showNotification(notifType, message) {
    $.notify({
      icon: notifType === 'success' ? 'done' : 'notifications',
      message

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
