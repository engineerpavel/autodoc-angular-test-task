import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Сервис для работы с лентой новостей
 */
@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {
  private readonly httpClient = inject(HttpClient);

  /**
   * Получить карточки для ленты новостей
   */
  getNewsFeed(): Observable<any> {
    return this.httpClient.get('');
  }
}
