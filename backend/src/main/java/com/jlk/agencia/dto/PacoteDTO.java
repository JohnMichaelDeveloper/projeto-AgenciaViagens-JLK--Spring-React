package com.jlk.agencia.dto;

import com.jlk.agencia.entities.Pacote;

public class PacoteDTO {
	
	private Long id;
	private String nome;
	private Double reservado;
	private String origem;
	private String destino;
	private String saida;
	private String retorno;
	private String preco;
	private String informacao;
	private String image;
	
	public PacoteDTO() {		
	}

	
	public PacoteDTO(Long id, String nome, Double reservado, String origem, String destino, String saida, String retorno,
			String preco, String informacao, String image) {
		
		this.id = id;
		this.nome = nome;
		this.reservado = reservado;
		this.origem = origem;
		this.destino = destino;
		this.saida = saida;
		this.retorno = retorno;
		this.preco = preco;
		this.informacao = informacao;
		this.image = image;
	}


	public PacoteDTO(Pacote pacote) {
		id = pacote.getId();
		nome = pacote.getNome();
		reservado = pacote.getReservado();
		origem = pacote.getOrigem();
		destino = pacote.getDestino();
		saida = pacote.getSaida();
		retorno = pacote.getRetorno();
		preco = pacote.getPreco();
		informacao = pacote.getInformacao();
		image = pacote.getImage();
		
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getNome() {
		return nome;
	}


	public void setNome(String nome) {
		this.nome = nome;
	}


	public Double getReservado() {
		return reservado;
	}


	public void setReservado(Double reservado) {
		this.reservado = reservado;
	}


	public String getOrigem() {
		return origem;
	}


	public void setOrigem(String origem) {
		this.origem = origem;
	}


	public String getDestino() {
		return destino;
	}


	public void setDestino(String destino) {
		this.destino = destino;
	}


	public String getSaida() {
		return saida;
	}


	public void setSaida(String saida) {
		this.saida = saida;
	}


	public String getRetorno() {
		return retorno;
	}


	public void setRetorno(String retorno) {
		this.retorno = retorno;
	}


	public String getPreco() {
		return preco;
	}


	public void setPreco(String preco) {
		this.preco = preco;
	}


	public String getInformacao() {
		return informacao;
	}


	public void setInformacao(String informacao) {
		this.informacao = informacao;
	}


	public String getImage() {
		return image;
	}


	public void setImage(String image) {
		this.image = image;
	}
}
	

