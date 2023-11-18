import { Routes } from '@angular/router';
import {NewsFeedComponent} from "./components/news-feed/news-feed.component";
import {NewsDetalComponent} from "./components/news-detal/news-detal.component";

export const routes: Routes = [
  { path: '', component: NewsFeedComponent },
  { path: 'news', component: NewsDetalComponent },
];
