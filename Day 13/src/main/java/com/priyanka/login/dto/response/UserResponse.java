package com.priyanka.login.dto.response;


import com.priyanka.login.Enum.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserResponse {
    private Long uid;
    private String name;
    private String email;
    private Boolean isEnabled;
    private Role role;
}
