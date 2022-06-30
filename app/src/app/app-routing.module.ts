import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackComponent } from './back/back.component';
import { ChrismomchrischildComponent } from './chrismomchrischild/chrismomchrischild.component';


const routes: Routes = [{ path: 'chrismomchrischild', component:ChrismomchrischildComponent },
{path:'back',component:BackComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
