import { NgModule } from '@angular/core';
import { MatButtonModule,
         MatIconModule,
         MatInputModule,
         MatDatepickerModule,
         MatNativeDateModule,
         MatCheckboxModule,
         MatSidenavModule,
         MatToolbarModule,
         MatListModule,
         MatTabsModule,
         MatCardModule,
         MatSelectModule,
         MatTableModule,
         MatSortModule,
         MatPaginatorModule
        } from '@angular/material';

import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [MatButtonModule,
            MatIconModule,
            MatFormFieldModule,
            MatInputModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatCheckboxModule,
            MatSidenavModule,
            MatToolbarModule,
            MatListModule,
            MatTabsModule,
            MatCardModule,
            MatSelectModule,
            MatTableModule,
            MatSortModule,
            MatPaginatorModule,
  ],

  exports: [MatButtonModule,
            MatIconModule,
            MatFormFieldModule,
            MatInputModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatCheckboxModule,
            MatSidenavModule,
            MatToolbarModule,
            MatListModule,
            MatTabsModule,
            MatCardModule,
            MatSelectModule,
            MatTableModule,
            MatSortModule,
            MatPaginatorModule,
  ]
})


export class MaterialModule {}
