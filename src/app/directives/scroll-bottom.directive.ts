import { Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { fromEvent, Subscription, throttleTime } from 'rxjs';

@Directive({
  selector: '[appScrollBottom]',
  standalone: true
})
export class ScrollBottomDirective implements OnInit, OnDestroy {
  @Output() nearEnd: EventEmitter<void> = new EventEmitter<void>();
  @Input() threshold = 120;
  private window!: Window;
  private subscription = new Subscription();

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.window = window;
    this.scrollHandler();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  scrollHandler(): void {
    this.subscription.add(
      fromEvent(this.window, 'scroll')
        .pipe(throttleTime(200))
        .subscribe((event) => {
          const heightOfWholePage = this.window.document.documentElement.scrollHeight;

          const heightOfElement = this.el.nativeElement.scrollHeight;

          const currentScrolledY = this.window.scrollY;

          const innerHeight = this.window.innerHeight;

          const spaceOfElementAndPage = heightOfWholePage - heightOfElement;

          const scrollToBottom = heightOfElement - innerHeight - currentScrolledY + spaceOfElementAndPage;

          if (scrollToBottom < this.threshold) {
            this.nearEnd.emit();
          }
        })
    );
  }
}
