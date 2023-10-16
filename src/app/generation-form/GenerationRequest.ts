import { FormGroup } from "@angular/forms";

export interface GenerationRequest {
    formValue: Partial<{
        amountOfMonsters?: number;
        challengeRating?: number;
        amountOfSpells?: number;
        amountOfFeatures?: number;
    }>;
}