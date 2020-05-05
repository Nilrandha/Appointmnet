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
	// $("#formItem").submit();

	 var type = ($("#hidItemIDSave").val() == "") ? "POST" : "PUT";
	 
	 $.ajax(
			 {
			  url : "AppointmentAPI",
			  type : type,
			  data : $("#formItem").serialize(),
			  dataType : "text",
			  complete : function(response, status)
			  {
			  onItemSaveComplete(response.responseText, status);
			  }

		 });
		
});


function onItemSaveComplete(response, status)
{
 //Your code
	if (status== "success")
	{
		var resultSet = JSON.parse(response);
		
		if (resultSet.status.trim() == "success")
		{
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();
			
			$("#divItemsGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error")
		{
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
		
	}	else if (status == "error")
		{
			$("#alertError").text("Error while saving.");
			$("#alertError").show();
		} else
		{
			$("#alertError").text("Unknown error while saving..");
			$("#alertError").show();
		}
		
	$("#hidItemIDSave").val("");
	$("#formItem")[0].reset();
	
	
}


//UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
{
	$("#hidItemIDSave").val($(this).closest("tr").find('#hidItemIDUpdate').val());
	
 $("#hidItemIDSave").val($(this).closest("tr").find('#hidItemIDUpdate').val());
 $("#patientName").val($(this).closest("tr").find('td:eq(0)').text());
 $("#gender").val($(this).closest("tr").find('td:eq(1)').text());
 $("#contactNo").val($(this).closest("tr").find('td:eq(2)').text());
 $("#hospitalName").val($(this).closest("tr").find('td:eq(3)').text());
 $("#doctorName").val($(this).closest("tr").find('td:eq(4)').text());
 $("#appointmentDate").val($(this).closest("tr").find('td:eq(5)').text());

}); 

//REMOVE ===================================================

$(document).on("click", ".btnRemove", function(event)
		{
		 $.ajax(
		 {
			 url : "AppointmentAPI",
			 type : "DELETE",
			 data : "appointmentID=" + $(this).data("itemid"),
			 dataType : "text",
			 complete : function(response, status)
		 {
				 onItemDeleteComplete(response.responseText, status);
		 }
		 
	});
});



function onItemDeleteComplete(response, status)
{
	if (status == "success")
 {
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success")
	{
			$("#alertSuccess").text("Successfully deleted.");
			$("#alertSuccess").show();
			$("#divItemsGrid").html(resultSet.data);
	} 
		else if (resultSet.status.trim() == "error")

	{
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
	}
 
 } 
		else if (status == "error")
	{
			$("#alertError").text("Error while deleting.");
			$("#alertError").show();
	} 
		else
	{
			$("#alertError").text("Unknown error while deleting..");
			$("#alertError").show();
	}
}





//CLIENT MODEL=========================================================================
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





