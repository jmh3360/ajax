package com.bitcamp.web.domain;

import java.util.Map;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import lombok.Data;
@Data
@Service @Lazy
public class Command {
	protected Map<?, ?> cmd;
}
