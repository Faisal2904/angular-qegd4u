import {Directive,Input,OnInit,HostBinding,HostListener} from '@angular/core'
@Directive({
  selector:'[appDropdown]'

})

export class DropdownDirective implements OnInit{
  @HostBinding ('class.open')isOpen=false;
  @HostListener('click') toggleOpen(){
    this.isOpen=!this.isOpen;
  }
}