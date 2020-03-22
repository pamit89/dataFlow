import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { InflowFormComponent } from './inflow-form/inflow-form.component';
import { OutflowFormComponent } from './outflow-form/outflow-form.component';
import { BacklogFormComponent } from './backlog-form/backlog-form.component';

const routes: Routes = [
    { path: 'inflow', component: InflowFormComponent },
    { path: 'outflow', component: OutflowFormComponent },
    { path: 'backlog', component: BacklogFormComponent },
    { path: '**', redirectTo: 'inflow' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }