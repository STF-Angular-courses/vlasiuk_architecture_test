import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { ItmAddComponent } from './itm-add/itm-add.component';



@NgModule({
  declarations: [ListComponent, ItemComponent, ItmAddComponent],
  imports: [
    CommonModule
  ]
})
export class RozkladModule { }
