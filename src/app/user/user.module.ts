import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {UsersModule} from 'users-demo';

export const routes:Routes=[
  {
    path:"",
    loadChildren:()=>import('users-demo').then(m=>m.UsersModule)
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UsersModule
  ]
})
export class UserModule { }
