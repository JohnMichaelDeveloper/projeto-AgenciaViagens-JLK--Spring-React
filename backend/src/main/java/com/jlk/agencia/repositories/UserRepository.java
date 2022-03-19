package com.jlk.agencia.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jlk.agencia.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{

	User findByEmail(String email);
}

