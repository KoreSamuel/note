'''programming deal image use pil'''
# !/usr/bin/env python3
# -*- coding: utf-8 -*-

from PIL import Image, ImageFilter
im = Image.open('timg.jpg')

w, h = im.size
print('image size %sx%s' % (w, h)) #image size 246x263

im.thumbnail((w//2, h//2))
im.save('thumbnail.jpg', 'jpeg')
w, h = im.size
print('image size %sx%s' % (w, h)) # image size 123x131

im2 = im.filter(ImageFilter.BLUR)
im2.save('blur.jpg', 'jpeg')