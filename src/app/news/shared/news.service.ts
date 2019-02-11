import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { News } from './news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  newsUrl = 'https://newsapi.org/v2/top-headlines?country=th&apiKey=83bc174510044e0ab40353682be6cc82';

  constructor(private http: HttpClient) { }

  getNews(): Observable<News> {
    return this.http.get<News>(this.newsUrl);
  }

}
