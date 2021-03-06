package com.jlk.agencia.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jlk.agencia.dto.PacoteDTO;
import com.jlk.agencia.entities.Pacote;
import com.jlk.agencia.repositories.PacoteRepository;

@Service
public class PacoteService {

	@Autowired
	private PacoteRepository repository;
	
	@Transactional(readOnly = true)
	public Page<PacoteDTO> findAll(Pageable pageable){
		Page<Pacote> result = repository.findAll(pageable);
		Page<PacoteDTO> page = result.map(x -> new PacoteDTO(x));
		return page;
	}
	
	@Transactional(readOnly = true)
	public PacoteDTO findById(Long id){
		Pacote result = repository.findById(id).get();
		PacoteDTO dto = new PacoteDTO(result);
		return dto;
	}
}
