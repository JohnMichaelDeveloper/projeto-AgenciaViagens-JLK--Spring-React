package com.jlk.agencia.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jlk.agencia.dto.PacoteDTO;
import com.jlk.agencia.dto.CompraDTO;
import com.jlk.agencia.entities.Pacote;
import com.jlk.agencia.entities.Compra;
import com.jlk.agencia.entities.User;
import com.jlk.agencia.repositories.PacoteRepository;
import com.jlk.agencia.repositories.CompraRepository;
import com.jlk.agencia.repositories.UserRepository;

@Service
public class CompraService{
	
	@Autowired
	private PacoteRepository pacoteRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private CompraRepository compraRepository;
	
	@Transactional
	public PacoteDTO saveCompra(CompraDTO dto) {
		
		User user = userRepository.findByEmail(dto.getEmail());
		
		if(user == null) {
			user = new User();
			user.setEmail(dto.getEmail());
			user = userRepository.saveAndFlush(user);
		}
		
		Pacote pacote = pacoteRepository.findById(dto.getPacoteId()).get();
		
		
		Compra compra = new Compra();
		compra.setPacote(pacote);
		compra.setUser(user);
		compra.setDiaria(dto.getDias());
		
		compra = compraRepository.saveAndFlush(compra);
		
		// soma de todas as notas
//		double sum = 0.0;
//		for(Compra s : pacote.getCompras()) {
//			sum = sum + s.getDiaria();
//		}
		
		// Tirando a média		
//		double avg = sum / pacote.getCompras().size();
		
        // Salvando o resultado		
//		pacote.setReservado(avg);
		
		// Conta quantas compras foram efetuadas para cada pacote.	
		pacote.setContagem(pacote.getCompras().size());
		
		pacote = pacoteRepository.save(pacote);
		
		return new PacoteDTO(pacote);
	
	}
	

}

