import { SelectItem } from '../models/SelectItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnumHelper {

  public mapToSelectItemArray(emum: Object): Array<SelectItem> {

    const keys = Object.keys(emum);
    const halfLength: number = keys.length / 2;
    const result: Array<SelectItem> = [];

    for (let i = 0; i < halfLength; i++) {
      result.push({
        id: +keys[i],
        title: keys[halfLength + i]
      })
    }

    return result;
  }
}
