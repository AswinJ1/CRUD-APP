import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  Employee: any = [];

  constructor(private apiService: ApiService, private _snackBar: MatSnackBar) {
    this.readEmployee();
  }

  ngOnInit() {}

  readEmployee() {
    this.apiService.getEmployees().subscribe((data) => {
      this.Employee = data;
    });
  }

  openSnackBar(message: string): void {
    this._snackBar.open(message, 'Close', {
      duration: 2000,
    });
  }

  removeEmployee(employee, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deleteEmployee(employee._id).subscribe((data) => {
        this.Employee.splice(index, 1);
        this.openSnackBar('Employee Deleted Successfully');
      });
    }
  }
}
