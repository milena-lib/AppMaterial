import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactsComponent } from './contacts/contacts.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { SignatureComponent } from './signature/signature.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { OverlayContainer, OverlayModule } from '@angular/cdk/overlay';
import { CdkTreeModule } from '@angular/cdk/tree';
import { PortalModule } from '@angular/cdk/portal';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { MatBadgeModule } from '@angular/material/badge';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { GridComponent } from './grid/grid.component';
// import { ProductListModule } from '@bit/milena-lib.angular-tutorial.product-list';
import { SwapComponent } from './swap/swap/swap.component';
import { DeliveryComponent } from './swap/delivery/delivery.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayComponent } from './swap/overlay/overlay.component';

import { ClickOutsideModule } from 'ng-click-outside';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { PopupFormComponent } from './popup-form/popup-form.component';

// import { MyLibModule } from 'node_modules/milena-lib';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipDirective } from './tooltip/tooltip.directive';
import { CustomDataGridComponent } from './grid/custom-data-grid/custom-data-grid.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsValidationComponent } from './reactive-forms-validation/reactive-forms-validation.component';
import { FormItemComponent } from './reactive-forms-validation/form-item/form-item.component';
import { MultiselectComponent } from './multiselect/multiselect.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { DragAndDropDirective } from './drag-and-drop/drag-and-drop.directive';
import { DragAndDrop1Component } from './drag-and-drop1/drag-and-drop1.component';
import { DragAndDrop2Component } from './drag-and-drop2/drag-and-drop2.component';
import { ArraySortPipe, ArrayFilterPipe  } from './drag-and-drop2/array.pipe';
import { DragDropDualListComponent } from './drag-and-drop2/drag-drop-dual-list/drag-drop-dual-list.component';
import { HighlightDirective } from './directives/highlight.directive';

const modules = [
  ReactiveFormsModule,
  CdkTreeModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatButtonToggleModule,
  MatTreeModule,
  OverlayModule,
  PortalModule,
  MatBadgeModule,
  MatGridListModule,
  MatRadioModule,
  MatDatepickerModule,
  MatTooltipModule,
  FlexLayoutModule,
  DragDropModule,
];

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HomeComponent,
    CardsComponent,
    SignatureComponent,
    GridComponent,
    SwapComponent,
    DeliveryComponent,
    OverlayComponent,
    ClickOutsideDirective,
    PopupFormComponent,
    TooltipComponent,
    TooltipDirective,
    CustomDataGridComponent,
    SwitchMapComponent,
    ReactiveFormsValidationComponent,
    FormItemComponent,
    MultiselectComponent,
    DragAndDropComponent,
    DragAndDropDirective,
    DragAndDrop1Component,
    DragAndDrop2Component,
    ArraySortPipe, 
    ArrayFilterPipe, DragDropDualListComponent, HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // ProductListModule,
    FormsModule,
    ClickOutsideModule,
    // MyLibModule,
    HttpClientModule,
    modules
  ],
  exports: [
    BrowserAnimationsModule,
    SwitchMapComponent,
    
    modules
  ],
  providers: [{provide: OverlayContainer}],
  bootstrap: [AppComponent]
  // schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
