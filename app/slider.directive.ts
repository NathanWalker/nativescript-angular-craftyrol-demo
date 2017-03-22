import { Directive, ElementRef } from '@angular/core';

import { isIOS } from 'platform';

@Directive({
  selector: '[slider-demo]'
})
export class SliderDemoDirective {

  constructor(private el: ElementRef) { } 
  
  ngOnInit() {
    if (isIOS) {
      console.log('slider native class:', this.el.nativeElement.ios);
      let uiSlider = <UISlider>this.el.nativeElement.ios;

      uiSlider.setThumbImageForState(UIImage.imageNamed('juri-thumb.png'), UIControlState.Normal);

    } else {
      console.log('slider native class:', this.el.nativeElement.android);
      let seekBar = <android.widget.SeekBar>this.el.nativeElement.android;
      seekBar.getThumb().mutate().setAlpha(0);
    }
  }
}
