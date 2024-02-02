package com.portfolio.server.models.dto.admin;

import com.portfolio.server.models.entities.Admin;

public record LoginResponseDto(Admin admin, String token) {

}
