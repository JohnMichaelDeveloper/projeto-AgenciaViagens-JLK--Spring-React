package com.jlk.agencia.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jlk.agencia.entities.Compra;
import com.jlk.agencia.entities.CompraPK;

public interface CompraRepository extends JpaRepository<Compra, CompraPK>{

}
