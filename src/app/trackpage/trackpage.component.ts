import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { Hero } from '../hero';
import{HeroService} from '../hero.service'
@Component({
  selector: 'app-trackpage',
  templateUrl: './trackpage.component.html',
  styleUrls: ['./trackpage.component.css']
})
export class TrackpageComponent implements OnInit {
  
  hero:Hero[]=[];
  gvalue=[1];
  priority_1_task : Hero[] = [];
  selectedHero?: Hero;
  constructor(private heroService:HeroService) { }


  ngOnInit(): void {

  }
  getGraph1(){
    this.priority_1_task=[]
    this.heroService.getGraph()
    .subscribe(hero=>{
      console.log(hero);
      this.hero=hero;
      
      
    })
    console.log("Initial Info",this.hero)
    for (var val of this.hero) {
      
        console.log("New Test",val.name)
    }
  }
  
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart:any;

  
    testing(){
      let lst1=[]
      let lst2=[]
      console.log("aaaaaaaaaa");
      console.log(this.hero)
      let i=0;
      for (var val of this.hero) 
      {
        lst1.push(val.priority)
        lst2.push(i)
        i=i+1
        console.log("New Test",lst1)
    }
      console.log("aaaaaaaaaa");



      //
      new Chart(this.ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Current Vallue',
                data:this.gvalue ,
                backgroundColor: "rgb(115 185 243 / 65%)",
                borderColor: "#007ee7",
                fill: true,
            },
            {
              label: 'Invested Amount',
              data: lst1,
              backgroundColor: "#47a0e8",
              borderColor: "#007ee7",
              fill: true,
          }],
            labels:lst2 
        },
    });
    }
        //this.priority_1_task.push({'id':val.id,'name':val.name,'priority':val.priority})
      
        //this.heroes1.push(val.name)
      
    
     
    

  
    ngAfterViewInit() {
      let object = []
      object.push(1);
      object.push(100);
      console.log(object);
      for (var val of this.hero) {
        object.push(val.id)
        console.log(val.id)
      }
      console.log(object)
      this.gvalue.push(Object.assign({}, 11))
      this.gvalue.push(Object.assign(22, 12))
      console.log(this.gvalue)
      console.log(this.gvalue)
      this.canvas = this.mychart.nativeElement; 
      this.ctx = this.canvas.getContext('2d');
  
      new Chart(this.ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Current Vallue',
                data:this.gvalue ,
                backgroundColor: "rgb(115 185 243 / 65%)",
                borderColor: "#007ee7",
                fill: true,
            },
            {
              label: 'Invested Amount',
              data: [0, 50, 40, 60, 80],
              backgroundColor: "#47a0e8",
              borderColor: "#007ee7",
              fill: true,
          }],
            labels: ['January 2019', 'February 2019', 'March 2019', 'April 2019']
        },
    });
  
    }
  
  
}
