package com.bitcamp.web.post;

import java.util.Map;

import org.springframework.stereotype.Service;

import com.bitcamp.web.domain.Command;

@Service
public interface GetService {
	public  Map<?,?> execute(Command cmd); 
}
