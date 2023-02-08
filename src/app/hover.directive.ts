import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[invappHover]',
})
export class HoverDirective implements OnInit {
  @Input() color: string = '';

  constructor(
    private element: ElementRef,
    // private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.element.nativeElement.style.color = this.color;
    // this.renderer.setStyle(this.element.nativeElement, 'color', 'blue');
  }
  @HostListener('mouseenter') onMouseEnter(){
    this.element.nativeElement.style.backgroundColor = 'green';
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.element.nativeElement.style.backgroundColor = 'white';
  }
}
