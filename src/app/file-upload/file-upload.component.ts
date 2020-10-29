import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  result: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  save(event: any){
    // tslint:disable-next-line:prefer-const
    let selectedFile = event.target.files[0];
    this.result = 'File Name: ' + selectedFile.name;
    this.result += '<br>File size (byte): ' + selectedFile.size;
    this.result += '<br>File Type: ' + selectedFile.type;
  }

}
