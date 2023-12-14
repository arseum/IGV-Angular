import { Component, OnInit, ViewChild, ElementRef, OnDestroy} from '@angular/core';
import * as igv from 'igv';

@Component({
   selector: 'app-igv',
   templateUrl: './igv.component.html',
   styleUrls: ['./igv.component.scss']
})
export class IgvComponent implements AfterViewInit, OnDestroy {
   @ViewChild('igvdiv') igvDiv: ElementRef;
   browser: any;
   trackUrl = 'https://www.encodeproject.org/files/ENCFF356YES/@@download/ENCFF356YES.bigWig'
   options = {
      genome: "hg19"
   };
   constructor() { }
   ngAfterViewInit() {
      this.createBrowser()
   }
   async createBrowser() {
      try {
         this.browser = await  igv.createBrowser(this.igvDiv.nativeElement, this.options)
      } catch(e) {
         console.log(e)
      }
   }
   addTrackByUrl() {
      this.browser.loadTrack({
         url: this.trackUrl,
      })
   }
   ngOnDestroy() {
      igv.removeAllBrowsers()
   }
}