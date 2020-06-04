import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UtilsService} from '../utils-service/utils.service';
import {pluck} from 'rxjs/operators';
import {Skill} from '../../chatbot/chatbot.component';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http: HttpClient,
              private utilsService: UtilsService) {
  }

  fetchAllSkills() {
    return this.http.get<SkillGetAllResponse>(this.utilsService.getFullUrl('node', 'skill/getall'))
      .pipe(
        pluck('data', 'skills')
      );
  }

  updateSkill(updatedSkill: Skill) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.patch(this.utilsService.getFullUrl('node', 'skill/update'), updatedSkill, httpOptions);
  }
}

export interface SkillGetAllResponse {
  status: string;
  data: {
    skills: {
      skillName: string;
      score: number;
    }[]
  };
}
