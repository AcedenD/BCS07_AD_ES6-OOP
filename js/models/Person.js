class Person{
  constructor(personID, hoTen, diaChi, email, loai){
    this.personID = personID;
    this.hoTen = hoTen;
    this.diaChi = diaChi;
    this.email = email;
    this.loai = loai;
  }

}

class Student extends Person{
  constructor(personID, hoTen, diaChi, email, loai, toan, ly, hoa){
    super(personID, hoTen, diaChi, email, loai);
    this.toan = toan;
    this.ly = ly;
    this.hoa = hoa;
  }

  tinhDTB = () => {
    return ((this.toan *1 + this.ly*1 + this.hoa*1)/3).toFixed(2);
  }
}

class Employee extends Person{
  constructor(personID, hoTen, diaChi, email, loai, soNgayLam, luongNgay){
    super(personID, hoTen, diaChi, email, loai);
    this.soNgayLam = soNgayLam;
    this.luongNgay = luongNgay;
  }

  tinhLuong = () => {
    return this.soNgayLam*1 * this.luongNgay*1;
  }
}

class Customer extends Person{
  constructor(personID, hoTen, diaChi, email, loai, tenCongTy, triGiaHoaDon, danhGia){
    super(personID, hoTen, diaChi, email, loai);
    this.tenCongTy = tenCongTy;
    this.triGiaHoaDon = triGiaHoaDon;
    this.danhGia =  danhGia;
  }
}


export {Person, Student, Employee, Customer};