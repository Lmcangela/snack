package service.impl;

import java.util.List;

import model.PageBean;
import model.Question;
import service.QuestionService;
import dao.impl.QuestionDaoImpl;



public class QuestionServiceImpl implements QuestionService {
	QuestionDaoImpl questionDao;
	
	public void setQuestionDao(QuestionDaoImpl questionDao) {
		this.questionDao = questionDao;
	}

	@Override
	public PageBean<Question> findByPage(int page,int i) {
		PageBean<Question> pageBean = new PageBean<Question>();
		// ���õ�ǰҳ��:
		pageBean.setPage(page);
		// ����ÿҳ��ʾ��¼��:
		// ��ʾi��
		int limit = i;
		pageBean.setLimit(limit);
		// �����ܼ�¼��:
		int totalCount = 0;
		totalCount = questionDao.findCount();
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
		List<Question> list = questionDao.findByPage(begin,limit);
		pageBean.setList(list);
		return pageBean;
	}

	@Override
	public void add(Question q) {
		questionDao.save(q);	
	}

	@Override
	public Question findById(int id) {
		return questionDao.findById(id).get(0);
	}

	@Override
	public List<Question> findByUser(int id) {
		return questionDao.findByUser(id);
	}
	public void delete(int id){
		Question q = questionDao.findById(id).get(0);
		questionDao.delete(q);	
	}

	@Override
	public void update(Question u) {
		questionDao.update(u);
		
	}


	
}
