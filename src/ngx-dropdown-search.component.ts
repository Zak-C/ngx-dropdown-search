import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ngx-dropdown-search',
    template: `
        <div class="form-group" [ngStyle]="{'max-width': maxWidth}" (mouseover)="elementCurrentlyHasFocus = true" (mouseleave)="elementCurrentlyHasFocus = false">
            <div class="selector-container">
                <textarea #textarea class="form-control textarea-selector" rows="1" [placeholder]="selectedItem ? '' : placeholder" (click)="displayResultsAndApplyFilter()" (blur)="hideResults()"
                [disabled]="selectedItem || disabled || loading" (keyup)="displayResultsAndApplyFilter()" [(ngModel)]="searchFilter"></textarea>
                <span class="drop-menu" *ngIf="!selectedItem && !disabled && !loading && !searchFilter" (mousedown)="$event.preventDefault()" (click)="toggleResultsDisplay()"><i class="fa fa-caret-down caret-down-selector" aria-hidden="true"></i></span>
                <span class="drop-menu-disabled" *ngIf="!selectedItem && disabled && !loading"><i class="fa fa-caret-down caret-down-selector" aria-hidden="true"></i></span>
                <span class="drop-menu-disabled" *ngIf="!selectedItem && !disabled && loading"><i class="fa fa-spinner fa-pulse fa-fw"></i></span>
                <span class="drop-menu" *ngIf="selectedItem" (mousedown)="$event.preventDefault()" (click)="resetSelectedItem()"><i class="fa fa-times" aria-hidden="true"></i></span>
                <span class="drop-menu" *ngIf="!selectedItem && !loading && !disabled && searchFilter" (click)="resetFilter()"><i class="fa fa-times" aria-hidden="true"></i></span>
            </div>
            
            <div *ngIf="displayValidationMessage && validationMessage != ''" class="alert alert-danger">
                {{validationMessage}}
            </div>
            
            <p *ngIf="disabled" class="conditional-message">{{conditionalMessage}}</p>
            
            <div *ngIf="selectedItem" class="selected-item">
                <p>{{selectedItem[displayProperty]}}{{secondaryDisplayProperty ? ' ' + selectedItem[secondaryDisplayProperty] : ''}}</p>
            </div>
            
            <!-- Keeping this here for now - Styles and HTML for mutliple selections -->
            <!-- <div *ngIf="selectedItem" class="selected-items">
                <p>{{selectedItem[displayProperty]}}</p>
                <i class="fa fa-times" aria-hidden="true" (click)="resetSelectedItem()"></i>
            </div> -->
            
            <div class="results-container" *ngIf="displayResults" (mousedown)="preventBlur($event)" (mouseup)="preventBlur($event)">
                <div *ngFor="let item of filteredResults">
                <p class="result-item" (click)="setItem($event, item)">{{item[displayProperty]}}{{secondaryDisplayProperty ? ' ' + item[secondaryDisplayProperty] : ''}}</p>
                </div>
                <div *ngIf="!filteredResults || filteredResults.length == 0">
                <p>{{noResultsMessage}}</p>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .form-group {
        margin: 0;
        max-width: 100%;
        position: relative;
        }
        
        .selector-container {
        max-width: 100%;
        width: 100%;
        position: relative;
        }
        
        .textarea-selector {
        resize: none;
        padding-right: 34px;
        overflow-x: hidden;
        }
        
        .drop-menu {
        background: linear-gradient(to bottom, white 0, #f2f2f2 100%);
        border-color: #ccc;
        border-radius: 3px;
        border-style: solid;
        border-width: 1px;
        color: #333;
        cursor: pointer;
        display: inline-block;
        font-size: 14px;
        font-family: inherit;
        font-variant: normal;
        line-height: 20px;
        margin: 0 10px 0 0;
        padding: 4px 10px;
        text-decoration: none;
        text-shadow: 0 1px 0 white;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -ms-box-sizing: border-box;
        box-sizing: border-box;
        -moz-border-radius-bottomleft: 0;
        border-bottom-left-radius: 0;
        -moz-border-radius-topleft: 0;
        border-top-left-radius: 0;
        border-top: 0;
        border-right: 0;
        border-bottom: 0;
        display: block;
        height: auto;
        margin: 0;
        padding: 4px 0;
        position: absolute;
        right: 1px;
        top: 1px;
        bottom: 1px;
        width: 23px;
        }
        
        .drop-menu-disabled {
        background: linear-gradient(to bottom, #e0dede 0, #c7c6c6 100%);
        border-color: #ccc;
        border-radius: 3px;
        border-style: solid;
        border-width: 1px;
        color: #333;
        cursor: pointer;
        display: inline-block;
        font-size: 14px;
        font-family: inherit;
        font-variant: normal;
        line-height: 20px;
        margin: 0 10px 0 0;
        padding: 4px 10px;
        text-decoration: none;
        text-shadow: 0 1px 0 white;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -ms-box-sizing: border-box;
        box-sizing: border-box;
        -moz-border-radius-bottomleft: 0;
        border-bottom-left-radius: 0;
        -moz-border-radius-topleft: 0;
        border-top-left-radius: 0;
        border-top: 0;
        border-right: 0;
        border-bottom: 0;
        display: block;
        height: auto;
        margin: 0;
        padding: 4px 0;
        position: absolute;
        right: 1px;
        top: 1px;
        bottom: 1px;
        width: 23px;
        }
        
        .drop-menu-disabled .fa-spinner {
        margin: 4px 0 0 2px;
        }
        
        .drop-menu .fa-times {
        padding: 4px 0 0 6px;
        }
        
        .caret-down-selector {
        padding-left: 7px;
        padding-top: 5px;
        }
        
        .results-container {
        max-width: 100%;
        width: 100%;
        border: 1px solid lightgrey;
        background-color: white;
        border-radius: 3px;
        position: absolute;
        max-height: 300px;
        overflow-y: auto;
        z-index: 99999;
        top: 36px;
        }
        
        .results-container p {
        padding: 5px 10px;
        margin: 0;
        }
        
        .results-container p.result-item:hover {
        cursor: pointer;
        background-color: #eee;
        }
        
        .selected-item {
        position: absolute;
        top: 7px;
        left: 12px;
        max-width: calc(100% - 47px);
        width: 100%;
        }
        
        .selected-item p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0;
        }
        
        .selected-items {
        position: absolute;
        top: 5px;
        left: 27px;
        border: solid 1px #cccccc;
        border-radius: 3px;
        background-color: #fafafa;
        padding: 1px 5px;
        max-width: calc(100% - 47px);
        }
        
        .selected-items p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0;
        margin-right: 15px;
        }
        
        .selected-items>i.fa-times {
        position: absolute;
        top: 4px;
        right: 4px;
        }
        
        .selected-items>i.fa-times:hover {
        cursor: pointer;
        }
        
        .conditional-message {
        font-size: 0.85em;
        margin-top: 5px;
        color: #999999;
        }
        
        .alert-danger {
        padding: 2px 10px;
        margin-top: 5px;
        margin-bottom: 0px;
        }
    `]
})

export class DropdownSearchSelectorComponent implements OnInit {
    @Input() displayProperty = 'name';
    @Input() secondaryDisplayProperty = '';
    @Input() filterProperty = 'name';
    @Input() secondaryFilterProperty = '';
    @Input() resultSet: any;
    @Input() placeholder: string;
    @Input() disabled = false;
    @Input() conditionalMessage: string;
    @Input() noResultsMessage = 'No results found';
    @Input() validationMessage = '';
    @Input() loading = false;
    @Input() selectedItem: any;
    @Input() maxWidth = '100%';

    @Output() itemSelected = new EventEmitter<any>();
    @Output() itemDeselected = new EventEmitter<any>();

    @ViewChild('textarea') textarea: any;

    public displayResults = false;
    public filteredResults: any;;
    public searchFilter: string;
    public displayValidationMessage = false;
    public elementCurrentlyHasFocus = false;

    constructor() { }

    ngOnInit() {
        this.filteredResults = this.resultSet;
    }

    public toggleResultsDisplay(): void {
        if (this.displayResults) {
            this.hideResults(true);
            this.textarea.nativeElement.blur();
        } else {
            this.focusTextareaAndShowResults();
        }
    }

    public focusTextareaAndShowResults(): void {
        this.filteredResults = this.resultSet;
        this.textarea.nativeElement.focus();
        this.displayResults = true;
    }

    public hideResults(ignoreFocus = false): void {
        if (!this.elementCurrentlyHasFocus || ignoreFocus) {
            this.displayResults = false;
            this.searchFilter = '';
            this.filteredResults = this.resultSet;
        }
    }

    public setItem(event: Event, item: any) {
        event.stopPropagation();
        this.selectedItem = item;
        this.itemSelected.emit(item);
        this.displayResults = false;
        this.searchFilter = '';
        this.displayValidationMessage = false;
        this.filteredResults = this.resultSet;
    }

    public resetSelectedItem(): void {
        this.itemDeselected.emit(this.selectedItem);
        this.selectedItem = null;
        setTimeout(() => {
            this.textarea.nativeElement.focus()
        }, 0);

        if (this.resultSet) {
            this.displayResults = true;
        }
    }

    public displayResultsAndApplyFilter(): void {
        this.displayResults = true;
        if (this.searchFilter && this.searchFilter.length > 0 && this.resultSet) {
            this.filteredResults = this.resultSet.filter((item: any) => {
                return this.secondaryFilterProperty ? (item[this.filterProperty] + ' ' + item[this.secondaryFilterProperty]).toLowerCase().includes(this.searchFilter.toLowerCase()) :
                    item[this.filterProperty].toLowerCase().includes(this.searchFilter.toLowerCase());
            })
        } else {
            this.filteredResults = this.resultSet;
        }
    }

    public isValid(): boolean {
        if (this.selectedItem != null) {
            return true;
        } else {
            this.displayValidationMessage = true;
            return false;
        };
    }

    public preventBlur($event: Event) {
        $event.preventDefault();
        this.textarea.nativeElement.focus();
    }

    public resetFilter(): void {
        this.searchFilter = '';
        this.filteredResults = this.resultSet;
        this.textarea.nativeElement.focus();
    }
}