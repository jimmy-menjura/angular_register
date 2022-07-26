import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators, EmailValidator} from '@angular/forms';
import {registro} from '../modelo/registroModel';
import {ServicesService} from '../servicios/services.service';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  form:FormGroup;
  private emailPattern:string='^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$';
  constructor(private formBuilder: FormBuilder,private data:ServicesService,private menu: MenuController,public route:Router,private toast: ToastrService  ) { 
  this.form = this.formBuilder.group({
    id:0,
    name:['',[Validators.required]],
    email:['',[Validators.required,Validators.pattern(this.emailPattern)]],
    password:['',[Validators.required,Validators.minLength(2),Validators.maxLength(9)]],
  })
}
  ngOnInit() {
  }
  ionViewWillEnter(){
    this.menu.enable(false);
  }
  ionViewDidLeave(){
    const login = this.route.url;
    if(login != '/login'){
    this.menu.enable(true);
    }else{
      this.menu.enable(false);
    }
  }
  guardarDatos(){
    const guardar : registro={
      name: this.form.get('name').value,
      email: this.form.get('email').value,
      password: this.form.get('password').value,
    }
    this.data.guardarData(guardar).subscribe(datos=>{
      this.toast.success("Guardado obviamente por que somos pros","Equisde");
      this.data.obtenerData();
      this.form.reset();
    })
  }
  
}
