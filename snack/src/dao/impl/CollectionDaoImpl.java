package dao.impl;

import java.util.List;

import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import model.Collection;
import dao.CollectionDao;

public class CollectionDaoImpl extends HibernateDaoSupport implements CollectionDao {

	@Override
	public void sava(Collection c) {
		 getHibernateTemplate().save(c);
	}

	@Override
	public List<Collection> findByUser(int id) {
		return getHibernateTemplate().find("from Collection where user_id = ?",id);
	}

	@Override
	public List<Collection> findById(int id1, int id2) {
		return getHibernateTemplate().find("from Collection where user_id =? and snack_id =?",id1,id2);
	}

	@Override
	public void delete(Collection c) {
		getHibernateTemplate().delete(c);	
	}

}
