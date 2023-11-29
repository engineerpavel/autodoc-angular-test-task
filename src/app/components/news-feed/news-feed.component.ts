import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { NewsFeedService } from './news-feed.service';
import { RouterLink } from '@angular/router';
import { combineLatest, map } from 'rxjs';

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
  cards = combineLatest([this.newsFeedService.localFeed, this.newsFeedService.serverFeed]).pipe(
    map((arr) => {
      return arr[0].concat(arr[1]);
    })
  );

  ngOnInit(): void {
    this.newsFeedService.getServerFeed().subscribe();
  }
}
