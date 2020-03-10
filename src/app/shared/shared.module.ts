import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ShellComponent } from './shell/shell.component';
import { ColorSketchModule } from 'ngx-color/sketch';
import { ColorChromeModule } from 'ngx-color/chrome';
import { DropzoneDirective } from './dropzone.directive';
import { UploaderComponent } from './uploader/uploader.component';
import { UploadTaskComponent } from './upload-task/upload-task.component';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';

const components = [ShellComponent, UploaderComponent, UploadTaskComponent];

const modules = [
  CommonModule,
  MatButtonModule,
  MatButtonModule,
  MatToolbarModule,
  MatTableModule,
  MatIconModule,
  LayoutModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  RouterModule, 
  ColorSketchModule,
  AngularFirestoreModule,
  ColorChromeModule,
  AngularFireStorageModule
];

@NgModule({
  declarations: [...components, DropzoneDirective],
  imports: [...modules],
  exports: [
    ...components,
    ...modules,
  ]
})
export class SharedModule {}