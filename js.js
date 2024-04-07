function Time()
							{
								x=document.getElementById("time");  // 找到元素
								var d=new Date();
								var y = d.getFullYear();
								var m = d.getMonth() + 1;
								var day = d.getDate();
								var hour = d.getHours();
								var min = d.getMinutes();
								var s = d.getSeconds();
								if (s<=9){s = "0"+s;}
								if (min<=9){min = "0"+min;}
								x.innerHTML=y+"年"+m+"月"+day+"日 "+hour+":"+min+":"+s;    // 改变内容
								Time();
							}
