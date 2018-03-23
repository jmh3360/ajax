package com.bticamp.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
public class MemberDTO {
	private String id,pass,name,ssn,
				phone,email,profile,addr;

}
