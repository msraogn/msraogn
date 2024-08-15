import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-designview',
  templateUrl: './designview.component.html',
  styleUrls: ['./designview.component.less']
})
export class DesignviewComponent implements OnInit {
  myParam: any;

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
      this.route.params.subscribe((params: Params) => 
        this.myParam = params['p1']
      );
  }

}
