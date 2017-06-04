package dao;

import java.util.List;

import model.Question;



public interface QuestionDao {
	public int findCount();//����ҳ��
	public List<Question> findByPage(int begin, int limit);//��ҳ��ѯ
	public List<Question> findById(int id);//����id��������
	public List<Question> findByUser(int id);//�����û���������
	public void save(Question q);//��������
	public void delete(Question q);//ɾ������
	public void update(Question q);//ɾ������
}
