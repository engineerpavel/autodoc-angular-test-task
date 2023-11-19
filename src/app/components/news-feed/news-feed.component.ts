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
export class NewsFeedComponent {
  // cards = [{ name: 1 }, { name: 'sdfs' }, { name: 8 }, { name: 453 }, { name: 333 }];
  newsFeedService = inject(NewsFeedService);
  cards = this.newsFeedService.getNewsFeed();
}
