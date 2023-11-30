import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedInterface } from '../../models/news.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
/**
 * Компонент карточки с превью новости
 */
export class CardComponent {
  @Input()
  cardData?: NewsFeedInterface;
}
