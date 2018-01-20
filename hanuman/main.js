
(function() {

  function loadJSON(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
        callback(rawFile.responseText);
      }
    }
    rawFile.send(null);
  }

  //usage:
  loadJSON("resources/hanuman.json", function(text){
    let data = JSON.parse(text);
   // console.log(data.basics.email);
    name(data.basics.name);
    dob(data.basics.dob);
    phone(data.basics.phone);
    designation(data.basics.role);
    location(data.basics.location);
    email(data.basics.email);

    currole(data.basics.experience.currole);
    curdate(data.basics.experience.curdate);
    curdept(data.basics.experience.curdept);
    curlocation(data.basics.experience.curlocation);
    curdesc(data.basics.experience.curdesc);


    lrole(data.basics.experience.lrole);
    ldate(data.basics.experience.ldate);
    ldept(data.basics.experience.ldept);
    llocation(data.basics.experience.llocation);
    ldesc(data.basics.experience.ldesc);


    frole(data.basics.experience.frole);
    fdate(data.basics.experience.fdate);
    fdept(data.basics.experience.fdept);
    flocation(data.basics.experience.flocation);
    fdesc(data.basics.experience.fdesc);


    degree(data.basics.education.degree);
    college(data.basics.education.college);
    area(data.basics.education.area);


    degre(data.basics.education.degre);
    colleg(data.basics.education.colleg);
    loc(data.basics.education.loc);

    school(data.basics.education.school);
    sname(data.basics.education.sname);
    sloc(data.basics.education.sloc);

    ach1(data.basics.achievements.ach1);
    ach2(data.basics.achievements.ach2);
    ach3(data.basics.achievements.ach3);
    ach4(data.basics.achievements.ach4);
    ach5(data.basics.achievements.ach5);

  });

    function name (name) { document.getElementById("myname").innerHTML=name; }

    function dob(dob){ document.getElementById('dob').innerHTML=dob; }

    function designation (designation) { document.getElementById("role").innerHTML=designation; }

    function location(location){ document.getElementById('location').innerHTML=location; }

    function email (email) {document.getElementById("email").innerHTML=email; }

    function phone (phone) { document.getElementById("phone").innerHTML=phone; }

    function currole(currole) { document.getElementById("crole").innerHTML=currole;}

    function curdate(curdate) { document.getElementById("cdate").innerHTML=curdate;}

    function curdept(curdept) { document.getElementById("cdept").innerHTML=curdept; }

    function curlocation(curlocation) { document.getElementById("clocation").innerHTML=curlocation; }

    function curdesc(desc){ document.getElementById("cdesc").innerHTML=desc; }

    function lrole(lrole) { document.getElementById("lrole").innerHTML=lrole;}

    function ldate(ldate) { document.getElementById("ldate").innerHTML=ldate;}

    function ldept(ldept) { document.getElementById("ldept").innerHTML=ldept; }

    function llocation(llocation) { document.getElementById("llocation").innerHTML=llocation; }

    function ldesc(ldesc){ document.getElementById("ldesc").innerHTML=ldesc; }


    function frole(frole) { document.getElementById("frole").innerHTML=frole;}

    function fdate(fdate) { document.getElementById("fdate").innerHTML=fdate;}

    function fdept(fdept) { document.getElementById("fdept").innerHTML=fdept; }

    function flocation(flocation) { document.getElementById("flocation").innerHTML=flocation; }

    function fdesc(fdesc){ document.getElementById("fdesc").innerHTML=fdesc; }


    function degree(degree) { document.getElementById("degree").innerHTML=degree; }

    function college(college) { document.getElementById("college").innerHTML=college; }

    function area(area){ document.getElementById("area").innerHTML=area; }

    function degre(degre) { document.getElementById("degre").innerHTML=degre; }

    function colleg(colleg) { document.getElementById("colleg").innerHTML=colleg; }

    function loc(loc){ document.getElementById("loc").innerHTML=loc; }

     function school(school) { document.getElementById("school").innerHTML=school; }

    function sname(sname) { document.getElementById("sname").innerHTML=sname; }

    function sloc(sloc){ document.getElementById("sloc").innerHTML=sloc; }

    function ach1(ach1) { document.getElementById("ach1").innerHTML=ach1; }

    function ach2(ach2) { document.getElementById("ach2").innerHTML=ach2; }

    function ach3(ach3){ document.getElementById("ach3").innerHTML=ach3; }

    function ach4(ach4){ document.getElementById("ach4").innerHTML=ach4; }

    function ach5(ach5){ document.getElementById("ach5").innerHTML=ach5; }






    

  // function creatingSummary(summary){
  //   // var section = document.createElement("section");
  //   // section.classList.add("section", "main-summary");
  //   // var summary_section = document.createElement("section")
  //   var div = document.getElementById("f2");
  //   div.innerHTML = summary;
  //   // summary_section.appendChild(div);
  //   // section.appendChild(summary_section);
  //   // resumeDiv.appendChild(section);
  // }


})();
