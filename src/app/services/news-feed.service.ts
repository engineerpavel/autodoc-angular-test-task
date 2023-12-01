import { inject, Injectable } from '@angular/core';
import { NewsFeedInterface } from '../models/news.interface';
import { NEWS_KEY } from '../constants/const';
import {
  BehaviorSubject,
  combineLatest,
  filter,
  map,
  Observable,
  pairwise,
  ReplaySubject,
  tap,
  throttleTime
} from 'rxjs';
import { NewsFeedApiService } from './news-feed-api.service';

/**
 * Сервис для работы с лентой новостей
 */
@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {
  newsFeedApiService = inject(NewsFeedApiService);
  readonly serverFeed = new BehaviorSubject<NewsFeedInterface[]>([]);
  readonly localFeed = new BehaviorSubject<NewsFeedInterface[]>([]);
  combinedCards = combineLatest([this.localFeed, this.serverFeed]).pipe(
    map((arr) => {
      return arr[0].concat(arr[1]);
    })
  );
  private currentPage = 0;

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
    this.currentPage += 1;
    return this.newsFeedApiService.getNewsFeed(this.currentPage).pipe(
      throttleTime(500),
      map((cards) => cards.news),
      tap((news) => {
        const mergedNews = this.serverFeed.value.concat(news);
        this.setServerFeed(mergedNews);
      })
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

  addNewsToLocal(newsObj: NewsFeedInterface): void {
    let newsFeedString = localStorage.getItem(NEWS_KEY);
    let newsFeedArr: NewsFeedInterface[] = [];
    if (newsFeedString) {
      try {
        newsFeedArr = JSON.parse(newsFeedString);
      } catch (err) {
        throw err;
      }
    }
    newsFeedArr.unshift(newsObj);
    localStorage.setItem(NEWS_KEY, JSON.stringify(newsFeedArr));
    this.initLocalFeed();
  }
}
