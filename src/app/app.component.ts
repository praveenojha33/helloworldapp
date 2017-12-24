//Import Component function from @angular/core module so that it can be used as decorator.
import { Component } from '@angular/core';
//Component decorator
@Component({
  selector: 'app-root',//selector parameter passed to Component function.Selects the component to be targeted 
  //here 'app-root'
  templateUrl: './app.component.html',//template for the Component environments/index.html/'app-root'
  styleUrls: ['./app.component.css']//CSS for the Component environments/index.html/'app-root'
})
export class AppComponent {
  title = 'helloworldapp';//sends title for interpolated string in app.component.html
}
