import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { DetailsComponent } from "./welcome/details/details.component";
import { WelcomeComponent } from "./welcome/welcome.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DetailsComponent, WelcomeComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
