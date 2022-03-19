package com.jlk.agencia.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jlk.agencia.dto.PacoteDTO;
import com.jlk.agencia.services.PacoteService;

@RestController
@RequestMapping(value = "/pacotes")
public class PacoteController {
	
	@Autowired
	private PacoteService service;
	@GetMapping
	public Page<PacoteDTO> findAll(Pageable pageable){
		return service.findAll(pageable);
	}
	
	@GetMapping(value = "/{id}")
	public PacoteDTO findById(@PathVariable Long id){
		return service.findById(id);
	}
}
