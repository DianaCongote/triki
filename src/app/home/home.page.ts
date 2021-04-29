import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //variable que activa o desactiva las x y las o
  var = true;
  //almacenan en un string el valor del boton que seleccionan, mediante ellas se eligue al ganador al completar una convinacion
  sumaGanadorx = '';
  sumaGanadoro = '';
  //valen que hayan empates
  contador = 0;
  //esta pone en el boton si es una x o una o, cada boton tiene su propia variable.
  letra = '';
  letra2 = '';
  letra3 = '';
  letra4 = '';
  letra5 = '';
  letra6 = '';
  letra7 = '';
  letra8 = '';
  letra9 = '';
  numero = '';
  letras = '';
  //variable bandera que me ayuda a determinar los empates despues de 9 jugadas
  bandera = 1;
  //envia al alert un mensaje que diga quien gano o si quedaron empate
  mensaje='';
  //la informacion dentro del constructor es para el alert
  constructor(public alertController: AlertController) {}
  //existen 9 funciones una para cada boton
  guardaruno(){
    //a la variable numero le doy un valor en cada boton
    this.numero = 'a'
    //me llama a la funcion que se encarga de marcar las x y las o
    this.marcador()
    //llama a la funcion que se encarga de determinar el ganado
    this.contadores()
    //la letra del boton uno va a tomar el valor que haya sido determinada en la funcion marcador
    this.letra=this.letras
  }

  guardardos(){
    this.numero = 'b'
    this.marcador()
    this.contadores()
    this.letra2=this.letras
  }

  guardartres(){
    this.numero = 'c'
    this.marcador()
    this.contadores()
    this.letra3=this.letras
  }

  guardarcuatro(){
    this.numero = 'd'
    this.marcador()
    this.contadores()
    this.letra4=this.letras    
    }
  guardarcinco(){
    this.numero = 'e'
    this.marcador()
    this.contadores()
    this.letra5=this.letras
  }

  guardarseis(){
    this.numero = 'f'
    this.marcador()
    this.contadores()
    this.letra6=this.letras
  }

  guardarsiete(){
    this.numero = 'g'
    this.marcador()
    this.contadores()
    this.letra7=this.letras
  }
  
  guardarocho(){
    this.numero = 'h'
    this.marcador()
    this.contadores()
    this.letra8=this.letras
    }
  
  guardarnueve(){
    this.numero = 'i'
    this.marcador()
    this.contadores()
    this.letra9=this.letras
  }
//marca la letra
  marcador(){
    //si es verdadero marcara x
    if(this.var == true){
      //volvera la variable en falsa 
      this.var=false
      //cantara las jugadas
      this.contador = this.contador + 1
      //almacera las letras asignadas en un string
      this.sumaGanadorx = this.sumaGanadorx + this.numero
      //asigna que letra se va a marcar
      this.letras = 'x'
    }else{
      this.var = true
      this.contador = this.contador + 1
      this.sumaGanadoro = this.sumaGanadoro + this.numero
      this.letras = 'o'
    }
  }
  
  async contadores(){
    //pone los condicionales de las posibles convinaciones para ganar
    if((this.sumaGanadorx.indexOf('a') != -1 && this.sumaGanadorx.indexOf('b') != -1 && this.sumaGanadorx.indexOf('c') != -1) || (this.sumaGanadorx.indexOf('a') != -1 && this.sumaGanadorx.indexOf('d') != -1 && this.sumaGanadorx.indexOf('g') != -1) || (this.sumaGanadorx.indexOf('g') != -1 && this.sumaGanadorx.indexOf('h') != -1 && this.sumaGanadorx.indexOf('i') != -1) || (this.sumaGanadorx.indexOf('c') != -1 && this.sumaGanadorx.indexOf('f') != -1 && this.sumaGanadorx.indexOf('i') != -1) || (this.sumaGanadorx.indexOf('b') != -1 && this.sumaGanadorx.indexOf('e') != -1 && this.sumaGanadorx.indexOf('h') != -1) || (this.sumaGanadorx.indexOf('d') != -1 && this.sumaGanadorx.indexOf('e') != -1 && this.sumaGanadorx.indexOf('f') != -1) || (this.sumaGanadorx.indexOf('a') != -1 && this.sumaGanadorx.indexOf('e') != -1 && this.sumaGanadorx.indexOf('i') != -1) || (this.sumaGanadorx.indexOf('c') != -1 && this.sumaGanadorx.indexOf('e') != -1 && this.sumaGanadorx.indexOf('g') != -1)){
      this.mensaje='Ganaste jugador X'
      this.alertas()
      this.bandera=0;
    }
    if((this.sumaGanadoro.indexOf('a') != -1 && this.sumaGanadoro.indexOf('b') != -1 && this.sumaGanadoro.indexOf('c') != -1) || (this.sumaGanadoro.indexOf('a') != -1 && this.sumaGanadoro.indexOf('d') != -1 && this.sumaGanadoro.indexOf('g') != -1) || (this.sumaGanadoro.indexOf('g') != -1 && this.sumaGanadoro.indexOf('h') != -1 && this.sumaGanadoro.indexOf('i') != -1) || (this.sumaGanadoro.indexOf('c') != -1 && this.sumaGanadoro.indexOf('f') != -1 && this.sumaGanadoro.indexOf('i') != -1) || (this.sumaGanadoro.indexOf('b') != -1 && this.sumaGanadoro.indexOf('e') != -1 && this.sumaGanadoro.indexOf('h') != -1) || (this.sumaGanadoro.indexOf('d') != -1 && this.sumaGanadoro.indexOf('e') != -1 && this.sumaGanadoro.indexOf('f') != -1) || (this.sumaGanadoro.indexOf('a') != -1 && this.sumaGanadoro.indexOf('e') != -1 && this.sumaGanadoro.indexOf('i') != -1) || (this.sumaGanadoro.indexOf('c') != -1 && this.sumaGanadoro.indexOf('e') != -1 && this.sumaGanadoro.indexOf('g') != -1)){
      this.mensaje='Ganaste jugador O'
      this.alertas()
      this.bandera=0;
    }
    //si hay 9 jugados y ninguno a ganado habra un empate
    if(this.contador!=1 && this.contador==9 ){
      this.mensaje='Empate'
      this.alertas()}
    }
    //funcion que envia los alertas
    async alertas(){
      const alerta = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Fin del juego',
        message: this.mensaje,
        buttons: [
          {
            text: 'Aceptar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }        
        ]
      });
      await alerta.present();
    }
}
