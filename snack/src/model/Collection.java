package model;

/**
 * Collection entity. @author MyEclipse Persistence Tools
 */

@SuppressWarnings("serial")
public class Collection implements java.io.Serializable {

	// Fields
	private Integer id;
	private User user;
	private Snack snack;

	// Constructors

	/** default constructor */
	public Collection() {
	}

	/** full constructor */
	public Collection(User user, Snack snack ) {
		this.user = user;
		this.snack = snack;
	}

	// Property accessors

	

	public User getUser() {
		return this.user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Snack getSnack() {
		return this.snack;
	}

	public void setSnack(Snack snack) {
		this.snack = snack;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

}