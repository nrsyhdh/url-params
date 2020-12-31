import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
	selector: "app-author",
	templateUrl: "./author.page.html",
	styleUrls: ["./author.page.scss"],
})
export class AuthorPage implements OnInit {
	author: string;
	currentURL: string;
	constructor(private router: Router, private route: ActivatedRoute) {}

	ngOnInit() {
		this.author = "";
		this.route.paramMap.subscribe((params) => {
			this.author = params.get("authorName");
		});

		this.currentURL = this.router.url;
		this.router.events.subscribe((val) => {
			this.currentURL = this.router.url;
		});
	}
}
