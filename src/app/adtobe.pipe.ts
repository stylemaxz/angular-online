import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adtobe'
})
export class AdtobePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
