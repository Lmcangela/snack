package dao.impl;

import java.util.List;

import model.Admin;

import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import dao.AdminDao;

public class AdminDaoImpl extends HibernateDaoSupport implements AdminDao {

	public List<Admin> Login(Admin admin) {
		return getHibernateTemplate().find("from Admin where name=? and password=?"
				,admin.getName(),admin.getPassword());
	}

}
