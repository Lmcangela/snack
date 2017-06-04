package dao;

import java.util.List;


import model.User;

public interface UserDao {
	public List<User> findByName(String name);//根据昵称查询用户
	public List<User> findByUsername(String username);//根据用户名查询用户
	public void save(User user);//保存用户信息
	public List<User> findLogin(User user);//根据用户名 密码 查询
	public int findCount();//查找页数
	public List<User> findByPage(int begin, int limit);//分页查询
	public List<User> findById(int id);//根据id 查询用户
	public void update(User u);//更新用户
	public void delete(User u);//更新用户
}
