package dao;

import java.util.List;


import model.User;

public interface UserDao {
	public List<User> findByName(String name);//�����ǳƲ�ѯ�û�
	public List<User> findByUsername(String username);//�����û�����ѯ�û�
	public void save(User user);//�����û���Ϣ
	public List<User> findLogin(User user);//�����û��� ���� ��ѯ
	public int findCount();//����ҳ��
	public List<User> findByPage(int begin, int limit);//��ҳ��ѯ
	public List<User> findById(int id);//����id ��ѯ�û�
	public void update(User u);//�����û�
	public void delete(User u);//�����û�
}
