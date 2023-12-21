import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IgvComponent } from './igv/igv.component';

const routes: Routes = [
    {
        path: '', component: IgvComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
