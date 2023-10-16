import { FormControl, FormGroup } from "@angular/forms";

export interface FormEntry {
    control: FormControl;
    controlName: string;
    label: string;
    validationSpan: ValidationSpan;
    type: FormEntryType;
}

export interface ValidationSpan {
  upperLimit: number;
  lowerLimit: number;
}

export enum FormEntryType {
    Number = 'number',
    Text = 'text',
}