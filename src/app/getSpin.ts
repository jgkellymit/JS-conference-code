import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

	@Injectable()
	export class getSpin {
    private http:Http;
    private token;
		constructor(private httpService:Http) {
			this.http = httpService;
		}

    getToken() {
      this.http.post("http://l7b248.na.sas.com:7080/auth/login", {username: "xyz", password: 123})
      .map(response => response.json() )
      .subscribe( (response) => {
        this.token = response['token']
      }, (err) => {
        console.error("some error1, err")
      })
      console.log(this.token);
    }

  }
