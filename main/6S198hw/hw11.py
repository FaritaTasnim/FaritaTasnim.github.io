import numpy as np 

def one_hot_seq(word):
	seq = []
	for char in word:
		seq.append(np.array([[1 if char == c else 0 for c in ['a','d','p','r','s','w']]]).T)
	return seq

# print (one_hot_seq('draw'))

def feedforward(word, Wss, Wsx, s0):
	s = s0
	for x in one_hot_seq(word):
		s = np.tanh(Wss@s + Wsx@x)
		# print (s)
	return s

Wss = np.array([[1,0],[0,1]])
Wsx = np.array([[0,10,-.5,-.5,3,0],[0,3,-.5,-.5,3,0]])
s0 = np.array([[0],[0]])

print ('draw', feedforward('draw', Wss, Wsx, s0))
print ('saw', feedforward('saw', Wss, Wsx, s0))
print ('paw', feedforward('paw', Wss, Wsx, s0))
print ('raw', feedforward('raw', Wss, Wsx, s0))