package service.impl;

import java.util.List;

import dao.impl.UserDaoImpl;
import model.PageBean;
import model.Snack;
import model.User;
import service.UserService;

public class UserServiceImpl implements UserService {
	UserDaoImpl userDao;
	public void setUserDao(UserDaoImpl userDao) {
		this.userDao = userDao;
	}
	@Override
	/*
	 * 用户注册 返回注册结果
	 * 
	 */
	public String regist(User user) {
		int i = (int)(20*Math.random()+1);
		user.setImgurl("picture/"+String.valueOf(i)+".jpg");
		List<User> u = userDao.findByName(user.getName());
		List<User> us = userDao.findByUsername(user.getUsername());
		if(u.size()>0){
			return "昵称已经存在";
		}else if(us.size()>0){
			return "用户名已经存在";
		}else{
			userDao.save(user);
			return "注册成功";
		}
		
	}
	@Override
	public User login(User user) {
		List<User> u = userDao.findLogin(user);
		if(u.size()>0){
			return u.get(0);
		}else{
			return null;
		}
	}
	@Override
	public PageBean<User> findByPage(int page) {
		PageBean<User> pageBean = new PageBean<User>();
		// 设置当前页数:
		pageBean.setPage(page);
		// 设置每页显示记录数:
		// 显示10个
		int limit = 10;
		pageBean.setLimit(limit);
		// 设置总记录数:
		int totalCount = 0;
		totalCount = userDao.findCount();
		pageBean.setTotalCount(totalCount);
		// 设置总页数
		int totalPage = 0;
		if(totalCount % limit == 0){
			totalPage = totalCount / limit;
		}else{
			totalPage = totalCount / limit + 1;
		}
		pageBean.setTotalPage(totalPage);
		// 设置每页显示数据集合:
		int begin = (page - 1)*limit;
		List<User> list = userDao.findByPage(begin,limit);
		pageBean.setList(list);
		return pageBean;
	}
	@Override
	public User findById(int id) {
		return userDao.findById(id).get(0);
	}
	@Override
	public void update(User u) {
		userDao.update(u);	
	}
	public void delete(User u) {
		userDao.delete(u);	
	}
}
