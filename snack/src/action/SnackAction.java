package action;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import model.PageBean;
import model.Snack;
import model.Type;
import model.User;

import org.apache.commons.io.FileUtils;
import org.apache.struts2.ServletActionContext;

import service.impl.CollectionServiceImpl;
import service.impl.SnackServiceImpl;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

@SuppressWarnings("serial")
public class SnackAction extends ActionSupport {
	private File file;
	private String fileFileName; 
	private Snack snackOne;
	private List<Snack> snack;
	private SnackServiceImpl snackService;
	private CollectionServiceImpl collectionService;
	private List<String> type; //��ҳ����
	private List<Type> typeAll ; //����ҳ����
	private int collec;//�ղ�״̬
	private int page;//ҳ��

	

	public int getPage() {
		return page;
	}
	public void setPage(int page) {
		this.page = page;
	}
	public int getCollec() {
		return collec;
	}
	public void setCollec(int collec) {
		this.collec = collec;
	}
	public List<Type> getTypeAll() {
		return typeAll;
	}
	public void setTypeAll(List<Type> typeAll) {
		this.typeAll = typeAll;
	}
	public File getFile() {
		return file;
	}
	public void setFile(File file) {
		this.file = file;
	}
	public String getFileFileName() {
		return fileFileName;
	}
	public void setFileFileName(String fileFileName) {
		this.fileFileName = fileFileName;
	}
	public Snack getSnackOne() {
		return snackOne;
	}
	public void setSnackOne(Snack snackOne) {
		this.snackOne = snackOne;
	}
	public List<String> getType() {
		return type;
	}
	public void setType(List<String> type) {
		this.type = type;
	}
	public List<Snack> getSnack() {
		return snack;
	}
	public void setSnack(List<Snack> snack) {
		this.snack = snack;
	}
	public void setSnackService(SnackServiceImpl snackService) {
		this.snackService = snackService;
	}
	
	public void setCollectionService(CollectionServiceImpl collectionService) {
		this.collectionService = collectionService;
	}
	public String all(){
		PageBean<Snack> pageBean = snackService.findByPage(page);
		ActionContext.getContext().getValueStack().set("pageBean", pageBean);
		return "allsnack";
	}
	public String list(){
		PageBean<Snack> pageBean = snackService.findByPage(page);
		ActionContext.getContext().getValueStack().set("pageBean", pageBean);
		return "list";
	}
	public String delete(){
		// ����id��ѯ��Ʒ��Ϣ
		snackOne = snackService.findById(snackOne.getId());
		// ɾ����Ʒ��ͼƬ:
		String path = ServletActionContext.getServletContext().getRealPath(
				"/" + snackOne.getImgurl());
		File file = new File(path);
		file.delete();
		// ɾ�����ݿ�����Ʒ��¼:
		snackService.delete(snackOne.getId());
		return "delete";
	}
	public String index(){
		type = snackService.findType();
		snack = snackService.findIndex();
		return "index";
	}
	public String type(){
		typeAll = snackService.findTypeAll();
		return "type";
	}
	public String upload() throws IOException{
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
		String str = sdf.format(new Date());
		String filename = str+fileFileName;
		// ����ƷͼƬ�ϴ�����������.
		// ����ϴ�ͼƬ�ķ�������·��.
		String path = ServletActionContext.getServletContext().getRealPath(
				"/picture");
		// �����ļ����Ͷ���:
		File diskFile = new File(path + "//" + filename);
		// �ļ��ϴ�:
		FileUtils.copyFile(file, diskFile);
        snackOne.setImgurl("picture/"+filename);
		if(snackService.upload(snackOne)){
			return "upt";
		}else{
			addActionError("�Ѵ�����ͬ����");
			return "upf";
		}
	}
	public String info(){
		User user = (User)ActionContext.getContext().getSession().get("user");
		if(user==null){
			collec = 0;
		}else{
			collec = collectionService.collS(user.getId(),snackOne.getId());
		}
		snackOne = snackService.findById(snackOne.getId());
		snack = snackService.findIndex();
		return "info";
	}
	public String shenhe(){
		snackOne = snackService.findById(snackOne.getId());
		return "shenhe";
	}
	public String shps(){
		snackOne = snackService.findById(snackOne.getId());
		snackOne.setStatus(2);
		snackService.update(snackOne);
		return "shps";
	}
	public String TypeInfo() throws UnsupportedEncodingException{
		snackOne.setTaste(new String(snackOne.getTaste().getBytes("ISO8859_1"), "UTF8"));
		snack = snackService.findByType(snackOne.getTaste());
		return "typeinfo";
	}
	public String search() throws UnsupportedEncodingException{
		snackOne.setTaste(new String(snackOne.getTaste().getBytes("ISO8859_1"), "UTF8"));
		snack = snackService.search(snackOne.getTaste());
		return "search";
	}
	public String my(){
		snack = snackService.findByUser(snackOne.getId());
		return "mysnack";
	}
	public String edit(){	
		snackOne = snackService.findById(snackOne.getId());
		return "edit";
	}
	public String update() throws IOException{	
		if(file!=null){
			SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
			String str = sdf.format(new Date());
			String filename = str+fileFileName;
			// ����ƷͼƬ�ϴ�����������.
			// ����ϴ�ͼƬ�ķ�������·��.
			String path = ServletActionContext.getServletContext().getRealPath(
					"/picture");
			// �����ļ����Ͷ���:
			File diskFile = new File(path + "//" + filename);
			// �ļ��ϴ�:
			FileUtils.copyFile(file, diskFile);
	        snackOne.setImgurl("picture/"+filename);
		}
		snackService.update(snackOne);
		return "update";
	}
	public String adelete(){
		// ����id��ѯ��Ʒ��Ϣ
		snackOne = snackService.findById(snackOne.getId());
		// ɾ����Ʒ��ͼƬ:
		String path = ServletActionContext.getServletContext().getRealPath(
				"/" + snackOne.getImgurl());
		File file = new File(path);
		file.delete();
		// ɾ�����ݿ�����Ʒ��¼:
		snackService.delete(snackOne.getId());
		return "adelete";
	}
	
}
