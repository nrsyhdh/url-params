import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{
		path: "home",
		loadChildren: () =>
			import("./home/home.module").then((m) => m.HomePageModule),
	},
	{
		path: "",
		redirectTo: "home",
		pathMatch: "full",
	},
	{
		path: "book/:bookTitle",
		loadChildren: () =>
			import("./book/book.module").then((m) => m.BookPageModule),
	},
	{
		path: "author/:authorName",
		loadChildren: () =>
			import("./author/author.module").then((m) => m.AuthorPageModule),
	},
	{
		path: "cars",
		loadChildren: () =>
			import("./cars/cars.module").then((m) => m.CarsPageModule),
	},
	{
		path: "cars/:carBrand",
		loadChildren: () =>
			import("./cars/cars.module").then((m) => m.CarsPageModule),
		// component: CarsComponent,
	},
	{
		path: "**",
		redirectTo: "cars/bmw", // Default URL for showcase purposes
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
