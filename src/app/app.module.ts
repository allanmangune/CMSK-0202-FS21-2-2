import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { PersonComponent } from './components/person/person.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'; // For buttons
import { MatInputModule } from '@angular/material/input'; // For input fields
import { MatSelectModule } from '@angular/material/select';
import { PhoneFormatPipe } from '../app/pipes/ phone-format.pipe'; 

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PhoneFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
