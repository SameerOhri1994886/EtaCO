function validate(){
    if (confirm("Do you want to log out?") == true) {
        document.getElementById("logout").href = "HomePage.html"
      }
    }
    function search(){
      var a=document.getElementById("search").value;
      if(a==""){
        alert("Please enter any item to search");
      }
      else if(a=="Apple"||a=="apple"){
       location.href="Fruits.html";
      }
      else if(a=="Banana"||a=="banana"){
        location.href="Fruits.html";
       }
       else if(a=="Orange"||a=="orange"){
        location.href="Fruits.html";
       }
       else if(a=="Kiwi"||a=="kiwi"){
        location.href="Fruits.html";
       }
       else if(a=="Watermelon"||a=="watermelon"){
        location.href="Fruits.html";
       }
       else if(a=="Bread"||a=="bread"){
        location.href="Bakery.html";
       }
       else if(a=="Italian Bread"||a=="italian bread"){
        location.href="Bakery.html";
       }
       else if(a=="White Pita Bread"||a=="white pita bread"){
        location.href="Bakery.html";
       }
       else if(a=="9 Submarine Rolls"||a=="9 submarine rolls"){
        location.href="Bakery.html";
       }
       else if(a=="Hamburger Buns"||a=="hamburger buns"){
        location.href="Bakery.html";
       }
       else if(a=="French Baguettes"||a=="french baguettes"){
        location.href="Bakery.html";
       }
       else if(a=="Eggs"||a=="eggs"){
        location.href="Dairy&Eggs.html";
       }
       else if(a=="Butter"||a=="butter"){
        location.href="Dairy&Eggs.html";
       }
       else if(a=="Custard"||a=="custard"){
        location.href="Dairy&Eggs.html";
       }
       else if(a=="White Mushroom"||a=="white mushroom"){
        location.href="Vegetables.html";
       }
       else if(a=="Yellow Onion"||a=="yellow onion"){
        location.href="Vegetables.html";
       }
       else if(a=="Green Onion"||a=="green onion"){
        location.href="Vegetables.html";
       }
       else if(a=="Apple iPhone 12 Pro Max Case"){
        location.href="Mobile.html";
       }
       else if(a=="Apple iPhone 12 Pro "){
        location.href="Mobile.html";
       }
       else if(a=="Apple Earpods"){
        location.href="Mobile.html";
       }
       else if(a=="Apple iPhone 12 Pro Max Case"){
        location.href="Mobile.html";
       }
       else if(a=="Homecoming by Kass Morgan"){
        location.href="Books.html";
       }
       else if(a=="Heart of Ash"){
        location.href="Books.html";
       }
       else if(a=="King"){
        location.href="Books.html";
       }
       else{
         alert("Enter Valid Keyword...");
       }

       
}
