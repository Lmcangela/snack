package action;


import java.util.List;

import model.PageBean;
import model.Question;
import service.impl.QuestionServiceImpl;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

@SuppressWarnings("serial")
public class QuestionAction extends ActionSupport {
	private List<Question> question;
	private Question questionOne;
	private int id;
	private QuestionServiceImpl questionService;
	private int page;
	
	
	public int getPage() {
		return page;
	}
	public void setPage(int page) {
		this.page = page;
	}
	public List<Question> getQuestion() {
		return question;
	}
	public void setQuestion(List<Question> question) {
		this.question = question;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public void setQuestionService(QuestionServiceImpl questionService) {
		this.questionService = questionService;
	}
	
	public Question getQuestionOne() {
		return questionOne;
	}
	public void setQuestionOne(Question questionOne) {
		this.questionOne = questionOne;
	}
	public String all(){
		PageBean<Question> pageBean = questionService.findByPage(page,5);
		ActionContext.getContext().getValueStack().set("pageBean", pageBean);
		return "question";
	}
	public String list(){
		PageBean<Question> pageBean = questionService.findByPage(page,10);
		ActionContext.getContext().getValueStack().set("pageBean", pageBean);
		return "list";
	}
	public String add(){
		questionService.add(questionOne);
		return "add";
	}
	public String delete(){
		questionService.delete(id);
		return "delete";
	}
	public String adelete(){
		questionService.delete(id);
		return "adelete";
	}
	public String info(){
		questionOne = questionService.findById(id);
		return "info";
	}
	public String my(){
		question = questionService.findByUser(id);
		return "my";
	}
	public String edit(){
		questionOne = questionService.findById(id);
		return "edit";
	}
	public String update(){
		questionService.update(questionOne);
		return "update";
	}
}
