function validate() {
    const ProductID = document.getElementById("Pid").value;
    const ProductName = document.getElementById("Pname").value;
   // ProductIDCell.innerHTML;
    if (ProductID == "" || ProductName == "") 
   {
      alert("Please fill the Fields...");
    }
    else{
    if (!/[^a-zA-Z]/.test(ProductID))
    {
          alert("ProductID should only contain digits...");
    }
     else{
      const table = document.getElementById("itable");
      const row = table.insertRow();
      const ProductIDCell=row.insertCell(0);
      const ProductNameCell=row.insertCell(1);
      ProductIDCell.innerHTML=ProductID;
      ProductNameCell.innerHTML=ProductName;
     }
    }
}