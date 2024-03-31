function validateInput() {
  var secretKey = document.getElementById("secretKey").value;
  var keyLength = parseInt(document.getElementById("keyLength").value);

  // Kiểm tra xem Secret Key có được nhập hay không
  if (secretKey === "") {
    //   alert("Please enter a Secret Key.");
    document.getElementById("error-message").innerHTML = "Please enter a Secret Key.";
    document.getElementById("error-message").style.display = "block";
    document.getElementById("error-message").style.color = "red";
    return false;
  }

  // Kiểm tra xem Length of Key có được chọn hay không
  // if (isNaN(keyLength)) {
  //   // alert("Please select a Length of Key.");
  //   document.getElementById("error-message").innerHTML = "Please select a Length of Key.";
  //   document.getElementById("error-message").style.display = "block";
  //   document.getElementById("error-message").style.color = "red";
  //   return false;
  // }

  // Kiểm tra xem Length of Key có hợp lệ hay không (128, 192, hoặc 256)
  if (![128, 192, 256].includes(keyLength)) {
      // alert("Invalid Length of Key. Please select 128, 192, or 256.");
    document.getElementById("error-message").innerHTML = "Invalid Length of Key. Please select 128, 192, or 256.";
    document.getElementById("error-message").style.display = "block";
    document.getElementById("error-message").style.color = "red";
    return false;
  }

  // Độ dài của Secret Key được tính bằng số lượng ký tự
  var secretKeyLength = secretKey.length * 8; // Đổi sang số bit

  // Kiểm tra xem độ dài của Secret Key có tương ứng với Length of Key hay không
  if (secretKeyLength !== keyLength) {
    //   alert("The length of the Secret Key does not match the selected Length of Key.");
    document.getElementById("error-message").innerHTML = "The length of the Secret Key does not match the selected Length of Key.";
    document.getElementById("error-message").style.display = "block";
    document.getElementById("error-message").style.color = "red";
    return false;
  }
  return true;
}