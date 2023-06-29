import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalR';

@Injectable({
  providedIn: 'root',
})
export class SignalRService {
  private hubConnection: HubConnection;
  constructor() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl('http://localhost:5110/decisionHub')
      .build();
    this.hubConnection
      .start()
      .then(() => console.log('SignalR connection started'))
      .catch((error) =>
        console.error('Error starting SignalR connection: ', error)
      );
  }

  sendMessage1(message: string): void {
    this.hubConnection
      .send('SendMessage', message)
      .then(result => {
        console.log(result)
      })
      .catch((error) => console.error('Error sending message: ', error));
  }
}
