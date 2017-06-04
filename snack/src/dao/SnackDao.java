package dao;

import java.util.List;

import model.Snack;

public interface SnackDao {
	public List<Snack> find();//��������С��
	public int findCount();//����ҳ��
	public List<Snack> findByPage(int begin, int limit);//��ҳ��ѯ
	public List<Snack> findD();//��˳����
	public List<Snack> findByUser(int id);//�����ϴ��˲���С��
	public Snack findById(int id);//��id����С��
	public List<Snack> findByType(String type);//���������С��
	public List<String> findTech();//����4������
	public List<String> findTaste();//����4����ζ
	public int sava(Snack snack);//����С��
	public void delete(Snack snack);//ɾ��С��
	public void update(Snack snack);//����С��
	public List<String> findTechAll();//������������
	public List<String> findTasteAll();//�������п�ζ
	public List<String> findAreaAll();//�������е���
	public List<String> findTechNum();//����������������
	public List<String> findTasteNum();//�������п�ζ����
	public List<String> findAreaNum();//�������е������� 
}
