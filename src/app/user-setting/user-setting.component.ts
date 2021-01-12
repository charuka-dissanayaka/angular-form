import { Component, OnInit } from '@angular/core';
import { UserSettings } from 'src/app/user-setting/user-setting';

@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: ['./user-setting.component.css']
})
export class UserSettingComponent implements OnInit {

  userSettings:UserSettings= {
    name:'charuka',
    emailoffers:true,
    interfaceStyle:'dark',
    notes:'here this subsciption....'
  }

  constructor() { }

  ngOnInit() {
  }

}
