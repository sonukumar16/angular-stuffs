import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http"
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassBindingComponent } from './components/class-binding/class-binding.component';
import { StyleBindingComponent } from './components/style-binding/style-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { TemplateReferenceVariablesComponent } from './components/template-reference-variables/template-reference-variables.component';
import { NgIfDirectiveComponent } from './components/ng-if-directive/ng-if-directive.component';
import { NgSwitchDirectiveComponent } from './components/ng-switch-directive/ng-switch-directive.component';
import { NgForDirectiveComponent } from './components/ng-for-directive/ng-for-directive.component';
import { ParentComponent } from './components/ComponentInteraction/parent/parent.component';
import { ChildComponent } from './components/ComponentInteraction/child/child.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { EmployeeListComponent } from './components/serviceExample/employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TemplateReferenceVariablesComponent,
    NgIfDirectiveComponent,
    NgSwitchDirectiveComponent,
    NgForDirectiveComponent,
    ParentComponent,
    ChildComponent,
    PipesComponent,
    EmployeeListComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

19.95 