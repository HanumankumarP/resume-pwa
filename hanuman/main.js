
(function() {
	var i;

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

  loadJSON("resources/hanuman.json", function(text){
    let data = JSON.parse(text);
    name(data.basics.name);
    education(data.basics.education);
    achievement(data.basics.achievements);
	experience(data.basics.experience);
	profile(data.basics.profile);
	current_working(data.basics.curex);
	skills(data.skills);
});

    function name (name) { document.getElementById("myname").innerHTML=name; }
	function education(edu){
		var nums = document.querySelector("#list");
		//var listItem = nums.getElementsByTagName("li");

		for(i=0; i<edu.length; i++){
			var listItem=document.createElement("li");
			var degree=document.createElement("p");
			degree.style.fontWeight="550";
			var college=document.createElement("p");
			college.style.color="#1A9B1A";
			var location=document.createElement("p");
			location.textContent=edu[i].location;
			degree.textContent=edu[i].degree;
			college.textContent=edu[i].college;
			listItem.appendChild(degree);
			listItem.appendChild(college);
			listItem.appendChild(location);
			nums.appendChild(listItem);
		}
		
	}
	
	function achievement(achiev){
		var num=document.getElementById("achieve");
		var item=num.getElementsByTagName("li");
		for(i=0; i<achiev.length; i++){
			var op="<p style='font-weight:500'>" + achiev[i].achievement +"</p>";
			var ni=item[i];
			ni.innerHTML=op;
		}
	}
	
	function experience(exp){
		var div=document.getElementById("pexe");
		var idiv=div.getElementsByTagName("div");
		for(i=0;i<exp.length; i++){
			console.log(exp[i].role);
			var odiv="<p style='font-weight:550'>"+ exp[i].role + "<p>"+ "<p style='color:green'>"+exp[i].date+"</p>" +
			"<p>" +exp[i].dept+"</p>" + "<p>"+exp[i].location+"</p>"+"<span>"+exp[i].desc+"</span>";
			var ditem=idiv[i];
			ditem.innerHTML=odiv;
		}
	}

	function profile(pro){
		console.log(pro.length);
		var profile_div=document.getElementById("profile");
		var profile_p=profile_div.getElementsByTagName("p");
		for(i=0; i<pro.length; i++){
			var profile_p_item=profile_p[i];
			profile_p_item.innerHTML="<i>"+pro[i].dob+"</i><p style='font-weight:500'>"+pro[i].role+"</p><p style='color:blue; font-weight:300'>"+pro[i].email+"</p><p>"+pro[i].location+"</p><p>"+pro[i].phone+"</p>";
		}

	}

	function current_working(cw){
		console.log(cw.length);
		var exp_div=document.querySelector(".exp");
		for(i in cw){
			var exp_output="<p style='font-weight:600'>"+cw[i].crole+"</p><p style='color:red'>"+cw[i].cdate+"</p><p>"+cw[i].cdept+"</p><p>"+cw[i].cloc+"</p><br><p>"+cw[i].cdesc+"</p>";
			exp_div.innerHTML=exp_output;
		}
	}

	function skills(skill){
		console.log(skill.length);
		var skill_div=document.querySelector(".skills");
		var table=document.createElement("table");
		var row="";
		for(i in skill){
			row +="<tr><td><strong>" + skill[i].name + "</strong></th><td>" + skill[i].keywords.join(', ') + "</td></tr>";
		}
		table.innerHTML=row;
		skill_div.appendChild(table);
	}


})();
