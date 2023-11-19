import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsInterface } from '../../models/news.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
/**
 * Компонент карточки с превью новости
 */
export class CardComponent {
  @Input()
  cardData?: NewsInterface;
}
