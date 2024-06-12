import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})

export class ListComponent {
  @Input()
  public listOfCharacter: Character[] = [
    {
      name: 'Yamcha',
      power: 450
    }
  ];

  @Output()
  public onDeleted: EventEmitter<string> = new EventEmitter();

  public onDeleteCharacter(id: string) {
    this.onDeleted.emit(id);
  }

}
