const form = document.querySelector("form"),
fileInput = document.querySelector(".file-input"),
progressArea = document.querySelector(".progress-area"),
uploadedArea = document.querySelector(".uploaded-area");
form.addEventListener("click", () =>{
  fileInput.click();
});

function fileValidation(){
  var filePath = fileInput.value;
  var fileName=filePath
  var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
  if(!allowedExtensions.exec(filePath)){
      alert('Please upload file having extensions .jpeg/.jpg/.png only.');
      fileInput.value = '';
      return false;
  }
  else{
    uploadFile(fileName);
    $(".gg").show();
    $(".wrapper").hide();  
  }
}

function uploadFile(name){
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/success");
  document.getElementById("myform").submit();
}