package dao.impl;

import java.util.List;

import org.hibernate.Session;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;



import model.PageHibernateCallback;
import model.Snack;
import dao.SnackDao;

public class SnackDaoImpl extends HibernateDaoSupport implements SnackDao {

	@SuppressWarnings("unchecked")
	@Override
	public List<Snack> find() {
		return getHibernateTemplate().find("from Snack  where status = 2");
	}

	@Override
	public List<Snack> findD() {
		this.getHibernateTemplate().setMaxResults(7);
		List<Snack> snack = this.getHibernateTemplate().find("from Snack where status = 2 ORDER BY id DESC");
		this.getHibernateTemplate().setMaxResults(0);
		return snack;
	}

	@Override
	public List<String> findTech() {
		String sql = "select distinct technology from snack where status = 2 order by id desc limit 0,4";	
		Session session = getHibernateTemplate().getSessionFactory().openSession();
		List<String> l = session.createSQLQuery(sql).list();
		session.close();
		return l;
	}

	@Override
	public List<String> findTaste() {
		String sql = "select distinct taste from snack where status = 2 order by id desc limit 0,4";	
		Session session = getHibernateTemplate().getSessionFactory().openSession();
		List<String> l = session.createSQLQuery(sql).list();
		session.close();
		return l;
	}

	@Override
	public int sava(Snack snack) {
		return (Integer) getHibernateTemplate().save(snack);
	}

	@Override
	public List<String> findTechAll() {
		String sql = "select distinct technology from snack where status = 2";	
		Session session = getHibernateTemplate().getSessionFactory().openSession();
		List<String> l = session.createSQLQuery(sql).list();
		session.close();
		return l;
	}

	@Override
	public List<String> findTasteAll() {
		String sql = "select distinct taste from snack where status = 2";	
		Session session = getHibernateTemplate().getSessionFactory().openSession();
		List<String> l = session.createSQLQuery(sql).list();
		session.close();
		return l;
	}

	@Override
	public List<String> findAreaAll() {
		String sql = "select distinct area from snack where status = 2";	
		Session session = getHibernateTemplate().getSessionFactory().openSession();
		List<String> l = session.createSQLQuery(sql).list();
		session.close();
		return l;
	}

	@Override
	public List<String> findTechNum() {
		String sql = "select count(*) from snack where status = 2 group by technology order by id";	
		Session session = getHibernateTemplate().getSessionFactory().openSession();
		List<String> l = session.createSQLQuery(sql).list();
		session.close();
		return l;
	}

	@Override
	public List<String> findTasteNum() {
		String sql = "select count(*) from snack where status = 2 group by taste order by id";	
		Session session = getHibernateTemplate().getSessionFactory().openSession();
		List<String> l = session.createSQLQuery(sql).list();
		session.close();
		return l;
	}

	@Override
	public List<String> findAreaNum() {
		String sql = "select count(*) from snack where status = 2 group by area order by id";	 
		Session session = getHibernateTemplate().getSessionFactory().openSession();
		List<String> l = session.createSQLQuery(sql).list();
		session.close();
		return l;
	}
	@Override
	public Snack findById(int id) {
		return (Snack) getHibernateTemplate().find("from Snack where id =?",id).get(0);
	}

	@Override
	public List<Snack> findByType(String type) {
		return getHibernateTemplate().find("from Snack where area like ? or technology like ? or taste like ? or name like ?",'%'+type+'%','%'+type+'%','%'+type+'%','%'+type+'%');
	}

	@Override
	public List<Snack> findByUser(int id) {
		return getHibernateTemplate().find("from Snack where user_id =?",id);
	}

	public int findCount() {
		String hql = "select count(*) from Snack";
		List<Long> list = this.getHibernateTemplate().find(hql);
		if (list != null && list.size() > 0) {
			return list.get(0).intValue();
		}
		return 0;
	}

	public List<Snack> findByPage(int begin, int limit) {
		String hql = "from Snack";
		List<Snack> list = this.getHibernateTemplate().execute(
				new PageHibernateCallback<Snack>(hql, null, begin, limit));
		return list;
	}

	@Override
	public void delete(Snack snack) {
		getHibernateTemplate().delete(snack);
	}

	@Override
	public void update(Snack snack) {
		getHibernateTemplate().update(snack);
	}

}
