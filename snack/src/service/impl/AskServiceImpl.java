package service.impl;



import dao.impl.AskDaoImpl;
import model.Ask;

import service.AskService;

public class AskServiceImpl implements AskService {
	AskDaoImpl askDao;

	public void setAskDao(AskDaoImpl askDao) {
		this.askDao = askDao;
	}

	@Override
	public void add(Ask ask) {
		askDao.save(ask);
	}

	@Override
	public Ask find(int id) {
		return askDao.find(id).get(0);
	}

	@Override
	public void laud(Ask ask) {
		ask.setLaud(ask.getLaud()+1);
		askDao.update(ask);		
	}
	

}
