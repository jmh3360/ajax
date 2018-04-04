package com.bitcamp.web.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bitcamp.web.domain.Command;
import com.bitcamp.web.mapper.Mapper;

//예를 들어 a,b,c 테이블이 있다고 가정을 한다면
//a의 테이블 값을 들고 와 b테이블에 정보를 받고 b테이블의 정보를 통해
//c 테이블의 결과가 필요하다면 중간에 하나라도 오류가 있을 시 
//null값을 전달한다.

@Service
public class TxService implements ITXService{
	@Autowired Mapper mapper;
	@Autowired Command cmd;
	@Override @Transactional// 부득이한 경우가 생겨아래와 같이 메서드를 두개 이상 호출한다면
	//트랜잭션을 따로 써 줘야한다.
	public Object widthdraw(HashMap<?, ?> param) {
		mapper.exist(cmd);
		mapper.insertMember(cmd);
		
		return null;
	}
	@Override
	public Object widthdraw2(HashMap<?, ?> param) {
		mapper.exist(cmd);
		mapper.insertMember(cmd);
		
		return null;
	}

}
