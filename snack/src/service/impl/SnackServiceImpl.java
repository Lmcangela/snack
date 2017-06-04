package service.impl;

import java.util.ArrayList;
import java.util.List;


import model.PageBean;
import model.Snack;
import model.Type;
import service.SnackService;
import dao.impl.SnackDaoImpl;

public class SnackServiceImpl implements SnackService {
	SnackDaoImpl snackDao;
	
	public void setSnackDao(SnackDaoImpl snackDao) {
		this.snackDao = snackDao;
	}

	/*
	 ����ҳ����ѯС����Ϣ
	 */
	public PageBean<Snack> findByPage(int page) {
		PageBean<Snack> pageBean = new PageBean<Snack>();
		// ���õ�ǰҳ��:
		pageBean.setPage(page);
		// ����ÿҳ��ʾ��¼��:
		// ��ʾ9��
		int limit = 9;
		pageBean.setLimit(limit);
		// �����ܼ�¼��:
		int totalCount = 0;
		totalCount = snackDao.findCount();
		pageBean.setTotalCount(totalCount);
		// ������ҳ��
		int totalPage = 0;
		if(totalCount % limit == 0){
			totalPage = totalCount / limit;
		}else{
			totalPage = totalCount / limit + 1;
		}
		pageBean.setTotalPage(totalPage);
		// ����ÿҳ��ʾ���ݼ���:
		int begin = (page - 1)*limit;
		List<Snack> list = snackDao.findByPage(begin,limit);
		pageBean.setList(list);
		return pageBean;
	}
	/*
	 ������ҳ����С��
	 */
	@Override
	public List<Snack> findIndex() {
		return snackDao.findD();
	}

	@Override
	public List<String> findType() {
		List<String> t1 = snackDao.findTech();
		List<String> t2 = snackDao.findTaste();
		t1.addAll(t2);
		return t1;
	}

	@Override
	public boolean upload(Snack snack) {
		int result = snackDao.sava(snack);
		if(result>0){
			return true;
		}else{
			return false;
		}
	}

	@Override
	public List<Type> findTypeAll() {
		List<Type> tp = new ArrayList<Type>();
		//��������� ��������
		List<String> s = snackDao.findAreaAll();
		List<String> n = snackDao.findAreaNum();
		for(int i=0;i<s.size();i++){
			Type p = new Type();
			p.setName(s.get(i));
			p.setNum(String.valueOf(n.get(i)));
			tp.add(p);
		}
		//��������� ��ζ����
		s = snackDao.findTasteAll();
		n = snackDao.findTasteNum();
		for(int i=0;i<s.size();i++){
			Type p = new Type();
			p.setName(s.get(i));
			p.setNum(String.valueOf(n.get(i)));
			tp.add(p);
		}
		//��������� ��������
		s = snackDao.findTechAll();
		n = snackDao.findTechNum();
		for(int i=0;i<s.size();i++){
			Type p = new Type();
			p.setName(s.get(i));
			p.setNum(String.valueOf(n.get(i)));
			tp.add(p);
		}
		return tp;
	}

	@Override
	public Snack findById(int id) {	
		return snackDao.findById(id);
	}

	@Override
	public List<Snack> findByType(String type) {
		return snackDao.findByType(type);
	}

	@Override
	public List<Snack> findByUser(int id) {
		return snackDao.findByUser(id);
	}

	@Override
	public List<Snack> search(String s) {
		return snackDao.findByType(s);
	}

	@Override
	public void delete(int id) {
		Snack s = snackDao.findById(id);
		snackDao.delete(s);
	}

	@Override
	public void update(Snack s) {
		snackDao.update(s);
	}




}
