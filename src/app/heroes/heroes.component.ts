import { Component, OnInit } from '@angular/core';
//import { Tile } from '@angular/material/grid-list/tile-coordinator';
import { Hero } from '../hero';
import{HeroService} from '../hero.service'

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
 

  hero: Hero = {
    id: 11,
    name:'k',
    priority:0
  };

  hero1: Hero = {
    id: 11,
    name:'k',
    priority:0
  };

  heroes:Hero[]=[];
  priority_1_task : Hero[] = [];
  priority_2_task : Hero[] = [];
  priority_3_task : Hero[] = [];
  priority_4_task : Hero[] = [];
  
  selectedHero?: Hero;
  constructor(private heroService:HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes():void{
    this.priority_1_task=[]
    this.priority_2_task=[]
    this.priority_3_task=[]
    this.priority_4_task=[]
    // this.heroes=this.heroService.getHeroes();
    this.heroService.getHeroes()
    .subscribe(hero=>{
      console.log(hero);
      this.heroes=hero;
    
    })
    for (var val of this.heroes) {
      if(val.priority==1){
        console.log(val.name)
        
        this.priority_1_task.push({'id':val.id,'name':val.name,'priority':val.priority})
      
        //this.heroes1.push(val.name)
      }
      else if(val.priority==2){
        console.log(val.name)
        
        this.priority_2_task.push({'id':val.id,'name':val.name,'priority':val.priority})
      
        //this.heroes1.push(val.name)
      }
      else if(val.priority==3){
        console.log(val.name)
        
        this.priority_3_task.push({'id':val.id,'name':val.name,'priority':val.priority})
      
        //this.heroes1.push(val.name)
      }
      else if(val.priority==4){
        console.log(val.name)
        
        this.priority_4_task.push({'id':val.id,'name':val.name,'priority':val.priority})
      
        //this.heroes1.push(val.name)
      }
      
      console.log(val); // prints values: 10, 20, 30, 40
    }
  }

  onSelected(hero:Hero):void{
    console.log(hero);
    this.selectedHero=hero;

  }


  getVal():void{

  }

  save(id:string,name:string,priority:string):void{
    console.log(id,name,priority)
  if (this.hero)
      this.hero.id=Number(id)
      this.hero.name=name
      this.hero.priority=Number(priority)
      this.heroService.updateHero(this.hero).subscribe();
      console.log(this.hero)
      
  }

  completedTask(id:string):void{

    this.heroService.completedTask(id).subscribe();
    console.log(id)
    

  }

  removeTask(id:string):void{

    this.heroService.removeTask(id).subscribe();
    console.log(id)
    

  }
  skipTask(id:string):void{

    this.heroService.skipTask(id).subscribe();
    console.log(id)
    

  }
}