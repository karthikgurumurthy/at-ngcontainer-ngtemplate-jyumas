import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[tab]',
})
export class TabDirective {
  @Input()
  name: string;
}
