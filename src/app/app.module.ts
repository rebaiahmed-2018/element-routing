import { HttpClientModule } from '@angular/common/http';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FooComponent } from './foo/foo.component';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  declarations: [AppComponent, FooComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: 'foo', component: FooComponent },
        { path: 'hello', component: HelloComponent },
      ],
      { useHash: true, enableTracing: true }
    ),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const element = createCustomElement(AppComponent, {
      injector: this.injector,
    });

    customElements.define('custom-web-element', element);
  }
}
