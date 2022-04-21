
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentComponent } from './components/content/content.component';
import { MoreInfoComponent } from './components/more-info/more-info.component';
import { CompanyInfoComponent } from './components/company-info/company-info.component';

const routes: Routes = [
  {path: '', component: ContentComponent},
  {path: 'more-info', component: MoreInfoComponent},
  {path: 'company-info', component: CompanyInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
