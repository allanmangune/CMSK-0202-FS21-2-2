import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'; // Import FormBuilder
import { Person } from '../../models/person.model'; // Import Person from the correct file path
import { PersonService } from '../../services/person.service'; // Import PersonService from the correct file path
import { validateVerticalPosition } from '@angular/cdk/overlay';
import { PhoneFormatPipe } from 'src/app/pipes/ phone-format.pipe';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  provinces: string[] = [
    'Alberta',
    'British Columbia',
    'Manitoba',
    'New Brunswick',
    'Newfoundland and Labrador',
    'Nova Scotia',
    'Northwest Territories',
    'Nunavut',
    'Ontario',
    'Prince Edward Island',
    'Quebec',
    'Saskatchewan',
    'Yukon'
  ];
  personForm!: FormGroup;
  phoneFormatPipe: PhoneFormatPipe = new PhoneFormatPipe();

  constructor(private personService: PersonService, private fb: FormBuilder) {} // Inject FormBuilder

  ngOnInit() {
    this.personForm = this.fb.group({
      id: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      firstName: ['', [Validators.required, Validators.pattern('^[^0-9]+$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[^0-9]+$')]],
      address: [''],
      city: ['', [Validators.required, Validators.pattern('^[^0-9]+$')]],
      province: [''],
      phone: ['',[this.phoneValidator]],
    });
  }

  onSubmit() {
    const id = Math.floor(Math.random() * 1000000);
    if (this.personForm.valid) {
      const newPerson = this.personForm.value;
      newPerson.id = id;
      newPerson.phone = this.phoneFormatPipe.transform(newPerson.phone);
      console.log(newPerson); 
    } else {
      this.personForm.markAllAsTouched();
    }
  }

  phoneValidator(control: FormControl): { [key: string]: any } | null {
    const validPhoneRegex = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;
    const isValid = validPhoneRegex.test(control.value);
    return isValid ? null : { 'invalidPhone': { value: control.value } };
  }
}
