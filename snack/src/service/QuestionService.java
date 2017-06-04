package service;

import java.util.List;

import model.PageBean;
import model.Question;


public interface QuestionService {
	public PageBean<Question> findByPage(int page,int i);//分页查找问题
	public List<Question> findByUser(int id);//根据发布人查找问题
	public Question findById(int id);//根据Id查找问题
	public void add(Question q);//添加问题
	public void delete(int id);//删除问题
	public void update(Question u);//更新问题
}
