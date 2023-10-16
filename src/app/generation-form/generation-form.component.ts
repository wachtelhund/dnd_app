import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
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
  @Input('formEntries') formEntries: FormEntry[] = [];
  formGroup = new FormGroup({});
  // amountOfMonsters = new FormControl(1, [Validators.min(1), Validators.max(5)]);
  // challengeRating = new FormControl(1, [Validators.min(1), Validators.max(25)]);

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

  onGenerateCharacter() {
    alert('Not implemented yet');
  }
}

