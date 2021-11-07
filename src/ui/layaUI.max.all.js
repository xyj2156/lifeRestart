var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var CyberAchievementUI=(function(_super){
		function CyberAchievementUI(){
			
		    this.btnBack=null;

			CyberAchievementUI.__super.call(this);
		}

		CLASS$(CyberAchievementUI,'ui.view.CyberTheme.CyberAchievementUI',_super);
		var __proto__=CyberAchievementUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("ScaleButton",ScaleButton);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(CyberAchievementUI.uiView);

		}

		CyberAchievementUI.uiView={"type":"View","props":{"width":1125,"height":2436},"child":[{"type":"Sprite","props":{"y":0,"x":0},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":1125,"lineWidth":1,"height":2436,"fillColor":"#04131f"}}]},{"type":"Button","props":{"y":200,"var":"btnBack","skin":"images/button/button_back@3x.png","left":30,"stateNum":1,"label":" ","anchorX":0,"anchorY":0.5,"runtime":"ScaleButton"}},{"type":"Box","props":{"y":200,"width":260,"height":90,"centerX":391,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"top":0,"skin":"images/button/button_small@3x.png","right":0,"left":0,"bottom":0,"sizeGrid":"8,8,8,8","stateNum":1,"label":" ","runtime":"ScaleButton"}},{"type":"Box","props":{"width":90,"left":8,"height":90},"child":[{"type":"Image","props":{"skin":"images/icons/icon_rank@3x.png","centerY":0,"centerX":0}}]},{"type":"Label","props":{"text":"排行榜","fontSize":50,"font":"方正像素12","color":"#ffffff","centerY":0,"centerX":40,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":310,"x":0,"top":310,"right":0,"left":0,"height":120},"child":[{"type":"Box","props":{"x":120,"width":130,"height":80,"bottom":0,"anchorY":1,"anchorX":0.5},"child":[{"type":"Label","props":{"text":"统计","fontSize":60,"font":"方正像素12","color":"#ffffff","centerX":0,"bottom":10}}]},{"type":"Box","props":{"x":340,"width":130,"height":80,"bottom":0,"anchorY":1,"anchorX":0.5},"child":[{"type":"Label","props":{"text":"成就","fontSize":100,"font":"方正像素12","color":"#ffffff","centerX":0,"bottom":10}}]}]},{"type":"Box","props":{"width":2250,"top":450,"left":0,"bottom":80},"child":[{"type":"Box","props":{"width":1125,"top":0,"left":0,"height":1125},"child":[{"type":"Image","props":{"top":40,"skin":"images/border/border_2@3x.png","right":30,"left":30,"bottom":30,"sizeGrid":"75,155,75,155"}},{"type":"Sprite","props":{"y":150,"x":100,"width":920,"height":380},"child":[{"type":"Rect","props":{"y":-1,"x":460,"width":4,"lineWidth":1,"lineColor":"#1a5459","height":320,"fillColor":"#1a5459"}},{"type":"Rect","props":{"y":370,"x":0,"width":920,"lineWidth":1,"lineColor":"#1a5459","height":5,"fillColor":"#1a5459"}}]},{"type":"Box","props":{"width":400,"top":150,"left":100,"height":320},"child":[{"type":"Label","props":{"y":130,"x":0,"text":"1次","fontSize":70,"font":"方正像素12","color":"#55fffe","bold":true,"anchorY":1,"anchorX":0}},{"type":"Label","props":{"y":210,"x":0,"text":"重开次数","fontSize":62,"font":"方正像素12","color":"#ffffff","bold":false,"anchorY":1,"anchorX":0}},{"type":"Label","props":{"y":240,"text":"抽到紫色几率不变","fontSize":42,"font":"方正像素12","color":"#93aaae","bold":false,"anchorY":0,"anchorX":0}}]},{"type":"Box","props":{"width":400,"top":150,"right":100,"height":320},"child":[{"type":"Label","props":{"y":130,"x":0,"text":"10个","fontSize":70,"font":"方正像素12","color":"#55fffe","bold":true,"anchorY":1,"anchorX":0}},{"type":"Label","props":{"y":210,"x":0,"text":"获得成就","fontSize":62,"font":"方正像素12","color":"#ffffff","bold":false,"anchorY":1,"anchorX":0}},{"type":"Label","props":{"y":240,"x":0,"text":"抽到橙色几率不变","fontSize":42,"font":"方正像素12","color":"#93aaae","bold":false,"anchorY":0,"anchorX":0}}]},{"type":"Box","props":{"right":100,"left":100,"height":450,"bottom":100},"child":[{"type":"Box","props":{"top":25,"right":0,"left":0,"height":180},"child":[{"type":"Label","props":{"y":85,"x":0,"text":"事件收集率","fontSize":62,"font":"方正像素12","color":"#ffffff","bold":false,"anchorY":1,"anchorX":0}},{"type":"ProgressBar","props":{"y":135,"value":1,"skin":"images/progress/progress_1@3x.png","right":240,"left":0,"anchorY":0.5,"anchorX":0,"sizeGrid":"24,24,24,24,1"}},{"type":"Label","props":{"text":"100%","right":0,"fontSize":110,"font":"方正像素12","color":"#55fffe","centerY":0,"bold":false,"anchorY":0.5,"anchorX":1}}]},{"type":"Box","props":{"right":0,"left":0,"height":180,"bottom":30},"child":[{"type":"Label","props":{"y":85,"x":0,"text":"天赋收集率","fontSize":62,"font":"方正像素12","color":"#ffffff","bold":false,"anchorY":1,"anchorX":0}},{"type":"ProgressBar","props":{"y":135,"value":0.73,"skin":"images/progress/progress_1@3x.png","right":240,"left":0,"anchorY":0.5,"anchorX":0,"sizeGrid":"24,24,24,24,1"}},{"type":"Label","props":{"text":"73%","right":0,"fontSize":110,"font":"方正像素12","color":"#55fffe","centerY":0,"bold":false,"anchorY":0.5,"anchorX":1}}]}]}]},{"type":"List","props":{"width":1060,"vScrollBarSkin":" ","top":35,"right":35,"bottom":35},"child":[{"type":"Box","props":{"y":0,"x":0,"width":530,"renderType":"render","height":460},"child":[{"type":"Image","props":{"top":20,"skin":"images/border/achievement@3x.png","right":20,"left":20,"bottom":20,"sizeGrid":"16,16,16,16"}},{"type":"Image","props":{"top":0,"skin":"images/border/achievement_complete@3x.png","right":0,"left":0,"bottom":0,"sizeGrid":"74,74,74,74"}},{"type":"Label","props":{"text":"霹雳霹雳","fontSize":80,"font":"方正像素12","color":"#ffffff","centerY":-30,"centerX":0}},{"type":"Label","props":{"wordWrap":true,"text":"被第九重雷劫劈死","right":40,"left":40,"height":95,"fontSize":42,"font":"方正像素12","color":"#9ca5a9","bottom":25,"align":"center"}}]}]}]}]};
		return CyberAchievementUI;
	})(View);
var CyberMainUI=(function(_super){
		function CyberMainUI(){
			
		    this.btnRemake=null;
		    this.btnThanks=null;
		    this.btnAchievement=null;

			CyberMainUI.__super.call(this);
		}

		CLASS$(CyberMainUI,'ui.view.CyberTheme.CyberMainUI',_super);
		var __proto__=CyberMainUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("ScaleButton",ScaleButton);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(CyberMainUI.uiView);

		}

		CyberMainUI.uiView={"type":"View","props":{"width":1125,"height":2436},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"images/background/background_1@3x.png"}},{"type":"Animation","props":{"width":1125,"source":"view/CyberTheme/animation/jumpBackground.ani","interval":80,"height":2436,"blendMode":"lighter","autoPlay":true,"alpha":0.3}},{"type":"Image","props":{"skin":"images/accessories/title@3x.png","centerY":-350,"centerX":0},"child":[{"type":"Box","props":{"y":0,"x":0},"child":[{"type":"Image","props":{"y":8,"x":8,"skin":"images/accessories/title_neon@3x.png","renderType":"mask"}},{"type":"Animation","props":{"y":286,"x":436,"source":"view/CyberTheme/animation/bottomBreath.ani","scaleY":1.5,"scaleX":5,"blendMode":"lighter","autoPlay":true}}]}]},{"type":"Image","props":{"skin":"images/accessories/insert_coin@3x.png","centerY":540,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"text":"UI_Title_Remake","fontSize":80,"font":"方正像素12","color":"#ffffff","centerY":-135,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"wordWrap":true,"text":"UI_Title_Subsequent","right":0,"left":0,"fontSize":48,"font":"方正像素12","color":"#828c95","centerY":-20,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"text":"UI_Cyber_Theme_Art_Design","right":50,"fontSize":48,"font":"方正像素12","color":"#00fffd","centerY":1165,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"var":"btnRemake","skin":"images/button/button_main@3x.png","pivotY":96,"pivotX":329,"name":"btnRemake","labelSize":60,"label":"UI_Remake","centerY":720,"centerX":0,"stateNum":1,"anchorX":0.5,"anchorY":0.5,"sizeGrid":"45,200,45,200","labelFont":"方正像素12","labelColors":"#00fffc,#00fffc,#00fffc","runtime":"ScaleButton"},"child":[{"type":"Box","props":{},"child":[{"type":"Animation","props":{"y":93,"x":330,"width":0,"source":"view/CyberTheme/animation/circleFlash.ani","scaleX":5,"height":0,"blendMode":"lighter","autoPlay":true}},{"type":"Box","props":{"renderType":"mask"},"child":[{"type":"Rect","props":{"y":37,"x":25,"width":7,"lineWidth":1,"height":116,"fillColor":"#ff0000"}},{"type":"Rect","props":{"y":37,"x":625,"width":7,"lineWidth":1,"height":116,"fillColor":"#ff0000"}},{"type":"Rect","props":{"y":21,"x":44,"width":569,"lineWidth":1,"height":6,"fillColor":"#ff0000"}},{"type":"Rect","props":{"y":150,"x":171,"width":316,"lineWidth":1,"height":6,"fillColor":"#ff0000"}},{"type":"Rect","props":{"y":163,"x":44,"width":121,"lineWidth":1,"height":6,"fillColor":"#ff0000"}},{"type":"Rect","props":{"y":163,"x":493,"width":120,"lineWidth":1,"height":6,"fillColor":"#ff0000"}},{"type":"Rect","props":{"y":148,"x":29,"width":25,"rotation":40,"lineWidth":1,"height":6,"fillColor":"#ff0000"}},{"type":"Rect","props":{"y":150,"x":487,"width":19,"rotation":55,"lineWidth":1,"height":6,"fillColor":"#ff0000"}},{"type":"Rect","props":{"y":166,"x":160,"width":19,"rotation":-55,"lineWidth":1,"height":6,"fillColor":"#ff0000"}},{"type":"Rect","props":{"y":21,"x":613,"width":25,"rotation":40,"lineWidth":1,"height":6,"fillColor":"#ff0000"}},{"type":"Rect","props":{"y":26,"x":48,"width":25,"rotation":140,"lineWidth":1,"height":6,"fillColor":"#ff0000"}},{"type":"Rect","props":{"y":153,"x":632,"width":25,"rotation":140,"lineWidth":1,"height":6,"fillColor":"#ff0000"}}]}]},{"type":"Box","props":{},"child":[{"type":"Box","props":{"renderType":"mask"},"child":[{"type":"Poly","props":{"y":41,"x":35,"points":"0,0,8,-6,8,113,0,107","lineWidth":1,"lineColor":"#ff0000","fillColor":"#00ffff"}},{"type":"Poly","props":{"y":41,"x":621,"points":"0,0,-8,-6,-8,113,0,107","lineWidth":1,"lineColor":"#ff0000","fillColor":"#00ffff"}},{"type":"Poly","props":{"y":160,"x":177,"points":"0,0,305,0,311,10,-6,10","lineWidth":1,"lineColor":"#ff0000","fillColor":"#00ffff"}}]},{"type":"Animation","props":{"y":172,"x":330,"source":"view/CyberTheme/animation/bottomBreath.ani","scaleX":4,"blendMode":"lighter","autoPlay":true}}]}]},{"type":"Box","props":{"width":225,"var":"btnThanks","runtime":"ScaleButton","name":"btnThanks","height":90,"centerY":-1020,"centerX":-390,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"top":0,"skin":"images/button/button_small@3x.png","right":0,"left":0,"bottom":0,"sizeGrid":"8,8,8,8","stateNum":1,"label":" ","runtime":"ScaleButton"}},{"type":"Box","props":{"width":90,"left":8,"height":90},"child":[{"type":"Image","props":{"skin":"images/icons/icon_thanks@3x.png","centerY":0,"centerX":0}}]},{"type":"Label","props":{"text":"UI_Thanks","fontSize":50,"font":"方正像素12","color":"#ffffff","centerY":0,"centerX":40,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"width":225,"var":"btnAchievement","runtime":"ScaleButton","name":"btnAchievement","height":90,"centerY":-1020,"centerX":390,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"top":0,"skin":"images/button/button_small@3x.png","right":0,"left":0,"bottom":0,"sizeGrid":"8,8,8,8","stateNum":1,"label":" ","runtime":"ScaleButton"}},{"type":"Box","props":{"width":90,"left":8,"height":90},"child":[{"type":"Image","props":{"skin":"images/icons/icon_achievement@3x.png","centerY":0,"centerX":0}}]},{"type":"Label","props":{"text":"UI_Achievement","fontSize":50,"font":"方正像素12","color":"#ffffff","centerY":0,"centerX":40,"anchorY":0.5,"anchorX":0.5}}]}]};
		return CyberMainUI;
	})(View);
var CyberPropertyUI=(function(_super){
		function CyberPropertyUI(){
			

			CyberPropertyUI.__super.call(this);
		}

		CLASS$(CyberPropertyUI,'ui.view.CyberTheme.CyberPropertyUI',_super);
		var __proto__=CyberPropertyUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(CyberPropertyUI.uiView);

		}

		CyberPropertyUI.uiView={"type":"View","props":{"width":1125,"height":2436}};
		return CyberPropertyUI;
	})(View);
var CyberSummaryUI=(function(_super){
		function CyberSummaryUI(){
			

			CyberSummaryUI.__super.call(this);
		}

		CLASS$(CyberSummaryUI,'ui.view.CyberTheme.CyberSummaryUI',_super);
		var __proto__=CyberSummaryUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(CyberSummaryUI.uiView);

		}

		CyberSummaryUI.uiView={"type":"View","props":{"width":1125,"height":2436}};
		return CyberSummaryUI;
	})(View);
var CyberTalentUI=(function(_super){
		function CyberTalentUI(){
			
		    this.pageDrawCard=null;
		    this.btnDrawCard=null;
		    this.pageResult=null;
		    this.listTalents=null;
		    this.btnNext=null;

			CyberTalentUI.__super.call(this);
		}

		CLASS$(CyberTalentUI,'ui.view.CyberTheme.CyberTalentUI',_super);
		var __proto__=CyberTalentUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("ScaleButton",ScaleButton);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(CyberTalentUI.uiView);

		}

		CyberTalentUI.uiView={"type":"View","props":{"width":1125,"height":2436},"child":[{"type":"Sprite","props":{"y":0,"x":0},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":1125,"lineWidth":1,"height":2436,"fillColor":"#04131f"}}]},{"type":"Box","props":{"var":"pageDrawCard","top":0,"right":0,"name":"pageDrawCard","left":0,"bottom":0},"child":[{"type":"Box","props":{"y":1117,"x":562,"width":2,"height":2,"centerY":-100,"centerX":0},"child":[{"type":"Animation","props":{"y":1,"x":1,"width":100,"source":"view/CyberTheme/animation/lightRotation.ani","height":100,"autoPlay":true}},{"type":"Image","props":{"y":585,"skin":"images/border/card@3x.png","scaleY":0.9,"scaleX":0.9,"rotation":15,"centerY":-50,"centerX":0,"anchorY":1.2,"anchorX":0.5,"alpha":0.8}},{"type":"Image","props":{"y":634,"skin":"images/border/card@3x.png","scaleY":0.9,"scaleX":0.9,"rotation":-15,"centerY":-50,"centerX":0,"anchorY":1.2,"anchorX":0.5,"alpha":0.8}},{"type":"Image","props":{"y":634,"skin":"images/border/card@3x.png","centerY":-50,"centerX":0,"anchorY":1.2,"anchorX":0.5,"alpha":0.8}},{"type":"Image","props":{"skin":"images/accessories/cardicon@3x.png","centerY":-30,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":1930,"x":563,"width":657,"var":"btnDrawCard","skin":"images/button/button_main@3x.png","name":"btnDrawCard","labelSize":60,"label":"UI_Talent_Draw","height":192,"centerX":0,"stateNum":1,"anchorX":0.5,"anchorY":0.5,"sizeGrid":"45,200,45,200","labelFont":"方正像素12","labelColors":"#00fffc,#00fffc,#00fffc","runtime":"ScaleButton"},"child":[{"type":"Box","props":{},"child":[{"type":"Animation","props":{"y":93,"x":330,"width":0,"source":"view/CyberTheme/animation/circleFlash.ani","scaleX":5,"height":0,"blendMode":"lighter","autoPlay":true}},{"type":"Box","props":{"renderType":"mask"},"child":[{"type":"Rect","props":{"y":37,"x":25,"width":7,"lineWidth":1,"height":116,"fillColor":"#ff0000"}},{"type":"Rect","props":{"y":37,"x":625,"width":7,"lineWidth":1,"height":116,"fillColor":"#ff0000"}},{"type":"Rect","props":{"y":21,"x":44,"width":569,"lineWidth":1,"height":6,"fillColor":"#ff0000"}},{"type":"Rect","props":{"y":150,"x":171,"width":316,"lineWidth":1,"height":6,"fillColor":"#ff0000"}},{"type":"Rect","props":{"y":163,"x":44,"width":121,"lineWidth":1,"height":6,"fillColor":"#ff0000"}},{"type":"Rect","props":{"y":163,"x":493,"width":120,"lineWidth":1,"height":6,"fillColor":"#ff0000"}},{"type":"Rect","props":{"y":148,"x":29,"width":25,"rotation":40,"lineWidth":1,"height":6,"fillColor":"#ff0000"}},{"type":"Rect","props":{"y":150,"x":487,"width":19,"rotation":55,"lineWidth":1,"height":6,"fillColor":"#ff0000"}},{"type":"Rect","props":{"y":166,"x":160,"width":19,"rotation":-55,"lineWidth":1,"height":6,"fillColor":"#ff0000"}},{"type":"Rect","props":{"y":21,"x":613,"width":25,"rotation":40,"lineWidth":1,"height":6,"fillColor":"#ff0000"}},{"type":"Rect","props":{"y":26,"x":48,"width":25,"rotation":140,"lineWidth":1,"height":6,"fillColor":"#ff0000"}},{"type":"Rect","props":{"y":153,"x":632,"width":25,"rotation":140,"lineWidth":1,"height":6,"fillColor":"#ff0000"}}]}]},{"type":"Box","props":{},"child":[{"type":"Box","props":{"renderType":"mask"},"child":[{"type":"Poly","props":{"y":41,"x":35,"points":"0,0,8,-6,8,113,0,107","lineWidth":1,"lineColor":"#ff0000","fillColor":"#00ffff"}},{"type":"Poly","props":{"y":41,"x":621,"points":"0,0,-8,-6,-8,113,0,107","lineWidth":1,"lineColor":"#ff0000","fillColor":"#00ffff"}},{"type":"Poly","props":{"y":160,"x":177,"points":"0,0,305,0,311,10,-6,10","lineWidth":1,"lineColor":"#ff0000","fillColor":"#00ffff"}}]},{"type":"Animation","props":{"y":172,"x":330,"source":"view/CyberTheme/animation/bottomBreath.ani","scaleX":4,"blendMode":"lighter","autoPlay":true}}]}]}]},{"type":"Box","props":{"y":0,"x":0,"var":"pageResult","top":0,"right":0,"name":"pageResult","left":0,"bottom":0},"child":[{"type":"List","props":{"var":"listTalents","vScrollBarSkin":" ","top":310,"right":20,"name":"listTalents","left":20,"bottom":370},"child":[{"type":"Box","props":{"width":537,"renderType":"render","height":352},"child":[{"type":"Image","props":{"top":0,"skin":"images/border/talent_item@3x.png","right":0,"name":"unselected","left":0,"bottom":0}},{"type":"Image","props":{"top":0,"skin":"images/border/talent_item_selected@3x.png","right":0,"name":"selected","left":0,"bottom":3}},{"type":"HBox","props":{"top":104,"space":15,"name":"hboxTitle","left":66,"height":58},"child":[{"type":"Box","props":{"y":0,"x":0,"width":15,"name":"grades","height":58},"child":[{"type":"Box","props":{"width":15,"name":"grade1","height":58},"child":[{"type":"Sprite","props":{},"child":[{"type":"Rect","props":{"width":15,"lineWidth":1,"height":58,"fillColor":"#55fffe"}}]}]},{"type":"Box","props":{"width":15,"name":"grade2","height":58},"child":[{"type":"Sprite","props":{},"child":[{"type":"Rect","props":{"width":15,"lineWidth":1,"height":58,"fillColor":"#b17cff"}}]}]},{"type":"Box","props":{"width":15,"name":"grade3","height":58},"child":[{"type":"Sprite","props":{},"child":[{"type":"Rect","props":{"width":15,"lineWidth":1,"height":58,"fillColor":"#ffce45"}}]}]}]},{"type":"Label","props":{"x":1,"text":"Title","name":"labTitle","fontSize":58,"font":"方正像素12","color":"#ffffff"}}]},{"type":"Label","props":{"y":205,"wordWrap":true,"text":"description","right":66,"name":"labDescription","left":66,"leading":8,"fontSize":44,"font":"方正像素12","color":"#9dacaf"}}]}]},{"type":"Button","props":{"width":1040,"var":"btnNext","skin":"images/button/button_main@3x.png","name":"btnNext","labelSize":60,"label":"UI_Next","height":192,"centerY":1040,"centerX":0,"stateNum":1,"anchorX":0.5,"anchorY":0.5,"sizeGrid":"45,200,45,200","labelFont":"方正像素12","labelColors":"#00fffc,#00fffc,#00fffc","runtime":"ScaleButton"},"child":[{"type":"Box","props":{},"child":[{"type":"Animation","props":{"y":96,"x":520,"width":0,"source":"view/CyberTheme/animation/circleFlash.ani","scaleX":7,"height":0,"blendMode":"lighter","autoPlay":true}},{"type":"Box","props":{"renderType":"mask"},"child":[{"type":"Rect","props":{"y":37,"x":25,"width":7,"lineWidth":1,"height":116,"fillColor":"#ff0000"}},{"type":"Rect","props":{"y":37,"x":1010,"width":7,"lineWidth":1,"height":116,"fillColor":"#ff0000"}},{"type":"Rect","props":{"y":21,"x":44,"width":954,"lineWidth":1,"height":6,"fillColor":"#ff0000"}},{"type":"Rect","props":{"y":150,"x":171,"width":700,"lineWidth":1,"height":6,"fillColor":"#ff0000"}},{"type":"Rect","props":{"y":163,"x":44,"width":121,"lineWidth":1,"height":6,"fillColor":"#ff0000"}},{"type":"Rect","props":{"y":163,"x":877,"width":121,"lineWidth":1,"height":6,"fillColor":"#ff0000"}},{"type":"Rect","props":{"y":148,"x":29,"width":25,"rotation":40,"lineWidth":1,"height":6,"fillColor":"#ff0000"}},{"type":"Rect","props":{"y":150,"x":871,"width":19,"rotation":55,"lineWidth":1,"height":6,"fillColor":"#ff0000"}},{"type":"Rect","props":{"y":166,"x":160,"width":19,"rotation":-55,"lineWidth":1,"height":6,"fillColor":"#ff0000"}},{"type":"Rect","props":{"y":21,"x":998,"width":25,"rotation":40,"lineWidth":1,"height":6,"fillColor":"#ff0000"}},{"type":"Rect","props":{"y":26,"x":48,"width":25,"rotation":140,"lineWidth":1,"height":6,"fillColor":"#ff0000"}},{"type":"Rect","props":{"y":153,"x":1017,"width":25,"rotation":140,"lineWidth":1,"height":6,"fillColor":"#ff0000"}}]}]},{"type":"Box","props":{},"child":[{"type":"Box","props":{"renderType":"mask"},"child":[{"type":"Poly","props":{"y":41,"x":35,"points":"0,0,8,-6,8,113,0,107","lineWidth":1,"lineColor":"#ff0000","fillColor":"#00ffff"}},{"type":"Poly","props":{"y":41,"x":1004,"points":"0,0,-8,-6,-8,113,0,107","lineWidth":1,"lineColor":"#ff0000","fillColor":"#00ffff"}},{"type":"Poly","props":{"y":160,"x":177,"points":"0,0,687,0,693,10,-6,10","lineWidth":1,"lineColor":"#ff0000","fillColor":"#00ffff"}}]},{"type":"Animation","props":{"y":172,"x":520,"source":"view/CyberTheme/animation/bottomBreath.ani","scaleX":6,"blendMode":"lighter","autoPlay":true}}]}]}]},{"type":"Box","props":{"top":40,"right":0,"name":"title","left":0},"child":[{"type":"Image","props":{"skin":"images/accessories/titlebar@3x.png"}},{"type":"HBox","props":{"y":160,"x":563,"space":30,"height":70,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":10,"x":1,"skin":"images/accessories/title_left@3x.png","name":"left"}},{"type":"Label","props":{"y":0,"x":2,"text":"UI_Title_Talent","fontSize":60,"font":"方正像素12","color":"#ffffff"}},{"type":"Image","props":{"y":10,"x":3,"skin":"images/accessories/title_right@3x.png","name":"right"}}]}]}]};
		return CyberTalentUI;
	})(View);
var CyberThanksUI=(function(_super){
		function CyberThanksUI(){
			
		    this.btnBack=null;

			CyberThanksUI.__super.call(this);
		}

		CLASS$(CyberThanksUI,'ui.view.CyberTheme.CyberThanksUI',_super);
		var __proto__=CyberThanksUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("ScaleButton",ScaleButton);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(CyberThanksUI.uiView);

		}

		CyberThanksUI.uiView={"type":"View","props":{"width":1125,"height":2436},"child":[{"type":"Button","props":{"y":200,"var":"btnBack","skin":"images/button/button_back@3x.png","name":"btnBack","left":30,"stateNum":1,"label":" ","anchorX":0,"anchorY":0.5,"runtime":"ScaleButton"}}]};
		return CyberThanksUI;
	})(View);
var CyberTrajectoryUI=(function(_super){
		function CyberTrajectoryUI(){
			

			CyberTrajectoryUI.__super.call(this);
		}

		CLASS$(CyberTrajectoryUI,'ui.view.CyberTheme.CyberTrajectoryUI',_super);
		var __proto__=CyberTrajectoryUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("ScaleButton",ScaleButton);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(CyberTrajectoryUI.uiView);

		}

		CyberTrajectoryUI.uiView={"type":"View","props":{"width":1125,"height":2436},"child":[{"type":"Sprite","props":{"y":0,"x":0},"child":[{"type":"Rect","props":{"width":1125,"lineWidth":1,"height":2436,"fillColor":"#04131f"}}]},{"type":"Box","props":{"top":126,"right":20,"left":20,"height":275},"child":[{"type":"Image","props":{"top":-13,"skin":"images/border/border_2@3x.png","right":-13,"left":-13,"bottom":-13,"sizeGrid":"75,155,75,155"}},{"type":"Box","props":{"width":192,"left":36,"height":192,"centerY":0}},{"type":"VBox","props":{"space":13,"right":45,"left":242,"centerY":0,"align":"left"},"child":[{"type":"HBox","props":{"y":1,"space":13,"align":"middle"},"child":[{"type":"Box","props":{"x":1,"width":260,"height":82},"child":[{"type":"Image","props":{"y":-10,"x":-5,"top":0,"skin":"images/border/property@3x.png","right":0,"left":0,"bottom":0,"sizeGrid":"15,15,15,15"}},{"type":"Box","props":{"width":82,"left":5,"height":82},"child":[{"type":"Image","props":{"skin":"images/icons/icon_chr@3x.png","centerY":0,"centerX":0}}]},{"type":"Label","props":{"text":"颜值","fontSize":40,"font":"方正像素12","color":"#ffffff","centerY":0,"centerX":0,"anchorY":5,"anchorX":0.5}},{"type":"Box","props":{"y":0,"width":82,"right":5,"height":82},"child":[{"type":"Label","props":{"text":"10","fontSize":55,"font":"方正像素12","color":"#55fffe","centerY":0,"centerX":0,"anchorY":5,"anchorX":0.5}}]}]},{"type":"Box","props":{"y":0,"x":2,"width":260,"height":82},"child":[{"type":"Image","props":{"y":-10,"x":-5,"top":0,"skin":"images/border/property@3x.png","right":0,"left":0,"bottom":0,"sizeGrid":"15,15,15,15"}},{"type":"Box","props":{"width":82,"left":5,"height":82},"child":[{"type":"Image","props":{"skin":"images/icons/icon_mny@3x.png","centerY":0,"centerX":0}}]},{"type":"Label","props":{"text":"家境","fontSize":40,"font":"方正像素12","color":"#ffffff","centerY":0,"centerX":0,"anchorY":5,"anchorX":0.5}},{"type":"Box","props":{"y":0,"width":82,"right":5,"height":82},"child":[{"type":"Label","props":{"text":"10","fontSize":55,"font":"方正像素12","color":"#55fffe","centerY":0,"centerX":0,"anchorY":5,"anchorX":0.5}}]}]},{"type":"Box","props":{"x":3,"width":260,"height":82},"child":[{"type":"Image","props":{"y":-10,"x":-5,"top":0,"skin":"images/border/property@3x.png","right":0,"left":0,"bottom":0,"sizeGrid":"15,15,15,15"}},{"type":"Box","props":{"width":82,"left":5,"height":82},"child":[{"type":"Image","props":{"skin":"images/icons/icon_int@3x.png","centerY":0,"centerX":0}}]},{"type":"Label","props":{"text":"智力","fontSize":40,"font":"方正像素12","color":"#ffffff","centerY":0,"centerX":0,"anchorY":5,"anchorX":0.5}},{"type":"Box","props":{"y":0,"width":82,"right":5,"height":82},"child":[{"type":"Label","props":{"text":"10","fontSize":55,"font":"方正像素12","color":"#55fffe","centerY":0,"centerX":0,"anchorY":5,"anchorX":0.5}}]}]}]},{"type":"HBox","props":{"y":2,"space":13,"align":"middle"},"child":[{"type":"Box","props":{"y":0,"x":0,"width":260,"height":82},"child":[{"type":"Image","props":{"y":-10,"x":-5,"top":0,"skin":"images/border/property@3x.png","right":0,"left":0,"bottom":0,"sizeGrid":"15,15,15,15"}},{"type":"Box","props":{"width":82,"left":5,"height":82},"child":[{"type":"Image","props":{"skin":"images/icons/icon_str@3x.png","centerY":0,"centerX":0}}]},{"type":"Label","props":{"text":"体质","fontSize":40,"font":"方正像素12","color":"#ffffff","centerY":0,"centerX":0,"anchorY":5,"anchorX":0.5}},{"type":"Box","props":{"y":0,"width":82,"right":5,"height":82},"child":[{"type":"Label","props":{"text":"10","fontSize":55,"font":"方正像素12","color":"#55fffe","centerY":0,"centerX":0,"anchorY":5,"anchorX":0.5}}]}]},{"type":"Box","props":{"width":260,"height":82},"child":[{"type":"Image","props":{"y":-10,"x":-5,"top":0,"skin":"images/border/property@3x.png","right":0,"left":0,"bottom":0,"sizeGrid":"15,15,15,15"}},{"type":"Box","props":{"width":82,"left":5,"height":82},"child":[{"type":"Image","props":{"skin":"images/icons/icon_spr@3x.png","centerY":0,"centerX":0}}]},{"type":"Label","props":{"text":"快乐","fontSize":40,"font":"方正像素12","color":"#ffffff","centerY":0,"centerX":0,"anchorY":5,"anchorX":0.5}},{"type":"Box","props":{"y":0,"width":82,"right":5,"height":82},"child":[{"type":"Label","props":{"text":"10","fontSize":55,"font":"方正像素12","color":"#55fffe","centerY":0,"centerX":0,"anchorY":5,"anchorX":0.5}}]}]}]}]}]},{"type":"Box","props":{"width":1,"height":1,"centerX":0,"bottom":-1},"child":[{"type":"Button","props":{"y":-155,"width":500,"skin":"images/button/button_main@3x.png","label":"人生总结","height":180,"centerX":0,"stateNum":1,"anchorX":0.5,"anchorY":0.5,"sizeGrid":"45,200,45,200","labelFont":"方正像素12","labelColors":"#00fffc,#00fffc,#00fffc","labelSize":50,"runtime":"ScaleButton"}}]},{"type":"Panel","props":{"vScrollBarSkin":"images/slider/vslider_1@3x.png","top":440,"right":20,"left":20,"bottom":250},"child":[{"type":"Image","props":{"y":0,"x":0,"top":0,"skin":"images/border/border_1@3x.png","right":0,"left":0,"bottom":0,"sizeGrid":"130,130,130,130"}},{"type":"VBox","props":{"top":0,"centerX":0}},{"type":"Box","props":{"top":20,"right":20,"left":20,"height":50},"child":[{"type":"Image","props":{"top":0,"skin":"images/border/up@3x.png","right":0,"left":0,"bottom":0,"sizeGrid":"4,4,4,4"}},{"type":"Box","props":{"width":60,"height":60,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"images/icons/icon_up@3x.png","centerY":0,"centerX":0}}]}]},{"type":"Box","props":{"right":20,"left":20,"height":50,"bottom":20},"child":[{"type":"Image","props":{"top":0,"skin":"images/border/up@3x.png","right":0,"left":0,"bottom":0,"sizeGrid":"4,4,4,4"}},{"type":"Box","props":{"width":60,"rotation":180,"height":60,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"images/icons/icon_up@3x.png","centerY":0,"centerX":0}}]}]}]}]};
		return CyberTrajectoryUI;
	})(View);
var LoadingUI=(function(_super){
		function LoadingUI(){
			

			LoadingUI.__super.call(this);
		}

		CLASS$(LoadingUI,'ui.view.LoadingUI',_super);
		var __proto__=LoadingUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(LoadingUI.uiView);

		}

		LoadingUI.uiView={"type":"View","props":{"width":1125,"height":2436},"child":[{"type":"Sprite","props":{"y":0,"x":0,"alpha":0.3},"child":[{"type":"Rect","props":{"width":1125,"lineWidth":1,"height":2436,"fillColor":"#000000"}}]},{"type":"Box","props":{"width":200,"scaleY":2,"scaleX":2,"height":200,"centerY":0,"centerX":0},"child":[{"type":"Animation","props":{"y":100,"x":100,"source":"view/CyberTheme/animation/circleFlash.ani","autoPlay":true}},{"type":"Image","props":{"skin":"images/resource/circle.png","renderType":"mask"}}]},{"type":"Label","props":{"text":"Now Loading","fontSize":80,"font":"Impact","color":"#ffffff","centerY":400,"centerX":0}}]};
		return LoadingUI;
	})(View);