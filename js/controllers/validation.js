function kiemTraRong(checkInput,idThongBao){
  // console.log("checking empty");
  if(checkInput){
      document.getElementById(idThongBao).innerHTML = "";
      return true;
  }else {
      document.getElementById(idThongBao).innerHTML = "Input không được để trống";
      document.getElementById(idThongBao).style.display = "block";

      return false;
  }
}


function IDValid(){
  console.log("checking ID");
  var ID = document.getElementById("personID").value;
  var IDErr = document.getElementById("invalidID");
  
  if (ID.length < 4 || ID.length > 6){
      IDErr.innerHTML = "ID phải từ 4 đến 6 ký tự";
      IDErr.style.display = "block";
      // console.log("tai khoan khong hop le");
      return false;
  } else {
      IDErr.style.display = "none";
      // console.log("tai khoan hop le");
      return true;
  }
}

function hoTenValid(){
  console.log("checking name");

  var hoTen = document.getElementById("hoTen").value;
  var hoTenErr = document.getElementById("invalidHoTen");

  
  var regexHoTen = /^(?![\s]+$)[a-zA-Z\s.]*$/;
  if (!regexHoTen.test(hoTen)){
      hoTenErr.innerHTML = "Tên không hợp lệ, tên phải là chữ";
      hoTenErr.style.display = "block";
      // console.log("ten khong hop le");
      return false;
  }

  // console.log("ten hop le");
  return true;

}

function kiemTraDiaChi(checkInput,idThongBao){

  console.log("checking address");

  var diaChiErr = document.getElementById(idThongBao);
  var regexDiaChi = /^[a-zA-Z0-9\s,'-]*$/;

  var hopLe = regexDiaChi.test(checkInput) && checkInput.length > 0;

  if(hopLe){
      document.getElementById(idThongBao).innerHTML = "";
      diaChiErr.style.display = "none";
      // console.log("dia chi hop le");
      return true;
  }else {
      document.getElementById(idThongBao).innerHTML = "Địa chỉ không hợp lệ, <br> chỉ được chứa chữ, số, dấu , và ' '";
      diaChiErr.style.display = "block";
      // console.log("dia chi khong hop le");
      return false;
  }

}

function kiemTraEmail(checkInput,idThongBao){
  console.log("checking email");

  var emailErr = document.getElementById(idThongBao);
  var regexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  var hopLe = regexEmail.test(checkInput);

  if(hopLe){
      document.getElementById(idThongBao).innerHTML = "";
      emailErr.style.display = "none";
      // console.log("email hop le");
      return true;
  }else {
      document.getElementById(idThongBao).innerHTML = "Vui lòng nhập email hợp lệ, <br> ví dụ: example@gmail.com ";
      emailErr.style.display = "block";
      // console.log("email khong hop le");
      return false;
  }
}

function kiemTraLoaiNguoi(checkInput,idThongBao){
  console.log("checking loai nguoi");

  var loaiNguoiErr = document.getElementById(idThongBao);

  // // console.log(checkInput);
  if(checkInput == ""){
      document.getElementById(idThongBao).innerHTML = "Vui lòng chọn loại người dùng";
      loaiNguoiErr.style.display = "block";
      // console.log("chuc vu khong hop le");
      return false;
  }else {
      document.getElementById(idThongBao).innerHTML = "";
      loaiNguoiErr.style.display = "none";
      // console.log("chuc vu hop le");
      return true;
  }
}

function kiemTraDiem(checkInput,idThongBao) {
  console.log("checking diem");
  if(kiemTraRong(checkInput,idThongBao)){
  console.log(idThongBao);
  var diemErr = document.getElementById(idThongBao);
  var hopLe = checkInput * 1 >= 0 && checkInput * 1 <= 10;
  // console.log("diem hop le: " + hopLe);
  if(hopLe){

      document.getElementById(idThongBao).innerHTML = "";
      diemErr.style.display = "none";
      // console.log("diem hop le");
      return true;
  }else {
      document.getElementById(idThongBao).innerHTML = `Điểm không hợp lệ, điểm phải từ 0 đến 10`;
      diemErr.style.display = "block";
      // console.log("diem khong hop le");
      return false;
  }
}
}

function kiemTraLuong(checkInput,idThongBao) {
  console.log("checking luong");

  var luongErr = document.getElementById(idThongBao);

  var hopLe = checkInput >= 500000 && checkInput <= 5000000;

  if(hopLe){
      document.getElementById(idThongBao).innerHTML = "";
      luongErr.style.display = "none";
      // console.log("luong hop le");
      return true;
  }else {
      document.getElementById(idThongBao).innerHTML = "Lương không hợp lệ, lương phải từ 500.000 đến 5.000.000";
      luongErr.style.display = "block";
      // console.log("luong khong hop le");
      return false;
  }
}

function kiemTraNgayLam(checkInput,idThongBao){
  console.log("checking ngay lam");

  var ngayLamErr = document.getElementById(idThongBao);

  var hopLe = checkInput >= 80 && checkInput <= 200;

  if(hopLe){
      document.getElementById(idThongBao).innerHTML = "";
      ngayLamErr.style.display = "none";
      // console.log("gio lam hop le");
      return true;
  }else {
      document.getElementById(idThongBao).innerHTML = "Ngày làm phải từ 80 đến 200 ngày";
      ngayLamErr.style.display = "block";
      // console.log("gio lam khong hop le");
      return false;
  }
}

function kiemTraCongTy(checkInput,idThongBao){
  console.log("checking cong ty");
  
  var congTyErr = document.getElementById(idThongBao);

  
  var regexCongTy = /^(?![\s]+$)[a-zA-Z\s.]*$/;
  if (!regexCongTy.test(checkInput)){
      congTyErr.innerHTML = "Tên công ty không hợp lệ, tên phải là chữ";
      congTyErr.style.display = "block";
      // console.log("ten khong hop le");
      return false;
  }

  // console.log("ten hop le");
  return true;
}

function kiemTraHoaDon(checkInput,idThongBao){
  console.log("checking hoa don");
  var hoaDonErr = document.getElementById(idThongBao);

  var hopLe = checkInput >= 1000000 && checkInput <= 20000000;

  if(hopLe){
      document.getElementById(idThongBao).innerHTML = "";
      hoaDonErr.style.display = "none";
      // console.log("hoaDon hop le");
      return true;
  }else {
      document.getElementById(idThongBao).innerHTML = "Hóa đơn không hợp lệ, hóa đơn phải từ 1.000.000 đến 20.000.000";
      hoaDonErr.style.display = "block";
      // console.log("luong khong hop le");
      return false;
  }



}

function kiemTraDanhGia(checkInput,idThongBao){
  console.log("checking danh gia");
  if(kiemTraRong(checkInput,idThongBao)){
  var danhGiaErr = document.getElementById(idThongBao);

  var hopLe = checkInput >= 0 && checkInput <= 5;


  if(hopLe){
      document.getElementById(idThongBao).innerHTML = "";
      danhGiaErr.style.display = "none";
      // console.log("danhGia hop le");
      return true;
  }else {
      document.getElementById(idThongBao).innerHTML = "Đánh giá không hợp lệ, đánh giá phải từ 0 đến 5";
      danhGiaErr.style.display = "block";
      // console.log("danhGia khong hop le");
      return false;
  }
}
}


export {kiemTraRong, IDValid, hoTenValid, kiemTraDiaChi, kiemTraEmail, kiemTraLoaiNguoi, kiemTraDiem, kiemTraLuong, kiemTraNgayLam, kiemTraCongTy, kiemTraHoaDon , kiemTraDanhGia};
