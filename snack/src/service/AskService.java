package service;

import model.Ask;


public interface AskService {
	public void add(Ask ask);//�������
	public Ask find(int id);//�������
	public void laud(Ask ask);//������
}
