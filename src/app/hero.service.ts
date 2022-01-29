import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import{Hero} from './hero'


@Injectable({
  providedIn: 'root'
})

export class HeroService {
  constructor(private httpClient:HttpClient) { }

  getHero(id: number):Observable<Hero> {
    const hero = this.httpClient.get<Hero>('http://127.0.0.1:5000/detail/'+id.toString());
    return hero;
  }
  



  getHeroes():Observable<Hero[]>{
     //const heroes = of(HEROES);
    const heroes = this.httpClient.get<Hero[]>('https://realpython-example-appf.herokuapp.com/n');
    return heroes; 
  }

  getGraph():Observable<Hero[]>{
    //const heroes = of(HEROES);
   const heroes = this.httpClient.get<Hero[]>('http://127.0.0.1:5000/getGraph');
   return heroes; 
 }
  updateHero(hero:Hero):Observable<Hero>{
    return this.httpClient.post<Hero>('http://127.0.0.1:5000/update',hero)

  }

  completedTask(id:String):Observable<string>{
    return this.httpClient.post<string>('http://127.0.0.1:5000/completedTask',id)

  }


  removeTask(id:String):Observable<string>{
    return this.httpClient.post<string>('http://127.0.0.1:5000/removedTask',id)

  }

  skipTask(id:String):Observable<string>{
    return this.httpClient.post<string>('http://127.0.0.1:5000/skipTask',id)

  }
}
