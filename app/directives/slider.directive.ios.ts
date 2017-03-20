import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[slim-slider]'
})
export class SlimSlider {

  constructor(private el: ElementRef) { } 

  ngOnInit() {
    console.log('slider native class:', this.el.nativeElement.ios);
    let uiSlider = <UISlider>this.el.nativeElement.ios;
    uiSlider.setThumbImageForState(UIImage.new(), UIControlState.Normal);
  }
}

