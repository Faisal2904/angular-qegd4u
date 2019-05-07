import{Component,OnInit}from '@angular/core';
import{ActivatedRoute,Params}from '@angular/router';
import{FormGroup,FormControl,FormArray} from '@angular/forms'
import{RecepieService} from '../recepie.service'

@Component({
  selector:'app-recepie-edit',
  templateUrl:'./recepie-edit.component.html',
  styleUrls:['./recepie-edit.component.css']
})
export class RecepieEditComponent implements OnInit{
  id:number;
  editMode=false;
  recepieForm:FormGroup

  constructor(private route: ActivatedRoute, private recepieService:RecepieService){}

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
      'name':new FormControl(recepiename),
      'imagePath': new FormControl(imagePath),
      'description':new FormControl(descrptn),
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
  
    console.log(this.recepieForm);
  }
  cancel(){
    /// console.log("hello checking",this.recepieForm.get('ingredients').controls);
  }



}