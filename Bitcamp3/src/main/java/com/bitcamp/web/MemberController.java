package com.bitcamp.web;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;



//resController을 사용하여 SOP방식을 사용하게 해야된다.
//RestController을 사용하면 리스폰스 바디가 생략이 된다.
@RestController 
@RequestMapping(value="/member")
public class MemberController {
	private static final org.slf4j.Logger logger=LoggerFactory.getLogger(MemberController.class);
	
	@RequestMapping(value="/login",
			method=RequestMethod.POST,consumes="application/json")
	public /*@ResponseBody*/ Map<?,?> login(
			@RequestBody Object o) {
		Map<String,String> map = new HashMap<>();
		logger.info("Welcome {}","Member!");
		logger.info("전달된 ID {}","");
		logger.info("전달된 PASS {}","");
		map.put("flag", "success");
		return map;
	}
}
