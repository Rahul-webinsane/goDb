import { Component, OnInit } from '@angular/core';
import { DatasServiceService } from '../datas-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: any;
  constructor(private loginService: DatasServiceService) { }

  ngOnInit(): void {

    this.loginService.getJsonSampleDatas().subscribe((data) => {
      this.userList = data;
      console.log("Login collection", this.userList);
    });
  }

}
