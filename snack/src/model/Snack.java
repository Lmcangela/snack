package model;

import java.util.HashSet;
import java.util.Set;

/**
 * Snack entity. @author MyEclipse Persistence Tools
 */

public class Snack implements java.io.Serializable {

	// Fields

	private Integer id;
	private User user;
	private String name;
	private String imgurl;
	private String introduce;
	private String area;
	private String technology;
	private String taste;
	private Integer status;
	private Set collections = new HashSet(0);

	// Constructors

	/** default constructor */
	public Snack() {
	}

	/** minimal constructor */
	public Snack(User user) {
		this.user = user;
	}

	/** full constructor */
	public Snack(User user, String name, String imgurl, String introduce,
			String area, String technology, String taste, Integer status,
			Set collections) {
		this.user = user;
		this.name = name;
		this.imgurl = imgurl;
		this.introduce = introduce;
		this.area = area;
		this.technology = technology;
		this.taste = taste;
		this.status = status;
		this.collections = collections;
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

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getImgurl() {
		return this.imgurl;
	}

	public void setImgurl(String imgurl) {
		this.imgurl = imgurl;
	}

	public String getIntroduce() {
		return this.introduce;
	}

	public void setIntroduce(String introduce) {
		this.introduce = introduce;
	}

	public String getArea() {
		return this.area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getTechnology() {
		return this.technology;
	}

	public void setTechnology(String technology) {
		this.technology = technology;
	}

	public String getTaste() {
		return this.taste;
	}

	public void setTaste(String taste) {
		this.taste = taste;
	}

	public Integer getStatus() {
		return this.status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public Set getCollections() {
		return this.collections;
	}

	public void setCollections(Set collections) {
		this.collections = collections;
	}

}