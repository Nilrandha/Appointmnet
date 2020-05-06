package com;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.AppointmentInfo;
/**
 * Servlet implementation class AppointmentAPI
 */
@WebServlet("/AppointmentAPI")
public class AppointmentAPI extends HttpServlet {
	
	private static final long serialVersionUID = 1L;
       
	AppointmentInfo app= new AppointmentInfo();
	
	
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AppointmentAPI() {
        super();
        // TODO Auto-generated constructor stub
    }

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		String output = app.insertAppointmentInfo(request.getParameter("patientName"),
				 request.getParameter("gender"),
				request.getParameter("contactNo"),
				request.getParameter("hospitalName"),
				request.getParameter("doctorName"),
				request.getParameter("appointmentDate"));
				
		response.getWriter().write(output); 
	
	}

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		Map paras =getParasMap(request);
		
		String output= app.updateAppointmentInfo(paras.get("hidItemIDSave").toString(),paras.get("patientName").toString(),paras.get("gender").toString(),
				paras.get("contactNo").toString(),paras.get("hospitalName").toString(),paras.get("doctorName").toString(),
				paras.get("appointmentDate").toString());

		response.getWriter().write(output); 
	}

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		Map paras =getParasMap(request);
		
		String output=app.deleteAppointmentInfo(paras.get("appointmentID").toString());
		
	}
	
	// Convert request parameters to a Map
	private static Map getParasMap(HttpServletRequest request)
	{
		Map<String, String> map = new HashMap<String, String>();
		try
		{
			Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
			String queryString = scanner.hasNext() ?
			scanner.useDelimiter("\\A").next() : "";
			scanner.close();
			
			String[] params = queryString.split("&");
			
			for (String param : params)
			{ 
	
				String[] p = param.split("=");
				map.put(p[0], p[1]);
			}
		}
	
		catch (Exception e)
	 {
			
	 }
	return map;
	}


}
