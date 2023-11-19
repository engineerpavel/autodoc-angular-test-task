import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { BASE_API_URL } from '../../app.config';
import { NewsArrInterface, NewsInterface } from '../../models/news.interface';

/**
 * Сервис для работы с лентой новостей
 * TODO: Бесконечный скролл
 */
@Injectable()
export class NewsFeedService {
  private readonly httpClient = inject(HttpClient);
  private readonly baseUrl = inject(BASE_API_URL);

  /**
   * Получить карточки для ленты новостей
   */
  getNewsFeed(): Observable<NewsInterface[]> {
    return this.httpClient.get<NewsArrInterface>(`${this.baseUrl}/api/news/1/10`).pipe(map((cards) => cards.news));
  }
}
