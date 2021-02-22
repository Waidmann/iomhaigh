import { Component, OnInit } from "@angular/core";
import { Skill } from "../model/skill.model";
import { SkillService } from "../service/skill.service";


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[];

  constructor(private skillService: SkillService) {
    this.skills = [];
   }

  ngOnInit(): void {
    this.skillService.list().subscribe((skills: Skill[]) => {
      this.skills = skills;
    });
  }

}
