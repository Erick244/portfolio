package com.portfolio.server.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.portfolio.server.models.entities.Admin;
import com.portfolio.server.models.repositories.AdminRepository;

@Service
public class AdminService implements UserDetailsService {

	@Autowired
	private AdminRepository adminRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Admin admin = adminRepository.findByUsername(username).orElse(null);

		if (admin == null) {
			throw new UsernameNotFoundException("Admin not registered");
		}

		return admin;
	}

	public Admin getAdminAuth() {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

		if (authentication != null) {
			Admin admin = (Admin) authentication.getPrincipal();
			return admin;
		} else {
			return null;
		}
	}
}
