package service;

import java.util.List;

import model.Collection;

public interface CollectionService {
	public void collec(Collection c);//����ղ�
	public void colled(Collection c);//ɾ���ղ�
	public List<Collection> collecByUser(int id);//�����û���ѯ�ղ�
	public int collS(int id1,int id2);//�����û�id С��id ��ѯ�ղ��Ƿ����
}
