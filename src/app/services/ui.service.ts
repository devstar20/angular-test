import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();
  constructor() { }
  toggleAddTask():void {
    console.log('called here')
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  onToggle(): Observable<any> {
    console.log('action on toggle')
    return this.subject.asObservable()
  }
}
