package service;

import java.util.List;

import model.PageBean;
import model.Snack;
import model.Type;

public interface SnackService {
	public PageBean<Snack> findByPage(int page);//����ҳ������С��
	public List<Type> findTypeAll();//���ҷ���ҳ����С��
	public List<Snack> findIndex();//������ҳ����С��
	public List<String> findType();//��������
	public Snack findById(int id);//��id����С��
	public List<Snack> findByUser(int id);//���ϴ��˲���
	public List<Snack> findByType(String type);//���������С��
	public List<Snack> search(String s);//����С��
	public boolean upload(Snack snack);//�ϴ�
	public void delete(int id);//ɾ��С��
	public void update(Snack s);//����С��
}
