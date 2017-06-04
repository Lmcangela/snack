package service.impl;


import java.util.List;

import dao.impl.CollectionDaoImpl;
import model.Collection;
import service.CollectionService;

public class CollectionServiceImpl implements CollectionService {
	CollectionDaoImpl collectionDao;

	public void setCollectionDao(CollectionDaoImpl collectionDao) {
		this.collectionDao = collectionDao;
	}

	@Override
	public void collec(Collection c) {
		collectionDao.sava(c);
	}

	@Override
	public List<Collection> collecByUser(int id) {
		return collectionDao.findByUser(id);
	}

	public int collS(int id1, int id2) {
		List<Collection> cl = collectionDao.findById(id1,id2);
		if(cl.size()>0){
			return 2;
		}
		else{
			return 1;
		}
	}

	@Override
	public void colled(Collection c) {
		Collection cl = collectionDao.findById(c.getUser().getId(), c.getSnack().getId()).get(0);
		collectionDao.delete(cl);	
	}

	

}
