function validate(){
    if (confirm("Do you want to log out?") == true) {
        //alert("Order Confirmed");
        document.getElementById("logout").href = "HomePage.html"
      }
}
