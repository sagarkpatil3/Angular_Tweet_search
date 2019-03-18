import { Component, OnInit } from '@angular/core';
import { TweetsService } from './tweets.service';
@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  tweetResult: any;
  query: any;
  sum = 1000;
  throttle = 3000;
  scrollDistance = 10;
  scrollUpDistance = 4;
  count = 0;
  constructor(private service: TweetsService) { }

  ngOnInit() {
    this.tweets();
  }

  tweets() {
    const param = {
      query: this.query,
      count: this.count
    };
    this.service.getTweets(param).subscribe(
      data => {
        this.tweetResult = data.statuses;
      },
      error =>{
        console.log(error);
      }
    );
  }

  onScrollDown() {
    if (this.count <= 50) {
      this.count++;
      this.tweets();
    }
  }
}
