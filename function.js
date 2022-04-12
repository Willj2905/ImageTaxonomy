var Q1 = 0;
var Q2 = 0;
var Q3 = 0;
var Q4 = 0;
var Q5 = 0;
var Q6 = 0;
var Q7 = 0;
var Q8 = 0;
var Q9 = 0;
var Q10 = 0;
var diagnosis = 0;
var name = "";

$("input").keypress(function(e) {
  if (e.which == 13) {
  results();
}
});

function results() {
  name = document.getElementById("name").value;
  if ((Q1 == 0) || (Q2 == 0) || (Q3 == 0) || (Q4 == 0) || (Q5 == 0) || (Q6 == 0) || (Q7 == 0) || (Q8 == 0) || (Q9 == 0) || (Q10 == 0) || (name == "")) {
    window.alert("Make sure to answer all questions and enter your name");
  }
  else {
  document.getElementById("patient1").innerHTML = name;
  document.getElementById("patient2").innerHTML = name;
  document.getElementById("patient3").innerHTML = name;
  document.getElementById("patient4").innerHTML = name;
  document.getElementById("patient5").innerHTML = name;
  document.getElementById("patient6").innerHTML = name;
  document.getElementById("questions").style.display = "none";
    diagnosis = (Q1 + Q2 + Q3 + Q4 + Q5 + Q6 + Q7 + Q8 + Q9 + Q10);
    if ((diagnosis <= 40) && (diagnosis > 35)) {
      document.getElementById("chlamydia").style.display = "block";
    }
    else if ((diagnosis <= 35) && (diagnosis > 30)) {
      document.getElementById("herpes").style.display = "block";
    }
    else if ((diagnosis <= 30) && (diagnosis > 25)) {
      document.getElementById("dumb").style.display = "block";
    }
    else if ((diagnosis <= 25) && (diagnosis > 20)) {
      document.getElementById("nude").style.display = "block";
    }
    else if ((diagnosis <= 20) && (diagnosis > 10)) {
      document.getElementById("dehydrate").style.display = "block";
    }
    else if (diagnosis == 10) {
      document.getElementById("healthy").style.display = "block";
    }
  }
  };

function select(image) {
   if (image.id == "img1") {
     Q1 = 1;
     image.style.filter = "opacity(100%)";
     document.getElementById('img2').style.filter = "opacity(50%)";
     document.getElementById('img3').style.filter = "opacity(50%)";
     document.getElementById('img4').style.filter = "opacity(50%)";
   }
   else if (image.id == "img2") {
     Q1 = 2;
     image.style.filter = "opacity(100%)";
     document.getElementById('img1').style.filter = "opacity(50%)";
     document.getElementById('img3').style.filter = "opacity(50%)";
     document.getElementById('img4').style.filter = "opacity(50%)";
   }
   else if (image.id == "img3") {
     Q1 = 3;
     image.style.filter = "opacity(100%)";
     document.getElementById('img1').style.filter = "opacity(50%)";
     document.getElementById('img2').style.filter = "opacity(50%)";
     document.getElementById('img4').style.filter = "opacity(50%)";
   }
   else if (image.id == "img4") {
     Q1 = 4;
     image.style.filter = "opacity(100%)";
     document.getElementById('img1').style.filter = "opacity(50%)";
     document.getElementById('img2').style.filter = "opacity(50%)";
     document.getElementById('img3').style.filter = "opacity(50%)";
   }
   else if (image.id == "img5") {
     Q2 = 1;
     image.style.filter = "opacity(100%)";
     document.getElementById('img6').style.filter = "opacity(50%)";
     document.getElementById('img7').style.filter = "opacity(50%)";
     document.getElementById('img8').style.filter = "opacity(50%)";
   }
   else if (image.id == "img6") {
     Q2 = 2;
     image.style.filter = "opacity(100%)";
     document.getElementById('img5').style.filter = "opacity(50%)";
     document.getElementById('img7').style.filter = "opacity(50%)";
     document.getElementById('img8').style.filter = "opacity(50%)";
   }
   else if (image.id == "img7") {
     Q2 = 3;
     image.style.filter = "opacity(100%)";
     document.getElementById('img5').style.filter = "opacity(50%)";
     document.getElementById('img6').style.filter = "opacity(50%)";
     document.getElementById('img8').style.filter = "opacity(50%)";
   }
   else if (image.id == "img8") {
     Q2 = 4;
     image.style.filter = "opacity(100%)";
     document.getElementById('img5').style.filter = "opacity(50%)";
     document.getElementById('img6').style.filter = "opacity(50%)";
     document.getElementById('img7').style.filter = "opacity(50%)";
   }
   else if (image.id == "img9") {
     Q3 = 1;
     image.style.filter = "opacity(100%)";
     document.getElementById('img10').style.filter = "opacity(50%)";
     document.getElementById('img11').style.filter = "opacity(50%)";
     document.getElementById('img12').style.filter = "opacity(50%)";
   }
   else if (image.id == "img10") {
     Q3 = 2;
     image.style.filter = "opacity(100%)";
     document.getElementById('img9').style.filter = "opacity(50%)";
     document.getElementById('img11').style.filter = "opacity(50%)";
     document.getElementById('img12').style.filter = "opacity(50%)";
   }
   else if (image.id == "img11") {
     Q3 = 3;
     image.style.filter = "opacity(100%)";
     document.getElementById('img9').style.filter = "opacity(50%)";
     document.getElementById('img10').style.filter = "opacity(50%)";
     document.getElementById('img12').style.filter = "opacity(50%)";
   }
   else if (image.id == "img12") {
     Q3 = 4;
     image.style.filter = "opacity(100%)";
     document.getElementById('img9').style.filter = "opacity(50%)";
     document.getElementById('img10').style.filter = "opacity(50%)";
     document.getElementById('img11').style.filter = "opacity(50%)";
   }
   else if (image.id == "img13") {
     Q4 = 1;
     image.style.filter = "opacity(100%)";
     document.getElementById('img14').style.filter = "opacity(50%)";
     document.getElementById('img15').style.filter = "opacity(50%)";
     document.getElementById('img16').style.filter = "opacity(50%)";
   }
   else if (image.id == "img14") {
     Q4 = 2;
     image.style.filter = "opacity(100%)";
     document.getElementById('img13').style.filter = "opacity(50%)";
     document.getElementById('img15').style.filter = "opacity(50%)";
     document.getElementById('img16').style.filter = "opacity(50%)";
   }
   else if (image.id == "img15") {
     Q4 = 3;
     image.style.filter = "opacity(100%)";
     document.getElementById('img13').style.filter = "opacity(50%)";
     document.getElementById('img14').style.filter = "opacity(50%)";
     document.getElementById('img16').style.filter = "opacity(50%)";
   }
   else if (image.id == "img16") {
     Q4 = 4;
     image.style.filter = "opacity(100%)";
     document.getElementById('img13').style.filter = "opacity(50%)";
     document.getElementById('img14').style.filter = "opacity(50%)";
     document.getElementById('img15').style.filter = "opacity(50%)";
   }
   else if (image.id == "img17") {
     Q5 = 1;
     image.style.filter = "opacity(100%)";
     document.getElementById('img18').style.filter = "opacity(50%)";
     document.getElementById('img19').style.filter = "opacity(50%)";
     document.getElementById('img20').style.filter = "opacity(50%)";
   }
   else if (image.id == "img18") {
     Q5 = 2;
     image.style.filter = "opacity(100%)";
     document.getElementById('img17').style.filter = "opacity(50%)";
     document.getElementById('img19').style.filter = "opacity(50%)";
     document.getElementById('img20').style.filter = "opacity(50%)";
   }
   else if (image.id == "img19") {
     Q5 = 3;
     image.style.filter = "opacity(100%)";
     document.getElementById('img17').style.filter = "opacity(50%)";
     document.getElementById('img18').style.filter = "opacity(50%)";
     document.getElementById('img20').style.filter = "opacity(50%)";
   }
   else if (image.id == "img20") {
     Q5 = 4;
     image.style.filter = "opacity(100%)";
     document.getElementById('img17').style.filter = "opacity(50%)";
     document.getElementById('img18').style.filter = "opacity(50%)";
     document.getElementById('img19').style.filter = "opacity(50%)";
   }
   else if (image.id == "img21") {
     Q6 = 1;
     image.style.filter = "opacity(100%)";
     document.getElementById('img22').style.filter = "opacity(50%)";
     document.getElementById('img23').style.filter = "opacity(50%)";
     document.getElementById('img24').style.filter = "opacity(50%)";
   }
   else if (image.id == "img22") {
     Q6 = 2;
     image.style.filter = "opacity(100%)";
     document.getElementById('img21').style.filter = "opacity(50%)";
     document.getElementById('img23').style.filter = "opacity(50%)";
     document.getElementById('img24').style.filter = "opacity(50%)";
   }
   else if (image.id == "img23") {
     Q6 = 3;
     image.style.filter = "opacity(100%)";
     document.getElementById('img21').style.filter = "opacity(50%)";
     document.getElementById('img22').style.filter = "opacity(50%)";
     document.getElementById('img24').style.filter = "opacity(50%)";
   }
   else if (image.id == "img24") {
     Q6 = 4;
     image.style.filter = "opacity(100%)";
     document.getElementById('img21').style.filter = "opacity(50%)";
     document.getElementById('img22').style.filter = "opacity(50%)";
     document.getElementById('img23').style.filter = "opacity(50%)";
   }
   else if (image.id == "img25") {
     Q7 = 1;
     image.style.filter = "opacity(100%)";
     document.getElementById('img26').style.filter = "opacity(50%)";
     document.getElementById('img27').style.filter = "opacity(50%)";
     document.getElementById('img28').style.filter = "opacity(50%)";
   }
   else if (image.id == "img26") {
     Q7 = 2;
     image.style.filter = "opacity(100%)";
     document.getElementById('img25').style.filter = "opacity(50%)";
     document.getElementById('img27').style.filter = "opacity(50%)";
     document.getElementById('img28').style.filter = "opacity(50%)";
   }
   else if (image.id == "img27") {
     Q7 = 3;
     image.style.filter = "opacity(100%)";
     document.getElementById('img25').style.filter = "opacity(50%)";
     document.getElementById('img26').style.filter = "opacity(50%)";
     document.getElementById('img28').style.filter = "opacity(50%)";
   }
   else if (image.id == "img28") {
     Q7 = 4;
     image.style.filter = "opacity(100%)";
     document.getElementById('img25').style.filter = "opacity(50%)";
     document.getElementById('img26').style.filter = "opacity(50%)";
     document.getElementById('img27').style.filter = "opacity(50%)";
   }
   else if (image.id == "img29") {
     Q8 = 1;
     image.style.filter = "opacity(100%)";
     document.getElementById('img30').style.filter = "opacity(50%)";
     document.getElementById('img31').style.filter = "opacity(50%)";
     document.getElementById('img32').style.filter = "opacity(50%)";
   }
   else if (image.id == "img30") {
     Q8 = 2;
     image.style.filter = "opacity(100%)";
     document.getElementById('img29').style.filter = "opacity(50%)";
     document.getElementById('img31').style.filter = "opacity(50%)";
     document.getElementById('img32').style.filter = "opacity(50%)";
   }
   else if (image.id == "img31") {
     Q8 = 3;
     image.style.filter = "opacity(100%)";
     document.getElementById('img29').style.filter = "opacity(50%)";
     document.getElementById('img30').style.filter = "opacity(50%)";
     document.getElementById('img32').style.filter = "opacity(50%)";
   }
   else if (image.id == "img32") {
     Q8 = 4;
     image.style.filter = "opacity(100%)";
     document.getElementById('img29').style.filter = "opacity(50%)";
     document.getElementById('img30').style.filter = "opacity(50%)";
     document.getElementById('img31').style.filter = "opacity(50%)";
   }
   else if (image.id == "img33") {
     Q9 = 1;
     image.style.filter = "opacity(100%)";
     document.getElementById('img34').style.filter = "opacity(50%)";
     document.getElementById('img35').style.filter = "opacity(50%)";
     document.getElementById('img36').style.filter = "opacity(50%)";
   }
   else if (image.id == "img34") {
     Q9 = 2;
     image.style.filter = "opacity(100%)";
     document.getElementById('img33').style.filter = "opacity(50%)";
     document.getElementById('img35').style.filter = "opacity(50%)";
     document.getElementById('img36').style.filter = "opacity(50%)";
   }
   else if (image.id == "img35") {
     Q9 = 3;
     image.style.filter = "opacity(100%)";
     document.getElementById('img33').style.filter = "opacity(50%)";
     document.getElementById('img34').style.filter = "opacity(50%)";
     document.getElementById('img36').style.filter = "opacity(50%)";
   }
   else if (image.id == "img36") {
     Q9 = 4;
     image.style.filter = "opacity(100%)";
     document.getElementById('img33').style.filter = "opacity(50%)";
     document.getElementById('img34').style.filter = "opacity(50%)";
     document.getElementById('img35').style.filter = "opacity(50%)";
   }
   else if (image.id == "img37") {
     Q10 = 1;
     image.style.filter = "opacity(100%)";
     document.getElementById('img38').style.filter = "opacity(50%)";
     document.getElementById('img39').style.filter = "opacity(50%)";
     document.getElementById('img40').style.filter = "opacity(50%)";
   }
   else if (image.id == "img38") {
     Q10 = 2;
     image.style.filter = "opacity(100%)";
     document.getElementById('img37').style.filter = "opacity(50%)";
     document.getElementById('img39').style.filter = "opacity(50%)";
     document.getElementById('img40').style.filter = "opacity(50%)";
   }
   else if (image.id == "img39") {
     Q10 = 3;
     image.style.filter = "opacity(100%)";
     document.getElementById('img37').style.filter = "opacity(50%)";
     document.getElementById('img38').style.filter = "opacity(50%)";
     document.getElementById('img40').style.filter = "opacity(50%)";
   }
   else if (image.id == "img40") {
     Q10 = 4;
     image.style.filter = "opacity(100%)";
     document.getElementById('img37').style.filter = "opacity(50%)";
     document.getElementById('img38').style.filter = "opacity(50%)";
     document.getElementById('img39').style.filter = "opacity(50%)";
   }
}
