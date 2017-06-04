package service;

import java.util.List;

import model.Collection;

public interface CollectionService {
	public void collec(Collection c);//添加收藏
	public void colled(Collection c);//删除收藏
	public List<Collection> collecByUser(int id);//根据用户查询收藏
	public int collS(int id1,int id2);//根据用户id 小吃id 查询收藏是否存在
}
