package dao.impl;

import java.util.List;

import model.Ask;

import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import dao.AskDao;

public class AskDaoImpl extends HibernateDaoSupport implements AskDao {

	@Override
	public void save(Ask ask) {
		getHibernateTemplate().save(ask);
	}

	@Override
	public List<Ask> find(int id) {
		return getHibernateTemplate().find("from Ask where Id =?",id);
	}

	@Override
	public void update(Ask ask) {
		getHibernateTemplate().update(ask);
	}

}
