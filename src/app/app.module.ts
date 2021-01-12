import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { UserSettingComponent } from './user-setting/user-setting.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSettingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
