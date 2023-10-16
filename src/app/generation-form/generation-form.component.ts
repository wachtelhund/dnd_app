import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Form, FormControl, Validators } from '@angular/forms';
import { GenerationRequest } from './GenerationRequest';
import { filter, tap } from 'rxjs';

@Component({
  selector: 'app-generation-form',
  templateUrl: './generation-form.component.html',
  styleUrls: ['./generation-form.component.scss']
})
export class GenerationFormComponent {
  @Output() onGenerateMonsters = new EventEmitter<GenerationRequest>();
  amountOfMonsters = new FormControl(1, [Validators.min(1), Validators.max(5)]);
  challengeRating = new FormControl(1, [Validators.min(1), Validators.max(25)]);

  ngOnInit() {
    this.watchNumericalFormControlValid(this.amountOfMonsters, { lowerLimit: 1, upperLimit: 5 });
    this.watchNumericalFormControlValid(this.challengeRating, { lowerLimit: 1, upperLimit: 25 });
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

  onGenerateEncounter() {
    if (this.amountOfMonsters.invalid || this.challengeRating.invalid) {
      alert('Invalid input');
    }
    this.onGenerateMonsters.emit({
      amountOfMonsters: this.amountOfMonsters.value || 1,
      challengeRating: this.challengeRating.value || 1,
    });
  }

  onGenerateCharacter() {
    alert('Not implemented yet');
  }
}

interface ValidationSpan {
  upperLimit: number;
  lowerLimit: number;
}
