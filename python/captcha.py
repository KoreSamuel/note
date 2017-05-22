'''product a captcha code'''
# !/usr/bin/env python3
# -*- coding: utf-8 -*-

from PIL import Image, ImageDraw, ImageFont, ImageFilter

import random

def rnd_char():
    return chr(random.randint(65, 90))

def rnd_color():
    return (random.randint(64, 255), random.randint(64, 255), random.randint(64, 255))

def rnd_color2():
    return (random.randint(32, 127), random.randint(32, 127), random.randint(32, 127))

width = 60 * 4
height = 60

image = Image.new('RGB', (width, height), (255, 255, 255))

font = ImageFont.truetype('C:/windows/Fonts/Arial.ttf', 36)

draw = ImageDraw.Draw(image)

for x in range(width):
    for y in range(height):
        draw.point((x, y), fill=rnd_color())

code = []
for t in range(4):
    ch = rnd_char()
    code.append(ch)
    draw.text((64 * t + 10, 10), ch, font=font, fill=rnd_color2())

image = image.filter(ImageFilter.BLUR)
image.save('captcha.jpg', 'jpeg')
print('the captcha code is : %s.' % ''.join(code))