import { Component, OnInit } from '@angular/core';
import { NospoofService } from '../../services/nospoof.service';

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

  constructor(private ns: NospoofService) { }

  ngOnInit() {

  }

  onClickGetJobs() {
    this.ns.getJobs("NakLrvNzjDx5TDcbzWjM").subscribe(
      next => {
       if (next["error"]) { return alert(next["error"]["message"]) }
       this.jobs = next["data"]["jobs"];
      },
      err => {
         console.log(err);
      }, () => {
       // Format date
          var d: Date;
          Object.keys(this.jobs).forEach((key) => {
            console.log(this.jobs)
            d = new Date((this.jobs[key]["date"]["_seconds"] * 1000) + (this.jobs[key]["date"]["_nanoseconds"] / 1000))
            this.jobs[key]["date"] =  `${monthNames[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`

        })
      });
  }
}
