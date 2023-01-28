import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'convertToSpace',
    
})

export class ConvertToSpacePipe implements PipeTransform {
    transform(value: any, charcter: string): string {
        return value.replace(charcter,' ');
    }
}