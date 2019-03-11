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

  onClickSignOff(jobId: string, key: string) {
    if (!jobId || !key) {
      return alert("Please enter a valid job id and unlock key")
    }
    this.ns.checkIn(jobId, key).subscribe(
      next => {
        console.log("All good, so far!", next)
      }, err => {
        console.log("Oops! There was an error. Please try again later")
      })
  }

}
