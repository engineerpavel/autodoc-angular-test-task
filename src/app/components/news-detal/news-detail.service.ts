import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BASE_API_URL } from '../../app.config';
import { NewsDetailInterface } from '../../models/newsFeedInterface';

@Injectable()
/**
 * Сервис для работы с новостью
 */
export class NewsDetailService {
  private readonly httpClient = inject(HttpClient);
  private readonly baseUrl = inject(BASE_API_URL);

  /**
   * Получить новость
   * @url URL новости
   */
  getNewsData(url: string): Observable<NewsDetailInterface> {
    console.log('итоговый урл: ', `${this.baseUrl}/api/news/item/${url}`);
    return this.httpClient.get<NewsDetailInterface>(`${this.baseUrl}/api/news/item/${url}`);
  }
}
