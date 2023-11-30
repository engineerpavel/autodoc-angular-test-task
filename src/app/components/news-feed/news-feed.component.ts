import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { NewsFeedService } from './news-feed.service';
import { RouterLink } from '@angular/router';
import { ScrollBottomDirective } from '../../directives/scroll-bottom.directive';
import { Subscription, throttleTime } from 'rxjs';

@Component({
  selector: 'app-news-feed',
  standalone: true,
  imports: [CommonModule, CardComponent, RouterLink, ScrollBottomDirective],
  templateUrl: './news-feed.component.html',
  styleUrl: './news-feed.component.scss'
})
/**
 * Компонент со списком новостей
 */
export class NewsFeedComponent implements OnInit, OnDestroy {
  newsFeedService = inject(NewsFeedService);
  cards = this.newsFeedService.combinedCards;
  private currentPage = 1;
  private subscription = new Subscription();

  ngOnInit(): void {
    this.subscription.add(this.newsFeedService.getServerFeed(this.currentPage).subscribe());
    this.newsFeedService.initLocalFeed();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onScroll(): void {
    this.currentPage += 1;
    this.subscription.add(this.newsFeedService.getServerFeed(this.currentPage).pipe(throttleTime(500)).subscribe());
  }
}
