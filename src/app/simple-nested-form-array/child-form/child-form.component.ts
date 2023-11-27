import { Component, EventEmitter, OnDestroy, OnInit, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormArray, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ConditionFormComponent } from 'src/app/nested-reactive-form/condition-form/condition-form.component';

export interface GroupControlComponentData {
  conjunctor: null;
  conditions: ConditionFormComponent[];
  // groups: GroupControlComponentData[];
}

@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChildFormComponent),
      multi: true
    }
  ]
})
export class ChildFormComponent implements OnInit, ControlValueAccessor, OnDestroy {
  @Output() remove: EventEmitter<void> = new EventEmitter<void>();

  _form: FormGroup;

  private _onChange: (
    value: GroupControlComponentData | null | undefined
  ) => void;


  private _destroy$: Subject<void> = new Subject<void>();
  
  constructor(private _fb: FormBuilder) { }

  // private _onChange: (
  //   value: GroupControlComponentData | null | undefined
  // ) => void;


  get _conditionsFormArray(): FormArray {
    return this._form.get("conditions") as FormArray;
  }

  ngOnInit(): void {
    this._createFormGroup();

    this._setupObservables();
  }

  private _createFormGroup() {
    this._form = this._fb.group({
      conjunctor: null,
      conditions: this._fb.array([])      
    });

    // add one condition on the next tick, after the form creation
    setTimeout(() => this._addCondition());
  }

  
  writeValue(value: GroupControlComponentData | null | undefined): void {
    if (!value) {
      return;
    }
    setTimeout(() => {
      if (value.conditions.length) {
        this._conditionsFormArray.clear();
        value.conditions.forEach(c => this._addCondition());
      }

      this._form.patchValue(value);
    }, 50);
  }

  registerOnChange(
    fn: (value: GroupControlComponentData | null | undefined) => void
  ): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    // TODO: implement this method
    // throw new Error('registerOnTouched not implemented');
  }

  _addCondition() {
    this._conditionsFormArray.push(this._fb.control({ variable: null }));
  }

  _deleteCondition(index: number) {
    this._conditionsFormArray.removeAt(index);
  }

  private _setupObservables() {
    this._form.valueChanges.pipe(takeUntil(this._destroy$)).subscribe(value => {
      if (this._onChange) {
        this._onChange(value);
      }
    });
  }

  ngOnDestroy() {
    if (this._destroy$ && !this._destroy$.closed) {
      this._destroy$.next();
      this._destroy$.complete();
    }
  }

}
