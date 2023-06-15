import {Person, Student, Employee, Customer } from "./Person.js";

import { renderThuocTinhExtra } from "../controllers/index.js";

export default class ListPerson{
  constructor(){
    this.arrPerson = [];
  }

  renderTable(loaiPerson){
    let content = "";
    var tempArr = [...this.arrPerson];
    if(loaiPerson != "all"){
      tempArr = this.arrPerson.filter(person => person.loai == loaiPerson);
    }
    console.log(tempArr);

    tempArr.map((personLocal, index) => {
    // console.log(personLocal);
    var loaiLocal = personLocal.loai;
    // console.log(loaiLocal);
    var person;
    if(loaiLocal == "loai1"){
      person = new Student();
      Object.assign(person, personLocal);
    }else if(loaiLocal == "loai2"){
      person = new Employee();
      Object.assign(person, personLocal);
    }else if(loaiLocal == "loai3"){
      person = new Customer();
      Object.assign(person, personLocal);
    }
    // console.log(person);

    content += `
        <tr>
          <td>${person.personID}</td>
          <td>${person.hoTen}</td>
          <td>${person.email}</td>
          <td>${this.displayLoaiDung(person)}</td>
          <td>${this.thuocTinh(person)}</td>
          <td>
            <button class="btn btn-warning" data-toggle="modal" data-target="#myModal" onclick="layThongTinPerson(${person.personID})">
              <i class="fa fa-edit"></i>
            </button>
            <button class="btn btn-danger" onclick="deletePerson(${person.personID})">
              <i class="fa fa-trash"></i>
            </button>
          </td>
        </tr>
        `
    

    })

    document.getElementById("tblDanhSach").innerHTML = content;
  }

  displayLoaiDung(person){
    if(person.loai == "loai1"){
      return "Student";
    }else if(person.loai == "loai2"){
      return "Employee";
    }else if(person.loai == "loai3"){
      return "Customer";
    }
}

  thuocTinh(person){
    // console.log(person.loai);
    if(person.loai == "loai1"){
      return "Điểm toán: " + person.toan + " | Điểm lý: " + person.ly + " | Điểm hóa: " + person.hoa + "<br>Điểm trung bình: " + person.tinhDTB();
    }else if(person.loai == "loai2"){
      return "Ngày làm: " + person.soNgayLam + "<br>Tỏng lương: $" + person.tinhLuong();
    }else if(person.loai == "loai3"){
      return "Công ty: " + person.tenCongTy + " <br>Giá hoá đơn: $" +person.triGiaHoaDon + "<br>Đánh giá: " + person.danhGia + ' <i class="fa fa-star"></i>';
    }
  }

  luuLocal() { 
    localStorage.setItem("arrPerson",JSON.stringify(this.arrPerson));
  }

  layLocal() {
    let personLocal = JSON.parse(localStorage.getItem("arrPerson"));
    // console.log(menuLocal);
    if(personLocal) {
      this.arrPerson = [...personLocal];
      // console.log(this.arrMenu);
      this.renderTable("all");
    }
  }


  addPerson(person){
    this.arrPerson.push(person);
  }

  findPerson(personID){
    return this.arrPerson.find(person => person.personID == personID);
  }

  deletePerson(personID){
    console.log("dinh delete person: " + personID);
    const index = this.arrPerson.findIndex(person => person.personID == personID);
    if(index !== -1){
      this.arrPerson.splice(index, 1);
      this.renderTable("all");
      this.luuLocal();
    }

  }

  layThongTinPerson(personID){
    let person = this.findPerson(personID);
    console.log(person);

    if(person){
      console.log("dinh lay thong tin person: " + personID);
      document.getElementById("btnThem").click();
      document.getElementById("personID").disabled = true;
      document.getElementById("btnCapNhat").disabled = false;
      document.getElementById("btnThemNguoi").disabled = true;
      document.getElementById("loai").value = person.loai;
      renderThuocTinhExtra();
      let arrInput = document.querySelectorAll(
        '#personForm input, #personForm select');

      for(let item of arrInput) {
        // let id = item.id;
        let{ id } = item;
        // console.log(id);
        item.value = person[id];
        // console.log(item.value);
      }
    }
  }

  updatePerson(personID, person){
    console.log("dinh update person: " + personID);
    const index = this.arrPerson.findIndex(person => person.personID == personID);
    if(index !== -1){
      Object.assign(this.arrPerson[index], person);
      // this.arrPerson[index] = person;
      this.renderTable("all");
      this.luuLocal();
    }
  }

  sortNameAZ(){
    this.arrPerson.sort((a, b) => {
      let tenA = a.hoTen.toLowerCase().trim();
      let tenB = b.hoTen.toLowerCase().trim();
      if(tenA > tenB) return 1;
      return -1;
    })
    this.renderTable("all");
  }

  sortNameZA(){
    this.arrPerson.sort((a, b) => {
      let tenA = a.hoTen.toLowerCase().trim();
      let tenB = b.hoTen.toLowerCase().trim();
      if(tenA < tenB) return 1;
      return -1;
    })
    this.renderTable("all");
  }

  
}