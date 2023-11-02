package com.inm429.ecommerce.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "user")
public class User {
	
	@Id
	@Column(name = "email")
	String email;

	@Column(name = "name")
	String name;

	@Column(name = "mobile")
	int mobile;

	@Column(name = "address")
	String address;

	@Column(name = "pincode")
	int pincode;

	@Column(name = "password")
	String password;

	public User(String email, String name, int mobile, String address, int pincode, String password) {
		super();
		this.email = email;
		this.name = name;
		this.mobile = mobile;
		this.address = address;
		this.pincode = pincode;
		this.password = password;
	}

	public User() {
		super();
	}
	
	
}