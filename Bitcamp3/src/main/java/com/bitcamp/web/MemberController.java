package com.bitcamp.web;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.bitcamp.web.domain.Command;
import com.bitcamp.web.domain.MemberDTO;
import com.bitcamp.web.mapper.Mapper;
import com.bitcamp.web.service.ICountService;
import com.bitcamp.web.service.IGetService;



//resController을 사용하여 SOP방식을 사용하게 해야된다.
//RestController을 사용하면 리스폰스 바디가 생략이 된다.
@RestController 
@RequestMapping(value="/member")
public class MemberController {
	private static final org.slf4j.Logger logger=LoggerFactory.getLogger(MemberController.class);
	@Autowired Mapper mapper;
	@Autowired Command cmd;
	@Autowired MemberDTO member;
	@RequestMapping(value="/login",
			method=RequestMethod.POST,consumes="application/json")
	public /*@ResponseBody*/ Map<?,?> login(
			@RequestBody MemberDTO m) {
		Map<String,Object> map = new HashMap<>();
		logger.info("Welcome {}","Member!");
		logger.info("전달된 ID {} PASS {}",m.getId(),m.getPass());
		
		
		cmd = new Command();
		cmd.setData1(m.getId());
		cmd.setData2(m.getPass());
		logger.info(m.getId());
		
		int count =new ICountService() {
			
			@Override
			public int execute(Command cmd) {
				return mapper.exist(cmd);
			}
		}.execute(cmd);
		if(count == 1) {
			System.out.println("count 값은 뭘까? "+count);
			member.setId("장만호");
			map.put("user", member);
		}
		System.out.println("그다음 count 값:"+count);
		map.put("success", count+"");
		Object a = (MemberDTO) new IGetService() {
			
			@Override
			public Object execute(Command cmd) {
				// TODO Auto-generated method stub
				return mapper.selectMemberById(cmd);
			}
		}.execute(cmd);
		System.out.println("a에 들어있는건 뭐셈?"+((MemberDTO) a).getId());
		System.out.println("a에 들어있는건 뭐셈?"+((MemberDTO) a).getPass());
		if(m.getId()==((MemberDTO) a).getId() && m.getPass()==((MemberDTO) a).getId()) {
			
		}else {
			
		}
		return map;
	}
}
