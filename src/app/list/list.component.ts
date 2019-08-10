import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData();
  }

  data: any = [];
  getData() {
    this.http.get('https://reqres.in/api/users?page=2').subscribe((response: any) => {
      this.data = response.data;
      console.log(this.data);
    });
  }

  dem(dat) {
    if (dat.target.value == "") {
      this.getData();
      return;
    }
    else {
      let data = this.data;
      this.data = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].first_name.trim().toLowerCase().indexOf(dat.target.value.trim().toLowerCase()) > -1)
          this.data.push(data[i]);
      }
    }


  }
  searchname: any;
  edit(id) {
    console.log(id);
  }

  delete(k) {

    this.http.delete('https://reqres.in/api/users/2', k).subscribe((response: any) => {
      console.log("deleted", response);
    });
  }

}
