package com.bitcamp.web;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.junit.internal.runners.model.MultipleFailureException;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.bitcamp.web.domain.AdminDTO;
import com.bitcamp.web.domain.BoardDTO;
import com.bitcamp.web.domain.Command;
import com.bitcamp.web.domain.ImageDTO;
import com.bitcamp.web.domain.MemberDTO;
import com.bitcamp.web.domain.Page;
import com.bitcamp.web.mapper.Mapper;
import com.bitcamp.web.service.ICountService;
import com.bitcamp.web.service.IGetService;
import com.bitcamp.web.service.ISerchService;
import com.bitcamp.web.util.FileProxy;
import com.bitcamp.web.util.ImageRepo;
import com.bitcamp.web.util.PageAdapter;



//resController을 사용하여 SOP방식을 사용하게 해야된다.
//RestController을 사용하면 리스폰스 바디가 생략이 된다.
@RestController 
@RequestMapping(value="")
public class MemberController {
	private static final org.slf4j.Logger logger=LoggerFactory.getLogger(MemberController.class);
	@Autowired Mapper mapper;
	@Autowired Command cmd;
	@Autowired MemberDTO member;
	@Autowired Page page;
	@Autowired PageAdapter adapter;
	@Autowired ImageDTO image;
	
	@RequestMapping(value="/search/{keyword}",
			method=RequestMethod.POST,consumes="application/json")
	public Object searchOne(		
			@PathVariable("keyword")String keyword,
			@RequestBody HashMap<String, String> param){
		Map<String,Object> map = new HashMap<>();
		Object o =null;
		System.out.println("넘어온 검색 data : "+param.get("type")+"/"+param.get("content"));
	 switch (param.get("type")) {
		case "member":
			param.put("id", "id");
			o= new ISerchService() {
				
				@Override
				public Object execute(HashMap<?, ?> param) {
					
					return mapper.searchMemberById((HashMap<?, ?>) param);
				}
			}.execute(param);
			break;
		case "admin":
			o= new ISerchService() {
				
				@Override
				public Object execute(HashMap<?, ?> param) {
					// TODO Auto-generated method stub
					return mapper.searchAdminById((HashMap<?, ?>) map);
				}
			}.execute(param);
			
			break;
		default:
			break;
		}
		return o;
		
		
	}
	@RequestMapping(value="/{type}/{id}/login",
			method=RequestMethod.POST,consumes="application/json")
	public /*@ResponseBody*/ Map<?,?> getUserId(
			@PathVariable String type,
			@PathVariable String id,
			@RequestBody MemberDTO m) {
		Map<String,Object> map = new HashMap<>();
		logger.info("Welcome {}","Member!");
		logger.info("전달된 TYPE {} ID {} PASS {}",type,id,m.getPass());
		
		cmd = new Command();
		cmd.setType(type);
		switch (type) {
		case "member":
			cmd.setId("id");
			cmd.setPass("pass");
			break;
		case "admin":
			cmd.setId("admin_id");
			cmd.setPass("admin_pass");
			break;

		}
		
		cmd.setData1(id);
		cmd.setData2(m.getPass());
		logger.info(id);
		
		int count =new ICountService() {
			
			@Override
			public int execute(Command cmd) {
				return mapper.exist(cmd);
			}
		}.execute(cmd);
		map.put("success", count+"");
		

		Object a = (MemberDTO) new IGetService() {
			
			@Override
			public Object execute(Command cmd) {

				return mapper.selectMemberById(cmd);
			}
		}.execute(cmd);
		map.put("member", a);

		
			
		
		return map;
	}
	@RequestMapping(value="/articles/{pageNum}")
	public Map<?,?> getArticles(
			@PathVariable String pageNum){
		Map<String,Object>map = new HashMap<>();
		page.setTotalCount(new ICountService() {
			
			@Override
			public int execute(Command cmd) {
				// TODO Auto-generated method stub
				return mapper.selectCount(cmd);
			}
		}.execute(cmd));
		page.setPageNum(Integer.parseInt(pageNum));
		page.setBlockSize(5);
		page.setPageSize(5);
		page = (Page) adapter.attr(page);
		map.put("list", (List<?>) new IGetService() {
			
			@Override
			public Object execute(Command cmd) {
				return mapper.articles(cmd);
			}
		}.execute(cmd));
		logger.info(page.getTotalCount()+"토탈카운트 는?");
		cmd.setPaging(page);
		map.put("page", page);
		/*for(Object o : list) {
			System.out.println("게시글"+(BoardDTO)o);
		}*/
		return map;
	}
	@RequestMapping(value="/boards/{seq}",
			method=RequestMethod.POST,consumes="application/json")
	public Map<?,?> getArticle(){
		Map<String,Object> map = new HashMap<>();
		return map;
	}
	//리퀘스트 맵핑의 이름이 같으면 에러가 발생한다.
	@RequestMapping(value="/board/{seq}",
			method=RequestMethod.POST,consumes="application/json")
	public Map<?,?> putArticle(){
		Map<String,Object> map = new HashMap<>();
		return map;
	}
	@RequestMapping(value="/board/post/article",
			method=RequestMethod.POST,consumes="application/json")
	public Map<?,?> postArticles(
			@RequestBody BoardDTO board){
		Map<String,Object> map = new HashMap<>();
		System.out.println("넘어온 ID : "+board.getId());
		System.out.println("넘어온 글제목 : "+board.getTitle());
		System.out.println("넘어온 글 내용 : "+board.getTitle());
		return map;
	}
	 @RequestMapping(value="/board/file/upload", method=RequestMethod.POST)
	    public Map<?,?> fileupload(
	    		MultipartHttpServletRequest request,
	    		HttpSession session ) 
	    		throws IllegalStateException, IOException {
		 Map<String,Object> map = new HashMap<>();	
		 	FileProxy pxy = new FileProxy();
		 	Iterator<String> it = request.getFileNames();
		 	if(it.hasNext()) {
		 		MultipartFile file = request.getFile(it.next());
		 		String rootPath = request.getSession().getServletContext().getRealPath("/");
		 		 String uploadPath = "resources/image/";
		 		String filename = file.getOriginalFilename();
		 		 System.out.println("파일네임"+filename);
		 		image.setImageId(new SimpleDateFormat("yyyyMMdd_hhmm_").format(new Date())+filename);
	              image.setFileName(filename);
		 	}
		 	
		 	  /*List<MultipartFile> files = file.getFiles();*/
	          System.out.println("/board/upload/컨트롤러진입");
	        String fileName = pxy.getFile().getOriginalFilename();
	        
	        System.out.println("업로드된 파일 : "+fileName);
	        String path = 
	                ImageRepo.UPLOAD_PATH.toString()+ fileName;
	        
	        File file = new File(path);
	        
	        pxy.getFile().transferTo(file);
		 	/*String fileName = pxy.getFile().getOriginalFilename();
	    	System.out.println("업로드된 파일 : " + fileName);
	    	String path = ImageRepo.UPLOAD_PATH.toString()+File.separator+ fileName;*/
	    			
	    	//String path = "c:/java/project/upload/" + fileName;
	        return map;
	    }
}