package com.jlk.agencia.entities;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "tb_compra")
public class Compra {

	@EmbeddedId
	private CompraPK id = new CompraPK();
	private String tel;
	private Double diaria;
	private String data;
	private String valor;
	private String pagamento;
	
	public Compra() {
		
	}
	
//	add my package to my purchase.
	
	public void setPacote(Pacote pacote) {
		id.setPacote(pacote);
	}
	
	
	public void setUser(User user) {
		id.setUser(user);
	}
	
//	Gets and Sets
	
	public CompraPK getId() {
		return id;
	}

	public void setId(CompraPK id) {
		this.id = id;
	}

	public String getTel() {
		return tel;
	}

	public void setTel(String tel) {
		this.tel = tel;
	}

	public Double getDiaria() {
		return diaria;
	}

	public void setDiaria(Double diaria) {
		this.diaria = diaria;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public String getValor() {
		return valor;
	}

	public void setValor(String valor) {
		this.valor = valor;
	}

	public String getPagamento() {
		return pagamento;
	}

	public void setPagamento(String pagamento) {
		this.pagamento = pagamento;
	}
	
	
}
