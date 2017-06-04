package dao.impl;

import java.util.List;

import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import model.PageHibernateCallback;
import model.Snack;
import model.User;
import dao.UserDao;

public class UserDaoImpl extends HibernateDaoSupport implements UserDao {

	@Override
	public void save(User user) {
		 getHibernateTemplate().save(user);
	}

	@Override
	public List<User> findByUsername(String username) {
		return getHibernateTemplate().find("from User where username=?",username );
	}

	@Override
	public List<User> findByName(String name) {
		return getHibernateTemplate().find("from User where name=?",name );
	}

	@Override
	public List<User> findLogin(User user) {
		return getHibernateTemplate().find("from User where username=? and password=?"
				,user.getUsername(),user.getPassword());
	}

	@Override
	public int findCount() {
		String hql = "select count(*) from User";
		List<Long> list = this.getHibernateTemplate().find(hql);
		if (list != null && list.size() > 0) {
			return list.get(0).intValue();
		}
		return 0;
	}

	@Override
	public List<User> findByPage(int begin, int limit) {
		String hql = "from User";
		List<User> list = this.getHibernateTemplate().execute(
				new PageHibernateCallback<User>(hql, null, begin, limit));
		return list;
	}

	@Override
	public List<User> findById(int id) {
		return getHibernateTemplate().find("from User where Id=?",id );
	}

	@Override
	public void update(User u) {
		getHibernateTemplate().update(u);
	}
	public void delete(User u) {
		getHibernateTemplate().delete(u);
	}
}
