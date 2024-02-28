import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {UsersModule} from 'users';

export const routes:Routes=[
  {
    path:"",
    loadChildren:()=>import('users').then(m=>m.UsersModule)
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
