import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { AdminusersComponent } from './adminusers/adminusers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MandevicesComponent } from './mandevices/mandevices.component';
import { MondevicesComponent } from './mondevices/mondevices.component';
import { ModdevicesComponent } from './moddevices/moddevices.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashComponent,
    RegisterComponent,
    AdminusersComponent,
    MandevicesComponent,
    MondevicesComponent,
    ModdevicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService,AuthGuard,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
