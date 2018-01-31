
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

    currole(data.basics.curex.crole);
    curdate(data.basics.curex.cdate);
    curdept(data.basics.curex.cdept);
    curlocation(data.basics.curex.cloc);
    curdesc(data.basics.curex.cdesc);

	my_new(data.basics.new);
	
	education(data.basics.education);

	achievement(data.basics.achievements);
	
	experience(data.basics.experience);
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
	

	
	function my_new(work){ 
	for(var i in work){
		//console.log(exp);
		console.log(work[i].company);
		/*console.log(exp.role);
		console.log(exp.startDate);
		console.log(exp.endDate);*/
	}
	}
	

	function education(edu){
		var j;
		//console.log(edu.length);
		var nums = document.getElementById("list");
		var listItem = nums.getElementsByTagName("li");
		for(j=0; j<edu.length; j++){
			var output="<p style='font-weight:550'>" + edu[j].degree + "</p>" +
			"<p style='color:green'>" + edu[j].college + "</p>"+ "<p>" + edu[j].location + "<p>";
			
			var li = listItem[j];
			li.innerHTML = output;
		}
		
		
	}
	
	function achievement(achiev){
		var l;
		var num=document.getElementById("achieve");
		var item=num.getElementsByTagName("li");
		for(l=0; l<achiev.length; l++){
			var op="<p style='font-weight:500'>" + achiev[l].achievement +"</p>";
			
			var ni=item[l];
			ni.innerHTML=op;
		}
	}
	
	function experience(exp){
		var m;
		var div=document.getElementById("pexe");
		var idiv=div.getElementsByTagName("div");
		for(m=0;m<exp.length; m++){
			console.log(exp[m].role);
			var odiv="<p style='font-weight:550'>"+ exp[m].role + "<p>"+ "<p style='color:green'>"+exp[m].date+"</p>" +
			"<p>" +exp[m].dept+"</p>" + "<p>"+exp[m].location+"</p>"+"<span>"+exp[m].desc+"</span>";
			var ditem=idiv[m];
			ditem.innerHTML=odiv;
			//document.getElementById('pexe').innerHTML=exp[m].role;
		}
	}


})();
