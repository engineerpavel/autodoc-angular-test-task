import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { NewsFeedService } from './news-feed.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-news-feed',
  standalone: true,
  imports: [CommonModule, CardComponent, RouterLink],
  providers: [NewsFeedService],
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
}
