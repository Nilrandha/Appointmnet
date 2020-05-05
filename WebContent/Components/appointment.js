$(document).ready(function()
{
	if ($("#alertSuccess").text().trim() == "")
	{
		$("#alertSuccess").hide();
	}
	$("#alertError").hide();
});

//Save==========================
$(document).on("click", "#btnSave", function(event)
	{
		
	
	// Clear alerts---------------------
	 $("#alertSuccess").text("");
	 $("#alertSuccess").hide();
	 $("#alertError").text("");
	 $("#alertError").hide();
	 
	 
	// Form validation-------------------
	 var status = validateItemForm();
	 if (status != true)
	  {
	  $("#alertError").text(status);
	  $("#alertError").show();
	  return;
	  }
		
	// If valid------------------------
	 $("#formItem").submit();

		
});

//UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
{

 $("#hidItemIDSave").val($(this).closest("tr").find('#hidItemIDUpdate').val());
 $("#patientName").val($(this).closest("tr").find('td:eq(0)').text());
 $("#gender").val($(this).closest("tr").find('td:eq(1)').text());
 $("#contactNo").val($(this).closest("tr").find('td:eq(2)').text());
 $("#hospitalName").val($(this).closest("tr").find('td:eq(3)').text());
 $("#doctorName").val($(this).closest("tr").find('td:eq(4)').text());
 $("#appointmentDate").val($(this).closest("tr").find('td:eq(5)').text());

}); 



//CLIENTMODEL=========================================================================
function validateItemForm()
{
	// NAME
	if ($("#patientName").val().trim() == "")
	{
		return "Insert Patient Name.";
	}
	// GENDER
	if ($("#gender").val().trim() == "")
	{
		return "Insert Gender.";
	} 

	// 4N NUMBER-------------------------------
	if ($("#contactNo").val().trim() == "")
	{
		return "Insert Contact Number.";
	}

/*	// is numerical value
	var tmpPrice = $("#itemPrice").val().trim();
	if (!$.isNumeric(tmpPrice))
	{
		return "Insert a numerical value for Item Price.";
	}
	// convert to decimal price
	$("#itemPrice").val(parseFloat(tmpPrice).toFixed(2));
*/	
	
	// HOSPITAL------------------------
	if ($("#hospitalName").val().trim() == "")
	{
		return "Insert A Hospital Name.";
	}
	
	// DOCTOR------------------------
	if ($("#doctorName").val().trim() == "")
	{
		return "Insert A Doctor Name.";
	}
	

	// DATE------------------------
	if ($("#appointmentDate").val().trim() == "")
	{
		return "Insert A Appointment Date.";
		
	}
	return true;
}





