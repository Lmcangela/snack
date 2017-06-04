package model;

/**
 * Ask entity. @author MyEclipse Persistence Tools
 */

@SuppressWarnings("serial")
public class Ask implements java.io.Serializable {

	// Fields

	private Integer id;
	private User user;
	private Question question;
	private Integer laud;
	private String text;

	// Constructors

	/** default constructor */
	public Ask() {
	}

	/** full constructor */
	public Ask(User user, Question question, Integer laud, String text) {
		this.user = user;
		this.question = question;
		this.laud = laud;
		this.text = text;
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

	public Question getQuestion() {
		return this.question;
	}

	public void setQuestion(Question question) {
		this.question = question;
	}

	public Integer getLaud() {
		return this.laud;
	}

	public void setLaud(Integer laud) {
		this.laud = laud;
	}

	public String getText() {
		return this.text;
	}

	public void setText(String text) {
		this.text = text;
	}

}