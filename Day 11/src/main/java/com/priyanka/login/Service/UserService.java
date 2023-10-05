package com.priyanka.login.Service;

import java.util.List;

//import com.iamneo.ecom.dto.request.UserRequest;
//import com.iamneo.ecom.dto.response.UserResponse;

import com.priyanka.login.dto.request.UserRequest;

import com.priyanka.login.dto.response.UserResponse;

public interface UserService {

    List<UserResponse> getAllUsers();

    UserResponse getUser(Long uid);

    UserResponse updateUser(UserRequest request, Long uid);

    boolean deleteProduct(Long uid);

}
