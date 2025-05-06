const qrText = document.getElementById("qr-text");
const sizes  = document.getElementById("Sizes");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const qrContainer = document.querySelector(".qr-body");

let size = sizes.value;

downloadBtn.addEventListener("click",(e)=>{
  if (qrText.value.length === 0) {
    e.preventDefault(); 
    alert("Enter the text or URL to generate your QR Code");
    return;
  }
  let img = document.querySelector(".qr-body img");
  if(img !== null){
    let imgaAtrr = img.getAttribute("src");
    downloadBtn.setAttribute("href",imgaAtrr)
  }
  else{
    downloadBtn.setAttribute("href",`${document.querySelector("canvas").toDataURL()}`)
  }
  
});

generateBtn.addEventListener("click",(e)=>{
  e.preventDefault();
  isEmptyInput();
});

sizes.addEventListener("change",(e)=>{
  size = e.target.value;
    isEmptyInput();
});

function isEmptyInput(){
 qrText.value.length > 0 ? generateQRCode(): alert("Enter the text or Url to generate your QR Code")
}

 function generateQRCode (){
  qrContainer.innerHTML = "";
 new QRCode(qrContainer,{
    text: qrText.value,
    height: size,
    width: size,
    colorLight:"#fff",
    colorDark:"#000",
 })};