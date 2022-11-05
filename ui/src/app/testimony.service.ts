import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

export const updateTestimony = Symbol('updateTestimony');

@Injectable({
  providedIn: 'root',
})
export class TestimonyService {
  public updateSubject = new Subject<Symbol>();
  private testimony: any;

  getTestimony() {
    return this.testimony;
  }

  getTestimonyById(id: number) {
    return this.http.get(`${environment.apiBaseURL}/testimony/${id}`);
  }

  updateTestimony(id: number, same: boolean, position: string, body: string) {
    return this.http.patch(
      `${environment.apiBaseURL}/testimony/${id}`,
      new HttpParams({
        fromObject: {
          same,
          position,
          body,
        },
      })
    );
  }

  createApproval(id: number, type: string, stage: string) {
    console.log(id, type, stage);
    return this.http.post(
      `${environment.apiBaseURL}/approval`,
      new HttpParams({
        fromObject: {
          userId: 1,
          testimonyId: id,
          type,
          stage,
        },
      })
    );
  }

  constructor(private http: HttpClient) {}
}
