class Hole
	constructor: (@x, @y, @r) ->

	render: (snap, id) ->
		snap.circle(@x, @y, @r).attr(id: id)
