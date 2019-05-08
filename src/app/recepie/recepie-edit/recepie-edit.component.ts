import{Component,OnInit}from '@angular/core';
import{ActivatedRoute,Params,Router}from '@angular/router';
import{FormGroup,FormControl,FormArray,Validators} from '@angular/forms'
import{RecepieService} from '../recepie.service'
import { Recepie } from '../recepie.model';


@Component({
  selector:'app-recepie-edit',
  templateUrl:'./recepie-edit.component.html',
  styleUrls:['./recepie-edit.component.css']
})
export class RecepieEditComponent implements OnInit{
  id:number;
  editMode=false;
  recepieForm:FormGroup

  constructor(private route: ActivatedRoute, private recepieService:RecepieService,private router:Router){}

  ngOnInit(){
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.editMode=params['id']!=null;
        this.initForm();
       // console.log(this.editMode);
      }
    )

  }

  private initForm(){
    let recepiename='';
    let imagePath='';
    let descrptn="";
    let recepieIngredient=new FormArray([]);
    if(this.editMode){
    const recepie=this.recepieService.getRecepies(this.id);
    console.log(recepie);
    recepiename=recepie.name;
    imagePath=recepie.imagePath;
    descrptn=recepie.description;
    if(recepie['ingredient'])
    {
      for(let x of recepie.ingredient){
        console.log("printing value of x in for",x.name);
        recepieIngredient.push(
          new FormGroup({
            'name':new FormControl(x.name),
            "amount":new FormControl(x.amount)
          })
        )

      }
      console.log("in if block",recepieIngredient);  
    }


    }
    this.recepieForm=new FormGroup({
      'name':new FormControl(recepiename,Validators.required),
      'imagePath': new FormControl(imagePath,Validators.required),
      'description':new FormControl(descrptn,Validators.required),
      'ingredients': recepieIngredient
    });
  }
  onAddIngredient(){
    (<FormArray>this.recepieForm.get('ingredients')).push( new FormGroup({
            'name':new FormControl(),
            "amount":new FormControl()
          }))
  }

  onSubmit(){
    const recepi= new Recepie(
      this.recepieForm.value['name'],
       this.recepieForm.value['description'],
     this.recepieForm.value['imagePath'],
    this.recepieForm.value['ingredients'])
    if(this.editMode){
      console.log("update block");

      this.recepieService.updateRecepies(this.id,recepi);
    }
    else{
      console.log("add block");
      this.recepieService.addRecepies(recepi);
    }

    this.router.navigate(['../',{relativeTo:this.route}]);

  
    console.log(this.recepieForm);
  }
  cancel(){
    this.router.navigate(['../',{relativeTo:this.route}]);
    /// console.log("hello checking",this.recepieForm.get('ingredients').controls);
  }



}