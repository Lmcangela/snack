package service;

import model.PageBean;
import model.User;

public interface UserService {
	public String regist(User user);//用户注册
	public User login(User user);//用户登录
	public PageBean<User> findByPage(int page);//分页查询用户
	public User findById(int id);//根据id查询用户
	public void update(User u);//更新用户
	public void delete(User u);//更新用户
}
