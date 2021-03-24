function display(){
    document.getElementById("ivn").innerHTML=localStorage.getItem("txtValue");
    document.getElementById("date").innerHTML=localStorage.getItem("txtValue1");
    document.getElementById("Cname").innerHTML=localStorage.getItem("txtValue2");
    document.getElementById("address").innerHTML=localStorage.getItem("txtValue3");
    document.getElementById("sno").innerHTML=localStorage.getItem("txtValue4");
    document.getElementById("Pid").innerHTML=localStorage.getItem("txtValue5");
    document.getElementById("Iname").innerHTML=localStorage.getItem("txtValue6");
    document.getElementById("qty").innerHTML=localStorage.getItem("txtValue7");
    document.getElementById("price").innerHTML=localStorage.getItem("txtValue8");
    document.getElementById("amt").innerHTML=localStorage.getItem("txtValue9");

    document.getElementById("sno1").innerHTML=localStorage.getItem("txtValue10");
    document.getElementById("Pid1").innerHTML=localStorage.getItem("txtValue11");
    document.getElementById("Iname1").innerHTML=localStorage.getItem("txtValue12");
    document.getElementById("qty1").innerHTML=localStorage.getItem("txtValue13");
    document.getElementById("price1").innerHTML=localStorage.getItem("txtValue14");
    document.getElementById("amt1").innerHTML=localStorage.getItem("txtValue15");

    document.getElementById("sno2").innerHTML=localStorage.getItem("txtValue16");
    document.getElementById("Pid2").innerHTML=localStorage.getItem("txtValue17");
    document.getElementById("Iname2").innerHTML=localStorage.getItem("txtValue18");
    document.getElementById("qty2").innerHTML=localStorage.getItem("txtValue19");
    document.getElementById("price2").innerHTML=localStorage.getItem("txtValue20");
    document.getElementById("amt2").innerHTML=localStorage.getItem("txtValue21");

    document.getElementById("sno3").innerHTML=localStorage.getItem("txtValue22");
    document.getElementById("Pid3").innerHTML=localStorage.getItem("txtValue23");
    document.getElementById("Iname3").innerHTML=localStorage.getItem("txtValue24");
    document.getElementById("qty3").innerHTML=localStorage.getItem("txtValue25");
    document.getElementById("price3").innerHTML=localStorage.getItem("txtValue26");
    document.getElementById("amt3").innerHTML=localStorage.getItem("txtValue27");

    document.getElementById("sno4").innerHTML=localStorage.getItem("txtValue28");
    document.getElementById("Pid4").innerHTML=localStorage.getItem("txtValue29");
    document.getElementById("Iname4").innerHTML=localStorage.getItem("txtValue30");
    document.getElementById("qty4").innerHTML=localStorage.getItem("txtValue31");
    document.getElementById("price4").innerHTML=localStorage.getItem("txtValue32");
    document.getElementById("amt4").innerHTML=localStorage.getItem("txtValue33");

}
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
    var Amt = Qty*Price;
    
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
function getAmt(){
    var Qty = document.getElementById("qty").value;
    var Price = document.getElementById("price").value;
    var Amt = Qty*Price;
    document.getElementById("amt").innerHTML=Amt;
}
function getAmt1(){
    var Qty = document.getElementById("qty1").value;
    var Price = document.getElementById("price1").value;
    var Amt1 = Qty*Price;
    document.getElementById("amt1").innerHTML=Amt1;
}
function getAmt2(){
    var Qty = document.getElementById("qty2").value;
    var Price = document.getElementById("price2").value;
    var Amt2 = Qty*Price;
    document.getElementById("amt2").innerHTML=Amt2;
}
function getAmt3(){
    var Qty3 = document.getElementById("qty3").value;
    var Price3 = document.getElementById("price3").value;
    var Amt3 = Qty3*Price3;
    document.getElementById("amt3").innerHTML=Amt3;
}
function getAmt4(){
    var Qty4= document.getElementById("qty4").value;
    var Price4 = document.getElementById("price4").value;
    var Amt4 = Qty4*Price4;
    document.getElementById("amt4").innerHTML=Amt4;
}
function getTotal(){
    var Qty = document.getElementById("qty").value;
    var Price = document.getElementById("price").value;
    var Amt = Qty*Price;
    var Qty = document.getElementById("qty1").value;
    var Price = document.getElementById("price1").value;
    var Amt1 = Qty*Price;
    var Qty = document.getElementById("qty2").value;
    var Price = document.getElementById("price2").value;
    var Amt2 = Qty*Price;
    var Qty3 = document.getElementById("qty3").value;
    var Price3 = document.getElementById("price3").value;
    var Amt3 = Qty3*Price3;
    var Qty4 = document.getElementById("qty4").value;
    var Price4 = document.getElementById("price4").value;
    var Amt4 = Qty4*Price4;
    Total=Amt+Amt1+Amt2+Amt3+Amt4;
    document.getElementById("total").innerHTML=Total;
}
