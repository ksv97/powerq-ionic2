import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'myDate'
})
export class MyDatePipe implements PipeTransform {

  transform(value: string) {
    let datePipe = new DatePipe("ru-RU");
    value = datePipe.transform(value, 'dd/mm')
    return value;
  }

}