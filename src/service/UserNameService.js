import React from 'react';
import {User} from '../model/User'
import swal from 'sweetalert';


export function message(User){

    swal({
        title: "Tu usuario es correcto"+User.username,
        text: "Bienvenido a tu red social favorita, ",
        icon: "success",
       
      })
      



}

export function verifyUser(User){

    swal({
        title: "Los datos son incorrectos " +User.username,
        text: "Lo sentimos",
        icon: "warning",
       
      })
      



}