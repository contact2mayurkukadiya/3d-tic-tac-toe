import { bootstrapApplication, platformBrowser } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations'; // <-- THIS IMPORT IS CRUCIAL

bootstrapApplication(AppComponent, {
  providers: [provideAnimations()]
})
  .catch((err) => console.error(err));