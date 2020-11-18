import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AsynchronousService } from '../../services/asynchronous.service';

import { PageModel } from './page-model';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})

export class PageComponent implements OnInit {
  pageInfoList: PageModel;

  constructor(private asyncHttp: AsynchronousService) { }

  ngOnInit(): void {
    this.getNewQuestion();
  }

  getNewQuestion(): void {
    this.asyncHttp.httpGet('default/FrontEndCodeChallenge').subscribe((response) => {
      if (response) {
        this.pageInfoList = response.sort(function (a, b) { return a.stepNumber - b.stepNumber; });
      }
    });
  }

}
