import { Component, OnInit } from '@angular/core';
import { HubConnection } from '@aspnet/signalr';
import { ToastrService } from 'ngx-toastr';
import { HubHelper } from '../helpers/HubHelper';
import { MediaHelper } from '../helpers/MediaHelper';

@Component({
  selector: 'app-account-dashboard',
  templateUrl: './account-dashboard.component.html',
  styleUrls: ['./account-dashboard.component.css']
})
export class AccountDashboardComponent implements OnInit {

  private hubConnection: HubConnection;

  fileName: string;
  progress: number;
  isVisible: boolean;

  constructor(private toastrService: ToastrService, private hubHelper: HubHelper, private mediaHelper: MediaHelper) { }

  ngOnInit() {
    this.hubConnection = this.hubHelper.getHubConnection('file-transfer');

    this.hubHelper.startHubConnection(this.hubConnection);

    this.hubConnection.on('file-transfer-progress', (fileName: string, progress: number) => {
      this.fileName = fileName;
      this.progress = progress;

      if (progress >= 98) {
        this.resetProgress();
      }
    });
  }

  public processFile(imageInput: any) {
    this.resetProgress();

    this.mediaHelper.processFile(imageInput, (fileName, chunk, contentLength) => {
      this.hubHelper.sendMessage(this.hubConnection, 'ReceiveFileChunk', 'username1', fileName, chunk, contentLength);
    });
  }

  resetProgress() {
    this.progress = 0;
    this.fileName = '';
  }
}
