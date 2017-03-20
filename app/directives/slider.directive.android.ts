import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[slim-slider]'
})
export class SlimSlider {

  constructor(private el: ElementRef) { } 

  ngOnInit() {
    console.log('slider native class:', this.el.nativeElement.android);
    let seekBar = <android.widget.SeekBar>this.el.nativeElement.android;
    seekBar.getThumb().mutate().setAlpha(0);
  }
}

