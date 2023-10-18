import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GenerationRequest } from './GenerationRequest';
import { filter, tap } from 'rxjs';
import { FormEntry, ValidationSpan } from './FormEntry';

@Component({
  selector: 'app-generation-form',
  templateUrl: './generation-form.component.html',
  styleUrls: ['./generation-form.component.scss']
})
export class GenerationFormComponent {
  @Output() onGenerateSubmit = new EventEmitter<GenerationRequest>();
  formGroup = new FormGroup({});

  @Input('formEntries') formEntries: FormEntry[] = [];

  ngOnInit() {
    this.formEntries.forEach(formEntry => {
      this.formGroup.addControl(formEntry.controlName, formEntry.control);
    });
    this.formEntries.forEach(formEntry => {
      this.watchNumericalFormControlValid(formEntry.control, formEntry.validationSpan);
    });
  }

  watchNumericalFormControlValid(control: FormControl, validationSpan: ValidationSpan) {
    control.valueChanges.pipe(
      filter(value => value),
    )
    .subscribe(value => {
      if (value < validationSpan.lowerLimit) {
        control.setValue(validationSpan.lowerLimit);
      } else if (value > validationSpan.upperLimit) {
        control.setValue(validationSpan.upperLimit);
      }
    });
  }

  onGenerate() {
    this.onGenerateSubmit.emit({
      formValue: this.formGroup.value
    });
  }
}

