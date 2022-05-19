package com.springboot.hibernateConnection.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class WorkSpace {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	private String name;
	private String description;
	public WorkSpace(String newName, String newDescription) {
		this.name = newName;
		this.description = newDescription;
				
	}
	public String getName() {
		return this.name;
	
	}
	public Integer getId() {
		return id;
	}
	public String getDescription() {
		return this.description;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public void setName(String name) {
		this.name = name;
	}
	public void setDescription(String description) {
		this.description = description;
	}
}
