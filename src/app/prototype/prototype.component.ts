import { Component, OnInit } from "@angular/core";
import { concat } from "rxjs";

@Component({
  selector: "app-prototype",
  templateUrl: "./prototype.component.html",
  styleUrls: ["./prototype.component.css"]
})
export class PrototypeComponent implements OnInit {
  public cards: CardContent[][];

  constructor() {
    const height: number = 7;
    const width: number = 5;

    this.cards = [];

    for (let y = 0; y < height; y++) {
      this.cards[y] = [];
      for (let x = 0; x < width; x++) {
        this.cards[y][x] = {
          title: "Card",
          subtitle: "X: " + x + " Y: " + y,
          content: "I have all of these: "
        } as CardContent;
      }
    }
  }

  ngOnInit() {}

  onChange(passedText: string, card: CardContent) {
    card.content += passedText;
  }
}

class CardContent {
  public title: string;
  public subtitle: string;
  public content: string;

  constructor() {}
}
