import { Component } from '@angular/core';
import { TuyaService } from '../../services/tuya.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {


  constructor(private tuyaService: TuyaService){

  }

  magic(){
    let deviceId = "eb467815d13c4bbd81kgmg"
    this.tuyaService.controlDevice(deviceId, 'switch_led', true);
  }
}
