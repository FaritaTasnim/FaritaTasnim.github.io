$ ->
	paper = Snap(1000, 2000)
	x = 100 #or last saved state (how to)
	y = 100
	r = 100

	hole = new Circle(paper, x , y , r, 0, "#fc0")
	hole.render()
	hole.drag()
	hole.obj.dblclick () ->
		hole.changeColor("red")
