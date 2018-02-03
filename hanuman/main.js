
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

    name(data.basics.name);
    

	
	education(data.basics.education);

	achievement(data.basics.achievements);
	
	experience(data.basics.experience);

	 profile(data.basics.profile);

	 current_working(data.basics.curex);

  });

    function name (name) { document.getElementById("myname").innerHTML=name; }

	

	
	function my_new(work){ 
	for(var i in work){
		console.log(work[i].company);
	}
	}
	

	function education(edu){
		var j;
		//var nums = document.getElementById("list");
		var nums = document.querySelector("#list");
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
		}
	}

	function profile(pro){
		var a;
		console.log(pro.length);
		var profile_div=document.getElementById("profile");
		var profile_p=profile_div.getElementsByTagName("p");
		for(a=0; a<pro.length; a++){
			var profile_p_item=profile_p[a];
			profile_p_item.innerHTML="<i>"+pro[a].dob+"</i><p style='font-weight:500'>"+pro[a].role+"</p><p style='color:blue; font-weight:300'>"+pro[a].email+"</p><p>"+pro[a].location+"</p><p>"+pro[a].phone+"</p>";
		}

	}

	function current_working(cw){
		var c=0;
		console.log(cw.length);
		var exp_div=document.getElementById("exp");
		for(c=0; c<cw.length;c++){
			var exp_output="<p style='font-weight:600'>"+cw[c].crole+"</p><p style='color:red'>"+cw[c].cdate+"</p><p>"+cw[c].cdept+"</p><p>"+cw[c].cloc+"</p><br><p>"+cw[c].cdesc+"</p>";
			exp_div.innerHTML=exp_output;
		}
	}


})();
