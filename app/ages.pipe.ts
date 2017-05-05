import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './zoo-animals.model';

@Pipe({
  name: "ages",
  pure: false

})

export class AgesPipe implements PipeTransform {

  transform(input: Animal[], ageRange) {
    var output: Animal[] = [];
    if(ageRange === "young"){
      for(var i = 0; i < input.length; i++) {
        if (input[i].age < 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (ageRange === "old") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].age >= 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
