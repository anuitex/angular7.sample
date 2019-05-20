import { Injectable, OnInit } from '@angular/core';
import { IHttpConnectionOptions, HttpTransportType, HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class HubHelper {

  private hubName: string;

  getHubConnection(hubName: string): HubConnection {
    const hubConnection = new HubConnectionBuilder()
      .withUrl(`${environment.domain}/${hubName}`)
      .build();

    this.hubName = hubName;

    return hubConnection;
  }

  startHubConnection(hubConnection: HubConnection) {
    hubConnection
      .start()
      .then(() => console.log(`${this.hubName} hub connection established`))
      .catch(err => console.log(`Error while establishing ${this.hubName} hub connection.\n${err}`));
  }

  sendMessage(hubConnection: HubConnection, methodName: string, ...args: any[]) {



    hubConnection
      .invoke(methodName, ...args)
      .then()
      .catch(err => `Error while invoking ${methodName} method on ${this.hubName} hub connection.\n${err}`);
  }
}
