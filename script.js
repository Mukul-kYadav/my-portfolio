const submitBtn = document.getElementById("formSubmit");
const subBtndiv = document.getElementById("subBtndiv");
const showAtBtn = document.getElementById("showAtBtn");
submitBtn.addEventListener("click", function(){
    submitBtn.style.display="none";
    showAtBtn.style.display="block"
});