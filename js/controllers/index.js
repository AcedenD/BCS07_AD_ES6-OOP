import {Person, Student, Employee, Customer } from "../models/Person.js";
import ListPerson from "../models/ListPerson.js";

import { createAPerson } from "./helper.js";

let listPerson = new ListPerson();

listPerson.layLocal();


export function renderThuocTinhExtra() {
  var loai = document.getElementById("loai").value;
  var content = "";


  // student
  if(loai == "loai1") {
    content = `
    <div class="row">
    <div class="col-md-4 mb-3">
    <label for="toan">Toán</label>
    <input type="text" class="form-control" id="toan" placeholder="Nhập điểm toán" required>
    <div id="invalidToan" class="invalid-feedback">
    </div>
  </div>
  <div class="col-md-4 mb-3">
    <label for="ly">Lý</label>
    <input type="text" class="form-control" id="ly" placeholder="Nhập điểm lý" required>
    <div id="invalidLy" class="invalid-feedback">
    </div>
  </div>
  <div class="col-md-4 mb-3">
    <label for="hoa">Hóa</label>
    <input type="text" class="form-control" id="hoa" placeholder="Nhập điểm hóa" required>
    <div id="invalidHoa" class="invalid-feedback">
    </div>
  </div>
  </div>
    `
  }else if(loai == "loai2"){
    content = `
    <div class="row">
    <div class="col-md-6 mb-3">
    <label for="soNgayLam">Số ngày làm</label>
    <input type="text" class="form-control" id="soNgayLam" placeholder="Nhập số ngày làm" required>
    <div id="invalidSoNgayLam" class="invalid-feedback">
    </div>
  </div>
  <div class="col-md-6 mb-3">
    <label for="luongNgay">Lương theo ngày</label>
    <input type="text" class="form-control" id="luongNgay" placeholder="Nhập lương theo ngày" required>
    <div id="invalidLuongNgay" class="invalid-feedback">
    </div>
  </div>
    </div>
    `
  }else if(loai == "loai3"){
    content = `
    <div class="row">
    <div class="col-md-4 mb-3">
    <label for="tenCongTy">Tên công ty</label>
    <input type="text" class="form-control" id="tenCongTy" placeholder="Tên công ty" required>
    <div id="invalidTenCT" class="invalid-feedback">
    </div>
  </div>
  <div class="col-md-4 mb-3">
    <label for="triGiaHoaDon">Trị giá hóa đơn</label>
    <input type="text" class="form-control" id="triGiaHoaDon" placeholder="Trị giá hóa đon" required>
    <div id="invalidHoaDon" class="invalid-feedback">
    </div>
  </div>
  <div class="col-md-4 mb-3">
    <label for="danhGia">Đánh giá</label>
    <input type="text" class="form-control" id="danhGia" placeholder="Đánh giá" required>
    <div id="invalidDanhGia" class="invalid-feedback">
    </div>
  </div>
  </div>
    `
  }
  // console.log("set extra roi");
  document.getElementById("thuocTinhExtra").innerHTML = content;
  
}



document.getElementById("loai").onchange = renderThuocTinhExtra;





document.getElementById("btnThemNguoi").addEventListener("click", () => {

  // let arrInput = document.querySelectorAll("#personForm input, #personForm select")
  
  // // console.log(arrInput);

  // var loai = document.getElementById("loai").value
  
  // var person;
  // if(loai == "loai1"){
  //   person = new Student();
  // }else if(loai == "loai2"){
  //   person = new Employee();
  // }else if(loai == "loai3"){
  //   person = new Customer();
  // }

  // for(let input of arrInput){
  //   let {id, value} = input;
  //   person[id] = value;
  // }

  let person = createAPerson();

  if(person){

    listPerson.addPerson(person);
    listPerson.renderTable("all");
    listPerson.luuLocal();
    document.getElementById("thuocTinhExtra").innerHTML = "";
    document.getElementById("personForm").reset();
  }else{
    console.log("did not create person");
  }

})

window.deletePerson =  (personID) => {
  console.log(personID);
  listPerson.deletePerson(personID);
}

window.layThongTinPerson = (personID) => {
  console.log(personID);
  clearInvalid();
  listPerson.layThongTinPerson(personID);
}

document.getElementById("btnThem").addEventListener("click", () => {
  document.getElementById("thuocTinhExtra").innerHTML = "";
  document.getElementById("personForm").reset();
  clearInvalid()
  document.getElementById("personID").disabled = false;
  document.getElementById("btnCapNhat").disabled = true;
  document.getElementById("btnThemNguoi").disabled = false;
});

// document.getElementById("personForm").onblur = () => {
//   console.log("clearing form");
//   document.getElementById("thuocTinhExtra").innerHTML = "";
//   document.getElementById("personForm").reset();
// }

document.getElementById("btnCapNhat").addEventListener("click", () => {
  console.log("dang cap nhat");
  let personID = document.getElementById("personID").value;
  // let arrInput = document.querySelectorAll("#personForm input, #personForm select");
  // var loai = document.getElementById("loai").value
  
  // var person;
  // if(loai == "loai1"){
  //   person = new Student();
  // }else if(loai == "loai2"){
  //   person = new Employee();
  // }else if(loai == "loai3"){
  //   person = new Customer();
  // }

  // for(let input of arrInput){
  //   let {id, value} = input;
  //   person[id] = value;
  // }
  // console.log(person);
  let person = createAPerson();
  if(person){
    document.getElementById("thuocTinhExtra").innerHTML = "";
    document.getElementById("personForm").reset();
    clearInvalid()
    document.getElementById("btnClose").click();
    listPerson.updatePerson(personID, person);
  }
});

// filter loai


let varFilterBtn = document.querySelectorAll(".row .btn");
for(let btn of varFilterBtn){
  btn.onclick = () => {
    listPerson.renderTable(btn.id);
    let current = document.getElementsByClassName("active");
    if (current.length > 0) { 
      current[0].className = current[0].className.replace(" active", "");
    }
    btn.className += " active";
  }

}

// sort

document.getElementById("sortNameAZ").onclick = () => {
  listPerson.sortNameAZ();
}

document.getElementById("sortNameZA").onclick = () => {
  listPerson.sortNameZA();
}


function clearInvalid() {
  console.log("clearing invalid");
  let invalidFeed = document.querySelectorAll(".invalid-feedback");
  for(let feed of invalidFeed){
    // console.log(feed);
    feed.innerHTML = "";
    feed.style.display = "none";
  }
}

// document.querySelector(".modal-content").onblue = clearForm;






