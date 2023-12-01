import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { CommonModule, IMAGE_CONFIG } from '@angular/common';
import { NewsDetailApiService } from '../../services/news-detail-api.service';
import { Observable } from 'rxjs';
import { NewsDetailInterface } from '../../models/news.interface';
import { SanitizePipe } from '../../pipes/sanitize.pipe';

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [CommonModule, SanitizePipe],
  providers: [
    NewsDetailApiService,
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true,
        disableImageLazyLoadWarning: true
      }
    }
  ],
  templateUrl: './news-detail.component.html',
  styleUrl: './news-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
/**
 * Отображает новость подробно
 */
export class NewsDetailComponent {
  newsDetailService = inject(NewsDetailApiService);
  newsData = new Observable<NewsDetailInterface>();
  @Input()
  set url(urlString: string) {
    this.newsData = this.newsDetailService.getNewsData(urlString);
  }
}
