import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {

  transform(items: any[], attr: string): any {
    console.log("total sum pipe");
    return items.map(t => t[attr]).reduce((acc, value) => acc + (+value), 0);
  }

}


