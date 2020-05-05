<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

<%@ page import="com.AppointmentInfo"%>
<%
	//AppointmentInfo app= new AppointmentInfo();

//Intialize==========
	session.setAttribute("statusMsg","");
	System.out.println("Trying to process....");
	
	//Save
	if (request.getParameter("patientName") != null)
{
		AppointmentInfo app= new AppointmentInfo();
 		String stsMsg = "";

 		
 		//Insert--------------------------
		if (request.getParameter("hidItemIDSave") == "")
 		{
			stsMsg = app.insertAppointmentInfo(request.getParameter("patientName"),
					request.getParameter("gender"),
					request.getParameter("contactNo"),
					request.getParameter("hospitalName"),
					request.getParameter("doctorName"),	
			 		request.getParameter("appointmentDate"));
 		}
else
	//Update----------------------
		 {
 			stsMsg = app.updateAppointmentInfo(request.getParameter("hidItemIDSave"),
				     request.getParameter("patientName"),
 					 request.getParameter("gender"),
					 request.getParameter("contactNo"),
 					 request.getParameter("hospitalName"),
 					 request.getParameter("doctorName"),
 					 request.getParameter("appointmentDate"));
 }
 session.setAttribute("statusMsg", stsMsg);
}
	//Delete-----------------------------
	if (request.getParameter("hidItemIDDelete") != null)
	{
		AppointmentInfo app= new AppointmentInfo();
	 	String stsMsg = app.deleteAppointmentInfo(request.getParameter("hidItemIDDelete"));
		session.setAttribute("statusMsg", stsMsg);
	}
	

%>



<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
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
			AppointmentInfo api= new AppointmentInfo();
			out.print(api.readAppointmentInfo());
		%>
			</div>





	</div>


</div>



</body>


</html>