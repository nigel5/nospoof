import { Component } from '@angular/core';
import { NospoofService } from '../../services/nospoof.service';

@Component({
  selector: 'app-reciever',
  templateUrl: './reciever.component.html',
  styleUrls: ['./reciever.component.css']
})
export class RecieverComponent {

  constructor(private ns: NospoofService) { }

  onClickTrackLoad(jobId: string) {
    if (!jobId) {
      return alert("Please enter the correct job id to track your load")
    }
    this.ns.getJobById(jobId).subscribe(
      next => {
        if (next["error"]) {
          return alert("Please enter the correct job id and unlock key")
        }
        return alert(`
        Origin: ${next["data"]["job"]["origin"]}
        Destination: ${next["data"]["job"]["destination"]}
        Key: ${next["data"]["job"]["key"]}
        Status: ${next["data"]["job"]["status"]}`)
      }, err => {
        console.log("Oops! There was an error. Please try again later", err)
      }
    )
  }

  onClickSignOff(jobId: string, key: string) {
    if (!jobId || !key) {
      return alert("Please enter the correct job id and unlock key")
    }
    this.ns.checkIn(jobId, key).subscribe(
      next => {
        if (next["error"]) {
          return alert("Please enter the correct job id and unlock key")
        }
        return alert("Successfully signed off job!")
      }, err => {
        console.log("Oops! There was an error. Please try again later", err)
      })
  }

}
