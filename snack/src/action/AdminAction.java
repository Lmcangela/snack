package action;

import model.Admin;
import model.User;
import service.impl.AdminServiceImpl;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

@SuppressWarnings("serial")
public class AdminAction extends ActionSupport {
	private Admin admin;
	private AdminServiceImpl adminService;
	public Admin getAdmin() {
		return admin;
	}
	public void setAdmin(Admin admin) {
		this.admin = admin;
	}
	public void setAdminService(AdminServiceImpl adminService) {
		this.adminService = adminService;
	}
	
	public String login(){
		Admin u = adminService.login(admin);
		if(u!=null){
			ActionContext.getContext().getSession().put("admin", u);
			return "logint";
		}else{
			addActionError("µÇÂ¼Ê§°Ü");
			return "loginf";
		}
	}
	public String out(){
		ActionContext.getContext().getSession().remove("admin");
		return "out";
	}
}
