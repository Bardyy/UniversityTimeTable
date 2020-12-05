import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AUPComponent } from './aup/aup.component';
import { BackendComponent } from './backend/backend.component';
import { DMCAComponent } from './dmca/dmca.component';
import { FrontendComponent } from './frontend/frontend.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [
    { path: '', component: LoginpageComponent },
    { path: 'schedules', component: BackendComponent },
    { path: 'members', component: FrontendComponent },
    { path: 'privacyPolicy', component: PrivacyPolicyComponent },
    { path: 'AUP', component: AUPComponent },
    { path: 'DMCA', component: DMCAComponent },
    { path: 'admin', component: AdminComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }