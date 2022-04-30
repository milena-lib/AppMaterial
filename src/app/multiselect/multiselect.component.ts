import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss']
})
export class MultiselectComponent implements OnInit {
  areaControl = new FormControl();
  areaGroups: AreaGroup[] = [
    {
      name: 'צפון',
      disabled: false,
      cities: [
        {value: 'Haifa', viewValue: 'חיפה', checked: false},
        {value: 'Karmiel', viewValue: 'כרמיאל', checked: false},
        {value: 'Nazaret', viewValue: 'נצרת', checked: false},
      ],
      completed: false
    },
    {
      name: 'מרכז',
      disabled: false,
      cities: [
        {value: 'Tel Aviv', viewValue: 'תל אביב', checked: false},
        {value: 'Ramat Gan', viewValue: 'רמת גן', checked: false},
        {value: 'Petah Tikva', viewValue: 'פתח תקווה', checked: false},
      ],
      completed: false
    },
    {
      name: 'שפלה',
      disabled: true,
      cities: [
        {value: 'Ashdod', viewValue: 'אשדוד', checked: false},
        {value: 'Lod', viewValue: 'לוד', checked: false},
        {value: 'Yavne', viewValue: 'יבנה', checked: false},
      ],
      completed: false
    },
    {
      name: 'דרום',
      disabled: false,
      cities: [
        {value: 'Beer Sheva', viewValue: 'באר שבע', checked: false},
        {value: 'Eilat', viewValue: 'אילת', checked: false},
      ],
      completed: false
    },
  ];
  
  selectedValues = [];

  constructor() { }

  ngOnInit(): void {
    
  }

  someComplete(group: AreaGroup): boolean {
    if (group.cities == null) {
      return false;
    }

    return group.cities.filter(t => t.checked).length > 0 && !group.completed;
  }

  setAll(completed: boolean, group: AreaGroup) {
    group.completed = completed;
    if (group.cities == null) {
      return;
    }
    
    group.cities.forEach(t => {
      t.checked = completed;
    });
    
    const selecteds = this.updateSelected();
    this.selectedValues = selecteds.reduce(function(a, b){ return a.concat(b); }, []);

    // console.log("selectedAllValues: ", this.selectedValues);
    
    this.areaControl.setValue(this.selectedValues);
  }

  setSelected(sel: boolean, group: AreaGroup, index: number) {
    group.cities[index].checked = sel;

    group.completed = sel ? (group.cities.filter(x => x.checked)?.length === group.cities.length ? true : false) : false;
    
    const selecteds = this.updateSelected();
    this.selectedValues = selecteds.reduce(function(a, b){ return a.concat(b); }, []);

    // console.log("selectedValues: ", this.selectedValues);
  }

  updateSelected(): any[] {
    let temp=[];
    let gr;
    this.areaGroups.forEach(itemGroup => {
      if(itemGroup.cities.filter(x => x.checked)?.length) {
        gr = itemGroup.cities.filter(x => x.checked).map(y => y.value);   
        temp.push(gr); 
      }
    });

    return temp;
  }

  getSelections() {
    console.log("areaGroups: ", this.areaGroups);
  }
}

interface City {
  value: string;
  viewValue: string;
  checked: boolean;
}

interface AreaGroup {
  disabled?: boolean;
  name: string;
  cities: City[];
  completed: boolean
}