import { HttpClient, HttpContext, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  createComment(billId: number, message: string) {
    this.http
      .post(
        `${environment.apiBaseURL}/comment`,
        new HttpParams({
          fromObject: {
            userId: 1,
            billId,
            message,
          },
        })
      )
      .subscribe();
  }

  constructor(private http: HttpClient) {}
}
