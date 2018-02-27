import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    this.browserUpdate();
  }

  browserUpdate() {
    const $buoop = {notify: { e: 14, f: -4, o: -4, s: -2, c: -4} , insecure: true, unsupported: true, api: 5};
    function $buo_f() {
      const e = document.createElement('script');
    e.src = '//browser-update.org/update.min.js';
    document.body.appendChild(e);
    }
    try {
      document.addEventListener('DOMContentLoaded', $buo_f, false);
    } catch (e) {
      (<any>window).attachEvent('onload', $buo_f);
    }
  }
}
