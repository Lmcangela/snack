package model;

import java.util.HashSet;
import java.util.Set;

/**
 * User entity. @author MyEclipse Persistence Tools
 */

public class User implements java.io.Serializable {

	// Fields

	private Integer id;
	private String username;
	private String password;
	private String name;
	private String imgurl;
	private Set questions = new HashSet(0);
	private Set collections = new HashSet(0);
	private Set snacks = new HashSet(0);
	private Set asks = new HashSet(0);

	// Constructors

	/** default constructor */
	public User() {
	}

	/** full constructor */
	public User(String username, String password, String name,String imgurl, Set questions,
			Set collections, Set snacks, Set asks ) {
		this.username = username;
		this.password = password;
		this.name = name;
		this.imgurl = imgurl;
		this.questions = questions;
		this.collections = collections;
		this.snacks = snacks;
		this.asks = asks;	
	}

	// Property accessors

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getImgurl() {
		return imgurl;
	}

	public void setImgurl(String imgurl) {
		this.imgurl = imgurl;
	}

	public Set getQuestions() {
		return this.questions;
	}

	public void setQuestions(Set questions) {
		this.questions = questions;
	}

	public Set getCollections() {
		return this.collections;
	}

	public void setCollections(Set collections) {
		this.collections = collections;
	}

	public Set getSnacks() {
		return this.snacks;
	}

	public void setSnacks(Set snacks) {
		this.snacks = snacks;
	}

	public Set getAsks() {
		return this.asks;
	}

	public void setAsks(Set asks) {
		this.asks = asks;
	}

}