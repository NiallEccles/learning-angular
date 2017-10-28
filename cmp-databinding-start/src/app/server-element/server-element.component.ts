import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: '.server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterContentChecked,
  OnDestroy {
  @Input('srvElement') element: {type:string, name:string,  content:string};
  @Input() name:string;

  constructor() {
    console.log('%c constructor called!', 'background: #F4414A; color: #fff');
   }

   ngOnChanges(changes: SimpleChanges){
     console.log('%c ngOnChanges called!', 'background: #F89142; color: #2b2b2b');
     console.log(changes);
   }

  ngOnInit() {
    console.log('%c ngOnInit called!', 'background: #F8CD42; color: #2b2b2b');
  }

  ngDoCheck(){
    console.log("%c ngDoCheck called!", 'background: #44CB36; color: #fff');
  }

  ngAfterContentInit(){
    console.log("%c ngAfterContentInit called!", 'background: #B4E93E; color: #2b2b2b');
  }

  ngAfterContentChecked(){
    console.log("%c ngAfterContentChecked called!", 'background: #299991; color: #fff');
  }

  ngAfterViewInit(){
    console.log("%c ngAfterViewInit called!", 'background: #61d4dc; color: #fff');
  }

  ngAfterViewChecked(){
    console.log("%c ngAfterViewChecked called!", 'background: #819DD3; color: #fff');
  }

  ngOnDestroy(){
    console.log("%c ngOnDestroy called!", 'background: #385DA5; color: #fff');
  }

}
