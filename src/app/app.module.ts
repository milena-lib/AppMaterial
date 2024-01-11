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
import { MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
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
import { CarouselComponent } from './carousel/carousel.component';
import { GridChildComponent } from './grid/grid-child/grid-child.component';
import { GridParentComponent } from './grid/grid-parent/grid-parent.component';
import { ChildDetailsComponent } from './grid/child-details/child-details.component';
import { SumPipe } from './grid/custom-data-grid/sum.pipe';
import { ExpanderComponent } from './expander-page/expander/expander.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { ScrollComponent } from './scroll/scroll.component';
import { ExpanderPageComponent } from './expander-page/expander-page.component';
import { FormArrayValidationComponent } from './form-array-validation/form-array-validation.component';
import { NestedReactiveFormComponent } from './nested-reactive-form/nested-reactive-form.component';
import { GroupControlComponent } from './nested-reactive-form/group-control/group-control.component';
import { ConditionFormComponent } from './nested-reactive-form/condition-form/condition-form.component';
import { ActionButtonsBarComponent } from './nested-reactive-form/action-buttons-bar/action-buttons-bar.component';
import { SimpleNestedFormArrayComponent } from './simple-nested-form-array/simple-nested-form-array.component';
import { ChildFormComponent } from './simple-nested-form-array/child-form/child-form.component';
import { CheckboxesFormArrayComponent } from './checkboxes-form-array/checkboxes-form-array.component';
import { TestComponent } from './checkboxes-form-array/test/test.component';
import { SearchDebounceComponent } from './search-debounce/search-debounce.component';
import { ListViewerComponent } from './list-viewer/list-viewer.component';
import { SearchDebounceTimeComponent } from './search-debounce-time/search-debounce-time.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { SingleFileUploadComponent } from './file-upload/single-file-upload/single-file-upload.component';
import { MultipleFileUploadComponent } from './file-upload/multiple-file-upload/multiple-file-upload.component';
import { UpdateNestedFormComponent } from './update-nested-form/update-nested-form.component';
import { MainFormComponent } from './update-nested-form/main-form/main-form.component';

const modules = [
  FormsModule,
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

// const EXPANSION_PANEL_ANIMATION_TIMING = '10000ms cubic-bezier(0.4,0.0,0.2,1)';
// MatExpansionPanel['decorators'][0].args[0].animations = [
//   trigger('bodyExpansion', [
//     state('collapsed, void', style({ height: '0px', visibility: 'hidden' })),
//     state('expanded', style({ height: '*', visibility: 'visible' })),
//     transition('expanded <=> collapsed, void => collapsed',
//       animate(EXPANSION_PANEL_ANIMATION_TIMING)),
//   ])];
 
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
    ArrayFilterPipe, 
    DragDropDualListComponent, 
    HighlightDirective, 
    CarouselComponent, 
    GridChildComponent, 
    GridParentComponent, 
    ChildDetailsComponent, 
    SumPipe, 
    ExpanderComponent, 
    ListViewerComponent,
    ScrollToTopComponent, 
    ScrollComponent, 
    ExpanderPageComponent, 
    FormArrayValidationComponent, 
    NestedReactiveFormComponent, 
    GroupControlComponent, 
    ConditionFormComponent, 
    ActionButtonsBarComponent, 
    SimpleNestedFormArrayComponent, 
    ChildFormComponent, 
    CheckboxesFormArrayComponent, 
    TestComponent, 
    SearchDebounceComponent, 
    SearchDebounceTimeComponent, 
    FileUploadComponent, 
    SingleFileUploadComponent, 
    MultipleFileUploadComponent, 
    UpdateNestedFormComponent, 
    MainFormComponent 
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
    SumPipe,
    modules
  ],
  providers: [{provide: OverlayContainer}],
  bootstrap: [AppComponent]
  // schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
