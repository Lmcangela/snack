package service;

import model.Ask;


public interface AskService {
	public void add(Ask ask);//问题添加
	public Ask find(int id);//问题查找
	public void laud(Ask ask);//增加赞
}
