function validate() {
    var ProductName = document.getElementById("Pname").value;
    var ProductID = document.getElementById("Pid").value;
    var Dept = document.getElementById("dep").value;
    var Bname = document.getElementById("brand").value;
   
   if (ProductName == "" || ProductID == "" || Dept == "" || Bname== "" ) 
   {
      alert("Form should be filled completely.");
    }
    else {
          if (!/[^a-zA-Z]/.test(ProductID))
           {
             alert("Product ID can only contain digits...");
           }
           else{
      if (confirm("Do you want to Add Product?") == true)
       {
        alert("Product Added");
       }
              }
}
}