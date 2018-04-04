package com.bitcamp.web.mapper;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.bitcamp.web.domain.AdminDTO;
import com.bitcamp.web.domain.BoardDTO;
import com.bitcamp.web.domain.Command;
import com.bitcamp.web.domain.ImageDTO;
import com.bitcamp.web.domain.MemberDTO;

@Repository
public interface Mapper {
	public AdminDTO selectAdminById(Command cmd);
	public void insertMember(Command cmd);
	public MemberDTO selectMemberById(Command cmd);
	public ImageDTO addImage(ImageDTO image);
	public int exist(Command cmd);
	public void deleteMember(Command cmd);
	public void updateMember(Command cmd);
	public List<MemberDTO> selectAll(Command cmd);
	public List<BoardDTO> articles(Command cmd);
	public List<MemberDTO> selectByName(Command cmd);
	public MemberDTO searchMemberById(HashMap<?, ?> map);
	public AdminDTO searchAdminById(HashMap<?, ?> map);
	public int selectCount(Command cmd);
}
