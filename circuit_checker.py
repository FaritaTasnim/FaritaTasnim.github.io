import numpy as np
import copy

def hole_to_coord(hole):
	if (0 <= hole < 100):
		if (hole < 50):
			return [hole + 2 + (hole/5) , 0]
		else:
			return [(hole-50) + 2 + ((hole-50)/5) , 1]
	elif (100 <= hole < 415):
		return [(hole-100)/5, hole-100 + 2 - 5*((hole-100)/5)]
	elif (415 <= hole < 730):
		return [(hole-415)/5, hole-415 + 7 - 5*((hole-415)/5)]
	elif (730 <= hole < 830):
		hole2 = hole - 730;
		if (hole2 < 50):
			return [hole2 + 2 + (hole2/5) , 12]
		else:
			return [(hole2-50) + 2 + ((hole2-50)/5) , 13]

#how do i condense this (need abstraction)
#how do i account for two-wire or three-wire connections
def wire_conn(hole1, hole2, edges):
	coord1, coord2 = hole_to_coord(hole1), hole_to_coord(hole2)
	for edge in edges:
		if edge[0] == "W":
			w1, w2 = hole_to_coord(edge[2][1]), hole_to_coord(edge[2][2])
			#short to short
			if ((2 <= w1[1] <= 11) and (2 <= w2[1] <= 11)):
				if((2 <= coord1[1] <= 11) and (2 <= coord2[1] <= 11) and (((coord1[0] == w1[0]) and (coord2[0] == w2[0])) or ((coord1[0] == w2[0]) and (coord2[0] == w1[0])))):
					return True
			#long to short
			elif ((2 <= w1[1] <= 6) and w2[1] in [0,1,12,13]):
				if((2 <= coord1[1] <= 6) and (coord1[0] == w1[0]) and (coord2[1] == w2[1])):
					return True
				elif((2 <= coord2[1] <= 6) and (coord2[0] == w1[0]) and (coord1[1] == w2[1])):
					return True
			elif ((7 <= w1[1] <= 11) and w2[1] in [0,1,12,13]):
				if((7 <= coord1[1] <= 11) and (coord1[0] == w1[0]) and (coord2[1] == w2[1])):
					return True
				elif((7 <= coord2[1] <= 11) and (coord2[0] == w1[0]) and (coord1[1] == w2[1])):
					return True
			elif ((2 <= w2[1] <= 6) and w1[1] in [0,1,12,13]):
				if((2 <= coord1[1] <= 6) and (coord1[0] == w2[0]) and (coord2[1] == w1[1])):
					return True
				elif((2 <= coord2[1] <= 6) and (coord2[0] == w2[0]) and (coord1[1] == w1[1])):
					return True
			elif ((7 <= w2[1] <= 11) and w1[1] in [0,1,12,13]):
				if((7 <= coord1[1] <= 11) and (coord1[0] == w2[0]) and (coord2[1] == w1[1])):
					return True
				elif((7 <= coord2[1] <= 11) and (coord2[0] == w2[0]) and (coord1[1] == w1[1])):
					return True
			#long to long
			elif (w1[1] in [0,1,12,13] and w2[1] in [0,1,12,13]):
				if((((coord1[1] == w1[1]) and (coord2[1] == w2[1])) or ((coord1[1] == w2[1]) and (coord2[1] == w1[1])))):
					return True

def board_conn(hole1, hole2):
	coord1, coord2 = hole_to_coord(hole1), hole_to_coord(hole2)
	if ((coord1[0] == coord2[0]) and 2 <= coord1[1] <= 6 and 2 <= coord2[1] <= 6):
		return True
	elif ((coord1[0] == coord2[0]) and 7 <= coord1[1] <= 11 and 7 <= coord2[1] <= 11):
		return True
	elif ((coord1[1] in [0,1,12,13]) and (coord1[1] == coord2[1])):
		return True
	return False

def create_node(compedge, k, hole, edges, explored):
	node = [[compedge[0],compedge[1], k]]
	explored.append([compedge[0],compedge[1], k])
	for edge in edges:
		if ((edge[0] != "W") and (edge != compedge)):
			for key in edge[2]:
				#print check_conn(edge[2][key], hole, edges)
				if (([edge[0], edge[1], key] not in explored) and (board_conn(edge[2][key], hole) or wire_conn(edge[2][key], hole, edges))):
					node.append([edge[0], edge[1], key])
					explored.append([edge[0], edge[1], key])
	return node


def edges_to_nodes(edges):
	nodes, out, explored = [], [], []
	for edge in edges:
		if (edge[0] != "W"):
			for key in edge[2]:
				nodes.append(create_node(edge, key, edge[2][key], edges, explored))

	for node in nodes:
		if len(node) > 1:
			out.append(node)
	return out

c1 = [["R1", "2.2K", {1: 10, 2: 170}], ["C1", "1.0u", {1: 171, 2: 186}], ["W", "0", {1: 185, 2: 63}], ["V1", "5.0V", {"+": 49, "-": 99}], ["R2", "2.2K", {1: 190, 2: 64}], ["W", "0", {1: 172, 2: 192}]]

c2 = [["R1", "2.2K", {1: 0, 2: 110}], ["V1", "5.0V", {"+": 49, "-": 99}], ["R2", "1.0K", {1: 114, 2: 425}], ["C1", "2.2u", {1: 426, 2: 441}], ["D1", "0", {1: 440, 2: 129}], ["W", "0", {1: 125, 2: 53}]]

c3 = [["W", "0", {1: 0, 2: 110}], ["V1", "5.0V", {"+": 49, "-": 99}], ["R2", "1.0K", {1: 114, 2: 425}], ["C1", "2.2u", {1: 426, 2: 441}], ["D1", "0", {1: 440, 2: 129}], ["W", "0", {1: 125, 2: 53}]]

c4 = [["O1", "LM356", {1: 425, 2: 430, 3: 435, 4: 440, 5: 129, 6: 124, 7: 119, 8: 114}], ["V1", "5.0V", {"+": 49, "-": 99}], ["W", "0", {1: 115, 2: 1}], ["W", "0", {1: 49, 2: 779}], ["W", "0", {1: 99, 2: 829}], ["W", "0", {1: 444, 2: 783}]]

a = edges_to_nodes(c1)
print ""
print "Nodes:"
for node in a:
	print node
	print ""

b = edges_to_nodes(c2)
print ""
print "Nodes:"
for node in b:
	print node
	print ""

c = edges_to_nodes(c3)
print ""
print "Nodes:"
for node in c:
	print node
	print ""

d = edges_to_nodes(c4)
print ""
print "Nodes:"
for node in d:
	print node
	print ""
