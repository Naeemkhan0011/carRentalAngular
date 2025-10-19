import { Component, inject, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking-service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-bookings',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './bookings.html',
  styleUrl: './bookings.css'
})
export class Bookings implements OnInit {

  bookings = inject(BookingService);
  carList: any[] = [];
  bookingList: any[] = [];

  bookingForm: FormGroup = new FormGroup({
    customerName: new FormControl(""),
    customerCity: new FormControl(""),
    mobileNo: new FormControl(""),
    email: new FormControl(""),
    bookingId: new FormControl(""),
    carId: new FormControl(""),
    bookingDate: new FormControl(""),
    discount: new FormControl(""),
    totalBillAmount: new FormControl(""),


  })

  ngOnInit(): void {
    this.getCartList();
    this.getBookings();
  }

  getCartList() {
    this.bookings.getAllCars().subscribe((res: any) => {
      this.carList = res.data
    })
  }

  getBookings() {
    this.bookings.getAllBooking().subscribe((res: any) => {
      this.bookingList = res.data
    })
  }

  onSave()  {
    const formValue = this.bookingForm.value
    this.bookings.createBooking(formValue).subscribe((res:any) => {
      if(res.Result){
        alert('booking save successfully')
      }else{
        alert(res?.message)
      }
    })
  }

}
