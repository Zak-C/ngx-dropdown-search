/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from './ngx-dropdown-search.component';
import * as i3 from '@angular/forms';
const styles_DropdownSearchSelectorComponent:any[] = ['.form-group[_ngcontent-%COMP%] {\n        margin: 0;\n        max-width: 100%;\n        position: relative;\n        }\n        \n        .selector-container[_ngcontent-%COMP%] {\n        max-width: 100%;\n        width: 100%;\n        position: relative;\n        }\n        \n        .textarea-selector[_ngcontent-%COMP%] {\n        resize: none;\n        padding-right: 34px;\n        overflow-x: hidden;\n        }\n        \n        .drop-menu[_ngcontent-%COMP%] {\n        background: linear-gradient(to bottom, white 0, #f2f2f2 100%);\n        border-color: #ccc;\n        border-radius: 3px;\n        border-style: solid;\n        border-width: 1px;\n        color: #333;\n        cursor: pointer;\n        display: inline-block;\n        font-size: 14px;\n        font-family: inherit;\n        font-variant: normal;\n        line-height: 20px;\n        margin: 0 10px 0 0;\n        padding: 4px 10px;\n        text-decoration: none;\n        text-shadow: 0 1px 0 white;\n        -moz-box-sizing: border-box;\n        -webkit-box-sizing: border-box;\n        -ms-box-sizing: border-box;\n        box-sizing: border-box;\n        -moz-border-radius-bottomleft: 0;\n        border-bottom-left-radius: 0;\n        -moz-border-radius-topleft: 0;\n        border-top-left-radius: 0;\n        border-top: 0;\n        border-right: 0;\n        border-bottom: 0;\n        display: block;\n        height: auto;\n        margin: 0;\n        padding: 4px 0;\n        position: absolute;\n        right: 1px;\n        top: 1px;\n        bottom: 1px;\n        width: 23px;\n        }\n        \n        .drop-menu-disabled[_ngcontent-%COMP%] {\n        background: linear-gradient(to bottom, #e0dede 0, #c7c6c6 100%);\n        border-color: #ccc;\n        border-radius: 3px;\n        border-style: solid;\n        border-width: 1px;\n        color: #333;\n        cursor: pointer;\n        display: inline-block;\n        font-size: 14px;\n        font-family: inherit;\n        font-variant: normal;\n        line-height: 20px;\n        margin: 0 10px 0 0;\n        padding: 4px 10px;\n        text-decoration: none;\n        text-shadow: 0 1px 0 white;\n        -moz-box-sizing: border-box;\n        -webkit-box-sizing: border-box;\n        -ms-box-sizing: border-box;\n        box-sizing: border-box;\n        -moz-border-radius-bottomleft: 0;\n        border-bottom-left-radius: 0;\n        -moz-border-radius-topleft: 0;\n        border-top-left-radius: 0;\n        border-top: 0;\n        border-right: 0;\n        border-bottom: 0;\n        display: block;\n        height: auto;\n        margin: 0;\n        padding: 4px 0;\n        position: absolute;\n        right: 1px;\n        top: 1px;\n        bottom: 1px;\n        width: 23px;\n        }\n        \n        .drop-menu-disabled[_ngcontent-%COMP%]   .fa-spinner[_ngcontent-%COMP%] {\n        margin: 4px 0 0 2px;\n        }\n        \n        .drop-menu[_ngcontent-%COMP%]   .fa-times[_ngcontent-%COMP%] {\n        padding: 4px 0 0 6px;\n        }\n        \n        .caret-down-selector[_ngcontent-%COMP%] {\n        padding-left: 7px;\n        padding-top: 5px;\n        }\n        \n        .results-container[_ngcontent-%COMP%] {\n        max-width: 100%;\n        width: 100%;\n        border: 1px solid lightgrey;\n        background-color: white;\n        border-radius: 3px;\n        position: absolute;\n        max-height: 300px;\n        overflow-y: auto;\n        z-index: 99999;\n        top: 36px;\n        }\n        \n        .results-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        padding: 5px 10px;\n        margin: 0;\n        }\n        \n        .results-container[_ngcontent-%COMP%]   p.result-item[_ngcontent-%COMP%]:hover {\n        cursor: pointer;\n        background-color: #eee;\n        }\n        \n        .selected-item[_ngcontent-%COMP%] {\n        position: absolute;\n        top: 7px;\n        left: 12px;\n        max-width: calc(100% - 47px);\n        width: 100%;\n        }\n        \n        .selected-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        margin: 0;\n        }\n        \n        .selected-items[_ngcontent-%COMP%] {\n        position: absolute;\n        top: 5px;\n        left: 27px;\n        border: solid 1px #cccccc;\n        border-radius: 3px;\n        background-color: #fafafa;\n        padding: 1px 5px;\n        max-width: calc(100% - 47px);\n        }\n        \n        .selected-items[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        margin: 0;\n        margin-right: 15px;\n        }\n        \n        .selected-items[_ngcontent-%COMP%] > i.fa-times[_ngcontent-%COMP%] {\n        position: absolute;\n        top: 4px;\n        right: 4px;\n        }\n        \n        .selected-items[_ngcontent-%COMP%] > i.fa-times[_ngcontent-%COMP%]:hover {\n        cursor: pointer;\n        }\n        \n        .conditional-message[_ngcontent-%COMP%] {\n        font-size: 0.85em;\n        margin-top: 5px;\n        color: #999999;\n        }\n        \n        .alert-danger[_ngcontent-%COMP%] {\n        padding: 2px 10px;\n        margin-top: 5px;\n        margin-bottom: 0px;\n        }'];
export const RenderType_DropdownSearchSelectorComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:0,
    styles:styles_DropdownSearchSelectorComponent,data:{}});
function View_DropdownSearchSelectorComponent_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),1,'span',[['class',
      'drop-menu']],(null as any),[[(null as any),'mousedown'],[(null as any),'click']],
      (_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('mousedown' === en)) {
          const pd_0:any = ((<any>$event.preventDefault()) !== false);
          ad = (pd_0 && ad);
        }
        if (('click' === en)) {
          const pd_1:any = ((<any>_co.toggleResultsDisplay()) !== false);
          ad = (pd_1 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i0.ɵeld(1,0,(null as any),(null as any),
      0,'i',[['aria-hidden','true'],['class','fa fa-caret-down caret-down-selector']],
      (null as any),(null as any),(null as any),(null as any),(null as any)))],(null as any),
      (null as any));
}
function View_DropdownSearchSelectorComponent_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),1,'span',[['class',
      'drop-menu-disabled']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵeld(1,0,(null as any),(null as any),0,'i',[['aria-hidden',
      'true'],['class','fa fa-caret-down caret-down-selector']],(null as any),(null as any),
      (null as any),(null as any),(null as any)))],(null as any),(null as any));
}
function View_DropdownSearchSelectorComponent_3(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),1,'span',[['class',
      'drop-menu-disabled']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵeld(1,0,(null as any),(null as any),0,'i',[['class',
      'fa fa-spinner fa-pulse fa-fw']],(null as any),(null as any),(null as any),(null as any),
      (null as any)))],(null as any),(null as any));
}
function View_DropdownSearchSelectorComponent_4(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),1,'span',[['class',
      'drop-menu']],(null as any),[[(null as any),'mousedown'],[(null as any),'click']],
      (_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('mousedown' === en)) {
          const pd_0:any = ((<any>$event.preventDefault()) !== false);
          ad = (pd_0 && ad);
        }
        if (('click' === en)) {
          const pd_1:any = ((<any>_co.resetSelectedItem()) !== false);
          ad = (pd_1 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i0.ɵeld(1,0,(null as any),(null as any),
      0,'i',[['aria-hidden','true'],['class','fa fa-times']],(null as any),(null as any),
      (null as any),(null as any),(null as any)))],(null as any),(null as any));
}
function View_DropdownSearchSelectorComponent_5(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),1,'span',[['class',
      'drop-menu']],(null as any),[[(null as any),'click']],(_v,en,$event) => {
    var ad:boolean = true;
    var _co:any = _v.component;
    if (('click' === en)) {
      const pd_0:any = ((<any>_co.resetFilter()) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any))),(_l()(),i0.ɵeld(1,0,(null as any),(null as any),
      0,'i',[['aria-hidden','true'],['class','fa fa-times']],(null as any),(null as any),
      (null as any),(null as any),(null as any)))],(null as any),(null as any));
}
function View_DropdownSearchSelectorComponent_6(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),1,'div',[['class',
      'alert alert-danger']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted(1,(null as any),['\n                ','\n            ']))],
      (null as any),(_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = _co.validationMessage;
        _ck(_v,1,0,currVal_0);
      });
}
function View_DropdownSearchSelectorComponent_7(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),1,'p',[['class',
      'conditional-message']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted(1,(null as any),['','']))],(null as any),(_ck,
      _v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.conditionalMessage;
    _ck(_v,1,0,currVal_0);
  });
}
function View_DropdownSearchSelectorComponent_8(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),4,'div',[['class',
      'selected-item']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted(-1,(null as any),['\n                '])),(_l()(),i0.ɵeld(2,
          0,(null as any),(null as any),1,'p',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted(3,(null as any),
          ['','',''])),(_l()(),i0.ɵted(-1,(null as any),['\n            ']))],(null as any),
      (_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = _co.selectedItem[_co.displayProperty];
        const currVal_1:any = (_co.secondaryDisplayProperty? (' ' + _co.selectedItem[_co.secondaryDisplayProperty]): '');
        _ck(_v,3,0,currVal_0,currVal_1);
      });
}
function View_DropdownSearchSelectorComponent_10(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),4,'div',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted(-1,(null as any),['\n                '])),(_l()(),i0.ɵeld(2,0,(null as any),
      (null as any),1,'p',[['class','result-item']],(null as any),[[(null as any),
          'click']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.setItem($event,_v.context.$implicit)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i0.ɵted(3,(null as any),['','',''])),
      (_l()(),i0.ɵted(-1,(null as any),['\n                ']))],(null as any),(_ck,
      _v) => {
    var _co:any = _v.component;
    const currVal_0:any = _v.context.$implicit[_co.displayProperty];
    const currVal_1:any = (_co.secondaryDisplayProperty? (' ' + _v.context.$implicit[_co.secondaryDisplayProperty]): '');
    _ck(_v,3,0,currVal_0,currVal_1);
  });
}
function View_DropdownSearchSelectorComponent_11(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),4,'div',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted(-1,(null as any),['\n                '])),(_l()(),i0.ɵeld(2,0,(null as any),
      (null as any),1,'p',([] as any[]),(null as any),(null as any),(null as any),
      (null as any),(null as any))),(_l()(),i0.ɵted(3,(null as any),['',''])),(_l()(),
      i0.ɵted(-1,(null as any),['\n                ']))],(null as any),(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.noResultsMessage;
    _ck(_v,3,0,currVal_0);
  });
}
function View_DropdownSearchSelectorComponent_9(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),7,'div',[['class',
      'results-container']],(null as any),[[(null as any),'mousedown'],[(null as any),
      'mouseup']],(_v,en,$event) => {
    var ad:boolean = true;
    var _co:any = _v.component;
    if (('mousedown' === en)) {
      const pd_0:any = ((<any>_co.preventBlur($event)) !== false);
      ad = (pd_0 && ad);
    }
    if (('mouseup' === en)) {
      const pd_1:any = ((<any>_co.preventBlur($event)) !== false);
      ad = (pd_1 && ad);
    }
    return ad;
  },(null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n                '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_DropdownSearchSelectorComponent_10)),
      i0.ɵdid(3,802816,(null as any),0,i1.NgForOf,[i0.ViewContainerRef,i0.TemplateRef,
          i0.IterableDiffers],{ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i0.ɵted(-1,
          (null as any),['\n                '])),(_l()(),i0.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_DropdownSearchSelectorComponent_11)),
      i0.ɵdid(6,16384,(null as any),0,i1.NgIf,[i0.ViewContainerRef,i0.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i0.ɵted(-1,(null as any),['\n            ']))],
      (_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = _co.filteredResults;
        _ck(_v,3,0,currVal_0);
        const currVal_1:boolean = (!_co.filteredResults || (_co.filteredResults.length == 0));
        _ck(_v,6,0,currVal_1);
      },(null as any));
}
export function View_DropdownSearchSelectorComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[i0.ɵqud(402653184,1,{textarea:0}),(_l()(),i0.ɵted(-1,(null as any),
      ['\n        '])),(_l()(),i0.ɵeld(2,0,(null as any),(null as any),42,'div',[['class',
      'form-group']],(null as any),[[(null as any),'mouseover'],[(null as any),'mouseleave']],
      (_v,en,$event) => {
        var ad:boolean = true;
        var _co:i2.DropdownSearchSelectorComponent = _v.component;
        if (('mouseover' === en)) {
          const pd_0:any = ((<any>(_co.elementCurrentlyHasFocus = true)) !== false);
          ad = (pd_0 && ad);
        }
        if (('mouseleave' === en)) {
          const pd_1:any = ((<any>(_co.elementCurrentlyHasFocus = false)) !== false);
          ad = (pd_1 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(3,278528,(null as any),0,i1.NgStyle,
      [i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{ngStyle:[0,'ngStyle']},(null as any)),
      i0.ɵpod(4,{'max-width':0}),(_l()(),i0.ɵted(-1,(null as any),['\n            '])),
      (_l()(),i0.ɵeld(6,0,(null as any),(null as any),23,'div',[['class','selector-container']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted(-1,(null as any),['\n                '])),(_l()(),i0.ɵeld(8,
          0,[[1,0],['textarea',1]],(null as any),5,'textarea',[['class','form-control textarea-selector'],
              ['rows','1']],[[8,'placeholder',0],[2,'ng-untouched',(null as any)],
              [2,'ng-touched',(null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',
                  (null as any)],[2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],
              [2,'ng-pending',(null as any)]],[[(null as any),'click'],[(null as any),
              'blur'],[(null as any),'keyup'],[(null as any),'ngModelChange'],[(null as any),
              'input'],[(null as any),'compositionstart'],[(null as any),'compositionend']],
          (_v,en,$event) => {
            var ad:boolean = true;
            var _co:i2.DropdownSearchSelectorComponent = _v.component;
            if (('input' === en)) {
              const pd_0:any = ((<any>i0.ɵnov(_v,9)._handleInput($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i0.ɵnov(_v,9).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
              const pd_2:any = ((<any>i0.ɵnov(_v,9)._compositionStart()) !== false);
              ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
              const pd_3:any = ((<any>i0.ɵnov(_v,9)._compositionEnd($event.target.value)) !== false);
              ad = (pd_3 && ad);
            }
            if (('click' === en)) {
              const pd_4:any = ((<any>_co.displayResultsAndApplyFilter()) !== false);
              ad = (pd_4 && ad);
            }
            if (('blur' === en)) {
              const pd_5:any = ((<any>_co.hideResults()) !== false);
              ad = (pd_5 && ad);
            }
            if (('keyup' === en)) {
              const pd_6:any = ((<any>_co.displayResultsAndApplyFilter()) !== false);
              ad = (pd_6 && ad);
            }
            if (('ngModelChange' === en)) {
              const pd_7:any = ((<any>(_co.searchFilter = $event)) !== false);
              ad = (pd_7 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(9,16384,(null as any),0,i3.DefaultValueAccessor,
          [i0.Renderer2,i0.ElementRef,[2,i3.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i0.ɵprd(1024,(null as any),i3.NG_VALUE_ACCESSOR,(p0_0:any) => {
        return [p0_0];
      },[i3.DefaultValueAccessor]),i0.ɵdid(11,671744,(null as any),0,i3.NgModel,[[8,
          (null as any)],[8,(null as any)],[8,(null as any)],[2,i3.NG_VALUE_ACCESSOR]],
          {isDisabled:[0,'isDisabled'],model:[1,'model']},{update:'ngModelChange'}),
      i0.ɵprd(2048,(null as any),i3.NgControl,(null as any),[i3.NgModel]),i0.ɵdid(13,
          16384,(null as any),0,i3.NgControlStatus,[i3.NgControl],(null as any),(null as any)),
      (_l()(),i0.ɵted(-1,(null as any),['\n                '])),(_l()(),i0.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_DropdownSearchSelectorComponent_1)),
      i0.ɵdid(16,16384,(null as any),0,i1.NgIf,[i0.ViewContainerRef,i0.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i0.ɵted(-1,(null as any),['\n                '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_DropdownSearchSelectorComponent_2)),
      i0.ɵdid(19,16384,(null as any),0,i1.NgIf,[i0.ViewContainerRef,i0.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i0.ɵted(-1,(null as any),['\n                '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_DropdownSearchSelectorComponent_3)),
      i0.ɵdid(22,16384,(null as any),0,i1.NgIf,[i0.ViewContainerRef,i0.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i0.ɵted(-1,(null as any),['\n                '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_DropdownSearchSelectorComponent_4)),
      i0.ɵdid(25,16384,(null as any),0,i1.NgIf,[i0.ViewContainerRef,i0.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i0.ɵted(-1,(null as any),['\n                '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_DropdownSearchSelectorComponent_5)),
      i0.ɵdid(28,16384,(null as any),0,i1.NgIf,[i0.ViewContainerRef,i0.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i0.ɵted(-1,(null as any),['\n            '])),
      (_l()(),i0.ɵted(-1,(null as any),['\n            \n            '])),(_l()(),
          i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_DropdownSearchSelectorComponent_6)),
      i0.ɵdid(32,16384,(null as any),0,i1.NgIf,[i0.ViewContainerRef,i0.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i0.ɵted(-1,(null as any),['\n            \n            '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_DropdownSearchSelectorComponent_7)),
      i0.ɵdid(35,16384,(null as any),0,i1.NgIf,[i0.ViewContainerRef,i0.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i0.ɵted(-1,(null as any),['\n            \n            '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_DropdownSearchSelectorComponent_8)),
      i0.ɵdid(38,16384,(null as any),0,i1.NgIf,[i0.ViewContainerRef,i0.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i0.ɵted(-1,(null as any),['\n            \n            '])),
      (_l()(),i0.ɵted(-1,(null as any),['\n            '])),(_l()(),i0.ɵted(-1,(null as any),
          ['\n            \n            '])),(_l()(),i0.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_DropdownSearchSelectorComponent_9)),i0.ɵdid(43,
          16384,(null as any),0,i1.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
              'ngIf']},(null as any)),(_l()(),i0.ɵted(-1,(null as any),['\n        '])),
      (_l()(),i0.ɵted(-1,(null as any),['\n    ']))],(_ck,_v) => {
    var _co:i2.DropdownSearchSelectorComponent = _v.component;
    const currVal_0:any = _ck(_v,4,0,_co.maxWidth);
    _ck(_v,3,0,currVal_0);
    const currVal_9:any = ((_co.selectedItem || _co.disabled) || _co.loading);
    const currVal_10:any = _co.searchFilter;
    _ck(_v,11,0,currVal_9,currVal_10);
    const currVal_11:boolean = (((!_co.selectedItem && !_co.disabled) && !_co.loading) && !_co.searchFilter);
    _ck(_v,16,0,currVal_11);
    const currVal_12:boolean = ((!_co.selectedItem && _co.disabled) && !_co.loading);
    _ck(_v,19,0,currVal_12);
    const currVal_13:boolean = ((!_co.selectedItem && !_co.disabled) && _co.loading);
    _ck(_v,22,0,currVal_13);
    const currVal_14:any = _co.selectedItem;
    _ck(_v,25,0,currVal_14);
    const currVal_15:boolean = (((!_co.selectedItem && !_co.loading) && !_co.disabled) && _co.searchFilter);
    _ck(_v,28,0,currVal_15);
    const currVal_16:any = (_co.displayValidationMessage && (_co.validationMessage != ''));
    _ck(_v,32,0,currVal_16);
    const currVal_17:any = _co.disabled;
    _ck(_v,35,0,currVal_17);
    const currVal_18:any = _co.selectedItem;
    _ck(_v,38,0,currVal_18);
    const currVal_19:any = _co.displayResults;
    _ck(_v,43,0,currVal_19);
  },(_ck,_v) => {
    var _co:i2.DropdownSearchSelectorComponent = _v.component;
    const currVal_1:any = (_co.selectedItem? '': _co.placeholder);
    const currVal_2:any = i0.ɵnov(_v,13).ngClassUntouched;
    const currVal_3:any = i0.ɵnov(_v,13).ngClassTouched;
    const currVal_4:any = i0.ɵnov(_v,13).ngClassPristine;
    const currVal_5:any = i0.ɵnov(_v,13).ngClassDirty;
    const currVal_6:any = i0.ɵnov(_v,13).ngClassValid;
    const currVal_7:any = i0.ɵnov(_v,13).ngClassInvalid;
    const currVal_8:any = i0.ɵnov(_v,13).ngClassPending;
    _ck(_v,8,0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6,currVal_7,
        currVal_8);
  });
}
export function View_DropdownSearchSelectorComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),1,'ngx-dropdown-search',
      ([] as any[]),(null as any),(null as any),(null as any),View_DropdownSearchSelectorComponent_0,
      RenderType_DropdownSearchSelectorComponent)),i0.ɵdid(1,114688,(null as any),
      0,i2.DropdownSearchSelectorComponent,([] as any[]),(null as any),(null as any))],
      (_ck,_v) => {
        _ck(_v,1,0);
      },(null as any));
}
export const DropdownSearchSelectorComponentNgFactory:i0.ComponentFactory<i2.DropdownSearchSelectorComponent> = i0.ɵccf('ngx-dropdown-search',
    i2.DropdownSearchSelectorComponent,View_DropdownSearchSelectorComponent_Host_0,
    {displayProperty:'displayProperty',secondaryDisplayProperty:'secondaryDisplayProperty',
        filterProperty:'filterProperty',secondaryFilterProperty:'secondaryFilterProperty',
        resultSet:'resultSet',placeholder:'placeholder',disabled:'disabled',conditionalMessage:'conditionalMessage',
        noResultsMessage:'noResultsMessage',validationMessage:'validationMessage',
        loading:'loading',selectedItem:'selectedItem',maxWidth:'maxWidth'},{itemSelected:'itemSelected',
        itemDeselected:'itemDeselected'},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovUmVwby9uZ3gtZHJvcGRvd24tc2VhcmNoL3NyYy9uZ3gtZHJvcGRvd24tc2VhcmNoLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9SZXBvL25neC1kcm9wZG93bi1zZWFyY2gvc3JjL25neC1kcm9wZG93bi1zZWFyY2guY29tcG9uZW50LnRzIiwibmc6Ly8vQzovUmVwby9uZ3gtZHJvcGRvd24tc2VhcmNoL3NyYy9uZ3gtZHJvcGRvd24tc2VhcmNoLmNvbXBvbmVudC50cy5Ecm9wZG93blNlYXJjaFNlbGVjdG9yQ29tcG9uZW50Lmh0bWwiLCJuZzovLy9DOi9SZXBvL25neC1kcm9wZG93bi1zZWFyY2gvc3JjL25neC1kcm9wZG93bi1zZWFyY2guY29tcG9uZW50LnRzLkRyb3Bkb3duU2VhcmNoU2VsZWN0b3JDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiBbbmdTdHlsZV09XCJ7J21heC13aWR0aCc6IG1heFdpZHRofVwiIChtb3VzZW92ZXIpPVwiZWxlbWVudEN1cnJlbnRseUhhc0ZvY3VzID0gdHJ1ZVwiIChtb3VzZWxlYXZlKT1cImVsZW1lbnRDdXJyZW50bHlIYXNGb2N1cyA9IGZhbHNlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VsZWN0b3ItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhICN0ZXh0YXJlYSBjbGFzcz1cImZvcm0tY29udHJvbCB0ZXh0YXJlYS1zZWxlY3RvclwiIHJvd3M9XCIxXCIgW3BsYWNlaG9sZGVyXT1cInNlbGVjdGVkSXRlbSA/ICcnIDogcGxhY2Vob2xkZXJcIiAoY2xpY2spPVwiZGlzcGxheVJlc3VsdHNBbmRBcHBseUZpbHRlcigpXCIgKGJsdXIpPVwiaGlkZVJlc3VsdHMoKVwiXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cInNlbGVjdGVkSXRlbSB8fCBkaXNhYmxlZCB8fCBsb2FkaW5nXCIgKGtleXVwKT1cImRpc3BsYXlSZXN1bHRzQW5kQXBwbHlGaWx0ZXIoKVwiIFsobmdNb2RlbCldPVwic2VhcmNoRmlsdGVyXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRyb3AtbWVudVwiICpuZ0lmPVwiIXNlbGVjdGVkSXRlbSAmJiAhZGlzYWJsZWQgJiYgIWxvYWRpbmcgJiYgIXNlYXJjaEZpbHRlclwiIChtb3VzZWRvd24pPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIiAoY2xpY2spPVwidG9nZ2xlUmVzdWx0c0Rpc3BsYXkoKVwiPjxpIGNsYXNzPVwiZmEgZmEtY2FyZXQtZG93biBjYXJldC1kb3duLXNlbGVjdG9yXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRyb3AtbWVudS1kaXNhYmxlZFwiICpuZ0lmPVwiIXNlbGVjdGVkSXRlbSAmJiBkaXNhYmxlZCAmJiAhbG9hZGluZ1wiPjxpIGNsYXNzPVwiZmEgZmEtY2FyZXQtZG93biBjYXJldC1kb3duLXNlbGVjdG9yXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRyb3AtbWVudS1kaXNhYmxlZFwiICpuZ0lmPVwiIXNlbGVjdGVkSXRlbSAmJiAhZGlzYWJsZWQgJiYgbG9hZGluZ1wiPjxpIGNsYXNzPVwiZmEgZmEtc3Bpbm5lciBmYS1wdWxzZSBmYS1md1wiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkcm9wLW1lbnVcIiAqbmdJZj1cInNlbGVjdGVkSXRlbVwiIChtb3VzZWRvd24pPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIiAoY2xpY2spPVwicmVzZXRTZWxlY3RlZEl0ZW0oKVwiPjxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZHJvcC1tZW51XCIgKm5nSWY9XCIhc2VsZWN0ZWRJdGVtICYmICFsb2FkaW5nICYmICFkaXNhYmxlZCAmJiBzZWFyY2hGaWx0ZXJcIiAoY2xpY2spPVwicmVzZXRGaWx0ZXIoKVwiPjxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJkaXNwbGF5VmFsaWRhdGlvbk1lc3NhZ2UgJiYgdmFsaWRhdGlvbk1lc3NhZ2UgIT0gJydcIiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlxuICAgICAgICAgICAgICAgIHt7dmFsaWRhdGlvbk1lc3NhZ2V9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxwICpuZ0lmPVwiZGlzYWJsZWRcIiBjbGFzcz1cImNvbmRpdGlvbmFsLW1lc3NhZ2VcIj57e2NvbmRpdGlvbmFsTWVzc2FnZX19PC9wPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwic2VsZWN0ZWRJdGVtXCIgY2xhc3M9XCJzZWxlY3RlZC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPHA+e3tzZWxlY3RlZEl0ZW1bZGlzcGxheVByb3BlcnR5XX19e3tzZWNvbmRhcnlEaXNwbGF5UHJvcGVydHkgPyAnICcgKyBzZWxlY3RlZEl0ZW1bc2Vjb25kYXJ5RGlzcGxheVByb3BlcnR5XSA6ICcnfX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPCEtLSBLZWVwaW5nIHRoaXMgaGVyZSBmb3Igbm93IC0gU3R5bGVzIGFuZCBIVE1MIGZvciBtdXRsaXBsZSBzZWxlY3Rpb25zIC0tPlxuICAgICAgICAgICAgPCEtLSA8ZGl2ICpuZ0lmPVwic2VsZWN0ZWRJdGVtXCIgY2xhc3M9XCJzZWxlY3RlZC1pdGVtc1wiPlxuICAgICAgICAgICAgICAgIDxwPnt7c2VsZWN0ZWRJdGVtW2Rpc3BsYXlQcm9wZXJ0eV19fTwvcD5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgKGNsaWNrKT1cInJlc2V0U2VsZWN0ZWRJdGVtKClcIj48L2k+XG4gICAgICAgICAgICA8L2Rpdj4gLS0+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHRzLWNvbnRhaW5lclwiICpuZ0lmPVwiZGlzcGxheVJlc3VsdHNcIiAobW91c2Vkb3duKT1cInByZXZlbnRCbHVyKCRldmVudClcIiAobW91c2V1cCk9XCJwcmV2ZW50Qmx1cigkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBmaWx0ZXJlZFJlc3VsdHNcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInJlc3VsdC1pdGVtXCIgKGNsaWNrKT1cInNldEl0ZW0oJGV2ZW50LCBpdGVtKVwiPnt7aXRlbVtkaXNwbGF5UHJvcGVydHldfX17e3NlY29uZGFyeURpc3BsYXlQcm9wZXJ0eSA/ICcgJyArIGl0ZW1bc2Vjb25kYXJ5RGlzcGxheVByb3BlcnR5XSA6ICcnfX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIiFmaWx0ZXJlZFJlc3VsdHMgfHwgZmlsdGVyZWRSZXN1bHRzLmxlbmd0aCA9PSAwXCI+XG4gICAgICAgICAgICAgICAgPHA+e3tub1Jlc3VsdHNNZXNzYWdlfX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgIiwiPG5neC1kcm9wZG93bi1zZWFyY2g+PC9uZ3gtZHJvcGRvd24tc2VhcmNoPiJdLCJtYXBwaW5ncyI6IkFBQUE7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
