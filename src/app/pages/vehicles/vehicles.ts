import { Component, inject } from '@angular/core';
import { APIResponse, carModel } from '../../model/car';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { iterator } from 'rxjs/internal/symbol/iterator';

@Component({
  selector: 'app-vehicles',
  imports: [FormsModule],
  templateUrl: './vehicles.html',
  styleUrl: './vehicles.css'
})
export class Vehicles {
  newCarObj: carModel;

  constructor() {
    this.newCarObj = new carModel();
  }

  http = inject(HttpClient)
  carList: carModel[] = [];

  ngOnInit(): void {
    this.getAllCar()
  }


  onSaveCar() {
    this.http.post<APIResponse>(`https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCar`, this.newCarObj).subscribe((res: APIResponse) => {
      if (res.result) {
        alert('Vehicle created successfully')
      } else (
        alert(res.message)
      )
    })

  }

  onUpdateCar() {
    this.http.post<APIResponse>(`https://freeapi.miniprojectideas.com/api/CarRentalApp/UpdateCar`, this.newCarObj).subscribe((res: APIResponse) => {
      if (res?.result) {
        this.getAllCar()
        alert('Vehical Update Success')
      } else {
        alert(res?.message)
      }
    })
  }

  getAllCar() {
    this.http.get<APIResponse>(`https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars`).subscribe((res: APIResponse) => {
      if (res.result) {
        this.carList = res.data;
        console.log('car list', res.data);
      } else {
        alert(res.message)
      }
    })
  }

  onDelete(data: carModel) {
    this.http.delete<APIResponse>(`https://freeapi.miniprojectideas.com/api/CarRentalApp/DeleteCarbyCarId?carid=${data?.carId}`).subscribe((res: APIResponse) => {
      if (res?.result) {
        this.getAllCar()
        alert('Deleted Successfully')
      } else {
        alert(res?.message)
      }
    })
  }


  onClearData() {
  this.newCarObj = {
    carId: 0,
    brand: '',
    model: '',
    year: 0,
    color: '',
    dailyRate: 0,
    carImage: '',
    regNo: ''
  };
}



  onEdit(data: carModel) {
    this.newCarObj = data
  }

}
