import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp',
  standalone: true,
})
export class TemperaturePipe implements PipeTransform {
  transform(
    value: string | number | null,
    inputType: 'cel' | 'fah',
    outputType?: 'cel' | 'fah'
  ) {
    if (!value) {
      return value;
    }

    let val: number;

    if (typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }

    let outputTemp = val;

    if (inputType === 'cel' && outputType === 'fah') {
      outputTemp = val * (9 / 5) + 32;
    } else if (inputType === 'fah' && outputType === 'cel') {
      outputTemp = (val - 32) * (5 / 9);
    } else {
      outputTemp = val;
    }

    let symbol: 'ºC' | 'ºF';

    if (!outputType) {
      symbol = inputType === 'cel' ? 'ºC' : 'ºF';
    } else {
      symbol = outputType === 'cel' ? 'ºC' : 'ºF';
    }

    return `${outputTemp.toFixed(2)} ${symbol}`;
  }
}
