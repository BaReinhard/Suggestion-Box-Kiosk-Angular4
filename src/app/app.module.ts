import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SuggestionListComponent } from './suggestion-list/suggestion-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuggestionFormComponent } from './suggestion-form/suggestion-form.component';
import { SuggestionsPageComponent } from './suggestions-page/suggestions-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SuggestionListService } from './suggestion-list/suggestion-list.service';
import { SuggestionFormService } from './suggestion-form/suggestion-form.service';
import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
	{
		path: 'suggestions',
		pathMatch: 'full',
		component: SuggestionsPageComponent,
	},
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full',
	},
	{ path: 'home', pathMatch: 'full', component: HomePageComponent },
	{ path: 'about', pathMatch: 'full', component: AboutPageComponent },
	{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		SuggestionListComponent,
		SuggestionFormComponent,
		SuggestionsPageComponent,
		HomePageComponent,
		PageNotFoundComponent,
		AboutPageComponent,
	],
	imports: [
		HttpModule,
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forRoot(appRoutes),
	],
	providers: [SuggestionListService, SuggestionFormService],
	bootstrap: [AppComponent],
})
export class AppModule {}
