class Circle extends Element
	constructor: (@snap, @x, @y, @r, @id, @color, @obj) ->

	render:() ->
		@obj = @snap.circle(@x, @y, @r).attr(id: @id, fill: @color)
