import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { NewsFeedArrInterface, NewsFeedInterface } from '../../models/news.interface';
import { HttpClient } from '@angular/common/http';
import { BASE_API_URL } from '../../app.config';

@Injectable({
  providedIn: 'root'
})
export class NewsFeedApiService {
  private readonly httpClient = inject(HttpClient);
  private readonly baseUrl = inject(BASE_API_URL);

  /**
   * Получить карточки для ленты новостей
   */
  getNewsFeed(): Observable<NewsFeedArrInterface> {
    return this.httpClient.get<NewsFeedArrInterface>(`${this.baseUrl}/api/news/1/10`);
  }
}
