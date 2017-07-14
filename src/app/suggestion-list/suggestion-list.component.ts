import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-suggestion-list',
  templateUrl: './suggestion-list.component.html',
  styleUrls: ['./suggestion-list.component.css']
})
export class SuggestionListComponent implements OnInit {
  suggestions=[];
  name="(Optional)";
  message="";
  promises=[];
  saveMessage='';
  disabled=false;
  loading=false;
  constructor() { }

  ngOnInit() {
  }
  
  disableForm(){
    this.disabled=true;
  }
  saveSuggestion(el){
    // Disable Inputs
    this.disableForm();
    this.loading=true;
    //Make some API call to NODE to save to Mongo
     this.promises.push(new Promise((resolve) => {
    setTimeout(() => resolve(`Save ${this.name} with message : ${this.message}`), 2500)})
      .then((response)=>{
        this.saveMessage = response.toString();
        this.name="";
        this.message="";
      }));
    // Wait until API Call Returns
    Promise.all(this.promises).then(()=>{
      el.focus();
      this.name="(Optional)";
      el.select();
      this.disabled=false;
      this.loading=false;
    });
  }
  // Check for Enter Event, then fire addSuggestion
  onEnter(event,el){
    if(event.keyCode===13){
      this.saveSuggestion(el);
    }
  }
  
}
