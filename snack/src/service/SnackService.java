package service;

import java.util.List;

import model.PageBean;
import model.Snack;
import model.Type;

public interface SnackService {
	public PageBean<Snack> findByPage(int page);//根据页数查找小吃
	public List<Type> findTypeAll();//查找分类页所需小吃
	public List<Snack> findIndex();//查找首页所需小吃
	public List<String> findType();//查找种类
	public Snack findById(int id);//按id查找小吃
	public List<Snack> findByUser(int id);//按上传人查找
	public List<Snack> findByType(String type);//按分类查找小吃
	public List<Snack> search(String s);//搜索小吃
	public boolean upload(Snack snack);//上传
	public void delete(int id);//删除小吃
	public void update(Snack s);//更新小吃
}
