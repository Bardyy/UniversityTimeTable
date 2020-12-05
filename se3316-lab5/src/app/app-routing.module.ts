import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AUPComponent } from './aup/aup.component';
import { BackendComponent } from './backend/backend.component';
import { FrontendComponent } from './frontend/frontend.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [
    { path: '', component: LoginpageComponent },
    { path: 'schedules', component: BackendComponent },
    { path: 'members', component: FrontendComponent },
    { path: 'privacyPolicy', component: PrivacyPolicyComponent },
    { path: 'AUP', component: AUPComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }