package service;

import model.PageBean;
import model.User;

public interface UserService {
	public String regist(User user);//�û�ע��
	public User login(User user);//�û���¼
	public PageBean<User> findByPage(int page);//��ҳ��ѯ�û�
	public User findById(int id);//����id��ѯ�û�
	public void update(User u);//�����û�
	public void delete(User u);//�����û�
}
