import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";
import { MatCardModule } from "@angular/material";
import { MatButtonModule } from "@angular/material";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PrototypeComponent } from "./prototype/prototype.component";

import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [AppComponent, PrototypeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forRoot([
      { path: "", component: PrototypeComponent, pathMatch: "full" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
