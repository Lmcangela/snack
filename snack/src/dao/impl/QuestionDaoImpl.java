package dao.impl;


import java.util.List;

import model.PageHibernateCallback;
import model.Question;

import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import dao.QuestionDao;



public class QuestionDaoImpl extends HibernateDaoSupport implements QuestionDao {

	public int findCount() {
		String hql = "select count(*) from Question";
		List<Long> list = this.getHibernateTemplate().find(hql);
		if (list != null && list.size() > 0) {
			return list.get(0).intValue();
		}
		return 0;
	}

	public List<Question> findByPage(int begin, int limit) {
		String hql = "from Question order by id desc";
		List<Question> list = this.getHibernateTemplate().execute(
				new PageHibernateCallback<Question>(hql, null, begin, limit));
		return list;
	}
	@Override
	public void save(Question q) {
		getHibernateTemplate().save(q);		
	}
	
	public void delete(Question q) {
		getHibernateTemplate().delete(q);		
	}
	
	@Override
	public List<Question> findById(int id) {
		return  getHibernateTemplate().find("from Question where Id=?",id);
	}

	@Override
	public List<Question> findByUser(int id) {
		return getHibernateTemplate().find("from Question where user_id=?",id);
	}

	@Override
	public void update(Question q) {
		getHibernateTemplate().update(q);
	}

	
}
