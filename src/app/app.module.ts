import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http'; 

import { AppRoutingModule,routingComponets } from './app-routing.module';
import { AppComponent } from './app.component';
import{ EmplyoeeDashboardModule } from './Modules/emplyoee-dashboard.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmpRegistrationComponent } from './emp-registration/emp-registration.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TokenInterceptorService } from './token-interceptor.service';






@NgModule({
  declarations: [
    AppComponent,
    routingComponets,
    HeaderComponent,
    FooterComponent,
    EmpRegistrationComponent,
    LoginComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmplyoeeDashboardModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
  
    
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
