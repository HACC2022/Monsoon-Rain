import { HttpClient, HttpContext, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  createComment(testimonyId: number, message: string) {
    return this.http.post(
      `${environment.apiBaseURL}/comment`,
      new HttpParams({
        fromObject: {
          userId: 1,
          testimonyId,
          message,
        },
      })
    );
  }

  constructor(private http: HttpClient) {}
}
