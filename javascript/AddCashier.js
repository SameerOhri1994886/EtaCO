function validate() {
    var CashierName = document.getElementById("Cname").value;
    var City = document.getElementById("city").value;
    var State = document.getElementById("state").value;
    var Country = document.getElementById("country").value;
    var Pin = document.getElementById("pin").value;
    var Phone = document.getElementById("phone").value;
    var Email = document.getElementById("email").value;
   if (CashierName == "" || City == "" || State == "" || Country == "" || Pin == "" || Phone == "" || Email == "" ) 
   {
      alert("Form should be filled completely.");
    }
    else {
          if (Pin.length != 6 || Phone.length !=10 || !/[^a-zA-Z]/.test(Phone))
           {
      alert("Invalid Value...");
           }
           else{
      if (confirm("Do you want to Add Cashier?") == true)
       {
        alert("Cashier Added");
       }
               }
}
}