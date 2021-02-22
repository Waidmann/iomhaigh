import { Injectable } from "@angular/core";
import { Adapter } from "../adapter";

export class Skill {
  constructor(
    public skillID: number,
    public parentLevelId: number,
    public name: string,
    public proficiency: number,
    public barColor: string,
    public description: string,
    public parent: Skill,
    public children: Skill[]
  ) { }
}

@Injectable({
  providedIn: "root",
})
export class SkillAdapter implements Adapter<Skill> {
  adapt(item: any): Skill {
    return new Skill(
      item.SkillID,
      item.ParentLevelId,
      item.Name,
      item.Proficiency,
      item.BarColor,
      item.Description,
      item.Parent,
      item.Children);
  }
}
