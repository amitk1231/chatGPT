import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
export class Message{
  constructor(public author: string, public content: string){}
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }
  conversation = new Subject<Message[]>();
  messageMap: any = {
    "Hi": "Hello",
    "Hello": "Hi, How can I help you?",
    "Who are you?": "I'm chat bot",
    "What's your name?": "My name is AI Bot",
    "What is Angular": "Angular is a frontend type-script framework",
    "What is Angular?": "Angular is a frontend type-script framework",
    "default": "I couldn't get it. Can you plz elaborate?"
  }
  getBotAnswer(msg: any){
    const userMessage = new Message('user', msg);
    this.conversation.next([userMessage]);
    const botMsg = new Message('bot', this.getBotMessage(msg));
    setTimeout(() => {
      this.conversation.next([botMsg]);
    }, 1000)
  }

  getBotMessage(question: string) {
      let answer = this.messageMap[question];
      return answer || this.messageMap['default'];
  }
   
   
}
