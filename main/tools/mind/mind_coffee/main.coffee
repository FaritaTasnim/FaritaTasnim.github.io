$ ->
	paper = Snap(1000, 2000)

	hole = new Circle(paper, x , y , r, 0, "#fc0")
	hole.render()
	hole.drag()
	hole.obj.dblclick () ->
		hole.changeColor("red")
