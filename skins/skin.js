(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.ALT6copy = function() {
	this.initialize(img.ALT6copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,306,134);


(lib.CR7copy = function() {
	this.initialize(img.CR7copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,411,423);


(lib.Logo99copy = function() {
	this.initialize(img.Logo99copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,318,160);


(lib.Name = function() {
	this.initialize(img.Name);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,29);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.videoguide = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("EgptAXXMAAAgutMBTbAAAMAAAAutg");
	this.shape.setTransform(267,149.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.videoguide, new cjs.Rectangle(0,0,534,299), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ALT6copy();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,306,134), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Logo99copy();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,318,160), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Name();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,190,29), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CR7copy();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,411,423), null);


(lib.shape225 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEABAB").s().p("AghghIBDAAIAABDg");
	this.shape.setTransform(6.4,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,-0.6,6.8,6.8);


(lib.shape224 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEABAB").s().p("AghAiIAAhDIBDBDg");
	this.shape.setTransform(6.4,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,-0.6,6.8,6.8);


(lib.shape7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AghAiIAAhDIBDAAIAABDg");
	this.shape.setTransform(6.4,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,-0.6,6.8,6.8);


(lib.Symbol2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("EhqtAsYMAAAhYvMDVbAAAMAAABYvg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(159,80,1,1,0,0,0,159,80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({scaleX:1.05,scaleY:1.05},3).to({scaleX:1,scaleY:1},3).to({scaleX:1.05,scaleY:1.05},3).to({scaleX:1,scaleY:1},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,318,160);


(lib.sprite226 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_93 = function() {
		/* gotoAndPlay(1);
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(93).call(this.frame_93).wait(1));

	// Layer 8
	this.instance = new lib.shape7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(57,-4.2,0.461,0.461,15);
	this.instance._off = true;

	this.instance_1 = new lib.shape224("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(56.4,-1.6,0.46,0.46,42.6);
	this.instance_1._off = true;

	this.instance_2 = new lib.shape225("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(55.7,1,0.46,0.46,70.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({_off:false},0).to({rotation:33.3,x:56.6,y:-2.5},2).to({_off:true},1).wait(6).to({_off:false,rotation:98.2,x:55,y:3.5},0).to({rotation:116.5,x:54.5,y:5.3},2).to({_off:true},1).wait(6).to({_off:false,rotation:181.2,x:52.9,y:11.3},0).to({rotation:199.5,x:52.5,y:13},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.46,scaleY:0.46,rotation:264.2,x:50.8,y:19},0).to({scaleX:0.46,scaleY:0.46,rotation:282.7,x:50.4,y:20.7},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.46,scaleY:0.46,rotation:347.4,x:48.8,y:26.7},0).to({scaleX:0.46,scaleY:0.46,rotation:365.9,x:48.3,y:28.4},2).to({_off:true},1).wait(6).to({_off:false,rotation:375,x:47.4,y:31.7,alpha:0.5},0).to({x:47.2,y:32.5,alpha:0.328},2).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({rotation:61.1,x:55.9,y:0.1},2).to({_off:true},1).wait(6).to({_off:false,rotation:125.8,x:54.3,y:6.1},0).to({rotation:144.1,x:53.8,y:7.8},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.46,scaleY:0.46,rotation:208.8,x:52.2,y:13.8},0).to({scaleX:0.46,scaleY:0.46,rotation:227.3,x:51.8,y:15.6},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.46,scaleY:0.46,rotation:291.8,x:50.1,y:21.6},0).to({scaleX:0.46,scaleY:0.46,rotation:310.3,x:49.7,y:23.3},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.46,scaleY:0.46,rotation:375,x:48.1,y:29.3},0).to({x:47.9,y:30.1,alpha:0.828},2).to({_off:true},1).wait(6).to({_off:false,x:47.1,y:32.9,alpha:0.25},0).to({x:46.9,y:33.7,alpha:0.078},2).to({_off:true},1).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(32).to({_off:false},0).to({scaleX:0.46,scaleY:0.46,rotation:88.9,x:55.2,y:2.7},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.46,scaleY:0.46,rotation:153.4,x:53.6,y:8.7},0).to({rotation:172,x:53.1,y:10.4},2).to({_off:true},1).wait(6).to({_off:false,rotation:236.6,x:51.5,y:16.4},0).to({rotation:255.1,x:51.1,y:18.1},2).to({_off:true},1).wait(6).to({_off:false,rotation:319.6,x:49.5,y:24.2},0).to({rotation:338.1,x:49,y:25.9},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.46,scaleY:0.46,rotation:375,x:47.8,y:30.5,alpha:0.75},0).to({x:47.5,y:31.3,alpha:0.578},2).to({_off:true},1).wait(6).to({_off:false,x:46.8,y:34.1,alpha:0},0).wait(17));

	// Layer 7
	this.instance_3 = new lib.shape7("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(20.5,0.3,0.595,0.595,-15);
	this.instance_3._off = true;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 51, 255, 102, 0)];
	this.instance_3.cache(1,-3,11,11);

	this.instance_4 = new lib.shape224("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(21.4,3.6,0.594,0.594,12.6);
	this.instance_4._off = true;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 51, 255, 102, 0)];
	this.instance_4.cache(1,-3,11,11);

	this.instance_5 = new lib.shape225("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(22.3,6.9,0.594,0.594,40.4);
	this.instance_5._off = true;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 51, 255, 102, 0)];
	this.instance_5.cache(1,-3,11,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({_off:false},0).to({scaleX:0.59,scaleY:0.59,rotation:3.3,x:21.1,y:2.5},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.6,scaleY:0.6,rotation:68.2,x:23.2,y:10.3},0).to({scaleX:0.59,scaleY:0.59,rotation:86.5,x:23.8,y:12.5},2).to({_off:true},1).wait(6).to({_off:false,rotation:151.2,x:25.9,y:20.2},0).to({scaleX:0.6,scaleY:0.6,rotation:169.5,x:26.5,y:22.4},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.59,scaleY:0.59,rotation:234.2,x:28.6,y:30.2},0).to({scaleX:0.6,scaleY:0.6,rotation:252.7,x:29.2,y:32.4},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.59,scaleY:0.59,rotation:317.4,x:31.2,y:40.2},0).to({scaleX:0.6,scaleY:0.6,rotation:335.9,x:31.8,y:42.4},2).to({_off:true},1).wait(6).to({_off:false,rotation:345,x:33,y:46.6,alpha:0.5},0).to({x:33.2,y:47.6,alpha:0.328},2).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({_off:false},0).to({rotation:31.1,x:22,y:5.8},2).to({_off:true},1).wait(6).to({_off:false,rotation:95.8,x:24.1,y:13.6},0).to({rotation:114.1,x:24.7,y:15.8},2).to({_off:true},1).wait(6).to({_off:false,rotation:178.8,x:26.8,y:23.6},0).to({rotation:197.3,x:27.4,y:25.8},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.6,scaleY:0.6,rotation:261.8,x:29.5,y:33.5},0).to({scaleX:0.59,scaleY:0.59,rotation:280.3,x:30,y:35.7},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.6,scaleY:0.6,rotation:345,x:32.1,y:43.5},0).to({x:32.4,y:44.5,alpha:0.828},2).to({_off:true},1).wait(6).to({_off:false,x:33.4,y:48.2,alpha:0.25},0).to({x:33.6,y:49.2,alpha:0.078},2).to({_off:true},1).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(32).to({_off:false},0).to({rotation:58.9,x:22.9,y:9.2},2).to({_off:true},1).wait(6).to({_off:false,rotation:123.4,x:25,y:16.9},0).to({rotation:142,x:25.6,y:19.1},2).to({_off:true},1).wait(6).to({_off:false,rotation:206.6,x:27.7,y:26.9},0).to({rotation:225.1,x:28.3,y:29.1},2).to({_off:true},1).wait(6).to({_off:false,rotation:289.6,x:30.3,y:36.9},0).to({rotation:308.1,x:30.9,y:39.1},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.6,scaleY:0.6,rotation:345,x:32.5,y:45.1,alpha:0.75},0).to({x:32.8,y:46.1,alpha:0.578},2).to({_off:true},1).wait(6).to({_off:false,x:33.8,y:49.7,alpha:0},0).wait(17));

	// Layer 6
	this.instance_6 = new lib.shape7("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(24.9,-8.3,0.461,0.461);
	this.instance_6._off = true;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 102, 255, 0)];
	this.instance_6.cache(1,-3,11,11);

	this.instance_7 = new lib.shape224("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(24.9,-5.6,0.46,0.46,27.6);
	this.instance_7._off = true;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 102, 255, 0)];
	this.instance_7.cache(1,-3,11,11);

	this.instance_8 = new lib.shape225("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(24.9,-2.9,0.46,0.46,55.4);
	this.instance_8._off = true;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 102, 255, 0)];
	this.instance_8.cache(1,-3,11,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15).to({_off:false},0).to({rotation:18.3,y:-6.5},2).to({_off:true},1).wait(6).to({_off:false,rotation:83.2,y:-0.3},0).to({rotation:101.5,y:1.5},2).to({_off:true},1).wait(6).to({_off:false,rotation:166.2,y:7.7},0).to({rotation:184.5,y:9.5},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.46,scaleY:0.46,rotation:249.2,y:15.7},0).to({scaleX:0.46,scaleY:0.46,rotation:267.7,y:17.5},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.46,scaleY:0.46,rotation:332.4,y:23.7},0).to({scaleX:0.46,scaleY:0.46,rotation:350.9,y:25.5},2).to({_off:true},1).wait(6).to({_off:false,rotation:360,y:28.9,alpha:0.5},0).to({y:29.7,alpha:0.328},2).to({_off:true},1).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(18).to({_off:false},0).to({rotation:46.1,y:-3.8},2).to({_off:true},1).wait(6).to({_off:false,rotation:110.8,y:2.4},0).to({rotation:129.1,y:4.2},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.46,scaleY:0.46,rotation:193.8,y:10.4},0).to({scaleX:0.46,scaleY:0.46,rotation:212.3,y:12.2},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.46,scaleY:0.46,rotation:276.8,y:18.4},0).to({scaleX:0.46,scaleY:0.46,rotation:295.3,y:20.2},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.46,scaleY:0.46,rotation:360,y:26.4},0).to({y:27.2,alpha:0.828},2).to({_off:true},1).wait(6).to({_off:false,y:30.1,alpha:0.25},0).to({y:31,alpha:0.078},2).to({_off:true},1).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(21).to({_off:false},0).to({scaleX:0.46,scaleY:0.46,rotation:73.9,y:-1.1},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.46,scaleY:0.46,rotation:138.4,y:5.1},0).to({rotation:157,y:6.9},2).to({_off:true},1).wait(6).to({_off:false,rotation:221.6,y:13.1},0).to({rotation:240.1,y:14.9},2).to({_off:true},1).wait(6).to({_off:false,rotation:304.6,y:21.1},0).to({rotation:323.1,y:22.9},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.46,scaleY:0.46,rotation:360,y:27.7,alpha:0.75},0).to({y:28.5,alpha:0.578},2).to({_off:true},1).wait(6).to({_off:false,y:31.4,alpha:0},0).wait(28));

	// Layer 5
	this.instance_9 = new lib.shape7("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-11.1,-3.7,0.595,0.595,-15);
	this.instance_9._off = true;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 0, 0)];
	this.instance_9.cache(1,-3,11,11);

	this.instance_10 = new lib.shape224("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-10.2,-0.4,0.594,0.594,12.6);
	this.instance_10._off = true;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 0, 0)];
	this.instance_10.cache(1,-3,11,11);

	this.instance_11 = new lib.shape225("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-9.3,2.9,0.594,0.594,40.4);
	this.instance_11._off = true;
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 0, 0)];
	this.instance_11.cache(1,-3,11,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(15).to({_off:false},0).to({scaleX:0.59,scaleY:0.59,rotation:3.3,x:-10.5,y:-1.5},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.6,scaleY:0.6,rotation:68.2,x:-8.4,y:6.3},0).to({scaleX:0.59,scaleY:0.59,rotation:86.5,x:-7.8,y:8.5},2).to({_off:true},1).wait(6).to({_off:false,rotation:151.2,x:-5.7,y:16.2},0).to({scaleX:0.6,scaleY:0.6,rotation:169.5,x:-5.1,y:18.4},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.59,scaleY:0.59,rotation:234.2,x:-3,y:26.2},0).to({scaleX:0.6,scaleY:0.6,rotation:252.7,x:-2.4,y:28.4},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.59,scaleY:0.59,rotation:317.4,x:-0.4,y:36.2},0).to({scaleX:0.6,scaleY:0.6,rotation:335.9,x:0.2,y:38.4},2).to({_off:true},1).wait(6).to({_off:false,rotation:345,x:1.4,y:42.6,alpha:0.5},0).to({x:1.6,y:43.6,alpha:0.328},2).to({_off:true},1).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(18).to({_off:false},0).to({rotation:31.1,x:-9.6,y:1.8},2).to({_off:true},1).wait(6).to({_off:false,rotation:95.8,x:-7.5,y:9.6},0).to({rotation:114.1,x:-6.9,y:11.8},2).to({_off:true},1).wait(6).to({_off:false,rotation:178.8,x:-4.8,y:19.6},0).to({rotation:197.3,x:-4.2,y:21.8},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.6,scaleY:0.6,rotation:261.8,x:-2.1,y:29.5},0).to({scaleX:0.59,scaleY:0.59,rotation:280.3,x:-1.6,y:31.7},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.6,scaleY:0.6,rotation:345,x:0.5,y:39.5},0).to({x:0.8,y:40.5,alpha:0.828},2).to({_off:true},1).wait(6).to({_off:false,x:1.8,y:44.2,alpha:0.25},0).to({x:2,y:45.2,alpha:0.078},2).to({_off:true},1).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(21).to({_off:false},0).to({rotation:58.9,x:-8.7,y:5.2},2).to({_off:true},1).wait(6).to({_off:false,rotation:123.4,x:-6.6,y:12.9},0).to({rotation:142,x:-6,y:15.1},2).to({_off:true},1).wait(6).to({_off:false,rotation:206.6,x:-3.9,y:22.9},0).to({rotation:225.1,x:-3.3,y:25.1},2).to({_off:true},1).wait(6).to({_off:false,rotation:289.6,x:-1.3,y:32.9},0).to({rotation:308.1,x:-0.7,y:35.1},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.6,scaleY:0.6,rotation:345,x:0.9,y:41.1,alpha:0.75},0).to({x:1.2,y:42.1,alpha:0.578},2).to({_off:true},1).wait(6).to({_off:false,x:2.2,y:45.7,alpha:0},0).wait(28));

	// Layer 4
	this.instance_12 = new lib.shape7("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-0.5,-10.2,0.473,0.473,15);
	this.instance_12._off = true;

	this.instance_13 = new lib.shape224("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(-1.2,-7.6,0.472,0.472,42.6);
	this.instance_13._off = true;

	this.instance_14 = new lib.shape225("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(-2,-5,0.472,0.472,70.4);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(8).to({_off:false},0).to({scaleX:0.47,scaleY:0.47,rotation:33.3,x:-1,y:-8.5},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.47,scaleY:0.47,rotation:98.2,x:-2.7,y:-2.3},0).to({rotation:116.5,x:-3.1,y:-0.6},2).to({_off:true},1).wait(6).to({_off:false,rotation:181.2,x:-4.8,y:5.6},0).to({rotation:199.5,x:-5.3,y:7.4},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.47,scaleY:0.47,rotation:264.2,x:-6.9,y:13.5},0).to({scaleX:0.47,scaleY:0.47,rotation:282.7,x:-7.4,y:15.3},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.47,scaleY:0.47,rotation:347.4,x:-9,y:21.5},0).to({scaleX:0.47,scaleY:0.47,rotation:365.9,x:-9.5,y:23.2},2).to({_off:true},1).wait(6).to({_off:false,rotation:375,x:-10.4,y:26.6,alpha:0.5},0).to({x:-10.6,y:27.4,alpha:0.328},2).to({_off:true},1).wait(38));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(11).to({_off:false},0).to({rotation:61.1,x:-1.7,y:-5.8},2).to({_off:true},1).wait(6).to({_off:false,rotation:125.8,x:-3.4,y:0.3},0).to({rotation:144.1,x:-3.8,y:2.1},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.47,scaleY:0.47,rotation:208.8,x:-5.5,y:8.3},0).to({scaleX:0.47,scaleY:0.47,rotation:227.3,x:-6,y:10},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.47,scaleY:0.47,rotation:291.8,x:-7.6,y:16.2},0).to({scaleX:0.47,scaleY:0.47,rotation:310.3,x:-8.1,y:18},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.47,scaleY:0.47,rotation:375,x:-9.7,y:24.1},0).to({x:-10,y:24.9,alpha:0.828},2).to({_off:true},1).wait(6).to({_off:false,x:-10.7,y:27.8,alpha:0.25},0).to({x:-11,y:28.6,alpha:0.078},2).to({_off:true},1).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(14).to({_off:false},0).to({scaleX:0.47,scaleY:0.47,rotation:88.9,x:-2.4,y:-3.2},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.47,scaleY:0.47,rotation:153.4,x:-4.1,y:3},0).to({rotation:172,x:-4.6,y:4.7},2).to({_off:true},1).wait(6).to({_off:false,rotation:236.6,x:-6.2,y:10.9},0).to({rotation:255.1,x:-6.7,y:12.7},2).to({_off:true},1).wait(6).to({_off:false,rotation:319.6,x:-8.3,y:18.8},0).to({rotation:338.1,x:-8.8,y:20.6},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.47,scaleY:0.47,rotation:375,x:-10.1,y:25.4,alpha:0.75},0).to({x:-10.3,y:26.2,alpha:0.578},2).to({_off:true},1).wait(6).to({_off:false,x:-11.1,y:29.1,alpha:0},0).wait(35));

	// Layer 3
	this.instance_15 = new lib.shape7("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(46.5,-5.3,0.68,0.68,-15);
	this.instance_15._off = true;
	this.instance_15.filters = [new cjs.ColorFilter(0, 0, 0, 1, 242, 132, 35, 0)];
	this.instance_15.cache(1,-3,11,11);

	this.instance_16 = new lib.shape224("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(47.5,-1.5,0.679,0.679,12.6);
	this.instance_16._off = true;
	this.instance_16.filters = [new cjs.ColorFilter(0, 0, 0, 1, 242, 132, 35, 0)];
	this.instance_16.cache(1,-3,11,11);

	this.instance_17 = new lib.shape225("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(48.5,2.3,0.679,0.679,40.4);
	this.instance_17._off = true;
	this.instance_17.filters = [new cjs.ColorFilter(0, 0, 0, 1, 242, 132, 35, 0)];
	this.instance_17.cache(1,-3,11,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(8).to({_off:false},0).to({scaleX:0.68,scaleY:0.68,rotation:3.3,x:47.1,y:-2.7},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.68,scaleY:0.68,rotation:68.2,x:49.5,y:6.1},0).to({rotation:86.5,x:50.2,y:8.7},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.68,scaleY:0.68,rotation:151.2,x:52.6,y:17.5},0).to({scaleX:0.68,scaleY:0.68,rotation:169.5,x:53.2,y:20.1},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.68,scaleY:0.68,rotation:234.2,x:55.6,y:28.9},0).to({scaleX:0.68,scaleY:0.68,rotation:252.7,x:56.3,y:31.5},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.68,scaleY:0.68,rotation:317.4,x:58.7,y:40.3},0).to({scaleX:0.68,scaleY:0.68,rotation:335.9,x:59.3,y:42.8},2).to({_off:true},1).wait(6).to({_off:false,rotation:345,x:60.6,y:47.7,alpha:0.5},0).to({x:61,y:48.9,alpha:0.328},2).to({_off:true},1).wait(38));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(11).to({_off:false},0).to({rotation:31.1,x:48.1,y:1.1},2).to({_off:true},1).wait(6).to({_off:false,rotation:95.8,x:50.5,y:9.9},0).to({rotation:114.1,x:51.2,y:12.5},2).to({_off:true},1).wait(6).to({_off:false,rotation:178.8,x:53.6,y:21.3},0).to({rotation:197.3,x:54.3,y:23.9},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.68,scaleY:0.68,rotation:261.8,x:56.6,y:32.7},0).to({scaleX:0.68,scaleY:0.68,rotation:280.3,x:57.3,y:35.3},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.68,scaleY:0.68,rotation:345,x:59.7,y:44.1},0).to({x:60,y:45.3,alpha:0.828},2).to({_off:true},1).wait(6).to({_off:false,x:61.1,y:49.4,alpha:0.25},0).to({x:61.4,y:50.6,alpha:0.078},2).to({_off:true},1).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(14).to({_off:false},0).to({rotation:58.9,x:49.2,y:4.9},2).to({_off:true},1).wait(6).to({_off:false,rotation:123.4,x:51.5,y:13.7},0).to({rotation:142,x:52.2,y:16.3},2).to({_off:true},1).wait(6).to({_off:false,rotation:206.6,x:54.6,y:25.1},0).to({rotation:225.1,x:55.3,y:27.7},2).to({_off:true},1).wait(6).to({_off:false,rotation:289.6,x:57.7,y:36.5},0).to({rotation:308.1,x:58.3,y:39.1},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.68,scaleY:0.68,rotation:345,x:60.2,y:45.9,alpha:0.75},0).to({x:60.5,y:47.1,alpha:0.578},2).to({_off:true},1).wait(6).to({_off:false,x:61.6,y:51.2,alpha:0},0).wait(35));

	// Layer 2
	this.instance_18 = new lib.shape7("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(32.1,13.5,0.706,0.706);

	this.instance_19 = new lib.shape224("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(32.1,17.6,0.705,0.705,27.6);
	this.instance_19._off = true;

	this.instance_20 = new lib.shape225("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(32.1,21.6,0.705,0.705,55.4);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({scaleX:0.71,scaleY:0.71,rotation:18.3,y:16.2},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.71,scaleY:0.71,rotation:83.2,y:25.7},0).to({scaleX:0.71,scaleY:0.71,rotation:101.5,y:28.4},2).to({_off:true},1).wait(6).to({_off:false,rotation:166.2,y:38},0).to({scaleX:0.71,scaleY:0.71,rotation:184.5,y:40.7},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.71,scaleY:0.71,rotation:249.2,y:50.2},0).to({scaleX:0.71,scaleY:0.71,rotation:267.7,y:52.9},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.71,scaleY:0.71,rotation:332.4,y:62.5},0).to({scaleX:0.71,scaleY:0.71,rotation:350.9,y:65.2},2).to({_off:true},1).wait(6).to({_off:false,rotation:360,y:70.4,alpha:0.5},0).to({y:71.6,alpha:0.328},2).to({_off:true},1).wait(46));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(3).to({_off:false},0).to({rotation:46.1,y:20.3},2).to({_off:true},1).wait(6).to({_off:false,rotation:110.8,y:29.8},0).to({rotation:129.1,y:32.5},2).to({_off:true},1).wait(6).to({_off:false,rotation:193.8,y:42.1},0).to({rotation:212.3,y:44.8},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.71,scaleY:0.71,rotation:276.8,y:54.3},0).to({scaleX:0.71,scaleY:0.71,rotation:295.3,y:57},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.71,scaleY:0.71,rotation:360,y:66.6},0).to({y:67.8,alpha:0.828},2).to({_off:true},1).wait(6).to({_off:false,y:72.3,alpha:0.25},0).to({y:73.5,alpha:0.078},2).to({_off:true},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(6).to({_off:false},0).to({rotation:73.9,y:24.4},2).to({_off:true},1).wait(6).to({_off:false,rotation:138.4,y:33.9},0).to({rotation:157,y:36.6},2).to({_off:true},1).wait(6).to({_off:false,rotation:221.6,y:46.2},0).to({rotation:240.1,y:48.9},2).to({_off:true},1).wait(6).to({_off:false,rotation:304.6,y:58.4},0).to({rotation:323.1,y:61.1},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.71,scaleY:0.71,rotation:360,y:68.5,alpha:0.75},0).to({y:69.7,alpha:0.578},2).to({_off:true},1).wait(6).to({_off:false,y:74.2,alpha:0},0).wait(43));

	// Layer 1
	this.instance_21 = new lib.shape7("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(6.8,-3,0.68,0.68);
	this.instance_21.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 255, 255, 0)];
	this.instance_21.cache(1,-3,11,11);

	this.instance_22 = new lib.shape224("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(6.8,1,0.679,0.679,27.6);
	this.instance_22._off = true;
	this.instance_22.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 255, 255, 0)];
	this.instance_22.cache(1,-3,11,11);

	this.instance_23 = new lib.shape225("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(6.8,4.9,0.679,0.679,55.4);
	this.instance_23._off = true;
	this.instance_23.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 255, 255, 0)];
	this.instance_23.cache(1,-3,11,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({scaleX:0.68,scaleY:0.68,rotation:18.3,y:-0.3},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.68,scaleY:0.68,rotation:83.2,y:8.8},0).to({rotation:101.5,y:11.4},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.68,scaleY:0.68,rotation:166.2,y:20.6},0).to({scaleX:0.68,scaleY:0.68,rotation:184.5,y:23.2},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.68,scaleY:0.68,rotation:249.2,y:32.4},0).to({scaleX:0.68,scaleY:0.68,rotation:267.7,y:35},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.68,scaleY:0.68,rotation:332.4,y:44.2},0).to({scaleX:0.68,scaleY:0.68,rotation:350.9,y:46.8},2).to({_off:true},1).wait(6).to({_off:false,rotation:360,y:51.8,alpha:0.5},0).to({y:53.1,alpha:0.328},2).to({_off:true},1).wait(46));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(3).to({_off:false},0).to({rotation:46.1,y:3.6},2).to({_off:true},1).wait(6).to({_off:false,rotation:110.8,y:12.8},0).to({rotation:129.1,y:15.4},2).to({_off:true},1).wait(6).to({_off:false,rotation:193.8,y:24.6},0).to({rotation:212.3,y:27.2},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.68,scaleY:0.68,rotation:276.8,y:36.4},0).to({scaleX:0.68,scaleY:0.68,rotation:295.3,y:39},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.68,scaleY:0.68,rotation:360,y:48.2},0).to({y:49.4,alpha:0.828},2).to({_off:true},1).wait(6).to({_off:false,y:53.7,alpha:0.25},0).to({y:54.9,alpha:0.078},2).to({_off:true},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(6).to({_off:false},0).to({rotation:73.9,y:7.5},2).to({_off:true},1).wait(6).to({_off:false,rotation:138.4,y:16.7},0).to({rotation:157,y:19.3},2).to({_off:true},1).wait(6).to({_off:false,rotation:221.6,y:28.5},0).to({rotation:240.1,y:31.1},2).to({_off:true},1).wait(6).to({_off:false,rotation:304.6,y:40.3},0).to({rotation:323.1,y:42.9},2).to({_off:true},1).wait(6).to({_off:false,scaleX:0.68,scaleY:0.68,rotation:360,y:50,alpha:0.75},0).to({y:51.2,alpha:0.578},2).to({_off:true},1).wait(6).to({_off:false,y:55.5,alpha:0},0).wait(43));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.9,-3.4,30.2,21.3);


// stage content:
(lib.skin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{start:0,"buttonshow-impression":21,lastframe:61});

	// timeline functions:
	this.frame_0 = function() {
		if (!(window.ntp && typeof window.ntp.skinEvent === 'function')) {
			window.ntp = window.ntp || {};
			window.ntp.skinEvent = function(event) {
				console.log('skinEvent', event);
			}
		}
		window.ntp.skinEvent('start');
		/*the banner should have object named video, which is present and fully transparent, it should not receive clicks. 
		Khung Player Video khong duoc xoa, khong duoc rename, khong duoc disable, co the chinh bat ky kich thuoc va vi tri nao cung duoc
		*/
		
		var bannerProps = {
			bannerWidth: this.nominalBounds.width,
			bannerHeight: this.nominalBounds.height,	
			videoX: this.video.x,
			videoY: this.video.y,
			videoWidth: this.video.nominalBounds.width * this.video.scaleX,
			videoHeight: this.video.nominalBounds.height * this.video.scaleY,
			
		};
		
		var videoObjectPlace = {
			width: bannerProps.videoWidth / bannerProps.bannerWidth * 100,
			height: bannerProps.videoHeight / bannerProps.bannerHeight * 100,
			left: bannerProps.videoX / bannerProps.bannerWidth * 100,
			top: bannerProps.videoY / bannerProps.bannerHeight * 100,
		}
		window.ntp.skinEvent('videoPlace=width: '+ videoObjectPlace.width +
				'%;height: ' + videoObjectPlace.height +
				'%;left: ' + videoObjectPlace.left + 
				'%;top: ' + videoObjectPlace.top + '%');
		this.clickbtn.addEventListener("click", onClick.bind(this));
		function onClick() {
			window.ntp.skinEvent('click');
		}
	}
	this.frame_21 = function() {
		if (window.ntp && typeof window.ntp.skinEvent === 'function') {
		   window.ntp.skinEvent('buttonShow');
		}
	}
	this.frame_61 = function() {
		this.stop();
		if (window.ntp && typeof window.ntp.skinEvent === 'function') {
		   window.ntp.skinEvent('lastFrame');
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(40).call(this.frame_61).wait(1));

	// !! video guide !!
	this.video = new lib.videoguide();
	this.video.parent = this;
	this.video.setTransform(1607,36.1,0.714,0.714);

	this.timeline.addTween(cjs.Tween.get(this.video).wait(62));

	// !! click button !!
	this.clickbtn = new lib.Symbol2_1();
	this.clickbtn.parent = this;
	this.clickbtn.setTransform(1420,284);
	new cjs.ButtonHelper(this.clickbtn, 0, 1, 2, false, new lib.Symbol2_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickbtn).wait(62));

	// !! fix size !!
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("Ejd3AsYMAAAhYvMG7vAAAMAAABYvg");
	this.shape.setTransform(1420,284);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(62));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ejd3AsYMAAAhYvMG7vAAAMAAABYvg");
	mask.setTransform(1420,284);

	// ALT6 copy
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(1271,252,0.2,0.2,0,0,0,153.3,67.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({regX:153,regY:67,scaleX:1,scaleY:1,x:1051,alpha:1},7).wait(41));

	// Logo 9.9 copy
	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1071,89,1.5,1.5,0,0,0,159,80);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},7).wait(48));

	// Name
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1754,317.5,1,1,0,0,0,95,14.5);
	this.instance_2.alpha = 0;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:1704,alpha:1},7).wait(55));

	// CR7 copy
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1359.5,241.5,1,1,0,0,0,205.5,211.5);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:1429.5},7).wait(55));

	// Layer 7
	this.instance_4 = new lib.sprite226();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1032.3,26.4,1.629,1.629,-10);

	this.instance_5 = new lib.sprite226();
	this.instance_5.parent = this;
	this.instance_5.setTransform(986.4,54.6,2.259,2.258,-30);

	var maskedShapeInstanceList = [this.instance_4,this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(62));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1420,284,2840,568);
// library properties:
lib.properties = {
	width: 2840,
	height: 568,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/ALT6copy.png?1566812336475", id:"ALT6copy"},
		{src:"images/CR7copy.png?1566812336475", id:"CR7copy"},
		{src:"images/Logo99copy.png?1566812336475", id:"Logo99copy"},
		{src:"images/Name.png?1566812336475", id:"Name"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;