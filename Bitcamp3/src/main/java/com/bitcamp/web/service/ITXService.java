package com.bitcamp.web.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Component;

//트랜잭션 걸때 인터페이스 컴포넌트 처리해라 
@Component
public interface ITXService {
	public Object widthdraw(HashMap<?,?> param);
	public Object widthdraw2(HashMap<?, ?> param);
}
