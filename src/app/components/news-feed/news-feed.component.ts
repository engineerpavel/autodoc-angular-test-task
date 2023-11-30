import { Component, HostListener, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { NewsFeedService } from './news-feed.service';
import { RouterLink } from '@angular/router';
import { fromEvent } from 'rxjs';
import { ScrollBottomDirective } from '../../directives/scroll-bottom.directive';

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
export class NewsFeedComponent implements OnInit {
  newsFeedService = inject(NewsFeedService);
  cards = this.newsFeedService.combinedCards;

  ngOnInit(): void {
    this.newsFeedService.getServerFeed().subscribe();
    this.newsFeedService.initLocalFeed();
  }

  onScroll(): void {
    console.log('scrollDown!');
  }
}
