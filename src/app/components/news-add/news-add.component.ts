import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-news-add',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-add.component.html',
  styleUrl: './news-add.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsAddComponent {
  @Output()
  close = new EventEmitter<void>;
}
