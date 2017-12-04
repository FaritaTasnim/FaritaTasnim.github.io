class Element
	constructor:() ->

	move: (dx, dy) ->
		@obj.attr(cx: +dx, cy: +dy)

	start: () ->

	stop: () ->
		x = @obj.attr("cx")
		y = @obj.attr("cy")
		@obj.attr(cx: +x, cy: +y)

	drag: () ->
		@obj.drag()
	
