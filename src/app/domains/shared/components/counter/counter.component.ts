import { Component, Input, SimpleChanges, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';
  counter = signal(0);

  constructor() {
    // NO ASYNC
    // before render
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    //before and during render
    console.log('ngOnChanges', changes);
    console.log('-'.repeat(10));
    const duration = changes['duration'];
    if (duration && duration.currentValue !== duration.previousValue)
      this.doSomething();
  }

  ngOnInit() {
    //after render
    // only once
    // async, then, subscribe
    console.log('ngOnInit');
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
    console.log('-'.repeat(10));
    //don't work on server side render
    // window.setInterval(() => {
    //   this.counter.update((value) => value + 1);
    // }, 1000);
  }

  ngAfterViewInit() {
    // after render
    // children were already rendered
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    // before destroy
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
  }

  doSomething() {
    console.log('doSomething');
    console.log('-'.repeat(10));
  }
}
