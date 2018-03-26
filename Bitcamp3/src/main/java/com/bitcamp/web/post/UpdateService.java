package com.bitcamp.web.post;

import org.springframework.stereotype.Service;

import com.bitcamp.web.domain.Command;

@Service
public interface UpdateService {
	public void execute(Command cmd);
}
