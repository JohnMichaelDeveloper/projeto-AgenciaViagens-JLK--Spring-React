package com.jlk.agencia.entities;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

// convertendo para bits com serializable
@Embeddable
public class CompraPK implements Serializable {
	private static final long serialVersionUID = 1L;

//	Chave estrangeira
	
	@ManyToOne
	@JoinColumn(name = "pacote_id") 
	private Pacote pacote;
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;
	
	public CompraPK() {
		
	}
	
//	Gets and Sets

	public Pacote getPacote() {
		return pacote;
	}

	public void setPacote(Pacote pacote) {
		this.pacote = pacote;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	
}
