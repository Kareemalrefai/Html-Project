function CalculateGrade() {
    var markInput=document.getElementById("markInput");
    var mark=Number(markInput.value);

    var resultElement =document.getElementById("result");
    var studantName =document.getElementById("nameInput");
    var GradeImage =document.getElementById("Gradeimage");
    let studantNameInput =studantName.value


    if(mark >=0 && mark <=49){
        resultElement.textContect=`Faild.${studantNameInput}`;
        
    GradeImage.src =
    "https://thumbs.dreamstime.com/z/failed-stamp-grunge-vintage-isolated-white-background-sign-148244680.jpg";

    }

    else{
        resultElement.textContent = "Approved" + `${studantNameInput}`;
        GradeImage.src =
        "https://th.bing.com/th/id/OIP.2hrMp6Ez1a-6wejuxoiVUQHaES?pid=ImgDet&rs=1";
    }

}