import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnDestroy {
  loadingInterval: any;
  loading: string = '';

  constructor() {
    this.loadingInterval = setInterval(() => {
      if (this.loading.length > 3) {
        this.loading = '';
      } else {
        this.loading += '.';
      }
    }, 200);
  }

  ngOnDestroy() {
    clearInterval(this.loadingInterval);
  }
}
