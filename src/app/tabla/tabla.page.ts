import { HttpResponse } from '@angular/common/http';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { registro } from '../modelo/registroModel';
import { ServicesService } from '../servicios/services.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.page.html',
  styleUrls: ['./tabla.page.scss'],
})
export class TablaPage implements OnInit {
  private registro: registro[];
  tableStyle = 'dark';
  constructor(public datos:ServicesService ) { 
  }

  ngOnInit():void {
    this.traemosDatos();
  }
  traemosDatos(){
    this.datos.obtenerData().subscribe(async (regis: HttpResponse <registro[]>)=>{
      this.registro = regis.body
      console.log(this.registro)
    })
    
  }
  switchStyle(){
    if(this.tableStyle === 'dark'){
      this.tableStyle = 'material';
    }
    else if(this.tableStyle === 'material'){
      this.tableStyle = 'bootstrap'
    }
    else {
      this.tableStyle = 'dark';
    }
  }
  getRowClass(row){

  }
  async open(row){

  }

}
