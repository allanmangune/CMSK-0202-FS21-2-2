import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {
    transform(phoneValue: string): string {
        if (!phoneValue) {
          return '';
        }
        const match = phoneValue.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
          return `(${match[1]})${match[2]}-${match[3]}`;
        }
        return phoneValue; 
      }
}