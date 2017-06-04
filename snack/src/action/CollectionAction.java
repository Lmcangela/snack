package action;

import java.util.List;

import model.Collection;
import service.impl.CollectionServiceImpl;

import com.opensymphony.xwork2.ActionSupport;




@SuppressWarnings("serial")
public class CollectionAction extends ActionSupport {
	private CollectionServiceImpl collectionService;
	private Collection collection;
	private List<Collection> collecList;
	private int userId;
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public Collection getCollection() {
		return collection;
	}
	public void setCollection(Collection collection) {
		this.collection = collection;
	}
	public void setCollectionService(CollectionServiceImpl collectionService) {
		this.collectionService = collectionService;
	}
	
	public List<Collection> getCollecList() {
		return collecList;
	}
	public void setCollecList(List<Collection> collecList) {
		this.collecList = collecList;
	}
	public String add(){
		collectionService.collec(collection);
		return "add";
	}
	public String delete(){
		collectionService.colled(collection);
		return "delete";
	}
	public String my(){
		collecList = collectionService.collecByUser(userId);
		return "mycollec";
	}

}
