import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion'



const MaterialComponents = [MatExpansionModule]

@NgModule({
  exports: [MaterialComponents],
  imports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
