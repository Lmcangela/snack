package dao;

import java.util.List;

import model.Question;



public interface QuestionDao {
	public int findCount();//查找页数
	public List<Question> findByPage(int begin, int limit);//分页查询
	public List<Question> findById(int id);//根据id查找问题
	public List<Question> findByUser(int id);//根据用户查找问题
	public void save(Question q);//保存问题
	public void delete(Question q);//删除问题
	public void update(Question q);//删除问题
}
