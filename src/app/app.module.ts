import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxjsComponent } from './rxjs/rxjs.component';
import { NotificationService } from './notification.service';
import { NotificationBoardComponent } from './notification-board/notification-board.component';
import { TdfComponent } from './tdf/tdf.component';
import { HooksComponent } from './hooks/hooks.component';
import { HooksChildComponent } from './hooks/hooks-child/hooks-child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DialogOverviewExampleComponent } from './dialog-overview-example/dialog-overview-example.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SecondDialogComponent } from './second-dialog/second-dialog.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NewDialogComponent } from './new-dialog/new-dialog.component';
import { NestedDialogComponent } from './nested-dialog/nested-dialog.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeChildComponent } from './home-child/home-child.component';
import { ChildComponent } from './home/child/child.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ViewChildComponent } from './view-child/view-child.component';
import { CounterComponent } from './view-child/counter/counter.component';
import { HeadersInterceptor } from './headers.interceptor';
import { LoggingInterceptor } from './logging.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    HomeComponent,
    SigninComponent,
    RxjsComponent,
    NotificationBoardComponent,
    TdfComponent,
    HooksComponent,
    HooksChildComponent,
    ReactiveFormComponent,
    DialogOverviewExampleComponent,
    SecondDialogComponent,
    NewDialogComponent,
    NestedDialogComponent,
    HomeChildComponent,
    ChildComponent,
    ViewChildComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatSelectModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatCardModule,
    MatRadioModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
    HttpClientModule,
    MatAutocompleteModule,
  ],
  providers: [
    NotificationService,
    { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
