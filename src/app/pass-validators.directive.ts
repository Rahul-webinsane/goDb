
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appPassValidators]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PassValidatorsDirective,
    multi: true
    }]
})
export class PassValidatorsDirective implements Validator {

  constructor() { }

@Input() appConfirmEqualValidator: string;

validate(control: AbstractControl): {[key: string]: any} |null {
const controlToCompare = control.parent.get(this.appConfirmEqualValidator);
if (controlToCompare && controlToCompare.value !== control.value){
return { notEqual: true};
}
return null;
}

}
