import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-preview.component.html',
  styleUrl: './image-preview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImagePreviewComponent {
  @Input()
  imageBase64?: string;

  @Output()
  close = new EventEmitter<void>();
}
