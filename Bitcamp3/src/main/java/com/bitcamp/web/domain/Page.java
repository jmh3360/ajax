package com.bitcamp.web.domain;


import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;




@Component @Lazy
public class Page {
	int pageNum,totalCount,totalPage,pageSize,blockSize,
    startRow,endRow,pageStart,pageEnd,pagePrev,pageNext;
	
	boolean prevBlock,nextBlock;
	
	
	public int getPageNum() {
		return pageNum;
	}
	public void setPageNum(int pageNum) {
		this.pageNum = pageNum;
	}
	public int getTotalCount() {
	    return totalCount;
	}
	public void setTotalCount(int totalCount) {
	    this.totalCount = totalCount;
	}
	public int getPageSize() {
	    return pageSize;
	}
	public void setPageSize(int pageSize) {
	    this.pageSize = pageSize;
	}
	public int getBlockSize() {
	    return blockSize;
	}
	public void setBlockSize(int blockSize) {
	    this.blockSize = blockSize;
	}
	public int getStartRow() {
	    return startRow;
	}
	public void setStartRow(int startRow) {
	    this.startRow = (pageNum -1) * pageSize + 1;
	}
	public int getEndRow() {
	    return endRow;
	}
	public void setEndRow(int endRow) {
	    this.endRow = ((startRow + 4) > totalCount) ? totalCount : startRow+4 ;
	}
	public int getPageStart() {
	    return pageStart;
	}
	public void setPageStart(int pageStart) {
	    this.pageStart = (blockSize * ((pageNum - 1) / blockSize)) + 1;
	    
	}
	public int getPageEnd() {
	    return pageEnd;
	}
	public void setPageEnd(int pageEnd) {
	    this.pageEnd = ((pageStart + 4) > totalPage) ? totalPage : pageStart+4 ;
	}
	public int getTotalPage() {
		return totalPage;
	}
	public void setTotalPage(int totalPage) {
		this.totalPage = (totalCount % pageSize == 0) ? totalCount/ pageSize : (totalCount/ pageSize) + 1;
	}
	public boolean isPrevBlock() {
		return prevBlock;
	}
	public void setPrevBlock(boolean prevBlock) {
		this.prevBlock = (pageNum > 5) ? true : false;
	}
	public boolean isNextBlock() {
		return nextBlock;
	}
	public void setNextBlock(boolean nextBlock) {
		this.nextBlock = (pageNum < totalPage) ? true : false;
	}
	public int getPagePrev() {
		return pagePrev;
	}
	public void setPagePrev(int pagePrev) {
		this.pagePrev = pageEnd-pageSize;
	}
	public int getPageNext() {
		return pageNext;
	}
	public void setPageNext(int pageNext) {
		this.pageNext = pageStart+pageSize;
	}
}
