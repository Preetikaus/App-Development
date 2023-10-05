package com.priyanka.login.Service;

import com.priyanka.login.dto.request.AuthenticationResponse;

import com.priyanka.login.dto.request.RegisterRequest;
import com.priyanka.login.dto.response.AuthenticationRequest;



public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}
