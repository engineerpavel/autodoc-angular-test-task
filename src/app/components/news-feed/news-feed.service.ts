import { inject, Injectable } from '@angular/core';
import { NewsFeedInterface } from '../../models/news.interface';
import { NEWS_KEY } from '../../constants/const';
import { BehaviorSubject, combineLatest, map, Observable, ReplaySubject, tap } from 'rxjs';
import { NewsFeedApiService } from './news-feed-api.service';

/**
 * Сервис для работы с лентой новостей
 * TODO: Бесконечный скролл
 */
@Injectable()
export class NewsFeedService {
  newsFeedApiService = inject(NewsFeedApiService);
  readonly serverFeed = new BehaviorSubject<NewsFeedInterface[]>([]);
  readonly localFeed = new BehaviorSubject<NewsFeedInterface[]>([]);
  combinedCards = combineLatest([this.localFeed, this.serverFeed]).pipe(
    map((arr) => {
      return arr[0].concat(arr[1]);
    })
  );

  /**
   * Поместить список новостей из LocalStorage в localFeed
   */
  initLocalFeed(): void {
    this.localFeed.next(this.getLocalFeed());
  }

  setServerFeed(feed: NewsFeedInterface[]): void {
    this.serverFeed.next(feed);
  }

  getServerFeed(): Observable<NewsFeedInterface[]> {
    return this.newsFeedApiService.getNewsFeed().pipe(
      map((cards) => cards.news),
      tap((news) => this.setServerFeed(news))
    );
  }

  /**
   * Получить данные из LocalStorage
   */
  getLocalFeed(): NewsFeedInterface[] {
    const newsString = localStorage.getItem(NEWS_KEY);
    if (newsString) {
      try {
        return JSON.parse(newsString);
      } catch (err) {
        throw err;
      }
    }
    return [];
  }
}
