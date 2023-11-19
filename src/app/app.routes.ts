import { Routes } from '@angular/router';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { NewsDetailComponent } from './components/news-detal/news-detail.component';

export const routes: Routes = [
  { path: '', component: NewsFeedComponent },
  { path: 'news/:url', component: NewsDetailComponent }
];
