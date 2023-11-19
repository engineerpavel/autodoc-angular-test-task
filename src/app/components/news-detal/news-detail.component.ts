import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsDetailService } from './news-detail.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [CommonModule],
  providers: [NewsDetailService],
  templateUrl: './news-detail.component.html',
  styleUrl: './news-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
/**
 * Отображает новость подробно
 */
export class NewsDetailComponent {
  newsDetailService = inject(NewsDetailService);
  @Input()
  set url(urlString: string) {
    this.newsDetailService.getNewsData(urlString).subscribe((data) => console.log(data.text));
  }
}
