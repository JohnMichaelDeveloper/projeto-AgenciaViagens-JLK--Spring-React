package com.jlk.agencia.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jlk.agencia.entities.Pacote;

// PacoteRepository vai herdar informações do JpaRepository
public interface PacoteRepository extends JpaRepository<Pacote, Long>{

}
