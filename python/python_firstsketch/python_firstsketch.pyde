def setup():
    size(480, 120)

def draw():
    if  mousePressed:
        fill(0,255,0)
    else:
        fill(0)
    rect(mouseX, mouseY, 50, 50,7)
