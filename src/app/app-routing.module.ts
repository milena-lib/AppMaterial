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
import { CarouselComponent } from './carousel/carousel.component';
import { GridParentComponent } from './grid/grid-parent/grid-parent.component';
import { ExpanderPageComponent } from './expander-page/expander-page.component';
import { FormArrayValidationComponent } from './form-array-validation/form-array-validation.component';
import { NestedReactiveFormComponent } from './nested-reactive-form/nested-reactive-form.component';
import { SimpleNestedFormArrayComponent } from './simple-nested-form-array/simple-nested-form-array.component';
import { CheckboxesFormArrayComponent } from './checkboxes-form-array/checkboxes-form-array.component';
import { SearchDebounceComponent } from './search-debounce/search-debounce.component';
import { SearchDebounceTimeComponent } from './search-debounce-time/search-debounce-time.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { UpdateNestedFormComponent } from './update-nested-form/update-nested-form.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contacts', component: ContactsComponent, canActivate: [CardsGuard]},
  {path: 'cards', component: CardsComponent, canActivate: [CardsGuard]},
  {path: 'grid', component: GridComponent, canActivate: [CardsGuard]},
  {path: 'expand-grid', component: GridParentComponent},
  {path: 'signature', component: SignatureComponent, canActivate: [CardsGuard]},
  {path: 'swap', component: SwapComponent},
  {path: 'switch-map', component: SwitchMapComponent},
  {path: 'form-valid', component: ReactiveFormsValidationComponent},
  {path: 'multiselect', component: MultiselectComponent},
  {path: 'drag-and-drop', component: DragAndDropComponent},
  {path: 'drag-and-drop1', component: DragAndDrop1Component},
  {path: 'drag-drop-dual-list', component: DragDropDualListComponent},
  {path: 'carousel', component: CarouselComponent},
  {path: 'expander', component: ExpanderPageComponent},
  {path: 'form-array', component: FormArrayValidationComponent},
  {path: 'nested-reactive-form', component: NestedReactiveFormComponent},
  {path: 'simple-nested-form-array', component: SimpleNestedFormArrayComponent},
  {path: 'checkboxes-form-array', component: CheckboxesFormArrayComponent},
  {path: 'search-debounce', component: SearchDebounceComponent},
  {path: 'search-debounce-time', component: SearchDebounceTimeComponent},
  {path: 'file-upload', component: FileUploadComponent},
  {path: 'update-nested-form', component: UpdateNestedFormComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CardsGuard]
})
export class AppRoutingModule { }
