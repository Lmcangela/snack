package dao;

import java.util.List;

import model.Snack;

public interface SnackDao {
	public List<Snack> find();//查找所有小吃
	public int findCount();//查找页数
	public List<Snack> findByPage(int begin, int limit);//分页查询
	public List<Snack> findD();//倒顺查找
	public List<Snack> findByUser(int id);//根据上传人查找小吃
	public Snack findById(int id);//按id查找小吃
	public List<Snack> findByType(String type);//按种类查找小吃
	public List<String> findTech();//查找4个做法
	public List<String> findTaste();//查找4个口味
	public int sava(Snack snack);//保存小吃
	public void delete(Snack snack);//删除小吃
	public void update(Snack snack);//更新小吃
	public List<String> findTechAll();//查找所有做法
	public List<String> findTasteAll();//查找所有口味
	public List<String> findAreaAll();//查找所有地区
	public List<String> findTechNum();//查找所有做法总数
	public List<String> findTasteNum();//查找所有口味总数
	public List<String> findAreaNum();//查找所有地区总数 
}
