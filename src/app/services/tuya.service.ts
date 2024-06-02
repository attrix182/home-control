import { Injectable } from '@angular/core';
import axios from 'axios';
import * as CryptoJS from 'crypto-js';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TuyaService {
  private accessToken!: string;
  urlTuya = "https://openapi.tuya.io/v1.0/devices/"; 

  constructor(private httpClient: HttpClient) {
    this.getDevices();
  }



  async controlDevice(deviceId: string, command: string, value: boolean) {

  }

  getDevices(){
    this.httpClient.get(this.urlTuya).subscribe(data => {
      console.log(data);
    });
  }
}