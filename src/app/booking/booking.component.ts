import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { exhaustMap, mergeMap, switchMap } from 'rxjs';
import { BookingService } from './booking.service';
import { CustomValidator } from './validators/custom-validator';

@Component({
  selector: 'invapp-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;

  get notes() {
    return this.bookingForm.get('notes') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private bookingService: BookingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('roomid')
    this.bookingForm = this.fb.group(
      {
        productId: new FormControl({ value: productId, disabled: true }),
        buyerEmail: new FormControl('', {
          updateOn: 'blur',
          validators: [Validators.required, Validators.email],
        }),
        shippingDate: new FormControl(''),
        bookingStatus: new FormControl(''),
        bookingAmount: new FormControl(''),
        bookingDate: new FormControl(''),
        mobileNumber: new FormControl(''),
        buyerName: new FormControl('', {
          updateOn: 'blur',
          validators: [
            Validators.required,
            Validators.minLength(5),
            CustomValidator.ValidateName,
            CustomValidator.validateSpecialChar('*')
          ],
        }),
        address: this.fb.group({
          addressLine1: new FormControl('', {
            validators: [Validators.required],
          }),
          addressLine2: new FormControl(''),
          city: new FormControl('', { validators: [Validators.required] }),
          state: new FormControl(''),
          country: new FormControl('', { validators: [Validators.required] }),
          zipCode: new FormControl(''),
        }),
        notes: this.fb.array([this.addNoteControl()]),
        tnc: new FormControl(false, { validators: [Validators.requiredTrue] }),
      }
      // { updateOn: 'blur' }
    );
    this.getBookingData();
    // this.bookingForm.valueChanges.subscribe((data) => {
    //   this.bookingService.bookRoom(data).subscribe((data)=>{})
    // });

    this.bookingForm.valueChanges
      .pipe(
        //doesn't care about sequence post the data or susbscribe to stream as data is provided
        // mergeMap((data)=> this.bookingService.bookRoom(data))

        //cancel old request if it recieves new data from the stream
        // switchMap((data)=> this.bookingService.bookRoom(data))

        //cares about the sequence if the previous request is not completed new one will not send
        exhaustMap((data) => this.bookingService.bookRoom(data))
      )
      .subscribe((data) => console.log(data));
  }

  addBooking() {
    console.log(this.bookingForm.getRawValue());

    this.bookingForm.reset({
      productId: '',
      buyerEmail: '',
      shippingDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      buyerName: '',
      address: {
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      },
      notes: [],
      tnc: false,
    });
  }

  addNotes() {
    this.notes.push(this.addNoteControl());
  }

  addIdentityNumber() {
    this.bookingForm.addControl('identityNumber', new FormControl(''));
  }

  deleteIdentityNumber() {
    if (this.bookingForm.get('identityNumber')) {
      this.bookingForm.removeControl('identityNumber');
    }
  }

  removeNote(i: number) {
    this.notes.removeAt(i);
  }

  addNoteControl() {
    return this.fb.group({
      noteDescription: new FormControl('', {
        validators: [Validators.required],
      }),
    });
  }

  getBookingData() {
    this.bookingForm.patchValue({
      buyerEmail: 'noman@gmail.com',
      shippingDate: new Date('10-Feb-2023'),
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      buyerName: 'Noman Ajmal',
      address: {
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      },
      notes: [],
      tnc: false,
    });
  }
}
