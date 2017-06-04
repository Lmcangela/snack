package model;

import java.util.HashSet;
import java.util.Set;

/**
 * Question entity. @author MyEclipse Persistence Tools
 */

@SuppressWarnings("serial")
public class Question implements java.io.Serializable {

	// Fields

	private Integer id;
	private User user;
	private String title;
	private String text;
	private Set asks = new HashSet(0);

	// Constructors

	/** default constructor */
	public Question() {
	}

	/** full constructor */
	public Question(User user, String title, String text, Set asks) {
		this.user = user;
		this.title = title;
		this.text = text;
		this.asks = asks;
	}

	// Property accessors

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public User getUser() {
		return this.user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getTitle() {
		return this.title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getText() {
		return this.text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public Set getAsks() {
		return this.asks;
	}

	public void setAsks(Set asks) {
		this.asks = asks;
	}

}