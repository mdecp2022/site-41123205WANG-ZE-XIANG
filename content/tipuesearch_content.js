var tipuesearch = {"pages": [{'title': 'About', 'text': 'cmsite: wcms use  https://github.com/mdecycu/cmsimde  as submodule \n', 'tags': '', 'url': 'About.html'}, {'title': 'cp2022', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n \n', 'tags': '', 'url': 'cp2022.html'}, {'title': 'HW', 'text': '', 'tags': '', 'url': 'HW.html'}, {'title': 'w16', 'text': 'ex.1 \n # 這個程式用於 demo 綠色方塊沿著特定網格路徑行走\n# 從 Brython 程式庫中的 browser 模組導入 document 類別, 並以簡寫設定為 doc\nfrom browser import document as doc\n# 從 browser 模組導入 html 類別, 主要用於建立 CANVAS 標註物件, 並插入頁面中\nfrom browser import html\n# 用於定時執行特定函式\nimport browser.timer\n# 導入亂數模組\nfrom random import random, randint\n\n# 利用 html 建立一個 CANVAS 標註物件, 與變數 canvas 對應\ncanvas = html.CANVAS(width = 600, height = 600)\n# 將 canvas 標註的 id 設為 "canvas"\ncanvas.id = "canvas"\n# 將 document 中 id 為 "brython_div" 的標註 \n# 設為與 brython_div 變數對應\nbrython_div = doc["brython_div1"]\n\n# 建立 buttons\nbrython_div <= html.BUTTON("啟動", id="power")\nbrython_div <= html.BR()\n\n# 將 canvas 標註放入 brython_div1 所在位置\n# 頁面中原本就已經放入 <div id="brython_div"></div> 標註\nbrython_div <= canvas\n# 將頁面中 id 為 canvas 的 CANVAS 設為與 canvas 變數對應\ncanvas = doc["canvas"]\n# 將 canvas 的 2d 繪圖 context 命名為 ctx\nctx = canvas.getContext("2d")\n\n# 建立一個 dRect() 函式\n# s default 為 1, c defaul 為紅色\ndef dRect(lux, luy, w, h, s=1, c=\'#ff0000\'):\n    ctx.lineWidth = s\n    ctx.strokeStyle = c\n    ctx.beginPath();\n    ctx.rect(lux, luy, w, h)\n    ctx.stroke();\n    \n# 建立畫直線函式\ndef draw_line(x1, y1, x2, y2, color="#ff0000"):\n    ctx.beginPath()\n    ctx.moveTo(x1, y1)\n    ctx.lineTo(x2, y2)\n    ctx.strokeStyle = color\n    ctx.stroke()\n\n# 建立 write Text 函式\ndef wText(x, y, t, s=14, c=\'#0000ff\'):\n    ctx.font = str(s) + "px Arial";\n    ctx.fillText(t, x, y)\n\n# 定義畫格線的函式\ndef grid(startx, starty, w, h, wnum, hnum, pixel=1, color="#ff0000"):\n    # 利用迴圈與座標增量繪圖\n    # 因為輸入 wnum 與 hnum 為格子數, 畫格線數則需加上 1\n    for i in range(wnum+1):\n        for j in range(hnum+1):\n            # 畫上下直線\n            yend = starty + h*(hnum)\n            xend = startx + w*(wnum)\n            x = startx + i*w\n            draw_line(x, starty, x, yend, color)\n            # 畫左右直線\n            y = starty + j*h\n            draw_line(startx, y, xend, y, color)\n            #wText(w/2-10, y-w/2, str(j))\n\n# 從兩個座標點求中心點座標\ndef center(lx, ly, rx, ry):\n    # lx is x coord of the left up corner\n    # rx is the x coord of th right down corner\n    x = (lx + rx)/2\n    y = (ly + ry)/2\n    return x, y\n    \n# 畫出填色方塊\ndef draw_rect(gx, gy, gw, gh, color="lime"):\n    # gx is the grid coord at x direction\n    # gy is the grid coord at y direction\n    # gw is the with of the green rect\n    # gh is the height of the green rect\n    lx = origx + (gx-1)*w\n    ly = origy + (gy-1)*h\n    rx = origx + gx*w\n    ry = origy + gy*h\n    cx, cy = center(lx, ly, rx, ry)\n    # glx is the x coord of the left corner\n    # gly is the y coord of the left corner\n    glx = cx - gw/2\n    gly = cy - gh/2\n    # 利用設定的顏色值畫出 rectangle\n    ctx.fillStyle = color\n    ctx.fillRect(glx, gly, gw, gh)\n\n# 以白色覆蓋位於 (nowx, nowy) \n# 且比目標方塊長寬各大於 1 pixel的方塊\ndef wipe():\n    draw_rect(nowx, nowy, 30+1, 30+1, color="white")\n\n# 畫出位於 (nowx, nowy) 的綠色方塊\ndef draw():\n    draw_rect(nowx, nowy, 30, 30, color="lime")\n\n# 繞著外圍行走\ndef walk():\n    global stepx, stepy\n    # 向右\n    if nowx == 1 and nowy == 1:\n        stepx = 1\n        stepy = 0\n    # 向下\n    elif nowx == 8 and nowy == 1:\n        stepx = 0\n        stepy = 1\n    # 向右\n    elif nowx == 8 and nowy == 15:\n        stepx = 1\n        stepy = 0\n    # 向上\n    elif nowx == 15 and nowy == 15:\n        stepx = 0\n        stepy = -1\n    # 向左\n    elif nowy == 8 and nowx == 15:\n        stepx = -1\n        stepy = 0\n    # 向上\n    elif nowy == 8 and nowx == 1:\n        stepx = 0\n        stepy = -1 \n        \n# 每隔短暫時間即呼叫執行一次的函式\ndef game():\n    # 因 nowx 與 nowy 在函式外宣告\n    # 且在函式內改變對應值, 因此需宣告為 global\n    global nowx, nowy\n    walk()\n    wipe()\n    nowx += stepx\n    nowy += stepy\n    draw()\n\n# 將 anim 設為 None\nanim = None\n \ndef launchAnimation(ev):\n    global anim\n    # 初始啟動, anim 為 None\n    if anim is None:\n        # 每 0.08 秒執行一次 draw 函式繪圖\n        #anim = timer.set_interval(draw, 80)\n        anim = browser.timer.set_interval(game, 100)\n        # 初始啟動後, 按鈕文字轉為"暫停"\n        doc[\'power\'].text = \'暫停\'\n    elif anim == \'hold\':\n        # 當 anim 為 \'hold\' 表示曾經暫停後的啟動, 因此持續以 set_interval() 持續旋轉, 且將 power 文字轉為"暫停"\n        #anim = timer.set_interval(draw, 80)\n        anim = browser.timer.set_interval(game, 100)\n        doc[\'power\'].text = \'暫停\'\n    else:\n        # 初始啟動後, 使用者再按 power, 此時 anim 非 None 也不是 \'hold\', 因此會執行 clear_interval() 暫停\n        # 且將 anim 變數設為 \'hold\', 且 power 文字轉為"繼續"\n        #timer.clear_interval(anim)\n        browser.timer.clear_interval(anim)\n        anim = \'hold\'\n        doc[\'power\'].text = \'繼續\'\n        \n# 綠色方塊起點座標與 x 及 y 方向的座標增量\nnowx = 1\nnowy = 1\nstepx = 0\nstepy = 0\n# 設定格數\n# width 方向格子數\nwnum = 15\n# height 方向格子數\nhnum = 15\n# 設定線寬\npixel = 1\n# 設定 w 寬度\nw = int(canvas.width/wnum) - pixel\n# 設定 h 高度\nh = int(canvas.height/hnum) - pixel\n# 設定繪圖座標點起點位置\norigx = 1\norigy = 1\n# 利用 grid 函式畫出格線\ngrid(origx, origy, w, h, wnum, hnum, pixel=1, color="black")\n\ndoc["power"].bind("click", launchAnimation)\n#browser.timer.set_interval(game, 100)', 'tags': '', 'url': 'w16.html'}, {'title': 'W5', 'text': '密碼亂數 \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W6', 'text': '抽點 \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W10', 'text': '考試調查 \n', 'tags': '', 'url': 'W10.html'}, {'title': 'W11', 'text': '考試結果 \n 繪圖 \n', 'tags': '', 'url': 'W11.html'}, {'title': 'W12', 'text': 'ex1 \n # Brython 的 input() 可以接受輸入提示字串, 跳出瀏覽器輸入表單後, 將輸入內容以字串取回\nuser_input_temp = input("請輸入攝氏溫度值:")\n# 接著列出 user_input_temp 變數的資料型別\nprint(type(user_input_temp)) \n ex2 \n # Brython 的 input() 可以接受輸入提示字串, 跳出瀏覽器輸入表單後, 將輸入內容以字串取回\nuser_input_temp = input("請輸入攝氏溫度值:")\n# 接著列出 user_input_temp 變數的資料型別\nprint(type(user_input_temp))\n# 到這裡已知利用 input() 函式將傳回字串, 接著以 float() 將字串轉為浮點數\nuser_input_temp = float(user_input_temp)\n# 因為攝氏溫度乘上 9/5 之後再加上 32 就可以得到對應的華氏溫度值\nFahrenheit = (user_input_temp*9/5) + 32\n# 到這裡, Fahrenheit 資料型別為浮點數, 而 user_input_temp 在第 8 行也轉為浮點數\n# 要將兩個浮點數與字串相加, 都必須透過 str() 轉為字串\nprint("攝氏 " + str(user_input_temp) + " 度, 等於華氏 " + str(Fahrenheit) + " 度.")\n     \n \n  \n在動態網站頁面中啟用 Brython 執行環境的用法, 請注意動態網站執行所在路徑\n \n \n \n  啟動 Brython  \n \n \n  以下事先在頁面中加入 id="brython_div" 的 div 標註\n之後可利用 Brython 的 document 模組與此 html 標註對應\n \n \n \n \n \n \n \n \n \n \n \n \n以下為 Flask 伺服器端的程式碼\nfrom flask import Flask, request \nfrom flask_cors import CORS\n  \napp = Flask(__name__)\nCORS(app)\n@app.route(\'/\', methods=[\'GET\'])\ndef index():\n    # 利用 Flask request 取得 GET 模式下的 temp 變數值\n    # 若 temp 無值, 則內定為 "30"\n    temp = request.args.get(\'temp\', default="30")\n    # 當使用者在瀏覽器執行 Brython 程式時, 可以利用 GET 將 temp 變數值傳給 server 端的 Flask Python 程式\n    # 若瀏覽器前端採 form 表單取值, 則 Flask 可以 request.form.get() 取值\n    return "已經取得 temp: " + str(temp)\n  \nif __name__ == \'__main__\':\n    app.run(host=\'127.0.0.1\', port=8080, debug=True)\n \n \n', 'tags': '', 'url': 'W12.html'}, {'title': 'W13', 'text': 'w13溫度轉換ex1 \n w13溫度轉換ex2 \n', 'tags': '', 'url': 'W13.html'}, {'title': 'w15', 'text': '\n 為何學習計算機程式需要建立個人倉儲? \xa0\xa0 A:當網站出錯時，可以從更新紀錄中查看出錯的步驟 2. 全球資訊網能夠提供甚麼功能或有什麼優點?   3. Replit, stud.cycu.org 與 localhost 分別代表甚麼?   4. https, ssh 到底提供使用者那些功能或優點?   5. Brython 與 Python 有甚麼差別?   6. 能夠直接在瀏覽器中以 Brython 繪製中華民國國旗, 或模擬綠色方塊在方塊格點中任意移動, 代表甚麼?   7. 變數, 字串, 整數, 浮點數, 數列, Tuple, Dictionary, 函式, 重複迴圈, class, 物件導向, 資料庫, 這些名詞對您而言代表甚麼? \n \n', 'tags': '', 'url': 'w15.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束 ', 'tags': '', 'url': 'Brython.html'}]};