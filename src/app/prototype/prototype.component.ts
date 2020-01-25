import { Component, OnInit } from "@angular/core";
import { concat } from 'rxjs';

@Component({
  selector: "app-prototype",
  templateUrl: "./prototype.component.html",
  styleUrls: ["./prototype.component.css"]
})
export class PrototypeComponent implements OnInit {
  public myString: string = "A Simple String";
  public columns: number[] = [0, 1, 2, 3, 4];
  public rows: number[] = [0, 1, 2, 3, 4, 5, 6];

  constructor() {}

  ngOnInit() {}

  onChange(passedText: string) {
    this.myString += passedText;
  }
}
