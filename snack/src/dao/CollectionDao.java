package dao;

import java.util.List;

import model.Collection;

public interface CollectionDao {
	public void sava(Collection c);//�����ղ�
	public void delete(Collection c);//ɾ���ղ�
	public List<Collection> findByUser(int id);//�����û���ѯ�ղ�
	public List<Collection> findById(int id1,int id2);//�����û�id С��id��ѯ�ղ�
}
