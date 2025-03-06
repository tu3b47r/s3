var re = document.getElementsByTagName('li')[1];
/*這是用JavaScript寫一個將此標籤的第二個項目存入
新增的變數之程式語法*/

var par1 = re.parentNode;
/*這是用JavaScript寫一個尋找ul裡面有沒有上面變數
的內容之程式語法*/

par1.removeChild(re);
/*這是用JavaScript寫一個將re指定的項目刪除之程式
語法*/
