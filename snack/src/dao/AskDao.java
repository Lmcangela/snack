package dao;

import java.util.List;

import model.Ask;


public interface AskDao {
	public void save(Ask ask);//保存答案信息
	public List<Ask> find(int id);//根据id查找答案
	public void update(Ask ask);//更新答案信息
}
