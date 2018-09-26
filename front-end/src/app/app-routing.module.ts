import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { ManageComponent } from './portfolio/manage/manage.component';
import { PerformanceComponent } from './portfolio/performance/performance.component';

const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'manage', component: ManageComponent },
    { path: 'performance', component: PerformanceComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
