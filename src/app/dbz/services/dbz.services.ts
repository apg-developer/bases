import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid'

@Injectable({ providedIn: 'root' })
export class DbzService {
  constructor() { }

  public mainCharacters: Character[] =[
    {
      id: uuid(),
      name: 'Piccolo',
      power: 1500
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 1200,
    }
  ];

  public addCharacter(objCharacter: Character): void{
    const newCharacter = {id: uuid(), ...objCharacter};
    this.mainCharacters.push(newCharacter);
    console.log(this.mainCharacters);
  }

  public deleteCharacterById(id: string):void{
    //this.mainCharacters.splice(index, 1);
    this.mainCharacters = this.mainCharacters.filter(character=> character.id !== id);
  }
}
