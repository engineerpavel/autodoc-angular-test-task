import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { NewsFeedService } from './news-feed.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news-feed',
  standalone: true,
  imports: [CommonModule, CardComponent],
  providers: [NewsFeedService],
  templateUrl: './news-feed.component.html',
  styleUrl: './news-feed.component.scss'
})
/**
 * Компонент со списком новостей
 */
export class NewsFeedComponent {
  newsFeedService = inject(NewsFeedService);
  cards = this.newsFeedService.getNewsFeed();
}
