import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './zoo-animals.model';

@Pipe({
  name: "diet",
  pure: false
})

export class DietPipe implements PipeTransform {
  transform(input: Animal[], diet) {
    var output: Animal[] = [];
    if(diet === "carnivore") {
      for(var i = 0; i < input.length; i++) {
        if(input[i].diet === "Carnivore") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (diet === "herbivore") {
      for(var i = 0; i < input.length; i++) {
        if(input[i].diet === "Herbivore") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (diet === "omnivore") {
      for(var i = 0; i < input.length; i++) {
        if(input[i].diet === "Omnivore") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (diet === "fungivore") {
      for(var i = 0; i < input.length; i++) {
        if(input[i].diet === "Fungivore") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (diet === "bacterivore") {
      for(var i = 0; i < input.length; i++) {
        if(input[i].diet === "Bacterivore") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
