import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
	selector: "app-cars",
	templateUrl: "./cars.page.html",
	styleUrls: ["./cars.page.scss"],
})
export class CarsPage implements OnInit {
	car: string;
	currentURL: string;
	constructor(private router: Router, private route: ActivatedRoute) {}

	ngOnInit() {
		// this.car = this.route.snapshot.paramMap.get("carBrand"); // Snapshot param
		this.car = this.route.snapshot.params["carBrand"];
		this.currentURL = this.router.url;

		this.router.events.subscribe((val) => {
			this.currentURL = this.router.url; // Update the value when a different route is accessed
		});
	}
}
