import { AbstractControl, ValidationErrors } from '@angular/forms';

export class InputValidator {
    static oldPasswordChecker(control: AbstractControl): Promise<ValidationErrors | null> {

        return new Promise((resolve, reject) => {
            if (control.value.length > 0 && control.value !== 'P@ssw0rd') resolve({ notValid: true })
            else resolve (null)
        })

    }

    static passwordsShouldMatch(control: AbstractControl): ValidationErrors | null {
        const newPassword = control.get('newPassword');
        const confirmPassword = control.get('confirmPassword');

        if (newPassword?.value.length > 0 && confirmPassword?.value.length > 0 && newPassword?.value !== confirmPassword?.value)
            return { shouldMatch: true }
        return { shouldMatch: false }
    }
}