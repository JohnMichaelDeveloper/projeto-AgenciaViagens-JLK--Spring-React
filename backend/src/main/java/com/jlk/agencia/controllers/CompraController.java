package com.jlk.agencia.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jlk.agencia.dto.PacoteDTO;
import com.jlk.agencia.dto.CompraDTO;
import com.jlk.agencia.services.CompraService;

@RestController
@RequestMapping(value = "/compra")
public class CompraController {

	@Autowired
	private CompraService service;
	
	@PutMapping
	public PacoteDTO saveCompra(@RequestBody CompraDTO dto){
		PacoteDTO pacoteDTO = service.saveCompra(dto);
		return pacoteDTO;
	}
}
