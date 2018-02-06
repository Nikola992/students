import { Injectable } from '@angular/core';

@Injectable()
export class MesaageService {

  messages: string[] = [];
  addNewMessage(newMessage: string){
  this.messages.push(newMessage);
  }

  clearMesssages(){
    this.messages = [];
  }

  constructor() { }

}
