import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DropdownSearchSelectorComponent } from './ngx-dropdown-search.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [DropdownSearchSelectorComponent],
    declarations: [DropdownSearchSelectorComponent],
    providers: [],
})
export class DropdownSearchModule { }
