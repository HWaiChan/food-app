import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-save-as-txt',
  templateUrl: './save-as-txt.component.html',
  styleUrls: ['./save-as-txt.component.css'],
})
export class SaveAsTxtComponent implements OnInit {
  FILE_NAME: string = 'groceries-list';
  constructor() {}

  ngOnInit(): void {}

  @Input() fileContent: string = '';

  saveAsProject() {
    this.writeContents(this.fileContent, this.FILE_NAME + '.txt', 'text/plain');
  }
  writeContents(content: string, fileName: string, contentType: string) {
    var a = document.createElement('a');
    var file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }
}
