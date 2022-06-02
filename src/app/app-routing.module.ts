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
import { MultiselectComponent } from './multiselect/multiselect.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { DragAndDrop1Component } from './drag-and-drop1/drag-and-drop1.component';
import { DragDropDualListComponent } from './drag-and-drop2/drag-drop-dual-list/drag-drop-dual-list.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contacts', component: ContactsComponent, canActivate: [CardsGuard]},
  {path: 'cards', component: CardsComponent, canActivate: [CardsGuard]},
  {path: 'grid', component: GridComponent, canActivate: [CardsGuard]},
  {path: 'signature', component: SignatureComponent, canActivate: [CardsGuard]},
  {path: 'swap', component: SwapComponent},
  {path: 'switch-map', component: SwitchMapComponent},
  {path: 'form-valid', component: ReactiveFormsValidationComponent},
  {path: 'multiselect', component: MultiselectComponent},
  {path: 'drag-and-drop', component: DragAndDropComponent},
  {path: 'drag-and-drop1', component: DragAndDrop1Component},
  {path: 'drag-drop-dual-list', component: DragDropDualListComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CardsGuard]
})
export class AppRoutingModule { }
