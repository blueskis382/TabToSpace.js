function TabToSpace(tabsize){
	//Replace tab to space 
	var retstr = "" ;
	for(var j = 0 ; j < str.split("\n").length;j++){
		for(var i = 0 ; i < str.split("\n")[j].length;i++){
			var str2 = str.split("\n")[j]
			if(str2.substring(i , i+1) == "\t"){
				var n = str.length ;
				do{
					retstr += " "
					n++ ;
				}while( ( i + n ) % 8 != 0)
			}else{
				retstr += str2.substring(i , i+1) ;
			}
		}
		retstr += "\n"
	}
	return retstr
}