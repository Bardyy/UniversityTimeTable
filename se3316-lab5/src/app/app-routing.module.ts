import { Routes, RouterModule } from '@angular/router';
import { BackendComponent } from './backend/backend.component';
import { FrontendComponent } from './frontend/frontend.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

const routes: Routes = [
    { path: '', component: LoginpageComponent },
    { path: 'schedules', component: BackendComponent },
    { path: 'members', component: FrontendComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }