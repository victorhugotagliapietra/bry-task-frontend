import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },  // Redireciona a rota raiz para '/users'
  { path: 'users', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },  // Lazy loading para o módulo UserModule
  { path: '**', redirectTo: '/users' }  // Rota de fallback para '/users'
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
