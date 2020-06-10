import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateMatchComponent } from './create-match/create-match.component';
import { AuthGuard } from '../user/auth.guard';

const routes: Routes = [
    { path: ':id', component: CreateMatchComponent, data: { type: "league" } },
    { path: 'new', component: CreateMatchComponent, data: { type: "league" } }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MatchRoutingModule { }
