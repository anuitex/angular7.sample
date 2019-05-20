import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageHelper {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  hasValue(key): boolean {

    if (!isPlatformBrowser(this.platformId)) {
      return false;
    }

    const value = localStorage.getItem(key);

    if (!value) {
      return false;
    }

    return true;
  }

  removeItem(key: string): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    window.localStorage.removeItem(key);
  }

  setItem(key: string, value: string): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    window.localStorage.setItem(key, value);
  }

  getItem(key: string): string {
    if (!isPlatformBrowser(this.platformId)) {
      return undefined;
    }
    
    return window.localStorage.getItem(key);
  }
}
