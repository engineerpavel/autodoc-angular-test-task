import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePreviewComponent } from '../image-preview/image-preview.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewsFeedInterface } from '../../models/news.interface';
import { NEWS_KEY } from '../../constants/const';

@Component({
  selector: 'app-news-add',
  standalone: true,
  imports: [CommonModule, ImagePreviewComponent, ReactiveFormsModule],
  templateUrl: './news-add.component.html',
  styleUrl: './news-add.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsAddComponent {
  @Output()
  close = new EventEmitter<void>();
  cdr = inject(ChangeDetectorRef);
  preview = '';
  newsForm = new FormGroup({
    title: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    text: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    image: new FormControl('', { nonNullable: true, validators: [Validators.required] })
  });

  /**
   * Обработчик выбора изображения
   * @param event
   */
  selectImage(event: Event): void {
    const imgFiles = (event.target as HTMLInputElement).files;
    if (imgFiles) {
      const imgFile = imgFiles.item(0);
      if (imgFile) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.preview = e.target.result;
          this.cdr.markForCheck();
        };
        reader.readAsDataURL(imgFile);
      }
    }
  }

  /**
   * Удалить выбранное изображение
   */
  onDeletePreview(): void {
    this.preview = '';
    this.newsForm.get('image')?.reset();
  }

  /**
   * Опубликовать новость
   * (добавить в LocalStorage)
   */
  publish(): void {
    if (this.newsForm.valid) {
      let newsFeedString = localStorage.getItem(NEWS_KEY);
      let newsFeedArr: NewsFeedInterface[] = [];
      if (newsFeedString) {
        try {
          newsFeedArr = JSON.parse(newsFeedString);
        } catch (err) {
          console.error(err);
        }
      }

      newsFeedArr.push({
        categoryType: '',
        description: '',
        fullUrl: '',
        id: Math.random(),
        publishedDate: Date.now().toString(),
        title: this.newsForm.get('title')!.value,
        titleImageUrl: this.preview,
        url: ''
      });

      localStorage.setItem(NEWS_KEY, JSON.stringify(newsFeedArr));
      this.close.emit();
    }
  }
}
