package com.jlk.agencia.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "tb_pacote")
public class Pacote {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nome;
	private Double reservado;
	private String origem;
	private String destino;
	private String saida;
	private String retorno;
	private String preco;
	private String informacao;
	private Integer contagem;
	private String image;
	
	@OneToMany(mappedBy = "id.pacote")
	private Set<Compra> compras = new HashSet<>();
	
	public Pacote() {
		
	}
	

	public Pacote(Long id, String nome, Double reservado, String origem, String destino, String saida, String retorno,
			String preco, String informacao, Integer contagem, String image) {
		
		this.id = id;
		this.nome = nome;
		this.reservado = reservado;
		this.origem = origem;
		this.destino = destino;
		this.saida = saida;
		this.retorno = retorno;
		this.preco = preco;
		this.informacao = informacao;
		this.contagem = contagem;
		this.image = image;
		
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
	
	public Integer getContagem() {
		return contagem;
	}


	public void setContagem(Integer contagem) {
		this.contagem = contagem;
	}


	public String getImage() {
		return image;
	}


	public void setImage(String image) {
		this.image = image;
	}


	public Set<Compra> getCompras() {
		return compras;
	}


}





