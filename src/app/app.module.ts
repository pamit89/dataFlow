import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { InflowFormComponent } from './inflow-form/inflow-form.component';
import { OutflowFormComponent } from './outflow-form/outflow-form.component';
import { BacklogFormComponent } from './backlog-form/backlog-form.component';
import { AppRoutingModule } from './app-routing.module';
import { HighlightDirective } from './shared/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    InflowFormComponent,
    OutflowFormComponent,
    BacklogFormComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
