import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  isResize = false;
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    this.someFunction();
    this.skipToBotHandler();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  
  skipToBotHandler() {
    window.addEventListener('resize', () => {
      setTimeout(() => {
        console.log('hi')
        setTimeout(() => {
          
        }, 100);
      }, 100);
      this.skipLinkFocusHandler();
    });
  }

  skipLinkFocusHandler() {}

  public someFunction(){
    let evt = addEventListener('resize', function(){
      
    })
  }

}
