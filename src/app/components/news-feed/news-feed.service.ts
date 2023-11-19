import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_API_URL } from '../../app.config';

/**
 * Сервис для работы с лентой новостей
 */
@Injectable()
export class NewsFeedService {
  private readonly httpClient = inject(HttpClient);
  private readonly baseUrl = inject(BASE_API_URL);

  /**
   * Получить карточки для ленты новостей
   */
  getNewsFeed(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/api/news/1/10`);
  }
}
