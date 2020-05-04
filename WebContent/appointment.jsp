<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

<div class="container">
 		<div class="row">
 			<div class="col-6"> 

		<h1>Appointment Service	</h1>


		
		<form id="formItem" name="formItem" method="post" action="appointment.jsp">
			Appointment ID:
			<input id="appointmentID" name="appointmentID"  type="text"  class="form-control form-control-sm">
			
			<br> Patient name:
			<input id="patientName" name="patientName" type="text" class="form-control form-control-sm">

			<br> Gender:
			<input id="gender" name="gender" type="text" class="form-control form-control-sm">

			<br> Contact No:
			<input id="contactNo" name="contactNo" type="text" class="form-control form-control-sm">

			<br> Hospital Name:
			<input id="hospitalName" name="hospitalName" type="text" class="form-control form-control-sm">

			<br>Appointment Date:
			<input id="doctorName" name="doctorName" type="text" class="form-control form-control-sm">

			<br> Doctor Name:
			<input id="appointmentDate" name="appointmentDate" type="date" class="form-control form-control-sm">

			<br>
			<input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-primary">
			<input type="hidden" id="hidItemIDSave" name="hidItemIDSave" value="">
		</form>
		
		
		<div id="alertSuccess" class="alert alert-success">
			<%
				out.print(session.getAttribute("statusMsg"));		
			%>
		</div>
		
		<div id="alertError" class="alert alert-danger"> </div>
		
		<br>
		<%
		AppointmentInfo app =new AppointmentInfo();	
		out.print(app. readAppointmentInfo());
		%>
			</div>





	</div>


</div>



</body>


</html>