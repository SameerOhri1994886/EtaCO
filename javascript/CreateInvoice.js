function validate() {
    var InvoiceNo = document.getElementById("ivn").value;
    var date = document.getElementById("date").value;
    var CustomerName = document.getElementById("Cname").value;
    var Address = document.getElementById("address").value;
    var SNo = document.getElementById("sno").value;
    var ProductID = document.getElementById("Pid").value;
    var ItemName = document.getElementById("Iname").value;
    var Qty = document.getElementById("qty").value;
    var Price = document.getElementById("price").value;
    var Amt = document.getElementById("amt").value;
    


   if (InvoiceNo == "" || date == "" ||CustomerName == "" || Address == "" || SNo == "" || ProductID == "" || ItemName == "" 
             || Qty == ""|| Price == "" || Amt == "") 
   {
      alert("Form should be filled completely.");
    }
    else {
        if (!/[^a-zA-Z]/.test(InvoiceNo)||!/[^a-zA-Z]/.test(SNo)||!/[^a-zA-Z]/.test(ProductID)||!/[^a-zA-Z]/.test(Qty)
            ||!/[^a-zA-Z]/.test(Price)||!/[^a-zA-Z]/.test(Amt))
        {
              alert("Please Enter the valid value...");
    
         }
          else{
              alert("Invoice Created!");
               }
    }
}