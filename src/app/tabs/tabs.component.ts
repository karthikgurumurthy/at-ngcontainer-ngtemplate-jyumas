import {
  Component,
  ContentChild,
  ContentChildren,
  Input,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { TabDirective } from './tab.directive';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent {
  // index = 0;

  // @Input()
  // names: string[] = [];

  @ContentChildren(TabDirective, { read: TemplateRef })
  templates: QueryList<any>;

  @ContentChildren(TabDirective)
  tabs: QueryList<TabDirective>;

  currentTab: TemplateRef<any>;
}
