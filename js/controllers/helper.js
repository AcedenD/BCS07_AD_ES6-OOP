import {Person, Student, Employee, Customer } from "../models/Person.js";

import { kiemTraRong, IDValid, hoTenValid, kiemTraDiaChi, kiemTraEmail, kiemTraLoaiNguoi, kiemTraDiem, kiemTraLuong, kiemTraNgayLam, kiemTraCongTy, kiemTraHoaDon, kiemTraDanhGia} from "./validation.js";

export function createAPerson() {
  var valid = true;
  let arrInput = document.querySelectorAll("#personForm input, #personForm select");

  let arrErr = document.querySelectorAll("#personForm .invalid-feedback");


  for (let [index, input] of arrInput.entries()) {
    // console.log(index + " input : " +input.id + " err: " + arrErr[index].id);
    valid &= kiemTraRong(input.value, arrErr[index].id); 
  }

  valid &= IDValid() & hoTenValid() & kiemTraDiaChi(arrInput[2].value, arrErr[2].id) & kiemTraEmail(arrInput[3].value, arrErr[3].id) & kiemTraLoaiNguoi(arrInput[4].value, arrErr[4].id);

  if(arrInput[4].value == "loai1"){
    valid &= kiemTraDiem(arrInput[5].value, arrErr[5].id) & kiemTraDiem(arrInput[6].value, arrErr[6].id) & kiemTraDiem(arrInput[7].value, arrErr[7].id);
  }else if(arrInput[4].value == "loai2"){
    valid &= kiemTraLuong(arrInput[6].value, arrErr[6].id) & kiemTraNgayLam(arrInput[5].value, arrErr[5].id);
  }else if(arrInput[4].value == "loai3"){
    valid &= kiemTraCongTy(arrInput[5].value, arrErr[5].id) & kiemTraHoaDon(arrInput[6].value, arrErr[6].id) & kiemTraDanhGia(arrInput[7].value, arrErr[7].id);
  }


  if(valid){
    console.log("valid person");
    var loai = document.getElementById("loai").value

    var person;
    if (loai == "loai1") {
      person = new Student();
    } else if (loai == "loai2") {
      person = new Employee();
    } else if (loai == "loai3") {
      person = new Customer();
    }

    for (let input of arrInput) {
      let { id, value } = input;
      person[id] = value;
    }

    return person;

  }else {
    console.log("invalid person");
    return ;
  }

}