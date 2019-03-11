import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NospoofService {

  constructor(private httpClient: HttpClient) { }

  getJobs(truckId: string) {
    return this.httpClient.get(`/api/v1/jobs/${truckId}`);
  }

  selectJob(truckId: string, jobId: string) {
    return this.httpClient.post(`/api/v1/select-job/${jobId}`, {
      truckId: truckId
    });
  }

  getProfile(truckId: string) {
    return this.httpClient.get(`/api/v1/profile/${truckId}`);
  }

  getJobById(jobId: string) {
    return this.httpClient.get(`/api/v1/job/${jobId}`);
  }

  checkIn(jobId: string, key: string) {
    return this.httpClient.post('/api/v1/reciever/check-in', {
      jobId: jobId,
      key: key
    })
  }

  getLoadStatus(jobId: string) {

  }
}
