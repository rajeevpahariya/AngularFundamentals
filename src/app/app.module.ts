import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {WelcomeComponent} from './welcome/welcome.component';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { UserComponent } from './user/user.component'
import {FormsModule} from '@angular/forms';
import { MyPipe } from './my.pipe';
import { ReverseStringPipe } from './reverse-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductComponent,
    CustomerComponent,
    UserComponent,
    MyPipe,
    ReverseStringPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // need for 2 way binding
  ],
  providers: [],
  // Added user component in bootstrap to load with index.html file.
  bootstrap: [AppComponent,UserComponent]
})
export class AppModule { }
