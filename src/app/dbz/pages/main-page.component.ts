import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.services';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class DbzMainPageComponent {
  constructor(private dbzService: DbzService) { }

  get characters(): Character[]{
    return [...this.dbzService.mainCharacters];
  }

  public onDeleteCharacter(id: string):void {
    this.dbzService.deleteCharacterById(id);
  }

  public onNewCharacter(objCharacter: Character):void{
    this.dbzService.addCharacter(objCharacter);
  }
}
