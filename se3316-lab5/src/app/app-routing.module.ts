import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackendComponent } from './backend/backend.component';
import { FrontendComponent } from './frontend/frontend.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [
    { path: '', component: LoginpageComponent },
    { path: 'schedules', component: BackendComponent },
    { path: 'members', component: FrontendComponent },
    { path: 'privacyPolicy', component: PrivacyPolicyComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }