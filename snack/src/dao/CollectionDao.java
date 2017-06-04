package dao;

import java.util.List;

import model.Collection;

public interface CollectionDao {
	public void sava(Collection c);//保存收藏
	public void delete(Collection c);//删除收藏
	public List<Collection> findByUser(int id);//根据用户查询收藏
	public List<Collection> findById(int id1,int id2);//根据用户id 小吃id查询收藏
}
