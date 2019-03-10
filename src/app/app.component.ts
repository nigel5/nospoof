import { Component, OnInit } from '@angular/core';
import { JobsComponent } from './components/jobs/jobs.component';
import { NospoofService } from './services/nospoof.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nospoof';
  profile: any;
  currentJob: any;
  constructor(private ns: NospoofService) { }

  ngOnInit() {
    var truckId = (<HTMLInputElement>document.getElementById('jobId')).value
    this.ns.getProfile("NakLrvNzjDx5TDcbzWjM").subscribe(
      next => {
        // Have profile, now get current job...
        this.ns.getJobById(next["data"]["truck"]["currentJob"]).subscribe(
          job => {
            this.currentJob = job;
          }
        )
        this.profile = next
      }, err => {
        console.log(err)
      }, () => {
        console.log("Done!")
      }
    )
  }

  get originLocation() {
    return this.currentJob["data"]["job"]["origin"]
  }

  get destinationLocation() {
      return this.currentJob["data"]["job"]["destination"]
  }
}
