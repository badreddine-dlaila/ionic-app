import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ComapnyInfo } from '../interfaces/company-info';

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

  debug(value: string): string {
    return value + ' [RSpacex Service 🙃]';
  }
}
