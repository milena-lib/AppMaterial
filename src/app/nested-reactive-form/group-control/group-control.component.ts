import {
  Component,
  Input,
  forwardRef,
  Output,
  EventEmitter,
  OnDestroy,
  OnInit,
  ChangeDetectorRef
} from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormArray,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from "@angular/forms";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { ConditionFormComponent } from "../condition-form/condition-form.component";


export interface GroupControlComponentData {
  conjunctor: null;
  conditions: ConditionFormComponent[];
  groups: GroupControlComponentData[];
}

@Component({
  selector: 'app-group-control',
  templateUrl: './group-control.component.html',
  styleUrls: ['./group-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GroupControlComponent),
      multi: true
    }
  ]
})
export class GroupControlComponent implements OnInit, ControlValueAccessor, OnDestroy {

  @Input()
  formLabel: string | number = "Group";

  @Output()
  remove: EventEmitter<void> = new EventEmitter<void>();

  _form: FormGroup;

  private _onChange: (
    value: GroupControlComponentData | null | undefined
  ) => void;

  private _destroy$: Subject<void> = new Subject<void>();

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this._createFormGroup();

    this._setupObservables();
  }

  ngOnDestroy() {
    if (this._destroy$ && !this._destroy$.closed) {
      this._destroy$.next();
      this._destroy$.complete();
    }
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

      if (value.groups.length) {
        this._groupsFormArray.clear();
        value.groups.forEach(g => this._addGroup());
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

  setDisabledState(isDisabled: boolean): void {
    // TODO: implement this method
    // throw new Error('setDisabledState not implemented');
  }

  _deleteCondition(index: number) {
    this._conditionsFormArray.removeAt(index);
  }

  _addCondition() {
    this._conditionsFormArray.push(this._fb.control({ variable: null }));
  }

  _deleteGroupFromArray(index: number) {
    this._groupsFormArray.removeAt(index);
  }

  _addGroup() {
    this._groupsFormArray.push(
      this._fb.control({
        conjunctor: null,
        conditions: [],
        groups: []
      })
    );
  }

  get _conditionsFormArray(): FormArray {
    return this._form.get("conditions") as FormArray;
  }

  get _groupsFormArray(): FormArray {
    return this._form.get("groups") as FormArray;
  }

  private _createFormGroup() {
    this._form = this._fb.group({
      conjunctor: null,
      conditions: this._fb.array([]),
      groups: this._fb.array([])
    });

    // add one condition on the next tick, after the form creation
    setTimeout(() => this._addCondition());
  }

  private _setupObservables() {
    this._form.valueChanges.pipe(takeUntil(this._destroy$)).subscribe(value => {
      if (this._onChange) {
        this._onChange(value);
      }
    });
  }

}
