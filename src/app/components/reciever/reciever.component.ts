import { Component, OnInit } from '@angular/core';
import { NospoofService } from '../../services/nospoof.service';

@Component({
  selector: 'app-reciever',
  templateUrl: './reciever.component.html',
  styleUrls: ['./reciever.component.css']
})
export class RecieverComponent implements OnInit {

  constructor(private ns: NospoofService) { }

  ngOnInit() {
  }

  onClickSignOff() {
    var jobId = (<HTMLInputElement>document.getElementById('jobId')).value
    var truckId = (<HTMLInputElement>document.getElementById('jobId')).value
    var uKey = (<HTMLInputElement>document.getElementById('uKey')).value

    this.ns.checkIn(jobId, truckId, uKey).subscribe(
      next => {
        console.log(next)
      }, err => {
        console.log(err)
      }, () => {
        console.log("DONE")
      }
    )
  }

}
