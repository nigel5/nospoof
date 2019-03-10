import { Component, OnInit } from '@angular/core';
import { NospoofService } from '../../services/nospoof.service';
import { mergeAnalyzedFiles } from '@angular/compiler';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  public jobs: Array<any>;
  truckId: string;

  constructor(private ns: NospoofService) { }

  ngOnInit() { }

  onClickGetJobs(truckId: string) {
    if (!truckId) return alert("Please enter your truck id")
  
    this.ns.getJobs(truckId).subscribe(
      next => {
      if (next["error"]) { return alert("Could not retrieve jobs. Please try again later, or contact support for help") }
      this.jobs = next["data"]["jobs"];
      },
      () => {
        return alert("Could not retrieve jobs. Please try again later, or contact support for help");
      }, () => {
      // Format date
          var d: Date;
          Object.keys(this.jobs).forEach((key) => {
            d = new Date((this.jobs[key]["date"]["_seconds"] * 1000) + (this.jobs[key]["date"]["_nanoseconds"] / 1000))
            this.jobs[key]["date"] =  `${monthNames[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
        })
      });
  }

  onClickTakeJob(truckId: string, jobId: string) {
    this.ns.selectJob(truckId, jobId).subscribe(
      next => {
        console.log(next);
        return alert("Sucess!");
      }, err => {
        console.log(err);
        return alert("Could not take job id " + jobId);
      }, () => {

      }
    );
  }
}
