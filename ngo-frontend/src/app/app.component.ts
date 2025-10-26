import { Component, OnInit } from '@angular/core';
import { DonationService } from './donation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  donations: any[] = [];
  username = 'user1'; // example user
  constructor(private donationService: DonationService) {}

  ngOnInit() {
    this.donationService.getUserDonations(this.username).subscribe(data => {
      this.donations = data;
    });
  }

  donate() {
    const donation = { username: this.username, cause: 'Education', amount: 100 };
    this.donationService.addDonation(donation).subscribe(() => {
      this.ngOnInit(); // refresh list
    });
  }
}
