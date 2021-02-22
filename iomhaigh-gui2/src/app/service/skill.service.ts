import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Skill, SkillAdapter } from "../model/skill.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class SkillService {
  private baseUrl = "http://iomhaigh-api:51394/api/skill";

  constructor(private http: HttpClient, private adapter: SkillAdapter) { }

  list(): Observable<Skill[]> {
    const url = `${this.baseUrl}/`;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http
      .get(url, httpOptions)
      .pipe(
        map((data: any) => {
          console.log(data);
          let jsonSkillList: Array<any> = JSON.parse(data);
          let skillList = new Array<Skill>();

          jsonSkillList.forEach(jsonSkill => {
            skillList.push(this.adapter.adapt(jsonSkill));
          });
          return skillList;
        })
      );
  }
}
