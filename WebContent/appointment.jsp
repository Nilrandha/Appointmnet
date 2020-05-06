<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

<%@ page import="com.AppointmentInfo"%>



<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<script src="Components/jquery-3.5.0.js"></script>
<script src="Components/appointment.js"></script>

</head>
<body>

<div class="container">
 		<div class="row">
 			<div class="col-6"> 

		<h1>Appointment Service	</h1>


		
		<form id="formItem" name="formItem" method="post" action="appointment.jsp">
			
			Patient name:
			<input id="patientName" name="patientName" type="text" class="form-control form-control-sm">

			<br> Gender:
			<input id="gender" name="gender" type="text" class="form-control form-control-sm">

			<br> Contact No:
			<input id="contactNo" name="contactNo" type="text" class="form-control form-control-sm">

			<br> Hospital Name:
			<input id="hospitalName" name="hospitalName" type="text" class="form-control form-control-sm">

			<br>Doctor Name:
			<input id="doctorName" name="doctorName" type="text" class="form-control form-control-sm">

			<br>Appointment Date:
			<input id="appointmentDate" name="appointmentDate" type="month" class="form-control form-control-sm">

			<br>
			<input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-primary">
			<input type="hidden" id="hidItemIDSave" name="hidItemIDSave" value="">
		</form>
		
		
		<div id="alertSuccess" class="alert alert-success"></div>
		
		<div id="alertError" class="alert alert-danger"> </div>
		
		<br>
			<div id="divItemsGrid">
		<%
			AppointmentInfo api= new AppointmentInfo();
			out.print(api.readAppointmentInfo());
		%>
			</div>
		
		</div>



	</div>


</div>



</body>


</html>