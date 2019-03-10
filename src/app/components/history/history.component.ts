import { Component, OnInit } from '@angular/core';
import { NospoofService } from '../../services/nospoof.service';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})

export class HistoryComponent implements OnInit {
  public history: Array<any> = [];

  constructor(private ns: NospoofService) { }

  ngOnInit() { }

  loadHistory() {
    var truckId = (<HTMLInputElement>document.getElementById("truckId")).value;

    if (!truckId) return alert("Please enter your truck id")
  
    this.ns.getProfile(truckId).subscribe(
      next => {
      if (next["error"]) { return alert("Could not retrieve jobs. Please try again later, or contact support for help") }
      this.history.push(next["data"]["truck"]["history"]);
      },
      () => {
        return alert("Could not retrieve jobs. Please try again later, or contact support for help");
      }, () => {
      // Format date
      this.history = this.history.map((item, i) => {
        this.ns.getJobById(item[i]).subscribe(
            next => {
              // Set job
              this.history[i] = next;

              // Format date
              var d = new Date((next["date"]["_seconds"] * 1000) + (next["date"]["_nanoseconds"] / 1000))
              this.history[i]["date"] = `${monthNames[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
              console.log(this.history);
            }, err => { console.log(err) }
            , () => {
              console.log("DONE")
              console.log(this.history);
            }
          )
        })
      });
  }

  timeDelay() {
    return Math.floor(Math.random() * 6) + 1;
  }

}
