import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ComapnyInfo } from '../interfaces/company-info';
import { Launch } from '../interfaces/launch';

@Injectable({
  providedIn: 'root'
})
export class RSpacexService {
  private apiBaseUrl: string;

  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3';
  }

  getComapnyInfo(): Observable<ComapnyInfo> {
    const requestEndpoint = `${this.apiBaseUrl}/info`;
    return this.http.get<ComapnyInfo>(requestEndpoint).pipe(
      map((companyInfo: ComapnyInfo) => {
        return companyInfo;
      })
    );
  }

  getLaunch(flightNumber: string): Observable<Launch> {
    const requestEndpoint = `${this.apiBaseUrl}/launches/${flightNumber}`;
    return this.http.get<Launch>(requestEndpoint).pipe(
      map((launch: Launch) => {
        return launch;
      })
    );
  }

  getPastLaunches(): Observable<Launch[]> {
    const requestEndpoint = `${this.apiBaseUrl}/launches/past?order=desc`;
    return this.http.get<Launch[]>(requestEndpoint).pipe(
      map((launches: Launch[]) => {
        return launches;
      })
    );
  }

  getNextLaunch(): Observable<Launch> {
    const requestEndpoint = `${this.apiBaseUrl}/launches/next`;
    return this.http.get<Launch>(requestEndpoint).pipe(
      map(launch => {
        return launch;
      })
    );
  }

  getUpcomingLaunches(): Observable<Launch[]> {
    const requestEndpoint = `${this.apiBaseUrl}/launches/upcoming?order=desc`;
    return this.http.get<Launch[]>(requestEndpoint).pipe(
      map(launch => {
        return launch;
      })
    );
  }
}
