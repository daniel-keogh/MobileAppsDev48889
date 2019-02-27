import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'HttpObsApp';
  students: any = [];
  weather: any = [];
  main: any = [];
  name: any = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.GetStudentData().subscribe((data)=>{
      this.students = data.students;
    });

    this.dataService.GetWeatherData().subscribe((data)=>{
      this.weather = data.weather;
      this.main = data.main;
      this.name = data.name;
    });
  }
}