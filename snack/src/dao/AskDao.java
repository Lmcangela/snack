package dao;

import java.util.List;

import model.Ask;


public interface AskDao {
	public void save(Ask ask);//�������Ϣ
	public List<Ask> find(int id);//����id���Ҵ�
	public void update(Ask ask);//���´���Ϣ
}
