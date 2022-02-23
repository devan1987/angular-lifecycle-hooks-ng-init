import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  OnChanges,
  DoCheck,
} from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnInit, OnDestroy, OnChanges, DoCheck {
  @Input() name: string;
  timeoutInstance = null;

  constructor() {}

  ngOnChanges() {
    console.log('on change');
  }

  ngDoCheck() {
    console.log('Do checking');
  }

  ngOnInit() {
    console.log('component initialized');

    this.timeoutInstance = setInterval(() => {
      console.log(new Date());
    }, 1000);
  }

  ngOnDestroy() {
    console.log('component destroyed');
    if (this.timeoutInstance) {
      clearInterval(this.timeoutInstance);
    }
  }
}
