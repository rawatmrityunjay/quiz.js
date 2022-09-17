const quiz = [
    {
        "q":'Which hormone is known as fight or flight hormone .',
        "option":["Thyroxine","Adrenaline","Insulin","Oestrogen"],
        "answer":1
    },
    {
        "q":'Which organelle is known as the powerhouse of cell .',
        "option":["Ribosomes","Endoplasmic reticulum","Nuclei","Mitochondria"],
        "answer":3
    },
    {
        "q":"The deficiency of Thyroxine hormone causes .",
        "option":["Exopthalmic Goitre","Gigantism","Simple Goitre","Dwarfism"],
        "answer":2
    },
    {
        "q":"What is the chemical formula of Ammonium .",
        "option":["NH4","CaCO3","NH3","CH4"],
        "answer":0
    },
    {
        "q":"What is the valency of carbon . ",
        "option":["1","3","4","2"],
        "answer":2
    },
    {
        "q":"CGS unit of Gravitational Potential Energy . ",
        "option":["N","J/kg","erg","erg g-1"],
        "answer":3
    },
    {
        "q":"Formula of power . ",
        "option":["Work / Time","Speed / Time","Work * Time","Speed * Time"],
        "answer":0
    },
    {
        "q":"Who is known as the father of Indian Renaissance . ",
        "option":["Raja Ram Mohan Roy","Bal Gangadhar Tilak","A.O. Hume","Swami Vivekananda"],
        "answer":0
    },
    {
        "q":"Where did Renaissance start .",
        "option":["Germany","Russia","Belgium","Italy"],
        "answer":3
    },
    {
        "q":" When did Renaissance start . ",
        "option":["11th century","15th century","13th century","14th century"],
        "answer":3
    }
]


// quiz[i].a[0].text = a




var question ,
questionText, option;


let counter = 0;
let currentQuestion;
let availableQuestion = [];
let correctAnswer = 0;


function setquestion(){
    const value = quiz.length;
    for (let i = 1;i < value ; i++ ){

        availableQuestion.push(quiz)

    }

}




let i=0
currentQuestion = quiz;
function getquestion(){

    counter=counter+1
    question.innerHTML = "Question "+(counter)+" of "+(quiz.length);


    
    questionText.innerHTML = currentQuestion[i]['q'];

    document.getElementById("0").innerHTML = currentQuestion[i]["option"][0]
    document.getElementById("1").innerHTML = currentQuestion[i]["option"][1]
    document.getElementById("2").innerHTML = currentQuestion[i]["option"][2]
    document.getElementById("3").innerHTML = currentQuestion[i]["option"][3]





    i=i+1




    if(i == quiz.length){
        QuizOver()
       
    }

}





// let question_number = 0 ; 
function getresult(element){

    var id = parseInt(element.id)
    console.log(id)
        if (id == currentQuestion[i-1].answer) {

            console.log("answer is correct")
            element.classList.add("correct-answer")
            correctAnswer++;
            console.log("answer",correctAnswer)
        }
        else{
            console.log("answer is incorect")
            element.classList.add("incorrect-answer")
            
        }

    

        // question_number = question_number+1
}

function QuizOver(){

    window.location.href = "/template/result.html";
    document.getElementsByClassName(".tq").innerHTML = 10;
    result.querySelector(".lower_td").innerHTML=quiz.length;
  

}






window.onload = function(){
    question = document.querySelector(".question");
    questionText = document.querySelector(".questionText");
    option = document.querySelector(".option");
    // result=document.querySelector(".tQ")

    setquestion()
    getquestion()
}

