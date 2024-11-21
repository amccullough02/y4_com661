import jsonData from '../assets/businesses.json';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  pageSize: number = 3;

  constructor(private http: HttpClient) {}

  getBusiness(id: any) {
    let dataToReturn: any[] = [];
    jsonData.forEach(function (business) {
      if (business['_id'] == id) {
        dataToReturn.push(business);
      }
    });
    return dataToReturn;
  }

  getBusinesses(page: number) {
    let pageStart = (page - 1) * this.pageSize;
    let pageEnd = pageStart + this.pageSize;
    return jsonData.slice(pageStart, pageEnd);
  }

  getLastPageNumber() {
    return Math.ceil(jsonData.length / this.pageSize);
  }

  getLoremIpsum(paragraphs: number): Observable<any> {
    let API_key = '';
    return this.http.get<any>(
      'https://api.api-ninjas.com/v1/' + 'loremipsum?paragraphs=' + paragraphs,
      { headers: { 'X-Api-Key': API_key } }
    );
  }

  getCurrentWeather(lat: number, lon: number) {
    let API_key = '';
    return this.http.get<any>(
      'https://api.openweathermap.org/data/2.5/' +
        'weather?lat=' +
        lat +
        '&lon=' +
        lon +
        '&units=metric&appid=' +
        API_key
    );
  }

  getTemperatureColour(temp: number) {
    if (temp <= 5) return '#0000ff';
    else if (temp <= 12) return '#00ff00';
    else if (temp <= 17) return '#ffff00';
    else if (temp <= 25) return '#ff7f00';
    else return '#ff0000';
  }

  populateReviews() {
    let loremIpsum = <String>'';
    let dummyReview = <any>{};

    this.getLoremIpsum(1).subscribe((response: any) => {
      loremIpsum = response.text;
      jsonData.forEach(function (business) {
        let numReviews = Math.floor(Math.random() * 10);
        if (Array.isArray(business['reviews'])) {
          for (var i = 0; i < numReviews; i++) {
            let textSize = Math.floor(Math.random() * 290 + 10);
            let textStart = Math.floor(
              Math.random() * (loremIpsum.length - textSize)
            );
            dummyReview = {
              username: 'User ' + Math.floor(Math.random() * 9999 + 1),
              comment: loremIpsum.slice(textStart, textStart + textSize),
              stars: Math.floor(Math.random() * 5) + 1,
            };
          }
          business['reviews'].push(dummyReview);
        } else {
          console.error('Reviews column is not defined.');
        }
      });
    });
  }

  postReview(id: any, review: any) {
    let newReview = {
      username: review.username,
      comment: review.comment,
      stars: review.stars,
    };
    jsonData.forEach(function (business) {
      if (Array.isArray(business['reviews'])) {
        if (business['_id'] == id) {
          business['reviews'].push(newReview);
        }
      } else {
        console.log('Reviews column is not defined.');
      }
    });
  }
}
