# AT24XX

AT24CXX eeprom package for pxt

Author: shaoziyang  
Date:   2018.May  

![](https://raw.githubusercontent.com/microbit-makecode-packages/AT24CXX/master/icon.png)  


## usage

open your microbit makecode project, in Add Package, paste  

https://github.com/microbit-makecode-packages/AT24CXX  

to search box then search.

## I2C Address  

- 80

## API

- **function write_byte(addr: number, dat: number)**  
write a byte to special address.

- **function read_byte(addr: number)**  
read a byte from special address.

- **function write_word(addr: number, dat: number)**  
write a word to special address.

- **function read_word(addr: number)**  
read a word from special address.

- **function write_dword(addr: number, dat: number)**  
write a dword to special address.

- **function read_dword(addr: number)**  
read a dword from special address.


## Demo

![](https://raw.githubusercontent.com/microbit-makecode-packages/AT24CXX/master/demo.jpg)

## License

MIT

Copyright (c) 2018, microbit/micropython Chinese community  

## Supported targets

* for PXT/microbit


[From microbit/micropython Chinese community](http://www.micropython.org.cn)
