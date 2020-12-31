import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
	selector: "app-book",
	templateUrl: "./book.page.html",
	styleUrls: ["./book.page.scss"],
})
export class BookPage implements OnInit {
	book: string;
	currentURL: string;
	constructor(private router: Router, private route: ActivatedRoute) {}

	ngOnInit() {
		this.book = this.route.snapshot.paramMap.get("bookTitle");

		this.currentURL = this.router.url;

		/* this.router.events.subscribe((val) => {
			this.currentURL = this.router.url; //update the value when a different route is accessed
		}); */
	}
}
