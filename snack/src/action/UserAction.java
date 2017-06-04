package action;




import model.PageBean;
import model.User;
import service.impl.UserServiceImpl;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

@SuppressWarnings("serial")
public class UserAction extends ActionSupport {
	private User user;
	private User fUser;
	private UserServiceImpl userService;
	private int page;
	private int id;
	
	
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getPage() {
		return page;
	}

	public void setPage(int page) {
		this.page = page;
	}

	public void setUserService(UserServiceImpl userService) {
		this.userService = userService;
	}

	public User getfUser() {
		return fUser;
	}


	public void setfUser(User fUser) {
		this.fUser = fUser;
	}


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}
	
	public String zhuce(){
		String info = userService.regist(user);
		if("×¢²á³É¹¦".equals(info)){
			User u = userService.login(user);
			ActionContext.getContext().getSession().put("user", u);
			return "zct";
		}else {
			fUser = user;
			addActionError(info);
			return "zcf";
		}
	}
	public String login(){
		User u = userService.login(user);
		if(u!=null){
			ActionContext.getContext().getSession().put("user", u);
			return "logint";
		}else{
			addActionError("µÇÂ¼Ê§°Ü");
			return "loginf";
		}
	}
	public String out(){
		ActionContext.getContext().getSession().remove("user");
		return "out";
	}
	public String list(){
		PageBean<User> pageBean = userService.findByPage(page);
		ActionContext.getContext().getValueStack().set("pageBean", pageBean);
		return "list";
	}
	public String edit(){
		user = userService.findById(id);
		return "edit";
	}
	public String update(){	
		userService.update(user);
		return "update";
	}
	public String delete(){
		user = userService.findById(id);
		userService.delete(user);
		return "delete";
	}
}
