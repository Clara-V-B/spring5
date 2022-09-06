import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//COMPONENTES
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';//componente que tiene angular para la comunicacion con el servidor remoto
import { FormComponent } from './clientes/form/form.component';
import { FormsModule } from '@angular/forms';

//SERVICIOS
import { ClienteService } from './clientes/cliente.service';

//RUTAS
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {path: '', redirectTo: '/clientes', pathMatch: 'full'},
  {path: 'directivas', component: DirectivaComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'clientes/form', component: FormComponent},
  {path: 'clientes/form/:id', component: FormComponent}
];

//permite que en la clase service conectarme con el servidor
import { HttpClientModule } from '@angular/common/http';
//a traves de peticiones http


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
