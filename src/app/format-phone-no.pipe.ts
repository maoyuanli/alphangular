import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'formatPhoneNo'
})
export class FormatPhoneNoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value !== null) {
      const s: string = String(value);
      const pre: string = s.substring(0, 3);
      const mid: string = s.substring(3, 6);
      const end: string = s.substring(6, s.length);
      return pre + '-' + mid + '-' + end;
    } else {
      return null;
    }
  }
}
