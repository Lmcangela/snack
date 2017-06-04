package service.impl;

import java.util.List;

import model.Admin;
import service.AdminService;
import dao.impl.AdminDaoImpl;

public class AdminServiceImpl implements AdminService {
	AdminDaoImpl adminDao;

	public void setAdminDao(AdminDaoImpl adminDao) {
		this.adminDao = adminDao;
	}

	public Admin login(Admin admin) {
		List<Admin> a = adminDao.Login(admin);
		if(a.size()>0){
			return a.get(0);
		}else{
			return null;
		}
	}
	
}
