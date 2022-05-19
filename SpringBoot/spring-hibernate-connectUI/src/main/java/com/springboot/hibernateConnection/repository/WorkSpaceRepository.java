package com.springboot.hibernateConnection.repository;

import org.springframework.data.repository.CrudRepository;

import com.springboot.hibernateConnection.entity.WorkSpace;

//this will be auto implemented by Spring into a Bean, that bean's name is workSpaceRepository
//CRUD refers Create, Read, Update, Delete
public interface WorkSpaceRepository extends CrudRepository<WorkSpace, Integer>{
	

}
