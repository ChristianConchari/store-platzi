import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance } from 'date-fns';

@Pipe({
  name: 'timeAgo',
  standalone: true,
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: string | null): string {
    if (!value) return '';

    const dateObject = new Date(value);
    const currentDate = Date.now();

    return formatDistance(currentDate, dateObject);
  }
}
