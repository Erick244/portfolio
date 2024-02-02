package com.portfolio.server.filters;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.portfolio.server.models.entities.Admin;
import com.portfolio.server.models.repositories.AdminRepository;
import com.portfolio.server.services.JwtService;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class SecurityFilter extends OncePerRequestFilter {

	@Autowired
	private JwtService jwtService;

	@Autowired
	private AdminRepository adminRepository;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		String token = extractBearerToken(request);

		if (token == null) {
			sendResponseErrorMessage(response, HttpStatus.FORBIDDEN, "Invalid bearer token.");
			return;
		}

		String username = jwtService.decodeToken(token);
		Admin admin = adminRepository.findByUsername(username).orElse(null);

		if (admin != null) {
			loginAdminInSecurityContext(admin);
			filterChain.doFilter(request, response);
		} else {
			sendResponseErrorMessage(response,
					HttpStatus.FORBIDDEN,
					"Valid token but the associated admin does not exist. Please request new access.");
			return;
		}

	}

	public String extractBearerToken(HttpServletRequest req) {
		String bearerToken = req.getHeader("Authorization");
		boolean isBearerToken = bearerToken != null && bearerToken.startsWith("Bearer");

		if (isBearerToken) {
			return bearerToken.replace("Bearer ", "");
		} else {
			return null;
		}
	}

	public void sendResponseErrorMessage(HttpServletResponse response, HttpStatus statusCode, String message)
			throws IOException {
		response.setStatus(statusCode.value());
		response.setContentType("text");
		response.getWriter().print(message);
		response.getWriter().flush();
	}

	public void loginAdminInSecurityContext(Admin admin) {
		UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(admin, null,
				admin.getAuthorities());
		SecurityContextHolder.getContext().setAuthentication(authToken);
	}

}
