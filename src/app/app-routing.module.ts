import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { CardsGuard } from './cards/cards.guard';
import { ContactsComponent } from './contacts/contacts.component';
import { GridComponent } from './grid/grid.component';
import { HomeComponent } from './home/home.component';
import { SignatureComponent } from './signature/signature.component';
import { SwapComponent } from './swap/swap/swap.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { ReactiveFormsValidationComponent } from './reactive-forms-validation/reactive-forms-validation.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contacts', component: ContactsComponent, canActivate: [CardsGuard]},
  {path: 'cards', component: CardsComponent, canActivate: [CardsGuard]},
  {path: 'grid', component: GridComponent, canActivate: [CardsGuard]},
  {path: 'signature', component: SignatureComponent, canActivate: [CardsGuard]},
  {path: 'swap', component: SwapComponent},
  {path: 'switch-map', component: SwitchMapComponent},
  {path: 'form-valid', component: ReactiveFormsValidationComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CardsGuard]
})
export class AppRoutingModule { }
