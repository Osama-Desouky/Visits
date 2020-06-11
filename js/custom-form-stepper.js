var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  var prevBtn=document.getElementById("prevBtn");
  var nextBtn=document.getElementById("nextBtn");
  if (n == 0) { 
    prevBtn.className = prevBtn.className.replace(" btn-primary", " btn-gray");
  } else {
    prevBtn.className = prevBtn.className.replace(" btn-gray", " btn-primary");
  }
  if(n ==x.length-1){

    nextBtn.className = nextBtn.className.replace(" btn-primary", " btn-gray");
  }
  else{
    nextBtn.className = nextBtn.className.replace(" btn-gray", " btn-primary");
  }
  // ... and run a function that displays the correct process indicator:
  fixprocessIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  resetTables(0);
  if(n==-1 && currentTab==0)return false;
  // Exit the function if any field in the current tab is invalid:
  // uncomment for Active Validation
  // if (n == 1 && !validateForm()) return false;
  if (n==1 && currentTab+1 >= x.length) {
    //...the form gets submitted:
    return false;
  }
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :

  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the process as finished and valid:
  if (valid) {
    document.getElementsByClassName("process")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixprocessIndicator(n) {
  // This function removes the "latest empty " class of all processs...

  var i, x = document.getElementsByClassName("process");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" latest", "");
    x[i].className = x[i].className.replace(" empty", "");

    var processTitle=x[i].getElementsByClassName("process-title")[0];
    processTitle.style.left=  -(processTitle.clientWidth/4)+"px";
    
  }
  //... and adds the "latest" class to the current process:
  for (i = n+1; i < x.length; i++) {
    x[i].className +=  " empty";
  }
  x[n].className += " latest";
}