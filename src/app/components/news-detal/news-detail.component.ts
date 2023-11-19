import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-detail.component.html',
  styleUrl: './news-detail.component.scss'
})
export class NewsDetailComponent {
  @Input()
  set url(urlString: string) {
    console.log(urlString);
  }
}
