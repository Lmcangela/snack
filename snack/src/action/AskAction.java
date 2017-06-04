package action;







import model.Ask;


import service.impl.AskServiceImpl;

import com.opensymphony.xwork2.ActionSupport;

@SuppressWarnings("serial")
public class AskAction extends ActionSupport {
	private Ask ask;
	private AskServiceImpl askService;
	private int laud;
	
	
	public int getLaud() {
		return laud;
	}


	public void setLaud(int laud) {
		this.laud = laud;
	}


	public Ask getAsk() {
		return ask;
	}


	public void setAsk(Ask ask) {
		this.ask = ask;
	}


	public void setAskService(AskServiceImpl askService) {
		this.askService = askService;
	}


	public String add(){
		askService.add(ask);
		return "add";
	}
	
	public String laud(){
		ask = askService.find(laud);
		askService.laud(ask);
		laud = ask.getLaud()+1;
        return "laud";
	}
}
