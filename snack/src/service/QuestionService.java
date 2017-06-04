package service;

import java.util.List;

import model.PageBean;
import model.Question;


public interface QuestionService {
	public PageBean<Question> findByPage(int page,int i);//��ҳ��������
	public List<Question> findByUser(int id);//���ݷ����˲�������
	public Question findById(int id);//����Id��������
	public void add(Question q);//�������
	public void delete(int id);//ɾ������
	public void update(Question u);//��������
}
