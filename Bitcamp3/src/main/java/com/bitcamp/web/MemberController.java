package com.bitcamp.web;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.bticamp.web.domain.MemberDTO;

@RestController
public class MemberController {
	
	
	@RequestMapping(value="/login",
			method=RequestMethod.POST,consumes="application/jason")
	public @ResponseBody Map<?,?> login(
			@RequestBody MemberDTO m) {
		Map<String,String> map = new HashMap<>();
		map.put("flag", "success");
		return map;
	}
}
